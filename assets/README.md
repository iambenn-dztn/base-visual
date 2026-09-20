# assets/ — Tài nguyên dùng chung cho MỌI project

## Nhạc nền chung: `bgm.mp3`
Đặt file nhạc nền (tạo bằng Suno) tại đây với tên **`bgm.mp3`**. Mọi project trong
`projects/<slug>/` sẽ dùng chung file này làm nền.

- File ngắn (2–4 phút) cũng được — script `scripts/mix-bgm.mjs` sẽ **tự lặp** cho vừa
  độ dài từng video và **hạ nhỏ dưới giọng đọc** (ducking) rồi trộn vào narration.
- Prompt Suno gợi ý (bật Instrumental):
  `calm ambient background pad, soft warm drone, gentle 432Hz-style soothing tones, slow airy synth textures, no drums, no melody, no build-ups, continuous and even, peaceful and unobtrusive, deep spacious reverb, meditative, instrumental`

## Quy trình dùng (mỗi project)
```
node scripts/mix-bgm.mjs       --project projects/<slug>   # trộn bgm.mp3 (lặp + ducking) vào narration
node scripts/gen-captions.mjs  --project projects/<slug>   # phụ đề ≤42 ký tự theo mốc thật
node scripts/finalize-remap.mjs --project projects/<slug>  # gắn track đã trộn + khớp hình vào composition
```
`mix-bgm.mjs` tạo `projects/<slug>/voice/narration_mixed.mp3`; `finalize-remap.mjs` gắn file
đã trộn vào `<audio>` của composition. Không có `bgm.mp3` thì pipeline vẫn chạy với chỉ giọng đọc.
