# tanomu — packaging

**Khâu 0.** Chốt tiêu đề + bìa trước khi viết kịch bản. Nguồn ý tưởng:
`playbook-video-essay-chiem-nghiem.md` ý **10** — *Vì sao nhờ vả người khác lại khó đến vậy?* ✓

```
ANGLE: その話は、実際にはどう起きているのか。誰がそう言っているのか。
KHUÔN: {対象}はなぜ{現象}のか｜{典拠}
TRỤ: E 時間と記憶
ĐỘ DÀI: 12–14 phút (3.500–4.100 ký tự)
GIỌNG: keita, speed 0.95

⚠⚠ CẢNH BÁO RỦI RO DỰNG CẢNH — CAO NHẤT TRONG ĐỢT NÀY. Đọc kỹ trước khi duyệt.
Đây là chủ đề THUẦN NỘI TÂM: không có vật thể/nghi lễ/không gian tự nhiên nào gắn sẵn với nó
(khác 仏壇, sông, giàn giáo, ký ức-vật-thể của các tập khác). Đã tìm được một ý tưởng dựng cảnh
khả thi (xem dưới — hai không gian song song), nhưng đây là ý tưởng ẩn dụ THUẦN TUÝ, không neo
vào một vật/nghi lễ có thật như các tập khác. Rủi ro cụ thể:
  - Storyboard-artist / visual-builder có thể trượt về hướng "hai nhân vật đối thoại" thành
    cảnh gần-2D (hai khung hình cạnh nhau) thay vì một cảnh 3D thật có chiều sâu, ánh sáng,
    vật lý — nếu vậy thì tập này thực chất không đạt tiêu chuẩn dựng cảnh thật của kênh.
  - Khuyến nghị: nếu ở khâu storyboard mà ý tưởng "hai không gian ánh sáng" không tạo ra được
    một cảnh có ĐỘ SÂU/VẬT LÝ đủ thuyết phục (không chỉ là hai phông nền phẳng), NGƯỜI VẬN HÀNH
    nên cân nhắc rút tập này khỏi lô, giữ lại cho tới khi có ý tưởng dựng cảnh mạnh hơn, thay vì
    ép render một cảnh yếu.
  → Đánh giá tổng thể: rủi ro **CAO**, đề nghị duyệt kèm điều kiện kiểm tra storyboard kỹ hơn
    bình thường trước khi cho qua khâu 3.

Ý TƯỞNG DỰNG CẢNH WEBGL — ĐÃ CẬP NHẬT SAU KHÂU STORYBOARD (xem `storyboard.md` mục cuối
"ĐÁNH GIÁ HAI KHÔNG GIAN ÁNH SÁNG"):
  ⚠ Ý tưởng gốc ở packaging (hai không gian ánh sáng nối bằng "bức tường/khối chắn mờ ảo")
  ĐÃ ĐƯỢC storyboard-artist ĐÁNH GIÁ và xác nhận: nếu dựng đúng nguyên văn sẽ ra cảnh PHẲNG/
  2D-như (thiếu parallax, thiếu kiến trúc liên tục, "bức tường tưởng tượng" chỉ là khái niệm
  trừu tượng không phải vật liệu thật) — KHÔNG đạt luật mục 0.
  → GIẢI PHÁP ĐÃ CHỌN (bắt buộc cho visual-builder, không phải ý tưởng gốc nữa): thay bằng
  MỘT HÀNH LANG KIẾN TRÚC LIÊN TỤC có sàn gỗ + xà ngang xuyên suốt cả hai "không gian", với
  vách giấy 障子 (shoji — vật liệu bán trong suốt có thật trong kiến trúc Nhật) ở giữa thay
  cho "bức tường mờ ảo". Không gian TƯỞNG TƯỢNG (lam-xám lạnh, thu hẹp) và không gian THỰC TẾ
  (cam ấm, mở) nằm hai phía vách 障子 trong CÙNG một hành lang vật lý — camera dolly-in xuyên
  qua vách trong một long-take, các lớp vật thể ở nhiều độ sâu khác nhau tạo thị sai (parallax)
  thật khi camera di chuyển. Đây là cột bắt buộc, KHÔNG phải trang trí — nếu dựng không ra
  được độ sâu 3D thật (thị sai xác nhận chiều sâu), tập này không đạt tiêu chuẩn chất lượng
  của kênh. Chi tiết đầy đủ + bảng màu + shot cụ thể: `storyboard.md` shot S11–S19.
  → Duyệt CÓ ĐIỀU KIỆN đã qua — storyboard xác nhận giải pháp khả thi, rủi ro hạ từ CAO
  xuống TRUNG BÌNH. Vẫn cần kiểm kỹ bằng contact-sheet ở khâu visual trước khi coi là đạt.

TYPO/NGUỒN:
  · Flynn & Bohns 2008, *Journal of Personality and Social Psychology* 95(1):128-143 —
    "If You Need Help, Just Ask: Underestimating Compliance With Direct Requests for Help" —
    người đi nhờ đánh giá thấp tới **~50%** khả năng người kia đồng ý giúp, trong cả thí nghiệm
    lẫn tình huống thực tế ngoài đời; người đi nhờ chú ý tới CHI PHÍ CÔNG CỤ của việc đồng ý
    (thời gian, công sức) mà không nhận ra CHI PHÍ XÃ HỘI của việc TỪ CHỐI (áy náy, mang tiếng)
    — đây là phần người được nhờ cân nhắc nhiều hơn.
  · Zhao & Epley 2022, *Psychological Science* — "Surprisingly Happy to Have Helped:
    Underestimating Prosociality Creates a Misplaced Barrier to Asking for Help" — người đi
    nhờ còn đánh giá thấp CẢ mức độ vui mà người giúp cảm thấy sau khi giúp, và đánh giá cao
    hơn thực tế mức độ họ làm phiền người kia. Nghiên cứu này giúp người xem hiểu vì sao làm
    việc tốt lại tăng hạnh phúc — nhưng người ta ngại nhờ vì kỳ vọng sai lệch.

BẰNG CHỨNG CẦU: playbook ghi ✓ đã tra nguồn — nội dung khoa học vững. Chưa có số riêng của
kênh cho hình dạng chủ đề này.
```

