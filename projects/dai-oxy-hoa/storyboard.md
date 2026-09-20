# STORYBOARD — Đại Oxy Hoá: Lần Trái Đất Tự Đầu Độc Mình

## METADATA

- **Slug:** `dai-oxy-hoa`
- **Tổng thời lượng dự kiến:** ~18:00–19:00 (3245 từ, 23 gap). Con số CHUẨN đến từ `timing.json`.
- **Số shot:** **96 shot** (S01–S96), phủ trọn **101 cue** (C01–C101). Đã đếm lại bằng cách
  liệt kê từng dòng tiêu đề shot trong chính file này, không ước lượng.
- **Phân bổ shot theo chương** (cộng lại = 20+23+26+27 = 96):
  - CHƯƠNG 1 — BIỂN KHÔNG AI THỞ (C01–C21): **S01–S20** = 20 shot
  - CHƯƠNG 2 — CHẤT ĐỘC MANG TÊN KHÔNG KHÍ (C22–C45): **S21–S43** = 23 shot
  - CHƯƠNG 3 — KHI CÁI THÙNG ĐẦY (C46–C72): **S44–S69** = 26 shot
  - CHƯƠNG 4 — MÓN QUÀ MANG HÌNH CHẤT ĐỘC (C73–C101): **S70–S96** = 27 shot
- **Nhịp:** ~96 shot trên ~18:30 ≈ **11–12 giây/shot trung bình**. Nhanh hơn mức 15–25s/shot
  thường dùng — có chủ đích, vì tập này chuyển thang tỉ lệ liên tục (hành tinh ↔ phân tử).
  Các shot "thở" cố ý dài hơn hẳn: S31, S50, S53, S67, S90, S94, S95, S96.
- **Nhạc nền:** `assets/bgm.mp3` — một track chung cho cả tập. Không ghi audio theo shot; chỉ
  những shot có dòng `SFX` mới cần hiệu ứng riêng.
- **Phụ đề:** sinh tự động từ `voice/*.srt` bằng `scripts/gen-captions.mjs`. Storyboard KHÔNG chép phụ đề.

### Loại visual theo chương

| Chương | Loại visual chủ đạo | Bổ trợ |
|---|---|---|
| 1 (C01–C21) | **procedural** — biển nông ấm ngôi thứ nhất, thảm vi khuẩn lam phân tầng, bong bóng oxy | **molecular** (cụm Mn₄Ca), macro sinh học |
| 2 (C22–C45) | **molecular / particle** — enzyme cụm Fe-S bị giật, gốc hydroxyl, tuyết sắt rơi | split-screen so sánh (gỉ/cháy/ôi thiu), procedural biển |
| 3 (C46–C72) | **geological + astro-realistic** — vách dải sắt phân lớp, Trái Đất từ quỹ đạo đổi màu khí quyển | **graph** (đường oxy khí quyển), particle băng |
| 4 (C73–C101) | **molecular / cell-biology** — lên men vs hô hấp hiếu khí, nội cộng sinh, ty thể cristae | live-action-like (phòng, hơi thở), macro lá |

### ⚠ ĐÂY LÀ TẬP SINH HỌC — KHÔNG CÓ CẢNH VŨ TRỤ

Chín tập trước đều vật lý/thiên văn. Tập này là sự sống, tiến hoá, lịch sử Trái Đất sâu.
**Cấm tuyệt đối:** starfield, thiên hà, tinh vân, sao khác, hệ Mặt Trời nhìn từ xa, deep space.
Trái Đất CHỈ được nhìn từ **quỹ đạo thấp** (S44, S49, S52, S53, S54, S55, S56) — khung hình luôn
bị hành tinh chiếm ≥70%, **nền sau rìa hành tinh là đen thuần, KHÔNG rải sao**. Mặt Trời trẻ (S50)
là một đĩa sáng mờ sau lớp khí quyển, không phải một ngôi sao trên nền vũ trụ.
Nếu thấy mình định vẽ không gian — dừng lại.

### Trục màu khí quyển — xương sống hình của cả tập

Đây là thứ người xem cảm được mà không cần ai giải thích. **Cấm nhảy ngược** — một khi đã
sang nấc sau, không shot nào được quay lại nấc trước (ba ngoại lệ hồi tưởng: S71, S82, S86 —
các shot này không được hiện bầu trời trong khung, xem mục 6 phần GHI CHÚ DỰNG HÌNH).

| Nấc | Tên | Hex | Linear RGB | Cue áp dụng | Shot áp dụng |
|---|---|---|---|---|---|
| 1 | **Cam đục metan** (dày nhất) | `#FF6B1A` | `(1.00, 0.42, 0.10)` | C01–C59 | S01–S56 |
| 2 | **Cam nhạt dần** (metan loãng) | `#FF8C33` | `(1.00, 0.55, 0.20)` | C60–C63 | S57–S60 |
| 3 | **Trắng toàn cầu Huronian** | `#CCE0FF` | `(0.80, 0.88, 1.00)` | C64–C70 | S61–S67 |
| 4 | **Xanh hiện đại** | `#0F61FF` | `(0.06, 0.38, 1.00)` | C71–C101 | S68–S96 |

Chuyển nấc là **nội suy liên tục**, không cắt cứng: nấc 1→2 bắt đầu ở cuối **S56** và hoàn tất
trong **S57**; nấc 2→3 diễn ra dần suốt **S61–S64**; nấc 3→4 suốt **S68**. Nội suy trong không
gian **linear**, không phải sRGB, để tránh đi qua vùng xám bùn ở giữa.

### Chỉ mục cao trào — chỗ cần đầu tư nhiều nhất

Đã đối chiếu từng mã với dòng tiêu đề shot thật trong file này.

| Cao trào | Cue | **Shot** |
|---|---|---|
| Tuyệt chủng KHÔNG CÓ THỦ PHẠM BÊN NGOÀI | C33–C36 | **S32, S33, S34, S35** |
| Cụm sắt-lưu huỳnh trong enzyme bị oxy giật ra | C27–C28 | **S26, S27** |
| Cụm Mn₄Ca tách nước (lời hứa hình, trả ở S89) | C15–C16 | **S15** |
| Vách dải sắt phân lớp như cuốn lịch địa chất | C47–C56 | **S45, S46, S49, S51, S52, S53** |
| Huronian — Trái Đất trắng + Mặt Trời trẻ mờ 20% | C62, C67–C70 | **S59 (−20%), S64, S65, S67** |
| Ty thể — hậu duệ của vật từng bị nuốt | C81–C84 | **S76, S78, S79** |
| 2 so với ~30 đơn vị năng lượng | C75–C77 | **S72, S73** |
| Kết bằng một hơi thở | C99–C101 | **S94, S95, S96** |

---

# CHƯƠNG 1 — BIỂN KHÔNG AI THỞ

## S01 · C01 · CHƯƠNG 1
SCENE   Mở bằng đen thuần. Mặt nước biển nông ngang thắt lưng, góc nhìn thứ nhất, nhìn thẳng ra đường chân trời cam đục — không một chuyển động nào ngoài sóng lăn tăn
CAMERA  fade-in từ đen rất chậm (2s im lặng đầu), camera đứng yên tuyệt đối ở cao độ mắt người ~1.6m so với đáy, 35mm
ELEMENT mặt nước tĩnh với gợn sóng Gerstner biên độ rất thấp (~3cm, chu kỳ 4s); đường chân trời thấp ở 1/3 dưới khung; bầu trời SKY-1 `(1.00,0.42,0.10)` chiếm 2/3 trên, gradient đục dần về chân trời (Mie scattering mạnh, tầm nhìn ~4km); ánh sáng khuếch tán, KHÔNG có đĩa Mặt Trời rõ — chỉ một vùng sáng mờ; mặt nước phản chiếu cam; TUYỆT ĐỐI không chim, không cây, không bóng sinh vật nào trên đường chân trời
SFX    im lặng hoàn toàn 2s rồi vào tiếng nước lặng
CUT    giữ nguyên khung sang S02 — sự bất động là nội dung

## S02 · C02 · CHƯƠNG 1
SCENE   Vẫn khung đó, nhưng camera chậm rãi quét ngang tìm một nguồn âm thanh không có — sự trống rỗng được diễn bằng chuyển động tìm kiếm rồi bỏ cuộc
CAMERA  pan ngang trái→phải rất chậm 40°, dừng lại, pan ngược một nửa rồi đứng im; 35mm, không cắt
ELEMENT cùng biển và trời SKY-1; thêm vài mỏm đá bazan trơ trọi màu xám đen nhô lên rải rác — bề mặt đá SẠCH TRƠN, không rêu, không địa y, không một mảng xanh nào trên cạn (chưa có sự sống trên đất liền); nước liếm vào đá tạo viền bọt mỏng; không một vật thể nào chuyển động ngoài sóng
CUT    cắt thẳng sang S03 khi bong bóng đầu tiên nổi lên

## S03 · C03 · CHƯƠNG 1
SCENE   Cụm bong bóng nhỏ nổi lên từ dưới chân, lan ra hai bên — dấu hiệu sống đầu tiên của cả tập
CAMERA  tilt-down từ chân trời xuống mặt nước ngay dưới chân, kết ở góc nhìn thẳng đứng xuống, 35mm
ELEMENT bong bóng đường kính 1–4mm nổi lên rời rạc theo cụm 3–8 hạt, quỹ đạo xoắn nhẹ do sức cản; tốc độ nổi tỉ lệ nghịch với kích thước (hạt to nhanh hơn); khi chạm mặt nước vỡ thành vòng gợn lan ra; nước màu lục nhạt đục `(0.18,0.34,0.30)` do sắt hoà tan + hạt lơ lửng, độ trong ~2m; thấy lờ mờ đáy biển phủ thảm sẫm màu
CUT    cắt sang S04 — camera ngẩng lên trời

## S04 · C04 · CHƯƠNG 1
SCENE   Ngẩng mặt lên bầu trời cam đục, ánh nắng xuyên qua như nhìn qua lớp khói cũ
CAMERA  tilt-up nhanh từ mặt nước lên thẳng đỉnh trời, 24mm góc rộng, giữ ở zenith
ELEMENT lớp mù metan phân tầng theo độ cao — đậm nhất ở chân trời, loãng dần lên zenith nhưng KHÔNG bao giờ trong; vùng sáng Mặt Trời là đĩa mờ nhoè viền, đường kính biểu kiến đúng ~0.5° nhưng bị tán xạ thành quầng ~8°; màu SKY-1 `(1.00,0.42,0.10)`; hạt aerosol hydrocarbon lơ lửng tạo vệt sáng thể tích (god rays) khi nhìn ngược sáng
CUT    dissolve sang S05

## S05 · C05 · CHƯƠNG 1
SCENE   Sơ đồ thành phần khí quyển — ba khối khí có mặt, và một ô gần như rỗng dành cho oxy
CAMERA  tĩnh, camera chính diện sơ đồ nổi trên nền biển mờ (depth-of-field đẩy nền ra sau)
ELEMENT thanh ngang chia tỉ lệ: N₂ ~78% xám lam nhạt, CO₂ vài % xám, CH₄ vệt cam dày bất thường so với hiện đại, và ô **O₂** mảnh tới mức gần như không thấy được — nhấn bằng cách phóng to ô đó 1000× trong một khung phụ mà vẫn chỉ là một sợi chỉ; nhãn chữ **emissive 0.55, nét dày 3px** (dưới ngưỡng bloom 1.0); không dùng biểu đồ tròn — dùng thanh tuyến tính để so sánh được
CUT    cắt sang S06

## S06 · C06 · CHƯƠNG 1
SCENE   Đối chiếu: cùng thanh khí quyển đó biến đổi sang tỉ lệ hiện đại rồi bật trở lại quá khứ — cú lật của một định kiến
CAMERA  tĩnh, giữ đúng vị trí sơ đồ S05 để so sánh được từng pixel
ELEMENT thanh khí quyển morph: ô O₂ phình từ sợi chỉ lên 21% (lam `(0.18,0.62,1.00)`), CH₄ tụt gần về 0, rồi **đảo ngược lại** trạng thái cổ đại trong 0.8s; chuyển động là hàm thuần của t, ease-in-out; khi đảo ngược, bầu trời nền phía sau cũng nháy từ xanh về cam — báo trước trục màu của cả tập
CUT    hoà tan sang S07, sơ đồ tan vào nước

## S07 · C07 · CHƯƠNG 1
SCENE   Câu lật: oxy không phải phông nền mà là sản phẩm — camera bỏ trời, lao xuống nước tìm thủ phạm
CAMERA  tilt-down + dolly-in xuống mặt nước, xuyên qua mặt phân cách khí-nước (có khoảnh khắc nửa trên nửa dưới), kết ở dưới nước nhìn xuống đáy
ELEMENT khoảnh khắc mặt phân cách: nửa trên khung là trời cam, nửa dưới là nước lục đục, đường ranh giới có méo khúc xạ; dưới nước ánh sáng chuyển nhanh sang lục vàng (nước hấp thụ đỏ trước); đáy biển hiện dần: một tấm thảm sẫm trải kín tầm mắt, bề mặt gợn sóng như nhung
CUT    cắt sang S08

## S08 · C08 · CHƯƠNG 1
SCENE   Bàn tay luồn vào nước chạm phải tấm thảm — xúc giác: dai, có lớp, trơn theo kiểu có tổ chức
CAMERA  góc nhìn thứ nhất nhìn xuống bàn tay mình, 50mm, macro nông; dolly-in nhẹ theo tay
ELEMENT bàn tay (đeo găng mỏng, ống tay áo bộ đồ hiện đại — nhắc rằng đây là người quan sát ngoài thời) ấn xuống thảm, thảm LÕM xuống rồi đàn hồi trở lại (mô phỏng vật liệu nhớt-đàn hồi, không phải bùn rời); bề mặt thảm nhớp nháp có màng sáng bóng; khi tay rút ra, sợi nhầy kéo theo rồi đứt; hạt bùn mịn bốc lên cuộn theo
CUT    cắt sang S09

## S09 · C09–C10 · CHƯƠNG 1
SCENE   Mảnh thảm được kéo lên khỏi mặt nước — cận cảnh cấu trúc phân tầng của thảm vi khuẩn lam, bong bóng oxy bám dọc mặt ngoài
CAMERA  tilt-up theo tay nâng mảnh thảm lên khỏi mặt nước, 85mm macro, DOF rất nông chuyển tiêu điểm từ mặt ngoài vào mặt cắt
ELEMENT **mảnh thảm dày ~2cm, MẶT CẮT PHÂN TẦNG rõ** (quy ước bắt buộc): lớp trên cùng xanh lục ngả lam CYANO `(0.04,0.85,0.62)` dày ~3mm là vi khuẩn lam quang hợp; dưới là lớp tím-hồng vi khuẩn lưu huỳnh tía; dưới nữa lớp đen vi khuẩn khử sunfat; đáy lớp bùn xám — bốn tầng phân định rõ vì mỗi tầng sống ở một mức ánh sáng/oxy khác nhau; nước rỉ ra khi bóp; **bong bóng oxy li ti bám dọc mặt ngoài lớp xanh**, vài hạt tách ra nổi lên
CUT    giữ khung, đẩy macro sâu hơn sang S10

