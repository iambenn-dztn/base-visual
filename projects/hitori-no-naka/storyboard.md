# STORYBOARD — なぜ家族といても寂しいのか｜孤立と孤独を分けた研究

## METADATA

- **Slug:** `hitori-no-naka`
- **Tổng thời lượng dự kiến:** **846,57s ≈ 14:07** (dry-run, 80 cue C01–C80, keita speed 0.95).
  Cộng intro 2s + outro 5s ở khâu 4 (`scripts/apply-lead-tail.mjs`) → **~853,6s**.
  ⚠ Timecode ghi trong file này lấy từ `timing.json` **dry-run** — chỉ để căn nhịp.
  Thời lượng CHUẨN là `timing.json` sau khâu voice. **Mọi shot neo vào mã cue, không vào giây.**
  ⚠ Tập có intro 2s: muốn snapshot giây cảnh X thì chụp ở **X+2**.
- **Số shot:** **34** (S01–S34). Trung bình ~24,9s/shot. Ngắn nhất S23 (~10,0s), dài nhất S13 (~34,7s).
  Không shot nào < 4s. Mỗi shot có ≥1 mốc thay đổi nhìn thấy mỗi 6–8 giây, ghi trong dòng `ELEMENT`.
- **Số cue:** 80, **4 chương**. Thẻ chương ở **C01 · C12 · C35 · C67**.
- **Nhạc nền:** một track chung `assets/bgm.mp3` (dựng ở khâu 3 từ `assets/bg-music/`).
  Không ghi audio theo shot. Chỉ shot có dòng `SFX` mới cần hiệu ứng riêng — lấy đúng từ
  `[AUDIO DIRECTION]` của kịch bản, không tự thêm.
- **Phụ đề:** **KHÔNG chép tay.** Sinh từ `voice/*.srt` bằng `scripts/gen-captions.mjs`
  (**≤22 ký tự toàn角, 1 dòng**). Font **BIZ UDPGothic** (`assets/fonts/`).
- **Texture:** không có texture sẵn cho tập này. **Toàn bộ dựng procedural** —
  tatami, 座布団, 障子, khay gỗ, chén. Xem GHI CHÚ mục 2–4.

### Loại visual theo chương

| Chương | Cue | Shot | Loại | Nội dung hình |
|---|---|---|---|---|
| **第1章 入口** | C01–C11 | S01–S07 | *live-object* (phòng thật) | 和室 11 giờ đêm, tay đang gập 座布団, chén trà, đèn 和室 một bóng, 3200K |
| **第2章 二つの物差し** | C12–C34 | S08–S17 | *live-object + hệ hai lớp* | Cùng căn phòng ấy, sáu người; **lớp 実距離 1,2m** và **lớp 感じる距離 40m** chồng lên nhau |
| **第3章 深いところ** | C35–C66 | S18–S29 | *live-object + procedural* | Khay gỗ ba chỗ (chén nước · chén cơm · chỗ trống thứ ba); lối đi khép vòng có **nhánh rẽ** |
| **第4章 帰り道** | C67–C80 | S30–S34 | *live-object* (đúng phòng 第1章) | Cùng góc máy S02, 座布団 thứ năm chưa gập, lớp 2 còn một vệt rất nhạt |

### Ba cú camera bắt buộc (packaging "Cảnh dựng WebGL")

| Cú | Shot | Cue | Nó chứng minh điều gì |
|---|---|---|---|
| **Cú lồng** | **S14** | C28 | Camera **đứng yên** ở chỗ 私 ngồi; lớp 2 fade chồng lên lớp 1 **không cắt**, chuyển trong 11,6s. Cùng căn phòng, cùng những người ấy, ở hai khoảng cách cùng lúc. Đây là toàn bộ phát hiện CLSA trong một hình. |
| **Cú hai thước** | **S17** | C34 | Camera lùi lên cao nhìn xuống **cả hai lớp xếp chồng**; một đường kẻ **1,2m** trên lớp 1, một đường kẻ **40m** trên lớp 2, **cùng một cặp người**. Hai con số cùng đúng, không cái nào là ảo giác. |
| **Cú khép** | **S30** | C67–C68 | Về lớp 1, camera đúng vị trí S02 — lớp 2 chỉ còn **một vệt mờ rất nhạt**, không biến mất hẳn. Không hứa cảm giác ấy tan; hứa rằng nó **có chỗ**. |

### Bốn cao trào hình (đầu tư nhất)

1. **S14 · C28** — cú lồng ở đúng lúc lời đọc nêu **6,7%**. Đỉnh của tập.
2. **S17 · C34** — hai cây thước hiện cùng khung, 1,2m và 40m cùng đo một cặp người.
3. **S20 · C40** — **chỗ trống thứ ba trên khay sáng lên** ngang hai chén kia. Đói, khát, đau — và cái thứ tư.
4. **S26 · C60–C61** — lối đi khép vòng **mở ra một nhánh rẽ** đúng lúc lời đọc nói 「閉じきった輪ではありません」.

### Khung nguồn thumbnail

**S06 (C08–C09)** dựng đúng concept bìa đã duyệt (cặp 1): **một 座布団 trống giữa chiếu tatami**,
quanh nó 5–6 座布団 khác còn hằn vết người vừa ngồi, chén trà còn trên 座卓, đèn 和室 vàng ấm từ
trên xuống, chiều sâu thật, bóng đổ mềm. **Không có người trong khung.** Render agent bắt frame
ở khoảng giữa S06 làm nguồn cho `output/_assets/hitori-no-naka/`.

---

## ⛔ RÀNG BUỘC TUYỆT ĐỐI CỦA TẬP NÀY

**1. Bảy thứ cấm — không vẽ, không viết nhãn, không gợi ý bằng hình:**
孤独死 · 無縁社会（無縁死・無縁仏）· xếp hạng quốc gia / bản đồ thế giới tô màu cô đơn ·
「寂しさ＝一日十五本の喫煙」/ mọi đồ thị nguy cơ tử vong · 内閣府 thống kê người già sống một mình
/ mọi đồ thị dân số tăng · ひきこもり・8050 · tỉ lệ trầm cảm.
Lời đọc đã sạch cả bảy. **Hình cũng phải sạch.** Cụ thể cấm: bản đồ Nhật Bản, bản đồ thế giới,
biểu đồ cột dân số, đường cong tăng theo năm, biểu tượng y tế, mọi con số không nằm trong danh sách dưới.

**2. Con số DUY NHẤT được phép hiện trên màn hình:**
`74.7% · 15.6% · 6.7% · 3.0%` · `n = 30,079` · `45–85歳` · `1.2m` · `40m` · `2020` · `2010`.
Mỗi lần hiện phải **kèm nguồn + năm**:
- Bốn tỉ lệ / n / khoảng tuổi → `Menec et al., PLOS ONE (2020)` + `CLSA, Canada`
- Vòng lặp → `Hawkley & Cacioppo, Ann Behav Med (2010)`
- Tín hiệu → `Cacioppo & Patrick (2008)`
Không con số nào khác được xuất hiện, kể cả làm nền trang trí.

**3. Chặng 1 (S01–S07) và chặng 4 (S30–S34): KHÔNG một con số nào trên hình.**
Không nhãn, không tỉ lệ, không năm, không thước đo có vạch số. Lời đọc cố ý vậy; hình giữ đúng.
Ngoại lệ duy nhất: **không có ngoại lệ**.

**4. Vòng lặp (S24–S26) vẽ theo hướng GỠ TỘI, không phải chẩn đoán.**
⛔ Không dựng vòng lặp thành cái bẫy đang siết 私. Cấm: vòng thu nhỏ lại, dây siết, lồng, tường
khép vào, mũi tên chỉ xuống, màu đỏ cảnh báo, nhịp tim, đồng hồ đếm ngược.
✅ Lối đi **rộng, đủ ánh sáng, đi được**, chỉ là **cong về đúng chỗ cũ**. Ở C55–C57 phải thấy
**nhiều bóng người khác cùng đi trên lối đó** — cơ chế chung của loài người, không phải chẩn đoán
cá nhân. Ở C61 lối **mở nhánh rẽ sáng hơn**.

**5. Lớp 2 (感じる距離) KHÔNG phải cảnh ác mộng.**
Không tối đen, không méo mó, không bóp hình, không mặt người, không doạ. Nó chỉ **xa hơn**.
Xa là thông tin, không phải đe doạ. Sương mỏng, ánh sáng vẫn ấm (3200K, chỉ giảm cường độ),
người vẫn là những khối sáng mềm y hệt lớp 1 — **không đổi hình dạng, chỉ đổi khoảng cách**.

**6. Không cảnh gây sợ.** Không xác, không máu, không bóng ma, không mặt người biến dạng.
Sáu người trong phòng là **khối tối giản có thể tích thật** (không billboard phẳng), không có
mặt, không có biểu cảm — đọc được là người nhờ tư thế ngồi và bóng đổ, không nhờ nét mặt.

**7. Nhịp:** không cắt nhanh hơn 4 giây, không rung máy ảo, không zoom giật.
Mọi chuyển động là **hàm thuần của `t`** (mulberry32 cho ngẫu nhiên, seed cố định).

