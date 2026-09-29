# Chiến lược kênh Nhật — 死と「その後」

Sổ vận hành của **kênh này** (repo `2\1. Tam Ly, Tam Linh`). Thay cho `chien-luoc-kenh.md` —
file đó là của kênh Việt "Du Mục Vũ Trụ", giữ lại để tra cách nghĩ (mục 1, 4, 6, 8 vẫn đúng),
nhưng ANGLE / khuôn tựa / trụ cột / thumbnail trong đó **không áp cho kênh này**.

Nguồn: `docs/nghien-cuu-thi-truong-nhat-senior.md` (tệp, RPM, đối thủ) và
`projects/_ideas/nhat-senior-ngach-giao-duc.md` (30 chủ đề trụ I, ngách 57–62).
Chốt ngày 2026-09-21.

Ai đọc: người vận hành (quyết định), `/produce` (điều phối), `scriptwriter` (chọn chủ đề + viết),
`render` (đóng gói). Sửa file này khi chiến lược đổi, đừng sửa trong agent.

## ⚠ PHẠM VI CỦA REPO NÀY: CHỈ NỘI DUNG

Repo này làm **nội dung** — từ chốt chủ đề tới file MP4 + thumbnail + YOUTUBE.md giao ra
`output/<slug>/`. Hết.

**KHÔNG thuộc phạm vi** (người vận hành tự lo, đừng hỏi lại, đừng coi là cổng chặn):
- Gmail / AdSense / kênh YouTube / quyền quản lý tài khoản
- Đăng video, đặt lịch đăng, trả lời bình luận
- Thanh toán, thuế, pháp lý

Nghĩa là: **thiếu tài khoản KHÔNG chặn sản xuất.** Cứ làm xong nội dung, giao file, rồi thôi.
Chỉ nhắc chuyện tài khoản nếu người vận hành hỏi.

Riêng phần **số liệu** (view/CTR/AVD ở sổ đăng ký): người vận hành điền sau khi đăng;
agent không tự bịa số, nhưng vẫn phải chừa sẵn dòng trống.

---

## 1. ANGLE — khoá vĩnh viễn

> **「その話は、実際にはどう起きているのか。誰がそう言っているのか。」**
> *Chuyện đó thật ra diễn ra thế nào, và ai là người nói vậy?*

Mọi tập đều trả lời câu này. Hai vế đều bắt buộc:
- **どう起きているのか** — dựng cảnh cho người xem NHÌN thấy. Đây là phần kênh này làm được mà
  kênh 図解 không làm được.
- **誰がそう言っているのか** — nêu **tên kinh, tên nghiên cứu, tên người**. Đây là thứ tách kênh
  này khỏi スピリチュアル. Không có nguồn thì không nói.

⚠ ANGLE cũ của kênh Việt (*thứ quen thuộc quanh tôi thật ra là gì và từ đâu tới*) **không dùng
được** cho trụ này: nó hỏi về nguồn gốc vật chất, không trả lời được "vì sao 49 ngày". Kênh 1 đã
gặp đúng vấn đề này và phải mở ANGLE mới — ghi trong `channel.json._doc`.

**Không đổi ANGLE kể cả khi đổi nhóm chủ đề.** Đổi ANGLE = mất khán giả vừa gom.

---

## 2. KHUÔN tiêu đề

> **`{対象}はなぜ{現象}のか｜{典拠}`**

Vế sau dấu `｜` nêu **typo/nguồn** — đó là chữ ký của kênh. Ví dụ:

| Tiêu đề | Ký tự |
|---|---|
| 四十九日はなぜ49日なのか｜十王経が説く七回の審判 | 30 |
| 三途の川はどんな川なのか｜地蔵十王経が描く三つの渡し | 26 |
| 六道とは何か｜輪廻の六つの行き先 | 20 |

**Bốn luật cứng:**

1. **≤ 30 ký tự toàn角.** Chữ Nhật rộng gấp đôi chữ Latin; luật ≤55 ký tự của kênh Việt áp vào
   đây là sai gấp đôi. Nhắm **20–28**. YouTube cắt đuôi bằng `…`, nên **vế trước `｜` phải tự
   đứng được một mình**.
