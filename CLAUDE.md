# Du Mục Vũ Trụ — dây chuyền sản xuất video

Kênh video pop-science tiếng Việt về vũ trụ. Mỗi tập là một **trải nghiệm nghe** (góc nhìn
thứ nhất, "Tôi") ghép với **hình vũ trụ dựng thật bằng WebGL**. Hai tiêu chí chốt chất lượng:

1. **Nghe:** nhắm mắt vẫn hiểu trọn vẹn. Lời đọc không bao giờ phụ thuộc vào hình đang chiếu.
2. **Nhìn:** mọi vật thể vũ trụ dựng **giống thật nhất có thể** — texture NASA thật, vật lý
   thiên văn đúng, shader cinematic. Không billboard phẳng, không cách điệu qua loa.

Render bằng **HyperFrames** (HTML → MP4, headless, tất định).

---

## Dây chuyền 5 khâu

Chạy cả dây chuyền bằng skill **`/produce`**. Từng khâu là một subagent riêng:

| # | Agent | Đầu vào | Đầu ra |
|---|---|---|---|
| 1 | `scriptwriter` | chủ đề | `projects/<slug>/script.md` (có mã cue) |
| 2 | `storyboard-artist` | script.md | `projects/<slug>/storyboard.md` |
| 3 | `voice-generator` | script.md | `timing.json` + `voice/` + `narration_mixed.mp3` |
| 4 | `visual-builder` | script + timing + storyboard | `index.html` (composition) |
| 5 | `render` | index.html + narration | `output/<slug>/` (mp4 + thumbnail + YOUTUBE.md) |

**Voice chạy TRƯỚC visual.** `timing.json` là **đồng hồ chủ** của cả dự án — thời lượng đọc
thật quyết định timeline hình, không phải ngược lại.

### Quy ước `index.html`

HyperFrames chỉ preview/render **một** `index.html` ở gốc. Vì vậy:

- `index.html` (gốc) = **tập đang dựng**. visual-builder ghi thẳng vào đây.
- `projects/<slug>/index.html` = **bản lưu** của tập đã render xong.
- Trước khi bắt đầu tập mới: kiểm tra `index.html` gốc đã được sao lưu vào
  `projects/<slug>/index.html` chưa. Ghi đè khi chưa lưu là **mất tập**.
- Không tạo `projects/<slug>/visual.html` — mô hình đó đã bỏ.

### Đơn vị thời gian

Một tập **tối thiểu 13 phút** (≥ 780s). Thực đo: ~180 từ/phút gồm cả khoảng lặng
→ kịch bản **2400–2600 từ ≈ 13:20–14:30**.

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
output/<slug>/          giao hàng: <slug>.mp4 + thumbnail.jpg + YOUTUBE.md (đúng 3 file)
output/_assets/<slug>/  file nguồn thumbnail + render.log
assets/                 dùng chung mọi tập: bgm.mp3, tex/ (texture NASA đã tải về)
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
- **Tiêu đề + mô tả YouTube** → mục "HÀNH VĂN CHO MÔ TẢ YOUTUBE" trong `.claude/agents/render.md`
- **`episodes.html`** (trang thư viện tập, viết tay, không agent nào phụ trách) → áp cùng quy tắc
  như mô tả YouTube

Tóm tắt: bỏ chữ sáo (khám phá, hành trình, đầy mê hoặc), bỏ ngôn ngữ quảng cáo, bỏ cụm rỗng bám
đuôi ("cho thấy tầm quan trọng của..."), không dùng gạch ngang dài trong văn cho người xem.

**Nhưng giữ nhịp văn nói.** Câu cụt, lặp cấu trúc tăng tiến, và cú lật "không phải X, mà là Y"
khi nó mang nội dung thật đều là chất của kênh, không phải tật. Phân biệt bằng một câu hỏi: câu
này thêm thông tin hay chỉ thêm trọng lượng? Chi tiết ở `scriptwriter.md`.

Cần soát một đoạn văn cụ thể thì gọi skill `/humanizer`.

## Chống trùng nội dung

`projects/EPISODES-PRODUCED.md` là nguồn sự thật về nội dung đã lên sóng. **scriptwriter
phải đọc file này trước khi viết**, đối chiếu cột "Khái niệm cốt lõi" để không lặp luận điểm,
hook, hay cảnh cao trào. Render xong một tập thì cập nhật lại sổ ngay.

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
6. Phụ đề **≤ 42 ký tự/dòng, 1 dòng**. Đừng cắt tay — dùng `scripts/gen-captions.mjs`.
7. **Mọi chữ tiếng Việt trên màn hình phải CÓ DẤU** — kể cả nhãn vẽ trong WebGL bằng
   canvas texture. Canvas dùng font hệ thống nên hiển thị dấu bình thường; tập `nuoc-co-hon-mat-troi`
   và `dai-oxy-hoa` đã render với nhãn có dấu, không có ô tofu. Viết không dấu ("gieng sau",
   "dia se hinh thanh") là **lỗi**, không phải quy ước đồ hoạ. Tập `quasar` từng viết cả 113
   nhãn không dấu và phải render lại.

## Kỹ năng HyperFrames

Cần chi tiết framework thì gọi skill: `/hyperframes-core` (hợp đồng composition),
`/hyperframes-animation` (motion + adapter), `/hyperframes-cli` (lệnh, troubleshooting),
`/hyperframes-media` (TTS, BGM, caption). Nếu skill chưa có:
`npx skills add heygen-com/hyperframes` rồi khởi động lại phiên.

Tài liệu offline: `npx hyperframes docs <topic>`
(`data-attributes`, `gsap`, `compositions`, `rendering`, `troubleshooting`).
