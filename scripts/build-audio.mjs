#!/usr/bin/env node
// build-audio.mjs — Dựng track âm thanh HOÀN CHỈNH cho một tập: intro lặng → thân → outro đen.
//
// Thay cho mix-bgm.mjs khi tập cần cấu trúc đầu/cuối. mix-bgm.mjs chỉ lặp MỘT file nhạc
// trên đúng độ dài narration, không chèn được lead-in / tail.
//
//   node scripts/build-audio.mjs --project projects/<slug> [tuỳ chọn]
//
//   --lead <s>     Lặng/nhạc trước khi giọng vào (mặc định 2).
//   --tail <s>     Nhạc nền + màn hình đen sau khi giọng hết (mặc định 5).
//   --gain <0..1>  Âm lượng nhạc dưới giọng (mặc định 0.13).
//   --tail-gain    Âm lượng nhạc ở đoạn tail, khi không còn giọng (mặc định 0.34).
//   --duck         Ducking động (sidechain) thay vì gain cố định.
//
// CẤU TRÚC RA:
//
//   0 ──── lead ──── │ ─────────── narration ─────────── │ ── tail ── │
//   nhạc fade in     │ nhạc ở --gain dưới giọng          │ nhạc lên   │
//   (chưa có giọng)  │                                   │ --tail-gain│
//                    │                                   │ rồi fade   │
//
// ⚠ Vì sao lead 2s: người xem 50-60+ trên TV cần một nhịp trước khi lời đầu tiên tới.
//    Vào thẳng làm họ mất câu đầu. Và YouTube hay chèn quảng cáo ở giây 0.
// ⚠ Vì sao tail 5s màn hình đen: để nhạc kết trọn câu, không cắt cụt, và người xem
//    có chỗ ngồi lại trước khi video hết. Quan trọng với chủ đề tang lễ.
//
// PLAYLIST nhạc: nối nhiều file theo mạch cảm xúc thay vì lặp một file.
//    Khai trong BGM_PLAN dưới đây theo từng chương của timing.json.

