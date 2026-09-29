# STORYBOARD — 定年のあと、なぜ友達ができないのか｜三つの条件

## METADATA

- **Slug:** `ashiba`
- **Tổng thời lượng dự kiến:** **851,28s ≈ 14:11** (dry-run `timing.json`), + intro 2s + outro 5s
  → **~858,3s** trên timeline hình.
  ⚠ Con số giây trong file này **chỉ để căn nhịp**. Thời lượng CHUẨN lấy từ `timing.json` sau
  khâu voice thật. **Mọi shot neo vào mã cue, không vào giây.**
  ⚠ `apply-lead-tail.mjs` dịch toàn bộ timeline hình **+2s**. Muốn snapshot giây X của cảnh thì
  chụp ở **X+2**.
- **Số shot:** **38** (S01–S38). Trung bình ~22,4s/shot. Ngắn nhất ~13s (S20 「二百時間です」),
  dài nhất ~38s (S27 FIREA ba vòng). **Không shot nào dưới 4 giây.**
- **Số cue:** 89 (C01–C89). **4 chương**, nhãn ở C01 / C16 / C31 / C58.
- **Nhạc nền:** một track chung `assets/bgm.mp3` cho cả tập. Không ghi audio theo shot.
  Chỉ shot có dòng `SFX` mới cần hiệu ứng riêng (lấy từ [AUDIO DIRECTION] của kịch bản).
- **Phụ đề:** ⛔ KHÔNG chép tay vào storyboard. Sinh từ `voice/*.srt` bằng
  `scripts/gen-captions.mjs` (**≤22 ký tự toàn角, 1 dòng**). Font **BIZ UDPGothic** — mục 8
  GHI CHÚ DỰNG HÌNH.
- **Loại visual:** **live-object 3D toàn tập.** Một vật thể duy nhất chở cả tập: **くさび式足場
  bao quanh một toà nhà bê tông**, dưới **nắng giữa trưa**. Không sơ đồ 2D, không đồ thị,
  không billboard phẳng, không mũi tên.

### Loại visual theo chương

| Chương | Cue | Thời lượng | Shot | Hình chủ đạo |
|---|---|---|---|---|
| **第1章 — 正午の定食屋** | C01–C15 | 0 → 132,4s | S01–S07 (7) | Quán cơm trưa nhìn từ chỗ 私; ghế đối diện trống. Ra ngoài 12h20: tường toà nhà cũ có lỗ bu-lông, vệt gỉ, bốn vết chân giàn |
| **第2章 — 三つの条件** | C16–C30 | 132,4 → 272,8s | S08–S14 (7) | Giàn giáo **tua ngược dựng lại**, ba thanh chống khớp vào, nhãn sáng lần lượt. Rồi soi ngược về quán cơm: ba điều kiện chỉ ra trên cái bàn bốn chỗ |
| **第3章 — 足場** | C31–C57 | 272,8 → 548,2s | S15–S27 (13) | Giàn giáo đầy đủ → **tháo từng thanh theo mốc đời** → 定年 cả giàn đổ liên hoàn, bụi mù trong nắng. Cảnh phụ: ba cột ống thép 50/90/200 giờ. Rồi chương giới hạn |
| **第4章 — 帰り道** | C58–C89 | 548,2 → 851,3s | S28–S38 (11) | FIREA: ba vòng đếm được → **hai tầng mật độ** (ngoài thưa, sát tường đặc) → 内閣府 → về đúng quán cơm ấy, ghế đối diện vẫn trống → toà nhà vẫn đứng |

⚠ **FIREA nằm TRONG 第4章** (S27b–S31), không phải chương riêng. Nó là chỗ tựa của chương chữa lành.

### Bốn cao trào hình (đầu tư nhất)

1. **S06 · C08–C09** — 私 ra khỏi quán 12h20. Cắt từ ồn sang tĩnh. Lần đầu thấy bức tường:
   lỗ bu-lông, vệt gỉ chảy dài, bốn vết chân giàn trên bê tông. **Người xem chưa biết đó là gì.**
2. **S13 · C29–C30** — một khung duy nhất: bàn bốn chỗ đủ cả ba điều kiện, và chỗ 私 cách hai mét
   không có cái nào. Ba nhãn 近接性 / 予定しない再会 / 心を開ける場 sáng bên kia, **tắt bên này**.
3. **S21 · C40–C42** — **定年: cả giàn tháo trong một ngày.** Chuỗi ống thép đổ liên hoàn, rơi có
   vật lý đúng, ống tròn **lăn**, bụi bốc mù trong nắng gắt. Mỗi cú rơi có **bóng cứng chạy trên
   tường** — người xem thấy cú rơi hai lần. **Cao trào của tập.**
4. **S31 · C65 + S37 · C83–C84** — hai tầng mật độ FIREA, rồi toà nhà đứng nguyên. **Câu kết dựng
   thành hình: cái rơi là giàn giáo, cái đứng là con người.**

### Khung nguồn thumbnail

**S21** (C40–C41), khoảnh khắc ba thanh chống ngang đã rời khỏi khung giàn và đang rơi, bắt nắng
trưa gắt, toà nhà phía sau nguyên vẹn. Đúng concept bìa đã duyệt (cặp 1: 「なぜ外れた？」).
Render agent bắt frame ở khoảng giữa S21 (nhớ **+2s** vì intro) làm nguồn cho
`output/_assets/ashiba/`.

---

## ⛔ RÀNG BUỘC TUYỆT ĐỐI CỦA TẬP NÀY

**1. ⛔ THỜI GIAN TRONG CẢNH KHÔNG ĐƯỢC TRÔI.**
Mặt trời **đứng yên ở thiên đỉnh suốt 851 giây**. Không mọc, không lặn, không ngả chiều.
Góc bóng đổ **không đổi** từ S01 tới S38. Chuyển sắc theo chặng làm bằng **độ trong của không khí**
(trưa trong → trưa hanh bụi → trưa dịu sau khi bụi lắng), ⛔ **không bằng cách tối cảnh đi**,
⛔ không đổi nhiệt màu mặt trời sang cam. Lý do: ở 帰り道 *không có gì đổi ở bên ngoài* — đó chính
là nội dung. Cho hoàng hôn vào là **phản bội câu C79** 「外のことは、本当に何ひとつ変わっていない」.

**2. ⛔ KHÔNG KÊ ĐƠN BẰNG HÌNH.**
Ở 帰り道 (S33–S38): 私 về đúng quán cơm ấy, đúng giờ trưa ấy, **ghế đối diện VẪN TRỐNG**.
⛔ Không cho 私 bắt chuyện với ai · ⛔ không thêm nhân vật mới · ⛔ không ai quay sang nhìn 私 ·
⛔ không bàn tay đưa ra · ⛔ không cảnh nào gợi ý hội nhóm / lớp học / công viên / sinh hoạt khu phố ·
⛔ không giàn giáo nào được **dựng lại** ở cuối. Mọi thứ đó là kê đơn lách qua mục "Không kê đơn".

**3. ⛔ KHÔNG hình nào về SST / Carstensen.**
⛔ Không "người chủ động chọn ít bạn hơn" · ⛔ không đồ thị mạng lưới co lại theo tuổi ·
⛔ không trục thời gian đời người có đường cong đi xuống · ⛔ không hình so sánh "trẻ vs già".
Toàn bộ cơ chế trong tập là **bên ngoài**: điều kiện môi trường bị tháo. Hình phải nói đúng thế.
Ngay cả C68–C70 (「年のせいではない」) cũng dựng bằng **giàn giáo dừng rơi**, không bằng đồ thị tuổi.

**4. Con số trên hình phải kèm NGUỒN + NĂM** (mục 6 GHI CHÚ). Và:
⛔ **KHÔNG BAO GIỜ ghi 「アダムスの研究」「アダムスの論文」.**
Nhãn đúng: **「社会学者レベッカ・G・アダムスが、20世紀半ばからの研究をまとめたもの」**
(dạng rút gọn trên hình: **「R・G・アダムス／20世紀半ばの研究のまとめ」**).

**5. ⛔ KHÔNG dựng người có mặt.** Người trong quán cơm dựng bằng **hình khối áo sơ mi, vai, tay,
thẻ nhân viên đung đưa** — ⛔ không mặt, không mắt, không biểu cảm, không khuôn mặt ngạc nhiên.
Ống kính giữ ở tầm bàn ăn; đầu người **cắt trên mép khung** hoặc nằm ngoài vùng nét.

**6. Không cắt cảnh nhanh hơn 4 giây. Không rung máy ảo, không zoom giật, không lens flare.**

---

# 第1章 — 正午の定食屋 (C01–C15) · 7 shot

Cả chương ở **trong và ngay ngoài quán cơm**. Giàn giáo **chưa xuất hiện một lần nào** — chỉ có
**dấu vết** của nó ở S06–S07, và người xem chưa biết đó là gì. Ánh sáng: **nắng trưa xiên qua cửa
kính quán**, vệt sáng có bụi lơ lửng. Camera ở **tầm mắt người đang ngồi ăn** (~1,15m) suốt chương.

## S01 · C01–C02 · CHƯƠNG 1 🏷 THẺ CHƯƠNG
SCENE   Mặt bàn formica quán cơm, nhìn từ chỗ 私. Khay 日替わり vừa đặt xuống: cơm, canh miso,
        đĩa chính, đũa còn trong bao giấy. Xung quanh mờ ngoài vùng nét — chỉ nghe thấy
CAMERA  tĩnh 50mm, cao 1,15m, **chúi xuống 22°** (góc nhìn người ngồi ăn). Khẩu độ mở, DOF nông
        (f/2.0) — chỉ khay cơm nét, cả quán nhoè. Chủ thể đặt **1/3 dưới-trái**, không giữa khung
ELEMENT 0s khay cơm cận, hơi nóng bốc lên từ bát canh (nhiễu FBM chậm, hàm thuần của t) ·
        6s đôi đũa được rút khỏi bao giấy · 12s DOF bắt đầu mở rộng rất chậm — hậu cảnh hiện
        thành hình người (áo sơ mi trắng, vai, không có mặt) ·
        Ánh sáng: nắng trưa qua cửa kính bên trái, **vệt sáng cứng đổ chéo lên mặt bàn**, trong
        vệt đó thấy bụi lơ lửng (seeded PRNG, quỹ đạo là hàm của t)
        🏷 Thẻ chương **第1章 — 正午の定食屋** hiện ở 2s, góc dưới-trái, giữ 5s, fade
