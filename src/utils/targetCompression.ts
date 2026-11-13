import { ImageFormat, ImageItem, OutputFormatChoice } from '../types';
import { loadImageFromFile, resolveOutputFormat } from './compressor';
import { canvasToBlob } from './imageProcessing';
import { formatBytes, getBaseFilename, sanitizeFilename } from './formatters';

export interface TargetSizeOptions {
  targetBytes: number;
  format: OutputFormatChoice;
  allowDownscale: boolean;
  autoSwitchPngToLossy: boolean;
  backgroundColor: string;
}

export interface TargetSizeResult {
  blob: Blob;
  previewUrl: string;
  size: number;
  width: number;
  height: number;
  outputType: ImageFormat;
  outputExtension: string;
  outputFilename: string;
  spaceSaved: number;
  compressionPercentage: number;
  finalQuality: number; // 5..95 or 100 for PNG
  scaleFactor: number; // 0.1..1.0
  achievedTarget: boolean;
  switchedFormatNote: string | null;
  statusNote: string;
}

interface EncodeCandidate {
  blob: Blob;
  width: number;
  height: number;
  quality: number;
  scale: number;
  mimeType: ImageFormat;
  extension: string;
}

function drawScaledImage(
  img: HTMLImageElement,
  width: number,
  height: number,
  mimeType: ImageFormat,
  hasAlpha: boolean,
  backgroundColor: string
): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) {
    throw new Error('Unable to initialize HTML5 2D canvas context.');
  }

  if (mimeType === 'image/jpeg') {
    ctx.fillStyle = backgroundColor || '#ffffff';
    ctx.fillRect(0, 0, width, height);
  }

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(img, 0, 0, width, height);
  return canvas;
}

async function findBestQualityAtDimensions(
  img: HTMLImageElement,
  width: number,
  height: number,
  mimeType: ImageFormat,
  extension: string,
  scale: number,
  targetBytes: number,
  minQuality: number,
  maxQuality: number,
  hasAlpha: boolean,
  backgroundColor: string
): Promise<{ bestUnderTarget: EncodeCandidate | null; smallest: EncodeCandidate }> {
  const canvas = drawScaledImage(img, width, height, mimeType, hasAlpha, backgroundColor);

  // PNG is lossless; quality parameter is ignored by canvas.toBlob
  if (mimeType === 'image/png') {
    const blob = await canvasToBlob(canvas, mimeType);
    const candidate: EncodeCandidate = {
      blob,
      width,
      height,
      quality: 100,
      scale,
      mimeType,
      extension,
    };
    return {
      bestUnderTarget: blob.size <= targetBytes ? candidate : null,
      smallest: candidate,
    };
  }

  // Try highest acceptable quality first: if it already fits, return immediately
  const topBlob = await canvasToBlob(canvas, mimeType, maxQuality);
  const topCandidate: EncodeCandidate = {
    blob: topBlob,
    width,
    height,
    quality: Math.round(maxQuality * 100),
    scale,
    mimeType,
    extension,
  };
  if (topBlob.size <= targetBytes) {
    return { bestUnderTarget: topCandidate, smallest: topCandidate };
  }

  // Test lowest quality floor at this scale before binary searching
  const lowBlob = await canvasToBlob(canvas, mimeType, minQuality);
  const lowCandidate: EncodeCandidate = {
    blob: lowBlob,
    width,
    height,
    quality: Math.round(minQuality * 100),
    scale,
    mimeType,
    extension,
  };

  if (lowBlob.size > targetBytes) {
    return { bestUnderTarget: null, smallest: lowCandidate };
  }

  // Binary search for highest quality that still fits <= targetBytes (sweet spot ~96%..100%)
  let lo = minQuality;
  let hi = maxQuality;
  let bestUnder: EncodeCandidate = lowCandidate;

  for (let i = 0; i < 7; i++) {
    const mid = (lo + hi) / 2;
    const midBlob = await canvasToBlob(canvas, mimeType, mid);
    const candidate: EncodeCandidate = {
      blob: midBlob,
      width,
      height,
      quality: Math.round(mid * 100),
      scale,
      mimeType,
      extension,
    };

    if (midBlob.size <= targetBytes) {
      bestUnder = candidate;
      lo = mid;
      // Stop early once within 4% below target
      if (midBlob.size >= targetBytes * 0.96) {
        break;
      }
    } else {
      hi = mid;
    }
  }

  return { bestUnderTarget: bestUnder, smallest: lowCandidate };
}

