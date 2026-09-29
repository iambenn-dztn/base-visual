# Sổ tham khảo thumbnail của kênh

Agent `render` đọc file này ở bước 2 của mục "TƯ DUY THUMBNAIL" (`.claude/agents/render.md`) trước khi
thiết kế. Agent không có trình duyệt, nên **người dùng** là người bỏ mẫu vào đây. Mục tiêu: luôn có
10–15 mẫu để không bao giờ bắt đầu từ trang trắng.

Với mỗi mẫu, ghi đủ ba dòng. Không ghi đủ thì mẫu đó vô dụng với agent.

## Cách ghi một mẫu

```
### <tên ngắn> — <nguồn: kênh / poster / bìa album / quảng cáo>
- Link hoặc đường dẫn ảnh: ...
- Gợi câu hỏi gì: ...
- Gợi cảm xúc gì: ...
- Cơ chế tạo ra điều đó: ...   ← đây là thứ được mượn. Không mượn hình.
```

## Năm nguồn nên có mẫu (mỗi nguồn 2–3)

| Nguồn | Tìm ở đâu |
|---|---|
| Internal outliers | `output/*/thumbnail.jpg` của tập vượt CTR trung bình kênh (xem YouTube Studio) |
| External outliers | Video cùng chủ đề ở kênh khác có view vượt trội so với sub của kênh đó |
| Model channels | Kênh cùng **định dạng** (giải thích chậm, hình dựng) nhưng **khác chủ đề** |
| Bookmarks | Thumbnail khiến chính mình dừng tay khi lướt; lưu vào playlist riêng rồi chép sang đây |
| Off-platform | Poster phim, bìa album, biển quảng cáo, trang Frame Set |

## Mẫu

_(chưa có — thêm dần; agent sẽ nói rõ khi file trống và chỉ dùng thumbnail cũ của kênh)_

## Ghi chú về kênh này

- Tệp xem trên TV → bài test 50% là bắt buộc, không phải gợi ý.
- Thứ kênh dựng đẹp nhất là vật thể vũ trụ thật. Thumbnail nào để chữ lấn vật thể là đang bỏ vũ khí.
- Thumbnail `quasar` (2026-09-16) là ví dụ về lỗi cũ: hook ở đáy, chủ thể cưỡi đường giữa, tag thừa.
