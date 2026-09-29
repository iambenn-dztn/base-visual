# 死と「その後」 — dây chuyền sản xuất video

Kênh video **tiếng Nhật** giải thích cái chết và những gì người ta tin là đến sau đó, cho người
Nhật **50-60+ xem trên TV**. Mỗi tập là một **trải nghiệm nghe** (ngôi thứ nhất 「私」) ghép với
**cảnh dựng thật bằng WebGL**. Ba tiêu chí chốt chất lượng:

1. **Nghe:** nhắm mắt vẫn hiểu trọn vẹn. Lời đọc không bao giờ phụ thuộc vào hình đang chiếu.
2. **Nhìn:** mọi cảnh dựng **giống thật nhất có thể** — vật lý đúng, shader cinematic.
   Không billboard phẳng, không cách điệu qua loa.
3. **Đúng nguồn:** mỗi khẳng định về giáo lý nêu **tên kinh**, mỗi khẳng định khoa học nêu
   **tên nghiên cứu**. Không nói tôn giáo nào đúng, không bán 終活.
   Đây là thứ tách kênh này khỏi kênh スピリチュアル và kênh 葬儀社.
4. **Khai sáng VÀ chữa lành.** Người xem đã mất người thân, hoặc đang nghĩ về cái chết của
   chính mình. Nói đủ sự thật, nhưng **đặt sự thật trong khung dịu** — kết bằng chỗ tựa CÓ
   THẬT (nghi lễ giúp người sống đi qua mất mát; điều thật sự xảy ra lúc cuối), không phải
   lời hứa siêu hình. **Không xoáy vào nỗi đau.** Chi tiết: mục 4d của sổ chiến lược.
5. **Kể chuyện CHỞ kiến thức.** Mỗi tập có **người, cảnh, cảm xúc** — đọc một mạch như
   *Muôn kiếp nhân sinh*. **Nhưng xem xong phải HỌC ĐƯỢC một điều cụ thể** và kể lại được cho
   người khác: câu chuyện là cỗ xe, kiến thức là thứ trên xe. Nguồn vẫn bắt buộc nhưng **dệt
   vào câu chuyện**: tả cảnh trước, nêu tên kinh sau, rồi giải thích cho tới nơi.
   Cảnh là **điển hình**, không bịa người có thật. Chi tiết: mục 4f của sổ chiến lược.

> ⚠ Repo này **trước đây** là kênh Việt "Du Mục Vũ Trụ" (pop-science vũ trụ). Chuyển sang kênh
> Nhật ngày 2026-09-21. 13 tập vũ trụ cũ còn trong `projects/` và `output/` — giữ để tra cứu,
> đừng lấy làm mẫu cho tập mới.

Render bằng **HyperFrames** (HTML → MP4, headless, tất định).

---

## Dây chuyền 5 khâu

Chạy cả dây chuyền bằng skill **`/produce`**. Từng khâu là một subagent riêng:

| # | Agent | Đầu vào | Đầu ra |
|---|---|---|---|
| 0 | *(main loop + người duyệt)* | chủ đề có bằng chứng cầu | `projects/<slug>/packaging.md` (5 cặp tiêu đề + bìa, chọn 1, lời hứa, brief) |
| 1 | `scriptwriter` | packaging.md | `projects/<slug>/script.md` (có mã cue) |
| 2 | `storyboard-artist` | script.md | `projects/<slug>/storyboard.md` |
| 3 | `voice-generator` | script.md | `timing.json` + `voice/` + `narration_mixed.mp3` |
| 4 | `visual-builder` | script + timing + storyboard | `index.html` (composition) |
| 5 | `render` | index.html + narration | `output/k2-ep<N>-<tên-việt>/` (mp4 + thumbnail + YOUTUBE.md) |

**Đóng gói chạy TRƯỚC kịch bản.** Tiêu đề + thumbnail là lời hứa, video là phần thực hiện; chốt
ở Khâu 0 với người duyệt, không để tới cuối. **Voice chạy TRƯỚC visual.** `timing.json` là
**đồng hồ chủ** của cả dự án — thời lượng đọc thật quyết định timeline hình, không phải ngược lại.

