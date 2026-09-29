# STORYBOARD — 夜中に目が覚めるのはなぜか｜不安の山は五十代にある

## METADATA

- **Slug:** `toshi-to-fuan`
- **Tổng thời lượng dự kiến:** **819,89s ≈ 13:40** (dry-run `timing.json`, keita speed 0.95)
  + intro 2s + outro 5s → thành phẩm ≈ **826,9s ≈ 13:47**.
  ⚠ Con số này **chỉ để căn nhịp**. Thời lượng CHUẨN lấy từ `timing.json` sau khâu voice thật.
  **Mọi shot neo vào mã cue, không vào giây.** Timecode dưới đây là mốc dry-run, ghi để biết
  shot nào dài shot nào ngắn — không dùng để hardcode.
- **Số shot:** **34** (S01–S34). Trung bình ~24s/shot. Ngắn nhất ~14s (S22), dài nhất ~42s (S12).
- **Số cue:** 87 (C01–C87), **4 chương**. Nhãn chương ở C01 / C17 / C40 / C75.
- **Nhạc nền:** một track chung (`assets/bg-music/`, build ở khâu 3). Không ghi audio theo shot.
  Chỉ shot có dòng `SFX` mới cần hiệu ứng riêng — lấy từ [AUDIO DIRECTION] của kịch bản.
- **Phụ đề:** KHÔNG chép tay vào đây. Sinh từ `voice/*.srt` bằng `scripts/gen-captions.mjs`
  (**≤22 ký tự toàn角, 1 dòng**). Font **BIZ UDPGothic**, `await document.fonts.load()` trước
  khi vẽ nhãn canvas đầu tiên.
- **Intro/outro:** `scripts/apply-lead-tail.mjs` dịch toàn timeline hình **+2s**. Snapshot kiểm
  hình phải chụp ở **giây cảnh + 2**.

### Loại visual theo chương

| Chương | Cue | Mốc dry-run | Loại | Nội dung hình |
|---|---|---|---|---|
| **第1章 午前三時** | C01–C16 | 0 – 147,7s | *live-object* (phòng thật) | Trần phòng ngủ nhìn từ tư thế nằm, light shaft qua khe rèm, đồng hồ điện tử đỏ; chèn nội thất xe lúc chiều (C12–C14) |
| **第2章 山のかたち** | C17–C39 | 149,2 – 362,3s | *terrain* (cảnh chính) | **不安の地形** — mesh dải hẹp, cao độ = mức lo âu, trục tới = tuổi 18→87. Hai lớp mesh nam/nữ |
| **第3章 四十四組の食い違い** | C40–C74 | 363,8 – 716,0s | *live-object + terrain* | Nội thất xe lúc chiều (C40–C50); ba cột nước/ba mức 4,0·6,9·8,1 dựng trên địa hình (C43–C48); đoạn dốc xuống dài trong nắng (C57–C74) |
| **第4章 帰り道** | C75–C87 | 718,0 – 819,9s | *live-object* (đúng phòng 第1章) | Cùng trần, cùng góc, light shaft đã dịch và ấm lên. Kết tĩnh |

### Ba cao trào hình (đầu tư nhất)

1. **S12 · C21–C25** — địa hình lộ nguyên hình hai đỉnh khi sương tụt xuống. Lần đầu người xem
   thấy "đồ thị" là một **nơi chốn có thể đi qua**. Cú lật số 1.
2. **S14–S15 · C27–C30** — **HAI LỚP MESH tách nhau ở tuổi 50.** Ràng buộc giới tính của
   Russac 2007 kể **bằng hình**. Đây là điểm mạnh nhất của tập.
3. **S17 · C33–C35** — camera lên tới đỉnh, quay người, **thấy dốc xuống dài trong nắng**.
   Lời hứa của tiêu đề 「山」 được giao bằng một cú mở khung. Cú lật số 2.

### Khung nguồn thumbnail

**S02 (C02–C03)** dựng đúng concept bìa đã duyệt (cặp 1): trần nhà tối nhìn từ giường, một dải
sáng đèn đường cắt chéo, đồng hồ điện tử đỏ mờ góc dưới chỉ **3:00**. Không có người trong khung.
Render agent bắt frame ở khoảng giữa S02 làm nguồn cho `output/_assets/toshi-to-fuan/`.

---

### ⚠ RÀNG BUỘC YMYL — đọc trước khi dựng một shot nào

Tập này chạm chủ đề nhạy cảm nhất của cả kênh. Ràng buộc hình ảnh:

- ⛔ **Không hình nào gợi hành vi tự hại.** Không dây, không cửa sổ cao, không ban công, không
  vật sắc, không thuốc, không nước sâu dựng như lối đi. Không có ngoại lệ.
- ⛔ **Không tang lễ, không thi thể, không lò hoả táng, không 位牌, không 仏壇, không di ảnh,
  không giường bệnh có người, không đồng hồ cát, không bóng tối nhân hình.**
- ⛔ **Không biểu đồ cột, không bảng số, không mũi tên chỉ dẫn** — đó là ngôn ngữ kênh 1 (図解 2D).
  Con số xuất hiện **trong không gian 3D**, gắn vào địa hình, không bao giờ trên nền phẳng.
- ⛔ **Không dùng hình làm nỗi sợ nặng thêm.** Mọi cảnh đêm phải có **lối ra bằng ánh sáng**
  trong cùng khung — light shaft, một vệt xa, một đường chân trời. Không có shot nào đen tuyệt đối
  quá 2 giây.
- ⛔ **Không gương mặt người.** Cảnh xe: chỉ vai, bàn tay, kính, không thấy rõ mặt (cảnh là
  điển hình, không bịa người có thật).
- ✅ **Đường đi ánh sáng của cả tập = ĐI XUỐNG RỒI ẤM LÊN.** Không xoáy sâu:
  `第1章` lam lạnh 4.100K rất tối → `第2章` sương xám trung tính, sáng dần khi lên đỉnh →
  `第3章 đầu` chiều vàng nhạt trong xe → `第3章 cuối` nắng thấp góc trên dốc xuống, sáng nhất tập →
  `第4章` về lại phòng nhưng **ám ấm 3.200K**, trời chớm sáng.
- ✅ **C87 (câu 4c)** dựng **tĩnh và nhẹ**: không zoom, không chuyển động camera, không hiệu ứng.
  Một khung đứng yên rồi tối dần. Không kịch tính.
- ✅ **Phép thử cuối:** người 54 tuổi xem xong lúc 3 giờ sáng phải **ngủ lại được**. Shot nào làm
  người ta nằm nghĩ thêm thì bỏ, dù đẹp tới đâu.

### ⚠ Nhịp hình

Tệp 50-60+ xem trên TV. **Không cắt cảnh nhanh hơn 4 giây. Không rung máy ảo. Không zoom giật.**
Mỗi shot có ít nhất một thay đổi nhìn thấy được mỗi **6–8 giây**, ghi rõ ở dòng `ELEMENT`.
Chuyển động camera là **hàm thuần của `t`**, ease chậm (không `+=dt`, không `Math.random`).

---

# 第1章 — 午前三時 (C01–C16) · 8 shot · dry-run 0 – 147,7s

Chương này có **một quy ước cứng**: camera ở **đúng vị trí mắt người đang nằm ngửa** — cao 0,45m
so với sàn, ngẩng lên trần, ống kính rộng 28mm. Không bao giờ rời vị trí đó, trừ shot xe (S06–S07).
Toàn chương **một nguồn sáng duy nhất**: đèn đường ngoài cửa sổ. Không bật đèn trần, không đèn ngủ.

## S01 · C01–C02 · live-object ⭐ THẺ CHƯƠNG 1
SCENE   Đen gần hoàn toàn. Mắt người xem quen dần: trần nhà hiện ra như một mặt phẳng xám rất tối.
        Ở rìa dưới-phải khung, chữ số đỏ mờ của đồng hồ điện tử bàn đầu giường: **3:00**
CAMERA  tĩnh tuyệt đối 28mm, cao 0,45m, ngẩng 62° lên trần; fade-in từ đen 3s.
        Trần chiếm ~70% khung, mép tường trên đầu ở rìa dưới khung
ELEMENT 0s đen, chỉ nhiễu phim rất nhẹ (seeded, hàm của t) · 3s trần lộ dần: mặt 石膏ボード mịn,
        gờ 廻り縁 gỗ sẫm chạy quanh rìa · 8s **đồng hồ LED đỏ (1.0, 0.12, 0.08) hiện ở 1/3 dưới-phải**,
        cường độ 0,22 — đọc được nhưng không chói; bảy đoạn số dựng đúng kiểu 7-segment, dấu hai chấm
        **KHÔNG nhấp nháy** ⚠ giờ là hàm thuần của `t`, tuyệt đối không `Date.now` · 14s một vệt sáng
        rất mờ bắt đầu hé ở mép trên khung — chưa rõ hình, báo trước light shaft
        ⚠ LỐI RA BẰNG ÁNH SÁNG: khung này không được đen tuyệt đối quá 2s — nhiễu + LED giữ nền
        Nhãn chương 「第1章 午前三時」 mờ hiện góc dưới-trái ở 4s, tan ở 9s. BIZ UDPGothic, 34px, α 0,55
