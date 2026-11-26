import React, { useState, useRef, useEffect, useCallback } from 'react';
import { UploadCloud, FileImage, AlertCircle, Sparkles } from 'lucide-react';

export interface UploadZoneStrings {
  dropText: string;
  browseButton: string;
  browsePrefix: string;
  browseSuffix: string;
  orPaste: string;
  hint: string; // contains {max}
  errorTooBig: string;
  errorBadType: string;
  errorUnreadable: string;
  errorMore: string; // contains {count}
  formatsLabel: string;
  ariaLabel: string;
}

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
  /** Plain-text form of a custom `subtitle` (when one is passed), so the
      dropzone's accessible name can contain the visible subtitle text too.
      Only needed when `subtitle` is set (e.g. FaviconGeneratorPage). */
  subtitleText?: string;
  strings?: UploadZoneStrings;
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
  supportedFormatsLabel,
  title,
  subtitle,
  subtitleText,
  strings,
}) => {
  const formatsLabel = supportedFormatsLabel ?? strings?.formatsLabel ?? 'JPG, PNG, WebP, HEIC';
  const resolvedTitle = title ?? strings?.dropText ?? 'Drag & drop images here';
  const browsePrefix = strings?.browsePrefix ?? 'or';
  const browseButtonText = strings?.browseButton ?? 'browse files';
  const browseSuffixText = strings?.browseSuffix ?? 'from your computer or phone';
  const hintText = strings?.hint
    ? strings.hint.replace('{max}', String(maxFileSizeMB))
    : `Max ${maxFileSizeMB} MB per image`;
  const pasteText = strings?.orPaste ?? 'Paste (Ctrl+V) supported';
  // Phase 2 (master audit 2026-11-26, WCAG 2.5.3 label-content-name-mismatch):
  // the dropzone's accessible name must contain ALL of its visible text,
  // including the three pills below (formats, max-size hint, paste hint).
  // The name is built from exactly the strings the dropzone renders, in
  // render order. When a tool passes a custom `subtitle`, its plain-text
  // form (`subtitleText`) replaces the default browse line in the name.
  // The paste pill is `hidden` below the sm breakpoint, but keeping it in
  // the name is harmless there (a name may contain more than the visible
  // text) and correct on desktop.
  //
  // IMPORTANT — the name is applied to the hidden file input ONLY, not to
  // the dropzone div itself. An aria-label on the div CANNOT pass axe's
  // label-content-name-mismatch for this element: axe's visible-text
  // tokeniser glues words at element boundaries ("hereor", "phonejpg",
  // "heicmax", "imagepaste"), so no properly-spaced label can ever contain
  // the visible-text tokens — verified empirically (axe-probe.cjs: even a
  // label byte-identical to innerText still fails). With no aria-label,
  // the div's name comes from its content, which glues the same way, so
  // the name IS the visible text (pills included) and the check passes.
  // The input keeps the full label so the `label` audit still passes.
  const browseLine =
    subtitleText ?? `${browsePrefix} ${browseButtonText} ${browseSuffixText}`;
  const dropzoneLabel = `${resolvedTitle}. ${browseLine}. ${formatsLabel}. ${hintText}. ${pasteText}`;
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
          errors.push(
            strings
              ? strings.errorBadType.replace('{name}', file.name).replace('{formats}', formatsLabel)
              : `"${file.name}" is not a supported format (${formatsLabel}).`
          );
          continue;
        }

        if (file.size > maxBytes) {
          errors.push(
            strings
              ? strings.errorTooBig.replace('{name}', file.name).replace('{max}', String(maxFileSizeMB))
              : `"${file.name}" exceeds the maximum limit of ${maxFileSizeMB} MB.`
          );
          continue;
        }

        if (file.size === 0) {
          errors.push(
            strings
              ? strings.errorUnreadable.replace('{name}', file.name)
              : `"${file.name}" is an empty file (0 bytes).`
          );
          continue;
        }

        validFiles.push(file);
      }

      if (errors.length > 0) {
        setErrorMessage(
          errors.slice(0, 3).join(' ') +
            (errors.length > 3
              ? strings
                ? ` ${strings.errorMore.replace('{count}', String(errors.length - 3))}`
                : ` (+${errors.length - 3} more errors)`
              : '')
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
      formatsLabel,
      strings,
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
      <div className="panel-pastel-blue border rounded-2xl p-4 sm:p-5 shadow-[var(--shadow)]">
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => !disabled && fileInputRef.current?.click()}
          className={`relative border-2 border-dashed rounded-2xl p-8 sm:p-12 text-center transition-[border-color,background-color,transform,opacity] cursor-pointer select-none ${
            isDragging
              ? 'border-[#dc2626] bg-[#fee2e2]/70 dark:bg-[#dc2626]/20 scale-[1.005]'
              : 'dropzone-pastel-blue hover:border-[#dc2626] hover:bg-white/95 dark:hover:bg-slate-800/80'
          } ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              fileInputRef.current?.click();
            }
          }}
        >
          <input
            ref={fileInputRef}
            type="file"
            multiple={multiple}
            accept={accept}
            onChange={handleFileInputChange}
            className="hidden"
            disabled={disabled}
            aria-label={dropzoneLabel}
          />

          <div className="flex flex-col items-center justify-center max-w-md mx-auto">
            <div
              className={`w-[60px] h-[60px] rounded-2xl flex items-center justify-center mb-4 transition-[background-color,border-color] shadow-xs ${
                isDragging
                  ? 'btn-purple-grad'
                  : 'pastel-tile-0 border border-[#fecaca] dark:border-[#ef4444]/35'
              }`}
            >
              <UploadCloud className="w-7 h-7" />
            </div>

            <p className="font-sans text-xl sm:text-2xl font-bold text-[var(--ink-navy)] tracking-[-0.015em]">
              {resolvedTitle}
            </p>
            <p className="mt-1.5 text-sm text-[var(--ink-3)]">
              {subtitle || (
                <>
                  {browsePrefix}{' '}
                  <span className="text-[#dc2626] dark:text-[#fca5a5] font-semibold underline underline-offset-2">
                    {browseButtonText}
                  </span>{' '}
                  {browseSuffixText}
                </>
              )}
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-[var(--ink-2)]">
              <span className="inline-flex items-center gap-1.5 font-medium bg-[var(--surface)] border border-[var(--line)] text-[var(--ink-2)] px-3 py-1 rounded-full shadow-2xs">
                <FileImage className="w-3.5 h-3.5 text-[#dc2626] dark:text-[#fca5a5]" />
                {formatsLabel}
              </span>
              <span className="font-medium bg-[var(--surface)] border border-[var(--line)] text-[var(--ink-2)] px-3 py-1 rounded-full shadow-2xs">
                {strings?.hint
                  ? strings.hint.replace('{max}', String(maxFileSizeMB))
                  : `Max ${maxFileSizeMB} MB per image`}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 font-medium bg-[var(--surface)] border border-[var(--line)] text-[var(--ink-2)] px-3 py-1 rounded-full shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#16a34a] dark:text-[#4ade80]" />
                {strings?.orPaste ?? 'Paste (Ctrl+V) supported'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {errorMessage && (
        <div role="alert" className="mt-3 flex items-start gap-2 p-3.5 pastel-card-14 border text-[#991b1b] dark:text-[#fecaca] text-xs sm:text-sm rounded-2xl">
          <AlertCircle className="w-4 h-4 mt-0.5 shrink-0 text-[#dc2626] dark:text-[#f87171]" />
          <span>{errorMessage}</span>
        </div>
      )}
    </div>
  );
};
