# STORYBOARD — MẠNG VŨ TRỤ: CẤU TRÚC LỚN NHẤT TỪNG TỒN TẠI

## METADATA
- **Slug:** `mang-vu-tru` — **TẬP CHỐT LOẠT**
- **Kịch bản:** 3652 từ · 116 cue (C01–C116) · 4 chương · 29 gap
- **Tổng thời lượng dự kiến:** ~19:40 (≈1180s). Thời lượng CHUẨN lấy từ `timing.json` (khâu voice).
- **Số shot:** **94 shot** (S01–S94). Đã grep lại từng khối `## Sxx` trong chính file này sau khi ghi — xem "BẢNG ĐỐI CHIẾU CAO TRÀO" cuối file.
- **Trung bình:** ~12,6s/shot · 1,23 cue/shot
- **Nhạc nền:** `assets/bgm.mp3` — một track chung cả tập. Gain theo chương:
  CH1 0.20 (mở từ 0 trong 2s im lặng) → CH2 0.10 ở đoạn khoang rỗng S20–S30 (gần im lặng thật), dâng 0.26 từ S34 → CH3 0.28 (dày nhất S55–S70), rút về 0.06 ở S71 (im lặng trước C81) → CH4 0.08 rồi fade-out sau S92, im hẳn ở S94.
- **Phụ đề:** sinh tự động từ `voice/*.srt` bằng `scripts/gen-captions.mjs`. Storyboard KHÔNG chép phụ đề.

### Loại visual theo chương
| Chương | Cue | Shot | Loại visual chính |
|---|---|---|---|
| 1 — BẦU TRỜI CÓ HÌNH DẠNG | C01–C21 | **S01–S19 (19 shot)** | astro-realistic bầu trời đêm từ mặt đất (POV nằm ngửa) → **chuỗi zoom-out thang bậc liên tục** (Trái Đất → hệ Mặt Trời → Ngân Hà → Nhóm Địa Phương → mạng); procedural particle field cho mạng vũ trụ lần đầu lộ diện |
| 2 — NHỮNG KHOANG RỖNG | C22–C52 | **S20–S48 (29 shot)** | procedural void interior (POV bên trong khoang rỗng, bầu trời trống) + **graph khuếch đại dao động mật độ theo thời gian** (đường log, 13 tỉ năm) + particle N-body gom cụm + **dòng khí chảy dọc sợi** (flow field có hướng, đọc ra CHUYỂN ĐỘNG ĐANG DIỄN RA) |
| 3 — TẤM BẢN ĐỒ | C53–C93 | **S49–S82 (34 shot)** | **graph lát cắt quạt dịch đỏ kiểu Sờ-loan** (dựng dần từng chấm) + sơ đồ quang phổ vạch trượt đỏ + tấm nhôm khoan lỗ (vật thể thật, tài liệu) + **split-screen bản đồ thật ‖ mô phỏng** (S73–S74, ngân sách dựng lớn nhất) + graph thang bậc tổ chức bị cắt cụt |
| 4 — ĐỊA CHỈ | C94–C116 | **S83–S94 (12 shot)** | astro-realistic zoom-IN ngược thang (mạng → La-ni-a-kê-a → Nhóm Địa Phương → Ngân Hà → Mặt Trời → Trái Đất → người nằm ngửa); khép vòng về khung mở đầu S01, nhưng lần này có **đường gân chồng mờ lên bầu trời** |

### Ràng buộc hình toàn tập (KHẮT KHE)
- **Hướng camera ngược tập #12 quasar.** Quasar zoom VÀO một vật thể; tập này zoom **RA KHỎI** mọi vật thể suốt chương 1–3, rồi zoom vào lại ở chương 4. **KHÔNG** đĩa bồi tụ, **KHÔNG** jet tương đối tính, **KHÔNG** chân trời sự kiện ở bất kỳ shot nào.
- **Không lặp #01 `vat-chat-toi`:** **KHÔNG** đường cong quay thiên hà, **KHÔNG** vòng/cung thấu kính hấp dẫn. Vật chất tối chỉ xuất hiện ở S36–S39 (C44–C47) dưới dạng **bộ khung rãnh thế hấp dẫn**, không giải thích, không đo đạc.
- **Mạng vũ trụ KHÔNG CÓ TÂM.** Không bao giờ đặt một nút ở chính giữa khung làm "trung tâm vũ trụ". Camera luôn ở vị trí lệch, và mọi cảnh toàn mạng phải cho thấy hoa văn **chạy ra ngoài rìa khung ở cả 4 cạnh** — cắt cụt, không đóng khung gọn ghẽ.
- **Sợi là cấu trúc 3D, không phải lưới phẳng.** Mọi cảnh mạng bắt buộc có parallax chiều sâu: sợi trước/sau khác độ mờ khí quyển vũ trụ (fog theo depth), và camera luôn có thành phần chuyển động ngang để chiều sâu đọc ra.
- **Khoang rỗng KHÔNG rỗng tuyệt đối.** Bên trong mọi khoang luôn có ~1/10 mật độ: vài chấm lẻ loi, rất mờ. Đen tuyệt đối là sai vật lý và cũng làm khung chết.

---

# CHƯƠNG 1 — BẦU TRỜI CÓ HÌNH DẠNG (C01–C21 · S01–S19)

## S01 · C01 · CHƯƠNG 1
SCENE   POV nằm ngửa trên mặt đất: bầu trời đêm choán toàn khung, rìa dưới có bóng đen của ngọn cỏ và một đường chân trời đồi rất thấp
CAMERA  tĩnh tuyệt đối 2s đầu (khớp im lặng mở đầu), rồi drift ngửa lên cực chậm 0.3°/s; 32mm góc rộng
ELEMENT `HFA.buildStars({count:11000, radius:9000})` — ⚠ chỉ có uniform `uOp`, KHÔNG có `uEm`;
        màu sao theo nhiệt độ lam→cam, độ lớn phân bố luỹ thừa; bóng cỏ đen đặc opacity 1.0 chiếm 8% rìa dưới;
        KHÔNG có vật thể nào nổi bật, KHÔNG dải Ngân Hà rõ — bầu trời phải đọc ra "ngẫu nhiên"
CUT     giữ nguyên khung sang S02

## S02 · C02 · CHƯƠNG 1
SCENE   Cùng bầu trời, nhưng mắt bắt đầu tìm quy luật: vùng dày sao bên trái, vùng thưa bên phải, không ra hình gì
CAMERA  drift tiếp, thêm zoom-out rất nhẹ 32mm → 28mm; không có điểm nhìn ưu tiên
ELEMENT hai vùng mật độ tương phản được nhấn bằng cách giảm `uOp` vùng thưa xuống 0.55 trong 1.2s rồi trả lại;
        chèn 0.6s một lớp chồng mờ "nắm cát trên vải đen" — hạt cát thật opacity 0.25, KHỚP ĐÚNG vị trí các sao
CUT     hoà tan chậm sang S03 khi lớp cát tan

## S03 · C03 · CHƯƠNG 1
SCENE   Chòm sao: đường nối tưởng tượng bật lên giữa các sao, vẽ Con Gấu, Người Thợ Săn, Cái Thìa — rồi tắt hết
CAMERA  tĩnh; chỉ có nét vẽ chuyển động
ELEMENT 3 chòm vẽ tuần tự, nét mảnh lam xám `(0.22,0.40,0.62)` after=0.52, dày 2.0px, luminance 0.66 < 1.0
        (KHÔNG vào bloom); mỗi chòm sống 1.4s rồi tắt; sau chòm cuối, **tất cả nét biến mất đồng loạt trong 0.3s**
        để lộ lại trường sao trần — cú nhấn "tự chúng không có hình"
CUT     đen 1.5s (gap) — chỉ còn sao, nét đã hết

## S04 · C04 · CHƯƠNG 1
SCENE   Bầu trời không đổi, nhưng một đường gân sáng cực mờ chớp hiện 0.4s ở nền rất sâu rồi tắt — gợi ý, chưa tiết lộ
CAMERA  push-in rất nhẹ 28mm → 34mm, như đang ngồi dậy chú ý
ELEMENT đường gân là spline 3D mờ, opacity đỉnh 0.10, màu đỏ cam `(1.00,0.34,0.10)` after=0.84, blur mạnh;
        khán giả phải NGỜ chứ chưa THẤY; sao nền giữ nguyên
CUT     cắt sang S05

## S05 · C05 · CHƯƠNG 1
SCENE   Sơ đồ tầm nhìn: một hình nón thị giác mảnh phát ra từ mắt, so với một khối mạng khổng lồ mờ phía sau nó
CAMERA  tĩnh, bố cục lệch trái (mắt ở góc dưới trái, khối mạng tràn ra ngoài khung phải-trên)
ELEMENT nón thị giác nét lam xám `(0.22,0.40,0.62)` dày 1.8px; khối mạng chỉ là bóng mờ opacity 0.12;
        nhãn tỉ lệ cao 0.34 world @ cam d=24, fov 35° → ≈ 24px — builder kiểm lại sau khi chốt camera,
        nếu < 26px thì nâng lên 0.38 world
CUT     cắt sang S06

## S06 · C06 · CHƯƠNG 1
SCENE   Tuyên bố cú lùi: khung thu nhỏ bầu trời thành một ô vuông nhỏ giữa nền đen, quanh nó còn trống
CAMERA  zoom-out mạnh dứt khoát 34mm → 18mm trong 2s, ease-out
ELEMENT ô bầu trời co lại còn 18% chiều rộng khung, viền mảnh 1.6px lam xám; phần đen quanh nó KHÔNG rỗng —
        rắc sẵn một lớp hạt cực mờ opacity 0.06 báo trước rằng "phía sau còn thứ khác"
CUT     giữ đen 2.0s (gap), chỉ còn ô nhỏ

## S07 · C07 · CHƯƠNG 1
SCENE   Bậc 1 — Trái Đất: quả cầu đá nhìn từ quỹ đạo thấp, terminator (ranh giới ngày đêm) cắt ngang, đèn thành phố bên đêm
CAMERA  khởi từ sát bề mặt (cao 400km), pull-back dần ra 12.000km; 40mm
ELEMENT texture NASA Blue Marble + night lights; trục nghiêng **23.4°** đọc ra được so với mặt phẳng quỹ đạo;
        quay **ngược chiều kim đồng hồ nhìn từ cực Bắc** (quy ước giữ nguyên cả tập);
        khí quyển rim-light lam mỏng; thanh tỉ lệ "12.700 km" cao 0.30 world @ cam d=20 → ≈ 23px → nâng 0.36 world
CUT     pull-back liên tục sang S08 — KHÔNG cắt, thang bậc phải liền mạch

## S08 · C08 · CHƯƠNG 1
SCENE   Bậc 2 — hệ Mặt Trời: Trái Đất thành chấm xanh, 8 hành tinh trên quỹ đạo đồng phẳng, vành băng đá Kuiper ở rìa
CAMERA  tiếp pull-back liên tục, nghiêng lên 20° trên mặt phẳng hoàng đạo để quỹ đạo đọc ra ellipse chứ không thành đường thẳng
ELEMENT quỹ đạo vẽ bằng nét 1.4px lam xám, **tỉ lệ khoảng cách nén theo log** (nếu giữ tỉ lệ thật thì 4 hành tinh
        trong dính vào nhau — ghi rõ nhãn "thang log" cao 0.32 world);
        tất cả hành tinh quay **cùng chiều** quanh Mặt Trời (ngược kim đồng hồ nhìn từ Bắc hoàng đạo);
        vành Kuiper là ~3000 hạt lởm chởm không tròn, mật độ cao nhất ở 30–50 AU
CUT     pull-back liên tục sang S09

## S09 · C09 · CHƯƠNG 1
SCENE   Bậc 3 — Ngân Hà: cả hệ Mặt Trời gom thành 1 điểm, hàng trăm tỉ điểm khác bật lên quanh nó, đĩa xoắn mở ra
CAMERA  pull-back + nâng dần khỏi mặt phẳng đĩa 0° → 38°; đây là cú reveal lớn đầu chương
ELEMENT ~160k particle; đĩa xoắn 2 nhánh chính + 2 nhánh phụ, quay **cùng chiều kim đồng hồ nhìn từ cực Bắc
        thiên hà** (quy ước cả tập); lõi phình vàng cam `(1.00,0.66,0.12)` after=0.80, nhánh lam
        `(0.18,0.50,1.00)` after=0.67 điểm vài vùng HII đỏ; dải bụi tối cắt ngang mặt phẳng;
        vị trí Mặt Trời đánh dấu bằng vòng tròn rỗng 1.8px ở **26.000 ly từ tâm, trên nhánh Orion**
