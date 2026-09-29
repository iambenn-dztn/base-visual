# scripts/ — công cụ pipeline

Các agent gọi những script này; bạn cũng chạy tay được. Mọi lệnh chạy **từ thư mục gốc** dự án.

## Cài đặt (một lần)

```bash
cd scripts && npm install     # puppeteer (cho capture-thumb)
```

- **Node ≥ 18** (`fetch` sẵn có). HyperFrames render cần **Node ≥ 22**.
- **ffmpeg + ffprobe** — đã đóng gói sẵn ở `scripts/ffbin/`. Máy này KHÔNG có ffmpeg hệ thống.
- **Voice tiếng Nhật (mặc định):** server GPT-SoVITS chạy local, không cần key.
  Kiểm tra: `curl http://127.0.0.1:9880/health`. Đổi địa chỉ bằng `--url` / `SOVITS_URL`.
- **Voice tiếng Việt (tập cũ):** cần `scripts/.env` với `AIMAX_API_KEY=ak_...`.

---

## Thứ tự chạy trong một tập

```
script.md
   │
   │  ① voice-sovits.mjs --dry-run    → timing.json + timing.dryrun.json  (miễn phí, ước lượng)
   │         └─ visual-builder dựng hình trên mốc NHÁP này
   │
   │  ② voice-sovits.mjs              → voice/seg-*.wav + narration.mp3 + timing.json THẬT
   │  ③ build-audio.mjs               → narration_mixed.mp3 (intro 2s + thân + outro 5s) + audio.json
   │  ④ gen-captions.mjs              → cues.json (≤22 ký tự Nhật / ≤42 Việt, mốc THẬT)
   │  ⑤ finalize-remap.mjs            → CHỈ khi hình dựng TRƯỚC giọng
   │  ⑤c apply-lead-tail.mjs          → dịch timeline hình +lead, chèn overlay đen  ⭐ BẮT BUỘC
   │
   ▼
index.html ──(hyperframes render)──> output/<slug>/<slug>.mp4
   │
   └─ ⑥ capture-thumb.mjs             → thumbnail
```

⚠️ **④ phải chạy trước ⑤.** Ngược lại `finalize-remap` splice phụ đề theo mốc nháp → lệch tiếng.
⚠️ **⑤c bắt buộc nếu đã chạy ③.** Bỏ qua thì hình và tiếng **lệch đúng `lead` giây**.
⚠️ **Sau ⑤c: chụp ảnh kiểm.** `npm run check` pass KHÔNG có nghĩa hình đúng — xem ⑦.

---

## ① ② `voice-sovits.mjs` — TTS + đồng hồ chủ

Bóc `[THE VOICE]` theo mã cue trong `script.md`, gọi **GPT-SoVITS chạy local**
(giọng `keita` — nam trung niên 99 Hz, đã clone, GPU), ghép `narration.mp3`, sinh `timing.json`.

> **Đổi từ AIMAX/MiniMax sang đây ngày 2026-09-21** vì kênh chuyển sang tiếng Nhật. Bản cũ
> `voice-aimax.mjs` cấu hình cứng `language: 'Vietnamese'` + giọng Bắc; giữ lại để chạy tập Việt cũ.
> Server local miễn phí, chạy GPU, và **tất định**: cùng `--seed` + cùng chữ → file byte y hệt
> (đã kiểm chứng bằng md5).

```bash
# Server phải chạy trước (mặc định http://127.0.0.1:9880):
curl http://127.0.0.1:9880/health        # {"status":"ok","device":"cuda",...}

# Ước lượng — không gọi GPU:
node scripts/voice-sovits.mjs --project projects/<slug> --dry-run

# Bản thật:
node scripts/voice-sovits.mjs --project projects/<slug>

# Đổi giọng / tốc độ / seed / sinh lại toàn bộ:
node scripts/voice-sovits.mjs --project projects/<slug> --voice keita --speed 0.95 --seed 42 --force
```

**Thời lượng đo từ độ dài file THẬT bằng ffmpeg (gồm lặng đuôi mỗi segment), KHÔNG lấy mốc
`.srt`.** Sau khi ghép, timeline hiệu chỉnh tuyến tính về đúng độ dài `narration.mp3` (sai số <0.5s).

⚠ **Server này KHÔNG sinh `.srt`** (AIMAX thì có). Đó từng là lý do loại ElevenLabs — nhưng với
tiếng Nhật thì không cần: `gen-captions.mjs` cắt câu theo 。、 bằng `lib/split-ja.mjs`, tất định
và không phụ thuộc TTS. Mốc bắt đầu mỗi cue vẫn lấy từ `timing.json` như cũ.

