#!/usr/bin/env node
// voice-elevenlabs.mjs — Sinh giọng đọc tiếng Việt bằng ElevenLabs + tạo timing.json.
//
// Cách dùng:
//   node scripts/voice-elevenlabs.mjs --project projects/<slug> [options]
//
// Options:
//   --project <dir>     Thư mục project (chứa script.md). BẮT BUỘC.
//   --dry-run           Không gọi API; ước lượng thời lượng theo số ký tự (miễn phí).
//   --fps <n>           FPS ghi vào timing.json (mặc định 30).
//   --voice-id <id>     Ghi đè ELEVENLABS_VOICE_ID.
//   --model <id>        Ghi đè ELEVENLABS_MODEL (mặc định eleven_multilingual_v2).
//   --cps <n>           Ký tự/giây khi dry-run (mặc định 15).
//
// Env:
//   ELEVENLABS_API_KEY   (bắt buộc khi KHÔNG dry-run)
//   ELEVENLABS_VOICE_ID  (mặc định giọng đa ngữ; nên đặt giọng tiếng Việt của bạn)
//   ELEVENLABS_MODEL     (mặc định eleven_multilingual_v2)
//
// Đầu ra trong <project>:
//   voice/seg-XX.mp3, voice/narration.mp3, timing.json
//
// Yêu cầu: Node >= 18 (có fetch), ffmpeg + ffprobe trong PATH.

import { parseScript, estimateDuration } from './lib/parse-script.mjs';
import { mkdirSync, writeFileSync, existsSync, readFileSync } from 'node:fs';
import { execFileSync, spawnSync } from 'node:child_process';
import { join, resolve } from 'node:path';

function parseArgs(argv) {
  const a = { fps: 30, cps: 15, dryRun: false };
  for (let i = 2; i < argv.length; i++) {
    const k = argv[i];
    if (k === '--dry-run') a.dryRun = true;
    else if (k === '--project') a.project = argv[++i];
    else if (k === '--fps') a.fps = parseInt(argv[++i], 10);
    else if (k === '--cps') a.cps = parseFloat(argv[++i]);
    else if (k === '--voice-id') a.voiceId = argv[++i];
    else if (k === '--model') a.model = argv[++i];
    else throw new Error(`Tham số không hiểu: ${k}`);
  }
  if (!a.project) throw new Error('Thiếu --project <dir>');
  return a;
}

function have(cmd) {
  const r = spawnSync(cmd, ['-version'], { encoding: 'utf8' });
  return r.status === 0 || (r.stdout || r.stderr || '').length > 0;
}

function ffprobeDuration(file) {
  const out = execFileSync('ffprobe', [
    '-v', 'error', '-show_entries', 'format=duration',
    '-of', 'default=noprint_wrappers=1:nokey=1', file,
  ], { encoding: 'utf8' });
  const d = parseFloat(out.trim());
  if (!isFinite(d)) throw new Error(`Không đọc được thời lượng: ${file}`);
  return d;
}

