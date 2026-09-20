#!/usr/bin/env node
// inject-lib.mjs — Nhúng assets/lib/hf-astro.js vào composition (idempotent).
//
//   node scripts/inject-lib.mjs [--html index.html] [--lib assets/lib/hf-astro.js]
//
// VÌ SAO NHÚNG THAY VÌ <script src>:
// Preview/render server của HyperFrames KHÔNG phục vụ file .js tuỳ ý trong project —
// nó trả về SPA shell HTML (content-type: text/html) cho những đường dẫn đó, browser
// parse `<!doctype html>` thành lỗi cú pháp và composition chết. Đã kiểm chứng bằng
// `curl -D- http://localhost:<port>/hfa.js` → 200 text/html, 593 byte.
// Vì vậy composition phải TỰ CHỨA. Script này giữ một nguồn chuẩn duy nhất
// (assets/lib/hf-astro.js) rồi dán nội dung vào giữa hai mốc dưới đây.
//
// Chạy lại bao nhiêu lần cũng được: lần sau thay thế đúng khối cũ, không nhân đôi.

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

function arg(n, d) { const i = process.argv.indexOf(n); return i >= 0 ? process.argv[i + 1] : d; }

const htmlPath = resolve(arg('--html', 'index.html'));
const libPath = resolve(arg('--lib', 'assets/lib/hf-astro.js'));

const BEGIN = '/* ===== HFA:BEGIN — sinh tự động bởi scripts/inject-lib.mjs, ĐỪNG SỬA TAY ===== */';
const END = '/* ===== HFA:END ===== */';

for (const [label, p] of [['composition', htmlPath], ['thư viện', libPath]]) {
  if (!existsSync(p)) { console.error(`✗ không thấy ${label}: ${p}`); process.exit(1); }
}

const lib = readFileSync(libPath, 'utf8').trimEnd();
if (lib.includes('</script')) {
  console.error('✗ thư viện chứa chuỗi "</script" — sẽ cắt đứt thẻ <script> khi nhúng.');
  process.exit(1);
}

let html = readFileSync(htmlPath, 'utf8');
const block = `${BEGIN}\n${lib}\n${END}`;

const i = html.indexOf(BEGIN);
const j = html.indexOf(END);

if (i >= 0 && j > i) {
  // đã nhúng → thay khối cũ
  html = html.slice(0, i) + block + html.slice(j + END.length);
  console.log('✓ cập nhật khối HFA đã nhúng');
} else {
  // chưa nhúng → chèn vào ĐẦU khối <script> cuối cùng (khối code của tập)
  const last = html.lastIndexOf('<script>');
  if (last < 0) { console.error('✗ không tìm thấy thẻ <script> nào để chèn vào.'); process.exit(1); }
  const at = last + '<script>'.length;
  html = html.slice(0, at) + '\n' + block + '\n' + html.slice(at);
  console.log('✓ nhúng khối HFA lần đầu');
}

writeFileSync(htmlPath, html);
const kb = (Buffer.byteLength(block, 'utf8') / 1024).toFixed(1);
console.log(`  ${htmlPath}  (+${kb} KB)`);
console.log('  Nhắc: sửa hành vi dùng chung thì sửa assets/lib/hf-astro.js rồi chạy lại lệnh này,');
console.log('        ĐỪNG sửa trực tiếp khối HFA:BEGIN…HFA:END trong composition.');