2. **KHÔNG ép con số vào tựa.** Kênh 1 (trụ chế độ) cần con số vì đó là thứ người ta gõ vào
   Google. Trụ này thì 三途の川 không có "mốc 85 tuổi" nào cả — nhét số vào là giả.
3. **Chữ 死 KHÔNG để trong tựa.** Xem mục 4a.
4. **Tiêu đề không được là lời vạch trần.** Không đặt kiểu "hoá ra anh tin nhầm"
   (「日本で作られた経典」「本当は〜ではない」). Đặt kiểu "hoá ra nó có nghĩa như thế".
   Xem mục 4d.

Khuôn `なぜ〜のか` là khuôn **đã được chứng minh** ở thị trường Nhật cho đúng trụ này,
không phải khuôn tự bịa như khuôn cũ của kênh Việt.

### 2b. ⚠ LUẬT THỨ NĂM (quan trọng nhất): tựa phải KHỚP CÂU NGƯỜI TA ĐANG GÕ

**Đây là luật dễ vi phạm nhất, và vi phạm thì tập chết ngay từ lượt đề xuất đầu tiên.**

Sai lầm mặc định là đặt tựa theo **câu hỏi lớn của cả trụ** — nghe sâu sắc, nhưng **không ai gõ
câu đó vào ô tìm kiếm**. Tựa phải khớp câu hỏi mà **một người cụ thể, trong một hoàn cảnh cụ
thể, đang gõ tối nay**.

**Tiền lệ tập 01.** Tựa duyệt ban đầu là 「魂はどこから来てどこへ行くのか」 — câu hỏi triết học,
không ai tìm. Phương án C 「なぜ七日ごとに法要をするのか」 mới đúng: người vừa mất cha mẹ, tuần
sau phải đi 法要 lần nữa, và họ **thật sự đang tự hỏi vì sao phải làm tiếp**. Cùng một video,
cùng một nội dung, nhưng một tựa có người tìm và một tựa thì không.

**Ba câu thử — tựa phải qua CẢ BA:**

1. **Ai gõ câu này?** Kể ra được **một người, một hoàn cảnh, một thời điểm**
   ("người vừa xong 初七日, tuần sau phải đi lần nữa, ngồi tra lúc 11 giờ đêm").
   Không kể ra được → tựa đang nói với "tất cả mọi người", tức là không ai.
2. **Họ đã có sẵn từ đó trong đầu chưa?** Tựa chỉ được dùng từ người ta **đã biết trước khi
   xem**: 法要, 四十九日, 三途の川, 閻魔さま, お盆, 仏壇. Từ chỉ biết **sau khi xem** (中陰,
   中有, 本地, antarābhava, 有餘師) **không bao giờ để vế trước `｜`** — đó là phần thưởng
   trong video, không phải mồi tìm kiếm.
3. **Có hoàn cảnh thúc không?** Người đang có **việc phải làm** hoặc **việc vừa xảy ra** thì
   mới tìm. 「なぜ七日ごとに法要をするのか」có (tuần sau phải đi). 「魂はどこから来るのか」
   không có (không ai bị hạn chót nào thúc phải biết).

**Bảng đối chiếu — cùng nội dung, khác tựa:**

| ❌ Câu hỏi chung của trụ | ✅ Câu người ta thật sự gõ | Vì sao |
|---|---|---|
| 魂はどこから来てどこへ行くのか | なぜ七日ごとに法要をするのか | Có hoàn cảnh thúc: tuần sau phải đi |
| 六道とは何か | 死んだ人はどこへ生まれ変わるのか | 六道 là từ biết-sau; câu dưới là từ biết-trước |
| 中陰とは何か | 四十九日まで何をすればいいのか | 中陰 không ai gõ; 四十九日 thì có |
| 極楽はどんなところか | お浄土ってどんな所ですか | Câu dưới là cách người ta thật sự hỏi nhà chùa |
| 臨死体験とは何なのか | 死ぬ直前、人は何を見ているのか | Thuật ngữ → cảnh cụ thể |

