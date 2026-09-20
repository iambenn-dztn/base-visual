#!/usr/bin/env node
// render.mjs — Dựng video cuối: Puppeteer chụp visual.html theo timeline + ffmpeg ghép audio.
//
// Cách dùng:
//   node scripts/render.mjs --project projects/<slug> [options]
//
// Options:
//   --project <dir>   Thư mục project (chứa visual.html, timing.json). BẮT BUỘC.
//   --fps <n>         Ghi đè fps (mặc định lấy từ timing.json, fallback 30).
//   --width <n>       Mặc định 1920.
//   --height <n>      Mặc định 1080.
//   --keep-frames     Giữ lại thư mục frames sau khi render.
//   --no-audio        Không ghép audio (xuất video câm).
//
// Hợp đồng với visual.html (do visual-builder tạo):
//   window.READY           → true khi texture/asset đã tải xong.
//   window.TOTAL_DURATION  → tổng thời lượng (giây).
//   window.seek(t)         → đưa MỌI track về thời điểm t rồi render đúng 1 frame (tất định).
//
// Yêu cầu: Node >= 18, `npm install` (puppeteer) trong scripts/, ffmpeg trong PATH.

import { existsSync, mkdirSync, rmSync, readFileSync } from 'node:fs';
import { execFileSync, spawnSync } from 'node:child_process';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

function parseArgs(argv) {
  const a = { width: 1920, height: 1080, keepFrames: false, audio: true };
  for (let i = 2; i < argv.length; i++) {
    const k = argv[i];
    if (k === '--project') a.project = argv[++i];
    else if (k === '--fps') a.fps = parseInt(argv[++i], 10);
    else if (k === '--width') a.width = parseInt(argv[++i], 10);
    else if (k === '--height') a.height = parseInt(argv[++i], 10);
    else if (k === '--keep-frames') a.keepFrames = true;
    else if (k === '--no-audio') a.audio = false;
    else throw new Error(`Tham số không hiểu: ${k}`);
  }
  if (!a.project) throw new Error('Thiếu --project <dir>');
  return a;
}

function have(cmd) {
  const r = spawnSync(cmd, ['-version'], { encoding: 'utf8' });
  return r.status === 0 || (r.stdout || r.stderr || '').length > 0;
}

async function main() {
  const args = parseArgs(process.argv);
  const projectDir = resolve(args.project);
  const htmlPath = join(projectDir, 'visual.html');
  const timingPath = join(projectDir, 'timing.json');
  if (!existsSync(htmlPath)) throw new Error(`Không thấy ${htmlPath}`);
  if (!have('ffmpeg')) throw new Error('Cần ffmpeg trong PATH.');

  let timing = {};
  if (existsSync(timingPath)) timing = JSON.parse(readFileSync(timingPath, 'utf8'));
  const fps = args.fps || timing.fps || 30;

  // Nạp puppeteer động để báo lỗi cài đặt rõ ràng.
  let puppeteer;
  try {
    puppeteer = (await import('puppeteer')).default;
  } catch {
    throw new Error(
      'Chưa cài puppeteer. Chạy: (cd scripts && npm install)\n' +
      'Puppeteer sẽ tự tải Chromium ở lần cài đầu.'
    );
  }

  const renderDir = join(projectDir, 'render');
  const framesDir = join(renderDir, 'frames');
  rmSync(framesDir, { recursive: true, force: true });
  mkdirSync(framesDir, { recursive: true });

  const browser = await puppeteer.launch({
    headless: 'new',
    args: [`--window-size=${args.width},${args.height}`, '--no-sandbox', '--use-gl=angle', '--enable-webgl', '--ignore-gpu-blocklist'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: args.width, height: args.height, deviceScaleFactor: 1 });

  page.on('pageerror', (e) => process.stderr.write(`  [page error] ${e.message}\n`));

  process.stderr.write(`  Mở visual.html...\n`);
  await page.goto(pathToFileURL(htmlPath).href, { waitUntil: 'networkidle2', timeout: 120000 });

  // Chờ asset tải xong + API seek sẵn sàng.
  await page.waitForFunction(
    'typeof window.seek === "function" && typeof window.TOTAL_DURATION === "number" && window.READY === true',
    { timeout: 120000 }
  ).catch(() => {
    throw new Error(
      'visual.html chưa expose window.seek / window.TOTAL_DURATION / window.READY. ' +
      'Cần visual-builder dựng theo hợp đồng seek tất định.'
    );
  });

  const total = args.fps
    ? (timing.totalDuration || (await page.evaluate('window.TOTAL_DURATION')))
    : (await page.evaluate('window.TOTAL_DURATION'));
  const totalFrames = Math.ceil(total * fps);
  process.stderr.write(`  Render ${totalFrames} frame @ ${fps}fps (${total.toFixed(1)}s, ${args.width}x${args.height})...\n`);

  for (let i = 0; i < totalFrames; i++) {
    const t = i / fps;
    await page.evaluate((tt) => window.seek(tt), t);
    // Một nhịp để shader/bloom cập nhật xong.
    await page.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))));
    const name = `f-${String(i).padStart(6, '0')}.png`;
    await page.screenshot({ path: join(framesDir, name) });
    if (i % fps === 0) process.stderr.write(`\r  ${i}/${totalFrames} frame (${(i / fps).toFixed(0)}s)   `);
  }
  process.stderr.write(`\r  ${totalFrames}/${totalFrames} frame ✓            \n`);
  await browser.close();

  // Ghép frames + audio bằng ffmpeg.
  const outPath = join(renderDir, 'final.mp4');
  const narration = timing.narration ? join(projectDir, timing.narration) : null;
  const useAudio = args.audio && narration && existsSync(narration);

  const ff = [
    '-y',
    '-framerate', String(fps),
    '-i', join(framesDir, 'f-%06d.png'),
  ];
  if (useAudio) ff.push('-i', narration);
  ff.push(
    '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '18', '-preset', 'medium',
    '-movflags', '+faststart'
  );
  if (useAudio) ff.push('-c:a', 'aac', '-b:a', '192k', '-shortest');
  ff.push(outPath);

  process.stderr.write(`  ffmpeg ghép video${useAudio ? ' + audio' : ' (câm)'}...\n`);
  execFileSync('ffmpeg', ff, { stdio: 'ignore' });

  if (!args.keepFrames) rmSync(framesDir, { recursive: true, force: true });

  process.stderr.write(`\n✓ ${outPath}\n  ${totalFrames} frame, ${total.toFixed(1)}s${useAudio ? ', có tiếng' : ', câm'}\n`);
}

main().catch((e) => { process.stderr.write(`\n✗ ${e.message}\n`); process.exit(1); });
