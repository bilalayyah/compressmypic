import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How can I compress an image online for free?',
    answer: 'Simply drag and drop your image files onto CompressMyPic or click "Browse Files". Choose your preferred compression preset (Low, Balanced, or High) or adjust the quality slider, then download your optimized images instantly. The tool is 100% free with no sign-up or software installation required.',
  },
  {
    id: 'faq-2',
    question: 'Does image compression reduce quality?',
    answer: 'With balanced compression (around 70–80% quality), the file size is reduced substantially while the visual appearance remains virtually indistinguishable from the original to the human eye. You can also use our interactive Before/After comparison tool to inspect pixels before downloading.',
  },
  {
    id: 'faq-3',
    question: 'Can I compress multiple images at once?',
    answer: 'Yes! CompressMyPic supports full batch processing. You can upload dozens of images simultaneously, compress them with uniform settings, and click "Download All (ZIP)" to download the entire batch packaged neatly together.',
  },
  {
    id: 'faq-4',
    question: 'Is this image compressor safe?',
    answer: 'Yes, it is completely secure. All compression happens entirely on your own device inside your web browser using HTML5 Canvas technology. Your files are never sent across the internet to any external server or cloud storage.',
  },
  {
    id: 'faq-5',
    question: 'Are uploaded images stored on a server?',
    answer: 'No. We do not store, view, or transmit your images to any remote servers. The image data resides strictly in your browser memory (RAM) and is cleared automatically when you refresh or close the tab.',
  },
  {
    id: 'faq-6',
    question: 'Does it support PNG images?',
    answer: 'Yes, PNG files are fully supported. You can optimize PNG images while preserving transparent alpha backgrounds. Furthermore, you can convert PNGs to modern WebP format for an additional 60–80% size reduction with transparency retained.',
  },
  {
    id: 'faq-7',
    question: 'Can I compress images without losing quality?',
    answer: 'Yes, by selecting a high quality setting (85–90%) or keeping PNG lossless mode, our engine strips redundant metadata (EXIF, camera headers, color profiles) and optimizes compression tables without affecting image clarity.',
  },
  {
    id: 'faq-8',
    question: 'What is the best image format for websites?',
    answer: 'WebP is widely regarded as the best format for modern websites. It provides both lossy and lossless compression, supports alpha transparency, and typically yields files 25–35% smaller than JPEG at comparable quality across all modern browsers.',
  },
  {
    id: 'faq-9',
    question: 'Can I compress images on mobile?',
    answer: 'Yes! CompressMyPic is completely responsive and optimized for mobile browsers on iOS (Safari, Chrome) and Android. You can pick photos directly from your phone camera roll or take a new picture to compress on the go.',
  },
  {
    id: 'faq-10',
    question: 'Is there a file size limit?',
    answer: 'The default limit is 20 MB per image, which accommodates high-resolution camera photos and large screenshots. Because processing occurs inside your device memory, this ensures fast, stutter-free performance on all devices.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['faq-1', 'faq-4']));

  const toggleItem = (id: string) => {
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
    <section id="faq" className="py-14 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Everything you need to know about image compression, browser privacy, supported formats, and quality settings.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQ_DATA.map((item) => {
            const isOpen = openIds.has(item.id);
            return (
              <div
                key={item.id}
                className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 hover:text-blue-600 transition-colors cursor-pointer bg-white"
                  aria-expanded={isOpen}
                  aria-controls={`${item.id}-answer`}
                >
                  <span className="text-sm sm:text-base">{item.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div
                    id={`${item.id}-answer`}
                    className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed bg-white border-t border-slate-100"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
