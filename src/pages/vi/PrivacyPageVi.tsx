import React, { useEffect } from 'react';
import { ArrowLeft, Shield } from 'lucide-react';

interface PrivacyPageViProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPageVi: React.FC<PrivacyPageViProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Chính sách Quyền riêng tư - CompressMyPic';
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
          <div className="flex items-center gap-2.5 mb-2">
            <Shield className="w-6 h-6 text-[#16a34a] dark:text-[#4ade80]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              Chính sách Quyền riêng tư
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            Cập nhật lần cuối: 15 tháng 11 năm 2026
          </p>
        </div>

        {/* Exact Privacy Policy Text */}
        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. Xử lý ảnh trong trình duyệt của bạn
            </h2>
            <p>
              CompressMyPic là công cụ nén ảnh trực tuyến miễn phí. Ảnh được xử lý ngay trong trình duyệt của bạn bằng HTML5 Canvas: chúng không bao giờ được tải lên máy chủ của chúng tôi và chúng tôi không thu thập, lưu trữ hay chia sẻ ảnh của bạn. Khi bạn đóng hoặc tải lại tab trình duyệt, mọi đối tượng tạm thời trong bộ nhớ đều bị xóa.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. Chúng tôi không thu thập dữ liệu cá nhân
            </h2>
            <p>
              Chúng tôi không yêu cầu tài khoản, mật khẩu, email hay số điện thoại để dùng công cụ nén. Bất kỳ thông tin liên hệ nào bạn tự nguyện gửi qua biểu mẫu liên hệ của chúng tôi chỉ được dùng để trả lời thắc mắc cụ thể của bạn.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. Quảng cáo
            </h2>
            <p>
              CompressMyPic hiện không hiển thị quảng cáo. Trang web này không đặt cookie quảng cáo.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. Phân tích
            </h2>
            <p>
              Chúng tôi dùng Google Analytics 4 (GA4) để hiểu, ở dạng tổng hợp, cách trang web được sử dụng; ví dụ công cụ nào phổ biến và trang nào được truy cập. GA4 thu thập dữ liệu sử dụng đã ẩn danh, chẳng hạn các trang bạn truy cập, thời gian bạn ở lại đó và thông tin chung về thiết bị và trình duyệt của bạn. Nó có thể đặt cookie trên thiết bị của bạn (như _ga) để phân biệt lượt truy cập này với lượt truy cập khác. Chúng tôi không dùng GA4 để nhận diện cá nhân bạn. Bạn có thể chọn không tham gia Google Analytics bất cứ lúc nào bằng cách cài đặt tiện ích bổ sung tắt Google Analytics (https://tools.google.com/dlpage/gaoptout) hoặc tắt cookie trong cài đặt trình duyệt của bạn.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. Liên kết của bên thứ ba
            </h2>
            <p>
              Trang web của chúng tôi có thể chứa liên kết tới các trang web bên ngoài. Chúng tôi không chịu trách nhiệm về thực tiễn bảo mật hay nội dung của các nền tảng bên thứ ba.
            </p>
          </section>

                    <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. Cookie và sự đồng ý
            </h2>
            <p>
              CompressMyPic không đặt bất kỳ cookie nào cho các công cụ xử lý ảnh của mình: việc nén diễn ra hoàn toàn trong trình duyệt của bạn và không cần bất kỳ cookie, tài khoản hay tùy chọn đã lưu nào từ phía chúng tôi. Cookie trên trang web này đến từ các dịch vụ bên thứ ba. Ví dụ, Google Analytics có thể đặt cookie cho số liệu thống kê sử dụng. Trình duyệt của bạn lưu các cookie này trên thiết bị và bạn có thể xóa chúng bất cứ lúc nào trong cài đặt trình duyệt.
            </p>
            <p>
              CompressMyPic hiện không hiển thị quảng cáo, vì vậy khách truy cập từ bất kỳ khu vực nào cũng không được yêu cầu đồng ý cho quảng cáo.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. Quyền của bạn theo GDPR
            </h2>
            <p>
              Nếu bạn đang ở Khu vực Kinh tế Châu Âu hoặc Vương quốc Anh, Quy định chung về Bảo vệ Dữ liệu (GDPR) trao cho bạn các quyền đối với dữ liệu cá nhân của mình. Bạn có thể yêu cầu chúng tôi cung cấp bản sao dữ liệu cá nhân mà chúng tôi có về bạn, yêu cầu sửa chữa nếu dữ liệu không đúng, yêu cầu xóa dữ liệu, yêu cầu hạn chế việc sử dụng dữ liệu và phản đối việc xử lý dữ liệu. Khi việc xử lý dựa trên sự đồng ý của bạn, bạn có thể rút lại sự đồng ý bất cứ lúc nào; việc rút lại không ảnh hưởng đến những gì chúng tôi đã làm hợp pháp trước đó.
            </p>
            <p>
              Vì các công cụ của chúng tôi xử lý ảnh ngay trên thiết bị và chúng tôi không có tài khoản người dùng nên dữ liệu cá nhân duy nhất mà chúng tôi thường có là tên, địa chỉ email và tin nhắn mà bạn gửi qua biểu mẫu liên hệ. Để thực hiện bất kỳ quyền nào trong số này, hãy viết thư cho chúng tôi tại <a
                href="mailto:bilalayyah@gmail.com"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold"
              >
                bilalayyah@gmail.com
              </a> và chúng tôi sẽ trả lời trong vòng 30 ngày. Bạn cũng có quyền khiếu nại với cơ quan bảo vệ dữ liệu địa phương nếu bạn tin rằng chúng tôi đã xử lý dữ liệu của bạn không đúng.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. Lưu giữ dữ liệu
            </h2>
            <p>
              Chúng tôi chỉ lưu giữ dữ liệu cá nhân trong thời gian cần thiết cho mục đích mà dữ liệu được thu thập. Tin nhắn qua biểu mẫu liên hệ chỉ được lưu giữ cho đến khi thắc mắc của bạn đã được trả lời và cuộc trao đổi đã kết thúc, và trong một thời gian ngắn sau đó phòng khi có câu hỏi tiếp theo; chúng không bao giờ được dùng cho marketing hay chia sẻ với bên thứ ba. Ảnh của bạn hoàn toàn không được lưu giữ: chúng chỉ tồn tại trong bộ nhớ trình duyệt của bạn trong lúc bạn dùng một công cụ và bị xóa ngay khi bạn đóng hoặc tải lại tab. Dữ liệu phân tích tổng hợp không chứa thông tin cá nhân và chỉ được lưu giữ ở dạng tóm tắt.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. Bảo mật và reCAPTCHA
            </h2>
            <p>
              Trang web được phục vụ qua HTTPS, vì vậy kết nối giữa trình duyệt của bạn và trang web được mã hóa. Biểu mẫu liên hệ của chúng tôi được gửi qua FormSubmit, dịch vụ chuyển tiếp tin nhắn của bạn tới địa chỉ email của chúng tôi, và biểu mẫu được bảo vệ bởi Google reCAPTCHA để chặn spam và hành vi lạm dụng tự động. Khi bạn gửi biểu mẫu, reCAPTCHA có thể thu thập thông tin phần cứng và phần mềm, chẳng hạn dữ liệu trình duyệt và thiết bị của bạn, để phân biệt con người với bot; điều này tuân theo <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline"
              >
                Chính sách Quyền riêng tư
              </a> và <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline"
              >
                Điều khoản Dịch vụ
              </a> của Google. Chúng tôi không bao giờ yêu cầu bạn gửi mật khẩu, thông tin thanh toán hay tài liệu cá nhân nhạy cảm qua biểu mẫu liên hệ, và bạn cũng không nên đưa chúng vào tin nhắn.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              10. Quyền riêng tư của trẻ em
            </h2>
            <p>
              CompressMyPic là công cụ dành cho công chúng nói chung và không hướng tới trẻ em dưới 13 tuổi. Chúng tôi không cố ý thu thập thông tin cá nhân của trẻ em. Nếu bạn là cha mẹ hoặc người giám hộ và tin rằng con mình đã gửi thông tin cá nhân cho chúng tôi qua biểu mẫu liên hệ, hãy viết email cho chúng tôi và chúng tôi sẽ xóa ngay lập tức.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              11. Thay đổi đối với chính sách này
            </h2>
            <p>
              Chúng tôi có thể cập nhật chính sách này khi trang web thay đổi; ví dụ nếu chúng tôi thêm một dịch vụ phân tích mới, một đối tác quảng cáo mới hay một cách liên hệ mới. Khi đó, chúng tôi sẽ thay đổi ngày «Cập nhật lần cuối» ở đầu trang này và các thay đổi quan trọng sẽ được mô tả tại đây bằng ngôn ngữ đơn giản. Việc tiếp tục sử dụng trang web sau một thay đổi có nghĩa là bạn chấp nhận chính sách đã cập nhật.
            </p>
          </section>

<section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              12. Liên hệ
            </h2>
            <p>
              Nếu bạn có câu hỏi về chính sách này, hãy viết thư cho chúng tôi tại{' '}
              <a
                href="mailto:bilalayyah@gmail.com"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold"
              >
                bilalayyah@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