## S10 · C10 · CHƯƠNG 1
SCENE   Macro cực cận vào bong bóng oxy trên bề mặt thảm — những phân tử oxy tự do đầu tiên đáng kể của hành tinh
CAMERA  push-in macro tiếp tục tới khi một bong bóng chiếm 1/3 khung; 100mm macro, DOF cực nông (chỉ bong bóng nét)
ELEMENT bong bóng đơn lẻ trên nền thảm xanh, màng bong bóng phản chiếu bầu trời cam méo theo hình cầu (cho thấy trời cam gián tiếp); bên trong bong bóng chớm gợi vài cặp phân tử O₂ dạng hai quả cầu nối nhau, lam nhạt, mờ ảo — gợi ý chứ không phải sơ đồ hoá học; bong bóng rung nhẹ rồi tách khỏi bề mặt, nổi lên
CUT    cắt sang S11 — đổi hoàn toàn tỉ lệ

## S11 · C11 · CHƯƠNG 1
SCENE   Nhảy tỉ lệ xuống mức tế bào: vi khuẩn lam thật — chuỗi hình trụ nối đuôi, không não, không mắt, không ý định
CAMERA  dolly-in xuyên qua bề mặt thảm vào giữa đám tế bào, 60mm; camera len giữa các sợi khuẩn
ELEMENT sợi vi khuẩn lam dạng **chuỗi tế bào hình trụ nối đuôi nhau** (filamentous, kiểu *Oscillatoria*), mỗi tế bào ~1–2µm, có vách ngăn rõ giữa các tế bào; bên trong: các phiến thylakoid xếp đồng tâm áp sát màng, màu CYANO `(0.04,0.85,0.62)`; hạt carboxysome đa diện rải rác; **không có nhân** — đây là sinh vật nhân sơ, cấm vẽ nhân tế bào; các sợi trượt chậm qua nhau (gliding motility); thanh tỉ lệ "1000 tế bào < 1mm" ở góc, emissive 0.5
CUT    cắt sang S12

## S12 · C12 · CHƯƠNG 1
SCENE   Câu chốt của chương: nó học cách tách nước — một phân tử nước lơ lửng ở giữa khung, chờ bị bẻ
CAMERA  tĩnh tuyệt đối, chính diện, 85mm — dừng mọi chuyển động để câu này đứng một mình
ELEMENT một phân tử H₂O đơn độc trên nền tối: O đỏ lớn, hai H trắng nhỏ, **góc liên kết đúng 104.5°**, độ dài liên kết tỉ lệ đúng; phân tử quay chậm quanh trục thẳng đứng; ánh sáng viền lam nhẹ; nền tối gần đen với vệt CYANO rất mờ ở rìa (nhắc bối cảnh); không có gì khác trong khung
CUT    cắt sang S13

## S13 · C13 · CHƯƠNG 1
SCENE   Đối thủ cũ: các vi khuẩn thời trước lấy electron từ hydro sunfua, sắt hoà tan — nguồn phải đi tìm, phải tranh nhau, phải chờ núi lửa
CAMERA  pan ngang qua ba "trạm" nguồn electron cũ, mỗi trạm dừng ~1s; 40mm; chuyển động đều như duyệt qua một dãy
ELEMENT ba cụm: (1) miệng phun thuỷ nhiệt đáy biển phun H₂S, khói đen cuộn lên, quanh đó vi khuẩn bám chen chúc; (2) đám sắt hoà tan Fe²⁺ khuếch tán loang lổ trong nước, vi khuẩn bơi đuổi theo vệt đậm; (3) một vùng đã cạn nguồn — vi khuẩn thưa thớt, lờ đờ; thông điệp hình: nguồn cũ **cục bộ, rời rạc, phải tranh giành**; màu H₂S vàng lục `(0.80,1.00,0.25)`, Fe²⁺ lục xám
CUT    cắt sang S14 — đổi từ khan hiếm sang dư thừa

## S14 · C14 · CHƯƠNG 1
SCENE   Nó chọn thứ dồi dào nhất hành tinh: nước — camera kéo ra cho thấy toàn bộ đại dương chính là nguồn
CAMERA  pull-back cực mạnh từ một phân tử nước ra tới cảnh toàn đại dương, liên tục không cắt, 85mm → 18mm
ELEMENT chuỗi tỉ lệ liên tục: phân tử H₂O → cụm vài chục phân tử → giọt → cột nước → mặt biển → biển trải tới chân trời dưới trời cam; tương phản trực tiếp với S13: nguồn này **ở khắp mọi nơi, vô hạn, không phải tranh với ai**; mật độ phân tử tăng dần theo từng nấc kéo ra
CUT    cắt sang S15 — cao trào phân tử chương 1

## S15 · C15–C16 · CHƯƠNG 1
SCENE   **[CAO TRÀO HÌNH]** Cụm mangan-canxi: bốn nguyên tử Mn xếp quanh một Ca, cái kìm phân tử giữ nước lại và bẻ ra bằng năng lượng ánh sáng
CAMERA  dolly-in chậm vào tâm phức hợp quang hệ II, xoay quanh cụm Mn₄Ca một vòng 180°, kết ở cận cảnh khoảnh khắc bẻ liên kết; 85mm macro
ELEMENT **cụm Mn₄CaO₅ đúng cấu trúc "ghế méo" (distorted chair)**: 3 Mn + 1 Ca tạo khối cubane, Mn thứ tư treo ngoài qua cầu oxy; Mn tím `(0.75,0.30,1.00)`, Ca trắng vàng `(1.00,0.92,0.70)`, cầu O đỏ; xung quanh là khung protein dạng ribbon lam xám mờ (không che mất cụm); **chu trình**: photon lam bắn vào → cụm đổi trạng thái oxy hoá (màu Mn sáng dần qua 4 nấc S₀→S₄, mỗi nấc một photon) → tại nấc thứ tư, hai phân tử H₂O bị kẹp vào, liên kết O–H đứt, **một phân tử O₂ bật ra**, 4 H⁺ và 4 e⁻ tách theo hai đường khác nhau; O₂ mới sinh màu OXY `(0.18,0.62,1.00)`
SFX    tiếng "tách" khô, rất khẽ, đúng khoảnh khắc liên kết đứt
CUT    hoà tan sang S16 — nhân bản cụm này ra vô số chiếc lá

## S16 · C16–C17 · CHƯƠNG 1
SCENE   Cụm mangan ra đời một lần và chưa từng được phát minh lại — nó nhân ra thành mọi chiếc lá từng tồn tại
CAMERA  pull-back từ cụm Mn₄Ca, cụm nhân bản theo cấp số nhân lấp đầy khung, kết ở một chiếc lá xanh hiện đại; 85mm → 35mm
ELEMENT cụm Mn₄Ca nhân đôi liên tục theo hàm mũ thuần của t, các bản sao xếp thành mạng lục giác rồi thành phiến thylakoid, rồi thành lục lạp, rồi thành tế bào lá, rồi thành gân lá, kết ở **một chiếc lá xanh LEAF `(0.18,0.90,0.22)` ngược sáng** — bước nhảy thời gian 2 tỉ năm trong một cú kéo; mọi bản sao giữ ĐÚNG hình học "ghế méo" ban đầu, không biến dạng — đó là điểm của cảnh
CUT    cắt ngược về biển cổ đại sang S17

## S17 · C17–C18 · CHƯƠNG 1
SCENE   Câu hỏi treo: hydro thì giữ, electron thì dùng — còn oxy thì sao? Rồi khoảng lặng, rồi thì thầm: nó vứt đi
CAMERA  tĩnh hoàn toàn, 85mm, cận cảnh đầu ra của phản ứng; giữ bất động suốt 2s im lặng
ELEMENT ba luồng sản phẩm tách khỏi cụm Mn₄Ca, ba hướng khác nhau: **H⁺** trắng đi vào gradient màng (mũi tên vào trong, sáng lên); **e⁻** lam đi vào chuỗi vận chuyển (mũi tên vào trong, sáng lên); **O₂** lam nhạt — không có đường nào đón, nó trôi ra ngoài khung, mờ dần; hai luồng đầu có đích, luồng thứ ba KHÔNG; khi giọng thì thầm "vứt nó đi", O₂ trôi hẳn ra khỏi khung
CUT    cắt sang S18

## S18 · C19 · CHƯƠNG 1
SCENE   Oxy là rác — hàng trăm triệu năm thải ra, từng bong bóng một, mỗi ngày mỗi mùa
CAMERA  timelapse: camera cố định dưới nước nhìn lên, tua nhanh qua nhiều chu kỳ ngày-đêm-mùa
ELEMENT dòng bong bóng oxy liên tục bốc lên từ thảm phủ kín đáy, mật độ dao động theo chu kỳ ánh sáng (ban ngày dày, ban đêm ngưng hẳn — quang hợp cần sáng); ánh sáng trên mặt nước nhấp nháy theo nhịp ngày-đêm nhanh dần; bộ đếm thời gian góc khung chạy từ 0 lên hàng trăm triệu năm, emissive 0.5; mỗi "mùa" thảm dày thêm một chút
CUT    cắt sang S19

## S19 · C20 · CHƯƠNG 1
SCENE   Thả mảnh thảm trở lại nước, nó chìm chậm về chỗ cũ trong đám đồng loại trải tới tận chân trời
CAMERA  góc nhìn thứ nhất nhìn theo mảnh thảm chìm xuống, rồi pull-back + tilt-up lên toàn cảnh đáy biển trải rộng; 50mm → 24mm
ELEMENT mảnh thảm rơi chậm trong nước, lắc lư như lá rơi trong không khí (lực cản cao), hạt bùn bốc lên nơi nó chạm đáy; khi camera kéo ra: **thảm vi khuẩn lam trải kín đáy biển tới chân trời**, bề mặt gợn theo dòng chảy, màu CYANO đậm dần theo độ sâu; vài cột bong bóng bốc lên rải rác khắp cảnh — quy mô hành tinh của chuyện này lộ ra
CUT    cắt sang S20

## S20 · C21 · CHƯƠNG 1
SCENE   Câu kết chương, hạ giọng gần micro: cái thứ rác đó sắp giết gần hết mọi thứ đang sống ở đây
CAMERA  slow push-in vào một bong bóng oxy đơn lẻ đang nổi lên giữa khung, tối dần xung quanh; 85mm
ELEMENT toàn cảnh tối dần từ rìa vào (vignette mạnh dần), chỉ còn một bong bóng oxy sáng ở tâm; bong bóng đổi màu rất nhẹ từ lam trung tính sang lam có viền tím lạnh — báo hiệu độc tính; mọi chuyển động khác đóng băng dần; kết ở đen gần hoàn toàn với bong bóng là điểm sáng duy nhất
CUT    cắt đen 2.5s (gap) sang CHƯƠNG 2

---

# CHƯƠNG 2 — CHẤT ĐỘC MANG TÊN KHÔNG KHÍ

## S21 · C22 · CHƯƠNG 2
SCENE   Mở chương tối hơn: yêu cầu người xem quên đi cảm giác oxy là thứ tốt lành
CAMERA  fade-in từ đen, camera tĩnh chính diện một phân tử O₂ đơn độc; 85mm
ELEMENT phân tử O₂ duy nhất giữa khung tối: hai quả cầu nối nhau bằng **liên kết đôi**, quay chậm; nhưng khác S10 — giờ nó có viền phát sáng bất an, quầng nhiễu động quanh mình, và các electron chưa ghép đôi hiện thành hai chấm sáng nhấp nháy ở hai cực (O₂ ở trạng thái triplet — đây là lý do vật lý khiến nó phản ứng mạnh); nền đen, ánh sáng rìa lạnh
SFX    tiếng rít khẽ như kim loại bị ăn mòn, rất nhỏ
CUT    cắt sang S22 — bung ra ba bằng chứng

## S22 · C23 · CHƯƠNG 2
SCENE   **Ba từ khác nhau, cùng một hành vi** — split-screen ba phần: gỉ sét, cháy, ôi thiu, chạy đồng thời
CAMERA  ba khung chia dọc đều nhau, mỗi khung một cảnh macro tĩnh; không cắt giữa các khung — chúng chạy cùng lúc
ELEMENT **trái**: đinh sắt gỉ dần theo timelapse, vảy gỉ RUST `(1.00,0.26,0.05)` lan từ vết xước ra; **giữa**: mép miếng gỗ cháy, than đen tiến lên, mép cháy vàng cam sáng; **phải**: mặt cắt quả táo hoá nâu dần từ ngoài vào, màu nâu `(0.45,0.28,0.12)`; **tốc độ ba khung khác nhau rất xa** — gỗ tính bằng giây, táo bằng giờ (tua), sắt bằng năm (tua) — nhưng hình dạng lan truyền giống hệt nhau; nhãn ba từ dưới mỗi khung, emissive 0.55, nét dày
CUT    ba khung trượt vào nhau thành một sang S23

## S23 · C24 · CHƯƠNG 2
SCENE   Ba hiện tượng quy về một cơ chế duy nhất ở mức phân tử: oxy giật electron ra khỏi bất cứ thứ gì nó chạm vào
CAMERA  ba khung hợp nhất, dolly-in xuyên vào chỗ giao nhau, kết ở cảnh phân tử; 50mm → 100mm macro
ELEMENT ba vật liệu (Fe, C của gỗ, phân tử trong táo) mờ đi, chỉ còn lại **cấu trúc chung**: một nguyên tử O tiến tới, một electron lam bị **giật** khỏi nguyên tử đối tác theo quỹ đạo cong dứt khoát, nguyên tử bị mất electron đổi màu (sẫm lại, mất ánh kim); nhấn mạnh **hướng**: electron luôn đi VỀ PHÍA oxy, không bao giờ ngược lại; lặp ba lần với ba đối tác khác nhau, cùng một động tác
CUT    cắt sang S24

## S24 · C25 · CHƯƠNG 2
SCENE   Ngọn lửa và miếng táo để quên đang làm cùng một việc, chỉ khác tốc độ — lửa chỉ là quá trình đó chạy đủ nhanh để phát sáng
CAMERA  split đôi ngang: trên là ngọn lửa, dưới là miếng táo; camera tĩnh; rồi trượt một thanh "tốc độ" nối hai bên
ELEMENT thanh trục tốc độ nằm ngang nối hai cảnh, có con trượt chạy từ đầu "chậm" (táo) sang đầu "nhanh" (lửa); khi con trượt chạy, miếng táo **tăng tốc hoá nâu** cho tới khi bốc cháy, và ngọn lửa **giảm tốc** cho tới khi chỉ còn là vệt sẫm màu — hai cảnh hoán đổi vai trò; lửa emissive 1.6 (được phép qua bloom, đây là nguồn sáng thật), nhưng **diện tích lửa ≤8% khung**
CUT    cắt sang S25 — về lại biển

