# toshi-to-fuan — packaging

> ## ⚠ CARSTENSEN — ranh giới giữa tập 04 và 06 (làm rõ 2026-09-23)
>
> Tập này **ĐƯỢC PHÉP** dùng Carstensen 1999 (SST), nhưng **chỉ ở phạm vi**:
> *thời gian còn lại được cảm nhận là có hạn → thứ tự ưu tiên đảo từ "thu thập" sang
> "ý nghĩa hiện tại"*. Nêu **đúng dạng lý thuyết** (「説明するために出された、理論です」),
> không nêu như phép đo.
>
> ⛔ **KHÔNG triển khai sang chuyện mạng lưới bạn bè co lại** — đó là sân của tập 06
> `ashiba`, vốn phải tách khỏi tập kênh 1 đã dựng 「付き合いが減るのは年のせいか」.
> Kịch bản hiện dùng Carstensen **đúng 1 lần** (C58) rồi chuyển ngay sang chất lượng.
>
> Lệnh cấm tuyệt đối SST/Carstensen ở `ashiba/packaging.md` **chỉ áp cho tập 06**, không phải
> cấm toàn kênh.

**Khâu 0.** Chốt tiêu đề + bìa trước khi viết kịch bản. Chờ người vận hành duyệt.

```
ANGLE: その話は、実際にはどう起きているのか。誰がそう言っているのか。
KHUÔN: {対象}はなぜ{現象}のか｜{典拠}
TRỤ: A からだ (khoa học cái chết) — chạm cả C ở chỗ tựa, nhưng trọng tâm là số liệu tâm lý học
ĐỘ DÀI: **12–14 phút (3.500–4.100 ký tự)** — loại "trả lời một câu hỏi hẹp".
  ⚠ Đây là tập đầu tiên của kênh đi ĐÚNG khung 12–14 phút. Tập 01 dài 25:57 và chưa có số
  retention. Tập này cố ý ngắn để có hai điểm đo khác nhau khi số về.
GIỌNG: keita, speed 0.95

KIỂM RANH GIỚI KÊNH 1:
  Câu trả lời cần dựng cảnh? → CÓ. Đường cong lo âu theo tuổi dựng thành ĐỊA HÌNH 3D
    đi qua được: camera bay dọc thung lũng, độ cao = mức lo âu. Cộng cảnh phòng ngủ
    3 giờ sáng. Không phải sơ đồ mũi tên. ✓
  Kênh 1 đã nhận chủ đề này chưa? → channel.json có 「人はなぜ死を怖がるのか」 (trụ 死とその後)
    và 「なぜ人は自分の死を想像できないのか」.
  → ⚠ GẦN, nhưng câu hỏi gốc KHÁC HẲN:
     · kênh 1 hỏi **vì sao người ta sợ** (cơ chế tâm lý, tĩnh, một mức)
     · tập này hỏi **nỗi sợ đó THAY ĐỔI THẾ NÀO THEO TUỔI** (đường cong, động, có đỉnh và dốc)
     Kênh 1 không có chủ đề nào về đường cong theo tuổi. Cái kênh 1 làm được bằng 図解 là
     liệt kê nguyên nhân; cái chỉ kênh này làm được là **biến đồ thị thành một nơi chốn
     người xem đi qua**. ✓ (Nếu kênh 1 dựng 「人はなぜ死を怖がるのか」 trước thì tập này
     vẫn chạy được — chỉ cần tránh liệt kê nguyên nhân sợ.)

TYPO/NGUỒN: Russac et al. 2007 (Death Studies 31-6) · Sinoff 2017 (Frontiers in Medicine) ·
  Carstensen, Isaacowitz & Charles 1999 (American Psychologist) — bảng đầy đủ ở mục 典拠

BẰNG CHỨNG CẦU: chưa có số của kênh này (tập 01 chưa đăng). Bằng chứng gián tiếp: kênh 1
  xếp 「人はなぜ死を怖がるのか」 vào trụ 死とその後 — cùng người vận hành đã đánh giá hình dạng
  câu hỏi này có cầu. Chủ đề "eo hẹp tuổi 50 + đường cong đi xuống" là lát cắt mới của
  cùng nhu cầu đó, nhắm đúng tệp lõi 50–60 của kênh.
```

---

## 10 tiêu đề nháp

Đếm bằng script (`len()` trên chuỗi Unicode = số ký tự toàn角). Không cái nào chứa 死.

