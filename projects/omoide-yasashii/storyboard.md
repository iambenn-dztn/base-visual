# STORYBOARD — 悲しみが薄れるのは薄情なのか｜記憶研究が答えた問い

## METADATA

- **Slug:** `omoide-yasashii` (⛔ không đổi — đây là khoá composition)
- **Tổng thời lượng dự kiến:** **847,7s ≈ 14:07** (dry-run `timing.json`, keita speed 0.95).
  Cộng intro 2s + outro 5s → **~14:15**.
  ⚠ Các con số giây dưới đây **chỉ để căn nhịp**. Thời lượng CHUẨN lấy từ `timing.json`
  sau khâu voice thật. **Mọi shot neo vào mã cue, không vào giây.**
  ⚠ Tập này có intro 2s: snapshot kiểm hình phải chụp ở **giây cảnh + 2**.
- **Số shot:** **37** (S01–S37). Trung bình ~23s/shot. Ngắn nhất ~11s (S20 「半日ほどで」),
  dài nhất ~34s. ⛔ Không shot nào dưới 4 giây.
- **Số cue:** **101** (C01–C101), **4 chương**. Nhãn chương ở **C01 / C17 / C42 / C87**.
- **Nhạc nền:** một track chung `assets/bgm.mp3` cho cả tập. Không ghi audio theo shot.
  Chỉ shot có dòng `SFX` mới cần hiệu ứng riêng (lấy từ [AUDIO DIRECTION] của kịch bản).
  **Soundscape của tập:** chiều cuối hè — ve xa, 風鈴 đúng một lần, gió qua 障子, tiếng giở giấy,
  tiếng mở nắp thùng giấy. Drone thấp **chỉ** dâng rất mỏng ở 第3章.
  ⛔ Không tiếng đêm, không tiếng côn trùng đêm, không tiếng chuông.
- **Phụ đề:** KHÔNG chép tay vào storyboard. Sinh từ `voice/*.srt` bằng
  `scripts/gen-captions.mjs` (**≤22 ký tự toàn角, 1 dòng**). Font **BIZ UDPGothic** —
  xem GHI CHÚ mục 8.
- **Texture:** ⚠ **không có texture sẵn nào dùng được cho tập này.** `assets/tex/` chỉ có
  texture thiên văn (NASA) của kênh cũ. Tatami, giấy 障子, giấy ảnh, bìa carton, gỗ —
  **dựng procedural toàn bộ**. Xem GHI CHÚ mục 2–4.

### Loại visual theo chương

| Chương | Cue | Loại | Nội dung hình |
|---|---|---|---|
| **第1章 入口** | C01–C16 | *live-object* (phòng thật) | 和室 chiều nắng mạnh, 障子 mở hết, god ray raymarched, **bụi thật trôi trong luồng**, hộp ảnh mở nắp, xấp ảnh trên tatami, bàn tay cháu ở rìa khung |
| **第2章 測った人たち** | C17–C41 | *live-object → particle* (camera đẩy vào luồng nắng) | Cùng căn phòng. Bụi **lớn dần và bắt đầu ánh màu** → trường hạt ký ức. Phòng vẫn thấy ở rìa khung. Quyển nhật ký + trang giấy là vật thật trong cùng luồng sáng |
| **第3章 深いところ** | C42–C86 | *particle* (trong lòng luồng sáng) | Hai tốc độ phai tách nhau nhìn thấy được. Nền vẫn là **nắng chiều ấm**, ⛔ không nền đen. Rìa khung vẫn có vệt tatami mờ |
| **第4章 帰り道** | C87–C101 | *live-object* (đúng phòng 第1章) | Camera lùi ra khỏi luồng, hạt về lại thành bụi. Cùng buổi chiều, **nắng thấp hơn và vàng hơn — chưa tắt**. Hộp vẫn mở, cháu vẫn ngồi đó |

### ⛔ BA RÀNG BUỘC CỨNG — hình không được nói ngược lời đọc

Bàn giao từ packaging (mục "RÀNG BUỘC HÌNH từ kịch bản"). Sai một mục là **hỏng luận điểm của tập**.

**1. Hạt KHÔNG ĐƯỢC biến mất.** Ở **S15–S17 (C37–C41)** và **S35 (C95)**: hạt **mờ xuống rồi
giữ ở mức sàn `PARTICLE_FLOOR = 0.22`**, vẫn thấy rõ trên nền. Lời đọc nói *cường độ cảm xúc*
nhạt đi, không nói *ký ức mất đi*. Hạt tắt hẳn gợi ý người xem đang mất dần người đã khuất —
**đúng nỗi sợ mà tập này gỡ.** Xem GHI CHÚ mục 5.

**2. S36 (C97) — ⛔ không gợi ý sự hiện diện của người đã mất.** Không bóng người, không
silhouette, không ánh sáng hình người, không hạt tụ lại thành dáng người. Lời đọc cố ý neo vào
**記憶**, không neo vào linh hồn (luật 4b). Trong khung chỉ có: ký ức (hạt/ảnh) và người đang nhớ.

**3. S27–S28 (C74–C75) — ⛔ không bản đồ, không quả cầu, không danh sách quốc gia, không cờ.**
Ritchie et al. 2015 có 10 nền văn hoá nhưng không xác minh được Nhật có trong đó; lời đọc **cố ý
không cam kết danh sách**. Vẽ bản đồ là hình cam kết hộ điều lời đọc từ chối. Xem S27 để biết
dựng gì thay thế.

### ⚠ Ràng buộc chung của tập

- **⛔ CẢ TẬP KHÔNG CÓ CẢNH ĐÊM.** Không một shot nào. Nắng **ngả thấp và ấm dần** từ trắng ngà
  sang vàng cam, nhưng **không tắt**, không chuyển xanh, không bật đèn điện. Chốt bằng nắng tắt
  là chốt bằng hình buồn — sai với chặng 帰り道. Xem GHI CHÚ mục 3 (`sunAngle`).
- **⛔ Không đồ thị 2D, không trục toạ độ, không mũi tên, không bảng số, không billboard phẳng.**
  Đây là thứ tách tập này khỏi kênh chị em (kênh 1 vẽ chính hiệu ứng này bằng đồ thị hai đường).
  Người xem phải **NHÌN THẤY** hai tốc độ phai trong không gian 3D, không đọc nó trên trục.
- **⛔ Không mặt người**, không 遺影, không mộ. Đứa cháu chỉ hiện bằng **bàn tay và đầu gối** ở
  rìa khung. Người kể 私 chỉ hiện bằng **bàn tay tới cổ tay**. Ảnh trong hộp úp nghiêng hoặc
  quá mờ để nhận mặt.
- **Không rung máy ảo, không zoom giật, không cắt nhanh hơn 4 giây.** Tệp 50-60+ xem trên TV.
- **Không cắt cảnh giữa 第1章 và 第3章.** Xem GHI CHÚ mục 1 — đây là hợp đồng hình quan trọng nhất.

### Khung nguồn thumbnail

**S03 (C03–C04)** dựng đúng concept bìa đã duyệt (cặp 1): **hộp ảnh cũ mở nắp trên chiếu tatami,
god ray mạnh từ cửa đổ thẳng vào, bụi sáng rực trong luồng.** Không mặt người. Render agent bắt
frame ở khoảng giữa S03 làm nguồn cho `output/_assets/omoide-yasashii/`.

---

# 第1章 — 入口 (C01–C16) · 7 shot · ~116s

**Phòng là nhân vật, và nắng là đồng hồ.** Cả chương **một nguồn sáng duy nhất: mặt trời chiều
qua khung cửa mở.** Không đèn trần, không đèn bàn. Camera ở **độ cao mắt người đang ngồi bệt trên
chiếu (~0,85m)** suốt chương — đây là ngôi 私.

⚠ Đây là 30 giây quyết định. Bốn tập khác của kênh đều mở **ban đêm, một mình**. Tập này mở
**giữa ban ngày, nắng mạnh, có người thứ hai** — khác biệt phải đọc được ngay giây thứ 3.

## S01 · C01–C02 · live-object ⭐ CẢNH MỞ
SCENE   Vào thẳng bằng **nắng**, không fade từ đen. Khung đầy ánh sáng: mép trên của khung cửa
        障子 đã kéo mở hết, ngoài hiên là sân sáng trắng. Một luồng nắng xiên đổ vào chiếu.
        Chưa thấy người, chưa thấy hộp — chỉ căn phòng đang thở
CAMERA  tĩnh, 35mm, cao 0,85m (ngồi bệt); **rất chậm** trôi ngang sang phải 0,4m suốt shot.
        Chủ thể (vệt nắng) nằm ở **1/3 dưới-trái**, 2/3 trên khung để trống cho không khí
ELEMENT 0s luồng nắng đổ chéo ~38° cắt qua chiếu tatami, viền luồng mềm (volumetric raymarched,
        ⛔ không phải cone mesh) · **bụi trôi rõ trong luồng ngay từ giây đầu** — mật độ thấp,
        ~1.800 hạt thấy được, vận tốc ≤1,5 cm/s, curl-noise lấy mẫu theo `t` ·
        4s một cánh cửa 障子 rung nhẹ vì gió, bóng lưới ô vuông trên chiếu dịch ~2cm ·
        9s camera đã trôi đủ để thấy **cửa mở hết** — không phải hé, mở hết, thấy cả rãnh 敷居 ·
        14s rìa dưới khung vào một góc thùng giấy chưa mở
        Chiếu tatami: sợi cỏ dệt **chạy ngang**, viền 縁 vải sẫm; chỗ trong nắng sáng ngả xanh
        ám vàng, chỗ ngoài nắng xám ấm. Chênh lệch ≥4 stop — nắng phải **mạnh**, không dịu
SFX     蝉 xa, liên tục, rất nhỏ. Gió qua 障子 một lần ở ~5s
CUT     giữ liên tục sang S02 (cùng camera, không cắt)

## S02 · C02–C03 · live-object
SCENE   Camera hạ xuống và quay vào trong phòng: **cảnh dọn 遺品 đang dở**. Ba thùng giấy,
        một đã mở, hai còn dán băng keo. Một chồng vải gấp. Mọi thứ **ngăn nắp nhưng chưa xong** —
        đây là việc bị hoãn mấy tháng, hôm nay mới động vào
