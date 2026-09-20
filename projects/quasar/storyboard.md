# STORYBOARD — QUASAR: NGỌN HẢI ĐĂNG Ở RÌA THỜI GIAN

## METADATA
- **Slug:** `quasar`
- **Kịch bản:** 3695 từ · 128 cue (C01–C128) · 4 chương · 20 gap
- **Tổng thời lượng dự kiến:** ~20:30 (≈1230s) — tập dài nhất loạt. Thời lượng CHUẨN lấy từ `timing.json`.
- **Số shot:** **97 shot** (S01–S97). Đã đếm lại từng khối `## Sxx` trong file này; xem "BẢNG ĐỐI CHIẾU CAO TRÀO" cuối file.
- **Trung bình:** ~12,7s/shot · 1,32 cue/shot
- **Nhạc nền:** `assets/bgm.mp3` — một track chung cả tập. Đường cong gain theo chương:
  CH1 0.22 → CH2 0.30 (dày nhất quanh S30–S46) → CH3 0.16 (rút đột ngột ở S57) → CH4 0.08 (gần im lặng), fade-out sau S94.
- **Phụ đề:** sinh tự động từ `voice/*.srt` bằng `scripts/gen-captions.mjs`. Storyboard KHÔNG chép phụ đề.

### Loại visual theo chương
| Chương | Cue | Shot | Loại visual chính |
|---|---|---|---|
| 1 — MỘT NGÔI SAO SAI CHỖ | C01–C27 | **S01–S23 (23 shot)** | astro-realistic bầu trời sao + **sơ đồ quang phổ 2D** (vạch hấp thụ, thước bước sóng, dóng cột); tông tài liệu lưu trữ (hạt film, đen trắng ngả nâu) ở đoạn 1963 |
| 2 — ĐỘNG CƠ KHÔNG CHẠY BẰNG LỬA | C28–C67 | **S24–S56 (33 shot)** | astro-realistic đĩa bồi tụ volumetric + jet tương đối tính; **3 khối graph** (đường cong nhấp nháy S42–S45; thanh hiệu suất 0,7% vs 6–30% S48–S50; bảng xếp hạng S51); procedural khí xoắn + particle bồi tụ |
| 3 — ÁNH SÁNG CỦA MỘT THỨ ĐÃ TẮT | C68–C103 | **S57–S80 (24 shot)** | **graph trục thời gian vũ trụ** (mật độ quasar, đỉnh ~10 tỉ năm) + astro-realistic "vỏ khoảng cách"; travelling dài theo chùm photon 10 tỉ năm; split-screen di ảnh |
| 4 — CON THÚ ĐANG NGỦ Ở NHÀ | C104–C128 | **S81–S97 (17 shot)** | astro-realistic Ngân Hà nhìn từ trong rồi từ ngoài, Sgr A* tối, quỹ đạo S-star, bong bóng Fermi; **1 graph tương quan khối lượng log–log**; kết đảo góc nhìn khép vòng về S01 |

### Ràng buộc hình toàn tập (KHẮT KHE)
- **Góc nhìn TỪ XA, luôn luôn.** Camera không bao giờ vượt qua mặt phẳng ngoài của đĩa bồi tụ.
  Khoảng cách gần nhất được phép: rìa ngoài đĩa (r_out), không bao giờ vào trong r ≈ 3·r_s.
- **KHÔNG** cảnh rơi vào, **KHÔNG** đi qua chân trời sự kiện, **KHÔNG** POV bị kéo giãn/spaghetti,
  **KHÔNG** đồng hồ giãn nở thời gian. Tập 04 cũ (`archive/tap-04-roi-vao-ho-den.html.bak`) đã làm góc đó.
- **Nhân vật chính là ĐĨA BỒI TỤ và JET.** Hố đen chỉ là **cái đáy tối của một cái giếng** —
  một lỗ đen tuyệt đối ở tâm, không viền ma quái, không photon-ring kịch tính, chiếm ≤ 4% đường kính đĩa trên khung.
- **Thấu kính hấp dẫn: tiết chế.** Chỉ dùng ở S36 và S43 dưới dạng mép sau của đĩa cong nhẹ lên trên
  đường chân trời của đĩa (cung ≤ 25° cung tròn), không bao giờ thành cảnh đặc trưng, không warp toàn khung.

---

# CHƯƠNG 1 — MỘT NGÔI SAO SAI CHỖ (C01–C27 · S01–S21)

## S01 · C01 · CHƯƠNG 1
SCENE   Bầu trời đêm thật, trường sao dày, không có gì nổi bật. Một chấm mờ ở 1/3 phải khung, không được đánh dấu
CAMERA  tĩnh hoàn toàn 2s đầu (khớp im lặng mở đầu), rồi drift ngang cực chậm 0.4°/s sang trái; 45mm
ELEMENT starfield 9000 sao màu theo nhiệt độ (lam→cam), độ lớn theo phân bố luỹ thừa; chấm quasar
        cường độ chỉ nhỉnh hơn trung vị 1.2×, KHÔNG nhấp nháy khác các sao khác; nhiễu cảm biến rất mảnh
CUT     giữ nguyên khung sang S02 — chỉ đổi tiêu cự, không đổi cảnh

## S02 · C02 · CHƯƠNG 1
SCENE   Mắt quét qua bầu trời — vài vòng tròn tra cứu mờ bật rồi tắt trên các sao KHÁC, luôn trượt qua chấm quasar
CAMERA  tiếp drift trái, thêm zoom-out nhẹ 45mm → 38mm (bầu trời rộng thêm, chấm nhỏ đi)
ELEMENT 6 vòng tròn tra cứu đường mảnh 1.5px, màu lam xám (0.22,0.40,0.62), mỗi vòng sống 0.8s;
        chúng bám vào các sao sáng hơn; chấm quasar không bao giờ được vòng nào chạm tới
CUT     cắt thẳng sang S03 ngay khi vòng cuối tắt

## S03 · C03 · CHƯƠNG 1
SCENE   Cú lật đầu tiên: mọi sao khác mờ dần về 0, chỉ chấm quasar còn lại, rồi nó bắt đầu sáng lên
CAMERA  push-in nhanh vừa 38mm → 85mm về phía chấm; dừng đột ngột khi chấm chiếm 40px
ELEMENT các sao khác giảm opacity theo hàm mũ trong 1.5s; chấm quasar tăng emissive 1.0 → 3.2
        nhưng ĐƯỜNG KÍNH giữ nguyên (sáng hơn ≠ to hơn) — chỉ halo bloom nở ra;
        ⚠ giới hạn cháy trắng: lõi chấm ≤ 6px có luminance >0.85
CUT     giữ đen trong gap 1.5s, chỉ còn chấm

## S04 · C04 · CHƯƠNG 1
SCENE   Chấm sáng đơn độc trên nền đen tuyệt đối; một khung số mờ hiện bên dưới nhưng chưa có chữ số
CAMERA  tĩnh, chấm ở chính giữa; thở rất nhẹ (biên độ zoom ±0.5%)
ELEMENT chấm giữ emissive 3.2; khung số là hộp viền mảnh (0.22,0.40,0.62) rỗng, chiều cao 0.30 world
        ở camera 22 → ≈ 26px; nét dày 2.2px để không bị bloom ăn mất
CUT     cắt sang S05

## S05 · C05 · CHƯƠNG 1
SCENE   Dải Ngân Hà nhìn nghiêng từ ngoài, toàn bộ 200 tỉ sao, đĩa xoắn ốc mở ra choán khung
CAMERA  reveal từ cạnh đĩa: camera dâng lên khỏi mặt phẳng đĩa, 0° → 32° trong suốt shot; 28mm
ELEMENT thiên hà xoắn ốc chắn ngang 2 nhánh chính + 2 nhánh phụ, quay CÙNG CHIỀU KIM ĐỒNG HỒ nhìn từ
        cực bắc thiên hà (quy ước giữ nguyên cả tập); lõi phình vàng cam (1.00,0.66,0.12), nhánh lam
        (0.34,0.58,1.00) điểm HII đỏ; dải bụi tối cắt ngang mặt phẳng; ~120k particle
CUT     hoà tan sang S06

## S06 · C06 · CHƯƠNG 1
SCENE   So sánh trực tiếp: cả thiên hà bị gom lại thành MỘT ngọn đèn duy nhất đặt cạnh chấm quasar
CAMERA  zoom-out 28mm → 20mm để nhét vừa hai vật; hai vật ở hai bên khung, cách đều tâm
ELEMENT thiên hà co lại (scale 1.0 → 0.06) trong 1.8s thành một quả cầu sáng vàng cam;
        chấm quasar bên phải giữ nguyên kích thước; thanh đo độ sáng dọc bên dưới mỗi vật —
        thanh thiên hà cao 1 đơn vị, thanh quasar leo lên 12× rồi 100× (tick log)
CUT     cắt sang S07 khi thanh quasar chạm đỉnh khung

## S07 · C07 · CHƯƠNG 1
SCENE   Vòng tròn khoanh vùng: cái phát sáng đó nằm gọn trong một vùng nhỏ hơn hệ Mặt Trời
CAMERA  push-in vào chấm quasar bên phải, bỏ thiên hà ra khỏi khung; 20mm → 60mm
ELEMENT vòng tròn kích thước hệ Mặt Trời vẽ bằng nét đứt (0.22,0.40,0.62) bao quanh chấm;
        bên trong vẽ mờ quỹ đạo Hải Vương làm thước; chấm sáng không lớn hơn vòng đó
CUT     cắt sang S08 (gap 1.5s trước đó giữ vòng đứng yên)

## S08 · C08 · CHƯƠNG 1
SCENE   Split-screen tỉ lệ: bên trái đĩa thiên hà 100.000 ly, bên phải quỹ đạo Hải Vương phóng to
CAMERA  tĩnh, hai nửa khung; đường chia dọc mảnh chạy giữa
ELEMENT trái: thiên hà nhìn thẳng từ trên, thanh thước 100.000 ly; phải: hệ Mặt Trời tới quỹ đạo Hải Vương,
        thanh thước 9 giờ ánh sáng; hai thanh thước vẽ cùng chiều dài trên màn hình dù chênh 10^9 lần —
        ghi số tỉ lệ ở giữa; chữ cao 0.34 world @ cam 24 → ≈ 30px, nét 2.4px, giữ dưới HDR 1.0
CUT     nửa phải nở chiếm cả khung sang S09

## S09 · C09 · CHƯƠNG 1
SCENE   Khung trống, vòng tròn hệ Mặt Trời còn lại một mình, rung nhẹ như không tin nổi
CAMERA  tĩnh, hơi lệch trục (Dutch 2°) để tạo cảm giác lệch
ELEMENT vòng nét đứt giữ nguyên; các vạch thước quanh nó nhấp nháy rồi tắt dần; nền đen sâu
CUT     fade to black hoàn toàn trong gap 2.0s

## S10 · C10 · CHƯƠNG 1
SCENE   Đài thiên văn vô tuyến đầu 1960: rừng chảo parabol quay chậm dưới bầu trời sao
CAMERA  crane lên từ chân chảo, 24mm, kết ở góc nhìn thấy cả 5 chảo cùng quay
ELEMENT 5 chảo parabol silhouette, tất cả quay ĐỒNG BỘ theo cùng một hướng thiên đỉnh;
        bầu trời sao trôi đúng chiều quay Trái Đất (đông → tây); tông đơn sắc lam xám, gần silhouette;
        KHÔNG bloom lên vành chảo
CUT     hoà tan sang S11 qua một lớp quét radar

## S11 · C11 · CHƯƠNG 1
SCENE   Bản đồ bầu trời vô tuyến: các nguồn hiện lên như những VỆT rộng, nhoè, trải dài
CAMERA  tĩnh, nhìn thẳng vào bản đồ phẳng; pan ngang rất chậm sang phải
ELEMENT bản đồ contour vô tuyến, 8 nguồn dạng vệt/đám mây đường kính 40–120px, mép nhoè;
        thang cường độ đơn sắc lam (0.22,0.40,0.62) → trắng ngà; lưới toạ độ mảnh 1px
CUT     pan tiếp sang S12, không cắt