| # | Tiêu đề | Ký tự | Vế trước ｜ | **Ai gõ câu này** | /8 | Câu hỏi nó mở ra | Có 死? |
|---|---|---|---|---|---|---|---|
| **A** | 夜中に目が覚めるのはなぜか｜不安の山は五十代にある | 25 | 13 ✓ | Đàn ông 54 tuổi, tỉnh giấc 3h sáng lần thứ ba trong tuần, nằm nghĩ tới lúc cuối của mình, 3h20 cầm điện thoại gõ 「夜中 目が覚める 不安」 | **8** | "Cái núi ấy là gì? Tôi đang ở đâu trên nó?" | KHÔNG |
| **B** | 五十代の不安はいつ終わるのか｜七十代の人が答えている | 26 | 14 ✓ | Phụ nữ 52, vừa xong 一周忌 của mẹ, từ đó tháng nào cũng có vài đêm không ngủ được; gõ tìm xem "cái này có hết không" | **8** | "Người đã đi qua rồi nói gì?" | KHÔNG |
| **C** | 親のほうが落ち着いているのはなぜか｜四十四組を調べた研究 | 28 | 17 ✓ | Người 55 đưa bố 83 đi khám, trên xe về nhà bố nói chuyện hậu sự rất bình thản còn mình thì nghẹn; tối đó gõ tìm | **8** | "Sao bố bình tĩnh hơn tôi?" | KHÔNG |
| **D** | 年をとると怖さは減るのか｜十八歳から八十七歳を調べた | 26 | 12 ✓ | Người 58 vừa dự tang bạn cùng lớp, về nhà tự hỏi mình sẽ sợ thế này mãi à | 7 | "Có số liệu thật à?" | KHÔNG |
| **E** | 五十代がいちばん眠れないのはなぜか｜不安の曲線が示す山 | 27 | 17 ✓ | Người 51 mất ngủ dai dẳng, đã tra 更年期 và 不眠 rồi, giờ tra tới phần "vì sao nghĩ tới chuyện đó" | 7 | "Có phải tuổi tôi đúng là đỉnh?" | KHÔNG |
| **F** | 怖いのは終わりか、それとも痛みか｜高齢者が答えたこと | 26 | 16 ✓ | Người 60 vừa nghe chẩn đoán của vợ, không biết mình đang sợ cái gì cho đúng | 7 | "Hoá ra hai thứ khác nhau?" | KHÔNG |
| **G** | 六十代から気が楽になるのはなぜか｜残り時間が変える目 | 26 | 16 ✓ | Người 57 sắp nghỉ hưu, nghe đồng nghiệp hơn tuổi nói "qua 60 nhẹ hẳn" và muốn kiểm chứng | 6 | "Nhẹ đi thật à, hay là buông xuôi?" | KHÔNG |
| **H** | この不安は下り坂に入るのか｜十八歳から八十七歳の調査 | 26 | 13 ✓ | — hoàn cảnh mơ hồ, 「この不安」 không nói rõ là nỗi lo gì | 5 | yếu | KHÔNG |
| **I** | 七十代はなぜ穏やかになれるのか｜残り時間と心の向き | 25 | 15 ✓ | — người 70 thì không đi tìm; người 50 không gõ câu về tuổi 70 | 4 | sai đối tượng | KHÔNG |
| **J** | いちばん怖いのは何歳のときか｜不安の曲線が示す山 | 24 | 14 ✓ | — câu hỏi đố vui, không có hoàn cảnh thúc | 4 | tò mò suông | KHÔNG |

**Đếm hoàn cảnh có thật:** A, B, C, D, E, F, G = **7/10** bắt đầu từ một hoàn cảnh cụ thể (yêu cầu ≥6 ✓).

**H, I, J trượt câu thử 1** (không kể ra được ai gõ) → loại theo luật 2b, dù ký tự và 典拠 đều đạt.

**Đã cân nhắc và bỏ trước khi vào bảng:**
- 「死ぬのが怖くなくなるのはいつか」 — có 死, loại thẳng (4a).
- 「死の恐怖はいつ消えるのか」 — có 死, và hứa "biến mất" là hứa sai. Loại.
- 「もう怖がらなくていい」 — vi phạm 4d: nghe như bảo người ta đừng cảm thấy điều họ đang cảm thấy.
- 「終わりを受け入れるには」 — thành lời khuyên (kê đơn), sai luật 4b/4c.

---

## 5 cặp tiêu đề + concept bìa

Năm công thức khác nhau. Chữ bìa ≤8 ký tự toàn角, dạng câu hỏi, **không có 死**.

