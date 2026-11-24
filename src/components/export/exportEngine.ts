/**
 * Export engine — LAZY module.
 *
 * Imported ONLY via dynamic import() inside click handlers, so html-to-image
 * and pdf-lib never enter the initial bundle. Cost when unused: 0 KB.
 *
 * - PNG/JPG: pixel capture of the ExportPreview node via html-to-image.
 * - PDF: real selectable text built with pdf-lib (StandardFonts only).
 *
 * Unicode honesty: pdf-lib StandardFonts cover WinAnsi/Latin only. File
 * names or labels with characters outside that range are replaced with '?'
 * in the PDF (see pdfSafe). PNG/JPG capture is pixel-faithful for every
 * script, because it renders the DOM node as an image.
 */
import { toJpeg, toPng } from 'html-to-image';
import { PDFDocument, StandardFonts, rgb, type PDFPage, type PDFFont } from 'pdf-lib';
import { sanitizeFilename } from '../../utils/formatters';
import { triggerDownload } from '../../utils/zip';
import type { DoneImageItem, ExportTemplateId, PageSizeId } from './types';

export interface PdfReportOptions {
  toolSlug: string;
  toolName: string;
  template: ExportTemplateId;
  pageSize: PageSizeId;
  includeInput: boolean;
  includeOutput: boolean;
  filename: string;
}

const PAGE_SIZES: Record<PageSizeId, [number, number]> = {
  a4: [595.28, 841.89],
  letter: [612, 792],
};

const RED = rgb(0.8627, 0.149, 0.149); // #dc2626
const INK = rgb(0.07, 0.1, 0.16);
const MUTED = rgb(0.42, 0.45, 0.52);
const LINE = rgb(0.88, 0.89, 0.92);

/** Keep only characters pdf-lib's WinAnsi StandardFonts can encode. */
export function pdfSafe(text: string): string {
  return text.replace(/[^\x20-\x7E\xA0-\xFF]/g, '?');
}

export function buildExportFilename(
  toolSlug: string,
  kind: 'result',
  ext: string,
  customName?: string,
): string {
  const fallback = `${toolSlug}-${kind}.${ext}`;
  const raw = (customName ?? '').trim();
  if (!raw) return fallback;
  const clean = sanitizeFilename(raw).slice(0, 100);
  if (!clean) return fallback;
  const lower = clean.toLowerCase();
  if (lower.endsWith(`.${ext}`)) return lower;
  // Strip a wrong extension the user typed, then force the right one.
  const withoutExt = lower.replace(/\.[a-z0-9]{2,5}$/, '');
  return `${withoutExt || toolSlug}-${kind}.${ext}`;
}

function formatBytes(n: number): string {
  if (n <= 0) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB'];
  const i = Math.min(units.length - 1, Math.floor(Math.log(n) / Math.log(1024)));
  const v = n / Math.pow(1024, i);
  return `${v >= 100 ? Math.round(v) : v.toFixed(v >= 10 ? 1 : 2)} ${units[i]}`;
}

export async function exportReportAsPng(node: HTMLElement, filename: string): Promise<void> {
  const dataUrl = await toPng(node, {
    pixelRatio: 2,
    backgroundColor: '#ffffff',
    cacheBust: true,
    // skipFonts: the report card uses the system sans stack, and embedding
    // the cross-origin Google Fonts stylesheet throws SecurityError
    // (cssRules is unreadable cross-origin) — html-to-image logs those as
    // console errors on every export. Skipping font embedding keeps the
    // capture error-free; the card renders in the system sans fallback.
    skipFonts: true,
  });
  const res = await fetch(dataUrl);
  const blob = await res.blob();
  triggerDownload(blob, filename);
}

export async function exportReportAsJpg(node: HTMLElement, filename: string): Promise<void> {
  const dataUrl = await toJpeg(node, {
    quality: 0.92,
    pixelRatio: 2,
    backgroundColor: '#ffffff',
    cacheBust: true,
    // See exportReportAsPng: skipFonts avoids cross-origin cssRules
    // SecurityErrors from the Google Fonts stylesheet on every export.
    skipFonts: true,
  });
  const res = await fetch(dataUrl);
  const blob = await res.blob();
  triggerDownload(blob, filename);
}

interface PdfCtx {
  doc: PDFDocument;
  font: PDFFont;
  bold: PDFFont;
  page: PDFPage;
  y: number;
  width: number;
  height: number;
  margin: number;
  pageSize: PageSizeId;
  pageNo: number;
  fontSize: number;
  lineHeight: number;
}

function newPage(ctx: PdfCtx): void {
  const [w, h] = PAGE_SIZES[ctx.pageSize];
  ctx.page = ctx.doc.addPage([w, h]);
  ctx.width = w;
  ctx.height = h;
  ctx.y = h - ctx.margin;
  ctx.pageNo += 1;
}

function drawFooter(ctx: PdfCtx, template: ExportTemplateId): void {
  const { page, width, margin, pageNo } = ctx;
  const footerY = 28;
  page.drawLine({
    start: { x: margin, y: footerY + 12 },
    end: { x: width - margin, y: footerY + 12 },
    thickness: 0.5,
    color: LINE,
  });
  if (template === 'professional') {
    page.drawText(pdfSafe('compressmypic.online'), {
      x: margin,
      y: footerY,
      size: 8,
      font: ctx.font,
      color: MUTED,
    });
  }
  const label = `Page ${pageNo}`;
  const lw = ctx.font.widthOfTextAtSize(label, 8);
  page.drawText(label, {
    x: width - margin - lw,
    y: footerY,
    size: 8,
    font: ctx.font,
    color: MUTED,
  });
}

