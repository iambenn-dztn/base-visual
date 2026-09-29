# hitori-no-naka — packaging

**Khâu 0.** Chốt tiêu đề + bìa trước khi viết kịch bản. Chủ đề gốc: playbook ý **9**
(『Vì sao ta vẫn thấy cô đơn dù quanh mình có người?』).

```
ANGLE: その話は、実際にはどう起きているのか。誰がそう言っているのか。
KHUÔN: {対象}はなぜ{現象}のか｜{典拠}
TRỤ: A からだ (cơ chế trong người) — mở rộng sang tâm lý học xã hội có nguồn.
  ⚠ Không phải trụ B/C/D. Đây là tập đầu chạm trụ A, nên siết luật 4c (YMYL).
ĐỘ DÀI: **12–14 phút (3.500–4.100 ký tự)** — loại "trả lời một câu hỏi hẹp",
  nhưng đi qua 4 nguồn nên nhắm cận trên: **~3.900 ký tự ≈ 13,3 phút**.
GIỌNG: keita, speed 0.95 (4,89 ký tự/giây)

KIỂM RANH GIỚI KÊNH 1:
  Câu trả lời có cần dựng cảnh không? → **CÓ, và đây là lý do tập này thuộc kênh này.**
  Phát hiện lõi của CLSA là "hai thước đo khác nhau". Cách duy nhất cho người xem
  THẤY điều đó là dựng **hai lớp không gian chồng lên nhau** — một lớp đo bằng mét
  (khoảng cách vật lý trong phòng 和室), một lớp đo bằng cảm nhận (cùng những con
  người đó, nhưng xa nhau theo thước khác). 図解 2D vẽ được cái bảng 4 ô; nó KHÔNG
  cho người xem đứng giữa hai thước đo và thấy chúng lệch nhau. ✓

  Kênh 1 đã nhận chủ đề này chưa? → ⚠ `channel.json` của kênh 1 CÓ hai dòng gần:
    ・「なぜ人がいても孤独を感じるのか」  (trụ 時間と記憶, #9)
    ・「ひとりでいることと孤独は、どこが違うのか」 (trụ 時間と記憶, #12)
  **Trạng thái:** cả hai còn nằm trong **kho ý tưởng**, chưa có project nào —
  `E:\JAPAN\1. Cánh cửa cơ chế\projects\` rỗng, kênh 1 mới dựng tập đầu `喪中に初詣`.
  Hai dòng đó là playbook 20 ý được dán nguyên vào json, chưa qua bộ lọc mục 0.
  **Xử lý (luật mục 0 — chia theo CÁCH DỰNG, không theo chủ đề):** ý #9 phải chuyển
  về kênh này vì câu trả lời cần dựng cảnh. Ý #12 (ở một mình ≠ cô đơn) **để lại cho
  kênh 1** — nó là phép so sánh hai định nghĩa, sơ đồ đối chiếu là đủ.
  → **Việc phải làm trước khi dựng:** người vận hành xoá dòng #9 khỏi `channel.json`
  của kênh 1, hoặc ghi chú đã chuyển. Đây là cổng chặn duy nhất của tập này.

TYPO/NGUỒN: Menec ら (PLOS ONE 2020, CLSA n=30.079) · Cacioppo (loneliness = tín hiệu
  tiến hoá) · Hawkley & Cacioppo (Ann Behav Med 2010, vòng lặp cảnh giác)
  → bảng đầy đủ ở mục 典拠 bên dưới.

BẰNG CHỨNG CẦU: chưa có số của kênh (mới 1 tập, chưa đăng). Cầu suy ra từ ba chỗ:
  (1) 内閣府『高齢社会白書』 khảo sát cô đơn ở người cao tuổi là chủ đề báo Nhật đăng
  lại mỗi năm → từ khoá 孤独 có lưu lượng ổn định ở tệp 50-60+;
  (2) đây là ý được playbook đánh **✓ đã tra nguồn** — một trong 8/20 ý đạt;
  (3) hình dạng "ai cũng làm mà không ai giải thích" đã thắng ở kênh 1 (khuôn
  なぜ〜のか). **Chưa có bội số thật — ghi lại sau khi đăng.**
```

---

## 10 tiêu đề nháp

Ký tự đếm theo **toàn角** (nửa角 tính 0,5). Cột "ai gõ câu này" — viết không nổi thì loại thẳng
(luật 2b câu thử 1). 7/10 bắt đầu từ một hoàn cảnh có thật (≥6 theo yêu cầu).

