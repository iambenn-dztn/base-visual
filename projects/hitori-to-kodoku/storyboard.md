# hitori-to-kodoku — storyboard

```
METADATA
時間 (dự kiến):  ~12-13 phút (khớp thật theo timing.json)
số shot:         33
loại visual:     WebGL 3D — một căn phòng duy nhất (和の居間), dựng MỘT LẦN, chỉ đổi
                 ánh sáng + vật liệu bề mặt giữa hai trạng thái (火曜日 ấm/mềm ⇄ 木曜日
                 lạnh/cứng). Không dựng hai phòng khác nhau — đây là luật cốt của tập.
                 第2章 tách riêng: không gian thí nghiệm tối giản (một ghế, ánh sáng
                 trừu tượng biểu thị 4 hộp cảm xúc). 第3章 ẩn dụ hai cánh cửa mở vào
                 CÙNG một phòng.
nhạc nền:        assets/bgm.mp3 — một track cho toàn tập; âm lượng lùi sau khi
                 AUDIO DIRECTION có chỉ dẫn tiếng động cụ thể (đồng hồ, lá cây, xe máy)
phong cách:      cinematic, tĩnh vật, ánh sáng tự nhiên qua cửa sổ; KHÔNG có nhân vật
                 hiện hình (chỉ tay, ghế, đồ vật — 「私」không lộ mặt, đúng ngôi kể 私
                 nghe mà không thấy); chuyển động camera chậm, không cắt dưới 4 giây;
                 độ phân giải chi tiết vật liệu cao (dệt vải, thớ gỗ, sứ men) vì
                 khán giả 50-60+ xem TV lớn

GHI CHÚ ĐỒNG BỘ ÂM-HÌNH:
  火曜日 (thứ Ba, C01-05, C63-... ): ánh sáng ấm 2700-3000K, bóng đổ mềm/khuếch tán,
    vải và gỗ có kết cấu mịn, hạt bụi trôi chậm trong nắng, đồng hồ "mềm và xa"
  木曜日 (thứ Năm, C06-13, C65-76): CÙNG bố cục — CÙNG góc nắng, CÙNG đồ vật — nhưng
    ánh sáng lạnh 5500-6000K, bóng đổ cứng/viền rõ, bề mặt hơi ánh kim/khô hơn (không
    đổi hình học, chỉ đổi chất liệu và light rig), đồng hồ "cứng và gần"
  第4章 cuối: chất liệu tan dần NỬA đường về phía ấm (không về hoàn toàn — đúng C69,
    C72: "không thể nói phòng đã giống thứ Ba" — ⚠ đừng dựng full crossfade về ấm)
```

---

## S01 · C01 · 第1章 — 入口
SCENE   Phòng khách kiểu Nhật, giữa sáng thứ Ba. Toàn cảnh tĩnh: ghế bên cửa sổ, ánh nắng xiên qua rèm mỏng
CAMERA  tĩnh, góc rộng 24mm ngang tầm ngồi, không zoom — thiết lập không gian trước khi vào chi tiết
ELEMENT 0s toàn cảnh phòng ngập nắng ấm 2800K; 6s một dải nắng đổ chéo qua chiếu tatami;
        14s tay áo len mềm đặt lên tay ghế, ngồi xuống — ánh sáng khuếch tán qua rèm vải
        gauze, bóng đổ mềm không viền rõ
CUT     giữ nguyên góc, cắt sang cận cảnh khi máy bắt đầu di chuyển vào S02

## S02 · C02 · 第1章
SCENE   Cận vật thể trên bàn thấp: guồng tách trà, khay gỗ, ánh nắng hình cửa sổ trên chiếu
CAMERA  dolly chậm ngang bàn thấp, 50mm, từ tách trà lướt sang vệt nắng trên tatami
ELEMENT 0s tách trà sứ men trắng ngà, nước trà còn nửa tách, hơi ấm bốc nhẹ; 8s dải nắng
        hình khung cửa sổ nằm trên chiếu, mép nắng mềm nhoè; 16s đồng hồ quả lắc treo
        tường phía sau, kim giây di chuyển đều — âm hình đồng hồ sẽ là trục xuyên suốt
CUT     cắt cứng sang cận tay khi lời thoại chuyển ý (quyết định của sáng nay)

