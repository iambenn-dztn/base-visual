> ⚠️ **TÀI LIỆU LỊCH SỬ (2026-07-04) — KHÔNG PHẢI HƯỚNG DẪN HIỆN HÀNH.**
> Ghi lại thiết kế lúc khởi tạo pipeline. Nhiều phần đã đổi: voice dùng AIMAX (không phải
> ElevenLabs), mô hình `visual.html` + `window.seek()` đã bỏ hoàn toàn. Hướng dẫn đang dùng:
> [CLAUDE.md](../../../CLAUDE.md) và `.claude/agents/`.

# Chuyển Pipeline Sang HyperFrames — Thiết Kế (giữ nguyên ADN)

Ngày: 2026-07-04
Trạng thái: Đề xuất — chờ duyệt trước khi sửa agent/skill

## 1. Vì sao & nguyên tắc

Giữ **nguyên ADN** của dự án:
- Visual **Three.js one-shot liền mạch**, astro-realistic (texture thật, đúng vật lý thiên văn: chiều quay/quỹ đạo, trục nghiêng, khóa thủy triều, tỉ lệ, Mặt Trời lớn nhất).
- **Audio là đồng hồ chủ** — `timing.json` (ElevenLabs) quyết định timeline.
- Phụ đề tiếng Việt, phong cách phim tài liệu pop-science.

Chỉ **thay động cơ preview + render**: bỏ `render.mjs` tự chế (Puppeteer thô), dùng **HyperFrames** để có studio scrub frame-chính-xác (`npx hyperframes preview` @ localhost:3002) trước khi chốt, và `npx hyperframes render` ra MP4 tất định. HyperFrames là mã nguồn mở (Apache-2.0), không tốn credit render.

## 2. HyperFrames hoạt động ra sao (tóm tắt hợp đồng lõi)

- Một *composition* = **1 file HTML**: div gốc `data-composition-id="main"` + các thuộc tính `data-start/data-duration/data-width/data-height`, một **GSAP timeline paused** đăng ký ở `window.__timelines["main"] = tl`, CSS cho giao diện.
- **Tất định tuyệt đối:** KHÔNG `requestAnimationFrame`, `Date.now`, `Math.random` (dùng seeded PRNG). Mọi thứ là hàm của thời gian timeline (framework tự scrub timeline để chụp frame).
- **Audio** = phần tử `<audio>` riêng (framework tự phát/đồng bộ, không gọi `.play()` tay).
- CLI: `npx hyperframes doctor | lint | validate | inspect | preview | render`.

## 3. Ánh xạ 5 khâu → HyperFrames

| Khâu | Trước (tự chế) | Sau (HyperFrames) — ADN giữ nguyên |
|---|---|---|
| script | `script.md` + cue | **giữ nguyên** |
| storyboard | `storyboard.md` | **giữ nguyên** |
| voice | `voice-elevenlabs.mjs` → `timing.json` + `narration.mp3` | **giữ nguyên** (đồng hồ chủ). `narration.mp3` sẽ thành track `<audio>` trong composition |
| visual | self-contained `visual.html` + `window.seek()` | **HyperFrames composition**: canvas Three.js + GSAP `main` timeline driving `renderAtTime(t)` (mục 4) |
| render | `render.mjs` (Puppeteer + ffmpeg) | `npx hyperframes render index.html -o render/final.mp4` (giữ `render.mjs` làm **fallback**) |
| preview | (không có) | `npx hyperframes preview` — studio scrub frame-chính-xác |

## 4. Mẫu bọc Three.js vào HyperFrames (ĐIỂM MẤU CHỐT — giữ ADN)

Toàn bộ scene Three.js (Trái Đất/hệ Mặt Trời, hậu kỳ bloom/lens) **giữ nguyên**. Chỉ đổi cách chạy: thay vòng lặp `requestAnimationFrame` bằng **một hàm thuần `renderAtTime(t)`** và để **GSAP timeline scrub nó**.

