// FAQPage JSON-LD node builder — shared by the client head effect
// (src/App.tsx) and the SSR prerender (src/entry-server.tsx +
// scripts/prerender-ssr.cjs), so both emit byte-identical nodes.
//
// Background (audit Issue #3, 2026-11-19): the page JSON-LD is emitted by
// a client-side useEffect, so SSR renderToString never produces it and
// the SSR prerender carries the head from old Chromium-captured
// snapshots. Those snapshots were captured when the effect ran once at
// mount before the article body had loaded, so EN article heads were
// captured WITHOUT FAQPage (0/145) — the effect never re-ran for EN
// (its deps never change), while localized routes re-ran it after the
// locale load, once the body had arrived (144/145). The prerender repair
// pass regenerates the missing node from the real data instead of
// trusting the stale head.
import type { BlogArticleFaq } from '../types/blog';

/** Strip HTML tags + collapse whitespace, exactly as the head effect does. */
export function stripFaqAnswerText(answer: string): string {
  return answer.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

export function buildFaqPageNode(args: {
  faqs: BlogArticleFaq[];
  heading: string;
  url: string;
}): Record<string, unknown> {
  return {
    '@type': 'FAQPage',
    name: args.heading,
    url: args.url,
    mainEntity: args.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: stripFaqAnswerText(f.answer),
      },
    })),
  };
}