## S03 · C03 · 第1章
SCENE   Cận tay đặt điện thoại úp xuống bàn, ánh sáng ấm
CAMERA  cận cảnh tĩnh, 85mm, tiêu cự nông — chỉ tay và điện thoại rõ nét, hậu cảnh nhoè ấm
ELEMENT 0s tay đặt điện thoại nằm úp, màn hình tắt; 6s ngón tay rời khỏi điện thoại,
        không chạm lại — cử chỉ dứt khoát nhưng nhẹ, không giằng co
CUT     match-cut theo hướng chuyển động tay sang S04 (tay mở ngăn kéo)

## S04 · C04 · 第1章
SCENE   Ngăn kéo bếp gỗ hé mở, tay đặt điện thoại vào trong rồi đẩy ngăn kéo khép lại
CAMERA  tĩnh, 50mm, khung dọc theo mặt ngăn kéo — nhấn hành động "cất đi" là chủ động
SFX     tiếng ngăn kéo khép nhẹ, khô, rõ (theo AUDIO DIRECTION)
ELEMENT 0s ngăn kéo mở, gỗ vân sáng màu ấm; 4s điện thoại đặt vào, màn hình úp xuống;
        8s ngăn kéo khép — âm thanh khép là điểm nhấn duy nhất của shot
CUT     dissolve chậm sang S05 (trở lại ghế, ấm trà)

## S05 · C05 · 第1章
SCENE   Trở lại ghế bên cửa sổ, tay xoay nhẹ tách trà, ánh nắng ấm nguyên vẹn
CAMERA  tĩnh kéo dài, 50mm, không di chuyển — khoảng lặng cố ý, để cảm giác "không làm gì" tự nói
ELEMENT 0s tay đặt quanh tách trà ấm; 7s hạt bụi trôi chậm trong tia nắng xiên; 14s
        bóng lá cây ngoài cửa sổ khẽ lay động trên rèm — chuyển động duy nhất trong khung
CUT     giữ hình ảnh, cắt sang màn đen ngắn hoặc mờ dần cho gap 1.5s trước khi sang thứ Năm

<!-- gap 1.5s -->

## S06 · C06 · 第1章 (木曜日)
SCENE   CÙNG một phòng, CÙNG bố cục ghế/bàn/cửa sổ — nhưng ánh sáng đã đổi sang lạnh, cứng
CAMERA  lặp lại chính xác góc máy của S01 (toàn cảnh 24mm) để người xem nhận ra "cùng một chỗ"
ELEMENT 0s toàn cảnh phòng — CÙNG hình học, CÙNG góc nắng chiếu — nhưng nhiệt độ màu đã
        chuyển 5500K, bóng đổ có viền cứng rõ; 8s tay ngồi xuống CÙNG chiếc ghế đó, vải
        áo cùng kiểu nhưng ánh sáng làm bề mặt trông khô hơn, ít mềm hơn
SFX     kim giây đồng hồ cùng nhịp nhưng âm sắc cứng, gần hơn (EQ đổi, không đổi giai điệu)
CUT     dolly nhẹ chuyển sang cận lịch/điện thoại ở S07

## S07 · C07 · 第1章
SCENE   Cận lịch bàn hoặc màn hình điện thoại đặt trên bàn, một dòng ghi hẹn "お昼 そば屋"
CAMERA  cận tĩnh, 85mm, tiêu cự nông
ELEMENT 0s dòng chữ hẹn gặp bạn cũ hiển thị rõ; 6s ánh sáng lạnh phản chiếu trên mặt kính
        điện thoại — không có cảm xúc kịch tính, chỉ là một chi tiết đời thường
CUT     cắt khi màn hình sáng lên báo tin nhắn đến, nối sang S08

## S08 · C08 · 第1章
SCENE   Màn hình điện thoại sáng lên với tin nhắn ngắn hiện ra, tay cầm điện thoại lên nhìn
CAMERA  cận cảnh tĩnh, 85mm, lấy nét vào màn hình rồi nhẹ nhàng chuyển nét ra tay
ELEMENT 0s màn hình sáng, dòng tin nhắn xin lỗi hiện ra (không đọc lớn nội dung, chỉ gợi
        hình một khối chữ ngắn); 6s điện thoại đặt xuống bàn, màn hình tắt lại — không có
        phản ứng gương mặt (không lộ mặt), chỉ có cử chỉ đặt xuống chậm hơn ở S03
CUT     cắt sang toàn cảnh ghế, quay lại bố cục quen thuộc — S09