SFX     ドローン trầm rất thấp (tiếng tủ lạnh) vào từ 0s và giữ suốt chương. Một tiếng xe chạy xa,
        **đúng một lần**, ở ~9s, pan từ trái sang phải rồi mất hẳn
CUT     giữ liên tục (không cắt — light shaft sáng dần lên thành S02)

## S02 · C02–C03 · live-object ⭐ GÓC MÁY MỎ NEO · NGUỒN THUMBNAIL
SCENE   Light shaft hiện đầy đủ: **một dải sáng nghiêng cắt chéo trần**, lọt qua khe giữa hai tấm
        rèm. Đây là khung hình chủ đạo của tập — 第4章 trở lại đúng đây
CAMERA  **ĐÚNG y hệt S01, không nhúc nhích.** 28mm, cao 0,45m, ngẩng 62°.
        ⚠ **GHI LẠI THÔNG SỐ NÀY** — S31 phải khớp từng độ, từng pixel
ELEMENT Light shaft: dải nghiêng **34° so với cạnh ngang khung**, bề rộng 11cm trên trần, chạy từ
        góc trên-trái xuống 1/3 dưới-phải. **KHÔNG phải billboard phẳng** — dựng thể tích:
        · lõi dải sáng trên mặt trần (bề mặt nhận sáng, Lambert + một chút gờ 廻り縁 cắt ngang)
        · **cột không khí có tán xạ**: mật độ giảm theo hàm mũ từ khe rèm ra xa; ray-march trong
          shader, mép dải **mềm dần** theo khoảng cách, không có biên cứng
        · hạt bụi rất thưa trôi **lên trên** rất chậm trong cột sáng (đối lưu nhiệt phòng ngủ,
          0,8 cm/s), vị trí hàm thuần của t từ seeded PRNG
        Màu: **4.100K lam lạnh** (0.62, 0.72, 1.0) — đèn thuỷ ngân đường phố, không phải nắng
        0s dải mờ, cường độ 0,3 · 7s đạt cường độ đầy 1,0, hạt bụi thành nhìn thấy được ·
        14s **rèm lay rất chậm** (biên độ 1,2cm, chu kỳ 6,5s) → dải sáng **hẹp lại rồi nở ra**
        đúng một nhịp · 21s camera vẫn tĩnh nhưng độ trong không khí tăng nhẹ, thấy thêm chiều sâu
        phòng ở rìa khung
SFX     衣ずれ rất nhỏ ở ~15s (C03 có [AUDIO DIRECTION] わずかな衣ずれ)
CUT     giữ liên tục sang S03

## S03 · C04–C05 · live-object
SCENE   Cùng phòng, nhưng khung **mở rộng ra** để thấy phần trần xa và một góc tường — không gian
        rộng hơn người xem tưởng. Cảm giác "phòng này ban ngày rất bình thường"
CAMERA  dolly-back cực chậm 0,35m dọc trục nhìn, 28mm → giữ nguyên tiêu cự; **không zoom**.
        Chủ thể (dải sáng) dịch từ giữa khung sang **1/3 trên-trái** — đổi bố cục so với S02
ELEMENT 0s khung S02 · 6s thấy thêm mép trên của cửa sổ và rìa rèm ở mép khung trái · 12s một
        vệt sáng thứ hai rất yếu (phản xạ gián tiếp từ sàn) làm tường đối diện hiện mờ —
        chứng minh phòng có không gian, không phải hộp đen · 18s hạt bụi trôi qua điểm sáng nhất
        Ánh sáng giữ 4.100K, tổng cường độ **tăng 8%** so với S02 (mắt đã quen tối)
CUT     cắt phẳng sang S04

## S04 · C05–C07 · live-object
SCENE   Cận cảnh đồng hồ LED: các chữ số đỏ **nhoè** đúng như kịch bản (「数字が赤くにじんで」).
        Chủ thể lệch hẳn sang phải khung, 2/3 trái là bóng tối có kết cấu
CAMERA  tĩnh 85mm, đặt ngang mặt đồng hồ (thấp), khẩu mở — **DOF rất nông, f/1.8**;
        mặt đồng hồ nét, tủ đầu giường sau lưng nó đã nhoè
ELEMENT LED 7-segment nhìn gần: thấy được **cấu trúc từng đoạn** và lớp khuếch tán nhựa đỏ phía
        trước; bloom nhẹ quanh mỗi đoạn — đây là "nhoè" theo nghĩa quang học (mắt vừa mở, chưa
        điều tiết), **không phải hiệu ứng blur toàn khung**
        0s 3:00 · 8s dấu hai chấm giữ nguyên, không nháy · 14s đổi sang **3:01** — một sự kiện
        nhỏ nhưng đủ để người xem biết thời gian đang trôi thật · 20s bloom co lại 15% (mắt đang
        điều tiết dần, đọc rõ hơn)
        ⚠ Giờ hiển thị = hàm thuần của `t`. Không `Date.now`, không `setInterval`
SFX     秒針 rất nhỏ vào từ ~18s (C07 có [AUDIO DIRECTION] 秒針の音がかすかに入る)
CUT     hoà tan 1,2s sang S05

## S05 · C08–C11 · live-object
SCENE   Trở lại trần, nhưng **góc chéo hơn** — đầu đã nghiêng sang trái trên gối. Dải sáng giờ
        cắt khung theo hướng khác, phòng trông lạ đi một chút
CAMERA  tĩnh 28mm, cao 0,45m nhưng **roll 12°** và pan trái 18° so với S02; giữ y nguyên suốt shot.
        Cỡ cảnh: toàn (đổi so với cận của S04)
ELEMENT 0s khung mới, dải sáng giờ chạy từ 1/3 trên-phải xuống góc dưới-trái (gương của S02) ·
        8s một vệt xe chạy ngoài đường **quét qua dải sáng** — cột sáng sáng bùng 25% rồi tắt
        trong 2,4s, hạt bụi lộ rõ trong khoảnh khắc đó ⚠ đây là mốc thay đổi lớn nhất của shot ·
        18s trở về yên · 26s rèm lay một nhịp, dải hẹp lại rồi nở
        ⚠ LỐI RA: vệt xe là lời nhắc "bên ngoài vẫn có thế giới đang chạy" — cố ý, không phải trang trí
SFX     tiếng xe xa lướt qua đồng bộ với vệt sáng ở 8s. Sau đó im, chỉ còn tủ lạnh
CUT     cắt phẳng sang S06 — **chuyển bối cảnh, cần một nhịp đen 0,5s**

## S06 · C12–C13 · live-object · CẢNH XE (lần 1)
SCENE   **Nội thất xe, chiều muộn.** Nhìn từ ghế lái, hướng qua kính lái ra đường. Ghế phụ có
        người ngồi — **chỉ thấy vai và một bàn tay đặt trên đùi**, không thấy mặt
CAMERA  tĩnh 40mm, đặt ở vị trí mắt người lái nhưng **hơi lệch phải 15cm** (để ghế phụ vào khung
        rìa phải); nhẹ rung theo mặt đường — **biên độ 2mm, tần số 1,8Hz, hàm sin của t**,
        ⚠ đây KHÔNG phải rung máy ảo, là chuyển động vật lý của xe, giữ rất nhỏ
ELEMENT Nắng chiều thấp góc từ **trái-sau**, 3.400K vàng ấm — tương phản mạnh với 第1章
        0s đường phố qua kính lái, các xe phía trước, dải phân cách · 7s **nắng quét qua kính bên**
        khi xe rẽ nhẹ: một mảng sáng vàng trượt ngang bảng táp-lô rồi đi ·
        14s bàn tay trên đùi ghế phụ vào nét (DOF chuyển tiêu điểm chậm từ ngoài đường vào trong xe) —
        **bàn tay người cao tuổi: gân nổi, da mỏng, giải phẫu đúng, không cách điệu** ·
        22s tay hơi khép lại một nhịp rồi buông — cử chỉ duy nhất, rất nhỏ
        ⛔ Không thấy mặt ai. ⛔ Không đồ vật tang lễ trong xe. Ghế sau trống, không hành lý bệnh viện
SFX     tiếng chạy xe trầm, đều. Không nhạc trong xe, không đài
CUT     cắt phẳng sang S07

## S07 · C14–C15 · live-object · CẢNH XE (lần 1, tiếp)
SCENE   Cỡ cảnh đổi: **cận bàn tay người lái trên vô lăng**. Người xem hiểu đây là 私 — không
        thấy mặt, chỉ thấy tay, và tay ấy **không động gì cả** ngoài giữ lái
CAMERA  tĩnh 85mm, DOF nông; vô lăng và tay ở 1/3 dưới-trái, phần còn lại là kính lái loá nắng
ELEMENT 0s tay trên vô lăng, ngón cái gõ nhẹ một nhịp rồi thôi · 7s đèn tín hiệu phía trước đổi
        sang vàng — mảng loá trên kính đổi màu theo · 13s **xe chậm lại, cảnh ngoài kính trôi
        chậm dần** rồi gần như dừng · 20s nắng chiều đã thấp hơn 1 bậc, ấm hơn (3.200K)
        Chi tiết kể chuyện: tay giữ vô lăng **hơi chặt hơn bình thường** — khớp ngón trắng nhẹ.
        Đây là 「うまく相槌が打てませんでした」 kể bằng hình, không cần chữ
