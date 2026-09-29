# STORYBOARD — 仏壇に話しかけるのは変なのか｜心理学が追いついた話

## METADATA

- **Slug:** `hanashikakeru`
- **Tổng thời lượng dự kiến:** **872,64s** ≈ 14:33 (dry-run, `timing.json`), cộng intro 2s +
  outro 5s → file cuối ~879,6s.
  ⚠ Con số giây **chỉ để căn nhịp**. Thời lượng CHUẨN lấy từ `timing.json` sau khâu voice thật.
  **Mọi shot neo vào mã cue, không vào giây.** Timecode ghi ở mỗi shot là mốc dry-run để tham
  khảo, không phải hợp đồng.
- **Số shot:** **34** (S01–S34). Trung bình ~25,7s/shot. Ngắn nhất ~12s (S11), dài nhất ~41s (S25).
- **Số cue:** 88 (C01–C88), 4 chương. Nhãn chương ở **C01 / C12 / C35 / C71**.
- **Loại visual:** **live-object toàn tập** — một căn phòng 和室, một buổi sáng, camera trong phòng.
  KHÔNG có đoạn procedural/đồ thị/timeline mũi tên nào (đó là kênh 1). Ba chỗ cần "trừu tượng"
  (1917→1996→2023, 内在化/外在化, tổng quan 2023) đều dựng bằng **ánh sáng và vị trí trong cùng
  căn phòng**, không bằng biểu đồ.
- **Nhạc nền:** một track chung `assets/bgm.mp3` cho cả tập. Không ghi audio theo shot.
  Chỉ shot có dòng `SFX` mới cần hiệu ứng riêng (lấy từ [AUDIO DIRECTION] của kịch bản).
- **Phụ đề:** KHÔNG chép tay. Sinh từ `voice/*.srt` bằng `scripts/gen-captions.mjs`
  (**≤22 ký tự toàn角, 1 dòng**). Font **BIZ UDPGothic** — xem GHI CHÚ mục 9.
- **Texture:** không có texture 和室/仏壇/障子/tatami trong `assets/tex/`. **Dựng procedural toàn bộ**
  — xem GHI CHÚ mục 2–6.

### ⭐ Đồng hồ của cả tập: ánh sáng qua 障子

Đây là thứ thay chỗ cho mọi timeline, mọi đồ thị, mọi thẻ chương động. **Một biến duy nhất**
điều khiển cả tập, ký hiệu `sun` — góc mặt trời sáng sớm, hàm thuần của `t`, đơn điệu tăng,
KHÔNG BAO GIỜ giảm và KHÔNG BAO GIỜ đứng yên:

| Mốc cue | `sun` | Trạng thái ánh sáng trong phòng |
|---|---|---|
| C01 | −6° (trước bình minh) | 障子 gần như đen-lam. Phòng chỉ có ánh nến. Không có vệt sáng trên chiếu. |
| C11 | −2° | 障子 chuyển lam nhạt ở mép dưới. Chưa có tia trực xạ. |
| C12–C34 (第2章) | −1° → +1° | **Chủ ý: gần như đứng im.** Ánh sáng ngoài chậm nhất ở đây; cả chương chỉ có ánh nến. Đây là lúc 私 ở trong đầu mình, nên thế giới ngoài gần như không nhúc nhích. |
| C35 | +2° | Tia trực xạ ĐẦU TIÊN chạm mép dưới 障子. Thẻ chương 3 mở bằng đúng khoảnh khắc này. |
| C41 | +5° | Vệt sáng đầu tiên đặt chân lên chiếu, mới 1/2 ô tatami. |
| C44 (1996) | +8° | Vệt sáng qua mép ô tatami thứ nhất. |
| C57 (2023) | +12° | Vệt sáng tới giữa phòng, **dừng ngay trước 仏壇 — chưa chạm tới**. Cố ý. |
| C59–C70 | +14° → +18° | Vệt sáng bò tiếp, chạm mép dưới bệ 仏壇 ở C65. |
| C71 | +21° | Bóng 桟 đã **đi hết chiều ngang chiếu** — đúng câu 「桟の影が渡りきっています」. |
| C88 | +26° | Cả phòng sáng đều, 障子 trắng ấm. Ánh nến gần như vô hình trong ánh ngày. |

