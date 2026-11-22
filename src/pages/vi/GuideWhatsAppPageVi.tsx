import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, MessageCircle, Send, Smartphone, CheckCircle2, FileWarning, Layers } from 'lucide-react';
import { getPastelCardClass, getPastelTileClass } from '../../utils/pastel';
import { GuideRelatedLinks } from '../../components/GuideRelatedLinks';

interface GuideWhatsAppPageViProps {
  onNavigate: (path: string) => void;
}

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const STEPS: { title: string; text: string }[] = [
  {
    title: 'Mở CompressMyPic',
    text: 'Truy cập compressmypic.online trong trình duyệt trên điện thoại hoặc máy tính của bạn. Không có gì để cài đặt và không cần tạo tài khoản: công cụ mở ra ngay lập tức.',
  },
  {
    title: 'Tải ảnh của bạn lên',
    text: 'Chạm vào «Duyệt tệp» và chọn ảnh từ thư viện của bạn, hoặc kéo ảnh rồi thả vào trang. Bạn có thể tải nhiều ảnh cùng lúc. Mỗi ảnh có thể nặng tới 20 MB.',
  },
  {
    title: 'Bắt đầu với chế độ Cân bằng',
    text: 'Chế độ Cân bằng (khoảng 70% chất lượng) là điểm khởi đầu tốt cho ảnh WhatsApp. Nó giảm dung lượng tệp rất nhiều mà ảnh vẫn trông sắc nét trên màn hình điện thoại.',
  },
  {
    title: 'Kiểm tra dung lượng trước/sau trực tiếp',
    text: 'Mỗi ảnh hiển thị dung lượng gốc và dung lượng đã nén mới của nó, cạnh nhau. Nếu tệp vẫn lớn hơn mức bạn muốn, hãy kéo thanh trượt chất lượng xuống một chút và xem dung lượng cập nhật ngay lập tức.',
  },
  {
    title: 'Giữ JPG cho ảnh chụp',
    text: 'Với ảnh chụp thông thường, hãy giữ định dạng đầu ra JPG. Đây là định dạng mà WhatsApp xử lý tốt nhất và tạo ra tệp nhỏ nhất cho ảnh chụp. Chỉ dùng PNG khi ảnh của bạn cần độ trong suốt, như logo.',
  },
  {
    title: 'So sánh trước và sau',
    text: 'Mở phần so sánh trước/sau để kiểm tra ảnh vẫn đẹp. Phóng to vào khuôn mặt và chữ viết: nếu bạn không thấy khác biệt thực sự thì mức chất lượng đó là đúng.',
  },
  {
    title: 'Tải ảnh nhỏ hơn xuống',
    text: 'Chạm vào Tải xuống trên ảnh, hoặc dùng «Tải tất cả (ZIP)» nếu bạn đã nén nhiều ảnh cùng lúc. Tệp nhỏ hơn được lưu trên thiết bị của bạn; ảnh gốc của bạn không bao giờ bị thay đổi.',
  },
  {
    title: 'Gửi qua WhatsApp một cách thông minh',
    text: 'Nếu bạn muốn chất lượng tốt nhất có thể, hãy gửi ảnh đã nén dưới dạng tài liệu: trong WhatsApp, chạm vào Đính kèm, rồi chọn Tài liệu, và chọn tệp. WhatsApp gửi tài liệu mà không chạm vào chúng, vì vậy ảnh của bạn đến nơi đúng như bạn đã nén. Nếu bạn gửi dưới dạng ảnh, WhatsApp sẽ nén nó lần thứ hai.',
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    id: 'wa-faq-1',
    question: 'Vì sao WhatsApp làm giảm chất lượng ảnh?',
    answer: 'Khi bạn gửi ảnh theo cách thông thường, WhatsApp nén lại ảnh để tiết kiệm dữ liệu và dung lượng, và thường giảm ảnh xuống dung lượng và chất lượng thấp hơn nhiều. Vì vậy một ảnh chụp sắc nét có thể trông mềm hoặc mờ sau khi gửi.',
  },
  {
    id: 'wa-faq-2',
    question: 'WhatsApp có nén ảnh gửi dưới dạng tài liệu không?',
    answer: 'Không. Khi bạn gửi ảnh dưới dạng tài liệu (Đính kèm rồi chọn Tài liệu), WhatsApp gửi tệp nguyên trạng, không nén thêm. Đó là cách tốt nhất để chia sẻ ảnh với đầy đủ chất lượng.',
  },
  {
    id: 'wa-faq-3',
    question: 'WhatsApp chấp nhận ảnh tối đa bao nhiêu?',
    answer: 'WhatsApp cho phép tài liệu tới 2 GB, vì vậy một ảnh đã nén chỉ vài trăm KB không bao giờ là vấn đề. Ảnh gửi theo cách thông thường sẽ bị chính WhatsApp nén lại, vì vậy trên thực tế điều quan trọng là chất lượng chứ không phải dung lượng.',
  },
  {
    id: 'wa-faq-4',
    question: 'Làm thế nào để gửi ảnh đầy đủ chất lượng qua WhatsApp?',
    answer: 'Trước tiên, hãy tự nén ảnh bằng CompressMyPic để ảnh có dung lượng hợp lý, rồi gửi qua WhatsApp dưới dạng tài liệu thay vì dạng ảnh. Chạm vào Đính kèm, chọn Tài liệu rồi chọn tệp. Ảnh sẽ đến nơi mà không bị WhatsApp nén lại.',
  },
  {
    id: 'wa-faq-5',
    question: 'Tôi nên tự nén trước khi gửi hay để WhatsApp nén?',
    answer: 'Hãy tự nén trước. WhatsApp nén rất mạnh và bạn không kiểm soát được mức đó. Khi bạn tự nén bằng CompressMyPic trước, bạn chọn chất lượng, kiểm tra kết quả rồi gửi tệp dưới dạng tài liệu để WhatsApp không chạm vào nữa.',
  },
  {
    id: 'wa-faq-6',
    question: 'Tôi nên dùng mức chất lượng nào cho ảnh WhatsApp?',
    answer: 'Hãy bắt đầu với chế độ Cân bằng, khoảng 70%. Với ảnh quan trọng, hãy dùng 80 đến 85% và kiểm tra phần so sánh trước/sau. Với ảnh hằng ngày gửi nhanh, khi tốc độ quan trọng, mức 50 đến 60% vẫn trông đẹp trên màn hình điện thoại và cho tệp nhỏ hơn nhiều.',
  },
  {
    id: 'wa-faq-7',
    question: 'Nén hai lần có làm ảnh tệ hơn không?',
    answer: 'Có. Mỗi lần nén JPEG lại loại bỏ thêm một chút chi tiết. Vì vậy bạn nên chỉ nén một lần bằng CompressMyPic rồi gửi kết quả dưới dạng tài liệu, thay vì để WhatsApp nén lần thứ hai một ảnh đã nén.',
  },
  {
    id: 'wa-faq-8',
    question: 'Tôi có thể nén ảnh WhatsApp trên điện thoại không?',
    answer: 'Có. CompressMyPic hoạt động trong trình duyệt trên Android và iPhone. Hãy mở trang web, chọn ảnh từ thư viện, nén ảnh, tải tệp nhỏ hơn xuống rồi chia sẻ từ WhatsApp. Không cần cài đặt ứng dụng nào.',
  },
  {
    id: 'wa-faq-9',
    question: 'Ảnh đã nén có đẹp trên trạng thái WhatsApp không?',
    answer: 'Có, nếu bạn không làm quá. Trạng thái WhatsApp hiển thị ảnh ở độ phân giải vừa phải, vì vậy một ảnh đã nén với chế độ Cân bằng (khoảng 70%) trông giống như ảnh gốc trên màn hình điện thoại. Tránh giảm xuống dưới 50% với ảnh trạng thái có khuôn mặt hay chữ viết.',
  },
  {
    id: 'wa-faq-10',
    question: 'WhatsApp báo ảnh của tôi quá lớn, tôi phải làm gì?',
    answer: 'Tải ảnh lên CompressMyPic và kéo thanh trượt chất lượng xuống cho đến khi tệp còn vài trăm KB; rồi tải xuống và gửi lại. Nếu vẫn không gửi được dưới dạng ảnh, hãy gửi dưới dạng tài liệu, vốn chấp nhận tệp lớn hơn nhiều.',
  },
  {
    id: 'wa-faq-11',
    question: 'Tôi nên dùng JPG hay PNG cho WhatsApp?',
    answer: 'Hãy dùng JPG cho ảnh chụp. JPG tạo ra tệp nhỏ hơn nhiều cho ảnh chụp bằng máy ảnh và WhatsApp xử lý nó tốt hơn. Chỉ dùng PNG cho những ảnh cần độ trong suốt, như logo, vì tệp PNG lớn hơn nhiều.',
  },
  {
    id: 'wa-faq-12',
    question: 'Tôi có thể gửi ảnh WebP qua WhatsApp không?',
    answer: 'WhatsApp có thể nhận tệp WebP, nhưng chúng có thể không hiển thị như một ảnh bình thường và một số điện thoại xử lý chúng lạ lùng. Với những ảnh bạn muốn mọi người xem trực tiếp trong đoạn trò chuyện, JPG là lựa chọn an toàn nhất. WebP tốt hơn cho trang web chứ không phải WhatsApp.',
  },
  {
    id: 'wa-faq-13',
    question: 'Tôi có thể nén nhiều ảnh WhatsApp cùng lúc không?',
    answer: 'Tải tất cả ảnh lên CompressMyPic cùng một lúc, áp dụng cùng chế độ cho tất cả rồi tải tất cả về cùng nhau bằng nút «Tải tất cả (ZIP)». Sau đó gửi các tệp từ WhatsApp từng cái một hoặc dưới dạng tài liệu.',
  },
  {
    id: 'wa-faq-14',
    question: 'WhatsApp có nén video giống như vậy không?',
    answer: 'Có, WhatsApp cũng nén video gửi theo cách thông thường, và có thể giảm chúng rất nhiều. CompressMyPic chỉ hoạt động với ảnh (JPG, PNG, WebP), không phải video. Với video, hãy gửi dưới dạng tài liệu để giữ chất lượng gốc.',
  },
  {
    id: 'wa-faq-15',
    question: 'Nén ảnh có xóa ảnh gốc khỏi điện thoại của tôi không?',
    answer: 'Không. CompressMyPic tạo một bản sao mới, nhỏ hơn và tải xuống thiết bị của bạn. Ảnh gốc của bạn vẫn y nguyên trong thư viện, không bị chạm vào.',
  },
  {
    id: 'wa-faq-16',
    question: 'Ảnh của tôi có được gửi tới máy chủ nào khi nén không?',
    answer: 'Không. Mọi quá trình nén đều diễn ra trong chính trình duyệt của bạn trên thiết bị, vì vậy ảnh của bạn không bao giờ được tải lên, lưu trữ hay bị người khác nhìn thấy. Chúng ở trong bộ nhớ trình duyệt và bị xóa khi bạn đóng hoặc tải lại tab.',
  },
  {
    id: 'wa-faq-17',
    question: 'Ảnh cho WhatsApp nên nhỏ đến mức nào?',
    answer: 'Để chia sẻ hằng ngày, 100 đến 300 KB mỗi ảnh là mục tiêu tốt: gửi nhanh, tốn ít dữ liệu di động và vẫn trông sắc nét trên điện thoại. Với ảnh bạn muốn in hay giữ lại, hãy ở gần 500 KB đến 1 MB với mức chất lượng cao hơn.',
  },
  {
    id: 'wa-faq-18',
    question: 'Vì sao ảnh WhatsApp của tôi bị mờ sau khi gửi?',
    answer: 'Vì WhatsApp đã nén lại chúng khi bạn gửi dưới dạng ảnh. Cách khắc phục là tự nén ảnh trước với chất lượng do bạn kiểm soát, rồi gửi dưới dạng tài liệu để WhatsApp không nén lại nữa.',
  },
  {
    id: 'wa-faq-19',
    question: 'Tôi có thể nén ảnh chụp màn hình cho WhatsApp không?',
    answer: 'Có. Tải ảnh chụp màn hình lên CompressMyPic giống như ảnh chụp. Ảnh chụp màn hình nén rất tốt vì có những vùng màu phẳng lớn: hãy thử chế độ Cân bằng trước và chuyển sang đầu ra WebP nếu bạn muốn tệp nhỏ nhất.',
  },
  {
    id: 'wa-faq-20',
    question: 'CompressMyPic có miễn phí cho ảnh WhatsApp không?',
    answer: 'Có, hoàn toàn miễn phí. Không cần đăng ký, không watermark, không giới hạn số ảnh bạn nén và không cần tài khoản. Chỉ cần mở trang web, nén và tải xuống.',
  },
];

