import React, { useEffect } from 'react';
import { ArrowLeft, Shield, Cpu, Lock, CheckCircle2, Users, Layers } from 'lucide-react';

interface AboutPageViProps {
  onNavigate: (path: string) => void;
}

export const AboutPageVi: React.FC<AboutPageViProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Về CompressMyPic – Công cụ nén ảnh trực tuyến miễn phí';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'Về CompressMyPic: công cụ nén ảnh trực tuyến miễn phí cho JPG, PNG và WebP. Nén ảnh trực tuyến miễn phí, không cần đăng ký, không watermark và không tải lên bất kỳ máy chủ nào.');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

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

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
            Về CompressMyPic
          </h1>
          <p className="mt-3 text-lg font-medium text-[var(--ink-2)] leading-relaxed">
            CompressMyPic là công cụ nén ảnh miễn phí và riêng tư. Nén ảnh JPG, PNG và WebP ngay trong trình duyệt của bạn: nhanh, an toàn và không tải tệp của bạn lên bất cứ đâu.
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>CompressMyPic là gì?</span>
            </h2>
            <p>
              CompressMyPic là công cụ nén ảnh trực tuyến miễn phí và công cụ tối ưu hình ảnh giúp bạn giảm dung lượng ảnh mà không làm mất chất lượng. Đây là công cụ nén ảnh và giảm dung lượng ảnh cho các định dạng bạn dùng hằng ngày: JPG, PNG và WebP. Hãy dùng nó để nén JPG xuống 100 KB, nén PNG trực tuyến miễn phí, nén ảnh WebP, hoặc giảm dung lượng ảnh trước khi chia sẻ qua WhatsApp, Instagram, Facebook hay email.
            </p>
            <p>
              Các trang web nén ảnh truyền thống tải những bức ảnh cá nhân hoặc đồ họa của công ty bạn lên một máy chủ thuộc về người khác. Cách làm đó gây ra những lo ngại chính đáng, và đó chính là lý do chúng tôi tạo ra CompressMyPic theo hướng ngược lại: một công cụ thực hiện mọi việc ngay trên thiết bị của chính bạn.
            </p>
            <p>
              Khi bạn chọn một ảnh hoặc kéo thả ảnh vào, trình duyệt sẽ cấp một bộ đệm tạm thời trong bộ nhớ, vẽ ảnh lên phần tử Canvas của HTML, áp dụng thuật toán nén rồi xuất ra tệp mới — tất cả đều diễn ra trong chính tab trình duyệt của bạn. Quá trình nén ảnh của bạn không hề liên quan đến hạ tầng mạng, cơ sở dữ liệu hay máy chủ đám mây nào.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>Định dạng được hỗ trợ: JPG, PNG và WebP</span>
            </h2>
            <p>
              Là công cụ nén JPG, CompressMyPic cho phép bạn nén JPG trực tuyến miễn phí và giảm dung lượng tệp JPEG mà ảnh vẫn sắc nét: hãy thử chế độ Cân bằng hoặc kéo thanh trượt chất lượng xuống và xem dung lượng trước/sau trực tiếp để đạt các mục tiêu như 100 KB hay 200 KB. Là công cụ nén PNG, nó cho phép bạn nén PNG trực tuyến miễn phí mà vẫn giữ được độ trong suốt cho logo và đồ họa. Và khi bạn nén ảnh WebP, bạn sẽ có được những tệp nhỏ nhất: WebP thường nhỏ hơn JPEG từ 25 đến 35% với chất lượng tương đương, nên đây là lựa chọn tốt nhất để tối ưu hình ảnh cho trang web.
            </p>
            <p>
              Bạn có thể giữ nguyên định dạng gốc của từng ảnh hoặc chuyển đổi giữa JPG, PNG và WebP. Thanh trượt chất lượng (từ 10% đến 100%), các chế độ Thấp, Cân bằng và Cao, cùng với hiển thị dung lượng trước/sau trực tiếp giúp bạn kiểm soát hoàn toàn sự cân bằng giữa dung lượng tệp và chất lượng hình ảnh — mà không bao giờ hứa hẹn một ô nhập dung lượng mục tiêu chính xác theo KB mà công cụ không có.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#16a34a] dark:text-[#4ade80]" />
              <span>Các nguyên tắc cốt lõi của chúng tôi</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-2xl border pastel-card-0 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">Riêng tư tuyệt đối</div>
                <p className="text-xs text-[var(--ink-2)]">
                  Không một tệp nào chạm tới máy chủ bên ngoài hay cơ sở dữ liệu. Ảnh và đồ họa nhạy cảm của bạn luôn ở trên thiết bị của bạn. Vì việc nén diễn ra ngay trong trình duyệt, không ai khác nhìn thấy công việc của bạn.
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-2 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">Đơn giản và miễn phí</div>
                <p className="text-xs text-[var(--ink-2)]">
                  Không cần cài đặt phần mềm, không gói trả phí, không phí ẩn, không cần tạo tài khoản, không xác minh email và không giới hạn dùng thử. Nén ảnh trực tuyến miễn phí: thực sự miễn phí, không cần đăng ký và không có watermark trên ảnh đã nén của bạn.
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-6 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">Chất lượng do bạn quyết định</div>
                <p className="text-xs text-[var(--ink-2)]">
                  Bạn có quyền kiểm soát chi tiết: kéo thanh trượt Chất lượng theo thời gian thực, chọn bất kỳ chế độ nào trong Thấp, Cân bằng hoặc Cao, chọn định dạng tệp đầu ra và so sánh từng ảnh cạnh nhau để nhận ra khác biệt ngay lập tức. Giảm dung lượng ảnh mà không làm mất chất lượng, theo cách của bạn.
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-9 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">Nén ảnh hàng loạt</div>
                <p className="text-xs text-[var(--ink-2)]">
                  Nén nhiều ảnh cùng lúc với cùng một thiết lập và tải tất cả về cùng nhau bằng nút Tải tất cả (ZIP): công cụ nén ảnh hàng loạt cho thư viện ảnh, danh mục sản phẩm và thư mục ảnh của trang web.
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-10 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">Kiểm tra an toàn tự động</div>
                <p className="text-xs text-[var(--ink-2)]">
                  Công cụ nén phát hiện độ trong suốt trong ảnh của bạn. Nếu bạn chọn đầu ra JPEG cho một ảnh PNG trong suốt, chúng tôi sẽ hiển thị cảnh báo vì JPEG không hỗ trợ độ trong suốt, để bạn không bao giờ vô tình làm mất kênh alpha.
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-12 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">Hiệu năng nhanh</div>
                <p className="text-xs text-[var(--ink-2)]">
                  Vì mọi xử lý đều diễn ra ngay trên thiết bị của bạn nên bạn không phải chờ tệp tải lên rồi tải xuống từ máy chủ. Bạn có thể nén ảnh nhanh chóng, kể cả các tệp lớn tới 20 MB mỗi ảnh, trên máy tính hay điện thoại.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Users className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>CompressMyPic dành cho ai?</span>
            </h2>
            <p>
              CompressMyPic dành cho bất kỳ ai cần ảnh nhỏ hơn: blogger và chủ trang web muốn tối ưu hình ảnh cho web và giảm dung lượng ảnh trên trang của mình; nhiếp ảnh gia cần giảm dung lượng ảnh trước khi chia sẻ hoặc gửi bản xem trước; người bán hàng trực tuyến nén ảnh cho trang web hay bài đăng bán hàng; học sinh, sinh viên và nhân viên văn phòng nén ảnh để đính kèm email; và bất kỳ ai muốn nén ảnh để gửi qua WhatsApp, Instagram hay Facebook cho nhanh hơn và tốn ít dữ liệu di động hơn.
            </p>
            <p>
              Công cụ chạy trên trình duyệt máy tính và điện thoại, không cần cài đặt và không bao giờ yêu cầu bạn đăng ký: chỉ cần mở trang web, tải ảnh lên và tải về các tệp nhỏ hơn.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Users className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>Người tạo ra công cụ: Bilal</span>
            </h2>
            <p>
              CompressMyPic được tạo ra bởi Bilal, một nhà phát triển độc lập chuyên xây dựng các công cụ miễn phí, tôn trọng quyền riêng tư cho web. Anh bắt đầu CompressMyPic sau khi cảm thấy khó chịu với các công cụ nén ảnh bắt người dùng phải tải ảnh cá nhân lên máy chủ của người lạ chỉ để làm tệp nhỏ hơn. Câu trả lời của anh là một công cụ thực hiện toàn bộ công việc ngay trong trình duyệt của người dùng: không tải lên, không tài khoản, không watermark và không hóa đơn bất ngờ ở cuối.
            </p>
            <p>
              Bilal tự mình thiết kế, xây dựng và duy trì cả 47 công cụ trên trang web, từ công cụ nén và chuyển đổi đến trình tạo favicon. Anh tự trả lời từng tin nhắn hỗ trợ, đọc mọi phản hồi và giữ các công cụ miễn phí cho tất cả mọi người, dù họ nén một ảnh hay một nghìn ảnh. Chân trang của trang web có một lời tri ân nhỏ dành cho Shaheen, người đã khích lệ Bilal tiếp tục xây dựng và làm cho các công cụ thực sự hữu ích chứ không chỉ nổi tiếng.
            </p>
            <p>
              Nếu bạn muốn theo dõi công việc này, bạn có thể tìm thấy dự án trên{' '}
              <a
                href="https://github.com/bilalayyah/compressmypic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold"
              >
                GitHub
              </a>
              {', '}đọc các hướng dẫn của Bilal trên{' '}
              <a
                href="https://dev.to/bilalayyah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold"
              >
                Dev.to
              </a>
              {', '}hoặc chào hỏi qua{' '}
              <button
                type="button"
                onClick={() => onNavigate('/vi/lien-he')}
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold cursor-pointer"
              >
                trang liên hệ
              </button>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#16a34a] dark:text-[#4ade80]" />
              <span>Quyền riêng tư &amp; Bảo mật</span>
            </h2>
            <p>
              Tại CompressMyPic, chúng tôi tin rằng quyền riêng tư là một quyền cơ bản, không phải một tính năng tùy chọn. Ngày nay, nhiều trang web thu thập dữ liệu theo mặc định, ngay cả một công cụ nén ảnh. Chúng tôi áp dụng cách tiếp cận đặt quyền riêng tư lên hàng đầu, dùng công nghệ trình duyệt hiện đại để xử lý tệp của bạn ngay trên máy tính của bạn.
            </p>
            <p>
              Tệp của bạn vẫn nằm trong bộ nhớ trình duyệt và sẽ bị xóa ngay khi bạn đóng tab hoặc tải lại trang. Vì không có quá trình xử lý ảnh nào diễn ra trên máy chủ từ xa nên chúng tôi không thể thu thập dữ liệu ảnh của bạn, ngay cả khi chúng tôi muốn. Đó là thiết kế và cũng là cam kết của công cụ.
            </p>
            <p>
              Để biết chính xác cách chúng tôi xử lý quyền riêng tư của bạn, vui lòng xem{' '}
              <button
                type="button"
                onClick={() => onNavigate('/vi/chinh-sach-bao-mat')}
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold cursor-pointer"
              >
                Chính sách Quyền riêng tư
              </button>
              {' '}của chúng tôi.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#16a34a] dark:text-[#4ade80]" />
              <span>Sứ mệnh của chúng tôi</span>
            </h2>
            <p>
              Chúng tôi tin rằng những công cụ tốt nhất là những công cụ đơn giản nhất, nhanh nhất và minh bạch nhất. Sứ mệnh của chúng tôi là mang đến cho mọi người một công cụ nén ảnh nhanh, đáng tin cậy và hoàn toàn miễn phí — không đánh đổi ẩn, không quảng cáo theo dõi bạn, không tải lên máy chủ và không thỏa hiệp về quyền riêng tư. Dù bạn nén một ảnh JPG hay cả một loạt ảnh WebP, công cụ chỉ cần hoạt động tốt.
            </p>
            <p>
              Bạn có câu hỏi, ý tưởng, hay phát hiện điều gì chúng tôi có thể cải thiện? Chúng tôi rất muốn lắng nghe bạn. Bạn có thể liên hệ trực tiếp với chúng tôi qua trang web.
            </p>
          </section>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/vi/')}
              className="flex-1 px-5 py-2.5 btn-purple-pill text-sm font-semibold shadow-sm cursor-pointer"
            >
              Bắt đầu nén ảnh
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/vi/lien-he')}
              className="flex-1 px-5 py-2.5 rounded-full bg-[var(--surface)] text-[var(--ink-navy)] text-sm font-semibold border border-[var(--line-strong)] shadow-xs hover:bg-[var(--surface-2)] transition-colors cursor-pointer"
            >
              Liên hệ với chúng tôi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
