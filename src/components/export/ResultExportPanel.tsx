/**
 * ResultExportPanel — shared export UI for CompressMyPic pilot tools.
 *
 * Mounted under a tool's result area once at least one file is done. The
 * heavy engine (html-to-image + pdf-lib) loads ONLY via dynamic import()
 * inside the click handlers — never in the initial bundle.
 *
 * - PNG/JPG: pixel capture of the ExportPreview node (exact preview).
 * - PDF: real selectable text report built with pdf-lib (Latin scripts;
 *   non-Latin file names fall back to '?' in the PDF — see exportEngine).
 * - Templates change chrome only, never content: Simple / Professional /
 *   Compact. Page size A4/Letter applies to PDF.
 * - Input/output checkboxes control which columns the report carries. Both
 *   off disables every export button (never an empty file).
 * - Smart filenames: default `<tool-slug>-result.<ext>`, editable, sanitised,
 *   correct extension forced.
 * - Recent Results + Premium promo live below the export controls.
 *
 * SSR-safe: no window/localStorage access at module scope or during render;
 * the panel renders null until results exist (prerender has none).
 */
import React, { useRef, useState } from 'react';
import { Download, FileImage, FileText, Loader2 } from 'lucide-react';
import type { ImageItem } from '../../types';
import { trackEvent } from '../../utils/analytics';
import { ExportPreview } from './ExportPreview';
import { PremiumPromo } from './PremiumPromo';
import { RecentResults } from './RecentResults';
import { saveRecentResult } from './recentResults';
import {
  EXPORT_TEMPLATES,
  getDoneItems,
  totalsFor,
  type ExportFormat,
  type ExportPanelStrings,
  type ExportTemplateId,
  type PageSizeId,
} from './types';

interface ResultExportPanelProps {
  items: ImageItem[];
  toolSlug: string;
  toolName: string;
  strings?: ExportPanelStrings;
}

type BusyState = ExportFormat | null;

