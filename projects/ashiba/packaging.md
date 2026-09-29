# ashiba — packaging

> ## ⚠ CARSTENSEN — làm rõ phạm vi lệnh cấm (2026-09-23)
>
> Lệnh cấm SST/Carstensen dưới đây **chỉ áp cho tập 06 này**, KHÔNG phải cấm toàn kênh.
> Tập 04 `toshi-to-fuan` **được phép** dùng Carstensen ở phạm vi *thời gian còn lại →
> thứ tự ưu tiên*, vì packaging của nó yêu cầu, và nó đã cố ý **không** triển khai sang
> chuyện mạng lưới bạn bè co lại — để nguyên sân cho tập này.
>
> → Với tập 06: lệnh cấm vẫn **tuyệt đối**, một chữ cũng không.

**Khâu 0.** File này chốt tiêu đề + bìa **trước khi viết kịch bản**. Chờ người vận hành duyệt.

```
ANGLE: その話は、実際にはどう起きているのか。誰がそう言っているのか。
KHUÔN: {対象}はなぜ{現象}のか｜{典拠}
TRỤ: ngoài bốn trụ A/B/C/D — đây là tập trụ "chiêm nghiệm" đầu tiên (playbook ý 11).
  Gần nhất với trụ A (からだ/こころ) nhưng nội dung là xã hội học + tâm lý, không phải sinh học.
  ⚠ Người vận hành quyết: mở trụ E 「人とのつながり」 hay coi đây là tập lẻ.
ĐỘ DÀI: **12–14 phút (3.500–4.100 ký tự)** — loại "trả lời một câu hỏi hẹp", theo bảng mục 9.
  Ngắn hơn tập 01 (25,7 phút) là CỐ Ý: tập 01 quá dài khi chưa có số retention.
GIỌNG: keita, speed 0.95 (4,89 ký tự/giây)

ANGLE PHỤ (playbook phần III, #3): **「足場は外された」— giàn giáo đã bị tháo.**
  Một trong ba angle mạnh nhất vì nó **chuyển lỗi ra khỏi người xem**:
  không phải bạn kém đi, mà hoàn cảnh đổi. Slug `ashiba` (足場) lấy từ đó.

KIỂM RANH GIỚI KÊNH 1:
  Câu trả lời cần dựng cảnh? → CÓ. Toàn tập là một **vật thể ẩn dụ dựng 3D**: giàn giáo ống
    thép quanh một toà nhà, ba thanh chống bị tháo lần lượt, toà nhà vẫn đứng.
    図解 2D vẽ được sơ đồ ba điều kiện, nhưng KHÔNG dựng được **vật rơi có vật lý đúng** —
    mà chính cú rơi mới là điều tập này muốn người xem cảm thấy. ✓
  Kênh 1 đã nhận chủ đề này chưa? → ⚠ **CÓ, một phần. Xem mục "Ranh giới kênh 1" bên dưới —
    đây là rủi ro lớn nhất của tập này, người vận hành phải đọc trước khi duyệt.**

TYPO/NGUỒN: Rebecca G. Adams (UNC Greensboro) · Jeffrey A. Hall 2018 ·
  Kauppi et al. 2021 (FIREA, n=2.319) · 内閣府 高齢社会白書
  (bảng đầy đủ ở mục 典拠 bên dưới)

BẰNG CHỨNG CẦU: 3 dấu hiệu, không có bội số thật (kênh mới, chưa có số).
  1. Kênh 1 đã **xếp cùng chủ đề vào hàng đợi** 「大人になると、なぜ友達ができにくいのか」
     — cùng người vận hành, đã qua một lần thẩm định cầu.
  2. Playbook đánh dấu ✓ (đã tra nguồn) — một trong 7/20 ý đạt dấu đó.
  3. Số nền của thị trường Nhật: 内閣府 khảo sát so sánh quốc tế — **khoảng 40% nam giới
     Nhật từ 60 tuổi trả lời không có bạn** (cả cùng giới lẫn khác giới), cao hơn hẳn Mỹ,
     Đức, Thuỵ Điển. Tệp người xem đúng là tệp đang sống trong vấn đề này.
```

---

## ✅ ĐÃ DUYỆT 2026-09-23 — giữ tập, tách theo cơ chế

Người vận hành đã xem rủi ro nêu dưới đây và **chốt GIỮ tập này**, chia theo đúng lằn ranh
trong bảng: **kênh 1 = cơ chế bên trong · kênh này = điều kiện bên ngoài**.

**Ba việc bắt buộc ở mục dưới giờ là RÀNG BUỘC CỨNG, không phải đề xuất:**
1. ⛔ Không một chữ nào về SST / Carstensen / 社会情動的選択性理論.
2. ⛔ Không dùng khuôn tựa 「大人になると〜」.
3. ✅ Đã làm: `channel.json` kênh 1 dòng 「大人になると、なぜ友達ができにくいのか」 đã được
   đánh dấu **⚠ CHIA** kèm ghi chú đầy đủ (không xoá, để người vận hành kênh 1 hiểu vì sao).

⚠ **Rủi ro còn lại người vận hành đã chấp nhận:** kênh 1 dựng xong tập của nó lúc 14:10 ngày
2026-09-23. Hai video cùng tiếng Nhật, cùng tệp 50-60+, lên sóng cách nhau có thể chỉ vài ngày.
Theo dõi cột **Hạn chế QC** ở bảng Số liệu; nếu có tập bị vàng hoá thì đây là nghi phạm đầu.

---

## ⚠ Ranh giới kênh 1 — phân tích gốc (giữ để tra cứu)

`E:\JAPAN\1. Cánh cửa cơ chế\channel.json` → trụ **時間と記憶** dòng 122 có:
**「大人になると、なぜ友達ができにくいのか」** — gần như trùng câu hỏi gốc.

Và kênh 1 **đã sản xuất** một tập sát bên: 「付き合いが減るのは年のせいか｜実験で分かれたこと」
(738s), nội dung là **SST của Carstensen** — số người giảm đi là do **viễn cảnh thời gian đổi**,
tức là người ta **chủ động chọn ít người hơn**.