## S09 · C09 · 第1章
SCENE   Trở lại ghế bên cửa sổ, CÙNG tách trà, CÙNG dải nắng hình cửa sổ trên chiếu — nhưng lạnh
CAMERA  lặp khung của S02 (dolly ngang bàn thấp) để đối chiếu trực tiếp — cùng chuyển động, khác chất
ELEMENT 0s tách trà cùng hình dáng, nước trà cùng mức — nhưng men sứ ánh lạnh hơi xanh;
        8s dải nắng cùng hình khung cửa sổ nhưng viền bóng sắc, không nhoè; 16s lá cây
        ngoài cửa sổ lay động cùng nhịp như S05 — phép lặp có chủ ý
CUT     cắt sang cận cảnh phòng khi camera bắt đầu lùi ra ở S10

## S10 · C10 · 第1章
SCENE   Toàn cảnh phòng kéo rộng ra, không gian trông như giãn nở, đồng hồ quả lắc chiếm khung lớn hơn
CAMERA  zoom-out rất chậm (khác hẳn S01 tĩnh) — cảm giác phòng "nới rộng ra" quanh người ngồi
ELEMENT 0s khung bắt đầu ở cỡ như S06; 10s ống kính lùi dần, mép phòng lộ ra nhiều hơn,
        khoảng trống quanh ghế tăng lên (ẩn dụ hình học nhẹ, không phóng đại quá mức);
        18s đồng hồ quả lắc được nhấn to hơn trong khung — kim giây rõ, âm sắc cứng đỉnh điểm
SFX     tiếng kim giây được đẩy gần micro, sắc, hơi chói
CUT     cắt cứng sang cận tĩnh ở S11 (đối lập nhịp)

## S11 · C11 · 第1章
SCENE   Cận cảnh chiếu tatami và dải nắng, hoàn toàn tĩnh, không người trong khung
CAMERA  tĩnh hoàn toàn, giữ lâu hơn các shot khác — khoảng lặng thoại
ELEMENT 0s chỉ còn dải nắng lạnh trên chiếu và tiếng kim giây; không có chuyển động nào
        khác — đây là shot "khoảng trống" đúng nghĩa, khớp với đoạn 間 trong AUDIO DIRECTION
CUT     dissolve chậm sang cận tay/mắt hướng xuống ở S12

## S12 · C12–C13 · 第1章
SCENE   Cận góc thấp nhìn xuống dải nắng trên chiếu, như góc nhìn của người đang ngồi cúi đầu
CAMERA  tĩnh, góc nghiêng nhẹ xuống dưới, 50mm
ELEMENT 0s dải nắng lạnh trên chiếu, một chiếc lá khô nằm cạnh mép nắng; 10s ánh sáng
        không đổi — ý shot là "đang nghĩ", không phải "đang diễn"; 16s nhịp cắt chuẩn bị
        rời khỏi phòng khách, chuyển sang không gian nghiên cứu
CUT     hoà tan sang không gian trừu tượng của 第2章 — đổi hẳn bối cảnh, đánh dấu chuyển chương

## S13 · C14 · 第2章 — 十五分の椅子
SCENE   Một chiếc ghế đơn giản đặt giữa không gian tối giản, ánh sáng đều dịu — không gian thí nghiệm
CAMERA  dolly-in chậm từ toàn cảnh không gian trống vào ghế, 35mm → 50mm
ELEMENT 0s không gian trung tính xám nhạt, không đồ vật thừa; 8s một chiếc ghế bọc vải đơn
        sắc ở giữa khung, ánh sáng từ trên xuống đều, không bóng gắt; 16s một xấp giấy đặt
        trên mặt bàn nhỏ cạnh ghế (gợi ý báo cáo nghiên cứu)
SFX     tiếng lật giấy một lần, ngắn
CUT     cắt sang cận xấp giấy ở S14

## S14 · C15–C16 · 第2章
SCENE   Cận xấp giấy nghiên cứu, ánh sáng dịu, rồi camera nhấc lên nhìn lại chiếc ghế trống
CAMERA  tilt-up chậm từ giấy lên ghế, 50mm
ELEMENT 0s trang giấy với dòng chữ mờ ảo gợi ý báo cáo khoa học (không cần đọc rõ chữ);
        8s máy nâng lên, ghế trống hiện ra rõ giữa không gian sáng đều — chuẩn bị hình dung
        thí nghiệm "ngồi một mình mười lăm phút"