CAMERA  tilt xuống 12° rồi dolly vào 0,6m, 35mm → 50mm; kết ở trung cảnh thùng giấy
ELEMENT 0s ba thùng carton (bìa sóng thật, mép sờn, góc móp nhẹ, băng keo đã bóc một nửa
        vẫn dính lòng thòng) · 6s **bàn tay 私** vào khung từ dưới-phải, chỉ tới cổ tay, da
        người lớn tuổi, đẩy nắp thùng sang bên · 11s trong thùng: hộp ảnh cũ, bìa bồi giấy,
        **bụi bám dày trên nắp** thấy rõ vì nắng chiếu xiên qua · 16s bàn tay phủi nắp —
        **một đám bụi bật lên và đi vào luồng nắng**, sáng rực lên rồi tản
        ⚠ Đám bụi này là **hạt thật của cùng hệ hạt sẽ dùng cả tập**, không phải hiệu ứng rời.
        Đây là lần đầu người xem thấy "bụi vào nắng thì sáng lên" — luật thị giác của cả tập
SFX     Nắp thùng giấy bật lên. Tiếng phủi vải khô
CUT     giữ liên tục sang S03

## S03 · C03–C04 · live-object ⭐ KHUNG NGUỒN THUMBNAIL
SCENE   Cận cảnh **hộp ảnh mở nắp** đặt trên chiếu, đúng trong luồng nắng. Trong hộp là ảnh
        xếp đứng, mép ngả vàng. Nắp dựng nghiêng bên cạnh. Bụi vừa phủi vẫn đang lơ lửng
        và sáng rực trong luồng
CAMERA  tĩnh 85mm, DOF nông (f/2.0), tiêu điểm ở mép hộp; **không zoom**. Hộp đặt lệch
        **phải khung**, luồng nắng đi từ trên-trái xuống — chừa chỗ trống trái cho bụi
ELEMENT 0s hộp: bìa bồi dán giấy hoa văn đã bạc, bốn góc bọc kim loại xỉn, bản lề vải rách
        một bên · 4s nắp nghiêng dựa bên hộp, **mặt trong sạch hơn mặt ngoài** (bụi chỉ bám
        mặt trên) · 8s **mật độ bụi trong luồng tăng gấp 3** so với S01 và lưu lại — người
        xem phải thấy không khí trong phòng này **đặc hạt** · 14s camera đổi tiêu điểm rất
        chậm từ mép hộp sang **lớp bụi phía trước hộp**: bụi nét, hộp nhoè. Đây là gợi ý đầu
        tiên rằng bụi mới là chủ thể · 20s tiêu điểm giữ nguyên ở bụi
        Vật lý bụi: hạt **không rơi thẳng** — trôi theo dòng đối lưu chậm của gió qua phòng,
        vận tốc đứng âm nhẹ, có hạt đi lên. Kích thước biểu kiến 1–3 px, có quầng mềm.
        Trong luồng: **additive**. Ngoài luồng: **alpha thường, tối hơn nền** — xem GHI CHÚ mục 5
SFX     Giấy cứng cọ nhau khi nắp mở
CUT     cắt mềm (dissolve 0,8s) sang S04 — **cắt duy nhất ở nửa đầu chương**

## S04 · C04–C05 · live-object
SCENE   Toàn cảnh phòng từ góc thấp hơn: **xấp ảnh đã được trải ra trên chiếu**, hơn hai mươi
        tấm, nửa trong nắng nửa trong bóng. Bàn tay 私 đang đặt thêm một tấm xuống
CAMERA  góc thấp 0,45m, 28mm (rộng, thấy cả mép trần), lia ngang trái→phải rất chậm 20°
ELEMENT 0s ảnh trải trên chiếu — **mỗi tấm là mesh có độ cong giấy thật**, góc cong lên khỏi
        mặt chiếu 2–6mm, đổ bóng riêng. ⛔ không phải plane phẳng · mặt giấy có grain, ngả
        vàng không đều (mép vàng hơn giữa) · 7s camera lia tới chỗ **ảnh nằm vắt qua ranh giới
        nắng–bóng**: nửa tấm cháy sáng, nửa tấm chìm — chênh lệch phơi sáng thấy rõ ·
        13s một tấm dựng nghiêng, nắng xuyên qua rìa giấy → **subsurface mỏng, rìa giấy đỏ cam** ·
        18s vào khung **đầu gối và bàn tay nhỏ của đứa cháu** ở rìa dưới-phải
        ⚠ Ảnh úp nghiêng hoặc mờ quá ngưỡng nhận mặt. ⛔ Không tấm nào đọc được mặt người
CUT     giữ liên tục sang S05

## S05 · C05–C07 · live-object ⭐ CÂU HỎI CỦA ĐỨA CHÁU
SCENE   Camera dừng ở chỗ hai người ngồi cạnh nhau trên chiếu — thấy **hai đôi bàn tay** và
        khoảng chiếu giữa họ, đầy ảnh. Không thấy mặt ai. Một bàn tay nhỏ chỉ vào một tấm ảnh
CAMERA  tĩnh tuyệt đối 50mm, cao 0,85m; **giữ yên suốt câu hỏi** — đây là shot duy nhất
        camera không nhúc nhích. Hai bàn tay ở 1/3 dưới, 2/3 trên là nắng và bụi
ELEMENT 0s bàn tay 私 (trái khung) và bàn tay cháu (phải khung), cách nhau ~40cm, giữa là ảnh ·
        5s bàn tay cháu chạm một tấm ảnh, nhấc lên nghiêng về phía nắng · 9s **im hoàn toàn,
        chỉ bụi chuyển động** — 1,2s gap sau C06 là chỗ này, để trống có chủ ý ·
        14s bàn tay 私 nhúc nhích một chút, như sắp nói
        ⚠ ⛔ Không tilt lên để thấy mặt. ⛔ Không cắt sang cận mặt cháu. Cả tập không có mặt người
SFX     風鈴 **đúng một lần** ở ~11s, trong khoảng lặng. Đây là 風鈴 duy nhất của 第1章
CUT     giữ liên tục sang S06

## S06 · C08–C10 · live-object
SCENE   Góc nhìn dịch ra phía sau vai 私 (vẫn không thấy mặt): thấy bàn tay 私 đang cử động
        theo lời kể, thấy xấp ảnh, thấy cháu đang nghe. **Nhịp tay nhẹ, gần như vui** —
        rồi đột ngột dừng
CAMERA  dolly lùi rất chậm 0,5m, 50mm → 40mm; **dừng hẳn ở C10** và đứng yên
ELEMENT 0s bàn tay 私 chuyển động theo câu, lật một tấm ảnh, đặt xuống · 6s nhịp tay **nhanh
        hơn một chút, nhẹ hơn** — hình phải đọc được là "đang kể chuyện vui" mà không cần mặt ·
        11s bàn tay nhấc một tấm lên rồi **dừng giữa không trung** · 14s tay hạ xuống chiếu,
        nằm im. Camera đã dừng. **Chỉ bụi còn động** — 1,5s gap sau C10 nằm ở đây
        Nắng: `sunAngle` đã dịch **2°** so với S01, vệt nắng dài thêm ~8cm. Không ai để ý,
        nhưng nó đang chạy từ giây đầu tiên
SFX     Giấy ảnh chạm nhau. Ở 14s: **im, chỉ còn ve xa**
CUT     giữ liên tục sang S07

## S07 · C11–C16 · live-object ⭐ CÂU HỎI CỦA TẬP
SCENE   Cận cảnh xấp ảnh trên chiếu, nhìn thẳng từ trên xuống. Bàn tay 私 nằm im ở rìa khung.
        Camera bắt đầu nhích rất chậm **về phía luồng nắng** — chuyển động đầu tiên của hành
        trình sẽ kéo dài hết 第2章
CAMERA  từ top-down 70° nghiêng dần về 40°, 50mm; dolly **hướng vào trục luồng nắng**,
        tốc độ 3 cm/s. ⚠ Đây là **điểm khởi đầu của cú đẩy không-cắt** — xem GHI CHÚ mục 1
ELEMENT 0s xấp ảnh, tay im · 6s **một tấm ảnh trong xấp mờ nhoè đi rất nhẹ ở rìa** trong khi
        các tấm khác vẫn nét — dấu hiệu tinh tế rằng có tấm "không bật ra trước" (C13).
        ⛔ không nhấn mạnh, không viền sáng, không hiệu ứng rõ · 14s camera đã nghiêng đủ để
        **luồng nắng chiếm 1/3 phải khung**, bụi trong đó bắt đầu chiếm chú ý · 22s ảnh lùi
        khỏi tiêu điểm, bụi vào tiêu điểm · 30s luồng nắng chiếm **nửa khung**, camera vẫn đẩy
        ⚠ C14–C15 là hai câu tiêu đề. Hình ở đây **phải trống**, không minh hoạ câu hỏi bằng
        biểu tượng nào. Chỉ nắng, bụi, và chuyển động chậm đi tới
SFX     Gió qua 障子. Ve xa nhỏ dần (chuẩn bị cho 第2章)
CUT     ⛔ **KHÔNG CẮT** sang S08 — camera đi thẳng vào luồng nắng, liên tục

---

# 第2章 — 測った人たち (C17–C41) · 10 shot · ~209s

**Chương của cú chuyển không-cắt.** Camera đi vào trong luồng nắng. Bụi lớn dần trong khung
(vì camera lại gần, **không phải vì hạt phình to**) và bắt đầu **ánh màu**. Căn phòng
**không biến mất** — nó lùi ra rìa khung, mờ đi, nhưng còn đó suốt chương.

Đây cũng là chương có **vật thật xen vào trong luồng sáng**: quyển nhật ký, trang giấy, cây bút.
Chúng nằm **trong cùng không gian** với hạt, không phải cảnh cắt riêng.