SFX     昼の定食屋のざわめき vào ngay từ 0s: bát đũa chạm nhau, tiếng nói chuyện chồng lớp.
        ⚠ **Có tiếng người từ giây đầu tiên** — đây là tập ban ngày có người
CUT     cắt thẳng sang S02

## S02 · C03 · live-object
SCENE   Cùng bàn, camera lùi một bước. Thấy trọn chỗ ngồi của 私: khay cơm, cốc nước, và **túi vải
        đặt trên ghế bên cạnh** — không có cặp tài liệu, không có thẻ nhân viên
CAMERA  dolly-back chậm 0,4m/8s, 50mm giữ nguyên. Kết ở cỡ cảnh trung
ELEMENT 0s khay cơm · 4s vào khung: cổ áo 私 — **áo polo, không cà vạt, không thẻ đeo cổ** (đối lập
        với cả quán) · 8s túi vải trên ghế bên; trên bàn **không có điện thoại công ty, không sổ tay**
        ⚠ Chi tiết chốt chương: 私 là người duy nhất trong khung không đeo gì ở cổ
CUT     cắt sang S03 khi camera dừng hẳn

## S03 · C04–C05 · live-object
SCENE   Bàn bốn chỗ bên kia lối đi. Bốn người ngồi chen — áo sơ mi trắng, **thẻ nhân viên đung đưa
        trên dây lanyard**. Tay gắp, tay chỉ, một người cười ngả người ra sau
CAMERA  **pan ngang chậm sang phải** 18°/12s, 50mm. Lấy bàn kia ở **1/3 phải**, chừa 1/3 trái là
        khoảng trống của bàn 私 (mép khay còn trong khung, nhoè)
ELEMENT 0s bốn bộ vai áo sơ mi, cắt đầu trên mép khung — **KHÔNG có mặt** ·
        4s bốn thẻ nhân viên lắc theo cử động (con lắc tắt dần, hàm thuần của t, pha lệch nhau) ·
        8s một bàn tay đập nhẹ xuống bàn, cả bốn vai rung lên vì cười ·
        12s **khoảng cách vật lý đọc được**: bốn người ngồi cách nhau <50cm, ghế chen vào nhau
        ⚠ Đây là 近接性 hiện ra **bằng hình trước khi được gọi tên** — dựng cho thấy, đừng chú thích
SFX     笑い声 một lần ở ~10s, nhô lên trên nền ざわめき rồi chìm lại
CUT     cắt sang S04 — cùng lúc pan dừng

## S04 · C06 · live-object ⭐ KHUNG MỎ NEO
SCENE   **Cái ghế đối diện 私.** Trống. Chỉ có ghế nhựa, mặt bàn trống trước nó, không khay, không
        cốc, không đũa. Ánh nắng cứng đổ qua mặt bàn trống đó
CAMERA  tĩnh tuyệt đối, 85mm, cao 1,15m. Ghế đặt **chính giữa khung** — cả tập chỉ khung này và
        S35 đặt chủ thể ở giữa. Đó là lý do nó đọng lại
ELEMENT 0s ghế trống, mặt bàn trước nó sạch bong · toàn shot **không có gì chuyển động** trừ
        bụi trong vệt nắng và bóng cứng của chấn song cửa sổ đổ lên mặt bàn — **bóng đứng yên**
        (mặt trời không di chuyển, luật 1)
        ⚠ Shot ngắn (~3,7s) nhưng **đầy** — đây là ngoại lệ duy nhất dưới 4s được phép vì nó là
        một câu duy nhất, tĩnh tuyệt đối, và nối liền vào S05. Nếu render thấy cụt: kéo dài sang
        0,8s đầu của C07
CUT     giữ 0,6s sau khi lời đọc hết, rồi cắt sang S05

## S05 · C07 · live-object
SCENE   Khay cơm của 私: **đã sạch**. Bát úp, đũa gác ngang. Bên kia lối đi, bốn khay của bàn bốn
        chỗ còn **quá nửa** — họ vừa ăn vừa nói nên chậm
CAMERA  **rack focus**: bắt đầu nét ở khay sạch (tiền cảnh), 6s sau chuyển nét sang bốn khay còn đầy
        ở hậu cảnh. 85mm, f/2.0. Camera không di chuyển — chỉ tiêu cự đổi
ELEMENT 0s khay 私 sạch, đũa gác ngang trên bát úp · 6s nét chuyển — bốn khay bên kia còn đầy,
        tay vẫn đang gắp, miệng vẫn đang nói · 10s nét quay lại khay sạch, lần này **thấy cả
        cái bóng ngắn của đũa** đổ trên khay — nắng đứng bóng
        ⚠ Đối chiếu là toàn bộ nội dung shot này. Không cần chữ
CUT     cắt sang S06 cùng tiếng cửa kéo

## S06 · C08–C09 · live-object ⭐ CAO TRÀO 1
SCENE   Cửa kéo mở. Bước từ trong quán ra vỉa hè. **Ồn → tĩnh trong một nhịp.** Trước mặt: con
        phố trưa vắng, và bên kia đường là **mặt tường bê tông của toà nhà văn phòng cũ**
CAMERA  **subjective dolly-out qua khung cửa**, 35mm (rộng hơn cả chương — cảm giác không gian mở
        đột ngột). Ra khỏi cửa rồi **dừng lại hẳn**, không đi tiếp. Tường toà nhà ở 2/3 phải khung
ELEMENT 0s trong quán, ồn, ấm · 2s qua khung cửa — **exposure giật sáng lên 1,5 stop trong 0,5s**
        rồi ổn định (mắt ra nắng), đây là cú chuyển duy nhất được phép nhanh ·
        4s **bóng chân 私 đổ ngay dưới chân, RẤT NGẮN** — mặt trời gần thiên đỉnh, đọc được là
        chính ngọ · 8s camera dừng; mặt tường bê tông vào nét:
        ⭐ **LỖ BU-LÔNG** xếp thành lưới đều (khoảng 1,8m × 1,8m — đúng module くさび式足場), và
        **dưới mỗi lỗ là một VỆT GỈ CHẢY DÀI** màu nâu cam, dài 30–60cm, mép loang không đều ·
        14s camera hạ nhẹ xuống nền bê tông vỉa hè: **BỐN VẾT CHÂN GIÀN** — bốn ô vuông bê tông
        **sạch hơn, sáng hơn** phần xung quanh, mép sắc, nơi mưa nắng không chạm tới suốt 40 năm
        ⚠ **Người xem CHƯA biết đó là gì.** ⛔ Không nhãn, ⛔ không mũi tên, ⛔ không zoom nhấn.
        Chỉ để nó ở đó. Nó sẽ được gọi tên ở S15
SFX     引き戸が開く音 ở 1,5s. Ngay sau đó **ざわめき bị bóp xuống -18dB và lọc lowpass** như nghe
        qua kính — thay bằng **屋外の広い静けさ**: một xe chạy rất xa, tiếng ve mùa hè rất mỏng
CUT     cắt sang S07

## S07 · C10–C15 · live-object
SCENE   Vỉa hè trưa. Bóng ngắn dưới chân. Con phố trải dài và **trống**. Rồi camera từ từ ngẩng lên
        nhìn mặt tường có lỗ bu-lông — lần này lâu hơn
CAMERA  **tilt-up rất chậm** từ nền bê tông (có bốn vết chân giàn) lên mặt tường, 20°/24s, 35mm.
        Ở 32s bắt đầu **dolly-in nhẹ** về phía tường, dừng trước khi tới
ELEMENT 0s bốn vết chân giàn cận cảnh, mép ô vuông sắc, bê tông trong ô **không bạc màu** ·
        8s tilt lên, mặt tường vào khung — lưới lỗ bu-lông trải lên cao khỏi khung ·
        16s vệt gỉ dưới từng lỗ đọc rõ dưới nắng gắt — **chỉ nắng trưa mới thấy** ·
        24s camera dừng tilt, giữ mặt tường đầy khung; **bụi lơ lửng bắt nắng** trước mặt tường ·
        32s dolly-in nhẹ 0,3m — như đang cố hiểu mình đang nhìn cái gì
        Ánh sáng: mặt trời ~82° cao độ. **Bóng cứng, mép sắc, ngắn.** Tương phản mạnh; vùng tối
        không bị bẹt đen (fill từ bounce bê tông, ~12% intensity)
CUT     **cắt cứng sang S08** đúng lúc lời đọc kết 「条件の話だったんです」 — không hoà tan

---

# 第2章 — 三つの条件 (C16–C30) · 7 shot

Chương này là **TUA NGƯỢC**: giàn giáo tự dựng lại quanh toà nhà. Chuyển động lắp ghép, ⛔ không
rơi. Ba thanh chống ngang khớp vào và nhãn sáng lần lượt. Nửa sau quay về quán cơm — nhưng lần này
**cùng một khung có cả ba điều kiện và chỗ trống của 私**.

## S08 · C16–C18 · CHƯƠNG 2 🏷 THẺ CHƯƠNG
SCENE   Mặt tường lỗ bu-lông (nối thẳng từ S07). **Một ống thép mạ kẽm trượt vào khung từ dưới lên
        và khớp vào hai lỗ bu-lông** — tiếng kim loại nhẹ. Rồi ống thứ hai. Thứ ba. Giàn giáo bắt
        đầu tự dựng
CAMERA  tĩnh 35mm lúc đầu, từ 14s **craning-up chậm** dọc mặt tường theo tốc độ giàn dựng lên
ELEMENT 0s tường trống · 3s ống thép đầu tiên khớp vào: **hình trụ thật, đường kính 48,6mm**
        (chuẩn 単管), PBR metalness 0,88 · roughness 0,42 · **vân hoa kẽm loang** trên bề mặt —
        chi tiết này là thứ tách khỏi 図解 2D ·
        8s くさび (chốt nêm) đóng vào ổ — **thấy rõ cái nêm và lỗ ổ**, không phải hai ống dính vào nhau ·
        14s khung giàn dựng lên theo tầng, camera craning theo · 24s thấy giàn cao 4 tầng, **sàn
        công tác thép dập** (có lỗ chống trượt) lắp vào · 30s lưới che màu **xanh lá nhạt** căng lên
        ⚠ Chuyển động là **hàm thuần của t**, lắp ghép đều, ⛔ không rơi, ⛔ không +=dt
        Nhãn nguồn góc dưới-phải từ 6s: **「R・G・アダムス／20世紀半ばの研究のまとめ」** (mục 4 ràng buộc)
        🏷 Thẻ chương **第2章 — 三つの条件** ở 2s, giữ 5s
