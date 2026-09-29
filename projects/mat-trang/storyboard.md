# STORYBOARD — MẶT TRĂNG, MẢNH TRÁI ĐẤT BỊ VĂNG RA

## METADATA
- **Slug:** `mat-trang`
- **Tổng thời lượng dự kiến:** ~14:40 (880s) = 2.580 từ ÷ 180 từ/phút + ~35s khoảng lặng có chủ ý.
  ⚠ Chỉ để căn nhịp. Thời lượng CHUẨN lấy từ `projects/mat-trang/timing.json`. Mọi shot neo vào
  **mã cue**, không vào giây.
- **Số shot:** 51 (S01–S51). Trung bình ~17s/shot.
- **Số cue:** 67 (C01–C67), 4 chương. Nhãn chương ở C01 / C13 / C35 / C56.
- **Loại visual theo chương** (tag ở cuối dòng tiêu đề mỗi shot):
  - CHƯƠNG 1 (C01–C12) — *live-object + astro-realistic + graph*: hiên nhà ban đêm, Mặt Trăng
    texture LRO ở cỡ góc thật (0,5°), so tỉ lệ Trái Đất–Mặt Trăng, Sao Hoả với Phobos/Deimos.
  - CHƯƠNG 2 (C13–C34) — *graph là xương sống*: lát cắt lõi "quả đào mất hạt", ba câu chuyện cũ bị
    gạch, đồ thị ba đồng vị oxy. Xen astro-realistic (bề mặt Mặt Trăng 1969, đá Apollo).
  - CHƯƠNG 3 (C35–C55) — *astro-realistic + particle* (cao trào của tập): Trái Đất non, Theia, va
    chạm xiên, đĩa đá bốc hơi, sắt chìm, Mặt Trăng đỏ khổng lồ trên trời; rồi graph cho "chỗ chưa khép".
  - CHƯƠNG 4 (C56–C67) — *astro-realistic + particle + procedural + graph*: gương phản xạ góc, chùm
    laser đi về 2,5s ở tỉ lệ thật, bướu thuỷ triều lệch, vân san hô Devon, đồng hồ 5h→22h→24h,
    trục nghiêng có/không Mặt Trăng, trở lại hiên nhà.
- **Nhạc nền:** một track chung `assets/bgm.mp3` cho cả tập. Không ghi audio theo shot. Chỉ shot có
  dòng `SFX` mới cần hiệu ứng riêng (lấy từ [AUDIO DIRECTION] của kịch bản).
- **Phụ đề:** KHÔNG chép tay. Sinh từ `voice/*.srt` bằng `scripts/gen-captions.mjs` (≤42 ký tự, 1 dòng).
- **Texture có sẵn (`assets/tex/`):** `moonmap1k.jpg` (Mặt Trăng), `2_no_clouds_4k.jpg` +
  `earthcloudmap.jpg` + `elev_bump_4k.jpg` + `water_4k.png` (Trái Đất), `marsmap1k.jpg` (Sao Hoả),
  `mercurymap.jpg` (Sao Thuỷ, dùng ở S13), `galaxy_starfield.png`. Phobos/Deimos/Theia/Trái Đất non
  KHÔNG có texture → dựng procedural (xem GHI CHÚ DỰNG HÌNH mục 5).
- **Phong cách:** tập này KHÔNG tối-lạnh như tập nước. Ba tông rõ: (1) hiên nhà đêm xanh đen, Mặt
  Trăng trắng lạnh, nhỏ; (2) phòng thí nghiệm / graph nền đen phẳng, nét sáng; (3) Đêm Theia đỏ cam
  nóng, là nơi DUY NHẤT của tập có màu nóng chiếm diện tích lớn. Chuyển giữa ba tông phải nhìn thấy
  ngay trong 1 giây đầu mỗi chương.
- **Cao trào hình (đầu tư nhất):** S04 (so tỉ lệ), S12–S13 (quả đào mất hạt), S23–S24 (dấu vân tay
  oxy trùng), S31–S33 (va chạm, đĩa, sắt chìm), S37 (Mặt Trăng đỏ to bằng nắm tay), S45 (laser 2,5s
  thời gian thật), S47 (san hô 400 vân), S51 (kết).
- **Khung nguồn thumbnail:** S08 (C10) được dựng đúng concept bìa đã duyệt (Mặt Trăng thật nửa trên,
  mảnh hình Mặt Trăng tách khỏi rìa Trái Đất mờ phía sau). Render agent bắt frame ở giữa S08 làm
  nguồn `output/_assets/mat-trang/`.

---

# CHƯƠNG 1 — THỨ QUÁ QUEN ĐỂ CÒN NHÌN (C01–C12)

## S01 · C01 · CHƯƠNG 1 · live-object/procedural
SCENE   Đen. Rồi hiên nhà ban đêm hiện ra từ dưới lên: mép lan can, một góc mái tôn, tán cây tối. Camera
        ngẩng lên theo lời "tôi ngẩng lên"
CAMERA  tilt-up chậm 35mm từ sàn hiên lên bầu trời, fade-in từ đen 1.5s, kết khi đường chân mái nằm ở
        1/4 dưới khung
ELEMENT hiên nhà là silhouette khối tối có chi tiết (lan can, cột, mép mái), chiếu bởi một nguồn
        ROOM_WARM rất yếu từ trong nhà hắt ra (cường độ 0.08, chỉ để mép cột có viền); bầu trời
        CLOUD_INK + starfield thưa 1–2px không bloom; ⚠ Mặt Trăng CHƯA vào khung ở shot này
CUT     giữ liên tục sang S02 khi tilt dừng

## S02 · C02 · CHƯƠNG 1 · live-object/procedural
SCENE   Bầu trời trên hiên nhìn rộng: đèn đường bên trái, mái nhà hàng xóm bên phải, và Mặt Trăng, nhỏ,
        ở góc trên phải, lẫn giữa những thứ tầm thường
CAMERA  tĩnh 35mm, drift ngang 2% khung rất chậm sang phải; Mặt Trăng ở giao điểm 1/3 trên-phải
ELEMENT 0s đèn đường ROOM_WARM bloom nhẹ ở mép trái (điểm sáng nhất khung, cố ý lấn Mặt Trăng) ·
        5s mái tôn hàng xóm + dây điện cắt ngang góc phải · 10s Mặt Trăng ở CỠ GÓC THẬT: 0,52° trên
        35mm ≈ 24–28px trên 1080p, pha khuyết lồi ~88% (waxing gibbous), phần sáng bên PHẢI, Tycho
        ở đáy, Biển Mưa ở trên-trái — texture `moonmap1k.jpg` nhưng ở cỡ này chỉ đọc được mảng sáng
        tối; KHÔNG bloom Mặt Trăng, nó phải "chìm" như cái đèn đường thứ hai
CUT     hard-cut sang S03 đúng chữ "Mặt Trăng" (C03)

## S03 · C03–C04 · CHƯƠNG 1 · astro-realistic
SCENE   Mặt Trăng chiếm 80% chiều cao khung, texture LRO, đường phân giới sáng-tối lộ địa hình. Camera
        bắt đầu quay quanh rất chậm; cuối C04 rìa Trái Đất trườn vào từ góc dưới trái
CAMERA  C03: tĩnh tuyệt đối 2s (điểm nghỉ) · C04: orbit chậm 8° quanh Mặt Trăng, 85mm, rồi pull-back
        nhẹ để rìa Trái Đất vào khung ở giây cuối
ELEMENT `moonmap1k.jpg` + bump từ chính luminance của texture (không có bump riêng); pha 88%, ánh sáng
        key trắng ấm (1.0, 0.97, 0.92) một hướng duy nhất từ phải, KHÔNG fill; terminator bên trái lộ
        bóng đổ hố; mặt gần hướng về camera (kinh độ 0 ở tâm); Mặt Trăng KHÔNG tự quay so với Trái Đất
        (khoá thuỷ triều) — trong orbit của camera nó chỉ xoay theo camera · 2s nhãn chương "CHƯƠNG 1 ·
        THỨ QUÁ QUEN ĐỂ CÒN NHÌN" · 9s rìa Trái Đất xanh (OCEAN_TEAL + mây) vào góc dưới trái, chỉ
        một cung, chưa thấy toàn cầu · 15s cung Trái Đất to dần, Mặt Trăng lệch sang phải khung
CUT     giữ nguyên hai vật thể, cắt góc máy → S04

## S04 · C05–C06 · CHƯƠNG 1 · astro-realistic + graph ⭐ SO TỈ LỆ
SCENE   "Nó quá to." Trái Đất và Mặt Trăng đặt cạnh nhau, ĐÚNG TỈ LỆ ĐƯỜNG KÍNH, trên nền sao đen. Hai
        đường kính hiện ra bằng vạch đo mảnh
CAMERA  tĩnh tuyệt đối trong C05 (2s); C06: dolly-in nhẹ 3% rồi dừng để vạch đo đọc được
ELEMENT hai quả cầu cùng ánh sáng key từ phải; Trái Đất đường kính 620px, Mặt Trăng 169px (tỉ lệ
        3474/12742 = 0,273); Trái Đất: `2_no_clouds_4k.jpg` + `earthcloudmap.jpg` lớp mây riêng quay
        chậm hơn, bump `elev_bump_4k.jpg`, specular `water_4k.png`; trục nghiêng 23,4°, tự quay ngược
        chiều kim đồng hồ nhìn từ cực Bắc; ⚠ chú thích nhỏ góc dưới "khoảng cách không theo tỉ lệ"
        (hai vật đang đặt sát nhau) · 0s hai quả cầu · 4s vạch đo Trái Đất "12 742 km" · 8s vạch đo
        Mặt Trăng "3 474 km" · 12s nhãn "≈ 1/4" nối hai vạch · 16s bốn Mặt Trăng ma (outline) xếp
        ngang qua đường kính Trái Đất — thấy ngay là "hơn 1/4 một chút, chưa tới 4 lần"
CUT     hai quả cầu trượt sang trái nhường chỗ → S05

## S05 · C07 · CHƯƠNG 1 · astro-realistic
SCENE   Sao Hoả với hai vệ tinh: nhìn toàn cảnh thì chúng là hai chấm không thấy nổi; một ô phóng đại
        mở ra cho thấy hai hòn đá méo mó với thanh tỉ lệ
CAMERA  orbit chậm quanh Sao Hoả 50mm; ô phóng đại (inset) hiện ở góc trên phải, tĩnh
ELEMENT Sao Hoả `marsmap1k.jpg`, đường kính 560px, cực mũ băng trắng nhỏ, key từ trái; Phobos và Deimos
        ở ĐÚNG khoảng cách tỉ lệ (Phobos 2,76 bán kính Sao Hoả, Deimos 6,9) trong mặt phẳng xích đạo,
        quỹ đạo thuận chiều; Phobos đi vòng NHANH hơn Sao Hoả tự quay (7,7h so với 24,6h) — trong shot
        Phobos thấy trôi rõ, Deimos gần như đứng; ở cỡ này Phobos = 2px, Deimos = 1px — đúng, đó là
        điểm nhấn · 0s Sao Hoả · 4s hai đường chỉ mảnh trỏ vào hai chấm, nhãn "Phobos · ~22 km" và
        "Deimos · ~12 km" · 9s inset phóng Phobos: khối bất định procedural (cầu + FBM lệch trục
        27×22×18 km), hố Stickney lõm to một bên, albedo thấp 0,07, rim yếu · 14s inset đổi sang
        Deimos, nhỏ hơn, tròn trịa hơn, thanh tỉ lệ "10 km"
CUT     inset đóng, Sao Hoả thu nhỏ vào hàng so sánh → S06

## S06 · C08 · CHƯƠNG 1 · graph + astro-realistic
SCENE   Hàng so sánh: Sao Hoả + hai chấm bên trái, Trái Đất + Mặt Trăng bên phải, cùng tỉ lệ. Rồi hai chữ
        "hành tinh · vệ tinh" mờ đi, thay bằng "hệ đôi", và cả hai quả cầu bắt đầu lắc quanh một điểm chung
