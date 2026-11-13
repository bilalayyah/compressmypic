/**
 * Cross-browser pixel and canvas effects for Batch B editing tools.
 * Runs 100% locally in the browser without external libraries.
 */

export type FilterPresetId =
  | 'original'
  | 'grayscale'
  | 'sepia'
  | 'vintage'
  | 'warm'
  | 'cool'
  | 'high-contrast'
  | 'fade'
  | 'dramatic'
  | 'noir'
  | 'golden-hour'
  | 'invert';

export interface FilterPresetMeta {
  id: FilterPresetId;
  label: string;
}

export const FILTER_PRESETS: FilterPresetMeta[] = [
  { id: 'original', label: 'Original' },
  { id: 'grayscale', label: 'Grayscale' },
  { id: 'sepia', label: 'Sepia' },
  { id: 'vintage', label: 'Vintage' },
  { id: 'warm', label: 'Warm' },
  { id: 'cool', label: 'Cool' },
  { id: 'high-contrast', label: 'High Contrast' },
  { id: 'fade', label: 'Matte Fade' },
  { id: 'dramatic', label: 'Dramatic' },
  { id: 'noir', label: 'B&W Noir' },
  { id: 'golden-hour', label: 'Golden Hour' },
  { id: 'invert', label: 'Invert' },
];

function clamp255(v: number): number {
  return v < 0 ? 0 : v > 255 ? 255 : v;
}

/**
 * Applies brightness (-100..100), contrast (-100..100), and saturation (-100..100)
 * pixel-by-pixel on ImageData for 100% cross-browser reliability (including iOS Safari).
 */
export function applyToneAdjustmentsToCanvas(
  sourceImg: HTMLImageElement,
  targetCanvas: HTMLCanvasElement,
  options: {
    brightness?: number; // -100 to 100
    contrast?: number; // -100 to 100
    saturation?: number; // -100 to 100
    maxPreviewDimension?: number;
  }
): void {
  const srcW = sourceImg.naturalWidth;
  const srcH = sourceImg.naturalHeight;
  if (!srcW || !srcH) return;

  let outW = srcW;
  let outH = srcH;
  if (options.maxPreviewDimension && Math.max(srcW, srcH) > options.maxPreviewDimension) {
    const scale = options.maxPreviewDimension / Math.max(srcW, srcH);
    outW = Math.max(1, Math.round(srcW * scale));
    outH = Math.max(1, Math.round(srcH * scale));
  }

  targetCanvas.width = outW;
  targetCanvas.height = outH;
  const ctx = targetCanvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) return;

  ctx.drawImage(sourceImg, 0, 0, outW, outH);

  const brightness = options.brightness ?? 0;
  const contrast = options.contrast ?? 0;
  const saturation = options.saturation ?? 0;

  if (brightness === 0 && contrast === 0 && saturation === 0) return;

  const imgData = ctx.getImageData(0, 0, outW, outH);
  const d = imgData.data;

  const bOffset = (brightness / 100) * 255;
  const cVal = (contrast / 100) * 255;
  const cFactor = (259 * (cVal + 255)) / (255 * (259 - cVal));
  const satMult = 1 + saturation / 100;

  for (let i = 0; i < d.length; i += 4) {
    let r = d[i];
    let g = d[i + 1];
    let b = d[i + 2];

    if (brightness !== 0) {
      r += bOffset;
      g += bOffset;
      b += bOffset;
    }

    if (contrast !== 0) {
      r = cFactor * (r - 128) + 128;
      g = cFactor * (g - 128) + 128;
      b = cFactor * (b - 128) + 128;
    }

    if (saturation !== 0) {
      const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      r = lum + (r - lum) * satMult;
      g = lum + (g - lum) * satMult;
      b = lum + (b - lum) * satMult;
    }

    d[i] = clamp255(r);
    d[i + 1] = clamp255(g);
    d[i + 2] = clamp255(b);
  }

  ctx.putImageData(imgData, 0, 0);
}

/**
 * Applies a named filter preset with smooth intensity blending (0..100%).
 */
