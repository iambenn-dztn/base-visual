// parse-script.mjs — Bóc kịch bản .md thành danh sách cue tất định.
//
// Quy ước đánh dấu trong script.md (do scriptwriter agent tạo):
//
//   <!-- cue: C01 | chapter: CHƯƠNG 1 -->
//   [THE VOICE]
//   Tôi mở mắt, và bóng tối không còn là bóng tối nữa...
//
//   <!-- gap: 2.0 -->            ← khoảng lặng 2 giây (tùy chọn)
//
// - Mỗi cue là một đơn vị đọc (một segment audio).
// - `chapter` là tùy chọn; nếu có sẽ dùng để hiện nhãn chương trên visual.
// - Chỉ lấy phần văn xuôi ngay dưới [THE VOICE]; bỏ qua [AUDIO DIRECTION].
// - Marker `<!-- gap: N -->` chèn khoảng lặng N giây vào timeline.

import { readFileSync } from 'node:fs';

const CUE_RE = /<!--\s*cue:\s*([A-Za-z0-9_-]+)\s*(?:\|\s*chapter:\s*([^>]*?)\s*)?-->/g;
const GAP_RE = /<!--\s*gap:\s*([\d.]+)\s*-->/g;

// Trả về mảng item theo thứ tự: {type:'cue', id, chapter, text} | {type:'gap', seconds}
export function parseScript(mdPath) {
  const raw = readFileSync(mdPath, 'utf8');
  return parseScriptText(raw);
}

export function parseScriptText(raw) {
  // Gom mọi marker (cue + gap) theo vị trí xuất hiện.
  const markers = [];
  let m;
  CUE_RE.lastIndex = 0;
  while ((m = CUE_RE.exec(raw)) !== null) {
    markers.push({ kind: 'cue', index: m.index, end: CUE_RE.lastIndex, id: m[1], chapter: (m[2] || '').trim() || null });
  }
  GAP_RE.lastIndex = 0;
  while ((m = GAP_RE.exec(raw)) !== null) {
    markers.push({ kind: 'gap', index: m.index, end: GAP_RE.lastIndex, seconds: parseFloat(m[1]) });
  }
  markers.sort((a, b) => a.index - b.index);

  if (markers.filter((x) => x.kind === 'cue').length === 0) {
    throw new Error(
      'Không tìm thấy marker <!-- cue: Cxx --> nào trong kịch bản. ' +
      'Scriptwriter phải gắn mã cue cho từng khối [THE VOICE].'
    );
  }

  const items = [];
  for (let i = 0; i < markers.length; i++) {
    const cur = markers[i];
    const next = markers[i + 1];
    if (cur.kind === 'gap') {
      items.push({ type: 'gap', seconds: cur.seconds });
      continue;
    }
    // cur.kind === 'cue' → lấy văn bản từ sau marker tới marker kế tiếp.
    const chunk = raw.slice(cur.end, next ? next.index : raw.length);
    const text = extractVoiceText(chunk);
    if (text) items.push({ type: 'cue', id: cur.id, chapter: cur.chapter, text });
  }
  return items;
}

// Lấy phần lời đọc: ưu tiên nội dung sau nhãn [THE VOICE]; cắt trước [AUDIO DIRECTION]
// hoặc tiêu đề markdown. Làm sạch dấu markdown cơ bản để đọc tự nhiên.
function extractVoiceText(chunk) {
  let t = chunk;
  const voiceIdx = t.indexOf('[THE VOICE]');
  if (voiceIdx !== -1) t = t.slice(voiceIdx + '[THE VOICE]'.length);
  // Cắt tại marker kế trong cùng chunk (phòng khi có [AUDIO DIRECTION] ngay sau).
  const stops = ['[AUDIO DIRECTION]', '\n## ', '\n# ', '\n---'];
  for (const s of stops) {
    const idx = t.indexOf(s);
    if (idx !== -1) t = t.slice(0, idx);
  }
  return cleanForTTS(t);
}

export function cleanForTTS(t) {
  return t
    .replace(/\*\*|\*|__|`/g, '')          // bỏ bold/italic/code
    .replace(/^\s*>\s?/gm, '')             // bỏ blockquote
    .replace(/\[[^\]]*\]\([^)]*\)/g, '')   // bỏ link markdown
    .replace(/\r/g, '')
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)
    .join(' ')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

// Ước lượng thời lượng đọc tiếng Việt (dry-run, không gọi API).
// Mặc định ~15 ký tự/giây (điều chỉnh qua charsPerSecond).
export function estimateDuration(text, charsPerSecond = 15) {
  const n = text.replace(/\s+/g, ' ').trim().length;
  return Math.max(0.8, n / charsPerSecond);
}