CAMERA  tĩnh, rồi ở "hệ đôi" camera nhích lên nhìn hơi từ trên xuống (15°) để thấy hai vật cùng xoay
ELEMENT 0s hai cặp cạnh nhau, tỉ lệ vệ tinh/hành tinh ghi bằng số "1/308" (Sao Hoả) và "1/3,7" (Trái Đất)
        · 5s cặp Sao Hoả mờ về 0.2 · 8s nhãn "hệ đôi" · 9s trọng tâm chung hiện là một chấm nhỏ NẰM
        TRONG Trái Đất, cách tâm 0,73 bán kính (4 670 km) về phía Mặt Trăng; Trái Đất lắc quanh chấm
        ấy trong khi Mặt Trăng đi vòng — cả hai cùng chiều ngược kim đồng hồ nhìn từ trên; ⚠ khoảng
        cách Trái Đất–Mặt Trăng ở shot này nén lại (không theo tỉ lệ) để cả hai lọt khung, ghi rõ
CUT     Mặt Trăng mờ đi, để lại Trái Đất một mình → S07

## S07 · C09 · CHƯƠNG 1 · astro-realistic
SCENE   Trái Đất trơ trọi trong không gian. Một vật cỡ Mặt Trăng bay tới từ mép phải trên quỹ đạo hyperbol,
        lượn qua, và đi mất. Không có gì giữ nó lại. Rồi mọi đường quỹ đạo mờ tan
CAMERA  wide 24mm, Trái Đất lệch 1/3 trái; camera hơi pan theo vật thể rồi buông
ELEMENT vật đến: quả cầu đá xám ROCK_GREY tỉ lệ 0,27 Trái Đất; đường bay hyperbol vẽ nét chấm mảnh
        (emissive 0.7); vật bị bẻ cong gần Trái Đất nhưng vận tốc ra bằng vận tốc vào, thoát khỏi
        khung; ⚠ KHÔNG có vụ nổ, không lực nào "phanh" — cảm giác trượt · 0s vật vào · 6s bẻ cong
        quanh Trái Đất · 10s thoát ra góc dưới trái · 13s đường chấm mờ tan, nền sao tối dần, Trái Đất
        một mình
SFX     tiếng dế thưa dần, nền trầm khẽ dâng (theo AUDIO DIRECTION C09)
CUT     đen ngắn 0.5s (gap 2.0 trong kịch bản) → S08

## S08 · C10 · CHƯƠNG 1 · astro-realistic ⭐ KHUNG NGUỒN THUMBNAIL
SCENE   Hình dung, không phải vật lý: Mặt Trăng thật chiếm nửa trên khung, và ở rìa Trái Đất mờ phía sau,
        một mảnh cong hình đĩa đang nhấc lên khỏi bề mặt — nơi tôi đang đứng đang tách ra một mảnh
CAMERA  tĩnh, 50mm; Mặt Trăng lớn ở nửa trên, Trái Đất mờ chiếm nửa dưới, hơi lệch phải
ELEMENT Mặt Trăng `moonmap1k.jpg` pha gần tròn, đường kính ≈ 50% chiều cao khung, sáng rõ, nét; Trái Đất
        phía sau ở DOF mờ (blur 6px), độ sáng 0.45; mảnh tách: một khối đá cong bán kính bằng Mặt Trăng
        đang nhấc lên khỏi rìa Trái Đất ~5% bán kính, mép vỡ lởm chởm, mặt dưới có vệt EMBER rất yếu
        (0.3) như đá còn ấm; ⚠ đây là HÌNH DUNG: giữ nó ở mức outline nửa trong suốt (alpha 0.6), không
        bụi văng, không nổ · 0s hai vật thể · 3s mảnh bắt đầu nhấc · 8s mảnh cách rìa rõ; frame ở ~4s
        (mảnh vừa nhấc, Mặt Trăng nét nhất) là nguồn thumbnail
CUT     dissolve chậm sang phòng thí nghiệm → S09

## S09 · C11 · CHƯƠNG 1 · procedural/live-object
SCENE   Một viên đá Mặt Trăng trong tủ kính bảo quản: đá anorthosite trắng xám (kiểu "Genesis Rock"
        Apollo 15), đặt trên giá thép, chiếu một đèn duy nhất từ trên
CAMERA  orbit 30° quanh viên đá, 85mm, DOF nông
ELEMENT đá dựng procedural: khối bất định 10–12 cm, bề mặt hạt thô, các tinh thể plagioclase trắng
        lấp lánh nhỏ, vài hốc; nhãn nhỏ trên giá "Apollo 15 · 1971" nét mảnh emissive 0.72; nền tủ
        đen phẳng, một phản chiếu mờ của đèn trên kính · 0s đá · 5s nhãn · 8s một vạch đo "10 cm"
        rồi tắt
CUT     đá mờ, Mặt Trăng trở lại → S10

## S10 · C12 · CHƯƠNG 1 · graph
SCENE   Mặt Trăng ở giữa, ba ô nhãn trống hiện quanh nó theo ba hướng, đánh số 1–2–3. Ô 1 điền
        "Quá to", hai ô còn lại để trống
CAMERA  tĩnh, Mặt Trăng cỡ 40% chiều cao, lệch trái để ba ô có chỗ bên phải
ELEMENT ba ô là khung chữ nhật nét 3px emissive 0.72, nối vào Mặt Trăng bằng đường chỉ mảnh; ô 1 ghi
        "1 · Quá to"; ô 2 và 3 chỉ có số và dấu chấm hỏi; nền đen phẳng, không sao · 0s Mặt Trăng ·
        2s ô 1 · 4s ô 2 · 6s ô 3
CUT     đen 1s (gap 2.0) → CHƯƠNG 2, nền đổi sang không gian khép kín

---

# CHƯƠNG 2 — BA CHI TIẾT KHÔNG KHỚP (C13–C34)

## S11 · C13–C14 · CHƯƠNG 2 · graph
SCENE   Không gian khô như phòng đo. Hai khối lập phương cùng cạnh, một "đá Trái Đất" một "đá Mặt Trăng",
        đặt trên cân; cân nghiêng. Rồi camera đâm vào khối Mặt Trăng: vấn đề nằm ở tâm
CAMERA  tĩnh cho cân, sau đó dolly-in mạnh vào khối lập phương Mặt Trăng ở cuối C14
ELEMENT 0s nhãn chương "CHƯƠNG 2 · BA CHI TIẾT KHÔNG KHỚP" · 2s ô 2 điền "2 · Quá nhẹ" (kế thừa S10) ·
        5s hai khối cạnh 1 đơn vị, chất liệu đá xám gần giống nhau (cố ý), cân đòn nghiêng về phía
        Trái Đất theo tỉ lệ khối lượng 5,51 : 3,34; hai con số "5,51 g/cm³" và "3,34 g/cm³", rồi
        "≈ 6/10" · 12s nhãn "vấn đề không nằm ở đá" — hai khối đá crossfade thành giống hệt nhau ·
        15s dolly-in vào khối Mặt Trăng, khối trở nên trong suốt, thấy tâm gần như rỗng
SFX     nhịp máy đo rất nhỏ ở xa, bắt đầu từ shot này (theo AUDIO DIRECTION C13)
CUT     hard-cut sang lát cắt → S12

## S12 · C15 · CHƯƠNG 2 · astro-realistic + graph ⭐ QUẢ ĐÀO MẤT HẠT (1/2)
SCENE   Trái Đất và Mặt Trăng cắt đôi, đặt cạnh nhau ĐÚNG TỈ LỆ, mặt cắt quay về camera. Lõi sắt Trái
        Đất khổng lồ chiếm nửa bán kính; lõi Mặt Trăng là một chấm
CAMERA  orbit rất chậm 10° giữ mặt cắt hướng camera, 50mm; hai vật thể đứng yên, chỉ camera động
ELEMENT Trái Đất đường kính 600px, Mặt Trăng 164px; mặt cắt Trái Đất: vỏ mỏng (1px), lớp phủ đá tối
        ROCK_GREY ấm, lõi ngoài + lõi trong FE_METAL ánh kim, bán kính lõi = 0,55 bán kính (3 480 km);
        mặt cắt Mặt Trăng: lớp phủ dày, lõi bán kính 0,20 (≈350 km) = 16px, cũng ánh kim để thấy đây
        cùng loại vật liệu; nửa ngoài của mỗi quả cầu vẫn mang texture thật (`2_no_clouds_4k`,
        `moonmap1k`) · 0s hai lát cắt · 4s nhãn "lõi sắt · 1/3 khối lượng · nửa đường kính" trỏ Trái
        Đất · 10s nhãn "lõi · ~350 km · 1–3% khối lượng" trỏ Mặt Trăng · 14s một vòng chấm mảnh vẽ
        trên Mặt Trăng ở bán kính 0,55 — "lõi lẽ ra phải cỡ này nếu cùng tỉ lệ Trái Đất"
CUT     giữ lát cắt, thêm hai thiên thể vào hàng → S13

## S13 · C16 · CHƯƠNG 2 · astro-realistic + graph ⭐ QUẢ ĐÀO MẤT HẠT (2/2)
SCENE   Hàng bốn thiên thể đá cắt đôi: Sao Thuỷ, Trái Đất, Sao Hoả, Mặt Trăng. Ba hạt to nằm giữa. Một
        hạt nho
CAMERA  truck-right chậm dọc theo hàng, 50mm, dừng ở Mặt Trăng cuối hàng
ELEMENT tỉ lệ lõi/bán kính ĐÚNG: Sao Thuỷ 0,85 (`mercurymap.jpg`), Trái Đất 0,55, Sao Hoả 0,53
        (`marsmap1k.jpg`), Mặt Trăng 0,20; kích thước các quả cầu KHÔNG theo tỉ lệ với nhau (vẽ bằng
        nhau ~300px để so lõi), ghi chú "kích thước đã chuẩn hoá, chỉ so tỉ lệ lõi"; lõi FE_METAL,
        lớp phủ tối · 0s Sao Thuỷ · 4s Trái Đất · 7s Sao Hoả · 10s Mặt Trăng, và một vòng chấm
        "hạt đào lẽ ra" bao quanh chấm lõi thật — hai vòng lệch cỡ đọc được ngay
CUT     hàng mờ, chỉ giữ lát cắt Mặt Trăng → S14

## S14 · C17–C19 · CHƯƠNG 2 · graph + particle
SCENE   "Nó khô." Lát cắt Mặt Trăng nóng lên như trong lò; những chấm sáng mang tên natri, kali, nước
        bốc ra khỏi đá và bay lên rồi tắt. Bên phải, ba cặp cột so Trái Đất–Mặt Trăng. Rồi ba nhãn khoá
CAMERA  tĩnh; C17 (2 chữ) giữ nguyên khung; C18 camera nhích sang phải lấy chỗ cho cột; C19 về giữa
ELEMENT 0s ô 3 điền "3 · Khô" · 3s mặt cắt đá ửng EMBER từ dưới lên (chỉ ở mép, ≤10% khung >0.85) ·
        5s hạt H_WHITE rời khỏi đá bay lên, mỗi hạt kèm nhãn nhỏ "Na" / "K" / "H₂O", seeded, quỹ đạo
        hàm của t · 10s ba cặp cột: "Kali", "Natri", "Nước" — cột Trái Đất cao chuẩn, cột Mặt Trăng
        thấp rõ rệt (≤ 1/4 với K và Na, gần chạm đáy với nước; kịch bản không nêu số nên KHÔNG ghi
        số trên cột, chỉ ghi tên) · 16s hạt bay hết, đá tối lại · C19: ba nhãn khoá lần lượt, mỗi
        nhãn một nhịp, không hiệu ứng: "Quá to" · "Quá nhẹ ở tâm" · "Bị nướng"