## S12 · C12 · CHƯƠNG 1
SCENE   Giữa các vệt nhoè xuất hiện 3 nguồn KHÁC HẲN: chấm sắc nét, không vệt
CAMERA  dừng pan, push-in vào một trong ba chấm, 35mm → 75mm; kèm chuyển từ bản đồ vô tuyến sang ảnh quang học
ELEMENT 3 chấm điểm bán kính 3px, contour vô tuyến bó chặt quanh chúng (đối lập vệt rộng);
        cross-fade sang ảnh quang học cùng toạ độ: chỉ có một chấm sắc, PSF y hệt sao xung quanh
CUT     cắt sang S13

## S13 · C13 · CHƯƠNG 1 ★ CAO TRÀO — KHOẢNH KHẮC ĐẶT TÊN
SCENE   Cái chấm được ghi nhãn. Nhãn viết tay hiện dần bên cạnh, rồi bị gạch ngắn lại thành "quasar"
CAMERA  tĩnh tuyệt đối, chấm lệch trái 1/3, vùng nhãn bên phải; 75mm — khung tài liệu lưu trữ
ELEMENT nền chuyển sang tông phim ảnh thiên văn cũ (đen trắng ngả nâu, hạt film mảnh, seeded);
        nhãn hai tầng: dòng đầy đủ "quasi-stellar radio source" gõ ra từng ký tự, rồi hai đầu bị
        gạch bỏ bằng nét vẽ tay, còn lại "QUASAR" nở to; chữ cao 0.40 world @ cam 20 → ≈ 42px,
        nét 3px, luminance 0.72 (DƯỚI ngưỡng bloom 1.0 — chữ phải đọc rõ, không nhoè);
        chấm sáng giữ nguyên, không đổi — nó vẫn chỉ là một chấm, đó là điểm của shot
CUT     nhãn giữ 1s rồi mờ; cắt sang S14

## S14 · C14 · CHƯƠNG 1
SCENE   Máy quang phổ: ánh sáng chấm đi qua lăng kính, tán ra thành dải màu — nhưng dải đó sai
CAMERA  side-view sơ đồ quang học, tĩnh; 40mm
ELEMENT chùm tia trắng → lăng kính → dải quang phổ liên tục nằm ngang; trên dải xuất hiện các vạch tối
        nhưng ở vị trí LỘN XỘN, không khớp bất cứ mẫu nào; một dấu hỏi mảnh hiện cuối dải;
        dải phổ vẽ ở luminance ≤0.8 để vạch tối còn đọc được
CUT     giữ dải phổ, gap 1.5s; sang S15

## S15 · C15 · CHƯƠNG 1
SCENE   Camera lùi khỏi sơ đồ, khung tối lại, dải phổ còn lại một mình như một vật cần mổ xẻ
CAMERA  dolly-out chậm 40mm → 28mm, sơ đồ thu nhỏ vào giữa khung đen
ELEMENT chỉ còn dải quang phổ ngang, mờ đi 40%; nền đen; không sao, không gì khác
CUT     cắt sang S16 — vào phần giải thích

## S16 · C16 · CHƯƠNG 1
SCENE   Bài học vân tay: ánh sáng một ngôi sao bình thường tách ra, vạch hấp thụ hiện ở đúng chỗ
CAMERA  tĩnh, nhìn thẳng dải phổ chiếm 70% chiều ngang khung; 35mm
ELEMENT dải phổ liên tục đỏ→tím trái sang phải; 4 vạch tối Balmer của hydro rơi xuống đúng vị trí
        (Hα đỏ, Hβ lam lục, Hγ, Hδ tím) — khoảng cách giữa các vạch theo tỉ lệ THẬT, thu hẹp dần về phía tím;
        nhãn nguyên tố cao 0.30 world @ cam 22 → ≈ 26px, nét 2.2px; bên dưới thêm dải thứ hai: bộ vạch helium
        khác hẳn — hai bộ không lẫn được
CUT     cắt sang S17

## S17 · C17 · CHƯƠNG 1
SCENE   Ba phòng thí nghiệm ba nơi cho cùng một bộ vạch: ống nghiệm ở Trái Đất, lõi sao gần, lõi sao xa
CAMERA  tĩnh, ba dải phổ xếp chồng dọc, căn thẳng hàng theo trục bước sóng
ELEMENT ba dải phổ, vạch hydro rơi xuống ĐÚNG CÙNG MỘT CỘT ở cả ba — đường dóng dọc mảnh nối chúng;
        biểu tượng nguồn nhỏ bên trái mỗi dải (ống phóng điện / sao vàng / sao xa)
CUT     đường dóng dọc sáng lên rồi cắt sang S18

## S18 · C18 · CHƯƠNG 1
SCENE   Dải phổ quasar đặt vào cùng bảng dóng đó — các vạch rơi ra NGOÀI mọi cột đã biết
CAMERA  tĩnh, dải thứ tư trượt vào từ dưới lên, khớp vào bảng
ELEMENT dải quasar: vạch nằm lệch hẳn sang phải mọi cột dóng; các cột dóng của mọi nguyên tố đã biết
        lần lượt sáng lên rồi tắt (không khớp cái nào); màu cảnh báo cam đỏ (1.00,0.34,0.06) chớp ở mép
CUT     cắt sang S19

## S19 · C19 · CHƯƠNG 1
SCENE   Mấy năm bế tắc: những giả thuyết viết ra rồi bị gạch bỏ, chồng lên nhau
CAMERA  tĩnh hơi nghiêng, nhìn xuống mặt bàn giấy; 50mm
ELEMENT 5 dòng giả thuyết viết tay lần lượt hiện rồi bị gạch ngang, mỗi dòng cách nhau 0.6s;
        tông phim cũ như S13; giấy không trắng quá (luminance ≤0.62) để chữ đen đọc rõ
CUT     cắt sang S20 với một nhịp lặng

## S20 · C20 · CHƯƠNG 1 ★ CAO TRÀO — SỜ-MÍT 1963 (1/3)
SCENE   Một tấm kính quang phổ được đặt xuống bàn đèn. Bàn tay rút ra. Chỉ còn tấm kính sáng từ dưới lên
CAMERA  top-down thẳng đứng xuống bàn đèn, tĩnh tuyệt đối; 55mm; khung rất tĩnh để nhịp lặng đọng lại
ELEMENT tấm kính phổ hình chữ nhật hẹp, nền sáng mờ từ dưới (luminance 0.55 — KHÔNG để bàn đèn cháy trắng,
        đây là shot rủi ro nhất chương); vạch phổ tối rõ nét trên kính; nhãn "3C 273" ở góc kính,
        cao 0.26 world @ cam 18 → ≈ 24px, nét 2px; hạt film seeded, không animate ngẫu nhiên
CUT     hold 1 nhịp; cắt sang S21 (push-in vào chính tấm kính)

## S21 · C21–C23 · CHƯƠNG 1 ★ CAO TRÀO — SỜ-MÍT 1963 (2/3)
SCENE   Phép đo lật ngược: bộ vạch quasar được kéo trượt về phía đỏ và KHỚP hoàn hảo với bộ vạch hydro
CAMERA  push-in vào tấm kính 55mm → 80mm, rồi giữ; khung phẳng hoá thành sơ đồ phổ
ELEMENT hai hàng vạch: hàng trên = hydro phòng thí nghiệm (tham chiếu, đứng yên), hàng dưới = quasar;
        hàng dưới TRƯỢT SANG PHẢI như một khối cứng — ⚠ khoảng cách TƯƠNG ĐỐI giữa các vạch giữ nguyên
        theo tỉ lệ (dịch đỏ nhân bước sóng với (1+z), không cộng hằng số) — 4 vạch khớp đồng loạt,
        mỗi vạch khớp thì bật một tia sáng lục ngắn (0.40,1.00,0.28) 0.2s;
        độ trượt rất xa: hàng dưới đẩy ra gần mép phải khung, mức trượt đọc được bằng mắt;
        thước z hiện dần bên dưới, kim chạy tới ≈0.16; rồi thước đổi sang thang khoảng cách, kim
        vọt qua các mốc quen (1000 ly → 1 triệu ly → 2 tỉ năm ánh sáng) — kim vọt là nhịp KINH NGẠC
CUT     cả sơ đồ nén lại thành chấm sáng; giữ gap 2.0s trên nền đen

## S22 · C24–C25 · CHƯƠNG 1 ★ CAO TRÀO — SỜ-MÍT 1963 (3/3)
SCENE   Bài toán lật ngược: thang khoảng cách vũ trụ dựng lên, cái chấm bị ném ra tận rìa
CAMERA  pull-back cực dài từ chấm ra ngoài, xuyên qua nhiều lớp vỏ khoảng cách; 80mm → 18mm
ELEMENT các vỏ cầu đồng tâm bán kính tăng theo log: sao gần → Ngân Hà → nhóm thiên hà địa phương →
        các thiên hà xa (mỗi vỏ vẽ bằng thiên hà mờ dần); ở mỗi vỏ camera lùi qua, các thiên hà
        mờ đi rõ rệt (độ sáng ~1/d²); tới vỏ 2 tỉ ly các thiên hà gần như tắt hẳn (opacity 0.05)
CUT     giữ vỏ ngoài cùng sang S23

## S23 · C26–C27 · CHƯƠNG 1
SCENE   Ở cái vỏ mà thiên hà đã tắt, chấm quasar vẫn sáng rành rành. Một kính sân sau nhỏ bắt được nó
CAMERA  tĩnh ở vỏ ngoài cùng; rồi cắt chèn nhanh xuống mặt đất: silhouette một kính nghiệp dư nhỏ
ELEMENT nền là vỏ 2 tỉ ly với thiên hà opacity 0.05; chấm quasar giữ emissive 3.0 — tương phản tuyệt đối;
        chèn 1.2s: kính nghiệp dư silhouette trên nền trời, ống kính chĩa lên, một tia sáng đơn lẻ đi xuống;
        cuối shot mọi thứ tắt trừ chấm — và chấm đổi màu từ trắng sang ám lam tím (báo hiệu chương 2)
CUT     cắt cứng sang S24 — vào phòng máy

---

# CHƯƠNG 2 — ĐỘNG CƠ KHÔNG CHẠY BẰNG LỬA (C28–C67 · S24–S54)

## S24 · C28 · CHƯƠNG 2
SCENE   Nhãn chương. Chấm sáng biến thành một khối tối đang ù — chưa lộ hình, chỉ lộ nhịp
CAMERA  tĩnh, chấm giữa khung, xung quanh tối; rồi dolly-in rất chậm 30mm
ELEMENT nhãn chương chữ cao 0.44 world @ cam 20 → ≈ 46px, nét 3.2px, luminance 0.70 (dưới bloom);
        quanh chấm hiện những vòng nhiễu đồng tâm rất mờ, nhịp 0.8Hz — gợi máy đang chạy, chưa thấy máy
CUT     nhãn mờ; dolly tiếp sang S25

## S25 · C29 · CHƯƠNG 2
SCENE   Một dấu hỏi lớn về nguồn năng lượng, đặt cạnh biểu tượng phản ứng hạt nhân đang bị gạch
CAMERA  tĩnh, sơ đồ chiếm giữa khung; 34mm
ELEMENT biểu tượng lõi sao (hai hạt nhân H đang ép vào nhau) vẽ bằng nét mảnh; một nét gạch chéo
        cam đỏ (1.00,0.34,0.06) quét qua; nét gạch dày 3px để không tan trong bloom
CUT     cắt sang S26

## S26 · C30 · CHƯƠNG 2
SCENE   Cận cảnh hợp hạch: bốn proton ép lại thành một hạt helium, có chút khối lượng thoát ra
CAMERA  macro vào một điểm trong plasma; 85mm; xoay quanh trục dọc rất chậm
ELEMENT 4 quả cầu proton vàng cam (1.00,0.66,0.12) hội tụ theo xoắn ốc vào giữa; sản phẩm He lớn hơn
        nhưng thanh khối lượng bên cạnh THẤP HƠN tổng 4 thanh proton; phần chênh bay ra dạng 2 photon
        gamma lam (0.16,0.48,1.00); plasma nền FBM chậm, không nhấp nháy ngẫu nhiên
CUT     cắt sang S27