---

# 第1章 — 入口 (C01–C11) · 7 shot · ~113,5s

Phòng là nhân vật. **Một nguồn sáng duy nhất: đèn 和室 treo giữa trần**, 3200K, chụp giấy,
đổ xuống thành một nón sáng ấm. Camera ở **độ cao mắt người đang quỳ (~0,75m)** suốt chương —
đây là ngôi 私. Không có người trong khung cả chương; chỉ có **bàn tay 私** ở S03–S04.
⛔ Chương này không một con số nào.

## S01 · C01 · 第1章 thẻ chương · live-object
SCENE   Đen. Một đường sáng ngang rất mảnh hiện ra — mép dưới cánh 障子 có ánh đèn phòng lọt qua.
        Khung mở dần thành 和室 nhìn từ ngoài vào, phòng đã dọn gần xong, còn một mảng chưa xong
CAMERA  tĩnh tuyệt đối 50mm, cao 0,75m ngang tầm người quỳ; fade-in từ đen 3s; căn phòng đặt
        **lệch phải**, 1/3 khung trái để trống cho bóng tối hành lang
ELEMENT 0s đen + một đường sáng ngang ở 1/3 dưới · 3s thấy vân giấy 障子 (sợi 楮 thật, subsurface
        nhẹ, ánh sáng lọt qua giấy — không phải mặt phẳng trong suốt) · 8s phòng hiện đủ: chiếu
        tatami **88×176cm đúng tỉ lệ**, sáu chiếu xếp 田の字, trần có 竿縁 chạy song song mép dài
        chiếu; đèn 和室 treo giữa trần 3200K, nón sáng rơi xuống 座卓 thấp · bụi rất mỏng trong
        luồng sáng (volumetric, mật độ thấp, không thành cột khói) · thẻ chương 「第1章 入口」
        vào ở 1/3 dưới-trái, chữ nhỏ, 4s rồi tan
SFX     ドローン thấp mềm; xa: tiếng nước vòi khoá lại (một lần, ~5s); kim giây đồng hồ đều
CUT     cắt phẳng sang S02 khi nón sáng đã đủ sáng

## S02 · C02–C03 · live-object · ⭐ GÓC MÁY GỐC (S30 phải về đúng đây)
SCENE   Vào trong phòng. **Góc máy chủ của cả tập** — ngồi ở chỗ 私 ngồi, nhìn chéo qua 座卓 về
        phía cửa 障子. Phòng vắng nhưng còn đầy dấu người: 座布団 xếp không đều, chén trà chưa dọn
CAMERA  tĩnh 40mm, cao 0,75m, hơi chếch xuống 6°; **KHÓA tọa độ này lại, đặt tên `CAM_ORIGIN`** —
        S30 và S34 dùng lại đúng con số
ELEMENT 0s toàn cảnh phòng: sáu 座布団 **55×59cm đúng tỉ lệ**, ba cái còn hằn lõm giữa (người vừa
        ngồi, vải chưa đàn hồi lại), hai cái đã gập vuông, **một cái chưa** — cái thứ năm, đặt
        lệch phải khung, ghi nhớ vị trí · 8s nhãn chồng mờ hiện ở mép dưới: 「夜十一時」(chỉ chữ,
        **không số đồng hồ**) rồi tan sau 3s · 14s một 座布団 ở giữa có vết lõm nhỏ hơn hẳn —
        chỗ đứa cháu nằm; camera không di chuyển, chỉ **nón sáng đèn chậm rãi hạ thêm 4% cường độ**
        · 20s chén trà trên 座卓: ba chén 湯のみ, hai cái còn hơi nước rất mỏng bốc lên (volumetric,
        biên độ theo sin, chu kỳ 3,7s)
CUT     cắt phẳng sang S03

## S03 · C04 · live-object
SCENE   Cận bàn tay. Hai bàn tay 私 đang gập 座布団 — động tác thật: gập đôi theo chiều dài, vuốt
        mép, chồng lên chồng bên cạnh. Đây là **động tác**, không phải ngồi tĩnh
CAMERA  85mm cận, cao 0,55m nhìn xuống 25°, **dolly ngang rất chậm sang phải** theo chồng 座布団
        đang cao dần; chủ thể ở 1/3 trái khung
ELEMENT 0s tay gập cái thứ nhất — vải 木綿 có sợi thật, mép bọc, lõi bông nén lại rồi phồng nhẹ
        (không phải hộp cứng) · 6s vuốt mép, đặt lên chồng; nhãn nhỏ 「一枚」 hiện mép dưới-phải rồi
        tan · 12s cái thứ hai, cùng động tác, nhãn 「二枚」 · 18s camera đã trôi sang phải, thấy
        chồng ba cái và chén bát đã úp gọn ở mép xa · tay chuyển động **đều, không ngập ngừng** —
        「手はもう勝手に動いています」
SFX     tiếng chén xếp chồng, nhỏ, hai lần (C04 [AUDIO DIRECTION]); tiếng vải cọ chiếu
CUT     cắt phẳng sang S04

## S04 · C05 · live-object · ⭐ KHOẢNH KHẮC LÕI CỦA CHẶNG 1
SCENE   Cái thứ năm. Tay đang gập, **và dừng lại giữa chừng** — chưa vuốt xong mép. Cảm giác
        trống tới **giữa lúc đang làm việc**, không phải lúc ngồi xuống
CAMERA  85mm, cùng độ cao S03; **dừng dolly hẳn ở 0s** (nhịp gãy — máy vừa đang trôi thì đứng lại);
        push-in cực chậm 85→100mm từ 4s, kết ở cận bàn tay đang dừng
ELEMENT 0s tay gập cái thứ năm, vải mới lật được nửa · 4s **bàn tay dừng** — ngón còn đặt trên vải,
        không rút ra; nhãn 「五枚目」 mép dưới, rồi tan · 6s **ánh sáng trong phòng không đổi, nhưng
        một vùng tối rất nhẹ mở ra trong khung ở ngay trên bàn tay** — không phải bóng đổ từ vật
        nào, mép mềm, đường kính ~25cm, độ đậm chỉ 12%; đây là "chỗ trống trong ngực", dựng thành
        **khoảng thiếu sáng trong không gian thật**, ⛔ không phải hình trái tim, không phải lỗ thủng
        · 9,5s vùng tối giữ nguyên, tay vẫn chưa động
SFX     mất hết tiếng vải; còn kim giây
CUT     hoà tan 1,2s sang S05

## S05 · C06–C07 · live-object → chồng lớp quá khứ
SCENE   Cùng căn phòng, **nhưng ba ngày trước**: sáu người ngồi quanh 座卓, phòng sáng hơn, đứa
        cháu nằm ngủ trên chiếu. Vùng tối của S04 **vẫn còn nguyên ở đúng chỗ đó** — đây là câu
        「あのときにも、同じものが、確かにあったんです」
CAMERA  lùi về `CAM_ORIGIN` rồi **dolly-out chậm** ra sau ~0,8m, 40mm; chủ thể (vùng tối) giữ ở
        1/3 trên-trái chứ không vào giữa khung
ELEMENT 0s phòng trống như S02, vùng tối lơ lửng · 4s **người hiện dần vào bằng fade, không cắt**:
        sáu khối sáng mềm ngồi quanh 座卓 — khối tối giản có thể tích thật, cao ~1,05m ở tư thế 正座,
        bóng đổ mềm lên tatami, ⛔ không billboard phẳng, ⛔ không có mặt · 8s đèn phòng lên 3200K
        sáng hơn 30%, chén trà đầy lại, có đĩa bánh trên 座卓 · 12s một khối nhỏ nằm ngang trên
        chiếu (đứa cháu ngủ), một 座布団 kê dưới đầu · 16s **vùng tối KHÔNG tan** — nó đứng nguyên
        giữa sáu người, cùng đường kính, cùng độ đậm 12%
SFX     tiếng cười xa, vọng, âm lượng thấp — không rõ lời
CUT     giữ nguyên khung sang S06 (không cắt, người fade ra)

## S06 · C08–C09 · live-object · ⭐ KHUNG NGUỒN THUMBNAIL
SCENE   Sáu người tan đi, phòng trở lại đêm nay. Còn lại đúng cảnh bìa: **một 座布団 trống giữa
        các 座布団 còn hằn vết người vừa ngồi**, chén trà trên 座卓, đèn vàng ấm
CAMERA  tĩnh 40mm ở điểm S05 kết thúc; **không chuyển động suốt 19,2s** — đây là shot người xem
        cần đứng yên để nhận ra cảnh nhà mình
ELEMENT 0s sáu khối người fade ra trong 4s, **vết lõm trên 座布団 ở lại** · 6s đèn về mức đêm nay,
        chén trà nguội (hơi nước tắt) · 9s **座布団 thứ năm ở tiền cảnh phải, còn dở dang, nửa gập**
        — chủ thể bìa · 12s chữ 「薄情」 hiện rất nhỏ, mờ, ở mép dưới-trái khung, **màu cùng tông
        tường không đối lập** — đây là chữ 私 tự gọi mình, gieo ở đây để S33–S34 gỡ; nó **không
        được to, không được đỏ, không được rung** · 16s chữ mờ dần nhưng **không tan hẳn**, giữ 20%