CUT     giữ ba nhãn mờ ở góc trên làm mốc thường trực cho S15–S18 → S15

## S15 · C20–C21 · CHƯƠNG 2 · astro-realistic
SCENE   Câu chuyện thứ nhất: Trái Đất non quay cực nhanh, phình ra ở xích đạo, một cục ở vành xích đạo
        kéo dài ra rồi đứt, văng đi. Nhãn "1 · Tách ra · George Darwin · 1879"
CAMERA  nhìn từ trên xuống 30° so với mặt phẳng xích đạo, 50mm; camera cố định, Trái Đất quay
ELEMENT Trái Đất non nửa nóng chảy: nền đá tối, khe nứt EMBER (emissive 1.2 chỉ ở khe), không đại
        dương; quay thuận chiều với chu kỳ "vài giờ" → trong khung thấy quay rõ (một vòng ~3s); dẹt
        cực rõ (tỉ lệ trục 0,85); cục văng ra từ XÍCH ĐẠO, kéo thành giọt rồi đứt, bay ra theo tiếp
        tuyến, cùng chiều quay · 0s nhãn "1 · Tách ra" · 3s quay nhanh, dẹt · 8s cục kéo dài ·
        14s đứt, văng · 20s cục tự tròn lại ở xa, chưa có lõi sáng (chỉ lấy lớp ngoài)
CUT     giữ cảnh, chồng sổ cái → S16

## S16 · C22 · CHƯƠNG 2 · graph
SCENE   Sổ cái lượng quay: một cột "cần có để văng nổi" rất cao, một cột "hệ Trái Đất–Mặt Trăng hôm
        nay" thấp hơn hẳn. Khoảng thiếu được tô. Câu chuyện 1 bị gạch
CAMERA  tĩnh tuyệt đối
ELEMENT hai cột ngang trên nền đen phẳng: cột "cần" dài hết khung, cột "còn hôm nay" ngắn cỡ 1/3–1/4
        (ghi chú: minh hoạ, kịch bản chỉ nói "không còn"); phần thiếu tô sọc chéo mờ, nhãn "không còn
        ở đâu trong hệ" · 0s cột cần · 4s cột hôm nay · 9s vùng thiếu · 13s gạch chéo nét mảnh
        ROCK_GREY sáng qua nhãn "1 · Tách ra" ở góc trên (kiểu gạch đã dùng ở tập nước: không đỏ, không
        kịch tính)
CUT     cắt sang chuyện 2 → S17

## S17 · C23 · CHƯƠNG 2 · astro-realistic
SCENE   Câu chuyện thứ hai: một vật cỡ Mặt Trăng tới từ xa; hai kết cục chạy liên tiếp — đâm thẳng, hoặc
        lượn một vòng rồi đi. Không kết cục nào cho nó ở lại. Rồi lát cắt ma hiện: vẫn thiếu sắt
CAMERA  wide 24mm, Trái Đất giữa; lần 1 camera rung nhẹ khi va (biên độ nhỏ, hàm sin của t); lần 2
        pan theo vật đi mất
ELEMENT nhãn "2 · Bị bắt lấy" · 0s vật đá xám vào từ phải · 4s kết cục A: đâm thẳng, loé EMBER ngắn
        ≤8% khung, vật tan · 8s tua lại (vật hiện lại ở vị trí đầu, nét chấm) · 10s kết cục B: hyperbol
        thoát ra, đường chấm mờ tan như S07 · 15s vật ma đứng yên trên quỹ đạo tròn với dấu chấm hỏi;
        lát cắt của nó hiện, lõi to 0,55 (vật từ nơi khác thì phải có lõi thường), đối chiếu lõi
        thật 0,20 · 19s gạch chéo nhãn 2
CUT     cắt sang chuyện 3 → S18

## S18 · C24 · CHƯƠNG 2 · astro-realistic + particle
SCENE   Câu chuyện thứ ba: hai quả cầu lớn lên cạnh nhau trong cùng một vành bụi, cùng nhận những hạt
        sắt chìm xuống tâm. Mặt Trăng "lẽ ra" có lõi to như vậy. Lát cắt thật: không có
CAMERA  nhìn nghiêng 25° xuống vành bụi, 35mm; hai quả cầu ở 1/3 trái và 1/3 phải
ELEMENT nhãn "3 · Sinh cùng lúc" · vành bụi mỏng DUST_WARM quay Kepler (trong nhanh hơn ngoài); hạt
        bụi seeded rơi vào hai quả cầu với tỉ lệ hạt "sắt" (điểm FE_METAL) như nhau ở cả hai · 0s
        hai mầm · 5s cả hai lớn lên, sắt chìm vào tâm (hạt sáng trôi vào giữa rồi tắt) · 9s lát cắt
        cả hai: hai lõi cùng tỉ lệ 0,55 · 12s lát cắt Mặt Trăng ĐỔI sang thật: lõi 0,20 — lệch ngay ·
        14s gạch chéo nhãn 3
CUT     ba nhãn gạch cùng mờ về 0.2, đen ngắn → S19

## S19 · C25 · CHƯƠNG 2 · astro-realistic
SCENE   1969. Bề mặt Mặt Trăng nhìn từ mặt đất: bụi xám, chân trời cong gần, bầu trời đen tuyệt đối, Trái
        Đất xanh treo cố định ở góc trên. Một khối tàu đổ bộ silhouette, và một bàn tay găng nhặt đá
CAMERA  tĩnh thấp ngang mặt đất, 35mm; DOF sâu (chân không, không tán xạ)
ELEMENT regolith procedural: hạt mịn xám không sắc, bóng đổ ĐEN TUYỆT ĐỐI (không khí quyển nên không
        fill), key từ thấp bên trái; chân trời cong rõ và GẦN (bán kính nhỏ); Trái Đất ở góc trên phải,
        đường kính góc ~1,9° = gấp ~3,7 lần Mặt Trăng nhìn từ Trái Đất → ~90px trên 35mm, pha khuyết,
        đứng YÊN trên trời (khoá thuỷ triều); tàu đổ bộ chỉ là silhouette khối đen bốn chân, không chi
        tiết; găng tay + kẹp nhặt một viên đá vào túi · 0s bề mặt · 3s bàn tay vào khung · 6s viên
        đá được nhấc lên
SFX     nhịp máy đo DỪNG ở đầu shot, im lặng một nhịp (theo AUDIO DIRECTION C25)
CUT     viên đá đưa sát ống kính, che khung → S20

## S20 · C26 · CHƯƠNG 2 · astro-realistic + graph
SCENE   Bản đồ Mặt Trăng mặt gần với sáu điểm hạ cánh; bộ đếm khối lượng chạy tới gần 400 kg; rồi một
        viên đá xoay chậm dưới đèn với chữ "oxy" hiện lên trên nó
CAMERA  tĩnh cho bản đồ; cắt sang macro 100mm cho viên đá ở giây 10
ELEMENT `moonmap1k.jpg` chiếu phẳng mặt gần, sáu chấm đúng vị trí: Apollo 11 (Biển Tĩnh Lặng, 0,7°B
        23,5°Đ), 12 (Đại Dương Bão, 3°N 23°T), 14 (Fra Mauro, 3,6°N 17,5°T), 15 (Hadley, 26°B 3,6°Đ),
        16 (cao nguyên Descartes, 9°N 15,5°Đ), 17 (Taurus–Littrow, 20°B 30,8°Đ) — TẤT CẢ ở mặt gần ·
        0s bản đồ · 2s sáu chấm nảy lần lượt · 6s bộ đếm "382 kg" chạy lên, nhãn "gần 400 kg đá và
        bụi" · 10s macro viên đá basalt tối lỗ chỗ (khác viên anorthosite ở S09) xoay · 13s chữ "oxy"
        emissive 0.75 hiện trên nền đen bên cạnh đá
CUT     dissolve sang sơ đồ hạt nhân → S21

## S21 · C27 · CHƯƠNG 2 · graph
SCENE   Ba loại nguyên tử oxy đặt cạnh nhau: hạt nhân 8 proton + 8/9/10 neutron; bên dưới một thanh tỉ
        lệ cho thấy loại nhẹ chiếm gần hết
CAMERA  tĩnh, ba sơ đồ ngang hàng; nhích nhẹ xuống cho thanh tỉ lệ ở giây 10
ELEMENT hạt nhân vẽ là cụm cầu chặt: proton H_WHITE, neutron ICE_CYAN; nhãn "¹⁶O · 8 proton + 8 neutron",
        "¹⁷O · +9", "¹⁸O · +10"; đám mây electron mờ giống hệt nhau ở cả ba (không Bohr) · 0s ¹⁶O ·
        3s ¹⁷O · 6s ¹⁸O · 10s thanh ngang 1000 chấm: 998 ¹⁶O xám, 2 ¹⁸O ICE_CYAN sáng, ¹⁷O ghi "<1/1000"
        bên cạnh (đúng thứ tự độ phổ biến 99,76% / 0,04% / 0,20%) · 14s nhãn "tỉ lệ này khác nhau ở
        mỗi vùng"
CUT     ba sơ đồ thu thành ba chấm trục → S22

## S22 · C28 · CHƯƠNG 2 · graph ⭐ DẤU VÂN TAY OXY (1/3)
SCENE   Đồ thị ba đồng vị: trục ngang δ¹⁸O, trục dọc δ¹⁷O. Một đường chéo cho Trái Đất. Mỗi thiên thể
        khác có đường chéo RIÊNG, song song, lệch lên hoặc xuống. Sao Hoả, các họ thiên thạch, mỗi thứ
        một vệt
CAMERA  tĩnh tuyệt đối — graph phải đọc được trong 3 giây
ELEMENT nền đen PHẲNG; trục nét 4px emissive 0.72; nhãn trục "δ¹⁸O (‰)" ngang, "δ¹⁷O (‰)" dọc; dải
        −6…+10 ngang, −6…+6 dọc; đường Trái Đất ICE_CYAN đi qua gốc, dốc 0,52; các đường khác song song
        (cùng dốc), lệch dọc theo Δ¹⁷O thật: Sao Hoả +0,3‰ GRAPH_AMBER; chondrite thường +0,7…+1,2‰
        GRAPH_GREEN; chondrite cacbon −2…−5‰ D_VIOLET (dải rộng, nhiều điểm rải); Vesta/HED −0,25‰
        H_WHITE; mỗi điểm có thanh sai số ngắn · 0s trục + đường Trái Đất · 3s Sao Hoả nảy vào, nhãn
        "Sao Hoả" · 6s ba họ thiên thạch lần lượt, nhãn "thiên thạch · họ 1/2/3" thay bằng tên
        "chondrite thường", "chondrite cacbon", "Vesta" · 11s nhãn góc "dấu vân tay của nơi sinh"
CUT     giữ graph, mọi nhãn mờ về 0.4 → S23

## S23 · C29–C31 · CHƯƠNG 2 · graph ⭐ DẤU VÂN TAY OXY (2/3)
SCENE   "Người ta đo đá Mặt Trăng." Một điểm mới bay từ mép khung vào đồ thị, chậm, rồi... rơi ĐÚNG lên
        điểm lớp phủ Trái Đất. Hai chấm thành một
CAMERA  tĩnh; ở C30 dolly-in 20% về điểm trùng; C31 tiếp tục dolly-in tới khi hai chấm chiếm 1/3 khung
        và vẫn là MỘT
ELEMENT C29 (2s + gap 2s): chấm Mặt Trăng MOON_GREY sáng hiện ở mép phải, trôi vào chậm, nền im · C30:
        chấm chạm điểm Trái Đất, loé emissive 1.4 trong 3 frame rồi về 0.9; hai nhãn "Trái Đất" và
        "Mặt Trăng" gộp thành MỘT nhãn "Trái Đất · Mặt Trăng" · C31: dolly-in, các thiên thể khác trôi
        ra khỏi khung, chỉ còn đường Trái Đất và một chấm; nhãn "không phân biệt được" · ⚠ KHÔNG vẽ hai
        chấm lệch nhau "cho thấy" — với thang này chúng trùng tuyệt đối
