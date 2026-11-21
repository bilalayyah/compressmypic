import React, { useEffect, useMemo, useState } from 'react';
import { TOOL_BY_SLUG } from '../data/tools';
import type { SupportedLang } from '../locales/config';
import { localizePath } from '../locales/alternates';

interface NotFoundPageProps {
  onNavigate?: (path: string) => void;
  lang?: SupportedLang;
  /** Target for the "Browse all tools" link: the localized directory page,
   *  or '/all-tools' for English (EN has a dedicated /all-tools page). */
  allToolsPath?: string;
}

/**
 * 404 page rendered by App.tsx for any URL with no known route (English or
 * localized). Sets its own title + a robots `noindex, nofollow` meta tag so
 * unknown URLs are never indexed, and restores the previous robots content
 * when the user navigates away.
 */
export const NotFoundPage: React.FC<NotFoundPageProps> = ({
  onNavigate,
  lang,
  allToolsPath,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    document.title = 'Page Not Found — CompressMyPic';
    let robots = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    const previousContent = robots?.getAttribute('content') ?? null;
    const created = !robots;
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      document.head.appendChild(robots);
    }
    const metaEl: HTMLMetaElement = robots;
    metaEl.setAttribute('content', 'noindex, nofollow');
    return () => {
      if (created) {
        metaEl.remove();
      } else if (previousContent !== null) {
        metaEl.setAttribute('content', previousContent);
      }
    };
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    return Object.values(TOOL_BY_SLUG)
      .filter(
        (tool) =>
          tool.name.toLowerCase().includes(q) ||
          tool.h1.toLowerCase().includes(q) ||
          tool.slug.toLowerCase().includes(q.replace(/\s+/g, '-'))
      )
      .slice(0, 6);
  }, [query]);

  const go = (path: string) => (e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  const directoryPath = allToolsPath ?? '/all-tools';
  const homeHref = lang && lang !== 'en' ? `/${lang}/` : '/';

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
      <p className="text-7xl sm:text-8xl font-sans font-bold text-[#dc2626] dark:text-[#fca5a5] leading-none">
        404
      </p>
      <h1 className="mt-6 text-2xl sm:text-3xl font-sans font-bold text-[var(--ink-navy)]">
        Page not found
      </h1>
      <p className="mt-3 text-base text-[var(--ink-2)] leading-relaxed">
        Sorry — the page you were looking for doesn&apos;t exist or was moved. The
        link may be mistyped, or the tool may have a new address.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
        <a
          href={homeHref}
          onClick={go('/')}
          className="inline-flex items-center justify-center px-5 py-3 btn-purple-grad text-sm font-semibold shadow-sm cursor-pointer"
        >
          Go to Home
        </a>
        <a
          href={directoryPath}
          onClick={go(directoryPath)}
          className="inline-flex items-center justify-center px-5 py-3 bg-[var(--surface-2)] border border-[var(--line)] hover:border-[#dc2626] text-[var(--ink-navy)] text-sm font-semibold rounded-[11px] cursor-pointer transition-colors"
        >
          Browse all tools
        </a>
      </div>

      <div className="mt-10 text-start">
        <label
          htmlFor="not-found-search"
          className="block text-xs font-bold uppercase tracking-wider text-[var(--ink-3)]"
        >
          Or search for a tool
        </label>
        <input
          id="not-found-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Try “image resizer”, “jpg to png”, “pdf”…"
          className="mt-2 w-full px-4 py-3 rounded-[11px] border border-[var(--line-strong)] bg-[var(--surface)] text-[var(--ink)] text-sm outline-none focus:border-[#dc2626]"
        />
        {results.length > 0 && (
          <ul className="mt-3 divide-y divide-[var(--line)] rounded-[11px] border border-[var(--line)] bg-[var(--surface)] overflow-hidden">
            {results.map((tool) => (
              <li key={tool.slug}>
                <a
                  href={localizePath(tool.slug, lang ?? 'en')}
                  onClick={go(tool.slug)}
                  className="block px-4 py-3 text-sm font-semibold text-[#b91c1c] dark:text-[#fca5a5] hover:bg-[var(--surface-2)] cursor-pointer"
                >
                  {tool.name}
                  <span className="block text-xs font-normal text-[var(--ink-3)]">
                    {tool.shortDescription}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        )}
        {query.trim().length >= 2 && results.length === 0 && (
          <p className="mt-3 text-sm text-[var(--ink-3)]">
            No tool matches “{query.trim()}”. Try a different word, or start from
            the home page.
          </p>
        )}
      </div>
    </div>
  );
};