## S08 · C17–C19 · live-object → particle ⭐ CÚ CHUYỂN KHÔNG-CẮT
SCENE   Camera tiếp tục đẩy, **vượt qua mặt phẳng rìa luồng nắng**. Trước mặt phẳng đó: bụi
        alpha thường, xám. Sau: bụi additive, sáng. Cú vượt phải thấy được như **đi qua một
        bức màn sáng**. Rìa khung vẫn còn cạnh chiếu, cạnh khung cửa
CAMERA  dolly-in liên tục từ S07, không ngắt; 50mm → 65mm; tốc độ giữ nguyên 3 cm/s
ELEMENT 0s camera còn ngoài luồng, bụi xám nhạt · 5s **vượt màn** — trong 1,5s, toàn bộ hạt
        trong khung đổi chế độ blend sang additive và sáng lên ~2,5 lần. ⚠ Đây là chuyển
        **liên tục theo hàm smoothstep của khoảng cách tới trục luồng**, không phải công tắc ·
        11s trong luồng: hạt nhiều hơn, mỗi hạt đã thấy được **nhân sáng + quầng mềm**
        (⛔ không phải chấm phẳng) · 18s **hai hạt đầu tiên ánh màu**: một ấm vàng, một xám
        xanh. Chỉ hai hạt, giữa hàng nghìn hạt trắng. Không nhấn, không nhãn ·
        24s rìa khung: cạnh chiếu và khung 障子 **vẫn thấy được, mờ, ngoài tiêu điểm**
        ⛔ Rìa khung KHÔNG BAO GIỜ đen hoàn toàn trong cả chương này
SFX     蝉 tắt dần hẳn. **風鈴 một lần** ở ~3s (theo [AUDIO DIRECTION] C17) — đây là dấu
        "không khí mở ra". Sau đó chỉ còn gió rất mỏng
CUT     giữ liên tục sang S09

## S09 · C19–C22 · live-object trong luồng ⭐ QUYỂN NHẬT KÝ
SCENE   Trong luồng sáng, một **quyển sổ tay mở giữa trang** lơ lửng ở khoảng cách ngang tầm
        mắt — không phải trên bàn, không có bàn. Nó nằm **giữa trường bụi**, nắng xuyên qua
        trang giấy. Một cây bút chì nằm trong nếp gáy
CAMERA  dolly vòng cung sang trái 25° quanh quyển sổ, 65mm, DOF nông; sổ **lệch trái khung**
ELEMENT 0s sổ mở: giấy kẻ dòng, **độ cong trang thật** (trang vênh theo gáy, không phẳng),
        mép giấy sờn, nắng xuyên rìa trang → subsurface · 7s chữ viết tay trên trang —
        **quá nhỏ và mờ để đọc**, chỉ là nhịp nét mực. ⛔ Không viết chữ đọc được, không viết
        tiếng nào cụ thể · 13s **một con số nhỏ xuất hiện ở lề phải một dòng** — chỉ một dấu
        chấm mực đậm hơn, không phải chữ số đồ hoạ. Đây là "chấm điểm ngay lúc xảy ra" ·
        20s camera vòng tới góc thấy **bụi phía sau trang giấy** sáng xuyên qua giấy ·
        26s trang giấy lật một nửa vì gió rồi rơi lại
        ⛔ Không đồ thị, không cột, không bảng. Con số chỉ là vết mực trên giấy thật
SFX     Giấy giở. Bút chì chạm giấy một lần ở 13s
CUT     giữ liên tục sang S10

## S10 · C23–C24 · live-object trong luồng
SCENE   **Hai trang giấy cùng một dòng chữ, lơ lửng cạnh nhau** trong luồng sáng — một tờ mới
        (trắng hơn), một tờ đã ngả vàng. Cùng nét chữ, cùng bố cục. Chúng trôi chậm vào cạnh nhau
CAMERA  tĩnh 85mm rồi dolly-in 0,3m ở nửa sau; hai tờ đặt **đối xứng lệch** — tờ mới cao hơn,
        tờ vàng thấp hơn, không cân bằng máy móc
ELEMENT 0s tờ mới ở trái khung, trôi vào · 5s tờ ngả vàng trôi vào từ phải, thấp hơn ·
        10s hai tờ **gần chạm nhau**, cùng nét chữ mờ, nhưng **vết mực chấm điểm ở lề khác
        đậm nhạt** — tờ vàng vết nhạt hơn. Đây là "điểm lúc đó và điểm bây giờ", dựng bằng
        **độ đậm mực trên giấy thật**, ⛔ không phải số, không phải cột · 15s bụi luồn giữa
        hai tờ · 19s hai tờ trôi tách ra chậm
CUT     giữ liên tục sang S11

## S11 · C25–C28 · particle ⭐ QUY MÔ BẰNG CHỨNG
SCENE   Camera rút lui khỏi hai tờ giấy và **quay ra thấy độ sâu của trường hạt**: hàng nghìn
        hạt trong thể tích, trải rất xa vào chiều sâu luồng nắng. Đây là lần đầu người xem thấy
        **quy mô**. Mỗi hạt là một mục nhật ký
CAMERA  dolly lùi 1,2m + tilt nhẹ, 65mm → 40mm (rộng ra để thấy khối lượng); tốc độ chậm đều
ELEMENT 0s hai tờ giấy nhỏ lại thành hai đốm giữa hạt · 6s **mật độ hạt tăng theo chiều sâu**
        — gần thưa, xa dày, đúng phối cảnh của thể tích thật (⛔ không phải lớp sprite xếp) ·
        12s hạt đã lên **~20.000 hạt thấy được**, phân bố khối cầu lệch tâm quanh trục luồng,
        vị trí sinh bằng **mulberry32 seeded** · 20s camera lùi đủ để thấy **rìa dưới khung
        vẫn còn một vệt tatami mờ** — phòng chưa mất · 27s vài hạt ánh màu rải rác (khoảng 1/50)
        ⚠ Ba con số của C25–C26 (八つ / 二百二十九人 / 二万三千二百二件) **KHÔNG hiện thành chữ
        số trên màn hình.** Quy mô dựng bằng **số hạt và chiều sâu**, không bằng nhãn.
        ⛔ Không đếm số, không counter, không nhãn 3D
SFX     Drone thấp **chưa vào** — chương này chưa có drone
CUT     giữ liên tục sang S12

## S12 · C29–C31 · particle ⭐ CẢ HAI ĐỀU PHAI
SCENE   Trong lòng trường hạt. Lần đầu tiên **màu tách ra rõ**: khoảng một nửa hạt ấm vàng,
        một nửa xám xanh, trộn lẫn đều. Rồi **cả hai cùng mờ xuống** — chậm, đồng đều
CAMERA  tĩnh gần như hoàn toàn, 55mm, chỉ trôi ngang 0,15m; để người xem **nhìn được độ sáng
        đổi** mà không bị chuyển động camera đánh lạc hướng
ELEMENT 0s hạt hai màu trộn đều, cùng độ sáng 1.0 — ⚠ **cùng độ sáng** là điểm quan trọng,
        nó chuẩn bị cho C55 (khởi điểm ngang nhau) · 6s cả hai màu bắt đầu mờ **cùng tốc độ**,
        xuống ~0.75 · 13s xuống ~0.60, vẫn cùng nhau · 19s xuống ~0.50 — người xem đã tin
        "cả hai đều phai" · **⚠ tới đây tốc độ vẫn BẰNG NHAU, cố ý.** Chênh lệch để dành cho S13
        Màu: `WARM_MEM` (1.00, 0.80, 0.52) và `COOL_MEM` (0.52, 0.60, 0.68)
CUT     giữ liên tục sang S13

## S13 · C32–C33 · particle ⭐⭐ CHỖ TÁCH TỐC ĐỘ — CẢNH TRỌNG TÂM CỦA TẬP
SCENE   Đúng khung đó, đúng đám hạt đó. **Hạt xám xanh bắt đầu mờ nhanh hơn hẳn.** Trong
        khoảng mười giây, chênh lệch trở nên không thể không thấy. Hạt vàng vẫn ở gần mức cũ
CAMERA  **đứng yên hoàn toàn** 10s đầu (để chênh lệch là thứ duy nhất chuyển động), sau đó
        dolly-in rất chậm 0,4m. ⚠ Đây là shot duy nhất được phép đứng yên lâu — vì **thay đổi
        nhìn thấy được đang xảy ra trong chính nội dung khung**
ELEMENT 0s cả hai ở ~0.50 · 3s **xanh rẽ xuống**: 0.50 → 0.38 trong 3s, vàng chỉ 0.50 → 0.47 ·
        8s xanh ~0.30, vàng ~0.44 — khoảng cách đã rõ · **⚠ đường phai lấy từ tỉ lệ thật của
        nghiên cứu, không tuỳ ý**: hai hàm mũ khác hằng số thời gian, hạt tiêu cực dốc hơn hẳn,
        hạt tích cực thoải hơn. Xem GHI CHÚ mục 5 để biết công thức và mức sàn ·
        14s camera bắt đầu đẩy vào, hạt xanh gần nhất lướt qua ống kính · 20s chênh lệch giữ
        ổn định, **không hạt nào tắt** — cả hai màu đều còn thấy rõ
        ⛔ Không trục, không đường cong vẽ ra, không hai đường kẻ. Chênh lệch **là độ sáng hạt**
CUT     giữ liên tục sang S14

## S14 · C34–C36 · particle
SCENE   Camera lượn ngang qua trường hạt ở tốc độ đi bộ, thấy chênh lệch từ nhiều góc. Đây là
        chỗ hiện tượng được **đặt tên** — nhưng tên chỉ nằm ở lời đọc
CAMERA  truck ngang sang phải 1,5m, 55mm, trục camera hơi chếch → hạt gần lướt nhanh, hạt xa
        trôi chậm (**parallax thật của thể tích**, đây là thứ chứng minh không phải billboard)
