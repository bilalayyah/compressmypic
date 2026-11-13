import type { SupportedLang } from '../locales/config';

export interface DecodedGifFrame {
  imageData: ImageData;
  delayMs: number;
}

export interface DecodedGif {
  width: number;
  height: number;
  loopCount: number; // -1 once, 0 forever, >0 extra repeats
  frames: DecodedGifFrame[];
  hasTransparency: boolean;
}

export interface GifCompressOptions {
  scalePercent: number; // 25..100
  maxColors: number; // 16..256
  frameStep: 1 | 2 | 3; // 1 = keep all, 2 = drop every 2nd, 3 = keep 1 of 3
  lang?: SupportedLang; // when 'es'/'pt'/'fr'/'de'/'it'/'id'/'ru'/'ja'/'ko', thrown error messages use that language's templates
  onProgress?: (percent: number) => void;
}

/**
 * Decoder/encoder error strings. English is the base-file original (fallback);
 * Spanish is the Batch 5 translation table (tool-ui-es-batch5.ts, /gif-compressor);
 * Portuguese and French are the Phase 2 tables (tool-ui-pt.ts / tool-ui-fr.ts,
 * /gif-compressor); German and Italian are the Phase 3 tables (tool-ui-de.ts /
 * tool-ui-it.ts, /gif-compressor); Indonesian and Russian are the Phase 4 tables
 * (tool-ui-id.ts / tool-ui-ru.ts, /gif-compressor); Japanese and Korean are the
 * Phase 5 tables (tool-ui-ja.ts / tool-ui-ko.ts, /gif-compressor). No logic changes — only which
 * language the thrown Error carries.
 */
type GifErrorKey =
  | 'errorTooSmall'
  | 'errorNotValidGif'
  | 'errorInvalidDims'
  | 'errorTruncatedColorTable'
  | 'errorNoFrames'
  | 'errorCanvasContext';

const GIF_ERROR_EN: Record<GifErrorKey, string> = {
  errorTooSmall: 'File is too small to be a valid GIF.',
  errorNotValidGif: 'Selected file is not a valid GIF87a or GIF89a animation.',
  errorInvalidDims: 'GIF has invalid 0x0 canvas dimensions.',
  errorTruncatedColorTable: 'Truncated GIF Global Color Table.',
  errorNoFrames: 'Could not decode any image frames from this GIF file.',
  errorCanvasContext: 'Unable to initialize 2D canvas context.',
};

const GIF_ERROR_ES: Record<GifErrorKey, string> = {
  errorTooSmall: 'El archivo es demasiado pequeño para ser un GIF válido.',
  errorNotValidGif: 'El archivo seleccionado no es una animación GIF87a o GIF89a válida.',
  errorInvalidDims: 'El GIF tiene dimensiones de lienzo 0×0 no válidas.',
  errorTruncatedColorTable: 'Tabla de colores global del GIF truncada.',
  errorNoFrames: 'No se pudo decodificar ningún fotograma de imagen de este archivo GIF.',
  errorCanvasContext: 'No se pudo inicializar el contexto de lienzo 2D.',
};

// Portuguese strings copied verbatim from tool-ui-pt.ts, /gif-compressor (lines 1414-1419).
const GIF_ERROR_PT: Record<GifErrorKey, string> = {
  errorTooSmall: 'O arquivo é pequeno demais para ser um GIF válido.',
  errorNotValidGif: 'O arquivo selecionado não é uma animação GIF87a ou GIF89a válida.',
  errorInvalidDims: 'O GIF tem dimensões de tela 0×0 inválidas.',
  errorTruncatedColorTable: 'Tabela de cores global do GIF truncada.',
  errorNoFrames: 'Não foi possível decodificar nenhum quadro de imagem deste arquivo GIF.',
  errorCanvasContext: 'Não foi possível inicializar o contexto de canvas 2D.',
};

// French strings copied verbatim from tool-ui-fr.ts, /gif-compressor (lines 1389-1394).
// Double-quoted here exactly as in the source table (apostrophes unescaped).
const GIF_ERROR_FR: Record<GifErrorKey, string> = {
  errorTooSmall: "Le fichier est trop petit pour être un GIF valide.",
  errorNotValidGif: "Le fichier sélectionné n'est pas une animation GIF87a ou GIF89a valide.",
  errorInvalidDims: "Le GIF a des dimensions de canevas 0×0 non valides.",
  errorTruncatedColorTable: "Table de couleurs globale du GIF tronquée.",
  errorNoFrames: "Impossible de décoder une image de ce fichier GIF.",
  errorCanvasContext: "Impossible d'initialiser le contexte de canevas 2D.",
};