SFX     im lặng tuyệt đối trong gap sau C29 — không nhạc, không nhịp (theo AUDIO DIRECTION C29)
CUT     dolly-in tiếp không cắt → S24

## S24 · C32 · CHƯƠNG 2 · graph ⭐ DẤU VÂN TAY OXY (3/3)
SCENE   Phóng đại điểm trùng lên 1000 lần. Ở thang phần triệu, hai chấm hé tách ra một chút, mỗi chấm
        một thanh sai số dài; hai nhóm đo, một nhóm thấy chênh, một nhóm không. Rồi zoom-out: lại là một
CAMERA  dolly-in liên tục tới thang ppm (thanh thang đổi đơn vị từ ‰ sang "phần triệu"), giữ 8s, rồi
        pull-back nhanh về thang cũ
ELEMENT thang mới ghi "Δ¹⁷O · phần triệu"; chấm Trái Đất tại 0; hai phép đo Mặt Trăng: nhóm 1 tại
        "+12 ± 3" (thanh sai số không chạm 0), nhóm 2 tại "0 ± 5" (thanh chạm 0) — hai thanh chồng lên
        nhau một phần; nhãn nhỏ "hai nhóm, hai kết quả" · 0s bắt đầu đổi thang · 4s hai thanh sai số ·
        9s nhãn · 12s pull-back nhanh: hai chấm nhập lại, các thiên thể khác vào khung ở rất xa —
        Sao Hoả cách 0,3‰ = 300 phần triệu, tức 25 lần khoảng chênh vừa thấy
CUT     dissolve sang hiên nhà → S25

## S25 · C33 · CHƯƠNG 2 · live-object/procedural
SCENE   Hiên nhà, Mặt Trăng nhỏ trên trời (cùng khung S02). Một thẻ nhãn nhỏ hiện cạnh Mặt Trăng và một
        thẻ giống hệt hiện dưới chân, trên nền đất. Hai thẻ cùng một mã
CAMERA  bắt đầu ở khung S02, tilt-down chậm xuống sàn hiên, rồi ngẩng lại
ELEMENT 0s khung S02, Mặt Trăng 24–28px · 3s thẻ nhãn cạnh Mặt Trăng: một ô nhỏ chứa đường chéo ICE_CYAN
        (biểu tượng của đường Trái Đất ở S22, không chữ) · 6s tilt-down, thẻ y hệt hiện trên viên gạch
        sàn · 10s ngẩng lại, cả hai thẻ cùng mờ tan
SFX     quay về tiếng đêm ngoài hiên một thoáng (theo AUDIO DIRECTION C33)
CUT     hard-cut sang bảng → S26

## S26 · C34 · CHƯƠNG 2 · graph
SCENE   Bảng bốn dữ kiện: "Từ đây" · "Bị nướng" · "Thiếu lõi" · "Quá to". Dưới là ba câu chuyện đã gạch.
        Một ô thứ tư trống, và ô ấy bắt đầu nóng lên
CAMERA  tĩnh, rồi dolly-in vào ô thứ tư ở giây cuối cho tới khi ánh EMBER tràn khung
ELEMENT bốn dữ kiện thành bốn ô nét 3px hàng trên; ba câu chuyện hàng dưới có gạch chéo ROCK_GREY; ô 4
        ghi "4 · ?" · 0s hàng trên · 4s hàng dưới · 8s ô 4 · 11s viền ô 4 ửng EMBER 0.6 → 1.2, nền
        quanh ô ám đỏ, các ô khác tối đi · 14s dolly-in, EMBER tràn ≤12% khung rồi cắt
CUT     đen 1s (gap 2.5) → CHƯƠNG 3

---

# CHƯƠNG 3 — ĐÊM THEIA (C35–C55)

## S27 · C35 · CHƯƠNG 3 · astro-realistic
SCENE   Bốn tỉ rưỡi năm trước. Trái Đất non từ không gian: gần đủ cỡ, vỏ mỏng tối vừa nguội, khe nứt
        còn sáng đỏ, không đại dương, không Mặt Trăng
CAMERA  orbit chậm 15° quanh Trái Đất non, 50mm, rìa hành tinh lệch phải khung
ELEMENT Trái Đất non KHÔNG dùng texture NASA: procedural — nền basalt đen, mạng khe nứt EMBER
        (emissive 1.2 chỉ trong khe, ≤6% khung), vài hồ magma tròn, khí quyển mỏng ám cam ở rìa, KHÔNG
        có mây trắng, không xanh; quay thuận chiều · 0s nhãn chương "CHƯƠNG 3 · ĐÊM THEIA" · 3s khe
        nứt rõ khi terminator đi qua · 8s một mảng vỏ tối lớn trôi qua khung — "mới nguội được một
        lớp vỏ mỏng" · 12s camera hạ xuống gần bề mặt, chuẩn bị đổi điểm nhìn
SFX     drone trầm dâng chậm (theo AUDIO DIRECTION C35)
CUT     hạ xuống liên tục qua khí quyển → S28

## S28 · C36 · CHƯƠNG 3 · astro-realistic
SCENE   Đứng trên Trái Đất non. Cánh đồng đá tối, vài vệt đỏ ở khe. Ngẩng lên: bầu trời chỉ có sao. Không
        có gì to trên trời
CAMERA  tilt-up 24mm từ đá dưới chân lên thiên đỉnh, chậm; giữ ở trời 2s
ELEMENT mặt đất: đá basalt sần, vệt EMBER trong khe (thấp, ≤4% khung); trời: starfield dày hơn hôm nay
        (không ô nhiễm sáng), dải Ngân Hà `galaxy_starfield.png` mờ; ⚠ CHỖ MẶT TRĂNG HAY ĐỨNG TRỐNG —
        cố ý để một vùng trời quen ở trên phải không có gì · 0s đá · 2s tilt · 4s trời trống
CUT     cắt ra không gian → S29

## S29 · C37–C38 · CHƯƠNG 3 · astro-realistic + graph
SCENE   Nhìn từ trên hoàng đạo: Mặt Trời ở xa, quỹ đạo Trái Đất non, và trên gần như CÙNG một đường
        tròn, một hành tinh khác nhỏ hơn đang lớn: Theia. Rồi zoom xuống sơ đồ va chạm xiên
CAMERA  C37: nhìn từ cực Bắc hoàng đạo xuống, 35mm, hai hành tinh ở cùng vòng; dolly-in dần vào Theia ·
        C38: cắt sang sơ đồ top-down hai quả cầu, tĩnh
ELEMENT Theia procedural: đường kính 0,53 Trái Đất (cỡ Sao Hoả), bề mặt đá xám-đỏ nhạt có khe EMBER
        thưa hơn Trái Đất non; hai quỹ đạo gần trùng (lệch 2–3% bán kính), cả hai đi ngược kim đồng
        hồ; Mặt Trời là điểm sáng emissive 2.0 ở mép khung · 0s hệ · 4s nhãn "Theia · cỡ Sao Hoả · 1/10
        khối lượng Trái Đất" · 10s hai hành tinh gần nhau trên đường tròn · C38 (16s): sơ đồ: Trái Đất
        giữa, Theia tới theo đường thẳng lệch tâm, điểm chạm ở RÌA, góc tới ~45°, mũi tên "≈ 9 km/s";
        nhãn "va chạm xiên" · 24s hai quả bóng ma minh hoạ đập mép nhau (outline, 1 nhịp)
SFX     nhịp bắt đầu dồn, drone thêm tầng rung thấp (theo AUDIO DIRECTION C38)
CUT     hard-cut xuống mặt đất → S30

## S30 · C39 · CHƯƠNG 3 · astro-realistic
SCENE   Đứng trên Trái Đất non nhìn Theia tới: một chấm sáng, rồi một đĩa, rồi không còn chân trời
CAMERA  tĩnh 24mm hướng về chân trời, không rung cho tới giây cuối; giây cuối khung bị Theia phủ hết
ELEMENT Theia được Mặt Trời chiếu, có pha; kích thước góc tăng theo 1/khoảng cách, nén thời gian:
        0s chấm 3px · 3s đĩa 60px, thấy khe nứt · 6s đĩa 500px, chân trời cong của Theia hiện · 8s
        Theia chiếm trọn khung, bề mặt đá của nó lấp cả trời, đá dưới chân bắt đầu sáng lên vì bức xạ
        nhiệt từ nó; ⚠ vùng >0.85 chỉ được 12% ngay trước cắt
CUT     ⚠ CẮT ĐÚNG ĐỈNH — trắng 1 frame rồi → S31

## S31 · C40 · CHƯƠNG 3 · astro-realistic + particle ⭐ VA CHẠM
SCENE   Từ không gian, khoảng cách 8 bán kính Trái Đất: Theia chạm rìa Trái Đất non ở ~9 km/s. Điểm
        chạm bùng sáng, đá hoá lỏng, rồi bốc hơi; hai thân hành tinh biến dạng như hai giọt chất lỏng
CAMERA  tĩnh, 50mm, hai hành tinh lệch trái; rung biên độ 3px sin(t) trong 2s sau chạm rồi tắt
ELEMENT thời gian nén ~200×: cả cú va thấy trong ~8s; Theia tới từ phải-dưới theo đúng góc S29; vùng
        chạm DISK_HOT emissive 1.6, lan ra thành sóng xung kích trên cả hai bề mặt (vòng sáng chạy
        trên mặt cầu, hàm của t); vật chất bắn ra là hạt DISK_HOT + EMBER (particle instanced, seeded),
        tia dài về phía đối diện điểm chạm; Theia bị xé thành hai mảnh lớn kéo dài · 0s chạm · 2s
        sóng xung kích · 4s tia đá bắn ra · 6s Theia biến dạng · 8s mảnh Theia vòng lại lần hai
        (đúng mô phỏng chuẩn: mảnh lõi quay lại đâm lần nữa)
SFX     tiếng vỡ trầm dưới ngưỡng nghe, rồi gầm rít kéo dài (theo AUDIO DIRECTION C40)
CUT     giữ cảnh, camera bắt đầu lùi → S32

## S32 · C41 · CHƯƠNG 3 · particle + astro-realistic ⭐ ĐĨA ĐÁ BỐC HƠI
SCENE   Lớp phủ nóng chảy của cả hai văng ra thành một đĩa quanh Trái Đất. Trong vài giờ, Trái Đất
        thành hành tinh có vành — vành bằng đá bốc hơi
CAMERA  pull-back từ 8 lên 20 bán kính Trái Đất, đồng thời hạ từ 40° xuống ~10° so với mặt phẳng đĩa
        để thấy vành từ cạnh; chuyển động liên tục không cắt
ELEMENT đĩa từ 1,5 tới ~5 bán kính Trái Đất, dày ở trong, mỏng ở rìa; vật liệu: hạt + volume DISK_HOT
        emissive 1.2 ở trong, EMBER mờ ở ngoài; quay Kepler (trong nhanh hơn ngoài); Trái Đất ở tâm
        giờ là quả cầu magma toàn bộ (bề mặt EMBER đều, emissive 1.0), không còn vỏ tối; ⚠ vành là
        ĐÁ BỐC HƠI: không có băng, không trắng-lam, không có "khe hở" — đây KHÔNG phải đĩa tiền hành
        tinh · 0s vật liệu vẫn đang bắn · 5s bắt đầu cuộn thành vành · 10s vành rõ, camera hạ xuống
        cạnh · 15s toàn cảnh "Sao Thổ đá", nhãn "vài giờ sau"
CUT     gap 1.5: gầm rít hạ, khung tối bớt → S33