| # | Tiêu đề | 全角 | **Ai gõ câu này** | Điểm/8 | Câu hỏi nó mở ra |
|---|---|---|---|---|---|
| **A** | なぜ家族といても寂しいのか｜孤立と孤独を分けた研究 | 25 (vế trước 13) | Bà 64 tuổi, お盆 vừa xong, con cháu về hết từ chiều. 11 giờ đêm, dọn xong bát, ngồi xuống và thấy nhẹ hẳn — rồi thấy trống. Gõ vì **không dám hỏi ai câu này**. | **8** | "Hoá ra chuyện này có tên, và có người nghiên cứu nó?" |
| **B** | 孫が帰った夜、なぜ心が沈むのか｜孤立と孤独は別もの | 26 (16) | Ông 68 tuổi, cháu vừa về sau 3 ngày ở chơi. Tối đó ngồi ở chỗ cháu ngồi. Gõ ngay tối hôm đó. | **8** | "Tại sao lại chìm xuống đúng lúc đáng lẽ phải vui?" |
| **C** | 家族といて寂しいのは薄情なのか｜三万人が答えた | 23 (15) | Người vừa cãi nhẹ với con dâu trong bữa cơm đông người, về phòng tự trách. Gõ đúng chữ 薄情 vì đó là chữ họ đang tự gọi mình. | **8** | "Tôi có phải người tệ không?" |
| **D** | お盆が終わると、なぜ急に寂しいのか｜孤立と孤独は別もの | 27 (17) | 16/8, xong 送り火, nhà vừa vắng. Gõ trong tuần ngay sau お盆 — **mùa vụ rõ nhất trong năm**. | **7** | "Vì sao đúng lúc lễ xong thì mới nặng?" |
| **E** | 笑い声の中で、なぜ自分だけ遠いのか｜孤立と孤独の研究 | 26 (17) | Người vừa dự 法事/同窓会, ngồi giữa bàn tiệc mà thấy mình ở ngoài. Gõ tối cùng ngày. | **7** | "Chỉ mình tôi bị thế à?" |
| **F** | 一日誰とも話さない日は寂しい日なのか｜CLSAの調査 | 24 (18) | Người sống một mình, hôm nay cả ngày không mở miệng. Gõ lúc 9 giờ tối, hơi sợ câu trả lời. | **7** | "Không nói với ai = cô đơn?" |
| **G** | 寂しさは心の弱さなのか｜カシオポが見つけた信号 | 23 (11) | Người bị con nói "bố cứ nghĩ nhiều quá". Gõ để kiểm tra xem mình có yếu đuối thật không. | **7** | "Đây là tính cách hay là cơ chế?" |
| **H** | なぜ賑やかな席ほど遠く感じるのか｜寂しさが作る見まちがい | 28 (16) | Người vừa về từ 正月 nhà con trai, xe điện đêm. Gõ trên điện thoại giữa đường về. | 6 | "Vì sao càng đông càng xa?" |
| **I** | ~~孤独感は社会的孤立とどう違うのか｜CLSA 2020~~ | 25 (14) | ✗ **Không viết nổi.** 社会的孤立 là từ chỉ biết SAU khi xem. Không ai gõ. | **LOẠI** | — |
| **J** | ~~人はなぜ孤独に耐えられないのか｜進化が残した信号~~ | 26 (14) | ✗ **Không viết nổi.** Câu hỏi lớn của trụ, không có hoàn cảnh thúc. Ai cũng có thể hỏi = không ai gõ. | **LOẠI** | — |

**I loại tự động** — trượt câu thử 2: vế trước `｜` dùng 社会的孤立, thuật ngữ học thuật.
Đây đúng là bẫy tập 01 đã mắc (「魂はどこから来てどこへ行くのか」).
**J loại tự động** — trượt câu thử 1 và 3: không kể ra được ai gõ, không có việc phải làm.
**H bị trừ điểm** — 28 ký tự, sát trần; và 賑やかな席 hẹp hơn 家族 (chỉ khớp người vừa đi tiệc).

⛔ Kiểm bốn luật cứng trên cả 10: không tựa nào có chữ **死**; không tựa nào có
`真相`/`衝撃`/`知らないと損`/`絶対`/`ヤバい`; không tựa nào là **lời vạch trần**
(không có 「実は〜ではない」「本当は〜」); không tựa nào ép con số vào vế trước.
⚠ Cũng đã tránh `あの世` `魂` `たましい` ở tựa (từ khoá kênh スピリチュアル — playbook PHẦN IV).

---

## 5 cặp tiêu đề + concept bìa

Năm công thức khác nhau theo mục 6. Chữ bìa **≤ 8 ký tự toàn角, dạng câu hỏi**.
Chủ thể là **vật/cảnh dựng thật**, không phải mặt người kinh ngạc (luật mục 7).