SFX     ウインカー hai tiếng ở ~15s (báo trước audio direction của C40)
CUT     hoà tan 1,5s sang S08 — về phòng

## S08 · C15–C16 · live-object · ĐÓNG CHƯƠNG 1
SCENE   Về trần phòng ngủ, đúng khung S02. Không có gì đổi. Câu hỏi của tập treo lên trong khung
        tĩnh này
CAMERA  **đúng khung S02** (28mm, 0,45m, 62°, không roll) — lần thứ hai người xem thấy khung này,
        sẽ nhận ra. Tĩnh tuyệt đối suốt shot
ELEMENT 0s khung S02 nguyên vẹn · 8s đồng hồ ở rìa khung đổi **3:01 → 3:14** (một cú nhảy — cho
        thấy 30 phút của C06 đã trôi) · 16s dải sáng **dịch xuống 3cm** trên trần: Trái Đất quay,
        đèn đường không đổi nhưng góc bóng đổi — ⚠ chi tiết này chuẩn bị cho 第4章, dịch tiếp
        cùng chiều · 24s cường độ dải sáng giảm 12% (sương đêm dày lên)
SFX     秒針 rõ hơn một chút, rồi lặng hẳn ở cuối shot (gap 1,5s trước C17)
CUT     **gap 1,5s.** Dải sáng trên trần **kéo dài ra, dẹt xuống và trở thành đường chân trời**
        của địa hình ở S09 — chuyển hình học trực tiếp, không cắt. Đây là cầu nối hai chương

---

# 第2章 — 山のかたち (C17–C39) · 10 shot · dry-run 149,2 – 362,3s

**CẢNH CHÍNH CỦA TẬP.** 不安の地形: mesh dải hẹp, **cao độ = mức lo âu**, **trục đi tới = tuổi
18 → 87**. Camera đi bộ trên đó, thấp, tốc độ người đi (~1,3 m/s trong hệ đơn vị cảnh).

⚠ **Heightmap dựng theo hình dạng định tính của Russac 2007, KHÔNG bịa số.** Trên màn hình phải
có một dòng mờ ghi rõ đây là **dựng lại hình dạng**, không phải đồ thị đo:
`Russac et al. 2007 · Death Studies 31(6) · 形状の再現図`

**Hình dạng heightmap (chuẩn hoá cao độ 0–1):**
| Tuổi | Cao độ | Ghi chú |
|---|---|---|
| 18 | 0,72 | sườn lên, đã cao |
| **20–29** | **1,00 (đỉnh)** | đỉnh cao nhất — **cả nam và nữ** |
| 30–39 | 0,38 | trũng |
| 40–49 | 0,34 | đáy trũng |
| **50–59** | **NỮ 0,76 / NAM 0,30** | ⚠⚠ đỉnh thứ hai **chỉ có ở lớp nữ** |
| 60–69 | 0,26 | dốc xuống bắt đầu |
| 70–79 | 0,17 | |
| 87 | 0,09 | dốc dài thoải, không về 0 |

**Sương:** height fog theo cao độ địa hình — **chỗ cao sương dày hơn** (ẩn dụ đúng: đứng trên
đỉnh thì không nhìn xa được). Khi camera xuống dốc, sương mỏng đi và tầm nhìn mở ra.

## S09 · C17–C19 · terrain ⭐ THẺ CHƯƠNG 2
SCENE   Từ đường chân trời do dải sáng biến thành, sương xám dâng lên và địa hình lộ ra dưới chân —
        nhưng **chỉ thấy vài mét quanh mình**. Ta đang đứng ở đâu đó trên một dải đất hẹp
CAMERA  ngang tầm mắt người đứng (1,6m), 35mm, hơi chúi xuống 15°; bắt đầu **đi tới rất chậm**
        (0,6 m/s), ease-in từ đứng yên. Chủ thể (lối đi) ở giữa dưới khung
ELEMENT 0s sương dày đặc, tầm nhìn 4m · 6s mặt đất vào rõ: **sỏi thật** — hạt 8–25mm, phân bố
        Poisson seeded, có bóng tiếp xúc riêng, KHÔNG phải normal map trên mặt phẳng ·
        12s hai bên lối đi hiện mép dốc — ta đang trên một **dải hẹp** (rộng ~6m), không phải
        đồng bằng · 20s xa xa trong sương hiện một bóng khối mờ (đỉnh 20 tuổi, chưa nhận ra) ·
        28s **một cọc mốc gỗ** vào khung bên phải lối đi, nhãn canvas 「18」 — cọc đầu tiên
        Ánh sáng: khuếch tán toàn phần, không có mặt trời nhìn thấy; xám trung tính 5.200K.
        Nhãn chương 「第2章 山のかたち」 hiện góc dưới-trái ở 3s, tan ở 8s
SFX     風の通る音 vào thay tiếng phòng. 足元の砂利 — bước chân trên sỏi, nhịp 0,55s/bước
CUT     giữ liên tục sang S10

## S10 · C19–C20 · terrain
SCENE   Camera **nâng lên cao và lùi ra** — lần đầu người xem thấy dải đất kéo dài về hai phía,
        như một con đường dài trong sương. Bên phải lối đi, cọc mốc thưa dần về xa
CAMERA  crane-up từ 1,6m lên 12m + lùi 18m, ease-in-out 20s, 35mm → 28mm (mở rộng);
        góc nhìn 3/4 sau, dải đất chạy chéo khung từ dưới-trái lên trên-phải
ELEMENT 0s tầm mắt người · 8s đã lên 5m, thấy được cả chiều rộng dải đất và mép dốc hai bên ·
        14s dòng nguồn mờ hiện góc dưới-phải, giữ tới hết chương:
        `Russac et al. 2007 · Death Studies 31(6) · n=304 · 18–87歳 · 形状の再現図`
        (BIZ UDPGothic 26px, α 0,45 — đọc được trên TV nhưng không tranh khung) ·
        20s đạt độ cao 12m; **sương vẫn che phần xa** — chưa cho thấy hình dạng, cố tình giữ lại
        cho S12 · 26s một dải sáng mỏng quét dọc địa hình (mây cao trôi qua), lộ thoáng một gờ cao ở xa
CUT     cắt phẳng sang S11

## S11 · C20–C21 · terrain
SCENE   **Kỳ vọng sai được dựng thành hình:** một đường thẳng dốc lên đều, mảnh, phát sáng nhẹ,
        bay lơ lửng trên địa hình — đây là cái 私 tưởng kết quả sẽ như vậy. Rồi nó **gãy vụn**
CAMERA  tĩnh, nhìn ngang địa hình từ bên hông (elevation view trong không gian 3D, KHÔNG phải
        đồ thị 2D — vẫn thấy chiều sâu, sương, mặt đất có kết cấu), 50mm
ELEMENT 0s đường thẳng giả thuyết vẽ từ trái dưới lên phải trên, độ dốc đều, màu trắng-lam nhạt,
        bề dày 3px trong không gian (là một ống mảnh thật, có bóng đổ xuống địa hình) ·
        8s đường đầy đủ, nhãn nhỏ bám đầu đường: 「まっすぐ上がる？」 ·
        **14s đường gãy thành từng đoạn và các đoạn rơi xuống**, tan vào sương trong 3s —
        ⚠ rơi theo trọng lực thật (g = 9,8, hàm của t²), không biến mất kiểu fade ·
        20s chỉ còn địa hình thật, sương bắt đầu tụt xuống
        ⛔ Không dùng animation "sai/đúng", không dấu X, không màu đỏ cảnh báo
SFX     風が少し強くなる (C21 audio direction) — gió mạnh lên từ ~12s
CUT     giữ liên tục sang S12 — sương tiếp tục tụt

## S12 · C21–C25 · terrain ⭐ CAO TRÀO 1 — ĐỊA HÌNH LỘ NGUYÊN HÌNH
SCENE   Sương tụt xuống hẳn và **toàn bộ dải đất hiện ra một lần**: một đỉnh cao ở gần (tuổi 20),
        trũng dài ở giữa, một gờ cao thứ hai xa hơn, rồi dốc xuống dài mất hút. Lần đầu người xem
        thấy "đồ thị" là **một nơi chốn**
CAMERA  bay dọc **bên hông** dải đất, cao 25m, 28mm, tốc độ đều rất chậm (hàm tuyến tính của t,
        không ease để nhịp ổn định); dải đất giữ ở 1/3 dưới khung, 2/3 trên là trời xám sáng