// German strings copied verbatim from tool-ui-de.ts, /gif-compressor (lines 1371-1376).
const GIF_ERROR_DE: Record<GifErrorKey, string> = {
  errorTooSmall: 'Die Datei ist zu klein, um ein gültiges GIF zu sein.',
  errorNotValidGif: 'Die ausgewählte Datei ist keine gültige GIF87a- oder GIF89a-Animation.',
  errorInvalidDims: 'Das GIF hat ungültige 0×0-Leinwandabmessungen.',
  errorTruncatedColorTable: 'Abgeschnittene globale GIF-Farbtafel.',
  errorNoFrames: 'Aus dieser GIF-Datei konnten keine Bildrahmen decodiert werden.',
  errorCanvasContext: '2D-Canvas-Kontext konnte nicht initialisiert werden.',
};

// Italian strings copied verbatim from tool-ui-it.ts, /gif-compressor (lines 1304-1309).
const GIF_ERROR_IT: Record<GifErrorKey, string> = {
  errorTooSmall: 'Il file è troppo piccolo per essere una GIF valida.',
  errorNotValidGif: 'Il file selezionato non è un’animazione GIF87a o GIF89a valida.',
  errorInvalidDims: 'La GIF ha dimensioni di canvas 0×0 non valide.',
  errorTruncatedColorTable: 'Tabella dei colori globale della GIF troncata.',
  errorNoFrames: 'Impossibile decodificare alcun fotogramma di immagine da questo file GIF.',
  errorCanvasContext: 'Impossibile inizializzare il contesto canvas 2D.',
};

// Indonesian strings copied verbatim from tool-ui-id.ts, /gif-compressor (lines 1371-1376).
const GIF_ERROR_ID: Record<GifErrorKey, string> = {
  errorTooSmall: 'File terlalu kecil untuk menjadi GIF yang valid.',
  errorNotValidGif: 'File yang dipilih bukan animasi GIF87a atau GIF89a yang valid.',
  errorInvalidDims: 'GIF memiliki dimensi canvas 0×0 yang tidak valid.',
  errorTruncatedColorTable: 'Tabel Warna Global GIF terpotong.',
  errorNoFrames: 'Tidak bisa mendekode frame gambar apa pun dari file GIF ini.',
  errorCanvasContext: 'Tidak bisa menginisialisasi konteks canvas 2D.',
};

// Russian strings copied verbatim from tool-ui-ru.ts, /gif-compressor (lines 1373-1378).
const GIF_ERROR_RU: Record<GifErrorKey, string> = {
  errorTooSmall: 'Файл слишком мал, чтобы быть допустимым GIF.',
  errorNotValidGif: 'Выбранный файл не является допустимой анимацией GIF87a или GIF89a.',
  errorInvalidDims: 'У GIF недопустимые размеры холста 0×0.',
  errorTruncatedColorTable: 'Усечённая глобальная таблица цветов GIF.',
  errorNoFrames: 'Не удалось декодировать кадры изображения из этого файла GIF.',
  errorCanvasContext: 'Не удалось инициализировать 2D-контекст Canvas.',
};

// Japanese strings copied verbatim from tool-ui-ja.ts, /gif-compressor (lines 1373-1378).
const GIF_ERROR_JA: Record<GifErrorKey, string> = {
  errorTooSmall: 'ファイルが小さすぎて有効なGIFではありません。',
  errorNotValidGif: '選択したファイルは有効なGIF87aまたはGIF89aアニメーションではありません。',
  errorInvalidDims: 'GIFのキャンバス寸法が無効な0×0です。',
  errorTruncatedColorTable: 'GIFのグローバルカラーテーブルが途中で切れています。',
  errorNoFrames: 'このGIFファイルから画像フレームをデコードできませんでした。',
  errorCanvasContext: '2D Canvasコンテキストを初期化できませんでした。',
};