**Cách làm ở Khâu 0.** Sinh 10 tựa thì **ít nhất 6 phải bắt đầu từ một hoàn cảnh có thật**
(vừa xong 初七日 / sắp tới 一周忌 / thấy 位牌 trong nhà / được bảo mua 六文銭), không phải
từ khái niệm. Chấm điểm thì cộng riêng cho luật này — **tựa trượt câu thử 1 thì loại thẳng,
dù 8 điểm ở mọi mục khác.**

⚠ **Không đánh đổi với luật 4d.** Tựa bám hoàn cảnh nhưng **vẫn không được xoáy vào nỗi đau**:
「親が死んで何もする気が起きない」 khớp câu người ta gõ nhưng vi phạm 4d — bỏ. Tìm câu hỏi
**việc phải làm**, đừng tìm câu hỏi **nỗi đau**.

---

## 3. Trụ cột và cổng 30 lần

Chủ đề gốc: `projects/_ideas/nhat-senior-ngach-giao-duc.md` ngách 57–62. Lọc qua luật mục 0
(phải cần dựng cảnh), còn lại chia bốn trụ:

| Trụ | Nội dung | Chủ đề dựng được (ví dụ) |
|---|---|---|
| **A. からだ** (57) | Khoa học cái chết | 老衰で何が起きているのか · 人は死ぬとき何を感じているのか · 脳死と心臓死 · 臨死体験 · 死後、体はどう変わるのか |
| **B. 仏教の世界** (58) | Phật giáo Nhật nói gì | 四十九日 · 三途の川 · 六道 · 極楽はどんなところか · お盆は誰が帰ってくるのか |
| **C. 日本人の死生観** (59) | Thần đạo + tập tục | なぜ神社では葬式をしないのか · 三十三回忌で神になる · 神棚と仏壇 · 人はどうやって神になったのか |
| **D. 世界の死後観** (60) | So sánh, không xếp hạng | 天国と地獄はどこから · インドの輪廻と仏教の輪廻 · ミイラ · チベット死者の書のバルド · 生まれ変わり研究 |

**Cổng 30 lần:** khuôn `{対象}はなぜ{現象}のか｜{典拠}` điền được ≥30 lần phủ cả 4 trụ → qua.
Bốn trụ trên có sẵn 20 chủ đề, cộng phần mở rộng mỗi trụ → qua cổng.

**Ngách 61 (葬儀・お墓・供養) và 62 (tâm lý mất mát) cân nhắc kỹ trước khi chọn** — 61 phần lớn
là thủ tục và giá tiền (khó dựng cảnh WebGL thật, hợp sơ đồ hơn), 62 phần lớn là tâm lý trừu
tượng không có cảnh cụ thể để dựng. Chỉ chọn khi tìm được một góc cụ thể có thể dựng thành
cảnh thật (không gian, ánh sáng, vật thể) — không phải quy tắc cấm, mà là tiêu chí lọc.

---

## 4. Luật an toàn — ĐỌC MỖI TẬP

### 4a. Quảng cáo: chữ 死 không để trong tựa
Từ 死 trong tiêu đề có thể bị hạn chế kiếm tiền. Tựa dùng **「その後」「旅」「四十九日」「見送り」
「あの世」**; để 死 trong thân bài. Cũng tránh trong tựa: 地獄, 遺体, 火葬 (thân bài thì được).

### 4b. Nội dung: giải thích, không phán xử, không bán
- **Mỗi khẳng định về giáo lý phải nêu TÊN KINH hoặc tên nghiên cứu.** Không có nguồn thì không nói.
- **Kinh nguỵ tác phải nói rõ là nguỵ tác** — 地蔵十王経 soạn ở Nhật, không từ Ấn Độ. Đây là chi
  tiết tách kênh này khỏi kênh スピリチュアル.
- **Phần khoa học phải nói rõ ranh giới "đã biết" và "chưa biết".**
- **So sánh các nền văn hoá, KHÔNG xếp hạng.** Không nói tôn giáo nào đúng.
- **Không bán gì:** không 終活, không giới thiệu 葬儀社, không sản phẩm.
- **Không khẳng định thế giới sau khi chết có thật**, cũng không khẳng định là không.
- **Không an ủi GIẢ** (hứa điều mình không biết) — nhưng **phải an ủi THẬT**: xem 4d.