**Nhịp đọc đo thật** (keita, seed 42, trên đoạn văn 143 ký tự):
speed 0,90 → 4,64 cps · **0,95 → 4,89 cps** (mặc định) · 1,0 → 5,15 cps.
⚠ Đo trên **câu rời** cho ~5,8 cps — đừng dùng, vì đoạn văn có dấu 。、 để TTS nghỉ nhịp.
Mặc định `--cps 4.9` → 13 phút ≈ 3.800 ký tự. Hằng số cũ của tiếng Việt là 15 ký tự/giây;
dùng lại sẽ ước lượng **hụt ~3 lần**. Đổi qua `--cps`.

Đầu ra: `timing.json`, `timing.dryrun.json`, `voice/seg-XX.wav`, `voice/narration.mp3`.

> `timing.dryrun.json` là **mốc nháp mà visual-builder dựng hình lên đó**. Lần chạy thật ghi đè
> `timing.json` nhưng giữ nguyên file này — `finalize-remap.mjs` cần cả hai để nội suy. Đừng xoá.

Quy ước marker trong `script.md` (scriptwriter sinh):
```
<!-- cue: C01 | chapter: CHƯƠNG 1 -->
[AUDIO DIRECTION] Tiếng drone trầm.        ← bỏ qua khi đọc
[THE VOICE]
Lời đọc ở đây...

<!-- gap: 2.0 -->                          ← chèn 2 giây lặng
```

## ③ `build-audio.mjs` — dựng track audio hoàn chỉnh (intro + thân + outro) ⭐

```bash
node scripts/build-audio.mjs --project projects/<slug>
#   --lead 2          intro: nhạc chạy, CHƯA có giọng
#   --tail 5          outro: nhạc lên, MÀN HÌNH ĐEN
#   --gain 0.13       nhạc dưới giọng
#   --tail-gain 0.34  nhạc ở đoạn outro
#   --bgm a,b,c       playlist từ assets/bg-music/
#   --duck            ducking động thay vì gain cố định
```

Ra `voice/narration_mixed.mp3` + `projects/<slug>/audio.json` (mốc cho khâu 4).
Nối playlist nhiều file theo mạch cảm xúc rồi lặp cho đủ dài, không lặp một file.

⚠ Đường bao âm lượng dùng **chuỗi `afade`**, KHÔNG dùng `volume=<expr>:eval=frame` —
ffmpeg đóng gói ở `ffbin/` từ chối cú pháp đó.
⚠ Fade-in ≤0,6s dù lead dài bao nhiêu: fade suốt 2s làm nửa giây đầu xuống −45 LUFS,
nghe như im lặng thay vì nhạc mở đầu.

**Sau đó BẮT BUỘC chạy ⑤c `apply-lead-tail.mjs`**, nếu không hình lệch tiếng đúng `lead` giây.

## ③b `mix-bgm.mjs` — trộn nhạc nền (bản cũ, chỉ cho tập Việt)

```bash
node scripts/mix-bgm.mjs --project projects/<slug> [--gain 0.13] [--duck]
```
Lặp `assets/bgm.mp3` cho vừa độ dài narration, hạ nhỏ dưới giọng đọc → `voice/narration_mixed.mp3`.
Không có `bgm.mp3` thì bỏ qua, pipeline vẫn chạy với giọng đọc trần.

## ④ `gen-captions.mjs` — phụ đề ngắn

```bash
node scripts/gen-captions.mjs --project projects/<slug> [--lang ja|vi] [--max N]
```
Mỗi cue trong `timing.json` là cả một đoạn dài, hiển thị nguyên đoạn thì phụ đề quá dài. Script
cắt nhỏ rồi phân bổ thời gian **theo tỉ lệ ký tự**, offset bằng `timing.json.cue.start`.

**Ngôn ngữ tự nhận** (cờ `--lang` > `timing.json.lang` > dò chữ Nhật trong cue):

| | Ngưỡng | Cách cắt |
|---|---|---|
| `vi` | ≤42 ký tự | ranh giới khoảng trắng |
| `ja` | ≤22 ký tự toàn角 | `lib/split-ja.mjs`: 。！？ → 、 → trợ từ → cắt cứng, có 禁則処理 |

⚠ **Vì sao tiếng Nhật phải tách riêng:** hàm cũ cắt bằng `text.split(/\s+/)`. Tiếng Nhật không
có khoảng trắng nên cả câu thành MỘT "từ", vòng lặp không cắt được lần nào, và luật ≤N ký tự
**hỏng trong im lặng** — không lỗi, chỉ ra một dòng dài gấp đôi khung hình. Đo thật: câu 67 ký tự
trả về đúng 1 mảnh. Nay script **báo cảnh báo** nếu còn dòng vượt ngưỡng.