export const ResultExportPanel: React.FC<ResultExportPanelProps> = ({
  items,
  toolSlug,
  toolName,
  strings,
}) => {
  const doneItems = getDoneItems(items);
  const previewRef = useRef<HTMLDivElement>(null);
  const [template, setTemplate] = useState<ExportTemplateId>('professional');
  const [pageSize, setPageSize] = useState<PageSizeId>('a4');
  const [includeInput, setIncludeInput] = useState(true);
  const [includeOutput, setIncludeOutput] = useState(true);
  const [customName, setCustomName] = useState('');
  const [busy, setBusy] = useState<BusyState>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);

  if (doneItems.length === 0) return null;

  const bothOff = !includeInput && !includeOutput;
  const defaultName = `${toolSlug}-result`;
  const totals = totalsFor(doneItems);

  const handleExport = async (format: ExportFormat) => {
    if (busy || bothOff) return;
    if (format !== 'pdf' && !previewRef.current) return;
    setBusy(format);
    setStatus(null);
    setError(null);
    try {
      const engine = await import('./exportEngine');
      const filename = engine.buildExportFilename(toolSlug, 'result', format, customName);
      if (format === 'png' && previewRef.current) {
        await engine.exportReportAsPng(previewRef.current, filename);
      } else if (format === 'jpg' && previewRef.current) {
        await engine.exportReportAsJpg(previewRef.current, filename);
      } else {
        await engine.exportReportAsPdf(doneItems, {
          toolSlug,
          toolName,
          template,
          pageSize,
          includeInput,
          includeOutput,
          filename,
        });
      }
      const summary =
        `${toolName}: ${doneItems.length} file${doneItems.length === 1 ? '' : 's'}, ` +
        `${totals.totalSavedPct}% smaller, exported as ${format.toUpperCase()} (${template}).`;
      saveRecentResult({
        toolSlug,
        toolName,
        fileCount: doneItems.length,
        totalOriginal: totals.totalOriginal,
        totalResult: totals.totalResult,
        totalSavedPct: totals.totalSavedPct,
        format,
        template,
        filename,
        summary,
      });
      setRefreshKey((k) => k + 1);
      trackEvent('export_generated', { tool: toolSlug, format, template });
      setStatus(strings?.ready ?? `Export ready — ${filename} downloaded.`);
    } catch (e) {
      setError(
        strings?.failed ??
          `Export failed: ${e instanceof Error ? e.message : 'unknown error'}. Please try again.`,
      );
    } finally {
      setBusy(null);
    }
  };

  const formatButton = (
    format: ExportFormat,
    label: string,
    Icon: React.ComponentType<{ className?: string }>,
  ) => (
    <button
      key={format}
      type="button"
      onClick={() => void handleExport(format)}
      disabled={busy !== null || bothOff}
      className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#dc2626] hover:bg-[#b91c1c] disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-[11px] cursor-pointer transition-colors"
    >
      {busy === format ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        <Icon className="w-4 h-4" />
      )}
      <span>{busy === format ? (strings?.generating ?? 'Exporting…') : label}</span>
    </button>
  );

  return (
    <section
      data-testid="result-export-panel"
      aria-label={strings?.title ?? 'Export results'}
      className="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-4 sm:p-5 shadow-[var(--shadow)] space-y-4"
    >
      <div>
        <h3 className="text-base font-bold text-[var(--ink-navy)]">
          {strings?.title ?? 'Export results'}
        </h3>
        <p className="text-sm text-[var(--ink-3)] mt-0.5">
          {strings?.subtitle ??
            'Download a shareable report of your results as an image or a PDF.'}
        </p>
      </div>

      {/* Template selector */}
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-[var(--ink-3)]">
          {strings?.templateLabel ?? 'Template'}
        </span>
        <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label="Export template">
          {EXPORT_TEMPLATES.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTemplate(t.id)}
              aria-pressed={template === t.id}
              title={t.hint}
              className={`px-3.5 py-2 text-sm font-semibold rounded-[11px] border cursor-pointer transition-colors ${
                template === t.id
                  ? 'bg-[#dc2626] border-[#dc2626] text-white'
                  : 'bg-[var(--surface)] border-[var(--line)] text-[var(--ink-2)] hover:border-[#fecaca]'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Preview (the node PNG/JPG capture) */}
      <ExportPreview
        ref={previewRef}
        toolName={toolName}
        items={doneItems}
        template={template}
        includeInput={includeInput}
        includeOutput={includeOutput}
      />

      {/* Filename + options */}
      <div className="space-y-3">
        <label className="block">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--ink-3)]">
            {strings?.filenameLabel ?? 'File name'}
          </span>
          <input
            type="text"
            value={customName}
            onChange={(e) => setCustomName(e.target.value)}
            placeholder={defaultName}
            maxLength={100}
            className="mt-1.5 w-full sm:max-w-sm rounded-[11px] border border-[var(--line)] bg-[var(--surface)] px-3 py-2 text-sm text-[var(--ink-navy)] outline-none focus:border-[#dc2626]"
          />
        </label>

        <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--ink-2)]">
          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={includeInput}
              onChange={(e) => setIncludeInput(e.target.checked)}
              className="accent-[#dc2626] w-4 h-4"
            />
            {strings?.includeInput ?? 'Include original sizes'}
          </label>
          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={includeOutput}
              onChange={(e) => setIncludeOutput(e.target.checked)}
              className="accent-[#dc2626] w-4 h-4"
            />
            {strings?.includeOutput ?? 'Include compressed results'}
          </label>
          <span className="inline-flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--ink-3)]">
              Page size (PDF)
            </span>
            {(['a4', 'letter'] as PageSizeId[]).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setPageSize(s)}
                aria-pressed={pageSize === s}
                className={`px-2.5 py-1 text-xs font-semibold rounded-lg border cursor-pointer transition-colors ${
                  pageSize === s
                    ? 'bg-[#dc2626] border-[#dc2626] text-white'
                    : 'bg-[var(--surface)] border-[var(--line)] text-[var(--ink-2)]'
                }`}
              >
                {s.toUpperCase()}
              </button>
            ))}
          </span>
        </div>

        {bothOff && (
          <p className="text-sm text-[#dc2626] dark:text-[#f87171]">
            {strings?.selectSectionNote ??
              'Select at least one section to export — original sizes, compressed results, or both.'}
          </p>
        )}

        <div className="flex flex-wrap gap-2">
          {formatButton('png', strings?.exportPng ?? 'Download PNG', FileImage)}
          {formatButton('jpg', strings?.exportJpg ?? 'Download JPG', FileImage)}
          {formatButton('pdf', strings?.exportPdf ?? 'Download PDF', FileText)}
        </div>

        <div aria-live="polite">
          {status && (
            <p className="text-sm font-medium text-[#15803d] dark:text-[#4ade80]">{status}</p>
          )}
          {error && <p className="text-sm font-medium text-[#dc2626] dark:text-[#f87171]">{error}</p>}
        </div>
        <p className="text-xs text-[var(--ink-3)]">
          <Download className="w-3.5 h-3.5 inline-block mr-1 -mt-0.5" />
          The report downloads to your device. Your images never leave your browser.
        </p>
      </div>

      <RecentResults refreshKey={refreshKey} />
      <PremiumPromo />
    </section>
  );
};
