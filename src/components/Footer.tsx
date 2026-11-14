import React from 'react';
import { ShieldCheck } from 'lucide-react';

export interface FooterStrings {
  blurb: string;
  privacyNote: string;
  toolsHeading: string;
  legalHeading: string;
  guidesHeading: string;
  moreHeading: string;
  directoryHeading: string;
  processedLocally: string;
  bottomRights: string; // contains {year}
  deployedNote: string; // 'Crafted with ❤️ by Bilal inspired by Shaheen' — Bilal/Shaheen render in script font
  contactLabel: string; // 'Contacto: bilalayyah@gmail.com'
  toolsLinks: Array<{ slug: string; label: string }>;
  legalLinks: Array<{ slug: string; label: string }>;
  guidesLinks: Array<{ slug: string; label: string }>;
  moreLinks: Array<{ slug: string; label: string }>;
  directoryLinks: Array<{ slug: string; label: string }>;
}

const DEFAULT_FOOTER_STRINGS: FooterStrings = {
  blurb:
    'Fast, secure, and private browser-native image compression. Optimize JPG, PNG, and WebP images without uploading your data to any external server.',
  privacyNote: '100% Client-Side Privacy',
  toolsHeading: 'Image Tools',
  legalHeading: 'Trust & Legal',
  guidesHeading: 'Guides',
  moreHeading: 'More Utilities',
  directoryHeading: 'Advanced Compression, Editing & Developer Tools',
  processedLocally: 'Processed locally via HTML5 Canvas',
  bottomRights:
    '© {year} CompressMyPic. All rights reserved. Free client-side image compression utility.',
  deployedNote: 'Crafted with ❤️ by Bilal inspired by Shaheen',
  contactLabel: 'Contact: bilalayyah@gmail.com',
  toolsLinks: [
    { slug: '/', label: 'Compress Images' },
    { slug: '/image-resizer', label: 'Image Resizer' },
    { slug: '/image-converter', label: 'Image Converter' },
    { slug: '/rotate-flip-image', label: 'Rotate & Flip Image' },
    { slug: '/image-to-pdf', label: 'Image to PDF' },
    { slug: '/remove-image-metadata', label: 'Remove Metadata' },
    { slug: '/remove-background', label: 'Background Remover' },
  ],
  legalLinks: [
    { slug: '/privacy', label: 'Privacy Policy' },
    { slug: '/terms', label: 'Terms of Service' },
    { slug: '/about', label: 'About Us' },
    { slug: '/contact', label: 'Contact Support' },
  ],
  guidesLinks: [
    {
      slug: '/guides/compress-images-for-whatsapp',
      label: 'How to compress images for WhatsApp without losing quality',
    },
    {
      slug: '/guides/jpg-vs-png-vs-webp',
      label: 'JPG vs PNG vs WebP: Which Format Should You Use?',
    },
    {
      slug: '/guides/reduce-image-size-to-100kb',
      label: 'How to Reduce Image Size to 100KB for Web & Email',
    },
  ],
  moreLinks: [
    { slug: '/image-metadata-viewer', label: 'Metadata & EXIF Viewer' },
    { slug: '/favicon-generator', label: 'Favicon Generator' },
    { slug: '/image-color-picker', label: 'Image Color Picker' },
    { slug: '/image-dimensions-checker', label: 'Dimensions Checker' },
  ],
  directoryLinks: [
    { slug: '/compress-image-to-50kb', label: 'Compress to 50KB' },
    { slug: '/compress-image-to-100kb', label: 'Compress to 100KB' },
    { slug: '/compress-image-to-200kb', label: 'Compress to 200KB' },
    { slug: '/compress-image-to-500kb', label: 'Compress to 500KB' },
    { slug: '/target-file-size-compressor', label: 'Target File Size Compressor' },
    { slug: '/bulk-image-compressor', label: 'Bulk Image Compressor' },
    { slug: '/bulk-image-resizer', label: 'Bulk Image Resizer' },
    { slug: '/bulk-image-converter', label: 'Bulk Image Converter' },
    { slug: '/web-image-optimizer', label: 'Web Image Optimizer' },
    { slug: '/gif-compressor', label: 'GIF Compressor' },
    { slug: '/image-cropper', label: 'Image Cropper' },
    { slug: '/image-watermark', label: 'Image Watermark' },
    { slug: '/blur-pixelate-image', label: 'Blur & Pixelate' },
    { slug: '/add-text-to-image', label: 'Add Text to Image' },
    { slug: '/image-border-generator', label: 'Border Generator' },
    { slug: '/round-image-corners', label: 'Round Corners' },
    { slug: '/image-brightness-editor', label: 'Brightness Editor' },
    { slug: '/image-contrast-editor', label: 'Contrast Editor' },
    { slug: '/image-saturation-editor', label: 'Saturation Editor' },
    { slug: '/image-filters', label: 'Image Filters' },
    { slug: '/add-background-to-image', label: 'Add Background' },
    { slug: '/image-splitter', label: 'Image Splitter' },
    { slug: '/image-dpi-changer', label: 'DPI Changer' },
    { slug: '/image-to-base64', label: 'Image to Base64' },
    { slug: '/base64-to-image', label: 'Base64 to Image' },
    { slug: '/image-color-palette-extractor', label: 'Color Palette Extractor' },
    { slug: '/gif-maker', label: 'GIF Maker' },
    { slug: '/image-collage-maker', label: 'Image Collage Maker' },
    { slug: '/heic-to-jpg', label: 'HEIC to JPG' },
    { slug: '/jpg-to-png', label: 'JPG to PNG' },
    { slug: '/png-to-jpg', label: 'PNG to JPG' },
    { slug: '/jpg-to-webp', label: 'JPG to WebP' },
    { slug: '/webp-to-jpg', label: 'WebP to JPG' },
    { slug: '/png-to-webp', label: 'PNG to WebP' },
    { slug: '/webp-to-png', label: 'WebP to PNG' },
    { slug: '/svg-to-png', label: 'SVG to PNG' },
    { slug: '/avif-to-jpg', label: 'AVIF to JPG' },
    { slug: '/bmp-to-jpg', label: 'BMP to JPG' },
  ],
};