## S33 · C42–C43 · CHƯƠNG 3 · astro-realistic + graph ⭐ SẮT CHÌM
SCENE   Lát cắt Trái Đất đang nóng chảy: lõi sắt của Theia, một khối kim loại nặng, chìm xuyên lớp phủ
        lỏng và nhập vào lõi Trái Đất. Ngoài kia, đĩa chỉ toàn đá
CAMERA  C42: giữ toàn cảnh đĩa, ba nhãn cũ (Quá to / Quá nhẹ ở tâm / Bị nướng) hiện lại nhỏ ở góc ·
        C43: dolly-in vào Trái Đất, mặt cắt mở ra, theo khối sắt chìm xuống tới lõi
ELEMENT mặt cắt: lớp phủ lỏng EMBER/DISK_HOT đối lưu FBM chậm; lõi Trái Đất FE_METAL sáng ánh kim ở
        tâm; khối sắt Theia FE_METAL bán kính ~0,25 lõi Trái Đất, méo, chìm xuống theo đường cong (nặng
        hơn nên đi xuyên, không nổi), để lại vệt xoáy; khi chạm lõi, hai khối nhập, lõi phồng lên
        nhẹ · C43 0s mặt cắt · 4s khối sắt rơi · 9s chạm lõi, nhập · 12s pull-back nhẹ: nhãn "Trái
        Đất giữ gần hết sắt", đĩa ngoài đổi sang tông đá (DISK_HOT không ánh kim), nhãn "đĩa: gần
        như chỉ có đá" · 15s lát cắt Mặt Trăng ma với lõi 0,20 hiện ở góc — "lõi bé" tự khớp
CUT     giữ đĩa, đổi điểm nhìn ra ngoài đĩa → S34

## S34 · C44–C45 · CHƯƠNG 3 · particle + graph
SCENE   Đĩa nóng hàng nghìn độ phơi trong chân không: hạt nhẹ bốc lên khỏi mặt đĩa, một phần bị thổi
        ra ngoài, một phần rơi lại Trái Đất; đĩa nguội dần từ trắng cam sang đỏ sẫm. Ba dấu tích khớp
CAMERA  nhìn từ cạnh đĩa, 35mm, Trái Đất magma bên trái khung, đĩa trải ra phải; tĩnh, chỉ ánh sáng và
        hạt đổi
ELEMENT hạt bay hơi H_WHITE nhỏ, seeded, rời mặt đĩa theo hai luồng: (a) ra xa theo hướng ly tâm rồi
        tắt, (b) cong về Trái Đất rồi tắt khi chạm; nhãn nhỏ "Na · K · H₂O" trên vài hạt (dấu đầy đủ);
        vật liệu đĩa còn lại chuyển màu theo nhiệt: DISK_HOT (0s) → EMBER (10s) → đỏ sẫm 0.5 (20s) ·
        C45: ba nhãn ở góc lần lượt được đánh dấu khớp, mỗi nhãn một nhịp: "Lõi bé" · "Khô" · "To";
        cuối cùng nhãn "một sự kiện, khớp cả" · ⚠ khối lượng: đĩa vẫn phải nhìn dày và nhiều sau khi
        bay hơi — đủ để kết một vật 1/4 Trái Đất
CUT     gap 1.5, hạt lắng, đĩa yên → S35

## S35 · C46 · CHƯƠNG 3 · particle + astro-realistic
SCENE   Đá trong đĩa kết lại. Hai cách kể chạy nối tiếp: chậm — hàng trăm mảnh nhỏ gom dần thành một;
        nhanh — một cục lớn bị hất thẳng lên quỹ đạo rồi tự tròn lại. Cả hai đều là chớp mắt
CAMERA  nhìn từ trên đĩa 30°, 35mm; cách 1 và cách 2 dùng cùng khung, chỉ khác nội dung
ELEMENT cách 1 (0–8s, nhãn "mô hình cũ · vài chục năm"): 300 mảnh seeded trên đĩa gom theo lịch trộn
        định trước (hàm của t, không mô phỏng), mảnh to nuốt mảnh nhỏ, kết ở một quả cầu đỏ tối tại
        rìa ngoài đĩa · cách 2 (8–16s, nhãn "mô phỏng mới · vài giờ"): tua lại về đĩa nguyên, một khối
        lớn méo bị văng ra ngoài rìa Roche, dao động, lắc, rồi thu về cầu trong vài giây · 16s cả hai
        kết cục hiện cạnh nhau: cùng một quả cầu đỏ tối, nhãn "trên thang địa chất: chớp mắt"
CUT     giữ quả cầu mới, camera bắt đầu lùi → S36

## S36 · C47 · CHƯƠNG 3 · astro-realistic + graph
SCENE   Mặt Trăng mới kết ở sát rạt: ba bán kính Trái Đất. Camera lùi ra tới khoảng cách hôm nay, sáu
        mươi bán kính: Mặt Trăng thành một chấm. Bộ đếm khoảng cách chạy
CAMERA  pull-back liên tục theo hàm mũ từ 3 R⊕ tới 60 R⊕ (ống kính cố định 35mm), Trái Đất giữ ở 1/3
        trái, Mặt Trăng ở phải
ELEMENT Trái Đất magma (đỏ, vẫn còn vành mỏng tàn dư), Mặt Trăng đỏ tối cách 3 R⊕ tâm-tới-tâm; vạch
        đo ngang giữa hai tâm với bộ đếm "≈ 20 000 km" · 0s cận · 4s lùi, vạch dài ra, số chạy · 9s
        dừng ở 60 R⊕: Trái Đất 40px, Mặt Trăng 11px cách 2 400px — ⚠ với 1920px khung, Mặt Trăng ở
        60 R⊕ RA NGOÀI khung nếu Trái Đất 40px; giải pháp: Trái Đất 24px, Mặt Trăng 7px, cách 1 450px,
        bộ đếm "384 000 km"; nhãn "gần 20 lần" · 12s hai vị trí Mặt Trăng (3 R⊕ ma và 60 R⊕ thật)
        cùng hiện trên một vạch
CUT     hard-cut xuống mặt đất → S37

## S37 · C48–C49 · CHƯƠNG 3 · astro-realistic ⭐ MẶT TRĂNG ĐỎ BẰNG NẮM TAY
SCENE   Đứng trên Trái Đất non và ngẩng lên: một quả cầu đá ĐỎ RỰC to bằng nắm tay giơ thẳng cánh tay,
        vắt qua bầu trời trong vài giờ. Một ngày năm tiếng
CAMERA  tĩnh 24mm hướng đông-nam, chân trời đá ở 1/5 dưới; không rung
ELEMENT Mặt Trăng non: đường kính góc 10–12° (gấp ~20 lần 0,52°) → ~330px trên 24mm; bề mặt magma đang
        nguội: EMBER emissive 1.0 với mảng vỏ đen đang đóng, KHÔNG có biển tối, KHÔNG hố lớn (chưa
        hình thành); ánh sáng của nó nhuộm đỏ mặt đá dưới chân; ⚠ vùng >0.85 ≤ 12% khung: giữ Mặt
        Trăng ở đỏ bão hoà chứ không cam trắng; mọc ở ĐÔNG, đi về TÂY (Trái Đất quay 5h nhanh hơn Mặt
        Trăng đi vòng ~7h ở 3 R⊕), nén thời gian ~1 500× · 0s Mặt Trăng ở chân trời đông · 6s giữa
        trời, bóng đổ của đá dưới chân xoay theo · 12s xuống tây · C49 (16s): đồng hồ tròn ở góc chỉ
        "1 ngày = 5 giờ", kim chạy một vòng trong 4s; Mặt Trời cũng mọc-lặn nhanh trong nền · 20s nắm
        tay silhouette giơ lên che vừa khít Mặt Trăng (1 nhịp, mảng đen tuyệt đối, không chi tiết)
SFX     drone tắt, chỉ còn tiếng ù rất thấp như hơi nóng (theo AUDIO DIRECTION C48)
CUT     gap 2.5: hình tối dần về đỏ sẫm, giữ → S38

## S38 · C50 · CHƯƠNG 3 · particle + graph
SCENE   "Chỗ chưa khép." Cùng cảnh đĩa ở S32 nhưng đổi sang chế độ mô phỏng: mỗi hạt tô màu theo nguồn
        gốc — hạt của Trái Đất một màu, hạt của Theia màu khác. Khung trở nên phân tích, lạnh hơn
CAMERA  tĩnh, cùng góc S32 giai đoạn 15s (rhyme cố ý); ánh sáng cảnh hạ, chỉ hạt phát sáng
ELEMENT 0s cảnh đĩa thật · 2s crossfade sang chế độ hạt: hạt gốc Trái Đất ICE_CYAN, hạt gốc Theia
        D_MAGENTA; Trái Đất ở tâm tô ICE_CYAN với vệt D_MAGENTA đã trộn vào; đĩa nhìn thấy NGAY là
        phần lớn D_MAGENTA · 5s nhãn "chế độ mô phỏng · màu theo nguồn gốc" · 7s chú thích hai màu
CUT     giữ, thêm graph → S39

## S39 · C51–C52 · CHƯƠNG 3 · graph ⭐ KHỦNG HOẢNG ĐỒNG VỊ
SCENE   Thanh tỉ lệ đĩa: 6–8 phần mười từ Theia. Đồ thị oxy S22 trở lại: điểm Mặt Trăng LẼ RA phải nằm
        trên một đường Theia ở đâu đó khác. Nhưng nó nằm trên đường Trái Đất. Nút thắt được đặt tên
CAMERA  tĩnh; đồ thị trượt vào từ phải ở C52 chiếm 60% khung, đĩa mô phỏng thu về góc trái
ELEMENT C51: thanh ngang 100%: đoạn D_MAGENTA "Theia · 60–80%" và đoạn ICE_CYAN "Trái Đất · 20–40%", đầu
        phân cách có thanh sai số (kịch bản: "sáu, bảy, có khi tám") · 6s mũi tên từ thanh sang một
        điểm dự đoán "Mặt Trăng (dự đoán)" D_MAGENTA · C52 (12s): đồ thị ba đồng vị: đường Trái Đất
        ICE_CYAN với chấm trùng (S23), và một DẢI D_MAGENTA mờ rộng đánh dấu "Theia · chưa biết ở đâu,
        đáng ra phải khác" lệch khỏi đường Trái Đất; điểm dự đoán nằm trong dải, điểm THẬT nằm trên
        đường Trái Đất; hai điểm nối bằng một dấu chấm hỏi · 20s nhãn lớn "khủng hoảng đồng vị" nét
        4px, và dòng nhỏ "chưa được gỡ"; ⚠ KHÔNG vẽ mũi tên giải, không đường hội tụ
CUT     đồ thị mờ, giữ hai màu hạt → S40

## S40 · C53 · CHƯƠNG 3 · particle
SCENE   Hướng giải thứ nhất: cú va mạnh và nóng hơn nhiều, Trái Đất và Theia cùng hoá hơi thành một
        khối hơi đá khổng lồ, hai màu bị khuấy tới khi chỉ còn một màu. Mặt Trăng ngưng tụ từ khối ấy
CAMERA  wide 24mm, khối hơi chiếm 70% khung; camera orbit chậm; cuối shot dolly-in tới điểm ngưng tụ
ELEMENT khối hơi đá: volume + hạt, kích thước ~10 R⊕, dẹt như bánh phồng, nóng DISK_HOT ở tâm; hạt
        ICE_CYAN và D_MAGENTA ban đầu tách vùng (Trái Đất tâm, Theia vành), rồi xoáy trộn theo trường
        vận tốc seeded (hàm của t) · 0s hai vùng màu rõ · 5s xoáy · 10s màu trung gian D_VIOLET đều
        khắp — hai màu sơn khuấy thành một · 15s một cục ngưng tụ ở vành ngoài, màu D_VIOLET đồng
        nhất, nhãn "hướng 1 · trộn đều"
