// Anonymous comments — no account, no sign-in. A visitor types a name and a
// comment and posts it. Comments are stored in the site's own Cloudflare
// Worker + KV backend (see ~/workspace/compressmypic/comments-work/worker/).
// The component is styled with the site's own CSS variables, so it matches
// the pastel theme in light and dark mode automatically — no iframe, no
// third-party widget. One thread per page (pagePath = the canonical path,
// so every tool × language has its own comments).

import React, { useCallback, useEffect, useState } from 'react';
import { getPastelTileClass } from '../utils/pastel';
import type { SupportedLang } from '../locales/config';

export interface CommentStrings {
  title: string;
  note: string;
  namePlaceholder: string;
  textPlaceholder: string;
  submit: string;
  posting: string;
  empty: string;
  posted: string;
  loadError: string;
  postError: string;
  retry: string;
  loading: string;
}

export const EN_COMMENT_STRINGS: CommentStrings = {
  title: 'Comments',
  note: 'Share your thoughts about this tool — just write your name and post. No account needed.',
  namePlaceholder: 'Your name',
  textPlaceholder: 'Write your comment…',
  submit: 'Post comment',
  posting: 'Posting…',
  empty: 'Be the first to comment.',
  posted: 'Thanks! Your comment is live.',
  loadError: 'Comments couldn’t be loaded. Please try again.',
  postError: 'Couldn’t post your comment. Please try again.',
  retry: 'Retry',
  loading: 'Loading comments…',
};

interface Comment {
  id: string;
  name: string;
  text: string;
  ts: number;
}

const API_BASE =
  (import.meta as unknown as { env?: Record<string, string | undefined> }).env?.VITE_COMMENTS_API_URL ||
  'https://compressmypic-comments.bilalayyah.workers.dev';

const NAME_STORAGE_KEY = 'cmp-comment-name';

function formatDate(ts: number, lang: string): string {
  try {
    return new Date(ts).toLocaleString(lang, { dateStyle: 'medium', timeStyle: 'short' });
  } catch {
    return new Date(ts).toLocaleString();
  }
}

export const Comments: React.FC<{
  pagePath: string;
  lang: SupportedLang;
  strings?: Partial<CommentStrings>;
}> = ({ pagePath, lang, strings }) => {
  const s: CommentStrings = { ...EN_COMMENT_STRINGS, ...strings };
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [name, setName] = useState(() => {
    try {
      return localStorage.getItem(NAME_STORAGE_KEY) || '';
    } catch {
      return '';
    }
  });
  const [text, setText] = useState('');
  const [posting, setPosting] = useState(false);
  const [postError, setPostError] = useState('');
  const [posted, setPosted] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    setLoadError(false);
    try {
      const res = await fetch(`${API_BASE}/comments?page=${encodeURIComponent(pagePath)}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = (await res.json()) as { comments?: Comment[] };
      setComments(Array.isArray(data.comments) ? data.comments : []);
    } catch {
      setLoadError(true);
    } finally {
      setLoading(false);
    }
  }, [pagePath]);

  useEffect(() => {
    load();
  }, [load]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = name.trim();
    const cleanText = text.trim();
    if (cleanName.length < 2 || cleanText.length < 1 || posting) return;
    setPosting(true);
    setPostError('');
    setPosted(false);
    try {
      const form = e.target as HTMLFormElement;
      const honeypot = (form.elements.namedItem('website') as HTMLInputElement | null)?.value || '';
      const res = await fetch(`${API_BASE}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ page: pagePath, name: cleanName, text: cleanText, honeypot }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; comment?: Comment; error?: string };
      if (!res.ok || !data.ok || !data.comment) throw new Error(data.error || `HTTP ${res.status}`);
      try {
        localStorage.setItem(NAME_STORAGE_KEY, cleanName);
      } catch {
        // private mode — ignore
      }
      setComments((prev) => [data.comment as Comment, ...prev]);
      setText('');
      setPosted(true);
    } catch {
      setPostError(s.postError);
    } finally {
      setPosting(false);
    }
  };

  return (
    <div>
      {loading && <p className="text-sm text-[var(--ink-3)]">{s.loading}</p>}
      {loadError && (
        <div className="flex items-center gap-3">
          <p className="text-sm text-red-600 dark:text-red-400">{s.loadError}</p>
          <button type="button" onClick={load} className="text-sm font-bold text-[#7c3aed] dark:text-[#c4b5fd] underline">
            {s.retry}
          </button>
        </div>
      )}
      {!loading && !loadError && comments.length === 0 && (
        <p className="text-sm text-[var(--ink-3)]">{s.empty}</p>
      )}
      {!loading && !loadError && comments.length > 0 && (
        <ul className="space-y-3">
          {comments.map((c, idx) => (
            <li key={c.id} className="flex items-start gap-3 p-4 rounded-2xl border border-[var(--line)] bg-[var(--surface)] shadow-[var(--shadow)]">
              <span
                className={`w-9 h-9 rounded-full ${getPastelTileClass(idx)} flex items-center justify-center shrink-0 text-sm font-extrabold text-[var(--ink-navy)]`}
                aria-hidden="true"
              >
                {c.name.charAt(0).toUpperCase()}
              </span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <span className="font-sans text-sm font-bold text-[var(--ink-navy)] break-words">{c.name}</span>
                  <span className="text-xs text-[var(--ink-3)]">{formatDate(c.ts, lang)}</span>
                </div>
                <p className="text-sm text-[var(--ink-navy)] leading-relaxed mt-1 whitespace-pre-wrap break-words">{c.text}</p>
              </div>
            </li>
          ))}
        </ul>
      )}

      <form onSubmit={submit} className="mt-5 p-4 rounded-2xl border border-[var(--line)] bg-[var(--surface)] shadow-[var(--shadow)]">
        <label className="block">
          <span className="sr-only">{s.namePlaceholder}</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={s.namePlaceholder}
            maxLength={40}
            required
            className="w-full px-3 py-2 rounded-xl border border-[var(--line)] bg-[var(--bg)] text-sm text-[var(--ink-navy)] placeholder:text-[var(--ink-3)] focus:outline-none focus:border-[#7c3aed]"
          />
        </label>
        <label className="block mt-3">
          <span className="sr-only">{s.textPlaceholder}</span>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={s.textPlaceholder}
            maxLength={1000}
            rows={3}
            required
            className="w-full px-3 py-2 rounded-xl border border-[var(--line)] bg-[var(--bg)] text-sm text-[var(--ink-navy)] placeholder:text-[var(--ink-3)] focus:outline-none focus:border-[#7c3aed] resize-y"
          />
        </label>
        {/* Honeypot: hidden from humans, bots fill it and get rejected. */}
        <input type="text" name="website" autoComplete="off" tabIndex={-1} aria-hidden="true" className="hidden" defaultValue="" />
        {postError && <p className="text-sm text-red-600 dark:text-red-400 mt-3">{postError}</p>}
        {posted && <p className="text-sm text-green-700 dark:text-green-400 mt-3">{s.posted}</p>}
        <button type="submit" disabled={posting || name.trim().length < 2 || text.trim().length < 1} className="btn-purple-grad mt-3 px-5 py-2.5 rounded-xl text-sm font-bold text-white disabled:opacity-50 disabled:cursor-not-allowed">
          {posting ? s.posting : s.submit}
        </button>
      </form>
    </div>
  );
};