**Ba điểm tách bạch — nếu người vận hành thấy chưa đủ thì KILL tập này:**

| | Kênh 1 (đã có) | Tập này |
|---|---|---|
| Cơ chế | **Bên trong người** — thời gian còn lại đổi thì ưu tiên đổi (SST) | **Bên ngoài người** — ba điều kiện môi trường bị tháo (Adams / Hall) |
| Kết luận | Số giảm mà chỗ gần đậm lên → **không phải suy yếu** | Bạn không mất khả năng → **cái giàn giáo bị tháo** |
| Hình | 図解: đồ thị, thí nghiệm Hồng Kông 1997 | Vật thể 3D: giàn giáo tháo từng thanh |
| Nguồn | Carstensen, Fung, Reed | Adams, Hall 2018, FIREA 2021 |

Hai tập **bổ nhau chứ không đè nhau**: kênh 1 nói *bạn chọn ít người hơn*, tập này nói *cơ hội
gặp người mới đã bị rút đi*. Nhưng chúng **rất dễ nghe giống nhau với người xem thường**.

**Ba việc bắt buộc nếu duyệt:**
1. ⛔ **Không nhắc SST / Carstensen / 社会情動的選択性理論** trong tập này. Một chữ cũng không.
2. ⛔ **Không dùng khuôn tựa 「大人になると〜」** — nhường đúng câu đó cho kênh 1.
   Mọi tựa dưới đây đều bám **定年/退職**, một hoàn cảnh hẹp hơn, khác hẳn.
3. Ghi vào `EPISODES-PRODUCED-JA.md`: chủ đề 友達 chia đôi — **cơ chế bên trong → kênh 1,
   điều kiện bên ngoài → kênh này**. Kênh 1 gạch dòng 122 khỏi hàng đợi hoặc đổi góc.

---

## 10 tiêu đề nháp

Tính ký tự **toàn角** (ASCII = 0,5). Luật: ≤30, nhắm 20–28, vế trước `｜` tự đứng được.
⛔ Không 死 · không 真相/衝撃/知らないと損/絶対/ヤバい · không 魂/あの世 (từ khoá スピリチュアル,
playbook phần IV) · không là lời vạch trần.

| # | Tiêu đề | 全角 | Vế trước tự đứng? | **Ai gõ câu này** | /8 | Câu hỏi nó mở ra |
|---|---|---|---|---|---|---|
| **A** | 定年のあと、なぜ友達ができないのか｜三つの条件 | **23** | ✓ (17) | Nam 63, nghỉ hưu tháng trước. Vừa ăn trưa một mình ở quán cơm gần công ty cũ, giữa những người còn đeo thẻ nhân viên. Về nhà đầu giờ chiều và gõ. | **8** | "Ba điều kiện gì? Hoá ra có điều kiện à?" |
| **B** | 退職して、なぜ人と会わなくなるのか｜三つの条件 | **23** | ✓ (17) | Nữ 61, nghỉ việc bán thời gian được nửa năm. Nhận ra cả tuần chỉ nói chuyện với chồng. | **7** | "Không phải tại tôi ngại à?" |
| **C** | 同窓会に行くのが気が重いのはなぜか｜三つの条件 | **23** | ✓ (17) | 65 tuổi, vừa nhận hagaki mời 同窓会 tháng sau. Muốn đi mà thấy ngại, không hiểu vì sao. Gõ tối hôm nhận thư. | **7** | "Vì sao gặp lại bạn cũ lại mệt?" |
| **D** | 定年で友達が減るのは年のせいではない｜三つの条件 | **24** | ✓ (18) | Người vừa đọc một bài báo nói "người già thì ít bạn là bình thường" và thấy không phục. | 6 | "Không phải tại tuổi thì tại gì?" ⚠ câu khẳng định, không phải câu hỏi |
| **E** | なぜ学校では友達ができたのか｜社会学者が挙げた三つの条件 | **28** | ✓ (14) | Người đang so mình hồi trẻ với mình bây giờ, tự hỏi mình đã đổi chỗ nào. | **7** | "Hồi đó có gì mà giờ không có?" |
| **F** | 友達を作るのに何時間かかるのか｜Hall 2018が数えた時間 | **26,5** | ✓ (15) | Người vừa quyết định "thôi để năm sau rủ lại", đang tự hỏi thật ra cần bao lâu. | 6 | "Có đo được thật à? Bao nhiêu giờ?" |
| **G** | 定年のあと、友達は本当に減るのか｜フィンランドの追跡調査 | **28** | ✓ (16) | Người sắp nghỉ hưu (còn 1 năm), đang sợ trước. Gõ để biết mình sắp mất gì. | **7** | "Có ai đo thật chưa? Mất bao nhiêu?" |
| **H** | 退職後、話す相手が妻だけになるのはなぜか｜三つの条件 | **26** | ✓ (20) | Nam 64, đúng người trong tình cảnh đó, gõ lúc 11 giờ đêm. Cực kỳ hẹp và cực kỳ thật. | **7** | "Có phải chỉ mình tôi thế này?" ⚠ xem ghi chú 4d |
| **I** | 会社をやめると、なぜ人と会わなくなるのか｜三つの条件 | **26** | ✓ (20) | Người nghỉ việc giữa chừng (không phải 定年), 55 tuổi, tệp hơi lệch. | 6 | "会社 làm gì cho tôi mà tôi không biết?" |
| **J** | ~~あの頃は友達ができたのに｜社会学者が挙げた三つの条件~~ | 26 | ✗ | **Viết không nổi.** Không kể ra được ai gõ câu này — không ai tra cứu bằng một câu cảm thán. | **LOẠI** | — |

**Đếm luật 2b:** 7/10 tựa (A, B, C, D, G, H, I) bắt đầu từ **hoàn cảnh có thật**
(定年 / 退職 / nhận thư 同窓会 / nhận ra chỉ nói chuyện với vợ) — qua ngưỡng ≥6.

