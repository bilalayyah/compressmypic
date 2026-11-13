import { ImageFormat, OutputFormatChoice } from '../types';
import { detectTransparency, loadImageFromFile, resolveOutputFormat, toDecodableBlob } from './compressor';
import { getBaseFilename, sanitizeFilename } from './formatters';

export const EXTENDED_IMAGE_ACCEPT =
  'image/jpeg,image/png,image/webp,image/heic,image/heif,image/gif,image/bmp,image/svg+xml,image/avif,.jpg,.jpeg,.png,.webp,.heic,.heif,.gif,.bmp,.svg,.avif';

export const EXTENDED_ALLOWED_MIME_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
  'image/heic',
  'image/heif',
  'image/gif',
  'image/bmp',
  'image/x-ms-bmp',
  'image/svg+xml',
  'image/avif',
];

export const EXTENDED_ALLOWED_EXT_REGEX = /\.(jpe?g|png|webp|heic|heif|gif|bmp|svg|avif)$/i;

export interface LoadedImageInfo {
  img: HTMLImageElement;
  previewUrl: string;
  width: number;
  height: number;
  hasAlpha: boolean;
  detectedType: string;
}

/**
 * Loads any supported browser image (JPG, PNG, WebP, HEIC, GIF, BMP, SVG, AVIF)
 * and extracts dimensions, preview URL, and transparency status.
 */
export async function loadExtendedImageInfo(file: File): Promise<LoadedImageInfo> {
  let previewUrl = URL.createObjectURL(file);
  try {
    const decodable = await toDecodableBlob(file);
    if (decodable !== file) {
      URL.revokeObjectURL(previewUrl);
      previewUrl = URL.createObjectURL(decodable);
    }

    const img = await loadImageFromFile(file);
    let width = img.naturalWidth;
    let height = img.naturalHeight;

    // SVG fallback if naturalWidth/naturalHeight are 0
    if ((width === 0 || height === 0) && (file.type === 'image/svg+xml' || /\.svg$/i.test(file.name))) {
      const svgText = await file.text();
      const vbMatch = svgText.match(/viewBox\s*=\s*["']\s*[\d.-]+\s+[\d.-]+\s+([\d.]+)\s+([\d.]+)\s*["']/i);
      const wMatch = svgText.match(/\bwidth\s*=\s*["']([\d.]+)(?:px)?["']/i);
      const hMatch = svgText.match(/\bheight\s*=\s*["']([\d.]+)(?:px)?["']/i);
      if (wMatch && hMatch) {
        width = Math.round(parseFloat(wMatch[1]));
        height = Math.round(parseFloat(hMatch[1]));
      } else if (vbMatch) {
        width = Math.round(parseFloat(vbMatch[1]));
        height = Math.round(parseFloat(vbMatch[2]));
      } else {
        width = 512;
        height = 512;
      }
    }

    const hasAlpha = await detectTransparency(img);

    return {
      img,
      previewUrl,
      width,
      height,
      hasAlpha,
      detectedType: file.type || inferMimeFromName(file.name),
    };
  } catch (err) {
    URL.revokeObjectURL(previewUrl);
    throw err;
  }
}

export function inferMimeFromName(name: string): string {
  const lower = name.toLowerCase();
  if (lower.endsWith('.png')) return 'image/png';
  if (lower.endsWith('.webp')) return 'image/webp';
  if (lower.endsWith('.gif')) return 'image/gif';
  if (lower.endsWith('.bmp')) return 'image/bmp';
  if (lower.endsWith('.svg')) return 'image/svg+xml';
  if (lower.endsWith('.avif')) return 'image/avif';
  if (lower.endsWith('.heic') || lower.endsWith('.heif')) return 'image/heic';
  return 'image/jpeg';
}

export function canvasToBlob(
  canvas: HTMLCanvasElement,
  mimeType: ImageFormat | string,
  quality?: number
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error(`Browser failed to encode canvas to ${mimeType}.`));
        }
      },
      mimeType,
      quality
    );
  });
}

export type ResizeFitMode = 'exact' | 'contain' | 'cover';

export interface ResizeOptions {
  mode: 'dimensions' | 'percentage';
  width?: number;
  height?: number;
  percentage?: number;
  lockAspectRatio: boolean;
  fit: ResizeFitMode;
  format: OutputFormatChoice;
  quality: number; // 10..100
  backgroundColor: string;
}

export interface ProcessedImageResult {
  blob: Blob;
  previewUrl: string;
  size: number;
  width: number;
  height: number;
  outputType: ImageFormat;
  outputExtension: string;
  outputFilename: string;
}