---

## 10 tiêu đề nháp

Luật 2b: ≥6/10 phải bắt đầu từ một hoàn cảnh có thật. Ở đây 7/10 (A, B, C, E, F, H, I).

| # | Tiêu đề | Ký tự | Ai gõ câu này | Điểm/8 | Câu hỏi nó mở ra |
|---|---|---|---|---|---|
| **A** | 頼みごとの返信を消してしまうのはなぜか｜心理学が測った誤差 | 30 | Người vừa soạn tin nhắn nhờ con chở đi khám rồi xoá đi không gửi, tự hỏi vì sao mình lại làm vậy. | **8** | "Mình đang sợ cái gì thật ra?" |
| **B** | 人に頼むのがこれほど難しいのはなぜか｜測ってわかった誤差 | 29 | Người vừa cố mở lời nhờ ai đó nhưng lại thôi giữa chừng, tra ngay sau đó. | **7** | "Có phải chỉ mình mình thấy khó không?" |
| **C** | 断られるのが怖くて頼めないのはなぜか｜研究が見つけた誤差 | 29 | Người tưởng tượng cảnh bị từ chối trước cả khi mở lời, nên không dám hỏi. | 6 | "Nỗi sợ đó có căn cứ không?" |
| **D** | 頼まれた人はどう感じているのか｜研究が測った驚きの結果 | 27 | Người tò mò về phía bên kia — cảm nhận thật của người được nhờ. | 6 | "Người kia có thực sự phiền không?" |
| **E** | 人を頼るのが苦手なのはなぜか｜半分も見誤っている理由 | 26 | Người tự nhận mình "không giỏi nhờ vả", muốn hiểu vì sao. | 7 | "Nửa cái gì bị nhìn sai?" |
| **F** | 頼みごとを我慢してしまうのはなぜか｜測ってわかった心の誤差 | 30 | Người có việc cần giúp nhưng cố tự làm một mình, mệt mỏi, tra vào một tối muộn. | **8** | "Vì sao mình cứ chọn tự chịu?" |
| **G** | 人に頼むとき、なぜこれほど気が重いのか｜数字が示した誤差 | 29 | Người vừa nghĩ tới việc phải nhờ ai đó và thấy nặng lòng ngay từ trong đầu. | 7 | "Cảm giác nặng đó có đúng thực tế không?" |
| **H** | 助けを求めるのをためらうのはなぜか｜見えていない半分の話 | 27 | Người đang cần giúp đỡ (việc nhà, sức khoẻ, công việc) nhưng cứ chần chừ không mở lời. | 7 | "Nửa nào mình đang không thấy?" |
| **I** | 頼み事をする前に、なぜ何度も迷うのか｜心の中の誤差 | 26 | Người vừa trải qua cảm giác lưỡng lự nhiều lần trước khi (hoặc thay vì) nhờ vả. | 7 | "Sự lưỡng lự đó tới từ đâu?" |
| **J** | なぜ人に頼むことがこれほど難しいのか｜研究が見た誤差 | 26 | — gần nguyên văn playbook, chủ ngữ 「人」 chung chung, không hoàn cảnh cụ thể. | **LOẠI** | — |

