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
import { splitJa, isJapanese } from './lib/split-ja.mjs';

function arg(name, def) { const i = process.argv.indexOf(name); return i >= 0 ? process.argv[i + 1] : def; }
function has(name) { return process.argv.includes(name); }
const projectDir = resolve(arg('--project', 'projects/hoan-hao-trai-dat'));
const voiceDir = join(projectDir, 'voice');

// ── Chọn cách cắt theo NGÔN NGỮ ─────────────────────────────────────────────
// Tiếng Nhật không có khoảng trắng: chunk() theo /\s+/ trả nguyên câu thành 1 mảnh và
// luật ≤MAX hỏng trong im lặng (đo thật: câu 67 ký tự → 1 mảnh). Nên tách hẳn hai đường.
// Ngưỡng cũng khác: 42 cho chữ Latin, 22 cho chữ toàn角 (rộng gấp đôi).
const LANG = arg('--lang', null);          // 'ja' | 'vi' | null = tự nhận
const DEFAULT_MAX = { ja: 22, vi: 42 };

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

// tách text thành các mẩu <= MAX ký tự theo ranh giới TỪ (không cắt giữa từ) — chữ Latin/Việt
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

// Ngôn ngữ: cờ --lang > timing.json.lang > tự nhận từ chữ trong cue.
const lang = LANG || timing.lang ||
  (timing.cues.some((c) => isJapanese(c.text)) ? 'ja' : 'vi');
const MAX = parseInt(arg('--max', String(DEFAULT_MAX[lang] ?? 42)), 10);
// Một cửa duy nhất để cắt dòng, chọn theo ngôn ngữ.
const cut = lang === 'ja' ? (t) => splitJa(t, MAX) : chunk;
const clen = (s) => [...s].length;   // đếm code point, không đếm UTF-16 unit

const cues = [];
for (const cue of timing.cues) {
  const s0 = cue.start;              // mốc bắt đầu segment THẬT (đã hiệu chỉnh ở khâu voice)
  const base = (cue.file || '').replace('voice/', '');
  // GPT-SoVITS local không sinh .srt (AIMAX thì có). Tiếng Nhật không cần: cắt theo 。、
  // là tất định. Mốc bắt đầu vẫn lấy từ timing.json — đó mới là số đo thật.
  const srt = base ? parseSrt(join(voiceDir, base.replace(/\.(mp3|wav)$/, '.srt'))) : [];
  if (!srt.length) {
    // fallback: cắt text cue, chia thời gian THEO TỈ LỆ KÝ TỰ (không rải đều —
    // dòng 5 chữ và dòng 22 chữ không thể chiếm thời lượng bằng nhau).
    const parts = cut(cue.text);
    const dur = cue.duration || 0;
    const tot = parts.reduce((a, p) => a + clen(p), 0) || 1;
    let acc = 0;
    for (const p of parts) {
      cues.push({ t: +(s0 + acc).toFixed(2), s: p });
      acc += dur * (clen(p) / tot);
    }
    continue;
  }
  for (const line of srt) {
    const parts = cut(line.text);
    const span = Math.max(0.2, line.end - line.start);
    const totCh = parts.reduce((a, p) => a + clen(p), 0) || 1;
    let t = line.start;
    for (const p of parts) { cues.push({ t: +(s0 + t).toFixed(2), s: p }); t += span * (clen(p) / totCh); }
  }
}
cues.sort((a, b) => a.t - b.t);

const total = timing.totalDuration;
writeFileSync(join(projectDir, 'cues.json'), JSON.stringify({ total, count: cues.length, cues }, null, 2));

// khối dán vào composition
const esc = (s) => s.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
process.stdout.write('const CUES=[\n' + cues.map((c) => ` {t:${c.t},s:"${esc(c.s)}"}`).join(',\n') + '\n];\n');

const lens = cues.map((c) => clen(c.s));
const over = cues.filter((c) => clen(c.s) > MAX);
process.stderr.write(`\n✓ ${cues.length} cue · lang ${lang} · max ${MAX} · maxLen ${Math.max(...lens)} · avg ${(lens.reduce((a, b) => a + b, 0) / lens.length).toFixed(1)} · total ${total}s\n`);
// Cổng ồn ào: trước đây dòng quá dài trôi lọt không ai biết.
if (over.length) {
  process.stderr.write(`  ⚠ ${over.length} dòng VƯỢT ${MAX} ký tự:\n`);
  for (const c of over.slice(0, 5)) process.stderr.write(`     [${clen(c.s)}] ${c.s}\n`);
}
process.stderr.write(`  cues.json → ${join(projectDir, 'cues.json')}\n`);
process.stderr.write(`  _NEWT (remap timeline) = [${timing.cues.map((c) => c.start).join(',')},${total}]\n`);