Tư duy vận hành kênh (ANGLE, khuôn tiêu đề, trụ cột, chọn chủ đề theo bội số, đọc số, cửa lớn
20.000 view) nằm ở **`docs/chien-luoc-kenh-nhat.md`** — sổ của **kênh Nhật 死と「その後」**.
`docs/chien-luoc-kenh.md` là sổ kênh Việt cũ (Du Mục Vũ Trụ): mục 1, 4, 6, 8 vẫn dùng được để
tra cách nghĩ, nhưng ANGLE / khuôn tựa / trụ cột / thumbnail trong đó **không áp cho kênh này**.
Nguồn gốc: `E:\YOUTUBE\KNOWLEDGE\TONG QUAN.md`.

**Dự án này độc lập hoàn toàn** — không cần kiểm chéo với bất kỳ kênh/dự án nào khác khi
chọn chủ đề mới.

### Quy ước `index.html`

HyperFrames chỉ preview/render **một** `index.html` ở gốc. Vì vậy:

- `index.html` (gốc) = **tập đang dựng**. visual-builder ghi thẳng vào đây.
- `projects/<slug>/index.html` = **bản lưu** của tập đã render xong.
- Trước khi bắt đầu tập mới: kiểm tra `index.html` gốc đã được sao lưu vào
  `projects/<slug>/index.html` chưa. Ghi đè khi chưa lưu là **mất tập**.
- Không tạo `projects/<slug>/visual.html` — mô hình đó đã bỏ.

### Đơn vị thời gian

Kênh Nhật: **10–13 phút** cho ba tập đầu (≥ 600s), chốt chuẩn sau khi đo retention.
Đơn vị đo **khác nhau theo ngôn ngữ** — đừng lẫn:

| Kênh | Đơn vị | Nhịp đo thật | Kịch bản cho 13–14 phút |
|---|---|---|---|
| Việt (tập cũ) | từ | ~180 từ/phút (giọng Anh Khôi, speed 0.90) | 2400–2600 từ |
| **Nhật** | **ký tự** | **4,89 ký tự/giây ≈ 293 ký tự/phút** (keita, speed 0.95, đo trên đoạn văn thật) | **2.900–3.800 ký tự** |

Tiếng Nhật không đếm "từ" được. Hằng số cũ `cps = 15` là của tiếng Việt; áp cho tiếng Nhật
sẽ ước lượng **hụt ~3 lần** và cổng thời lượng bắn sai.

**Giọng của kênh là `keita`** (nam trung niên, F0 99 Hz, `--speed 0.95`) — chốt 2026-09-21.
Đo trên **đoạn văn thật** (143 ký tự): 29,22s → **4,89 cps**. ⚠ Đo trên **câu rời** cho ~5,8 cps —
đừng dùng số đó, vì đoạn văn có dấu 。、 giữa câu, mỗi chỗ TTS nghỉ một nhịp. Lấy số câu rời sẽ
làm kịch bản thiếu ~15% chữ mà dry-run vẫn báo đủ giờ.

---

## Lệnh

```bash
npm run dev      # studio preview localhost:3002 — LONG-RUNNING, luôn chạy nền
npm run check    # lint + validate + inspect — BẮT BUỘC sau mỗi lần sửa composition
npm run render   # render MP4 (xem biến môi trường bên dưới)
```

### Render trên máy này (Windows, KHÔNG có ffmpeg hệ thống)

`hyperframes render` **chỉ đọc biến môi trường**, không đọc PATH. ffmpeg/ffprobe đã đóng gói
sẵn ở `scripts/ffbin/`:

```powershell
$env:HYPERFRAMES_FFMPEG_PATH  = "$PWD\scripts\ffbin\ffmpeg.exe"
$env:HYPERFRAMES_FFPROBE_PATH = "$PWD\scripts\ffbin\ffprobe.exe"
$env:FFMPEG_ENCODE_TIMEOUT_MS = '3000000'      # video >10 phút vượt timeout mặc định 600000
$env:PRODUCER_ENABLE_CHUNKED_ENCODE = 'true'   # tránh 1 tiến trình ffmpeg chạy quá lâu bị kill
$env:TEMP = 'E:\hf-tmp'; $env:TMP = 'E:\hf-tmp'   # ⚠ BẮT BUỘC cho video dài — xem bên dưới
$env:NODE_OPTIONS = '--max-old-space-size=8192'    # heap mặc định 4288MB không đủ 6 worker
npx --yes hyperframes render . -o output/<slug>/<slug>.mp4 -q high --gpu --browser-gpu
```

