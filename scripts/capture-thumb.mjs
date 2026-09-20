// Chụp một HTML thumbnail -> PNG 1280x720 (DSF 2 cho nét), rồi hạ cỡ + xuất JPG bằng ffmpeg.
//   node scripts/capture-thumb.mjs [--html <file>] [--out <png>]
// Mặc định: --html output/thumbnail.html  --out output/thumbnail.png
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
await browser.close();
console.log('✓', out);