| # | Tiêu đề | Công thức | Concept bìa |
|---|---|---|---|
| **1** | なぜ家族といても寂しいのか｜孤立と孤独を分けた研究 | **thứ ai cũng trải mà không ai giải thích** | **Chủ thể:** một 座布団 trống giữa chiếu tatami, quanh nó là 5–6 座布団 khác còn hằn vết người vừa ngồi, chén trà còn ấm. Ánh đèn 和室 vàng ấm từ trên xuống, chiều sâu thật, bóng đổ mềm. · **Chữ:** 「なぜ寂しい？」(6) · **Câu hỏi người xem tự đặt:** "có người mà vẫn trống — đúng cảnh nhà tôi" · **Cảm xúc:** nhận ra, không buồn thảm |
| **2** | 孫が帰った夜、なぜ心が沈むのか｜孤立と孤独は別もの | **cảnh cụ thể, giờ cụ thể** | **Chủ thể:** hành lang 廊下 nhìn ra sân tối, một đôi dép trẻ con nhỏ để lệch ở 玄関, đèn còn sáng một bóng. Không có người trong khung. · **Chữ:** 「帰った夜」(4) · **Câu hỏi:** "sao đúng lúc đó lại nặng?" · **Cảm xúc:** thân thuộc, ấm |
| **3** | 家族といて寂しいのは薄情なのか｜三万人が答えた | **gỡ tội** (mạnh nhất với luật 4d) | **Chủ thể:** hai cái thước đo đặt cạnh nhau trên bàn gỗ — một cây thước gỗ 物差し có vạch, một cái không có vạch nào. Dựng thật, ánh sáng xiên, có vân gỗ. · **Chữ:** 「薄情なの？」(5) · **Câu hỏi:** "tôi có tệ không?" · **Cảm xúc:** được hỏi đúng chỗ đau — nhưng câu trả lời là không |
| **4** | お盆が終わると、なぜ急に寂しいのか｜孤立と孤独は別もの | **mùa vụ / hoàn cảnh thúc** | **Chủ thể:** 送り火 đã tàn, chỉ còn khói mỏng bốc lên từ 苧殻 trước 玄関, trời chạng vạng xanh. Khói dựng bằng volumetric thật, không billboard. · **Chữ:** 「お盆のあと」(6) · **Câu hỏi:** "hết lễ rồi sao lại thấy trống?" · **Cảm xúc:** lặng, có nhịp |
| **5** | 寂しさは心の弱さなのか｜カシオポが見つけた信号 | **典拠 lạ** (tên nhà nghiên cứu) | **Chủ thể:** một chén nước và một chén cơm đặt cạnh nhau trên khay gỗ, ánh sáng bên cạnh; giữa hai chén là một chỗ trống thứ ba đúng kích thước một chén nữa. · **Chữ:** 「弱さ？」(4) · **Câu hỏi:** "đói, khát, và... cái gì?" · **Cảm xúc:** tò mò nhẹ |

**Bài test không tiêu đề:** cặp 1 và cặp 3 tự bán được — 座布団 trống giữa các chỗ vừa có người,
và hai cây thước một có vạch một không, đều đọc được mà không cần chữ.
Cặp 5 cần chữ mới hiểu → điểm thấp hơn.

---

## Chọn · Lời hứa · Brief

### Chọn

**Cặp số: 1** — 「なぜ家族といても寂しいのか｜孤立と孤独を分けた研究」 (**25 ký tự toàn角**, vế trước 13)

**Lý do:**

1. **Qua cả ba câu thử của luật 2b, rộng nhất.** Người gõ: người 50-60+ vừa qua một dịp đông
   người (お盆, 正月, 法事, sinh nhật cháu), đêm đó ngồi một mình. Từ 家族 và 寂しい là từ họ
   **đã có sẵn trong đầu** — không phải 社会的孤立, không phải CLSA. Hoàn cảnh thúc: cái đêm
   vừa rồi.
2. **Vế trước tự đứng được.** YouTube cắt đuôi thì 「なぜ家族といても寂しいのか」 vẫn là câu
   hỏi trọn vẹn, và tự nó đã là câu người xem vừa tự hỏi.
3. **Vế sau mang đúng chữ ký kênh.** 「孤立と孤独を分けた研究」 báo ngay đây là **nghiên cứu**,
   không phải スピリチュアル — đồng thời nó **đã hé cú lật**: hai thứ ấy tách được ra.
4. **Nó hỏi, không kết tội.** Cặp 3 (薄情なのか) mạnh hơn về cảm xúc nhưng nhắc lại đúng chữ
   người xem đang tự gọi mình — ở **tiêu đề** thì hơi sát. Để chữ 薄情 cho **thân bài**, nơi
   có chỗ để gỡ ngay sau đó. Ở tựa thì rủi ro người xem thấy bị gọi tên rồi lướt qua.
5. **Rộng nhất về mùa vụ.** Cặp 2 và 4 hay hơn nhưng chỉ sống quanh お盆/正月. Cặp 1 sống
   quanh năm — quan trọng vì kênh mới, chưa có số, cần tập đầu trụ A chạy dài.

**Phép thử giết sớm — "chính tôi có bấm không?"** → Có. Câu này là câu người ta **không dám
hỏi ai**, nên phải hỏi ô tìm kiếm. ✓

### Phương án B (đổi sau 24h nếu CTR thấp)

**Cặp 2** — 「孫が帰った夜、なぜ心が沈むのか｜孤立と孤独は別もの」 (26 ký tự)

Đổi hẳn trục: từ **trạng thái** (家族といても) sang **một khoảnh khắc có giờ** (孫が帰った夜).
Nếu cặp 1 CTR thấp vì quá chung, cặp 2 cụ thể hơn hẳn và bìa 2 (đôi dép trẻ con ở 玄関) là
hình gây thắt ngực nhất trong năm cái — nhưng ấm, không doạ.
**Nếu đổi thì đổi cả bìa**, đừng ghép tựa 2 với bìa 1.

