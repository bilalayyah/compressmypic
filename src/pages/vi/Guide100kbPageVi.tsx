import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, Mail, Globe, Target, CheckCircle2, Layers, Gauge } from 'lucide-react';
import { getPastelCardClass, getPastelTileClass } from '../../utils/pastel';

interface Guide100kbPageViProps {
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
    text: 'Truy cập compressmypic.online trong trình duyệt của bạn. Không có gì để cài đặt và không cần tạo tài khoản: công cụ miễn phí, không cần đăng ký và không có watermark.',
  },
  {
    title: 'Tải ảnh của bạn lên',
    text: 'Kéo ảnh rồi thả vào trang, hoặc chạm vào «Duyệt tệp» để chọn ảnh từ thiết bị. Hỗ trợ JPG, PNG và WebP, tối đa 20 MB mỗi ảnh. Bạn có thể tải nhiều ảnh cùng lúc.',
  },
  {
    title: 'Bắt đầu với chế độ Cân bằng',
    text: 'Chế độ Cân bằng đặt chất lượng ở khoảng 70%. Với hầu hết ảnh chụp, mức này đã giảm tệp xuống chỉ còn một phần nhỏ so với dung lượng gốc; hãy xem dung lượng trực tiếp hiển thị bên cạnh ảnh để biết bạn đang ở đâu.',
  },
  {
    title: 'Kéo thanh trượt chất lượng xuống từng bước',
    text: 'Không có ô nhập để bạn gõ «100 KB»: thay vào đó, hãy kéo thanh trượt chất lượng xuống từ từ và xem dung lượng trước/sau cập nhật trực tiếp sau mỗi lần thay đổi. Đi từng bước nhỏ (ví dụ từ 70% xuống 60% rồi 50%) để không đi quá đà và không mất chất lượng nhiều hơn mức cần thiết.',
  },
  {
    title: 'Chuyển sang WebP nếu vẫn trên 100 KB',
    text: 'Nếu tệp vẫn trên 100 KB với chất lượng hợp lý, hãy đổi định dạng đầu ra sang WebP. WebP thường nhỏ hơn JPG từ 25 đến 35% với cùng chất lượng nhìn thấy được, và thường đủ để thu hẹp khoảng cách xuống 100 KB mà không cần giảm thêm chất lượng.',
  },
  {
    title: 'So sánh trước và sau',
    text: 'Mở phần so sánh trước/sau và phóng to vào khuôn mặt, chữ viết và các chi tiết nhỏ. Nếu ảnh vẫn đẹp thì bạn đã xong. Nếu ảnh bị vỡ khối hay nhợt nhạt, hãy tăng chất lượng lên một chút và chấp nhận tệp hơi trên 100 KB: một ảnh sắc nét 120 KB vẫn tốt hơn một ảnh mờ 100 KB.',
  },
  {
    title: 'Tải ảnh của bạn xuống',
    text: 'Chạm vào Tải xuống để lưu tệp nhỏ hơn, hoặc dùng «Tải tất cả (ZIP)» nếu bạn đã giảm nhiều ảnh cùng lúc. Ảnh gốc của bạn không bao giờ bị thay đổi: bạn luôn nhận được một bản sao mới, nhỏ hơn.',
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    id: 'kb-faq-1',
    question: 'Làm thế nào để giảm ảnh của tôi xuống khoảng 100 KB?',
    answer: 'Tải ảnh lên CompressMyPic, bắt đầu với chế độ Cân bằng rồi kéo thanh trượt chất lượng xuống từng bước trong khi xem dung lượng trước/sau trực tiếp. Dừng lại ngay khi dung lượng đã nén gần 100 KB. Nếu vẫn còn trên, hãy đổi định dạng đầu ra sang WebP.',
  },
  {
    id: 'kb-faq-2',
    question: 'Vì sao không có ô để nhập chính xác 100 KB?',
    answer: 'Vì mỗi ảnh nén khác nhau: một bầu trời trong xanh giảm được nhiều hơn nhiều so với một cảnh đông đúc với cùng chất lượng. Một ô «100 KB» cố định sẽ phải đoán mò. Thay vào đó, CompressMyPic hiển thị dung lượng đã nén trực tiếp sau mỗi lần thay đổi, để chính bạn đưa tệp về 100 KB với toàn quyền kiểm soát chất lượng.',
  },
  {
    id: 'kb-faq-3',
    question: 'Mức chất lượng nào cho ra khoảng 100 KB?',
    answer: 'Tùy vào ảnh, nhưng với một ảnh chụp bằng điện thoại thông thường, chất lượng 50 đến 70% thường cho ra gần 100 KB. Một ảnh đơn giản với màu phẳng có thể đạt 100 KB ở mức 70%, trong khi ảnh phong cảnh nhiều chi tiết có thể cần 40 đến 50%. Hãy xem dung lượng trực tiếp: con số đó mới là sự thật, không phải bất kỳ phần trăm cố định nào.',
  },
  {
    id: 'kb-faq-4',
    question: 'Ảnh của tôi vẫn trên 100 KB dù chất lượng đã thấp, tôi phải làm gì?',
    answer: 'Trước tiên hãy đổi định dạng đầu ra sang WebP, thường nhỏ hơn JPG từ 25 đến 35%. Nếu vẫn còn trên, hãy giảm chất lượng thêm một chút và kiểm tra phần so sánh: thường chỉ cần giảm thêm một ít là không nhìn thấy khác biệt. Cuối cùng, một ảnh có kích thước rất lớn có thể cần mức chất lượng thấp hơn bạn nghĩ, vì nhiều điểm ảnh hơn đồng nghĩa với nhiều dữ liệu hơn.',
  },
  {
    id: 'kb-faq-5',
    question: 'Tôi có nên dùng WebP để đạt 100 KB không?',
    answer: 'Có, bất cứ khi nào có thể. WebP là cách dễ nhất để đạt 100 KB mà không phải giảm chất lượng quá nhiều, vì nó tạo ra tệp nhỏ hơn với cùng chất lượng nhìn thấy được như JPG. Hãy dùng WebP cho ảnh trên trang web và ở mọi nơi dùng trình duyệt hiện đại; chỉ dùng JPG khi ảnh cần mở trong phần mềm cũ hoặc chia sẻ qua WhatsApp.',
  },
  {
    id: 'kb-faq-6',
    question: 'Giảm xuống 100 KB có làm ảnh bị mờ không?',
    answer: 'Không, nếu bạn làm cẩn thận. Với 100 KB, một ảnh chụp bằng điện thoại thông thường vẫn trông sắc nét trên màn hình, vì màn hình hiển thị ít điểm ảnh hơn nhiều so với những gì máy ảnh chụp được. Ảnh chỉ bị mờ nếu bạn giảm chất lượng quá thấp (dưới khoảng 40%) hoặc nếu ảnh được in khổ lớn. Hãy luôn kiểm tra phần so sánh trước/sau trước khi tải xuống.',
  },
  {
    id: 'kb-faq-7',
    question: 'Tôi có thể giảm ảnh PNG xuống 100 KB không?',
    answer: 'Có, nhưng ảnh PNG vốn đã lớn ngay từ đầu nên cần nhiều công sức hơn. Tải ảnh PNG lên, kéo thanh trượt chất lượng xuống và đổi đầu ra sang WebP hoặc JPG: chỉ riêng việc đó thường giảm dung lượng hơn một nửa. Chỉ giữ đầu ra PNG khi ảnh cần độ trong suốt, và chấp nhận rằng ảnh PNG trong suốt có thể không đạt được 100 KB.',
  },
  {
    id: 'kb-faq-8',
    question: 'Làm thế nào để ảnh còn 200 KB?',
    answer: 'Dùng cùng phương pháp: tải ảnh lên, bắt đầu với chế độ Cân bằng và kéo thanh trượt chất lượng xuống trong khi xem dung lượng trực tiếp cho đến khi gần 200 KB. Hầu hết ảnh đạt 200 KB dễ dàng với chất lượng 70 đến 80%, nên thường bạn không cần giảm nhiều.',
  },
  {
    id: 'kb-faq-9',
    question: 'Tôi phải làm gì để ảnh còn 50 KB?',
    answer: 'Tải ảnh lên, đổi định dạng đầu ra sang WebP và kéo thanh trượt chất lượng xuống từ từ cho đến khi dung lượng trực tiếp gần 50 KB, thường với chất lượng khoảng 40 đến 55% đối với ảnh chụp. Hãy kiểm tra phần so sánh thật kỹ, vì ở 50 KB các chi tiết nhỏ bắt đầu bị ảnh hưởng; mức này ổn cho ảnh thu nhỏ và trò chuyện, ít phù hợp hơn cho những ảnh bạn muốn giữ lại.',
  },
  {
    id: 'kb-faq-10',
    question: 'Có thể giảm ảnh xuống 20 KB không?',
    answer: 'Hãy dùng đầu ra WebP và mức chất lượng thấp, thường từ 25 đến 40%, và xem dung lượng trực tiếp. 20 KB là rất ít nên hãy chuẩn bị tinh thần thấy ảnh mềm đi rõ rệt: mức này phù hợp cho biểu tượng, ảnh thu nhỏ và ảnh xem trước nhỏ, không phù hợp cho ảnh có khuôn mặt. Nếu ảnh vẫn chưa đạt 20 KB, có lẽ nó có quá nhiều chi tiết cho một tệp nhỏ như vậy.',
  },
  {
    id: 'kb-faq-11',
    question: 'Dung lượng tệp tốt cho ảnh trên trang web là bao nhiêu?',
    answer: 'Hãy nhắm tới dưới 100 KB cho mỗi ảnh nội dung thông thường, và dưới 200 KB cho các ảnh chính lớn. Tệp nhỏ giúp trang tải nhanh hơn, điều mà khách truy cập nhận thấy và Google đánh giá cao. Hãy dùng định dạng WebP và chế độ Cân bằng làm điểm khởi đầu cho ảnh trên trang web.',
  },
  {
    id: 'kb-faq-12',
    question: 'Giới hạn dung lượng tệp đính kèm email là bao nhiêu?',
    answer: 'Hầu hết nhà cung cấp email cho phép 20 đến 25 MB cho mỗi thư, bao gồm tất cả tệp đính kèm; Gmail cho phép 25 MB. Một ảnh đã giảm xuống 100 KB không bao giờ là vấn đề; ngay cả mười ảnh 100 KB cũng chỉ là 1 MB. Nén trước là điều giúp việc gửi nhiều ảnh qua email trở nên dễ dàng.',
  },
  {
    id: 'kb-faq-13',
    question: 'Tôi có thể giảm nhiều ảnh xuống 100 KB cùng lúc không?',
    answer: 'Có. Tải tất cả ảnh lên cùng nhau, áp dụng cùng chế độ và chất lượng cho tất cả, rồi kiểm tra dung lượng trực tiếp của từng ảnh. Nếu một ảnh vẫn trên 100 KB, hãy chỉnh riêng ảnh đó rồi tải tất cả về cùng nhau bằng nút «Tải tất cả (ZIP)».',
  },
  {
    id: 'kb-faq-14',
    question: 'Công cụ có thay đổi kích thước ảnh của tôi không?',
    answer: 'Không. CompressMyPic giữ nguyên kích thước ảnh của bạn: chỉ giảm dung lượng tệp. Ảnh của bạn giữ nguyên chiều rộng, chiều cao và tỉ lệ như bản gốc, vì vậy một ảnh 4000×3000 vẫn là 4000×3000, chỉ với tệp nhỏ hơn nhiều.',
  },
  {
    id: 'kb-faq-15',
    question: 'Làm thế nào để kiểm tra dung lượng ảnh đã nén của tôi?',
    answer: 'CompressMyPic hiển thị dung lượng gốc và dung lượng đã nén của mỗi ảnh, trực tiếp, ngay dưới mỗi ảnh; ví dụ «4,2 MB → 98 KB». Bạn cũng có thể kiểm tra tệp đã tải xuống trên thiết bị của mình: trên điện thoại, hãy xem chi tiết tệp trong thư viện ảnh hoặc trình quản lý tệp.',
  },
  {
    id: 'kb-faq-16',
    question: '100 KB có đủ chất lượng cho trang web không?',
    answer: 'Có, cho hầu hết mọi mục đích trên web. Ảnh trên trang web hiển thị với chiều rộng chỉ vài trăm điểm ảnh, nên một ảnh 100 KB trông sắc nét trên màn hình. Chỉ những ảnh chính toàn màn hình hoặc ảnh dành để in mới cần tệp lớn hơn. Hãy nén xuống 100 KB, kiểm tra phần so sánh và bạn sẽ thấy chất lượng vẫn được giữ nguyên.',
  },
  {
    id: 'kb-faq-17',
    question: 'Tôi có thể giảm ảnh chụp màn hình xuống 100 KB không?',
    answer: 'Có, và ảnh chụp màn hình là trường hợp dễ nhất. Chúng có những vùng màu phẳng lớn nên nén rất tốt: một ảnh chụp màn hình bắt đầu ở 1 MB thường giảm xuống dưới 100 KB với chế độ Cân bằng. Hãy thử đầu ra WebP để có kết quả nhỏ nhất.',
  },
  {
    id: 'kb-faq-18',
    question: 'Ảnh của tôi có rời khỏi thiết bị khi nén không?',
    answer: 'Không. Mọi quá trình nén đều diễn ra trong chính trình duyệt của bạn trên thiết bị, vì vậy ảnh của bạn không bao giờ được tải lên máy chủ, không được lưu trữ và không ai khác nhìn thấy. Chúng ở trong bộ nhớ trình duyệt và bị xóa khi bạn đóng hoặc tải lại tab.',
  },
  {
    id: 'kb-faq-19',
    question: 'Có giới hạn số ảnh tôi có thể giảm không?',
    answer: 'Không. Không có giới hạn về số ảnh bạn có thể nén, và bạn không cần tài khoản hay đăng ký. Giới hạn duy nhất là 20 MB mỗi ảnh, đủ cho ảnh máy ảnh độ phân giải cao và ảnh chụp màn hình lớn.',
  },
  {
    id: 'kb-faq-20',
    question: 'Giảm ảnh xuống 100 KB có miễn phí không?',
    answer: 'Có, hoàn toàn miễn phí. Không có phí, không có gói trả phí, không có tín dụng và không có watermark trên ảnh đã nén của bạn. Hãy mở trang web, giảm ảnh xuống 100 KB và tải xuống bao nhiêu lần tùy thích.',
  },
];