export function applyFilterPresetToCanvas(
  sourceImg: HTMLImageElement,
  targetCanvas: HTMLCanvasElement,
  preset: FilterPresetId,
  intensity: number = 100,
  maxPreviewDimension?: number
): void {
  const srcW = sourceImg.naturalWidth;
  const srcH = sourceImg.naturalHeight;
  if (!srcW || !srcH) return;

  let outW = srcW;
  let outH = srcH;
  if (maxPreviewDimension && Math.max(srcW, srcH) > maxPreviewDimension) {
    const scale = maxPreviewDimension / Math.max(srcW, srcH);
    outW = Math.max(1, Math.round(srcW * scale));
    outH = Math.max(1, Math.round(srcH * scale));
  }

  targetCanvas.width = outW;
  targetCanvas.height = outH;
  const ctx = targetCanvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) return;

  ctx.drawImage(sourceImg, 0, 0, outW, outH);
  if (preset === 'original' || intensity <= 0) return;

  const t = Math.max(0, Math.min(1, intensity / 100));
  const imgData = ctx.getImageData(0, 0, outW, outH);
  const d = imgData.data;

  for (let i = 0; i < d.length; i += 4) {
    const r = d[i];
    const g = d[i + 1];
    const b = d[i + 2];
    let nr = r;
    let ng = g;
    let nb = b;

    switch (preset) {
      case 'grayscale': {
        const lum = 0.299 * r + 0.587 * g + 0.114 * b;
        nr = ng = nb = lum;
        break;
      }
      case 'sepia': {
        nr = r * 0.393 + g * 0.769 + b * 0.189;
        ng = r * 0.349 + g * 0.686 + b * 0.168;
        nb = r * 0.272 + g * 0.534 + b * 0.131;
        break;
      }
      case 'vintage': {
        const sr = r * 0.393 + g * 0.769 + b * 0.189;
        const sg = r * 0.349 + g * 0.686 + b * 0.168;
        const sb = r * 0.272 + g * 0.534 + b * 0.131;
        nr = r * 0.45 + sr * 0.55 + 12;
        ng = g * 0.45 + sg * 0.55 + 6;
        nb = b * 0.45 + sb * 0.55 - 8;
        break;
      }
      case 'warm': {
        nr = r + 22;
        ng = g + 8;
        nb = b - 18;
        break;
      }
      case 'cool': {
        nr = r - 18;
        ng = g + 4;
        nb = b + 24;
        break;
      }
      case 'high-contrast': {
        const f = 1.45;
        nr = f * (r - 128) + 128;
        ng = f * (g - 128) + 128;
        nb = f * (b - 128) + 128;
        break;
      }
      case 'fade': {
        nr = r * 0.8 + 32;
        ng = g * 0.8 + 30;
        nb = b * 0.8 + 36;
        break;
      }
      case 'dramatic': {
        const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        const dr = lum + (r - lum) * 0.65;
        const dg = lum + (g - lum) * 0.65;
        const db = lum + (b - lum) * 0.65;
        const f = 1.38;
        nr = f * (dr - 128) + 122;
        ng = f * (dg - 128) + 122;
        nb = f * (db - 128) + 122;
        break;
      }
      case 'noir': {
        const lum = 0.299 * r + 0.587 * g + 0.114 * b;
        const f = 1.65;
        const v = f * (lum - 128) + 124;
        nr = ng = nb = v;
        break;
      }
      case 'golden-hour': {
        nr = r * 1.12 + 16;
        ng = g * 1.04 + 6;
        nb = b * 0.82;
        break;
      }
      case 'invert': {
        nr = 255 - r;
        ng = 255 - g;
        nb = 255 - b;
        break;
      }
    }

    d[i] = clamp255(r + (nr - r) * t);
    d[i + 1] = clamp255(g + (ng - g) * t);
    d[i + 2] = clamp255(b + (nb - b) * t);
  }

  ctx.putImageData(imgData, 0, 0);
}

/**
 * Generates a blurred copy of sourceImg onto a canvas. Uses ctx.filter when available,
 * with a fast multi-pass downscale/upscale fallback for maximum compatibility.
 */
export function createBlurredCanvas(
  sourceImg: HTMLImageElement,
  width: number,
  height: number,
  blurRadius: number
): HTMLCanvasElement {
  const out = document.createElement('canvas');
  out.width = width;
  out.height = height;
  const ctx = out.getContext('2d');
  if (!ctx) return out;

  if (blurRadius <= 0) {
    ctx.drawImage(sourceImg, 0, 0, width, height);
    return out;
  }

  // Test native ctx.filter support
  const supportsFilter = typeof ctx.filter === 'string';
  if (supportsFilter) {
    ctx.filter = `blur(${blurRadius}px)`;
    // Draw slightly overscaled at edges to avoid transparent edge bleed on full-image blur
    const pad = Math.min(blurRadius * 2, Math.round(Math.min(width, height) * 0.15));
    ctx.drawImage(sourceImg, -pad, -pad, width + pad * 2, height + pad * 2);
    ctx.filter = 'none';
    return out;
  }

  // Fallback smooth downscale-upscale blur
  const factor = Math.max(2, Math.min(32, Math.round(blurRadius * 1.2)));
  const sw = Math.max(1, Math.round(width / factor));
  const sh = Math.max(1, Math.round(height / factor));
  const temp = document.createElement('canvas');
  temp.width = sw;
  temp.height = sh;
  const tCtx = temp.getContext('2d');
  if (tCtx) {
    tCtx.imageSmoothingEnabled = true;
    tCtx.imageSmoothingQuality = 'high';
    tCtx.drawImage(sourceImg, 0, 0, sw, sh);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(temp, 0, 0, width, height);
  } else {
    ctx.drawImage(sourceImg, 0, 0, width, height);
  }
  return out;
}

