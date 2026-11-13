import { ImageFormat, ImageItem, OutputFormatChoice } from '../types';
import type { SupportedLang } from '../locales/config';
import { loadImageFromFile, resolveOutputFormat } from './compressor';
import { canvasToBlob } from './imageProcessing';
import { formatBytes, getBaseFilename, sanitizeFilename } from './formatters';

export interface TargetSizeOptions {
  targetBytes: number;
  format: OutputFormatChoice;
  allowDownscale: boolean;
  autoSwitchPngToLossy: boolean;
  backgroundColor: string;
  /** Active language. When 'es', 'pt', 'fr', 'de', 'it', 'id', 'ru', 'ja' or 'ko', the runtime status notes use that language's templates. */
  lang?: SupportedLang;
  /** This tool's workspace strings (the active language's toolUi table) — the
   * localized templates for the status notes. English strings stay as fallback when omitted. */
  strings?: Record<string, string>;
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

  // --- Runtime status-note localization (Batch 4 + Batch 5) ---
  // The component renders `statusNote` / `switchedFormatNote` verbatim, so the
  // localized (ja/ko/id/ru/de/it/es/pt/fr) templates live here behind the same `lang` flag. The English
  // fallbacks below are byte-identical to the previous inline English strings.
  // Batch 4 and Batch 5 tables spell some keys/placeholders differently
  // (e.g. `autoConvertedPng` vs `switchedFormatNote`, `{bytes}` vs `{size}`,
  // `{qualityLabel}` vs `{quality}`), so each branch tries its keys in order
  // and fills every placeholder variant; a template only uses the ones it has.
  const uiStrings = options.strings;
  const pickTemplate = (
    keys: string[],
    fallbacks: Partial<Record<'es' | 'pt' | 'fr' | 'de' | 'it' | 'id' | 'ru' | 'ja' | 'ko', string>>,
    enFallback: string
  ): string => {
    const activeLang = options.lang;
    if (activeLang === 'es' || activeLang === 'pt' || activeLang === 'fr' || activeLang === 'de' || activeLang === 'it' || activeLang === 'id' || activeLang === 'ru' || activeLang === 'ja' || activeLang === 'ko') {
      for (const key of keys) {
        const value = uiStrings?.[key];
        if (value !== undefined) return value;
      }
      return fallbacks[activeLang] ?? enFallback;
    }
    return enFallback;
  };
  const fillTemplate = (template: string, values: Record<string, string | number>): string =>
    Object.entries(values).reduce(
      (acc, [key, value]) => acc.split(`{${key}}`).join(String(value)),
      template
    );

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
      const switchedFormatLabel = imageItem.hasAlpha
        ? pickTemplate(
            ['formatWebpTransparency'],
            { es: 'WebP (transparencia conservada)', id: 'WebP (transparansi dipertahankan)', ru: 'WebP (прозрачность сохранена)', ja: 'WebP（透明度を保持）', ko: 'WebP(투명도 유지)' },
            'WebP (transparency preserved)'
          )
        : 'JPG';
      switchedFormatNote = fillTemplate(
        pickTemplate(
          ['switchedFormatNote', 'autoConvertedPng'],
          { es: 'Se convirtió automáticamente el PNG sin pérdida a {format} para conservar mayor resolución por debajo de {target}.', id: 'PNG lossless otomatis diubah ke {format} untuk mempertahankan resolusi yang lebih tinggi di bawah {target}.', ru: 'PNG без потерь автоматически конвертирован в {format}, чтобы сохранить более высокое разрешение менее {target}.', ja: '非可逆なしPNGは、{target}以下でより高い解像度を保つため{format}へ自動変換されました。', ko: '무손실 PNG이 {target} 이하에서 더 높은 해상도를 유지하기 위해 자동으로 {format}(으)로 변환되었습니다.' },
          'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
        ),
        { format: switchedFormatLabel, target: formatBytes(targetBytes, 0) }
      );
    }
  }

  const chosen = searchResult.bestUnder ?? searchResult.smallest;
  const achievedTarget = chosen.blob.size <= targetBytes;

  // Quality label used by the status templates. Batch 4 spells it via
  // `qualityLosslessPng` / `qualityPercent`; Batch 5 inlines it as `{quality}`.
  const qualityLabel =
    chosen.mimeType === 'image/png'
      ? pickTemplate(['qualityLosslessPng'], { es: 'PNG sin pérdida', id: 'PNG lossless', ru: 'PNG без потерь', ja: '非可逆なしPNG', ko: '무손실 PNG' }, 'lossless PNG')
      : fillTemplate(
          pickTemplate(['qualityPercent'], { es: 'calidad del {quality} %', id: 'Kualitas {quality}%', ru: 'Качество {quality} %', ja: '画質{quality}%', ko: '{quality}% 품질' }, '{quality}% quality'),
          { quality: chosen.quality }
        );
  const scalePercent = Math.round(chosen.scale * 100);

  let statusNote: string;
  if (achievedTarget) {
    if (imageItem.originalSize <= targetBytes && chosen.scale === 1 && chosen.blob.size > imageItem.originalSize) {
      statusNote = fillTemplate(
        pickTemplate(
          ['statusAlreadyUnderGrew'],
          { es: 'El archivo original ya estaba por debajo de {target}, y la recodificación lo hizo crecer {bytes}. Use «Conservar original» o cambie a WebP/JPG para una salida más pequeña.', id: 'File asli sudah berada di bawah {target}, dan enkode ulang membesarkannya {bytes}. Gunakan "Pertahankan original" atau beralih ke WebP/JPG untuk output yang lebih kecil.', ru: 'Оригинальный файл уже был менее {target}, а перекодирование увеличило его на {bytes}. Используйте «Оставить оригинал» или переключитесь на WebP/JPG для меньшего вывода.', ja: '元のファイルはすでに{target}未満でしたが、再エンコードで{bytes}大きくなりました。「元のファイルを保持」を使うか、より小さい出力のためにWebP/JPGに切り替えてください。', ko: '원본 파일이 이미 {target} 이하였으나 다시 인코딩하면서 {bytes} 커졌습니다. "원본 유지"를 사용하거나 더 작은 출력을 위해 WebP/JPG로 전환하세요.' },
          'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
        ),
        {
          target: formatBytes(targetBytes, 0),
          bytes: formatBytes(chosen.blob.size - imageItem.originalSize),
        }
      );
    } else if (imageItem.originalSize <= targetBytes && chosen.scale === 1) {
      statusNote = fillTemplate(
        pickTemplate(
          ['statusAlreadyUnder', 'statusAlreadyUnderClean'],
          { es: 'El archivo original ya estaba por debajo de {target}; se exportó limpiamente con calidad del {quality} %.', id: 'File asli sudah berada di bawah {target}; file diekspor dengan bersih pada kualitas {quality}%.', ru: 'Оригинальный файл уже был менее {target}; он чисто экспортирован с качеством {quality} %.', ja: '元のファイルはすでに{target}未満でした。画質{quality}%でクリーンにエクスポートされました。', ko: '원본 파일이 이미 {target} 이하이므로 {quality}% 품질로 깔끔하게 내보냈습니다.' },
          'Original file was already under {target}; exported cleanly at {quality}% quality.'
        ),
        { target: formatBytes(targetBytes, 0), quality: chosen.quality }
      );
    } else if (chosen.scale === 1) {
      statusNote = fillTemplate(
        pickTemplate(
          ['statusMetFull'],
          { es: 'Objetivo cumplido con resolución completa de {width}×{height} px ({qualityLabel}).', id: 'Target tercapai pada resolusi penuh {width}×{height} px ({qualityLabel}).', ru: 'Цель достигнута при полном разрешении {width}×{height} px ({qualityLabel}).', ja: 'フル解像度{width}×{height} pxで目標を達成しました（{qualityLabel}）。', ko: '전체 {width}×{height}px 해상도에서 목표를 달성했습니다({qualityLabel}).' },
          'Target met at full {width}×{height}px resolution ({qualityLabel}).'
        ),
        { width: chosen.width, height: chosen.height, qualityLabel, quality: qualityLabel }
      );
    } else {
      statusNote = fillTemplate(
        pickTemplate(
          ['statusMetScaled'],
          { es: 'Objetivo cumplido al escalar a {width}×{height} px ({percent} %) con {qualityLabel}.', id: 'Target tercapai dengan penskalaan ke {width}×{height} px ({percent}%) pada {qualityLabel}.', ru: 'Цель достигнута масштабированием до {width}×{height} px ({percent} %) с {qualityLabel}.', ja: '{width}×{height} px（{percent}%）にスケーリングして目標を達成しました（{qualityLabel}）。', ko: '{width}×{height}px({percent}%)로 스케일링하고 {qualityLabel}에서 목표를 달성했습니다.' },
          'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
        ),
        {
          width: chosen.width,
          height: chosen.height,
          percent: scalePercent,
          scale: scalePercent,
          qualityLabel,
          quality: qualityLabel,
        }
      );
    }
  } else {
    if (chosen.mimeType === 'image/png') {
      statusNote = fillTemplate(
        pickTemplate(
          ['statusCannotPng'],
          { es: 'No se puede llegar a {target} con PNG sin pérdida (mínimo alcanzable: {bytes} a {width}×{height} px). Cambie el formato de salida a JPG o WebP para llegar a tamaños más pequeños.', id: 'Tidak bisa mencapai {target} dengan PNG lossless (terkecil yang bisa dicapai: {bytes} pada {width}×{height} px). Ubah format output ke JPG atau WebP untuk mencapai ukuran yang lebih kecil.', ru: 'Нельзя достичь {target} с PNG без потерь (минимально достижимо: {bytes} при {width}×{height} px). Переключите формат вывода на JPG или WebP, чтобы достичь меньших размеров.', ja: '非可逆なしPNGでは{target}に届きません（達成可能な最小サイズ：{width}×{height} pxで{bytes}）。より小さいサイズに届くよう、出力形式をJPGまたはWebPに切り替えてください。', ko: '무손실 PNG으로는 {target}에 도달할 수 없습니다(달성 가능한 최소 크기: {width}×{height}px에서 {bytes}). 더 작은 크기에 도달하려면 출력 형식을 JPG나 WebP로 전환하세요.' },
          'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
        ),
        {
          target: formatBytes(targetBytes, 0),
          bytes: formatBytes(chosen.blob.size),
          size: formatBytes(chosen.blob.size),
          width: chosen.width,
          height: chosen.height,
        }
      );
    } else if (!options.allowDownscale) {
      statusNote = fillTemplate(
        pickTemplate(
          ['statusCannotFull'],
          { es: 'No se puede llegar a {target} con las dimensiones completas de {width}×{height} px (el tamaño mínimo de calidad es {bytes}). Active «Permitir escalado de dimensiones» para reducir más las dimensiones.', id: 'Tidak bisa mencapai {target} pada dimensi penuh {width}×{height} px (ukuran minimum pada kualitas: {bytes}). Aktifkan "Izinkan Penskalaan Dimensi" untuk memperkecil dimensi lebih lanjut.', ru: 'Нельзя достичь {target} при полных размерах {width}×{height} px (минимальный размер при качестве: {bytes}). Включите «Разрешить масштабирование размеров», чтобы ещё уменьшить размеры.', ja: 'フルサイズ{width}×{height} pxでは{target}に届きません（最小の画質サイズは{bytes}です）。さらに寸法を縮小するには「サイズスケーリングを許可」を有効にしてください。', ko: '전체 {width}×{height}px 치수에서 {target}에 도달할 수 없습니다(최소 품질 크기는 {bytes}). 치수를 더 줄이려면 "크기 조정 허용"을 활성화하세요.' },
          'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
        ),
        {
          target: formatBytes(targetBytes, 0),
          bytes: formatBytes(chosen.blob.size),
          size: formatBytes(chosen.blob.size),
          width: srcW,
          height: srcH,
        }
      );
    } else {
      statusNote = fillTemplate(
        pickTemplate(
          ['statusCannotCleanly', 'statusCannotClean'],
          { es: 'No se pudo alcanzar limpiamente el objetivo solicitado de {target}. La salida codificada honesta más pequeña es {bytes} ({width}×{height} px, calidad del {quality} %). Pruebe un objetivo mayor.', id: 'Target {target} yang diminta tidak bisa dicapai dengan bersih. Output enkode jujur terkecil adalah {bytes} ({width}×{height} px, kualitas {quality}%). Coba ukuran target yang lebih besar.', ru: 'Запрошенную цель {target} не удалось чисто достичь. Минимальный честный закодированный вывод — {bytes} ({width}×{height} px, качество {quality} %). Попробуйте больший целевой размер.', ja: '要求された目標{target}をクリーンに達成できませんでした。達成可能な最小の正直なエンコード出力は{bytes}（{width}×{height} px、画質{quality}%）です。より大きな目標サイズをお試しください。', ko: '요청한 {target} 목표에 깔끔하게 도달할 수 없습니다. 정직하게 인코딩된 가장 작은 출력은 {bytes}({width}×{height}px, 품질 {quality}%)입니다. 더 큰 목표 값을 시도해 보세요.' },
          'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
        ),
        {
          target: formatBytes(targetBytes, 0),
          bytes: formatBytes(chosen.blob.size),
          size: formatBytes(chosen.blob.size),
          width: chosen.width,
          height: chosen.height,
          quality: chosen.quality,
        }
      );
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
