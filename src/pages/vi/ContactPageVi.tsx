import React, { useState, useEffect } from 'react';
import { ArrowLeft, Send, CheckCircle2, AlertCircle, Mail, RotateCcw, Clock, ShieldCheck, Github, MessageSquare, Lightbulb, Bug } from 'lucide-react';

interface ContactPageViProps {
  onNavigate: (path: string) => void;
}

export const ContactPageVi: React.FC<ContactPageViProps> = ({ onNavigate }) => {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactSubject, setContactSubject] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Liên hệ - CompressMyPic';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/bilalayyah@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: contactName,
          email: contactEmail,
          subject: contactSubject || 'CompressMyPic Contact Inquiry',
          message: contactMessage,
          _subject: `New inquiry from ${contactName}: ${contactSubject || 'CompressMyPic'}`,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setContactName('');
        setContactEmail('');
        setContactSubject('');
        setContactMessage('');
      } else {
        const data = await response.json().catch(() => null);
        throw new Error(data?.message || 'Không thể gửi tin nhắn. Vui lòng thử lại.');
      }
    } catch (err) {
      console.error('FormSubmit error:', err);
      setErrorMessage(
        err instanceof Error ? err.message : 'Lỗi mạng. Hãy thử gửi trực tiếp tới bilalayyah@gmail.com.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-6">
          <button
            type="button"
            onClick={() => onNavigate('/vi/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:text-[#b91c1c] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại công cụ nén ảnh</span>
          </button>
        </div>

        {/* Page Header */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
            Liên hệ với chúng tôi
          </h1>
          <p className="mt-3 text-base text-[var(--ink-2)] leading-relaxed">
            Bạn có câu hỏi, góp ý hay cần trợ giúp? Hãy viết cho đội ngũ của chúng tôi qua biểu mẫu bên dưới hoặc liên hệ trực tiếp qua email.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information Sidebar */}
          <div className="space-y-6 md:col-span-1">
            <div className="p-4 rounded-2xl border pastel-card-0 shadow-[var(--shadow)] space-y-2">
              <div className="flex items-center gap-2 text-[var(--ink-navy)] font-bold text-sm">
                <Mail className="w-4 h-4 text-[#dc2626] dark:text-[#f87171]" />
                <span>Liên hệ trực tiếp</span>
              </div>
              <p className="text-xs text-[var(--ink-2)] font-mono break-all select-all">
                bilalayyah@gmail.com
              </p>
            </div>

            <div className="p-4 rounded-2xl border pastel-card-2 shadow-[var(--shadow)] space-y-2">
              <div className="flex items-center gap-2 text-[var(--ink-navy)] font-bold text-sm">
                <Clock className="w-4 h-4 text-[#2563eb] dark:text-[#60a5fa]" />
                <span>Thời gian phản hồi</span>
              </div>
              <p className="text-xs text-[var(--ink-2)]">
                Chúng tôi thường trả lời trong vòng 24 đến 48 giờ làm việc.
              </p>
            </div>

            <div className="p-4 rounded-2xl border pastel-card-6 shadow-[var(--shadow)] space-y-2">
              <div className="flex items-center gap-2 text-[var(--ink-navy)] font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-[#16a34a] dark:text-[#4ade80]" />
                <span>Cam kết bảo mật</span>
              </div>
              <p className="text-xs text-[var(--ink-2)]">
                Email và nội dung tin nhắn của bạn chỉ được dùng để trả lời thắc mắc của bạn và không bao giờ được chia sẻ.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            {isSubmitted ? (
              <div className="p-8 pastel-card-6 border rounded-2xl text-center space-y-3 shadow-[var(--shadow)]">
                <CheckCircle2 className="w-12 h-12 text-[#16a34a] dark:text-[#4ade80] mx-auto" />
                <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)]">Đã gửi tin nhắn thành công</h2>
                <p className="text-sm text-[var(--ink-2)] max-w-md mx-auto">
                  Cảm ơn bạn đã liên hệ! Tin nhắn của bạn đã được gửi qua FormSubmit tới bilalayyah@gmail.com. Chúng tôi sẽ trả lời bạn sớm.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-2 bg-[#16a34a] hover:bg-[#15803d] text-white text-xs font-semibold rounded-full transition-colors cursor-pointer"
                  >
                    Gửi tin nhắn khác
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4 bg-[var(--surface)] p-6 rounded-2xl border border-[var(--line)] shadow-[var(--shadow)]">
                {errorMessage && (
                  <div className="p-3 pastel-card-14 border text-[#b91c1c] dark:text-[#fca5a5] text-xs rounded-[11px] flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-[var(--ink-2)] mb-1">
                      Tên của bạn <span className="text-[#dc2626] dark:text-[#fca5a5]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="Nguyễn Văn An"
                      className="w-full px-3.5 py-2.5 bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] text-sm focus:outline-none focus:ring-2 focus:ring-[#dc2626]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-[var(--ink-2)] mb-1">
                      Email <span className="text-[#dc2626] dark:text-[#fca5a5]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="an@example.com"
                      className="w-full px-3.5 py-2.5 bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] text-sm focus:outline-none focus:ring-2 focus:ring-[#dc2626]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold text-[var(--ink-2)] mb-1">
                    Chủ đề <span className="text-[#dc2626] dark:text-[#fca5a5]">*</span>
                  </label>
                  <input
                      id="contact-subject"
                      name="subject"
                    type="text"
                    required
                    value={contactSubject}
                    onChange={(e) => setContactSubject(e.target.value)}
                    placeholder="Góp ý, báo lỗi hoặc câu hỏi chung"
                    className="w-full px-3.5 py-2.5 bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] text-sm focus:outline-none focus:ring-2 focus:ring-[#dc2626]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-[var(--ink-2)] mb-1">
                    Tin nhắn <span className="text-[#dc2626] dark:text-[#fca5a5]">*</span>
                  </label>
                  <textarea
                      id="contact-message"
                      name="message"
                    rows={5}
                    required
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder="Chúng tôi có thể giúp gì cho bạn? Hãy mô tả vấn đề hoặc đề xuất của bạn thật chi tiết..."
                    className="w-full px-3.5 py-2.5 bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] text-sm focus:outline-none focus:ring-2 focus:ring-[#dc2626]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 btn-purple-pill disabled:opacity-50 font-semibold text-sm cursor-pointer flex items-center justify-center gap-2 shadow-xs"
                >
                  {isSubmitting ? (
                    <>
                      <RotateCcw className="w-4 h-4 animate-spin" />
                      <span>Đang gửi tin nhắn...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Gửi tin nhắn</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Extra Information Sections */}
        <div className="mt-12 space-y-8 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>Người đứng sau CompressMyPic</span>
            </h2>
            <p>
              CompressMyPic được tạo ra và duy trì bởi Bilal, một nhà phát triển độc lập mong muốn có một công cụ nén ảnh thực sự miễn phí và tôn trọng quyền riêng tư của bạn. Không giống hầu hết các công cụ trực tuyến, CompressMyPic không bao giờ tải ảnh của bạn lên máy chủ: mỗi ảnh đều được nén ngay trong trình duyệt của chính bạn. Bilal đọc từng tin nhắn một cách cá nhân và dùng phản hồi của bạn để sửa lỗi, cải thiện chất lượng và quyết định nên tạo công cụ mới nào tiếp theo.
            </p>
            <p>
              Vì đây là một dự án nhỏ, độc lập chứ không phải một công ty lớn, bạn sẽ luôn nhận được câu trả lời trực tiếp và thẳng thắn, ngay cả khi câu trả lời là một tính năng nào đó vẫn chưa thể thực hiện được. Không có hàng đợi hỗ trợ hay chatbot tự động nào chen giữa bạn và người đã tạo ra công cụ.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>Bạn có thể viết cho chúng tôi về điều gì?</span>
            </h2>
            <p>
              Cách nhanh nhất để nhận được trợ giúp là cho chúng tôi biết chính xác chuyện gì đã xảy ra. Để báo lỗi, hãy cho biết tên công cụ bạn đang dùng, trình duyệt của bạn và loại tệp ảnh; ví dụ: ảnh HEIC từ iPhone hay ảnh PNG trong suốt. Để đề xuất tính năng, hãy mô tả bạn muốn đạt được điều gì và vì sao các công cụ hiện tại chưa đáp ứng được. Chúng tôi cũng rất cảm ơn các báo cáo về kết quả sai, chẳng hạn ảnh đã nén trông tệ hơn mong đợi, và các chỉnh sửa cho hướng dẫn của chúng tôi hay bất kỳ trang đã dịch nào.
            </p>
            <p>
              Bạn cũng có thể viết cho chúng tôi về hợp tác, thắc mắc báo chí và đề xuất công cụ mới. Nếu bạn có trang web, blog hay lớp học và muốn giới thiệu CompressMyPic tới độc giả hoặc học viên của mình, chúng tôi rất muốn biết: hãy dùng biểu mẫu ở trên và chọn một chủ đề rõ ràng để tin nhắn của bạn đến đúng nơi nhanh chóng.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Github className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>Các cách khác để liên hệ với Bilal</span>
            </h2>
            <p>
              Nếu bạn thích một kênh công khai, bạn có thể tìm thấy Bilal và dự án CompressMyPic trên web. Mã nguồn có trên GitHub, nơi bạn cũng có thể báo cáo lỗi kỹ thuật và theo dõi quá trình phát triển. Các hướng dẫn dài về nén ảnh được đăng trên Dev.to, và sản phẩm được liệt kê trên Indie Hackers, nơi bạn có thể theo dõi tiến độ và để lại bình luận.
            </p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>
                <a href="https://github.com/bilalayyah/compressmypic" target="_blank" rel="noopener noreferrer" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold">GitHub — github.com/bilalayyah/compressmypic</a>
                {' '}— mã nguồn, báo lỗi và tin tức phát triển.
              </li>
              <li>
                <a href="https://dev.to/bilalayyah" target="_blank" rel="noopener noreferrer" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold">Dev.to — dev.to/bilalayyah</a>
                {' '}— hướng dẫn về nén JPG, PNG và WebP.
              </li>
              <li>
                <a href="https://www.indiehackers.com/product/compressmypic" target="_blank" rel="noopener noreferrer" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold">Indie Hackers — indiehackers.com/product/compressmypic</a>
                {' '}— trang sản phẩm, các cột mốc và bình luận của cộng đồng.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>Trước khi viết cho chúng tôi</span>
            </h2>
            <p>
              Một vài kiểm tra nhanh sẽ giải quyết hầu hết các vấn đề mà không cần chờ trả lời. Công cụ nén chính chấp nhận ảnh tối đa 20 MB mỗi ảnh, trong khi các công cụ chuyển đổi định dạng chấp nhận tối đa 25 MB mỗi tệp; tệp lớn hơn sẽ bị từ chối trước khi bắt đầu. Các trình duyệt rất cũ có thể không hỗ trợ các định dạng mới như AVIF hay HEIC, vì vậy thử một phiên bản mới của Chrome, Edge, Firefox hay Safari thường sẽ khắc phục được một công cụ trông như bị hỏng. Và vì ảnh của bạn không bao giờ rời khỏi thiết bị, vấn đề với một ảnh cụ thể thường nằm ở chính tệp đó chứ không phải trang web.
            </p>
            <p>
              Khi viết cho chúng tôi, hãy cho biết tên và phiên bản trình duyệt, công cụ bạn đang dùng, cùng dung lượng và định dạng của ảnh. Chúng tôi trả lời bằng tiếng Anh, thường trong vòng 24 đến 48 giờ làm việc. Nếu câu hỏi của bạn liên quan đến cách chúng tôi xử lý dữ liệu của bạn, bạn cũng có thể đọc trước{' '}
              <button
                type="button"
                onClick={() => onNavigate('/vi/chinh-sach-bao-mat')}
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold cursor-pointer"
              >
                Chính sách Quyền riêng tư
              </button>
              {' '}của chúng tôi: ở đó giải thích bằng ngôn ngữ đơn giản rằng ảnh của bạn không bao giờ được tải lên hay lưu trữ.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Bug className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>Báo cáo sự cố</span>
            </h2>
            <p>
              Bạn phát hiện thứ gì đó bị hỏng? Hãy cho chúng tôi biết nó xảy ra ở trang nào, bạn đã bấm vào đâu và bạn mong đợi thấy gì thay vào đó. Ảnh chụp màn hình rất hữu ích, và nếu sự cố liên quan đến một ảnh cụ thể, hãy cho chúng tôi biết định dạng và dung lượng của nó, nhưng đừng bao giờ gửi cho chúng tôi ảnh riêng tư hay nhạy cảm. Chúng tôi sửa các lỗi được báo cáo càng sớm càng tốt và sẽ thông báo cho bạn qua email khi bản sửa đã được phát hành.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