SFX     間 (C09 [AUDIO DIRECTION]) — rút hết, chỉ còn kim giây
CUT     giữ đen nhẹ 1,5s (gap sau C09) rồi vào S07

## S07 · C10–C11 · live-object
SCENE   Góc thấp hơn, nhìn dọc mặt chiếu về phía 障子. Phòng như đang chờ. Cuối shot, một ánh sáng
        lạnh hơn (giấy in, trắng 5000K) hé vào từ ngoài khung phải — báo hiệu nguồn nghiên cứu sắp tới
CAMERA  30mm cao 0,25m (gần sát mặt chiếu — cảm giác thấp, chịu đựng); **tilt-up rất chậm** từ mặt
        chiếu lên cửa 障子 trong suốt shot
ELEMENT 0s cận mặt chiếu: sợi cỏ 藺草 dệt ngang rõ từng sợi, mép 畳縁 vải sẫm · 6s chữ 「薄情」 còn
        sót từ S06 nằm trên mặt chiếu rồi trôi khỏi khung khi máy tilt lên · 12s cửa 障子 vào khung,
        ánh sáng qua giấy · 18s **một vệt sáng lạnh hơn (5000K) rọi chéo vào từ mép phải** — mỏng,
        không chói; nó không thuộc về đèn phòng. Đây là chữ của người ngoài sắp bước vào
SFX     kim giây; ドローン bắt đầu hé mở
CUT     hoà tan 2s sang S08 — vệt lạnh nở ra thành ánh sáng của chương 2

---

# 第2章 — 二つの物差し (C12–C34) · 10 shot · ~229s

Chương của **hệ hai lớp**. Quy ước dựng ở GHI CHÚ mục 3 — visual-builder đọc mục đó trước.
Ánh sáng cơ bản vẫn 3200K ấm; lớp 2 **cùng nhiệt độ màu**, chỉ giảm cường độ và thêm sương mỏng.

## S08 · C12–C13 · 第2章 thẻ chương · live-object hai lớp (giới thiệu)
SCENE   Phòng 和室 đông người (lớp 1 đầy đủ), nhìn từ trên chếch xuống 30°. Sáu người quanh 座卓.
        Giữa họ, vùng tối của S04 vẫn ở đó — lần đầu người xem thấy nó trong cảnh đông
CAMERA  35mm, cao 2,1m, chếch xuống 30°, **orbit chậm 12° quanh trục phòng** trong cả shot
ELEMENT 0s sáu khối người quanh 座卓, bóng đổ mềm, đèn giữa trần · 4s thẻ chương 「第2章 二つの物差し」
        mép dưới-trái, 4s rồi tan · 8s **một đường cong sáng mảnh nối sáu người với nhau** — biểu
        thị "cách hiểu thông thường: nhiều người = ít cô đơn"; đường này **dày lên khi có thêm người**
        · 14s đường cong chạm tới chỗ 私 ngồi và **đứt** — vùng tối vẫn nguyên ở đó · 18s orbit đưa
        vùng tối vào giữa nhóm người, thấy rõ nó **không bị người che lấp**
CUT     cắt phẳng sang S09

## S09 · C14–C15 · live-object (đảo ngược)
SCENE   **Ngày. Vườn.** Một người ngồi một mình ở 縁側 nhìn ra vườn, tách cỏ vừa nhổ để cạnh, chén
        trà. Không có ai khác trong khung — và **không có vùng tối nào**. Đây là mặt kia của nghịch lý
CAMERA  50mm, cao 0,9m, tĩnh 8s rồi **dolly-out rất chậm** cho thấy cả khoảng vườn trống
ELEMENT 0s ánh sáng **đổi hẳn**: ban ngày, ánh trời gián tiếp 5600K, ấm nhạt — tương phản có chủ
        ý với đêm · 5s một khối người ngồi ở mép 縁側, chân buông xuống, tư thế thả lỏng · 10s nắm
        cỏ vừa nhổ đặt trên tờ báo cũ, đất còn bám rễ · 14s chén trà, hơi nước mỏng · 18s dolly-out
        thấy vườn rộng, **không có người nào khác**, và **khung sạch — không vùng tối** · 21s một
        nhãn ngắn mép dưới 「人はいないのに、寂しくない」 rồi tan
SFX     ve kêu rất xa, thưa; nước rót
CUT     cắt phẳng sang S10 — chuyển ngày→đêm dứt khoát, đây là hai vế của cùng một câu hỏi

## S10 · C16 · procedural (chỗ hỏng của cách hiểu cũ)
SCENE   Hai cảnh S08 và S09 hiện cạnh nhau trong cùng một khung sâu — **không phải split-screen
        phẳng**, mà là hai khối không gian nằm ở hai độ sâu khác nhau, camera nhìn chéo qua cả hai
CAMERA  28mm, dolly ngang trái→phải chậm, qua khối phòng đêm rồi tới khối vườn ngày
ELEMENT 0s khối "phòng đông người + vùng tối" ở gần, mờ mép · 4s **thước đo duy nhất** hiện ra
        vắt qua cả hai khối: một thanh gỗ có vạch, vạch đánh theo **số người** (không phải số liệu
        nghiên cứu — chỉ là 1,2,3…6, không kèm đơn vị thống kê) · 7s thước chỉ "6 người" ở khối
        phòng nhưng vùng tối vẫn có → **vạch ở đó nhấp nháy hỏng, rồi tối đi** · 10s camera qua
        khối vườn, thước chỉ "0 người" nhưng không có vùng tối → **vạch cũng tối đi** · 14s cả cây
        thước mờ dần và rút khỏi khung — một thước không đo nổi cả hai đầu
CUT     hoà tan 1,5s sang S11

## S11 · C17–C19 · procedural (nguồn xuất hiện) · ⛔ số liệu PHẢI kèm nguồn
SCENE   Ánh sáng lạnh 5000K của tờ giấy. Một trang báo cáo đặt trên mặt gỗ — không phải màn hình,
        là **giấy in thật** có vân, có bóng đổ, có mép hơi cong
CAMERA  60mm, cao 0,45m nhìn xuống 35°; **dolly-in chậm** dọc trang giấy từ mép dưới lên đầu trang
ELEMENT 0s mép giấy, vân sợi, bóng đổ mềm trên gỗ · 4s dòng đầu hiện: `n = 30,079` và `45–85歳` ·
        8s dòng nguồn ngay bên dưới, **bắt buộc cùng khung với con số**:
        `Menec VH et al., PLOS ONE 15(3): e0230673 (2020)` / `CLSA Comprehensive Cohort · Canada`
        · 14s **hai cột trống** vẽ ra trên trang, tiêu đề hai cột chưa điền · 19s cột trái nhận
        nhãn 「外から数えられるもの」, cột phải nhận 「本人にしか分からないもの」 · 24s hai cột tách
        xa nhau thêm 1 khoảng — 「わざわざ別々に」
SFX     tiếng giấy lật một lần (C17 [AUDIO DIRECTION])
CUT     cắt phẳng sang S12

## S12 · C20–C23 · procedural (hai cột thành hai thước)
SCENE   Hai cột trên giấy **nhấc khỏi mặt giấy thành hai vật thật trong không gian**: một cây thước
        gỗ có vạch (đo được từ ngoài) và một cây thước **không có vạch nào** (chỉ người cầm biết)
CAMERA  50mm, cao 0,5m; **orbit chậm 25°** quanh hai cây thước đặt cạnh nhau trên mặt gỗ
ELEMENT 0s hai cột giấy nâng lên, dày dần thành gỗ thật — vân gỗ, cạnh vát, ánh sáng xiên · 6s
        thước trái: vạch khắc đều, có nhãn nhỏ 「会った人の数 / 出かけた回数」; nhãn nguồn nhỏ giữ
        ở mép khung suốt: `Menec et al., PLOS ONE (2020)` · 12s thước trái nhận nhãn lớn hơn
        「社会的孤立」 · 18s thước phải vào sáng — **mặt nhẵn, không một vạch**; nhãn 「寂しいと感じているか」
        · 25s thước phải nhận nhãn 「孤独感」 · 32s orbit dừng, hai thước **song song nhưng không
        chạm nhau**, khoảng cách giữa chúng rõ ràng — 「同じにせずに分けたんです」
SFX     間 ở cuối (C23 [AUDIO DIRECTION])
CUT     hoà tan 2s sang S13

## S13 · C24–C27 · procedural + hai lớp (ba nhóm đầu)
SCENE   Mặt phẳng tatami nhìn từ trên xuống thành **bốn ô** — nhưng không phải bảng 2D: mỗi ô là
        **một mảng sàn thật có người đứng trên đó**, độ cao khác nhau, camera bay chậm qua
