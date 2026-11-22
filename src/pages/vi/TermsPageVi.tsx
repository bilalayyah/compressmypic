import React, { useEffect } from 'react';
import { ArrowLeft, FileText } from 'lucide-react';

interface TermsPageViProps {
  onNavigate: (path: string) => void;
}

export const TermsPageVi: React.FC<TermsPageViProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Điều khoản Dịch vụ - CompressMyPic';
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
            <FileText className="w-6 h-6 text-[#dc2626] dark:text-[#f87171]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              Điều khoản Dịch vụ
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            Cập nhật lần cuối: 14 tháng 11 năm 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. Chấp nhận điều khoản
            </h2>
            <p>
              Khi truy cập và sử dụng CompressMyPic, bạn đồng ý tuân thủ và bị ràng buộc bởi các Điều khoản Dịch vụ này. Nếu bạn không đồng ý với bất kỳ phần nào của các điều khoản này, hãy ngừng sử dụng dịch vụ.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. Sử dụng được phép
            </h2>
            <p>
              Bạn có thể dùng CompressMyPic để tối ưu ảnh cho cả mục đích cá nhân lẫn thương mại. Bạn đồng ý không dùng dịch vụ cho bất kỳ hoạt động bất hợp pháp nào, cũng như không dùng theo bất kỳ cách nào có thể gây hại cho hoạt động, tính bảo mật hay tính khả dụng của trang web.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. Quyền sở hữu trí tuệ
            </h2>
            <p>
              Bạn giữ 100% bản quyền, quyền sở hữu và quyền sở hữu trí tuệ đối với mọi ảnh, hình chụp và đồ họa mà bạn nén bằng công cụ của chúng tôi. CompressMyPic không yêu cầu bất kỳ quyền sở hữu, giấy phép hay quyền nào đối với các tác phẩm sáng tạo của bạn. Mọi quá trình xử lý đều diễn ra ngay trên thiết bị của bạn.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. Từ chối bảo đảm
            </h2>
            <p>
              CompressMyPic được cung cấp «nguyên trạng» và «theo khả năng sẵn có», không có bất kỳ bảo đảm nào, dù rõ ràng hay ngụ ý. Mặc dù chúng tôi nỗ lực để đạt khả năng tương thích tối đa và hiệu năng tốt nhất trên mọi trình duyệt, chúng tôi không bảo đảm dịch vụ sẽ không bị gián đoạn, không có lỗi hay đáp ứng các yêu cầu kỹ thuật cụ thể.
            </p>
          </section>

                    <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. Tính khả dụng và thay đổi của dịch vụ
            </h2>
            <p>
              CompressMyPic là dịch vụ miễn phí và chúng tôi không bảo đảm dịch vụ luôn sẵn có. Chúng tôi có thể thay đổi, tạm dừng hoặc ngừng bất kỳ công cụ, tính năng hay toàn bộ trang web nào bất cứ lúc nào, có hoặc không có thông báo; ví dụ để sửa lỗi, thay thế một công nghệ không còn hoạt động trên các trình duyệt hiện đại, hoặc giữ cho dịch vụ miễn phí. Chúng tôi cũng có thể đặt các giới hạn hợp lý, chẳng hạn dung lượng tệp tối đa cho mỗi ảnh (hiện là 20 MB cho công cụ nén chính và 25 MB cho các công cụ chuyển đổi định dạng), và chúng tôi có thể thay đổi các giới hạn đó khi trình duyệt và thiết bị cải tiến. Vì mọi quá trình xử lý đều diễn ra trong trình duyệt của bạn nên việc trang web bị gián đoạn không bao giờ gây rủi ro cho ảnh gốc của bạn: các tệp của bạn vẫn nằm trên thiết bị của bạn.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. Sử dụng chấp nhận được
            </h2>
            <p>
              Bạn đồng ý chỉ dùng CompressMyPic cho các mục đích hợp pháp và theo cách không gây hại cho dịch vụ hay người khác. Cụ thể, bạn không được cố gắng làm quá tải, làm hỏng hay dịch ngược trang web, tìm kiếm lỗ hổng bảo mật, dùng script tự động để gửi một lượng lớn yêu cầu, hay dùng dịch vụ để xử lý những ảnh vi phạm bản quyền của người khác, chứa nội dung bất hợp pháp, hoặc nhằm mục đích lừa dối hay quấy rối. Bạn chịu trách nhiệm đảm bảo mình có quyền sử dụng từng ảnh mà bạn xử lý và sao lưu mọi ảnh quan trọng trước khi nén hoặc chuyển đổi.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. Giới hạn trách nhiệm
            </h2>
            <p>
              Trong phạm vi tối đa mà pháp luật cho phép, CompressMyPic và chủ sở hữu sẽ không chịu trách nhiệm đối với bất kỳ tổn thất gián tiếp, ngẫu nhiên hay hệ quả nào phát sinh từ việc sử dụng dịch vụ, bao gồm nhưng không giới hạn ở việc mất dữ liệu, mất lợi nhuận hay chi phí tạo lại một ảnh. Vì dịch vụ miễn phí nên tổng trách nhiệm của chúng tôi đối với bất kỳ khiếu nại nào liên quan đến dịch vụ được giới hạn ở số tiền bạn đã trả để dùng dịch vụ, tức là không đồng nào. Điều này không giới hạn bất kỳ trách nhiệm nào mà pháp luật không cho phép giới hạn, chẳng hạn trách nhiệm đối với gian lận hay tử vong hoặc thương tích cá nhân do sơ suất gây ra.
            </p>
            <p>
              Nén ảnh vốn là quá trình có hao hụt: giảm dung lượng tệp có thể làm giảm chất lượng, và một số định dạng, như JPEG, không thể giữ được độ trong suốt. Bạn chịu trách nhiệm kiểm tra kết quả đã nén trước khi xóa hoặc ghi đè tệp gốc, và chúng tôi không chịu trách nhiệm về việc mất chất lượng, mất độ trong suốt hay bất kỳ thay đổi nào khác mà quá trình nén gây ra cho một ảnh mà bạn đã chọn xử lý.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. Dịch vụ của bên thứ ba
            </h2>
            <p>
              Trang web dùng các dịch vụ bên thứ ba để hoạt động, bao gồm lưu trữ và phân phối nội dung qua Cloudflare và gửi tin nhắn qua FormSubmit. Các dịch vụ đó có điều khoản và chính sách quyền riêng tư riêng, và việc bạn sử dụng chúng tuân theo các tài liệu đó, bên cạnh các điều khoản này. Chúng tôi không chịu trách nhiệm về tính khả dụng, nội dung hay thực tiễn của các trang web hay dịch vụ bên thứ ba được liên kết từ CompressMyPic.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. Luật áp dụng
            </h2>
            <p>
              Các điều khoản này được điều chỉnh bởi pháp luật của Các Tiểu vương quốc Ả Rập Thống nhất, nơi trang web được vận hành, mà không tính đến các quy tắc xung đột pháp luật của nước này. Bất kỳ tranh chấp nào phát sinh từ hoặc liên quan đến các điều khoản này hoặc việc bạn sử dụng dịch vụ sẽ được giải quyết bởi các tòa án của Các Tiểu vương quốc Ả Rập Thống nhất. Nếu bất kỳ phần nào của các điều khoản này bị coi là không thể thi hành, các phần còn lại vẫn tiếp tục có hiệu lực đầy đủ.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              10. Thay đổi đối với các điều khoản này
            </h2>
            <p>
              Chúng tôi có thể cập nhật các điều khoản này khi dịch vụ thay đổi; ví dụ khi chúng tôi thêm công cụ mới, thay đổi giới hạn dung lượng tệp hay bắt đầu dùng một dịch vụ bên thứ ba mới. Khi đó, chúng tôi sẽ cập nhật ngày «Cập nhật lần cuối» ở đầu trang này. Nếu bạn tiếp tục sử dụng CompressMyPic sau khi các điều khoản đã thay đổi, bạn chấp nhận các điều khoản đã cập nhật. Nếu bạn không đồng ý với một thay đổi, hãy ngừng sử dụng dịch vụ.
            </p>
          </section>

<section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              11. Liên hệ
            </h2>
            <p>
              Nếu bạn có bất kỳ câu hỏi nào về các điều khoản này, hãy viết thư cho chúng tôi tại{' '}
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
