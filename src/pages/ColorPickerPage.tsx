import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Check, Copy, Pipette, Trash2, Download } from 'lucide-react';
import { TOOL_BY_SLUG } from '../data/tools';
import { ToolPageLayout } from '../components/ToolPageLayout';
import { UploadZone } from '../components/UploadZone';
import {
  EXTENDED_ALLOWED_EXT_REGEX,
  EXTENDED_ALLOWED_MIME_TYPES,
  EXTENDED_IMAGE_ACCEPT,
  loadExtendedImageInfo,
} from '../utils/imageProcessing';
import { triggerDownload } from '../utils/zip';

interface ColorValues {
  hex: string;
  rgb: string;
  hsl: string;
  cmyk: string;
  r: number;
  g: number;
  b: number;
  x: number;
  y: number;
}

interface ColorPickerPageProps {
  onNavigate: (path: string) => void;
}

function rgbToColorValues(r: number, g: number, b: number, x: number, y: number): ColorValues {
  const toHex = (n: number) => n.toString(16).padStart(2, '0').toUpperCase();
  const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  const rgb = `rgb(${r}, ${g}, ${b})`;

  const rn = r / 255;
  const gn = g / 255;
  const bn = b / 255;
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case rn:
        h = (gn - bn) / d + (gn < bn ? 6 : 0);
        break;
      case gn:
        h = (bn - rn) / d + 2;
        break;
      case bn:
        h = (rn - gn) / d + 4;
        break;
    }
    h /= 6;
  }

  const hsl = `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;

  const k = 1 - Math.max(rn, gn, bn);
  const c = k === 1 ? 0 : (1 - rn - k) / (1 - k);
  const m = k === 1 ? 0 : (1 - gn - k) / (1 - k);
  const yC = k === 1 ? 0 : (1 - bn - k) / (1 - k);
  const cmyk = `cmyk(${Math.round(c * 100)}%, ${Math.round(m * 100)}%, ${Math.round(
    yC * 100
  )}%, ${Math.round(k * 100)}%)`;

  return { hex, rgb, hsl, cmyk, r, g, b, x, y };
}

export const ColorPickerPage: React.FC<ColorPickerPageProps> = ({ onNavigate }) => {
  const tool = TOOL_BY_SLUG['/image-color-picker'];
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const loupeCanvasRef = useRef<HTMLCanvasElement>(null);

  const [imageName, setImageName] = useState<string>('');
  const [imageDims, setImageDims] = useState<{ w: number; h: number } | null>(null);
  const [hoverColor, setHoverColor] = useState<ColorValues | null>(null);
  const [selectedColor, setSelectedColor] = useState<ColorValues | null>(null);
  const [palette, setPalette] = useState<ColorValues[]>([]);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loadedImg, setLoadedImg] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    if (!loadedImg || !canvasRef.current) return;
    const canvas = canvasRef.current;
    canvas.width = loadedImg.naturalWidth || imageDims?.w || 500;
    canvas.height = loadedImg.naturalHeight || imageDims?.h || 500;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;
    ctx.drawImage(loadedImg, 0, 0, canvas.width, canvas.height);

    // Sample center pixel initially
    const cx = Math.floor(canvas.width / 2);
    const cy = Math.floor(canvas.height / 2);
    const data = ctx.getImageData(cx, cy, 1, 1).data;
    const initial = rgbToColorValues(data[0], data[1], data[2], cx, cy);
    setSelectedColor(initial);
    setHoverColor(initial);
  }, [loadedImg, imageDims]);

  const handleFilesSelected = async (files: File[]) => {
    const file = files[0];
    if (!file) return;
    setErrorMsg(null);
    try {
      const info = await loadExtendedImageInfo(file);
      setImageName(file.name);
      setImageDims({ w: info.width, h: info.height });
      setLoadedImg(info.img);
      setPalette([]);
      URL.revokeObjectURL(info.previewUrl);
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Unable to load image.');
    }
  };

  const sampleAtClientPoint = useCallback((clientX: number, clientY: number): ColorValues | null => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const rect = canvas.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return null;

    const x = Math.max(
      0,
      Math.min(canvas.width - 1, Math.floor(((clientX - rect.left) / rect.width) * canvas.width))
    );
    const y = Math.max(
      0,
      Math.min(canvas.height - 1, Math.floor(((clientY - rect.top) / rect.height) * canvas.height))
    );

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return null;
    const pixel = ctx.getImageData(x, y, 1, 1).data;

    // Draw 11x11 pixel magnifier loupe
    const loupe = loupeCanvasRef.current;
    if (loupe) {
      const lCtx = loupe.getContext('2d');
      if (lCtx) {
        lCtx.imageSmoothingEnabled = false;
        lCtx.clearRect(0, 0, loupe.width, loupe.height);
        const radius = 5;
        const size = radius * 2 + 1;
        const sx = Math.max(0, Math.min(canvas.width - size, x - radius));
        const sy = Math.max(0, Math.min(canvas.height - size, y - radius));
        lCtx.drawImage(canvas, sx, sy, size, size, 0, 0, loupe.width, loupe.height);
        // Crosshair box on center pixel
        const cell = loupe.width / size;
        const cx = (x - sx) * cell;
        const cy = (y - sy) * cell;
        lCtx.strokeStyle = '#ffffff';
        lCtx.lineWidth = 2;
        lCtx.strokeRect(cx, cy, cell, cell);
        lCtx.strokeStyle = '#0f172a';
        lCtx.lineWidth = 1;
        lCtx.strokeRect(cx + 1, cy + 1, cell - 2, cell - 2);
      }
    }

    return rgbToColorValues(pixel[0], pixel[1], pixel[2], x, y);
  }, []);

  const handleCanvasMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const c = sampleAtClientPoint(e.clientX, e.clientY);
    if (c) setHoverColor(c);
  };

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const c = sampleAtClientPoint(e.clientX, e.clientY);
    if (!c) return;
    setSelectedColor(c);
    setPalette((prev) => {
      if (prev.some((p) => p.hex === c.hex)) return prev;
      return [c, ...prev].slice(0, 24);
    });
  };

  const copyValue = async (key: string, val: string) => {
    await navigator.clipboard.writeText(val);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 1500);
  };

  const exportCssVariables = () => {
    const list = palette.length > 0 ? palette : selectedColor ? [selectedColor] : [];
    const css = `:root {\n${list
      .map((c, idx) => `  --color-${idx + 1}: ${c.hex}; /* ${c.rgb} */`)
      .join('\n')}\n}\n`;
    triggerDownload(new Blob([css], { type: 'text/css' }), 'picked-colors.css');
  };

  const activeColor = hoverColor || selectedColor;

  return (
    <ToolPageLayout tool={tool} onNavigate={onNavigate}>
      <div className="space-y-6">
        {!loadedImg && (
          <UploadZone
            onFilesSelected={handleFilesSelected}
            maxFileSizeMB={20}
            multiple={false}
            accept={EXTENDED_IMAGE_ACCEPT}
            allowedMimeTypes={EXTENDED_ALLOWED_MIME_TYPES}
            allowedExtensionsRegex={EXTENDED_ALLOWED_EXT_REGEX}
            supportedFormatsLabel="JPG, PNG, WebP, HEIC, SVG, BMP, GIF"
            title="Drop an image or paste screenshot (Ctrl+V)"
          />
        )}

        {errorMsg && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
            {errorMsg}
          </div>
        )}

        {loadedImg && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Interactive Image Canvas */}
            <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl p-4 shadow-xs space-y-3">
              <div className="flex items-center justify-between gap-2">
                <div className="text-xs text-slate-600 font-medium truncate">
                  <strong className="text-slate-900">{imageName}</strong> ({imageDims?.w}×
                  {imageDims?.h}px) — Click anywhere to pin a color
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setLoadedImg(null);
                    setSelectedColor(null);
                    setHoverColor(null);
                    setPalette([]);
                  }}
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-100 hover:bg-red-50 hover:text-red-600 text-slate-600 text-xs font-semibold rounded-lg cursor-pointer shrink-0"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>New Image</span>
                </button>
              </div>

              <div className="bg-slate-950/5 border border-slate-200 rounded-xl overflow-hidden flex items-center justify-center p-2">
                <canvas
                  ref={canvasRef}
                  onMouseMove={handleCanvasMove}
                  onClick={handleCanvasClick}
                  className="max-w-full max-h-[60vh] w-auto h-auto cursor-crosshair rounded"
                />
              </div>
            </div>

            {/* Color Inspector Panel */}
            <div className="space-y-4">
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Pipette className="w-4 h-4 text-blue-600" />
                    <span>Pixel Inspector</span>
                  </h2>
                  {activeColor && (
                    <span className="text-xs font-mono text-slate-500">
                      x:{activeColor.x}, y:{activeColor.y}
                    </span>
                  )}
                </div>

                {/* Live Loupe + Swatch */}
                <div className="flex items-center gap-4">
                  <canvas
                    ref={loupeCanvasRef}
                    width={88}
                    height={88}
                    className="w-22 h-22 rounded-xl border border-slate-300 bg-slate-100 shrink-0"
                  />
                  {selectedColor && (
                    <div className="flex-1 space-y-2">
                      <div
                        className="w-full h-14 rounded-xl border border-slate-200 shadow-inner"
                        style={{ backgroundColor: (activeColor || selectedColor).hex }}
                      />
                      <p className="text-xs font-mono font-bold text-slate-900 text-center">
                        {(activeColor || selectedColor).hex}
                      </p>
                    </div>
                  )}
                </div>

                {selectedColor && (
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    {(
                      [
                        { label: 'HEX', value: selectedColor.hex },
                        { label: 'RGB', value: selectedColor.rgb },
                        { label: 'HSL', value: selectedColor.hsl },
                        { label: 'CMYK', value: selectedColor.cmyk },
                      ] as const
                    ).map((row) => (
                      <div
                        key={row.label}
                        className="flex items-center justify-between gap-2 p-2.5 bg-slate-50 rounded-xl border border-slate-200/70"
                      >
                        <div className="min-w-0">
                          <span className="text-[10px] font-bold uppercase text-slate-400 block">
                            {row.label}
                          </span>
                          <span className="text-xs font-mono font-semibold text-slate-800 truncate block">
                            {row.value}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => copyValue(row.label, row.value)}
                          className="p-1.5 text-slate-500 hover:text-blue-600 hover:bg-white rounded-lg cursor-pointer shrink-0"
                          title={`Copy ${row.label}`}
                        >
                          {copiedKey === row.label ? (
                            <Check className="w-4 h-4 text-emerald-600" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Picked Swatch History */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-900">
                    Picked Swatches ({palette.length})
                  </h3>
                  {palette.length > 0 && (
                    <button
                      type="button"
                      onClick={exportCssVariables}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:underline cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Export CSS</span>
                    </button>
                  )}
                </div>

                {palette.length === 0 ? (
                  <p className="text-xs text-slate-500">
                    Click pixels on the image to save colors to your palette.
                  </p>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {palette.map((c) => (
                      <button
                        key={c.hex}
                        type="button"
                        onClick={() => {
                          setSelectedColor(c);
                          copyValue(`swatch-${c.hex}`, c.hex);
                        }}
                        className="group flex items-center gap-1.5 pl-1.5 pr-2.5 py-1 rounded-lg border border-slate-200 hover:border-blue-400 bg-slate-50 text-xs font-mono cursor-pointer"
                        title={`Click to select & copy ${c.hex}`}
                      >
                        <span
                          className="w-4 h-4 rounded border border-slate-300"
                          style={{ backgroundColor: c.hex }}
                        />
                        <span className="text-slate-700 font-semibold">{c.hex}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </ToolPageLayout>
  );
};
