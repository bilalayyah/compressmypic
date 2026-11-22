import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, FileImage, Camera, Layers, Globe, CheckCircle2, Scale } from 'lucide-react';
import { getPastelCardClass, getPastelTileClass } from '../../utils/pastel';
import { GuideRelatedLinks } from '../../components/GuideRelatedLinks';

interface GuideFormatsPageViProps {
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
    text: 'Truy cập compressmypic.online trong trình duyệt của bạn. Không có gì để cài đặt, không cần tạo tài khoản và không tệp nào được tải lên máy chủ.',
  },
  {
    title: 'Tải ảnh của bạn lên',
    text: 'Kéo ảnh rồi thả vào, hoặc chạm vào «Duyệt tệp» để chọn ảnh. Hỗ trợ các tệp JPG, PNG và WebP, tối đa 20 MB mỗi ảnh.',
  },
  {
    title: 'Quyết định: giữ nguyên định dạng hay chuyển đổi',
    text: 'Chọn «Gốc» để giữ định dạng mà ảnh của bạn đã có, hoặc chọn JPG, PNG hay WebP làm đầu ra. Hãy dùng hướng dẫn bên dưới để quyết định: JPG cho ảnh chụp, PNG khi cần độ trong suốt, WebP khi muốn tệp nhỏ nhất cho trang web.',
  },
  {
    title: 'Chọn một chế độ chất lượng',
    text: 'Bắt đầu với chế độ Cân bằng (khoảng 70%). Với ảnh chụp mà bạn muốn trông thật hoàn hảo, hãy dùng chế độ Cao hoặc chất lượng 85 đến 90%. Với ảnh web nhỏ, mức thấp hơn cũng ổn.',
  },
  {
    title: 'Kiểm tra dung lượng trực tiếp và so sánh',
    text: 'Mỗi ảnh hiển thị dung lượng gốc và dung lượng đã nén mới của nó. Mở phần so sánh trước/sau và phóng to: nếu bạn không thấy khác biệt thì mức đó là đúng. Hãy thử đổi định dạng đầu ra sang WebP và xem tệp nhỏ đi bao nhiêu.',
  },
  {
    title: 'Tải ảnh của bạn xuống',
    text: 'Tải từng ảnh về, hoặc dùng «Tải tất cả (ZIP)» khi bạn đã chuyển đổi nhiều ảnh cùng lúc. Tệp gốc của bạn không bao giờ bị thay đổi: bạn nhận được một bản sao mới, nhỏ hơn.',
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    id: 'fmt-faq-1',
    question: 'JPG và PNG khác nhau như thế nào?',
    answer: 'JPG là định dạng có hao hụt dành cho ảnh chụp: nó loại bỏ một số chi tiết để tạo ra tệp nhỏ hơn nhiều và không hỗ trợ độ trong suốt. PNG không hao hụt và hỗ trợ độ trong suốt, nên hoàn hảo cho logo và đồ họa, nhưng ảnh chụp ở dạng PNG lớn hơn vài lần so với cùng ảnh đó lưu dưới dạng JPG.',
  },
  {
    id: 'fmt-faq-2',
    question: 'WebP có tốt hơn JPG không?',
    answer: 'Về dung lượng tệp thì có: WebP thường nhỏ hơn JPG từ 25 đến 35% với chất lượng tương đương, và cũng hỗ trợ độ trong suốt. Lý do duy nhất để chọn JPG thay vì WebP là khả năng tương thích: một số phần mềm cũ và một số ứng dụng vẫn xử lý JPG tốt hơn, và WhatsApp hiển thị ảnh JPG đáng tin cậy hơn.',
  },
  {
    id: 'fmt-faq-3',
    question: 'WebP có tốt hơn PNG không?',
    answer: 'Nhìn chung là có. WebP hỗ trợ độ trong suốt như PNG, nhưng tạo ra tệp nhỏ hơn nhiều, và cũng có thể nén có hao hụt như JPG. PNG vẫn là lựa chọn an toàn nhất khi bạn cần chất lượng hoàn hảo, không hao hụt cho một logo hay đồ họa sẽ được chỉnh sửa lại sau này.',
  },
  {
    id: 'fmt-faq-4',
    question: 'PNG có hỗ trợ độ trong suốt còn JPG thì không, đúng không?',
    answer: 'Đúng vậy. PNG hỗ trợ nền trong suốt (kênh alpha), vì vậy logo và biểu tượng thường là PNG. JPG hoàn toàn không có độ trong suốt: bất kỳ vùng trong suốt nào trong ảnh JPG cũng trở thành màu đặc, thường là màu trắng, vì vậy đừng bao giờ lưu logo có nền trong suốt dưới dạng JPG.',
  },
  {
    id: 'fmt-faq-5',
    question: 'Vì sao tệp PNG lớn hơn nhiều so với JPG?',
    answer: 'Vì PNG không hao hụt: nó giữ nguyên từng điểm ảnh chi tiết một cách chính xác, trong khi JPG loại bỏ những chi tiết mà mắt khó nhận ra. Một ảnh chụp bằng máy ảnh lưu dưới dạng PNG có thể lớn gấp 5 đến 10 lần so với cùng ảnh đó dưới dạng JPG. Vì vậy ảnh chụp gần như không bao giờ nên là PNG.',
  },
  {
    id: 'fmt-faq-6',
    question: 'Khi nào tôi nên dùng JPG thay vì WebP?',
    answer: 'Hãy dùng JPG khi ảnh sẽ được mở trong phần mềm cũ, gửi qua WhatsApp hay email và bạn muốn bản xem trước chắc chắn hiển thị, hoặc khi in ảnh. WebP tốt hơn cho trang web, nhưng để chia sẻ ảnh với ai đó, JPG vẫn là định dạng phổ biến nhất.',
  },
  {
    id: 'fmt-faq-7',
    question: 'Tôi có thể chuyển PNG sang JPG không?',
    answer: 'Có. Tải ảnh PNG lên CompressMyPic, chọn JPG làm định dạng đầu ra rồi tải xuống. Chỉ cần nhớ rằng JPG không có độ trong suốt: nếu ảnh PNG của bạn có nền trong suốt, hãy chọn trước một màu nền, vì vùng trong suốt sẽ trở thành màu trắng đặc nếu không làm vậy.',
  },
  {
    id: 'fmt-faq-8',
    question: 'Tôi có thể chuyển JPG sang WebP không?',
    answer: 'Có. Tải ảnh JPG lên, chọn WebP làm đầu ra rồi tải xuống: tệp thường nhỏ hơn từ 25 đến 35% với cùng chất lượng nhìn thấy được. Bạn có thể chuyển nhiều ảnh JPG sang WebP cùng lúc và tải tất cả về dưới dạng ZIP.',
  },
  {
    id: 'fmt-faq-9',
    question: 'Chuyển JPG sang PNG có cải thiện chất lượng không?',
    answer: 'Không. Chuyển ảnh JPG sang PNG không thể khôi phục những chi tiết mà quá trình nén JPG đã loại bỏ; nó chỉ làm tệp lớn hơn nhiều. Lý do tốt duy nhất để chuyển JPG sang PNG là khi bạn cần chỉnh sửa ảnh lại mà không mất thêm chất lượng.',
  },
  {
    id: 'fmt-faq-10',
    question: 'Tôi nên dùng định dạng nào cho trang web?',
    answer: 'WebP trước, JPG làm phương án dự phòng. WebP cho bạn những tệp nhỏ nhất, giúp trang tải nhanh hơn, và tốc độ trang quan trọng cả với khách truy cập lẫn Google. Chỉ dùng PNG cho những ảnh cần độ trong suốt, như logo, và dùng JPG cho ảnh chụp nếu bạn không thể dùng WebP.',
  },
  {
    id: 'fmt-faq-11',
    question: 'Định dạng nào tốt nhất cho logo?',
    answer: 'PNG nếu logo cần nền trong suốt, vì JPG không hỗ trợ độ trong suốt. WebP cũng hỗ trợ độ trong suốt và tạo ra tệp nhỏ hơn, nên là lựa chọn tốt cho logo trên trang web. Đừng bao giờ lưu logo dưới dạng JPG nếu nền cần giữ trong suốt.',
  },
  {
    id: 'fmt-faq-12',
    question: 'Định dạng nào tốt nhất cho ảnh chụp màn hình?',
    answer: 'PNG hoặc WebP. Ảnh chụp màn hình có viền sắc nét và màu phẳng, mà PNG và WebP xử lý tốt. JPG làm mờ các viền sắc nét của chữ. Để có tệp ảnh chụp màn hình nhỏ nhất, hãy thử đầu ra WebP trong CompressMyPic: nó thường nhỏ hơn nhiều so với PNG mà không có khác biệt nhìn thấy được.',
  },
  {
    id: 'fmt-faq-13',
    question: 'Mọi trình duyệt có hỗ trợ WebP rồi không?',
    answer: 'Có, gần như mọi trình duyệt đều hỗ trợ. Chrome, Edge, Firefox, Safari và mọi trình duyệt di động hiện đại đã hỗ trợ WebP nhiều năm nay. Chỉ các trình duyệt rất cũ và một số ứng dụng cũ không mở được WebP, và đó là lý do duy nhất khiến JPG vẫn còn hữu ích.',
  },
  {
    id: 'fmt-faq-14',
    question: 'WhatsApp hay Instagram có chấp nhận WebP không?',
    answer: 'WhatsApp có thể nhận tệp WebP, nhưng chúng có thể không hiển thị như một ảnh bình thường, vì vậy JPG an toàn hơn để chia sẻ ảnh ở đó. Instagram chấp nhận JPG và PNG cho bài đăng và tự chuyển đổi các tệp tải lên. Để chia sẻ trên mạng xã hội, hãy dùng JPG cho ảnh chụp.',
  },
  {
    id: 'fmt-faq-15',
    question: 'Chuyển ảnh sang WebP có làm mất chất lượng không?',
    answer: 'Chỉ mất nhiều như bạn chọn. WebP dùng cùng ý tưởng như JPG: một mức chất lượng đánh đổi một chút chi tiết lấy tệp nhỏ hơn. Với chất lượng 80 đến 90%, một ảnh WebP trông giống hệt ảnh JPG gốc và tệp nhỏ hơn khoảng một phần ba.',
  },
  {
    id: 'fmt-faq-16',
    question: 'JPG và JPEG có phải là cùng một định dạng không?',
    answer: 'Không có khác biệt nào: JPG và JPEG là cùng một định dạng. JPEG là tên đầy đủ (Joint Photographic Experts Group) còn JPG là phần mở rộng tệp ngắn. Một tệp tên là anh.jpg và một tệp tên là anh.jpeg là cùng một loại ảnh.',
  },
  {
    id: 'fmt-faq-17',
    question: 'Tôi nên giữ định dạng gốc hay chuyển đổi?',
    answer: 'Hãy giữ nguyên bản gốc nếu bạn hài lòng với dung lượng: đó là lựa chọn đơn giản nhất và không mất gì. Hãy chuyển đổi khi bạn có lý do: từ JPG sang WebP để giảm ảnh trên trang web, từ PNG sang JPG để giảm ảnh không cần độ trong suốt, hoặc từ PNG sang WebP để giảm logo.',
  },
  {
    id: 'fmt-faq-18',
    question: 'Định dạng nào cho tệp nhỏ nhất?',
    answer: 'WebP, trong gần như mọi trường hợp. Với ảnh chụp, WebP thường nhỏ hơn JPG từ 25 đến 35% với cùng chất lượng nhìn thấy được. Với đồ họa có độ trong suốt, WebP thường nhỏ hơn nhiều so với PNG. Vì vậy WebP là định dạng tốt nhất cho trang web.',
  },
  {
    id: 'fmt-faq-19',
    question: 'CompressMyPic có chuyển đổi giữa JPG, PNG và WebP không?',
    answer: 'Có. Tải lên một ảnh JPG, PNG hoặc WebP, chọn định dạng đầu ra bạn muốn — gốc, JPG, PNG hoặc WebP — rồi tải tệp đã chuyển đổi xuống. Bạn có thể chuyển đổi nhiều ảnh cùng lúc với cùng thiết lập và tải tất cả về dưới dạng ZIP.',
  },
  {
    id: 'fmt-faq-20',
    question: 'Điều gì xảy ra với độ trong suốt nếu tôi chuyển PNG sang JPG?',
    answer: 'Nó sẽ bị mất. JPG không thể lưu độ trong suốt, vì vậy các phần trong suốt của ảnh PNG sẽ trở thành màu đặc. CompressMyPic cho phép bạn chọn một màu nền để lấp đầy các vùng đó, vì vậy hãy chọn màu hợp với nơi ảnh sẽ được dùng; màu trắng là lựa chọn thường gặp.',
  },
];

