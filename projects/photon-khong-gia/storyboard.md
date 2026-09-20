# STORYBOARD — PHOTON, THỨ KHÔNG BAO GIỜ GIÀ
`slug: photon-khong-gia`

## METADATA
- **Tổng thời lượng dự kiến:** ~18:40 (1120s) — con số CHUẨN lấy từ `timing.json`, mọi timecode ở đây chỉ là ý đồ nhịp.
- **Số shot:** 88 (S01–S88) · **Số cue phủ:** 111 (C01–C111), không cue nào bị bỏ, không chồng lấn.
  Trung bình ~12,7s/shot. Nếu cần giảm về 60–65 shot, gộp theo danh sách ở GHI CHÚ DỰNG HÌNH mục 6.
- **Chương:** 4 — CHƯƠNG 1 @C01, CHƯƠNG 2 @C19, CHƯƠNG 3 @C49, CHƯƠNG 4 @C85.
- **Loại visual theo chương:**
  - CH1 (C01–C18): macro sinh học + particle — mống mắt/võng mạc, mưa photon đâm-và-dừng, đồng hồ đếm về 0.
  - CH2 (C19–C48): astro-realistic + particle + graph — lõi Mặt Trời, random walk plasma, granulation photosphere, thang so sánh 170.000 năm vs 8'20".
  - CH3 (C49–C84): graph/diagram + astro-realistic + procedural — sơ đồ thời-không, nón ánh sáng, bầu trời đêm ghép nhiều thời đại, bản đồ CMB.
  - CH4 (C85–C111): trở lại macro sinh học + astro-realistic, vòng tròn đóng lại ở con ngươi.
- **Nhạc nền:** một track chung `assets/bgm.mp3` cho cả tập (duck dưới narration). SFX riêng chỉ ghi khi shot cần.
- **Phong cách:** tối, bão hoà cao, độ sáng vừa. Không lens flare hoạt hình, không billboard phẳng. Chuyển động là hàm thuần của `t`. Mỗi shot có ÍT NHẤT một chuyển động camera hoặc một biến đổi element — không có khung hình chết.
- **Thư viện:** `assets/lib/hf-astro.js` (HFA) — stage, bloom HDR, starfield, accumulation, subtitle/chapter helper. Phụ đề sinh bằng `scripts/gen-captions.mjs` từ `voice/*.srt`, KHÔNG viết tay.

---

# CHƯƠNG 1 — MỘT THỨ ĐANG ĐẬP VÀO MẮT TÔI

## S01 · C01 · CHƯƠNG 1
SCENE   Đen gần tuyệt đối. Chỉ một mảng tối có kết cấu — mí mắt nhìn từ trong, mao mạch mờ đỏ rất nhạt
CAMERA  tĩnh tuyệt đối, 85mm, khung hơi lệch tâm; một drift 2% gần như không thấy
ELEMENT nền đen #000 thật (không xám); một vệt FBM đỏ sẫm emissive 0.18 lan rất chậm ở góc dưới-phải,
        biên độ hô hấp chu kỳ 4.5s theo sin(t) — đây là nhịp thở, phải đọc được; KHÔNG bloom (dưới 1.0)
CUT     giữ tối đến hết cue, không cắt

## S02 · C02 · CHƯƠNG 1
SCENE   Mở mắt — mí mắt hé, ánh sáng tràn vào thành một khe ngang rồi mở tròn thành mống mắt
CAMERA  tĩnh, sau đó rack focus rất nhanh từ mờ sang nét khi mí mở hết
ELEMENT khe sáng mở theo ease-out 0.9s: chiều cao khe = smoothstep; mống mắt nâu-hổ phách với sợi cơ
        tia hướng tâm (procedural, 220 sợi, seeded); đồng tử co từ 7mm → 3mm trong 1.2s sau khi mở;
        vành sáng quanh đồng tử emissive 0.9 (DƯỚI ngưỡng, không được loé ở đây)
SFX     một tiếng "vụt" hơi thở nhẹ khi mí mở
CUT     hard cut sang S03 đúng lúc đồng tử co xong

## S03 · C03 · CHƯƠNG 1
SCENE   Mưa photon — hàng vạn hạt sáng lao thẳng vào mặt phẳng camera và TẮT khi chạm
CAMERA  tĩnh, đặt ngay tại vị trí mắt; hạt bay thẳng về ống kính (z âm → 0)
ELEMENT 40.000 particle, seeded mulberry32, tốc độ đồng nhất (mọi photon cùng tốc độ — quy ước xuyên tập);
        mỗi hạt sống theo hàm thuần của t: tồn tại → chạm mặt phẳng z=0 → biến mất TỨC THÌ trong 1 frame,
        KHÔNG fade, KHÔNG bật lại; mật độ va chạm tăng đột ngột tại cue; hạt trắng-vàng ấm
        (1.00, 0.86, 0.62) × emissive 1.6 nhưng bán kính chỉ 1.2px để tổng sáng khung hình ở mức an toàn
SFX     một tiếng "tách" đơn, khô, ở chính giữa stereo
CUT     giữ nguyên bố cục sang S04

## S04 · C04 · CHƯƠNG 1
SCENE   Cùng mưa photon, nhưng chậm lại 20 lần — theo một hạt duy nhất chạm màng tế bào và biến mất
CAMERA  slow-mo, dolly-in theo một hạt được chọn, 35mm → 100mm, kết ở cực cận bề mặt ẩm
ELEMENT hạt chủ thể sáng emissive 2.4 (điểm loé duy nhất trong khung); bề mặt võng mạc ướt, bóng,
        có mao mạch; khi hạt chạm: KHÔNG có mảnh vỡ, KHÔNG có tia bắn — chỉ một xung điện lam nhạt
        (0.18, 0.44, 1.00) chạy dọc một sợi thần kinh về phía sau khung, tốc độ 1/3 tốc độ photon
CUT     chớp trắng rất ngắn (2 frame, cường độ 0.35) sang S05

## S05 · C05 · CHƯƠNG 1
SCENE   Card định danh — một photon đơn lơ lửng giữa nền đen, đặt tên
CAMERA  tĩnh, hạt ở 1/3 trái khung; nền đen tuyệt đối
ELEMENT một điểm sáng duy nhất, emissive 3.0, bán kính 2px, bloom mạnh — đây là shot DUY NHẤT trong
        chương 1 được phép loé hết cỡ vì diện tích sáng cực nhỏ; quầng nhiễu xạ 6 tia (không phải 4),
        biên độ tia dao động nhẹ theo sin(3t) để không chết cứng
CUT     giữ tối sang S06

## S06 · C06 · CHƯƠNG 1 · CAO TRÀO HÌNH
SCENE   Bác bỏ hình ảnh cũ — một hạt "ma" xuyên qua bàn tay rồi đi tiếp, sau đó hình đó bị GẠCH BỎ
CAMERA  side-view phẳng, 50mm, tĩnh; bố cục biểu đồ, không phải cảnh thực
ELEMENT silhouette bàn tay/thân người viền lam mờ; một hạt lam-xanh (0.10, 0.62, 0.70) bay xuyên qua
        và ra phía bên kia — quỹ đạo không đổi hướng; sau 1.2s toàn bộ hình chuyển sang xám
        desaturate 85% và một nét gạch chéo đỏ trầm (0.70, 0.08, 0.10, emissive 0.8) quét qua
CUT     hard cut đối lập sang S07 — hai shot phải trông KHÁC HẲN nhau

## S07 · C07 · CHƯƠNG 1 · CAO TRÀO HÌNH
SCENE   Cú lật thật — photon vượt nửa vũ trụ rồi ĐÂM vào người và DỪNG LẠI ở đó
CAMERA  bắt đầu cực rộng (vệt sáng đi ngang cả khung từ chiều sâu vũ trụ), rồi lao nhanh
        theo hạt về phía silhouette; kết ở cận cảnh điểm va chạm, camera dừng khựng cùng lúc hạt dừng
ELEMENT một vệt photon duy nhất, trail dài, bay qua trường sao (HFA.buildStars, mật độ thấp);
        cùng silhouette người ở S06 nhưng nay viền ấm; TẠI ĐIỂM VA CHẠM: hạt dừng lại và Ở LẠI —
        một chấm sáng tĩnh nằm trên da, giữ suốt phần còn lại của cue, KHÔNG tan; toàn bộ chuyển động
        khác trong khung đóng băng 0.6s để nhấn "điểm cuối"
SFX     tiếng va trầm, ngắn, rồi tắt hẳn vào im lặng
CUT     giữ chấm sáng tĩnh, camera lùi ra sang S08

## S08 · C08 · CHƯƠNG 1 · CAO TRÀO HÌNH
SCENE   Nhìn là hành động bạo lực — bề mặt khuôn mặt phủ kín những điểm dừng lại của photon
CAMERA  pull-back chậm từ chấm sáng ở S07 ra tới toàn khuôn mặt nghiêng trong tối
ELEMENT mỗi photon chạm để lại một chấm sáng tĩnh; mật độ chấm tăng theo t đến hàng chục nghìn,
        phủ dần thành lớp phát sáng ấm trên da; TỔNG độ sáng khung phải giữ dưới ngưỡng cháy:
        từng chấm emissive 0.85 (DƯỚI 1.0, không loé), chỉ có vài chục chấm ngẫu nhiên (seeded)
        được đẩy lên 1.4 để có lấp lánh; da giữ tông trầm, không lên trắng
CUT     hoà tan chậm sang S09 (gap 2.0s ở đây — để hình thở)

## S09 · C09–C10 · CHƯƠNG 1
SCENE   Đảo hướng kể — một photon tĩnh, và một đồng hồ bắt đầu hiện ra bên cạnh nó
CAMERA  tĩnh, hai chủ thể cân đối trái/phải, 50mm
ELEMENT photon điểm sáng bên trái; bên phải một mặt đồng hồ dạng vòng cung mảnh, nét lam nhạt
        (0.14, 0.40, 0.95) emissive 0.7, kim KHÔNG quay — đứng im tuyệt đối dù mọi thứ khác động;
        quanh đồng hồ, các vòng đếm khác (năm, thế kỷ) vẫn quay để tương phản
CUT     cắt sang S10

