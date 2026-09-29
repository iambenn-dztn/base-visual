# Chiến lược kênh — sổ vận hành

Nguồn tư duy: `E:\YOUTUBE\KNOWLEDGE\TONG QUAN.md` (chắt lọc RX Studio Guide) và
`E:\YOUTUBE\KNOWLEDGE\TU-DUY-THUMBNAIL.md`. File này là phần **áp dụng cho kênh Du Mục Vũ Trụ**;
muốn hiểu vì sao thì đọc file gốc. Áp dụng từ 2026-09-20.

Ai đọc: người vận hành (quyết định), `/produce` (điều phối), `scriptwriter` (chọn chủ đề),
`render` (đọc số). Sửa file này khi chiến lược đổi, không sửa trong agent.

---

## 1. Hai con số và ba tầng đòn bẩy

YouTube không chấm chất lượng. Nó thử với nhóm nhỏ, đo, rồi mở rộng hay dừng. Sống chết ở
**CTR × AVD**: CTR hỏng thì sửa tiêu đề + thumbnail; AVD hỏng thì sửa hook + nhịp kịch bản.

| Tầng | Quyết định | Khâu trong pipeline |
|---|---|---|
| ① Ý tưởng | Trần: tối đa bao nhiêu người *có thể* muốn xem | Chọn chủ đề (mục 4) |
| ② Đóng gói | % lấy được từ trần đó | Khâu 0 (mục 5) |
| ③ Giữ chân | Giữ được bao nhiêu người | scriptwriter + storyboard + visual |

Ý tưởng dở thì đóng gói giỏi mấy cũng chạm trần thấp. Vì thế **chọn chủ đề đứng trước mọi thứ**, và
**đóng gói đứng trước kịch bản**. Pipeline cũ làm ngược: viết xong mới nghĩ tiêu đề.

Người vận hành là đạo diễn, giữ ba quyết định máy không làm thay: **chọn ý tưởng · đóng gói ·
duyệt trước khi đăng**. Đây cũng là "human-added-value" mà chính sách AI 7/2025 của YouTube đòi.

---

## 2. ANGLE và KHUÔN — rút từ 12 tập đã lên sóng

**ANGLE** (câu hỏi mọi video đều trả lời, khoá vĩnh viễn):

> *Thứ quen thuộc quanh tôi, trong tôi, thật ra là gì và từ đâu tới?*

12/12 tập đều trả lời câu này: cacbon trong người từ sao, vàng từ va chạm sao neutron, nước có trước
Mặt Trời, thời gian vì sao một chiều, cơ thể gần như trống rỗng. Không đổi ANGLE này kể cả khi đổi
nhóm chủ đề. Đổi ANGLE = mất khán giả vừa gom.

**KHUÔN** tiêu đề (cụm lặp có một chỗ trống, khoá trong 10 video tiếp theo):

> `[Một thứ quen] — [Nghịch lý về nó]`

9/12 tựa đã theo khuôn này (Vàng — Kim Loại Không Thuộc Về Trái Đất; Photon — Thứ Không Bao Giờ
Già; Nước — Có Trước Cả Mặt Trời). Đủ điều kiện "lặp quá nửa". Ba tựa lệch khuôn (Vật Chất Tối; Vì
Sao Thời Gian...; Bạn Gần Như Là Hư Không) là dữ liệu để so: nếu chúng ăn kém hơn thì khuôn đúng.

⚠ **Khuôn này tự sinh, chưa được chứng minh bằng kênh khác.** Tổng quan nói: dùng khuôn đã chứng
minh, đừng tự bịa. Việc cần làm (người vận hành, ≤2 giờ, theo Phần C của tổng quan): tìm 1 kênh chỉ
đường + 3–6 kênh làm thước tiếng Việt cùng ngách, cào tiêu đề · view · ngày, xem khuôn nào lặp quá
nửa và có trung vị ≥ 20.000 view. Nếu có khuôn đã chứng minh, cân nhắc đổi cho 10 tập tiếp; nếu
không, giữ khuôn hiện tại và coi 10 tập tiếp là phép thử.