export const GuideFormatsPageVi: React.FC<GuideFormatsPageViProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['fmt-faq-1', 'fmt-faq-10']));

  useEffect(() => {
    document.title = 'JPG vs PNG vs WebP: bạn nên dùng định dạng nào?';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'JPG vs PNG vs WebP được giải thích đơn giản: so sánh dung lượng, chất lượng và độ trong suốt để chọn định dạng phù hợp cho ảnh chụp, logo và trang web của bạn.');
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = 'https://compressmypic.online/guides/jpg-vs-png-vs-webp/';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HowTo',
          name: 'Cách chọn giữa JPG, PNG và WebP và chuyển đổi ảnh',
          description: 'So sánh JPG, PNG và WebP rồi nén hoặc chuyển đổi ảnh của bạn bằng CompressMyPic.',
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
          headline: "JPG vs PNG vs WebP: bạn nên dùng định dạng nào?",
          description: "JPG vs PNG vs WebP được giải thích đơn giản: so sánh dung lượng, chất lượng và độ trong suốt để chọn định dạng phù hợp cho ảnh chụp, logo và trang web của bạn.",
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
          mainEntityOfPage: "https://compressmypic.online/guides/jpg-vs-png-vs-webp/",
          inLanguage: 'vi',
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: "Trang chủ", item: "https://compressmypic.online/" },
            { '@type': 'ListItem', position: 2, name: "Hướng dẫn", item: "https://compressmypic.online/" },
            { '@type': 'ListItem', position: 3, name: "JPG vs PNG vs WebP: bạn nên dùng định dạng nào?", item: "https://compressmypic.online/guides/jpg-vs-png-vs-webp/" },
          ],
        },
      ],
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'guide-formats-jsonld';
    script.text = JSON.stringify(jsonLd);
    const prev = document.getElementById('guide-formats-jsonld');
    if (prev) prev.remove();
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
            JPG vs PNG vs WebP: bạn nên dùng định dạng nào?
          </h1>
          <p className="mt-3 text-sm text-[var(--ink-3)]">
            Bởi <a href="/vi/gioi-thieu" onClick={(e) => { e.preventDefault(); onNavigate('/vi/gioi-thieu'); }} className="font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:underline">Bilal</a>
          </p>
          <p className="mt-3 text-lg font-medium text-[var(--ink-2)] leading-relaxed">
            Chọn sai định dạng có thể khiến ảnh của bạn lớn gấp mười lần mức cần thiết, hoặc làm hỏng một logo trong suốt. Đây là bảng so sánh đơn giản và trung thực, cùng cách chuyển đổi giữa các định dạng trong vài giây.
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Scale className="w-4 h-4" />
              </span>
              <span>Câu trả lời ngắn gọn</span>
            </h2>
            <p>
              Nếu bạn chỉ nhớ một điều, hãy nhớ điều này: dùng JPG cho ảnh chụp, PNG cho logo và mọi thứ cần độ trong suốt, và WebP khi bạn muốn tệp nhỏ nhất, đặc biệt trên trang web. Bảng dưới đây cho thấy vì sao.
            </p>
            <div className="overflow-x-auto pt-1">
              <table className="w-full text-sm border border-[var(--line)] rounded-2xl overflow-hidden bg-[var(--surface)] shadow-[var(--shadow)]">
                <thead>
                  <tr className="bg-[var(--bg-soft)] text-[var(--ink-navy)] text-left border-b border-[var(--line)]">
                    <th className="px-4 py-3 font-semibold">Định dạng</th>
                    <th className="px-4 py-3 font-semibold">Dung lượng tệp</th>
                    <th className="px-4 py-3 font-semibold">Độ trong suốt</th>
                    <th className="px-4 py-3 font-semibold">Phù hợp cho</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--line)]">
                  <tr>
                    <td className="px-4 py-3 font-bold text-[#dc2626] dark:text-[#fca5a5]">JPG</td>
                    <td className="px-4 py-3">Nhỏ</td>
                    <td className="px-4 py-3">Không</td>
                    <td className="px-4 py-3">Ảnh chụp, chia sẻ, in ấn</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-[#dc2626] dark:text-[#fca5a5]">PNG</td>
                    <td className="px-4 py-3">Lớn</td>
                    <td className="px-4 py-3">Có</td>
                    <td className="px-4 py-3">Logo, biểu tượng, ảnh chụp màn hình</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-[#dc2626] dark:text-[#fca5a5]">WebP</td>
                    <td className="px-4 py-3">Nhỏ nhất</td>
                    <td className="px-4 py-3">Có</td>
                    <td className="px-4 py-3">Trang web, ảnh trên web</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-2">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(2)} flex items-center justify-center shrink-0`}>
                <Camera className="w-4 h-4" />
              </span>
              <span>JPG: tốt nhất cho ảnh chụp</span>
            </h2>
            <p className="text-sm sm:text-base">
              JPG (còn viết là JPEG) là định dạng cổ điển cho ảnh chụp. Nó dùng nén có hao hụt: loại bỏ những chi tiết nhỏ mà mắt bạn khó nhận ra, giúp tệp nhỏ hơn nhiều. Một ảnh chụp 5 MB có thể trở thành 500 KB dưới dạng JPG mà vẫn trông rất đẹp. JPG không hỗ trợ độ trong suốt, nên đó là lựa chọn sai cho logo, nhưng với bất kỳ ảnh chụp thông thường nào, đây là lựa chọn an toàn và phổ biến mà mọi thiết bị và ứng dụng đều mở được.
            </p>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-6">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(6)} flex items-center justify-center shrink-0`}>
                <Layers className="w-4 h-4" />
              </span>
              <span>PNG: tốt nhất cho logo và độ trong suốt</span>
            </h2>
            <p className="text-sm sm:text-base">
              PNG không hao hụt: nó giữ nguyên từng điểm ảnh một cách chính xác và hỗ trợ nền trong suốt. Điều đó khiến nó trở thành định dạng phù hợp cho logo, biểu tượng và đồ họa có chữ. Cái giá phải trả là dung lượng tệp: một ảnh chụp lưu dưới dạng PNG có thể lớn gấp 5 đến 10 lần so với cùng ảnh đó dưới dạng JPG. Đừng bao giờ lưu ảnh chụp bằng máy ảnh dưới dạng PNG trừ khi bạn có lý do cụ thể.
            </p>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-0">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Globe className="w-4 h-4" />
              </span>
              <span>WebP: tốt nhất cho trang web</span>
            </h2>
            <p className="text-sm sm:text-base">
              WebP là định dạng hiện đại do Google tạo ra. Nó làm được tất cả: nén có hao hụt như JPG, độ trong suốt như PNG, và tệp thường nhỏ hơn JPG từ 25 đến 35% với cùng chất lượng nhìn thấy được. Mọi trình duyệt hiện đại đều hỗ trợ nó, vì vậy đây là định dạng tốt nhất cho ảnh trên trang web. Điểm yếu duy nhất của nó là khả năng tương thích với phần mềm cũ, và với bản xem trước trên WhatsApp, nơi JPG vẫn an toàn hơn.
            </p>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/jpg-vs-png-vs-webp-1.webp"
              alt="Ảnh chụp màn hình so sánh cùng một ảnh lưu dưới dạng JPG, PNG và WebP với dung lượng tệp của chúng"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              Cùng một ảnh ở ba định dạng: WebP nhỏ nhất, PNG lớn nhất và JPG ở giữa.
            </figcaption>
          </figure>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(4)} flex items-center justify-center shrink-0`}>
                <FileImage className="w-4 h-4" />
              </span>
              <span>Từng bước: nén hoặc chuyển đổi ảnh của bạn</span>
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

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(7)} flex items-center justify-center shrink-0`}>
                <CheckCircle2 className="w-4 h-4" />
              </span>
              <span>Định dạng nào cho từng việc?</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(0)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">Ảnh chụp bằng máy ảnh: JPG hoặc WebP</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  JPG để chia sẻ và in ấn, WebP cho trang web của bạn. Cả hai đều giữ ảnh trông rất đẹp với chỉ một phần nhỏ dung lượng gốc.
                </p>
              </div>
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(3)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">Logo và biểu tượng: PNG hoặc WebP</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  Cần độ trong suốt nên JPG bị loại. PNG là lựa chọn cổ điển an toàn; WebP nhỏ hơn và hoạt động ở mọi nơi hiện đại.
                </p>
              </div>
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(6)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">Ảnh chụp màn hình: WebP hoặc PNG</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  Chữ sắc nét và màu phẳng hợp với WebP và PNG. JPG làm mờ viền chữ, vì vậy hãy tránh dùng JPG cho ảnh chụp màn hình.
                </p>
              </div>
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(9)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">Ảnh trên trang web: WebP</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  Tệp nhỏ hơn đồng nghĩa với trang nhanh hơn. Hãy chuyển ảnh trên trang web của bạn sang WebP và giữ JPG làm phương án dự phòng cho các trình duyệt rất cũ.
                </p>
              </div>
            </div>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/jpg-vs-png-vs-webp-2.webp"
              alt="Ảnh chụp màn hình cách chọn định dạng đầu ra JPG, PNG hoặc WebP trong CompressMyPic"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              Chọn định dạng đầu ra trong CompressMyPic: giữ nguyên bản gốc hoặc chuyển sang JPG, PNG hay WebP.
            </figcaption>
          </figure>

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
                href="/vi/huong-dan/nen-anh-cho-whatsapp"
                onClick={(e) => { e.preventDefault(); onNavigate('/vi/huong-dan/nen-anh-cho-whatsapp'); }}
                className={`text-left p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(0)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">Cách nén ảnh cho WhatsApp mà không mất chất lượng</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">Hãy tự giảm ảnh trước rồi gửi dưới dạng tài liệu để WhatsApp không thể làm mờ ảnh của bạn.</p>
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

          <GuideRelatedLinks guide="formats" lang="vi" onNavigate={onNavigate} />

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a
              href="/vi/"
              onClick={(e) => { e.preventDefault(); onNavigate('/vi/'); }}
              className="flex-1 px-5 py-3 rounded-[12px] btn-purple-grad text-sm font-semibold shadow-sm transition-all cursor-pointer"
            >
              Nén ảnh miễn phí
            </a>
            <a
              href="/vi/huong-dan/nen-anh-cho-whatsapp"
              onClick={(e) => { e.preventDefault(); onNavigate('/vi/huong-dan/nen-anh-cho-whatsapp'); }}
              className="flex-1 px-5 py-3 rounded-[12px] bg-[var(--surface)] text-[var(--ink-navy)] text-sm font-semibold border border-[var(--line-strong)] shadow-xs hover:border-[#dc2626]/40 hover:bg-[var(--bg-soft)] transition-colors cursor-pointer"
            >
              Nén ảnh cho WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