## S10 · C11 · CHƯƠNG 1
SCENE   Thang thời gian 13 tỉ năm — vệt sáng bay qua một dải lịch sử vũ trụ nén lại
CAMERA  truck ngang (trái → phải) dài, tốc độ đều, 35mm
ELEMENT dải ngang chia mốc: hình thành thiên hà sớm → Mặt Trời ra đời (mốc ghi 4.6 tỉ, đặt ở 2/3 chặng
        để thấy rõ 13 tỉ GẤP BA) → Trái Đất → hiện tại; photon bay dọc dải, trail liên tục không đứt;
        thiên hà nền dựng thật bằng point-cloud xoắn 2 nhánh, KHÔNG dùng sprite phẳng
CUT     camera dừng ở mốc "hiện tại" = con mắt, cắt sang S11

## S11 · C12 · CHƯƠNG 1
SCENE   Con số 0 — ba dòng phủ định, kết ở một chữ số duy nhất
CAMERA  tĩnh, dead center; zoom-in cực chậm 3%
ELEMENT typo lớn, nét mảnh, trắng ngà (0.95, 0.93, 0.88) emissive 0.9 — chữ KHÔNG được loé bloom
        (chữ loé sẽ nhoè mất nét); ba dòng "không phải rất ngắn / không phải gần bằng không / bằng không"
        xuất hiện tuần tự, hai dòng đầu mờ đi còn 20% khi dòng ba lên; số 0 cuối cùng là một vòng tròn
        hoàn hảo, nét đều
CUT     hard cut sang S12

## S12 · C13 · CHƯƠNG 1
SCENE   Phép tính — công thức khoảng thời-không hiện lên như dòng viết tay trên nền đen
CAMERA  tĩnh, hơi nghiêng 2° cho có hơi người, 50mm
ELEMENT dòng công thức ds² = c²dt² − dx² vẽ bằng stroke dần theo t (hàm thuần của t, không tích luỹ);
        khi vế phải triệt tiêu, hai số hạng trượt vào nhau và tắt, để lại "= 0"; màu phấn lam nhạt
        emissive 0.6 trên nền đen
CUT     hoà tan sang bầu trời đêm ở S13

## S13 · C14–C15 · CHƯƠNG 1
SCENE   Ánh sáng-như-cái-đèn bị lật thành ánh sáng-như-vật-thể-có-tiểu-sử
CAMERA  bắt đầu nhìn một căn phòng có bóng đèn (mọi đồ vật rõ, đèn là phông nền), rồi camera
        quay 180° bỏ mặc đồ vật, đi tới đúng sợi tóc bóng đèn
ELEMENT đồ vật trong phòng giảm dần sáng về silhouette khi camera quay; sợi tóc vonfram nóng phát sáng
        theo nhiệt (cam-đỏ 0.9 ở đầu sợi → trắng-vàng ở giữa), emissive đỉnh 2.2 chỉ trên vùng sợi mảnh;
        bụi trong không khí bắt sáng thành volumetric nhẹ
CUT     cắt sang S14

## S14 · C16 · CHƯƠNG 1
SCENE   Chọn một hạt — biển photon trên bề mặt sao, camera khoá vào đúng một hạt
CAMERA  từ rộng, snap-zoom nhanh (một nhịp) vào một hạt, rồi giữ nó tại tâm khung
ELEMENT hàng nghìn hạt lấp lánh trên nền plasma cam; khi khoá, các hạt khác blur và giảm sáng 70%,
        hạt chủ thể giữ nét, emissive 2.0; một vòng tròn khoá mảnh (không HUD sci-fi, chỉ nét tròn mờ)
CUT     giữ hạt chủ thể xuyên suốt sang S15 — đây là "hạt của chúng ta", tái xuất ở C41, C105

## S15 · C17–C18 · CHƯƠNG 1
SCENE   Nơi sinh ra là chỗ tệ nhất — camera lao ngược từ hạt vào chiều sâu Mặt Trời
CAMERA  dolly-in dài, xuyên qua photosphere → vùng đối lưu → vùng bức xạ; tốc độ tăng dần
ELEMENT Mặt Trời cắt lớp: photosphere granulation (ô hạt Bénard, biên tối, tâm sáng, chu kỳ trôi chậm),
        vùng đối lưu với cột trồi/sụt, vùng bức xạ đặc dần và tối hơn nghịch lý (đặc = ánh sáng
        không thoát được = nhìn vào thấy TỐI hơn); màu chuyển cam-đỏ bão hoà (1.00, 0.34, 0.06)
        ở ngoài → đỏ sẫm bên trong, KHÔNG lên trắng cho tới khi vào lõi
CUT     tối dần vào lõi, hoà tan sang S16 — vào CHƯƠNG 2

---

# CHƯƠNG 2 — 170.000 NĂM ĐỂ ĐI 700.000 CÂY SỐ

## S16 · C19 · CHƯƠNG 2
SCENE   Tâm Mặt Trời — khối plasma đặc quánh, nén, rung
CAMERA  gần như tĩnh, rung tần số thấp biên độ nhỏ (áp suất); 85mm, độ sâu trường cực mỏng
ELEMENT plasma thể tích, hạt nhân và electron dày đặc chuyển động nhiệt nhanh nhưng KHÔNG đi xa
        (dao động quanh vị trí); màu trắng-lam cực nóng nhưng giữ độ sáng vừa: (0.55, 0.72, 1.00)
        emissive 1.3 — tránh cháy trắng bằng cách giảm exposure stage 15% cho toàn chương này;
        overlay số liệu mảnh: 15.000.000 °C, 250 tỉ atm — chữ emissive 0.6
CUT     giữ, cắt sang S17

## S17 · C20 · CHƯƠNG 2
SCENE   Nguyên tử bị xé — một nguyên tử hydro nguyên vẹn bị tước electron
CAMERA  cực cận macro, tĩnh, rồi pull-back thấy đây chỉ là một trong hàng tỉ
ELEMENT một hạt nhân + một electron ràng buộc; nhiệt độ tăng (thể hiện bằng biên độ rung tăng),
        electron bứt ra theo quỹ đạo mở; pull-back: hàng nghìn cặp cùng bứt, tạo biển plasma;
        hạt nhân điểm ấm (1.00, 0.55, 0.20) emissive 1.2, electron điểm lam (0.14, 0.48, 1.00)
        emissive 1.1 — đủ để loé nhẹ mà không nhoè
CUT     cắt sang S18

## S18 · C21 · CHƯƠNG 2
SCENE   Không phải lửa — đối chiếu ngọn lửa thường với khối plasma nghẹt cứng
CAMERA  split đôi khung theo chiều dọc, không chuyển động; sau đó nửa "lửa" tắt, nửa plasma tràn kín
ELEMENT trái: ngọn lửa đối lưu có hình dáng, có khói, có hướng lên (có trọng lực);
        phải: plasma KHÔNG có hướng, không có hình dáng, đồng đều đến ngột ngạt, đặc hơn chì
        (thể hiện bằng mật độ hạt che khuất hoàn toàn phía sau ở độ dày 1cm);
        khi nửa trái tắt, plasma tràn sang với ease chậm, nặng
CUT     cắt sang S19

## S19 · C22 · CHƯƠNG 2
SCENE   Ra đời — hai hạt nhân hydro hợp nhất, một photon sinh ra
CAMERA  cực cận, tĩnh; nhích nhẹ lùi ở khoảnh khắc sinh
ELEMENT hai proton lao vào nhau, hợp nhất; sản phẩm phụ (positron, neutrino) bay ra hai hướng —
        neutrino vẽ mảnh và đi thẳng không cản (nhắc tập cũ, chỉ 3 frame); photon sinh ra tại tâm,
        emissive 2.6 trong 4 frame rồi hạ về 1.6 (đây là điểm loé được phép, diện tích nhỏ);
        vòng sóng áp suất lan ra 1 lần rồi tắt
SFX     tiếng nổ nhỏ, khô, dead-center
CUT     khoá camera vào photon mới sinh, sang S20

## S20 · C23 · CHƯƠNG 2
SCENE   Tốc độ duy nhất — photon lao đi, đồng hồ tốc độ chỉ một vạch duy nhất
CAMERA  tracking ngang theo photon, tốc độ khớp tuyệt đối
ELEMENT photon + trail ngắn; bên dưới một thang tốc độ nằm ngang có ĐÚNG MỘT vạch tại 300.000 km/s,
        không có vạch 0, không có vạch trung gian — thang trống trơn ngoài vạch đó;
        nét thang emissive 0.6, photon emissive 1.8
CUT     hard cut đột ngột (va chạm) sang S21

## S21 · C24 · CHƯƠNG 2
SCENE   Va chạm đầu tiên — sau 1/1000 cm, photon đâm vào một electron
CAMERA  tĩnh, khung rộng vừa; camera giật nhẹ 1 frame lúc va
ELEMENT thước tỉ lệ mảnh hiện quãng đường tự do (mean free path) cực ngắn so với khung;
        electron hiện ra đột ngột từ trong bóng tối plasma; tại va chạm photon TẮT (bị hấp thụ),
        electron sáng lên gấp đôi trong 3 frame
SFX     "tách"
CUT     cắt sang S22

## S22 · C25–C26 · CHƯƠNG 2 · PARTICLE
SCENE   Hấp thụ rồi tái phát theo hướng hoàn toàn ngẫu nhiên — lặp, lặp, lặp
CAMERA  tĩnh giữ khung, nhưng mỗi va chạm zoom-out 3% để dồn nhiều va chạm hơn vào khung
ELEMENT random walk hiển thị nguyên vẹn: mỗi đoạn thẳng đi đúng tốc độ ánh sáng, hướng mới
        rút từ phân bố cầu đều bằng mulberry32 (seed cố định); vẽ ĐƯỜNG ĐI tích luỹ dạng
        polyline sáng mảnh (emissive 0.9) để thấy nó rối như len; số đếm va chạm chạy ở góc
CUT     tăng tốc liên tục sang S23 (không cắt, cùng một walk)

## S23 · C27 · CHƯƠNG 2 · PARTICLE
SCENE   Không bay, mà bị nhồi — hàng nghìn photon cùng random walk, thành một khối rối
CAMERA  pull-back tăng tốc, từ một walk ra hàng nghìn walk chồng lên nhau
ELEMENT 3000 walker seeded, mỗi cái đã đi hàng nghìn bước; tập hợp tạo một quả cầu len sáng đặc,
        rìa tua tủa; QUAN TRỌNG: bán kính tổng của đám tăng theo √N bước, KHÔNG tuyến tính —
        phải nhìn thấy nó nở rất chậm dần; đường đi emissive 0.55 mỗi sợi (dày đặc nên tổng
        đã đủ sáng, giữ dưới 1.0 để không thành một cục trắng)
SFX     tiếng va đập dày thành ồn trắng
CUT     cắt sang S24

