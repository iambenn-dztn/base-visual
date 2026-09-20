#!/usr/bin/env node
// finalize-remap.mjs — Hoàn thiện composition dry-run thành bản GIỌNG THẬT (không cần agent):
//   + thêm realToDry + _NEWT/_OLDT (remap cảnh dry-run → timeline giọng thật)
//   + wire renderAtTime: cảnh dùng t(dry), phụ đề dùng tReal(thật)
//   + thêm track <audio> narration_mixed.mp3 (track-index 2)
//   + cập nhật TOTAL + mọi data-duration = độ dài thật
//   + splice CUES thật
//
//   node scripts/finalize-remap.mjs --project projects/<slug> [--html index.html]
//
// Điều kiện: đã có timing.json (giọng thật), timing.dryrun.json, cues.json (regen từ timing thật),
// voice/narration_mixed.mp3. Composition theo khuôn visual-builder (renderAtTime(tReal), subAt, SB).

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve, join, relative, dirname } from 'node:path';

function arg(n, d) { const i = process.argv.indexOf(n); return i >= 0 ? process.argv[i + 1] : d; }
const ROOT = resolve('.');
const projectDir = resolve(arg('--project'));
const htmlPath = resolve(arg('--html', 'index.html'));
const slug = projectDir.split(/[\\/]/).pop();

const real = JSON.parse(readFileSync(join(projectDir, 'timing.json'), 'utf8'));
const dry = JSON.parse(readFileSync(join(projectDir, 'timing.dryrun.json'), 'utf8'));
const { cues } = JSON.parse(readFileSync(join(projectDir, 'cues.json'), 'utf8'));
const realTotal = real.totalDuration, dryTotal = dry.totalDuration;

const NEWT = [...real.cues.map((c) => c.start), realTotal];
const OLDT = [...dry.cues.map((c) => c.start), dryTotal];
if (NEWT.length !== OLDT.length) throw new Error(`_NEWT/_OLDT len khác: ${NEWT.length} vs ${OLDT.length}`);

let h = readFileSync(htmlPath, 'utf8');
const fails = [];
function sub(re, rep, label, all) {
  const before = h;
  h = all ? h.replaceAll(re, rep) : h.replace(re, rep);
  if (h === before) fails.push(label);
}

// 0) TỰ LÀNH: nếu visual-builder tái dùng khung đã remap (chèn sẵn realToDry + _NEWT/_OLDT
//    identity/stale + renderAtTime(tReal)+subAt(tReal)), gỡ scaffold về dry-run sạch style A
//    trước khi remap thật. Tránh finalize tưởng "đã remap" rồi fail (ca Tập 14).
if (h.includes('function realToDry')) {
  const before = h;
  h = h.replace(/const _NEWT=\[[^\]]*\],_OLDT=\[[^\]]*\];\s*\n/, '');
  h = h.replace(/function realToDry\(tr\)\{[\s\S]*?return _OLDT\[n-1\];\}\s*\n/, '');
  h = h.replace('tReal=clamp(tReal,0,TOTAL);const t=realToDry(tReal);', 'const t=clamp(tReal,0,TOTAL);');
  h = h.replaceAll('subAt(tReal)', 'subAt(t)');
  if (h !== before && !h.includes('function realToDry')) console.log('  ↳ đã gỡ scaffold remap thừa (khung tái dùng) → dry-run sạch');
}

// 1) remap def — chèn ngay trước function renderAtTime
const remapDef =
  `const _NEWT=[${NEWT.join(',')}],_OLDT=[${OLDT.join(',')}];\n` +
  `function realToDry(tr){if(tr<=_NEWT[0])return _OLDT[0];var n=_NEWT.length;if(tr>=_NEWT[n-1])return _OLDT[n-1];` +
  `for(var i=0;i<n-1;i++){if(tr>=_NEWT[i]&&tr<=_NEWT[i+1]){var f=(tr-_NEWT[i])/((_NEWT[i+1]-_NEWT[i])||1e-6);return _OLDT[i]+(_OLDT[i+1]-_OLDT[i])*f;}}return _OLDT[n-1];}\n`;
if (h.includes('function realToDry')) fails.push('realToDry đã tồn tại (bỏ qua chèn)');
else sub(/function renderAtTime\(/, remapDef + 'function renderAtTime(', 'chèn remapDef');

// 2) wire renderAtTime: t = dry time — hỗ trợ 2 kiểu param
if (h.includes('const t=clamp(tReal,0,TOTAL);')) {
  // kiểu A (tap-3+): function renderAtTime(tReal){ const t=clamp(tReal,0,TOTAL);
  sub('const t=clamp(tReal,0,TOTAL);', 'tReal=clamp(tReal,0,TOTAL);const t=realToDry(tReal);', 'wire renderAtTime A');
} else {
  // kiểu B (tap-2/10): function renderAtTime(t){ t=clamp(t,0,TOTAL);
  sub('function renderAtTime(t){', 'function renderAtTime(tReal){', 'wire renderAtTime B1');
  sub('t=clamp(t,0,TOTAL);', 'tReal=clamp(tReal,0,TOTAL);const t=realToDry(tReal);', 'wire renderAtTime B2');
}

// 3) phụ đề dùng thời-gian-thật
sub('subEl.textContent=subAt(t);', 'subEl.textContent=subAt(tReal);', 'wire subtitle→tReal');

// 4) thêm <audio> track 2 (sau canvas #fx)
const audioRel = relative(dirname(htmlPath), join(projectDir, 'voice', 'narration_mixed.mp3')).replace(/\\/g, '/');
if (!existsSync(join(projectDir, 'voice', 'narration_mixed.mp3'))) fails.push('THIẾU narration_mixed.mp3');
if (h.includes('id="narr"')) fails.push('audio track đã tồn tại');
else sub(/(<canvas[^>]*id="fx"[^>]*><\/canvas>)/,
  `$1\n  <audio data-hf-id="hf-narr" id="narr" class="clip" data-start="0" data-duration="${realTotal}" data-track-index="2" src="${audioRel}"></audio>`,
  'thêm audio track');

// 5) TOTAL + data-duration = độ dài thật
sub(new RegExp(`data-duration="${dryTotal}"`, 'g'), `data-duration="${realTotal}"`, 'data-duration', true);
sub(new RegExp(`TOTAL=${String(dryTotal).replace('.', '\\.')}\\b`), `TOTAL=${realTotal}`, 'TOTAL const');

// 6) splice CUES thật
const esc = (s) => s.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
const block = 'const CUES=/*CUES*/[' + cues.map((c) => `{t:${c.t},s:"${esc(c.s)}"}`).join(',') + '];';
sub(/const CUES=(?:\/\*CUES\*\/)?\[[\s\S]*?\];/, block, 'splice CUES');

if (fails.length) { console.error('✗ CÁC BƯỚC KHÔNG KHỚP:\n  - ' + fails.join('\n  - ')); process.exit(1); }
writeFileSync(htmlPath, h);
console.log(`✓ finalize ${slug}: realTotal ${realTotal}s | _NEWT/_OLDT ${NEWT.length} | CUES ${cues.length} | audio ${audioRel}`);