## S25 · C26–C27 · CHƯƠNG 2
SCENE   Những sinh vật trong biển dưới chân tôi — tiến hoá suốt hơn một tỉ năm trong thế giới hoàn toàn không có chất đó; enzyme của chúng có sắt và lưu huỳnh phơi ra ngoài
CAMERA  dolly-in từ cảnh biển vào một tế bào vi khuẩn kỵ khí, xuyên màng, vào không gian bào tương; 35mm → 85mm
ELEMENT tế bào vi khuẩn kỵ khí không có oxy: bào tương đặc protein, các enzyme dạng khối gấp nếp lam xám `(0.30,0.45,0.70)`; **mỗi enzyme có một cụm Fe-S nằm PHƠI RA ở bề mặt hoặc rãnh nông** — thấy rõ, không bị chôn sâu; cụm Fe-S phát sáng cam-vàng nhẹ trên nền protein lạnh; nhấn mạnh bằng cách highlight tuần tự vài chục cụm khắp tế bào — đây là điểm yếu trải khắp, không phải một chỗ
CUT    cắt macro sâu hơn sang S26 — cao trào phân tử

## S26 · C27–C28 · CHƯƠNG 2
SCENE   **[CAO TRÀO HÌNH]** Cận cảnh một cụm sắt-lưu huỳnh trong enzyme, phơi ra và không được che — vì trong thế giới không oxy thì chẳng có gì để phải che
CAMERA  push-in macro tới khi cụm Fe-S chiếm 1/3 khung, xoay quanh nó 120° cho thấy hình học khối; 100mm macro, DOF cực nông
ELEMENT **cụm [4Fe-4S] đúng hình khối cubane**: 4 nguyên tử Fe và 4 nguyên tử S xen kẽ ở 8 đỉnh của một khối lập phương méo, mỗi Fe còn nối ra ngoài bằng cầu cysteine-S tới khung protein; Fe màu FE-S `(1.00,0.48,0.08)`, S màu vàng `(1.00,0.86,0.10)`; cụm **rung nhẹ và có luồng electron chạy qua liên tục** — nó đang làm việc, đang chạy tốt; khung protein ribbon mờ bao quanh nhưng CÓ RÃNH HỞ dẫn thẳng tới cụm — cánh cửa để oxy đi vào
CUT    giữ khung — oxy đi vào từ rãnh, sang S27

## S27 · C28 · CHƯƠNG 2
SCENE   **[CAO TRÀO HÌNH]** Oxy len vào tế bào, tìm thấy cụm sắt lưu huỳnh, và nó GIẬT
CAMERA  giữ nguyên khung S26 tuyệt đối — không đổi góc, để cú giật là thứ duy nhất chuyển động; 100mm macro
ELEMENT một phân tử O₂ trôi vào theo rãnh protein, tiếp cận cụm cubane chậm rãi; khoảnh khắc tiếp xúc: **một electron bị giật khỏi Fe theo đường thẳng dứt khoát**, Fe đó lập tức đổi từ FE-S cam sáng sang nâu xỉn `(0.42,0.22,0.08)`; cụm cubane **mất đối xứng** — một đỉnh sập, khối méo hẳn; O₂ biến thành superoxide O₂⁻ mang điện tích âm, màu tím nhạt; luồng electron đang chạy qua cụm **đứt gãy** giữa chừng, tia sáng tắt phụt
SFX    tiếng "rắc" kim loại ngắn, khô
CUT    cắt sang S28

## S28 · C29 · CHƯƠNG 2
SCENE   Enzyme gãy — một cỗ máy phân tử chạy hoàn hảo suốt một tỉ năm bỗng không chạy nữa, vì thế giới bên ngoài vừa đổi luật
CAMERA  pull-back từ cụm hỏng ra toàn bộ enzyme, rồi ra toàn tế bào; 100mm → 35mm
ELEMENT cụm Fe-S vỡ, nguyên tử Fe rời ra trôi tự do; **toàn bộ khung protein bung gấp nếp** — cấu trúc bậc ba sụp, ribbon duỗi thành sợi rối; pull-back cho thấy **hàng loạt enzyme khác trong tế bào cũng đang sụp theo cùng kiểu**, lần lượt, như dây chuyền tắt đèn; nhấn: enzyme không bị đập vỡ từ bên ngoài, chúng tự rã ra vì mất lõi kim loại
CUT    cắt sang S29

## S29 · C30 · CHƯƠNG 2
SCENE   Sắt bị giật ra không nằm yên — nó trôi, gặp oxy dở dang, biến chúng thành gốc hydroxyl phá bất cứ thứ gì trong tầm với
CAMERA  theo chân một nguyên tử Fe tự do trôi trong bào tương, handheld nhẹ (nhưng là hàm thuần của t, không random), 85mm
ELEMENT nguyên tử Fe²⁺ tự do trôi, va vào một phân tử H₂O₂ → **phản ứng Fenton**: sinh ra **gốc hydroxyl •OH** màu HYDROXYL `(0.72,0.20,1.00)` với một chấm electron độc thân nhấp nháy; gốc •OH có **bán kính phá huỷ cực ngắn** — nó phản ứng với vật đầu tiên chạm phải, trong vòng vài đường kính phân tử; ba mục tiêu lần lượt bị đánh: **màng tế bào** (lớp lipid kép thủng một lỗ, đuôi lipid xoăn lại), **protein** (một chuỗi bị cắt đứt), **chuỗi ADN** (một bậc thang gãy, xoắn kép hở ra); mỗi lần đánh, gốc •OH tự tiêu và Fe được tái sinh — vòng lặp không dừng
CUT    cắt sang S30

## S30 · C31 · CHƯƠNG 2
SCENE   Không có thuốc giải, không có tường chắn, không có nơi nào để trốn — đại dương đang từ từ chứa một chất mà cơ thể chưa từng gặp
CAMERA  pull-back rất chậm từ một tế bào ra hàng nghìn tế bào, rồi ra cả vùng nước; 85mm → 24mm; dừng hẳn ở 2s im lặng
ELEMENT hàng nghìn tế bào vi khuẩn kỵ khí rải trong nước, **lần lượt tắt sáng** theo một mặt sóng lan từ phía có thảm vi khuẩn lam ra xa — không phải chết đồng loạt mà chết theo gradient nồng độ oxy; các tế bào cố bơi về vùng tối (xa nguồn oxy) nhưng vùng đó co hẹp dần; overlay bản đồ nồng độ O₂ mờ lam lan như vết mực trong nước, phủ dần toàn khung; kết: gần như không còn vùng tối nào
CUT    cắt đen ngắn sang S31

## S31 · C32 · CHƯƠNG 2
SCENE   Nhịp dừng — "tôi muốn dừng lại ở một chi tiết, vì nó đổi hẳn cách tôi nhìn chuyện này"
CAMERA  tĩnh hoàn toàn, khung gần như trống; 50mm
ELEMENT màn hình gần đen, chỉ một vùng sáng mờ ở tâm với vài tế bào đang chết trôi chậm; mọi chuyển động chậm lại còn 1/4 tốc độ; đây là shot thở, chuẩn bị cho cao trào luận điểm — cố tình ÍT thông tin hình để câu nói tiếp theo có chỗ đứng
CUT    cắt sang S32 — cao trào luận điểm của cả tập

## S32 · C33 · CHƯƠNG 2
SCENE   **[CAO TRÀO LUẬN ĐIỂM]** Cuộc tuyệt chủng KHÔNG CÓ THỦ PHẠM BÊN NGOÀI — ba nghi phạm quen thuộc lần lượt bị loại
CAMERA  tĩnh, ba ô hiện lần lượt rồi bị gạch bỏ; camera KHÔNG di chuyển — sự phủ định phải sạch sẽ, dứt khoát
ELEMENT ba ô hình hiện ra rồi **tối đi và bị gạch chéo** lần lượt: (1) **thiên thạch** — một khối đá lao tới, nhưng nó **dừng giữa không trung rồi tan biến**, không có va chạm; (2) **siêu núi lửa** — cột tro bốc lên rồi **thụt ngược xuống**, tắt; (3) **tia bức xạ vũ trụ** — chùm tia chiếu xuống rồi **rút ngược lên**, biến mất; sau cả ba, khung còn lại TRỐNG — bầu trời cam và biển yên, không có gì đang tấn công; **đây là điểm: khung trống chính là câu trả lời**; ⚠ ba ô này là hình bị PHỦ ĐỊNH, vẽ chúng mờ, xám hoá, viền đứt nét — không được làm chúng hấp dẫn hơn phần còn lại
CUT    giữ khung trống sang S33

## S33 · C34 · CHƯƠNG 2
SCENE   **[CAO TRÀO LUẬN ĐIỂM]** Thủ phạm là sự sống — vòng lặp bốn bước đóng kín vào chính nó
CAMERA  tĩnh, sơ đồ vòng dựng dần từng bước, rồi camera dolly-in nhẹ khi vòng khép lại; 50mm
ELEMENT **sơ đồ vòng tròn bốn nút**, dựng theo nhịp câu: (1) *sự sống* — biểu tượng sợi vi khuẩn lam xanh; (2) *làm ra chất thải* — mũi tên ra, bong bóng O₂ lam; (3) *chất thải tích lại* — bong bóng dồn thành đám dày; (4) *giết chính cái nền sinh ra nó* — mũi tên **quay ngược về nút 1**, và nút 1 sẫm màu đi khi mũi tên chạm vào; vòng khép kín **không có mũi tên nào đi vào từ bên ngoài vòng** — đây là chi tiết phải đọc được bằng mắt; nét sơ đồ dày 4px, emissive 0.6 (dưới bloom); nền là biển cam mờ sau DOF
CUT    cắt sang S34

## S34 · C35 · CHƯƠNG 2
SCENE   **[CAO TRÀO LUẬN ĐIỂM]** Tự nhiên không tự điều chỉnh về chỗ đúng — một sinh vật giỏi hơn mọi đối thủ, nhân lên, lan ra, không dừng lại
CAMERA  timelapse từ trên cao nhìn xuống đáy biển, camera dâng dần lên cao để chứa được vùng lan rộng; 35mm → 18mm
ELEMENT **tăng trưởng hàm mũ trực quan**: thảm vi khuẩn lam lan từ một điểm ra kín đáy biển, rìa lan tiến đều; song song, các mảng vi khuẩn kỵ khí cũ (sẫm màu) bị đẩy lùi và co lại thành những ốc đảo nhỏ dần; **không có cơ chế phanh nào xuất hiện** — không có kẻ ăn thịt vi khuẩn lam, không có bệnh dịch, không có giới hạn tài nguyên nào chặn lại; đường cong tăng trưởng vẽ mờ chồng lên ở góc, dốc lên không có điểm bão hoà, emissive 0.5
CUT    cắt sang S35

## S35 · C36 · CHƯƠNG 2
SCENE   **[CAO TRÀO LUẬN ĐIỂM]** Vi khuẩn lam không ác, nó thậm chí không biết mình đang làm gì — nó chỉ giỏi
CAMERA  push-in chậm trở lại một sợi vi khuẩn lam đơn lẻ, kết ở cận cảnh; 85mm macro
ELEMENT một sợi vi khuẩn lam duy nhất, trôi lững lờ, các tế bào chia đôi theo nhịp đều đặn vô tư; **không có bất kỳ dấu hiệu hung hãn nào** — không màu đỏ, không gai, không chuyển động tấn công; ánh sáng ấm, mềm, gần như dịu dàng; bong bóng O₂ vẫn thoát ra đều đặn từ bề mặt nó, hiền lành; **tương phản hình với nội dung là toàn bộ điểm của shot này** — sự tàn phá không có gương mặt
CUT    cắt đen 2s (gap) sang S36

## S36 · C37 · CHƯƠNG 2
SCENE   Câu hỏi lạ: oxy thải suốt hàng trăm triệu năm, vậy mà khí quyển vẫn trống trơn — oxy đi đâu mất?
CAMERA  tilt-up từ mặt nước lên bầu trời cam (vẫn nấc 1, chưa nhạt chút nào), giữ ở trời; 35mm
ELEMENT bầu trời SKY-1 `(1.00,0.42,0.10)` **vẫn nguyên độ đục như S04** — đối chiếu trực tiếp; overlay đồ thị nhỏ ở góc: trục thời gian chạy hàng trăm triệu năm, đường O₂ khí quyển **nằm bẹp sát trục hoành, không nhúc nhích**; dấu hỏi ngầm bằng khoảng cách giữa hai thứ: bong bóng thoát lên liên tục từ dưới, mà đường đồ thị không lên
SFX    tiếng nước đổi chất — sâu hơn, có tiếng hạt lắng
CUT    cắt xuống nước sang S37

## S37 · C38–C39 · CHƯƠNG 2
SCENE   Nó bị nuốt, và kẻ nuốt nó ở ngay trong nước quanh tôi — múc một vốc nước biển lên, màu lục nhạt, vị tanh kim loại
CAMERA  góc nhìn thứ nhất nhìn xuống hai bàn tay khum múc nước, 50mm macro, DOF nông trên mặt nước trong lòng bàn tay
ELEMENT nước trong lòng bàn tay: màu lục nhạt đục, **ánh cam từ bầu trời phản chiếu trên mặt nước**, có những vệt óng ánh kim loại rất mảnh khi nghiêng tay (váng sắt); vài hạt lơ lửng li ti; nước rỉ qua kẽ tay nhỏ giọt xuống; khi camera đẩy sâu vào mặt nước, các ion Fe²⁺ hiện thành chấm lục xám mờ phân tán đều khắp — **dày đặc, khắp mọi nơi**
CUT    push-in vào trong nước sang S38

## S38 · C40 · CHƯƠNG 2
SCENE   Đại dương thời này chứa sắt hoà tan, rất nhiều — núi lửa đáy biển phun ra suốt hàng tỉ năm và không có gì làm nó kết tủa
CAMERA  dolly ngang dài dọc theo đáy biển, đi qua một miệng phun thuỷ nhiệt, rồi tiếp tục ra vùng nước mở; 35mm
ELEMENT miệng phun thuỷ nhiệt đáy biển: cột nước nóng giàu Fe²⁺ phun lên, khúc xạ méo do chênh nhiệt độ, **luồng phun uốn cong theo dòng chảy đáy** chứ không thẳng đứng; các ion Fe²⁺ tan ra và **khuếch tán đều vào nước, KHÔNG lắng xuống** — điểm mấu chốt: trong thế giới không oxy, sắt tan như muối; mật độ chấm Fe²⁺ tăng dần theo suốt cú dolly cho thấy quy mô tích luỹ; ánh sáng xuống đáy yếu, xanh xám
CUT    cắt sang S39

