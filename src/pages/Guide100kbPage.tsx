import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, Mail, Globe, Target, CheckCircle2, Layers, Gauge } from 'lucide-react';
import { getPastelCardClass, getPastelTileClass } from '../utils/pastel';

interface Guide100kbPageProps {
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
    text: 'Go to compressmypic.online in your browser. There is nothing to install and no account to create — the tool is free, with no signup and no watermark.',
  },
  {
    title: 'Upload your image',
    text: 'Drag and drop your image onto the page, or tap "Browse Files" to pick it from your device. JPG, PNG and WebP are supported, up to 20 MB per image. You can upload several images at once.',
  },
  {
    title: 'Start with the Balanced preset',
    text: 'The Balanced preset sets the quality to around 70%. For most photos this already cuts the file to a fraction of its original size — check the live size shown next to your image to see where you stand.',
  },
  {
    title: 'Lower the quality slider step by step',
    text: 'There is no box where you type "100KB" — instead, drag the quality slider down slowly and watch the live before-and-after size update after every change. Move in small steps (for example 70% to 60% to 50%) so you do not overshoot and lose more quality than needed.',
  },
  {
    title: 'Switch to WebP if you are still over 100KB',
    text: 'If the file is still above 100KB at a reasonable quality, change the output format to WebP. WebP is typically 25–35% smaller than JPG at the same visible quality, and it often closes the gap to 100KB without dropping the quality further.',
  },
  {
    title: 'Compare before and after',
    text: 'Open the before-and-after comparison and zoom in on faces, text and fine detail. If the picture still looks good, you are done. If it looks blocky or washed out, raise the quality a little and accept a file slightly above 100KB — a sharp 120 KB photo is better than a blurry 100 KB one.',
  },
  {
    title: 'Download your image',
    text: 'Tap Download to save the smaller file, or use "Download All (ZIP)" if you reduced several images at once. Your original image is never changed — you always get a new, smaller copy.',
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    id: 'kb-faq-1',
    question: 'How do I get my photo down to around 100KB?',
    answer: 'Upload it to CompressMyPic, start with the Balanced preset, then lower the quality slider step by step while watching the live before-and-after size. Stop as soon as the compressed size is close to 100KB. If you are still above it, switch the output format to WebP.',
  },
  {
    id: 'kb-faq-2',
    question: 'Why is there no exact 100KB input box?',
    answer: 'Because every photo compresses differently — a plain sky shrinks far more than a busy crowd scene at the same quality. A fixed "100KB" box would have to guess. Instead, CompressMyPic shows you the live compressed size after every change, so you can steer the file to 100KB yourself with full control over quality.',
  },
  {
    id: 'kb-faq-3',
    question: 'What quality setting gives me about 100KB?',
    answer: 'It depends on the photo, but for a typical phone photo, 50–70% quality usually lands near 100KB. A simple photo with flat colours may reach 100KB at 70%, while a detailed landscape may need 40–50%. Watch the live size — that number is the truth, not any fixed percentage.',
  },
  {
    id: 'kb-faq-4',
    question: 'My photo is still over 100KB at low quality — what now?',
    answer: 'First switch the output format to WebP, which is usually 25–35% smaller than JPG. If it is still over, lower the quality a bit more and check the comparison — a small extra drop is often invisible. As a last resort, a photo with huge dimensions may need a lower quality setting than you expected, because more pixels means more data.',
  },
  {
    id: 'kb-faq-5',
    question: 'Should I use WebP to reach 100KB?',
    answer: 'Yes, whenever you can. WebP is the easiest way to hit 100KB without dropping quality too far, because it makes a smaller file at the same visible quality as JPG. Use WebP for website images and anywhere modern browsers are used; use JPG only when the image must open in older software or be shared on WhatsApp.',
  },
  {
    id: 'kb-faq-6',
    question: 'Does reducing to 100KB make the photo blurry?',
    answer: 'Not if you do it carefully. At 100KB a normal phone photo still looks sharp on screens, because screens show far fewer pixels than the camera captured. It only looks blurry if you push the quality too low (below about 40%) or if the photo is printed large. Always check the before-and-after comparison before downloading.',
  },
  {
    id: 'kb-faq-7',
    question: 'Can I reduce a PNG to 100KB?',
    answer: 'Yes, but PNG photos are large to begin with, so it takes more work. Upload the PNG, lower the quality slider, and switch the output to WebP or JPG — that alone often cuts the size by more than half. Keep PNG output only if the image needs transparency, and accept that a transparent PNG may not reach 100KB.',
  },
  {
    id: 'kb-faq-8',
    question: 'How do I reduce image size to 200KB?',
    answer: 'Use the same method: upload the image, start with the Balanced preset, and lower the quality slider while watching the live size until it is close to 200KB. Most photos reach 200KB easily at 70–80% quality, so you usually do not need to go low at all.',
  },
  {
    id: 'kb-faq-9',
    question: 'How do I reduce image size to 50KB?',
    answer: 'Upload the image, switch the output format to WebP, and lower the quality slider gradually until the live size is near 50KB — usually around 40–55% quality for a photo. Check the comparison closely, because at 50KB fine detail starts to suffer; it is fine for thumbnails and chat, less good for photos you want to keep.',
  },
  {
    id: 'kb-faq-10',
    question: 'How do I reduce image size to 20KB?',
    answer: 'Use WebP output and a low quality setting, usually 25–40%, and watch the live size. 20KB is very small, so expect visible softness — it suits icons, thumbnails and tiny preview images, not photos with faces. If the image still will not reach 20KB, it probably has too much detail for such a tiny file.',
  },
  {
    id: 'kb-faq-11',
    question: 'What is a good file size for website images?',
    answer: 'Aim for under 100KB per image for normal content photos, and under 200KB for large hero images. Small files make pages load faster, which visitors notice and Google rewards. Use WebP format and the Balanced preset as your starting point for website images.',
  },
  {
    id: 'kb-faq-12',
    question: 'What is the email attachment size limit?',
    answer: 'Most email providers allow 20–25 MB per message in total, including all attachments — Gmail allows 25 MB. A single photo reduced to 100KB is never a problem; even ten photos at 100KB each are only 1 MB. Compressing first is what makes sending several photos by email painless.',
  },
  {
    id: 'kb-faq-13',
    question: 'Can I reduce several images to 100KB at once?',
    answer: 'Yes. Upload all the images together, apply the same preset and quality to all of them, and check each one’s live size. If one image is still over 100KB, adjust that one individually, then download everything together with the "Download All (ZIP)" button.',
  },
  {
    id: 'kb-faq-14',
    question: 'Does the tool change my image dimensions?',
    answer: 'No. CompressMyPic keeps your image dimensions exactly the same — only the file size is reduced. Your photo keeps the same width, height and aspect ratio as the original, so a 4000×3000 photo stays 4000×3000, just with a much smaller file.',
  },
  {
    id: 'kb-faq-15',
    question: 'How do I check the size of my compressed image?',
    answer: 'CompressMyPic shows the original size and the compressed size for every image, live, right under each photo — for example "4.2 MB → 98 KB". You can also check the downloaded file on your device: on a phone, look at the file details in your gallery or file manager.',
  },
  {
    id: 'kb-faq-16',
    question: 'Is 100KB enough quality for a website?',
    answer: 'Yes, for almost every web use. Website photos are shown at a few hundred pixels wide, so a 100KB image looks sharp on screen. Only full-screen hero images or photos meant for printing need larger files. Compress to 100KB, check the comparison, and you will see the quality holds up.',
  },
  {
    id: 'kb-faq-17',
    question: 'Can I reduce a screenshot to 100KB?',
    answer: 'Yes, and screenshots are the easiest case. They have large areas of flat colour, so they compress extremely well — a screenshot that starts at 1 MB often drops below 100KB at the Balanced preset. Try WebP output for the smallest result.',
  },
  {
    id: 'kb-faq-18',
    question: 'Are my images uploaded anywhere when I compress them?',
    answer: 'No. All compression happens inside your own browser on your device, so your images are never uploaded to a server, stored or viewed by anyone else. They stay in your browser memory and are cleared when you close or refresh the tab.',
  },
  {
    id: 'kb-faq-19',
    question: 'Is there a limit on how many images I can reduce?',
    answer: 'No. There is no limit on the number of images you can compress, and no account or signup is needed. The only limit is 20 MB per image, which covers high-resolution camera photos and large screenshots.',
  },
  {
    id: 'kb-faq-20',
    question: 'Is it free to reduce images to 100KB?',
    answer: 'Yes, completely free. There are no fees, no paid plans, no credits and no watermark on your compressed images. Open the site, reduce your images to 100KB, and download them as many times as you like.',
  },
];

