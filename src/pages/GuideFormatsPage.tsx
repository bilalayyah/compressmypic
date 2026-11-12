import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, FileImage, Camera, Layers, Globe, CheckCircle2, Scale } from 'lucide-react';

interface GuideFormatsPageProps {
  onNavigate: (path: string) => void;
}

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const STEPS: { title: string; text: string }[] = [
  {
    title: 'Open CompressMyPic',
    text: 'Go to compressmypic.online in your browser. There is nothing to install, no account to create, and no file is ever uploaded to a server.',
  },
  {
    title: 'Upload your image',
    text: 'Drag and drop your image or tap "Browse Files" to pick it. JPG, PNG and WebP files are all supported, up to 20 MB per image.',
  },
  {
    title: 'Decide: keep the format or convert it',
    text: 'Choose "Original" to keep the format your image already has, or pick JPG, PNG or WebP as the output. Use the guide below to decide: JPG for photos, PNG when you need transparency, WebP when you want the smallest file for a website.',
  },
  {
    title: 'Pick a quality preset',
    text: 'Start with the Balanced preset (around 70%). For a photo you want to keep looking perfect, use the High preset or a quality of 85–90%. For a small web image, a lower setting is fine.',
  },
  {
    title: 'Check the live size and compare',
    text: 'Every image shows its original size and its new compressed size. Open the before-and-after comparison and zoom in — if you cannot see a difference, the setting is right. Try switching the output format to WebP and watch how much smaller the file gets.',
  },
  {
    title: 'Download your image',
    text: 'Download the single image, or use "Download All (ZIP)" when you converted several images at once. Your original file is never changed — you get a new, smaller copy.',
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    id: 'fmt-faq-1',
    question: 'What is the difference between JPG and PNG?',
    answer: 'JPG is a lossy format made for photos: it throws away some detail to make much smaller files, and it cannot do transparency. PNG is lossless and supports transparency, so it is perfect for logos and graphics — but PNG photos are several times larger than the same photo saved as JPG.',
  },
  {
    id: 'fmt-faq-2',
    question: 'Is WebP better than JPG?',
    answer: 'For file size, yes — WebP is typically 25–35% smaller than JPG at similar quality, and it supports transparency too. The only reason to pick JPG over WebP is compatibility: some older software and apps still handle JPG better, and WhatsApp previews JPG photos more reliably.',
  },
  {
    id: 'fmt-faq-3',
    question: 'Is WebP better than PNG?',
    answer: 'Usually, yes. WebP supports transparency like PNG but makes much smaller files, and it can also do lossy compression like JPG. PNG is still the safer choice when you need perfect, lossless quality for a logo or graphic that will be edited again later.',
  },
  {
    id: 'fmt-faq-4',
    question: 'Does PNG support transparency and JPG not?',
    answer: 'Correct. PNG supports a transparent background (an alpha channel), which is why logos and icons are usually PNG. JPG has no transparency at all — any transparent area in a JPG becomes a solid colour, usually white, so never save a logo with a transparent background as JPG.',
  },
  {
    id: 'fmt-faq-5',
    question: 'Why are PNG files so much bigger than JPG?',
    answer: 'Because PNG is lossless: it keeps every single pixel of detail exactly, while JPG throws away detail the eye barely notices. A camera photo saved as PNG can be 5–10 times larger than the same photo as JPG. That is why photos should almost never be PNG.',
  },
  {
    id: 'fmt-faq-6',
    question: 'When should I use JPG instead of WebP?',
    answer: 'Use JPG when the image will be opened in older software, sent on WhatsApp or email where you want a guaranteed preview, or printed. WebP is better for websites, but for sharing a photo with someone, JPG is still the most universal format.',
  },
  {
    id: 'fmt-faq-7',
    question: 'Can I convert PNG to JPG?',
    answer: 'Yes. Upload the PNG to CompressMyPic, choose JPG as the output format, and download it. Just remember JPG has no transparency: if your PNG has a transparent background, pick a background colour first, because the transparent area will otherwise become solid white.',
  },
  {
    id: 'fmt-faq-8',
    question: 'Can I convert JPG to WebP?',
    answer: 'Yes. Upload the JPG, choose WebP as the output, and download it — the file will usually be 25–35% smaller at the same visible quality. You can convert several JPGs to WebP at once and download them all as a ZIP.',
  },
  {
    id: 'fmt-faq-9',
    question: 'Does converting JPG to PNG improve quality?',
    answer: 'No. Converting a JPG to PNG cannot bring back detail that JPG compression already threw away — it only makes the file much bigger. The only good reason to convert JPG to PNG is if you need to edit the image again without losing more quality.',
  },
  {
    id: 'fmt-faq-10',
    question: 'What format should I use for a website?',
    answer: 'WebP first, JPG as the fallback. WebP gives you the smallest files, which makes pages load faster — and page speed matters for both visitors and Google. Use PNG only for images that need transparency, such as a logo, and JPG for photos if you cannot use WebP.',
  },
  {
    id: 'fmt-faq-11',
    question: 'What format is best for a logo?',
    answer: 'PNG if the logo needs a transparent background, because JPG cannot do transparency. WebP also supports transparency and makes a smaller file, so it is a good choice for a logo on a website. Never save a logo as JPG if the background must stay transparent.',
  },
  {
    id: 'fmt-faq-12',
    question: 'What format is best for screenshots?',
    answer: 'PNG or WebP. Screenshots have sharp edges and flat colours, which PNG and WebP handle well. JPG blurs sharp text edges. For the smallest screenshot file, try WebP output in CompressMyPic — it is usually much smaller than PNG with no visible difference.',
  },
  {
    id: 'fmt-faq-13',
    question: 'Do all browsers support WebP now?',
    answer: 'Yes, practically all of them. Chrome, Edge, Firefox, Safari and all modern mobile browsers have supported WebP for years. Only very old browsers and some older apps cannot open WebP, which is the one reason JPG is still useful.',
  },
  {
    id: 'fmt-faq-14',
    question: 'Does WhatsApp or Instagram accept WebP?',
    answer: 'WhatsApp can receive WebP files, but they may not preview as a normal photo, so JPG is safer for sharing photos there. Instagram accepts JPG and PNG for posts and converts uploads itself. For social media sharing, stick to JPG for photos.',
  },
  {
    id: 'fmt-faq-15',
    question: 'Will converting a photo to WebP lose quality?',
    answer: 'Only as much as you choose. WebP uses the same idea as JPG — a quality setting that trades a little detail for a smaller file. At 80–90% quality, a WebP photo looks identical to the original JPG, and the file is about a third smaller.',
  },
  {
    id: 'fmt-faq-16',
    question: 'What is the difference between JPG and JPEG?',
    answer: 'There is none — JPG and JPEG are the same format. JPEG is the full name (Joint Photographic Experts Group) and JPG is the short file extension. A file called photo.jpg and a file called photo.jpeg are the same kind of image.',
  },
  {
    id: 'fmt-faq-17',
    question: 'Should I keep the original format or convert?',
    answer: 'Keep the original if you are happy with the size — it is the simplest choice and nothing is lost. Convert when you have a reason: JPG to WebP to shrink a website photo, PNG to JPG to shrink a photo that does not need transparency, or PNG to WebP to shrink a logo.',
  },
  {
    id: 'fmt-faq-18',
    question: 'Which format gives the smallest file size?',
    answer: 'WebP, in almost every case. For photos, WebP is typically 25–35% smaller than JPG at the same visible quality. For graphics with transparency, WebP is usually far smaller than PNG. That is why WebP is the best format for websites.',
  },
  {
    id: 'fmt-faq-19',
    question: 'Can CompressMyPic convert between JPG, PNG and WebP?',
    answer: 'Yes. Upload a JPG, PNG or WebP image, choose the output format you want — original, JPG, PNG or WebP — and download the converted file. You can convert several images at once with the same settings and download them all as a ZIP.',
  },
  {
    id: 'fmt-faq-20',
    question: 'What happens to transparency if I convert PNG to JPG?',
    answer: 'It is lost. JPG cannot store transparency, so the transparent parts of your PNG become a solid colour. CompressMyPic lets you choose a background colour to fill those areas, so pick one that matches where the image will be used — white is the usual choice.',
  },
];