## S27 · C31–C32 · CHƯƠNG 2
SCENE   Con số 0,7%: một thanh khối lượng dài, chỉ một lát mỏng xíu ở đầu đổi màu thành năng lượng
CAMERA  tĩnh, thanh nằm ngang choán 80% khung; 30mm
ELEMENT thanh khối lượng dài 1000 đơn vị chia vạch; đúng 7 đơn vị ở đầu bật sáng vàng — lát sáng
        mỏng tới mức gần không thấy, đó là điểm của shot; số "0,7%" cao 0.38 world @ cam 22 → ≈ 34px;
        chèn nhanh: Mặt Trời với dòng số 4 triệu tấn/giây chảy xuống mép dưới đĩa
CUT     thanh co lại, cắt sang S28

## S28 · C33 · CHƯƠNG 2
SCENE   Thử nhồi sao: hàng nghìn ngôi sao bị dồn vào một quả cầu cỡ hệ Mặt Trời — chúng va vào nhau
CAMERA  dolly-in vào quả cầu, 26mm → 50mm; hơi rung khi va chạm bắt đầu
ELEMENT ~2000 sao particle bị nén vào bán kính hệ Mặt Trời; chúng chen chúc, một số cặp chạm nhau
        và biến dạng, thanh đo tổng độ sáng bên phải leo lên nhưng CHẠM TRẦN ở mức thấp hơn nhiều
        vạch đứt "cần đạt"; khoảng trống giữa thanh và vạch đứt là thông điệp
CUT     quả cầu tan rã, gap 1.5s; sang S29

## S29 · C34 · CHƯƠNG 2 ★ CÂU CHỐT CHƯƠNG
SCENE   Một câu hai vế trên nền đen: lửa bị tắt, "độ cao" bật lên
CAMERA  tĩnh tuyệt đối, chữ giữa khung; 24mm
ELEMENT hai khối chữ: vế "không phải lửa" — ngọn lửa nhỏ bên cạnh tắt phụt; vế "là độ cao" — một
        đường thẳng đứng dựng lên từ đáy khung; chữ cao 0.46 world @ cam 20 → ≈ 48px, nét 3.4px,
        luminance 0.72; nền đen hoàn toàn, KHÔNG bloom lên chữ
CUT     đường thẳng đứng kéo dài xuống dưới, dẫn sang S30

## S30 · C35–C36 · CHƯƠNG 2
SCENE   Kéo về mặt đất: một hòn đá thả rơi từ trên cao, chạm sàn, bật ra một vòng sóng âm
CAMERA  side-view tĩnh, hòn đá rơi dọc khung từ trên xuống; 35mm
ELEMENT hòn đá rơi theo gia tốc thật (y = h − ½gt², KHÔNG tuyến tính); thước độ cao bên trái vơi dần;
        khi chạm: vòng sóng đồng tâm lan ra + thanh năng lượng bên phải nảy lên đúng bằng phần
        thước độ cao đã mất — hai thanh phải khớp thị giác
CUT     lặp lại ngay ở S31 với độ cao gấp đôi

## S31 · C37 · CHƯƠNG 2
SCENE   Thả lại từ cao gấp ba: cùng hòn đá, tiếng đập lớn hơn hẳn
CAMERA  zoom-out để nhét vừa độ cao mới, 35mm → 20mm
ELEMENT ba lần thả xếp cạnh nhau trong cùng khung (h, 2h, 3h), ba thanh năng lượng cao dần tuyến tính
        theo h; nhãn "hấp dẫn không tạo năng lượng — nó thu thuế trên mỗi mét rơi" nhỏ ở đáy
CUT     sàn nhà nứt ra, đen ngòm bên dưới — dẫn sang S32

## S32 · C38 · CHƯƠNG 2
SCENE   Sàn nhà biến mất, thay bằng miệng một cái giếng hấp dẫn không đáy
CAMERA  tilt xuống nhìn vào giếng, rồi dolly-out để lộ hình phễu; 20mm → 26mm
ELEMENT lưới không-thời gian dạng phễu, đường lưới mảnh (0.22,0.40,0.62), độ sâu theo 1/r —
        phễu kéo xuống ngoài khung, KHÔNG vẽ đáy; nhãn khối lượng "1 tỉ Mặt Trời" ở miệng phễu;
        ⚠ hố đen ở đáy chỉ là vùng đen tuyệt đối, không viền phát sáng
CUT     gap 1.0s giữ phễu; sang S33

## S33 · C39 · CHƯƠNG 2
SCENE   Một hạt khí trượt xuống thành phễu, tăng tốc tới mức nhoè thành vệt
CAMERA  bám theo hạt trên đường trượt nhưng LUÔN Ở NGOÀI phễu, nhìn từ bên ngoài mặt lưới; 40mm
ELEMENT hạt khí đơn lẻ, vệt motion-trail dài dần theo v; đồng hồ tốc độ bên góc đọc theo phần trăm c,
        leo tới ~30% rồi dừng; ⚠ camera KHÔNG đi cùng hạt vào trong, dừng lại ở rìa và nhìn xuống
CUT     cắt sang S34

## S34 · C40 · CHƯƠNG 2
SCENE   Dừng khung: hạt bị đóng băng giữa đường rơi, một mũi tên ngang xuất hiện bên cạnh nó
CAMERA  tĩnh tuyệt đối, hạt lệch trái, khoảng trống bên phải cho mũi tên
ELEMENT hạt đóng băng; mũi tên vận tốc TIẾP TUYẾN vẽ vuông góc với hướng rơi, màu lục (0.40,1.00,0.28);
        quỹ đạo dự đoán đổi từ đường thẳng xuống sang đường cong vòng
CUT     mũi tên kéo hạt đi vòng — chuyển động liên tục sang S35

## S35 · C41 · CHƯƠNG 2
SCENE   Đám khí rơi tới bị cuốn vòng quanh, các quỹ đạo lệch nhau va chạm và dẹt dần thành đĩa
CAMERA  góc cao 55° nhìn xuống, xoay quanh trục dọc 40° trong suốt shot; 30mm
ELEMENT ~40.000 particle khí bắt đầu ở quỹ đạo ngẫu nhiên nghiêng đủ hướng (seeded), qua thời gian
        các thành phần vuông góc triệt tiêu nhau → toàn bộ dẹt về MỘT mặt phẳng; chiều quay đĩa
        cố định NGƯỢC CHIỀU KIM ĐỒNG HỒ nhìn từ cực bắc đĩa — quy ước giữ nguyên cả tập
CUT     đĩa hình thành xong, camera hạ thấp sang S36

## S36 · C42 · CHƯƠNG 2 ★ LỘ DIỆN ĐĨA BỒI TỤ
SCENE   Toàn cảnh đĩa bồi tụ lần đầu — vòng xoáy khổng lồ quanh một miệng tối
CAMERA  hạ từ 55° xuống 14° trên mặt phẳng đĩa (góc gần cạnh), dolly-out; 30mm → 24mm; luôn NGOÀI r_out
ELEMENT đĩa volumetric nhiều lớp, gradient nhiệt theo bán kính: rìa ngoài đỏ sâu (1.00,0.18,0.03) →
        cam (1.00,0.34,0.06) → vàng (1.00,0.66,0.12) → trong cùng lam tím (0.20,0.55,1.00);
        vận tốc góc Kepler (ω ∝ r^−1.5) — vòng trong quay nhanh thấy rõ so với vòng ngoài;
        **Doppler beaming**: nửa đĩa đang TIẾN về camera sáng gấp ~2.5× nửa lùi, đồng thời hơi lệch
        xanh; nửa lùi tối và ngả đỏ; TÂM là một đĩa đen tuyệt đối, đường kính ≤4% đường kính đĩa,
        không viền sáng bao quanh; **thấu kính tiết chế**: mép sau của đĩa cong nhẹ lên trên tâm,
        cung ≤25°, không warp toàn khung;
        ⚠ chống cháy trắng: vành trong dùng emissive cao + độ dày quang học thấp, thêm vân xoắn
        FBM tần số cao để phá mảng bệt; không quá 12% khung có luminance >0.85
CUT     giữ khung, chuyển sang S37 bằng push-in

## S37 · C43 · CHƯƠNG 2
SCENE   Cận cảnh hai vòng khí liền kề trượt qua nhau — cắt lớp đĩa
CAMERA  push-in vào một cung đĩa, 24mm → 70mm; camera nằm trên mặt phẳng đĩa nhưng ở NGOÀI rìa
ELEMENT hai dải khí song song, dải trong chạy nhanh hơn rõ rệt; ở mặt tiếp xúc sinh xoáy Kelvin–Helmholtz
        (cuộn sóng đều, seeded, không random); vector vận tốc mảnh vẽ chênh lệch giữa hai dải
CUT     vùng tiếp xúc sáng lên, cắt sang S38

## S38 · C44 · CHƯƠNG 2
SCENE   Ma sát nung đĩa: thang nhiệt chạy từ đỏ lên trắng xanh, đồng thời phổ phát xạ trượt sang tử ngoại/tia X
CAMERA  hai lớp: đĩa nền + overlay phổ ở nửa dưới khung; camera tĩnh
ELEMENT đĩa đổi màu theo nhiệt: vùng trong chuyển từ vàng sang lam tím (0.20,0.55,1.00) khi nhiệt kế
        leo tới hàng triệu độ; overlay: đường cong vật đen dịch đỉnh sang trái (bước sóng ngắn), vượt
        khỏi dải nhìn thấy vào UV rồi X — dải nhìn thấy được tô nhạt để thấy rõ đỉnh đã ra ngoài nó;
        ⚠ dùng màu lam tím bão hoà chứ không dùng trắng, để tránh cháy khung
CUT     overlay phổ mờ; cắt sang S39

## S39 · C45 · CHƯƠNG 2 ★ CÂU CHỐT "CÁI ĐĨA ẤY LÀ THỨ TÔI THẤY"
SCENE   Khung chia rành mạch: đĩa rực sáng bao quanh một vùng đen tuyệt đối. Vùng đen được khoanh riêng
CAMERA  tĩnh tuyệt đối, chính diện hơi nghiêng 20°, đĩa choán khung; 34mm
ELEMENT đĩa giữ nguyên gradient nhiệt; một vòng khoanh mảnh lục (0.40,1.00,0.28) bao lấy vùng đen ở tâm
        với nhãn "hố đen — luôn đen"; một vòng khoanh thứ hai bao lấy vành đĩa với nhãn "thứ tôi thấy";
        vùng đen KHÔNG phát gì, KHÔNG có glow rìa, KHÔNG photon ring — chỉ là một lỗ;
        phần sáng là khí đang bị xé: các sợi khí kéo dài, cắt vụn dần khi tiến vào trong
CUT     hai nhãn tắt; gap 1.5s giữ đĩa; sang S40

## S40 · C46 · CHƯƠNG 2
SCENE   Thử phóng to bằng kính: ảnh chấm sáng zoom mãi nhưng chỉ nở thành đốm PSF nhoè, không thành hình
CAMERA  zoom kỹ thuật số liên tục vào chấm, 5 nấc, mỗi nấc pixel to gấp đôi
ELEMENT đốm PSF có vân nhiễu xạ (Airy) chuẩn; mỗi nấc zoom pixel vuông hiện rõ dần, thông tin KHÔNG tăng;
        thanh "độ phân giải góc" bên dưới chạm trần và dừng
CUT     zoom dừng đột ngột; cắt sang S41

## S41 · C47 · CHƯƠNG 2
SCENE   Chuyển hướng: bỏ hình ảnh, chỉ giữ MỘT con số — độ sáng — và theo dõi nó theo thời gian
CAMERA  tĩnh; đốm PSF nén lại thành một điểm rồi thành một chấm trên trục graph
ELEMENT khung graph dựng lên: trục hoành thời gian, trục tung độ sáng; lưới lam xám (0.22,0.40,0.62)
        nét 1.6px; nhãn trục cao 0.30 world @ cam 22 → ≈ 26px, nét 2.2px, luminance 0.68 (dưới bloom)
CUT     graph giữ, đường cong bắt đầu chạy ở S42