| # | Tiêu đề | Công thức | Concept bìa |
|---|---|---|---|
| **1** | 夜中に目が覚めるのはなぜか｜不安の山は五十代にある | なぜ (hoàn cảnh thân thuộc) | **Chủ thể:** trần nhà tối nhìn từ giường, một vệt sáng đèn đường hắt qua khe rèm cắt ngang; đồng hồ điện tử đỏ mờ góc dưới chỉ 3:00 · **Chữ:** 「なぜ三時？」(5) · **Câu hỏi người xem tự đặt:** "đúng cái giờ đó — sao lại biết?" · **Cảm xúc:** nhận ra mình, không sợ |
| **2** | 五十代の不安はいつ終わるのか｜七十代の人が答えている | 典拠 lạ (người đã qua trả lời) | **Chủ thể:** con đường núi sương, một đỉnh dốc gần và sau nó là vùng đất thoải sáng hơn · **Chữ:** 「いつまで？」(5) · **Câu hỏi:** "có chỗ kết thúc thật à?" · **Cảm xúc:** nhẹ nhõm chớm |
| **3** | 親のほうが落ち着いているのはなぜか｜四十四組を調べた研究 | so sánh (hai thế hệ) | **Chủ thể:** hai chén trà trên bàn gỗ, một chén còn bốc hơi một chén đã nguội, ánh chiều · **Chữ:** 「親と子は違う？」(7) · **Câu hỏi:** "cha mẹ tôi đang nghĩ khác tôi?" · **Cảm xúc:** ấm, tò mò |
| **4** | 年をとると怖さは減るのか｜十八歳から八十七歳を調べた | thứ ai cũng tưởng ngược lại | **Chủ thể:** đường cong địa hình 3D nhìn nghiêng dưới sương, một đỉnh rõ rồi dốc xuống thoải, không có trục không có số · **Chữ:** 「減るのか？」(5) · **Câu hỏi:** "càng gần mà càng bớt?" · **Cảm xúc:** ngạc nhiên |
| **5** | 怖いのは終わりか、それとも痛みか｜高齢者が答えたこと | thứ nghiên cứu nói khác điều ta tưởng | **Chủ thể:** bàn tay già đặt trên chăn bệnh viện, nắng chiều, không thấy mặt · **Chữ:** 「どっちが怖い？」(7) · **Câu hỏi:** "tôi đang sợ nhầm thứ?" · **Cảm xúc:** trầm, nghiêm |

---

## Chọn · Lời hứa · Brief

### Chọn

**Cặp số: 1** — 「夜中に目が覚めるのはなぜか｜不安の山は五十代にある」 (**25 ký tự · KHÔNG có 死**)

**Lý do.**

1. **Giải được cái khó riêng của tập này.** Người **đang** sợ mới đi tìm, nhưng nội dung nói về
   người **hết** sợ. Nếu để tựa nói về tuổi già (cặp 2, và nhất là tiêu đề I) thì người đang cần
   nhất sẽ không bấm. Cặp 1 bắt đầu **đúng chỗ người xem đang đứng** — cái đêm 3 giờ sáng ấy —
   rồi vế sau `｜` mới đặt nó lên bản đồ: 「不安の山は五十代にある」. Người xem đọc xong vế sau
   biết ngay hai điều: *đây là một cái núi* (tức là có đỉnh) và *tôi đang ở trên nó*. Lời hứa
   "có đường đi xuống" nằm ngay trong chữ 山, không cần nói ra.
2. **Qua cả ba câu thử của luật 2b.**
   - *Ai gõ* — kể ra được, xem cột trên: người 54, tỉnh giấc, 3h20 cầm điện thoại.
   - *Từ biết trước khi xem* — 夜中, 目が覚める, 不安, 五十代. Không một chữ nào là thuật ngữ.
     ⛔ Đã cố ý **không** để 老年的超越, Socioemotional Selectivity, 死生観, 曲線 vào vế trước.
   - *Hoàn cảnh thúc* — mất ngủ là việc **đang xảy ra đêm nay**, lặp lại, và người ta tìm ngay
     lúc đang thức. Đây là hoàn cảnh thúc mạnh hơn cả 法要 của tập 01, vì nó tái diễn.
3. **Nhắm đúng tệp lõi.** Kênh làm cho người 50–60+. Cặp 1 là tiêu đề duy nhất trong năm cặp
   **gọi thẳng số tuổi của chính người xem** mà không hề trách họ.
4. **Không là lời vạch trần (4d).** Không nói "anh đang sợ vô lý", không nói "anh tin nhầm".
   Nó nói: *cái anh đang trải qua có hình dạng, và hình dạng đó đã được đo*. Đúng dạng cú lật
   của kênh: **"hoá ra nó CÓ NGHĨA như thế."**

**Phép thử giết sớm — "chính tôi có bấm không?"** → Có. Người nằm thức lúc 3 giờ sáng mà thấy
đúng câu đó hiện ra thì bấm ngay, vì nó tả đúng chỗ mình đang nằm. ✓ *(Chờ người vận hành duyệt.)*

**Phương án B (đổi sau 24h nếu CTR thấp):** cặp **3** — 「親のほうが落ち着いているのはなぜか｜四十四組を調べた研究」

Góc khác hẳn: từ **nỗi lo của chính mình** chuyển sang **quan sát về cha mẹ mình**. Nếu cặp 1
CTR thấp thì giả thuyết là người xem không muốn tự nhận mình mất ngủ vì chuyện đó (chủ đề riêng
tư, ngại bấm khi có người nhà ngồi cạnh TV). Cặp 3 cho họ một lý do "an toàn" để bấm — họ đang
tìm hiểu về **bố mẹ**, không phải về mình — rồi video vẫn trả lời đúng câu hỏi của họ. Nội dung
không phải sửa một chữ; chỉ đổi cửa vào.