import {existsSync, writeFileSync, readFileSync, mkdirSync, rmSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import {join, resolve} from 'node:path';

function arg(n, d) { const i = process.argv.indexOf(n); return i >= 0 ? process.argv[i + 1] : d; }
const flag = (n) => process.argv.includes(n);

const projectDir = resolve(arg('--project', ''));
if (!projectDir) throw new Error('Thiếu --project projects/<slug>');
const LEAD = parseFloat(arg('--lead', '2'));
const TAIL = parseFloat(arg('--tail', '5'));
const GAIN = parseFloat(arg('--gain', '0.13'));
const TAIL_GAIN = parseFloat(arg('--tail-gain', '0.34'));
const DUCK = flag('--duck');

const FF = resolve('scripts/ffbin/ffmpeg.exe');
const FP = resolve('scripts/ffbin/ffprobe.exe');
if (!existsSync(FF)) throw new Error(`Không thấy ${FF}`);

const voiceDir = join(projectDir, 'voice');
const narration = join(voiceDir, 'narration.mp3');
if (!existsSync(narration)) throw new Error(`Chưa có ${narration} — chạy voice trước.`);

const dur = (f) => +execFileSync(FP, ['-v', 'error', '-show_entries', 'format=duration',
  '-of', 'csv=p=0', f], {encoding: 'utf8'}).trim();

const narrDur = dur(narration);
const total = LEAD + narrDur + TAIL;

// ── Playlist nhạc nền theo mạch cảm xúc ──────────────────────────────────
// Mỗi phần tử: file trong assets/bg-music/. Nối lại rồi lặp nếu chưa đủ dài.
// Thứ tự chọn theo TÊN file (tác giả đặt tên theo cảm xúc), không theo thời lượng.
const BGM_DIR = resolve('assets/bg-music');
const PLAN = (arg('--bgm', 'intro,Path,Weight,Clarity,Settle')).split(',')
  .map((n) => join(BGM_DIR, n.trim() + '.mp3'));
for (const f of PLAN) if (!existsSync(f)) throw new Error(`Không thấy nhạc nền: ${f}`);

const tmp = join(projectDir, 'voice', '_tmp-audio');
rmSync(tmp, {recursive: true, force: true});
mkdirSync(tmp, {recursive: true});

process.stderr.write(`  narration : ${narrDur.toFixed(2)}s\n`);
process.stderr.write(`  lead ${LEAD}s + narration + tail ${TAIL}s = ${total.toFixed(2)}s\n`);
process.stderr.write(`  playlist  : ${PLAN.map((p) => p.split(/[\\/]/).pop()).join(' → ')}\n`);

// 1) Nối playlist thành một track dài, lặp cho tới khi >= total
const listPath = join(tmp, 'bgm-list.txt');
const reps = Math.ceil(total / PLAN.reduce((a, f) => a + dur(f), 0)) || 1;
const lines = [];
for (let r = 0; r < reps; r++) for (const f of PLAN) lines.push(`file '${f.replace(/\\/g, '/').replace(/'/g, "'\\''")}'`);
writeFileSync(listPath, lines.join('\n'));

const bgmLong = join(tmp, 'bgm-long.mp3');
execFileSync(FF, ['-y', '-v', 'error', '-f', 'concat', '-safe', '0', '-i', listPath,
  '-t', String(total + 2), '-ar', '44100', '-ac', '2', '-c:a', 'libmp3lame', '-q:a', '3', bgmLong],
  {stdio: ['ignore','pipe','inherit']});

// 2) Narration dịch sang phải LEAD giây, đệm lặng đuôi TAIL giây
const narrPad = join(tmp, 'narr-pad.mp3');
execFileSync(FF, ['-y', '-v', 'error', '-i', narration,
  '-af', `adelay=${Math.round(LEAD * 1000)}|${Math.round(LEAD * 1000)},apad=whole_dur=${total}`,
  '-ar', '44100', '-ac', '2', '-c:a', 'libmp3lame', '-q:a', '2', narrPad], {stdio: ['ignore','pipe','inherit']});

// 3) Đường bao âm lượng nhạc — ghép bằng CHUỖI afade, không dùng biểu thức volume.
//    ⚠ Bản ffmpeg đóng gói ở scripts/ffbin/ KHÔNG nhận 'volume=<expr>:eval=frame'
//       ("No option name near 'frame'"). Dùng afade nối tiếp thì tất định và chạy mọi bản.
//    Đường bao: 0→lead fade in tới TAIL_GAIN · hạ về GAIN khi giọng vào ·
//               giữ GAIN suốt thân · lên lại TAIL_GAIN khi giọng hết · fade out cuối.
const tNarrEnd = LEAD + narrDur;
const RAMP = 1.2;
const FADE_OUT = Math.min(2.5, TAIL - 0.5);

// Hạ toàn track xuống TAIL_GAIN trước, rồi dùng afade để "khoét" đoạn thân xuống GAIN.
// Tỉ lệ khoét = GAIN/TAIL_GAIN, làm bằng volume tĩnh trên nhánh thân rồi acrossfade.
const ratio = (GAIN / TAIL_GAIN).toFixed(4);
const bgmEnv = join(tmp, 'bgm-env.mp3');
const chain = [
  `volume=${TAIL_GAIN}`,                                   // sàn chung
  // Fade in NHANH (0.6s) rồi giữ: 2 giây lead phải nghe ra là nhạc mở đầu,
  // không phải khoảng lặng. Fade suốt 2s làm nửa giây đầu gần như im (đo được -45.9 LUFS).
  `afade=t=in:st=0:d=${Math.min(0.6, LEAD * 0.35).toFixed(2)}`,
  `volume=${ratio}:enable='between(t,${(LEAD + RAMP).toFixed(2)},${tNarrEnd.toFixed(2)})'`,
  `afade=t=out:st=${(total - FADE_OUT).toFixed(2)}:d=${FADE_OUT.toFixed(2)}`,
  `atrim=0:${total.toFixed(3)}`,
].join(',');
execFileSync(FF, ['-y', '-v', 'error', '-i', bgmLong, '-af', chain,
  '-ar', '44100', '-ac', '2', '-c:a', 'libmp3lame', '-q:a', '3', bgmEnv], {stdio: ['ignore','pipe','inherit']});

// 4) Trộn
const out = join(voiceDir, 'narration_mixed.mp3');
if (DUCK) {
  execFileSync(FF, ['-y', '-v', 'error', '-i', narrPad, '-i', bgmEnv,
    '-filter_complex',
    '[1:a][0:a]sidechaincompress=threshold=0.05:ratio=9:attack=80:release=900[bg];[0:a][bg]amix=inputs=2:duration=longest:normalize=0[a]',
    '-map', '[a]', '-ar', '44100', '-c:a', 'libmp3lame', '-q:a', '2', out], {stdio: ['ignore','pipe','inherit']});
} else {
  execFileSync(FF, ['-y', '-v', 'error', '-i', narrPad, '-i', bgmEnv,
    '-filter_complex', '[0:a][1:a]amix=inputs=2:duration=longest:normalize=0[a]',
    '-map', '[a]', '-ar', '44100', '-c:a', 'libmp3lame', '-q:a', '2', out], {stdio: ['ignore','pipe','inherit']});
}

rmSync(tmp, {recursive: true, force: true});

// 5) Ghi lại mốc để visual-builder dùng
const meta = {
  lead: LEAD, tail: TAIL, narrationDuration: +narrDur.toFixed(2),
  totalDuration: +total.toFixed(2),
  voiceStartsAt: LEAD, voiceEndsAt: +tNarrEnd.toFixed(2),
  blackOutroFrom: +tNarrEnd.toFixed(2),
  gain: GAIN, tailGain: TAIL_GAIN,
  playlist: PLAN.map((p) => p.split(/[\\/]/).pop()),
};
writeFileSync(join(projectDir, 'audio.json'), JSON.stringify(meta, null, 2));

const real = dur(out);
process.stderr.write(
  `\n✓ narration_mixed.mp3 = ${real.toFixed(2)}s (dự tính ${total.toFixed(2)}s)\n` +
  `  giọng vào ${LEAD}s · giọng hết ${tNarrEnd.toFixed(2)}s · đen tới ${total.toFixed(2)}s\n` +
  `  audio.json → mốc cho visual-builder\n`);