## S42 · C48 · CHƯƠNG 2 ★ CAO TRÀO — LẬP LUẬN NHẤP NHÁY (1/4)
SCENE   Ba đường cong độ sáng thật chạy trên cùng khung graph: biến thiên tháng / ngày / giờ
CAMERA  tĩnh tuyệt đối — graph phải ĐỌC ĐƯỢC TRONG 3 GIÂY, không camera move
ELEMENT ba đường cong vẽ lần lượt trái sang phải, cùng biên độ nhưng chu kỳ khác nhau 30×;
        thang thời gian trục hoành đổi nhãn theo từng đường (tháng → ngày → giờ), mốc nhãn bật sáng khi đổi;
        đường "vài giờ" vẽ đậm nhất (nét 3px) vì nó là nhân vật chính; màu lục (0.40,1.00,0.28) cho
        đường chủ đạo, hai đường kia lam xám nhạt hơn
CUT     hai đường mờ đi, chỉ giữ đường "vài giờ"; sang S43

## S43 · C49–C50 · CHƯƠNG 2 ★ CAO TRÀO — LẬP LUẬN NHẤP NHÁY (2/4)
SCENE   Cơ chế: một vật rộng bật sáng đồng loạt, ánh sáng từ mép xa tới sau mép gần → cú sáng bị nhoè
CAMERA  side-view sơ đồ, tĩnh; vật ở trái, người quan sát ở phải; 30mm
ELEMENT quả cầu phát sáng bề ngang D; tại t=0 TOÀN BỘ bề mặt bật sáng cùng lúc (không phải lan dần);
        ba mặt sóng cầu rời ra từ mép gần / tâm / mép xa, đi CÙNG TỐC ĐỘ nhưng lệch pha theo quãng đường;
        bên phải đồng thời vẽ tín hiệu nhận được: ba xung chồng lên nhau thành MỘT xung bị kéo rộng
        đúng bằng D/c; thanh D/c dóng thẳng xuống bề rộng xung — dóng phải rõ, đó là toàn bộ lập luận;
        ⚠ thấu kính không dùng ở đây, sơ đồ phẳng Euclid
CUT     giữ sơ đồ; sang S44

## S44 · C51 · CHƯƠNG 2 ★ CAO TRÀO — LẬP LUẬN NHẤP NHÁY (3/4)
SCENE   Phản chứng: một vật rộng 1 năm ánh sáng thử chớp trong 1 ngày — xung bị nhoè thành 1 năm
CAMERA  tĩnh, cùng bố cục S43 để so sánh trực tiếp
ELEMENT bên trái: quả cầu D = 1 ly; bên phải: xung vào là gai nhọn 1 ngày (vẽ mảnh, cao), xung ra là
        bướu rộng 1 năm (thấp, bè) — hai hình vẽ cùng diện tích để thấy năng lượng không mất, chỉ bị trải;
        dấu X cam đỏ (1.00,0.34,0.06) đè lên kịch bản này
CUT     cắt sang S45 — đảo ngược lập luận

## S45 · C52–C53 · CHƯƠNG 2 ★ CAO TRÀO — LẬP LUẬN NHẤP NHÁY (4/4)
SCENE   Đảo ngược: đo được nhịp vài giờ → suy ra bề ngang ≤ vài giờ ánh sáng. Thước đó đặt lên hệ Mặt Trời
CAMERA  tĩnh rồi zoom-out nhẹ để hệ Mặt Trời trượt vào khung; 34mm → 26mm
ELEMENT mũi tên suy luận hai chiều: từ "Δt = vài giờ" → "D ≤ c·Δt"; kết quả D vẽ thành một đoạn thẳng,
        rồi đoạn thẳng ấy được đặt chồng lên hệ Mặt Trời — nó chỉ vừa vặn tới quỹ đạo Hải Vương
        (4 giờ ánh sáng, vẽ đúng tỉ lệ); các quỹ đạo hành tinh vẽ nét mảnh 1.4px, đúng chiều quay
        (ngược kim đồng hồ nhìn từ bắc hoàng đạo)
CUT     cắt sang S46

## S46 · C54 · CHƯƠNG 2
SCENE   Chồng hai vật: cái máy sáng hơn cả thiên hà, nằm gọn trong vòng quỹ đạo Hải Vương
CAMERA  pull-back từ hệ Mặt Trời cho tới khi cả thiên hà lọt khung; 26mm → 18mm
ELEMENT thiên hà chiếu mờ phía sau (opacity 0.3), vòng hệ Mặt Trời vẽ đè lên tâm nó — nhỏ tới mức
        gần như một điểm; thanh độ sáng của hai vật cạnh nhau, thanh của điểm nhỏ cao hơn hẳn
CUT     gap 2.0s trên khung này; sang S47

## S47 · C55 · CHƯƠNG 2
SCENE   Chuyển nhịp sang khối số liệu: khung tối lại, chuẩn bị nền cho graph hiệu suất
CAMERA  tĩnh, mọi thứ mờ về đen trừ một đường ngang mảnh ở giữa khung
ELEMENT đường cơ sở ngang nét 2px màu lam xám; nền đen sâu, bloom tắt gần hết ở shot này
CUT     đường cơ sở giữ nguyên, thanh mọc lên ở S48

## S48 · C56 · CHƯƠNG 2 ★ CAO TRÀO — HIỆU SUẤT (1/3)
SCENE   Thanh thứ nhất: hợp hạch 0,7%. Một vạch gần như không nhấc khỏi đường cơ sở
CAMERA  tĩnh tuyệt đối, graph chiếm 75% khung; đọc được trong 3 giây
ELEMENT thanh dọc chiều cao tỉ lệ THẬT với 0,7% trên thang 0–30% → cao đúng 2,3% chiều cao vùng graph;
        màu vàng cam (1.00,0.66,0.12); nhãn "0,7% — hợp hạch" cao 0.34 world @ cam 22 → ≈ 30px,
        nét 2.4px, luminance 0.70; biểu tượng ngôi sao nhỏ trên đỉnh thanh
CUT     giữ thanh 1; thanh 2 mọc ở S49

## S49 · C57 · CHƯƠNG 2 ★ CAO TRÀO — HIỆU SUẤT (2/3)
SCENE   Thanh thứ hai: bồi tụ 6–30%, mọc vọt lên, vẽ thành một DẢI vì phụ thuộc spin hố đen
CAMERA  tĩnh, cùng khung S48 — không đổi khung là điều làm so sánh đọc được
ELEMENT thanh 2 mọc từ 0 lên 6% rồi tiếp tục lên 30%, vùng giữa tô dải gradient (không phải một giá trị);
        màu lam tím (0.20,0.55,1.00); bên cạnh một mũi tên spin hố đen quay nhanh dần, thanh cao theo;
        thanh 1 vẫn đứng nguyên bên trái để đối chiếu — chênh lệch chiều cao phải áp đảo
CUT     giữ cả hai thanh; sang S50

## S50 · C58 · CHƯƠNG 2 ★ CAO TRÀO — HIỆU SUẤT (3/3)
SCENE   Tỉ số được viết ra: gấp 10 lần, có khi gấp 40 lần
CAMERA  tĩnh, zoom nhẹ vào khoảng cách giữa hai đỉnh thanh; 30mm → 40mm
ELEMENT dấu ngoặc dọc nối hai đỉnh, nhãn "×10 … ×40" ở giữa; thanh 1 nhân bản 10 lần rồi 40 lần xếp
        chồng lên nhau để chạm đỉnh thanh 2 — đống thanh mỏng xếp chồng là hình ảnh chốt
CUT     cắt sang S51

## S51 · C59 · CHƯƠNG 2
SCENE   Bảng xếp hạng hiệu suất: chỉ có một mục đứng trên bồi tụ — vật chất gặp phản vật chất
CAMERA  tĩnh, bảng ba hàng xếp dọc; 28mm
ELEMENT hàng 1 (100%): hai quả cầu đối xứng gương lao vào nhau và biến mất hoàn toàn thành bức xạ;
        hàng 2 (6–30%): biểu tượng đĩa bồi tụ; hàng 3 (0,7%): biểu tượng ngôi sao;
        hàng 1 sáng loé rồi tắt hẳn — nhấn rằng nó hiếm, không phải cơ chế thường trực của vũ trụ
CUT     hàng 1 và 3 mờ, còn hàng 2; sang S52

## S52 · C60–C61 · CHƯƠNG 2
SCENE   Kẻ ăn tạp: đủ loại vật chất rơi vào đĩa — khí, bụi, hành tinh lạc, một ngôi sao đi quá gần
CAMERA  góc cao 45° nhìn xuống đĩa, xoay quanh 30°; 26mm; luôn ngoài r_out
ELEMENT dòng khí + bụi rót vào rìa đĩa theo xoắn ốc; một hành tinh đơn lẻ bị cuốn, kéo thành sợi khi
        vào gần; một ngôi sao đi ngang bị kéo thành dòng thuỷ triều dài (tidal stream) quấn quanh đĩa —
        stream kéo dài vài vòng trước khi hoà vào đĩa, KHÔNG nổ tung; thanh "khối lượng đã nuốt" tăng đều
CUT     gap 1.5s; camera bắt đầu ngẩng lên ở S53

## S53 · C62–C63 · CHƯƠNG 2
SCENE   Không phải tất cả rơi xuống được: từ trường xoắn quanh đĩa, vắt một phần khí ngược ra hai cực
CAMERA  ngẩng dần từ mặt phẳng đĩa lên, để lộ vùng trên/dưới; 26mm; giữ khoảng cách xa
ELEMENT đường sức từ vẽ dạng xoắn ốc kép quấn quanh trục đĩa, độ xoắn tăng theo tốc độ quay;
        các particle khí bị bắt vào đường sức, trượt dọc theo đó ra khỏi mặt phẳng; hai hướng thoát
        duy nhất là ±trục quay, VUÔNG GÓC mặt phẳng đĩa (quy ước bắt buộc)
CUT     dòng khí thoát ra tăng tốc; nổ thành jet ở S54

## S54 · C64 · CHƯƠNG 2
SCENE   Hai jet phóng ra từ hai cực, đối xứng, gần tốc độ ánh sáng
CAMERA  side-view hoàn toàn (trục đĩa dọc khung), dolly-out theo chiều dài jet; 40mm → 20mm
ELEMENT hai tia đối xứng qua mặt phẳng đĩa, phun từ vùng sát trục quay; jet có cấu trúc nút (knots)
        sáng cách quãng đều, di chuyển ra ngoài; màu lam (0.16,0.48,1.00) ở lõi, ngả tím
        (0.42,0.14,1.00) ở bao ngoài; bao jet có sốc chéo (diamond shock) mờ;
        ⚠ jet CHẶT và hẹp (góc mở ≤5°), không xoè như đám mây
CUT     dolly-out tiếp, không cắt, sang S55

## S55 · C65 · CHƯƠNG 2 ★ CAO TRÀO — JET 200.000 NĂM ÁNH SÁNG (1/2)
SCENE   Camera lùi mãi dọc theo jet; jet cứ kéo dài, thiên hà chủ xuất hiện và tụt lại phía sau
CAMERA  dolly-out cực dài, liên tục, không cắt, 20mm → 12mm; jet luôn nằm chéo khung
ELEMENT jet vẽ đúng tỉ lệ: khi thiên hà chủ (đường kính 100.000 ly) lọt khung, jet đã dài gấp đôi nó;
        thanh thước động chạy dọc jet, số đếm leo 10.000 → 50.000 → 200.000 ly;
        thiên hà chủ mờ và bị ánh chói của nhân che một phần (quy ước: vùng trong 5.000 ly bị
        ánh chói nhân làm bạc màu, không đọc được cấu trúc nhánh);
        nhãn "3C 273 · 1963" nhỏ ở góc nối lại với S20–S21
CUT     dolly-out dừng, giữ khung ở S56

## S56 · C66–C67 · CHƯƠNG 2 ★ CAO TRÀO — JET 200.000 NĂM ÁNH SÁNG (2/2)
SCENE   Khung đứng yên để con số đứng một mình: jet đặt cạnh dải Ngân Hà vẽ đúng tỉ lệ
CAMERA  tĩnh tuyệt đối; jet ngang khung, Ngân Hà nhìn nghiêng đặt bên dưới làm thước
ELEMENT dải Ngân Hà nhìn nghiêng dài 100.000 ly đặt song song dưới jet — jet dài gấp đôi, thò hẳn
        ra hai đầu; vòng nhỏ đánh dấu nguồn phát ở giữa jet, phóng đại inset: vòng quỹ đạo Hải Vương;
        chênh lệch 10^9 lần giữa nguồn và sản phẩm là thông điệp; nhãn số cao 0.40 world @ cam 18 →
        ≈ 40px, nét 3px, luminance 0.70