## S39 · C41 · CHƯƠNG 2
SCENE   "Cho tới khi oxy xuất hiện." — một câu ngắn, một hình ngắn, một điểm lật
CAMERA  tĩnh tuyệt đối; 85mm
ELEMENT khung nước đầy chấm Fe²⁺ lục xám; **một bong bóng O₂ lam đơn độc trôi vào từ mép khung**; mọi thứ khác đứng im; bong bóng dừng ở tâm khung — chưa có gì xảy ra, chỉ là sự có mặt; ánh lam của nó làm các chấm Fe quanh đó sáng lên rất nhẹ
CUT    cắt sang S40 — phản ứng bùng ra

## S40 · C42 · CHƯƠNG 2
SCENE   Mỗi phân tử oxy chưa kịp nổi lên đã bị một nguyên tử sắt tóm lấy — sắt gỉ ngay trong lòng biển, và sắt gỉ thì không tan
CAMERA  giữ khung S39 rồi cắt nhanh sang ba cận cảnh phản ứng liên tiếp, kết ở trung cảnh cột nước; 85mm → 50mm
ELEMENT khoảnh khắc Fe²⁺ + O₂: ion Fe²⁺ lục xám **lao vào** phân tử O₂, electron chuyển sang oxy, Fe²⁺ → Fe³⁺ và **lập tức đổi màu sang RUST `(1.00,0.26,0.05)`**; hạt Fe³⁺ mới **kết tụ với nhau thành hạt lớn hơn** (không tan nữa) và **bắt đầu chìm** — chuyển từ khuếch tán Brown sang rơi có hướng; nhấn ba đặc tính theo đúng lời: gỉ → không tan → nặng → chìm; các bong bóng O₂ đang nổi lên **bị chặn giữa đường, không chiếc nào chạm mặt nước**
CUT    pull-back sang S41

## S41 · C43 · CHƯƠNG 2
SCENE   Nhìn xuống chân, nước đục dần — không phải bùn khuấy lên mà là tuyết đỏ nâu: hạt gỉ mới hình thành rơi qua cột nước
CAMERA  góc nhìn thứ nhất nhìn xuống chân mình trong nước, rồi tilt-up chậm nhìn ngang qua cột nước; 35mm
ELEMENT **trận tuyết sắt**: hàng chục nghìn hạt gỉ RUST `(1.00,0.26,0.05)` rơi chậm qua cột nước, tốc độ rơi theo luật Stokes (hạt to rơi nhanh hơn), quỹ đạo lắc nhẹ; mật độ dày nhất ở tầng giữa nơi O₂ gặp Fe²⁺; ánh sáng cam từ trên xuyên qua màn hạt tạo vệt thể tích; độ trong của nước giảm thấy rõ trong suốt shot; hạt đọng trên chân, trên tay người quan sát
SFX    tiếng hạt lắng, rì rào rất khẽ
CUT    tilt-down theo hạt rơi xuống đáy sang S42

## S42 · C44 · CHƯƠNG 2
SCENE   Đại dương là một cái thùng rác khổng lồ — hàng trăm triệu năm nuốt gọn mọi thứ oxy mà sự sống ném vào
CAMERA  pull-back cực rộng: từ cột nước ra toàn bộ mặt cắt đại dương từ mặt tới đáy; 24mm; timelapse
ELEMENT **mặt cắt đại dương nhìn ngang**: tầng mặt có thảm vi khuẩn lam thải O₂ lam; tầng giữa là vùng phản ứng, O₂ lam biến thành hạt gỉ đỏ; tầng đáy là lớp trầm tích đỏ dày lên thấy rõ theo timelapse; **không một bong bóng O₂ nào lọt qua mặt nước lên trời** — mọi mũi tên lam đều bị chặn và đổi màu thành đỏ trước khi tới mặt; overlay đồ thị O₂ khí quyển ở góc vẫn nằm bẹp; bộ đếm hàng trăm triệu năm chạy
CUT    cắt sang S43

## S43 · C45 · CHƯƠNG 2
SCENE   Câu kết chương: "Nhưng thùng rác nào cũng có đáy."
CAMERA  tĩnh, cận cảnh lớp trầm tích đáy biển đang dày lên; 85mm; rồi dừng hẳn
ELEMENT lớp trầm tích đỏ dày lên chậm dần rồi **ngưng lại**; các hạt gỉ cuối cùng rơi xuống và không còn hạt mới nào rơi tiếp; trong nước phía trên, mật độ chấm Fe²⁺ lục xám **thưa hẳn đi, gần như hết**; một bong bóng O₂ lam trôi qua khung mà **không bị gì tóm lấy** — lần đầu tiên; nó tiếp tục nổi lên và ra khỏi khung trên
CUT    cắt đen 2.5s (gap) sang CHƯƠNG 3

---

# CHƯƠNG 3 — KHI CÁI THÙNG ĐẦY

## S44 · C46 · CHƯƠNG 3
SCENE   Mở chương: bước lên bờ, mặt đất dưới chân đổi màu — từ nước sang đá khô
CAMERA  góc nhìn thứ nhất bước lên bờ, camera đung đưa theo bước chân (hàm sin thuần của t), tilt-down nhìn mặt đất rồi tilt-up ra trước mặt; 35mm
ELEMENT chuyển tiếp nước → cạn: nước rút khỏi khung, để lộ đá ướt rồi đá khô; **mặt đất là đá trơ hoàn toàn** — không cỏ, không rêu, không đất hữu cơ, chỉ sỏi và bùn khô nứt nẻ; màu đất chuyển từ xám ướt sang đỏ nâu khô; bầu trời vẫn SKY-1 cam đục; gió khô cuốn bụi mịn ngang mặt đất
SFX    tiếng nước rút thay bằng gió khô trên đá
CUT    tilt-up hết sang S45 — vách đá hiện ra

## S45 · C47 · CHƯƠNG 3
SCENE   **[CAO TRÀO HÌNH]** Vách đá cao bằng toà nhà mười tầng cắt ngang cả thung lũng — và nó có sọc
CAMERA  tilt-up chậm từ chân vách lên đỉnh, rồi pull-back để chứa trọn chiều ngang thung lũng; 24mm góc rộng; giữ một người quan sát nhỏ ở chân khung làm thước tỉ lệ
ELEMENT **vách dải sắt phân lớp (BIF) cao ~30m** cắt ngang thung lũng, kéo dài ngoài tầm mắt hai bên; nhìn từ xa các sọc hoà thành vệt, gần hơn mới tách ra; bóng người quan sát ở chân vách **cao bằng ~1/20 vách** — thước tỉ lệ bắt buộc, không có nó khán giả không đọc được kích thước; ánh sáng cam nghiêng làm nổi bật kết cấu ngang; vách hơi nghiêng do kiến tạo (~8°), không dựng đứng hoàn hảo
CUT    dolly-in vào mặt vách sang S46

## S46 · C48 · CHƯƠNG 3
SCENE   **[CAO TRÀO HÌNH]** Từ dưới lên: một lớp đỏ sẫm, một lớp xám ánh kim, lặp lại hàng nghìn lần, mỏng như trang giấy
CAMERA  dolly-in tới sát mặt vách rồi **tilt-up dọc theo các lớp, chạy liên tục từ chân lên đỉnh không cắt** — cú máy chữ ký của chương; 50mm
ELEMENT **BIF cận cảnh**: lớp đỏ sẫm `(0.85,0.18,0.06)` là hematit/jaspilit, xen lớp xám ánh kim `(0.62,0.64,0.68)` là chert/magnetit có ánh kim loại phản quang; ⚠ **QUY ƯỚC BẮT BUỘC**: các lớp **KHÔNG đều tăm tắp** — độ dày biến thiên 0.5–8mm theo nhiễu 1D có tương quan (mùa mạnh yếu khác nhau), thỉnh thoảng có lớp dày bất thường, có chỗ lớp bị nêm mỏng dần rồi mất hẳn; vài đứt gãy nhỏ cắt ngang làm lệch mạch lớp; bề mặt đá có chỗ phong hoá nâu, chỗ tươi màu; **ánh kim của lớp xám chỉ loé lên theo góc camera** (anisotropic), không sáng đều
CUT    cắt sang S47

## S47 · C49 · CHƯƠNG 3
SCENE   Đặt tay lên mặt đá — lạnh, nhẵn, các đường sọc chạy qua dưới lòng bàn tay như vân gỗ của một cái cây quá lớn để hiểu nổi
CAMERA  cận cảnh bàn tay áp lên vách, 85mm macro, DOF nông; camera trượt ngang chậm theo tay lướt trên đá
ELEMENT bàn tay trần áp lên mặt đá, các sọc BIF chạy dưới và quanh ngón tay; **tỉ lệ đọc được ngay**: mỗi sọc mảnh hơn móng tay, nghĩa là khoảng giữa hai ngón tay chứa hàng chục năm; bề mặt đá có vi kết cấu — hạt khoáng, vết nứt tóc, bụi; hơi lạnh toả ra làm ẩm nhẹ quanh tay (rất tinh tế); so sánh hình thầm lặng với vân gỗ: nhịp lớp không đều giống hệt vòng năm của cây
CUT    cắt sang S48

## S48 · C50 · CHƯƠNG 3
SCENE   Mỗi cặp sọc là một chu kỳ: một mùa vi khuẩn lam nở rộ thải oxy, sắt kết tủa rơi xuống; rồi một mùa lặng, chỉ bùn silic lắng
CAMERA  split đôi: trái là mặt cắt vách BIF tĩnh, phải là cảnh biển cổ đại tương ứng; con trỏ chạy trên vách đồng bộ với cảnh biển
CAMERA  (tiếp) con trỏ trượt lên dọc vách, mỗi cặp lớp kích hoạt một chu kỳ ở khung phải
ELEMENT **khung phải chạy hai pha luân phiên**: pha A *mùa nở rộ* — thảm vi khuẩn lam sáng lên, bong bóng O₂ dày, hạt gỉ đỏ rơi xuống, lớp đỏ dày thêm ở khung trái; pha B *mùa lặng* — thảm mờ đi, O₂ ngưng, Fe²⁺ mới trôi tới tích lại, chỉ bùn silic xám lục `(0.45,0.52,0.42)` lắng, lớp xám dày thêm; hai pha lặp lại 5–6 lần, **thời lượng mỗi pha hơi khác nhau** (đúng với lớp không đều); mũi tên nối cặp lớp trên vách với pha tương ứng
CUT    cắt về vách sang S49

## S49 · C51 · CHƯƠNG 3
SCENE   **[CAO TRÀO HÌNH]** Tôi đang chạm vào một cuốn lịch — mỗi vạch là một nhịp thở của cả một hành tinh, và cuốn lịch này dày hàng trăm mét
CAMERA  pull-back rất dài và liên tục: từ macro sọc trên lòng bàn tay ra toàn vách, rồi lên cao nhìn cả vùng, kết ở góc nhìn cao; 100mm → 18mm
ELEMENT khi kéo ra, các sọc dồn lại dày đặc rồi hoà thành khối, nhưng **thanh đếm năm ở góc chạy lên theo**: mỗi cặp sọc +1 năm, kéo ra tới toàn vách thì bộ đếm vọt lên hàng trăm nghìn rồi hàng triệu năm; ẩn dụ cuốn lịch dựng bằng hình: vách BIF được **lật nghiêng như những trang sách xếp cạnh nhau** trong một khoảnh khắc ngắn rồi trở lại đá (chỉ 0.6s, đủ gợi, không quá minh hoạ); lớp BIF trải ra tới chân trời
CUT    cắt sang S50

## S50 · C52 · CHƯƠNG 3
SCENE   Nhịp dừng nặng nề: "và giờ là phần khiến tôi lặng người"
CAMERA  tĩnh, trung cảnh vách đá, không chuyển động; 50mm
ELEMENT vách BIF tĩnh dưới ánh sáng cam nghiêng, bóng đổ dài; **không có animation nào ngoài hạt bụi rất mịn trôi trong luồng sáng**; đây là shot thở trước cú nối 2 tỉ năm; tông màu trầm xuống một nấc bằng cách giảm exposure ~0.3 stop
CUT    cắt sang S51

## S51 · C53 · CHƯƠNG 3
SCENE   **[CAO TRÀO HÌNH]** Những vách đá sọc này có tên: dải sắt phân lớp — Tây Úc, Brazil, Nam Phi, vùng Hồ Lớn Bắc Mỹ
CAMERA  cắt nhanh qua bốn địa điểm, mỗi nơi một trung cảnh vách BIF ~1.2s, rồi pull-back ra bản đồ thế giới; 35mm
ELEMENT bốn vách BIF ở bốn nơi, **mỗi nơi một sắc thái khác nhau** (Hamersley Tây Úc đỏ tươi khô cằn; Carajás Brazil ngả tím trong rừng ẩm; Transvaal Nam Phi xám đỏ; Mesabi vùng Hồ Lớn nâu đỏ nhạt) — cùng một sự kiện, bốn dấu vết; kết ở **bản đồ Trái Đất hiện đại** với bốn điểm sáng đỏ tại đúng toạ độ, nối bằng đường mảnh; ⚠ bản đồ là **Trái Đất HIỆN ĐẠI** (đây là câu nói về mỏ ngày nay), nét bờ biển emissive 0.55
CUT    cắt sang S52

## S52 · C54–C55 · CHƯƠNG 3
SCENE   **[CAO TRÀO HÌNH]** Con dao trong bếp, khung thép toà nhà, thân xe, đường ray, cây cầu, chiếc đinh — tất cả đến từ đây
CAMERA  chuỗi cắt nhanh sáu vật thể đời thường, mỗi vật ~0.9s, mỗi cú cắt **khớp hình dạng** (match-cut) với lớp BIF; kết ở pull-back về vách đá
ELEMENT sáu vật: dao bếp (ánh thép lướt), khung thép toà nhà nhìn từ dưới lên, thân xe, đường ray chạy về chân trời, dầm cầu, đinh đóng trên tường; **mỗi vật khi cắt đi thì bề mặt thép của nó "lột" ra thành sọc BIF đỏ-xám** trong 0.3s cuối — cầu nối hình trực tiếp giữa đồ vật và đá; ⚠ sáu vật này là thế giới HIỆN ĐẠI: ánh sáng trắng trung tính, KHÔNG nhuốm cam — tương phản cố ý với cảnh cổ đại; kết: tất cả hội tụ về vách BIF dưới trời cam
CUT    cắt sang S53

## S53 · C56 · CHƯƠNG 3
SCENE   **[CAO TRÀO LUẬN ĐIỂM]** Cả nền văn minh công nghiệp dựng trên xác của một cuộc khủng hoảng sinh thái mà không ai sống sót kể lại
CAMERA  tĩnh hoàn toàn suốt 3s im lặng, rồi pull-back cực chậm; 35mm
ELEMENT **hình chồng lớp**: bóng một đường chân trời thành phố công nghiệp hiện đại (nhà máy, cần cẩu, khung thép) hiện mờ **chồng đúng lên** hình dạng vách BIF — đỉnh các toà nhà khớp với đỉnh vách, các lớp sọc chạy xuyên qua thân các toà nhà; thành phố là bóng xám không màu, vách là đỏ-xám; **không có người trong hình thành phố** — "không ai sống sót kể lại"; giữ bất động 3s
CUT    cắt đen 2s (gap) sang S54