⚠ Đừng đổi sang cặp 4 — nó là tiêu đề hay nhất về mặt "gây ngạc nhiên" nhưng yếu nhất về hoàn
cảnh thúc, và ngạc nhiên không giữ được người xem 60+.

### Lời hứa (video phải thực hiện)

**Người xem bấm vì muốn biết:** cái cảm giác thức giấc lúc 3 giờ sáng này là gì, nó có bình
thường không, và **nó có bao giờ hết không**.

**Video trả lời ở chương:**

| Câu hỏi họ mang vào | Trả ở | Trả bằng gì |
|---|---|---|
| Tôi có bất thường không? | 第2章 | Russac 2007: cái đỉnh tuổi 50 đã được đo trên 304 người. Bạn đang ở trên một đường cong, không phải một mình. |
| Nó có hết không? | 第2章 cuối + 第3章 | Sau đỉnh là dốc xuống rõ. Sinoff 2017: người cao tuổi thật sự đạt điểm thấp hơn **chính con cái mình**. |
| Hết thì thay bằng cái gì? | 第3章 | Carstensen: không phải cam chịu — là **tái cân chỉnh** mục tiêu. |
| Vậy tôi nên làm gì tối nay? | 第4章 | ⛔ KHÔNG kê đơn. Trả bằng chỗ tựa, xem dưới. |

⚠ **Lời hứa KHÔNG bao gồm:** hứa nỗi sợ sẽ biến mất, hứa một mốc tuổi cụ thể, hứa cách làm cho
hết lo. Tựa hứa **một hình dạng có đường xuống**, và video giao đúng chừng đó.

### Brief — 4 chặng

**入口 (≈700 ký tự · 第1章).**
Một cảnh, không khái niệm. 私 tỉnh giấc lúc 3 giờ sáng. Trần nhà. Vệt sáng đèn đường qua khe
rèm. Nghe tiếng tủ lạnh. Không có chuyện gì xảy ra cả — ban ngày vẫn ổn, vẫn đi làm, vẫn cười.
Chỉ là cứ tới giờ này thì cái ý nghĩ ấy tới. Và điều lạ nhất: 私 kể rằng hôm trước, bố 私 — hơn
80 tuổi — nói về hậu sự của chính ông bằng giọng bình thản như bàn chuyện sửa mái nhà.
Câu hỏi nảy ra, rất đời: **「年をとるほど、近づくはずなのに。どうして父のほうが落ち着いているんでしょう。」**
⛔ Không mở bằng định nghĩa. ⛔ Không nói 私 đau khổ — chỉ nói 私 thức.

**旅のはじまり (≈1.200 ký tự · 第2章). — ĐƯỜNG CONG**
Đi tìm xem có ai đo cái này chưa. Russac et al. 2007, *Death Studies*: 304 người từ 18 đến 87
tuổi. Kết quả không phải đường thẳng đi lên như ai cũng tưởng — nó **hai đỉnh**. Cao ở tuổi 20.
Giảm. Rồi ở **phụ nữ**, vọt lại lần nữa quanh tuổi 50 — cái đỉnh thứ hai này **không thấy ở nam
giới** trong nghiên cứu đó. Rồi từ đó trở đi, giảm rõ và giảm đều cho tới tuổi già.
Chỗ chuyển giọng (4d): 私 nhận ra mình không đang hỏng cái gì cả — mình đang đứng trên một chỗ
đã có tên. 「私は、坂を下っている途中だと思っていました。そうではなかったんです。山の上にいたんです。」
⚠ Bắt buộc nói rõ **đỉnh 50 là kết quả ở nhóm nữ**, đừng phóng thành "ai cũng vậy". Xem 典拠.

**深いところ (≈1.400 ký tự · 第3章). — HAI PHÁT HIỆN**
*Phát hiện một — con số so sánh trong cùng một nhà.* Sinoff 2017, *Frontiers in Medicine*, Israel:
44 cặp người cao tuổi và con đã trưởng thành của họ. Người cao tuổi: **4,0/15**. Con của chính
họ, tự chấm cho mình: **6,9/15**. Và khi con đoán hộ cha mẹ: **8,1/15** — cao hơn cả điểm thật
của cha mẹ gấp đôi. Tức là **người lo nhiều nhất về nỗi sợ của cha mẹ, là con cái**, không phải
cha mẹ. Đây là cảnh trên xe ở 第1章 được giải thích.
*Phát hiện hai — hoá ra sợ hai thứ khác nhau.* Cũng trong nghiên cứu đó: người cao tuổi nói điều
họ sợ là **quá trình ra đi có đau đớn không**, chứ không phải chuyện kết thúc. Con cái thì gán
cho cha mẹ nỗi sợ của chính mình. ⚠ Đây là chỗ nhạy nhất tập — xem mục An toàn YMYL.
*Vì sao đường cong đi xuống.* Carstensen, Isaacowitz & Charles 1999, *American Psychologist*:
khi thời gian còn lại được cảm nhận là **mở ngỏ**, người ta ưu tiên **thu thập thông tin** — học,
mở rộng, gặp người mới. Khi thời gian được cảm nhận là **có hạn**, thứ tự đảo lại: ưu tiên
**ý nghĩa cảm xúc trong hiện tại** — ít người hơn, nhưng đúng người.
Cú lật, đúng dạng "hoá ra nó CÓ NGHĨA như thế":
**không phải người già thôi quan tâm — là họ đổi thứ để quan tâm.** 「あきらめではありません。
向きを変えただけなんです。」
*Giới hạn (bắt buộc, không được bỏ).* Ba câu: đây là **xu hướng thống kê**, không phải quy luật
cho từng người — có người 80 vẫn lo, có người 50 đã yên, và cả hai đều bình thường. Sinoff chỉ
44 cặp, ở một nước. Russac đo bằng thang tự chấm, không đo được cái người ta không nói ra.