CUT     mọi thứ mờ về đen trừ chấm sáng ban đầu; sang chương 3

---

# CHƯƠNG 3 — ÁNH SÁNG CỦA MỘT THỨ ĐÃ TẮT (C68–C103 · S57–S79)

## S57 · C68 · CHƯƠNG 3
SCENE   Nhãn chương trên nền gần như trống. Âm rút, hình cũng rút — chỉ còn chấm sáng và khoảng đen
CAMERA  tĩnh; chấm sáng nhỏ lại còn vài pixel; 30mm
ELEMENT nhãn chương cao 0.44 world @ cam 20 → ≈ 46px, nét 3.2px, luminance 0.68; chấm sáng emissive
        giảm còn 1.6 (dịu hơn cả tập cho tới giờ); nền đen sâu, bloom gần tắt
CUT     nhãn mờ; cắt sang S58

## S58 · C69 · CHƯƠNG 3 ★ CAO TRÀO — BẢN ĐỒ QUASAR (1/4)
SCENE   Bản đồ 3D vị trí quasar dựng lên quanh vị trí người quan sát — chúng dồn hết về phía xa
CAMERA  bắt đầu ở tâm (vị trí quan sát) nhìn ra, rồi pull-back ra NGOÀI khối cầu để thấy phân bố; 22mm
ELEMENT ~3000 điểm quasar trong khối cầu, mật độ là hàm của bán kính: thưa ở lõi, dày ở vỏ trung gian;
        một chấm đánh dấu "ở đây" tại tâm; điểm quasar màu lam tím (0.20,0.55,1.00), kích thước
        giảm theo khoảng cách
CUT     giữ khối cầu quay chậm; sang S59

## S59 · C70 · CHƯƠNG 3 ★ CAO TRÀO — BẢN ĐỒ QUASAR (2/4)
SCENE   Cắt lát khối cầu thành các vỏ đồng tâm; mỗi vỏ có một thanh đếm mật độ
CAMERA  khối cầu tách thành 6 vỏ, camera xoay quanh 60° để thấy lớp lang; 22mm
ELEMENT 6 vỏ đồng tâm bán kính tăng dần; thanh đếm bên phải mỗi vỏ: vỏ 1 thấp, vỏ 2–3 cao dần,
        vỏ 4 cao nhất, vỏ 5–6 thấp lại — hình chuông phải đọc được ngay bằng chiều cao thanh
CUT     các vỏ duỗi thẳng ra thành một trục ở S60

## S60 · C71 · CHƯƠNG 3 ★ CAO TRÀO — BẢN ĐỒ QUASAR (3/4) · CÚ LẬT NGHĨA
SCENE   Trục khoảng cách LẬT thành trục thời gian. Cùng một dữ liệu, đổi nhãn, đổi hẳn ý nghĩa
CAMERA  tĩnh tuyệt đối — cú lật nằm ở nhãn, không ở camera
ELEMENT các vỏ duỗi thành một thanh ngang; nhãn trục xoay 180° từ "khoảng cách (tỉ ly)" sang
        "thời gian nhìn ngược (tỉ năm trước)"; các con số trên trục đổi nhưng VỊ TRÍ dữ liệu không đổi —
        đó là toàn bộ điểm; nhãn cao 0.34 world @ cam 22 → ≈ 30px, nét 2.4px, luminance 0.68
CUT     gap 1.5s giữ trục; sang S61

## S61 · C72 · CHƯƠNG 3
SCENE   Lý do: ánh sáng đi hữu hạn. Một chùm photon rời một thiên hà xa và bò dọc trục thời gian
CAMERA  side-view trục thời gian nằm ngang; camera bám chùm photon, pan phải sang trái; 28mm
ELEMENT thiên hà nguồn ở đầu trái trục (10 tỉ năm trước), mắt người quan sát ở đầu phải (nay);
        chùm photon là một gói sóng nhỏ bò với tốc độ HẰNG trên trục; thanh "tuổi của ảnh" tăng theo
        quãng đường đã đi; thiên hà nguồn phía sau vẫn tiếp tục già đi (màu ngả đỏ) trong lúc photon còn đi
CUT     photon còn giữa đường; cắt sang S62

## S62 · C73–C74 · CHƯƠNG 3
SCENE   Kết luận: quasar không phải một LOẠI vật thể, nó là một GIAI ĐOẠN — vẽ thành một dải trên trục thời gian
CAMERA  tĩnh, trục thời gian ngang khung
ELEMENT trục thời gian toàn vũ trụ; một dải tô lam tím phủ khoảng 8–13 tỉ năm trước, nhạt dần về hai phía;
        phần "nay" gần như trắng trơn; hai nhãn đối lập "loại vật thể" (bị gạch) và "giai đoạn" (giữ lại)
CUT     gap 2.0s; sang S63

## S63 · C75 · CHƯƠNG 3 ★ CAO TRÀO — ĐỈNH QUASAR ~10 TỈ NĂM (4/4)
SCENE   Đường cong mật độ quasar theo thời gian vũ trụ, đỉnh dựng lên rõ ở ~10 tỉ năm trước
CAMERA  tĩnh tuyệt đối; graph chiếm 80% khung; đọc được trong 3 giây
ELEMENT trục hoành: tuổi vũ trụ 0 → 13,8 tỉ năm (mốc "nay" ở mép phải); trục tung: mật độ quasar;
        đường cong lên nhanh, đỉnh nhọn ở tuổi ≈3–4 tỉ năm (= 10 tỉ năm trước), rồi tụt dài xuống
        gần 0 ở "nay"; vùng dưới đường tô gradient lam tím; một kim dọc đứng ở "nay" cho thấy ta ở
        rìa phải, dưới đáy dốc; nhãn "đỉnh: ~10 tỉ năm trước" cao 0.36 world @ cam 22 → ≈ 32px,
        nét 2.6px, luminance 0.70 (dưới bloom — graph phải sắc nét)
CUT     graph mờ đi nhưng đỉnh còn lại làm điểm sáng; cắt sang S64

## S64 · C76–C77 · CHƯƠNG 3
SCENE   Vũ trụ trẻ: các thiên hà còn ngập khí, đang va vào nhau, khí đổ ập về trung tâm
CAMERA  góc rộng nhìn một cụm thiên hà trẻ; drift chậm giữa chúng; 22mm
ELEMENT 5–7 thiên hà trẻ hình dạng méo, nhiều khí lam (0.34,0.58,1.00), ít cấu trúc xoắn gọn;
        hai cái đang va chạm — cầu thuỷ triều nối giữa chúng, khí chảy dọc cầu; ở thiên hà va chạm,
        dòng khí xoáy về tâm theo xoắn ốc rõ ràng
CUT     push-in vào tâm một thiên hà va chạm sang S65

## S65 · C78 · CHƯƠNG 3
SCENE   Khí rót tới tâm; một đĩa bồi tụ hình thành và BẬT SÁNG
CAMERA  push-in 22mm → 45mm vào tâm; dừng ở ngoài rìa đĩa
ELEMENT khí tụ → đĩa hình thành (cùng chiều quay quy ước) → nhiệt leo → toàn đĩa bật sáng trong 1.2s;
        nhân sáng lên làm cả thiên hà chủ bị bạc màu ở vùng trong; ⚠ khoảnh khắc bật sáng là điểm
        rủi ro cháy trắng — dùng tăng emissive + nở halo, KHÔNG nâng độ trắng toàn đĩa; giới hạn 12%
CUT     zoom-out cực nhanh sang S66

## S66 · C79 · CHƯƠNG 3
SCENE   Toàn cảnh vũ trụ trẻ lốm đốm hàng triệu ngọn đèn bật sáng
CAMERA  pull-back rất rộng qua nhiều lớp thiên hà; 45mm → 14mm
ELEMENT hàng nghìn thiên hà trẻ, mỗi cái có một điểm nhân sáng lam tím; các điểm bật sáng lệch pha
        nhau (seeded) tạo cảm giác lốm đốm; ⚠ mỗi điểm nhỏ, tổng diện tích sáng kiểm soát dưới 12% khung
CUT     gap 1.0s giữ toàn cảnh; sang S67

## S67 · C80 · CHƯƠNG 3
SCENE   Một câu ngắn: khí hết. Toàn cảnh ngọn đèn bắt đầu tắt dần từng cái
CAMERA  tĩnh, giữ nguyên khung S66
ELEMENT các điểm nhân tắt lần lượt theo thứ tự seeded, không đồng loạt; số đếm "đèn còn sáng" giảm
        ở góc khung; nền thiên hà chuyển dần từ lam sang cam đỏ (1.00,0.42,0.16) — khí thành sao, sao già đi
CUT     cắt vào cận cảnh một thiên hà ở S68

## S68 · C81 · CHƯƠNG 3
SCENE   Ba đường khí biến mất, vẽ thành ba nhánh chảy ra từ một bể chứa
CAMERA  tĩnh, sơ đồ dòng chảy; 26mm
ELEMENT bể "khí tự do" vơi dần; ba nhánh: (1) nuốt vào hố đen, (2) đông thành sao, (3) bị bức xạ
        đĩa thổi văng ra khỏi thiên hà — nhánh 3 vẽ thành gió thoát hướng ra ngoài, nguồn đẩy CHÍNH LÀ
        đĩa (mũi tên vòng ngược lại chỉ vào nguồn thức ăn của nó — vòng lặp tự cắt)
CUT     bể cạn; cắt sang S69

## S69 · C82 · CHƯƠNG 3
SCENE   Đĩa bồi tụ cạn dần: các vành ngoài mỏng đi, nhiệt tụt, màu trôi ngược từ lam tím về đỏ rồi tối
CAMERA  góc cao 40° nhìn xuống đĩa, tĩnh; 34mm; ngoài r_out
ELEMENT đĩa mất khối lượng dần: mật độ particle giảm, vành trong rỗng ra trước; gradient nhiệt trôi
        NGƯỢC chiều S38 (lam tím → vàng → cam → đỏ sâu → tối); Doppler beaming yếu dần cùng độ sáng
CUT     đĩa gần như tắt; cắt sang S70

## S70 · C83 · CHƯƠNG 3
SCENE   Còn lại: một vùng đen ở giữa vòng khí tàn, không mất gì, chỉ thôi sáng
CAMERA  tĩnh tuyệt đối, chính diện hơi nghiêng; 34mm
ELEMENT vùng đen tâm giữ nguyên đường kính y hệt lúc đĩa còn rực (đo bằng vòng khoanh mảnh đối chiếu
        với S39 — cùng kích thước); quanh nó chỉ còn vài sợi khí lạnh đỏ sẫm trôi chậm
CUT     gap 2.0s; fade gần đen; sang S71

## S71 · C84–C85 · CHƯƠNG 3 ★ CÚ LẬT DI ẢNH (1/8)
SCENE   Quay lại chấm sáng của đêm nay. Một tia sáng đơn lẻ tới và chạm vào cảm biến
CAMERA  tĩnh, chấm sáng giữa khung như S04; 30mm
ELEMENT chấm sáng trở lại emissive 2.4; một sợi tia mảnh duy nhất đi từ chấm xuống một tấm cảm biến
        vẽ ở mép dưới khung; tấm cảm biến là lưới pixel, một pixel sáng lên
CUT     camera quay ngược dọc theo tia sang S72

## S72 · C86 · CHƯƠNG 3 ★ CÚ LẬT DI ẢNH (2/8)
SCENE   Mười tỉ năm trước: chưa có Mặt Trời, chưa có Trái Đất — chỉ là đám bụi trôi ở một góc thiên hà khác
CAMERA  cắt sang một vùng thiên hà trẻ; drift chậm qua đám mây phân tử; 28mm
ELEMENT đám mây phân tử tối, chưa co lại; ba vị trí được khoanh mờ với nhãn bị gạch chéo:
        "Mặt Trời — chưa có", "Trái Đất — chưa có"; nền thiên hà trẻ nhiều khí lam