`--gpu` = encode NVENC; `--browser-gpu` = ép capture WebGL bằng GPU NVIDIA (không fallback
SwiftShader). Nút cổ chai là **shader nặng lúc capture**, không phải encode.

**⚠ Vì sao phải đặt `TEMP`/`TMP`:** HyperFrames hardcode thư mục tạm vào system temp khi chạy
Windows (`resolveRenderWorkDirPrefix()` — trên macOS/Linux nó đặt cạnh file output, chỉ Windows
mới bị đá về temp). HyperFrames **kiểm tra trước** và đòi ~260 GB cho video 17 phút (31.000 frame
PNG thô); ổ `C:` chỉ còn 80 GB nên nó từ chối chạy, fail sau ~37 giây ở phase `capture_disk`.
Thực tế khi chạy được thì chỉ chiếm **~16 GB** (frame bị xoá dần trong lúc encode chunked), nhưng
kiểm tra tiền điều kiện vẫn dùng con số 260 GB nên không lách được. Không có cờ CLI nào đổi được, nhưng
`tmpdir()` của Node đọc `TEMP`/`TMP` nên trỏ chúng sang ổ `E:` là xong.
`--frames-cache-dir` KHÔNG dùng được — cờ đó chỉ dành cho frame trích từ video nguồn.
Xoá `E:\hf-tmp` sau khi render xong.

---

## Bố cục thư mục

```
index.html              tập ĐANG dựng (composition HyperFrames)
projects/<slug>/        một tập: script.md, storyboard.md, timing.json,
                        timing.dryrun.json, cues.json, voice/, index.html (bản lưu)
projects/EPISODES-PRODUCED.md   ⚠ SỔ ĐĂNG KÝ — đọc trước khi chốt chủ đề mới
projects/_sample/       fixture nhỏ để thử script (1 cue) — đừng xoá
projects/_ideas/        kịch bản/ý tưởng chưa dựng
output/k2-ep<N>-<tên-việt>/  ⚠ giao hàng — tên TIẾNG VIỆT + tiền tố kênh:
                        k2-ep<N>-<tên-việt>.mp4 + thumbnail.jpg + YOUTUBE.md (đúng 3 file)
                        vd: output/k2-ep1-linh-hon-di-ve-dau/
                        ⚠ `k2-` BẮT BUỘC — kênh 1 cũng dùng `ep<N>-` và đã trùng tên một lần
output/_assets/<slug>/  file nguồn thumbnail + render.log — ở đây vẫn dùng SLUG romaji
assets/                 dùng chung mọi tập: bgm.mp3, tex/ (texture NASA đã tải về)
assets/fonts/           BIZ UDPGothic (Regular+Bold) — font Nhật NHÚNG SẴN, không gọi mạng
                        khi render. Phủ đủ kanji trụ 死とその後 (đã kiểm 80 glyph).
assets/lib/hf-astro.js  ⭐ bộ khung dựng hình dùng chung — sửa ở ĐÂY, rồi
                        `node scripts/inject-lib.mjs` nhúng vào tập (đừng chép tay)
scripts/                công cụ pipeline (xem scripts/README.md)
archive/                tập cũ chỉ còn bản .bak — KHÔNG có nguồn nào khác, đừng xoá
docs/superpowers/specs/ spec thiết kế pipeline
```

## Hành văn

Mọi văn bản người xem đọc hoặc nghe đều tránh giọng văn AI. Quy tắc đầy đủ nằm ở nơi sinh ra
văn bản đó, đừng chép lại:

- **Lời đọc / phụ đề** → mục "VĂN PHONG" trong `.claude/agents/scriptwriter.md`
- **Tiêu đề** → mục 2 trong `docs/chien-luoc-kenh-nhat.md` (cách nghĩ: mục "5b" của
  `docs/chien-luoc-kenh.md`, nguồn gốc `E:\YOUTUBE\KNOWLEDGE\TU-DUY-TITLE.md`).
  Tóm tắt cho kênh Nhật: khuôn `{対象}はなぜ{現象}のか｜{典拠}`; sinh 10, chấm 8 điểm, giữ 5;
  **≤30 ký tự toàn角** (không phải 55 — chữ Nhật rộng gấp đôi); vế trước `｜` tự đứng được;
  **chữ 死 không để trong tựa**; có phương án B đổi sau 24h.