**J bị loại thẳng theo câu thử 1** — không kể ra được ai gõ. Đúng luật mục 2b: "viết không nổi
→ loại thẳng, dù mấy điểm ở mục khác".

**D bị trừ:** là câu khẳng định chứ không phải câu hỏi — playbook phần IV: *"luôn là câu hỏi,
không ngoại lệ"*. Vẫn giữ trong bảng vì nó phủ định-lỗi rất mạnh.

**F bị trừ:** vế trước không có hoàn cảnh thúc (câu thử 3). Con số hay nhưng là **nội dung của
chương 5**, không phải cửa vào.

**I bị trừ:** 会社をやめる gồm cả nghỉ việc tuổi 40–50 — tệp lệch khỏi 50-60+.

**⚠ H — tựa mạnh nhất về độ thật, nhưng có rủi ro 4d.** 「話す相手が妻だけ」 khớp chính xác câu
người ta gõ, nhưng nó **gọi tên nỗi đau** thay vì gọi tên việc phải làm. Luật 2b có ghi đúng
tình huống này: 「親が死んで何もする気が起きない」 khớp câu tìm nhưng vi phạm 4d → bỏ. H nhẹ hơn
ví dụ đó (không phải tang tóc), nên **giữ lại làm phương án C**, không làm A.

---

## 5 cặp tiêu đề + concept bìa

Chữ bìa **≤8 ký tự toàn角, dạng câu hỏi**. Chủ thể là **vật/cảnh dựng 3D**, ≥40% chiều cao,
trọng tâm trong 360px trên. Không mặt người kinh ngạc, không mũi tên đỏ, không hình doạ.

| # | Tiêu đề | Công thức | Concept bìa |
|---|---|---|---|
| **1** | 定年のあと、なぜ友達ができないのか｜三つの条件 | **なぜ** — thứ ai cũng trải mà không ai giải thích | **Chủ thể:** giàn giáo ống thép bao một toà nhà, **ba thanh chống ngang đã rời ra, đang rơi**, bắt nắng chiều · **Chữ:** 「なぜ外れた？」(6) · **Người xem tự hỏi:** "cái gì bị tháo? tháo khỏi ai?" · **Cảm thấy:** hụt một nhịp, rồi nhẹ — vì cái rơi là **giàn giáo**, không phải toà nhà |
| **2** | なぜ学校では友達ができたのか｜社会学者が挙げた三つの条件 | **典拠 lạ** — nhà xã hội học, không phải "chuyên gia" | **Chủ thể:** giàn giáo **còn nguyên vẹn, ba thanh chống khớp chặt**, ánh sáng ấm buổi sớm · **Chữ:** 「あの頃は？」(5) · **Tự hỏi:** "hồi đó có gì mà giờ không có?" · **Cảm thấy:** hoài niệm, chưa đau |
| **3** | 定年のあと、友達は本当に減るのか｜フィンランドの追跡調査 | **so sánh / có người đo thật** | **Chủ thể:** giàn giáo nhìn từ xa, **vòng ngoài thưa hẳn còn lõi trong đặc nguyên** — hai tầng mật độ thấy rõ trong một hình · **Chữ:** 「減るのは外側」(7) · **Tự hỏi:** "cái gì mỏng đi, cái gì không?" · **Cảm thấy:** yên tâm có cơ sở |
| **4** | 友達を作るのに何時間かかるのか｜Hall 2018が数えた時間 | **con số bất ngờ** | **Chủ thể:** giàn giáo dựng dở, **các thanh chưa lắp xếp chồng dưới đất**, đổ bóng dài · **Chữ:** 「二百時間？」(5) · **Tự hỏi:** "200 giờ cho một người bạn?" · **Cảm thấy:** ngạc nhiên, rồi thở phào ("hoá ra hồi đi làm mình có sẵn") |
| **5** | 同窓会に行くのが気が重いのはなぜか｜三つの条件 | **thứ nghiên cứu nói khác điều ta tưởng** | **Chủ thể:** giàn giáo **chỉ còn khung, thanh ngang đã tháo hết**, sương mỏng, đèn đường · **Chữ:** 「気が重い？」(5) · **Tự hỏi:** "vì sao gặp bạn cũ lại mệt?" · **Cảm thấy:** được hiểu |

---

## Chọn · Lời hứa · Brief

### Chọn

**Cặp số: 1** — 「定年のあと、なぜ友達ができないのか｜三つの条件」 (**23 ký tự toàn角**, vế trước 17)

**Ai gõ câu này:** người đàn ông 63 tuổi, nghỉ hưu tháng trước. Vừa ăn trưa một mình ở quán cơm
quen gần công ty cũ, giữa những người còn đeo thẻ nhân viên đang nói chuyện công việc. Về tới
nhà đầu giờ chiều, **buổi chiều còn dài**, và anh gõ đúng câu đó — không phải để tìm cách kết
bạn, mà để hiểu **chuyện gì vừa xảy ra với mình**.

**Vì sao chọn:**

1. **Qua cả ba câu thử của luật 2b.**
   (1) Kể ra được người, hoàn cảnh, thời điểm — ở trên.
   (2) Vế trước chỉ có 定年 · 友達 — hai từ ai cũng biết **trước khi xem**. Ba thuật ngữ thật
   (近接性, 社会関係資本, FIREA) **nằm hết trong video**, đúng chỗ phần thưởng.
   (3) Hoàn cảnh thúc rõ: 定年 **vừa xảy ra**, và cái trống vắng đang **tăng dần từng tuần**.
2. **「三つの条件」 là cửa tò mò rẻ nhất mà mạnh nhất.** Ba thứ, đếm được, hứa một kiến thức
   **kể lại được cho người khác** — đúng luật 4f (xem xong phải học được một điều cụ thể).