CAMERA  35mm, cao 3,2m chếch xuống 55°, **dolly ngang chậm** qua ô 1 → ô 2; kết thúc dừng trên ô 2
ELEMENT 0s sàn chia bốn mảng bằng khe hở thật (không phải đường kẻ vẽ), mỗi mảng có tatami riêng ·
        4s ô lớn nhất sáng lên, nhãn `74.7%` + `どちらでもない` + nguồn nhỏ `Menec et al. (2020)`;
        **diện tích ô đúng tỉ lệ với phần trăm** — ô này chiếm gần ba phần tư sàn · 10s trên ô đó,
        các khối người đứng **gần nhau ở cả hai lớp** — lớp 1 và lớp 2 gần trùng khít, vệt lớp 2
        chỉ nhô ra rất ít · 16s camera trôi sang ô `15.6%`, nhãn `孤立のみ` · 22s **trên ô này:
        lớp 1 người đứng THƯA (xa nhau về mét) nhưng lớp 2 chồng gần khít lớp 1** — xa về mét, không
        xa về thước kia · 28s một nhãn thước 1,2m/40m nhỏ cho thấy cả hai số ở đây gần nhau · 32s
        camera dừng, ô `15.6%` giữ sáng
CUT     cắt phẳng sang S14 — **cắt đúng lúc lời đọc chuyển sang 6,7%**

## S14 · C28 · ⭐⭐ CÚ LỒNG — ĐỈNH CỦA TẬP · hai lớp chồng, KHÔNG CẮT
SCENE   Camera **đứng yên ở chỗ 私 ngồi** trong 和室 đông người (lớp 1). Rồi **lớp 2 fade chồng lên**
        — cùng căn phòng, cùng sáu người ấy, nhưng ở 40m. Người xem thấy **hai khoảng cách cùng lúc**
CAMERA  **TĨNH TUYỆT ĐỐI 40mm, cao 0,75m, đặt đúng chỗ 私 ngồi.** Không dolly, không zoom, không
        orbit. Chuyển lớp làm bằng **fade, kéo dài 11,6s** — chậm hơn mức 6s tối thiểu của packaging
ELEMENT 0s lớp 1 đầy đủ: phòng 和室 hình học đúng, sáu khối người quanh 座卓, người gần nhất **cách
        1,2m**, bóng đổ mềm, đèn 3200K, bụi trong luồng sáng · 3s nhãn nhỏ mép dưới: `6.7%` +
        `孤独のみ` + `Menec et al., PLOS ONE (2020)` — **hiện một lần, giữ suốt shot, không nhấp nháy**
        · 4s **lớp 2 bắt đầu vào với opacity 0 → 100% trong 7s**: cùng sáu khối người ấy, **hình dạng
        y hệt, kích thước y hệt** (⛔ không biến dạng, không đổi màu) nhưng **đặt ở 40m**; phòng vẫn
        hiện diện như **khung lưới rất mờ** (đường 竿縁 trần và mép chiếu còn thấy, opacity ~15%) ·
        8s sương mỏng ăn dần vào chiều sâu, nhiệt độ màu **giữ nguyên 3200K**, chỉ cường độ giảm 45%
        · 11,6s **hai lớp cùng hiện ở 50/50** — người xem thấy đồng thời: sáu người ở 1,2m VÀ sáu
        người ấy ở 40m. Giữ trạng thái này tới hết shot
SFX     tiếng cười **vẫn còn** nhưng vọng qua khoảng trống — reverb dài dần theo lớp 2 vào
        (第2章「重ね」của kịch bản)
CUT     **KHÔNG CẮT.** Giữ nguyên hai lớp sang S15

## S15 · C29–C30 · hai lớp (ô thứ tư + đối xứng)
SCENE   Camera rời chỗ 私, lùi ra và lên cao để thấy ô `3.0%`, rồi thấy **ô 15.6% và ô 6.7% quay
        ngược hướng nhau**
CAMERA  từ vị trí S14, **dolly-out + boom-up liên tục** lên 2,8m, 35mm — một chuyển động duy nhất,
        không giật
ELEMENT 0s hai lớp của S14 còn nguyên, camera bắt đầu lùi · 5s ô `3.0%` vào khung: nhãn `両方`,
        diện tích nhỏ nhất; trên ô này **cả hai lớp đều thưa** — xa ở cả hai thước · 10s camera đủ
        cao để thấy **ô 15.6% và ô 6.7% cạnh nhau**; một mũi tên **không vẽ, mà là hướng nghiêng
        của các khối người**: ô 15.6% người thưa-lớp2 gần; ô 6.7% người sát-lớp2 xa → hai ô
        **nghiêng ngược nhau như hai bàn tay úp ngửa** · 16s nhãn gộp mép dưới `15.6% + 6.7% = 22.3%`
        kèm `Menec et al., PLOS ONE (2020)` · 20s chữ 「合わせて二割を超えます」 không hiện — để lời
        đọc nói; hình chỉ giữ hai ô sáng
CUT     giữ 1,2s gap (sau C30), giảm sáng còn 30% rồi vào S16

## S16 · C31–C33 · live-object trong ô 6.7%
SCENE   Camera **hạ xuống đứng bên trong ô 6.7%** — và ô đó, nhìn từ trong, chính là căn 和室 của
        đêm ấy. 座布団 thứ năm nằm đúng chỗ nó nằm ở S04
CAMERA  boom-down chậm từ 2,8m xuống 0,75m, 50mm, kết ở đúng cao độ `CAM_ORIGIN` nhưng **quay 90°
        sang trái** — cùng phòng, góc khác (tránh lặp khung S02)
ELEMENT 0s nhìn xuống ô 6.7% từ trên · 6s hạ xuống, mép ô nở ra thành mép chiếu tatami thật · 12s
        **座布団 thứ năm còn dở dang ở tiền cảnh** — cùng vật thể của S04, cùng nếp gập dở · 16s
        **vùng tối 25cm của S04 cũng ở đó**, nguyên độ đậm 12% · 21s một khung chữ nhật mảnh sáng
        lên **bao quanh cả cảnh** — cái ô trong báo cáo; nhãn `6.7%` ở mép trên khung, nguồn nhỏ
        `Menec et al., PLOS ONE (2020)` bên dưới · 26s khung giữ sáng, ⛔ khung **không siết vào**,
        không co lại — nó là chỗ ngồi có tên, không phải cái cũi
SFX     ドローン lắng xuống (C34 [AUDIO DIRECTION] tới ở shot sau)
CUT     hoà tan 2s sang S17

## S17 · C34 · ⭐⭐ CÚ HAI THƯỚC — chốt chặng 2
SCENE   Camera lên cao nhìn xuống **cả hai lớp xếp chồng cùng lúc**. Một đường kẻ **1,2m** nằm trên
        lớp 1, một đường kẻ **40m** nằm trên lớp 2 — **đo cùng một cặp người**
CAMERA  boom-up lên 4,5m, 28mm, chếch xuống 70°, dừng hẳn ở 4s và **giữ tĩnh tới hết shot**
ELEMENT 0s camera dâng lên, thấy lớp 1 (phòng thật, sáu người sát nhau) · 4s lớp 2 hiện dưới dạng
        **cùng sáu người ấy trải rộng ra** trong không gian sâu hơn, sương mỏng; hai lớp thẳng hàng
        theo trục dọc — người thứ n ở lớp 1 nối thẳng xuống người thứ n ở lớp 2 bằng một sợi sáng
        rất mảnh · 6s **đường kẻ thứ nhất**: nối 私 với người gần nhất trên lớp 1, nhãn `1.2 m` ·
        8,5s **đường kẻ thứ hai**: nối đúng hai người ấy trên lớp 2, nhãn `40 m` · 10s hai nhãn
        cùng hiện trong một khung, **cả hai đều sáng bằng nhau** — ⛔ không cái nào được vẽ như
        "sai" hay "ảo giác" · 12s hai cây thước gỗ của S12 (có vạch / không vạch) trở lại, mỗi cây
        đặt cạnh một đường kẻ tương ứng · 14s nhãn nguồn mép dưới `Menec et al., PLOS ONE (2020)`
        giữ tới hết
CUT     fade sang tối 1,5s, gần như hết sáng, rồi vào S18 — chương 3 bắt đầu từ chỗ tối

---

# 第3章 — 深いところ (C35–C66) · 12 shot · ~360s

Chương dài nhất. Ba phần: **(a) tín hiệu** S18–S23 · **(b) vòng lặp** S24–S27 · **(c) giới hạn +
YMYL** S28–S29. Ánh sáng chuyển sang **xiên thấp một nguồn** — cảm giác bàn làm việc, gần, riêng tư.

## S18 · C35–C37 · 第3章 thẻ chương · live-object
SCENE   Từ tối, một khay gỗ 木の盆 hiện ra dưới ánh sáng xiên. Trên khay chưa có gì. Mặt gỗ có vân,
        có cạnh mòn, có bóng đổ dài
CAMERA  85mm, cao 0,4m gần ngang mặt khay (góc thấp — nhìn vật ngang tầm mắt, không nhìn xuống),
        **push-in rất chậm** suốt shot