CUT     cắt sang góc khác của cùng ghế ở S15 — đổi vị trí trong khung, tránh rập khuôn

## S15 · C17–C18 · 第2章
SCENE   Ghế nhìn từ góc chéo, một chiếc điện thoại và một cuốn sách đặt trên bàn nhỏ bên cạnh — chưa chạm tới
CAMERA  tĩnh, góc 3/4, 50mm, chủ thể lệch sang bên trái khung (không ở giữa)
ELEMENT 0s điện thoại và sách đặt gọn một góc bàn, không ai chạm vào; 8s ánh sáng không đổi,
        nhấn ý "không làm gì" — đây là bối cảnh trước khi bảng bốn hộp cảm xúc xuất hiện
CUT     cắt sang không gian trừu tượng bốn vùng sáng ở S16

## S16 · C19–C21 · 第2章
SCENE   Không gian trừu tượng: bốn vùng ánh sáng xuất hiện quanh ghế, phân theo cường độ và màu
CAMERA  tĩnh rộng, 24mm, ghế ở giữa bốn vùng sáng — bố cục đối xứng có chủ đích (duy nhất trong tập)
ELEMENT 0s vùng 1 hiện ra trên-trái: ánh sáng mạnh, ấm (vui/hào hứng); 6s vùng 2 trên-phải:
        ánh sáng mạnh, lạnh (giận/lo); 12s vùng 3 dưới-trái: ánh sáng dịu, ấm (bình thản/
        thư giãn); 18s vùng 4 dưới-phải: ánh sáng dịu, lạnh (cô đơn/trầm xuống) — bốn vùng
        cùng tồn tại, không vùng nào biến mất, chỉ cường độ khác nhau
CUT     giữ bố cục, cắt sang thí nghiệm 1 ở S17 (hai người minh hoạ bằng ánh sáng, không lộ mặt)

## S17 · C22–C24 · 第2章
SCENE   Hai vùng sáng song song: một ghế ngồi một mình, một ghế có một luồng sáng thứ hai (ẩn dụ người đối thoại) đến gần
CAMERA  pan ngang chậm từ ghế một mình sang ghế có luồng sáng thứ hai, 35mm
ELEMENT 0s ghế một mình, bốn vùng sáng quanh ghế (từ S16) bắt đầu vùng mạnh mờ dần nhẹ;
        10s ghế thứ hai, một luồng sáng ấm áp tới gần biểu thị "có người trò chuyện", bốn
        vùng quanh ghế này gần như không đổi cường độ
CUT     cắt sang cận so sánh trực tiếp hai chiếc ghế ở S18

## S18 · C25–C26 · 第2章
SCENE   Chia khung dọc: ghế một mình bên trái (vùng mạnh đang dịu xuống) / ghế có người bên phải (vùng mạnh giữ nguyên)
CAMERA  tĩnh, split-frame nhẹ (không phải hard split-screen kỹ xảo — hai không gian liền mạch trong cùng phòng thí nghiệm, camera đứng giữa)
ELEMENT 0s bên trái: vùng sáng mạnh-ấm và mạnh-lạnh cùng dịu xuống đồng thời, vùng dịu-ấm
        tăng lên; 10s bên phải: cả bốn vùng gần như đứng yên — đối chiếu rõ "chỉ người ngồi
        một mình mới có thay đổi"
CUT     cắt sang cận núm chỉnh âm lượng vật lý ở S19 (ẩn dụ radio)

## S19 · C27 · 第2章
SCENE   Cận một núm vặn âm lượng kiểu radio cũ, tay vặn nhẹ, đồng thời bốn vùng sáng ở hậu cảnh mờ dần đồng bộ
CAMERA  cận cảnh tĩnh, 85mm, tiêu cự nông, núm vặn chiếm tiền cảnh, vùng sáng ở hậu cảnh nhoè
ELEMENT 0s núm vặn ở mức cao; 6s tay vặn xuống chậm, hậu cảnh hai vùng sáng mạnh (ấm và
        lạnh) cùng mờ dần theo nhịp vặn — ẩn dụ trực tiếp cho lời thoại "vặn nhỏ đài"
SFX     ẩn dụ hình ảnh, không cần SFX cơ khí rõ — để nhạc nền/drone tự làm việc này
CUT     cắt sang không gian đọc sách ở S20