## S24 · C28 · CHƯƠNG 2
SCENE   Người thừa kế — chuỗi hạt, mỗi lần va lại là một hạt KHÁC mang cùng năng lượng
CAMERA  truck ngang chậm dọc chuỗi, 50mm
ELEMENT chuỗi 12 photon nối tiếp, mỗi photon một sắc độ hơi khác (đỏ → cam → vàng nhạt) để thấy
        "không còn là hạt cũ"; giữa hai hạt là một nguyên tử nuốt-rồi-nhả; một dải năng lượng
        liên tục (nét mảnh, màu không đổi, emissive 0.8) chạy xuyên cả chuỗi — thứ DUY NHẤT
        không đổi trong khung
CUT     cắt sang S25

## S25 · C29 · CHƯƠNG 2
SCENE   Năng lượng ngấm dần ra ngoài — cắt lớp Mặt Trời nhìn từ ngoài, nhiệt lan chậm
CAMERA  tĩnh, toàn cảnh mặt cắt cầu; zoom-out rất chậm
ELEMENT mặt cắt Mặt Trời hình tròn, thang màu theo nhiệt: lõi (1.00, 0.88, 0.70) → vùng bức xạ
        cam đậm (1.00, 0.42, 0.10) → đối lưu đỏ (0.85, 0.20, 0.05) → photosphere vàng ấm;
        một front năng lượng lan từ tâm ra rìa với tốc độ CỰC chậm (đi được 6% bán kính trong cả shot);
        toàn bộ emissive ≤ 0.95 trừ lõi 1.25
CUT     cắt sang S26

## S26 · C30 · CHƯƠNG 2 · GRAPH
SCENE   Bước đi của người say — một cột đèn, một người, một vệt đi cả đêm quẩn quanh
CAMERA  top-down phẳng, tĩnh; cuối shot tilt lên 20° để nối sang thang toán học
ELEMENT nền tối, một cột đèn phát quầng vàng ấm (emissive 1.1, quầng volumetric nhỏ); vệt đi vẽ dần
        theo t, cùng seed như S22 (cùng một random walk, khác chủ thể — đây là điểm nối trực quan);
        một vòng tròn mảnh bán kính "vài mét" bao trọn toàn bộ vệt, hiện ở cuối shot
CUT     cắt sang S27

## S27 · C31–C32 · CHƯƠNG 2 · GRAPH
SCENE   Quy luật √N — muốn xa gấp 10 phải đi gấp 100
CAMERA  tĩnh, khung biểu đồ; camera chỉ pan nhẹ theo cột tăng
ELEMENT hai trục: "khoảng cách tiến được" vs "quãng đường đã đi"; ba cặp cột so sánh 1×/1×,
        10×/100×, 1000×/1.000.000× — cột thứ ba phải tràn RA NGOÀI khung trên để thấy sự vô lý;
        đường cong √ vẽ chồng; sau đó dòng "nỗ lực không cộng lại — nó bị chia cho sự lộn xộn"
        làm cột vỡ thành hạt bay tán loạn; nét biểu đồ lam bão hoà (0.10, 0.36, 1.00) emissive 0.75
CUT     cắt sang S28

## S28 · C33 · CHƯƠNG 2 · GRAPH
SCENE   Đường thẳng lý tưởng — 700.000 km, 2,5 giây
CAMERA  tĩnh, mặt cắt Mặt Trời như S25 nhưng phẳng hoá thành sơ đồ
ELEMENT một tia thẳng duy nhất từ tâm ra rìa, vẽ trong 2,5s thời gian thực (đúng tỉ lệ, cho khán giả
        cảm nhận sự ngắn); đồng hồ nhỏ đếm 0.0 → 2.5; tia trắng ấm emissive 1.4, mảnh
CUT     màn hình tối đen đột ngột 0.5s (gap 1.5s), sang S29 — cú lật của chương

## S29 · C34 · CHƯƠNG 2 · CAO TRÀO HÌNH
SCENE   Con số thật — 170.000 năm, hiện ra trong tối
CAMERA  tĩnh tuyệt đối, dead center, không zoom
ELEMENT chỉ chữ số trên nền đen: "170.000 NĂM"; chữ trắng ngà emissive 0.85 (không loé, giữ nét sắc);
        đằng sau chữ, cùng random walk ở S23 tiếp tục chạy ở độ sáng 8% — gần như không thấy,
        nhưng khán giả cảm được có gì đó đang vật lộn phía sau
SFX     một nốt trầm rất nặng
CUT     giữ chữ, các element ở S30 mọc lên quanh nó

## S30 · C35 · CHƯƠNG 2 · GRAPH · CAO TRÀO HÌNH
SCENE   Thang so sánh đọc được trong 3 giây — 170.000 năm vs 8 phút 20 giây
CAMERA  tĩnh, khung ngang chia hai tầng; pan phải rất chậm để lộ đuôi thanh dài
ELEMENT TẦNG TRÊN "trong Mặt Trời: 700.000 km": một thanh thời gian dài đến mức phải scroll,
        đi mãi không hết khung, gắn nhãn 170.000 năm;
        TẦNG DƯỚI "Mặt Trời → Trái Đất: 150.000.000 km": một vạch NGẮN như đầu kim, gắn nhãn 8'20";
        tỉ lệ độ dài phải đúng bậc (≈10^10 : 1 → biểu diễn bằng thanh trên dài 1200% khung + nhãn
        "×10.000.000.000", KHÔNG bịa tỉ lệ đẹp mắt);
        song song: quãng đường THẬT photon đã đi (random walk) vẽ thành sợi rối dài hơn cả dải Ngân Hà —
        một Ngân Hà point-cloud thu nhỏ đặt cạnh để so; màu: thanh dài cam (1.00, 0.40, 0.08),
        vạch ngắn lam (0.10, 0.34, 1.00), cả hai emissive 0.8 — dựa vào tương phản màu, không dựa vào sáng
CUT     giữ thang ở góc khung, hoà tan phần còn lại sang S31

## S31 · C36 · CHƯƠNG 2
SCENE   170.000 năm trước — savanna châu Phi, tổ tiên dưới bầu trời
CAMERA  tĩnh, khung rộng, silhouette; drift rất chậm
ELEMENT chân trời savanna đen, vài silhouette người đứng nhìn lên; bầu trời sao dựng thật (HFA.buildStars);
        KHÔNG có nông nghiệp, không nhà cửa, không lửa trại lớn — chỉ đất trống; tông lam đêm bão hoà
        (0.06, 0.14, 0.34) làm nền, silhouette đen tuyệt đối
CUT     match-cut từ bầu trời savanna sang mu bàn tay hiện đại dưới nắng — S32

## S32 · C37 · CHƯƠNG 2
SCENE   Nắng trên mu bàn tay hôm nay — mang năng lượng từ trước khi loài người rời châu Phi
CAMERA  cực cận macro, tĩnh; ánh nắng chéo 40°
ELEMENT da người macro: lỗ chân lông, lông tơ bắt sáng viền, mạch máu hồng dưới lớp da (SSS nhẹ);
        hạt bụi trôi trong chùm nắng; một vài photon-trail rất mảnh đáp xuống da rồi tắt;
        vùng sáng trên da giữ emissive 0.9 — KHÔNG cho cháy, vì đây là shot ấm áp chứ không chói
CUT     cắt sang S33

## S33 · C38 · CHƯƠNG 2
SCENE   Nếu lõi tắt ngóm — lõi tối đi nhưng bề mặt vẫn sáng
CAMERA  mặt cắt Mặt Trời, tĩnh; split-time: đồng hồ thế hệ chạy ở góc
ELEMENT tại cue, lõi chuyển từ sáng sang đen trong 0.4s; vùng bức xạ và photosphere KHÔNG đổi —
        vẫn sáng đều; một mặt sóng tối lan ra cực chậm từ lõi, đi được ~4% bán kính suốt shot;
        đồng hồ phụ đếm qua "hàng chục nghìn năm" bằng các thế hệ người xuất hiện rồi biến mất
CUT     hoà tan sang S34

## S34 · C39 · CHƯƠNG 2
SCENE   Plasma loãng ra — mật độ giảm, quãng đường tự do dài ra
CAMERA  dolly-out từ chiều sâu ra phía bề mặt, tốc độ tăng dần (cảm giác nổi lên mặt nước)
ELEMENT mật độ hạt giảm theo hàm mũ của bán kính; đường đi của photon từ zig-zag dày thành đoạn
        dài dần, rõ ràng đọc được; ồn trắng loãng dần; màu chuyển đỏ sẫm → cam → vàng ấm
CUT     nối liền sang S35

## S35 · C40 · CHƯƠNG 2 · ASTRO-REALISTIC
SCENE   Photosphere — granulation, "bề mặt" không phải bề mặt
CAMERA  từ dưới lớp nhìn lên, xuyên qua, rồi lật thành nhìn từ ngoài vào toàn bộ đĩa Mặt Trời
ELEMENT granulation thật: ô đối lưu đường kính ~1000 km, tâm sáng (khí nóng trồi), biên tối
        (khí nguội chìm), vòng đời ô ~8 phút — cho ô sinh/tan trong shot; vài vết đen (umbra/penumbra)
        và một protuberance rìa; QUAN TRỌNG: thể hiện đây là một ĐỘ SÂU quang học, không phải mặt cứng —
        rìa đĩa tối đi (limb darkening) phải có; màu (1.00, 0.72, 0.36) emissive 1.15, rìa 0.75
CUT     cắt sang S36

## S36 · C41 · CHƯƠNG 2
SCENE   "Và nó ra" — hạt chủ thể ở S14 thoát khỏi lớp cuối cùng
CAMERA  tracking sát hạt, xuyên qua lớp photosphere ra chân không; camera chững lại khi ra ngoài
ELEMENT hạt chủ thể emissive 2.2; lớp plasma cuối cùng tuột lại phía sau; ngay khi ra ngoài,
        mọi nhiễu động dừng — hạt đi thẳng tuyệt đối, trail thành một đường KHÔNG cong một pixel nào
SFX     tiếng ồn trắng cắt phăng thành im lặng tuyệt đối (điểm nhấn audio của chương)
CUT     hard cut sang S37

## S37 · C42 · CHƯƠNG 2
SCENE   Chân không — không có gì đánh dấu khoảnh khắc đó
CAMERA  tĩnh tuyệt đối, khung rộng, Mặt Trời nhỏ phía sau bên trái
ELEMENT hạt đi thẳng, đều, không đổi; nền sao thưa; KHÔNG có hiệu ứng ăn mừng, không flash, không sóng —
        cố tình phản cao trào; Mặt Trời phía sau chỉ là một đĩa nhỏ emissive 1.6, bán kính nhỏ
