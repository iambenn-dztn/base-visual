> ⚠️ **TÀI LIỆU LỊCH SỬ (2026-07-04) — KHÔNG PHẢI HƯỚNG DẪN HIỆN HÀNH.**
> Ghi lại thiết kế lúc khởi tạo pipeline. Nhiều phần đã đổi: voice dùng AIMAX (không phải
> ElevenLabs), mô hình `visual.html` + `window.seek()` đã bỏ hoàn toàn. Hướng dẫn đang dùng:
> [CLAUDE.md](../../../CLAUDE.md) và `.claude/agents/`.

# Bộ Skill Sản Xuất Video Pop-Science — Thiết Kế

Ngày: 2026-07-04
Trạng thái: Đã duyệt (brainstorming) — chuẩn bị viết plan

## 1. Mục tiêu

Chuẩn hóa quy trình sản xuất video khoa học/pop-science tiếng Việt thành một
bộ công cụ tái sử dụng lâu dài, gồm 5 khâu: **script → storyboard → visual →
voice → render**. Lấy 3 agent hiện có (`quantum-scriptwriter`,
`storyboard-artist`, `visual-builder`) làm baseline, nâng cấp và bổ sung 2 khâu
mới (voice, render) + 1 skill orchestrator.

## 2. Quyết định nền

| Hạng mục | Lựa chọn |
|---|---|
| Đóng gói | Giữ **subagent** (.claude/agents) + **1 skill orchestrator** `/produce` |
| Voice | **ElevenLabs** REST API (`ELEVENLABS_API_KEY` từ env) |
| Render | **Puppeteer headless + ffmpeg** (tự động, tất định) |
| Phạm vi chủ đề | **Đa chủ đề** pop-science (không chỉ vật lý/thiên văn) |

## 3. Nguyên tắc cốt lõi

**Audio là đồng hồ chủ (master clock).** Thời lượng đọc thật của ElevenLabs —
ghi trong `timing.json` — quyết định timeline hình, không phải ngược lại. Phụ đề
và chuyển động camera bám theo giọng đọc thật, nên luôn khớp.

Thứ tự luồng dữ liệu vì thế là:
`script → storyboard → voice (sinh timing.json) → visual (khớp timing) → render`.

## 4. Quy ước thư mục (per-project)

Mỗi video là một folder riêng:

```
projects/<slug>/
  script.md          # scriptwriter
  storyboard.md      # storyboard-artist
  timing.json        # voice-generator — NGUỒN THỜI LƯỢNG CHUẨN
  voice/
    seg-01.mp3 ...    # từng cue
    narration.mp3     # track ghép đầy đủ
  visual.html         # visual-builder (timeline đọc timing.json)
  render/
    frames/           # puppeteer chụp từng frame
    final.mp4         # ffmpeg ghép frames + narration
```

`<slug>` là kebab-case từ chủ đề (vd `chieu-khong-gian-thu-5`).

## 5. Hợp đồng dữ liệu giữa các khâu

### 5.1 script.md
Giữ cấu trúc baseline (METADATA + 4 chương, POV "Tôi", khối `[AUDIO DIRECTION]`
/ `[THE VOICE]`). **Bổ sung bắt buộc:** mỗi khối `[THE VOICE]` được gắn một mã
cue tăng dần `<!-- cue: C01 -->` để voice-generator và storyboard tham chiếu
cùng một đơn vị. Chủ đề tổng quát pop-science, không chỉ vật lý lượng tử.

### 5.2 storyboard.md
Giữ bảng shot baseline. Mỗi shot tham chiếu (các) cue nó bao phủ. Timecode ở
storyboard là **dự kiến** (intent) — sẽ bị timing.json ghi đè khi dựng visual.

### 5.3 timing.json (schema)
```json
{
  "slug": "chieu-khong-gian-thu-5",
  "fps": 30,
  "totalDuration": 812.4,
  "voice": { "provider": "elevenlabs", "voiceId": "...", "model": "..." },
  "cues": [
    { "id": "C01", "text": "…", "file": "voice/seg-01.mp3",
      "start": 0.0, "duration": 6.2, "chapter": "CHƯƠNG 1" }
  ]
}
```
`start` cộng dồn từ `duration` thật của từng segment (có thể chèn khoảng lặng
theo `[AUDIO DIRECTION]`).

### 5.4 visual.html — API seek tất định (hợp đồng với render)
- `window.TOTAL_DURATION` (giây) = `timing.json.totalDuration`.
- `window.seek(t)` — set MỌI track về đúng thời điểm `t` rồi render đúng 1 frame,
  **không phụ thuộc đồng hồ thực**. Gọi lặp lại cùng `t` cho cùng 1 kết quả.