SFX     金属が軽く触れ合う音 mỗi lần một ống khớp vào. ざわめき đã tắt hẳn
CUT     giữ liên tục sang S09

## S09 · C19 · live-object · 条件①
SCENE   Cận cảnh **thanh chống ngang thứ nhất** đang trượt vào vị trí, thấp nhất trong ba thanh.
        Nó khớp, chốt nêm đóng xuống, và một nhãn sáng lên bên cạnh nó
CAMERA  tĩnh 85mm, thanh đặt **1/3 trên-trái**. Sau 4s **orbit ngang rất chậm** 8°/7s để thấy
        thanh là **vật thể tròn có khối**, không phải đường kẻ
ELEMENT 0s thanh thứ nhất trượt vào · 2s くさび đóng: **ống rung một nhịp ngắn rồi tắt** (damped
        sine, hàm của t) · 3s nhãn canvas sáng lên: **「近接性」** — chữ trắng trên nền trong suốt,
        BIZ UDPGothic Bold, đặt cạnh thanh, **không che thanh** ·
        5s orbit bắt đầu — thấy bóng cứng của thanh chạy trên mặt tường phía sau
        ⚠ Ba thanh chống phải **nhận diện được riêng** suốt tập: thanh ① **thấp nhất, bên trái** ·
        ② **giữa, chính diện** · ③ **cao nhất, bên phải**. Vị trí này KHÔNG đổi từ S09 tới S38
CUT     cắt sang S10

## S10 · C20–C21 · live-object · 条件②③
SCENE   Thanh thứ hai rồi thanh thứ ba khớp vào. Nhãn sáng lần lượt. Cuối shot: cả ba thanh
        cùng trong một khung, ba nhãn cùng sáng
CAMERA  từ cận S09 **dolly-back + tilt-up** đồng thời, 85mm → 40mm, kết ở toàn cảnh mặt giàn
ELEMENT 0s thanh ② trượt vào giữa khung, chốt đóng, rung một nhịp · 3s nhãn **「予定しない再会」** ·
        8s camera lùi, thanh ③ khớp vào cao hơn bên phải · 11s nhãn **「心を開ける場」** ·
        15s toàn khung: ba thanh chéo nhau tạo thành khung cứng, **ba nhãn cùng sáng ở ba độ cao
        khác nhau** — đọc được là ba thứ riêng biệt, không phải một danh sách ·
        Ba thanh có **sắc độ hơi khác nhau** (① kẽm mới sáng · ② kẽm đã xỉn · ③ kẽm có vệt xước
        dài) để nhận ra khi rơi ở 第3章
CUT     hoà tan sang S11 — **hoà tan duy nhất trong tập**, đánh dấu chuyển từ vật sang suy nghĩ

## S11 · C22–C24 · live-object
SCENE   Camera lùi ra rất xa: toà nhà + giàn giáo đầy đủ trong khung. Rồi **ba nhãn còn lại, mọi
        thứ khác mờ đi** — nhưng ⛔ không tối cảnh: làm bằng **DOF**, không bằng exposure
CAMERA  dolly-back dài 20s tới toàn cảnh 28mm, rồi **giữ tuyệt đối tĩnh** 12s
ELEMENT 0s giàn giáo đầy đủ, toà nhà bên trong · 8s lùi ra thấy trọn khối: giàn bao **ba mặt**,
        toà nhà bê tông 6 tầng bên trong, cửa sổ phản xạ trời trưa ·
        16s DOF thu hẹp — chỉ ba thanh chống và ba nhãn còn nét, giàn còn lại nhoè ·
        24s **một nhãn thứ tư thử hiện ra rồi TẮT NGAY**: 「性格」 xuất hiện mờ 0,6s rồi biến mất,
        ⚠ không có ống thép nào tương ứng với nó. Đây là C22 dựng thành hình: trong ba thứ này
        không có cái nào là tính cách · 32s ba nhãn giữ nguyên
        ⚠ Ba nhãn đều ở **bên ngoài** toà nhà, gắn vào giàn giáo — ⛔ không nhãn nào gắn lên toà nhà.
        Đó là C24 「環境の話です」 dựng thành hình
CUT     cắt sang S12

## S12 · C25–C28 · live-object
SCENE   **Quay về quán cơm** — cùng khung S03 (bàn bốn chỗ). Nhưng lần này ba nhãn từ giàn giáo
        **đi theo vào**, gắn lên ba thứ trong quán
CAMERA  tĩnh 50mm đúng góc S03 (khung lặp lại có chủ ý — nhận ra ngay). Từ 22s **dolly-in nhẹ** 0,3m
ELEMENT 0s bàn bốn chỗ, bốn bộ vai áo sơ mi, thẻ đung đưa ·
        6s nhãn **「近接性」** sáng lên gắn vào **khoảng cách giữa bốn cái ghế** (một vạch đo mảnh
        nối hai ghế, không phải mũi tên) ·
        14s nhãn **「予定しない再会」** gắn vào **cửa kéo** — nơi từng người bước vào riêng lẻ,
        không ai hẹn ai. Dựng bằng: ba bóng người lần lượt qua cửa, ở ba thời điểm lệch nhau ·
        22s nhãn **「心を開ける場」** gắn vào **nút cà vạt đã nới lỏng** ở cổ áo một người — cận
        cảnh nhỏ, đọc ngay là "ở đây người ta hạ phòng thủ" ·
        30s cả ba nhãn cùng sáng trên cùng một bàn
        ⚠ Ba nhãn gắn vào **vật thật trong quán**, ⛔ không phải vào khung chú thích nổi
SFX     昼の定食屋のざわめき quay lại từ 0s, **薄く・遠く** (-12dB so với S03)
CUT     cắt sang S13

## S13 · C29–C30 · live-object ⭐ CAO TRÀO 2
SCENE   **Một khung duy nhất chứa cả hai bên.** Bên phải: bàn bốn chỗ, ba nhãn sáng. Bên trái,
        cách đúng hai mét: chỗ 私 — khay sạch, ghế đối diện trống, **không nhãn nào**
CAMERA  tĩnh 35mm, **camera đặt ở lối đi giữa hai bàn**, cao 1,15m. Bố cục chia đôi khung theo
        chiều dọc. ⛔ Không cắt qua lại giữa hai bên — phải ở CHUNG một khung, đó là toàn bộ shot
ELEMENT 0s cả hai bàn trong khung, ba nhãn sáng bên phải · 4s một vạch đo mảnh hiện ra giữa hai
        bàn: **「2m」** — chỉ con số, không chữ nào khác ·
        9s **ba ổ chốt nêm RỖNG hiện lên phía bên trái**, ở đúng ba độ cao tương ứng ba nhãn bên
        phải — ổ có hình, có bóng, nhưng **không có ống thép nào cắm vào** ·
        14s ba ổ rỗng giữ nguyên, không có gì lấp vào
        ⚠ Đây là cú của chương: **cả ba có thật, cách hai mét, và không thuộc về 私**.
        ⛔ Không chữ giải thích. Ba cái ổ rỗng nói hết
SFX     ざわめき **cắt phựt ở 9s** — im hẳn 2s, rồi vào lại rất mỏng
CUT     cắt sang S14

## S14 · C30 (đuôi) · live-object
SCENE   Cận cảnh ghế đối diện trống của 私, lần thứ hai (nhắc lại S04 nhưng **khác cỡ cảnh và
        khác góc** — lần này từ trên chếch xuống 40°, ghế lệch sang 1/3 phải)
CAMERA  tĩnh 85mm, cao 1,6m chúi 40°. ⚠ Cố ý KHÁC S04 (S04: ngang tầm, giữa khung) — cùng chủ thể,
        khác cách nhìn. Đây là quy tắc chống rập khuôn của tập
ELEMENT 0s ghế trống, mặt bàn sạch · 5s bóng cứng của chấn song cửa sổ đổ lên mặt bàn — **đúng
        cùng một góc bóng như S04**, vì mặt trời không di chuyển (luật 1) ·
        Trên mặt bàn trống: **không có gì** — không khay, không cốc, không ổ chốt, không nhãn
CUT     **cắt cứng sang S15** cùng tiếng kim loại trầm

---

# 第3章 — 足場 (C31–C57) · 13 shot

Chương dài nhất (275s, 32%). Ba phần: **gọi tên giàn giáo** (S15–S18) → **tháo từng thanh**
(S19–S21) → **Hall 2018 và chương giới hạn** (S22–S27). Đây là chỗ nắng trưa gắt **trả công**.

## S15 · C31–C32 · CHƯƠNG 3 🏷 THẺ CHƯƠNG
SCENE   Công trường thật, nắng trưa. Giàn giáo くさび式 bao quanh một toà nhà — lần đầu thấy nó
        như **vật có thật ở đời**, không phải ẩn dụ. Camera đi bộ quanh chân giàn
CAMERA  **dolly ngang chậm dọc chân giàn**, 0,5m/s, 35mm, cao 1,6m (tầm mắt người đứng).
        Ống thép chạy qua tiền cảnh liên tục — tạo nhịp mà không cần cắt
ELEMENT 0s chân giàn: **ジャッキベース** (chân kích điều chỉnh) đặt trên tấm 敷板 gỗ ·
        6s ống đứng (支柱) có **フランジ** (ổ nêm) cách nhau đều 45cm dọc thân — chi tiết nhận
        diện くさび式 ·
        12s **sàn công tác thép dập** với lỗ chống trượt, thấy nắng lọt qua lỗ đổ **đốm sáng
        lên nền bê tông** · 18s **巾木** (ván chặn chân) màu vàng dọc mép sàn ·
        24s lưới che xanh lá nhạt phần phật nhẹ (gió trưa, hàm sin của t, biên độ nhỏ)
        Ánh sáng: **mặt trời 82°**. Bóng của toàn bộ giàn giáo đổ xuống nền **ngắn, sắc, thành
        một lưới ô vuông chạy trên bê tông** — bóng này là nhân vật thứ hai của chương
        🏷 Thẻ chương **第3章 — 足場** ở 2s, giữ 5s
