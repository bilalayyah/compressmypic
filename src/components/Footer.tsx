import React, { useEffect, useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { isSupportedLang, type SupportedLang } from '../locales/config';
import { ES_ALL_TOOLS_PATH } from '../locales/es/slugs';
import { PT_ALL_TOOLS_PATH } from '../locales/pt/slugs';
import { FR_ALL_TOOLS_PATH } from '../locales/fr/slugs';
import { DE_ALL_TOOLS_PATH } from '../locales/de/slugs';
import { IT_ALL_TOOLS_PATH } from '../locales/it/slugs';
import { ID_ALL_TOOLS_PATH } from '../locales/id/slugs';
import { RU_ALL_TOOLS_PATH } from '../locales/ru/slugs';
import { JA_ALL_TOOLS_PATH } from '../locales/ja/slugs';
import { KO_ALL_TOOLS_PATH } from '../locales/ko/slugs';
import { ZH_ALL_TOOLS_PATH } from '../locales/zh/slugs';
import { VI_ALL_TOOLS_PATH } from '../locales/vi/slugs';

export interface FooterStrings {
  blurb: string;
  privacyNote: string;
  toolsHeading: string;
  legalHeading: string;
  guidesHeading: string;
  blogLabel: string;
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
  blogLabel: 'Blog',
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
  ],
  legalLinks: [
    { slug: '/privacy', label: 'Privacy Policy' },
    { slug: '/terms', label: 'Terms of Service' },
    { slug: '/about', label: 'About Us' },
    { slug: '/contact', label: 'Contact Support' },
    { slug: '/disclaimer', label: 'Disclaimer' },
    { slug: '/cookie-policy', label: 'Cookie Policy' },
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
  /** Localized "All Tools" label for the directory link. When provided
      (App passes activeUi.toolsDirectory.allTools), the FIRST render
      already shows the localized label — required for SSR hydration:
      the old useState('All Tools') + useEffect load rendered English
      server-side and localized client-side, a React #418 text mismatch
      on every non-English page. When omitted, the effect below loads it. */
  directoryLabel?: string;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  strings: stringsProp,
  localizePath = (slug: string) => slug,
  directoryLabel: directoryLabelProp,
}) => {
  const strings: FooterStrings = { ...DEFAULT_FOOTER_STRINGS, ...stringsProp };

  // Active language, derived from the localized About URL (Footer gets no
  // `lang` prop, but localizePath maps '/about' -> e.g. '/de/ueber-uns').
  // Used for the localized tools-directory link (SEO audit #29).
  const detectedLang: SupportedLang = (() => {
    const m = /^\/([a-z]{2})\//.exec(localizePath('/about'));
    return m && isSupportedLang(m[1]) ? m[1] : 'en';
  })();
  const DIRECTORY_PATH_BY_LANG: Record<Exclude<SupportedLang, 'en'>, string> = {
    es: ES_ALL_TOOLS_PATH,
    pt: PT_ALL_TOOLS_PATH,
    fr: FR_ALL_TOOLS_PATH,
    de: DE_ALL_TOOLS_PATH,
    it: IT_ALL_TOOLS_PATH,
    id: ID_ALL_TOOLS_PATH,
    ru: RU_ALL_TOOLS_PATH,
    ja: JA_ALL_TOOLS_PATH,
    ko: KO_ALL_TOOLS_PATH,
    zh: ZH_ALL_TOOLS_PATH,
    vi: VI_ALL_TOOLS_PATH,
  };
  // Localized "All Tools" label for the directory link, loaded from the
  // active locale's own dictionary (toolsDirectory.allTools) so no string
  // is invented here. Explicit literal dynamic imports (like App's): the
  // locale ui modules are code-split, and a static import would pull all
  // 10 dictionaries into the main bundle.
  //
  // SSR (2026-11-19): when App passes directoryLabel (from the already
  // loaded activeUi), it is the initial state — the first render already
  // shows the localized label, matching the SSR HTML. The effect below
  // only runs the dynamic import when no prop was provided.
  const UI_LABEL_IMPORTERS: Record<Exclude<SupportedLang, 'en'>, () => Promise<string | undefined>> = {
    es: () => import('../locales/es/ui').then((m) => m.ES.toolsDirectory.allTools),
    pt: () => import('../locales/pt/ui').then((m) => m.PT.toolsDirectory.allTools),
    fr: () => import('../locales/fr/ui').then((m) => m.FR.toolsDirectory.allTools),
    de: () => import('../locales/de/ui').then((m) => m.DE.toolsDirectory.allTools),
    it: () => import('../locales/it/ui').then((m) => m.IT.toolsDirectory.allTools),
    id: () => import('../locales/id/ui').then((m) => m.ID.toolsDirectory.allTools),
    ru: () => import('../locales/ru/ui').then((m) => m.RU.toolsDirectory.allTools),
    ja: () => import('../locales/ja/ui').then((m) => m.JA.toolsDirectory.allTools),
    ko: () => import('../locales/ko/ui').then((m) => m.KO.toolsDirectory.allTools),
    zh: () => import('../locales/zh/ui').then((m) => m.ZH.toolsDirectory.allTools),
    vi: () => import('../locales/vi/ui').then((m) => m.VI.toolsDirectory.allTools),
  };
  const [directoryLabel, setDirectoryLabel] = useState(directoryLabelProp ?? 'All Tools');
  useEffect(() => {
    if (directoryLabelProp) {
      setDirectoryLabel(directoryLabelProp);
      return;
    }
    if (detectedLang === 'en') {
      setDirectoryLabel('All Tools');
      return;
    }
    let cancelled = false;
    UI_LABEL_IMPORTERS[detectedLang]()
      .then((label) => {
        if (!cancelled && label) setDirectoryLabel(label);
      })
      .catch(() => {
        // Keep the English fallback label.
      });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detectedLang]);
  const directoryHref =
    detectedLang === 'en' ? '/all-tools' : DIRECTORY_PATH_BY_LANG[detectedLang];

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
                Compress<span className="text-[#dc2626] dark:text-[#f87171]">My</span>Pic
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
            <h3 className="text-xs font-bold text-[var(--ink-navy)] uppercase tracking-wider mb-3">
              {strings.toolsHeading}
            </h3>
            <ul className="space-y-2 text-xs">
              {strings.toolsLinks.map((link) => (
                <li key={link.slug}>
                  <a
                    href={localizePath(link.slug)}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(link.slug);
                    }}
                    className="inline-flex items-center min-h-6 text-[var(--ink-2)] hover:text-[#dc2626] dark:hover:text-[#fca5a5] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Legal & Trust */}
          <div>
            <h3 className="text-xs font-bold text-[var(--ink-navy)] uppercase tracking-wider mb-3">
              {strings.legalHeading}
            </h3>
            <ul className="space-y-2 text-xs">
              {strings.legalLinks.map((link) => (
                <li key={link.slug}>
                  <a
                    href={localizePath(link.slug)}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(link.slug);
                    }}
                    className="flex items-center min-h-6 text-[var(--ink-2)] hover:text-[#dc2626] dark:hover:text-[#fca5a5] transition-colors text-left"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h3 className="text-xs font-bold text-[var(--ink-navy)] uppercase tracking-wider mb-3">{strings.guidesHeading}</h3>
            <ul className="space-y-2 text-xs text-[var(--ink-2)]">
              <li>
                <a
                  href={localizePath('/blog')}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/blog');
                  }}
                  className="flex items-center min-h-6 text-[var(--ink-2)] hover:text-[#dc2626] dark:hover:text-[#fca5a5] transition-colors text-left font-semibold"
                >
                  {strings.blogLabel}
                </a>
              </li>
              {strings.guidesLinks.map((link) => (
                <li key={link.slug}>
                  <a
                    href={localizePath(link.slug)}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(link.slug);
                    }}
                    className="flex items-center min-h-6 text-[var(--ink-2)] hover:text-[#dc2626] dark:hover:text-[#fca5a5] transition-colors text-left"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: More Tools */}
          <div>
            <h3 className="text-xs font-bold text-[var(--ink-navy)] uppercase tracking-wider mb-3">
              {strings.moreHeading}
            </h3>
            <ul className="space-y-2 text-xs text-[var(--ink-2)]">
              {strings.moreLinks.map((link) => (
                <li key={link.slug}>
                  <a
                    href={localizePath(link.slug)}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(link.slug);
                    }}
                    className="inline-flex items-center min-h-6 text-[var(--ink-2)] hover:text-[#dc2626] dark:hover:text-[#fca5a5] transition-colors"
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
          <h3 className="text-xs font-bold text-[var(--ink-navy)] uppercase tracking-wider mb-3">
            {strings.directoryHeading}
          </h3>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-[var(--ink-2)]">
            {/* Localized tools-directory link (SEO audit #29): the non-EN
                directory pages had no inbound links. */}
            <a
              href={directoryHref}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(directoryHref);
              }}
              className="inline-flex items-center min-h-6 font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:underline transition-colors"
            >
              {directoryLabel}
            </a>
            {strings.directoryLinks.map((item) => (
              <a
                key={item.slug}
                href={localizePath(item.slug)}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.slug);
                }}
                className="inline-flex items-center min-h-6 text-[var(--ink-2)] hover:text-[#dc2626] dark:hover:text-[#fca5a5] transition-colors"
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
                <span key={index} className="font-script text-base pr-1">
                  {part}
                </span>
              ) : (
                <span key={index}>{part}</span>
              ),
            )}
          </p>
          <div className="flex items-center gap-4">
            <a href="mailto:bilalayyah@gmail.com">{strings.contactLabel}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
