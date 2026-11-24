/**
 * ExportPreview — the report card that PNG/JPG capture pixel-for-pixel.
 *
 * IMPORTANT: this node uses EXPLICIT hex colours only (no var(--...) tokens),
 * because html-to-image inlines the node into an SVG — CSS custom properties
 * do not resolve reliably there. No <img> thumbnails (blob: URLs can fail
 * inside the capture); text-only report.
 */
import React from 'react';
import { formatBytes, formatPercent } from '../../utils/formatters';
import type { DoneImageItem, ExportTemplateId } from './types';

interface ExportPreviewProps {
  toolName: string;
  items: DoneImageItem[];
  template: ExportTemplateId;
  includeInput: boolean;
  includeOutput: boolean;
}

export const ExportPreview = React.forwardRef<HTMLDivElement, ExportPreviewProps>(
  function ExportPreview({ toolName, items, template, includeInput, includeOutput }, ref) {
    const totalOriginal = items.reduce((s, i) => s + i.originalSize, 0);
    const totalResult = items.reduce((s, i) => s + (i.compressedSize ?? 0), 0);
    const savedPct =
      totalOriginal > 0 ? Math.round(((totalOriginal - totalResult) / totalOriginal) * 100) : 0;
    const dateStr = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
    const compact = template === 'compact';
    const pad = compact ? 'p-4' : 'p-6';
    const rowPad = compact ? 'py-1.5' : 'py-2.5';
    const textSm = compact ? 'text-xs' : 'text-sm';

    return (
      <div
        ref={ref}
        data-testid="export-preview"
        style={{ backgroundColor: '#ffffff', color: '#111827', width: '100%' }}
        className={`rounded-xl border border-[#e5e7eb] ${pad}`}
      >
        {template === 'professional' && (
          <div
            className="flex items-center justify-between border-b-2 pb-3 mb-4"
            style={{ borderColor: '#dc2626' }}
          >
            <span style={{ color: '#dc2626', fontWeight: 800, fontSize: 17 }}>
              CompressMyPic
            </span>
            <span style={{ color: '#6b7280', fontSize: 12 }}>Result Report</span>
          </div>
        )}

        <h3 style={{ fontSize: 18, fontWeight: 700, color: '#111827', margin: 0 }}>
          {toolName}
        </h3>
        <p style={{ fontSize: 12, color: '#6b7280', margin: '4px 0 0' }}>
          {items.length} file{items.length === 1 ? '' : 's'} • {dateStr}
        </p>

        <p style={{ fontSize: 14, fontWeight: 700, color: '#111827', margin: '12px 0 4px' }}>
          Total: {formatBytes(totalOriginal)} → {formatBytes(totalResult)} • Saved {savedPct}%
        </p>

        <div style={{ marginTop: 8 }}>
          {items.map((item) => (
            <div
              key={item.id}
              className={`flex items-baseline justify-between gap-3 border-b border-[#f3f4f6] ${rowPad}`}
            >
              <span
                className={`${textSm} font-semibold truncate`}
                style={{ color: '#111827', maxWidth: '46%' }}
                title={item.name}
              >
                {item.name}
              </span>
              <span
                className="text-xs whitespace-nowrap"
                style={{ color: '#6b7280', fontFamily: 'ui-monospace, monospace' }}
              >
                {item.compressedWidth && item.compressedHeight
                  ? `${item.compressedWidth}×${item.compressedHeight}px`
                  : `${item.originalWidth}×${item.originalHeight}px`}
                {includeInput ? ` • ${formatBytes(item.originalSize)}` : ''}
                {includeOutput ? ` → ${formatBytes(item.compressedSize ?? 0)}` : ''}
                {item.compressionPercentage != null
                  ? ` • ${formatPercent(item.compressionPercentage)}`
                  : ''}
              </span>
            </div>
          ))}
        </div>

        {template === 'professional' && (
          <p style={{ fontSize: 11, color: '#9ca3af', margin: '12px 0 0' }}>
            compressmypic.online • Free image tools, no signup
          </p>
        )}
      </div>
    );
  },
);
