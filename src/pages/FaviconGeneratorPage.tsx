import React, { useState, useEffect, useRef } from 'react';
import { Check, Copy, Download, FileArchive, RotateCcw, Trash2 } from 'lucide-react';
import { TOOL_BY_SLUG } from '../data/tools';
import type { ToolDefinition } from '../data/tools';
import type { SupportedLang } from '../locales/config';
import type { ToolPageLayoutStrings } from '../components/ToolPageLayout';
import type { UploadZoneStrings } from '../components/UploadZone';
import type { ComparisonModalStrings } from '../components/ComparisonModal';
import { toSpanishPath } from '../locales/es/slugs';
import { toPortuguesePath } from '../locales/pt/slugs';
import { toFrenchPath } from '../locales/fr/slugs';
import { toGermanPath } from '../locales/de/slugs';
import { toItalianPath } from '../locales/it/slugs';
import { toIndonesianPath } from '../locales/id/slugs';
import { toRussianPath } from '../locales/ru/slugs';
import { toJapanesePath } from '../locales/ja/slugs';
import { toKoreanPath } from '../locales/ko/slugs';
import { toChinesePath } from '../locales/zh/slugs';
import { getAlternates } from '../locales/alternates';
import { ToolPageLayout } from '../components/ToolPageLayout';
import { UploadZone } from '../components/UploadZone';
import {
  EXTENDED_ALLOWED_EXT_REGEX,
  EXTENDED_ALLOWED_MIME_TYPES,
  EXTENDED_IMAGE_ACCEPT,
} from '../utils/imageProcessing';
import { FaviconPackageResult, generateFaviconPackage } from '../utils/icoGenerator';
import { formatBytes } from '../utils/formatters';
import { createFilesZipArchive, triggerDownload } from '../utils/zip';
import { getPastelCardClass } from '../utils/pastel';

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

export interface PageIdStrings {
  layoutUi: ToolPageLayoutStrings;
  uploadZone: UploadZoneStrings;
  comparisonModal: ComparisonModalStrings;
  toolUi: Record<string, string>;
}

export interface PageRuStrings {
  layoutUi: ToolPageLayoutStrings;
  uploadZone: UploadZoneStrings;
  comparisonModal: ComparisonModalStrings;
  toolUi: Record<string, string>;
}

export interface PageJaStrings {
  layoutUi: ToolPageLayoutStrings;
  uploadZone: UploadZoneStrings;
  comparisonModal: ComparisonModalStrings;
  toolUi: Record<string, string>;
}

export interface PageKoStrings {
  layoutUi: ToolPageLayoutStrings;
  uploadZone: UploadZoneStrings;
  comparisonModal: ComparisonModalStrings;
  toolUi: Record<string, string>;
}

export interface PageZhStrings {
  layoutUi: ToolPageLayoutStrings;
  uploadZone: UploadZoneStrings;
  comparisonModal: ComparisonModalStrings;
  toolUi: Record<string, string>;
}

interface FaviconGeneratorPageProps {
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
  idStrings?: PageIdStrings;
  ruStrings?: PageRuStrings;
  jaStrings?: PageJaStrings;
  koStrings?: PageKoStrings;
  zhStrings?: PageZhStrings;
}

