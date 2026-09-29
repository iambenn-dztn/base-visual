# STORYBOARD — 魂はどこから来てどこへ行くのか｜十王経が描く四十九日の旅

## METADATA

- **Slug:** `tamashii-no-tabi`
- **Tổng thời lượng dự kiến:** ~25:42 (**1.542s**) = 7.526 ký tự ÷ 4,89 ký tự/giây (keita, speed 0.95)
  + 5,0s ba khoảng `gap` có chủ ý.
  ⚠ Con số này **chỉ để căn nhịp**. Thời lượng CHUẨN lấy từ `projects/tamashii-no-tabi/timing.json`
  sau khâu voice. **Mọi shot neo vào mã cue, không vào giây.**
- **Số shot:** **48** (S01–S48). Trung bình ~32s/shot — dài hơn tập vũ trụ cũ vì tệp 50-60+ xem TV.
  Shot ngắn nhất ~10s (S30 「閻魔王です。」), dài nhất ~55s.
- **Số cue:** 130 (C01–C130), 4 chương. Nhãn chương ở C01 / C16 / C44 / C108.
- **Nhạc nền:** một track chung `assets/bgm.mp3` cho cả tập. Không ghi audio theo shot.
  Chỉ shot có dòng `SFX` mới cần hiệu ứng riêng (lấy từ [AUDIO DIRECTION] của kịch bản).
- **Phụ đề:** KHÔNG chép tay. Sinh từ `voice/*.srt` bằng `scripts/gen-captions.mjs`
  (**≤22 ký tự toàn角, 1 dòng, ≥56px**). Font **BIZ UDPGothic** — xem GHI CHÚ mục 8.
- **Texture có sẵn:** `assets/tex/water_4k.png` (mặt nước 三途の川, S18–S24). **Tất cả còn lại
  dựng procedural** — không có texture 和室, 位牌, 仏壇, giấy, sương, đá núi. Xem GHI CHÚ mục 2–5.

### Loại visual theo chương

| Chương | Cue | Loại | Nội dung hình |
|---|---|---|---|
| **第1章 入口** | C01–C15 | *live-object* (phòng thật) | 和室 đêm, 仏壇 + 位牌, một ngọn nến, khói hương, đĩa ぼたもち trên 座卓, quyển sách cũ |
| **第2章 どこから来たのか** | C16–C43 | *procedural/graph* (cấu trúc) | vòng 輪廻 phát sáng, khe hở 中有 giữa hai kiếp, dải bảy vạch, trang luận thư 倶舎論 bốn thuyết, bản đồ lan truyền Ấn→Trung→Nhật |
| **第3章 どこへ行くのか** | C44–C107 | *procedural + live-object* (cao trào) | con đường trong sương, bảy cánh cổng, 死出の山, 三途の川 ba lối qua, 衣領樹, cân, 浄玻璃の鏡, vòng 六道, bảng 本地仏 |
| **第4章 帰り道** | C108–C130 | *live-object* (đúng phòng 第1章) | cùng góc máy S02, nến đã ngắn, bảy ngọn đèn hành lang thời gian, cái kết |

### Bốn cao trào hình (đầu tư nhất)

1. **S13 · C30–C31** — dòng 「有餘師」 sáng lên giữa bốn thuyết, rồi một mình nó kéo dài thành
   lịch treo tường của nhà người kể. Cú lật số 49.
2. **S20–S22 · C54–C59** — ba lối qua 三途の川 hiện cùng lúc trong một khung: cầu vàng, chỗ cạn,
   vực sâu. Trích nguyên văn 「所渡有三」.
3. **S37–S39 · C94–C100** — 閻魔王 và 地蔵菩薩 chồng lên nhau trong cùng một hình bóng. **Cú lật của tập.**
4. **S43 · C109–C110** — về đúng góc máy S02, nến ngắn hơn. **Vòng tròn khép bằng hình.**

### Khung nguồn thumbnail

**S17 (C46–C47)** được dựng đúng concept bìa đã duyệt (cặp 1): con đường sáng mờ dần vào sương,
bảy vệt sáng nhỏ xa dần, không có người, không có hình gây sợ. Render agent bắt frame ở khoảng
giữa S17 làm nguồn cho `output/_assets/tamashii-no-tabi/`.

### ⚠ Ràng buộc tuyệt đối của tập này

- **KHÔNG cảnh gây sợ.** Không xác, không máu, không quỷ, không bóng ma, không mặt người biến dạng,
  không lửa địa ngục chiếm khung. 閻魔王 và 奪衣婆 dựng như **tượng gỗ trong chùa** (im, không cử động
  mặt), không phải sinh vật sống. Kênh giải thích, không doạ.
- **KHÔNG dựng 賽の河原** (packaging ràng buộc 3). Bãi sông chỉ là bãi đá trống, không có trẻ con,
  không có tháp đá.
- **Chính xác nghi lễ:** 位牌 **đứng thẳng** trên 仏壇 (không nằm, không nghiêng); nến và hương
  **cháy từ trên xuống** (sáp chảy xuống, tàn hương rơi xuống, ngọn lửa hướng lên); 仏壇 mở cửa
  hai cánh; đĩa ぼたもち đặt trên 座卓 **thấp** ở tiền cảnh, không đặt lên 仏壇.
- **Không rung máy ảo, không zoom giật, không cắt nhanh hơn 4 giây.**

---

# 第1章 — 入口 (C01–C15) · 7 shot

Phòng là nhân vật. Cả chương chỉ có **một nguồn sáng: ngọn nến**. Không bật đèn trần.
Camera ở **độ cao mắt người đang quỳ** (~0,75m) suốt chương — đây là ngôi 私.

## S01 · C01–C02 · live-object
SCENE   Đen hoàn toàn. Một đốm lửa nến xuất hiện giữa khung, rất nhỏ. Bóng tối quanh nó dần
        có hình: mép chiếu tatami, chân 座卓, rồi đĩa ぼたもち chưa ai đụng vào
CAMERA  tĩnh tuyệt đối 50mm, cao 0,75m ngang tầm người quỳ; fade-in từ đen 3s; chủ thể (ngọn lửa)
        đặt ở giao điểm 1/3 **trên-phải**, không ở giữa — cố ý chừa 2/3 khung trái cho bóng tối
ELEMENT 0s chỉ ngọn lửa nến (cao 9mm, dao động sin biên độ 3% chu kỳ 2,1s — hàm thuần của t, không
        random theo frame) · 6s viền tatami hiện ra ở mép dưới khung, đường cỏ dệt chạy ngang ·
        12s chân 座卓 gỗ sẫm vào khung trái · 18s đĩa ぼたもち: **bốn viên**, sơn mài đen, lớp あんこ
        ánh nhẹ, KHÔNG bị ăn dở — chi tiết "chưa đụng đũa" phải đọc được · 24s nhìn thấy cả phần
        chiếu trống chỗ khách vừa ngồi (hằn vết 座布団 nhưng 座布団 đã cất)
        Ánh sáng: **duy nhất CANDLE_WARM** (1.0, 0.78, 0.45), suy giảm nghịch đảo bình phương,
        bán kính hữu dụng 1,4m. Ngoài bán kính đó là đen tuyệt đối, không fill
SFX     ドローン thấp dài vào từ 0s. Một tiếng 鈴 xa, **đúng một lần**, ở ~4s rồi tắt hẳn
CUT     giữ liên tục sang S02 (không cắt — camera bắt đầu quay)

## S02 · C03–C04 · live-object ⭐ GÓC MÁY MỎ NEO
SCENE   Camera quay chậm sang phải, 仏壇 vào khung. 位牌 đứng thẳng bên trong, phía trước là
        ngọn nến đang cháy — **thân nến còn rất dài**. Đây là góc máy sẽ trở lại ở 第4章
CAMERA  pan phải 22° rất chậm quanh trục đứng, 50mm, tốc độ không đổi; dừng khi 仏壇 nằm ở
        **1/3 phải**, 座卓 và đĩa ぼたもち còn nhìn thấy ở góc dưới-trái. **GHI LẠI ĐÚNG THÔNG SỐ
        NÀY** — S43 phải khớp từng độ
ELEMENT 0s pan bắt đầu, bóng tối trượt qua · 7s cánh cửa 仏壇 mở hai bên, khung gỗ sơn mài đen
        viền vàng mờ · 12s **位牌 ĐỨNG THẲNG** trên bậc trong cùng: tấm gỗ đen cao 18cm, chân đế
        hình hoa sen, mặt trước có chữ vàng mờ (không đọc được rõ — cố ý, đây là nhà bất kỳ) ·
        18s ngọn nến ở bậc trước, **chiều cao thân nến = 72% chiều cao ban đầu** ⚠ CON SỐ MỎ NEO,
        S43 dùng 28% · 24s khói hương một sợi mảnh bốc lên từ 香炉 bên phải, uốn theo FBM chậm rồi
        tan ở độ cao 30cm; que hương **cháy từ đầu trên xuống**, tàn trắng cong xuống dưới
SFX     tiếng bấc nến nổ tách một tiếng nhỏ ở ~20s
CUT     giữ liên tục sang S03

## S03 · C05–C07 · live-object
SCENE   Cận cảnh mặt trước 位牌 và phần nến, ở góc thấp hơn — như người ngồi đã cúi xuống.
        Khung lệch trái, 位牌 ở **1/3 trái**, phần phải là bóng tối và một mảng tường vách giấy
CAMERA  cut sang cỡ cận 85mm, hạ thấp 15cm, trục hơi chếch 20° từ trái; dolly-in 8% cực chậm
ELEMENT 0s 位牌 cận, vân gỗ sơn mài bắt sáng nến thành một vệt dọc · 8s ánh nến dao động làm
        vệt sáng trượt chậm trên mặt 位牌 (chuyển động duy nhất trong khung) · 16s vách 障子
        phía sau hiện mờ: khung ô vuông, giấy trắng ngà, bên ngoài là đêm đen ·
        24s ở C07 (câu hỏi「何の最後なんでしょうか」) — dolly dừng, **toàn khung đứng im 3s**,
        ngọn lửa cũng hạ thấp xuống 70% rồi trở lại. Đây là nhịp nghỉ, không phải lỗi
SFX     C07: ドローン hạ nửa cung (theo [AUDIO DIRECTION])
CUT     hoà tan chậm 1,5s sang S04

## S04 · C08–C09 · live-object/procedural
SCENE   Vẫn phòng đó nhưng camera lùi ra xa và lên cao — căn phòng trở nên rộng và trống.
        Chỗ khách vừa ngồi hiện ra: nhiều hình chữ nhật hằn trên chiếu, không còn ai
CAMERA  crane-up + dolly-back đồng thời, 50mm → 35mm, từ cao 0,75m lên 1,6m; kết ở góc chếch
        xuống 25°. Chủ thể (仏壇) trôi dần về **1/4 dưới-phải**
ELEMENT 0s khung cận · 8s bốn vệt hằn 座布団 trên tatami lộ ra ở nửa trái khung, sáng yếu bởi nến ·
        16s quầng sáng nến chỉ với tới 1,4m — phần phòng còn lại chìm hẳn, **tỉ lệ sáng/tối ≈ 1:4** ·
        24s góc phòng xa hiện một kệ sách thấp, gáy sách cũ (chuẩn bị cho C13) · 30s camera dừng
