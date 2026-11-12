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
    answer: 'Simply drag and drop your image files onto CompressMyPic or click "Browse Files". Choose a compression preset (Low, Balanced, or High) or adjust the quality slider, then download your optimized images instantly. The tool is 100% free with no sign-up or software installation required.',
  },
  {
    id: 'faq-2',
    question: 'How do I compress an image to 100KB?',
    answer: 'CompressMyPic does not have an exact target-KB input box, so you cannot type in 100KB directly. Instead, upload your image, choose a preset or lower the quality slider, and watch the live before-and-after size shown for each image. Adjust the quality or switch the output format to WebP until the compressed size is close to 100KB, then download it.',
  },
  {
    id: 'faq-3',
    question: 'How can I reduce image size without losing quality?',
    answer: 'Choose the Balanced preset (around 70% quality) or a high quality setting of 85-90%, which removes redundant data and metadata while keeping the picture looking virtually identical to the original. Use the interactive before-and-after comparison to check the result, and keep the original format or choose WebP for the best quality-to-size balance.',
  },
  {
    id: 'faq-4',
    question: 'How do I compress a JPEG to 100KB?',
    answer: 'To reduce JPEG file size, upload your JPEG, choose JPEG as the output format, then lower the quality slider step by step while watching the live compressed size. Because there is no exact target-KB box, use the before-and-after size display to stop when the file is close to 100KB.',
  },
  {
    id: 'faq-5',
    question: 'How do I reduce image size to 20KB, 50KB or 200KB?',
    answer: 'Upload your image and lower the quality slider gradually, checking the live before-and-after size after each change, until you reach your target - 200KB, 50KB or 20KB. Smaller targets such as 20KB usually need a lower quality setting and WebP output. The same method works for any target, including 500KB, and the size is always shown in KB so you can see exactly how much you reduced the image size in KB.',
  },
  {
    id: 'faq-6',
    question: 'How do I compress a PNG online for free?',
    answer: 'Upload your PNG to CompressMyPic and choose a preset or adjust the quality slider - compressing a PNG online is free here, with no signup. Transparency is preserved for PNG and WebP output, and converting a PNG to WebP often makes it much smaller.',
  },
  {
    id: 'faq-7',
    question: 'What image formats are supported?',
    answer: 'CompressMyPic supports JPG (JPEG), PNG and WebP. You can keep the original format or convert between them - for example, compress JPG files as JPEG, compress PNG files while keeping transparency, or convert to WebP for the smallest files.',
  },
  {
    id: 'faq-8',
    question: 'Can I compress multiple images at once?',
    answer: 'Yes. This bulk image compressor and batch image compressor lets you upload dozens of images at once, compress multiple images at once with the same settings, and download them all together with the "Download All (ZIP)" button, or download each one individually.',
  },
  {
    id: 'faq-9',
    question: 'How do I compress an image for WhatsApp?',
    answer: 'Upload your photo, choose a lower quality preset or WebP output, and download the smaller file before sharing it on WhatsApp. Smaller photos send faster, use less mobile data, and are less likely to be rejected for being too large.',
  },
  {
    id: 'faq-10',
    question: 'How do I compress an image for Instagram or Facebook?',
    answer: 'Compress your photo for Instagram or Facebook by uploading it here, choosing the Balanced preset, and downloading the smaller JPG or WebP file. The reduced file uploads faster and keeps enough quality for feeds, stories and profile pictures.',
  },
  {
    id: 'faq-11',
    question: 'Can I compress images for an email attachment?',
    answer: 'Yes. Compress images for an email attachment by reducing them with the quality slider until each file is small enough for your email provider attachment limit, then attach the downloaded files to your message instead of the large originals.',
  },
  {
    id: 'faq-12',
    question: 'Is CompressMyPic really free?',
    answer: 'Yes, CompressMyPic is completely free to use. There are no fees, no paid plans, no credits and no limits on how many images you can compress.',
  },
  {
    id: 'faq-13',
    question: 'Does CompressMyPic add a watermark?',
    answer: 'No. CompressMyPic is a free image compressor with no watermark - your compressed images are clean, with no logo, text or branding added.',
  },
  {
    id: 'faq-14',
    question: 'Do I need to sign up to use CompressMyPic?',
    answer: 'No. This is a free image compressor with no signup: there is no account, no email address and no password required. Just open the site and start compressing.',
  },
  {
    id: 'faq-15',
    question: 'Are my images uploaded to a server?',
    answer: 'No. All compression happens entirely on your own device inside your web browser, so your images are never uploaded to a server, stored or viewed by anyone else. They stay in your browser memory and are cleared when you refresh or close the tab.',
  },
  {
    id: 'faq-16',
    question: 'Is there a file size limit?',
    answer: 'Yes, the limit is 20 MB per image, which covers high-resolution camera photos and large screenshots. Because processing happens on your device, compression stays fast even for large files.',
  },
  {
    id: 'faq-17',
    question: 'Does compressing an image change its dimensions?',
    answer: 'No. CompressMyPic keeps your image dimensions unchanged - only the file size is reduced. Your photo keeps the same width, height and aspect ratio as the original.',
  },
  {
    id: 'faq-18',
    question: 'Can I compress images on mobile?',
    answer: 'Yes. CompressMyPic works on mobile browsers on iOS and Android, so you can compress a photo on your phone by picking it from your camera roll or taking a new picture and uploading it here.',
  },
  {
    id: 'faq-19',
    question: 'How does the quality slider work?',
    answer: 'The quality slider lets you set the compression quality from 10% to 100%. Higher values keep more detail and produce larger files, while lower values make files much smaller. The Low, Balanced and High presets set the slider for you, and the live before-and-after size shows the result of every change.',
  },
  {
    id: 'faq-20',
    question: 'How do I choose the output format?',
    answer: 'After uploading an image, choose whether to keep the original format or convert to JPG, PNG or WebP. WebP is usually the best choice to optimize images for web pages because it is 25-35% smaller than JPEG at similar quality, while PNG is best when you need transparency.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['faq-1', 'faq-4']));

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
    <section id="faq" className="py-14 sm:py-20 border-t border-slate-200 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about compressing images online for free with CompressMyPic.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_DATA.map((item) => {
            const isOpen = openIds.has(item.id);
            return (
              <div
                key={item.id}
                className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(item.id)}
                  aria-expanded={isOpen}
                  className={`w-full flex items-center justify-between gap-3 px-5 py-4 text-left transition-colors ${isOpen ? 'bg-slate-50/50' : 'hover:bg-slate-50/50'}`}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`}
                  />
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
      </div>
    </section>
  );
};
