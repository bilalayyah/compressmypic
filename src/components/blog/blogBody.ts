// Shared helpers for blog article bodies (trusted HTML from the registry).
//
// BODY RULES (Batch 3 must follow): bodies MUST NOT contain an <h1> (the
// page title is the one <h1>); H2/H3 need `id` attributes for the TOC.
// ensureHeadingIds() adds missing ids defensively so the TOC always works
// even if an author forgets one — it never changes a body that already has
// ids. The prerender h1-count assertion (scripts/prerender.cjs) fails the
// build if a second <h1> ever slips through.

export interface BlogHeading {
  level: 2 | 3;
  id: string;
  text: string;
}

const LOCALE_FOR_DATE: Record<string, string> = {
  en: 'en-US',
  es: 'es-ES',
  pt: 'pt-BR',
  fr: 'fr-FR',
  de: 'de-DE',
  it: 'it-IT',
  id: 'id-ID',
  ru: 'ru-RU',
  ja: 'ja-JP',
  ko: 'ko-KR',
  zh: 'zh-CN',
};

export function formatBlogDate(dateStr: string, lang: string): string {
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString(LOCALE_FOR_DATE[lang] ?? 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

function slugifyHeading(text: string): string {
  return (
    stripHtml(text)
      .toLowerCase()
      .normalize('NFKD')
      .replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'section'
  );
}

/** Add id attributes to H2/H3 headings that lack one (slugified from the
 *  heading text, de-duplicated within the body). Returns the body unchanged
 *  when every heading already has an id. */
export function ensureHeadingIds(body: string): string {
  const used = new Set<string>();
  for (const m of body.matchAll(/<h[23][^>]*\sid="([^"]+)"[^>]*>/g)) {
    used.add(m[1]);
  }
  return body.replace(/<h([23])([^>]*)>(.*?)<\/h\1>/g, (match, level, attrs, inner) => {
    if (/\sid="[^"]+"/.test(attrs)) return match;
    const base = slugifyHeading(inner);
    let id = base;
    let n = 2;
    while (used.has(id)) {
      id = `${base}-${n}`;
      n += 1;
    }
    used.add(id);
    return `<h${level}${attrs} id="${id}">${inner}</h${level}>`;
  });
}

/** Extract H2/H3 headings (with their ids) for the table of contents. */
export function extractHeadings(body: string): BlogHeading[] {
  const out: BlogHeading[] = [];
  const re = /<h([23])[^>]*\sid="([^"]+)"[^>]*>(.*?)<\/h\1>/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(body)) !== null) {
    out.push({ level: Number(m[1]) as 2 | 3, id: m[2], text: stripHtml(m[3]) });
  }
  return out;
}

/** True when a body contains an <h1> — a build-time assertion target. */
export function bodyHasH1(body: string): boolean {
  return /<h1[\s>]/.test(body);
}
