import React, { useState, useRef, useEffect, useCallback } from 'react';
import { UploadCloud, FileImage, AlertCircle, Sparkles } from 'lucide-react';

interface UploadZoneProps {
  onFilesSelected: (files: File[]) => void;
  maxFileSizeMB: number;
  disabled?: boolean;
  multiple?: boolean;
  accept?: string;
  allowedMimeTypes?: string[];
  allowedExtensionsRegex?: RegExp;
  supportedFormatsLabel?: string;
  title?: string;
  subtitle?: React.ReactNode;
}

const DEFAULT_ALLOWED_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
  'image/heic',
  'image/heif',
];

const DEFAULT_EXT_REGEX = /\.(jpe?g|png|webp|heic|heif)$/i;

export const UploadZone: React.FC<UploadZoneProps> = ({
  onFilesSelected,
  maxFileSizeMB,
  disabled = false,
  multiple = true,
  accept = 'image/jpeg,image/png,image/webp,image/heic,image/heif,.jpg,.jpeg,.png,.webp,.heic,.heif',
  allowedMimeTypes = DEFAULT_ALLOWED_TYPES,
  allowedExtensionsRegex = DEFAULT_EXT_REGEX,
  supportedFormatsLabel = 'JPG, PNG, WebP, HEIC',
  title = 'Drag & drop images here',
  subtitle,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateAndForwardFiles = useCallback(
    (rawFiles: FileList | File[]) => {
      setErrorMessage(null);
      const filesArray = Array.from(rawFiles);
      if (filesArray.length === 0) return;

      const targetFiles = multiple ? filesArray : [filesArray[0]];
      const validFiles: File[] = [];
      const errors: string[] = [];
      const maxBytes = maxFileSizeMB * 1024 * 1024;

      for (const file of targetFiles) {
        const isTypeAllowed =
          allowedMimeTypes.includes(file.type.toLowerCase()) ||
          allowedExtensionsRegex.test(file.name);

        if (!isTypeAllowed) {
          errors.push(`"${file.name}" is not a supported format (${supportedFormatsLabel}).`);
          continue;
        }

        if (file.size > maxBytes) {
          errors.push(`"${file.name}" exceeds the maximum limit of ${maxFileSizeMB} MB.`);
          continue;
        }

        if (file.size === 0) {
          errors.push(`"${file.name}" is an empty file (0 bytes).`);
          continue;
        }

        validFiles.push(file);
      }

      if (errors.length > 0) {
        setErrorMessage(
          errors.slice(0, 3).join(' ') +
            (errors.length > 3 ? ` (+${errors.length - 3} more errors)` : '')
        );
      }

      if (validFiles.length > 0) {
        onFilesSelected(validFiles);
      }
    },
    [
      maxFileSizeMB,
      multiple,
      allowedMimeTypes,
      allowedExtensionsRegex,
      supportedFormatsLabel,
      onFilesSelected,
    ]
  );

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled) {
      setIsDragging(true);
    }
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (disabled) return;

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      validateAndForwardFiles(e.dataTransfer.files);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      validateAndForwardFiles(e.target.files);
      e.target.value = '';
    }
  };

  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      if (disabled) return;
      if (e.clipboardData && e.clipboardData.files.length > 0) {
        validateAndForwardFiles(e.clipboardData.files);
      }
    };

    window.addEventListener('paste', handlePaste);
    return () => window.removeEventListener('paste', handlePaste);
  }, [disabled, validateAndForwardFiles]);

  return (
    <div className="w-full">
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => !disabled && fileInputRef.current?.click()}
        className={`relative border-2 border-dashed rounded-2xl p-8 sm:p-12 text-center transition-all cursor-pointer select-none ${
          isDragging
            ? 'border-blue-500 bg-blue-50/70 scale-[1.01]'
            : 'border-slate-300 hover:border-blue-400 bg-white hover:bg-slate-50/60 shadow-xs'
        } ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            fileInputRef.current?.click();
          }
        }}
        aria-label="Upload images area. Drag and drop or click to browse files."
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple={multiple}
          accept={accept}
          onChange={handleFileInputChange}
          className="hidden"
          disabled={disabled}
        />

        <div className="flex flex-col items-center justify-center max-w-md mx-auto">
          <div
            className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-colors ${
              isDragging ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'
            }`}
          >
            <UploadCloud className="w-8 h-8" />
          </div>

          <p className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
            {title}
          </p>
          <p className="mt-1 text-sm text-slate-500">
            {subtitle || (
              <>
                or{' '}
                <span className="text-blue-600 font-semibold underline underline-offset-2">
                  browse files
                </span>{' '}
                from your computer or phone
              </>
            )}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500">
            <span className="inline-flex items-center gap-1 font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">
              <FileImage className="w-3.5 h-3.5" />
              {supportedFormatsLabel}
            </span>
            <span className="font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">
              Max {maxFileSizeMB} MB per image
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
              Paste (Ctrl+V) supported
            </span>
          </div>
        </div>
      </div>

      {errorMessage && (
        <div className="mt-3 flex items-start gap-2 p-3 bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm rounded-xl">
          <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}
    </div>
  );
};