**Ghi chú chấm điểm:**
- **J loại** — là câu hỏi lớn của trụ chứ không phải câu người ta gõ, chủ ngữ quá chung chung.
- **A và F** thắng vì có HÀNH ĐỘNG CỤ THỂ vừa xảy ra (xoá tin nhắn / cố nhịn không nhờ) —
  mạnh hơn các phương án chỉ mô tả cảm giác chung (C, D, G).
- Không tựa nào chứa 死 ✓ · không あの世/魂/たましい ✓ · không từ cấm ✓ · không phải lời vạch
  trần ✓.
- Vế trước `｜` của A và F đều tự đứng được khi cắt đuôi.

---

## 5 cặp tiêu đề + concept bìa

| # | Tiêu đề | Ký tự | Công thức | Concept bìa |
|---|---|---|---|---|
| **1** | 頼みごとの返信を消してしまうのはなぜか｜心理学が測った誤差 | 30 | **thứ ai cũng làm mà không ai giải thích** | **Chủ thể:** một điện thoại/màn hình mờ với một tin nhắn đang bị xoá dần (hiệu ứng particle tan), phía sau là không gian tối thu hẹp · **Chữ:** 「消したメッセージ」(8) · **Cảm xúc:** nhận ra mình, áy náy nhẹ |
| **2** | 人に頼むのがこれほど難しいのはなぜか｜測ってわかった誤差 | 29 | **sai số đo được (angle 5 playbook)** | **Chủ thể:** hai không gian ánh sáng khác nhau (tối/sáng) được camera nối liền trong một khung, một bức tường mờ ở giữa · **Chữ:** 「半分、当たってない」(8) · **Cảm xúc:** ngạc nhiên trí tuệ |
| **3** | 頼まれた人はどう感じているのか｜研究が測った驚きの結果 | 27 | **đổi ngôi kể (angle 10 playbook)** | **Chủ thể:** góc nhìn từ phía "người được nhờ" — một bàn tay đưa ra giúp đỡ, ánh sáng ấm, biểu cảm hài lòng gợi ý qua ánh sáng trên khuôn mặt mờ · **Chữ:** 「実は、嬉しい」(6) · **Cảm xúc:** bất ngờ ấm áp |
| **4** | 頼みごとを我慢してしまうのはなぜか｜測ってわかった心の誤差 | 30 | **đây là thiết kế/thiên lệch nhận thức, không phải yếu đuối** | **Chủ thể:** một người (hình bóng) đang mang một vật nặng một mình trong khi một bàn tay khác ở gần đó sẵn sàng đỡ · **Chữ:** 「一人で抱えていた」(8) · **Cảm xúc:** được thấu hiểu |
| **5** | 断られるのが怖くて頼めないのはなぜか｜研究が見つけた誤差 | 29 | **so sánh nỗi sợ tưởng tượng vs thực tế** | **Chủ thể:** một bức tường/khối cản mờ ảo đang tan biến dần để lộ không gian sáng phía sau · **Chữ:** 「怖さは、幻だった」(8) · **Cảm xúc:** giải toả |

---

## Chọn · Lời hứa · Brief

### Chọn: **cặp số 2**

