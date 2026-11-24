/**
 * Recent Results — consent-gated, local-only history of exported reports.
 * Text summaries only. Per-item delete + Clear all. Turning consent off
 * deletes everything (see recentResults.ts).
 */
import React, { useEffect, useState } from 'react';
import { Trash2, History, ShieldCheck } from 'lucide-react';
import { formatBytes } from '../../utils/formatters';
import {
  clearRecentResults,
  deleteRecentResult,
  getExportConsent,
  loadRecentResults,
  setExportConsent,
  type ExportConsent,
} from './recentResults';
import type { RecentResultRecord } from './types';

interface RecentResultsProps {
  /** Bumped by the parent after a new export so the list refreshes. */
  refreshKey: number;
}

export const RecentResults: React.FC<RecentResultsProps> = ({ refreshKey }) => {
  const [consent, setConsent] = useState<ExportConsent>(null);
  const [records, setRecords] = useState<RecentResultRecord[]>([]);

  useEffect(() => {
    setConsent(getExportConsent());
    setRecords(loadRecentResults());
  }, [refreshKey]);

  const handleEnable = () => {
    setExportConsent('granted');
    setConsent('granted');
    setRecords(loadRecentResults());
  };

  const handleDisable = () => {
    setExportConsent('denied');
    setConsent('denied');
    setRecords([]);
  };

  const handleDelete = (id: string) => {
    setRecords(deleteRecentResult(id));
  };

  const handleClearAll = () => {
    clearRecentResults();
    setRecords([]);
  };

  return (
    <div className="mt-5 border-t border-[var(--line)] pt-4">
      <div className="flex items-center gap-2">
        <History className="w-4 h-4 text-[#dc2626]" />
        <h4 className="text-sm font-bold text-[var(--ink-navy)]">Recent results</h4>
      </div>

      {consent === null && (
        <div className="mt-3 rounded-xl bg-[var(--surface-2)] border border-[var(--line)] p-4">
          <p className="text-sm text-[var(--ink-2)]">
            Save a short text summary of each export on this device, so you can see what you
            exported before? Nothing is uploaded — it stays in this browser only, and you can
            delete it any time.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={handleEnable}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white text-sm font-semibold rounded-[11px] cursor-pointer transition-colors"
            >
              <ShieldCheck className="w-4 h-4" />
              Save recent results
            </button>
            <button
              type="button"
              onClick={handleDisable}
              className="px-4 py-2 bg-[var(--surface)] border border-[var(--line)] text-[var(--ink-2)] text-sm font-medium rounded-[11px] cursor-pointer transition-colors"
            >
              Not now
            </button>
          </div>
        </div>
      )}

      {consent === 'denied' && (
        <p className="mt-3 text-sm text-[var(--ink-3)]">
          Recent results are off.{' '}
          <button
            type="button"
            onClick={handleEnable}
            className="text-[#dc2626] dark:text-[#fca5a5] font-semibold hover:underline cursor-pointer"
          >
            Turn them on
          </button>{' '}
          to keep a short history on this device.
        </p>
      )}

      {consent === 'granted' && (
        <>
          {records.length === 0 ? (
            <p className="mt-3 text-sm text-[var(--ink-3)]">
              Nothing saved yet — your next export will appear here.
            </p>
          ) : (
            <ul className="mt-3 space-y-2">
              {records.map((r) => (
                <li
                  key={r.id}
                  className="flex items-center justify-between gap-3 rounded-xl bg-[var(--surface-2)] border border-[var(--line)] px-3 py-2"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[var(--ink-navy)] truncate">
                      {r.toolName} • {r.fileCount} file{r.fileCount === 1 ? '' : 's'} •{' '}
                      {r.format.toUpperCase()}
                    </p>
                    <p className="text-xs text-[var(--ink-3)] truncate">
                      {r.filename} • {formatBytes(r.totalOriginal)} →{' '}
                      {formatBytes(r.totalResult)} •{' '}
                      {new Date(r.createdAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleDelete(r.id)}
                    aria-label={`Delete recent result ${r.filename}`}
                    className="shrink-0 p-2 text-[var(--ink-3)] hover:text-[#dc2626] hover:bg-[#fee2e2] dark:hover:bg-[#ef4444]/15 rounded-lg cursor-pointer transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-3 flex flex-wrap gap-3">
            {records.length > 0 && (
              <button
                type="button"
                onClick={handleClearAll}
                className="text-xs font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:underline cursor-pointer"
              >
                Clear all
              </button>
            )}
            <button
              type="button"
              onClick={handleDisable}
              className="text-xs font-semibold text-[var(--ink-3)] hover:underline cursor-pointer"
            >
              Turn off recent results (deletes saved entries)
            </button>
          </div>
        </>
      )}
    </div>
  );
};
