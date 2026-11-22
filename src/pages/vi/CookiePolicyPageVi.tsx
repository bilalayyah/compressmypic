import React, { useEffect } from 'react';
import { ArrowLeft, Cookie } from 'lucide-react';

interface CookiePolicyPageViProps {
  onNavigate: (path: string) => void;
}

export const CookiePolicyPageVi: React.FC<CookiePolicyPageViProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Chính sách Cookie | CompressMyPic – Cách cookie được sử dụng';
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
            <Cookie className="w-6 h-6 text-[#16a34a] dark:text-[#4ade80]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              Chính sách Cookie
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            Cập nhật lần cuối: 18 tháng 11 năm 2026
          </p>
        </div>

        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. Cookie là gì?
            </h2>
            <p>
              Cookie là những tệp văn bản nhỏ mà một trang web yêu cầu trình duyệt của bạn lưu trên thiết bị. Chúng có thể ghi nhớ thông tin về lần truy cập của bạn — ví dụ bạn đã từng thấy một thông báo trước đây hay chưa — để trang web hoặc một dịch vụ có thể nhận ra trình duyệt của bạn trong lần truy cập sau. Chính sách này giải thích cookie nào được dùng trên CompressMyPic, vì sao chúng được dùng và cách bạn kiểm soát chúng.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. Cookie mà chúng tôi không đặt
            </h2>
            <p>
              CompressMyPic không đặt bất kỳ cookie nào. Các công cụ xử lý ảnh của chúng tôi chạy hoàn toàn trong trình duyệt của bạn: việc nén không cần tài khoản, đăng nhập hay cookie. Chúng tôi không đặt cookie để ghi nhớ bạn, theo dõi bạn hay lưu tùy chọn của bạn. Ảnh của bạn không bao giờ rời khỏi trình duyệt và không có gì về chúng được lưu trong cookie.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. Cookie quảng cáo
            </h2>
            <p>
              CompressMyPic hiện không hiển thị quảng cáo và không đặt cookie quảng cáo.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. Cookie của Google Analytics 4
            </h2>
            <p>
              Chúng tôi dùng Google Analytics 4 (GA4) để hiểu, ở dạng tổng hợp, cách trang web được sử dụng — ví dụ công cụ nào phổ biến và trang nào được truy cập. GA4 có thể đặt cookie trên thiết bị của bạn, chẳng hạn như _ga, để phân biệt lượt truy cập này với lượt truy cập khác. Dữ liệu là ẩn danh và chỉ được dùng ở dạng tổng hợp; chúng tôi không dùng GA4 để nhận diện cá nhân bạn. Bạn có thể từ chối Google Analytics bất cứ lúc nào bằng cách cài đặt tiện ích bổ sung tắt Google Analytics (https://tools.google.com/dlpage/gaoptout) hoặc tắt cookie trong cài đặt trình duyệt của bạn.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. Sự đồng ý (EEA, Vương quốc Anh và Thụy Sĩ)
            </h2>
            <p>
              Vì trang web này hiện không hiển thị quảng cáo nên không có thông báo đồng ý quảng cáo nào xuất hiện và không yêu cầu sự đồng ý cho quảng cáo. Số liệu thống kê sử dụng được thu thập bằng Google Analytics; bạn có thể chặn cookie phân tích trong cài đặt trình duyệt của mình (xem mục 8).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. Các dịch vụ bên thứ ba khác
            </h2>
            <p>
              Một số dịch vụ khác trên trang web này có thể dùng cookie hoặc bộ nhớ tương tự của riêng chúng. Google reCAPTCHA, công cụ bảo vệ biểu mẫu liên hệ của chúng tôi khỏi spam, có thể đặt cookie để phân biệt con người với bot; việc sử dụng nó tuân theo{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline">Chính sách Quyền riêng tư của Google</a>
              {' '}và{' '}
              <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline">Điều khoản Dịch vụ của Google</a>
              . Cloudflare, đơn vị lưu trữ trang web này, có thể đặt một cookie bảo mật để bảo vệ trang web khỏi bị lạm dụng. Các bình luận ẩn danh dưới công cụ của chúng tôi chỉ yêu cầu một tên, và tên đó được lưu bởi dịch vụ bình luận chứ không phải trong cookie của trang web này.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. Bộ nhớ trình duyệt không phải cookie
            </h2>
            <p>
              Trình duyệt của bạn cũng lưu một lượng nhỏ thông tin cục bộ không phải là cookie. Nếu bạn đăng bình luận, trình duyệt có thể ghi nhớ tên bạn đã nhập để bạn không phải gõ lại, và nếu bạn đổi ngôn ngữ của trang web, trình duyệt có thể ghi nhớ lựa chọn đó cho lần truy cập sau. Thông tin này vẫn nằm trên thiết bị của bạn, không bao giờ được gửi tới máy chủ của chúng tôi và bạn có thể xóa bất cứ lúc nào bằng cách xóa dữ liệu trang web trong trình duyệt.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. Cách kiểm soát cookie
            </h2>
            <p>
              Bạn có thể xóa các cookie đã lưu trên thiết bị và ngăn cookie được đặt trong tương lai từ cài đặt trình duyệt của mình — mọi trình duyệt chính (Chrome, Firefox, Safari, Edge) đều có tùy chọn này trong cài đặt quyền riêng tư hoặc bảo mật. Chặn mọi cookie sẽ không ảnh hưởng đến các công cụ xử lý ảnh của chúng tôi, vì chúng không phụ thuộc vào cookie, nhưng có thể ảnh hưởng đến các tính năng của dịch vụ bên thứ ba như số liệu thống kê. Bạn cũng có thể dùng chế độ riêng tư hoặc ẩn danh của trình duyệt, chế độ này sẽ xóa cookie khi bạn đóng cửa sổ.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. Thay đổi đối với chính sách này
            </h2>
            <p>
              Chúng tôi có thể cập nhật chính sách này khi trang web thay đổi — ví dụ nếu chúng tôi thêm một đối tác quảng cáo mới hoặc một dịch vụ thống kê mới. Khi đó, chúng tôi sẽ thay đổi ngày «Cập nhật lần cuối» ở đầu trang này. Việc tiếp tục sử dụng trang web sau một thay đổi có nghĩa là bạn chấp nhận chính sách đã cập nhật.
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              10. Liên hệ
            </h2>
            <p>
              Nếu bạn có câu hỏi về chính sách này, hãy liên hệ với chúng tôi tại{' '}
              <a href="mailto:bilalayyah@gmail.com" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold">bilalayyah@gmail.com</a>
              {' '}hoặc đọc{' '}
              <a href="/vi/chinh-sach-bao-mat" onClick={(e) => { e.preventDefault(); onNavigate('/vi/chinh-sach-bao-mat'); }} className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold">Chính sách Quyền riêng tư</a>
              {' '}của chúng tôi.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