export const GuideWhatsAppPageVi: React.FC<GuideWhatsAppPageViProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['wa-faq-1', 'wa-faq-4']));

  useEffect(() => {
    document.title = 'Nén ảnh cho WhatsApp mà không mất chất lượng';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'Học cách nén ảnh cho WhatsApp mà không mất chất lượng. Miễn phí và riêng tư, không cần đăng ký: giảm ảnh trước khi gửi để ảnh đến nơi vẫn sắc nét.');
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = 'https://compressmypic.online/guides/compress-images-for-whatsapp/';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HowTo',
          name: 'Cách nén ảnh cho WhatsApp mà không mất chất lượng',
          description: 'Nén ảnh bằng CompressMyPic rồi gửi qua WhatsApp dưới dạng tài liệu để ảnh luôn sắc nét.',
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
        {
          '@type': 'Article',
          headline: "Nén ảnh cho WhatsApp mà không mất chất lượng",
          description: "Học cách nén ảnh cho WhatsApp mà không mất chất lượng. Miễn phí và riêng tư, không cần đăng ký: giảm ảnh trước khi gửi để ảnh đến nơi vẫn sắc nét.",
          image: 'https://compressmypic.online/og-image.png',
          author: { '@type': 'Person', name: 'Bilal' },
          publisher: {
            '@type': 'Organization',
            name: 'CompressMyPic',
            url: 'https://compressmypic.online/',
            logo: { '@type': 'ImageObject', url: 'https://compressmypic.online/favicon.svg' },
          },
          datePublished: '2026-11-14',
          dateModified: '2026-11-14',
          mainEntityOfPage: "https://compressmypic.online/guides/compress-images-for-whatsapp/",
          inLanguage: 'vi',
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: "Trang chủ", item: "https://compressmypic.online/" },
            { '@type': 'ListItem', position: 2, name: "Hướng dẫn", item: "https://compressmypic.online/" },
            { '@type': 'ListItem', position: 3, name: "Nén ảnh cho WhatsApp mà không mất chất lượng", item: "https://compressmypic.online/guides/compress-images-for-whatsapp/" },
          ],
        },
      ],
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'guide-whatsapp-jsonld';
    script.text = JSON.stringify(jsonLd);
    const prev = document.getElementById('guide-whatsapp-jsonld');
    if (prev) prev.remove();
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
    <div className="bg-[var(--bg)] py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-6">
          <a
            href="/vi/"
            onClick={(e) => { e.preventDefault(); onNavigate('/vi/'); }}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:text-[#b91c1c] dark:hover:text-[#fecaca] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại công cụ nén ảnh</span>
          </a>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-[-0.025em] leading-[1.15]">
            Cách nén ảnh cho WhatsApp mà không mất chất lượng
          </h1>
          <p className="mt-3 text-sm text-[var(--ink-3)]">
            Bởi <a href="/vi/gioi-thieu" onClick={(e) => { e.preventDefault(); onNavigate('/vi/gioi-thieu'); }} className="font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:underline">Bilal</a>
          </p>
          <p className="mt-3 text-lg font-medium text-[var(--ink-2)] leading-relaxed">
            WhatsApp giảm chất lượng mỗi ảnh bạn gửi, thường nhiều hơn mức cần thiết. Hãy tự nén ảnh trước rồi gửi đúng cách: ảnh sẽ đến nơi sắc nét, gửi nhanh và tốn ít dữ liệu di động hơn.
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(7)} flex items-center justify-center shrink-0`}>
                <MessageCircle className="w-4 h-4" />
              </span>
              <span>Vì sao WhatsApp khiến ảnh của bạn bị mờ</span>
            </h2>
            <p>
              Khi bạn gửi ảnh qua WhatsApp theo cách thông thường, WhatsApp nén lại ảnh trước khi chuyển đi. Một ảnh chụp 3 MB có thể đến nơi dưới dạng tệp 100 KB với chi tiết mềm và màu sắc vỡ khối. WhatsApp làm vậy để tiết kiệm dữ liệu và dung lượng, nhưng bạn không thể quyết định chất lượng bị mất bao nhiêu.
            </p>
            <p>
              Có một cách thứ hai để gửi ảnh mà hầu hết mọi người không bao giờ dùng: gửi dưới dạng tài liệu. Tài liệu được chuyển đi nguyên trạng, không nén thêm. Mẹo là tự giảm ảnh trước, với mức chất lượng do bạn kiểm soát, rồi gửi dưới dạng tài liệu. Như vậy bạn vừa có tệp nhỏ vừa có ảnh sắc nét cùng lúc.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Send className="w-4 h-4" />
              </span>
              <span>Từng bước: nén ảnh cho WhatsApp</span>
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
              src="/guides/compress-images-for-whatsapp-1.webp"
              alt="Ảnh chụp màn hình cách tải ảnh lên CompressMyPic trước khi gửi qua WhatsApp"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              Tải ảnh của bạn lên CompressMyPic: kéo ảnh rồi thả vào, hoặc chọn từ thư viện của bạn.
            </figcaption>
          </figure>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(2)} flex items-center justify-center shrink-0`}>
                <Smartphone className="w-4 h-4" />
              </span>
              <span>Tôi nên dùng mức chất lượng nào?</span>
            </h2>
            <p>
              Không có một con số hoàn hảo duy nhất: điều đó phụ thuộc vào ảnh và mục đích của nó. Hãy dùng bảng này làm điểm khởi đầu và kiểm tra phần so sánh trước/sau mỗi lần:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(0)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">Ảnh hằng ngày: 70%</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  Chế độ Cân bằng. Tiết kiệm dung lượng rất nhiều, và ảnh vẫn trông sắc nét trên bất kỳ màn hình điện thoại nào. Lựa chọn mặc định tốt nhất cho WhatsApp.
                </p>
              </div>
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(4)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">Ảnh quan trọng: 80–85%</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  Ảnh gia đình, ảnh du lịch, bất cứ thứ gì bạn muốn giữ lại. Tệp lớn hơn, nhưng các chi tiết nhỏ trên khuôn mặt và phong cảnh được giữ nguyên.
                </p>
              </div>
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(8)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">Gửi nhanh: 50–60%</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  Meme, cập nhật nhanh, ảnh gửi khi dữ liệu di động chậm. Tệp nhỏ hơn nhiều mà vẫn trông đẹp ở kích thước màn hình điện thoại.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-7">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(7)} flex items-center justify-center shrink-0`}>
                <CheckCircle2 className="w-4 h-4" />
              </span>
              <span>Mẹo để có kết quả tốt nhất</span>
            </h2>
            <ul className="space-y-2 list-disc pl-5 text-sm sm:text-base">
              <li>Chỉ nén một lần, và chỉ một lần. Nén lần thứ hai một ảnh đã nén sẽ loại bỏ chi tiết mà gần như không tiết kiệm thêm dung lượng.</li>
              <li>Luôn gửi tệp đã nén dưới dạng tài liệu nếu chất lượng quan trọng: đó là cách duy nhất để ngăn WhatsApp nén lại.</li>
              <li>Nén nhiều ảnh cùng lúc với cùng thiết lập và tải tất cả về bằng nút Tải tất cả (ZIP).</li>
              <li>Với ảnh chụp màn hình và đồ họa có chữ, hãy thử đầu ra WebP: nó giữ viền sắc nét và tạo ra tệp nhỏ hơn JPG.</li>
              <li>Ảnh gốc của bạn không bao giờ bị thay đổi. CompressMyPic lưu một bản sao mới, nhỏ hơn, vì vậy bạn luôn có thể quay lại và thử một mức chất lượng khác.</li>
            </ul>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/compress-images-for-whatsapp-2.webp"
              alt="Ảnh chụp màn hình thanh trượt chất lượng và dung lượng tệp trực tiếp, trước và sau, trong CompressMyPic"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              Kéo thanh trượt chất lượng và xem dung lượng trước/sau cập nhật trực tiếp cho đến khi tệp có dung lượng bạn muốn.
            </figcaption>
          </figure>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-10">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(10)} flex items-center justify-center shrink-0`}>
                <FileWarning className="w-4 h-4" />
              </span>
              <span>Những lỗi thường gặp cần tránh</span>
            </h2>
            <ul className="space-y-2 list-disc pl-5 text-sm sm:text-base">
              <li>Gửi ảnh dưới dạng ảnh sau khi đã nén: WhatsApp sẽ nén nó lần thứ hai và phá hỏng công sức của bạn.</li>
              <li>Giảm chất lượng xuống dưới 40% với ảnh có khuôn mặt: da và các chi tiết nhỏ sẽ vỡ khối rất nhanh ở chất lượng thấp.</li>
              <li>Dùng PNG cho ảnh chụp bằng máy ảnh: tệp PNG lớn hơn nhiều so với JPG đối với ảnh chụp và không mang lại gì thêm trên WhatsApp.</li>
              <li>Quên kiểm tra kết quả: hãy luôn xem phần so sánh trước/sau trước khi gửi, đặc biệt với ảnh có chữ.</li>
            </ul>
          </section>

          {/* FAQ */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Layers className="w-4 h-4" />
              </span>
              <span>Câu hỏi thường gặp</span>
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
                      <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#dc2626] dark:text-[#fca5a5]' : 'text-[var(--ink-3)]'}`} />
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
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">Hướng dẫn liên quan</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="/vi/huong-dan/jpg-vs-png-vs-webp"
                onClick={(e) => { e.preventDefault(); onNavigate('/vi/huong-dan/jpg-vs-png-vs-webp'); }}
                className={`text-left p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(0)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">JPG vs PNG vs WebP: bạn nên dùng định dạng nào?</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">So sánh dung lượng tệp, chất lượng và độ trong suốt để bạn chọn đúng định dạng mỗi lần.</p>
              </a>
              <a
                href="/vi/huong-dan/giam-kich-thuoc-anh-xuong-100kb"
                onClick={(e) => { e.preventDefault(); onNavigate('/vi/huong-dan/giam-kich-thuoc-anh-xuong-100kb'); }}
                className={`text-left p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(2)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">Cách giảm dung lượng ảnh xuống 100 KB cho trang web và email</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">Hướng dẫn từng bước để đạt 100 KB mà không làm hỏng ảnh của bạn.</p>
              </a>
            </div>
          </section>

          <GuideRelatedLinks guide="whatsapp" lang="vi" onNavigate={onNavigate} />

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a
              href="/vi/"
              onClick={(e) => { e.preventDefault(); onNavigate('/vi/'); }}
              className="flex-1 px-5 py-3 rounded-[12px] btn-purple-grad text-sm font-semibold shadow-sm transition-all cursor-pointer"
            >
              Nén ảnh miễn phí
            </a>
            <a
              href="/vi/huong-dan/giam-kich-thuoc-anh-xuong-100kb"
              onClick={(e) => { e.preventDefault(); onNavigate('/vi/huong-dan/giam-kich-thuoc-anh-xuong-100kb'); }}
              className="flex-1 px-5 py-3 rounded-[12px] bg-[var(--surface)] text-[var(--ink-navy)] text-sm font-semibold border border-[var(--line-strong)] shadow-xs hover:border-[#dc2626]/40 hover:bg-[var(--bg-soft)] transition-colors cursor-pointer"
            >
              Giảm ảnh xuống 100 KB
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