CUT     cắt thẳng sang S05 ở chữ 「七日ごと」 (C10)

## S05 · C10–C12 · procedural/graph
SCENE   Tờ lịch treo tường loại カレンダー tháng, treo bên vách. Bảy ô có dấu bút đỏ tròn.
        Mỗi khi nhắc một mốc, một ô sáng lên rồi mờ đi — như hồi tưởng, không phải đồ hoạ thông tin
CAMERA  tĩnh 85mm chếch 15° (lịch không song song mặt phẳng ảnh — tránh cảm giác "biểu đồ"),
        drift ngang 2% sang trái suốt shot
ELEMENT 0s lịch trong bóng tối, chỉ mép giấy bắt sáng nến · 6s ô 初七日 sáng lên, dấu tròn bút đỏ
        vẽ tay (nét không đều, có chỗ đè hai lần) · 12s ô 二七日 · 18s ô 三七日 — **ba ô sáng theo
        thứ tự, mỗi ô giữ sáng 4s rồi hạ xuống 40%** · 24s bốn ô còn lại hiện mờ hơn (chưa kể tên) ·
        30s cả bảy ô cùng sáng một nhịp rồi về mờ
        ⚠ Khoảng cách bảy dấu **đều nhau đúng 7 ô lịch** — người 60+ sẽ đếm. Chữ: BIZ UDPGothic,
        chỉ 「初七日」「二七日」「三七日」, không thêm nhãn tiếng Anh
SFX     tiếng bấc nến ở C12
CUT     cắt sang S06 khi tay với lấy sách

## S06 · C13–C14 · live-object
SCENE   Bàn tay kéo một quyển sách cũ ra khỏi khe bên cạnh 仏壇. Sách bìa vải sờn, gáy long,
        giấy ngả vàng. Mở ra trên 座卓, cạnh đĩa ぼたもち
CAMERA  cut sang góc cao nhìn xuống 45°, 50mm, **chủ thể ở 1/3 dưới-trái**; sau đó dolly-in
        chậm vào trang sách đang mở
ELEMENT 0s bàn tay (chỉ thấy tới cổ tay, không thấy mặt — người kể không có gương mặt trong cả tập)
        rút sách ra · 8s sách đặt xuống 座卓, bụi mỏng bay lên bắt sáng nến (hạt bụi chuyển động
        theo hàm thuần của t, seeded PRNG) · 16s mở bìa — giấy ngả vàng, mép quăn, có một tờ giấy
        kẹp giữa · 24s trang trong: **chữ dọc, khối kanji dày, không đọc rõ từng chữ** trừ một dòng
        tiêu đề sẽ sáng lên · 30s trên trang hiện một hình vẽ mộc bản: đường núi và bảy cái cổng
        — **đây là "地図" mà C14 nói tới**, vẽ nét mực, không tô màu
SFX     tiếng giấy sột soạt
CUT     hoà tan 2s sang S07 — trang sách nở rộng ra thành không gian

## S07 · C15 · procedural (chuyển chương)
SCENE   Hình vẽ mộc bản trên trang sách lớn dần cho tới khi chiếm cả khung, rồi các nét mực
        tách khỏi mặt giấy và trở thành không gian ba chiều: con đường, sương, ánh sáng xa
CAMERA  dolly-in xuyên qua mặt giấy, 85mm → 24mm (mở rộng góc nhìn = mở rộng không gian),
        không dừng cho tới hết shot
ELEMENT 0s nét mực phẳng trên giấy · 6s thớ giấy phóng to thành địa hình (sợi giấy → sương) ·
        12s các nét mực nâng khỏi mặt phẳng, có độ sâu · 18s màu chuyển từ **giấy ngả vàng
        sang lam-xám sương mù** (PAPER_SEPIA → MIST_BLUE, xem GHI CHÚ mục 1) · 24s không gian mở
        hoàn toàn, một con đường mờ chạy về phía xa
SFX     ドローン mở rộng, thêm bè thấp (theo [AUDIO DIRECTION] C15)
CUT     `gap: 1.5` — **giữ khung tĩnh trong khoảng lặng**, không fade đen. Sang 第2章

---

# 第2章 — どこから来たのか (C16–C43) · 11 shot

Chương của **cấu trúc**, không phải của cảnh. Hình ở đây là sơ đồ ba chiều có chất liệu — vòng,
dải, trang sách — chứ không phải đồ hoạ phẳng. Bảng màu chuyển sang **lam-xám + vàng giấy**.

## S08 · C16–C18 · procedural ⭐ vòng 輪廻
SCENE   Một vòng tròn lớn, nằm nghiêng trong không gian tối, đang quay chậm. Trên vòng có những
        điểm sáng — mỗi điểm là một lần sinh ra
CAMERA  từ vị trí hơi cao nhìn xuống 30°, 35mm; orbit chậm quanh vòng 25° suốt shot, **ngược
        chiều quay của vòng** để thấy rõ nó đang quay
ELEMENT 0s một đoạn thẳng sáng chạy ngang khung (「一本の線ではありません」) · 8s đoạn thẳng
        uốn cong hai đầu, gặp nhau thành vòng kín — **chuyển động liên tục, không cắt** ·
        16s vòng bắt đầu quay: đường kính 6m ảo, tốc độ 6°/giây, **chiều kim đồng hồ khi nhìn từ
        trên xuống** (giữ nhất quán cả tập) · 24s trên vòng hiện 5 điểm sáng cách đều, mỗi điểm
        là một quầng nhỏ · 32s ở C18 một điểm sáng **tắt** rồi sáng lại ở vị trí kế tiếp —
        không biến mất khỏi vòng. Đây là「終点ではありません」
        Chữ 「輪廻」 hiện một lần ở mép dưới-trái, BIZ UDPGothic, fade vào 1s giữ 4s fade ra
CUT     giữ liên tục sang S09 — camera zoom vào khoảng giữa hai điểm sáng

## S09 · C19–C22 · procedural ⭐ khe hở 中有
SCENE   Phóng to khoảng trống giữa hai điểm sáng trên vòng. Có một đoạn vòng **không phát sáng** —
        khe hở. Đó là 中有
CAMERA  dolly-in dọc theo cung vòng, 35mm → 85mm; giữ đoạn khe ở **1/3 trái** khung, không
        ở giữa; cuối shot xoay 15° để nhìn khe từ cạnh bên
ELEMENT 0s hai điểm sáng, giữa chúng là đoạn tối · 8s đoạn tối được đánh dấu bằng hai vạch
        mảnh ở hai đầu — **có ranh giới rõ, không mơ hồ** · 16s chữ 「中有」 rồi 「中陰」 hiện lần
        lượt phía trên khe (BIZ UDPGothic, hai chữ không chồng nhau) · 24s ở C21 chữ Latin
        **antarābhava** hiện dưới, rồi tách thành hai phần bằng một vạch đứng:
        `antarā` | `bhava`, dưới mỗi phần là 「中間の」「生存の状態」 · 32s ba nhãn nối nhau bằng
        đường mảnh chạy từ trái sang phải: インド → 中国 → 日本, mỗi nhãn sáng lên khi tới lượt
        ⚠ Dấu macron trên chữ **ā** phải hiện đúng — kiểm glyph trước khi render
CUT     cắt sang S10 ở chữ 「私はこの言葉を知ったとき」 (C23)

## S10 · C23–C25 · procedural + live-object
SCENE   Khe hở 中有 vẫn ở trái khung, nhưng phía phải khung mờ hiện lại căn phòng đêm — 位牌,
        ngọn nến, người ngồi. **Hai thứ cùng trong một khung**: trạng thái "ở giữa" của người đi
        và của người ở lại
CAMERA  tĩnh 50mm. Không chuyển động camera cả shot — thay đổi đến từ độ mờ của hai lớp
ELEMENT 0s chỉ có khe hở, phải khung đen · 10s phòng đêm mờ hiện ở phải khung, opacity 0 → 0,35 ·
        20s ở C25 hai lớp cân bằng, **opacity bằng nhau 0,5/0,5** — khe hở và căn phòng chồng
        lên nhau ở vùng giữa khung · 28s hai vạch ranh giới của khe hở **trượt sang phải** đến khi
        ôm lấy cả căn phòng: người ở lại cũng nằm trong khe
        ⚠ Đây là shot ý niệm — giữ **rất chậm**, không thêm chi tiết mới, không thêm chữ
SFX     bỏ hết ドローン, chỉ còn tiếng phòng (theo [AUDIO DIRECTION] C26 chuẩn bị)
CUT     hoà tan 2s sang S11

## S11 · C26 · procedural ⭐ dải bảy vạch
SCENE   Khe hở duỗi thẳng ra thành một **dải ngang** chạy suốt khung. Bảy vạch chia nó thành
        bảy đoạn đều nhau
CAMERA  tĩnh 35mm chính diện, dải nằm ở **1/3 dưới** khung (không ở giữa); drift ngang 3% sang trái
ELEMENT 0s cung vòng duỗi thẳng thành dải (morph liên tục 3s) · 6s vạch thứ nhất rơi xuống chia
        dải · 9s–24s sáu vạch còn lại rơi xuống lần lượt, **cách nhau 2,5s, đều tuyệt đối** —
        người xem phải đếm được tới bảy · 26s nhãn 「7×7 = 49」 hiện ở mép phải dải
        ⚠ Bảy vạch = bảy khoảng, không phải tám. Kiểm lại: dải chia thành **7 đoạn bằng nhau**
CUT     cắt sang S12

## S12 · C27–C29 · live-object/graph ⭐ trang 倶舎論
SCENE   Trang sách chữ dọc mở ra. Ngón tay dò theo dòng. Bốn thuyết về thời hạn 中有 hiện lần lượt
        dọc bên phải trang
CAMERA  góc cao nhìn xuống 50°, 85mm, trang sách chếch 12° so với mặt phẳng ảnh; dolly-in 6% chậm
ELEMENT 0s trang giấy ngả vàng, chữ dọc mờ, tiêu đề 「倶舎論　巻九　分別世品」 sáng ở mép trên ·
        8s ngón tay (chỉ ngón trỏ và một phần bàn tay) đặt lên dòng đầu, dò xuống với tốc độ
        đọc thật · 14s thuyết 1 hiện bên phải: 「大德 — 期限は決まっていない」 · 20s thuyết 2:
        「世友 — 長くて七日」 · 26s thuyết 3: 「毘婆沙師 — もっとずっと短い」 · 32s ba thuyết cùng
        đứng, **chiều cao chữ bằng nhau, độ sáng bằng nhau** — chưa có thuyết nào nổi bật
        ⚠ Thứ tự nêu trong lời đọc C29: 大德 → 世友 → 毘婆沙師. Bám đúng thứ tự đó, không đảo
CUT     giữ liên tục sang S13 — ngón tay chưa nhấc lên