ELEMENT 0s bắt đầu lướt ngang · 7s một cụm hạt vàng dày đi qua tiền cảnh, sáng loà ống kính
        nhẹ (**bloom vừa phải**, ⛔ không lens flare hình sao) · 14s cụm hạt xanh mờ ở hậu cảnh,
        thấy được nhưng nhạt · 20s camera bắt đầu chậm lại · 26s dừng
        ⚠ Tên 「フェージング・アフェクト・バイアス」 **KHÔNG hiện thành chữ trên màn hình.**
        Đây là phần thưởng trong tai người nghe, không phải nhãn đồ hoạ (luật 2b)
CUT     giữ liên tục sang S15

## S15 · C37–C38 · particle ⭐ PHÂN BIỆT KÝ ỨC ↔ CẢM XÚC (ràng buộc cứng 1)
SCENE   Camera đẩy sát vào **một hạt duy nhất**, màu xám xanh, đã mờ. Ở cự ly cận, thấy hạt
        **không rỗng**: có nhân đặc, sắc nét, ở giữa quầng sáng đã nhạt. Nhân = ký ức. Quầng =
        cảm xúc bám vào nó
CAMERA  dolly-in mạnh nhưng chậm, 55mm → 100mm, kết ở cực cận một hạt; hạt đặt **lệch trên-trái**
ELEMENT 0s trường hạt, camera chọn một hạt xanh làm đích · 6s hạt lớn dần trong khung, các hạt
        khác nhoè ra thành quầng bokeh tròn (DOF thật) · 12s cực cận: **nhân hạt sắc nét,
        độ sáng không đổi suốt shot**; quầng quanh nó mờ và tiếp tục mờ thêm ·
        18s quầng xuống tới **mức sàn 0.22 và DỪNG** — ⚠ từ đây quầng không giảm nữa, giữ nguyên
        tới hết tập · 24s nhân vẫn y nguyên độ sáng ban đầu
        ⛔⛔ **Hạt không được biến mất. Nhân không được mờ đi một chút nào.** Đây là ràng buộc
        cứng số 1 dịch thẳng sang hình: 記憶 giữ nguyên, 感情の強さ hạ xuống rồi dừng ở sàn
SFX     Không SFX riêng. Nền yên nhất của chương
CUT     giữ liên tục sang S16

## S16 · C39–C40 · particle
SCENE   Camera lùi ra một chút, thấy **hai hạt cạnh nhau** — một vàng, một xanh — cả hai đều
        có nhân sáng nguyên vẹn, chỉ khác độ sáng quầng. Rồi lùi thêm, thấy cả trường đều vậy
CAMERA  dolly lùi 0,8m, 100mm → 60mm, liên tục
ELEMENT 0s hai hạt cận cảnh, nhân bằng nhau, quầng khác nhau · 7s lùi ra, thấy chục hạt —
        **mọi nhân đều nguyên vẹn, mọi quầng đều khác nhau** · 14s lùi tiếp, thấy cả trường:
        một biển nhân sáng đều, phủ bởi các quầng đậm nhạt khác nhau · 19s camera dừng
        ⚠ Đây là cảnh **chứng minh hai thứ đo riêng được**. Hình phải cho thấy chúng là **hai
        lớp vật lý khác nhau trên cùng một hạt**, không phải hai nhóm hạt khác nhau
CUT     giữ liên tục sang S17

## S17 · C41 · particle → live-object (hé lại căn phòng)
SCENE   Camera lùi chậm, **rìa khung bắt đầu hiện lại vệt tatami và khung 障子 mờ** — nhắc
        người xem chưa hề rời khỏi căn phòng. Một hạt xám xanh trôi gần, quầng ở mức sàn,
        nhân vẫn sáng. Nó không đi đâu cả
CAMERA  dolly lùi 0,6m + tilt xuống 8°, 60mm → 50mm
ELEMENT 0s trường hạt đầy khung · 5s góc dưới-phải: **một mảng tatami ngoài tiêu điểm** hiện ra ·
        10s góc trên-trái: đường thẳng của khung 障子 · 16s hạt xanh gần nhất trôi ngang qua
        khung từ trái sang phải, **chậm, không tắt, không nhấp nháy** · 22s camera dừng,
        giữ khung có cả hạt và cả mép phòng
        `sunAngle` đã dịch **9°** so với S01. Vệt nắng ở rìa khung **đã vàng hơn rõ**
CUT     giữ liên tục sang S18 (⛔ không cắt vào 第3章 — chương sau là đi sâu hơn, không phải
        đi chỗ khác)

---

# 第3章 — 深いところ (C42–C86) · 14 shot · ~384s

**Chương dài nhất và nặng nhất.** Camera ở trong lòng luồng sáng suốt chương. Nền **luôn là
ánh nắng ấm**, ⛔ không bao giờ là nền đen. Rìa khung **luôn còn một dấu vết của căn phòng**
(một vệt tatami, một đường khung cửa, một mép ảnh) — dù mờ tới đâu.

Drone thấp dâng lên **rất mỏng** từ S18 và rút hẳn ở S31.

## S18 · C42–C44 · particle
SCENE   Trong trường hạt, camera nhìn theo trục luồng nắng về phía nguồn sáng xa. Hạt trôi
        ngược về phía camera. Cảm giác **đi sâu vào**, không phải bay lơ lửng
CAMERA  dolly-in dọc trục 0,9m, 50mm; chủ thể (điểm sáng nguồn xa) đặt **lệch trên-phải**,
        không ở tâm khung
ELEMENT 0s nhìn dọc trục, nguồn sáng là một vùng sáng mờ ở xa (⛔ không phải đĩa mặt trời,
        không tròn, không có tia hình sao) · 8s hạt trôi qua hai bên ống kính, parallax mạnh ·
        15s một cụm hạt vàng đi ngang trước nguồn sáng → **thấy bóng của chính hạt trên bụi
        phía sau** (self-shadow trong thể tích — vật lý thật) · 22s camera chậm lại
SFX     Drone thấp vào từ 0s, **mức rất thấp** (−28 dB), chỉ để đổi áp suất không khí.
        ⛔ Không dùng drone ở bất kỳ chương nào khác
CUT     giữ liên tục sang S19

## S19 · C44–C46 · particle ⭐ NỬA NGÀY, KHÔNG PHẢI NHIỀU NĂM
SCENE   Camera đứng trước một **cụm hạt mới sinh** — sáng nhất trường, độ sáng 1.0, cả hai màu.
        Rồi ngay trước mắt người xem, cụm đó bắt đầu tách tốc độ. Nhanh. Không đợi
CAMERA  tĩnh 70mm 8s đầu, rồi orbit ngang 20° quanh cụm; cụm đặt **thấp trong khung**,
        chừa 2/3 trên cho không gian
ELEMENT 0s cụm ~60 hạt sinh ra cùng lúc, tất cả ở 1.0, hai màu trộn · 4s **vẫn 1.0 cả hai** —
        khoảng lặng trước C45 nằm ở đây · 7s **xanh rẽ xuống ngay**, 1.0 → 0.72 trong 4s ·
        12s vàng mới bắt đầu rời 1.0, xuống 0.93 · 18s xanh 0.55, vàng 0.88 · 24s camera đã
        orbit đủ để thấy cụm từ góc khác, chênh lệch vẫn giữ
        ⚠ **Tốc độ tách ở đây phải nhanh hơn hẳn S13** — S13 là "theo thời gian dài",
        S19 là "chỉ nửa ngày đã thấy". Chênh lệch tốc độ giữa hai shot **là nội dung**
CUT     giữ liên tục sang S20

## S20 · C46–C48 · particle
SCENE   Camera lùi khỏi cụm, và thấy **trường hạt trải theo chiều sâu như một dòng thời gian
        vật lý** — hạt gần camera là mới (sáng), hạt xa là cũ (đã tách). Không có trục, không
        có nhãn: độ sâu **chính là** thời gian
CAMERA  truck ngang 1,0m dọc theo chiều sâu, 50mm, trục camera vuông góc với chiều sâu đó
ELEMENT 0s gần: hạt sáng đều · 5s giữa: xanh đã thấp hơn vàng · 11s xa: xanh ở mức sàn 0.22,
        vàng ở ~0.55 — **chênh lệch ổn định, cả hai vẫn thấy được** · 16s camera lướt qua
        toàn dải, người xem đọc được "càng xa càng chênh" mà không ai vẽ gì
        ⛔ Không đường kẻ nối các hạt, không lưới, không mốc thời gian
CUT     giữ liên tục sang S21

## S21 · C49–C51 · particle ⭐ TỰ PHẢN BIỆN (đổi chất khung)
SCENE   **Khung đổi tính chất:** camera dừng đẩy và bắt đầu **lùi ra hơi nhanh hơn**, hạt hơi
        lạnh đi một chút, bố cục chặt hơn. Đây là chỗ 私 tự vặn lại chính mình — hình phải
        hơi cứng lại, không mềm mại như trước
CAMERA  dolly lùi 1,1m (nhanh gấp rưỡi shot trước nhưng vẫn ≤8 cm/s), 50mm → 35mm; chủ thể
        dịch từ trái sang phải khung trong lúc lùi
ELEMENT 0s trường hạt · 6s **nhiệt độ màu toàn cảnh lạnh đi 250K** trong 5s — nắng vẫn ấm
        nhưng bớt vàng. Đây là thay đổi nhìn thấy được, không cần giải thích · 13s bố cục
        siết lại: hạt tụ về nửa phải khung, nửa trái trống · 20s **một hạt xanh nhạt trôi
        ngược chiều dòng chung** — chi tiết nhỏ cho cảm giác "có gì đó không khớp" ·
        26s camera dừng
        ⛔ Không dấu hỏi, không biểu tượng nghi vấn, không hiệu ứng glitch
CUT     giữ liên tục sang S22

## S22 · C52–C53 · live-object trong luồng ⭐ QUYỂN NHẬT KÝ TRỞ LẠI
SCENE   **Quyển sổ của S09 trôi trở lại vào khung**, cùng góc, cùng trang. Vết mực chấm điểm
        ở lề vẫn đậm y như lúc đầu — vì nó được viết ngay hôm đó, và giấy thì không đổi ý
CAMERA  dolly-in 0,5m về phía trang giấy, 35mm → 75mm; sổ đặt **lệch phải**, đối xứng ngược
        với S09 (S09 lệch trái) — cùng vật, khác vị trí khung