ELEMENT 0s tối, một mép gỗ bắt sáng · 3s thẻ chương 「第3章 深いところ」 mép dưới-trái, 4s rồi tan ·
        6s khay hiện đủ: gỗ 欅, vân chạy dọc, sơn mòn ở hai góc, bóng đổ dài sang trái (nguồn sáng
        xiên từ phải 25°) · 12s nhãn nguồn hiện ở mép dưới-phải và **giữ suốt phần (a)**:
        `Cacioppo & Patrick (2008)` · 18s dưới nhãn, dòng thứ hai nhỏ hơn: `John T. Cacioppo`
        (ghi cả tên Latin — ràng buộc packaging) · 24s khay vẫn trống, camera đã vào gần hơn
SFX     tiếng khí nhạt đi (C35 [AUDIO DIRECTION]); tiếng một cái bát đặt xuống gỗ
CUT     cắt phẳng sang S19

## S19 · C38–C39 · live-object (ba thứ đầu tiên)
SCENE   Ba vật lần lượt được đặt lên khay — nhưng **chỉ hai cái là vật**, cái thứ ba là **chỗ trống**
CAMERA  60mm, cao 0,4m, **dolly ngang trái→phải** rất chậm dọc theo khay, dừng ở chỗ trống thứ ba
ELEMENT 0s khay trống · 4s **chén nước** đặt vào bên trái: sứ trắng, nước đầy 2/3, mặt nước có
        phản xạ nguồn sáng xiên, **mặt nước phẳng rồi gợn tắt dần** (hàm thuần của t, tắt theo
        exponential) — nhãn 「渇き」 · 10s **chén cơm** đặt vào giữa: gốm sẫm, cơm trắng đầy vun,
        hơi ấm rất mỏng bốc lên — nhãn 「飢え」 · 16s bên phải hai chén, **một vết lõm trên vân gỗ
        đúng đường kính một chén nữa** — chỗ đã từng có vật đặt, nhưng đang trống; nhãn 「痛み」
        hiện tạm ở đây rồi trượt sang… không, nhãn 「痛み」 đặt **phía trước hai chén** ở tiền cảnh
        dưới (là thứ thứ ba của lời đọc, không phải chỗ trống) · 22s camera dừng trên **chỗ trống
        thứ tư** ở mép phải khay — ⛔ chưa có nhãn, chưa sáng
SFX     tiếng bát đặt xuống, hai lần
CUT     giữ khung sang S20 — không cắt, chỗ trống đang chờ

## S20 · C40 · ⭐ CHỖ TRỐNG THỨ TƯ SÁNG LÊN
SCENE   Đúng lúc lời đọc nói 「四つ目として」, **chỗ trống trên khay sáng lên ngang hai chén kia**
CAMERA  tĩnh 60mm ở vị trí S19 kết thúc; **không chuyển động** — cả shot là một sự kiện ánh sáng
ELEMENT 0s khay với hai chén và chỗ trống · 3s chỗ trống **nhận cùng một ánh sáng xiên như hai
        chén** — không phải phát sáng tự thân, mà là **nguồn sáng của cảnh rọi tới nó**; bóng đổ
        của nó xuất hiện đúng hướng và đúng độ dài với hai chén bên cạnh · 6s nhãn 「寂しさ」 hiện
        tại chỗ trống, **cùng cỡ chữ, cùng màu, cùng độ sáng với 「渇き」và「飢え」** — đây là ý
        "cùng một hàng" · 9s camera vẫn tĩnh, **một đường sáng mảnh nối bốn vị trí thành một hàng
        thẳng** · 10,4s hàng giữ nguyên, ⛔ không nhấn mạnh thêm, không zoom
SFX     間 (C40 [AUDIO DIRECTION]); tiếng vật thứ ba đặt xuống — **nhưng không có vật nào đặt xuống**;
        chỉ tiếng, không hình. Đây là chỗ hình và tiếng cố ý lệch một nhịp
CUT     hoà tan 1,5s sang S21

## S21 · C41–C43 · procedural (vì sao có tín hiệu này)
SCENE   Lùi rất xa về thời gian: một nhóm khối người quanh một đốm lửa trong bóng tối rộng. Một
        khối tách ra, đi xa dần khỏi vòng sáng
CAMERA  24mm rộng, cao 1,6m, **dolly-out chậm** để vòng sáng nhỏ dần trong khung tối
ELEMENT 0s vòng người quanh lửa — cùng ngôn ngữ khối như 和室 (khối tối giản có thể tích, không mặt),
        ⛔ không trang phục, không thời kỳ cụ thể, không cảnh săn bắt · 6s một khối tách khỏi vòng,
        bước ra ngoài rìa sáng · 12s **khoảng cách giữa nó và vòng lửa đo được**: một đường sáng
        mảnh nối, dài dần · 18s trên khối tách ra, **một điểm sáng ấm bật lên ở giữa thân** — tín
        hiệu; nó **kéo khối quay đầu lại** (chuyển động chậm, 4s) · 24s khối bước về phía vòng lửa,
        điểm sáng mờ dần khi khoảng cách rút lại · 28s nhãn mép dưới 「信号」 · 30s camera dừng
CUT     cắt phẳng sang S22

## S22 · C43 tiếp–C45 · procedural (cái gì làm nó kêu)
SCENE   Hai cách đo cùng một tình huống: **đếm số người** và **cảm giác đủ hay thiếu**. Cái thứ
        hai mới là thứ bật tín hiệu
CAMERA  50mm, cao 1,1m, orbit chậm 20° quanh khối người ở giữa
ELEMENT 0s một khối người ở giữa, quanh nó tám khối khác ở khoảng cách đều · 5s **bộ đếm hiện: một
        dãy tám chấm sáng** (đếm người, ⛔ không phải số liệu nghiên cứu, không có phần trăm) ·
        9s tám chấm **đầy đủ**, nhưng điểm sáng trên khối giữa **vẫn bật** — số người đủ mà tín hiệu
        vẫn kêu · 14s **dãy tám chấm tắt hẳn và rút khỏi khung** — nó không phải thứ điều khiển ·
        18s thay vào đó: **các sợi nối giữa khối giữa và tám khối kia hiện ra**, sợi dày mỏng khác
        nhau; vài sợi rất mảnh · 24s khi một sợi dày lên, điểm sáng dịu lại · 28s **đảo ý**: điểm
        sáng đổi từ màu "cảnh báo trung tính" sang **cùng tông ấm với ánh sáng phòng 3200K** —
        「働いているから鳴るんです」 · 32s nhãn 「壊れているのではない」 mép dưới
SFX     C44: giọng chậm lại — bỏ hết SFX, chỉ ドローン
CUT     cắt phẳng sang S23

## S23 · C45 tiếp–C46 · live-object (火災報知機)
SCENE   Một cái 火災報知機 trắng trên trần 和室, nhìn từ dưới lên. Đèn báo nhỏ nhấp nháy đều — **đang
        hoạt động**. Đây là ví dụ chính lời đọc dùng
CAMERA  35mm, cao 1,3m, **tilt-up** từ mép trần lên thiết bị, dừng ở 6s
ELEMENT 0s trần 和室 có 竿縁, gỗ sẫm, ánh sáng hắt lên từ đèn phòng · 3s thiết bị vào khung: nhựa
        trắng ngà, lưới thoáng, mép tròn — vật thật, không biểu tượng · 6s đèn báo nhỏ **nhấp nháy
        chu kỳ 4s** (hàm của t) · 9s ⛔ **không có khói, không có lửa, không có báo động kêu** —
        thiết bị chỉ đang ở trạng thái bình thường, sẵn sàng
CUT     hoà tan 1,2s (gap sau C45) sang S24 — ánh sáng chuyển sang lối đi

## S24 · C47–C50 · procedural (nguồn 2010 + cảnh giác tự động)
SCENE   Trở lại mặt gỗ và trang giấy — bài tổng quan thứ hai. Rồi từ trang giấy, **một lối đi hiện
        ra trong không gian**
CAMERA  60mm cận trang giấy, **dolly-in rồi boom-up** liên tục, kết ở nhìn xuống lối đi từ 2,2m
ELEMENT 0s trang giấy trên gỗ, ánh sáng xiên · 4s dòng nguồn hiện, **bắt buộc**:
        `Hawkley LC & Cacioppo JT, Annals of Behavioral Medicine 40(2): 218–227 (2010)` — giữ nhỏ
        ở mép khung suốt S24–S27 · 9s dòng thứ hai: `implicit hypervigilance for social threat` ·
        14s camera dâng lên, trang giấy **trở thành mặt đất** của một lối đi rộng, đủ sáng · 20s
        trên lối đi, **một khối người đi tới**; quanh nó, các chi tiết nhỏ của môi trường **bật
        sáng nhanh hơn bình thường khi lọt vào tầm** — một cành khô, một bóng đổ, một chuyển động
        xa; đây là "nhạy hơn với dấu hiệu" · 26s nhãn 「身を守るための働き」 · 32s **các chi tiết ấy
        bật sáng TRƯỚC khi khối người quay đầu nhìn** — cảnh giác chạy dưới mức ý thức
