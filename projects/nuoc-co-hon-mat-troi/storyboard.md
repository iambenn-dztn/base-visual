# STORYBOARD — NƯỚC, CÓ TRƯỚC CẢ MẶT TRỜI

## METADATA
- **Slug:** `nuoc-co-hon-mat-troi`
- **Tổng thời lượng dự kiến:** ~18:30 (1110s). ⚠ Con số này chỉ để căn nhịp — thời lượng CHUẨN
  lấy từ `projects/nuoc-co-hon-mat-troi/timing.json`. Mọi shot neo vào **mã cue**, không vào giây.
- **Số shot:** 84 (S01–S84)
- **Số cue:** 106 (C01–C106), 4 chương. Nhãn chương ở C01 / C16 / C42 / C87.
- **Loại visual theo chương:**
  - CHƯƠNG 1 (C01–C15) — *live-object + procedural*: cốc nước macro, mặt nước dao động, zoom-out
    khỏi phòng vào không gian sâu; phân tử H₂O góc chữ V 104,5°.
  - CHƯƠNG 2 (C16–C41) — *procedural* (xương sống của tập): đám mây phân tử tối, hạt bụi silicat
    phủ băng, nguyên tử H di trú trên bề mặt hạt. Tối, lạnh, KHÔNG ngôi sao nào.
  - CHƯƠNG 3 (C42–C86) — *graph + astro-realistic*: thang D/H đọc được trong 3 giây; sao chổi 67P
    hai thuỳ theo ảnh Rosetta; chondrite cacbon; đĩa tiền hành tinh có khe hở + phân tầng nhiệt.
  - CHƯƠNG 4 (C87–C106) — *particle + live-object*: vòng tuần hoàn nước, giọt mưa trên mu bàn tay,
    trở về cốc nước trong phòng.
- **Nhạc nền:** một track chung `assets/bgm.mp3` cho cả tập. Đừng ghi audio theo shot.
  Chỉ những shot có dòng `SFX` mới cần hiệu ứng riêng.
- **Phụ đề:** KHÔNG chép tay. Sinh từ `voice/*.srt` bằng `scripts/gen-captions.mjs`
  (≤42 ký tự/dòng, 1 dòng).
- **Phong cách:** tập TỐI và LẠNH. Chủ đạo là đen-lam-cyan; điểm nóng cam/đỏ chỉ dành cho
  chương 3 (đĩa tiền hành tinh, va chạm) và ánh đèn phòng ở chương 4. Xem GHI CHÚ DỰNG HÌNH.
- **Cao trào hình (shot phải được đầu tư nhất):** S07 (C12–C13 · cú lật liên kết),
  S22–S26 (C30–C34 · xưởng lạnh), S44 (C55 · D/H nước biển), S48 (C63 · 67P gấp 3),
  S50–S51 (C65–C67 · tranh cãi còn mở), S60–S64 (C76–C82 · Cleeves 2014), S84 (C106 · ngụm nước).

---

# CHƯƠNG 1 — THỨ TÔI CẦM TRONG TAY (C01–C15)

## S01 · C01 · CHƯƠNG 1
SCENE   Đen hoàn toàn. Rồi một cốc thuỷ tinh hiện ra từ bóng tối, nước đang được rót vào — quay
        macro ngang tầm mặt nước, nền tối, chỉ một nguồn sáng bên trái
CAMERA  tĩnh, 85mm macro, DOF rất nông (chỉ mặt nước nét, thành cốc mờ); fade-in từ đen 1.5s
ELEMENT cốc thuỷ tinh trơn; dòng nước rót tạo bọt khí nhỏ nổi lên rồi vỡ; caustics méo trên đáy
        cốc; ánh sáng key duy nhất ROOM_WARM, không đèn phụ — 85% khung là vùng tối có chi tiết
SFX     tiếng rót nước vào thuỷ tinh, rất gần, rất thật (đã ghi trong AUDIO DIRECTION)
CUT     giữ nguyên bố cục sang S02, chỉ mực nước dâng lên tới ~2/3 cốc rồi dừng

## S02 · C02 · CHƯƠNG 1
SCENE   Cùng cốc nước nhưng lùi ra: một góc bàn trong phòng tối, bàn tay vừa đặt cốc xuống rồi rút đi
CAMERA  pull-back rất chậm 85mm → 50mm, camera hơi hạ xuống ngang mặt bàn
ELEMENT mặt bàn gỗ tối; cốc đứng lệch tâm phải; bóng đổ dài về trái; hạt bụi lơ lửng bắt sáng
        trong chùm key — motif "bụi" gieo từ đây để trả lại ở chương 2
CUT     cắt thẳng sang macro ở S03

## S03 · C03 · CHƯƠNG 1
SCENE   Macro mặt nước trong cốc, gợn sóng đồng tâm cực nhỏ đập theo nhịp tim
CAMERA  tĩnh, nhìn xiên 30° xuống mặt nước, 100mm macro
ELEMENT sóng đồng tâm biên độ <0.3mm, chu kỳ 0.86s (≈70 nhịp/phút) — là hàm thuần của t,
        không tích luỹ; phản xạ méo của nguồn sáng trượt trên mặt sóng; mép nước cong lên
        thành cốc (meniscus) thấy rõ
CUT     dissolve chậm sang S04

## S04 · C04 · CHƯƠNG 1
SCENE   Mặt nước lặng dần, phản chiếu chuyển từ trần phòng thành một mảng sao mờ — gợi ý đầu tiên
        rằng câu hỏi sẽ dẫn ra ngoài kia
CAMERA  tĩnh, cùng góc S03; chỉ nội dung phản chiếu biến đổi
ELEMENT crossfade texture phản chiếu: trần phòng → starfield thưa (sao nhỏ, không bloom); độ
        trong của nước giữ nguyên để người xem hiểu đây là phản chiếu, không phải chuyển cảnh
CUT     cắt sang S05 khi phản chiếu vừa thành sao rõ

## S05 · C05 · CHƯƠNG 1
SCENE   Chuỗi lùi thời gian ngược của nước máy: vòi → đường ống → nhà máy → dòng sông → đám mây →
        đại dương bốc hơi. Năm hình liên tiếp, mỗi hình ~2s
CAMERA  mỗi hình một cú whip-pan ngắn sang trái, nối bằng match-cut theo hình dạng dòng chảy
ELEMENT chuỗi ảnh ngả xanh lạnh, độ bão hoà thấp, như ký ức; đường chảy luôn đi từ phải sang
        trái để mắt hiểu "đang đi ngược thời gian"; không có chữ, không có nhãn
CUT     whip-pan cuối dừng lại đột ngột trên mặt biển phẳng lặng → S06

## S06 · C06 · CHƯƠNG 1
SCENE   Từ mặt biển lao thẳng vào một phân tử nước đơn lẻ: hai quả cầu H nhỏ và một quả cầu O lớn,
        đặt đúng góc chữ V 104,5°, xoay chậm trong hư không đen
CAMERA  dolly-in cực nhanh xuyên qua mặt biển rồi phanh gấp (ease-out mạnh), kết ở cận cảnh phân tử
ELEMENT O bán kính gấp ~1,4 lần H; góc HOH = 104,5° (đúng, đừng vẽ 120° hay thẳng hàng); liên kết
        vẽ là ống sáng mảnh ICE_CYAN emissive 0.8; phân tử xoay quanh trục riêng, tốc độ chậm
CUT     giữ phân tử trên khung, tối dần xung quanh → S07

## S07 · C12–C13 · CHƯƠNG 1 ⭐ CAO TRÀO — CÚ LẬT "LIÊN KẾT"
SCENE   Hai trạng thái đặt cạnh nhau để bác bỏ cách hiểu sai. Trái: ba nguyên tử RỜI trôi tách nhau,
        mỗi hạt gắn nhãn tuổi rất lớn — hình này MỜ ĐI và bị gạch bỏ. Phải: cùng ba nguyên tử ấy
        nhưng ĐANG ĐƯỢC LIÊN KẾT giữ lại thành chữ V — hình này sáng lên và ở lại
CAMERA  tĩnh, split-screen mềm (không có đường kẻ chia, chỉ khác độ sáng); cuối shot camera trượt
        sang phải loại bỏ hoàn toàn nửa trái
ELEMENT nửa trái: 3 quả cầu xám ROCK_GREY trôi phân kỳ, KHÔNG có ống liên kết — desaturate và
        giảm exposure về 0.15 trong 1.2s;
        nửa phải: cùng 3 quả cầu nhưng hai ống liên kết ICE_CYAN sáng lên emissive 1.4 (được phép
        vượt 1.0 vì là nguồn sáng, không phải chữ); góc V giữ đúng 104,5°;
        ⚠ trọng tâm hình là ỐNG LIÊN KẾT, không phải quả cầu — làm ống dày lên và hạt tối đi
CUT     hard-cut, không dissolve — cú lật cần dứt khoát

## S08 · C14 · CHƯƠNG 1
SCENE   Phân tử chữ V nhỏ lại thành một đốm sáng, trôi ngang qua ba lớp nền lần lượt: một ngôi sao
        trẻ, một hành tinh, rồi bóng một cổ họng/thân người dựng bằng khối tối
CAMERA  truck-left theo phân tử, giữ nó cố định ở 1/3 trái khung, nền chạy qua sau lưng
ELEMENT ba nền chồng lớp parallax (sao xa nhất chạy chậm nhất); phân tử luôn giữ nguyên kích cỡ
        và nguyên vẹn — thông điệp: nền đổi, nó không đổi; silhouette người chỉ là mảng đen tuyệt
        đối, không chi tiết mặt
CUT     nền thứ ba tối hẳn, chỉ còn đốm sáng phân tử → S09

## S09 · C15 · CHƯƠNG 1
SCENE   Đốm sáng đơn độc giữa đen tuyền, rồi tắt. Khung đen giữ 1s trước khi mở chương 2
CAMERA  tĩnh, đốm ở chính giữa, thu nhỏ theo hàm mũ
ELEMENT chỉ một điểm sáng ICE_CYAN; vignette tuyệt đối; đây là điểm nghỉ thị giác duy nhất của
        nửa đầu tập — đừng thêm gì
CUT     đen hoàn toàn → mở CHƯƠNG 2

---

# CHƯƠNG 2 — CÁI XƯỞNG LẠNH (C16–C41)

## S10 · C16 · CHƯƠNG 2
SCENE   Mở ra từ đen: một không gian rộng mênh mông nhưng gần như không nhìn thấy gì — chỉ vài ngôi
        sao nền RẤT xa bị che khuất dần bởi một khối tối đang tiến tới