## S54 · C57 · CHƯƠNG 3
SCENE   Sắt trong đại dương không vô hạn — qua hàng trăm triệu năm, từng nguyên tử một, nó bị dùng hết
CAMERA  dolly ngang chậm qua cột nước biển, timelapse; 50mm
ELEMENT mật độ chấm Fe²⁺ trong nước **giảm dần theo hàm mũ** suốt shot, từ dày đặc xuống thưa thớt rồi gần như trống; song song, lớp trầm tích đỏ dưới đáy dày lên; overlay đồ thị nhỏ: đường "Fe hoà tan" dốc xuống, đường "O₂ khí quyển" vẫn nằm bẹp — hai đường chưa cắt nhau; nhịp hình dồn dần
CUT    cắt sang S55

## S55 · C58 · CHƯƠNG 3
SCENE   Một ngày, một phân tử oxy được thải ra và không có gì tóm lấy nó — nó nổi lên, chạm mặt nước, thoát vào không khí
CAMERA  theo sát một bong bóng O₂ duy nhất từ đáy lên, xuyên mặt nước, ra không khí — **một cú máy liên tục không cắt**; 85mm, camera đi lên cùng bong bóng
ELEMENT một bong bóng O₂ lam rời khỏi thảm, nổi lên qua cột nước **trống trơn** (không còn Fe²⁺ để chặn); khoảnh khắc **xuyên qua mặt nước từ dưới lên** — màng nước căng rồi vỡ, bong bóng bung ra thành khí, giọt nước bắn lên; rồi nó **bay lên trời cam** và tan vào khí quyển; đây là phân tử oxy tự do đầu tiên lên tới bầu trời — nhấn bằng cách cho mọi thứ khác đứng im
SFX    tiếng "pop" rất nhỏ khi bong bóng vỡ ở mặt nước
CUT    cắt sang S56

## S56 · C59 · CHƯƠNG 3
SCENE   Rồi một phân tử nữa, rồi một nghìn, rồi hàng tỉ tỉ — cái thùng rác đã đầy, oxy bắt đầu chất lên trời
CAMERA  pull-back tăng tốc từ một bong bóng ra cả mặt biển, rồi vọt lên cao nhìn xuống đại dương; 85mm → 18mm; nhịp dồn
ELEMENT số bong bóng xuyên mặt nước tăng theo hàm mũ: 1 → chục → nghìn → kín cả mặt biển thành một lớp sương lam bốc lên; **overlay đồ thị O₂ khí quyển bắt đầu DỰNG ĐỨNG** — đường nằm bẹp suốt hai chương giờ vọt lên, đây là khoảnh khắc trả nợ hình ảnh cho S36 và S42; ⚠ bắt đầu **chuyển màu trời nấc 1 → nấc 2**: SKY-1 `(1.00,0.42,0.10)` bắt đầu nhạt dần
CUT    tilt-up lên trời sang S57

## S57 · C60 · CHƯƠNG 3
SCENE   Ngửa mặt lên nhìn: bầu trời cam đục đang nhạt đi — xem tua nhanh lớp khói metan loãng ra từng chút một
CAMERA  tilt-up lên trời rồi giữ, timelapse dài; 24mm góc rộng
ELEMENT **chuyển màu trời nấc 1 → nấc 2 diễn ra trọn vẹn trong shot này**: SKY-1 `(1.00,0.42,0.10)` → SKY-2 `(1.00,0.55,0.20)`, nội suy linear liên tục; đồng thời **tầm nhìn tăng** (Mie scattering giảm): chân trời từ nhoè thành rõ dần, đĩa Mặt Trời từ quầng mờ 8° co lại thành đĩa rõ hơn; hạt aerosol hydrocarbon thưa dần; bộ đếm thời gian góc khung chạy hàng chục triệu năm
CUT    cắt sang S58

## S58 · C61 · CHƯƠNG 3
SCENE   Oxy không chỉ chất lên trời — nó lên tới đó và bắt đầu ăn
CAMERA  dolly-in vào tầng khí quyển trên, kết ở cảnh phân tử; 35mm → 85mm
ELEMENT **phản ứng O₂ + CH₄ ở mức phân tử trong khí quyển**: phân tử metan CH₄ (một C với bốn H, **hình tứ diện đúng, góc 109.5°**) đang trôi; phân tử O₂ lam lao vào, giật; CH₄ bị bẻ, sản phẩm là CO₂ và H₂O; hàng loạt phản ứng như vậy lan ra như đám cháy chậm không có lửa; mỗi phản ứng làm một chấm cam metan tắt đi và một chấm trung tính hiện ra — **màn hình mất dần sắc cam theo từng phản ứng**
CUT    cắt sang S59

## S59 · C62 · CHƯƠNG 3
SCENE   Metan là khí nhà kính rất mạnh — suốt hơn một tỉ năm nó giữ ấm Trái Đất, vì Mặt Trời thời trẻ mờ hơn bây giờ chừng 20%
CAMERA  split đôi dọc: trái là sơ đồ hiệu ứng nhà kính, phải là so sánh Mặt Trời trẻ / Mặt Trời nay; 40mm
ELEMENT **trái**: tia hồng ngoại từ mặt đất bốc lên, bị các phân tử CH₄ **bắt và bật ngược xuống** — vẽ rõ đường đi tia, phân tử CH₄ rung lên khi hấp thụ; so sánh cạnh đó một phân tử CO₂ bắt được ít tia hơn nhiều trên cùng số lượng; **phải**: hai đĩa Mặt Trời cạnh nhau — *Mặt Trời trẻ* nhỏ hơn về độ sáng, **quầng sáng và cường độ chỉ bằng ~80%**, hơi ngả đỏ hơn; *Mặt Trời nay* sáng hơn rõ; thanh số "−20%" nối hai đĩa, emissive 0.55; ⚠ **cả hai đĩa Mặt Trời nhìn qua khí quyển, nền quanh là bầu trời SKY-2 chứ KHÔNG phải nền vũ trụ đen có sao**
CUT    cắt sang S60

## S60 · C63 · CHƯƠNG 3
SCENE   Hành tinh đang được sưởi bằng một cái chăn khí — và oxy vừa bắt đầu đốt thủng cái chăn đó
CAMERA  pull-back ra góc nhìn quỹ đạo thấp, Trái Đất chiếm ~75% khung; 35mm
ELEMENT **Trái Đất từ quỹ đạo thấp**, lớp khí quyển metan hiện thành **một lớp vỏ cam mờ bọc quanh hành tinh** — "cái chăn"; các mảng lục địa trần trụi màu xám đỏ, không thực vật, không băng cực; đại dương lục xám; **lớp vỏ cam bắt đầu thủng lỗ**: những mảng loang nhạt xuất hiện và lan ra trên lớp chăn, qua đó nhiệt thoát ra ngoài (vẽ bằng tia hồng ngoại thoát khỏi lỗ thủng); ⚠ **nền ngoài rìa hành tinh là ĐEN THUẦN, KHÔNG SAO**; Trái Đất quay đúng chiều **tây→đông (ngược kim đồng hồ nhìn từ cực Bắc)**, trục nghiêng ~23.4°
CUT    cắt đen ngắn 1.5s (gap) sang S61

## S61 · C64 · CHƯƠNG 3
SCENE   Gió đổi — cảm thấy trên mặt trước khi hiểu chuyện gì: lạnh của một thứ đang tới và sẽ không đi
CAMERA  về góc nhìn thứ nhất trên mặt đất, camera quay ngang chậm theo hướng gió tới; 35mm
ELEMENT gió mạnh lên thấy được: bụi cuốn ngang mặt đất đổi hướng đột ngột; **hơi thở người quan sát bắt đầu ngưng tụ thành hơi trắng** — dấu hiệu nhiệt độ rơi, chi tiết nhỏ nhất mà đọc được ngay; mặt nước đọng trên đá bắt đầu có váng băng mỏng ở rìa; trời SKY-2 `(1.00,0.55,0.20)` **bắt đầu ngả sang nấc 3**, sắc cam rút đi, ánh sáng lạnh dần
SFX    gió lạnh, cao, rít
CUT    cắt sang S62

## S62 · C65 · CHƯƠNG 3
SCENE   Nhiệt độ toàn cầu rơi, băng hình thành ở hai cực và lan xuống — băng trắng hắt nắng ngược lại, càng nhiều băng càng ít nhiệt
CAMERA  từ quỹ đạo thấp nhìn xuống bán cầu bắc, timelapse; Trái Đất chiếm ~80% khung; 35mm
ELEMENT **vòng phản hồi albedo dựng bằng hình**: mũ băng trắng hình thành ở cực và **lan xuống vĩ độ thấp dần theo từng nhịp**; mỗi lần diện tích băng tăng, các tia nắng chiếu vào **bị hắt ngược ra nhiều hơn** (vẽ bằng tia phản xạ tăng số lượng), và nhịp lan băng tiếp theo nhanh hơn — vòng lặp tự gia tốc phải đọc được; thanh nhiệt độ ở góc tụt xuống theo, emissive 0.5; ⚠ nền quanh hành tinh đen thuần không sao; ⚠ **chống cháy trắng**: băng ở giai đoạn này mới phủ vùng cực nên diện tích trắng còn nhỏ, nhưng đã phải giữ luminance băng ≤0.82
CUT    cắt sang S63

## S63 · C66 · CHƯƠNG 3
SCENE   "Cái vòng đó không có phanh." — một câu ngắn, hình cực gọn
CAMERA  tĩnh, cận cảnh sơ đồ vòng phản hồi; 85mm
ELEMENT sơ đồ vòng tròn hai nút *nhiều băng ⇄ ít nhiệt* quay liên tục, tăng tốc dần; **không có nút nào cắt vào vòng, không có mũi tên nào đi ra** — vòng kín, tự nuôi; nét sơ đồ dày 4px emissive 0.6; nền băng đang lan mờ phía sau
SFX    tiếng băng nứt, vang, sâu
CUT    cắt sang S64 — cao trào Huronian

## S64 · C67 · CHƯƠNG 3
SCENE   **[CAO TRÀO HÌNH]** Kỷ băng hà Huronian — Trái Đất trắng gần toàn cầu, băng lan tới tận vùng gần xích đạo, kéo dài ba trăm triệu năm
CAMERA  pull-back chậm từ quỹ đạo thấp ra quỹ đạo cao hơn, Trái Đất chiếm ~70% khung, xoay chậm một phần vòng; 35mm
ELEMENT **Trái Đất trắng gần toàn cầu**: băng phủ từ hai cực xuống tới vĩ độ thấp, chỉ chừa một dải hẹp quanh xích đạo màu xám lục đậm (nước biển hở hoặc băng mỏng) — **KHÔNG phủ trắng 100%**, dải hở này vừa đúng khoa học ("gần xích đạo") vừa là van cứu cho vấn đề cháy trắng; trời nấc 3 `(0.80,0.88,1.00)`; ⚠ **CHỐNG CHÁY TRẮNG — shot rủi ro cao nhất tập**: (a) băng KHÔNG dùng màu trắng thuần, dùng trắng ngả lam ICE `(0.70,0.82,1.00)` với luminance nền ~0.72; (b) phủ **kết cấu** dày đặc lên bề mặt băng — nứt, sống băng, bóng đổ xanh lam trong các rãnh (luminance rãnh ~0.35) để phá mảng phẳng; (c) chiếu sáng nghiêng ~55° tạo bóng dài, một phần hành tinh nằm trong vùng chạng vạng/đêm tối hẳn; (d) đo: **diện tích luminance >0.85 phải ≤12% khung** — đạt được nhờ (a)+(b)+(c); (e) không bật bloom trên bề mặt băng, emissive băng = 0
CUT    cắt xuống mặt đất sang S65

## S65 · C68 · CHƯƠNG 3
SCENE   **[CAO TRÀO HÌNH]** Đứng trên lớp băng đang dày lên, trên đúng cái vùng biển ấm nơi vừa nhặt mảnh thảm xanh lên tay
CAMERA  góc nhìn thứ nhất nhìn xuống chân trên băng, rồi tilt-up ra chân trời băng — **khớp chính xác góc máy và hướng nhìn của S01/S19** để phép đối chiếu đọc được
ELEMENT **cùng khung hình với S01 nhưng đã đóng băng**: những mỏm đá bazan của S02 giờ nhô lên khỏi mặt băng ở đúng vị trí cũ; dưới lớp băng trong, **thấy mờ mờ thảm vi khuẩn lam xanh bị đông cứng lại** — đúng chỗ mảnh thảm được thả xuống ở S19; băng dày lên thấy được, bọt khí bị bẫy trong băng thành cột; ánh sáng nấc 3 lạnh, bóng dài; ⚠ giữ luminance băng ≤0.80, dùng kết cấu nứt để phá mảng phẳng
SFX    tiếng băng nứt sâu dưới chân
CUT    cắt sang S66

## S66 · C69 · CHƯƠNG 3
SCENE   Chuỗi sự việc đọc lại như đếm: học tách nước → thải rác → rác giết sự sống → rác ăn hết sắt → rác đốt thủng chăn ấm → hành tinh đóng băng
CAMERA  tĩnh, năm ô hình nhỏ hiện ra lần lượt theo nhịp đếm, xếp thành một hàng ngang rồi chuỗi nối lại; 40mm
ELEMENT **năm ô thumbnail, mỗi ô trích đúng một shot đã chiếu** (gọi lại trí nhớ hình): (1) cụm Mn₄Ca bẻ nước — trích S15; (2) bong bóng O₂ trôi ra khỏi khung — trích S17; (3) tế bào tắt sáng hàng loạt — trích S30; (4) tuyết sắt đỏ rơi — trích S41; (5) lớp chăn cam thủng lỗ — trích S60; rồi ô thứ sáu hiện ra: **Trái Đất trắng** — trích S64; các ô nối bằng mũi tên một chiều, **không có nhánh rẽ nào** — tính tất yếu là nội dung; nét mũi tên dày 4px emissive 0.6
CUT    cắt sang S67

## S67 · C70 · CHƯƠNG 3
SCENE   **[CAO TRÀO LUẬN ĐIỂM]** "Sự sống suýt tự xoá sổ mình bằng chính thứ nó vứt đi."
CAMERA  tĩnh hoàn toàn suốt 3s im lặng; cận cảnh; 85mm
ELEMENT một bong bóng O₂ **bị đông cứng bên trong lớp băng trong suốt** — chính cái bong bóng của S20 và S39, giờ nằm bất động trong băng; ánh sáng lạnh xuyên qua băng làm nó phát lam nhạt; **không một chuyển động nào trong khung ngoài một vết nứt rất chậm bò qua băng**; đây là hình chốt chương: thủ phạm và nạn nhân bị giữ trong cùng một khối
CUT    giữ đen 2.5s (gap) sang S68