ELEMENT 0s sổ trôi vào từ trên-phải · 6s cận trang: **vết mực ở lề, đậm, sắc, không đổi** ·
        12s camera đẩy sát tới mức thấy **sợi giấy và hạt mực ngấm vào sợi** — mực đã ăn vào
        giấy, không thể sửa sau. Đây là toàn bộ lập luận của C53, dựng bằng vật lý giấy ·
        19s bụi lướt qua trước trang · 25s nhiệt độ màu ấm trở lại 250K (hoàn nguyên S21) —
        câu hỏi đã được trả lời, khung dịu lại
SFX     Giấy giở một lần ở 3s
CUT     giữ liên tục sang S23

## S23 · C54–C57 · particle ⭐ KHỞI ĐIỂM NGANG NHAU
SCENE   Hai cụm hạt, một vàng một xanh, trôi vào khung **từ hai phía, ở cùng một độ cao và
        cùng một độ sáng**. Chúng đứng ngang nhau một lúc lâu — đủ lâu để người xem tin.
        Rồi mới bắt đầu rời nhau
CAMERA  tĩnh 60mm 12s đầu, rồi dolly-in rất chậm 0,3m; hai cụm **không đặt đối xứng gương** —
        vàng hơi cao và xa, xanh hơi thấp và gần, để khung không thành sơ đồ
ELEMENT 0s hai cụm trôi vào · 6s cả hai đứng ở **cùng độ sáng 1.0**, giữ nguyên ·
        12s **vẫn ngang nhau** — đây là khoảng giữ có chủ ý, hình đang nói "khởi điểm bằng nhau" ·
        17s xanh bắt đầu rời xuống, vàng gần như chưa động · 24s xanh 0.60, vàng 0.92 ·
        30s xanh ~0.40, vàng ~0.85
        ⛔ Không so sánh bằng chiều cao, bằng cột, bằng thanh. **Chỉ bằng độ sáng và số lượng
        hạt còn sáng.** Vẽ hai cụm cao thấp khác nhau là đang vẽ đồ thị cột trá hình
CUT     giữ liên tục sang S24

## S24 · C58–C60 · particle
SCENE   Camera lùi và nghiêng lên, trường hạt trải ra dưới góc nhìn rộng hơn. Khung **mở ra**,
        chuẩn bị cho cú lật. Lượng ánh nắng trong khung tăng dần
CAMERA  dolly lùi 0,9m + tilt lên 15°, 60mm → 35mm; chân trời hạt hạ xuống 1/3 dưới khung
ELEMENT 0s trường hạt tầm mắt · 7s camera nghiêng lên, **phần trên khung đầy ánh nắng trống**
        — không hạt, chỉ sáng. Khoảng trống này là chỗ thở trước C61 · 14s cường độ nắng
        nền tăng 20% rất chậm · 20s một dải hạt vàng dâng chậm lên vùng sáng ·
        ⚠ Hạt **nhẹ đi thì dâng lên** (vật lý của tập này — xem GHI CHÚ mục 5). Hạt vàng còn
        sáng nên dâng chậm; hạt xanh đã nhẹ nên dâng nhanh hơn. Ẩn dụ "phần nặng rơi xuống"
        đảo thành "thứ còn lại nổi lên" — và nó là **vật lý thật của hệ**, không phải hiệu ứng rời
CUT     giữ liên tục sang S25

## S25 · C61–C64 · particle ⭐⭐ CÚ LẬT CỦA TẬP — KHÔNG VỘI
SCENE   Khung rộng nhất từ đầu tập. Toàn bộ trường hạt dâng lên rất chậm trong ánh nắng, hai
        màu cùng đi lên, chênh lệch độ sáng vẫn giữ. Không có gì rơi xuống. Không có gì tắt
CAMERA  gần như tĩnh, 35mm, chỉ tilt lên thêm 6° trong 30s; **tốc độ chậm nhất của cả tập**.
        ⚠ [AUDIO DIRECTION] C61 ghi 「ここは急がない」 — camera tuân theo
ELEMENT 0s trường hạt dâng đều, cả hai màu · 8s **cường độ nắng nền tăng thêm 25%**, khung
        sáng lên rõ rệt — đây là thay đổi nhìn thấy được của đoạn · 16s hạt vàng chiếm dần
        phần trên khung, hạt xanh ở giữa, **không hạt nào rời khỏi khung** ·
        24s (C62, 私 rời mắt khỏi màn hình) — **camera dừng hẳn mọi chuyển động 3 giây**.
        Chỉ hạt còn đi lên · 31s camera nhích lại · 38s (C64) toàn khung sáng và đầy, hai màu
        rõ ràng, chênh lệch rõ ràng, **mọi hạt còn đó**
        ⛔⛔ Ở đây tuyệt đối không có hạt nào tắt, không có hạt nào bay ra khỏi khung, không
        có hiệu ứng tan biến. Đây là câu 「あなたが薄情になったのではありません」 — hình phải
        nói **không mất gì cả**
SFX     Drone rút xuống −34 dB từ 24s. 1,5s gap sau C64 là khoảng im gần hoàn toàn
CUT     giữ liên tục sang S26

## S26 · C65–C71 · particle ⭐ PHẦN DÀNH CHO NGƯỜI XEM CỦA KÊNH
SCENE   Camera lượn chậm qua trường hạt và **đi qua ba vùng có mật độ hạt vàng khác nhau** —
        vùng thưa, vùng vừa, vùng dày. Không nhãn, không tuổi. Chỉ mật độ tăng dần theo
        hướng camera đi
CAMERA  truck ngang dài 2,0m, 40mm, quỹ đạo cong nhẹ; đây là shot dài, cần **ba mốc đổi rõ**
ELEMENT 0s vùng một: hạt vàng thưa, chênh lệch vàng–xanh có nhưng nhỏ · 10s vùng hai: vàng
        dày hơn, chênh lệch lớn hơn · 20s **vùng ba: hạt vàng dày nhất, sáng nhất, và mỗi hạt
        vàng ở đây có quầng RỘNG hơn** — không sáng hơn một cách thô, mà **được giữ rộng hơn**.
        Đây là 「大事なことだと思っている」 dịch sang hình: hạt được coi trọng thì quầng lớn ·
        30s camera chậm lại trong vùng ba · 38s dừng, một hạt vàng quầng rộng chiếm tiền cảnh
        ⛔ Không con số tuổi, không nhãn 年代, không thanh trượt. Ba vùng chỉ khác **mật độ và
        bán kính quầng**
CUT     dissolve chậm 1,2s sang S27 — **cắt duy nhất của 第3章**, đánh dấu đoạn giới hạn

## S27 · C72–C75 · particle ⚠ RÀNG BUỘC CỨNG 3 — KHÔNG BẢN ĐỒ
SCENE   **Khung thưa hẳn đi.** Camera ở một vùng của trường hạt nơi hạt **ít, rải rác, và
        không đều** — có chỗ có hạt, có chỗ trống hẳn. Những khoảng trống là **chỗ chưa ai đo**.
        Đó là toàn bộ cách dựng đoạn giới hạn
CAMERA  dolly-in chậm 0,7m qua vùng thưa, 40mm → 55mm; chủ thể (một cụm hạt nhỏ) đặt **xa,
        lệch dưới-trái**, phần lớn khung là khoảng trống sáng
ELEMENT 0s vùng thưa, mật độ chỉ ~15% so với S25 · 8s camera đi qua **một khoảng trống hoàn
        toàn không hạt** kéo dài 4s — khung chỉ có ánh nắng và không khí. Khoảng trống này
        **là nội dung**, không phải lỗi · 15s một cụm hạt nhỏ hiện ở xa, thưa · 22s camera
        tới gần cụm, thấy nó **thật nhưng nhỏ** · 30s lại vào khoảng trống
        ⛔⛔ **KHÔNG bản đồ thế giới. KHÔNG quả địa cầu. KHÔNG cờ. KHÔNG đường bay nối điểm.
        KHÔNG mười cụm đếm được.** Ritchie et al. 2015 không xác minh được có Nhật; lời đọc cố ý
        không cam kết danh sách, hình không được cam kết hộ. Cụm hạt ở 15s **không được đếm ra
        số** — nó mờ và không rời rạc đủ để đếm
SFX     Không SFX. Đoạn này yên và trống có chủ ý
CUT     giữ liên tục sang S28

## S28 · C76–C78 · particle ⚠ GIỚI HẠN — GIỌNG GỠ TỘI
SCENE   Một cụm hạt nơi **hai màu phai CÙNG TỐC ĐỘ** — xanh không rẽ xuống, vàng không giữ lại.
        Chúng đi xuống song song, đều, tới cùng một mức sàn. Cảnh này phải đọc được là
        **"cơ chế không quay"**, không phải "người này hỏng"
CAMERA  tĩnh 65mm 10s, rồi orbit rất chậm 15°; cụm đặt **giữa khung, thấp** — lần duy nhất
        trong tập chủ thể ở giữa, vì đoạn này cần sự thẳng thắn
ELEMENT 0s cụm hạt hai màu ở 0.85 · 6s **cả hai cùng rẽ xuống, tốc độ y hệt nhau** ·
        14s cả hai ở 0.45, vẫn song song · 22s cả hai tới **mức sàn 0.22 cùng lúc và DỪNG** ·
        28s giữ — ⚠ **hạt vẫn thấy được, vẫn ở đó.** Cả trong trường hợp này ký ức cũng không mất
        Ánh sáng nền: **không tối đi.** Nắng giữ nguyên độ sáng. ⛔ Tuyệt đối không ám chỉ
        "trường hợp xấu" bằng cách làm khung tối — đó là giọng chẩn đoán, luật 4c+4d cấm
        ⛔ Không màu đỏ, không màu cảnh báo, không viền, không nhấp nháy
CUT     giữ liên tục sang S29

## S29 · C79–C81 · particle
SCENE   Camera lùi khỏi cụm song song đó và cho thấy nó **nằm trong cùng một trường với mọi
        cụm khác** — không tách riêng, không bị cô lập. Ánh nắng chạm tới nó y như chạm tới
        các cụm khác