ELEMENT 0s sương ngang tầm dải đất · 6s **sương tụt xuống dưới mép dốc** — cả hình dạng lộ ra
        trong 2,5s, đây là mốc lớn nhất của shot · 12s **đỉnh tuổi 20 vào giữa khung**: khối cao
        nhất toàn cảnh, đỉnh nhọn vừa phải, sườn dốc; cọc mốc 「20」 ở chân đỉnh ·
        20s nhãn canvas bám lơ lửng cạnh đỉnh: 「最高地点 ― 二十代」 (BIZ UDPGothic 44px) ·
        28s camera qua đỉnh, thấy **trũng 30–40 tuổi** trải dài phía sau ·
        36s xa hơn nữa, **gờ cao thứ hai** hiện mờ trong sương — chưa gọi tên, để C27 gọi
        ⚠ Bóng đổ: nguồn sáng khuếch tán nhưng có hướng nhẹ từ trên-trái → sườn dốc có bóng thật,
        đỉnh sáng hơn trũng. Đây là cái làm mesh trông là **đất**, không phải lưới đồ thị
SFX     gió trên cao, rộng hơn. Không có tiếng chân (camera đang bay)
CUT     cắt phẳng sang S13

## S13 · C24–C26 · terrain + live-object
SCENE   **Chèn ngược về trần phòng ngủ** — nhưng là trần khác: phòng trọ hẹp, trần thấp hơn,
        dải sáng mảnh hơn. Đây là 「若い夜」 của C24. Rồi tan trở lại địa hình ở chỗ trũng
CAMERA  tĩnh 28mm, cao 0,45m, ngẩng 62° — **cùng công thức góc máy với S02**, khác phòng.
        Sự lặp lại góc máy là điều làm người xem hiểu "cũng là một người nằm thức"
ELEMENT 0s trần phòng trẻ: 石膏ボード rẻ tiền, một vết ố nước ở góc, không có 廻り縁 gỗ ·
        7s dải sáng mảnh hơn (khe rèm hẹp hơn), màu lam lạnh hơn 4.400K · 13s không có đồng hồ LED
        — thay bằng ánh màn hình điện thoại hắt lên từ dưới, rất yếu, **không thấy nội dung màn hình** ·
        18s **hoà tan sang địa hình**: camera giờ đứng dưới chân đỉnh tuổi 20, nhìn lên đỉnh ·
        24s bắt đầu **đi xuống** phía trũng — địa hình dốc xuống dưới chân
        ⛔ Không có người trong phòng trọ. Chỉ trần và ánh sáng
SFX     tiếng phòng (tủ lạnh) 4s rồi mờ đi, gió trở lại từ 18s
CUT     hoà tan 2s về địa hình ngay trong shot; cắt phẳng sang S14

## S14 · C26–C28 · terrain ⭐ HAI LỚP MESH — LỚP 2 HIỆN RA
SCENE   Camera đi qua đáy trũng và bắt đầu lên dốc. **Đúng lúc bắt đầu lên, một lớp địa hình thứ
        hai tách ra khỏi lớp thứ nhất** — cho tới giờ hai lớp chồng khít nên trông như một
CAMERA  ngang tầm người đi (1,6m), 35mm, đi tới 1,1 m/s, hơi chúi 10°;
        lối đi ở 1/3 dưới-phải khung (đổi bố cục so với S09)
ELEMENT ⚠⚠ **CƠ CHẾ HAI LỚP — đọc kỹ, đây là ràng buộc nguồn quan trọng nhất của tập:**
        · **Từ tuổi 18 đến ~45, HAI LỚP CHỒNG KHÍT NHAU** (Russac: đỉnh tuổi 20 có ở **cả nam và
          nữ**). Người xem từ S09 tới đây chỉ thấy **một** mặt đất — đúng như vậy, vì hai lớp
          cùng cao độ. Không hé lộ sớm.
        · **Từ ~tuổi 47, hai lớp bắt đầu tách.** Lớp **NỮ** dâng lên thành đỉnh thứ hai (0,76);
          lớp **NAM** giữ nguyên độ thấp rồi tiếp tục xuống (0,30).
        · Cách phân biệt: lớp NỮ là **mặt đất đặc, sỏi thật, camera đi được trên đó**, viền sáng
          ấm nhạt (1.0, 0.86, 0.72). Lớp NAM là **mặt đất đặc thứ hai chạy song song thấp hơn**,
          viền lam nhạt (0.72, 0.82, 1.0). ⚠ **Cả hai đều là đất thật** — không lớp nào là
          "ma", "bóng" hay wireframe; tránh gợi lớp này thật hơn lớp kia.
        · Vùng hai lớp tách nhau có **mặt cắt hở nhìn thấy được ở mép dải** — như vách đá lộ
          tầng địa chất. Người xem thấy ngay "à, có hai nền đất ở đây".
        0s đáy trũng, một mặt đất · 8s dốc bắt đầu lên; **mép dải bên trái lộ một đường nứt mảnh
        chạy dọc** — báo hiệu · 16s **nứt mở ra, lớp trên (nữ) nâng lên khỏi lớp dưới (nam)**
        rất chậm, chênh lệch tăng dần theo chiều đi · 24s chênh lệch đã đọc rõ, hai viền màu
        phân biệt được
SFX     上り坂 — nhịp chân chậm lại, hơi thở nặng hơn một chút (C27 audio direction)
CUT     giữ liên tục sang S15

## S15 · C28–C30 · terrain ⭐ CAO TRÀO 2 — HAI ĐƯỜNG ĐI, HAI NHÃN
SCENE   Camera **lùi ra và lên cao**, nhìn hai lớp từ bên hông: rõ ràng là **hai con đường khác
        nhau đi qua cùng một vùng tuổi**. Một leo lên gò, một đi thẳng xuống. Mỗi lớp có nhãn riêng
CAMERA  crane-out từ tầm mắt lên 15m + ra bên hông 20m, ease 12s, 35mm → 40mm;
        kết ở góc 3/4 để **nhìn thấy cả hai lớp không chồng che nhau** — góc này là bắt buộc,
        nhìn chính diện sẽ che mất lớp dưới
ELEMENT 0s tầm mắt · 6s đã ra bên hông, hai lớp tách bạch trong khung · 12s **hai nhãn canvas
        xuất hiện cùng lúc**, mỗi nhãn bám vào lớp của nó bằng một đường chỉ mảnh:
        · trên lớp cao: 「女性のグループ ― 二つ目の山」 (viền ấm)
        · trên lớp thấp: 「男性のグループ ― 山は出ていない」 (viền lam)
        BIZ UDPGothic 40px, `await document.fonts.load()` trước khi vẽ
        18s một **đường chấm mảnh nối hai lớp theo chiều đứng** ở đúng mốc tuổi 50, kèm cọc mốc
        「50」 cắm xuyên qua cả hai — cho thấy cùng một tuổi, hai cao độ khác nhau ·
        26s camera dừng, giữ khung 6s để người xem đọc xong hai nhãn — ⚠ **không cắt sớm**,
        đây là thông tin bắt buộc theo ràng buộc nguồn
        ⚠ Cả shot: lớp nam **vẫn là mặt đất đi được**, vẫn có sỏi, vẫn nhận bóng. Không phải
        đường kẻ, không phải wireframe
CUT     cắt phẳng sang S16

## S16 · C30–C32 · terrain
SCENE   Camera **quay lại tầm mắt trên lớp cao** (đường của nhóm nữ), đang ở gần đỉnh thứ hai.
        足音 dừng. Ta đứng yên giữa sương, không biết mình đang đâu
CAMERA  tĩnh hoàn toàn ở 1,6m, 35mm, hơi chúi 8°. Đứng yên suốt shot — nhịp nghỉ sau hai shot
        thông tin dày
ELEMENT 0s sương dâng trở lại tới ngang ngực, tầm nhìn 8m — **cố ý che**, vì C31–C32 là chỗ 私
        chưa biết mình ở đâu · 8s dưới chân thấy sỏi và một đoạn mép dải · 16s sương trôi ngang
        chậm, thoáng hé thấy dốc phía trước **đang đi xuống** rồi khép lại ngay ·
        24s ánh sáng qua sương ấm lên 4%, báo trước S17
        ⚠ LỐI RA: dù sương dày, luôn có một vùng sáng hơn ở hướng đi tới — không bao giờ bịt kín
SFX     足音が止まる (C31 audio direction). Chỉ còn gió và một tiếng sỏi lăn nhẹ
CUT     giữ liên tục sang S17

## S17 · C33–C35 · terrain ⭐ CAO TRÀO 3 — QUAY NGƯỜI, THẤY DỐC XUỐNG
SCENE   **Cú mở khung của cả tập.** Camera quay 180° chậm: phía sau là đỉnh vừa leo, phía trước là
        **một dốc xuống dài thoải, sương tan hết, nhìn thấy tới tận cuối dải đất**. Đây là 「山」
        trong tiêu đề được giao
CAMERA  orbit ngang 180° quanh trục đứng, **rất chậm, ease-in-out 18s**, 35mm → 28mm (mở rộng
        đúng lúc quay xong). Sau khi quay xong, dolly tới 8m rồi dừng