- **Mô tả YouTube** → mục "HÀNH VĂN CHO MÔ TẢ YOUTUBE" trong `.claude/agents/render.md`
- **`episodes.html`** (trang thư viện tập, viết tay, không agent nào phụ trách) → áp cùng quy tắc
  như mô tả YouTube
- **Thumbnail** → mục "TƯ DUY THUMBNAIL" trong `.claude/agents/render.md` (nguồn gốc:
  `E:\YOUTUBE\KNOWLEDGE\TU-DUY-THUMBNAIL.md`). Tóm tắt: nửa trên phải tự bán được video, không dựa
  tiêu đề, một chủ thể, cắt mọi thứ thừa, 5 biến thể chữ.

Tóm tắt: bỏ chữ sáo (khám phá, hành trình, đầy mê hoặc), bỏ ngôn ngữ quảng cáo, bỏ cụm rỗng bám
đuôi ("cho thấy tầm quan trọng của..."), không dùng gạch ngang dài trong văn cho người xem.

**Nhưng giữ nhịp văn nói.** Câu cụt, lặp cấu trúc tăng tiến, và cú lật "không phải X, mà là Y"
khi nó mang nội dung thật đều là chất của kênh, không phải tật. Phân biệt bằng một câu hỏi: câu
này thêm thông tin hay chỉ thêm trọng lượng? Chi tiết ở `scriptwriter.md`.

Cần soát một đoạn văn cụ thể thì gọi skill `/humanizer`.

## Hai kiểu tên — đừng lẫn

| Chỗ | Kiểu tên | Ví dụ | Đổi được không |
|---|---|---|---|
| `projects/<slug>/`, `data-composition-id`, `window.__timelines[]`, `output/_assets/` | **romaji Nhật** | `tamashii-no-tabi` | ⛔ **Không.** Đổi = vỡ composition |
| `output/` — thư mục giao hàng | **`k2-ep<N>-<tên-việt>`** | `k2-ep1-linh-hon-di-ve-dau` | ✅ Đây là tên người vận hành đọc |

Tên tiếng Việt **không dấu, gạch nối**, tả đúng nội dung để nhìn danh sách là nhận ra tập nào.

⚠ **Tiền tố `k2-` là bắt buộc** — quy ước đặt tên cố định của dự án, giữ nguyên xuyên suốt
mọi tập đã và sẽ sản xuất.

## ⚠ Tiêu đề phải khớp câu người ta GÕ TÌM

Sai lầm mặc định: đặt tựa theo **câu hỏi lớn của trụ** — nghe sâu sắc, nhưng không ai gõ câu đó.
Tựa phải khớp câu **một người cụ thể, trong một hoàn cảnh cụ thể, đang gõ tối nay**.

Tiền lệ tập 01: 「魂はどこから来てどこへ行くのか」 duyệt xong, render xong mới phát hiện không ai
tìm; đổi sang 「なぜ七日ごとに法要をするのか」 (người vừa xong 初七日, tuần sau phải đi tiếp).

Ba câu thử — phải qua **cả ba**: (1) kể ra được ai gõ, hoàn cảnh nào, lúc nào · (2) vế trước
`｜` chỉ dùng từ người ta **biết TRƯỚC khi xem** (法要, 四十九日, 三途の川 — không phải 中陰,
本地, antarābhava) · (3) có **hoàn cảnh thúc**: việc sắp phải làm hoặc việc vừa xảy ra.
Bảng đối chiếu đầy đủ: `docs/chien-luoc-kenh-nhat.md` mục **2b**.

## Chống trùng nội dung

`projects/EPISODES-PRODUCED-JA.md` là nguồn sự thật về nội dung đã lên sóng của **kênh Nhật**.
**scriptwriter phải đọc file này trước khi viết**, đối chiếu cột 中心概念 để không lặp luận điểm,
hook, hay cú lật. Render xong một tập thì cập nhật sổ ngay, kể cả dòng trống ở bảng Số liệu để
người vận hành điền view/CTR/AVD. Sổ không có số thì không biết tập nào đang thắng để nhân bản.

(`projects/EPISODES-PRODUCED.md` là sổ 13 tập vũ trụ tiếng Việt cũ — đừng ghi tập Nhật vào đó.)

---

## Luật bất di bất dịch của composition

1. Mọi phần tử có timing cần `data-start`, `data-duration`, `data-track-index` **và**
   `class="clip"`.