3. **Không kê đơn ngay từ tiêu đề.** Tựa hỏi 「なぜ」 chứ không hứa 「どうすれば」. Người xem biết
   ngay đây không phải video self-help — đây là điều tách kênh khỏi 大愚和尚 (luật 4e).
4. 23 ký tự, nằm giữa khoảng nhắm 20–28. Vế trước 17 ký tự **tự đứng được** khi YouTube cắt đuôi.
5. **Bìa số 1 làm được bài test không tiêu đề:** một giàn giáo đang rơi thanh chống, không cần
   đọc chữ vẫn thấy "có cái gì đó vừa bị lấy đi mà cái nhà vẫn đứng".

**Phép thử giết sớm — "chính tôi có bấm không?"** → Chờ người vận hành. ⏳

**Phương án B (đổi sau 24h nếu CTR thấp):** cặp **3** —
「定年のあと、友達は本当に減るのか｜フィンランドの追跡調査」 (28 ký tự).
Đổi hẳn trục: từ **"vì sao"** sang **"có ai đo thật chưa"**. Nếu cặp 1 CTR thấp vì nghe giống
bài self-help đã thấy nhiều, thì cặp 3 bán bằng **bằng chứng** — 「フィンランドの追跡調査」 là
thứ kênh スピリチュアル không bao giờ viết được, và nó **báo ngay cho người xem rằng đây là
nghiên cứu, không phải lời khuyên**.

**Phương án C (chỉ dùng nếu người vận hành chấp nhận rủi ro 4d):** cặp **H**
「退職後、話す相手が妻だけになるのはなぜか｜三つの条件」 (26 ký tự). Khớp câu tìm chính xác
nhất trong cả 10, nhưng gọi tên nỗi đau. **Không tự động dùng — cần người quyết.**

---

### Lời hứa (video phải thực hiện)

**Người xem bấm vì muốn biết:** vì sao hồi trẻ bạn bè tự nhiên mà có, còn bây giờ thì dù có
nhiều thời gian hơn bao giờ hết vẫn không kết được ai — và **liệu có phải tại mình không**.

**Video trả lời ở chương:**

| Câu hỏi trong đầu người xem | Trả lời ở |
|---|---|
| "Ba điều kiện là gì?" | 第2章 — Adams: 近接性 · 予定しない再会 · 心を開ける場 |
| "Vì sao hồi đi làm thì có?" | 第3章 — 会社 cấp đủ ba điều kiện suốt 40 năm, miễn phí |
| "Vậy bây giờ thiếu cái gì?" | 第3章 kết — cả ba bị tháo **trong cùng một ngày** |
| "Thật sự cần bao nhiêu?" | 第4章 — Hall 2018: 40–60 / 80–100 / 200+ giờ |
| "Vậy tôi mất hết rồi à?" | 第5章 — FIREA: **vòng ngoài giảm 0,67 người, lõi không đổi** |
| "Có phải tại tôi không?" | 第6章 — không. Câu mang về. |

**Ba điều người xem HỌC ĐƯỢC và kể lại được** (luật 4f — kiểm trước khi nộp kịch bản):
1. Tình bạn cần **ba điều kiện của môi trường**, không phải ba đức tính của con người.
2. Hall 2018 **đếm được** số giờ — và 40 năm đi làm đã cho sẵn từng ấy giờ.
3. FIREA đo thấy **cái mỏng đi là vòng ngoài, không phải chỗ sâu**.

---

### Brief

**Độ dài: 3.500–4.100 ký tự.** Cân bằng nhắm (luật 4f): **40% kể · 50% giải thích · 10% chỗ tựa.**

**Mở bằng:** một cảnh, không phải khái niệm. ⛔ KHÔNG mở bằng số liệu, KHÔNG mở bằng định nghĩa.

⚠ **CẢNH MỞ PHẢI LÀ BAN NGÀY, GIỜ HÀNH CHÍNH, VÀ CÓ NGƯỜI KHÁC TRONG KHUNG.**
Người điều phối chốt giữa Khâu 0: bốn tập khác (01 `tamashii-no-tabi`, 02 `hanashikakeru`,
04 `toshi-to-fuan`, 05 `hitori-no-naka`) **đều mở vào đêm hoặc sáng sớm, một mình**. Năm tập
giống hệt nhau ở 30 giây đầu là hỏng đúng chỗ quyết định người xem có ở lại không.
**Tập này là tập ban ngày.**

> **12 giờ trưa, một ngày thường giữa tuần.** Quán cơm quen cách công ty cũ hai dãy phố —
> 「私」 ăn ở đây suốt mười mấy năm. Hôm nay vẫn ngồi đúng chỗ cũ, gọi đúng món cũ.
> Quanh bàn là áo sơ mi, thẻ nhân viên lủng lẳng, tiếng nói chuyện công việc, tiếng cười
> vì một chuyện chỉ người trong công ty mới hiểu. **Cái ghế đối diện trống.**
> 「私」 ăn xong trước tất cả mọi người, vì không có ai để nói chuyện cùng.
> Ra khỏi quán lúc 12 giờ 20. Buổi chiều còn dài. **Không có chỗ nào phải đến.**

**Vì sao cảnh này, không phải cảnh sáng ở nhà:**
1. **Sự lệch giờ CHÍNH LÀ nội dung.** Đây là giờ mà bốn mươi năm qua 「私」 đang ở giữa những
   người kia. Cùng quán, cùng giờ, cùng món — **chỉ thiếu cái giàn giáo**. Cảnh ở nhà một
   mình chỉ tả *sự vắng*; cảnh này tả *sự vắng có đối chiếu ngay bên cạnh*, mạnh hơn hẳn.
2. **Có người khác trong khung ngay từ giây đầu.** Ba điều kiện của Adams hiện ra **bằng hình,
   trước khi được gọi tên**: những người kia đang **ở gần nhau** (近接性), **gặp nhau mà không
   ai hẹn** (予定しない再会), trong **một chỗ người ta hạ phòng thủ** (心を開ける場 — quán ăn,
   giờ nghỉ, cười vì chuyện nội bộ). 「私」 ngồi cách họ hai mét và **không có cả ba**.