CUT     hard-cut sang đĩa Mặt Trời → S41

## S41 · C54 · CHƯƠNG 3 · astro-realistic + particle
SCENE   Hướng giải thứ hai: đĩa bụi quanh Mặt Trời trẻ, hai mầm hành tinh lớn lên trong CÙNG một vành —
        cùng vật liệu từ đầu. Nhưng viền vẽ bằng nét chấm: chưa ai chứng minh
CAMERA  nhìn từ trên đĩa 35°, 35mm, dolly-in nhẹ vào vành có hai mầm
ELEMENT đĩa tiền hành tinh (ở ĐÂY mới là đĩa tiền hành tinh thật: phân tầng nhiệt, khe hở, quay
        Kepler — đúng quy ước tập nước); vành ở ~1 AU tô cùng một màu ICE_CYAN cho cả hai mầm (không có
        D_MAGENTA); mầm lớn "Trái Đất", mầm nhỏ "Theia" cùng vành, cách nhau ~60° trên vòng · 0s đĩa ·
        4s hai mầm sáng lên · 8s hai thẻ nhãn "cùng dấu vân tay" · 11s toàn bộ cảnh chuyển sang NÉT
        CHẤM outline, nhãn "hướng 2 · chưa chứng minh"
CUT     dissolve sang bảng tổng kết → S42

## S42 · C55 · CHƯƠNG 3 · graph
SCENE   Bảng "có / chưa": bên trái bốn ô chắc — va chạm, Theia, đĩa, Mặt Trăng kết lại; bên phải một
        thanh trượt "bao nhiêu phần Trái Đất / Theia" với con trỏ đang dao động, KHÔNG dừng
CAMERA  tĩnh tuyệt đối
ELEMENT cột trái: bốn ô nét 3px ICE_CYAN, đánh dấu khớp, nhãn "gần như chắc chắn"; cột phải: thanh
        ngang từ "20% Trái Đất" đến "80% Trái Đất", con trỏ trượt qua lại theo sin biên độ giảm nhẹ
        nhưng ⚠ tuyệt đối không dừng ở một giá trị; nhãn "vẫn đang đo" · 0s cột trái từng ô · 8s thanh
        trượt · 14s con trỏ vẫn chạy khi cắt
CUT     đen 1s (gap 2.5) → CHƯƠNG 4, tiếng sóng

---

# CHƯƠNG 4 — NÓ ĐANG RỜI ĐI (C56–C67)

## S43 · C56–C57 · CHƯƠNG 4 · live-object + astro-realistic
SCENE   Hiên nhà, tối nay. Mặt Trăng bé bằng móng tay, trắng, lạnh. Rồi phía sau nó, bóng ma của chính nó
        hồi ấy hiện lên: đỏ, to bằng nắm tay. Bộ đếm khoảng cách chạy từ hai chục nghìn ra ba trăm tám
        mươi nghìn, bóng ma co lại thành Mặt Trăng hôm nay
CAMERA  tĩnh, ĐÚNG khung S02 (rhyme), 35mm; không drift ở shot này
ELEMENT 0s nhãn chương "CHƯƠNG 4 · NÓ ĐANG RỜI ĐI"; Mặt Trăng 24–28px trắng lạnh, đèn đường và mái nhà
        như S02 · C57 (7s): bóng ma đỏ EMBER alpha 0.5 đường kính ~330px hiện đồng tâm với Mặt Trăng
        thật · 11s vạch đo dọc bên phải khung với bộ đếm "20 000 km → 384 000 km" · 14s bóng ma co
        theo hàm mũ và nhạt dần, dừng đúng cỡ Mặt Trăng thật rồi tắt · 19s một chấm nhỏ nhấp nháy
        trên Mặt Trăng: "thứ các phi hành gia để lại"
SFX     tiếng đêm ngoài hiên + sóng biển rất xa, chậm (theo AUDIO DIRECTION C56)
CUT     dolly-in nhanh vào chấm nhỏ trên Mặt Trăng → S44

## S44 · C58 · CHƯƠNG 4 · astro-realistic + procedural ⭐ GƯƠNG PHẢN XẠ GÓC
SCENE   Mặt Trăng mặt gần với NĂM điểm: ba Apollo, hai Lunokhod. Cận cảnh một tấm gương: một khay
        các ô lăng kính góc. Chiếu tia vào từ ba hướng khác nhau, tia nào cũng quay về đúng hướng đó
CAMERA  0–6s: `moonmap1k.jpg` chiếu phẳng, năm chấm · 6s dolly-in vào điểm Apollo 15 · 8–17s: macro
        50mm orbit quanh khay gương đặt nghiêng trên regolith
ELEMENT năm điểm đúng vị trí: Apollo 11 (Biển Tĩnh Lặng), Apollo 14 (Fra Mauro), Apollo 15 (Hadley
        Rille, 26°B 3,6°Đ), Lunokhod 1 (Biển Mưa, 38°B 35°T), Lunokhod 2 (hố Le Monnier, 26°B 31°Đ);
        nhãn tiếng Việt có dấu; khay gương: lưới 300 ô lăng kính góc (Apollo 15) hình lục giác, thuỷ
        tinh trong, khung nhôm, đặt nghiêng hướng về Trái Đất; nguyên lý: ba mặt gương vuông góc — tia
        vào phản xạ ĐÚNG 3 lần rồi ra SONG SONG ngược chiều tia vào; vẽ tia GRAPH_GREEN mảnh, ba lần
        thử: 9s tia từ trái · 12s tia từ trên · 15s tia xiên phải — cả ba đều quay về nguồn; nhãn
        "bắn từ hướng nào, trả về hướng ấy"; bóng đổ trên regolith đen tuyệt đối
CUT     tia cuối cùng bay lên khỏi khung → S45

## S45 · C59 · CHƯƠNG 4 · particle + astro-realistic + graph ⭐ LASER 2,5 GIÂY THỜI GIAN THẬT
SCENE   Trái Đất và Mặt Trăng ở KHOẢNG CÁCH THẬT, cùng khung. Một xung laser xanh lục rời một đài quan
        sát, đi 1,28 giây tới Mặt Trăng, quay về 1,28 giây nữa. Đồng hồ đếm. Rồi con số: 3,8 cm/năm,
        đặt cạnh một móng tay
CAMERA  tĩnh tuyệt đối trong lúc xung bay (0–12s); sau đó dolly-in về Trái Đất rồi cắt sang thước đo
ELEMENT tỉ lệ THẬT trên 1920px: Trái Đất 24px ở 1/8 trái, Mặt Trăng 7px ở 7/8 phải, cách 1 450px
        (384 000 km); xung laser là một hạt GRAPH_GREEN emissive 1.3 với vệt ngắn, bay THỜI GIAN THẬT:
        1,28s đi, chạm Mặt Trăng, 1,28s về; đồng hồ góc trên "0,00 s → 2,56 s" · 0s xung rời Trái Đất
        · 1,3s chạm · 2,6s về · 4s lặp lần hai (tiếng "tách") · 7s nhãn "khoảng 2,5 giây khứ hồi";
        chùm thật LOE ra: vẽ hình nón mảnh alpha 0.15 rộng dần tới vài km ở Mặt Trăng (ghi chú kỹ thuật,
        không nhãn) · 12s cắt sang thước: một vạch "3,8 cm" trên nền đen, một đường viền móng tay ngón
        cái silhouette đặt sát vạch, nhãn "mỗi năm" và "= tốc độ móng tay mọc"
SFX     tiếng "tách" rất nhỏ, lặp thưa, khớp mỗi lần xung rời Trái Đất (theo AUDIO DIRECTION C59)
CUT     gap 1.5: thước mờ → S46

## S46 · C60 · CHƯƠNG 4 · astro-realistic + graph ⭐ BƯỚU THUỶ TRIỀU LỆCH
SCENE   Nhìn từ cực Bắc xuống: Trái Đất với hai bướu nước phóng đại, Mặt Trăng đi vòng. Trái Đất quay
        nhanh hơn, bướu bị lôi lệch về phía trước. Bướu lệch kéo Mặt Trăng tiến lên, ra xa; đồng thời
        hãm Trái Đất. Bốn tỉ rưỡi năm tua nhanh
CAMERA  top-down từ cực Bắc, 35mm; giây 20 nghiêng xuống 3/4 để thấy bướu nổi trên cầu
ELEMENT Trái Đất `2_no_clouds_4k` nhìn từ cực Bắc, quay NGƯỢC KIM ĐỒNG HỒ; lớp nước OCEAN_TEAL phóng đại
        thành hình elip hai bướu (biên độ 6% bán kính, cố ý phóng đại, ghi chú); Mặt Trăng đi vòng cũng
        ngược kim đồng hồ nhưng CHẬM hơn nhiều (24h so với 27 ngày: trong shot Trái Đất quay 6 vòng,
        Mặt Trăng đi 1/4 vòng); trục dài của elip nước LỆCH TRƯỚC hướng Mặt Trăng một góc ~3° theo
        chiều quay (vẽ 8° để đọc được, ghi chú) · 0s Trái Đất + Mặt Trăng · 4s hai bướu · 8s bướu
        lệch trước, vạch góc · 12s mũi tên ICE_CYAN từ bướu tới Mặt Trăng "kéo tiến lên", quỹ đạo nở
        ra chậm · 16s mũi tên ngược từ Mặt Trăng vào bướu "hãm Trái Đất", tốc độ quay giảm nhìn thấy ·
        20s nghiêng 3/4, bộ đếm "4,5 tỉ năm", quỹ đạo nở từ 3 R⊕ ra 60 R⊕ (nén, log), Trái Đất chậm
        dần từ 5h
SFX     tiếng sóng rõ hơn một chút (theo AUDIO DIRECTION C60)
CUT     match-cut: đồng hồ 5h ở góc → S47

## S47 · C61 · CHƯƠNG 4 · procedural ⭐ SAN HÔ DEVON
SCENE   Một san hô hoá thạch hình sừng, gần bốn trăm triệu năm. Camera bò dọc thân nó: những vân mỏng
        mỗi ngày, và dải dày mỗi năm, như vân gỗ. Bộ đếm đếm vân ngày trong một vân năm: tới khoảng 400
CAMERA  macro 100mm, dolly dọc theo trục san hô từ đỉnh xuống, tốc độ đều; DOF nông
ELEMENT san hô rugosa: hình nón cong nhẹ, dài ~8 cm, màu đá xám nâu ROCK_GREY ấm; bề mặt có vân ngang
        mảnh (vân ngày, cách nhau ~0,1 mm) và dải nổi dày mỗi ~40 mm (vân năm); ánh sáng xiên thấp để
        vân nổi bóng · 0s nhãn "san hô hoá thạch · ~400 triệu năm · 1963" (không ghi tên người, kịch
        bản không nêu) · 4s hai vạch năm được đánh dấu, khoảng giữa tô mờ · 7s bộ đếm bắt đầu chạy
        theo tốc độ camera qua vân, số nhảy từng vân · 16s dừng ở "≈ 400 vân ngày / 1 vân năm" · 19s
        nhãn "như vân gỗ"
CUT     vân san hô mờ thành vòng tròn → S48

## S48 · C62 · CHƯƠNG 4 · graph ⭐ ĐỒNG HỒ NGÀY
SCENE   Một vòng tròn = một năm, chia vạch. Bên trái chia 400 vạch, bên phải 365. Năm dài như nhau, nên
        mỗi vạch bên trái ngắn hơn. Đồng hồ ngày: 22 giờ → 24 giờ, và kim vẫn đang bò
