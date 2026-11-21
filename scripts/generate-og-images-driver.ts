// Driver for the CompressMyPic per-tool og cards (redesign 2026-11-21).
// Extracts all 47 (slug, name) pairs from TOOLS_REGISTRY and writes a jobs
// JSON for: python3 scripts/generate-blog-images.py --jobs <file> --out public --og
// (output: public/og-<slug>.png, title = tool name, same red house style
// as the article cards). The home slug '/' is excluded — it uses og-image.png.
// Run: ./node_modules/.bin/tsx scripts/generate-og-images-driver.ts
import * as fs from 'node:fs';
import * as path from 'node:path';
import { TOOLS_REGISTRY } from '../src/data/tools';

const OUT_DIR = '/home/hatch/workspace/compressmypic/redesign-2026-11-21/article-images-work';

type Job = { id: string; lang: string; title: string };

const jobs: Job[] = TOOLS_REGISTRY.filter((t) => t.slug !== '/').map((t) => ({
  id: t.slug.slice(1),
  lang: 'en',
  title: t.name,
}));

console.log(`tools in registry: ${TOOLS_REGISTRY.length}`);
console.log(`og jobs: ${jobs.length}`);
for (const j of jobs) console.log(`  ${j.id}: ${j.title}`);

fs.mkdirSync(OUT_DIR, { recursive: true });
const file = path.join(OUT_DIR, 'og-jobs.json');
fs.writeFileSync(file, JSON.stringify(jobs, null, 2), 'utf-8');
console.log(`jobs written -> ${file}`);
