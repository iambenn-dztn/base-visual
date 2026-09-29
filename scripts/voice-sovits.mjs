#!/usr/bin/env node
// voice-sovits.mjs — Sinh giọng đọc TIẾNG NHẬT bằng GPT-SoVITS chạy local + tạo timing.json.
//
// Thay cho voice-aimax.mjs (AIMAX/MiniMax, giọng Việt). Giữ NGUYÊN mọi logic đã trả giá để
// học được ở bản cũ — chỉ đổi khâu gọi TTS:
//   • Thời lượng đo từ ĐỘ DÀI FILE THẬT (decode tới null), KHÔNG lấy mốc .srt.
//   • Ghép narration bằng RE-ENCODE liên tục, không -c copy.
//   • Hiệu chỉnh tuyến tính neo vào tổng thật sau khi ghép.
//   • Dry-run giữ timing.dryrun.json cho finalize-remap.mjs.
//   • Bỏ qua segment đã sinh (resume), --force để làm lại.
//
// Cách dùng:
//   node scripts/voice-sovits.mjs --project projects/<slug> [tuỳ chọn]
//
//   --dry-run        Không gọi TTS, chỉ ước lượng thời lượng (miễn phí, nhanh).
//   --voice <tên>    Giọng theo /voices (mặc định keita).
//   --speed <n>      0.5–2.0 (mặc định 0.95).
//   --seed <n>       Mặc định 42. Cùng seed + cùng chữ → cùng byte (đã kiểm chứng).
//   --cps <n>        Ký tự/giây cho dry-run (mặc định 5.1 — ĐO THẬT, xem dưới).
//   --url <base>     Mặc định http://127.0.0.1:9880 (hoặc biến môi trường SOVITS_URL).
//   --lufs <n>       Bật chuẩn hoá âm lượng của server (ví dụ -16).
//   --force          Sinh lại cả segment đã có.
//
// GIỌNG CỦA KÊNH: **keita** — nam trung niên, F0 trung vị 99 Hz, chậm và trầm.
//   Clone từ Edge TTS ja-JP-KeitaNeural với --rate=-18% --pitch=-8Hz (người vận hành chọn
//   ngày 2026-09-21 sau khi nghe 7 mẫu). File gốc: referents/ja-JP-KeitaNeural-slow-low.mp3.
//   Giọng nanami (nữ, 239 Hz) vẫn còn trên server nhưng KHÔNG dùng cho kênh này.
//
// ĐO THẬT ngày 2026-09-21 trên MỘT ĐOẠN VĂN THẬT (143 ký tự, nhiều câu), seed 42:
//   keita  speed 0.90 → 30.80s = 4.64 cps · 0.95 → 29.22s = **4.89 cps** · 1.0 → 27.76s = 5.15
//   nanami speed 0.95 → 27.78s = 5.15 cps (để đối chiếu)
//   → Mặc định **speed 0.95 + cps 4.9**. Đổi speed thì đổi luôn cps theo bảng trên.
//   ⚠ Phải đo trên ĐOẠN VĂN, không đo câu rời: câu rời cho ~5.8 cps vì không có dấu 。、
//     giữa câu để TTS nghỉ nhịp. Lấy số câu rời sẽ làm kịch bản thiếu ~15% chữ mà dry-run
//     vẫn báo đủ giờ.
//   ⚠ Hằng số cũ của tiếng Việt là 15 cps — dùng lại sẽ ước lượng HỤT ~3 lần.
//
// Đầu ra: voice/seg-XX.wav, voice/narration.mp3, timing.json, timing.dryrun.json
//   ⚠ KHÔNG có .srt — server này không sinh. gen-captions.mjs tự cắt câu tiếng Nhật
//     theo 。、 (xem splitJa ở đó), không cần SRT.

import {existsSync, mkdirSync, writeFileSync, copyFileSync} from 'node:fs';
import {join, resolve} from 'node:path';
import {execFileSync, spawnSync} from 'node:child_process';
import {parseScript} from './lib/parse-script.mjs';
import {synthesize, health} from './lib/tts-sovits.mjs';

const DEFAULTS = {
  voice: 'keita',   // nam trung niên 99 Hz — giọng chốt của kênh
  lang: 'ja',
  speed: 0.95,      // đo được 4.89 cps ở tốc độ này
  seed: 42,
  cps: 4.9,
  fps: 30,
};