**Trụ cột** (nhánh chủ đề, để qua cổng "điền 30 lần"):

| Trụ | Đã làm | Chỗ trống điền tiếp (ví dụ) |
|---|---|---|
| A. Thứ trong cơ thể | Cacbon, Vàng, Sắt, Nguyên tố đầu tiên | Canxi, Muối, Nước trong người, Oxy bạn thở |
| B. Hạt và ánh sáng | Neutrino, Photon | Electron, Từ trường, Tia vũ trụ, Màu sắc |
| C. Thời gian | Mũi tên thời gian, Quasar | Một giây, Tuổi Mặt Trời, Ngày dài ra |
| D. Trái Đất | Nước, Đại Oxy hoá | Mặt Trăng, Sắt lõi Trái Đất, Không khí, Biển mặn |
| E. Vũ trụ vô hình | Vật chất tối, Nguyên tử rỗng | Chân không, Bức xạ nền, Trọng lực |

Cổng 30 lần: khuôn điền được ≥30 lần phủ đều 4–5 trụ → qua. Bảng trên cho thấy qua được. Danh sách
chủ đề cụ thể nằm ở `projects/EPISODES-PRODUCED.md` mục "Kho chủ đề".

---

## 3. Hào và bản sắc

Ba thứ là hào thật (không mua được, chỉ dày theo thời gian): **thương hiệu** (nhận ra kênh trước khi
đọc tiêu đề), **hệ thống** (ra đều ~8 video/tháng không phụ thuộc hứng), **khán giả** (xem vì kênh,
không vì chủ đề). Biết dùng AI, đọc được nguồn riêng, làm nhanh: **không phải hào**.

Bản sắc hiện có của kênh (giữ, và là thứ làm nên thương hiệu):

1. Ngôi kể "Tôi", giọng Anh Khôi chậm, có khoảng lặng cố ý.
2. Hình vũ trụ dựng thật bằng WebGL, texture NASA, không billboard.
3. Bảng màu tối + bloom + lens pass cố định qua mọi tập.
4. Cấu trúc 4 chương, chương 4 đọng lại.
5. Mỗi tập có một "cú lật" và một câu chốt ngắn.
6. Phụ đề một dòng ≤42 ký tự, có dấu.
7. Không nhắc tập khác, mỗi tập tự đứng.

Định dạng kênh theo tổng quan: **Thương hiệu** (không nhân vật; nhận diện qua giọng + màu + góc
nhìn). Tổng quan khuyên mascot/nhân vật cố định làm hào mạnh hơn. Đây là **quyết định còn mở** cho
người vận hành; nếu chọn, nhân vật phải xuất hiện từ tập đầu của loạt mới, không chèn giữa chừng.

Nhịp hệ thống hiện tại: 12 tập từ 31/7 đến 16/9/2026 ≈ 7 tập/tháng. Đạt ngưỡng "hệ thống" (~8).
Giai đoạn thử nên **cách 7 ngày** giữa hai tập để YouTube kịp đo (1–2 tuần/video); đăng dồn thì
không đọc được số.

---

## 4. Chọn chủ đề — mỗi tập một lần

Luật: **chọn chỗ đông, không chọn chỗ trống.** Chỗ trống thường trống vì không ai muốn xem. "Chưa ai
làm" là cờ đỏ, không phải cờ xanh, trừ khi có kênh nhỏ đang sống ở đó.

Quy trình 5 bước (tổng quan Phần 8), điều chỉnh cho pipeline này:

1. **Săn outlier từ kênh làm thước.** Người vận hành cào (Apify hoặc tay) tiêu đề · view · ngày của
   3–6 kênh thước; tính **bội số = view ÷ trung vị kênh đó**. Chủ đề xuất hiện ở ≥2 kênh với bội số
   ≥2 mới đáng làm. Không gõ từ khoá YouTube để săn (thiên vị kênh uy tín, kênh có mặt người).
   Agent không cào được; `scriptwriter` chỉ có WebSearch và WebSearch **không thay được** bước này.