function ensureSpace(ctx: PdfCtx, needed: number, template: ExportTemplateId): void {
  if (ctx.y - needed < ctx.margin + 24) {
    drawFooter(ctx, template);
    newPage(ctx);
  }
}

function wrapText(text: string, font: PDFFont, size: number, maxWidth: number): string[] {
  const words = text.split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let line = '';
  for (const word of words) {
    const test = line ? `${line} ${word}` : word;
    if (font.widthOfTextAtSize(test, size) <= maxWidth || !line) {
      line = test;
    } else {
      lines.push(line);
      line = word;
    }
  }
  if (line) lines.push(line);
  return lines.length ? lines : [''];
}

function drawWrapped(
  ctx: PdfCtx,
  text: string,
  x: number,
  size: number,
  font: PDFFont,
  color: ReturnType<typeof rgb>,
  maxWidth: number,
  template: ExportTemplateId,
): void {
  // Sanitize BEFORE measuring: widthOfTextAtSize throws on characters the
  // WinAnsi StandardFont cannot encode (e.g. →, •, non-Latin scripts).
  const safe = pdfSafe(text);
  for (const line of wrapText(safe, font, size, maxWidth)) {
    ensureSpace(ctx, ctx.lineHeight, template);
    ctx.page.drawText(line, { x, y: ctx.y, size, font, color });
    ctx.y -= ctx.lineHeight;
  }
}

export async function exportReportAsPdf(
  items: DoneImageItem[],
  opts: PdfReportOptions,
): Promise<void> {
  const doc = await PDFDocument.create();
  const font = await doc.embedFont(StandardFonts.Helvetica);
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);

  const compact = opts.template === 'compact';
  const ctx: PdfCtx = {
    doc,
    font,
    bold,
    page: doc.addPage(PAGE_SIZES[opts.pageSize]),
    y: 0,
    width: PAGE_SIZES[opts.pageSize][0],
    height: PAGE_SIZES[opts.pageSize][1],
    margin: compact ? 40 : 56,
    pageSize: opts.pageSize,
    pageNo: 0,
    fontSize: compact ? 10 : 11,
    lineHeight: compact ? 14 : 17,
  };
  ctx.y = ctx.height - ctx.margin;
  ctx.pageNo = 1;

  const contentWidth = ctx.width - ctx.margin * 2;
  const dateStr = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  // Header (template chrome only — never changes the content).
  if (opts.template === 'professional') {
    ctx.page.drawText(pdfSafe('CompressMyPic'), {
      x: ctx.margin,
      y: ctx.y,
      size: 17,
      font: bold,
      color: RED,
    });
    ctx.y -= 22;
    ctx.page.drawText(pdfSafe('Result Report'), {
      x: ctx.margin,
      y: ctx.y,
      size: 10,
      font,
      color: MUTED,
    });
    ctx.y -= 8;
    ctx.page.drawLine({
      start: { x: ctx.margin, y: ctx.y },
      end: { x: ctx.width - ctx.margin, y: ctx.y },
      thickness: 1,
      color: RED,
    });
    ctx.y -= 22;
  }

  // Title + meta.
  drawWrapped(ctx, opts.toolName, ctx.margin, 17, bold, INK, contentWidth, opts.template);
  ctx.y -= 2;
  drawWrapped(
    ctx,
    `${items.length} file${items.length === 1 ? '' : 's'}  •  ${dateStr}`,
    ctx.margin,
    10,
    font,
    MUTED,
    contentWidth,
    opts.template,
  );
  ctx.y -= 10;

  // Totals.
  const totalOriginal = items.reduce((s, i) => s + i.originalSize, 0);
  const totalResult = items.reduce((s, i) => s + (i.compressedSize ?? 0), 0);
  const savedPct =
    totalOriginal > 0 ? Math.round(((totalOriginal - totalResult) / totalOriginal) * 100) : 0;
  const totals = `Total: ${formatBytes(totalOriginal)} → ${formatBytes(totalResult)}  •  Saved ${savedPct}%`;
  drawWrapped(ctx, totals, ctx.margin, ctx.fontSize, bold, INK, contentWidth, opts.template);
  ctx.y -= 12;

  // Per-file rows.
  const rowGap = compact ? 4 : 8;
  for (const item of items) {
    const name = item.name;
    const dims =
      item.compressedWidth && item.compressedHeight
        ? `${item.compressedWidth}×${item.compressedHeight}px`
        : `${item.originalWidth}×${item.originalHeight}px`;
    const pct =
      item.compressionPercentage != null ? `${Math.round(item.compressionPercentage)}% smaller` : '';
    const parts: string[] = [name, dims];
    if (opts.includeInput) parts.push(`Original: ${formatBytes(item.originalSize)}`);
    if (opts.includeOutput) parts.push(`Result: ${formatBytes(item.compressedSize ?? 0)}`);
    if (pct) parts.push(pdfSafe(pct));
    const line = parts.join('  •  ');
    drawWrapped(ctx, line, ctx.margin, ctx.fontSize, font, INK, contentWidth, opts.template);
    ctx.y -= rowGap;
    // Row divider (all templates).
    ctx.page.drawLine({
      start: { x: ctx.margin, y: ctx.y + rowGap / 2 },
      end: { x: ctx.width - ctx.margin, y: ctx.y + rowGap / 2 },
      thickness: 0.5,
      color: LINE,
    });
  }

  drawFooter(ctx, opts.template);
  const bytes = await doc.save();
  triggerDownload(
    new Blob([bytes as unknown as BlobPart], { type: 'application/pdf' }),
    opts.filename,
  );
}