CAMERA  tĩnh, ống kính rộng 24mm; khối tối lớn dần chiếm khung từ dưới lên
ELEMENT starfield thưa, sao nhỏ 1–2px, không bloom; khối tối là volume noise FBM có mật độ, ăn
        dần ánh sao phía sau bằng extinction (không phải một tấm đen phủ lên)
CUT     giữ liên tục sang S11 — cùng khối mây, camera bắt đầu tiến

## S11 · C17 · CHƯƠNG 2
SCENE   Bên trong rìa đám mây phân tử. Không ngôi sao nào, không ánh sáng, không màu. Chỉ những
        mảng đậm nhạt cực tinh tế của khí tối
CAMERA  dolly-in rất chậm, đều, không dừng — tạo cảm giác lún vào
ELEMENT volume 3D FBM 4 octave, mật độ tăng dần về tâm; ⚠ ĐÁM MÂY PHÂN TỬ KHÔNG CÓ TÂM SÁNG —
        chiếu sáng duy nhất là ánh sao nền rìa ngoài tán xạ vào, nên độ sáng GIẢM khi đi sâu;
        giữ chi tiết vùng tối bằng dải luminance hẹp 0.02–0.10 kèm dither 1/255 chống banding
CUT     cắt sang góc nhìn từ Trái Đất ở S12

## S12 · C18 · CHƯƠNG 2
SCENE   Đổi hẳn điểm nhìn: dải Ngân Hà dày đặc sao nhìn từ mặt đất, và một vệt đen hình bất định
        cắt ngang nó — như mực bôi lên trời
CAMERA  tilt-up rất chậm từ đường chân trời tối lên dải Ngân Hà
ELEMENT dải Ngân Hà nhiều sao nhỏ + bụi nâu ấm DUST_WARM ở mật độ thấp; vết tối là vùng KHÔNG có
        sao (extinction), không phải hình đen vẽ đè — mép vết phải lởm chởm và có gradient
CUT     dissolve chậm trở lại bên trong đám mây → S13

## S13 · C19–C20 · CHƯƠNG 2
SCENE   Bên trong mây, tối. Một chỉ số nhiệt độ hiện lên mảnh mai ở góc dưới trái và tụt xuống:
        10 K / −263 °C, kèm hai mốc so sánh nhỏ (bề mặt Diêm Vương Tinh, 0 K)
CAMERA  tĩnh, hơi drift ngang 2% khung để hình không chết cứng
ELEMENT thang nhiệt dọc mảnh, nét dày 3px, emissive 0.75 (DƯỚI 1.0 để bloom không nhoè chữ);
        mốc 0 K là vạch cứng ở đáy thang — kim dừng ngay trên nó; hạt khí xung quanh chuyển động
        chậm dần khi số tụt, minh hoạ nhiệt độ bằng TỐC ĐỘ HẠT chứ không bằng màu nóng
CUT     thang nhiệt mờ đi, giữ nguyên nền mây → S14

## S14 · C21 · CHƯƠNG 2
SCENE   So sánh mật độ: một ô lập phương 1 cm³ trong suốt đặt giữa mây, bên trong chỉ lác đác vài
        chấm sáng; ô thứ hai (không khí phòng) hiện bên cạnh, đặc kín tới mức thành một khối trắng đục
CAMERA  tĩnh, hai ô song song; camera nhích nhẹ sang ô thứ hai khi nó xuất hiện
ELEMENT ô trái: ~30 chấm rời rạc, có thể ĐẾM được bằng mắt; ô phải: hạt nhiều tới mức aliasing
        thành sương đục — cố ý cho thấy sự chênh lệch 10¹⁹ lần là không vẽ nổi;
        ⚠ ô phải không được vượt 12% diện tích khung ở luminance >0.85 — hạ nó về xám sáng 0.6
CUT     ô phải biến mất đột ngột, ô trái còn lại một mình → S15

## S15 · C22 · CHƯƠNG 2
SCENE   Một buồng chân không phòng thí nghiệm dạng cắt lớp kỹ thuật, bơm đang chạy — nhưng bên
        trong nó vẫn còn dày đặc hạt hơn ô lập phương của đám mây đang lơ lửng cạnh bên
CAMERA  tĩnh, hai vật thể cùng khung, buồng chân không bên trái, ô mây bên phải
ELEMENT buồng thép mô tả bằng đường nét kỹ thuật mảnh (wireframe sáng 0.7), không phải model
        chi tiết; mật độ hạt bên trong buồng vẫn gấp nhiều lần ô bên phải — đọc được ngay
CUT     buồng chân không mờ tan, camera lún trở lại vào mây → S16

## S16 · C23 · CHƯƠNG 2
SCENE   Toàn khung là bóng tối đám mây, gần như không có gì. Một nhịp nghỉ có chủ đích trước khi
        cảnh trung tâm bắt đầu
CAMERA  drift-in cực chậm, gần như đứng yên
ELEMENT chỉ volume tối + hạt khí trôi rất chậm; luminance trung bình khung ≤0.06 nhưng phải còn
        đọc được cấu trúc — đây là shot kiểm chứng cho quy tắc "tối mà không bẹt"
CUT     giữ nguyên nền sang S17

## S17 · C24–C25 · CHƯƠNG 2
SCENE   Minh hoạ bài toán: hai nguyên tử hydro trôi trong không gian trống, đường bay của chúng
        vẽ thành hai vệt dài lượn qua nhau mà không gặp; khi hiếm hoi có va chạm, chúng bật ra
CAMERA  theo sau một nguyên tử (tracking), 50mm, nền mây chạy chậm
ELEMENT hai hạt H_WHITE nhỏ, mỗi hạt kéo một trail mảnh mờ dần; một lần va chạm duy nhất ở cuối
        shot: hai hạt chạm rồi BẬT RA theo góc phản xạ đàn hồi, không dính — kèm một xung sáng
        nhỏ thoát ra ngoài biểu thị năng lượng không có chỗ nhả
CUT     cắt sang S18

## S18 · C26 · CHƯƠNG 2
SCENE   Đối chiếu: một "cái bàn hoá học" quen thuộc — chất lỏng đông đúc, phân tử chen chúc va đập
        liên tục — rồi hình đó co lại thành hư không trống rỗng
CAMERA  tĩnh; hình đông đúc thu nhỏ về tâm rồi tắt, để lại khung trống
ELEMENT cụm ~400 hạt va đập mật độ cao, chuyển động Brown seeded; khi thu nhỏ, giữ chuyển động
        đến tận lúc biến mất để tương phản mạnh với khung trống theo sau
CUT     khung trống giữ 1 nhịp → S19

## S19 · C27 · CHƯƠNG 2
SCENE   Từ khung trống, MỘT hạt bụi duy nhất trôi vào từ mép phải và dừng giữa khung. Đây là nhân
        vật chính của cả chương
CAMERA  tĩnh, hạt bụi vào khung rồi camera bắt đầu dolly-in nhẹ
ELEMENT hạt bụi silicat hình bất định (không phải cầu), bề mặt gồ ghề nhiều hốc; chưa phủ băng ở
        shot này; chiếu sáng rim rất yếu từ phía sau để thấy được silhouette trên nền đen
SFX     một nốt đơn sáng khi hạt vào khung (theo AUDIO DIRECTION)
CUT     giữ hạt, camera tiếp tục tiến → S20

## S20 · C28 · CHƯƠNG 2
SCENE   Cận cảnh hạt bụi, kèm thang tỉ lệ: hạt bụi (0,1 µm) đặt cạnh một hạt khói thuốc lá (lớn
        hơn rõ rệt) và một sợi tóc người (khổng lồ, chỉ thấy một phần cong)
CAMERA  dolly-in tiếp, kết ở cận cảnh bề mặt hạt
ELEMENT tỉ lệ ĐÚNG: sợi tóc ~70 µm ≈ 700 lần hạt bụi → chỉ thấy một cung cong chiếm hết mép khung;
        hạt khói ~1 µm ≈ 10 lần; nhãn kích thước nét mảnh, emissive 0.7;
        lõi hạt là silicat/cacbon — bề mặt tối, albedo thấp, thấy được nhờ rim light lam lạnh
CUT     giữ liên tục — camera chưa dừng tiến

## S21 · C29 · CHƯƠNG 2
SCENE   Đảo tỉ lệ: camera hạ xuống sát bề mặt hạt bụi, và bề mặt đó trải ra như một địa hình —
        đồi, hố, khe. Một "lục địa"
CAMERA  camera hạ thấp tới sát bề mặt rồi ngẩng lên, đường chân trời cong của hạt bụi hiện ra
ELEMENT địa hình procedural từ noise trên mặt cầu bất định; đường chân trời cong RÕ (nhắc người
        xem đây vẫn là một hạt cực nhỏ); nền sau chân trời là đen tuyệt đối + vài sao mờ
CUT     giữ nguyên bối cảnh này cho toàn bộ S22–S28 — đây là "sân khấu" của cảnh trung tâm

## S22 · C30 · CHƯƠNG 2 ⭐ CAO TRÀO — XƯỞNG LẠNH (1/5)
SCENE   Một nguyên tử OXY trôi tới từ trên cao, chạm bề mặt hạt bụi, nảy rất khẽ một lần rồi nằm
        yên trong một hốc lõm. Bị bắt
CAMERA  tĩnh thấp ngang bề mặt, tele 85mm, DOF nông (chỉ vùng hạ cánh nét)
ELEMENT nguyên tử O là quả cầu ICE_CYAN đường kính lớn hơn H rõ rệt, emissive 0.9; khi chạm bề
        mặt phát một gợn sáng lan ra rất khẽ rồi tắt (năng lượng truyền vào hạt); sau khi dừng,
        O chỉ dao động biên độ cực nhỏ tại chỗ — KHÔNG di chuyển, tương phản với H ở shot sau
CUT     giữ O tại chỗ, camera giữ nguyên → S23

## S23 · C31 · CHƯƠNG 2 ⭐ CAO TRÀO — XƯỞNG LẠNH (2/5)
SCENE   Một nguyên tử HYDRO hạ xuống cách đó một quãng, rồi bắt đầu TRƯỜN trên bề mặt — bò từ chỗ
        lồi này sang chỗ lõm kia, ngoằn ngoèo, như con kiến quanh hòn đá
CAMERA  tracking chậm bám theo H, giữ O trong khung ở hậu cảnh mờ (mắt người xem biết đích đến)
ELEMENT H nhỏ, sáng H_WHITE, di trú bằng chuỗi bước nhảy ngắn (hopping), KHÔNG trượt mượt — mỗi
        bước là một nhảy sang hốc kề bên; quỹ đạo seeded PRNG, là hàm thuần của t;
        H để lại một vệt mờ rất ngắn đánh dấu đường đã đi