function parseArgs(argv) {
  const a = {project: null, dryRun: false, force: false, ...DEFAULTS, url: undefined, lufs: null};
  for (let i = 2; i < argv.length; i++) {
    const k = argv[i];
    if (k === '--project') a.project = argv[++i];
    else if (k === '--dry-run') a.dryRun = true;
    else if (k === '--force') a.force = true;
    else if (k === '--voice') a.voice = argv[++i];
    else if (k === '--speed') a.speed = parseFloat(argv[++i]);
    else if (k === '--seed') a.seed = parseInt(argv[++i], 10);
    else if (k === '--cps') a.cps = parseFloat(argv[++i]);
    else if (k === '--url') a.url = argv[++i];
    else if (k === '--lufs') a.lufs = parseFloat(argv[++i]);
    else if (k === '--fps') a.fps = parseInt(argv[++i], 10);
  }
  if (!a.project) throw new Error('Thiếu --project projects/<slug>');
  return a;
}

function ffmpegBin() {
  const local = resolve('scripts/ffbin/ffmpeg.exe');
  if (existsSync(local)) return local;
  const r = spawnSync('ffmpeg', ['-version'], {encoding: 'utf8'});
  return r.status === 0 ? 'ffmpeg' : null;
}

/** Thời lượng THẬT (giây) — decode tới null nên tính cả lặng đuôi. */
function mediaDur(bin, file) {
  const r = spawnSync(bin, ['-i', file, '-f', 'null', '-'], {encoding: 'utf8'});
  const m = [...(r.stderr || '').matchAll(/time=(\d+):(\d+):(\d+\.\d+)/g)];
  if (!m.length) return 0;
  const l = m[m.length - 1];
  return (+l[1]) * 3600 + (+l[2]) * 60 + (+l[3]);
}

function makeSilence(bin, file, seconds) {
  execFileSync(bin, ['-y', '-f', 'lavfi', '-i', 'anullsrc=r=44100:cl=mono',
    '-t', String(seconds), '-ar', '44100', '-q:a', '9', file], {stdio: 'ignore'});
}

/** Ước lượng thời lượng đọc tiếng Nhật cho dry-run. Đếm theo KÝ TỰ THẬT (code point). */
function estimateJa(text, cps) {
  const n = [...text.replace(/\s+/g, '')].length;
  return Math.max(0.8, n / cps);
}

const round = (n) => Math.round(n * 100) / 100;