export const Guide100kbPage: React.FC<Guide100kbPageProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['kb-faq-1', 'kb-faq-2']));

  useEffect(() => {
    document.title = 'How to Reduce Image Size to 100KB for Web & Email';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'Reduce image size to 100KB for websites and email with a free online compressor. Step-by-step guide — no signup, no watermark, images stay on your device.');
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = 'https://compressmypic.online/guides/reduce-image-size-to-100kb';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HowTo',
          name: 'How to reduce image size to 100KB for websites and email',
          description: 'Use the quality slider and WebP output in CompressMyPic to shrink an image to about 100KB.',
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
    script.id = 'guide-100kb-jsonld';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => {
      const existing = document.getElementById('guide-100kb-jsonld');
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
    <div className="bg-[var(--bg)] py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-6">
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7c3aed] dark:text-[#c4b5fd] hover:text-[#6d28d9] dark:hover:text-[#ddd6fe] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Image Compressor</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-[-0.025em] leading-[1.15]">
            How to Reduce Image Size to 100KB for Websites and Email
          </h1>
          <p className="mt-3 text-lg font-medium text-[var(--ink-2)] leading-relaxed">
            A 4 MB photo slows down your website and clogs up an email. Shrinking it to about 100KB makes pages load fast and emails send instantly — and if you do it right, nobody can tell the difference.
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Target className="w-4 h-4" />
              </span>
              <span>Why 100KB Is the Magic Number</span>
            </h2>
            <p>
              100KB is the size most people aim for because it sits in the sweet spot: small enough to load instantly on a website or slip into any email, but large enough to still look sharp on a screen. A typical phone photo starts at 3–5 MB, so reaching 100KB means cutting away roughly 97% of the file — and modern compression does that mostly by removing data your eyes cannot see.
            </p>
            <p>
              One honest note before you start: CompressMyPic does not have a box where you type in "100KB" and get exactly that size. No honest tool can promise an exact number, because every photo compresses differently. Instead, the tool shows you the live compressed size after every change, and you steer it to 100KB yourself with the quality slider. This guide shows you exactly how.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(2)} flex items-center justify-center shrink-0`}>
                <Gauge className="w-4 h-4" />
              </span>
              <span>Step-by-Step: Reduce an Image to 100KB</span>
            </h2>
            <ol className="space-y-3">
              {STEPS.map((step, i) => (
                <li
                  key={step.title}
                  className={`flex gap-3.5 p-4 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(i * 2)}`}
                >
                  <span className="flex-shrink-0 w-7 h-7 rounded-lg btn-purple-grad text-sm font-mono font-bold flex items-center justify-center mt-0.5 shadow-xs">
                    {i + 1}
                  </span>
                  <div>
                    <div className="font-sans font-bold text-[var(--ink-navy)] text-sm sm:text-base">{step.title}</div>
                    <p className="text-sm sm:text-base text-[var(--ink-2)] mt-0.5">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/reduce-image-size-to-100kb-1.png"
              alt="Screenshot of uploading a large photo to CompressMyPic to reduce it to 100KB"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              Upload your photo — the original size is shown right away, so you know how far you need to go.
            </figcaption>
          </figure>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(4)} flex items-center justify-center shrink-0`}>
                <Globe className="w-4 h-4" />
              </span>
              <span>Common Targets at a Glance</span>
            </h2>
            <p>
              100KB is not the only target people need. The same method works for any size — here is what to expect for each one:
            </p>
            <div className="overflow-x-auto pt-1">
              <table className="w-full text-sm border border-[var(--line)] rounded-2xl overflow-hidden bg-[var(--surface)] shadow-[var(--shadow)]">
                <thead>
                  <tr className="bg-[var(--bg-soft)] text-[var(--ink-navy)] text-left border-b border-[var(--line)]">
                    <th className="px-4 py-3 font-semibold">Target</th>
                    <th className="px-4 py-3 font-semibold">Typical quality</th>
                    <th className="px-4 py-3 font-semibold">Good for</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--line)]">
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#7c3aed] dark:text-[#c4b5fd]">200KB</td>
                    <td className="px-4 py-3">70–80%</td>
                    <td className="px-4 py-3">Blog photos, large web images</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#7c3aed] dark:text-[#c4b5fd]">100KB</td>
                    <td className="px-4 py-3">50–70%</td>
                    <td className="px-4 py-3">Website photos, email attachments</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#7c3aed] dark:text-[#c4b5fd]">50KB</td>
                    <td className="px-4 py-3">40–55% + WebP</td>
                    <td className="px-4 py-3">Thumbnails, chat, fast pages</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#7c3aed] dark:text-[#c4b5fd]">20KB</td>
                    <td className="px-4 py-3">25–40% + WebP</td>
                    <td className="px-4 py-3">Icons, tiny previews</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm">
              These are starting points, not promises. A simple photo reaches 100KB easily; a busy, detailed photo needs a lower quality setting. Trust the live size number, not the percentage.
            </p>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-2">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(6)} flex items-center justify-center shrink-0`}>
                <Mail className="w-4 h-4" />
              </span>
              <span>Tips for Websites and Email</span>
            </h2>
            <ul className="space-y-2 list-disc pl-5 text-sm sm:text-base">
              <li>For websites, use WebP output — it is the fastest way to reach 100KB, and every modern browser supports it.</li>
              <li>For email, JPG is the safest format because every email app opens it. A 100KB JPG attaches instantly and never bounces for size.</li>
              <li>Compress all the photos for one page or one email together, then download them all with the Download All (ZIP) button.</li>
              <li>Do not chase an exact 100KB. A sharp photo at 115KB is better than a blurry one at exactly 100KB — the difference in loading time is nothing.</li>
              <li>Always check the before-and-after comparison at full zoom before you publish or send the photo.</li>
            </ul>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/reduce-image-size-to-100kb-2.png"
              alt="Screenshot of the live before-and-after file size showing an image reduced to about 100KB"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              The live before-and-after size shows your progress — lower the slider until the compressed size is near 100KB.
            </figcaption>
          </figure>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-7">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(7)} flex items-center justify-center shrink-0`}>
                <CheckCircle2 className="w-4 h-4" />
              </span>
              <span>When 100KB Is Not Possible</span>
            </h2>
            <p className="text-sm sm:text-base">
              Some images simply cannot reach 100KB without looking bad: a very large, very detailed photo, or a PNG with transparency that must stay PNG. In that case, do not force it. A sharp 180KB photo beats a ruined 100KB one every time — for a website it still loads fast, and for email it is still far below any attachment limit. The goal is a small file that still looks good, not a magic number.
            </p>
          </section>

          {/* FAQ */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Layers className="w-4 h-4" />
              </span>
              <span>Frequently Asked Questions</span>
            </h2>
            <div className="space-y-3">
              {FAQ_DATA.map((item, idx) => {
                const isOpen = openIds.has(item.id);
                return (
                  <div
                    key={item.id}
                    className={`border rounded-2xl overflow-hidden shadow-[var(--shadow)] transition-shadow hover:shadow-[var(--shadow-lg)] ${getPastelCardClass(idx)}`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(item.id)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left transition-colors cursor-pointer hover:bg-white/30 dark:hover:bg-white/5"
                    >
                      <span className="text-sm sm:text-base font-bold text-[var(--ink-navy)]">{item.question}</span>
                      <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#7c3aed] dark:text-[#c4b5fd]' : 'text-[var(--ink-3)]'}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 py-4 text-sm sm:text-base text-[var(--ink-2)] leading-relaxed border-t border-black/5 dark:border-white/10 bg-white/55 dark:bg-slate-900/35">
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
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">Related Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => onNavigate('/guides/compress-images-for-whatsapp')}
                className={`text-left p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(0)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">How to compress images for WhatsApp without losing quality</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">Shrink photos yourself first, then send them as documents so WhatsApp cannot blur them.</p>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/guides/jpg-vs-png-vs-webp')}
                className={`text-left p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(2)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">JPG vs PNG vs WebP — which format should you use?</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">File size, quality and transparency compared, so you pick the right format every time.</p>
              </button>
            </div>
          </section>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/')}
              className="flex-1 px-5 py-3 rounded-[12px] btn-purple-grad text-sm font-semibold shadow-sm transition-all cursor-pointer"
            >
              Compress Images Free
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/guides/jpg-vs-png-vs-webp')}
              className="flex-1 px-5 py-3 rounded-[12px] bg-[var(--surface)] text-[var(--ink-navy)] text-sm font-semibold border border-[var(--line-strong)] shadow-xs hover:border-[#7c3aed]/40 hover:bg-[var(--bg-soft)] transition-colors cursor-pointer"
            >
              JPG vs PNG vs WebP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