CUT     giữ liên tục → S24

## S24 · C32 · CHƯƠNG 2 ⭐ CAO TRÀO — XƯỞNG LẠNH (3/5)
SCENE   H tiếp tục bò, khoảng cách tới O thu hẹp dần. Khung căng lên vì sự chờ đợi
CAMERA  dolly-in chậm, thu hẹp khung để H và O cùng lọt vào cận cảnh
ELEMENT nhịp bước nhảy của H thưa dần và ngắn lại khi tới gần (không tăng tốc — cái lạnh không
        cho phép); nền hoàn toàn tối, chỉ hai đốm sáng trong khung
CUT     cắt gấp sang cận cảnh cực đại → S25

## S25 · C33 · CHƯƠNG 2 ⭐ CAO TRÀO — XƯỞNG LẠNH (4/5)
SCENE   Khoảnh khắc liên kết. H và O chạm nhau, một ống liên kết bật sáng nối chúng, và phần năng
        lượng dư TOẢ VÀO hạt bụi — lan đi thành một gợn nhiệt mờ dưới bề mặt rồi tắt
CAMERA  cận cảnh cực đại, tĩnh tuyệt đối 0.5s tại thời điểm liên kết (điểm nghỉ camera)
ELEMENT ống liên kết ICE_CYAN emissive 1.5 bật trong 3 frame rồi hạ về 0.9; sóng năng lượng lan
        ra trên bề mặt hạt bụi theo vòng tròn, mờ dần theo 1/r — đây là hình ảnh "hạt bụi là cái
        bàn VÀ là nơi đổ nhiệt", phải thấy rõ năng lượng đi VÀO hạt, không bay ra ngoài
SFX     tiếng "tách" rất khẽ, khô (theo AUDIO DIRECTION)
CUT     giữ nguyên khung → S26

## S26 · C34 · CHƯƠNG 2 ⭐ CAO TRÀO — XƯỞNG LẠNH (5/5)
SCENE   Nguyên tử hydro thứ hai bò tới từ mép khung, gắn vào phía còn lại của O. Phân tử nước
        hoàn chỉnh, đúng góc chữ V, nằm trên bề mặt một hạt bụi giữa hư không
CAMERA  sau khi liên kết thứ hai hình thành, camera lùi ra rất chậm để lộ cả hạt bụi
ELEMENT phân tử hoàn chỉnh: góc HOH 104,5°, hai ống liên kết sáng đều; phân tử dao động uốn/kéo
        rất nhẹ tại chỗ; ⚠ đây là phân tử ĐẦU TIÊN — cả khung chỉ có MỘT, đừng vẽ nhiều
CUT     dissolve sang timelapse → S27

## S27 · C35 · CHƯƠNG 2
SCENE   Timelapse hàng triệu năm: trên khắp bề mặt hạt bụi, phân tử nước xuất hiện dần rồi xếp
        chồng thành một lớp băng phủ kín, dày vài chục phân tử
CAMERA  orbit chậm quanh hạt bụi trong lúc lớp băng dày lên
ELEMENT lớp băng mọc theo hàm thuần của t (không tích luỹ), bắt đầu từ các hốc lõm rồi lan ra chỗ
        lồi — đúng vật lý bám dính; băng là vật liệu trong mờ, tán xạ dưới bề mặt nhẹ, màu
        ICE_CYAN rất nhạt; hạt bụi từ "đá đen" thành "viên băng bẩn"
CUT     camera lùi ra xa để thấy hàng nghìn hạt tương tự → S28

## S28 · C36 · CHƯƠNG 2
SCENE   Toàn cảnh: hàng nghìn hạt bụi phủ băng trôi trong bóng tối đám mây. Không lửa, không tia
        chớp, không ngôi sao nào thắp sáng cảnh này
CAMERA  pull-back rộng, chậm, đều
ELEMENT trường hạt instanced, mỗi hạt một phương hướng xoay riêng seeded; ánh sáng duy nhất là
        rim lạnh cực yếu — phần lớn hạt chỉ là silhouette hơi sáng hơn nền;
        ⚠ KHÔNG thêm nguồn sáng nào để "cho dễ nhìn". Giữ chi tiết bằng tương phản cục bộ
CUT     cắt sang shot đối chiếu nóng-lạnh → S29

## S29 · C37 · CHƯƠNG 2
SCENE   Đối chiếu nhanh những cái lò quen thuộc của vũ trụ: lõi một ngôi sao đang tổng hợp, một
        vụ nổ siêu tân tinh — cả hai hiện ra RỰC RỠ rồi bị dập tắt
CAMERA  hai hình liên tiếp, mỗi hình một cú zoom-in ngắn rồi cắt
ELEMENT lò sao: lõi DISK_HOT cuộn đối lưu; siêu tân tinh: sóng xung kích EMBER lan ra;
        ⚠ hai shot này là nơi DUY NHẤT của chương 2 có màu nóng — giới hạn vùng sáng >0.85 dưới
        10% khung, và tổng thời lượng ngắn để không phá mạch tối của chương
CUT     hard-cut về đen tuyệt đối → S30

## S30 · C38 · CHƯƠNG 2
SCENE   Từ đen, trở lại đúng cận cảnh phân tử nước trên hạt bụi ở S26 — lặng lẽ, từng nguyên tử một
CAMERA  tĩnh, cùng khung hình với S26 (rhyme cố ý)
ELEMENT chỉ một phân tử trên bề mặt tối; không hiệu ứng thêm; tương phản với hai lò rực rỡ vừa rồi
CUT     dissolve dài sang chương điều tra → S31

## S31 · C39–C40 · CHƯƠNG 2
SCENE   Chuyển nhịp sang giọng điều tra: một hạt bụi phủ băng lơ lửng, và quanh nó hiện ra những
        khung ngắm/ô lưới đo đạc — nhưng tất cả đều TRỐNG, không máy quay, không nhân chứng
CAMERA  tĩnh, các khung đo trượt vào từ ngoài rồi khoá lại quanh hạt
ELEMENT lưới đo và khung ngắm nét mảnh 2–3px, emissive 0.7 (dưới ngưỡng bloom); một ô ghi chú
        bỏ trống có dấu gạch chéo — thể hiện "không ai từng ở đó để xem"; nền vẫn tối
CUT     giữ nguyên → S32

## S32 · C41 · CHƯƠNG 2
SCENE   Trên phân tử nước xuất hiện một "cái nhãn" — một dấu nhỏ gắn liền vào cấu trúc của nó,
        chưa đọc được nội dung
CAMERA  dolly-in sát vào phân tử cho tới khi cái nhãn chiếm giữa khung
ELEMENT nhãn không phải vật thể dán ngoài mà là một nguyên tử trong phân tử SÁNG KHÁC MÀU
        (D_MAGENTA) so với hai hydro còn lại — gieo trước deuteri cho chương 3 mà chưa gọi tên
CUT     hard-cut sang CHƯƠNG 3, nhịp gõ máy đo bắt đầu

---

# CHƯƠNG 3 — DẤU VÂN TAY TRONG MỖI GIỌT (C42–C86)

## S33 · C42–C43 · CHƯƠNG 3
SCENE   Sơ đồ sạch trên nền tối: hydro thường — một proton trần trụi, một electron. Bên cạnh là
        một thanh tỉ lệ cho thấy nó chiếm gần như toàn bộ hydro trong vũ trụ
CAMERA  tĩnh, sơ đồ chính giữa; nhích nhẹ sang phải cuối shot để dành chỗ cho phiên bản thứ hai
ELEMENT proton là quả cầu H_WHITE emissive 0.85; electron vẽ là đám mây xác suất mờ (KHÔNG phải
        quỹ đạo hành tinh kiểu Bohr — sai vật lý); nét sơ đồ dày 3px, emissive ≤0.8
CUT     giữ nguyên, phiên bản hai trượt vào → S34

## S34 · C44 · CHƯƠNG 3
SCENE   Deuteri hiện bên phải: cùng một electron, nhưng hạt nhân có thêm một neutron. Nặng gấp đôi
CAMERA  tĩnh, hai sơ đồ song song
ELEMENT hạt nhân D = proton H_WHITE + neutron D_MAGENTA dính nhau; một cân nhỏ dưới hai sơ đồ
        nghiêng rõ về phía D theo đúng tỉ lệ 2:1; đám mây electron của hai bên VẼ GIỐNG HỆT NHAU
        — nhấn ý "hành xử hoá học gần như y hệt"
CUT     giữ sơ đồ D, mờ sơ đồ H → S35

## S35 · C45 · CHƯƠNG 3
SCENE   Một lát cắt RẤT NGẮN về vũ trụ sơ khai: nền plasma nóng, deuteri được đúc ra trong vài phút
        đầu, rồi đồng hồ nhảy vọt — và hình dừng lại
CAMERA  một cú zoom-out nhanh duy nhất, không nấn ná
ELEMENT plasma EMBER cuộn nhanh, hạt D kết tụ; thanh thời gian ngang hiện "vài phút" rồi kéo dài
        thành 13,8 tỉ năm mà không có D nào sinh thêm; kèm tỉ lệ nền 1/40 000 vẽ thành một ô lưới
        200×200 chấm chỉ có 1 chấm D_MAGENTA — đọc được ngay;
        ⚠ shot NGẮN. Tập trước đã làm về hạt nhân — không giảng lại
CUT     ⭐ C45→C46 phải DỨT KHOÁT: hard-cut, plasma tắt trong 1 frame, không dissolve, không tàn dư

## S36 · C46 · CHƯƠNG 3 ⭐ CHUYỂN HƯỚNG DỨT KHOÁT
SCENE   Từ đen, một chiếc NHIỆT KẾ hiện ra chiếm trọn khung — không còn dấu vết gì của vũ trụ sơ khai
CAMERA  tĩnh, nhiệt kế dọc chính giữa, không chuyển động
ELEMENT nhiệt kế kiểu khoa học, cột chỉ thị là chính các nguyên tử D_MAGENTA xếp chồng; thang từ
        10 K (đáy) tới ~300 K (đỉnh); nét dày, emissive 0.75; nền đen phẳng — sự thay đổi ngữ cảnh
        phải cảm nhận được ngay trong 1 giây đầu
CUT     nhiệt kế thu về góc phải làm mốc thường trực cho các shot sau → S37

## S37 · C47 · CHƯƠNG 3
SCENE   Hai phân tử nước cạnh nhau: H₂O thường và HDO (một hydro bị thay bằng deuteri). Cái thứ hai
        nặng hơn — thả xuống thì chìm/lún sâu hơn một chút