2. **Giữ hình dạng, đổi nhiên liệu.** Học *khuôn câu chuyện* của video thắng; chủ đề, ví dụ, dữ kiện,
   câu chữ thì phải khác. Chép chủ đề = ra video muộn 3 tuần, yếu hơn.
3. **Đóng gói trước** → Khâu 0 (mục 5). Nếu chính mình không thích cặp tiêu đề/bìa thì giết chủ đề
   ngay, tiết kiệm cả tuần.
4. **Đào fact thật, có nguồn.** Không bịa số. Không chắc thì nói mềm hoặc bỏ. (scriptwriter đã có
   WebSearch cho việc này.)
5. **Brief** ba dòng: mở bằng gì · kể theo thứ tự nào · chốt ở đâu → đưa vào `packaging.md`.

Đầu vào cho scriptwriter từ nay là **`projects/<slug>/packaging.md`** (đã qua cổng), không phải một
từ khoá trần.

---

## 5. Khâu 0 — Đóng gói trước sản xuất

Làm trong `/produce` trước khi gọi scriptwriter. Người vận hành duyệt (GO / KILL). Tiêu đề viết
theo mục 5b (sinh 10, chấm 8 điểm, giữ 5). Đầu ra `projects/<slug>/packaging.md`:

```
# <slug> — packaging

ANGLE: (chép câu ở mục 2, không đổi)
KHUÔN: [Một thứ quen] — [Nghịch lý về nó]
TRỤ: A/B/C/D/E
BẰNG CHỨNG CẦU: chủ đề này (hoặc hình dạng này) thắng ở kênh nào, bội số bao nhiêu

## 10 tiêu đề nháp (ghi khung, chấm theo checklist mục 5b)
| # | Tiêu đề | Khung | Vòng lặp mở ra (câu hỏi trong đầu người đọc) | Ký tự | Điểm/8 |
|---|---|---|---|---|---|

## 5 cặp tiêu đề + concept bìa (5 điểm cao nhất, mỗi cặp một công thức khác nhau)
| # | Tiêu đề (theo khuôn) | Công thức | Concept bìa (chủ thể · chữ 3–4 từ · câu hỏi người xem tự đặt · cảm xúc) |
|---|---|---|---|
| 1 | ... | nghịch lý | ... |
| 2 | ... | con số + kết quả | ... |
| 3 | ... | điều không ai nói | ... |
| 4 | ... | trước / sau | ... |
| 5 | ... | mất mát / đe doạ | ... |

## Chọn
Cặp số: __  Lý do: khoảng trống tò mò mạnh nhất vì ...
Phương án B (khác hẳn góc, đổi sau 24h nếu CTR thấp): ...
Phép thử giết sớm: chính tôi có bấm không? (có / không → KILL)

## Lời hứa (video phải thực hiện)
Người xem bấm vì muốn biết: ...
Video trả lời ở chương: ...

## Brief
Mở bằng: ...
Kể theo thứ tự: ...
Chốt ở: ...
Khung chính (chọn 1): liệt kê / hành trình / bí ẩn / so sánh / vấn đề–giải pháp / biên niên
```

Năm công thức tiêu đề: con số + kết quả sốc · nghịch lý · điều không ai nói với bạn · trước/sau ·
mối đe doạ/mất mát. Khuôn của kênh hợp nhất với "nghịch lý"; các công thức khác dùng để có 5 cặp
khác nhau thật sự, không phải 5 cách viết cùng một câu.

Thumbnail ở khâu 5 **thực hiện** concept đã duyệt ở đây, không sáng tác lại. Tiêu đề trong
`YOUTUBE.md` là tiêu đề đã duyệt, kèm 2 cặp còn lại làm biến thể A/B và phương án B đổi sau 24h.

---

## 5b. Tư duy tiêu đề — áp dụng từ `E:\YOUTUBE\KNOWLEDGE\TU-DUY-TITLE.md`