- `window.CUES` — nạp từ timing.json để hiện phụ đề + nhãn chương đúng mốc.
- Vẫn giữ chế độ xem tay (play/pause/seek/phím tắt F/H/Space/←/→) như baseline.

## 6. Đặc tả từng khâu

### 6.1 scriptwriter (nâng cấp quantum-scriptwriter)
Tổng quát hóa sang pop-science đa chủ đề; giữ phong cách POV "Tôi",
[AUDIO DIRECTION]/[THE VOICE], 12–15 phút. Thêm mã cue. Lưu `projects/<slug>/script.md`.

### 6.2 storyboard-artist (nâng cấp)
Giữ nguyên tắc bám sát kịch bản. Thêm cột tham chiếu cue. Hỗ trợ chủ đề phi
thiên văn (ghi rõ loại visual: astro-realistic / procedural / particle / graph).

### 6.3 visual-builder (nâng cấp)
- Giữ **thư viện template astro** (luật vật lý thiên văn + texture thật) làm
  preset chuyên biệt.
- Thêm khả năng dựng chủ đề khác (procedural/particle/graphics).
- **Bổ sung API `seek()` tất định + đọc timing.json** (mục 5.4).
- Giữ ngăn xếp Three.js r128 + postprocessing đã kiểm chứng.

### 6.4 voice-generator (MỚI)
- Đọc `script.md`, tách khối `[THE VOICE]` theo cue.
- Gọi ElevenLabs REST API (key từ `ELEVENLABS_API_KEY`; `voiceId`/`model` cấu
  hình, mặc định model đa ngữ hỗ trợ tiếng Việt).
- Xuất `voice/seg-XX.mp3`, đo thời lượng (ffprobe), ghép `narration.mp3`,
  ghi `timing.json`.
- **Chế độ dry-run:** ước lượng thời lượng theo số ký tự (không gọi API, không
  tốn credit) để dựng thử timeline trước khi tiêu credit.
- Xử lý lỗi: thiếu key → dừng và hướng dẫn; lỗi API → báo cue nào fail, cho retry.

### 6.5 render (MỚI)
- Script Node + Puppeteer: mở `visual.html` ở 1920×1080.
- Lặp `t = i/fps` từ 0 → `TOTAL_DURATION`, gọi `seek(t)`, screenshot `frames/f-XXXXX.png`.
- ffmpeg ghép frames (`-framerate fps`) + `narration.mp3` → `render/final.mp4`
  (H.264, yuv420p, +faststart).
- Kiểm tra sẵn có `node`/`puppeteer`/`ffmpeg`; thiếu thì báo rõ cách cài.
- Tùy chọn fps/độ phân giải; log rõ số frame, thời lượng để đối chiếu.

### 6.6 /produce (skill orchestrator)
Chạy chuỗi: `scriptwriter → storyboard-artist → voice-generator → visual-builder
→ render`. Mặc định **dừng duyệt** sau mỗi khâu (checkpoint); cờ chạy thẳng nếu
muốn. Truyền `<slug>` xuyên suốt để các agent đọc/ghi đúng folder.

## 7. Xử lý lỗi & yêu cầu môi trường

- `ELEVENLABS_API_KEY` bắt buộc cho voice thật (dry-run thì không cần).
- `node`, `ffmpeg`/`ffprobe`, và `puppeteer` cần cho render/voice-đo-thời-lượng.
- Mọi agent kiểm tra tiền đề trước khi chạy và báo lỗi rõ ràng, không tạo file rác.

## 8. Kiểm thử / nghiệm thu

- **script/storyboard:** đọc được, đúng cấu trúc, có cue.
- **voice:** dry-run tạo `timing.json` hợp lệ; bản thật tạo mp3 phát được.
- **visual:** `node --check` phần JS; gọi `seek(0)`, `seek(TOTAL/2)`, `seek(TOTAL)`
  không lỗi; track monotonic.
- **render:** tạo được `final.mp4` phát được, độ dài ≈ `totalDuration`, có tiếng.
- **/produce:** chạy 1 chủ đề mẫu ra `final.mp4` end-to-end (dry-run voice để khỏi
  tốn credit khi test).

## 9. Ngoài phạm vi (YAGNI)

- Không làm nhạc nền tự sinh (dùng track có sẵn, ghép ở render nếu cần sau).
- Không làm phụ đề đa ngôn ngữ.
- Không làm UI web; mọi thứ chạy qua agent/skill + file.