SFX     低い金属音. 鉄パイプが組み上がっていく質感 — tiếng công trường xa, không rõ tiếng người
CUT     cắt sang S16

## S16 · C33–C34 · live-object
SCENE   **Chồng hình:** giàn giáo và hành lang văn phòng. Ba thứ của đời đi làm lần lượt khớp vào
        đúng ba thanh chống ngang
CAMERA  tĩnh 50mm ở toàn cảnh mặt giàn, **ba lần zoom-in nhẹ rồi lùi lại** — mỗi lần vào một thanh,
        mỗi nhịp ~6s. ⚠ Zoom chậm và đều, ⛔ không giật
ELEMENT 0s giàn đầy đủ · 3s thanh ① sáng lên, trong lòng ống **hiện rất mờ** một hành lang văn
        phòng nhìn dọc — ⚠ dựng bằng **phản xạ méo trên bề mặt ống tròn**, không phải video dán lên ·
        9s thanh ② sáng, phản xạ trên nó là **cửa thang máy đang mở** ·
        16s thanh ③ sáng, phản xạ là **dãy đèn lồng đỏ của quán nhậu** — chỉ ánh sáng, không có người ·
        22s cả ba tắt phản xạ, trở lại là ống thép trần
        ⚠ Phản xạ phải **méo theo độ cong ống trụ** — đó là bằng chứng nó là vật 3D thật
CUT     cắt sang S17

## S17 · C35–C36 · live-object
SCENE   Toàn cảnh giàn giáo, đứng im hoàn toàn. Không có gì xảy ra. Đây là shot **"không ai nhìn
        nó"** — cố ý bình thường đến mức người xem lướt qua
CAMERA  **tĩnh tuyệt đối** 28mm, 21s không một chuyển động camera nào. Giàn giáo **không đặt giữa
        khung** — lệch phải, chừa 1/3 trái là trời xanh trống
ELEMENT 0s giàn giáo im · toàn shot chỉ ba thứ chuyển động: **bụi trong nắng**, **lưới che phập
        phồng rất nhẹ**, và **một sợi dây buộc đầu ống lắc**. Không hơn ·
        10s nhãn nhỏ góc dưới-phải: **「四十年・毎日・無料」** — chữ nhỏ, không hộp nền ·
        16s nhãn tắt
        ⚠ Shot này cố ý "không có gì" — nó là C36 「組んである間は、誰も見ていません」 dựng thành
        hình. Nhưng vẫn có mốc thay đổi mỗi 6–8s (nhãn hiện/tắt, dây lắc) nên không chết
CUT     cắt sang S18 cùng tiếng ốc vặn

## S18 · C37 · live-object
SCENE   Cận cảnh **một cái chốt nêm** đang được nới. Nêm nhích lên từng chút. Ống chưa rời
CAMERA  macro 100mm, cận sát, DOF cực nông. Chốt ở **1/3 dưới-phải**
ELEMENT 0s chốt nêm đóng chặt, thấy **vết búa** trên đầu nêm và **gỉ đọng ở khe** ·
        3s nêm nhích lên 4mm — bụi gỉ rơi xuống · 6s nêm nhích tiếp, **khe hở giữa ống và ổ
        mở ra 1mm** — ánh nắng lọt qua khe thành một vạch sáng ·
        ⚠ Chưa rơi. C37 nói 「一度に外れたわけではありません」 — shot này phải **chậm và chưa xong**
SFX     金属が一本、外れる音 — nhưng chỉ tiếng nới, chưa tiếng rơi
CUT     cắt sang S19

## S19 · C38 · live-object · 一本目が落ちる
SCENE   **Thanh ① rơi.** Rời khỏi ổ, rơi tự do dọc mặt tường, đập xuống nền bê tông, **nảy một lần,
        lăn, dừng lại**
CAMERA  tĩnh 35mm ở toàn cảnh mặt giàn, cao 1,6m. **Camera không đuổi theo vật rơi** — để nó rơi
        ra khỏi khung phía dưới rồi khung giữ nguyên nghe tiếng đập. ⛔ Không slow-motion giật
ELEMENT 0s thanh ① ở vị trí · 2s rời ổ, **rơi tự do g = 9,8 m/s²**, từ độ cao ~4,5m → ~0,96s chạm đất ·
        ⭐ **BÓNG CỨNG CỦA THANH CHẠY TRÊN MẶT TƯỜNG** đồng thời với cú rơi — người xem thấy cú
        rơi **hai lần**, một ở vật, một ở bóng. ⚠ Bóng phải **cùng gia tốc**, cùng pha, và **méo
        theo mặt tường không phẳng** (gờ, ô cửa) ·
        3s chạm đất: **nảy, hệ số phục hồi e ≈ 0,35**, nảy thứ hai thấp hẳn, thứ ba gần như không ·
        4,5s ⭐ **ỐNG TRÒN THÌ LĂN, KHÔNG TRƯỢT** — lăn không trượt (v = ωr), lăn chậm dần do ma
        sát lăn, **kêu lạch cạch trên mặt bê tông không phẳng**, dừng sau ~2,3m ·
        7s nhãn 「近接性」 của thanh ① **mờ đi rồi tắt** — không vỡ, không nổ, chỉ tắt ·
        ⚠ **Tất định**: mô phỏng là **hàm thuần của t** (giải tích, không tích phân từng frame).
        ⛔ Không `+= dt`. ⛔ Không `Math.random`. Ngẫu nhiên (hướng lăn, độ nảy) lấy từ mulberry32
        seed cố định
        Nhãn mốc đời ở góc dưới-trái từ 1s: **「学校を出たとき」**, tắt ở 8s
SFX     落下音 → バウンド → 転がり → 止まる → そのあと静けさ. ⚠ Tiếng đập phải **có phản âm của
        khoảng đất trống**, không phải tiếng khô trong phòng
CUT     cắt sang S20

## S20 · C39 · live-object · 二本目が落ちる
SCENE   **Thanh ② rơi.** Cùng cơ chế nhưng **khác góc máy hoàn toàn**: lần này nhìn **từ dưới lên**,
        thanh rơi về phía camera rồi lệch sang
CAMERA  tĩnh **low-angle 24mm**, camera đặt sát nền ngửa lên 55°. Giàn giáo dựng đứng chiếm khung.
        ⚠ Cố ý khác S19 (S19: ngang tầm mắt, toàn cảnh) — cùng sự kiện, khác cách nhìn
ELEMENT 0s nhìn ngược lên khung giàn, trời trưa chói ở khe giữa các ống ·
        3s thanh ② rời ổ, rơi **về phía camera**, to dần rất nhanh, lệch sang trái ra khỏi khung ·
        ⭐ Bóng của nó **quét ngang qua ống kính** — một nhịp tối 0,2s trên toàn khung ·
        4s tiếng đập ngoài khung · 5s camera **vẫn không động**, chỉ còn khung giàn thiếu một thanh
        và bụi bốc lên từ dưới bay vào vệt nắng ·
        9s nhãn 「予定しない再会」 tắt
        Nhãn mốc đời: **「転勤・引っ越しのとき」** từ 1s, tắt ở 9s
CUT     cắt sang S21

## S21 · C40–C42 · live-object ⭐⭐ CAO TRÀO 3 · THUMBNAIL
SCENE   **定年. Cả giàn tháo trong một ngày.** Ba thanh còn lại rời cùng lúc, rồi chuỗi ống thép
        đổ liên hoàn từ trên xuống. Bụi bốc mù trong nắng gắt. Toà nhà **không suy suyển**
CAMERA  **bắt đầu ở toàn cảnh 3/4** (thấy cả mặt giàn và mặt tường bên), 35mm, cao 2m.
        Từ 10s **dolly-back rất chậm** ra xa 3m, kết ở toàn cảnh có cả nền trời.
        ⛔ Không rung máy. ⛔ Không cắt trong lúc đổ — **một take liên tục**, đó là sức của shot
ELEMENT 0s giàn giáo đang thiếu hai thanh, thanh ③ còn treo ·
        3s ⭐ **thanh ③ rời**, và **cùng lúc** hai thanh chống khác — ba vật rơi song song, **lệch
        pha nhẹ**, mỗi vật một quỹ đạo riêng (seed cố định) ·
        ⭐ **BA BÓNG CỨNG CHẠY XUỐNG MẶT TƯỜNG CÙNG LÚC** — ba vệt tối dọc, đây là khung thumbnail ·
        5s chạm đất, nảy, **lăn theo ba hướng khác nhau** — ống tròn lăn không trượt, va vào nhau,
        đổi hướng theo bảo toàn động lượng ·
        7s chuỗi đổ liên hoàn bắt đầu: khung giàn mất liên kết ngang → **các tầng gập xuống theo
        thứ tự từ trên xuống**, sàn công tác trượt ra, lưới che tuột và bay chậm (cản không khí) ·
        14s **BỤI BỐC MÙ** — bụi là vật liệu thật: hạt bắt nắng trưa, **thể tích, có bóng riêng đổ
        lên mặt tường**, ⛔ không phải sprite phẳng. Mật độ tăng theo hàm của t, đỉnh ở 20s ·
        22s ⭐ **TOÀ NHÀ HIỆN RA NGUYÊN VẸN qua màn bụi** — bê tông không sứt, cửa sổ không vỡ,
        không một vết nứt. ⚠ Đây là FIREA đặt trước, bằng hình, trước cả khi nghe tên nó ·
        30s ống thép nằm ngổn ngang dưới chân. Bụi bắt đầu lắng
        Nhãn mốc đời: **「定年の日」** từ 2s, tắt ở 10s. Sau đó không nhãn nào nữa
        ⚠ C42 「落ちたのは自分のほうだと思っていました」 — ở giây cuối shot, **camera giữ nguyên
        toà nhà đứng trong khung** trong lúc lời đọc nói câu đó. Hình phản bác lời. ⛔ Không dựng
        hình người ngã, ⛔ không dựng toà nhà nghiêng