Ngưỡng 22 (không phải 42) vì chữ Nhật rộng gấp đôi: đo trong headless Chrome, 20 ký tự toàn角
ở BIZ UDPGothic 56px = 1075px, vừa khung `#sub` (1400px). 42 ký tự sẽ ≈ 2250px → tràn, tự xuống
2 dòng, phá vỡ giả định "một dòng" của `HFA.applySubtitle`.

Đầu ra: `cues.json` + in khối `const CUES=[...]` ra STDOUT.
**Chạy lại mỗi khi `timing.json` đổi.**

## ⑤ `finalize-remap.mjs` — khớp hình với giọng thật

```bash
node scripts/finalize-remap.mjs --project projects/<slug> [--html index.html]
```
Biến composition dựng trên timeline nháp thành bản khớp giọng thật, tự động hoàn toàn:
chèn `realToDry()` + `_OLDT`/`_NEWT`, đấu `renderAtTime` (cảnh theo thời gian nháp, phụ đề theo
thời gian thật), gắn `<audio> narration_mixed.mp3`, cập nhật `TOTAL` + mọi `data-duration`,
splice `CUES` thật.

Cần đủ: `timing.json`, `timing.dryrun.json`, `cues.json` (đã regen), `voice/narration_mixed.mp3`.

## ⑤b `inject-lib.mjs` — nhúng thư viện dùng chung

```bash
node scripts/inject-lib.mjs [--html index.html] [--lib assets/lib/hf-astro.js]
```
Dán `assets/lib/hf-astro.js` (bộ khung dựng hình đã verify: PRNG có seed, stage Three.js +
composer/bloom/lens, starfield, phụ đề, driver timeline) vào giữa hai mốc `HFA:BEGIN` /
`HFA:END` trong composition. Idempotent — chạy lại thay đúng khối cũ, không nhân đôi.

**Phải nhúng, KHÔNG dùng thẻ script ngoài:** server HyperFrames trả về SPA shell HTML
(`content-type: text/html`) cho file `.js` tuỳ ý trong project → browser parse `<!doctype html>`
thành lỗi cú pháp và cả tập chết. Composition phải tự chứa.
Sửa hành vi dùng chung thì sửa file thư viện rồi chạy lại lệnh này, đừng sửa khối đã nhúng.

## ⑤c `apply-lead-tail.mjs` — dịch timeline hình cho khớp intro/outro ⭐

```bash
node scripts/apply-lead-tail.mjs --project projects/<slug> [--html index.html]
```

Đọc `projects/<slug>/audio.json` (do ③ sinh) rồi sửa composition **chỉ đổi SỐ**, không đụng
logic dựng hình:

1. `TOTAL` → `audio.totalDuration`
2. mọi `data-duration` → TOTAL
3. `renderAtTime(t)`: thêm `var _tReal = t;` rồi `t = Math.max(0, t - lead);`
   → **cảnh** dùng `t` (mốc gốc timing.json, chỉ tới muộn hơn), **phụ đề/chương** dùng `_tReal`
4. cộng `lead` vào mọi mốc trong `CUES`
5. chèn overlay `#outro-black` phủ toàn frame, hiện dần từ `blackOutroFrom`

**Idempotent** — nhận biết bằng mốc `LEADTAIL:APPLIED`, chạy lại lần hai không dịch thêm.

⚠ Sửa tay thay vì chạy script là **chắc chắn lệch**: một tập có ~48 shot và ~560 dòng phụ đề.

## ⑦ Vòng kiểm bằng ẢNH — BẮT BUỘC trước khi render ⭐

> `npm run check` **PASS KHÔNG CÓ NGHĨA LÀ HÌNH ĐÚNG.**

```bash
npx hyperframes snapshot --at <10-15 mốc rải khắp tập> --no-end --timeout 20000 -o snapshots
```
Rồi **mở `contact-sheet.jpg` ra nhìn bằng mắt**.

Tiền lệ có thật (tập `tamashii-no-tabi`): **cả 47 cảnh đóng băng ở 1% đầu** vì lệch đơn vị
`loc()` (thư viện trả 0–1, hàm cảnh viết theo giây) — mà `lint` + `validate` + `inspect`
đều pass sạch. Sáu lỗi loại "pass mà sai" liệt kê ở `.claude/agents/visual-builder.md`.

