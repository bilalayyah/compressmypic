import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowDown,
  ArrowUp,
  Download,
  FileText,
  RotateCcw,
  Trash2,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { TOOL_BY_SLUG } from '../data/tools';
import type { ToolDefinition } from '../data/tools';
import { ToolPageLayout } from '../components/ToolPageLayout';
import type { SupportedLang } from '../locales/config';
import type { ToolPageLayoutStrings } from '../components/ToolPageLayout';
import type { UploadZoneStrings } from '../components/UploadZone';
import type { ComparisonModalStrings } from '../components/ComparisonModal';
import { toSpanishPath } from '../locales/es/slugs';
import { toPortuguesePath } from '../locales/pt/slugs';
import { toFrenchPath } from '../locales/fr/slugs';
import { toGermanPath } from '../locales/de/slugs';
import { toItalianPath } from '../locales/it/slugs';
import { getAlternates } from '../locales/alternates';
import { UploadZone } from '../components/UploadZone';
import {
  EXTENDED_ALLOWED_EXT_REGEX,
  EXTENDED_ALLOWED_MIME_TYPES,
  EXTENDED_IMAGE_ACCEPT,
  loadExtendedImageInfo,
} from '../utils/imageProcessing';
import {
  PdfImageFit,
  PdfMargin,
  PdfOrientation,
  PdfPageSize,
  generatePdfFromImages,
} from '../utils/pdfGenerator';
import { formatBytes } from '../utils/formatters';
import { triggerDownload } from '../utils/zip';

interface PdfPageItem {
  id: string;
  file: File;
  name: string;
  size: number;
  width: number;
  height: number;
  previewUrl: string;
}

export interface PageEsStrings {
  layoutUi: ToolPageLayoutStrings;
  uploadZone: UploadZoneStrings;
  comparisonModal: ComparisonModalStrings;
  toolUi: Record<string, string>;
}

export interface PagePtStrings {
  layoutUi: ToolPageLayoutStrings;
  uploadZone: UploadZoneStrings;
  comparisonModal: ComparisonModalStrings;
  toolUi: Record<string, string>;
}

export interface PageFrStrings {
  layoutUi: ToolPageLayoutStrings;
  uploadZone: UploadZoneStrings;
  comparisonModal: ComparisonModalStrings;
  toolUi: Record<string, string>;
}
export interface PageDeStrings {
  layoutUi: ToolPageLayoutStrings;
  uploadZone: UploadZoneStrings;
  comparisonModal: ComparisonModalStrings;
  toolUi: Record<string, string>;
}

export interface PageItStrings {
  layoutUi: ToolPageLayoutStrings;
  uploadZone: UploadZoneStrings;
  comparisonModal: ComparisonModalStrings;
  toolUi: Record<string, string>;
}

interface ImageToPdfPageProps {
  onNavigate: (path: string) => void;
  lang?: SupportedLang;
  tool?: ToolDefinition;
  toolRegistry?: Record<string, ToolDefinition>;
  categoryLabels?: Array<{ id: string; label: string }>;
  esStrings?: PageEsStrings;
  ptStrings?: PagePtStrings;
  frStrings?: PageFrStrings;
  deStrings?: PageDeStrings;
  itStrings?: PageItStrings;
}