CUT     cắt sang S38

## S38 · C43–C44 · CHƯƠNG 2 · GRAPH
SCENE   150 triệu km trống rỗng — và 8 phút 20 giây
CAMERA  truck ngang rất dài từ Mặt Trời tới Trái Đất, tốc độ đều tuyệt đối
ELEMENT khoảng trống thật: tuyệt đối không có gì giữa hai đầu ngoài vài hạt gió mặt trời rất thưa;
        Trái Đất dựng bằng texture NASA `assets/tex/2_no_clouds_4k.jpg` + `elev_bump_4k.jpg` +
        `earthcloudmap.jpg`, trục nghiêng 23.4°, tự quay ngược chiều kim đồng hồ nhìn từ cực Bắc;
        đồng hồ đếm 0:00 → 8:20 ở góc dưới; Mặt Trời thu nhỏ dần phía sau đúng luật phối cảnh
CUT     cắt sang S39

## S39 · C45–C46 · CHƯƠNG 2 · GRAPH
SCENE   Phân bổ thời gian đời photon — một thanh duy nhất chia theo tỉ lệ thật
CAMERA  tĩnh, thanh nằm ngang chiếm 80% khung; zoom-in vào đuôi thanh ở cuối shot
ELEMENT một thanh biểu diễn 100% đời photon: 99,99999...% là "kẹt trong Mặt Trời" (cam), phần
        "băng qua không gian" là một vạch mảnh ở cuối, mảnh tới mức phải zoom 1000× mới thấy (lam);
        thực hiện zoom đó trong shot — camera phóng vào đuôi thanh và vạch lam mới hiện ra;
        nhãn: 170.000 năm / 8 phút 20 giây
CUT     hoà tan sang S40

## S40 · C47–C48 · CHƯƠNG 2
SCENE   "Đó là đồng hồ của TÔI" — người quan sát trên Trái Đất với đồng hồ, photon không có đồng hồ
CAMERA  tĩnh, hai chủ thể; cuối shot đồng hồ phía photon tan biến thành hư không
ELEMENT trái: silhouette người + một đồng hồ chạy bình thường (kim giây nhích đều, emissive 0.7);
        phải: photon + một đồng hồ mờ dần rồi KHÔNG tan thành "0" mà tan thành KHÔNG CÓ GÌ
        (chỗ đó trống hẳn — ghi chú quan trọng: đừng vẽ "đồng hồ chỉ 0", vì chương 3 sẽ bác bỏ
        cả ý "photon có đồng hồ")
CUT     tối hoàn toàn (gap 2.0s), sang CHƯƠNG 3

---

# CHƯƠNG 3 — KHOẢNG CÁCH BẰNG KHÔNG

## S41 · C49 · CHƯƠNG 3
SCENE   Thứ photon thiếu — đặt một photon lên cân, cân không nhúc nhích
CAMERA  tĩnh, cận cảnh một cân đĩa mảnh trên nền đen
ELEMENT cân hai đĩa; đĩa trái đặt lần lượt: hạt bụi (đĩa lệch), electron (lệch rất nhẹ), proton (lệch);
        rồi photon — đĩa KHÔNG nhúc nhích một pixel; nét cân trắng mảnh emissive 0.5,
        photon emissive 1.9
CUT     cắt sang S42

## S42 · C50 · CHƯƠNG 3 · GRAPH
SCENE   Vật có khối lượng thì có quyền chọn — thang tốc độ với đường năng lượng dốc lên vô hạn
CAMERA  tĩnh biểu đồ; pan phải theo đường cong khi nó dốc đứng
ELEMENT trục ngang: tốc độ từ 0 → c (c là đường tiệm cận ĐỨT NÉT, không chạm được); trục dọc: năng lượng;
        đường γ dốc lên vô hạn khi tiến c; ba chấm ví dụ: người đứng yên, người đi bộ, phi thuyền —
        cả ba nằm ở đoạn phẳng gần 0, phải thấy rõ cả ba gần như trùng nhau;
        đường cong lam bão hoà (0.10, 0.34, 1.00) emissive 0.8, tiệm cận c màu trắng ngà 0.9
CUT     giữ biểu đồ, S43 đặt photon vào

## S43 · C51 · CHƯƠNG 3
SCENE   Photon không có lựa chọn — nó chỉ tồn tại tại đúng đường tiệm cận
CAMERA  zoom-in vào đúng vị trí c trên trục
ELEMENT toàn bộ trục tốc độ tắt đi trừ một điểm duy nhất tại c; photon nằm CHÍNH TRÊN đường tiệm cận;
        thử kéo nó sang trái (chậm hơn) → nó bật lại; kéo sang phải → nó bật lại; ba lần thử,
        biên độ giảm dần theo hàm thuần của t
CUT     cắt sang S44

## S44 · C52–C53 · CHƯƠNG 3
SCENE   Thuyết tương đối bước vào — hai đồng hồ, một đứng yên một chuyển động nhanh
CAMERA  tĩnh, hai đồng hồ đặt cân đối; sau đó dolly nhẹ theo đồng hồ chuyển động
ELEMENT đồng hồ A đứng yên, kim đều; đồng hồ B gắn trên một vật bay ngang khung tốc độ cao,
        kim chạy CHẬM hơn thấy rõ (tỉ lệ đúng γ cho v=0.87c → chậm 2×); vệt chuyển động
        của B kéo dài nhẹ; nét đồng hồ trắng ngà emissive 0.7, không loé
CUT     cắt sang S45

## S45 · C54–C55 · CHƯƠNG 3
SCENE   Đã đo thật — đồng hồ nguyên tử bay vòng Trái Đất, và GPS
CAMERA  từ quỹ đạo thấp nhìn xuống Trái Đất, pan theo đường bay; rồi cắt xuống màn hình điện thoại
ELEMENT Trái Đất texture NASA, mây, trục nghiêng 23.4°, quay đúng chiều; một máy bay vòng quanh
        theo đường vĩ độ; hai số đọc đồng hồ chạy lệch dần ở góc (nano giây);
        sau đó: chòm vệ tinh GPS ở quỹ đạo trung (~20.200 km — phải vẽ CAO hơn hẳn máy bay,
        đúng bậc độ cao), và một điểm định vị trên bản đồ trôi lệch dần tới ~10 km trong 1 ngày
CUT     cắt sang S46

## S46 · C56–C57 · CHƯƠNG 3 · GRAPH
SCENE   Không phải triết học — bảng số γ theo tốc độ, tăng dần tới vô lý
CAMERA  tĩnh, các dòng số hiện tuần tự; camera tilt lên khi dòng cuối vượt khung
ELEMENT ba dòng: 99% c → ×7; 99,99% c → ×70; và các dòng tiếp theo chạy vượt lên trên khung;
        chữ số nét mảnh, emissive 0.8; nền có một dải sáng chạy dốc lên theo cùng nhịp
CUT     cắt sang S47

## S47 · C58 · CHƯƠNG 3
SCENE   Tại đúng tốc độ ánh sáng — con số rơi ra ngoài mọi giới hạn
CAMERA  zoom-in tăng tốc vào đường tiệm cận, rồi dừng khựng
ELEMENT đường cong γ dốc thẳng đứng; ngay tại c, đường cong KHÔNG có giá trị — vẽ một đứt gãy
        (điểm khuyết, vòng tròn rỗng theo quy ước toán học), KHÔNG vẽ mũi tên lên vô cực
        (vì nó gợi "rất lớn" thay vì "không xác định")
CUT     tối 2 giây hoàn toàn (theo AUDIO DIRECTION), sang S48

## S48 · C59–C60 · CHƯƠNG 3
SCENE   Thời gian riêng — đồng hồ đeo tay của chính vật, và với ánh sáng nó bằng 0
CAMERA  tĩnh, dead center, zoom-in 2% cực chậm
ELEMENT một sơ đồ đường thế giới đơn giản: trục thời gian dọc, trục không gian ngang; đường của
        vật có khối lượng cong, có độ dài; đường của ánh sáng nằm ở 45° đúng chuẩn; dọc đường
        45° đo được ĐỘ DÀI BẰNG 0 — thể hiện bằng hai đầu mút trượt vào nhau;
        nét sơ đồ lam bão hoà emissive 0.7; số "0" trắng ngà emissive 0.9
CUT     tối dần (gap 2.0s), sang S49 — đoạn đính chính

## S49 · C61 · CHƯƠNG 3 · CAO TRÀO HÌNH (ĐÍNH CHÍNH)
SCENE   Không tồn tại hệ quy chiếu gắn với ánh sáng — dựng thử một cái, nó sụp ngay
CAMERA  tĩnh, khung sơ đồ; một rung giật khi hệ sụp
ELEMENT TUYỆT ĐỐI KHÔNG vẽ cảnh "ngồi trên lưng photon nhìn ra" — lời đọc đang bác bỏ đúng hình đó;
        thay vào đó: một lưới toạ độ thời-không (grid lam mảnh) được "boost" dần theo tốc độ —
        lưới bị nghiêng, các ô dẹt lại (đúng biến đổi Lorentz); khi v → c, các ô dẹt về ĐỘ DÀY 0
        và toàn bộ lưới sụp thành một đường thẳng 45° duy nhất; các phương trình bên cạnh
        chuyển thành ký hiệu chia-cho-0 rồi tan; kèm một biểu tượng "con mắt quan sát viên"
        bị gạch bỏ — photon không phải người quan sát
CUT     giữ đường 45° còn lại, sang S50

## S50 · C62 · CHƯƠNG 3 · CAO TRÀO HÌNH (ĐÍNH CHÍNH)
SCENE   Không phải trải nghiệm — mà là một con số
CAMERA  tĩnh, split đôi khung
ELEMENT TRÁI: một khung "trải nghiệm" — hình một người quan sát, có con mắt, có đồng hồ — toàn bộ
        bị làm mờ, desaturate và gạch chéo;
        PHẢI: một khung "phép đo" — biểu thức Δs² và một kết quả số, nét sắc, sáng rõ;
        chuyển trọng tâm sáng từ trái sang phải trong shot (trái giảm về 8%, phải lên 100%)
CUT     cắt sang S51

