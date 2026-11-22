// One-off generator (dev tool, not part of the build): extracts the
// route -> lazy page-component mapping from App.tsx's page router and
// prints TS literals for src/main.tsx (TOOL_PAGE_MODULES,
// LOCALIZED_PAGE_MODULES, DIRECTORY_PAGE_MODULES).
// Run: node scripts/generate-page-map.cjs
// Verifies counts against expectations; exits non-zero on mismatch.
// Blog pages (Batch 2) are intentionally NOT in the output: the three blog
// components are shared by all languages and resolve by route kind in
// main.tsx (BLOG_PAGE_MODULES) — the router's `blogRoute?.kind` branches
// match no branch pattern below, so the counts stay 47/87/11.
const fs = require('fs');
const path = require('path');
const appPath = path.join(__dirname, '..', 'src', 'App.tsx');
const src = fs.readFileSync(appPath, 'utf8');

// 1. component name -> module specifier (as written in App.tsx lazy imports)
const compToMod = new Map();
for (const m of src.matchAll(/const (\w+) = React\.lazy\(\(\) =>\s*\n?\s*import\('(\.\/pages\/[^']+)'\)/g)) {
  compToMod.set(m[1], m[2]);
}

// 2. router region only (between the Page Router comment and </Suspense>)
const start = src.indexOf('Page Router');
const end = src.indexOf('</Suspense>', start);
const router = src.slice(start, end);

// 3. branches: [optional lang] currentPath === 'X' ? ( ... <Component
const branches = [];
const branchRe = /(?:lang === '(\w+)' && )?currentPath === (?:'([^']+)'|([A-Z]+_ALL_TOOLS_PATH)) \? \(/g;
let m;
while ((m = branchRe.exec(router)) !== null) {
  const after = router.slice(m.index, m.index + 600);
  // First capitalized component tag, skipping a nested <Suspense> wrapper
  const comp = after.match(/<(?!Suspense\b)([A-Z]\w+)[\s/>]/);
  if (!comp) { console.error('NO COMPONENT for branch at', m.index, m[0]); process.exit(1); }
  branches.push({ lang: m[1] || null, path: m[2] || null, pathConst: m[3] || null, comp: comp[1] });
}

const LANG_FROM_CONST = {ES: 'es', PT: 'pt', FR: 'fr', DE: 'de', IT: 'it', ID: 'id', RU: 'ru', JA: 'ja', KO: 'ko', ZH: 'zh', HI: 'hi', AR: 'ar', TR: 'tr', VI: 'vi' };
const tools = new Map();       // enPath -> glob key (lang-independent)
const localized = new Map();   // `${lang}|${enPath}` -> glob key
const dirs = new Map();        // localized directory path -> glob key (filled below; path consts resolved via slugs)
const dirConsts = new Map();   // e.g. DE_ALL_TOOLS_PATH -> component
const EN_STATIC_PATHS = new Set([
  '/about',
  '/contact',
  '/privacy',
  '/terms',
  '/disclaimer',
  '/cookie-policy',
  '/all-tools',
  '/guides/compress-images-for-whatsapp',
  '/guides/jpg-vs-png-vs-webp',
  '/guides/reduce-image-size-to-100kb',
]);
for (const b of branches) {
  const mod = compToMod.get(b.comp);
  if (!mod) { console.error('NO MODULE for component', b.comp); process.exit(1); }
  const globKey = mod + '.tsx';
  if (b.pathConst) { dirConsts.set(b.pathConst, globKey); continue; }
  if (b.path === '/') continue; // home renders inline (renderHome) — no lazy page
  if (b.path === '/admin/comments') { localized.set('en|/admin/comments', globKey); continue; }
  if (b.lang) localized.set(`${b.lang}|${b.path}`, globKey);
  else if (EN_STATIC_PATHS.has(b.path)) localized.set(`en|${b.path}`, globKey);
  else tools.set(b.path, globKey);
}

// Directory paths: read from each locale's slugs.ts (ALL_TOOLS_PATH const)
for (const [prefix, lang] of Object.entries(LANG_FROM_CONST)) {
  const slugs = fs.readFileSync(path.join(__dirname, '..', 'src', 'locales', lang, 'slugs.ts'), 'utf8');
  const pm = slugs.match(new RegExp(`${prefix}_ALL_TOOLS_PATH = '([^']+)'`));
  if (!pm) { console.error('no directory path for', lang); process.exit(1); }
  const key = `${prefix}_ALL_TOOLS_PATH`;
  if (!dirConsts.has(key)) { console.error('no router branch for', key); process.exit(1); }
  dirs.set(pm[1], dirConsts.get(key));
}

console.log(`// branches parsed: ${branches.length} (tools ${tools.size}, localized ${localized.size}, dirs ${dirs.size})`);
if (tools.size !== 47) { console.error('EXPECTED 47 tools, got', tools.size); process.exit(1); }
if (localized.size !== 66 + 33 + 10 + 1) { console.error('EXPECTED 110 localized (66 legal + 33 guides + 10 EN static + admin), got', localized.size); process.exit(1); }
if (localized.size !== 60 + 30 + 10 + 1 + 9) { console.error('EXPECTED 110 localized (60 legal + 30 guides + 10 EN static + admin + 9 tr), got', localized.size); process.exit(1); }
if (dirs.size !== 11) { console.error('EXPECTED 11 dirs, got', dirs.size); process.exit(1); }
const sorted = (map) => [...map.entries()].sort((a, b) => (a[0] < b[0] ? -1 : 1));
const obj = (map) => '{\n' + sorted(map).map(([k, v]) => `  '${k}': '${v}',`).join('\n') + '\n}';
console.log('export const TOOL_PAGE_MODULES: Record<string, string> = ' + obj(tools) + ';');
console.log('export const LOCALIZED_PAGE_MODULES: Record<string, string> = ' + obj(localized) + ';');
console.log('export const DIRECTORY_PAGE_MODULES: Record<string, string> = ' + obj(dirs) + ';');
