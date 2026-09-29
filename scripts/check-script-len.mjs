#!/usr/bin/env node
// Đếm lời đọc trong script.md và ước lượng thời lượng — BẰNG ĐÚNG CÔNG THỨC CỦA PIPELINE.
//
// Vì sao cần: agent tự đếm tay hay lệch (đã gặp: báo 3.995, thật 4.264 — sót phần
// trong khối [THE VOICE]; và cộng tay trên 101 cue thì sai tích luỹ).
//
// ⚠ HAI BẪY khi đếm tay, cả hai đều làm ƯỚC LƯỢNG THIẾU:
//   1. `cleanForTTS` nối các dòng trong một cue bằng DẤU CÁCH — khoảng trắng đó
//      nằm trong chuỗi và được tính. Bỏ hết \s là đếm hụt.
//   2. `estimateDuration` có SÀN 0,8 giây mỗi cue (Math.max(0.8, n/cps)).
//      Kịch bản nhiều cue ngắn (dưới ~4 chữ) sẽ dài hơn phép chia thuần.
// Script này dùng thẳng hàm của pipeline nên không dính hai bẫy đó.
//
// Dùng:  node scripts/check-script-len.mjs <slug> [<slug> ...]
//        node scripts/check-script-len.mjs --all
//
// ⚠ Số CHỐT vẫn là dry-run thật:
//        node scripts/voice-sovits.mjs --project projects/<slug> --dry-run

import {readFileSync, existsSync} from 'fs';
import {cleanForTTS, estimateDuration} from './lib/parse-script.mjs';

const CPS = 4.89;          // đo trên đoạn văn thật, KHÔNG phải 5.8 của câu rời

// ⚠ CHẤM THEO GIÂY, không theo ký tự. Ký tự chỉ là proxy — cùng số ký tự nhưng
// nhiều cue ngắn (chạm sàn 0,8s) sẽ dài hơn. Thứ người xem chịu là GIÂY.
// Khung 12–14 phút + dung sai: nhận tới 900s (15:00).
const MIN_SEC = 700, MAX_SEC = 900;
const MIN = 3500, MAX = 4100;   // chỉ để in tham khảo
const R = 'projects/';

// Tập của KÊNH NHẬT. 13 tập vũ trụ tiếng Việt cũ đo bằng TỪ, không phải ký tự —
// khung 3500-4100 không áp cho chúng, nên --all bỏ qua.
const JA = ['tamashii-no-tabi', 'hanashikakeru', 'omoide-yasashii',
            'toshi-to-fuan', 'hitori-no-naka', 'ashiba',
            'sanzu-no-kawa', 'rokudo'];

function count(slug) {
  const p = R + slug + '/script.md';
  if (!existsSync(p)) return null;
  const s = readFileSync(p, 'utf8');
  const re = /\[THE VOICE\]([\s\S]*?)(?=\n\[|\n##|\n---|$)/g;
  let m, chars = 0, sec = 0, n = 0, maxCue = 0, floored = 0, over = [];
  while ((m = re.exec(s))) {
    const t = cleanForTTS(m[1].replace(/<!--[\s\S]*?-->/g, ''));
    if (!t) continue;
    n++;
    chars += t.length;
    const d = estimateDuration(t, CPS);
    sec += d;
    if (d === 0.8) floored++;          // cue chạm sàn
    if (t.length > maxCue) maxCue = t.length;
    if (t.length > 160) over.push(n + ' (' + t.length + ')');
  }
  return {chars, sec, n, maxCue, floored, over};
}

const args = process.argv.slice(2);
const slugs = args[0] === '--all' ? JA.filter(x => existsSync(R + x + '/script.md')) : args;

let bad = 0;
for (const slug of slugs) {
  const r = count(slug);
  if (!r) { console.log(slug.padEnd(18) + ' (chưa có script.md)'); continue; }
  const mm = Math.floor(r.sec / 60), ss = Math.round(r.sec % 60);
  // Tập 01 dài 25:57 là có chủ ý (làm trước khi chốt khung) — không báo lệch.
  const ok = slug === 'tamashii-no-tabi' || (r.sec >= MIN_SEC && r.sec <= MAX_SEC);
  if (!ok) bad++;
  console.log(
    slug.padEnd(18) +
    ' cue=' + String(r.n).padStart(3) +
    '  ký tự=' + String(r.chars).padStart(5) +
    '  ' + mm + ':' + String(ss).padStart(2, '0') +
    '  dài nhất=' + String(r.maxCue).padStart(3) +
    (r.floored ? '  sàn0.8s×' + r.floored : '') +
    '  ' + (ok ? '✓' : '✗ LỆCH ' + (r.sec > MAX_SEC ? '+' + Math.round(r.sec - MAX_SEC) + 's' : '-' + Math.round(MIN_SEC - r.sec) + 's'))
  );
  if (r.over.length) console.log('    ⚠ cue > 160 ký tự: ' + r.over.join(', '));
}
if (slugs.length) {
  console.log('\nCổng: ' + MIN_SEC + '–' + MAX_SEC + 's (11:40–15:00) @ ' + CPS + ' cps — chấm theo GIÂY');
  console.log('   Tham khảo: ' + MIN + '–' + MAX + ' ký tự (ký tự chỉ là proxy).');
  console.log('⚠ Số CHỐT là dry-run: node scripts/voice-sovits.mjs --project projects/<slug> --dry-run');
}
process.exit(bad ? 1 : 0);