⚠ **Không đổi sang cặp 3** làm phương án B — hai tựa quá gần nhau về trục, đổi mà không học
được gì. Cặp 3 để dành làm **A/B thứ hai** nếu cả 1 và 2 đều đuối.

### Lời hứa (video bắt buộc thực hiện)

**Người xem bấm vì muốn biết:** vì sao ngồi giữa những người mình thương mà vẫn thấy trống —
và mình có phải là người vô ơn không.

**Video phải trả lại đúng ba thứ:**

| Trả ở chặng | Trả cái gì |
|---|---|
| 旅のはじまり | Cô lập và cô đơn là **hai thứ khác nhau**, đo bằng hai thước khác nhau — có số liệu chứng minh, không phải an ủi suông |
| 深いところ | Cảm giác ấy là **tín hiệu**, giống đói và khát; và vì sao nó đôi khi làm ta đọc sai người xung quanh |
| 帰り道 | **Không phải lỗi của bạn.** Thấy trống giữa những người mình thương không có nghĩa là vô ơn |

**Một điều cụ thể người xem HỌC ĐƯỢC và kể lại được** (luật 4f):
> Trong ba vạn người Canada trên 45 tuổi, **15,6% bị cô lập mà không thấy cô đơn**, và
> **6,7% thấy cô đơn dù không hề bị cô lập.** Hai thứ ấy tách nhau ra được — nên "có người
> quanh mình" và "không thấy cô đơn" vốn không phải một.

### Brief — 4 chặng

**Cân bằng nhắm:** 40% kể · 50% giải thích · 10% chỗ tựa. ~3.900 ký tự.

**1. 入口 — một cảnh, một người (≈ 600 ký tự · 2 phút)**

お盆 vừa xong. Con cháu về đông đủ suốt ba ngày, tiếng cười vang cả 和室, đứa cháu nhỏ ngủ
quên trên chiếu. Rồi 4 giờ chiều hôm cuối, xe lăn bánh. 私 đứng ở 玄関 vẫy tay cho tới khi
xe khuất.

Quay vào nhà. Dọn bát. Xếp 座布団. Và giữa lúc gập cái 座布団 thứ năm, **một khoảng trống mở ra
trong ngực** — đúng cái khoảng trống đã ở đó **cả lúc mọi người còn ngồi đây**.

Rồi câu tự trách tới ngay sau: *こんなに家族がいてくれるのに、私は何を贅沢なことを思っているんだろう。*

**KHÔNG** mở bằng định nghĩa. **KHÔNG** mở bằng số liệu (playbook: số liệu không bao giờ ở
chương đầu). **KHÔNG** kể như hồi ký của người có thật — dùng 私 hoặc 「ある家で」 (luật 4f).

**2. 旅のはじまり — nghịch lý, rồi nguồn xuất hiện (≈ 1.100 ký tự · 3,7 phút)**

Đặt nghịch lý cho rõ: **đông người mà vẫn trống.** Và nói thẳng rằng cách giải thích thông
thường ("tại mình không biết đủ") không giải thích được, vì có hôm ở một mình cả ngày mà
lại thấy yên.

Rồi nguồn tới — **dệt vào, không trình bày như chú thích**:
カナダで、45歳から85歳までの**三万七十九人**に、同じ二つのことを別々に尋ねた調査があります。
一つ目は「実際にどれだけ人と会っているか」。二つ目は「寂しいと感じているか」。
メネックさんたちが2020年に『PLOS ONE』に出した報告です。

Bốn nhóm, và đây là chỗ người xem phải dừng lại:
- **74,7%** — không cô lập, không cô đơn
- **15,6%** — **cô lập, nhưng KHÔNG thấy cô đơn**
- **6,7%** — **KHÔNG cô lập, nhưng thấy cô đơn**
- **3%** — cả hai

Dừng ở con số **6,7%**. Đó chính là cái ghế 私 đang ngồi. Và nó **có tên trong bảng** — tức
là có người khác cũng ở đó, đủ đông để thành một ô trong báo cáo.

Câu chốt chặng: *人といる量と、寂しさの量は、**別々の物差しで測られている**ということなんです。*

**3. 深いところ — tín hiệu, rồi vòng lặp (≈ 1.500 ký tự · 5 phút)**

**(a) Cô đơn là TÍN HIỆU** — カシオポ (John Cacioppo). Cách hiểu của ông: cảm giác cô đơn
đứng cùng hàng với **đói** và **khát** và **đau**. Đói không phải khuyết điểm tính cách — nó
là cơ thể báo đã đến lúc ăn. Cô đơn cũng vậy: nó là tín hiệu tiến hoá để đẩy con người về
lại với nhóm, vì tổ tiên mình tách khỏi nhóm là chết.

Chốt: *寂しさを感じる力があるというのは、**人とつながる力がまだ生きている**ということです。*
Đây là chỗ giải tội đầu tiên, và nó là **cơ chế**, không phải lời an ủi.