export async function resizeImageFile(
  file: File,
  originalWidth: number,
  originalHeight: number,
  originalType: string,
  hasAlpha: boolean,
  options: ResizeOptions
): Promise<ProcessedImageResult> {
  const img = await loadImageFromFile(file);
  const srcW = img.naturalWidth || originalWidth;
  const srcH = img.naturalHeight || originalHeight;

  let targetW = srcW;
  let targetH = srcH;

  if (options.mode === 'percentage') {
    const scale = Math.max(0.05, Math.min(4, (options.percentage || 100) / 100));
    targetW = Math.max(1, Math.round(srcW * scale));
    targetH = Math.max(1, Math.round(srcH * scale));
  } else {
    const reqW = options.width && options.width > 0 ? Math.round(options.width) : 0;
    const reqH = options.height && options.height > 0 ? Math.round(options.height) : 0;

    if (options.lockAspectRatio) {
      if (reqW && reqH) {
        if (options.fit === 'exact') {
          targetW = reqW;
          targetH = reqH;
        } else {
          targetW = reqW;
          targetH = reqH;
        }
      } else if (reqW) {
        targetW = reqW;
        targetH = Math.max(1, Math.round((reqW / srcW) * srcH));
      } else if (reqH) {
        targetH = reqH;
        targetW = Math.max(1, Math.round((reqH / srcH) * srcW));
      }
    } else {
      targetW = reqW || srcW;
      targetH = reqH || srcH;
    }
  }

  targetW = Math.max(1, Math.min(12000, targetW));
  targetH = Math.max(1, Math.min(12000, targetH));

  const { mimeType, extension } = resolveOutputFormat(options.format, originalType);
  const canvas = document.createElement('canvas');
  canvas.width = targetW;
  canvas.height = targetH;

  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) throw new Error('Unable to initialize 2D canvas context.');

  if (mimeType === 'image/jpeg') {
    ctx.fillStyle = options.backgroundColor || '#ffffff';
    ctx.fillRect(0, 0, targetW, targetH);
  }

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';

  if (options.fit === 'cover') {
    const scale = Math.max(targetW / srcW, targetH / srcH);
    const drawW = srcW * scale;
    const drawH = srcH * scale;
    const dx = (targetW - drawW) / 2;
    const dy = (targetH - drawH) / 2;
    ctx.drawImage(img, dx, dy, drawW, drawH);
  } else if (options.fit === 'contain') {
    const scale = Math.min(targetW / srcW, targetH / srcH);
    const drawW = srcW * scale;
    const drawH = srcH * scale;
    const dx = (targetW - drawW) / 2;
    const dy = (targetH - drawH) / 2;
    ctx.drawImage(img, dx, dy, drawW, drawH);
  } else {
    ctx.drawImage(img, 0, 0, targetW, targetH);
  }

  const qualityFactor = Math.max(0.1, Math.min(1.0, options.quality / 100));
  const blob = await canvasToBlob(canvas, mimeType, qualityFactor);
  const baseName = sanitizeFilename(getBaseFilename(file.name));

  return {
    blob,
    previewUrl: URL.createObjectURL(blob),
    size: blob.size,
    width: targetW,
    height: targetH,
    outputType: mimeType,
    outputExtension: extension,
    outputFilename: `${baseName}_${targetW}x${targetH}${extension}`,
  };
}

export interface RotateFlipOptions {
  angleDegrees: number; // -180 to 360
  flipHorizontal: boolean;
  flipVertical: boolean;
  format: OutputFormatChoice;
  quality: number;
  backgroundColor: string;
}