### 4c. YMYL
Trụ A (57) mô tả **cơ chế trong cơ thể**, KHÔNG phải lời khuyên y tế. Không nêu ngưỡng tốt/xấu,
không khuyên điều trị. 看取り nói *điều gì thường xảy ra*, không nói *nên làm gì*.
Mỗi tập chạm y khoa kết bằng một câu: chuyện của người nhà mình thì hỏi bác sĩ.

### 4d. Giọng: KHAI SÁNG VÀ CHỮA LÀNH

⚠ **Luật quan trọng nhất của kênh. Người vận hành chốt 2026-09-21.**

Người xem trụ này **đã mất người thân**, hoặc đang nghĩ về cái chết của chính mình. Họ tìm tới
video này vì **cần hiểu và cần được vỗ về**, không phải để bị mổ xẻ nỗi đau.

**Công thức: nói đủ sự thật, đặt trong khung dịu.**

| Làm | Không làm |
|---|---|
| Nêu đủ sự thật, kể cả phần khoa học chưa biết | Nói lướt hoặc giấu sự thật cho "dễ nghe" |
| Kết bằng **chỗ tựa CÓ THẬT** | Hứa điều mình không biết (linh hồn, gặp lại) |
| Giọng ấm, chậm, như người ngồi cạnh | Giọng lạnh kiểu báo cáo khám nghiệm |
| Công nhận nỗi đau một câu rồi đi tiếp | Xoáy vào nỗi đau, tả chi tiết đau buồn |
| 「〜なんです」 giải thích nhẹ nhàng | 「〜です」 tuyên bố cụt lủn |

**"Chỗ tựa CÓ THẬT" là gì** — những thứ đúng về mặt nhân học/khoa học, không phải siêu hình:
- Nghi lễ 49 ngày tồn tại vì nó **giúp người sống đi qua mất mát** theo từng chặng.
- Thính giác còn tới cuối — **nói với người sắp mất là có ý nghĩa thật**.
- Người ở phút cuối thường có gương mặt an hoà — **đó là điều quan sát được**.
- Hàng triệu người trước mình cũng ngồi đúng chỗ này, làm đúng nghi lễ này.

**Ví dụ đúng** (khi khoa học nói điều lạnh lẽo):
> 「臨死体験は、脳の酸素不足で説明できる部分があります。
> ですが、それで意味が消えるわけではありません。
> 人が最期に光を見て、安らかな顔になる。それは、確かに起きていることなんです。」

Sự thật **đủ** (não thiếu oxy), nhưng không dừng ở chỗ lạnh — chốt bằng điều quan sát được.

**Vẫn giữ:** không rùng rợn, không thi vị hoá rẻ tiền, không giảng đạo. Người xem 60+ đã đi
nhiều đám tang hơn mình — nói với họ như người lớn, nhưng là **người lớn đang được an ủi**.

### 4f. THỂ LOẠI: KỂ CHUYỆN **CHỞ KIẾN THỨC**

⚠ **Người vận hành chốt 2026-09-21.** Hình mẫu: *Muôn kiếp nhân sinh* (Nguyên Phong) và
*Kiếp nào ta cũng tìm thấy nhau* — **kể chuyện có người, có cảm xúc, đọc một mạch**.

> **Nhưng phải KÈM BÀI GIẢNG.** Xem xong, người xem phải **học được một điều cụ thể** và kể
> lại được cho người khác. Câu chuyện là **cỗ xe**, kiến thức là **thứ trên xe**.
> Thiếu xe thì khô, thiếu hàng thì rỗng.

Cân bằng nhắm: **40% kể · 50% giải thích · 10% chỗ tựa**. Đừng vì sợ "giảng bài" mà bỏ phần
giải thích — giải thích kỹ là ĐÚNG; giải thích **khô và rời khỏi cảnh** mới là sai.

