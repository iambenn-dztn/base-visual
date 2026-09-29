# Review — `tamashii-no-tabi`

> Cập nhật 2026-09-22 (lần 2). Đã có **intro 2s** + **outro 5s màn đen** + nhạc nền
> `assets/bg-music/`, và **sửa xong 8 cảnh trống**. **Chưa render MP4.**

## Mở preview

```bash
cd "E:\JAPAN\2\1. Tam Ly, Tam Linh"
npm run dev
```
→ **http://localhost:3002**

Xem nhanh không cần studio:
- `output/_assets/tamashii-no-tabi/hf-sweep/contact-sheet-1.jpg` và `-2.jpg` — **14 khung rải khắp tập**
- `nghe-INTRO-2s-lead.mp3` · `nghe-OUTRO-5s-den.mp3`

---

## Cấu trúc âm thanh

| Đoạn | Nội dung |
|---|---|
| **0 → 2s** | intro — nhạc nền, chưa có giọng, hình đen |
| 2 → 1552,18s | thân — giọng + nhạc gain 0,13 |
| **1552,18 → 1557,18s** | outro — nhạc lên 0,34, **màn hình đen** |
| **Tổng** | **1557,21s = 25,95 phút** |

Playlist: `intro → Path → Weight → Clarity → Settle`.
Đo thật: lead −24,8 LUFS · thân −21,9 · tail −26,1.

Script: `scripts/build-audio.mjs` + `scripts/apply-lead-tail.mjs` (idempotent).
Mốc ở `audio.json`.

---

## ⭐ NGUYÊN NHÂN GỐC ĐÃ TÌM RA: lệch đơn vị `loc()`

Tôi chẩn sai một lượt ("agent bị ngắt giữa lúc dựng"). Thật ra là **một dòng làm đóng băng
cả 47 cảnh**:

`hf-astro.js` → `loc()` trả **tỉ lệ 0–1**. Nhưng cả 47 hàm cảnh trong `index.html` viết `u`
theo **nghĩa GIÂY** (`u > 26.0`, `win(u, 9.0, 16.0)`, `u - 5.0`). Nên mọi cảnh **đứng ở ~1%
đầu vĩnh viễn** — vòng chưa khép, cổng chưa hiện, camera chưa rời chỗ.

⚠ **Ba cổng kiểm đều PASS** trong lúc đó. Không có lỗi nào để lần theo.

Đã override `loc` **tại `index.html` (dòng ~836)** trả về giây. **Đừng sửa về 0–1** — sẽ
đóng băng lại toàn bộ. Không sửa thư viện vì 13 tập Việt cũ dùng đúng nghĩa 0–1.

**Bốn lỗi cùng họ "pass mà sai" tìm kèm:** vật thể chồng chỗ (đĩa che sách) · một nhóm không
có đèn (ra đen hoàn toàn) · hạt sương không có trần kích thước (nở thành đốm 1/4 khung) ·
texture nhãn dựng lười trong `renderAtTime` (hỏng rải rác tuỳ font về kịp).

**Và một phát hiện nữa:** ba cảnh cuối sai không phải vì ánh sáng, mà vì **hình chậm hơn lời
đọc 5–24 giây**. Ví dụ 六道: lời gọi tên sáu cõi ở u=8,8–13,0 nhưng hình mới sáng từng cõi ở
`9.0 + i*1.9`, xong ở u=18,5. Đã retime theo lời.

---

## Cổng kiểm

```
lint      0 error (1 warning: file dài — có từ trước)
validate  No console errors
inspect   0 layout issues / 9 mẫu
```

Tất định: **0** `Math.random` / `rAF` / `Date.now` / `setTimeout` trong mã thực thi.
Tám bất biến còn nguyên: `_tReal` · `t-2` · `TOTAL 1557.18` · `_SCENE_DUR` · `#outro-black` ·
`applySubtitle(_tReal)` · `CUES` bắt đầu `{t:2.00` · khoá timeline · **`loc()` trả giây**.

---

## ✅ Đã xác nhận bằng mắt (14 khung)

| Mốc | |
|---|---|
| 30s · 90s | phòng 和室 + 仏壇, ánh nến ấm, đọc ra không gian thật |
| 180s | vòng luân hồi khép kín, halo, sương có chiều sâu |
| 300s | trang 倶舎論 — chữ dọc, có đèn (trước đây ĐEN HOÀN TOÀN) |
| 420s | máng bảy vạch, **nhãn 初七日…七七日 đọc được** |
| 560s | núi trước, sông sau |
| 700s | 衣領樹 có cành, ba tấm vải, **奪衣婆・懸衣翁 có nhãn** |
| 900s | **bảy 関所 đếm được**, 三十五日目 lớn vs 四十九日 nhỏ |
| 940s | vòng 六道 sáu cõi phân biệt được |
| 1100s | trang sách chữ dọc, tay lật |
| **1160s** | **cú lật** — tượng 地蔵 có 前掛け đỏ (trước đây CHÁY TRẮNG) |
| 1300s | **vòng tròn khép** — về đúng phòng 仏壇 của 30s |
| 1420s | mốc 三回忌 có sàn + sương, không còn trôi trong hư không |
| 1500s | 障子 với ánh nến |

**Phụ đề tiếng Nhật sắc nét ở mọi khung, không có ô tofu.**
**Intro/outro hoạt động:** rootOpacity 0 ở 0,5s và 2s → 0,38 ở 2,5s → 1 ở 3,5s;
1551s còn hình (26/255), 1554s đen hoàn toàn (0/255).

---

## ✅ Đã enhance cảnh cú lật (S38 @ giây cảnh ~1160)

