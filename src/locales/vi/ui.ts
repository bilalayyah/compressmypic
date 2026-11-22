// Vietnamese (vi) UI strings for CompressMyPic.
// Brand name CompressMyPic is never translated. URLs, bilalayyah@gmail.com and format
// names (JPG/PNG/WebP/HEIC/JPEG/SVG/AVIF/BMP/GIF/PDF) stay as-is. "ZIP" is kept as a
// file-format term. Placeholders: {name} = tool/file name, {max} = max size in MB,
// {year} = current year, {count} = number of extra errors.

export const VI = {
  header: {
    home: 'Trang chủ',
    tools: 'Công cụ',
    howItWorks: 'Cách hoạt động',
    faq: 'Câu hỏi thường gặp',
    about: 'Về chúng tôi',
    blog: 'Blog',
    contact: 'Liên hệ',
    compressImages: 'Nén ảnh',
    themeLight: 'Chế độ sáng',
    themeDark: 'Chế độ tối',
    themeSystem: 'Theo hệ thống',
    languageLabel: 'Ngôn ngữ',
    homeAriaLabel: 'CompressMyPic – Công cụ nén ảnh trực tuyến miễn phí',
    themeLightShort: 'Sáng', // 'Light'
    themeDarkShort: 'Tối', // 'Dark'
    themeSystemShort: 'Hệ thống', // 'System'
    themeHeading: 'Giao diện', // 'Theme' (mobile drawer heading + theme menu aria-label)
    menuAriaLabel: 'Hiện hoặc ẩn menu điều hướng', // 'Toggle navigation menu'
    themeAriaLabel: 'Đổi giao diện màu (hiện tại: {current})', // 'Change color theme (Current: {current})'
    themeTitle: 'Giao diện: {current}', // 'Theme: {current}'
    aboutUs: 'Về chúng tôi', // 'About Us' (mobile drawer)
    contactUs: 'Liên hệ', // 'Contact Us' (mobile drawer)
  },
  footer: {
    blurb:
      'Nén ảnh nhanh chóng, an toàn và riêng tư, ngay trên trình duyệt của bạn. Tối ưu ảnh JPG, PNG và WebP mà không cần tải dữ liệu lên bất kỳ máy chủ bên ngoài nào.',
    privacyNote: 'Riêng tư 100% trên thiết bị của bạn',
    toolsHeading: 'Công cụ xử lý ảnh',
    legalHeading: 'Tin cậy & pháp lý',
    guidesHeading: 'Hướng dẫn',
    blogLabel: 'Blog',
    moreHeading: 'Thêm tiện ích',
    directoryHeading: 'Công cụ nén, chỉnh sửa và phát triển nâng cao',
    processedLocally: 'Xử lý cục bộ bằng HTML5 Canvas',
    bottomRights:
      '© {year} CompressMyPic. Bảo lưu mọi quyền. Công cụ nén ảnh miễn phí ngay trên trình duyệt.',
    deployedNote: 'Crafted with ❤️ by Bilal inspired by Shaheen',
    contactLabel: 'Liên hệ: bilalayyah@gmail.com',
    toolsLinks: [
      { slug: '/', label: 'Nén ảnh' },
      { slug: '/image-resizer', label: 'Đổi kích thước ảnh' },
      { slug: '/image-converter', label: 'Chuyển đổi ảnh' },
      { slug: '/rotate-flip-image', label: 'Xoay & lật ảnh' },
      { slug: '/image-to-pdf', label: 'Ảnh sang PDF' },
      { slug: '/remove-image-metadata', label: 'Xóa metadata' },
    ],
    legalLinks: [
      { slug: '/privacy', label: 'Chính sách bảo mật' },
      { slug: '/terms', label: 'Điều khoản dịch vụ' },
      { slug: '/about', label: 'Về chúng tôi' },
      { slug: '/contact', label: 'Liên hệ hỗ trợ' },
      { slug: '/disclaimer', label: 'Tuyên bố miễn trừ trách nhiệm' },
      { slug: '/cookie-policy', label: 'Chính sách cookie' },
    ],
    guidesLinks: [
      {
        slug: '/guides/compress-images-for-whatsapp',
        label: 'Cách nén ảnh gửi qua WhatsApp mà không mất chất lượng',
      },
      {
        slug: '/guides/jpg-vs-png-vs-webp',
        label: 'JPG vs PNG vs WebP: nên dùng định dạng nào?',
      },
      {
        slug: '/guides/reduce-image-size-to-100kb',
        label: 'Cách giảm kích thước ảnh xuống 100KB cho web và email',
      },
    ],
    moreLinks: [
      { slug: '/image-metadata-viewer', label: 'Xem metadata & EXIF' },
      { slug: '/favicon-generator', label: 'Tạo favicon' },
      { slug: '/image-color-picker', label: 'Lấy màu từ ảnh' },
      { slug: '/image-dimensions-checker', label: 'Kiểm tra kích thước ảnh' },
    ],
    directoryLinks: [
      { slug: '/compress-image-to-50kb', label: 'Nén xuống 50KB' },
      { slug: '/compress-image-to-100kb', label: 'Nén xuống 100KB' },
      { slug: '/compress-image-to-200kb', label: 'Nén xuống 200KB' },
      { slug: '/compress-image-to-500kb', label: 'Nén xuống 500KB' },
      { slug: '/target-file-size-compressor', label: 'Nén theo dung lượng mục tiêu' },
      { slug: '/bulk-image-compressor', label: 'Nén ảnh hàng loạt' },
      { slug: '/bulk-image-resizer', label: 'Đổi kích thước ảnh hàng loạt' },
      { slug: '/bulk-image-converter', label: 'Chuyển đổi ảnh hàng loạt' },
      { slug: '/web-image-optimizer', label: 'Tối ưu ảnh cho web' },
      { slug: '/gif-compressor', label: 'Nén GIF' },
      { slug: '/image-cropper', label: 'Cắt ảnh' },
      { slug: '/image-watermark', label: 'Chèn watermark vào ảnh' },
      { slug: '/blur-pixelate-image', label: 'Làm mờ & pixel hóa' },
      { slug: '/add-text-to-image', label: 'Thêm chữ vào ảnh' },
      { slug: '/image-border-generator', label: 'Tạo viền ảnh' },
      { slug: '/round-image-corners', label: 'Bo tròn góc ảnh' },
      { slug: '/image-brightness-editor', label: 'Chỉnh độ sáng ảnh' },
      { slug: '/image-contrast-editor', label: 'Chỉnh độ tương phản ảnh' },
      { slug: '/image-saturation-editor', label: 'Chỉnh độ bão hòa ảnh' },
      { slug: '/image-filters', label: 'Bộ lọc ảnh' },
      { slug: '/add-background-to-image', label: 'Thêm nền cho ảnh' },
      { slug: '/image-splitter', label: 'Chia ảnh' },
      { slug: '/image-dpi-changer', label: 'Đổi DPI ảnh' },
      { slug: '/image-to-base64', label: 'Ảnh sang Base64' },
      { slug: '/base64-to-image', label: 'Base64 sang ảnh' },
      { slug: '/image-color-palette-extractor', label: 'Trích xuất bảng màu' },
      { slug: '/gif-maker', label: 'Tạo GIF' },
      { slug: '/image-collage-maker', label: 'Tạo ảnh ghép' },
      { slug: '/heic-to-jpg', label: 'HEIC sang JPG' },
      { slug: '/jpg-to-png', label: 'JPG sang PNG' },
      { slug: '/png-to-jpg', label: 'PNG sang JPG' },
      { slug: '/jpg-to-webp', label: 'JPG sang WebP' },
      { slug: '/webp-to-jpg', label: 'WebP sang JPG' },
      { slug: '/png-to-webp', label: 'PNG sang WebP' },
      { slug: '/webp-to-png', label: 'WebP sang PNG' },
      { slug: '/svg-to-png', label: 'SVG sang PNG' },
      { slug: '/avif-to-jpg', label: 'AVIF sang JPG' },
      { slug: '/bmp-to-jpg', label: 'BMP sang JPG' },
    ],
  },
  hero: {
    pill: 'Nén ảnh 100% riêng tư trên thiết bị của bạn · Không tải lên máy chủ',
    h1: 'Công cụ nén ảnh miễn phí – Nén ảnh trực tuyến',
    sub: 'Giảm dung lượng tệp ảnh mà không làm mất chất lượng nhìn thấy được. Nén ảnh trực tuyến miễn phí với công cụ nén ảnh của chúng tôi: trình tối ưu ảnh trực tuyến cho JPG, PNG, WebP và HEIC. Nhanh, an toàn, không cần đăng ký, không watermark, nén dễ dàng ngay trên trình duyệt của bạn.',
    badge1: 'Ảnh của bạn không bao giờ rời khỏi thiết bị',
    badge2: 'Xử lý tức thì ngay trên trình duyệt',
    badge3: 'Hỗ trợ JPG, PNG, WebP và HEIC',
  },
  toolsDirectory: {
    heading: 'Thêm công cụ miễn phí để xử lý ảnh',
    subheading:
      'Mọi công cụ đều chạy 100% trên trình duyệt của bạn: không tải lên máy chủ, không cần đăng ký, không watermark.',
    eyebrow: 'Tất cả công cụ chạy ngay trên trình duyệt', // 'All Browser-Native Tools'
    allTools: 'Tất cả công cụ', // 'All Tools'
    openTool: 'Mở công cụ', // 'Open tool'
  },
  educational: {
    sections: [
      {
        heading: 'Nén ảnh là gì?',
        body: 'Nén ảnh là quá trình giảm dung lượng (tính bằng byte) của một tệp hình ảnh mà không làm giảm chất lượng hình ảnh vượt quá mức chấp nhận được. Khi máy ảnh hoặc điện thoại lưu một bức ảnh, nó lưu trữ một lượng dữ liệu rất lớn, và phần lớn thông tin đó không thể phân biệt bằng mắt thường khi bị loại bỏ hoặc đơn giản hóa. CompressMyPic là công cụ tối ưu ảnh trực tuyến miễn phí và công cụ giảm dung lượng ảnh, hoạt động như một trình nén ảnh và công cụ giảm kích thước ảnh cho các tệp JPG, PNG và WebP.\n\nBằng cách phân tích các mẫu này, các thuật toán nén ảnh sắp xếp lại hoặc loại bỏ có chọn lọc thông tin dư thừa. Tệp kết quả cần ít dung lượng lưu trữ hơn nhiều và truyền qua internet nhanh hơn nhiều. Hướng dẫn này chỉ cho bạn cách nén ảnh mà không mất chất lượng, với thanh trượt chất lượng, các mức cài đặt sẵn và lựa chọn định dạng của CompressMyPic.',
      },
      {
        heading: 'Vì sao bạn nên nén ảnh?',
        body: 'Ảnh chưa được tối ưu là một trong những nguyên nhân lớn nhất khiến trang web tải chậm, tốn dung lượng lưu trữ và tốn dữ liệu di động. Nén ảnh mang lại những lợi ích ngay lập tức và cụ thể:',
        bullets: [
          'Trang web tải nhanh hơn: các trang có ảnh đã nén tải nhanh hơn tới 70%, giúp cải thiện Core Web Vitals (Largest Contentful Paint) và thứ hạng tìm kiếm. Khi bạn giảm kích thước ảnh trên trang web, khách truy cập ở lại lâu hơn và ít rời trang hơn.',
          'Ít tốn dung lượng lưu trữ: giảm chi phí lưu trữ đám mây, ổ đĩa máy chủ và sao lưu bằng cách lưu các tệp ảnh đã tối ưu thay vì bản gốc nặng nề.',
          'Chia sẻ ảnh dễ dàng hơn: không còn bị giới hạn kích thước tệp đính kèm email hay hạn mức tải lên trong tin nhắn cản trở. Ảnh đã nén đính kèm và gửi đi ngay lập tức, ngay cả với kết nối di động chậm hoặc gói dữ liệu hạn chế.',
          'Ít tốn băng thông: tiết kiệm tiền cho người dùng với gói dữ liệu di động và tránh việc khách truy cập rời khỏi trang của bạn. Tệp nhỏ hơn tải xuống nhanh hơn, đặc biệt trên kết nối di động chậm.',
        ],
      },
      {
        heading: 'Cách hoạt động',
        body: 'Nén ảnh chỉ mất vài giây: không cần tài khoản, không cần phần mềm, không cần tải lên. Đây là cách bạn có thể nén ảnh mà không mất chất lượng chỉ trong ba bước đơn giản.',
        bullets: [
          'Bước 1 — Tải ảnh lên: kéo và thả ảnh JPG, PNG, WebP hoặc HEIC vào khu vực tải lên, nhấn «Duyệt tệp» để chọn, hoặc dán ảnh bằng Ctrl+V. Bạn có thể tải nhiều ảnh cùng lúc, tối đa 20 MB mỗi ảnh.',
          'Bước 2 — Điều chỉnh chất lượng và chọn định dạng: chọn một mức cài đặt sẵn Thấp, Cân bằng hoặc Cao, hoặc kéo thanh trượt chất lượng từ 10% đến 100%, và quyết định giữ định dạng gốc hay chuyển sang JPG, PNG hoặc WebP. Xem kích thước trước và sau trực tiếp cho từng ảnh và dùng thanh trượt so sánh tương tác để kiểm tra kết quả bằng mắt.',
          'Bước 3 — Tải ảnh đã nén xuống: tải từng ảnh đã nén riêng lẻ hoặc nhấn «Tải tất cả (ZIP)» để tải toàn bộ lô trong một tệp duy nhất. Ảnh của bạn được nén ngay trên trình duyệt, nên không có gì phải chờ đợi hay tải lên.',
        ],
      },
      {
        heading: 'Vì sao nên dùng công cụ nén ảnh miễn phí này?',
        body: 'CompressMyPic là công cụ nén ảnh miễn phí, không cần đăng ký và không có watermark, được thiết kế cho ảnh thường ngày, ảnh trang web và bài đăng mạng xã hội.',
        bullets: [
          'Nén JPG, PNG, WebP và HEIC: một công cụ nén ảnh duy nhất cho các định dạng bạn thực sự dùng. Nén ảnh JPG và JPEG, nén đồ họa PNG mà vẫn giữ độ trong suốt và nén ảnh WebP để có tệp nhỏ nhất.',
          'Giảm kích thước ảnh mà không mất chất lượng: tính năng nén thông minh loại bỏ dữ liệu dư thừa và metadata, và ảnh vẫn trông gần như giống hệt bản gốc. Mức Cân bằng là điểm khởi đầu tốt nhất, và tính năng so sánh trước/sau cho phép bạn tự kiểm tra chất lượng.',
          'Nén ảnh hàng loạt: nén nhiều ảnh cùng lúc — công cụ nén ảnh hàng loạt này cho phép bạn nén nhiều ảnh cùng lúc với cùng một cài đặt và tải tất cả xuống cùng nhau bằng nút «Tải tất cả (ZIP)», thay vì lưu từng tệp một.',
          'Nén ảnh cho WhatsApp, Instagram và Facebook: giảm kích thước ảnh để gửi nhanh qua WhatsApp và tải lên Instagram, Facebook mà không gặp trục trặc. Tệp nhỏ hơn tốn ít dữ liệu di động hơn và ít có khả năng bị từ chối vì quá lớn.',
          'Giảm kích thước ảnh xuống 20KB, 50KB, 100KB hoặc 200KB: kéo thanh trượt chất lượng xuống từng bước và xem kích thước trước/sau trực tiếp cho đến khi đạt mục tiêu: 200KB, 100KB, 50KB hoặc thậm chí 20KB. Chuyển định dạng đầu ra sang WebP thường giúp bạn đạt được mục tiêu với ít mất chất lượng nhìn thấy hơn.',
        ],
      },
      {
        heading: 'Nén JPG, PNG và WebP: nên chọn định dạng nào?',
        body: 'JPG, PNG và WebP phục vụ các mục đích khác nhau. Hiểu rõ điểm mạnh của từng định dạng giúp bạn chọn lựa tốt nhất cho dự án của mình.\n\nSo sánh sự khác biệt bằng mắt: không biết mức nén nào là chấp nhận được? Hãy dùng tính năng so sánh trước/sau của công cụ. Thanh trượt tương tác cho phép bạn xem ảnh gốc và phiên bản đã nén cạnh nhau để phát hiện lỗi hiển thị hoặc mất chất lượng trước khi tải xuống.',
        bullets: [
          'Công cụ nén JPG — Nén JPG trực tuyến miễn phí: lý tưởng cho ảnh trên trang web, blog hoặc portfolio của bạn. Nén JPG trực tuyến miễn phí và nén JPEG xuống 100KB bằng cách kéo thanh trượt chất lượng xuống trong khi xem kích thước trực tiếp. Nén JPEG là nén có mất dữ liệu: nó loại bỏ vĩnh viễn một số dữ liệu hình ảnh mà mắt người khó nhận ra. Vì vậy, bạn có thể giảm một bức ảnh từ vài megabyte xuống còn vài kilobyte mà không mất chất lượng nhìn thấy được.',
          'Công cụ nén PNG — Nén PNG trực tuyến miễn phí: lý tưởng cho đồ họa, ảnh chụp màn hình, logo và hình ảnh cần độ trong suốt, như logo, biểu tượng hoặc minh họa. Nén PNG trực tuyến miễn phí tại đây mà vẫn giữ toàn bộ độ trong suốt, cho đồ họa sắc nét và hoàn hảo từng điểm ảnh. Chuyển PNG sang WebP thường giúp tệp nhỏ hơn nhiều.',
          'Nén ảnh WebP — Định dạng hiện đại: lý tưởng để tối ưu web. WebP mang lại khả năng nén có mất dữ liệu và không mất dữ liệu tuyệt vời, thường nhỏ hơn JPEG hoặc PNG từ 25% đến 35%. Nén tệp ảnh WebP để có kích thước nhỏ nhất với chất lượng tương tự, và dùng WebP khi bạn muốn tối ưu ảnh cho trang web mà không mất chất lượng nhìn thấy được. Đây là lựa chọn tốt nhất cho hầu hết các trang web.',
        ],
      },
      {
        heading: 'Bạn có thể dùng công cụ nén ảnh này để làm gì?',
        body: 'Một công cụ nén ảnh miễn phí duy nhất đáp ứng những lý do phổ biến nhất khiến mọi người cần giảm kích thước ảnh.',
        bullets: [
          'Tối ưu ảnh cho web: tối ưu ảnh trên trang web của bạn để tải nhanh hơn, cải thiện Core Web Vitals và xếp hạng cao hơn. Ảnh nhỏ hơn đồng nghĩa với trang nhanh hơn, khách truy cập hài lòng hơn và ít tốn băng thông lưu trữ hơn.',
          'Nén ảnh để đính kèm email: nén ảnh để đính kèm email sao cho ảnh của bạn vừa trong giới hạn kích thước tệp đính kèm. Đính kèm các tệp đã tải xuống nhỏ hơn thay vì bản gốc lớn và email của bạn sẽ được gửi đi mà không bị trả lại.',
          'Nén ảnh cho trang web: nén ảnh cho trang web, blog, portfolio hoặc cửa hàng trực tuyến trước khi tải lên. Ảnh sản phẩm, banner và ảnh blog vẫn sắc nét và chiếm ít dung lượng máy chủ hơn nhiều.',
          'Giảm dung lượng tệp ảnh: giảm dung lượng tệp ảnh từ điện thoại hoặc máy ảnh trước khi chia sẻ, lưu trữ hoặc in ấn. Ảnh lớn gửi đi nhanh, lưu dễ dàng và quản lý không rắc rối.',
        ],
      },
      {
        heading: 'Vì sao kích thước ảnh lại quan trọng',
        body: 'Các tệp ảnh lớn, độ phân giải cao là kết quả của sự phát triển nhanh chóng của công nghệ máy ảnh: ảnh hiện nay lớn gấp 2 đến 3 lần so với chỉ vài năm trước. Khi bạn giảm kích thước ảnh trên trang web và tối ưu ảnh cho web, trang của bạn tải nhanh hơn, tốn ít băng thông hơn và xếp hạng tốt hơn trong kết quả tìm kiếm.\n\nKhi tìm một công cụ nén tốt, hãy lưu ý rằng nó: 1) không làm mất chất lượng, 2) giữ dữ liệu của bạn riêng tư (xử lý trên thiết bị của bạn) và 3) xử lý ảnh nhanh mà không gửi tệp của bạn đến một máy chủ xa xôi. Đó chính là mục đích CompressMyPic được tạo ra.',
      },
      {
        heading: 'Mẹo tối ưu: giảm kích thước ảnh mà không mất chất lượng',
        body: '',
        bullets: [
          'Bắt đầu với mức Cân bằng: mức Cân bằng (chất lượng 70%) mang lại sự cân bằng tốt nhất cho hầu hết ảnh: tệp nhỏ hơn nhiều và vẫn rất giống với bản gốc.',
          'Chọn định dạng phù hợp: đối với ảnh chụp, JPG hoặc WebP luôn cho tệp nhỏ hơn PNG. Đối với logo và đồ họa đường nét có độ trong suốt, hãy dùng PNG.',
          'Nhắm đến kích thước mục tiêu: để dùng trên trang web, hãy nhắm đến ảnh dưới 200 KB. Đối với email và tin nhắn, giữ dưới 1 MB để gửi nhanh. Dùng thanh trượt chất lượng và kích thước trực tiếp để đạt kích thước mục tiêu.',
          'Tìm điểm phù hợp nhất: đặt thanh trượt chất lượng ở 85–90% cho ảnh chính, nơi chất lượng quan trọng; 70–80% thường là sự cân bằng lý tưởng cho việc dùng chung trên web; 50–60% tốt hơn cho ảnh thu nhỏ hoặc khi kích thước là quan trọng nhất.',
          'Thử WebP để có tệp nhỏ nhất: chuyển định dạng đầu ra sang WebP thường giúp giảm JPG hoặc PNG thêm 25% đến 35% với chất lượng tương tự — một cách đơn giản để giảm kích thước ảnh mà không mất chất lượng.',
        ],
      },
    ],
  },
  faqSection: {
    heading: 'Câu hỏi thường gặp',
    subheading:
      'Mọi điều bạn cần biết về cách nén ảnh trực tuyến miễn phí với CompressMyPic.',
    faqs: [
      {
        id: 'faq-1',
        question: 'Làm thế nào để nén ảnh trực tuyến miễn phí?',
        answer:
          'Chỉ cần kéo và thả tệp ảnh vào CompressMyPic hoặc nhấn «Duyệt tệp». Chọn một mức nén có sẵn (Thấp, Cân bằng hoặc Cao) hoặc điều chỉnh thanh trượt chất lượng, rồi tải ảnh đã tối ưu xuống ngay lập tức. Công cụ hoàn toàn miễn phí, không cần đăng ký hay cài đặt phần mềm.',
      },
      {
        id: 'faq-2',
        question: 'Làm thế nào để nén ảnh xuống 100KB?',
        answer:
          'CompressMyPic không có ô để nhập kích thước chính xác tính bằng KB, nên bạn không thể nhập trực tiếp 100KB. Thay vào đó, hãy tải ảnh lên, chọn một mức có sẵn hoặc kéo thanh trượt chất lượng xuống, và xem kích thước trước/sau trực tiếp hiển thị cho từng ảnh. Điều chỉnh chất lượng hoặc chuyển định dạng đầu ra sang WebP cho đến khi kích thước đã nén gần đạt 100KB, rồi tải xuống.',
      },
      {
        id: 'faq-3',
        question: 'Làm thế nào để giảm kích thước ảnh mà không mất chất lượng?',
        answer:
          'Chọn mức Cân bằng (khoảng 70% chất lượng) hoặc chất lượng cao 85–90%, giúp loại bỏ dữ liệu dư thừa và metadata trong khi ảnh vẫn trông gần như giống hệt bản gốc. Dùng tính năng so sánh trước/sau tương tác để kiểm tra kết quả, và giữ định dạng gốc hoặc chọn WebP để có sự cân bằng tốt nhất giữa chất lượng và kích thước.',
      },
      {
        id: 'faq-4',
        question: 'Làm thế nào để nén JPEG xuống 100KB?',
        answer:
          'Để giảm dung lượng tệp JPEG, hãy tải JPEG lên, chọn JPEG làm định dạng đầu ra và kéo thanh trượt chất lượng xuống từng bước trong khi xem kích thước đã nén trực tiếp. Vì không có ô nhập kích thước chính xác tính bằng KB, hãy dùng chế độ xem kích thước trước/sau để dừng lại khi tệp gần đạt 100KB.',
      },
      {
        id: 'faq-5',
        question: 'Làm thế nào để giảm kích thước ảnh xuống 20KB, 50KB hoặc 200KB?',
        answer:
          'Tải ảnh lên và kéo thanh trượt chất lượng xuống từng chút một, kiểm tra kích thước trước/sau trực tiếp sau mỗi lần thay đổi, cho đến khi đạt mục tiêu: 200KB, 50KB hoặc 20KB. Các mục tiêu nhỏ hơn như 20KB thường cần chất lượng thấp hơn và đầu ra WebP. Cách này áp dụng cho mọi mục tiêu, kể cả 500KB, và kích thước luôn hiển thị bằng KB để bạn thấy chính xác mình đã giảm dung lượng ảnh bao nhiêu KB.',
      },
      {
        id: 'faq-6',
        question: 'Làm thế nào để nén PNG trực tuyến miễn phí?',
        answer:
          'Tải PNG lên CompressMyPic và chọn một mức có sẵn hoặc điều chỉnh thanh trượt chất lượng: nén PNG trực tuyến hoàn toàn miễn phí tại đây, không cần đăng ký. Độ trong suốt được giữ nguyên trong đầu ra PNG và WebP, và chuyển PNG sang WebP thường giúp tệp nhỏ hơn nhiều.',
      },
      {
        id: 'faq-7',
        question: 'Những định dạng ảnh nào được hỗ trợ?',
        answer:
          'CompressMyPic hỗ trợ JPG (JPEG), PNG, WebP và HEIC, bao gồm cả ảnh chụp bằng iPhone, vốn được lưu ở định dạng HEIC theo mặc định. Bạn có thể giữ định dạng gốc hoặc chuyển đổi giữa các định dạng; ví dụ: nén tệp JPG dưới dạng JPEG, nén tệp PNG mà vẫn giữ độ trong suốt hoặc chuyển sang WebP để có tệp nhỏ nhất.',
      },
      {
        id: 'faq-8',
        question: 'Tôi có thể nén nhiều ảnh cùng lúc không?',
        answer:
          'Có. Công cụ nén ảnh hàng loạt này cho phép bạn tải hàng chục ảnh cùng lúc, nén nhiều ảnh cùng lúc với cùng một cài đặt và tải tất cả xuống cùng nhau bằng nút «Tải tất cả (ZIP)», hoặc tải từng ảnh riêng lẻ.',
      },
      {
        id: 'faq-9',
        question: 'Làm thế nào để nén ảnh gửi qua WhatsApp?',
        answer:
          'Tải ảnh lên, chọn mức chất lượng thấp hơn hoặc đầu ra WebP, rồi tải tệp nhỏ hơn xuống trước khi chia sẻ qua WhatsApp. Ảnh nhỏ hơn gửi nhanh hơn, tốn ít dữ liệu di động hơn và ít có khả năng bị từ chối vì quá lớn.',
      },
      {
        id: 'faq-10',
        question: 'Làm thế nào để nén ảnh cho Instagram hoặc Facebook?',
        answer:
          'Nén ảnh cho Instagram hoặc Facebook bằng cách tải lên tại đây, chọn mức Cân bằng và tải tệp JPG hoặc WebP nhỏ hơn xuống. Tệp đã giảm tải lên nhanh hơn và vẫn giữ đủ chất lượng cho bài đăng, story và ảnh đại diện.',
      },
      {
        id: 'faq-11',
        question: 'Tôi có thể nén ảnh để đính kèm email không?',
        answer:
          'Có. Nén ảnh để đính kèm email bằng cách giảm kích thước bằng thanh trượt chất lượng cho đến khi mỗi tệp đủ nhỏ so với giới hạn tệp đính kèm của nhà cung cấp email, rồi đính kèm các tệp đã tải xuống vào thư thay vì bản gốc lớn.',
      },
      {
        id: 'faq-12',
        question: 'CompressMyPic có thực sự miễn phí không?',
        answer:
          'Có, CompressMyPic hoàn toàn miễn phí. Không có phí, không có gói trả phí, không có credit hay giới hạn số lượng ảnh bạn có thể nén.',
      },
      {
        id: 'faq-13',
        question: 'CompressMyPic có thêm watermark không?',
        answer:
          'Không. CompressMyPic là công cụ nén ảnh miễn phí không có watermark: ảnh đã nén của bạn sạch sẽ, không có logo, chữ hay dấu nào được thêm vào.',
      },
      {
        id: 'faq-14',
        question: 'Tôi có cần đăng ký để dùng CompressMyPic không?',
        answer:
          'Không. Đây là công cụ nén ảnh miễn phí không cần đăng ký: bạn không cần tài khoản, email hay mật khẩu. Chỉ cần mở trang web và bắt đầu nén.',
      },
      {
        id: 'faq-15',
        question: 'Ảnh của tôi có được tải lên máy chủ không?',
        answer:
          'Không. Toàn bộ quá trình nén diễn ra hoàn toàn trên thiết bị của bạn, trong trình duyệt web, vì vậy ảnh của bạn không bao giờ được tải lên máy chủ hay bị người khác lưu trữ hoặc xem. Ảnh chỉ nằm trong bộ nhớ trình duyệt và bị xóa khi bạn làm mới hoặc đóng tab.',
      },
      {
        id: 'faq-16',
        question: 'Có giới hạn dung lượng tệp không?',
        answer:
          'Có, giới hạn là 20 MB mỗi ảnh, đủ cho ảnh máy ảnh độ phân giải cao và ảnh chụp màn hình lớn. Vì quá trình xử lý diễn ra trên thiết bị của bạn, việc nén vẫn nhanh ngay cả với tệp lớn.',
      },
      {
        id: 'faq-17',
        question: 'Nén ảnh có làm thay đổi kích thước ảnh không?',
        answer:
          'Không. CompressMyPic giữ nguyên kích thước ảnh của bạn: chỉ dung lượng tệp được giảm. Ảnh của bạn giữ nguyên chiều rộng, chiều cao và tỷ lệ khung hình như bản gốc.',
      },
      {
        id: 'faq-18',
        question: 'Tôi có thể nén ảnh trên điện thoại không?',
        answer:
          'Có. CompressMyPic hoạt động trên trình duyệt di động của iOS và Android, vì vậy bạn có thể nén ảnh trên điện thoại bằng cách chọn ảnh từ thư viện hoặc chụp ảnh mới rồi tải lên tại đây.',
      },
      {
        id: 'faq-19',
        question: 'Thanh trượt chất lượng hoạt động như thế nào?',
        answer:
          'Thanh trượt chất lượng cho phép bạn đặt chất lượng nén từ 10% đến 100%. Giá trị cao hơn giữ lại nhiều chi tiết hơn và tạo tệp lớn hơn, trong khi giá trị thấp hơn tạo tệp nhỏ hơn nhiều. Các mức có sẵn Thấp, Cân bằng và Cao sẽ đặt thanh trượt thay bạn, và kích thước trước/sau trực tiếp cho thấy kết quả của mỗi thay đổi.',
      },
      {
        id: 'faq-20',
        question: 'Làm thế nào để chọn định dạng đầu ra?',
        answer:
          'Sau khi tải ảnh lên, hãy chọn giữ định dạng gốc hoặc chuyển sang JPG, PNG hoặc WebP. WebP thường là lựa chọn tốt nhất để tối ưu ảnh cho trang web, vì nó nhỏ hơn JPEG từ 25% đến 35% với chất lượng tương tự, trong khi PNG tốt hơn khi bạn cần độ trong suốt.',
      },
    ],
  },
  guidesSection: {
    heading: 'Hướng dẫn',
    subheading:
      'Hướng dẫn từng bước để có tệp nhỏ hơn mà không mất chất lượng nhìn thấy được.',
    cards: [
      {
        title: 'Cách nén ảnh gửi qua WhatsApp mà không mất chất lượng',
        desc: 'Giảm kích thước ảnh trước khi gửi để ảnh vẫn sắc nét và gửi nhanh.',
        cta: 'Đọc hướng dẫn →',
      },
      {
        title: 'JPG vs PNG vs WebP: nên dùng định dạng nào?',
        desc: 'So sánh dung lượng tệp, chất lượng và độ trong suốt để chọn đúng định dạng.',
        cta: 'Đọc hướng dẫn →',
      },
      {
        title: 'Cách giảm kích thước ảnh xuống 100KB cho web và email',
        desc: 'Từng bước: đạt 100KB mà không mất chất lượng nhìn thấy được.',
        cta: 'Đọc hướng dẫn →',
      },
    ],
  },
  blog: {
    blog: 'Blog',
    homeHeading: 'Hướng dẫn, mẹo và tài nguyên về ảnh',
    homeSubheading:
      'Hướng dẫn thực tế để nén, đổi kích thước, chuyển đổi và chỉnh sửa ảnh — viết cho công việc thực tế, không phải cho công cụ tìm kiếm.',
    searchPlaceholder: 'Tìm hướng dẫn…',
    searchNoResults: 'Không tìm thấy hướng dẫn nào cho “{query}”.',
    featuredHeading: 'Hướng dẫn nổi bật',
    latestHeading: 'Hướng dẫn mới nhất ({count})',
    categoriesHeading: 'Khám phá theo danh mục',
    emptyHeading: 'Chưa có hướng dẫn nào',
    emptyText:
      'Chúng tôi đang viết những hướng dẫn đầu tiên cho mục này. Hãy quay lại sau — hoặc thử một trong các công cụ miễn phí.',
    readArticle: 'Đọc hướng dẫn →',
    minRead: '{minutes} phút đọc',
    publishedOn: 'Đăng ngày {date}',
    updatedOn: 'Cập nhật ngày {date}',
    bylineAuthor: 'Đội ngũ biên tập CompressMyPic',
    tableOfContents: 'Trên trang này',
    faqHeading: 'Câu hỏi thường gặp',
    relatedArticlesHeading: 'Hướng dẫn liên quan',
    relatedToolsHeading: 'Thử công cụ',
    tryToolCta: 'Thử {tool} — miễn phí, không cần đăng ký',
    prevArticle: '← Hướng dẫn trước',
    nextArticle: 'Hướng dẫn tiếp theo →',
    backToBlog: '← Quay lại blog',
    shareHeading: 'Chia sẻ hướng dẫn này',
    copyLink: 'Sao chép liên kết',
    copied: 'Đã sao chép!',
    shareOnX: 'Chia sẻ lên X',
    shareOnFacebook: 'Chia sẻ lên Facebook',
    shareOnWhatsApp: 'Chia sẻ qua WhatsApp',
    notAvailableHeading: 'Hướng dẫn này chưa có bằng ngôn ngữ của bạn',
    notAvailableText:
      'Chúng tôi vẫn đang dịch hướng dẫn này. Bạn có thể đọc bằng tiếng Anh hoặc khám phá các hướng dẫn đã có bằng ngôn ngữ của bạn.',
    viewBlogHome: 'Khám phá blog',
    guidesHeading: 'Hướng dẫn từng bước của chúng tôi',
    categoryGuidesHeading: 'Hướng dẫn: {category}',
    relatedArticlesForTool: 'Hướng dẫn liên quan: {tool}',
  },
  shareSection: {
    heading: 'Chia sẻ CompressMyPic với bạn bè',
    text: 'Thấy công cụ này hữu ích? Hãy giúp một người bạn cũng nén được ảnh của họ: chỉ cần một chạm.',
    shareText:
      'Nén ảnh trực tuyến miễn phí — không cần đăng ký, không watermark. Thử CompressMyPic:',
    siteUrl: 'https://compressmypic.online/',
    shareOn: 'Chia sẻ lên {name}',
    copyLink: 'Sao chép liên kết',
    copied: 'Đã sao chép!',
    share: 'Chia sẻ',
    emailSubject: 'Công cụ nén ảnh miễn phí – CompressMyPic', // 'Free Image Compressor – CompressMyPic'
    nativeShareTitle: 'CompressMyPic – Công cụ nén ảnh miễn phí', // 'CompressMyPic – Free Image Compressor'
  },
  toolPageLayout: {
    home: 'Trang chủ',
    privacyPill: 'Xử lý 100% riêng tư trên trình duyệt · Tệp không bao giờ rời khỏi thiết bị của bạn',
    noUploads: 'Không tải lên máy chủ',
    freeNote: 'Miễn phí · Không cần đăng ký · Không watermark',
    howToTitle: 'Cách dùng {name}',
    howToIntro:
      'Làm theo các bước đơn giản sau để hoàn thành công việc, ngay trên trình duyệt của bạn.',
    featuresTitle: 'Vì sao nên dùng {name} của CompressMyPic?',
    faqTitle: '{name} — Câu hỏi thường gặp',
    relatedTitle: 'Công cụ ảnh miễn phí liên quan',
    relatedLinksIntro: 'Bạn cũng có thể cần:',
    shareHeading: 'Chia sẻ công cụ này',
    shareCopyLink: 'Sao chép liên kết',
    shareCopied: 'Đã sao chép!',
    shareOnX: 'Chia sẻ lên X',
    shareOnFacebook: 'Chia sẻ lên Facebook',
    shareOnWhatsApp: 'Chia sẻ qua WhatsApp',
    commentsTitle: 'Bình luận',
    commentsNote: 'Chia sẻ ý kiến của bạn về công cụ này: chỉ cần viết tên và đăng. Không cần tài khoản.',
    commentsNamePlaceholder: 'Tên của bạn',
    commentsTextPlaceholder: 'Viết bình luận của bạn…',
    commentsSubmit: 'Đăng bình luận',
    commentsPosting: 'Đang đăng…',
    commentsEmpty: 'Hãy là người đầu tiên bình luận.',
    commentsPosted: 'Cảm ơn bạn! Bình luận của bạn đã được đăng.',
    commentsLoadError: 'Không thể tải bình luận. Vui lòng thử lại.',
    commentsPostError: 'Không thể đăng bình luận của bạn. Vui lòng thử lại.',
    commentsRetry: 'Thử lại',
    commentsLoading: 'Đang tải bình luận…',
  },
  uploadZone: {
    dropText: 'Kéo và thả ảnh của bạn vào đây',
    browseButton: 'duyệt tệp',
    browsePrefix: 'hoặc',
    browseSuffix: 'từ máy tính hoặc điện thoại của bạn',
    orPaste: 'Hỗ trợ dán (Ctrl+V)',
    hint: 'Tối đa {max} MB mỗi ảnh',
    errorTooBig: '"{name}" vượt quá giới hạn tối đa {max} MB.',
    errorBadType: '"{name}" không đúng định dạng được hỗ trợ ({formats}).',
    errorUnreadable: '"{name}" là tệp trống (0 byte).',
    errorMore: '(+{count} lỗi nữa)',
    formatsLabel: 'JPG, PNG, WebP, HEIC',
    ariaLabel:
      'Khu vực tải ảnh lên. Kéo và thả hoặc nhấn để duyệt tệp.', // 'Upload images area. Drag and drop or click to browse files.'
    errorLoadFailed: 'Tệp bị hỏng hoặc không đọc được.', // App.tsx handleFilesSelected catch: 'Corrupted or unreadable image file.'
  },
  comparisonModal: {
    titlePrefix: 'So sánh chất lượng trực quan',
    beforeLabel: 'Gốc (trước)',
    afterLabel: 'Đã nén (sau)',
    closeLabel: 'Đóng chế độ xem so sánh',
    instruction: 'Kéo thanh trượt sang trái hoặc phải để kiểm tra chất lượng từng điểm ảnh.',
    sliderLabel: 'Thanh trượt',
    sideBySideLabel: 'Cạnh nhau',
    zoomInLabel: 'Phóng to',
    zoomOutLabel: 'Thu nhỏ',
    originalLabel: 'Gốc:',
    outputLabel: 'Kết quả:',
    reductionLabel: 'Đã giảm:',
    sizeChangeLabel: 'Thay đổi kích thước:',
    qualityLabel: 'Cài đặt chất lượng:',
    formatLabel: 'Định dạng:',
    modalAriaLabel: 'Cửa sổ so sánh ảnh', // 'Image comparison modal'
    altCompressed: 'Phiên bản đã nén của {name}', // 'Compressed version of {name}'
    altOriginal: 'Phiên bản gốc của {name}', // 'Original version of {name}'
    altProcessed: 'Phiên bản đã xử lý của {name}', // 'Processed version of {name}'
  },
  homeMeta: {
    seoTitle: 'Công cụ nén ảnh miễn phí – Nén ảnh trực tuyến',
    seoDescription: 'Nén ảnh trực tuyến miễn phí và giảm dung lượng JPG, PNG và WebP mà không mất chất lượng. Không cần đăng ký hay watermark: ảnh của bạn không bao giờ rời khỏi trình duyệt.',
    h1: 'Công cụ nén ảnh miễn phí – Nén ảnh trực tuyến',
    subtitle: 'Giảm dung lượng tệp JPG, PNG, WebP và HEIC ngay trên trình duyệt của bạn.',
  },
  categories: {
    compress: 'Nén',
    resize: 'Đổi kích thước',
    convert: 'Chuyển đổi',
    'crop-edit': 'Cắt & chỉnh sửa',
    create: 'Tạo',
    privacy: 'Công cụ riêng tư',
    developer: 'Công cụ cho lập trình viên',
  },
  compressionControls: {
    modeLabel: 'Chế độ nén', // 'Compression Mode'
    presetLow: 'Nén thấp (85%)', // 'Low Compression (85%)'
    presetBalanced: 'Cân bằng (70%)', // 'Balanced (70%)'
    presetHigh: 'Nén cao (50%)', // 'High Compression (50%)'
    presetCustom: 'Tùy chỉnh', // 'Custom'
    formatLabel: 'Định dạng đầu ra', // 'Output Format'
    formatOriginal: 'Gốc', // 'Original'
    qualityLabel: 'Chất lượng mong muốn:', // 'Quality Target:'
    qualityHigh: 'Độ trung thực cao', // 'High Fidelity' (quality >= 80)
    qualityOptimal: 'Cân bằng tối ưu cho web', // 'Optimal Web Balance' (60–79)
    qualityMax: 'Tiết kiệm dung lượng tối đa', // 'Max Space Savings' (< 60)
    qualityAriaLabel: 'Thanh trượt chất lượng từ 10 đến 100 phần trăm', // 'Quality slider from 10 to 100 percent'
    compressAll: 'Nén lại tất cả', // 'Re-compress All'
    compressing: 'Đang nén…', // 'Compressing...'
    clearAll: 'Xóa tất cả', // 'Clear All'
    clearAllTitle: 'Xóa tất cả ảnh', // 'Clear all images'
    transparencyTitle: 'Lưu ý về độ trong suốt khi chuyển sang JPEG', // 'Transparency Notice for JPEG Conversion'
    transparencyBody:
      'Định dạng JPEG không hỗ trợ độ trong suốt (kênh alpha). Nền trong suốt sẽ được thay bằng nền đặc (mặc định là trắng). Hãy chọn PNG hoặc WebP nếu bạn muốn giữ nền trong suốt.',
    pngTip:
      'PNG là định dạng không mất dữ liệu và bỏ qua thanh trượt chất lượng, vì vậy mã hóa lại PNG đôi khi có thể bằng hoặc lớn hơn kích thước gốc. Đối với PNG trông giống ảnh chụp, chọn WebP hoặc JPG thường cho tệp nhỏ hơn 50% đến 80%.',
  },
  resultsList: {
    summary: 'Tóm tắt nén', // 'Compression Summary'
    image: 'Ảnh', // 'Image' (count === 1)
    images: 'Ảnh', // 'Images' (count !== 1)
    totalOriginal: 'Tổng gốc:', // 'Total Original:'
    totalCompressed: 'Tổng đã nén:', // 'Total Compressed:'
    totalSaved: 'Tổng đã tiết kiệm:', // 'Total Saved:'
    processing: 'Đang xử lý…', // 'Processing...'
    grewBy: '(tăng thêm {bytes})', // '(grew by {bytes})'
    reduction: 'Đã giảm:', // 'Reduction:'
    sizeChange: 'Thay đổi kích thước:', // 'Size Change:'
    downloadAll: 'Tải tất cả (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'Đang tạo ZIP ({progress}%)…', // 'Creating ZIP ({progress}%)...'
    compare: 'So sánh', // 'Compare'
    compareTitle: 'Nhấn để xem so sánh chất lượng trực quan', // 'Click to inspect visual quality comparison'
    compareActionTitle: 'So sánh trước và sau', // 'Compare visual before/after'
    download: 'Tải xuống', // 'Download'
    retry: 'Thử lại', // 'Retry'
    removeTitle: 'Xóa ảnh', // 'Remove image'
    removeAriaLabel: 'Xóa {name}', // 'Remove {name}'
    keptOriginal: 'Đã giữ bản gốc (mã hóa lại lớn hơn)', // 'Kept original (re-encode was larger)'
    grewByStatus: 'Tăng {bytes}: mã hóa lại lớn hơn bản gốc', // 'Grew by {bytes} — re-encode is larger than the original'
    compressedOk: 'Đã nén thành công', // 'Compressed successfully'
    optimizing: 'Đang tối ưu điểm ảnh…', // 'Optimizing pixels...'
    compressionError: 'Lỗi nén', // 'Compression error'
    original: 'Gốc', // 'Original' (metric label)
    compressed: 'Đã nén', // 'Compressed' (metric label)
    output: 'Đầu ra', // 'Output' (metric label when original kept)
    spaceSaved: 'Dung lượng tiết kiệm', // 'Space Saved'
    formatLabel: 'Định dạng:', // 'Format:' (in "{w}×{h}px · Format: {fmt}")
    alpha: 'Alpha', // 'Alpha' badge
    largerTitle: 'Đầu ra lớn hơn bản gốc {bytes}.', // 'Output is {bytes} larger than the original.'
    largerPngNote:
      'Mã hóa lại PNG không mất dữ liệu bỏ qua thanh trượt chất lượng; WebP hoặc JPG thường nhỏ hơn nhiều đối với PNG trông giống ảnh chụp.',
    largerNote:
      'Ảnh này đã được nén khá nhiều với chất lượng đã chọn.',
    keepOriginal: 'Giữ bản gốc', // 'Keep original'
  },
} as const;