3. Tách hẳn khỏi bốn tập kia: ban ngày · ngoài nhà · ồn · có người.

⛔ **KHÔNG mở bằng:** cảnh dậy sớm, cảnh cà phê nguội trong bếp, cảnh ngồi một mình trong
phòng, cảnh nhìn điện thoại không ai gọi. Bốn cảnh đó đã bị tập khác lấy, và đều là **cảnh tối
và tĩnh**.

**Bốn chặng (luật 4f):**

| Chặng | Nội dung | Ghi chú |
|---|---|---|
| **入口** (~600 ký tự) | Cảnh quán cơm buổi trưa. Nghịch lý nêu thẳng: **thời gian thì nhiều chưa từng có, người thì ít chưa từng có** — và nó đang diễn ra cách hai mét. Câu hỏi nảy ra rất đời: *"hồi đó tôi kết bạn kiểu gì nhỉ?"* | Người xem phải nhận ra mình trong 30 giây. ⚠ Ban ngày, có người khác trong khung |
| **旅のはじまり** (~1.100) | Nhớ lại: 同期入社, bàn kế bên, quán sau giờ làm. **Rồi mới nêu nguồn** — Rebecca Adams tổng hợp ba điều kiện. Soi lại cảnh vừa kể: hồi đó có đủ cả ba. | Tả cảnh TRƯỚC, nêu tên nguồn SAU |
| **深いところ** (~1.400) | Ba điều kiện bị tháo theo mốc đời: rời trường → mất cái thứ nhất; đổi việc/chuyển nhà → thứ hai; **定年 → cả ba cùng một ngày**. Rồi Hall 2018: con số. Cú lật đặt ở đây. Rồi **chương giới hạn**. | Xem "chương giới hạn" bên dưới — BẮT BUỘC |
| **帰り道** (~700) | Về đúng quán cơm ấy, đúng giờ trưa ấy. Vẫn áo sơ mi, vẫn tiếng cười công việc, ghế đối diện vẫn trống — **không có gì đổi ở ngoài**. Cái đổi là người ngồi đó **biết tên thứ mình đã mất**, và biết nó không nằm trong mình. FIREA. Câu mang về. | ⛔ Không giao việc. ⛔ Không cho 「私」 bắt chuyện với ai — đó là kê đơn bằng hình |

**Cú lật (đúng dạng "hoá ra nó CÓ NGHĨA như thế", không phải "hoá ra anh tin nhầm"):**

> Suốt bốn mươi năm, bạn tưởng mình **giỏi kết bạn**.
> Thật ra công ty đã **dựng sẵn cái giàn giáo** làm việc đó thay bạn — mỗi ngày, miễn phí,
> không ai nói ra. Giàn giáo tháo xuống rồi, và bạn đang đứng đúng chỗ cũ,
> làm đúng việc cũ, mà không có gì đỡ nữa.

⚠ Cú lật này phải **gỡ tội, không chẩn đoán** (playbook bẫy 2). Nó nói *"cái đỡ bạn đã mất"*,
KHÔNG nói *"bạn chưa bao giờ giỏi"*. Khác biệt ở chỗ nhấn: nhấn vào **giàn giáo**, không vào
**người**.

**Chương giới hạn (BẮT BUỘC — playbook bẫy 3, mục "Chương 6 phân biệt kênh với kênh tâm linh"):**
- Adams: đây là **tổng hợp của một nhà xã hội học**, không phải một thí nghiệm có nhóm đối chứng.
- Hall 2018: mẫu là **sinh viên chuyển trường** và **người lớn vừa chuyển chỗ ở Mỹ** — con số
  200 giờ là **ước lượng trung bình**, không phải ngưỡng cho từng người. Và Hall nói rõ:
  **giờ làm việc chung không tính ngang giờ chơi chung.** ⚠ Chi tiết này phải nêu — nó làm
  phần 会社 phức tạp hơn và thành thật hơn.
- FIREA: mẫu là **công chức Phần Lan**, không phải người Nhật. Nêu rõ.

**Chốt ở (chỗ tựa CÓ THẬT, luật 4d):** FIREA 2021 — sau 定年, **vòng ngoài giảm, lõi thì không**.
Con số thật: vòng ngoài giảm **0,67 người**; vòng trong và vòng giữa **không giảm**.
Không hứa gì siêu hình. Chỉ nói: người ta đã đo, và **cái mỏng đi không phải chỗ sâu**.

**Câu mang về (dịch tinh thần từ playbook):**

> 友達を作る力が、なくなったわけではないんです。
> その仕事を代わりにやってくれていた足場が、外されただけなんです。

**Khung chính:** **một vật thể bị tháo dần** (không trộn với khung hành trình của tập 01).

---

## 典拠