CUT     dừng pull-back, giữ khung 1s sang S10

## S10 · C10 · CHƯƠNG 1
SCENE   Chỗ mọi câu chuyện dừng lại: Ngân Hà đứng yên giữa khung, nền đen quanh nó — rồi camera KHÔNG nhảy, chỉ chờ
CAMERA  tĩnh hoàn toàn (cố ý phản nhịp, khán giả chờ cú nhảy mà không có); thở ±0.4% zoom
ELEMENT Ngân Hà giữ nguyên; ở rìa khung xuất hiện vài chấm mờ opacity 0.08 — "khoảng giữa" đang chờ được kể;
        KHÔNG nhãn, KHÔNG chữ ở shot này
CUT     đen 1.5s (gap), Ngân Hà mờ về 0.4 opacity

## S11 · C11 · CHƯƠNG 1
SCENE   Bậc 4 — Nhóm Địa Phương: Ngân Hà thu nhỏ, Tiên Nữ hiện ra bên cạnh (lớn hơn một chút), ~80 thiên hà lùn bám quanh
CAMERA  pull-back tiếp, drift ngang chậm 0.5 đvị/s để parallax giữa Ngân Hà và Tiên Nữ đọc ra chiều sâu
ELEMENT Ngân Hà và Tiên Nữ cách nhau đúng tỉ lệ **2,5 triệu ly ≈ 25× đường kính Ngân Hà** (đừng đặt sát nhau);
        Tiên Nữ đường kính ~1.3× Ngân Hà, nghiêng ~77° so với tầm nhìn; 80 thiên hà lùn là chấm mờ
        opacity 0.3–0.5, phân bố KHÔNG đều, tụm về hai thiên hà lớn;
        nhãn "Nhóm Địa Phương" cao 0.40 world @ cam d=26 → ≈ 26px ✔
CUT     pull-back liên tục sang S12

## S12 · C12 · CHƯƠNG 1
SCENE   Bậc 5 — cả Nhóm Địa Phương thành một hạt, và hạt đó **đang bị kéo**: một vector chuyển động rõ ràng lệch khỏi khung
CAMERA  pull-back; camera KHÔNG quay theo vector — để thấy nhóm trôi lệch so với khung
ELEMENT hạt nhóm là cụm sáng đường kính 30px; mũi tên vận tốc nét 2.4px đỏ cam `(1.00,0.34,0.10)` after=0.84,
        chỉ về góc phải-dưới, **không cho thấy nguồn hút** (bí mật giữ đến C103);
        vệt lưu ảnh (motion trail) 4 khung mờ sau hạt; nền bắt đầu có các cụm mờ khác cũng trôi cùng hướng
CUT     pull-back liên tục sang S13

## S13 · C13 · CHƯƠNG 1
SCENE   Bậc 6 — ngưỡng cửa: nền đen bắt đầu lộ cấu trúc mờ, chưa rõ hình, như mắt đang quen bóng tối
CAMERA  pull-back CHẬM LẠI hẳn (ease-out mạnh), gần như dừng — tạo hụt nhịp trước C14
ELEMENT hàng chục nghìn chấm mờ opacity leo từ 0.05 → 0.35 trong 2.5s; **chưa bật liên kết sợi**;
        ở giai đoạn này khung cố tình đọc ra "đám chấm rời" — đây là trạng thái SAI mà S14 sẽ sửa
CUT     đen 2.0s (gap) — dừng hoàn toàn, không chuyển động nào

## S14 · C14 · CHƯƠNG 1 ⭐ CAO TRÀO
SCENE   **CÚ LẬT "KHÔNG RẢI ĐỀU"** — đám chấm rời tự sắp lại thành mạng: sợi hiện ra, nút sáng lên, khoang rỗng mở ra
CAMERA  **TĨNH HOÀN TOÀN.** Không dolly, không zoom, không pan. Chỉ có vật thể đổi, camera đứng im. (cue 5 từ — hình NGHỈ về mặt camera, BUNG về mặt cấu trúc)
ELEMENT cùng tập chấm của S13, KHÔNG thêm hạt mới — chúng **di chuyển** về vị trí trên sợi trong 2.2s ease-in-out;
        đồng thời bật lớp **glow sợi liên tục** (xem GHI CHÚ mục 2: tube spline + volumetric, KHÔNG chỉ là chấm);
        khoang rỗng lộ ra như các lỗ tối giữ ~1/10 mật độ;
        mạng **chạy ra ngoài cả 4 cạnh khung** — không có tâm, không đóng khung gọn
CUT     giữ khung tĩnh 1.5s sau khi hạt dừng, rồi hoà tan sang S15

## S15 · C15 · CHƯƠNG 1
SCENE   Sợi được nhìn kỹ: camera lướt dọc một sợi để thấy nó dài, mảnh, liên tục, chằng chịt
CAMERA  travelling dọc trục sợi, tốc độ đều, 50mm; sợi chạy chéo khung từ trái-dưới lên phải-trên
ELEMENT sợi đọc ra là SỢI nhờ 3 lớp: (a) tube spline bán kính biến thiên, opacity 0.18, (b) particle bám quanh
        trục với độ lệch chuẩn giảm dần về lõi, (c) glow trục mảnh; thiên hà trên sợi thiên lam
        `(0.18,0.50,1.00)` after=0.67 (còn sinh sao); thanh tỉ lệ "hàng trăm triệu năm ánh sáng" cao 0.38 world
        @ cam d=22 → ≈ 28px ✔
CUT     travelling liên tục sang S16 khi tới một chỗ giao

## S16 · C16 · CHƯƠNG 1
SCENE   Nút: nhiều sợi hội tụ, thiên hà dồn thành cụm dày đặc, trôi quanh nhau như đàn cá
CAMERA  giảm tốc travelling rồi vòng quanh nút 40° (arc), giữ nút ở **1/3 trái khung** (không đặt giữa)
ELEMENT ≥6 sợi cắm vào nút từ các hướng 3D khác nhau (không đồng phẳng); ~900 thiên hà trong nút,
        chuyển động **ngẫu nhiên có hướng riêng** (virial), không quay đồng bộ;
        thiên hà trong nút **đỏ hơn** `(1.00,0.34,0.10)` after=0.84 (già, hết khí) — tương phản rõ với sợi lam
CUT     arc tiếp sang S17, camera rời nút

## S17 · C17 · CHƯƠNG 1
SCENE   Khoang rỗng lần đầu: camera lùi khỏi nút và rơi vào một vùng tối rộng, sợi lùi ra xa mọi phía
CAMERA  dolly lùi thẳng vào lòng khoang, 50mm → 28mm mở rộng góc; kết ở giữa khoang
ELEMENT khoang đường kính ~6× bán kính nút; bên trong có **đúng 5–7 thiên hà lẻ**, opacity 0.35, rải rất thưa
        (KHÔNG đen tuyệt đối); các sợi bao quanh mờ dần theo depth-fog; im lặng hình: không chuyển động nhanh nào
CUT     đen 1.5s (gap)

## S18 · C18 · CHƯƠNG 1
SCENE   Thử chữ "mạng nhện": một mạng nhện phẳng chồng lên mạng vũ trụ — rồi xoay 90° và **không khớp**
CAMERA  tĩnh, rồi xoay quanh trục dọc 90° trong 2s để lộ mạng nhện chỉ là mặt phẳng mỏng
ELEMENT mạng nhện là lưới 2D nét 1.6px lam xám; khi xoay tới góc nghiêng, nó dẹp thành một đường —
        trong khi mạng vũ trụ phía sau **vẫn còn chiều sâu ở mọi góc**; nhãn "phẳng" tắt, đổi thành "ba hướng"
        cao 0.36 world @ cam d=20 → ≈ 28px ✔
CUT     mạng nhện tan, cắt sang S19

## S19 · C19–C21 · CHƯƠNG 1
SCENE   Thử chữ "bọt": khối bọt xà phòng chồng lên, vách bong bóng trùng với sợi, ruột trùng khoang rỗng; rồi tên gọi hiện ra
CAMERA  push-in chậm vào một cụm vách bong bóng, 28mm → 45mm; kết ở khung toàn mạng lệch tâm
ELEMENT bọt là Voronoi 3D, **vách** phát sáng mờ và trùng khớp với vị trí sợi (±5%), ruột tối;
        lớp bọt fade về 0 để chỉ còn mạng thật; nhãn chương "MẠNG VŨ TRỤ" cao 0.52 world @ cam d=24 → ≈ 34px ✔
        nét dày 3.2px, luminance 0.70 (dưới bloom);
        cuối shot: một khung bản đồ giấy mờ chớp hiện 0.5s — báo trước chương 3
CUT     đen 2.0s (gap), sang CHƯƠNG 2

---

# CHƯƠNG 2 — NHỮNG KHOANG RỖNG (C22–C52 · S20–S48)

## S20 · C22 · CHƯƠNG 2
SCENE   Camera quay ngược lại phía khoang rỗng, sợi bị đẩy ra rìa khung, phần giữa khung là tối
CAMERA  pan chậm từ một sợi sáng sang vùng tối bên cạnh, 35mm; sợi trượt khỏi khung trái
ELEMENT chuyển trọng tâm bố cục: ban đầu sợi chiếm 60% khung, cuối shot chiếm 12%;
        depth-fog tăng để vùng tối đọc ra là THỂ TÍCH chứ không phải nền đen phẳng
CUT     cắt sang S21

## S21 · C23 · CHƯƠNG 2
SCENE   Sơ đồ thể tích: một khối lập phương vũ trụ, phần "có vật chất" tô sáng, phần "không có gì" để trong — tỉ lệ áp đảo
CAMERA  tĩnh, khối hơi nghiêng 3/4 để đọc ra 3D
ELEMENT khối cạnh 1.0 world; thể tích sáng chỉ chiếm ~8% (sợi + nút), 92% trong suốt;
        nhãn phần trăm cao 0.30 world @ cam d=18 → ≈ 26px ✔, nét 2.2px lam xám luminance 0.68
CUT     cắt sang S22

## S22 · C24 · CHƯƠNG 2
SCENE   Thang kích thước khoang rỗng: ba khoang mẫu đường kính vài chục / một trăm / vài trăm triệu ly đặt cạnh nhau
CAMERA  dolly ngang qua ba khoang, mỗi khoang 1.2s, giữ tỉ lệ đúng trên màn hình
ELEMENT ba quả cầu rỗng viền chàm tối `(0.08,0.16,0.38)` after=0.83, đường kính tỉ lệ 1 : 3 : 8;
        **thanh mật độ** bên dưới mỗi khoang: nền = mật độ trung bình vũ trụ, thanh khoang chỉ cao 1/10;
        nhãn "1/10 mật độ trung bình" cao 0.32 world @ cam d=20 → ≈ 25px → nâng 0.38 world
CUT     cắt sang S23

## S23 · C25 · CHƯƠNG 2 ⭐ CAO TRÀO
SCENE   **KHOẢNG TRỐNG BÔ-Ô-TÉT — CẢM GIÁC RỖNG.** Camera vào giữa khoang; mọi hướng đều là tối; thành khoang xa tới mức gần như không thấy
CAMERA  **dolly rất chậm, gần như không cảm nhận được** (0.02 đvị/s), quay tròn 360° trong suốt shot — mỗi hướng đều trống như nhau
ELEMENT thành khoang chỉ là vệt sáng mờ opacity 0.06 ở rìa xa nhất; bên trong **vài chục chấm** rải cực thưa;
        **KHÔNG hiệu ứng, KHÔNG hạt bay, KHÔNG glow** — cảm giác rỗng đến từ việc KHÔNG CÓ GÌ để mắt bám;
        nhãn "Bô-ô-tét · ~300 triệu năm ánh sáng" cao 0.42 world @ cam d=28 → ≈ 26px ✔, đặt lệch góc trái-dưới,
        **có nền tối opacity 0.45 phía sau** để không bị nuốt vào tối
