---
name: produce
description: >
  Chạy toàn bộ pipeline sản xuất video TIẾNG NHẬT (kênh 死と「その後」) từ một chủ đề: script →
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
0. ĐÓNG GÓI TRƯỚC    → projects/<slug>/packaging.md   (5 cặp tiêu đề + concept bìa, chọn 1, lời hứa, brief) ← CỔNG NGƯỜI DUYỆT
1. scriptwriter      → projects/<slug>/script.md      (có mã cue; 2.900–3.800 ký tự Nhật)
2. storyboard-artist → projects/<slug>/storyboard.md  (ánh xạ theo cue, 30–50 shot)
3. voice-generator   → projects/<slug>/timing.json    (+ timing.dryrun.json + voice/ + narration_mixed.mp3) ← THỜI LƯỢNG CHUẨN (đo mp3 thật)
4. visual-builder    → index.html (GỐC)                (composition, khớp timing.json; phụ đề ≤22 Nhật / ≤42 Việt)
5. render+đóng gói   → output/k2-ep<N>-<tên-việt>/{k2-ep<N>-<tên-việt>.mp4, thumbnail.jpg, YOUTUBE.md}
```

Voice (khâu 3) chạy **trước** visual (khâu 4) vì thời lượng đọc thật quyết định timeline hình.
Server TTS chưa bật thì chạy voice **dry-run** để có `timing.json` ước lượng, dựng visual +
render bản nháp trước, rồi sinh giọng thật sau và chạy `finalize-remap.mjs` để khớp lại hình.

### Model của từng khâu — đã chốt, đừng tự đổi

Mỗi subagent gán model riêng qua trường `model:` trong frontmatter của chính file
`.claude/agents/<tên>.md` — **không** phải qua tham số dispatch, và **không** đồng bộ theo
model của phiên chính (main loop). Bảng hiện tại:

| Khâu | Agent | Model | Vì sao |
|---|---|---|---|
| 1 | scriptwriter | **opus** | Nền tảng cả pipeline — sai văn phong/luận điểm ở đây thì storyboard, voice, hình đều hỏng theo, sửa muộn tốn hơn nhiều so với sửa ngay khâu 1. |
| 2 | storyboard-artist | *(mặc định phiên)* | Bám sát script có sẵn, ít suy luận sáng tạo mới — model mặc định đủ. |
| 3 | voice-generator | **haiku** | Chủ yếu chạy script có sẵn (`voice-sovits.mjs`) + đo file bằng ffmpeg, gần như không cần suy luận — chọn model rẻ/nhanh nhất. |
| 4 | visual-builder | **opus** | Khâu gây lỗi thật nhiều nhất khi dùng model yếu hơn: sai đơn vị `loc()`, sai trục FOV toàn hệ thống, thiếu ánh sáng, mesh vỡ hình học, layer đè nhau, nội dung tràn khung. Đây là suy luận không gian 3D + tự phát hiện lỗi qua nhiều vòng snapshot — cần model mạnh nhất, và rẻ hơn hẳn so với phải render lại (~28 phút GPU/lần) khi lỗi lọt qua.
| 5 | render | *(mặc định phiên)* | Đóng gói theo khuôn mẫu rõ ràng (thumbnail + YOUTUBE.md) — model mặc định đủ. |

Đổi model của một khâu = sửa dòng `model:` trong đúng file agent đó, không sửa ở đây.
Nếu chất lượng một khâu đang "mặc định" xuống thấp rõ rệt qua vài tập, cân nhắc nâng lên
opus cho riêng khâu đó — nhưng phải có bằng chứng thật (output tệ), đừng nâng phòng ngừa.

## Quy trình điều phối

0. **Bảo vệ tập trước.** `index.html` gốc đang chứa tập vừa dựng. Kiểm tra nó đã được sao lưu
   vào `projects/<slug-trước>/index.html` chưa; chưa thì copy ngay. Repo có git nhưng chỉ cứu
   được bản đã commit; sao lưu vẫn bắt buộc.
1. **Chốt chủ đề + slug.** Đọc `docs/chien-luoc-kenh-nhat.md` (ANGLE, khuôn tựa, trụ cột,
   **mục 4 luật an toàn**) và `projects/EPISODES-PRODUCED-JA.md` (không trùng tập cũ, kho
   chủ đề, số liệu). Dự án độc lập — không cần kiểm chéo dự án/kênh nào khác.
   Slug đặt bằng **romaji** (`shijukunichi`), không dùng kanji trong tên thư mục.
   Chủ đề phải có **bằng chứng cầu** (thắng ở kênh thước với bội số ≥2, hoặc là outlier nội bộ);
   nếu người dùng đưa chủ đề trần, hỏi bằng chứng trước khi đi tiếp. Đặt `<slug>` kebab-case.
   Hỏi người dùng muốn **dừng duyệt sau mỗi khâu** (mặc định) hay **chạy thẳng** (Khâu 0 vẫn
   luôn dừng, không có chế độ chạy thẳng cho cổng này).
1b. **Khâu 0 — Đóng gói trước.** Bạn (main loop) viết `projects/<slug>/packaging.md` theo mẫu ở
   `docs/chien-luoc-kenh-nhat.md` mục 6. Tiêu đề theo **mục 2** của sổ đó: sinh 10 tiêu đề theo
   khuôn `{対象}はなぜ{現象}のか｜{典拠}`, ghi câu hỏi nó mở ra + số ký tự, chấm checklist 8 điểm
   (**≤30 ký tự toàn角**, vế trước `｜` tự đứng được, có vòng lặp, không hớt hải,
   **không có chữ 死**), giữ 5 điểm cao nhất theo 5 công thức khác nhau, ghép concept bìa
   (chủ thể là vật/cảnh nghi lễ, **chữ ≤8 ký tự toàn角 dạng câu hỏi**, cảm xúc), thêm phương án
   B khác góc để đổi sau 24h. Trình cho người dùng chọn 1 cặp và trả lời phép thử giết sớm:
   *"chính anh có bấm không?"* Không → KILL, quay lại bước 1 với chủ đề khác. Có → ghi lời hứa +
   brief (mở gì · kể thứ tự nào · chốt ở đâu · khung chính) rồi mới sang khâu 1. **Đây là cổng rẻ
   nhất; mọi lỗi bắt ở đây tiết kiệm cả tuần.**
   ⚠⚠ **CỔNG TIÊU ĐỀ — luật mục 2b, dễ trượt nhất.** Tiêu đề phải khớp **câu người ta đang GÕ
   TÌM**, không phải câu hỏi lớn của trụ. Trong 10 tiêu đề sinh ra, **≥6 phải bắt đầu từ một
   hoàn cảnh có thật** (vừa xong 初七日 · sắp tới 一周忌 · thấy 位牌 trong nhà · được bảo mua
   六文銭), không phải từ khái niệm. Mỗi tiêu đề ghi thêm **một dòng "ai gõ câu này"** —
   một người, một hoàn cảnh, một thời điểm. Viết không nổi dòng đó → **loại thẳng, dù 8 điểm
   ở mọi mục khác**. Vế trước `｜` chỉ được dùng từ người ta **biết TRƯỚC khi xem**
   (法要, 四十九日, 三途の川, 閻魔さま) — từ biết-SAU (中陰, 本地, antarābhava, 六道) là
   phần thưởng trong video, không phải mồi tìm kiếm.
   Tiền lệ tập 01: 「魂はどこから来てどこへ行くのか」 duyệt xong, render xong mới phát hiện
   không ai gõ câu đó; phải đổi sang 「なぜ七日ごとに法要をするのか」.

2. **Khâu 1 — scriptwriter:** dispatch subagent `scriptwriter` với slug (nó đọc `packaging.md`).
   Chờ `script.md`.
   Checkpoint: đủ 4 chương, mã cue tăng dần, đủ độ dài trong các khối `[THE VOICE]`
   (**2.900–3.800 ký tự** ở 4,89 ký tự/giây ≈ 10–13 phút).
   Thiếu từ → trả về viết thêm, đừng đi tiếp (sửa ở khâu sau đắt hơn nhiều).
3. **Khâu 2 — storyboard-artist:** dispatch với slug. Chờ `storyboard.md`. Checkpoint: 25–40 shot (nhịp chậm cho tệp 50-60+),
   mỗi shot có ánh xạ cue + dòng ELEMENT cụ thể, ghi rõ loại visual.
4. **Khâu 3 — voice-generator:** dispatch với slug. Luôn dry-run trước; server GPT-SoVITS
   đang chạy thì làm bản thật luôn (không tốn tiền, không cần hỏi).
   Checkpoint: **`timing.json` totalDuration ≥ 600s (10 phút)** và `timing.dryrun.json` tồn tại.
   Chưa đủ 600s → quay lại khâu 1.
   ⚠ Ngưỡng 600s (không phải 780s như kênh Việt): ba tập đầu nhắm 10–13 phút để ĐO xem tệp Nhật
   50+ chịu được bao lâu, rồi mới chốt chuẩn — xem `chien-luoc-kenh-nhat.md` mục 9.
   Sau bản thật: **dựng track audio hoàn chỉnh** (intro + thân + outro):
   ```bash
   node scripts/build-audio.mjs --project projects/<slug>
   ```
   → `narration_mixed.mp3` có **2s intro** (nhạc, chưa có giọng) + thân + **5s outro**
   (nhạc lên, màn hình đen), và `audio.json` ghi mốc cho khâu 4.
   Nhạc lấy từ `assets/bg-music/` theo playlist mạch cảm xúc (đổi bằng `--bgm`).
   ⚠ **Vì sao có intro/outro:** người xem 50-60+ trên TV cần một nhịp trước lời đầu tiên;
   và nhạc phải kết trọn câu, không bị cắt cụt — quan trọng với chủ đề tang lễ.
   *(`mix-bgm.mjs` cũ chỉ lặp MỘT file trên đúng độ dài narration, không chèn được
   lead/tail — chỉ dùng cho tập Việt cũ.)*
   → `voice/narration_mixed.mp3`. **Cổng "nghe mù 30 giây":** nhờ người dùng nhắm mắt nghe 30
   giây đầu `narration_mixed.mp3`. Nghe như máy đọc → sửa kịch bản (từ đệm, ý kiến cá nhân, câu
   song song) hoặc đổi speed/giọng rồi sinh lại, đừng dựng hình lên giọng chưa đạt.
5. **Khâu 4 — visual-builder:** dispatch với slug. Dựng thẳng vào **`index.html` GỐC**. Thứ tự
   lệnh **không được đảo**:
   ```
   node scripts/gen-captions.mjs    --project projects/<slug>   # CUES ngắn (tự nhận ngôn ngữ)
   node scripts/finalize-remap.mjs  --project projects/<slug>   # CHỈ khi hình dựng trước giọng
   node scripts/apply-lead-tail.mjs --project projects/<slug>   # dịch timeline +lead, chèn màn đen
   ```
   ⚠ `apply-lead-tail.mjs` **bắt buộc** nếu khâu 3 đã chạy `build-audio.mjs` — nó đọc
   `audio.json` rồi dịch cả timeline hình sang phải `lead` giây, cộng `lead` vào mọi mốc
   `CUES`, và chèn overlay đen cho outro. **Bỏ qua thì hình và tiếng lệch đúng `lead` giây.**
   Script idempotent, chạy lại lần hai không dịch thêm.

   Checkpoint: `npm run check` pass, timeline paused, mọi hoạt ảnh là hàm thuần của `t`
   (không `rAF`/`Date.now`/`+= dt`), có track `<audio>` narration, `TOTAL` = `audio.json.totalDuration`.

   ⭐ **CHECKPOINT QUAN TRỌNG NHẤT — XEM ẢNH, ĐỪNG TIN `npm run check`:**
   ```
   npx hyperframes snapshot --at <10-15 mốc rải khắp tập> --no-end --timeout 20000 -o snapshots
   ```
   Mở `contact-sheet.jpg` ra **nhìn bằng mắt**. Đã có tiền lệ: ba cổng kiểm PASS SẠCH trong
   khi **cả 47 cảnh đóng băng ở 1% đầu** (lệch đơn vị `loc()`) — không lỗi nào để lần theo.
   Danh sách sáu lỗi "pass mà sai" ở `.claude/agents/visual-builder.md`.
   ⚠ Tập có intro: snapshot chụp theo **thời gian THẬT**, muốn xem giây cảnh X phải chụp ở **X+lead**.
6. **Khâu 5 — render + đóng gói:** dispatch `render` với slug **và tên thư mục giao**
   `k2-ep<N>-<tên-việt>` (`<N>` = số tập trong sổ; tên tiếng Việt không dấu, gạch nối; **tiền tố
   `k2-` bắt buộc** — quy ước cố định của dự án — nếu
   `packaging.md` chưa ghi thì **hỏi người dùng**, đừng tự chế). Render (env
   `HYPERFRAMES_FFMPEG_PATH` + chunked encode cho video dài — xem render.md) thẳng ra
   `output/k2-ep<N>-<tên-việt>/k2-ep<N>-<tên-việt>.mp4`; xác nhận độ dài ≈ **`audio.json.totalDuration`**
   (tập có intro/outro — KHÔNG phải `timing.json`), có tiếng, spot-check frame.
   Rồi **thumbnail thực hiện concept đã duyệt ở `packaging.md`** (không sáng tác lại) +
   **YOUTUBE.md** với tiêu đề đã duyệt, gom vào `output/k2-ep<N>-<tên-việt>/` (đúng 3 file).
   ⚠ `projects/<slug>/` và `output/_assets/<slug>/` **vẫn giữ slug romaji** — đổi slug là
   vỡ composition. Checkpoint: 3 file tồn tại, thumbnail < 2MB, tiêu đề + bìa đúng cặp đã duyệt,
   **tiêu đề qua lại ba câu thử mục 2b**, `projects/<slug>/index.html` đã lưu,
   **`EPISODES-PRODUCED-JA.md` đã cập nhật** (kể cả dòng trống ở bảng Số liệu).
7. **Tổng kết:** đường dẫn `output/k2-ep<N>-<tên-việt>/` (mp4 + thumbnail + YOUTUBE.md) + số liệu (độ dài, cỡ file).
   Nhắc người dùng: đăng cách tập trước ≥7 ngày; điền view/CTR/AVD vào `EPISODES-PRODUCED.md`
   ở mốc 48h và 7 ngày; đọc tín hiệu 24h đầu (CTR × impressions, mục 6 chiến lược): CTR thấp thì
   đổi sang phương án B trong `packaging.md` trước, đổi bìa sau, mỗi lần một biến.

## Nguyên tắc

- **Đóng gói trước sản xuất.** Không có `packaging.md` đã duyệt thì không gọi scriptwriter.
  Tiêu đề + bìa là lời hứa; video là phần thực hiện lời hứa.
- **Người dùng giữ ba quyết định:** chọn ý tưởng, đóng gói, duyệt trước khi đăng. Bạn đề xuất,
  không tự chốt ba việc này kể cả ở chế độ chạy thẳng.
- **Truyền slug xuyên suốt** — mọi agent đọc/ghi trong `projects/<slug>/`.
- **Không nhảy khâu.** Nếu một khâu lỗi, sửa xong mới đi tiếp. Lỗi ở khâu nào thì làm lại từ
  khâu đó, không làm lại từ đầu.
- **Tôn trọng checkpoint.** Mặc định dừng cho người dùng xem trước khi sang khâu sau; chỉ chạy
  thẳng khi người dùng yêu cầu.
- **Tiết kiệm credit:** khuyến khích dry-run voice + render nháp fps thấp khi thử nghiệm;
  chỉ chạy voice thật + render 30fps khi đã ưng bản nháp.

## Tiền đề môi trường (nhắc người dùng khi cần)
- **Node ≥ 22.** ⚠️ Máy này KHÔNG có ffmpeg hệ thống → render qua env `HYPERFRAMES_FFMPEG_PATH`/
  `HYPERFRAMES_FFPROBE_PATH` trỏ `scripts/ffbin/`; video dài bật `PRODUCER_ENABLE_CHUNKED_ENCODE`.
  Chi tiết ở render.md / bài học [[render-env-windows]].
- (Một lần) `npx skills add heygen-com/hyperframes` để Claude Code có kỹ năng HyperFrames.
- **Voice = GPT-SoVITS chạy LOCAL** (giọng `keita` — nam trung niên 99 Hz, speed 0.95). Bật server trước,
  kiểm bằng `curl http://127.0.0.1:9880/health`. Không cần API key, không tốn tiền.
  Tất định: cùng `--seed` → cùng file. (AIMAX giữ lại cho tập Việt cũ; ElevenLabs đã bỏ.)
  Nhạc nền dùng chung: `assets/bgm.mp3` (mix-bgm.mjs tự trộn).
- **Server không sinh `.srt`** — không sao, `gen-captions.mjs` cắt phụ đề tiếng Nhật theo 。、.
- **Font Nhật `assets/fonts/BIZUDPGothic-*.ttf` phải được khai `@font-face` trong composition.**
  `"Segoe UI"` không có glyph CJK → ô tofu. Render headless không được phụ thuộc font máy.
- Timing đo từ **file audio thật** (không phải mốc SRT) → phụ đề khớp tiếng. Xem [[timing-from-real-mp3]].
