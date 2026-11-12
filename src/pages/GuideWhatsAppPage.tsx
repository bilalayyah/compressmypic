import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, MessageCircle, Send, Smartphone, CheckCircle2, FileWarning, Layers } from 'lucide-react';

interface GuideWhatsAppPageProps {
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
    text: 'Go to compressmypic.online in your phone or computer browser. There is nothing to install and no account to create — the tool opens straight away.',
  },
  {
    title: 'Upload your photo',
    text: 'Tap "Browse Files" and pick the photo from your gallery, or drag and drop it onto the page. You can upload several photos at once. Each image can be up to 20 MB.',
  },
  {
    title: 'Start with the Balanced preset',
    text: 'The Balanced preset (around 70% quality) is a good starting point for WhatsApp photos. It shrinks the file a lot while the picture still looks sharp on a phone screen.',
  },
  {
    title: 'Check the live before-and-after size',
    text: 'Every photo shows its original size and its new compressed size side by side. If the file is still bigger than you want, drag the quality slider a little lower and watch the size update instantly.',
  },
  {
    title: 'Keep JPG for photos',
    text: 'For normal photos, keep the output format as JPG. It is the format WhatsApp handles best, and it gives the smallest files for photos. Only use PNG if your image needs transparency, such as a logo.',
  },
  {
    title: 'Compare before and after',
    text: 'Open the before-and-after comparison to check the picture still looks good. Zoom in on faces and text — if you can see no real difference, the quality setting is right.',
  },
  {
    title: 'Download the smaller photo',
    text: 'Tap Download on the photo, or use "Download All (ZIP)" if you compressed several photos at once. The smaller file is saved to your device — your original photo is never changed.',
  },
  {
    title: 'Send it on WhatsApp the smart way',
    text: 'If you want the best possible quality, send the compressed photo as a document: in WhatsApp tap Attach, then Document, and pick the file. WhatsApp sends documents untouched, so your photo arrives exactly as you compressed it. If you send it as a photo instead, WhatsApp will compress it a second time.',
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    id: 'wa-faq-1',
    question: 'Why does WhatsApp reduce photo quality?',
    answer: 'When you send a photo the normal way, WhatsApp re-compresses it to save data and storage, often shrinking it to a much smaller size and lower quality. That is why a sharp camera photo can look soft or blurry after it is sent.',
  },
  {
    id: 'wa-faq-2',
    question: 'Does WhatsApp compress images sent as documents?',
    answer: 'No. When you send an image as a document (Attach, then Document), WhatsApp sends the file exactly as it is, with no extra compression. That is the best way to share a photo at full quality.',
  },
  {
    id: 'wa-faq-3',
    question: 'What is the maximum image size I can send on WhatsApp?',
    answer: 'WhatsApp allows documents up to 2 GB, so a compressed photo of a few hundred KB is never a problem. Photos sent the normal way are re-compressed by WhatsApp itself, so the limit that matters in practice is quality, not size.',
  },
  {
    id: 'wa-faq-4',
    question: 'How do I send a full-quality photo on WhatsApp?',
    answer: 'First compress the photo yourself with CompressMyPic so it is a sensible size, then send it in WhatsApp as a document instead of as a photo. Tap Attach, choose Document, and select the file. It will arrive without WhatsApp compressing it again.',
  },
  {
    id: 'wa-faq-5',
    question: 'Should I compress before sending or let WhatsApp do it?',
    answer: 'Compress it yourself first. WhatsApp compresses aggressively and you have no control over it. When you compress with CompressMyPic first, you choose the quality, check the result, and then send the file as a document so WhatsApp does not touch it again.',
  },
  {
    id: 'wa-faq-6',
    question: 'What quality setting should I use for WhatsApp photos?',
    answer: 'Start with the Balanced preset at around 70%. For an important photo, use 80–85% and check the before-and-after comparison. For a quick everyday photo where speed matters, 50–60% still looks fine on a phone screen and makes a much smaller file.',
  },
  {
    id: 'wa-faq-7',
    question: 'Does compressing twice make photos worse?',
    answer: 'Yes. Every round of JPEG compression throws away a little more detail. That is why you should compress once with CompressMyPic and then send the result as a document, instead of letting WhatsApp compress an already compressed photo a second time.',
  },
  {
    id: 'wa-faq-8',
    question: 'Can I compress WhatsApp photos on my phone?',
    answer: 'Yes. CompressMyPic works in the browser on Android and iPhone. Open the site, pick the photo from your camera roll, compress it, download the smaller file, and then share it from WhatsApp. No app to install.',
  },
  {
    id: 'wa-faq-9',
    question: 'Do compressed photos still look good on WhatsApp Status?',
    answer: 'Yes, if you do not overdo it. WhatsApp Status displays photos at a modest resolution, so a photo compressed at the Balanced preset (around 70%) looks the same as the original on a phone screen. Avoid going below 50% for Status photos with faces or text.',
  },
  {
    id: 'wa-faq-10',
    question: 'WhatsApp says my image is too large — what do I do?',
    answer: 'Upload the image to CompressMyPic and lower the quality slider until the file is a few hundred KB, then download it and send it again. If it still will not send as a photo, send it as a document instead, which accepts much larger files.',
  },
  {
    id: 'wa-faq-11',
    question: 'Should I use JPG or PNG for WhatsApp?',
    answer: 'Use JPG for photos. JPG makes far smaller files for camera photos and WhatsApp handles it best. Use PNG only for images that need transparency, like a logo, because PNG files are much larger.',
  },
  {
    id: 'wa-faq-12',
    question: 'Can I send WebP images on WhatsApp?',
    answer: 'WhatsApp can receive WebP files, but they may not preview as a normal photo, and some phones handle them oddly. For photos you want people to see inline, JPG is the safer choice. WebP is better for websites than for WhatsApp.',
  },
  {
    id: 'wa-faq-13',
    question: 'How do I compress several WhatsApp photos at once?',
    answer: 'Upload all the photos to CompressMyPic in one go, apply the same preset to all of them, and download everything together with the "Download All (ZIP)" button. Then send the files from WhatsApp one by one or as documents.',
  },
  {
    id: 'wa-faq-14',
    question: 'Does WhatsApp compress videos the same way?',
    answer: 'Yes, WhatsApp also compresses videos sent the normal way, and it can reduce them a lot. CompressMyPic only works with images (JPG, PNG, WebP), not video. For videos, send them as documents to keep the original quality.',
  },
  {
    id: 'wa-faq-15',
    question: 'Will compressing a photo delete the original from my phone?',
    answer: 'No. CompressMyPic creates a new, smaller copy and downloads it to your device. Your original photo stays exactly as it is in your gallery, untouched.',
  },
  {
    id: 'wa-faq-16',
    question: 'Are my photos uploaded to a server when I compress them?',
    answer: 'No. All compression happens inside your own browser on your device, so your photos are never uploaded, stored or seen by anyone else. They stay in your browser memory and are cleared when you close or refresh the tab.',
  },
  {
    id: 'wa-faq-17',
    question: 'How small should a photo be for WhatsApp?',
    answer: 'For everyday sharing, 100–300 KB per photo is a good target: it sends fast, uses little mobile data, and still looks sharp on a phone. For a photo you want to print or keep, stay closer to 500 KB–1 MB at a higher quality setting.',
  },
  {
    id: 'wa-faq-18',
    question: 'Why do my WhatsApp photos look blurry after sending?',
    answer: 'Because WhatsApp re-compressed them when you sent them as photos. The fix is to compress the photo yourself first at a quality you control, and then send it as a document so WhatsApp does not compress it again.',
  },
  {
    id: 'wa-faq-19',
    question: 'Can I compress a screenshot for WhatsApp?',
    answer: 'Yes. Upload the screenshot to CompressMyPic the same way as a photo. Screenshots compress very well because they have large areas of flat colour — try the Balanced preset first, and switch to WebP output if you want the smallest file.',
  },
  {
    id: 'wa-faq-20',
    question: 'Is CompressMyPic free for WhatsApp photos?',
    answer: 'Yes, completely free. There is no signup, no watermark, no limit on how many photos you compress, and no account needed. Just open the site, compress, and download.',
  },
];

