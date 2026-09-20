<!-- STORYBOARD METADATA
Dự án: NGUYÊN TỐ ĐẦU TIÊN — Hai mươi phút đã quyết định toàn bộ vũ trụ
Slug: nguyen-to-dau-tien
Nguồn: projects/nguyen-to-dau-tien/script.md (3120 từ · 109 cue C01→C109 · 4 chương)
Nhãn chương: C01 (CH1) · C20 (CH2) · C50 (CH3) · C80 (CH4)

TỔNG THỜI LƯỢNG DỰ KIẾN (intent): ~17:20 (~1040s).
  * Con số giây chỉ để căn nhịp. Thời lượng CHUẨN đến từ timing.json (khâu voice).
  * Mỗi shot neo vào MÃ CUE — visual-builder khớp theo cue, KHÔNG theo giây tuyệt đối.

TỔNG SỐ SHOT: 60 (S01→S60) — trung bình ~17s/shot.
TỔNG SỐ CUE BAO PHỦ: 109 (C01→C109) — liên tục, không sót, không chồng lấn.
  CH1 C01–C19 → S01–S11 (11 shot)
  CH2 C20–C49 → S12–S26 (15 shot)
  CH3 C50–C79 → S27–S44 (18 shot)
  CH4 C80–C109 → S45–S60 (16 shot)

LOẠI VISUAL THEO CHƯƠNG (bám METADATA kịch bản):
  CH1  particle mật độ CỰC CAO (≥120k điểm) + procedural plasma volumetric.
       TUYỆT ĐỐI KHÔNG VẬT THỂ RẮN, không hành tinh, không sao, không mesh có bề mặt.
       Ở nhiệt độ này chưa có gì bền tồn tại — chỉ hạt rời và trường phát sáng.
  CH2  particle HAI MÀU (proton/neutron, quy ước ở cuối file) + graph
       (đường tỉ số n/p trượt 1/6 → 1/7, đường phân rã neutron, đồng hồ đếm ngược).
  CH3  particle phản ứng dây chuyền bùng nổ + graph THANG SỐ KHỐI A=1→8
       với HAI BẬC VỠ (A=5 và A=8) vẽ bằng nét đứt trên không khí.
  CH4  graph cột 75/25 → astro-realistic (mây hydro nguyên thuỷ, sao đầu tiên,
       thiên hà, hành tinh, biển, mưa) → macro nước và hơi thở.

CAO TRÀO HÌNH (không được gộp, mỗi cái một shot riêng):
  C08  vũ trụ ĐỤC — photon bật ngược sau quãng cực ngắn (S05)
  C33  tỉ số trượt 1/6 → 1/7 (S18)
  C40  hai viên gạch giữa sân vận động một tỉ người ném đá (S22)
  C63/C64/C65  leo thang → với tay bậc 5 → chân xuyên qua, rơi lại bậc 4 (S34/S35/S36)
  C69–C70  hai bậc bị rút khỏi thang, "tai nạn của tự nhiên" (S39)
  C90  nhìn kỹ MỘT nguyên tử hydro (S50)
  C93  hành trình 13,8 tỉ năm: mây lạnh → hành tinh → biển → mưa → cơ thể sống (S52)
  C106 hơi thở (S58)

NHẠC NỀN: một track chung `assets/bgm.mp3` cho cả tập (không ghi lại ở từng shot).
  Đường cong volume gợi ý: CH1 dày/trầm → CH2 mỏng dần nhường tiếng tick →
  CH3 dâng ở C50–C58 rồi hụt ở C60 → CH4 trong, loãng, tắt dần về 0 ở C109.
  Chỉ shot nào THẬT SỰ cần hiệu ứng riêng mới có dòng SFX.

PHONG CÁCH: nhiệt độ giảm dần XUYÊN SUỐT TẬP là trục thẩm mỹ chính — người xem phải
  CẢM được vũ trụ đang nguội (trắng-xanh nung → cam/vàng → lam lạnh). Xem "GHI CHÚ
  DỰNG HÌNH" cuối file để lấy mã màu, quy ước hạt và ngưỡng bloom HDR.
-->

# STORYBOARD — NGUYÊN TỐ ĐẦU TIÊN

> Timecode là DỰ KIẾN. Neo mỗi shot vào **cue**; visual-builder khớp theo `timing.json` thật.
> Phụ đề KHÔNG chép ở đây — sinh tự động từ `voice/*.srt` bằng `scripts/gen-captions.mjs`.

---

# CHƯƠNG 1 — NƠI KHÔNG GÌ TỒN TẠI NỔI (C01–C19 · S01–S11)

## S01 · C01–C02 · CHƯƠNG 1
SCENE   Mở màn từ đen tuyệt đối. Một điểm trắng-xanh nở ra thành trường plasma đặc quánh
        lấp kín khung — không tâm, không rìa, không chân trời. Người xem bị THẢ VÀO giữa nó.
CAMERA  đứng yên 1.5s trên nền đen, rồi zoom-out cực chậm (85mm → 24mm) để lộ ra rằng
        trường plasma không có mép; nhích rung rất khẽ, tần số cao, biên độ < 2px
ELEMENT trường hạt ~140k điểm, mật độ đồng đều đến mức phi lý (biến thiên < 1%) — đây là
        đặc tính vật lý phải thấy được: vũ trụ t=1s ĐỒNG NHẤT; màu trắng-xanh nung #EAF2FF
        lõi, #9FC8FF rìa, emissive 1.8 (trên ngưỡng bloom HDR 1.0); noise FBM 3 octave
        chạy như hàm thuần của t, tốc độ cao, KHÔNG cuộn xoáy lớn (chưa có cấu trúc);
        không mesh, không bề mặt, không bóng đổ
CUT     mở bằng fade-in từ đen; nối S02 bằng dâng sáng liên tục, không cắt

## S02 · C03–C04 · CHƯƠNG 1
SCENE   Bản kiểm kê phủ định: bốn ảnh chờ (sao / hành tinh / hạt bụi / một nguyên tử) hiện
        lên dạng phác thảo mảnh rồi bị chính plasma đốt tan ngay khi vừa thành hình
CAMERA  giữ khung rộng tĩnh; mỗi lần một ảnh chờ tan, khung push-in 3% rồi trả về
ELEMENT bốn hình wireframe mảnh (nét 1px, #6E7A8A, alpha 0.35 — KHÔNG phải mesh đặc, chỉ
        là ý niệm): đĩa sao, cầu hành tinh, hạt bụi bất định, mô hình nguyên tử; mỗi hình
        chỉ sống ~0.6s rồi bị các hạt plasma xuyên qua và xoá theo kiểu dissolve từ tâm;
        nền: nhiệt độ toàn khung đẩy lên #FFFFFF ở lõi hạt — đây là mốc 10 tỉ độ, điểm
        NÓNG NHẤT của cả tập, mọi shot sau chỉ được lạnh dần
CUT     hoà tan sang S03 khi hình cuối (nguyên tử) tan hết

## S03 · C05–C06 · CHƯƠNG 1
SCENE   Một mẩu sắt bị thả vào lò — nhưng nó không chảy, không bốc hơi: nó bị THÁO TUNG
        theo bậc thang, tinh thể → nguyên tử → hạt nhân → mảnh → proton/neutron trần trụi
CAMERA  dolly-in nhanh theo mẩu sắt, 50mm, giữ nó ở tâm khung suốt quá trình rã;
        khi chỉ còn nucleon thì phanh gấp và giữ tĩnh
ELEMENT mẩu sắt: khối lập phương xám kim #7A7F86 (VẬT THỂ RẮN DUY NHẤT CỦA CHƯƠNG 1 —
        được phép vì nó tồn tại đúng 2 giây rồi bị huỷ, và đó chính là luận điểm);
        chuỗi rã 4 bậc, mỗi bậc ~0.5s: lưới tinh thể bung → electron #BFD9FF bị GIẬT ra
        trước (bay ra ngoài trước tiên, đúng thứ tự vật lý) → hạt nhân lộ ra → hạt nhân
        vỡ thành proton #FF5B2E và neutron #8FA3B8; kết shot: chỉ còn hai loại hạt trôi
CUT     giữ khung tĩnh 0.5s ở trạng thái "chỉ còn proton + neutron" rồi cắt cứng sang S04

## S04 · C07 · CHƯƠNG 1
SCENE   Luật của nơi này, minh hoạ bằng vòng lặp: bất kỳ thứ gì vừa ghép lại đều bị đập
        vỡ tức khắc. Không phải lò rèn — là máy nghiền.
CAMERA  tĩnh, khung vừa (35mm), hơi ngửa lên như nhìn vào trần lò
ELEMENT 6–8 cặp hạt cùng lúc thử dính vào nhau ở các vị trí khác nhau trong khung; mỗi
        cặp vừa hình thành mối nối mảnh thì một vệt photon #FFF3C4 lao tới xé đôi trong
        < 0.2s; nhịp lặp bất đối xứng (dùng seeded PRNG, không Math.random) để cảm giác
        LOẠN chứ không có tiết tấu; hậu cảnh plasma giữ trắng-xanh, chưa nguội
SFX     va đập khô, dày, không nhịp — như mưa đá vào tấm kim loại
CUT     cắt cứng sang S05 ngay giữa một cú vỡ

## S05 · C08 · CHƯƠNG 1 · ★ CAO TRÀO HÌNH
SCENE   VŨ TRỤ ĐỤC. Ta bám theo MỘT photon: nó lao đi một quãng cực ngắn rồi đâm vào một
        electron tự do và bị bắn ngược lại. Rồi lại thế. Ánh sáng bị giam tại chỗ.
CAMERA  bắt đầu cận cảnh bám sát photon (tracking shot, 85mm), sau 3 cú nảy thì pull-back
        rất chậm ra khung cực rộng để lộ toàn bộ trường sương phát sáng — không thấy xa
        được quá vài chục pixel, không có chân trời, không có "bầu trời"
ELEMENT photon chủ thể = vệt sáng #FFF3C4 emissive 2.4, có đuôi motion-trail ngắn; quỹ đạo
        là ĐƯỜNG GẤP KHÚC ZIC-ZAC dày đặc, mỗi đoạn thẳng chỉ dài ~2% chiều rộng khung
        (quãng đường tự do trung bình cực ngắn — chi tiết vật lý load-bearing); mỗi điểm
        gấp có một electron #BFD9FF nhấp nháy; vẽ CHỒNG thêm ~400 quỹ đạo zic-zac khác
        alpha thấp để thấy TOÀN BỘ ánh sáng đều bị nhốt; toàn khung phủ một lớp sương
        volumetric tự phát sáng #C9DCFF, độ đục cao, KHÔNG có tia sáng nào đi thẳng quá
        1/10 khung; tuyệt đối không có điểm sáng xa, không có sao nền
