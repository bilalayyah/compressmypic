import React, { useEffect } from 'react';
import { ArrowLeft, ShieldAlert } from 'lucide-react';

interface DisclaimerPageViProps {
  onNavigate: (path: string) => void;
}

export const DisclaimerPageVi: React.FC<DisclaimerPageViProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Tuyên bố Miễn trừ Trách nhiệm | CompressMyPic – Công cụ ảnh miễn phí';
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
            className="inline-flex items-center gap-1.5 py-2 text-xs font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:text-[#b91c1c] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại công cụ nén ảnh</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <ShieldAlert className="w-6 h-6 text-[#16a34a] dark:text-[#4ade80]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              Tuyên bố Miễn trừ Trách nhiệm
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            Cập nhật lần cuối: 18 tháng 11 năm 2026
          </p>
        </div>

        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. Thông tin chung
            </h2>
            <p>
              CompressMyPic là dịch vụ nén và chỉnh sửa ảnh trực tuyến miễn phí. Các công cụ, hướng dẫn và bài viết trên trang web này chỉ được cung cấp cho mục đích thông tin chung và sử dụng thực tế. Chúng không phải là tư vấn chuyên môn dưới bất kỳ hình thức nào — pháp lý, y tế, tài chính hay kỹ thuật — và không tạo ra bất kỳ quan hệ chuyên môn nào giữa bạn và CompressMyPic.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. Không bảo đảm
            </h2>
            <p>
              Dịch vụ được cung cấp «nguyên trạng» và «theo khả năng sẵn có», không có bất kỳ bảo đảm nào, dù rõ ràng hay ngụ ý. Chúng tôi không bảo đảm rằng các công cụ luôn sẵn có, không bị gián đoạn, không có lỗi hay không chứa thành phần gây hại, cũng như không bảo đảm một ảnh cụ thể sẽ được nén xuống một dung lượng hay chất lượng nhất định. Kết quả phụ thuộc vào ảnh gốc, định dạng của nó và trình duyệt của bạn, vì vậy hãy luôn giữ một bản sao của các tệp gốc trước khi dùng bất kỳ công cụ nào.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. Tính chính xác của nội dung
            </h2>
            <p>
              Chúng tôi nỗ lực giữ cho các hướng dẫn, bài viết và mô tả chính xác và cập nhật, nhưng định dạng ảnh, trình duyệt và tiêu chuẩn web thay đổi theo thời gian. Thông tin trên trang web này có thể trở nên lỗi thời hoặc chứa sai sót dù chúng tôi đã cố gắng. Hãy luôn kiểm tra các dữ liệu quan trọng — chẳng hạn giới hạn dung lượng của một nền tảng — trong tài liệu chính thức của nền tảng đó trước khi tin vào chúng.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. Tệp của bạn là trách nhiệm của bạn
            </h2>
            <p>
              Ảnh được xử lý ngay trong trình duyệt của bạn và không bao giờ được tải lên máy chủ của chúng tôi. Điều đó cũng có nghĩa là chúng tôi không thể khôi phục tệp giúp bạn: nếu bạn ghi đè, xóa hay làm mất một ảnh gốc trong lúc dùng công cụ của chúng tôi, chúng tôi không thể khôi phục lại. Hãy sao lưu mọi ảnh quan trọng và chỉ xử lý bản sao của những tệp thuộc về bạn hoặc bạn có quyền chỉnh sửa.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. Dịch vụ và liên kết của bên thứ ba
            </h2>
            <p>
              Trang web này dùng các dịch vụ bên thứ ba — Google Analytics 4 cho số liệu thống kê sử dụng, FormSubmit cho biểu mẫu liên hệ và một Cloudflare Worker cho các bình luận ẩn danh — và liên kết tới các trang web bên ngoài. Chúng tôi không kiểm soát các dịch vụ hay trang web đó, và không chịu trách nhiệm về nội dung, tính khả dụng, thực tiễn bảo mật hay tính chính xác của chúng. Khi dùng chúng, điều khoản và chính sách quyền riêng tư của chính chúng sẽ được áp dụng.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. Quảng cáo
            </h2>
            <p>
              Trang web này hiện không hiển thị quảng cáo.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. Giới hạn trách nhiệm
            </h2>
            <p>
              Trong phạm vi tối đa mà pháp luật cho phép, CompressMyPic và người vận hành sẽ không chịu trách nhiệm đối với bất kỳ tổn thất hay thiệt hại trực tiếp, gián tiếp, ngẫu nhiên hay hệ quả nào phát sinh từ việc sử dụng — hoặc không thể sử dụng — trang web này hay các công cụ của nó, bao gồm nhưng không giới hạn ở việc mất tệp, dữ liệu hay lợi nhuận. Biện pháp khắc phục duy nhất của bạn khi không hài lòng với dịch vụ là ngừng sử dụng nó.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. Bình luận của người dùng
            </h2>
            <p>
              Các bình luận được đăng dưới công cụ của chúng tôi do khách truy cập viết và thể hiện quan điểm của chính họ, không phải của chúng tôi. Chúng tôi kiểm duyệt bình luận và có thể xóa bất kỳ nội dung nào là spam, lạm dụng hay lạc đề, nhưng chúng tôi không xác nhận hay chịu trách nhiệm về nội dung bình luận của người dùng. Đừng bao giờ chia sẻ mật khẩu, thông tin thanh toán hay thông tin cá nhân nhạy cảm trong bình luận.
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. Liên hệ
            </h2>
            <p>
              Nếu bạn có câu hỏi về tuyên bố miễn trừ trách nhiệm này, hãy liên hệ với chúng tôi tại{' '}
              <a href="mailto:bilalayyah@gmail.com" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold">bilalayyah@gmail.com</a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