ELEMENT 0s nhìn về sau: sườn đỉnh vừa leo, cọc 「50」 phía dưới · 6s quay được 60°, thấy mép dải ·
        **12s quay được 130°: sương bắt đầu tan theo hướng quay** — mật độ fog giảm 70% trong 4s,
        ⚠ lý do vật lý: xuống thấp thì sương mỏng, khớp với quy ước height-fog đã đặt ·
        16s **toàn bộ dốc xuống hiện ra**: dài, thoải, không có vực, không có đứt gãy; cọc mốc
        「70」 và 「87」 thưa dần về xa; cuối dải là một vùng sáng nhạt, **không phải vách đá,
        không phải hư vô** — dải đất thoải dần rồi hoà vào ánh sáng ·
        24s ánh sáng đổi: từ xám 5.200K sang **vàng thấp góc 3.600K**, mặt trời thấp ở cuối dốc,
        ngược sáng nhẹ, viền các gờ đất sáng lên · 32s camera dolly tới, dốc mở rộng thêm
        ⚠ ⛔ Cuối dốc **không được dựng như điểm kết thúc**. Không cổng, không vạch, không vực.
        Dải đất chỉ thoải dần và mờ đi trong ánh sáng
SFX     風がやみ (C35 audio direction) — gió tắt hẳn ở 12s, để lại yên tĩnh rộng
CUT     giữ liên tục sang S18

## S18 · C36–C39 · terrain
SCENE   Camera lên cao nhìn toàn cảnh cả dải đất một lần nữa — nhưng giờ có **dải đất thứ hai
        chạy song song bên cạnh**, mờ hơn: đó là 調査2 (113 phụ nữ, thang Templer) — cùng hình dạng
CAMERA  crane lên 40m, 28mm, nhìn chéo xuống 35°; dải đất chính ở 1/3 dưới, dải thứ hai ở phía xa
ELEMENT 0s dải đất chính trong nắng thấp · 8s **dải thứ hai hiện dần bên cạnh**, cùng hai đỉnh,
        cùng dốc xuống — hình dạng trùng khớp, chỉ khác tỉ lệ nhỏ; độ mờ 55% để phân biệt ·
        14s nhãn nguồn thứ hai mờ hiện dưới dải thứ hai:
        `調査2 · 女性113人 · 18–85歳 · テンプラー尺度` ·
        20s hai dải đất **cùng dốc xuống về cùng một hướng** — hình nói 「形は同じでした」 ·
        28s camera giữ, ánh sáng cuối dốc sáng lên thêm một bậc
        ⛔ Không vẽ đường so sánh, không mũi tên, không phần trăm khớp
SFX     gió rộng, xa. Chuẩn bị tắt hẳn cho gap 1,5s
CUT     **gap 1,5s.** Dốc xuống trong nắng **mờ dần** và ánh nắng vàng ấy **trở thành nắng chiều
        qua kính xe** ở S19 — nối bằng màu, không cắt cứng

---

# 第3章 — 四十四組の食い違い (C40–C74) · 12 shot · dry-run 363,8 – 716,0s

Chương dài nhất (42% kịch bản). Chia ba đoạn rõ: **xe + ba con số** (C40–C50) →
**hai nỗi sợ khác nhau** (C51–C56) → **dốc xuống + Carstensen + giới hạn** (C57–C74).

## S19 · C40–C42 · live-object ⭐ THẺ CHƯƠNG 3 · CẢNH XE (lần 2)
SCENE   Trở lại nội thất xe, **cùng xe cùng chiều hôm ấy**, nhưng góc khác: từ ghế sau chéo lên,
        thấy hai chỗ ngồi phía trước qua khe giữa hai ghế
CAMERA  tĩnh 50mm từ ghế sau, cao 1,1m; hai người chỉ thấy **gáy và vai**, không thấy mặt.
        Rung xe 2mm/1,8Hz như S06
ELEMENT Nắng chiều 3.400K từ trái-sau, quét chậm · 0s khung xe, hai vai · 7s **nắng quét qua**,
        bụi trong xe lộ ra trong luồng sáng (cùng nguyên lý tán xạ với light shaft phòng ngủ —
        quy ước thống nhất của tập) · 14s nhãn nguồn hiện góc dưới-phải, giữ tới C50:
        `Sinoff 2017 · Frontiers in Medicine 4:11 · n=44組 · イスラエル`
        (BIZ UDPGothic 26px, α 0,45) · 22s cảnh ngoài kính bên trôi chậm, nhà cửa thành đồng trống
        Nhãn chương 「第3章 四十四組の食い違い」 góc dưới-trái ở 3s, tan ở 8s
SFX     車内の低い走行音. **ウインカーの音が二度** ở ~5s (C40 audio direction)
CUT     cắt phẳng sang S20

## S20 · C42–C44 · terrain (biến thể) · BA MỨC — 4,0 và 6,9
SCENE   Ba mức lo âu dựng **trong không gian 3D**: ba mặt phẳng ngang lơ lửng ở ba độ cao khác
        nhau trên một cột thang đứng, đặt trên nền địa hình mờ. **KHÔNG phải biểu đồ cột**
CAMERA  tĩnh 50mm, nhìn ngang hơi chếch lên 12°, DOF nhẹ; cột thang ở 1/3 phải khung
ELEMENT Cột thang đứng: một trụ mảnh trong suốt, có **15 vạch khắc** (thang Templer 15 điểm),
        vạch 0 ở dưới vạch 15 ở trên; chất liệu như kính mờ, nhận sáng thật
        0s chỉ cột thang trống, 15 vạch · 8s **mức 4,0 hiện ra**: một đĩa mỏng ánh ấm nằm ngang
        ở vạch 4, có bóng đổ nhẹ lên cột; nhãn bám cạnh đĩa 「高齢のご本人 4.0」 ·
        16s giữ yên — cho người xem đo bằng mắt mức 4 nằm thấp thế nào trên 15 vạch ·
        22s **mức 6,9 hiện ra** ở vạch 6,9, đĩa thứ hai màu lam nhạt; nhãn 「子ども自身 6.9」 ·
        28s hai đĩa cùng khung, khoảng cách giữa chúng đọc được bằng mắt
        ⛔ Không animation "đếm số nhảy", không thanh bar mọc lên, không màu đỏ/xanh giá trị
SFX     間 (C43 audio direction) — im 1,5s trước khi mức 4,0 hiện
CUT     giữ liên tục sang S21

## S21 · C45–C46 · terrain (biến thể) · MỨC THỨ BA — 8,1
SCENE   Cùng cột thang, camera **dịch xuống thấp và nhìn lên** — làm mức thứ ba khi hiện ra trông
        cao hơn hẳn. Bố cục đổi, cùng đối tượng
CAMERA  dolly xuống 0,8m + hướng lên 24°, chậm, 50mm; cột thang giờ chạy dọc khung từ dưới lên
ELEMENT 0s hai đĩa đã có, nhìn từ thấp · 8s camera đã hạ xong, hai đĩa ở nửa dưới khung, phần cột
        trên còn trống — **khoảng trống này là câu hỏi**, giữ 4s ·
        14s **mức 8,1 hiện ra** ở vạch 8,1, đĩa thứ ba màu lam đậm hơn, nằm hẳn trên hai đĩa kia;
        nhãn 「子どもが親を推し量った点 8.1」 ·
        20s **một đường chỉ mảnh nối đĩa 4,0 và đĩa 8,1**, ở giữa nhãn nhỏ 「二倍」 — cách duy nhất
        được phép "so sánh" trong tập này, vì nó là quan hệ trong cùng một cột, không phải đồ thị ·
        26s ba đĩa và ba nhãn cùng khung, giữ 5s
SFX     短い間 (C46 audio direction) — im 1s ngay trước 8,1 hiện
CUT     hoà tan 1,5s sang S22

## S22 · C47–C48 · terrain (biến thể)
SCENE   Camera lùi ra: cột thang **thu nhỏ dần** và ta thấy nó đứng giữa vùng sương của địa hình.
        Con số được đặt lại vào thế giới, không lơ lửng
CAMERA  dolly-back 14m, 50mm → 35mm, ease chậm; cột thang từ chiếm cả khung thành một vật nhỏ
        ở 1/3 trái
ELEMENT 0s ba đĩa cận · 7s lùi ra, thấy chân cột cắm xuống mặt đất có sỏi · 14s lùi hết, cột thang
        nhỏ, nhãn thu lại thành ba chữ số 「4.0 / 6.9 / 8.1」 xếp dọc · 20s một dải sáng mây trôi
        qua, cả cụm sáng lên rồi trầm lại
CUT     cắt phẳng sang S23 — về xe

## S23 · C49–C50 · live-object · CẢNH XE (lần 3, đóng vòng)
SCENE   **Đúng khung S07** — cận bàn tay người lái trên vô lăng. Lần này người xem đã biết ai là
        người đang căng. Không cần một chữ giải thích
CAMERA  **đúng khung S07**: tĩnh 85mm, tay ở 1/3 dưới-trái, kính lái loá nắng.
        ⚠ Khớp đúng thông số S07 — sự lặp lại là nội dung, không phải tiết kiệm
ELEMENT 0s khung S07 · 8s **khớp ngón tay giãn ra** — chỗ trắng nhạt biến mất, tay nới lỏng trên
        vô lăng. Đây là C49–C50 kể bằng hình · 16s tay phải rời vô lăng một nhịp rồi đặt lại,
        nhẹ hơn · 22s nắng chiều hạ thêm một bậc, 3.100K, ấm hơn S07
CUT     hoà tan 1,5s sang S24

