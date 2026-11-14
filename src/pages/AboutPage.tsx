import React, { useEffect } from 'react';
import { ArrowLeft, Shield, Cpu, Lock, CheckCircle2, Users, Layers } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'About CompressMyPic – Free Online Image Compressor';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'About CompressMyPic – a free online image compressor for JPG, PNG and WebP. Compress images online free, with no signup, no watermark and no server upload.');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-6">
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7c3aed] dark:text-[#c4b5fd] hover:text-[#6d28d9] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Image Compressor</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
            About CompressMyPic
          </h1>
          <p className="mt-3 text-lg font-medium text-[var(--ink-2)] leading-relaxed">
            CompressMyPic is a free, private image compressor. Compress JPG, PNG and WebP images right in your browser — fast, secure, and without uploading your files anywhere.
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#7c3aed] dark:text-[#a78bfa]" />
              <span>What Is CompressMyPic?</span>
            </h2>
            <p>
              CompressMyPic is a free online image compressor and image optimizer that helps you reduce image size without losing quality. It is a photo compressor and photo size reducer for the formats people use every day: JPG, PNG and WebP. Use it to compress JPG to 100KB, compress PNG online free, compress WebP images, or reduce a photo file size before sharing it on WhatsApp, Instagram, Facebook or email.
            </p>
            <p>
              Traditional image compression websites upload your sensitive personal photos or company graphics to a server owned by someone else. That practice raises legitimate concerns, which is exactly why we built CompressMyPic the opposite way — as a tool that does everything on your own device.
            </p>
            <p>
              When you select or drag and drop an image, your browser allocates a temporary memory buffer, draws the picture onto an HTML Canvas element, applies the compression algorithm, and then exports the new file — all within your own browser tab. No networking infrastructure, databases, or cloud servers are involved in the process of compressing your images.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#7c3aed] dark:text-[#a78bfa]" />
              <span>Supported Formats: JPG, PNG and WebP</span>
            </h2>
            <p>
              As a JPG compressor, CompressMyPic lets you compress JPG online free and reduce JPEG file size while keeping your photos looking sharp — try the Balanced preset or lower the quality slider and watch the live before-and-after size to reach targets such as 100KB or 200KB. As a PNG compressor, it lets you compress PNG online free while keeping transparency for logos and graphics. And when you compress WebP images, you get the smallest files of all: WebP is typically 25-35% smaller than JPEG at similar quality, which makes it the best choice to optimize images for web pages.
            </p>
            <p>
              You can keep the original format of each image, or convert between JPG, PNG and WebP. The quality slider (10% to 100%), the Low, Balanced and High presets, and the live before-and-after size display give you full control over the balance between file size and image quality — without ever claiming an exact target-KB input box that the tool does not have.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#16a34a] dark:text-[#4ade80]" />
              <span>Our Core Principles</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-2xl border pastel-card-0 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">Absolute Privacy</div>
                <p className="text-xs text-[var(--ink-2)]">
                  Zero files ever touch an external server or database. Your photos and sensitive graphics stay strictly on your local device. Because compression happens client-side, your work is never seen by anyone else.
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-2 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">Simple and Free</div>
                <p className="text-xs text-[var(--ink-2)]">
                  No software installation, no paid plans, no hidden fees, no account creation, no email verification, and no trial limits. Compress image online free — it is genuinely free, with no signup and no watermark on your compressed images.
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-6 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">Quality That You Control</div>
                <p className="text-xs text-[var(--ink-2)]">
                  We support fine-grained control: drag the Quality slider in real time, select any of the Low, Balanced, or High presets, choose the output file format, and compare every image side-by-side to spot differences instantly. Reduce image size without losing quality, on your terms.
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-9 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">Bulk Image Compressor</div>
                <p className="text-xs text-[var(--ink-2)]">
                  Compress multiple images at once with the same settings and download them all together with the Download All (ZIP) button — a batch image compressor for photo libraries, product catalogues and website image folders.
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-10 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">Automatic Safety Checks</div>
                <p className="text-xs text-[var(--ink-2)]">
                  The compressor detects transparency in your images. If you select JPEG output for a transparent PNG, we show a warning because JPEG does not support transparency — so you never lose your alpha channel by accident.
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-12 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">Fast Performance</div>
                <p className="text-xs text-[var(--ink-2)]">
                  Because all processing happens locally on your device there is no waiting for files to go up and come down from a server. You can compress photos quickly, even large files up to 20 MB per image, on desktop or mobile.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Users className="w-5 h-5 text-[#7c3aed] dark:text-[#a78bfa]" />
              <span>Who Is CompressMyPic For?</span>
            </h2>
            <p>
              CompressMyPic is for anyone who needs smaller images: bloggers and website owners who want to optimize images for web and reduce image size for website pages; photographers who need to reduce photo file size before sharing or delivering proofs; online sellers who compress a photo for a website or store listing; students and office workers who compress images for an email attachment; and anyone who wants to compress an image for WhatsApp, Instagram or Facebook so it sends faster and uses less mobile data.
            </p>
            <p>
              It works on desktop and mobile browsers, needs no installation, and never asks you to sign up — just open the site, upload your images, and download the smaller files.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#16a34a] dark:text-[#4ade80]" />
              <span>Privacy &amp; Security</span>
            </h2>
            <p>
              At CompressMyPic, we believe privacy is a critical right, not an optional feature. In modern times, many websites collect data by default, even an image compression tool. We take a privacy-first approach by relying on modern browser technology to process your media locally on your computer.
            </p>
            <p>
              Your files remain in your browser memory and are immediately cleared when you close the tab or refresh the page. Because no image processing happens on remote servers, we cannot collect image data, even if we wanted to. That is the design and the promise of the tool.
            </p>
            <p>
              To learn exactly how we handle privacy, please visit our{' '}
              <button
                type="button"
                onClick={() => onNavigate('/privacy')}
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold cursor-pointer"
              >
                Privacy Policy
              </button>
              {' '}page.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#16a34a] dark:text-[#4ade80]" />
              <span>Our Mission</span>
            </h2>
            <p>
              We believe the best tools are the simplest, fastest, and most transparent ones. Our mission is to provide a fast, reliable, and completely free image compressor to everyone — with no hidden trade-offs, no ads that track you, no server uploads, and no compromises on your privacy. Whether you compress a single JPG or a whole batch of WebP images, the tool should just work.
            </p>
            <p>
              Have a question, an idea, or found something we can improve? We would love to hear from you. You can reach us directly through the site.
            </p>
          </section>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/')}
              className="flex-1 px-5 py-2.5 btn-purple-pill text-sm font-semibold shadow-sm cursor-pointer"
            >
              Start Compressing Images
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/contact')}
              className="flex-1 px-5 py-2.5 rounded-full bg-[var(--surface)] text-[var(--ink-navy)] text-sm font-semibold border border-[var(--line-strong)] shadow-xs hover:bg-[var(--surface-2)] transition-colors cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
