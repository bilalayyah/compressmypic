import React, { useEffect, useRef } from 'react';
import type { SupportedLang } from '../locales/config';

/**
 * Comments section powered by Giscus (free, GitHub Discussions-based).
 * One discussion thread per page URL (mapping="pathname"), so every tool
 * in every language gets its own thread. No backend, no database, no ads.
 * Commenters sign in with GitHub. Theme follows the site's light/dark
 * toggle (custom pastel theme CSS hosted in public/: giscus-light.css
 * and giscus-dark.css, built from Giscus's official Primer theme files)
 * via a MutationObserver on <html data-theme>.
 *
 * Repo/category IDs come from https://giscus.app (repo must be public,
 * Discussions enabled, Giscus app installed, "Comments" category created).
 */

const GISCUS_REPO = 'bilalayyah/compressmypic';
const GISCUS_REPO_ID = 'R_kgDOVrHeMw';
const GISCUS_CATEGORY = 'Comments';
const GISCUS_CATEGORY_ID = 'DIC_kwDOVrHeM84DLHge';

interface CommentsProps {
  /** Current page path (e.g. "/image-resizer" or "/de/bildgroesse-aendern"). Used to remount per page. */
  pagePath: string;
  /** Active language, passed to Giscus so its UI chrome is localized. */
  lang?: SupportedLang;
}

function giscusTheme(): string {
  if (typeof window === 'undefined') return 'https://compressmypic.online/giscus-light.css';
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  return `${window.location.origin}/giscus-${isDark ? 'dark' : 'light'}.css`;
}

export const Comments: React.FC<CommentsProps> = ({ pagePath, lang = 'en' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Fresh load per page (the component is keyed by pagePath, and this
    // effect re-runs when the path changes, so the thread always matches
    // the page being viewed).
    container.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.setAttribute('data-repo', GISCUS_REPO);
    script.setAttribute('data-repo-id', GISCUS_REPO_ID);
    script.setAttribute('data-category', GISCUS_CATEGORY);
    script.setAttribute('data-category-id', GISCUS_CATEGORY_ID);
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'top');
    script.setAttribute('data-theme', giscusTheme());
    script.setAttribute('data-lang', lang);
    script.setAttribute('data-loading', 'lazy');
    container.appendChild(script);

    // Keep the Giscus iframe theme in sync with the site's light/dark toggle.
    const observer = new MutationObserver(() => {
      const iframe = container.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
      iframe?.contentWindow?.postMessage(
        { giscus: { setConfig: { theme: giscusTheme() } } },
        'https://giscus.app',
      );
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => {
      observer.disconnect();
      container.innerHTML = '';
    };
  }, [pagePath, lang]);

  return <div ref={containerRef} className="giscus" />;
};