export const GuideWhatsAppPage: React.FC<GuideWhatsAppPageProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['wa-faq-1', 'wa-faq-4']));

  useEffect(() => {
    document.title = 'Compress Images for WhatsApp Without Losing Quality';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'Learn how to compress images for WhatsApp without losing quality. Free, private, no signup — shrink photos before sending so they stay sharp and send fast.');
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = 'https://compressmypic.online/guides/compress-images-for-whatsapp';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HowTo',
          name: 'How to compress images for WhatsApp without losing quality',
          description: 'Compress a photo with CompressMyPic and send it on WhatsApp as a document so it stays sharp.',
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
    script.id = 'guide-whatsapp-jsonld';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => {
      const existing = document.getElementById('guide-whatsapp-jsonld');
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
            How to Compress Images for WhatsApp Without Losing Quality
          </h1>
          <p className="mt-3 text-lg font-medium text-slate-700 leading-relaxed">
            WhatsApp shrinks every photo you send — often far more than it needs to. Compress your photos yourself first, then send them the right way, and they will arrive sharp, send fast, and use less mobile data.
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-slate-600 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-blue-600" />
              <span>Why WhatsApp Makes Your Photos Blurry</span>
            </h2>
            <p>
              When you send a photo on WhatsApp the normal way, WhatsApp re-compresses it before it is delivered. A 3 MB camera photo can arrive as a 100 KB file with soft details and blocky colours. WhatsApp does this to save data and storage, but you get no say in how much quality is lost.
            </p>
            <p>
              There is a second way to send a photo that most people never use: sending it as a document. Documents are delivered exactly as they are, with no extra compression at all. The trick is to shrink the photo yourself first — with a quality setting you control — and then send it as a document. You get a small file and a sharp photo at the same time.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Send className="w-5 h-5 text-blue-600" />
              <span>Step-by-Step: Compress a Photo for WhatsApp</span>
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

          <figure className="space-y-2">
            <img
              src="/guides/compress-images-for-whatsapp-1.png"
              alt="Screenshot of uploading a photo to CompressMyPic before sending it on WhatsApp"
              className="w-full rounded-xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
            <figcaption className="text-xs text-slate-500 text-center">
              Upload your photo to CompressMyPic — drag and drop, or pick it from your gallery.
            </figcaption>
          </figure>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-blue-600" />
              <span>What Quality Setting Should You Use?</span>
            </h2>
            <p>
              There is no single perfect number — it depends on the photo and what it is for. Use this as a starting point and check the before-and-after comparison each time:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Everyday photos: 70%</div>
                <p className="text-xs text-slate-600">
                  The Balanced preset. Big size savings, and the photo still looks sharp on any phone screen. The best default for WhatsApp.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Important photos: 80–85%</div>
                <p className="text-xs text-slate-600">
                  Family pictures, travel photos, anything you want to keep. The file is larger, but fine detail in faces and landscapes survives.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Quick shares: 50–60%</div>
                <p className="text-xs text-slate-600">
                  Memes, quick updates, photos on slow mobile data. Much smaller files that still look fine at phone-screen size.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Tips for the Best Results</span>
            </h2>
            <ul className="space-y-2 list-disc pl-5">
              <li>Compress once, and only once. Compressing an already compressed photo a second time throws away detail for almost no extra saving.</li>
              <li>Always send the compressed file as a document if quality matters — that is the only way to stop WhatsApp compressing it again.</li>
              <li>Compress several photos at once with the same settings and download them all with the Download All (ZIP) button.</li>
              <li>For screenshots and graphics with text, try WebP output — it keeps sharp edges and makes a smaller file than JPG.</li>
              <li>Your original photo is never changed. CompressMyPic saves a new, smaller copy, so you can always go back and try a different quality.</li>
            </ul>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/compress-images-for-whatsapp-2.png"
              alt="Screenshot of the quality slider and live before-and-after file size in CompressMyPic"
              className="w-full rounded-xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
            <figcaption className="text-xs text-slate-500 text-center">
              Move the quality slider and watch the before-and-after size update live until the file is the size you want.
            </figcaption>
          </figure>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <FileWarning className="w-5 h-5 text-blue-600" />
              <span>Common Mistakes to Avoid</span>
            </h2>
            <ul className="space-y-2 list-disc pl-5">
              <li>Sending the photo as a photo after compressing it — WhatsApp will compress it a second time and undo your work.</li>
              <li>Dropping the quality below 40% for photos with faces — skin and fine detail turn blocky very quickly at low quality.</li>
              <li>Using PNG for camera photos — PNG files are much larger than JPG for photos and gain you nothing on WhatsApp.</li>
              <li>Forgetting to check the result — always look at the before-and-after comparison before you send, especially for photos with text.</li>
            </ul>
          </section>

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
                onClick={() => onNavigate('/guides/jpg-vs-png-vs-webp')}
                className="text-left p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-pointer"
              >
                <div className="font-bold text-slate-900 text-sm">JPG vs PNG vs WebP — which format should you use?</div>
                <p className="text-xs text-slate-600 mt-1">File size, quality and transparency compared, so you pick the right format every time.</p>
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
              onClick={() => onNavigate('/guides/reduce-image-size-to-100kb')}
              className="flex-1 px-4 py-2.5 rounded-xl bg-white text-slate-900 text-sm font-bold border border-slate-200 shadow-xs hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Reduce an Image to 100KB
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