**(b) Vòng lặp** — Hawkley & Cacioppo 2010 (『Annals of Behavioral Medicine』).
Kể theo kiểu "đây không phải lỗi của bạn" (⚠ bẫy 2):
cảm giác cô đơn làm người ta **cảnh giác hơn** với dấu hiệu bị từ chối — đó là một cơ chế
tự bảo vệ, nó đang cố giữ mình an toàn. Nhưng cái cảnh giác ấy bật lên **tự động, dưới mức
ý thức**, nên đôi khi nó đọc một cái ngáp là chán, một câu ngắn là lạnh nhạt.
Rồi mình rút lại một chút. Và vòng quay tiếp.

**Cách kể bắt buộc:** không nói 「あなたはこうなっています」. Nói
「こういうことが、**誰にでも**起こりうるんです」. Vòng lặp là thứ **mình đang bị**, không phải
thứ **mình đang làm sai**.

**(c) Giới hạn — BẮT BUỘC, không được bỏ** (playbook PHẦN V chương 6, bẫy 3):
- Vòng lặp mô tả **xu hướng thống kê**, không phải số phận. Nhiều người ở trong đó rồi ra.
- Nghiên cứu CLSA là **Canada**, không phải Nhật. Con số không bê thẳng sang được.
- Đây là **cắt ngang một thời điểm** (baseline), không theo dõi một người qua nhiều năm.
- Nói thẳng: *どうすれば必ず消えるのか、そこまでは、まだ分かっていません。*

**(d) Chốt YMYL (luật 4c):** một câu, không kê đơn — nếu cảm giác này kéo dài và ảnh hưởng
tới ăn ngủ, đó là chuyện nên nói với bác sĩ, không phải chuyện tự chịu.
**KHÔNG** nói "bạn nên gọi cho con", **KHÔNG** giao bài tập về nhà (bẫy 5).

**4. 帰り道 — về lại cảnh mở đầu (≈ 700 ký tự · 2,4 phút)**

Về đúng 和室 ấy. Cùng cái 座布団 thứ năm, nhưng lần này 私 không gập vội.

**Chỗ tựa CÓ THẬT** (không phải lời hứa siêu hình):
- Cái khoảng trống ấy **có tên, có người đo, có một ô trong bảng** — mình không phải người
  duy nhất và không phải người đầu tiên.
- Cảm giác ấy **là tín hiệu của một chức năng còn nguyên vẹn**, không phải của một chỗ hỏng.
- Và điều quan trọng nhất: **nó không mâu thuẫn với tình thương.** Thương con cháu và thấy
  trống là hai thứ **chạy trên hai thước đo khác nhau** — chính cái nghiên cứu ba vạn người
  ấy nói vậy.

**Câu mang về** (một câu, không phải danh sách — playbook chương 7):
> 大事な人たちの真ん中で寂しさを感じたとしても、それは薄情だということではありません。
> その二つは、もともと**別々の物差しで測るもの**だった、というだけのことなんです。

Rồi im. **Không kê đơn. Không "だから〜しましょう".**

**Phép thử cuối (playbook PHẦN VII):** xem xong người ta thấy **nhẹ hơn**. Chỗ nào làm nặng
hơn thì bỏ, dù số liệu hay tới đâu.

**Khung chính:** **gỡ tội** (playbook angle 2 — "đây là thiết kế, không phải lỗi").
Không trộn với khung hành trình của tập 01.

---

## 典拠

Mọi con số đã verify bằng WebSearch/WebFetch ngày 2026-09-23. **Không làm tròn khác đi.**

| # | Nguồn | Năm | Dùng ở chặng | Số liệu chính xác |
|---|---|---|---|---|
| 1 | **Menec VH, Newall NE, Mackenzie CS, Shooshtari S, Nowicki S.** "Examining social isolation and loneliness in combination in relation to social support and psychological distress using Canadian Longitudinal Study of Aging (CLSA) data." **『PLOS ONE』** 15(3): e0230673 | **23/3/2020** | 旅のはじまり | CLSA Comprehensive Cohort, **n = 30.079**, tuổi 45–85. Bốn nhóm: **74,7%** không cô lập-không cô đơn · **15,6%** chỉ cô lập · **6,7%** chỉ cô đơn · **3%** cả hai. (Bài cùng ghi: Victor ら cho 69 / 22 / 6 / 3 — gần như nhau.) |
| 2 | **John T. Cacioppo** — thuyết cô đơn là tín hiệu tiến hoá (social pain / reaffiliation motive) | ~2008– | 深いところ (a) | Cô đơn đứng cùng hàng với **đau, đói, khát**: một tín hiệu khó chịu có chức năng, đẩy cá thể về lại nhóm. Nguồn nền: 『Loneliness: Human Nature and the Need for Social Connection』 (Cacioppo & Patrick, 2008) và tổng quan #3. |
| 3 | **Hawkley LC & Cacioppo JT.** "Loneliness Matters: A Theoretical and Empirical Review of Consequences and Mechanisms." **『Annals of Behavioral Medicine』** 40(2): 218–227 | **2010** | 深いところ (b) | Cảm nhận bị cô lập **làm tăng cảnh giác với đe doạ xã hội** (implicit hypervigilance for social threat) và tăng cảm giác dễ tổn thương, đồng thời tăng mong muốn kết nối lại. Bài mô tả một **"loneliness regulatory loop"**. |
| 4 | Chính bài #3 và #1 | — | 深いところ (c) | Ranh giới: #1 là **cắt ngang** (baseline), mẫu **Canada**; #3 là **tổng quan lý thuyết**, mô tả xu hướng chứ không phải quy luật cá nhân. |