## S51 · C63 · CHƯƠNG 3 · CAO TRÀO HÌNH (ĐÍNH CHÍNH)
SCENE   Bất biến — mọi người quan sát, dù bay hướng nào, đều tính ra cùng một giá trị
CAMERA  quay quanh (orbit) sơ đồ thời-không 360° chậm
ELEMENT sơ đồ thời-không trung tâm với hai sự kiện A (phát) và B (hấp thụ) nối bằng đường 45°;
        quanh nó 6 người quan sát, mỗi người có lưới toạ độ riêng nghiêng khác nhau (Lorentz boost
        khác nhau); khi camera orbit, mỗi lưới hiện lên, số đo Δx và Δt của họ KHÁC nhau
        (số chạy khác nhau), nhưng ô kết quả Δs² luôn hiển thị CÙNG một con số 0 — ô đó là
        thứ duy nhất không đổi khi camera quay; ô kết quả emissive 1.1, các lưới 0.5
CUT     cắt sang S52

## S52 · C64–C66 · CHƯƠNG 3 · CAO TRÀO HÌNH
SCENE   Hai đầu đường đi chạm vào nhau — cung 13 tỉ năm có độ dài bằng 0
CAMERA  bắt đầu cực rộng (hai điểm cách nhau cả khung), rồi camera xoay sang góc nhìn "dọc theo
        chính đường đi" — ở góc đó hai điểm chồng khít lên nhau
ELEMENT một sợi chỉ sáng nối sao (điểm A) và mắt (điểm B) băng qua một cung dài qua trường thiên hà;
        khi camera xoay về trục của sợi chỉ, phép chiếu làm hai đầu trùng nhau thành MỘT điểm duy nhất —
        đây là cú hình then chốt của chương, phải sạch, không thêm hiệu ứng;
        sợi chỉ emissive 1.5, thiên hà nền point-cloud, độ sáng 0.3; nhãn "13 tỉ năm" ở cung,
        nhãn "0" tại điểm trùng
CUT     giữ điểm trùng, tối dần (gap 2.0s), sang S53

## S53 · C67–C68 · CHƯƠNG 3
SCENE   Bưu chính vũ trụ — những kiện hàng ánh sáng, con tem ghi cùng một ngày
CAMERA  tĩnh, bố cục bàn phân loại thư nhìn từ trên
ELEMENT 5 kiện hàng, mỗi kiện gắn nhãn hành trình khác nhau (30.000 năm, 4 năm, 2,5 triệu năm,
        13 tỉ năm...); camera lần lượt lật từng con tem: NGÀY GỬI và NGÀY NHẬN luôn TRÙNG KHÍT,
        bất kể nhãn hành trình; dấu mộc đóng cùng lúc hai ô; tông giấy ngả vàng ấm, emissive ≤ 0.6,
        chỉ mộc dấu emissive 1.1
CUT     cắt sang S54

## S54 · C69 · CHƯƠNG 3
SCENE   Chỉ có người nhận là phải chờ — một silhouette ngồi chờ, thời gian trôi quanh
CAMERA  tĩnh, khung rộng; chỉ mình silhouette bất động
ELEMENT một người ngồi ở cửa, bất động tuyệt đối; xung quanh: ánh sáng ngày/đêm quét qua nhiều lần,
        mùa đổi, bụi tích tụ — tất cả là hàm thuần của t; tương phản giữa chủ thể tĩnh và
        môi trường chạy nhanh phải rất rõ
CUT     tilt lên trời, nối sang S55

## S55 · C70 · CHƯƠNG 3 · ASTRO-REALISTIC
SCENE   Bầu trời đêm mở ra — trọn vẹn, thật
CAMERA  tilt lên tiếp từ S54, rồi dolly-out thành toàn cảnh vòm trời
ELEMENT starfield thật qua HFA.buildStars: phân bố theo cấp sao, màu theo loại phổ (O lam,
        A trắng, G vàng, K cam, M đỏ — đúng tỉ lệ số lượng: M nhiều nhất); dải Ngân Hà là
        point-cloud dày với vệt bụi tối cắt ngang, KHÔNG phải texture phẳng; bầu trời tông lam
        bão hoà (0.05, 0.12, 0.32), sao emissive 1.2–2.0 nhưng bán kính 1–2px
CUT     giữ vòm trời, S56–S59 là các zoom vào từng đối tượng trong CÙNG vòm trời này

## S56 · C71 · CHƯƠNG 3
SCENE   Mặt Trời của 8 phút 20 giây trước
CAMERA  từ vòm trời cắt sang ban ngày; tĩnh, nhìn lên qua tán lá
ELEMENT đĩa Mặt Trời (limb darkening, granulation ở mức nhìn thấy nhẹ); một nhãn thời gian
        "-8:20" gắn vào đĩa; khi cue nói "nếu nó tắt": đĩa giữ nguyên sáng, nhưng một đồng hồ
        đếm ngược 8:20 bắt đầu chạy ở góc — ẩn ý nhưng không giải quyết trong shot;
        trời xanh giữ bão hoà (0.14, 0.42, 0.88), đĩa Mặt Trời emissive 2.8 nhưng đường kính nhỏ
CUT     cắt về đêm, sang S57

## S57 · C72 · CHƯƠNG 3 · ASTRO-REALISTIC
SCENE   Proxima Centauri — sao lùn đỏ M, ánh sáng 4 năm tuổi
CAMERA  zoom dài từ vòm trời vào chòm Bán Nhân Mã, dừng ở Proxima
ELEMENT Proxima dựng đúng: sao lùn đỏ loại M5.5, đường kính ~14% Mặt Trời, bề mặt đỏ cam
        (1.00, 0.30, 0.10) với vết đen lớn và một flare bùng lên trong shot (Proxima là sao
        flare — chi tiết thật, phải có); emissive 1.8, nhỏ; nhãn "4,24 năm ánh sáng";
        một thanh thời gian phụ đánh dấu "4 năm trước" trên trục lịch đời người
CUT     pan sang phía Bắc, sang S58

## S58 · C73 · CHƯƠNG 3
SCENE   Sao Bắc Đẩu (Polaris) — ánh sáng rời đi nhiều thế kỷ trước
CAMERA  pan lên cực Bắc thiên cầu; các sao khác quay quanh Polaris, Polaris đứng yên
ELEMENT vòng quay sao đúng chiều: nhìn từ Bắc bán cầu, sao quay NGƯỢC chiều kim đồng hồ quanh
        Polaris; Polaris là sao siêu khổng lồ vàng-trắng F7, sáng hơn Mặt Trời hàng nghìn lần,
        cách ~445 năm ánh sáng — nhãn ghi con số; một con tàu buồm silhouette ở chân khung dùng
        nó tìm đường; lớp phủ thời gian: vài thế hệ gia phả mờ trôi qua
CUT     cắt sang S59

## S59 · C74 · CHƯƠNG 3 · ASTRO-REALISTIC
SCENE   Thiên hà Tiên Nữ (M31) — vệt mờ 2,5 triệu năm tuổi
CAMERA  từ mắt thường (một vệt mờ nhỏ) zoom dài tới cấu trúc xoắn đầy đủ
ELEMENT M31 dựng point-cloud: đĩa xoắn nghiêng ~77° so với phương nhìn (gần cạnh — đúng thực tế,
        KHÔNG vẽ diện chính diện), phình trung tâm vàng, các nhánh xoắn lam với vùng HII đỏ,
        vệt bụi tối; hai vệ tinh M32 và M110 ở đúng phía; nhãn 2,5 triệu năm;
        nhân vàng emissive 1.3, nhánh lam bão hoà (0.20, 0.42, 1.00) emissive 0.9
CUT     zoom-out nhanh về vòm trời, sang S60

## S60 · C75–C76 · CHƯƠNG 3 · CAO TRÀO HÌNH
SCENE   Bầu trời là tấm ghép của hàng nghìn thời điểm khác nhau
CAMERA  tĩnh vòm trời, rồi mỗi ngôi sao được gắn nhãn năm; cuối shot camera lùi rất nhẹ
ELEMENT mỗi sao trong khung nhận một nhãn thời gian riêng (năm ngoái / thế kỷ 13 / 40.000 năm
        trước...); các nhãn hiện dần, hàng trăm cái, đến mức bầu trời thành một tấm ghép
        mosaic có đường viền ô — mỗi ô một sắc độ ám màu theo thời đại (gần = trắng lam,
        xa = ám đỏ nhẹ, mô phỏng cả cảm giác dịch đỏ); KHÔNG có manh mối nào cho biết ô nào xa —
        đó chính là điểm: các nhãn phải trông hoàn toàn ngẫu nhiên, không có trật tự không gian
CUT     các nhãn tắt hết cùng lúc, sang S61

## S61 · C77 · CHƯƠNG 3
SCENE   Không có "bầu trời ngay bây giờ" — nón ánh sáng quá khứ
CAMERA  dolly-out từ mắt người ra thành sơ đồ nón ánh sáng 3D, orbit nhẹ
ELEMENT nón ánh sáng quá khứ: đỉnh nón tại người quan sát (hiện tại), mở rộng xuống quá khứ;
        mọi sự kiện nhìn thấy được nằm TRÊN MẶT nón, không có gì ở trong lòng nón hiện tại;
        một mặt phẳng "bây giờ" được thử vẽ ngang rồi tan biến vì nó không cắt qua thứ gì
        nhìn thấy được; nét nón lam bão hoà emissive 0.75
CUT     tối (gap 2.0s), sang S62 — CMB

## S62 · C78 · CHƯƠNG 3 · PROCEDURAL
SCENE   Thứ bao quanh ta ngay lúc này mà ta không thấy
CAMERA  tĩnh, một căn phòng thường trong tối; rồi chuyển "phổ nhìn" từ khả kiến sang vi sóng
ELEMENT căn phòng bình thường; một slider phổ trượt từ 500nm sang 1,9mm; khi qua ngưỡng, căn phòng
        tràn ngập một nhiễu vi sóng cực mờ, đều, đến từ MỌI hướng kể cả xuyên qua tường;
        nhiễu ở mức sáng rất thấp (emissive 0.25) — cố tình mờ, vì nó thật sự rất yếu
SFX     nhiễu radio lệch đài, rất nhỏ, đều
CUT     zoom-out xuyên qua trần nhà, sang S63

## S63 · C79 · CHƯƠNG 3
SCENE   Vũ trụ sơ khai — plasma mờ đục ở khắp mọi nơi cùng lúc
CAMERA  bay xuyên qua khối plasma nguyên thuỷ, không thấy được xa quá vài mét
ELEMENT plasma đồng nhất lấp đầy TOÀN BỘ không gian — không có "bên ngoài", không có biên,
        không có chân trời; ánh sáng bị nhồi y hệt S22–S23 (dùng lại cùng cơ chế random walk,
        cùng seed — điểm nối trực quan có chủ đích với lõi Mặt Trời); màu cam-trắng nóng
        (1.00, 0.52, 0.22) emissive 1.2, sương mù thể tích dày che khuất ở ~3m