## S20 · C28–C29 · 第2章
SCENE   Một ghế khác, tay cầm một cuốn sách đang đọc, bốn vùng sáng quanh ghế phía sau cũng dịu dần giống S18
CAMERA  dolly nhẹ vòng quanh ghế, 50mm, từ tay cầm sách sang toàn cảnh vùng sáng
ELEMENT 0s tay lật trang sách; 8s bốn vùng sáng phía sau vẫn dịu xuống dù đang đọc — cho
        thấy kết quả giống hệt trường hợp không làm gì (thí nghiệm 2 cho kết quả tương đương)
CUT     dissolve sang cận dải nắng lạnh của phòng khách thứ Năm ở S21 (nối mạch suy nghĩ nhân vật)

## S21 · C30–C32 · 第2章
SCENE   Trở lại thoáng qua phòng khách thứ Năm (ánh sáng lạnh), cận tách trà và dải nắng — chỉ để neo suy nghĩ, không kể lại toàn cảnh
CAMERA  tĩnh, 50mm — lặp khung một phần của S09 nhưng cắt gọn hơn, không dựng lại toàn bộ chuỗi
ELEMENT 0s tách trà lạnh, dải nắng cứng — hình ảnh quen thuộc; 8s một vùng sáng mạnh-ấm
        (ẩn dụ từ S16, "vui vì sắp gặp bạn") mờ dần chồng nhẹ lên khung cảnh thật, rồi tắt hẳn
CUT     cắt sang không gian thí nghiệm trừu tượng trở lại ở S22

## S22 · C33–C34 · 第2章
SCENE   Không gian thí nghiệm, ghế một mình, bốn vùng sáng — nhưng lần này có thêm một chỉ dẫn hiện ra (gợi ý "điều kiện suy nghĩ")
CAMERA  tĩnh rộng, 35mm — lặp bố cục S16 để người xem nhận ra đang quay lại cùng khung thí nghiệm
ELEMENT 0s bốn vùng sáng như cũ; 8s một dải sáng mảnh mới xuất hiện phía trên ghế, phân
        nhánh thành hai hướng (ẩn dụ "được giao nghĩ điều gì" và "tự chọn điều để nghĩ")
CUT     cắt sang hai nhánh riêng biệt ở S23

## S23 · C35–C36 · 第2章
SCENE   Hai luồng sáng mảnh tách rời rõ: một luồng đi theo đường thẳng định trước, một luồng uốn tự do
CAMERA  pan ngang chậm nối hai luồng, 35mm
ELEMENT 0s luồng thứ nhất thẳng, đều — ẩn dụ "được yêu cầu nghĩ điều tích cực"; 8s luồng
        thứ hai uốn lượn tự nhiên hơn — ẩn dụ "tự chọn điều để nghĩ"; ở cuối luồng thứ hai,
        vùng sáng mạnh-ấm phía sau KHÔNG mờ đi (khác các shot trước) — điểm khác biệt then chốt
SFX     một tiếng chuông nhỏ, đơn, đúng lúc vùng mạnh-ấm giữ nguyên
CUT     cắt sang cận ghế trống, kết luận thị giác ở S24

## S24 · C37 · 第2章
SCENE   Cận ghế trống, ánh sáng đều, không còn bốn vùng nữa — chỉ còn một điểm sáng duy nhất phía trên ghế
CAMERA  tĩnh, 50mm, giữ lâu hơn bình thường — chốt lại luận điểm trước khi sang chương 3
ELEMENT 0s một điểm sáng duy nhất treo lơ lửng phía trên ghế trống, ổn định, không nhấp
        nháy — hình ảnh cô đọng "điều duy nhất khác biệt là tự mình nắm hay không"
CUT     hoà tan sang hình ảnh hai cánh cửa ở S25, mở đầu chương 3

## S25 · C38 · 第3章 — 入ってきた扉
SCENE   Một bức tường với hai cánh cửa giống hệt nhau, cùng kiểu gỗ, cùng kích thước, đặt cạnh nhau
CAMERA  tĩnh rộng, 28mm, đối xứng — nhấn ý "hai cửa như nhau nhìn từ ngoài"
ELEMENT 0s hai cánh cửa gỗ giống hệt, đóng kín, ánh sáng trung tính chiếu đều lên cả hai;
        8s không có nhãn chữ nào trên cửa — cố tình để trung tính, tránh gán nhãn quá sớm
SFX     tiếng cửa lùa xa xa khép lại (theo AUDIO DIRECTION)
CUT     cắt sang cửa bên trái mở ra ở S26

