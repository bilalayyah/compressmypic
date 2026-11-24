/**
 * Shared result-export types (CompressMyPic export pilot).
 *
 * The panel consumes ImageItem[] directly — every pilot tool already holds
 * its results in that shape, so no per-tool result contract is needed.
 */
import type { ImageItem } from '../../types';

export type ExportTemplateId = 'simple' | 'professional' | 'compact';

export type ExportFormat = 'png' | 'jpg' | 'pdf';

export type PageSizeId = 'a4' | 'letter';

export const EXPORT_TEMPLATES: { id: ExportTemplateId; label: string; hint: string }[] = [
  { id: 'simple', label: 'Simple', hint: 'No brand header, just the results' },
  { id: 'professional', label: 'Professional', hint: 'CompressMyPic header, source URL and page numbers' },
  { id: 'compact', label: 'Compact', hint: 'Dense rows, most results per page' },
];

export interface ExportPanelStrings {
  title?: string;
  subtitle?: string;
  templateLabel?: string;
  filenameLabel?: string;
  includeInput?: string;
  includeOutput?: string;
  selectSectionNote?: string;
  exportPng?: string;
  exportJpg?: string;
  exportPdf?: string;
  generating?: string;
  ready?: string;
  failed?: string;
  original?: string;
  result?: string;
  saved?: string;
  files?: string;
  totalOriginal?: string;
  totalResult?: string;
  totalSaved?: string;
  dateLabel?: string;
  toolLabel?: string;
}

/** One entry in the consent-gated, local-only Recent Results list. Text only. */
export interface RecentResultRecord {
  id: string;
  toolSlug: string;
  toolName: string;
  fileCount: number;
  totalOriginal: number;
  totalResult: number;
  totalSavedPct: number;
  format: ExportFormat;
  template: ExportTemplateId;
  filename: string;
  createdAt: number;
  summary: string; // <= 500 chars, plain text only
}

export const RECENT_RESULTS_KEY = 'cmp-recent-results';
export const EXPORT_CONSENT_KEY = 'cmp-export-consent';
export const MAX_RECENT_RESULTS = 20;
export const MAX_RECENT_SUMMARY_CHARS = 500;

export type DoneImageItem = ImageItem & {
  compressedSize: number;
  compressedBlob: Blob;
};

export function getDoneItems(items: ImageItem[]): DoneImageItem[] {
  return items.filter(
    (i): i is DoneImageItem =>
      i.status === 'done' && i.compressedSize != null && i.compressedBlob != null,
  );
}

export function totalsFor(items: DoneImageItem[]): {
  totalOriginal: number;
  totalResult: number;
  totalSavedPct: number;
} {
  const totalOriginal = items.reduce((s, i) => s + i.originalSize, 0);
  const totalResult = items.reduce((s, i) => s + (i.compressedSize ?? 0), 0);
  const totalSavedPct =
    totalOriginal > 0 ? Math.round(((totalOriginal - totalResult) / totalOriginal) * 100) : 0;
  return { totalOriginal, totalResult, totalSavedPct };
}