CAMERA  tĩnh tuyệt đối
ELEMENT hai vòng năm cùng đường kính; vòng trái 400 vạch, nhãn "400 ngày / năm · ngày ≈ 22 giờ"; vòng
        phải 365 vạch, nhãn "365 ngày / năm · ngày = 24 giờ"; giữa hai vòng một đồng hồ 24 vạch có kim
        chỉ độ dài ngày · 0s vòng trái · 4s vòng phải · 8s đồng hồ, kim từ 22 sang 24 trong 3s · 13s
        dòng nhỏ "+ 2 phần nghìn giây mỗi thế kỷ" · 17s kim tiếp tục nhích một lượng không thấy được
        nhưng nhãn "24 giờ" nhấp nháy thành "24 giờ · lúc này" · S37 đồng hồ "5 giờ" hiện mờ ở góc
        làm mốc đầu chuỗi 5 → 22 → 24
CUT     gap 2.0: nền yên → S49

## S49 · C63 · CHƯƠNG 4 · astro-realistic + graph
SCENE   Hai Trái Đất cạnh nhau, cùng tua hàng triệu năm. Trái: có Mặt Trăng, trục nghiêng 23,4° đứng yên,
        mùa đều. Phải: không Mặt Trăng, trục lật lung tung hàng chục độ
CAMERA  tĩnh, hai quả cầu ở 1/3 trái và 1/3 phải, Mặt Trời chiếu từ trái khung cả hai
ELEMENT hai Trái Đất `2_no_clouds_4k` + mây; trục vẽ bằng đường mảnh xuyên hai cực; trái: trục cố định
        23,4°, Mặt Trăng đi vòng quanh (quỹ đạo nén), nhãn "có Mặt Trăng"; phải: trục lắc theo tổng
        3 sin seeded biên độ 10–60°, chậm nhưng thấy rõ, nhãn "không có Mặt Trăng · theo tính toán";
        terminator của quả cầu phải trượt loạn lên xuống — mùa vỡ · 0s hai quả cầu · 4s trục · 8s bộ
        đếm "hàng triệu năm" chạy, bên phải bắt đầu lật · 13s nhãn "đang giữ hành tinh này đứng thẳng"
SFX     sóng lùi xa, chỉ còn tiếng đêm và giọng (theo AUDIO DIRECTION C63)
CUT     gap 2.0: dissolve chậm về hiên nhà → S50

## S50 · C64–C65 · CHƯƠNG 4 · live-object + astro-realistic
SCENE   Trên lan can hiên: một cốc nước, và một bàn tay có chiếc nhẫn vàng. Hai đường mảnh từ trời rơi
        XUỐNG hai vật ấy: chở tới. Rồi camera ngẩng lên, một đường duy nhất đi NGƯỢC LÊN, từ đất dưới
        chân tới Mặt Trăng. Nó chưa bao giờ rơi trở lại
CAMERA  C64: tĩnh 50mm ngang lan can, cốc nước và bàn tay ở 1/3 dưới · C65: tilt-up chậm theo đường lên
        tới Mặt Trăng, kết ở khung S02
ELEMENT cốc nước và nhẫn dưới ROOM_WARM yếu (cường độ 0.12), nền đêm; hai đường ICE_CYAN mảnh alpha 0.5
        rơi từ đỉnh khung xuống đúng cốc và nhẫn, mũi tên chỉ XUỐNG, mờ tan · C65 (13s): một đường EMBER
        rất mờ (0.35) xuất phát từ viên gạch dưới chân, đi lên, camera theo đường ấy tới Mặt Trăng 24–28px;
        bàn tay silhouette chỉ tay lên trùng hướng đường · 20s đường tan, chỉ còn Mặt Trăng và bàn tay ·
        24s bàn tay hạ xuống khỏi khung
CUT     gap 2.5: giữ nguyên khung, mọi thứ lặng → S51

## S51 · C66–C67 · CHƯƠNG 4 · live-object + astro-realistic ⭐ KẾT
SCENE   Hiên nhà. Mặt Trăng ở cỡ thật, trắng, nhỏ, giữa mái nhà và dây điện. Không nhãn, không đường.
        Nó đang rời đi ở tốc độ không thể nhìn thấy. Tối dần
CAMERA  tĩnh tuyệt đối, ĐÚNG khung S01 cuối/S02 (khép vòng), 35mm; không drift
ELEMENT C66: Mặt Trăng 24–28px, pha như S02; đèn đường đã TẮT (khác S02 — khuya hơn), chỉ còn Mặt Trăng
        là điểm sáng; dế · gap 2.5s giữ nguyên · C67: Mặt Trăng thu nhỏ 1px trong 3s (0,52° → cỡ vài
        nghìn năm sau; không nhìn thấy nhưng có thật trong dữ liệu render) · fade-out chậm 3s về đen;
        ⚠ đây là một trong hai khung được phép không có điểm neo nào ngoài Mặt Trăng (khung kia là S28)
SFX     gần như thì thầm; dế trở lại rất nhẹ (theo AUDIO DIRECTION C66)
CUT     đen. Hết

---

# GHI CHÚ DỰNG HÌNH

## 1. Bảng màu — kế thừa bảng ĐÃ ĐO qua `HFA.saturationAfterACES` của tập nước; ba màu mới ghi rõ

Quy tắc không đổi: **kênh yếu ≤ 0.2× kênh mạnh; kênh mạnh quanh 1.0; muốn sáng thì tăng emissive,
đừng nâng kênh yếu.** `after` là bão hoà còn lại SAU ACES.

| Tên | Linear RGB | after | Dùng ở đâu trong tập này |
|---|---|---|---|
| `ICE_CYAN` | `(0.08, 0.55, 1.00)` | .89 | đường Trái Đất và chấm Trái Đất·Mặt Trăng trên đồ thị oxy; hạt gốc Trái Đất ở S38–S40; mũi tên thuỷ triều; ô "chắc chắn" |
| `OCEAN_TEAL` | `(0.02, 0.46, 0.52)` | .98 | đại dương Trái Đất hôm nay, lớp nước hai bướu S46 |
| `CLOUD_INK` | `(0.02, 0.03, 0.07)` | .86 | bầu trời đêm trên hiên (S01, S02, S25, S43, S50, S51) |
| `EMBER` | `(1.00, 0.18, 0.02)` | .99 | khe nứt Trái Đất non, Mặt Trăng đỏ S37, bóng ma đỏ S43, viền ô 4 ở S26 |
| `DISK_HOT` | `(1.00, 0.30, 0.05)` | .95 | điểm va chạm, đĩa đá bốc hơi S32–S34, tâm khối hơi S40 |
| `DUST_WARM` | `(1.00, 0.42, 0.12)` | .80 | vành bụi S18, đĩa tiền hành tinh S41 |
| `D_MAGENTA` | `(1.00, 0.06, 0.42)` | .93 | **hạt gốc Theia** S38–S40, dải Theia trên đồ thị S39, đoạn Theia trên thanh tỉ lệ |
| `D_VIOLET` | `(0.62, 0.10, 1.00)` | .84 | chondrite cacbon trên đồ thị S22; màu "đã trộn đều" ở S40 |
| `GRAPH_AMBER` | `(1.00, 0.62, 0.04)` | .96 | Sao Hoả trên đồ thị oxy |
| `GRAPH_GREEN` | `(0.10, 1.00, 0.42)` | .84 | chondrite thường trên đồ thị; **tia laser** (532 nm xanh lục) S44–S45 |
| `ROOM_WARM` | `(1.00, 0.66, 0.30)` | .46 | đèn đường, ánh trong nhà hắt ra hiên; cố ý gần trắng ấm |
| `H_WHITE` | `(0.90, 0.94, 1.00)` | .03 | proton, hạt bay hơi, Vesta trên đồ thị; cố ý gần trắng |
| `ROCK_GREY` | `(0.34, 0.33, 0.32)` | .02 | vật đá đi lạc S07/S17, san hô, gạch chéo; cố ý trung tính |
| **`MOON_GREY`** (mới) | `(0.62, 0.61, 0.58)` | ~.05 | chấm Mặt Trăng trên đồ thị S23; **cố ý trung tính** — Mặt Trăng thật gần như không có sắc, đừng ám xanh |
| **`FE_METAL`** (mới) | `(0.55, 0.50, 0.45)` | ~.15 | lõi sắt (S12, S13, S18, S33); sắc thật đến từ ánh kim của env map (`HFA.buildEnvironment`), roughness 0.35, metalness 0.9 — KHÔNG phải từ màu base |
| **`MAGMA_DIM`** (mới) | `(0.50, 0.06, 0.01)` | ~.95 | đĩa đã nguội cuối S34, Mặt Trăng mới kết S35–S36; là EMBER giảm cường độ, giữ tỉ lệ kênh |

Ba màu mới đều tuân quy tắc tỉ lệ kênh; MOON_GREY và FE_METAL trung tính là **chủ ý**, không phải lỗi.
Cần màu khác thì chạy `HFA.saturationAfterACES` trước, `after < 0.3` thì bỏ.

**CẤM:** lam nhạt bệch `(0.55,0.72,1.00)`, lavender `(0.42,0.60,1.05)`, cam-kem `(1.00,0.72,0.38)` —
đã đo ra xám. Riêng tập này thêm: **KHÔNG tô Mặt Trăng ám lam "cho lạnh"** — nó trắng xám dưới ánh
Mặt Trời; cảm giác lạnh đến từ NỀN đêm và kích thước nhỏ, không từ màu của nó.

## 2. Bảng emissive — bloom HDR ngưỡng 1.0

| Loại phần tử | emissive | ghi chú |
|---|---|---|
| Chữ, nhãn, trục đồ thị, ô bảng | **0.70–0.78** | DƯỚI 1.0. Rõ hơn thì tăng nét lên 4px, không tăng emissive |
| Mặt Trăng (bề mặt, mọi cỡ) | 0.0 | **không phát sáng**, chỉ nhận key; ⚠ ở cỡ 24px trên hiên KHÔNG bloom — nó phải chìm như đèn đường |
| Đèn đường S02/S43 | 1.1 | được phép bloom nhẹ, cố ý lấn Mặt Trăng |
| Khe nứt Trái Đất non / Theia | 1.2 | chỉ trong khe, ≤6% khung |
| Điểm va chạm S31 | 1.6 trong ~2s | bloom mạnh, sau đó về 1.2 |
| Đĩa đá bốc hơi vùng trong S32 | 1.2 → 0.5 | nguội dần theo t ở S34 |
| Mặt Trăng đỏ S37 | 1.0 | đỏ bão hoà, KHÔNG đẩy lên cam-trắng; diện tích lớn nên phải giữ dưới ngưỡng |
| Xung laser S45 | 1.3 | hạt nhỏ, bloom được vì diện tích tí hon |
| Chấm trùng S23 lúc chạm | 1.4 trong 3 frame → 0.9 | như liên kết H₂O ở tập nước |
| Starfield | 0.60–0.80 | không bloom, sao 1–2px |
| Mặt Trời ở S29/S49 | 2.0 | điểm nhỏ ở mép, bloom được |
| Lõi FE_METAL | 0.0 | ánh kim từ env, không tự phát sáng |

## 3. Chống cháy trắng — tập này rủi ro ở CHƯƠNG 3, không phải chương tối
- **Không shot nào để quá 12% diện tích khung có luminance >0.85 sau tonemap.**
- **S30** (Theia phủ kín trời): chỉ vượt ngưỡng ở 1 frame cuối trước khi cắt; các giây trước giữ Theia
  ở đá tối có khe sáng.
- **S31** (va chạm): điểm sáng gói trong vành hẹp; hai thân hành tinh phần lớn vẫn tối.
- **S32–S34** (đĩa): vùng nóng là dải mỏng ở trong; ≥60% khung là nền đen + rìa đĩa đỏ tối.
- **S37** (Mặt Trăng đỏ 330px): đây là vật thể sáng LỚN NHẤT tập. Giữ EMBER emissive 1.0 với mảng vỏ
  đen chiếm ~35% đĩa; kiểm tra luminance trung bình của đĩa ≤0.7.