export const ImageToPdfPage: React.FC<ImageToPdfPageProps> = ({
  onNavigate,
  lang,
  tool,
  toolRegistry,
  categoryLabels,
  esStrings,
  ptStrings,
  frStrings,
  deStrings,
  itStrings,
}) => {
  const activeTool = tool ?? TOOL_BY_SLUG['/image-to-pdf'];
  const t = (key: string, fallback: string) => {
    if (lang === 'de' && deStrings?.toolUi) return (deStrings.toolUi[key] as string | undefined) ?? fallback;
    if (lang === 'it' && itStrings?.toolUi) return (itStrings.toolUi[key] as string | undefined) ?? fallback;
    if (lang === 'pt' && ptStrings?.toolUi) return (ptStrings.toolUi[key] as string | undefined) ?? fallback;
    if (lang === 'fr' && frStrings?.toolUi) return (frStrings.toolUi[key] as string | undefined) ?? fallback;
    if (lang === 'es' && esStrings?.toolUi) return (esStrings.toolUi[key] as string | undefined) ?? fallback;
    return fallback;
  };
  const [pages, setPages] = useState<PdfPageItem[]>([]);
  const pagesRef = useRef<PdfPageItem[]>([]);
  pagesRef.current = pages;

  const [pageSize, setPageSize] = useState<PdfPageSize>('a4');
  const [orientation, setOrientation] = useState<PdfOrientation>('auto');
  const [margin, setMargin] = useState<PdfMargin>('small');
  const [fit, setFit] = useState<PdfImageFit>('contain');
  const [quality, setQuality] = useState<number>(85);
  const [filename, setFilename] = useState<string>('compressmypic-document.pdf');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [progressText, setProgressText] = useState<string>('');
  const [pdfBlob, setPdfBlob] = useState<Blob | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      pagesRef.current.forEach((p) => URL.revokeObjectURL(p.previewUrl));
    };
  }, []);

  const handleFilesSelected = async (files: File[]) => {
    setErrorMsg(null);
    setPdfBlob(null);
    const loaded: PdfPageItem[] = [];

    for (const file of files) {
      try {
        const info = await loadExtendedImageInfo(file);
        loaded.push({
          id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
          file,
          name: file.name,
          size: file.size,
          width: info.width,
          height: info.height,
          previewUrl: info.previewUrl,
        });
      } catch {
        setErrorMsg(
          t('couldNotRead', 'Could not read "{filename}". Please ensure it is a valid image.').replace(
            '{filename}',
            file.name
          )
        );
      }
    }

    if (loaded.length > 0) {
      setPages((prev) => [...prev, ...loaded]);
    }
  };

  const movePage = (index: number, delta: -1 | 1) => {
    const target = index + delta;
    if (target < 0 || target >= pages.length) return;
    setPdfBlob(null);
    setPages((prev) => {
      const next = [...prev];
      const [item] = next.splice(index, 1);
      next.splice(target, 0, item);
      return next;
    });
  };

  const removePage = (id: string) => {
    setPdfBlob(null);
    setPages((prev) => {
      const item = prev.find((p) => p.id === id);
      if (item) URL.revokeObjectURL(item.previewUrl);
      return prev.filter((p) => p.id !== id);
    });
  };

  const clearAll = () => {
    pages.forEach((p) => URL.revokeObjectURL(p.previewUrl));
    setPages([]);
    setPdfBlob(null);
    setErrorMsg(null);
  };

  const handleGeneratePdf = async () => {
    if (pages.length === 0) return;
    setIsGenerating(true);
    setErrorMsg(null);
    setPdfBlob(null);
    try {
      const blob = await generatePdfFromImages(
        pages.map((p) => p.file),
        { pageSize, orientation, margin, fit, quality },
        (current, total) =>
          setProgressText(
            t('encodingPage', 'Encoding page {current} of {total}...')
              .replace('{current}', String(current))
              .replace('{total}', String(total))
          )
      );
      setPdfBlob(blob);
      const safeName = filename.trim().endsWith('.pdf')
        ? filename.trim()
        : `${filename.trim() || 'document'}.pdf`;
      triggerDownload(blob, safeName);
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : t('pdfGenerationFailed', 'PDF generation failed.'));
    } finally {
      setIsGenerating(false);
      setProgressText('');
    }
  };

  return (
    <ToolPageLayout
      tool={activeTool}
      onNavigate={onNavigate}
      lang={lang}
      ui={lang === 'de' ? deStrings?.layoutUi : lang === 'it' ? itStrings?.layoutUi : lang === 'pt' ? ptStrings?.layoutUi : lang === 'fr' ? frStrings?.layoutUi : esStrings?.layoutUi}
      canonicalPath={lang === 'de' ? toGermanPath(activeTool.slug) : lang === 'it' ? toItalianPath(activeTool.slug) : lang === 'es' ? toSpanishPath(activeTool.slug) : lang === 'pt' ? toPortuguesePath(activeTool.slug) : lang === 'fr' ? toFrenchPath(activeTool.slug) : undefined}
      alternates={lang !== 'en' ? getAlternates(activeTool.slug) : undefined}
      toolRegistry={toolRegistry}
      categoryLabels={categoryLabels}
    >
      <div className="space-y-6">
        <UploadZone
          onFilesSelected={handleFilesSelected}
          maxFileSizeMB={20}
          disabled={isGenerating}
          accept={EXTENDED_IMAGE_ACCEPT}
          allowedMimeTypes={EXTENDED_ALLOWED_MIME_TYPES}
          allowedExtensionsRegex={EXTENDED_ALLOWED_EXT_REGEX}
          supportedFormatsLabel="JPG, PNG, WebP, HEIC, GIF, BMP, SVG"
          title={t('uploadTitle', 'Drop images to combine into PDF')}
          strings={lang === 'de' ? deStrings?.uploadZone : lang === 'it' ? itStrings?.uploadZone : lang === 'pt' ? ptStrings?.uploadZone : lang === 'fr' ? frStrings?.uploadZone : esStrings?.uploadZone}
        />

        {errorMsg && (
          <div className="flex items-start gap-2 p-3.5 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
            <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {pages.length > 0 && (
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                  {t('pageSize', 'Page Size')}
                </label>
                <select
                  value={pageSize}
                  onChange={(e) => {
                    setPageSize(e.target.value as PdfPageSize);
                    setPdfBlob(null);
                  }}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                >
                  <option value="a4">{t('pageSizeA4', 'A4 (210 × 297 mm)')}</option>
                  <option value="letter">{t('pageSizeLetter', 'US Letter (8.5 × 11 in)')}</option>
                  <option value="fit">{t('pageSizeFit', 'Fit to Image Size')}</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                  {t('orientation', 'Orientation')}
                </label>
                <select
                  value={orientation}
                  disabled={pageSize === 'fit'}
                  onChange={(e) => {
                    setOrientation(e.target.value as PdfOrientation);
                    setPdfBlob(null);
                  }}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                >
                  <option value="auto">{t('orientationAuto', 'Auto (Match Photo)')}</option>
                  <option value="portrait">{t('orientationPortrait', 'Portrait')}</option>
                  <option value="landscape">{t('orientationLandscape', 'Landscape')}</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                  {t('margin', 'Margin')}
                </label>
                <select
                  value={margin}
                  onChange={(e) => {
                    setMargin(e.target.value as PdfMargin);
                    setPdfBlob(null);
                  }}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                >
                  <option value="none">{t('marginNone', 'No Margin (Full Bleed)')}</option>
                  <option value="small">{t('marginSmall', 'Small Margin')}</option>
                  <option value="medium">{t('marginMedium', 'Medium Margin')}</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                  {t('imagePlacement', 'Image Placement')}
                </label>
                <select
                  value={fit}
                  onChange={(e) => {
                    setFit(e.target.value as PdfImageFit);
                    setPdfBlob(null);
                  }}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                >
                  <option value="contain">{t('placementContain', 'Contain (Full Image)')}</option>
                  <option value="cover">{t('placementCover', 'Cover (Fill Page)')}</option>
                </select>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                <div className="flex-1 max-w-xs">
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    {t('pdfFilename', 'PDF Filename')}
                  </label>
                  <input
                    type="text"
                    value={filename}
                    onChange={(e) => setFilename(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex-1 max-w-xs">
                  <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                    {t('pdfImageQuality', 'PDF Image Quality:')}{' '}
                    <strong className="text-blue-600 font-mono">{quality}%</strong>
                  </label>
                  <input
                    type="range"
                    min={40}
                    max={98}
                    value={quality}
                    onChange={(e) => {
                      setQuality(parseInt(e.target.value, 10));
                      setPdfBlob(null);
                    }}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleGeneratePdf}
                  disabled={isGenerating}
                  className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-sm font-bold rounded-xl shadow-xs cursor-pointer"
                >
                  {isGenerating ? (
                    <>
                      <RotateCcw className="w-4 h-4 animate-spin" />
                      <span>{progressText || t('generatingPdf', 'Generating PDF...')}</span>
                    </>
                  ) : (
                    <>
                      <FileText className="w-4 h-4" />
                      <span>
                        {t('createDownloadPdf', 'Create & Download PDF ({count}p)').replace(
                          '{count}',
                          String(pages.length)
                        )}
                      </span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={clearAll}
                  disabled={isGenerating}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 bg-slate-100 hover:bg-red-50 hover:text-red-600 text-slate-600 text-sm font-medium rounded-xl cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                  <span className="hidden sm:inline">{t('clear', 'Clear')}</span>
                </button>
              </div>
            </div>

            {pdfBlob && (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-sm text-emerald-800 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>
                    {t('pdfReady', 'PDF ready ({count} {pages} · {size})')
                      .replace('{count}', String(pages.length))
                      .replace(
                        '{pages}',
                        pages.length === 1 ? t('pageSingular', 'page') : t('pagePlural', 'pages')
                      )
                      .replace('{size}', formatBytes(pdfBlob.size))}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    triggerDownload(
                      pdfBlob,
                      filename.trim().endsWith('.pdf') ? filename.trim() : `${filename.trim()}.pdf`
                    )
                  }
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>{t('downloadPdfAgain', 'Download PDF Again')}</span>
                </button>
              </div>
            )}
          </div>
        )}

        {pages.length > 0 && (
          <div className="space-y-3">
            <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wider">
              {t('pageOrder', 'Page Order ({count} {pages})')
                .replace('{count}', String(pages.length))
                .replace(
                  '{pages}',
                  pages.length === 1 ? t('pageOrderSingular', 'Page') : t('pageOrderPlural', 'Pages')
                )}
            </h2>
            {pages.map((page, index) => (
              <div
                key={page.id}
                className="bg-white border border-slate-200 rounded-xl p-3.5 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold flex items-center justify-center shrink-0">
                    {index + 1}
                  </span>
                  <img
                    src={page.previewUrl}
                    alt={page.name}
                    className="w-14 h-14 rounded-lg object-cover border border-slate-200 shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-slate-900 truncate">{page.name}</p>
                    <p className="text-xs text-slate-500 font-mono">
                      {page.width}×{page.height}px · {formatBytes(page.size)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <button
                    type="button"
                    disabled={index === 0}
                    onClick={() => movePage(index, -1)}
                    className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 disabled:opacity-30 rounded-lg cursor-pointer"
                    title={t('movePageUp', 'Move page up')}
                  >
                    <ArrowUp className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    disabled={index === pages.length - 1}
                    onClick={() => movePage(index, 1)}
                    className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 disabled:opacity-30 rounded-lg cursor-pointer"
                    title={t('movePageDown', 'Move page down')}
                  >
                    <ArrowDown className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => removePage(page.id)}
                    className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg cursor-pointer"
                    title={t('removePage', 'Remove page')}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </ToolPageLayout>
  );
};