> ## 人に頼むのがこれほど難しいのはなぜか｜測ってわかった誤差
> **29 ký tự toàn角** · bìa: hai không gian ánh sáng (tối/sáng) nối liền trong một khung, bức
> tường mờ ở giữa · chữ bìa 「半分、当たってない」(8 ký tự)

**Ba câu thử — qua cả ba:**

1. **Ai gõ?** Người vừa cố mở lời nhờ ai đó (con cái, hàng xóm, đồng nghiệp cũ) một việc nhỏ
   nhưng lại thôi giữa chừng, và tự hỏi ngay sau đó vì sao chuyện đơn giản vậy lại khó đến thế. ✓
2. **Từ biết-TRƯỚC khi xem?** 「人に頼む」「難しい」— hoàn toàn đời thường. Flynn & Bohns,
   Zhao & Epley nằm sau `｜` hoặc trong thân bài. ✓
3. **Hoàn cảnh thúc?** Có — **việc vừa xảy ra**: cảm giác khó xử vừa trải qua khi định nhờ mà
   không nhờ được. ✓

**Vì sao cặp 2 thắng bốn cặp kia:**

- **Đúng angle playbook nhất (angle 5 — sai số đo được)**, và vế sau `｜` 「測ってわかった誤差」
  hứa đúng thứ nghiên cứu mang lại: một CON SỐ đo được, không phải một lời khuyên đạo đức.
- So với cặp 1 (quá cụ thể vào hành động "xoá tin nhắn" — sinh động nhưng thu hẹp vào đúng một
  tình huống công nghệ) và cặp 3 (đổi ngôi kể mạnh nhưng có thể khiến người xem thấy mình
  không phải nhân vật chính), cặp 2 giữ được diện rộng nhất cho mọi hoàn cảnh nhờ vả.
- **Đi từ góc TRẢI NGHIỆM** khó khăn của người đi nhờ, không phải số liệu dạng biểu đồ so sánh.
- **Bìa tự bán được** — hai không gian sáng/tối nối liền là hình ảnh lạ, đúng chất kênh.

**Phép thử giết sớm — "chính tôi có bấm không?"** → Có. Ai cũng từng ngại nhờ vả một việc nhỏ
và tự hỏi vì sao mình lại ngại đến vậy dù biết người kia sẽ không phiền.

### Phương án B (đổi sau 24h nếu CTR thấp)

**Cặp số 3** — 頼まれた人はどう感じているのか｜研究が測った驚きの結果 (27).
Đổi hẳn góc nhìn sang phía người được nhờ (angle 10 — đổi ngôi kể). Nếu cặp 2 CTR thấp vì
nghe hơi trừu tượng ("誤差" - sai số), cặp 3 cụ thể và bất ngờ hơn: hứa một sự thật về CẢM XÚC
CỦA NGƯỜI KHÁC mà người xem chưa từng nghĩ tới.
⚠ Đổi tựa thì không đổi nội dung — cả hai tựa trỏ về cùng kịch bản.

### Lời hứa (tiêu đề hứa gì thì video phải trả cái đó)

**Người xem bấm vì muốn biết: nỗi ngại nhờ vả của mình có căn cứ thật không.**

| Tiêu đề hứa | Video trả ở đâu |
|---|---|
| 「これほど難しいのはなぜか」— vì sao khó | 第2章: Flynn & Bohns 2008 — người đi nhờ chú ý chi phí công cụ của việc "đồng ý giúp", không nhận ra chi phí xã hội của việc "từ chối" mà người kia phải cân nhắc. |
| 「測ってわかった誤差」— đo được bao nhiêu | 第2章: đánh giá thấp ~50% khả năng người kia đồng ý; 第3章: Zhao & Epley 2022 — đánh giá thấp cả mức độ VUI của người giúp. |
| góc nhìn người kia | 第4章 (đổi ngôi kể): người được nhờ thường thấy VUI hơn, và ít thấy phiền hơn nhiều so với tưởng tượng của người đi nhờ. |

**Ba điều người xem HỌC ĐƯỢC và kể lại được** (luật 4f):
1. Khi ngại nhờ vả, ta đang tính sai — **đánh giá thấp gần một nửa** khả năng người kia đồng ý
   giúp (Flynn & Bohns 2008).