// Korean strings copied verbatim from tool-ui-ko.ts, /gif-compressor (lines 1377-1382).
const GIF_ERROR_KO: Record<GifErrorKey, string> = {
  errorTooSmall: '파일이 유효한 GIF가 되기에는 너무 작습니다.',
  errorNotValidGif: '선택한 파일은 유효한 GIF87a나 GIF89a 애니메이션이 아닙니다.',
  errorInvalidDims: 'GIF의 캔버스 치수가 유효하지 않은 0×0입니다.',
  errorTruncatedColorTable: 'GIF 전역 색상 테이블이 잘렸습니다.',
  errorNoFrames: '이 GIF 파일에서 이미지 프레임을 디코딩할 수 없습니다.',
  errorCanvasContext: '2D 캔버스 컨텍스트를 초기화할 수 없습니다.',
};

function gifError(key: GifErrorKey, lang?: SupportedLang): string {
  switch (lang) {
    case 'es':
      return GIF_ERROR_ES[key];
    case 'pt':
      return GIF_ERROR_PT[key];
    case 'fr':
      return GIF_ERROR_FR[key];
    case 'de':
      return GIF_ERROR_DE[key];
    case 'it':
      return GIF_ERROR_IT[key];
    case 'id':
      return GIF_ERROR_ID[key];
    case 'ru':
      return GIF_ERROR_RU[key];
    case 'ja':
      return GIF_ERROR_JA[key];
    case 'ko':
      return GIF_ERROR_KO[key];
    default:
      return GIF_ERROR_EN[key];
  }
}

export interface GifCompressResult {
  blob: Blob;
  previewUrl: string;
  originalSize: number;
  compressedSize: number;
  originalWidth: number;
  originalHeight: number;
  outputWidth: number;
  outputHeight: number;
  originalFrames: number;
  outputFrames: number;
  compressionPercent: number;
  isSmaller: boolean;
}

function readUint16LE(bytes: Uint8Array, offset: number): number {
  return bytes[offset] | (bytes[offset + 1] << 8);
}

/**
 * Standard GIF LZW decompression for image sub-block streams.
 */
function decompressGifLzw(minCodeSize: number, encoded: Uint8Array, expectedPixels: number): Uint8Array {
  const clearCode = 1 << minCodeSize;
  const eoiCode = clearCode + 1;
  const output = new Uint8Array(expectedPixels);

  let codeSize = minCodeSize + 1;
  let codeMask = (1 << codeSize) - 1;
  let nextCode = eoiCode + 1;

  // Prefix & suffix tables up to 4096 entries
  const prefix = new Int32Array(4096);
  const suffix = new Uint8Array(4096);
  const stack = new Uint8Array(4096);

  const resetTable = () => {
    codeSize = minCodeSize + 1;
    codeMask = (1 << codeSize) - 1;
    nextCode = eoiCode + 1;
    for (let i = 0; i < clearCode; i++) {
      prefix[i] = -1;
      suffix[i] = i;
    }
  };

  resetTable();

  let bitBuffer = 0;
  let bitCount = 0;
  let bytePos = 0;
  let outPos = 0;
  let prevCode = -1;
  let firstChar = 0;

  while (outPos < expectedPixels) {
    while (bitCount < codeSize) {
      if (bytePos >= encoded.length) {
        return output;
      }
      bitBuffer |= encoded[bytePos++] << bitCount;
      bitCount += 8;
    }

    const code = bitBuffer & codeMask;
    bitBuffer >>= codeSize;
    bitCount -= codeSize;

    if (code === clearCode) {
      resetTable();
      prevCode = -1;
      continue;
    }

    if (code === eoiCode) {
      break;
    }

    if (prevCode === -1) {
      if (code < clearCode) {
        output[outPos++] = suffix[code];
        prevCode = code;
        firstChar = suffix[code];
      }
      continue;
    }

    let inCode = code;
    let stackTop = 0;

    if (code >= nextCode) {
      // Special KwKwK case: code not yet in table
      if (code > nextCode) break;
      stack[stackTop++] = firstChar;
      inCode = prevCode;
    }

    while (inCode >= clearCode && stackTop < 4095) {
      stack[stackTop++] = suffix[inCode];
      inCode = prefix[inCode];
    }

    firstChar = suffix[inCode];
    stack[stackTop++] = firstChar;

    while (stackTop > 0 && outPos < expectedPixels) {
      output[outPos++] = stack[--stackTop];
    }

    if (nextCode < 4096) {
      prefix[nextCode] = prevCode;
      suffix[nextCode] = firstChar;
      nextCode++;
      if ((nextCode & codeMask) === 0 && nextCode < 4096) {
        codeSize++;
        codeMask = (1 << codeSize) - 1;
      }
    }

    prevCode = code;
  }

  return output;
}

