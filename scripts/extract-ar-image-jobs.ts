// Ar-only image jobs extractor (Arabic CMP, 2026-11-22).
// Extracts the 141 (id, lang='ar', title) jobs from AR_BLOG_OVERRIDES
// and writes jobs-ar.json next to this script (in the clone).
// Run AFTER src/locales/ar/blog.ts exists:
//   ./node_modules/.bin/tsx scripts/extract-ar-image-jobs.ts
// Then: python3 scripts/generate-blog-images.py --jobs <out>/jobs-ar.json --out public/blog-images
import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { BLOG_ARTICLES } from '../src/data/blogArticles';
import { AR_BLOG_OVERRIDES } from '../src/locales/ar/blog';

type Job = { id: string; lang: string; title: string };

const jobs: Job[] = [];
const missing: string[] = [];

for (const article of BLOG_ARTICLES) {
  const title = AR_BLOG_OVERRIDES[article.id]?.title;
  if (!title) {
    missing.push(`${article.id}:ar (no Arabic title)`);
    continue;
  }
  jobs.push({ id: article.id, lang: 'ar', title });
}

console.log(`articles in registry: ${BLOG_ARTICLES.length}`);
console.log(`ar jobs extracted: ${jobs.length}`);
console.log(`missing titles: ${missing.length}`);
for (const m of missing) console.log(`  MISSING ${m}`);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'ar-image-jobs');
fs.mkdirSync(outDir, { recursive: true });
const file = path.join(outDir, 'jobs-ar.json');
fs.writeFileSync(file, JSON.stringify(jobs, null, 2), 'utf-8');
console.log(`jobs written -> ${file}`);
