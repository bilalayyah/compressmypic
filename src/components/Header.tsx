import React, { useState } from 'react';
import { Layers, Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';

interface HeaderProps {
  onNavigate: (path: string) => void;
  onScrollToTool: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, onScrollToTool }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [guidesOpen, setGuidesOpen] = useState(false);

  const handleNav = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setGuidesOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleNav('/');
          }}
          aria-label="CompressMyPic – Free online image compressor logo" className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 group"
        >
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-sm group-hover:bg-blue-700 transition-colors">
            <Layers className="w-5 h-5" />
          </div>
          <span>Compress<span className="text-blue-600">MyPic</span></span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNav('/');
            }}
            className="hover:text-blue-600 transition-colors whitespace-nowrap shrink-0"
          >
            Home
          </a>
          <a
            href="/#how-it-works"
            onClick={(e) => {
              e.preventDefault();
              handleNav('/#how-it-works');
            }}
            className="hover:text-blue-600 transition-colors whitespace-nowrap shrink-0"
          >
            How It Works
          </a>
          <a
            href="/#faq"
            onClick={(e) => {
              e.preventDefault();
              handleNav('/#faq');
            }}
            className="hover:text-blue-600 transition-colors whitespace-nowrap shrink-0"
          >
            FAQ
          </a>
          <a
            href="/about"
            onClick={(e) => {
              e.preventDefault();
              handleNav('/about');
            }}
            className="hover:text-blue-600 transition-colors whitespace-nowrap shrink-0"
          >
            About
          </a>
          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              handleNav('/contact');
            }}
            className="hover:text-blue-600 transition-colors whitespace-nowrap shrink-0"
          >
            Contact
          </a>
                  <div className="relative">
            <button type="button" onClick={() => setGuidesOpen(!guidesOpen)} className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors" aria-expanded={guidesOpen} aria-haspopup="true">
              Guides
              <ChevronDown className="w-4 h-4" />
            </button>
            {guidesOpen && (
              <div className="absolute left-0 top-full mt-2 w-72 rounded-xl border border-slate-200 bg-white py-2 shadow-lg">
                <a href="/guides/compress-images-for-whatsapp" onClick={(e) => { e.preventDefault(); handleNav('/guides/compress-images-for-whatsapp'); }} className="block px-4 py-2 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600">How to compress images for WhatsApp without losing quality</a>
                <a href="/guides/jpg-vs-png-vs-webp" onClick={(e) => { e.preventDefault(); handleNav('/guides/jpg-vs-png-vs-webp'); }} className="block px-4 py-2 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600">JPG vs PNG vs WebP: Which Format Should You Use?</a>
                <a href="/guides/reduce-image-size-to-100kb" onClick={(e) => { e.preventDefault(); handleNav('/guides/reduce-image-size-to-100kb'); }} className="block px-4 py-2 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600">How to Reduce Image Size to 100KB for Web &amp; Email</a>
              </div>
            )}
          </div>
        </nav>

        {/* Zone 3: Primary Action Button */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onScrollToTool}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Compress Images</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNav('/');
            }}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md"
          >
            Home
          </a>
          <a
            href="/#how-it-works"
            onClick={(e) => {
              e.preventDefault();
              handleNav('/#how-it-works');
            }}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md"
          >
            How It Works
          </a>
          <a
            href="/#faq"
            onClick={(e) => {
              e.preventDefault();
              handleNav('/#faq');
            }}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md"
          >
            FAQ
          </a>
          <a
            href="/about"
            onClick={(e) => {
              e.preventDefault();
              handleNav('/about');
            }}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md"
          >
            About Us
          </a>
          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              handleNav('/contact');
            }}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md"
          >
            Contact Us
          </a>
          <div className="pt-3 border-t border-slate-100">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Guides</p>
            <div className="mt-3 flex flex-col gap-4">
              <a href="/guides/compress-images-for-whatsapp" onClick={(e) => { e.preventDefault(); handleNav('/guides/compress-images-for-whatsapp'); }} className="hover:text-blue-600 transition-colors">How to compress images for WhatsApp without losing quality</a>
              <a href="/guides/jpg-vs-png-vs-webp" onClick={(e) => { e.preventDefault(); handleNav('/guides/jpg-vs-png-vs-webp'); }} className="hover:text-blue-600 transition-colors">JPG vs PNG vs WebP: Which Format Should You Use?</a>
              <a href="/guides/reduce-image-size-to-100kb" onClick={(e) => { e.preventDefault(); handleNav('/guides/reduce-image-size-to-100kb'); }} className="hover:text-blue-600 transition-colors">How to Reduce Image Size to 100KB for Web &amp; Email</a>
            </div>
          </div>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
    setGuidesOpen(false);
                onScrollToTool();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-sm"
            >
              <span>Compress Images</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