/**
 * Pure TypeScript GIF87a / GIF89a decoder with full frame compositing and disposal handling.
 */
export function decodeAnimatedGif(buffer: ArrayBuffer, lang?: SupportedLang): DecodedGif {
  const bytes = new Uint8Array(buffer);
  if (bytes.length < 14) {
    throw new Error(gifError('errorTooSmall', lang));
  }

  const header = String.fromCharCode(bytes[0], bytes[1], bytes[2], bytes[3], bytes[4], bytes[5]);
  if (header !== 'GIF87a' && header !== 'GIF89a') {
    throw new Error(gifError('errorNotValidGif', lang));
  }

  const width = readUint16LE(bytes, 6);
  const height = readUint16LE(bytes, 8);
  if (!width || !height) {
    throw new Error(gifError('errorInvalidDims', lang));
  }

  const lsdPacked = bytes[10];
  const hasGct = (lsdPacked & 0x80) !== 0;
  const gctSize = hasGct ? 1 << ((lsdPacked & 0x07) + 1) : 0;

  let pos = 13;
  let globalColorTable: Uint8Array | null = null;
  if (hasGct) {
    const gctEnd = pos + gctSize * 3;
    if (gctEnd > bytes.length) {
      throw new Error(gifError('errorTruncatedColorTable', lang));
    }
    globalColorTable = bytes.slice(pos, gctEnd);
    pos = gctEnd;
  }

  const screenRgba = new Uint8ClampedArray(width * height * 4);
  const frames: DecodedGifFrame[] = [];
  let loopCount = 0; // Default to infinite loop if animated without explicit Netscape block
  let hasTransparency = false;

  // Per-frame GCE state
  let disposalMethod = 0;
  let hasTransparentColor = false;
  let transparentIndex = 0;
  let delayMs = 100;

  const skipSubBlocks = () => {
    while (pos < bytes.length) {
      const len = bytes[pos++];
      if (len === 0) break;
      pos = Math.min(bytes.length, pos + len);
    }
  };

  while (pos < bytes.length) {
    const marker = bytes[pos++];
    if (marker === 0x3b) {
      // GIF Trailer
      break;
    }

    if (marker === 0x21) {
      // Extension block
      if (pos >= bytes.length) break;
      const label = bytes[pos++];

      if (label === 0xf9) {
        // Graphics Control Extension
        const blockSize = bytes[pos++];
        if (blockSize >= 4 && pos + blockSize <= bytes.length) {
          const packed = bytes[pos];
          disposalMethod = (packed >> 2) & 0x07;
          hasTransparentColor = (packed & 0x01) !== 0;
          if (hasTransparentColor) hasTransparency = true;
          const delayCs = readUint16LE(bytes, pos + 1);
          delayMs = delayCs > 0 ? Math.max(20, delayCs * 10) : 100;
          transparentIndex = bytes[pos + 3];
          pos += blockSize;
        }
        skipSubBlocks();
      } else if (label === 0xff) {
        // Application Extension (check for NETSCAPE2.0 loop count)
        const appBlockSize = bytes[pos++];
        const appIdBytes = bytes.slice(pos, pos + appBlockSize);
        const appId = String.fromCharCode(...appIdBytes);
        pos += appBlockSize;

        const firstSubLen = pos < bytes.length ? bytes[pos++] : 0;
        if (firstSubLen > 0 && pos + firstSubLen <= bytes.length) {
          if (appId === 'NETSCAPE2.0' && firstSubLen >= 3 && bytes[pos] === 1) {
            loopCount = readUint16LE(bytes, pos + 1);
          }
          pos += firstSubLen;
          skipSubBlocks();
        }
      } else {
        skipSubBlocks();
      }
      continue;
    }

    if (marker === 0x2c) {
      // Image Descriptor (9 bytes)
      if (pos + 9 > bytes.length) break;
      const left = readUint16LE(bytes, pos);
      const top = readUint16LE(bytes, pos + 2);
      const frameW = readUint16LE(bytes, pos + 4);
      const frameH = readUint16LE(bytes, pos + 6);
      const imgPacked = bytes[pos + 8];
      pos += 9;

      const hasLct = (imgPacked & 0x80) !== 0;
      const interlaced = (imgPacked & 0x40) !== 0;
      const lctSize = hasLct ? 1 << ((imgPacked & 0x07) + 1) : 0;

      let activePalette = globalColorTable;
      if (hasLct) {
        const lctEnd = pos + lctSize * 3;
        if (lctEnd > bytes.length) break;
        activePalette = bytes.slice(pos, lctEnd);
        pos = lctEnd;
      }

      if (pos >= bytes.length) break;
      const minCodeSize = bytes[pos++];

      // Collect sub-blocks for LZW stream
      const chunks: Uint8Array[] = [];
      let totalEncodedLen = 0;
      while (pos < bytes.length) {
        const subLen = bytes[pos++];
        if (subLen === 0) break;
        const end = Math.min(bytes.length, pos + subLen);
        const slice = bytes.slice(pos, end);
        chunks.push(slice);
        totalEncodedLen += slice.length;
        pos = end;
      }

      const encoded = new Uint8Array(totalEncodedLen);
      let offset = 0;
      for (const chunk of chunks) {
        encoded.set(chunk, offset);
        offset += chunk.length;
      }

      const rawIndices = decompressGifLzw(minCodeSize, encoded, frameW * frameH);

      // Save previous canvas snapshot if disposalMethod === 3 (Restore Previous)
      const prevSnapshot = disposalMethod === 3 ? new Uint8ClampedArray(screenRgba) : null;

      // De-interlace row mapping if needed
      const rowMap = new Int32Array(frameH);
      if (interlaced) {
        const starts = [0, 4, 2, 1];
        const steps = [8, 8, 4, 2];
        let srcRow = 0;
        for (let pass = 0; pass < 4; pass++) {
          for (let y = starts[pass]; y < frameH; y += steps[pass]) {
            rowMap[y] = srcRow++;
          }
        }
      } else {
        for (let y = 0; y < frameH; y++) rowMap[y] = y;
      }

      // Composite decoded pixels onto screen buffer
      if (activePalette) {
        for (let y = 0; y < frameH; y++) {
          const destY = top + y;
          if (destY < 0 || destY >= height) continue;
          const logicalRow = rowMap[y];
          for (let x = 0; x < frameW; x++) {
            const destX = left + x;
            if (destX < 0 || destX >= width) continue;

            const colorIdx = rawIndices[logicalRow * frameW + x];
            if (hasTransparentColor && colorIdx === transparentIndex) {
              continue;
            }

            const pOffset = colorIdx * 3;
            if (pOffset + 2 >= activePalette.length) continue;

            const dstOffset = (destY * width + destX) * 4;
            screenRgba[dstOffset] = activePalette[pOffset];
            screenRgba[dstOffset + 1] = activePalette[pOffset + 1];
            screenRgba[dstOffset + 2] = activePalette[pOffset + 2];
            screenRgba[dstOffset + 3] = 255;
          }
        }
      }

      // Store composited frame
      frames.push({
        imageData: new ImageData(new Uint8ClampedArray(screenRgba), width, height),
        delayMs,
      });

      // Apply disposal for next frame
      if (disposalMethod === 2) {
        // Restore to background / transparent
        for (let y = 0; y < frameH; y++) {
          const destY = top + y;
          if (destY < 0 || destY >= height) continue;
          for (let x = 0; x < frameW; x++) {
            const destX = left + x;
            if (destX < 0 || destX >= width) continue;
            const dstOffset = (destY * width + destX) * 4;
            screenRgba[dstOffset] = 0;
            screenRgba[dstOffset + 1] = 0;
            screenRgba[dstOffset + 2] = 0;
            screenRgba[dstOffset + 3] = 0;
          }
        }
      } else if (disposalMethod === 3 && prevSnapshot) {
        screenRgba.set(prevSnapshot);
      }

      // Reset GCE state for the next frame
      disposalMethod = 0;
      hasTransparentColor = false;
      transparentIndex = 0;
      delayMs = 100;
      continue;
    }

    // Unknown byte — break cleanly to avoid infinite loops on trailing bytes
    break;
  }

  if (frames.length === 0) {
    throw new Error(gifError('errorNoFrames', lang));
  }

  return {
    width,
    height,
    loopCount,
    frames,
    hasTransparency,
  };
}