SFX     三本同時の落下音 → 連鎖する金属音 → 地面の反響 → 砂埃の音 → そのあと長い静けさ
CUT     giữ 2s im lặng trên khung bụi đang lắng, rồi cắt sang S22

## S22 · C43–C45 · live-object
SCENE   Bãi ống thép nằm dưới đất, bụi đã lắng bớt. Camera đi bộ giữa đống ống. Đây là chỗ đổi mạch
        sang Hall 2018
CAMERA  **dolly-in thấp** giữa đống ống thép, 0,3m/s, cao 0,5m, 40mm — như đang cúi xuống nhìn
ELEMENT 0s ống thép nằm ngổn ngang, đầu ống cắt ngang thấy **thành ống dày 2,4mm** ·
        8s camera đi qua, ống che khuất khung rồi mở ra · 14s dừng trước một nhóm ống
        Nhãn nguồn hiện ở 10s, góc dưới-phải, giữ tới hết shot:
        **「ジェフリー・A・ホール／カンザス大学／2018年」** và dòng hai nhỏ hơn
        **「Journal of Social and Personal Relationships」** ·
        22s nhãn mẫu nghiên cứu: **「引っ越した成人 355人 ／ 新入生 112人 ・ 9週間追跡」**
        ⚠ Con số kèm nguồn + năm (ràng buộc 4)
SFX     音をいったん抜く — im gần hết, chỉ còn tiếng gió mỏng
CUT     cắt sang S23

## S23 · C46–C48 · live-object · 三本の柱
SCENE   **Cảnh phụ 1:** ba cột ống thép xếp chồng, cao khác nhau. Giàn giáo đổ ở nền mờ phía sau.
        Chiều cao **tự nói** — ⛔ không đồ thị, ⛔ không trục số, ⛔ không thanh bar 2D
CAMERA  tĩnh 40mm ở tầm thấp (cao 0,8m) để cột thứ ba **vượt khỏi mép khung trên**.
        Từ 18s **tilt-up chậm** dọc cột thứ ba để tìm đỉnh nó
ELEMENT 0s nền bê tông trống · 2s **cột 1** xếp lên: ống thép chồng nhau thành khối, cao ~0,5m.
        Nhãn chân cột: **「約50時間 → 親しい知り合い」** ·
        ⚠ Ống **xếp chồng có vật lý** — lớp trên nằm vào khe của lớp dưới, không lơ lửng ·
        8s **cột 2** cao ~0,9m, nhãn **「約90時間 → 友人」** ·
        14s **cột 3** bắt đầu xếp và **không dừng lại** — vượt khỏi khung trên ·
        18s camera tilt-up đuổi theo, vẫn chưa thấy đỉnh · 24s thấy đỉnh: cao ~2m, nhãn
        **「200時間超 → 親友」** ·
        ⭐ **BA BÓNG CỨNG đổ trên nền bê tông** — bóng cột 3 dài gấp bốn hai cột kia, đọc được
        tương quan **ngay cả khi nhìn xuống nền**. Đây là thứ 図解 2D không có ·
        30s nhãn nguồn nhỏ: **「Hall 2018」**
CUT     cắt sang S24

## S24 · C49–C51 · live-object
SCENE   Cột 200 giờ vẫn đứng. Rồi **bên cạnh nó mọc lên một cột thứ tư cao gấp năm** — 1.000 giờ
        của một năm cùng phòng ban. Nó vượt khỏi khung và không có nhãn đỉnh
CAMERA  từ vị trí S24 **dolly-back + tilt-up** đồng thời ra tới toàn cảnh 28mm, 20s, rồi tĩnh
ELEMENT 0s cột 3 (200 giờ) · 4s cột 4 bắt đầu xếp bên cạnh, **nhanh hơn hẳn** — ống chồng lên đều
        đặn như thể có người vẫn đang xếp ·
        10s cột 4 đã vượt cột 3, vẫn xếp tiếp · 16s camera lùi ra, cột 4 cao gấp ~5 lần,
        nhãn chân: **「同じ部署に一年＝1000時間超」** ·
        22s ⭐ **cột 4 không phải do 私 xếp** — ở chân cột 4 hiện lại **giàn giáo mờ ở nền**, và
        mấy ống trên cùng của cột 4 trượt xuống **từ phía giàn giáo**. Đây là C51 「足場が、時間
        まで積んでくれていた」 dựng thành hình ·
        28s cả bốn cột trong khung, bóng cứng của chúng nằm dài trên nền
SFX     積み上がる音が続く — đều đặn, nhẹ, không nhấn
CUT     cắt sang S25

## S25 · C52–C54 · live-object · 限界①
SCENE   **Chương giới hạn bắt đầu.** Cột 4 (1.000 giờ) vẫn đứng đó, nhưng một phần của nó **đổi
        chất liệu**: một dải ống ở giữa cột **xỉn đi, không bắt nắng** — thời gian ngồi cạnh nhau
        trong phòng họp, không phải thời gian nghe chuyện đời nhau
CAMERA  **dolly ngang chậm** quanh cột 4, 12°/20s, 50mm — thấy cột từ nhiều phía, không cắt
ELEMENT 0s cột 4 nguyên · 6s một dải ~60% số ống trong cột chuyển sang **roughness 0,85,
        metalness 0,3** — mất hẳn ánh kẽm, thành xám mờ. ⚠ Làm bằng **đổi vật liệu**, ⛔ không
        bằng tối cảnh (luật 1) ·
        12s nhãn: **「会議で隣にいた3時間 ≠ 人生の話を聞いた3時間」** — hai vế, cách nhau bởi ký hiệu
        ≠, không mũi tên ·
        20s nhãn tắt, cột 4 giữ nguyên hai chất liệu — **không quay lại sáng**
        ⚠ Chương giới hạn là thứ tách kênh này khỏi kênh tâm linh. Hình phải **giữ cái xỉn**,
        không "sửa lại cho đẹp"
        Nhãn nguồn nhỏ suốt shot: **「ホール自身の但し書き（Hall 2018）」**
CUT     cắt sang S26

## S26 · C55–C56 · live-object · 限界②
SCENE   **Cái quan trọng nhất ở đây là thứ KHÔNG có:** camera đi tìm một cái vạch ngưỡng trên
        bốn cột, và không tìm thấy
CAMERA  **tracking ngang** dọc bốn cột từ trái sang phải, 0,4m/s, 50mm, cao 1,2m
ELEMENT 0s cột 1 · 5s một vạch ngưỡng mảnh hiện ra ở mốc 200 giờ trên cột 3 — **nhấp nháy một nhịp
        rồi tan** (nó không tồn tại) ·
        10s nhãn: **「ここを超えたら友達、という関所はない」** ·
        16s camera tới cột 4; nhãn thứ hai về Adams:
        **「対照群を置いた実験ではない／長年の研究のまとめ」** và dòng nguồn
        **「R・G・アダムス（UNCグリーンズボロ校）」**
        ⚠⚠ ⛔ **TUYỆT ĐỐI không viết 「アダムスの研究」「アダムスの論文」** (ràng buộc 4) ·
        24s cả hai nhãn tắt cùng lúc
CUT     cắt sang S27

## S27 · C57 · live-object
SCENE   Bốn cột và giàn giáo đổ, tất cả trong một khung. Rồi **ba cái nhãn quay lại** — không gắn
        vào giàn giáo nữa (giàn đã đổ), mà **gắn vào ba thanh nằm dưới đất**
CAMERA  tĩnh 28mm toàn cảnh, từ 6s **dolly-in rất chậm** 0,4m về phía ba thanh nằm dưới đất
ELEMENT 0s toàn cảnh: giàn đổ, bốn cột, toà nhà đứng nguyên phía sau ·
        4s ba thanh chống nằm dưới đất **sáng lên nhẹ** — nhận ra được nhờ sắc độ kẽm đặt từ S10 ·
        8s ba nhãn hiện lại bên cạnh ba thanh nằm: **「近接性」「予定しない再会」「心を開ける場」** ·
        14s ⭐ ba nhãn **giữ sáng và không tắt** cho tới hết shot — C57 「外れた三本に名前がついた」.
        Cái có tên thì bớt mơ hồ. Đây là chỗ tựa đầu tiên, dựng bằng **chữ đứng yên trên vật nằm im** ·
        ⛔ Không dựng lại giàn giáo. ⛔ Không nâng thanh lên
        Không khí: bắt đầu **trong dần lại** — bụi lắng, ⛔ ánh sáng KHÔNG đổi
CUT     hoà tan chậm 2s sang S28 — cùng lúc không khí trong hẳn

---

# 第4章 — 帰り道 (C58–C89) · 11 shot

Chương chữa lành, 303s (36%). **FIREA nằm trong chương này** (S28–S32) — nó là chỗ tựa, không
phải chương riêng. Rồi 内閣府 (S33), rồi về quán cơm (S34–S36), rồi kết (S37–S38).
⛔ Ánh sáng không đổi. ⛔ Không ai bắt chuyện với 私.

## S28 · C58–C60 · CHƯƠNG 4 🏷 THẺ CHƯƠNG
SCENE   Không khí đã trong hẳn. Bãi giàn giáo đổ, nắng trưa vẫn y nguyên. Camera lùi ra xa, và
        **toà nhà vào trọn khung lần đầu tiên**
CAMERA  **dolly-back dài** 5m/24s ra toàn cảnh 24mm, cao 3m. Rồi tĩnh
ELEMENT 0s cận đống ống · 8s lùi ra, thấy chân toà nhà · 16s thấy trọn toà nhà 6 tầng, bê tông
        sạch, cửa sổ phản chiếu trời trưa xanh ·
        ⚠ Bóng của toà nhà **vẫn ngắn, vẫn cùng góc như S06** — mặt trời chưa hề nhúc nhích ·
        20s nhãn nguồn hiện góc dưới-phải, giữ tới S32:
        **「Kauppi et al. 2021・FIREA（トゥルク大学）／European Journal of Ageing」** ·
        26s nhãn mẫu: **「n = 2,319人・退職前から退職後まで追跡」**
        🏷 Thẻ chương **第4章 — 帰り道** ở 2s, giữ 5s
SFX     空気が澄む感じ — nền im, chỉ tiếng gió rất nhẹ và một tiếng chim xa
CUT     cắt sang S29

