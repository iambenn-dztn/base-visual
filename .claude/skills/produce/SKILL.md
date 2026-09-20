---
name: produce
description: >
  Chạy toàn bộ pipeline sản xuất video pop-science tiếng Việt từ một chủ đề: script →
  storyboard → voice → visual → render. Điều phối 5 subagent theo đúng thứ tự, truyền
  <slug> xuyên suốt, dừng duyệt sau mỗi khâu (hoặc chạy thẳng). Dùng khi người dùng nói
  "làm video về ...", "produce ...", "chạy cả pipeline", hoặc đưa một chủ đề và muốn ra
  MP4 hoàn chỉnh.
---

# Produce — Orchestrator pipeline video

Điều phối 5 khâu để biến **một chủ đề** thành **video MP4** hoàn chỉnh. Bạn (Claude ở
main loop) đóng vai nhạc trưởng: gọi lần lượt các subagent, kiểm tra đầu ra, rồi chuyển khâu.

## Thứ tự BẮT BUỘC (đồng hồ chủ = audio)

```
1. scriptwriter      → projects/<slug>/script.md      (có mã cue, 2400–2600 từ)
2. storyboard-artist → projects/<slug>/storyboard.md  (ánh xạ theo cue, 30–50 shot)
3. voice-generator   → projects/<slug>/timing.json    (+ timing.dryrun.json + voice/ + narration_mixed.mp3) ← THỜI LƯỢNG CHUẨN (đo mp3 thật)
4. visual-builder    → index.html (GỐC)                (composition, khớp timing.json; phụ đề ≤42 ký tự/dòng)
5. render+đóng gói   → output/<slug>/{<slug>.mp4, thumbnail.jpg, YOUTUBE.md}
```

Voice (khâu 3) chạy **trước** visual (khâu 4) vì thời lượng đọc thật quyết định timeline hình.
Chưa có `AIMAX_API_KEY` thì chạy voice **dry-run** để có `timing.json` ước lượng, dựng visual +
render bản nháp trước, rồi sinh giọng thật sau và chạy `finalize-remap.mjs` để khớp lại hình.

## Quy trình điều phối

0. **Bảo vệ tập trước.** `index.html` gốc đang chứa tập vừa dựng. Kiểm tra nó đã được sao lưu
   vào `projects/<slug-trước>/index.html` chưa; chưa thì copy ngay. Repo không dùng git — ghi
   đè khi chưa lưu là mất tập vĩnh viễn.
1. **Chốt chủ đề + slug.** **Đọc `projects/EPISODES-PRODUCED.md`** để không trùng tập cũ.
   Đặt `<slug>` kebab-case (vd `du-hanh-lo-sau`).
   Hỏi người dùng muốn **dừng duyệt sau mỗi khâu** (mặc định) hay **chạy thẳng**.
2. **Khâu 1 — scriptwriter:** dispatch subagent `scriptwriter` với chủ đề + slug. Chờ `script.md`.
   Checkpoint: đủ 4 chương, mã cue tăng dần, **2400–2600 từ trong các khối `[THE VOICE]`**.
   Thiếu từ → trả về viết thêm, đừng đi tiếp (sửa ở khâu sau đắt hơn nhiều).
3. **Khâu 2 — storyboard-artist:** dispatch với slug. Chờ `storyboard.md`. Checkpoint: 30–50 shot,
   mỗi shot có ánh xạ cue + dòng ELEMENT cụ thể, ghi rõ loại visual.
4. **Khâu 3 — voice-generator:** dispatch với slug. Luôn dry-run trước; nếu có key + người dùng
   đồng ý → bản thật. Checkpoint: **`timing.json` totalDuration ≥ 780s (13 phút)** và
   `timing.dryrun.json` tồn tại. Chưa đủ 780s → quay lại khâu 1.
   Sau bản thật: trộn nhạc nền `node scripts/mix-bgm.mjs --project projects/<slug>`
   → `voice/narration_mixed.mp3`.
5. **Khâu 4 — visual-builder:** dispatch với slug. Dựng thẳng vào **`index.html` GỐC**. Thứ tự
   lệnh **không được đảo**:
   ```
   node scripts/gen-captions.mjs   --project projects/<slug>    # CUES ngắn ≤42 ký tự
   node scripts/finalize-remap.mjs --project projects/<slug>    # khớp hình↔giọng thật + wire audio
   ```
   Checkpoint: `npm run check` pass, timeline `main` paused, mọi hoạt ảnh là hàm thuần của `t`
   (không `rAF`/`Date.now`/`+= dt`), có track `<audio>` narration, `TOTAL` = totalDuration thật.
6. **Khâu 5 — render + đóng gói:** dispatch `render` với slug. Render (env `HYPERFRAMES_FFMPEG_PATH`
   + chunked encode cho video dài — xem render.md) ra `output/<slug>/<slug>.mp4`; xác nhận độ dài ≈
   totalDuration, có tiếng, spot-check frame. Rồi sinh **thumbnail (CTR)** + **YOUTUBE.md** gom vào
   `output/<slug>/` (đúng 3 file). Checkpoint: 3 file tồn tại, thumbnail < 2MB,
   `projects/<slug>/index.html` đã lưu, **`EPISODES-PRODUCED.md` đã cập nhật**.
7. **Tổng kết:** đường dẫn `output/<slug>/` (mp4 + thumbnail + YOUTUBE.md) + số liệu (độ dài, cỡ file).

## Nguyên tắc

- **Truyền slug xuyên suốt** — mọi agent đọc/ghi trong `projects/<slug>/`.
- **Không nhảy khâu.** Nếu một khâu lỗi, sửa xong mới đi tiếp.
- **Tôn trọng checkpoint.** Mặc định dừng cho người dùng xem trước khi sang khâu sau; chỉ chạy
  thẳng khi người dùng yêu cầu.
- **Tiết kiệm credit:** khuyến khích dry-run voice + render nháp fps thấp khi thử nghiệm;
  chỉ chạy voice thật + render 30fps khi đã ưng bản nháp.

## Tiền đề môi trường (nhắc người dùng khi cần)
- **Node ≥ 22.** ⚠️ Máy này KHÔNG có ffmpeg hệ thống → render qua env `HYPERFRAMES_FFMPEG_PATH`/
  `HYPERFRAMES_FFPROBE_PATH` trỏ `scripts/ffbin/`; video dài bật `PRODUCER_ENABLE_CHUNKED_ENCODE`.
  Chi tiết ở render.md / bài học [[render-env-windows]].
- (Một lần) `npx skills add heygen-com/hyperframes` để Claude Code có kỹ năng HyperFrames.
- **Voice = AIMAX Studio (MiniMax)** — `AIMAX_API_KEY` trong `scripts/.env`. (ElevenLabs chỉ còn là
  ElevenLabs đã bỏ — bản cũ nằm ở `scripts/_deprecated/`, đừng dùng: nó không sinh `.srt` nên
  gãy khâu phụ đề.) Nhạc nền dùng chung: `assets/bgm.mp3` (mix-bgm.mjs tự trộn).
- Timing đo từ **mp3 thật** (không phải mốc SRT) → phụ đề khớp tiếng. Xem [[timing-from-real-mp3]].