export const GuideFormatsPage: React.FC<GuideFormatsPageProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['fmt-faq-1', 'fmt-faq-10']));

  useEffect(() => {
    document.title = 'JPG vs PNG vs WebP: Which Format Should You Use?';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'JPG vs PNG vs WebP explained simply: file size, quality and transparency compared, so you can pick the right format for photos, logos and websites.');
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = 'https://compressmypic.online/guides/jpg-vs-png-vs-webp';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HowTo',
          name: 'How to choose between JPG, PNG and WebP and convert images',
          description: 'Compare JPG, PNG and WebP, then compress or convert your image with CompressMyPic.',
          step: STEPS.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.title, text: s.text })),
        },
        {
          '@type': 'FAQPage',
          mainEntity: FAQ_DATA.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        },
      ],
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'guide-formats-jsonld';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => {
      const existing = document.getElementById('guide-formats-jsonld');
      if (existing) existing.remove();
    };
  }, []);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-6">
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Image Compressor</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-slate-200 pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            JPG vs PNG vs WebP — Which Format Should You Use?
          </h1>
          <p className="mt-3 text-lg font-medium text-slate-700 leading-relaxed">
            Picking the wrong format can make your image ten times bigger than it needs to be — or ruin a transparent logo. Here is the simple, honest comparison, and how to convert between formats in seconds.
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-slate-600 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Scale className="w-5 h-5 text-blue-600" />
              <span>The Short Answer</span>
            </h2>
            <p>
              If you only remember one thing, remember this: use JPG for photos, PNG for logos and anything that needs transparency, and WebP whenever you want the smallest file — especially on a website. The table below shows why.
            </p>
            <div className="overflow-x-auto pt-1">
              <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-slate-50 text-slate-900 text-left">
                    <th className="px-4 py-3 font-bold">Format</th>
                    <th className="px-4 py-3 font-bold">File size</th>
                    <th className="px-4 py-3 font-bold">Transparency</th>
                    <th className="px-4 py-3 font-bold">Best for</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">JPG</td>
                    <td className="px-4 py-3">Small</td>
                    <td className="px-4 py-3">No</td>
                    <td className="px-4 py-3">Photos, sharing, printing</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">PNG</td>
                    <td className="px-4 py-3">Large</td>
                    <td className="px-4 py-3">Yes</td>
                    <td className="px-4 py-3">Logos, icons, screenshots</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">WebP</td>
                    <td className="px-4 py-3">Smallest</td>
                    <td className="px-4 py-3">Yes</td>
                    <td className="px-4 py-3">Websites, web photos</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Camera className="w-5 h-5 text-blue-600" />
              <span>JPG: Best for Photos</span>
            </h2>
            <p>
              JPG (also written JPEG) is the classic photo format. It uses lossy compression: it throws away fine detail your eye barely notices, which makes files dramatically smaller. A 5 MB camera photo can become 500 KB as a JPG and still look great. JPG cannot do transparency, so it is the wrong choice for logos — but for any normal photo, it is the safe, universal default that every device and app can open.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-600" />
              <span>PNG: Best for Logos and Transparency</span>
            </h2>
            <p>
              PNG is lossless: it keeps every pixel exactly, and it supports transparent backgrounds. That makes it the right format for logos, icons, and graphics with text. The price is file size — a photo saved as PNG can be 5–10 times larger than the same photo as JPG. Never save a camera photo as PNG unless you have a specific reason.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-600" />
              <span>WebP: Best for Websites</span>
            </h2>
            <p>
              WebP is the modern format made by Google. It does everything: lossy compression like JPG, transparency like PNG, and files that are typically 25–35% smaller than JPG at the same visible quality. Every modern browser supports it, which is why it is the best format for website images. Its only weakness is compatibility with older software — and WhatsApp previews, where JPG is still safer.
            </p>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/jpg-vs-png-vs-webp-1.png"
              alt="Screenshot comparing the same photo saved as JPG, PNG and WebP with their file sizes"
              className="w-full rounded-xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
            <figcaption className="text-xs text-slate-500 text-center">
              The same photo in three formats: WebP is the smallest, PNG is the largest, and JPG sits in between.
            </figcaption>
          </figure>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <FileImage className="w-5 h-5 text-blue-600" />
              <span>Step-by-Step: Compress or Convert Your Image</span>
            </h2>
            <ol className="space-y-4">
              {STEPS.map((step, i) => (
                <li key={step.title} className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <div>
                    <div className="font-bold text-slate-900 text-sm sm:text-base">{step.title}</div>
                    <p className="text-sm sm:text-base">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Which Format for Which Job?</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Camera photos — JPG or WebP</div>
                <p className="text-xs text-slate-600">
                  JPG for sharing and printing, WebP for your website. Both keep photos looking great at a fraction of the original size.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Logos and icons — PNG or WebP</div>
                <p className="text-xs text-slate-600">
                  You need transparency, so JPG is out. PNG is the safe classic; WebP is smaller and works everywhere modern.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Screenshots — WebP or PNG</div>
                <p className="text-xs text-slate-600">
                  Sharp text and flat colours suit WebP and PNG. JPG blurs text edges, so avoid it for screenshots.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Website images — WebP</div>
                <p className="text-xs text-slate-600">
                  Smallest files mean faster pages. Convert your website photos to WebP and keep JPG as a fallback for very old browsers.
                </p>
              </div>
            </div>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/jpg-vs-png-vs-webp-2.png"
              alt="Screenshot of choosing the output format JPG, PNG or WebP in CompressMyPic"
              className="w-full rounded-xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
            <figcaption className="text-xs text-slate-500 text-center">
              Pick your output format in CompressMyPic — keep the original, or convert to JPG, PNG or WebP.
            </figcaption>
          </figure>

          {/* FAQ */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-600" />
              <span>Frequently Asked Questions</span>
            </h2>
            <div className="space-y-3">
              {FAQ_DATA.map((item) => {
                const isOpen = openIds.has(item.id);
                return (
                  <div key={item.id} className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs">
                    <button
                      type="button"
                      onClick={() => toggleFaq(item.id)}
                      aria-expanded={isOpen}
                      className={`w-full flex items-center justify-between gap-3 px-5 py-4 text-left transition-colors ${isOpen ? 'bg-slate-50/50' : 'hover:bg-slate-50/50'}`}
                    >
                      <span className="text-sm sm:text-base font-bold text-slate-900">{item.question}</span>
                      <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 py-4 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Related guides */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">Related Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => onNavigate('/guides/compress-images-for-whatsapp')}
                className="text-left p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-pointer"
              >
                <div className="font-bold text-slate-900 text-sm">How to compress images for WhatsApp without losing quality</div>
                <p className="text-xs text-slate-600 mt-1">Shrink photos yourself first, then send them as documents so WhatsApp cannot blur them.</p>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/guides/reduce-image-size-to-100kb')}
                className="text-left p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-pointer"
              >
                <div className="font-bold text-slate-900 text-sm">How to reduce image size to 100KB for websites and email</div>
                <p className="text-xs text-slate-600 mt-1">Step-by-step guide to hitting 100KB without wrecking your photo.</p>
              </button>
            </div>
          </section>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/')}
              className="flex-1 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-bold shadow-sm hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Compress Images Free
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/guides/compress-images-for-whatsapp')}
              className="flex-1 px-4 py-2.5 rounded-xl bg-white text-slate-900 text-sm font-bold border border-slate-200 shadow-xs hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Compress for WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
