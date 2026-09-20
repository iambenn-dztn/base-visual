#!/usr/bin/env node
// wire-audio.mjs — Ghép narration + timing THẬT vào index.html (composition HyperFrames).
//
//   node scripts/wire-audio.mjs --project projects/<slug> --html index.html
//
// Làm gì:
//  1. Đọc timing.json (THẬT) + timing.dryrun.json (mốc camera gốc).
//  2. Cập nhật TOTAL + data-duration = totalDuration thật.
//  3. Regenerate mảng CUES (phụ đề) theo start thật → phụ đề khớp giọng chính xác.
//  4. Chèn hàm realToDry(t) (remap tuyến-tính-từng-đoạn theo ranh giới cue) và đổi các lần
//     lấy mẫu camera sang thời gian dry-run tương ứng → chuyển cảnh vẫn đúng mốc kịch bản.
//  5. Chèn <audio> narration (class="clip", track-index 1) để HyperFrames phát/đồng bộ.
// Idempotent: chạy lại không nhân đôi.

import {readFileSync, writeFileSync, existsSync} from 'node:fs';
import {join, resolve, relative} from 'node:path';

function arg(name, def) { const i = process.argv.indexOf(name); return i >= 0 ? process.argv[i + 1] : def; }
const projectRel = arg('--project', 'projects/hoan-hao-trai-dat');
const htmlRel = arg('--html', 'index.html');
const projectDir = resolve(projectRel);
const htmlPath = resolve(htmlRel);

const real = JSON.parse(readFileSync(join(projectDir, 'timing.json'), 'utf8'));
const dryPath = join(projectDir, 'timing.dryrun.json');
const dry = existsSync(dryPath) ? JSON.parse(readFileSync(dryPath, 'utf8')) : real;
if (real.dryRun) throw new Error('timing.json vẫn là dry-run — chạy voice thật trước.');
if (!real.narration) throw new Error('timing.json chưa có narration.mp3 (ffmpeg thiếu lúc sinh voice?).');

const T = real.totalDuration;

// Control points cho remap: real time → dry time (camera arrays viết theo dry time)
const NEWT = [...real.cues.map((c) => c.start), real.totalDuration];
const OLDT = [...dry.cues.map((c) => c.start), dry.totalDuration];
if (NEWT.length !== OLDT.length) throw new Error(`Số cue lệch: real ${NEWT.length} vs dry ${OLDT.length}`);

// Phụ đề từ timing thật
const cuesJs = '[\n' + real.cues.map((c) => {
  const ch = c.chapter ? `ch:${JSON.stringify(c.chapter)},` : '';
  return ` {t:${c.start},${ch}s:${JSON.stringify(c.text)}}`;
}).join(',\n') + '\n]';

const remapJs =
  `const _NEWT=${JSON.stringify(NEWT)},_OLDT=${JSON.stringify(OLDT)};\n` +
  `function realToDry(t){if(t<=_NEWT[0])return _OLDT[0];for(let i=0;i<_NEWT.length-1;i++){if(t<=_NEWT[i+1]){const a=(t-_NEWT[i])/((_NEWT[i+1]-_NEWT[i])||1);return _OLDT[i]+(_OLDT[i+1]-_OLDT[i])*a;}}return _OLDT[_OLDT.length-1];}\n`;

let html = readFileSync(htmlPath, 'utf8');

// 1. TOTAL + data-duration
html = html.replace(/const TOTAL=[\d.]+/, `const TOTAL=${T}`);
html = html.replace(/data-duration="[\d.]+"/g, `data-duration="${T}"`);

// 2. CUES
if (!/const CUES=\[/.test(html)) throw new Error('Không tìm thấy mảng CUES trong index.html');
html = html.replace(/const CUES=\[[\s\S]*?\n\];/, `const CUES=${cuesJs};`);

// 3. remap + camera sampling theo dry time
if (!/function realToDry\(/.test(html)) {
  html = html.replace(/function renderAtTime\(t\)\{/, `${remapJs}function renderAtTime(t){\n  const td=realToDry(t);`);
}
html = html.replace(/track\(t,camPos\)/g, 'track(td,camPos)')
           .replace(/track\(t,camLook\)/g, 'track(td,camLook)')
           .replace(/track\(t,camFov\)/g, 'track(td,camFov)')
           .replace(/track\(t,diagramOp\)/g, 'track(td,diagramOp)');

// 4. <audio> narration (relative tới index.html) — ưu tiên bản đã trộn nhạc nền
const mixed = join(projectDir, 'voice', 'narration_mixed.mp3');
const audioAbs = existsSync(mixed) ? mixed : join(projectDir, real.narration);
const src = relative(process.cwd(), audioAbs).replace(/\\/g, '/');
if (/id="narr"/.test(html)) {
  // đã có <audio> → chỉ cập nhật src (đổi giữa narration.mp3 ↔ narration_mixed.mp3)
  html = html.replace(/(<audio[^>]*id="narr"[^>]*\ssrc=")[^"]*(")/, `$1${src}$2`);
} else {
  const audio = `\n  <audio id="narr" class="clip" data-start="0" data-duration="${T}" data-track-index="1" src="${src}"></audio>`;
  if (/id="err"><\/div>/.test(html)) html = html.replace(/(id="err"><\/div>)/, `$1${audio}`);
  else html = html.replace(/(<\/div>\s*\n\s*<script>)/, `${audio}\n$1`);
}

writeFileSync(htmlPath, html);
process.stderr.write(
  `✓ Ghép xong: TOTAL=${T}s (${(T / 60).toFixed(1)} phút), ${real.cues.length} phụ đề, audio=${real.narration}\n` +
  `  Camera remap theo ${OLDT.length} mốc cue (dry ${dry.totalDuration}s → real ${T}s)\n`
);
