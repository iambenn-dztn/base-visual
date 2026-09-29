// Chụp một HTML thumbnail -> PNG 1280x720 (DSF 2 cho nét), rồi hạ cỡ + xuất JPG bằng ffmpeg.
//   node scripts/capture-thumb.mjs [--html <file>] [--out <png>] [--half <png>]
// Mặc định: --html output/thumbnail.html  --out output/thumbnail.png
// --half: xuất thêm ảnh CHỈ NỬA TRÊN (1280x360) để chạy "bài test 50%" — giao diện TV chỉ hiện
//         nửa trên thumbnail ở trang chủ. Xem mục TƯ DUY THUMBNAIL trong .claude/agents/render.md.
import puppeteer from './node_modules/puppeteer/lib/esm/puppeteer/puppeteer.js';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const arg = (n, d) => { const i = process.argv.indexOf(n); return i >= 0 ? process.argv[i + 1] : d; };
// tương thích ngược: argv[2] không phải cờ thì coi là --out
const posOut = process.argv[2] && !process.argv[2].startsWith('--') ? process.argv[2] : null;
const html = resolve(arg('--html', 'output/thumbnail.html'));
const out = resolve(arg('--out', posOut || 'output/thumbnail.png'));

const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 720, deviceScaleFactor: 2 });
await page.goto(pathToFileURL(html).href, { waitUntil: 'networkidle0', timeout: 60000 });
await page.evaluate(() => document.fonts && document.fonts.ready);
await page.screenshot({ path: out, clip: { x: 0, y: 0, width: 1280, height: 720 } });
console.log('✓', out);
const half = arg('--half', null);
if (half) {
  const halfOut = resolve(half);
  await page.screenshot({ path: halfOut, clip: { x: 0, y: 0, width: 1280, height: 360 } });
  console.log('✓ nửa trên (bài test 50%):', halfOut);
}
await browser.close();