SFX     giấy lật; sau đó chỉ ドローン. C50 有間 — rút SFX từ 26s
CUT     cắt phẳng sang S25

## S25 · C51–C54 · procedural (một vòng của vòng lặp)
SCENE   Bốn chặng của vòng lặp, dựng thành **bốn đoạn của một lối đi cong** — 私 đi hết một vòng
        và về đúng chỗ xuất phát
CAMERA  40mm, cao 1,5m, **bám theo khối người đi** (tracking chậm, mượt), camera luôn hơi chếch bên
ELEMENT 0s khối người bước trên lối · 6s **chặng 1 — 「気配を強く読む」**: một khối người khác bên lối
        có một chuyển động rất nhỏ (ngáp/quay đi); trên lối, chuyển động ấy **để lại một vệt sáng
        đậm hơn thực tế** · 12s **chặng 2 — 「冷たくされたと感じる」**: vệt ấy trở thành một mảng tối
        nhẹ trên mặt lối phía trước · 18s **chặng 3 — 「少し引く」**: khối người **đi lệch sang mép
        lối 40cm** — động tác rất nhỏ, đúng 「ごく小さな動き」 · 24s **chặng 4 — 「相手も深く誘わなくなる」**:
        các khối người bên lối cũng lùi ra 40cm · 30s camera hé cho thấy lối **cong về** — 私 đang
        ở gần đúng điểm xuất phát · 34s nhãn 「輪になった道」 mép dưới; ⛔ vòng **không nhỏ lại**,
        bán kính giữ nguyên
CUT     cắt phẳng sang S26 — **cắt đúng chỗ lời đọc chuyển sang giọng gỡ tội**

## S26 · C55–C58 · ⭐⭐ GỠ TỘI — hình phải nói đúng điều lời đọc nói
SCENE   Camera lùi lên cao và cho thấy: **trên lối đi ấy KHÔNG chỉ có một người.** Rất nhiều khối
        người khác cũng đang đi trên cùng những vòng như vậy — cơ chế chung, không phải chẩn đoán
CAMERA  **boom-up chậm và liên tục** từ 1,5m lên 6m, 28mm, chếch xuống 45°; một chuyển động duy nhất
        trải cả shot, không dừng, không giật
ELEMENT 0s vòng của 私, một người · 6s camera lên, **vòng thứ hai hiện ra bên cạnh** với một khối
        người khác đang đi · 12s **vòng thứ ba, thứ tư, thứ năm** — mười mấy vòng rải khắp mặt phẳng,
        mỗi vòng một người, tất cả **cùng kích thước, cùng độ sáng** · 18s nhãn 「誰にでも起こりうる」
        · 24s **cơ chế được vẽ như thứ BẢO VỆ**: trên mỗi vòng, một lớp sáng mỏng ôm quanh khối
        người như một tấm che — nó đang đứng **giữa người và thứ làm đau**; 「あなたを守るために
        働いていました」 · 32s nhãn 「あなたがやっている失敗ではありません」 · 38s ánh sáng trên toàn
        cảnh **ấm lên 15%** — hình đang gỡ, không đang kết tội
        ⛔ CẤM ở shot này: vòng siết nhỏ, dây, lồng, mũi tên, màu đỏ, nhịp tim, đếm ngược,
        bóng tối đuổi theo, camera hạ xuống nhìn từ trên như phán xét
SFX     rút hết; giữ 1,5s im (gap sau C58)
CUT     hoà tan 2s sang S27

## S27 · C59–C61 · ⭐ NHÁNH RẼ — lối không khép kín
SCENE   Trở lại một vòng. Lời đọc nói 「閉じきった輪ではありません」 — và **ở đúng câu đó, lối mở ra
        một nhánh rẽ sang bên, sáng hơn lối vòng**
CAMERA  hạ từ 6m xuống 2,0m, 40mm, dừng ở 10s rồi **giữ tĩnh** cho người xem nhìn kỹ chỗ rẽ
ELEMENT 0s camera hạ, một vòng vào khung · 5s tiếng giấy lật — nhãn 「多くの人を見たときの傾向」 ·
        10s camera dừng; trên vòng, **nhiều khối người mờ đi vào và đi ra** ở các điểm khác nhau
        — 「入って、また出ていった人は大勢います」 · 16s **nhánh rẽ hiện ra**: một lối phụ tách khỏi
        vòng ở phía bên, **rộng bằng lối chính, sáng hơn 20%**, đi ra khỏi khung — ⛔ không phải khe
        hẹp, không phải cửa thoát hiểm, không phải tia hy vọng mảnh · 22s nhánh rẽ thứ hai ở điểm
        khác · 26s nhãn 「脇へ抜ける枝道」; nguồn `Hawkley & Cacioppo (2010)` mờ dần khỏi khung ở cuối
SFX     giấy lật một lần (C59 [AUDIO DIRECTION]), giọng chuyển sang thực tế
CUT     cắt phẳng sang S28

## S28 · C62–C65 · procedural (giới hạn — ba điều chưa biết)
SCENE   Trang báo cáo trở lại trên mặt gỗ, nhưng lần này camera nhìn thấy **mép trang** — thấy cả
        chỗ trang giấy **kết thúc**. Giới hạn dựng thành mép giấy, không thành lời cảnh báo
CAMERA  50mm, cao 0,5m chếch 30°, **dolly-out chậm** cho tới khi thấy cả trang và mặt gỗ trống quanh nó
ELEMENT 0s cận chữ trên trang · 5s **giới hạn 1 — mẫu Canada**: trên trang, dòng `CLSA · Canada ·
        n = 30,079` sáng lên; ⛔ **không vẽ bản đồ**, không vẽ quốc kỳ, không vẽ hai nước so sánh ·
        11s **giới hạn 2 — cắt ngang**: một trục thời gian mảnh vẽ trên gỗ, và trên trục đó **chỉ
        một vạch duy nhất** sáng lên (baseline), phần trước và sau vạch **để trống, không tô màu** ·
        18s nhãn `baseline 横断調査 · Menec et al., PLOS ONE (2020)` · 24s **giới hạn 3 — chưa biết
        cách làm nó tan**: camera lùi thấy **mép trang giấy**, và ngoài mép là **mặt gỗ trống** —
        vùng chưa có chữ. Vùng trống này **đủ sáng, không tối**, nó là chỗ chưa biết chứ không phải
        chỗ nguy hiểm · 32s hai dòng còn lại trên trang giữ sáng: 「別の物差し」/「信号」 — đúng hai
        thứ lời đọc nói là ĐÃ biết
CUT     hoà tan 1,5s sang S29

## S29 · C66 · live-object (YMYL — một câu, không kê đơn)
SCENE   Phòng 和室 trở lại, đèn đêm. Cửa 障子 **hé mở một khoảng** ra hành lang có ánh sáng.
        Một cánh cửa mở là đủ — không biểu tượng y tế, không người, không điện thoại
CAMERA  50mm, cao 0,75m, tĩnh hoàn toàn 16,5s
ELEMENT 0s phòng, cửa đóng · 4s **cửa 障子 trượt mở 30cm**, ánh sáng hành lang (4000K, trung tính)
        lọt vào thành một dải trên chiếu · 9s dải sáng giữ nguyên; ⛔ không ai bước vào, không ai
        bước ra · 13s nhãn duy nhất, chữ nhỏ, trung tính: 「一人で抱える決まりは、どこにもありません」
        · ⛔ CẤM: chữ thập y tế, ống nghe, số điện thoại tư vấn, mũi tên chỉ ra cửa, chữ 「相談しましょう」
SFX     không; chỉ ドローン rất thấp
CUT     fade toàn bộ về gần tối 2s, rồi vào S30

---

# 第4章 — 帰り道 (C67–C80) · 5 shot · ~134s

Về đúng căn phòng của chặng 1. **Cùng góc máy `CAM_ORIGIN`**, cùng vật thể, cùng ánh sáng —
nhưng đã khác. ⛔ Chương này **không một con số nào**, không nhãn nguồn, không phần trăm.
Âm thanh rút hết, chỉ còn sự im của căn phòng và kim giây (C67 [AUDIO DIRECTION]).

## S30 · C67–C68 · ⭐⭐ CÚ KHÉP — đúng `CAM_ORIGIN` của S02
SCENE   Căn 和室 ấy, 11 giờ đêm ấy. **座布団 thứ năm vẫn nằm trên chiếu, chưa gập.** Camera ở đúng
        tọa độ S02 — người xem nhận ra ngay đây là chỗ cũ
CAMERA  **tĩnh 40mm, cao 0,75m, chếch xuống 6° — copy nguyên `CAM_ORIGIN` của S02.** Không dolly.
        Khác duy nhất với S02: thời lượng dài hơn và ánh sáng thấp hơn 8%