SFX     cắt hẳn bgm xuống 0.06 trong shot này — im lặng là một phần của hình
CUT     giữ khung tối thêm 1s, cắt sang S24

## S24 · C26 · CHƯƠNG 2
SCENE   Phép đếm dự kiến: khoang Bô-ô-tét được "lấp đầy" bằng mật độ quanh Ngân Hà — vài nghìn chấm bật lên
CAMERA  zoom-out ra ngoài khoang để thấy toàn bộ quả cầu, 35mm → 24mm
ELEMENT ~2500 chấm bật lên đều khắp thể tích khoang trong 1.8s, đạt mật độ chuẩn;
        bộ đếm số cao 0.36 world @ cam d=22 → ≈ 26px ✔, chạy lên "~2.000"; nét 2.4px
CUT     giữ khung đầy chấm sang S25

## S25 · C27 · CHƯƠNG 2
SCENE   Số đếm thật: **các chấm tắt đồng loạt, chỉ còn vài chục.** Cú hụt mạnh nhất chương 2
CAMERA  **tĩnh hoàn toàn** — không chuyển động nào, để cú tắt là chuyển động duy nhất
ELEMENT 2500 chấm → ~60 chấm trong 0.8s; bộ đếm rơi từ 2.000 xuống 60;
        60 chấm còn lại **giữ nguyên vị trí cũ**, không tái phân bố — để thấy chúng vốn đã ở đó
CUT     đen 2.0s (gap); 60 chấm giữ opacity 0.3 trong bóng tối

## S26 · C28 · CHƯƠNG 2
SCENE   POV từ một hành tinh trong khoang rỗng: bầu trời đêm vẫn đầy sao — sao của thiên hà chủ nhà
CAMERA  POV nằm ngửa, giống hệt bố cục S01 (khép motif), 32mm; drift 0.3°/s
ELEMENT `HFA.buildStars({count:9000})` — sao dày, đẹp bình thường; ⚠ `uOp` only;
        đường chân trời của một hành tinh lạ (không phải Trái Đất): địa hình đá, không cỏ;
        khán giả phải thấy bầu trời này "bình thường" trước khi biết nó thiếu gì
CUT     giữ khung sang S27

## S27 · C29 · CHƯƠNG 2
SCENE   Thứ THIẾU: khung so sánh cạnh nhau — bầu trời Trái Đất (có vệt mờ Tiên Nữ, có cụm thiên hà) ‖ bầu trời khoang rỗng (không có gì ngoài sao)
CAMERA  split dọc, wipe từ giữa ra hai bên; hai nửa camera cùng góc, cùng tiêu cự
ELEMENT nửa trái: Tiên Nữ là vệt elip mờ opacity 0.4, + 3 cụm thiên hà mờ được khoanh vòng 1.6px;
        nửa phải: **cùng vùng trời, các vật thể đó không tồn tại** — chỉ nền sao;
        vạch chia giữa 2.0px lam xám luminance 0.62
CUT     nửa trái mờ về 0, còn lại nửa phải toàn khung → S28

## S28 · C30 · CHƯƠNG 2
SCENE   Nền văn minh trong khoang rỗng: một kính thiên văn nhỏ chĩa lên, quét bầu trời, không bắt được gì
CAMERA  từ sau lưng kính, tilt lên theo hướng ống kính; 40mm
ELEMENT kính là bóng đen đặc (silhouette), không chi tiết công nghệ cụ thể (tránh gợi thời đại);
        một vòng quét mờ 1.6px chạy qua bầu trời nhiều lần, **mỗi lần đều trống**;
        thiên hà chủ nhà hiện làm dải mờ ngang trời — đó là toàn bộ vũ trụ của họ
CUT     cắt sang S29

## S29 · C31 · CHƯƠNG 2
SCENE   Kết luận sai của họ: một sơ đồ vũ trụ vẽ tay chỉ có MỘT thiên hà giữa nền trống, đóng khung như trang sách cũ
CAMERA  tĩnh, sơ đồ chính diện; cuối shot khung sơ đồ thu nhỏ và trôi vào vị trí thật của nó — một chấm trong khoang rỗng
ELEMENT sơ đồ nét 2.4px lam xám luminance 0.66, chữ "MỘT THIÊN HÀ" cao 0.44 world @ cam d=18 → ≈ 38px ✔;
        cú thu nhỏ cuối shot là câu trả lời hình cho "họ sai vì chỗ họ đứng"
CUT     đen 2.0s (gap)

## S30 · C32 · CHƯƠNG 2
SCENE   Về nhà: camera rời khoang rỗng, bay tới một sợi sáng và **dừng trên đó**
CAMERA  dolly nhanh dần từ tối ra sáng, 3s; kết ở tư thế "đứng trên sợi", sợi chạy ngang khung dưới
ELEMENT chuyển từ tối sang sáng phải có gradient liên tục qua vùng chuyển tiếp (khoang → vách → sợi) —
        mật độ hạt tăng theo hàm mũ, không nhảy bậc; ánh sáng lam `(0.18,0.50,1.00)` after=0.67 dâng lên;
        một chấm nhỏ đánh dấu vị trí Ngân Hà bật lên trên sợi
CUT     cắt sang S31

## S31 · C33 · CHƯƠNG 2
SCENE   Đặt câu hỏi: hai mô phỏng cạnh nhau — "mực loang trong nước" (tản đều) ‖ "mạng vũ trụ" (tự gom)
CAMERA  split ngang, cả hai chạy đồng thời từ cùng trạng thái đầu
ELEMENT trái: vệt mực khuếch tán ra đều, cuối cùng thành nền xám phẳng — kết quả mà trực giác mong đợi;
        phải: cùng hạt, cùng số lượng, nhưng gom thành sợi; **hai bên bắt đầu giống hệt nhau** ở khung đầu;
        nhãn "?" lớn cao 0.50 world @ cam d=20 → ≈ 40px ✔
CUT     đen 1.5s (gap)

## S32 · C34 · CHƯƠNG 2
SCENE   Điểm xuất phát: một khối vũ trụ sơ khai gần như hoàn toàn nhẵn, sáng đều, không đặc điểm
CAMERA  tĩnh, khối choán khung; thở cực nhẹ
ELEMENT trường mật độ FBM biên độ CỰC NHỎ (±0.001), nhìn bằng mắt là **phẳng tuyệt đối**;
        màu cam nóng `(1.00,0.34,0.10)` after=0.84 nhưng độ sáng đều, KHÔNG có điểm nào vượt HDR 1.0
CUT     cắt sang S33

## S33 · C35 · CHƯƠNG 2
SCENE   Biển khí nóng: cùng khối, nhưng bật chế độ "phóng đại tương phản" ×100.000 — gợn sóng hiện ra
CAMERA  push-in chậm vào một mảng nhỏ của khối, 28mm → 60mm
ELEMENT hai lớp chồng: lớp thật (phẳng) và lớp phóng đại (gợn); thanh trượt "×1 → ×100.000" chạy suốt shot,
        nhãn cao 0.34 world @ cam d=16 → ≈ 33px ✔; gợn sóng là FBM 4 octave, KHÔNG có hướng ưu tiên
CUT     cắt sang S34

## S34 · C36 · CHƯƠNG 2
SCENE   Đồ thị dao động mật độ: một đường gần như thẳng tắp trên trục — rồi trục dọc đổi sang thang log và đường lộ ra gợn
CAMERA  tĩnh, đồ thị chiếm 2/3 khung phải, khối vũ trụ mờ bên trái
ELEMENT trục và lưới lam xám `(0.22,0.40,0.62)` after=0.52, nét lưới 1.4px, trục 2.2px;
        đường dữ liệu lục `(0.40,1.00,0.28)` after=0.48, nét 2.6px, luminance 0.70 < 1.0 (KHÔNG vào bloom);
        nhãn "1 phần trăm nghìn" cao 0.34 world @ cam d=18 → ≈ 29px ✔;
        cú đổi thang xảy ra trong 1.0s, có tick trục chạy theo
CUT     cắt sang S35

