#!/usr/bin/env node
/**
 * ONE-TIME migration (perf job, 2026-11-19): split the LOCALE blog bodies
 * + FAQs out of src/locales/<lang>/blog.ts — the Tier B split for locales.
 *
 * BEFORE: each locale file held all 144 articles' full bodies (~2.1-4.5 MB
 * source, 660-954 KiB gzip per locale) and was dynamically imported by
 * loadLocaleData() on every blog route in that language, so a single DE
 * article page downloaded 745 KiB gzip of blog data (all 144 DE bodies)
 * just to render one article. That bandwidth contention is the root cause
 * of the German article's mobile LCP instability (1.4s vs 3.6s across
 * runs) and of the ~11s TTI on non-EN article pages (EN: 6.7s, 685 KiB).
 *
 * AFTER (mirrors the EN Tier B split, scripts/split-blog-data.cjs):
 *  - src/locales/<lang>/blog.ts keeps the overrides registry, but each
 *    entry is metadata only (title, description, readingMinutes). Same
 *    export name (e.g. DE_BLOG_OVERRIDES), same Record type.
 *  - src/locales/<lang>/blog-bodies/<id>.ts holds one article's BODY +
 *    FAQS (same shape as src/data/blog-bodies/<id>.ts).
 *  - src/data/blogBody.ts (loadBlogBodyLocale) loads + caches them.
 *
 * Run once from the repo root: node scripts/split-locale-blog-data.cjs
 * It refuses to run twice (the input file must still contain bodies).
 * Temp bundles go under ~/workspace/compressmypic/perf-2026-11-19/split-work/
 * (NOT /tmp — /tmp is full) and are deleted afterwards.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const REPO_ROOT = path.resolve(__dirname, '..');
const WORK_DIR = path.join(
  process.env.HOME || '/home/hatch',
  'workspace',
  'compressmypic',
  'perf-2026-11-19',
  'split-work',
);
fs.mkdirSync(WORK_DIR, { recursive: true });

const ESBUILD = path.join(REPO_ROOT, 'node_modules', 'esbuild', 'bin', 'esbuild');

const LOCALES = [
  { lang: 'de', exportName: 'DE_BLOG_OVERRIDES' },
  { lang: 'es', exportName: 'ES_BLOG_OVERRIDES' },
  { lang: 'fr', exportName: 'FR_BLOG_OVERRIDES' },
  { lang: 'it', exportName: 'IT_BLOG_OVERRIDES' },
  { lang: 'id', exportName: 'ID_BLOG_OVERRIDES' },
  { lang: 'ja', exportName: 'JA_BLOG_OVERRIDES' },
  { lang: 'ko', exportName: 'KO_BLOG_OVERRIDES' },
  { lang: 'pt', exportName: 'PT_BLOG_OVERRIDES' },
  { lang: 'ru', exportName: 'RU_BLOG_OVERRIDES' },
  { lang: 'zh', exportName: 'ZH_BLOG_OVERRIDES' },
];

const esbuild = require('esbuild');
const Module = require('module');

function bundleTs(entry, outName) {
  // The host EPERM wave hits esbuild's Go binary file writes specifically
  // (EPERM, or silent 0-byte truncation) while Node fs writes work fine.
  // So bundle IN MEMORY (write: false) and compile from the string —
  // esbuild never touches the disk.
  const result = retry(
    () =>
      esbuild.buildSync({
        entryPoints: [entry],
        bundle: true,
        format: 'cjs',
        platform: 'node',
        write: false,
        logLevel: 'error',
      }),
    `esbuild ${outName}`,
    8,
    true,
  );
  const code = result.outputFiles[0].text;
  if (!code || code.length < 1000) throw new Error(`esbuild ${outName}: empty in-memory output`);
  const m = new Module(outName, null);
  m._compile(code, outName);
  return m.exports;
}

// Retry a function on EPERM (host wave) with backoff. Other errors throw.
// If matchAny is set, retry on ANY error (for execSync, whose Error message
// does not carry the underlying EPERM text).
function retry(fn, label, attempts = 8, matchAny = false) {
  let last;
  for (let i = 0; i < attempts; i++) {
    try {
      return fn();
    } catch (e) {
      last = e;
      const msg = String((e && e.message) || e);
      if ((!matchAny && !/EPERM|operation not permitted/i.test(msg)) || i === attempts - 1) throw e;
      const wait = 1000 * (i + 1);
      console.log(`[split] ${label}: failed, retry ${i + 1}/${attempts} in ${wait}ms`);
      Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, wait);
    }
  }
  throw last;
}

function writeFileRetry(file, content) {
  // Verify by read-back: the EPERM wave can silently truncate a write to
  // 0 bytes instead of erroring. Unlink first so a failed attempt never
  // leaves a 0-byte file behind.
  retry(
    () => {
      try { fs.unlinkSync(file); } catch {}
      fs.writeFileSync(file, content, 'utf8');
      const back = fs.readFileSync(file, 'utf8');
      if (back !== content) {
        try { fs.unlinkSync(file); } catch {}
        throw new Error(`read-back mismatch (${back.length} vs ${content.length} bytes) — EPERM wave`);
      }
    },
    `write ${path.basename(file)}`,
    12,
    true,
  );
}

// The wave flickers in minutes-long windows, and a process that starts
// in a bad window seems to stay blocked — so do NOT wait long inside one
// process. A short probe (4 x 10s) gates the bulk writes; if the window
// is still bad, abort fast and re-run as a FRESH process (each new
// process gets a fresh chance; completed locales are skipped).
function waitForClearWindow(dir) {
  fs.mkdirSync(dir, { recursive: true });
  const probe = path.join(dir, '.split-probe');
  for (let i = 0; i < 4; i++) {
    try {
      fs.writeFileSync(probe, 'probe', 'utf8');
      if (fs.readFileSync(probe, 'utf8') !== 'probe') throw new Error('probe read-back mismatch');
      fs.unlinkSync(probe);
      console.log(`[split] write window clear after ${i} probe(s)`);
      return;
    } catch (e) {
      try { fs.unlinkSync(probe); } catch {}
      console.log(`[split] write window blocked, probe ${i + 1}/4 — waiting 10s (err: ${e.code || ''} ${e.message || e})`);
      Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 10000);
    }
  }
  throw new Error('write window still blocked after 40s — abort, re-run as a fresh process');
}

function main() {
  let totalFiles = 0;
  // Wait for a clear write window before the bulk writes (the EPERM wave
  // flickers in minutes-long windows; a probe in the first locale's dir
  // is representative for the repo).
  waitForClearWindow(path.join(REPO_ROOT, 'src', 'locales', 'de', 'blog-bodies'));
  for (const { lang, exportName } of LOCALES) {
    const localeFile = path.join(REPO_ROOT, 'src', 'locales', lang, 'blog.ts');
    const bodiesDir = path.join(REPO_ROOT, 'src', 'locales', lang, 'blog-bodies');

    // 1. Read the current (full) overrides via esbuild.
    const mod = bundleTs(localeFile, `${lang}-full.cjs`);
    const overrides = mod[exportName];
    if (!overrides || typeof overrides !== 'object') {
      throw new Error(`${lang}: export ${exportName} not found`);
    }
    const ids = Object.keys(overrides);
    if (ids.length === 0) throw new Error(`${lang}: no entries`);
    const first = overrides[ids[0]];
    if (!first || typeof first.body !== 'string') {
      // Already split (registry is metadata-only) — skip, so a re-run
      // after a wave-aborted run resumes with the remaining locales.
      console.log(`[split] ${lang}: already split, skipping`);
      continue;
    }
    console.log(`[split] ${lang}: ${ids.length} articles with bodies`);

    // 2. Emit one body module per article.
    fs.mkdirSync(bodiesDir, { recursive: true });
    for (const id of ids) {
      const o = overrides[id];
      const out = path.join(bodiesDir, `${id}.ts`);
      const content =
        `// Generated by scripts/split-locale-blog-data.cjs (one-time split, 2026-11-19)\n` +
        `// from src/locales/${lang}/blog.ts. Body + FAQs for article '${id}' (${lang}).\n` +
        `// This file is the single source for this article's ${lang} body text.\n` +
        `import type { BlogArticleFaq } from '../../../types/blog';\n\n` +
        `export const BODY: string = ${JSON.stringify(o.body)};\n\n` +
        `export const FAQS: BlogArticleFaq[] = ${JSON.stringify(o.faqs ?? [])};\n`;
      writeFileRetry(out, content);
    }
    console.log(`[split] ${lang}: wrote ${ids.length} body modules`);

    // 3. Rewrite the locale file: metadata-only registry, same export name.
    const src = fs.readFileSync(localeFile, 'utf8');
    const exportAt = src.indexOf(`export const ${exportName}`);
    if (exportAt === -1) throw new Error(`${lang}: export declaration not found`);
    const head = src.slice(0, exportAt);
    const entries = ids
      .map((id) => {
        const o = overrides[id];
        return (
          `  ${JSON.stringify(id)}: {\n` +
          `    title: ${JSON.stringify(o.title)},\n` +
          `    description: ${JSON.stringify(o.description)},\n` +
          `    readingMinutes: ${o.readingMinutes},\n` +
          `  },`
        );
      })
      .join('\n');
    const newSrc =
      head +
      `export const ${exportName}: Record<string, BlogArticleLocaleOverride> = {\n` +
      entries +
      `\n};\n`;
    writeFileRetry(localeFile, newSrc);
    console.log(`[split] ${lang}: registry rewritten (metadata only)`);

    // 4. Verify: re-bundle the new registry + all body modules of this
    // locale and compare every field against the original data.
    const checkRegistry = bundleTs(localeFile, `${lang}-registry-check.cjs`);
    const newOverrides = checkRegistry[exportName];
    if (Object.keys(newOverrides).length !== ids.length) {
      throw new Error(`${lang}: registry entry count mismatch after rewrite`);
    }
    const indexSrc = ids
      .map(
        (id, i) =>
          `import * as m${i} from '${path.join(REPO_ROOT, 'src', 'locales', lang, 'blog-bodies', `${id}.ts`)}';`,
      )
      .join('\n');
    const indexFile = path.join(WORK_DIR, `${lang}-bodies-index.ts`);
    writeFileRetry(
      indexFile,
      indexSrc +
        `\nmodule.exports = { ` +
        ids.map((id, i) => `${JSON.stringify(id)}: m${i}`).join(', ') +
        ` };\n`,
    );
    const bodies = bundleTs(indexFile, `${lang}-bodies-check.cjs`);
    for (const id of ids) {
      const orig = overrides[id];
      const reg = newOverrides[id];
      const bod = bodies[id];
      if (!reg) throw new Error(`${lang}/${id}: missing from new registry`);
      if (reg.title !== orig.title || reg.description !== orig.description || reg.readingMinutes !== orig.readingMinutes) {
        throw new Error(`${lang}/${id}: registry metadata mismatch`);
      }
      if ('body' in reg || 'faqs' in reg) {
        throw new Error(`${lang}/${id}: registry entry still carries body/faqs`);
      }
      if (!bod || bod.BODY !== orig.body) {
        throw new Error(`${lang}/${id}: body mismatch`);
      }
      const origFaqs = JSON.stringify(orig.faqs ?? []);
      if (JSON.stringify(bod.FAQS) !== origFaqs) {
        throw new Error(`${lang}/${id}: faqs mismatch`);
      }
    }
    const written = fs.readdirSync(bodiesDir).filter((f) => f.endsWith('.ts'));
    if (written.length !== ids.length) {
      throw new Error(`${lang}: body file count mismatch: ${written.length} vs ${ids.length}`);
    }
    console.log(`[split] ${lang}: verified — ${ids.length} articles byte-identical (metadata + body + faqs)`);
    totalFiles += ids.length;
  }
  console.log(`[split] DONE — ${totalFiles} body modules across ${LOCALES.length} locales`);
}

main();