CUT     cắt ngược lên tia sáng đang đi ở S73

## S73 · C87 · CHƯƠNG 3 ★ CÚ LẬT DI ẢNH (3/8)
SCENE   Chùm sáng lên đường: băng qua khoảng trống, đi ngang những thiên hà chưa ai từng thấy
CAMERA  bám chùm sáng từ bên hông, travelling ngang liên tục sang phải; 35mm; tốc độ camera HẰNG
ELEMENT gói sóng ánh sáng là một dải mảnh sáng lam tím, bước sóng vẽ được; nó lướt qua các thiên hà
        nền trôi ngược; bước sóng của gói GIÃN dần rất chậm (dịch đỏ do giãn nở) — cuối shot đã
        ngả sang cam (1.00,0.42,0.16); thanh "năng lượng còn lại" giảm nhẹ, chỉ do giãn nở
CUT     travelling liên tục sang S74 — không cắt, chỉ đổi lớp nền

## S74 · C88 · CHƯƠNG 3 ★ CÚ LẬT DI ẢNH (4/8)
SCENE   Trong lúc chùm sáng đi: Mặt Trời châm lửa, Trái Đất nguội thành đá, đại dương đầy, sự sống tự sao chép
CAMERA  giữ travelling ngang không đổi; các cảnh Trái Đất hiện ở dải dưới khung như một băng thời gian
ELEMENT chùm sáng giữ nguyên ở dải trên (liên tục, không ngắt); dải dưới chạy 4 cảnh ngắn nối tiếp:
        Mặt Trời bật sáng / Trái Đất từ magma sang vỏ đá / đại dương dâng / một chuỗi phân tử tự tách đôi;
        tương phản nhịp là điểm: dải trên KHÔNG đổi, dải dưới đổi liên tục
CUT     travelling tiếp sang S75

## S75 · C89 · CHƯƠNG 3 ★ CÚ LẬT DI ẢNH (5/8)
SCENE   Vẫn chùm sáng đó; dải dưới chạy qua lịch sử loài người, kết ở một kính thiên văn
CAMERA  travelling ngang không đổi, bắt đầu chậm dần ở cuối shot
ELEMENT dải dưới: lửa trại / nét chữ khắc / silhouette thành phố / ống kính thiên văn dựng lên —
        mỗi cảnh 0.8s, vẽ silhouette đơn sắc để không tranh chấp với dải trên;
        chùm sáng dải trên giờ đã ngả đỏ hẳn
CUT     travelling dừng hẳn; nhịp lặng; sang S76

## S76 · C90 · CHƯƠNG 3 ★ CÚ LẬT DI ẢNH (6/8)
SCENE   Chùm sáng chạm cảm biến. Hành trình 10 tỉ năm kết thúc ở một pixel
CAMERA  push-in cực nhanh vào tấm cảm biến, 35mm → 90mm, dừng khựng ở một pixel đơn
ELEMENT dải sáng thu hẹp lại thành một điểm rồi rơi vào một ô pixel; ô đó sáng lên; xung quanh
        các ô khác tối; tiếng chạm được diễn tả bằng một vòng sáng lan ra rồi tắt trong 0.3s
SFX     một tiếng "chạm" rất khẽ, đơn lẻ — hiệu ứng riêng duy nhất của chương 3
CUT     gap 1.5s giữ pixel sáng; sang S77

## S77 · C91–C94 · CHƯƠNG 3 ★ CÚ LẬT DI ẢNH (7/8)
SCENE   Song song hai khung: bên trái chấm sáng đêm nay; bên phải nơi đó BÂY GIỜ — một thiên hà già, tối ở tâm
CAMERA  tĩnh, split dọc; hai nửa không bao giờ giao nhau
ELEMENT trái: chấm sáng rực (ảnh cũ), nhãn "ánh sáng: 10 tỉ năm tuổi";
        phải: thiên hà elip già, sao đỏ cam (1.00,0.42,0.16), không khí tự do, tâm là một vùng tối
        không phát gì, nhãn "hiện trạng: không thể nhìn thấy";
        giữa hai nửa một thanh "cần thêm 10 tỉ năm nữa để ánh sáng này tới" — thanh rỗng hoàn toàn;
        thêm thước tuổi đời quasar (vài chục–vài trăm triệu năm) đặt cạnh thước 10 tỉ năm để thấy
        tỉ lệ chênh hàng chục–hàng trăm lần
CUT     nửa phải mờ đi; cắt sang S78

## S78 · C95–C97 · CHƯƠNG 3 ★ CÚ LẬT DI ẢNH (8/8) — PHÒNG CHIẾU
SCENE   Bầu trời đầy quasar hoá thành một phòng chiếu: mỗi chấm là một cuộn phim cũ vẫn đang chạy
CAMERA  pull-back từ chấm ra toàn bầu trời; 90mm → 18mm; rồi giữ tĩnh
ELEMENT mỗi chấm quasar trên trời được vẽ kèm một vệt chiếu rất mờ hướng về phía người xem
        (như luồng máy chiếu trong bụi); vài chấm có khung phim mờ chồng lên; một cần gạt "TẮT"
        hiện rồi mờ đi vì không có gì để tắt — nguồn phát đã tắt từ lâu, chỉ có chùm sáng còn đi;
        ⚠ vệt chiếu opacity ≤0.12 để không cháy khung
CUT     vệt chiếu mờ dần; gap 1.5s; sang S79

## S79 · C98–C101 · CHƯƠNG 3
SCENE   Bảng kiểm "không có gì bị xoá": khí vẫn còn (đã thành sao), năng lượng vẫn đang đi, chỉ điều kiện hết
CAMERA  tĩnh, ba mục xếp dọc, mỗi mục là một ô hình nhỏ; 26mm
ELEMENT mục 1: khí → sao (đám mây chuyển thành các điểm sao, tổng khối lượng thanh giữ nguyên);
        mục 2: chùm năng lượng vẫn đang đi (mũi tên còn chạy);
        mục 3: ba điều kiện xếp thành công thức — hố đen ✓ / dòng khí mạnh ✗ / thời kỳ thiên hà đầy khí ✗;
        hai dấu ✗ cam đỏ (1.00,0.34,0.06); bên dưới bản đồ khí tự do trong vũ trụ nay: loãng và phân tán
CUT     cắt sang S80

## S80 · C102–C103 · CHƯƠNG 3 ★ CAO TRÀO CẢM XÚC — "BỮA TIỆC ĐÃ TÀN, ÁNH ĐÈN VẪN ĐANG TỚI"
SCENE   Một gian phòng đã hết tiệc, tối và trống; nhưng chùm ánh đèn từ đó vẫn đang bò qua khoảng đen tới ta
CAMERA  hai lớp trong một khung liên tục: camera lùi khỏi "gian phòng" (thiên hà già, tối) dọc theo
        chùm sáng, rồi quay đầu 180° rất chậm để nhìn về phía chùm sáng đang tới; 30mm → 24mm
ELEMENT gian phòng = thiên hà elip già, tâm tối, ánh sáng còn lại đỏ cam (1.00,0.42,0.16), rất yên;
        chùm sáng cũ rời khỏi nó, ngả đỏ, vẫn đang đi; khi camera quay đầu, chùm sáng tới mắt ta
        trở lại thành chấm sáng trắng lam ban đầu — cùng một thứ, hai đầu của một hành trình;
        ⚠ đây là shot cảm xúc: giữ độ sáng THẤP, để chấm sáng cuối là điểm sáng duy nhất trong khung
CUT     mọi thứ mờ về đen trừ chấm; sang chương 4

---

# CHƯƠNG 4 — CON THÚ ĐANG NGỦ Ở NHÀ (C104–C128 · S81–S94)

## S81 · C104 · CHƯƠNG 4
SCENE   Nhãn chương. Mắt rời khỏi chấm sáng, quay sang hướng chòm Nhân Mã trên bầu trời đêm của Trái Đất
CAMERA  pan ngang chậm và dài trên bầu trời, từ vị trí chấm quasar sang dải Ngân Hà; 30mm
ELEMENT bầu trời nhìn từ mặt đất, dải Ngân Hà vắt chéo khung; chòm Nhân Mã được khoanh mảnh;
        nhãn chương cao 0.44 world @ cam 20 → ≈ 46px, nét 3.2px, luminance 0.66;
        ⚠ toàn khung tối — chương 4 là chương tối nhất tập, độ sáng trung bình giảm ~35% so với CH2
CUT     push-in vào vùng Nhân Mã sang S82

## S82 · C105 · CHƯƠNG 4
SCENE   Xuyên qua các lớp bụi dày của mặt phẳng thiên hà về phía tâm — ánh sáng nhìn thấy bị chặn
CAMERA  push-in liên tục vào mặt phẳng thiên hà; 30mm → 50mm; chuyển dần từ dải nhìn thấy sang hồng ngoại
ELEMENT lớp bụi tối chồng nhiều tầng, che gần hết; khi đổi sang "chế độ hồng ngoại", các lớp bụi
        trở nên trong suốt dần và lộ vùng tâm dày đặc sao; thước khoảng cách chạy tới 26.000 ly;
        chuyển đổi dải sóng vẽ bằng thay đổi bảng màu, không phải làm sáng khung
CUT     tới vùng tâm; cắt sang S83

## S83 · C106 · CHƯƠNG 4
SCENE   Cụm sao trung tâm dày đặc; giữa chúng có một điểm mà mọi quỹ đạo đều vòng quanh
CAMERA  xoay quanh cụm sao trung tâm 50°, tĩnh nhẹ; 45mm
ELEMENT ~30 ngôi sao quỹ đạo elip nhanh quanh một tiêu điểm chung RỖNG (S-stars); quỹ đạo vẽ nét mảnh,
        các elip có chung một tiêu điểm — đó là hình ảnh chứng minh; tại tiêu điểm không có gì cả;
        nhãn khối lượng "4 triệu Mặt Trời" hiện cạnh tiêu điểm, cao 0.36 world @ cam 22 → ≈ 32px
CUT     gap 1.5s; các quỹ đạo mờ; sang S84

## S84 · C107–C108 · CHƯƠNG 4
SCENE   Sgr A* rất yên: chỉ một chút khí loãng trôi qua, thỉnh thoảng một đám nhỏ sa vào và loé rất khẽ
CAMERA  tĩnh, khung gần như tối; 45mm; chỉ thở rất nhẹ
ELEMENT vùng tối trung tâm; vài sợi khí loãng trôi ngang, phần lớn KHÔNG rơi vào; một đám nhỏ sa vào,
        sinh một loé sáng cam rất ngắn (0.4s, biên độ thấp — emissive tối đa 1.2, không bloom mạnh)
        rồi tắt hẳn; sau loé, khung trở lại tối y như cũ
CUT     cắt sang S85

## S85 · C109 · CHƯƠNG 4
SCENE   So sánh độ sáng: thanh quasar vs thanh Sgr A* trên thang log — Sgr A* gần như chạm đáy
CAMERA  tĩnh; graph nhỏ, không choán khung; 28mm
ELEMENT thang log nhiều bậc; thanh quasar cao vọt; thanh Sgr A* thấp tới mức phải phóng to inset mới
        thấy; nhãn cao 0.32 world @ cam 22 → ≈ 28px, nét 2.2px, luminance 0.66;
        graph vẽ trên nền tối, KHÔNG để lưới sáng hơn 0.6
CUT     cắt sang S86

## S86 · C110–C111 · CHƯƠNG 4
SCENE   Kiểm tra bộ máy: cái giếng hấp dẫn vẫn sâu y nguyên; cơ chế còn đủ, chỉ thiếu nhiên liệu
CAMERA  tĩnh, sơ đồ phễu như S32 quay lại nhưng ở tâm Ngân Hà; 26mm
ELEMENT phễu hấp dẫn dựng lại, độ sâu y hệt S32 (đối chiếu trực tiếp); ba mục kiểm tra bật ✓ lần lượt:
        giếng sâu ✓ / đĩa sẽ hình thành ✓ / ma sát sẽ nung ✓; mục thứ tư "khí rót vào" để trống, nhấp nháy;
        ✓ màu lục (0.40,1.00,0.28), ô trống viền cam đỏ
