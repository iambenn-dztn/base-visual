#!/usr/bin/env node
// mix-bgm.mjs — Trộn nhạc nền dùng chung (assets/bgm.mp3) vào narration của một project.
//   - Tự LẶP nhạc cho vừa độ dài narration.
//   - Hạ nhỏ dưới giọng đọc: fixed gain (mặc định) hoặc ducking động (--duck, sidechain).
//   → xuất projects/<slug>/voice/narration_mixed.mp3
//
//   node scripts/mix-bgm.mjs --project projects/<slug> [--bgm assets/bgm.mp3] [--gain 0.13] [--duck]
//   (gain mặc định 0.13 — nhạc nền nhẹ dưới giọng đọc; hạ từ 0.18 theo yêu cầu người dùng)
//
// Yêu cầu: ffmpeg trong PATH (dùng scripts/node_modules/ffmpeg-static nếu chưa có hệ thống).

import {existsSync} from 'node:fs';
import {execFileSync, spawnSync} from 'node:child_process';
import {join, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {dirname} from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

function arg(name, def) { const i = process.argv.indexOf(name); return i >= 0 ? process.argv[i + 1] : def; }
const flag = (name) => process.argv.includes(name);

const projectDir = resolve(arg('--project', 'projects/hoan-hao-trai-dat'));
const bgm = resolve(arg('--bgm', 'assets/bgm.mp3'));
const gain = parseFloat(arg('--gain', '0.13'));
const duck = flag('--duck');

// ffmpeg: ưu tiên hệ thống, fallback ffmpeg-static
function ffmpegBin() {
  const sys = spawnSync('ffmpeg', ['-version'], {encoding: 'utf8'});
  if (sys.status === 0) return 'ffmpeg';
  const stat = join(__dirname, 'node_modules', 'ffmpeg-static', process.platform === 'win32' ? 'ffmpeg.exe' : 'ffmpeg');
  if (existsSync(stat)) return stat;
  throw new Error('Không tìm thấy ffmpeg (hệ thống hoặc ffmpeg-static). Chạy: (cd scripts && npm install ffmpeg-static)');
}

const narration = join(projectDir, 'voice', 'narration.mp3');
if (!existsSync(narration)) throw new Error(`Chưa có ${narration} — chạy voice trước.`);
if (!existsSync(bgm)) throw new Error(`Chưa có nhạc nền ${bgm}. Đặt file Suno vào assets/bgm.mp3.`);

const out = join(projectDir, 'voice', 'narration_mixed.mp3');
const ff = ffmpegBin();

// narration = input 0 (giữ nguyên), bgm = input 1 (lặp vô hạn, hạ nhỏ). duration=first → dài bằng narration.
const filter = duck
  ? `[1:a]volume=${gain}[bg];[bg][0:a]sidechaincompress=threshold=0.03:ratio=8:attack=20:release=400[bgd];` +
    `[0:a][bgd]amix=inputs=2:duration=first:dropout_transition=0:normalize=0[a]`
  : `[1:a]volume=${gain}[bg];[0:a][bg]amix=inputs=2:duration=first:dropout_transition=0:normalize=0[a]`;

const args = [
  '-y',
  '-i', narration,
  '-stream_loop', '-1', '-i', bgm,
  '-filter_complex', filter,
  '-map', '[a]',
  '-c:a', 'libmp3lame', '-q:a', '2',
  out,
];

process.stderr.write(`  Trộn nhạc nền (${duck ? 'ducking động' : 'gain ' + gain}) → narration_mixed.mp3...\n`);
execFileSync(ff, args, {stdio: 'ignore'});
process.stderr.write(`✓ ${out}\n  wire-audio.mjs sẽ tự dùng file này.\n`);
