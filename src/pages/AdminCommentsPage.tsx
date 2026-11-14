// Comments admin — in-website moderation page (same idea as UtilityFlow's
// /admin/comments). Only the site owner opens it: enter the ADMIN_TOKEN
// secret once per tab (stored in sessionStorage, never in a URL or in the
// code), then the latest comments from every tool page are listed with a
// Delete button each. The page is NOT linked anywhere on the site and sets
// robots noindex, so search engines ignore it.
import React, { useCallback, useEffect, useState } from 'react';
import { ArrowLeft, ShieldCheck, Trash2, RefreshCw, LogOut } from 'lucide-react';
import { getPastelTileClass } from '../utils/pastel';

const API_BASE =
  (import.meta as unknown as { env?: Record<string, string | undefined> }).env?.VITE_COMMENTS_API_URL ||
  'https://compressmypic-comments.bilalayyah.workers.dev';

const TOKEN_STORAGE_KEY = 'cmp-admin-token';

interface AdminComment {
  id: string;
  page: string;
  name: string;
  text: string;
  ts: number;
}

function formatDate(ts: number): string {
  try {
    return new Date(ts).toLocaleString('en', { dateStyle: 'medium', timeStyle: 'short' });
  } catch {
    return new Date(ts).toLocaleString();
  }
}

interface AdminCommentsPageProps {
  onNavigate: (path: string) => void;
}