**Luật của biến này:** ba mốc "1917 / 1996 / 2023" (cảnh dựng #5 trong packaging) KHÔNG phải ba
cảnh riêng — chúng là **ba trạng thái của vệt sáng trên cùng một chỗ ngồi**, cách nhau bằng vị
trí vệt sáng trên chiếu. Visual-builder đọc `sun` từ bảng trên và nội suy tuyến tính theo cue.

### Bốn cao trào hình

1. **S08 · C15–C17** — phòng tối lại tới mức chỉ còn ngọn nến; ánh sáng của nó **có một bán kính
   rõ rệt**, và ngoài bán kính đó là đen đặc. Chỗ trí tưởng tượng dừng = chỗ ánh sáng không tới.
2. **S17 · C41–C44** — vệt sáng đầu tiên bò lên chiếu. Ba trạng thái 1917/1996/2023 bắt đầu ở đây.
3. **S25 · C59–C63** — camera quay lại 仏壇 sau cả chương nhìn vào chiếu. **Cú lật của tập.**
4. **S34 · C86–C88** — dolly lùi ra khỏi phòng, cửa 仏壇 **vẫn mở**. Không khép, không tắt.

### Khung nguồn thumbnail

**S03 (C05–C07)** dựng đúng concept bìa đã duyệt (cặp 1): 仏壇 mở cánh trong phòng tối, một luồng
sáng sáng sớm cắt chéo từ 障子, một sợi khói hương đi lên trong luồng sáng, **座布団 còn lõm**,
không có người trong khung. Render agent bắt frame ở khoảng giữa S03.
⚠ Ở S03 theo đồng hồ thì `sun` mới ≈ −4°, chưa có trực xạ thật. **Cho phép ngoại lệ ĐÚNG MỘT
SHOT:** dựng một luồng sáng lam-bạc yếu (ánh trời trước bình minh tán xạ, không phải nắng vàng)
đủ để thấy sợi khói và hạt bụi. Không đẩy thành nắng — nắng vàng ở đây sẽ phá đồng hồ.

### ⚠ Ràng buộc tuyệt đối của tập này

1. **⛔ KHÔNG gợi ý sự hiện diện của người đã mất.** Không bóng người, không silhouette, không
   ánh sáng hình người, không khuôn mặt trong khói, không vật gì tự chuyển động mà không có
   nguyên nhân vật lý trong khung. Mọi chuyển động phải truy được về: đối lưu nhiệt, gió qua khe,
   bàn tay 私, hoặc mặt trời. C74 nói thẳng 「それは、わからないことです」 — hình phải đứng về phía câu đó.
2. **⛔ KHÔNG hình nào về 中陰 / 四十九日 / 十王 / 六道 / 位牌.** Tập 01 đã dùng trọn.
   ⚠ **位牌 KHÔNG XUẤT HIỆN TRONG BẤT KỲ KHUNG NÀO** của tập này, kể cả hậu cảnh mờ, kể cả trong
   lòng 仏壇. Lòng 仏壇 dựng ở **độ sâu tối, đọc được là "có chiều sâu và có vàng lá phản chiếu"**
   chứ không đọc được là "có vật gì đứng trong đó". Nếu cần một điểm tựa mắt trong lòng 仏壇 thì
   dùng ánh vàng lá hắt lại, không dùng vật thể.
3. **⛔ KHÔNG dựng cảnh giải thích cấu tạo hay công dụng 仏壇.** Không cắt lớp, không nhãn chỉ
   bộ phận, không "đây là chỗ để X". Kênh 1 giữ đề mục đó. Tập này chỉ dựng 仏壇 như **một món
   đồ gỗ trong phòng của một người**.
4. **⛔ KHÔNG xếp hạng văn hoá** ở C68–C70. Không cảnh "phương Tây sai / phương Đông đúng",
   không đặt hai hình cạnh nhau theo kiểu so sánh hơn-kém. Xem S28.
5. **⛔ KHÔNG cảnh gây sợ.** Không xác, không máu, không bóng ma, không tối om đột ngột,
   không âm thanh giật.
6. **Không rung máy ảo, không zoom giật, không cắt nhanh hơn 4 giây.**
7. **Ba chặng giới hạn (C31–C33, C54–C55, C56–C57) phải có hình tương xứng** — xem S15, S22, S23.
   Hình ở ba chỗ này phải cho thấy **sự chưa biết**, không minh hoạ như thể đã biết.
8. **Kết C80–C88 KHÔNG có động tác đóng lại.** Không khép cánh 仏壇, không tắt nến bằng tay,
   không đóng 障子, không fade to black trước outro. Cửa mở là câu cuối của kịch bản.

---

# 第1章 — 入口 (C01–C11) · 6 shot · ~87,8s

Phòng là nhân vật. Cả chương ánh sáng chủ đạo là **một ngọn nến trong lòng 仏壇** cộng ánh lam
rất yếu qua 障子. Camera ở **độ cao mắt người đang quỳ (~0,75m)** — đây là ngôi 私.
Không thấy mặt 私 ở bất kỳ shot nào trong tập; chỉ thấy **bàn tay** (S02, S26, S31).

## S01 · C01 · [0,0–7,4s] · live-object
SCENE   Hành lang gỗ tối, nhìn dọc về phía một ô cửa 障子 mờ lam ở cuối. Sàn 板 lạnh, phản chiếu
        mờ. Chưa thấy 仏壇, chưa thấy phòng — mới chỉ là đường đi tới.
CAMERA  tĩnh, 35mm, cao 0,75m, đặt thấp trong hành lang; fade-in từ đen 2,5s. Điểm sáng duy nhất
        (ô 障子) ở **1/3 phải**, hành lang chạy chéo từ dưới-trái lên
ELEMENT 0s đen, chỉ một mảng lam mờ · 2,5s vân gỗ sàn hiện ra ở tiền cảnh, thớ dọc, bề mặt hơi
        mòn ở giữa lối đi (chỗ người đi nhiều nhất) · 5s thấy được mép chiếu tatami của gian
        trong, bên trái khung
        Ánh sáng: **chỉ SKY_PREDAWN** (0,30 · 0,38 · 0,52) — trời trước bình minh tán xạ qua giấy
        障子, cường độ rất thấp, KHÔNG có tia trực xạ. `sun = −6°`. Phòng không có nguồn sáng nào khác
SFX     môi trường thấp ban mai. Một tiếng chim **đúng một lần** ở ~4s, xa, sau lớp 障子
CUT     cắt thẳng sang S02 (thay góc, cùng không gian)

## S02 · C02 · [7,4–15,9s] · live-object ⭐ GÓC MÁY MỎ NEO A
SCENE   Trong phòng. 仏壇 gỗ sơn mài đen đóng kín, đặt sát tường trái. Hai bàn tay già vào khung
        từ dưới, mở hai cánh cửa ra hai bên — **chuyển động cơ học thật, có bản lề, có quán tính**
CAMERA  tĩnh, 50mm, cao 0,75m, **仏壇 đặt ở 1/3 trái**, 2/3 phải là chiếu trống và chân 障子.
        ⚠ GHI LẠI ĐÚNG THÔNG SỐ NÀY — S34 phải khớp từng độ
ELEMENT 0s cánh 仏壇 đóng, bề mặt sơn mài đen: **clearcoat, phản chiếu mờ**, thấy được vân gỗ
        dưới lớp sơn ở góc nghiêng · 3s hai bàn tay vào khung (da SSS, không dựng mặt, không dựng
        cánh tay quá khuỷu) · 4–7s **cửa mở theo bản lề**, góc mở 0°→105°, ease-out, hai cánh
        KHÔNG đối xứng tuyệt đối (cánh phải chậm hơn 0,3s — bàn tay phải mở sau) ·
        7s lòng 仏壇 lộ ra: **tối sâu, vàng lá hắt lại ánh nến chứ KHÔNG tự phát sáng**
        (anisotropic specular, phản xạ gián tiếp) — ⛔ không có vật thể nào đứng trong đó ·
        12s bàn tay rút khỏi khung
        Ánh sáng: CANDLE_WARM (1,0 · 0,78 · 0,45) bán kính hữu dụng 1,2m + SKY_PREDAWN. `sun = −5°`
SFX     tiếng bản lề gỗ nhỏ, hai lần, lệch nhau 0,3s
CUT     giữ liên tục sang S03 (camera bắt đầu trôi vào)

## S03 · C03–C05 · [15,9–37,5s] · live-object ⭐ KHUNG THUMBNAIL
SCENE   Nghi thức buổi sáng. Nước thay, hương thắp, 鈴 gõ một lần. Một sợi khói dựng lên thẳng rồi
        vỡ. **座布団 bên cạnh còn lõm** — dấu vừa có người ngồi.
CAMERA  dolly-in rất chậm 0,4m trong 21s, 50mm → 65mm, kết ở cỡ trung cận của 香炉 và sợi khói.
        Chủ thể (sợi khói) trôi từ 1/3 phải về gần giữa nhưng **không bao giờ đúng giữa**
ELEMENT 0s bàn tay đặt 湯呑み mới xuống, nước trong còn gợn (mặt nước dao động tắt dần, hàm thuần
        của `t`) · 6s que hương cắm xuống 香炉, tro xám mịn lún nhẹ quanh chân que ·
        8s **lửa bắt vào đầu hương**: đốm đỏ cam ở ĐẦU TRÊN, cháy dần **từ trên xuống**, tàn trắng
        cong xuống · 10s một tiếng 鈴, vành chuông rung biên độ giảm dần theo hàm mũ ·
        12s **SỢI KHÓI — VOLUMETRIC SCATTERING THẬT**: cột khói tầng chảy (laminar) thẳng lên
        ~18cm, rồi **vỡ thành rối** (seeded curl noise, mulberry32) — ⛔ KHÔNG billboard sprite,
        ⛔ không mặt phẳng alpha ·
        16s luồng sáng lam-bạc yếu từ 障子 cắt chéo qua khói; **hạt bụi** trong luồng: Mie
        scattering, hạt nhỏ, chuyển động Brown chậm theo seed · 19s **座布団 vào khung ở
        góc dưới-phải: nếp lõm đã bake sẵn** (cloth bake, không mô phỏng thời gian thực)
        Ánh sáng: CANDLE_WARM + SKY_PREDAWN + **luồng ngoại lệ thumbnail** (xem METADATA). `sun = −4°`
SFX     nước rót nhỏ ở 2s · tiếng hương bắt lửa ở 8s · 鈴 một tiếng ở 10s, ngân dài
CUT     cắt sang S04 khi tiếng 鈴 gần tắt

## S04 · C06–C07 · [37,5–52,0s] · live-object
SCENE   **Người thứ hai đi ngang.** Chỉ thấy ở tiền cảnh dưới dạng một vệt sáng thay đổi trên sàn
        hành lang phía sau — ⛔ KHÔNG dựng người, KHÔNG dựng bóng người.
CAMERA  tĩnh, 35mm, cao 0,75m, quay ra **hướng ngược với S02** — nhìn từ chỗ ngồi về phía cửa
        ngăn với hành lang. 仏壇 giờ nằm ngoài khung sau lưng máy
ELEMENT 0s khung cửa ngăn mở hé ~20cm, phía sau là hành lang tối · 4s **ánh sáng trên mặt sàn
        hành lang tối đi rồi sáng lại** — thứ duy nhất cho biết có người đi qua khe cửa.
        Dựng bằng che khuất nguồn sáng bếp phía xa, KHÔNG dựng hình dáng ·
        6,5s **ánh sáng đứng yên 0,5 giây** — nửa giây 私 nghe thấy bước chân dừng · 7s tiếp tục,
        đi hết · 11s một ô sáng vàng ấm xuất hiện xa ở cuối hành lang (đèn bếp vừa bật) ·
        13s hơi nước rất mỏng bay qua ô sáng đó (ấm nước)
        Ánh sáng: KITCHEN_WARM xa, yếu, chỉ làm nền. Phòng vẫn CANDLE_WARM. `sun = −4°`
SFX     ván sàn kêu **một tiếng** ở 5s · nửa giây im · bước chân đi tiếp, xa dần ·
        tiếng nước ở bếp vào từ 11s, rất xa
CUT     cắt về hướng 仏壇 — sang S05

## S05 · C08–C09 · [52,0–77,3s] · live-object
SCENE   Sợi khói hương, cận cảnh, ánh nến bên dưới. Khói lên thẳng một đoạn rồi vỡ — nhìn lâu.
        Rồi camera lùi rất chậm, thấy chỗ ngồi trống bên cạnh 座布団 lõm.
CAMERA  bắt đầu 85mm cận sợi khói, **dolly-out chậm 25s** về 50mm; sợi khói giữ ở 1/3 trái suốt
        quá trình, không kéo về giữa
ELEMENT 0s cận cảnh: đoạn tầng chảy của khói, mặt cắt gần như trong suốt, ánh nến xuyên qua tạo
        **tán xạ tiến (forward scattering) mạnh hơn phía đối diện** — đây là dấu hiệu volumetric
        đúng · 6s điểm vỡ thành rối trôi lên xuống theo nhiệt đối lưu, KHÔNG cố định độ cao ·
        11s bắt đầu lùi, thấy 香炉 và tro · 16s thấy mép 仏壇 và ánh vàng lá trong lòng ·
        21s thấy 座布団 lõm và khoảng chiếu trống bên cạnh
        ⚠ Khói **không được tụ thành hình gì**. Nếu thấy noise sinh ra hình dạng gợi mặt người hay
        bóng người ở bất kỳ frame nào → đổi seed. Đây là ràng buộc 1
        Ánh sáng: CANDLE_WARM chủ đạo. `sun = −3°`
SFX     môi trường **mỏng dần** từ 0s (theo [AUDIO DIRECTION] C08) · ~18s chỉ còn tiếng bấc nến
CUT     hoà tan chậm 1,2s sang S06

## S06 · C10–C11 · [77,3–87,8s] · live-object
SCENE   Toàn cảnh phòng từ trên cao hơn một chút, rất rộng, rất tối. Một chỗ ngồi, một 仏壇,
        một ngọn nến. Câu hỏi 「おかしいんでしょうか」 rơi vào cái phòng trống này.
CAMERA  tĩnh, 28mm, cao 1,35m (cao hơn mọi shot khác — cố ý tạo cảm giác nhìn chính mình từ ngoài);
        chủ thể lệch **dưới-trái**, 2/3 trên khung là tường và bóng tối
ELEMENT 0s cả phòng trong một khung: 仏壇 trái, 障子 phải, chiếu ở giữa, trần không thấy ·
        4s ngọn nến nhấp nháy một nhịp lớn (flicker tất định mulberry32) · 6s có **1,5s gap**
        sau C10 trong kịch bản — giữ khung tuyệt đối tĩnh suốt gap, không chuyển động nào ·
        8,5s mép dưới 障子 **bắt đầu nhạt hơn mép trên** — dấu hiệu đầu tiên của bình minh, rất khẽ
        Ánh sáng: CANDLE_WARM + SKY_PREDAWN đang nhích. `sun = −6° → −2°`
CUT     cắt sang S07 · **THẺ CHƯƠNG 2** 「第2章 — 旅のはじまり」 chồng lên đầu S07

---

# 第2章 — 旅のはじまり (C12–C34) · 9 shot · ~226,5s

⭐ **Chương này ánh sáng ngoài gần như đứng im** (`sun` −1° → +1°). Phòng **tối đi**, không sáng
lên. Cả chương chỉ có ngọn nến. Đây là lúc 私 ở trong đầu mình — thế giới ngoài không nhúc nhích.
Đa dạng cảnh trong chương này đến từ **cỡ cảnh và hướng**, không từ ánh sáng.

## S07 · C12–C14 · [87,8–110,3s] · live-object
SCENE   Ngọn nến, cận cảnh trung. Phòng quanh nó tối hơn hẳn 第1章. Ba điều "hình dung được"
        (không đói, không lạnh, không đau) ứng với ba lần ánh nến nở rộng ra thêm một chút.
CAMERA  tĩnh, 65mm, cao 0,75m, ngọn nến ở **1/3 phải**; 2/3 trái là bóng tối có vân gỗ 仏壇 rất mờ
ELEMENT 0s ngọn lửa: **nhân xanh ở gốc** (cháy đủ oxy), thân vàng, đỉnh cam, dao động sin biên độ
        3% chu kỳ 2,1s — hàm thuần của `t` · 2s **sáp chảy**: một giọt đục bò xuống thân nến,
        đông lại ở nửa chừng · 7s bán kính sáng **nở thêm ~8%** (ứng C13 「思い描けます」) ·
        14s nở thêm lần hai · 19s nở thêm lần ba — mỗi lần một ô tatami nữa thoát khỏi bóng tối
        Ánh sáng: **chỉ CANDLE_WARM**. 障子 ở ngoài khung. `sun = −1°`
SFX     bấc nến nổ tách một tiếng ở 1s (theo [AUDIO DIRECTION] C12)
CUT     cắt sang S08 — cắt ĐÚNG lúc C15 bắt đầu

## S08 · C15–C17 · [110,3–137,0s] · live-object ⭐ CAO TRÀO 1
SCENE   **Chỗ trí tưởng tượng dừng = chỗ ánh sáng không tới.** Bán kính sáng của nến co lại, và
        lần này nó dừng ở một đường rõ rệt. Ngoài đường đó: đen đặc, không fill, không gợi ý gì.
CAMERA  dolly-in cực chậm 0,25m trong 26s, 65mm → 85mm, tiến về **mép của vùng sáng** chứ không
        về ngọn nến. Kết khung: nửa trái là chiếu còn thấy được, nửa phải là đen
ELEMENT 0s bán kính sáng như cuối S07 · 6s (C15 「もう何も思っていない」) **bán kính co lại 30%
        trong 4s** — không giật, ease-in-out; một ô tatami, rồi mép 仏壇, rồi 座布団 lần lượt
        chìm vào đen · 13s (C16) camera tới sát **đường ranh sáng-tối**: thấy rõ đây là một
        **đường**, có độ rơi ánh sáng thật (nghịch đảo bình phương), không phải vignette ép ·
        20s (C17 「壁に手をついた」) ranh giới **đứng yên tuyệt đối 6s** — thứ duy nhất còn động
        trong khung là hạt bụi rơi chậm trong vùng sáng
        ⚠ Bên kia ranh giới **KHÔNG CÓ GÌ**. Không hình mờ, không ánh lam, không đường viền.
        Đen tuyệt đối. Đây là ràng buộc 1 và cũng là luận điểm của shot
        Ánh sáng: CANDLE_WARM co lại. `sun = 0°`
SFX     môi trường rút hết ở 5s (theo [AUDIO DIRECTION] C15 「音を抜く」). Từ 6s→26s chỉ còn
        tiếng bấc nến, không có gì khác
CUT     ngọn nến lay một nhịp lớn → cắt sang S09

## S09 · C18–C20 · [137,0–163,2s] · live-object
SCENE   Bering vào cảnh. **Không dựng người, không dựng phòng thí nghiệm.** Một tập giấy cũ đặt
        trên chiếu trong vùng sáng nến — trang in, chữ mờ, camera không đọc được nội dung.
        Nhãn chữ hiện bên cạnh.
CAMERA  tĩnh 50mm, cao 0,45m (thấp hơn — ngang mặt chiếu); tập giấy ở **1/3 dưới-trái**
ELEMENT 0s ngọn nến lay mạnh một nhịp (nối từ S08) · 3s tập giấy vào vùng sáng: giấy ngả vàng,
        mép hơi cong vì ẩm, bóng đổ mềm trên chiếu · 8s **NHÃN CHỮ** hiện lên (fade 1,2s, không
        bay, không trượt), đặt ở 1/3 phải trên nền tối:
        「ジェシー・ベリング 2002年」
        「Journal of Cognition and Culture 2(4)」
        Font **BIZ UDPGothic**, canvas texture, `await document.fonts.load` trước nhãn đầu tiên ·
        16s nhãn mờ đi còn 40%, giữ ở đó · 20s một trang giấy **lật nhẹ vì luồng đối lưu từ nến**
        — chuyển động có nguyên nhân vật lý trong khung (ràng buộc 1)
        Ánh sáng: CANDLE_WARM. `sun = +0,5°`
CUT     cắt sang S10

## S10 · C21–C23 · [163,2–192,5s] · live-object
SCENE   Hai loại câu hỏi, dựng bằng **hai vị trí trong khung** chứ không bằng bảng. Câu hỏi về
        THÂN THỂ đặt phía ngoài vùng sáng và chìm đi; câu hỏi về TÂM đặt trong vùng sáng và ở lại.
CAMERA  pan phải rất chậm 14° trong 29s, 50mm, cao 0,45m — quét từ vùng tối sang vùng sáng nến
ELEMENT 0s bắt đầu ở vùng ngoài rìa sáng · 4s nhãn 「喉が渇く」「眠くなる」 hiện ở vùng tối,
        độ sáng chỉ 35%, rồi **mờ tắt hẳn ở 9s** — thân thể thì "không" ·
        14s pan tới vùng sáng, nhãn 「奥さんを愛している」「自分が死んだことを知っている」 hiện ở
        độ sáng 100% và **ở lại tới hết shot** — tâm thì "có" ·
        22s (C23 「ぐっと増えます」) hai nhãn này **dày lên nhẹ** (weight Regular → Bold, chuyển
        trong 1,5s), không phóng to, không nhấp nháy
        ⚠ Nhãn là chữ trên nền tối, KHÔNG phải cột biểu đồ, KHÔNG có phần trăm, KHÔNG có mũi tên
        Ánh sáng: CANDLE_WARM. `sun = +0,7°`
SFX     một nhịp im ~1s ở 21s (theo [AUDIO DIRECTION] C23)
CUT     cắt sang S11

## S11 · C24–C25 · [192,5–211,3s] · live-object
SCENE   Chỗ lệch giữa điều người ta nghĩ và điều người ta trả lời. Dựng bằng **hai lớp phản chiếu
        không trùng nhau** trên mặt sơn mài của 仏壇.
CAMERA  tĩnh, 85mm, cao 0,6m, cận mặt sơn mài đen ở cánh cửa 仏壇 đang mở, hơi nghiêng
ELEMENT 0s mặt sơn mài đen phản chiếu ngọn nến — **hai hình phản chiếu**: một ở lớp clearcoat
        trên cùng (sắc nét), một ở lớp sơn dưới (mờ, lệch vài mm vì độ dày lớp phủ). Đây là hiện
        tượng quang học thật của sơn mài, không phải hiệu ứng bịa ·
        6s camera nghiêng 3° rất chậm → **hai hình phản chiếu tách xa nhau ra** ·
        12s (C25 「ずれている」) khoảng lệch lớn nhất, giữ 4s · 16s nhãn nhỏ 「信じている／いない
        の問題ではない」 ở 1/3 dưới, độ sáng 70%
        Ánh sáng: CANDLE_WARM. `sun = +0,8°`
CUT     cắt sang S12

## S12 · C26–C27 · [211,3–231,7s] · live-object
SCENE   シミュレーション制約 được đặt tên. Đầu người "tua lại" được nhiều thứ — dựng bằng
        **một bát nước lạnh** đặt trong vùng sáng, đúng ví dụ kịch bản dùng.
CAMERA  dolly-in 0,2m trong 20s, 65mm → 80mm, hạ dần cao độ 0,45m → 0,35m
ELEMENT 0s nhãn 「シミュレーション制約」 hiện giữa khung trên nền tối, giữ 5s rồi lùi xuống góc
        dưới-trái ở 30% sáng (ở lại tới hết chương) · 7s một bát nước nông vào khung: mặt nước
        phẳng, phản chiếu ngọn nến, **hơi nước rất mỏng bốc lên vì chênh nhiệt** ·
        13s bàn tay lại gần mặt nước nhưng **KHÔNG chạm** — dừng cách 2cm; đây là "tua lại trong
        đầu mà không thực sự làm" · 17s bàn tay rút ra, mặt nước không hề gợn
        Ánh sáng: CANDLE_WARM. `sun = +0,9°`
CUT     cắt sang S13

## S13 · C28–C29 · [231,7–259,9s] · live-object
SCENE   Thứ duy nhất không tua lại được. Bát nước vẫn đó, nhưng **phản chiếu trong nó trống rỗng**
        — không phải đen, mà là **không có ảnh**. Rồi đầu người lấp chỗ trống bằng thứ gần nhất.
CAMERA  tĩnh, 80mm, cao 0,35m, mặt nước chiếm 2/3 dưới khung
ELEMENT 0s mặt nước phản chiếu ngọn nến rõ · 6s (C28 「再生できない」) **hình phản chiếu ngọn nến
        nhạt dần tới 0 trong 5s** — mặt nước vẫn sáng, vẫn có nước, chỉ là **không phản chiếu gì**.
        ⚠ Không thay bằng hình khác. Không có gì hiện lên. Đây là ràng buộc 1 ·
        14s (C29 「いちばん近いものを当てはめます」) ba nhãn hiện lần lượt quanh mép bát, mỗi nhãn
        cách nhau 2,5s: 「知っている」「思っている」「聞いている」 — hiện ở **rìa** vùng sáng,
        không ở giữa, độ sáng 65% · 24s cả ba giữ nguyên
        Ánh sáng: CANDLE_WARM. `sun = +1,0°`
CUT     cắt sang S14

## S14 · C30 · [259,9–272,8s] · live-object
SCENE   Kết luận đoạn Bering. Lùi ra thấy lại cả chỗ ngồi: bát nước, nến, mép 仏壇 — nhưng nhìn
        từ **phía sau vai 私** (không thấy đầu, chỉ thấy mép vai và chiếu).
CAMERA  tĩnh, 40mm, cao 1,0m, đặt sau và cao hơn chỗ ngồi; **chủ thể ở 1/3 dưới-phải**
ELEMENT 0s khung rộng hơn hẳn ba shot trước — đổi cỡ cảnh để tránh rập khuôn · 4s nhãn
        「信仰の話ではない」 hiện ở 1/3 trên-trái, 75% sáng · 8s nhãn thứ hai dưới nó:
        「頭の作りの話」 · 11s cả hai giữ; khói hương (đã ngắn hơn ở S03) vẫn lên đều
        ⚠ Mép vai dựng ở mức **bóng tối gần như đặc**, chỉ đủ đọc ra "có người ngồi đây".
        ⛔ Không dựng đầu, không dựng mặt, không dựng bóng đổ hình người lên tường
        Ánh sáng: CANDLE_WARM. `sun = +1,0°`
CUT     hoà tan 1,0s sang S15

## S15 · C31–C33 · [272,8–302,1s] · live-object ⭐ CHẶNG GIỚI HẠN 1
SCENE   **「これは仮説です」.** Hình phải cho thấy sự chưa chắc. Dựng bằng **hai nhãn cùng cỡ,
        cùng độ sáng, đặt cân nhau trong khung** — không cái nào lớn hơn, không cái nào sáng hơn.
CAMERA  tĩnh tuyệt đối, 50mm, cao 0,6m, khung chia đôi theo chiều dọc bởi mép cánh 仏壇 đang mở
ELEMENT 0s khung tối, chỉ có đường mép cánh 仏壇 chạy dọc giữa · 4s (C31) nhãn trái hiện:
        「ベリング 2002 — シミュレーション制約」 · 10s (C32) nhãn phải hiện, **cùng cỡ chữ, cùng
        độ sáng, cùng khoảng cách tới mép khung**: 「ニコルズ 2007 — 想像の妨げ」 ·
        16s một **dấu hỏi nhỏ** (?) xuất hiện ở chính giữa, giữa hai nhãn, 50% sáng ·
        20s (C33) cả ba giữ nguyên tới hết shot; ánh nến lay làm hai nhãn **sáng tối luân phiên
        nhẹ**, không cái nào thắng
        ⚠ ⛔ Không mũi tên giữa hai nhãn. ⛔ Không dấu ✓/✗. ⛔ Không cái nào mờ đi. Nếu một nhãn
        sáng hơn cái kia ở bất kỳ frame nào → hỏng luận điểm của shot
        Ánh sáng: CANDLE_WARM. `sun = +1,0°`
SFX     ドローン thấp **hạ một bậc** ở 0s (theo [AUDIO DIRECTION] C31)
CUT     cắt sang S16

## S16 · C34 · [302,1–314,3s] · live-object
SCENE   「私ひとりの癖ではなかった」. Quay lại chỗ ngồi, khung y như S06 (toàn cảnh phòng) nhưng
        **cao độ thấp hơn và ấm hơn một chút** — cùng chỗ, đã khác cảm giác.
CAMERA  tĩnh, 28mm, cao 1,15m (S06 là 1,35m); chủ thể dưới-trái như S06 để mắt nhận ra là cùng phòng
ELEMENT 0s toàn cảnh phòng · 5s bán kính sáng nến **nở lại** về mức đầu S07 — chậm, 5s, ease-out ·
        10s có **2,0s gap** sau C34; giữ khung tĩnh suốt gap, chỉ khói hương còn động
        Ánh sáng: CANDLE_WARM nở lại. `sun = +1,0°`
CUT     cắt sang S17 · **THẺ CHƯƠNG 3** 「第3章 — 深いところ」 chồng lên đầu S17

---

# 第3章 — 深いところ (C35–C70) · 12 shot · ~371,4s

⭐ **Chương dài nhất, và là chương ánh sáng làm việc.** `sun` đi từ +2° tới +18°. Vệt sáng qua
障子 bò lên chiếu và tiến dần về phía 仏壇. Ba mốc 1917 / 1996 / 2023 là **ba vị trí của vệt sáng
trên cùng một chỗ ngồi** (cảnh dựng #5). ⛔ Không đồ thị, không timeline mũi tên.

## S17 · C35–C38 · [314,3–352,1s] · live-object ⭐ CAO TRÀO 2
SCENE   **Tia trực xạ đầu tiên.** Mép dưới 障子 sáng lên, và một vệt sáng hình chữ nhật đặt chân
        lên chiếu. Giấy 障子 sáng xuyên qua — không phải mặt phẳng trắng.
CAMERA  tĩnh 8s, rồi pan trái rất chậm 10° trong 30s theo hướng vệt sáng, 40mm, cao 0,55m
ELEMENT 0s 障子 chiếm 2/3 phải khung, vẫn lam · 5s **mép dưới sáng lên trước** (mặt trời thấp) ·
        8s **giấy 障子 = SUBSURFACE SCATTERING**: ánh sáng xuyên qua sợi giấy, thấy được **vân
        sợi washi** và bóng mờ của 桟 gỗ in lên từ phía sau. ⛔ Không dựng 障子 như mặt phẳng
        emissive trắng · 14s tia trực xạ đầu tiên chạm mép chiếu — một hình chữ nhật sáng
        (bóng của ô 桟) dài ~25cm · 22s (C37 「そろそろ前を向きなさい」) camera pan tới, vệt sáng
        nằm ở 1/3 dưới-trái · 30s vệt sáng **nhích thêm ~3cm** — đủ để mắt thấy nó đang di chuyển
        Ánh sáng: SUN_LOW (1,0 · 0,90 · 0,72) bắt đầu có mặt + CANDLE_WARM yếu đi tương đối.
        `sun = +2° → +4°`
SFX     môi trường ban mai **dày lên rất nhẹ** · một nhịp im ở 28s (C38)
CUT     cắt sang S18

## S18 · C39–C41 · [352,1–377,4s] · live-object ⭐ TRẠNG THÁI ÁNH SÁNG 1917
SCENE   Freud 1917. **Vệt sáng mới chỉ nằm ở mép ngoài chiếu, cách chỗ ngồi xa nhất.**
        Đây là trạng thái thứ nhất của ba trạng thái.
CAMERA  tĩnh, 50mm, cao 0,55m, khung cố định — **GHI LẠI: S18, S20, S23 dùng ĐÚNG khung này**,
        chỉ khác vị trí vệt sáng. 座布団 ở 1/3 phải, vệt sáng ở mép trái
ELEMENT 0s vệt sáng ở mép trái, cách 座布団 ~1,2m · 6s nhãn 「フロイト 1917『喪とメランコリー』」
        hiện ở vùng tối phía trên vệt sáng, 75% sáng · 12s nhãn thứ hai, nhỏ hơn:
        「悲しみの仕事＝結びつきをほどく」 · 18s (C41 「光が一段階、変わる」) vệt sáng **nhích
        và sáng thêm một nấc rõ rệt trong 3s**, nhưng vẫn ở mép trái
        ⚠ Nhãn này là ghi chú lịch sử, **KHÔNG phải lời buộc tội**. ⛔ Không đánh dấu ✗,
        ⛔ không đặt nhãn vào chỗ tối nhất khung như thể nó xấu
        Ánh sáng: SUN_LOW + CANDLE_WARM. `sun = +4,5°`
CUT     cắt sang S19

## S19 · C42–C43 · [377,4–401,3s] · live-object
SCENE   「もう忘れなさい」 — câu đó từ đâu xuống. Dựng bằng **bóng của khung 桟 in lên chiếu**:
        một lưới ô vuông đều đặn, cái thước đo của một trăm năm, in lên chỗ người ta ngồi.
CAMERA  dolly-in chậm 0,3m trong 24s, 50mm → 70mm, tiến về phía lưới bóng trên chiếu
ELEMENT 0s thấy lưới bóng 桟 trên chiếu: các ô vuông đều tăm tắp, mép hơi nhoè (bán bóng — nguồn
        sáng có kích thước, không phải point light) · 8s (C42) hai nhãn hiện ở hai ô lưới khác
        nhau: 「断ち切れた人＝立ち直った人」 và 「断ち切れない人＝途中の人」 ·
        16s (C43) camera tới gần, thấy **lưới bóng phủ lên cả 座布団** — cái thước đặt lên chỗ
        người ngồi · 21s nhãn nhỏ: 「この百年の物差し」
        Ánh sáng: SUN_LOW. `sun = +6°`
CUT     cắt sang S20

## S20 · C44–C47 · [401,3–442,7s] · live-object ⭐ TRẠNG THÁI ÁNH SÁNG 1996
SCENE   **1996.** ĐÚNG khung S18. Vệt sáng đã qua mép ô tatami thứ nhất — gần chỗ ngồi hơn hẳn.
        Không có hiệu ứng "lật", không có flash. Chỉ là ánh sáng đã đi được một quãng.
CAMERA  tĩnh, 50mm, cao 0,55m — **khớp từng độ với S18**
ELEMENT 0s so với S18: vệt sáng đã dịch ~40cm về phía 座布団, rộng hơn, ấm hơn ·
        5s nhãn 「1996年『続いていく絆』」 hiện **trong vùng sáng** (S18 đặt nhãn trong vùng tối —
        đây là khác biệt cố ý, đọc được mà không cần giải thích) ·
        11s nhãn nhỏ: 「クラス・シルバーマン・ニックマン」 ·
        19s (C46 「二十人を超える研究者」) lưới bóng 桟 trong vệt sáng **hiện rõ dần** — nhiều ô,
        mỗi ô một nghiên cứu, nhưng ⛔ KHÔNG đánh số, KHÔNG dựng thành biểu đồ ·
        28s (C47 「写真に話しかけ」) vệt sáng chạm mép 座布団 · 35s giữ
        ⚠ Ở C47 kịch bản nhắc 「写真に話しかけ」. ⛔ KHÔNG dựng tấm ảnh có mặt người trong khung.
        Nếu cần gợi, dùng một khung ảnh **úp mặt xuống hoặc chỉ thấy mặt sau** ở rìa khung
        Ánh sáng: SUN_LOW mạnh hơn. `sun = +8°`
CUT     cắt sang S21

## S21 · C48–C50 · [442,7–480,7s] · live-object
SCENE   「学問がようやく見に行った」. Camera hạ xuống sát mặt chiếu, nhìn dọc theo vệt sáng về
        phía 障子 — hướng ngược lại với ánh sáng đang đi. Nhìn về phía nguồn.
CAMERA  tĩnh 12s rồi dolly-back 0,4m trong 26s, 35mm, cao **0,12m** (thấp nhất cả tập)
ELEMENT 0s góc nhìn sát chiếu: thấy từng sợi cỏ dệt tatami trong ánh xiên, nổi khối rõ (grazing
        light) · 6s (C48) nhãn 「人が何をしているかを調べて出たものではなかった」 ·
        15s có **2,0s gap** sau C49 — giữ tĩnh, chỉ bụi trong luồng sáng còn động ·
        22s (C50 「そこまでは言えていません」) camera bắt đầu lùi, vệt sáng **không tiến thêm được
        nữa trong khung** vì camera lùi nhanh hơn ánh sáng đi — cảm giác "chưa tới được"
        Ánh sáng: SUN_LOW, tán xạ Mie trong bụi rõ nhất ở shot này. `sun = +9,5°`
CUT     cắt sang S22

## S22 · C51–C55 · [480,7–537,6s] · live-object ⭐ CHẶNG GIỚI HẠN 2
SCENE   **Field 2006: 内在化 và 外在化.** Dựng bằng **hai chỗ trong phòng**, không bằng sơ đồ hai
        cột. 内在化 = ánh sáng trên chiếu nơi người ngồi. 外在化 = ánh sáng hắt ra ngoài 障子.
        Rồi C54–C55 phải **gỡ bỏ chính sự phân đôi đó**.
CAMERA  pan phải 16° chậm trong 30s, rồi tĩnh 27s, 45mm, cao 0,55m
ELEMENT 0s nhãn 「ナイジェル・フィールド 2006年ごろ」 ở góc trên-trái, 70% ·
        6s (C52) nhãn 「内在化」 đặt **trên chiếu, trong vệt sáng, gần chỗ ngồi** ·
        16s (C53) pan tới 障子; nhãn 「外在化」 đặt **trên mặt giấy 障子**, phía ngoài phòng ·
        24s nhãn nhỏ 「重なりやすい」 giữa hai chỗ, 55% sáng ·
        32s (C54 「どちらがどちらを引き起こしているか、わかりません」) ⭐ **hai nhãn 内在化/外在化
        ĐỔI ĐỘ SÁNG QUA LẠI hai lần, chậm 4s mỗi lần** — không cái nào cố định thắng; rồi cả hai
        về **cùng một độ sáng 70%** và ở đó ·
        46s (C55 「物差しには使えません」) lưới bóng 桟 **trượt lệch khỏi nhãn** — cái thước không
        khớp lên được
        ⚠ ⛔ Không mũi tên nhân quả. ⛔ Không đặt 内在化 sáng hơn 外在化 ở khung cuối. ⛔ Không
        nhãn 複雑性悲嘆. Đây là tương quan, và hình phải nói đúng chừng đó
        Ánh sáng: SUN_LOW. `sun = +10,5°`
SFX     giữ mỏng, không nhấn — đoạn này lời đọc [ゆっくり、はっきり]
CUT     cắt sang S23

## S23 · C56–C58 · [537,6–574,4s] · live-object ⭐ CHẶNG GIỚI HẠN 3 + TRẠNG THÁI ÁNH SÁNG 2023
SCENE   **Hewson 2023.** ĐÚNG khung S18/S20. Vệt sáng đã tới giữa phòng — **và dừng ngay trước
        仏壇, chưa chạm tới**. Đó là hình của 「結論は、まだわからない」.
CAMERA  tĩnh, 50mm, cao 0,55m — **khớp từng độ với S18 và S20**
ELEMENT 0s vệt sáng ở giữa khung, mép trước của nó cách chân 仏壇 ~30cm — **khoảng hở này phải
        đọc được rõ** · 6s nhãn 「ヒューソンほか 2023年・Death Studies」 ·
        12s (C57) nhãn 「七十九本の研究」 ⚠ **ĐÚNG con số 79. ⛔ KHÔNG viết "79/319". Con số 319
        đã bị loại vì không tra ra nguồn** · 17s có một nhịp im (C57 [AUDIO DIRECTION]) ·
        20s nhãn 「結論：まだわからない」 hiện **ở đúng khoảng hở 30cm giữa vệt sáng và 仏壇** —
        chữ nằm trong vùng chưa được chiếu tới · 28s (C58) cả ba nhãn giữ; vệt sáng
        **không nhích thêm trong suốt shot này** — lần duy nhất cả tập ánh sáng đứng im khi trời
        đã sáng. Đó là "chưa biết"
        ⚠ ⛔ Không dựng 79 vạch, 79 điểm, 79 ô. Con số là CHỮ, không phải đồ thị. Kênh 1 làm 図解,
        kênh này làm cảnh
        Ánh sáng: SUN_LOW. `sun = +12°` (giữ nguyên suốt shot)
CUT     cắt sang S24

## S24 · C59–C60 · [574,4–589,2s] · live-object ⭐ CAO TRÀO 3 (mở)
SCENE   **Camera quay về 仏壇** lần đầu sau cả chương nhìn xuống chiếu. Cú lật bắt đầu ở đây.
CAMERA  pan trái 30° trong 9s (nhanh hơn mọi pan khác của tập nhưng vẫn ≥4s và không giật),
        50mm → 60mm, kết ở 仏壇 chiếm **1/3 trái**, vệt sáng còn thấy ở mép dưới-phải
ELEMENT 0s bắt đầu từ chiếu · 4s 仏壇 vào khung · 9s dừng: thấy lòng 仏壇, **vàng lá đang hắt lại
        CẢ ánh nến (ấm) LẪN ánh sáng sớm (lạnh hơn)** — hai nhiệt màu trên cùng một mặt vàng,
        đây là lần đầu trong tập · 12s (C60 「この箱は、ずっと前からやっていました」) không nhãn,
        không chữ — để hình đứng một mình
        ⛔ Trong lòng 仏壇 vẫn KHÔNG có vật thể nào (ràng buộc 2)
        Ánh sáng: SUN_LOW + CANDLE_WARM, lần đầu cân nhau. `sun = +14°`
SFX     ドローン trở lại rất khẽ (theo [AUDIO DIRECTION] C59)
CUT     giữ liên tục sang S25

## S25 · C61–C63 · [589,2–619,0s] · live-object
SCENE   Edo. 寺請制度 / 檀家制度. Dựng bằng **chất liệu và tuổi của gỗ**, không bằng bản đồ hay
        niên biểu: camera đi sát bề mặt 仏壇, thấy sơn mài đã rạn, vân gỗ, chỗ tay chạm nhiều đã mòn.
CAMERA  dolly-in cực chậm 0,35m trong 30s, 60mm → 100mm, đi men theo mặt cánh cửa 仏壇
ELEMENT 0s mặt sơn mài ở cỡ cận · 6s thấy **rạn sơn mài (craquelure)** dạng lưới rất mảnh — dấu
        của thời gian, không phải vết bẩn · 10s nhãn 「江戸・十七世紀」 ở góc dưới-phải, 70% ·
        16s nhãn 「寺請制度・檀家制度」 dưới nó · 20s nhãn nhỏ thứ ba: 「幕府の宗教統制」 ⚠ nêu
        trung tính, ⛔ không mỉa, ⛔ không dựng hình quyền lực (không con dấu, không lệnh, không
        cổng thành) · 25s camera tới chỗ **mép cánh cửa đã mòn nhẵn** vì mở mỗi sáng — chi tiết
        này là cầu nối sang C63 「別の働きをしはじめました」
        Ánh sáng: SUN_LOW + CANDLE_WARM. `sun = +15°`
CUT     cắt sang S26

## S26 · C64–C67 · [619,0–651,3s] · live-object
SCENE   「置き場所を与えた」. Bốn việc làm bằng tay: thay nước, thắp lửa, gõ 鈴, nói thành tiếng.
        Cận cảnh bàn tay, bốn nhịp, mỗi nhịp một việc.
CAMERA  tĩnh, 80mm, cao 0,4m, bàn tay và các vật ở **1/3 dưới**; 2/3 trên là lòng 仏壇 tối có vàng
        lá hắt. Đổi hẳn cỡ cảnh sau S25 để tránh rập khuôn
ELEMENT 0s (C64) khung tĩnh, chưa có tay — 6s trống là cố ý, lời đọc đang nói 仏壇 không bảo gì cả ·
        8s **việc 1** — bàn tay nhấc 湯呑み, nước cũ đổ, nước mới rót; mặt nước gợn rồi lặng ·
        14s **việc 2** — que diêm, lửa bắt vào hương, khói bắt đầu ·
        20s **việc 3** — dùi gõ 鈴, vành chuông rung, biên độ giảm theo hàm mũ ·
        26s **việc 4** — bàn tay đặt xuống hai đầu gối và **dừng hẳn**; đây là lúc nói thành tiếng,
        và hình không minh hoạ nó (không dựng miệng, không dựng sóng âm) ·
        30s bàn tay rút khỏi khung
        Da bàn tay: **SSS**, thấy mạch máu mờ dưới da ở chỗ mỏng, móng tay có độ trong. ⛔ Không
        dựng mặt, không dựng thân trên
        Ánh sáng: SUN_LOW + CANDLE_WARM. `sun = +17°`
SFX     nước rót · diêm quẹt · 鈴 một tiếng (ba hiệu ứng, đúng ba mốc trên)
CUT     cắt sang S27

## S27 · C68–C70 · [651,3–685,7s] · live-object ⭐ RÀNG BUỘC 4 — HAI ĐƯỜNG, MỘT ĐÍCH
SCENE   Hai cách, không xếp hạng. Dựng bằng **hai vệt sáng riêng biệt trên cùng một mặt chiếu,
        đi từ hai hướng khác nhau, gặp nhau ở cùng một điểm** — cùng độ sáng, cùng bề rộng.
CAMERA  tĩnh 14s, rồi craning lên chậm từ 0,55m → 1,0m trong 20s, 40mm — nhìn xuống chỗ hai vệt gặp
ELEMENT 0s một vệt sáng quen thuộc từ 障子 bên phải · 6s (C69 「欧米にも」) **vệt thứ hai** vào
        khung từ bên trái — nguồn: một ô cửa khác, ngoài khung. **Cùng nhiệt màu, cùng cường độ,
        cùng bề rộng với vệt thứ nhất** ⚠ nếu hai vệt khác nhau về bất kỳ thuộc tính nào → thành
        xếp hạng, hỏng ràng buộc 4 ·
        12s nhãn nhỏ ở vệt phải: 「家具の形をした置き場所」 · 14s nhãn ở vệt trái: 「墓の前で、
        写真の前で」 — ⛔ KHÔNG dựng mộ, KHÔNG dựng ảnh có mặt người. Chỉ CHỮ ·
        20s camera lên, thấy **hai vệt chạm nhau và chồng lên cùng một chỗ trên chiếu** ·
        28s (C70 「同じところに出た」) vùng chồng lấp sáng hơn hai vệt riêng lẻ — cộng ánh sáng
        đúng vật lý · 32s có **2,0s gap** sau C70; giữ tĩnh
        ⛔ Không nhãn 「日本」「欧米」 đặt cạnh nhau như hai phe. ⛔ Không cái nào ở vị trí cao hơn
        trong khung
        Ánh sáng: SUN_LOW ×2. `sun = +18°`
CUT     cắt sang S28 · **THẺ CHƯƠNG 4** 「第4章 — 帰り道」 chồng lên đầu S28

---

# 第4章 — 帰り道 (C71–C88) · 7 shot · ~186,9s

⭐ Về đúng căn phòng 第1章, nhưng **障子 đã sáng hẳn** và bóng 桟 đã đi hết chiều ngang chiếu.
Ánh nến vẫn cháy nhưng gần như vô hình trong ánh ngày — không ai tắt nó.
⛔ **Không một động tác đóng lại nào trong cả chương này** (ràng buộc 8).

## S28 · C71–C72 · [685,7–702,7s] · live-object
SCENE   Buổi sáng đã tới. Bóng 桟 **đã đi hết chiều ngang chiếu** — đúng câu 「渡りきっています」.
        Hương đã ngắn, trà đã nguội.
CAMERA  tĩnh, 40mm, cao 0,55m, khung rộng lấy cả chiếu; **bóng 桟 chạy chéo từ dưới-trái lên
        giữa-phải**, tới mép chiếu bên kia
ELEMENT 0s cả chiếu nằm trong ánh sáng; lưới bóng 桟 đã sang tới mép đối diện ·
        5s que hương: **chỉ còn ~25% chiều dài ban đầu**, tro cong xuống ⚠ CON SỐ ĐỐI CHIẾU —
        S03 là 100% · 9s 湯呑み: **mặt nước phẳng lặng tuyệt đối, KHÔNG còn hơi nước bốc lên**
        (S03 và S26 có hơi) — đây là cách dựng "trà đã nguội" bằng vật lý, không bằng chữ ·
        13s ánh nến vẫn cháy nhưng bán kính hữu dụng của nó giờ **nhỏ hơn vùng sáng mặt trời** —
        nó không tắt, chỉ bị át
        Ánh sáng: SUN_MORNING (1,0 · 0,95 · 0,84) chủ đạo + CANDLE_WARM còn đó. `sun = +21°`
SFX     môi trường ban mai **trở lại đầy đủ**: chim gần hơn S01, tiếng xa của khu phố
CUT     cắt sang S29

## S29 · C73–C74 · [702,7–728,8s] · live-object
SCENE   「変わったのは、私が知っている、というところだけ」. Cùng góc S02 (cánh cửa mở) nhưng ánh
        sáng đã khác hẳn. Vật không đổi, ánh sáng đổi.
CAMERA  tĩnh, 50mm, cao 0,75m — **khớp S02** nhưng KHÔNG dolly, giữ tuyệt đối tĩnh 26s
ELEMENT 0s khung y hệt S02 sau khi mở cửa, chỉ khác nhiệt màu và hướng bóng đổ ·
        8s (C74 「わからないことです」) ⭐ **KHÔNG CÓ GÌ HIỆN LÊN, KHÔNG CÓ GÌ CHUYỂN ĐỘNG** trong
        12 giây. Chỉ khói hương yếu (que gần hết) và bụi trong luồng sáng. Đây là shot thực thi
        ràng buộc 1 mạnh nhất cả tập — lời đọc nói "không biết được", và hình không đưa ra
        bất kỳ gợi ý nào ·
        20s bụi trong luồng sáng dày lên nhẹ (không khí bắt đầu động vì chênh nhiệt buổi sáng)
        ⛔ Tuyệt đối không: ánh sáng nhấp nháy, khói tụ hình, vàng lá lóe, âm thanh gợi ý
        Ánh sáng: SUN_MORNING + CANDLE_WARM. `sun = +22°`
CUT     cắt sang S30

## S30 · C75–C76 · [728,8–749,2s] · live-object
SCENE   Điều biết được thứ nhất: đầu mình được làm như vậy. Quay lại **bát nước của S13** —
        giờ nó nằm trong ánh sáng mặt trời, và **có phản chiếu trở lại**.
CAMERA  tĩnh, 80mm, cao 0,35m — **khớp S13 từng độ**
ELEMENT 0s bát nước, cùng vị trí S13, nhưng ánh sáng là SUN_MORNING · 5s mặt nước **phản chiếu
        rõ ô 障子 sáng** — S13 phản chiếu trống rỗng, ở đây có ảnh trở lại. ⚠ Ảnh phản chiếu là
        **ô cửa sổ**, ⛔ không phải hình người, ⛔ không phải khuôn mặt ·
        11s (C76 「私の弱さではなくて」) nhãn 「人間の頭の、もともとの形」 ở 1/3 trên-phải, 70% ·
        16s một gợn rất nhẹ chạy qua mặt nước — nguyên nhân: luồng khí từ 障子 vừa hé (có thật
        trong khung, ràng buộc 1)
        Ánh sáng: SUN_MORNING. `sun = +23°`
CUT     cắt sang S31

## S31 · C77–C79 · [749,2–782,7s] · live-object
SCENE   Điều biết được thứ hai: thay đổi ở **phía này**. Cận cảnh hai bàn tay trên đầu gối,
        trong ánh sáng sớm. Lồng ngực thở — dựng bằng chuyển động rất nhỏ của mép vai ngoài rìa khung.
CAMERA  dolly-in 0,15m trong 33s, 85mm → 100mm; bàn tay ở **1/3 dưới-trái**
ELEMENT 0s hai bàn tay đặt trên đầu gối, da SSS trong ánh xiên — thấy được kết cấu da, nếp gấp
        khớp, ánh sáng xuyên mỏng ở mép ngón · 8s (C77 「こちら側なんです」) một bàn tay **duỗi ra
        rất chậm rồi buông lỏng** — 4s, ease-out; chỉ vậy thôi ·
        16s (C78 「息がしやすい」) mép vai ở rìa khung **lên xuống một nhịp thở chậm** (chu kỳ 4,5s,
        biên độ 6mm — hàm sin thuần của `t`) · 24s (C79) camera tới gần, thấy nhịp thở rõ hơn ·
        30s nhãn nhỏ 「名前をつけた人より、ずっと前から」 ở 1/3 dưới-phải, 65%
        ⛔ Không dựng mặt. ⛔ Không dựng nước mắt
        Ánh sáng: SUN_MORNING. `sun = +24°`
CUT     cắt sang S32

## S32 · C80–C83 · [782,7–822,4s] · live-object ⭐ RÀNG BUỘC 8 — KHÔNG CÓ ĐIỂM KẾT
SCENE   「仏壇には、終わりの日がありません」. Dựng bằng **ánh sáng vẫn đang đi** — vệt sáng trong
        shot này KHÔNG dừng lại một lần nào, và khi shot kết thúc nó vẫn đang đi.
CAMERA  tracking ngang rất chậm sang phải 0,5m trong 40s, 45mm, cao 0,5m — **camera đi cùng tốc độ
        với vệt sáng**, nên vệt sáng đứng yên trong khung còn căn phòng trôi qua phía sau
ELEMENT 0s vệt sáng ở giữa khung, phòng bắt đầu trôi · 10s (C81 「法事には日付があります」) một
        thoáng thấy tấm lịch treo tường ở hậu cảnh — **ngoài tiêu cự, không đọc được chữ, không
        đọc được số** ⚠ ⛔ không đánh dấu ngày nào, ⛔ không khoanh tròn, ⛔ không nhắc 四十九日 ·
        18s lịch trôi khỏi khung · 24s (C82) 仏壇 vào khung từ bên phải, **cánh cửa vẫn mở** ·
        32s (C83) nhãn 「続いていくものと一緒に暮らすための場所」 ở 1/3 dưới ·
        40s camera vẫn đang đi khi shot kết thúc — ⛔ không dừng, ⛔ không settle
        Ánh sáng: SUN_MORNING. `sun = +25°`
CUT     cắt sang S33 **trong lúc camera còn đang chuyển động** — cắt giữa chuyển động là cố ý

## S33 · C84–C85 · [822,4–841,2s] · live-object
SCENE   Quay lại chỗ người thứ hai đã đi ngang (khung S04), giờ trong ánh sáng ban ngày. Hành lang
        sáng, cửa ngăn vẫn hé, không có ai — và chỗ đó **không còn tối nữa**.
CAMERA  tĩnh, 35mm, cao 0,75m — **khớp S04 từng độ**
ELEMENT 0s khung y hệt S04 nhưng sáng rõ: thấy được vân gỗ hành lang, thấy được cuối hành lang ·
        6s (C84 「笑われていたのでも、心配されていたのでもありません」) không nhãn, không chữ —
        để khung tự nói · 12s (C85) một 湯呑み thứ hai và một chiếc khăn đặt **trên bậc cửa ngăn**,
        mới xuất hiện trong khung so với S04 — ai đó đã để đó. ⚠ Đây là dấu của **người sống**
        (người đi ngang ở C06), KHÔNG phải dấu của người đã mất. Đặt ở chỗ rõ ràng thuộc về sinh
        hoạt thường ngày, không đặt gần 仏壇 ·
        16s hơi nước mỏng bốc lên từ 湯呑み đó — nó còn nóng, vừa mới đặt
        Ánh sáng: SUN_MORNING + KITCHEN_WARM giờ không còn phân biệt được. `sun = +25,5°`
SFX     môi trường rộng hơn (theo [AUDIO DIRECTION] C84) · tiếng sinh hoạt rất xa từ bếp
CUT     cắt sang S34

## S34 · C86–C88 · [841,2–872,6s] · live-object ⭐ CAO TRÀO 4 — KHUNG CUỐI
SCENE   Dolly lùi khỏi phòng, ra tới hành lang, phòng thu nhỏ dần trong khung. **Cánh cửa 仏壇
        vẫn mở.** Ngọn nến vẫn cháy. Không ai đóng gì, không ai tắt gì.
CAMERA  dolly-back **12s** liên tục từ vị trí S02 ra tới đầu hành lang (S01), 50mm → 28mm, cao
        0,75m giữ nguyên; rồi tĩnh 19s. ⚠ Đây là đường đi NGƯỢC của S01→S02 — vòng tròn khép
        bằng đường đi camera, không bằng cảnh giống nhau
ELEMENT 0s khung khớp S02 (仏壇 1/3 trái, cửa mở) nhưng sáng ban ngày ·
        4s (C86 「三百年ほど前から」) camera bắt đầu lùi; nhãn 「三百年ほど前から」 hiện ở 1/3 trên,
        65%, rồi **trôi ra khỏi khung cùng với phòng** khi camera lùi ·
        11s (C87) qua khỏi khung cửa ngăn, giờ nhìn căn phòng qua ô cửa — **phòng trở thành một ô
        sáng trong hành lang**; nhãn 「二十世紀の終わりに、ようやく」 ·
        16s exposure **mở dần một nấc**, hành lang tiền cảnh từ tối thành đọc được ·
        20s (C88) một bàn tay đặt 湯呑み rỗng xuống chiếu ở rìa khung, rồi rút ra ·
        24s ⭐ **KHUNG CUỐI: trong ô sáng xa kia, hai cánh 仏壇 VẪN MỞ, một sợi khói mảnh vẫn lên,
        ngọn nến vẫn cháy.** Không fade to black, không khép cửa, không tắt nến ·
        24–31s giữ khung tuyệt đối tĩnh 7s; chỉ khói và bụi còn động
        ⚠ Outro 5s màn đen là do `apply-lead-tail.mjs` chèn SAU, không dựng trong shot này.
        Shot này kết ở **hình đang sáng**
        Ánh sáng: SUN_MORNING đầy đủ, exposure mở. `sun = +26°`
SFX     湯呑み đặt xuống chiếu — **một tiếng, ở 20s** (theo [AUDIO DIRECTION] C88) · sau đó
        **im lặng dần** tới hết, chỉ còn môi trường ban mai rất mỏng
CUT     hết tập → outro đen 5s (do script chèn)

---

# GHI CHÚ DỰNG HÌNH

Quy ước dùng chung cho cả tập. Visual-builder tuân theo, không tự đổi.

## 1. Bảng màu và ánh sáng — bốn nguồn, không hơn

| Tên | RGB | Dùng ở đâu | Đặc tính |
|---|---|---|---|
| `SKY_PREDAWN` | 0,30 · 0,38 · 0,52 | C01–C11 | Tán xạ qua giấy 障子. **Không có tia trực xạ.** Cường độ rất thấp |
| `CANDLE_WARM` | 1,00 · 0,78 · 0,45 | toàn tập | Point light, suy giảm nghịch đảo bình phương. **Flicker tất định** (mulberry32, seed cố định) — ⛔ không `Math.random`. Bán kính hữu dụng đổi theo shot (xem S07, S08, S16) |
| `SUN_LOW` | 1,00 · 0,90 · 0,72 | C35–C70 | Trực xạ qua 障子. Nguồn **có kích thước** (bán bóng mềm ở mép bóng 桟), không phải point light |
| `SUN_MORNING` | 1,00 · 0,95 · 0,84 | C71–C88 | Cùng nguồn, cao hơn, trắng hơn, rộng hơn |

⛔ **Không có nguồn sáng thứ năm.** Không đèn trần, không fill sáng tạo, không rim light thẩm mỹ.
Mọi vùng sáng trong khung phải truy được về một trong bốn nguồn trên. Ngoài tầm với của chúng
thì **đen thật**, không fill.

`KITCHEN_WARM` (S04, S33) là ánh đèn bếp xa, ngoài khung — coi như nền môi trường, không phải
nguồn chiếu sáng chủ thể.

## 2. 障子 — subsurface scattering, không phải mặt phẳng trắng

Giấy washi phải **cho ánh sáng xuyên qua và tán trong lớp giấy**: thấy được vân sợi, thấy được
bóng mờ của 桟 gỗ in từ phía sau, và mép chuyển sáng-tối phải **mềm theo độ dày giấy**.
⛔ Không dựng 障子 bằng quad emissive trắng. Đây là chỗ mắt người 50-60+ nhận ra ngay vì họ đã
nhìn 障子 cả đời.

## 3. Khói hương — volumetric scattering, ba đoạn

Sợi khói có **ba đoạn vật lý khác nhau**, không phải một dải đồng nhất:
1. **Tầng chảy (laminar)** — từ đầu que lên ~18cm, cột gần thẳng, mảnh, gần trong suốt
2. **Điểm chuyển tiếp** — độ cao dao động theo đối lưu, KHÔNG cố định
3. **Rối (turbulent)** — vỡ ra, seeded curl noise (mulberry32), loang rộng rồi tan

⛔ **Không billboard sprite, không mặt phẳng alpha, không texture khói.** Tán xạ tiến
(forward scattering) phải mạnh hơn phía đối diện khi có nguồn sáng phía sau — đây là dấu hiệu
kiểm tra nhanh xem khói dựng đúng hay chưa.

⚠ **Kiểm seed:** duyệt khói frame-by-frame ở S05 và S29. Nếu noise sinh ra hình dạng gợi mặt
người, bóng người, hay bất cứ hình có tổ chức nào → **đổi seed ngay**. Ràng buộc 1.

## 4. Bụi trong luồng sáng — Mie scattering

Chỉ thấy được **trong luồng trực xạ** (C35 trở đi) và trong luồng ngoại lệ ở S03. Hạt nhỏ,
chuyển động Brown chậm cộng một thành phần trôi lên rất nhẹ (đối lưu). Hàm thuần của `t`,
seeded. Mật độ tăng nhẹ ở 第4章 (không khí động hơn khi trời ấm lên).

## 5. Sơn mài đen của 仏壇 — hai lớp phản chiếu

Clearcoat trên cùng (sắc nét) + lớp sơn dưới (mờ, lệch vài mm). Đây là hiện tượng quang học thật
và **S11 dựng cả luận điểm trên nó** — phải có sẵn từ S02, không phải hiệu ứng thêm vào riêng S11.
Craquelure (rạn lưới mảnh) hiện ở cỡ cận, S25.

## 6. Vàng lá trong lòng 仏壇 — hắt lại, không tự phát sáng

**Anisotropic specular + ánh sáng gián tiếp.** Vàng lá phải **phản xạ nguồn có thật trong cảnh**
(nến, rồi mặt trời). ⛔ Không emissive. Cách kiểm nhanh: che nguồn sáng đi thì vàng lá phải tối
theo. Ở S24 nó phản xạ **cả hai nhiệt màu cùng lúc** — đó là điểm hình của cú lật.

## 7. ⛔ Ba thứ KHÔNG BAO GIỜ xuất hiện trong bất kỳ frame nào

1. **位牌** — kể cả hậu cảnh mờ, kể cả trong lòng 仏壇, kể cả bóng đổ. Kênh 1 giữ đề mục đó
   (ràng buộc 2). Lòng 仏壇 dựng là **chiều sâu tối có vàng lá**, không có vật thể.
2. **Bất cứ gì gợi sự hiện diện của người đã mất** — bóng người, silhouette, ánh sáng hình người,
   khuôn mặt trong khói, ảnh chân dung có mặt, vật tự chuyển động không nguyên nhân (ràng buộc 1).
3. **Mặt người** — kể cả 私. Chỉ dựng bàn tay (S02, S03, S12, S26, S31, S34), mép vai ở rìa khung
   (S14, S31). Không đầu, không mặt, không bóng đổ hình đầu người lên tường hay 障子.

## 8. Nhãn chữ — quy ước

- Font **BIZ UDPGothic**, khai `@font-face` trong composition, vẽ bằng canvas texture.
- ⚠ **`await document.fonts.load(...)` trước nhãn đầu tiên** (S09). Font CJK ~4,6 MB; vẽ trước khi
  font về thì canvas đo nhầm metric và nhãn sai kích thước **rải rác** — rất khó truy.
- Nhãn **fade in 1,2s, không bay, không trượt, không nhấp nháy**.
- Ba mức độ sáng: **100%** (điểm chính), **70%** (ghi chú), **≤55%** (ngữ cảnh mờ dần).
- Nhãn đặt **trên nền tối hoặc trên vùng sáng của cảnh** — vị trí đặt nhãn mang nghĩa
  (xem S18 vs S20, S22, S23). Đây thay chỗ cho mọi đồ thị.
- ⛔ **Không mũi tên. Không biểu đồ cột. Không timeline có vạch. Không %. Không ✓/✗.**
  Đó là ngôn ngữ của kênh 1 (図解 2D). Kênh này nói bằng ánh sáng và vị trí.

**Nguồn + năm phải xuất hiện đủ trên hình:**

| Nguồn | Shot | Nhãn chính xác |
|---|---|---|
| Bering 2002 | S09, S15 | 「ジェシー・ベリング 2002年」「Journal of Cognition and Culture 2(4)」 |
| Nichols 2007 | S15 | 「ニコルズ 2007 — 想像の妨げ」 |
| Freud 1917 | S18 | 「フロイト 1917『喪とメランコリー』」 |
| *Continuing Bonds* 1996 | S20 | 「1996年『続いていく絆』」「クラス・シルバーマン・ニックマン」 |
| Field 2006 | S22 | 「ナイジェル・フィールド 2006年ごろ」 |
| Hewson 2023 | S23 | 「ヒューソンほか 2023年・Death Studies」「七十九本の研究」 |
| 寺請制度・檀家制度 | S25 | 「江戸・十七世紀」「寺請制度・檀家制度」「幕府の宗教統制」 |

⚠ **Con số 79 viết là 「七十九本」. ⛔ TUYỆT ĐỐI KHÔNG viết "79/319"** — con số 319 không tra ra
nguồn và đã bị loại.

## 9. Phụ đề

Sinh tự động từ `voice/*.srt` bằng `scripts/gen-captions.mjs`. **≤22 ký tự toàn角, 1 dòng**,
font BIZ UDPGothic, ≥56px. ⛔ Không cắt tay. Phụ đề là lớp riêng, **không đè lên vùng đặt nhãn**
ở 1/3 dưới — nhãn nào rơi vào dải phụ đề thì dời lên 1/3 giữa.

## 10. Nhịp và tính nhất quán

- **Không cắt nhanh hơn 4 giây.** Shot ngắn nhất của tập là S11 (~18,8s).
- **Mỗi shot có mốc thay đổi nhìn thấy được ít nhất mỗi 6–8 giây** — đã ghi vào dòng ELEMENT
  của từng shot dưới dạng `0s… 6s… 12s…`.
- **Giữ nguyên:** bảng màu, lens 28–100mm, chất liệu (gỗ, giấy, sơn mài, chiếu), cao độ camera
  quanh tầm người ngồi.
- **Đổi liên tục:** cỡ cảnh (28mm toàn ↔ 100mm cận), hướng camera, vị trí chủ thể trong khung.
  ⚠ Kiểm tra: **không hai shot liền nhau nào cùng cỡ cảnh + cùng góc.** Ngoại lệ có chủ đích duy
  nhất là bộ **S18 / S20 / S23** (cùng khung tuyệt đối, khác vị trí vệt sáng) — đó là luận điểm,
  và ba shot này KHÔNG liền nhau.
- **Bốn cặp khung đối chiếu** phải khớp từng độ: S02↔S29↔S34(0s) · S04↔S33 · S13↔S30 ·
  S06↔S16 (chỉ khác cao độ, cố ý).

## 11. Ràng buộc kỹ thuật HyperFrames

- Mọi chuyển động là **hàm thuần của `t`**. ⛔ `Math.random`, `Date.now`, `performance.now`,
  `requestAnimationFrame`, `setTimeout`, `+= dt`. Cần ngẫu nhiên → **mulberry32 seeded**.
  Áp cho: flicker nến, curl noise khói, bụi, gợn nước, nhịp thở.
- Mọi phần tử có timing cần `data-start`, `data-duration`, `data-track-index`, `class="clip"`.
- Timeline GSAP **paused**, đăng ký `window.__timelines["hanashikakeru"]` — trùng đúng
  `data-composition-id`.
- **Intro 2s + outro 5s**: khâu 4 chạy `scripts/apply-lead-tail.mjs`. ⚠ Bỏ bước này thì hình và
  tiếng lệch đúng 2 giây.
- ⚠ **Snapshot chụp theo thời gian THẬT**: muốn xem giây cảnh X thì chụp ở **X+2**.
- `npm run check` PASS **không có nghĩa là hình đúng**. Chụp 12–15 mốc rồi **mở contact-sheet.jpg
  ra nhìn**. Mốc đề nghị (đã +2s): **17,9 · 40 · 79 · 114 · 132 · 175 · 236 · 285 · 330 · 405 ·
  460 · 500 · 545 · 580 · 625 · 660 · 690 · 720 · 790 · 845 · 868**.
- **Kiểm riêng ràng buộc 1**: ở các mốc 545 (S23), 720 (S29), 868 (S34) — xác nhận không frame
  nào có hình dạng gợi người trong khói, trong phản chiếu, hay trong bóng đổ.