export const TOOL_UI_VI = {
  '/image-resizer': {
    comparisonTitlePrefix: 'So sánh kích thước', // 'Resize Comparison'
    comparisonAfterLabel: 'Đã đổi kích thước (sau)', // 'Resized (After)'
    presetInstagramPost: 'Bài đăng Instagram (1080×1080)', // 'Instagram Post (1080×1080)'
    presetInstagramStory: 'Story Instagram (1080×1920)', // 'Instagram Story (1080×1920)'
    presetYouTubeThumb: 'Ảnh thu nhỏ YouTube (1280×720)', // 'YouTube Thumb (1280×720)'
    presetFacebookCover: 'Ảnh bìa Facebook (851×315)', // 'Facebook Cover (851×315)'
    presetXHeader: 'Ảnh bìa X (1500×500)', // 'X Header (1500×500)'
    presetFullHd: 'Full HD (1920×1080)', // 'Full HD (1920×1080)' — unchanged
    errorResizeFailed: 'Không thể đổi kích thước ảnh.', // 'Resize failed.'
    errorCorruptedFile: 'Tệp ảnh bị hỏng hoặc không đọc được.', // 'Corrupted or unreadable image file.'
    resizeMode: 'Chế độ đổi kích thước', // 'Resize Mode'
    modeByPixels: 'Theo điểm ảnh (R × C)', // 'By Pixels (W × H)'
    modeByPercentage: 'Theo phần trăm (%)', // 'By Percentage (%)'
    outputFormat: 'Định dạng đầu ra', // 'Output Format'
    formatOriginal: 'Gốc', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    widthLabel: 'Chiều rộng (px)', // 'Width (px)'
    heightLabel: 'Chiều cao (px)', // 'Height (px)'
    placeholderAuto: 'Tự động', // placeholder 'Auto'
    aspectRatioLocked: 'Tỷ lệ khung hình đã khóa', // 'Aspect Ratio Locked'
    aspectRatioUnlocked: 'Đã mở khóa (tùy chỉnh)', // 'Unlocked (Custom)'
    fitModeLabel: 'Chế độ vừa khung:', // 'Fit Mode:'
    fitContain: 'Vừa khung (không cắt)', // 'Contain (No Crop)'
    fitCover: 'Lấp đầy (cắt giữa)', // 'Cover (Center Crop)'
    fitStretchExact: 'Kéo giãn chính xác', // 'Stretch Exact'
    quickPresets: 'Mẫu nhanh cho mạng xã hội & web', // 'Quick Social & Web Presets'
    scalePercentage: 'Tỷ lệ thu phóng:', // 'Scale Percentage:'
    outputQuality: 'Chất lượng đầu ra:', // 'Output Quality:'
    matteBg: 'Nền mờ:', // 'Matte BG:'
    resizing: 'Đang đổi kích thước…', // 'Resizing...'
    resizeAll: 'Đổi kích thước tất cả ({count})', // 'Resize All ({count})'
    clear: 'Xóa', // 'Clear'
    batchReady: 'Lô đã sẵn sàng', // 'Batch Ready'
    batchReadySingular: '{count} ảnh đã đổi kích thước sẵn sàng để tải xuống', // '{count} resized image ready to download'
    batchReadyPlural: '{count} ảnh đã đổi kích thước sẵn sàng để tải xuống', // '{count} resized images ready to download'
    creatingZip: 'Đang tạo ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Tải tất cả (ZIP)', // 'Download All (ZIP)'
    resizedStatus: 'Đã đổi kích thước ({original} → {converted})', // 'Resized ({original} → {converted})'
    compare: 'So sánh', // 'Compare'
    download: 'Tải xuống', // 'Download'
    removeImage: 'Xóa {name}', // aria-label `Remove ${item.name}`
  },
  '/image-converter': {
    comparisonTitlePrefix: 'So sánh chuyển đổi định dạng', // 'Format Conversion Comparison'
    comparisonAfterLabel: 'Đã chuyển đổi (sau)', // 'Converted (After)'
    errorConversionFailed: 'Không thể chuyển đổi ảnh.', // 'Conversion failed.'
    errorUnsupportedFile: 'Tệp ảnh không được hỗ trợ hoặc bị hỏng.', // 'Unsupported or corrupted image file.'
    convertToFormat: 'Chuyển sang định dạng', // 'Convert To Format'
    formatWebp: 'WebP (nhẹ nhất cho web)', // 'WebP (Smallest Web)'
    formatJpg: 'JPG (phổ biến)', // 'JPG (Universal)'
    formatPng: 'PNG (không mất dữ liệu, giữ độ trong suốt)', // 'PNG (Lossless Alpha)'
    transparencyFillColor: 'Màu lấp đầy độ trong suốt', // 'Transparency Fill Color'
    quality: 'Chất lượng', // 'Quality'
    qualityLosslessPng: 'PNG không mất dữ liệu', // 'Lossless PNG'
    converting: 'Đang chuyển đổi…', // 'Converting...'
    convertAll: 'Chuyển đổi tất cả ({count})', // 'Convert All ({count})'
    clear: 'Xóa', // 'Clear'
    conversionComplete: 'Chuyển đổi hoàn tất', // 'Conversion Complete'
    filesConverted: '{count} tệp đã chuyển đổi sang {format}', // '{count} files converted to {format}'
    creatingZip: 'Đang tạo ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Tải tất cả (ZIP)', // 'Download All (ZIP)'
    convertedStatus: 'Đã chuyển sang {ext}', // 'Converted to {ext}'
    compare: 'So sánh', // 'Compare'
    download: 'Tải xuống', // 'Download'
    removeImage: 'Xóa {name}', // aria-label `Remove ${item.name}`
  },
  '/image-cropper': {
    uploadTitle: 'Thả ảnh vào đây để cắt tương tác', // 'Drop an image to crop interactively'
    errorUnableToLoadImage: 'Không thể tải ảnh.', // 'Unable to load image.'
    errorCanvasContext: 'Không thể khởi tạo ngữ cảnh canvas.', // 'Unable to initialize canvas context.'
    errorCropExportFailed: 'Không thể xuất ảnh đã cắt.', // 'Crop export failed.'
    aspectFree: 'Tự do', // aspect preset 'Free'
    selection: 'Vùng chọn:', // 'Selection:'
    zoomOut: 'Thu nhỏ', // aria-label 'Zoom out'
    zoomIn: 'Phóng to', // aria-label 'Zoom in'
    removeImage: 'Xóa ảnh', // aria-label 'Remove image'
    cropSourceAlt: 'Ảnh gốc để cắt', // alt 'Crop source'
    originalLabel: 'Gốc:', // 'Original:'
    cropOptions: 'Tùy chọn cắt', // 'Crop Options'
    selectFull: 'Chọn toàn bộ', // 'Select Full'
    aspectRatioPreset: 'Tỷ lệ khung hình có sẵn', // 'Aspect Ratio Preset'
    cropWidth: 'Chiều rộng vùng cắt', // 'Crop Width'
    cropHeight: 'Chiều cao vùng cắt', // 'Crop Height'
    outputFormat: 'Định dạng đầu ra', // 'Output Format'
    formatOriginal: 'Gốc', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Chất lượng', // 'Quality'
    cropping: 'Đang cắt…', // 'Cropping...'
    cropAndDownload: 'Cắt & tải xuống', // 'Crop & Download'
  },
  '/image-watermark': {
    uploadTitle: 'Thả ảnh vào đây để thêm watermark chữ hoặc logo', // 'Drop an image to add a text or logo watermark'
    errorUnableToLoadImage: 'Không thể tải ảnh.', // 'Unable to load image.'
    errorUnableToLoadLogo: 'Không thể tải ảnh logo.', // 'Unable to load logo image.'
    errorWatermarkExportFailed: 'Không thể xuất ảnh có watermark.', // 'Watermark export failed.'
    fallbackWatermarkText: 'Watermark', // canvas fallback text 'Watermark'
    tiledPreview: 'Xem trước dạng ô lặp', // 'Tiled Preview'
    dragToPosition: 'Kéo trên ảnh để đặt vị trí', // 'Drag on Image to Position'
    changeImage: 'Đổi ảnh', // 'Change Image'
    watermarkType: 'Loại watermark', // 'Watermark Type'
    modeText: 'Watermark chữ', // 'Text Watermark'
    modeLogo: 'Ảnh logo', // 'Logo Image'
    watermarkTextLabel: 'Chữ watermark', // 'Watermark Text'
    placeholderBrand: '© Thương hiệu của bạn', // placeholder '© Your Brand'
    textColor: 'Màu chữ', // 'Text Color'
    size: 'Kích thước', // 'Size'
    uploadLogo: 'Tải logo lên (PNG / SVG)', // 'Upload Logo (PNG / SVG)'
    changeLogo: 'Đổi ảnh logo', // 'Change Logo Image'
    logoWidth: 'Chiều rộng logo', // 'Logo Width'
    opacity: 'Độ mờ', // 'Opacity'
    rotation: 'Góc xoay', // 'Rotation'
    tiledRepeatPattern: 'Mẫu lặp dạng ô', // 'Tiled Repeat Pattern'
    tileSpacing: 'Khoảng cách ô', // 'Tile Spacing'
    anchorPresets: 'Vị trí có sẵn (hoặc kéo trên ảnh)', // 'Anchor Presets (or drag on image)'
    formatOrig: 'Gốc', // 'Orig'
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Chất lượng', // 'Quality'
    exporting: 'Đang xuất…', // 'Exporting...'
    downloadWatermarked: 'Tải ảnh có watermark', // 'Download Watermarked Image'
  },
  '/rotate-flip-image': {
    quickRotateFlip: 'Xoay & lật nhanh', // 'Quick Rotate & Flip'
    rotate90Left: 'Xoay 90° sang trái', // 'Rotate 90° Left'
    rotate90Right: 'Xoay 90° sang phải', // 'Rotate 90° Right'
    rotate180: '180°', // '180°'
    flipHorizontal: 'Lật ngang', // 'Flip Horizontal'
    flipVertical: 'Lật dọc', // 'Flip Vertical'
    outputFormat: 'Định dạng đầu ra', // 'Output Format'
    formatOriginal: 'Gốc', // 'Original'
    formatJpg: 'JPG', // 'JPG'
    rotationAngle: 'Góc xoay:', // 'Rotation Angle:'
    resetTo0: 'Đặt lại về 0°', // 'Reset to 0°'
    applyAngle: 'Áp dụng góc', // 'Apply Angle'
    clear: 'Xóa', // 'Clear'
    batchReady: 'Lô đã sẵn sàng', // 'Batch Ready'
    transformedImagesReady: '{count} ảnh đã biến đổi sẵn sàng', // '{count} transformed images ready'
    creatingZip: 'Đang tạo ZIP...', // 'Creating ZIP...'
    downloadAllZip: 'Tải tất cả (ZIP)', // 'Download All (ZIP)'
    rotatedBadge: 'Đã xoay {angle}°', // 'Rotated {angle}°'
    flippedH: ' · Đã lật ngang', // ' · Flipped H'
    flippedV: ' · Đã lật dọc', // ' · Flipped V'
    compare: 'So sánh', // 'Compare'
    download: 'Tải xuống', // 'Download'
    removeItem: 'Xóa {name}', // 'Remove {name}' (aria-label)
    transformFailed: 'Không thể biến đổi ảnh.', // 'Transform failed.'
    corruptedImage: 'Ảnh bị hỏng hoặc không đọc được.', // 'Corrupted or unreadable image.'
    comparisonTitlePrefix: 'So sánh xoay & lật', // 'Rotate & Flip Comparison'
    comparisonAfterLabel: 'Đã chỉnh sửa (sau)', // 'Edited (After)'
  },
  '/image-to-pdf': {
    uploadTitle: 'Thả ảnh vào đây để gộp thành PDF', // 'Drop images to combine into PDF'
    couldNotRead: 'Không thể đọc "{filename}". Hãy đảm bảo đó là ảnh hợp lệ.', // 'Could not read "{filename}". Please ensure it is a valid image.'
    pdfGenerationFailed: 'Không thể tạo PDF.', // 'PDF generation failed.'
    encodingPage: 'Đang mã hóa trang {current} trên {total}...', // 'Encoding page {current} of {total}...'
    generatingPdf: 'Đang tạo PDF...', // 'Generating PDF...'
    pageSize: 'Khổ giấy', // 'Page Size'
    pageSizeA4: 'A4 (210 × 297 mm)', // 'A4 (210 × 297 mm)'
    pageSizeLetter: 'Letter Mỹ (8,5 × 11 in)', // 'US Letter (8.5 × 11 in)'
    pageSizeFit: 'Vừa với kích thước ảnh', // 'Fit to Image Size'
    orientation: 'Hướng giấy', // 'Orientation'
    orientationAuto: 'Tự động (theo ảnh)', // 'Auto (Match Photo)'
    orientationPortrait: 'Dọc', // 'Portrait'
    orientationLandscape: 'Ngang', // 'Landscape'
    margin: 'Lề', // 'Margin'
    marginNone: 'Không lề (tràn viền)', // 'No Margin (Full Bleed)'
    marginSmall: 'Lề nhỏ', // 'Small Margin'
    marginMedium: 'Lề vừa', // 'Medium Margin'
    imagePlacement: 'Vị trí ảnh', // 'Image Placement'
    placementContain: 'Vừa khung (toàn bộ ảnh)', // 'Contain (Full Image)'
    placementCover: 'Lấp đầy (kín trang)', // 'Cover (Fill Page)'
    pdfFilename: 'Tên tệp PDF', // 'PDF Filename'
    pdfImageQuality: 'Chất lượng ảnh trong PDF:', // 'PDF Image Quality:'
    createDownloadPdf: 'Tạo & tải PDF ({count} trang)', // 'Create & Download PDF ({count}p)'
    clear: 'Xóa', // 'Clear'
    pdfReady: 'PDF đã sẵn sàng ({count} {pages} · {size})', // 'PDF ready ({count} {pages} · {size})'
    pageSingular: 'trang', // 'page'
    pagePlural: 'trang', // 'pages'
    downloadPdfAgain: 'Tải lại PDF', // 'Download PDF Again'
    pageOrder: 'Thứ tự trang ({count} {pages})', // 'Page Order ({count} {pages})'
    pageOrderSingular: 'Trang', // 'Page' (in Page Order heading)
    pageOrderPlural: 'Trang', // 'Pages' (in Page Order heading)
    movePageUp: 'Di chuyển trang lên', // 'Move page up' (title)
    movePageDown: 'Di chuyển trang xuống', // 'Move page down' (title)
    removePage: 'Xóa trang', // 'Remove page' (title)
  },
  '/image-metadata-viewer': {
    uploadTitle: 'Thả ảnh vào đây để xem EXIF & metadata', // 'Drop an image to inspect EXIF & metadata'
    unableToParse: 'Không thể phân tích metadata của ảnh.', // 'Unable to parse image metadata.'
    embeddedMetadataFound: 'Đã tìm thấy metadata nhúng ({count} loại thẻ)', // 'Embedded metadata found ({count} tag types)'
    noTagsDetected: 'Không phát hiện thẻ EXIF, GPS hay thẻ máy ảnh ẩn nào', // 'No EXIF, GPS, or hidden camera tags detected'
    stripMetadata: 'Xóa metadata', // 'Strip Metadata'
    copyJson: 'Sao chép JSON', // 'Copy JSON'
    copiedJson: 'Đã sao chép JSON', // 'Copied JSON'
    exportJson: 'Xuất JSON', // 'Export JSON'
    clear: 'Xóa', // 'Clear' (title)
    gpsDetected: 'Đã phát hiện tọa độ vị trí GPS', // 'GPS Location Coordinates Detected'
    latitude: 'Vĩ độ:', // 'Latitude:'
    longitude: 'Kinh độ:', // 'Longitude:'
    gpsWarning:
      'Chia sẻ ảnh này nguyên trạng có thể tiết lộ nơi bức ảnh được chụp. Hãy dùng Xóa metadata trước khi đăng lên mạng.', // 'Sharing this image as-is can reveal where the photo was taken. Use Remove Image Metadata before posting online.'
    extractedMetadata: 'Metadata đã trích xuất ({count} thuộc tính)', // 'Extracted Metadata ({count} properties)'
    privacyTag: 'Thẻ riêng tư', // 'Privacy Tag'
  },
  '/remove-image-metadata': {
    uploadTitle: 'Thả ảnh vào đây để xóa EXIF, GPS & metadata', // 'Drop photos to strip EXIF, GPS & metadata'
    failedToStrip: 'Không thể xóa metadata.', // 'Failed to strip metadata.'
    strippingMethod: 'Phương pháp xóa', // 'Stripping Method'
    losslessStrip: 'Xóa nhị phân không mất dữ liệu (JPG/PNG)', // 'Lossless Binary Strip (JPG/PNG)'
    fullCanvasReencode: 'Mã hóa lại toàn bộ bằng canvas', // 'Full Canvas Re-encode'
    outputFormat: 'Định dạng đầu ra', // 'Output Format'
    formatOriginal: 'Gốc', // 'Original'
    formatJpg: 'JPG', // 'JPG'
    reencodeQuality: 'Chất lượng mã hóa lại (dùng cho WebP/HEIC hoặc mã hóa lại toàn bộ):', // 'Re-encode Quality (used for WebP/HEIC or Full Re-encode):'
    cleaning: 'Đang dọn...', // 'Cleaning...'
    recleanAll: 'Dọn lại tất cả', // 'Re-clean All'
    clear: 'Xóa', // 'Clear'
    privacyVerified: 'Đã xác minh riêng tư', // 'Privacy Verified'
    cleanImagesReady: '{count} ảnh sạch đã sẵn sàng, metadata đã được xóa', // '{count} clean images ready with metadata stripped'
    creatingZip: 'Đang tạo ZIP...', // 'Creating ZIP...'
    downloadAllCleanZip: 'Tải tất cả ảnh sạch (ZIP)', // 'Download All Clean (ZIP)'
    strippedTags: 'Đã xóa {before} thẻ metadata → còn {after}', // 'Stripped {before} metadata tags → {after} remaining'
    verifiedClean: 'Đã xác minh sạch (0 thẻ EXIF/GPS)', // 'Verified clean (0 EXIF/GPS tags)'
    losslessBinaryStrip: 'Xóa nhị phân không mất dữ liệu', // 'Lossless binary strip'
    cleanCanvasExport: 'Xuất sạch bằng canvas', // 'Clean Canvas export'
    scrubbing: 'Đang xóa tiêu đề EXIF & GPS...', // 'Scrubbing EXIF & GPS headers...'
    downloadClean: 'Tải ảnh sạch', // 'Download Clean'
    removeItem: 'Xóa {name}', // 'Remove {name}' (aria-label)
  },
  '/favicon-generator': {
    uploadTitle: 'Thả logo hoặc biểu tượng của bạn vào đây', // 'Drop your logo or icon here'
    uploadSubtitlePrefix: 'Nên dùng PNG hoặc SVG hình vuông · ', // 'Square PNG or SVG recommended · '
    uploadBrowseFile: 'duyệt tệp', // 'browse file'
    errorGenerateFailed: 'Không thể tạo gói favicon.', // 'Failed to generate favicon package.'
    backgroundFill: 'Màu nền lấp đầy', // 'Background Fill'
    transparent: 'Trong suốt', // 'Transparent'
    padding: 'Khoảng đệm', // 'Padding'
    cornerRadius: 'Bán kính góc', // 'Corner Radius'
    tabPreviewAlt: 'Xem trước tab trình duyệt', // alt 'Tab preview'
    myWebsite: 'Trang web của tôi', // 'My Website'
    darkTabPreviewAlt: 'Xem trước tab tối', // alt 'Dark tab preview'
    darkModeTab: 'Tab chế độ tối', // 'Dark Mode Tab'
    packingZip: 'Đang đóng gói ZIP…', // 'Packing ZIP...'
    downloadAllZip: 'Tải tất cả (ZIP)', // 'Download All (ZIP)'
    clear: 'Xóa', // title 'Clear'
    downloadFaviconIco: 'Tải favicon.ico', // title 'Download favicon.ico'
    downloadFile: 'Tải {filename}', // title `Download ${asset.filename}`
    htmlHeadSnippet: 'Đoạn mã HTML <head>', // 'HTML <head> Snippet'
    copied: 'Đã sao chép!', // 'Copied!'
    copyHtml: 'Sao chép HTML', // 'Copy HTML'
  },
  '/image-color-picker': {
    uploadTitle: 'Thả ảnh vào đây hoặc dán ảnh chụp màn hình (Ctrl+V)', // 'Drop an image or paste screenshot (Ctrl+V)'
    errorUnableToLoadImage: 'Không thể tải ảnh.', // 'Unable to load image.'
    clickAnywhereToPin: 'Nhấn vào bất cứ đâu để ghim màu', // 'Click anywhere to pin a color'
    newImage: 'Ảnh mới', // 'New Image'
    pixelInspector: 'Kiểm tra điểm ảnh', // 'Pixel Inspector'
    copyLabel: 'Sao chép {label}', // title `Copy ${row.label}`
    pickedSwatches: 'Mẫu màu đã lưu ({count})', // 'Picked Swatches ({palette.length})'
    exportCss: 'Xuất CSS', // 'Export CSS'
    clickPixelsHint: 'Nhấn vào các điểm ảnh trên ảnh để lưu màu vào bảng màu của bạn.', // 'Click pixels on the image to save colors to your palette.'
    clickToSelectCopy: 'Nhấn để chọn & sao chép {hex}', // title `Click to select & copy ${c.hex}`
  },
  '/image-dimensions-checker': {
    uploadTitle: 'Thả ảnh vào đây để xem kích thước & tỷ lệ khung hình chính xác', // 'Drop images to inspect exact dimensions & ratios'
    minWidthCheck: 'Chiều rộng tối thiểu (px)', // 'Min Width Check (px)'
    minHeightCheck: 'Chiều cao tối thiểu (px)', // 'Min Height Check (px)'
    placeholderMinWidth: 'vd: 1200', // placeholder 'e.g. 1200'
    placeholderMinHeight: 'vd: 630', // placeholder 'e.g. 630'
    exportCsv: 'Xuất CSV', // 'Export CSV'
    exportJson: 'Xuất JSON', // 'Export JSON'
    clear: 'Xóa', // 'Clear'
    headerImage: 'Ảnh', // table header 'Image'
    headerDimensions: 'Kích thước', // table header 'Dimensions'
    headerAspectRatio: 'Tỷ lệ khung hình', // table header 'Aspect Ratio'
    headerOrientation: 'Hướng', // table header 'Orientation'
    headerSizeFormat: 'Dung lượng / Định dạng', // table header 'Size / Format'
    headerPrint300Dpi: 'In ở 300 DPI', // table header 'Print @300 DPI'
    headerSpecCheck: 'Kiểm tra thông số', // table header 'Spec Check'
    orientationLandscape: 'Ngang', // 'Landscape'
    orientationPortrait: 'Dọc', // 'Portrait'
    orientationSquare: 'Vuông', // 'Square'
    alphaTag: ' · Alpha', // ' · Alpha'
    specPass: 'Đạt', // 'Pass'
    specBelowMin: 'Dưới mức tối thiểu', // 'Below Min'
    csvYes: 'Có', // CSV value 'Yes'
    csvNo: 'Không', // CSV value 'No'
  },
  '/blur-pixelate-image': {
    uploadTitle: 'Thả ảnh vào đây để làm mờ hoặc pixel hóa vùng', // 'Drop an image to blur or pixelate areas'
    errorUnableToLoadImage: 'Không thể tải ảnh.', // 'Unable to load image.'
    errorExportFailed: 'Xuất không thành công.', // 'Export failed.'
    paintOverAreasBlur: 'Tô lên vùng cần làm mờ', // 'Paint Over Areas to Blur'
    paintOverAreasPixelate: 'Tô lên vùng cần pixel hóa', // 'Paint Over Areas to Pixelate'
    wholeImagePreview: 'Xem trước toàn bộ ảnh', // 'Whole-Image Preview'
    undo: 'Hoàn tác', // 'Undo'
    resetBrush: 'Đặt lại cọ', // 'Reset Brush'
    removeImage: 'Xóa ảnh', // aria-label 'Remove image'
    targetArea: 'Vùng đích', // 'Target Area'
    brushArea: 'Vùng cọ', // 'Brush Area'
    wholeImage: 'Toàn bộ ảnh', // 'Whole Image'
    effectStyle: 'Kiểu hiệu ứng', // 'Effect Style'
    pixelateMosaic: 'Pixel hóa dạng khảm', // 'Pixelate Mosaic'
    smoothBlur: 'Làm mờ mượt', // 'Smooth Blur'
    blurRadius: 'Bán kính mờ', // 'Blur Radius'
    mosaicBlockSize: 'Kích thước khối khảm', // 'Mosaic Block Size'
    brushSize: 'Kích thước cọ', // 'Brush Size'
    brushHint: 'Nhấn và kéo trực tiếp trên ảnh để che khuôn mặt, chữ hoặc biển số xe.', // 'Click and drag directly on the photo to hide faces, text, or license plates.'
    formatOrig: 'Gốc', // 'Orig'
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Chất lượng', // 'Quality'
    exporting: 'Đang xuất…', // 'Exporting...'
    downloadImage: 'Tải ảnh xuống', // 'Download Image'
  },
  '/add-text-to-image': {
    uploadTitle: 'Thả ảnh vào đây để thêm chữ phủ tùy chỉnh', // 'Drop an image to add custom text overlays'
    errorUnableToLoadImage: 'Không thể tải ảnh.', // 'Unable to load image.'
    errorExportFailed: 'Xuất không thành công.', // 'Export failed.'
    dragAnyText: 'Kéo bất kỳ chữ nào trực tiếp trên ảnh', // 'Drag Any Text Directly on Image'
    changeImage: 'Đổi ảnh', // 'Change Image'
    textLayer: 'Chữ {index}', // tab `Text ${idx + 1}`
    add: 'Thêm', // 'Add'
    deleteActiveTextLayer: 'Xóa lớp chữ đang chọn', // aria-label 'Delete active text layer'
    textContent: 'Nội dung chữ (hỗ trợ nhiều dòng)', // 'Text Content (multi-line supported)'
    font: 'Phông chữ', // 'Font'
    fontInter: 'Inter / Sans gọn', // font option 'Inter / Clean Sans'
    fontImpact: 'Impact / Chữ meme', // font option 'Impact / Meme Display'
    fontGeorgia: 'Georgia / Serif cổ điển', // font option 'Georgia / Classic Serif'
    fontCourier: 'Courier / Monospace', // font option 'Courier / Monospace'
    fontTrebuchet: 'Trebuchet / Sans bo tròn', // font option 'Trebuchet / Rounded Sans'
    fill: 'Tô màu', // 'Fill'
    toggleBold: 'Bật/tắt in đậm', // aria-label 'Toggle Bold'
    toggleItalic: 'Bật/tắt in nghiêng', // aria-label 'Toggle Italic'
    size: 'Kích thước', // 'Size'
    rotation: 'Góc xoay', // 'Rotation'
    textOutline: 'Viền chữ', // 'Text Outline'
    dropShadow: 'Đổ bóng', // 'Drop Shadow'
    defaultLayerText: 'Chạm hai lần hoặc chỉnh sửa chữ', // default layer text 'Double-tap or edit text'
    defaultCaption: 'Chú thích {index}', // default layer text `Caption ${index + 1}`
    formatOrig: 'Gốc', // 'Orig'
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Chất lượng', // 'Quality'
    exporting: 'Đang xuất…', // 'Exporting...'
    downloadImageWithText: 'Tải ảnh có chữ', // 'Download Image with Text'
  },
  '/image-border-generator': {
    uploadTitle: 'Thả ảnh vào đây để thêm viền hoặc khung tùy chỉnh', // 'Drop an image to add a custom border or frame'
    errorUnableToLoadImage: 'Không thể tải ảnh.', // 'Unable to load image.'
    errorExportFailed: 'Xuất không thành công.', // 'Export failed.'
    framedPreview: 'Xem trước ảnh có khung', // 'Framed Preview'
    changeImage: 'Đổi ảnh', // 'Change Image'
    quickFramePresets: 'Mẫu khung nhanh', // 'Quick Frame Presets'
    presetClassicWhite: 'Trắng cổ điển', // preset 'Classic White'
    presetPolaroidFrame: 'Khung Polaroid', // preset 'Polaroid Frame'
    presetDarkStudio: 'Studio tối', // preset 'Dark Studio'
    presetGradientGlow: 'Phát sáng gradient', // preset 'Gradient Glow'
    borderStyle: 'Kiểu viền', // 'Border Style'
    borderStyleSolid: 'Đặc', // border type 'solid' (rendered capitalized)
    borderStyleGradient: 'Gradient', // border type 'gradient' (rendered capitalized)
    borderStylePolaroid: 'Polaroid', // border type 'polaroid' (rendered capitalized)
    borderColor: 'Màu viền', // 'Border Color'
    startColor: 'Màu bắt đầu', // 'Start Color'
    endColor: 'Màu kết thúc', // 'End Color'
    gradientAngle: 'Góc gradient', // 'Gradient Angle'
    borderSize: 'Độ dày viền', // 'Border Size'
    frameRadius: 'Bán kính khung', // 'Frame Radius'
    photoRadius: 'Bán kính ảnh', // 'Photo Radius'
    dropShadow: 'Đổ bóng', // 'Drop Shadow'
    shadowNone: 'không có', // shadow level 'none' (rendered capitalized)
    shadowSoft: 'nhẹ', // shadow level 'soft' (rendered capitalized)
    shadowMedium: 'vừa', // shadow level 'medium' (rendered capitalized)
    shadowDeep: 'đậm', // shadow level 'deep' (rendered capitalized)
    exporting: 'Đang xuất…', // 'Exporting...'
    downloadFramedImage: 'Tải ảnh có khung', // 'Download Framed Image'
  },
  '/round-image-corners': {
    uploadTitle: 'Thả ảnh vào đây để bo tròn góc', // 'Drop an image to round its corners'
    errorUnableToLoadImage: 'Không thể tải ảnh.', // 'Unable to load image.'
    errorExportFailed: 'Không thể xuất ảnh đã bo tròn.', // 'Failed to export rounded image.'
    liveCornerPreview: 'Xem trước góc trực tiếp', // 'Live Corner Preview'
    changeImage: 'Đổi ảnh', // 'Change Image'
    cornerSettings: 'Cài đặt góc', // 'Corner Settings'
    fullCirclePill: 'Hình tròn hoàn toàn / Viên thuốc', // 'Full Circle / Pill'
    individualPerCorner: 'Điều chỉnh riêng từng góc', // 'Individual Per-Corner Control'
    allCornersRadius: 'Bán kính tất cả các góc', // 'All Corners Radius'
    cornerTopLeft: 'Trên trái', // per-corner label 'Top Left'
    cornerTopRight: 'Trên phải', // per-corner label 'Top Right'
    cornerBottomLeft: 'Dưới trái', // per-corner label 'Bottom Left'
    cornerBottomRight: 'Dưới phải', // per-corner label 'Bottom Right'
    outerCornerFill: 'Màu lấp đầy góc ngoài', // 'Outer Corner Fill'
    transparentPngWebp: 'Trong suốt (PNG/WebP)', // 'Transparent (PNG/WebP)'
    solidColor: 'Màu đặc', // 'Solid Color'
    outputFormat: 'Định dạng đầu ra', // 'Output Format'
    exporting: 'Đang xuất…', // 'Exporting...'
    downloadRoundedImage: 'Tải ảnh đã bo tròn', // 'Download Rounded Image'
  },
  '/image-brightness-editor': {
    uploadTitle: 'Thả ảnh vào đây để chỉnh độ sáng', // ToneEditorTool title `Drop an image to adjust ${cfg.label.toLowerCase()}` (mode 'brightness')
    errorUnableToLoadImage: 'Không thể tải ảnh.', // 'Unable to load image.'
    errorExportFailed: 'Không thể xuất ảnh đã chỉnh sửa.', // 'Failed to export adjusted image.'
    viewAfter: 'Sau', // view tab 'after' (rendered capitalized)
    viewBefore: 'Trước', // view tab 'before' (rendered capitalized)
    viewSplitCompare: 'So sánh chia đôi', // view tab 'Split Compare'
    fullscreenCompare: 'So sánh toàn màn hình', // 'Fullscreen Compare'
    removeImage: 'Xóa ảnh', // title/aria-label 'Remove image'
    beforeLabel: 'Trước', // split slider label 'Before'
    afterLabel: 'Sau', // split slider label 'After'
    originalPreviewAlt: 'Xem trước ảnh gốc', // alt 'Original preview'
    originalComparisonAlt: 'So sánh ảnh gốc', // alt 'Original comparison'
    brightnessControls: 'Điều khiển độ sáng', // 'Brightness Controls'
    reset: 'Đặt lại', // 'Reset'
    brightnessLevel: 'Mức độ sáng', // 'Brightness Level'
    minLabel: '-100% Tối hơn', // min label '-100% Darker'
    maxLabel: '+100% Sáng hơn', // max label '+100% Brighter'
    quickPresets: 'Mẫu nhanh', // 'Quick Presets'
    presetDark: 'Tối (-30%)', // preset 'Dark (-30%)'
    presetDim: 'Mờ (-15%)', // preset 'Dim (-15%)'
    presetOriginal: 'Gốc (0%)', // preset 'Original (0%)'
    presetBright: 'Sáng (+15%)', // preset 'Bright (+15%)'
    presetVibrant: 'Rực rỡ (+30%)', // preset 'Vibrant (+30%)'
    presetHighKey: 'Sáng cao (+50%)', // preset 'High Key (+50%)'
    outputFormat: 'Định dạng đầu ra', // 'Output Format'
    formatOriginal: 'Gốc', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Chất lượng', // 'Quality'
    exporting: 'Đang xuất…', // 'Exporting...'
    downloadEditedImage: 'Tải ảnh đã chỉnh sửa', // 'Download Edited Image'
    comparisonTitlePrefix: 'So sánh độ sáng', // ComparisonModal titlePrefix `Brightness Comparison`
    comparisonAfterLabel: 'Đã chỉnh sửa (sau)', // ComparisonModal afterLabel 'Edited (After)'
  },
  '/image-contrast-editor': {
    uploadTitle: 'Thả ảnh vào đây để chỉnh độ tương phản', // 'Drop an image to adjust contrast'
    comparisonTitlePrefix: 'So sánh độ tương phản', // 'Contrast Comparison'
    comparisonAfterLabel: 'Đã chỉnh sửa (sau)', // 'Edited (After)'
    errorUnableToLoadImage: 'Không thể tải ảnh.', // 'Unable to load image.'
    errorExportFailed: 'Không thể xuất ảnh đã chỉnh sửa.', // 'Failed to export adjusted image.'
    tabAfter: 'Sau', // tab 'after' (CSS-capitalized in code)
    tabBefore: 'Trước', // tab 'before' (CSS-capitalized in code)
    tabSplitCompare: 'So sánh chia đôi', // tab 'split' renders 'Split Compare'
    fullscreenCompare: 'So sánh toàn màn hình', // 'Fullscreen Compare'
    removeImage: 'Xóa ảnh', // title + aria-label 'Remove image'
    originalPreviewAlt: 'Xem trước ảnh gốc', // alt 'Original preview'
    originalComparisonAlt: 'So sánh ảnh gốc', // alt 'Original comparison'
    splitBeforeLabel: 'Trước', // split slider left label 'Before'
    splitAfterLabel: 'Sau', // split slider right label 'After'
    controlsHeading: 'Điều khiển độ tương phản', // '{label} Controls' (contrast mode)
    reset: 'Đặt lại', // 'Reset'
    levelLabel: 'Mức độ tương phản', // '{label} Level' (contrast mode)
    minLabel: '-100% Phẳng', // minLabel '-100% Flat'
    maxLabel: '+100% Tương phản cao', // maxLabel '+100% High Contrast'
    quickPresets: 'Mẫu nhanh', // 'Quick Presets'
    presetSoft: 'Nhẹ (-25%)', // 'Soft (-25%)'
    presetMuted: 'Nhạt (-10%)', // 'Muted (-10%)'
    presetOriginal: 'Gốc (0%)', // 'Original (0%)'
    presetCrisp: 'Sắc nét (+20%)', // 'Crisp (+20%)'
    presetPunchy: 'Mạnh (+40%)', // 'Punchy (+40%)'
    presetDramatic: 'Ấn tượng (+70%)', // 'Dramatic (+70%)'
    outputFormat: 'Định dạng đầu ra', // 'Output Format'
    formatOriginal: 'Gốc', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Chất lượng', // 'Quality'
    exporting: 'Đang xuất…', // 'Exporting...'
    downloadEditedImage: 'Tải ảnh đã chỉnh sửa', // 'Download Edited Image'
  },
  '/image-saturation-editor': {
    uploadTitle: 'Thả ảnh vào đây để chỉnh độ bão hòa', // 'Drop an image to adjust saturation'
    comparisonTitlePrefix: 'So sánh độ bão hòa', // 'Saturation Comparison'
    comparisonAfterLabel: 'Đã chỉnh sửa (sau)', // 'Edited (After)'
    errorUnableToLoadImage: 'Không thể tải ảnh.', // 'Unable to load image.'
    errorExportFailed: 'Không thể xuất ảnh đã chỉnh sửa.', // 'Failed to export adjusted image.'
    tabAfter: 'Sau', // tab 'after' (CSS-capitalized in code)
    tabBefore: 'Trước', // tab 'before' (CSS-capitalized in code)
    tabSplitCompare: 'So sánh chia đôi', // tab 'split' renders 'Split Compare'
    fullscreenCompare: 'So sánh toàn màn hình', // 'Fullscreen Compare'
    removeImage: 'Xóa ảnh', // title + aria-label 'Remove image'
    originalPreviewAlt: 'Xem trước ảnh gốc', // alt 'Original preview'
    originalComparisonAlt: 'So sánh ảnh gốc', // alt 'Original comparison'
    splitBeforeLabel: 'Trước', // split slider left label 'Before'
    splitAfterLabel: 'Sau', // split slider right label 'After'
    controlsHeading: 'Điều khiển độ bão hòa', // '{label} Controls' (saturation mode)
    reset: 'Đặt lại', // 'Reset'
    levelLabel: 'Mức độ bão hòa', // '{label} Level' (saturation mode)
    minLabel: '-100% Đen trắng', // minLabel '-100% Grayscale'
    maxLabel: '+100% Sống động', // maxLabel '+100% Vivid'
    quickPresets: 'Mẫu nhanh', // 'Quick Presets'
    presetGrayscale: 'Đen trắng (-100%)', // 'Grayscale (-100%)'
    presetMuted: 'Nhạt (-40%)', // 'Muted (-40%)'
    presetOriginal: 'Gốc (0%)', // 'Original (0%)'
    presetRich: 'Đậm (+30%)', // 'Rich (+30%)'
    presetVivid: 'Sống động (+60%)', // 'Vivid (+60%)'
    presetHyper: 'Cực đậm (+90%)', // 'Hyper (+90%)'
    outputFormat: 'Định dạng đầu ra', // 'Output Format'
    formatOriginal: 'Gốc', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Chất lượng', // 'Quality'
    exporting: 'Đang xuất…', // 'Exporting...'
    downloadEditedImage: 'Tải ảnh đã chỉnh sửa', // 'Download Edited Image'
  },
  '/image-filters': {
    uploadTitle: 'Thả ảnh vào đây để áp dụng bộ lọc', // 'Drop an image to apply filters'
    comparisonTitlePrefix: 'So sánh bộ lọc', // 'Filter Comparison'
    comparisonAfterLabel: 'Đã lọc', // 'Filtered'
    errorUnableToLoadImage: 'Không thể tải ảnh.', // 'Unable to load image.'
    errorExportFailed: 'Xuất không thành công.', // 'Export failed.'
    filterPreview: 'Xem trước bộ lọc', // 'Filter Preview'
    holdToViewOriginal: 'Giữ để xem ảnh gốc', // 'Hold to View Original'
    compare: 'So sánh', // 'Compare'
    removeImage: 'Xóa ảnh', // aria-label 'Remove image'
    originalBadge: 'Gốc', // 'Original' badge
    filterPresets: 'Bộ lọc có sẵn', // 'Filter Presets'
    reset: 'Đặt lại', // 'Reset'
    presetOriginal: 'Gốc', // preset 'Original'
    presetGrayscale: 'Đen trắng', // preset 'Grayscale'
    presetSepia: 'Sepia', // preset 'Sepia'
    presetVintage: 'Vintage', // preset 'Vintage'
    presetWarm: 'Ấm', // preset 'Warm'
    presetCool: 'Lạnh', // preset 'Cool'
    presetHighContrast: 'Tương phản cao', // preset 'High Contrast'
    presetMatteFade: 'Mờ lì', // preset 'Matte Fade'
    presetDramatic: 'Ấn tượng', // preset 'Dramatic'
    presetNoir: 'Đen trắng Noir', // preset 'B&W Noir'
    presetGoldenHour: 'Giờ vàng', // preset 'Golden Hour'
    presetInvert: 'Đảo ngược', // preset 'Invert'
    filterIntensity: 'Cường độ bộ lọc', // 'Filter Intensity'
    outputFormat: 'Định dạng đầu ra', // 'Output Format'
    formatOriginal: 'Gốc', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Chất lượng', // 'Quality'
    rendering: 'Đang xử lý…', // 'Rendering...'
    downloadFilteredImage: 'Tải ảnh đã lọc', // 'Download Filtered Image'
  },
  '/add-background-to-image': {
    uploadTitle: 'Thả ảnh hoặc PNG trong suốt vào đây để thêm nền', // 'Drop an image or transparent PNG to add a backdrop'
    errorUnableToLoadImage: 'Không thể tải ảnh.', // 'Unable to load image.'
    errorExportFailed: 'Xuất không thành công.', // 'Export failed.'
    backgroundPreview: 'Xem trước nền', // 'Background Preview'
    changeImage: 'Đổi ảnh', // 'Change Image'
    outputDimensionsPrefix: 'Đầu ra:', // 'Output:' (before '{w}×{h}px')
    backgroundType: 'Loại nền', // 'Background Type'
    modeSolidColor: 'Màu đặc', // 'Solid Color'
    modeGradient: 'Gradient', // 'Gradient'
    modeBlurredPhoto: 'Ảnh mờ', // 'Blurred Photo'
    selectColor: 'Chọn màu {color}', // aria-label `Select color ${c}`
    color1: 'Màu 1', // 'Color 1'
    color2: 'Màu 2', // 'Color 2'
    angle: 'Góc', // 'Angle'
    backdropBlurRadius: 'Bán kính mờ nền', // 'Backdrop Blur Radius'
    canvasAspectRatio: 'Tỷ lệ khung hình canvas', // 'Canvas Aspect Ratio'
    aspectOriginal: 'Gốc', // 'Orig'
    imageScale: 'Tỷ lệ ảnh', // 'Image Scale'
    roundness: 'Độ bo tròn', // 'Roundness'
    dropShadowBehindImage: 'Đổ bóng sau ảnh', // 'Drop Shadow Behind Image'
    formatPng: 'PNG', // 'PNG' — unchanged
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WEBP', // 'WEBP' — unchanged
    exporting: 'Đang xuất…', // 'Exporting...'
    downloadImage: 'Tải ảnh xuống', // 'Download Image'
  },
  '/image-splitter': {
    uploadTitle: 'Thả ảnh vào đây để chia thành ô lưới hoặc dải', // 'Drop an image to split into grid tiles or strips'
    errorUnableToLoadImage: 'Không thể tải ảnh.', // 'Unable to load image.'
    errorSplitFailed: 'Không thể chia ảnh.', // 'Failed to split image.'
    errorCanvasContext: 'Không thể khởi tạo ngữ cảnh canvas.', // 'Unable to initialize canvas context.'
    cutLinePreview: 'Xem trước đường cắt ({rows} × {cols} = {tiles} mảnh)', // 'Cut-Line Preview ({rows} × {cols} = {n} tiles)'
    changeImage: 'Đổi ảnh', // 'Change Image'
    splitGuideAlt: 'Hướng dẫn chia', // alt 'Split guide'
    splitLayout: 'Bố cục chia', // 'Split Layout'
    modeGrid: 'Lưới (N×M)', // 'Grid (N×M)'
    modeHorizontalStrips: 'Dải ngang', // 'Horiz. Strips'
    modeVerticalStrips: 'Dải dọc', // 'Vert. Strips'
    rowsLabel: 'Hàng (cắt ngang)', // 'Rows (Horizontal Cuts)'
    columnsLabel: 'Cột (cắt dọc)', // 'Columns (Vertical Cuts)'
    preset2x2: '2×2', // preset '2×2' — unchanged
    preset3x3Instagram: '3×3 Instagram', // preset '3×3 Instagram' — unchanged
    preset1x3Carousel: '1×3 Carousel', // preset '1×3 Carousel'
    preset4x1Strips: '4×1 Dải', // preset '4×1 Strips'
    formatOriginal: 'Gốc', // 'Orig'
    formatJpg: 'JPG', // 'JPG' — unchanged
    tileQuality: 'Chất lượng mảnh', // 'Tile Quality'
    splittingImage: 'Đang chia ảnh…', // 'Splitting Image...'
    splitIntoTiles: 'Chia thành {count} mảnh', // `Split into ${n} Tiles`
    splitComplete: 'Chia xong', // 'Split Complete'
    tilesGenerated: '{count} mảnh ảnh đã tạo ở độ phân giải đầy đủ', // '{n} image tiles generated at full resolution'
    packagingZip: 'Đang đóng gói ZIP…', // 'Packaging ZIP...'
    downloadAllTilesZip: 'Tải tất cả mảnh (ZIP)', // 'Download All Tiles (ZIP)'
    download: 'Tải xuống', // 'Download'
  },
  '/image-dpi-changer': {
    uploadTitle: 'Thả ảnh JPG hoặc PNG vào đây để cập nhật metadata DPI', // 'Drop JPG or PNG images to update DPI metadata'
    errorUpdateDpiFailed: 'Không thể cập nhật DPI.', // 'Failed to update DPI.'
    targetDpiPresets: 'Mức DPI mục tiêu có sẵn', // 'Target DPI Presets'
    preset72Screen: '72 DPI (Màn hình)', // '72 DPI (Screen)'
    preset96Windows: '96 DPI (Windows)', // '96 DPI (Windows)' — unchanged
    preset150DraftPrint: '150 DPI (In nháp)', // '150 DPI (Draft Print)'
    preset300HighPrint: '300 DPI (In chất lượng cao)', // '300 DPI (High Print)'
    preset600Archival: '600 DPI (Lưu trữ)', // '600 DPI (Archival)'
    customDpi: 'DPI tùy chỉnh', // 'Custom DPI'
    applyDpi: 'Áp dụng {dpi} DPI', // 'Apply {dpi} DPI'
    clear: 'Xóa', // 'Clear'
    batchReady: 'Lô đã sẵn sàng', // 'Batch Ready'
    filesUpdatedToDpi: '{count} tệp đã cập nhật lên {dpi} DPI', // '{n} files updated to {dpi} DPI'
    creatingZip: 'Đang tạo ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Tải tất cả (ZIP)', // 'Download All (ZIP)'
    beforeDpi: 'Trước: {dpi} DPI', // 'Before: {dpi} DPI'
    beforeNotSet: 'Trước: Chưa đặt', // 'Before: Not set'
    verifiedDpi: 'Đã xác minh: {dpi} DPI', // 'Verified: {dpi} DPI'
    methodLosslessJpeg: 'Cập nhật tiêu đề JPEG không mất dữ liệu', // 'Lossless JPEG Header Update'
    methodLosslessPng: 'Cập nhật pHYs PNG không mất dữ liệu', // 'Lossless PNG pHYs Update'
    methodConvertedPng: 'Đã chuyển sang PNG với DPI pHYs', // 'Converted to PNG with pHYs DPI'
    download: 'Tải xuống', // 'Download'
    removeImage: 'Xóa {name}', // aria-label `Remove ${item.file.name}`
  },
  '/image-to-base64': {
    uploadTitle: 'Thả ảnh vào đây để mã hóa thành Base64', // 'Drop an image to encode as Base64'
    errorCouldNotEncode: 'Không thể mã hóa tệp.', // 'Could not encode file.'
    errorFailedToRead: 'Không thể đọc tệp ảnh.', // 'Failed to read image file.'
    errorClipboardWriteFailed: 'Không thể ghi vào clipboard: vui lòng chọn và sao chép từ hộp văn bản.', // 'Clipboard write failed — please select and copy from the text box.'
    fileLabel: 'Tệp:', // 'File:' (summary card)
    outputLabel: 'Đầu ra:', // 'Output:' (summary card)
    charsLabel: 'ký tự', // 'chars' (summary card)
    encodeAnother: 'Mã hóa ảnh khác', // 'Encode Another'
    tabDataUrl: 'Data URL', // tab 'Data URL'
    tabRawBase64: 'Base64 thuần', // tab 'Raw Base64'
    tabHtmlImg: 'HTML <img>', // tab 'HTML <img>' — unchanged
    tabCssUrl: 'CSS url()', // tab 'CSS url()' — unchanged
    copied: 'Đã sao chép!', // 'Copied!'
    copyOutput: 'Sao chép đầu ra', // 'Copy Output'
    saveTxt: 'Lưu .TXT', // 'Save .TXT' — unchanged
  },
  '/base64-to-image': {
    pasteLabel: 'Dán chuỗi Base64 hoặc Data URL', // 'Paste Base64 String or Data URL'
    clear: 'Xóa', // 'Clear'
    inputPlaceholder: 'Dán data:image/png;base64,iVBORw0KGgo... hoặc byte Base64 thuần vào đây', // placeholder 'Paste data:image/png;base64,iVBORw0KGgo... or raw Base64 bytes here'
    supportsNote: 'Hỗ trợ dữ liệu Base64 của PNG, JPG, WebP, GIF, SVG, BMP và ICO', // 'Supports PNG, JPG, WebP, GIF, SVG, BMP, and ICO Base64 payloads'
    decoding: 'Đang giải mã…', // 'Decoding...'
    decodeImage: 'Giải mã ảnh', // 'Decode Image'
    decodingBytes: 'Đang giải mã byte Base64…', // 'Decoding Base64 bytes...'
    errorUnsupportedDataUri: 'Mã hóa data URI không được hỗ trợ. Cần dữ liệu Base64 (`;base64,`).', // 'Unsupported data URI encoding. Expected base64 payload (`;base64,`).'
    errorInvalidBase64: 'Đầu vào chứa ký tự Base64 không hợp lệ.', // 'Input contains invalid Base64 characters.'
    errorNotValidImage: 'Byte đã giải mã không tạo thành ảnh hợp lệ mà trình duyệt có thể đọc.', // 'Decoded bytes do not form a valid browser-readable image.'
    errorUnableToDecode: 'Không thể giải mã chuỗi Base64.', // 'Unable to decode Base64 string.'
    decodedPreviewAlt: 'Xem trước Base64 đã giải mã', // alt 'Decoded Base64 preview'
    validImageDecoded: 'Đã giải mã ảnh hợp lệ', // 'Valid Image Decoded'
    detectedFormat: 'Định dạng phát hiện', // 'Detected Format'
    binarySize: 'Kích thước nhị phân', // 'Binary Size'
    dimensions: 'Kích thước', // 'Dimensions'
    downloadFormat: 'Định dạng tải xuống', // 'Download Format'
    formatOriginal: 'Gốc', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    downloadImageFile: 'Tải tệp ảnh xuống', // 'Download Image File'
  },
  '/image-color-palette-extractor': {
    uploadTitle: 'Thả ảnh vào đây để trích xuất bảng màu chủ đạo', // 'Drop an image to extract its dominant color palette'
    errorUnableToLoadImage: 'Không thể tải ảnh.', // 'Unable to load image.'
    errorClipboardDenied: 'Quyền clipboard bị từ chối.', // 'Clipboard permission denied.'
    extractedPalette: 'Bảng màu đã trích xuất ({count} màu)', // 'Extracted Palette ({count} Colors)'
    sourceAlt: 'Nguồn', // alt 'Source'
    changeImage: 'Đổi', // 'Change'
    numberOfColors: 'Số lượng màu', // 'Number of Colors'
    colorsCount: '{count} màu', // '{count} colors'
    copyCssVariables: 'Sao chép biến CSS', // 'Copy CSS Variables'
    copiedCss: 'Đã sao chép CSS!', // 'Copied CSS!'
    copyJson: 'Sao chép JSON', // 'Copy JSON'
    copiedJson: 'Đã sao chép JSON!', // 'Copied JSON!'
    downloadPalettePng: 'Tải bảng màu PNG', // 'Download Palette PNG'
  },
  '/gif-maker': {
    uploadTitle: 'Thả 2 ảnh trở lên vào đây để tạo GIF động', // 'Drop 2 or more images to create an animated GIF'
    errorEncodeFailed: 'Không thể mã hóa GIF động.', // 'Failed to encode animated GIF.'
    skippedFile: 'Đã bỏ qua "{name}": {error}', // 'Skipped "{file.name}": {err.message}'
    skippedFileNoError: 'Đã bỏ qua "{name}".', // 'Skipped "{file.name}".'
    generatedGif: 'GIF đã tạo ({width}×{height} px · {size})', // 'Generated GIF ({width}×{height}px · {size})'
    liveTimingPreview: 'Xem trước thời gian trực tiếp · Khung {current}/{total}', // 'Live Timing Preview · Frame {n}/{total}'
    generatedGifAlt: 'GIF động đã tạo', // alt 'Generated animated GIF'
    pause: 'Tạm dừng', // 'Pause'
    play: 'Phát', // 'Play'
    backToFrameEditor: 'Quay lại trình chỉnh sửa khung hình', // 'Back to Frame Editor'
    clearAllFrames: 'Xóa tất cả khung hình', // aria-label 'Clear all frames'
    largeGifWarning: 'Cảnh báo GIF lớn ({size})', // 'Large GIF Warning ({size})'
    largeGifWarningBody:
      'GIF trên 5–15 MB có thể tải lên chậm trong ứng dụng nhắn tin hoặc không đáp ứng giới hạn nghiêm ngặt của nền tảng. Hãy thử giảm chiều rộng/chiều cao đầu ra (vd: 480 px), giảm chất lượng hoặc bỏ bớt khung hình.', // 'GIFs above 5–15 MB may upload slowly on messaging apps or fail strict platform limits. Try reducing output width/height (e.g. 480px), lowering Quality, or removing frames.'
    downloadAnimatedGif: 'Tải GIF động ({size})', // 'Download Animated GIF ({size})'
    animationSettings: 'Cài đặt hoạt ảnh', // 'Animation Settings'
    defaultFrameDuration: 'Thời lượng khung hình mặc định', // 'Default Frame Duration'
    frameDurationValue: '{ms} ms ({fps} FPS)', // '{ms} ms ({fps} FPS)'
    fpsPreset1: '1 FPS (1000 ms)', // '1 FPS (1000ms)'
    fpsPreset2: '2 FPS (500 ms)', // '2 FPS (500ms)'
    fpsPreset5: '5 FPS (200 ms)', // '5 FPS (200ms)'
    fpsPreset10: '10 FPS (100 ms)', // '10 FPS (100ms)'
    loopBehavior: 'Hành vi lặp lại', // 'Loop Behavior'
    loopForever: 'Mãi mãi', // 'Forever'
    loopSetLoops: 'Đặt số lần lặp', // 'Set Loops'
    loopPlayOnce: 'Phát một lần', // 'Play Once'
    totalPlays: 'Tổng số lần phát', // 'Total Plays'
    outputDimensions: 'Kích thước đầu ra (px)', // 'Output Dimensions (px)'
    ratioLocked: 'Tỷ lệ đã khóa', // 'Ratio Locked'
    ratioUnlocked: 'Đã mở khóa', // 'Unlocked'
    widthLabel: 'Chiều rộng', // 'Width'
    heightLabel: 'Chiều cao', // 'Height'
    sizePreset480: '480 px', // '480px'
    sizePreset640: '640 px', // '640px'
    sizePreset800: '800 px', // '800px'
    sizePresetOriginal: 'Gốc', // 'Original'
    frameFit: 'Vừa khung hình', // 'Frame Fit'
    fitContain: 'Vừa khung', // 'contain'
    fitCover: 'Lấp đầy', // 'cover'
    backgroundMatte: 'Nền mờ', // 'Background Matte'
    colorPaletteQuality: 'Chất lượng bảng màu', // 'Color Palette Quality'
    encodingGif: 'Đang mã hóa GIF ({progress}%)…', // 'Encoding GIF ({progress}%)...'
    generateAnimatedGif: 'Tạo GIF động', // 'Generate Animated GIF'
    reEncodeAnimatedGif: 'Mã hóa lại GIF động', // 'Re-Encode Animated GIF'
    framesHeading: 'Khung hình ({count}) — Kéo hoặc dùng mũi tên để sắp xếp lại', // 'Frames ({count}) — Drag or use arrows to reorder'
    perFrameDelayHint:
      'Để trống thời lượng từng khung hình để dùng thời lượng khung hình chung {ms} ms.', // 'Leave per-frame delay blank to inherit the {ms}ms global frame duration.'
    addFrames: 'Thêm khung hình', // 'Add Frames'
    delayMsLabel: 'Thời lượng (ms):', // 'Delay (ms):'
    moveEarlier: 'Di chuyển lên trước', // title 'Move earlier'
    moveLater: 'Di chuyển xuống sau', // title 'Move later'
    duplicateFrame: 'Nhân đôi khung hình', // title 'Duplicate frame'
    removeFrame: 'Xóa khung hình', // title 'Remove frame'
    moveFrameEarlierAria: 'Di chuyển khung hình {n} lên trước', // aria-label `Move frame ${n} earlier`
    moveFrameLaterAria: 'Di chuyển khung hình {n} xuống sau', // aria-label `Move frame ${n} later`
    duplicateFrameAria: 'Nhân đôi khung hình {n}', // aria-label `Duplicate frame ${n}`
    removeFrameAria: 'Xóa khung hình {n}', // aria-label `Remove frame ${n}`
  },
  '/image-collage-maker': {
    uploadTitle: 'Thả 2 đến 9 ảnh vào đây để tạo ảnh ghép', // 'Drop 2 to 9 images to create a photo collage'
    errorExportFailed: 'Không thể xuất ảnh ghép.', // 'Failed to export collage.'
    couldNotLoadFile: 'Không thể tải "{name}": {error}', // 'Could not load "{file.name}": {err.message}'
    couldNotLoadFileNoError: 'Không thể tải "{name}".', // 'Could not load "{file.name}".'
    collagePreview: 'Xem trước ảnh ghép ({width}×{height} px)', // 'Collage Preview ({width}×{height}px)'
    clearAll: 'Xóa tất cả', // 'Clear All'
    rearrangeCells: 'Sắp xếp lại ô (kéo hoặc chạm hai ô để hoán đổi)', // 'Rearrange Cells (Drag or Tap Two Cells to Swap)'
    rearrangeCellsHint:
      'Kéo bất kỳ thẻ ô nào sang ô khác để sắp xếp lại ảnh ngay lập tức.', // 'Drag any cell card onto another slot to reorder photos instantly.'
    addPhotos: 'Thêm ảnh', // 'Add Photos'
    cellLabel: 'Ô {n}', // 'Cell {n}'
    slotLabel: 'Khe {n}', // canvas-drawn 'Slot {n}'
    moveCellBackAria: 'Di chuyển ô {n} về sau', // aria-label `Move cell ${n} back`
    moveCellForwardAria: 'Di chuyển ô {n} về trước', // aria-label `Move cell ${n} forward`
    clearCellAria: 'Xóa ô {n}', // aria-label `Clear cell ${n}`
    addPhoto: 'Thêm ảnh', // 'Add Photo'
    collageLayout: 'Bố cục ảnh ghép', // 'Collage Layout'
    layout2x2: 'Lưới 2×2', // '2×2 Grid'
    layout3x3: 'Lưới 3×3', // '3×3 Grid'
    layoutVertical: 'Dải dọc', // 'Vertical Strip'
    layoutHorizontal: 'Dải ngang', // 'Horizontal Strip'
    cellProportionsSpacing: 'Tỷ lệ & khoảng cách ô', // 'Cell Proportions & Spacing'
    equalCells: 'Ô bằng nhau', // 'Equal Cells'
    colSplit: 'Chia cột', // 'Col Split'
    centerCol: 'Cột giữa', // 'Center Col'
    rowSplit: 'Chia hàng', // 'Row Split'
    centerRow: 'Hàng giữa', // 'Center Row'
    leadCellEmphasis: 'Nhấn mạnh ô chính', // 'Lead Cell Emphasis'
    gapSpacing: 'Khoảng cách', // 'Gap Spacing'
    cellRadius: 'Bán kính ô', // 'Cell Radius'
    backgroundColor: 'Màu nền', // 'Background Color'
    backgroundSwatchAria: 'Nền {color}', // aria-label `Background ${c}`
    imageFit: 'Vừa ảnh', // 'Image Fit'
    fitCover: 'Lấp đầy', // 'cover'
    fitContain: 'Vừa khung', // 'contain'
    outputSize: 'Kích thước đầu ra (px)', // 'Output Size (px)'
    widthLabel: 'Chiều rộng', // 'Width'
    heightLabel: 'Chiều cao', // 'Height'
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatPngLossless: 'PNG (không mất dữ liệu)', // 'PNG (Lossless)'
    jpgQuality: 'Chất lượng JPG', // 'JPG Quality'
    exportingCollage: 'Đang xuất ảnh ghép…', // 'Exporting Collage...'
    downloadCollage: 'Tải ảnh ghép ({format})', // 'Download Collage ({format})'
  },
  '/compress-image-to-50kb': {
    uploadTitle: 'Thả ảnh vào đây để nén xuống dưới {target}', // 'Drop images to compress under {target}'
    errorTargetFailed: 'Không thể nén xuống kích thước mục tiêu.', // 'Target compression failed.'
    errorCorruptedFile: 'Tệp ảnh bị hỏng hoặc không đọc được.', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: 'Dung lượng tệp tối đa mục tiêu', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} tối đa)', // '({bytes} max)'
    needDifferentTarget: 'Cần mục tiêu KB khác?', // 'Need a different target KB?'
    outputFormat: 'Định dạng đầu ra', // 'Output Format'
    formatOriginal: 'Gốc', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WebP' — unchanged
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      'Cho phép thu nhỏ kích thước thông minh nếu chỉ giảm chất lượng không đạt được {target}', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      'Tự động chuyển PNG lớn sang WebP/JPG khi PNG không mất dữ liệu không đạt được {target} một cách sạch sẽ', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: 'Màu nền cho PNG trong suốt:', // 'Transparent PNG matte color:'
    compressToTarget: 'Nén xuống {target}', // 'Compress to {target}'
    optimizing: 'Đang tối ưu…', // 'Optimizing...'
    clear: 'Xóa', // 'Clear'
    losslessPngSelected: 'Đã chọn PNG không mất dữ liệu:', // 'Lossless PNG selected:'
    losslessPngWarning:
      'PNG bỏ qua thanh trượt chất lượng, vì vậy việc giảm kích thước hoàn toàn phụ thuộc vào việc thu nhỏ kích thước điểm ảnh. Đối với ảnh lớn, hãy chọn JPG hoặc WebP để đạt giới hạn KB nghiêm ngặt mà vẫn sắc nét.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: 'Tóm tắt nén mục tiêu · Mục tiêu ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{achieved} trên {total} {images} đã đạt mục tiêu {target}', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: 'ảnh', // 'image'
    imagePlural: 'ảnh', // 'images'
    summaryMissed: ' · {missed} không thể vừa một cách trung thực (chi tiết bên dưới)', // ' · {missed} could not honestly fit (details below)'
    totalSaved: 'Tổng đã tiết kiệm: {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: 'Tổng đã tiết kiệm: {bytes} (tăng thêm {grew})', // 'Total Saved: {bytes} (grew by {bytes})'
    downloadAllZip: 'Tải tất cả (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'Đang tạo ZIP…', // 'Creating ZIP...'
    metricOriginal: 'Gốc', // 'Original' (metric label)
    metricOutput: 'Đầu ra', // 'Output' (metric label)
    metricSpaceSaved: 'Dung lượng tiết kiệm', // 'Space Saved' (metric label)
    metricReduction: 'Đã giảm', // 'Reduction' (metric label)
    metricSizeChange: 'Thay đổi kích thước', // 'Size Change' (metric label)
    underTarget: 'Dưới {target} ({bytes})', // 'Under {target} ({bytes})'
    targetMissed: 'Chưa đạt mục tiêu — {bytes}', // 'Target missed — {bytes}'
    compare: 'So sánh', // 'Compare'
    download: 'Tải xuống', // 'Download'
    removeImage: 'Xóa {name}', // aria-label `Remove ${item.name}`
    grewBy: 'Tăng {bytes}: mã hóa lại lớn hơn bản gốc', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: 'WebP hoặc JPG thường nhỏ hơn đối với PNG trông giống ảnh chụp.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: 'Giữ bản gốc', // 'Keep original'
    keptOriginalNote: 'Đã giữ tệp gốc vì mã hóa lại làm tệp lớn hơn.', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      'Đã tự động chuyển PNG không mất dữ liệu sang {format} để giữ độ phân giải cao hơn dưới {target}.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP (giữ độ trong suốt)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      'Tệp gốc đã dưới {target}, và mã hóa lại làm tệp tăng thêm {bytes}. Hãy dùng «Giữ bản gốc» hoặc chuyển sang WebP/JPG để có đầu ra nhỏ hơn.', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      'Tệp gốc đã dưới {target}; đã xuất sạch với chất lượng {quality}%.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      'Đã đạt mục tiêu với độ phân giải đầy đủ {width}×{height} px ({qualityLabel}).', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      'Đã đạt mục tiêu bằng cách thu nhỏ xuống {width}×{height} px ({percent}%) với {qualityLabel}.', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'PNG không mất dữ liệu', // 'lossless PNG'
    qualityPercent: 'chất lượng {quality}%', // '{quality}% quality'
    statusCannotPng:
      'Không thể đạt {target} với PNG không mất dữ liệu (nhỏ nhất có thể: {bytes} ở {width}×{height} px). Hãy chuyển định dạng đầu ra sang JPG hoặc WebP để đạt kích thước nhỏ hơn.', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      'Không thể đạt {target} với kích thước đầy đủ {width}×{height} px (kích thước tối thiểu với chất lượng là {bytes}). Hãy bật «Cho phép thu nhỏ kích thước» để thu nhỏ kích thước hơn nữa.', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      'Không thể đạt được mục tiêu {target} đã yêu cầu một cách sạch sẽ. Đầu ra mã hóa trung thực nhỏ nhất là {bytes} ({width}×{height} px, chất lượng {quality}%). Hãy thử mục tiêu lớn hơn.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: 'Nén mục tiêu ({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: 'Đã nén ({bytes})', // afterLabel `Compressed ({bytes})`
  },
  '/compress-image-to-100kb': {
    uploadTitle: 'Thả ảnh vào đây để nén xuống dưới {target}', // 'Drop images to compress under {target}'
    errorTargetFailed: 'Không thể nén xuống kích thước mục tiêu.', // 'Target compression failed.'
    errorCorruptedFile: 'Tệp ảnh bị hỏng hoặc không đọc được.', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: 'Dung lượng tệp tối đa mục tiêu', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} tối đa)', // '({bytes} max)'
    needDifferentTarget: 'Cần mục tiêu KB khác?', // 'Need a different target KB?'
    outputFormat: 'Định dạng đầu ra', // 'Output Format'
    formatOriginal: 'Gốc', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WebP' — unchanged
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      'Cho phép thu nhỏ kích thước thông minh nếu chỉ giảm chất lượng không đạt được {target}', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      'Tự động chuyển PNG lớn sang WebP/JPG khi PNG không mất dữ liệu không đạt được {target} một cách sạch sẽ', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: 'Màu nền cho PNG trong suốt:', // 'Transparent PNG matte color:'
    compressToTarget: 'Nén xuống {target}', // 'Compress to {target}'
    optimizing: 'Đang tối ưu…', // 'Optimizing...'
    clear: 'Xóa', // 'Clear'
    losslessPngSelected: 'Đã chọn PNG không mất dữ liệu:', // 'Lossless PNG selected:'
    losslessPngWarning:
      'PNG bỏ qua thanh trượt chất lượng, vì vậy việc giảm kích thước hoàn toàn phụ thuộc vào việc thu nhỏ kích thước điểm ảnh. Đối với ảnh lớn, hãy chọn JPG hoặc WebP để đạt giới hạn KB nghiêm ngặt mà vẫn sắc nét.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: 'Tóm tắt nén mục tiêu · Mục tiêu ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{achieved} trên {total} {images} đã đạt mục tiêu {target}', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: 'ảnh', // 'image'
    imagePlural: 'ảnh', // 'images'
    summaryMissed: ' · {missed} không thể vừa một cách trung thực (chi tiết bên dưới)', // ' · {missed} could not honestly fit (details below)'
    totalSaved: 'Tổng đã tiết kiệm: {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: 'Tổng đã tiết kiệm: {bytes} (tăng thêm {grew})', // 'Total Saved: {bytes} (grew by {bytes})'
    downloadAllZip: 'Tải tất cả (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'Đang tạo ZIP…', // 'Creating ZIP...'
    metricOriginal: 'Gốc', // 'Original' (metric label)
    metricOutput: 'Đầu ra', // 'Output' (metric label)
    metricSpaceSaved: 'Dung lượng tiết kiệm', // 'Space Saved' (metric label)
    metricReduction: 'Đã giảm', // 'Reduction' (metric label)
    metricSizeChange: 'Thay đổi kích thước', // 'Size Change' (metric label)
    underTarget: 'Dưới {target} ({bytes})', // 'Under {target} ({bytes})'
    targetMissed: 'Chưa đạt mục tiêu — {bytes}', // 'Target missed — {bytes}'
    compare: 'So sánh', // 'Compare'
    download: 'Tải xuống', // 'Download'
    removeImage: 'Xóa {name}', // aria-label `Remove ${item.name}`
    grewBy: 'Tăng {bytes}: mã hóa lại lớn hơn bản gốc', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: 'WebP hoặc JPG thường nhỏ hơn đối với PNG trông giống ảnh chụp.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: 'Giữ bản gốc', // 'Keep original'
    keptOriginalNote: 'Đã giữ tệp gốc vì mã hóa lại làm tệp lớn hơn.', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      'Đã tự động chuyển PNG không mất dữ liệu sang {format} để giữ độ phân giải cao hơn dưới {target}.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP (giữ độ trong suốt)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      'Tệp gốc đã dưới {target}, và mã hóa lại làm tệp tăng thêm {bytes}. Hãy dùng «Giữ bản gốc» hoặc chuyển sang WebP/JPG để có đầu ra nhỏ hơn.', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      'Tệp gốc đã dưới {target}; đã xuất sạch với chất lượng {quality}%.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      'Đã đạt mục tiêu với độ phân giải đầy đủ {width}×{height} px ({qualityLabel}).', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      'Đã đạt mục tiêu bằng cách thu nhỏ xuống {width}×{height} px ({percent}%) với {qualityLabel}.', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'PNG không mất dữ liệu', // 'lossless PNG'
    qualityPercent: 'chất lượng {quality}%', // '{quality}% quality'
    statusCannotPng:
      'Không thể đạt {target} với PNG không mất dữ liệu (nhỏ nhất có thể: {bytes} ở {width}×{height} px). Hãy chuyển định dạng đầu ra sang JPG hoặc WebP để đạt kích thước nhỏ hơn.', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      'Không thể đạt {target} với kích thước đầy đủ {width}×{height} px (kích thước tối thiểu với chất lượng là {bytes}). Hãy bật «Cho phép thu nhỏ kích thước» để thu nhỏ kích thước hơn nữa.', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      'Không thể đạt được mục tiêu {target} đã yêu cầu một cách sạch sẽ. Đầu ra mã hóa trung thực nhỏ nhất là {bytes} ({width}×{height} px, chất lượng {quality}%). Hãy thử mục tiêu lớn hơn.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: 'Nén mục tiêu ({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: 'Đã nén ({bytes})', // afterLabel `Compressed ({bytes})`
  },
  '/compress-image-to-200kb': {
    uploadTitle: 'Thả ảnh vào đây để nén xuống dưới {target}', // 'Drop images to compress under {target}'
    errorTargetFailed: 'Không thể nén xuống kích thước mục tiêu.', // 'Target compression failed.'
    errorCorruptedFile: 'Tệp ảnh bị hỏng hoặc không đọc được.', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: 'Dung lượng tệp tối đa mục tiêu', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} tối đa)', // '({bytes} max)'
    needDifferentTarget: 'Cần mục tiêu KB khác?', // 'Need a different target KB?'
    outputFormat: 'Định dạng đầu ra', // 'Output Format'
    formatOriginal: 'Gốc', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WebP' — unchanged
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      'Cho phép thu nhỏ kích thước thông minh nếu chỉ giảm chất lượng không đạt được {target}', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      'Tự động chuyển PNG lớn sang WebP/JPG khi PNG không mất dữ liệu không đạt được {target} một cách sạch sẽ', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: 'Màu nền cho PNG trong suốt:', // 'Transparent PNG matte color:'
    compressToTarget: 'Nén xuống {target}', // 'Compress to {target}'
    optimizing: 'Đang tối ưu…', // 'Optimizing...'
    clear: 'Xóa', // 'Clear'
    losslessPngSelected: 'Đã chọn PNG không mất dữ liệu:', // 'Lossless PNG selected:'
    losslessPngWarning:
      'PNG bỏ qua thanh trượt chất lượng, vì vậy việc giảm kích thước hoàn toàn phụ thuộc vào việc thu nhỏ kích thước điểm ảnh. Đối với ảnh lớn, hãy chọn JPG hoặc WebP để đạt giới hạn KB nghiêm ngặt mà vẫn sắc nét.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: 'Tóm tắt nén mục tiêu · Mục tiêu ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{achieved} trên {total} {images} đã đạt mục tiêu {target}', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: 'ảnh', // 'image'
    imagePlural: 'ảnh', // 'images'
    summaryMissed: ' · {missed} không thể vừa một cách trung thực (chi tiết bên dưới)', // ' · {missed} could not honestly fit (details below)'
    totalSaved: 'Tổng đã tiết kiệm: {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: 'Tổng đã tiết kiệm: {bytes} (tăng thêm {grew})', // 'Total Saved: {bytes} (grew by {bytes})'
    downloadAllZip: 'Tải tất cả (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'Đang tạo ZIP…', // 'Creating ZIP...'
    metricOriginal: 'Gốc', // 'Original' (metric label)
    metricOutput: 'Đầu ra', // 'Output' (metric label)
    metricSpaceSaved: 'Dung lượng tiết kiệm', // 'Space Saved' (metric label)
    metricReduction: 'Đã giảm', // 'Reduction' (metric label)
    metricSizeChange: 'Thay đổi kích thước', // 'Size Change' (metric label)
    underTarget: 'Dưới {target} ({bytes})', // 'Under {target} ({bytes})'
    targetMissed: 'Chưa đạt mục tiêu — {bytes}', // 'Target missed — {bytes}'
    compare: 'So sánh', // 'Compare'
    download: 'Tải xuống', // 'Download'
    removeImage: 'Xóa {name}', // aria-label `Remove ${item.name}`
    grewBy: 'Tăng {bytes}: mã hóa lại lớn hơn bản gốc', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: 'WebP hoặc JPG thường nhỏ hơn đối với PNG trông giống ảnh chụp.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: 'Giữ bản gốc', // 'Keep original'
    keptOriginalNote: 'Đã giữ tệp gốc vì mã hóa lại làm tệp lớn hơn.', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      'Đã tự động chuyển PNG không mất dữ liệu sang {format} để giữ độ phân giải cao hơn dưới {target}.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP (giữ độ trong suốt)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      'Tệp gốc đã dưới {target}, và mã hóa lại làm tệp tăng thêm {bytes}. Hãy dùng «Giữ bản gốc» hoặc chuyển sang WebP/JPG để có đầu ra nhỏ hơn.', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      'Tệp gốc đã dưới {target}; đã xuất sạch với chất lượng {quality}%.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      'Đã đạt mục tiêu với độ phân giải đầy đủ {width}×{height} px ({qualityLabel}).', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      'Đã đạt mục tiêu bằng cách thu nhỏ xuống {width}×{height} px ({percent}%) với {qualityLabel}.', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'PNG không mất dữ liệu', // 'lossless PNG'
    qualityPercent: 'chất lượng {quality}%', // '{quality}% quality'
    statusCannotPng:
      'Không thể đạt {target} với PNG không mất dữ liệu (nhỏ nhất có thể: {bytes} ở {width}×{height} px). Hãy chuyển định dạng đầu ra sang JPG hoặc WebP để đạt kích thước nhỏ hơn.', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      'Không thể đạt {target} với kích thước đầy đủ {width}×{height} px (kích thước tối thiểu với chất lượng là {bytes}). Hãy bật «Cho phép thu nhỏ kích thước» để thu nhỏ kích thước hơn nữa.', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      'Không thể đạt được mục tiêu {target} đã yêu cầu một cách sạch sẽ. Đầu ra mã hóa trung thực nhỏ nhất là {bytes} ({width}×{height} px, chất lượng {quality}%). Hãy thử mục tiêu lớn hơn.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: 'Nén mục tiêu ({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: 'Đã nén ({bytes})', // afterLabel `Compressed ({bytes})`
  },
  '/compress-image-to-500kb': {
    uploadTitle: 'Thả ảnh vào đây để nén xuống dưới {target}', // 'Drop images to compress under {target}'
    errorTargetFailed: 'Không thể nén xuống kích thước mục tiêu.', // 'Target compression failed.'
    errorCorruptedFile: 'Tệp ảnh bị hỏng hoặc không đọc được.', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: 'Dung lượng tệp tối đa mục tiêu', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} tối đa)', // '({bytes} max)'
    needDifferentTarget: 'Cần mục tiêu KB khác?', // 'Need a different target KB?'
    outputFormat: 'Định dạng đầu ra', // 'Output Format'
    formatOriginal: 'Gốc', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WebP' — unchanged
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      'Cho phép thu nhỏ kích thước thông minh nếu chỉ giảm chất lượng không đạt được {target}', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      'Tự động chuyển PNG lớn sang WebP/JPG khi PNG không mất dữ liệu không đạt được {target} một cách sạch sẽ', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: 'Màu nền cho PNG trong suốt:', // 'Transparent PNG matte color:'
    compressToTarget: 'Nén xuống {target}', // 'Compress to {target}'
    optimizing: 'Đang tối ưu…', // 'Optimizing...'
    clear: 'Xóa', // 'Clear'
    losslessPngSelected: 'Đã chọn PNG không mất dữ liệu:', // 'Lossless PNG selected:'
    losslessPngWarning:
      'PNG bỏ qua thanh trượt chất lượng, vì vậy việc giảm kích thước hoàn toàn phụ thuộc vào việc thu nhỏ kích thước điểm ảnh. Đối với ảnh lớn, hãy chọn JPG hoặc WebP để đạt giới hạn KB nghiêm ngặt mà vẫn sắc nét.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: 'Tóm tắt nén mục tiêu · Mục tiêu ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{achieved} trên {total} {images} đã đạt mục tiêu {target}', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: 'ảnh', // 'image'
    imagePlural: 'ảnh', // 'images'
    summaryMissed: ' · {missed} không thể vừa một cách trung thực (chi tiết bên dưới)', // ' · {missed} could not honestly fit (details below)'
    totalSaved: 'Tổng đã tiết kiệm: {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: 'Tổng đã tiết kiệm: {bytes} (tăng thêm {grew})', // 'Total Saved: {bytes} (grew by {bytes})'
    downloadAllZip: 'Tải tất cả (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'Đang tạo ZIP…', // 'Creating ZIP...'
    metricOriginal: 'Gốc', // 'Original' (metric label)
    metricOutput: 'Đầu ra', // 'Output' (metric label)
    metricSpaceSaved: 'Dung lượng tiết kiệm', // 'Space Saved' (metric label)
    metricReduction: 'Đã giảm', // 'Reduction' (metric label)
    metricSizeChange: 'Thay đổi kích thước', // 'Size Change' (metric label)
    underTarget: 'Dưới {target} ({bytes})', // 'Under {target} ({bytes})'
    targetMissed: 'Chưa đạt mục tiêu — {bytes}', // 'Target missed — {bytes}'
    compare: 'So sánh', // 'Compare'
    download: 'Tải xuống', // 'Download'
    removeImage: 'Xóa {name}', // aria-label `Remove ${item.name}`
    grewBy: 'Tăng {bytes}: mã hóa lại lớn hơn bản gốc', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: 'WebP hoặc JPG thường nhỏ hơn đối với PNG trông giống ảnh chụp.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: 'Giữ bản gốc', // 'Keep original'
    keptOriginalNote: 'Đã giữ tệp gốc vì mã hóa lại làm tệp lớn hơn.', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      'Đã tự động chuyển PNG không mất dữ liệu sang {format} để giữ độ phân giải cao hơn dưới {target}.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP (giữ độ trong suốt)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      'Tệp gốc đã dưới {target}, và mã hóa lại làm tệp tăng thêm {bytes}. Hãy dùng «Giữ bản gốc» hoặc chuyển sang WebP/JPG để có đầu ra nhỏ hơn.', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      'Tệp gốc đã dưới {target}; đã xuất sạch với chất lượng {quality}%.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      'Đã đạt mục tiêu với độ phân giải đầy đủ {width}×{height} px ({qualityLabel}).', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      'Đã đạt mục tiêu bằng cách thu nhỏ xuống {width}×{height} px ({percent}%) với {qualityLabel}.', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'PNG không mất dữ liệu', // 'lossless PNG'
    qualityPercent: 'chất lượng {quality}%', // '{quality}% quality'
    statusCannotPng:
      'Không thể đạt {target} với PNG không mất dữ liệu (nhỏ nhất có thể: {bytes} ở {width}×{height} px). Hãy chuyển định dạng đầu ra sang JPG hoặc WebP để đạt kích thước nhỏ hơn.', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      'Không thể đạt {target} với kích thước đầy đủ {width}×{height} px (kích thước tối thiểu với chất lượng là {bytes}). Hãy bật «Cho phép thu nhỏ kích thước» để thu nhỏ kích thước hơn nữa.', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      'Không thể đạt được mục tiêu {target} đã yêu cầu một cách sạch sẽ. Đầu ra mã hóa trung thực nhỏ nhất là {bytes} ({width}×{height} px, chất lượng {quality}%). Hãy thử mục tiêu lớn hơn.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: 'Nén mục tiêu ({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: 'Đã nén ({bytes})', // afterLabel `Compressed ({bytes})`
  },
  '/bulk-image-compressor': {
    uploadTitle: 'Thả hàng chục ảnh vào đây để nén hàng loạt', // 'Drop dozens of images for bulk compression'
    errorCompressionFailed: 'Không thể nén.', // 'Compression failed.'
    errorCorruptedFile: 'Tệp ảnh bị hỏng hoặc không đọc được.', // 'Corrupted or unreadable image file.'
    quickBatchProfiles: 'Mẫu lô nhanh:', // 'Quick Batch Profiles:'
    profileWebFast: 'Web nhanh (WebP 75%)', // 'Web Fast (WebP 75%)'
    profileEmailSharing: 'Email / Chia sẻ (JPG 65%)', // 'Email / Sharing (JPG 65%)'
    profileHighFidelity: 'Độ trung thực cao (85%)', // 'High Fidelity (85%)'
    compressingBatch: 'Đang nén lô ngay trên thiết bị…', // 'Compressing batch locally...'
    // Strings rendered by CompressionControls, ResultsList and ComparisonModal
    // come from the shared dictionary sections (compressionControls,
    // resultsList, comparisonModal) — already translated above.
  },
  '/target-file-size-compressor': {
    uploadTitleTemplate: 'Thả ảnh vào đây để nén xuống dưới {target}', // `Drop images to compress under ${targetLabel}`
    targetMaxFileSize: 'Dung lượng tệp tối đa mục tiêu', // 'Target Maximum File Size'
    targetNumberAria: 'Số dung lượng tệp mục tiêu', // aria-label 'Target file size number'
    maxSuffix: '({size} tối đa)', // '({formatBytes(effectiveTargetBytes)} max)'
    needDifferentTarget: 'Cần mục tiêu KB khác?', // 'Need a different target KB?'
    preset20kb: '20 KB', // '20 KB' — unchanged
    preset50kb: '50 KB', // '50 KB' — unchanged
    preset100kb: '100 KB', // '100 KB' — unchanged
    preset200kb: '200 KB', // '200 KB' — unchanged
    preset500kb: '500 KB', // '500 KB' — unchanged
    preset1mb: '1 MB', // '1 MB' — unchanged
    outputFormat: 'Định dạng đầu ra', // 'Output Format'
    formatOriginal: 'Gốc', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    allowDownscale: 'Cho phép thu nhỏ kích thước thông minh nếu chỉ giảm chất lượng không đạt được {target}', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {targetLabel}'
    autoSwitchPng: 'Tự động chuyển PNG lớn sang WebP/JPG khi PNG không mất dữ liệu không đạt được {target} một cách sạch sẽ', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {targetLabel} cleanly'
    transparentPngMatteColor: 'Màu nền cho PNG trong suốt:', // 'Transparent PNG matte color:'
    losslessPngTitle: 'Đã chọn PNG không mất dữ liệu:', // 'Lossless PNG selected:'
    losslessPngNote: 'PNG bỏ qua thanh trượt chất lượng, vì vậy việc giảm kích thước hoàn toàn phụ thuộc vào việc thu nhỏ kích thước điểm ảnh. Đối với ảnh lớn, hãy chọn JPG hoặc WebP để đạt giới hạn KB nghiêm ngặt mà vẫn sắc nét.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    compressToTarget: 'Nén xuống {target}', // 'Compress to {targetLabel}'
    optimizing: 'Đang tối ưu…', // 'Optimizing...'
    clear: 'Xóa', // 'Clear'
    targetSummary: 'Tóm tắt nén mục tiêu · Mục tiêu ≤ {target}', // 'Target Compression Summary · Goal ≤ {targetLabel}'
    summaryMet: '{achieved} trên {total} {images} đã đạt mục tiêu {target}', // '{achievedCount} of {doneItems.length} {image/images} met the {targetLabel} target'
    imageSingular: 'ảnh', // 'image'
    imagePlural: 'ảnh', // 'images'
    summaryMissed: '· {missed} không thể vừa một cách trung thực (chi tiết bên dưới)', // '· {missed} could not honestly fit (details below)'
    totalSaved: 'Tổng đã tiết kiệm: {saved}', // 'Total Saved: {formatBytes(totalSaved)}'
    totalGrew: '(tăng thêm {grew})', // '(grew by {formatBytes(Math.abs(totalSaved))})'
    creatingZip: 'Đang tạo ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Tải tất cả (ZIP)', // 'Download All (ZIP)'
    underTarget: 'Dưới {target} ({size})', // 'Under {targetLabel} ({formatBytes(compressedSize)})'
    targetMissed: 'Chưa đạt mục tiêu — {size}', // 'Target missed — {formatBytes(compressedSize)}'
    columnOriginal: 'Gốc', // 'Original'
    columnOutput: 'Đầu ra', // 'Output'
    columnSpaceSaved: 'Dung lượng tiết kiệm', // 'Space Saved'
    columnReduction: 'Đã giảm', // 'Reduction'
    columnSizeChange: 'Thay đổi kích thước', // 'Size Change'
    grewBy: 'Tăng {amount}: mã hóa lại lớn hơn bản gốc.', // 'Grew by {amount} — re-encode is larger than the original.'
    grewPngHint: 'WebP hoặc JPG thường nhỏ hơn đối với PNG trông giống ảnh chụp.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: 'Giữ bản gốc', // 'Keep original'
    keptOriginalNote: 'Đã giữ tệp gốc vì mã hóa lại làm tệp lớn hơn.', // 'Kept original file because re-encoding made it larger.'
    statusAlreadyUnder: 'Tệp gốc đã dưới {target}; đã xuất sạch với chất lượng {quality}%.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull: 'Đã đạt mục tiêu với độ phân giải đầy đủ {width}×{height} px ({quality}).', // 'Target met at full {width}×{height}px resolution ({quality}% quality / lossless PNG).'
    statusMetScaled: 'Đã đạt mục tiêu bằng cách thu nhỏ xuống {width}×{height} px (tỷ lệ {scale}%).', // 'Target met by scaling to {width}×{height}px ({scale}% scale).'
    statusCannotPng: 'Không thể đạt {target} với PNG không mất dữ liệu (nhỏ nhất có thể: {size}).', // 'Cannot reach {target} with lossless PNG (smallest achievable: {size}).'
    statusCannotFull: 'Không thể đạt {target} với kích thước đầy đủ {width}×{height} px (kích thước tối thiểu với chất lượng là {size}).', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {size}).'
    statusCannotCleanly: 'Không thể đạt được mục tiêu {target} đã yêu cầu một cách sạch sẽ. Đầu ra mã hóa trung thực nhỏ nhất là {size}.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {size}.'
    switchedFormatNote: 'Đã tự động chuyển PNG không mất dữ liệu sang {format}.', // 'Auto-converted lossless PNG to {format}.'
    errorTargetFailed: 'Không thể nén xuống mục tiêu.', // 'Target compression failed.'
    errorCorruptedFile: 'Tệp ảnh bị hỏng hoặc không đọc được.', // 'Corrupted or unreadable image file.'
    comparisonTitlePrefix: 'Nén mục tiêu ({target})', // `Target Compression (${targetLabel})`
    comparisonAfterLabel: 'Đã nén ({size})', // `Compressed (${formatBytes(compressedSize)})`
    compare: 'So sánh', // 'Compare'
    download: 'Tải xuống', // 'Download'
    removeImage: 'Xóa {name}', // aria-label `Remove ${item.name}`
  },
  '/bulk-image-resizer': {
    uploadTitle: 'Thả nhiều ảnh vào đây để đổi kích thước hàng loạt', // 'Drop multiple images to bulk resize'
    batchResizeStrategy: 'Chiến lược đổi kích thước hàng loạt', // 'Batch Resize Strategy'
    strategyBounding: 'Vừa tối đa R × C', // 'Fit Max W × H'
    strategyWidth: 'Chiều rộng đồng nhất', // 'Uniform Width'
    strategyExact: 'R × C chính xác', // 'Exact W × H'
    strategyPercentage: 'Phần trăm (%)', // 'Percentage (%)'
    outputFormat: 'Định dạng đầu ra', // 'Output Format'
    formatOriginal: 'Gốc', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    scaleAllImages: 'Thu phóng tất cả ảnh:', // 'Scale All Images:'
    maxWidth: 'Chiều rộng tối đa (px)', // 'Max Width (px)'
    targetWidth: 'Chiều rộng mục tiêu (px)', // 'Target Width (px)'
    exactWidth: 'Chiều rộng chính xác (px)', // 'Exact Width (px)'
    maxHeight: 'Chiều cao tối đa (px)', // 'Max Height (px)'
    exactHeight: 'Chiều cao chính xác (px)', // 'Exact Height (px)'
    doNotEnlarge: 'Không phóng to ảnh nhỏ hơn', // 'Do not enlarge smaller images'
    fitMode: 'Chế độ vừa khung', // 'Fit Mode'
    fitContain: 'Vừa khung', // 'Contain'
    fitCover: 'Lấp đầy', // 'Cover'
    fitStretch: 'Kéo giãn', // 'Stretch'
    presetFullHd: 'Full HD 1920px', // 'Full HD 1920px' — unchanged
    presetBlog: 'Blog 1200px', // 'Blog 1200px' — unchanged
    presetEcommerce: 'Thương mại điện tử 1000×1000', // 'E-commerce 1000×1000'
    presetThumbnail: 'Ảnh thu nhỏ 600px', // 'Thumbnail 600px'
    quality: 'Chất lượng:', // 'Quality:'
    matteBg: 'Nền mờ:', // 'Matte BG:'
    resizingProgress: 'Đang đổi kích thước ({processed}/{total})…', // 'Resizing ({processedCount}/{totalCount})...'
    bulkResize: 'Đổi kích thước hàng loạt ({count})', // 'Bulk Resize ({items.length})'
    clear: 'Xóa', // 'Clear'
    bulkResizeComplete: 'Đổi kích thước hàng loạt hoàn tất', // 'Bulk Resize Complete'
    imagesResizedReadySingular: '{count} ảnh đã đổi kích thước và sẵn sàng', // '{count} image resized and ready'
    imagesResizedReadyPlural: '{count} ảnh đã đổi kích thước và sẵn sàng', // '{count} images resized and ready'
    creatingZip: 'Đang tạo ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Tải tất cả (ZIP)', // 'Download All (ZIP)'
    errorResizeFailed: 'Không thể đổi kích thước hàng loạt.', // 'Batch resize failed.'
    errorCorruptedFile: 'Tệp ảnh bị hỏng hoặc không đọc được.', // 'Corrupted or unreadable image file.'
    comparisonTitlePrefix: 'So sánh đổi kích thước hàng loạt', // 'Bulk Resize Comparison'
    comparisonAfterLabel: 'Đã đổi kích thước (sau)', // 'Resized (After)'
    compare: 'So sánh', // 'Compare'
    download: 'Tải xuống', // 'Download'
    removeImage: 'Xóa {name}', // aria-label `Remove ${item.name}`
  },
  '/bulk-image-converter': {
    uploadTitle: 'Thả nhiều ảnh vào đây để chuyển đổi định dạng hàng loạt', // 'Drop multiple images to bulk convert formats'
    convertBatchToFormat: 'Chuyển lô sang định dạng', // 'Convert Batch To Format'
    formatWebp: 'WebP (nhẹ nhất cho web)', // 'WebP (Smallest Web)'
    formatJpg: 'JPG (phổ biến)', // 'JPG (Universal)'
    formatPng: 'PNG (không mất dữ liệu, giữ độ trong suốt)', // 'PNG (Lossless Alpha)'
    optionalFilenameSuffix: 'Hậu tố tên tệp tùy chọn', // 'Optional Filename Suffix'
    placeholderSuffix: 'vd: _web', // placeholder 'e.g. _web'
    transparentFill: 'Màu lấp đầy trong suốt', // 'Transparent Fill'
    qualityLosslessPng: 'Chất lượng (PNG không mất dữ liệu)', // 'Quality (Lossless PNG)'
    qualityPercent: 'Chất lượng ({quality}%)', // 'Quality ({quality}%)'
    convertingProgress: 'Đang chuyển đổi ({processed}/{total})…', // 'Converting ({processedCount}/{totalCount})...'
    convertAll: 'Chuyển đổi tất cả ({count})', // 'Convert All ({items.length})'
    clear: 'Xóa', // 'Clear'
    bulkConversionSummary: 'Tóm tắt chuyển đổi hàng loạt', // 'Bulk Conversion Summary'
    filesConvertedSummary: '{count} tệp đã chuyển sang {format} · {original} → {converted}', // '{count} files converted to {format} · {totalOrig} → {totalOut}'
    creatingZip: 'Đang tạo ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Tải tất cả (ZIP)', // 'Download All (ZIP)'
    convertedTo: 'Đã chuyển sang {ext}', // 'Converted to {ext}'
    errorConversionFailed: 'Không thể chuyển đổi hàng loạt.', // 'Batch conversion failed.'
    errorUnsupportedFile: 'Tệp ảnh không được hỗ trợ hoặc bị hỏng.', // 'Unsupported or corrupted image file.'
    comparisonTitlePrefix: 'Chuyển đổi định dạng hàng loạt', // 'Bulk Format Conversion'
    comparisonAfterLabel: 'Đã chuyển đổi (sau)', // 'Converted (After)'
    compare: 'So sánh', // 'Compare'
    download: 'Tải xuống', // 'Download'
    removeImage: 'Xóa {name}', // aria-label `Remove ${item.name}`
  },
  '/web-image-optimizer': {
    uploadTitle: 'Thả tài nguyên web vào đây để tối ưu cho Core Web Vitals', // 'Drop website assets to optimize for Core Web Vitals'
    webPerformancePresets: 'Mẫu hiệu năng web', // 'Web Performance Presets'
    presetHero: 'Hero / Banner', // 'Hero / Banner'
    presetHeroDesc: 'Tối đa 1600 px · WebP 80%', // 'Max 1600px · WebP 80%'
    presetProduct: 'Sản phẩm thương mại điện tử', // 'E-Commerce Product'
    presetProductDesc: 'Tối đa 1200 px · WebP 82%', // 'Max 1200px · WebP 82%'
    presetThumb: 'Thẻ / Ảnh thu nhỏ', // 'Card / Thumbnail'
    presetThumbDesc: 'Tối đa 640 px · WebP 75%', // 'Max 640px · WebP 75%'
    presetOg: 'OG mạng xã hội / Email', // 'Social OG / Email'
    presetOgDesc: 'Tối đa 1200 px · JPG 82%', // 'Max 1200px · JPG 82%'
    presetRetina: 'Đồ họa Retina 2×', // 'Retina 2× Graphic'
    presetRetinaDesc: 'Tối đa 1920 px · WebP 88%', // 'Max 1920px · WebP 88%'
    webFormat: 'Định dạng web', // 'Web Format'
    maxDimension: 'Kích thước tối đa (cạnh dài)', // 'Max Dimension (Long Edge)'
    keepOriginalDimensions: 'Giữ kích thước gốc', // 'Keep Original Dimensions'
    max1920: 'Tối đa 1920 px (Retina / Full HD)', // 'Max 1920px (Retina / Full HD)'
    max1600: 'Tối đa 1600 px (Hero / Banner)', // 'Max 1600px (Hero / Banner)'
    max1200: 'Tối đa 1200 px (Blog / Sản phẩm)', // 'Max 1200px (Blog / Product)'
    max800: 'Tối đa 800 px (trong nội dung)', // 'Max 800px (In-Content)'
    max640: 'Tối đa 640 px (ảnh thu nhỏ)', // 'Max 640px (Thumbnails)'
    quality: 'Chất lượng:', // 'Quality:'
    onlyDownscale: 'Chỉ thu nhỏ ảnh lớn hơn (metadata EXIF & GPS được xóa tự động)', // 'Only downscale larger images (EXIF & GPS metadata automatically stripped)'
    optimizing: 'Đang tối ưu…', // 'Optimizing...'
    optimizeForWeb: 'Tối ưu cho web ({count})', // 'Optimize for Web ({items.length})'
    clear: 'Xóa', // 'Clear'
    webPerformanceSummary: 'Tóm tắt hiệu năng web', // 'Web Performance Summary'
    pageWeightSaved: '({percent}% nhẹ hơn · đã tiết kiệm {saved} trọng lượng trang)', // '({totalPct}% lighter · {formatBytes(totalSaved)} page weight saved)'
    pageWeightGrew: '(+{percent}% · tăng thêm {amount})', // '(+{totalPct}% · grew by {formatBytes})'
    creatingZip: 'Đang tạo ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Tải tất cả (ZIP)', // 'Download All (ZIP)'
    webReady: 'Sẵn sàng cho web ({percent})', // 'Web-Ready ({formatPercent})'
    grewBy: 'Tăng {amount} ({percent})', // 'Grew by {amount} ({formatPercent})'
    copyImg: 'Sao chép <img>', // 'Copy <img>'
    copiedHtml: 'Đã sao chép HTML', // 'Copied HTML'
    copyImgTitle: 'Sao chép thẻ HTML img đáp ứng với chiều rộng và chiều cao rõ ràng', // title 'Copy responsive HTML img tag with explicit width and height'
    errorOptimizationFailed: 'Không thể tối ưu web.', // 'Web optimization failed.'
    errorCorruptedFile: 'Ảnh bị hỏng hoặc không được hỗ trợ.', // 'Corrupted or unsupported image.'
    comparisonTitlePrefix: 'So sánh tối ưu web', // 'Web Optimization Comparison'
    comparisonAfterLabel: 'Sẵn sàng cho web (sau)', // 'Web-Ready (After)'
    compare: 'So sánh', // 'Compare'
    download: 'Tải xuống', // 'Download'
    removeImage: 'Xóa {name}', // aria-label `Remove ${item.name}`
  },
  '/gif-compressor': {
    uploadTitle: 'Thả GIF động vào đây để nén', // 'Drop an animated GIF to compress'
    decodingGif: 'Đang giải mã các khung hình GIF động ngay trên trình duyệt của bạn…', // 'Decoding animated GIF frames locally in your browser...'
    frameSingular: 'khung hình', // 'frame'
    framePlural: 'khung hình', // 'frames'
    presetLight: 'Nhẹ', // 'Light'
    presetBalanced: 'Cân bằng', // 'Balanced'
    presetMaxShrink: 'Giảm tối đa', // 'Max Shrink'
    colorPaletteLimit: 'Giới hạn màu bảng màu', // 'Color Palette Limit'
    colorsCount: '{count} màu', // '{maxColors} colors'
    outputScale: 'Tỷ lệ đầu ra', // 'Output Scale'
    scaleWithDims: '{percent}% ({width}×{height})', // '{scalePercent}% ({targetOutW}×{targetOutH})'
    frameRateOptimization: 'Tối ưu tốc độ khung hình', // 'Frame Rate Optimization'
    keepAllFrames: 'Giữ tất cả khung hình', // 'Keep All Frames'
    dropEvery2nd: 'Bỏ mỗi khung hình thứ 2 (~nhỏ hơn 50%)', // 'Drop Every 2nd Frame (~50% smaller)'
    keep1of3: 'Giữ 1 trong mỗi 3 khung hình', // 'Keep 1 of Every 3 Frames'
    compressingGif: 'Đang nén GIF ({progress}%)…', // 'Compressing GIF ({encodeProgress}%)...'
    compressGif: 'Nén GIF', // 'Compress GIF'
    reset: 'Đặt lại', // 'Reset'
    originalGif: 'GIF gốc', // 'Original GIF'
    compressedGif: 'GIF đã nén', // 'Compressed GIF'
    sizeChange: 'Thay đổi kích thước', // 'Size Change'
    sizeAndFrames: '{size} · {frames}f', // '{formatBytes(size)} · {frames}f'
    downloadCompressedGif: 'Tải GIF đã nén', // 'Download Compressed GIF'
    notSmallerNotice: 'GIF gốc này đã được tối ưu khá nhiều hoặc dùng bảng màu toàn khung lớn hơn đầu vào. Để thu nhỏ xuống dưới {size}, hãy giảm màu bảng màu xuống 32–64 màu, hạ tỷ lệ đầu ra xuống 75% hoặc 50%, hoặc bỏ mỗi khung hình thứ 2.', // 'This source GIF was already heavily optimized or uses a full-frame palette larger than the input. To shrink it below {size}, reduce Color Palette to 32–64 colors, lower Output Scale to 75% or 50%, or drop every 2nd frame.'
    compressedByNotice: 'Đã nén {percent}% (tiết kiệm {saved}) một cách sạch sẽ ngay trên trình duyệt của bạn.', // 'Compressed by {percent}% ({saved} saved) cleanly in your browser.'
    originalLabel: 'Gốc ({width}×{height} px)', // 'Original ({width}×{height}px)'
    compressedLabel: 'Đã nén ({width}×{height} px)', // 'Compressed ({width}×{height}px)'
    altOriginalGif: 'GIF gốc', // alt 'Original GIF'
    altCompressedGif: 'GIF đã nén', // alt 'Compressed GIF'
    errorGifFailed: 'Không thể nén GIF.', // 'GIF compression failed.'
    errorDecodeFrames: 'Không thể giải mã các khung hình GIF.', // 'Could not decode GIF frames.'
    errorTooSmall: 'Tệp quá nhỏ để là GIF hợp lệ.', // 'File is too small to be a valid GIF.'
    errorNotValidGif: 'Tệp đã chọn không phải ảnh động GIF87a hoặc GIF89a hợp lệ.', // 'Selected file is not a valid GIF87a or GIF89a animation.'
    errorInvalidDims: 'GIF có kích thước canvas 0×0 không hợp lệ.', // 'GIF has invalid 0x0 canvas dimensions.'
    errorTruncatedColorTable: 'Bảng màu toàn cục của GIF bị cắt ngắn.', // 'Truncated GIF Global Color Table.'
    errorNoFrames: 'Không thể giải mã khung hình ảnh nào từ tệp GIF này.', // 'Could not decode any image frames from this GIF file.'
    errorCanvasContext: 'Không thể khởi tạo ngữ cảnh canvas 2D.', // 'Unable to initialize 2D canvas context.'
  },
  '/heic-to-jpg': {
    uploadTitle: 'Thả ảnh HEIC hoặc HEIF từ iPhone vào đây để chuyển sang JPG', // 'Drop iPhone HEIC or HEIF photos to convert to JPG'
    notice: 'Giải mã ảnh HEIC và HEIF của Apple ngay trên trình duyệt của bạn bằng WebAssembly phía client (heic2any): ảnh của bạn không bao giờ rời khỏi thiết bị.', // 'Decodes Apple HEIC and HEIF photos locally inside your browser using client-side WebAssembly (heic2any) — your photos never leave your device.'
    conversionPipeline: 'Quy trình chuyển đổi:', // 'Conversion Pipeline:'
    outputQuality: 'Chất lượng đầu ra JPG', // 'JPG Output Quality'
    smallerFile: 'Tệp nhỏ hơn (20%)', // 'Smaller file (20%)'
    balanced: 'Cân bằng (85%)', // 'Balanced (85%)'
    maxDetail: 'Chi tiết tối đa (100%)', // 'Max detail (100%)'
    reconvertAll: 'Chuyển đổi lại tất cả', // 'Re-convert All'
    converting: 'Đang chuyển đổi…', // 'Converting...'
    clear: 'Xóa', // 'Clear'
    batchSummary: 'Tóm tắt lô HEIC → JPG', // 'HEIC → JPG Batch Summary'
    filesConverted: '{count} {files} đã chuyển đổi · {original} → {converted}', // '{count} {file/files} converted · {totalOrig} → {totalOut}'
    fileSingular: 'tệp', // 'file'
    filePlural: 'tệp', // 'files'
    creatingZip: 'Đang tạo ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Tải tất cả (ZIP)', // 'Download All (ZIP)'
    columnChange: 'Thay đổi', // 'Change'
    compare: 'So sánh', // 'Compare'
    downloadTarget: 'Tải JPG', // 'Download JPG'
    removeImage: 'Xóa {name}', // aria-label `Remove ${item.name}`
    errorDecodeHint: 'Không thể giải mã tệp HEIC/HEIF này. Hãy đảm bảo đó là ảnh HEIC hợp lệ từ iPhone hoặc Apple.', // 'Could not decode this HEIC/HEIF file. Ensure it is a valid iPhone/Apple HEIC photo.'
    errorDecodeFile: 'Không thể giải mã "{filename}". Hãy kiểm tra xem đó có phải ảnh HEIC hợp lệ không.', // 'Could not decode "{filename}". Verify it is a valid HEIC image.'
    errorConvertFailed: 'Không thể chuyển {name} sang JPG.', // `Failed to convert ${item.name} to JPG.`
    comparisonTitlePrefix: 'HEIC → JPG', // `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // `${targetLabel} (${formatBytes(compressedSize)})`
  },
  '/jpg-to-png': {
    uploadTitle: 'Thả ảnh JPG hoặc JPEG vào đây để chuyển sang PNG không mất dữ liệu', // 'Drop JPG or JPEG images to convert to lossless PNG'
    conversionPipeline: 'Quy trình chuyển đổi:', // 'Conversion Pipeline:'
    losslessPngOutput: 'Đầu ra PNG không mất dữ liệu', // 'Lossless PNG Output'
    losslessPngEncoding: 'Mã hóa PNG không mất dữ liệu', // 'Lossless PNG Encoding'
    losslessPngNote: 'PNG giữ các cạnh sắc nét, chữ và độ trong suốt alpha mà không có lỗi nén mất dữ liệu.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    reconvertAll: 'Chuyển đổi lại tất cả', // 'Re-convert All'
    converting: 'Đang chuyển đổi…', // 'Converting...'
    clear: 'Xóa', // 'Clear'
    batchSummary: 'Tóm tắt lô JPG → PNG', // 'JPG → PNG Batch Summary'
    filesConverted: '{count} {files} đã chuyển đổi · {original} → {converted}', // '{count} {file/files} converted · {totalOrig} → {totalOut}'
    fileSingular: 'tệp', // 'file'
    filePlural: 'tệp', // 'files'
    creatingZip: 'Đang tạo ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Tải tất cả (ZIP)', // 'Download All (ZIP)'
    columnChange: 'Thay đổi', // 'Change'
    compare: 'So sánh', // 'Compare'
    downloadTarget: 'Tải PNG', // 'Download PNG'
    removeImage: 'Xóa {name}', // aria-label `Remove ${item.name}`
    errorDecodeFile: 'Không thể giải mã "{filename}". Hãy kiểm tra xem đó có phải ảnh JPG hợp lệ không.', // 'Could not decode "{filename}". Verify it is a valid JPG image.'
    errorConvertFailed: 'Không thể chuyển {name} sang PNG.', // `Failed to convert ${item.name} to PNG.`
    comparisonTitlePrefix: 'JPG → PNG', // `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'PNG ({size})', // `${targetLabel} (${formatBytes(compressedSize)})`
  },
  '/png-to-jpg': {
    uploadTitle: 'Thả tệp PNG vào đây để chuyển sang JPG nhỏ hơn', // 'Drop PNG files to convert to smaller JPG'
    conversionPipeline: 'Quy trình chuyển đổi:', // 'Conversion Pipeline:'
    outputQuality: 'Chất lượng đầu ra JPG', // 'JPG Output Quality'
    smallerFile: 'Tệp nhỏ hơn (20%)', // 'Smaller file (20%)'
    balanced: 'Cân bằng (85%)', // 'Balanced (85%)'
    maxDetail: 'Chi tiết tối đa (100%)', // 'Max detail (100%)'
    transparentMatteColor: 'Màu nền cho nền trong suốt', // 'Transparent Background Matte Color'
    matteWhite: 'Trắng', // 'White'
    matteBlack: 'Đen', // 'Black'
    matteLightGray: 'Xám nhạt', // 'Light Gray'
    matteNote: 'JPG không hỗ trợ độ trong suốt; vùng trong suốt được lấp đầy gọn gàng bằng màu này.', // 'JPG does not support transparency; transparent areas fill cleanly with this color.'
    reconvertAll: 'Chuyển đổi lại tất cả', // 'Re-convert All'
    converting: 'Đang chuyển đổi…', // 'Converting...'
    clear: 'Xóa', // 'Clear'
    batchSummary: 'Tóm tắt lô PNG → JPG', // 'PNG → JPG Batch Summary'
    filesConverted: '{count} {files} đã chuyển đổi · {original} → {converted}', // '{count} {file/files} converted · {totalOrig} → {totalOut}'
    fileSingular: 'tệp', // 'file'
    filePlural: 'tệp', // 'files'
    creatingZip: 'Đang tạo ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Tải tất cả (ZIP)', // 'Download All (ZIP)'
    columnChange: 'Thay đổi', // 'Change'
    compare: 'So sánh', // 'Compare'
    downloadTarget: 'Tải JPG', // 'Download JPG'
    removeImage: 'Xóa {name}', // aria-label `Remove ${item.name}`
    errorDecodeFile: 'Không thể giải mã "{filename}". Hãy kiểm tra xem đó có phải ảnh PNG hợp lệ không.', // 'Could not decode "{filename}". Verify it is a valid PNG image.'
    errorConvertFailed: 'Không thể chuyển {name} sang JPG.', // `Failed to convert ${item.name} to JPG.`
    comparisonTitlePrefix: 'PNG → JPG', // `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // `${targetLabel} (${formatBytes(compressedSize)})`
  },
  '/jpg-to-webp': {
    uploadTitle: 'Thả ảnh JPG vào đây để chuyển sang WebP nhẹ', // 'Drop JPG images to convert to lightweight WebP'
    conversionPipeline: 'Quy trình chuyển đổi:', // 'Conversion Pipeline:'
    outputQualityLabel: 'Chất lượng đầu ra WebP', // 'WebP Output Quality'
    qualityAriaLabel: 'chất lượng đầu ra WebP', // aria-label 'WebP output quality'
    smallerFile: 'Tệp nhỏ hơn (20%)', // 'Smaller file (20%)'
    balanced: 'Cân bằng (85%)', // 'Balanced (85%)'
    maxDetail: 'Chi tiết tối đa (100%)', // 'Max detail (100%)'
    batchSummary: 'Tóm tắt lô {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'tệp', // 'file'
    filePlural: 'tệp', // 'files'
    filesConvertedSuffix: 'đã chuyển đổi', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'Đang tạo ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Tải tất cả (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Thay đổi', // 'Change'
    compare: 'So sánh', // 'Compare'
    downloadTarget: 'Tải WebP', // 'Download WebP'
    removeImage: 'Xóa {name}', // aria-label `Remove ${item.name}`
    converting: 'Đang chuyển đổi…', // 'Converting...'
    reconvertAll: 'Chuyển đổi lại tất cả', // 'Re-convert All'
    clear: 'Xóa', // 'Clear'
    comparisonTitlePrefix: 'JPG → WebP', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'WebP ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: 'Không thể chuyển {name} sang WebP.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'Không thể giải mã "{name}". Hãy kiểm tra xem đó có phải ảnh JPG hợp lệ không.', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/webp-to-jpg': {
    uploadTitle: 'Thả ảnh WebP vào đây để chuyển sang JPG phổ biến', // 'Drop WebP images to convert to universal JPG'
    conversionPipeline: 'Quy trình chuyển đổi:', // 'Conversion Pipeline:'
    outputQualityLabel: 'Chất lượng đầu ra JPG', // 'JPG Output Quality'
    qualityAriaLabel: 'chất lượng đầu ra JPG', // aria-label 'JPG output quality'
    smallerFile: 'Tệp nhỏ hơn (20%)', // 'Smaller file (20%)'
    balanced: 'Cân bằng (85%)', // 'Balanced (85%)'
    maxDetail: 'Chi tiết tối đa (100%)', // 'Max detail (100%)'
    matteColorLabel: 'Màu nền cho nền trong suốt', // 'Transparent Background Matte Color'
    matteAriaLabel: 'Màu nền mờ', // aria-label 'Matte background color'
    matteWhite: 'Trắng', // 'White'
    matteBlack: 'Đen', // 'Black'
    matteLightGray: 'Xám nhạt', // 'Light Gray'
    matteHint: 'JPG không hỗ trợ độ trong suốt; vùng trong suốt được lấp đầy gọn gàng bằng màu này.', // 'JPG does not support transparency; transparent areas fill cleanly with this color.'
    batchSummary: 'Tóm tắt lô {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'tệp', // 'file'
    filePlural: 'tệp', // 'files'
    filesConvertedSuffix: 'đã chuyển đổi', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'Đang tạo ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Tải tất cả (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Thay đổi', // 'Change'
    compare: 'So sánh', // 'Compare'
    downloadTarget: 'Tải JPG', // 'Download JPG'
    removeImage: 'Xóa {name}', // aria-label `Remove ${item.name}`
    converting: 'Đang chuyển đổi…', // 'Converting...'
    reconvertAll: 'Chuyển đổi lại tất cả', // 'Re-convert All'
    clear: 'Xóa', // 'Clear'
    comparisonTitlePrefix: 'WebP → JPG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: 'Không thể chuyển {name} sang JPG.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'Không thể giải mã "{name}". Hãy kiểm tra xem đó có phải ảnh WebP hợp lệ không.', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/png-to-webp': {
    uploadTitle: 'Thả tệp PNG vào đây để chuyển sang WebP trong suốt', // 'Drop PNG files to convert to transparent WebP'
    conversionPipeline: 'Quy trình chuyển đổi:', // 'Conversion Pipeline:'
    outputQualityLabel: 'Chất lượng đầu ra WebP', // 'WebP Output Quality'
    qualityAriaLabel: 'chất lượng đầu ra WebP', // aria-label 'WebP output quality'
    smallerFile: 'Tệp nhỏ hơn (20%)', // 'Smaller file (20%)'
    balanced: 'Cân bằng (85%)', // 'Balanced (85%)'
    maxDetail: 'Chi tiết tối đa (100%)', // 'Max detail (100%)'
    batchSummary: 'Tóm tắt lô {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'tệp', // 'file'
    filePlural: 'tệp', // 'files'
    filesConvertedSuffix: 'đã chuyển đổi', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'Đang tạo ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Tải tất cả (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Thay đổi', // 'Change'
    compare: 'So sánh', // 'Compare'
    downloadTarget: 'Tải WebP', // 'Download WebP'
    removeImage: 'Xóa {name}', // aria-label `Remove ${item.name}`
    converting: 'Đang chuyển đổi…', // 'Converting...'
    reconvertAll: 'Chuyển đổi lại tất cả', // 'Re-convert All'
    clear: 'Xóa', // 'Clear'
    comparisonTitlePrefix: 'PNG → WebP', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'WebP ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: 'Không thể chuyển {name} sang WebP.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'Không thể giải mã "{name}". Hãy kiểm tra xem đó có phải ảnh PNG hợp lệ không.', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/webp-to-png': {
    uploadTitle: 'Thả tệp WebP vào đây để chuyển sang PNG không mất dữ liệu', // 'Drop WebP files to convert to lossless PNG'
    conversionPipeline: 'Quy trình chuyển đổi:', // 'Conversion Pipeline:'
    losslessPngOutput: 'Đầu ra PNG không mất dữ liệu', // 'Lossless PNG Output'
    losslessPngEncodingTitle: 'Mã hóa PNG không mất dữ liệu', // 'Lossless PNG Encoding'
    losslessPngEncodingDesc: 'PNG giữ các cạnh sắc nét, chữ và độ trong suốt alpha mà không có lỗi nén mất dữ liệu.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    batchSummary: 'Tóm tắt lô {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'tệp', // 'file'
    filePlural: 'tệp', // 'files'
    filesConvertedSuffix: 'đã chuyển đổi', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'Đang tạo ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Tải tất cả (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Thay đổi', // 'Change'
    compare: 'So sánh', // 'Compare'
    downloadTarget: 'Tải PNG', // 'Download PNG'
    removeImage: 'Xóa {name}', // aria-label `Remove ${item.name}`
    converting: 'Đang chuyển đổi…', // 'Converting...'
    reconvertAll: 'Chuyển đổi lại tất cả', // 'Re-convert All'
    clear: 'Xóa', // 'Clear'
    comparisonTitlePrefix: 'WebP → PNG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'PNG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: 'Không thể chuyển {name} sang PNG.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'Không thể giải mã "{name}". Hãy kiểm tra xem đó có phải ảnh WebP hợp lệ không.', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/svg-to-png': {
    uploadTitle: 'Thả tệp vector SVG vào đây để chuyển thành ảnh PNG', // 'Drop SVG vector files to rasterize to PNG'
    notice:
      'Chuyển đồ họa SVG nội tuyến thành ảnh raster ngay trên thiết bị bằng HTML5 Canvas và giữ nền trong suốt. Hạn chế: URL <image> bên ngoài, stylesheet CSS bên ngoài / webfont, hoặc script được tham chiếu trong SVG có thể không hiển thị trong bản xuất Canvas độc lập.', // 'Rasterizes inline SVG graphics locally via HTML5 Canvas with transparent backgrounds preserved. Limitation: external <image> URLs, external CSS stylesheets/webfonts, or scripts referenced inside an SVG may not render in standalone Canvas export.'
    conversionPipeline: 'Quy trình chuyển đổi:', // 'Conversion Pipeline:'
    losslessPngOutput: 'Đầu ra PNG không mất dữ liệu', // 'Lossless PNG Output'
    losslessPngEncodingTitle: 'Mã hóa PNG không mất dữ liệu', // 'Lossless PNG Encoding'
    losslessPngEncodingDesc: 'PNG giữ các cạnh sắc nét, chữ và độ trong suốt alpha mà không có lỗi nén mất dữ liệu.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    rasterExportScale: 'Tỷ lệ xuất raster', // 'Raster Export Scale'
    rasterExportScaleHint: 'Hệ số nhân áp dụng cho kích thước nội tại của SVG (giới hạn 8000 px). Nhấn Chuyển đổi lại tất cả sau khi đổi tỷ lệ.', // 'Multiplier applied to the SVG's intrinsic dimensions (capped at 8000px). Click Re-convert All after changing scale.'
    batchSummary: 'Tóm tắt lô {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'tệp', // 'file'
    filePlural: 'tệp', // 'files'
    filesConvertedSuffix: 'đã chuyển đổi', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'Đang tạo ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Tải tất cả (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Thay đổi', // 'Change'
    compare: 'So sánh', // 'Compare'
    downloadTarget: 'Tải PNG', // 'Download PNG'
    removeImage: 'Xóa {name}', // aria-label `Remove ${item.name}`
    converting: 'Đang chuyển đổi…', // 'Converting...'
    reconvertAll: 'Chuyển đổi lại tất cả', // 'Re-convert All'
    clear: 'Xóa', // 'Clear'
    comparisonTitlePrefix: 'SVG → PNG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'PNG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: 'Không thể chuyển {name} sang PNG.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'Không thể chuyển SVG này thành ảnh raster. Hãy đảm bảo tệp là mã SVG XML hợp lệ, không có lỗi cú pháp.', // decodeErrorHint 'Could not rasterize this SVG. Ensure the file is valid XML SVG markup without malformed syntax.'
  },
  '/avif-to-jpg': {
    uploadTitle: 'Thả ảnh AVIF vào đây để chuyển sang JPG phổ biến', // 'Drop AVIF images to convert to universal JPG'
    notice:
      'Giải mã ảnh AVIF ngay trên thiết bị bằng bộ giải mã AVIF gốc của trình duyệt (hỗ trợ trên Chrome, Edge, Firefox và Safari hiện đại) và xuất tệp JPG chuẩn.', // 'Decodes AVIF images locally using your browser’s native AVIF decoder (supported in modern Chrome, Edge, Firefox, and Safari) and exports standard JPG files.'
    conversionPipeline: 'Quy trình chuyển đổi:', // 'Conversion Pipeline:'
    outputQualityLabel: 'Chất lượng đầu ra JPG', // 'JPG Output Quality'
    qualityAriaLabel: 'chất lượng đầu ra JPG', // aria-label 'JPG output quality'
    smallerFile: 'Tệp nhỏ hơn (20%)', // 'Smaller file (20%)'
    balanced: 'Cân bằng (85%)', // 'Balanced (85%)'
    maxDetail: 'Chi tiết tối đa (100%)', // 'Max detail (100%)'
    matteColorLabel: 'Màu nền cho nền trong suốt', // 'Transparent Background Matte Color'
    matteAriaLabel: 'Màu nền mờ', // aria-label 'Matte background color'
    matteWhite: 'Trắng', // 'White'
    matteBlack: 'Đen', // 'Black'
    matteLightGray: 'Xám nhạt', // 'Light Gray'
    matteHint: 'JPG không hỗ trợ độ trong suốt; vùng trong suốt được lấp đầy gọn gàng bằng màu này.', // 'JPG does not support transparency; transparent areas fill cleanly with this color.'
    batchSummary: 'Tóm tắt lô {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'tệp', // 'file'
    filePlural: 'tệp', // 'files'
    filesConvertedSuffix: 'đã chuyển đổi', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'Đang tạo ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Tải tất cả (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Thay đổi', // 'Change'
    compare: 'So sánh', // 'Compare'
    downloadTarget: 'Tải JPG', // 'Download JPG'
    removeImage: 'Xóa {name}', // aria-label `Remove ${item.name}`
    converting: 'Đang chuyển đổi…', // 'Converting...'
    reconvertAll: 'Chuyển đổi lại tất cả', // 'Re-convert All'
    clear: 'Xóa', // 'Clear'
    comparisonTitlePrefix: 'AVIF → JPG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: 'Không thể chuyển {name} sang JPG.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'Trình duyệt của bạn không thể giải mã ảnh AVIF này. Hãy kiểm tra tệp có phải ảnh .avif hợp lệ không và thử trình duyệt Chrome, Firefox, Edge hoặc Safari hiện đại.', // decodeErrorHint 'Your browser could not decode this AVIF image. Verify the file is a valid .avif image and try a modern Chrome, Firefox, Edge, or Safari browser.'
  },
  '/bmp-to-jpg': {
    uploadTitle: 'Thả bitmap BMP chưa nén vào đây để chuyển sang JPG gọn nhẹ', // 'Drop uncompressed BMP bitmaps to convert to compact JPG'
    conversionPipeline: 'Quy trình chuyển đổi:', // 'Conversion Pipeline:'
    outputQualityLabel: 'Chất lượng đầu ra JPG', // 'JPG Output Quality'
    qualityAriaLabel: 'chất lượng đầu ra JPG', // aria-label 'JPG output quality'
    smallerFile: 'Tệp nhỏ hơn (20%)', // 'Smaller file (20%)'
    balanced: 'Cân bằng (85%)', // 'Balanced (85%)'
    maxDetail: 'Chi tiết tối đa (100%)', // 'Max detail (100%)'
    batchSummary: 'Tóm tắt lô {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'tệp', // 'file'
    filePlural: 'tệp', // 'files'
    filesConvertedSuffix: 'đã chuyển đổi', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'Đang tạo ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Tải tất cả (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Thay đổi', // 'Change'
    compare: 'So sánh', // 'Compare'
    downloadTarget: 'Tải JPG', // 'Download JPG'
    removeImage: 'Xóa {name}', // aria-label `Remove ${item.name}`
    converting: 'Đang chuyển đổi…', // 'Converting...'
    reconvertAll: 'Chuyển đổi lại tất cả', // 'Re-convert All'
    clear: 'Xóa', // 'Clear'
    comparisonTitlePrefix: 'BMP → JPG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: 'Không thể chuyển {name} sang JPG.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'Không thể giải mã "{name}". Hãy kiểm tra xem đó có phải ảnh BMP hợp lệ không.', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
} as const;