CAMERA  tĩnh, hai phân tử song song trên một "mặt phẳng" ẩn dụ
ELEMENT HDO có một nhánh D_MAGENTA, H₂O toàn H_WHITE; chênh lệch khối lượng thể hiện bằng biên độ
        DAO ĐỘNG: nhánh D rung chậm hơn và biên độ nhỏ hơn nhánh H rõ rệt — đúng vật lý dao động
        zero-point, và đây chính là nguyên nhân liên kết D bền hơn
CUT     giữ HDO, camera vào sát liên kết D → S38

## S38 · C48 · CHƯƠNG 3
SCENE   Thí nghiệm hai buồng: buồng ẤM (300 K) và buồng LẠNH (10 K), mỗi buồng chứa hỗn hợp H và D
        cùng nước. Ở buồng ấm mọi thứ xáo trộn dữ dội, không thấy quy luật gì
CAMERA  tĩnh, hai buồng song song; shot này chỉ tập trung buồng ấm (buồng lạnh còn mờ)
ELEMENT buồng ấm: hạt chuyển động Brown tốc độ cao, D và H trộn lẫn đều, tỉ lệ D bám vào nước
        dao động quanh mức nền — vẽ một chỉ số D/H nhấp nháy loạn không ổn định
CUT     camera trượt sang buồng lạnh → S39

## S39 · C49 · CHƯƠNG 3
SCENE   Buồng LẠNH: mọi chuyển động chậm lại gần như đứng. Và bây giờ thấy rõ quy luật — D bám vào
        và ở lại, H bị đẩy ra
CAMERA  trượt hoàn tất sang buồng lạnh rồi dolly-in
ELEMENT hạt gần như bất động; mỗi lần một D và một H cùng tranh một vị trí trên phân tử, D ở lại
        còn H bật ra — lặp lại đủ nhiều lần để mắt tự rút ra quy luật, KHÔNG cần mũi tên giải thích;
        chỉ số D/H của buồng lạnh tăng đều và ổn định
CUT     hai buồng cùng hiện lại để so kết quả → S40

## S40 · C50–C51 · CHƯƠNG 3
SCENE   Kết quả hai buồng đặt cạnh nhau: nước từ buồng lạnh giàu deuteri gấp hàng chục–hàng trăm
        lần mức nền; nước từ buồng ấm bám sát mức nền
CAMERA  tĩnh, hai cột kết quả mọc lên từ đáy khung
ELEMENT thang cột DỌC theo log (ghi rõ "log" trên trục — chênh lệch hàng trăm lần không vẽ được
        theo tuyến tính); cột lạnh D_MAGENTA cao vọt, cột ấm thấp sát vạch nền; đường nền vũ trụ
        là một đường ngang đứt nét mảnh xuyên khung
CUT     hai cột mờ đi, giữ lại đường nền → S41

## S41 · C52 · CHƯƠNG 3
SCENE   Nhiều khối nước khác nhau trôi trong khung (một khối băng sao chổi, một khối nước biển,
        một khối băng liên sao), mỗi khối mang một CON SỐ D/H gắn liền
CAMERA  orbit chậm quanh cụm ba khối
ELEMENT mỗi khối là một viên băng bất định trong mờ, con số gắn với nó bằng một đường chỉ mảnh;
        con số KHÔNG đổi khi khối xoay — nhấn ý "đóng dấu từ ngày đầu, không phai";
        chữ số nét dày, emissive 0.7, đặt trên nền tối phẳng để đọc được
CUT     ba khối dồn thành một → S42

## S42 · C53 · CHƯƠNG 3
SCENE   Hình ẩn dụ dấu vân tay: các vân của một dấu tay hiện ra, nhưng mỗi đường vân là một chuỗi
        phân tử nước nối nhau
CAMERA  dolly-in từ toàn bộ dấu tay vào một đường vân duy nhất
ELEMENT vân tay dựng bằng đường cong procedural, hạt phân tử chạy dọc theo vân; màu ICE_CYAN trên
        nền đen; ⚠ đừng dùng ảnh vân tay pháp y kiểu hình sự — giữ chất thiên văn, tối và mảnh
CUT     dissolve sang đại dương Trái Đất → S43

## S43 · C54 · CHƯƠNG 3
SCENE   Trái Đất nhìn từ quỹ đạo thấp, nghiêng về phía một đại dương; một tia lấy mẫu mảnh chạm
        xuống mặt biển và rút lên mang theo một giọt
CAMERA  orbit chậm quanh chi tuyến, Trái Đất chiếm 2/3 khung dưới
ELEMENT Trái Đất texture NASA thật; ⚠ trục nghiêng 23,4°, tự quay NGƯỢC CHIỀU KIM ĐỒNG HỒ nhìn
        từ cực Bắc; terminator sắc nét, phía đêm có ánh đèn thành phố rất mờ;
        đại dương dùng OCEAN_TEAL, không dùng lam nhạt bệch
CUT     giọt mẫu bay lên chiếm khung → S44

## S44 · C55–C56 · CHƯƠNG 3 ⭐ GRAPH — D/H NƯỚC BIỂN
SCENE   Giọt nước biển phóng to, và con số hiện ra: 1 nguyên tử deuteri trên ~6 400 hydro
        (D/H ≈ 1,56×10⁻⁴), cùng bội số so với mức nền vũ trụ ≈ 6–7 lần
CAMERA  tĩnh tuyệt đối — graph cần đọc được trong 3 giây, camera không được động
ELEMENT lưới 6 400 chấm H_WHITE mờ với ĐÚNG MỘT chấm D_MAGENTA sáng — người xem tìm thấy nó trong
        1 giây; bên phải là thanh so sánh ngang: mức nền vũ trụ (1/40 000) vs nước biển (1/6 400),
        chênh ~6,25 lần, vẽ theo tỉ lệ THẬT;
        ⚠ mọi chữ số emissive ≤0.75, nét dày 4px; nền đen phẳng tuyệt đối, không nebula phía sau
CUT     giữ graph, chỉ mờ lưới chấm → S45

## S45 · C57 · CHƯƠNG 3
SCENE   Trái Đất trở lại, và một đường nối mảnh từ đại dương của nó vươn ra ngoài khung về phía
        bóng tối liên sao — chữ ký hoá học của một nơi Trái Đất chưa từng đi qua
CAMERA  pull-back rộng, Trái Đất nhỏ dần về góc dưới trái
ELEMENT đường nối là một cung mảnh ICE_CYAN mờ dần về phía tối, KHÔNG có mũi tên ở đầu (chưa kết
        luận được); phía đầu kia chỉ là bóng tối
CUT     dissolve sang tàu vũ trụ → S46

## S46 · C58–C59 · CHƯƠNG 3
SCENE   Một con tàu thăm dò nhỏ bay trong không gian sâu; rồi cắt sang sao chổi như "tủ đông của
        hệ Mặt Trời" — một tảng băng bẩn tối đen trôi xa Mặt Trời
CAMERA  tàu: tracking bên hông, chậm; sao chổi: wide tĩnh, Mặt Trời chỉ là một điểm sáng rất xa
ELEMENT thân tàu kim loại tối phản chiếu yếu, pin mặt trời góc mở đúng hướng về điểm sáng Mặt Trời;
        sao chổi ở xa CHƯA có đuôi (chưa hoạt động) — đúng vật lý, đuôi chỉ mọc khi tới gần
SFX     tiếng gió rít xa của tàu (theo AUDIO DIRECTION)
CUT     cắt sang tiếp cận 67P → S47

## S47 · C60–C61 · CHƯƠNG 3
SCENE   Rosetta bay kèm sao chổi 67P Churyumov-Gerasimenko: khối hai thuỳ hình "con vịt", dài ~4 km,
        đen như than; máy đo trên tàu quét luồng hơi nước thoát ra từ cổ sao chổi
CAMERA  bay kèm (tàu và sao chổi cùng vận tốc → sao chổi đứng yên trong khung, sao nền trôi);
        orbit nửa vòng để lộ hình hai thuỳ
ELEMENT ⚠ 67P theo ảnh Rosetta THẬT: hai thuỳ không đều (thuỳ lớn + thuỳ nhỏ nối bằng "cổ"), bề
        mặt albedo ~0,06 (đen hơn than) — chỉ đọc được nhờ ánh Mặt Trời xiên mạnh tạo bóng đổ dài;
        jet hơi nước phun ra từ vùng cổ, mảnh và thẳng, mờ dần theo khoảng cách;
        chu kỳ tự quay ~12,4 h — trong khung chỉ thấy xoay rất chậm;
        nhãn tên và thanh tỉ lệ 4 km nét mảnh emissive 0.7
CUT     một nhịp im lặng, khung tối lại trước con số → S48

## S48 · C62–C63 · CHƯƠNG 3 ⭐ GRAPH — 67P GẤP 3 LẦN
SCENE   Thang D/H nằm ngang, đọc được trong 3 giây: mốc NƯỚC BIỂN ở giữa, mốc 67P nằm xa bên phải
        ở khoảng gấp 3 lần, kèm thanh sai số ±
CAMERA  tĩnh tuyệt đối
ELEMENT trục ngang log D/H từ 1×10⁻⁴ tới 1×10⁻³; ba mốc đã có: mức nền vũ trụ (0,25×10⁻⁴),
        nước biển (1,56×10⁻⁴, ICE_CYAN), 67P (5,3×10⁻⁴, GRAPH_AMBER) kèm thanh sai số ±0,7×10⁻⁴
        vẽ ĐÚNG tỉ lệ — thanh sai số phải thấy rõ, đây là khoa học thật;
        khoảng cách 67P↔nước biển được tô sáng và ghi "×3";
        ⚠ nền đen phẳng, chữ emissive ≤0.75, nét 4px; không hiệu ứng động ngoài việc mốc 67P
        trượt vào vị trí một lần rồi đứng yên
CUT     giữ graph → S49

## S49 · C64 · CHƯƠNG 3
SCENE   Hình sao chổi 67P mờ đi và bị một dấu gạch chéo mảnh loại khỏi danh sách ứng viên
CAMERA  tĩnh
ELEMENT danh sách ứng viên dạng cột đơn giản: "sao chổi" bị gạch, các dòng dưới còn để trống;
        gạch chéo nét mảnh, không đỏ chói — dùng ROCK_GREY sáng để giữ tông khoa học, không kịch tính
CUT     cắt sang shot thận trọng → S50

## S50 · C65–C66 · CHƯƠNG 3 ⭐ SỰ KHÔNG CHẮC CHẮN (1/2)
SCENE   Dấu gạch vừa rồi MỜ NHẠT đi (chưa chắc đã đúng). Thang D/H trở lại nhưng lần này có NHIỀU
        mốc sao chổi rải rác — vài cái gần nước biển hơn hẳn, vài cái xa
