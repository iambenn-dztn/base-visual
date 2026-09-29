// tts-sovits.mjs — Client cho GPT-SoVITS chạy LOCAL (http://127.0.0.1:9880).
//
// Vì sao đổi từ AIMAX/MiniMax sang đây: kênh này chuyển sang tiếng Nhật. AIMAX cấu hình
// `language: 'Vietnamese'` với giọng Bắc (`uv_5cee29af`) — không dùng lại được. Server local
// chạy giọng `nanami` đã clone, trên GPU, miễn phí và TẤT ĐỊNH (cùng seed → cùng byte).
//
// ⚠ KHÁC BIỆT LỚN NHẤT SO VỚI AIMAX: **server này KHÔNG trả `.srt`**, chỉ trả audio.
// AIMAX có `enable_srt: true` nên `gen-captions.mjs` cắt phụ đề theo mốc câu của TTS.
// ElevenLabs từng bị loại vì đúng lý do này (xem scripts/_deprecated/README.md).
// Ở đây KHÔNG loại, vì tiếng Nhật không cần SRT để cắt dòng: dấu 。、 là ranh giới câu
// hiển nhiên, cắt tất định bằng `splitJa()` trong gen-captions.mjs, rồi chia thời gian
// theo tỉ lệ ký tự. Mốc bắt đầu mỗi cue vẫn lấy từ timing.json (đo mp3 THẬT) như cũ —
// đó mới là nguồn chính xác, SRT chỉ là mốc phụ bên trong cue.
//
// API (đọc từ /openapi.json ngày 2026-09-21):
//   GET  /health     → {status, device, gpu, voices[]}
//   GET  /voices     → {voices:[{name, ref_duration_sec, ref_text}]}
//   POST /synthesize → audio bytes (wav|mp3)
//     {text(1..5000), voice, lang(ja|en|zh|ko|yue|auto), format, speed(0.5..2),
//      seed(-1=ngẫu nhiên), top_k(1..100), temperature(0.1..2),
//      postprocess(bool), target_lufs(-30..-5), true_peak(-9..0)}

const DEFAULT_BASE = process.env.SOVITS_URL || 'http://127.0.0.1:9880';

// ⚠⚠ DÙNG `node:http`, KHÔNG DÙNG `fetch` — 2026-09-23
//
// Trên Node v24 + Windows, `fetch` (undici) **treo vô hạn** với 127.0.0.1 và localhost,
// trong khi curl và `http.get` cùng URL trả lời trong 0,1–0,4 giây. Triệu chứng là
// "TTS quá 15s không trả lời: http://127.0.0.1:9880/health" trong khi server hoàn toàn khoẻ.
// Đo được 2026-09-23:
//     curl  /health            → HTTP 200,  0,097s
//     fetch 127.0.0.1/health   → AbortError sau 15,012s
//     fetch localhost/health   → AbortError sau  6,01s
//     fetch [::1]/health       → ECONNREFUSED ngay (server chỉ nghe IPv4)
//     http.get 127.0.0.1       → HTTP 200,  0,43s  ✓
// Đừng "dọn dẹp" ngược về fetch cho gọn — cả pipeline voice sẽ chết mà không rõ lý do.
import http from 'node:http';
import https from 'node:https';