## S26 · C39–C41 · 第3章
SCENE   Cánh cửa bên trái tự mở ra từ bên trong (như có tay đẩy từ phía trong phòng), ánh sáng ấm lọt ra
CAMERA  dolly nhẹ tiến về phía cửa đang mở, 35mm
ELEMENT 0s cửa hé mở, một dải sáng ấm lọt qua khe cửa; 8s cửa mở rộng hơn, lộ ra một phần
        nội thất ấm áp bên trong (thoáng thấy ghế, ánh nắng — gợi lại phòng khách thứ Ba);
        16s cửa dừng ở trạng thái mở vừa đủ, không có ai bước ra hình — chỉ ánh sáng đại diện
CUT     cắt sang cửa bên phải ở S27, đối lập trực tiếp

## S27 · C42 · 第3章
SCENE   Cánh cửa bên phải bị đẩy mở từ bên ngoài (một lực đẩy vào, không phải tự mở từ trong), ánh sáng lạnh tràn qua
CAMERA  dolly nhẹ tiến về phía cửa, 35mm — cùng tốc độ với S26 để so sánh công bằng
ELEMENT 0s cửa bật mở đột ngột hơn (không phải bạo lực, chỉ là "không phải tự ý"), ánh
        sáng lạnh tràn qua khe; 8s lộ ra CÙNG nội thất bên trong như cửa trái — cùng ghế,
        cùng bố cục — nhưng ánh sáng và chất liệu đã lạnh, cứng hơn
CUT     cắt sang cận hai cánh cửa đứng cạnh nhau, cùng mở, ở S28

## S28 · C43–C45 · 第3章
SCENE   Toàn cảnh cả hai cánh cửa cùng mở, hai luồng sáng (ấm bên trái, lạnh bên phải) chiếu vào cùng một khoảng sàn giữa
CAMERA  tĩnh rộng, 24mm — bố cục đối xứng có chủ đích lần hai trong tập (cân bằng với S16)
ELEMENT 0s hai luồng sáng gặp nhau ở khoảng sàn giữa, ranh giới mềm không có đường kẻ cứng;
        10s một chữ nhỏ xuất hiện mờ dưới mỗi luồng sáng khi lời thoại nhắc "tự chủ" —
        không phải phụ đề, chỉ là một điểm nhấn ánh sáng, không chữ latinh/kanji chi tiết
CUT     cắt sang toàn cảnh phòng khách quen thuộc ở S29, nối về nội dung chính

## S29 · C46–C48 · 第3章
SCENE   Toàn cảnh phòng khách (dùng lại bố cục S01/S06), nhưng hai cánh cửa mờ ảo chồng lên hai góc mép khung — một mờ ấm, một mờ lạnh
CAMERA  tĩnh, 24mm, giữ lâu — đây là shot chốt ẩn dụ trung tâm của toàn tập
ELEMENT 0s phòng khách hiện rõ, trung tính (không ấm không lạnh hẳn); 10s cửa trái (ấm)
        hiện mờ ở góc trái khung, cửa phải (lạnh) hiện mờ ở góc phải — cả hai chồng nhẹ,
        không che khuất phòng thật; 18s hai cửa mờ dần tan biến, chỉ còn phòng khách
CUT     cắt sang cận ghế đơn ở S30, chuyển ý sang nghiên cứu thứ hai (Hatano)

## S30 · C50–C53 · 第3章
SCENE   Một phòng chờ nhỏ, giản dị — một ghế, một khung cửa sổ, ánh sáng trung tính dịu (không gian nghiên cứu thứ hai, tách biệt phòng khách và phòng thí nghiệm trước)
CAMERA  dolly-in chậm, 35mm → 50mm, từ toàn cảnh phòng chờ vào ghế
ELEMENT 0s phòng chờ đơn giản, một cửa sổ nhỏ, ánh sáng ban ngày trung tính; 10s một chiếc
        đồng hồ treo tường nhỏ đếm thời gian im lặng (không phải đồng hồ quả lắc của phòng
        khách — tránh trộn hai đồng hồ); 18s ghế trống, không điện thoại trong khung
CUT     cắt sang cận màn hình tin tức sáng gần đó ở S31