## S13 · C30–C32 · graph ⭐⭐ CAO TRÀO 1 — 有餘師
SCENE   Dòng thứ tư hiện ra **chen vào giữa** ba dòng đã có, nhỏ hơn, mờ hơn: 「有餘師 — 四十九日」.
        Rồi cả trang tối đi, chỉ còn dòng đó sáng. Nó kéo dài ra khỏi trang, xuyên qua hai nghìn năm,
        và trở thành tờ lịch treo tường của S05
CAMERA  dolly-in 85mm → 135mm tới cận dòng 有餘師; ở C32 camera **dừng hẳn 4s** (tay người kể dừng),
        rồi pull-back rộng để thấy đường thời gian
ELEMENT 0s dòng thứ tư trồi lên giữa ba dòng kia, **chữ nhỏ hơn 15%, độ sáng chỉ 60%** — phải
        nhìn ra ngay nó là dòng phụ · 8s chú thích nhỏ hiện dưới: 「ほかにこう言う先生もいる」 ·
        14s ba dòng kia mờ xuống 20%, dòng 有餘師 sáng lên 100% — **đảo ngược thứ bậc, đây là cú lật** ·
        20s camera dừng (C32「手が止まりました」) — TOÀN KHUNG ĐỨNG IM, chỉ ngọn lửa nến ngoài khung
        hắt sáng dao động trên giấy · 26s dòng chữ kéo dài thành một sợi sáng mảnh chạy sang phải ·
        34s pull-back: sợi sáng băng qua một trục thời gian có ba mốc **インド → 中国 → 日本**,
        rồi kết thúc đúng ở **tờ lịch của S05** (cùng hình, cùng bảy dấu bút đỏ)
        ⚠ Không dùng chữ 「嘘」「間違い」 hay dấu X đỏ ở bất kỳ đâu. Đây là「長い道のりを来た」,
        **không phải「あなたは騙されていた」** (luật 4d)
CUT     hoà tan chậm 2s sang S14

## S14 · C33–C34 · procedural
SCENE   Đường thời gian nhìn từ bên cạnh: sợi sáng đi từ Ấn Độ qua biển tới Nhật Bản. Không phải
        bản đồ địa lý chi tiết — là ba khối đất mờ trên nền lam, sợi sáng nối chúng
CAMERA  travelling ngang từ trái sang phải, đi cùng đầu sợi sáng, 50mm; sợi sáng luôn ở
        **1/3 trái** khung, phần khung phải là chỗ chưa tới
ELEMENT 0s khối đất Ấn Độ, nhiều sợi sáng mảnh cùng xuất phát (**các thuyết khác nhau**) ·
        8s đi qua biển, **lần lượt các sợi tắt dần** — còn ba, còn hai · 18s tới khối Trung Quốc,
        chỉ còn **một sợi** · 26s qua biển lần hai tới khối Nhật Bản · 34s sợi sáng chạm đất và
        **toả ra thành nhiều nhánh nhỏ**, mỗi nhánh kết ở một đốm sáng ấm = một ngôi nhà
        ⚠ Chi tiết chốt của C34: 「天から降ってきた数字ではない」 — vậy sợi sáng phải đi **ngang**,
        không bao giờ rơi từ trên xuống. Giữ đúng phương ngang suốt shot
CUT     cắt sang S15

## S15 · C35–C36 · graph
SCENE   Dải bảy đoạn của S11 trở lại, nhưng lần này đoạn cuối cùng được làm đầy — dải "đầy" từ
        trái sang phải. Chữ 「満中陰」 hiện khi dải đầy tới mép phải
CAMERA  tĩnh 35mm, dải ở 1/3 trên khung lần này (đổi vị trí so với S11 — tránh rập khuôn);
        nhẹ nhàng đổ bóng của dải xuống nền
ELEMENT 0s dải bảy đoạn rỗng · 5s đoạn 1 được rót đầy bằng ánh sáng ấm từ trái · 8s–26s sáu đoạn
        còn lại lần lượt đầy, **mỗi đoạn 3s, đều tuyệt đối** · 28s mép phải chạm đích, chữ
        「満中陰」 hiện, phía dưới nhỏ hơn là 「忌明け」 · 34s hai chữ giữ sáng, dải hạ xuống 60%
CUT     cắt sang S16 ở chữ 「中国の人たちです」 (C37)

## S16 · C37–C40 · procedural ⭐ mười vị vua
SCENE   Mười hình bóng ngồi xếp thành hàng lùi dần vào chiều sâu — như một dãy công đường.
        Mỗi hình là một **tượng gỗ ngồi sau án thư**, không cử động, không có nét mặt dữ
CAMERA  từ vị trí thấp nhìn lên 15° (góc người đứng trước công đường), 35mm; dolly-back chậm
        để lần lượt lộ thêm vua phía sau; **hàng vua đặt chếch, chạy từ dưới-trái lên trên-phải**,
        không chính giữa
ELEMENT 0s hai hình bóng đầu tiên, ánh sáng lạnh từ trên cao · 8s dolly lùi, hình thứ ba, thứ tư
        hiện ra trong sương · 16s thấy tổng cộng bảy hình, **ba hình cuối còn chìm trong sương** ·
        24s ở C39 nhãn 「『十王経』— 中国で成立」 hiện ở mép dưới; đồng thời một khối đất Trung Quốc
        mờ hiện phía sau hàng vua · 32s ở C40 một hình bóng ở giữa **sáng riêng lên** (閻魔 —
        vị duy nhất có gốc Ấn Độ), rồi chín hình còn lại sáng theo sau, muộn hơn 1,5s
        ⚠ Tượng dựng theo kiểu 木造彩色: gỗ sẫm, sơn bong, **mắt không phát sáng**, không có
        răng nanh, không có lửa. Đây là tượng trong chùa, không phải quái vật
CUT     giữ liên tục sang S17 — sương dày lên

## S17 · C41–C43 · procedural ⭐ KHUNG THUMBNAIL (tràn sang S17 đầu 第3章)
SCENE   Sương dày lên nuốt mất hàng vua. Còn lại một **con đường** chạy vào sương, và bảy vệt
        sáng nhỏ xa dần trên đường — bảy cánh cổng chưa tới
CAMERA  tĩnh 50mm ở độ cao người đứng (1,6m), con đường chạy từ **mép dưới-trái** vào điểm tụ ở
        **1/3 trên-phải** (không phải điểm tụ chính giữa — đó mới là bố cục bìa duyệt)
ELEMENT 0s sương mù dày, không thấy gì ngoài một vệt sáng mờ · 8s mặt đường hiện ra: đất nện,
        có vết chân mờ đi về phía trước, không có vết quay lại · 14s vệt sáng thứ nhất rõ dần —
        một cổng gỗ đơn giản (鳥居 KHÔNG dùng; đây là 門 kiểu chùa: hai cột, một xà ngang) ·
        20s vệt 2, 3 hiện mờ hơn ở xa · 26s tất cả bảy vệt cùng nhìn thấy, **độ sáng giảm dần theo
        khoảng cách theo hàm mũ**, vệt thứ bảy chỉ còn là một đốm · 32s ở C42 ba đốm nữa hiện
        **ngoài rìa sương, xa hơn hẳn bảy đốm kia** — 百か日 / 一周忌 / 三回忌, nhãn nhỏ dưới mỗi đốm
        ⚠ Khoảng cách: bảy đốm đầu cách đều; ba đốm sau cách xa dần theo cấp số — **khoảng cách hình
        phải kể đúng việc lễ giãn dần**. Chi tiết này được gọi lại ở S46
CUT     `gap: 1.5` — camera giữ tĩnh trong khoảng lặng. Sang 第3章

---

# 第3章 — どこへ行くのか (C44–C107) · 22 shot

Chương dài nhất (~12,5 phút). Cấu trúc hình: **đi trên đường** (S18) → **núi** (S18–S19) →
**sông** (S20–S24) → **niên đại** (S25–S27) → **bảy chặng tiếp** (S28–S33) → **六道** (S34–S35)
→ **六文銭 + tông phái** (S36) → **本地仏, cú lật** (S37–S41).

Bảng màu đổi: sương **MIST_BLUE** lạnh hơn 第2章, thêm sắc xanh lục rất nhạt ở vùng sông.

## S18 · C44–C47 · procedural ⭐ 死出の山
SCENE   Đi trên con đường, cổng thứ nhất tới gần. Qua cổng, đường bắt đầu **dốc lên** — sườn núi
        hiện trong sương. Đây là 死出の山, chặng tuần thứ nhất
CAMERA  travelling tiến về trước dọc đường, 50mm, tốc độ đi bộ chậm (~0,9 m/s ảo), camera cao 1,6m;
        không lắc, không bước nhún — chuyển động phải **mượt tuyệt đối** (tệp 50+, TV)
ELEMENT 0s cổng thứ nhất ở xa, nhãn 「初七日」 nhỏ dưới chân cổng · 8s tới gần, thấy một hình bóng
        tượng ngồi sau cổng, nhãn 「秦広王」 — **tượng gỗ, ngồi, không quay đầu** · 16s qua cổng,
        camera vẫn đi tiếp · 24s mặt đường nghiêng dần lên: độ dốc 0° → 14° trong 10s · 34s sương
        loãng ra một khoảnh, lộ **sườn núi đá phiến xám**, dốc, không cây, đỉnh khuất trong mây ·
        42s ở C47 (「山が先で、川はそのあとなんです」) một chỉ dẫn đơn giản hiện góc dưới-phải:
        hai biểu tượng nhỏ, **núi ở trước, sông ở sau**, nối bằng mũi tên ngang
        ⚠ Núi dựng procedural: FBM hai lớp (lớp lớn = khối núi, lớp nhỏ = vỉa đá), không texture.
        Màu đá xám-lam, không nâu. KHÔNG có xương, không có người ngã bên đường
SFX     tiếng gió hú thấp vào từ 0s (theo [AUDIO DIRECTION] C44)
CUT     cắt sang S19 khi camera lên tới một mỏm cao

## S19 · C48–C50 · procedural
SCENE   Từ mỏm núi nhìn xuống: dưới thung lũng sương có một dải sáng nằm ngang chuyển động chậm.
        Nước. Cổng thứ hai đứng ngay ở mép xuống
CAMERA  tilt-down chậm từ đường chân trời xuống thung lũng, 35mm; kết ở góc chếch xuống 35°,
        dải nước nằm ở **1/3 dưới** khung
ELEMENT 0s đỉnh mỏm, sương · 8s tilt bắt đầu, sườn núi trượt lên khỏi khung · 16s dải nước lộ ra,
        còn xa, chỉ là một vệt sáng chuyển động ngang · 24s cổng thứ hai ở tiền cảnh trái, nhãn
        「二七日」, và tượng ngồi sau nó, nhãn 「初江王」 · 32s hai chữ 「初」「江」 tách rời ra, phóng to
        nhẹ, dưới chữ 江 hiện chú thích 「大きな川」 — rồi hai chữ trượt về chỗ cũ
        ⚠ Đây là **bằng chứng cấu trúc** của thứ tự núi-trước-sông. Cho nó đủ thời gian đọc