CUT     giữ, sang S64

## S64 · C80 · CHƯƠNG 3 · CAO TRÀO HÌNH
SCENE   Sương mù tan — toàn bộ ánh sáng được thả ra cùng một lúc, ở mọi điểm
CAMERA  tĩnh giữa khối plasma; khi tan, camera không di chuyển — chỉ tầm nhìn đột ngột mở ra vô tận
ELEMENT electron bám vào hạt nhân: các cặp hạt tự do kết hợp thành hydro trung hoà, đồng loạt
        trên toàn khung trong ~1,5s; độ mờ đục giảm từ 3m tầm nhìn xuống 0 (trong suốt hoàn toàn);
        TẤT CẢ photon trong khung đồng loạt đi thẳng, mọi hướng — một vụ nổ hướng-mọi-phía
        nhưng KHÔNG có tâm (quan trọng: không được có điểm phát nổ trung tâm);
        cảnh này sáng nhất tập: giữ exposure stage giảm 25%, hạt emissive 1.4, số lượng nhiều —
        để bloom tổng tạo độ chói mà không mất màu cam
SFX     một khoảng bung ra rồi im
CUT     hoà tan sang S65

## S65 · C81 · CHƯƠNG 3 · PROCEDURAL
SCENE   Dịch đỏ — không gian giãn ra kéo giãn bước sóng, từ chói loà thành vi sóng lạnh
CAMERA  tracking theo một mặt sóng ánh sáng trong khi lưới không gian nở ra quanh nó
ELEMENT một lưới không gian 3D nở đều (mọi ô nở, không có tâm nở); bước sóng vẽ tường minh
        như một sóng hình sin gắn trên photon — sóng GIÃN dài ra đúng theo hệ số nở;
        màu đi theo bước sóng: trắng-lam → vàng → cam → đỏ sẫm → hồng ngoại (chỉ còn viền) →
        tắt hẳn khỏi khả kiến; nhiệt kế phụ chạy từ 3000 K xuống 2,725 K;
        cuối shot: emissive hạ xuống 0.3 — CMB phải TỐI, đây là shot tối nhất chương
CUT     cắt sang S66

## S66 · C82 · CHƯƠNG 3
SCENE   Tivi analog mất sóng — hạt nhiễu trên màn hình, một phần là ánh sáng 13 tỉ năm tuổi
CAMERA  tĩnh, cận cảnh màn hình CRT cong trong phòng tối; hơi quay quanh cuối shot
ELEMENT màn hình CRT với static seeded (không Math.random), quét dòng, hơi cong ở mép;
        một số ít hạt nhiễu được highlight và kéo trail ngược ra ngoài màn hình, xuyên qua
        tường, ra không gian, về tận mặt cầu tán xạ cuối — trail lam-tím rất mảnh;
        static giữ ở mức xám trung (emissive 0.55), chỉ hạt được highlight lên 1.3
CUT     kéo trail ra ngoài trời, sang S67

## S67 · C83 · CHƯƠNG 3
SCENE   Ăng-ten Holmdel — hai kỹ sư không dọn sạch được tiếng rè
CAMERA  từ ngoài, ăng-ten sừng (horn antenna) trên đồi; rồi vào trong lòng sừng nhìn ra trời
ELEMENT ăng-ten sừng kim loại hình loa vuông, đặt nghiêng lên trời (đúng kiểu Holmdel, không
        phải chảo tròn); vài con bồ câu bay ra; một kim đồng hồ đo nhiễu KHÔNG về 0 dù ăng-ten
        quay hướng nào — thể hiện bằng: camera quay ăng-ten 360°, mức nhiễu hiển thị bằng một
        vòng tròn cường độ đều tăm tắp mọi hướng (đẳng hướng — đây là điểm khoa học của shot);
        tông kim loại lạnh, không sáng, emissive ≤ 0.4
SFX     tiếng rè đều, không đổi khi quay hướng
CUT     cắt sang S68

## S68 · C84 · CHƯƠNG 3 · PROCEDURAL
SCENE   Bản đồ CMB toàn bầu trời — và với chúng, khoảng thời gian ấy cũng bằng không
CAMERA  bản đồ Mollweide mở ra toàn khung, rồi cuộn thành mặt cầu bao quanh camera
ELEMENT bản đồ nhiễu CMB procedural: dao động nhiệt độ ±200 µK quanh 2,725 K, phổ góc có đỉnh
        ở thang ~1° (đúng vật lý — các đốm phải có kích thước đặc trưng ~1°, không phải nhiễu
        trắng mịn); bảng màu CMB quy ước: lạnh lam đậm (0.06, 0.16, 0.55) → ấm đỏ (0.80, 0.14, 0.06),
        emissive ≤ 0.55 — KHÔNG được loé, đây là ánh sáng lạnh nhất vũ trụ;
        một nhãn "0" nhỏ hiện ở góc, đúng như ở S48/S52
CUT     tối hoàn toàn (gap 2.0s), sang CHƯƠNG 4

---

# CHƯƠNG 4 — THỨ KHÔNG BAO GIỜ GIÀ

## S69 · C85 · CHƯƠNG 4
SCENE   Trở lại căn phòng tối — đúng khung hình của S01
CAMERA  y hệt S01: tĩnh, 85mm, cùng góc lệch tâm (khán giả phải nhận ra ngay)
ELEMENT khung lặp lại chính xác S01 — nhưng nay có một khác biệt duy nhất: vài chấm sáng tĩnh
        trên da (di sản của S08), rất mờ, emissive 0.45; nhịp thở giữ nguyên chu kỳ 4.5s
CUT     giữ tối, sang S70

## S70 · C86 · CHƯƠNG 4
SCENE   Vũ trụ rộng nghĩa là buồn — khoảng cách như một bản án
CAMERA  pull-back cực dài từ một silhouette người ra tới thang thiên hà
ELEMENT người → Trái Đất → hệ Mặt Trời → Ngân Hà → nhóm thiên hà, mỗi bậc thang thu nhỏ theo
        đúng bậc độ lớn; thang khoảng cách hiện bên cạnh; tông lạnh, xanh xám bão hoà
        (0.08, 0.18, 0.38), độ sáng thấp — cảm giác cô lập đến từ TỐI và LẠNH, không từ sáng
CUT     giữ ở thang thiên hà, sang S71

