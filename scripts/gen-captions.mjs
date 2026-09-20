#!/usr/bin/env node
// gen-captions.mjs — Sinh mảng CUES phụ đề NGẮN (1 dòng) từ timing.json + voice/*.srt.
//
//   node scripts/gen-captions.mjs --project projects/<slug> [--max 42]
//
// Vì sao cần: mỗi cue trong timing.json là cả một câu/đoạn dài. Hiển thị nguyên đoạn thì
// phụ đề quá dài. Script này cắt nhỏ theo .srt (mốc câu THẬT của TTS, đúng chữ) rồi chia
// tiếp ≤ --max ký tự/dòng, phân bổ thời gian theo tỉ lệ ký tự. Mốc bắt đầu mỗi segment lấy
// từ timing.json.cue.start (đã đo mp3 thật + hiệu chỉnh ở voice-aimax.mjs → chính xác).
//
// Đầu ra:
//   projects/<slug>/cues.json           { total, count, cues:[{t,s}] }
//   in ra STDOUT khối `const CUES=[...]` để dán vào composition (visual-builder).

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, resolve } from 'node:path';

function arg(name, def) { const i = process.argv.indexOf(name); return i >= 0 ? process.argv[i + 1] : def; }
const projectDir = resolve(arg('--project', 'projects/hoan-hao-trai-dat'));
const MAX = parseInt(arg('--max', '42'), 10);
const voiceDir = join(projectDir, 'voice');

function parseSrt(p) {
  if (!existsSync(p)) return [];
  const txt = readFileSync(p, 'utf8').replace(/\r/g, '');
  const toS = (t) => { const m = t.match(/(\d+):(\d+):(\d+)[,.](\d+)/); return (+m[1]) * 3600 + (+m[2]) * 60 + (+m[3]) + (+m[4]) / 1000; };
  const out = [];
  for (const b of txt.split(/\n\n+/).map((x) => x.trim()).filter(Boolean)) {
    const lines = b.split('\n');
    const ti = lines.findIndex((l) => l.includes('-->'));
    if (ti < 0) continue;
    const [a, bb] = lines[ti].split('-->');
    const text = lines.slice(ti + 1).join(' ').replace(/\s+/g, ' ').trim();
    if (text) out.push({ start: toS(a), end: toS(bb), text });
  }
  return out;
}

// tách text thành các mẩu <= MAX ký tự theo ranh giới TỪ (không cắt giữa từ)
function chunk(text) {
  const words = text.split(/\s+/);
  const out = []; let cur = '';
  for (const w of words) {
    if (!cur) { cur = w; continue; }
    if ((cur + ' ' + w).length <= MAX) cur += ' ' + w;
    else { out.push(cur); cur = w; }
  }
  if (cur) out.push(cur);
  // gộp mẩu đuôi quá ngắn vào mẩu trước CHỈ KHI tổng vẫn <= MAX
  if (out.length >= 2 && out[out.length - 1].length <= 10 && (out[out.length - 2] + ' ' + out[out.length - 1]).length <= MAX) {
    out[out.length - 2] += ' ' + out.pop();
  }
  return out;
}

const timing = JSON.parse(readFileSync(join(projectDir, 'timing.json'), 'utf8'));
const cues = [];
for (const cue of timing.cues) {
  const s0 = cue.start;              // mốc bắt đầu segment THẬT (từ voice-aimax đã hiệu chỉnh)
  const base = (cue.file || '').replace('voice/', '');
  const srt = base ? parseSrt(join(voiceDir, base.replace('.mp3', '.srt'))) : [];
  if (!srt.length) {
    // fallback: cắt text cue, rải đều trên cue.duration
    const parts = chunk(cue.text);
    const per = (cue.duration || 0) / Math.max(1, parts.length);
    parts.forEach((p, i) => cues.push({ t: +(s0 + i * per).toFixed(2), s: p }));
    continue;
  }
  for (const line of srt) {
    const parts = chunk(line.text);
    const span = Math.max(0.2, line.end - line.start);
    const totCh = parts.reduce((a, p) => a + p.length, 0) || 1;
    let t = line.start;
    for (const p of parts) { cues.push({ t: +(s0 + t).toFixed(2), s: p }); t += span * (p.length / totCh); }
  }
}
cues.sort((a, b) => a.t - b.t);

const total = timing.totalDuration;
writeFileSync(join(projectDir, 'cues.json'), JSON.stringify({ total, count: cues.length, cues }, null, 2));

// khối dán vào composition
const esc = (s) => s.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
process.stdout.write('const CUES=[\n' + cues.map((c) => ` {t:${c.t},s:"${esc(c.s)}"}`).join(',\n') + '\n];\n');

const lens = cues.map((c) => c.s.length);
process.stderr.write(`\n✓ ${cues.length} cue · maxLen ${Math.max(...lens)} · avg ${(lens.reduce((a, b) => a + b, 0) / lens.length).toFixed(1)} · total ${total}s\n`);
process.stderr.write(`  cues.json → ${join(projectDir, 'cues.json')}\n`);
process.stderr.write(`  _NEWT (remap timeline) = [${timing.cues.map((c) => c.start).join(',')},${total}]\n`);
