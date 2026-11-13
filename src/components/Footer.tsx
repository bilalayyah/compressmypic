import React from 'react';
import { Layers, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-400 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Col 1: Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <a
              href="/"
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
              Fast, secure, and private browser-native image compression. Optimize JPG, PNG, and WebP images without uploading your data to any external server.
            </p>
            <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>100% Client-Side Privacy</span>
            </div>
          </div>

          {/* Col 2: Image Tools */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Image Tools
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Compress Images
                </a>
              </li>
              <li>
                <a
                  href="/image-resizer"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/image-resizer');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Image Resizer
                </a>
              </li>
              <li>
                <a
                  href="/image-converter"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/image-converter');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Image Converter
                </a>
              </li>
              <li>
                <a
                  href="/rotate-flip-image"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/rotate-flip-image');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Rotate &amp; Flip Image
                </a>
              </li>
              <li>
                <a
                  href="/image-to-pdf"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/image-to-pdf');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Image to PDF
                </a>
              </li>
              <li>
                <a
                  href="/remove-image-metadata"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/remove-image-metadata');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Remove Metadata
                </a>
              </li>
              <li>
                <a
                  href="/remove-background"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/remove-background');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Background Remover
                </a>
              </li>
              <li>
                <a
                  href="/image-upscaler"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/image-upscaler');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Image Upscaler
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Trust */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Trust &amp; Legal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="/privacy"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/privacy');
                  }}
                  className="hover:text-white transition-colors block text-left"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/terms');
                  }}
                  className="hover:text-white transition-colors block text-left"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/about');
                  }}
                  className="hover:text-white transition-colors block text-left"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/contact');
                  }}
                  className="hover:text-white transition-colors block text-left"
                >
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Guides</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="/guides/compress-images-for-whatsapp" onClick={(e) => { e.preventDefault(); onNavigate('/guides/compress-images-for-whatsapp'); }} className="hover:text-white transition-colors block text-left">How to compress images for WhatsApp without losing quality</a></li>
              <li><a href="/guides/jpg-vs-png-vs-webp" onClick={(e) => { e.preventDefault(); onNavigate('/guides/jpg-vs-png-vs-webp'); }} className="hover:text-white transition-colors block text-left">JPG vs PNG vs WebP: Which Format Should You Use?</a></li>
              <li><a href="/guides/reduce-image-size-to-100kb" onClick={(e) => { e.preventDefault(); onNavigate('/guides/reduce-image-size-to-100kb'); }} className="hover:text-white transition-colors block text-left">How to Reduce Image Size to 100KB for Web &amp; Email</a></li>
            </ul>
          </div>
          {/* Col 4: More Tools */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              More Utilities
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a
                  href="/image-metadata-viewer"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/image-metadata-viewer');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Metadata &amp; EXIF Viewer
                </a>
              </li>
              <li>
                <a
                  href="/favicon-generator"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/favicon-generator');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Favicon Generator
                </a>
              </li>
              <li>
                <a
                  href="/image-color-picker"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/image-color-picker');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Image Color Picker
                </a>
              </li>
              <li>
                <a
                  href="/image-dimensions-checker"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/image-dimensions-checker');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Dimensions Checker
                </a>
              </li>
              <li className="pt-2 text-slate-500">
                Processed locally via HTML5 Canvas
              </li>
            </ul>
          </div>
        </div>

        {/* Compact Advanced Compression, Editing & Developer Tools Directory */}
        <div className="pt-8 pb-6 border-t border-slate-800">
          <h4 className="text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-3">
            Advanced Compression, Editing &amp; Developer Tools
          </h4>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-400">
            {[
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
            ].map((item) => (
              <a
                key={item.slug}
                href={item.slug}
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
          <p>© {new Date().getFullYear()} CompressMyPic. All rights reserved. Free client-side image compression utility.</p>
          <div className="flex items-center gap-4">
            <span>Contact: bilalayyah@gmail.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