/**
 * Re-encodes an animated (or static) GIF completely in the browser with configurable
 * palette color reduction, dimension scaling, and frame skipping.
 */
export async function compressAnimatedGif(
  file: File,
  decoded: DecodedGif,
  options: GifCompressOptions
): Promise<GifCompressResult> {
  const { GIFEncoder, quantize, applyPalette } = await import('gifenc');

  const scale = Math.max(0.15, Math.min(1, options.scalePercent / 100));
  const outW = Math.max(16, Math.round(decoded.width * scale));
  const outH = Math.max(16, Math.round(decoded.height * scale));
  const maxColors = Math.max(16, Math.min(256, Math.round(options.maxColors)));

  // Collect kept frames while accumulating dropped frame delays so playback duration stays faithful
  const keptFrames: { imageData: ImageData; delayMs: number }[] = [];
  for (let i = 0; i < decoded.frames.length; i += options.frameStep) {
    let combinedDelay = 0;
    for (let j = i; j < Math.min(decoded.frames.length, i + options.frameStep); j++) {
      combinedDelay += decoded.frames[j].delayMs;
    }
    keptFrames.push({
      imageData: decoded.frames[i].imageData,
      delayMs: Math.max(20, combinedDelay),
    });
  }

  // Offscreen canvases for optional scaling
  const srcCanvas = document.createElement('canvas');
  srcCanvas.width = decoded.width;
  srcCanvas.height = decoded.height;
  const srcCtx = srcCanvas.getContext('2d', { willReadFrequently: true });

  const dstCanvas = document.createElement('canvas');
  dstCanvas.width = outW;
  dstCanvas.height = outH;
  const dstCtx = dstCanvas.getContext('2d', { willReadFrequently: true });

  if (!srcCtx || !dstCtx) {
    throw new Error(gifError('errorCanvasContext', options.lang));
  }

  const gif = GIFEncoder();
  const quantFormat = decoded.hasTransparency
    ? 'rgba4444'
    : maxColors >= 96
    ? 'rgb565'
    : 'rgb444';

  for (let i = 0; i < keptFrames.length; i++) {
    const frame = keptFrames[i];
    let rgbaData: Uint8ClampedArray;

    if (outW === decoded.width && outH === decoded.height) {
      rgbaData = frame.imageData.data;
    } else {
      srcCtx.putImageData(frame.imageData, 0, 0);
      dstCtx.clearRect(0, 0, outW, outH);
      dstCtx.imageSmoothingEnabled = true;
      dstCtx.imageSmoothingQuality = 'high';
      dstCtx.drawImage(srcCanvas, 0, 0, outW, outH);
      rgbaData = dstCtx.getImageData(0, 0, outW, outH).data;
    }

    const palette = quantize(
      rgbaData,
      maxColors,
      decoded.hasTransparency ? { format: 'rgba4444', oneBitAlpha: true } : { format: quantFormat }
    );
    const indexed = applyPalette(rgbaData, palette, quantFormat);

    let transparentIndex = -1;
    if (decoded.hasTransparency) {
      transparentIndex = palette.findIndex((c) => c.length >= 4 && c[3] === 0);
    }

    gif.writeFrame(indexed, outW, outH, {
      palette,
      delay: frame.delayMs,
      repeat: i === 0 ? decoded.loopCount : undefined,
      transparent: transparentIndex >= 0,
      transparentIndex: transparentIndex >= 0 ? transparentIndex : 0,
      dispose: 2,
    });

    if (options.onProgress) {
      options.onProgress(Math.round(((i + 1) / keptFrames.length) * 100));
    }

    if (i < keptFrames.length - 1) {
      await new Promise((r) => setTimeout(r, 0));
    }
  }

  gif.finish();
  const bytes = new Uint8Array(gif.bytesView()).slice();
  const blob = new Blob([bytes], { type: 'image/gif' });

  const origSize = file.size;
  const compSize = blob.size;
  const compressionPercent =
    origSize > 0 ? Math.round(((origSize - compSize) / origSize) * 100) : 0;

  return {
    blob,
    previewUrl: URL.createObjectURL(blob),
    originalSize: origSize,
    compressedSize: compSize,
    originalWidth: decoded.width,
    originalHeight: decoded.height,
    outputWidth: outW,
    outputHeight: outH,
    originalFrames: decoded.frames.length,
    outputFrames: keptFrames.length,
    compressionPercent,
    isSmaller: compSize < origSize,
  };
}