⚠ **Ràng buộc cho scriptwriter:**
- Nói **「三万七十九人」** hoặc 「三万人あまり」, không nói "khoảng 30.000" rồi tròn thành 3万.
- **Mọi con số phải hiện trên màn hình kèm tên nguồn + năm** (playbook, và luật nguồn mục 4b).
- Tên カシオポ đọc là カシオポ (Cacioppo). Ghi cả tên Latin trên hình.
- **Không con số nào ở chặng 1 hoặc chặng 4** (playbook quy tắc số liệu).
- Không được dẫn bất kỳ con số nào **không có trong bảng này**.

---

## Cảnh dựng WebGL

**Ý lõi:** phát hiện của CLSA là *hai thước đo khác nhau*. Cả tập dựng đúng một ý đó thành
không gian — và đây là thứ 図解 2D của kênh 1 không làm được.

### Hệ hai lớp không gian

**Lớp 1 — 実距離 (khoảng cách đo bằng mét).**
Một phòng 和室 dựng thật: chiếu tatami 88×176cm đúng tỉ lệ, 座布団 55×59cm, bàn 座卓 thấp,
trần có 竿縁, cửa 障子 sau lưng. **Hình học đúng, đơn vị thật.** Sáu người ngồi quanh bàn —
dựng bằng khối hình tối giản có thể tích thật (không billboard phẳng, luật 2 của CLAUDE.md),
mỗi người là một khối sáng mềm có bóng đổ. Khoảng cách giữa 私 và người gần nhất: **~1,2m**.
Có thể **hiện thước đo thật** chạy trên chiếu — mét là mét.

**Ánh sáng:** đèn 和室 vàng ấm treo giữa trần, một nguồn chính + bounce từ tatami.
Shader cinematic: subsurface nhẹ trên 障子, ánh sáng lọt qua giấy, bụi trong luồng sáng
(volumetric mỏng). Tone ấm 3200K.

**Lớp 2 — 感じる距離 (khoảng cách cảm nhận).**
**Cùng sáu người ấy, cùng tư thế ấy, nhưng đặt lại theo một thước khác.** Phòng vẫn còn đó
như một khung lưới mờ, nhưng các khối người **giãn ra xa** — người gần nhất giờ ở **~40m**,
trong một không gian tối hơn, sâu hơn, sương mỏng ăn dần vào chiều sâu. Tiếng cười vẫn còn
nhưng nghe như vọng qua một khoảng trống.

⚠ **Quan trọng: lớp 2 KHÔNG phải cảnh ác mộng.** Không tối đen, không méo mó, không doạ
(luật mục 7). Nó chỉ **xa hơn**. Xa là thông tin, không phải đe doạ.

### Ba cú camera phải có

| Cảnh | Camera | Nó chứng minh điều gì |
|---|---|---|
| **Cú lồng** (chặng 2, đúng lúc nêu 6,7%) | Camera đứng yên ở chỗ 私 ngồi. **Lớp 2 fade chồng lên lớp 1 mà KHÔNG cắt** — người xem thấy cùng một căn phòng, cùng những người ấy, ở hai khoảng cách cùng lúc. Chuyển trong **≥6 giây**, không giật (mục 8: không cắt nhanh hơn 4s). | Đây là toàn bộ phát hiện CLSA trong một hình. |
| **Cú hai thước** (chặng 2, lúc chốt "別々の物差し") | Camera lùi ra trên cao, nhìn xuống **cả hai lớp xếp chồng**. Một đường kẻ 1,2m trên lớp 1, một đường kẻ 40m trên lớp 2, **cùng một cặp người**. | Hai con số cùng đúng. Không cái nào là ảo giác. |
| **Cú khép** (chặng 4) | Về lại lớp 1, camera ở đúng vị trí mở đầu — nhưng giờ lớp 2 còn lại **một vệt mờ rất nhạt**, không biến mất hẳn. | Không hứa cảm giác ấy tan. Hứa rằng nó **có chỗ**. |

### Hai cảnh phụ

- **Vòng lặp (chặng 3b):** dựng thành **một đường đi khép kín trong không gian** — 私 bước
  theo một lối, lối ấy cong dần và về đúng chỗ xuất phát. Bốn chặng trên lối ứng với bốn
  bước của vòng lặp. **Không vẽ sơ đồ mũi tên 2D** — đó là ngôn ngữ của kênh 1.
  ⚠ Lối phải **mở ra một nhánh** ở chặng "giới hạn" — vòng lặp không phải số phận, và hình
  phải nói đúng điều lời đọc nói.
- **Tín hiệu (chặng 3a):** ba vật trên khay gỗ — chén nước, chén cơm, và **chỗ trống thứ ba**.
  Ánh sáng xiên, vân gỗ, đổ bóng thật. Khi lời đọc tới chữ 寂しさ, chỗ trống thứ ba **sáng lên**
  đúng như hai chén kia. Đói, khát, và cô đơn cùng một hàng.