SFX     âm bí lại như bị bịt kín, cắt hết reverb đuôi dài
CUT     giữ khung sương đục 1s ở cuối rồi hoà tan sang S06

## S06 · C09–C10 · CHƯƠNG 1
SCENE   Đám đông: đếm dân số của vũ trụ sơ khai. Proton, neutron, electron — rồi photon
        đổ vào lấp kín khung với tỉ lệ một tỉ trên một hạt vật chất.
CAMERA  tĩnh, khung rộng; ở nửa sau shot, zoom-out từng nấc (3 nấc rời) mỗi lần nhân mật
        độ photon lên ×10 để cảm giác con số nổ ra ngoài tầm nắm
ELEMENT ba lớp hiện lần lượt, mỗi lớp có nhãn nhỏ mảnh: proton #FF5B2E (~200 hạt),
        neutron #8FA3B8 (~35 hạt — đã ít hơn rõ rệt, gieo trước ý "neutron hiếm"),
        electron #BFD9FF (~200); rồi photon #FFF3C4 tràn vào dạng vệt streak (không phải
        chấm tròn) cho tới khi che gần hết hai lớp kia — kết shot chỉ còn thấy lác đác
        vài chấm cam của proton lộ ra giữa biển sáng; góc khung một graph siêu gọn:
        thanh tỉ lệ 1 : 1.000.000.000 (một vạch cam tí hon cạnh một dải sáng tràn mép)
CUT     photon dồn về tâm rồi tắt đột ngột — cắt sang S07 trên nền tối hơn 1 nấc

## S07 · C11–C12 · CHƯƠNG 1
SCENE   Câu hỏi được đặt ra. Rồi câu trả lời quen thuộc hiện lên: "chúng ta là tro tàn của
        sao" — hình một ngôi sao thật đang phun vật chất — đẹp, và đúng MỘT PHẦN.
CAMERA  cắt sang khung rộng tĩnh, sau đó orbit chậm 10° quanh ngôi sao đang chết
ELEMENT LẦN ĐẦU trong tập được phép có vật thể astro-realistic — đây là hình TƯỞNG TƯỢNG
        (khung nhớ), phân biệt bằng viền vignette lạnh và giảm bão hoà 20%: một sao khối
        lượng lớn giai đoạn cuối, vỏ khí phun ra dạng vỏ cầu bất đối xứng, màu cam-vàng
        #FFB347 → #FF7A2B; các nguyên tố nặng bay ra dưới dạng đốm sáng có ký hiệu mảnh
        C, O, Fe; ở góc khung, một chữ nhỏ mảnh "đúng một phần" hiện rồi mờ
CUT     hình ngôi sao co lại thành một chấm sáng, chấm đó biến thành nguyên tử ở S08

## S08 · C13–C14 · CHƯƠNG 1
SCENE   Kiểm đếm cơ thể người theo SỐ NGUYÊN TỬ: một silhouette người bằng hạt, và 6 trên
        10 hạt trong đó sáng lên màu hydro
CAMERA  đứng yên, khung dọc-trung; cuối shot push-in nhẹ vào vùng ngực
ELEMENT silhouette người dựng bằng ~30k hạt trên nền tối #0A0E14; ba nhóm hiện trước:
        cacbon #6E7A8A, oxy #5FC8E8, sắt #FF6A2B — rồi TẤT CẢ mờ đi và 60% số hạt bật
        sáng thành hydro trắng-lam #DCE9FF emissive 1.6; graph tối giản bên phải: 10 ô
        vuông, 6 ô sáng hydro; KHÔNG dùng chữ số lớn, chỉ ô và màu
CUT     giữ silhouette, chuyển ngay sang S09 bằng cách đổi thang đo (không cắt hình người)

## S09 · C15–C16 · CHƯƠNG 1
SCENE   Cùng một cơ thể, hai cách đếm: theo ĐẦU NGƯỜI hydro áp đảo, theo CÂN NẶNG oxy và
        cacbon chiếm phần lớn. Rồi khẳng định: hydro này không đến từ ngôi sao nào.
CAMERA  tĩnh; split nhẹ trong khung (không kẻ vạch chia — dùng hai cụm graph rời)
ELEMENT hai thanh graph cạnh silhouette: thanh "SỐ LƯỢNG" hydro chiếm ~62%, thanh "KHỐI
        LƯỢNG" oxy #5FC8E8 ~65% + cacbon #6E7A8A ~18% + hydro chỉ còn một lát mỏng ~10%;
        chuyển giữa hai thanh bằng morph mượt để thấy rõ ĐẢO NGƯỢC; nửa sau shot: hình
        ngôi sao ở S07 quay lại rất mờ phía sau rồi bị một lớp kính lam #3E6FA8 chặn
        lại — các hạt hydro KHÔNG đi qua ngôi sao đó (thị giác hoá "chưa từng chạm vào")
CUT     ngôi sao mờ hẳn về đen; hạt hydro còn lại trôi ngược về plasma của S10

## S10 · C17–C18 · CHƯƠNG 1
SCENE   ĐỒNG HỒ HAI MƯƠI PHÚT xuất hiện lần đầu — motif sẽ theo suốt tập. Vòng cung thời
        gian 0→20 phút vẽ trên nền plasma, so với dải 13,8 tỉ năm dài vô tận bên cạnh.
CAMERA  push-in chậm vào vòng cung đồng hồ, 35mm → 60mm
ELEMENT vòng cung mảnh #FFD65A, nét 2px, chia vạch 0 / 3 / 10 / 20 phút (mốc 3 và 20 sẽ
        được dùng lại ở CH3 — phải đặt đúng vị trí ngay từ đây); bên dưới, một dải ngang
        biểu diễn 13,8 tỉ năm kéo dài tràn ra ngoài hai mép khung, trong đó 20 phút chỉ
        là một vạch mảnh gần như vô hình ở đầu trái; nền plasma đã nguội một nấc:
        #EAF2FF → pha thêm #FFE9C0 ở rìa
CUT     vòng cung giữ sáng; hoà tan nền sang S11

## S11 · C19 · CHƯƠNG 1
SCENE   Đặt bài toán của cả tập bằng ba biểu tượng cùng khung: CÁNH CỬA khoá, ĐỒNG HỒ đếm
        ngược, và KHO NEUTRON đang vơi
CAMERA  lùi chậm ra khung rộng để ba biểu tượng cùng lọt khung, kết ở bố cục ba điểm
ELEMENT (1) cánh cửa: KHÔNG vẽ cửa gỗ — vẽ một KHE SÁNG dọc bị hai khối tối ép kín, viền
        khe #FFD65A, có ổ khoá là một cụm photon xoáy chặn ngay khe; (2) đồng hồ: vòng
        cung S10 nay có kim chạy ngược; (3) kho neutron: một cụm ~120 chấm #8FA3B8 lơ
        lửng, thỉnh thoảng một chấm chớp rồi biến mất (gieo trước phân rã); drone nền
        loãng ra, khung tối hơn 15% so với S10
CUT     ba biểu tượng mờ về đen; mở chương 2 bằng tiếng tick đầu tiên trên nền đen

---

# CHƯƠNG 2 — ĐỒNG HỒ ĐẾM NGƯỢC (C20–C49 · S12–S26)

## S12 · C20–C21 · CHƯƠNG 2
SCENE   Nhìn kỹ hai loại hạt: MỘT proton và MỘT neutron nổi cận cảnh, tách khỏi đám đông.
        Rồi thử ghép: proton một mình chỉ ra hydro; muốn nặng hơn, phải có cả hai.
CAMERA  cận cảnh macro hai hạt (100mm, DOF nông), orbit 30° quanh trục dọc giữa hai hạt
ELEMENT proton #FF5B2E, bề mặt nhiễu động nhẹ, quầng điện dương mảnh #FFB347 dạng vòng
        gợn hướng RA NGOÀI; neutron #8FA3B8, KHÔNG quầng, kích thước lớn hơn proton 3%
        (phóng đại có chủ đích của chênh lệch khối lượng thật ~0,1%); hậu cảnh plasma
        bokeh, đã nguội thấy rõ (#FFE9C0 lấn dần #EAF2FF); phía dưới: một dãy proton đơn
        lẻ = một dãy nguyên tử hydro giống hệt nhau, đơn điệu, không leo lên được gì
SFX     tick đơn độc, rất khẽ, bắt đầu từ đây và chạy liên tục tới C58
CUT     hoà tan; giữ nguyên vị trí hai hạt sang S13

## S13 · C22–C23 · CHƯƠNG 2
SCENE   Neutron hiếm, và ngày càng hiếm hơn. Rồi lùi ra để thấy cuộc HOÁN ĐỔI không dứt:
        neutron ↔ proton đổi màu qua lại liên tục ở nhiệt độ cực cao.
CAMERA  pull-back từ macro ra khung vừa; sau đó tĩnh để mắt bắt được nhịp hoán đổi
ELEMENT trường ~500 hạt, tỉ lệ mở đầu gần 1:1; các hạt ĐỔI MÀU qua lại #FF5B2E ↔ #8FA3B8
        với nhịp nhanh, mỗi lần đổi kèm một chấm neutrino #7B4BFF mờ bay ra và một
        electron/positron #BFD9FF — chi tiết đúng: hoán đổi qua tương tác yếu, luôn có
        hạt lepton đi kèm; tốc độ đổi phải là hàm thuần của t, gieo bằng mulberry32
CUT     nhịp hoán đổi bắt đầu chậm lại — dẫn thẳng vào S14

## S14 · C24–C25 · CHƯƠNG 2
SCENE   Vì sao cán cân nghiêng: neutron NẶNG hơn proton một chút. Cân hai đĩa, và khi
        nhiệt độ tụt, đĩa neutron ngày càng khó nâng lên.
CAMERA  cắt sang khung graph phẳng, chính diện, tĩnh; cuối shot đẩy nhẹ vào điểm cân
ELEMENT cân hai đĩa tối giản nét mảnh #FFD65A: đĩa trái proton #FF5B2E, đĩa phải neutron
        #8FA3B8 nghiêng xuống rất ít (chênh ~0,1% — hiển thị bằng góc nghiêng 2°, kèm
        một lát cắt phóng đại ×500 bên cạnh để nhìn thấy được); đồng thời một thanh
        nhiệt độ dọc bên phải tụt dần, và mỗi nấc tụt thì góc nghiêng lại tăng; bảng màu
        toàn khung dịch một nấc từ trắng-xanh sang cam-vàng #FFB347 = vũ trụ đang nguội
CUT     cân đang nghiêng thì đứng khựng — cắt cứng sang S15

## S15 · C26–C27 · CHƯƠNG 2
SCENE   ĐÓNG BĂNG (freeze-out). Vũ trụ giãn quá nhanh, các hạt không kịp gặp nhau, cuộc
        mặc cả ngừng giữa chừng, tỉ số bị khoá cứng tại chỗ.