async function runSearchForFormat(
  img: HTMLImageElement,
  srcW: number,
  srcH: number,
  mimeType: ImageFormat,
  extension: string,
  targetBytes: number,
  allowDownscale: boolean,
  hasAlpha: boolean,
  backgroundColor: string
): Promise<{ bestUnder: EncodeCandidate | null; smallest: EncodeCandidate }> {
  // Prefer preserving 100% original resolution while quality >= 35%
  const fullResAttempt = await findBestQualityAtDimensions(
    img,
    srcW,
    srcH,
    mimeType,
    extension,
    1,
    targetBytes,
    mimeType === 'image/png' ? 1 : 0.35,
    0.94,
    hasAlpha,
    backgroundColor
  );

  if (fullResAttempt.bestUnderTarget) {
    return {
      bestUnder: fullResAttempt.bestUnderTarget,
      smallest: fullResAttempt.smallest,
    };
  }

  let smallestOverall = fullResAttempt.smallest;

  // If dimension downscaling is disabled, try pushing quality down to 5% at full dimensions
  if (!allowDownscale) {
    if (mimeType !== 'image/png') {
      const deepQualityAttempt = await findBestQualityAtDimensions(
        img,
        srcW,
        srcH,
        mimeType,
        extension,
        1,
        targetBytes,
        0.05,
        0.35,
        hasAlpha,
        backgroundColor
      );
      if (deepQualityAttempt.smallest.blob.size < smallestOverall.blob.size) {
        smallestOverall = deepQualityAttempt.smallest;
      }
      if (deepQualityAttempt.bestUnderTarget) {
        return {
          bestUnder: deepQualityAttempt.bestUnderTarget,
          smallest: smallestOverall,
        };
      }
    }
    return { bestUnder: null, smallest: smallestOverall };
  }

  // Progressive dimension scaling loop paired with quality binary search
  const scaleSteps = [0.82, 0.68, 0.55, 0.44, 0.35, 0.27, 0.2, 0.14, 0.1];
  let lastW = srcW;
  let lastH = srcH;
  let lastScale = 1;

  for (const scale of scaleSteps) {
    const w = Math.max(16, Math.round(srcW * scale));
    const h = Math.max(16, Math.round(srcH * scale));
    if (w === lastW && h === lastH) continue;
    lastW = w;
    lastH = h;
    lastScale = scale;

    const attempt = await findBestQualityAtDimensions(
      img,
      w,
      h,
      mimeType,
      extension,
      scale,
      targetBytes,
      mimeType === 'image/png' ? 1 : 0.3,
      0.92,
      hasAlpha,
      backgroundColor
    );

    if (attempt.smallest.blob.size < smallestOverall.blob.size) {
      smallestOverall = attempt.smallest;
    }
    if (attempt.bestUnderTarget) {
      return {
        bestUnder: attempt.bestUnderTarget,
        smallest: smallestOverall,
      };
    }
  }

  // Final aggressive pass at smallest dimension down to 5% quality for lossy formats
  if (mimeType !== 'image/png') {
    const minPass = await findBestQualityAtDimensions(
      img,
      lastW,
      lastH,
      mimeType,
      extension,
      lastScale,
      targetBytes,
      0.05,
      0.3,
      hasAlpha,
      backgroundColor
    );
    if (minPass.smallest.blob.size < smallestOverall.blob.size) {
      smallestOverall = minPass.smallest;
    }
    if (minPass.bestUnderTarget) {
      return {
        bestUnder: minPass.bestUnderTarget,
        smallest: smallestOverall,
      };
    }
  }

  return { bestUnder: null, smallest: smallestOverall };
}

/**
 * Compresses an image to fit at or below `targetBytes` using quality binary search
 * and progressive dimension scaling. Never fakes sizes or hides unattainable targets.
 */
