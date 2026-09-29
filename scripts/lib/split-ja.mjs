// split-ja.mjs — Cắt phụ đề TIẾNG NHẬT thành dòng ngắn, tất định.
//
// VÌ SAO CẦN: `chunk()` cũ trong gen-captions.mjs cắt theo `text.split(/\s+/)` — ranh giới
// khoảng trắng. Tiếng Nhật không có khoảng trắng, nên cả câu thành MỘT "từ", vòng lặp không
// bao giờ cắt được, và luật ≤N ký tự **thất bại trong im lặng**: không báo lỗi, chỉ cho ra
// một dòng phụ đề dài gấp đôi khung hình. Đo thật: một câu 67 ký tự trả về đúng 1 mảnh.
//
// NGƯỠNG: 22 ký tự toàn角, không phải 42.
// Chữ Nhật rộng gấp đôi chữ Latin. Ở #sub (font-size 40px, khung min(1400px,86%)), 42 chữ
// toàn角 ≈ 1680px → tràn khung và tự xuống 2 dòng, phá vỡ giả định "1 dòng" mà
// HFA.applySubtitle dựa vào. 22 chữ ở 56px ≈ 1232px → vừa khung.
// (Con số 22 và cỡ chữ ≥56px lấy từ docs/nghien-cuu-thi-truong-nhat-senior.md mục 5 —
//  tệp 50+ xem trên màn hình TV.)
//
// CÁCH CẮT — ưu tiên từ mạnh xuống yếu, luôn tất định:
//   1. Sau 。！？ (hết câu) — ranh giới tốt nhất.
//   2. Sau 、 (ngắt vế).
//   3. Trước trợ từ nối và sau các đuôi mệnh đề thường gặp (は・が・を・に・で・と・も…、
//      〜て・〜で・〜が・〜けど) — xấp xỉ ranh giới 文節 mà không cần bộ phân tích hình thái.
//   4. Cùng lắm thì cắt cứng theo số ký tự.
//
// 禁則処理 (kinsoku): không để một dòng BẮT ĐẦU bằng 。、」』）・ー々, và không để dòng
// KẾT THÚC bằng 「『（. Sau khi cắt xong sẽ kéo các ký tự đó về dòng trước/sau.

/** Ký tự không được đứng đầu dòng (行頭禁則). */
const NO_START = '。、，．・？！」』）］｝〉》”’ー〜ぁぃぅぇぉっゃゅょゎヵヶァィゥェォッャュョヮ々';
/** Ký tự không được đứng cuối dòng (行末禁則). */
const NO_END = '「『（［｛〈《“‘';

/** Trợ từ/đuôi mệnh đề: cắt NGAY SAU các ký tự này là nhịp tự nhiên. */
const SOFT_AFTER = ['では', 'には', 'とは', 'から', 'まで', 'けど', 'ので', 'のに', 'ても', 'でも',
  'は', 'が', 'を', 'に', 'で', 'と', 'も', 'や', 'ね', 'よ', 'て'];

const cp = (s) => [...s];
const len = (s) => cp(s).length;

/** Cắt cứng theo số ký tự, tôn trọng kinsoku. */
function hardSplit(text, max) {
  const c = cp(text);
  const out = [];
  let i = 0;
  while (i < c.length) {
    let take = Math.min(max, c.length - i);
    // không để dòng SAU bắt đầu bằng ký tự cấm → lùi điểm cắt cho ký tự đó ở lại dòng này
    while (take > 1 && i + take < c.length && NO_START.includes(c[i + take])) take--;
    // không để dòng NÀY kết thúc bằng ký tự cấm
    while (take > 1 && NO_END.includes(c[i + take - 1])) take--;
    out.push(c.slice(i, i + take).join(''));
    i += take;
  }
  return out;
}

/**
 * Cắt một đoạn tiếng Nhật thành các dòng ≤ max ký tự.
 * Trả mảng chuỗi, không mảnh nào rỗng, ghép lại đúng bằng text gốc (trừ khoảng trắng thừa).
 */
export function splitJa(text, max = 22) {
  const src = String(text).replace(/\s+/g, '').trim();
  if (!src) return [];
  if (len(src) <= max) return [src];

  // Bước 1: tách sau dấu kết câu, giữ dấu ở cuối mảnh.
  let units = [];
  {
    let buf = '';
    for (const ch of cp(src)) {
      buf += ch;
      if ('。！？'.includes(ch)) { units.push(buf); buf = ''; }
    }
    if (buf) units.push(buf);
  }

  // Bước 2+3: mảnh nào còn dài thì tách tiếp ở 、 rồi ở trợ từ.
  const refine = (s) => {
    if (len(s) <= max) return [s];

    // 2: sau 、
    const byComma = [];
    {
      let buf = '';
      for (const ch of cp(s)) {
        buf += ch;
        if (ch === '、') { byComma.push(buf); buf = ''; }
      }
      if (buf) byComma.push(buf);
    }
    if (byComma.length > 1) return byComma.flatMap(refine);

    // 3: sau trợ từ — chọn điểm cắt GẦN GIỮA nhất để hai vế cân nhau
    const c = cp(s);
    const lo = Math.max(1, Math.floor(c.length * 0.25));
    const hi = Math.min(c.length - 1, Math.ceil(c.length * 0.75));
    let best = -1, bestDist = Infinity;
    const mid = c.length / 2;
    for (let i = lo; i <= hi; i++) {
      for (const p of SOFT_AFTER) {
        const pl = cp(p).length;
        if (i - pl < 0) continue;
        if (c.slice(i - pl, i).join('') !== p) continue;
        if (NO_START.includes(c[i])) continue;   // tôn trọng kinsoku
        const d = Math.abs(i - mid);
        if (d < bestDist) { bestDist = d; best = i; }
      }
    }
    if (best > 0) {
      return [c.slice(0, best).join(''), c.slice(best).join('')].flatMap(refine);
    }

    // 4: cắt cứng
    return hardSplit(s, max);
  };

  const parts = units.flatMap(refine).filter(Boolean);

  // Gộp mảnh quá ngắn vào mảnh trước nếu tổng vẫn vừa — tránh phụ đề nhấp nháy 2-3 chữ.
  const out = [];
  for (const p of parts) {
    const prev = out[out.length - 1];
    if (prev && len(p) <= 6 && len(prev) + len(p) <= max) out[out.length - 1] = prev + p;
    else out.push(p);
  }
  return out;
}

/** true nếu chuỗi có ký tự Nhật (kana hoặc kanji). Dùng để tự chọn cách cắt. */
export function isJapanese(text) {
  return /[぀-ヿ㐀-䶿一-鿿]/.test(String(text));
}