SFX     tiếng nước xa vào dần từ 16s, âm lượng tăng tuyến tính (theo C48, C50)
CUT     hoà tan 1,5s sang S20 — camera đã ở mép nước

## S20 · C51–C53 · graph + procedural
SCENE   Đứng ở bờ sông. Mặt nước rộng, chảy chậm từ trái sang phải. Trên mặt nước hiện chữ
        「三途」, rồi chữ ấy được **sửa lại** — không phải ba con đường, mà là 三悪道
CAMERA  tĩnh 35mm ở độ cao 1,6m, bờ nước ở 1/3 dưới; drift ngang 2% sang phải theo dòng chảy
ELEMENT 0s mặt nước dùng `assets/tex/water_4k.png` làm normal map, sóng rất thấp (biên độ 4cm),
        **chảy từ trái sang phải với vận tốc đều** — chiều chảy giữ nhất quán suốt tập ·
        8s chữ 「三途」 hiện trên mặt nước, phản chiếu ngược xuống nước · 14s ba vạch nhỏ hiện
        dưới chữ (cách hiểu sai: "ba con đường") rồi **mờ đi, không bị gạch chéo** ·
        20s thay vào là ba nhãn xếp dọc: 「餓鬼道」「畜生道」「地獄道」, trên cùng nhãn gộp 「三悪道」 ·
        30s nhãn nhỏ dưới cùng: 「『金光明経』」
        ⚠ Không dùng dấu ✗ đỏ. Cách hiểu cũ **mờ đi**, không bị đánh trượt (luật 4d)
CUT     cắt sang S21

## S21 · C54–C57 · procedural ⭐⭐ CAO TRÀO 2 — ba lối qua sông
SCENE   Camera dâng lên cao, nhìn xuống khúc sông. **Ba lối qua hiện cùng lúc trong một khung:**
        cầu vàng ở xa bên trái, chỗ cạn ở giữa, vực sâu bên phải
CAMERA  crane-up từ 1,6m lên 12m rồi giữ, 35mm → 24mm; góc chếch xuống 40°; ba lối xếp chéo
        từ trên-trái xuống dưới-phải (vector chéo của 来迎図 — SOURCES mục 11)
ELEMENT 0s mặt nước ở tầm mắt · 8s crane lên, khúc sông mở ra chiều rộng · 14s nguyên văn kinh
        hiện dọc bên phải khung, chữ dọc: 「所渡有三。一山水瀬。二江深淵。三有橋渡」, nhãn nguồn
        nhỏ dưới 「『地蔵十王経』」 · 20s **lối 1 — 橋渡**: cầu vòm, vật liệu ánh vàng-bạc
        (金銀七宝), nằm **xa nhất, cao nhất, bên trái**, mặt cầu phẳng và sáng đều ·
        26s **lối 2 — 山水瀬**: chỗ cạn ở giữa khung, nước nông, **đáy sỏi nhìn thấu qua nước**,
        gợn sóng vỡ trên đá · 32s **lối 3 — 江深淵**: bên phải, nước sẫm, xoáy chậm, **không nhìn
        thấy đáy**, sóng cao hơn hai chỗ kia; ⚠ KHÔNG có rồng, KHÔNG có người chìm, KHÔNG có
        bàn tay giơ lên — chỉ nước sẫm và xoáy · 42s ba nhãn hiện cùng lúc dưới ba lối ·
        50s ở C57 một dải sáng mảnh nối từ cầu sang chỗ cạn sang vực — cho thấy **cùng một con sông**
CUT     cắt sang S22

## S22 · C58–C59 · procedural ⭐ 衣領樹
SCENE   Bờ sông bên này. Một cây lớn không lá, cành ngang trĩu xuống. Hai hình bóng tượng già
        ngồi dưới gốc — 奪衣婆 và 懸衣翁. Trên cành có vài tấm áo vắt qua
CAMERA  cut sang cỡ trung 85mm, góc ngang tầm mắt, **cây ở 1/3 phải**, hai tượng ở gốc trái;
        pan trái 10° rất chậm rồi tilt-up theo cành trĩu
ELEMENT 0s gốc cây, vỏ nứt, rễ nổi trên đất bùn · 8s hai hình tượng: **tượng gỗ sơn màu đã bạc,
        ngồi, dáng già, mặt hiền — tuyệt đối KHÔNG dữ tợn, không há miệng, không móng vuốt.**
        Nhãn 「奪衣婆」「懸衣翁」 · 16s tilt-up theo thân cây · 22s cành ngang hiện ra, trên đó
        vắt ba tấm vải mỏng màu nhạt (không phải quần áo có hình người, chỉ là **vải**) ·
        28s **độ trĩu của ba cành khác nhau rõ rệt**: cành trĩu ít → chỉ về hướng cầu (trái xa);
        cành trĩu vừa → chỉ về chỗ cạn; cành trĩu sâu → chỉ về vực. Ba đường sáng mảnh nối cành
        với ba lối qua sông ở hậu cảnh · 36s nhãn 「衣領樹」
        ⚠ Cây dựng procedural: thân L-system 3 cấp, không lá, vỏ có rãnh dọc. Không có mắt, không
        có mặt người trên thân cây
CUT     hoà tan 1,5s sang S23

## S23 · C60–C61 · procedural
SCENE   Cận cảnh một tấm vải treo trên cành, đang đung đưa rất chậm. Xung quanh trống — không có
        ai. Rồi camera lùi ra, thấy bên bờ sông có một ngôi miếu nhỏ có mái, bên trong là một
        pho tượng 奪衣婆 được lau sạch, có yếm đỏ và hoa tươi
CAMERA  cận 135mm vào tấm vải, sau đó dolly-back + pan phải sang miếu, 135mm → 50mm
ELEMENT 0s tấm vải, sợi dệt thô nhìn rõ, đung đưa chu kỳ 4,2s · 8s vải dừng lại — **trọng lượng
        ổn định, cành ngừng trĩu thêm** · 14s dolly-back, thấy cành, thấy đất trống dưới gốc:
        **không có đồ đạc, không có hành lý** (C60 「全部取られて」) · 24s pan sang phải, một miếu
        gỗ nhỏ hiện ra · 32s trong miếu: pho tượng bà lão **được thờ** — yếm đỏ, hai bông hoa
        trong lọ, một đồng tiền nhỏ trước tượng; ánh sáng ấm CANDLE_WARM từ một ngọn nến nhỏ
        (nguồn sáng ấm duy nhất của cả 第3章 cho tới đây) · 40s nhãn 「江戸時代の終わりごろ」
        ⚠ Điểm hình của shot: **thứ đáng sợ lại được thờ**. Sự ấm áp phải đến từ ánh sáng, không
        phải từ chú thích
CUT     cắt sang S24 — nước rút đi, sương phủ lại

## S24 · C62–C66 · graph ⭐ trục niên đại
SCENE   Sương phủ hết cảnh sông. Trên nền sương hiện một **trục thời gian dọc**, ba mốc.
        Mỗi mốc là một quyển sách mở, và bên cạnh mỗi quyển liệt kê **cái nó CÓ và cái nó KHÔNG CÓ**
CAMERA  travelling dọc từ dưới lên trên theo trục thời gian, 50mm; trục đặt ở **1/3 trái** khung,
        phần phải là chỗ liệt kê
ELEMENT 0s sương, trục dọc mảnh hiện dần · 8s **mốc 1 — 985年『往生要集』(源信)**: quyển sách hiện,
        bên phải liệt kê CÓ → 「八大地獄」「六道」; rồi KHÔNG CÓ → 「三途の川」「十王」 — hai nhãn
        KHÔNG CÓ hiện với **độ sáng thấp hơn và nét viền đứt**, không gạch đỏ · 20s travelling lên,
        **mốc 2 — 晩唐『十王経』(中国)**: CÓ → 「十人の王」「裁きの場面」; KHÔNG CÓ → 「川」「奪衣婆」「鏡」 ·
        34s travelling lên, **mốc 3 — 12世紀『地蔵十王経』(日本)**: CÓ → 「三途の川」「奪衣婆」
        「浄玻璃の鏡」「本地仏の一覧」, bốn nhãn này **sáng đầy đủ, không có cột KHÔNG CÓ** ·
        46s camera dừng, ba mốc cùng trong khung, ba quyển sách xếp dọc
        ⚠ Ba mốc cách nhau trên trục **theo tỉ lệ năm thật** (985 → ~900 → ~1150 không đều) —
        đừng chia đều ba đoạn. Người xem không đo được nhưng bố cục lệch sẽ đúng hơn
SFX     tiếng giấy lật ở mỗi mốc (theo [AUDIO DIRECTION] C62)
CUT     giữ liên tục sang S25

## S25 · C67–C68 · procedural ⭐ tấm bản đồ được vẽ thêm
SCENE   Ba quyển sách chập lại thành **một tấm bản đồ duy nhất** trên mặt giấy. Rồi những nét vẽ
        được thêm vào theo ba đợt — mỗi đợt một nước, một thời
CAMERA  góc cao nhìn thẳng xuống 90° vào mặt giấy (góc duy nhất của cả tập nhìn thẳng xuống —
        dùng một lần cho hiệu quả), 50mm; xoay chậm 8° quanh trục thẳng đứng
ELEMENT 0s giấy trống · 8s **đợt Ấn Độ**: chữ 「中有」 và một khoảng trống được khoanh — nét mực
        đậm, cũ nhất, hơi phai · 18s **đợt Trung Quốc**: mười ô vuông nhỏ xếp hàng được vẽ thêm
        — nét khác màu mực (đậm hơn, mới hơn) · 28s **đợt Nhật Bản**: dòng sông, cây cầu, cái cây,
        hai hình người già — nét mảnh nhất, mực mới nhất · 38s cả tấm bản đồ đầy, **ba lớp nét
        ba màu mực phân biệt được** · 44s nhiều bàn tay mờ hiện quanh mép giấy rồi rút đi —
        gợi ý "nhiều người cùng vẽ", không cần nhãn
        ⚠ Tuyệt đối không dùng chữ 「偽経」「作り話」 trên hình. Thông điệp hình là **地図を描き足した**,
        không phải "bị làm giả" (packaging ràng buộc 4, luật 4d)
CUT     hoà tan 2s sang S26 — bản đồ nghiêng lại thành con đường

## S26 · C69 · procedural
SCENE   Trở lại con đường. Cổng thứ ba và thứ tư đi qua. Ở cổng thứ tư có một **cái cân hai đĩa**
        bằng đồng, treo dưới xà ngang
CAMERA  travelling tiến, 50mm, tốc độ đi bộ; **đổi độ cao camera xuống 1,2m** so với S18 (1,6m)
        — đổi cỡ để tránh rập khuôn với các shot đi đường trước
ELEMENT 0s cổng thứ ba tới gần, nhãn 「三七日 · 二十一日目 · 宋帝王」 · 10s qua cổng · 16s cổng thứ tư
        hiện, nhãn 「四七日 · 二十八日目 · 五官王」 · 22s cái cân: hai đĩa đồng treo bằng ba sợi xích,
        đòn cân ngang, **trục quay thật ở giữa** — hai đĩa lệch nhau nhẹ rồi trở về thăng bằng,
        chuyển động con lắc tắt dần (hàm thuần của t) · 30s chữ 「五官」 tách thành năm nét sáng
        rồi hợp lại
        ⚠ Hai đĩa cân **rỗng suốt shot**. Không đặt vật gì lên — không đá, không giấy, không tim.
        Cái cân là biểu tượng của việc đo, không cần vật để đo