> **Bài giảng** nói: 「十王経には、七日ごとに審判があると書かれています」
> **Kể chuyện** nói: 「祖母が亡くなった夜、私は位牌の前に座っていました。
> 今、どこにいるんだろう。ふと、十王経のことを思い出したんです」

**Giữ nguyên luật nguồn (mục 1, ANGLE vế hai).** Đây KHÔNG phải cho phép bịa. Nguồn vẫn bắt
buộc — chỉ đổi **cách đưa nguồn**: dệt vào câu chuyện thay vì trình bày như chú thích.
Tả **cảnh** trước, nêu **tên kinh** sau.

**Bốn chặng:** 入口 (một cảnh, một người) → 旅のはじまり (đi cùng, nguồn xuất hiện trong lúc đi)
→ 深いところ (chạm điều thật sự quan trọng) → 帰り道 (về lại cảnh mở đầu, người xem đã khác).
Chi tiết ở `scriptwriter.md` mục CẤU TRÚC.

**Ranh giới KHÔNG được vượt** — đây là chỗ tách khỏi スピリチュアル:
- Cảnh là **điển hình**, không bịa người có thật: không đặt tên, không bịa tiểu sử,
  không kể như hồi ký của một cá nhân xác định. Dùng 「ある家で」 hoặc chính 「私」.
- **Không bịa "chuyện có thật"**, không dựng lời chứng.
- Vẫn **không khẳng định** thế giới sau khi chết có thật (mục 4b) — kể *kinh tả gì*,
  *người xưa tin gì*, không kể *điều gì đang thật sự xảy ra*.

### 4e. Kênh cần né
大愚和尚 (~760k, lời khuyên đời sống Phật giáo — mình KHÔNG khuyên), kênh 葬儀社 (bán dịch vụ),
kênh スピリチュアル (không kiểm chứng), 日本科学情報 (planetarium, vật lý sâu).

---

## 5. Ngôi kể và văn phong

**Giọng đọc: `keita`** — nam trung niên, F0 trung vị **99 Hz**, chậm và trầm
(clone từ Edge TTS `ja-JP-KeitaNeural` ở −18% tốc độ, −8Hz cao độ). Chốt ngày 2026-09-21
sau khi nghe 7 mẫu. Khớp đúng thứ tài liệu thị trường nhắm: *"nam 50–60 tuổi, trầm, kiểu người
dẫn NHK"*. Chạy ở `--speed 0.95` → 4,89 ký tự/giây.

**Ngôi 「私」** — giữ ngôi thứ nhất như kênh Việt. Hai lý do:
1. Chính sách AI 7/2025 của YouTube cắt kiếm tiền với nội dung hàng loạt, không có góc nhìn
   riêng. Ngôi 私 với quan sát riêng là **bằng chứng góc nhìn riêng**.
2. Tách khỏi kênh 葬儀社 (giọng doanh nghiệp) và スピリチュアル (giọng phán truyền).

Giọng đọc là `keita` (nam trung niên). 私 ở giọng nam trầm nghe như một người
đang kể lại điều mình vừa tìm hiểu — đúng vai "người quan sát và giải thích".

**Nhưng 私 ở đây là người QUAN SÁT và GIẢI THÍCH, không phải người kể chuyện đời mình.**
Đúng: 「私はその日、祖母の位牌の前に座っていました。ですが、なぜ位牌があるのかは知りませんでした。」
Sai: kể lể cảm xúc cá nhân, hoặc 私 biết mọi thứ.

**Văn:** 〜なんです / 〜ということです cho nhịp giải thích với người lớn tuổi. Câu ngắn.
Đừng dịch từ tiếng Việt — viết thẳng bằng tiếng Nhật. Chi tiết ở `scriptwriter.md`.

---

## 6. Khâu 0 — Đóng gói trước sản xuất

Như `chien-luoc-kenh.md` mục 5, nhưng thay ba trường đầu:

```
# <slug> — packaging

ANGLE: その話は、実際にはどう起きているのか。誰がそう言っているのか。
KHUÔN: {対象}はなぜ{現象}のか｜{典拠}
TRỤ: A からだ / B 仏教の世界 / C 日本人の死生観 / D 世界の死後観
KIỂM RANH GIỚI KÊNH 1: câu trả lời có cần dựng cảnh không? (có → kênh này)
  Kênh 1 đã nhận chủ đề này chưa? (đọc channel.json của nó)
TYPO/NGUỒN: kinh nào · nghiên cứu nào · tên người
BẰNG CHỨNG CẦU: chủ đề (hoặc hình dạng này) thắng ở kênh nào, bội số bao nhiêu

## 10 tiêu đề nháp
| # | Tiêu đề | Vế trước ｜ tự đứng được? | Typo ở vế sau | Ký tự (≤30) | Điểm/8 |

## 5 cặp tiêu đề + concept bìa
(như kênh Việt, nhưng 5 công thức thay bằng: なぜ / 典拠 lạ / so sánh /
 thứ ai cũng làm mà không biết vì sao / thứ kinh nói khác điều ta tưởng)

## Chọn · Lời hứa · Brief
(như cũ)
```

**Phép thử giết sớm không đổi:** *chính tôi có bấm không?* Không → KILL.

---

## 7. Thumbnail — đã đổi sang phong cách đậm (2026-09-27)

> ⚠ Người vận hành chủ ý đổi từ "một chủ thể, dịu" sang **phong cách kênh Vũ Trụ Việt** (chữ to
> đậm, badge góc, số liệu nổi bật, nền bão hoà cao) — xác nhận hai lần khi được hỏi lại rõ ràng.
> Chi tiết công thức + ví dụ ở `.claude/agents/render.md` mục "TƯ DUY THUMBNAIL". Đừng quay lại
> bản dịu vì tưởng đó là chuẩn kênh — bản dịu đã bị thay thế chủ động, không phải lỗi.

Vẫn giữ ở kênh này (khác kênh Việt):
1. **Chủ thể vẫn là vật/cảnh của nghi lễ dựng thật** (位牌, 数珠, 迎え火, sông sương mù, nến,
   bàn tay) — không đổi sang vật thể vũ trụ. Chỉ đổi CÁCH trình bày (to hơn, rực hơn, có badge
   và số liệu), không đổi CHẤT LIỆU (vẫn cảnh WebGL đã render, không tự vẽ minh hoạ giả).
2. **Chữ không còn giới hạn ≤8 ký tự** — 2 dòng đậm, có thể kèm số liệu thật lấy từ nguồn khoa
   học/kinh điển đã dùng trong tập (「なぜ35日目？」「79本の研究」).
3. **Vẫn tránh** ảnh mộ thật, ảnh di ảnh thật, hình gợi sợ hãi thật sự (xác, máu, quỷ dữ) — đây
   là ranh giới nội dung của kênh, không phải ranh giới thẩm mỹ, không đổi theo phong cách.

Phương pháp (bài test 50%, bài test không tiêu đề, phép cắt, 5 biến thể) vẫn giữ nguyên.

---

## 8. Kỹ thuật cho tệp 50+ xem trên TV

- **Phụ đề ≥56px, một dòng, ≤22 ký tự toàn角.** `gen-captions.mjs` tự lo.
- **Không cắt cảnh nhanh hơn 4 giây.** (Kênh Việt để 3–5 giây; tệp Nhật 50+ chậm hơn.)
  Không rung máy ảo, không zoom giật.
- **Chapter rõ ràng** — người già dùng chapter nhiều hơn người trẻ.
- **Font BIZ UDPGothic**, đã nhúng ở `assets/fonts/`. Xem luật 7 trong `CLAUDE.md`.
- **Giờ đăng 20:00–21:00 JST, thứ Sáu/Bảy.** Người 60+ ngủ sớm, đừng đăng 22h.
- Đăng cách nhau ≥7 ngày.

---

## 9. Ba tập đầu

Người vận hành đã chốt **vào thẳng trụ I** (2026-09-21), biết rằng tài liệu thị trường khuyên
để trụ này sau 20 tập. Đổi lại, ba tập đầu chọn chủ đề **ít nhạy cảm nhất trong trụ** và siết
chặt luật mục 4:

