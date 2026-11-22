// Table of contents for an article page — H2/H3 headings with ids,
// extracted from the (id-ensured) body. Renders nothing for articles with
// fewer than 2 headings.
import React from 'react';
import { useBlog } from './BlogContext';
import { extractHeadings } from './blogBody';

interface ArticleTOCProps {
  /** Body with heading ids already ensured (see ensureHeadingIds). */
  body: string;
}

export function ArticleTOC({ body }: ArticleTOCProps) {
  const { strings } = useBlog();
  const headings = extractHeadings(body);
  if (headings.length < 2) return null;

  return (
    <nav aria-label={strings.tableOfContents} className="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-5 shadow-[var(--shadow)]">
      <p className="text-sm font-bold mb-3">{strings.tableOfContents}</p>
      <ul className="space-y-2 text-sm">
        {headings.map((h) => (
          <li key={h.id} className={h.level === 3 ? 'ps-4' : ''}>
            <a href={`#${h.id}`} className="text-[var(--ink-2)] hover:text-[#dc2626] transition-colors">
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