CUT     cắt sang S27 — sáng đổi màu

## S27 · C70 · procedural (chuyển giọng)
SCENE   Đường phía trước tối hẳn lại. Một quầng sáng lớn hơn hẳn các cổng trước hiện lên ở xa —
        cổng thứ năm, to hơn, cao hơn
CAMERA  travelling chậm lại (0,9 → 0,45 m/s), 50mm; tilt-up nhẹ theo chiều cao cổng
ELEMENT 0s đường tối, cổng thứ năm chỉ là quầng sáng xa · 8s tới gần, **tỉ lệ cổng gấp 1,8 lần
        bốn cổng trước** — cột dày hơn, xà ngang cao hơn · 14s sương loãng dưới chân cổng, thấy
        bậc đá · 20s camera gần như dừng hẳn trước cổng, nhãn 「五七日 · 三十五日目」 hiện
        ⚠ Đây là shot **chuẩn bị**, cố ý chưa cho thấy chủ thể. Ánh sáng chuyển từ MIST_BLUE
        sang hơi ấm hơn một chút nhưng **không đỏ, không lửa**
CUT     hard-cut sang S28 đúng chữ 「閻魔王です」

## S28 · C71 · procedural ⭐ shot ngắn nhất tập (~10s)
SCENE   閻魔王. Một pho tượng gỗ ngồi, chính diện, chiếm phần lớn khung
CAMERA  **tĩnh tuyệt đối** 85mm, chính diện đối xứng — **shot đối xứng DUY NHẤT của cả tập**,
        dùng một lần cho sức nặng. Tượng ở giữa khung
ELEMENT tượng 閻魔王 kiểu 木造彩色: mũ 冠 vuông có chữ 王, áo bào rộng nếp gấp sâu, hai tay đặt
        trên đùi, ngồi trên ghế có tựa. **Mặt nghiêm, lông mày rậm, miệng khép** — nghiêm nghị
        chứ KHÔNG dữ tợn: không há miệng, không răng nanh, không mắt đỏ phát sáng, không lửa
        sau lưng. Sơn đã bạc, vàng bong từng mảng, gỗ lộ ra ở mép tay áo.
        0s tượng hiện trọn vẹn · 6s một hạt bụi trôi qua trước mặt tượng bắt sáng — chuyển động
        duy nhất trong khung
        ⚠ Shot này ngắn nhưng **phải ≥8s** (luật 4 giây). Nếu timing.json cho ngắn hơn, kéo dài
        vào đầu S29 thay vì cắt
CUT     giữ liên tục sang S29

## S29 · C72–C74 · graph + procedural
SCENE   Camera lùi ra khỏi tượng, và hàng bảy cổng hiện trở lại nhìn từ bên cạnh. 閻魔王 đứng ở
        **vị trí thứ năm** — rõ ràng còn hai cổng nữa ở phía sau
CAMERA  dolly-back + pan sang trái 90° để nhìn hàng cổng từ **bên hông** (góc mới, chưa dùng),
        35mm; hàng cổng chạy ngang khung từ trái sang phải
ELEMENT 0s cận tượng · 10s dolly-back, thấy cổng thứ năm trọn vẹn · 18s pan sang nhìn nghiêng,
        bốn cổng đã qua hiện bên trái, mờ hơn · 26s **con số 「三十五日目」 hiện lớn phía trên
        cổng thứ năm**, và 「四十九日」 hiện nhỏ hơn ở **cổng thứ bảy phía xa bên phải** — hai
        con số cùng trong khung, khoảng cách giữa chúng nhìn thấy được · 36s đường nối liền
        từ cổng 5 tới cổng 7 sáng lên: **「まだ先があります」**
        ⚠ Đây là điểm nhầm phổ biến nhất. Hình phải để người xem **tự thấy** khoảng cách, đừng
        dùng dấu chấm than hay hiệu ứng nhấn mạnh (luật 4d — không "bắt lỗi" người xem)
CUT     cắt sang S30

## S30 · C75 · procedural ⭐ 浄玻璃の鏡
SCENE   Bên trong cổng thứ năm: một tấm gương lớn đứng trên giá gỗ, mặt gương phẳng, không viền
        hoa văn. Trong gương phản chiếu không phải căn phòng — mà là **những ngày bình thường**
CAMERA  dolly-in chậm tới gương, 50mm → 85mm; gương đặt ở **1/3 phải**; camera **không bao giờ
        vào thẳng trục gương** (không thấy phản chiếu của chính camera)
ELEMENT 0s gương tối, chỉ phản chiếu sương · 8s mặt gương sáng dần từ tâm ra · 14s trong gương
        hiện những hình bóng mờ, **rất nhạt, không rõ mặt**: một mâm cơm, một bàn tay đưa vật gì
        cho một bàn tay khác, một cánh cửa mở · 24s các hình chuyển tiếp chậm, mỗi hình giữ 5s,
        hoà tan vào nhau · 32s nhãn 「浄玻璃の鏡」, nhãn nguồn nhỏ 「『地蔵十王経』」
        ⚠ Nội dung trong gương là **những việc đời thường**, không phải tội lỗi. Không cảnh bạo lực,
        không cảnh đau khổ, không lửa. "Những gì người đó đã làm" dựng thành **cái thường ngày**
CUT     cắt sang S31

## S31 · C76–C77 · procedural
SCENE   Hai cổng cuối. Cổng thứ sáu đi qua nhanh, cổng thứ bảy lớn và mở ra một **khoảng trống
        rộng** — sương tan, không gian mở ra
CAMERA  travelling tiến, 50mm → 24mm khi qua cổng thứ bảy (mở góc = mở không gian), tilt-up
        khi sương tan
ELEMENT 0s cổng thứ sáu, nhãn 「六七日 · 四十二日目 · 変成王」 · 10s qua cổng · 16s cổng thứ bảy
        hiện, lớn hơn cổng thứ năm, nhãn 「七七日 · 四十九日目 · 泰山王」 · 26s qua cổng —
        **sương tan đột ngột nhưng mượt** trong 4s, không cắt · 34s không gian mở: một mặt bằng
        rộng, trần cao vô hạn, sáu lối đi toả ra theo sáu hướng, chưa rõ đầu kia
        ⚠ Sáu lối, đếm được. Không phải năm, không phải bảy
SFX     ドローン mở rộng thành hợp âm rộng (theo [AUDIO DIRECTION] C77)
CUT     giữ liên tục sang S32

## S32 · C78–C79 · procedural ⭐ 六道
SCENE   Sáu lối đi cuộn lại thành một **vòng tròn sáu cung**. Mỗi cung là một cõi, có màu và
        chất liệu riêng. Vòng bắt đầu quay
CAMERA  crane-up lên nhìn xuống vòng 55°, 35mm; orbit 30° quanh vòng, **ngược chiều vòng quay**
ELEMENT 0s sáu lối phẳng · 8s sáu lối uốn cong, hai đầu gặp nhau thành vòng (morph liên tục) ·
        16s sáu cung nhận màu và chất liệu, **theo thứ tự lời đọc C79, đi theo chiều kim đồng hồ
        từ đáy vòng**: 地獄道 (xám-đen, bề mặt nứt, KHÔNG lửa — chỉ đất nứt và tối) · 餓鬼道
        (nâu khô, đất nẻ, một bình nước rỗng — KHÔNG hình người gầy) · 畜生道 (lục sẫm, cỏ và
        dấu chân thú) · 修羅道 (lam thép, bề mặt kim loại, KHÔNG vũ khí, KHÔNG máu) · 人間道
        (vàng ấm nhạt, mái nhà và con đường nhỏ) · 天道 (trắng-lam sáng, mây tầng) ·
        34s mỗi cung có nhãn BIZ UDPGothic ở vành ngoài · 42s vòng quay chậm 5°/giây,
        chiều kim đồng hồ nhìn từ trên · 48s nhãn nguồn 「『往生要集』」
        ⚠ **ĐẾM LẠI: SÁU cung.** Sáu cung góc mỗi cung 60°. 地獄道 dựng bằng **đất nứt và bóng tối**,
        tuyệt đối không lửa, không người bị hành hạ (luật cấm cảnh gây sợ)
CUT     giữ liên tục sang S33

## S33 · C80 · procedural ⭐ vòng khép
SCENE   Camera lùi ra rất xa. Vòng 六道 thu nhỏ lại và người xem nhận ra: **đó chính là vòng 輪廻
        của S08**. Khe hở 中有 nằm ngay đó, trên vành vòng
CAMERA  dolly-back mạnh, 35mm, từ đường kính vòng chiếm 90% khung xuống còn 45%; đồng thời
        orbit 20° để về **đúng góc nhìn của S08** (cao 30°, nghiêng cùng hướng)
ELEMENT 0s vòng sáu cung cận · 10s lùi ra, sáu cung nhỏ lại · 18s **khe hở 中有 hiện trở lại trên
        vành vòng** — cùng hai vạch ranh giới, cùng vị trí tương đối như S09 · 26s một điểm sáng
        chạy từ khe hở vào một cung bất kỳ, rồi vòng quay tiếp · 32s khung dừng ở **đúng bố cục
        của S08** — xác nhận bằng hình rằng đây là cùng một vòng
        ⚠ Góc máy phải khớp S08. Ghi thông số S08 và dùng lại
CUT     cắt sang S34

## S34 · C81–C84 · live-object ⭐ 六文銭
SCENE   Cận cảnh sáu đồng tiền đặt trên một mảnh giấy trắng, trong ánh sáng ấm — quay về chất
        liệu vật thật sau một chuỗi shot ý niệm
CAMERA  góc cao nhìn xuống 60°, 135mm; sáu đồng ở **1/3 dưới-trái**; pan phải rất chậm
ELEMENT 0s sáu đồng tiền, **đếm được là sáu**, xếp hai hàng ba · 8s chất liệu: **giấy in hình
        đồng tiền**, mép giấy mỏng cong nhẹ — đúng thực tế hiện nay · 16s một đồng tiền đồng
        **thật** hiện bên cạnh để so sánh chất liệu, có gỉ xanh, mặt chữ mòn · 22s nhãn
        「経典にはありません · 民間の習わし」 · 28s ba nhãn nhỏ hiện lần lượt quanh sáu đồng:
        「渡し賃」「六道の路銀」「お賽銭」 — **ba nhãn cùng độ sáng, không nhãn nào nổi hơn**
        (kịch bản C83 không chọn thuyết nào) · 38s nhãn 「江戸時代」 dưới cùng
        ⚠ Không đặt tiền vào quan tài, không dựng quan tài. Chỉ có tiền và giấy
CUT     hoà tan 2s sang S35 — ánh sáng đổi lạnh

## S35 · C85–C88 · graph
SCENE   Con đường bảy cổng hiện lại nhìn từ trên xuống, nhưng lần này nó **không phải con đường
        duy nhất**. Hai nhánh khác tách ra bên cạnh