## S31 · C54–C56 · 第3章
SCENE   Cận một màn hình nhỏ hiển thị tin tức đang sáng cạnh ghế trống, đối lập với khoảng trống của việc "chỉ ngồi chờ"
CAMERA  tĩnh, 50mm, tiêu cự nông — màn hình rõ, ghế trống phía sau nhoè nhẹ
ELEMENT 0s màn hình sáng với các khối chữ tin tức mờ (không đọc rõ nội dung); 8s màn hình
        tắt dần, ghế trống ở tiêu cự rõ hơn — hình ảnh gợi "chọn xem tin, dù trải nghiệm
        thực tế của việc ngồi yên không thua kém"
CUT     dissolve sang trở lại phòng khách thứ Năm, nối về câu chuyện của người kể, ở S32

## S32 · C57–C64 · 第3章 (giới hạn nghiên cứu)
SCENE   Trở lại không gian thí nghiệm tối giản (như S13), ánh sáng dịu, xấp giấy nghiên cứu gấp lại
CAMERA  tĩnh, 50mm, tối giản chuyển động — giữ đúng nhịp "giọng chậm lại, thành thật" theo AUDIO DIRECTION
ELEMENT 0s xấp giấy đặt gọn trên bàn, ghế trống; 10s một khoảng không nhẹ phía trên ghế
        không còn điểm sáng ổn định của S24 nữa — thay bằng ánh sáng mờ hơn, ngập ngừng
        (ẩn dụ thị giác cho "chưa rõ ràng, còn giới hạn"); 20s ánh sáng không tắt hẳn,
        chỉ dịu đi — tránh gợi cảm giác phủ nhận toàn bộ nghiên cứu
CUT     cắt sang phòng khách thứ Năm ở S33, mở đầu chương 4

## S33 · C65–C68 · 第4章 — 帰り道
SCENE   Phòng khách thứ Năm (ánh sáng lạnh, như S06), giờ khoảng mười một giờ trưa, tay lấy điện thoại từ ngăn kéo lần nữa
CAMERA  lặp khung của S04 (tĩnh, 50mm, khung dọc ngăn kéo) — đối chiếu trực tiếp hành động
ELEMENT 0s ngăn kéo mở, ánh sáng lạnh chiếu vào gỗ; 8s tay đặt điện thoại vào, đẩy khép lại
        — CÙNG cử chỉ như S04 nhưng bối cảnh ánh sáng vẫn lạnh, chưa đổi; 16s tay chuyển
        sang rót nước vào ấm trà, hơi nước bốc lên nhẹ
SFX     tiếng ngăn kéo khép, tiếng rót nước (theo AUDIO DIRECTION)
CUT     cắt sang cận đồng hồ quả lắc ở S34

## S34 · C69–C71 · 第4章
SCENE   Cận đồng hồ quả lắc, kim giây tiếp tục — bắt đầu quá trình chất liệu ánh sáng dịu chuyển
CAMERA  tĩnh kéo dài, 85mm, giữ đúng một khung suốt shot để thấy chuyển động tinh vi của ánh sáng
ELEMENT 0s mặt đồng hồ vẫn ánh lạnh, viền bóng cứng; 10s màu sắc bắt đầu ấm lên RẤT nhẹ,
        viền bóng bắt đầu mềm đi một phần — CHỈ NỬA ĐƯỜNG, không về hoàn toàn ấm như thứ Ba;
        20s giữ ở trạng thái lưng chừng này, không tiến thêm
SFX     âm sắc kim giây dịu bớt phần cứng, không về hẳn mềm như thứ Ba
CUT     cắt sang toàn cảnh phòng ở S35

## S35 · C72–C74 · 第4章
SCENE   Toàn cảnh phòng khách, trạng thái ánh sáng lưng chừng (nửa ấm nửa lạnh) duy trì, tay đặt quanh tách trà mới
CAMERA  tĩnh rộng, 24mm — lặp góc của S01/S06/S29 lần cuối, khép vòng hình ảnh của tập
ELEMENT 0s phòng ở trạng thái ánh sáng lưng chừng; 12s dải nắng hình cửa sổ trên chiếu di
        chuyển rất nhẹ (thời gian trôi, gần trưa) — chuyển động duy nhất; 20s không có gì
        khác thay đổi thêm — nhấn ý "không phải mọi thứ đổi, chỉ một phần"
CUT     cắt sang cận dải nắng ở S36

