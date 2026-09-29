# `_sample-ja` — fixture thử pipeline tiếng Nhật

Ba cue tiếng Nhật thuộc trụ 死とその後, dùng để thử nhanh chuỗi
voice → captions mà không phải dựng cả tập. Đừng xoá (giống `_sample` của tiếng Việt).

```bash
node scripts/voice-sovits.mjs --project projects/_sample-ja --dry-run   # không cần server
node scripts/voice-sovits.mjs --project projects/_sample-ja             # cần server 9880
node scripts/gen-captions.mjs --project projects/_sample-ja
```

Mốc tham chiếu — giọng **`keita`** (mặc định của kênh), speed 0.95, seed 42.
Lệch nhiều so với đây là có gì đó đổi:

| | |
|---|---|
| tổng thời lượng | **31,45 s** |
| md5 của `voice/seg-00.wav` | `a87a21e6b704fb7d5410fa32be7fefa6` |
| `_NEWT` | `[0, 9.59, 21.6, 31.45]` |
| phụ đề | 12 dòng, dài nhất 20 ký tự (ngưỡng 22) |

Cùng seed + cùng chữ → file byte y hệt (đã kiểm bằng md5 hai lần).

## Vì sao dry-run lệch so với bản thật

Mặc định `--cps 4.9` đo trên **đoạn văn thật** (nhiều câu nối nhau, có 。、 ở giữa).
Fixture này là ba cue NGẮN rời nhau nên TTS đọc nhanh hơn → ước lượng thừa vài phần trăm.
Đây là **hướng lệch an toàn**: kịch bản thật sẽ hơi dài hơn dự tính, không bị hụt giờ.
Đừng "sửa" bằng cách nâng `--cps` — kịch bản thật là đoạn văn, không phải câu rời.

## Mốc cũ (giọng nanami, trước 2026-09-21)

Tổng 26,48s · `_NEWT [0, 8.43, 18.81, 26.48]`. Giữ lại để đối chiếu nếu cần chạy lại giọng cũ:
`--voice nanami --speed 1.0 --cps 5.1`.