CAMERA  góc cao nhìn xuống 60°, 35mm, tĩnh; con đường chính ở **1/3 trái**, hai nhánh mới mở
        sang phải; drift ngang 2% sang phải
ELEMENT 0s con đường bảy cổng, quen thuộc · 10s một nhánh thứ hai tách ra từ điểm xuất phát,
        **không có cổng nào**, chạy thẳng tới một vùng sáng ấm — nhãn 「浄土真宗」, phụ chú
        「臨終と同時に極楽浄土へ」 · 24s nhánh thứ ba tách ra, **rất ngắn, dừng ngay** — nhãn
        「上座部仏教」, phụ chú 「中有を立てない」 · 34s ba nhánh cùng trong khung, **độ sáng bằng
        nhau tuyệt đối** — không nhánh nào rộng hơn, dài hơn, sáng hơn · 42s nhãn chung phía trên:
        「あの世の見取り図はひとつではない」
        ⚠⚠ Đây là shot **trung lập bắt buộc** (packaging ràng buộc 2). Ba nhánh phải bình đẳng
        về mọi thuộc tính thị giác: độ dày nét, độ sáng, cỡ chữ nhãn. Không dùng mũi tên chỉ
        nhánh nào "đúng". 浄土真宗 là tông lớn nhất Nhật Bản — đây là chỗ sai là mất người xem
SFX     tông nhạc dịu một bậc (theo [AUDIO DIRECTION] C85)
CUT     cắt sang S36

## S36 · C89–C91 · live-object
SCENE   Trở lại phòng đêm rất ngắn: bàn tay lật trang sách, ánh nến, gương mặt không thấy.
        Rồi một **trang có bảng** mở ra — hai cột tên
CAMERA  góc cao nhìn xuống 50°, 85mm; trang sách ở 1/3 dưới; dolly-in 10% chậm vào bảng
ELEMENT 0s tay lật trang, giấy sột soạt, bụi bắt sáng nến · 10s ánh nến hạ thấp một nhịp rồi trở
        lại (C89 「気が重くなっていました」 — **đổi ánh sáng, không đổi cảnh**) · 18s trang mới mở:
        bên trái một cột mười cái tên (chữ dọc), **bên phải còn trống** · 26s cột phải bắt đầu có
        tiêu đề: 「本地」 · 34s dolly dừng ở cận bảng
SFX     bấc nến nổ, tiếng giấy
CUT     giữ liên tục sang S37

## S37 · C92–C93 · graph
SCENE   Bảng hai cột. Bốn dòng đầu được điền: mỗi vị vua có một vị Phật đứng bên cạnh
CAMERA  tĩnh 85mm, bảng chếch 10°; travelling xuống dọc theo bảng theo tốc độ lời đọc
ELEMENT 0s hai cột, cột phải trống · 8s giải nghĩa chữ 「本地」 hiện nhỏ bên lề: 「本当の姿とされる仏」 ·
        14s dòng 1: 秦広王 → 不動明王 · 20s dòng 2: 初江王 → 釈迦如来 · 26s dòng 3: 宋帝王 → 文殊菩薩 ·
        32s dòng 4: 五官王 → 普賢菩薩 · 38s bốn dòng cùng sáng, dòng 5 **vẫn trống** — khoảng
        trống rõ ràng ở giữa bảng
        ⚠ Bám đúng bảng SOURCES mục 1. Không đảo thứ tự, không tự điền dòng 6–10 ở shot này
CUT     giữ liên tục sang S38 — travelling dừng ở dòng 5

## S38 · C94–C96 · graph ⭐⭐⭐ CAO TRÀO 3 — CÚ LẬT CỦA TẬP
SCENE   Dòng thứ năm. Bên trái: 閻魔王. Bên phải: ô trống. Rồi chữ hiện ra — **地蔵菩薩**
CAMERA  dolly-in tới dòng 5, 85mm → 135mm; ở C95 camera **dừng hẳn**, giữ tĩnh tuyệt đối 6s
ELEMENT 0s dòng 5, bên trái 「閻魔王」 sáng · 8s ô bên phải vẫn trống, **giữ trống 6s** —
        khoảng lặng thị giác, đây là chỗ lời đọc có 「長めの間」 · 16s chữ 「地蔵菩薩」 hiện ra
        **từ từ, nét này sau nét kia**, không pop-in · 24s bên cạnh chữ, một pho tượng 地蔵 nhỏ
        mờ hiện: **tượng đá ven đường, đầu tròn không tóc, mặt hiền mắt khép, tay cầm 錫杖,
        có một cái 前掛け đỏ ai đó đã buộc cho** — chi tiết yếm đỏ là thứ người Nhật nhận ra ngay ·
        34s tượng 地蔵 và pho tượng 閻魔王 của S28 hiện **chồng lên nhau trong cùng một hình bóng**,
        opacity giao nhau 0,5/0,5 — hai pho, một dáng ngồi/đứng khác nhau nhưng **đường viền
        ngoài trùng khớp**
        ⚠ Chuyển chồng phải **mượt và chậm**, không nhấp nháy. Đây là hình quyết định của cả tập —
        nếu chỉ một frame trông như hiệu ứng ma quái thì hỏng cả luật 4d
CUT     giữ liên tục sang S39

## S39 · C97–C101 · procedural
SCENE   Hai pho tượng tách trở lại thành hai, đứng cạnh nhau trong cùng ánh sáng. Rồi camera
        lùi ra và thấy **bìa quyển kinh**: 『地蔵菩薩発心因縁十王経』 — chữ 地蔵菩薩 ở đầu tên
CAMERA  orbit chậm 25° quanh hai pho tượng, 85mm; sau đó dolly-back sang bìa sách, 85mm → 50mm
ELEMENT 0s hai pho tượng tách ra, **cùng ánh sáng, cùng độ sáng** — không pho nào tối hơn ·
        10s orbit, thấy hai pho từ nghiêng: dáng khác hẳn nhau nhưng đặt trên **cùng một bệ** ·
        20s ở C100 (「同じ一人だ」) một đường viền sáng mảnh chạy vòng ôm cả hai pho thành **một
        hình duy nhất** · 30s dolly-back, hai pho mờ đi, bìa sách hiện · 38s tiêu đề chữ dọc
        trên bìa, **bốn chữ 「地蔵菩薩」 ở đầu sáng lên trước**, rồi phần còn lại 「発心因縁十王経」
        sáng theo · 46s nhãn nhỏ 「十二世紀 · 日本で成立」
CUT     cắt sang S40

## S40 · C102–C103 · graph
SCENE   Bảng mười dòng hoàn chỉnh, nhìn toàn bộ. Cột trái là mười vị vua, cột phải là mười vị Phật.
        Rồi cột trái mờ đi — **còn lại là một danh sách toàn Phật**
CAMERA  pull-back từ cận dòng 5 ra toàn bảng, 135mm → 50mm; bảng chếch 10°, nằm **1/3 phải** khung
ELEMENT 0s cận dòng 5 · 8s pull-back, dòng 6 điền: 変成王 → 弥勒菩薩 · 14s dòng 7: 泰山王 → 薬師如来,
        phụ chú nhỏ 「病を癒やす仏」 · 22s dòng 8: 平等王 → 観音菩薩 · 26s dòng 9: 都市王 → 勢至菩薩 ·
        30s dòng 10: 五道転輪王 → 阿弥陀如来 · 36s toàn bảng mười dòng trong khung ·
        44s **cột trái (tên vua) hạ độ sáng xuống 20%**, cột phải giữ 100% — mười cái tên Phật
        đứng thành một cột liền mạch. Nhãn dưới cùng: 「はじめから終わりまで、仏の列」
        ⚠ Mười dòng, đếm được. Bám đúng bảng SOURCES mục 1 — không nhầm 弥勒菩薩 (dòng 6) với
        薬師如来 (dòng 7)
CUT     hoà tan 2s sang S41

## S41 · C104–C107 · procedural ⭐ đảo chiều mũi tên
SCENE   Con đường bảy cổng lần cuối, nhìn từ bên hông. Nhưng lần này các mũi tên **không đi từ
        cổng về phía người đi** — chúng đi **từ phía nhà, hướng ra đường**
CAMERA  tĩnh 35mm nhìn ngang hàng cổng; hàng cổng chạy từ trái sang phải ở 1/3 trên; phía dưới
        khung là bảy đốm sáng ấm nhỏ (bảy lần 法要 ở nhà)
ELEMENT 0s hàng bảy cổng, quen thuộc, màu lạnh · 8s trang từ điển hiện mờ chồng lên, một dòng
        sáng lên: 「功徳を回し向ければ」, nhãn nguồn nhỏ · 18s bảy đốm sáng **ấm** hiện ở mép dưới
        khung, thẳng hàng, mỗi đốm dóng đúng với một cổng phía trên · 28s **từ mỗi đốm ấm bốc lên
        một sợi sáng đi LÊN tới cổng tương ứng** — bảy sợi, mọc lần lượt cách nhau 2s ·
        40s bảy sợi cùng sáng, màu ấm CANDLE_WARM chạm vào màu lạnh MIST_BLUE của cổng và
        **làm ấm chân mỗi cổng** · 48s nhãn 「七回、助けに行ける」
        ⚠ Chiều mũi tên là toàn bộ ý nghĩa shot: **từ nhà đi ra, không phải từ cõi kia về**.
        Kiểm kỹ hướng chuyển động
SFX     ドローン rút dần từ 40s, chuẩn bị cho khoảng lặng
CUT     `gap: 2.0` — **fade sang đen chậm 2s**, giữ đen trọn khoảng lặng. Đây là lần DUY NHẤT
        của tập cắt về đen. Sang 第4章

---

# 第4章 — 帰り道 (C108–C130) · 8 shot

Về đúng căn phòng. **Không có shot nào rời khỏi phòng** trừ S46 (hình trừu tượng về nhịp giãn)
và S47 (dòng sông xa). Âm thanh rút hết — chỉ còn tiếng phòng và tiếng nến.

## S42 · C108 · live-object
SCENE   Từ đen, ngọn nến hiện trở lại. Nhưng **không phải góc máy của S01** — đây là góc gần hơn,
        thấp hơn, như người vừa ngẩng lên khỏi quyển sách
CAMERA  fade-in từ đen 3s, 85mm, cao 0,6m; ngọn nến ở **1/3 dưới-trái**; tĩnh
ELEMENT 0s đen · 3s ngọn lửa hiện · 8s quyển sách đóng lại ở tiền cảnh (bàn tay đặt lên bìa,
        rồi rút đi) · 14s thấy mặt 座卓: sách, đĩa ぼたもち **vẫn nguyên bốn viên**, một chén trà
        đã nguội · 20s đồng hồ không hiện — thời gian trôi được kể bằng **chiều cao ngọn nến**,
        không bằng đồng hồ
SFX     tất cả ドローン đã tắt. Chỉ tiếng phòng (nền rất nhỏ) và tiếng bấc nến
CUT     cắt sang S43