## S36 · C75–C76 · 第4章
SCENE   Cận dải nắng hình cửa sổ trên chiếu tatami, gần trùng khung mở đầu S02/S09, ánh sáng đã gần trở lại ấm của thứ Ba
CAMERA  tĩnh, 50mm — lặp gần như nguyên khung của S02, khép vòng trực tiếp với cảnh mở tập
ELEMENT 0s dải nắng đã dịch chuyển vị trí nhẹ so với các shot trước (gần trưa); 10s màu
        sắc và bóng đổ gần về mức ấm/mềm của thứ Ba (theo AUDIO DIRECTION "gần trở lại
        hoàn toàn"); 20s giữ hình ảnh tĩnh, để câu thoại cuối vang lên trên nền hình ảnh
        không đổi thêm — phòng không đổi, chỉ ánh sáng đã dịch
CUT     giữ hình, mờ dần sang đen — kết tập
```

---

## GHI CHÚ DỰNG HÌNH

**Nguyên tắc cốt lõi (đừng vi phạm):** đây là MỘT phòng khách được dựng MỘT LẦN về hình học.
Thứ Ba và thứ Năm không phải hai model khác nhau — chỉ đổi light rig + material shader
(nhiệt độ màu, độ cứng bóng đổ, độ nhám/ánh bề mặt). Nếu visual-builder dựng hai phòng khác
hình học dù chỉ lệch một milimet vị trí đồ vật, ẩn dụ trung tâm của tập vỡ.

**Bảng màu:**
- Thứ Ba / tự chọn: 2700-2900K, bóng khuếch tán (soft shadow, penumbra rộng), bề mặt vải/gỗ
  có specular thấp, roughness cao (mờ, mềm)
- Thứ Năm / bị ép: 5500-6000K, bóng cứng (hard shadow, viền sắc), bề mặt có specular nhỉnh
  hơn, roughness thấp hơn một chút (không bóng loáng — chỉ "khô hơn", đừng cường điệu thành
  kim loại)
- Trạng thái lưng chừng cuối tập (S34-S36): nội suy ~50-60% từ lạnh về ấm, KHÔNG bao giờ chạm
  100% — đúng lời thoại "không thể nói đã giống thứ Ba"

**Không gian thí nghiệm (第2章, 第3章 đoạn Hatano):** tối giản, ánh sáng trung tính đều, không
mang bảng màu ấm/lạnh của phòng khách — đây là không gian ẩn dụ trừu tượng, phải tách biệt thị
giác rõ ràng để người xem không nhầm với phòng khách chính.

**Bốn vùng sáng (S16-S24):** vị trí cố định trong khung (trên-trái mạnh-ấm, trên-phải
mạnh-lạnh, dưới-trái dịu-ấm, dưới-phải dịu-lạnh) — giữ nguyên vị trí này ở MỌI shot có bốn
vùng để người xem quen mắt, không hoán đổi vị trí giữa các shot.

**Motif lặp cần tránh dùng quá tay:** dải nắng hình cửa sổ trên chiếu là hình ảnh chốt của cả
mở đầu và kết thúc — chỉ nên lặp lại đúng ở S02, S09, S36 (và thoáng ở S11-S12). Đừng chèn
thêm ở các shot khác kẻo mất giá trị hình ảnh biểu tượng khi nó xuất hiện lần cuối.

**Không lộ mặt nhân vật:** toàn tập chỉ thấy tay, ghế, đồ vật, ánh sáng — đúng ngôi kể 私 thuần
thính giác. Không dựng gương mặt, không bóng người đầy đủ.

**Không dựng cảnh gây sợ / không dựng người thứ hai:** đúng giới hạn packaging — không có
nhân vật thứ hai xuất hiện thành hình trong bất kỳ shot nào (kể cả ẩn dụ "người trò chuyện" ở
S17 chỉ dựng bằng ánh sáng, không hình người).

**Đồng hồ:** đồng hồ quả lắc phòng khách (S02, S06, S34...) và đồng hồ treo tường phòng chờ
Hatano (S30) là HAI vật thể khác nhau, đừng lẫn — tránh gây hiểu nhầm là cùng một nghiên cứu.

**Cắt cảnh:** không dưới 4 giây; mỗi shot có ít nhất một mốc thay đổi nhìn thấy mỗi 6-8 giây,
đã ghi trong dòng ELEMENT bằng mốc thời gian ước lượng — visual-builder khớp theo cue thật
của timing.json, số giây ở đây chỉ là ý định nhịp, không phải giá trị cứng.