## S29 · C61–C62 · live-object · 三つの輪
SCENE   **FIREA ba vòng dựng thành giàn giáo.** Nhìn **từ trên cao xuống** toà nhà: giàn giáo bao
        quanh nó **ba lớp đồng tâm** — lớp sát tường, lớp giữa, lớp ngoài cùng
CAMERA  **top-down 60° nhìn xuống**, 35mm, cao 25m. Từ 14s **orbit ngang chậm** 15°/16s quanh
        trục toà nhà. ⚠ Góc này chỉ dùng ở S29–S31 — cố ý khác hẳn mọi shot khác
ELEMENT 0s nhìn xuống thấy toà nhà ở giữa và ba vòng giàn giáo đồng tâm quanh nó ·
        ⚠ Ba vòng dựng bằng **ống thép thật, có khối, có bóng đổ xuống nền** — ⛔ không phải ba
        vòng tròn vẽ ·
        6s nhãn ba vòng lần lượt: vòng trong **「内側＝いなくなったら困る人」** ·
        10s **「中間＝近しい人」** · 14s **「いちばん外＝そこまで近くない人」** ·
        20s con số hiện ở mỗi vòng: **「5.6」「6.9」「9.1」**, và tổng ở góc **「合計 21.6人（退職前）」** ·
        ⚠ Mật độ ống trong mỗi vòng phải **khớp con số**: vòng ngoài có nhiều ống nhất (9,1),
        vòng trong ít nhất (5,6). Đếm được thật
        26s bóng ba vòng đổ xuống nền thành ba vành sáng-tối đồng tâm — ngắn, sắc
CUT     cắt sang S30

## S30 · C63–C64 · live-object · 0,67
SCENE   **Vòng ngoài mỏng đi.** Không phải sập, không phải đổ — chỉ **bớt đi chưa tới một ống**
CAMERA  giữ top-down 60° đúng vị trí S29, 35mm, **tĩnh hoàn toàn**. ⚠ Không di chuyển — để người
        xem thấy chính xác cái gì đổi và cái gì không
ELEMENT 0s ba vòng như S29 · 5s ⭐ **ở vòng ngoài: một ống biến mất, rồi hai phần ba của một ống
        nữa mờ đi** — tổng đúng **0,67**. ⛔ Không cho cả vòng ngoài biến mất ·
        8s nhãn: **「外側 −0.67人」** · và ngay dưới, dòng thứ hai nhỏ hơn:
        **「1人にも届かない」** ·
        14s ⭐ **vòng trong và vòng giữa: không một ống nào mất.** Để camera đứng yên 8 giây
        trên trạng thái đó — cái **không xảy ra** mới là thông tin ·
        20s nhãn: **「内側・中間 ほぼ変化なし」**
        ⚠ Đây là chỗ tựa CÓ THẬT của tập. Dựng bằng **đếm được**, không bằng ánh sáng ấm lên
SFX     間 — một nhịp im hẳn ở 5s, rồi nền quay lại
CUT     cắt sang S31

## S31 · C65 · live-object ⭐ CAO TRÀO 4a · HAI TẦNG MẬT ĐỘ
SCENE   **Cảnh phụ 2 — một hình duy nhất chứa trọn kết quả FIREA.** Camera hạ từ trên cao xuống
        tầm người, nhìn toà nhà từ xa: **vòng ngoài giàn giáo thưa hẳn, phần sát tường vẫn đặc
        nguyên.** Hai tầng mật độ đọc được trong một khung, không cần chữ
CAMERA  **crane-down** từ top-down 60° xuống tầm 4m, đồng thời dolly-back — 20s, kết ở toàn cảnh
        35mm nhìn hơi chếch. Đây là cú chuyển góc lớn nhất tập, làm **chậm và mượt**
ELEMENT 0s còn nhìn từ trên · 10s góc hạ dần, ba vòng bắt đầu **chồng lên nhau theo phối cảnh** ·
        18s tới tầm người: ⭐ **nhìn xuyên qua giàn giáo** — lớp ngoài thưa (thấy trời qua khe),
        lớp trong đặc (ống dày, che kín tường). Tương phản mật độ là **thứ duy nhất cần thấy** ·
        22s không nhãn nào. Giữ 8 giây trên hình đó ·
        30s bóng cứng của hai tầng mật độ đổ lên mặt tường — **bóng thưa và bóng đặc**, cú rơi
        của FIREA cũng thấy hai lần
        ⚠ ⛔ Không đồ thị, ⛔ không chú thích. C65 「薄くなったのは外側だけ」 — hình phải tự nói
CUT     cắt sang S32

## S32 · C66–C70 · live-object · 止まった
SCENE   **Sự giảm DỪNG LẠI.** Một ống ở vòng ngoài rơi — rồi **không có ống nào rơi nữa** trong
        suốt phần còn lại của shot
CAMERA  tĩnh 35mm ở đúng vị trí cuối S31. **Không động suốt 39s.** ⚠ Shot dài nhưng mốc thay đổi
        dày — xem ELEMENT
ELEMENT 0s giàn hai tầng mật độ · 4s một ống ở vòng ngoài rời ra, rơi, lăn, dừng — **cú rơi cuối
        cùng của cả tập** ·
        8s nhãn dòng thời gian mảnh chạy ngang chân khung: **「退職前 ─ 移行期 ─ 半年 ─ 1年 ─ 1年半」**.
        Một chấm sáng chạy dọc dòng đó theo hàm tuyến tính của t ·
        14s chấm qua **「移行期」** — đúng lúc đó ống rơi (đã rơi ở 4s, nay nhắc lại bằng một nháy
        sáng ở chỗ ống nằm) ·
        20s chấm đi tiếp qua 半年, 1年, 1年半 — ⭐ **không có gì rơi nữa.** 20 giây không một
        chuyển động nào ngoài chấm sáng. Sự im đó CHÍNH LÀ nội dung ·
        30s nhãn: **「その後1年半で −0.1人（誤差の範囲）」** ·
        35s nhãn kết: **「加齢ではなく、退職に結びついた変化」＋「Kauppi et al. 2021」**
        ⚠⚠ ⛔ **KHÔNG đồ thị tuổi, KHÔNG đường cong đi xuống, KHÔNG so sánh trẻ/già** (ràng buộc 3).
        Cơ chế là **bên ngoài**: giàn giáo bị tháo, rồi thôi không tháo nữa
SFX     ゆっくり — sau cú rơi ở 4s, nền gần như im hoàn toàn tới hết shot
CUT     cắt sang S33

## S33 · C71–C76 · live-object
SCENE   Chương giới hạn của FIREA, rồi 内閣府. Camera lùi ra rất xa: **không chỉ một toà nhà mà
        một dãy phố** — nhiều toà nhà, và nhiều toà đã bị tháo giàn giáo
CAMERA  **dolly-back dài nhất tập**, 30m/30s, 24mm, lên cao dần tới 12m. Rồi tĩnh 15s
ELEMENT 0s toà nhà quen thuộc · 6s nhãn giới hạn FIREA:
        **「対象：フィンランドの公務員・8割以上が女性・平均63.2歳」** — giữ 10s rồi tắt ·
        16s camera lùi, **toà nhà thứ hai, thứ ba vào khung** — mỗi toà một tình trạng giàn giáo
        khác nhau: có toà còn nguyên giàn, có toà đã tháo hết, có toà đang tháo dở ·
        24s nhãn nguồn 内閣府:
        **「内閣府『第9回 高齢者の生活と意識に関する国際比較調査』／2020年12月〜2021年1月実施」** ·
        30s ⭐ toàn cảnh dãy phố: đếm được **5 toà nhà**, trong đó **2 toà đã bị tháo sạch giàn
        giáo**. Nhãn: **「家族以外に親しい友人がいない：日本 31.3%（男性 約4割）」** và dòng hai
        **「米・独・スウェーデン：1割台」** ·
        38s nhãn tắt, chỉ còn dãy phố. **Năm toà nhà, hai toà trụi giàn, tất cả vẫn đứng**
        ⚠ Con số dùng để **bình thường hoá**, ⛔ không báo động. Vì vậy hình là **dãy phố bình
        thường giữa trưa**, ⛔ không phải cảnh hoang tàn, ⛔ không màu xám u ám
CUT     cắt sang S34

## S34 · C77–C78 · live-object ⛔ KHÔNG KÊ ĐƠN
SCENE   **Về đúng quán cơm ấy.** Đúng khung S01: khay 日替わり đặt xuống, cùng mặt bàn, cùng vệt
        nắng. Bên kia lối đi, bàn bốn chỗ, áo sơ mi, thẻ đung đưa, tiếng cười
CAMERA  tĩnh 50mm, **đúng góc S01** (cao 1,15m, chúi 22°) — khung lặp lại để người xem nhận ra
        ngay. Từ 12s pan nhẹ 10° sang bàn bốn chỗ, rồi **pan về lại**
CAMERA_⚠ ⛔ Không dolly về phía bàn bốn chỗ. ⛔ Không rack focus vào mặt ai. Camera **ở lại phía
        bàn của 私**
ELEMENT 0s khay 日替わり đặt xuống — **cùng món, cùng vị trí như S01** ·
        6s vệt nắng trên bàn **cùng góc, cùng độ dài bóng như S01** (luật 1: thời gian không trôi) ·
        12s pan sang bàn bốn chỗ: vẫn bốn bộ vai áo sơ mi, thẻ lắc, một tiếng cười ·
        ⛔ **KHÔNG ai quay sang nhìn 私. KHÔNG ai gật đầu chào. KHÔNG ai bắt chuyện.** ·
        18s pan về lại chỗ 私 · 22s **ghế đối diện: VẪN TRỐNG**, mặt bàn trước nó vẫn sạch bong
        ⚠ Đây là chỗ dễ trượt nhất của cả tập. Nếu bản dựng thấy trống trải quá và muốn thêm một
        người ngồi xuống — **đó chính là kê đơn bằng hình. Không làm.**
SFX     昼の定食屋のざわめき quay lại, nhưng **-8dB và lọc nhẹ** so với S01 — 「最初より少し遠く、
        少し柔らかく」. ⚠ Làm bằng **âm lượng và lọc**, không bằng đổi hình
CUT     cắt sang S35