CAMERA  tĩnh, các mốc mới nảy vào thang lần lượt, không theo thứ tự
ELEMENT 6–8 mốc sao chổi phân tán rộng trên trục log, mỗi mốc một thanh sai số DÀI; một vài mốc
        (loại siêu hoạt động, đo ở gần Trái Đất) nằm sát vạch nước biển;
        ⚠ KHÔNG vẽ đường trung bình, KHÔNG vẽ vùng kết luận — sự phân tán chính là thông điệp;
        một chú thích nhỏ: các phép đo gần Trái Đất có điều kiện quan sát khác
CUT     giữ thang, chèn shot cơ chế nghi vấn → S51

## S51 · C66–C67 · CHƯƠNG 3 ⭐ SỰ KHÔNG CHẮC CHẮN (2/2)
SCENE   Minh hoạ nghi vấn kỹ thuật: từ bề mặt sao chổi, hơi nước thoát ra — nhưng lẫn trong đó là
        những hạt BỤI CÒN MANG BĂNG, và băng trên hạt bụi bốc hơi muộn hơn, ở một chỗ khác. Máy đo
        không phân biệt được hai nguồn
CAMERA  cận cảnh vùng jet, camera hơi lắc rất khẽ (bất ổn) — biên độ nhỏ, là hàm sin của t
ELEMENT hai luồng phân biệt bằng màu: hơi nước trực tiếp ICE_CYAN, hơi từ bụi mang băng
        GRAPH_AMBER; cả hai đi vào cùng một khe máy đo và TRỘN thành một tín hiệu duy nhất;
        chỉ số đầu ra dao động trong một DẢI, không hội tụ về một số — kết shot bằng chỉ số vẫn
        đang dao động, ⚠ tuyệt đối không cho nó dừng lại ở một giá trị
CUT     cắt dứt sang chondrite → S52

## S52 · C68 · CHƯƠNG 3
SCENE   Một viên thiên thạch chondrite cacbon: đá đen, xốp, lỗ chỗ; cắt đôi để lộ mặt trong với
        những chondrule tròn nhỏ nằm rải trong nền khoáng
CAMERA  orbit chậm quanh viên đá, rồi cắt lớp mở ra
ELEMENT bề mặt ngoài có lớp vỏ nung chảy (fusion crust) đen bóng; mặt cắt trong xỉn, nhiều
        chondrule cầu đường kính dưới 1mm; nước KHÔNG ở dạng lỏng — vẽ là các mạch khoáng
        ngậm nước (phyllosilicate) phát sáng ICE_CYAN rất yếu bên trong cấu trúc đá
CUT     giữ viên đá, đổi bối cảnh sang nơi tìm thấy → S53

## S53 · C69 · CHƯƠNG 3
SCENE   Hai nơi thu thập: một cánh đồng băng Nam Cực với viên đá đen nằm chỏng chơ trên nền trắng;
        rồi một sa mạc đá. Cuối shot: một vệt lửa rơi ban đêm
CAMERA  ba hình ngắn nối nhau bằng match-cut theo vị trí viên đá trong khung
ELEMENT ⚠ cảnh Nam Cực là shot SÁNG NHẤT của cả tập — kiểm soát: băng để ở luminance ~0.72, KHÔNG
        để >0.85 quá 12% khung; viên đá đen là điểm neo tương phản;
        vệt lửa rơi ngắn, EMBER, quỹ đạo thẳng hơi cong, tắt trước khi chạm đất
CUT     cắt sang phòng thí nghiệm đo → S54

## S54 · C69–C70 · CHƯƠNG 3 ⭐ GRAPH — CHONDRITE GẦN NƯỚC BIỂN
SCENE   Thang D/H lần thứ ba, lần này thêm mốc CHONDRITE — nằm gần sát mốc nước biển. Ba nhóm cùng
        hiện trên một trục: đám mây lạnh (rất cao), 67P và các sao chổi (phân tán, cao), chondrite
        (cụm chặt, sát nước biển)
CAMERA  tĩnh tuyệt đối; đây là graph tổng kết của chương — giữ trên khung lâu hơn các graph trước
ELEMENT trục log D/H đầy đủ 4 nhóm:
        • đám mây phân tử lạnh — vùng rộng, rất cao (tới 10⁻²), D_MAGENTA
        • sao chổi — các mốc rời rạc phân tán, GRAPH_AMBER, sai số dài
        • chondrite cacbon — cụm chặt quanh 1,4–1,8×10⁻⁴, GRAPH_GREEN, sai số ngắn
        • nước biển Trái Đất — một vạch dọc tham chiếu ICE_CYAN xuyên suốt khung
        ⚠ vạch nước biển đi qua ĐÚNG giữa cụm chondrite — đó là toàn bộ nội dung shot
CUT     graph mờ, hình đá đen hiện thay chỗ đuôi sao chổi → S55

## S55 · C70 · CHƯƠNG 3
SCENE   Đối chiếu hình ảnh: một sao chổi đuôi sáng rực kiểu tranh minh hoạ sách giáo khoa MỜ TAN,
        thay vào đó là một đàn đá đen xấu xí lặng lẽ bay tới
CAMERA  tĩnh, phép thay thế xảy ra tại chỗ
ELEMENT sao chổi lộng lẫy được vẽ hơi "quá đẹp" có chủ ý (hơi kitsch) rồi mờ; đàn đá đen không
        đuôi, không hào quang, chỉ silhouette bắt rim light yếu — tương phản là thông điệp
CUT     dissolve sang câu hỏi lớn → S56

## S56 · C71–C72 · CHƯƠNG 3
SCENE   Một trục thời gian dọc hiện ra với MỘT vạch mốc duy nhất: "Mặt Trời bật sáng". Một phân tử
        nước lơ lửng cạnh trục, chưa biết đặt nó phía trên hay phía dưới vạch
CAMERA  tĩnh, phân tử dao động do dự quanh vạch mốc
ELEMENT trục dọc nét mảnh; vạch mốc là đường ngang sáng hơn; phân tử trượt lên rồi xuống quanh
        vạch theo hàm sin biên độ giảm dần nhưng KHÔNG dừng — câu hỏi chưa trả lời;
        hai nhãn "trước" / "sau" ở hai phía, emissive 0.7
CUT     hard-cut sang đĩa tiền hành tinh → S57

## S57 · C73 · CHƯƠNG 3
SCENE   Đám mây lạnh sụp đổ vào chính nó; một ngôi sao trẻ bật sáng ở tâm và một ĐĨA TIỀN HÀNH TINH
        khổng lồ quay tròn quanh nó
CAMERA  từ trên cao hạ dần xuống gần mặt phẳng đĩa (góc nhìn cạnh) — chuyển động liên tục, không cắt
ELEMENT ⚠ ĐĨA PHẢI ĐÚNG: có KHE HỞ do hành tinh non tạo ra; PHÂN TẦNG NHIỆT rõ — vòng trong
        DISK_INNER_WHT/DISK_HOT, vòng giữa DUST_WARM, vòng ngoài tối lạnh ICE_CYAN rất nhạt;
        đĩa mỏng ở rìa, phồng lên ở vùng trong (flaring); toàn đĩa quay CÙNG một chiều, vi phân
        Kepler (vòng trong nhanh hơn vòng ngoài rõ rệt — đừng quay như đĩa cứng);
        ngôi sao trẻ ở tâm bị đĩa che một phần, ánh sáng hắt lên mặt trên đĩa
CUT     dolly-in về vùng trong nóng → S58

## S58 · C74 · CHƯƠNG 3
SCENE   Vùng trong của đĩa: nóng tới mức mọi thứ bốc hơi. Bức xạ cực tím từ ngôi sao xé toang các
        liên kết — phân tử nước bị đập ra thành nguyên tử rời
CAMERA  dolly-in mạnh vào vùng trong, rung nhẹ (biên độ nhỏ, hàm của t)
ELEMENT photon UV vẽ là các tia mảnh UV_BLUEWHITE bắn ra từ sao; mỗi lần trúng một phân tử, hai
        ống liên kết ICE_CYAN ĐỨT và ba quả cầu văng ra rời nhau — chính là hình ẩn dụ đảo ngược
        của S07, cố ý;
        ⚠ vùng sáng nóng giới hạn dưới 12% khung; phần còn lại giữ tối
SFX     tiếng gầm nhiệt dâng lên (theo AUDIO DIRECTION)
CUT     giữ cảnh phá huỷ, chồng lên viễn cảnh xấu → S59

## S59 · C75 · CHƯƠNG 3
SCENE   Viễn cảnh "nếu điều đó xảy ra với tất cả": toàn bộ phân tử trong đĩa bị đập ra rồi ráp lại
        thành hàng mới, và trục thời gian ở S56 sập về phía "SAU Mặt Trời"
CAMERA  pull-back từ vùng trong ra toàn đĩa, rồi trục thời gian chồng lên
ELEMENT làn sóng phá huỷ lan từ trong ra ngoài quét qua toàn đĩa; phân tử mới ráp lại có màu khác
        (H_WHITE thuần, không có D_MAGENTA) — chúng "trẻ";
        đám mây lạnh ở góc khung co lại thành một chấm mờ rồi tắt
CUT     ⚠ TIẾNG GẦM CẮT ĐỘT NGỘT — hard-cut về đen + im lặng, giữ ~1s

## S60 · C76 · CHƯƠNG 3 ⭐ CLEEVES 2014 (1/4)
SCENE   Từ đen: một bàn làm việc khoa học tối giản — không người, chỉ một mô hình đĩa tiền hành tinh
        dạng sơ đồ cắt lớp đang được lật ngược lại để kiểm tra
CAMERA  tĩnh, sơ đồ đĩa xoay 180° một lần rồi dừng
ELEMENT sơ đồ đĩa dạng mặt cắt đứng (nhìn từ cạnh, nửa đĩa): thấy rõ lớp trên bị chiếu xạ, lớp
        giữa ấm, lớp đáy lạnh tối; nét mảnh, emissive ≤0.75; nhãn năm 2014 nhỏ ở góc
CUT     giữ sơ đồ, thêm dây chuyền phản ứng → S61

## S61 · C77 · CHƯƠNG 3 ⭐ CLEEVES 2014 (2/4)
SCENE   Dây chuyền phản ứng tạo nước giàu deuteri hiện ra như một cỗ máy nhiều khâu — và nó cần hai
        điều kiện: LẠNH, và đủ ION để khởi động
