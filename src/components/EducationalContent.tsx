import React from 'react';
import { HardDrive, Globe, Share2, Gauge, Wifi, Check, Sparkles, Zap, Upload, SlidersHorizontal, Download, Image as ImageIcon, FileImage } from 'lucide-react';

const howItWorksSteps = [
  {
    icon: Upload,
    step: 'Step 1',
    title: 'Upload your images',
    description: 'Drag and drop your JPG, PNG, WebP or HEIC images into the upload area, click Browse Files to select them, or paste an image with Ctrl+V. You can upload multiple images at once, up to 20 MB per image.',
  },
  {
    icon: SlidersHorizontal,
    step: 'Step 2',
    title: 'Adjust quality and choose your format',
    description: 'Choose a Low, Balanced or High preset, or move the quality slider from 10% to 100%, and choose to keep the original format or convert to JPG, PNG or WebP. Watch the live before-and-after file size for every image and use the interactive comparison slider to check the visual result.',
  },
  {
    icon: Download,
    step: 'Step 3',
    title: 'Download your compressed images',
    description: 'Download each compressed image individually, or click Download All (ZIP) to download the whole batch in one file. Your images are compressed right in your browser, so there is nothing to wait for and nothing to upload.',
  },
];

const features = [
  {
    title: 'Compress JPG, PNG, WebP & HEIC',
    description: 'A single image compressor for the formats you actually use. Compress JPG and JPEG photos, compress PNG graphics while keeping transparency, and compress WebP images for the smallest files.',
  },
  {
    title: 'Reduce Image Size Without Losing Quality',
    description: 'Smart compression removes redundant data and metadata while keeping the picture looking virtually identical to the original. The Balanced preset is the best starting point, and the before-and-after comparison lets you verify the quality yourself.',
  },
  {
    title: 'Bulk Image Compressor – Compress Multiple Images at Once',
    description: 'This bulk image compressor and batch image compressor lets you compress multiple images at once with the same settings, then download them all together with the Download All (ZIP) button instead of saving files one by one.',
  },
  {
    title: 'Compress Images for WhatsApp, Instagram & Facebook',
    description: 'Shrink photos so they send fast on WhatsApp and upload smoothly to Instagram and Facebook. Smaller files use less mobile data and are far less likely to be rejected for being too large.',
  },
  {
    title: 'Reduce Image Size to 20KB, 50KB, 100KB or 200KB',
    description: 'Lower the quality slider step by step and watch the live before-and-after size until you reach your target — 200KB, 100KB, 50KB or even 20KB. Switching the output format to WebP usually gets you there with less visible quality loss.',
  },
];

const useCases = [
  {
    title: 'Optimize images for web',
    description: 'Optimize images for web pages to load faster, improve Core Web Vitals and rank better. Smaller images mean faster pages, happier visitors and lower hosting bandwidth.',
  },
  {
    title: 'Compress images for email attachment',
    description: 'Compress images for an email attachment so your photos fit inside attachment size limits. Attach the smaller downloads instead of the large originals and your emails will send without bouncing.',
  },
  {
    title: 'Compress photo for website',
    description: 'Compress a photo for your website, blog, portfolio or online store before you upload it. Product photos, banners and blog images stay sharp while taking up far less space on your server.',
  },
  {
    title: 'Reduce photo file size',
    description: 'Reduce photo file size from a phone or camera before sharing, backing up or printing. Large photos become quick to send, easy to store and simple to manage.',
  },
];

export interface EducationalSectionStrings {
  heading: string;
  body: string;
  bullets?: string[];
}

interface EducationalContentProps {
  sections?: EducationalSectionStrings[];
}

/** Split a "Title: description" bullet on the FIRST ': '. */
function splitBullet(bullet: string): { title: string; description: string } {
  const idx = bullet.indexOf(': ');
  if (idx === -1) return { title: bullet, description: '' };
  return { title: bullet.slice(0, idx), description: bullet.slice(idx + 2) };
}

/** Render a '\n\n'-separated body as <p> paragraphs. Empty bodies render nothing. */
function renderBodyParagraphs(body: string, firstClassName: string, restClassName: string) {
  return body
    .split('\n\n')
    .map((p) => p.trim())
    .filter((p) => p.length > 0)
    .map((p, i) => (
      <p key={i} className={i === 0 ? firstClassName : restClassName}>
        {p}
      </p>
    ));
}