| Nguồn | Năm | Dùng ở | ⚠ Ghi cho đúng |
|---|---|---|---|
| **Rebecca G. Adams**, nhà xã hội học, UNC Greensboro — ba điều kiện hình thành tình bạn: **近接性** (proximity) · **予定しない繰り返しの再会** (repeated unplanned interaction) · **心を開ける場** (a setting that encourages confiding) | nghiên cứu **giữa thế kỷ 20**, Adams tổng hợp | 第2章 | ⚠⚠ **ĐÂY LÀ PHẦN TỔNG HỢP CỦA BÀ VỀ NGHIÊN CỨU GIỮA THẾ KỶ 20 — KHÔNG PHẢI MỘT BÀI BÁO RIÊNG CỦA BÀ.** Kịch bản phải nói đúng kiểu 「社会学者のレベッカ・アダムスが、二十世紀半ばの研究をまとめて挙げた三つの条件」 — **KHÔNG** được viết 「アダムスの研究によると」 hay 「アダムスの論文では」. Playbook nhấn mạnh riêng điểm này. |
| **Jeffrey A. Hall**, "How many hours does it take to make a friend?", *Journal of Social and Personal Relationships* | 2018 (đăng online 2018, số in 2019) | 第4章 | ~40–60 giờ → 知り合い thành 親しい知人 · 80–100 giờ → 友人 · **hơn 200 giờ** → 親友. Là **ước lượng gộp từ hai nghiên cứu**, không phải ngưỡng cứng. ⚠ Hall nói rõ **giờ làm việc chung không tính ngang giờ chơi chung** — phải nêu. |
| **Kauppi et al.**, "Social network ties before and after retirement: a cohort study", *European Journal of Ageing* — **FIREA** (Finnish Retirement and Aging study), Đại học Turku, **n = 2.319** | 2021 | 第5章 (chỗ tựa) | Trung bình **21,6** quan hệ trước nghỉ hưu (vòng trong 5,6 · vòng giữa 6,9 · vòng ngoài 9,1). **Vòng ngoài giảm 0,67 người** trong giai đoạn chuyển tiếp nghỉ hưu; **vòng trong và vòng giữa không giảm**. Và mức giảm **chỉ xảy ra lúc chuyển tiếp, không tiếp tục sau đó** → gắn với **việc nghỉ hưu**, không phải với **việc già đi**. ⚠ Mẫu là công chức Phần Lan — nêu giới hạn. |
| **内閣府**『高齢社会白書』/ khảo sát so sánh quốc tế về đời sống và ý thức người cao tuổi | — | 第1章 hoặc 第3章 | Khoảng **40% nam giới Nhật từ 60 tuổi** trả lời **không có bạn** (cả cùng giới lẫn khác giới); tỉ lệ này cao hơn hẳn Mỹ, Đức, Thuỵ Điển. ⚠ **scriptwriter phải tra lại năm bản白書 và số chính xác trước khi đọc số lên hình** — luật playbook: mọi con số kèm nguồn và năm hiện trên màn hình. |

**Quy tắc số liệu (playbook phần V):** số liệu đặt **ở giữa**, ⛔ không mở đầu bằng số,
⛔ không kết thúc bằng số. Con số dùng để **bình thường hoá**, không phải để báo động —
nên 40% của 内閣府 phải đọc theo kiểu *"hoá ra hai trong năm người đang ở cùng chỗ với tôi"*,
KHÔNG phải *"Nhật Bản là nước cô đơn nhất"* (đó đúng là bẫy số 1 của playbook).

⛔ **KHÔNG nhắc tới trong tập này:** SST / Carstensen / 社会情動的選択性理論 — thuộc kênh 1
(xem mục Ranh giới kênh 1).

---

## Cảnh dựng WebGL

**Đây là lý do tập này thuộc kênh này chứ không phải kênh 1: ẩn dụ được dựng thành VẬT THỂ.**
図解 2D vẽ được ba ô vuông và ba mũi tên. Nó **không dựng được một thanh thép rơi có vật lý đúng**
— mà cú rơi mới là thứ người xem mang về.

### Vật thể chủ đạo: 足場 (giàn giáo ống thép) bao quanh một toà nhà

Kiểu **くさび式足場** (giàn giáo chốt nêm) — loại người Nhật nhìn là nhận ra ngay ở mọi công
trường. Ống thép tròn mạ kẽm, sàn công tác bằng thép dập, lưới che màu xanh lá nhạt.

| Yếu tố | Dựng thế nào | ⚠ Luật |
|---|---|---|
| **Ống thép** | Hình trụ thật (không billboard phẳng), PBR: metalness ~0,9 · roughness ~0,45 · normal map vết xước và mối hàn. Mạ kẽm có **vân hoa kẽm** loang — đây là chi tiết làm nó thật | Luật 2 của CLAUDE.md: giống thật nhất có thể |
| **Toà nhà bên trong** | Bê tông, cửa sổ phản xạ môi trường. **Luôn đứng nguyên từ đầu tới cuối** — đây chính là FIREA | Là chỗ tựa dựng thành hình |
| **Ba thanh chống ngang** | Ba thanh **nhận diện được riêng** (vị trí + ánh sáng khác nhau), tương ứng ba điều kiện. Có nhãn canvas: **近接性** · **予定しない再会** · **心を開ける場** | Nhãn phải khai `'BIZ UDPGothic'` và `await document.fonts.load(...)` trước khi vẽ — luật 7 |
| **Ánh sáng** | ⚠ **NẮNG GIỮA TRƯA, không phải hoàng hôn.** Mặt trời cao, **bóng đổ CỨNG và ngắn**, tương phản mạnh, trời trong. Đây là đòi hỏi kỹ thuật chứ không phải thẩm mỹ: **chỉ nắng gắt mới đọc được kết cấu ống thép** — vân hoa kẽm, mối hàn, vết xước, chốt nêm. Cảnh tối giấu hết những chi tiết đó, mà chúng là **thứ duy nhất tách kênh này khỏi 図解 2D phẳng**. Chuyển sắc theo chặng làm bằng **góc mặt trời và độ trong của không khí** (trưa trong → trưa hanh bụi → trưa dịu sau khi bụi lắng), ⛔ không làm bằng cách tối cảnh đi | Không cắt cảnh nhanh hơn 4 giây (mục 8) |

### Dòng thời gian của vật thể (bám bốn chặng)