CAMERA  tĩnh tuyệt đối; đúng khoảnh khắc khoá, khung giật một nhịp rất nhỏ (2 frame) rồi
        đứng im — không zoom, không pan, để cảm giác "mọi thứ dừng"
ELEMENT trường hạt của S13 giãn ra: khoảng cách giữa các hạt tăng đều theo hàm giãn nở
        (scale factor tăng, KHÔNG phải hạt bay tán loạn) → số lần gặp nhau giảm dần thấy
        rõ; các tia hoán đổi thưa dần rồi TẮT HẲN; ngay khi tắt, một khung viền băng
        #BFD9FF chạy quanh mép khung như đóng băng, và toàn bộ hạt ngừng đổi màu vĩnh
        viễn; hạt vẫn trôi, chỉ MÀU là bị khoá
SFX     một tiếng "clack" khô, dứt khoát, đúng frame khoá
CUT     giữ tĩnh nửa giây; đếm hạt sang S16

## S16 · C28–C29 · CHƯƠNG 2
SCENE   Con số được chốt: sáu proton cho một neutron. Đây là toàn bộ ngân sách, không bao
        giờ được cấp thêm.
CAMERA  tĩnh, chính diện; nhích push-in 4% khi ô "khoá ngân sách" đóng lại
ELEMENT graph đếm trực tiếp: 42 hạt xếp lưới 7×6 — 36 proton #FF5B2E và 6 neutron
        #8FA3B8 tự động gom lại thành 6 cụm "6 cam + 1 xám" để mắt đọc được tỉ số mà
        không cần chữ; bên cạnh, một thanh KHO NEUTRON đóng khung, phía trên có ký hiệu
        khoá — cửa nạp của kho bị bịt kín, chỉ còn cửa xả; nền đã ngả cam #FF9E52
CUT     giữ 1.5s (khớp gap), rồi cắt sang S17 khi tiếng tick to lên

## S17 · C30–C32 · CHƯƠNG 2
SCENE   Sự tàn nhẫn: neutron TRONG hạt nhân thì gần như bất tử, neutron TRÔI TỰ DO thì tự
        vỡ thành proton + electron + phản neutrino. Chu kỳ bán rã mười phút.
CAMERA  split thực trong không gian 3D: bên trái một neutron nằm trong hạt nhân (tĩnh,
        an toàn), bên phải một neutron trôi trần trụi; camera lia chậm từ trái sang phải
        rồi ở lại bên phải xem nó vỡ
ELEMENT trái: cụm hạt nhân bọc neutron, có vành liên kết #FFD65A chắc, hạt bên trong
        rung rất khẽ, KHÔNG rã; phải: neutron đơn độc #8FA3B8 rung mạnh dần rồi tách
        thành proton #FF5B2E + electron #BFD9FF + phản neutrino #7B4BFF mờ bay xuyên ra
        khỏi khung (neutrino phải đi thẳng, không tương tác với gì); rồi graph phân rã:
        đường cong e-mũ giảm, vạch mốc 10 phút chỉ đúng nửa cột; kho neutron S16 bắt đầu
        vơi đồng bộ với đường cong
SFX     tick to dần, rõ, hơi khó chịu
CUT     đường cong tiếp tục chạy — mang thẳng sang S18 không cắt

## S18 · C33 · CHƯƠNG 2 · ★ CAO TRÀO HÌNH
SCENE   PHÉP TÍNH: cửa chỉ mở ở phút thứ ba. Ba phút chờ trên một kho đang bốc hơi mười
        phút mất một nửa. Tỉ số trượt 1/6 → 1/7.
CAMERA  chính diện tuyệt đối trên mặt graph, tĩnh; kết shot mới push-in vào con số cuối
ELEMENT MỘT graph duy nhất, đọc được trong 3 giây: trục ngang thời gian 0→3 phút với
        vạch "CỬA MỞ" #FFD65A cắm ở mốc 3 phút; đường n/p xuất phát ở 1/6 và TRƯỢT
        XUỐNG đều đặn, kết ở 1/7 đúng chỗ chạm vạch cửa; song song, một cột kho neutron
        vơi dần; hai nhãn duy nhất: 1/6 ở đầu, 1/7 ở cuối, cùng cỡ, cùng #FFFFFF — không
        thêm chữ nào khác; chuyển động của đường phải LIÊN TỤC và CHẬM, không nhảy bậc,
        vì cảm giác "trượt" là toàn bộ điểm của shot
CUT     giữ khung graph đứng yên qua gap 1.0s; hoà tan chậm sang S19

## S19 · C34–C35 · CHƯƠNG 2
SCENE   Đứng giữa biển lửa nhìn nguyên liệu chết dần — rồi bật ra giải pháp: nhốt chúng
        vào hạt nhân, nơi chúng bền vững mãi mãi.
CAMERA  cận cảnh trôi giữa các hạt (drift ngang chậm, 60mm), như đi bộ giữa đám đông
ELEMENT trường neutron thưa #8FA3B8; rải rác, từng hạt lặng lẽ chớp một cái rồi biến mất
        (không nổ, không tiếng — "bốc hơi khỏi kho" phải LẶNG); nửa sau shot: một cụm
        proton + neutron chạm nhau và một vành liên kết #FFD65A khép lại quanh chúng,
        hạt bên trong lập tức ngừng chớp — thị giác hoá "được cứu"
SFX     [Thì thầm] — kéo nền gần như im, chỉ còn tick
CUT     vành liên kết vừa khép thì cắt sang S20 cận cảnh nó

## S20 · C36–C37 · CHƯƠNG 2
SCENE   DEUTERIUM ra đời và được đặt tên: một proton + một neutron. Bậc thang đầu tiên —
        mọi con đường đi lên đều phải bước qua nó.
CAMERA  macro tĩnh trên hạt nhân deuterium; cuối shot pull-back để lộ thang số khối
ELEMENT deuterium: proton #FF5B2E và neutron #8FA3B8 dính nhau, mối nối là một dải sáng
        #FFD65A MẢNH và RUNG (liên kết yếu — chi tiết load-bearing, sẽ trả bài ở S21);
        emissive mối nối chỉ 1.1, vừa qua ngưỡng bloom, cố ý yếu hơn heli-4 sau này
        (1.9); pull-back lộ thang số khối A=1→8 dựng mờ phía sau, bậc A=2 sáng lên, các
        bậc trên còn tối — LẦN ĐẦU giới thiệu motif thang (sẽ là cao trào CH3)
CUT     hoà tan; giữ deuterium ở nguyên vị trí sang S21

## S21 · C38–C39 · CHƯƠNG 2
SCENE   Vừa hình thành đã bị xé toạc. Thủ phạm lộ diện: photon — một tỉ hạt cho mỗi hạt
        vật chất.
CAMERA  tĩnh macro trên deuterium, rồi rack-focus ra hậu cảnh để đám photon từ mờ thành rõ
ELEMENT vòng lặp 3 nhịp: deuterium khép mối nối → một vệt photon #FFF3C4 emissive 2.6 lao
        xéo vào → mối nối đứt, hai hạt văng ra hai phía; mỗi nhịp ngắn dần (0.9s → 0.5s →
        0.3s) để cảm giác không kịp thở; rack-focus cho thấy hậu cảnh KHÔNG phải bóng
        tối mà là một biển photon dày đặc đang chờ
SFX     tiếng chạm mềm rồi lập tức một tiếng nổ trắng xé nó ra
CUT     cắt cứng sang S22 ngay khi mối nối đứt lần thứ ba

## S22 · C40 · CHƯƠNG 2 · ★ CAO TRÀO HÌNH
SCENE   ẨN DỤ SÂN VẬN ĐỘNG: dựng một ngôi nhà bằng đúng HAI viên gạch, giữa một sân vận
        động có một tỉ người, tất cả đang ném đá.
CAMERA  mở ở cận cảnh hai viên gạch dưới sân, rồi CRANE-UP + pull-back liên tục không cắt
        lên cao, khán đài mở rộng ra vô tận vượt khỏi hình dạng sân vận động thật —
        kết ở khung cực rộng nhìn xuống, hai viên gạch chỉ còn 2 pixel
ELEMENT hai viên gạch = proton #FF5B2E + neutron #8FA3B8 ở tâm sân (giữ ĐÚNG bảng màu
        hạt, không đổi sang màu gạch — người xem phải nối được ẩn dụ với deuterium);
        khán đài dựng bằng ~200k điểm sáng #FFF3C4, xếp thành vòng bậc thang chồng lớp,
        khi crane lên thì nhân bản ra ngoài mép khung nhiều lần (cảm giác không đếm nổi);
        mưa đá = hàng nghìn vệt streak bay từ khán đài về tâm, mật độ tăng theo độ cao
        camera; ánh sáng chủ đạo cam-vàng nóng #FFB347 hắt từ khán đài xuống
CUT     lúc khung rộng nhất, đá phủ kín tâm sân — cắt cứng về macro deuterium ở S23

## S23 · C41–C42 · CHƯƠNG 2
SCENE   Vì sao chỉ cần một phần cực nhỏ trong một tỉ: liên kết deuterium rất yếu, và trong
        biển photon luôn có cái ĐUÔI năng lượng cao đủ sức đập vỡ nó