export const AdminCommentsPage: React.FC<AdminCommentsPageProps> = ({ onNavigate }) => {
  const [token, setToken] = useState(() => {
    try {
      return sessionStorage.getItem(TOKEN_STORAGE_KEY) || '';
    } catch {
      return '';
    }
  });
  const [authed, setAuthed] = useState(false);
  const [comments, setComments] = useState<AdminComment[]>([]);
  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState('');
  const [error, setError] = useState('');
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Comments Admin - CompressMyPic';
    window.scrollTo({ top: 0, behavior: 'instant' });
    let meta = document.querySelector('meta[name="robots"]');
    const created = !meta;
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'robots');
      document.head.appendChild(meta);
    }
    const prev = meta.getAttribute('content');
    meta.setAttribute('content', 'noindex, nofollow');
    return () => {
      if (created) meta.remove();
      else if (prev !== null) meta.setAttribute('content', prev);
      else meta.removeAttribute('content');
    };
  }, []);

  const load = useCallback(
    async (t: string) => {
      setLoading(true);
      setError('');
      try {
        const res = await fetch(`${API_BASE}/comments/recent?token=${encodeURIComponent(t)}`);
        if (res.status === 401) throw new Error('wrong-token');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = (await res.json()) as { comments?: AdminComment[] };
        setComments(Array.isArray(data.comments) ? data.comments : []);
        setAuthed(true);
        setAuthError('');
        try {
          sessionStorage.setItem(TOKEN_STORAGE_KEY, t);
        } catch {
          // private mode — ignore
        }
      } catch (e) {
        if (e instanceof Error && e.message === 'wrong-token') {
          setAuthError('Wrong token. Enter the ADMIN_TOKEN secret.');
        } else {
          setError('Couldn’t load comments. Please try again.');
        }
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  // If a token is already saved in this tab, try it on mount.
  useEffect(() => {
    if (token) load(token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const t = token.trim();
    if (t) load(t);
  };

  const handleDelete = async (id: string) => {
    if (!token || deletingId) return;
    setDeletingId(id);
    setError('');
    try {
      const res = await fetch(
        `${API_BASE}/comments?id=${encodeURIComponent(id)}&token=${encodeURIComponent(token)}`,
        { method: 'DELETE' },
      );
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setComments((prev) => prev.filter((c) => c.id !== id));
    } catch {
      setError('Couldn’t delete that comment. Please try again.');
    } finally {
      setDeletingId(null);
    }
  };

  const handleSignOut = () => {
    try {
      sessionStorage.removeItem(TOKEN_STORAGE_KEY);
    } catch {
      // ignore
    }
    setToken('');
    setAuthed(false);
    setComments([]);
  };

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="mb-6">
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7c3aed] dark:text-[#c4b5fd] hover:text-[#6d28d9] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Image Compressor</span>
          </button>
        </div>

        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-2xl bg-[#ede9fe] dark:bg-[#312e81] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#7c3aed] dark:text-[#c4b5fd]" />
            </span>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--ink-navy)]">Comments admin</h1>
              <p className="text-sm text-[var(--ink-3)] mt-1">
                Moderate comments from every tool. Only you can open this page.
              </p>
            </div>
          </div>
        </div>

        {!authed ? (
          <form
            onSubmit={handleLogin}
            className="p-5 rounded-2xl border border-[var(--line)] bg-[var(--surface)] shadow-[var(--shadow)]"
          >
            <label className="block text-sm font-bold text-[var(--ink-navy)]" htmlFor="admin-token">
              Admin token
            </label>
            <p className="text-sm text-[var(--ink-3)] mt-1">
              Enter the ADMIN_TOKEN secret to see and delete comments.
            </p>
            <input
              id="admin-token"
              type="password"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              placeholder="ADMIN_TOKEN"
              autoComplete="off"
              required
              className="mt-3 w-full px-3 py-2 rounded-xl border border-[var(--line)] bg-[var(--bg)] text-sm text-[var(--ink-navy)] placeholder:text-[var(--ink-3)] focus:outline-none focus:border-[#7c3aed]"
            />
            {authError && <p className="text-sm text-red-600 dark:text-red-400 mt-3">{authError}</p>}
            <button
              type="submit"
              disabled={loading || token.trim().length < 1}
              className="btn-purple-grad mt-4 px-5 py-2.5 rounded-xl text-sm font-bold text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Checking…' : 'Open admin'}
            </button>
          </form>
        ) : (
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <p className="text-sm text-[var(--ink-3)]">
                {comments.length === 0 ? 'No comments yet.' : `${comments.length} latest comment${comments.length === 1 ? '' : 's'}.`}
              </p>
              <div className="ml-auto flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => load(token)}
                  disabled={loading}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-[var(--line)] bg-[var(--surface)] text-xs font-bold text-[var(--ink-navy)] disabled:opacity-50 cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  Refresh
                </button>
                <button
                  type="button"
                  onClick={handleSignOut}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-[var(--line)] bg-[var(--surface)] text-xs font-bold text-[var(--ink-navy)] cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  Sign out
                </button>
              </div>
            </div>

            {loading && <p className="text-sm text-[var(--ink-3)]">Loading comments…</p>}
            {error && <p className="text-sm text-red-600 dark:text-red-400 mb-4">{error}</p>}

            {!loading && comments.length > 0 && (
              <ul className="space-y-3">
                {comments.map((c, idx) => (
                  <li
                    key={c.id}
                    className="flex items-start gap-3 p-4 rounded-2xl border border-[var(--line)] bg-[var(--surface)] shadow-[var(--shadow)]"
                  >
                    <span
                      className={`w-9 h-9 rounded-full ${getPastelTileClass(idx)} flex items-center justify-center shrink-0 text-sm font-extrabold text-[var(--ink-navy)]`}
                      aria-hidden="true"
                    >
                      {c.name.charAt(0).toUpperCase()}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-baseline gap-x-2">
                        <span className="font-sans text-sm font-bold text-[var(--ink-navy)] break-words">{c.name}</span>
                        <span className="text-xs text-[var(--ink-3)]">{formatDate(c.ts)}</span>
                        <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-[var(--bg-soft)] text-[var(--ink-3)] break-all">
                          {c.page}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--ink-navy)] leading-relaxed mt-1 whitespace-pre-wrap break-words">
                        {c.text}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleDelete(c.id)}
                      disabled={deletingId === c.id}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 disabled:opacity-50 shrink-0 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      {deletingId === c.id ? 'Deleting…' : 'Delete'}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