2. Ta cũng đánh giá thấp việc **người giúp mình sẽ cảm thấy vui**, không chỉ "bị làm phiền"
   (Zhao & Epley 2022).
3. Sự ngại ngần khi nhờ vả là **một sai số nhận thức có thể đo được và luôn lệch về cùng một
   phía** — không phải bằng chứng cho thấy mình đang làm phiền ai.

### Brief — 4 chặng

**入口 (≈15%) — mở gì**

Một buổi tối, 「私」 soạn một tin nhắn nhờ ai đó (chở đi khám, giúp một việc nhỏ), gõ xong rồi
đọc lại, rồi xoá đi. Tự làm một mình như mọi khi. Câu hỏi nảy ra: 「なぜ、こんな簡単なことを
頼むのに、これほど気が重いんだろう。」

⛔ KHÔNG mở bằng định nghĩa tâm lý học. KHÔNG mở bằng số liệu. Dùng 「私」 và 「ある夜」.

**旅のはじまり (≈30%) — kể thứ tự nào**

Thử hình dung: nếu vai trò đảo ngược — một người khác nhờ mình đúng việc đó — mình sẽ đồng ý
không? Phần lớn người tự hỏi câu này sẽ trả lời "tất nhiên có". Vậy vì sao lại tin rằng người
kia sẽ khác? Dẫn Flynn & Bohns 2008: đo trên nhiều tình huống thực tế, người đi nhờ đánh giá
thấp khoảng MỘT NỬA khả năng người kia đồng ý. Giải thích cơ chế: người đi nhờ nhìn vào chi
phí của việc GIÚP (thời gian, công sức); người được nhờ lại nhìn vào chi phí của việc TỪ CHỐI
(cảm giác áy náy, sợ bị đánh giá) — hai phía đang tính hai bài toán khác nhau.

**深いところ (≈40%) — chạm điều thật sự quan trọng**

Không chỉ đánh giá thấp khả năng đồng ý — Zhao & Epley 2022 cho thấy người đi nhờ còn đánh giá
thấp CẢ MỨC ĐỘ VUI mà người giúp cảm thấy sau đó, và đánh giá CAO hơn thực tế mức độ mình đang
làm phiền. Tức là ngay cả khi người kia đồng ý, người đi nhờ vẫn tưởng tượng sai về cảm xúc
phía sau việc đồng ý đó.
→ Đổi ngôi kể: hình dung một người vừa được nhờ giúp một việc nhỏ — cảm giác thật của họ
thường là được TIN TƯỞNG, được CẦN ĐẾN, chứ không phải bị phiền.
→ Chỗ tựa: không nhờ vả không phải là đang "để dành" sự yên tĩnh cho người khác — mà có thể là
đang từ chối cho họ một cơ hội để cảm thấy mình có ích.

**帰り道 (≈15%) — về lại cảnh mở đầu**

Quay lại cảnh 入口: 「私」 mở lại tin nhắn đã xoá, gõ lại, lần này gửi đi. Không phải vì hết
ngại — mà vì hiểu: nỗi ngại đó là một sai số, không phải một sự thật về người kia.

⚠ Chương GIỚI HẠN (bắt buộc): cả hai nghiên cứu đo trên mẫu chủ yếu là sinh viên/mẫu phương
Tây, và tình huống nhờ vả trong thí nghiệm thường đơn giản, ngắn hạn (mượn điện thoại, xin chỉ
đường) — chưa chắc khái quát hết cho những việc nhờ vả lớn, dài hạn, hoặc mang tính riêng tư
sâu (ví dụ nhờ chăm sóc dài ngày). Nói rõ "đây là xu hướng đo được trên nhiều tình huống, không
phải quy luật tuyệt đối cho mọi trường hợp".

⚠⚠ Ranh giới GIỌNG: đây đúng là angle "sai số đo được" (angle 5), gần với "gỡ tội" nhưng khác
cơ chế — không phải "bạn không sai/không yếu" mà là "bạn đang TÍNH SAI một con số, và con số
đó luôn lệch về cùng một phía" — giữ đúng khung này, tránh lặp nguyên văn câu kết kiểu "bạn
không..." đã dùng ở 03/05/06.