CAMERA  tĩnh trên graph phân bố; cuối shot lia ngang sang phần đuôi bên phải và giữ ở đó
ELEMENT graph phân bố năng lượng photon: một gò lớn quanh giá trị TRUNG BÌNH (mờ, xám
        #6E7A8A) và một ĐUÔI kéo dài về phải; vạch dọc #FFD65A đánh dấu ngưỡng phá vỡ
        deuterium nằm XA bên phải đỉnh gò; phần đuôi vượt vạch được tô sáng #FFF3C4 —
        diện tích tí hon nhưng KHÔNG bằng không, đó là toàn bộ vấn đề; bên cạnh, mối nối
        deuterium hiện dưới dạng một sợi mảnh có thang "độ bền" thấp; chỉ những photon
        lấy từ vùng đuôi mới bay ra và bẻ được sợi
CUT     vạch ngưỡng bắt đầu dịch — mang sang S24

## S24 · C43–C44 · CHƯƠNG 2
SCENE   Ngay cả khi vũ trụ đã nguội xuống dưới mức "lẽ ra an toàn", deuterium vẫn không
        sống nổi. Đặt tên cho nghịch lý: NÚT THẮT CỔ CHAI DEUTERIUM.
CAMERA  tĩnh trên graph, rồi hoà tan sang một hình cổ chai nhìn nghiêng, giữ tĩnh
ELEMENT nửa đầu: gò phân bố ở S23 dịch sang trái (nguội đi) nhưng cái đuôi vẫn còn vắt
        qua vạch ngưỡng — deuterium ở dưới vẫn tiếp tục vỡ; nửa sau: hình cổ chai dựng
        bằng chính dòng hạt — một dòng proton/neutron dày đặc dồn lên và bị NGHẼN ở đoạn
        cổ hẹp, chỉ vài hạt lọt qua rồi bị đánh bật trở lại; cổ chai vẽ bằng nét sáng
        #FFD65A, phần trên (heli và cao hơn) tối om
SFX     nền lặng đi để nổi tiếng tick
CUT     giữ hình cổ chai; chồng cánh cửa khoá của S11 lên nó ở S25

## S25 · C45–C46 · CHƯƠNG 2
SCENE   Nghịch lý gọn trong một khung: đủ nguyên liệu, đủ nhiệt, nhưng cửa bị khoá — khoá
        bởi CHÍNH ÁNH SÁNG của vũ trụ. Và đồng hồ neutron vẫn chạy.
CAMERA  khung rộng tĩnh, bố cục ba lớp chiều sâu (kho / cửa / đồng hồ), DOF chuyển focus
        lần lượt qua ba lớp
ELEMENT lớp gần: kho nguyên liệu đầy hạt, đang ép sát; lớp giữa: KHE CỬA của S11 nay
        thấy rõ ổ khoá là một cụm photon #FFF3C4 xoáy chặn — ánh sáng chính là cái khoá;
        lớp xa: vòng cung đồng hồ #FFD65A với kim vẫn chạy và cột kho neutron tụt thêm
        một nấc mỗi 10 phút mô phỏng; toàn khung nguội thêm: cam #FF9E52 chuyển sang
        cam trầm #C96A2E
CUT     focus dừng ở đồng hồ; hoà tan sang S26

## S26 · C47–C49 · CHƯƠNG 2
SCENE   Nghe được hai thứ cùng lúc: deuterium sinh-ra-rồi-vỡ hàng tỉ lần mỗi giây, và
        tiếng đếm ngược của neutron đang tan biến. Nêu kịch bản hỏng (vũ trụ chỉ còn
        hydro trơn). Rồi câu bản lề: vũ trụ vẫn giãn nở — và giãn nở nghĩa là NGUỘI ĐI.
CAMERA  khung rộng, drift lùi rất chậm và đều suốt shot (chính chuyển động giãn nở)
ELEMENT nửa đầu: toàn khung là hàng trăm cặp deuterium chớp-vỡ-chớp-vỡ đồng thời với tần
        số cao, xen kẽ những chấm neutron lặng lẽ tắt; nửa giữa (C48): khung tối lại,
        chỉ còn lác đác proton cam đơn độc trôi trong đen tuyệt đối — vũ trụ hydro trơn,
        không heli, KHÔNG có gì; nửa cuối (C49): sau 2s im lặng, khoảng cách giữa mọi
        hạt bắt đầu nở đều và bảng màu tụt một bậc lớn từ cam #C96A2E xuống đỏ trầm
        #8C3A22 — lần đầu người xem thấy vũ trụ nguội thành công thay vì bế tắc
CUT     [Im lặng 2s] trước C49; kết shot bằng nở-ra liên tục dẫn thẳng vào CH3

---

# CHƯƠNG 3 — HAI MƯƠI PHÚT (C50–C79 · S27–S44)

## S27 · C50–C51 · CHƯƠNG 3
SCENE   Ba phút sau Big Bang, nhiệt độ tụt dưới một tỉ độ. CÁNH CỬA MỞ — không từ từ,
        nó BẬT TUNG.
CAMERA  tĩnh trên khe cửa, rồi đúng frame cửa bật thì zoom-out giật một nhịp (whip-out)
        và ánh sáng tràn qua camera
ELEMENT thanh nhiệt độ bên trái tụt qua vạch một tỉ độ; ngay lúc đó cụm photon làm ổ khoá
        MẤT LỰC (emissive rơi từ 2.6 xuống 0.8 — dưới ngưỡng bloom, tắt loé); khe cửa
        bung ra thành một luồng sáng #FFD65A; dòng hạt bị nén ở S25 tràn qua thành vệt;
        bảng màu bật ngược lên nóng một nhịp rồi bắt đầu hành trình nguội thật sự
SFX     drone dâng có hướng như cỗ máy khởi động
CUT     ánh sáng phủ trắng khung (flash 2 frame) rồi mở ra ở S28

## S28 · C52–C53 · CHƯƠNG 3
SCENE   Vì sao bật tung chứ không mở từ từ: nguyên liệu đã xếp hàng sẵn ép sát cửa suốt
        thời gian bị khoá. Tất cả tràn qua cùng lúc → phản ứng dây chuyền.
CAMERA  tracking bay CÙNG dòng hạt qua cửa, tốc độ tăng dần; chuyển động chạy từ trái
        sang phải rồi bao trùm cả khung
ELEMENT dòng ~80k hạt nén ở phía trước cửa, mật độ cao nhất ngay sát khe; khi qua khe,
        các cặp bắt đầu dính lại thành deuterium và mối nối lần này KHÔNG bị bẻ (photon
        vẫn bay quanh nhưng emissive thấp, đi xuyên qua vô hại — chi tiết phải thấy);
        vệt chuyển động dài, motion-trail rõ; số phản ứng tăng theo hàm mũ của t
SFX     chuỗi va chạm dồn dập, tăng tốc, pan trái → phải rồi bao trùm
CUT     không cắt — tốc độ đẩy thẳng vào S29

## S29 · C54–C55 · CHƯƠNG 3
SCENE   Chuỗi phản ứng cụ thể: deuterium bắt thêm proton, deuterium va deuterium, các
        mảnh nhảy bậc — tất cả đổ dồn về một đích: HELI-4 (2 proton + 2 neutron).
CAMERA  khung vừa, orbit chậm quanh cụm phản ứng để thấy chiều sâu 3D của chuỗi
ELEMENT vẽ đúng ba nhánh, mỗi nhánh một đường sáng riêng: D + p → hạt nhân 3 hạt;
        D + D → 3 hạt + hạt bay ra; rồi hợp về He-4; He-4 dựng dạng TỨ DIỆN 4 hạt
        (2 proton #FF5B2E + 2 neutron #8FA3B8) khoá chặt, vành liên kết #FFD65A DÀY và
        ĐỨNG YÊN (đối lập trực tiếp với mối nối mảnh-rung của deuterium ở S20);
        emissive He-4 = 1.9, sáng nhất khung; hàng trăm phản ứng chạy song song ở hậu
        cảnh, tất cả vector đều hướng về cùng một đích
CUT     một hạt He-4 trôi vào tâm khung — giữ nó sang S30

## S30 · C56–C57 · CHƯƠNG 3
SCENE   Vì sao mọi thứ đổ về heli-4: nó là một CÁI HỐ SÂU trong địa hình năng lượng. Và
        neutron rơi vào đó thì từ đang-chết-dần bỗng trở nên bất tử.
CAMERA  từ cận cảnh He-4, pull-back và ngửa xuống thành góc 3/4 nhìn địa hình năng lượng
ELEMENT địa hình năng lượng dựng bằng mặt lưới #3E6FA8 nét mảnh: một mặt phẳng gợn nhẹ
        với MỘT hố sâu duy nhất tại A=4, dốc mọi phía đổ về nó; các hạt nhân nhẹ lăn
        xuống hố và không leo ra được; bên trong hố, các neutron #8FA3B8 NGỪNG CHỚP hẳn
        (trước đó cứ vài giây một hạt tắt) — thị giác hoá "bất tử"; cạnh khung, cột kho
        neutron ngừng tụt và đổi viền sang #FFD65A
CUT     mọi chuyển động chậm lại; hoà tan sang S31

## S31 · C58–C59 · CHƯƠNG 3
SCENE   Đồng hồ tắt. Cuộc đua kết thúc — vũ trụ đã kịp. Rồi khoảng chờ: "cái tiếp theo
        đâu?" — hình dung leo lên bảng tuần hoàn, heli → cacbon → oxy.
CAMERA  tĩnh hoàn toàn trong nửa đầu (khoảng lặng), rồi tilt-up chậm dọc theo một bảng
        tuần hoàn dựng đứng
ELEMENT nửa đầu: vòng cung đồng hồ #FFD65A dừng kim, các vạch mờ dần về xám, tiếng tick
        TẮT HẲN, khung giữ tĩnh qua gap 2.0s — đây là khoảng thở duy nhất của chương;
        nửa sau: một bảng tuần hoàn tối giản dựng đứng trong không gian, chỉ ô H và He
        sáng, camera ngửa lên theo hướng C → O → Fe với các ô còn TỐI, kèm một mũi tên
        kỳ vọng #FFD65A đi lên
CUT     mũi tên đang lên thì khựng — cắt cứng sang S32

## S32 · C60–C61 · CHƯƠNG 3
SCENE   Không có gì tiếp theo. Chuỗi phản ứng ĐÂM SẦM vào một bức tường.
CAMERA  camera đang bay lên thì phanh gấp (dừng cứng trong 3 frame), rung một nhịp nhỏ
ELEMENT dòng hạt đang lao lên đâm vào một mặt phẳng vô hình và văng ngược trở lại thành
        vòng cung rơi; mặt phẳng chỉ lộ ra bằng gợn sóng va chạm #BFD9FF ở đúng chỗ bị
        đâm, ngoài ra không vẽ tường đặc (bức tường này là một tính chất, không phải vật
        thể); bảng tuần hoàn phía trên vẫn tối; nhạc nền hụt xuống một bậc
SFX     âm dâng lên rồi hụt xuống, như hẫng một bậc thang
CUT     các hạt rơi lại xuống; máy hạ theo chúng vào S33

## S33 · C62 · CHƯƠNG 3
SCENE   Dựng CÁI THANG SỐ KHỐI — motif trung tâm của chương. Mỗi bậc là tổng số hạt.
        Bậc 1 hydro, bậc 2 deuterium, bậc 3–4 heli. Rất tốt.
CAMERA  chính diện, tĩnh, hơi ngửa; thang chạy từ đáy khung lên khỏi mép trên
ELEMENT thang dựng đứng: hai thanh dọc #6E7A8A, các bậc ngang đánh số A=1..8; bậc 1, 2,
        3, 4 là bậc ĐẶC, dày, có bóng đổ, viền #FFD65A, mỗi bậc gắn hình hạt nhân tương
        ứng (A=1: 1 proton; A=2: p+n; A=3: 3 hạt; A=4: tứ diện He-4 sáng nhất);
        bậc 5, 6, 7, 8 hiện dạng NÉT ĐỨT alpha 0.25 — có mặt trong khung nhưng chưa
        được chú ý; nền lam trầm #12202E, thang là vật thể sáng duy nhất
CUT     giữ khung thang; nhân vật "tôi" bước vào ở S34

## S34 · C63 · CHƯƠNG 3 · ★ CAO TRÀO HÌNH (thang 1/4)
SCENE   LEO THANG. Bậc một, hai, ba, bốn — chắc chắn, đầy đặn, đặt chân lên được. Rồi
        VỚI TAY lên bậc thứ năm.
CAMERA  bám theo người leo từ dưới lên, camera đi lên đồng tốc, giữ bàn chân trong khung;
        khi tay vươn lên bậc 5 thì chuyển sang góc thấp nhìn ngược lên và CHẬM LẠI
ELEMENT người leo = một silhouette hạt (~15k điểm trắng-lam #DCE9FF, không mặt, không
        chi tiết) — cùng ngôn ngữ với silhouette ở S08; mỗi lần đặt chân lên bậc 1→4,
        bậc đó bật sáng #FFD65A và phát một gợn sóng chắc chắn xuống dưới; nhịp bốn cú
        đặt chân đều đặn, tạo kỳ vọng; ở cú thứ năm, BÀN TAY vươn lên và dừng lơ lửng
        ngay dưới bậc 5 — bậc 5 vẫn chỉ là nét đứt, KHÔNG bật sáng
CUT     đóng băng ở khoảnh khắc tay chạm khoảng không — cắt sang S35

## S35 · C64 · CHƯƠNG 3 · ★ CAO TRÀO HÌNH (thang 2/4)
SCENE   Bậc thứ năm KHÔNG TỒN TẠI. Không có hạt nhân bền nào gồm đúng năm hạt: ghép thêm
        một proton hay một neutron vào heli-4 thì cái vừa tạo ra rã ra gần như tức khắc.
CAMERA  cận cảnh macro tại vị trí bậc 5, tĩnh; DOF nông, hậu cảnh thang mờ
ELEMENT thử hai lần, mỗi lần một cách: (1) He-4 + 1 proton #FF5B2E → cụm 5 hạt vừa khép
        vành thì vành đứt và hạt thứ năm văng ra; (2) He-4 + 1 neutron #8FA3B8 → y hệt;
        cả hai lần thời gian tồn tại chỉ 2–3 frame, ngắn hơn mọi liên kết đã thấy trong
        tập; He-4 sau đó vẫn nguyên vẹn, sáng ổn định — nó không hề bị tổn hại, chỉ là
        không nhận thêm được; KHÔNG hiển thị con số thời gian sống
CUT     hai lần thử chồng lên nhau rồi tắt; trả về khung người leo ở S36

## S36 · C65 · CHƯƠNG 3 · ★ CAO TRÀO HÌNH (thang 3/4)
SCENE   Không phải bậc thang khó leo — NÓ KHÔNG CÓ Ở ĐÓ. Giống bước lên một bậc được vẽ
        trên không khí: chân xuyên thẳng qua và RƠI TRỞ LẠI bậc bốn.
CAMERA  góc ngang ngay tầm bậc 5, tĩnh; đúng khoảnh khắc chân xuyên qua thì slow-motion
        (giãn thời gian 3×), sau cú rơi thì trả về tốc độ thật
ELEMENT bậc 5 vẽ đúng nghĩa "trên không khí": chỉ là một đường nét đứt #6E7A8A alpha
        0.25, KHÔNG có bề dày, KHÔNG có bóng đổ, KHÔNG có mặt trên — khác biệt này phải
        đọc được trong một liếc mắt so với bậc 4 đặc; bàn chân silhouette hạt xuyên qua
        nét đứt, các điểm hạt của bàn chân đi lọt qua khe giữa nét; toàn thân rơi xuống
        và ĐÁP LẠI bậc 4 — bậc 4 sáng lên chắc chắn đón lấy; các hạt bị xóc văng ra rồi
        tụ lại; nét đứt của bậc 5 không hề rung, hoàn toàn thờ ơ
CUT     giữ người đứng trên bậc 4 nhìn lên — cắt sang S37

## S37 · C66 · CHƯƠNG 3
SCENE   Vậy thì NHẢY CÓC: cho hai hạt nhân heli-4 va vào nhau. Bốn cộng bốn là tám, bỏ
        qua bậc năm.
CAMERA  cắt sang khung phản ứng (rời khỏi thang), hai hạt nhân lao vào nhau từ hai mép
        khung; camera lùi nhẹ để cả hai lọt khung, kết ở điểm va chạm
ELEMENT hai tứ diện He-4 giống hệt nhau, mỗi cái 2p+2n, emissive 1.9, lao vào nhau theo
        quỹ đạo thẳng; trên thang phía sau (mờ) một mũi tên #FFD65A vẽ cung nhảy từ bậc
        4 vọt qua bậc 5 và cắm xuống bậc 8; nhịp shot NHANH, tự tin — cố ý dựng kỳ vọng
        để S38 bẻ gãy
CUT     đóng băng 1 frame ngay trước va chạm; cắt sang S38

## S38 · C67–C68 · CHƯƠNG 3
SCENE   Bậc thứ tám cũng không tồn tại. Cái tạo ra là beryllium-8 — nó tan trở lại thành
        hai hạt heli trong một khoảng thời gian ngắn tới mức không có từ nào diễn tả nổi.
CAMERA  macro tĩnh tại điểm va chạm; sau khi Be-8 tan, camera KHÔNG di chuyển — để cái
        trống rỗng ở lại trong khung
ELEMENT hai He-4 dính thành cụm 8 hạt trong ĐÚNG 1–2 frame (ngắn nhất toàn tập — phải
        ngắn hơn mọi sự kiện khác để so sánh được bằng mắt), vành liên kết chỉ kịp loé
        một nửa vòng; rồi tách thành lại đúng hai He-4 y như cũ và trôi ra xa; lặp lại
        vòng này 3 lần ở ba vị trí khác nhau trong khung, mỗi lần đều thất bại giống hệt;
        không hạt thứ ba nào kịp đến gần — vẽ một hạt proton bay tới NƠI Be-8 vừa ở
        nhưng đến chậm, chỉ gặp khoảng không; KHÔNG in con số thời gian sống lên màn hình
CUT     giữ khoảng trống 1.5s (khớp gap) rồi kéo ngược ra thang ở S39

## S39 · C69–C70 · CHƯƠNG 3 · ★ CAO TRÀO HÌNH (thang 4/4)
SCENE   HAI BẬC BỊ RÚT MẤT: số năm và số tám. Chỉ vì hai chỗ trống đó, toàn bộ phần còn
        lại của bảng tuần hoàn bị chặn. Không phải định luật lớn lao nào — một TAI NẠN.
CAMERA  pull-back rất chậm và dài từ vị trí bậc 8 xuống chân thang, rồi tiếp tục lùi để
        lộ bảng tuần hoàn khổng lồ nằm PHÍA TRÊN bậc 8, tối om
ELEMENT thang toàn cảnh: bậc 1–4 đặc và sáng, bậc 5 nét đứt, bậc 6–7 đặc nhưng mảnh và
        mờ (#6E7A8A, alpha 0.5 — lithium tồn tại nhưng hiếm, đừng vẽ như bậc chắc), bậc
        8 nét đứt; hai bậc rỗng được nhấn bằng cách các bậc khác dịm tối 40% trong 1s;
        phía trên bậc 8: toàn bộ bảng tuần hoàn C, O, N, Ca, Fe, Au dựng thành một khối
        lớn TỐI HOÀN TOÀN, không với tới được; ở góc, một dòng chữ mảnh duy nhất KHÔNG
        dùng — thay bằng hình: lực hạt nhân vẽ như những sợi nối giữa hạt, và đúng ở
        A=5, A=8 các sợi không khép được vòng (thị giác hoá "không có chỗ đứng")
CUT     giữ khung toàn cảnh; hoà tan sang S40

## S40 · C71–C72 · CHƯƠNG 3
SCENE   Sự bất lực của cả một vũ trụ: đủ nguyên liệu, đủ nhiệt, không đi thêm được bước
        nào. Chỉ vài phản ứng hiếm hoi lách qua khe, sinh ra một chút lithium — biên giới
        cuối cùng, nguyên tố thứ ba.
CAMERA  khung rộng tĩnh nhìn cả thang và biển hạt bên dưới; cuối shot push-in cực chậm
        vào một hạt lithium đơn độc
ELEMENT bên dưới thang: biển hạt vẫn dày đặc và vẫn nóng — nhấn mạnh KHÔNG THIẾU gì cả;
        hàng nghìn mũi tên phản ứng nhỏ đâm lên bậc 5/8 rồi bật lại; đúng 3–4 tia mảnh
        lách qua mép và tạo ra Li-7 (3 proton #FF5B2E + 4 neutron #8FA3B8, emissive chỉ
        1.05, gần như không loé) — số lượng phải ÍT tới mức phải tìm mới thấy;
        một vạch "biên giới" #FFD65A kẻ ngang ngay trên bậc 7
CUT     hạt lithium trôi ra khỏi tiêu điểm; nhiệt độ khung bắt đầu tụt ở S41

## S41 · C73–C74 · CHƯƠNG 3
SCENE   Trong lúc đó vũ trụ vẫn giãn, vẫn nguội, vẫn loãng. Và muốn hai hạt nhân dính vào
        nhau, chúng phải va đủ mạnh để vượt lực đẩy điện giữa hai điện tích dương.
CAMERA  drift lùi đều suốt shot (chuyển động giãn nở), không cắt
ELEMENT hai thay đổi chạy song song và phải thấy rõ: (1) khoảng cách trung bình giữa các
        hạt tăng đều (mật độ giảm ~40% trong shot) → số lần gặp nhau giảm hẳn; (2) tốc
        độ hạt chậm lại thấy được, motion-trail ngắn dần; chèn một minh hoạ rào thế
        Coulomb: hai hạt nhân dương tiến lại gần, một vòm lực đẩy #FFB347 dựng lên giữa
        chúng, hạt leo lên dốc vòm rồi TỤT XUỐNG không qua nổi (trước đó, ở nhiệt độ cao,
        chúng vượt qua dễ dàng — vẽ lại một lần nhanh để so sánh);
        bảng màu tụt tiếp: #C96A2E → #8C3A22
CUT     tiếp tục lùi liền mạch vào S42

## S42 · C75 · CHƯƠNG 3
SCENE   Khoảng phút thứ hai mươi, các cú va chạm không còn đủ mạnh. Không phải hết nguyên
        liệu — LỬA ĐÃ TÀN.
CAMERA  tĩnh, khung rộng; kim đồng hồ trên vòng cung chạm mốc 20 phút ở cuối shot
ELEMENT vòng cung đồng hồ của S10 quay lại lần cuối, kim tiến tới vạch 20; biển hạt vẫn
        ĐÔNG ĐẢO (mật độ hạt cao — chứng minh còn thừa nguyên liệu) nhưng gần như không
        còn tia phản ứng nào; các cú va chạm nảy ra nhẹ hều như bi rơi hết đà; bảng màu
        chạm đáy nóng: #8C3A22 → đỏ than #5A2418, các hạt mất dần bloom (emissive rơi
        xuống dưới 1.0, tắt loé — dùng đúng ngưỡng HDR làm công cụ kể chuyện)
CUT     ánh loé cuối cùng tắt; cắt sang S43

## S43 · C76 · CHƯƠNG 3
SCENE   CÁNH CỬA ĐÓNG LẠI. Và nó không bao giờ mở lại nữa.
CAMERA  chính diện trên khe cửa, tĩnh tuyệt đối; sau khi cửa đóng, giữ khung TĨNH HOÀN
        TOÀN 3 giây, không một chuyển động nào
ELEMENT khe sáng #FFD65A của S27 khép lại từ hai phía với gia tốc chậm-nhanh-dừng; khi
        khép hết, một xung sáng lan ra rồi TẮT về đen gần hoàn toàn; khác biệt với S11:
        lần này KHÔNG có ổ khoá photon — cửa đóng vì không còn gì để mở, đơn giản là hết;
        vài hạt còn lại ngoài cửa trôi chậm dần rồi đứng yên
SFX     một tiếng cửa nặng đóng lại, vang, rồi tắt hẳn — [Im lặng 3 giây] sau đó
CUT     giữ đen 2.5s (khớp gap) trước S44

## S44 · C77–C79 · CHƯƠNG 3
SCENE   Đối chiếu: trong lòng một ngôi sao, phản ứng chạy hàng tỉ năm và luôn còn lần
        sau. Ở đây chỉ có MỘT LẦN, toàn vũ trụ đồng loạt, và vì vũ trụ chỉ giãn theo một
        chiều, điều kiện ấy không bao giờ quay lại. Hai mươi phút. Xong.
CAMERA  split chiều sâu: lớp gần là một ngôi sao thật (astro-realistic), lớp xa là toàn
        vũ trụ; camera pull-back liên tục từ sao ra tới thang thời gian một chiều
ELEMENT trái/gần: một ngôi sao dãy chính, đối lưu bề mặt granulation thật, lõi phát sáng
        ổn định, kèm một vòng lặp mũi tên "hàng tỉ năm · còn lần sau"; phải/xa: toàn bộ
        khung vũ trụ nhấp nháy MỘT lần đồng thời ở mọi điểm rồi tắt — nhấn "đồng loạt";
        dưới cùng: mũi tên thời gian MỘT CHIỀU #FFD65A, có mấu ở đầu, không có nhánh
        quay lui, và một ổ khoá đóng sập trên đoạn 0–20 phút; kết shot: toàn khung nguội
        về lam trầm #24384F — chính thức bước vào bảng màu lạnh của CH4
CUT     hoà tan dài sang ambient trong, rộng của CHƯƠNG 4

---

# CHƯƠNG 4 — THỨ CỔ NHẤT TRONG BẠN (C80–C109 · S45–S60)

## S45 · C80–C81 · CHƯƠNG 4
SCENE   Khói tan. Kiểm kê những gì vũ trụ có trong tay: theo khối lượng, ba phần tư hydro,
        một phần tư heli, cộng một chút xíu deuterium và lithium.
CAMERA  khung chính diện tĩnh trên graph cột; push-in rất nhẹ vào lát mỏng cuối
ELEMENT graph cột ngang duy nhất, chiếm 70% chiều rộng khung: 75% hydro trắng-lam #DCE9FF,
        25% heli lam nhạt #9FC8FF, và ở cuối một lát cực mỏng (< 1px ở tỉ lệ thật, phải
        phóng đại ×200 trong một ô kính lúp riêng) cho deuterium #8FA3B8 + lithium
        #C96A2E; nền đã hoàn toàn lạnh: lam mực #12202E; hạt trôi chậm, ambient rộng
CUT     graph giữ nguyên; các mục còn thiếu xuất hiện dưới nó ở S46

## S46 · C82–C83 · CHƯƠNG 4
SCENE   Danh sách VẮNG MẶT: không cacbon, oxy, nitơ, canxi, sắt, vàng — không gì làm nên
        đá hay máu. Rồi một sự trống rỗng rất dài: hàng trăm triệu năm chỉ có mây khí,
        nguội dần, tối dần, cuộn lại dưới sức hút của chính nó.
CAMERA  tilt-down qua danh sách vắng mặt, rồi hoà tan sang khung rộng và bắt đầu một
        dolly-in cực chậm, dài, vào một đám mây khí
ELEMENT nửa đầu: sáu ô ký hiệu C, O, N, Ca, Fe, Au vẽ nét mảnh #6E7A8A, mỗi ô hiện rồi
        BỊ GẠCH và mờ đi — không ô nào sáng; nửa sau (khớp gap 1.5s): astro-realistic —
        mây khí hydro/heli nguyên thuỷ, volumetric, lam-xám lạnh #3E6FA8 → #24384F,
        KHÔNG có sao nền phía sau (chưa có ngôi sao nào tồn tại — chi tiết chính xác
        quan trọng, đừng rải starfield); mây cuộn lại rất chậm theo hấp dẫn, tối dần
CUT     tiếp tục dolly-in không cắt vào lõi mây ở S47

## S47 · C84–C85 · CHƯƠNG 4
SCENE   Đám mây đầu tiên nén đủ chặt để bốc cháy ở lõi — NGÔI SAO ĐẦU TIÊN. Và chỉ trong
        lõi sao, với hàng triệu năm kiên nhẫn, mới có cách vượt qua bậc thang số tám.
CAMERA  dolly-in xuyên vào lõi mây, đánh lửa, rồi cắt sang cận cảnh lõi sao (mặt cắt)
ELEMENT ngôi sao Pop III: rất khối lượng lớn, quang phổ NÓNG trắng-xanh #EAF2FF (không
        phải sao vàng — sao thế hệ đầu nghèo kim loại và rất nóng), bao quanh bởi tàn dư
        mây đang bị thổi bạt; cắt vào lõi: thang số khối của CH3 hiện lại rất mờ ở hậu
        cảnh, và lần này ba hạt He-4 gặp nhau GẦN NHƯ ĐỒNG THỜI để nhảy thẳng từ bậc 4
        lên bậc 12, BỎ QUA cả bậc 5 lẫn bậc 8 (quá trình ba-alpha — vẽ đúng ba hạt, đừng
        vẽ hai); nhấn mạnh điều kiện: mật độ cực cao + hàng triệu năm, tương phản với
        đồng hồ 20 phút ở CH3 hiện mờ bên cạnh