export async function compressToTargetSize(
  imageItem: ImageItem,
  options: TargetSizeOptions
): Promise<TargetSizeResult> {
  const img = await loadImageFromFile(imageItem.file);
  const srcW = img.naturalWidth;
  const srcH = img.naturalHeight;
  if (!srcW || !srcH) {
    throw new Error('Image has invalid dimensions (0x0).');
  }

  const targetBytes = Math.max(1024, Math.round(options.targetBytes));
  const resolved = resolveOutputFormat(options.format, imageItem.originalType);

  let switchedFormatNote: string | null = null;
  let searchResult = await runSearchForFormat(
    img,
    srcW,
    srcH,
    resolved.mimeType,
    resolved.extension,
    targetBytes,
    options.allowDownscale,
    imageItem.hasAlpha,
    options.backgroundColor
  );

  // If original was lossless PNG (format === 'original') and didn't hit target cleanly (or had to shrink below 50% scale),
  // optionally switch to WebP (if transparent) or JPG (if opaque) to preserve sharp resolution while hitting KB target.
  const shouldFallbackFromPng =
    options.format === 'original' &&
    resolved.mimeType === 'image/png' &&
    options.autoSwitchPngToLossy &&
    (!searchResult.bestUnder || searchResult.bestUnder.scale < 0.65);

  if (shouldFallbackFromPng) {
    const fallbackMime: ImageFormat = imageItem.hasAlpha ? 'image/webp' : 'image/jpeg';
    const fallbackExt = imageItem.hasAlpha ? '.webp' : '.jpg';
    const fallbackSearch = await runSearchForFormat(
      img,
      srcW,
      srcH,
      fallbackMime,
      fallbackExt,
      targetBytes,
      options.allowDownscale,
      imageItem.hasAlpha,
      options.backgroundColor
    );

    if (
      fallbackSearch.bestUnder &&
      (!searchResult.bestUnder || fallbackSearch.bestUnder.scale >= searchResult.bestUnder.scale)
    ) {
      searchResult = fallbackSearch;
      switchedFormatNote = `Auto-converted lossless PNG to ${
        imageItem.hasAlpha ? 'WebP (transparency preserved)' : 'JPG'
      } to preserve higher resolution under ${formatBytes(targetBytes, 0)}.`;
    }
  }

  const chosen = searchResult.bestUnder ?? searchResult.smallest;
  const achievedTarget = chosen.blob.size <= targetBytes;

  let statusNote: string;
  if (achievedTarget) {
    if (imageItem.originalSize <= targetBytes && chosen.scale === 1 && chosen.blob.size > imageItem.originalSize) {
      statusNote = `Original file was already under ${formatBytes(
        targetBytes,
        0
      )}, and re-encoding grew it by ${formatBytes(
        chosen.blob.size - imageItem.originalSize
      )}. Use "Keep original" or switch to WebP/JPG for smaller output.`;
    } else if (imageItem.originalSize <= targetBytes && chosen.scale === 1) {
      statusNote = `Original file was already under ${formatBytes(targetBytes, 0)}; exported cleanly at ${chosen.quality}% quality.`;
    } else if (chosen.scale === 1) {
      statusNote = `Target met at full ${chosen.width}×${chosen.height}px resolution (${chosen.mimeType === 'image/png' ? 'lossless PNG' : `${chosen.quality}% quality`}).`;
    } else {
      statusNote = `Target met by scaling to ${chosen.width}×${chosen.height}px (${Math.round(
        chosen.scale * 100
      )}%) at ${chosen.mimeType === 'image/png' ? 'lossless PNG' : `${chosen.quality}% quality`}.`;
    }
  } else {
    if (chosen.mimeType === 'image/png') {
      statusNote = `Cannot reach ${formatBytes(targetBytes, 0)} with lossless PNG (smallest achievable: ${formatBytes(
        chosen.blob.size
      )} at ${chosen.width}×${chosen.height}px). Switch output format to JPG or WebP to hit smaller sizes.`;
    } else if (!options.allowDownscale) {
      statusNote = `Cannot reach ${formatBytes(targetBytes, 0)} at full ${srcW}×${srcH}px dimensions (minimum quality size is ${formatBytes(
        chosen.blob.size
      )}). Enable "Allow Dimension Scaling" to shrink dimensions further.`;
    } else {
      statusNote = `Requested ${formatBytes(targetBytes, 0)} could not be reached cleanly. Smallest honest encoded output is ${formatBytes(
        chosen.blob.size
      )} (${chosen.width}×${chosen.height}px, ${chosen.quality}% quality). Try a larger target size.`;
    }
  }

  const originalSize = imageItem.originalSize;
  const spaceSaved = originalSize - chosen.blob.size;
  const compressionPercentage =
    originalSize > 0 ? Math.round(((originalSize - chosen.blob.size) / originalSize) * 100) : 0;

  const baseName = sanitizeFilename(getBaseFilename(imageItem.name));
  const targetTag = `${Math.round(targetBytes / 1024)}kb`;
  const outputFilename = `${baseName}_${targetTag}${chosen.extension}`;

  return {
    blob: chosen.blob,
    previewUrl: URL.createObjectURL(chosen.blob),
    size: chosen.blob.size,
    width: chosen.width,
    height: chosen.height,
    outputType: chosen.mimeType,
    outputExtension: chosen.extension,
    outputFilename,
    spaceSaved,
    compressionPercentage,
    finalQuality: chosen.quality,
    scaleFactor: chosen.scale,
    achievedTarget,
    switchedFormatNote,
    statusNote,
  };
}