CAMERA  dolly lùi 1,2m + trôi ngang 0,4m, 65mm → 40mm; cụm dịch từ giữa khung ra **1/3 trái**,
        các cụm khác vào khung bên phải
ELEMENT 0s cụm song song ở giữa · 8s lùi ra, hai cụm khác hiện ở phải khung · 16s **ba cụm
        cùng trong một luồng nắng, cùng một nền sáng** — hình nói "đây cũng là chuyện của cùng
        một cơ chế", không phải ngoại lệ bị loại ra · 24s một dòng hạt trôi nối giữa các cụm ·
        30s camera dừng, ba cụm cùng trong khung
        ⚠ [AUDIO DIRECTION] C80 ghi 「いちばんやわらかく」 — chuyển động camera ở đây là mềm
        nhất chương, không có đoạn tăng tốc nào
CUT     giữ liên tục sang S30

## S30 · C82–C85 · particle ⭐ NÓI RA VỚI NGƯỜI KHÁC
SCENE   Hai hạt gần nhau. **Một luồng hạt nhỏ đi TỪ hạt này SANG hạt kia** — không phải tia
        sáng, không phải đường kẻ: là **các hạt con tách ra và trôi sang**, theo dòng khí thật
        trong luồng nắng. Hạt xanh cho đi thì quầng nó hạ nhanh hơn; hạt vàng cho đi thì quầng
        nó **giữ nguyên, thậm chí nở ra**
CAMERA  orbit ngang 30° quanh cặp hạt, 75mm; cặp hạt đặt **chếch dưới-phải**
ELEMENT 0s hai hạt xanh cạnh nhau, quầng 0.6 · 6s **hạt con tách khỏi hạt A trôi sang hạt B** —
        ~12 hạt con, quỹ đạo curl noise, không thẳng · 12s quầng hạt A **hạ nhanh hơn bình
        thường** xuống 0.30 (nhưng vẫn trên sàn) · 18s camera orbit tới cặp hạt **vàng** ·
        24s hạt con vàng trôi sang, quầng hạt A vàng **nở rộng thêm 15%, độ sáng giữ nguyên** ·
        30s cả hai cặp trong khung, chênh lệch hành vi rõ
        ⛔ Không mũi tên, không đường nối, không tia. **Chỉ hạt con trôi theo dòng khí**
CUT     giữ liên tục sang S31

## S31 · C86 · particle → live-object (bắt đầu lùi về phòng)
SCENE   Camera bắt đầu **lùi ra khỏi trục luồng nắng** — chuyển động ngược lại S08. Rìa khung
        hiện lại tatami, khung cửa, mép ảnh trên sàn. Trường hạt vẫn đầy, chỉ là đang lùi xa
CAMERA  dolly lùi dọc trục 1,0m, 40mm → 50mm; ⚠ **đây là khởi đầu của cú lùi không-cắt** kéo
        dài sang S32 — xem GHI CHÚ mục 1
ELEMENT 0s trường hạt · 5s góc dưới khung: vệt tatami rõ dần · 9s góc trên: đường ngang của
        khung 障子 · 14s **hạt bắt đầu mất màu dần** — vàng và xanh nhạt về phía xám trắng
        của bụi thật, trong 6s, theo smoothstep của khoảng cách tới trục · 20s hạt gần như
        đã là bụi lại
SFX     Drone **rút hẳn** trong 4s từ 8s. 蝉 xa trở lại từ 14s
CUT     ⛔ **KHÔNG CẮT** sang S32 — camera đi thẳng ra khỏi luồng, về lại phòng

---

# 第4章 — 帰り道 (C87–C101) · 6 shot · ~137s

**Về đúng căn phòng, đúng buổi chiều đó.** Cùng góc máy neo của S05. Thay đổi duy nhất:
`sunAngle` đã dịch **22°** so với S01, vệt nắng dài hơn và **vàng cam hơn hẳn**.

⛔ **Nắng KHÔNG TẮT.** Không một khung nào tối đi. Chương này kết bằng nắng ấm, hộp còn mở,
cháu còn ngồi đó. Kết bằng hình tối là kết bằng hình buồn — sai với chặng này.

## S32 · C87–C88 · live-object ⭐ VỀ PHÒNG, KHÔNG CẮT
SCENE   Camera vượt ngược qua mặt phẳng rìa luồng nắng (ngược S08): hạt đổi từ additive về
        alpha thường và trở lại thành **bụi xám bình thường**. Căn phòng vào lại tiêu điểm.
        Vệt nắng đã dài tới sát vách trong
CAMERA  dolly lùi liên tục từ S31, không ngắt; 50mm → 35mm; kết ở toàn cảnh phòng
ELEMENT 0s còn trong luồng, hạt gần như đã trắng · 4s **vượt màn ngược** — blend đổi về alpha
        trong 1,5s, hạt xám lại · 9s phòng vào tiêu điểm: chiếu, xấp ảnh, hộp, thùng giấy ·
        14s **vệt nắng dài hơn S01 rõ rệt**, đã bò tới chân vách trong, màu (1.00, 0.72, 0.38)
        thay vì (1.00, 0.94, 0.86) của S01 · 20s bóng lưới ô vuông của 障子 trên chiếu **dài và
        nghiêng hơn** — đây là đồng hồ của tập, không cần lời · 26s camera dừng
        ⚠ Mọi vật trong phòng **phải ở đúng transform của S01–S07**. Cùng scene graph, chỉ đổi
        `sunAngle`. Xem GHI CHÚ mục 3
SFX     蝉 xa trở lại đầy đủ. Gió qua 障子
CUT     giữ liên tục sang S33

## S33 · C89–C91 · live-object ⭐ GÓC MÁY NEO — KHỚP S05
SCENE   **Đúng góc máy của S05**, đúng chiều cao, đúng hướng. Hai đôi bàn tay vẫn ở đó, hộp
        ảnh vẫn mở, ảnh vẫn trải trên chiếu. Thứ duy nhất khác: màu của nắng, chiều dài bóng,
        và vị trí vài tấm ảnh
CAMERA  **cắt thẳng vào ma trận camera cuối S05** (hằng số `ANCHOR_CAM`), 50mm, cao 0,85m;
        đứng yên 12s rồi trôi ngang 0,2m. ⚠ Xem GHI CHÚ mục 6 — đây là hợp đồng cứng
ELEMENT 0s cùng bố cục S05: tay 私 trái, tay cháu phải, ảnh ở giữa · 6s **hộp vẫn mở, nắp vẫn
        dựa nghiêng đúng chỗ cũ** · 12s bàn tay cháu vẫn đặt trên cùng tấm ảnh — đứa cháu vẫn
        đang đợi · 18s bàn tay 私 nhấc lên, bắt đầu kể tiếp · 24s nhịp tay đều, không nhẹ bẫng
        như S06, mà **chậm và chắc hơn**
        Đối chiếu bắt buộc: đặt khung cuối S05 cạnh khung đầu S33 — **mọi cạnh của hộp, chiếu,
        khung 障子 phải trùng.** Khác duy nhất: màu nắng, chiều dài bóng, hai tấm ảnh đã đổi chỗ
CUT     giữ liên tục sang S34

## S34 · C92–C94 · live-object
SCENE   Cận cảnh bàn tay 私 lật một tấm ảnh **từ trong bóng ra chỗ nắng**. Tấm đó nghiêng, nắng
        xuyên qua rìa giấy. Tay không run, không dừng
CAMERA  dolly-in 0,4m, 50mm → 85mm, DOF nông; tấm ảnh đặt **lệch trên-phải**
ELEMENT 0s tay cầm tấm ảnh ở vùng bóng, mặt giấy xám · 6s tay đưa tấm ảnh **qua ranh giới vào
        nắng** — mặt giấy đổi từ xám sang vàng ấm trong 1,5s, rìa giấy phát sáng subsurface ·
        13s tấm ảnh giữ trong nắng, **không run** · 19s tay đặt tấm ảnh xuống chiếu, trong
        vùng nắng, cạnh các tấm khác · 25s một ít bụi bật lên quanh tấm ảnh vừa đặt
        ⚠ Chuyển bóng → nắng là hình của C92–C93: chuyện khó nói ra cũng nằm trong cùng ánh
        sáng đó. ⛔ Không nhấn, không hiệu ứng, không slow-motion
SFX     Giấy ảnh chạm chiếu
CUT     giữ liên tục sang S35

## S35 · C95–C96 · live-object + particle (hai lớp cùng khung)
SCENE   Khung có **cả ảnh trên chiếu và bụi trong nắng cùng lúc** — lớp vật thật ở tiền cảnh,
        lớp hạt ở luồng nắng phía sau. Trong lớp hạt, quầng hạ xuống mức sàn **và dừng ở đó,
        thấy rõ**. Nhân hạt không đổi
CAMERA  tĩnh 40mm, tiêu điểm chuyển rất chậm từ ảnh (tiền cảnh) sang bụi (hậu cảnh) rồi quay lại
ELEMENT 0s tiêu điểm ở xấp ảnh · 7s tiêu điểm trôi về luồng nắng — trong luồng, hạt có màu rất
        nhạt trở lại (~20% độ bão hoà của 第3章), đủ để người xem nhận ra là cùng những hạt đó ·
        14s **quầng hạ xuống 0.22 và DỪNG — giữ suốt 8 giây, thấy rõ là đã dừng, không tiếp tục
        xuống** · 22s tiêu điểm quay lại xấp ảnh · 28s giữ
        ⛔⛔ Đây là chỗ thứ hai của **ràng buộc cứng 1**. Không hạt nào tắt. Không fade out.
        Người xem phải thấy chuyển động đi xuống **kết thúc**, không thấy nó đi tới số không
CUT     giữ liên tục sang S36

## S36 · C97–C99 · live-object ⚠ RÀNG BUỘC CỨNG 2 — KHÔNG BÓNG NGƯỜI
SCENE   Toàn cảnh phòng từ góc rộng, thấp. Nắng vàng cam đổ dài. Xấp ảnh, hộp mở, hai đôi bàn
        tay ở rìa khung. Camera lùi rất chậm ra phía hiên, như thể người xem đang rời khỏi
        phòng một cách nhẹ nhàng