/**
 * Generates a pixelated copy of sourceImg onto a canvas.
 */
export function createPixelatedCanvas(
  sourceImg: HTMLImageElement,
  width: number,
  height: number,
  blockSize: number
): HTMLCanvasElement {
  const out = document.createElement('canvas');
  out.width = width;
  out.height = height;
  const ctx = out.getContext('2d');
  if (!ctx) return out;

  const bs = Math.max(2, Math.round(blockSize));
  const sw = Math.max(1, Math.round(width / bs));
  const sh = Math.max(1, Math.round(height / bs));

  const small = document.createElement('canvas');
  small.width = sw;
  small.height = sh;
  const sCtx = small.getContext('2d');
  if (!sCtx) {
    ctx.drawImage(sourceImg, 0, 0, width, height);
    return out;
  }

  sCtx.drawImage(sourceImg, 0, 0, sw, sh);
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(small, 0, 0, sw, sh, 0, 0, width, height);
  return out;
}

export interface PaletteSwatch {
  hex: string;
  rgb: string;
  hsl: string;
  r: number;
  g: number;
  b: number;
  percentage: number;
}

function rgbToHex(r: number, g: number, b: number): string {
  const h = (n: number) => clamp255(Math.round(n)).toString(16).padStart(2, '0').toUpperCase();
  return `#${h(r)}${h(g)}${h(b)}`;
}

function rgbToHslStr(r: number, g: number, b: number): string {
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
  return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
}

/**
 * Extracts dominant colors using Median Cut quantization on sampled pixels.
 */
export function extractDominantPalette(
  img: HTMLImageElement,
  colorCount: number = 6
): PaletteSwatch[] {
  const sampleMax = 140;
  const scale = Math.min(1, sampleMax / Math.max(img.naturalWidth, img.naturalHeight));
  const w = Math.max(1, Math.round(img.naturalWidth * scale));
  const h = Math.max(1, Math.round(img.naturalHeight * scale));

  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) return [];

  ctx.drawImage(img, 0, 0, w, h);
  const data = ctx.getImageData(0, 0, w, h).data;

  type Pixel = [number, number, number];
  const pixels: Pixel[] = [];
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] < 128) continue; // skip mostly transparent pixels
    pixels.push([data[i], data[i + 1], data[i + 2]]);
  }

  if (pixels.length === 0) return [];

  // Median-cut recursive bucketing
  let buckets: Pixel[][] = [pixels];
  const targetBuckets = Math.max(1, Math.min(16, colorCount));

  while (buckets.length < targetBuckets) {
    // Pick largest bucket that has > 1 pixel
    buckets.sort((a, b) => b.length - a.length);
    const largest = buckets[0];
    if (!largest || largest.length < 2) break;

    let minR = 255, maxR = 0;
    let minG = 255, maxG = 0;
    let minB = 255, maxB = 0;
    for (const [r, g, b] of largest) {
      if (r < minR) minR = r;
      if (r > maxR) maxR = r;
      if (g < minG) minG = g;
      if (g > maxG) maxG = g;
      if (b < minB) minB = b;
      if (b > maxB) maxB = b;
    }

    const rangeR = maxR - minR;
    const rangeG = maxG - minG;
    const rangeB = maxB - minB;
    const ch = rangeR >= rangeG && rangeR >= rangeB ? 0 : rangeG >= rangeB ? 1 : 2;

    if (rangeR === 0 && rangeG === 0 && rangeB === 0) break;

    largest.sort((a, b) => a[ch] - b[ch]);
    const mid = Math.floor(largest.length / 2);
    buckets.shift();
    buckets.push(largest.slice(0, mid), largest.slice(mid));
  }

  const totalPixels = pixels.length;
  const swatches: PaletteSwatch[] = buckets
    .filter((b) => b.length > 0)
    .map((bucket) => {
      let sumR = 0;
      let sumG = 0;
      let sumB = 0;
      for (const [r, g, b] of bucket) {
        sumR += r;
        sumG += g;
        sumB += b;
      }
      const r = Math.round(sumR / bucket.length);
      const g = Math.round(sumG / bucket.length);
      const b = Math.round(sumB / bucket.length);
      return {
        hex: rgbToHex(r, g, b),
        rgb: `rgb(${r}, ${g}, ${b})`,
        hsl: rgbToHslStr(r, g, b),
        r,
        g,
        b,
        percentage: Math.max(1, Math.round((bucket.length / totalPixels) * 100)),
      };
    })
    .sort((a, b) => b.percentage - a.percentage);

  return swatches;
}