CAMERA  tĩnh, dây chuyền chạy từ trái sang phải
ELEMENT chuỗi 4–5 khâu nối bằng mũi tên mảnh; hai "van" điều kiện gắn ở đầu chuỗi: một van nhiệt
        (đang mở, lạnh) và một van ION (đang gần đóng); khi thiếu ion, các khâu chạy chậm dần
        thấy rõ — tốc độ khâu tỉ lệ với độ mở van ion
CUT     giữ dây chuyền ở hậu cảnh mờ, đưa mô hình ion lên → S62

## S62 · C78 · CHƯƠNG 3 ⭐ CLEEVES 2014 (3/4)
SCENE   Kiểm kê các nguồn ion hoá trong đĩa: tia vũ trụ từ ngoài (bị ngôi sao trẻ chắn bớt), các
        nguyên tố phóng xạ trong đĩa (đóng góp nhỏ). Cộng lại vẫn quá thấp
CAMERA  tĩnh, ba dòng đóng góp cộng dồn vào một thanh tổng ở dưới
ELEMENT tia vũ trụ: các tia từ ngoài rìa khung bị gió sao của ngôi sao trẻ bẻ cong và chặn lại —
        chỉ một phần nhỏ lọt vào đĩa; phóng xạ: các chấm lấp lánh thưa trong thân đĩa;
        thanh tổng dâng lên rồi DỪNG rõ rệt DƯỚI một vạch ngưỡng đứt nét — khoảng cách giữa
        đỉnh thanh và vạch ngưỡng phải nhìn thấy rõ, đó là kết luận
CUT     giữ thanh tổng và ngưỡng → S63

## S63 · C79–C80 · CHƯƠNG 3 ⭐ CLEEVES 2014 (4/4)
SCENE   Cho mô hình chạy hết công suất suốt một triệu năm: đồng hồ quay nhanh, lượng nước nặng sản
        xuất được vẫn không chạm tới mức deuteri đang có trong đại dương
CAMERA  tĩnh, đồng hồ ở góc, thanh sản lượng ở giữa
ELEMENT đồng hồ mô phỏng quay nhanh tới 1 triệu năm rồi dừng; thanh sản lượng tăng theo đường
        bão hoà và phẳng ra sớm; vạch "lượng D trong đại dương" nằm cao hơn hẳn đỉnh thanh —
        khoảng thiếu hụt được tô sáng ICE_CYAN và chính khoảng đó là "nước có trước Mặt Trời"
CUT     khoảng thiếu hụt tách ra thành khối riêng → S64

## S64 · C81–C82 · CHƯƠNG 3 ⭐ CON SỐ 30–50%
SCENE   Một khối cầu nước đại diện toàn bộ đại dương Trái Đất, được chia bằng một mặt phẳng: phần
        30–50% sáng lên là nước có trước Mặt Trời
CAMERA  orbit chậm quanh khối cầu để thấy tỉ lệ phân chia là thật (khối, không phải hình phẳng)
ELEMENT khối cầu nước trong mờ; vùng "có trước" D_MAGENTA nhạt, vùng "làm trong đĩa" ICE_CYAN;
        ⚠ ranh giới KHÔNG sắc — vẽ thành một DẢI từ 30% tới 50% (khoa học thật có khoảng, không
        có con số đơn); nhãn "30–50%" nét dày, emissive 0.75
CUT     dissolve về đám mây lạnh → S65

## S65 · C83 · CHƯƠNG 3
SCENE   Chuỗi sống sót: phân tử nước nấp trong lớp băng quanh hạt bụi ở VÙNG NGOÀI lạnh giá của
        đĩa, nơi nhiệt không với tới; rồi bụi dính thành sỏi, sỏi thành đá, đá thành tiểu hành tinh
CAMERA  một cú dolly liên tục dọc theo bán kính đĩa từ trong ra ngoài, rồi timelapse kết tụ
ELEMENT hành trình đi NGƯỢC ra rìa đĩa — nhiệt độ giảm thấy rõ qua màu nền; ở vùng ngoài, các hạt
        phủ băng nguyên vẹn, phân tử D_MAGENTA vẫn sáng bên trong lớp băng;
        kết tụ theo bậc: bụi (µm) → sỏi (cm) → đá (m) → tiểu hành tinh (km), mỗi bậc một nhịp
        rõ ràng, tỉ lệ chênh lệch được thể hiện bằng pull-back camera chứ không bằng hạt to lên
CUT     tiểu hành tinh rời khỏi đĩa, lao vào bóng tối → S66

## S66 · C84 · CHƯƠNG 3
SCENE   Hàng triệu năm sau: một tảng đá lao xuống một hành tinh còn nóng chảy, chưa có tên, bề mặt
        là biển magma
CAMERA  theo sau tảng đá (tracking từ phía sau), lao xuống về phía bề mặt đỏ rực, rồi CẮT trước
        khi va chạm
ELEMENT hành tinh magma: bề mặt EMBER nứt nẻ theo ô đối lưu, không có đại dương, không có mây;
        ⚠ vùng sáng nóng dưới 12% khung — chủ yếu là magma tối với các khe nứt sáng, không phải
        một mặt cầu đỏ đều;
        tảng đá là silhouette đen, chỉ rìa dưới bắt sáng từ hành tinh
SFX     tiếng va đập nặng ở xa rồi lặng (theo AUDIO DIRECTION)
CUT     hard-cut sang đen 0.4s, rồi mở ra hơi nước → S67

## S67 · C85–C86 · CHƯƠNG 3
SCENE   Nước bên trong đá thoát ra thành hơi, dâng lên thành khí quyển, nguội đi, và rơi xuống
        thành MƯA — một cơn mưa hàng nghìn năm trên hành tinh đang nguội dần
CAMERA  tilt-up theo cột hơi nước lên khí quyển, rồi tilt-down theo mưa rơi; kết ở wide toàn hành tinh
ELEMENT timelapse: hơi nước ICE_CYAN bốc lên, tầng mây dày lên, giọt đầu tiên rơi rồi thành mưa
        dày đặc; bề mặt magma nguội dần từ EMBER sang ROCK_GREY tối trong lúc mưa;
        cuối shot: Mặt Trời hiện thấp ở chân trời chiếu qua màn mưa — và một vài giọt mưa sáng lên
        D_MAGENTA nhạt, nhắc rằng chúng già hơn chính ngôi sao đang chiếu lên chúng
CUT     một giọt mưa rơi xuống khung, dissolve dài sang phòng ngủ → CHƯƠNG 4

---

# CHƯƠNG 4 — NGỤM NƯỚC (C87–C106)

## S68 · C87–C88 · CHƯƠNG 4
SCENE   Trở lại căn phòng của S02, cùng góc, cùng ánh sáng. Cốc nước vẫn trên bàn. Mọi âm thanh
        vũ trụ đã tắt
CAMERA  tĩnh, đúng khung hình của S02 (rhyme khép vòng); rồi dolly-in rất chậm về phía cốc
ELEMENT phòng tối, ROOM_WARM key duy nhất; hơi nước ngưng nhẹ trên thành cốc đã tan bớt (cốc ấm
        lên); con số 8×10²⁴ phân tử hiện lên rất mảnh rồi tự mờ đi ngay — cố ý không cho đọc kỹ,
        đúng ý "lớn tới mức vô nghĩa"
CUT     dolly-in tiếp vào trong lòng nước → S69

## S69 · C89 · CHƯƠNG 4
SCENE   Xuyên vào bên trong cốc nước: một biển phân tử H₂O dày đặc chuyển động — và trong đó vài
        phân tử sáng lên D_MAGENTA: những cái chưa từng bị tháo rời suốt 4,6 tỉ năm
CAMERA  dolly-in xuyên mặt nước, rồi trôi lơ lửng giữa đám phân tử
ELEMENT trường phân tử mật độ cao, chuyển động Brown seeded; tỉ lệ phân tử sáng phải HIẾM (khoảng
        vài phần nghìn số phân tử nhìn thấy) — đừng cho chúng chiếm đa số;
        mỗi phân tử sáng giữ nguyên góc chữ V 104,5°;
        ⚠ mật độ cao dễ cháy trắng — giới hạn alpha tích luỹ, giữ nền dưới 0.5 luminance
CUT     một phân tử sáng được chọn, camera khoá vào nó → S70

## S70 · C90–C91 · CHƯƠNG 4
SCENE   Hồi ký của một phân tử, phần 1: nó nằm trong lòng một tiểu hành tinh; rơi xuống hành tinh
        đang cháy; bốc lên thành mây, rơi xuống thành mưa — vòng lặp mây-mưa tăng tốc tới chóng mặt
CAMERA  phân tử luôn cố định GIỮA khung; thế giới xung quanh thay đổi quanh nó
ELEMENT bốn bối cảnh chuyển tiếp bằng dissolve nhanh dần; vòng mây-mưa cuối cùng lặp đủ nhanh để
        thành một nhịp đập; phân tử KHÔNG đổi hình dạng, không đổi màu suốt shot — đó là điểm neo
CUT     giữ phân tử tại chỗ → S71

## S71 · C92 · CHƯƠNG 4
SCENE   Hồi ký phần 2: đại dương chưa có sự sống → tế bào đầu tiên tự nhân đôi → máu một con cá →
        nhựa một cái cây → băng trên đỉnh núi mười nghìn năm → tan ra và chảy đi
CAMERA  cùng nguyên tắc: phân tử cố định giữa khung, sáu bối cảnh trôi qua
ELEMENT sáu bối cảnh vẽ tối giản, đơn sắc theo tông lạnh trừ cảnh máu (EMBER rất tối) và nhựa cây
        (GRAPH_GREEN tối); cảnh băng núi giữ LÂU NHẤT rồi tan chậm — nhấn "mười nghìn năm";
        không bối cảnh nào có chi tiết thừa để mắt không rời khỏi phân tử
CUT     bối cảnh cuối tan hết, chỉ còn phân tử trên nền đen → S72

## S72 · C93 · CHƯƠNG 4
SCENE   Phân tử một mình trên nền đen, xoay chậm — vẫn cùng một oxy, cùng hai hydro, cùng góc chữ V
CAMERA  tĩnh, orbit rất chậm quanh phân tử
ELEMENT đây là shot tĩnh lặng nhất chương; không thêm gì; ⚠ so sánh trực tiếp với S06 — dựng CÙNG
        một model, cùng góc, cùng tỉ lệ, để người xem nhận ra nó không đổi
CUT     dissolve sang hình cơ thể → S73

## S73 · C94–C95 · CHƯƠNG 4
SCENE   Một silhouette người, và dòng nước chảy XUYÊN QUA — vào rồi ra, không đọng lại. Cơ thể chỉ
        là một đoạn ống trên đường đi của nước
