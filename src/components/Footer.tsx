import React from 'react';
import { Layers, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
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

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Navigation
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
                  href="/#how-it-works"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/#how-it-works');
                  }}
                  className="hover:text-white transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="/#faq"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/#faq');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Frequently Asked Questions
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

          {/* Col 4: Tool Formats */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Format Support
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>JPEG / JPG (Quality 10%–100%)</li>
              <li>PNG (Transparency preserved)</li>
              <li>WebP (Modern high-efficiency)</li>
              <li className="pt-2 text-slate-500">
                Processed locally via HTML5 Canvas
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} CompressMyPic. All rights reserved. Free client-side image compression utility.</p>
          <div className="flex items-center gap-4">
            <span>Contact: bilalayyah@gmail.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