async function main() {
  const args = parseArgs(process.argv);
  const projectDir = resolve(args.project);
  const scriptPath = join(projectDir, 'script.md');
  if (!existsSync(scriptPath)) throw new Error(`Không thấy ${scriptPath}`);

  const voiceDir = join(projectDir, 'voice');
  mkdirSync(voiceDir, {recursive: true});

  const ffBin = ffmpegBin();
  const hasFfmpeg = !!ffBin;
  const slug = projectDir.split(/[\\/]/).pop();

  if (!args.dryRun) {
    const h = await health(args.url);
    if (!h.voices || !h.voices.includes(args.voice)) {
      throw new Error(`Server không có giọng "${args.voice}". Đang có: ${(h.voices || []).join(', ')}`);
    }
    process.stderr.write(`  server: ${h.device}${h.gpu ? ' · ' + h.gpu : ''} · giọng ${args.voice} · seed ${args.seed}\n`);
  }

  const items = parseScript(scriptPath);
  const cues = [];
  const parts = [];
  let idx = 0;

  for (const item of items) {
    const padded = String(idx).padStart(2, '0');

    if (item.type === 'gap') {
      if (!args.dryRun && hasFfmpeg) {
        const f = join(voiceDir, `gap-${padded}.mp3`);
        makeSilence(ffBin, f, item.seconds);
        parts.push({file: f, seconds: item.seconds});
      } else {
        parts.push({seconds: item.seconds});
      }
      idx++;
      continue;
    }

    const segName = `seg-${padded}.wav`;
    const segPath = join(voiceDir, segName);
    const cue = {
      id: item.id,
      chapter: item.chapter,
      text: item.text,
      file: args.dryRun ? null : `voice/${segName}`,
      start: 0,
      duration: 0,
    };

    if (args.dryRun) {
      cue.duration = round(estimateJa(item.text, args.cps));
      parts.push({cue});
    } else {
      if (!args.force && existsSync(segPath)) {
        process.stderr.write(`  → ${item.id}: đã có, bỏ qua (--force để sinh lại)\n`);
      } else {
        const nChar = [...item.text].length;
        process.stderr.write(`  → TTS ${item.id} (${nChar} ký tự)...`);
        const t0 = Date.now();
        const buf = await synthesize({
          baseUrl: args.url,
          text: item.text,
          voice: args.voice,
          lang: args.lang,
          format: 'wav',
          speed: args.speed,
          seed: args.seed,
          ...(args.lufs != null ? {postprocess: true, target_lufs: args.lufs} : {}),
        });
        writeFileSync(segPath, buf);
        process.stderr.write(` ${((Date.now() - t0) / 1000).toFixed(1)}s\n`);
      }
      parts.push({file: segPath, cue});
    }
    cues.push(cue);
    idx++;
  }

  // ── Timeline từ số đo THẬT, không từ ước lượng ──
  let start = 0;
  for (const p of parts) {
    let d;
    if (args.dryRun) d = p.cue ? p.cue.duration : (p.seconds || 0);
    else if (p.file && hasFfmpeg) d = mediaDur(ffBin, p.file);
    else d = p.seconds || (p.cue ? estimateJa(p.cue.text, args.cps) : 0);
    if (p.cue) { p.cue.start = round(start); if (!args.dryRun) p.cue.duration = round(d); }
    start += d;
  }
  let totalDuration = round(start);

  // ── Ghép narration.mp3: RE-ENCODE, đồng nhất 44.1kHz ──
  // Segment ra từ server là wav 32kHz; trộn sample rate rồi -c copy sẽ làm concat dồn
  // padding và lệch mốc. Luôn re-encode.
  let narration = null;
  const segFiles = parts.filter((p) => p.file).map((p) => p.file);
  if (!args.dryRun && segFiles.length) {
    if (!hasFfmpeg) {
      process.stderr.write('  ⚠ ffmpeg không có — bỏ qua ghép narration.mp3.\n');
      if (segFiles.length === 1) {
        copyFileSync(segFiles[0], join(voiceDir, 'narration.mp3'));
        narration = 'voice/narration.mp3';
      }
    } else {
      const listPath = join(voiceDir, 'concat.txt');
      writeFileSync(listPath, segFiles.map((f) => `file '${f.replace(/\\/g, '/').replace(/'/g, "'\\''")}'`).join('\n'));
      const outPath = join(voiceDir, 'narration.mp3');
      execFileSync(ffBin, ['-y', '-f', 'concat', '-safe', '0', '-i', listPath,
        '-ar', '44100', '-ac', '1', '-c:a', 'libmp3lame', '-q:a', '2', outPath], {stdio: 'ignore'});
      narration = 'voice/narration.mp3';

      const realTotal = mediaDur(ffBin, outPath);
      if (realTotal > 0 && totalDuration > 0 && Math.abs(realTotal - totalDuration) > 0.1) {
        const scale = realTotal / totalDuration;
        for (const c of cues) { c.start = round(c.start * scale); c.duration = round(c.duration * scale); }
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
    lang: 'ja',
    voice: {
      provider: 'gpt-sovits-local',
      voice_name: args.voice,
      lang: args.lang,
      speed: args.speed,
      seed: args.seed,
      ...(args.lufs != null ? {target_lufs: args.lufs} : {}),
    },
    cues,
  };
  const timingPath = join(projectDir, 'timing.json');
  writeFileSync(timingPath, JSON.stringify(timing, null, 2));

  const dryPath = join(projectDir, 'timing.dryrun.json');
  if (args.dryRun) {
    writeFileSync(dryPath, JSON.stringify(timing, null, 2));
  } else if (!existsSync(dryPath)) {
    writeFileSync(dryPath, JSON.stringify({...timing, dryRun: true, narration: null}, null, 2));
  }

  const mins = (totalDuration / 60).toFixed(1);
  process.stderr.write(
    `\n✓ ${args.dryRun ? '[DRY-RUN] ' : ''}${cues.length} cue, tổng ${totalDuration}s (${mins} phút)\n` +
    `  timing.json → ${timingPath}\n` +
    (args.dryRun ? `  timing.dryrun.json → ${dryPath} (mốc nháp cho finalize-remap)\n` : '') +
    (narration ? `  narration  → ${join(projectDir, narration)}\n` : '')
  );
  // Ngưỡng kênh Nhật: 600s (10 phút). Ba tập đầu nhắm 10–13 phút để đo retention rồi mới
  // chốt chuẩn — xem docs/chien-luoc-kenh-nhat.md mục 9. (Kênh Việt cũ dùng 780s.)
  if (totalDuration < 600) {
    process.stderr.write(`  ⚠ Dưới 600s (10 phút) — kịch bản chưa đủ dài.\n`);
  }
}

main().catch((e) => { process.stderr.write(`\n✗ ${e.message}\n`); process.exit(1); });
