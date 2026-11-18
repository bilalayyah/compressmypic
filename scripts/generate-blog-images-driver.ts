// Driver for the CompressMyPic article-images full batch (2026-11-18).
// Extracts all 1,584 (id, lang, title) triples — EN from BLOG_ARTICLES,
// localized titles from each locale's blog overrides — and writes them as
// jobs JSON chunks (~400 each) for scripts/generate-blog-images.py.
// Run: ./node_modules/.bin/tsx scripts/generate-blog-images-driver.ts
// Output: ~/workspace/compressmypic/fix-2026-11-18/article-images-work/jobs-chunk-*.json
import * as fs from 'node:fs';
import * as path from 'node:path';
import { BLOG_ARTICLES } from '../src/data/blogArticles';
import { ES_BLOG_OVERRIDES } from '../src/locales/es/blog';
import { PT_BLOG_OVERRIDES } from '../src/locales/pt/blog';
import { DE_BLOG_OVERRIDES } from '../src/locales/de/blog';
import { FR_BLOG_OVERRIDES } from '../src/locales/fr/blog';
import { ID_BLOG_OVERRIDES } from '../src/locales/id/blog';
import { IT_BLOG_OVERRIDES } from '../src/locales/it/blog';
import { RU_BLOG_OVERRIDES } from '../src/locales/ru/blog';
import { JA_BLOG_OVERRIDES } from '../src/locales/ja/blog';
import { KO_BLOG_OVERRIDES } from '../src/locales/ko/blog';
import { ZH_BLOG_OVERRIDES } from '../src/locales/zh/blog';

const OUT_DIR = '/home/hatch/workspace/compressmypic/fix-2026-11-18/article-images-work';
const CHUNK = 400;

const OVERRIDES: Record<string, Record<string, { title?: string }>> = {
  es: ES_BLOG_OVERRIDES,
  pt: PT_BLOG_OVERRIDES,
  de: DE_BLOG_OVERRIDES,
  fr: FR_BLOG_OVERRIDES,
  id: ID_BLOG_OVERRIDES,
  it: IT_BLOG_OVERRIDES,
  ru: RU_BLOG_OVERRIDES,
  ja: JA_BLOG_OVERRIDES,
  ko: KO_BLOG_OVERRIDES,
  zh: ZH_BLOG_OVERRIDES,
};

type Job = { id: string; lang: string; title: string };

const jobs: Job[] = [];
const missing: string[] = [];

for (const article of BLOG_ARTICLES) {
  const enTitle = article.en.title;
  if (!enTitle) {
    missing.push(`${article.id}:en (no EN title)`);
    continue;
  }
  jobs.push({ id: article.id, lang: 'en', title: enTitle });
  for (const [lang, overrides] of Object.entries(OVERRIDES)) {
    const title = overrides[article.id]?.title;
    if (!title) {
      missing.push(`${article.id}:${lang} (no localized title)`);
      continue;
    }
    jobs.push({ id: article.id, lang, title });
  }
}

console.log(`articles in registry: ${BLOG_ARTICLES.length}`);
console.log(`jobs extracted: ${jobs.length}`);
console.log(`missing titles: ${missing.length}`);
for (const m of missing) console.log(`  MISSING ${m}`);

fs.mkdirSync(OUT_DIR, { recursive: true });
const chunks: Job[][] = [];
for (let i = 0; i < jobs.length; i += CHUNK) chunks.push(jobs.slice(i, i + CHUNK));
chunks.forEach((chunk, idx) => {
  const file = path.join(OUT_DIR, `jobs-chunk-${idx + 1}.json`);
  fs.writeFileSync(file, JSON.stringify(chunk, null, 2), 'utf-8');
  console.log(`chunk ${idx + 1}: ${chunk.length} jobs -> ${file}`);
});
fs.writeFileSync(
  path.join(OUT_DIR, 'manifest.json'),
  JSON.stringify({ total: jobs.length, chunks: chunks.length, missing }, null, 2),
  'utf-8'
);
console.log('manifest written');
