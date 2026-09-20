#!/usr/bin/env node
// voice-aimax.mjs — Sinh giọng đọc tiếng Việt bằng AIMAX Studio (MiniMax/Vbee) + tạo timing.json.
//
// Cách dùng:
//   node scripts/voice-aimax.mjs --project projects/<slug> [options]
//
// Options:
//   --project <dir>   Thư mục project (chứa script.md). BẮT BUỘC.
//   --dry-run         Không gọi API; ước lượng thời lượng theo số ký tự.
//   --fps <n>         FPS ghi vào timing.json (mặc định 30).
//   --voice-id <id>   Ghi đè voice_id (mặc định hn_male_phuthang_stor80dt_48k-fhg).
//   --speed <n>       Tốc độ đọc (mặc định 0.90).
//   --cps <n>         Ký tự/giây khi dry-run (mặc định 15).
//   --force           Sinh lại ngay cả khi mp3+srt đã tồn tại.
//
// Env / .env:
//   AIMAX_API_KEY   (bắt buộc khi KHÔNG dry-run) — đặt trong scripts/.env hoặc DuMuc-HyperFrame/.env
//
// Đầu ra trong <project>:
//   voice/seg-XX.mp3, voice/seg-XX.srt, voice/narration.mp3, timing.json

import {parseScript, estimateDuration} from './lib/parse-script.mjs';
import {loadEnv, synthesize} from './lib/tts-aimax.mjs';
import {mkdirSync, writeFileSync, existsSync} from 'node:fs';
import {execFileSync, spawnSync} from 'node:child_process';
import {join, resolve, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ── Cấu hình mặc định AIMAX (giống remotion/pipeline/config.json) ──────────
const DEFAULT_CFG = {
  api: {
    baseUrl: 'https://www.aimaxstudio.com/api/v1',
    pollIntervalMs: 4000,
    timeoutMs: 900000,
  },
  tts: {
    provider: 'minimax',
    voice_id: 'uv_5cee29af',
    voice_name: 'uv_5cee29af',
    model: 'speech-2.8-hd',
    language: 'Vietnamese',
    speed: 0.96,
    pitch: 0,
    vol: 1.0,
    normalize: true,
    enable_srt: true,
  },
};

function parseArgs(argv) {
  const a = {fps: 30, cps: 15, dryRun: false, force: false};
  for (let i = 2; i < argv.length; i++) {
    const k = argv[i];
    if (k === '--dry-run') a.dryRun = true;
    else if (k === '--force') a.force = true;
    else if (k === '--project') a.project = argv[++i];
    else if (k === '--fps') a.fps = parseInt(argv[++i], 10);
    else if (k === '--cps') a.cps = parseFloat(argv[++i]);
    else if (k === '--voice-id') a.voiceId = argv[++i];
    else if (k === '--speed') a.speed = parseFloat(argv[++i]);
    else throw new Error(`Tham số không hiểu: ${k}`);
  }
  if (!a.project) throw new Error('Thiếu --project <dir>');
  return a;
}

// ffmpeg: ưu tiên hệ thống, fallback ffmpeg-static (giống mix-bgm.mjs). Trả null nếu không có.
function ffmpegBin() {
  const sys = spawnSync('ffmpeg', ['-version'], {encoding: 'utf8'});
  if (sys.status === 0) return 'ffmpeg';
  const stat = join(__dirname, 'node_modules', 'ffmpeg-static', process.platform === 'win32' ? 'ffmpeg.exe' : 'ffmpeg');
  return existsSync(stat) ? stat : null;
}

// Đo thời lượng THẬT của file audio (giây) bằng cách decode tới null — chính xác, gồm cả lặng đuôi.
function mediaDur(bin, file) {
  const r = spawnSync(bin, ['-i', file, '-f', 'null', '-'], {encoding: 'utf8'});
  const m = [...(r.stderr || '').matchAll(/time=(\d+):(\d+):(\d+\.\d+)/g)];
  if (!m.length) return 0;
  const l = m[m.length - 1];
  return (+l[1]) * 3600 + (+l[2]) * 60 + (+l[3]);
}

function makeSilence(bin, file, seconds) {
  execFileSync(bin, [
    '-y', '-f', 'lavfi', '-i', 'anullsrc=r=44100:cl=mono',
    '-t', String(seconds), '-q:a', '9', file,
  ], {stdio: 'ignore'});
}

async function main() {
  const args = parseArgs(process.argv);
  const projectDir = resolve(args.project);
  const scriptPath = join(projectDir, 'script.md');
  if (!existsSync(scriptPath)) throw new Error(`Không thấy ${scriptPath}`);

  const voiceDir = join(projectDir, 'voice');
  mkdirSync(voiceDir, {recursive: true});

  // Áp dụng override từ CLI
  const cfg = JSON.parse(JSON.stringify(DEFAULT_CFG));
  if (args.voiceId) cfg.tts.voice_id = args.voiceId;
  if (args.speed != null) cfg.tts.speed = args.speed;

  let apiKey = null;
  const ffBin = ffmpegBin();
  const hasFfmpeg = !!ffBin;
  if (!args.dryRun) {
    apiKey = loadEnv();
  }

  const items = parseScript(scriptPath);
  const cues = [];
  const parts = [];   // thứ tự phát THẬT (gồm cả gap): { file?, seconds?, cue? }
  let idx = 0;
  const slug = projectDir.split(/[\\/]/).pop();

  for (const item of items) {
    const padded = String(idx).padStart(2, '0');

    if (item.type === 'gap') {
      if (!args.dryRun && hasFfmpeg) {
        const f = join(voiceDir, `gap-${padded}.mp3`);
        makeSilence(ffBin, f, item.seconds);
        parts.push({file: f, seconds: item.seconds});
      } else {
        if (!args.dryRun) process.stderr.write(`  → gap-${padded}: bỏ qua ghép (ffmpeg không có)\n`);
        parts.push({seconds: item.seconds});
      }
      idx++;
      continue;
    }

    // cue
    const segName = `seg-${padded}.mp3`;
    const srtName = `seg-${padded}.srt`;
    const segPath = join(voiceDir, segName);
    const srtPath = join(voiceDir, srtName);

    const cue = {
      id: item.id,
      chapter: item.chapter,
      text: item.text,
      file: args.dryRun ? null : `voice/${segName}`,
      start: 0,
      duration: 0,
    };

    if (args.dryRun) {
      cue.duration = round(estimateDuration(item.text, args.cps));
      parts.push({cue});
    } else {
      const alreadyDone = !args.force && existsSync(segPath) && existsSync(srtPath);
      if (alreadyDone) {
        process.stderr.write(`  → ${item.id}: đã có, bỏ qua (dùng --force để sinh lại)\n`);
      } else {
        process.stderr.write(`  → TTS ${item.id} (${item.text.length} ký tự)...\n`);
        await synthesize(item.text, {mp3Path: segPath, srtPath, cfg, key: apiKey, label: item.id});
      }
      parts.push({file: segPath, cue});
    }
    cues.push(cue);
    idx++;
  }

  // ── Dựng timeline từ số đo THẬT của mp3 (gồm lặng đuôi), KHÔNG dùng mốc .srt ──
  // Mốc .srt chỉ tính đến hết lời nói; mỗi mp3 có ~0.5s lặng đuôi → cộng dồn gây lệch phụ đề.
  let start = 0;
  for (const p of parts) {
    let d;
    if (args.dryRun) d = p.cue ? p.cue.duration : (p.seconds || 0);
    else if (p.file && hasFfmpeg) d = mediaDur(ffBin, p.file);
    else d = p.seconds || (p.cue ? estimateDuration(p.cue.text, args.cps) : 0);
    if (p.cue) {p.cue.start = round(start); if (!args.dryRun) p.cue.duration = round(d);}
    start += d;
  }
  let totalDuration = round(start);

  // ── Ghép narration.mp3: RE-ENCODE liên tục + đồng nhất sample rate ──
  // (KHÔNG -c copy: mix 32k/44k khiến concat dồn padding, mốc segment lệch file phát.)
  let narration = null;
  const segFiles = parts.filter((p) => p.file).map((p) => p.file);
  if (!args.dryRun && segFiles.length) {
    if (!hasFfmpeg) {
      process.stderr.write('  ⚠ ffmpeg không có — bỏ qua ghép narration.mp3.\n');
      if (segFiles.length === 1) {
        const {copyFileSync} = await import('node:fs');
        copyFileSync(segFiles[0], join(voiceDir, 'narration.mp3'));
        narration = 'voice/narration.mp3';
      }
    } else {
      const listPath = join(voiceDir, 'concat.txt');
      writeFileSync(listPath, segFiles.map((f) => `file '${f.replace(/\\/g, '/').replace(/'/g, "'\\''")}'`).join('\n'));
      const outPath = join(voiceDir, 'narration.mp3');
      execFileSync(ffBin, ['-y', '-f', 'concat', '-safe', '0', '-i', listPath,
        '-ar', '44100', '-c:a', 'libmp3lame', '-q:a', '2', outPath], {stdio: 'ignore'});
      narration = 'voice/narration.mp3';

      // Hiệu chỉnh tuyến tính: khớp cumulative với độ dài THẬT của file đã ghép (mp3 re-encode
      // có thể lệch ~1-2s do framing). Neo mốc cuối = tổng thật → sai số <0.5s ở mọi điểm.
      const realTotal = mediaDur(ffBin, outPath);
      if (realTotal > 0 && totalDuration > 0 && Math.abs(realTotal - totalDuration) > 0.1) {
        const scale = realTotal / totalDuration;
        for (const c of cues) {c.start = round(c.start * scale); c.duration = round(c.duration * scale);}
        process.stderr.write(`  ↳ hiệu chỉnh timeline ×${scale.toFixed(5)} (${totalDuration}s → ${round(realTotal)}s thật)\n`);
        totalDuration = round(realTotal);
      }
    }
  }

  const timing = {
    slug,
    fps: args.fps,
    totalDuration,
    dryRun: args.dryRun,
    narration,
    voice: {
      provider: 'aimax-minimax',
      voice_id: cfg.tts.voice_id,
      voice_name: cfg.tts.voice_name,
      model: cfg.tts.model,
      speed: cfg.tts.speed,
    },
    cues,
  };
  const timingPath = join(projectDir, 'timing.json');
  writeFileSync(timingPath, JSON.stringify(timing, null, 2));

  // ── timing.dryrun.json — mốc thời gian NHÁP, giữ lại vĩnh viễn ──
  // visual-builder dựng hoạt ảnh trên timeline dry-run (trước khi có giọng thật). Khi bản
  // thật về, finalize-remap.mjs cần CẢ HAI mốc để nội suy _OLDT→_NEWT. Nếu không snapshot ở
  // đây, lần chạy thật sẽ ghi đè timing.json và mốc nháp mất luôn → phải remap tay.
  const dryPath = join(projectDir, 'timing.dryrun.json');
  if (args.dryRun) {
    writeFileSync(dryPath, JSON.stringify(timing, null, 2));
  } else if (!existsSync(dryPath)) {
    // Chạy thật mà chưa từng dry-run: hình đã authored ngay trên timeline thật → remap là
    // ánh xạ đồng nhất. Ghi bản sao để finalize-remap.mjs vẫn chạy được (_OLDT === _NEWT).
    writeFileSync(dryPath, JSON.stringify({...timing, dryRun: true, narration: null}, null, 2));
  }

  process.stderr.write(
    `\n✓ ${args.dryRun ? '[DRY-RUN] ' : ''}${cues.length} cue, tổng ${totalDuration}s ` +
    `(${(totalDuration / 60).toFixed(1)} phút)\n` +
    `  timing.json → ${timingPath}\n` +
    (args.dryRun ? `  timing.dryrun.json → ${dryPath} (mốc nháp cho finalize-remap)\n` : '') +
    (narration ? `  narration  → ${join(projectDir, narration)}\n` : '')
  );
}

function round(n) { return Math.round(n * 100) / 100; }

main().catch((e) => {process.stderr.write(`\n✗ ${e.message}\n`); process.exit(1);});