## S35 · C37 · CHƯƠNG 2
SCENE   Hấp dẫn không đọc bằng mắt: cùng đồ thị, nhưng một lưới thế hấp dẫn võng xuống theo đúng các gợn nhỏ đó
CAMERA  dolly xuống dưới mặt phẳng đồ thị để thấy nó võng thành địa hình 3D
ELEMENT lưới thế 3D nét 1.5px; độ võng **phóng đại phi tuyến** để đọc được, có nhãn "đã phóng đại" cao 0.28 world
        @ cam d=16 → ≈ 27px ✔; ⚠ KHÔNG dùng motif thấu kính hấp dẫn / đường cong quay (ràng buộc #01)
CUT     đen 1.5s (gap)

## S36 · C38 · CHƯƠNG 2
SCENE   Vòng lặp khuếch đại: một chỗ đặc hơn hút vật chất quanh nó, đặc hơn nữa, hút mạnh hơn nữa — chu trình chạy thấy rõ
CAMERA  push-in vừa vào một chỗ đặc; nhịp camera đồng bộ với nhịp gõ (mỗi vòng lặp một nhịp)
ELEMENT N-body nhỏ ~40k hạt quanh một chỗ đặc; sau mỗi vòng lặp, **bán kính thu gom tăng** và mật độ lõi tăng;
        3 mũi tên chu trình nét 2.4px đỏ cam quay vòng bên rìa khung (đặc→hút→đặc), mỗi vòng sáng lên một lần;
        tốc độ tăng dần qua shot — vòng lặp tự gia tốc
CUT     cắt sang S37

## S37 · C39 · CHƯƠNG 2
SCENE   13 tỉ năm chạy không nghỉ: cùng mô phỏng tua nhanh, thanh thời gian chạy từ 0 → 13,8 tỉ năm
CAMERA  zoom-out dần để theo kịp cấu trúc đang lớn ra; 60mm → 24mm
ELEMENT thanh thời gian ngang đáy khung, nét 2.6px, nhãn mốc cao 0.30 world @ cam d=22 → ≈ 22px → nâng 0.40 world;
        cấu trúc tiến hoá: hạt đều → vệt mờ → sợi rõ → nút sáng; **không reset, không cắt** — một cú chạy liên tục
CUT     cắt sang S38

## S38 · C40–C41 · CHƯƠNG 2
SCENE   Chiều ngược lại: camera dõi theo một vùng THƯA, thấy nó bị hàng xóm tước dần vật chất cho tới khi rỗng
CAMERA  theo dõi cố định một vùng thưa, không đổi khung — để thấy nó nghèo đi tại chỗ
ELEMENT các hạt trong vùng thưa lần lượt bị kéo ra ngoài khung theo các hướng khác nhau, **vệt quỹ đạo mờ**
        cho thấy chúng đi đâu; mật độ vùng giảm theo hàm mũ; cuối shot còn ~1/10;
        nhãn "đã bị tước, không phải chưa tới" cao 0.34 world @ cam d=20 → ≈ 27px ✔
CUT     cắt sang S39

## S39 · C42 · CHƯƠNG 2
SCENE   Hai kết cục cạnh nhau: vết lõm nhỏ → cụm thiên hà ‖ vùng nhạt nhỏ → hố rỗng 300 triệu ly
CAMERA  split dọc, hai timeline chạy song song cùng tốc độ
ELEMENT trái: điểm lõm cực nhỏ nở thành nút sáng đầy thiên hà đỏ; phải: vùng nhạt nở thành khoang tối;
        **cùng biên độ ban đầu, chỉ khác dấu** — nhấn bằng hai mũi tên ngược chiều;
        thanh tỉ lệ cuối shot: "300 triệu ly" cao 0.38 world @ cam d=24 → ≈ 26px ✔
CUT     cắt sang S40

## S40 · C43 · CHƯƠNG 2
SCENE   Bản phóng to: khung gợn sóng nguyên thuỷ mờ chồng khớp lên khung mạng vũ trụ hôm nay — **cùng hoa văn, khác thang**
CAMERA  tĩnh; chỉ có opacity hai lớp đổi chỗ cho nhau (cross-fade 3s)
ELEMENT hai lớp phải khớp hình học ≥90% (dùng CÙNG seed noise cho cả hai) — đây là điểm mấu chốt,
        nếu hai lớp không khớp thì shot vô nghĩa; nhãn "×100.000" cao 0.36 world @ cam d=20 → ≈ 29px ✔
CUT     đen 2.0s (gap)

## S41 · C44 · CHƯƠNG 2
SCENE   Chèn kỹ thuật: khung mạng hiện tại, một lớp "cái đang nhìn thấy" được tách ra khỏi "cái đang kéo"
CAMERA  tĩnh, nhịp nhanh gọn (khớp giọng "dọn một chi tiết rồi đi tiếp")
ELEMENT lớp phát sáng (thiên hà, khí) tách trượt sang trái 15% khung; phía sau lộ ra một lớp khác chưa tô màu;
        KHÔNG nhãn dài dòng — chỉ hai nhãn ngắn, cao 0.32 world @ cam d=18 → ≈ 28px ✔
CUT     cắt nhanh sang S42

## S42 · C45 · CHƯƠNG 2
SCENE   Tỉ lệ khối lượng: thanh chia — phần phát sáng chỉ là một mẩu nhỏ ở đầu thanh
CAMERA  tĩnh, thanh ngang chiếm 70% chiều rộng khung
ELEMENT thanh chia tỉ lệ đúng: **khí + sao ≈ 15–17%** của vật chất, phần còn lại tím chàm
        `(0.34,0.10,1.00)` after=0.84; mẩu phát sáng màu vàng `(1.00,0.66,0.12)` after=0.80;
        nhãn cao 0.32 world @ cam d=16 → ≈ 31px ✔; ⚠ KHÔNG giảng "làm sao biết nó có" (ràng buộc #01)
CUT     cắt sang S43

## S43 · C46 · CHƯƠNG 2
SCENE   Bộ khung: lớp vật chất tối hiện ra TRƯỚC dưới dạng rãnh thế ngoằn ngoèo, rồi khí sáng chảy theo rãnh mà rơi vào
CAMERA  dolly-in chậm dọc một rãnh, 30mm → 55mm
ELEMENT rãnh thế là ống bán trong suốt tím chàm `(0.34,0.10,1.00)` after=0.84, opacity 0.14, KHÔNG phát sáng mạnh;
        khí sáng lam là particle stream chảy **bên trong** ống, tốc độ tăng dần khi vào sâu;
        thứ tự thời gian phải đọc ra: khung có trước 1.2s, khí đến sau
CUT     cắt sang S44

## S44 · C47 · CHƯƠNG 2
SCENE   Bỏ qua kiến trúc sư: lớp tím chàm mờ dần về gần 0, chỉ để lại công trình sáng
CAMERA  pull-back thoáng, 55mm → 32mm
ELEMENT opacity lớp tím 0.14 → 0.03 trong 2s (không tắt hẳn — nó vẫn ở đó, chỉ không phải chủ đề);
        khung kết thúc là mạng sáng thuần; KHÔNG nhãn
CUT     đen 2.0s (gap)

## S45 · C48–C49 · CHƯƠNG 2 ⭐ CAO TRÀO (mở)
SCENE   **SỢI KHÔNG ĐỨNG YÊN.** Một sợi đứng im trong 1.5s (tưởng là giá đỡ) — rồi dòng chảy bên trong nó bật lên
CAMERA  tĩnh 1.5s đầu (sợi nằm chéo khung), rồi travelling **cùng chiều dòng chảy** nhưng chậm hơn dòng ~30%,
        để dòng đọc ra là đang vượt qua camera
ELEMENT giai đoạn 1: sợi tĩnh hoàn toàn, chỉ có glow — cố ý cho khán giả kết luận sai;
        giai đoạn 2: bật ~120k particle khí hydro chảy dọc trục, màu lục lam `(0.10,0.85,0.80)` after=0.84;
        **hướng chảy nhất quán về phía nút** (không hai chiều, không rối); vận tốc tăng theo gradient thế;
        mỗi hạt có vệt lưu ảnh 3 khung → đọc ra vector, không phải chấm nhấp nháy
CUT     travelling liên tục sang S46

## S46 · C50 · CHƯƠNG 2 ⭐ CAO TRÀO
SCENE   **KHÍ RÓT VÀO THIÊN HÀ.** Camera đi dọc sợi, đi qua 3 thiên hà; mỗi thiên hà có một nhánh dòng khí tách ra rót thẳng vào nó
CAMERA  travelling dọc sợi đều tốc độ; mỗi thiên hà vào khung ở 1/3 phải, ra ở 1/3 trái
ELEMENT dòng chính lục lam `(0.10,0.85,0.80)`; tại mỗi thiên hà, một nhánh tách khỏi dòng chính và xoắn vào đĩa
        theo quỹ đạo spiral (cold accretion stream), **không rơi thẳng**;
        khí lạnh loãng → dùng mật độ hạt cao + opacity thấp (0.10/hạt), KHÔNG dùng hạt to sáng;
        3 thiên hà đều nghiêng khác nhau để không thành motif lặp
CUT     cắt sang S47

## S47 · C51 · CHƯƠNG 2 ⭐ CAO TRÀO
SCENE   **SINH SAO NGAY LÚC NÀY.** Cận cảnh một thiên hà trên sợi: khí rót vào, và các vùng HII đỏ hồng bật sáng dọc nhánh xoắn
CAMERA  push-in vào đĩa thiên hà, 45mm → 85mm; dừng ở khung nhìn nghiêng 35° trên mặt đĩa
ELEMENT hai trạng thái đối chiếu trong cùng shot: nửa đĩa chưa được rót (xám đỏ, không HII) ‖ nửa đã được rót
        (điểm HII đỏ `(1.00,0.16,0.14)` after=0.75 bật lên theo nhịp, mỗi điểm sống 0.6s);
        đĩa quay **cùng chiều kim đồng hồ nhìn từ cực Bắc thiên hà** (quy ước cả tập);
        **đây là shot phân biệt tập này với #12 quasar: chuyển động ĐANG diễn ra, không phải di ảnh của thứ đã tắt**
CUT     pull-back nhanh sang S48

## S48 · C52 · CHƯƠNG 2 ⭐ CAO TRÀO (chốt)
SCENE   **SỢI LÀ ĐƯỜNG ỐNG.** Khung rộng: toàn bộ một đoạn mạng với dòng khí chảy đồng thời trên MỌI sợi, đổ về các nút
CAMERA  pull-back mạnh ra khung toàn cảnh mạng, 85mm → 20mm trong 3s; camera lệch tâm, mạng tràn 4 cạnh
ELEMENT ≥8 sợi đều có dòng chảy cùng lúc, mỗi sợi có tốc độ riêng; các nút là nơi dòng hội tụ và sáng lên;
        **toàn mạng đọc ra như một hệ tuần hoàn đang hoạt động**, không phải một bức tranh tĩnh;
        ⚠ chống lấm tấm: dòng phải đọc ra là đường liên tục — xem GHI CHÚ mục 2
CUT     đen 2.0s (gap), sang CHƯƠNG 3

---

# CHƯƠNG 3 — TẤM BẢN ĐỒ (C53–C93 · S49–S82)

## S49 · C53 · CHƯƠNG 3
SCENE   Đổi giọng: mạng sáng đẹp bị thay bằng một khung trống có lưới toạ độ — chế độ "kiểm chứng"
CAMERA  tĩnh; mạng mờ về 0.15, lưới toạ độ bật lên chồng trên nó
ELEMENT lưới toạ độ cầu nét 1.4px lam xám `(0.22,0.40,0.62)` after=0.52, luminance 0.62;
        nhịp gõ khô bắt đầu — camera đứng im khớp nhịp
CUT     cắt sang S50

## S50 · C54 · CHƯƠNG 3
SCENE   Vị trí quan sát: một chấm duy nhất (Trái Đất) trong cả khối mạng khổng lồ — không di chuyển đi đâu được
CAMERA  zoom-out từ chấm ra toàn khối trong 2.5s; chấm nhỏ tới mức gần biến mất
ELEMENT chấm quan sát viền vòng 1.8px lục `(0.40,1.00,0.28)` after=0.48, đường kính cuối shot ≤ 4px;
        khối mạng tràn 4 cạnh; nhãn "một điểm, đứng yên" cao 0.36 world @ cam d=26 → ≈ 23px → nâng 0.44 world
CUT     cắt sang S51

## S51 · C55 · CHƯƠNG 3
SCENE   Bầu trời không có chiều sâu: hai chấm sáng cạnh nhau trên vòm trời, rồi khung xoay 90° để lộ chúng cách nhau cực xa theo chiều sâu
CAMERA  từ POV mặt đất, quay quanh trục ngang 90° trong 2.5s sang góc nhìn cạnh
ELEMENT hai chấm ban đầu cách nhau 40px trên khung; sau khi xoay, khoảng cách thật là 1 : 1000;
        đường tia nhìn nét 1.4px nối mắt tới cả hai chấm, cho thấy chúng **chiếu lên cùng một hướng**;
        nhãn "10 ly hay 10 tỉ ly?" cao 0.34 world @ cam d=18 → ≈ 29px ✔
CUT     cắt sang S52

## S52 · C56 · CHƯƠNG 3
SCENE   Thiếu chiều thứ ba: bầu trời phẳng như một tấm ảnh dán, rồi một trục z rỗng được dựng vuông góc với nó
CAMERA  dolly ngang để tấm ảnh dẹp thành một đường, trục z lộ ra trống trơn
ELEMENT tấm trời là mặt phẳng texture; trục z nét 2.4px lam xám kéo dài về chiều sâu, **chưa có điểm nào trên nó**;
        nhãn "z = ?" cao 0.32 world @ cam d=16 → ≈ 31px ✔
CUT     đen 1.5s (gap)

## S53 · C57–C58 · CHƯƠNG 3
SCENE   Vũ trụ giãn ra: lưới không gian giữa các thiên hà nở đều ra mọi hướng, thiên hà càng xa lùi càng nhanh
CAMERA  tĩnh, camera gắn vào một thiên hà "của tôi" ở góc dưới trái (KHÔNG ở giữa — vũ trụ không có tâm)
ELEMENT lưới 3D nở đồng đều (mọi ô lớn cùng tỉ lệ); vector vận tốc của mỗi thiên hà **tỉ lệ thuận với khoảng cách**
        (Hubble) — mũi tên xa dài gấp bội mũi tên gần, nét 2.2px đỏ cam;
        nhấn: thiên hà quan sát viên KHÔNG đặc biệt — chèn 0.8s chuyển gốc sang thiên hà khác, hình y hệt
CUT     cắt sang S54

## S54 · C59 · CHƯƠNG 3
SCENE   Dịch đỏ: quang phổ một thiên hà, các vạch hấp thụ trượt về phía đỏ; kèm phép so sánh tiếng còi xe
CAMERA  tĩnh; dải phổ ngang chiếm 60% chiều rộng khung
ELEMENT dải phổ liên tục lam→đỏ; 4 vạch hấp thụ tối rõ, trượt **cùng một tỉ lệ** sang phải (không trượt lệch nhau);
        vạch tham chiếu phòng thí nghiệm giữ nguyên bên trên, nét đứt 1.6px;
        thước bước sóng nhãn cao 0.28 world @ cam d=14 → ≈ 31px ✔; toàn bộ sơ đồ luminance ≤ 0.72 (dưới bloom);
        chèn mờ 0.8s: sóng âm còi xe giãn ra — cùng hình học, khác vật lý
CUT     cắt sang S55

## S55 · C60–C61 · CHƯƠNG 3
SCENE   Một cái đinh: từ phép đo dịch đỏ, một điểm sáng được cắm vào đúng toạ độ trong khối 3D rỗng
CAMERA  từ khung phổ 2D, camera xoay sang khung 3D và đặt điểm; 35mm
ELEMENT chuỗi ba bước hình: phổ → số z → điểm 3D, mỗi bước 0.8s, nối bằng đường mảnh 1.4px;
        điểm đầu tiên sáng lục `(0.40,1.00,0.28)` after=0.48 trong khối trống — **chỉ một điểm, không ra hình gì**
CUT     đen 1.5s (gap)

## S56 · C62–C63 · CHƯƠNG 3
SCENE   Một đinh chưa đủ: điểm thứ hai, thứ ba, thứ mười... vẫn là đám chấm vô nghĩa
CAMERA  zoom-out chậm đều; bộ đếm chạy ở góc
ELEMENT bộ đếm số thiên hà chạy 1 → 10 → 100 → 1.000, nhãn cao 0.34 world @ cam d=20 → ≈ 27px ✔;
        ở mốc 1.000 khung vẫn **chưa đọc ra sợi** — cố ý, để cú C69 có chỗ bung
CUT     cắt sang S57

## S57 · C64 · CHƯƠNG 3
SCENE   Đài quan sát: một mái vòm kính giữa sa mạc Niu Mê-hi-cô về đêm, khe mở, ống kính 2,5m chĩa lên; bên kia màn hình là một đài ở Úc
CAMERA  từ xa, dolly ngang chậm; 50mm; chân trời sa mạc thấp
ELEMENT hai đài đặt hai bên khung, nền trời sao thật `HFA.buildStars` (⚠ `uOp` only);
        mái vòm là bóng đen với một vệt phản sáng lam rất mảnh; đèn đỏ an toàn nhỏ trên mái;
        nhãn "Sờ-loan · Niu Mê-hi-cô" cao 0.32 world @ cam d=22 → ≈ 24px → nâng 0.40 world
CUT     cắt sang S58

## S58 · C65 · CHƯƠNG 3
SCENE   Tấm nhôm khoan lỗ: cận cảnh một đĩa nhôm tròn, hàng trăm lỗ khoan, mỗi lỗ cắm một sợi quang
CAMERA  cận cảnh chính diện, rồi tilt sang góc 40° để thấy bó sợi quang phía sau tấm
ELEMENT tấm nhôm đường kính 0.8m, ~640 lỗ phân bố **không đều** (theo vị trí thiên hà thật trên mảnh trời);
        sợi quang là các sợi mảnh dẫn một chấm sáng chạy dọc về phía máy phổ;
        vật liệu kim loại xám thật, KHÔNG phát sáng — tương phản với ánh sáng chạy trong sợi
CUT     cắt sang S59

## S59 · C66 · CHƯƠNG 3
SCENE   Lặp lại 15 năm: các tấm nhôm thay nhau, chồng lên nhau trong kho; nhịp cắt đều, khô
CAMERA  tĩnh, góc cố định trên giá đỡ; mỗi tấm thay trong 0.35s
ELEMENT ~18 lần thay tấm liên tiếp, mỗi tấm hoa văn lỗ khác nhau; xen kẽ khung kho: hàng trăm tấm xếp trên kệ;
        thanh thời gian chạy "1998 → 2013" nét 2.4px, nhãn cao 0.30 world @ cam d=16 → ≈ 29px ✔;
        nhịp thay tấm khớp nhịp gõ bgm
CUT     cắt sang S60

## S60 · C67 · CHƯƠNG 3
SCENE   Không có khoảnh khắc phát hiện: kho tấm nhôm tĩnh lặng, bụi trong luồng sáng, không ai trong khung
CAMERA  dolly rất chậm dọc kệ; 35mm
ELEMENT chỉ tấm nhôm và bụi; **không nhãn, không hiệu ứng** — shot nghỉ có chủ đích trước cao trào C69
CUT     đen 1.5s (gap)

## S61 · C68 · CHƯƠNG 3
SCENE   Đem chấm lên biểu đồ: khung quạt dịch đỏ kiểu Sờ-loan dựng lên — đỉnh quạt là Trái Đất, mở ra theo khoảng cách
CAMERA  tĩnh, quạt chiếm toàn khung, đỉnh ở đáy giữa-lệch-trái
ELEMENT khung quạt nét 1.8px lam xám, cung tick khoảng cách (500 / 1.000 / 1.500 Mpc) nhãn cao 0.30 world
        @ cam d=18 → ≈ 26px ✔; **quạt còn TRỐNG**; nhịp gõ ngắt một nhịp ở cuối shot
CUT     giữ khung trống 0.8s — chuẩn bị cho S62

## S62 · C69 · CHƯƠNG 3 ⭐ CAO TRÀO
SCENE   **"VÀ HÌNH HIỆN RA."** Hàng trăm nghìn chấm đổ vào quạt cùng lúc, và cấu trúc sợi–nút–khoang rỗng lộ ra
CAMERA  **TĨNH HOÀN TOÀN.** Không zoom, không pan, không dolly. Khung y hệt S61. (cue 4 từ — hình BUNG, camera NGHỈ)
ELEMENT ~400k chấm đổ vào trong 1.6s theo thứ tự **từ gần ra xa** (như dữ liệu thật tích luỹ theo khoảng cách);
        khi đủ mật độ, sợi tự đọc ra — KHÔNG vẽ thêm đường nối, KHÔNG glow nhân tạo:
        cấu trúc phải nổi lên từ chính mật độ chấm (xem GHI CHÚ mục 2 về cách tránh "lấm tấm");
        **nhận ra ngay các "ngón tay Chúa"** — vệt kéo dài theo tia nhìn ở các cụm (hiệu ứng vận tốc riêng, có thật);
        giữ khung tĩnh 2s sau khi chấm đổ xong
CUT     giữ đen 2.0s (gap) với bản đồ vẫn hiện, opacity 0.7

## S63 · C70 · CHƯƠNG 3
SCENE   Không phải sương: camera soi kỹ vào bản đồ — gân rõ, tách bạch, lỗ đen ngòm giữa chúng
CAMERA  push-in vào một mảng của quạt, 30mm → 70mm; drift ngang để parallax nhẹ
ELEMENT tăng tương phản: vùng sợi mật độ chấm cao gấp ≥15× vùng khoang rỗng;
        chèn 0.6s một lớp "làm mờ giả" (nếu là sương thì trông thế này) rồi tắt — để đối chiếu
CUT     cắt sang S64

## S64 · C71–C72 · CHƯƠNG 3
SCENE   Bức tường lớn Sờ-loan: một dải mật độ cao được tô nhấn, kéo dài xuyên qua bản đồ
CAMERA  travelling dọc theo bức tường từ đầu này sang đầu kia, 4s; tốc độ đều để chiều dài đọc ra
ELEMENT dải nhấn màu vàng hổ phách `(1.00,0.62,0.06)` after=0.93, opacity 0.30, **bao lấy các chấm chứ không thay chúng**;
        nhấn rõ rằng nó KHÔNG phải một vật thể liên kết: viền dải đứt quãng, không có ranh giới cứng;
        nhãn "Bức tường lớn Sờ-loan · 2003 · ~1,4 tỉ ly" cao 0.38 world @ cam d=24 → ≈ 26px ✔, nền tối 0.45
CUT     cắt sang S65

## S65 · C73 · CHƯƠNG 3
SCENE   Để con số ngồi lại: thanh so sánh dọc — chiều dài bức tường tính bằng thời gian ánh sáng, đặt cạnh thanh "sự sống đa bào trên Trái Đất"
CAMERA  tĩnh; hai thanh dọc cạnh nhau, chiều cao tỉ lệ đúng
ELEMENT thanh A "1,4 tỉ năm ánh sáng" cao 100%; thanh B "sự sống đa bào ~600 triệu năm" cao 43%;
        thanh A vàng hổ phách, thanh B lam xám; nhãn cao 0.34 world @ cam d=18 → ≈ 29px ✔, nét 2.4px;
        thanh A mọc lên trong 2s, dừng, giữ 1.5s im lặng
CUT     đen 2.0s (gap)

## S66 · C74 · CHƯƠNG 3
SCENE   Mô tả chưa phải hiểu: bản đồ thật ở nửa trái khung, nửa phải là một khung trống chờ được lấp
CAMERA  tĩnh; đường chia dọc chính giữa
ELEMENT nửa phải hoàn toàn trống, viền nét đứt 1.8px lam xám; nhãn "mô tả" ‖ "giải thích" cao 0.36 world
        @ cam d=20 → ≈ 29px ✔; nhịp gõ chuyển sang đều-lạnh kiểu máy tính
CUT     cắt sang S67

## S67 · C75 · CHƯƠNG 3
SCENE   Việc táo tợn: khung phải bắt đầu được dựng — một khối lập phương ảo rỗng với lưới toạ độ
CAMERA  dolly nhẹ sang phải để khối chiếm trọng tâm
ELEMENT khối lập phương cạnh 1.0, lưới 1.4px; góc khung hiện thông số "hộp mô phỏng" dạng text kỹ thuật
        cao 0.26 world @ cam d=14 → ≈ 29px ✔; màu lam kim loại `(0.14,0.46,1.00)` after=0.75 cho toàn bộ
        phần "máy" — phân biệt với vàng hổ phách của "dữ liệu thật"
CUT     cắt sang S68

## S68 · C76 · CHƯƠNG 3
SCENE   Rắc hạt: hàng tỉ hạt đổ vào khối, xếp gần như đều — rồi thêm những gợn lệch tí xíu từ ánh sáng cổ nhất
CAMERA  push-in vào khối để thấy lưới hạt gần như đều; rồi pull-back ra toàn khối
ELEMENT giai đoạn 1: lưới hạt đều (glass-like), biên độ nhiễu 0; giai đoạn 2: bật trường nhiễu **cùng seed
        với S32/S40** (nhất quán cả tập), biên độ ±0.001 — mắt gần như không thấy;
        chèn 0.8s bản đồ CMB thật làm nguồn của trường nhiễu, opacity 0.5
CUT     cắt sang S69

## S69 · C77–C78 · CHƯƠNG 3
SCENE   Bật hấp dẫn: bộ đếm bước thời gian chạy, hạt bắt đầu dịch chuyển; không can thiệp gì thêm
CAMERA  tĩnh với khối chính diện; **camera không được cử động** trong shot này — nhấn "không can thiệp"
ELEMENT bộ đếm "bước thời gian" chạy lên hàng triệu, nhãn cao 0.28 world @ cam d=16 → ≈ 27px ✔;
        hạt dịch chuyển chậm rồi nhanh dần; dưới khung hiện một dòng duy nhất: phương trình lực hấp dẫn,
        cao 0.26 world → ≈ 25px → nâng 0.30 world, luminance 0.66 (dưới bloom)
CUT     cắt sang S70

## S70 · C79 · CHƯƠNG 3
SCENE   Thế hệ mô phỏng: Mi-len-ni-um 2005 rồi I-lu-strít Ti En Ét — cùng khối, độ phân giải tăng bậc
CAMERA  push-in qua từng cấp phân giải, mỗi cấp 1.2s
ELEMENT 3 cấp: hạt thô → hạt mịn → có khí + sao; số hạt hiển thị tăng theo bậc;
        nhãn tên + năm cao 0.34 world @ cam d=18 → ≈ 29px ✔; toàn bộ giữ lam kim loại `(0.14,0.46,1.00)`
CUT     cắt sang S71

## S71 · C80 · CHƯƠNG 3
SCENE   Chỉ hai thứ đầu vào: khung đầu vào tối giản — một ô "hạt rải gần đều" và một ô "định luật hấp dẫn"; không có ô nào ghi "vẽ sợi"
CAMERA  tĩnh; bố cục hai ô cân đối, khối mô phỏng mờ phía sau
ELEMENT hai ô viền 2.0px lam kim loại; một ô thứ ba có nhãn "hình dạng mong muốn" hiện ra rồi **bị gạch chéo và tắt**;
        nhãn cao 0.36 world @ cam d=18 → ≈ 31px ✔
CUT     đen 2.0s (gap)

## S72 · C81 · CHƯƠNG 3
SCENE   Chạy xong: khối mô phỏng hiện ra đầy đủ — sợi, nút, khoang rỗng, tất cả tự mọc ra
CAMERA  **tĩnh hoàn toàn** (khớp im lặng một nhịp), khối chính diện lệch tâm nhẹ
ELEMENT khối kết quả với cấu trúc rõ; ba nhãn ngắn lần lượt bật: "sợi" → "nút" → "khoang rỗng",
        mỗi nhãn cao 0.34 world @ cam d=20 → ≈ 27px ✔, cách nhau 0.9s; bgm rút về gần im lặng
CUT     cắt sang S73 — cú cắt này phải DỨT KHOÁT

## S73 · C82 · CHƯƠNG 3 ⭐⭐ CAO TRÀO TRUNG TÂM CẢ TẬP
SCENE   **HAI BỨC CẠNH NHAU.** Trái: bản đồ vẽ từ ánh sáng thật của hàng triệu thiên hà thật (vàng hổ phách). Phải: thứ máy tự nặn ra từ vài dòng vật lý (lam kim loại). **Và chúng trông giống nhau.**
CAMERA  tĩnh tuyệt đối, split dọc chính giữa, hai nửa **cùng tiêu cự, cùng góc, cùng thang khoảng cách, cùng độ sáng trung bình**. Camera không cử động suốt shot — mắt phải được tự do so sánh
ELEMENT **NGÂN SÁCH DỰNG LỚN NHẤT CẢ TẬP.** Yêu cầu bắt buộc:
        (a) hai nửa dùng **cùng một seed noise gốc** nhưng hai đường dựng khác nhau (một từ "quan sát" có nhiễu
        đo + hiệu ứng ngón tay Chúa + vùng khuyết bầu trời; một từ "mô phỏng" sạch, không nhiễu đo)
        — chúng phải GIỐNG về cấu trúc mà KHÁC về kết cấu bề mặt, nếu giống hệt pixel thì khán giả đọc ra là gian lận;
        (b) nửa trái vàng hổ phách `(1.00,0.62,0.06)` after=0.93; nửa phải lam kim loại `(0.14,0.46,1.00)` after=0.75;
        (c) mỗi nửa ≥ 250k chấm, cùng mật độ;
        (d) nhãn "QUAN SÁT" ‖ "MÔ PHỎNG" cao 0.42 world @ cam d=22 → ≈ 31px ✔, nét 2.8px, đặt ở đáy mỗi nửa
        với nền tối opacity 0.45; (e) vạch chia giữa 2.0px, luminance 0.60 — mảnh, không cướp chú ý
CUT     giữ khung tĩnh trọn cue; KHÔNG cắt — sang S74 bằng cách thêm lớp đo đạc lên chính khung này

## S74 · C83 · CHƯƠNG 3 ⭐⭐ CAO TRÀO TRUNG TÂM (phần đo)
SCENE   **KHỚP Ở NHỮNG THỨ ĐO ĐƯỢC.** Trên chính khung split của S73, bốn phép đo lần lượt chạy trên cả hai nửa và cho cùng kết quả
CAMERA  giữ nguyên khung S73, không cử động; chỉ lớp đo đạc chuyển động
ELEMENT bốn phép đo nối tiếp, mỗi phép 2.5s, chạy **đồng thời trên cả hai nửa**:
        (1) chiều dài sợi — thước bám dọc một sợi ở mỗi bên, hai số dừng gần bằng nhau;
        (2) đường kính khoang rỗng — vòng tròn đo nở ra trong một khoang mỗi bên;
        (3) số cụm/đơn vị thể tích — ô đếm quét qua, bộ đếm chạy;
        (4) **hàm tương quan hai điểm ξ(r)** — một đồ thị log–log nhỏ ở đáy khung, hai đường (vàng và lam)
        vẽ lên **chồng khít nhau**; đây là bằng chứng mạnh nhất, cho nó nhiều thời gian nhất;
        đồ thị nhãn cao 0.26 world @ cam d=22 → ≈ 19px ✘ → **phải nâng lên 0.36 world → ≈ 26px ✔**;
        hai đường nét 2.6px, luminance 0.70 (dưới bloom); lệch giữa hai đường ≤ 4% suốt dải r
CUT     đen 1.5s (gap), hai nửa giữ opacity 0.5

## S75 · C84–C85 · CHƯƠNG 3
SCENE   Nói cho rõ: một trang giấy với vài dòng quy tắc, rồi mũi tên duy nhất chạy từ trang giấy sang bản đồ bầu trời
CAMERA  push-in vào trang giấy, rồi pan theo mũi tên sang phải tới bản đồ
ELEMENT trang giấy tối giản, chỉ 4–5 dòng ký hiệu vật lý mờ (không cần đọc được nội dung),
        chiều cao dòng 0.24 world @ cam d=12 → ≈ 31px ✔; mũi tên nét 2.8px lục `(0.40,1.00,0.28)` after=0.48;
        chuỗi mốc dọc mũi tên: "gần nhẵn → 13 tỉ năm → cấu trúc quan sát được"
CUT     cắt sang S76

## S76 · C86–C87 · CHƯƠNG 3
SCENE   Rất nhiều cách để lệch: ba kết quả SAI hiện ra lần lượt (sợi mảnh hơn / khoang nhỏ hơn / ít cụm hơn), mỗi cái bị gạch bỏ; rồi kết quả thật khớp
CAMERA  tĩnh, khung chia 3 ô nhỏ trên + 1 ô lớn dưới
ELEMENT ba ô sai dựng bằng cùng bộ hạt nhưng đổi tham số vật lý; mỗi ô có dấu gạch chéo đỏ `(1.00,0.16,0.14)`
        after=0.75 nét 2.6px; ô lớn dưới là bản khớp, viền lục;
        nhãn mỗi ô cao 0.24 world @ cam d=14 → ≈ 26px ✔;
        cuối shot: ba ô sai tắt, ô khớp nở ra choán khung
CUT     đen 2.0s (gap)

## S77 · C88 · CHƯƠNG 3
SCENE   Chuyển sang câu hỏi cuối: nhịp gõ tắt, mạng vũ trụ trở lại khung rộng, yên tĩnh
CAMERA  pull-back rất chậm từ ô khớp ra toàn mạng; 45mm → 22mm
ELEMENT mọi lớp sơ đồ, nhãn, lưới tắt hết trong 1.5s — chỉ còn cấu trúc;
        depth-fog dày hơn để mạng đọc ra vô tận về chiều sâu
CUT     cắt sang S78

## S78 · C89 · CHƯƠNG 3
SCENE   Cái thang tổ chức: các bậc lần lượt xếp chồng lên nhau, mỗi bậc là một hình nhỏ — hạt nhân, nguyên tử, phân tử, đá, hành tinh, sao, thiên hà, nhóm, sợi
CAMERA  tilt lên đều đặn theo từng bậc, tốc độ không đổi — nhịp leo thang phải ĐỀU
ELEMENT 9 bậc, mỗi bậc 0.9s, mỗi bậc một hình minh hoạ nhỏ (không chi tiết quá, đọc ra hình bóng là đủ);
        bậc vẽ bằng nét 2.2px lam xám; nhãn mỗi bậc cao 0.26 world @ cam d=15 → ≈ 27px ✔;
        thang **lệch trái khung**, phần phải để trống — chỗ trống đó là ý đồ của C93
CUT     tilt liên tục sang S79

## S79 · C90 · CHƯƠNG 3
SCENE   Thang vẫn đi lên: camera tiếp tục tilt lên trên bậc "sợi", kỳ vọng còn bậc nữa
CAMERA  tilt tiếp cùng tốc độ, không giảm — kỳ vọng được xây bằng chính sự đều đặn
ELEMENT phía trên bậc "sợi" là **khoảng trống**, nhưng camera chưa dừng nên khán giả chưa nhận ra;
        vệt mờ của một bậc giả hiện 0.4s rồi tắt (bẫy thị giác cố ý)
CUT     cắt sang S80

## S80 · C91 · CHƯƠNG 3 ⭐ CAO TRÀO
SCENE   **CÁI THANG DỪNG.** Camera đang tilt lên thì **phanh đột ngột** — phía trên bậc mạng vũ trụ không có gì
CAMERA  **dừng đột ngột trong 0.2s** (ease cực gắt), rồi tĩnh hoàn toàn 2s. Cú phanh chính là nội dung của shot
ELEMENT thang cắt cụt ở bậc cuối; phần khung phía trên bậc cuối **trống thật** — không hạt, không fog, không sao;
        không có nhãn nào ở vùng trống đó (khoảng trắng là thông điệp)
CUT     giữ tĩnh, sang S81

## S81 · C92 · CHƯƠNG 3
SCENE   Lặp lại chính mình: camera bay ra xa mạng vũ trụ rất nhanh — hoa văn không gom vào cấp lớn hơn, chỉ lặp lại y hệt
CAMERA  dolly lùi **rất nhanh và liên tục** 6s, tốc độ không đổi; đây là shot duy nhất cả tập camera đi nhanh
ELEMENT mạng dựng bằng noise **thống kê đồng nhất** — khi camera lùi, thang đặc trưng không đổi:
        hoa văn mới luôn cùng kích thước biểu kiến với hoa văn cũ (đây là điểm kỹ thuật cốt lõi của shot);
        KHÔNG có siêu-cấu trúc nào hình thành; KHÔNG có tâm; mạng tràn 4 cạnh suốt shot
CUT     cắt sang S82

## S82 · C93 · CHƯƠNG 3 ⭐ CAO TRÀO
SCENE   **NÓ KHÔNG CÓ Ở ĐÓ.** Trở lại khung thang cắt cụt; một ô bậc trống nét đứt hiện phía trên rồi **tan biến**, không phải bị gạch bỏ
CAMERA  tĩnh tuyệt đối
ELEMENT ô bậc trống viền nét đứt 1.8px, opacity leo 0 → 0.35 rồi về 0 trong 2s — **tan, không nổ, không gạch**;
        (phân biệt "khó leo" với "không có ở đó" bằng chính cách nó biến mất);
        nhãn cuối "cấp tổ chức cuối cùng" cao 0.40 world @ cam d=20 → ≈ 32px ✔, nét 2.8px
CUT     đen 2.0s (gap), sang CHƯƠNG 4

---

# CHƯƠNG 4 — ĐỊA CHỈ (C94–C116 · S83–S94 · 12 shot)

## S83 · C94–C95 · CHƯƠNG 4
SCENE   Ba phép so sánh quen thuộc: mạng vũ trụ ‖ mạng nơ-ron ‖ sợi nấm ‖ bọt xà phòng — bốn ô, hoa văn giống nhau đến kỳ lạ
CAMERA  tĩnh, lưới 2×2; mỗi ô có chuyển động rất chậm riêng
ELEMENT bốn ô **cùng thang biểu kiến**, cùng độ sáng trung bình, để so sánh công bằng;
        ô vũ trụ giữ màu thật; ba ô kia khử bão hoà về gần đơn sắc (0.12,0.16,0.22) để không cướp chú ý;
        nhãn mỗi ô cao 0.24 world @ cam d=14 → ≈ 26px ✔
CUT     cắt sang S84

## S84 · C96 · CHƯƠNG 4
SCENE   Cùng một loại quy tắc: một mô phỏng trừu tượng duy nhất — "mạnh hơn thì lấy thêm, yếu hơn thì mất dần" — chạy ra cả bốn hoa văn
CAMERA  push-in vào ô trung tâm nơi bốn ô hội tụ thành một
ELEMENT một trường 2D đơn giản với luật khuếch đại, chạy 3s; kết quả tự tách thành sợi–nút–rỗng;
        ba nhãn cực ngắn bật theo: "lấy thêm" / "mất dần" / "lặp đủ lâu", cao 0.30 world @ cam d=16 → ≈ 29px ✔
CUT     cắt sang S85

## S85 · C97–C98 · CHƯƠNG 4
SCENE   Phần hay nhất không nằm ở phép so sánh: ba ô kia mờ tắt, còn lại ô vũ trụ — rồi camera quay ngược về phía Trái Đất
CAMERA  ba ô tắt, ô còn lại nở ra choán khung; rồi dolly lùi để lộ một chấm xanh nhỏ ở góc
ELEMENT chấm Trái Đất đường kính ≤ 6px, không nhãn; tương phản kích thước là toàn bộ nội dung shot;
        KHÔNG dùng hiệu ứng bi luỵ (không vignette nặng, không fade chậm lê thê)
CUT     cắt sang S86

## S86 · C99–C100 · CHƯƠNG 4
SCENE   Tất cả những gì chúng ta có: một mái kính giữa sa mạc, ánh sáng rơi xuống, và một máy đo màu — lặp lại vài triệu lần
CAMERA  từ khung rộng sa mạc, push-in vào khe mái vòm, rồi vào ống dẫn ánh sáng
ELEMENT chùm photon đi vào là một vệt mảnh, KHÔNG hoành tráng; máy phổ tách nó thành dải màu;
        bộ đếm phép đo chạy lên "2.400.000" ở góc, nhãn cao 0.30 world @ cam d=18 → ≈ 26px ✔;
        nhấn rằng không có tàu vũ trụ, không ảnh chụp từ ngoài — chỉ ánh sáng và sự kiên nhẫn
CUT     cắt sang S87

## S87 · C101 · CHƯƠNG 4
SCENE   Hai bên khớp (nhắc lại ngắn): khung split S73 trở lại trong 1.5s, rồi hai nửa **trượt chồng lên nhau** thành một
CAMERA  tĩnh; chuyển động duy nhất là hai nửa trượt vào nhau
ELEMENT hai nửa chồng khít; nơi chồng nhau màu pha thành trắng ấm nhưng **giữ luminance ≤ 0.85** (chống cháy trắng);
        vạch chia giữa biến mất; đây là nút thắt được gỡ, không cần nhãn
CUT     đen 2.0s (gap)

## S88 · C102–C103 · CHƯƠNG 4 ⭐ CAO TRÀO
SCENE   **LA-NI-A-KÊ-A.** Từ khung toàn mạng, một vùng dòng chảy được tô sáng: mọi vector vận tốc trong vùng đều hội tụ về một chỗ
CAMERA  bắt đầu ở khung toàn mạng lệch tâm, dolly-in vừa phải vào vùng đó; 24mm → 40mm
ELEMENT **trường vector vận tốc** — hàng nghìn đường dòng (streamline) mảnh 1.2px, mỗi đường có chuyển động
        chạy dọc nó; ranh giới La-ni-a-kê-a là **mặt phân thuỷ** nơi đường dòng đổi hướng — vẽ bằng mặt bán
        trong suốt đỏ thắm `(1.00,0.20,0.24)` after=0.63, opacity 0.12;
        điểm hội tụ (Great Attractor) là nơi đường dòng dồn về, **KHÔNG phát sáng mạnh** — nó là cái hút, không phải cái sáng;
        nhãn "La-ni-a-kê-a · bầu trời mênh mông" cao 0.44 world @ cam d=26 → ≈ 28px ✔, nền tối 0.45
CUT     cắt sang S89

## S89 · C104–C105 · CHƯƠNG 4
SCENE   Vị trí Ngân Hà: **ở RÌA**, không phải ở giữa — nơi đường dòng còn do dự, chưa dứt khoát ngả về bên nào
CAMERA  dolly từ điểm hội tụ ra phía rìa, 3s; kết ở khung rìa với ranh giới mặt phân thuỷ chạy chéo
ELEMENT chấm Ngân Hà viền vòng 1.8px lục, đặt **sát ranh giới** (trong phạm vi 8% bán kính từ mặt phân thuỷ);
        quanh nó đường dòng ngắn, hướng lộn xộn, vài đường đảo chiều — "do dự" phải đọc ra bằng hình;
        thanh tỉ lệ "520 triệu ly · ~100.000 thiên hà lớn" cao 0.38 world @ cam d=24 → ≈ 26px ✔
CUT     dolly-in liên tục sang S90

## S90 · C106 · CHƯƠNG 4
SCENE   Đi ngược thang — ba bậc liền một hơi: nhóm mấy chục thiên hà → một đĩa xoắn → một ngôi sao vàng trên nhánh xoắn
CAMERA  **một cú dolly-in liên tục không cắt**, 5s, tăng tốc rồi giảm tốc ở đích; 40mm → 75mm
ELEMENT bậc 1: Nhóm Địa Phương, Ngân Hà + Tiên Nữ đúng tỉ lệ 25 đường kính (khớp S11);
        bậc 2: Ngân Hà quay **cùng chiều kim đồng hồ nhìn từ cực Bắc thiên hà** (khớp S09);
        bậc 3: Mặt Trời ở **26.000 ly từ tâm, trên nhánh Orion**, là chấm vàng `(1.00,0.70,0.18)` after=0.67,
        cỡ trung bình — không nhấn, không hào quang đặc biệt
CUT     dolly-in liên tục sang S91

## S91 · C107 · CHƯƠNG 4
SCENE   Bốn bậc cuối, nhịp nhanh dần: hành tinh thứ ba → một lục địa → một mái nhà → người nằm ngửa nhìn lên
CAMERA  dolly-in tiếp, mỗi bậc ngắn hơn bậc trước (1.2s → 0.9s → 0.7s → dừng); khung cuối phải
        **trùng khớp bố cục S01** — cùng tiêu cự 32mm, cùng đường chân trời, cùng bóng cỏ
ELEMENT Trái Đất texture NASA, trục nghiêng 23.4° (khớp S07); lục địa nhận ra được; mái nhà là bóng đen;
        người nằm ngửa chỉ là silhouette ở rìa dưới khung, không chi tiết mặt
CUT     đen 2.0s (gap)

## S92 · C108–C110 · CHƯƠNG 4
SCENE   Không nhỏ bé mà có chỗ bám: POV bầu trời đêm, và **đường gân sợi chồng mờ lên nó** — lần này thấy rõ, kèm dòng khí đang chảy
CAMERA  tĩnh, giống hệt S01; chỉ có lớp chồng và dòng chảy chuyển động
ELEMENT lớp gân là các spline 3D đi qua **đúng vị trí bầu trời thật**, opacity 0.22, đỏ cam `(1.00,0.34,0.10)`
        after=0.84; trên gân có dòng hạt lục lam `(0.10,0.85,0.80)` after=0.84 chảy chậm về phía một nút ngoài khung;
        một gân **đi ngang qua đúng thiên đỉnh** — trên đầu người đang nằm;
        bầu trời sao nền giữ nguyên `HFA.buildStars` ⚠ `uOp` only
CUT     giữ khung, sang S93

## S93 · C111–C112 · CHƯƠNG 4
SCENE   Đường đi của nguyên tử: một vệt sáng đơn lẻ truy ngược — trôi dọc sợi → rơi vào thiên hà → qua trong lòng một ngôi sao → xuống một hành tinh → tới bàn tay
CAMERA  travelling bám theo vệt sáng suốt hành trình, 6s, qua 4 thay đổi thang mà **không cắt** (dùng chuyển thang liên tục)
ELEMENT vệt sáng là một hạt duy nhất với vệt lưu ảnh dài; mỗi chặng đổi màu theo môi trường:
        lục lam (khí sợi) → lam (đĩa thiên hà) → vàng trắng (trong sao, luminance ≤ 0.85) → xám đá (hành tinh);
        chặng cuối: bàn tay là silhouette, vệt sáng tắt khi chạm vào — không hào quang, không phép màu;
        đây là câu trả lời hình cho "không phải khách trọ"
CUT     đen 2.0s (gap)

## S94 · C113–C116 · CHƯƠNG 4 ⭐ CAO TRÀO KẾT
SCENE   **"BẠN KHÔNG Ở GIỮA HƯ KHÔNG. BẠN Ở TRÊN MỘT SỢI."** Khung mở đầu trở lại y nguyên — bầu trời "ngẫu nhiên" — rồi lớp gân hiện dần lên phía sau, và **giữ ở đó**
CAMERA  tĩnh tuyệt đối, khung **trùng khít S01** (32mm, cùng đường chân trời, cùng bóng cỏ); drift 0.3°/s như S01
ELEMENT giai đoạn 1 (C113): chỉ sao, y hệt S01 — khán giả phải nhận ra vòng tròn đã khép;
        giai đoạn 2 (C114): lớp gân dâng opacity 0 → 0.26 trong 4s, rất chậm, ôm lấy các khoang tối;
        giai đoạn 3 (C115): dòng khí trên gân bắt đầu chảy — **chuyển động cuối cùng của cả tập**;
        giai đoạn 4 (C116): mọi thứ giữ nguyên, không tắt, không fade về đen — **để hình ở đó** trong 4s im lặng cuối;
        KHÔNG chữ, KHÔNG nhãn, KHÔNG logo trong toàn shot
CUT     hết tập — giữ khung cuối đến hết audio, fade to black 1.5s SAU khi âm thanh đã im

---

# BẢNG ĐỐI CHIẾU CAO TRÀO (mã shot đã grep lại trên file này)

| Cao trào | Cue | **Shot** |
|---|---|---|
| Cú lật "không rải đều" (5 từ, camera NGHỈ) | C14 | **S14** |
| Khoảng trống Bô-ô-tét, cảm giác RỖNG | C25 | **S23** |
| Số đếm thật rơi xuống vài chục | C27 | **S25** |
| Sợi đang CHẢY (mở) | C48–C49 | **S45** |
| Khí rót vào thiên hà | C50 | **S46** |
| Sinh sao ngay lúc này | C51 | **S47** |
| Sợi là đường ống (chốt) | C52 | **S48** |
| "Và hình hiện ra" (4 từ, camera NGHỈ) | C69 | **S62** |
| **Hai bức cạnh nhau: thật ‖ mô phỏng** | C82 | **S73** |
| **Khớp ở những thứ đo được (ξ(r))** | C83 | **S74** |
| Cái thang dừng | C91 | **S80** |
| "Nó không có ở đó" | C93 | **S82** |
| La-ni-a-kê-a | C103 | **S88** |
| Kết: "Bạn ở trên một sợi" | C113–C116 | **S94** |

---

# GHI CHÚ DỰNG HÌNH

## 1. Bảng màu — đã chạy `HFA.saturationAfterACES(r,g,b)`

Quy tắc: kênh yếu ≤ 0.2× kênh mạnh; kênh mạnh quanh 1.0; muốn sáng thì **tăng emissive**,
tuyệt đối không nâng kênh yếu (nâng kênh yếu = đi thẳng ra xám sau ACES).

| Vai trò | Màu tuyến tính (r,g,b) | before | **after** | Dùng ở |
|---|---|---|---|---|
| Thiên hà già ở NÚT (đỏ cam, hết khí) | `(1.00, 0.34, 0.10)` | 0.90 | **0.84** ✔ | S04 S12 S16 S32 S36 S39 S53 S92 |
| Thiên hà trẻ trên SỢI (lam, còn sinh sao) | `(0.18, 0.50, 1.00)` | 0.82 | **0.67** ✔ | S09 S15 S30 S46 |
| Khí hydro chảy dọc sợi (lục lam) | `(0.10, 0.85, 0.80)` | 0.88 | **0.84** ✔ | S45 S46 S48 S92 S93 |
| Vật chất tối — bộ khung (tím chàm) | `(0.34, 0.10, 1.00)` | 0.90 | **0.84** ✔ | S42 S43 S44 |
| Bản đồ QUAN SÁT (vàng hổ phách) | `(1.00, 0.62, 0.06)` | 0.94 | **0.93** ✔ | S64 S65 S73 S74 S87 |
| Bản đồ MÔ PHỎNG (lam kim loại) | `(0.14, 0.46, 1.00)` | 0.86 | **0.75** ✔ | S67 S68 S69 S70 S71 S73 S74 S87 |
| Khoang rỗng — viền chàm tối | `(0.08, 0.16, 0.38)` | 0.79 | **0.83** ✔ | S17 S22 S23 S26 |
| Nét sơ đồ / lưới (lam xám) | `(0.22, 0.40, 0.62)` | 0.65 | **0.52** ✔ | mọi graph: S03 S05 S21 S34 S49 S52 S61 S78 |
| Nhấn khẳng định / đường fit (lục) | `(0.40, 1.00, 0.28)` | 0.72 | **0.48** ✔ | S50 S55 S75 S76 S89 |
| La-ni-a-kê-a — mặt phân thuỷ (đỏ thắm) | `(1.00, 0.20, 0.24)` | 0.80 | **0.63** ✔ | S88 S89 |
| Vùng HII / gạch sai (đỏ) | `(1.00, 0.16, 0.14)` | 0.86 | **0.75** ✔ | S47 S76 |
| Lõi phình Ngân Hà (vàng cam) | `(1.00, 0.66, 0.12)` | 0.88 | **0.80** ✔ | S09 S42 S90 |
| Mặt Trời — sao vàng cỡ trung bình | `(1.00, 0.70, 0.18)` | 0.82 | **0.67** ✔ | S90 S93 |
| Ambient chàm nền chương 4 | `(0.10, 0.20, 0.42)` | 0.76 | **0.77** ✔ | S83–S94 |

**Đã LOẠI, không dùng:**

| Màu | after | Lý do |
|---|---|---|
| `(0.55, 0.72, 1.00)` | **0.20** ✘ | loại từ tập trước — ra xám |
| `(0.42, 0.60, 1.05)` | **0.31** ✘ | loại từ tập trước |
| `(1.00, 0.72, 0.38)` | **0.35** ✘ | loại từ tập trước |
| `(0.40, 0.70, 1.00)` | **0.33** ✘ | loại từ tập trước |
| `(0.70, 0.80, 1.00)` | **0.11** ✘ | thử cho "bầu trời đêm lam trắng" — ba kênh quá gần nhau, ra xám trắng ngay. Bầu trời đêm phải lấy màu từ `HFA.buildStars` (màu theo nhiệt độ từng sao), KHÔNG tô một màu nền chung |

## 2. ⚠ RỦI RO SỐ MỘT CỦA TẬP NÀY: "ĐỐM SÁNG LẤM TẤM KHÔNG RA HÌNH"

Tập này là **trường hạt sáng trên nền đen** suốt >70% thời lượng. Rủi ro ngược với quasar
(quasar sợ cháy trắng; tập này sợ **không ra hình**). Nếu sợi đọc ra là "đám chấm rời rạc"
thì toàn bộ luận điểm của tập sụp.

**Một sợi chỉ đọc ra là SỢI khi có ĐỦ BỐN lớp sau. Thiếu một lớp là hỏng:**

1. **Lớp trục (tube spline) — bắt buộc, đây là lớp cứu cả tập.**
   Mỗi sợi có một đường cong Catmull-Rom 3D làm xương. Dựng `TubeGeometry` quanh xương,
   bán kính biến thiên theo vị trí (phình ở gần nút), material bán trong suốt **opacity 0.14–0.20**,
   `blending: AdditiveBlending`, `depthWrite: false`. Lớp này **không bao giờ vượt HDR 1.0** —
   nó chỉ là "sương bám trục", nhiệm vụ là nối các chấm lại thành đường liên tục cho mắt.
   Không có lớp này thì mọi số lượng hạt đều ra lấm tấm.
2. **Lớp hạt bám trục.** Particle phân bố quanh xương với độ lệch chuẩn σ giảm dần về lõi
   (σ_lõi ≈ 0.12·r_sợi, σ_rìa ≈ 0.5·r_sợi). Phân bố Gaussian quanh trục, **không phân bố đều
   trong ống** — phân bố đều làm sợi trông như ống rỗng.
3. **Lớp mật độ tương phản.** Mật độ hạt trên sợi phải cao gấp **≥15×** mật độ trong khoang rỗng,
   và gấp **≥40×** ở nút. Nếu tỉ số dưới 10× thì mắt không tách được sợi khỏi nền.
4. **Lớp fog theo chiều sâu.** `FogExp2` mật độ 0.0008–0.0015. Không có fog thì sợi gần và
   sợi xa chồng lên nhau thành một tấm nhiễu phẳng — đây là lỗi hay gặp nhất ở cảnh toàn mạng.

**Kích thước hạt:** `gl_PointSize` quy đổi ra **1.5–3.0px** ở 1080p. Hạt lớn hơn 4px làm
khung thành "hoa tuyết"; hạt nhỏ hơn 1.2px bị aliasing nhấp nháy giữa các khung (và vì render
là tất định, nhấp nháy sẽ hiện thành nhiễu tĩnh khó chịu). Dùng `HFA.dotTex` cho sprite tròn mềm.

**Chống cháy trắng (vẫn áp dụng, bloom HDR ngưỡng 1.0):** không shot nào để quá **10% diện tích
khung** có luminance > 0.85. Với trường hạt, cách đúng để làm một vùng sáng rộng là **tăng SỐ LƯỢNG
hạt nhỏ**, không phải tăng độ sáng từng hạt. Shot rủi ro nhất: **S14, S48, S62, S73, S87, S93.**

## 3. ⚠ CẢNH BÁO API: `HFA.buildStars` KHÔNG CÓ uniform `uEm`

`HFA.buildStars` chỉ định nghĩa **một** uniform: `uOp` (opacity). **Không có `uEm`.**
Gọi `stars.material.uniforms.uEm.value = ...` sẽ ném `TypeError` và **chết hàng loạt cảnh phía sau**
— lỗi này đã xảy ra thật ở tập photon.

- Muốn làm sao mờ đi / sáng lên: đổi **`uOp`**.
- Muốn đổi độ lớn sao: phải sửa hằng số trong `gl_PointSize` của chính `buildStars`, không có uniform.
- **`radius` phải lớn hơn khoảng cách camera XA NHẤT trong timeline** — tập này có S81 (dolly lùi
  rất nhanh 6s) và S50 (zoom-out ra toàn khối), đây là hai chỗ dễ lộ "quả bóng vũ trụ" nhất.
  Truyền `opt.maxCamDist` để bật cảnh báo tự động, và đặt `radius ≥ 2× maxCamDist` nhưng `< camera.far`.
- Các shot dùng `buildStars`: **S01, S02, S03, S04, S26, S28, S57, S92, S94.**

## 4. Nét chữ và sơ đồ — GIỮ DƯỚI HDR 1.0

- **Mọi chữ và lưới đặt luminance 0.60–0.72**, tuyệt đối không vượt 1.0 → không vào bloom.
- **Chiều cao chữ trên màn hình ≥ 26px** ở 1080p. Công thức kiểm: `px ≈ h_world / (2·d·tan(fov/2)) · 1080`.
  Mỗi shot có chữ trong file này đã ghi sẵn cặp `h_world @ cam d → ≈ px`. **Builder phải kiểm lại
  sau khi chốt camera thật**, vì camera đổi khi khớp timing. Các shot đã tự phát hiện thiếu và
  đã ghi giá trị nâng: **S05, S07, S22, S37, S50, S57, S69, S74.** Riêng **S74 là ca nặng nhất**
  (0.26 world → 19px ✘ → bắt buộc 0.36 world → 26px ✔) vì đồ thị ξ(r) là bằng chứng trung tâm cả tập.
- **Nét dày tối thiểu:** chữ 2.2px · nhãn nhấn 2.6–2.8px · nhãn chương 3.2px · đường fit 2.6px ·
  lưới nền 1.4–1.6px. Muốn chữ rõ hơn thì **tăng độ dày nét**, không tăng độ sáng.
- **Không đặt chữ trên nền hạt dày.** Mọi nhãn nằm trên vùng có mạng (S23, S64, S73, S88)
  phải có tấm nền tối opacity 0.45 phía sau, hoặc đặt vào vùng khoang rỗng.

## 5. Quy ước thiên văn bắt buộc (nhất quán cả tập)

- **Mạng vũ trụ KHÔNG CÓ TÂM và không có hướng ưu tiên.** Không bao giờ đặt một nút chính giữa
  khung làm trung tâm. Mọi cảnh toàn mạng phải **tràn ra cả 4 cạnh** — cắt cụt, không đóng khung.
  Trường noise sinh mạng phải **đẳng hướng** (isotropic): không được có hướng nào sợi chạy nhiều hơn.
- **Sợi là cấu trúc 3D, không phải lưới phẳng.** Mọi cảnh mạng bắt buộc có parallax chiều sâu.
  Khi nhiều sợi cắm vào một nút (S16), chúng phải **không đồng phẳng** — ít nhất 6 hướng 3D khác nhau.
- **Khoang rỗng thưa, không rỗng tuyệt đối.** Luôn giữ ~1/10 mật độ trung bình bên trong: vài chấm
  rất mờ. Đen tuyệt đối là sai vật lý và làm khung chết. (S17 S22 S23 S26)
- **Màu theo tuổi, nhất quán:** thiên hà ở **nút** đỏ hơn `(1.00,0.34,0.10)` (già, hết khí, đã bị
  tước khí bởi môi trường cụm); thiên hà trên **sợi** xanh hơn `(0.18,0.50,1.00)` (còn được rót khí,
  còn sinh sao). Tỉ lệ này phải đọc ra được ở S15, S16, S46, S48 — nó là bằng chứng hình cho C50–C52.
- **Chiều quay:** Ngân Hà và mọi thiên hà xoắn quay **cùng chiều kim đồng hồ nhìn từ cực Bắc
  thiên hà** — S09, S27, S47, S90, S93. Trái Đất quay **ngược chiều kim đồng hồ nhìn từ cực Bắc**,
  trục nghiêng **23.4°** — S07, S91. Hành tinh quanh Mặt Trời quay **ngược chiều kim đồng hồ nhìn
  từ Bắc hoàng đạo** — S08.
- **Vị trí Mặt Trời:** 26.000 ly từ tâm Ngân Hà, trên nhánh Orion — giống nhau ở S09 và S90.
- **Khoảng cách Ngân Hà–Tiên Nữ:** 2,5 triệu ly ≈ **25× đường kính Ngân Hà** — giống nhau ở S11 và S90.
  Đừng vẽ hai thiên hà sát nhau.
- **Dòng khí chảy MỘT CHIỀU về phía nút**, không hai chiều, không rối. Vận tốc tăng theo gradient
  thế (nhanh hơn khi gần nút). Mỗi hạt có vệt lưu ảnh ≥3 khung để đọc ra vector. (S45 S46 S48 S92)
- **Giãn nở vũ trụ (S53) là đồng đều, không có tâm.** Mọi ô lưới nở cùng tỉ lệ; vận tốc lùi tỉ lệ
  thuận với khoảng cách. Bắt buộc có cú "đổi gốc quan sát" 0.8s cho thấy hình y hệt từ thiên hà khác.

## 6. Motif lặp cần TRÁNH và motif khép vòng cần GIỮ

**Tránh:**
- **Không lặp #12 `quasar`:** không đĩa bồi tụ, không jet, không chân trời sự kiện, không "ánh sáng
  của thứ đã tắt". Tập này là cấu trúc **ĐANG tồn tại và đang chảy**.
- **Không lặp #01 `vat-chat-toi`:** không đường cong quay thiên hà, không thấu kính hấp dẫn.
  Vật chất tối chỉ ở S42–S44 dưới dạng bộ khung rãnh thế, không giải thích, không đo đạc.
- **Không dùng đi dùng lại cú "camera bay xuyên qua sợi".** Chỉ dùng đúng ở S15 và S46 (travelling
  dọc sợi) — đó là hai chỗ có lý do nội dung. Các cảnh mạng khác phải đổi kiểu chuyển động:
  arc quanh nút (S16), dolly lùi (S17 S81), tĩnh (S14 S62 S73 S82).
- **Không dùng split-screen quá 4 lần.** Đã dùng ở S27, S31, S39, S66, S73–S74, S76. S73–S74 là
  cái quan trọng nhất — các split khác phải nhẹ hơn về thị giác để không làm mòn hiệu ứng của nó.
- **Không "flash trắng" khi chuyển cảnh.** Tập này nền đen, flash trắng phá hoàn toàn mắt đã quen tối.

**Giữ (khép vòng cố ý):**
- **S01 ↔ S94:** cùng bố cục POV nằm ngửa, cùng 32mm, cùng đường chân trời, cùng bóng cỏ. S94 chỉ
  khác ở chỗ có lớp gân hiện lên. Builder phải dùng **đúng cùng tham số camera và cùng seed sao**.
- **S26 ↔ S01:** bầu trời khoang rỗng dựng cùng bố cục POV nhưng địa hình đá — để khán giả cảm nhận
  sự thiếu bằng chính sự giống nhau.
- **S32 / S40 / S68:** ba shot dùng **cùng một seed noise** cho trường dao động mật độ nguyên thuỷ.
  Đây là điều kiện để S40 (cross-fade khớp) và S73 (hai bức giống nhau) có nghĩa.
- **S73 ↔ S87:** S87 tái sử dụng đúng khung S73 rồi chồng hai nửa lên nhau. Giữ nguyên hình học.