| Chặng | Trạng thái giàn giáo | Vật lý |
|---|---|---|
| **入口** | **Nắng trưa gắt.** Camera đi chậm quanh toà nhà. **Giàn giáo đã không còn** — chỉ còn **lỗ bu-lông trên tường**, vệt gỉ chảy dài dưới mỗi lỗ, và **bốn vết chân giàn in trên nền bê tông** nơi mưa nắng không chạm tới suốt bốn mươi năm. Người xem chưa biết đó là gì | Tĩnh. Bụi lơ lửng thấy được nhờ nắng gắt chiếu xiên qua (seeded PRNG, hàm thuần của `t`). Bóng toà nhà ngắn, đổ gần như thẳng xuống |
| **旅のはじまり** | **Tua ngược.** Giàn giáo dựng lại quanh toà nhà, ba thanh chống khớp vào. Nhãn ba điều kiện sáng lên lần lượt | Lắp ghép, không rơi. Chuyển động là hàm của `t` |
| **深いところ** | **Tháo từng thanh theo mốc đời.** 卒業 → thanh 1 tuột, **rơi tự do, đập xuống đất, nảy, lăn, dừng** · 転職/引っ越し → thanh 2 · **定年 → cả giàn tháo trong một ngày**: một chuỗi ống thép đổ liên hoàn, bụi bốc lên mù trong nắng | ⚠ **Vật lý rơi phải đúng** — g = 9,8, nảy có mất năng lượng, ống tròn thì **lăn** chứ không trượt. Tất định: mô phỏng theo `t`, ⛔ không `+= dt`, ⛔ không `Math.random`. ⭐ **Nắng trưa gắt trả công ở đúng đây:** mỗi thanh rơi kéo theo **bóng đổ cứng chạy trên mặt tường** — người xem thấy cú rơi **hai lần**, một lần ở vật, một lần ở bóng. Đây là thứ 図解 2D không có |
| **帰り道** | Bụi lắng, không khí trong lại. Camera lùi ra. **Toà nhà vẫn đứng, nguyên vẹn, không sứt một mảng** — mặt tường sạch, bóng vẫn ngắn, **vẫn đúng giờ trưa ấy**. Ống thép nằm dưới chân | Đây là câu kết dựng thành hình: cái rơi là giàn giáo, cái đứng là con người. ⚠ **KHÔNG cho mặt trời lặn hay mọc** — thời gian trong cảnh không được trôi, vì ở 帰り道 **không có gì đổi ở ngoài**. Cái dịu đi là **bụi**, không phải ánh sáng |

### Hai cảnh phụ

1. **第4章 Hall 2018 — cột giờ.** Giàn giáo cũ ở nền mờ. Tiền cảnh: ống thép xếp chồng thành
   **ba cột cao khác nhau** (40–60 / 80–100 / 200+ giờ). Cột thứ ba cao gấp bốn hai cột kia
   — **để chiều cao tự nói**, không cần đồ thị. Không phải chart 2D; là **vật thật xếp chồng**,
   đổ bóng thật.
2. **第5章 FIREA — hai tầng mật độ.** Toàn cảnh từ xa: **vòng ngoài giàn giáo thưa hẳn**,
   **phần sát tường vẫn đặc nguyên**. Một hình duy nhất chứa trọn kết quả của FIREA, không
   cần chữ.

⛔ **Không dựng:** người có mặt (vi phạm "cảnh là điển hình"), ảnh mộ, hình doạ, sơ đồ mũi tên
2D (đó là ngôn ngữ của kênh 1).

---

## Không kê đơn

⚠ **Đây là bẫy lớn nhất của tập này.** Chủ đề "kết bạn khó" cực dễ trượt thành self-help.
Playbook phần VIII bẫy 5: *"Người xem đến vì một câu hỏi, không phải vì một bài tập về nhà.
Câu cuối gỡ gánh, không giao việc."*

### ⛔ Tập này CỐ Ý KHÔNG nói những điều sau

| Không nói | Vì sao |
|---|---|
| 「地域のサークルに参加してみましょう」 | Kê đơn. Và nó ngầm nói "anh chưa cố đủ" |
| 「地域デビュー」「第二の居場所を作りましょう」 | Đã tra, có thật, **nhưng vẫn không đưa vào**. Nó là lời khuyên hành chính của chính quyền địa phương, không phải phát hiện. Đưa vào là biến tập này thành 広報誌 |
| 「自分から誘ってみてください」 | Đúng bẫy 5. Và trớ trêu: người đang xem chính là người **đã thử rồi** |
| 「趣味を持ちましょう」「SNSを活用しましょう」 | Kê đơn, và là thứ họ đã nghe từ mọi phía |
| 「まだ間に合います」 | Nghe như an ủi, thật ra là **giao hạn chót** |
| Bất kỳ câu nào dạng 「〜しましょう」「〜してみてください」「〜すべきです」 | ⛔ **Không một câu nào.** scriptwriter kiểm bằng grep trước khi nộp |

### ✓ Thay vào đó, câu kết gỡ gánh thế nào

Câu cuối **không giao việc mà trả lại một thông tin**: hoá ra cái mất đi có tên, và nó không
nằm trong con người bạn.

> 友達を作る力が、なくなったわけではないんです。
> その仕事を代わりにやってくれていた足場が、外されただけなんです。

**Ba việc câu này làm:**
1. **Phủ định lời buộc tội** mà người xem đang tự nói với mình ("mình thành người khó gần rồi").
2. **Đặt tên cho cái mất** — 足場. Có tên thì bớt mơ hồ, mà mơ hồ mới là thứ nặng.
3. **Không đòi hỏi gì.** Xem xong có thể tắt máy đi ngủ và vẫn **nhẹ hơn lúc bật**.

⚠ **Phép thử cuối của playbook (phần VII):** *xem xong người ta thấy **nhẹ hơn hay nặng hơn**?
Nặng hơn thì bỏ, dù số liệu hay đến đâu.* Áp cho tập này: nếu bản nháp kịch bản khiến người
xem thấy **mình đang thiếu một việc phải làm** → viết lại, không vá.

**Không xoáy vào nỗi đau (luật 4d):** cảnh 入口 công nhận cái trống vắng **một câu rồi đi tiếp**.
⛔ Không tả chi tiết cảnh ngồi một mình, ⛔ không kể lể, ⛔ không nhắc 孤独死, ⛔ không dùng số
liệu 孤独 kiểu báo động.

---

## Chống trùng tập 01

`projects/EPISODES-PRODUCED-JA.md` — tập 01 `tamashii-no-tabi`
(なぜ七日ごとに法要をするのか｜十王経が説く七回の審判).

