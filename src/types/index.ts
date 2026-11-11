/**
 * Data structures and types for CompressMyPic
 */

export type ImageFormat = 'image/jpeg' | 'image/png' | 'image/webp';

export type OutputFormatChoice = 'original' | 'jpeg' | 'png' | 'webp';

export type CompressionPreset = 'low' | 'balanced' | 'high' | 'custom';

export interface ImageItem {
  id: string;
  file: File;
  name: string;
  originalSize: number;
  originalWidth: number;
  originalHeight: number;
  originalType: ImageFormat | string;
  originalPreviewUrl: string;
  hasAlpha: boolean;

  // Compression Output
  compressedBlob: Blob | null;
  compressedPreviewUrl: string | null;
  compressedSize: number | null;
  compressedWidth: number | null;
  compressedHeight: number | null;
  outputType: ImageFormat;
  outputExtension: string;
  outputFilename: string;

  // Individual Settings
  quality: number; // 0.1 to 1.0 (or 10 to 100)
  status: 'idle' | 'compressing' | 'done' | 'error';
  errorMessage: string | null;
  spaceSaved: number | null; // bytes
  compressionPercentage: number | null; // e.g. 74
}

export interface CompressionSettings {
  preset: CompressionPreset;
  quality: number; // 10 to 100
  format: OutputFormatChoice;
  maxFileSizeMB: number; // default 20
  fillTransparentBackground: boolean;
  backgroundColor: string; // default '#ffffff'
}

export type ModalType = 'about' | 'contact' | 'privacy' | 'terms' | 'comparison' | 'settings' | null;
