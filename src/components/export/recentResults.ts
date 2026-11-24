/**
 * Consent-gated, local-only Recent Results storage.
 *
 * - OFF by default: nothing is recorded until the user explicitly opts in.
 * - Browser localStorage only. No uploads, no file bytes, no secrets.
 * - Text summaries only (<= 500 chars each, max 20 records).
 * - Turning consent off deletes everything. Per-item delete + Clear all.
 * - All access is guarded (typeof window / try-catch) so SSR never touches it.
 */
import {
  EXPORT_CONSENT_KEY,
  MAX_RECENT_RESULTS,
  MAX_RECENT_SUMMARY_CHARS,
  RECENT_RESULTS_KEY,
  type RecentResultRecord,
} from './types';

export type ExportConsent = 'granted' | 'denied' | null;

function canUseStorage(): boolean {
  try {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  } catch {
    return false;
  }
}

export function getExportConsent(): ExportConsent {
  if (!canUseStorage()) return null;
  try {
    const v = window.localStorage.getItem(EXPORT_CONSENT_KEY);
    return v === 'granted' || v === 'denied' ? v : null;
  } catch {
    return null;
  }
}

export function setExportConsent(value: 'granted' | 'denied'): void {
  if (!canUseStorage()) return;
  try {
    window.localStorage.setItem(EXPORT_CONSENT_KEY, value);
    if (value === 'denied') {
      window.localStorage.removeItem(RECENT_RESULTS_KEY);
    }
  } catch {
    // Storage full/blocked: fail silently, consent simply does not persist.
  }
}

export function loadRecentResults(): RecentResultRecord[] {
  if (!canUseStorage()) return [];
  try {
    const raw = window.localStorage.getItem(RECENT_RESULTS_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter(
        (r): r is RecentResultRecord =>
          typeof r === 'object' &&
          r !== null &&
          typeof (r as RecentResultRecord).id === 'string' &&
          typeof (r as RecentResultRecord).filename === 'string',
      )
      .slice(0, MAX_RECENT_RESULTS);
  } catch {
    return [];
  }
}

export function saveRecentResult(
  record: Omit<RecentResultRecord, 'id' | 'createdAt' | 'summary'> & { summary?: string },
): RecentResultRecord | null {
  if (!canUseStorage()) return null;
  if (getExportConsent() !== 'granted') return null;
  const summary = (record.summary ?? '').slice(0, MAX_RECENT_SUMMARY_CHARS);
  const full: RecentResultRecord = {
    ...record,
    summary,
    id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
    createdAt: Date.now(),
  };
  try {
    const next = [full, ...loadRecentResults()].slice(0, MAX_RECENT_RESULTS);
    window.localStorage.setItem(RECENT_RESULTS_KEY, JSON.stringify(next));
    return full;
  } catch {
    return null;
  }
}

export function deleteRecentResult(id: string): RecentResultRecord[] {
  const next = loadRecentResults().filter((r) => r.id !== id);
  try {
    window.localStorage.setItem(RECENT_RESULTS_KEY, JSON.stringify(next));
  } catch {
    // ignore
  }
  return next;
}

export function clearRecentResults(): void {
  if (!canUseStorage()) return;
  try {
    window.localStorage.removeItem(RECENT_RESULTS_KEY);
  } catch {
    // ignore
  }
}