## S24 · C51–C53 · live-object
SCENE   Cửa sổ bệnh viện nhìn từ trong ra — **không thấy giường, không thấy người**. Chỉ một ô
        cửa, ánh chiều, và một bình hoa nhỏ trên bệ cửa. Cảnh tối giản cho đoạn nhạy nhất tập
CAMERA  tĩnh 50mm, nhìn thẳng ô cửa; bệ cửa ở 1/3 dưới. Không chuyển động camera suốt shot
ELEMENT ⚠⚠ Đây là đoạn nhạy nhất — cảnh phải **nhẹ và trung tính**:
        ⛔ Không giường, không rèm ngăn, không thiết bị y tế, không người, không biểu tượng bệnh viện
        0s ô cửa, nắng chiều ngang · 8s một nhành hoa trong bình lay rất nhẹ (luồng khí điều hoà) ·
        14s **hai từ hiện lơ lửng cách nhau trong không gian phòng**, không hộp, không mũi tên:
        「終わりそのもの」 (bên trái, mờ hơn, viền mềm) và 「そこへ向かう過程」 (bên phải, rõ hơn) —
        đúng C52–C53: hai thứ khác nhau bị nhét vào một chữ ·
        22s giữa hai từ, một đường mảnh **tách ra làm hai** — hình của 「押し込められていた」 ·
        28s giữ yên
SFX     走行音が薄れる (C51 audio direction) — tiếng xe tắt dần ở 0–3s, sau đó im
CUT     cắt phẳng sang S25

## S25 · C54–C56 · live-object
SCENE   Cùng ô cửa, nhưng camera dịch sang để thấy **một cái ghế trống bên cạnh bệ cửa** — chỗ
        người đến thăm ngồi, chỗ người ta hỏi được. Cảnh của 「尋ねられること」
CAMERA  dolly ngang trái 1,2m rất chậm, 50mm; ghế vào khung từ phải, dừng ở 1/3 phải
ELEMENT 0s ô cửa như S24 · 7s ghế vào khung: ghế gỗ đơn giản, trống, ánh chiều rọi lên mặt ghế ·
        14s chữ 「尋ねられる」 giữ lại, chữ 「漠然と怖いもの」 mờ đi 60% — hai thứ không bằng nhau nữa ·
        20s nắng trên mặt ghế dịch 4cm (chiều thấp dần), ấm lên 3.000K · 26s giữ yên
        ⛔ Không dựng bác sĩ, không dựng biểu tượng y tế, không nêu thuốc/dịch vụ/終活 bằng hình
CUT     **gap 1,0s.** Cắt phẳng sang S26 — trở ra địa hình

## S26 · C57–C59 · terrain
SCENE   Ra lại địa hình, **trên đoạn dốc xuống dài trong nắng**. Ánh sáng đẹp nhất tập ở đây.
        Camera đi xuống dốc, tốc độ người đi
CAMERA  tầm mắt 1,6m, 35mm, đi tới 1,2 m/s, hơi chúi 12°; dốc mở ra phía trước; lối đi ở
        1/3 dưới-trái (đổi bố cục so với S09/S14)
ELEMENT 0s dốc xuống trong nắng thấp góc 3.600K, ngược sáng nhẹ · 8s **nhãn nguồn Carstensen**
        hiện góc dưới-phải: `Carstensen, Isaacowitz & Charles 1999 · American Psychologist 54` ·
        14s ngay dưới nhãn, một dòng nhỏ hơn, **bắt buộc có**:
        「理論 ― 不安を測った結果ではありません」 (α 0,55) — ⚠ ràng buộc nguồn, không được bỏ ·
        20s bóng camera đổ dài phía trước trên mặt đất (mặt trời sau lưng) — chứng minh có
        nguồn sáng có hướng thật · 28s một cọc mốc 「70」 lướt qua bên phải
SFX     再び屋外 (C57 audio direction) — gió nhẹ trở lại, nắng có tiếng côn trùng chiều rất xa
CUT     giữ liên tục sang S27

## S27 · C60–C62 · terrain ⭐ SST DỰNG BẰNG ĐƯỜNG CHÂN TRỜI
SCENE   Carstensen kể bằng **độ xa của đường chân trời**: khi thời gian còn lại cảm thấy mở ngỏ,
        chân trời xa và ta nhìn ra xa; khi cảm thấy có hạn, **chân trời gần lại và cái gần trở
        nên rõ hơn**. Cùng một địa hình, hai cách nhìn
CAMERA  tĩnh, 35mm, nhìn dọc dốc xuống. **Chỉ DOF và fog đổi, camera không di chuyển** — điều đổi
        là "cái gì được nhìn", đúng tinh thần SST
ELEMENT 0s chân trời rất xa, mọi thứ trong nét sâu (hyperfocal), tiền cảnh mờ nhẹ; nhãn nhỏ
        「残り時間が開いていると感じるとき」 · 8s những đốm sáng nhỏ rải khắp phía xa (「知識、経験、
        新しい出会い」) — nhiều, nhỏ, đều, không có cái nào nổi bật ·
        16s **chuyển tiêu điểm chậm 6s**: nét dời từ xa về gần; đồng thời fog phía xa dày lên ·
        22s giờ **vài đốm sáng ở gần trở nên lớn và rõ hẳn**, các đốm xa mờ đi (không tắt, chỉ mờ) —
        ⚠ số lượng giảm nhưng **độ sáng từng cái tăng**, đây là 「誰でもよかったのが、この人で
        なければ困る」 dựng bằng quang học · 30s nhãn đổi: 「限られていると感じるようになると」
        ⛔ Không đốm nào "biến mất" — SST nói thứ tự ưu tiên đảo, không nói mất mát
CUT     giữ liên tục sang S28

## S28 · C63–C65 · terrain
SCENE   Camera tiếp tục xuống dốc, các đốm sáng gần giờ đã thành những điểm ấm rõ ràng hai bên
        lối đi. Nắng thấp hơn nữa
CAMERA  đi tới 1,0 m/s (chậm hơn S26 — C63 ghi 足音がゆっくり), 35mm, chúi 10°;
        lối đi giữa khung, đốm sáng hai bên
ELEMENT 0s dốc, đốm sáng gần · 8s **nắng mạnh lên** (C63 audio direction): cường độ +30%, ngược
        sáng làm viền gờ đất sáng rực, lens flare **rất nhẹ và tĩnh** (hàm của t, không nhấp nháy) ·
        16s một đốm sáng lớn nhất trôi qua sát bên trái camera — gần đến mức thấy được nó có
        thể tích, không phải sprite phẳng · 24s dốc phía trước mở rộng, thoải hơn
CUT     cắt phẳng sang S29

## S29 · C66–C67 · terrain ⭐ CÚ LẬT — 向きを変えた
SCENE   **Cú lật của tập dựng bằng một chuyển động quay, không bằng chữ.** Một mũi la bàn khổng lồ
        — không, không phải mũi tên: **cả cụm đốm sáng cùng quay hướng một lượt**, từ hướng ra xa
        sang hướng vào gần. Không cái nào tắt
CAMERA  tĩnh, 40mm, nhìn chếch xuống 20° vào cụm đốm sáng; chủ thể ở giữa khung (lần duy nhất
        trong chương đặt chủ thể chính giữa — cố ý, đây là điểm chốt)
ELEMENT 0s cụm đốm sáng, mỗi đốm có một hướng phát sáng riêng, tất cả chĩa ra xa ·
        8s **toàn cụm bắt đầu quay hướng đồng loạt, rất chậm, 12s để quay xong 180°** —
        ease-in-out, hàm thuần của t · 16s quay xong: tất cả hướng vào gần, vùng gần camera
        sáng lên rõ rệt · 22s nhãn hiện, một dòng, giữa khung dưới:
        「あきらめではなく、向きが変わった」 — ⚠ đây là câu chốt, để hiển thị đủ 6s
        ⛔ Số lượng đốm sáng **không đổi một cái nào** trong suốt shot. Đây là ràng buộc nội dung:
        không phải mất đi, là đổi hướng
SFX     風が戻る (C68 audio direction) — gió trở lại ở cuối shot, âm lượng lùi lại một bậc
CUT     cắt phẳng sang S30

## S30 · C68–C72 · terrain · CHƯƠNG GIỚI HẠN (bắt buộc)
SCENE   Camera **lùi rất xa và lên cao**, nhìn cả dải đất từ trên như một vật đặt trên bàn —
        cố ý làm nó **nhỏ lại**. Đây là hình của 「これはあくまで傾向です」
CAMERA  crane lên 120m + lùi 90m, ease chậm 25s, 28mm; dải đất từ chiếm khung thành một dải nhỏ
        ở 1/3 dưới, phần còn lại là trời và sương