Nguồn gốc viết cho kênh Nhật; phần hiệu chỉnh riêng của họ (từ khoá Google, ngôn ngữ con cái,
khung chat LINE) **không áp** cho kênh này. Phần dưới là bản áp cho Du Mục Vũ Trụ. Áp dụng từ
2026-09-20; tập đầu tiên đi qua quy trình này là `mat-trang`.

**Luật nền.** Tiêu đề là 5–10 từ quyết định số phận của cả tuần làm video. Không ai bấm là vì tiêu
đề chưa mở được một **vòng lặp tò mò**, không phải vì nội dung dở. Tiêu đề đứng cạnh 20 tiêu đề
khác trong 1–2 giây mắt lướt. Và nó là biến **rẻ nhất** để sửa: đổi tiêu đề 10 giây, làm lại bìa
nửa ngày, làm lại video cả tuần.

**Một câu để nhớ:** tiêu đề không mô tả video. Tiêu đề là **câu hỏi mà video trả lời**, viết sao
cho người đọc không chịu nổi việc chưa biết đáp án. Vòng lặp mở ra thì video **phải đóng lại**;
mở mà không đóng là clickbait, retention sụp, thuật toán phạt.

### Ba cách mở vòng lặp, xếp theo độ mạnh
1. **Con số lạ, cụ thể, lẻ** (3,8 cm mỗi năm; 20 phút đầu; 4.000 tỉ Mặt Trời). Số lẻ tạo cảm giác có thật.
2. **Khoảng cách giữa hai vế**: một thứ quen ở vế đầu, một điều không nói hết ở vế sau. Khuôn của
   kênh `[Thứ quen] — [Nghịch lý]` chính là cách này.
3. **Mâu thuẫn với điều ai cũng tin** (Vàng không thuộc về Trái Đất; Nước có trước Mặt Trời).

**Phép thử bắt buộc:** viết xong, hỏi *"đọc câu này, trong đầu người ta nảy ra câu hỏi gì?"*.
Không nảy ra câu hỏi nào thì tiêu đề chết, viết lại. Ghi câu hỏi đó vào cột "Vòng lặp mở ra".

### Kho khung (không viết từ trang trắng, luôn bắt đầu từ một khung)
| Khung | Tựa cũ của kênh đã dùng khung này |
|---|---|
| `[Thứ quen] — [Điều ai cũng tin về nó] là sai` | Vàng — Kim Loại Không Thuộc Về Trái Đất |
| `[Thứ quen] — [Con số lạ] + [điều nó có nghĩa]` | Nguyên Tố Đầu Tiên — Hai Mươi Phút Đầu Vũ Trụ |
| `[Thứ quen] — Thứ [tính chất nghịch lý]` | Photon — Thứ Không Bao Giờ Già |
| `[Thứ quen] — Kẻ/Thứ [hành động gây hậu quả]` | Sắt — Kẻ Giết Những Ngôi Sao |
| `Vì sao [hiện tượng quen] lại [điều lạ]?` | Vì Sao Thời Gian Chỉ Trôi Một Chiều? |
| `Bạn/Thứ quen — [trạng thái không ngờ]` | Bạn Gần Như Là Hư Không |
| `[Thứ quen] — Điều [nguồn uy tín] không ai kể` | *(chưa dùng)* |
| `[Thứ quen] — Ngày xưa/Trước kia [khác hẳn bây giờ]` | *(chưa dùng; trước/sau)* |

Khung nào thắng (bội số ≥2 ở bảng Số liệu) thì dùng lại 3–5 lần. Khung của kênh khác: bóc thành
bộ xương, bỏ nội dung, rồi đổ nội dung của mình vào. Chép khung, không chép chủ đề.

### Power word của kênh
Bộ từ thị trường đã chứng minh phải **cào từ 30–50 tiêu đề top của ngách** (việc của người vận
hành, chưa làm; ghi kết quả vào đây). Trong lúc chờ, bộ tạm rút từ 12 tựa của chính kênh:

| Nhóm | Dùng được | Tránh (giọng hớt hải, không hợp giọng "Tôi" chậm) |
|---|---|---|
| Nghịch lý / độc quyền thật | không thuộc về, có trước cả, không bao giờ, thật ra, không ai kể, từng là | bí mật, sự thật gây sốc |
| Con số | số lẻ cụ thể, đơn vị đời thường (cm, phút, giờ) | "hàng tỉ" chung chung |
| Đe doạ / mất mát (có thật) | kẻ giết, tự đầu độc, đang rời đi, đã tắt | KHÔNG THỂ TIN NỔI, SỐC, viết hoa cả câu |
| Uy quyền | đá Apollo, NASA đo được, Nobel | "các nhà khoa học nói" |

Vòng lặp của kênh này đến từ **con số cụ thể và mâu thuẫn thật**, không từ cảm thán. Người xem
mục tiêu (xem trên TV, buổi tối) rời đi khi thấy giọng bán hàng.

### Ba quy tắc cứng
- **≤ 55 ký tự** kể cả dấu và khoảng trắng. Tiếng Việt có dấu chiếm chỗ hơn, nhắm 35–50.
- **Front-load:** thứ quen thuộc (Mặt Trăng, Nước, Vàng) đứng đầu. Khuôn của kênh đã bảo đảm
  việc này; đừng đổi thứ tự hai vế.
- **Nửa đầu tự đứng được.** YouTube cắt đuôi bằng `...` trên TV và điện thoại. Che nửa sau, nửa
  đầu còn hiểu và còn muốn bấm không? Không thì viết lại. Nghịch lý phải bắt đầu ngay sau dấu gạch.

### Checklist 8 điểm (dưới 6 thì viết lại)
1. Đọc xong có nảy ra ít nhất một câu hỏi không?
2. Có bám một khung trong kho không?
3. Có ít nhất một power word hợp kênh không (nghịch lý / con số / uy quyền, không hớt hải)?
4. Có con số cụ thể không? (không bắt buộc nhưng mạnh)
5. ≤ 55 ký tự?
6. Thứ quen thuộc nằm ở đầu?
7. Che nửa sau, nửa đầu còn đứng được?
8. Tự giải thích 100% khi đứng một mình (không cần bìa, không nhắc tập khác, không đại từ mơ hồ)?

**Loại ngay nếu:** hứa điều video không trả lời · giọng giật gân · cần bìa mới hiểu · có "cái này",
"điều đó".

### Quy trình khi đặt tiêu đề (chạy trong Khâu 0)
1. Xác định vòng lặp cốt lõi của tập: câu hỏi nào video trả lời? Chép vào "Lời hứa".
2. Chọn 2–3 khung từ kho.
3. Sinh **10 tiêu đề**, mỗi cái ghi khung, câu hỏi nó mở ra, số ký tự, điểm/8.
4. Giữ **5 điểm cao nhất**, đủ 5 công thức khác nhau (nghịch lý · con số · không ai nói · trước/sau ·
   đe doạ), ghép concept bìa thành 5 cặp cho người vận hành chọn.
5. Ghi **phương án B** khác hẳn góc tiếp cận để đổi sau 24h nếu CTR thấp.

### Đổi tiêu đề sau khi đăng (bổ sung cho mục 6)
Tiêu đề là giả thuyết, không phải quyết định cuối. **Luôn đổi tiêu đề trước khi đụng bìa.** Mỗi lần
đổi **một biến** (con số, hoặc power word, hoặc khung); đổi hết cùng lúc thì không học được gì.

---

## 6. Đọc số và sửa — từ tập thứ 3, không đợi đủ 10

Bốn chỉ số, mỗi chỉ số một bệnh:

| Chỉ số | Đo gì | Hỏng thì sửa |
|---|---|---|
| CTR | Sức hút tiêu đề + bìa | Đổi bìa / tiêu đề (rẻ nhất, làm trước) |
| AVD | Giữ chân | Hook + nhịp kịch bản |
| Retention curve | Điểm tụt | Cắt đúng chỗ; rút bài học cho scriptwriter |
| View 48h đầu | Máy có đẩy không | Tín hiệu sớm nhất |