CUT     lõi sao sáng lên; hoà tan sang S48

## S48 · C86–C87 · CHƯƠNG 4
SCENE   Cacbon ra đời ở đó, rồi oxy, rồi mọi thứ nặng hơn — nhưng đó là chương hai, đến
        sau rất lâu. Rồi giọng ấm lại: "bây giờ tôi mới hiểu điều mình đến đây để tìm."
CAMERA  pull-back khỏi lõi sao ra vũ trụ; nửa sau shot chuyển sang khung rộng tĩnh, lặng
ELEMENT các ô C, O bị gạch ở S46 lần lượt SÁNG LÊN (#5FC8E8 cho O, #6E7A8A → sáng cho C)
        rồi trôi ra ngoài theo dòng vật chất sao phun; một thang thời gian dưới khung cho
        thấy vạch "20 phút" nằm sát điểm 0, còn "sao đầu tiên" nằm cách đó hàng trăm
        triệu năm — khoảng cách phải LỚN đến mức gây khó chịu; nửa sau: mọi hoạt náo tắt
        dần, còn lại một khung lam rộng và tĩnh
CUT     hoà tan chậm; đưa người xem về cơ thể ở S49

## S49 · C88–C89 · CHƯƠNG 4
SCENE   Sắt trong máu, cacbon trong xương — đúng là rèn trong những ngôi sao đã chết.
        Nhưng đếm theo SỐ NGUYÊN TỬ thì phần lớn con người tôi thì không. Cơ thể phần
        lớn là nước: mỗi phân tử gồm một oxy và hai hydro.
CAMERA  hoà tan từ vũ trụ vào silhouette người (đúng silhouette hạt của S08), rồi
        push-in vào vùng ngực và tiếp tục vào một giọt nước
ELEMENT silhouette hạt trở lại; các hạt sắt #FF6A2B và cacbon #6E7A8A sáng lên và NỐI về
        ngôi sao đã chết bằng những sợi mảnh — đúng, nhưng ít; rồi 60% số hạt còn lại
        bật sáng hydro #DCE9FF và KHÔNG có sợi nào nối về sao; push-in cuối lộ một phân
        tử nước dựng đúng hình học: một oxy #5FC8E8 lớn ở giữa, hai hydro #DCE9FF nhỏ
        gắn hai bên với GÓC ~104,5° (không vẽ thẳng hàng 180° — chi tiết chính xác);
        oxy có sợi nối về sao, hai hydro thì không
CUT     hai nguyên tử hydro tách khỏi tiêu điểm; cắt vào một trong hai ở S50

## S50 · C90 · CHƯƠNG 4 · ★ CAO TRÀO HÌNH
SCENE   NHÌN KỸ MỘT NGUYÊN TỬ HYDRO: chỉ một proton, với một electron. Đơn giản nhất
        trong mọi thứ có thể gọi là nguyên tử.
CAMERA  macro cực cận, tĩnh gần như tuyệt đối, orbit rất chậm 15°; DOF nông; đây là shot
        LẶNG NHẤT của tập — để nó thở
ELEMENT proton #FF5B2E ở tâm, nhỏ tới mức gần như một chấm, emissive 1.4; electron KHÔNG
        vẽ thành viên bi chạy trên quỹ đạo tròn kiểu Bohr — vẽ thành ĐÁM MÂY XÁC SUẤT
        1s: một quả cầu sương #BFD9FF đối xứng cầu, dày ở trong, loãng dần ra ngoài,
        không có mép cứng, không có đường quỹ đạo; tỉ lệ đúng: đám mây rộng gấp ~10^5
        lần proton — vì vậy proton phải BÉ ĐẾN MỨC KHÓ THẤY giữa đám mây; nền đen tuyệt
        đối, không hạt phụ, không graph, không chữ
CUT     giữ nguyên nguyên tử; kéo lịch sử của nó vào ở S51

## S51 · C91–C92 · CHƯƠNG 4
SCENE   Nó chưa bao giờ ở trong lòng một ngôi sao. Chưa từng bị nung, bị nén, bị bắn ra
        bởi vụ nổ nào. Được đúc xong trong hai mươi phút đầu tiên rồi chỉ TRÔI — trôi
        qua sự sinh và chết của vô số ngôi sao mà nó không tham gia.
CAMERA  tracking ngang bám nguyên tử hydro, đi từ trái sang phải với tốc độ đều, không
        đổi, suốt shot — sự bình thản là nội dung
ELEMENT nguyên tử hydro giữ nguyên kích thước và vị trí trong khung; hậu cảnh CHẠY QUA
        nó: một chuỗi sao sinh ra (mây co lại, bừng sáng), sống, rồi nổ siêu tân tinh
        (vỏ sốc lam-tím #7B4BFF lan ra), lặp lại 4–5 lần với các loại sao khác nhau; MỌI
        vỏ sốc đều đi XUYÊN QUA hoặc VÒNG QUA nguyên tử mà không làm nó đổi gì — không
        biến dạng, không đổi màu, không sáng lên; tương phản nhịp: hậu cảnh dữ dội, chủ
        thể tuyệt đối bình thản
CUT     hậu cảnh loãng dần thành mây lạnh giữa các vì sao — dẫn thẳng vào S52

## S52 · C93 · CHƯƠNG 4 · ★ CAO TRÀO HÌNH
SCENE   HÀNH TRÌNH 13,8 TỈ NĂM trong một shot liền mạch: mây lạnh giữa các vì sao → một
        hành tinh → biển → một cơn mưa → đi qua vô số cơ thể sống, trước tôi và sau tôi.
CAMERA  MỘT cú máy duy nhất, không cắt: dolly xuyên qua năm môi trường, mỗi lần chuyển
        thì thang đo thu nhỏ lại (vũ trụ → thiên hà → hệ hành tinh → biển → giọt nước)
ELEMENT nguyên tử hydro là ĐIỂM NEO — luôn ở đúng một vị trí trong khung suốt cả cú máy,
        năm môi trường trôi qua quanh nó; (1) mây phân tử lạnh #24384F, bụi tối, vài sao
        nền; (2) một hành tinh đá astro-realistic, texture thật, TRỤC NGHIÊNG rõ, quay
        đúng chiều thuận (ngược chiều kim đồng hồ nhìn từ cực bắc), terminator mềm;
        (3) biển: mặt nước nhìn từ dưới lên, ánh sáng caustics; (4) mưa: giọt rơi, ngược
        sáng, chuyển động chậm; (5) sự sống: các silhouette hạt mờ lần lượt hiện và tan
        — cây, cá, thú, người — nguyên tử đi xuyên qua từng cơ thể rồi tiếp tục;
        bảng màu ấm lên nhẹ ở đoạn biển/mưa (#7FB2D9) rồi trở về lam
CUT     giọt nước cuối cùng rơi vào khung; cắt macro sang S53

## S53 · C94–C95 · CHƯƠNG 4
SCENE   Mỗi ngụm nước chứa những hạt nhân già bằng chính vũ trụ, cổ hơn bất kỳ ngôi sao
        nào từng phát sáng. Rồi bắc cầu: "có một điều nữa khiến tôi tin đó là thật."
CAMERA  macro trên mặt nước trong một ly/lòng bàn tay, tĩnh; cuối shot lùi nhẹ ra
ELEMENT mặt nước macro, ánh sáng lam lạnh #7FB2D9, gợn sóng chậm; bên trong nước, các
        chấm hydro #DCE9FF phát sáng rất khẽ, nhiều đến mức đếm không xuể; ở góc, một
        thang tuổi tối giản: vạch "vũ trụ" và vạch "ngôi sao đầu tiên" — chấm hydro nằm
        TRƯỚC cả hai; sau gap 2.0s, ambient mở rộng ra chuẩn bị cho phần bằng chứng
SFX     tiếng nước rất khẽ, gần
CUT     hoà tan sang khung số liệu ở S54

## S54 · C96–C97 · CHƯƠNG 4
SCENE   BẰNG CHỨNG. Các nhà thiên văn tính trên giấy hai mươi phút ấy phải cho ra bao
        nhiêu heli: khoảng một phần tư khối lượng. Rồi họ đi ĐO — trong khí quyển Mặt
        Trời, trong những đám mây khí gần như chưa bị sao làm ô nhiễm.
CAMERA  chia hai nhịp: nhịp tính toán tĩnh trên nền tối; nhịp đo là hai cú lia sang hai
        đối tượng quan sát thật
ELEMENT nhịp 1: một đường tính toán mảnh #FFD65A chạy từ tỉ số n/p 1/7 (nhắc lại đúng
        con số ở S18) tới cột heli dừng ở 25% — chuỗi suy luận vẽ bằng ba mũi tên, không
        công thức; nhịp 2: (a) Mặt Trời astro-realistic, granulation bề mặt, vài vết
        đen, một dải quang phổ hấp thụ hiện dưới với vạch heli được đánh dấu; (b) một
        đám mây khí ngoài thiên hà, mờ, nghèo kim loại, cũng có dải quang phổ tương tự
CUT     hai dải quang phổ trượt lại gần nhau — chồng khớp ở S55

## S55 · C98–C99 · CHƯƠNG 4
SCENE   Ở đâu họ cũng gặp CÙNG MỘT CON SỐ. Như thể toàn vũ trụ đã được nêm sẵn cùng một
        công thức trước khi ngôi sao đầu tiên kịp thắp lên. Bởi vì nó đã được nêm sẵn thật.
CAMERA  tĩnh; các phép đo rơi vào khung lần lượt như những chấm trên một trục
ELEMENT một trục ngang "tỉ lệ heli theo khối lượng"; 6–8 chấm đo #DCE9FF rơi xuống từ các
        hướng khác nhau (mỗi chấm gắn một hình nhỏ: Mặt Trời, mây khí, thiên hà lùn) và
        TẤT CẢ đáp xuống gần như cùng một vạch ~25%, sai số nhỏ; đường tính toán #FFD65A
        của S54 nằm sẵn ở đúng vạch đó — hai thứ trùng nhau, không cần chữ; sau đó khung
        mở rộng: toàn vũ trụ được phủ một lớp màu đồng nhất, chứng tỏ công thức chung
CUT     giữ vạch 25%; một vết xước xuất hiện trên nó ở S56

## S56 · C100–C101 · CHƯƠNG 4
SCENE   Vẫn còn một chỗ chưa khớp: lithium trong các ngôi sao rất già ít hơn tính toán
        khoảng ba lần, chưa ai biết vì sao. "Tôi thích vết xước đó." Rồi rời giây thứ
        nhất của vũ trụ, quay về với hơi thở của mình.
CAMERA  tĩnh trên graph lithium; sau gap 2.0s, pull-back rất dài rời khỏi mọi đồ hoạ, về
        một khung tối yên tĩnh
ELEMENT graph lithium: một cột "tính toán" #FFD65A và một cột "đo được" #C96A2E chỉ cao
        bằng khoảng một phần ba — chênh lệch để NGUYÊN, không giải thích, không dấu hỏi
        to; một vết xước mảnh vẽ chéo qua khung, sáng nhẹ, có vẻ đẹp riêng chứ không
        phải lỗi; nửa sau: mọi graph, thang, đồng hồ của cả tập lần lượt mờ về không —
        dọn sạch khung cho đoạn kết; ambient loãng
CUT     fade qua đen ngắn; mở ra ở S57

## S57 · C102–C104 · CHƯƠNG 4
SCENE   Hai mươi phút ấy là một quyết định mà không ai được biểu quyết. Nếu neutron sống
        lâu hơn, vũ trụ đã đầy heli và sao cháy quá nhanh; nếu chết nhanh hơn, có lẽ chỉ
        còn hydro. Toàn bộ hoá học sau này mọc lên từ hai món ăn nghèo nàn nấu vội.
CAMERA  ba nhịp tĩnh nối bằng hoà tan, không di chuyển máy — nhịp chiêm nghiệm
ELEMENT nhịp 1: thang số khối hiện lại rất mờ, hai bậc 5 và 8 vẫn khuyết, không ai chạm
        vào — không có tay, không có nút bấm; nhịp 2: hai vũ trụ giả định chạy song song
        trong hai nửa khung — (a) neutron sống lâu hơn: đầy heli #9FC8FF, các sao bùng
        sáng rồi tắt rất nhanh; (b) neutron chết nhanh hơn: chỉ toàn proton cam đơn độc,
        không cấu trúc, tối; giữa hai nửa là vũ trụ THẬT, cân bằng, có cấu trúc; nhịp 3:
        từ hai cột 75/25 mọc lên đá, biển, cây cỏ, da thịt dạng silhouette hạt — mọc RA
        TỪ chính hai cột, cùng màu gốc, để thấy nguồn
CUT     giữ hình cây cỏ/da thịt qua gap 1.5s; hạ dần vào S58

## S58 · C105–C106 · CHƯƠNG 4 · ★ CAO TRÀO HÌNH
SCENE   HƠI THỞ. Lời mời hít một hơi thật sâu. Không khí vừa hít vào có hơi nước; trong
        hơi nước có hydro; và hydro đó không có tuổi nào khác ngoài tuổi của vũ trụ.
CAMERA  cực cận, tĩnh; chỉ có một chuyển động duy nhất trong khung là dòng khí — camera
        không nhúc nhích trong suốt shot
ELEMENT dòng khí vào dựng bằng ~40k hạt mảnh, chuyển động vào-ra CHẬM theo nhịp thở thật
        (~4s vào, ~5s ra) và là hàm thuần của t; trong dòng khí, các phân tử nước (đúng
        hình học O + 2H, góc 104,5°) rải rác; khi camera nhìn kỹ, hai hạt hydro #DCE9FF
        trong mỗi phân tử BẬT SÁNG hơn phần còn lại (emissive 1.5 vs 0.8) — chỉ chúng
        loé qua ngưỡng bloom, cả khung còn lại dịu; hậu cảnh: rất xa, rất mờ, plasma
        trắng-xanh của S01 hiện lại như một ký ức chồng lớp alpha 0.12 — nối đầu với cuối
SFX     [Thì thầm]; ambient gần như chỉ còn tiếng hơi thở
CUT     giữ nhịp thở liên tục sang S59, không cắt hình

## S59 · C107–C108 · CHƯƠNG 4
SCENE   Trong lồng ngực bạn, trong từng giọt nước dưới da bạn, có những hạt nhân đã ở đó
        từ trước khi bất kỳ ngôi sao nào phát sáng. Chúng sống sót qua hai mươi phút hỗn
        loạn nhất, rồi trôi mười ba tỉ năm, để nằm yên trong một cơ thể biết hỏi.
CAMERA  pull-back rất chậm và dài: từ macro giọt nước dưới da → lồng ngực → silhouette
        người toàn thân → người đứng nhỏ dần trong khung
ELEMENT chuỗi thang đo ngược: giọt nước macro với các chấm hydro sáng → mao mạch → lồng
        ngực đang thở → silhouette hạt toàn thân (#DCE9FF) đứng yên; trong lúc pull-back,
        vẽ chồng một dải thời gian mảnh chạy dọc: đoạn "20 phút" chỉ là một chấm ở đầu,
        đoạn "13,8 tỉ năm" kéo dài suốt chiều cao khung; các hạt hydro trong cơ thể phát
        sáng đồng bộ, nhẹ, theo nhịp thở
CUT     dừng pull-back; giữ khung 2.0s (khớp gap) rồi vào câu cuối

## S60 · C109 · CHƯƠNG 4
SCENE   CÂU KẾT. Bạn không chỉ là tro tàn của những ngôi sao — phần lớn bạn còn cũ hơn
        thế. Bạn là phần còn sót lại của hai mươi phút đầu tiên.
CAMERA  tĩnh tuyệt đối. Không zoom, không pan, không orbit. Kết bằng fade to black rất
        chậm (≥ 3s)
ELEMENT silhouette người bằng hạt trên nền lam-đen #0A0E14; sau [Im lặng 3 giây], các hạt
        sao (#FF6A2B, #5FC8E8 — sắt và oxy) mờ đi trước, để lại ~60% số hạt hydro
        #DCE9FF sáng lên chậm; toàn bộ hình người dần biến thành trường plasma trắng-xanh
        của S01 trong 2s cuối rồi tan về đen — vòng tròn khép kín giữa shot đầu và shot
        cuối; KHÔNG chữ, KHÔNG logo, KHÔNG credit trên hình
SFX     ambient tắt dần về không tuyệt đối
CUT     fade to black; hết tập

---

# GHI CHÚ DỰNG HÌNH

Quy ước dùng chung cho CẢ TẬP. Visual-builder tuân theo mà không cần đọc lại kịch bản.

## 1. Thư viện & bloom HDR (BẮT BUỘC ĐỌC)

- Tập này dùng `assets/lib/hf-astro.js` (viết tắt **HFA**).
- **Bloom nay chạy trên HDR, ngưỡng mặc định 1.0.** Vật thể muốn loé sáng phải có giá trị
  phát xạ **TRÊN 1.0** — con số 0.7 dùng ở các tập cũ nay sẽ KHÔNG loé. Nếu một shot "trông
  xỉn", nguyên nhân đầu tiên cần kiểm tra là emissive còn dưới ngưỡng.
- Thang emissive thống nhất của tập (dùng chính ngưỡng này làm công cụ kể chuyện):

| Đối tượng | Emissive | Ghi chú |
|---|---|---|
| Photon (biển photon CH1–CH2) | 2.4 – 2.6 | sáng nhất tập; là "phản diện" |
| Plasma nền CH1 | 1.8 | nguội dần theo tập |
| Heli-4 | 1.9 | bền, sáng ổn định, không nhấp nháy |
| Deuterium (mối nối) | 1.1 | vừa qua ngưỡng — cố ý YẾU, dễ vỡ |
| Proton / neutron | 1.4 / 1.2 | neutron luôn dịu hơn proton |
| Lithium-7 | 1.05 | gần như không loé — vì nó cực hiếm |
| Hạt "đã nguội" (S42 trở đi) | 0.8 | **dưới** ngưỡng → tắt loé, đúng ý "lửa tàn" |
| Hydro trong cơ thể (CH4) | 1.5 | loé nhẹ giữa khung dịu 0.8 |

## 2. Trục nhiệt độ — bảng màu xuyên tập

Người xem phải **cảm được vũ trụ đang nguội dần** chỉ bằng màu, không cần chữ. Không được
nhảy cóc ngược trên trục này (ngoại lệ duy nhất: một nhịp bật nóng ở S27 khi cửa mở).

| Giai đoạn | Cue | Màu chủ đạo | Hex |
|---|---|---|---|
| 10 tỉ độ — nung trắng | C01–C10 | trắng-xanh | `#EAF2FF` lõi · `#9FC8FF` rìa |
| bắt đầu nguội | C11–C25 | trắng ngả kem | `#FFE9C0` |
| cam nóng | C26–C40 | cam vàng | `#FFB347` |
| cam trầm | C41–C48 | cam đất | `#C96A2E` |
| đỏ trầm | C49–C74 | đỏ gạch | `#8C3A22` |
| đỏ than — lửa tàn | C75–C79 | than | `#5A2418` |
| lam lạnh — vũ trụ nguội | C80–C109 | lam mực → lam nhạt | `#12202E` → `#3E6FA8` → `#7FB2D9` |

Nền tối chung: `#0A0E14`. Nét đồ hoạ/graph: `#FFD65A` (vàng nhấn) và `#6E7A8A` (xám nguội).

## 3. Quy ước hạt (dùng nguyên xi mọi shot, mọi chương)

| Hạt | Màu | Kích thước tương đối | Đặc trưng hình |
|---|---|---|---|
| **Proton** | `#FF5B2E` cam-đỏ ấm | **1.00×** | có quầng điện dương mảnh `#FFB347` gợn RA NGOÀI |
| **Neutron** | `#8FA3B8` xám-lam trung tính | **1.03×** | **KHÔNG** quầng điện; bề mặt dịu, ít nhiễu |
| Electron | `#BFD9FF` | 0.25× | chấm nhỏ, nhanh; trong nguyên tử thì là ĐÁM MÂY, không phải bi |
| Photon | `#FFF3C4` | vệt streak | **luôn vẽ dạng vệt có đuôi**, không bao giờ là chấm tròn |
| Neutrino | `#7B4BFF` alpha 0.3 | 0.2× | đi thẳng tuyệt đối, xuyên mọi thứ, không nảy |

- Chênh lệch kích thước proton/neutron **3%** là phóng đại có chủ đích của chênh lệch khối
  lượng thật (~0,1%). Giữ đúng 3% ở mọi shot để mắt học được quy ước, đừng đổi qua lại.
- Neutron **luôn** là hạt dịu hơn, tối hơn, "im lặng" hơn proton. Khi nó phân rã: chớp một
  cái rồi biến mất — **không nổ, không tiếng**.
- Hạt nhân ghép:
  - **Deuterium** = 1 proton + 1 neutron, mối nối MẢNH và RUNG (emissive 1.1).
  - **Heli-4** = tứ diện 2 proton + 2 neutron, vành liên kết DÀY, ĐỨNG YÊN (emissive 1.9).
  - **Lithium-7** = 3 proton + 4 neutron, mờ, hiếm.
  - Tương phản mối-nối-mảnh (D) vs vành-dày (He-4) là **load-bearing**: nó giải thích cả
    nút thắt cổ chai lẫn cái hố năng lượng mà không cần một chữ nào.

## 4. Ba motif lặp lại — dùng lại đúng hình, đừng vẽ lại kiểu mới

1. **CÁNH CỬA** = một KHE SÁNG dọc bị hai khối tối ép kín, viền `#FFD65A`.
   Xuất hiện S11 (khoá, ổ khoá là cụm photon) → S25 (vẫn khoá) → S27 (bật tung) →
   S43 (đóng vĩnh viễn, lần này KHÔNG có ổ khoá). Tuyệt đối **không vẽ cửa gỗ/cửa kim loại**.
2. **ĐỒNG HỒ** = vòng cung mảnh `#FFD65A`, vạch 0 / 3 / 10 / 20 phút. Đặt vạch đúng vị trí
   ngay từ S10 vì S18, S42 sẽ dùng lại chính vòng cung đó.
3. **THANG SỐ KHỐI** = A=1→8, bậc 1–4 ĐẶC (có bề dày + bóng đổ), bậc 5 và 8 **nét đứt
   `#6E7A8A` alpha 0.25, không bề dày, không bóng đổ**, bậc 6–7 đặc nhưng mảnh và mờ.
   Giới thiệu mờ ở S20, dựng đầy đủ ở S33, cao trào S34–S36 và S39, nhắc lại mờ ở S47/S57.

## 5. Chính xác khoa học trong hình — những chỗ dễ sai

- **CH1 tuyệt đối không vật thể rắn.** Ngoại lệ duy nhất: mẩu sắt ở S03, tồn tại 2 giây rồi
  bị huỷ — chính việc nó bị huỷ là luận điểm.
- **Vũ trụ đục (S05):** quãng đường tự do của photon phải cực ngắn (~2% chiều rộng khung mỗi
  đoạn). Không có điểm sáng xa, **không starfield**, không tia đi thẳng quá 1/10 khung.
- **Không có sao trước S47.** Ở S46 (mây nguyên thuỷ) tuyệt đối không rải starfield hậu cảnh
  — chưa ngôi sao nào tồn tại.
- **Sao thế hệ đầu (S47)** rất khối lượng lớn và **trắng-xanh** `#EAF2FF`, không phải sao
  vàng kiểu Mặt Trời.
- **Ba-alpha (S47):** phải vẽ **BA** hạt He-4 gặp nhau gần như đồng thời để nhảy từ A=4 lên
  A=12, bỏ qua cả A=5 lẫn A=8. Vẽ hai hạt là sai.
- **Electron trong nguyên tử hydro (S50):** là **đám mây xác suất 1s** — quả cầu sương đối
  xứng, dày trong loãng ngoài, **KHÔNG có đường quỹ đạo, KHÔNG có viên bi chạy vòng**.
  Tỉ lệ: đám mây rộng gấp ~10⁵ lần proton, nên proton phải bé đến mức khó thấy.
- **Phân tử nước:** O ở giữa, hai H hai bên, **góc ~104,5°** — không bao giờ vẽ thẳng hàng.
- **Hành tinh (S52):** texture NASA thật, **trục nghiêng rõ**, quay **ngược chiều kim đồng
  hồ nhìn từ cực bắc**, terminator mềm (không viền cứng).
- **Hoán đổi p↔n (S13):** mỗi lần hoán đổi phải có lepton đi kèm (electron/positron +
  neutrino) — đừng vẽ hạt tự đổi màu trơn.
- **Freeze-out (S15):** hạt **giãn ra đều theo scale factor**, không phải bay tán loạn ra
  ngoài từ một tâm. Vũ trụ không có tâm.
- **Be-8 (S38):** thời gian tồn tại phải là sự kiện **ngắn nhất toàn tập** (1–2 frame) để so
  sánh được bằng mắt. **KHÔNG in con số thời gian sống lên màn hình** (lời đọc đã có con số
  riêng; in số lên hình sẽ tạo mâu thuẫn).

## 6. Cần tránh

- Đừng để cùng một bố cục kéo dài quá hai shot liên tiếp — mỗi shot phải có ít nhất một
  thay đổi rõ về **thang đo**, **góc máy**, hoặc **loại visual**.
- Đừng lặp lại motif "hạt trôi lơ lửng trên nền đen" quá 3 lần liên tiếp; xen graph, macro,
  hoặc cú máy có chuyển động thật.
- Đừng dùng chữ số lớn trên màn hình khi có thể đếm bằng ô/màu (S08, S16 làm mẫu).
- Đừng thêm starfield "cho đẹp" ở CH1–CH3: suốt hai mươi phút đó **không có ngôi sao nào**.
- Mọi chuyển động phải là **hàm thuần của `t`**; ngẫu nhiên dùng mulberry32 có seed cố định.
  Không `Math.random`, không `+= dt`, không `requestAnimationFrame`.
- Phụ đề sinh bằng `scripts/gen-captions.mjs` từ `voice/*.srt`; **≤ 42 ký tự, 1 dòng**.