CUT     cắt sang S87

## S87 · C112 · CHƯƠNG 4 ★ CÂU CHỐT
SCENE   Mô phỏng giả định: nếu đổ khí vào, tâm Ngân Hà sẽ sáng lên — rồi tua ngược lại về trạng thái tối
CAMERA  tĩnh tuyệt đối, tâm thiên hà giữa khung; 34mm
ELEMENT dòng khí giả định rót vào → đĩa hình thành → bật sáng (đạt độ sáng cao trong 1.5s) → rồi
        TOÀN BỘ tua ngược lại trong 1.0s về vùng tối; nhãn "không hỏng — đói" hiện lúc khung đã tối trở lại;
        ⚠ đỉnh sáng ngắn, kiểm soát ≤12% khung luminance >0.85, và chỉ trong ≤1.5s
CUT     gap 2.0s trên khung tối; sang S88

## S88 · C113 · CHƯƠNG 4
SCENE   Hai bong bóng khí nóng khổng lồ trải trên và dưới mặt phẳng Ngân Hà — tàn dư một cơn gì đó
CAMERA  pull-back ra ngoài thiên hà để thấy toàn bộ hai bong bóng; 34mm → 14mm; góc nhìn cạnh đĩa
ELEMENT Ngân Hà nhìn nghiêng ở giữa; hai bong bóng hình quả lê phồng lên/xuống VUÔNG GÓC mặt phẳng đĩa,
        mỗi cái cao vài chục nghìn ly; vẽ bằng thể tích khí mỏng hồng tím (1.00,0.20,0.55), opacity thấp
        (≤0.18) với bề mặt sốc sáng hơn ở rìa; thước chiều cao chạy dọc một bong bóng
CUT     giữ khung; sang S89

## S89 · C114 · CHƯƠNG 4
SCENE   Kiểm chứng đối xứng: hai bong bóng soi gương nhau qua tâm, đúng hai hướng một đĩa bồi tụ sẽ thổi
CAMERA  tĩnh; một trục đối xứng dọc được vẽ chồng
ELEMENT trục quay vẽ dọc qua tâm; hai bong bóng phản chiếu nhau qua mặt phẳng đĩa (kiểm tra bằng
        đường gương); chèn mờ hình jet của chương 2 chồng lên đúng hai hướng đó để thấy khớp;
        bản đồ nhiệt cho thấy chúng CÒN nóng (vùng lõi ấm hơn nền)
CUT     chèn jet mờ đi; cắt sang S90

## S90 · C115–C116 · CHƯƠNG 4 ★ GRAPH TƯƠNG QUAN
SCENE   Cân hố đen ở tâm nhiều thiên hà: các điểm dữ liệu rơi thành một đường thẳng
CAMERA  tĩnh tuyệt đối; graph log–log chiếm 75% khung; đọc được trong 3 giây
ELEMENT trục hoành: khối lượng lõi thiên hà; trục tung: khối lượng hố đen; ~25 điểm dữ liệu, mỗi điểm
        kèm thumbnail thiên hà rất nhỏ (to → góc trên phải, nhỏ → góc dưới trái); các điểm bám sát một
        đường thẳng chéo; đường fit vẽ lục (0.40,1.00,0.28) nét 2.6px; lưới lam xám (0.22,0.40,0.62)
        nét 1.4px, luminance ≤0.55; nhãn trục cao 0.34 world @ cam 22 → ≈ 30px, nét 2.4px
CUT     giữ graph; sang S91

## S91 · C117 · CHƯƠNG 4
SCENE   Tại sao lạ: hố đen quá nhỏ và quá gần tâm để "biết" thiên hà quanh nó to cỡ nào
CAMERA  tĩnh; hai lớp tỉ lệ chồng nhau; 24mm
ELEMENT thiên hà vẽ đầy khung; vùng ảnh hưởng hấp dẫn của hố đen khoanh bằng vòng nhỏ tới mức phải
        có inset phóng đại mới thấy; thanh tỉ lệ khối lượng: hố đen chiếm ~0,1% khối lượng lõi —
        một lát mỏng trên thanh, gợi lại hình ảnh 0,7% ở S27
CUT     cắt sang S92

## S92 · C118–C119 · CHƯƠNG 4
SCENE   Lời giải: cả hai lớn lên cùng nhau từ cùng một nguồn khí, và cùng dừng vì cùng một lý do
CAMERA  tĩnh, sơ đồ hai nhánh chia từ một bể khí chung; 26mm
ELEMENT bể khí chung ở trên, hai nhánh chảy xuống: nhánh trái nuôi sao (lõi thiên hà lớn dần),
        nhánh phải nuôi hố đen (điểm tối lớn dần) — hai thanh tăng ĐỒNG BỘ; khi thanh hố đen
        đủ cao, một vòng bức xạ phát ra từ nó thổi ngược lên cắt đứt bể khí → CẢ HAI thanh dừng
        cùng lúc; vòng lặp phản hồi phải nhìn ra được; cuối shot đánh dấu "Ngân Hà" trên đường fit của S90
CUT     cắt sang S93

## S93 · C120 · CHƯƠNG 4
SCENE   Quá khứ không chắc chắn của hố đen nhà ta: hai kịch bản mờ, nhưng khối lượng thì đã ăn vào từng đợt
CAMERA  tĩnh; hai phiên bản quá khứ chiếu chồng mờ lên nhau rồi cùng mờ đi; 28mm
ELEMENT kịch bản A: tâm Ngân Hà từng sáng như quasar (mờ, opacity 0.35); kịch bản B: chỉ sáng hạng
        xoàng (opacity 0.35); cả hai cùng mờ đi, để lại một thanh khối lượng tăng theo TỪNG BẬC
        (mỗi bậc là một đợt ăn) leo tới 4 triệu Mặt Trời — cái chắc chắn là cái còn lại
CUT     gap 1.5s; sang S94 — đảo góc nhìn

## S94 · C121–C124 · CHƯƠNG 4 ★ ĐẢO GÓC NHÌN
SCENE   Camera bay ra xa 10 tỉ năm ánh sáng và quay đầu lại nhìn về phía Ngân Hà — nó chỉ là một chấm
CAMERA  pull-back cực dài liên tục ra khỏi Ngân Hà qua nhiều lớp thiên hà, rồi quay 180° nhìn ngược lại;
        50mm → 12mm → giữ; đây là chuyển động dài nhất tập
ELEMENT khi lùi xa, hình ảnh Ngân Hà nhận được LÙI VỀ QUÁ KHỨ: đĩa gọn gàng hiện nay → méo dần →
        nhiều khí lam (0.34,0.58,1.00) → đang va chạm với một thiên hà khác → tâm bật sáng;
        cuối cùng tất cả nén lại thành MỘT CHẤM mờ nằm lẫn giữa vài nghìn chấm khác — khung
        lặp lại chính xác bố cục của S01 (cùng góc, cùng mật độ sao, chấm ở đúng vị trí 1/3 phải);
        nhãn "sáng hơn cả một thiên hà — và họ không có cách nào biết nó đã tắt"
CUT     cắt sang S95

## S95 · C125–C126 · CHƯƠNG 4 (KẾT)
SCENE   Vũ trụ như các lớp vỏ thời gian xếp chồng: lớp càng xa càng cũ
CAMERA  tĩnh; các vỏ cầu đồng tâm hiện lại (gọi lại S22/S59) nhưng nhãn giờ là tuổi; 18mm
ELEMENT 6 vỏ đồng tâm, mỗi vỏ ghi tuổi ảnh của nó; các vỏ trong mới, các vỏ ngoài cũ dần, màu ngả đỏ
        theo độ xa; một ngọn hải đăng nhỏ và một ngọn hải đăng đã tắt vẽ ở cùng một vỏ — trông
        GIỐNG HỆT NHAU trên khung, đó là câu chốt hình
CUT     các vỏ mờ; camera quay vào trong sang S96

## S96 · C127 · CHƯƠNG 4 (KẾT)
SCENE   Tâm thiên hà của chính ta: cỗ máy 4 triệu Mặt Trời nằm đó, nguyên vẹn, lạnh, quay chậm trong bóng tối
CAMERA  push-in rất chậm vào tâm Ngân Hà, dừng ở xa; 18mm → 40mm; luôn NGOÀI, không tới gần
ELEMENT vùng tối trung tâm; quanh nó một vành khí cực mỏng, cực tối, quay rất chậm (chu kỳ dài gấp
        ~20 lần đĩa bồi tụ ở CH2) — chuyển động phải chậm tới mức gần như đứng yên;
        ánh sáng duy nhất là vài ngôi sao nền phía sau; KHÔNG bloom, KHÔNG jet, KHÔNG phát xạ
CUT     giữ khung tối; im lặng 2s; sang S97

## S97 · C128 · CHƯƠNG 4 (KẾT)
SCENE   Câu cuối trên khung tối. Vành khí vẫn quay. Không có gì thay đổi
CAMERA  tĩnh tuyệt đối; giữ khung S96 không đổi một pixel về bố cục
ELEMENT chữ câu cuối cao 0.42 world @ cam 40 → ≈ 46px, nét 3px, luminance 0.68 (dưới bloom — phải
        đọc rõ trên nền tối); chữ hiện từng vế theo nhịp đọc; sau vế cuối, chữ mờ đi nhưng vành
        khí VẪN quay tiếp 2s trong im lặng — thông điệp "đang đợi" nằm ở chuyển động còn lại
CUT     fade to black chậm 2.5s; hết tập

---

# BẢNG ĐỐI CHIẾU CAO TRÀO (đã dò lại từng cue với shot thật)

| Cao trào | Cue yêu cầu | Shot THẬT | Ghi chú đầu tư |
|---|---|---|---|
| "quasi-stellar" — khoảnh khắc đặt tên | C13 | **S13** | shot riêng, tông tài liệu lưu trữ, chữ phải đọc rõ dưới bloom |
| Sờ-mít đọc quang phổ 1963 | C20–C22 | **S20 · S21 · S22** (3 shot) | S21 là cú lật đo lường: bộ vạch trượt như KHỐI CỨNG theo (1+z); S22 là kim thang khoảng cách vọt — nhịp kinh ngạc |
| Lập luận nhấp nháy | C48–C52 | **S42 · S43 · S44 · S45** (4 shot) | S43 là sơ đồ chốt (D/c dóng thẳng xuống bề rộng xung); cả 4 shot camera TĨNH để đọc được trong 3 giây |
| Thanh so sánh hiệu suất 0,7% vs 6–30% | C56–C58 | **S48 · S49 · S50** (3 shot) | cùng một khung graph suốt 3 shot, không đổi bố cục — đó là thứ làm so sánh đọc được |
| Jet 200.000 năm ánh sáng | C65 | **S55 · S56** (2 shot) | S55 dolly-out dài không cắt; S56 đứng yên để con số đọng |
| Trục thời gian vũ trụ, đỉnh ~10 tỉ năm | C69–C75 | **S58 · S59 · S60 · S63** | S60 là cú lật nhãn trục (khoảng cách → thời gian); S63 là graph đỉnh mật độ |
| **Cú lật di ảnh** (cao trào cảm xúc) | C84–C97 + C102–C103 | **S71 · S72 · S73 · S74 · S75 · S76 · S77 · S78** (8 shot) **+ S80** | S73–S75 là một travelling liên tục không cắt; S76 là cú chạm cảm biến (SFX riêng duy nhất); S80 là câu "bữa tiệc đã tàn, ánh đèn vẫn đang trên đường tới" |
| Sgr A* yên lặng → kết | C104–C128 | **S81–S97** (17 shot) | S87 là câu chốt "không hỏng — đói"; S94 là đảo góc nhìn khép vòng về S01; S96–S97 là kết |

**Tổng kiểm:** 23 + 33 + 24 + 17 = **97 shot** · C01–C128 phủ hết, không cue nào rơi.

---

# GHI CHÚ DỰNG HÌNH

## 1. Bảng màu — đã chạy `HFA.saturationAfterACES(r,g,b)`

Quy tắc áp dụng: kênh yếu ≤ 0.2× kênh mạnh; kênh mạnh quanh 1.0; muốn sáng thì **tăng emissive**,
tuyệt đối không nâng kênh yếu (nâng kênh yếu = đi thẳng ra xám sau ACES).