ELEMENT 0s tầm mắt trên dốc · 10s đã lên cao, thấy cả dải đất từ 18 tới 87 ·
        16s **những chấm sáng rất nhỏ rải rác KHẮP dải đất, kể cả ở chỗ thấp và chỗ cao** — mỗi
        chấm là một người; có chấm sáng nằm ở tuổi 80 (người 80 vẫn thức), có chấm mờ ở tuổi 50
        (người 50 đã yên). ⚠ Đây là C69–C70 dựng bằng hình: **hình dạng là của đám đông, không
        phải của một người** ·
        24s ba dòng giới hạn hiện **lần lượt**, mỗi dòng cách 6s, xếp dọc góc trái, α 0,7:
        「一・傾向であって、個人の決まりではない」
        「二・シノフ 2017 ― 44組・一国・入院患者」
        「三・どちらも自己申告の尺度」
        42s cả ba dòng cùng trên khung, giữ 5s
        ⛔ Không dấu cảnh báo, không màu đỏ, không khung viền. Chữ mờ, bình thản
CUT     hoà tan 2s sang S31

## S31 · C73–C74 · terrain
SCENE   Camera hạ xuống thấp lại, về sát mặt đất — **cận sỏi dưới chân**, nông đến mức chỉ thấy
        vài viên. Hình của 「紙の上の数字で言い当てられるとは思えません」: cái thật thì ở đây, dưới chân
CAMERA  hạ từ 120m xuống 0,3m trong 14s (ease-out mạnh, gần đất thì chậm hẳn), 85mm, DOF rất nông
ELEMENT 0s toàn cảnh cao · 8s đang hạ, dải đất lớn dần · 14s **chạm gần đất: chỉ còn 5-6 viên sỏi
        trong nét**, nắng chiều rọi ngang, mỗi viên có bóng tiếp xúc riêng và một mặt sáng một
        mặt tối — chi tiết này chứng minh đây là **vật thật**, không phải texture ·
        20s camera trôi tới rất chậm dọc mặt đất, sỏi trôi qua khung ·
        26s xa xa cuối dốc, vùng sáng vẫn ở đó — ⚠ lối ra bằng ánh sáng, luôn có trong khung
SFX     gió rất gần mặt đất, khô. Chuẩn bị tắt cho gap 2,0s
CUT     **gap 2,0s.** Nắng cuối dốc **mờ dần thành dải sáng trên trần phòng ngủ** — đảo ngược
        đúng cú chuyển ở S08. Vòng tròn khép bằng hình

---

# 第4章 — 帰り道 (C75–C87) · 4 shot · dry-run 718,0 – 819,9s

Chương ngắn nhất, **tĩnh nhất**. Không một chuyển động camera lớn nào. Người xem về đúng chỗ
đã bắt đầu. Ánh sáng đã ấm lên — không nói ra, để hình nói.

## S32 · C75–C78 · live-object ⭐ THẺ CHƯƠNG 4 · GÓC MÁY MỎ NEO TRỞ LẠI
SCENE   **Đúng khung S02.** Cùng trần, cùng dải sáng, cùng đồng hồ. Người xem nhận ra ngay lập tức.
        Khác một điều duy nhất: **màu**
CAMERA  **đúng thông số S02** — 28mm, cao 0,45m, ngẩng 62°, không roll, tĩnh tuyệt đối.
        ⚠ Phải khớp từng độ với S02. Sai một độ là hỏng cú lặp
ELEMENT ⚠⚠ **SO SÁNH VỚI S02 — ba thứ đổi, ba thứ giữ nguyên:**
        GIỮ NGUYÊN: góc máy · góc nghiêng dải sáng 34° · bề rộng dải 11cm · kết cấu trần
        ĐỔI: · dải sáng **dịch xuống 9cm** trên trần (tiếp tục cùng chiều đã dịch 3cm ở S08 —
               Trái Đất quay, chuyển động nhất quán, không đảo chiều)
             · màu từ **4.100K lam lạnh → 3.200K ám ấm** (0.62,0.72,1.0 → 1.0, 0.88, 0.74) —
               ánh đèn đường vẫn thế, nhưng **trời đã chớm sáng và trộn vào**
             · cường độ nền phòng +35%: các góc trần không còn đen, đã đọc được hình
        0s khung hiện ra, người xem nhận ra chỗ cũ · 8s đồng hồ LED ở rìa: **3:00** — cùng giờ,
        đêm khác · 16s rèm lay một nhịp, dải hẹp lại rồi nở — **đúng chu kỳ 6,5s của S02** ·
        24s ánh sáng ấm lên thêm 5%, gần như không nhận ra nhưng cảm được
        Nhãn chương 「第4章 帰り道」 góc dưới-trái ở 3s, tan ở 8s
SFX     部屋の静けさ. 冷蔵庫の唸り trở lại (C75 audio direction) — cùng âm với S01, đóng vòng
CUT     giữ liên tục sang S33

## S33 · C79–C84 · live-object
SCENE   Camera **dolly rất chậm về phía cửa sổ** — lần đầu trong cả tập rời khỏi tư thế nằm.
        Dải sáng dần rộng ra, và qua khe rèm thấy được một vệt trời **đã nhạt hơn đêm**
CAMERA  dolly tới 1,8m + hạ hướng nhìn từ 62° xuống 34°, ease-in-out 30s, 28mm.
        ⚠ Chậm hơn mọi chuyển động camera khác trong tập — đây là nhịp ru ngủ, không phải nhịp dẫn dắt
ELEMENT 0s khung S32 · 8s cửa sổ và rèm vào khung dưới, nguồn của dải sáng lộ ra — người xem
        hiểu ra dải sáng đến từ đâu (câu trả lời nhỏ, cuối tập) ·
        16s **qua khe rèm: một vệt trời xanh rất nhạt**, không phải đen. Trời sắp sáng.
        ⛔ Không dựng mặt trời, không bình minh rực — chỉ là **bớt tối** ·
        24s đường viền các vật trong phòng đã đọc được: mép tủ đầu giường, góc chăn (không có người) ·
        32s một bóng chim nhỏ lướt rất nhanh qua vệt trời — **đúng một lần**, không lặp
        ⛔ Không dựng ai trong phòng. ⛔ Không dựng xe, không quay lại cảnh xe — C81–C84 là ký ức,
        để lời đọc mang; hình giữ ở phòng, tĩnh
SFX     うっすらと、早い鳥の声が一度 ở ~32s, đồng bộ với bóng chim (C81 audio direction)
CUT     hoà tan 2,5s sang S34

## S34 · C85–C87 · live-object ⭐ KHUNG KẾT
SCENE   Trở lại **đúng khung S02/S32** một lần cuối. Trần nhà, dải sáng, hết. Không có gì xảy ra —
        đó chính là nội dung
CAMERA  **đúng thông số S02**, tĩnh tuyệt đối. Không zoom, không dolly, không hiệu ứng suốt shot.
        ⚠ C87 (câu 4c) nằm trong shot này — packaging yêu cầu **tĩnh và nhẹ, không kịch tính**
ELEMENT 0s khung mỏ neo lần thứ ba · 8s dải sáng **ấm thêm một bậc cuối** (3.000K), mép dải mềm
        hơn vì độ trong không khí sáng sớm cao hơn ·
        16s hạt bụi trong cột sáng **chậm lại** — phòng đã yên hẳn ·
        24s đồng hồ LED **mờ dần đi 40%** (mắt đang nhắm lại — chủ quan, rất nhẹ) ·
        32s ⚠ **C87 bắt đầu**: không thêm một chuyển động nào. Khung giữ nguyên.
        Dòng 4c hiện ở 1/3 dưới, một dòng, BIZ UDPGothic 38px, α 0,75, **không hộp không viền**:
        「ご不安が続くときは、かかりつけの先生にご相談ください」
        (⚠ đây là **dòng đồ hoạ cố định**, không phải phụ đề — nó phải hiện đủ hết C87 và ở lại
         thêm 2s. Phụ đề tự sinh vẫn chạy bình thường song song)
        · 38s dòng 4c và cả khung **cùng tối dần đều** về đen trong 4s
        Sau đó là outro 5s màn đen của `apply-lead-tail.mjs`
SFX     完全な静けさ (C85 audio direction). Tiếng tủ lạnh tắt ở ~20s, sau đó không còn âm nào
        ngoài nhạc nền đang lùi dần
CUT     hết tập

---

# GHI CHÚ DỰNG HÌNH

Quy ước dùng chung cho cả tập — visual-builder tuân theo, không tự đổi.

## 1. Bảng màu — đường đi ánh sáng của cả tập

| Đoạn | Nhiệt màu | RGB nguồn chính | Ý nghĩa |
|---|---|---|---|
| 第1章 phòng ngủ | **4.100K lam lạnh** | (0.62, 0.72, 1.00) | đèn thuỷ ngân đường phố, đêm sâu |
| 第1/3章 trong xe | 3.400K → 3.100K | (1.00, 0.84, 0.66) | nắng chiều muộn |
| 第2章 địa hình sương | 5.200K xám trung tính | (0.88, 0.90, 0.94) | khuếch tán toàn phần, không mặt trời |
| 第2章 cuối / 第3章 dốc | **3.600K vàng thấp góc** | (1.00, 0.82, 0.58) | sáng nhất tập, ngược sáng |
| 第4章 phòng ngủ | **3.200K → 3.000K ám ấm** | (1.00, 0.88, 0.74) | cùng đèn đường, đã trộn trời chớm sáng |