export const Guide100kbPageVi: React.FC<Guide100kbPageViProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['kb-faq-1', 'kb-faq-2']));

  useEffect(() => {
    document.title = 'Cách giảm ảnh xuống 100 KB cho web và email';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'Giảm dung lượng ảnh xuống 100 KB cho trang web và email bằng công cụ nén trực tuyến miễn phí. Hướng dẫn từng bước, không cần đăng ký, không watermark.');
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = 'https://compressmypic.online/guides/reduce-image-size-to-100kb/';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HowTo',
          name: 'Cách giảm dung lượng ảnh xuống 100 KB cho trang web và email',
          description: 'Dùng thanh trượt chất lượng và đầu ra WebP trong CompressMyPic để giảm ảnh xuống khoảng 100 KB.',
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
          headline: "Cách giảm ảnh xuống 100 KB cho web và email",
          description: "Giảm dung lượng ảnh xuống 100 KB cho trang web và email bằng công cụ nén trực tuyến miễn phí. Hướng dẫn từng bước, không cần đăng ký, không watermark.",
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
          mainEntityOfPage: "https://compressmypic.online/guides/reduce-image-size-to-100kb/",
          inLanguage: 'vi',
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: "Trang chủ", item: "https://compressmypic.online/" },
            { '@type': 'ListItem', position: 2, name: "Hướng dẫn", item: "https://compressmypic.online/" },
            { '@type': 'ListItem', position: 3, name: "Cách giảm ảnh xuống 100 KB cho web và email", item: "https://compressmypic.online/guides/reduce-image-size-to-100kb/" },
          ],
        },
      ],
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'guide-100kb-jsonld';
    script.text = JSON.stringify(jsonLd);
    const prev = document.getElementById('guide-100kb-jsonld');
    if (prev) prev.remove();
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
            onClick={() => onNavigate('/vi/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:text-[#b91c1c] dark:hover:text-[#fecaca] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại công cụ nén ảnh</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-[-0.025em] leading-[1.15]">
            Cách giảm dung lượng ảnh xuống 100 KB cho trang web và email
          </h1>
          <p className="mt-3 text-sm text-[var(--ink-3)]">
            Bởi <a href="/vi/gioi-thieu" onClick={(e) => { e.preventDefault(); onNavigate('/vi/gioi-thieu'); }} className="font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:underline">Bilal</a>
          </p>
          <p className="mt-3 text-lg font-medium text-[var(--ink-2)] leading-relaxed">
            Một ảnh 4 MB khiến trang web của bạn tải chậm và làm tắc email. Giảm ảnh xuống khoảng 100 KB giúp trang tải nhanh và email gửi đi ngay lập tức, và nếu bạn làm đúng cách, không ai nhận ra khác biệt.
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Target className="w-4 h-4" />
              </span>
              <span>Vì sao 100 KB là con số kỳ diệu</span>
            </h2>
            <p>
              100 KB là dung lượng mà hầu hết mọi người tìm kiếm vì nó nằm ở điểm lý tưởng: đủ nhỏ để tải ngay lập tức trên trang web hay vừa trong bất kỳ email nào, nhưng vẫn đủ lớn để trông sắc nét trên màn hình. Một ảnh chụp bằng điện thoại thông thường bắt đầu ở mức 3 đến 5 MB, vì vậy đạt 100 KB nghĩa là loại bỏ khoảng 97% tệp, và công nghệ nén hiện đại làm được điều đó chủ yếu bằng cách loại bỏ những dữ liệu mà mắt bạn không nhìn thấy.
            </p>
            <p>
              Một lưu ý thẳng thắn trước khi bắt đầu: CompressMyPic không có ô nhập để bạn gõ «100 KB» rồi nhận đúng dung lượng đó. Không công cụ trung thực nào có thể hứa hẹn một con số chính xác, vì mỗi ảnh nén khác nhau. Thay vào đó, công cụ hiển thị dung lượng đã nén trực tiếp sau mỗi lần thay đổi, và chính bạn đưa nó về 100 KB bằng thanh trượt chất lượng. Hướng dẫn này chỉ cho bạn chính xác cách làm.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(2)} flex items-center justify-center shrink-0`}>
                <Gauge className="w-4 h-4" />
              </span>
              <span>Từng bước: giảm ảnh xuống 100 KB</span>
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
              src="/guides/reduce-image-size-to-100kb-1.webp"
              alt="Ảnh chụp màn hình cách tải một ảnh lớn lên CompressMyPic để giảm xuống 100 KB"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              Tải ảnh của bạn lên: dung lượng gốc hiển thị ngay lập tức, để bạn biết mình cần giảm bao nhiêu.
            </figcaption>
          </figure>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(4)} flex items-center justify-center shrink-0`}>
                <Globe className="w-4 h-4" />
              </span>
              <span>Các mục tiêu thường gặp trong nháy mắt</span>
            </h2>
            <p>
              100 KB không phải là mục tiêu duy nhất mọi người cần. Cùng một phương pháp áp dụng cho mọi dung lượng; đây là những gì bạn có thể mong đợi ở từng mức:
            </p>
            <div className="overflow-x-auto pt-1">
              <table className="w-full text-sm border border-[var(--line)] rounded-2xl overflow-hidden bg-[var(--surface)] shadow-[var(--shadow)]">
                <thead>
                  <tr className="bg-[var(--bg-soft)] text-[var(--ink-navy)] text-left border-b border-[var(--line)]">
                    <th className="px-4 py-3 font-semibold">Mục tiêu</th>
                    <th className="px-4 py-3 font-semibold">Chất lượng thường gặp</th>
                    <th className="px-4 py-3 font-semibold">Phù hợp cho</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--line)]">
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#dc2626] dark:text-[#fca5a5]">200 KB</td>
                    <td className="px-4 py-3">70–80%</td>
                    <td className="px-4 py-3">Ảnh blog, ảnh web lớn</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#dc2626] dark:text-[#fca5a5]">100 KB</td>
                    <td className="px-4 py-3">50–70%</td>
                    <td className="px-4 py-3">Ảnh trên trang web, tệp đính kèm email</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#dc2626] dark:text-[#fca5a5]">50 KB</td>
                    <td className="px-4 py-3">40–55% + WebP</td>
                    <td className="px-4 py-3">Ảnh thu nhỏ, trò chuyện, trang nhanh</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#dc2626] dark:text-[#fca5a5]">20 KB</td>
                    <td className="px-4 py-3">25–40% + WebP</td>
                    <td className="px-4 py-3">Biểu tượng, ảnh xem trước nhỏ</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm">
              Đây là các điểm khởi đầu, không phải lời hứa. Một ảnh đơn giản dễ dàng đạt 100 KB; một ảnh nhiều chi tiết cần mức chất lượng thấp hơn. Hãy tin vào con số dung lượng trực tiếp, không phải phần trăm.
            </p>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-2">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(6)} flex items-center justify-center shrink-0`}>
                <Mail className="w-4 h-4" />
              </span>
              <span>Mẹo cho trang web và email</span>
            </h2>
            <ul className="space-y-2 list-disc pl-5 text-sm sm:text-base">
              <li>Đối với trang web, hãy dùng đầu ra WebP: đó là cách nhanh nhất để đạt 100 KB và mọi trình duyệt hiện đại đều hỗ trợ.</li>
              <li>Đối với email, JPG là định dạng an toàn nhất vì mọi ứng dụng email đều mở được. Một ảnh JPG 100 KB đính kèm ngay lập tức và không bao giờ bị trả lại vì quá lớn.</li>
              <li>Nén tất cả ảnh của một trang hay một email cùng nhau rồi tải tất cả về bằng nút Tải tất cả (ZIP).</li>
              <li>Đừng đuổi theo con số 100 KB chính xác. Một ảnh sắc nét 115 KB vẫn tốt hơn một ảnh mờ đúng 100 KB: khác biệt về thời gian tải là không đáng kể.</li>
              <li>Hãy luôn kiểm tra phần so sánh trước/sau ở mức phóng to tối đa trước khi đăng hay gửi ảnh.</li>
            </ul>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/reduce-image-size-to-100kb-2.webp"
              alt="Ảnh chụp màn hình dung lượng tệp trực tiếp, trước và sau, cho thấy một ảnh đã giảm xuống khoảng 100 KB"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              Dung lượng trước/sau trực tiếp cho thấy tiến độ của bạn: kéo thanh trượt xuống cho đến khi dung lượng đã nén gần 100 KB.
            </figcaption>
          </figure>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-7">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(7)} flex items-center justify-center shrink-0`}>
                <CheckCircle2 className="w-4 h-4" />
              </span>
              <span>Khi 100 KB là không thể</span>
            </h2>
            <p className="text-sm sm:text-base">
              Một số ảnh đơn giản không thể đạt 100 KB mà vẫn đẹp: một ảnh rất lớn và nhiều chi tiết, hay một ảnh PNG trong suốt mà vẫn phải là PNG. Trong trường hợp đó, đừng cố ép. Một ảnh sắc nét 180 KB vẫn tốt hơn một ảnh hỏng 100 KB trong mọi trường hợp: với trang web nó vẫn tải nhanh và với email nó vẫn nằm dưới mọi giới hạn tệp đính kèm. Mục tiêu là một tệp nhỏ mà vẫn đẹp, không phải một con số kỳ diệu.
            </p>
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
              <button
                type="button"
                onClick={() => onNavigate('/vi/huong-dan/nen-anh-cho-whatsapp')}
                className={`text-left p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(0)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">Cách nén ảnh cho WhatsApp mà không mất chất lượng</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">Hãy tự giảm ảnh trước rồi gửi dưới dạng tài liệu để WhatsApp không thể làm mờ ảnh của bạn.</p>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/vi/huong-dan/jpg-vs-png-vs-webp')}
                className={`text-left p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(2)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">JPG vs PNG vs WebP: bạn nên dùng định dạng nào?</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">So sánh dung lượng tệp, chất lượng và độ trong suốt để bạn chọn đúng định dạng mỗi lần.</p>
              </button>
            </div>
          </section>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/vi/')}
              className="flex-1 px-5 py-3 rounded-[12px] btn-purple-grad text-sm font-semibold shadow-sm transition-all cursor-pointer"
            >
              Nén ảnh miễn phí
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/vi/huong-dan/jpg-vs-png-vs-webp')}
              className="flex-1 px-5 py-3 rounded-[12px] bg-[var(--surface)] text-[var(--ink-navy)] text-sm font-semibold border border-[var(--line-strong)] shadow-xs hover:border-[#dc2626]/40 hover:bg-[var(--bg-soft)] transition-colors cursor-pointer"
            >
              JPG vs PNG vs WebP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