**Ràng buộc kỹ thuật:** tất định tuyệt đối (mulberry32 cho mọi ngẫu nhiên, mọi chuyển động là
hàm thuần của `t`). Nhãn tiếng Nhật trên canvas texture phải khai `'BIZ UDPGothic'` và
`await document.fonts.load(...)` trước nhãn đầu tiên (luật 7). Không cắt cảnh < 4 giây.

---

## Số liệu KHÔNG dùng

⚠ **Đây là mục quan trọng nhất của file này.** Playbook PHẦN VIII bẫy 1: *"chọn dữ liệu gây
sốc nhất thay vì dữ liệu đúng chỗ nhất — con số gây sốc thường là con số làm đau."*

Chủ đề cô đơn ở Nhật có **rất nhiều** số liệu gây sốc nằm sẵn, và chúng đều đi qua cổng
"có nguồn". Cổng chúng không qua là **luật 4d**. Liệt kê ở đây để scriptwriter **không tự ý
thêm vào lúc viết**:

| ⛔ Không dùng | Vì sao |
|---|---|
| **孤独死** — mọi số liệu, mọi ước tính hằng năm, mọi mô tả | Đọc ra với người 50-60+ sống một mình thì đó **không phải khai sáng, đó là dự báo về chính họ**. Vi phạm trực diện 4d ("không xoáy vào nỗi đau") và phép thử cuối của playbook (xem xong nặng hơn). |
| **無縁社会** và mọi biến thể (無縁死, 無縁仏) | Là một **lời chẩn đoán cho cả xã hội**, và người xem nghe ra là chẩn đoán cho mình. Bẫy 2 nguyên vẹn: dùng cơ chế để chẩn đoán thay vì giải tội. |
| **Xếp hạng quốc gia** kiểu "Nhật cô đơn nhất trong N nước", 世界一孤独な国 | Playbook gọi đích danh: *"Nước bạn cô đơn nhất trong bốn nước — đọc ra là buộc tội, không phải khai sáng."* Và nó **không trả lời câu hỏi của tập**: biết nước mình đứng hạng mấy không gỡ được chữ 薄情. |
| **Số liệu tử vong / tuổi thọ gắn với cô đơn** ("cô đơn tương đương hút 15 điếu thuốc/ngày") | Con số nổi tiếng nhất trong lĩnh vực, và **sai chỗ nhất ở đây**. Nó biến một cảm giác thành một nguy cơ chết — với đúng tệp người xem đang nghĩ về cái chết của mình. Cũng là bẫy 4: con số đó xuất phát từ meta-analysis về **cô lập khách quan**, dẫn cho **cảm giác cô đơn** là dẫn lệch. |
| **内閣府 khảo sát tỉ lệ 高齢者 sống một mình** và dự báo tăng | Đúng, có nguồn, nhưng là **số liệu về hoàn cảnh không đổi được**. Nó thêm trọng lượng, không thêm thông tin cho câu hỏi của tập. |
| **ひきこもり**, 8050問題 | Khác vấn đề. Kéo vào là dán một nhãn bệnh lý lên một cảm giác bình thường. |
| **Tỉ lệ trầm cảm ở người cao tuổi** | YMYL (4c) và bẫy 2 cùng lúc: biến "tối nay thấy trống" thành "có thể tôi đang bị bệnh". |

