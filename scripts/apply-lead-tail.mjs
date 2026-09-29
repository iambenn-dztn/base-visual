#!/usr/bin/env node
// apply-lead-tail.mjs — Dịch cả timeline hình sang phải `lead` giây và nối `tail` giây
// màn hình đen vào cuối, khớp với track audio do build-audio.mjs dựng.
//
//   node scripts/apply-lead-tail.mjs --project projects/<slug> [--html index.html]
//
// Vì sao cần script: một tập có 48 shot và 561 dòng phụ đề. Sửa tay từng mốc là chắc chắn
// lệch. Script này chỉ đổi SỐ, không đụng logic dựng hình.
//
// Nó làm đúng năm việc:
//   1. TOTAL → audio.totalDuration
//   2. mọi data-duration ở phần tử timing → TOTAL
//   3. renderAtTime(t): trừ lead trước khi tính cảnh → cảnh vẫn dùng mốc timing.json gốc
//   4. CUES: cộng lead vào mọi mốc t (phụ đề đi theo giọng, mà giọng đã dịch)
//   5. Chèn overlay đen phủ toàn frame từ blackOutroFrom tới hết
//
// ⚠ Idempotent: chạy lại lần hai không dịch thêm. Nhận biết bằng mốc LEADTAIL:APPLIED.

import {readFileSync, writeFileSync, existsSync} from 'node:fs';
import {join, resolve} from 'node:path';

const arg = (n, d) => { const i = process.argv.indexOf(n); return i >= 0 ? process.argv[i + 1] : d; };
const projectDir = resolve(arg('--project', ''));
if (!projectDir) throw new Error('Thiếu --project projects/<slug>');
const htmlPath = resolve(arg('--html', 'index.html'));

const audioPath = join(projectDir, 'audio.json');
if (!existsSync(audioPath)) throw new Error(`Chưa có ${audioPath} — chạy build-audio.mjs trước.`);
const A = JSON.parse(readFileSync(audioPath, 'utf8'));

let s = readFileSync(htmlPath, 'utf8');
const MARK = 'LEADTAIL:APPLIED';
if (s.includes(MARK)) {
  process.stderr.write('  đã áp lead/tail trước đó — bỏ qua (idempotent).\n');
  process.exit(0);
}

const LEAD = A.lead, TOTAL = A.totalDuration, BLACK = A.blackOutroFrom;
let n = 0;

// 1) TOTAL
const before = s;
s = s.replace(/(\bTOTAL\s*=\s*)([0-9.]+)/, (m, a) => { n++; return a + TOTAL; });
if (s === before) throw new Error('Không tìm thấy khai báo TOTAL');

// 2) data-duration của các phần tử timing
s = s.replace(/data-duration="[0-9.]+"/g, () => { n++; return `data-duration="${TOTAL}"`; });

// 3) renderAtTime: trừ lead. Cảnh giữ nguyên mốc timing.json, chỉ trễ đi LEAD giây.
//    Chèn ngay sau dấu mở ngoặc của hàm.
const reRender = /function\s+renderAtTime\s*\(\s*([A-Za-z_$][\w$]*)\s*\)\s*\{/;
const mR = s.match(reRender);
if (!mR) throw new Error('Không tìm thấy function renderAtTime(...)');
const param = mR[1];
s = s.replace(reRender, (m) => m +
  `\n  /* ${MARK} — dịch timeline sang phải ${LEAD}s cho intro lặng.` +
  `\n     Cảnh vẫn dùng mốc gốc của timing.json; chỉ tới muộn hơn ${LEAD}s. */` +
  `\n  ${param} = Math.max(0, ${param} - ${LEAD});\n`);
n++;

// 4) CUES: cộng LEAD vào mọi mốc t (phụ đề bám giọng đã dịch)
//    ⚠ Phải làm SAU bước 3: renderAtTime đã trừ lead cho cảnh, nên phụ đề cần bù lại.
//    Cách làm: cộng thẳng vào dữ liệu, không nhân đôi phép trừ.
let cueCount = 0;
/* ⚠ File dùng CRLF — regex phải là \]\s*; chứ không \n\]; */
s = s.replace(/const CUES\s*=\s*\[([\s\S]*?)\]\s*;/, (m, body) => {
  const fixed = body.replace(/\{t:([0-9.]+),/g, (mm, t) => {
    cueCount++;
    return `{t:${(parseFloat(t) + LEAD).toFixed(2)},`;
  });
  return `const CUES=[${fixed}];`;
});
if (!cueCount) throw new Error('Không dịch được mốc CUES');

// 4b) Phụ đề tra theo thời gian THẬT (chưa trừ lead) → dùng biến gốc.
//     renderAtTime đã ghi đè param, nên lưu lại bản gốc ở đầu hàm.
s = s.replace(
  `  ${param} = Math.max(0, ${param} - ${LEAD});`,
  `  var _tReal = ${param};                    /* thời gian THẬT của video, cho phụ đề */\n` +
  `  ${param} = Math.max(0, ${param} - ${LEAD});   /* thời gian CẢNH, đã trừ intro */`);

// đổi mọi chỗ tra phụ đề/chương sang _tReal
s = s.replace(/HFA\.applySubtitle\(([^,]+),\s*CUES,\s*([A-Za-z_$][\w$]*)\)/g,
  (m, el) => { n++; return `HFA.applySubtitle(${el}, CUES, _tReal)`; });
s = s.replace(/HFA\.applyChapter\(([^,]+),\s*([A-Za-z_$][\w$]*),\s*([A-Za-z_$][\w$]*)([^)]*)\)/g,
  (m, el, marks, tv, rest) => { n++; return `HFA.applyChapter(${el}, ${marks}, _tReal${rest})`; });

// 5) Overlay đen cho outro — phủ toàn frame từ BLACK tới hết
const black = `
<div id="outro-black" style="position:absolute;inset:0;z-index:90;background:#000;opacity:0;pointer-events:none"></div>`;
s = s.replace(/(<div id="err"[^>]*>\s*<\/div>)/, (m) => m + black);
if (!s.includes('outro-black')) {
  // dự phòng: chèn trước </body>
  s = s.replace('</body>', black + '\n</body>');
}
n++;

// điều khiển opacity trong renderAtTime, theo _tReal (thời gian thật)
const ctl = `
  /* ${MARK} — màn hình đen ${A.tail}s cuối: nhạc chạy tiếp, hình tắt dần. */
  (function(){
    var ob = document.getElementById('outro-black');
    if(!ob) return;
    var f = (_tReal - ${BLACK}) / 1.2;         /* 1.2s chuyển sang đen */
    ob.style.opacity = String(Math.max(0, Math.min(1, f)));
  })();`;
// chèn vào cuối renderAtTime: tìm chỗ gọi applySubtitle rồi thêm sau
if (/HFA\.applySubtitle\([^)]*\);/.test(s)) {
  s = s.replace(/(HFA\.applySubtitle\([^)]*\);)/, (m) => m + ctl);
} else {
  throw new Error('Không tìm được chỗ chèn điều khiển outro (applySubtitle)');
}

writeFileSync(htmlPath, s, 'utf8');
process.stderr.write(
  `\n✓ đã áp lead ${LEAD}s + tail ${A.tail}s vào ${htmlPath.split(/[\\/]/).pop()}\n` +
  `  TOTAL        → ${TOTAL}s\n` +
  `  CUES dịch    → ${cueCount} mốc +${LEAD}s\n` +
  `  màn đen từ   → ${BLACK}s\n` +
  `  tổng thay đổi: ${n} chỗ\n`);