## S35 · C79–C80 · live-object ⭐ KHUNG MỎ NEO LẶP LẠI
SCENE   **Ghế đối diện trống — lần thứ ba và cuối cùng.** Đúng khung S04: 85mm, ngang tầm, chính
        giữa khung. ⚠ Đây là khung thứ hai và cuối cùng trong tập đặt chủ thể ở giữa
CAMERA  tĩnh tuyệt đối 85mm, cao 1,15m. **Không một chuyển động nào suốt shot**
ELEMENT 0s ghế trống, y hệt S04 — cùng cái ghế, cùng ánh sáng, cùng bóng chấn song trên mặt bàn ·
        ⚠ ⭐ **PHẢI GIỐNG S04 TỚI TỪNG PIXEL Ở PHẦN NGOẠI CẢNH.** Đó là C79
        「外のことは、本当に何ひとつ変わっていない」 dựng thành hình. Nếu có một chi tiết ngoại
        cảnh khác đi, câu đó thành nói dối ·
        8s ⭐ **thứ DUY NHẤT khác S04:** ba nhãn hiện lên rất mờ **trên cái ghế trống**:
        「近くにいること」「約束せずに会うこと」「気を抜いて話せる場所」 — và chúng **nằm ở
        BÊN NGOÀI**, trên ghế, ⛔ không nằm trên chỗ ngồi của 私 ·
        14s ba nhãn giữ, không tắt
        ⚠ C80 「変わったのは、そこに座っている私のほう」 — cái đổi là **biết tên**, và cái tên
        nằm trên ghế đối diện, không nằm trong người. ⛔ Không hiệu ứng "sáng lên trong lòng"
CUT     cắt sang S36

## S36 · C81–C82 · live-object
SCENE   Ba nhãn tách khỏi cái ghế và **trôi ra khỏi quán** — qua cửa kính, ra ngoài đường, và
        **gắn vào ba thanh chống ngang đang nằm dưới đất** ở chân toà nhà
CAMERA  **dolly liên tục từ trong quán ra ngoài**, xuyên qua khung cửa, 50mm → 35mm, 22s.
        ⚠ Cú đi này lặp lại đường đi của S06 nhưng **chậm hơn và không giật exposure** — lần này
        không còn chói mắt
ELEMENT 0s ba nhãn trên ghế trống · 5s camera bắt đầu đi, nhãn đi theo · 10s qua cửa kính ·
        14s ra tới vỉa hè — nắng trưa, bóng ngắn, **y như S06** ·
        18s ba nhãn hạ xuống, gắn vào **ba thanh chống ngang nằm dưới đất** (nhận ra bằng sắc độ
        kẽm đặt từ S10) ·
        22s ⭐ camera giữ khung: **ba cái tên nằm ngoài, trên ba thanh thép ngoài, dưới đất ngoài.**
        C82 「私のまわりに、組んであったものです」 ·
        ⛔ Không thanh nào được nâng lên. ⛔ Không giàn giáo nào dựng lại
CUT     cắt sang S37

## S37 · C83–C84 · live-object ⭐ CAO TRÀO 4b
SCENE   **Toà nhà vẫn đứng.** Camera ngẩng từ ba thanh nằm dưới đất lên toàn bộ toà nhà — nguyên
        vẹn, bê tông sạch, không sứt một mảng. Quanh nó **vòng giàn sát tường vẫn đặc**
CAMERA  **tilt-up chậm** 45°/16s từ mặt đất lên đỉnh toà nhà, 28mm. Rồi **dolly-back** ra toàn
        cảnh có cả nền trời, 10s. Kết ở khung rộng nhất của tập
ELEMENT 0s ba thanh nằm dưới đất, có tên · 6s tilt lên qua chân tường: **bốn vết chân giàn** vẫn
        in trên bê tông (vòng lại S06) · 10s lên mặt tường: lỗ bu-lông, vệt gỉ — **vẫn còn đó,
        không được xoá đi**. Mất mát có thật ·
        16s tới đỉnh toà nhà, nền trời trưa xanh · 20s dolly-back:
        ⭐ **thấy trọn toà nhà NGUYÊN VẸN, và vòng giàn sát tường VẪN ĐẶC** — hai điều cùng lúc ·
        24s nhãn nhỏ góc dưới: **「いちばん内側の輪は、減っていなかった（FIREA 2021）」** ·
        30s nhãn tắt. Chỉ còn toà nhà và trời
        ⚠ Đây là câu kết dựng thành hình: **cái rơi là giàn giáo, cái đứng là con người.**
        ⛔ Không hào quang, ⛔ không nắng ấm lên, ⛔ không nhạc swell. Chỉ là một toà nhà đứng giữa
        trưa, như nó vẫn đứng suốt tập
SFX     遠くで、鉄パイプが軽く触れ合う音 — **一度だけ**, ở ~8s. Rồi im
CUT     cắt sang S38

## S38 · C85–C89 · live-object · KẾT
SCENE   Vỉa hè trưa, đúng chỗ S06. Bóng ngắn dưới chân. Con phố trống. **Không có gì đổi.**
        Camera đứng yên và ở lại đó tới hết
CAMERA  tĩnh 35mm, cao 1,6m, **đúng khung S06 sau khi camera đã dừng**. Từ 30s **dolly-back cực
        chậm** 1m/12s — lùi ra một bước, như người đứng nhìn rồi quay đi. ⛔ Không quay đi thật
ELEMENT 0s vỉa hè, bóng chân ngắn, mặt tường có lỗ bu-lông bên kia đường ·
        ⚠ **Bóng cùng góc, cùng độ dài như S06** — mặt trời chưa nhúc nhích trong 851 giây (luật 1) ·
        8s nhãn giờ nhỏ ở góc: **「12:20」** — cùng giờ như S06, hiện 4s rồi tắt ·
        14s con phố trống trải dài; **không một người nào đi qua**. ⛔ Không ai bước vào khung ·
        22s ba thanh chống nằm dưới chân tường, có tên, trong khung nhưng không nhấn ·
        30s camera lùi một bước; ⭐ toà nhà và ba thanh nằm cùng trong khung — **cái đứng và cái
        nằm, cùng một hình** ·
        42s ⭐ bụi trong vệt nắng **đã lắng hết** — không khí trong nhất cả tập. ⚠ Làm bằng **mật
        độ hạt**, ⛔ không bằng exposure, ⛔ không bằng đổi màu ·
        Cuối shot: giữ khung tĩnh 6s sau khi lời đọc kết, rồi fade to black vào outro 5s
SFX     静けさ. ざわめき đã hoàn toàn xa. Ở câu cuối (C89) **nền im hẳn**, chỉ còn tiếng gió mỏng
CUT     fade to black → outro 5s (do `apply-lead-tail.mjs` chèn)

---

# GHI CHÚ DỰNG HÌNH

Quy ước dùng chung cho **cả tập**. visual-builder tuân theo, không tự đổi.

## 1. Mặt trời — hằng số của cả tập ⛔

```
SUN_ELEVATION = 82°      // cố định, KHÔNG đổi từ frame 0 tới frame cuối
SUN_AZIMUTH   = 178°     // cố định
SUN_COLOR     = (1.00, 0.97, 0.92)   // ánh sáng trưa, cố định
SUN_INTENSITY = 5.2      // cố định
```

⛔ **Không hàm nào được nhận `t` để đổi bốn giá trị trên.** Đây là ràng buộc cứng số 1 của tập.
Nếu cần "dịu đi" ở 帰り道 → đổi **mật độ bụi** (`DUST_DENSITY`), ⛔ không đổi ánh sáng.

Hệ quả phải kiểm khi xem contact sheet: **bóng ở S06, S35, S38 phải cùng góc và cùng độ dài.**
Lệch là sai luật 1.

## 2. Bảng màu

| Tên | Giá trị | Dùng ở |
|---|---|---|
| `SKY_NOON` | #7FA8D4 → #B9D2E8 (gradient đứng) | nền trời mọi shot ngoài trời |
| `ZINC_BRIGHT` | base #B4BCC2, metalness 0,88, roughness 0,42 | ống thép mạ kẽm mới (thanh ①) |
| `ZINC_DULL` | base #99A0A6, roughness 0,55 | ống đã xỉn (thanh ②) |
| `ZINC_SCUFF` | `ZINC_DULL` + normal map vết xước dọc | thanh ③ |
| `ZINC_SPANGLE` | lớp loang **vân hoa kẽm** (voronoi noise, scale 0,04m) chồng lên cả ba | ⭐ chi tiết tách khỏi 図解 2D |
| `RUST_STREAK` | #8A4B28 → #C87A42, alpha loang | vệt gỉ dưới lỗ bu-lông |
| `CONCRETE` | base #BDB7AE, roughness 0,92, metalness 0 | toà nhà, vỉa hè |
| `CONCRETE_CLEAN` | `CONCRETE` sáng hơn 12%, ít vết bẩn | **bốn vết chân giàn** |
| `NET_GREEN` | #A9C98F, alpha 0,45, double-sided | lưới che |
| `STEEL_DECK` | #8E9298, roughness 0,6 | sàn công tác thép dập |
| `KOBAKI_YELLOW` | #D9A520 | 巾木 (ván chặn chân) |
| `DINER_WARM` | #C9A876 | gỗ và formica trong quán cơm |
| `LABEL_WHITE` | #FFFFFF, không hộp nền, đổ bóng mềm 1px | mọi nhãn canvas |

⛔ Không dùng màu cam hoàng hôn, ⛔ không màu xanh đêm, ⛔ không tint u ám ở 帰り道.

## 3. Vật lý — chỗ BẮT BUỘC đúng