**帰り道 (≈500 ký tự · 第4章). — CHỖ TỰA**
Về đúng cái phòng ở 第1章. Vẫn 3 giờ sáng, vẫn vệt sáng ấy. Không có gì trong phòng thay đổi.
Thứ thay đổi là 私 giờ biết mình đang ở chỗ nào trên đường.
Chỗ tựa CÓ THẬT, ba điều — không điều nào là lời hứa siêu hình:
1. **Chỗ bạn đang đứng đã được đo, và phía trước nó là dốc xuống.** Không phải lời an ủi —
   là con số trong hai nghiên cứu có tên.
2. **Cái thay thế nó không phải sự cam chịu.** Người đi trước không im lặng vì đã bỏ cuộc;
   họ đổi sang thứ gần hơn và ấm hơn.
3. **Bố ngồi trên xe nói chuyện hậu sự rất bình thản — ông không giấu gì cả.** Ông thật sự đã
   qua chỗ đó rồi. Người đã đi qua đang ngồi ngay cạnh mình, và hỏi được.
Câu mang về (dịch tinh thần từ playbook — *"Nỗi sợ nặng nhất đã ở phía sau bạn rồi. Và cái thay
thế nó không phải sự cam chịu."*):
> 「いちばん重い夜は、もう後ろにあるのかもしれません。
> そして、そのあとに来るものは、あきらめではないんです。」
⚠ 「かもしれません」 là cố ý — xu hướng thống kê không cho phép nói chắc với một người.
Đóng bằng một câu 4c: 「ご不安が続くときは、かかりつけの先生にご相談ください。」

**Khung chính:** **đường cong / địa hình** (một khung duy nhất, không trộn với khung hành trình
của tập 01).

**Cân bằng nhắm (4f):** 入口 700 (kể) · 第2章 1.200 (giải thích, có cảnh) · 第3章 1.400 (giải
thích sâu) · 帰り道 500 (chỗ tựa) = **≈3.800 ký tự ≈ 13 phút**. Kể ≈35% · giải thích ≈52% ·
chỗ tựa ≈13%.

---

## 典拠

| Nguồn | Năm | Dùng ở | Nói chính xác điều gì | ⚠ Ranh giới |
|---|---|---|---|---|
| **Russac, R. J., Gatliff, C., Reece, M., & Spottswood, D. — "Death Anxiety across the Adult Years: An Examination of Age and Gender Effects", *Death Studies* 31(6)** | 2007 | 第2章 | Nghiên cứu 1: 304 người 18–87 tuổi, thang Collett-Lester Fear of Death. Lo âu đỉnh ở tuổi 20 (cả nam và nữ), giảm rõ rệt sau đó. **Đỉnh thứ hai quanh tuổi 50 chỉ thấy ở nữ, không thấy ở nam.** Nghiên cứu 2: 113 phụ nữ 18–85, thang Templer — cùng phân bố hai đỉnh, cùng xu hướng giảm theo tuổi. | ⛔⛔ **Bản ghi trong brief gốc nói "vọt lại quanh tuổi 50" mà không nói giới tính — SAI.** Đã verify: đỉnh 50 là **kết quả ở nhóm nữ**. Kịch bản phải nói rõ. Không được nói "ai đến 50 cũng vọt lên". Với người xem nam: khung đúng là *đỉnh lớn đã ở tuổi 20 và bạn đang trên đoạn dốc xuống rồi*. |
| **Sinoff, G. — "Thanatophobia (Death Anxiety) in the Elderly: The Problem of the Child's Inability to Assess Their Own Parent's Death Anxiety State", *Frontiers in Medicine* 4:11** | 2017 | 第3章 | 44 cặp (người cao tuổi + con trưởng thành), Israel, thang Templer 15 mục. Người cao tuổi **4,0/15**. Con tự chấm cho mình **6,9/15**. Con đoán hộ cha mẹ **8,1/15**. Người cao tuổi nói điều họ sợ là **quá trình ra đi đau đớn**, không phải sự kết thúc. | ⚠ **Brief gốc ghi thiếu**: con số thứ ba (8,1 — con đoán hộ cha mẹ) là chi tiết mạnh nhất và đã bị bỏ sót, phải đưa vào. ⚠ **n = 44 cặp, một nước, bệnh nhân nội trú** — cỡ mẫu nhỏ, bắt buộc nêu ở chương giới hạn. Nói 「ある研究では」, không nói 「科学が証明した」. |
| **Carstensen, L. L., Isaacowitz, D. M., & Charles, S. T. — "Taking Time Seriously: A Theory of Socioemotional Selectivity", *American Psychologist* 54, 165–181** | 1999 | 第3章 | Nhận thức về thời gian còn lại quyết định thứ tự ưu tiên mục tiêu xã hội. Thời gian **mở ngỏ** → ưu tiên mục tiêu **thu thập kiến thức**. Thời gian **có hạn** → ưu tiên mục tiêu **cảm xúc**. Giải thích vì sao người cao tuổi thường có sức khoẻ cảm xúc tốt hơn người trẻ. | ⚠ Là **lý thuyết**, không phải phép đo trực tiếp nỗi sợ chết. Trong kịch bản phải nói rõ đây là **cách giải thích được đề xuất** cho đường cong, không phải bằng chứng nhân quả. 「〜という説明が出されています」. ⛔ Không dùng để nói "vì vậy bạn nên sống cho hiện tại" — đó là kê đơn. |

**Nguyên tắc đưa nguồn (4f):** tả cảnh trước, nêu tên nghiên cứu sau, rồi giải thích cho tới nơi.
Mọi con số hiện trên màn hình kèm **tên + năm**. ⛔ Checklist playbook: không con số nào ở 第1章
hoặc 第4章.

---

## Cảnh dựng WebGL

Đây là chỗ tập này tách khỏi kênh 1. Kênh 図解 2D vẽ được cái đồ thị; **chỉ kênh này biến được
đồ thị thành một nơi chốn người xem đi qua.**

### Cảnh chính — 不安の地形 (đường cong lo âu dựng thành ĐỊA HÌNH 3D)

Ý tưởng gốc: **độ cao của địa hình = mức lo âu; trục đi tới = tuổi.** Camera bay dọc theo thung
lũng, và người xem **nhìn thấy đỉnh tuổi 50 rồi thấy dốc xuống trước mặt**. Không ai phải đọc
trục tung.

- **Địa hình.** Mesh dải hẹp, chiều dài = tuổi 18 → 87. Heightmap sinh từ **hình dạng hai đỉnh
  của Russac 2007** (đỉnh cao ở tuổi 20, trũng ở 30–40, đỉnh thứ hai thấp hơn ở ~50, rồi dốc
  xuống dài và thoải tới 87). ⛔ Không bịa số: độ cao là **hình dạng định tính đúng theo bài
  báo**, và trên màn hình ghi rõ đây là dựng lại hình dạng, không phải đồ thị đo.
  Hai lớp địa hình chồng nhẹ khác màu cho **nam / nữ** ở đoạn quanh tuổi 50 — đây là cách dựng
  hình duy nhất thể hiện được ràng buộc "đỉnh 50 chỉ ở nữ" mà không phải nói dài.
- **Camera.** Bay chậm, thấp, ngược sáng — từ chân đỉnh 50 leo lên, qua đỉnh, rồi **mở ra** khi
  thấy đoạn dốc xuống dài trong nắng. Chuyển động là **hàm thuần của `t`**, ease chậm, không
  cắt nhanh hơn 4 giây (mục 8).
- **Shader.** Sương thấp bám thung lũng (height fog theo độ cao địa hình — nơi cao thì sương
  dày hơn, đúng nghĩa ẩn dụ). Ánh sáng đổi theo hành trình: xanh lam lạnh giờ đêm ở đỉnh →
  vàng ấm thấp góc khi xuống dốc. Không neon, không lưới phát sáng kiểu sci-fi.
- **Mốc tuổi.** Cọc mốc thưa dọc đường (20 · 50 · 70), nhãn canvas texture bằng **BIZ UDPGothic**,
  `await document.fonts.load()` trước khi vẽ nhãn đầu tiên (luật 7 của CLAUDE.md).

### Cảnh mở và cảnh đóng — 午前三時の部屋

Cảnh thật, dựng đủ vật lý, dùng ở 第1章 và lặp lại ở 第4章 (cùng góc, ánh sáng đã dịch).

- Phòng ngủ Nhật tối. Nhìn từ vị trí nằm — **trần nhà chiếm phần lớn khung**.
- **Vệt sáng đèn đường qua khe rèm**: một dải sáng nghiêng cắt ngang trần, mép dải mềm dần
  (light shaft có tán xạ nhẹ trong bụi khí). Đây là chi tiết đắt nhất của tập — nó phải đúng
  như thật, không phải billboard phẳng.
- Rèm lay rất chậm. Đồng hồ điện tử đỏ mờ ở rìa khung (⚠ hiển thị giờ **không** được đếm bằng
  `Date.now` — là hàm của `t`).
- **Lần lặp ở 第4章:** cùng khung hình, nhưng vệt sáng đã dịch vị trí một chút và ám ấm hơn —
  dấu hiệu trời sắp sáng. Không nói ra, để hình nói.

### Cảnh phụ — 車の中 (第3章, lúc nêu Sinoff 2017)

Nội thất xe lúc chiều, nhìn nghiêng từ ghế lái. Hai người, **không thấy rõ mặt** (luật: cảnh là
điển hình, không bịa người có thật). Nắng chiều quét qua kính bên. Dùng đúng một lần, ngắn,
lúc kể con số 4,0 / 6,9 / 8,1.

⛔ **Không dựng:** biểu đồ cột, bảng số, mũi tên chỉ dẫn — đó là ngôn ngữ của kênh 1.
⛔ Không hình ảnh gợi sợ hãi (mục 7): không giường bệnh có người, không bóng tối nhân hình,
không đồng hồ cát.

---

## An toàn YMYL

⚠ **Đây là tập chạm chủ đề nhạy cảm nhất của cả kênh tới giờ.** Đọc mục này trước khi viết
một chữ nào của kịch bản.

### Tuyệt đối tránh

| ⛔ Không làm | Vì sao |
|---|---|
| Bất kỳ câu nào đọc ra được thành **khuyến khích tự hại** | Luật cứng. Không có ngoại lệ, không có cách diễn đạt nào được miễn. |
| Nói **「死は怖くない」** hoặc bất kỳ biến thể nào hạ thấp giá trị của sống | Tập này nói nỗi **sợ** giảm theo tuổi — **không** nói sự sống bớt quý. Hai điều khác hẳn nhau. |
| Mô tả việc người cao tuổi bình thản như một **trạng thái nên đạt tới** | Thành ra kê đơn, và với người đang lo thì thành lời trách. |
| Khuyên **cách làm cho hết lo** (thở, thiền, "sống cho hiện tại") | 4c: không kê đơn. Carstensen mô tả điều **xảy ra**, không phải điều nên làm. |
| Nói "nghiên cứu đã chứng minh" | Cỡ mẫu nhỏ (Sinoff n=44), thang tự chấm. 「ある研究では」. |
| Suy ra từ đường cong rằng **một người cụ thể** sẽ bớt sợ | Xu hướng thống kê ≠ quy luật cá nhân. Bắt buộc nêu, ở 第3章. |
| Xoáy vào nỗi đau, tả chi tiết đêm mất ngủ kéo dài | 4d: công nhận một câu rồi đi tiếp. |
| Mô tả **cảm giác lúc ra đi** | Không thuộc tập này và không có nguồn. |

### Bắt buộc nói rõ

1. **Đỉnh tuổi 50 trong Russac 2007 là kết quả ở nhóm nữ.** Nói thẳng. Đây vừa là luật nguồn,
   vừa là chỗ tựa cho người xem nam: *đỉnh lớn của anh đã ở tuổi 20, anh đang trên dốc xuống.*
2. **Người cao tuổi trong Sinoff 2017 sợ quá trình ra đi có đau không — không phải sự kết thúc.**
   ⚠ Chỗ này nhạy: phải trình bày như **một phát hiện về nỗi sợ được phân biệt cho đúng**, và
   khép lại ngay bằng sự thật y tế trung lập: chuyện giảm đau cuối đời là việc **có người phụ
   trách, có thể hỏi và nói trước được**. ⛔ Không nêu thuốc, không nêu ngưỡng, không nêu dịch vụ,
   không nhắc 終活. Chỉ nói: điều này **hỏi được**, và hỏi sớm thì dễ hơn.
3. **Chương giới hạn không được bỏ** (bẫy số 3 của playbook). Ba câu ở cuối 第3章.
4. **Câu đóng 4c:** 「ご不安が続くときは、かかりつけの先生にご相談ください。」 — đặt ở cuối cùng,
   sau câu mang về, giọng nhẹ, một câu, không lặp lại.

### Phép thử cuối (playbook)

> **Xem xong người ta thấy nhẹ hơn hay nặng hơn?**

Tập này chỉ đạt khi người 54 tuổi xem xong lúc 3 giờ sáng **ngủ lại được**. Nếu bản nháp nào
làm người ta nằm nghĩ thêm — bỏ đoạn đó, dù số liệu hay tới đâu.

**Khung chốt của cả tập:** không phải *"chết không đáng sợ"*. Là *"nỗi sợ nặng nhất của bạn có
thể đã ở phía sau, và cái thay thế nó không phải sự cam chịu."*

---

## Chống trùng tập 01

Đối chiếu `projects/EPISODES-PRODUCED-JA.md`.

| Hạng mục | Tập 01 `tamashii-no-tabi` | Tập này | Trùng? |
|---|---|---|---|
| Trụ | B 仏教の世界 | **A からだ** (tâm lý học) | Không — trụ khác |
| Câu hỏi gốc | Linh hồn đi đâu trong 49 ngày | Nỗi sợ thay đổi thế nào theo tuổi | Không |
| Nguồn | Kinh điển Phật giáo (倶舎論, 十王経, 往生要集, 地蔵十王経) | Nghiên cứu tâm lý học có bình duyệt (Russac, Sinoff, Carstensen) | **Không một nguồn nào chung** |
| Cú lật | 本地 của 閻魔王 là 地蔵菩薩 | Đường cong đi xuống, và cái thay thế không phải cam chịu | Không |
| Hook | Đêm 四十九日 trước 位牌 | Phòng ngủ 3 giờ sáng, vệt sáng trên trần | Không |
| Chỗ tựa | Nghi lễ 49 ngày giữ nhịp cho người ở lại | Chỗ bạn đứng đã được đo, phía trước là dốc xuống | Không |
| Khung | Hành trình | **Đường cong / địa hình** | Không |
| Cảnh dựng | Bảy cửa, sông, vòng 六道 | Địa hình lo âu, phòng ngủ, nội thất xe | Không |

**Khái niệm đã tiêu ở tập 01 — tập này KHÔNG được chạm lại:** 中陰・49 ngày・antarābhava・
有餘師・bảy chặng・mười vua・十王経 nguỵ tác・六文銭・三途の川・奪衣婆・死出の山.
⛔ Tập này **không nhắc một chữ nào** trong danh sách trên. Không có lý do gì phải nhắc — đây là
tập khoa học, không phải tập Phật giáo. Nếu bản nháp nào lôi 四十九日 vào cho "quen thuộc" thì
cắt ngay: nó vừa lặp tập 01 vừa kéo tập này về trụ B.

**Khái niệm trong danh sách "chưa dùng" mà tập này sẽ tiêu — cập nhật sổ sau khi render:**
- **Russac 2007 / đường cong lo âu theo tuổi** — mới, chưa có trong sổ. Thêm dòng mới.
- **Sinoff 2017 / khoảng cách cha mẹ–con cái** — mới. Thêm dòng mới.
- **Carstensen / Socioemotional Selectivity** — mới. Thêm dòng mới.
- ⚠ **「AWARE study / 臨死体験」 vẫn để nguyên "chưa dùng"** — tập này không chạm.
- ⚠ **「Thính giác còn tới cuối」 vẫn để nguyên "chưa dùng"** — chi tiết cảm động, dành cho tập
  「人は死ぬとき何を感じているのか」. ⛔ Cấm dùng ở tập này dù nó rất hợp chỗ tựa.

**Ranh giới với kênh 1 — nhắc lại cho scriptwriter:** kênh 1 có 「人はなぜ死を怖がるのか」.
⛔ Tập này **không được liệt kê nguyên nhân của nỗi sợ** (đó là nội dung của kênh 1). Tập này
chỉ nói về **hình dạng của nó theo thời gian**.

---

## Ràng buộc bắt buộc cho scriptwriter

1. **Russac 2007: đỉnh tuổi 50 là ở NỮ.** Không được viết thành "ai cũng vọt lên ở tuổi 50".
   Đây là lỗi có sẵn trong brief gốc, đã verify và sửa. Kiểm lại câu này trước khi nộp.
2. **Sinoff 2017: ba con số, không phải hai** — 4,0 (người cao tuổi) · 6,9 (con tự chấm) ·
   8,1 (con đoán hộ cha mẹ). Con số thứ ba là chi tiết mạnh nhất, đừng bỏ.
3. **Sinoff n = 44 cặp, Israel** — nêu cỡ mẫu trong chương giới hạn. Không phóng đại.
4. **Carstensen là lý thuyết giải thích, không phải phép đo.** 「〜という説明が出されています」.
5. **Chương giới hạn bắt buộc**, cuối 第3章, tối thiểu ba câu. Không được cắt vì thiếu chỗ.
6. **Câu đóng 4c** đặt sau câu mang về, đúng một câu.
7. ⛔ **Không một chữ 死 nào trong tiêu đề** (thân bài thì được, và tập này nên dùng dè —
   ưu tiên 「終わり」「いつか来る日」「最期」).
8. ⛔ **Không lặp bất kỳ khái niệm nào của tập 01** (danh sách ở mục Chống trùng).
9. Cú lật phải là **"hoá ra nó CÓ NGHĨA như thế"** — người già đổi thứ để quan tâm, không phải
   thôi quan tâm. ⛔ Không phải "hoá ra anh lo vô ích".
10. Ba phép thử trước khi nộp: **KIẾN THỨC** (xem xong kể lại được 3 điều: đường cong hai đỉnh ·
    cha mẹ bình thản hơn con · thời gian có hạn đổi thứ tự ưu tiên) · **CHUYỆN** (cảnh có người
    ở 第1章 và 第4章, cùng một phòng) · **AN TOÀN** (đọc lại mục An toàn YMYL, từng dòng).
11. **Phép thử cuối:** xem xong nhẹ hơn hay nặng hơn? Nặng hơn thì sửa, dù số liệu hay tới đâu.
