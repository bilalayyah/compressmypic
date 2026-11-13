import React from 'react';
import { Layers, ShieldCheck } from 'lucide-react';

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
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-400 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Col 1: Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <a
              href={localizePath('/')}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/');
              }}
              className="flex items-center gap-2.5 text-white font-bold text-lg tracking-tight"
            >
              <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Layers className="w-4 h-4" />
              </div>
              <span>Compress<span className="text-blue-500">MyPic</span></span>
            </a>
            <p className="text-xs text-slate-400 leading-relaxed">
              {strings.blurb}
            </p>
            <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>{strings.privacyNote}</span>
            </div>
          </div>

          {/* Col 2: Image Tools */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
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
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Legal & Trust */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
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
                    className="hover:text-white transition-colors block text-left"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">{strings.guidesHeading}</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {strings.guidesLinks.map((link) => (
                <li key={link.slug}><a href={localizePath(link.slug)} onClick={(e) => { e.preventDefault(); onNavigate(link.slug); }} className="hover:text-white transition-colors block text-left">{link.label}</a></li>
              ))}
            </ul>
          </div>
          {/* Col 4: More Tools */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              {strings.moreHeading}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {strings.moreLinks.map((link) => (
                <li key={link.slug}>
                  <a
                    href={localizePath(link.slug)}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(link.slug);
                    }}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 text-slate-500">
                {strings.processedLocally}
              </li>
            </ul>
          </div>
        </div>

        {/* Compact Advanced Compression, Editing & Developer Tools Directory */}
        <div className="pt-8 pb-6 border-t border-slate-800">
          <h4 className="text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-3">
            {strings.directoryHeading}
          </h4>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-400">
            {strings.directoryLinks.map((item) => (
              <a
                key={item.slug}
                href={localizePath(item.slug)}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.slug);
                }}
                className="hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>{strings.bottomRights.replace('{year}', String(new Date().getFullYear()))}</p>
          <div className="flex items-center gap-4">
            <span>{strings.contactLabel}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