CAMERA  dolly lùi 1,4m về phía cửa mở, 40mm → 28mm; **chủ thể (hộp ảnh) giữ ở 1/3 dưới-trái**
        suốt shot, phần lớn khung là nắng và không khí
ELEMENT 0s toàn cảnh phòng · 8s camera lùi, thấy thêm mép 敷居 và một phần hiên ·
        16s **ánh nắng ngoài hiên rất sáng, nhưng trong khung không có gì ngoài ánh sáng** ·
        24s camera lùi tới ngang khung cửa, thấy cả căn phòng trong một khung · 32s dừng
        ⛔⛔ **Tuyệt đối không:** bóng người thứ ba, silhouette ở cửa, ánh sáng tụ thành hình
        người, hạt tụ thành dáng người, phản chiếu người trên kính, một chiếc bóng thừa trên
        chiếu. Lời đọc neo vào **記憶**, không neo vào linh hồn (luật 4b).
        Trong khung chỉ có: ký ức (ảnh, hạt) và người đang nhớ (hai đôi bàn tay)
        ⚠ C99 nói "một nhà nào đó cũng vậy" — ⛔ **không cắt sang nhà khác**, không split screen,
        không thu nhỏ khung. Câu đó để lời đọc mang, hình giữ nguyên một căn phòng
SFX     Gió qua 障子 một lần dài. 2,0s gap sau C99 là khoảng chỉ có gió và ve xa
CUT     giữ liên tục sang S37

## S37 · C100–C101 · live-object ⭐ KHUNG CUỐI
SCENE   Khung cuối của tập: nhìn từ trong phòng ra cửa mở. Vệt nắng chiều vàng cam trải dài
        trên chiếu tới chân camera. Bụi vẫn trôi trong luồng. Hộp ảnh mở ở tiền cảnh trái,
        hai đôi bàn tay ở rìa. **Nắng không tắt**
CAMERA  tĩnh tuyệt đối 35mm, cao 0,85m; ⛔ không zoom, không dolly, không xoay. Giữ yên hoàn
        toàn 16 giây cuối
ELEMENT 0s khung cuối vào vị trí · 6s (C100) bụi trong luồng **tăng nhẹ độ sáng** — không
        biến mất, không lắng xuống, **vẫn đang trôi** · 12s (C101) một hạt bụi trôi chậm từ
        dưới lên qua giữa khung, đi hết chiều cao luồng rồi ra khỏi khung phía trên —
        ⚠ đi **LÊN**, đúng vật lý của tập: thứ nhẹ thì nổi lên · 18s `sunAngle` dịch thêm 1°
        cuối cùng, vệt nắng ấm thêm một chút · 24s giữ nguyên, không đổi gì
        ⛔⛔ **KHÔNG fade to black ở cuối cảnh.** Outro 5s màn đen do `apply-lead-tail.mjs`
        chèn ngoài timeline hình — cảnh cuối **kết ở độ sáng đầy đủ**. Nếu cảnh tự tối đi thì
        người xem thấy nắng tắt, và đó là chốt bằng hình buồn
        ⛔ Không chữ cuối, không logo, không 終 — outro đen xử lý phần đó
SFX     蝉 xa. 風鈴 **một lần cuối** ở ~20s — đối xứng với 風鈴 ở S05 và S08. Sau đó chỉ gió
CUT     hết timeline hình. Outro đen 5s theo `audio.json`

---

# GHI CHÚ DỰNG HÌNH

Quy ước dùng chung cho cả tập. visual-builder tuân theo — sai một mục ở đây là sai cả tập.

## 1. ⭐ Hợp đồng quan trọng nhất: KHÔNG CẮT giữa phòng và trường hạt

Đây là thứ tách tập này khỏi mọi tập khác, và là thứ dễ hỏng nhất khi dựng.

**Một scene graph duy nhất cho cả tập.** Căn phòng, luồng nắng, và hệ hạt **cùng tồn tại
từ frame đầu tới frame cuối**. Không bao giờ tắt phòng đi để dựng hạt, không bao giờ tắt hạt
đi để dựng phòng. Cái nào thấy được là do **camera đang ở đâu**, không do bật/tắt object.

**Hệ hạt là MỘT hệ duy nhất**, không phải hai. Hạt bụi ở S01 và hạt ký ức ở S25 là **cùng
những particle đó**, chỉ khác giá trị ba tham số. Ba tham số này là **hàm smoothstep của
khoảng cách camera tới trục luồng nắng** (`d`), không phải của thời gian:

| Tham số | Ngoài luồng (`d` lớn) | Trong lõi luồng (`d` nhỏ) |
|---|---|---|
| `blendMode` | alpha thường, hạt **tối hơn nền** | **additive**, hạt sáng hơn nền |
| `colorMix` | 0.0 — xám bụi trung tính | 1.0 — `WARM_MEM` / `COOL_MEM` đầy đủ |
| `haloScale` | 0.6 — quầng nhỏ, gần như chấm | 1.0 — nhân + quầng mềm đầy đủ |

Vì chúng là hàm của `d`, cú chuyển ở **S08** (vào) và **S31–S32** (ra) tự xảy ra khi camera di
chuyển. ⛔ Không viết mã đổi trạng thái theo cue, theo timeline, hay theo `t`.

**⚠ Bẫy blend trên nền sáng.** Nền của tập này **sáng** (nắng chiều), không đen. Additive trên
nền sáng làm hạt **biến mất** ngoài luồng. Vì vậy phải có hai chế độ, và phải nội suy giữa chúng.
Kiểm bằng mắt ở snapshot: chụp một frame ở S03 (camera ngoài luồng) — **phải thấy bụi**; chụp
một frame ở S13 (trong luồng) — **phải thấy hạt sáng hơn nền**.

## 2. Bảng màu — nắng chiều, không thêm tông nào

| Tên hằng | RGB | Dùng ở đâu |
|---|---|---|
| `SUN_EARLY` | (1.00, 0.94, 0.86) | Nắng ở S01 — trắng ngà, gay gắt. Cường độ cao |
| `SUN_LATE` | (1.00, 0.72, 0.38) | Nắng ở S37 — vàng cam sâu. **Cùng cường độ, khác màu** |
| `TATAMI` | (0.72, 0.70, 0.52) | Chiếu; trong nắng ám vàng-lục, trong bóng xám ấm |
| `PAPER_AGED` | (0.86, 0.78, 0.62) | Giấy ảnh, giấy sổ, giấy 障子. Mép vàng hơn giữa |
| `WARM_MEM` | (1.00, 0.80, 0.52) | Hạt ký ức dễ chịu |
| `COOL_MEM` | (0.52, 0.60, 0.68) | Hạt ký ức khó chịu — **xám xanh mờ**, ⛔ không xanh bão hoà |

**⛔ Không có màu lạnh nào ngoài `COOL_MEM`.** Không xanh đêm, không tím, không xanh lá.
**⛔ Không có đỏ ở bất kỳ đâu** — không nhãn đỏ, không cảnh báo, không viền.
**⛔ Không đen thuần** ở bất kỳ vùng nào trừ overlay outro. Vùng tối nhất của tập là bóng trong
phòng, vẫn có fill từ nắng nảy trên chiếu — độ sáng sàn ~0.08, không phải 0.

## 3. ⭐ `sunAngle` — đồng hồ của tập, kiểm trước khi render

Thời gian trôi được nhìn thấy **chỉ bằng vệt nắng**, không bằng trời tối. Một biến duy nhất:

| Shot | `sunAngle` (dịch so với S01) | Màu nắng | Chiều dài vệt |
|---|---|---|---|
| S01–S05 | **0°** | `SUN_EARLY` | cơ sở |
| S06–S07 | 2° | 98% `SUN_EARLY` | +8cm |
| S08–S17 (第2章) | 4–9° | trộn dần | +35cm (chỉ thấy ở rìa khung) |
| S18–S31 (第3章) | 9–18° | trộn dần | — (camera trong luồng) |
| S32–S34 | **20°** | 85% `SUN_LATE` | +1,1m, tới chân vách trong |
| S35–S37 | **22° → 23°** | `SUN_LATE` đầy đủ | dài nhất |

**Bốn hệ quả bắt buộc phải theo** khi `sunAngle` tăng:
1. Vệt nắng trên chiếu **dài thêm và dịch vào sâu hơn trong phòng**.
2. Bóng lưới ô vuông của 障子 trên chiếu **dài hơn, nghiêng hơn** (nguồn thấp hơn).
3. Màu nắng nội suy `SUN_EARLY` → `SUN_LATE`.
4. **Cường độ GIỮ NGUYÊN.** ⛔ Không giảm. Nắng đổi màu, không tắt.

Nếu chỉ đổi màu mà không đổi chiều dài bóng, S32 sẽ không đọc được là "thời gian đã trôi".
Nếu giảm cường độ, tập chốt bằng hình buồn — hỏng chặng 帰り道.

## 4. Căn phòng 和室 — dựng một lần, dùng lại ở hai chương

Phòng thấy rõ ở S01–S07 và S32–S37, thấy mờ ở rìa khung suốt S08–S31. **Dựng MỘT scene graph,**
các shot chỉ đổi camera và `sunAngle`. Dựng lại phòng cho mỗi chương sẽ lệch vị trí và hỏng S33.

Thành phần cố định (transform không bao giờ đổi):
- **障子 + khung cửa:** kéo **mở hết** (thấy cả rãnh 敷居), ô lưới gỗ ~30×30cm. Cánh còn lại
  đóng, nắng xuyên qua giấy thành một mảng sáng mềm ở vách.
- **tatami:** sợi cỏ dệt **chạy ngang**, viền 縁 vải sẫm. Mép chiếu có chỗ sờn.
- **Hộp ảnh:** bìa bồi dán giấy hoa văn bạc, bốn góc bọc kim loại xỉn, bản lề vải rách một bên.
  **Nắp dựng nghiêng bên cạnh hộp — vị trí này KHÔNG ĐỔI từ S03 tới S37.**