2. Timeline GSAP **paused**, đăng ký `window.__timelines[<id>]` với `<id>` **trùng đúng**
   `data-composition-id` của div gốc (các tập dùng slug, không phải `"main"`). StaticGuard
   quét **văn bản** file — dòng đăng ký phải nằm nguyên dạng trong chính file tập, không
   được giấu trong hàm dùng chung, và **đừng viết ví dụ đăng ký trong comment** (guard đếm nhầm).
3. **Tất định tuyệt đối:** không `requestAnimationFrame`, `Date.now`, `performance.now`,
   `setTimeout`, `Math.random`. Cần ngẫu nhiên → seeded PRNG (mulberry32). Không tích luỹ
   `+= dt` — mọi chuyển động là **hàm thuần của `t`**.
4. Narration là `<audio>` với `data-*`; framework tự phát và đồng bộ — **không gọi `.play()`**.
5. Video dùng `muted` + `<audio>` riêng cho tiếng.
6. Phụ đề **1 dòng**, ngưỡng theo ngôn ngữ: **≤ 42 ký tự** (Việt) / **≤ 22 ký tự toàn角**
   (Nhật — chữ Nhật rộng gấp đôi). Đừng cắt tay — dùng `scripts/gen-captions.mjs`, nó tự
   nhận ngôn ngữ và cắt tiếng Nhật theo 。、 kèm 禁則処理.
7. **Chữ trên màn hình phải hiện ĐÚNG BỘ DẤU / ĐÚNG GLYPH** — kể cả nhãn vẽ trong WebGL bằng
   canvas texture. Đây là luật về **font phải phủ hết bộ chữ đang dùng**, không phải luật riêng
   của tiếng Việt:
   - **Việt:** phải CÓ DẤU. Viết không dấu ("gieng sau") là **lỗi**, không phải quy ước đồ hoạ.
     Tập `quasar` từng viết cả 113 nhãn không dấu và phải render lại.
   - **Nhật:** phải khai `'BIZ UDPGothic'` (đã nhúng ở `assets/fonts/`, khai `@font-face` trong
     composition). `"Segoe UI"` **không có glyph CJK** → ra ô tofu hoặc rơi vào font dự phòng
     của máy, mà render headless thì không được phép phụ thuộc máy.
     ⚠ Phải `await document.fonts.load(...)` trước khi vẽ nhãn canvas đầu tiên: font CJK nặng
     ~4,6 MB, vẽ trước khi font về thì canvas đo nhầm metric và nhãn sai kích thước **rải rác**,
     rất khó truy.

8. **Mỗi tập có intro 2s + outro 5s màn đen.** Khâu 3 chạy `scripts/build-audio.mjs`
   (nhạc từ `assets/bg-music/`), khâu 4 chạy `scripts/apply-lead-tail.mjs` để dịch
   timeline hình +2s và chèn overlay đen. Mốc ghi ở `projects/<slug>/audio.json`.
   ⚠ Bỏ bước thứ hai thì **hình và tiếng lệch đúng 2 giây**.
   Vì sao: người xem 50-60+ trên TV cần một nhịp trước lời đầu; nhạc phải kết trọn câu,
   không cắt cụt — quan trọng với chủ đề tang lễ.
9. **`npm run check` PASS KHÔNG CÓ NGHĨA LÀ HÌNH ĐÚNG.** Sau khi dựng xong phải
   `npx hyperframes snapshot --at <10-15 mốc>` rồi **mở `contact-sheet.jpg` ra nhìn**.
   Tiền lệ: cả 47 cảnh đóng băng ở 1% đầu (lệch đơn vị `loc()`) mà ba cổng vẫn pass sạch.
   Sáu lỗi "pass mà sai" liệt kê ở `.claude/agents/visual-builder.md`.
   ⚠ Tập có intro: snapshot chụp theo **thời gian THẬT** — muốn xem giây cảnh X, chụp ở **X+2**.

## Kỹ năng HyperFrames

Cần chi tiết framework thì gọi skill: `/hyperframes-core` (hợp đồng composition),
`/hyperframes-animation` (motion + adapter), `/hyperframes-cli` (lệnh, troubleshooting),
`/hyperframes-media` (TTS, BGM, caption). Nếu skill chưa có:
`npx skills add heygen-com/hyperframes` rồi khởi động lại phiên.

Tài liệu offline: `npx hyperframes docs <topic>`
(`data-attributes`, `gsap`, `compositions`, `rendering`, `troubleshooting`).