export const FaviconGeneratorPage: React.FC<FaviconGeneratorPageProps> = ({
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
  idStrings,
  ruStrings,
  jaStrings,
  koStrings,
  zhStrings,
}) => {
  const activeTool = tool ?? TOOL_BY_SLUG['/favicon-generator'];
  const t = (key: string, fallback: string) => {
    if (lang === 'zh' && zhStrings?.toolUi) return (zhStrings.toolUi[key] as string | undefined) ?? fallback;
    if (lang === 'ja' && jaStrings?.toolUi) return (jaStrings.toolUi[key] as string | undefined) ?? fallback;
    if (lang === 'ko' && koStrings?.toolUi) return (koStrings.toolUi[key] as string | undefined) ?? fallback;
    if (lang === 'id' && idStrings?.toolUi) return (idStrings.toolUi[key] as string | undefined) ?? fallback;
    if (lang === 'ru' && ruStrings?.toolUi) return (ruStrings.toolUi[key] as string | undefined) ?? fallback;
    if (lang === 'de' && deStrings?.toolUi) return (deStrings.toolUi[key] as string | undefined) ?? fallback;
    if (lang === 'it' && itStrings?.toolUi) return (itStrings.toolUi[key] as string | undefined) ?? fallback;
    if (lang === 'pt' && ptStrings?.toolUi) return (ptStrings.toolUi[key] as string | undefined) ?? fallback;
    if (lang === 'fr' && frStrings?.toolUi) return (frStrings.toolUi[key] as string | undefined) ?? fallback;
    if (lang === 'es' && esStrings?.toolUi) return (esStrings.toolUi[key] as string | undefined) ?? fallback;
    return fallback;
  };

  const [sourceFile, setSourceFile] = useState<File | null>(null);
  const [bgTransparent, setBgTransparent] = useState<boolean>(true);
  const [backgroundColor, setBackgroundColor] = useState<string>('#ffffff');
  const [paddingPercent, setPaddingPercent] = useState<number>(8);
  const [borderRadiusPercent, setBorderRadiusPercent] = useState<number>(12);
  const [pkg, setPkg] = useState<FaviconPackageResult | null>(null);
  const pkgRef = useRef<FaviconPackageResult | null>(null);
  pkgRef.current = pkg;

  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [isZipping, setIsZipping] = useState<boolean>(false);
  const [copiedHtml, setCopiedHtml] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const revokePackage = (p: FaviconPackageResult | null) => {
    if (!p) return;
    p.assets.forEach((a) => URL.revokeObjectURL(a.previewUrl));
  };

  useEffect(() => {
    return () => revokePackage(pkgRef.current);
  }, []);

  const rebuildPackage = async (
    file: File,
    transparent: boolean,
    bg: string,
    pad: number,
    radius: number
  ) => {
    setIsGenerating(true);
    setErrorMsg(null);
    try {
      const next = await generateFaviconPackage(file, {
        backgroundColor: transparent ? 'transparent' : bg,
        paddingPercent: pad,
        borderRadiusPercent: radius,
      });
      revokePackage(pkgRef.current);
      setPkg(next);
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : t('errorGenerateFailed', 'Failed to generate favicon package.'));
    } finally {
      setIsGenerating(false);
    }
  };

  const handleFilesSelected = async (files: File[]) => {
    const file = files[0];
    if (!file) return;
    setSourceFile(file);
    await rebuildPackage(file, bgTransparent, backgroundColor, paddingPercent, borderRadiusPercent);
  };

  const handleDownloadAllZip = async () => {
    if (!pkg) return;
    setIsZipping(true);
    try {
      const zipFiles = [
        { filename: 'favicon.ico', blob: pkg.icoBlob },
        { filename: 'site.webmanifest', blob: pkg.manifestBlob },
        ...pkg.assets.map((a) => ({ filename: a.filename, blob: a.blob })),
      ];
      const zipBlob = await createFilesZipArchive(zipFiles, 'favicons');
      triggerDownload(zipBlob, 'favicon_package_compressmypic.zip');
    } finally {
      setIsZipping(false);
    }
  };

  const handleCopySnippet = async () => {
    if (!pkg) return;
    await navigator.clipboard.writeText(pkg.htmlSnippet);
    setCopiedHtml(true);
    setTimeout(() => setCopiedHtml(false), 2000);
  };

  const handleClear = () => {
    revokePackage(pkg);
    setPkg(null);
    setSourceFile(null);
    setErrorMsg(null);
  };

  return (
    <ToolPageLayout
      tool={activeTool}
      onNavigate={onNavigate}
      lang={lang}
      ui={lang === 'zh' ? zhStrings?.layoutUi : lang === 'ja' ? jaStrings?.layoutUi : lang === 'ko' ? koStrings?.layoutUi : lang === 'id' ? idStrings?.layoutUi : lang === 'ru' ? ruStrings?.layoutUi : lang === 'de' ? deStrings?.layoutUi : lang === 'it' ? itStrings?.layoutUi : lang === 'pt' ? ptStrings?.layoutUi : lang === 'fr' ? frStrings?.layoutUi : esStrings?.layoutUi}
      canonicalPath={lang === 'zh' ? toChinesePath(activeTool.slug) : lang === 'ja' ? toJapanesePath(activeTool.slug) : lang === 'ko' ? toKoreanPath(activeTool.slug) : lang === 'id' ? toIndonesianPath(activeTool.slug) : lang === 'ru' ? toRussianPath(activeTool.slug) : lang === 'de' ? toGermanPath(activeTool.slug) : lang === 'it' ? toItalianPath(activeTool.slug) : lang === 'es' ? toSpanishPath(activeTool.slug) : lang === 'pt' ? toPortuguesePath(activeTool.slug) : lang === 'fr' ? toFrenchPath(activeTool.slug) : undefined}
      alternates={lang !== 'en' ? getAlternates(activeTool.slug) : undefined}
      toolRegistry={toolRegistry}
      categoryLabels={categoryLabels}
    >
      <div className="space-y-6">
        <UploadZone
          onFilesSelected={handleFilesSelected}
          maxFileSizeMB={20}
          multiple={false}
          disabled={isGenerating}
          accept={EXTENDED_IMAGE_ACCEPT}
          allowedMimeTypes={EXTENDED_ALLOWED_MIME_TYPES}
          allowedExtensionsRegex={EXTENDED_ALLOWED_EXT_REGEX}
          supportedFormatsLabel="PNG, SVG, JPG, WebP, HEIC"
          strings={lang === 'zh' ? zhStrings?.uploadZone : lang === 'ja' ? jaStrings?.uploadZone : lang === 'ko' ? koStrings?.uploadZone : lang === 'id' ? idStrings?.uploadZone : lang === 'ru' ? ruStrings?.uploadZone : lang === 'de' ? deStrings?.uploadZone : lang === 'it' ? itStrings?.uploadZone : lang === 'pt' ? ptStrings?.uploadZone : lang === 'fr' ? frStrings?.uploadZone : esStrings?.uploadZone}
          title={t('uploadTitle', 'Drop your logo or icon here')}
          subtitle={
            <>
              {t('uploadSubtitlePrefix', 'Square PNG or SVG recommended · ')}
              <span className="text-[#7c3aed] dark:text-[#a78bfa] font-semibold underline underline-offset-2">
                {t('uploadBrowseFile', 'browse file')}
              </span>
            </>
          }
        />

        {errorMsg && (
          <div className="p-4 pastel-card-14 border rounded-2xl text-sm text-[#b91c1c] dark:text-[#fca5a5]">
            {errorMsg}
          </div>
        )}

        {sourceFile && (
          <div className="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-5 sm:p-6 shadow-[var(--shadow)] space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--ink-3)] block mb-2">
                  {t('backgroundFill', 'Background Fill')}
                </span>
                <div className="flex items-center gap-3">
                  <label className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--ink-2)] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={bgTransparent}
                      onChange={(e) => {
                        const next = e.target.checked;
                        setBgTransparent(next);
                        rebuildPackage(
                          sourceFile,
                          next,
                          backgroundColor,
                          paddingPercent,
                          borderRadiusPercent
                        );
                      }}
                      className="rounded border-[var(--line-strong)] accent-[#7c3aed]"
                    />
                    <span>{t('transparent', 'Transparent')}</span>
                  </label>
                  {!bgTransparent && (
                    <input
                      type="color"
                      value={backgroundColor}
                      onChange={(e) => {
                        const next = e.target.value;
                        setBackgroundColor(next);
                        rebuildPackage(
                          sourceFile,
                          bgTransparent,
                          next,
                          paddingPercent,
                          borderRadiusPercent
                        );
                      }}
                      className="w-8 h-8 rounded-[8px] border border-[var(--line-strong)] bg-[var(--surface)] cursor-pointer"
                    />
                  )}
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="font-bold uppercase tracking-wider text-[var(--ink-3)]">
                    {t('padding', 'Padding')}
                  </span>
                  <span className="font-mono font-bold text-[#7c3aed] dark:text-[#a78bfa]">{paddingPercent}%</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={25}
                  value={paddingPercent}
                  onChange={(e) => {
                    const next = parseInt(e.target.value, 10);
                    setPaddingPercent(next);
                    rebuildPackage(
                      sourceFile,
                      bgTransparent,
                      backgroundColor,
                      next,
                      borderRadiusPercent
                    );
                  }}
                  className="w-full h-2 bg-[var(--line)] rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="font-bold uppercase tracking-wider text-[var(--ink-3)]">
                    {t('cornerRadius', 'Corner Radius')}
                  </span>
                  <span className="font-mono font-bold text-[#7c3aed] dark:text-[#a78bfa]">{borderRadiusPercent}%</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={50}
                  value={borderRadiusPercent}
                  onChange={(e) => {
                    const next = parseInt(e.target.value, 10);
                    setBorderRadiusPercent(next);
                    rebuildPackage(
                      sourceFile,
                      bgTransparent,
                      backgroundColor,
                      paddingPercent,
                      next
                    );
                  }}
                  className="w-full h-2 bg-[var(--line)] rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>

            {pkg && (
              <div className="pt-4 border-t border-[var(--line)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                {/* Browser Tab Preview */}
                <div className="flex items-center gap-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-t-lg bg-[var(--surface-2)] border border-[var(--line)] text-xs font-medium text-[var(--ink)]">
                    <img src={pkg.icoPreviewUrl} alt={t('tabPreviewAlt', 'Tab preview')} className="w-4 h-4" />
                    <span>{t('myWebsite', 'My Website')}</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-t-lg bg-[#0f172a] border border-[#334155] text-xs font-medium text-[#f8fafc]">
                    <img src={pkg.icoPreviewUrl} alt={t('darkTabPreviewAlt', 'Dark tab preview')} className="w-4 h-4" />
                    <span>{t('darkModeTab', 'Dark Mode Tab')}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={handleDownloadAllZip}
                    disabled={isZipping || isGenerating}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 btn-purple-grad text-sm font-semibold shadow-xs cursor-pointer"
                  >
                    {isGenerating ? (
                      <RotateCcw className="w-4 h-4 animate-spin" />
                    ) : (
                      <FileArchive className="w-4 h-4" />
                    )}
                    <span>{isZipping ? t('packingZip', 'Packing ZIP...') : t('downloadAllZip', 'Download All (ZIP)')}</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleClear}
                    className="p-2.5 bg-[var(--surface-2)] border border-[var(--line)] hover:border-[#fecaca] hover:bg-[#fee2e2] hover:text-[#dc2626] dark:hover:bg-[#ef4444]/15 dark:hover:text-[#fca5a5] text-[var(--ink-2)] rounded-[11px] cursor-pointer transition-colors"
                    title={t('clear', 'Clear')}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {pkg && (
          <div className="space-y-6">
            {/* Generated Icons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Multi-size favicon.ico card */}
              <div className={`border rounded-2xl p-4 shadow-[var(--shadow)] flex items-center justify-between gap-3 ${getPastelCardClass(0)}`}>
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-12 h-12 rounded-xl bg-[var(--surface)] border border-[var(--line)] flex items-center justify-center shrink-0">
                    <img src={pkg.icoPreviewUrl} alt="favicon.ico" className="w-8 h-8 object-contain" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-[var(--ink-navy)] truncate">favicon.ico</p>
                    <p className="text-xs text-[var(--ink-3)] font-mono">
                      16+32+48px · {formatBytes(pkg.icoBlob.size)}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => triggerDownload(pkg.icoBlob, 'favicon.ico')}
                  className="p-2 bg-[var(--surface)] border border-[var(--line)] hover:bg-[#7c3aed] hover:text-white hover:border-[#7c3aed] text-[#7c3aed] dark:text-[#c4b5fd] rounded-[11px] cursor-pointer transition-colors"
                  title={t('downloadFaviconIco', 'Download favicon.ico')}
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>

              {pkg.assets.map((asset, idx) => (
                <div
                  key={asset.filename}
                  className={`border rounded-2xl p-4 shadow-[var(--shadow)] flex items-center justify-between gap-3 ${getPastelCardClass(idx + 1)}`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-12 h-12 rounded-xl bg-[var(--surface)] border border-[var(--line)] flex items-center justify-center shrink-0 p-1.5">
                      <img
                        src={asset.previewUrl}
                        alt={asset.filename}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-[var(--ink-navy)] truncate">{asset.filename}</p>
                      <p className="text-xs text-[var(--ink-3)] font-mono">
                        {asset.label} · {formatBytes(asset.blob.size)}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => triggerDownload(asset.blob, asset.filename)}
                    className="p-2 bg-[var(--surface)] border border-[var(--line)] hover:bg-[#7c3aed] hover:text-white hover:border-[#7c3aed] text-[#7c3aed] dark:text-[#c4b5fd] rounded-[11px] cursor-pointer transition-colors"
                    title={t('downloadFile', 'Download {filename}').replace('{filename}', asset.filename)}
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* HTML Head Snippet */}
            <div className="bg-[#0f172a] text-[#e2e8f0] border border-[#334155] rounded-2xl p-5 shadow-[var(--shadow)]">
              <div className="flex items-center justify-between gap-4 mb-3">
                <h3 className="font-sans text-base font-bold text-white">{t('htmlHeadSnippet', 'HTML <head> Snippet')}</h3>
                <button
                  type="button"
                  onClick={handleCopySnippet}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#1e293b] hover:bg-[#334155] border border-[#475569] text-white text-xs font-semibold rounded-[11px] cursor-pointer transition-colors"
                >
                  {copiedHtml ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#4ade80]" />
                      <span>{t('copied', 'Copied!')}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t('copyHtml', 'Copy HTML')}</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="text-xs font-mono text-[#c4b5fd] overflow-x-auto leading-relaxed">
                {pkg.htmlSnippet}
              </pre>
            </div>
          </div>
        )}
      </div>
    </ToolPageLayout>
  );
};