## S71 · C87–C88 · CHƯƠNG 4
SCENE   Khoảng cách chỉ tồn tại với thứ có khối lượng — hai lớp bản đồ chồng nhau
CAMERA  tĩnh, hai lớp; lớp trên trượt đi để lộ lớp dưới
ELEMENT LỚP "khối lượng": bản đồ vũ trụ đầy đủ với mọi khoảng cách, thước tỉ lệ, con số
        (13 tỉ năm ánh sáng / 170.000 năm / 8'20") — nét lam lạnh;
        LỚP "ánh sáng": khi lớp trên trượt đi, MỌI con số và MỌI thước tỉ lệ biến mất,
        các thiên thể trượt vào nhau; ba con số bị gạch lần lượt theo lời đọc
CUT     mọi thứ co lại, sang S72

## S72 · C89 · CHƯƠNG 4 · CAO TRÀO HÌNH
SCENE   Với ánh sáng, vũ trụ là một điểm
CAMERA  tĩnh; toàn bộ vũ trụ trong khung co về tâm
ELEMENT tất cả thiên hà, sao, khoảng cách trong khung co lại theo hàm ease-in dài 3s về đúng
        MỘT điểm sáng duy nhất ở giữa nền đen; điểm cuối emissive 3.2 (được loé hết cỡ —
        diện tích 2px, an toàn); không có vụ nổ, không có sóng — chỉ co lại rồi đứng yên
CUT     giữ điểm sáng qua gap 2.0s, sang S73

## S73 · C90–C91 · CHƯƠNG 4
SCENE   Mọi thứ khác đều hỏng dần — nhưng ánh sáng thì không
CAMERA  truck ngang qua một dãy "vật thể đang hỏng", kết ở photon bất biến
ELEMENT bốn ô nối tiếp, mỗi ô một quá trình phân rã chạy nhanh theo t: (1) thanh sắt gỉ lan dần;
        (2) một ngôi sao cạn nhiên liệu, phồng thành khổng lồ đỏ rồi co thành lùn trắng;
        (3) một hạt nhân phóng xạ rã, phát hạt alpha; (4) photon — KHÔNG đổi một pixel nào
        suốt cả shot trong khi ba ô kia biến dạng liên tục; ba ô đầu tông trầm xỉn,
        ô photon giữ nét sắc emissive 1.7
CUT     zoom vào ô photon, sang S74

## S74 · C92–C93 · CHƯƠNG 4
SCENE   Bay tới tận cùng thời gian mà vẫn nguyên vẹn — chỉ có một cách để nó kết thúc
CAMERA  tracking dài theo photon qua một vũ trụ đang già đi và tối dần
ELEMENT photon giữ nguyên hoàn toàn (kích thước, màu, cường độ bất biến); xung quanh: sao tắt
        dần, thiên hà thưa ra, nền chuyển sang đen — chỉ một mình photon còn sáng;
        cuối shot một nguyên tử đơn độc hiện ra phía trước trên đường bay
CUT     hard cut đúng khoảnh khắc chạm, sang S75

## S75 · C94 · CHƯƠNG 4
SCENE   Bị nuốt trọn — không có cái chết vì tuổi già, chỉ có va chạm
CAMERA  cực cận, tĩnh; 1 frame giật lúc hấp thụ
ELEMENT một nguyên tử với electron ở mức năng lượng thấp; photon chạm → biến mất hoàn toàn →
        electron nhảy lên mức cao hơn (vẽ đúng: nhảy bậc, không trượt liên tục);
        KHÔNG có mảnh vỡ, không có tia; photon emissive 2.0 trước, 0 sau — tắt trong 1 frame
CUT     pull-back, sang S76

## S76 · C95–C96 · CHƯƠNG 4 · CAO TRÀO HÌNH (KẾT)
SCENE   Mắt bạn là nơi các cuộc đời kết thúc
CAMERA  pull-back từ nguyên tử ra tới toàn bộ võng mạc, rồi ra con mắt, rồi ra khuôn mặt
ELEMENT lớp tế bào que/nón của võng mạc dựng thật (nón tập trung ở hố trung tâm, que ở ngoại vi);
        photon đáp xuống liên tục, mỗi cái để lại một chấm sáng tĩnh (cơ chế y hệt S08 —
        đóng vòng); mật độ chấm dày dần; ĐỪNG cho tổng sáng vượt ngưỡng: chấm emissive 0.8,
        khoảng 3% chấm được nâng 1.5
CUT     cắt sang S77

## S77 · C97 · CHƯƠNG 4
SCENE   13 tỉ năm không va vào một hạt bụi nào — rồi dừng ở một tế bào ẩm ướt
CAMERA  một cú dolly liền mạch cực dài: từ chiều sâu vũ trụ, qua các thiên hà, qua hệ Mặt Trời,
        qua khí quyển, vào đồng tử, tới đúng một tế bào — không cắt
ELEMENT chuỗi thang liên tục (thiên hà → sao → hành tinh đá → đại dương/mây → khuôn mặt → mắt →
        võng mạc → một tế bào); tỉ lệ mỗi bậc phải đúng bậc độ lớn; Trái Đất dùng texture NASA,
        trục 23,4°; photon chủ thể giữ nguyên độ sáng suốt hành trình — điểm neo thị giác duy nhất
CUT     dừng tại tế bào, sang S78

## S78 · C98–C99 · CHƯƠNG 4
SCENE   Cả chuyến đi chỉ để bẻ cong một phân tử
CAMERA  cực cận macro phân tử, tĩnh; kết thúc pull-back nhẹ thấy sự nhỏ bé
ELEMENT phân tử retinal dựng đúng dạng: chuỗi carbon với một liên kết đôi; photon chạm →
        cis đổi sang trans (bẻ cong tại đúng một liên kết, xoay ~180°, KHÔNG biến dạng toàn phân tử);
        rồi một xung điện lam (0.18, 0.44, 1.00) chạy dọc sợi thần kinh ra khỏi khung;
        cuối shot: một chấm sáng đơn trên nền đen — "bạn thấy một chấm sáng";
        phân tử vẽ nét mảnh emissive 0.7, chỉ liên kết bị bẻ loé 1.6 trong 3 frame
CUT     tối (gap 1.5s), sang S79

## S79 · C100–C101 · CHƯƠNG 4
SCENE   "Gặp gỡ" đúng nghĩa đen — một sợi chỉ, hai đầu, cùng một khoảnh khắc
CAMERA  tĩnh, sợi chỉ chạy chéo khung; camera trượt dọc sợi chỉ từ đầu này sang đầu kia
ELEMENT sợi chỉ thời-không nối ngôi sao (đầu trên) và con ngươi (đầu dưới); khi camera trượt dọc,
        KHÔNG có thời gian trôi trên sợi — các mốc thời gian nằm ngoài sợi chỉ, thuộc về
        "chuyện của chúng ta", vẽ ở lề khung mờ nhạt; hai đầu sợi cùng sáng lên đồng thời,
        không lệch một frame; sợi emissive 1.4
CUT     cắt sang S80

## S80 · C102 · CHƯƠNG 4
SCENE   Ngôi sao có thể đã tắt — nhưng trên sợi chỉ nó vẫn đang cháy
CAMERA  split: nửa trên là ngôi sao "hiện tại" (đã nổ, đã nguội), nửa dưới là đầu sợi chỉ
ELEMENT NỬA TRÊN: siêu tân tinh đã tàn — tinh vân tàn dư mở rộng, ở giữa một sao neutron/lùn trắng
        nguội, tông xám lạnh, emissive ≤ 0.5; NỬA DƯỚI: cùng ngôi sao đó ở đầu sợi chỉ, vẫn
        cháy đầy đủ, ấm, emissive 2.0; hai nửa cùng tồn tại trong khung không mâu thuẫn —
        đó là điểm của shot
CUT     tối (gap 2.0s), sang S81

## S81 · C103–C104 · CHƯƠNG 4
SCENE   Lời mời — ra ngoài, nhắm mắt 10 giây, rồi chọn một ngôi sao mờ
CAMERA  ngôi thứ nhất: nhìn từ mắt người bước ra khoảng trời đêm; tĩnh ở cuối
ELEMENT cảnh đêm thật: vòm sao, chân trời thấp; nhắm mắt = khung tối 10 giây có nhịp thở
        (lặp lại nhịp S01); mở ra, mắt thích nghi tối — các sao MỜ hiện dần lên theo đường cong
        thích nghi (sao sáng hiện trước, sao mờ hiện sau, đúng sinh lý);
        một sao mờ được đánh dấu bằng vòng tròn rất nhạt, và khi nhìn thẳng vào nó thì nó
        MỜ ĐI (averted vision — chi tiết thật, phải làm đúng), nhìn lệch thì rõ hơn
CUT     zoom rất chậm vào ngôi sao mờ đó, sang S82

## S82 · C105 · CHƯƠNG 4
SCENE   Vài trăm năm trước, trên bề mặt một quả cầu plasma, một hạt thoát ra
CAMERA  zoom tiếp từ chấm mờ tới bề mặt ngôi sao đó; kết ở một photon rời lớp vỏ cuối
ELEMENT granulation của ngôi sao (dùng lại hệ granulation ở S35 nhưng khác seed và khác nhiệt độ —
        sao này hơi nguội hơn, tông cam hơn); một photon rời lớp cuối và lao vào bóng tối —
        chuyển động y hệt S36, đóng vòng có chủ đích; nhãn "vài trăm năm trước"
CUT     cắt sang S83

## S83 · C106 · CHƯƠNG 4
SCENE   Phần khó nhất đã đi xong từ lâu — hàng chục nghìn năm chỉ để ra tới bề mặt
CAMERA  tĩnh, split: trái là random walk trong lòng sao (rối, dày), phải là đường thẳng ra ngoài
ELEMENT dùng lại chính random walk ở S23 (cùng seed) ở bên trái, nén thời gian; bên phải một
        đường thẳng mảnh kéo dài ra khỏi khung; tỉ lệ thời gian ghi chú: hàng chục nghìn năm
        vs vài trăm năm; một dải gia phả người mờ chạy phía dưới, bắt đầu SAU khi phần trái đã xong
CUT     cắt sang S84

## S84 · C107 · CHƯƠNG 4
SCENE   Vài trăm năm lịch sử loài người trôi qua bên dưới đường bay
CAMERA  truck ngang đều theo photon; bên dưới, lịch sử chạy nhanh
ELEMENT tầng trên: photon đi thẳng, tốc độ tuyệt đối đều, KHÔNG đổi gì;
        tầng dưới: silhouette các đế chế mọc lên rồi sập, khói chiến tranh, các thế hệ người
        sinh-sống-chết — tất cả là hàm thuần của t, chạy rất nhanh;
        tương phản nhịp giữa hai tầng là nội dung chính của shot; tầng dưới tông trầm,
        emissive ≤ 0.5; photon 1.8
CUT     nối liền sang S85

## S85 · C108 · CHƯƠNG 4
SCENE   Cho tới lúc nó tìm thấy hai centimet vuông ẩm ướt trên khuôn mặt bạn
CAMERA  camera bám photon, chuyển từ truck ngang thành dolly-in thẳng vào con ngươi; dừng khựng
ELEMENT lịch sử tầng dưới tắt hết; chỉ còn photon và khuôn mặt hiện dần từ bóng tối;
        đường bay không cong một pixel cho tới điểm cuối; tại điểm chạm: photon DỪNG và
        Ở LẠI (chấm sáng tĩnh trên võng mạc), camera cũng dừng cùng frame
SFX     mọi âm nền tắt hẳn, chỉ còn tiếng thở
CUT     giữ, gap 1.5s, sang S86

## S86 · C109 · CHƯƠNG 4
SCENE   Bạn không nhìn thấy ngôi sao — bạn chạm vào nó
CAMERA  cực cận con ngươi, tĩnh tuyệt đối
ELEMENT trong con ngươi, phản chiếu một mảnh ngôi sao (không phải cả bầu trời — chỉ MỘT mảnh);
        chấm sáng của photon nằm im ở đó, không nhấp nháy, không tan; mống mắt giữ nét
        (cùng mống mắt ở S02 — đóng vòng); chấm emissive 1.9, mống mắt ≤ 0.6
CUT     giữ, sang S87

## S87 · C110 · CHƯƠNG 4
SCENE   "Với bạn, nó đã đi vài trăm năm"
CAMERA  tĩnh; khung chia: con ngươi bên trái, một đường thời gian dài bên phải
ELEMENT đường thời gian phía người quan sát vẽ dài hết khung, dày đặc mốc lịch sử, nét lam lạnh
        emissive 0.6; con ngươi giữ nguyên
CUT     đường thời gian bắt đầu co lại, sang S88 — shot cuối

## S88 · C111 · CHƯƠNG 4 · KẾT
SCENE   "Với nó, nó vừa mới rời đi" — đường thời gian co về 0, còn lại một điểm sáng
CAMERA  tĩnh tuyệt đối; sau khi đường co xong, giữ khung đen 3 giây
ELEMENT đường thời gian ở S87 co lại theo ease-in cho tới khi hai đầu chạm nhau thành một điểm;
        toàn khung tối dần trừ một chấm sáng duy nhất trong con ngươi; chấm emissive 2.6,
        bán kính 2px; fade-out cuối dùng HFA.globalFade với outSec ≈ 3.0
SFX     nốt cuối tắt dần, im lặng 3 giây
CUT     hết tập

---

# GHI CHÚ DỰNG HÌNH

## 1. Bloom / HDR — bảng emissive bắt buộc
Bloom trong HFA chạy trên HDR với **ngưỡng 1.0**. Vật thể muốn loé phải có emissive **trên 1.0**;
dưới 1.0 là "sáng mà không loé". Bảng quy ước cho cả tập:

| Loại vật thể | emissive | Ghi chú |
|---|---|---|
| Photon đơn, điểm nhấn (S05, S72, S88) | 2.6 – 3.2 | chỉ khi diện tích ≤ 3px — an toàn tuyệt đối |
| Photon chủ thể đang di chuyển | 1.6 – 2.2 | trail giảm dần về 0.8 ở đuôi |
| Đĩa sao / Mặt Trời nhìn từ xa | 1.6 – 2.8 | đường kính nhỏ; nếu đĩa chiếm >15% khung, hạ về 1.3 |
| Photosphere / granulation cận cảnh | 1.10 – 1.25 (rìa 0.75) | phải có limb darkening, nếu không sẽ thành đĩa trắng |
| Lõi plasma đặc | 1.25 – 1.40 | kèm giảm exposure stage 15% cho cả chương 2 |
| Sao nền (starfield) | 1.2 – 2.0 | bán kính 1–2px, không hơn |
| Nét biểu đồ / typo / sơ đồ | 0.5 – 0.9 | **KHÔNG BAO GIỜ trên 1.0** — bloom làm mất nét chữ |
| Da, mống mắt, bề mặt sinh học | 0.45 – 0.95 | đây là shot ấm, không phải shot chói |
| Chấm photon tích tụ trên da/võng mạc | 0.80 (3% nâng 1.5) | đám đông chấm — tổng sáng mới là thứ nguy hiểm |
| CMB, ăng-ten, tàn dư sao nguội | 0.25 – 0.55 | **phải tối** — đây là ánh sáng lạnh nhất vũ trụ |
| Random walk dày đặc (S23, S63) | 0.55 mỗi sợi | hàng nghìn sợi chồng nhau đã đủ sáng |

## 2. Màu — bài học đo được từ tập 08, áp dụng bắt buộc
**Sắc phải đến từ TỈ LỆ giữa các kênh, không từ độ sáng.** ACES tonemap nén vùng sáng cao về
trắng/xám. Số đo thật ở tập trước:
- `(0.42, 0.60, 1.05)` → chỉ giữ **11–25%** bão hoà sau ACES → ra **xám**. Không dùng.
- `(0.10, 0.32, 1.00)` → giữ **37–67%** bão hoà → ra **lam thật**. Dùng kiểu này.

Quy tắc: **bão hoà mạnh (kênh yếu ≤ 0.2 × kênh mạnh) + độ sáng vừa (kênh mạnh ≈ 1.0, không hơn)**.
Muốn sáng hơn thì tăng emissive/bloom, **đừng nâng kênh yếu**.

Bảng màu đã tuân quy tắc trên, dùng xuyên tập:

| Vai trò | RGB | Dùng ở |
|---|---|---|
| Lam sâu (khoa học, sơ đồ, lạnh) | (0.10, 0.34, 1.00) | biểu đồ, lưới Lorentz, nón ánh sáng |
| Lam xung thần kinh | (0.18, 0.44, 1.00) | S04, S78 |
| Lam đêm nền trời | (0.05, 0.12, 0.32) | S31, S55, S81 |
| Cam lõi sao (nóng, bão hoà) | (1.00, 0.34, 0.06) | S15, S25, S30 |
| Cam plasma nguyên thuỷ | (1.00, 0.52, 0.22) | S63, S64 |
| Vàng ấm photosphere | (1.00, 0.72, 0.36) | S35, S82 |
| Trắng-lam siêu nóng (dùng dè) | (0.55, 0.72, 1.00) | chỉ S16, kèm exposure −15% |
| Đỏ sao lùn M | (1.00, 0.30, 0.10) | S57 Proxima |
| Trắng ngà cho chữ | (0.95, 0.93, 0.88) | mọi typo — không dùng trắng tinh |
| CMB lạnh / CMB ấm | (0.06, 0.16, 0.55) / (0.80, 0.14, 0.06) | S68 |

**Trục màu theo chương:** CH1 ấm-tối (đen + hổ phách) → CH2 cam-đỏ nóng dần vào lõi rồi
nguội ra vàng ấm ở photosphere → CH3 lam lạnh và tối (chân không, sơ đồ) kết ở CMB gần như
không màu → CH4 quay về ấm-tối của CH1, đóng vòng.

## 3. Chống cháy trắng — tập này rủi ro cao
Đây là tập về ánh sáng, nên mặc định mọi thứ đều muốn cháy. Ngưỡng an toàn:
- **Không shot nào được có >12% diện tích khung ở luminance > 0.85 sau tonemap.** Ba shot
  được miễn trừ có kiểm soát: S64 (sương mù tan), S35 (photosphere), S03 (mưa photon) —
  cả ba đã kèm chỉ dẫn giảm exposure hoặc giảm bán kính hạt.
- **Giảm exposure stage:** −15% toàn CHƯƠNG 2 (lõi Mặt Trời), −25% riêng S64.
- **Đẩy sáng bằng SỐ LƯỢNG hạt nhỏ, không bằng độ sáng hạt lớn.** 40.000 hạt 1.2px emissive 1.6
  cho cảm giác chói hơn và giữ màu tốt hơn 500 hạt 6px emissive 3.0.
- **Chữ và mọi nét sơ đồ luôn DƯỚI 1.0.** Nếu chữ nhìn mờ, tăng độ dày nét chứ không tăng emissive.
- **CMB, ăng-ten, tàn dư sao nguội, đồ vật kim loại: DƯỚI 1.0 tuyệt đối.** Chúng loé là sai vật lý.
- **Không dùng trắng tinh (1,1,1)** cho bất kỳ bề mặt lớn nào — luôn ngả một sắc (ngà, lam nhạt, ám cam).

## 4. Quy ước thiên văn phải đúng
- Mọi photon trong tập có **cùng một tốc độ hiển thị** ở mọi cảnh chân không. Không bao giờ vẽ
  photon nhanh/chậm khác nhau. Sự khác biệt về thời gian đến từ QUÃNG ĐƯỜNG, không từ tốc độ.
- **Random walk phải đúng √N:** bán kính khối tăng theo căn bậc hai số bước. Vẽ nó nở tuyến tính
  là phá hỏng luận điểm trung tâm của chương 2.
- **Trái Đất:** texture NASA trong `assets/tex/`, trục nghiêng 23,4°, tự quay ngược chiều kim đồng hồ
  nhìn từ cực Bắc.
- **Sao quay quanh Polaris:** ngược chiều kim đồng hồ khi nhìn từ Bắc bán cầu.
- **M31 nghiêng ~77°** so với phương nhìn (gần nhìn cạnh), có M32 + M110, có vệt bụi tối.
- **Proxima:** sao lùn đỏ M5.5, ~14% đường kính Mặt Trời, là sao flare — phải có ít nhất một flare.
- **Photosphere phải có limb darkening** và granulation với vòng đời ô ~8 phút.
- **CMB:** đốm đặc trưng thang ~1°, không phải nhiễu trắng mịn; dao động ±200 µK quanh 2,725 K.
- **Sự tái kết hợp (S64) không có tâm** — ánh sáng được thả ra ở MỌI điểm cùng lúc. Vẽ một vụ nổ
  có tâm là sai nghiêm trọng.
- **Sự giãn nở (S65) không có tâm** — mọi ô lưới nở đều, camera không đứng ở "tâm vũ trụ".

## 5. Motif lặp lại — dùng có chủ đích, và những thứ phải tránh
**Ba motif được phép lặp (là cấu trúc của tập, không phải lười):**
1. *Chấm sáng tĩnh còn lại sau va chạm* — S07 → S08 → S76 → S86 → S88. Luôn cùng cách dựng.
2. *Random walk cùng seed* — S22/S23 (lõi Mặt Trời) → S26 (người say) → S63 (vũ trụ sơ khai)
   → S83 (ngôi sao xa). Cùng seed là điểm nối trực quan có chủ đích.
3. *Khung căn phòng tối* — S01 → S69, y hệt góc máy, khác nhau đúng một chi tiết.

**Phải tránh:**
- **KHÔNG vẽ cảnh "ngồi trên lưng photon nhìn ra vũ trụ"** ở bất kỳ đâu — C61 bác bỏ thẳng điều đó.
  Mọi hình về "góc nhìn của photon" đều sai với kịch bản này.
- **KHÔNG vẽ photon xuyên qua người rồi đi tiếp** ngoài S06 (nơi hình đó cố ý bị gạch bỏ).
  Đây là điểm phân biệt với tập neutrino cũ.
- **KHÔNG vẽ đồng hồ của photon chỉ số 0** sau C61 — photon không có đồng hồ. Ở S40 đồng hồ
  phải tan thành KHÔNG CÓ GÌ, không thành "0".
- **KHÔNG dùng lens flare kiểu hoạt hình, không chevron/HUD sci-fi, không grid neon.**
- **KHÔNG billboard phẳng** cho thiên hà, tinh vân, Ngân Hà — luôn point-cloud có chiều sâu.
- Tránh lặp góc máy "orbit quanh vật thể ở giữa khung" quá 4 lần trong tập (hiện dùng ở
  S51, S61, S66, S67 — đã đủ).

## 6. Nếu cần giảm số shot
88 shot cho ~18:40 là ~12,7s/shot — nhịp nhanh, hợp với tập nhiều ý. Nếu dựng thấy quá vụn,
gộp theo đúng danh sách dưới (đã chọn các cặp cùng chủ thể, gộp không mất ý hình). Gộp hết
danh sách này đưa tập về **64 shot** (~17,5s/shot):

S09+S10 · S11+S12 · S17+S18 · S20+S21 · S24+S25 · S32+S33 · S34+S35 · S41+S42 ·
S44+S45 · S46+S47 · S53+S54 · S56+S57 · S58+S59 · S66+S67 · S69+S70 · S73+S74 ·
S79+S80 · S83+S84 · S86+S87 · S87+S88 (nếu đã gộp S86+S87 thì để S88 đứng riêng —
shot cuối phải độc lập)

**Tuyệt đối không gộp** các shot cao trào: S06, S07, S08 (cú lật mở màn), S29, S30
(nghịch lý phân bổ thời gian), S49, S50, S51 (đính chính hệ quy chiếu), S52, S64, S72,
S76, S88. Mỗi cái cần trọn một nhịp hình riêng.

## 7. Kỹ thuật
- Mọi chuyển động là **hàm thuần của `t`**. Không `+=`, không `Math.random`, không
  `requestAnimationFrame` / `Date.now` / `performance.now` / `setTimeout`. Ngẫu nhiên dùng
  `HFA.mulberry32(seed)` với seed hằng số ghi thẳng trong file.
- Timeline GSAP **paused**, đăng ký `window.__timelines['photon-khong-gia']` đúng nguyên dạng
  trong chính `index.html`, khớp `data-composition-id`.
- Mọi clip có timing: `data-start`, `data-duration`, `data-track-index`, `class="clip"`.
- Phụ đề: chạy `scripts/gen-captions.mjs` từ `voice/*.srt`. ≤ 42 ký tự, 1 dòng. Không cắt tay.
- Ranh giới shot **neo theo cue**, đọc từ `timing.json` — không hardcode giây.
- Fade toàn cục: `HFA.globalFade(t, TOTAL, 1.5, 3.0)`.