**Luật thay thế:** con số duy nhất được phép làm trọng tâm là **15,6% và 6,7% của CLSA** —
vì chúng là số liệu **bình thường hoá** (playbook: *"con số dùng để bình thường hoá, không
phải để báo động"*). Chúng nói: *chỗ bạn đang ngồi có tên trong bảng.*

⚠ Nếu scriptwriter tìm thấy một con số mới hấp dẫn trong lúc viết, phép thử là một câu:
**người xem nghe xong thấy nhẹ hơn hay nặng hơn?** Nặng hơn → bỏ, dù nguồn tốt tới đâu.

---

## Chống trùng tập 01

Đối chiếu `projects/EPISODES-PRODUCED-JA.md`:

| Hạng mục | Tập 01 `tamashii-no-tabi` | Tập này | Trùng? |
|---|---|---|---|
| **Trụ** | B 仏教の世界 | **A からだ** (tâm lý học xã hội có nguồn) | ✓ khác |
| **中心概念** | 49 ngày là thuyết thiểu số trong 『倶舎論』, được viết thêm ở TQ rồi Nhật | Cô lập và cô đơn đo bằng **hai thước khác nhau** | ✓ khác hẳn |
| **Cú lật** | 本地 của 閻魔王 là 地蔵菩薩 — vị bị sợ nhất chính là vị cứu độ | **Thấy trống giữa người thân không phải vô ơn** — hai thứ ấy không cùng một thước | ✓ khác |
| **Hook** | Đêm 四十九日, ngồi trước 位牌, đĩa ぼたもち chưa ai đụng | **Sau お盆, gập 座布団 thứ năm, khoảng trống mở ra** | ✓ khác — nhưng cùng mã "đêm, một mình, sau một nghi lễ" ⚠ xem ghi chú dưới |
| **Chỗ tựa** | 中陰法要 là 機縁 cho người ở lại đứng dậy | Cảm giác ấy **có tên trong bảng**, và là tín hiệu của chức năng còn nguyên | ✓ khác |
| **Nguồn** | 倶舎論 · 十王経 · 往生要集 · 地蔵十王経 · 金光明経 | **CLSA/PLOS ONE 2020 · Cacioppo · Hawkley & Cacioppo 2010** | ✓ không giao nhau |
| **Khung** | hành trình | **gỡ tội** | ✓ khác |
| **Dựng hình** | 中陰 bảy chặng, sông, vòng 六道 | **Hai lớp không gian chồng lên nhau, 和室** | ✓ khác |

**Khái niệm trong danh sách "dễ trùng" — kiểm từng dòng:**
- 中陰/49 ngày · 十王経 nguỵ tác · 輪廻/六道 · 極楽 · 神仏習合 · 「無宗教」· AWARE · 99,9% hoả táng
  → **tập này không chạm dòng nào.**
- **「Thính giác còn tới cuối」 — (chưa dùng), và tập này CŨNG KHÔNG được dùng.** Chi tiết cảm
  động, để dành cho tập trụ A về 看取り.

⚠ **Một điểm cần canh:** cả hai tập đều mở bằng **"đêm, một mình, sau khi mọi người về"**.
Đó là mã cảnh mạnh nhất của kênh, và dùng hai lần liên tiếp thì lần thứ hai mất lực.
**Xử lý:** tập này đặt 私 vào **động tác** (đang gập 座布団, đang dọn bát) chứ không phải
**ngồi tĩnh trước một vật** như tập 01 (ngồi trước 位牌). Và cảm giác tới **giữa lúc làm việc**,
không phải lúc dừng lại — đó là khác biệt thật, không phải khác biệt hình thức.
Từ tập sau trở đi, **luân phiên mã mở cảnh**, đừng mở đêm lần thứ ba.

⚠ **Chưa ghi vào sổ.** Thêm dòng vào `EPISODES-PRODUCED-JA.md` (hàng đợi + bảng Số liệu)
sau khi người vận hành duyệt file này.

---

## Ràng buộc bắt buộc cho scriptwriter

1. **Số liệu bám đúng bảng 典拠.** Không thêm con số nào ngoài bảng. Không làm tròn khác đi.
2. **Đọc mục "Số liệu KHÔNG dùng" trước khi viết.** Đây là cổng chặn, không phải gợi ý.
3. **Vòng lặp Hawkley & Cacioppo kể theo kiểu "誰にでも起こりうる", không phải "あなたはこうだ".**
4. **Chặng giới hạn là bắt buộc** — mẫu Canada, cắt ngang, xu hướng chứ không phải số phận.
   Bỏ chặng này là bỏ thứ tách kênh khỏi nội dung rác.
5. **Không kê đơn ở câu cuối.** Không 「だから〜しましょう」, không giao việc.
6. **Không con số nào ở chặng 1 và chặng 4.**
7. **Chữ 薄情 dùng trong thân bài** (chặng 1, lúc 私 tự trách; và gỡ ở chặng 4) —
   **không đưa lên tiêu đề.**
8. **Cảnh là điển hình, không bịa người có thật** — 私 hoặc 「ある家で」, không đặt tên,
   không bịa tiểu sử (luật 4f).
9. **Một câu YMYL ở cuối chặng 3**, trung lập, không khuyên điều trị (luật 4c).
10. Ba phép thử trước khi nộp: **KIẾN THỨC** (người xem kể lại được con số 15,6/6,7 và ý
    "hai thước đo") · **CHUYỆN** (có cảnh có người ở chặng 1 và chặng 4) ·
    **NHẸ HƠN** (xem xong thấy nhẹ hơn, không nặng hơn — phép thử cuối của playbook).


---

## ✅ ĐÃ CHỐT RANH GIỚI KÊNH 1 — 2026-09-23

Người vận hành đã chốt và **`channel.json` của kênh 1 ĐÃ ĐƯỢC SỬA**: dòng tương ứng ở
`pillars.時間と記憶` được đánh dấu **⛔ chuyển sang kênh này** kèm lý do (đánh dấu chứ không xoá,
để người vận hành kênh 1 hiểu vì sao mất chủ đề).

Kiểm lại bất cứ lúc nào:

```bash
cd "E:/JAPAN/1. Cánh cửa cơ chế" && node -e "
const c=require('./channel.json');
for(const x of c.pillars['時間と記憶']) if(/^[⛔⚠]/.test(x)) console.log(x.slice(0,90));"
```

⚠ **Đây là ngoại lệ CÓ CHỦ Ý với luật mục 0** — kênh 1 đang chạy cùng playbook song song và
**đã dựng xong 6 MP4**. Chia theo **cách dựng hình**: kênh 1 làm 図解 2D, kênh này làm cảnh
WebGL 3D. Phiên sau đọc thấy hai kênh trùng câu hỏi gốc **đừng tưởng là sơ suất cần sửa**.