| Hạng mục | Tập 01 | Tập này | Trùng? |
|---|---|---|---|
| **中心概念** | 49 ngày là thuyết thiểu số trong 倶舎論, lớn dần qua Trung Quốc rồi Nhật | Ba điều kiện môi trường của tình bạn bị tháo khi 定年 | ✓ Không |
| **Nguồn** | 倶舎論 · 十王経 · 往生要集 · 地蔵十王経 · 金光明経 | Adams · Hall 2018 · FIREA 2021 · 内閣府 | ✓ Không giao nhau |
| **Hook** | **ĐÊM** 四十九日, ngồi **một mình** trước 位牌, đĩa ぼたもち | **TRƯA** một ngày thường, quán cơm gần công ty cũ, **giữa đám đông đang nói chuyện công việc** | ✓ Khác hẳn — đêm/tĩnh/một mình vs trưa/ồn/có người. Xem mục Ranh giới cảnh mở bên dưới |
| **Cú lật** | 本地 của 閻魔王 là 地蔵菩薩 | Công ty đã dựng giàn giáo thay bạn suốt 40 năm | ✓ Không |
| **Chỗ tựa** | 中陰法要 là 機縁 cho người ở lại (浄土真宗本願寺派) | FIREA: vòng ngoài giảm 0,67, lõi không đổi | ✓ Khác nguồn, khác cơ chế |
| **Khung** | Hành trình (bảy chặng) | Một vật thể bị tháo dần | ✓ Khác khung |
| **Vật dựng** | 位牌, sông, bảy cửa, vòng 六道 | Giàn giáo thép, toà nhà bê tông | ✓ Không lặp một vật nào |

**Khái niệm trong danh sách "dễ trùng" — tập này KHÔNG chạm cái nào:**
中陰/49 ngày ⛔ · 十王経 nguỵ tác ⛔ · 輪廻/六道 ⛔ · 極楽/阿弥陀経 ⛔ · 神仏習合 ⛔ ·
「無宗教」なのに初詣 ⛔ · **Thính giác còn tới cuối** ⛔ (⚠ chi tiết cảm động đang để dành —
tập này **không được mượn**) · AWARE study ⛔ · 99,9% hoả táng ⛔.

### ⚠ Ranh giới CẢNH MỞ giữa năm tập (người điều phối chốt giữa Khâu 0)

Bốn tập khác **đều mở vào đêm hoặc sáng sớm, một mình, trong nhà**:

| Tập | Cảnh mở | Giờ |
|---|---|---|
| 01 `tamashii-no-tabi` (đã phát) | Ngồi tĩnh một mình trước 位牌 | ĐÊM |
| 02 `hanashikakeru` | Một mình trước 仏壇 | SÁNG SỚM |
| 04 `toshi-to-fuan` | Tỉnh giấc trên giường | 3 GIỜ SÁNG |
| 05 `hitori-no-naka` | Một mình sau khi con cháu về | 11 GIỜ ĐÊM |
| **03 `ashiba` (tập này)** | **Quán cơm trưa, giữa đám đông đang làm việc** | **12 GIỜ TRƯA** |

Năm tập giống nhau ở 30 giây đầu là hỏng đúng chỗ quyết định người xem có ở lại hay không.
**`ashiba` là tập ban ngày của kênh** — ⛔ scriptwriter không được đổi về cảnh đêm/sáng sớm,
⛔ không được đổi về cảnh một mình trong nhà, kể cả khi thấy cảnh đó "tình cảm hơn".

Và ràng buộc này **không phải thuế** — nó hợp đúng nội dung: giờ hành chính chính là giờ mà
bốn mươi năm qua 「私」 đang ở giữa những người kia. **Sự lệch giờ là nội dung của tập.**
Cảnh đêm sẽ phí mất điểm mạnh đó, và phí luôn nắng gắt — thứ duy nhất đọc được kết cấu thép.

**Một điểm phải để ý:** tập 01 dùng angle #6 của playbook (**nghi lễ là cho người ở lại** —
中陰法要 phục vụ người sống). Tập này dùng angle #3 (**giàn giáo đã bị tháo**). Hai angle **khác
nhau**, nhưng **cùng một họ**: cả hai đều chuyển trọng tâm ra khỏi chỗ người xem đang tự trách.
Không phải lỗi — đó là **chất giọng của kênh**. Nhưng ⚠ **tập thứ ba không được lại là một
angle "gỡ tội" nữa**, nếu không ba tập đầu sẽ nghe như một khuôn.

**Cập nhật sổ sau khi duyệt:** thêm dòng vào bảng "Hàng đợi sản xuất" của
`EPISODES-PRODUCED-JA.md`, và ghi mục ranh giới kênh 1 về chủ đề 友達 (xem trên).

---

## Checklist trước khi chuyển cho scriptwriter

- [ ] Người vận hành duyệt tiêu đề (cặp 1) — phép thử "chính tôi có bấm không?"
- [ ] Người vận hành quyết **ranh giới kênh 1**: chấp nhận tách theo cơ chế trong/ngoài, hay KILL
- [ ] Người vận hành quyết: mở **trụ E 「人とのつながり」** hay coi đây là tập lẻ ngoài bốn trụ
- [ ] scriptwriter **tra lại 内閣府白書** (năm + số chính xác) trước khi đọc số lên hình
- [ ] scriptwriter grep kịch bản: **0 kết quả** cho 「ましょう」「してみて」「すべき」
- [ ] **Cảnh mở vẫn là BAN NGÀY, giờ hành chính, có người khác trong khung** — ⛔ không đổi về
      đêm/sáng sớm/một mình trong nhà (trùng 4 tập kia). visual-builder: **nắng trưa, bóng cứng**
- [ ] Ba phép thử trước khi nộp: KIẾN THỨC (3 điều ở mục Lời hứa) · CHUYỆN (cảnh có người ở
      入口 và 帰り道) · AN TOÀN (không kê đơn, không SST, không xoáy nỗi đau)
- [ ] Phép thử cuối: xem xong **nhẹ hơn** hay nặng hơn?