```html
<div id="main" data-composition-id="main" data-width="1920" data-height="1080"
     data-start="0" data-duration="__TOTAL__">
  <canvas id="c" class="scene clip" data-start="0" data-duration="__TOTAL__" data-track-index="0"></canvas>
  <div id="sub"></div>          <!-- phụ đề overlay, cập nhật trong renderAtTime(t) -->
</div>
<audio id="narr" data-start="0" data-duration="__TOTAL__" data-track-index="1"
       src="voice/narration.mp3" crossorigin="anonymous"></audio>

<script src="https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@hyperframes/core/dist/hyperframe.runtime.iife.js"></script>
<!-- three.js r128 + postprocessing CDN (như earth-oneshot.html) -->
<script>
  // ... dựng toàn bộ scene, texture, track, camera y như ADN cũ ...
  // renderAtTime(t): HÀM THUẦN — set mọi track/camera/độ mờ/phụ đề theo t rồi composer.render().
  //   - Tự quay/quỹ đạo tính theo t (vd rotation.y = t*speed), KHÔNG dùng clock thực.
  //   - Cập nhật #sub theo CUES (nhúng từ timing.json).
  function renderAtTime(t){ /* mọi thứ là hàm của t */ composer.render(); }

  window.__timelines = window.__timelines || {};
  const tl = gsap.timeline({ paused: true });
  const clock = { t: 0 };
  tl.to(clock, { t: __TOTAL__, duration: __TOTAL__, ease: "none",
                 onUpdate: () => renderAtTime(clock.t) }, 0);
  window.__timelines["main"] = tl;
</script>
```

- Duration lấy từ `data-duration` = `timing.json.totalDuration`.
- `CUES` nhúng thẳng từ `timing.json` để phụ đề + nhãn chương đúng mốc thật.
- Vòng "xem tay" (nếu vẫn muốn mở trực tiếp không qua studio) chỉ là bộ đếm `t += dt` gọi cùng `renderAtTime(t)` — một nguồn sự thật.

## 5. Cạm bẫy phải xử lý (quan trọng cho render tất định)

- **Texture tải bất đồng bộ:** capture tất định cần asset sẵn sàng trước khi chụp. Giải pháp:
  1. **Tải ảnh hành tinh về local** vào `projects/<slug>/assets/` (một lần), tham chiếu tương đối — không phụ thuộc mạng khi render, và HyperFrames đóng gói được.
  2. Hoặc dùng cơ chế chờ-sẵn-sàng của HyperFrames; nếu không, đảm bảo `renderAtTime` an toàn khi texture chưa xong (không lỗi), và HyperFrames chờ `networkidle` trước khi seek.
- **Bloom/lens ổn định theo t:** đảm bảo mọi uniform hậu kỳ là hàm của t (grain của lens hiện random theo thời gian → đổi sang **seeded theo t** để tất định giữa các frame trùng t).
- **Không `rAF` trong khi capture:** giữ đúng — chỉ render khi `renderAtTime` được gọi.
- **Phụ đề:** giữ overlay DOM (đúng ADN) cập nhật trong `renderAtTime`; hoặc chuyển sang hệ **captions** của HyperFrames (đồng bộ audio) nếu muốn karaoke/hiệu ứng.

## 6. Thay đổi cho agent/skill (đề xuất — làm sau khi duyệt)

- **`visual-builder`**: đổi ĐẦU RA sang **composition HyperFrames** theo mẫu mục 4 (GSAP `main` + `renderAtTime(t)` + `<audio>`), giữ toàn bộ luật astro/vật lý/hậu kỳ. Bỏ hợp đồng `window.seek/READY` cũ (thay bằng timeline HyperFrames). Thêm bước tải texture về local.
- **`render`**: gọi `npx hyperframes lint && npx hyperframes render index.html -o render/final.mp4 --fps <n>`; giữ `render.mjs` làm fallback nếu chưa cài HyperFrames.
- **`/produce`**: khâu 5 đổi lệnh render sang HyperFrames; thêm khâu **preview** (studio) như checkpoint "trực quan trước khi chốt".
- **Tiền đề env** (thêm vào README): `npx hyperframes doctor` (Node ≥ 22, ffmpeg). Cài skills HyperFrames cho Claude Code: `npx skills add heygen-com/hyperframes`.

## 7. Nghiệm thu

- `npx hyperframes lint` + `validate` pass.
- `npx hyperframes preview`: scrub từ 0 → hết, Trái Đất/hệ Mặt Trời hiện đúng, phụ đề khớp giọng, không nhấp nháy.
- `npx hyperframes render`: ra `final.mp4` độ dài ≈ `totalDuration`, có tiếng (narration), hình đúng ADN.
- Render lại cùng input → **byte-khác nhỏ/không đổi** (tất định).

## 8. Ngoài phạm vi

- Không đổi phong cách visual (giữ astro-realistic one-shot).
- Không dùng skeleton GSAP scene-based của HyperFrames cho phần thiên văn (đó là cho motion-graphics slide); ta dùng **canvas Three.js + timeline driver**.
- Giữ `render.mjs` như phương án dự phòng, không xóa.