ELEMENT 0s fade-in từ tối, phòng hiện lại — cùng bố cục S02, cùng vị trí từng 座布団 · 5s **座布団
        thứ năm ở đúng chỗ, nửa gập, chưa xong** (cùng mesh, cùng nếp gập của S04) · 9s **lớp 2
        còn lại một vệt rất nhạt**: các khối người ở 40m chỉ còn opacity **~7%**, gần như không
        thấy nhưng **không biến mất** — ⛔ tuyệt đối không cho nó tan hết; đây là lời hứa "nó có chỗ",
        không phải "nó sẽ hết" · 13s **một khối người ngồi xuống cạnh 座布團 thứ năm** — 私, khối tối
        giản, tư thế 正座, không mặt; ⛔ không đưa tay ra gập · 16s không ai động; vùng tối 25cm
        vẫn ở đó, nguyên độ đậm 12%
SFX     rút hết (C67 [AUDIO DIRECTION]); chỉ kim giây
CUT     cắt phẳng sang S31

## S31 · C69–C72 · live-object (điều khác thứ nhất)
SCENE   Cận vùng tối trong ngực — nó **vẫn còn**, lời đọc không hứa nó tan. Rồi quanh nó, ba dấu
        nhỏ lần lượt hiện: đây là điều khác thứ nhất — nó **có tên, có người đếm, có một ô**
CAMERA  từ `CAM_ORIGIN`, **push-in chậm 40→70mm** tới cận 私 và vùng tối; dừng ở 14s
ELEMENT 0s vùng tối trong khung, độ đậm 12% — **không đổi, không co lại** · 6s nhãn 「消えます、とは
        言えません」 rồi tan · 12s ba dấu rất nhỏ hiện quanh vùng tối như **ba vệt khắc trên gỗ**:
        dấu thứ nhất sáng lên · 18s ⛔ **không hiện lại con số 6.7%** (chặng 4 cấm số); thay vào
        đó, **khung chữ nhật mảnh của S16 trở lại rất mờ, ôm lấy cả cảnh** — người xem đã biết nó
        nghĩa là gì · 26s khung giữ opacity 25%, ⛔ không siết · 32s nhãn 「私がはじめてではなかった」
CUT     cắt phẳng sang S32

## S32 · C73–C74 · live-object (điều khác thứ hai)
SCENE   Dấu thứ hai. Vùng tối **không phải chỗ hỏng** — và hình nói điều đó bằng cách đổi **nguồn
        sáng**, không bằng cách làm nó biến mất
CAMERA  70mm, **orbit chậm 15°** quanh 私 và vùng tối — lần đầu chương 4 camera đi vòng, cho thấy
        vùng tối **có ba chiều**, không phải vệt phẳng dán lên màn hình
ELEMENT 0s orbit bắt đầu, vùng tối lộ chiều sâu thật · 6s trong lòng vùng tối, **một điểm sáng ấm
        rất nhỏ bật lên** — cùng màu điểm sáng tín hiệu của S21/S22, cùng tông 3200K · 12s điểm
        sáng **nhịp đều chu kỳ 4s** như đèn báo 火災報知機 của S23 — hai shot nối nhau bằng cùng
        một nhịp · 16s dấu thứ hai trong ba vệt khắc sáng lên · 20s ⛔ vùng tối **không nhỏ lại**
        vì có điểm sáng; hai thứ cùng tồn tại
SFX     kim giây; ドローン rất thấp
CUT     hoà tan 1,5s sang S33

## S33 · C75–C78 · ⭐ HAI LỚP CÙNG ĐÚNG — chốt của cả tập
SCENE   Ba ngày ấy trở lại **cùng lúc** với vùng tối: đứa cháu ngủ trên chiếu, tiếng cười, cái vẫy
        tay ở 玄関 — **và vùng tối ở giữa tất cả**. Không cái nào phải biến đi để cái kia đúng
CAMERA  từ vị trí S32, **dolly-out chậm liên tục** về `CAM_ORIGIN` rồi lùi thêm 0,6m, 35mm
ELEMENT 0s 私 và vùng tối · 5s **lớp ba ngày trước fade vào chồng lên** (cùng kỹ thuật S05/S14,
        không cắt): sáu khối người, đèn sáng hơn 30%, chén trà đầy · 11s khối nhỏ nằm ngang trên
        chiếu — đứa cháu ngủ, 座布団 kê dưới đầu · 16s cửa 玄関 ở chiều sâu khung, một khối người
        đứng đó, **bàn tay giơ lên** (vẫy — chuyển động chậm, biên độ nhỏ) · 22s **vùng tối vẫn ở
        giữa khung, nguyên độ đậm 12%**, không bị người che lấp · 28s **hai cây thước gỗ của S12
        trở lại, rất mờ, mỗi cây nằm dưới một lớp** — có vạch dưới lớp người, không vạch dưới vùng
        tối; ⛔ không nhãn số, không đơn vị · 34s nhãn duy nhất 「どちらかが嘘なのではありません」 ·
        40s hai lớp **cùng giữ, cùng sáng ngang nhau** tới hết shot
SFX     tiếng cười trở lại **rất nhẹ, không vọng, không reverb dài** — lần này nó ở gần
CUT     giữ 2,0s gap (sau C78), hai lớp cùng mờ đi 40%, rồi vào S34

## S34 · C79–C80 · ⭐ GỠ CHỮ 薄情 · kết
SCENE   Về đúng `CAM_ORIGIN` lần cuối. Phòng như S02, như S30. Chữ 「薄情」 gieo ở S06 **trở lại —
        rồi tan**, trong khi 座布団 thứ năm và vùng tối ở lại
CAMERA  **tĩnh tuyệt đối 40mm, cao 0,75m — `CAM_ORIGIN`.** Không một chuyển động nào trong 17,3s
ELEMENT 0s phòng, 私 ngồi, 座布團 thứ năm chưa gập, vùng tối nguyên · 4s **chữ 「薄情」 hiện lại ở
        đúng chỗ nó hiện ở S06** (mép dưới-trái), cùng cỡ, cùng độ mờ · 8s **hai cây thước gỗ hiện
        rất mờ ở hai bên chữ**, một có vạch một không · 11s **chữ 「薄情」 tan dần — nó tan vì nó
        không đo được bằng thước nào trong hai cây**; ⛔ không gạch chéo, không vỡ, không nổ, không
        đổi màu đỏ; chỉ **mờ đi và hết**, trong 4s · 15s hai cây thước cũng mờ theo · 17s còn lại
        trong khung: **căn phòng, 座布団 thứ năm chưa gập, vùng tối 12%, và 私 vẫn ngồi đó** ·
        fade về đen trong 3s cuối
SFX     im hoàn toàn từ 11s; chỉ kim giây, rồi kim giây cũng nhỏ dần
CUT     đen → outro 5s (`scripts/apply-lead-tail.mjs` chèn)

---

# GHI CHÚ DỰNG HÌNH

Quy ước dùng chung cho cả tập. visual-builder đọc mục này **trước khi** dựng shot đầu tiên.

## 1. Bảng màu và ánh sáng

| Vai trò | Giá trị | Dùng ở đâu |
|---|---|---|
| Đèn 和室 (nguồn chính) | **3200K** ấm, chụp giấy, nón sáng đổ xuống | mọi cảnh trong phòng |
| Ánh sáng ban ngày ở vườn | **5600K** gián tiếp, ấm nhạt | S09 |
| Giấy in / nghiên cứu | **5000K** lạnh hơn, xiên thấp | S07 (vệt hé), S11, S12, S24, S28 |
| Hành lang (YMYL) | **4000K** trung tính | S29 |
| Lớp 2 感じる距離 | **3200K y hệt lớp 1**, chỉ giảm cường độ 45% + sương mỏng | S13–S17, S30, S33 |
| Điểm sáng tín hiệu | 3200K, ấm, nhịp chu kỳ 4s | S21, S22, S23, S32 |

⛔ **Lớp 2 không được đổi nhiệt độ màu.** Đổi sang lạnh/xanh là biến nó thành cảnh ác mộng —
vi phạm ràng buộc 5. Nó chỉ xa hơn, không đáng sợ hơn.

## 2. Hình học phải đúng (đo được bằng mét)

- **Chiếu tatami: 88 × 176 cm**, dày 5,5cm. Phòng sáu chiếu xếp **田の字**, không xếp 祝儀敷き lộn xộn.
- **座布団: 55 × 59 cm** (khổ 銘仙判), dày 5cm khi phồng, ~10cm khi gập đôi. Có **mép bọc bốn cạnh**
  và **một núm chỉ ở giữa** (房/とじ糸) — mặt có núm là mặt trên, mặt không có núm úp xuống.
  Cạnh có đường may kín là **mép trước**, hướng về phía đầu gối người ngồi.
- **Trần có 竿縁** chạy **song song với cạnh dài của chiếu**, không vuông góc.
- **座卓 cao 33cm**, không phải bàn ghế Tây.
- **Khoảng cách 私 ↔ người gần nhất ở lớp 1: 1,20 m** (cố định, dùng lại ở S14 và S17).
- **Khoảng cách tương ứng ở lớp 2: 40,0 m** (cố định).
- Khối người: cao **~1,05 m** ở tư thế 正座, **có thể tích thật + bóng đổ mềm**. ⛔ Không billboard
  phẳng (luật 2 của CLAUDE.md). ⛔ Không mặt, không biểu cảm — đọc ra là người nhờ tư thế và bóng.