/** Ném lỗi có ngữ cảnh thay vì để lỗi mạng ném ECONNREFUSED trần trụi. */
function req(baseUrl, path, init, timeoutMs) {
  const url = baseUrl.replace(/\/$/, '') + path;
  const u = new URL(url);
  const mod = u.protocol === 'https:' ? https : http;
  const ms = timeoutMs || 600000;

  return new Promise((resolve, reject) => {
    const r = mod.request({
      protocol: u.protocol,
      hostname: u.hostname,
      port: u.port,
      path: u.pathname + u.search,
      method: (init && init.method) || 'GET',
      headers: (init && init.headers) || {},
      timeout: ms,
    }, (res) => {
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => {
        const buf = Buffer.concat(chunks);
        resolve({
          ok: res.statusCode >= 200 && res.statusCode < 300,
          status: res.statusCode,
          headers: res.headers,
          async json() { return JSON.parse(buf.toString('utf8')); },
          async text() { return buf.toString('utf8'); },
          async arrayBuffer() { return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength); },
          buffer() { return buf; },
        });
      });
    });

    r.on('timeout', () => {
      r.destroy();
      reject(new Error(`TTS quá ${Math.round(ms / 1000)}s không trả lời: ${url}`));
    });
    r.on('error', (e) => {
      if (e.message && e.message.startsWith('TTS quá')) return reject(e);
      reject(new Error(
        `Không gọi được TTS local tại ${url} (${e.code || e.message}).
` +
        `  → Kiểm tra server GPT-SoVITS đã chạy chưa: curl ${baseUrl}/health`
      ));
    });

    if (init && init.body) r.write(init.body);
    r.end();
  });
}

export async function health(baseUrl = DEFAULT_BASE) {
  const res = await req(baseUrl, '/health', { method: 'GET' }, 15000);
  if (!res.ok) throw new Error(`/health trả HTTP ${res.status}`);
  return res.json();
}

export async function listVoices(baseUrl = DEFAULT_BASE) {
  const res = await req(baseUrl, '/voices', { method: 'GET' }, 15000);
  if (!res.ok) throw new Error(`/voices trả HTTP ${res.status}`);
  return res.json();
}

/**
 * Sinh một đoạn audio. Trả Buffer.
 *
 * ⚠ Body PHẢI gửi bằng Buffer UTF-8 tường minh. Đo được ngày 2026-09-21: đẩy chuỗi
 * tiếng Nhật qua tham số dòng lệnh của shell trên Windows làm hỏng byte và server trả
 * HTTP 500 sau ~6ms (chết ở khâu chuẩn hoá văn bản, chưa tới GPU). Gửi đúng UTF-8 thì
 * cùng câu đó trả 200. Đây là lỗi tầng shell, không phải lỗi server.
 */
export async function synthesize(opt) {
  const baseUrl = opt.baseUrl || DEFAULT_BASE;
  const text = String(opt.text || '').trim();
  if (!text) throw new Error('synthesize: text rỗng');
  if (text.length > 5000) throw new Error(`synthesize: text ${text.length} ký tự, server giới hạn 5000`);

  const body = {
    text,
    voice: opt.voice || 'nanami',
    lang: opt.lang || 'ja',
    format: opt.format || 'wav',
    speed: opt.speed == null ? 1.0 : opt.speed,
    seed: opt.seed == null ? 42 : opt.seed,
  };
  if (opt.top_k != null) body.top_k = opt.top_k;
  if (opt.temperature != null) body.temperature = opt.temperature;
  if (opt.postprocess != null) body.postprocess = opt.postprocess;
  if (opt.target_lufs != null) body.target_lufs = opt.target_lufs;
  if (opt.true_peak != null) body.true_peak = opt.true_peak;

  const res = await req(
    baseUrl,
    '/synthesize',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: Buffer.from(JSON.stringify(body), 'utf8'),
    },
    opt.timeoutMs || 600000
  );

  if (!res.ok) {
    let detail = '';
    try { detail = (await res.text()).slice(0, 400); } catch { /* bỏ qua */ }
    if (res.status === 422) {
      throw new Error(`TTS từ chối tham số (422): ${detail}`);
    }
    throw new Error(
      `TTS trả HTTP ${res.status}: ${detail}\n` +
      `  → 500 gần như tức thì thường là văn bản gửi lên bị hỏng mã hoá (phải là UTF-8), ` +
      `hoặc có ký tự server không chuẩn hoá được.`
    );
  }

  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 100) throw new Error(`TTS trả ${buf.length} byte — không phải audio hợp lệ`);
  return buf;
}