interface FooterProps {
  onNavigate: (path: string) => void;
  /** Localized footer strings. Defaults to the current English content. */
  strings?: FooterStrings;
  /** Maps an English slug to its path in the active language (App passes
      `(slug) => toLocalizedPath(slug, lang)`). Defaults to identity. */
  localizePath?: (englishSlug: string) => string;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  strings: stringsProp,
  localizePath = (slug: string) => slug,
}) => {
  const strings: FooterStrings = { ...DEFAULT_FOOTER_STRINGS, ...stringsProp };

  return (
    <footer className="footer-pastel-band text-[var(--ink-2)] border-t border-[var(--line)] text-sm">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Col 1: Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <a
              href={localizePath('/')}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/');
              }}
              className="inline-flex items-center gap-[10px] text-[var(--ink-navy)] font-sans font-extrabold text-[1.15rem] tracking-tight"
            >
              <span
                className="w-8 h-8 rounded-[10px] btn-purple-grad grid place-items-center shrink-0"
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M8 3H5a2 2 0 0 0-2 2v3" />
                  <path d="M16 3h3a2 2 0 0 1 2 2v3" />
                  <path d="M8 21H5a2 2 0 0 1-2-2v-3" />
                  <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
                  <circle cx="12" cy="12" r="3.2" />
                </svg>
              </span>
              <span>
                Compress<span className="text-[#7c3aed] dark:text-[#a78bfa]">My</span>Pic
              </span>
            </a>
            <p className="text-xs text-[var(--ink-3)] leading-relaxed">
              {strings.blurb}
            </p>
            <div className="inline-flex items-center gap-1.5 text-xs text-[#15803d] dark:text-[#4ade80] font-semibold">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>{strings.privacyNote}</span>
            </div>
          </div>

          {/* Col 2: Image Tools */}
          <div>
            <h4 className="text-xs font-bold text-[var(--ink-navy)] uppercase tracking-wider mb-3">
              {strings.toolsHeading}
            </h4>
            <ul className="space-y-2 text-xs">
              {strings.toolsLinks.map((link) => (
                <li key={link.slug}>
                  <a
                    href={localizePath(link.slug)}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(link.slug);
                    }}
                    className="text-[var(--ink-2)] hover:text-[#7c3aed] dark:hover:text-[#c4b5fd] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Legal & Trust */}
          <div>
            <h4 className="text-xs font-bold text-[var(--ink-navy)] uppercase tracking-wider mb-3">
              {strings.legalHeading}
            </h4>
            <ul className="space-y-2 text-xs">
              {strings.legalLinks.map((link) => (
                <li key={link.slug}>
                  <a
                    href={localizePath(link.slug)}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(link.slug);
                    }}
                    className="text-[var(--ink-2)] hover:text-[#7c3aed] dark:hover:text-[#c4b5fd] transition-colors block text-left"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h4 className="text-xs font-bold text-[var(--ink-navy)] uppercase tracking-wider mb-3">{strings.guidesHeading}</h4>
            <ul className="space-y-2 text-xs text-[var(--ink-2)]">
              {strings.guidesLinks.map((link) => (
                <li key={link.slug}>
                  <a
                    href={localizePath(link.slug)}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(link.slug);
                    }}
                    className="text-[var(--ink-2)] hover:text-[#7c3aed] dark:hover:text-[#c4b5fd] transition-colors block text-left"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: More Tools */}
          <div>
            <h4 className="text-xs font-bold text-[var(--ink-navy)] uppercase tracking-wider mb-3">
              {strings.moreHeading}
            </h4>
            <ul className="space-y-2 text-xs text-[var(--ink-2)]">
              {strings.moreLinks.map((link) => (
                <li key={link.slug}>
                  <a
                    href={localizePath(link.slug)}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(link.slug);
                    }}
                    className="text-[var(--ink-2)] hover:text-[#7c3aed] dark:hover:text-[#c4b5fd] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 text-[var(--ink-3)]">
                {strings.processedLocally}
              </li>
            </ul>
          </div>
        </div>

        {/* Compact Advanced Compression, Editing & Developer Tools Directory */}
        <div className="pt-8 pb-6 border-t border-[var(--line)]">
          <h4 className="text-[11px] font-bold text-[var(--ink-navy)] uppercase tracking-wider mb-3">
            {strings.directoryHeading}
          </h4>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-[var(--ink-2)]">
            {strings.directoryLinks.map((item) => (
              <a
                key={item.slug}
                href={localizePath(item.slug)}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.slug);
                }}
                className="text-[var(--ink-2)] hover:text-[#7c3aed] dark:hover:text-[#c4b5fd] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[var(--line)] flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--ink-3)] gap-4">
          <p>{strings.bottomRights.replace('{year}', String(new Date().getFullYear()))}</p>
          <p>
            {strings.deployedNote.split(/(Bilal|Shaheen)/g).map((part, index) =>
              part === 'Bilal' || part === 'Shaheen' ? (
                <span key={index} className="font-script text-base">
                  {part}
                </span>
              ) : (
                <span key={index}>{part}</span>
              ),
            )}
          </p>
          <div className="flex items-center gap-4">
            <span>{strings.contactLabel}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