async function ttsElevenLabs({ text, voiceId, model, apiKey }) {
  const url = `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'xi-api-key': apiKey,
      'Content-Type': 'application/json',
      Accept: 'audio/mpeg',
    },
    body: JSON.stringify({
      text,
      model_id: model,
      voice_settings: { stability: 0.5, similarity_boost: 0.75, style: 0.3, use_speaker_boost: true },
    }),
  });
  if (!res.ok) {
    const msg = await res.text().catch(() => '');
    throw new Error(`ElevenLabs ${res.status}: ${msg.slice(0, 300)}`);
  }
  return Buffer.from(await res.arrayBuffer());
}

// Tạo file mp3 im lặng dài `seconds` để chèn khoảng lặng.
function makeSilence(file, seconds) {
  execFileSync('ffmpeg', [
    '-y', '-f', 'lavfi', '-i', 'anullsrc=r=44100:cl=mono',
    '-t', String(seconds), '-q:a', '9', file,
  ], { stdio: 'ignore' });
}

async function main() {
  const args = parseArgs(process.argv);
  const projectDir = resolve(args.project);
  const scriptPath = join(projectDir, 'script.md');
  if (!existsSync(scriptPath)) throw new Error(`Không thấy ${scriptPath}`);

  const voiceDir = join(projectDir, 'voice');
  mkdirSync(voiceDir, { recursive: true });

  const model = args.model || process.env.ELEVENLABS_MODEL || 'eleven_multilingual_v2';
  const voiceId = args.voiceId || process.env.ELEVENLABS_VOICE_ID || '21m00Tcm4TlvDq8ikWAM';
  const apiKey = process.env.ELEVENLABS_API_KEY;

  if (!args.dryRun && !apiKey) {
    throw new Error(
      'Thiếu ELEVENLABS_API_KEY. Đặt biến môi trường rồi chạy lại, ' +
      'hoặc dùng --dry-run để ước lượng thời lượng mà không tốn credit.'
    );
  }
  if (!args.dryRun && (!have('ffmpeg') || !have('ffprobe'))) {
    throw new Error('Cần ffmpeg và ffprobe trong PATH (dùng để đo/ghép audio). Dry-run thì không cần.');
  }

  const items = parseScript(scriptPath);
  const cues = [];
  const segFiles = []; // theo thứ tự để ghép narration
  let start = 0;
  let idx = 0;
  const slug = projectDir.split(/[\\/]/).pop();

  for (const item of items) {
    if (item.type === 'gap') {
      if (!args.dryRun) {
        const f = join(voiceDir, `gap-${String(idx).padStart(2, '0')}.mp3`);
        makeSilence(f, item.seconds);
        segFiles.push(f);
      }
      start += item.seconds;
      idx++;
      continue;
    }
    // cue
    const segName = `seg-${String(idx).padStart(2, '0')}.mp3`;
    const segPath = join(voiceDir, segName);
    let duration;
    if (args.dryRun) {
      duration = estimateDuration(item.text, args.cps);
    } else {
      process.stderr.write(`  → TTS ${item.id} (${item.text.length} ký tự)...\n`);
      const buf = await ttsElevenLabs({ text: item.text, voiceId, model, apiKey });
      writeFileSync(segPath, buf);
      duration = ffprobeDuration(segPath);
      segFiles.push(segPath);
    }
    cues.push({
      id: item.id,
      chapter: item.chapter,
      text: item.text,
      file: args.dryRun ? null : `voice/${segName}`,
      start: round(start),
      duration: round(duration),
    });
    start += duration;
    idx++;
  }

  const totalDuration = round(start);

  // Ghép narration.mp3 (chỉ khi có audio thật).
  let narration = null;
  if (!args.dryRun && segFiles.length) {
    const listPath = join(voiceDir, 'concat.txt');
    writeFileSync(listPath, segFiles.map((f) => `file '${f.replace(/'/g, "'\\''")}'`).join('\n'));
    const outPath = join(voiceDir, 'narration.mp3');
    execFileSync('ffmpeg', ['-y', '-f', 'concat', '-safe', '0', '-i', listPath, '-c', 'copy', outPath], { stdio: 'ignore' });
    narration = 'voice/narration.mp3';
  }

  const timing = {
    slug,
    fps: args.fps,
    totalDuration,
    dryRun: args.dryRun,
    narration,
    voice: { provider: 'elevenlabs', voiceId, model },
    cues,
  };
  const timingPath = join(projectDir, 'timing.json');
  writeFileSync(timingPath, JSON.stringify(timing, null, 2));

  process.stderr.write(
    `\n✓ ${args.dryRun ? '[DRY-RUN] ' : ''}${cues.length} cue, tổng ${totalDuration}s ` +
    `(${(totalDuration / 60).toFixed(1)} phút)\n` +
    `  timing.json → ${timingPath}\n` +
    (narration ? `  narration → ${join(projectDir, narration)}\n` : '')
  );
}

function round(n) { return Math.round(n * 100) / 100; }

main().catch((e) => { process.stderr.write(`\n✗ ${e.message}\n`); process.exit(1); });