- **S40** (khối hơi): dùng volume alpha thấp, clamp alpha tích luỹ; tâm DISK_HOT ≤8% khung.
- Nền đồ thị (S16, S21–S24, S26, S39, S42, S48) là **đen PHẲNG tuyệt đối**, không sao, không nebula.

## 4. Chữ tiếng Việt trên hình — LỖI ĐÃ XẢY RA, đọc kỹ
- **Mọi nhãn CÓ DẤU.** "Biển Tĩnh Lặng", "Sao Hoả", "gần như chắc chắn", "khủng hoảng đồng vị". Không có
  ngoại lệ, kể cả nhãn trong WebGL vẽ bằng canvas texture.
- Canvas nhãn dùng `HFA.canvasHeightForText(fontPx, lines, hpx)` — ngưỡng `hpx ≥ fpx × 2.4 × số dòng`.
  Ngưỡng 2.0 KHÔNG đủ, dấu bị cắt (tập quasar mất dấu 72/121 nhãn). Nới canvas thì tỉ lệ plane phải
  tính theo chiều cao THẬT, và `glyphFrac` chia cho hệ số nở.
- Chữ **≥26px trên 1080p** đo trên frame render. `HFA.estimatePx` đo plane chứ không đo glyph; truyền
  `glyphFrac` 0.55–0.68 hoặc đo thật. Shot nhiều chữ nhất: S20 (6 điểm hạ cánh), S22 (đồ thị), S44
  (5 gương), S48 (hai vòng năm) — tính trước camera cho các shot này.
- Chỉ số trên/dưới (¹⁶O, δ¹⁷O, R⊕, cm³) dùng ký tự Unicode, font hệ thống hiển thị được.

## 5. Quy ước thiên văn bắt buộc của tập
- **Mặt Trăng:** `moonmap1k.jpg`, mặt gần (kinh độ 0) luôn hướng về Trái Đất (khoá thuỷ triều — trong
  mọi shot có cả hai, Mặt Trăng KHÔNG tự quay so với Trái Đất). Nhìn từ hiên (Bắc bán cầu thấp): Biển
  Mưa trên-trái, Biển Tĩnh Lặng phải, Tycho dưới. Pha thống nhất cả tập: khuyết lồi ~88%, sáng bên
  PHẢI. Bề mặt không phát sáng, không ám lam. Kích thước góc thật **0,52°** → 24–28px trên 35mm 1080p;
  ở 24mm còn ~17px. ĐỪNG vẽ to hơn "cho dễ thấy" ở các shot hiên nhà — điểm nhỏ là nội dung.
- **Trái Đất hôm nay:** `2_no_clouds_4k.jpg` + `earthcloudmap.jpg` (lớp mây riêng, quay chậm hơn 2%)
  + `elev_bump_4k.jpg` + `water_4k.png` specular. Trục nghiêng **23,4°**, tự quay **ngược chiều kim
  đồng hồ nhìn từ cực Bắc**, terminator sắc nét.
- **Trái Đất non và Theia:** KHÔNG dùng texture NASA. Procedural: basalt đen + khe EMBER + hồ magma,
  không mây trắng, không đại dương, không xanh. Theia đường kính **0,53 Trái Đất** (cỡ Sao Hoả), khối
  lượng 1/10. Khe nứt thưa hơn Trái Đất non để phân biệt.
- **Tỉ lệ đường kính:** Mặt Trăng / Trái Đất = **0,273** (3 474 / 12 742 km). Ghi "≈ 1/4" theo kịch bản.
- **Khoảng cách:** hôm nay **60 R⊕ = 384 000 km**; lúc kết **3 R⊕ ≈ 19–20 000 km**; tỉ số ≈ 20.
  Shot nào nén khoảng cách để lọt khung (S06, S46, S49) phải ghi chú "khoảng cách không theo tỉ lệ".
  Shot **S45 là tỉ lệ THẬT** (Trái Đất 24px, Mặt Trăng 7px, cách 1 450px) — đó là toàn bộ nội dung.
- **Mặt Trăng non trên trời (S37):** đường kính góc 10–12° (~20× hôm nay), mọc ĐÔNG lặn TÂY (Trái Đất
  quay 5h nhanh hơn Mặt Trăng đi vòng ~7h ở 3 R⊕), bề mặt magma đang đóng vỏ, KHÔNG biển tối, KHÔNG
  hố lớn. Nắm tay giơ thẳng cánh tay ≈ 10°: silhouette nắm tay che vừa khít.
- **Lõi:** bán kính lõi / bán kính hành tinh: Sao Thuỷ 0,85 · Trái Đất 0,55 · Sao Hoả 0,53 · Mặt Trăng
  **0,20** (~350 km). Khối lượng lõi: Trái Đất ~1/3, Mặt Trăng 1–3%. Mật độ 5,51 / 3,34 g/cm³ (≈ 6/10).
- **Sao Hoả và vệ tinh:** Phobos 27×22×18 km ở 2,76 R♂, chu kỳ 7,7h (NHANH hơn Sao Hoả tự quay 24,6h
  → trong khung Phobos trôi rõ); Deimos 15×12×11 km ở 6,9 R♂, 30,3h. Cả hai trong mặt phẳng xích đạo,
  thuận chiều. Ở cỡ Sao Hoả 560px: Phobos 2px, Deimos 1px — đúng, đó là điểm nhấn của S05.
- **Đồ thị ba đồng vị oxy (S22–S24, S39):** trục δ¹⁸O ngang, δ¹⁷O dọc, đường Trái Đất dốc **0,52** qua
  gốc; các thiên thể khác là đường **song song** lệch theo Δ¹⁷O: Sao Hoả +0,3‰; chondrite thường
  +0,7…+1,2‰; chondrite cacbon −2…−5‰ (dải rộng); Vesta −0,25‰. Mặt Trăng: hai kết quả **+12 ± 3 ppm**
  và **0 ± 5 ppm** — chỉ tách được khi đổi thang sang phần triệu (S24); ở thang ‰ chúng là MỘT chấm.
  Thanh sai số bắt buộc trên mọi mốc.
- **Đồng vị oxy:** ¹⁶O 99,76% · ¹⁷O 0,04% · ¹⁸O 0,20%. Hạt nhân 8p + 8/9/10n. Electron là đám mây mờ,
  không Bohr.
- **Apollo:** sáu điểm hạ cánh (11, 12, 14, 15, 16, 17) đều ở mặt gần; tổng 382 kg. Gương phản xạ:
  Apollo 11, 14, 15 + Lunokhod 1 (Biển Mưa), Lunokhod 2 (Le Monnier). Nguyên lý lăng kính góc: ba mặt
  vuông góc, tia phản xạ đúng 3 lần, ra song song ngược chiều tia vào — vẽ đúng 3 lần bật, không 2.
- **Laser:** 532 nm xanh lục (GRAPH_GREEN). Khứ hồi **2,56 s** (1,28 s mỗi chiều) — S45 chạy THỜI GIAN
  THẬT. Chùm loe tới vài km trên Mặt Trăng (vẽ nón alpha thấp). Mặt Trăng lùi **3,8 cm/năm**.
- **Thuỷ triều (S46):** nhìn từ cực Bắc, Trái Đất quay và Mặt Trăng đi vòng đều ngược kim đồng hồ;
  Trái Đất quay nhanh hơn rất nhiều (24h so với 27,3 ngày); bướu **lệch TRƯỚC** hướng Mặt Trăng ~3°
  theo chiều quay (vẽ ~8° để đọc, ghi chú phóng đại); lực từ bướu KÉO Mặt Trăng tiến → quỹ đạo nở;
  phản lực HÃM Trái Đất. Biên độ bướu phóng đại 6% bán kính, ghi chú.
- **Ngày:** 5h (sau va chạm) → ~22h (Devon, ~400 triệu năm, ~400 ngày/năm) → 24h (nay) → +2 ms/thế kỷ.
  Năm KHÔNG đổi độ dài — hai vòng năm ở S48 cùng đường kính.
- **Trục nghiêng (S49):** có Mặt Trăng: cố định 23,4°; không có: dao động hàng chục độ (biên độ vẽ
  10–60°, tổng 3 sin seeded).
- **Bề mặt Mặt Trăng (S19):** bóng đổ ĐEN TUYỆT ĐỐI (không khí quyển), chân trời cong gần, trời đen
  không sao khi phơi sáng cho bề mặt; Trái Đất đứng yên trên trời ở đường kính góc ~1,9° (≈3,7× Mặt
  Trăng nhìn từ Trái Đất).
- **Đĩa đá bốc hơi (S32–S34) ≠ đĩa tiền hành tinh (S41).** Đĩa đá: 1,5–5 R⊕, nóng, KHÔNG khe hở, KHÔNG
  băng, không phân tầng lạnh ở ngoài. Đĩa tiền hành tinh S41 mới theo quy ước tập nước (khe hở, phân
  tầng nhiệt, flaring, Kepler).
- **Mọi quỹ đạo và tự quay trong tập** đều ngược chiều kim đồng hồ nhìn từ cực Bắc (hoàng đạo hoặc
  hành tinh). Không ngoại lệ.

## 6. Motif lặp lại — khép vòng có chủ ý
Các cặp dưới đây **phải dựng cùng khung, cùng tiêu cự**:
- **S02 ↔ S25 ↔ S43 ↔ S51** — hiên nhà 35mm, Mặt Trăng 24–28px ở 1/3 trên-phải. S51 khác S02 đúng
  một chi tiết: đèn đường đã tắt.
- **S22 ↔ S23 ↔ S39** — đồ thị ba đồng vị, cùng trục, cùng vị trí điểm.
- **S10 → S11 → S14 → S16/S17/S18 → S26 → S33 → S34** — ba ô nhãn "Quá to / Quá nhẹ ở tâm / Bị nướng"
  là sợi chỉ đỏ của tập: hiện ở S10, điền dần tới S14, giữ mờ ở góc qua ba câu chuyện, lên bảng ở
  S26, hiện lại ở S33, được đánh dấu khớp ở S34. Cùng font, cùng vị trí góc trên-phải.
- **S32 ↔ S38** — đĩa đá bốc hơi thật ↔ cùng góc máy ở chế độ mô phỏng tô màu nguồn gốc.
- **S37 ↔ S43** — Mặt Trăng đỏ 330px ↔ bóng ma đỏ co lại thành 24px.
- **S28 ↔ S37** — cùng vị trí đứng trên Trái Đất non: trời trống ↔ trời có Mặt Trăng đỏ.
- **S07 ↔ S17** — quỹ đạo hyperbol không phanh được, dùng lại đúng nét chấm.

**Tránh lặp:** không dùng cú "pull-back từ cận ra xa" quá 3 lần (đã dùng S03→S04, S32, S36 — đủ). Không
lens flare. Không starfield làm nền đồ thị. Không tô Mặt Trăng ám lam. Không dùng vân tay pháp y cho
"dấu vân tay" (tập nước đã dùng ẩn dụ vân tay; tập này thay bằng thẻ nhãn đường chéo ở S25).

## 7. Tất định
Mọi chuyển động là **hàm thuần của `t`**. Không `requestAnimationFrame`, `Date.now`, `performance.now`,
`setTimeout`, `Math.random`. Cần ngẫu nhiên (hạt văng S31, hạt bay hơi S34, lịch gom mảnh S35, trường
xoáy S40, lắc trục S49) → **`HFA.mulberry32` với seed riêng từng cụm**. Lịch gom 300 mảnh ở S35 tính
TRƯỚC thành bảng (mảnh i nhập vào mảnh j tại thời điểm t_k), không mô phỏng lực. Không tích luỹ `+= dt`.
Bán kính starfield phải lớn hơn khoảng cách camera xa nhất (S36 lùi tới 60 R⊕, S45 khung 1 450px):
truyền `maxCamDist` cho `HFA.buildStars`.