CAMERA  tĩnh, silhouette chính giữa, dòng chảy đi từ trên xuống xuyên qua
ELEMENT silhouette là mảng đen tuyệt đối, không chi tiết; dòng nước là particle ICE_CYAN chảy liên
        tục vào đỉnh và ra đáy; một chỉ số nhỏ "vài tuần" cho chu kỳ thay mới;
        ⚠ dòng chảy KHÔNG dừng lại bên trong — không có hạt nào đọng lại, đó là toàn bộ ý
CUT     camera pull-back để lộ các "chặng" khác → S74

## S74 · C96 · CHƯƠNG 4
SCENE   Vòng tuần hoàn đầy đủ: cái cây, đám mây, con sông, và silhouette người — tất cả nằm trên
        cùng một vòng khép kín, mỗi thứ chỉ là một nút mà nước đi qua
CAMERA  pull-back rộng rồi orbit chậm quanh vòng tuần hoàn
ELEMENT vòng tuần hoàn dựng dạng mạch particle liên tục; bốn nút được vẽ TƯƠNG ĐƯƠNG nhau về kích
        cỡ và độ nhấn — con người không được ưu tiên hơn cái cây;
        dòng hạt chảy đều, không có điểm bắt đầu hay kết thúc nhìn thấy được
CUT     giữ vòng, các nút mờ đi từng cái → S75

## S75 · C97 · CHƯƠNG 4
SCENE   Các nút (cây, mây, sông, người) lần lượt mờ và biến mất. Chỉ dòng phân tử ở lại, vẫn chảy
CAMERA  tĩnh, các nút tắt dần theo thứ tự
ELEMENT sau khi tất cả nút tắt, dòng hạt vẫn giữ nguyên quỹ đạo vòng — nó không cần các nút;
        mật độ và tốc độ hạt không đổi trước và sau
SFX     tiếng mưa bắt đầu rất khẽ ở xa (theo AUDIO DIRECTION)
CUT     dòng hạt kéo dài thành những sợi mưa dọc → S76

## S76 · C98–C99 · CHƯƠNG 4
SCENE   Mưa thật, ban đêm, nhìn từ dưới lên. Rồi khung thu hẹp dần: từ cả cơn mưa xuống còn MỘT giọt
        đang rơi
CAMERA  tilt-down từ bầu trời mưa xuống, rồi dolly-in cực chậm bám theo một giọt duy nhất
ELEMENT hàng nghìn sợi mưa mờ dần khi camera chọn ra một giọt; giọt được chọn giữ nét, phần còn
        lại rơi vào DOF mờ; ánh sáng đèn đường ROOM_WARM rất yếu từ phía sau làm giọt sáng lên
CUT     giọt tiếp cận mu bàn tay → S77

## S77 · C99–C100 · CHƯƠNG 4
SCENE   Macro cực đại: giọt nước chạm vào mu bàn tay, biến dạng, rồi nằm yên thành một vòm nước
CAMERA  macro 100mm, tĩnh, slow-motion ở khoảnh khắc chạm
ELEMENT biến dạng giọt đúng vật lý: dẹt ra, dội lại một lần rất nhỏ, rồi ổn định thành vòm do sức
        căng bề mặt; da người chỉ thấy vân và lỗ chân lông ở rìa DOF; bên trong giọt phản chiếu
        méo cả bầu trời đêm
CUT     camera đi VÀO trong giọt → S78

## S78 · C100 · CHƯƠNG 4
SCENE   Bên trong giọt nước: quãng đường 1 km từ đám mây được vẽ là một đoạn thẳng ngắn; rồi quãng
        đường thật của các phân tử trong nó trải ra dài gấp bội, chạy ra khỏi khung
CAMERA  tĩnh, hai đoạn đường so sánh nằm ngang
ELEMENT đoạn "1 km" là một vạch ngắn có thể đo bằng mắt; đoạn kia bắt đầu từ cùng điểm nhưng kéo
        dài ra ngoài khung và mờ đi trong bóng tối — cố ý KHÔNG vẽ hết, không có con số;
        ⚠ tuyệt đối im lặng về mặt hình — không hiệu ứng, khớp với "nước không kể chuyện"
CUT     dissolve về đám mây lạnh của chương 2 → S79

## S79 · C101 · CHƯƠNG 4
SCENE   Trở lại chính xác cảnh S26: một phân tử nước trên bề mặt một hạt bụi, trong bóng tối, ở
        một nơi chưa có ngôi sao nào
CAMERA  tĩnh, ĐÚNG khung hình và tiêu cự của S26
ELEMENT dựng lại nguyên si S26 — cùng hạt bụi, cùng vị trí phân tử, cùng ánh rim; đây là cú khép
        vòng quan trọng nhất của tập, sai lệch khung sẽ làm mất hiệu ứng
CUT     giữ nguyên, thời gian bắt đầu chạy → S80

## S80 · C102 · CHƯƠNG 4
SCENE   Timelapse 4,6 tỉ năm trong một shot liên tục: Mặt Trời bật sáng → các hành tinh kết lại →
        đại dương đầy lên → sự sống bắt đầu → bốn tỉ năm trôi qua
CAMERA  pull-back liên tục không cắt, từ hạt bụi ra tới toàn hệ Mặt Trời rồi vào lại Trái Đất
ELEMENT năm giai đoạn nối liền mạch, mỗi giai đoạn khoảng đều nhau;
        ⚠ hệ Mặt Trời: tất cả hành tinh quay CÙNG CHIỀU (ngược kim đồng hồ nhìn từ cực Bắc hoàng
        đạo), quỹ đạo gần đồng phẳng, chu kỳ theo Kepler (vòng trong nhanh hơn rõ rệt);
        Trái Đất giữ trục nghiêng 23,4° suốt timelapse;
        ánh sáng Mặt Trời bật lên là cú tăng sáng lớn nhất của tập — kiểm soát dưới 12% khung
CUT     lao vào Trái Đất, xuyên mây, về lại mu bàn tay → S81

## S81 · C103 · CHƯƠNG 4
SCENE   Trở lại macro giọt nước trên mu bàn tay. Nó bắt đầu trượt xuống
CAMERA  macro tĩnh, đúng khung S77
ELEMENT giọt mất cân bằng và trượt, kéo theo một vệt ướt mảnh; chuyển động chậm, có ma sát —
        không rơi tự do; khung tối dần ở rìa
CUT     dissolve về căn phòng → S82

## S82 · C104 · CHƯƠNG 4
SCENE   Căn phòng, cốc nước trên bàn. Một bàn tay đi vào khung và cầm cốc lên
CAMERA  tĩnh, khung của S02/S68; cốc được nhấc lên khỏi khung phía trên
ELEMENT chỉ còn vệt nước hình tròn trên mặt bàn nơi cốc vừa đứng — chi tiết nhỏ nhưng là dấu vết;
        ánh ROOM_WARM giữ nguyên
SFX     tiếng nước động khẽ trong cốc khi nhấc lên
CUT     cắt sang cận cảnh → S83

## S83 · C105 · CHƯƠNG 4
SCENE   Cận cảnh mặt nước trong cốc nghiêng đi khi được nâng lên uống — mặt nước trượt về một phía,
        rồi khung tối dần khi cốc che mất nguồn sáng
CAMERA  macro bám mặt nước, nghiêng theo cốc
ELEMENT mặt nước giữ phẳng theo trọng lực trong lúc cốc nghiêng (đúng vật lý); caustics quét ngang
        rồi biến mất; khung tối dần đều về gần đen
CUT     tối hoàn toàn trong ~0.6s → S84

## S84 · C106 · CHƯƠNG 4 ⭐ KẾT
SCENE   Trong bóng tối gần như hoàn toàn, MỘT phân tử nước sáng D_MAGENTA rất nhạt trôi qua khung,
        chậm, từ phải sang trái, rồi ra khỏi khung. Khung đen. Tiếng mưa tan dần
CAMERA  tĩnh tuyệt đối, không chuyển động nào
ELEMENT chỉ một phân tử, góc chữ V 104,5° quen thuộc, emissive 0.9, không bloom mạnh; nền đen
        tuyệt đối; sau khi phân tử ra khỏi khung, giữ đen ≥2s trước khi hết video;
        ⚠ không chữ, không logo, không outro đồ hoạ — kết bằng im lặng
CUT     hết tập

---

# GHI CHÚ DỰNG HÌNH

## 1. Bảng màu — đã kiểm bằng `HFA.saturationAfterACES(r,g,b)`

Quy tắc áp dụng: **kênh yếu ≤ 0.2× kênh mạnh; kênh mạnh quanh 1.0; muốn sáng thì tăng emissive,
đừng nâng kênh yếu.** Mọi màu dưới đây đã đo; cột `after` là độ bão hoà còn lại SAU ACES.

| Tên | Linear RGB | before | **after** | Dùng ở đâu |
|---|---|---|---|---|
| `ICE_CYAN` | `(0.08, 0.55, 1.00)` | .92 | **.89** | băng, liên kết H₂O, hơi nước, nước biển trên graph — màu chủ đạo cả tập |
| `DEEP_BLUE` | `(0.10, 0.32, 1.00)` | .90 | **.84** | vùng ngoài lạnh của đĩa, chiều sâu không gian |
| `BLUE_MID` | `(0.22, 0.48, 1.00)` | .78 | **.59** | lam trung gian khi cần nhạt hơn ICE_CYAN — giới hạn dùng |
| `D_MAGENTA` | `(1.00, 0.06, 0.42)` | .94 | **.93** | deuteri, phân tử "già hơn Mặt Trời" — màu đánh dấu quan trọng nhất |
| `D_VIOLET` | `(0.62, 0.10, 1.00)` | .90 | **.84** | biến thể của D khi cần phân biệt với magenta trên graph |
| `DUST_WARM` | `(1.00, 0.42, 0.12)` | .88 | **.80** | bụi vùng giữa đĩa, dải Ngân Hà |
| `DISK_HOT` | `(1.00, 0.30, 0.05)` | .95 | **.95** | vòng trong nóng của đĩa tiền hành tinh |
| `EMBER` | `(1.00, 0.18, 0.02)` | .98 | **.99** | magma, siêu tân tinh, vệt thiên thạch rơi |
| `GRAPH_AMBER` | `(1.00, 0.62, 0.04)` | .96 | **.96** | mốc sao chổi / 67P trên graph |
| `GRAPH_GREEN` | `(0.10, 1.00, 0.42)` | .90 | **.84** | mốc chondrite trên graph, nhựa cây |
| `COMET_TEAL` | `(0.04, 0.80, 0.72)` | .95 | **.96** | jet hơi nước từ 67P |
| `OCEAN_TEAL` | `(0.02, 0.46, 0.52)` | .96 | **.98** | đại dương Trái Đất |
| `ROOM_WARM` | `(1.00, 0.66, 0.30)` | .70 | **.46** | ánh đèn phòng chương 1 & 4 — chấp nhận được, đây là màu "gần trắng ấm" có chủ ý |
| `UV_BLUEWHITE` | `(0.30, 0.18, 1.00)` | .82 | **.67** | photon UV xé liên kết trong đĩa |
| `NEB_RED` | `(1.00, 0.10, 0.16)` | .90 | **.84** | dự phòng cho vùng phát xạ nếu cần |
| `CLOUD_INK` | `(0.02, 0.03, 0.07)` | .71 | **.86** | nền đám mây phân tử — giá trị cực thấp nhưng GIỮ ĐƯỢC sắc lam |
| `H_WHITE` | `(0.90, 0.94, 1.00)` | .10 | **.03** | hydro thường — cố ý gần trắng, KHÔNG phải lỗi |
| `ROCK_GREY` | `(0.34, 0.33, 0.32)` | .06 | **.02** | đá chondrite, bụi silicat — cố ý trung tính |