| Vai trò | Màu tuyến tính (r,g,b) | before | **after** | Dùng ở |
|---|---|---|---|---|
| Đĩa bồi tụ — vành trong (UV/X, nóng nhất) | `(0.20, 0.55, 1.00)` | 0.80 | **0.63** ✔ | S36 S38 S49 S58 S62 |
| Đĩa bồi tụ — vành giữa (vàng) | `(1.00, 0.66, 0.12)` | 0.88 | **0.80** ✔ | S05 S26 S36 S48 |
| Đĩa bồi tụ — vành ngoài (cam) | `(1.00, 0.34, 0.06)` | 0.94 | **0.93** ✔ | S18 S25 S36 S44 S79 |
| Đĩa bồi tụ — rìa ngoài nguội nhất (đỏ sâu) | `(1.00, 0.18, 0.03)` | 0.97 | **0.96** ✔ | S36 S69 |
| Jet — lõi lam | `(0.16, 0.48, 1.00)` | 0.84 | **0.71** ✔ | S26 S54 |
| Jet — bao ngoài tím tương đối tính | `(0.42, 0.14, 1.00)` | 0.86 | **0.75** ✔ | S54 S55 |
| Sao già / thiên hà đã tắt (đỏ cam của tuổi) | `(1.00, 0.42, 0.16)` | 0.84 | **0.71** ✔ | S67 S73 S77 S80 |
| Sao trẻ / thiên hà nhiều khí (lam) | `(0.34, 0.58, 1.00)` | 0.66 | **0.40** ✔ (biên) | S05 S64 S94 |
| Vạch phổ hydro Hα | `(1.00, 0.16, 0.14)` | 0.86 | **0.75** ✔ | S16 S17 S21 |
| Lưới / nét sơ đồ (lam xám) | `(0.22, 0.40, 0.62)` | 0.65 | **0.52** ✔ | mọi graph, S02 S08 S11 S32 S41 S90 |
| Bong bóng Fermi (hồng tím) | `(1.00, 0.20, 0.55)` | 0.80 | **0.63** ✔ | S88 S89 |
| Nhấn khẳng định / đường fit (lục) | `(0.40, 1.00, 0.28)` | 0.72 | **0.49** ✔ | S21 S34 S39 S42 S86 S90 |
| Ambient chàm nền chương 4 | `(0.10, 0.20, 0.42)` | 0.76 | **0.77** ✔ | S81–S97 |

**Đã LOẠI, không dùng:**

| Màu | after | Lý do |
|---|---|---|
| `(0.55, 0.72, 1.00)` | **0.20** ✘ | loại từ tập trước — ra xám. Đừng dùng cho "khí hydro nguyên thuỷ lam nhạt" |
| `(0.42, 0.60, 1.05)` | **0.31** ✘ | loại từ tập trước |
| `(1.00, 0.72, 0.38)` | **0.35** ✘ | loại từ tập trước |
| `(0.40, 0.70, 1.00)` | **0.33** ✘ | thử cho vành trong đĩa — kênh yếu 0.40 quá cao so với 1.00. Dùng `(0.20,0.55,1.00)` thay thế |

## 2. Cháy trắng — rủi ro cao nhất loạt (bloom HDR ngưỡng 1.0)

Quasar theo định nghĩa là vật sáng chói, nên đây là tập dễ ra "mảng trắng bệt" nhất.

**Luật cứng:** không shot nào để quá **12% diện tích khung** có luminance > 0.85.
Shot rủi ro nhất: **S03, S20, S36, S38, S49, S65, S66, S87**. Ở các shot đó phải kiểm bằng
histogram khung trước khi chốt.

**Cách giữ chi tiết trong đĩa bồi tụ mà không thành mảng trắng:**

1. **Sáng bằng emissive + độ dày quang học thấp, không bằng albedo trắng.** Vành trong đặt
   `emissiveIntensity` cao (4–8) trên màu bão hoà `(0.20,0.55,1.00)`, giữ opacity lớp ≤ 0.35 và
   xếp 4–6 lớp. HDR vượt 1.0 → bloom nở ra thành halo, nhưng **hue vẫn giữ** vì kênh yếu thấp.
   Nếu thay bằng `(1,1,1)` × emissive thấp thì ra bệt trắng ngay.
2. **Luôn có vân tần số cao trên mặt đĩa.** FBM xoắn theo `θ − ω(r)·t` với ít nhất 3 octave,
   biên độ ±25% độ sáng cục bộ. Mảng bệt hình thành khi shader trả về giá trị gần hằng trên
   một vùng rộng — vân phá nó.
3. **Gradient nhiệt theo bán kính là hàng rào an toàn.** Chỉ vành trong cùng (r < 0.15·r_out)
   được vượt HDR 1.0. Từ r = 0.15 trở ra màu tụt về vàng/cam/đỏ với luminance giảm theo `r^-0.75`.
   Như vậy vùng >0.85 tự giới hạn ở lõi nhỏ.
4. **Doppler beaming là công cụ chống bệt, không chỉ là chi tiết vật lý.** Nửa lùi tối hơn ~2.5×
   ngay lập tức cắt một nửa diện tích sáng khỏi vùng nguy hiểm.
5. **Tone-map trước bloom threshold.** Bloom lấy ngưỡng 1.0 trên giá trị HDR *trước* ACES;
   đừng hạ ngưỡng xuống dưới 1.0 để "an toàn" — hạ ngưỡng làm cả những vùng vừa sáng cũng nở,
   khung càng bệt.
6. **Cú bật sáng (S65, S87) giới hạn thời gian.** Đỉnh sáng ≤ 1.5s, sau đó hạ. Cháy trắng
   kéo dài đọc ra là lỗi; cháy trắng 1 giây đọc ra là hiệu ứng.

## 3. Nét chữ và sơ đồ — GIỮ DƯỚI HDR 1.0

Bloom ăn mất nét chữ. Tập nước đã sai chỗ này (chữ cao 0.42 world @ camera 28 → dưới 18px, không đọc nổi).

- **Mọi chữ và lưới sơ đồ đặt luminance 0.62–0.72**, tuyệt đối không vượt 1.0 → không vào bloom.
- **Chiều cao chữ trên màn hình ≥ 26px** ở 1080p. Công thức kiểm: `px ≈ h_world / (2·d·tan(fov/2)) · 1080`.
  Mọi shot có chữ trong file này đã ghi sẵn cặp `h_world @ cam d → ≈ px` — visual-builder phải
  kiểm lại con số đó sau khi chốt vị trí camera thật, vì camera có thể đổi khi khớp timing.
- **Nét dày tối thiểu:** chữ 2.2px, nhãn nhấn 2.6px, nhãn chương 3.2px, đường fit graph 2.6px,
  lưới nền 1.4–1.6px. Muốn chữ rõ hơn thì **tăng độ dày nét**, không tăng độ sáng.
- **Không đặt chữ chồng lên vùng bloom.** Nhãn trong các shot có đĩa bồi tụ (S36 S39 S49 S65)
  phải nằm ngoài bán kính halo, hoặc có một tấm nền tối opacity 0.45 phía sau.

## 4. Quy ước thiên văn bắt buộc (nhất quán cả tập)

- **Chiều quay:** đĩa bồi tụ quay **ngược chiều kim đồng hồ nhìn từ cực bắc đĩa** — giữ nguyên
  ở S35 S36 S37 S43 S52 S65 S69 S96. Thiên hà (S05 S56 S88) quay **cùng chiều kim đồng hồ
  nhìn từ cực bắc thiên hà**. Hai quy ước khác nhau là cố ý (hai hệ độc lập), nhưng mỗi hệ
  phải nhất quán với chính nó suốt tập.
- **Vận tốc Kepler:** `ω ∝ r^-1.5`. Vòng trong phải quay nhanh thấy rõ so với vòng ngoài —
  đó là cơ sở của toàn bộ lập luận ma sát ở S37 S38.
- **Doppler beaming:** nửa đĩa đang tiến về camera sáng hơn nửa lùi ~2.5× và hơi lệch xanh;
  nửa lùi tối và ngả đỏ. Bắt buộc ở S36 S39 S52 S69 (yếu dần khi đĩa cạn).
- **Jet:** phun từ **hai cực, vuông góc mặt phẳng đĩa**, đối xứng, góc mở ≤ 5°, có nút sáng
  cách quãng đều di chuyển ra ngoài. Không xoè thành đám mây. Bong bóng Fermi (S88 S89)
  phải phồng theo **đúng hai hướng đó**.
- **Thiên hà chủ:** mờ, và vùng trong ~5.000 ly bị **ánh chói của nhân làm bạc màu**, không đọc
  được cấu trúc nhánh. Áp dụng ở S55 S56 S65.
- **Dịch đỏ:** bước sóng nhân với `(1+z)` — **khoảng cách tương đối giữa các vạch giữ nguyên tỉ lệ**,
  không phải cộng một hằng số. Đây là điểm kỹ thuật quan trọng nhất của S21; làm sai thì
  cú lật của Sờ-mít mất nghĩa. Ở S73 cũng vậy: bước sóng gói sóng giãn theo tỉ lệ.
- **Hố đen:** vùng đen tuyệt đối, không phát gì, không viền glow, không photon ring kịch tính,
  đường kính ≤ 4% đường kính đĩa. Kích thước đó **không đổi** giữa S39 (đĩa rực) và S70 (đĩa tắt) —
  đối chiếu trực tiếp là điểm của S70.
- **Ánh sáng giảm theo 1/d²:** các vỏ khoảng cách ở S22 S59 S95 phải thể hiện đúng, đó là cơ sở
  của lập luận "thiên hà mờ đi nhưng quasar vẫn sáng" ở S23.

## 5. Motif lặp lại — CẦN TRÁNH / CẦN GIỮ

**Tránh** (dễ lặp thành nhàm trong một tập 20 phút):
- Đừng để quá 3 shot liên tiếp là "đĩa bồi tụ quay". Cụm S36–S39 và S52 đã đủ; giữa chúng
  phải có sơ đồ/graph xen vào.
- Đừng lặp lại cú "pull-back qua các lớp thiên hà" quá 3 lần. Trong file này nó dùng đúng 3 lần
  và mỗi lần có nghĩa khác: **S22** (bài toán lật ngược), **S66** (vũ trụ trẻ lốm đốm), **S94**
  (đảo góc nhìn). Không thêm lần thứ tư.
- Đừng dùng "chữ trên nền đen" quá 4 lần. Trong file: S29, S60, S87, S97 — đủ.
- **Đừng dựng bất kỳ cảnh nào của tập 04 cũ**: rơi vào, qua chân trời sự kiện, POV kéo giãn,
  đồng hồ giãn nở thời gian. Kiểm lại `archive/tap-04-roi-vao-ho-den.html.bak` nếu nghi ngờ.

**Giữ** (motif có chủ đích, phải làm cho khớp):
- **Chấm sáng vô danh** mở ở S01 và đóng ở S94 — S94 phải lặp **chính xác bố cục S01**:
  cùng góc camera, cùng seed starfield, chấm ở đúng vị trí 1/3 phải. Đây là khớp nối
  quan trọng nhất của tập; dựng S94 bằng cách tái dùng đúng tham số của S01.
- **Cái phễu hấp dẫn**: S32 (giới thiệu) → S86 (dựng lại ở tâm Ngân Hà, **độ sâu y hệt**).
- **Lát mỏng trên thanh khối lượng**: S27 (0,7% hợp hạch) → S91 (0,1% khối lượng hố đen/lõi).
  Cùng ngôn ngữ hình, hai ý khác nhau.
- **Vùng đen ở tâm**: S39 (đĩa rực) → S70 (đĩa tắt) → S96 (Ngân Hà nay). Ba lần, cùng kích thước.
- **Vỏ khoảng cách đồng tâm**: S22 → S59 → S95.
- **Tối dần theo chương:** độ sáng trung bình khung giảm đều CH1 → CH2 (sáng nhất ở S36–S56) →
  CH3 (rút) → CH4 (tối nhất, giảm ~35% so với CH2). Kết thúc tập ở khung gần như tối hoàn toàn.
