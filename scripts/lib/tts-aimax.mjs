// AIMAX Studio TTS client — https://www.aimaxstudio.com/api-docs
// Auth: header  X-API-Key: <key>
// Flow: POST /tts/generate (multipart) → job_id → poll GET /tts/jobs/{id} → audio_url + srt_url
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// TLS inspection workaround (một số máy corporate chặn TLS outbound)
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export function loadEnv() {
  // Tìm .env trong scripts/ hoặc thư mục gốc project
  const candidates = [
    path.join(__dirname, '..', '.env'),          // scripts/.env
    path.join(__dirname, '..', '..', '.env'),    // DuMuc-HyperFrame/.env
  ];
  for (const envPath of candidates) {
    if (fs.existsSync(envPath)) {
      for (const line of fs.readFileSync(envPath, 'utf8').split(/\r?\n/)) {
        const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
        if (m && !(m[1] in process.env)) process.env[m[1]] = m[2];
      }
    }
  }
  const key = process.env.AIMAX_API_KEY;
  if (!key) throw new Error('Thiếu AIMAX_API_KEY. Đặt trong scripts/.env hoặc DuMuc-HyperFrame/.env');
  return key;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function buildForm(text, cfg) {
  const t = cfg.tts;
  const fd = new FormData();
  fd.append('provider', t.provider);
  fd.append('text', text);
  fd.append('language', t.language);
  fd.append('enable_srt', String(t.enable_srt));
  if (t.provider === 'elevenlabs') {
    const e = t.elevenlabs;
    fd.append('voice_id', e.voice_id);
    fd.append('model', e.model);
    fd.append('speed', String(e.speed ?? 1.0));
    fd.append('stability', String(e.stability));
    fd.append('similarity', String(e.similarity));
    fd.append('style_exaggeration', String(e.style_exaggeration));
    fd.append('use_speaker_boost', String(e.use_speaker_boost));
  } else {
    fd.append('voice_id', t.voice_id);
    fd.append('model', t.model);
    fd.append('speed', String(t.speed));
    fd.append('pitch', String(t.pitch));
    fd.append('vol', String(t.vol));
    fd.append('normalize', String(t.normalize));
  }
  return fd;
}

export async function generate(text, cfg, key) {
  const res = await fetch(cfg.api.baseUrl + '/tts/generate', {
    method: 'POST',
    headers: {'X-API-Key': key},
    body: buildForm(text, cfg),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(`generate ${res.status}: ${JSON.stringify(data)}`);
  if (!data.job_id) throw new Error(`generate: không có job_id: ${JSON.stringify(data)}`);
  return data.job_id;
}

export async function poll(jobId, cfg, key, onProgress) {
  const deadline = Date.now() + cfg.api.timeoutMs;
  while (Date.now() < deadline) {
    const res = await fetch(`${cfg.api.baseUrl}/tts/jobs/${jobId}`, {headers: {'X-API-Key': key}});
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(`poll ${res.status}: ${JSON.stringify(data)}`);
    const status = (data.status || '').toLowerCase();
    if (onProgress) onProgress(status, data.progress);
    if (status === 'completed' || status === 'done' || status === 'success' || data.audio_url) return data;
    if (status === 'failed' || status === 'error') throw new Error(`job failed: ${JSON.stringify(data)}`);
    await sleep(cfg.api.pollIntervalMs);
  }
  throw new Error('poll: hết thời gian chờ');
}

function absUrl(u, cfg) {
  if (!u) return u;
  if (/^https?:\/\//.test(u)) return u;
  const origin = new URL(cfg.api.baseUrl).origin;
  return origin + (u.startsWith('/') ? u : '/' + u);
}

export async function download(url, dest, cfg, key) {
  const full = absUrl(url, cfg);
  const sameHost = new URL(full).origin === new URL(cfg.api.baseUrl).origin;
  const res = await fetch(full, {headers: sameHost ? {'X-API-Key': key} : {}});
  if (!res.ok) throw new Error(`download ${res.status} ${full}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.mkdirSync(path.dirname(dest), {recursive: true});
  fs.writeFileSync(dest, buf);
  return dest;
}

// text → mp3 + srt (1 lần gọi hoàn chỉnh)
export async function synthesize(text, {mp3Path, srtPath, cfg, key, label = ''}) {
  const jobId = await generate(text, cfg, key);
  process.stderr.write(`  [${label}] job ${jobId} `);
  const result = await poll(jobId, cfg, key, (s, p) => {
    process.stderr.write(`.${s}${p != null ? Math.round(p * 100) + '%' : ''} `);
  });
  process.stderr.write('\n');
  await download(result.audio_url, mp3Path, cfg, key);
  let srtOut = null;
  if (result.srt_url) {
    await download(result.srt_url, srtPath, cfg, key);
    srtOut = srtPath;
  }
  return {mp3Path, srtPath: srtOut, raw: result};
}

// Đọc SRT → trả về thời lượng âm thanh (giây) dựa vào cue cuối cùng
export function parseSrt(srt) {
  const cues = [];
  const blocks = srt.replace(/\r/g, '').split(/\n\n+/);
  for (const b of blocks) {
    const lines = b.split('\n').filter(Boolean);
    const tl = lines.find((l) => l.includes('-->'));
    if (!tl) continue;
    const m = tl.match(/(\d+):(\d+):(\d+)[,.](\d+)\s*-->\s*(\d+):(\d+):(\d+)[,.](\d+)/);
    if (!m) continue;
    const toMs = (h, mi, s, ms) => (+h * 3600 + +mi * 60 + +s) * 1000 + +ms;
    cues.push({startMs: toMs(m[1], m[2], m[3], m[4]), endMs: toMs(m[5], m[6], m[7], m[8])});
  }
  return cues;
}

export function srtDurationSeconds(srtText) {
  const cues = parseSrt(srtText);
  if (!cues.length) return 0;
  return cues[cues.length - 1].endMs / 1000;
}