⚠ **Không bao giờ đảo chiều đường đi này.** Lạnh → trung tính → ấm nhất → ấm dịu. Không có đoạn
nào quay lại lạnh hơn đoạn trước nó. Đây là cách tập đạt phép thử "ngủ lại được".

⛔ Cấm: neon, magenta, xanh lá bão hoà, lưới phát sáng sci-fi, gradient tím-xanh kiểu tech.

## 2. Hai lớp mesh nam/nữ — quy ước cứng

- Lớp **NỮ**: viền ấm (1.00, 0.86, 0.72). Lớp **NAM**: viền lam nhạt (0.72, 0.82, 1.00).
- **Cả hai đều là mặt đất đặc** — cùng chất liệu sỏi, cùng nhận bóng, cùng đi được. ⛔ Tuyệt đối
  không dựng một lớp thành wireframe / bán trong suốt / "bóng ma": sẽ đọc thành "nhóm này thật,
  nhóm kia không".
- **Chồng khít từ tuổi 18 đến ~45** (Russac: đỉnh tuổi 20 có ở cả hai giới). Chỉ tách từ ~47.
- Vùng tách phải có **mặt cắt hở ở mép dải**, nhìn như tầng địa chất — đây là thứ làm người xem
  hiểu ngay mà không cần đọc nhãn.
- Nhãn hai lớp **hiện cùng lúc**, không hiện lần lượt (hiện lần lượt sẽ đọc thành "cái này rồi
  mới tới cái kia", làm nhóm nam thành phụ chú).
- ⛔ Không bao giờ vẽ **một** đường duy nhất rồi để lời đọc đính chính. Ràng buộc nguồn số 1.

## 3. Địa hình — vật lý bắt buộc

- **Sỏi là hình học thật**, không phải normal map: hạt 8–25mm, phân bố Poisson từ seeded PRNG,
  mỗi hạt có bóng tiếp xúc riêng. Đây là thứ làm mesh trông là đất chứ không phải lưới đồ thị.
- **Height fog theo cao độ địa hình**: chỗ cao sương dày, chỗ thấp sương mỏng. Nhất quán suốt tập —
  nó là lý do vật lý cho việc "xuống dốc thì nhìn xa được", và đó là nội dung, không phải hiệu ứng.
- **Bóng đổ có hướng** ở mọi cảnh địa hình, kể cả cảnh sương (nguồn khuếch tán vẫn có hướng trội).
  Không có bóng = mesh trông phẳng = hỏng cả ý đồ "nơi chốn".
- Cuối dốc (tuổi 87) **thoải dần rồi hoà vào ánh sáng**. ⛔ Không vực, không vách, không cổng,
  không vạch kết thúc, không đường chân trời cứng.

## 4. Light shaft — chi tiết đắt nhất của tập

- Dựng **thể tích**, ray-march trong shader. ⛔ Không billboard phẳng, không quad có texture gradient.
- Mật độ giảm theo hàm mũ từ khe rèm ra xa; **mép dải mềm dần theo khoảng cách**, không biên cứng.
- Hạt bụi trôi **lên trên** 0,8 cm/s (đối lưu nhiệt phòng), vị trí là hàm thuần của `t` từ seeded PRNG.
- Cùng nguyên lý tán xạ dùng lại cho **nắng trong xe** (S06, S19) — một quy ước, hai bối cảnh.

## 5. Góc máy mỏ neo — ghi lại và tái dùng chính xác

**S02 = S08 = S32 = S34**: 28mm, cao 0,45m so với sàn, ngẩng 62°, roll 0°, tĩnh tuyệt đối.
Dải sáng nghiêng 34° so với cạnh ngang khung, rộng 11cm trên trần.
**S07 = S23**: 85mm, tay trên vô lăng ở 1/3 dưới-trái.
⚠ Lưu thông số vào hằng số trong composition, đừng gõ lại bằng tay ở mỗi shot.

**Dịch chuyển dải sáng theo tập:** S02 gốc → S08 **+3cm xuống** → S32/S34 **+9cm xuống**.
Cùng một chiều, không đảo. Lý do vật lý: Trái Đất quay, đèn đường đứng yên.

## 6. Đồng hồ LED

Giờ hiển thị là **hàm thuần của `t`**. ⛔ Tuyệt đối không `Date.now`, `performance.now`,
`setInterval`, `setTimeout`. Dấu hai chấm **không nhấp nháy** (nhấp nháy = cần bộ đếm = phi tất định,
và làm người xem mất ngủ thêm).
Mốc: S01 `3:00` · S04 `3:00 → 3:01` · S08 `3:01 → 3:14` · S32 `3:00`.

## 7. Nhãn chữ trên màn hình

- Font **BIZ UDPGothic** (`assets/fonts/`). `await document.fonts.load()` **trước khi vẽ nhãn
  canvas đầu tiên** — font CJK ~4,6MB, vẽ trước khi font về thì metric sai rải rác, rất khó truy.
- Cỡ tối thiểu trên TV: nhãn chính **40px**, nhãn nguồn **26px**, dòng 4c **38px**.
- ⛔ Không hộp nền, không viền, không bóng đổ chữ. Chỉ chữ + α.
- **Mọi con số phải kèm nguồn + năm**, không có ngoại lệ:
  · `Russac et al. 2007 · Death Studies 31(6) · n=304 · 18–87歳 · 形状の再現図`
  · `調査2 · 女性113人 · 18–85歳 · テンプラー尺度`
  · `Sinoff 2017 · Frontiers in Medicine 4:11 · n=44組 · イスラエル`
  · `Carstensen, Isaacowitz & Charles 1999 · American Psychologist 54`
    + dòng bắt buộc 「理論 ― 不安を測った結果ではありません」
- Địa hình **luôn** kèm 「形状の再現図」 — nó là dựng lại hình dạng, không phải đồ thị đo.

## 8. Phụ đề

Sinh từ `voice/*.srt` bằng `scripts/gen-captions.mjs`. **≤22 ký tự toàn角, 1 dòng.**
⛔ Không cắt tay, không chép vào storyboard. Dòng 4c ở S34 là **đồ hoạ cố định**, khác phụ đề —
cả hai cùng tồn tại, đặt ở hai track khác nhau để không chồng nhau.

## 9. Motif lặp lại cần TRÁNH

- ⛔ **Hai shot liền nhau cùng cỡ cảnh + cùng góc** — trừ các cặp mỏ neo đã chỉ định (S02/S08,
  S07/S23, S32/S34), ở đó sự lặp lại **là nội dung**.
- ⛔ Chủ thể luôn ở giữa khung. Trong tập này chỉ **S29** đặt chủ thể chính giữa, và đó là chốt
  cú lật — nếu dùng bừa thì mất hiệu lực.
- ⛔ Lặp cùng một hướng chuyển động camera ba shot liên tiếp. Xen kẽ: đi tới → lùi ra → tĩnh →
  lên cao → hạ xuống.
- ⛔ Mọi cảnh địa hình đều nhìn từ bên hông. Phải xen góc tầm mắt (S09, S14, S16, S26, S28),
  góc trên cao (S10, S12, S18, S30) và góc sát đất (S31).

## 10. Tất định

Không `requestAnimationFrame`, `Date.now`, `performance.now`, `setTimeout`, `Math.random`.
Ngẫu nhiên → mulberry32 seeded. Không `+= dt` — mọi chuyển động là **hàm thuần của `t`**.
Timeline GSAP **paused**, đăng ký `window.__timelines["toshi-to-fuan"]` đúng dạng văn bản trong
chính file tập (StaticGuard quét văn bản).

## 11. Sau khi dựng xong — bắt buộc

`npm run check` PASS **không có nghĩa là hình đúng**.
Chạy `npx hyperframes snapshot` ở **10–15 mốc** rồi **mở `contact-sheet.jpg` ra nhìn**.
⚠ Tập có intro 2s: muốn xem giây cảnh X thì chụp ở **X+2**.

Mốc đề nghị (đã cộng 2s): `7` (S02 light shaft) · `100` (S06 xe) · `151` (S09 thẻ chương 2) ·
`196` (S12 đỉnh 20) · `250` (S15 **hai lớp mesh** — mốc quan trọng nhất) · `300` (S17 dốc xuống) ·
`366` (S19 thẻ chương 3) · `413` (S21 mức 8,1) · `480` (S24 hai nỗi sợ) · `600` (S27 SST) ·
`637` (S29 cú lật) · `660` (S30 giới hạn) · `720` (S32 phòng ngủ ấm) · `790` (S33 vệt trời) ·
`818` (S34 dòng 4c).

## 12. Phép thử cuối — đọc lại trước khi nộp composition

> **Người 54 tuổi xem xong lúc 3 giờ sáng có ngủ lại được không?**

Ba thứ phải đúng thì mới đạt:
1. Đường đi ánh sáng **đi xuống rồi ấm lên** — không có đoạn nào quay lại lạnh hơn đoạn trước.
2. **Không shot nào đen tuyệt đối quá 2s**; mọi cảnh đêm có lối ra bằng ánh sáng trong cùng khung.
3. **S34 tĩnh hoàn toàn** — không chuyển động, không hiệu ứng, tối dần đều.

Shot nào làm người ta nằm nghĩ thêm thì bỏ, dù đẹp tới đâu.
