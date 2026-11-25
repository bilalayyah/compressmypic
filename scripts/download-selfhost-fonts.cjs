// Download self-hosted woff2 files (latin subsets only) for Inter / JetBrains Mono / Great Vibes.
// Fetches the Google Fonts css2 with a Chrome UA through the local relay, parses the latin
// @font-face blocks (unicode-range U+0000-00FF), downloads the woff2 files, verifies magic bytes.
'use strict';
const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

const OUT = path.resolve(__dirname, '..', 'public', 'fonts');
fs.mkdirSync(OUT, { recursive: true });

const CSS2 = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&family=Great+Vibes&display=swap';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

function curl(url, outFile) {
  const args = ['-s', '-x', 'http://127.0.0.1:18080', '-A', UA, '--max-time', '60'];
  if (outFile) args.push('-o', outFile);
  args.push(url);
  execFileSync('curl', args, { stdio: 'inherit' });
}

const cssPath = path.join(OUT, '.css2.tmp');
curl(CSS2, cssPath);
const css = fs.readFileSync(cssPath, 'utf8');
console.log(`css2: ${css.length} chars`);

// Parse @font-face blocks; keep the latin one (unicode-range starting U+0000-00FF).
const blocks = css.match(/\/\* [a-z-]+ \*\/\s*@font-face\s*{[^}]*}/g) || [];
console.log(`@font-face blocks: ${blocks.length}`);
const wanted = [];
for (const b of blocks) {
  const fam = (b.match(/font-family:\s*'([^']+)'/) || [])[1];
  const weight = (b.match(/font-weight:\s*(\d+)/) || [])[1];
  const range = (b.match(/unicode-range:\s*([^;]+);/) || [])[1] || '';
  const url = (b.match(/url\((https:[^)]+\.woff2)\)/) || [])[1];
  const subset = (b.match(/\/\* ([a-z-]+) \*\//) || [])[1];
  if (!fam || !weight || !url) continue;
  if (subset !== 'latin') continue; // latin only
  const file = `${fam.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${weight}.woff2`;
  wanted.push({ fam, weight, url, file });
  console.log(`latin: ${fam} ${weight} -> ${file} (${url.slice(0, 70)}...)`);
}
if (wanted.length !== 9) {
  console.error(`expected 9 latin files (Inter 5 + JetBrains Mono 3 + Great Vibes 1), got ${wanted.length}`);
  process.exit(1);
}
for (const w of wanted) {
  const dest = path.join(OUT, w.file);
  curl(w.url, dest);
  const buf = fs.readFileSync(dest);
  const magic = buf.slice(0, 4).toString('ascii');
  const ok = magic === 'wOF2' && buf.length > 10000 && buf.length < 120000;
  console.log(`${w.file}: ${buf.length} bytes magic=${magic} ${ok ? 'OK' : 'BAD'}`);
  if (!ok) process.exit(1);
}
fs.unlinkSync(cssPath);
console.log('ALL FONTS OK');