Ảnh: `output/_assets/tamashii-no-tabi/hf-merge/contact-sheet.jpg` (5 mốc trong S38).

Bốn thứ đã sửa:

1. **Hai pho khớp thành MỘT bóng** — đúng spec storyboard. 地蔵 đá nhạt phía trước,
   閻魔 vai nâu + mũ 冠 phía sau, chung một đường viền ngoài. Trước đây bàn và thanh dọc
   cắt ngang thân nên đọc ra "tượng đứng sau cái bàn".
2. **前掛け ra dáng vải** — có nếp, bo góc, dây buộc sau cổ, đỏ đã bạc màu (RGB 151,71,60).
3. **Hai quả cầu trắng đã hết** — hoá ra là tay + 宝珠 của 地蔵 trùng chỗ tay 閻魔.
4. **Phụ đề không còn chồng tượng** — nâng khung hình, KHÔNG dịch `#sub`.

⚠ **Mốc chụp lệch 2 giây.** File có `t = Math.max(0, t-2)`, nên chụp ở 1160 thực ra là
**giây cảnh 1158**. Muốn xem giây cảnh 1160 phải chụp ở **1162**. Nhịp chồng xong quanh
giây cảnh 1160, đúng chỗ lời đọc bước sang 「あのお地蔵さん」.

Khung 1174/1178s là **S39** — spec nói hai pho tách lại thành hai, đứng cạnh nhau. Đúng thiết kế.

## ✅ ĐÃ SỬA NỐT HAI CHỖ CUỐI (2026-09-22)

**S45** — nguyên nhân là **camera, không phải trang trí**. Ở giây cảnh 1418 camera đứng ở
`cz = 9.5` với ống 50mm (khung ~9 đơn vị) trong khi khoảng cách 一周忌 → 三回忌 là **18 đơn vị**.
Về mặt hình học **chỉ một mốc lọt khung được** — thêm sàn/sương bao nhiêu cũng vô ích.
Đã cho camera **lùi theo tỉ lệ khoảng cách đang vượt**, lag phía sau điểm di chuyển, lookAt
lệch trái về phía các mốc đã qua. Đếm được: 7 · 9 · 9 · 8 · 6 · **4** (tại 1418) · 3 · 3 · 10.
Không còn khung nào một mốc.

**肉髻 — CỐ Ý KHÔNG THÊM.** Tra ra: 肉髻 là một trong **32 tướng của 如来 (Phật)**.
地蔵菩薩 là **菩薩** dựng theo **僧形/剃髪** — đầu tròn nhẵn, có 白毫 ở trán nhưng KHÔNG có 肉髻.
Agent trước bỏ nó là **đúng về tượng học**, không chỉ vì khó dựng. Đây là chỗ nếu thêm cho
"đủ chi tiết" thì sai kinh điển.

**Gờ gấu áo** — làm đúng cách: nắn vào **profile của LatheGeometry** (bán kính loe ra 0,432
ở y=0,392 rồi thụt gấp về 0,404 ở y=0,452). Gờ đọc ra từ **đổi hướng của đường sinh**, không
phải từ khối đắp thêm → không có đường nối, không có vòng đai lơ lửng.

## ✅ Quét kiểm toàn tập (16 mốc)

Ảnh: `output/_assets/tamashii-no-tabi/hf-FINAL/contact-sheet-1.jpg` và `-2.jpg`

| Mốc | |
|---|---|
| **1s** | ✅ đen — intro đúng |
| 32s · 92s | phòng 和室 + 仏壇, ánh nến ấm |
| 182s | vòng luân hồi khép kín, có nhãn 輪廻 |
| 302s | trang 倶舎論 chữ dọc, có đèn |
| 422s | máng bảy vạch + **満中陰/忌明け** |
| 562s | núi trước, sông sau |
| 702s | 衣領樹 + 奪衣婆・懸衣翁 |
| 902s | bảy 関所, 三十五日目 vs 四十九日 |
| 942s | vòng 六道 |
| 1102s | trang sách + tay lật |
| **1162s** | **cú lật** — hai pho chồng thành một bóng, 前掛け đỏ có nếp |
| **1302s** | **vòng tròn khép** — về đúng phòng 仏壇 |
| 1420s | trục mốc giỗ có chiều sâu, giãn dần |
| 1502s | 障子 + ánh nến |
| **1554s** | ✅ đen — outro đúng |

Phụ đề Nhật sắc nét mọi khung, không ô tofu.

## ⭐ Đã ghi bài học vào skill

| File | Ghi gì |
|---|---|
| `.claude/agents/visual-builder.md` | **6 lỗi "PASS mà SAI"** + 2 bẫy + siết vòng kiểm ảnh |
| `.claude/agents/voice-generator.md` | `build-audio.mjs`, mốc LUFS, bẫy ffmpeg |
| `.claude/skills/produce/SKILL.md` | khâu 3 + khâu 4 mới, checkpoint xem ảnh |
| `CLAUDE.md` | luật 8 (intro/outro) + luật 9 (check pass ≠ hình đúng) |
| `scripts/README.md` | sơ đồ mới, 2 script mới, mục ⑦ vòng kiểm ảnh |

## Còn lại

- Khâu 5 (render + thumbnail + YOUTUBE.md) chưa chạy.
- Render nhớ `TEMP`/`TMP` → `E:\hf-tmp` (xem `CLAUDE.md`).
- SFX ở `assets/sfx/` là của **kênh chị em** (click/coin/cash cho 図解 tiền bạc) —
  không dùng cho tập này. Tập này cần tiếng chuông/nước/giấy; chưa có file phù hợp nên
  chưa thêm SFX nào.