| Chỗ | Luật | Sai là hỏng tập |
|---|---|---|
| **Rơi tự do** | g = 9,8 m/s². Độ cao rơi 4,5m → chạm đất sau 0,958s | Rơi chậm kiểu phim là thành 図解 |
| **Nảy** | hệ số phục hồi e ≈ 0,35 (thép trên bê tông). Nảy 1: 12% độ cao · nảy 2: 1,5% · nảy 3 ≈ 0 | |
| ⭐ **Lăn** | **ỐNG TRÒN THÌ LĂN, KHÔNG TRƯỢT.** Lăn không trượt: v = ωr. Giảm tốc do ma sát lăn (μ_r ≈ 0,02), dừng sau ~2,3m | ⚠ Ràng buộc người dùng nêu đích danh. Ống trượt như hộp là **hỏng shot** |
| **Va chạm ống-ống** | bảo toàn động lượng, đổi hướng lăn. Ở S21 ba ống va nhau | |
| **Lưới che rơi** | có **cản không khí** — rơi chậm hơn ống, lượn | |
| ⭐ **Bóng đổ** | **bóng cứng, mép sắc** (shadow map độ phân giải cao, bán kính blur ≈ 0). Bóng vật rơi phải **cùng gia tốc, cùng pha với vật**, và **méo theo mặt tường không phẳng** | ⚠ Người xem thấy cú rơi hai lần — đây là thứ 図解 2D không có |
| **Bụi** | thể tích, hạt bắt nắng, **có bóng riêng đổ lên tường**. ⛔ Không sprite phẳng, ⛔ không billboard | |
| **Xếp chồng (S23–S24)** | ống lớp trên nằm vào **khe của hai ống lớp dưới**, không lơ lửng, không xuyên nhau | |

## 4. Tất định — luật 3 của CLAUDE.md

- ⛔ `requestAnimationFrame` · `Date.now` · `performance.now` · `setTimeout` · `Math.random`
- ⛔ `+= dt`. **Mọi chuyển động là hàm thuần của `t`.** Mô phỏng rơi/nảy/lăn dùng **nghiệm giải
  tích theo `t`**, không tích phân từng frame.
- Ngẫu nhiên (hướng lăn, pha lệch của ba vật rơi, quỹ đạo hạt bụi, vị trí vết xước) → **mulberry32,
  seed cố định**. Đề xuất: `SEED = 0x41534849` (`ASHI`).
- ⚠ Tập này có **nhiều vật rơi cùng lúc** ở S21 — mỗi vật một seed dẫn xuất (`SEED + index`),
  tuyệt đối không dùng chung bộ sinh trạng thái.

## 5. Quy ước nhận diện ba thanh chống — KHÔNG ĐỔI từ S09 tới S38

| Thanh | Điều kiện | Vị trí trên giàn | Vật liệu | Rơi ở |
|---|---|---|---|---|
| ① | **近接性** | thấp nhất, bên trái | `ZINC_BRIGHT` | S19 (C38, 学校を出たとき) |
| ② | **予定しない再会** | giữa, chính diện | `ZINC_DULL` | S20 (C39, 転勤・引っ越し) |
| ③ | **心を開ける場** | cao nhất, bên phải | `ZINC_SCUFF` | S21 (C40, 定年の日) |

Ba thanh phải **nhận ra được khi nằm dưới đất** ở S27, S36, S38 nhờ vật liệu khác nhau.

## 6. Nhãn con số — NGUỒN + NĂM, bắt buộc

| Nội dung | Nhãn đúng trên hình | Shot |
|---|---|---|
| Ba điều kiện | **「R・G・アダムス／20世紀半ばの研究のまとめ」** hoặc **「社会学者R・G・アダムス（UNCグリーンズボロ校）が20世紀半ばからの研究をまとめたもの」** | S08, S26 |
| ⛔ **CẤM** | ~~「アダムスの研究」~~ ~~「アダムスの論文」~~ ~~「アダムスによると」~~ | — |
| Giờ kết bạn | **「約50時間／約90時間／200時間超」＋「Hall 2018」** | S23 |
| Mẫu Hall | **「引っ越した成人 355人 ／ 新入生 112人・9週間」** | S22 |
| Giới hạn Hall | **「ホール自身の但し書き（Hall 2018）」** | S25 |
| FIREA nguồn | **「Kauppi et al. 2021・FIREA（トゥルク大学）／European Journal of Ageing」** | S28 |
| FIREA n | **「n = 2,319人」** | S28 |
| FIREA vòng | **「5.6／6.9／9.1・合計 21.6人（退職前）」** | S29 |
| FIREA giảm | **「外側 −0.67人」** | S30 |
| FIREA giới hạn | **「フィンランドの公務員・8割以上が女性・平均63.2歳」** | S33 |
| 内閣府 | **「内閣府『第9回 高齢者の生活と意識に関する国際比較調査』／2020年12月〜2021年1月実施」** | S33 |
| 内閣府 số | **「日本 31.3%（男性 約4割）／米・独・スウェーデン 1割台」** | S33 |

## 7. Chống rập khuôn — kiểm trước khi nộp composition

Hai shot liền nhau **không được** cùng cỡ cảnh + cùng góc. Bảng kiểm:

| Cỡ cảnh | Shot dùng |
|---|---|
| Macro/cận sát | S18 |
| Cận (85–100mm) | S04, S05, S09, S14, S35 |
| Trung (50mm) | S01, S02, S03, S12, S16, S25, S26, S34 |
| Rộng (35–40mm) | S06, S07, S10, S13, S15, S19, S22, S23, S31, S36, S38 |
| Rất rộng (24–28mm) | S11, S17, S21, S24, S27, S28, S32, S33, S37 |
| Top-down 60° | S29, S30 (chỉ hai shot này) |

**Vị trí chủ thể trong khung:** chỉ **S04 và S35** đặt chủ thể **chính giữa** — đó là lý do hai
khung đó đọng lại. Mọi shot khác đặt lệch theo 1/3.

**Ba khung lặp lại có chủ ý** (người xem phải nhận ra):
- S01 ↔ S34 (khay cơm, cùng góc)
- S04 ↔ S14 ↔ S35 (ghế trống — S14 cố ý **khác góc** để không thành ba lần y hệt)
- S06 ↔ S36 ↔ S38 (bước ra vỉa hè)

## 8. Chữ trên màn hình — luật 7 của CLAUDE.md

- Font **`'BIZ UDPGothic'`**, đã nhúng ở `assets/fonts/`. Khai `@font-face` trong composition.
- ⚠ **`await document.fonts.load("bold 64px 'BIZ UDPGothic'")` TRƯỚC khi vẽ nhãn canvas đầu tiên.**
  Font CJK ~4,6 MB; vẽ trước khi font về → canvas đo nhầm metric, nhãn sai kích thước **rải rác**.
  Tập này có **~24 nhãn canvas**, lỗi sẽ rất khó truy.
- ⛔ `"Segoe UI"` không có glyph CJK → tofu.
- Nhãn: chữ trắng, **không hộp nền**, đổ bóng mềm 1px để đọc được trên bê tông sáng.
- Nhãn gắn vào vật thì **không che vật** — đặt cạnh, có vạch nối mảnh nếu cần.
- **Thẻ chương** (4 cái): S01, S08, S15, S28. Góc dưới-trái, hiện ở 2s, giữ 5s, fade 0,6s.

## 9. Âm thanh — nền chung, không ghi theo shot

- Nhạc nền: `assets/bgm.mp3`, một track cho cả tập.
- **Ba lớp không gian** (dựng ở khâu voice/audio, storyboard chỉ đánh dấu):
  1. `昼の定食屋のざわめき` — S01–S05 (đầy), S12–S14 (-12dB), S34–S35 (-8dB + lọc)
  2. `屋外の広い静けさ` — S06–S07, S36–S38
  3. `工事現場の金属音` — S08–S11, S15–S33
- ⚠ Cú chuyển âm quan trọng nhất: **S06 ở 1,5s** — 引き戸 mở, ざわめき tụt -18dB + lowpass trong
  0,4s. Đây là "ra khỏi thế giới đó" dựng bằng tiếng.
- ⚠ Ở cuối tập **nhạc phải kết trọn câu**, không cắt cụt — outro 5s là chỗ cho nó kết.

## 10. Motif cần TRÁNH ⛔

- ⛔ Mặt trời mọc/lặn, đổi giờ, đổi mùa, đổi thời tiết.
- ⛔ Cảnh tối đi để "buồn hơn". Cảnh sáng lên để "hy vọng hơn".
- ⛔ Giàn giáo được dựng lại ở cuối. Ba thanh được nâng lên. Toà nhà có giàn mới.
- ⛔ Người bắt chuyện, bàn tay chìa ra, ai đó ngồi xuống ghế đối diện, ai đó gật đầu chào.
- ⛔ Nhân vật mới ở 第4章. Cảnh hội nhóm, lớp học, công viên, sinh hoạt khu phố.
- ⛔ Đồ thị 2D, mũi tên, biểu đồ cột, biểu đồ tròn, sơ đồ khối, mạng lưới node-link.
  (Đó là ngôn ngữ của kênh 1 — dùng là mất lý do tồn tại của tập này.)
- ⛔ Đồ thị theo tuổi, đường cong đi xuống theo tuổi, so sánh "hồi trẻ vs bây giờ" dạng biểu đồ.
  (Ràng buộc 3 — SST/Carstensen thuộc kênh 1.)
- ⛔ Khuôn mặt người. Mắt. Biểu cảm. Người đứng một mình trên nền trống.
- ⛔ Mộ, di ảnh, hình gây sợ, bóng ma, tay chỉ trỏ.
- ⛔ Lens flare, bloom quá tay, vignette nặng, rung máy, zoom giật, cắt dưới 4 giây.
- ⛔ Chữ 死 trên hình (chủ đề tập này không đụng tới, đừng thêm vào).

## 11. Kiểm cuối — contact sheet

`npm run check` PASS **không có nghĩa là hình đúng** (luật 9). Sau khi dựng:

```
npx hyperframes snapshot --at 2,10,52,68,140,175,250,300,345,368,430,490,552,605,640,745,795,830,853
```

⚠ Các mốc trên **đã cộng +2s intro**. Mở `contact-sheet.jpg` và kiểm sáu thứ:

1. **Bóng ở mọi frame ngoài trời cùng góc và cùng độ dài** (luật 1). Lệch = hỏng.
2. **Frame 68 (S06) và frame 830 (S38) gần như trùng nhau** — trừ mật độ bụi. Đó là C79.
3. **Frame 368 (S21)**: ba bóng cứng chạy trên tường, toà nhà nguyên vẹn phía sau.
4. **Frame 605 (S30–S31)**: đếm được ống ở vòng ngoài vs vòng trong — hai mật độ khác nhau rõ.
5. **Mọi nhãn CJK hiện đúng glyph**, không tofu, không lệch kích thước.
6. **Frame 745, 795 (S34–S35)**: ghế đối diện trống, **không có ai ngồi, không có ai nhìn sang**.
