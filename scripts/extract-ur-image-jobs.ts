// Ur-only image jobs extractor (Urdu CMP, 2026-11-22).
// Extracts the 141 (id, lang='ur', title) jobs from UR_BLOG_OVERRIDES
// and writes jobs-ur.json next to this script (in the clone).
// Run AFTER src/locales/ur/blog.ts exists:
//   ./node_modules/.bin/tsx scripts/extract-ur-image-jobs.ts
// Then: python3 scripts/generate-blog-images.py --jobs <out>/jobs-ur.json --out public/blog-images
import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { BLOG_ARTICLES } from '../src/data/blogArticles';
import { UR_BLOG_OVERRIDES } from '../src/locales/ur/blog';

type Job = { id: string; lang: string; title: string };

const jobs: Job[] = [];
const missing: string[] = [];

for (const article of BLOG_ARTICLES) {
  const title = UR_BLOG_OVERRIDES[article.id]?.title;
  if (!title) {
    missing.push(`${article.id}:ur (no Urdu title)`);
    continue;
  }
  jobs.push({ id: article.id, lang: 'ur', title });
}

console.log(`articles in registry: ${BLOG_ARTICLES.length}`);
console.log(`ur jobs extracted: ${jobs.length}`);
console.log(`missing titles: ${missing.length}`);
for (const m of missing) console.log(`  MISSING ${m}`);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'ur-image-jobs');
fs.mkdirSync(outDir, { recursive: true });
const file = path.join(outDir, 'jobs-ur.json');
fs.writeFileSync(file, JSON.stringify(jobs, null, 2), 'utf-8');
console.log(`jobs written -> ${file}`);