export async function rotateFlipImageFile(
  file: File,
  originalType: string,
  options: RotateFlipOptions
): Promise<ProcessedImageResult> {
  const img = await loadImageFromFile(file);
  const srcW = img.naturalWidth;
  const srcH = img.naturalHeight;
  if (!srcW || !srcH) throw new Error('Image has invalid dimensions.');

  const normalizedAngle = ((options.angleDegrees % 360) + 360) % 360;
  const rad = (normalizedAngle * Math.PI) / 180;
  const cos = Math.abs(Math.cos(rad));
  const sin = Math.abs(Math.sin(rad));

  // Exact bounding box for arbitrary rotation angles
  const outW =
    normalizedAngle === 90 || normalizedAngle === 270
      ? srcH
      : normalizedAngle === 0 || normalizedAngle === 180
      ? srcW
      : Math.max(1, Math.round(srcW * cos + srcH * sin));
  const outH =
    normalizedAngle === 90 || normalizedAngle === 270
      ? srcW
      : normalizedAngle === 0 || normalizedAngle === 180
      ? srcH
      : Math.max(1, Math.round(srcW * sin + srcH * cos));

  const { mimeType, extension } = resolveOutputFormat(options.format, originalType);
  const canvas = document.createElement('canvas');
  canvas.width = outW;
  canvas.height = outH;

  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) throw new Error('Unable to initialize 2D canvas context.');

  if (mimeType === 'image/jpeg') {
    ctx.fillStyle = options.backgroundColor || '#ffffff';
    ctx.fillRect(0, 0, outW, outH);
  }

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';

  ctx.save();
  ctx.translate(outW / 2, outH / 2);
  ctx.rotate(rad);
  ctx.scale(options.flipHorizontal ? -1 : 1, options.flipVertical ? -1 : 1);
  ctx.drawImage(img, -srcW / 2, -srcH / 2, srcW, srcH);
  ctx.restore();

  const qualityFactor = Math.max(0.1, Math.min(1.0, options.quality / 100));
  const blob = await canvasToBlob(canvas, mimeType, qualityFactor);
  const baseName = sanitizeFilename(getBaseFilename(file.name));

  return {
    blob,
    previewUrl: URL.createObjectURL(blob),
    size: blob.size,
    width: outW,
    height: outH,
    outputType: mimeType,
    outputExtension: extension,
    outputFilename: `${baseName}_edited${extension}`,
  };
}

export async function convertImageFile(
  file: File,
  targetFormat: 'jpeg' | 'png' | 'webp',
  quality: number,
  backgroundColor: string = '#ffffff',
  scale: number = 1
): Promise<ProcessedImageResult> {
  const info = await loadExtendedImageInfo(file);
  try {
    const { img, width, height } = info;
    const { mimeType, extension } = resolveOutputFormat(targetFormat, file.type);

    const safeMaxSide = Math.max(width, height, 1);
    const cappedScale = Math.max(0.1, Math.min(scale, 8000 / safeMaxSide));
    const outW = Math.max(1, Math.round(width * cappedScale));
    const outH = Math.max(1, Math.round(height * cappedScale));

    const canvas = document.createElement('canvas');
    canvas.width = outW;
    canvas.height = outH;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) throw new Error('Unable to initialize 2D canvas context.');

    if (mimeType === 'image/jpeg') {
      ctx.fillStyle = backgroundColor || '#ffffff';
      ctx.fillRect(0, 0, outW, outH);
    }

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, 0, 0, outW, outH);

    const qualityFactor = Math.max(0.1, Math.min(1.0, quality / 100));
    const blob = await canvasToBlob(canvas, mimeType, qualityFactor);
    const baseName = sanitizeFilename(getBaseFilename(file.name));

    return {
      blob,
      previewUrl: URL.createObjectURL(blob),
      size: blob.size,
      width: outW,
      height: outH,
      outputType: mimeType,
      outputExtension: extension,
      outputFilename: `${baseName}${extension}`,
    };
  } finally {
    URL.revokeObjectURL(info.previewUrl);
  }
}

export function getSimplifiedAspectRatio(width: number, height: number): {
  exact: string;
  decimal: string;
  commonMatch: string | null;
} {
  if (!width || !height) {
    return { exact: '0:0', decimal: '0.00', commonMatch: null };
  }
  const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
  const divisor = gcd(width, height);
  const rw = width / divisor;
  const rh = height / divisor;
  const ratio = width / height;

  const knownRatios: [number, string][] = [
    [1, '1:1 (Square)'],
    [16 / 9, '16:9 (Widescreen)'],
    [9 / 16, '9:16 (Vertical Story)'],
    [4 / 3, '4:3 (Standard)'],
    [3 / 4, '3:4 (Portrait)'],
    [3 / 2, '3:2 (Classic Photo)'],
    [2 / 3, '2:3 (Portrait Photo)'],
    [4 / 5, '4:5 (Instagram Portrait)'],
    [21 / 9, '21:9 (Ultrawide)'],
  ];

  let commonMatch: string | null = null;
  for (const [target, label] of knownRatios) {
    if (Math.abs(ratio - target) < 0.015) {
      commonMatch = label;
      break;
    }
  }

  return {
    exact: `${rw}:${rh}`,
    decimal: ratio.toFixed(2),
    commonMatch,
  };
}