**Bội số** = view ÷ **trung vị** của kênh (không dùng trung bình; một tập viral làm lệch hết).
≥2× = thắng → làm thêm 3–5 tập cùng hình dạng. ≤0,5× = phải sửa, mổ theo thứ tự rẻ → đắt: đổi
tiêu đề → đổi bìa → xem retention → sửa hook/cắt lan man → chia sẻ lại.

**Tín hiệu 24h đầu** (đọc trước cả mốc 48h, theo mục 5b):

| Tín hiệu | Hành động |
|---|---|
| CTR thấp **và** impressions thấp | Đổi tiêu đề ngay (phương án B trong `packaging.md`) |
| CTR thấp, impressions cao | Máy đang đẩy nhưng không ai bấm: đổi tiêu đề trước, bìa sau |
| Cả hai trung bình | Chờ tới mốc kênh thường bung (chưa biết, phải đo từ 12 tập đầu) |

Đổi một biến mỗi lần. Ghi lại tiêu đề cũ, tiêu đề mới, ngày đổi vào cột "Kết luận" của bảng Số liệu.

Ghi số vào `projects/EPISODES-PRODUCED.md` mục "Số liệu". `render` tạo dòng trống khi đóng gói;
người vận hành điền ở mốc 48h, 7 ngày, 28 ngày.

**Cửa lớn** (sau 10 tập + 3 tháng): có tập nào vượt 20.000 view không? Có → đi tiếp (kiếm tiền,
rồi nhân bản). Không → đổi **nhóm chủ đề** hoặc **khuôn**, tuyệt đối **không đổi ANGLE**.

Tính đến 2026-09-20 kênh đã có 12 tập nhưng **chưa có số nào trong sổ**. Việc đầu tiên là điền số
cho 12 tập đó, tính trung vị, rồi mới biết tập nào là outlier nội bộ để nhân bản.

---

## 7. Quyết định còn mở (người vận hành)

| Quyết định | Tổng quan nói gì | Hiện trạng |
|---|---|---|
| Thị trường | Mặc định tiếng Anh, CPM gấp 10–20 lần VN; chọn ngách theo tiền trước | Kênh tiếng Việt; đang cân nhắc kênh Nhật (xem `nghien-cuu-thi-truong-nhat-senior.md`) |
| Kênh thứ hai | Chỉ mở khi kênh 1 qua cửa 20.000 view, đã đào sâu format thắng, có hệ thống ổn định | Kênh 1 chưa có số để biết đã qua cửa chưa |
| Tách tài khoản | Mỗi kênh một Gmail + AdSense + quyền riêng; dính chùm = mất cả cụm | Chưa ghi nhận. Bắt buộc trước khi mở kênh Nhật |
| Nhân vật cố định | Mascot là hào thương hiệu mạnh nhất | Kênh đang là dạng "thương hiệu" không nhân vật |
| Thời lượng | Người mới 8–10 phút | Kênh cố định ≥13 phút; giữ nếu AVD chứng minh được, nếu không thử 10 phút |
| Kiểm demonetize ngách | Xem kênh lớn cùng ngách có chạy quảng cáo không | Khoa học phổ thông an toàn; riêng trụ "cái chết" ở kênh Nhật cần kiểm |

---

## 8. Mười lỗi chết người — bản rút cho kênh này

1. Đóng gói sau cùng (pipeline cũ mắc lỗi này ở cả 12 tập).
2. Chép chủ đề của kênh khác thay vì chép công thức.
3. Chọn ngách trống vì tưởng ít cạnh tranh.
4. Dùng trung bình thay vì trung vị.
5. Đổi ANGLE giữa chừng.
6. Bỏ cuộc trước tập thứ 10.
7. Mở kênh 2 khi kênh 1 chưa sống.
8. Chung AdSense/email giữa các kênh.
9. Chấm cửa bằng cảm giác thay vì số đếm được.
10. Dùng danh sách ý tưởng do AI kê mà không gõ thử kiểm chứng trên YouTube.