## S43 · C109–C111 · live-object ⭐⭐ CAO TRÀO 4 — VÒNG KHÉP BẰNG HÌNH
SCENE   **ĐÚNG GÓC MÁY CỦA S02.** Cùng vị trí, cùng tiêu cự, cùng bố cục: 仏壇 ở 1/3 phải, 座卓 và
        đĩa ぼたもち ở góc dưới-trái. Mọi thứ y nguyên. **Chỉ ngọn nến đã ngắn hơn hẳn**
CAMERA  **cắt thẳng vào khung cuối của S02** — không pan lại, không dựng lại chuyển động.
        Camera tĩnh 50mm, cao 0,75m, 仏壇 ở 1/3 phải. Sau 20s: dolly-in 6% cực chậm vào 位牌
ELEMENT 0s **khung phải trùng khít S02 tới từng pixel về bố cục** — 位牌 cùng vị trí, 仏壇 cùng góc
        mở cửa, đĩa ぼたもち cùng chỗ, **bốn viên vẫn nguyên** · 6s người xem nhận ra sự khác biệt:
        **chiều cao thân nến = 28%** (S02 là 72%) — sáp đã chảy xuống thành gờ, bấc dài hơn và
        hơi nghiêng · 12s vì nến thấp hơn nên **quầng sáng nhỏ hơn và thấp hơn**: mặt 位牌 giờ
        được chiếu từ dưới lên nhiều hơn, bóng đổ trên vách 障子 **cao hơn và to hơn** S02 ·
        20s dolly-in bắt đầu · 28s cận 位牌: mặt gỗ bắt sáng, **cùng vệt sáng dọc của S03 nhưng
        ở vị trí thấp hơn** vì nguồn sáng đã hạ
        ⚠⚠ **Đây là điểm nhấn thị giác của cả tập.** Hai thông số phải khớp tuyệt đối: (1) ma trận
        camera của S02 khung cuối; (2) mọi vật thể trong phòng ở đúng transform cũ. Thứ DUY NHẤT
        đổi là chiều cao nến (72% → 28%) và các hệ quả ánh sáng của nó. Nếu có thứ thứ hai đổi
        vị trí, hiệu ứng "y nguyên, chỉ thời gian trôi" sẽ mất
SFX     bấc nến nổ hai tiếng nhỏ, cách nhau
CUT     giữ liên tục sang S44

## S44 · C112–C117 · live-object + graph nhẹ
SCENE   Vẫn phòng đó. Trên vách 障子 phía sau, bóng đổ của ngọn nến trở thành nền cho **bảy vạch
        mờ** hiện lên — dải bảy đoạn của S11/S15 quay lại, nhưng lần này nó ở trong phòng
CAMERA  pan trái 18° chậm từ 位牌 sang vách 障子, 50mm; vách chiếm 2/3 phải khung, 位牌 mờ ở rìa trái
ELEMENT 0s cận 位牌 · 8s pan sang, vách giấy hiện với ô vuông khung gỗ · 16s ở C113 (trích
        本願寺派) một đoạn chữ hiện **rất nhạt trên mặt giấy**, như in mờ, chữ dọc — không phải
        overlay đồ hoạ mà như ánh sáng chiếu lên giấy; nhãn nguồn 「浄土真宗本願寺派」 ·
        28s chữ mờ đi, bảy vạch hiện thay vào, **mỗi vạch dóng đúng một ô khung 障子** ·
        38s mỗi vạch lần lượt có một đốm sáng ấm nhỏ ở chân — bảy lần có người đến nhà ·
        48s ở C117 vạch thứ bảy có thêm một **gạch ngang khép lại**, nhãn 「満中陰」
        ⚠ Chữ trên giấy phải **nhạt hơn** ánh nến, không được sáng hơn chủ thể. BIZ UDPGothic
CUT     cắt sang S45

## S45 · C118–C121 · procedural ⭐ nhịp giãn dần
SCENE   Bảy vạch rời khỏi vách và trôi vào một không gian tối. Chúng dàn ra thành một dòng thời
        gian, và **ba vạch nữa nối thêm phía sau, khoảng cách rộng dần**
CAMERA  travelling ngang sang phải dọc theo dòng thời gian, 50mm, tốc độ **giảm dần** theo
        khoảng cách giữa các vạch (đi chậm lại = thời gian giãn ra)
ELEMENT 0s bảy vạch cách đều · 10s travelling sang phải, qua vạch thứ bảy · 16s vạch thứ tám
        hiện, **cách vạch bảy gấp 2 lần khoảng cách cũ** — nhãn 「百か日」 · 26s vạch thứ chín,
        **cách gấp 4 lần** — nhãn 「一周忌」 · 36s vạch thứ mười, **cách gấp 12 lần** — nhãn
        「三回忌」 · 46s camera dừng, nhìn lại toàn dòng: mười vạch, khoảng cách **tăng theo cấp
        số**, từ dày sang thưa · 54s ở C121 một đốm sáng ấm nhỏ ở mỗi vạch cùng sáng lên một lượt
        ⚠ Tỉ lệ khoảng cách phải **thấy rõ bằng mắt**: 49 ngày → 100 ngày → 1 năm → 3 năm.
        Đây là hình duy nhất kể được ý 「急に手を離すのではなく、だんだん間を空けていく」.
        Không dùng chữ 「グリーフケア」 hay bất kỳ thuật ngữ tâm lý nào trên hình
CUT     hoà tan 2s sang S46

## S46 · C122–C124 · procedural
SCENE   Một dòng sông rộng trong sương, nhìn từ xa và từ trên cao. Không phải 三途の川 của 第3章 —
        đây là **sông chung**: các bờ mờ, không có cầu, không có cây, không có tượng
CAMERA  góc cao nhìn xuống 40°, 24mm (góc rộng nhất của tập — dùng cho cảm giác "khắp nơi"),
        drift ngang rất chậm sang trái; sông chạy **chéo** từ dưới-trái lên trên-phải
ELEMENT 0s sông trong sương, `water_4k.png` làm normal map, sóng thấp · 10s ba đốm sáng nhỏ hiện
        rải rác dọc hai bờ ở những khoảng cách rất xa nhau — **không nhãn tên nước, không bản đồ,
        không cờ** · 20s mỗi đốm phát ra một vòng sóng lan trên mặt nước; ba vòng sóng **gặp
        nhau ở giữa sông** · 32s ở C123 các vòng sóng tan, mặt nước phẳng lại · 40s ở C124
        (「向こう岸に本当に何があるのかを、私は知りません」) — **bờ bên kia KHÔNG hiện ra**.
        Sương ở nửa trên khung giữ nguyên độ dày, không loãng đi một chút nào
        ⚠⚠ Luật cứng: **không bao giờ cho thấy bờ bên kia.** Đây là chỗ kênh không hứa điều mình
        không biết (luật 4b, 4d). Cám dỗ dựng một bờ sáng đẹp ở đây là rất lớn — đừng
SFX     tiếng nước rất nhỏ, xa
CUT     hoà tan chậm 2,5s sang S47 — sương trở thành khói hương

## S47 · C125–C127 · live-object
SCENE   Khói hương trong phòng. Camera theo sợi khói xuống tới 香炉, rồi sang 位牌. Cuối shot
        camera về đúng bố cục S43
CAMERA  tilt-down chậm theo sợi khói từ trên xuống, 85mm; pan phải nhẹ 8° sang 位牌; kết ở
        **bố cục S43 khung đầu**
ELEMENT 0s sợi khói ở nửa trên khung, uốn theo FBM chậm, tan dần · 10s tilt xuống, thấy đầu que
        hương đang cháy: **đốm đỏ ở đầu trên, tàn trắng cong xuống bên dưới** — cháy từ trên xuống ·
        18s 香炉 với tro mịn · 26s pan sang 位牌 · 34s ở C126 (「いちばん恐ろしい王の下に、いちばん
        優しい仏を置いた」) — **tượng 地蔵 nhỏ mờ hiện một lần nữa, rất nhạt, phản chiếu trên mặt
        sơn mài của 位牌**, giữ 4s rồi tan · 44s khung về đúng bố cục S43
        ⚠ Phản chiếu 地蔵 phải **nhạt tới mức gần như không chắc mình có thấy không**. Rõ quá
        thành ma quái, mất luật 4d
CUT     giữ liên tục sang S48

## S48 · C128–C130 · live-object ⭐ KẾT
SCENE   Bố cục S43. Camera lùi ra rất chậm, căn phòng rộng dần. Rồi ngọn nến **bị thổi tắt** —
        khung tối đi nhưng không đen hẳn: còn ánh trăng xanh rất yếu qua vách 障子
CAMERA  dolly-back + crane-up cực chậm, 50mm → 35mm, từ cao 0,75m lên 1,4m; **đây là chuyển động
        chậm nhất của cả tập** (0,04 m/s). Kết ở góc chếch xuống 20°, cả căn phòng trong khung
ELEMENT 0s bố cục S43 · 10s lùi ra, chiếu tatami rộng dần, bốn vệt hằn 座布団 của S04 lại nhìn
        thấy · 20s ở C129 (「どこかの家で誰かが座っています」) — **các ô vuông 障子 sáng yếu lên
        theo thứ tự ngẫu nhiên-seeded**, như cửa sổ nhà người khác ở xa; giữ rất nhạt, tối đa
        ba ô sáng cùng lúc · 32s ở C130 ngọn nến tắt: ngọn lửa **thu nhỏ trong 0,8s rồi mất**,
        một sợi khói trắng mảnh bốc lên thẳng · 38s **quầng sáng ấm biến mất hoàn toàn**, khung
        chuyển sang tông lam rất tối (MOON_BLUE, cường độ 0,06) — chỉ còn thấy: mép 仏壇, dáng
        位牌 **vẫn đứng**, và đĩa ぼたもち trên 座卓 · 46s sợi khói tan · 52s fade sang đen 4s
SFX     một tiếng 鈴 xa, **đúng một lần** — đối xứng với S01. Rồi im hoàn toàn
CUT     hết. Đen 2s trước khi kết thúc file

---

# GHI CHÚ DỰNG HÌNH

Quy ước dùng chung cho cả tập. visual-builder tuân theo — sai một mục ở đây là sai cả tập.

## 1. Bảng màu — bốn tông, không thêm

| Tên hằng | RGB | Dùng ở đâu |
|---|---|---|
| `CANDLE_WARM` | (1.00, 0.78, 0.45) | **Nguồn sáng duy nhất của 第1章 và 第4章.** Suy giảm nghịch đảo bình phương, bán kính hữu dụng 1,4m. Cũng dùng cho bảy đốm 法要 ở S41 và miếu 奪衣婆 ở S23 |
| `PAPER_SEPIA` | (0.82, 0.74, 0.58) | Giấy sách cũ, bản đồ, bảng 本地. Tông chủ của 第2章 |
| `MIST_BLUE` | (0.42, 0.50, 0.60) | Sương, đường, cổng, núi, sông. Tông chủ của 第3章 |
| `MOON_BLUE` | (0.30, 0.38, 0.52) | Ánh sáng ngoài 障子 vào ban đêm. Cường độ 0,06 — rất yếu, chỉ để khung không đen tuyệt đối ở S48 |