## S68 · C71 · CHƯƠNG 3
SCENE   Nó không xoá xong — núi lửa vẫn phun, CO₂ tích lại dưới lớp băng, hiệu ứng nhà kính quay lại phá tan lớp vỏ trắng; băng rút, nước chảy, biển mở ra lần nữa
CAMERA  từ quỹ đạo thấp nhìn xuống, timelapse dài; rồi dolly-in xuống một vùng băng đang tan; 35mm → 50mm
ELEMENT núi lửa xuyên qua lớp băng phun khí, các chấm CO₂ tích tụ trong khí quyển trắng và **đậm dần**; băng bắt đầu rút từ xích đạo về hai cực (ngược chiều S62); nước lộ ra màu lục xám rồi xanh dần; **đây là chỗ chuyển màu trời nấc 3 → nấc 4**: ICE `(0.80,0.88,1.00)` → SKY-4 `(0.06,0.38,1.00)`, nội suy linear liên tục, **không được ghé qua cam** — đi thẳng từ trắng lam sang xanh; băng tan thành dòng chảy trên bề mặt
SFX    băng tan, nước nhỏ giọt
CUT    cắt sang S69

## S69 · C72 · CHƯƠNG 3
SCENE   Và những gì bò ra khỏi thảm hoạ đó đã khác, rất khác
CAMERA  dolly-in chậm vào mặt nước mới mở, xuyên xuống dưới nước; 50mm
ELEMENT nước biển mới: trong hơn hẳn nước chương 1 (không còn Fe²⁺ đục, không còn hạt gỉ); ánh sáng xuyên sâu hơn nhiều, màu lam thay vì lục đục; vài sinh vật mờ ảo **kích thước lớn hơn hẳn vi khuẩn** lướt qua rìa khung, không rõ hình — gợi ý chứ không định danh; trời nấc 4 SKY-4 phản chiếu trên mặt nước; tương phản trực tiếp với S03/S07
CUT    cắt đen 2s (gap) sang CHƯƠNG 4

---

# CHƯƠNG 4 — MÓN QUÀ MANG HÌNH CHẤT ĐỘC

## S70 · C73 · CHƯƠNG 4
SCENE   Mở chương ấm hẳn lại: "có một điều tôi chưa nói, và nó là lý do tôi và bạn đang tồn tại"
CAMERA  fade-in chậm, cận cảnh một phân tử O₂ — nhưng lần này trong ánh sáng ấm; tĩnh; 85mm
ELEMENT chính phân tử O₂ của S21, cùng góc, cùng kích thước — **nhưng ánh sáng đổi hoàn toàn**: từ lạnh và đen sang ấm, có nguồn sáng vàng nhẹ từ sau; quầng nhiễu động quanh nó vẫn còn (nó vẫn độc, không được xoá đặc tính đó) nhưng giờ đọc như năng lượng chứ không phải đe doạ; nền là nước biển xanh nấc 4 mờ, có hạt sáng trôi
SFX    ambient ấm, nước nhỏ giọt đều
CUT    cắt sang S71

## S71 · C74 · CHƯƠNG 4
SCENE   Chính cái đặc tính khiến nó là chất độc cũng khiến nó là thứ tốt nhất để lấy năng lượng — cùng một cú giật, hai cách đọc
CAMERA  split đôi dọc, hai bên chạy CÙNG một animation; camera tĩnh; 50mm
ELEMENT **hai khung cùng một hành động, khác nhãn**: khung trái là cảnh S27 chiếu lại (O₂ giật electron khỏi cụm Fe-S, enzyme gãy) nhãn *chất độc*; khung phải là cùng cú giật ấy nhưng electron đi vào một chuỗi vận chuyển và **thắp sáng một loạt bơm proton** nhãn *năng lượng*; hai bên đồng bộ từng khung hình — **cùng một cơ chế vật lý**; ⚠ khung trái là hồi tưởng có chủ đích, được phép dùng lại tông lạnh của chương 2, nhưng **màu trời/khí quyển không xuất hiện trong shot này** nên không vi phạm luật cấm nhảy ngược trục màu
CUT    cắt sang S72

## S72 · C75 · CHƯƠNG 4
SCENE   Trước Đại Oxy hoá, sự sống lấy năng lượng bằng lên men: bẻ một phân tử đường, được HAI đơn vị, rồi vứt phần còn lại
CAMERA  tĩnh, sơ đồ chính diện; 50mm
ELEMENT một phân tử glucose (vòng sáu cạnh, đúng hình ghế) đi vào tế bào kỵ khí; nó bị bẻ làm đôi; **chỉ HAI đơn vị năng lượng bật ra** — vẽ thành hai viên ATP vàng nhỏ, đếm rõ ràng "1, 2" rồi dừng; **phần lớn phân tử còn nguyên vẹn bị tống ra ngoài** dưới dạng ethanol/lactate — vẽ khối thải to gấp nhiều lần phần thu được; tương phản diện tích giữa "thu" và "vứt" là điểm của shot
CUT    cắt sang S73

## S73 · C76–C77 · CHƯƠNG 4
SCENE   **[CAO TRÀO HÌNH]** Một tế bào biết dùng oxy bẻ cùng phân tử đường đó, đốt tới tận cùng, thu về khoảng ba mươi đơn vị — gấp mười lăm lần
CAMERA  giữ đúng bố cục S72 để so sánh trực tiếp, rồi pull-back cho đủ chỗ chứa 30 viên ATP; 50mm → 35mm
ELEMENT **so sánh 2 vs ~30 dựng bằng diện tích, không bằng chữ**: cùng một phân tử glucose, cùng vị trí; lần này nó bị bẻ **tới tận cùng** thành CO₂ và H₂O; các viên ATP vàng bật ra **liên tiếp và đếm lên tới ~30**, xếp thành lưới lấp gần đầy khung — trong khi hai viên của S72 vẫn hiện mờ ở góc làm mốc so sánh; ⚠ **ATP emissive 0.7 (dưới ngưỡng bloom 1.0)**, muốn rõ thì tăng kích thước và độ dày viền, không tăng emissive — 30 vật thể sáng là rủi ro cháy trắng; khối thải giờ chỉ còn CO₂/H₂O rất nhỏ
CUT    cắt sang S74

## S74 · C78–C79 · CHƯƠNG 4
SCENE   Một tế bào chỉ có hai đơn vị thì không nuôi nổi bộ máy phức tạp — không xây được cơ, không xây được thần kinh; cái giá của phức tạp là năng lượng
CAMERA  pull-back từ ATP ra một "bảng giá" các cấu trúc sinh học, camera trượt lên dọc bảng; 40mm
ELEMENT **bảng giá năng lượng dựng theo chiều dọc**: dưới cùng và rẻ nhất là tế bào đơn giản (chi phí thấp, hai viên ATP đủ mua); lên cao dần: màng phức tạp, bộ khung tế bào, **mô cơ**, **tế bào thần kinh có sợi trục dài** — mỗi nấc đắt hơn nấc dưới nhiều lần; **ngưỡng "2 đơn vị" vẽ thành một vạch ngang rất thấp** — mọi thứ phía trên vạch đó đều không mua nổi; các cấu trúc phía trên vạch hiện dạng bóng mờ, chưa tồn tại; thanh thời gian bên cạnh: "hơn một tỉ năm" không có gì vượt vạch
CUT    cắt sang S75

## S75 · C80 · CHƯƠNG 4
SCENE   Một số vi khuẩn không chết: chúng học cách xử lý chất độc, rồi học cách dùng nó, rồi giỏi tới mức đó thành nghề
CAMERA  push-in vào một tế bào vi khuẩn sống sót giữa đám tế bào đang chết; 50mm → 85mm
ELEMENT giữa cảnh tế bào chết la liệt, **một tế bào vẫn sáng**; bên trong nó ba giai đoạn hiện lần lượt: (1) *chịu đựng* — một enzyme mới (superoxide dismutase) bắt lấy các gốc oxy độc và vô hiệu hoá chúng; (2) *dùng được* — một chuỗi vận chuyển electron hình thành trên màng, oxy trở thành điểm nhận electron cuối cùng; (3) *thành nghề* — chuỗi đó nhân lên dày đặc khắp màng, tế bào sáng rực lên vì năng lượng dư; các tế bào chết xung quanh mờ dần ra hậu cảnh
CUT    cắt sang S76

## S76 · C81 · CHƯƠNG 4
SCENE   **[CAO TRÀO HÌNH]** Một tế bào lớn hơn nuốt một con vi khuẩn đó vào bụng — vì lý do nào đó nó không tiêu hoá con mồi, nó giữ lại
CAMERA  trung cảnh hai tế bào, dolly-in theo khoảnh khắc nuốt, kết ở cận cảnh con vi khuẩn bên trong; 50mm → 85mm
ELEMENT **quá trình thực bào đúng trình tự**: tế bào lớn (có nhân — đây là sinh vật nhân thực sơ khai, khác hẳn vi khuẩn lam ở S11) tiếp cận con vi khuẩn hiếu khí nhỏ; màng tế bào lớn **lõm vào tạo chén, bao quanh, rồi khép kín** thành túi bên trong; thông thường túi này sẽ hợp với lysosome và tiêu hoá — vẽ một lysosome **tiến tới rồi DỪNG LẠI và quay đi**; con vi khuẩn bên trong **vẫn nguyên vẹn, vẫn sáng, vẫn đốt oxy**; rồi các viên ATP vàng bắt đầu **chảy từ con vi khuẩn ra bào tương của chủ nhà**
CUT    cắt sang S77

## S77 · C82 · CHƯƠNG 4
SCENE   Cuộc thương lượng đó chưa bao giờ kết thúc — nó vẫn đang diễn ra ngay lúc này, trong bạn
CAMERA  pull-back cực dài và liên tục: từ con vi khuẩn bên trong tế bào cổ đại ra tới một bàn tay người hiện đại; 85mm → 35mm
ELEMENT **cú nối 2 tỉ năm bằng một cú kéo không cắt**: vi khuẩn trong tế bào → tế bào → mô → một mạch máu → dưới da → **bàn tay người trong ánh sáng phòng hiện đại**; ⚠ ánh sáng chuyển liên tục từ tông nước cổ đại sang **ánh sáng trong nhà trung tính (5000K)** — đây là lúc tập rời hẳn quá khứ; không cắt để khán giả không kịp đặt câu hỏi về bước nhảy
CUT    push-in ngược lại vào da tay sang S78

## S78 · C83 · CHƯƠNG 4
SCENE   **[CAO TRÀO HÌNH]** Mỗi tế bào trong cơ thể bạn chứa hàng trăm tới hàng nghìn ty thể — có màng riêng, có bộ gen riêng, tự nhân đôi theo lịch riêng
CAMERA  push-in từ da tay vào một tế bào người, xuyên màng, dolly chậm giữa đám ty thể; 50mm → 100mm macro
ELEMENT **ty thể đúng cấu trúc (quy ước bắt buộc)**: hình bầu dục dài ~1µm, **MÀNG KÉP** — màng ngoài trơn, **màng trong GẤP NẾP thành cristae** xếp dày như những phiến răng lược đâm vào lòng bào quan; trên cristae là các phức hợp chuỗi hô hấp và các "núm" ATP synthase; **bên trong có một vòng ADN riêng dạng vòng tròn** (không phải nhiễm sắc thể thẳng như trong nhân) — chi tiết này phải thấy rõ, đó là bằng chứng của cả luận điểm; vài chục ty thể trong khung, một con **đang thắt eo tự phân đôi**; màu MITO `(1.00,0.35,0.30)` với cristae vàng cam `(1.00,0.62,0.18)`; nhân tế bào ở hậu cảnh mờ, ADN trong đó vẽ khác hẳn — tương phản có chủ đích
CUT    cắt sang S79

## S79 · C84 · CHƯƠNG 4
SCENE   **[CAO TRÀO LUẬN ĐIỂM]** Chúng là hậu duệ của những con vi khuẩn từng bị nuốt hai tỉ năm trước — bạn đang chở theo một dòng dõi khác bên trong mình
CAMERA  tĩnh, split-screen so sánh trực tiếp; 85mm macro cả hai bên
ELEMENT **so sánh cạnh nhau**: trái là **con vi khuẩn hiếu khí cổ đại** của S76, phải là **ty thể trong tế bào người** của S78 — cùng tỉ lệ, cùng góc; **các đặc điểm trùng khớp được nối bằng đường mảnh**: màng kép ↔ màng kép, ADN vòng ↔ ADN vòng, tự phân đôi bằng thắt eo ↔ tự phân đôi bằng thắt eo, chuỗi hô hấp trên màng trong ↔ chuỗi hô hấp trên cristae; **hai hình từ từ chồng lên nhau và khớp gần như hoàn toàn**; nét nối emissive 0.55 dày 3px; nền hai bên khác nhau (nước cổ đại / bào tương người) để không lẫn
CUT    cắt đen 2s (gap) sang S80

## S80 · C85 · CHƯƠNG 4
SCENE   Tôi quay về — không còn băng, không còn trời cam, không còn biển nông ấm; đang ngồi ở nơi có ghế, có tường, có người khác thở cùng phòng
CAMERA  fade-in, trung cảnh tĩnh một căn phòng bình thường nhìn từ góc người ngồi; 35mm
ELEMENT **một căn phòng hiện đại rất đỗi bình thường**: ghế, tường, cửa sổ có ánh sáng ban ngày, vài người khác ngồi ở xa, hơi mờ, không rõ mặt; ánh sáng trung tính 5000K; **tương phản triệt để với toàn bộ 79 shot trước** — không có gì kỳ vĩ, không có gì ở thang phân tử hay hành tinh; qua cửa sổ thấy trời SKY-4 xanh và một tán lá; chuyển động duy nhất: hạt bụi trôi trong vệt nắng và lồng ngực những người kia phập phồng rất khẽ
CUT    cắt sang S81

## S81 · C86 · CHƯƠNG 4
SCENE   "Và tôi hít vào." — một câu, một hình, rồi 2s lặng
CAMERA  cận cảnh lồng ngực/vai người quan sát từ góc nhìn thứ nhất nhìn xuống, hoặc bóng phản chiếu trên cửa sổ; tĩnh; 85mm
ELEMENT chuyển động hít vào duy nhất trong khung: lồng ngực nâng lên chậm, đều; **luồng khí vào được vẽ rất mờ** thành dòng hạt lam nhạt OXY chảy vào — vừa đủ thấy, không thành đồ hoạ; giữ bất động 2s sau khi lồng ngực nâng hết; ánh sáng ấm nhẹ
CUT    cắt sang S82

## S82 · C87 · CHƯƠNG 4
SCENE   Cái vừa kéo vào ngực không phải không khí trong lành — nó là chất thải của những sinh vật đã chết hai tỉ năm trước
CAMERA  theo dòng hạt lam đi vào phổi, rồi **pull-back xuyên thời gian** về lại thảm vi khuẩn lam cổ đại; 85mm → 50mm
ELEMENT dòng hạt O₂ lam đi vào phế nang, qua màng, vào máu; rồi **cú nối ngược thời gian**: chính những hạt lam đó truy ngược ra khỏi phòng, qua cửa sổ, và **hoá thành đúng những bong bóng thoát khỏi thảm vi khuẩn lam ở S09/S10** — cùng hình dạng, cùng màu; ⚠ hồi tưởng này **được phép hiện lại thảm xanh và nước cổ đại, nhưng KHÔNG hiện bầu trời cam** — trục màu khí quyển không nhảy ngược; kết bằng cận cảnh sợi vi khuẩn lam đã chết, hoá thạch, bất động
CUT    cắt sang S83