- **Xấp ảnh:** >20 tấm, **mỗi tấm là mesh cong** (vênh 2–6mm, đổ bóng riêng), grain giấy, ngả
  vàng không đều, subsurface ở rìa khi nắng xuyên. ⛔ Không plane phẳng. ⛔ **Không tấm nào
  đọc được mặt người** — úp nghiêng hoặc mờ dưới ngưỡng nhận diện.
- **Ba thùng carton:** bìa sóng, mép sờn, góc móp, băng keo bóc dở.
- **Quyển sổ tay:** giấy kẻ dòng, trang vênh theo gáy, chữ viết tay **quá nhỏ và mờ để đọc**,
  vết mực chấm điểm ở lề. Xuất hiện ở S09 và S22 — **cùng một object, cùng trang.**

**Không ai có gương mặt.** 私 chỉ thấy **bàn tay tới cổ tay** (S02, S05, S06, S33, S34).
Đứa cháu chỉ thấy **bàn tay và đầu gối** ở rìa khung (S04, S05, S33). ⛔ Không tilt lên, không
cắt sang cận mặt, không silhouette đủ rõ để thành chân dung. Đây là ngôi 私 — người xem ngồi
vào chỗ đó.

## 5. ⭐⭐ Hệ hạt — mức sàn, đường phai, và vật lý

**Cấu trúc một hạt:** point sprite hai lớp — **nhân** (nhỏ, sắc, sáng) + **quầng** (rộng, mềm).
⛔ Không phải chấm phẳng, không phải billboard một lớp.

| Lớp | Nghĩa | Hành vi |
|---|---|---|
| **Nhân** | 記憶 (bản thân ký ức) | **Độ sáng KHÔNG BAO GIỜ đổi.** Hằng số suốt tập |
| **Quầng** | その記憶についた感情の強さ | Phai theo đường cong FAB, **dừng ở mức sàn** |

**⛔⛔ `PARTICLE_FLOOR = 0.22` — RÀNG BUỘC CỨNG SỐ 1.**
Quầng phai xuống `PARTICLE_FLOOR` **rồi dừng hẳn**. Không hạt nào xuống dưới, không hạt nào tắt,
không hạt nào fade out khỏi cảnh. Áp dụng ở **S15, S16, S17, S20, S28, S35** và mọi chỗ khác.
Lý do: lời đọc nói *cường độ cảm xúc* nhạt đi, không nói *ký ức mất đi*. Hạt tắt gợi ý người xem
đang mất dần người đã khuất — **đúng nỗi sợ mà tập này gỡ.**

**Đường phai — hai hằng số thời gian, lấy tỉ lệ từ nghiên cứu:**

```
halo(τ) = FLOOR + (1 - FLOOR) * exp(-τ / TAU)
TAU_COOL ≈ 0.42 * TAU_WARM     // hạt tiêu cực phai nhanh hơn ~2,4 lần
```

`τ` là **tuổi của hạt**, là hàm thuần của `t` và seed sinh hạt — ⛔ không `+= dt`, không tích luỹ.
Người xem phải **NHÌN THẤY** chênh lệch mà không ai vẽ trục. Chênh lệch ở `τ` giữa: quầng xanh
~0.30, quầng vàng ~0.70 — cách nhau hơn gấp đôi, không thể nhầm.

**Tốc độ tách theo chương** (⚠ chênh lệch giữa các shot **là nội dung**, không phải tuỳ tiện):
- **S12:** hai màu phai **bằng nhau** (chuẩn bị cho cú lật ở S13) — cố ý.
- **S13:** tách rõ, tốc độ "theo thời gian dài".
- **S19:** tách **nhanh hơn hẳn S13** — vì đây là 「半日ほどで」.
- **S23:** khởi điểm **bằng nhau, giữ lâu** rồi mới tách — đây là C55.
- **S28:** hai màu phai **cùng tốc độ, cùng tới sàn** — đoạn giới hạn.

**Chuyển động:** curl noise lấy mẫu theo `t`, tốc độ ≤ 2% chiều cao khung/giây.
**Vector nổi:** hạt có quầng thấp hơn thì **nhẹ hơn → dâng lên nhanh hơn** (S24, S25, S37 12s).
Đây là vật lý thật của hệ, không phải hiệu ứng riêng. Nó làm ẩn dụ 「重たかったものが下に落ちる」
đảo chiều thành "thứ còn lại nổi lên" — và nó là câu cuối của tập.

**Sinh hạt:** `mulberry32` seeded, phân bố khối cầu lệch tâm quanh trục luồng nắng.
⛔ Không `Math.random`, `Date.now`, `performance.now`, `requestAnimationFrame` (luật composition 3).

**Số hạt:** ~1.800 thấy được ở S01 (bụi thưa) → ~20.000 ở S11 (quy mô). Mật độ là hàm của vị trí
trong thể tích, không của thời gian. ⚠ packaging ghi rõ: **đo thử số hạt trên một cảnh ngắn
trước khi dựng cả tập** — đây là cảnh nặng nhất từ trước tới nay của kênh, `--browser-gpu` bắt buộc.

## 6. Khớp góc máy S05 ↔ S33 — hợp đồng cứng

Ghi lại **ma trận camera ở khung CUỐI của S05** vào một hằng số dùng chung, ví dụ `ANCHOR_CAM`.
S33 **cắt thẳng vào đúng ma trận đó**, không nội suy lại, không dựng gần đúng.

Kiểm bằng mắt: đặt khung cuối S05 và khung đầu S33 cạnh nhau — **mọi cạnh của hộp ảnh, nắp hộp,
mép chiếu, khung 障子 phải trùng chính xác.** Ba thứ được phép khác:
1. Màu và chiều dài vệt nắng (`sunAngle` 0° → 20°).
2. Vị trí hai tấm ảnh (đã được lật trong lúc kể).
3. Tư thế bàn tay.

Đây là chỗ vòng tròn của tập khép lại bằng hình. Lệch góc máy là mất cú kết.

## 7. Quy ước chuyển động — giữ nhất quán suốt tập

- **Nắng luôn đến từ cùng một phía** (trên-trái vào phòng). ⛔ Không đổi hướng ở bất kỳ shot nào.
- **Hạt nhẹ thì đi LÊN.** Không shot nào có hạt rơi xuống. Câu cuối của tập dựa vào luật này.
- **Camera đi VÀO ở 第1→2章, đi RA ở 第3→4章.** Không đảo. Cú vào (S07→S08) và cú ra (S31→S32)
  là **cùng một quỹ đạo chạy ngược**.
- **Mọi chuyển động là hàm thuần của `t`** (luật composition 3). Bụi, nắng, giấy, quầng hạt:
  sin/FBM/curl theo `t` và mulberry32 seeded.
- **Không cắt nhanh hơn 4 giây.** Cả tập chỉ có **ba lần cắt**: S03→S04 (dissolve 0,8s),
  S26→S27 (dissolve 1,2s), và không có lần thứ ba — mọi chỗ còn lại là **liên tục**.
  ⚠ Đây là tập có ít cắt nhất của kênh, có chủ ý: người xem không bao giờ rời căn phòng.
- **Mỗi shot phải có mốc đổi nhìn thấy được mỗi 6–8 giây.** Đã ghi sẵn trong dòng `ELEMENT`
  của từng shot. Shot nào mất mốc đó thì cắt đôi, nhưng cắt thành hai shot ≥4 giây.
- **Chủ thể không luôn ở giữa khung.** Đã ghi vị trí trong dòng `CAMERA`. Shot duy nhất đặt chủ
  thể ở giữa là **S28** (đoạn giới hạn) — cố ý, vì đoạn đó cần sự thẳng thắn.

## 8. Chữ trên màn hình

**Chỉ có phụ đề.** ⛔ Không nhãn 3D, không tên nghiên cứu hiện trên màn hình, không năm, không
con số, không tên hiệu ứng, không tiêu đề chương hiện thành chữ. Mọi nguồn và con số **đi bằng
lời đọc** — đây là kênh trải nghiệm nghe, nhắm mắt vẫn hiểu trọn vẹn.

Phụ đề sinh từ `voice/*.srt` bằng `scripts/gen-captions.mjs` (**≤22 ký tự toàn角, 1 dòng**).
Font **BIZ UDPGothic** (`assets/fonts/`) khai `@font-face` trong composition.
⚠ `"Segoe UI"` không có glyph CJK → tofu. Phải `await document.fonts.load(...)` trước khi vẽ
bất kỳ text nào.

## 9. Kiểm hình trước khi giao — sáu điểm bắt buộc

`npm run check` PASS **không có nghĩa là hình đúng**. Sau khi dựng phải
`npx hyperframes snapshot` rồi **mở contact-sheet.jpg ra nhìn**. Tập này có intro 2s →
**chụp ở giây cảnh + 2**.

| # | Mốc snapshot (giây cảnh) | Phải thấy gì |
|---|---|---|
| 1 | **20s** (S03) | Bụi **thấy rõ** ngoài luồng (alpha thường) — nếu bụi biến mất là blend sai |
| 2 | **120s** (S08) | Đang vượt màn: hạt sáng hơn nền, rìa khung **còn thấy phòng** |
| 3 | **250s** (S13) | Hai màu **chênh lệch rõ**, không màu nào tắt |
| 4 | **320s** (S17) | Rìa khung **có vệt tatami** — chưa hề rời phòng |
| 5 | **490s** (S25) | Khung **sáng nhất tập**, mọi hạt còn đó, đang dâng lên |
| 6 | **600s** (S27) | ⛔ **Không có bản đồ, không quả cầu, không cụm đếm được** |
| 7 | **730s** (S33) | Khớp góc máy với **S05** — đặt hai frame cạnh nhau đối chiếu |
| 8 | **845s** (S37) | Nắng **vẫn sáng đầy đủ**, ⛔ không tối đi, bụi vẫn trôi |

⚠ Điểm 8 là điểm dễ hỏng nhất: quen tay fade-out ở cuối cảnh sẽ làm nắng tắt, và đó là chốt
bằng hình buồn — sai với toàn bộ chặng 帰り道.