Đo khách quan khi nghi ngờ — độ sáng trung bình:
```bash
ffbin/ffmpeg.exe -v quiet -i frame.png -vf format=gray,scale=1:1 -f rawvideo -
```
0/255 = đen tuyền (nghi thiếu đèn) · >200 = cháy trắng.

⚠ Tập có intro: snapshot chụp theo **thời gian THẬT**. Muốn xem **giây cảnh X** phải chụp ở
**X + lead**. Quên cộng thì chỉnh nhịp theo mốc sai.

## ⑥ `capture-thumb.mjs` — chụp thumbnail

```bash
node scripts/capture-thumb.mjs --html <file> --out <out.png> [--half <half.png>]
```
Puppeteer, DSF 2. Chụp file HTML thumbnail 1280×720 do agent `render` viết. `--half` xuất thêm
ảnh chỉ nửa trên (1280×360) để chạy **bài test 50%** (giao diện TV chỉ hiện nửa trên thumbnail).
Sau đó hạ về 1280×720 JPG < 2MB bằng ffmpeg (`scale=1280:720:flags=lanczos`).
Tư duy thiết kế: mục "TƯ DUY THUMBNAIL" trong `.claude/agents/render.md`.

### `check-script-len.mjs` — đo độ dài lời đọc trước khi chạy TTS

```bash
node scripts/check-script-len.mjs <slug> [<slug> ...]
node scripts/check-script-len.mjs --all     # chỉ tập kênh Nhật
```

In: số cue · ký tự · thời lượng · cue dài nhất · số cue chạm sàn 0,8s · đạt/lệch khung
3.500–4.100. Cảnh báo cue > 160 ký tự (phụ đề 22 ký tự sẽ cắt xấu).

⚠ **Nó import thẳng `cleanForTTS` và `estimateDuration` của `lib/parse-script.mjs`** thay vì
tự chia — vì phép chia thuần bỏ sót hai thứ và luôn ra số HỤT:
1. `cleanForTTS` nối dòng bằng **dấu cách**, khoảng trắng đó được tính.
2. `estimateDuration` có **sàn 0,8s mỗi cue**.

Phiên bản đầu của chính script này dính cả hai bẫy: báo 14:32 trong khi dry-run là 14,1 phút.
Sau khi sửa thì khớp dry-run trong vòng 1%.

**Số CHỐT vẫn là dry-run** — script này chỉ để kiểm nhanh trước khi gọi TTS.

### ⚠ `snap-frame.mjs` — HỎNG với tập khác `mat-trang`

Dòng 15 **hardcode tên biến texture của tập `mat-trang`** (`texMoon`, `texDay`,
`texCloud`, `texBump`, `texSpec`). Composition nào không khai đủ năm tên đó sẽ
**treo tới hết timeout 60s rồi chết**, không báo lý do.

→ Dùng thay thế:
```bash
npx hyperframes snapshot --at <t1>,<t2> --no-end --timeout 20000 -o <dir>
```

⚠ Cả hai công cụ đều chụp theo **thời gian THẬT của video**. Tập có intro thì muốn lấy
**giây cảnh X** phải chụp ở **X + lead**.

### `snap-frame.mjs` — chụp một frame của composition làm nguồn thumbnail

```bash
node scripts/snap-frame.mjs --t 100.6 --out <frame.png> [--t2 <s> --out2 <png>] [--tweak <file.js>]
```
Puppeteer + GPU (ANGLE/d3d11), mở `index.html` gốc qua `file://`, đợi texture tải xong, ẩn phụ đề/nhãn chương,
gọi `renderAtTime(t)` rồi chụp `#root` 1920×1080. `--tweak` chạy một đoạn JS trong trang TRƯỚC khi render
(chỉnh vị trí/scale vật thể riêng cho bìa, không đụng composition). Ví dụ: `output/_assets/mat-trang/tweak.js`.

---

## `lib/`
- `parse-script.mjs` — bóc cue/gap/`[THE VOICE]` từ `script.md`; ước lượng thời lượng theo ký tự.
- `tts-sovits.mjs` — client GPT-SoVITS local (/health, /voices, /synthesize). Gửi body bằng
  Buffer UTF-8 tường minh; xem ghi chú trong file về lỗi HTTP 500 do shell làm hỏng mã hoá.
- `split-ja.mjs` — cắt dòng phụ đề tiếng Nhật (。！？ → 、 → trợ từ → cắt cứng) kèm 禁則処理.
- `tts-aimax.mjs` — nạp `.env` + gọi API AIMAX (chỉ còn dùng cho tập Việt cũ).

## `_deprecated/`
Script của các mô hình đã bỏ. Giữ để tham khảo, **đừng dùng** — xem `_deprecated/README.md`.
