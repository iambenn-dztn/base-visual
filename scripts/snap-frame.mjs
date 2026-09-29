// Chụp 1 frame của composition index.html ở thời điểm t (không phụ đề/nhãn chương) -> PNG 1920x1080.
//   node scripts/snap-frame.mjs --t 98.3 --out output/_assets/<slug>/frame.png [--t2 100.5 --out2 ...]
import puppeteer from './node_modules/puppeteer/lib/esm/puppeteer/puppeteer.js';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
import fs from 'node:fs';
const arg = (n, d) => { const i = process.argv.indexOf(n); return i >= 0 ? process.argv[i + 1] : d; };
const shots = [];
for (let k = 1; k <= 4; k++) { const t = arg(k === 1 ? '--t' : '--t' + k, null); const o = arg(k === 1 ? '--out' : '--out' + k, null); if (t && o) shots.push({ t: +t, out: resolve(o) }); }
const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--allow-file-access-from-files', '--ignore-gpu-blocklist', '--use-gl=angle', '--use-angle=d3d11', '--enable-gpu-rasterization'] });
const page = await browser.newPage();
page.on('console', m => { if (m.type() === 'error') console.log('[page]', m.text()); });
await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1 });
await page.goto(pathToFileURL(resolve('index.html')).href, { waitUntil: 'networkidle0', timeout: 120000 });
await page.waitForFunction(() => { try { return [texMoon, texDay, texCloud, texBump, texSpec].every(t => t.image && (t.image.complete !== false) && t.image.width > 0); } catch (e) { return false; } }, { timeout: 60000 });
const tweak = arg('--tweak', null); if (tweak) await page.evaluate(fs.readFileSync(resolve(tweak), 'utf8'));
await page.evaluate(() => { document.getElementById('sub').style.display = 'none'; document.getElementById('chap').style.display = 'none'; });
for (const s of shots) {
  await page.evaluate(t => { renderAtTime(t); renderAtTime(t); }, s.t);
  const el = await page.$('#root');
  await el.screenshot({ path: s.out });
  console.log('✓ t=' + s.t, s.out);
}
await browser.close();
