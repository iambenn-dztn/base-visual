# scripts/ — công cụ pipeline

Các agent gọi những script này; bạn cũng chạy tay được. Mọi lệnh chạy **từ thư mục gốc** dự án.

## Cài đặt (một lần)

```bash
cd scripts && npm install     # puppeteer (cho capture-thumb)
```

- **Node ≥ 18** (`fetch` sẵn có). HyperFrames render cần **Node ≥ 22**.
- **ffmpeg + ffprobe** — đã đóng gói sẵn ở `scripts/ffbin/`. Máy này KHÔNG có ffmpeg hệ thống.
- Voice thật cần `scripts/.env`:
  ```
  AIMAX_API_KEY=ak_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  ```

---

## Thứ tự chạy trong một tập

```
script.md
   │
   │  ① voice-aimax.mjs --dry-run     → timing.json + timing.dryrun.json  (miễn phí, ước lượng)
   │         └─ visual-builder dựng hình trên mốc NHÁP này
   │
   │  ② voice-aimax.mjs               → voice/seg-*.mp3 + .srt + narration.mp3 + timing.json THẬT
   │  ③ mix-bgm.mjs                   → voice/narration_mixed.mp3
   │  ④ gen-captions.mjs              → cues.json (phụ đề ≤42 ký tự, mốc THẬT)
   │  ⑤ finalize-remap.mjs            → index.html khớp giọng thật + gắn <audio>
   │
   ▼
index.html ──(hyperframes render)──> output/<slug>/<slug>.mp4
   │
   └─ ⑥ capture-thumb.mjs             → thumbnail
```

⚠️ **④ phải chạy trước ⑤.** Ngược lại `finalize-remap` splice phụ đề theo mốc nháp → lệch tiếng.

---

## ① ② `voice-aimax.mjs` — TTS + đồng hồ chủ

Bóc `[THE VOICE]` theo mã cue trong `script.md`, gọi AIMAX Studio (MiniMax/Vbee — giọng Anh Khôi,
nam giọng Bắc, 48kHz), ghép `narration.mp3`, sinh `timing.json`.

```bash
# Ước lượng — KHÔNG tốn credit, không cần key/ffmpeg:
node scripts/voice-aimax.mjs --project projects/<slug> --dry-run

# Bản thật:
node scripts/voice-aimax.mjs --project projects/<slug>

# Đổi giọng / tốc độ / sinh lại toàn bộ:
node scripts/voice-aimax.mjs --project projects/<slug> --voice-id <id> --speed 0.85 --force
```

**Thời lượng đo từ độ dài MP3 THẬT bằng ffprobe (gồm ~0.5s lặng đuôi mỗi segment), KHÔNG lấy
mốc `.srt`.** Mốc SRT chỉ tính tới hết lời nói; cộng dồn 60+ segment làm phụ đề trôi lên trước
tiếng hàng chục giây. File `.srt` chỉ dùng làm nguồn CẮT CHỮ cho `gen-captions.mjs`.
Sau khi ghép, timeline được hiệu chỉnh tuyến tính về đúng độ dài `narration.mp3` (sai số <0.5s).

Đầu ra: `timing.json`, `timing.dryrun.json`, `voice/seg-XX.{mp3,srt}`, `voice/narration.mp3`.

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

## ③ `mix-bgm.mjs` — trộn nhạc nền

```bash
node scripts/mix-bgm.mjs --project projects/<slug> [--gain 0.13] [--duck]
```
Lặp `assets/bgm.mp3` cho vừa độ dài narration, hạ nhỏ dưới giọng đọc → `voice/narration_mixed.mp3`.
Không có `bgm.mp3` thì bỏ qua, pipeline vẫn chạy với giọng đọc trần.

## ④ `gen-captions.mjs` — phụ đề ngắn

```bash
node scripts/gen-captions.mjs --project projects/<slug> [--max 42]
```
Mỗi cue trong `timing.json` là cả một đoạn dài, hiển thị nguyên đoạn thì phụ đề quá dài. Script
cắt theo `voice/*.srt` (đúng chữ TTS, mốc câu thật) rồi chia tiếp ≤42 ký tự/dòng, phân bổ thời
gian theo tỉ lệ ký tự, offset bằng `timing.json.cue.start`.

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

## ⑥ `capture-thumb.mjs` — chụp thumbnail

```bash
node scripts/capture-thumb.mjs <out.png>
```
Puppeteer, DSF 2. Chụp file HTML thumbnail 1280×720 do agent `render` viết. Sau đó hạ về
1280×720 JPG < 2MB bằng ffmpeg (`scale=1280:720:flags=lanczos`).

---

## `lib/`
- `parse-script.mjs` — bóc cue/gap/`[THE VOICE]` từ `script.md`; ước lượng thời lượng theo ký tự.
- `tts-aimax.mjs` — nạp `.env` + gọi API AIMAX.

## `_deprecated/`
Script của các mô hình đã bỏ. Giữ để tham khảo, **đừng dùng** — xem `_deprecated/README.md`.