- **障子:** khung gỗ chia ô, giấy có sợi thật, **subsurface scattering nhẹ**, ánh sáng lọt qua giấy.
  Mở bằng cách **trượt ngang**, không bản lề.

## 3. Hệ hai lớp — quy ước bắt buộc

Đây là thứ tách tập này khỏi kênh 1. Ba luật:

1. **Cùng người, cùng hình dạng, cùng kích thước.** Khối người ở lớp 2 là **cùng mesh** với lớp 1,
   chỉ đổi **vị trí**. ⛔ Không scale, không biến dạng, không đổi màu. Nếu người xem thấy chúng
   khác nhau, ý "cùng những con người ấy, đo bằng thước khác" bị mất.
2. **Căn phòng vẫn hiện diện ở lớp 2** dưới dạng khung lưới rất mờ (opacity ~15%): đường 竿縁 trần
   và mép chiếu còn thấy. Phòng không biến mất — chỉ người dời xa.
3. **Chuyển lớp luôn bằng fade ≥6s, không cắt.** Cắt sẽ đọc thành "hai cảnh khác nhau"; fade đọc
   thành "cùng một cảnh, hai thước đo". S14 dùng 11,6s.

**Bốn nhóm CLSA đọc thẳng ra từ vị trí tương đối hai lớp** (S13–S15):

| Nhóm | Lớp 1 (mét) | Lớp 2 (cảm nhận) | Đọc ra |
|---|---|---|---|
| `74.7%` どちらでもない | người sát nhau | chồng gần khít lớp 1 | gần ở cả hai thước |
| `15.6%` 孤立のみ | người **thưa** | vẫn chồng gần lớp 1 | xa về mét, **không** xa về thước kia |
| `6.7%` 孤独のみ | người **sát nhau** | **trải ra rất xa** | gần về mét, xa về thước kia |
| `3.0%` 両方 | người thưa | trải ra xa | xa ở cả hai thước |

Diện tích bốn ô sàn (S13–S15) **đúng tỉ lệ với phần trăm** — 74,7% chiếm gần ba phần tư mặt sàn.

## 4. Vật thể lặp lại — giữ nguyên một mesh, đừng dựng lại

| Vật | Xuất hiện ở | Ràng buộc |
|---|---|---|
| **座布団 thứ năm** (nửa gập) | S04, S06, S16, S30, S31, S34 | **cùng một mesh, cùng nếp gập dở**. Đây là mỏ neo của cả tập |
| **Vùng tối 25cm, độ đậm 12%** | S04, S05, S06, S16, S31, S32, S33, S34 | **không bao giờ đổi kích thước hay độ đậm**. Không phải hình trái tim, không phải lỗ thủng, không có viền — là **một vùng thiếu sáng mép mềm trong không gian thật** |
| **Hai cây thước gỗ** (có vạch / không vạch) | S12, S17, S33, S34 | cùng mesh; ở chặng 4 hiện **rất mờ, không nhãn số** |
| **Khung chữ nhật mảnh** (= ô trong báo cáo) | S16, S31 | ⛔ **không bao giờ siết vào hay co lại**. Nó là chỗ ngồi có tên |
| **`CAM_ORIGIN`** (40mm, cao 0,75m, chếch xuống 6°) | S02, S30, S34 | **copy nguyên tọa độ**. Vòng khép của tập nằm ở chỗ này |
| **Điểm sáng tín hiệu** (3200K, nhịp 4s) | S21, S22, S23, S32 | cùng màu, cùng chu kỳ — nối bốn shot xa nhau bằng một nhịp |

## 5. Nhãn tiếng Nhật trên canvas texture

- Khai `'BIZ UDPGothic'` (`assets/fonts/`, `@font-face` trong composition).
- **`await document.fonts.load(...)` trước nhãn canvas đầu tiên.** Font CJK ~4,6 MB; vẽ trước khi
  font về thì canvas đo nhầm metric và nhãn sai cỡ **rải rác**, rất khó truy.
- ⛔ `"Segoe UI"` không có glyph CJK → tofu.
- Nhãn trên hình là **nhãn ngắn**, không phải phụ đề. Phụ đề sinh riêng bằng `gen-captions.mjs`.

## 6. Con số trên hình — bảng tra nhanh

| Con số | Shot | Nhãn nguồn bắt buộc cùng khung |
|---|---|---|
| `n = 30,079` · `45–85歳` | S11 | `Menec VH et al., PLOS ONE 15(3): e0230673 (2020)` · `CLSA · Canada` |
| `74.7%` · `15.6%` | S13 | `Menec et al., PLOS ONE (2020)` |
| `6.7%` | **S14**, S16 | `Menec et al., PLOS ONE (2020)` |
| `3.0%` · `15.6% + 6.7% = 22.3%` | S15 | `Menec et al., PLOS ONE (2020)` |
| `1.2 m` · `40 m` | **S17** | (số hình học của cảnh dựng, không phải số liệu — không cần nguồn) |
| `baseline 横断調査` · `CLSA · Canada` | S28 | `Menec et al., PLOS ONE (2020)` |
| (vòng lặp, không số) | S24–S27 | `Hawkley LC & Cacioppo JT, Ann Behav Med 40(2): 218–227 (2010)` |
| (tín hiệu, không số) | S18–S23 | `Cacioppo & Patrick (2008)` · `John T. Cacioppo` |

⛔ **Chặng 1 (S01–S07) và chặng 4 (S30–S34): không một con số nào, không một nhãn nguồn nào.**
Nhãn 「夜十一時」 ở S02 là **chữ, không phải số** — không vẽ mặt đồng hồ, không vẽ `23:00`.

## 7. Motif lặp cần tránh

- ⛔ **Hai shot liền nhau cùng cỡ cảnh + cùng góc.** Đã kiểm: S03→S04 cùng 85mm nhưng **khác nhịp**
  (S03 dolly, S04 dừng hẳn — nhịp gãy là chủ ý). Mọi chỗ khác đã đổi cỡ cảnh hoặc độ cao.
- ⛔ **Không đặt chủ thể vào giữa khung mặc định.** S01 lệch phải, S03 lệch trái, S05 chủ thể ở
  1/3 trên-trái. Chỉ ba shot cố ý đặt giữa: **S14, S17, S34** — đó là ba chỗ chốt.
- ⛔ **Không lặp cú "fade hai lớp" quá ba lần.** Dùng đúng ba lần: S05 (giới thiệu), **S14 (đỉnh)**,
  S33 (chốt). S30 chỉ là vệt còn lại, không phải một cú fade mới.
- ⛔ **Không dùng lại cảnh đêm-một-mình-trước-một-vật của tập 01.** Tập này 私 luôn ở trong **động
  tác** hoặc trong **một không gian có cấu trúc**; chỉ S30 và S34 cho 私 ngồi yên — và đó là kết,
  không phải mở.
- ⛔ **Không vẽ mũi tên, không vẽ sơ đồ phẳng, không vẽ biểu đồ cột.** Đó là ngôn ngữ kênh 1.
  Mọi "sơ đồ" của tập này là **vật thể hoặc địa hình trong không gian ba chiều**.

## 8. Tất định

- Mọi ngẫu nhiên → **mulberry32 với seed cố định**. Danh sách chỗ cần seed: vết lõm trên 座布団,
  vị trí hạt bụi trong luồng sáng, vân gỗ khay, sợi giấy 障子, vị trí các vòng ở S26.
- Mọi chuyển động là **hàm thuần của `t`**. ⛔ Không `+= dt`, không `requestAnimationFrame`,
  không `Date.now`, không `Math.random`.
- Nhịp nhấp nháy đèn báo / điểm sáng tín hiệu: `sin(2πt/4)` — cùng một công thức ở S23 và S32.
- Gợn mặt nước trong chén (S19): biên độ tắt theo `exp(-k·(t-t0))`, không phải noise theo frame.

## 9. Kiểm sau khi dựng (⚠ `npm run check` PASS không có nghĩa là hình đúng)

Snapshot tối thiểu **15 mốc** rồi mở `contact-sheet.jpg` ra nhìn. Tập có intro 2s → **chụp ở X+2**:

`42` · `82` · `92` · `115` · `148` · `189` · `230` · `250` · `283` (S14 đỉnh) · `346` (S17) ·
`409` (S20) · `495` · `585` (S26 gỡ tội) · `642` (S27 nhánh rẽ) · `714` (S30) · `832` (S34)

Bốn thứ phải nhìn tận mắt trên contact sheet:
1. **S14 (chụp 285):** có thấy **đồng thời** hai lớp không? Nếu chỉ thấy một lớp → fade sai, đỉnh của tập mất.
2. **S17 (chụp 348):** hai nhãn `1.2 m` và `40 m` có **cùng khung, cùng độ sáng** không?
3. **S26 (chụp 587):** có thấy **nhiều vòng**, không phải một vòng không? Một vòng = hình đang chẩn đoán, sai ràng buộc 4.
4. **S34 (chụp 834):** 座布団 thứ năm có còn **chưa gập** không? Nếu nó đã gập vuông → vòng khép sai nghĩa.