## S83 · C88 · CHƯƠNG 4
SCENE   Chất thải đó từng là vũ khí giết người hàng loạt lớn nhất hành tinh từng chứng kiến — xoá sổ sự sống, rút cạn đại dương sắt, đóng băng cả thế giới
CAMERA  ba cắt nhanh gọi lại ba cao trào, mỗi cảnh ~1.2s, nhịp dồn; rồi dừng
ELEMENT **ba hình trích lại, cường độ cao**: (1) tế bào tắt sáng hàng loạt — trích S30; (2) tuyết sắt đỏ rơi kín cột nước — trích S41; (3) Trái Đất trắng Huronian — trích S64; ⚠ ba hình này chiếu dưới **ánh sáng lạnh, độ tương phản cao hơn bản gốc**, và cảnh Trái Đất trắng giữ nguyên các biện pháp chống cháy trắng của S64 (luminance ≤0.82, kết cấu nứt, chiếu sáng nghiêng, dải xích đạo hở); không có sao ở nền
CUT    cắt sang S84 — đảo chiều

## S84 · C89 · CHƯƠNG 4
SCENE   **[CAO TRÀO LUẬN ĐIỂM]** "Và nó cũng là thứ duy nhất đủ mạnh để trả giá cho một bộ não."
CAMERA  cắt thẳng từ Trái Đất trắng sang cận cảnh một nơ-ron; dolly-in chậm; 85mm
ELEMENT **một nơ-ron người**: thân tế bào với các sợi nhánh toả ra, sợi trục dài có bao myelin; **dày đặc ty thể chạy dọc sợi trục và tụ ở các synapse** — nhấn rõ, vì đó là mối nối của cả tập: bộ não là cấu trúc tốn năng lượng nhất, và năng lượng đó đến từ oxy; một xung điện chạy dọc sợi trục, tới synapse thì các bọc dẫn truyền phóng ra; ánh sáng ấm; ⚠ xung điện emissive 0.8 (dưới ngưỡng), độ rõ đến từ độ dày nét
CUT    pull-back sang S85

## S85 · C90 · CHƯƠNG 4
SCENE   Thảm hoạ và bước tiến đôi khi là cùng một sự kiện, chỉ khác chỗ bạn đứng trên trục thời gian mà nhìn
CAMERA  tĩnh, camera chính diện một trục thời gian nằm ngang; 40mm
ELEMENT **một trục thời gian duy nhất** chạy ngang khung, mốc "2,4 tỉ năm trước" ở giữa với **một sự kiện duy nhất** đánh dấu tại đó; hai người quan sát nhỏ đứng ở hai vị trí khác nhau trên trục, **cùng nhìn về một điểm ấy**, và **hai đường ngắm được tô hai màu khác nhau**: một đỏ (thảm hoạ), một lam (bước tiến); nhấn rằng **sự kiện không đổi, chỉ vị trí người nhìn đổi** — không có hai sự kiện; nét trục dày 4px emissive 0.55
CUT    cắt sang S86

## S86 · C91 · CHƯƠNG 4
SCENE   Đứng ở 2,4 tỉ năm trước thì đó là tận thế; đứng ở đây hôm nay với hai lá phổi đang làm việc thì đó là điều tốt nhất từng xảy ra
CAMERA  split đôi dọc: trái là góc nhìn từ quá khứ, phải là góc nhìn từ hiện tại; tĩnh rồi khung phải nở rộng dần chiếm ưu thế; 40mm
ELEMENT **trái**: biển cổ đại với tế bào chết trôi, ánh sáng lạnh, không có trời trong khung (giữ luật trục màu); **phải**: căn phòng của S80 với những người đang thở, ánh sáng ấm, tán lá xanh ngoài cửa sổ; khung phải nở rộng chậm, đẩy khung trái hẹp lại nhưng **không xoá hẳn** — quá khứ không biến mất, nó chỉ nhỏ đi
CUT    cắt sang S87

## S87 · C92 · CHƯƠNG 4
SCENE   Không ai chọn được, không có ai ngồi cân nhắc — chỉ có một sinh vật nhỏ xíu làm việc của nó quá giỏi, và một hành tinh phải sống với hậu quả
CAMERA  push-in rất chậm vào một sợi vi khuẩn lam đơn lẻ (gọi lại S35), kết ở cận cảnh; 85mm macro
ELEMENT sợi vi khuẩn lam trôi lững lờ, chia tế bào đều đặn, vô tư — **dựng lại gần như đúng S35 nhưng dưới ánh sáng ấm của chương 4**; không có gì hung hãn, không có gì toan tính; vài bong bóng O₂ thoát ra hiền lành; hậu cảnh là Trái Đất mờ rất xa — **nhìn từ trong khí quyển nhìn ra, không phải từ vũ trụ**
CUT    cắt sang S88

## S88 · C93 · CHƯƠNG 4
SCENE   Vi khuẩn lam vẫn còn đó — vẫn nở rộ trong các hồ nước ấm mỗi mùa hè, thành những vệt xanh lục ta lấy que gạt đi và gọi là tảo bẩn
CAMERA  cắt sang cảnh hiện đại: mặt hồ mùa hè, camera hạ thấp gần mặt nước, dolly ngang chậm; 50mm
ELEMENT **hồ nước hiện đại**: bờ có cỏ, có cây, ánh nắng trắng vàng bình thường, trời SKY-4 xanh; trên mặt nước là **váng tảo lam xanh lục** CYANO `(0.04,0.85,0.62)` loang thành vệt xoáy theo dòng; một chiếc que khuấy qua gạt váng sang bên, để lại vệt nước trong rồi váng khép lại; ⚠ tương phản cố ý: đây chính là sinh vật đã làm nên bầu khí quyển, giờ bị coi là thứ bẩn cần gạt đi
CUT    cắt sang S89

## S89 · C94 · CHƯƠNG 4
SCENE   **[CAO TRÀO HÌNH]** Những mảnh của chúng, bị nuốt vào rồi ở lại, đang nằm trong từng chiếc lá xanh ngoài cửa sổ bạn — vẫn tách nước, vẫn thải oxy
CAMERA  từ mặt hồ tilt-up sang một tán lá, rồi push-in macro xuyên qua bề mặt lá vào tế bào, vào lục lạp, kết ở cụm Mn₄Ca; 50mm → 100mm macro; **một cú xuyên tỉ lệ liên tục**
ELEMENT chuỗi tỉ lệ: lá xanh LEAF `(0.18,0.90,0.22)` ngược sáng, thấy gân lá → biểu bì → tế bào mô giậu → **lục lạp có màng kép và các chồng grana thylakoid xếp như chồng đĩa** → phiến thylakoid → **cụm Mn₄CaO₅ ĐÚNG hình "ghế méo" của S15, không sai một chi tiết** — đây là lời hứa hình ảnh được trả; cụm đang chạy chu trình, một phân tử O₂ bật ra và trôi lên; ⚠ lục lạp cũng có ADN vòng riêng, vẽ mờ ở góc — nó cũng là hậu duệ của một vật bị nuốt
CUT    cắt đen 2s (gap) sang S90

## S90 · C95 · CHƯƠNG 4
SCENE   Lần tới khi bạn thở sâu và cảm thấy cái nhẹ nhõm quen thuộc khi lồng ngực đầy lên — giữ lại một ý này trong khoảng ba giây
CAMERA  fade-in về căn phòng của S80, trung cảnh, tĩnh; nhịp chậm nhất tập; 35mm
ELEMENT căn phòng, ánh sáng ấm hơn S80 một chút (nắng đã xuống thấp); những người khác vẫn thở đều; **mọi chuyển động trong khung chậm lại còn ~0.6×**; hạt bụi trôi trong nắng; không có đồ hoạ, không có nhãn, không có sơ đồ — chương 4 từ đây trở đi gần như không còn hình khoa học nào
CUT    cắt sang S91

## S91 · C96 · CHƯƠNG 4
SCENE   "Thứ đang nuôi bạn từng là thứ đã giết gần hết họ hàng xa của bạn."
CAMERA  tĩnh, cận cảnh dòng hạt O₂ lam đi vào phổi — chính dòng hạt của S81; 85mm
ELEMENT dòng hạt O₂ lam chảy vào, hiền lành, đều đặn; **rồi trong 0.5s, cùng những hạt đó nhấp nháy sang màu HYDROXYL tím `(0.72,0.20,1.00)` của chương 2 rồi trở lại lam** — một cú chớp gợi nhớ độc tính, đủ ngắn để không phá tông ấm; không có gì khác đổi
CUT    cắt sang S92

## S92 · C97 · CHƯƠNG 4
SCENE   Không có gì trong hai tỉ năm qua làm nó bớt độc đi — nó vẫn gỉ sắt, vẫn đốt gỗ, vẫn làm hỏng tế bào của bạn từng chút một mỗi ngày
CAMERA  ba cắt nhanh gọi lại split-screen S22, nhưng cảnh thứ ba đổi; ~1.2s mỗi cảnh; 85mm macro
ELEMENT (1) đinh sắt gỉ — đúng cảnh S22; (2) mép gỗ cháy — đúng cảnh S22; (3) **thay miếng táo bằng một tế bào NGƯỜI**: một gốc oxy tự do va vào màng tế bào người và để lại một tổn thương nhỏ, rồi một enzyme sửa chữa tới vá lại — **quá trình vẫn đang diễn ra ngay lúc này, mỗi ngày**; nhấn rằng đây không phải chuyện quá khứ; ánh sáng ấm nhưng tương phản cao hơn
CUT    cắt sang S93

## S93 · C98 · CHƯƠNG 4
SCENE   **[CAO TRÀO LUẬN ĐIỂM]** "Cái thay đổi không phải là oxy. Cái thay đổi là bạn."
CAMERA  split đôi rồi hợp nhất: trái là phân tử O₂, phải là cơ thể người; camera tĩnh rồi dolly-in nhẹ khi hợp nhất; 50mm
ELEMENT **trái — phân tử O₂**: dựng lại ĐÚNG phân tử của S21 và S70, cùng góc, cùng kích thước, **hoàn toàn không đổi một chi tiết nào** — kể cả quầng nhiễu động và hai chấm electron độc thân; **phải — cơ thể người**: một chuỗi thích nghi hiện lần lượt, mỗi thứ là một lớp phòng thủ/khai thác tiến hoá ra SAU oxy: enzyme chống oxy hoá, ty thể với cristae, hemoglobin vận chuyển O₂, phế nang, hệ tuần hoàn; **bên trái đứng im suốt shot, bên phải xây dựng không ngừng** — toàn bộ luận điểm nằm ở sự bất đối xứng đó
CUT    cắt đen 2s (gap) sang S94

## S94 · C99 · CHƯƠNG 4
SCENE   **[KẾT — HƠI THỞ]** "Hít vào."
CAMERA  tĩnh tuyệt đối, cận cảnh lồng ngực nâng lên rất chậm; 85mm; không một chuyển động camera nào
ELEMENT chuyển động hít vào duy nhất, chậm hơn S81 rõ rệt, kéo dài gần trọn shot; dòng hạt O₂ lam mờ chảy vào; ánh sáng ấm, dịu, nguồn sáng duy nhất từ cửa sổ; **màn hình gần như tối, chỉ vùng ngực và luồng khí được chiếu sáng**; giữ 2s lặng sau đó
SFX    tiếng hít vào chậm, rõ
CUT    giữ khung sang S95

## S95 · C100 · CHƯƠNG 4
SCENE   **[KẾT — HƠI THỞ]** Thở ra: "Đó là hai tỉ năm đàm phán giữa sự sống và thứ nó từng ném đi."
CAMERA  giữ nguyên khung S94 tuyệt đối; 85mm
ELEMENT lồng ngực hạ xuống chậm; luồng khí thở ra được vẽ thành **dòng hạt CO₂ ấm** đi ra — màu ấm hơn luồng vào, khép lại vòng trao đổi; trong khoảnh khắc luồng khí ra, **những hình bóng rất mờ của cả tập lướt qua trong làn hơi** (thảm xanh, tuyết sắt đỏ, vách BIF, Trái Đất trắng, ty thể) — mỗi hình chưa tới 0.3s, mờ ở mức gần như tiềm thức, không được rõ thành trình chiếu lại; rồi làn hơi tan
SFX    tiếng thở ra
CUT    fade rất chậm sang S96

## S96 · C101 · CHƯƠNG 4
SCENE   **[KẾT]** "Và bạn vừa thắng thêm một hiệp nữa."
CAMERA  tĩnh, pull-back cực chậm và rất nhỏ (gần như không nhận ra) khỏi người đang ngồi; 50mm
ELEMENT căn phòng trong ánh sáng cuối ngày; người quan sát ngồi yên, thở đều; ngoài cửa sổ là tán lá xanh và trời SKY-4 `(0.06,0.38,1.00)` — **nấc cuối của trục màu, chốt lại hành trình cam → trắng → xanh**; một chiếc lá khẽ động; **không có đồ hoạ, không có chữ, không có gì để đọc** — chỉ một người thở trong một thế giới có oxy; fade to black rất chậm, kết bằng im lặng
CUT    hết

---

# GHI CHÚ DỰNG HÌNH

Quy ước dùng chung cho cả tập. Visual-builder phải tuân theo — mọi sai lệch cần lý do.

## 1. Bảng màu + kiểm `HFA.saturationAfterACES`

Tính bằng đúng công thức trong `assets/lib/hf-astro.js` (dòng 319–331):
`aces(v) = clamp01((v·(2.51v+0.03)) / (v·(2.43v+0.59)+0.14))`, `sat = (max−min)/max`.

**Ngưỡng:** `after < 0.30` là ra xám — loại. Quy tắc: kênh yếu ≤ 0.2× kênh mạnh; kênh mạnh
quanh 1.0; muốn sáng hơn thì **tăng emissive, đừng nâng kênh yếu**.

### Màu chủ đạo — ĐẠT