**CẤM DÙNG (đã đo, ra xám):**

| Màu | after | |
|---|---|---|
| `(0.55, 0.72, 1.00)` | **.20** | lam nhạt bệch — thay bằng `BLUE_MID (0.22,0.48,1.00)` = .59 |
| `(0.42, 0.60, 1.05)` | **.31** | lavender — thay bằng `D_VIOLET (0.62,0.10,1.00)` = .84 |
| `(1.00, 0.72, 0.38)` | **.35** | cam-kem cho vòng trong đĩa — thay bằng `DISK_HOT` = .95 rồi **tăng emissive** để ra cảm giác trắng nóng, đừng nâng kênh xanh lam |

⚠ Quy tắc chốt: nếu cần một màu mới, chạy `HFA.saturationAfterACES` TRƯỚC khi dùng. `after < 0.3`
thì bỏ, không "thử xem sao".

## 2. Bảng emissive — bloom HDR ngưỡng 1.0

| Loại phần tử | emissive | ghi chú |
|---|---|---|
| **Chữ số, nhãn, trục graph, sơ đồ** | **0.70–0.78** | ⚠ PHẢI DƯỚI 1.0. Bloom làm nhoè mất nét chữ. Muốn rõ hơn thì **tăng độ dày nét lên 4px**, KHÔNG tăng emissive |
| Lưới đo, khung ngắm, đường chú thích | 0.65–0.75 | dưới ngưỡng |
| Liên kết H₂O (trạng thái thường) | 0.85–0.95 | sát ngưỡng, chưa bloom |
| Liên kết H₂O (khoảnh khắc hình thành S25) | 1.4–1.5 trong 3 frame | cho bloom bung, rồi hạ về 0.9 |
| Nguyên tử O / H trên hạt bụi | 0.85–0.90 | |
| Phân tử deuteri đánh dấu | 0.90 | |
| Ngôi sao nền (starfield) | 0.60–0.80 | **không bloom** — sao nhỏ 1–2px, bloom sẽ biến chúng thành đốm to giả |
| Ngôi sao trẻ ở tâm đĩa | 1.8–2.2 | nguồn sáng thật, được phép bloom mạnh |
| Vòng trong đĩa nóng | 1.1–1.4 | bloom vừa |
| Magma / khe nứt hành tinh nóng chảy | 1.2 | chỉ ở khe nứt, không phải toàn bề mặt |
| Bề mặt 67P, chondrite, hạt bụi | 0.0 | **không phát sáng** — chỉ nhận ánh sáng |

## 3. Chống cháy trắng
- **Không shot nào để quá 12% diện tích khung có luminance >0.85 sau tonemap.**
- Các shot rủi ro cao và cách xử lý:
  - **S53** (cánh đồng băng Nam Cực): băng khoá ở luminance ~0.72, không lên trắng tinh. Viên đá
    đen là điểm neo tương phản.
  - **S57–S58** (đĩa tiền hành tinh, vùng trong nóng): giữ vùng nóng trong một vành hẹp; phần
    ngoài đĩa và nền chiếm ≥70% khung ở luminance <0.3.
  - **S80** (Mặt Trời bật sáng): cú tăng sáng lớn nhất tập — dùng vignette mạnh và giới hạn đĩa
    sáng dưới 12% khung.
  - **S69** (biển phân tử trong cốc): mật độ hạt cao dễ cộng dồn alpha thành trắng — clamp alpha
    tích luỹ, nền giữ dưới 0.5.
  - **S14** (ô mật độ không khí phòng): không để thành khối trắng; hạ về xám sáng ~0.6.

## 4. Giữ chi tiết trong vùng tối (rủi ro CHÍNH của tập này)
Tập này chủ yếu tối và lạnh, nên rủi ro thật không phải cháy trắng mà là **bẹt và tối thui,
không đọc ra gì**. Quy ước bắt buộc:
- **Dither 1/255** trên mọi vùng volume/gradient tối (đám mây phân tử, không gian sâu, nền graph).
  Không có dither thì dải 0.02–0.10 sẽ bị banding thành từng vành.
- **Tương phản cục bộ thay vì nâng exposure toàn cục.** Đám mây phân tử đọc được nhờ chênh lệch
  giữa các mảng đậm/nhạt sát nhau, không phải nhờ sáng hơn. Cấm "bật thêm đèn cho dễ nhìn" trong
  chương 2 — đám mây phân tử **không có nguồn sáng bên trong**.
- **Rim light lạnh cực yếu** (ICE_CYAN, cường độ 0.05–0.12) là kỹ thuật chính để tách silhouette
  vật thể tối khỏi nền tối: hạt bụi, 67P, chondrite, tiểu hành tinh.
- **Luôn có ít nhất một điểm neo sáng trong khung**, dù rất nhỏ (một nguyên tử, một ngôi sao nền,
  một cạnh bắt sáng). Khung hoàn toàn không có điểm neo chỉ được phép ở S09 và S84 — và đó là
  chủ ý.
- Nền đen của **graph phải là đen PHẲNG tuyệt đối** (không nebula, không sao) để chữ số đọc được.
- Kiểm tra bằng cách xem thumbnail thu nhỏ 15%: nếu shot thành một mảng đen đồng nhất thì hỏng.

## 5. Quy ước thiên văn bắt buộc
- **Đám mây phân tử KHÔNG có tâm sáng.** Chiếu sáng duy nhất là ánh sao nền từ rìa ngoài tán xạ
  vào, nên độ sáng GIẢM khi camera đi sâu vào trong. Vết tối trên dải Ngân Hà là vùng *thiếu sao*
  (extinction), không phải hình đen vẽ đè.
- **67P Churyumov-Gerasimenko theo ảnh Rosetta thật:** hai thuỳ KHÔNG đều nối bằng "cổ" (hình con
  vịt), dài ~4 km, albedo ~0,06 (đen hơn than), chu kỳ tự quay ~12,4 h. Jet hơi nước phun chủ yếu
  từ vùng cổ. Ở xa Mặt Trời thì **không có đuôi**.
- **Đĩa tiền hành tinh:** phải có **khe hở** do hành tinh non, và **phân tầng nhiệt** rõ (trong
  nóng trắng → giữa ấm → ngoài lạnh tối). Đĩa **flaring** (mỏng ở rìa, phồng ở vùng trong). Quay
  **vi phân Kepler** — vòng trong nhanh hơn vòng ngoài rõ rệt, không quay như đĩa cứng.
- **Trái Đất:** trục nghiêng **23,4°**, tự quay **ngược chiều kim đồng hồ nhìn từ cực Bắc**,
  texture NASA thật, terminator sắc nét.
- **Hệ Mặt Trời (S80):** mọi hành tinh quay cùng chiều (ngược kim đồng hồ nhìn từ cực Bắc hoàng
  đạo), quỹ đạo gần đồng phẳng, chu kỳ theo Kepler.
- **Phân tử H₂O:** góc HOH = **104,5°**. O lớn hơn H khoảng 1,4 lần bán kính vẽ. Không bao giờ vẽ
  thẳng hàng hay 120°.
- **Electron:** vẽ là đám mây xác suất mờ, **không** dùng mô hình quỹ đạo hành tinh kiểu Bohr.
- **Tỉ lệ hạt bụi:** 0,1 µm. Hạt khói ~1 µm (×10). Sợi tóc ~70 µm (×700) → chỉ thấy một cung
  cong chiếm hết mép khung.
- **D/H phải đúng số:** mức nền vũ trụ ≈ 1/40 000 (0,25×10⁻⁴); nước biển Trái Đất ≈ 1,56×10⁻⁴
  (1/6 400); 67P = (5,3±0,7)×10⁻⁴ ≈ **×3** nước biển; chondrite cacbon ≈ 1,4–1,8×10⁻⁴ (trùm lên
  vạch nước biển). Mọi graph dùng **trục log** — chênh lệch hàng trăm lần không vẽ nổi tuyến tính.
- **Thanh sai số là bắt buộc** trên mọi mốc đo (S48, S50, S54). Đây là khoa học thật, không phải
  minh hoạ.

## 6. Motif lặp lại — dùng có chủ ý, tránh dùng thừa
Các cặp shot dưới đây **phải dựng cùng khung hình, cùng tiêu cự** để hiệu ứng khép vòng hoạt động:
- **S02 ↔ S68 ↔ S82** — căn phòng, cốc nước trên bàn.
- **S06 ↔ S72 ↔ S84** — phân tử H₂O đơn lẻ trên nền đen.
- **S26 ↔ S30 ↔ S79** — phân tử nước trên bề mặt hạt bụi (khép vòng quan trọng nhất).
- **S07 ↔ S58** — liên kết hình thành ↔ liên kết bị UV xé đứt (đảo ngược có chủ ý).
- **S77 ↔ S81** — giọt nước trên mu bàn tay.

**Tránh lặp:** không dùng lại cú "pull-back từ vi mô ra vũ trụ" quá 3 lần trong tập (đã dùng ở
S28, S65, S80 — đủ). Không dùng lens flare ở bất kỳ đâu. Không dùng starfield làm nền mặc định
cho graph hay sơ đồ.

## 7. Tất định
Mọi chuyển động là **hàm thuần của `t`**. Không `requestAnimationFrame`, `Date.now`,
`performance.now`, `setTimeout`, `Math.random`. Cần ngẫu nhiên (quỹ đạo hopping của H ở S23, chuyển
động Brown ở S18/S38/S69, phân bố hạt bụi ở S28) → **seeded PRNG mulberry32**. Không tích luỹ
`+= dt` cho lớp băng dày lên ở S27 hay bất kỳ đâu.