export const EducationalContent: React.FC<EducationalContentProps> = ({ sections }) => {
  if (sections) {
    const s = sections;
    const bodyClass = 'mt-3 text-base text-slate-600';
    const introFirstClass = 'mt-4 text-base sm:text-lg text-slate-600 leading-relaxed';
    const introRestClass = 'mt-3 text-base sm:text-lg text-slate-600 leading-relaxed';
    const benefitIcons = [
      { Icon: Globe, bg: 'bg-blue-50 text-blue-600' },
      { Icon: HardDrive, bg: 'bg-emerald-50 text-emerald-600' },
      { Icon: Share2, bg: 'bg-indigo-50 text-indigo-600' },
      { Icon: Wifi, bg: 'bg-cyan-50 text-cyan-600' },
    ];
    const stepIcons = [Upload, SlidersHorizontal, Download];
    const formatIcons = [
      { Icon: ImageIcon, bg: 'bg-amber-50 text-amber-600' },
      { Icon: FileImage, bg: 'bg-violet-50 text-violet-600' },
      { Icon: Sparkles, bg: 'bg-blue-50 text-blue-600' },
    ];
    const tipIcons = [Check, Check, Check, Gauge, Check];
    return (
      <section id="how-it-works" className="py-14 sm:py-20 border-t border-slate-200 bg-slate-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-16">
          {/* Section 1: What is Image Compression */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {s[0]?.heading}
            </h2>
            {renderBodyParagraphs(s[0]?.body ?? '', introFirstClass, introRestClass)}
          </div>

          {/* Section 2: Why Should You Compress Images */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {s[1]?.heading}
            </h2>
            {renderBodyParagraphs(s[1]?.body ?? '', bodyClass, bodyClass)}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {(s[1]?.bullets ?? []).map((bullet, i) => {
                const { title, description } = splitBullet(bullet);
                const { Icon, bg } = benefitIcons[i] ?? benefitIcons[0];
                return (
                  <div key={i} className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
                    <div className={`w-9 h-9 rounded-lg ${bg} flex items-center justify-center mb-3`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{title}</h3>
                    <p className="mt-1.5 text-sm text-slate-600 leading-normal">{description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 3: How It Works */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">{s[2]?.heading}</h2>
            {renderBodyParagraphs(s[2]?.body ?? '', bodyClass, bodyClass)}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {(s[2]?.bullets ?? []).map((bullet, i) => {
                const { title, description } = splitBullet(bullet);
                const Icon = stepIcons[i] ?? Upload;
                return (
                  <div key={i} className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="mt-1 text-base font-bold text-slate-900">{title}</h3>
                    <p className="mt-1.5 text-sm text-slate-600 leading-normal">{description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 4: Features */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {s[3]?.heading}
            </h2>
            {renderBodyParagraphs(s[3]?.body ?? '', bodyClass, bodyClass)}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {(s[3]?.bullets ?? []).map((bullet, i) => {
                const { title, description } = splitBullet(bullet);
                return (
                  <div key={i} className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
                    <h3 className="text-base font-bold text-slate-900">{title}</h3>
                    <p className="mt-1.5 text-sm text-slate-600 leading-normal">{description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 5: Image Format Guide */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {s[4]?.heading}
            </h2>
            {renderBodyParagraphs(s[4]?.body ?? '', bodyClass, bodyClass)}
            <div className="mt-8 space-y-5">
              {(s[4]?.bullets ?? []).map((bullet, i) => {
                const { title, description } = splitBullet(bullet);
                const { Icon, bg } = formatIcons[i] ?? formatIcons[0];
                return (
                  <div key={i} className="flex gap-4 bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
                    <div className={`w-10 h-10 flex-shrink-0 rounded-lg ${bg} flex items-center justify-center`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900">{title}</h3>
                      <p className="mt-1.5 text-sm text-slate-600 leading-normal">{description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 6: Use Cases */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {s[5]?.heading}
            </h2>
            {renderBodyParagraphs(s[5]?.body ?? '', bodyClass, bodyClass)}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {(s[5]?.bullets ?? []).map((bullet, i) => {
                const { title, description } = splitBullet(bullet);
                return (
                  <div key={i} className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
                    <h3 className="text-base font-bold text-slate-900">{title}</h3>
                    <p className="mt-1.5 text-sm text-slate-600 leading-normal">{description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 7: Why Image Size Matters */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {s[6]?.heading}
            </h2>
            {renderBodyParagraphs(s[6]?.body ?? '', bodyClass, bodyClass)}
          </div>

          {/* Section 8: Optimization Tips */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-600" />
              {s[7]?.heading}
            </h2>
            <ul className="mt-3 space-y-3">
              {(s[7]?.bullets ?? []).map((bullet, i) => {
                const { title, description } = splitBullet(bullet);
                const Icon = tipIcons[i] ?? Check;
                return (
                  <li key={i} className="flex gap-3 text-sm text-slate-600 leading-relaxed">
                    <Icon className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span><strong className="text-slate-900">{title}:</strong> {description}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section id="how-it-works" className="py-14 sm:py-20 border-t border-slate-200 bg-slate-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-16">
        {/* Section 1: What is Image Compression */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            What Is Image Compression?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Image compression is the process of reducing the file size of a graphics file in bytes without degrading the visual quality of the picture beyond an acceptable threshold. When a camera or smartphone saves a photo, it stores a huge amount of data — much of which the human eye cannot easily distinguish when removed or simplified. CompressMyPic is a free online image optimizer and image size reducer that works as a photo compressor and photo size reducer for JPG, PNG and WebP files.
          </p>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            By analyzing these patterns, image compression algorithms restructure or selectively discard redundant information. The resulting file requires significantly less storage capacity and transfers much faster across the internet. This guide shows you how to compress image without losing quality, using the quality slider, presets and format choice built into CompressMyPic.
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
                Pages with compressed images render up to 70% faster, improving your Google Core Web Vitals (Largest Contentful Paint) and boosting search engine rankings. When you reduce image size for website pages, visitors stay longer and bounce less.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                <HardDrive className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Reduced Storage Overhead</h3>
              <p className="mt-1.5 text-sm text-slate-600 leading-normal">
                Cut down cloud hosting, server disk usage, and backup storage costs by storing streamlined image files instead of bloated originals.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
              <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
                <Share2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Easier Image Sharing</h3>
              <p className="mt-1.5 text-sm text-slate-600 leading-normal">
                Never get stopped by strict email attachment limits or messaging upload quotas. Compressed photos attach and send instantly, even on slow mobile connections or limited data plans.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
              <div className="w-9 h-9 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center mb-3">
                <Wifi className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Reduced Bandwidth Consumption</h3>
              <p className="mt-1.5 text-sm text-slate-600 leading-normal">
                Save your users money on mobile data plans and prevent visitors from abandoning your site. Smaller files mean faster downloads — especially on slower mobile connections.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: How It Works */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">How It Works</h2>
          <p className="mt-3 text-base text-slate-600">
            Compressing your photos takes seconds — no account, no software, no upload. Here is how to compress image without losing quality in three simple steps.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {howItWorksSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-wide text-blue-600">{step.step}</p>
                  <h3 className="mt-1 text-base font-bold text-slate-900">{step.title}</h3>
                  <p className="mt-1.5 text-sm text-slate-600 leading-normal">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 4: Features */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Why Use This Free Image Compressor?
          </h2>
          <p className="mt-3 text-base text-slate-600">
            CompressMyPic is a free image compressor with no signup and no watermark — built for everyday photos, website images and social media uploads.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
                <h3 className="text-base font-bold text-slate-900">{feature.title}</h3>
                <p className="mt-1.5 text-sm text-slate-600 leading-normal">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 5: Image Format Guide */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Compress JPG, PNG and WebP: Which Format Should You Choose?
          </h2>
          <p className="mt-3 text-base text-slate-600">
            JPG, PNG, and WebP each serve a different purpose. Understanding their strengths helps you make the best choice for your specific project.
          </p>
          <div className="mt-8 space-y-5">
            <div className="flex gap-4 bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
              <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                <ImageIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">JPG Compressor — Compress JPG Online Free</h3>
                <p className="mt-1.5 text-sm text-slate-600 leading-normal">
                  Best for photographs on your website, blog, or portfolio. Compress JPG online free and compress JPEG to 100KB by lowering the quality slider while watching the live size. JPEG compression is lossy — it permanently removes some visual data that the human eye struggles to perceive. As a result, you can shrink a photo from megabytes to kilobytes with virtually no visible quality loss.
                </p>
              </div>
            </div>
            <div className="flex gap-4 bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
              <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center">
                <FileImage className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">PNG Compressor — Compress PNG Online Free</h3>
                <p className="mt-1.5 text-sm text-slate-600 leading-normal">
                  Best for graphics, screenshots, logos, and images that require transparency, such as logos, icons, or illustrations. Compress PNG online free here while keeping full transparency for sharp, pixel-perfect graphics. Converting a PNG to WebP often makes it much smaller.
                </p>
              </div>
            </div>
            <div className="flex gap-4 bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
              <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Compress WebP Image — The Modern Format</h3>
                <p className="mt-1.5 text-sm text-slate-600 leading-normal">
                  Best for web optimisation. WebP offers excellent lossy and lossless compression that is typically 25-35% smaller than JPEG or PNG. Compress WebP image files for the smallest size at similar quality, and use WebP when you want to optimize images for web pages without visible quality loss. It is the best choice for most websites.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/50 p-4 flex gap-3">
            <Check className="w-5 h-5 flex-shrink-0 text-blue-600 mt-0.5" />
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong className="text-slate-900">Compare the Visual Difference:</strong> Not sure how much compression is acceptable? Use the before-and-after comparison option in the tool. Our interactive slider tool lets you inspect the original image and the compressed version side-by-side to spot any visual artifacts or quality loss before you download.
            </p>
          </div>
        </div>

        {/* Section 6: Use Cases */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            What Can You Use This Image Compressor For?
          </h2>
          <p className="mt-3 text-base text-slate-600">
            One free image compressor covers the most common reasons people need to reduce image size.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
                <h3 className="text-base font-bold text-slate-900">{useCase.title}</h3>
                <p className="mt-1.5 text-sm text-slate-600 leading-normal">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 7: Why Image Size Matters */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Why Image Size Matters
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Large, high-resolution image files are the result of the rapid advancement in camera technology — images are now 2-3x larger than they were just a few years ago. When you reduce image size for website pages and optimize images for web use, your site loads faster, uses less bandwidth and ranks better in search results.
          </p>
          <p className="mt-3 text-base text-slate-600">
            When searching for a good compressor, look for one that: 1) does not compromise on quality, 2) keeps your data private (client-side processing), and 3) processes images fast without running your files through a distant server. That is exactly what CompressMyPic is built for.
          </p>
        </div>

        {/* Section 8: Optimization Tips */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
            <Zap className="w-5 h-5 text-blue-600" />
            Optimization Tips: Reduce Image Size Without Losing Quality
          </h2>
          <ul className="mt-3 space-y-3">
            <li className="flex gap-3 text-sm text-slate-600 leading-relaxed">
              <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <span><strong className="text-slate-900">Start with the Balanced Preset:</strong> The Balanced preset (70% quality) offers the optimal trade-off for most images — dramatically smaller files with great visual similarity to the original.</span>
            </li>
            <li className="flex gap-3 text-sm text-slate-600 leading-relaxed">
              <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <span><strong className="text-slate-900">Choose the right format:</strong> For photographs, JPG or WebP will always outperform PNG in file size. For logos and line graphics with transparency, use PNG.</span>
            </li>
            <li className="flex gap-3 text-sm text-slate-600 leading-relaxed">
              <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <span><strong className="text-slate-900">Aim for a target size:</strong> For website use, aim for images under 200 KB. For emails and messages, stay under 1 MB to ensure fast delivery. Use the quality slider and the live size display to reach your target size.</span>
            </li>
            <li className="flex gap-3 text-sm text-slate-600 leading-relaxed">
              <Gauge className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <span><strong className="text-slate-900">Find the sweet spot:</strong> Set the quality slider to 85-90% for hero images where quality matters; 70-80% is typically the ideal balance for general website use; 50-60% is better for thumbnails or when size is the top priority.</span>
            </li>
            <li className="flex gap-3 text-sm text-slate-600 leading-relaxed">
              <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <span><strong className="text-slate-900">Try WebP for the smallest files:</strong> Switching the output format to WebP usually shrinks a JPG or PNG by another 25-35% at similar quality — a simple way to reduce image size without losing quality.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