| Mã | Dùng ở | Linear RGB | Hex | before | **after** | Ghi chú |
|---|---|---|---|---|---|---|
| `SKY-1` cam metan dày | trục màu nấc 1, C01–C59 | `(1.00, 0.42, 0.10)` | `#FF6B1A` | 0.90 | **0.84** | ✅ đạt cao |
| `SKY-2` cam nhạt | trục màu nấc 2, C60–C63 | `(1.00, 0.55, 0.20)` | `#FF8C33` | 0.80 | **0.63** | ✅ đạt |
| `SKY-4` xanh hiện đại | trục màu nấc 4, C71–C101 | `(0.06, 0.38, 1.00)` | `#0F61FF` | 0.94 | **0.93** | ✅ đạt cao nhất |
| `CYANO` xanh lục ngả lam | thảm vi khuẩn lam | `(0.04, 0.85, 0.62)` | `#0ED99E` | 0.95 | **0.96** | ✅ đạt cao nhất |
| `RUST` gỉ đỏ nâu | tuyết sắt, hạt Fe³⁺ | `(1.00, 0.26, 0.05)` | `#FF420D` | 0.95 | **0.94** | ✅ đạt cao |
| `BIF-RED` lớp đỏ sẫm | dải sắt phân lớp | `(0.85, 0.18, 0.06)` | `#D92E0F` | 0.93 | **0.92** | ✅ đạt cao |
| `OXY` lam oxy | bong bóng, dòng O₂ | `(0.18, 0.62, 1.00)` | `#2E9EFF` | 0.82 | **0.67** | ✅ đạt |
| `FE-S-Fe` sắt trong cụm | cụm [4Fe-4S] | `(1.00, 0.48, 0.08)` | `#FF7A14` | 0.92 | **0.94** | ✅ đạt cao |
| `FE-S-S` lưu huỳnh vàng | cụm [4Fe-4S] | `(1.00, 0.86, 0.10)` | `#FFDB1A` | 0.90 | **0.84** | ✅ đạt cao |
| `HYDROXYL` tím gốc tự do | gốc •OH | `(0.72, 0.20, 1.00)` | `#B833FF` | 0.80 | **0.63** | ✅ đạt |
| `MITO` ty thể | ty thể, màng ngoài | `(1.00, 0.35, 0.30)` | `#FF594D` | 0.70 | **0.45** | ✅ đạt (sát hơn, xem cảnh báo) |
| `MITO-CRIST` cristae | màng trong gấp nếp | `(1.00, 0.62, 0.18)` | `#FF9E2E` | 0.82 | **0.68** | ✅ đạt |
| `LEAF` lá xanh | S16, S89 | `(0.18, 0.90, 0.22)` | `#2EE63B` | 0.80 | **0.66** | ✅ đạt |
| `SULFIDE` H₂S vàng lục | S13 nguồn electron cũ | `(0.80, 1.00, 0.25)` | `#CCFF40` | 0.75 | **0.54** | ✅ đạt |
| `MANGAN` cụm Mn tím | S15, S89 cụm Mn₄Ca | `(0.75, 0.30, 1.00)` | `#BF4DFF` | 0.70 | **0.45** | ✅ đạt |

### Màu trung tính — CỐ Ý thấp, KHÔNG phải lỗi

Bốn màu dưới đây có `after` thấp **vì chúng phải là trung tính** (đá xám ánh kim, băng trắng,
bầu trời trắng toàn cầu). Không được "sửa" chúng bằng cách tăng bão hoà.

| Mã | Dùng ở | Linear RGB | **after** | Lý do |
|---|---|---|---|---|
| `SKY-3` trắng Huronian | trục màu nấc 3 | `(0.80, 0.88, 1.00)` | **0.06** | phải gần trắng — đó là nội dung |
| `ICE` băng trắng lam | S64, S65, S67 | `(0.70, 0.82, 1.00)` | **0.11** | băng là trung tính; sắc đến từ **bóng đổ trong rãnh**, không từ màu nền |
| `BIF-GREY` xám ánh kim | dải sắt phân lớp | `(0.62, 0.64, 0.68)` | **0.05** | ánh kim là **specular anisotropic**, không phải màu |
| `SEDIMENT` bùn silic | S48 pha mùa lặng | `(0.45, 0.52, 0.42)` | **0.11** | bùn phải xỉn để lớp đỏ nổi bật |

### ⚠ Cảnh báo riêng cho vùng cam / gỉ sắt / nâu đất

Tập này dùng rất nhiều cam-gỉ-nâu, là vùng dễ ra **xám bùn** sau ACES. Ba quy tắc bắt buộc:

1. **Không bao giờ nâng kênh lam của màu cam/gỉ để làm nó "sáng hơn".** `RUST (1.00,0.26,0.05)`
   cho `after`=0.94; nếu nâng lam lên 0.30 thành `(1.00,0.26,0.30)` thì `after` tụt còn **0.45**.
   Muốn sáng → tăng emissive hoặc tăng cường độ đèn, giữ nguyên tỉ lệ kênh.
2. **Nâu đất phải đến từ giảm độ sáng tổng, không từ trộn xám.** Đất khô ở S44 dùng
   `RUST × 0.45` (tức `(0.45,0.117,0.023)`) chứ không phải `(0.45,0.35,0.30)` — cái sau cho
   `after`≈0.21, ra bùn xám.
3. `MITO (1.00,0.35,0.30)` cho `after`=0.45, đạt nhưng sát nhất bảng. **Không được nâng kênh
   lục/lam thêm nữa.** Nếu ty thể trông chưa đủ nổi trong S78, dùng `MITO-CRIST (1.00,0.62,0.18)`
   cho cristae để tạo tương phản hai tông trong cùng bào quan, đừng đụng vào màu màng ngoài.

### Màu đã bị loại ở các tập trước — CẤM dùng lại

`(0.55,0.72,1.00)`=.20 · `(0.42,0.60,1.05)`=.31 · `(1.00,0.72,0.38)`=.35

⚠ Màu thứ ba `(1.00,0.72,0.38)` nằm **đúng trong vùng cam của tập này** — rất dễ vô tình tái
tạo khi chỉnh bầu trời hoặc ánh nắng. Mọi màu cam mới phải kiểm lại trước khi dùng.

## 2. Bloom HDR — ngưỡng 1.0

| Loại đối tượng | emissive | Ghi chú |
|---|---|---|
| **Chữ, nhãn, số, sơ đồ, mũi tên, trục đồ thị** | **0.50 – 0.60** | ⚠ **BẮT BUỘC DƯỚI 1.0.** Muốn rõ hơn → **tăng độ dày nét** (3–4px) và tăng tương phản với nền, KHÔNG tăng emissive |
| Viên ATP (S72–S74) | 0.70 | ~30 vật sáng cùng lúc — rủi ro cháy; tăng kích thước thay vì độ sáng |
| Xung thần kinh (S84) | 0.80 | độ rõ từ độ dày sợi trục |
| Bong bóng O₂, dòng hạt oxy | 0.60 – 0.75 | |
| Cụm Mn₄Ca lúc tích điện (S15) | 0.90 | đỉnh của nấc S₄, chỉ trong khoảnh khắc |
| Gốc hydroxyl •OH (S29) | 1.20 | **được phép qua bloom** — nó phải chói và bất an; nhưng ≤2% diện tích khung |
| Ngọn lửa (S24) | 1.60 | **được phép** — nguồn sáng thật; nhưng diện tích lửa ≤8% khung |
| Bề mặt băng (S64, S65, S67) | **0.00** | ⚠ **TUYỆT ĐỐI không bloom trên băng** — xem mục 3 |
| Đĩa Mặt Trời qua khí quyển (S04, S57, S59) | 1.30 | bị tán xạ làm mềm, diện tích nhỏ |

## 3. Chống cháy trắng — không shot nào quá 12% diện tích khung có luminance > 0.85

**Shot rủi ro cao nhất tập: S64 (Trái Đất trắng Huronian).** Cũng áp dụng cho S65, S67 và
bản trích lại trong S83. Năm biện pháp bắt buộc, dùng ĐỒNG THỜI:

1. **Băng không dùng trắng thuần.** Dùng `ICE (0.70,0.82,1.00)`, luminance nền ~0.72 — đã dưới
   ngưỡng 0.85 ngay từ màu gốc. Cấm `(1.0,1.0,1.0)`.
2. **Phủ kết cấu dày đặc**: khe nứt, sống băng, gờ áp lực, bóng đổ xanh lam trong rãnh
   (luminance rãnh ~0.35). Mảng băng phẳng lớn là thứ gây cháy trắng, không phải màu sáng.
3. **Chiếu sáng nghiêng ~55°** tạo bóng dài; giữ một phần hành tinh trong vùng chạng vạng và
   một phần trong đêm tối hẳn — luôn có vùng tối trong khung.
4. **Chừa dải xích đạo hở** màu xám lục đậm. Vừa đúng khoa học (băng lan "tới tận vùng gần
   xích đạo", không phải phủ kín), vừa cắt mảng trắng làm đôi.
5. **emissive băng = 0, không bloom.** Băng phản xạ ánh sáng, nó không tự phát sáng.

Với các shot khác: kiểm bất kỳ shot nào có Mặt Trời, lửa, hoặc >20 vật thể phát sáng cùng lúc
(đặc biệt **S73** với ~30 viên ATP và **S24** với ngọn lửa).

## 4. Quy ước khoa học bắt buộc

- **Dải sắt phân lớp (BIF)** — sọc do **biến thiên mùa**, KHÔNG đều tăm tắp. Độ dày lớp biến
  thiên 0.5–8mm theo nhiễu 1D có tương quan; thỉnh thoảng có lớp dày bất thường; có chỗ lớp
  nêm mỏng dần rồi mất hẳn; vài đứt gãy nhỏ làm lệch mạch lớp. Ánh kim của lớp xám là
  **specular anisotropic loé theo góc nhìn**, không sáng đều. (S45–S49, S51–S53)
- **Thảm vi khuẩn lam** — có **cấu trúc phân tầng** bắt buộc, bốn tầng theo mức ánh sáng/oxy:
  vi khuẩn lam xanh trên cùng → vi khuẩn lưu huỳnh tía → vi khuẩn khử sunfat đen → bùn xám.
  Không bao giờ vẽ thành một khối xanh đồng nhất. (S09, S19)
- **Ty thể** — **màng kép**, màng trong **gấp nếp thành cristae** dày như phiến răng lược, có
  **ADN vòng riêng** (không phải nhiễm sắc thể thẳng), phân đôi bằng **thắt eo**. (S78, S79, S84)
- **Vi khuẩn lam là sinh vật nhân sơ** — **KHÔNG có nhân tế bào**. Có thylakoid đồng tâm áp
  màng và carboxysome. Dạng sợi, các tế bào hình trụ nối đuôi có vách ngăn. (S11, S35, S87)
- **Cụm Mn₄CaO₅** — hình **"ghế méo"**: 3 Mn + 1 Ca tạo cubane, Mn thứ tư treo ngoài qua cầu
  oxy. Chu trình 4 nấc S₀→S₄, mỗi nấc một photon, O₂ bật ra ở nấc cuối. Hình học ở S89 phải
  **khớp chính xác** S15 — đó là lời hứa hình ảnh của tập. (S15, S16, S89)
- **Cụm [4Fe-4S]** — khối **cubane** méo, 4 Fe và 4 S xen kẽ ở 8 đỉnh, mỗi Fe nối ra khung
  protein bằng cầu cysteine-S. Khi bị oxy giật thì **mất đối xứng, một đỉnh sập**. (S26, S27)
- **Phân tử**: H₂O góc **104.5°**; CH₄ tứ diện **109.5°**; O₂ liên kết đôi, trạng thái triplet
  với hai electron độc thân. Giữ đúng tỉ lệ độ dài liên kết.
- **Trái Đất từ quỹ đạo** — quay **tây→đông** (ngược kim đồng hồ nhìn từ cực Bắc), trục nghiêng
  **~23.4°**. Thời kỳ này lục địa **trần trụi hoàn toàn**: không thực vật, không đất hữu cơ,
  màu xám đỏ. (S60, S62, S64, S68)
- **Mặt Trời trẻ mờ hơn ~20%** — thể hiện bằng **cường độ và quầng sáng**, không phải bằng
  kích thước đĩa (đường kính biểu kiến gần như không đổi). (S59)
- **Trước Đại Oxy hoá không có sự sống trên cạn** — mọi mỏm đá, mọi bờ biển trong chương 1–3
  phải **trơ trụi tuyệt đối**: không rêu, không địa y, không một mảng xanh nào. (S02, S44, S45)

## 5. ⚠ CẤM — tập sinh học, không phải tập thiên văn

- **Không starfield, không thiên hà, không tinh vân, không sao nào khác, không deep space.**
  Chín tập trước đã dùng cạn motif đó và tập này không có chỗ cho nó.
- Trái Đất chỉ xuất hiện ở **7 shot**: S60, S62, S64, S68 (và trích lại ở S66, S83, gián tiếp
  S51). Luôn nhìn từ **quỹ đạo thấp**, hành tinh chiếm **≥70% khung**, **nền ngoài rìa là đen
  thuần không rải sao**.
- Đĩa Mặt Trời chỉ hiện **qua khí quyển từ mặt đất** (S04, S57, S59) — không bao giờ là một
  ngôi sao trên nền vũ trụ.

## 6. Trục màu khí quyển — luật cấm nhảy ngược

Nấc 1 cam đục → nấc 2 cam nhạt → nấc 3 trắng Huronian → nấc 4 xanh hiện đại. **Một khi đã sang
nấc sau, không shot nào được quay lại nấc trước.** Chuyển nấc là **nội suy linear liên tục**
(không phải sRGB, để tránh đi qua vùng xám bùn), trải qua nhiều shot:

- nấc 1→2 suốt **S56–S57** · nấc 2→3 suốt **S61–S64** · nấc 3→4 suốt **S68**

**Ba ngoại lệ hồi tưởng được phép** (S71, S82, S86): các shot này gọi lại hình cổ đại nhưng
**không được hiện bầu trời/khí quyển trong khung** — chỉ cảnh dưới nước, cảnh phân tử, hoặc
cảnh tế bào. Trục màu vì thế không bị vi phạm.

## 7. Motif lặp lại cần TRÁNH

- **Đừng lặp cú "pull-back ra vũ trụ"** — tập này không có vũ trụ. Cú kéo tỉ lệ ở S14, S49,
  S77, S89 phải đi theo **bốn hướng khác nhau** (ra đại dương, lên vách đá, xuyên thời gian
  vào cơ thể, vào trong chiếc lá), không được thành cùng một động tác lặp bốn lần.
- **Đừng để mọi shot phân tử trôi trên nền đen.** Chương 2 có nhiều cảnh phân tử liền nhau
  (S23, S26, S27, S29) — cho chúng nền khác nhau: bào tương đặc, màng lipid, nước biển đục.
- **Đừng lặp bong bóng bốc lên quá nhiều.** Motif này thuộc về chương 1–3; từ S70 trở đi
  chuyển sang **dòng hạt trong cơ thể**, không phải bong bóng trong nước.
- **Split-screen** đã dùng ở S22, S24, S48, S59, S71, S79, S86, S93 — **đủ rồi**, đừng thêm.

## 8. Ba cú máy chữ ký (đầu tư nhiều nhất)

1. **S46** — tilt-up liên tục dọc vách BIF từ chân lên đỉnh, không cắt.
2. **S55** — theo một bong bóng O₂ từ đáy biển, xuyên mặt nước, ra tới không khí, một cú liền.
3. **S89** — xuyên tỉ lệ liên tục từ tán lá vào tới cụm Mn₄Ca, trả lại lời hứa hình của S15.
