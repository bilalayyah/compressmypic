import React from 'react';
import { HardDrive, Globe, Share2, Gauge, Wifi, Check, Sparkles } from 'lucide-react';

export const EducationalContent: React.FC = () => {
  return (
    <section id="how-it-works" className="py-14 sm:py-20 border-t border-slate-200 bg-slate-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-16">
        {/* Section 1: What is Image Compression */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            What Is Image Compression?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Image compression is the process of reducing the file size of a graphics file in bytes without degrading the visual quality of the picture beyond an acceptable threshold. When a camera or smartphone captures a photograph, it records vast amounts of granular color data, metadata (such as shutter speed and camera model), and minute pixel variations that human vision cannot readily distinguish.
          </p>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            By analyzing these patterns, image compression algorithms restructure or selectively discard redundant information. The resulting file requires significantly less storage capacity and transfers over the internet much faster, all while preserving the visual clarity required for web display, email attachments, and document publishing.
          </p>
        </div>

        {/* Section 2: Why Should You Compress Images */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Why Should You Compress Images?
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Unoptimized images represent one of the single largest bottlenecks for website performance, storage overhead, and mobile data consumption. Compressing your images provides immediate tangible benefits:
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Faster Website Loading</h3>
              <p className="mt-1.5 text-sm text-slate-600 leading-normal">
                Pages with compressed images render up to 70% faster, improving your Google Core Web Vitals (Largest Contentful Paint) and boosting search engine rankings.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                <HardDrive className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Reduced Storage Overhead</h3>
              <p className="mt-1.5 text-sm text-slate-600 leading-normal">
                Cut down cloud hosting, server disk usage, and backup storage costs by storing streamlined image files that require a fraction of original disk space.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
              <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
                <Share2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Easier Image Sharing</h3>
              <p className="mt-1.5 text-sm text-slate-600 leading-normal">
                Never get stopped by strict email attachment limits or messaging upload quotas. Compressed photos attach swiftly without hitting size ceiling barriers.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
              <div className="w-9 h-9 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center mb-3">
                <Wifi className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Lower Bandwidth Consumption</h3>
              <p className="mt-1.5 text-sm text-slate-600 leading-normal">
                Visitors on mobile networks or capped data plans load your media seamlessly without burning through cellular allowances.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: How to Compress Images Online Step-by-Step */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            How to Compress Images Online: Step-by-Step Guide
          </h2>
          <p className="mt-3 text-base text-slate-600">
            CompressMyPic makes image optimization straightforward and safe right inside your browser window:
          </p>

          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-4 p-4 bg-white border border-slate-200 rounded-xl">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center shrink-0">
                1
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Upload or Drag Your Files</h3>
                <p className="mt-1 text-sm text-slate-600 leading-normal">
                  Drop JPG, PNG, or WebP images into the designated drop area or click "Browse Files". You can select multiple images simultaneously or even paste them with Ctrl+V.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white border border-slate-200 rounded-xl">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center shrink-0">
                2
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Select Compression Preset or Quality</h3>
                <p className="mt-1 text-sm text-slate-600 leading-normal">
                  Choose from Low, Balanced, or High compression presets, or slide the Custom Quality bar to set your exact target from 10% to 100%. Choose whether to keep original format or convert to modern WebP.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white border border-slate-200 rounded-xl">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center shrink-0">
                3
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Inspect Before &amp; After Comparison</h3>
                <p className="mt-1 text-sm text-slate-600 leading-normal">
                  Click the "Compare" button on any result card to open the interactive split-screen slider. Inspect pixel sharpness side by side to ensure your image looks crisp.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white border border-slate-200 rounded-xl">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center shrink-0">
                4
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Download Optimized Files</h3>
                <p className="mt-1 text-sm text-slate-600 leading-normal">
                  Download individual files with one click, or click "Download All (ZIP)" to retrieve your entire batch packaged neatly together.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Supported Image Formats Compared */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Supported Image Formats: JPG vs PNG vs WebP
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Selecting the right image format for your specific media type is fundamental to achieving high visual fidelity at minimal file weights:
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse border border-slate-200 bg-white rounded-xl overflow-hidden">
              <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Format</th>
                  <th className="py-3 px-4">Compression Type</th>
                  <th className="py-3 px-4">Alpha Transparency</th>
                  <th className="py-3 px-4">Best Used For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">JPEG / JPG</td>
                  <td className="py-3 px-4">Lossy</td>
                  <td className="py-3 px-4 text-rose-600 font-medium">No (Solid background)</td>
                  <td className="py-3 px-4">Photographs, complex gradients, banners with rich natural scenery.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">PNG</td>
                  <td className="py-3 px-4">Lossless</td>
                  <td className="py-3 px-4 text-emerald-600 font-medium">Yes (Full alpha)</td>
                  <td className="py-3 px-4">Logos, icons, screenshots with text, illustrations needing transparent cutout areas.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">WebP</td>
                  <td className="py-3 px-4">Both Lossy &amp; Lossless</td>
                  <td className="py-3 px-4 text-emerald-600 font-medium">Yes (Full alpha)</td>
                  <td className="py-3 px-4">Modern web applications, e-commerce stores, responsive blog banners (25–35% smaller than JPG).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 5: Lossy vs Lossless Compression */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Lossy vs Lossless Compression Explained
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Understanding the distinction between lossy and lossless algorithms empowers you to make informed decisions for your project requirements:
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
              <h3 className="text-base font-bold text-slate-900">Lossy Compression</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Lossy algorithms permanently remove non-essential pixel nuances that the human eye is least sensitive to. By tolerating a slight, nearly invisible loss in absolute numerical data, files can shrink by <strong>50% to 80%</strong>. This is ideal for photos, blog illustrations, and social media imagery where microscopic pixel parity is unnecessary.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
              <h3 className="text-base font-bold text-slate-900">Lossless Compression</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Lossless algorithms compress data similar to a ZIP archive: every original pixel value is preserved completely. Unnecessary embedded color profiles, camera metadata, and duplicate coding structures are stripped. Reductions are typically around <strong>10% to 30%</strong>, making this suitable for medical imagery, archival photography, technical blueprints, and vector-rendered logos.
              </p>
            </div>
          </div>
        </div>

        {/* Section 6: How Much Can You Reduce Image Size? */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            How Much Can You Reduce Image Size?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Compression savings are never a static, one-size-fits-all number. The actual reduction depends on three pivotal variables:
          </p>
          <ul className="mt-4 space-y-2 text-base text-slate-600">
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <span><strong>Original Compression State:</strong> An uncompressed raw export from a digital camera can often be reduced by 80% or more, whereas an image previously exported with aggressive web compression might only yield 5% to 15% further reduction.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <span><strong>Image Visual Complexity:</strong> Simple graphics with flat background colors or repeating patterns compress substantially more efficiently than photographs featuring intricate textures such as foliage, water ripples, or grain.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <span><strong>Selected Target Quality:</strong> Selecting a balanced 70% quality yields dramatic file reductions with negligible visual difference. Dropping to 50% yields maximum byte savings for fast previews, while 85% is suited for portfolio photography.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