| # | Tựa nháp | Trụ | Vì sao chọn | Dựng gì |
|---|---|---|---|---|
| 01 | 四十九日はなぜ49日なのか｜十王経が説く七回の審判 | B | Nhu cầu ★★★★★, ai cũng từng làm 法事 mà không ai giải thích. Không có 死 trong tựa. Chốt được ở chỗ ấm: 49 ngày là **cách người sống đi qua mất mát theo từng chặng**. | 中陰 bảy chặng, mỗi 7 ngày một cửa |
| 02 | 三途の川はどんな川なのか｜地蔵十王経が描く三つの渡し | B | Dựng đẹp nhất. Kể **kinh tả gì** và 六文銭 có nghĩa gì — người nhà bỏ tiền vào quan tài là để người đi không phải lo. | Dòng sông, sương mù, ba lối qua |
| 03 | 六道とは何か｜輪廻の六つの行き先 | B | Hình đẹp, dựng vòng luân hồi 3D. Chốt: 六道 là **bản đồ tâm người sống**, không phải án phạt. | Vòng sáu cõi quay |

Ba tập đều thuộc trụ B (Phật giáo) là cố ý: **khoá khuôn và khoá chất giọng trước**, rồi mới mở
trụ A (khoa học cái chết — nhạy cảm YMYL hơn) và trụ C, D.

⚠ **Đã đổi góc tập 02 ngày 2026-09-21.** Bản cũ là 「三途の川はどこから来たのか｜日本で作られた経典」
— góc đó **vạch ra rằng kinh là nguỵ tác soạn ở Nhật**, tức là nói với người xem "thứ ông bà anh
tin là đồ giả". Đúng sự thật nhưng **xoáy vào chỗ đau**, sai hẳn với luật 4d. Góc mới kể **kinh
tả gì** và **vì sao có 六文銭**; chi tiết "soạn ở Nhật" vẫn nêu trong thân bài (luật TYPO bắt
buộc) nhưng **không làm tiêu đề và không làm cú lật** — nó là ghi chú lịch sử, không phải đòn.

**Bài học rút ra cho mọi tập sau:** cú lật của kênh này là **"hoá ra nó có nghĩa như thế"**,
không phải **"hoá ra anh tin nhầm"**.

**Thời lượng: theo LOẠI TẬP, không phải một con số cho tất cả.**

| Loại tập | Phút | Ký tự |
|---|---|---|
| Trả lời **một câu hỏi hẹp** (四十九日はなぜ49日) | 10–13 | 2.900–3.800 |
| **Tập tổng hợp**, kể trọn một vòng nhiều chặng | 18–20 | 5.300–5.900 |

Tài liệu thị trường nói nội dung "trả lời một câu hỏi" hợp 10–12 phút hơn 20 — **nhưng tập kể
trọn một hành trình thì khác**: ép xuống 12 phút làm mỗi chặng còn ~175 ký tự, thành liệt kê
chứ không dạy được gì. Thà dài mà mỗi chặng có chiều sâu.

Người vận hành chốt độ dài **ở Khâu 0, ghi vào `packaging.md`**. Đo retention ba tập đầu rồi
mới chốt chuẩn cho từng loại.

**Mốc đo sau 3 tập:** retention ≥40% ở mốc 8 phút · tỉ lệ xem trên TV ≥30% · không tập nào bị
hạn chế quảng cáo. Có tập bị hạn chế → đọc lại mục 4a trước khi làm tiếp.

---

## 10. Đo số

Cách đo giữ nguyên `chien-luoc-kenh.md` mục 6: bội số = view 28 ngày ÷ **trung vị** của kênh,
đọc số từ tập thứ 3, mỗi lần chỉ đổi một biến. Cửa lớn 20.000 view.

Sổ đăng ký tập của kênh này: `projects/EPISODES-PRODUCED-JA.md` (kênh Việt dùng file cũ,
không trộn hai kênh vào một sổ).

⚠ Kênh Việt sau 13 tập vẫn **chưa điền số nào**. Kênh này bắt đầu từ zero dữ liệu — càng phải
điền số ngay từ tập đầu, nếu không sẽ lặp lại đúng tình trạng đó.
