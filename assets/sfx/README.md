# SFX thô

File tải về để nguyên tên gốc — tên chứa tác giả và ID nguồn, cần cho phần ghi
công (`freesound`, `pixabay`). Đổi tên là mất dấu vết đó.

| Thư mục | Chứa gì |
|---|---|
| `00-dang-dung/` | file đang được gán cho một khe trong `scripts/build_sfx.mjs` |
| `01-du-tru/` | đã tải nhưng chưa dùng — nguồn để thay khi một khe nghe chưa đạt |

**Không dùng thẳng file ở đây.** `npm run sfx` lọc chúng ra `public/sfx/`: cắt trên
7 kHz, chuẩn hoá về −24 LUFS, fade đuôi, rồi đo vị trí đỉnh. Lý do từng bước nằm
trong đầu file `scripts/build_sfx.mjs`.

## Thêm file mới

1. Bỏ file vào `01-du-tru/`.
2. Khai vào bảng `NGUON` trong `scripts/build_sfx.mjs` (và chuyển sang `00-dang-dung/`).
3. `npm run sfx && npm run validate`.

Tiêu chí chọn file: `chem-art-direction` mục 5.7.

## Khe còn trống

| Khe | Cần âm gì | Vì sao chưa có |
|---|---|---|
| `08-room-tone` | nền phòng rất nhỏ, liên tục, dưới 2 kHz | không có file nào trong kho là tiếng nền dài |

`08-room-tone` không bắt buộc: nó làm khoảng lặng bớt "chết" trên loa TV, nhưng
thiếu nó video vẫn đúng luật. Nếu bổ sung, cần file **≥ 60 giây, loop liền mạch,
không có sự kiện nào nhô lên**.
