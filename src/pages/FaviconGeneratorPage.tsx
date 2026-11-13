import React, { useState, useEffect, useRef } from 'react';
import { Check, Copy, Download, FileArchive, RotateCcw, Trash2 } from 'lucide-react';
import { TOOL_BY_SLUG } from '../data/tools';
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

interface FaviconGeneratorPageProps {
  onNavigate: (path: string) => void;
}

export const FaviconGeneratorPage: React.FC<FaviconGeneratorPageProps> = ({ onNavigate }) => {
  const tool = TOOL_BY_SLUG['/favicon-generator'];
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
      setErrorMsg(err instanceof Error ? err.message : 'Failed to generate favicon package.');
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
    <ToolPageLayout tool={tool} onNavigate={onNavigate}>
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
          title="Drop your logo or icon here"
          subtitle={
            <>
              Square PNG or SVG recommended ·{' '}
              <span className="text-blue-600 font-semibold underline underline-offset-2">
                browse file
              </span>
            </>
          }
        />

        {errorMsg && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
            {errorMsg}
          </div>
        )}

        {sourceFile && (
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Background Fill
                </span>
                <div className="flex items-center gap-3">
                  <label className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 cursor-pointer">
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
                      className="rounded border-slate-300 text-blue-600"
                    />
                    <span>Transparent</span>
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
                      className="w-8 h-8 rounded border border-slate-300 cursor-pointer"
                    />
                  )}
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="font-bold uppercase tracking-wider text-slate-500">
                    Padding
                  </span>
                  <span className="font-mono font-bold text-blue-600">{paddingPercent}%</span>
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
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="font-bold uppercase tracking-wider text-slate-500">
                    Corner Radius
                  </span>
                  <span className="font-mono font-bold text-blue-600">{borderRadiusPercent}%</span>
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
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>

            {pkg && (
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                {/* Browser Tab Preview */}
                <div className="flex items-center gap-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-t-lg bg-slate-100 border border-slate-200 text-xs font-medium text-slate-700">
                    <img src={pkg.icoPreviewUrl} alt="Tab preview" className="w-4 h-4" />
                    <span>My Website</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-t-lg bg-slate-900 text-xs font-medium text-slate-200">
                    <img src={pkg.icoPreviewUrl} alt="Dark tab preview" className="w-4 h-4" />
                    <span>Dark Mode Tab</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={handleDownloadAllZip}
                    disabled={isZipping || isGenerating}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl shadow-xs cursor-pointer"
                  >
                    {isGenerating ? (
                      <RotateCcw className="w-4 h-4 animate-spin" />
                    ) : (
                      <FileArchive className="w-4 h-4" />
                    )}
                    <span>{isZipping ? 'Packing ZIP...' : 'Download All (ZIP)'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleClear}
                    className="p-2.5 bg-slate-100 hover:bg-red-50 hover:text-red-600 text-slate-600 rounded-xl cursor-pointer"
                    title="Clear"
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
              <div className="bg-white border border-slate-200 rounded-2xl p-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                    <img src={pkg.icoPreviewUrl} alt="favicon.ico" className="w-8 h-8 object-contain" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-slate-900 truncate">favicon.ico</p>
                    <p className="text-xs text-slate-500">
                      16+32+48px · {formatBytes(pkg.icoBlob.size)}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => triggerDownload(pkg.icoBlob, 'favicon.ico')}
                  className="p-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg cursor-pointer"
                  title="Download favicon.ico"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>

              {pkg.assets.map((asset) => (
                <div
                  key={asset.filename}
                  className="bg-white border border-slate-200 rounded-2xl p-4 flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 p-1.5">
                      <img
                        src={asset.previewUrl}
                        alt={asset.filename}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-slate-900 truncate">{asset.filename}</p>
                      <p className="text-xs text-slate-500">
                        {asset.label} · {formatBytes(asset.blob.size)}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => triggerDownload(asset.blob, asset.filename)}
                    className="p-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg cursor-pointer"
                    title={`Download ${asset.filename}`}
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* HTML Head Snippet */}
            <div className="bg-slate-900 text-slate-100 rounded-2xl p-5">
              <div className="flex items-center justify-between gap-4 mb-3">
                <h3 className="text-sm font-bold text-white">HTML &lt;head&gt; Snippet</h3>
                <button
                  type="button"
                  onClick={handleCopySnippet}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-semibold rounded-lg cursor-pointer"
                >
                  {copiedHtml ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy HTML</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="text-xs font-mono text-blue-200 overflow-x-auto leading-relaxed">
                {pkg.htmlSnippet}
              </pre>
            </div>
          </div>
        )}
      </div>
    </ToolPageLayout>
  );
};