**Không có màu đỏ bão hoà ở bất kỳ đâu** trừ hai chỗ nhỏ, cố ý: 前掛け của 地蔵 (S38) và yếm của
tượng 奪衣婆 được thờ (S23). Đỏ trong tập này = **dấu hiệu có người chăm sóc**, không phải nguy hiểm.

**Không có lửa lớn.** Lửa duy nhất trong tập là ngọn nến 9mm và đầu que hương. 地獄道 ở S32 dựng
bằng **đất nứt và bóng tối**, không lửa.

## 2. Căn phòng 和室 — dựng một lần, dùng lại bốn lần

Phòng xuất hiện ở S01–S06, S36, S42–S44, S47–S48. **Dựng MỘT scene graph duy nhất**, các shot
chỉ đổi camera và chiều cao nến. Không dựng lại phòng cho mỗi shot — làm vậy sẽ lệch vị trí và
hỏng S43.

Thành phần cố định (transform không bao giờ đổi):
- **仏壇**: tủ gỗ sơn mài đen, cao 1,1m, cửa mở hai cánh, ba bậc bên trong. Viền vàng đã mờ.
- **位牌**: tấm gỗ đen cao 18cm, **ĐỨNG THẲNG** trên bậc trong cùng, chân đế hoa sen. Chữ vàng
  mờ trên mặt trước, **cố ý không đọc rõ** — đây là nhà bất kỳ, không phải nhà một người có thật.
- **蝋燭**: bậc thứ hai, bên phải 位牌 khi nhìn từ camera. **Tham số `candleHeight` là biến kể
  chuyện của cả tập** — xem mục 3.
- **香炉**: bậc thứ hai bên trái, tro mịn, một que hương cắm thẳng. Que cháy **từ đầu trên xuống**:
  đốm đỏ ở đỉnh, tàn trắng cong xuống dưới, phần chưa cháy ở dưới. ⚠ Sai chiều này là lỗi
  tệp 60+ nhận ra ngay.
- **座卓**: bàn thấp gỗ sẫm ở tiền cảnh trái, cao 33cm.
- **ぼたもち**: đĩa sơn mài đen, **bốn viên**, lớp あんこ ánh nhẹ. **Không bao giờ bị ăn dở** —
  số lượng bốn viên giữ nguyên từ S01 tới S48.
- **障子**: vách giấy phía sau 仏壇, ô vuông khung gỗ ~30×30cm.
- **tatami**: bốn vệt hằn 座布団 trên chiếu ở nửa trái phòng (khách đã về).

**Người kể không có gương mặt.** Chỉ thấy bàn tay (tới cổ tay) ở S06, S36, S42. Không bao giờ
thấy thân người, không bao giờ thấy mặt. Đây là ngôi 私 — người xem ngồi vào chỗ đó.

## 3. ⭐ `candleHeight` — biến kể chuyện, kiểm trước khi render

| Shot | Giá trị | Ghi chú |
|---|---|---|
| S01–S06 (第1章) | **0.72** | Nến còn dài |
| S36, S42 | 0.40 | Đã cháy một lúc (người kể đọc sách) |
| S43–S47 (第4章) | **0.28** | ⚠ Con số của cú kết |
| S48 cuối | 0.28 → tắt | Ngọn lửa thu nhỏ 0,8s rồi mất |

Ba hệ quả **bắt buộc phải theo** khi `candleHeight` giảm:
1. Vị trí nguồn sáng **hạ xuống** theo → mặt 位牌 được chiếu từ dưới lên nhiều hơn.
2. Bóng đổ trên vách 障子 **cao hơn và to hơn** (nguồn thấp hơn → bóng dài hơn).
3. Bán kính quầng sáng **co lại** từ 1,4m xuống ~1,0m → rìa phòng tối hơn.

Nếu chỉ đổi chiều cao hình trụ mà không đổi ba thứ trên, S43 sẽ không đọc được là "thời gian đã trôi".

## 4. Khớp góc máy S02 ↔ S43 — hợp đồng cứng

Ghi lại **ma trận camera ở khung CUỐI của S02** (sau khi pan 22° kết thúc) vào một hằng số
dùng chung, ví dụ `ANCHOR_CAM`. S43 **cắt thẳng vào đúng ma trận đó**, không nội suy lại.

Kiểm bằng mắt: đặt khung cuối S02 và khung đầu S43 cạnh nhau — **mọi cạnh của 仏壇, 座卓, đĩa,
khung 障子 phải trùng**. Thứ duy nhất khác là chiều cao nến và ánh sáng do nó gây ra.

Tương tự, hai cặp góc máy khác cũng phải khớp:
- **S08 ↔ S33** (vòng 輪廻 ↔ vòng 六道 là cùng một vòng): cùng góc cao 30°, cùng hướng nghiêng.
- **S09 ↔ S33** (vị trí tương đối của khe hở 中有 trên vành vòng).

## 5. Quy ước chuyển động — giữ nhất quán suốt tập

- **Vòng 輪廻 / 六道 quay chiều kim đồng hồ khi nhìn từ trên xuống.** Không bao giờ đổi chiều.
- **三途の川 chảy từ trái sang phải.** Mọi shot có sông giữ đúng chiều này (S20, S21, S46).
- **Người đi trên đường luôn đi về phía xa (vào trong khung).** Không có shot nào đi ngược lại.
- **Sợi sáng lịch sử (S13, S14) đi NGANG**, không bao giờ rơi từ trên xuống — vì lời đọc nói
  rõ 「天から降ってきた数字ではない」.
- **Sợi sáng 廻向 (S41) đi TỪ DƯỚI LÊN**, từ nhà ra đường. Chiều này là toàn bộ ý nghĩa của shot.
- **Mọi chuyển động là hàm thuần của `t`** (luật composition 3). Ngọn lửa, khói, sóng nước,
  bụi: dùng sin/FBM theo `t` và seeded mulberry32. Không `Math.random`, không `+= dt`.

## 6. Tượng — dựng như tượng gỗ trong chùa, không như sinh vật

Tất cả các pho tượng trong tập (閻魔王, 秦広王 và các vua, 奪衣婆, 懸衣翁, 地蔵菩薩) dựng theo
kiểu **木造彩色**: gỗ sẫm, sơn đã bạc và bong từng mảng, mắt là gỗ chạm (**không phát sáng**),
tư thế cố định, **không cử động bất kỳ bộ phận nào**.

**Cấm tuyệt đối:** răng nanh, miệng há, mắt đỏ, lửa sau lưng, móng vuốt, bóng ma, thân thể biến
dạng, máu, xác, người bị hành hạ, trẻ con.

閻魔王 ở S28: mũ 冠 vuông có chữ 王, áo bào nếp sâu, hai tay trên đùi, ngồi ghế có tựa, mặt nghiêm
miệng khép. **Nghiêm nghị, không dữ tợn** — phân biệt bằng: lông mày hạ thấp + miệng khép =
nghiêm; lông mày dựng + miệng há = dữ. Chọn vế đầu.

地蔵菩薩 ở S38, S47: tượng đá ven đường, đầu tròn không tóc, mắt khép, mặt hiền, tay phải cầm
錫杖, tay trái cầm 宝珠, có **前掛け đỏ** ai đó đã buộc cho. Yếm đỏ là chi tiết bắt buộc — đó là
thứ người Nhật nhận ra ngay lập tức.

## 7. Đếm — bốn con số phải đúng, người xem sẽ đếm

1. **Bảy** cổng trên đường (S17, S29, S41), **bảy** vạch trên dải (S11, S15, S44), **bảy** dấu
   bút đỏ trên lịch (S05, S13), **bảy** sợi sáng 廻向 (S41). Không phải sáu, không phải tám.
2. **Sáu** cung trong vòng 六道 (S32), mỗi cung 60°. Không phải năm, không phải bảy.
3. **Mười** dòng trong bảng 本地 (S40), **mười** vạch trên dòng thời gian giãn dần (S45).
4. **Sáu** đồng tiền ở S34. **Bốn** viên ぼたもち ở mọi shot có đĩa.

**Ba lối qua sông** ở S21: đúng ba, theo 『地蔵十王経』 — 橋渡 (cầu) · 山水瀬 (chỗ cạn) ·
江深淵 (vực sâu). Không thêm lối thứ tư, không bỏ lối nào.

## 8. Chữ trên hình — font và nội dung

- **Mọi nhãn dùng `'BIZ UDPGothic'`** (đã nhúng ở `assets/fonts/`, khai `@font-face` trong
  composition). `"Segoe UI"` không có glyph CJK.
- ⚠ **Phải `await document.fonts.load(...)` trước khi vẽ nhãn canvas đầu tiên.** Font CJK nặng
  ~4,6 MB; vẽ trước khi font về thì canvas đo nhầm metric và nhãn sai kích thước rải rác.
- Nhãn chữ Latin duy nhất của tập: **antarābhava** ở S09 — kiểm glyph **ā** (macron) hiện đúng.
- Nhãn nguồn (『倶舎論』『往生要集』『十王経』『地蔵十王経』『金光明経』) dùng **cỡ nhỏ hơn 40%** so
  với nhãn chính, đặt ở mép dưới. Đây là chữ ký của kênh — có mặt nhưng không lấn hình.
- **Không có nhãn tiếng Anh, không có số Ả Rập** trừ các con số ngày (7, 14, 21, 28, 35, 42, 49,
  100) và năm (985, 十二世紀). Ngày tháng ưu tiên chữ Nhật: 「三十五日目」 chứ không phải 「35日目」.

## 9. Ba chỗ KHÔNG được dựng dù có cám dỗ

1. **Bờ bên kia của con sông** (S46). Không bao giờ hiện ra. Sương giữ nguyên độ dày.
2. **Hình người đang đi trên con đường.** Camera LÀ người đi. Không có nhân vật trong khung,
   không có bóng lưng đi phía trước. Đường luôn trống.
3. **賽の河原.** Bãi sông ở S22–S23 là đất bùn trống. Không trẻ con, không tháp đá.

## 10. Nhịp — kiểm lại trước khi giao

- **Không shot nào ngắn hơn 8 giây.** Shot ngắn nhất theo thiết kế là S28 (~10s). Nếu
  `timing.json` thật làm một shot tụt xuống dưới 8s, **gộp nó vào shot liền kề**, đừng giữ shot
  vụn.
- **Mỗi shot phải có mốc thay đổi mỗi 6–8 giây** — tất cả đã ghi trong dòng `ELEMENT`. Shot nào
  bị kéo dài quá thiết kế (do voice thật chậm hơn) thì **kéo giãn chuyển động camera**, đừng thêm
  phần tử mới không có trong storyboard.
- **Hai shot liền nhau không được cùng cỡ cảnh + cùng góc.** Đã kiểm khi soạn; nếu visual-builder
  phải gộp shot vì timing, kiểm lại quy tắc này ở chỗ gộp.
- **Chuyển động camera phải mượt tuyệt đối** — easing vào/ra ở mọi dolly và pan, không bao giờ
  bắt đầu hay dừng đột ngột. Tệp 50-60+ xem trên TV.
