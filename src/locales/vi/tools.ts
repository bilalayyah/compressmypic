// Vietnamese tool registry — COMPLETE (home + all 47 tools).
// Assembled from tools-part1.ts + tools-part2.ts (coordinator merge).
// Properly written Vietnamese (full diacritics), SEO-optimised for what Vietnamese speakers
// actually search. Slugs, category ids and relatedSlugs are unchanged from
// the English registry (src/data/tools.ts).

import type { ToolDefinition, ToolCategoryMeta } from '../../data/tools';

export const TOOL_CATEGORIES_VI: ToolCategoryMeta[] = [
  { id: 'compress', label: 'Nén ảnh', description: 'Giảm dung lượng file ảnh mà không làm mất chất lượng nhìn thấy được' },
  { id: 'resize', label: 'Đổi kích thước', description: 'Thay đổi kích thước theo pixel hoặc mở rộng nhiều ảnh cùng lúc' },
  { id: 'convert', label: 'Chuyển đổi', description: 'Đổi định dạng ảnh và tạo PDF' },
  { id: 'crop-edit', label: 'Cắt và chỉnh sửa', description: 'Xoay, lật, cắt và điều chỉnh ảnh' },
  { id: 'create', label: 'Tạo', description: 'Tạo favicon, ảnh ghép và tài nguyên cho web' },
  { id: 'privacy', label: 'Công cụ riêng tư', description: 'Xem và xóa EXIF, GPS và metadata ẩn' },
  { id: 'developer', label: 'Công cụ lập trình viên', description: 'Chọn màu, kiểm tra kích thước và tạo tài nguyên web' },
];

export const TOOLS_REGISTRY_VI: ToolDefinition[] = [

  {
    slug: '/',
    name: 'Nén Ảnh',
    shortDescription: 'Nén ảnh JPG, PNG, WebP và HEIC mà không giảm chất lượng.',
    category: 'compress',
    seoTitle: 'Nén Ảnh Miễn Phí – Giảm Dung Lượng Ảnh Online',
    seoDescription: 'Nén ảnh online miễn phí, giảm dung lượng JPG, PNG và WebP mà không mất chất lượng. Không cần đăng ký, không watermark — ảnh của bạn không bao giờ rời khỏi trình duyệt.',
    h1: 'Nén Ảnh Miễn Phí – Giảm Dung Lượng Ảnh Online',
    subtitle: 'Giảm dung lượng file JPG, PNG, WebP và HEIC ngay trong trình duyệt của bạn.',
    howToSteps: [],
    features: [],
    faqs: [],
    relatedSlugs: ['/image-resizer', '/image-converter', '/remove-image-metadata'],
  },
  {
    slug: '/image-resizer',
    name: 'Đổi Kích Thước Ảnh',
    shortDescription: 'Đổi kích thước ảnh theo pixel chính xác, theo phần trăm hoặc theo mẫu mạng xã hội.',
    category: 'resize',
    seoTitle: 'Đổi Kích Thước Ảnh Online Miễn Phí – Theo Pixel Hoặc %',
    seoDescription: 'Đổi kích thước ảnh online miễn phí theo pixel chính xác, theo phần trăm hoặc theo mẫu mạng xã hội. Xử lý hàng loạt ngay trong trình duyệt và tải về dạng ZIP.',
    h1: 'Đổi Kích Thước Ảnh Online Miễn Phí',
    subtitle:
      'Công cụ đổi kích thước ảnh chạy ngay trong trình duyệt giúp nhà thiết kế web, người bán hàng online, blogger và người dùng phổ thông chỉnh ảnh về đúng kích thước pixel hoặc tỉ lệ phần trăm chỉ trong vài giây. Khóa tỉ lệ khung hình để tránh méo ảnh, áp dụng mẫu mạng xã hội chỉ với một cú nhấp chuột, hoặc xử lý cả thư mục ảnh ngay trên máy mà không tải lên bất kỳ máy chủ nào.',
    howToSteps: [
      {
        title: 'Tải lên một hoặc nhiều ảnh',
        description:
          'Kéo thả file JPG, PNG, WebP, HEIC, GIF, BMP hoặc SVG tối đa 20 MB mỗi file vào vùng tải lên, chọn file từ thiết bị, hoặc dán trực tiếp bằng Ctrl+V.',
      },
      {
        title: 'Chọn chế độ Theo Pixel hoặc Theo Phần Trăm',
        description:
          'Chuyển giữa Theo Pixel (Rộng × Cao) để nhập kích thước chính xác tối đa 12.000 px, hoặc Theo Phần Trăm (%) để thu phóng từ 10% đến 200% bằng thanh trượt hoặc các nút nhanh.',
      },
      {
        title: 'Cài đặt khóa tỉ lệ, chế độ vừa khung hoặc mẫu có sẵn',
        description:
          'Giữ khóa tỉ lệ để thu phóng cân đối không méo hình, hoặc mở khóa để chọn Vừa Khít, Phủ Đầy hoặc Kéo Giãn Chính Xác; bạn cũng có thể bấm một mẫu như Bài Đăng Instagram, Ảnh Bìa YouTube hoặc Full HD.',
      },
      {
        title: 'Chọn định dạng xuất và chất lượng',
        description:
          'Chọn định dạng xuất Gốc, JPG, PNG hoặc WebP, chỉnh thanh trượt Chất Lượng Xuất từ 10% đến 100%, và chọn màu nền lót nếu xuất ra JPG.',
      },
      {
        title: 'Áp dụng cài đặt và so sánh trực quan',
        description:
          'Bấm Đổi Kích Thước Tất Cả để xử lý cả loạt ảnh, rồi mở chế độ So Sánh trên bất kỳ thẻ nào để kiểm tra độ nét và dung lượng tiết kiệm được trước và sau, đặt cạnh nhau.',
      },
      {
        title: 'Tải từng file riêng lẻ hoặc tải cả file ZIP',
        description:
          'Lưu từng ảnh đã đổi kích thước bằng nút Tải Xuống, hoặc bấm Tải Tất Cả (ZIP) khi đổi kích thước từ hai file trở lên cùng lúc.',
      },
    ],
    features: [
      {
        title: 'Pixel chính xác và thu phóng theo phần trăm',
        description:
          'Đổi kích thước theo chiều rộng và chiều cao pixel chính xác, hoặc thu phóng mượt mà từ 10% đến 200%, tự động giữ nguyên tỉ lệ khi đang khóa.',
      },
      {
        title: 'Chế độ vừa khung thông minh (Chính Xác, Vừa Khít, Phủ Đầy)',
        description:
          'Chọn cách ảnh vừa vào kích thước cố định: kéo giãn đúng kích thước, vừa bên trong không cắt, hoặc cắt giữa để lấp đầy.',
      },
      {
        title: 'Đổi kích thước hàng loạt và tải về ZIP',
        description:
          'Xử lý hàng chục ảnh sản phẩm hoặc ảnh bìa blog trong một lượt và tải tất cả về trong một file ZIP duy nhất.',
      },
      {
        title: 'Xử lý 100% ngay trên trình duyệt',
        description:
          'Ảnh của bạn được đổi kích thước bằng HTML5 Canvas ngay trên thiết bị của bạn và không bao giờ tải lên bất kỳ máy chủ ngoài nào.',
      },
    ],
    faqs: [
      {
        question: 'Chế độ Theo Pixel khác gì với Theo Phần Trăm trong công cụ đổi kích thước ảnh?',
        answer:
          'Theo Pixel cho phép bạn nhập chiều rộng và chiều cao chính xác theo pixel (tối đa 12.000 px) hoặc áp dụng mẫu mạng xã hội trực tiếp. Theo Phần Trăm thu phóng mọi ảnh đã tải lên theo tỉ lệ từ 10% đến 200% bằng thanh trượt hoặc các nút nhanh 25%, 50%, 75%, 150% và 200%.',
      },
      {
        question: 'Bật hoặc tắt Khóa Tỉ Lệ Khung Hình thì có gì thay đổi?',
        answer:
          'Khi Khóa Tỉ Lệ được bật, nhập chiều rộng mới sẽ tự động cập nhật chiều cao theo đúng tỉ lệ của ảnh đầu tiên bạn tải lên (và ngược lại). Khi mở khóa, bạn có thể nhập chiều rộng và chiều cao độc lập và sẽ thấy thêm các tùy chọn vừa khung Vừa Khít, Phủ Đầy và Kéo Giãn Chính Xác.',
      },
      {
        question: 'Khi nào nên chọn Vừa Khít, Phủ Đầy hoặc Kéo Giãn Chính Xác?',
        answer:
          'Chọn Vừa Khít (Không Cắt) khi bạn muốn giữ toàn bộ chủ thể trong khung đích mà không cắt bất kỳ cạnh nào. Chọn Phủ Đầy (Cắt Giữa) để lấp đầy kích thước cố định bằng cách cắt phần thừa, hoặc Kéo Giãn Chính Xác nếu việc khớp đúng giới hạn pixel quan trọng hơn việc giữ tỉ lệ.',
      },
      {
        question: 'Công cụ có những mẫu mạng xã hội và màn hình nào?',
        answer:
          'Có các mẫu một cú nhấp chuột cho Bài Đăng Instagram (1080×1080), Tin Instagram (1080×1920), Ảnh Bìa YouTube (1280×720), Ảnh Bìa Facebook (851×315), Ảnh Bìa X (1500×500) và Full HD (1920×1080). Bấm bất kỳ mẫu nào sẽ chuyển sang chế độ Theo Pixel và điền sẵn các kích thước chính xác đó.',
      },
      {
        question: 'Tôi có thể phóng to một ảnh nhỏ vượt quá độ phân giải gốc không?',
        answer:
          'Có, bạn có thể nhập giá trị pixel lớn hơn hoặc thu phóng lên đến 200% ở chế độ Theo Phần Trăm bằng phép nội suy của HTML5 Canvas. Lưu ý rằng phóng to ảnh độ phân giải thấp quá nhiều sẽ làm các cạnh trông mềm hơn vì Canvas chỉ kéo giãn các pixel sẵn có chứ không tạo thêm chi tiết mới.',
      },
      {
        question: 'Kích thước pixel và dung lượng file tối đa khi đổi kích thước là bao nhiêu?',
        answer:
          'Mỗi ảnh tải lên tối đa 20 MB, và ô nhập pixel hỗ trợ chiều rộng và chiều cao tối đa 12.000 px. Canvas rất lớn có thể tốn nhiều RAM trình duyệt trên điện thoại, vì vậy giữ trong khoảng 4.000–6.000 px sẽ giúp xử lý nhanh.',
      },
      {
        question: 'Công cụ đổi kích thước ảnh hỗ trợ những định dạng đầu vào nào?',
        answer:
          'Bạn có thể tải lên file JPG, PNG, WebP, HEIC/HEIF của iPhone, GIF, BMP và SVG. Ảnh HEIC được giải mã ngay trong trình duyệt trước khi đổi kích thước bằng Canvas, và bạn có thể xuất kết quả dưới dạng Gốc, JPG, PNG hoặc WebP.',
      },
      {
        question: 'Đổi kích thước có giữ nền trong suốt của PNG và WebP không?',
        answer:
          'Có, độ trong suốt được giữ nguyên khi bạn giữ định dạng Gốc (đối với PNG/WebP) hoặc chọn rõ định dạng xuất PNG hoặc WebP. Nếu chuyển Định Dạng Xuất sang JPG, các vùng trong suốt sẽ được lấp bằng màu nền lót bạn đã chọn (mặc định là trắng).',
      },
      {
        question: 'Đổi kích thước hàng loạt xử lý ảnh ngang và ảnh dọc lẫn lộn như thế nào?',
        answer:
          'Khi bạn tải lên một loạt ảnh ở chế độ Theo Pixel với Khóa Tỉ Lệ, mỗi ảnh giữ tỉ lệ tự nhiên của riêng nó theo giới hạn chiều rộng thay vì bị bóp méo từ dọc thành ngang. Nếu muốn mọi ảnh có kích thước cố định giống hệt nhau, hãy mở khóa tỉ lệ và chọn Vừa Khít hoặc Phủ Đầy.',
      },
      {
        question: 'Tại sao lần tải lên đầu tiên lại tự điền sẵn Chiều Rộng và Chiều Cao?',
        answer:
          'Khi bạn thả ảnh đầu tiên vào hàng đợi còn trống, công cụ sẽ đặt sẵn Chiều Rộng tối đa 1.200 px và tính Chiều Cao tương ứng theo tỉ lệ. Bạn có thể ghi đè các con số này ngay lập tức và bấm Đổi Kích Thước Tất Cả để chạy lại mọi ảnh trong danh sách.',
      },
      {
        question: 'Làm sao kiểm tra độ nét sau khi thu nhỏ ảnh?',
        answer:
          'Bấm So Sánh trên bất kỳ thẻ kết quả nào hoặc bấm vào ảnh thu nhỏ để mở cửa sổ so sánh trước và sau. Cửa sổ hiển thị kích thước gốc và sau khi đổi, dung lượng tiết kiệm được, và thanh trượt chia đôi để bạn kiểm tra chi tiết trước khi tải về.',
      },
      {
        question: 'Tôi có thể đổi định dạng xuất và đổi kích thước cùng lúc không?',
        answer:
          'Có, bạn có thể chọn JPG, PNG hoặc WebP trong mục Định Dạng Xuất và chỉnh thanh trượt Chất Lượng Xuất (10% đến 100%) trước khi bấm Đổi Kích Thước Tất Cả. Như vậy bạn vừa thu nhỏ kích thước vừa chuyển sang định dạng web nhẹ trong một lần duy nhất.',
      },
      {
        question: 'Ảnh GIF động có còn chuyển động sau khi đổi kích thước không?',
        answer:
          'Không, HTML5 Canvas chỉ vẽ khung hình đầu tiên của GIF khi đổi kích thước sang kích thước tĩnh và xuất ra một ảnh đơn. Nếu muốn giữ chuyển động mà vẫn giảm dung lượng, hãy dùng công cụ Nén GIF chuyên dụng của chúng tôi.',
      },
      {
        question: 'Ảnh của tôi có bị tải lên máy chủ ngoài khi đổi kích thước không?',
        answer:
          'Không, mọi thao tác đổi kích thước diễn ra ngay trong tab trình duyệt của bạn bằng bộ nhớ HTML5 Canvas và JavaScript. Ảnh gốc và ảnh đã đổi kích thước không bao giờ đi qua mạng hay chạm tới bất kỳ bộ nhớ từ xa nào.',
      },
      {
        question: 'Làm sao tải hàng chục ảnh đã đổi kích thước mà không bấm từng cái một?',
        answer:
          'Khi có từ hai ảnh trở lên hoàn thành đổi kích thước, một thanh Lô Đã Sẵn Sàng sẽ xuất hiện phía trên danh sách với nút Tải Tất Cả (ZIP). Bấm vào đó để gói mọi ảnh đã đổi kích thước vào một file tải xuống duy nhất là resized_images_compressmypic.zip.',
      },
      {
        question: 'Tôi có thể dán ảnh chụp màn hình từ clipboard để đổi kích thước không?',
        answer:
          'Có, nhấn Ctrl+V (hoặc Cmd+V trên máy Mac) ngay trên trang để thả ảnh chụp màn hình đã sao chép trực tiếp vào hàng đợi tải lên. Ảnh sẽ lập tức nhận kích thước và đổi theo cài đặt chiều rộng, chiều cao hoặc phần trăm hiện tại của bạn.',
      },
      {
        question: 'Tại sao ảnh PNG sau khi đổi kích thước lại nặng hơn dù số pixel đã nhỏ đi?',
        answer:
          'Nếu bạn chuyển một ảnh JPG đã nén thành PNG không mất dữ liệu trong khi đổi kích thước, PNG giữ mã hóa pixel không mất dữ liệu nên có thể nặng hơn file JPEG gốc. Hãy chuyển Định Dạng Xuất sang WebP hoặc JPG ở chất lượng 80%–85% để có file web nhỏ hơn nhiều.',
      },
      {
        question: 'Mức chất lượng nào tốt nhất khi xuất ảnh JPG hoặc WebP đã đổi kích thước?',
        answer:
          'Mức mặc định 85% cân bằng giữa cạnh sắc nét, chuyển màu mượt và dung lượng file nhỏ cho website, bài blog và sàn thương mại. Giảm xuống khoảng 65%–75% nếu cần tiết kiệm kilobyte chặt hơn, hoặc tăng lên 95%–100% để chuẩn bị in ấn.',
      },
      {
        question: 'Tôi có thể đổi kích thước ảnh vector SVG thành PNG độ phân giải cao một cách sắc nét không?',
        answer:
          'Có, tải lên file SVG độc lập cho phép bạn nhập kích thước pixel đích lớn hơn trước khi raster hóa lên Canvas. SVG tự chứa các hình và chuyển màu nội tuyến sẽ phóng to sắc nét, tuy nhiên các font chữ hoặc ảnh liên kết ngoài bên trong SVG sẽ bị trình duyệt chặn vì lý do bảo mật.',
      },
      {
        question: 'Công cụ đổi kích thước ảnh có hoạt động ngoại tuyến hoặc trên điện thoại không?',
        answer:
          'Có, công cụ chạy mượt trên Safari iOS, Chrome Android và trình duyệt máy tính với thanh trượt và mẫu thân thiện với cảm ứng. Vì mọi tính toán chạy ngay trong trình duyệt sau khi trang đã tải, tốc độ không bị giới hạn bởi tốc độ tải lên.',
      },
    ],
    relatedSlugs: ['/', '/image-converter', '/rotate-flip-image', '/image-dimensions-checker'],
  },
  {
    slug: '/image-converter',
    name: 'Chuyển Đổi Ảnh',
    shortDescription: 'Chuyển đổi JPG, PNG, WebP, HEIC, BMP, GIF và SVG ngay trong trình duyệt.',
    category: 'convert',
    seoTitle: 'Chuyển Đổi Ảnh Online Miễn Phí – JPG, PNG, WebP, HEIC',
    seoDescription: 'Chuyển đổi từng ảnh một cách chính xác: JPG, PNG, WebP, HEIC, SVG, BMP, GIF và AVIF ngay trong trình duyệt. Kiểm tra kết quả trước khi lưu, riêng tư trên thiết bị của bạn.',
    h1: 'Chuyển Đổi Ảnh Online Miễn Phí',
    subtitle:
      'Được tạo ra cho từng lần chuyển đổi lẻ — một ảnh cho email, một logo cho bài thuyết trình, một ảnh chụp màn hình cho ticket hỗ trợ — công cụ chuyển đổi ảnh chính xác này chuyển từng file một giữa JPG, PNG, WebP, HEIC, SVG, BMP, GIF và AVIF. Chỉnh chất lượng xuất, chọn màu lót cho vùng trong suốt, và chuyển đổi ngay trên máy mà không cần tải file lên. Với cả thư mục ảnh và thư viện tài nguyên, hãy dùng công cụ Chuyển Đổi Ảnh Hàng Loạt.',
    howToSteps: [
      {
        title: 'Thêm một ảnh — hoặc chỉ vài ảnh — để chuyển đổi chính xác',
        description:
          'Thả một ảnh JPG, PNG, WebP, HEIC, SVG, BMP, GIF hoặc AVIF (tối đa 20 MB) vào vùng tải lên, chọn từ ổ đĩa, hoặc dán bằng Ctrl+V. Chuyển từng file một giúp chế độ so sánh tập trung đúng vào ảnh đó.',
      },
      {
        title: 'Chọn định dạng xuất',
        description:
          'Chọn WebP (Nhỏ Nhất Cho Web), JPG (Phổ Biến Nhất) hoặc PNG (Không Mất Dữ Liệu, Giữ Trong Suốt) trong mục Chuyển Sang Định Dạng.',
      },
      {
        title: 'Đặt màu lót trong suốt khi xuất JPG',
        description:
          'Khi chuyển ảnh PNG, WebP hoặc SVG trong suốt sang JPG, bấm vào ô chọn Màu Lót Trong Suốt để chọn nền trắng, đen hoặc bất kỳ mã hex nào.',
      },
      {
        title: 'Chỉnh thanh trượt chất lượng nếu cần',
        description:
          'Kéo thanh trượt Chất Lượng từ 10% đến 100% cho định dạng WebP hoặc JPG (thanh trượt tự tắt khi chọn PNG không mất dữ liệu).',
      },
      {
        title: 'Chuyển đổi và kiểm tra kết quả này',
        description:
          'Bấm Chuyển Đổi Tất Cả để mã hóa lại file với cài đặt mới, rồi bấm So Sánh trên thẻ đó để kiểm tra độ trung thực hình ảnh và mức thay đổi dung lượng trước khi lưu.',
      },
      {
        title: 'Tải file đơn — không cần ZIP',
        description:
          'Lưu file đã chuyển đổi bằng nút Tải Xuống của nó. File ZIP chỉ xuất hiện khi bạn chuyển đổi từ hai file trở lên cùng lúc.',
      },
    ],
    features: [
      {
        title: 'Hỗ trợ nhiều định dạng đầu vào',
        description:
          'Chuyển đổi ảnh HEIC/HEIF của iPhone, đồ họa vector SVG sắc nét, file BMP cũ, ảnh WebP, PNG và JPEG ngay trong trình duyệt.',
      },
      {
        title: 'Chuyển đổi an toàn với vùng trong suốt',
        description:
          'Giữ nguyên độ trong suốt alpha khi chuyển sang PNG hoặc WebP, và cho phép tùy chỉnh màu nền lót khi chuyển sang JPG.',
      },
      {
        title: 'Chuyển đổi từng file chính xác',
        description:
          'Chuyển đổi từng ảnh một với kiểm soát chất lượng riêng cho từng file và chế độ so sánh cạnh nhau, hoặc thêm vài file nữa khi một nhóm nhỏ cần cùng cách xử lý.',
      },
      {
        title: 'Engine xử lý phía client riêng tư',
        description:
          'Ngay cả việc giải mã HEIC cũng chạy ngay trên máy qua WebAssembly trong trình duyệt của bạn — không tải lên máy chủ, không watermark.',
      },
    ],
    faqs: [
      {
        question: 'Công cụ chuyển đổi ảnh này hỗ trợ định dạng đầu vào và đầu ra nào?',
        answer:
          'Bạn có thể đưa vào file JPG, PNG, WebP, HEIC/HEIF của iPhone, SVG, BMP, GIF và AVIF được trình duyệt giải mã, tối đa 20 MB mỗi ảnh. Đầu ra xuất sạch dưới dạng WebP (Nhỏ Nhất Cho Web), JPG (Phổ Biến Nhất) hoặc PNG (Không Mất Dữ Liệu, Giữ Trong Suốt).',
      },
      {
        question: 'Ảnh HEIC và HEIF của iPhone được chuyển đổi như thế nào mà không cần máy chủ?',
        answer:
          'Công cụ tải một bộ giải mã HEIC WebAssembly phía client trực tiếp vào tab trình duyệt của bạn. Nó giải mã file HEIC ngay trên CPU của máy bạn và vẽ ảnh lên HTML5 Canvas để xuất thành file JPG, PNG hoặc WebP chuẩn.',
      },
      {
        question: 'Tại sao thanh trượt Chất Lượng bị tắt khi chọn PNG?',
        answer:
          'PNG dùng nén không mất dữ liệu DEFLATE, nghĩa là nó mã hóa mọi pixel chính xác mà không loại bỏ chi tiết hình ảnh ở một mức chất lượng phần trăm nào. Thanh trượt sẽ hoạt động trở lại ngay khi bạn chuyển sang WebP hoặc JPG.',
      },
      {
        question: 'Vùng trong suốt sẽ ra sao khi chuyển PNG hoặc WebP sang JPG?',
        answer:
          'Vì JPG không hỗ trợ kênh trong suốt alpha, các pixel trong suốt phải được làm phẳng lên một nền đặc. Hãy dùng bộ chọn Màu Lót Trong Suốt (mặc định là trắng) để hòa các cạnh trong suốt lên bất kỳ màu nào một cách mượt mà.',
      },
      {
        question: 'Tôi có thể chuyển ảnh AVIF lưu từ các website hiện đại sang JPG hoặc PNG không?',
        answer:
          'Có, các phiên bản hiện đại của Chrome, Edge, Firefox và Safari giải mã file AVIF trực tiếp trong trình duyệt của bạn. Sau khi giải mã, công cụ xuất chúng thành JPG, PNG hoặc WebP phổ biến mà không cần dịch vụ đám mây ngoài.',
      },
      {
        question: 'Logo vector SVG có được giữ sắc nét khi chuyển sang PNG hoặc WebP không?',
        answer:
          'Có, file SVG tự chứa với đường path, màu tô và chuyển màu nội tuyến sẽ raster hóa sạch ở kích thước gốc với nền trong suốt được giữ nguyên. Lưu ý rằng SVG dựa vào font web ngoài hoặc URL ảnh từ xa sẽ bị giới hạn bởi bảo mật Canvas của trình duyệt.',
      },
      {
        question: 'Chuyển ảnh JPG đã nén thành PNG có khôi phục lại chi tiết ảnh đã mất không?',
        answer:
          'Không, lưu lại một ảnh JPG đã nén thành PNG không thể khôi phục chi tiết đã bị loại bỏ trong lần mã hóa JPEG gốc, và thường làm tăng dung lượng file đáng kể. Chỉ chọn PNG khi bạn cần lưu trữ không mất dữ liệu trước khi chỉnh sửa nhiều bước.',
      },
      {
        question: 'Làm sao chuyển chỉ một ảnh cho file đính kèm email?',
        answer:
          'Thả ảnh đơn vào công cụ chuyển đổi, chọn JPG (Phổ Biến Nhất) để tương thích tối đa với các ứng dụng email, và đặt chất lượng khoảng 80% để file đính kèm nhẹ. Bấm Chuyển Đổi, kiểm tra dung lượng trên thẻ, và tải file .jpg đơn — không ZIP, không hàng loạt, không file thừa phải sắp xếp.',
      },
      {
        question: 'Tôi có thể chuyển một file trước để thử chất lượng rồi mới làm phần còn lại không?',
        answer:
          'Có. Chuyển một file đại diện, mở So Sánh để kiểm tra cạnh và chữ ở chất lượng bạn chọn, rồi mới thêm các file còn lại. Cài đặt của bạn vẫn giữ nguyên, vì vậy file thử sẽ cho biết chính xác phần còn lại sẽ trông như thế nào.',
      },
      {
        question: 'Tại sao ảnh xuất WebP lại giảm dung lượng ảnh chụp màn hình PNG của tôi mạnh đến vậy?',
        answer:
          'Không giống PNG không mất dữ liệu, WebP ở chất lượng 85% kết hợp nén dự đoán hiện đại với hỗ trợ đầy đủ độ trong suốt alpha. Điều đó thường thu nhỏ đáng kể ảnh chụp màn hình giao diện lớn và ảnh cắt sản phẩm trong khi vẫn giữ chữ sắc nét và cạnh mượt.',
      },
      {
        question: 'Làm sao kiểm tra chất lượng trước và sau trước khi lưu ảnh đã chuyển đổi?',
        answer:
          'Bấm So Sánh trên bất kỳ thẻ đã chuyển đổi nào (hoặc bấm vào ảnh thu nhỏ của nó) để mở cửa sổ so sánh tương tác. Bạn có thể so sánh dung lượng gốc với dung lượng sau chuyển đổi và kéo tay cầm chia đôi qua các cạnh và chữ.',
      },
      {
        question: 'Ảnh hoặc ảnh chụp màn hình nhạy cảm của tôi có bao giờ bị gửi qua internet không?',
        answer:
          'Không bao giờ — mọi thao tác giải mã, làm phẳng màu và mã hóa lại đều diễn ra hoàn toàn trong bộ nhớ trình duyệt trên máy bạn. Không có gì được tải lên, lưu trên máy chủ hay chia sẻ với bên thứ ba.',
      },
      {
        question: 'Mức chất lượng nào được khuyên dùng khi chuyển ảnh sang WebP hoặc JPG?',
        answer:
          'Mức mặc định 85% hoạt động tin cậy cho cả tài nguyên web WebP và chia sẻ JPG phổ biến mà không gây vỡ khối nén đáng kể. Bạn có thể tăng lên 92%–95% cho ảnh portfolio hoặc giảm xuống 70%–75% khi băng thông bị giới hạn chặt.',
      },
      {
        question: 'Tên file xuất được tạo ra như thế nào sau khi chuyển đổi?',
        answer:
          'Mỗi file đã chuyển đổi giữ nguyên tên gốc đã được làm sạch của bạn và tự thay phần mở rộng thành .webp, .jpg hoặc .png. Bạn có thể xem tên file xuất chính xác và dung lượng sau chuyển đổi trên từng thẻ trước khi tải về.',
      },
      {
        question: 'Cách nhanh nhất để chuyển một ảnh chụp màn hình đơn là gì?',
        answer:
          'Chụp màn hình, nhấn Ctrl+V ở bất kỳ đâu trên trang để dán thẳng vào hàng đợi, chọn định dạng xuất, rồi bấm Chuyển Đổi. File đơn sẽ tải xuống ngay lập tức — không cần chọn file, không thư mục, không ZIP.',
      },
      {
        question: 'Chuyển đổi từng file một có giúp kiểm soát chất lượng tốt hơn không?',
        answer:
          'Có. Khi chỉ có một file trong hàng đợi, trình xem So Sánh và số liệu thay đổi dung lượng mô tả đúng chính xác ảnh đó, vì vậy bạn có thể chỉnh chất lượng chính xác cho từng ảnh. Chế độ hàng loạt áp dụng một cài đặt cho mọi thứ; chế độ từng file giúp mỗi ảnh có được cài đặt tốt nhất của riêng nó.',
      },
      {
        question: 'Chuyển đổi qua HTML5 Canvas có loại bỏ metadata EXIF ẩn của máy ảnh không?',
        answer:
          'Có, vẽ ảnh lên Canvas và mã hóa một file JPG, PNG hoặc WebP mới sẽ tạo ra một bitmap sạch không còn thẻ GPS EXIF hay số serial máy ảnh. Điều đó bảo vệ quyền riêng tư khi chia sẻ file đã chuyển đổi lên mạng.',
      },
      {
        question: 'Tôi có thể chuyển đổi ảnh dán trực tiếp từ clipboard không?',
        answer:
          'Có, sao chép một ảnh hoặc chụp màn hình rồi nhấn Ctrl+V ở bất kỳ đâu trên trang để thêm trực tiếp vào hàng đợi chuyển đổi. Ảnh sẽ lập tức được mã hóa sang định dạng đích đang hoạt động của bạn.',
      },
      {
        question: 'Tôi có thể chuyển đổi một ảnh mà không cần tải file ZIP không?',
        answer:
          'Có. File đơn tải xuống riêng lẻ qua nút Tải Xuống trên từng thẻ, giữ nguyên tên file gốc với phần mở rộng mới. Tùy chọn Tải Tất Cả (ZIP) chỉ xuất hiện khi có từ hai file trở lên hoàn thành chuyển đổi.',
      },
      {
        question: 'Làm sao chuyển một ảnh cho form hoặc cổng nộp hồ sơ?',
        answer:
          'Hãy kiểm tra định dạng mà cổng yêu cầu trước — thường là JPG hoặc PNG — thả ảnh đơn vào, chọn định dạng đó, và tải file đã chuyển đổi duy nhất về. Chuyển đổi từng file một giúp tên file và định dạng khớp chính xác với yêu cầu của form.',
      },
    ],
    relatedSlugs: ['/', '/image-resizer', '/image-to-pdf', '/favicon-generator'],
  },
  {
    slug: '/rotate-flip-image',
    name: 'Xoay & Lật Ảnh',
    shortDescription: 'Xoay 90°, 180°, góc tùy chỉnh và lật ảnh ngang hoặc dọc.',
    category: 'crop-edit',
    seoTitle: 'Xoay Ảnh Online Miễn Phí – Xoay 90°, Lật & Cân Bằng',
    seoDescription: 'Nhanh chóng xoay ảnh 90°, 180° hoặc bất kỳ góc tùy chỉnh nào và lật ngang hoặc lật dọc ngay trong trình duyệt. Xử lý hàng loạt ảnh và tải về ZIP tức thì.',
    h1: 'Xoay & Lật Ảnh Online',
    subtitle:
      'Sửa ảnh chụp bị nghiêng từ máy ảnh, lật lại ảnh selfie bị ngược, và cân bằng đường chân trời bị lệch khi bạn xoay ảnh ngay trong trình duyệt. Lý tưởng cho nhiếp ảnh gia, học sinh quét tài liệu và nhà sáng tạo nội dung, mọi thao tác biến đổi diễn ra ngay trên máy ở độ phân giải đầy đủ với xuất ZIP hàng loạt.',
    howToSteps: [
      {
        title: 'Tải lên một hoặc nhiều ảnh',
        description:
          'Kéo thả file JPG, PNG, WebP, HEIC, GIF, BMP hoặc SVG tối đa 20 MB mỗi file vào vùng thả, hoặc dán trực tiếp bằng Ctrl+V.',
      },
      {
        title: 'Dùng nút xoay nhanh 90° và 180°',
        description:
          'Bấm Xoay 90° Trái, Xoay 90° Phải hoặc 180° trong mục Xoay & Lật Nhanh để xoay mọi ảnh trong hàng đợi ngay lập tức.',
      },
      {
        title: 'Lật ngang hoặc lật dọc',
        description:
          'Bật Lật Ngang để lật ảnh từ trái sang phải hoặc Lật Dọc để đảo ngược từ trên xuống dưới — có thể kết hợp với bất kỳ góc xoay nào.',
      },
      {
        title: 'Chỉnh góc tùy chỉnh (-180° đến +180°)',
        description:
          'Kéo thanh trượt Góc Xoay để cân bằng ảnh chụp bị nghiêng theo đúng số độ, rồi bấm Áp Dụng Góc (hoặc Đặt Lại về 0° bất cứ lúc nào).',
      },
      {
        title: 'Chọn Định Dạng Xuất',
        description:
          'Chọn định dạng Gốc, JPG, PNG hoặc WebP cho phù hợp với quy trình làm việc của bạn; thay đổi sẽ áp dụng lại cho mọi ảnh ngay lập tức.',
      },
      {
        title: 'So sánh trực quan và tải về',
        description:
          'Bấm So Sánh trên bất kỳ thẻ nào để kiểm tra hướng ảnh trước và sau, rồi bấm Tải Xuống hoặc Tải Tất Cả (ZIP) cho hàng loạt.',
      },
    ],
    features: [
      {
        title: 'Xoay nhanh 90° và góc tùy chỉnh',
        description:
          'Xoay gọn theo từng bước 90° hoặc chỉnh bất kỳ góc độ chính xác nào với tính toán giới hạn canvas tự động để góc ảnh không bao giờ bị cắt.',
      },
      {
        title: 'Lật ảnh tức thì',
        description:
          'Lật ảnh ngang (ảnh selfie dạng gương) hoặc lật dọc (phản chiếu ngược) chỉ bằng một cú nhấp chuột.',
      },
      {
        title: 'Biến đổi hàng loạt',
        description:
          'Áp dụng cùng một thao tác xoay hoặc lật cho nhiều ảnh tải lên cùng lúc và xuất tất cả dưới dạng ZIP.',
      },
      {
        title: 'Xuất ít mất chất lượng',
        description:
          'Chọn định dạng Gốc, PNG để giữ nguyên không mất dữ liệu, hoặc WebP/JPG với chất lượng tùy chỉnh.',
      },
    ],
    faqs: [
      {
        question: 'Xoay ảnh ở góc tùy chỉnh như 15° có làm mất góc ảnh không?',
        answer:
          'Không, công cụ tự động tính chiều rộng và chiều cao giới hạn mở rộng theo lượng giác cho các góc không phải 90°. Canvas sẽ được mở rộng vừa đủ để mọi pixel ở góc gốc vẫn nằm trong khung hình.',
      },
      {
        question: 'Phần góc tam giác tạo ra khi nghiêng ảnh ở góc tùy chỉnh được lấp bằng gì?',
        answer:
          'Nếu bạn giữ định dạng Gốc trên PNG/WebP hoặc chọn định dạng xuất PNG/WebP, các góc ngoài thừa đó sẽ hoàn toàn trong suốt. Nếu đầu ra là JPG, vốn không hỗ trợ alpha, các góc sẽ được lấp bằng màu trắng đặc.',
      },
      {
        question: 'Tôi có thể xoay 90° và lật ngang cùng lúc không?',
        answer:
          'Có, Lật Ngang và Lật Dọc hoạt động như hai công tắc độc lập bên cạnh bất kỳ góc xoay nào. Huy hiệu trên mỗi thẻ kết quả hiển thị đúng trạng thái kết hợp của bạn, ví dụ Đã Xoay 90° · Đã Lật Ngang.',
      },
      {
        question: 'Tại sao xoay 90° hoặc 270° lại hoán đổi chiều rộng và chiều cao pixel?',
        answer:
          'Xoay một ảnh ngang 1920×1080 một góc 90° sẽ xoay trục của nó để trở thành ảnh dọc 1080×1920. Việc giữ đúng giới hạn đã hoán đổi giúp ngăn ảnh bị kéo giãn hoặc cắt bất kỳ cạnh nào.',
      },
      {
        question: 'Làm sao sửa ảnh selfie bị ngược với chữ bị lật?',
        answer:
          'Tải ảnh lên, bấm Đặt Lại về 0° nếu bạn không muốn xoay 90° (công cụ mặc định xoay 90° khi tải lên), và bật Lật Ngang. Chữ trên áo hoặc biển hiệu sẽ lập tức lật lại đúng chiều đọc.',
      },
      {
        question: 'Tại sao ảnh tự xoay 90° ngay sau khi tải lên?',
        answer:
          'Trạng thái Xoay Nhanh mặc định bắt đầu ở 90° để các ảnh chụp ngang thường gặp sẽ đứng thẳng ngay khi thả vào. Bạn có thể điều chỉnh bằng Xoay 90° Trái, 180°, thanh trượt góc, hoặc bấm Đặt Lại về 0° bất cứ khi nào chỉ muốn lật ảnh.',
      },
      {
        question: 'Tôi có thể xoay và lật những định dạng ảnh nào ở đây?',
        answer:
          'Tải lên file JPG, PNG, WebP, HEIC/HEIF, GIF, BMP hoặc SVG tối đa 20 MB mỗi file. Tùy chọn xuất gồm Gốc, JPG, PNG và WebP qua vẽ HTML5 Canvas ngay trên máy.',
      },
      {
        question: 'Tôi có thể xoay hàng loạt cả thư mục ảnh chụp điện thoại bị nghiêng cùng lúc không?',
        answer:
          'Có, thả bao nhiêu ảnh tùy ý mà trình duyệt xử lý mượt, bấm nút xoay hoặc lật mong muốn một lần, và mọi ảnh sẽ cập nhật cùng nhau. Khi nhiều file hoàn thành, Tải Tất Cả (ZIP) sẽ xuất ra file rotated_images_compressmypic.zip.',
      },
      {
        question: 'Xoay ảnh PNG trong suốt có giữ nền trong suốt không?',
        answer:
          'Có, các vùng trong suốt vẫn trong suốt khi chọn định dạng Gốc (từ PNG/WebP), PNG hoặc WebP. Điều này đúng cho cả xoay 90° sắc nét lẫn cân bằng nghiêng ở góc bất kỳ.',
      },
      {
        question: 'Làm sao hoàn tác nhiều lần xoay mà không cần tải lại trang?',
        answer:
          'Bấm Đặt Lại về 0° ngay phía trên thanh trượt Góc Xoay bất cứ lúc nào. Thao tác này lập tức xóa góc xoay về 0° và tắt cả Lật Ngang lẫn Lật Dọc trên toàn bộ hàng đợi.',
      },
      {
        question: 'Tại sao dung lượng file thay đổi nhẹ sau khi xoay ảnh JPEG?',
        answer:
          'Xoay pixel bên trong HTML5 Canvas sẽ mã hóa lại JPEG ở chất lượng 90% thay vì chỉnh sửa khối DCT không mất dữ liệu. Chọn định dạng xuất PNG sẽ giữ pixel không mất dữ liệu nếu bạn muốn không có lỗi nén nào.',
      },
      {
        question: 'Có cách nào dễ dàng kiểm tra trước và sau khi cân bằng ảnh không?',
        answer:
          'Bấm So Sánh trên bất kỳ thẻ nào (hoặc bấm vào ảnh thu nhỏ) để mở cửa sổ so sánh Xoay & Lật. Bạn có thể kiểm tra các cạnh đã căn chỉnh bằng thanh trượt trước/sau tương tác trước khi lưu.',
      },
      {
        question: 'Công cụ này có tôn trọng hướng ảnh của iPhone đúng cách không?',
        answer:
          'Có, trình duyệt hiện đại và bộ tải HEIC của chúng tôi chuẩn hóa hướng EXIF khi giải mã vào Canvas trước khi áp dụng góc bạn chọn. Những gì bạn thấy trên ảnh thu nhỏ của thẻ khớp với pixel trong file đã tải về.',
      },
      {
        question: 'Tôi có thể cân bằng ảnh quét tài liệu bị nghiêng theo từng bước nhỏ 1° không?',
        answer:
          'Có, kéo thanh trượt Góc Xoay trong khoảng -180° đến +180° (bước 1°) và thả ra để xem trước tài liệu đã cân bằng. Bấm Áp Dụng Góc nếu bạn chỉnh bằng phím mũi tên để áp dụng cho mọi file trong hàng đợi.',
      },
      {
        question: 'Tài liệu hoặc ảnh cá nhân của tôi có bị tải lên máy chủ không?',
        answer:
          'Không, xoay và lật chạy 100% ngay trong trình duyệt web của bạn qua biến đổi Canvas 2D. Ảnh của bạn không bao giờ rời khỏi máy tính hoặc điện thoại.',
      },
      {
        question: 'Điều gì xảy ra nếu tôi xoay ảnh GIF động?',
        answer:
          'Xoay GIF sẽ trích xuất và biến đổi khung hình đầu tiên thành ảnh tĩnh. Không hỗ trợ trực tiếp việc xoay GIF nhiều khung hình giữ nguyên chuyển động.',
      },
      {
        question: 'Tôi có thể lật hoặc xoay ảnh chụp màn hình dán thẳng từ clipboard không?',
        answer:
          'Có, nhấn Ctrl+V (hoặc Cmd+V) ở bất kỳ đâu trên trang sau khi sao chép ảnh hoặc ảnh chụp màn hình. Ảnh sẽ vào hàng đợi và áp dụng ngay cài đặt xoay và lật đang hoạt động của bạn.',
      },
      {
        question: 'Có giới hạn dung lượng file hoặc số lần xoay không?',
        answer:
          'Mỗi file tải lên tối đa 20 MB để trình duyệt luôn phản hồi nhanh. Trong giới hạn đó, bạn có thể xoay, lật, đặt lại và xuất lại bao nhiêu ảnh tùy ý mà không cần tài khoản, không giới hạn hằng ngày, không watermark.',
      },
      {
        question: 'Tôi có thể chuyển định dạng xuất sang WebP trong khi xoay hàng loạt ảnh PNG không?',
        answer:
          'Có, bấm WebP trong mục Định Dạng Xuất sẽ lập tức biến đổi lại và xuất hàng loạt ảnh của bạn thành ảnh WebP đã xoay nhẹ hơn. Bạn có thể chuyển đổi định dạng qua lại thoải mái mà không cần tải lên lại.',
      },
      {
        question: 'Công cụ Xoay & Lật có hoạt động tốt trên điện thoại và máy tính bảng cảm ứng không?',
        answer:
          'Có, mọi nút xoay, công tắc lật và thanh trượt góc hỗ trợ cảm ứng đều hoạt động trên Safari di động và Chrome Android. Bạn cũng có thể tải từng ảnh trực tiếp về cuộn camera hoặc thư mục Tải Xuống của thiết bị.',
      },
    ],
    relatedSlugs: ['/image-resizer', '/', '/image-converter', '/remove-image-metadata'],
  },
  {
    slug: '/image-to-pdf',
    name: 'Chuyển Ảnh Sang PDF',
    shortDescription: 'Gộp ảnh JPG, PNG, WebP và HEIC thành file PDF nhiều trang.',
    category: 'convert',
    seoTitle: 'Chuyển Ảnh Sang PDF Miễn Phí – Gộp Nhiều Ảnh Thành PDF',
    seoDescription: 'Biến nhiều ảnh thành một tài liệu với công cụ chuyển ảnh sang PDF chạy trong trình duyệt. Sắp xếp lại trang, chọn khổ A4 hoặc Letter, đặt lề và lưu trực tiếp ngoại tuyến.',
    h1: 'Chuyển Ảnh Sang PDF Online Miễn Phí',
    subtitle:
      'Lý tưởng cho học sinh, freelancer, kế toán và bất kỳ ai cần nộp CMND hoặc hóa đơn, công cụ chuyển ảnh sang PDF riêng tư này gộp nhiều ảnh thành một file PDF nhiều trang sắc nét. Sắp xếp trang tự do, chọn khổ A4, Letter Mỹ hoặc Vừa Khít Ảnh, chỉnh lề và chất lượng, rồi tạo tài liệu ngay trên máy mà không tải lên máy chủ nào.',
    howToSteps: [
      {
        title: 'Thả ảnh muốn đưa vào PDF',
        description:
          'Tải lên một hoặc nhiều file JPG, PNG, WebP, HEIC, GIF, BMP hoặc SVG tối đa 20 MB mỗi file (hoặc dán bằng Ctrl+V). Mỗi ảnh sẽ trở thành một trang.',
      },
      {
        title: 'Sắp xếp thứ tự trang',
        description:
          'Xem danh sách Thứ Tự Trang bên dưới phần điều khiển và dùng nút Lên, Xuống hoặc Xóa để sắp xếp hóa đơn, slide hoặc bản quét cho chính xác.',
      },
      {
        title: 'Chọn Khổ Trang và Hướng Trang',
        description:
          'Chọn A4 (210 × 297 mm), Letter Mỹ (8,5 × 11 in) hoặc Vừa Khít Kích Thước Ảnh, và chọn hướng Tự Động (Theo Ảnh), Dọc hoặc Ngang.',
      },
      {
        title: 'Chỉnh Lề và Vị Trí Ảnh',
        description:
          'Chọn Không Lề (Tràn Viền), Lề Nhỏ hoặc Lề Vừa, và chọn Vừa Khít (Đủ Ảnh) hoặc Phủ Đầy (Lấp Trang).',
      },
      {
        title: 'Đặt tên file và Chất Lượng Ảnh PDF',
        description:
          'Tùy chỉnh Tên File PDF (kết thúc bằng .pdf) và trượt Chất Lượng Ảnh PDF từ 40% đến 98% để cân bằng độ sắc nét với tổng dung lượng tài liệu.',
      },
      {
        title: 'Tạo và tải PDF về',
        description:
          'Bấm Tạo & Tải PDF Xuống để tạo file ngay trên máy; một banner xác nhận màu xanh lá cũng cho phép bạn bấm Tải PDF Lại.',
      },
    ],
    features: [
      {
        title: 'Sắp xếp nhiều trang',
        description:
          'Dễ dàng sắp xếp lại ảnh đã tải lên trước khi tạo PDF để hóa đơn, bản quét và slide xuất hiện đúng thứ tự bạn muốn.',
      },
      {
        title: 'Khổ trang linh hoạt và hướng tự động',
        description:
          'Xuất ra khổ A4 hoặc Letter Mỹ chuẩn với hướng Dọc/Ngang tự động theo từng trang, hoặc chọn Vừa Khít Ảnh để khớp đúng tỉ lệ khung hình của từng ảnh.',
      },
      {
        title: 'Lề và chất lượng PDF tùy chỉnh',
        description:
          'Chọn lề Không, Nhỏ hoặc Vừa và kiểm soát chất lượng ảnh nhúng để file PDF luôn nhẹ khi gửi email.',
      },
      {
        title: 'Không tải lên máy chủ',
        description:
          'CMND, hợp đồng và tài liệu quét nhạy cảm không bao giờ chạm tới máy chủ ngoài — file PDF được tạo ngay trong bộ nhớ trình duyệt.',
      },
    ],
    faqs: [
      {
        question: 'Công cụ chuyển ảnh sang PDF này có an toàn cho hộ chiếu, CMND và hóa đơn thuế không?',
        answer:
          'Có, tài liệu của bạn không bao giờ tải lên bất kỳ máy chủ hay hàng đợi đám mây nào. Trình tạo PDF bằng JavaScript của chúng tôi mã hóa mọi trang ngay trong RAM trình duyệt trên máy bạn và ghi file .pdf hoàn chỉnh trực tiếp xuống thiết bị.',
      },
      {
        question: 'Có những lựa chọn khổ trang nào?',
        answer:
          'Bạn có thể chuẩn hóa mọi trang theo khổ A4 (210 × 297 mm) hoặc Letter Mỹ (8,5 × 11 in) để in ấn và lưu trữ nhất quán. Ngoài ra, chọn Vừa Khít Kích Thước Ảnh để mỗi trang PDF khớp đúng kích thước và tỉ lệ khung hình gốc của ảnh.',
      },
      {
        question: 'Hướng Tự Động hoạt động thế nào với ảnh ngang và ảnh dọc lẫn lộn?',
        answer:
          'Khi Hướng được đặt thành Tự Động (Theo Ảnh), ảnh ngang sẽ tự nhận trang ngang còn ảnh dọc nhận trang dọc. Bạn có thể khóa mọi trang thành Dọc hoặc Ngang khi cần bố cục in đồng nhất.',
      },
      {
        question: 'Vừa Khít và Phủ Đầy khác nhau như thế nào?',
        answer:
          'Vừa Khít (Đủ Ảnh) thu phóng mỗi ảnh theo tỉ lệ để toàn bộ bức ảnh vừa trong lề bạn chọn mà không bị cắt gì. Phủ Đầy (Lấp Trang) phóng to ảnh để lấp đầy toàn bộ vùng in sát viền, cắt bỏ phần thừa.',
      },
      {
        question: 'Tại sao menu Hướng bị tắt khi chọn Vừa Khít Kích Thước Ảnh?',
        answer:
          'Vừa Khít Kích Thước Ảnh tự đặt kích thước mỗi trang PDF theo đúng tỉ lệ khung hình của ảnh, vì vậy việc ghi đè Dọc hay Ngang không còn áp dụng. Hãy chuyển Khổ Trang sang A4 hoặc Letter Mỹ nếu bạn muốn tự điều khiển hướng Dọc/Ngang.',
      },
      {
        question: 'Tôi có thể sắp xếp lại trang sau khi tải nhiều file cùng lúc không?',
        answer:
          'Có, cuộn xuống phần Thứ Tự Trang, nơi mỗi trang hiển thị huy hiệu số thứ tự, ảnh thu nhỏ, kích thước pixel và dung lượng file. Dùng nút mũi tên Lên và Xuống trên bất kỳ hàng nào để sắp xếp lại trang trước khi bấm Tạo & Tải PDF Xuống.',
      },
      {
        question: 'Thanh trượt Chất Lượng Ảnh PDF ảnh hưởng đến dung lượng file như thế nào?',
        answer:
          'Giảm Chất Lượng Ảnh PDF xuống khoảng 60%–75% sẽ nén các luồng JPEG nhúng trong PDF, giúp bản quét nhiều trang gọn nhẹ cho giới hạn tải lên email hoặc cổng nộp hồ sơ. Đẩy lên 90%–98% sẽ giữ chữ nhỏ sắc nét hơn trên tài liệu dày đặc chữ.',
      },
      {
        question: 'Tôi có thể gộp những định dạng ảnh nào thành PDF?',
        answer:
          'Bạn có thể trộn ảnh JPG, PNG, WebP, HEIC/HEIF của iPhone, GIF, BMP và SVG (tối đa 20 MB mỗi file) trong một tài liệu PDF duy nhất. Chúng được giải mã ngay trong trình duyệt và chuẩn hóa mượt mà lên các trang PDF.',
      },
      {
        question: 'Ảnh PNG hoặc WebP trong suốt sẽ ra sao trong file PDF?',
        answer:
          'Vì trang PDF chuẩn có nền giấy trắng, nền trong suốt sẽ được hợp nhất sạch lên nền trắng đặc trước khi nhúng. Điều đó ngăn các vệt tối bất ngờ xuất hiện phía sau logo hoặc chữ ký đã quét.',
      },
      {
        question: 'Tôi có thể tùy chỉnh tên file xuất trước khi lưu không?',
        answer:
          'Có, gõ bất kỳ tiêu đề tài liệu nào vào ô Tên File PDF (mặc định là compressmypic-document.pdf). Nếu bạn bỏ qua hậu tố .pdf, trình xuất sẽ tự thêm .pdf khi tải về.',
      },
      {
        question: 'Tôi có thể gộp bao nhiêu trang vào một file PDF?',
        answer:
          'Không có giới hạn số trang nhân tạo — bạn có thể gộp hàng chục ảnh hoặc hóa đơn thành một file PDF nhiều trang. Dung lượng thực tế chỉ phụ thuộc vào bộ nhớ trình duyệt sẵn có trên thiết bị và độ phân giải pixel của từng ảnh.',
      },
      {
        question: 'Không Lề, Lề Nhỏ và Lề Vừa khác nhau như thế nào?',
        answer:
          'Không Lề (Tràn Viền) mở rộng vị trí ảnh tới tận mép giấy, lý tưởng cho tác phẩm không viền hoặc xuất Vừa Khít Ảnh. Lề Nhỏ và Lề Vừa thêm viền trắng gọn gàng quanh mỗi trang để in ấn và đọc chuẩn.',
      },
      {
        question: 'Tôi có thể thêm ảnh sau khi đã xem danh sách Thứ Tự Trang không?',
        answer:
          'Có, chỉ cần thả hoặc chọn thêm file vào ô tải lên ở phía trên và chúng sẽ được thêm vào cuối danh sách Thứ Tự Trang. Sau đó bạn có thể sắp xếp lại hoặc xóa từng trang trước khi tạo PDF đã cập nhật.',
      },
      {
        question: 'Công cụ có thêm logo chân trang, dấu trang hay watermark vào PDF không?',
        answer:
          'Không, CompressMyPic tạo ra các trang PDF hoàn toàn sạch, chỉ chứa ảnh của bạn trong lề đã chọn. Không bao giờ thêm thương hiệu, tiêu đề hay watermark.',
      },
      {
        question: 'Tại sao lại hiện thông báo tiến trình Đang mã hóa trang X trên Y?',
        answer:
          'PDF nhiều trang mã hóa từng ảnh tuần tự trong bộ nhớ trình duyệt để tránh làm treo tab hoặc tăng vọt RAM. Khi trang cuối cùng mã hóa xong, thanh xác nhận màu xanh lá sẽ hiển thị tổng số trang và dung lượng PDF chính xác.',
      },
      {
        question: 'Nếu tôi làm mất hoặc đóng hộp thoại tải xuống tự động của trình duyệt thì sao?',
        answer:
          'Hãy giữ tab mở — thẻ xác nhận màu xanh lá vẫn hiển thị với nút Tải PDF Lại. Bấm vào đó sẽ kích hoạt lưu lại đúng Blob đã tạo ngay lập tức mà không cần mã hóa lại.',
      },
      {
        question: 'Tôi có thể dán ảnh chụp màn hình trực tiếp vào trình tạo PDF không?',
        answer:
          'Có, nhấn Ctrl+V (hoặc Cmd+V trên máy Mac) để thêm ảnh chụp màn hình từ clipboard thẳng vào hàng đợi Thứ Tự Trang. Điều đó giúp gộp nhiều ảnh chụp lỗi hoặc hóa đơn trò chuyện thành một PDF rất nhanh.',
      },
      {
        question: 'Tạo PDF có tải lên metadata như thẻ GPS EXIF không?',
        answer:
          'Không, mỗi ảnh trang được giải mã và vẽ lên HTML5 Canvas trước khi nhúng vào luồng byte PDF. Nhờ đó, tiêu đề EXIF gốc của máy ảnh và tọa độ GPS sẽ tự động bị loại bỏ trong quá trình chuyển đổi.',
      },
      {
        question: 'Tôi có thể chuyển ảnh HEIC của iPhone sang PDF trực tiếp mà không cần đổi sang JPG trước không?',
        answer:
          'Có, thả ảnh .heic hoặc .heif trực tiếp vào vùng tải lên và trình duyệt sẽ giải mã chúng ngay trên máy. Chúng sẽ xuất hiện ngay trong danh sách Thứ Tự Trang, sẵn sàng gộp thành PDF A4 hoặc Letter.',
      },
      {
        question: 'Công cụ Chuyển Ảnh Sang PDF có hoạt động trên điện thoại và Chromebook không?',
        answer:
          'Có, mọi thứ chạy bằng JavaScript trình duyệt chuẩn trên iOS, Android, Windows, macOS và ChromeOS. Bạn không cần Adobe Acrobat, tiện ích trình duyệt hay phần mềm PDF trên máy tính.',
      },
    ],
    relatedSlugs: ['/image-converter', '/', '/remove-image-metadata', '/image-resizer'],
  },
  {
    slug: '/image-metadata-viewer',
    name: 'Xem Metadata Ảnh',
    shortDescription: 'Kiểm tra cài đặt máy ảnh EXIF, tọa độ GPS và dữ liệu PNG/WebP.',
    category: 'privacy',
    seoTitle: 'Xem Metadata Ảnh – Kiểm Tra Dữ Liệu EXIF & GPS Miễn Phí',
    seoDescription: 'Kiểm tra thẻ EXIF máy ảnh, tọa độ GPS, dấu thời gian và các chunk PNG hoặc WebP bằng công cụ xem metadata ảnh riêng tư của chúng tôi. Sao chép hoặc xuất toàn bộ metadata JSON ngay trên máy.',
    h1: 'Trình Xem Metadata Ảnh & EXIF',
    subtitle:
      'Được tạo cho nhiếp ảnh gia kiểm tra cài đặt ống kính, lập trình viên gỡ lỗi header, và bất kỳ ai kiểm tra quyền riêng tư trước khi đăng ảnh, công cụ xem metadata ảnh chạy trong trình duyệt của chúng tôi kiểm tra byte thô của file ngay trên máy. Khám phá các thẻ EXIF ẩn, tọa độ GPS, dấu thời gian và chunk PNG hoặc WebP mà không tải lên một pixel nào.',
    howToSteps: [
      {
        title: 'Thả hoặc chọn ảnh để kiểm tra',
        description:
          'Tải lên ảnh JPG, PNG, WebP, HEIC, GIF, BMP hoặc SVG tối đa 20 MB (hoặc dán bằng Ctrl+V). Các header nhị phân thô được phân tích ngay trên thiết bị của bạn.',
      },
      {
        title: 'Xem banner Tóm Tắt & Rủi Ro Riêng Tư',
        description:
          'Xem định dạng container đã phát hiện, kích thước, dung lượng file và liệu có loại thẻ metadata nhúng nhạy cảm nào được tìm thấy không.',
      },
      {
        title: 'Xem lại cảnh báo Vị Trí GPS',
        description:
          'Nếu có thẻ GPSIFD, một hộp cảnh báo sẽ làm nổi bật Vĩ Độ và Kinh Độ đã giải mã chính xác và cung cấp nút chuyển nhanh tới công cụ Xóa Metadata Ảnh.',
      },
      {
        title: 'Duyệt bảng Metadata Đã Trích Xuất',
        description:
          'Cuộn qua các mục đã nhóm (Máy Ảnh, EXIF, GPS, chunk PNG/WebP, Thông tin file) với nhãn Thẻ Riêng Tư màu hổ phách đánh dấu các trường nhạy cảm.',
      },
      {
        title: 'Sao chép hoặc xuất JSON, hoặc xóa thẻ',
        description:
          'Bấm Sao Chép JSON để sao chép toàn bộ báo cáo, Xuất JSON để lưu file .json, hoặc bấm Xóa Metadata để làm sạch các thẻ riêng tư.',
      },
    ],
    features: [
      {
        title: 'Phát hiện EXIF & GPS chuyên sâu',
        description:
          'Phân tích các bảng nhị phân TIFF IFD0, ExifIFD và GPSIFD trong JPEG, PNG eXIf và chunk EXIF của WebP để phát hiện vị trí và thẻ thiết bị ẩn.',
      },
      {
        title: 'Làm nổi bật rủi ro riêng tư',
        description:
          'Tự động gắn cờ các trường nhạy cảm như vĩ độ/kinh độ GPS, số serial máy ảnh, tên nghệ sĩ và dấu thời gian chụp.',
      },
      {
        title: 'Kiểm tra chunk PNG & WebP',
        description:
          'Đọc độ sâu màu IHDR của PNG, DPI vật lý pHYs, chunk tEXt/iTXt/tIME và cờ alpha/hoạt hình VP8X của WebP.',
      },
      {
        title: 'Xuất báo cáo JSON',
        description:
          'Sao chép mọi trường metadata đã phân tích vào clipboard hoặc tải về báo cáo JSON sạch chỉ bằng một cú nhấp chuột.',
      },
    ],
    faqs: [
      {
        question: 'Công cụ xem metadata ảnh này có thể khám phá loại thông tin ẩn nào?',
        answer:
          'Tùy vào định dạng container, trình phân tích của chúng tôi trích xuất các trường TIFF IFD0, ExifIFD và GPSIFD ngay trên máy từ header ảnh. Nhờ đó bạn thấy được hãng và mẫu máy ảnh, thông số ống kính, tốc độ màn trập, ISO, khẩu độ, dấu thời gian, phần mềm chỉnh sửa, ghi chú bản quyền và tọa độ GPS dạng thập phân.',
      },
      {
        question: 'Công cụ có kiểm tra header kỹ thuật của PNG và WebP cũng như EXIF của JPEG không?',
        answer:
          'Có, ngoài các đoạn EXIF chuẩn của JPEG, trình xem còn đọc các chunk kỹ thuật nhúng trong file PNG và WebP. Bạn có thể xem độ sâu bit IHDR của PNG, mật độ DPI vật lý pHYs, chunk văn bản tEXt/iTXt/tIME, khối eXIf của PNG và cờ alpha hoặc hoạt hình VP8X của WebP.',
      },
      {
        question: 'Tại sao ảnh tải từ WhatsApp hoặc Instagram không hiện thẻ EXIF nào?',
        answer:
          'Mạng xã hội và ứng dụng nhắn tin tự động loại bỏ header EXIF, máy ảnh và GPS khi bạn tải ảnh lên qua máy chủ của họ. File gốc lấy thẳng từ cuộn camera điện thoại hoặc máy ảnh DSLR vẫn giữ đầy đủ metadata.',
      },
      {
        question: 'Công cụ phát hiện ảnh có tiết lộ vị trí của tôi như thế nào?',
        answer:
          'Khi có thẻ GPSIFD dạng phân số trong header ảnh, trình xem sẽ tự động chuyển đổi độ, phút và giây thành Vĩ Độ và Kinh Độ dạng thập phân. Bất kỳ tọa độ nào được phát hiện cũng kích hoạt banner màu hổ phách Phát Hiện Tọa Độ GPS ngay phía trên bảng thuộc tính.',
      },
      {
        question: 'Nhãn Thẻ Riêng Tư màu hổ phách trong bảng metadata có ý nghĩa gì?',
        answer:
          'Các mục được gắn huy hiệu Thẻ Riêng Tư màu hổ phách chứa thông tin cá nhân hoặc thông tin định danh thiết bị. Ví dụ điển hình gồm tọa độ GPS, dấu thời gian chụp chính xác, tên nhiếp ảnh gia/nghệ sĩ, số serial máy ảnh và chuỗi mẫu thiết bị.',
      },
      {
        question: 'Tôi có thể xóa metadata nhạy cảm ngay sau khi kiểm tra ảnh không?',
        answer:
          'Có, khi phát hiện thẻ nhạy cảm, nút Xóa Metadata màu cam sẽ xuất hiện trong thanh tóm tắt (cộng thêm một liên kết trong hộp cảnh báo GPS). Bấm vào đó sẽ đưa bạn thẳng tới công cụ Xóa Metadata Ảnh của chúng tôi.',
      },
      {
        question: 'Xuất JSON hoạt động thế nào cho lập trình viên hoặc tài liệu?',
        answer:
          'Bấm Sao Chép JSON trong thanh tóm tắt để đưa báo cáo ImageMetadataReport có cấu trúc lên clipboard ngay lập tức. Nếu cần file cho kiểm toán hoặc báo cáo lỗi, bấm Xuất JSON để tải file <tên-file>_metadata.json về máy.',
      },
      {
        question: 'Tại sao một số file HEIC hoặc GIF không trích xuất được đầy đủ chunk EXIF nhị phân?',
        answer:
          'Trình phân tích chunk nhị phân chuyên sâu của chúng tôi nhắm tới các container JPEG, PNG và WebP trực tiếp bằng JavaScript. Với file HEIC, GIF, BMP và SVG, trình xem vẫn báo cáo chính xác thông tin container, dung lượng file và kích thước pixel.',
      },
      {
        question: 'Ảnh riêng tư có vị trí GPS có bao giờ bị tải lên khi tôi kiểm tra không?',
        answer:
          'Không, việc kiểm tra nhị phân chạy 100% ngay trong trình duyệt bằng cách phân tích byte của File ArrayBuffer. Gửi ảnh riêng tư chưa xóa metadata qua internet sẽ phá vỡ quyền riêng tư, vì vậy không một byte nào rời khỏi máy tính hoặc điện thoại của bạn.',
      },
      {
        question: 'Xem metadata có sửa đổi, nén hoặc xóa bất cứ thứ gì trong file của tôi không?',
        answer:
          'Không, Trình Xem Metadata Ảnh chỉ đọc. Nó đọc header từ bộ nhớ trình duyệt để cho bạn thấy bên trong có gì mà không thay đổi file gốc của bạn.',
      },
      {
        question: 'Tôi có thể kiểm tra nhiều file liên tiếp mà không cần tải lại trang không?',
        answer:
          'Có, bấm biểu tượng thùng rác màu đỏ (Xóa) trong thanh tóm tắt để đặt lại về vùng tải lên bất cứ lúc nào. Sau đó bạn có thể thả hoặc dán ảnh tiếp theo để tạo báo cáo metadata mới.',
      },
      {
        question: 'Tại sao dán ảnh chụp màn hình bằng Ctrl+V thường không hiện thẻ máy ảnh?',
        answer:
          'Clipboard của hệ điều hành truyền bitmap raster thô thay vì file JPEG gốc của máy ảnh. Vì ảnh từ clipboard thiếu header máy ảnh, ảnh chụp màn hình đã dán chỉ hiển thị kích thước, định dạng container mà không có khối EXIF hoặc GPS.',
      },
      {
        question: 'Dung lượng file tối đa hỗ trợ kiểm tra metadata là bao nhiêu?',
        answer:
          'Bạn có thể kiểm tra từng ảnh tối đa 20 MB ngay trong trình duyệt. Giới hạn này dễ dàng bao phủ ảnh JPEG độ phân giải đầy đủ của DSLR, ảnh PNG xuất chi tiết và file BMP chưa nén.',
      },
      {
        question: 'Làm sao xác minh một công cụ khác đã thực sự xóa hết thẻ EXIF khỏi ảnh?',
        answer:
          'Thả file đầu ra đã làm sạch trở lại công cụ xem metadata ảnh này để kiểm tra byte thô của nó. Nếu việc xóa thành công, banner trạng thái màu xanh lá sẽ xác nhận Không phát hiện thẻ EXIF, GPS hay máy ảnh ẩn và không còn cảnh báo GPS.',
      },
      {
        question: 'Trình xem có phát hiện XMP của Adobe hoặc bình luận văn bản PNG không?',
        answer:
          'Có, các chunk văn bản khóa-giá trị tEXt và iTXt của PNG — như Phần Mềm, Tác Giả, Bình Luận hoặc Thời Gian Tạo — được trích xuất sạch vào bảng metadata. Mọi khối eXIf của PNG và chunk EXIF của WebP nhúng kèm cũng được giải mã cùng lúc.',
      },
      {
        question: 'Chunk pHYs trên ảnh chụp màn hình PNG có nghĩa là gì?',
        answer:
          'Chunk pHYs của PNG lưu mật độ pixel vật lý (DPI / pixel trên mét) dùng cho in ấn hoặc tỉ lệ bố cục. Trình xem của chúng tôi đọc và chuyển đổi các giá trị đó để bạn thấy ảnh ghi 72 DPI, 96 DPI hay 300 DPI.',
      },
      {
        question: 'Tại sao phần mở rộng tên file đôi khi khác với containerFormat?',
        answer:
          'Đôi khi một file PNG hoặc WebP bị đổi tên với phần mở rộng .jpg (hoặc ngược lại). Vì trình xem của chúng tôi kiểm tra byte magic nhị phân thực tế thay vì chỉ tin tên file, nó báo cáo đúng định dạng container gốc bên trong.',
      },
      {
        question: 'Tôi có thể kiểm tra metadata ảnh trên trình duyệt di động iPhone hoặc Android không?',
        answer:
          'Có, mở trang trong Safari di động hoặc Chrome và chọn ảnh trực tiếp từ cuộn camera. Bạn có thể kiểm tra tọa độ GPS ẩn và chi tiết máy ảnh ngay trên điện thoại trước khi đăng ảnh lên mạng.',
      },
      {
        question: 'Tại sao ảnh DSLR của tôi lại hiện tiêu cự ống kính và tốc độ màn trập?',
        answer:
          'Máy ảnh kỹ thuật số ghi lại thông tin phơi sáng trong thư mục nhị phân ExifIFD ngay lúc bạn bấm nút chụp. Các trường như ISO, Số F, Thời Gian Phơi Sáng, Tiêu Cự, Đèn Flash và Chế Độ Đo Sáng được giải mã ngay trên máy để bạn đọc.',
      },
      {
        question: 'Có mất phí hay cần đăng ký để kiểm tra không giới hạn ảnh không?',
        answer:
          'Không, kiểm tra metadata ảnh và xuất báo cáo JSON hoàn toàn miễn phí, không tài khoản hay tường phí. Bạn có thể kiểm tra bao nhiêu ảnh tối đa 20 MB tùy ý mà không có watermark hay giới hạn hằng ngày.',
      },
    ],
    relatedSlugs: ['/remove-image-metadata', '/image-dimensions-checker', '/', '/image-converter'],
  },
  {
    slug: '/remove-image-metadata',
    name: 'Xóa Metadata Ảnh',
    shortDescription: 'Xóa EXIF, vị trí GPS, thông tin máy ảnh và bình luận một cách riêng tư.',
    category: 'privacy',
    seoTitle: 'Xóa Metadata Ảnh Miễn Phí – Xóa Thẻ EXIF & GPS',
    seoDescription: 'Xóa metadata ảnh một cách an toàn, bao gồm chi tiết máy ảnh EXIF và vị trí GPS, ngay trong trình duyệt. Xóa nhị phân không mất dữ liệu cho JPG và PNG với xuất ZIP.',
    h1: 'Xóa Metadata Ảnh Online',
    subtitle:
      'Được thiết kế cho người bán hàng trên sàn, nhà báo, phụ huynh và người dùng quan tâm đến quyền riêng tư, công cụ này giúp bạn xóa metadata ảnh vĩnh viễn trước khi chia sẻ ảnh lên mạng. Xóa mẫu máy ảnh EXIF, tọa độ GPS, dấu thời gian chụp và chunk văn bản ẩn ngay trong trình duyệt bằng cách xóa nhị phân không mất dữ liệu hoặc mã hóa lại Canvas sạch.',
    howToSteps: [
      {
        title: 'Thả ảnh bạn muốn làm sạch',
        description:
          'Tải lên một hoặc nhiều ảnh JPG, PNG, WebP hoặc HEIC (tối đa 20 MB mỗi file) vào ô tải lên, hoặc dán bằng Ctrl+V.',
      },
      {
        title: 'Xem lại quá trình xóa tự động và huy hiệu xác minh',
        description:
          'File được làm sạch ngay khi tải lên và tự quét lại, hiển thị số thẻ metadata đã xóa (ví dụ → còn 0).',
      },
      {
        title: 'Chọn Phương Pháp Xóa nếu muốn điều chỉnh cài đặt',
        description:
          'Giữ Xóa Nhị Phân Không Mất Dữ Liệu (JPG/PNG) để không mã hóa lại pixel trên JPEG và PNG, hoặc chọn Mã Hóa Lại Toàn Bộ Bằng Canvas để làm phẳng pixel sạch sẽ.',
      },
      {
        title: 'Tùy chọn đặt Định Dạng Xuất và Chất Lượng',
        description:
          'Chọn định dạng xuất Gốc, JPG, PNG hoặc WebP, chỉnh Chất Lượng Mã Hóa Lại (50%–100%) cho WebP/HEIC/mã hóa lại bằng Canvas, rồi bấm Làm Sạch Lại Tất Cả.',
      },
      {
        title: 'Tải file sạch hoặc file ZIP hàng loạt',
        description:
          'Bấm Tải Xuống File Sạch trên từng thẻ đã xác minh hoặc bấm Tải Tất Cả File Sạch (ZIP) để lưu file clean_images_no_metadata.zip.',
      },
    ],
    features: [
      {
        title: 'Xóa không mất dữ liệu thực sự cho JPEG & PNG',
        description:
          'Loại bỏ EXIF, XMP, IPTC, bình luận và chunk tEXt/eXIf của PNG ở cấp độ nhị phân mà không mã hóa lại một pixel nào.',
      },
      {
        title: 'Đầu ra sạch đã xác minh',
        description:
          'Mỗi file đầu ra được trình phân tích metadata của chúng tôi quét lại tự động để xác minh còn 0 thẻ EXIF/GPS nhạy cảm.',
      },
      {
        title: 'Làm sạch hàng loạt và xuất ZIP',
        description:
          'Làm sạch cả loạt ảnh trước khi đăng lên sàn, diễn đàn hoặc tin rao và tải tất cả cùng nhau dưới dạng ZIP.',
      },
      {
        title: 'Riêng tư 100% trên thiết bị',
        description:
          'Công cụ riêng tư phải thực sự riêng tư — ảnh gốc chứa dữ liệu GPS của bạn không bao giờ rời khỏi trình duyệt.',
      },
    ],
    faqs: [
      {
        question: 'Xóa Nhị Phân Không Mất Dữ Liệu hoạt động thế nào mà không làm giảm chất lượng ảnh?',
        answer:
          'Với file JPEG và PNG giữ nguyên định dạng gốc, trình dọn nhị phân của chúng tôi phân tích trực tiếp cấu trúc container. Nó loại bỏ các đoạn metadata (JPEG APP1–APP15/COM và PNG eXIf/tEXt/iTXt/tIME) mà không giải mã hay nén lại một pixel nào.',
      },
      {
        question: 'Điều gì xảy ra khi tôi tải file WebP hoặc HEIC lên để xóa metadata?',
        answer:
          'Xóa đoạn nhị phân không mất dữ liệu áp dụng cho đầu vào JPG và PNG. Với đầu vào HEIC hoặc WebP — hoặc bất cứ khi nào bạn đổi Định Dạng Xuất hay chọn Mã Hóa Lại Toàn Bộ Bằng Canvas — công cụ vẽ pixel lên một HTML5 Canvas mới để đảm bảo mọi header metadata đều bị loại bỏ.',
      },
      {
        question: 'Làm sao tôi biết chắc vị trí GPS và thẻ EXIF đã được xóa?',
        answer:
          'Sau khi làm sạch mỗi ảnh, công cụ chạy lại trình phân tích metadata của chúng tôi lần thứ hai trên Blob đầu ra và hiển thị huy hiệu màu xanh lá (ví dụ: Đã xóa X thẻ metadata → còn 0 hoặc Đã xác minh sạch). Không có gì là phỏng đoán.',
      },
      {
        question: 'Những loại metadata nào bị nhắm tới khi làm sạch ảnh?',
        answer:
          'Trình dọn xóa hãng và mẫu máy ảnh EXIF, chi tiết ống kính, số serial, cài đặt màn trập và dấu thời gian chụp. Nó cũng xóa thẻ vĩ độ/kinh độ/độ cao GPS, gói Adobe XMP, trường IPTC, bình luận JPEG và chunk văn bản hoặc thời gian của PNG.',
      },
      {
        question: 'Khi nào nên chọn Mã Hóa Lại Toàn Bộ Bằng Canvas thay vì Xóa Nhị Phân Không Mất Dữ Liệu?',
        answer:
          'Chọn Mã Hóa Lại Toàn Bộ Bằng Canvas khi bạn muốn một bitmap nén mới hoàn toàn không còn bất kỳ đoạn nhị phân thừa hưởng nào. Nó cũng được dùng tự động mỗi khi bạn đổi Định Dạng Xuất hoặc tải lên ảnh WebP và HEIC.',
      },
      {
        question: 'Công cụ Xóa Metadata Ảnh chấp nhận những định dạng tải lên nào?',
        answer:
          'Vùng thả chấp nhận file JPG (JPEG), PNG, WebP và HEIC/HEIF của iPhone tối đa 20 MB mỗi file. Từ đó, bạn có thể xuất file sạch dưới định dạng Gốc, JPG, PNG hoặc WebP.',
      },
      {
        question: 'Thanh trượt Chất Lượng Mã Hóa Lại có ảnh hưởng đến file Xóa Nhị Phân Không Mất Dữ Liệu không?',
        answer:
          'Không, Xóa Nhị Phân Không Mất Dữ Liệu bỏ qua hoàn toàn việc mã hóa lại pixel nên các bit hình ảnh JPEG/PNG của bạn vẫn nguyên vẹn bất kể thanh trượt. Thanh trượt Chất Lượng Mã Hóa Lại (50%–100%) chỉ áp dụng cho đầu vào WebP/HEIC hoặc xuất Mã Hóa Lại Toàn Bộ Bằng Canvas.',
      },
      {
        question: 'Tôi có thể xóa metadata của cả thư mục ảnh rao bán cùng lúc không?',
        answer:
          'Có, thả nhiều ảnh cùng nhau và chờ một lát để các huy hiệu xác minh chuyển sang màu xanh lá trên mọi thẻ. Sau đó bấm Tải Tất Cả File Sạch (ZIP) để tải file clean_images_no_metadata.zip.',
      },
      {
        question: 'Ảnh chưa làm sạch có tọa độ GPS có bị tải lên đâu không?',
        answer:
          'Không bao giờ — việc xóa các header GPS và thiết bị nhạy cảm chỉ bảo vệ quyền riêng tư khi diễn ra ngay trên máy. Mọi thao tác cắt byte nhị phân và xuất Canvas đều xảy ra trong bộ nhớ trình duyệt của chính bạn.',
      },
      {
        question: 'Tại sao một ảnh lại hiện Đã xác minh sạch (0 thẻ EXIF/GPS) ngay sau khi tải lên?',
        answer:
          'Điều đó có nghĩa file nguồn vốn đã không chứa chunk metadata EXIF, GPS hay văn bản nào (thường gặp với ảnh chụp màn hình hoặc ảnh tải từ ứng dụng nhắn tin). Trình dọn của chúng tôi vẫn xác minh đầu ra sạch sẽ.',
      },
      {
        question: 'Xóa metadata có giảm dung lượng file luôn không?',
        answer:
          'Có, ảnh máy ảnh thường mang theo ảnh thu nhỏ xem trước EXIF nhúng, khối XML Adobe XMP và các đoạn màu sắc hoặc bình luận. Xóa chúng ở chế độ Xóa Nhị Phân Không Mất Dữ Liệu thường cắt giảm hàng chục kilobyte mà độ sắc nét ảnh không thay đổi.',
      },
      {
        question: 'Xóa Nhị Phân Không Mất Dữ Liệu có giữ nền trong suốt của PNG không?',
        answer:
          'Có, các chunk dữ liệu ảnh PNG (IDAT) và độ trong suốt alpha vẫn nguyên vẹn từng byte. Chỉ các chunk văn bản, EXIF và dấu thời gian phụ trợ bị cắt khỏi file.',
      },
      {
        question: 'Điều gì xảy ra nếu ảnh iPhone bị xoay qua thẻ EXIF Orientation?',
        answer:
          'Xóa thô khối APP1 không mất dữ liệu sẽ xóa cờ Orientation, trong khi Mã Hóa Lại Toàn Bộ Bằng Canvas hoặc giải mã HEIC sẽ ghi hướng pixel đứng thẳng trực tiếp vào canvas đã xuất. Nếu ảnh JPEG dọc trông bị nghiêng sau khi xóa không mất dữ liệu, hãy chuyển sang Mã Hóa Lại Toàn Bộ Bằng Canvas và bấm Làm Sạch Lại Tất Cả.',
      },
      {
        question: 'Tôi có thể chuyển PNG sạch trực tiếp sang WebP hoặc JPG trong khi xóa metadata không?',
        answer:
          'Có, chọn JPG hoặc WebP trong mục Định Dạng Xuất, đặt Chất Lượng Mã Hóa Lại, rồi bấm Làm Sạch Lại Tất Cả. Mỗi file sẽ mã hóa lại sạch qua Canvas với mọi metadata đã xóa và định dạng đã chọn được áp dụng.',
      },
      {
        question: 'File gốc trên ổ đĩa của tôi có bị thay đổi hay ghi đè không?',
        answer:
          'Không, trình duyệt web không thể ghi đè trực tiếp file trong thư mục trên máy bạn. Bấm Tải Xuống File Sạch sẽ lưu một bản sao đã làm sạch riêng biệt trong khi file gốc của bạn vẫn nguyên vẹn.',
      },
      {
        question: 'Tôi có thể kiểm tra lại đầu ra đã làm sạch bằng trình kiểm tra độc lập không?',
        answer:
          'Có, thả bất kỳ file đã tải về nào vào Trình Xem Metadata Ảnh của chúng tôi ngay sau khi lưu. Nó phân tích header nhị phân thô một cách độc lập để bạn xác nhận không còn tọa độ GPS hay thẻ máy ảnh nào.',
      },
      {
        question: 'Trình dọn có hoạt động trên điện thoại trước khi đăng lên sàn không?',
        answer:
          'Có, mở trang trong Safari iOS hoặc Chrome Android và chọn ảnh trực tiếp từ cuộn camera điện thoại. Khi huy hiệu xác minh màu xanh lá xuất hiện, bạn có thể tải bản sao sạch thẳng về thiết bị.',
      },
      {
        question: 'Tôi có thể dán ảnh từ clipboard vào công cụ Xóa Metadata Ảnh không?',
        answer:
          'Có, nhấn Ctrl+V (hoặc Cmd+V trên máy Mac) để thả ảnh đã sao chép hoặc ảnh chụp màn hình thẳng vào hàng đợi tải lên. Công cụ sẽ tự động xóa mọi chunk còn sót và chuẩn bị sẵn file tải sạch.',
      },
      {
        question: 'Tại sao nút Làm Sạch Lại Tất Cả tồn tại trong khi việc làm sạch bắt đầu tự động?',
        answer:
          'File được làm sạch ngay khi thả vào theo cài đặt đang hoạt động của bạn. Nếu sau đó bạn đổi Phương Pháp Xóa, chuyển Định Dạng Xuất hoặc chỉnh Chất Lượng Mã Hóa Lại, bấm Làm Sạch Lại Tất Cả sẽ áp dụng các tùy chọn đã cập nhật cho toàn bộ loạt ảnh.',
      },
      {
        question: 'Có giới hạn số lượng file hoặc chi phí nào để xóa dữ liệu EXIF không?',
        answer:
          'Mỗi file tải lên tối đa 20 MB để bộ nhớ trình duyệt luôn mượt. Ngoài giới hạn từng file đó, bạn có thể xóa metadata ảnh của không giới hạn ảnh mà không có watermark, đăng ký hay phí.',
      },
    ],
    relatedSlugs: ['/image-metadata-viewer', '/', '/image-converter', '/image-to-pdf'],
  },
  {
    slug: '/favicon-generator',
    name: 'Tạo Favicon',
    shortDescription: 'Tạo favicon.ico, Apple Touch, Android và file manifest.',
    category: 'create',
    seoTitle: 'Tạo Favicon Miễn Phí – Tạo favicon.ico & Icon Ứng Dụng',
    seoDescription: 'Dùng công cụ tạo favicon miễn phí để tạo favicon.ico nhiều kích thước, Apple Touch, icon Android Chrome, site.webmanifest và đoạn HTML ngay trong trình duyệt.',
    h1: 'Tạo Favicon Online Miễn Phí',
    subtitle:
      'Được thiết kế cho lập trình viên web, founder startup, blogger và nhà làm sản phẩm độc lập, công cụ tạo favicon miễn phí này biến bất kỳ logo hay đồ họa nào thành bộ icon sẵn sàng triển khai cho trình duyệt và điện thoại. Xem trước icon trên tab sáng và tối, chỉnh khoảng đệm, bo góc và màu nền lót, rồi tải mọi thứ về ngay trên máy mà không tải lên máy chủ.',
    howToSteps: [
      {
        title: 'Tải lên logo hoặc đồ họa icon của bạn',
        description:
          'Thả ảnh PNG, SVG, JPG, WebP hoặc HEIC tối đa 20 MB (ảnh PNG hoặc SVG vuông là tốt nhất) hoặc dán từ clipboard bằng Ctrl+V.',
      },
      {
        title: 'Chọn Màu Nền Lót',
        description:
          'Giữ ô Trong Suốt được bật để có icon cắt gọn sạch, hoặc bỏ chọn để chọn màu nền đặc theo mã hex.',
      },
      {
        title: 'Chỉnh Khoảng Đệm và Bo Góc',
        description:
          'Trượt Khoảng Đệm từ 0% đến 25% để tạo khoảng thở và kéo Bo Góc từ 0% đến 50% để có hình vuông bo tròn hoặc huy hiệu tròn.',
      },
      {
        title: 'Xem trước tab trình duyệt',
        description:
          'Kiểm tra bản xem trước trực tiếp ở tỉ lệ 16×16 hiển thị trong cả tab Trang Web Của Tôi sáng và tab Chế Độ Tối mô phỏng.',
      },
      {
        title: 'Tải từng file riêng lẻ hoặc cả gói ZIP',
        description:
          'Lưu từng kích thước icon riêng từ các thẻ đã tạo hoặc bấm Tải Tất Cả (ZIP) để tải file favicon_package_compressmypic.zip.',
      },
      {
        title: 'Sao chép đoạn HTML head',
        description:
          'Bấm Sao Chép HTML trong bảng Đoạn <head> HTML tối và dán các thẻ <link> trực tiếp vào template website của bạn.',
      },
    ],
    features: [
      {
        title: 'favicon.ico nhiều kích thước thật',
        description:
          'Tạo file .ico nhị phân thật nhúng các khung sắc nét 16×16, 32×32 và 48×48 — không phải file PNG đổi tên.',
      },
      {
        title: 'Bộ icon web & di động đầy đủ',
        description:
          'Tạo icon 16×16, 32×32, 48×48, 180×180 (Apple Touch), 192×192 và 512×512 (Android/PWA) cộng thêm site.webmanifest.',
      },
      {
        title: 'Xem trước tab trình duyệt trực tiếp',
        description:
          'Xem trước icon trông như thế nào ở tỉ lệ tab trình duyệt thật trên nền sáng và tối trước khi tải về.',
      },
      {
        title: 'Đoạn HTML sẵn sàng dán',
        description:
          'Sao chép các thẻ <link> HTML sạch trực tiếp vào <head> của bạn chỉ bằng một cú nhấp chuột.',
      },
    ],
    faqs: [
      {
        question: 'File ZIP favicon chứa chính xác những kích thước icon và file nào?',
        answer:
          'Tải ZIP sẽ gói một favicon.ico nhiều khung (16×16, 32×32 và 48×48), các file favicon-16x16.png, favicon-32x32.png và favicon-48x48.png riêng lẻ, apple-touch-icon.png (180×180), android-chrome-192x192.png và android-chrome-512x512.png. Nó cũng tạo một file JSON site.webmanifest sẵn sàng tải lên.',
      },
      {
        question: 'favicon.ico có phải file nhị phân ICO nhiều khung thật hay chỉ là PNG đổi tên?',
        answer:
          'Công cụ tạo favicon của chúng tôi ghi một container nhị phân ICONDIR Windows thật với các mục thư mục PNG RGBA 32-bit riêng biệt cho khung 16×16, 32×32 và 48×48. Trình duyệt desktop cũ và shortcut Windows tự chọn khung sắc nét phù hợp nhất mà không bị lỗi hiển thị.',
      },
      {
        question: 'Kích thước và định dạng nguồn nào tốt nhất cho icon tab trình duyệt sắc nét?',
        answer:
          'Bắt đầu với file PNG vuông sạch hoặc SVG tự chứa ở kích thước 512×512 pixel trở lên để thu nhỏ cho ra cạnh sắc nét ở cả 16×16 lẫn 512×512. Nguồn độ phân giải thấp kéo giãn lên icon splash PWA 512×512 có thể trông mềm.',
      },
      {
        question: 'Điều gì xảy ra nếu tôi tải lên logo hình chữ nhật thay vì hình vuông?',
        answer:
          'Đồ họa chữ nhật được căn giữa theo tỉ lệ bên trong mỗi canvas icon vuông mà không kéo giãn hay bóp méo dấu ấn thương hiệu của bạn. Khoảng trống phía trên/dưới hoặc trái/phải sẽ được lấp bằng độ trong suốt hoặc màu nền bạn chọn.',
      },
      {
        question: 'Tại sao công cụ hiển thị cả bản xem trước tab trình duyệt sáng và tối?',
        answer:
          'Icon tối có thể biến mất trên tab trình duyệt Chế Độ Tối, trong khi logo trắng biến mất trên giao diện trình duyệt sáng. Xem cả tab Trang Web Của Tôi sáng và tab Chế Độ Tối cạnh nhau giúp bạn thêm khoảng đệm hoặc nền đặc trước khi triển khai.',
      },
      {
        question: 'Khoảng Đệm và Bo Góc hoạt động cùng nhau như thế nào trên icon ứng dụng?',
        answer:
          'Khoảng Đệm (0% đến 25%) thu nhỏ logo hơi vào trong khỏi ranh giới hình vuông để góc bo tròn không cắt cạnh đồ họa. Tăng Bo Góc lên khoảng 20% tạo hình vuông bo tròn kiểu iOS, còn 50% cắt toàn bộ icon thành hình tròn hoàn chỉnh.',
      },
      {
        question: 'Apple Touch Icon có nên dùng nền đặc thay vì trong suốt không?',
        answer:
          'Safari iOS thường hợp nhất vùng trong suốt của apple-touch-icon.png lên nền đen khi người dùng ghim trang web vào Màn Hình Chính. Nếu logo của bạn dùng hình tối, hãy bỏ chọn Trong Suốt trong mục Màu Nền Lót và chọn trắng hoặc màu thương hiệu của bạn.',
      },
      {
        question: 'File site.webmanifest được tạo chứa những gì?',
        answer:
          'File JSON manifest khai báo đường dẫn tới /android-chrome-192x192.png và /android-chrome-512x512.png, đặt display thành standalone, và đồng bộ theme_color và background_color với Màu Nền Lót bạn chọn. Bạn có thể mở nó trong bất kỳ trình soạn thảo văn bản nào để tùy chỉnh tên trang.',
      },
      {
        question: 'Tôi nên tải các file favicon đã tạo lên đâu trên website?',
        answer:
          'Đặt favicon.ico, mọi icon PNG đã tạo và site.webmanifest trong thư mục public gốc của trang để các URL như /favicon.ico và /apple-touch-icon.png hoạt động sạch. Sau đó dán Đoạn <head> HTML đã sao chép vào trong phần <head> chính của HTML.',
      },
      {
        question: 'Tôi có thể chỉ tải favicon.ico hoặc apple-touch-icon.png mà không cần ZIP không?',
        answer:
          'Có, mỗi kích thước icon xuất hiện dưới dạng thẻ xem trước riêng hiển thị kích thước chính xác và dung lượng byte kèm nút Tải Xuống riêng. Bạn có thể lấy từng tài nguyên riêng lẻ hoặc bấm Tải Tất Cả (ZIP) để lấy trọn gói.',
      },
      {
        question: 'Tải lên logo SVG có tạo icon 16×16 sắc nét không?',
        answer:
          'Có, vector SVG nội tuyến raster hóa trực tiếp trong trình duyệt lên từng lưới pixel đích từ 16×16 đến 512×512. Chỉ cần đảm bảo SVG của bạn dùng hình và màu nhúng sẵn thay vì ảnh liên kết ngoài hoặc font web từ xa.',
      },
      {
        question: 'Tôi có thể chuyển ảnh HEIC của iPhone hoặc đồ họa WebP thành favicon trang web không?',
        answer:
          'Có, vùng thả chấp nhận file PNG, SVG, JPG, WebP, GIF, BMP và HEIC/HEIF của iPhone tối đa 20 MB. Ảnh HEIC được giải mã ngay trong trình duyệt trước khi bộ icon được tạo.',
      },
      {
        question: 'Logo thương hiệu hoặc icon ứng dụng chưa phát hành có bị gửi tới máy chủ ngoài không?',
        answer:
          'Không, thay đổi kích thước bằng Canvas, đóng gói ICO nhị phân, tạo manifest và nén ZIP đều chạy hoàn toàn trong tab trình duyệt của chính bạn. Dấu ấn thương hiệu chưa phát hành của bạn không bao giờ đi qua bất kỳ mạng nào.',
      },
      {
        question: 'Tại sao favicon cũ vẫn hiện trong Chrome sau khi tôi tải file mới lên?',
        answer:
          'Trình duyệt lưu cache favicon rất mạnh trong nhiều ngày, ngay cả sau khi bạn thay file trên máy chủ. Làm mới mạnh bằng Ctrl+Shift+R (hoặc mở cửa sổ Ẩn Danh) sẽ buộc trình duyệt tải favicon.ico và icon PNG mới.',
      },
      {
        question: 'Thay đổi Khoảng Đệm, Bo Góc hoặc Màu Nền Lót có cập nhật mọi kích thước cùng lúc không?',
        answer:
          'Có, di chuyển bất kỳ thanh trượt nào hoặc bật/tắt Màu Nền Lót sẽ lập tức tạo lại favicon.ico, cả sáu kích thước icon PNG, bản xem trước tab sáng/tối và site.webmanifest cùng nhau. Bạn không bao giờ cần tải lại logo giữa các lần chỉnh.',
      },
      {
        question: 'Đoạn <head> HTML có hoạt động với React, Next.js hoặc HTML thuần không?',
        answer:
          'Có, các thẻ chuẩn <link rel="icon">, <link rel="apple-touch-icon"> và <link rel="manifest"> hoạt động trên trang HTML tĩnh, header WordPress, index.html của Vite/React và template phía máy chủ. Chỉ cần dán chúng vào trong <head> và đặt các file ở thư mục gốc web.',
      },
      {
        question: 'Tôi có thể tạo favicon hình tròn từ avatar hoặc huy hiệu vuông không?',
        answer:
          'Có, giữ ô Trong Suốt được chọn trong mục Màu Nền Lót và kéo Bo Góc lên tới 50%. Mọi icon PNG và các khung favicon.ico nhúng sẽ cắt gọn thành hình tròn mượt với khử răng cưa.',
      },
      {
        question: 'Tại sao cần 192×192 và 512×512 bên cạnh favicon.ico?',
        answer:
          'Chrome Android hiện đại và lời nhắc cài đặt Progressive Web App cần icon màn hình chính 192×192 và icon splash 512×512 được khai báo trong site.webmanifest. Có cả hai đảm bảo shortcut di động trông sắc nét bên cạnh các tab trình duyệt desktop cổ điển.',
      },
      {
        question: 'Tôi có thể dán logo trực tiếp từ clipboard vào công cụ favicon không?',
        answer:
          'Có, sao chép ảnh hoặc ảnh chụp màn hình vào clipboard rồi nhấn Ctrl+V (hoặc Cmd+V trên máy Mac) trên trang. Ảnh sẽ lập tức vào công cụ tạo và hiển thị đầy đủ bộ icon.',
      },
      {
        question: 'Có watermark, yêu cầu tài khoản hay chi phí nào khi tạo gói favicon không?',
        answer:
          'Không, công cụ tạo favicon hoàn toàn miễn phí cho website cá nhân và thương mại, không watermark, không tài khoản, không giới hạn số lần tạo hằng ngày. Chỉ áp dụng giới hạn file nguồn 20 MB để bộ nhớ trình duyệt luôn nhanh.',
      },
    ],
    relatedSlugs: ['/image-resizer', '/image-converter', '/image-color-picker', '/'],
  },
  {
    slug: '/image-color-picker',
    name: 'Lấy Mã Màu Từ Ảnh',
    shortDescription: 'Lấy màu pixel chính xác từ bất kỳ ảnh nào theo HEX, RGB, HSL và CMYK.',
    category: 'developer',
    seoTitle: 'Lấy Mã Màu Từ Ảnh – Kính Lúp 11×11, HEX & RGB Chính Xác',
    seoDescription: 'Lấy mẫu từng pixel chính xác với kính lúp phóng đại 11×11. Đọc tọa độ pixel trực tiếp với giá trị HEX, RGB, HSL và CMYK theo từng pixel, và xuất biến CSS ngay trên máy.',
    h1: 'Công Cụ Lấy Mã Màu Từ Ảnh Online Miễn Phí',
    subtitle:
      'Chỉ vào đúng một pixel — không phải giá trị trung bình, không phải một vùng — và đọc màu thật của nó bằng công cụ lấy mã màu từ ảnh chạy trong trình duyệt của chúng tôi. Di chuột để xem kính lúp phóng đại 11×11 với tọa độ pixel (x, y) trực tiếp và giá trị HEX, bấm vào pixel để lưu mẫu màu, và xuất thuộc tính tùy chỉnh CSS mà không cần tải file lên. Được tạo cho nhà thiết kế web, lập trình viên frontend, stylist thương hiệu và họa sĩ minh họa làm việc với ảnh, logo và ảnh chụp màn hình.',
    howToSteps: [
      {
        title: 'Tải lên ảnh hoặc dán ảnh chụp màn hình',
        description:
          'Thả file JPG, PNG, WebP, HEIC, SVG, BMP hoặc GIF tối đa 20 MB, hoặc nhấn Ctrl+V để dán ảnh chụp màn hình thẳng từ clipboard.',
      },
      {
        title: 'Di chuột với kính lúp Kiểm Tra Pixel trực tiếp',
        description:
          'Di con trỏ qua canvas ảnh để xem tọa độ pixel (x, y) chính xác và lưới phóng to 11×11 với dấu thập cập nhật mẫu màu theo thời gian thực.',
      },
      {
        title: 'Bấm vào pixel để ghim và tạo mẫu màu',
        description:
          'Bấm vào bất kỳ điểm nào trên canvas để khóa màu của nó vào Trình Kiểm Tra Pixel và thêm vào Mẫu Màu Đã Chọn (tối đa 24 màu riêng biệt).',
      },
      {
        title: 'Sao chép giá trị HEX, RGB, HSL hoặc CMYK',
        description:
          'Bấm biểu tượng sao chép bên cạnh HEX, RGB, HSL hoặc CMYK trong Trình Kiểm Tra Pixel — hoặc bấm bất kỳ viên mẫu màu đã lưu nào — để sao chép mã ngay lập tức.',
      },
      {
        title: 'Xuất bảng màu dưới dạng biến CSS',
        description:
          'Bấm Xuất CSS trong thẻ Mẫu Màu Đã Chọn để tải file picked-colors.css với các thuộc tính tùy chỉnh :root sạch, sẵn sàng cho stylesheet của bạn.',
      },
    ],
    features: [
      {
        title: 'Kính lúp pixel phóng đại trực tiếp',
        description:
          'Lưới thập phóng to giúp nhắm đúng pixel chính xác trên cả chuột máy tính và màn hình cảm ứng di động.',
      },
      {
        title: '4 định dạng màu tức thì',
        description:
          'Hiển thị đồng thời các biểu diễn HEX, RGB, HSL và CMYK cho lập trình viên web và nhà thiết kế đồ họa.',
      },
      {
        title: 'Lịch sử mẫu màu đã lưu và xuất file',
        description:
          'Bấm nhiều vùng trên ảnh để tạo danh sách mẫu tùy chỉnh và sao chép dưới dạng thuộc tính tùy chỉnh CSS hoặc JSON.',
      },
      {
        title: 'Lấy mẫu Canvas 100% ngay trên máy',
        description:
          'Giá trị pixel được đọc ngay trên máy qua HTML5 Canvas getImageData — thiết kế và ảnh chụp màn hình của bạn hoàn toàn riêng tư.',
      },
    ],
    faqs: [
      {
        question: 'Công cụ lấy mã màu này lấy mẫu từ file độ phân giải đầy đủ hay bản xem trước đã thu nhỏ?',
        answer:
          'Mỗi lần di chuột và bấm chuột đều ánh xạ tọa độ con trỏ theo tỉ lệ lên một Canvas HTML5 ngoài màn hình có độ phân giải đầy đủ khớp với naturalWidth × naturalHeight thật của ảnh. Ngay cả khi ảnh 4K lớn hiển thị thu nhỏ cho vừa màn hình, getImageData vẫn đọc đúng pixel gốc bên dưới.',
      },
      {
        question: 'Kính lúp phóng đại 11×11 giúp nhắm đường kẻ mỏng hoặc icon nhỏ như thế nào?',
        answer:
          'Di chuyển qua canvas sẽ cập nhật kính lúp phóng to 88×88 theo kiểu nearest-neighbor, hiển thị lưới pixel 11×11 quanh con trỏ với dấu thập viền đôi trên đúng pixel đang hoạt động. Nhờ đó bạn tránh vô tình lấy mẫu pixel viền khử răng cưa bên cạnh các cạnh sắc nét.',
      },
      {
        question: 'Những định dạng mã màu nào được tính tự động cho mỗi pixel đã chọn?',
        answer:
          'Trình Kiểm Tra Pixel chuyển đổi bộ ba RGB đã lấy mẫu đồng thời thành HEX viết hoa (#RRGGBB), rgb(r, g, b) của CSS, hsl(h, s%, l%) của CSS và giá trị CMYK theo phần trăm. Mỗi hàng có nút sao chép một cú nhấp chuột riêng.',
      },
      {
        question: 'Tôi có thể thu thập bao nhiêu màu trong Mẫu Màu Đã Chọn cùng lúc?',
        answer:
          'Bấm vào các phần khác nhau của ảnh sẽ lưu tối đa 24 mẫu HEX riêng biệt theo thứ tự thời gian (tự động bỏ qua trùng lặp). Bấm bất kỳ viên mẫu đã lưu nào sẽ khôi phục nó trong trình kiểm tra và sao chép mã HEX thẳng vào clipboard.',
      },
      {
        question: 'Nút Xuất CSS tải về những gì?',
        answer:
          'Bấm Xuất CSS sẽ tạo một stylesheet picked-colors.css chứa khối :root với các thuộc tính tùy chỉnh đánh số (--color-1, --color-2, v.v.) và ghi chú RGB nội tuyến cho mọi màu trong Mẫu Màu Đã Chọn. Nếu bạn chưa bấm nhiều pixel, nó sẽ xuất pixel hiện đang chọn của bạn.',
      },
      {
        question: 'Tại sao một màu đã hiển thị ngay khi ảnh vừa tải lên?',
        answer:
          'Khi tải lần đầu, trình kiểm tra tự động lấy mẫu đúng pixel trung tâm của ảnh đã tải lên để bạn lập tức thấy giá trị HEX, RGB, HSL và CMYK trực tiếp trước khi di chuột. Di chuyển hoặc bấm chuột ở bất cứ đâu sẽ cập nhật các giá trị đó ngay lập tức.',
      },
      {
        question: 'Tôi có thể dán ảnh chụp màn hình trực tiếp bằng Ctrl+V để lấy màu giao diện không?',
        answer:
          'Có, sao chép đoạn trang web, giao diện ứng dụng hoặc mockup thiết kế vào clipboard rồi nhấn Ctrl+V (hoặc Cmd+V trên máy Mac) khi vùng tải lên đang mở. Ảnh sẽ tải thẳng lên canvas lấy mẫu mà không cần lưu file tạm trước.',
      },
      {
        question: 'Tôi có thể kiểm tra những loại file nào bằng công cụ lấy màu?',
        answer:
          'Bạn có thể tải ảnh JPG, PNG, WebP, HEIC/HEIF của iPhone, SVG, BMP và GIF tối đa 20 MB mỗi file. Vector SVG raster hóa sạch lên Canvas để bạn lấy mẫu đúng màu tô đã hiển thị trực tiếp.',
      },
      {
        question: 'Giá trị CMYK hiển thị trong Trình Kiểm Tra Pixel chính xác đến mức nào?',
        answer:
          'Phần trăm CMYK được tính toán từ giá trị pixel sRGB bằng công thức chuyển đổi RGB sang CMYK chuẩn. Với in offset thương mại cần hồ sơ ICC nghiêm ngặt của máy in, hãy coi chúng là điểm khởi đầu hữu ích thay vì bằng chứng mực đã hiệu chuẩn.',
      },
      {
        question: 'Điều gì xảy ra nếu tôi lấy mẫu vùng trong suốt trên logo PNG?',
        answer:
          'HTML5 Canvas đọc kênh đỏ, xanh lá và xanh dương tại tọa độ đó — pixel Canvas hoàn toàn trong suốt mặc định là 0, 0, 0 (#000000) khi các kênh RGB trống. Hãy lấy mẫu trực tiếp trên nét hoặc hình đặc để kiểm tra màu tác phẩm thật của bạn.',
      },
      {
        question: 'Mockup giao diện riêng tư hoặc tài nguyên thương hiệu của khách hàng có bị tải lên máy chủ nào không?',
        answer:
          'Không, việc đọc pixel qua Canvas getImageData chạy hoàn toàn trong bộ nhớ trình duyệt trên máy bạn. Thiết kế chưa phát hành, ảnh chụp màn hình bí mật và ảnh cá nhân không bao giờ rời khỏi máy tính hoặc điện thoại của bạn.',
      },
      {
        question: 'Công cụ lấy màu có hoạt động trên Chrome, Safari và Firefox mà không cần tiện ích trình duyệt không?',
        answer:
          'Có, không giống API EyeDropper thử nghiệm của trình duyệt chỉ hoạt động trên Chromium desktop, trình lấy mẫu HTML5 Canvas của chúng tôi chạy trên Firefox, Safari, Edge và Chrome. Không cần tiện ích trình duyệt, quyền đặc biệt hay plugin nào.',
      },
      {
        question: 'Làm sao chuyển sang ảnh khác sau khi đã chọn mẫu màu?',
        answer:
          'Bấm nút Ảnh Mới ở góc trên bên phải của tiêu đề canvas bất cứ lúc nào. Thao tác này xóa ảnh đang hoạt động, đặt lại danh sách Mẫu Màu Đã Chọn sạch sẽ và đưa bạn về vùng tải lên.',
      },
      {
        question: 'Tôi có thể kiểm tra tọa độ pixel chính xác cùng với giá trị màu không?',
        answer:
          'Có, tiêu đề Trình Kiểm Tra Pixel hiển thị tọa độ x và y trực tiếp (ví dụ: x:412, y:198) bằng font monospace khi bạn di chuột qua canvas. Điều đó giúp bạn khớp các pixel cụ thể một cách nhất quán trên các tài nguyên lớn.',
      },
      {
        question: 'Tại sao hai pixel kề nhau trong cùng một vùng phẳng của ảnh JPEG lại hiện mã HEX khác nhau?',
        answer:
          'Nén JPEG dùng lấy mẫu con chroma và biến đổi khối 8×8, tạo ra chênh lệch nhẹ giữa các pixel kề nhau trên bề mặt phẳng, vì vậy hai pixel lân cận có thể khác nhau vài ký tự HEX. Dùng kính lúp 11×11, hãy chọn một pixel đại diện sạch ở giữa vùng phẳng, tránh xa các cạnh đã nén.',
      },
      {
        question: 'Tôi có thể chạm lấy màu chính xác trên iPad hoặc điện thoại cảm ứng không?',
        answer:
          'Có, chạm vào bất kỳ vùng nào của canvas trên di động sẽ kích hoạt trình lấy mẫu tại vị trí chạm, ghim mẫu màu, cập nhật cả bốn định dạng màu và thêm mã HEX vào Mẫu Màu Đã Chọn. Bạn cũng có thể chạm bất kỳ viên mẫu đã lưu nào để sao chép.',
      },
      {
        question: 'Kính lúp 11×11 lấy trung bình các pixel lân cận hay đọc đúng một pixel?',
        answer:
          'Nó đọc đúng một pixel duy nhất: pixel trung tâm dưới dấu thập. Lưới 11×11 chỉ là chế độ xem phóng đại để bạn thấy pixel nào đang hoạt động và tránh pixel viền khử răng cưa. Giá trị HEX, RGB, HSL và CMYK luôn mô tả đúng pixel trung tâm đó, không bao giờ là giá trị trung bình của lưới.',
      },
      {
        question: 'Tại sao nên dùng HSL cùng với HEX và RGB khi tạo kiểu cho website?',
        answer:
          'HSL (Sắc Độ, Độ Bão Hòa, Độ Sáng) giúp lập trình viên CSS dễ dàng tạo trạng thái hover sáng hơn hoặc viền tối hơn bằng cách chỉ điều chỉnh phần trăm độ sáng trong khi giữ nguyên sắc độ. Có cả HEX và HSL cạnh nhau giúp tiết kiệm thao tác chuyển đổi thủ công.',
      },
      {
        question: 'Dung lượng file ảnh tối đa cho phép trong công cụ lấy màu là bao nhiêu?',
        answer:
          'Mỗi ảnh tải lên tối đa 20 MB. Giới hạn này dễ dàng xử lý ảnh máy ảnh nhiều megapixel, ảnh PNG xuất từ Figma lớn và ảnh chụp màn hình toàn trang.',
      },
      {
        question: 'Khi nào nên dùng công cụ lấy màu này thay vì Trình Trích Xuất Bảng Màu?',
        answer:
          'Dùng công cụ lấy màu khi bạn cần một màu chính xác — một mã HEX thương hiệu từ logo, sắc độ chính xác của một nút, một pixel tại tọa độ đã biết. Cần cả một bảng màu thay vì một màu? Hãy dùng Trình Trích Xuất Bảng Màu Ảnh của chúng tôi, công cụ gom toàn bộ ảnh thành 3 đến 12 màu chủ đạo. Công cụ lấy màu trả lời câu hỏi "pixel này có màu gì"; trình trích xuất trả lời "bảng màu của ảnh này là gì".',
      },
    ],
    relatedSlugs: ['/image-color-palette-extractor', '/favicon-generator', '/image-dimensions-checker', '/image-resizer'],
  },
  {
    slug: '/image-dimensions-checker',
    name: 'Kiểm Tra Kích Thước Ảnh',
    shortDescription: 'Kiểm tra chiều rộng, chiều cao, tỉ lệ khung hình, megapixel và kích thước in.',
    category: 'developer',
    seoTitle: 'Kiểm Tra Kích Thước Ảnh – Kích Thước Pixel & Tỉ Lệ Khung Hình',
    seoDescription: 'Dùng công cụ kiểm tra kích thước ảnh miễn phí để xem chiều rộng, chiều cao pixel, tỉ lệ khung hình, megapixel, kênh alpha và kích thước in 300 DPI theo lô ngay trong trình duyệt.',
    h1: 'Công Cụ Kiểm Tra Kích Thước Ảnh & Tỉ Lệ',
    subtitle:
      'Lý tưởng cho quản lý thương mại điện tử, người mua quảng cáo, lập trình viên giao diện và nhà thiết kế in ấn, công cụ kiểm tra kích thước ảnh của chúng tôi đọc chiều rộng, chiều cao pixel, tỉ lệ khung hình, megapixel và kích thước in 300 DPI chỉ trong vài giây. Thả cả loạt tài nguyên, xác thực yêu cầu pixel tối thiểu, và xuất báo cáo CSV hoặc JSON sạch một cách riêng tư trên thiết bị của bạn.',
    howToSteps: [
      {
        title: 'Thả hoặc chọn một hoặc nhiều ảnh',
        description:
          'Tải lên file JPG, PNG, WebP, HEIC, SVG, BMP, GIF hoặc AVIF tối đa 20 MB mỗi file vào vùng thả, hoặc dán bằng Ctrl+V.',
      },
      {
        title: 'Kiểm tra kích thước pixel và tỉ lệ khung hình',
        description:
          'Xem lại Chiều Rộng × Chiều Cao (px) chính xác, Megapixels, Hướng (Ngang, Dọc, Vuông) và Tỉ Lệ Khung Hình rút gọn/thập phân trong bảng.',
      },
      {
        title: 'Xác minh trọng lượng file, định dạng và kênh Alpha',
        description:
          'Kiểm tra giá trị cột Kích Thước / Định Dạng để phát hiện loại container thật, số byte, và liệu có pixel Alpha trong suốt hay không.',
      },
      {
        title: 'Kiểm tra kích thước in ước tính ở 300 DPI',
        description:
          'Xem cột In @300 DPI để biết kích thước in vật lý sắc nét tối đa theo inch (Rộng" × Cao") trước khi tải lên phòng in.',
      },
      {
        title: 'Chạy kiểm tra thông số tối thiểu và xuất CSV hoặc JSON',
        description:
          'Nhập quy tắc Kiểm Tra Chiều Rộng Tối Thiểu (px) và Kiểm Tra Chiều Cao Tối Thiểu (px) tùy chọn để gắn cờ Đạt hoặc Dưới Mức Tối Thiểu, rồi bấm Xuất CSV hoặc Xuất JSON.',
      },
    ],
    features: [
      {
        title: 'Kiểm tra kích thước theo lô',
        description:
          'Kiểm tra hàng chục tài nguyên cùng lúc — lý tưởng để xác minh ảnh sản phẩm của cửa hàng, mẫu quảng cáo hoặc ảnh chụp màn hình ứng dụng.',
      },
      {
        title: 'Tỉ lệ khung hình chính xác và phổ biến',
        description:
          'Tính cả tỉ lệ rút gọn theo toán học và khớp các chuẩn phổ biến như 16:9, 4:3, 1:1 và 4:5.',
      },
      {
        title: 'Bộ xác thực tối thiểu/tối đa tùy chỉnh',
        description:
          'Đặt quy tắc chiều rộng/chiều cao tối thiểu hoặc tối đa tùy chọn để lập tức làm nổi bật ảnh đạt hoặc không đạt thông số của bạn.',
      },
      {
        title: 'Xuất CSV & JSON',
        description:
          'Tải về bảng tính CSV sạch hoặc bản tóm tắt JSON về mọi kích thước ảnh đã kiểm tra.',
      },
    ],
    faqs: [
      {
        question: 'Chạy công cụ kiểm tra kích thước ảnh này có làm thay đổi hay lưu lại ảnh của tôi không?',
        answer:
          'Không, công cụ chỉ đọc kích thước pixel tự nhiên, byte file và thuộc tính container hoàn toàn trong bộ nhớ trình duyệt. Không có gì bị nén, cắt, ghi đè hay tải lên máy chủ ngoài.',
      },
      {
        question: 'Tôi có thể kiểm tra những định dạng file ảnh nào theo lô?',
        answer:
          'Bạn có thể thả ảnh JPG, PNG, WebP, HEIC/HEIF của iPhone, SVG, BMP, GIF và AVIF được trình duyệt hỗ trợ, tối đa 20 MB mỗi file. Các định dạng trộn lẫn có thể thả cùng nhau trong cùng một bảng lô.',
      },
      {
        question: 'Bộ xác thực Kiểm Tra Chiều Rộng Tối Thiểu và Kiểm Tra Chiều Cao Tối Thiểu hoạt động thế nào?',
        answer:
          'Gõ ngưỡng pixel vào ô Kiểm Tra Chiều Rộng Tối Thiểu (px) hoặc Kiểm Tra Chiều Cao Tối Thiểu (px) sẽ thêm một cột Kiểm Tra Thông Số trực tiếp vào bảng. Mỗi hàng lập tức hiển thị huy hiệu Đạt màu xanh lá hoặc cảnh báo Dưới Mức Tối Thiểu màu hổ phách để mẫu sáng tạo thiếu kích thước nổi bật nhanh.',
      },
      {
        question: 'Tỉ lệ khung hình phổ biến như 16:9 hoặc 4:5 được khớp thế nào so với tỉ lệ chính xác?',
        answer:
          'Đầu tiên, máy tính tính tỉ lệ rộng:cao đã rút gọn theo toán học qua ước chung lớn nhất và tỉ lệ thập phân (ví dụ: 1,78:1). Khi ảnh khớp hoặc rất gần các tỉ lệ khung chuẩn như 16:9, 4:3, 3:2, 1:1, 4:5 hoặc 9:16, công cụ sẽ hiển thị trực tiếp nhãn dễ nhận biết đó.',
      },
      {
        question: 'Kích thước In @300 DPI được tính từ pixel như thế nào?',
        answer:
          'Chiều rộng và chiều cao in theo inch được tính bằng cách chia chiều rộng và chiều cao pixel cho 300 pixel mỗi inch (ví dụ: 3000 × 2400 px bằng 10,0" × 8,0" ở 300 DPI). File JSON đã xuất cũng giữ lại kích thước in tương đương ở tỉ lệ màn hình 72 DPI.',
      },
      {
        question: 'Bấm Xuất CSV sẽ gồm những cột nào?',
        answer:
          'Bấm Xuất CSV sẽ tải file image-dimensions-report.csv với mười cột có cấu trúc: Tên File, Chiều Rộng (px), Chiều Cao (px), Hướng, Tỉ Lệ Khung Hình, Megapixels, Dung Lượng File (Byte), Định Dạng, Độ Trong Suốt và Kích Thước In @300DPI. Tên file chứa dấu phẩy hoặc dấu ngoặc kép được thoát CSV đúng chuẩn.',
      },
      {
        question: 'Xuất JSON lưu gì so với CSV?',
        answer:
          'Xuất JSON ghi một mảng image-dimensions-report.json đã định dạng chứa các đối tượng metadata sạch cho mọi hàng đã kiểm tra (bỏ qua URL xem trước nội bộ và ID hàng tạm). Lập trình viên và script QA có thể phân tích trực tiếp vào các bước kiểm tra tài nguyên tự động.',
      },
      {
        question: 'Công cụ phát hiện PNG hoặc WebP thực sự có độ trong suốt Alpha như thế nào?',
        answer:
          'Thay vì đoán từ phần mở rộng file, bộ tải sẽ quét byte alpha của pixel trên Canvas để xác minh liệu có pixel nào có độ mờ dưới 255 hay không. Ảnh có vùng trong suốt thật sẽ hiện thẻ Alpha ngay dưới định dạng của nó.',
      },
      {
        question: 'Tôi có thể thêm thư mục hoặc lô khác vào bảng kích thước hiện có không?',
        answer:
          'Có, thả hoặc chọn thêm ảnh sẽ thêm hàng mới ngay vào cuối bảng hiện tại mà không xóa các mục trước đó. Bấm Xóa bất cứ khi nào bạn muốn đặt lại bảng cho dự án mới.',
      },
      {
        question: 'Tại sao ảnh iPhone hiển thị Ngang hay Dọc chính xác ở đây?',
        answer:
          'Trình duyệt hiện đại tự động chuẩn hóa xoay EXIF của máy ảnh khi giải mã ảnh JPEG và HEIC thành kích thước tự nhiên. Điều đó đảm bảo ảnh chụp dọc bằng điện thoại báo đúng hướng Dọc và giới hạn pixel cao.',
      },
      {
        question: 'Megapixel (MP) được tính như thế nào cho ảnh của tôi?',
        answer:
          'Megapixel bằng (Chiều Rộng × Chiều Cao) chia cho 1.000.000, làm tròn đến hai chữ số thập phân (ví dụ: 1920 × 1080 = 2,07 MP). Cách này khớp với báo cáo cảm biến máy ảnh và sàn in chuẩn.',
      },
      {
        question: 'Điều gì xảy ra nếu tôi tải lên file có phần mở rộng gây hiểu lầm, như WebP đặt tên .jpg?',
        answer:
          'Trình kiểm tra của chúng tôi đọc loại nhị phân gốc được xác định trong quá trình giải mã thay vì tin mù hậu tố tên file. Bạn sẽ thấy định dạng thật đã phát hiện cùng với trọng lượng byte chính xác trong cột Kích Thước / Định Dạng.',
      },
      {
        question: 'Tôi có thể kiểm tra kích thước gốc của đồ họa SVG không?',
        answer:
          'Có, file SVG tự chứa có thuộc tính width/height hoặc viewBox sẽ giải mã trực tiếp trong trình duyệt. Bảng kích thước đọc chiều rộng, chiều cao pixel đã hiển thị và tỉ lệ khung hình của chúng một cách sạch sẽ.',
      },
      {
        question: 'Mẫu quảng cáo chưa phát hành hoặc ảnh sản phẩm bí mật có bị gửi lên mạng không?',
        answer:
          'Không bao giờ — mọi thao tác giải mã ảnh, phát hiện độ trong suốt, kiểm tra thông số và tạo CSV/JSON đều thực thi trong tab trình duyệt của chính bạn. Không một byte nào rời khỏi thiết bị của bạn.',
      },
      {
        question: 'Tôi có thể dán ảnh từ clipboard trực tiếp để xác minh độ phân giải pixel của nó không?',
        answer:
          'Có, nhấn Ctrl+V (hoặc Cmd+V trên máy Mac) để thêm ảnh chụp màn hình hoặc đồ họa đã sao chép thẳng vào bảng kích thước. Bạn có thể lập tức đọc kích thước pixel chính xác, số megapixel và tỉ lệ khung hình của nó.',
      },
      {
        question: 'Tại sao ảnh sản phẩm Amazon, Etsy hoặc Shopify có thể không đạt Kiểm Tra Chiều Rộng Tối Thiểu?',
        answer:
          'Nhiều sàn yêu cầu ít nhất 1000 px hoặc 1200 px ở cạnh ngắn nhất hoặc dài nhất để bật xem trước phóng to. Nhập 1200 vào ô Kiểm Tra Chiều Rộng Tối Thiểu giúp bạn kiểm toán toàn bộ danh mục sản phẩm trước khi tải lên.',
      },
      {
        question: 'Điều gì xảy ra nếu một file không đọc được lẫn trong một lần thả lô lớn?',
        answer:
          'Nếu một file vượt quá giới hạn 20 MB hoặc trình duyệt giải mã thất bại, vùng tải lên sẽ gắn cờ hoặc bỏ qua mục không hợp lệ đó một cách nhẹ nhàng. Mọi ảnh hợp lệ trong cùng lần thả vẫn hiển thị bình thường trong bảng kích thước của bạn.',
      },
      {
        question: 'Tôi có thể dùng công cụ kiểm tra kích thước này trên điện thoại hoặc máy tính bảng không?',
        answer:
          'Có, mở công cụ trong Safari iOS hoặc Chrome Android, chọn ảnh từ cuộn camera và kiểm tra kích thước pixel chính xác cùng số megapixel ngay khi di chuyển. Bảng cuộn ngang trên màn hình hẹp nên không cột nào bị cắt.',
      },
      {
        question: 'Làm sao sửa ảnh không đạt kiểm tra thông số tối thiểu hoặc sai tỉ lệ khung hình?',
        answer:
          'Bấm vào thẻ Công Cụ Đổi Kích Thước Ảnh hoặc Công Cụ Cắt Ảnh được liên kết trong mục Công Cụ Ảnh Miễn Phí Liên Quan bên dưới hướng dẫn. Bạn có thể cắt đúng tỉ lệ 16:9, 4:5 hoặc 1:1, hoặc thu phóng kích thước trực tiếp trong trình duyệt.',
      },
      {
        question: 'Có giới hạn hằng ngày hoặc phí nào cho báo cáo kích thước theo lô không?',
        answer:
          'Không, kiểm tra không giới hạn các lô ảnh tối đa 20 MB mỗi file hoàn toàn miễn phí. Bạn có thể tải báo cáo CSV và JSON bao nhiêu lần tùy ý mà không cần tài khoản hay watermark.',
      },
    ],
    relatedSlugs: ['/image-resizer', '/image-metadata-viewer', '/image-color-picker', '/'],
  },
  {
    slug: '/image-cropper',
    name: 'Cắt Ảnh',
    shortDescription: 'Cắt ảnh tương tác với tay cầm kéo, tỉ lệ khung hình và zoom.',
    category: 'crop-edit',
    seoTitle: 'Cắt Ảnh Online Miễn Phí – Cắt Ảnh & Đặt Tỉ Lệ',
    seoDescription: 'Công cụ cắt ảnh tương tác trong trình duyệt với tay cầm kéo, mẫu tỉ lệ 1:1 đến 16:9 và zoom lên tới 300%. Cắt JPG, PNG, WebP và HEIC ngay trên máy, không tải lên.',
    h1: 'Cắt Ảnh Online Miễn Phí',
    subtitle:
      'Được tạo cho nhà sáng tạo mạng xã hội, nhà thiết kế, học sinh và người bán hàng thương mại điện tử, công cụ cắt ảnh tương tác của chúng tôi giúp bạn đóng khung và cắt ảnh chính xác ngay trong trình duyệt. Khóa các tỉ lệ phổ biến từ 1:1 đến 16:9, phóng to tới 300% để chỉnh cạnh sát, và xuất ảnh cắt sạch ngay trên máy mà không tải lên.',
    howToSteps: [
      {
        title: 'Tải lên ảnh cần cắt',
        description:
          'Thả ảnh JPG, PNG, WebP, HEIC, GIF, BMP hoặc SVG tối đa 20 MB vào vùng thả, chọn từ thiết bị, hoặc dán bằng Ctrl+V.',
      },
      {
        title: 'Chọn mẫu tỉ lệ khung hình',
        description:
          'Giữ Tự Do để cắt không giới hạn hoặc bấm 1:1, 4:3, 16:9, 3:2, 4:5 hoặc 9:16 trong mục Mẫu Tỉ Lệ Khung Hình để khóa khung hình.',
      },
      {
        title: 'Kéo khung và tay cầm thay đổi kích thước',
        description:
          'Di chuyển hộp cắt qua chủ thể bằng lưới quy tắc một phần ba và kéo bất kỳ tay cầm nào trong 8 tay cầm cạnh hoặc góc trong khi xem Chiều Rộng và Chiều Cao Cắt trực tiếp.',
      },
      {
        title: 'Phóng to hoặc đặt lại toàn bộ canvas',
        description:
          'Dùng nút Thu Phóng (100% đến 300% theo từng bước 25%) để căn cạnh chính xác, hoặc bấm Chọn Toàn Bộ để đặt lại toàn bộ ảnh.',
      },
      {
        title: 'Chọn định dạng xuất và chất lượng',
        description:
          'Chọn định dạng xuất Gốc, JPG, PNG hoặc WebP, và chỉnh thanh trượt Chất Lượng (10% đến 100%) khi lưu định dạng nén mất dữ liệu.',
      },
      {
        title: 'Cắt và tải file về',
        description:
          'Bấm Cắt & Tải Xuống để hiển thị hình chữ nhật đã chọn ở độ phân giải nguồn đầy đủ và lưu file với kích thước trong tên file.',
      },
    ],
    features: [
      {
        title: 'Tay cầm kéo & thay đổi kích thước tương tác',
        description:
          'Tay cầm con trỏ chuột và cảm ứng mượt mà giúp bạn cắt bất kỳ vùng nào xuống đúng từng pixel.',
      },
      {
        title: 'Mẫu tỉ lệ khung hình',
        description:
          'Chuyển giữa Tự Do, 1:1 Vuông, 4:3, 16:9, 3:2, 4:5 Instagram và 9:16 Story.',
      },
      {
        title: 'Thu phóng & hiển thị kích thước trực tiếp',
        description:
          'Phóng to để đóng khung sát và xem chiều rộng × chiều cao xuất chính xác theo thời gian thực.',
      },
      {
        title: 'Xử lý riêng tư 100% ngay trên máy',
        description:
          'Ảnh của bạn được cắt trên thiết bị qua HTML5 Canvas mà không tải lên máy chủ nào.',
      },
    ],
    faqs: [
      {
        question: 'Cắt ảnh có làm giảm chất lượng bên trong hình chữ nhật đã chọn không?',
        answer:
          'Không, công cụ cắt ảnh trích xuất tọa độ đã chọn thẳng từ độ phân giải gốc đầy đủ lưu trong bộ nhớ trình duyệt thay vì hộp xem trước đã thu nhỏ. Khi lưu dưới dạng PNG không mất dữ liệu, pixel bên trong vùng cắt vẫn giống hệt nguồn.',
      },
      {
        question: 'Các mẫu tỉ lệ khung hình nào được tích hợp trong tùy chọn cắt?',
        answer:
          'Bạn có thể chuyển giữa Tự Do (hình chữ nhật bất kỳ), 1:1 (avatar vuông), 4:3, 16:9 (màn hình rộng/YouTube), 3:2 (chuẩn DSLR), 4:5 (dọc Instagram) và 9:16 (Stories/Reels). Bấm một mẫu sẽ tự căn giữa khung phù hợp.',
      },
      {
        question: '8 tay cầm thay đổi kích thước hoạt động thế nào khi mẫu tỉ lệ đang bật?',
        answer:
          'Cả bốn tay cầm góc và tay cầm cạnh đều tự duy trì tỉ lệ bạn chọn trong khi kẹp gọn trong biên ảnh. Để chỉnh chiều rộng và chiều cao độc lập trở lại, chỉ cần bấm mẫu Tự Do.',
      },
      {
        question: 'Lưới quy tắc một phần ba bên trong hộp chọn dùng để làm gì?',
        answer:
          'Lưới 3×3 tinh tế chia khung cắt thành các phần ba để bạn căn đường chân trời, mắt hoặc trung tâm sản phẩm chính xác trong khi kéo. Nó chỉ là hướng dẫn trực quan trên màn hình và không bao giờ xuất hiện trong ảnh đã xuất.',
      },
      {
        question: 'Tôi có thể phóng to bao xa để đóng khung chi tiết?',
        answer:
          'Dùng nút Phóng To (+) và Thu Nhỏ (-) trong thanh khung nhìn để phóng to mượt từ 100% lên tới 300% theo từng bước 25%. Khi phóng quá 100%, hãy cuộn bên trong khung xem trước để cắt viền chi tiết.',
      },
      {
        question: 'Nút Chọn Toàn Bộ trong Tùy Chọn Cắt làm gì?',
        answer:
          'Bấm Chọn Toàn Bộ sẽ chuyển Tỉ Lệ Khung Hình về Tự Do, mở rộng hộp cắt bao phủ 100% chiều rộng và chiều cao ảnh, và đặt lại Thu Phóng về 100%. Nó cho bạn điểm bắt đầu sạch mà không cần tải lại ảnh.',
      },
      {
        question: 'Tôi có thể xem kích thước pixel xuất chính xác trước khi tải về không?',
        answer:
          'Có, cả số liệu Lựa Chọn phía trên khung và thẻ Chiều Rộng Cắt / Chiều Cao Cắt trong Tùy Chọn Cắt đều cập nhật trực tiếp theo pixel khi bạn kéo. Tên file đã xuất cũng gồm các kích thước cắt chính xác đó (ví dụ: photo_1080x1080_cropped.jpg).',
      },
      {
        question: 'Cắt ảnh có hoạt động với cử chỉ ngón tay trên điện thoại và máy tính bảng không?',
        answer:
          'Có, hộp cắt và tay cầm dùng sự kiện Pointer an toàn cho cảm ứng, được thiết kế cho cả chuột máy tính và màn hình cảm ứng di động. Bạn có thể kéo khung và tay cầm thoải mái trên iOS và Android.',
      },
      {
        question: 'Cắt ảnh có giữ nền trong suốt của PNG và WebP không?',
        answer:
          'Có, giữ định dạng Gốc (từ PNG/WebP) hoặc chọn PNG hoặc WebP sẽ giữ đầy đủ độ trong suốt alpha bên trong vùng đã cắt. Chọn JPG sẽ làm phẳng pixel trong suốt gọn lên nền trắng đặc.',
      },
      {
        question: 'Tại sao thanh trượt Chất Lượng biến mất khi chọn PNG?',
        answer:
          'PNG dùng nén không mất dữ liệu nên cài đặt chất lượng phần trăm nén mất dữ liệu không áp dụng. Chuyển Định Dạng Xuất sang Gốc (đối với JPEG), JPG hoặc WebP để hiện thanh trượt Chất Lượng 10%–100%.',
      },
      {
        question: 'Tôi có thể cắt nhiều ảnh khác nhau cùng lúc không?',
        answer:
          'Công cụ cắt tương tác này xử lý một ảnh tại một thời điểm để bạn có thể kiểm tra và đóng khung từng chủ thể riêng lẻ bằng tay cầm kéo và thu phóng. Sau khi tải về, bấm biểu tượng thùng rác để tải ảnh tiếp theo ngay lập tức.',
      },
      {
        question: 'Những định dạng file nào có thể tải lên công cụ cắt?',
        answer:
          'Bạn có thể cắt ảnh JPG, PNG, WebP, HEIC/HEIF của iPhone, GIF, BMP và SVG tối đa 20 MB mỗi file. Lưu ý rằng GIF động sẽ cắt khung hình đầu tiên thành đầu ra tĩnh.',
      },
      {
        question: 'Ảnh chân dung hoặc CMND riêng tư có bị tải lên máy chủ khi cắt không?',
        answer:
          'Không, toàn bộ thao tác vẽ canvas và mã hóa blob diễn ra ngay trong trình duyệt web của bạn. Không có gì được truyền qua mạng hay lưu bên ngoài.',
      },
      {
        question: 'Tôi có thể dán ảnh chụp màn hình thẳng từ clipboard để cắt không?',
        answer:
          'Có, chụp màn hình rồi nhấn Ctrl+V (hoặc Cmd+V trên máy Mac) trên trang khi chưa tải ảnh nào. Ảnh sẽ mở thẳng trong khung cắt, sẵn sàng đóng khung.',
      },
      {
        question: 'Làm sao cắt ảnh chữ nhật thành avatar vuông gọn cho hồ sơ?',
        answer:
          'Bấm nút 1:1 trong mục Mẫu Tỉ Lệ Khung Hình, kéo hình vuông trắng qua khuôn mặt hoặc logo, và chỉnh tay cầm góc cho vừa ý. Sau đó bấm Cắt & Tải Xuống để lưu ảnh vuông chính xác.',
      },
      {
        question: 'Mức chất lượng mặc định khi xuất ảnh cắt JPG hoặc WebP là bao nhiêu?',
        answer:
          'Chất lượng mặc định là 92% để ảnh JPEG và WebP đã cắt giữ kết cấu ảnh sắc nét mà không làm dung lượng file phình to. Trượt xuống khoảng 75%–85% nếu bạn cũng muốn dung lượng tải lên nhỏ hơn.',
      },
      {
        question: 'Cắt ảnh có xóa dữ liệu vị trí GPS EXIF nhúng không?',
        answer:
          'Có, xuất vùng đã cắt qua một HTML5 Canvas mới sẽ tạo bitmap sạch không còn EXIF hoặc thẻ GPS của JPEG gốc. Điều đó giúp bảo vệ vị trí và quyền riêng tư thiết bị của bạn khi chia sẻ ảnh đã cắt.',
      },
      {
        question: 'Tại sao khung hình làm tối mọi thứ bên ngoài hộp chọn của tôi?',
        answer:
          'Lớp phủ tối bán trong suốt làm mờ các vùng sẽ bị cắt bỏ. Độ tương phản trực quan đó giúp bạn đánh giá bố cục và cân bằng quy tắc một phần ba rõ ràng trước khi bấm Cắt & Tải Xuống.',
      },
      {
        question: 'Tôi có thể thay ảnh hiện tại nhanh chóng sau khi tải ảnh cắt về không?',
        answer:
          'Có, bấm biểu tượng thùng rác màu đỏ ở góc trên bên phải của tiêu đề khung cắt bất cứ lúc nào. Thao tác này xóa ảnh đang hoạt động và quay lại vùng tải lên sạch sẽ cho ảnh tiếp theo của bạn.',
      },
      {
        question: 'Cắt ảnh có tốn phí, cần đăng ký hay có watermark trên file xuất không?',
        answer:
          'Không, công cụ cắt ảnh hoàn toàn miễn phí, không tài khoản hay tường phí. Mọi ảnh đã cắt đều xuất sạch ở độ phân giải đầy đủ mà không thêm watermark.',
      },
    ],
    relatedSlugs: ['/image-resizer', '/rotate-flip-image', '/round-image-corners', '/'],
  },
  {
    slug: '/image-watermark',
    name: 'Chèn Watermark Vào Ảnh',
    shortDescription: 'Thêm watermark chữ hoặc logo tùy chỉnh, kéo thả hoặc lặp chéo khắp ảnh.',
    category: 'crop-edit',
    seoTitle: 'Chèn Watermark Vào Ảnh Miễn Phí – Công Cụ Chữ & Logo Tùy Chỉnh',
    seoDescription: 'Bảo vệ ảnh bằng watermark ngay trong trình duyệt. Thêm chữ tùy chỉnh hoặc logo PNG/SVG trong suốt, kéo thả để đặt vị trí hoặc lặp chéo, và xuất an toàn.',
    h1: 'Công Cụ Chèn Watermark Vào Ảnh Online Miễn Phí',
    subtitle:
      'Được thiết kế cho nhiếp ảnh gia, họa sĩ minh họa, người bán Etsy và agency kỹ thuật số, công cụ trình duyệt riêng tư này thêm watermark chữ hoặc logo sắc nét mà không cần tải lên máy chủ. Kéo dấu của bạn tự do trên canvas, bắt vào 9 mẫu neo có sẵn, hoặc lặp lại mẫu nghiêng trên toàn bộ ảnh.',
    howToSteps: [
      {
        title: 'Tải lên ảnh gốc của bạn',
        description:
          'Thả ảnh JPG, PNG, WebP, HEIC, GIF, BMP hoặc SVG tối đa 20 MB vào vùng thả, chọn từ ổ đĩa, hoặc dán bằng Ctrl+V.',
      },
      {
        title: 'Chọn Watermark Chữ hoặc Logo',
        description:
          'Chọn Watermark Chữ để gõ chữ thương hiệu tùy chỉnh, chọn màu và chỉnh Cỡ Chữ (2%–20%), hoặc chọn Logo để tải lên logo PNG hoặc SVG trong suốt (rộng 5%–60%).',
      },
      {
        title: 'Chỉnh Độ Mờ và Góc Xoay',
        description:
          'Đặt Độ Mờ từ 5% mờ nhẹ lên tới 100% đặc, và nghiêng Góc Xoay từ -180° đến +180° theo thời gian thực.',
      },
      {
        title: 'Đặt vị trí tự do hoặc bật Mẫu Lặp Lại Dạng Lưới',
        description:
          'Kéo watermark trực tiếp trên ảnh xem trước, bấm Mẫu Neo 9 điểm (từ góc trên-trái tới góc dưới-phải), hoặc bật Mẫu Lặp Lại Dạng Lưới và chỉnh Khoảng Cách Lưới (15%–60%).',
      },
      {
        title: 'Chọn định dạng xuất và chất lượng',
        description:
          'Chọn định dạng xuất Gốc, JPG, PNG hoặc WebP, và đặt Chất Lượng (10%–100%) khi lưu định dạng nén mất dữ liệu.',
      },
      {
        title: 'Tải ảnh đã chèn watermark về',
        description:
          'Bấm Tải Ảnh Đã Chèn Watermark Xuống để hợp nhất lớp phủ ở độ phân giải gốc đầy đủ của ảnh và lưu thành <tên>_watermarked.',
      },
    ],
    features: [
      {
        title: 'Watermark chữ & logo',
        description:
          'Dùng kiểu chữ tùy chỉnh sắc nét hoặc tải lên logo thương hiệu PNG/SVG trong suốt của bạn.',
      },
      {
        title: 'Kéo thả vị trí + 9 mẫu neo',
        description:
          'Đặt dấu của bạn ở bất kỳ góc nào, ngay chính giữa, hoặc kéo thả tự do trên canvas.',
      },
      {
        title: 'Bảo vệ dạng lưới chéo',
        description:
          'Bật Watermark Dạng Lưới để lặp lại chữ hoặc logo trên toàn bộ ảnh với khoảng cách tùy chỉnh.',
      },
      {
        title: 'Riêng tư phía client',
        description:
          'Chèn watermark cho bản xem trước và ảnh portfolio ngay trên máy mà không gửi bản gốc tới máy chủ ngoài.',
      },
    ],
    faqs: [
      {
        question: 'Tôi có thể dùng cả chữ tùy chỉnh và logo trong suốt của riêng mình làm watermark không?',
        answer:
          'Có, chuyển giữa Watermark Chữ và Logo ở đầu bảng điều khiển. Chế độ chữ hỗ trợ câu chữ tùy chỉnh, màu hex và thu phóng kích thước, còn chế độ Logo chấp nhận logo PNG, SVG trong suốt hoặc bất kỳ file logo nào được hỗ trợ.',
      },
      {
        question: 'Mẫu Lặp Lại Dạng Lưới bảo vệ bản xem trước cho khách tốt hơn dấu ở một góc như thế nào?',
        answer:
          'Dấu ở một góc có thể dễ dàng bị cắt bỏ, trong khi bật Mẫu Lặp Lại Dạng Lưới sẽ đóng dấu chữ hoặc logo đã xoay của bạn thành lưới so le trên toàn bộ khung hình. Dùng thanh trượt Khoảng Cách Lưới (15% đến 60%) để kiểm soát mật độ lưới.',
      },
      {
        question: 'Tại sao Mẫu Neo bị ẩn khi bật Mẫu Lặp Lại Dạng Lưới?',
        answer:
          'Mẫu Neo và kéo thả vị trí áp dụng cho việc đặt một watermark duy nhất tại tọa độ cụ thể (trên-trái, trên-giữa, trên-phải, giữa-trái, giữa, giữa-phải, dưới-trái, dưới-giữa, dưới-phải). Tắt Mẫu Lặp Lại Dạng Lưới bất cứ khi nào bạn muốn kéo hoặc bắt một dấu đơn.',
      },
      {
        question: 'Cỡ chữ được tính thế nào trên ảnh thu nhỏ nhỏ so với ảnh máy ảnh lớn?',
        answer:
          'Cỡ Chữ (2% đến 20%) và Chiều Rộng Logo (5% đến 60%) thu phóng theo tỉ lệ so với chiều rộng ảnh của bạn. Điều đó đảm bảo watermark trông nhất quán trên cả ảnh thu nhỏ sản phẩm 800 px và bản xem trước độ phân giải cao 4000 px.',
      },
      {
        question: 'Canvas xem trước có làm giảm độ phân giải của đầu ra tải về không?',
        answer:
          'Không, bản xem trước tương tác chỉ vừa tối đa 900 px rộng để kéo thả responsive trên màn hình của bạn. Khi bạn bấm Tải Ảnh Đã Chèn Watermark Xuống, trình xuất sẽ tạo một canvas độ phân giải đầy đủ khớp đúng kích thước pixel gốc của ảnh.',
      },
      {
        question: 'Tôi có thể làm chữ watermark trắng dễ đọc trên nền sáng không?',
        answer:
          'Có, Watermark Chữ tự động vẽ một bóng đổ tối nhẹ phía sau chữ. Nhờ đó watermark trắng hoặc màu sáng vẫn sắc nét và dễ đọc trên bầu trời sáng, nền sản phẩm trắng và vùng sáng.',
      },
      {
        question: 'Độ mờ và góc xoay nào hiệu quả nhất cho bảo vệ bản xem trước kín đáo?',
        answer:
          'Với thương hiệu góc kín đáo, hãy thử Độ Mờ 40%–65% ở góc xoay 0° neo ở góc Dưới-Phải (BR). Với bảo vệ bản xem trước mạnh, dùng Mẫu Lặp Lại Dạng Lưới ở Độ Mờ 25%–40% với góc chéo -25° hoặc -35°.',
      },
      {
        question: 'Làm sao kéo một watermark đơn tới đúng vị trí tùy chỉnh?',
        answer:
          'Khi Mẫu Lặp Lại Dạng Lưới chưa được chọn, bấm hoặc nhấn giữ trực tiếp lên bất kỳ đâu trên canvas xem trước và kéo con trỏ. Watermark sẽ di chuyển mượt mà và kẹp nhẹ bên trong các cạnh để không bao giờ bị cắt mất.',
      },
      {
        question: 'Những định dạng ảnh nào được hỗ trợ cho ảnh gốc và logo tải lên?',
        answer:
          'Cả ảnh chính và logo tải lên đều hỗ trợ JPG, PNG, WebP, HEIC/HEIF của iPhone, GIF, BMP và SVG tối đa 20 MB. Lưu ý rằng GIF động sẽ hiển thị dưới dạng một khung tĩnh đã chèn watermark.',
      },
      {
        question: 'Xuất ảnh có giữ độ trong suốt nếu ảnh gốc của tôi là PNG trong suốt không?',
        answer:
          'Có, chọn Gốc (từ PNG/WebP), PNG hoặc WebP sẽ giữ đầy đủ độ trong suốt alpha bên ngoài tác phẩm của bạn trong khi hợp nhất watermark lên trên. Chọn JPG sẽ lấp vùng trong suốt bằng màu trắng đặc.',
      },
      {
        question: 'Bản xem trước gốc chưa chèn watermark có bao giờ bị tải lên máy chủ ngoài không?',
        answer:
          'Không, việc giữ kín bản xem trước chưa chèn watermark của khách hàng là điều thiết yếu. Mọi thao tác hợp nhất canvas, lặp lưới và xuất ảnh cuối cùng đều chạy hoàn toàn trong bộ nhớ trình duyệt trên máy bạn, không tải lên mạng.',
      },
      {
        question: 'Tôi có thể tải lên ảnh gốc mới mà không mất chữ, độ mờ hay cài đặt góc không?',
        answer:
          'Có, bấm Đổi Ảnh trong tiêu đề xem trước bất cứ khi nào bạn muốn đóng dấu một ảnh khác. Chữ watermark hiện tại, logo đã tải lên, độ mờ, góc xoay và bố cục lưới của bạn vẫn được giữ nguyên tự động.',
      },
      {
        question: 'Tôi có thể thay logo thương hiệu đã tải lên sau mà không cần tải lại công cụ không?',
        answer:
          'Có, khi đang chọn chế độ Logo, bấm Đổi Logo để chọn một file PNG hoặc SVG khác bất cứ lúc nào. Ảnh gốc hiện tại của bạn sẽ cập nhật ngay lập tức.',
      },
      {
        question: 'Tại sao Chất Lượng biến mất khi chọn định dạng xuất PNG?',
        answer:
          'Đầu ra PNG là bitmap không mất dữ liệu nên chất lượng nén theo phần trăm không áp dụng. Chuyển sang Gốc (đối với nguồn JPEG), JPG hoặc WebP để chỉnh thanh trượt Chất Lượng từ 10% đến 100%.',
      },
      {
        question: 'Tôi có thể dán ảnh trực tiếp từ clipboard để chèn watermark không?',
        answer:
          'Có, sao chép ảnh hoặc ảnh chụp màn hình rồi nhấn Ctrl+V (hoặc Cmd+V trên máy Mac) khi vùng tải lên đang mở. Ảnh sẽ tải trực tiếp vào trình chỉnh sửa watermark.',
      },
      {
        question: 'Watermark có được làm phẳng vĩnh viễn vào file đã tải về không?',
        answer:
          'Có, watermark được vẽ thẳng lên bitmap đầu ra và lưu dưới dạng JPG, PNG hoặc WebP đã làm phẳng (<tên>_watermarked). Không còn lớp có thể chỉnh sửa nào trong ảnh đã xuất.',
      },
      {
        question: 'Điều gì xảy ra nếu tôi để trống ô nhập Chữ Watermark?',
        answer:
          'Nếu bạn xóa hoàn toàn trường Chữ Watermark, trình hiển thị sẽ tạm thời hiển thị "Watermark" trên canvas xem trước. Điều đó ngăn lựa chọn trống vô hình trong lúc bạn gõ nhãn mới.',
      },
      {
        question: 'Tôi có thể định vị và xuất ảnh đã chèn watermark trên điện thoại hoặc iPad không?',
        answer:
          'Có, kéo qua canvas xem trước dùng sự kiện Pointer thân thiện với cảm ứng cùng thanh trượt responsive. Bạn có thể dễ dàng đóng dấu ảnh portfolio hoặc bản xem trước ngay trong Safari hoặc Chrome di động.',
      },
      {
        question: 'Chèn watermark có xóa thẻ GPS EXIF của máy ảnh khi xuất không?',
        answer:
          'Có, vẽ lên một HTML5 Canvas mới sẽ tạo file đầu ra sạch mà không sao chép header EXIF của máy ảnh. Vị trí GPS và số serial thiết bị của bạn vẫn bị loại khỏi bản xem trước đã tải về.',
      },
      {
        question: 'CompressMyPic có thêm huy hiệu phụ nào bên cạnh watermark của tôi không?',
        answer:
          'Không, chỉ đúng chữ hoặc logo bạn cấu hình mới được vẽ lên ảnh của bạn. Chúng tôi không bao giờ thêm thương hiệu ngoài, huy hiệu góc hay watermark của trang vào file xuất của bạn.',
      },
    ],
    relatedSlugs: ['/add-text-to-image', '/image-border-generator', '/remove-image-metadata', '/'],
  },
  {
    slug: '/blur-pixelate-image',
    name: 'Làm Mờ & Pixel Hóa Ảnh',
    shortDescription: 'Làm mờ hoặc pixel hóa toàn bộ ảnh hoặc chỉ tô vùng nhạy cảm.',
    category: 'crop-edit',
    seoTitle: 'Làm Mờ & Pixel Hóa Ảnh Miễn Phí – Che Mặt & Chữ Online',
    seoDescription: 'Dễ dàng làm mờ hoặc pixel hóa vùng ảnh online bằng cọ che mờ mượt mà hoặc chế độ toàn khung. Ẩn khuôn mặt, biển số xe và chữ riêng tư ngay trong trình duyệt.',
    h1: 'Làm Mờ & Pixel Hóa Ảnh Online',
    subtitle:
      'Được tạo cho nhà báo, giáo viên, người bán hàng trên sàn và người dùng quan tâm đến quyền riêng tư, công cụ trình duyệt này giúp bạn làm mờ hoặc pixel hóa chi tiết ảnh vĩnh viễn trước khi chia sẻ lên mạng. Tô chọn lọc lên khuôn mặt, biển số xe hoặc địa chỉ bằng cọ che mờ tương tác, hoặc áp dụng làm mờ mượt và pixel hóa trên toàn bộ khung hình ngay trên máy.',
    howToSteps: [
      {
        title: 'Tải lên ảnh hoặc ảnh chụp màn hình',
        description:
          'Thả bất kỳ ảnh JPG, PNG, WebP, HEIC, GIF, BMP hoặc SVG nào tối đa 20 MB vào vùng thả, hoặc dán trực tiếp bằng Ctrl+V.',
      },
      {
        title: 'Chọn Vùng Cọ hoặc Toàn Bộ Ảnh',
        description:
          'Giữ Vùng Cọ được chọn để chỉ che các vùng đã tô như khuôn mặt và số liệu, hoặc chuyển sang Toàn Bộ Ảnh để làm mờ hoặc pixel hóa toàn bộ khung hình.',
      },
      {
        title: 'Chọn Pixel Hóa Dạng Mosaic hoặc Làm Mờ Mượt',
        description:
          'Chuyển giữa ô Pixel Hóa Dạng Mosaic dạng khối hoặc Làm Mờ Mượt tùy theo phong cách bạn muốn.',
      },
      {
        title: 'Đặt độ mạnh và Cỡ Cọ',
        description:
          'Chỉnh Kích Thước Khối Mosaic (4–60 px) hoặc Bán Kính Làm Mờ (2–50 px), và chỉnh Cỡ Cọ (2%–20%) khi tô chọn lọc.',
      },
      {
        title: 'Tô lên chi tiết nhạy cảm',
        description:
          'Bấm và kéo trực tiếp qua khuôn mặt, biển số xe hoặc chữ riêng tư trên canvas xem trước; bấm Hoàn Tác hoặc Đặt Lại Cọ bất cứ lúc nào.',
      },
      {
        title: 'Chọn định dạng và tải về',
        description:
          'Chọn định dạng xuất Gốc, JPG, PNG hoặc WebP, đặt Chất Lượng (10%–100%) cho định dạng nén mất dữ liệu, rồi bấm Tải Ảnh Xuống để lưu ngay trên máy.',
      },
    ],
    features: [
      {
        title: 'Cọ che mờ tương tác',
        description:
          'Tô lên khuôn mặt, địa chỉ hoặc biển số xe với cỡ cọ tùy chỉnh và hoàn tác từng nét vẽ.',
      },
      {
        title: 'Làm mờ & mosaic toàn ảnh',
        description:
          'Nhanh chóng làm mờ nền hoặc tạo hiệu ứng mosaic pixel-art cổ điển trên toàn bộ khung hình.',
      },
      {
        title: 'Không tải lên máy chủ',
        description:
          'Vì bạn đang ẩn chi tiết nhạy cảm, không có gì rời khỏi thiết bị của bạn.',
      },
      {
        title: 'Xuất độ phân giải đầy đủ',
        description:
          'Tọa độ cọ ánh xạ chính xác tới pixel gốc đầy đủ của ảnh để xuất sắc nét.',
      },
    ],
    faqs: [
      {
        question: 'Vùng đã làm mờ hoặc pixel hóa có bao giờ được khôi phục từ file đã tải về không?',
        answer:
          'Không, xuất file sẽ làm phẳng các nét vẽ của bạn trực tiếp thành một bitmap raster phẳng duy nhất (JPG, PNG hoặc WebP) mà không còn lớp ẩn hay lịch sử hoàn tác nào trong ảnh. Sau khi tải về, các pixel sắc nét gốc phía sau mặt nạ che mờ đã mất vĩnh viễn.',
      },
      {
        question: 'Tại sao Pixel Hóa Dạng Mosaic thường an toàn hơn Làm Mờ Mượt nhẹ để ẩn chữ?',
        answer:
          'Kích Thước Khối Mosaic mạnh (20 px đến 60 px) gộp các ký tự thành ô màu đặc lớn, phá hủy hoàn toàn đường nét chữ nhỏ. Bán kính làm mờ rất nhỏ đôi khi vẫn để lại hình dạng từ mờ có thể đoán được, vì vậy dùng Bán Kính Làm Mờ cao hơn hoặc Pixel Hóa Dạng Mosaic sẽ che giấu mạnh hơn.',
      },
      {
        question: 'Chế độ Vùng Cọ giữ các vùng sắc nét bên ngoài nét tô của tôi nguyên vẹn như thế nào?',
        answer:
          'Ở chế độ Vùng Cọ, ảnh gốc của bạn vẽ với độ rõ đầy đủ trong khi mỗi nét đã tô đóng vai trò mặt nạ alpha ngoài màn hình, chỉ hợp nhất vùng đã làm mờ hoặc pixel hóa lên trên. Các phần chưa tô của ảnh vẫn hoàn toàn sắc nét.',
      },
      {
        question: 'Tôi có thể trộn cả nét pixel hóa và nét làm mờ trên cùng một ảnh không?',
        answer:
          'Có, mỗi nét lưu Kiểu Hiệu Ứng (Pixel Hóa Dạng Mosaic hoặc Làm Mờ Mượt), độ mạnh và bán kính cọ đang hoạt động khi bạn tô. Bạn có thể pixel hóa biển số xe trước, chuyển sang Làm Mờ Mượt, rồi tô khuôn mặt nền trên cùng một ảnh.',
      },
      {
        question: 'Tô trên bản xem trước đã thu nhỏ có ánh xạ chính xác tới ảnh máy ảnh lớn không?',
        answer:
          'Có, mọi tọa độ con trỏ đều lưu dưới dạng tỉ lệ chuẩn hóa 0 đến 1 cùng với tỉ lệ cọ và hiệu ứng theo tỉ lệ. Khi bạn bấm Tải Ảnh Xuống, bản hợp nhất sẽ vẽ lên canvas độ phân giải đầy đủ khớp với kích thước nguồn của bạn.',
      },
      {
        question: 'Làm sao sửa lỗi trượt tay khi tô qua khuôn mặt hoặc địa chỉ?',
        answer:
          'Bấm nút Hoàn Tác phía trên canvas xem trước để chỉ xóa nét vẽ gần nhất của bạn mà không xóa các lần che mờ trước đó. Nếu muốn bắt đầu lại sạch, bấm Đặt Lại Cọ để xóa mọi nét vẽ ngay lập tức.',
      },
      {
        question: 'Chuyển Vùng Đích sang Toàn Bộ Ảnh có tác dụng gì?',
        answer:
          'Toàn Bộ Ảnh áp dụng bán kính Làm Mờ Mượt hoặc kích thước khối Pixel Hóa Dạng Mosaic đang hoạt động của bạn đều khắp mọi pixel từ cạnh này sang cạnh kia. Nó tiện để tạo tấm nền mơ màng, nền hero hoặc kết cấu pixel-art cổ điển mà không cần tô.',
      },
      {
        question: 'Ảnh chưa che mờ có khuôn mặt, CMND hoặc địa chỉ riêng tư có bị gửi tới máy chủ nào không?',
        answer:
          'Không bao giờ — tải ảnh nhạy cảm chưa kiểm duyệt lên máy chủ từ xa sẽ làm mất quyền riêng tư trước cả khi bạn ẩn chúng. Mọi mặt nạ canvas, lần làm mờ và lần tải cuối cùng đều thực thi hoàn toàn trong trình duyệt của bạn.',
      },
      {
        question: 'Nên đặt Cỡ Cọ và Kích Thước Khối Mosaic bao nhiêu cho ảnh chụp màn hình nhỏ?',
        answer:
          'Với ảnh chụp màn hình trò chuyện hoặc ảnh chụp di động, Cỡ Cọ 4%–8% nhắm gọn từng dòng chữ hoặc tên người dùng mà không làm nhòe tin nhắn gần đó. Đặt Kích Thước Khối Mosaic khoảng 12–24 px thường che chữ nhỏ đủ kín.',
      },
      {
        question: 'Tôi có thể làm mờ hoặc pixel hóa những định dạng file ảnh nào ở đây?',
        answer:
          'Bạn có thể tải lên ảnh JPG, PNG, WebP, HEIC/HEIF của iPhone, GIF, BMP và SVG tối đa 20 MB mỗi file. Lưu ý rằng GIF động nhiều khung hình sẽ kiểm duyệt và xuất khung mở đầu dưới dạng file tĩnh.',
      },
      {
        question: 'Tôi có thể kiểm duyệt phần nhạy cảm của ảnh chụp màn hình dán bằng Ctrl+V không?',
        answer:
          'Có, chụp màn hình vào clipboard rồi nhấn Ctrl+V (hoặc Cmd+V trên máy Mac) khi vùng thả tải lên đang hiển thị. Ảnh sẽ mở trực tiếp ở chế độ Vùng Cọ, sẵn sàng che mờ và lưu.',
      },
      {
        question: 'Xuất ảnh có giữ nền trong suốt trên đồ họa PNG hoặc WebP không?',
        answer:
          'Có, giữ Gốc (đối với PNG/WebP) hoặc chọn PNG hoặc WebP sẽ giữ độ trong suốt alpha nguyên vẹn quanh sticker không chữ nhật hoặc ảnh cắt giao diện. Chọn JPG sẽ xuất ảnh JPEG không trong suốt.',
      },
      {
        question: 'Tại sao nút Hoàn Tác và Đặt Lại Cọ chỉ hiển thị ở chế độ Vùng Cọ?',
        answer:
          'Các nút đó quản lý từng nét cọ đã vẽ riêng lẻ, vì vậy chúng tự ẩn khi bạn chuyển sang chế độ Toàn Bộ Ảnh. Chuyển lại Vùng Cọ sẽ khôi phục các nét đã lưu của bạn đúng vị trí cũ.',
      },
      {
        question: 'Tôi có thể dùng ngón tay hoặc Apple Pencil trên điện thoại hoặc máy tính bảng để tô nét che mờ không?',
        answer:
          'Có, canvas gắn sự kiện Pointer touch-none được thiết kế riêng cho màn hình cảm ứng di động và bút stylus. Bạn có thể kéo nét che mờ qua khuôn mặt hoặc chữ mượt mà mà không vô tình cuộn trang.',
      },
      {
        question: 'Kiểm duyệt và xuất ảnh có xóa thẻ GPS EXIF của máy ảnh không?',
        answer:
          'Có, vẽ bản hợp nhất đã che mờ qua một HTML5 Canvas mới sẽ tự động bỏ qua header EXIF gốc của JPEG và tọa độ GPS. Điều đó bảo vệ cả chi tiết hình ảnh lẫn metadata ẩn của file.',
      },
      {
        question: 'Tại sao Chất Lượng ẩn đi khi tôi chọn định dạng xuất PNG?',
        answer:
          'PNG dùng nén pixel không mất dữ liệu nên phần trăm chất lượng nén mất dữ liệu không áp dụng. Chọn Gốc (khi chỉnh JPEG), JPG hoặc WebP nếu bạn muốn chỉnh thanh trượt Chất Lượng 10%–100%.',
      },
      {
        question: 'Tên file nào được dùng khi tôi lưu ảnh đã làm mờ hoặc pixel hóa?',
        answer:
          'Trình tải giữ tên gốc đã làm sạch của bạn và thêm _blur hoặc _pixelate tùy theo Kiểu Hiệu Ứng đang hoạt động. Nhờ đó bạn giữ các file xuất đã kiểm duyệt (như receipt_pixelate.png) gọn gàng bên cạnh ảnh gốc.',
      },
      {
        question: 'Nếu tôi muốn làm mờ nền chân dung gọn gàng mà không cần tô thì sao?',
        answer:
          'Dùng chế độ Toàn Bộ Ảnh khi bạn muốn làm mềm nền đồng đều phía sau đồ họa phủ hoặc thẻ giao diện.',
      },
      {
        question: 'Làm Mờ Mượt và Pixel Hóa Dạng Mosaic mạnh tới mức nào?',
        answer:
          'Bán Kính Làm Mờ dao động từ làm mượt nhẹ 2 px lên tới làm mờ mạnh 50 px kiểu Gaussian. Kích Thước Khối Mosaic trải từ ô nhỏ 4 px lên tới khối lớn 60 px, thu phóng theo tỉ lệ với độ phân giải nguồn của bạn.',
      },
      {
        question: 'Có watermark, giới hạn hằng ngày hay đăng ký nào khi kiểm duyệt ảnh không?',
        answer:
          'Không, bạn có thể làm mờ hoặc pixel hóa ảnh tối đa 20 MB mỗi file mà không có watermark hay đăng ký. Mọi xử lý trên máy đều hoàn toàn miễn phí cho số lần xuất không giới hạn.',
      },
    ],
    relatedSlugs: ['/remove-image-metadata', '/image-cropper', '/image-filters', '/'],
  },
  {
    slug: '/add-text-to-image',
    name: 'Thêm Chữ Vào Ảnh',
    shortDescription: 'Thêm lớp chữ kéo thả có kiểu dáng với font, viền và bóng đổ.',
    category: 'crop-edit',
    seoTitle: 'Thêm Chữ Vào Ảnh Miễn Phí – Font, Viền & Kéo Thả Lớp',
    seoDescription: 'Dùng trình chỉnh sửa trong trình duyệt để thêm chữ vào ảnh miễn phí với lớp kéo thả, 5 font chữ, kiểu đậm/nghiêng, viền, bóng đổ và xoay — không watermark.',
    h1: 'Thêm Chữ Vào Ảnh Online',
    subtitle:
      'Được tạo cho nhà sáng tạo nội dung, quản lý mạng xã hội, giáo viên và người làm meme, công cụ riêng tư này giúp bạn thêm chữ vào ảnh dễ dàng mà không cần ứng dụng thiết kế nặng nề. Xếp nhiều tiêu đề hoặc chú thích nhiều dòng, tùy chỉnh font chữ, viền, bóng đổ và góc xoay, rồi xuất sạch mà không có watermark.',
    howToSteps: [
      {
        title: 'Tải lên ảnh hoặc dán từ clipboard',
        description:
          'Thả ảnh JPG, PNG, WebP, HEIC, GIF, BMP hoặc SVG tối đa 20 MB vào vùng thả, hoặc dán trực tiếp bằng Ctrl+V.',
      },
      {
        title: 'Gõ chữ nhiều dòng và quản lý lớp',
        description:
          'Chỉnh nội dung trong ô Nội Dung Chữ (Enter để xuống dòng) và bấm Thêm để xếp thêm lớp như Chữ 1, Chữ 2, hoặc xóa lớp không cần.',
      },
      {
        title: 'Chọn font, màu tô, Đậm và Nghiêng',
        description:
          'Chọn trong số Inter, Impact, Georgia, Courier hoặc Trebuchet, đặt màu tô chữ bằng bộ chọn màu, và bật/tắt kiểu Đậm hoặc Nghiêng.',
      },
      {
        title: 'Chỉnh Cỡ Chữ, Xoay, Viền Chữ và Bóng Đổ',
        description:
          'Trượt Cỡ Chữ (2%–22%) và Xoay (-180° đến +180°), rồi tùy chỉnh màu và độ dày Viền Chữ (1–10) cùng Bóng Đổ tùy chọn.',
      },
      {
        title: 'Kéo lớp trực tiếp trên ảnh',
        description:
          'Bấm và kéo bất kỳ khối chữ nào thẳng trên canvas xem trước để đặt tiêu đề, chú thích meme hoặc ghi chú ảnh chụp màn hình chính xác.',
      },
      {
        title: 'Chọn định dạng xuất và tải về',
        description:
          'Chọn định dạng xuất Gốc, JPG, PNG hoặc WebP, đặt Chất Lượng (10%–100%) cho file nén mất dữ liệu, rồi bấm Tải Ảnh Có Chữ Xuống.',
      },
    ],
    features: [
      {
        title: 'Nhiều lớp chữ kéo thả',
        description:
          'Thêm tiêu đề, chú thích và ghi chú rồi kéo từng lớp độc lập trên canvas.',
      },
      {
        title: 'Điều khiển kiểu chữ phong phú',
        description:
          'Chọn font, cỡ chữ, độ đậm/nghiêng, màu sắc, viền nét và bóng đổ.',
      },
      {
        title: 'Điều khiển góc & căn chỉnh',
        description:
          'Xoay bất kỳ lớp chữ nào mượt mà từ -180° đến +180°.',
      },
      {
        title: 'Xuất sạch độ phân giải đầy đủ',
        description:
          'Không thêm watermark — tải trực tiếp dưới dạng JPG, PNG hoặc WebP.',
      },
    ],
    faqs: [
      {
        question: 'Tôi có thể thêm nhiều tiêu đề riêng biệt hoặc chú thích meme trên-dưới không?',
        answer:
          'Có, bấm nút Thêm bên cạnh tab Chữ 1 để tạo Chữ 2, Chữ 3 và bao nhiêu lớp chữ độc lập tùy ý. Mỗi lớp giữ font, màu, cỡ chữ, góc xoay, viền và vị trí kéo riêng trên ảnh.',
      },
      {
        question: 'Trình chỉnh sửa Thêm Chữ Vào Ảnh có những font nào?',
        answer:
          'Bạn có thể chuyển tức thì giữa năm họ font khớp hệ thống đáng tin cậy: Inter / Sans Sạch, Impact / Hiển Thị Meme, Georgia / Serif Cổ Điển, Courier / Monospace và Trebuchet / Sans Bo Tròn. Cả năm font đều hoạt động ngoại tuyến tin cậy mà không cần chờ tải font ngoài.',
      },
      {
        question: 'Làm sao tạo chữ meme trắng cổ điển với viền tối dày?',
        answer:
          'Chọn Impact / Hiển Thị Meme, giữ Đậm đang bật và màu Tô là trắng (#ffffff), và giữ Viền Chữ được chọn với màu viền tối như #0f172a hoặc đen. Kéo thanh trượt độ dày viền lên khoảng 6–10 để có độ tương phản rõ ràng.',
      },
      {
        question: 'Nhấn Enter trong ô Nội Dung Chữ có tạo chú thích nhiều dòng không?',
        answer:
          'Có, Nội Dung Chữ hỗ trợ đầy đủ ngắt dòng nhiều dòng, căn giữa gọn gàng với hệ số chiều cao dòng 1,22. Nhờ đó xếp chú thích nhiều dòng, trích dẫn nhiều dòng, ghi chú hướng dẫn hoặc chú thích dài rất dễ dàng mà không cần tạo lớp riêng cho từng dòng.',
      },
      {
        question: 'Làm sao chọn và di chuyển một lớp cụ thể khi có nhiều lớp trên ảnh?',
        answer:
          'Bấm tab lớp (Chữ 1, Chữ 2, v.v.) trong bảng bên phải để chuyển điều khiển kiểu chữ đang hoạt động. Bạn cũng có thể bấm trực tiếp gần bất kỳ khối chữ nào trên canvas — trình chỉnh sửa sẽ lấy lớp gần con trỏ nhất.',
      },
      {
        question: 'Tôi có thể nghiêng chữ chéo ở góc tùy chỉnh không?',
        answer:
          'Có, kéo thanh trượt Xoay bất kỳ đâu từ -180° đến +180° cho từng lớp chữ đang hoạt động. Mỗi khối xoay mượt quanh tọa độ trung tâm của nó để làm dấu nghiêng, ghi chú hoặc chú thích vui nhộn.',
      },
      {
        question: 'Cỡ Chữ (2%–22%) thu phóng thế nào trên ảnh nhỏ so với ảnh 4K?',
        answer:
          'Cỡ chữ thu phóng theo phần trăm chiều rộng ảnh xuất (với mức sàn tối thiểu 12 px). Nhờ đó tỉ lệ giữ nhất quán giữa bản xem trước trên màn hình và file xuất độ phân giải đầy đủ.',
      },
      {
        question: 'Ảnh chụp màn hình hoặc ảnh gia đình có bị tải lên đâu khi thêm chú thích không?',
        answer:
          'Không, việc hợp nhất bằng Canvas vẽ mọi ký tự font, nét viền, bóng đổ và góc xoay ngay trong tab trình duyệt của bạn. Ảnh gốc và đồ họa hoàn chỉnh của bạn không bao giờ rời khỏi thiết bị.',
      },
      {
        question: 'Điều gì xảy ra với sticker PNG trong suốt nếu tôi xuất kèm chữ đã thêm?',
        answer:
          'Chọn Gốc (từ PNG/WebP), PNG hoặc WebP sẽ giữ vùng trong suốt quanh đồ họa của bạn sạch sẽ. Nếu chọn định dạng xuất JPG, vùng trong suốt sẽ làm phẳng mượt lên nền trắng đặc.',
      },
      {
        question: 'Làm sao xóa một lớp chữ thừa mà không xóa toàn bộ ảnh?',
        answer:
          'Chọn tab lớp bạn muốn loại bỏ rồi bấm biểu tượng thùng rác bên cạnh nút Thêm. Khi chỉ còn một lớp, xóa ô chữ của nó sẽ tạm ẩn lớp đó mà không làm mất trình chỉnh sửa.',
      },
      {
        question: 'Tôi có thể đổi ảnh nền mà không mất các lớp chữ đã tạo kiểu không?',
        answer:
          'Bấm Đổi Ảnh trong tiêu đề xem trước để quay về vùng thả và tải file khác. Các lớp chữ và kiểu dáng hiện có của bạn vẫn sẵn sàng để tái dùng cùng thiết lập chú thích trên các ảnh khác.',
      },
      {
        question: 'Tôi có thể mở những định dạng file ảnh nào để thêm chữ?',
        answer:
          'Trình chỉnh sửa mở file JPG, PNG, WebP, HEIC/HEIF của iPhone, GIF, BMP và SVG tối đa 20 MB mỗi file. GIF động sẽ xuất thành một khung tĩnh có chú thích.',
      },
      {
        question: 'Tôi có thể kéo thả lớp chữ bằng màn hình cảm ứng điện thoại không?',
        answer:
          'Có, kéo canvas dựa vào sự kiện Pointer touch-none được thiết kế cho ngón tay và bút stylus. Bạn có thể đặt lại vị trí chú thích gọn gàng trong Safari iOS và Chrome Android mà không cuộn trang.',
      },
      {
        question: 'Bóng Đổ cải thiện khả năng đọc thế nào bên cạnh Viền Chữ?',
        answer:
          'Bóng Đổ tạo một vệt mờ tối mềm theo tỉ lệ với cỡ chữ bên dưới chữ. Bật Bóng Đổ mà không có viền sẽ tạo phụ đề biên tập sạch, còn kết hợp cả hai sẽ tối đa khả năng đọc trên nền họa tiết bận rộn.',
      },
      {
        question: 'Tôi có thể dán ảnh chụp màn hình bằng Ctrl+V để chú thích nhanh không?',
        answer:
          'Có, sao chép bất kỳ ảnh chụp màn hình hoặc slide nào rồi nhấn Ctrl+V (hoặc Cmd+V trên máy Mac) trên trang trước khi tải file. Ảnh sẽ tải thẳng vào canvas, sẵn sàng cho ghi chú chữ và xuất sạch.',
      },
      {
        question: 'Tại sao thanh trượt Chất Lượng biến mất khi chọn PNG?',
        answer:
          'PNG mã hóa ảnh không mất dữ liệu nên không có thanh trượt phần trăm chất lượng nén. Chọn Gốc (đối với JPEG), JPG hoặc WebP nếu bạn muốn chỉnh Chất Lượng xuất từ 10% đến 100%.',
      },
      {
        question: 'Thêm chữ qua Canvas có xóa thẻ GPS EXIF ẩn của máy ảnh không?',
        answer:
          'Có, vẽ lên một HTML5 Canvas mới sẽ tạo bitmap hoàn toàn mới mà không sao chép header EXIF. Vị trí GPS và metadata máy ảnh của bạn vẫn bị loại khỏi file xuất đã lưu.',
      },
      {
        question: 'Tên file nào được lưu khi tải ảnh đã chú thích về?',
        answer:
          'File tải về giữ tên gốc đã làm sạch của bạn và thêm _text cùng phần mở rộng đã chọn (như meme_text.jpg). Nhờ đó tránh ghi đè lên ảnh gốc chưa chú thích của bạn.',
      },
      {
        question: 'Công cụ này khác gì công cụ Watermark Ảnh?',
        answer:
          'Watermark Ảnh tập trung vào dấu thương hiệu đơn hoặc dạng lưới chéo và logo PNG/SVG đã tải lên. Thêm Chữ Vào Ảnh thay vào đó cung cấp nhiều lớp chữ kéo thả độc lập, 5 font chữ, điều khiển đậm/nghiêng và nét meme dày.',
      },
      {
        question: 'CompressMyPic có đặt logo hay watermark nào lên ảnh xuất từ đây không?',
        answer:
          'Không, file tải về của bạn chỉ chứa ảnh và đúng các lớp chữ bạn đã tạo. Mọi thứ chạy miễn phí trong trình duyệt của bạn, không watermark và không đăng ký.',
      },
    ],
    relatedSlugs: ['/image-watermark', '/image-border-generator', '/image-filters', '/'],
  },
  {
    slug: '/image-border-generator',
    name: 'Tạo Khung Viền Ảnh',
    shortDescription: 'Thêm viền đặc hoặc chuyển màu, khung ảnh, bo góc và bóng đổ.',
    category: 'crop-edit',
    seoTitle: 'Tạo Khung Viền Ảnh Miễn Phí – Viền Đặc, Chuyển Màu & Polaroid',
    seoDescription: 'Đóng khung ảnh nhanh với công cụ tạo khung viền ảnh miễn phí. Áp dụng khung đặc, chuyển màu tuyến tính hoặc Polaroid, bo góc và bóng đổ ngay trong trình duyệt.',
    h1: 'Tạo Khung Viền Ảnh Miễn Phí',
    subtitle:
      'Được tạo cho nhiếp ảnh gia, chủ shop Etsy, nhà thiết kế portfolio và nhà sáng tạo mạng xã hội, công cụ tạo khung viền ảnh miễn phí của chúng tôi bọc bất kỳ bức ảnh nào trong khung lót gallery sắc nét, chuyển màu hai tông hoặc khung Polaroid cổ điển. Tinh chỉnh độ dày viền, bán kính bo góc trong và ngoài, và bóng đổ nổi ngay trong trình duyệt trước khi xuất.',
    howToSteps: [
      {
        title: 'Thả hoặc chọn ảnh cần đóng khung',
        description:
          'Tải lên bất kỳ ảnh JPG, PNG, WebP, HEIC, GIF, BMP hoặc SVG nào tối đa 20 MB, hoặc dán bằng Ctrl+V.',
      },
      {
        title: 'Chọn Mẫu Khung Nhanh hoặc Kiểu Viền',
        description:
          'Bấm mẫu Trắng Cổ Điển, Khung Polaroid, Studio Tối hoặc Phát Sáng Chuyển Màu, hoặc tự chuyển giữa các kiểu Đặc, Chuyển Màu và Polaroid.',
      },
      {
        title: 'Tùy chỉnh màu khung và góc chuyển màu',
        description:
          'Đặt Màu Viền ở chế độ Đặc/Polaroid, hoặc chọn Màu Bắt Đầu, Màu Kết Thúc và Góc Chuyển Màu (0°–360°) cho khung chuyển màu tuyến tính.',
      },
      {
        title: 'Chỉnh Cỡ Viền và bán kính góc',
        description:
          'Trượt Cỡ Viền (1%–25%) cùng với thanh trượt độc lập Bán Kính Khung (0%–30%) và Bán Kính Ảnh (0%–30%).',
      },
      {
        title: 'Chọn Bóng Đổ và xem trước định dạng',
        description:
          'Chọn Bóng Đổ không, nhẹ, vừa hoặc sâu, và chọn định dạng xuất PNG, JPG hoặc WEBP trong khi kiểm tra bản xem trước ô caro.',
      },
      {
        title: 'Tải ảnh đã đóng khung về',
        description:
          'Bấm Tải Ảnh Đã Đóng Khung Xuống để vẽ viền và bóng đổ ở độ phân giải nguồn đầy đủ và lưu thành <tên>_framed.',
      },
    ],
    features: [
      {
        title: 'Viền đặc & chuyển màu',
        description:
          'Tạo khung lót gallery sạch hoặc khung chuyển màu tuyến tính hai màu rực rỡ.',
      },
      {
        title: 'Kiểu khung mẫu có sẵn',
        description:
          'Áp dụng ngay phong cách Polaroid, Trắng Gallery, Studio Tối hoặc Chuyển Màu Hoàng Hôn.',
      },
      {
        title: 'Bo góc & bóng đổ',
        description:
          'Bo tròn góc ảnh bên trong hoặc góc khung bên ngoài và thêm bóng đổ nổi chân thực.',
      },
      {
        title: 'Hỗ trợ PNG không mất dữ liệu',
        description:
          'Xuất PNG để giữ góc ngoài trong suốt quanh bóng đổ và khung bo tròn.',
      },
    ],
    faqs: [
      {
        question: 'Kiểu Viền Polaroid khác gì viền Đặc chuẩn?',
        answer:
          'Viền đặc bọc khoảng đệm đồng đều quanh cả bốn cạnh của ảnh, trong khi Polaroid thêm chiều cao khung trắng gấp 3,2 lần ở cạnh dưới để tái hiện ảnh phim tức thì cổ điển. Bấm mẫu Khung Polaroid sẽ cấu hình tỉ lệ sạch chỉ bằng một cú nhấp chuột.',
      },
      {
        question: 'Tại sao Bóng Đổ biến mất khi tôi chuyển định dạng xuất sang JPG?',
        answer:
          'File JPG không hỗ trợ kênh alpha trong suốt để bóng đổ nổi mềm bán trong suốt mờ dần gọn lên nền trang. Trình vẽ của chúng tôi giữ khoảng đệm Bóng Đổ trong xuất PNG và WebP trong suốt trong khi vẫn giữ cạnh viền sắc nét trên JPG nền trắng đặc.',
      },
      {
        question: 'Bán Kính Khung và Bán Kính Ảnh khác nhau như thế nào?',
        answer:
          'Bán Kính Khung (0%–30%) uốn cong các góc ngoài của chính viền màu, trong khi Bán Kính Ảnh (0%–30%) uốn cong các góc trong của ảnh bên trong khung lót. Khớp hoặc đối lập cả hai giúp bạn tạo thẻ giao diện bóng bẩy hoặc khung lót gallery sắc nét.',
      },
      {
        question: 'Khung Phát Sáng Chuyển Màu tính góc và màu như thế nào?',
        answer:
          'Chọn kiểu Chuyển Màu sẽ hiện Màu Bắt Đầu, Màu Kết Thúc và thanh trượt Góc Chuyển Màu 0°–360° để vẽ chuyển màu tuyến tính có hướng hoặc chéo đầy đủ phía sau ảnh. Bạn có thể bấm Phát Sáng Chuyển Màu trong Mẫu Khung Nhanh để có ngay kiểu thẻ xanh dương sang xanh ngọc.',
      },
      {
        question: 'Thêm viền có cắt mất cạnh nào của ảnh gốc không?',
        answer:
          'Không, công cụ tạo khung viền ảnh mở rộng canvas ra ngoài quanh toàn bộ chiều rộng và chiều cao ảnh gốc thay vì che pixel của bạn. Chỉ khi đặt Bán Kính Ảnh trên 0% thì bốn góc trong của ảnh mới được bo tròn nhẹ.',
      },
      {
        question: 'Cỡ Viền (1%–25%) được tính thế nào trên ảnh cao so với ảnh rộng?',
        answer:
          'Độ dày viền tính theo phần trăm của cạnh ngắn hơn trong ảnh — min(chiều rộng, chiều cao). Nhờ đó lề trên, dưới và hai bên cân bằng đều trên cả banner 16:9 lẫn ảnh dọc 4:5.',
      },
      {
        question: 'Bốn Mẫu Khung Nhanh tự cấu hình những gì?',
        answer:
          'Trắng Cổ Điển đặt khung lót gallery trắng 10% với bóng đổ nhẹ, còn Khung Polaroid thêm lề dưới kiểu ảnh in tức thì. Studio Tối áp dụng khung màu đá phiến, và Phát Sáng Chuyển Màu tạo viền chuyển màu xanh dương sang xanh ngọc ở góc 135°.',
      },
      {
        question: 'Tại sao bản xem trước hiện ô caro xám trắng quanh khung của tôi?',
        answer:
          'Ô caro đó hiển thị các pixel trong suốt thật bên ngoài góc khung bo tròn và bên trong bóng đổ mềm. Khi xuất dưới dạng PNG hoặc WebP, các vùng ô caro đó vẫn hoàn toàn trong suốt trên bất kỳ website hay slide thuyết trình nào.',
      },
      {
        question: 'Đóng khung có chạy ngay trên máy mà không tải ảnh của tôi lên không?',
        answer:
          'Có, vẽ chuyển màu, cắt góc, vẽ bóng đổ và xuất Blob đều diễn ra hoàn toàn trong HTML5 Canvas trên thiết bị của bạn. Không có gì tải lên máy chủ ngoài.',
      },
      {
        question: 'Tôi có thể tải những định dạng file ảnh nào vào công cụ tạo viền?',
        answer:
          'Bạn có thể thả ảnh JPG, PNG, WebP, HEIC/HEIF của iPhone, GIF, BMP và SVG tối đa 20 MB mỗi file. GIF động sẽ xuất thành khung tĩnh của khung hình đầu tiên.',
      },
      {
        question: 'Tôi có thể đổi màu khung của Mẫu Khung Nhanh sau khi bấm không?',
        answer:
          'Có, mẫu chỉ điền sẵn Kiểu Viền, màu sắc, bán kính và bóng đổ cho bạn. Bạn có thể chỉnh Màu Viền, thay đổi lề, hoặc chuyển Bóng Đổ ngay sau đó.',
      },
      {
        question: 'Làm sao tạo khung gallery than chì tối hoặc pastel mà không có bóng đổ?',
        answer:
          'Chọn kiểu Đặc, bấm Màu Viền để chọn bất kỳ sắc hex tùy chỉnh nào, và kéo cả Bán Kính Khung lẫn Bán Kính Ảnh về 0%. Sau đó bấm không trong mục Bóng Đổ để có viền phẳng sắc nét.',
      },
      {
        question: 'Ảnh đã đóng khung tải về có giữ độ phân giải đầy đủ không?',
        answer:
          'Có, bản xem trước trên màn hình chỉ thu nhỏ để vừa gọn trong bố cục của bạn. Bấm Tải Ảnh Đã Đóng Khung Xuống sẽ tạo một Canvas hoàn toàn mới ở đúng độ phân giải pixel gốc của ảnh cộng thêm khung và bóng đổ đã thu phóng.',
      },
      {
        question: 'Nên xuất PNG hay WebP khi giữ góc khung bo tròn trong suốt?',
        answer:
          'Chọn PNG khi muốn độ sắc nét không mất dữ liệu quanh viền mỏng và tài nguyên in ấn. Chọn WebP cho thẻ website nhanh, nhẹ mà vẫn giữ góc ngoài trong suốt và bóng đổ nổi.',
      },
      {
        question: 'Tôi có thể dán ảnh chụp màn hình thẳng từ clipboard để bọc trong khung thẻ không?',
        answer:
          'Có, nhấn Ctrl+V (hoặc Cmd+V trên máy Mac) trên vùng tải lên ngay sau khi chụp màn hình. Kết hợp viền bo tròn, khung chuyển màu và Bóng Đổ vừa sẽ biến ảnh chụp màn hình thô thành hình ảnh thuyết trình bóng bẩy.',
      },
      {
        question: 'Thêm viền có xóa dữ liệu GPS EXIF ẩn của máy ảnh không?',
        answer:
          'Có, hợp nhất lên HTML5 Canvas sẽ tạo bitmap đã đóng khung sạch. Header EXIF của máy ảnh nguồn và tọa độ GPS tự động bị loại khỏi file PNG, JPG hoặc WebP đã tải về.',
      },
      {
        question: 'Làm sao tải ảnh thứ hai trong khi thử khung?',
        answer:
          'Bấm Đổi Ảnh ở góc trên bên phải của bảng xem trước để chọn ảnh khác. Mọi màu viền, góc chuyển màu, bán kính góc và lựa chọn bóng đổ đang hoạt động của bạn vẫn giữ nguyên.',
      },
      {
        question: 'Tên file nào được lưu cho ảnh đã đóng khung?',
        answer:
          'File xuất giữ tên gốc đã làm sạch của bạn với _framed thêm vào trước .png, .jpg hoặc .webp. Ví dụ: file tên portrait.jpg sẽ lưu gọn thành portrait_framed.png.',
      },
      {
        question: 'Công cụ tạo viền có hoạt động mượt trên trình duyệt di động không?',
        answer:
          'Có, mọi thẻ mẫu, thanh trượt và bộ chọn màu đều hoạt động gọn trên Safari iOS và Chrome Android. Bạn có thể đóng khung Polaroid hoặc ảnh sản phẩm ngay từ cuộn camera điện thoại.',
      },
      {
        question: 'Có watermark, tường phí hay giới hạn đăng ký nào trên ảnh đã đóng khung không?',
        answer:
          'Không, mọi ảnh đã đóng khung đều tải về hoàn toàn không watermark và miễn phí. Chỉ áp dụng kiểm tra 20 MB mỗi file chuẩn để bộ nhớ trình duyệt trên máy luôn mượt.',
      },
    ],
    relatedSlugs: ['/round-image-corners', '/add-background-to-image', '/image-filters', '/'],
  },
  {
    slug: '/round-image-corners',
    name: 'Bo Tròn Góc Ảnh',
    shortDescription: 'Bo tròn góc đồng đều hoặc từng góc riêng với đầu ra PNG trong suốt.',
    category: 'crop-edit',
    seoTitle: 'Bo Tròn Góc Ảnh Miễn Phí – Cắt Góc PNG Trong Suốt',
    seoDescription: 'Dễ dàng bo tròn góc ảnh online miễn phí với thanh trượt đồng đều hoặc từng góc, mẫu avatar tròn và xuất PNG hoặc WebP trong suốt ngay trong trình duyệt.',
    h1: 'Bo Tròn Góc Ảnh Online',
    subtitle:
      'Được thiết kế cho nhà thiết kế giao diện, tác giả newsletter, blogger và người dùng mạng xã hội tạo thẻ hoặc avatar bóng bẩy, công cụ trình duyệt này giúp bạn bo tròn góc ảnh gọn gàng ở độ phân giải đầy đủ. Uốn cong cả bốn góc đồng đều, bật thanh trượt từng góc riêng, hoặc bắt ngay thành hình tròn đầy đủ với đầu ra PNG/WebP trong suốt.',
    howToSteps: [
      {
        title: 'Thả hoặc chọn ảnh của bạn',
        description:
          'Tải lên ảnh JPG, PNG, WebP, HEIC, GIF, BMP hoặc SVG tối đa 20 MB vào vùng thả, hoặc dán bằng Ctrl+V.',
      },
      {
        title: 'Chỉnh Bán Kính Tất Cả Các Góc hoặc bấm Hình Tròn Đầy / Viên Thuốc',
        description:
          'Kéo thanh trượt Bán Kính Tất Cả Các Góc (0%–100%, hiển thị độ cong pixel chính xác) hoặc bấm Hình Tròn Đầy / Viên Thuốc để bắt ngay về 100%.',
      },
      {
        title: 'Tùy chọn bật Điều Khiển Từng Góc Riêng',
        description:
          'Bật Điều Khiển Từng Góc Riêng để tạo kiểu độc lập cho các góc Trên Trái, Trên Phải, Dưới Trái và Dưới Phải.',
      },
      {
        title: 'Chọn lót ngoài Trong Suốt hoặc Màu Đặc',
        description:
          'Giữ Trong Suốt (PNG/WebP) đang bật để góc bo tròn trong suốt, hoặc chuyển sang Màu Đặc và chọn bất kỳ nền hex nào.',
      },
      {
        title: 'Chọn định dạng xuất (PNG, WebP hoặc JPG)',
        description:
          'Chọn PNG để có cạnh alpha không mất dữ liệu, WebP cho tài nguyên web trong suốt nhẹ hơn, hoặc JPG cho nền góc đặc không trong suốt.',
      },
      {
        title: 'Tải ảnh đã bo tròn về',
        description:
          'Kiểm tra bản xem trước ô caro và bấm Tải Ảnh Đã Bo Tròn Xuống để xuất <tên>_rounded ở kích thước gốc đầy đủ.',
      },
    ],
    features: [
      {
        title: 'Bán kính đồng đều & từng góc',
        description:
          'Bo tròn mọi góc đều nhau lên tới hình viên thuốc/hình tròn, hoặc tạo kiểu từng góc độc lập.',
      },
      {
        title: 'Góc trong suốt thật',
        description:
          'Xuất PNG hoặc WebP với độ trong suốt alpha khử răng cưa sạch bên ngoài mặt nạ bo tròn.',
      },
      {
        title: 'Nền đặc tùy chọn',
        description:
          'Lấp góc ngoài bằng bất kỳ màu hex tùy chỉnh nào nếu xuất sang JPG.',
      },
      {
        title: 'Xuất độ phân giải đầy đủ',
        description:
          'Giữ đúng kích thước pixel gốc của bạn trong khi cắt góc gọn gàng.',
      },
    ],
    faqs: [
      {
        question: 'Tại sao phải dùng PNG hoặc WebP để giữ góc bo tròn trong suốt?',
        answer:
          'Định dạng JPEG không hỗ trợ kênh trong suốt alpha, vì vậy góc bên ngoài mặt nạ bo tròn sẽ luôn thành trắng đặc hoặc không trong suốt. PNG và WebP giữ độ trong suốt khử răng cưa 8-bit mượt mà để thẻ bo tròn hoặc avatar của bạn hòa liền với bất kỳ màu trang web hay slide nào.',
      },
      {
        question: 'Phím tắt Hình Tròn Đầy / Viên Thuốc hoạt động thế nào trên ảnh vuông so với ảnh chữ nhật?',
        answer:
          'Bấm Hình Tròn Đầy / Viên Thuốc sẽ đặt Bán Kính Tất Cả Các Góc thành 100% của một nửa cạnh ngắn hơn — min(chiều rộng, chiều cao) / 2. Trên ảnh vuông 1:1, nó cắt thành hình tròn hoàn hảo; trên banner rộng hơn, nó tạo hình viên thuốc sân vận động mượt.',
      },
      {
        question: 'Điều gì xảy ra nếu tôi chỉ muốn bo tròn hai góc trên cho thẻ blog?',
        answer:
          'Chọn Điều Khiển Từng Góc Riêng để mở bốn thanh trượt riêng cho Trên Trái, Trên Phải, Dưới Trái và Dưới Phải (mỗi thanh 0%–100%). Đặt Dưới Trái và Dưới Phải về 0% trong khi chỉ bo tròn các góc trên.',
      },
      {
        question: 'Làm sao tạo ảnh chân dung vuông trước nếu ảnh của tôi là hình chữ nhật?',
        answer:
          'Mở công cụ Cắt Ảnh của chúng tôi (được liên kết trong mục Công Cụ Ảnh Miễn Phí Liên Quan bên dưới), chọn mẫu tỉ lệ 1:1, và tải ảnh vuông đã cắt về. Sau đó thả file vuông đó vào đây và bấm Hình Tròn Đầy / Viên Thuốc để có avatar tròn sắc nét.',
      },
      {
        question: 'Số liệu pixel trực tiếp bên cạnh Bán Kính Tất Cả Các Góc có nghĩa là gì?',
        answer:
          'Bên cạnh thanh trượt 0%–100%, nhãn tính độ cong góc chính xác theo pixel xuất thật (ví dụ: 120px (24%)) so với kích thước gốc của ảnh. Nhờ đó việc khớp giá trị border-radius CSS trở nên đơn giản.',
      },
      {
        question: 'Khi nào nên chọn Màu Đặc trong mục Lót Góc Ngoài thay vì Trong Suốt?',
        answer:
          'Chọn Màu Đặc khi bạn định xuất JPG nhẹ, khớp nền thẻ chế độ tối cụ thể, hoặc tải lên ứng dụng thay alpha PNG trong suốt bằng màu đen. Bạn có thể chọn trắng hoặc bất kỳ mã hex chính xác nào bằng ô chọn màu.',
      },
      {
        question: 'Điều gì tự xảy ra nếu tôi bấm Trong Suốt (PNG/WebP) trong khi đang chọn JPG?',
        answer:
          'File JPG không thể lưu độ trong suốt alpha ở góc ngoài. Vì vậy bấm Trong Suốt (PNG/WebP) sẽ tự chuyển Định Dạng Xuất sang PNG để góc bo tròn của bạn vẫn trong suốt.',
      },
      {
        question: 'Bo tròn góc có làm thu nhỏ chiều rộng và chiều cao ảnh của tôi không?',
        answer:
          'Không, ảnh xuất giữ đúng chiều rộng và chiều cao gốc theo pixel. Chỉ các vùng góc ngoài được cắt mượt bằng đường cong góc bậc hai.',
      },
      {
        question: 'Tại sao cạnh cong trông mượt thay vì pixel răng cưa?',
        answer:
          'HTML5 Canvas cắt dọc theo đường path Bézier bậc hai dạng vector với làm mượt chất lượng cao được bật. Nhờ đó tạo khử răng cưa sub-pixel mềm dọc đường cong, hòa tự nhiên với nền trang tối hoặc sáng.',
      },
      {
        question: 'Ảnh chân dung hoặc avatar hồ sơ có bị tải lên máy chủ khi cắt góc không?',
        answer:
          'Không, cắt path và mã hóa PNG/WebP chạy hoàn toàn trong tab trình duyệt của bạn qua HTML5 Canvas. Ảnh cá nhân và logo thương hiệu không bao giờ rời khỏi thiết bị của bạn.',
      },
      {
        question: 'Những định dạng đầu vào nào có thể bo tròn trong công cụ này?',
        answer:
          'Thả file JPG, PNG, WebP, HEIC/HEIF của iPhone, GIF, BMP hoặc SVG tối đa 20 MB mỗi file. GIF động sẽ xuất khung tĩnh đầu tiên đã bo tròn.',
      },
      {
        question: 'Tôi có thể dán ảnh chụp màn hình từ clipboard trực tiếp để bo tròn góc không?',
        answer:
          'Có, chụp màn hình rồi nhấn Ctrl+V (hoặc Cmd+V trên máy Mac) khi vùng tải lên đang hoạt động. Ảnh sẽ mở thẳng trong bản xem trước ô caro, sẵn sàng bo tròn góc.',
      },
      {
        question: 'Điều gì xảy ra với giá trị Từng Góc của tôi nếu tôi bỏ chọn chế độ từng góc?',
        answer:
          'Bỏ chọn Điều Khiển Từng Góc Riêng sẽ đưa canvas về lại thanh trượt Bán Kính Tất Cả Các Góc duy nhất để mọi góc giữ đồng đều. Chọn lại sẽ đặt sẵn cả bốn thanh trượt góc gọn gàng từ bán kính đồng đều hiện tại của bạn.',
      },
      {
        question: 'Bo tròn góc có xóa thẻ GPS EXIF nhúng không?',
        answer:
          'Có, vẽ pixel qua một lần cắt Canvas sạch sẽ loại bỏ header EXIF và GPS của JPEG gốc tự động. Điều đó bảo vệ quyền riêng tư mỗi khi bạn chia sẻ avatar bo tròn hoặc ảnh thu nhỏ sản phẩm lên mạng.',
      },
      {
        question: 'Làm sao thay ảnh hiện tại trong khi giữ thiết lập bán kính góc?',
        answer:
          'Bấm Đổi Ảnh phía trên khung xem trước để tải lên ảnh mới. Bán kính đồng đều, giá trị từng góc, chế độ lót và định dạng xuất của bạn vẫn hoạt động cho lần xuất lặp nhanh.',
      },
      {
        question: 'Tên file nào được gán cho ảnh đã bo tròn tải về?',
        answer:
          'Trình tải giữ tên gốc đã làm sạch của bạn và thêm _rounded trước .png, .webp hoặc .jpg. Ví dụ: avatar.jpg tải về gọn thành avatar_rounded.png.',
      },
      {
        question: 'Nên chọn PNG hay WebP khi xuất đồ họa web bo tròn?',
        answer:
          'Chọn PNG để tương thích tối đa với ứng dụng cũ và độ sắc nét cạnh không mất dữ liệu. Chọn WebP khi muốn tài nguyên website nhỏ hơn đáng kể mà vẫn giữ đầy đủ độ trong suốt alpha ở góc.',
      },
      {
        question: 'Tôi có thể dùng Bo Tròn Góc Ảnh trên trình duyệt di động iOS hoặc Android không?',
        answer:
          'Có, mọi thanh trượt, ô chọn và nút chuyển định dạng đều thích ứng mượt với màn hình di động trên Safari và Chrome. Bạn có thể bo tròn góc trên ảnh chân dung ngay từ cuộn camera điện thoại.',
      },
      {
        question: 'Công cụ này khác gì Công Cụ Tạo Khung Viền Ảnh?',
        answer:
          'Bo Tròn Góc Ảnh cắt ảnh gọn gàng ở kích thước gốc mà không thêm khoảng đệm ngoài. Công Cụ Tạo Khung Viền Ảnh thay vào đó bọc khung lót màu, chuyển màu hoặc khung Polaroid quanh ảnh của bạn.',
      },
      {
        question: 'Có watermark, phí hay giới hạn hằng ngày nào trên file xuất đã bo tròn không?',
        answer:
          'Không, bạn có thể bo tròn góc trên không giới hạn ảnh tối đa 20 MB mỗi file hoàn toàn miễn phí. Không bao giờ có watermark, tài khoản hay tường phí trên file tải về.',
      },
    ],
    relatedSlugs: ['/image-border-generator', '/image-cropper', '/add-background-to-image', '/'],
  },
  {
    slug: '/image-brightness-editor',
    name: 'Chỉnh Độ Sáng Ảnh',
    shortDescription: 'Làm sáng hoặc tối ảnh với xem trước trước/sau trực tiếp.',
    category: 'crop-edit',
    seoTitle: 'Chỉnh Độ Sáng Ảnh Miễn Phí – Làm Sáng Hoặc Tối Ảnh',
    seoDescription: 'Chỉnh ánh sáng ảnh nhanh với công cụ chỉnh độ sáng ảnh miễn phí. Trượt từ -100% đến +100%, dùng mẫu nhanh, so sánh trước và sau, và xuất riêng tư.',
    h1: 'Chỉnh Độ Sáng Ảnh Online Miễn Phí',
    subtitle:
      'Được tạo cho nhiếp ảnh gia sửa ảnh thiếu sáng, môi giới bất động sản làm sáng phòng, và người bán làm đẹp ảnh sản phẩm, công cụ chỉnh độ sáng ảnh chạy trong trình duyệt của chúng tôi điều chỉnh độ sáng mượt mà mà không tải ảnh gốc lên. Xoay thanh trượt từ -100% đến +100%, thử mẫu ánh sáng tức thì, và kiểm tra kết quả bằng so sánh chia đôi trực tiếp.',
    howToSteps: [
      {
        title: 'Thả hoặc chọn ảnh cần làm sáng hoặc tối',
        description:
          'Tải lên bất kỳ ảnh JPG, PNG, WebP, HEIC, GIF, BMP hoặc SVG nào tối đa 20 MB vào vùng thả, hoặc dán bằng Ctrl+V.',
      },
      {
        title: 'Chỉnh thanh trượt Mức Độ Sáng hoặc Mẫu Nhanh',
        description:
          'Di chuyển Mức Độ Sáng từ -100% Tối Hơn đến +100% Sáng Hơn, hoặc bấm Tối (-30%), Mờ (-15%), Gốc (0%), Sáng (+15%), Rực Rỡ (+30%) hoặc Sáng Mạnh (+50%).',
      },
      {
        title: 'So sánh chế độ Sau, Trước và So Sánh Chia Đôi',
        description:
          'Chuyển giữa các tab Sau, Trước và So Sánh Chia Đôi — hoặc mở So Sánh Toàn Màn Hình — để xác minh chi tiết vùng tối và vùng sáng.',
      },
      {
        title: 'Chọn Định Dạng Xuất và Chất Lượng',
        description:
          'Chọn định dạng xuất Gốc, JPG, PNG hoặc WEBP và chỉnh thanh trượt Chất Lượng (10%–100%) khi lưu định dạng nén mất dữ liệu.',
      },
      {
        title: 'Tải ảnh đã chỉnh về',
        description:
          'Bấm Tải Ảnh Đã Chỉnh Xuống để xử lý đường cong độ sáng ở độ phân giải gốc đầy đủ và lưu <tên>_brightness ngay trên máy.',
      },
    ],
    features: [
      {
        title: 'Điều chỉnh pixel thời gian thực',
        description:
          'Xem trước tức thì trên trình duyệt máy tính và di động mà không cần vòng qua máy chủ.',
      },
      {
        title: 'Mẫu phơi sáng nhanh',
        description:
          'Thử các mẫu Tối, Mờ, Sáng, Rực Rỡ và Sáng Mạnh chỉ bằng một cú nhấp chuột.',
      },
      {
        title: 'Kiểm tra trước & sau',
        description:
          'So sánh ảnh đã chỉnh cạnh nhau hoặc bằng thanh trượt so sánh tương tác.',
      },
      {
        title: 'Xử lý riêng tư phía client',
        description:
          'Ảnh cá nhân của bạn luôn ở trong trình duyệt của bạn.',
      },
    ],
    faqs: [
      {
        question: 'Thanh trượt Mức Độ Sáng thay đổi pixel thế nào mà không làm bạc màu ngay lập tức?',
        answer:
          'Di chuyển Mức Độ Sáng từ -100% Tối Hơn đến +100% Sáng Hơn sẽ điều chỉnh độ chói mượt mà trên toàn khung hình theo thời gian thực trong HTML5 Canvas. Kiểm tra So Sánh Chia Đôi hoặc So Sánh Toàn Màn Hình giúp bạn làm sáng vùng tối mà không làm cháy vùng trắng sáng.',
      },
      {
        question: 'Tại sao ảnh của tôi tự xem trước ở +15% ngay sau khi tải lên?',
        answer:
          'Trình chỉnh sửa khởi tạo ở mức Sáng (+15%) để bạn lập tức thấy độ nâng phơi sáng nhẹ khi tải lên. Bấm Gốc (0%) hoặc Đặt Lại trong mục Điều Khiển Độ Sáng bất cứ lúc nào để so sánh từ đường cơ sở trung tính.',
      },
      {
        question: 'Những Mẫu Nhanh nào được tích hợp để thử phơi sáng một cú nhấp chuột?',
        answer:
          'Sáu mẫu bao phủ các điều chỉnh phổ biến: Tối (-30%), Mờ (-15%), Gốc (0%), Sáng (+15%), Rực Rỡ (+30%) và Sáng Mạnh (+50%). Bấm bất kỳ thẻ nào cũng đưa thanh trượt về ngay mức đó trong khi vẫn cho phép bạn tinh chỉnh theo từng bước 1%.',
      },
      {
        question: 'Chế độ Sau, Trước, So Sánh Chia Đôi và So Sánh Toàn Màn Hình khác nhau thế nào?',
        answer:
          'Sau hiển thị canvas đã chỉnh của bạn, Trước cho thấy ảnh gốc chưa chạm, và So Sánh Chia Đôi thêm thanh trượt Trước/Sau tương tác trực tiếp trong khung nhìn. Bấm So Sánh Toàn Màn Hình sẽ vẽ một Blob độ phân giải đầy đủ và mở cửa sổ so sánh chi tiết.',
      },
      {
        question: 'Làm sáng ảnh có giảm độ phân giải hoặc kích thước pixel không?',
        answer:
          'Không, bản xem trước trực tiếp chỉ thu phóng tối đa 1000 px để thanh trượt tương tác phản hồi mượt. Bấm Tải Ảnh Đã Chỉnh Xuống sẽ vẽ một Canvas độ phân giải đầy đủ, giữ đúng chiều rộng và chiều cao gốc của ảnh.',
      },
      {
        question: 'Khi nào nên làm tối ảnh bằng giá trị âm như -15% hoặc -30%?',
        answer:
          'Giá trị độ sáng âm làm dịu ảnh chụp điện thoại bị thừa sáng và chói cửa sổ một cách gọn gàng. Làm tối ảnh hero sáng cũng tạo độ tương phản tốt hơn phía sau tiêu đề phủ trắng.',
      },
      {
        question: 'Công cụ chỉnh độ sáng ảnh có giữ nền trong suốt trên PNG không?',
        answer:
          'Có, giữ Gốc (đối với PNG/WebP) hoặc chọn PNG hoặc WebP sẽ giữ vùng trong suốt sạch sẽ trên nền khung nhìn ô caro. Nếu chọn định dạng xuất JPG, vùng trong suốt sẽ làm phẳng mượt lên nền trắng đặc.',
      },
      {
        question: 'Ảnh gia đình cá nhân hoặc bản xem trước của khách có bị tải lên máy chủ ngoài không?',
        answer:
          'Không, biến đổi pixel độ sáng và mã hóa định dạng chạy ngay trên máy trong trình duyệt bằng HTML5 Canvas. Ảnh của bạn không bao giờ rời khỏi máy tính hoặc điện thoại.',
      },
      {
        question: 'Tôi có thể làm sáng hoặc tối những định dạng file ảnh nào ở đây?',
        answer:
          'Bạn có thể mở file JPG, PNG, WebP, HEIC/HEIF của iPhone, GIF, BMP và SVG tối đa 20 MB mỗi file. GIF động sẽ xuất khung mở đầu đã làm sáng dưới dạng ảnh tĩnh.',
      },
      {
        question: 'Tôi có thể dán ảnh chụp màn hình tối thẳng từ clipboard để làm sáng không?',
        answer:
          'Có, nhấn Ctrl+V (hoặc Cmd+V trên máy Mac) trên vùng tải lên sau khi sao chép ảnh chụp màn hình hoặc slide tối. Ảnh sẽ tải thẳng vào khung nhìn trực tiếp, sẵn sàng chỉnh và xuất.',
      },
      {
        question: 'Điều gì xảy ra nếu tôi đẩy độ sáng lên tới +100%?',
        answer:
          'Cài đặt dương cực mạnh làm sáng tông giữa mạnh và đẩy vùng sáng về trắng tinh, hữu ích cho đồ họa high-key cách điệu nhưng có thể làm mất chi tiết vùng sáng trong ảnh chân dung. Hãy nhắm mức +10% đến +35% để khôi phục phơi sáng tự nhiên.',
      },
      {
        question: 'Tôi có thể chỉnh độ tương phản hoặc độ rực màu sau khi làm sáng ảnh không?',
        answer:
          'Có, tải ảnh đã làm sáng về trước, rồi bấm Công Cụ Chỉnh Độ Tương Phản Ảnh hoặc Công Cụ Chỉnh Độ Bão Hòa Ảnh trong mục Công Cụ Ảnh Miễn Phí Liên Quan bên dưới. Tách điều chỉnh qua từng công cụ chuyên dụng giúp bạn tinh chỉnh độ tương phản hoặc độ giàu màu chính xác.',
      },
      {
        question: 'Tại sao Chất Lượng biến mất khi tôi chọn PNG trong mục Định Dạng Xuất?',
        answer:
          'PNG dùng nén không mất dữ liệu nên không có mức chất lượng phần trăm thay đổi. Chuyển sang Gốc (đối với JPEG), JPG hoặc WebP để hiện và chỉnh thanh trượt Chất Lượng 10%–100% (mặc định 90%).',
      },
      {
        question: 'Làm sao hoàn tác mọi thay đổi độ sáng nhanh chóng?',
        answer:
          'Bấm nút Đặt Lại màu xanh dương ở góc trên bên phải của mục Điều Khiển Độ Sáng bất cứ lúc nào. Bạn cũng có thể bấm thẻ mẫu Gốc (0%) để quay thẳng về mức không điều chỉnh.',
      },
      {
        question: 'Xuất ảnh đã chỉnh có xóa thẻ vị trí GPS EXIF của máy ảnh không?',
        answer:
          'Có, vẽ lên một HTML5 Canvas mới sẽ tạo bitmap đầu ra sạch mà không sao chép dữ liệu EXIF của máy ảnh. Mọi tọa độ GPS hoặc số serial thiết bị đều bị loại tự động.',
      },
      {
        question: 'Tôi có thể tải ảnh khác ngay sau khi xuất mà không cần làm mới trang không?',
        answer:
          'Có, bấm biểu tượng thùng rác màu đỏ (Xóa ảnh) trong thanh công cụ xem trước bất cứ lúc nào. Thao tác này xóa ảnh đang hoạt động gọn gàng và đưa bạn thẳng về vùng thả tải lên.',
      },
      {
        question: 'Tên file nào được dùng khi tôi bấm Tải Ảnh Đã Chỉnh Xuống?',
        answer:
          'Trình xuất giữ tên gốc đã làm sạch của bạn và thêm _brightness cùng phần mở rộng định dạng đã chọn. Ví dụ: kitchen.jpg lưu gọn thành kitchen_brightness.jpg.',
      },
      {
        question: 'Trình chỉnh sửa có hoạt động tin cậy trên Safari iPhone và Chrome Android không?',
        answer:
          'Có, mọi thẻ mẫu, thanh trượt và chế độ xem so sánh chia đôi đều hoạt động mượt trên màn hình cảm ứng di động. Bạn có thể làm sáng ảnh cuộn camera tối trực tiếp trong Safari hoặc Chrome trên điện thoại.',
      },
      {
        question: 'Tại sao ảnh JPEG tối đã nén mạnh lại hiện nhiễu khối mờ khi làm sáng mạnh?',
        answer:
          'Vùng tối trong ảnh JPEG nén mạnh thường chứa lỗi lượng tử hóa ẩn trong bóng tối; nâng độ sáng từ +40% trở lên sẽ làm nhiễu vùng tối hiện có lộ ra. Giữ điều chỉnh vừa phải (+15% đến +30%) sẽ duy trì tông màu sạch hơn.',
      },
      {
        question: 'Có watermark, đăng ký tài khoản hay giới hạn nào khi làm sáng ảnh không?',
        answer:
          'Không, công cụ chỉnh độ sáng ảnh hoàn toàn miễn phí, không watermark hay đăng ký. Bạn có thể làm sáng hoặc tối không giới hạn ảnh tối đa 20 MB mỗi file.',
      },
    ],
    relatedSlugs: ['/image-contrast-editor', '/image-saturation-editor', '/image-filters', '/'],
  },
  {
    slug: '/image-contrast-editor',
    name: 'Chỉnh Độ Tương Phản Ảnh',
    shortDescription: 'Tăng hoặc giảm độ tương phản ảnh với so sánh trước/sau trực tiếp.',
    category: 'crop-edit',
    seoTitle: 'Chỉnh Độ Tương Phản Ảnh Miễn Phí – Điều Chỉnh Độ Tương Phản',
    seoDescription: 'Chỉnh độ sâu vùng tối và vùng sáng với công cụ chỉnh độ tương phản ảnh miễn phí. Trượt từ -100% đến +100%, thử 6 mẫu, so sánh chia đôi và xuất riêng tư.',
    h1: 'Chỉnh Độ Tương Phản Ảnh Online Miễn Phí',
    subtitle:
      'Được thiết kế cho nhiếp ảnh gia, người bán hàng online và nhà thiết kế sửa ảnh mờ sương hoặc phẳng, công cụ chỉnh độ tương phản ảnh chạy trong trình duyệt này giúp bạn làm sâu vùng tối và tăng độ tách tông trong vài giây. Chọn mẫu một cú nhấp chuột, kiểm tra bản xem trước chia đôi, và xuất ngay trên máy mà không tải lên máy chủ.',
    howToSteps: [
      {
        title: 'Thả hoặc chọn ảnh',
        description:
          'Tải lên ảnh JPG, PNG, WebP, HEIC, GIF, BMP hoặc SVG tối đa 20 MB vào vùng thả của trình chỉnh sửa, chọn từ ổ đĩa, hoặc dán trực tiếp bằng Ctrl+V.',
      },
      {
        title: 'Xem bản xem trước canvas trực tiếp',
        description:
          'Ảnh của bạn tải lên bản xem trước Canvas responsive bắt đầu ở độ tương phản +20% để bạn lập tức thấy độ nổi tông nhẹ ảnh hưởng thế nào tới sự tách tông.',
      },
      {
        title: 'Chỉnh thanh trượt Mức Độ Tương Phản hoặc mẫu',
        description:
          'Kéo thanh trượt Mức Độ Tương Phản bất kỳ đâu từ -100% Phẳng đến +100% Tương Phản Cao, hoặc bấm Nhẹ (-25%), Mờ (-10%), Gốc (0%), Sắc Nét (+20%), Mạnh (+40%) hoặc Ấn Tượng (+70%).',
      },
      {
        title: 'Xác minh chi tiết bằng công cụ so sánh',
        description:
          'Chuyển giữa Sau, Trước và So Sánh Chia Đôi (dùng thanh trượt chia dọc), hoặc bấm So Sánh Toàn Màn Hình để kiểm tra vùng tối và vùng sáng cận cảnh.',
      },
      {
        title: 'Chọn định dạng, chất lượng và tải về',
        description:
          'Chọn Gốc, JPG, PNG hoặc WebP trong mục Định Dạng Xuất, chỉnh Chất Lượng (10%–100%) cho định dạng nén mất dữ liệu, rồi bấm Tải Ảnh Đã Chỉnh Xuống.',
      },
    ],
    features: [
      {
        title: 'Đường cong tương phản chính xác',
        description:
          'Mở rộng hoặc thu hẹp dải tông mượt mà mà không gây lệch màu gắt.',
      },
      {
        title: 'Mẫu một cú nhấp chuột',
        description:
          'Thử ngay các mẫu Nhẹ, Mờ, Sắc Nét, Mạnh hoặc Ấn Tượng.',
      },
      {
        title: 'Cửa sổ trước/sau tương tác',
        description:
          'Kiểm tra chi tiết vùng tối và vùng sáng trước khi tải về.',
      },
      {
        title: '100% phía client',
        description:
          'Xử lý nhanh trong trình duyệt, không tải lên hay watermark.',
      },
    ],
    faqs: [
      {
        question: 'Di chuyển thanh trượt Mức Độ Tương Phản lên dương hoặc âm tạo hiệu ứng hình ảnh gì?',
        answer:
          'Di chuyển thanh trượt trên 0% sẽ kéo tông tối tối hơn và tông sáng sáng hơn quanh điểm giữa để chủ thể nổi bật khỏi nền mờ sương. Di chuyển xuống dưới 0% sẽ nén vùng sáng và vùng tối về xám trung tính cho vẻ mờ nhẹ.',
      },
      {
        question: 'Những Mẫu Nhanh nào được tích hợp trong bảng Điều Khiển Tương Phản?',
        answer:
          'Sáu mẫu một cú nhấp chuột được tích hợp: Nhẹ (-25%), Mờ (-10%), Gốc (0%), Sắc Nét (+20%), Mạnh (+40%) và Ấn Tượng (+70%). Bấm bất kỳ mẫu nào cũng đặt thanh trượt Mức Độ Tương Phản ngay lập tức và cập nhật bản xem trước canvas trực tiếp.',
      },
      {
        question: 'Tại sao công cụ tương phản bắt đầu ở +20% ngay sau khi tải ảnh lên?',
        answer:
          'Trình chỉnh sửa khởi tạo ở mức Sắc Nét (+20%) để bạn thấy ngay một cải thiện tông đang hoạt động thay vì một bức ảnh không thay đổi. Bấm Gốc (0%) hoặc Đặt Lại ở đầu mục Điều Khiển Tương Phản bất cứ lúc nào để quay về mức không điều chỉnh.',
      },
      {
        question: 'Công cụ chỉnh độ tương phản ảnh tính thay đổi pixel như thế nào?',
        answer:
          'Nó áp dụng đường cong tương phản tuyến tính chuẩn theo từng pixel trên các kênh RGB trên HTML5 Canvas trong khi giữ nguyên kênh alpha. Chạy tính toán trực tiếp trong ImageData tránh sự khác biệt của bộ lọc CSS trên Safari iOS và trình duyệt di động.',
      },
      {
        question: 'Làm sao kiểm tra vùng tối trước và sau mà không cần đoán?',
        answer:
          'Dùng các tab Sau, Trước và So Sánh Chia Đôi ngay phía trên khung xem trước để kéo đường chia trực tiếp từ 0% đến 100% qua ảnh. Để kiểm tra pixel cận cảnh hơn, bấm So Sánh Toàn Màn Hình để mở cửa sổ so sánh cạnh nhau.',
      },
      {
        question: 'Tăng tương phản có làm cháy mây sáng hoặc nghiền nát vùng tối đen không?',
        answer:
          'Đẩy tương phản mạnh về +70% đến +100% sẽ đẩy vùng sáng gần trắng về trắng tinh 255 và vùng tối sâu về 0. Dùng So Sánh Chia Đôi để theo dõi kết cấu tinh tế trên áo sáng hoặc tóc tối và giảm lại về +15%–+40% nếu thấy hiện tượng cháy.',
      },
      {
        question: 'Tôi có thể mở những loại file ảnh nào trong trình chỉnh sửa tương phản?',
        answer:
          'Bạn có thể tải lên file JPG, PNG, WebP, HEIC/HEIF của iPhone, GIF, BMP và SVG tối đa 20 MB mỗi file. Ảnh HEIC được giải mã trong trình duyệt tự động trước khi hiển thị trên canvas chỉnh sửa.',
      },
      {
        question: 'Tôi có thể lưu logo PNG đã chỉnh tương phản với nền trong suốt nguyên vẹn không?',
        answer:
          'Có, giữ định dạng Gốc trên PNG trong suốt hoặc chọn định dạng xuất PNG hoặc WebP sẽ giữ độ trong suốt alpha hoàn toàn. Chỉ khi chuyển Định Dạng Xuất sang JPG thì vùng trong suốt mới được lấp lên nền trắng đặc.',
      },
      {
        question: 'Bản xem trước thu nhỏ có ảnh hưởng đến độ phân giải tải về cuối cùng của tôi không?',
        answer:
          'Không, bản xem trước trên màn hình giới hạn tỉ lệ hiển thị ở 1.000 px ở cạnh dài nhất để kéo thanh trượt luôn tức thì. Khi bạn bấm Tải Ảnh Đã Chỉnh Xuống, cùng một công thức tương phản đó sẽ vẽ trên 100% kích thước pixel gốc của bạn.',
      },
      {
        question: 'Tôi có thể dán ảnh chụp màn hình từ clipboard để sửa ảnh chụp màn hình mờ nhạt không?',
        answer:
          'Có, nhấn Ctrl+V (hoặc Cmd+V trên máy Mac) ở bất kỳ đâu trên màn hình tải lên để tải ảnh clipboard thẳng vào trình chỉnh sửa. Chỉnh tương phản thêm +20% đến +35% rất hiệu quả để làm đường biểu đồ mờ hoặc chữ giao diện xám sắc nét hơn.',
      },
      {
        question: 'Chỉnh tương phản có biến ảnh màu thành đen trắng không?',
        answer:
          'Không, tương phản thay đổi khoảng cách độ chói trên kênh đỏ, xanh lá và xanh dương theo tỉ lệ mà không loại bỏ thông tin sắc độ. Lưu ý rằng tương phản dương mạnh tự nhiên làm tăng nhẹ độ rực màu cảm nhận, còn tương phản âm làm màu dịu xuống.',
      },
      {
        question: 'Nên chọn mức chất lượng nào khi xuất dưới dạng JPG hoặc WebP?',
        answer:
          'Thanh trượt Chất Lượng mặc định ở 90%, giữ chuyển tông mượt mà không bị dải màu trong khi dung lượng file vẫn vừa phải. Giảm xuống khoảng 75%–80% để tải lên web nhỏ hơn, hoặc chuyển sang PNG để xuất hoàn toàn không mất dữ liệu.',
      },
      {
        question: 'File tải về được đặt tên thế nào sau khi chỉnh tương phản?',
        answer:
          'File đã lưu của bạn thêm _contrast vào tên gốc đã làm sạch, tiếp theo là phần mở rộng định dạng đã chọn, như portrait_contrast.jpg. File gốc trên ổ đĩa của bạn không bao giờ bị sửa đổi hay ghi đè.',
      },
      {
        question: 'Công cụ này có làm sắc nét ảnh mờ nhòe không lấy nét được không?',
        answer:
          'Tăng tương phản làm tăng độ tách cạnh giữa vùng sáng và vùng tối, giúp ảnh mờ sương hoặc có sương mù trông rõ ràng hơn đáng kể. Tuy nhiên, nó điều chỉnh đường cong tông thay vì áp dụng làm sắc nét cạnh bằng tích chập, vì vậy ảnh rung tay nghiêm trọng không thể lấy nét lại.',
      },
      {
        question: 'Có ảnh nào bị tải lên máy chủ ngoài để xử lý tương phản không?',
        answer:
          'Không, mọi tính toán pixel diễn ra trong tab trình duyệt trên máy bạn bằng HTML5 Canvas và JavaScript. Ảnh chân dung cá nhân, CMND đã quét và ảnh sản phẩm chưa phát hành không bao giờ rời khỏi máy tính hoặc điện thoại của bạn.',
      },
      {
        question: 'Điều gì xảy ra khi tôi tải GIF động lên để chỉnh tương phản?',
        answer:
          'HTML5 Canvas vẽ và chỉnh khung hình đầu tiên của GIF, xuất một ảnh tĩnh duy nhất ở định dạng bạn chọn. Không hỗ trợ chỉnh tương phản GIF động nhiều khung hình ở đây.',
      },
      {
        question: 'Chỉnh tương phản khác gì chỉnh độ sáng?',
        answer:
          'Độ sáng dịch chuyển mọi pixel cùng sáng hơn hoặc tối hơn một cách đồng đều, trong khi độ tương phản mở rộng hoặc thu hẹp khoảng cách giữa vùng tối và vùng sáng quanh điểm xám giữa. Nếu ảnh tối trông bị bạc sau khi làm sáng, hãy dùng tiếp công cụ tương phản của chúng tôi.',
      },
      {
        question: 'Tôi có thể dùng tương phản âm để làm mềm vùng tối gắt buổi trưa trên ảnh chân dung không?',
        answer:
          'Có, chọn Nhẹ (-25%) hoặc Mờ (-10%) sẽ giảm chuyển đổi gắt giữa da sáng nắng và vùng tối. Với chói cực mạnh hoặc tâm trạng biên tập phẳng, kéo thanh trượt xuống -30% đến -50%.',
      },
      {
        question: 'Làm sao tải ảnh mới mà không cần làm mới tab trình duyệt?',
        answer:
          'Bấm biểu tượng thùng rác ở góc trên bên phải của bảng Xem Trước để xóa ảnh hiện tại và quay về vùng tải lên. Thao tác này thu hồi bộ nhớ trình duyệt tạm và chuẩn bị canvas cho ảnh tiếp theo của bạn.',
      },
      {
        question: 'Trình chỉnh sửa tương phản có hoạt động tin cậy trên Safari iOS và Chrome Android không?',
        answer:
          'Có, phép toán tông màu chạy rõ ràng trong mảng pixel ImageData JavaScript thay vì dựa vào bộ lọc canvas CSS vốn hoạt động không nhất quán trên trình duyệt di động. Nhờ đó bản xem trước tương phản và file tải cuối cùng đồng nhất trên iPhone, Android, macOS và Windows.',
      },
    ],
    relatedSlugs: ['/image-brightness-editor', '/image-saturation-editor', '/image-filters', '/'],
  },
  {
    slug: '/image-saturation-editor',
    name: 'Chỉnh Độ Bão Hòa Ảnh',
    shortDescription: 'Tăng độ rực màu hoặc khử màu ảnh gọn gàng trong trình duyệt.',
    category: 'crop-edit',
    seoTitle: 'Chỉnh Độ Bão Hòa Ảnh Miễn Phí – Điều Chỉnh Độ Rực Màu',
    seoDescription: 'Tăng màu nhạt hoặc chuyển sang đen trắng với công cụ chỉnh độ bão hòa ảnh miễn phí. Xem trước so sánh chia đôi trực tiếp và xuất sạch trong trình duyệt.',
    h1: 'Chỉnh Độ Bão Hòa Ảnh Online Miễn Phí',
    subtitle:
      'Được tạo cho nhiếp ảnh gia, nhà sáng tạo mạng xã hội và biên tập viên thương mại điện tử cân bằng cường độ màu, công cụ chỉnh độ bão hòa ảnh chạy trong trình duyệt này điều chỉnh độ rực màu theo độ chói cảm nhận. Dịch chuyển mượt từ xám -100% sắc nét sang tông +100% sống động với so sánh chia đôi và xuất ngay trên máy.',
    howToSteps: [
      {
        title: 'Tải ảnh vào trình chỉnh sửa',
        description:
          'Kéo thả bất kỳ ảnh JPG, PNG, WebP, HEIC, GIF, BMP hoặc SVG nào tối đa 20 MB, chọn file từ thiết bị, hoặc dán bằng Ctrl+V.',
      },
      {
        title: 'Xem trước mức tăng màu ban đầu',
        description:
          'Trình chỉnh sửa tải với Mức Độ Bão Hòa đặt ở +25% để bạn lập tức thấy màu sắc phong phú hơn nâng tông màu nhạt thế nào trên canvas xem trước trực tiếp.',
      },
      {
        title: 'Tinh chỉnh Mức Độ Bão Hòa hoặc bấm mẫu',
        description:
          'Kéo thanh trượt từ -100% Xám đến +100% Rực Rỡ, hoặc chọn Xám (-100%), Mờ (-40%), Gốc (0%), Đậm (+30%), Rực Rỡ (+60%) hoặc Siêu Rực (+90%).',
      },
      {
        title: 'Kiểm tra tông da bằng So Sánh Chia Đôi',
        description:
          'Bật Sau, Trước hoặc So Sánh Chia Đôi với thanh trượt quét — hoặc bấm So Sánh Toàn Màn Hình — để đảm bảo màu đỏ và tông da trông cân bằng thay vì quá bão hòa.',
      },
      {
        title: 'Chọn định dạng xuất và lưu ngay trên máy',
        description:
          'Chọn Gốc, JPG, PNG hoặc WebP, chỉnh Chất Lượng (10%–100%) nếu không phải PNG, rồi bấm Tải Ảnh Đã Chỉnh Xuống.',
      },
    ],
    features: [
      {
        title: 'Độ bão hòa giữ độ chói',
        description:
          'Điều chỉnh cường độ màu theo độ sáng cảm nhận để tông màu luôn tự nhiên.',
      },
      {
        title: 'Từ xám đến siêu rực',
        description:
          'Trượt về -100% để có đen trắng tức thì hoặc đẩy dương để có màu phong phú, sống động.',
      },
      {
        title: 'Xem trước trước/sau trực tiếp',
        description:
          'Bật hoặc kéo chế độ xem so sánh để tránh làm tông da quá bão hòa.',
      },
      {
        title: 'Riêng tư & miễn phí',
        description:
          'Không tải lên, không tài khoản và không watermark.',
      },
    ],
    faqs: [
      {
        question: 'Công cụ chỉnh độ bão hòa ảnh này giữ độ sáng cảm nhận như thế nào?',
        answer:
          'Mỗi pixel tính độ chói cảm nhận bằng trọng số ITU-R BT.709 (0,2126 R + 0,7152 G + 0,0722 B) và nội suy các kênh RGB về phía hoặc ra xa điểm xám trung tính đó. Nhờ đó màu đỏ và xanh lá rực rỡ không trở nên sáng bất tự nhiên hay xỉn màu khi khử màu.',
      },
      {
        question: 'Những mẫu một cú nhấp chuột nào được tích hợp trong Điều Khiển Độ Bão Hòa?',
        answer:
          'Bạn có sáu mẫu: Xám (-100%), Mờ (-40%), Gốc (0%), Đậm (+30%), Rực Rỡ (+60%) và Siêu Rực (+90%). Bấm bất kỳ nút nào cũng cập nhật bản xem trước ngay lập tức và có thể tinh chỉnh sau bằng thanh trượt.',
      },
      {
        question: 'Tôi có thể biến ảnh chân dung màu thành ảnh xám sạch chỉ bằng một cú nhấp chuột không?',
        answer:
          'Có, bấm mẫu Xám (-100%) hoặc trượt Mức Độ Bão Hòa hết sang trái tới -100%. Vì dùng trọng số độ chói chuẩn, tông da và cây xanh chuyển thành giá trị đơn sắc trông tự nhiên thay vì giá trị trung bình phẳng.',
      },
      {
        question: 'Tại sao Mức Độ Bão Hòa mặc định ở +25% khi file tải lần đầu?',
        answer:
          'Bắt đầu ở +25% thể hiện ngay một mức tăng rực rỡ nhẹ nhàng ngay khi ảnh xuất hiện. Bấm Gốc (0%) hoặc liên kết Đặt Lại bất cứ lúc nào nếu bạn muốn chỉnh tăng hoặc giảm từ mức trung tính.',
      },
      {
        question: 'Làm sao tránh ảnh chân dung trông cam hoặc neon khi tăng màu?',
        answer:
          'Giữ trong khoảng +15% đến +35% với ảnh người và chuyển sang tab So Sánh Chia Đôi để quét qua tông da gốc và canvas đã tăng. So Sánh Toàn Màn Hình cũng giúp bạn kiểm tra má, môi và nhãn sản phẩm kỹ trước khi xuất.',
      },
      {
        question: 'Điều gì xảy ra nếu tôi tăng độ bão hòa trên ảnh vốn đã đơn sắc hoặc xám?',
        answer:
          'Pixel mà giá trị đỏ, xanh lá và xanh dương bằng nhau nằm đúng trên trục độ chói, vì vậy tăng độ bão hòa không thể tạo ra màu không có sẵn. Tuy nhiên, trên ảnh đen trắng ngả sepia hoặc ấm, độ bão hòa dương sẽ nhấn mạnh sắc độ màu bên dưới.',
      },
      {
        question: 'Trình chỉnh sửa độ bão hòa có hỗ trợ icon PNG trong suốt và sticker WebP không?',
        answer:
          'Có, điều chỉnh pixel thay đổi cường độ màu RGB trong khi giữ nguyên kênh trong suốt alpha. Giữ định dạng Gốc hoặc chọn PNG hoặc WebP trong mục Định Dạng Xuất để giữ nền trong suốt sạch sẽ.',
      },
      {
        question: 'Điều gì xảy ra với độ trong suốt nếu tôi xuất sticker đã khử màu dưới dạng JPG?',
        answer:
          'Vì JPG không hỗ trợ độ trong suốt alpha, pixel trong suốt sẽ tự làm phẳng lên canvas trắng đặc (#FFFFFF) trước khi mã hóa JPEG. Chọn PNG hoặc WebP bất cứ khi nào bạn cần giữ độ trong suốt.',
      },
      {
        question: 'Những định dạng tải lên và dung lượng file tối đa nào được chấp nhận?',
        answer:
          'Bạn có thể thả ảnh JPG, PNG, WebP, HEIC/HEIF, GIF, BMP và SVG tối đa 20 MB mỗi file. GIF động tải khung hình đầu tiên lên Canvas để chỉnh sửa và xuất thành ảnh tĩnh.',
      },
      {
        question: 'Có khác biệt nào giữa độ rõ của bản xem trước và độ phân giải file tải về không?',
        answer:
          'Canvas tương tác xem trước tối đa 1.000 px ở cạnh dài nhất để điều chỉnh thanh trượt mượt mà, không lag. Khi xuất, trình chỉnh sửa chạy một lần Canvas độ phân giải đầy đủ ở đúng chiều rộng và chiều cao gốc của file.',
      },
      {
        question: 'Khi nào nên dùng Mờ (-40%) thay vì Xám (-100%)?',
        answer:
          'Mờ (-40%) làm dịu biển neon quá sáng, nền phòng bận rộn hoặc ánh sáng sản phẩm gắt trong khi vẫn giữ gợi ý màu tinh tế. Nó phù hợp cho ảnh hero blog yên tĩnh hoặc nền phía sau chữ.',
      },
      {
        question: 'Tôi có thể dán ảnh thẳng từ clipboard vào công cụ bão hòa không?',
        answer:
          'Có, sao chép bất kỳ ảnh hoặc ảnh chụp màn hình nào vào clipboard rồi nhấn Ctrl+V (hoặc Cmd+V) trên lời nhắc tải lên. Ảnh sẽ mở ngay trong trình chỉnh sửa, sẵn sàng chỉnh màu.',
      },
      {
        question: 'Tên file xuất phân biệt ảnh đã chỉnh với ảnh gốc như thế nào?',
        answer:
          'File xuất tự thêm _saturation vào tên gốc đã làm sạch của bạn (ví dụ: sunset_saturation.jpg). Ảnh nguồn của bạn vẫn nguyên vẹn trên thiết bị.',
      },
      {
        question: 'Mức Chất Lượng nào áp dụng khi lưu dưới dạng Gốc, JPG hoặc WebP?',
        answer:
          'Xuất JPG và WebP mặc định ở Chất Lượng 90%, bạn có thể chỉnh từ 10% đến 100% trước khi tải về. Khi chọn PNG, thanh trượt Chất Lượng ẩn đi vì PNG luôn xuất không mất dữ liệu.',
      },
      {
        question: 'Ảnh tải lên có bị truyền tới GPU đám mây hoặc máy chủ bên thứ ba không?',
        answer:
          'Không bao giờ — mọi tính toán pixel thực thi trong tab trình duyệt trên máy của chính bạn. Không dữ liệu ảnh, mẫu hay tên file nào được gửi qua mạng.',
      },
      {
        question: 'Chỉnh độ bão hòa ở đây có xóa metadata GPS EXIF của máy ảnh không?',
        answer:
          'Có, vẽ lên HTML5 Canvas và ghi blob ảnh mới sẽ bỏ qua header EXIF gốc như số serial máy ảnh và thẻ vị trí GPS. Điều đó giúp ảnh mạng xã hội đã chia sẻ luôn sạch về quyền riêng tư.',
      },
      {
        question: 'Làm sao đặt lại chỉ thanh trượt độ bão hòa mà không tải lại ảnh?',
        answer:
          'Bấm nút Đặt Lại ở góc trên bên phải của mục Điều Khiển Độ Bão Hòa để đưa thanh trượt về ngay 0%. Bạn cũng có thể bấm nút mẫu nhanh Gốc (0%) ngay dưới thanh trượt mà không cần tải lại file.',
      },
      {
        question: 'Tôi có thể tăng màu lá cây và bầu trời bằng Siêu Rực (+90%) một cách gọn gàng không?',
        answer:
          'Siêu Rực (+90%) nhân đôi chênh lệch sắc độ mượt mà tới giới hạn kênh RGB (0–255), tạo poster du lịch ấn tượng và ảnh sản phẩm nổi bật. Hãy theo dõi màu đỏ và xanh dương sáng trong So Sánh Chia Đôi để chắc kết cấu cánh hoa hoặc vải mỏng không bị cháy.',
      },
      {
        question: 'Tôi có thể chuyển biểu đồ PNG nhiều màu thành WebP nhẹ hơn trong khi làm dịu màu không?',
        answer:
          'Có, đặt mức bão hòa mong muốn, chọn WEBP trong mục Định Dạng Xuất, và chỉnh Chất Lượng thành 80%–90%. Bấm Tải Ảnh Đã Chỉnh Xuống sẽ tạo một file WebP gọn nhẹ, cân bằng màu trong một bước.',
      },
      {
        question: 'Công cụ có hoạt động ngoại tuyến sau khi tải và trên màn hình cảm ứng di động không?',
        answer:
          'Có, thanh trượt, nút mẫu và thanh trượt xem trước chia đôi phản hồi mượt với cử chỉ chạm trên Safari iOS và Chrome Android. Vì xử lý không cần gọi máy chủ, chỉnh sửa vẫn chạy ngay cả trên kết nối di động chậm.',
      },
    ],
    relatedSlugs: ['/image-filters', '/image-brightness-editor', '/image-contrast-editor', '/'],
  },
  {
    slug: '/image-filters',
    name: 'Bộ Lọc Ảnh',
    shortDescription: 'Áp dụng bộ lọc xám, sepia, vintage, ấm, lạnh và noir với cường độ tùy chỉnh.',
    category: 'crop-edit',
    seoTitle: 'Bộ Lọc Ảnh Online Miễn Phí – Vintage, Sepia & Đen Trắng Noir',
    seoDescription: 'Tạo phong cách cho ảnh nhanh với bộ lọc ảnh online miễn phí gồm Vintage, Sepia, Đen Trắng Noir, Ấm, Lạnh và Phai Mờ. Chỉnh cường độ bộ lọc ngay trong trình duyệt.',
    h1: 'Bộ Lọc Ảnh Online Miễn Phí',
    subtitle:
      'Lý tưởng cho nhà sáng tạo, blogger và bất kỳ ai muốn khoác lên ảnh chụp hằng ngày một phong cách thống nhất, bộ lọc ảnh online miễn phí này cung cấp 11 tông màu được chọn lọc hiển thị qua ảnh thu nhỏ trực tiếp. Pha bất kỳ bộ lọc nào mượt mà bằng thanh trượt Cường Độ Bộ Lọc và lưu bản sao độ phân giải đầy đủ ngay trong trình duyệt.',
    howToSteps: [
      {
        title: 'Thả hoặc chọn ảnh',
        description:
          'Tải lên bất kỳ ảnh JPG, PNG, WebP, HEIC, GIF, BMP hoặc SVG nào tối đa 20 MB, chọn file từ ổ đĩa, hoặc dán trực tiếp bằng Ctrl+V.',
      },
      {
        title: 'Duyệt ảnh thu nhỏ bộ lọc trực tiếp',
        description:
          'Xem lưới Mẫu Bộ Lọc 12 thẻ hiển thị bản xem trước thu nhỏ thật của Gốc cộng 11 tông màu cách điệu được tạo từ ảnh bạn tải lên.',
      },
      {
        title: 'Chọn kiểu mẫu',
        description:
          'Bấm Xám, Sepia, Vintage, Ấm, Lạnh, Tương Phản Cao, Phai Mờ, Ấn Tượng, Đen Trắng Noir, Giờ Vàng hoặc Đảo Màu để áp dụng lên canvas chính.',
      },
      {
        title: 'Pha độ mạnh bằng Cường Độ Bộ Lọc',
        description:
          'Kéo thanh trượt Cường Độ Bộ Lọc từ 0% đến 100% để làm dịu tông mạnh thành lớp màu nhẹ (hoặc bấm Đặt Lại để quay về Gốc).',
      },
      {
        title: 'Giữ ảnh gốc hoặc mở cửa sổ So Sánh',
        description:
          'Nhấn giữ Giữ Để Xem Ảnh Gốc để kiểm tra A/B tức thì, hoặc bấm So Sánh để mở cửa sổ kiểm tra thanh trượt chia đôi tương tác.',
      },
      {
        title: 'Chọn Định Dạng Xuất và tải về',
        description:
          'Chọn Gốc, JPG, PNG hoặc WebP, chỉnh Chất Lượng (10%–100%) nếu cần, rồi bấm Tải Ảnh Đã Lọc Xuống.',
      },
    ],
    features: [
      {
        title: '11+ mẫu bộ lọc được chọn lọc',
        description:
          'Gồm Xám, Sepia, Vintage, Ấm, Lạnh, Tương Phản Cao, Phai Mờ, Ấn Tượng, Đen Trắng Noir, Giờ Vàng và Đảo Màu.',
      },
      {
        title: 'Thanh trượt cường độ mượt',
        description:
          'Pha bất kỳ bộ lọc nào mượt mà từ 0% đến 100% thay vì kẹt với mặc định gắt.',
      },
      {
        title: 'Dải ảnh thu nhỏ trực tiếp',
        description:
          'Xem trước mọi bộ lọc trông thế nào trên chính ảnh của bạn trước khi chọn.',
      },
      {
        title: 'Canvas 100% phía client',
        description:
          'Hoạt động sẵn sàng ngoại tuyến trong trình duyệt, không tải lên máy chủ.',
      },
    ],
    faqs: [
      {
        question: 'Tôi có thể xem trước 11 kiểu bộ lọc nào trong lưới bộ lọc ảnh online?',
        answer:
          'Bên cạnh Gốc, lưới tạo ảnh thu nhỏ trực tiếp cho Xám, Sepia, Vintage, Ấm, Lạnh, Tương Phản Cao, Phai Mờ, Ấn Tượng, Đen Trắng Noir, Giờ Vàng và Đảo Màu. Mỗi ảnh thu nhỏ hiển thị trực tiếp từ ảnh bạn tải lên thay vì icon mẫu có sẵn.',
      },
      {
        question: 'Thanh trượt Cường Độ Bộ Lọc hoạt động thế nào khi đặt từ 0% đến 100%?',
        answer:
          'Đặt Cường Độ Bộ Lọc dưới 100% sẽ pha tuyến tính giá trị pixel đã lọc trở lại về pixel gốc. Ví dụ: đặt Vintage hoặc Giờ Vàng ở 45% sẽ tạo lớp phim nhẹ nhàng mà không lấn át tông da tự nhiên.',
      },
      {
        question: 'Tại sao công cụ chọn Vintage ở 100% ngay khi tôi thả ảnh vào?',
        answer:
          'Nó mặc định ở Vintage với cường độ đầy đủ để bạn thấy hiệu ứng hoàn chỉnh trên canvas chính ngay khi tải lên. Chỉ cần bấm bất kỳ ô nào khác trong Mẫu Bộ Lọc hoặc bấm Đặt Lại để quay về Gốc.',
      },
      {
        question: 'Bộ lọc Xám và Đen Trắng Noir khác nhau thế nào?',
        answer:
          'Xám chuyển màu thành tông đen trắng cân bằng dùng trọng số độ chói tự nhiên mà không thay đổi độ tương phản. Đen Trắng Noir thêm mức tăng tương phản mạnh 1,65× lên trên chuyển đổi xám để có vùng tối đậm ấn tượng và vùng sáng điện ảnh sáng.',
      },
      {
        question: 'Sepia, Vintage, Phai Mờ và Giờ Vàng khác nhau thế nào về mặt hình ảnh?',
        answer:
          'Sepia chuyển toàn bộ ảnh sang tông nâu đơn sắc cổ điển, còn Vintage pha sepia ấm vào màu gốc với độ ấm phai nhẹ. Phai Mờ nâng vùng đen tối thành xám đá mềm, còn Giờ Vàng tăng đỏ và vàng ấm trong khi làm lạnh xanh dương vùng tối.',
      },
      {
        question: 'Nút Giữ Để Xem Ảnh Gốc giúp chỉnh sửa nhanh thế nào?',
        answer:
          'Nhấn và giữ Giữ Để Xem Ảnh Gốc bằng chuột hoặc ngón tay sẽ tạm lật canvas về ảnh chưa chỉnh và hiển thị huy hiệu Gốc. Thả ra sẽ lập tức khôi phục bản xem trước đã lọc để bạn so sánh A/B trong tích tắc.',
      },
      {
        question: 'Tôi có thể kiểm tra chia đôi cạnh nhau trước khi lưu không?',
        answer:
          'Có, bấm nút So Sánh bên cạnh Giữ Để Xem Ảnh Gốc để mở cửa sổ So Sánh Bộ Lọc đầy đủ. Nó hiển thị dung lượng byte gốc so với đã lọc và thanh trượt quét chia đôi tương tác.',
      },
      {
        question: 'Ảnh tải về có được xử lý ở cùng kích thước nhỏ như ảnh thu nhỏ mẫu không?',
        answer:
          'Không, lưới mẫu dùng ảnh thu nhỏ 120 px để xem trước tức thì và không gian làm việc chính giới hạn ở 1.000 px cho độ phản hồi. Bấm Tải Ảnh Đã Lọc Xuống sẽ xử lý độ phân giải pixel gốc đầy đủ của bạn trên HTML5 Canvas.',
      },
      {
        question: 'Những định dạng file và kích thước tối đa nào hoạt động với bộ lọc ảnh này?',
        answer:
          'Bạn có thể thả file JPG, PNG, WebP, HEIC/HEIF của iPhone, GIF, BMP và SVG tối đa 20 MB mỗi lần tải lên. Định dạng xuất được hỗ trợ là Gốc, JPG, PNG và WebP.',
      },
      {
        question: 'Điều gì xảy ra với vùng trong suốt trên logo PNG khi áp dụng bộ lọc Ấm, Lạnh hoặc Đảo Màu?',
        answer:
          'Mọi phép toán pixel bộ lọc chỉ thay đổi kênh đỏ, xanh lá và xanh dương trong khi giữ nguyên độ trong suốt alpha. Giữ định dạng xuất Gốc, PNG hoặc WebP để giữ nền trong suốt; chọn JPG sẽ lấp vùng trong suốt bằng trắng đặc.',
      },
      {
        question: 'Bộ lọc Đảo Màu hữu ích nhất cho việc gì?',
        answer:
          'Đảo Màu trừ mỗi kênh RGB khỏi 255 để tạo ảnh âm bản màu chính xác của ảnh. Lập trình viên dùng nó để đảo sơ đồ chế độ tối cho tài liệu trắng, và nhiếp ảnh gia dùng nó để xem trước phim âm bản đã quét.',
      },
      {
        question: 'Hiệu ứng bộ lọc có nhất quán trên Chrome, Firefox và Safari iPhone không?',
        answer:
          'Có, cả 11 mẫu đều tính trực tiếp trong vòng lặp pixel ImageData JavaScript thay vì dựa vào chuỗi ctx.filter CSS. Điều đó đảm bảo màu sắc giống hệt trên Safari iOS, Chrome Android và trình duyệt máy tính.',
      },
      {
        question: 'Tôi có thể xếp chồng hai bộ lọc như Lạnh cộng Phai Mờ trên cùng một ảnh không?',
        answer:
          'Mỗi mẫu tính trực tiếp từ ảnh gốc sạch của bạn trong một lần duy nhất, vì vậy bấm ô mới sẽ chuyển mẫu gọn gàng mà không làm giảm chất lượng. Để kết hợp hai tông, hãy tải file PNG đã lọc đầu tiên về rồi thả lại vào để lọc lần hai.',
      },
      {
        question: 'Tên file xuất được gắn thẻ thế nào để tôi nhớ mình đã xuất bộ lọc nào?',
        answer:
          'Trình xuất thêm ID mẫu vào tên gốc đã làm sạch của bạn, như photo_golden-hour.jpg hoặc photo_noir.webp. Nhờ đó việc xuất hai hoặc ba phong cách thử vào một thư mục rất dễ phân biệt.',
      },
      {
        question: 'Tải ảnh lên để áp dụng bộ lọc có gửi ảnh tới máy chủ ngoài không?',
        answer:
          'Không, ảnh thu nhỏ, bản xem trước canvas trực tiếp và file xuất cuối cùng đều chạy hoàn toàn trong bộ nhớ tab trình duyệt của bạn. Không ảnh nào được chuyển tới máy chủ từ xa hay lưu trong nhật ký đám mây.',
      },
      {
        question: 'Tôi có thể dùng bộ lọc Lạnh hoặc Tương Phản Cao trên ảnh chụp màn hình dán từ clipboard không?',
        answer:
          'Có, nhấn Ctrl+V (hoặc Cmd+V) trên vùng tải lên để tải bất kỳ ảnh chụp màn hình đã sao chép nào ngay lập tức. Tương Phản Cao và Đen Trắng Noir đặc biệt hiệu quả để làm chữ mờ trên bản quét tài liệu sắc nét hơn.',
      },
      {
        question: 'Điều gì xảy ra nếu tôi tải GIF động lên công cụ bộ lọc ảnh?',
        answer:
          'HTML5 Canvas trích xuất khung hình đầu tiên của GIF cho ảnh thu nhỏ xem trước và xuất ảnh tĩnh đã lọc. Không thực hiện lọc GIF động nhiều khung hình bằng công cụ này.',
      },
      {
        question: 'Nên đặt Chất Lượng thế nào khi xuất file WebP hoặc JPG đã lọc?',
        answer:
          'Mức mặc định 90% giữ hạt phim tinh tế và vùng tối mờ sạch mà không làm dung lượng file lớn. Nếu cần giữ không mất dữ liệu để chỉnh sửa tiếp, hãy chọn PNG trong mục Định Dạng Xuất.',
      },
      {
        question: 'Áp dụng bộ lọc có xóa thẻ EXIF và GPS nhạy cảm của máy ảnh không?',
        answer:
          'Có, vẽ pixel đã lọc lên một HTML5 Canvas mới sẽ tạo file ảnh mới sạch với không còn header EXIF nào. Thẻ mẫu máy ảnh, dấu thời gian và tọa độ GPS nhúng tự động bị loại khi bạn tải về.',
      },
      {
        question: 'Làm sao đổi sang ảnh khác nhanh sau khi tải ảnh đã lọc về?',
        answer:
          'Bấm biểu tượng thùng rác ở góc trên bên phải của bảng Xem Trước Bộ Lọc để xóa ảnh hiện tại và quay về vùng thả. Mọi bộ nhớ xem trước được giải phóng ngay lập tức cho ảnh tiếp theo của bạn.',
      },
    ],
    relatedSlugs: ['/image-saturation-editor', '/image-brightness-editor', '/image-border-generator', '/'],
  },
  {
    slug: '/add-background-to-image',
    name: 'Thêm Nền Cho Ảnh',
    shortDescription: 'Đặt ảnh trong suốt hoặc ảnh có khung lên nền đặc, chuyển màu hoặc mờ.',
    category: 'create',
    seoTitle: 'Thêm Nền Cho Ảnh Miễn Phí – Nền Đặc, Chuyển Màu & Mờ',
    seoDescription: 'Dễ dàng thêm nền cho ảnh hoặc PNG trong suốt online với màu đặc, chuyển màu hai tông hoặc nền mờ. Xuất khung 1:1, 16:9 hoặc 4:5.',
    h1: 'Thêm Nền Cho Ảnh Online',
    subtitle:
      'Được tạo cho người bán thương mại điện tử, nhà thiết kế logo và người đăng mạng xã hội, công cụ này giúp bạn thêm nền cho ảnh tải lên hoặc ảnh cắt PNG trong suốt một cách dễ dàng. Chọn mẫu màu đặc, chuyển màu hai màu có góc, hoặc nền ảnh mờ theo kích thước vuông, story hoặc màn hình rộng.',
    howToSteps: [
      {
        title: 'Tải lên ảnh hoặc PNG trong suốt',
        description:
          'Thả bất kỳ ảnh JPG, PNG, WebP, HEIC, GIF, BMP hoặc SVG nào tối đa 20 MB lên vùng tải lên, chọn từ ổ đĩa, hoặc dán bằng Ctrl+V.',
      },
      {
        title: 'Chọn Màu Đặc, Chuyển Màu hoặc Ảnh Mờ',
        description:
          'Chọn Màu Đặc với bộ chọn màu và 6 mẫu nhanh, Chuyển Màu với hai màu và thanh trượt góc 0°–360°, hoặc Ảnh Mờ với bán kính mờ 4–50 px.',
      },
      {
        title: 'Chọn Tỉ Lệ Khung Hình Canvas',
        description:
          'Bấm Gốc, vuông 1:1, màn hình rộng 16:9, story dọc 9:16, hoặc chân dung mạng xã hội 4:5 trong mục Tỉ Lệ Khung Hình Canvas.',
      },
      {
        title: 'Chỉnh Tỉ Lệ Ảnh, Độ Bo Tròn và Bóng Đổ',
        description:
          'Trượt Tỉ Lệ Ảnh (40%–100%) để kiểm soát khoảng đệm quanh chủ thể, Độ Bo Tròn (0%–30%) cho góc mềm, và bật/tắt Bóng Đổ Phía Sau Ảnh.',
      },
      {
        title: 'Chọn định dạng xuất và tải về',
        description:
          'Kiểm tra kích thước pixel Đầu Ra chính xác bên dưới bản xem trước, chọn PNG, JPG hoặc WEBP, rồi bấm Tải Ảnh Xuống.',
      },
    ],
    features: [
      {
        title: '3 chế độ nền',
        description:
          'Chọn Màu Đặc, Chuyển Màu Hai Màu, hoặc Nền Ảnh Mờ cho ảnh dọc/ngang có viền.',
      },
      {
        title: 'Tỉ lệ khung hình mạng xã hội & web',
        description:
          'Vừa bất kỳ ảnh nào vào khung Gốc, Vuông 1:1, Màn Hình Rộng 16:9, Story 9:16 hoặc Dọc 4:5.',
      },
      {
        title: 'Tỉ lệ, bán kính & bóng đổ tiền cảnh',
        description:
          'Thêm khoảng thở, bo góc mềm và bóng đổ nhẹ quanh ảnh tiền cảnh của bạn.',
      },
      {
        title: 'Không tải lên',
        description:
          'Vẽ ngay trên máy qua HTML5 Canvas với tải về tức thì.',
      },
    ],
    faqs: [
      {
        question: 'Khi nào nên dùng Thêm Nền Cho Ảnh với chế độ Ảnh Mờ?',
        answer:
          'Chế độ Ảnh Mờ lấp lề canvas trống quanh ảnh chụp dọc bằng điện thoại bằng một bản sao phóng to, mờ nhẹ của chính ảnh của bạn cộng thêm lớp phủ đá phiến nhẹ 12%. Nhờ đó bạn đặt ảnh dọc 9:16 vào banner YouTube 16:9 hoặc hình vuông 1:1 mà không có vạch đen xấu hay bị cắt.',
      },
      {
        question: 'Làm sao thêm nền studio trắng sạch phía sau ảnh cắt PNG trong suốt?',
        answer:
          'Chọn Màu Đặc trong mục Loại Nền, bấm mẫu trắng #ffffff (hoặc nhập bất kỳ màu hex nào), và chỉnh Tỉ Lệ Ảnh nếu muốn có khoảng thở quanh sản phẩm. Xuất dưới dạng JPG cho tải lên sàn nhẹ hoặc PNG cho cạnh sắc nét.',
      },
      {
        question: 'Tôi có thể tùy chỉnh chuyển màu tuyến tính nhiều góc phía sau logo hoặc ảnh chụp màn hình ứng dụng không?',
        answer:
          'Có, chuyển Loại Nền sang Chuyển Màu để chọn Màu 1 và Màu 2 qua ô nhập màu, rồi kéo thanh trượt Góc từ 0° đến 360°. Nó lý tưởng để biến ảnh chụp màn hình phần mềm đơn giản thành thẻ hero bóng bẩy cho trang đích.',
      },
      {
        question: 'Có những mẫu Tỉ Lệ Khung Hình Canvas nào cho bài đăng mạng xã hội?',
        answer:
          'Bạn có thể chuyển tức thì giữa Gốc (khớp kích thước ảnh của bạn), 1:1 (bài đăng vuông và thẻ sản phẩm), và 16:9 (ảnh thu nhỏ và banner YouTube). Mẫu dọc cho 9:16 (Stories và Reels) và 4:5 (ảnh dọc feed Instagram) cũng được tích hợp sẵn.',
      },
      {
        question: 'Kích thước pixel đầu ra cuối cùng được xác định thế nào khi đổi tỉ lệ khung hình?',
        answer:
          'Trình xuất đặt cạnh dài nhất của canvas đầu ra bằng cạnh dài nhất gốc của ảnh hoặc ít nhất 1.200 px, rồi tính cạnh ngắn hơn gọn gàng từ tỉ lệ bạn chọn. Ví dụ: chọn 1:1 trên icon 800×600 sẽ xuất đồ họa sắc nét 1200×1200.',
      },
      {
        question: 'Tỉ Lệ Ảnh ảnh hưởng đến lề quanh ảnh tiền cảnh của tôi như thế nào?',
        answer:
          'Tỉ Lệ Ảnh (40% đến 100%, mặc định 85%) xác định phần trăm hộp tối đa bên trong canvas nền mà ảnh tiền cảnh của bạn có thể chiếm trong khi vẫn giữ tỉ lệ. Đặt 100% sẽ lấp đầy sát viền trên tỉ lệ khớp, còn 60%–80% thể hiện khung nền rộng rãi.',
      },
      {
        question: 'Độ Bo Tròn áp dụng góc mềm cho PNG trong suốt hay chỉ ảnh chữ nhật?',
        answer:
          'Độ Bo Tròn (0%–30%) cắt vùng đặt tiền cảnh hình chữ nhật bằng đường cong góc bậc hai, giúp bo tròn ảnh chụp màn hình và ảnh chữ nhật gọn gàng. Trên ảnh cắt trong suốt mà chủ thể nằm sâu trong mép ảnh, tăng Độ Bo Tròn sẽ giữ ảnh cắt bên trong không bị ảnh hưởng trong khi bo tròn hộp bóng đổ của nó.',
      },
      {
        question: 'Bóng Đổ Phía Sau Ảnh hoạt động thế nào với logo trong suốt so với ảnh đặc?',
        answer:
          'Với ảnh đặc hoặc ảnh chụp màn hình, nó tạo bóng đổ nổi mềm tinh tế theo tỉ lệ với kích thước canvas phía sau thẻ tiền cảnh bo tròn. Trên ảnh alpha trong suốt, nó dùng lớp lót mờ 1% bên trong hộp đã cắt để tiền cảnh nổi bật gọn khỏi nền sáng hoặc chuyển màu.',
      },
      {
        question: 'Tôi có thể nhập những loại file ảnh nào để thêm nền?',
        answer:
          'Bạn có thể tải lên ảnh JPG, PNG, WebP, HEIC/HEIF của iPhone, GIF, BMP và SVG tối đa 20 MB. GIF động vẽ khung hình đầu tiên của nó làm lớp tiền cảnh.',
      },
      {
        question: 'Công cụ này có tự xóa nền ảnh hiện có trước không?',
        answer:
          'Không, trình chỉnh sửa này đặt ảnh bạn tải lên (ảnh cắt trong suốt, logo hoặc ảnh đầy đủ) lên một canvas nền mới thay vì chạy phân đoạn cắt AI. Nếu bạn có ảnh với phông nền bận rộn cần xóa trước, hãy xóa nền bằng bất kỳ ứng dụng xóa nền nào rồi thả PNG trong suốt vào đây.',
      },
      {
        question: 'Những định dạng xuất nào được hỗ trợ và chất lượng nén ra sao?',
        answer:
          'Bạn có thể xuất tác phẩm hoàn chỉnh dưới dạng PNG, JPG hoặc WEBP ở chất lượng xuất Canvas 92% (mã hóa không mất dữ liệu đối với PNG). Kích thước pixel đầu ra chính xác hiển thị ngay bên dưới canvas xem trước trước khi bạn tải về.',
      },
      {
        question: 'Những mẫu màu nhanh nào được tích hợp trong chế độ Màu Đặc?',
        answer:
          'Bên cạnh bộ chọn màu gốc đầy đủ, sáu mẫu có thể bấm sẵn sàng thử chỉ bằng một cú nhấp chuột: trắng tinh (#ffffff), đá phiến đậm (#0f172a), xanh thương hiệu (#2563eb), xanh ngọc (#10b981), kem ấm (#fef3c7) và xám nhạt (#f1f5f9). Bạn có thể chạm bất kỳ mẫu nào để xem trước tức thì và tinh chỉnh sau bằng ô nhập màu.',
      },
      {
        question: 'Điều khiển Bán Kính Mờ Nền trong chế độ Ảnh Mờ mượt đến mức nào?',
        answer:
          'Bạn có thể chỉnh Bán Kính Mờ Nền từ 4 px (kết cấu nền làm mềm nhẹ) lên tới 50 px (màu xung quanh mờ mịn như kem). Bán kính mờ thu phóng linh hoạt để khớp kích thước xuất độ phân giải đầy đủ của bạn.',
      },
      {
        question: 'Tôi có thể dán ảnh chụp màn hình trực tiếp từ clipboard để đóng khung trên nền chuyển màu không?',
        answer:
          'Có, sao chép ảnh chụp màn hình hoặc đồ họa rồi nhấn Ctrl+V (hoặc Cmd+V) trên vùng tải lên để tải thẳng vào canvas nền. Kết hợp nền chuyển màu với tỉ lệ 85%, bo tròn nhẹ và bóng đổ sẽ làm ảnh chụp màn hình tài liệu nổi bật.',
      },
      {
        question: 'Logo đã tải lên, mockup giao diện chưa phát hành hoặc ảnh chân dung cá nhân có bị gửi tới máy chủ không?',
        answer:
          'Không, tạo nền, lọc mờ, bóng đổ và mã hóa file đều thực thi ngay trên máy trong trình duyệt bằng HTML5 Canvas. Không có gì được truyền qua internet hay giữ lại từ xa.',
      },
      {
        question: 'File nền đã tải về được đặt tên thế nào?',
        answer:
          'File xuất giữ tên gốc đã làm sạch của bạn và thêm _background cùng phần mở rộng định dạng đã chọn, như product-cutout_background.png hoặc banner_background.webp. Ảnh nguồn gốc trên ổ đĩa của bạn vẫn nguyên vẹn.',
      },
      {
        question: 'Xuất ảnh kèm nền có xóa metadata vị trí EXIF khỏi ảnh máy ảnh không?',
        answer:
          'Có, hợp nhất các lớp lên một HTML5 Canvas mới và mã hóa ảnh mới sẽ tự loại header EXIF gốc. Tọa độ GPS, số serial máy ảnh và dấu thời gian chụp không bao giờ được mang vào file đã tải về.',
      },
      {
        question: 'Tôi có thể xem trước chế độ Ảnh Mờ trên icon nhỏ hoặc đồ họa SVG không?',
        answer:
          'Có, logo SVG nội tuyến tự chứa hoặc đồ họa PNG nhỏ thu phóng lên nền phủ và nhận mờ Gaussian hoặc mờ nhiều lần mượt phía sau tiền cảnh vector sắc nét. Chọn bán kính mờ 25–45 px khi làm mềm cạnh vector sắc thành quầng sáng xung quanh mềm.',
      },
      {
        question: 'Tại sao chế độ Ảnh Mờ thêm một lớp phủ nhẹ lên nền mờ?',
        answer:
          'Một lớp phủ đá phiến tối nhẹ ở độ mờ 12% được vẽ trực tiếp lên lớp nền mờ trước khi vẽ chủ thể tiền cảnh. Lớp màn tương phản tinh tế đó giúp cạnh sáng, nhãn trắng và ảnh cắt trong suốt dễ đọc trước bầu trời sáng hoặc họa tiết bận rộn.',
      },
      {
        question: 'Làm sao thay ảnh tiền cảnh mà không mất quy trình ưa thích của tôi?',
        answer:
          'Bấm Đổi Ảnh ở góc trên bên phải của bảng Xem Trước Nền để xóa canvas hiện tại và tải lên tài nguyên khác. Vì công cụ chạy trực tiếp trên trình duyệt máy tính và di động, việc đổi ảnh chỉ mất một lúc.',
      },
    ],
    relatedSlugs: ['/round-image-corners', '/image-border-generator', '/image-resizer', '/'],
  },
  {
    slug: '/image-splitter',
    name: 'Chia Ảnh Thành Nhiều Mảnh',
    shortDescription: 'Chia ảnh thành ô lưới N×M hoặc dải và tải về dạng ZIP.',
    category: 'create',
    seoTitle: 'Chia Ảnh Online Miễn Phí – Ô Lưới & Tải ZIP',
    seoDescription: 'Cắt ảnh thành ô lưới N×M, hàng ngang hoặc dải dọc carousel với công cụ chia ảnh miễn phí. Xem đường cắt trực tiếp và tải file ZIP.',
    h1: 'Chia Ảnh Online',
    subtitle:
      'Được tạo cho người lập kế hoạch lưới Instagram, nhà thiết kế giao diện và người làm in ấn, công cụ chia ảnh chạy trong trình duyệt này chia panorama rộng hoặc ảnh vuông thành tối đa 10×10 ô chính xác hoặc dải. Kiểm tra đường cắt đã đánh số trực tiếp và lưu mọi lát cắt độ phân giải đầy đủ riêng lẻ hoặc trong một lần tải ZIP.',
    howToSteps: [
      {
        title: 'Thả ảnh cần cắt',
        description:
          'Tải lên bất kỳ ảnh JPG, PNG, WebP, HEIC, GIF, BMP hoặc SVG nào tối đa 20 MB (hoặc dán bằng Ctrl+V). Ô chia 3×3 ban đầu tự tạo khi tải lên.',
      },
      {
        title: 'Kiểm tra Bản Xem Trước Đường Cắt đã đánh số',
        description:
          'Kiểm tra lưới phủ nét đứt trên ảnh của bạn ở bên trái, hiển thị ranh giới ô đã đánh số chính xác (1 đến N) trước khi cắt file xuất cuối cùng.',
      },
      {
        title: 'Chọn Bố Cục Chia hoặc mẫu nhanh',
        description:
          'Chọn Lưới (N×M), Dải Ngang hoặc Dải Dọc, nhập Hàng và Cột từ 1 đến 10, hoặc bấm 2×2, 3×3 Instagram, 1×3 Carousel hoặc 4×1 Dải.',
      },
      {
        title: 'Chọn định dạng xuất và Chất Lượng Ô',
        description:
          'Chọn Gốc, JPG, PNG hoặc WEBP và chỉnh Chất Lượng Ô (10%–100%, mặc định 92%) cho đầu ra không phải PNG.',
      },
      {
        title: 'Tạo lát cắt độ phân giải đầy đủ',
        description:
          'Bấm Chia Thành N Ô mỗi khi bạn cập nhật Hàng, Cột hoặc cài đặt định dạng để cắt lại mọi ô ở ranh giới pixel độ phân giải đầy đủ chính xác.',
      },
      {
        title: 'Lưu từng mảnh riêng lẻ hoặc file ZIP',
        description:
          'Dùng nút Tải Xuống trên bất kỳ thẻ ô R·C đã đánh số nào bên dưới, hoặc bấm Tải Tất Cả Ô (ZIP) để tải toàn bộ lưới đã đánh số cùng nhau.',
      },
    ],
    features: [
      {
        title: 'Chế độ lưới & dải linh hoạt',
        description:
          'Chia thành lưới Hàng × Cột tùy chỉnh, hàng ngang hoặc lát dọc.',
      },
      {
        title: 'Xem trước đường cắt trực tiếp',
        description:
          'Xem ranh giới ô đã đánh số phủ lên ảnh trước khi chia.',
      },
      {
        title: 'Xem trước ô tức thì & ZIP',
        description:
          'Kiểm tra mọi ô đã tạo và tải mọi mảnh xuống với tên gọn (`hàng_cột`) trong một ZIP.',
      },
      {
        title: 'Cắt độ phân giải đầy đủ',
        description:
          'Mỗi ô được cắt gọn từ canvas gốc độ phân giải đầy đủ.',
      },
    ],
    faqs: [
      {
        question: 'Công cụ chia ảnh tạo lưới Instagram 3×3 gọn gàng như thế nào?',
        answer:
          'Bấm nút mẫu 3×3 Instagram (hoặc đặt chế độ Lưới với 3 Hàng và 3 Cột) rồi bấm Chia Thành 9 Ô. Mỗi mảnh xuất theo thứ tự từ hàng 1 cột 1 ở góc trên-trái xuống hàng 3 cột 3 ở góc dưới-phải, vì vậy tải lên theo thứ tự ngược sẽ tạo mosaic hồ sơ liền mạch.',
      },
      {
        question: 'Kích thước lưới tối đa tôi có thể cắt trong một lần là bao nhiêu?',
        answer:
          'Cả Hàng (Cắt Ngang) và Cột (Cắt Dọc) đều chấp nhận giá trị từ 1 đến 10, cho phép từ 2 lát cắt lên tới lưới 10×10 tổng cộng 100 ô riêng lẻ. Vì mỗi lát dùng ranh giới pixel đã làm tròn trên ảnh gốc, các ô kề nhau thẳng hàng sát cạnh mà không thiếu pixel nào.',
      },
      {
        question: 'Dải Ngang và Dải Dọc khác gì chế độ Lưới (N×M)?',
        answer:
          'Dải Ngang khóa Cột thành 1 và cắt banner ngang toàn chiều rộng xếp từ trên xuống dưới, tiện cho ảnh chụp màn hình trang web dài hoặc phần infographic cao. Dải Dọc khóa Hàng thành 1 và chia panorama rộng cạnh nhau thành slide carousel vuốt được liền mạch cho Instagram hoặc LinkedIn.',
      },
      {
        question: 'Những Mẫu Chia một cú nhấp chuột nào được tích hợp?',
        answer:
          'Bốn nút mẫu nằm ngay bên dưới ô nhập số: 2×2 (4 góc phần tư), 3×3 Instagram (9 ô vuông lưới), 1×3 Carousel (3 dải vuốt dọc), và 4×1 Dải (4 dải ngang). Bấm bất kỳ mẫu nào cũng cập nhật Bản Xem Trước Đường Cắt trực tiếp ngay lập tức.',
      },
      {
        question: 'Các ô đã tạo có bị thu nhỏ hay cắt ở kích thước pixel gốc đầy đủ không?',
        answer:
          'Mỗi ô được cắt thẳng từ chiều rộng và chiều cao pixel đầy đủ của ảnh nguồn trên HTML5 Canvas mà không thay đổi kích thước. Ví dụ: chia panorama 3000×1000 thành dải Carousel 1×3 sẽ tạo ba ô 1000×1000 sắc nét.',
      },
      {
        question: 'Điều gì xảy ra nếu chiều rộng hoặc chiều cao ảnh của tôi không chia hết cho Hàng hoặc Cột?',
        answer:
          'Tọa độ cắt được tính theo tỉ lệ với Math.round trên toàn bộ chiều rộng và chiều cao để các lát kề nhau chia sẻ ranh giới pixel nguyên chính xác mà không có khoảng trống hay chồng lấn. Một số ô có thể chênh 1 pixel khi chia số lẻ (như 1000 px cho 3 cột: 333, 334, 333).',
      },
      {
        question: 'Tôi có cần nhớ ô nào ở đâu sau khi tải ZIP về không?',
        answer:
          'Không, mỗi lát hiển thị huy hiệu hàng và cột của nó (như R1·C2) và kích thước pixel chính xác bên dưới thẻ xem trước. Trong file ZIP, tên file theo mẫu <tên-gốc>_r<hàng>_c<cột>.<phần-mở-rộng> (ví dụ: panorama_r1_c1.jpg, panorama_r1_c2.jpg) theo thứ tự đọc.',
      },
      {
        question: 'Thay đổi Hàng, Cột hoặc Định Dạng có cập nhật các ô đã tạo tự động không?',
        answer:
          'Khi bạn tải file lên lần đầu, các ô tự tạo ở cài đặt bố cục đang hoạt động. Sau khi chỉnh Hàng, Cột hoặc Định Dạng Xuất, Bản Xem Trước Đường Cắt cập nhật ngay lập tức và bấm Chia Thành N Ô sẽ tạo lại các thẻ ô tải về và ZIP.',
      },
      {
        question: 'Những định dạng đầu vào nào hoạt động trong công cụ chia ảnh?',
        answer:
          'Tải lên ảnh JPG, PNG, WebP, HEIC/HEIF của iPhone, GIF, BMP và SVG tối đa 20 MB mỗi file. Chọn Gốc trong mục Định Dạng Xuất sẽ giữ định dạng nguồn của bạn (hoặc chuyển HEIC/SVG/BMP gọn thành PNG/JPG chuẩn).',
      },
      {
        question: 'Chia ảnh sprite PNG trong suốt có giữ nền trong suốt không?',
        answer:
          'Có, cắt tài nguyên PNG hoặc WebP trong suốt sẽ giữ đầy đủ độ trong suốt alpha khi Định Dạng Xuất là Gốc, PNG hoặc WEBP. Nếu bạn chuyển rõ Định Dạng Xuất sang JPG, canvas ô sẽ lấp độ trong suốt lên trắng đặc (#FFFFFF).',
      },
      {
        question: 'Tôi có thể dán ảnh chụp màn hình dài từ clipboard và cắt thành phần in được không?',
        answer:
          'Có, nhấn Ctrl+V (hoặc Cmd+V) trên vùng tải lên để thả ảnh chụp màn hình từ clipboard trực tiếp vào công cụ chia. Chọn Dải Ngang và đặt 3–6 hàng để chia nhật ký trò chuyện cao hoặc ảnh chụp web thành các trang dễ quản lý.',
      },
      {
        question: 'Thanh trượt Chất Lượng Ô có hiện với ô PNG không?',
        answer:
          'Không, ô PNG luôn mã hóa không mất dữ liệu nên Chất Lượng Ô (10%–100%, mặc định 92%) tự chỉ hiển thị khi định dạng đã xác định của bạn là JPG hoặc WebP. Điều đó đảm bảo cạnh sắc nét trên sprite, mockup giao diện và ảnh cắt chữ.',
      },
      {
        question: 'File ZIP tải hàng loạt được đặt tên thế nào?',
        answer:
          'Bấm Tải Tất Cả Ô (ZIP) sẽ gói mọi ô đã tạo vào một file nén duy nhất có tên <tên-gốc>_<hàng>x<cột>_tiles.zip, như hero_3x3_tiles.zip. Bạn cũng có thể tải từng ô riêng lẻ qua nút Tải Xuống trên mỗi thẻ.',
      },
      {
        question: 'Ảnh có bị tải lên máy chủ ngoài khi cắt lưới không?',
        answer:
          'Không, tính toán cắt, cắt Canvas, xem trước ô và nén ZIP đều diễn ra trong bộ nhớ trình duyệt trên máy. Tác phẩm riêng tư, sơ đồ và ảnh cá nhân của bạn không bao giờ rời khỏi thiết bị.',
      },
      {
        question: 'Chia ảnh có xóa thẻ EXIF và metadata vị trí GPS của máy ảnh không?',
        answer:
          'Có, cắt các vùng con hình chữ nhật lên ô Canvas HTML5 mới sẽ tạo blob ảnh sạch không có header EXIF. Nhờ đó chi tiết máy ảnh và tọa độ GPS từ ảnh gốc không bao giờ được sao chép vào từng lát riêng lẻ.',
      },
      {
        question: 'Điều gì xảy ra nếu tôi tải GIF động lên để chia thành ô lưới?',
        answer:
          'HTML5 Canvas trích xuất và cắt khung hình đầu tiên của GIF thành ô tĩnh ở định dạng xuất bạn chọn. Không hỗ trợ chia GIF động nhiều khung hình trong khi giữ chuyển động ở đây.',
      },
      {
        question: 'Tại sao 9 ô 3×3 của tôi có thể hơi khác tỉ lệ khung hình nếu ảnh nguồn không vuông?',
        answer:
          'Công cụ chia chia ảnh nguồn theo tỉ lệ dọc theo chiều rộng và chiều cao hiện có mà không làm méo hay cắt cạnh. Nếu muốn ô vuông 1:1 cho lưới Instagram, hãy cắt ảnh thành 1:1 trước trong công cụ Cắt Ảnh của chúng tôi rồi mới chia 3×3.',
      },
      {
        question: 'Làm sao thay ảnh sau khi tải lưới đã chia về?',
        answer:
          'Bấm Đổi Ảnh ở góc trên bên phải của thẻ Xem Trước Đường Cắt để giải phóng URL ô hiện có khỏi bộ nhớ và tải ảnh mới. Không cần tải lại trang.',
      },
      {
        question: 'Lập trình viên game có thể dùng công cụ này để cắt bảng icon hoặc tileset không?',
        answer:
          'Có, spritesheet bố trí theo hàng và cột đều sẽ cắt chính xác khi bạn đặt số Hàng × Cột khớp và giữ định dạng xuất PNG. Mỗi icon lưu gọn theo tọa độ hàng và cột trong file ZIP.',
      },
      {
        question: 'Công Cụ Chia Ảnh có chạy tin cậy trên iPhone, iPad và điện thoại Android không?',
        answer:
          'Có, lưới responsive, ô nhập hàng/cột dạng số và đóng gói ZIP phía client hoạt động trực tiếp trong Safari iOS và Chrome Android. Lần chia 10×10 lớn hơn trên ảnh nhiều megapixel rất cao chạy nhanh nhất trên máy tính hoặc trình duyệt di động hiện đại.',
      },
    ],
    relatedSlugs: ['/image-cropper', '/image-resizer', '/image-dimensions-checker', '/'],
  },
  {
    slug: '/image-dpi-changer',
    name: 'Đổi DPI Ảnh',
    shortDescription: 'Đổi metadata DPI JPEG/PNG (72/150/300/tùy chỉnh) không mất dữ liệu.',
    category: 'developer',
    seoTitle: 'Đổi DPI Ảnh Miễn Phí – Chuyển Sang 300 DPI Không Mất Dữ Liệu',
    seoDescription: 'Cập nhật thẻ mật độ in JFIF/EXIF của JPEG và pHYs của PNG với công cụ đổi DPI ảnh miễn phí. Đặt DPI 72, 150, 300, 600 hoặc tùy chỉnh không mất dữ liệu ngay trong trình duyệt.',
    h1: 'Đổi DPI Ảnh Miễn Phí',
    subtitle:
      'Được tạo cho nhà thiết kế, cửa hàng in, tác giả và học sinh chuẩn bị file cho cổng in ấn, công cụ đổi DPI ảnh không mất dữ liệu này cập nhật header độ phân giải JPEG và PNG mà không chạm tới dữ liệu pixel. Chuyển sang DPI 72, 96, 150, 300, 600 hoặc tùy chỉnh theo lô với đọc lại đã xác minh.',
    howToSteps: [
      {
        title: 'Chọn hoặc chỉnh DPI Đích trước (hoặc bất cứ lúc nào)',
        description:
          'Bấm mẫu — 72 DPI (Màn Hình), 96 DPI (Windows), 150 DPI (In Nháp), 300 DPI (In Chất Lượng Cao) hoặc 600 DPI (Lưu Trữ) — hoặc nhập bất kỳ DPI Tùy Chỉnh nào từ 1 đến 2.400.',
      },
      {
        title: 'Tải lên một hoặc nhiều ảnh',
        description:
          'Thả file JPG, PNG, WebP, HEIC, GIF, BMP hoặc SVG tối đa 20 MB mỗi file vào vùng tải lên (hoặc dán bằng Ctrl+V). File xử lý ngay lập tức ở DPI bạn chọn.',
      },
      {
        title: 'Xem lại Trước, DPI Đã Xác Minh và phương pháp xử lý',
        description:
          'Mỗi thẻ hiển thị DPI gốc so với DPI đầu ra đã xác minh cùng huy hiệu xác nhận Cập Nhật Header JPEG Không Mất Dữ Liệu, Cập Nhật pHYs PNG Không Mất Dữ Liệu, hoặc Đã Chuyển Sang PNG với DPI pHYs.',
      },
      {
        title: 'Đổi DPI linh hoạt trên file đã xếp hàng nếu cần',
        description:
          'Bấm nút mẫu DPI khác hoặc gõ DPI Tùy Chỉnh mới rồi bấm Áp Dụng DPI [X] để xử lý lại mọi file trong hàng đợi tự động.',
      },
      {
        title: 'Tải từng file riêng lẻ hoặc ZIP hàng loạt',
        description:
          'Bấm Tải Xuống trên từng thẻ kết quả (đặt tên <tên-gốc>_<dpi>dpi.<phần-mở-rộng>), hoặc bấm Tải Tất Cả (ZIP) mỗi khi có từ hai file trở lên sẵn sàng.',
      },
    ],
    features: [
      {
        title: 'Chỉnh header JPEG & PNG không mất dữ liệu thật',
        description:
          'Cập nhật mật độ JFIF APP0/EXIF trong JPEG và chunk pHYs (với CRC32 hợp lệ) trong PNG mà không chạm tới pixel ảnh.',
      },
      {
        title: 'Đọc lại trước & sau đã xác minh',
        description:
          'Tự phân tích lại file đầu ra để bạn thấy đúng DPI đã xác minh được lưu trong file.',
      },
      {
        title: 'Xử lý DPI hàng loạt',
        description:
          'Cập nhật hàng chục đồ họa sẵn sàng in cùng lúc và xuất chúng trong file ZIP.',
      },
      {
        title: 'Dự phòng WebP/HEIC',
        description:
          'Định dạng không có DPI có thể chuyển sạch sang PNG không mất dữ liệu với đúng chunk DPI pHYs được nhúng.',
      },
    ],
    faqs: [
      {
        question: 'Công cụ đổi DPI ảnh này chỉnh file JPEG và PNG thế nào mà không mất chất lượng?',
        answer:
          'Thay vì giải mã và nén lại pixel trên Canvas, nó vá trực tiếp các đoạn metadata nhị phân — cập nhật hoặc chèn thẻ độ phân giải JFIF APP0 và EXIF IFD0 trong JPEG, và ghi chunk pHYs có tổng kiểm CRC32 hợp lệ trong PNG. Mọi pixel hình ảnh và khối nén vẫn 100% nguyên vẹn.',
      },
      {
        question: 'Đổi DPI có thay đổi chiều rộng và chiều cao pixel hoặc kích thước in vật lý không?',
        answer:
          'Đổi DPI giữ kích thước pixel hoàn toàn giống hệt — ví dụ: ảnh 3000×2400 vẫn là 3000×2400 px. Thứ thay đổi là header mật độ in bảo các ứng dụng xuất bản như Photoshop, InDesign hoặc cổng in hiểu nó ở 10×8 inch ở 300 DPI thay vì 41,6×33,3 inch ở 72 DPI.',
      },
      {
        question: 'Tại sao ảnh máy ảnh hoặc ảnh chụp màn hình tải lên thường hiện Trước: Chưa đặt?',
        answer:
          'Nhiều ảnh xuất từ điện thoại, ảnh chụp màn hình và công cụ tối ưu web loại bỏ trường độ phân giải JFIF/EXIF hoặc bỏ qua chunk pHYs tùy chọn của PNG, khiến trình xem phải giả định dự phòng 72 hoặc 96 DPI. Công cụ của chúng tôi chèn header chuẩn để trình xác thực in phát hiện 300 DPI một cách tin cậy.',
      },
      {
        question: 'Huy hiệu DPI Đã Xác Minh xác nhận bản cập nhật thực sự hoạt động như thế nào?',
        answer:
          'Sau khi tạo Blob nhị phân đã cập nhật, công cụ chạy trình phân tích header nhị phân của nó trở lại trên file đầu ra từ đầu để đọc mật độ X/Y mới nhúng. Điều đó đảm bảo file đã tải về vượt qua kiểm tra của cổng in tự động và trình kiểm tra trên máy tính.',
      },
      {
        question: 'Điều gì xảy ra khi tôi tải lên file WebP, HEIC, BMP, GIF hoặc SVG?',
        answer:
          'Định dạng thiếu header DPI chuẩn liên phần mềm (như WebP hoặc BMP) được giải mã ngay trên máy và chuyển gọn sang PNG không mất dữ liệu với đúng chunk DPI pHYs được nhúng. Bạn sẽ thấy huy hiệu Đã Chuyển Sang PNG với DPI pHYs trên các thẻ đó.',
      },
      {
        question: 'Có những mẫu DPI nào và DPI Tùy Chỉnh chấp nhận khoảng nào?',
        answer:
          'Năm mẫu nhanh bao phủ các chuẩn phổ biến: 72 DPI (Màn Hình), 96 DPI (Windows), 150 DPI (In Nháp), 300 DPI (In Chất Lượng Cao) và 600 DPI (Lưu Trữ). DPI Tùy Chỉnh cho phép bạn gõ bất kỳ số nguyên nào từ 1 đến 2.400 DPI.',
      },
      {
        question: 'Cập nhật DPI JPEG có giữ thẻ EXIF hiện có của máy ảnh hoặc hồ sơ ICC không?',
        answer:
          'Có, trình sao chép đoạn JPEG không mất dữ liệu của chúng tôi giữ nguyên hồ sơ màu, thẻ máy ảnh và dữ liệu quét ảnh trong khi cập nhật mật độ JFIF APP0 và EXIF XResolution/YResolution/ResolutionUnit nếu có đoạn EXIF APP1. Nếu không có header JFIF, nó chèn một đoạn JFIF APP0 18 byte sạch ngay sau SOI.',
      },
      {
        question: 'Tại sao DPI PNG đôi khi đọc lại thành 299 hoặc 300 DPI sau khi chuyển đổi?',
        answer:
          'Thông số pHYs chính thức của PNG lưu độ phân giải theo pixel trên mét thay vì điểm trên inch, chuyển 300 DPI thành 11.811 pixel trên mét. Làm tròn pixel trên mét trở lại inch cho ra đúng 300 DPI gọn gàng trên gần như mọi giá trị mẫu.',
      },
      {
        question: 'Đổi ảnh thu nhỏ web 400×400 độ phân giải thấp sang 300 DPI có làm nó sắc nét để in không?',
        answer:
          'Không, cập nhật DPI chỉ thay đổi hướng dẫn metadata, không thay đổi số pixel — file 400×400 pixel ở 300 DPI chỉ in sắc nét ở 1,33×1,33 inch. Để phủ khổ giấy lớn hơn gọn gàng ở 300 DPI, bạn cần kích thước pixel lớn hơn trong tác phẩm nguồn.',
      },
      {
        question: 'Tôi có thể cập nhật hàng loạt nhiều tài nguyên in sang 300 DPI và xuất một ZIP không?',
        answer:
          'Có, thả bất kỳ số lượng file JPG hoặc PNG nào tối đa 20 MB mỗi file và tất cả sẽ xử lý sang DPI bạn chọn theo thứ tự. Mỗi khi có từ hai file trở lên hoàn thành, một thanh Lô Đã Sẵn Sàng xuất hiện với nút Tải Tất Cả (ZIP) tạo file images_<dpi>dpi_compressmypic.zip.',
      },
      {
        question: 'Tôi có thể đổi ý và áp lại 600 DPI sau khi file đã xử lý ở 300 DPI không?',
        answer:
          'Có, bấm nút Mẫu DPI Đích khác sẽ lập tức cập nhật và xử lý lại mọi file trong hàng đợi từ file gốc đã tải lên mà không chồng chất chỉnh sửa. Nếu bạn gõ số vào DPI Tùy Chỉnh, bấm Áp Dụng DPI để làm mới mọi mục ở mật độ tùy chỉnh đó.',
      },
      {
        question: 'Đặt 300 DPI có làm dung lượng file JPEG hoặc PNG lớn hơn đáng kể không?',
        answer:
          'Không, thêm hoặc vá header JFIF APP0 (18 byte) hoặc chunk pHYs PNG (21 byte) chỉ thay đổi tổng trọng lượng file tối đa vài chục byte đối với JPEG và PNG gốc. Chỉ định dạng không có DPI chuyển thành PNG không mất dữ liệu mới thay đổi kích thước.',
      },
      {
        question: 'Bản xem trước, bìa sách hoặc bản quét CMND bí mật có bị gửi tới máy chủ ngoài không?',
        answer:
          'Không, phân tích byte nhị phân, tính tổng kiểm CRC32 và vá header đều thực thi ngay trên máy trong ArrayBuffer của trình duyệt. File của bạn không bao giờ rời khỏi máy tính hoặc điện thoại.',
      },
      {
        question: 'Tại sao nền tảng xuất bản như Amazon KDP hoặc tạp chí học thuật từ chối file 72 DPI?',
        answer:
          'Nhiều cổng kiểm tra trước in tự động kiểm tra thẻ độ phân giải JFIF hoặc pHYs PNG của ảnh và từ chối bài nộp dưới 300 DPI ngay cả khi kích thước pixel dư dả. Cập nhật thẻ header lên 300 DPI sẽ đáp ứng các kiểm tra trước in đó mà không nén lại tác phẩm.',
      },
      {
        question: 'File đầu ra được đặt tên thế nào khi lưu riêng lẻ hoặc trong ZIP?',
        answer:
          'Mỗi file đã cập nhật giữ tên gốc đã làm sạch và thêm _<dpi đích>dpi cùng phần mở rộng, như poster_300dpi.jpg hoặc diagram_600dpi.png. Nhờ đó tránh ghi đè file gốc trên ổ đĩa của bạn.',
      },
      {
        question: 'Công cụ đổi DPI có hoạt động trên JPEG vốn dùng điểm trên cm thay vì điểm trên inch không?',
        answer:
          'Có, trình đọc nhận biết cả unit=1 (điểm trên inch) và unit=2 (điểm trên cm, nhân với 2,54) trong thẻ JFIF và EXIF khi hiển thị DPI Trước. Khi ghi header đầu ra, nó chuẩn hóa mật độ gọn gàng sang inch (DPI) để tương thích phổ biến.',
      },
      {
        question: 'Tôi có thể xóa hoặc loại bỏ thẻ DPI thay vì đổi chúng không?',
        answer:
          'Công cụ này luôn nhúng hoặc cập nhật header DPI đích bạn chọn để khớp chuẩn in hoặc hiển thị. Nếu bạn muốn xóa mọi metadata JFIF, EXIF và chunk PNG vì quyền riêng tư, hãy chạy file qua công cụ Xóa Metadata Ảnh của chúng tôi.',
      },
      {
        question: 'Điều gì xảy ra nếu tôi tải lên JPEG hỏng hoặc định dạng không được hỗ trợ?',
        answer:
          'Mỗi file xếp hàng chạy độc lập trong trình xử lý lỗi riêng nên một ảnh không đọc được sẽ không bao giờ làm dừng phần còn lại của lô. Mục lỗi hiển thị cảnh báo đỏ nội tuyến rõ ràng trong khi file hợp lệ hoàn thành và đóng gói vào ZIP bình thường.',
      },
      {
        question: 'Tôi có thể dán ảnh chụp màn hình từ clipboard và đóng dấu ngay ở 300 DPI không?',
        answer:
          'Có, nhấn Ctrl+V (hoặc Cmd+V) trên vùng tải lên để đưa ảnh PNG từ clipboard thẳng vào bộ xử lý. Nó ghi chunk pHYs 300 DPI hợp lệ không mất dữ liệu chỉ trong chốc lát.',
      },
      {
        question: 'Trình chỉnh sửa DPI không mất dữ liệu này có hoạt động trên Windows, Mac, Linux và trình duyệt di động không?',
        answer:
          'Có, API ArrayBuffer và DataView chuẩn của trình duyệt chạy gọn trên Chrome, Firefox, Edge và Safari máy tính cũng như trình duyệt di động. Không bao giờ cần phần mềm máy tính, plugin hay tải lên máy chủ.',
      },
    ],
    relatedSlugs: ['/image-metadata-viewer', '/image-dimensions-checker', '/remove-image-metadata', '/'],
  },
  {
    slug: '/image-to-base64',
    name: 'Chuyển Ảnh Sang Base64',
    shortDescription: 'Mã hóa bất kỳ ảnh nào thành Base64 Data URL, thẻ img HTML hoặc đoạn CSS.',
    category: 'developer',
    seoTitle: 'Chuyển Ảnh Sang Base64 – Data URL, HTML & CSS Miễn Phí',
    seoDescription: 'Mã hóa ảnh bằng công cụ chuyển ảnh sang Base64 miễn phí ngay trong trình duyệt. Tạo Data URL, chuỗi Base64 thô, thẻ img HTML và đoạn url() CSS.',
    h1: 'Chuyển Ảnh Sang Base64',
    subtitle:
      'Được tạo cho lập trình viên frontend, người viết template email và tác giả kỹ thuật, công cụ chuyển ảnh sang Base64 ngay trên máy này biến tài nguyên ảnh nhị phân thành chuỗi văn bản sẵn sàng sao chép trong một bước. Chuyển tức thì giữa các tab Data URL, Base64 Thô, thẻ img HTML và url() CSS mà không tải lên icon độc quyền.',
    howToSteps: [
      {
        title: 'Thả, chọn hoặc dán ảnh',
        description:
          'Tải lên bất kỳ file JPG, PNG, WebP, SVG, GIF, BMP, ICO hoặc AVIF nào tối đa 15 MB vào vùng thả, hoặc dán ảnh từ clipboard bằng Ctrl+V.',
      },
      {
        title: 'Xem lại dung lượng file và chi phí ký tự',
        description:
          'Kiểm tra thẻ tóm tắt phía trên hiển thị ảnh thu nhỏ, dung lượng byte gốc, kích thước tự nhiên (khi áp dụng), số ký tự đầu ra chính xác và phần trăm chi phí Base64.',
      },
      {
        title: 'Chuyển giữa 4 tab đầu ra cho lập trình viên',
        description:
          'Bấm Data URL, Base64 Thô, thẻ <img> HTML hoặc url() CSS để định dạng chuỗi đã mã hóa cho payload JSON, ảnh nội tuyến HTML hoặc stylesheet.',
      },
      {
        title: 'Sao chép vào clipboard hoặc lưu thành file .txt',
        description:
          'Bấm Sao Chép Đầu Ra (hoặc bấm vào hộp mã để chọn tất cả) để sao chép chuỗi, hoặc bấm Lưu .TXT để tải <tên-file>_<tab>.txt.',
      },
      {
        title: 'Bấm Mã Hóa Ảnh Khác để đổi file',
        description:
          'Khi sẵn sàng mã hóa icon hoặc sprite tiếp theo, bấm Mã Hóa Ảnh Khác để xóa đầu ra và giải phóng bộ nhớ đối tượng trên máy.',
      },
    ],
    features: [
      {
        title: '4 định dạng đầu ra cho lập trình viên',
        description:
          'Tự tạo đoạn Data URL, Base64 Thô, thẻ <img> HTML và ảnh nền CSS.',
      },
      {
        title: 'Số liệu byte & ký tự chính xác',
        description:
          'So sánh ngay dung lượng file nhị phân gốc với độ dài chuỗi Base64 đã mã hóa.',
      },
      {
        title: 'Sao chép một cú nhấp chuột & tải TXT',
        description:
          'Sao chép chuỗi Base64 dài tin cậy vào clipboard hoặc lưu thành file văn bản thuần.',
      },
      {
        title: 'Mã hóa FileReader 100% ngay trên máy',
        description:
          'Không tải lên — mã hóa diễn ra trực tiếp trong tab trình duyệt của bạn.',
      },
    ],
    faqs: [
      {
        question: 'Tại sao công cụ chuyển ảnh sang Base64 thêm khoảng 33% vào kích thước đầu ra?',
        answer:
          'Base64 biểu diễn mỗi 3 byte nhị phân (24 bit) bằng 4 ký tự ASCII in được (mỗi ký tự 6 bit), cộng tối đa hai dấu bằng đệm ở cuối. Nhờ đó ảnh 30 KB luôn mã hóa thành khoảng 40 KB văn bản Base64, và thanh tóm tắt theo dõi tự động.',
      },
      {
        question: 'Tôi có thể tạo bốn định dạng đầu ra nào sau khi mã hóa ảnh?',
        answer:
          'Bốn tab nằm ngay phía trên hộp mã: Data URL (URI data:image/...;base64,... hoàn chỉnh), Base64 Thô (payload đã lột bỏ không có tiền tố), thẻ <img> HTML (thẻ sẵn sàng với thuộc tính alt đã làm sạch và chiều rộng/chiều cao), và url() CSS (quy tắc background-image: url("...");).',
      },
      {
        question: 'Mã hóa có thay đổi chất lượng ảnh, loại bỏ mã SVG hay làm phẳng GIF động không?',
        answer:
          'Không, bộ mã hóa đọc trực tiếp file nhị phân thô qua FileReader.readAsDataURL của trình duyệt mà không vẽ lên Canvas. Mọi byte gốc, phần tử XML SVG vector, khung ICO và khung hoạt hình GIF vẫn giữ nguyên 100% từng bit.',
      },
      {
        question: 'Những định dạng file ảnh và dung lượng tải lên tối đa nào được hỗ trợ?',
        answer:
          'Bạn có thể mã hóa ảnh JPG, PNG, WebP, SVG, GIF, BMP, ICO favicon và AVIF tối đa 15 MB mỗi file. Giữ đầu vào Base64 giới hạn ở 15 MB giúp ngăn chuỗi văn bản nhiều megabyte làm treo clipboard hoặc hiển thị textarea.',
      },
      {
        question: 'Khi nào lập trình viên nên nhúng Data URL Base64 thay vì tham chiếu file ảnh thường?',
        answer:
          'Nhúng icon giao diện nhỏ, spinner, favicon hoặc huy hiệu chữ ký email dưới vài kilobyte sẽ loại bỏ lượt tải HTTP thừa và hoạt động gọn trong tài liệu HTML độc lập. Với ảnh hero lớn, URL ảnh WebP hoặc JPG thường vẫn nhỏ hơn và hưởng lợi từ bộ nhớ đệm HTTP của trình duyệt.',
      },
      {
        question: 'Tại sao tab <img> HTML tự gồm thuộc tính chiều rộng và chiều cao?',
        answer:
          'Khi trình duyệt tải bản xem trước đối tượng tạm và đọc naturalWidth và naturalHeight, các kích thước pixel đó sẽ điền vào đoạn HTML cùng với thẻ alt lấy từ tên gốc của bạn. Gồm kích thước giúp ngăn Cumulative Layout Shift (CLS) trên trang web.',
      },
      {
        question: 'Tôi có thể tải đầu ra Base64 dài về khi sao chép chuỗi lớn bất tiện không?',
        answer:
          'Có, bấm Lưu .TXT bên cạnh Sao Chép Đầu Ra để tải đúng văn bản hiển thị trong tab đang hoạt động (Data URL, Base64 Thô, HTML hoặc CSS) dưới dạng <tên-gốc>_<tab>.txt. Nhờ đó mở payload rất dài gọn gàng trong VS Code hoặc script terminal rất dễ dàng.',
      },
      {
        question: 'Điều gì xảy ra nếu trình duyệt chặn quyền clipboard khi bấm Sao Chép Đầu Ra?',
        answer:
          'Nếu navigator.clipboard.writeText bị chặn bởi cài đặt riêng tư của trình duyệt, một ghi chú nội tuyến sẽ nhắc bạn sao chép trực tiếp từ hộp mã. Bấm hoặc chuyển tab vào textarea monospace tối sẽ tự tô sáng toàn bộ chuỗi để Ctrl+C / Cmd+C sao chép mọi thứ gọn gàng.',
      },
      {
        question: 'Base64 Thô khác gì Data URL khi gửi payload JSON API?',
        answer:
          'Data URL thêm tiền tố data:<mime>;base64, để trình duyệt hiển thị trực tiếp trong thuộc tính src hoặc quy tắc url() CSS. API, cơ sở dữ liệu di động và bộ mã hóa máy chủ thường chỉ mong Base64 Thô — chuyển sang tab Base64 Thô sẽ tự lột header.',
      },
      {
        question: 'Icon giao diện độc quyền, sơ đồ bí mật hoặc tài nguyên khách hàng có bị tải lên đâu không?',
        answer:
          'Không bao giờ — FileReader đọc byte hoàn toàn trong bộ nhớ trình duyệt phía client trên máy. Không file ảnh hay chuỗi Base64 nào được truyền tới máy chủ từ xa.',
      },
      {
        question: 'Tôi có thể mã hóa logo SVG hoặc file favicon.ico gọn gàng không?',
        answer:
          'Có, cả phần mở rộng .svg và .ico đều được hỗ trợ rõ trong bộ lọc tải lên và mã hóa với tiền tố MIME data:image/svg+xml hoặc image/x-icon phù hợp. Bạn cũng có thể thả file vào công cụ chuyển đổi rồi xác minh khứ hồi bằng bộ giải mã Base64 sang Ảnh của chúng tôi.',
      },
      {
        question: 'Tại sao phần trăm chi phí hơi cao hơn trên tab <img> HTML và url() CSS?',
        answer:
          'Ngoài 33% mở rộng mã hóa Base64 và header MIME của Data URL, tab HTML và CSS bọc thêm ký tự markup như <img src="..." alt="..." />. Bộ đếm tóm tắt tính lại ký tự trực tiếp mỗi khi bạn chuyển tab.',
      },
      {
        question: 'Tôi có thể dán ảnh chụp màn hình thẳng từ clipboard để lấy nhanh Data URL không?',
        answer:
          'Có, nhấn Ctrl+V (hoặc Cmd+V trên máy Mac) ở bất kỳ đâu trên màn hình tải lên để lấy ảnh đã sao chép từ clipboard trực tiếp. Công cụ mã hóa ngay lập tức thành định dạng Data URL, Base64 Thô, HTML và CSS, sẵn sàng sao chép một cú nhấp chuột.',
      },
      {
        question: 'Base64 Thô có giữ ký tự + và / chuẩn với đệm = không?',
        answer:
          'Có, FileReader của trình duyệt xuất chuỗi Base64 chuẩn RFC 4648 dùng ký tự +, / và ký tự đệm = ở cuối thay vì thay thế base64url an toàn cho URL. Điều đó đảm bảo tương thích trực tiếp với URI dữ liệu HTML, payload email MIME và bộ giải mã backend chuẩn.',
      },
      {
        question: 'Tại sao ứng dụng email đôi khi chặn ảnh Base64 nội tuyến?',
        answer:
          'Một số nhà cung cấp webmail và bộ lọc spam doanh nghiệp loại bỏ URI data:image trong bản tin HTML vì lý do bảo mật dù trình duyệt hiển thị tốt. Base64 hoạt động tốt nhất trong ứng dụng web, tài liệu HTML đơn file, bundle React/CSS và template JSON/SVG.',
      },
      {
        question: 'Làm sao giữ metadata máy ảnh gốc hoặc loại bỏ nó trước khi mã hóa Base64?',
        answer:
          'Vì công cụ này mã hóa đúng byte thô, mọi metadata EXIF hiện có trong JPEG vẫn được mã hóa trong chuỗi Base64. Nếu muốn chuỗi Base64 nhỏ hơn, không metadata, hãy chạy ảnh qua công cụ Xóa Metadata Ảnh của chúng tôi trước khi mã hóa.',
      },
      {
        question: 'Tôi có nên thu nhỏ PNG hoặc JPG lớn trước khi chuyển sang Base64 không?',
        answer:
          'Có — vì Base64 phình kích thước khoảng 33%, nén PNG 300 KB xuống WebP 40 KB trước sẽ tiết kiệm khoảng 350 KB văn bản Base64 thừa trong stylesheet hoặc bundle của bạn. Hãy dùng Công Cụ Nén Ảnh hoặc Tối Ưu Ảnh Web của chúng tôi trước để tiết kiệm lớn.',
      },
      {
        question: 'Tại sao kích thước có thể bị bỏ qua trên một số file ICO không phổ biến hoặc file lỗi?',
        answer:
          'Nếu trình duyệt không thể giải mã ICO nhiều khung bất thường hoặc header lạ thành bản xem trước HTMLImageElement, kích thước sẽ được bỏ qua gọn gàng trong phần tóm tắt trong khi mã hóa Base64 thô vẫn thành công. PNG, JPG, WebP, GIF, SVG, BMP và AVIF chuẩn hiển thị số pixel R×C chính xác.',
      },
      {
        question: 'Làm sao mã hóa ảnh khác sau khi sao chép đoạn đầu tiên?',
        answer:
          'Bấm Mã Hóa Ảnh Khác ở góc trên bên phải của thẻ tóm tắt để đặt lại các tab đầu ra và xóa textarea. Nó lập tức giải phóng bộ nhớ xem trước tạm và khôi phục vùng thả cho tài nguyên tiếp theo của bạn.',
      },
      {
        question: 'Bộ mã hóa Base64 có hoạt động trên Safari di động và trình duyệt Chrome không?',
        answer:
          'Có, API FileReader và Clipboard tích hợp của HTML5 chạy tin cậy trên Safari iOS, Chrome Android, Windows, macOS và Linux. Vì mã hóa thực thi ngay trên máy trong bộ nhớ trình duyệt, không có độ trễ máy chủ nào ngay cả trên dữ liệu di động.',
      },
    ],
    relatedSlugs: ['/base64-to-image', '/favicon-generator', '/image-dimensions-checker', '/'],
  },

  {
    slug: '/base64-to-image',
    name: 'Base64 Sang Ảnh',
    shortDescription: 'Giải mã chuỗi Base64 hoặc Data URL thành ảnh để xem trước và tải về.',
    category: 'developer',
    seoTitle: 'Base64 Sang Ảnh Miễn Phí – Giải Mã & Tải Ảnh Online',
    seoDescription:
      'Chuyển chuỗi đã mã hoá trở lại thành ảnh với công cụ giải mã Base64 sang ảnh miễn phí. Tự động nhận dạng PNG, JPG, WebP, GIF, SVG và lưu ngay trên trình duyệt của bạn.',
    h1: 'Giải Mã Base64 Sang Ảnh',
    subtitle:
      'Dành cho lập trình viên web đang gỡ lỗi dữ liệu API, người làm email marketing kiểm tra icon nhúng và tester QA — công cụ giải mã Base64 sang ảnh chạy ngay trên trình duyệt này tái tạo Data URL và chuỗi Base64 thô thành tệp tải về được. Xem định dạng MIME đã nhận dạng, kích thước pixel và dung lượng byte một cách riêng tư ngay trên thiết bị của bạn.',
    howToSteps: [
      {
        title: 'Dán chuỗi Base64 hoặc Data URL',
        description:
          'Dán chuỗi data:image/...;base64,... hoàn chỉnh hoặc ký tự Base64 thô vào ô Dán Chuỗi Base64 hoặc Data URL.',
      },
      {
        title: 'Chờ giải mã tự động (hoặc bấm Giải Mã Ảnh)',
        description:
          'Bộ giải mã phân tích khoảng trắng, ký tự an toàn cho URL và byte tiêu đề ngay khi bạn dán (hoặc khi bấm Giải Mã Ảnh) để xác thực ảnh.',
      },
      {
        title: 'Kiểm tra bản xem trước, định dạng, dung lượng và kích thước',
        description:
          'Xem ảnh đã giải mã trên nền kẻ caro trong suốt cùng huy hiệu Ảnh Hợp Lệ Đã Giải Mã, Định Dạng Đã Nhận Dạng, Dung Lượng Nhị Phân và Chiều Rộng × Chiều Cao tính bằng pixel.',
      },
      {
        title: 'Chọn Định Dạng Tải Về',
        description:
          'Chọn Gốc để lưu đúng tệp nhị phân đã giải mã nguyên vẹn, hoặc chọn PNG, JPG hay WEBP để chuyển đổi ảnh khi xuất.',
      },
      {
        title: 'Tải tệp ảnh đã giải mã về',
        description:
          'Bấm Tải Tệp Ảnh để lưu decoded_image.<ext> trực tiếp về thiết bị, hoặc bấm Xoá phía trên ô nhập để thử một chuỗi khác.',
      },
    ],
    features: [
      { title: 'Tự động nhận dạng khi thiếu tiền tố Data URL', description: 'Tự động xác định byte tiêu đề đặc trưng của PNG, JPEG, GIF, WebP, BMP và SVG ngay cả với Base64 thô.' },
      { title: 'Xác thực tức thì kèm thông báo lỗi rõ ràng', description: 'Phát hiện ngay ký tự Base64 không hợp lệ hoặc tiêu đề bị hỏng.' },
      { title: 'Chuyển đổi định dạng tuỳ chọn', description: 'Tải đúng tệp nhị phân đã giải mã hoặc xuất lại thành PNG, JPG hay WebP.' },
      { title: 'Giải mã riêng tư ngay trong trình duyệt', description: 'An toàn cho token nội bộ, tài nguyên email và icon giao diện độc quyền.' },
    ],
    faqs: [
      {
        question: 'Công cụ giải mã Base64 sang ảnh này có đọc được chuỗi thiếu tiền tố data:image/ không?',
        answer:
          'Có, nếu bạn dán Base64 thô mà không có tiêu đề Data URL, bộ giải mã sẽ kiểm tra các byte chữ ký đặc trưng ở đầu luồng nhị phân. Nó tự động nhận dạng PNG, JPEG, GIF, WebP, BMP, ICO và mã XML/SVG nhúng.',
      },
      {
        question: 'Công cụ có xử lý được Base64 an toàn cho URL và dấu ngắt dòng vô tình không?',
        answer:
          'Có, trước khi gọi atob(), bộ giải mã tự động loại bỏ khoảng trắng, dấu cách và dấu ngắt dòng, đồng thời chuyển ký tự an toàn cho URL - và _ trở lại thành + và / chuẩn. Nhờ vậy bạn có thể dán chuỗi đã ngắt dòng từ nhật ký JSON, đầu ra terminal hay JWT một cách gọn gàng.',
      },
      {
        question: 'Chuyện gì xảy ra nếu tôi dán chuỗi Base64 bị hỏng hoặc không phải ảnh?',
        answer:
          'Ký tự Base64 không hợp lệ sẽ hiện thông báo xác thực ngay lập tức, còn byte Base64 hợp lệ nhưng không tạo thành ảnh mà trình duyệt đọc được sẽ hiện lỗi rõ ràng giải thích rằng các byte không thể hiển thị. Trang không bị treo hay lỗi.',
      },
      {
        question: 'Có những tuỳ chọn Định Dạng Tải Về nào sau khi chuỗi giải mã xong?',
        answer:
          'Bạn có thể chọn Gốc, PNG, JPG hoặc WEBP trước khi lưu. Chọn Gốc sẽ lưu đúng byte nhị phân thô nguyên vẹn dưới tên decoded_image.<ext>, còn PNG, JPG hay WEBP sẽ vẽ lại ảnh đã giải mã lên HTML5 Canvas.',
      },
      {
        question: 'Vùng trong suốt sẽ ra sao nếu tôi xuất lại PNG hoặc SVG đã giải mã thành JPG?',
        answer:
          'Chọn JPG trong Định Dạng Tải Về sẽ tự động tô nền trắng thuần (#FFFFFF) lên Canvas trước khi mã hoá ở chất lượng 92%. Giữ Gốc, PNG hoặc WEBP sẽ bảo toàn độ trong suốt trên bản xem trước nền caro.',
      },
      {
        question: 'Bộ giải mã có giữ nguyên GIF động và SVG vector khi đặt thành Gốc không?',
        answer:
          'Có, chọn Gốc sẽ tải đúng Blob được tạo trực tiếp từ mảng byte đã giải mã, giữ nguyên đường path vector của SVG và các khung hình của GIF động. Lưu ý rằng chuyển Định Dạng Tải Về sang PNG, JPG hoặc WEBP sẽ raster hoá SVG hoặc khung đầu tiên của GIF qua Canvas.',
      },
      {
        question: 'Những chỉ số nào xuất hiện bên cạnh bản xem trước ảnh đã giải mã?',
        answer:
          'Sau khi xác thực, bảng tóm tắt bên phải hiển thị huy hiệu xanh Ảnh Hợp Lệ Đã Giải Mã cùng Định Dạng Đã Nhận Dạng (ví dụ PNG, JPEG hay SVG+XML). Ngay bên dưới, bạn có thể xem chính xác Dung Lượng Nhị Phân theo KB/MB và Kích Thước Tự Nhiên tính bằng pixel.',
      },
      {
        question: 'Vì sao chuỗi data:image/svg+xml không có ;base64, lại báo lỗi mã hoá?',
        answer:
          'Data URI không phải base64 (ví dụ chuỗi SVG mã hoá theo phần trăm như data:image/svg+xml,%3Csvg...) là văn bản thuần chứ không phải dữ liệu Base64. Công cụ này chỉ xác thực dữ liệu Base64 chuẩn hoặc Data URL có ;base64, nên dữ liệu không hợp lệ sẽ báo lỗi rõ ràng.',
      },
      {
        question: 'Giải mã phản hồi API nội bộ, token QR hay icon riêng tư ở đây có rủi ro không?',
        answer:
          'Không, mọi bước làm sạch chuỗi, giải mã byte bằng atob(), dò chữ ký MIME và hiển thị ảnh đều chạy hoàn toàn trong bộ nhớ của tab trình duyệt. Chuỗi đã mã hoá không bao giờ đi qua mạng hay chạm tới nhật ký từ xa.',
      },
      {
        question: 'Bản xem trước nền kẻ caro giúp kiểm tra icon đã giải mã như thế nào?',
        answer:
          'Một mẫu kẻ caro xám nhạt hiện phía sau khung xem trước để các vùng trong suốt, icon giao diện màu trắng và bóng mềm nổi bật ngay. Không có nền caro, logo trắng trong suốt sẽ hoà lẫn vô hình vào nền trắng.',
      },
      {
        question: 'Vì sao tệp nhị phân đã giải mã lại nhỏ hơn chuỗi Base64 tôi đã dán?',
        answer:
          'Văn bản Base64 phình dữ liệu nhị phân thêm khoảng 33% vì mỗi ký tự ASCII chỉ mang 6 bit. Chuyển ngược lại thành byte ảnh thô sẽ khôi phục đúng dung lượng tệp nhị phân gốc gọn nhẹ.',
      },
      {
        question: 'Tôi có thể bọc chuỗi trong dấu ngoặc HTML hay CSS url("...") trước khi dán không?',
        answer:
          'Để xác thực sạch, hãy dán đúng Data URL (data:image/...;base64,...) hoặc chỉ các ký tự Base64, không kèm thẻ HTML hay dấu ngoặc CSS xung quanh. Loại bỏ dấu ngoặc giúp bộ xác thực đọc đúng Base64 thuần.',
      },
      {
        question: 'Làm sao chuyển chuỗi Base64 của favicon BMP hay ICO cũ thành WebP hiện đại?',
        answer:
          'Dán Base64 thô hoặc Data URL, xác nhận bản xem trước hiển thị sạch, bấm WEBP trong bộ chọn Định Dạng Tải Về rồi bấm Tải Tệp Ảnh. Bộ xuất Canvas sẽ cho ra ngay ảnh WebP đã nén.',
      },
      {
        question: 'Giải mã nhanh cỡ nào với chuỗi Base64 nhiều megabyte?',
        answer:
          'Việc giải mã diễn ra trong vài mili giây ngay trên JavaScript với icon nhỏ và ảnh web thông thường dưới vài megabyte. Chuỗi dán rất lớn (hàng chục megabyte văn bản) phụ thuộc chủ yếu vào tốc độ dán của ô textarea trong trình duyệt.',
      },
      {
        question: 'Tôi có thể giải mã chuỗi Base64 SVG+XML thành tệp PNG raster sắc nét không?',
        answer:
          'Có, dán Data URL SVG đã mã hoá Base64 hoặc mã Base64 SVG thô — bộ giải mã tự động nhận dạng qua tiêu đề <svg hoặc <?xml. Sau đó chuyển Định Dạng Tải Về từ Gốc sang PNG để raster hoá ảnh vector lên Canvas ở kích thước tự nhiên.',
      },
      {
        question: 'Vì sao tệp đầu ra luôn tải về dưới tên decoded_image.<ext>?',
        answer:
          'Chuỗi Base64 chuẩn và Data URL chỉ mã hoá byte ảnh thô và loại MIME, không mang theo tên tệp gốc. Để tên tải về nhất quán với mọi đầu vào, bộ xuất đặt tên tệp đã lưu là decoded_image kèm phần mở rộng của định dạng đã nhận dạng hoặc đã chọn.',
      },
      {
        question: 'Cách nhanh nhất để xoá chuỗi Base64 khổng lồ và kiểm tra chuỗi tiếp theo là gì?',
        answer:
          'Bấm Xoá ở góc trên bên phải của thẻ Dán Chuỗi Base64 để xoá ô nhập trong một lần chạm. Thao tác này lập tức gỡ bảng xem trước và thu hồi các URL đối tượng tạm khỏi bộ nhớ trình duyệt.',
      },
      {
        question: 'Dán chuỗi Base64 có tự động giải mã mà không cần bấm Giải Mã Ảnh không?',
        answer:
          'Có, quá trình giải mã chạy tự động ngay khi văn bản được nhập hoặc thay đổi trong ô nhập, nên dữ liệu hợp lệ sẽ xem trước trong vài mili giây. Nút Giải Mã Ảnh vẫn sẵn sàng mỗi khi bạn muốn chạy lại xác thực thủ công.',
      },
      {
        question: 'Làm sao mã hoá lại ảnh đã tải về thành Data URL HTML hoặc CSS sau này?',
        answer:
          'Cuộn xuống mục Công Cụ Liên Quan bên dưới và mở Chuyển Ảnh Sang Base64 để đổi chiều gọn gàng. Công cụ đó biến mọi ảnh JPG, PNG, WebP, SVG, GIF, BMP hay ICO trở lại thành đoạn Data URL, Base64 thô, HTML <img> hoặc CSS url().',
      },
      {
        question: 'Bộ giải mã Base64 sang Ảnh có hoạt động ngoại tuyến hay trên điện thoại không?',
        answer:
          'Có, mọi bước kiểm tra chuỗi, giải mã byte và chuyển đổi định dạng bằng Canvas đều chạy bằng API có sẵn của trình duyệt mà không cần gọi mạng. Công cụ hoạt động mượt trên Safari iOS, Chrome Android, Windows, macOS và Linux sau khi trang tải xong.',
      },
    ],
    relatedSlugs: ['/image-to-base64', '/image-converter', '/image-dimensions-checker', '/'],
  },
  {
    slug: '/image-color-palette-extractor',
    name: 'Trích Xuất Bảng Màu Từ Ảnh',
    shortDescription: 'Trích xuất màu chủ đạo từ mọi ảnh kèm mã HEX, RGB, HSL và xuất file.',
    category: 'developer',
    seoTitle: 'Trích Xuất Bảng Màu Từ Ảnh – Lấy Màu Chủ Đạo Miễn Phí',
    seoDescription:
      'Trích xuất màu chủ đạo với công cụ trích xuất bảng màu miễn phí. Xem 3 đến 12 mẫu màu kèm mã HEX, RGB, HSL, biến CSS, JSON và thẻ PNG.',
    h1: 'Trích Xuất Bảng Màu Từ Ảnh',
    subtitle:
      'Khám phá bảng màu cốt lõi bên trong bất kỳ ảnh chụp, minh hoạ hay ảnh chụp màn hình giao diện nào với công cụ trích xuất bảng màu chạy ngay trên trình duyệt, dùng thuật toán lượng tử hoá Median-Cut. Dành cho nhà thiết kế UI, chiến lược gia thương hiệu và lập trình viên front-end, công cụ tạo 3 đến 12 mẫu màu cân bằng kèm tỷ lệ phần trăm, sao chép HEX, RGB và HSL chỉ bằng một cú nhấp, biến tuỳ chỉnh CSS, dữ liệu JSON và thẻ PNG bảng màu có thể chia sẻ — tất cả ngay trên thiết bị của bạn.',
    howToSteps: [
      {
        title: 'Tải ảnh nguồn lên',
        description:
          'Kéo thả hoặc chọn bất kỳ tệp JPG, PNG, WebP, HEIC, GIF, BMP hay SVG nào tối đa 20 MB trong vùng tải lên (hoặc dán từ clipboard).',
      },
      {
        title: 'Đặt Số Lượng Màu (3–12)',
        description:
          'Kéo thanh trượt Số Lượng Màu từ 3 tông nhấn tối giản đến 12 mẫu màu chi tiết để tính lại bảng màu ngay lập tức.',
      },
      {
        title: 'Xem Dải Màu Theo Tỉ Lệ',
        description:
          'Quan sát Dải Màu Theo Tỉ Lệ nằm ngang phía trên các thẻ mẫu màu để thấy mỗi tông màu chiếm ưu thế ra sao trong ảnh.',
      },
      {
        title: 'Sao chép mã HEX, RGB hoặc HSL của mẫu màu',
        description:
          'Bấm vào bất kỳ viên HEX, RGB hay HSL nào trong thẻ mẫu màu để sao chép đúng giá trị màu đó vào clipboard.',
      },
      {
        title: 'Xuất Biến CSS hoặc JSON',
        description:
          'Dùng Sao Chép Biến CSS để lấy khối :root sẵn sàng dán, hoặc Sao Chép JSON để lấy mã mẫu màu, tỷ lệ phần trăm và kích thước ảnh nguồn có cấu trúc.',
      },
      {
        title: 'Tải thẻ PNG bảng màu về',
        description:
          'Bấm Tải PNG Bảng Màu để lưu thẻ trình bày nền trắng gọn gàng, ghép ảnh xem trước của bạn với các khối màu đã trích xuất.',
      },
    ],
    features: [
      { title: 'Lượng tử hoá màu Median-Cut', description: 'Nhóm hàng triệu pixel của ảnh thành các mẫu màu chủ đạo cân bằng, đại diện trong vài mili giây.' },
      { title: 'HEX, RGB, HSL & % chiếm ưu thế', description: 'Mỗi mẫu màu hiển thị mã màu chính xác và tỷ lệ ảnh mà nó chiếm.' },
      { title: 'Xuất cho lập trình viên + Thẻ PNG', description: 'Xuất thành biến tuỳ chỉnh CSS, JSON, đoạn Tailwind hoặc thẻ PNG bảng màu có thể chia sẻ.' },
      { title: 'Chạy 100% trên trình duyệt', description: 'Phân tích pixel ngay trên HTML5 Canvas mà không tải ảnh lên.' },
    ],
    faqs: [
      {
        question: 'Thuật toán lượng tử hoá Median-Cut xây dựng bảng màu từ ảnh của tôi như thế nào?',
        answer:
          'Median-Cut nhóm các pixel đã lấy mẫu thành các nhóm màu RGB 3 chiều rồi liên tục chia kênh màu rộng nhất tại trung vị cho đến khi còn đúng số nhóm yêu cầu. Mỗi nhóm được trung bình thành một mẫu màu đại diện, có trọng số theo số pixel rơi vào nhóm đó, tạo ra các màu chủ đạo hài hoà thay vì pixel ngoại lai nhiễu.',
      },
      {
        question: 'Tôi có thể tạo bao nhiêu mẫu màu bằng công cụ trích xuất bảng màu này?',
        answer:
          'Bạn có thể trích xuất từ 3 đến 12 màu chủ đạo bằng thanh trượt Số Lượng Màu. Chọn 3 đến 5 phù hợp với chủ đề thương hiệu tối giản, còn 8 đến 12 sẽ lộ ra tông tối tinh tế và màu nhấn phụ.',
      },
      {
        question: 'Huy hiệu phần trăm trên mỗi thẻ màu thể hiện điều gì?',
        answer:
          'Mỗi phần trăm cho biết tỷ lệ pixel đã lấy mẫu (không trong suốt) được gán cho mẫu màu đó trong quá trình lượng tử hoá. Dải Màu Theo Tỉ Lệ sẽ co giãn từng đoạn màu đúng theo các tỷ lệ phần trăm đó.',
      },
      {
        question: 'Tôi có thể sao chép tất cả mẫu màu đã trích xuất thành biến tuỳ chỉnh CSS cùng lúc không?',
        answer:
          'Có. Bấm Sao Chép Biến CSS sẽ sao chép một khối :root hoàn chỉnh liệt kê --palette-1 đến --palette-N với mọi màu hex sẵn sàng cho stylesheet của bạn. Bạn có thể đổi tên biến sau để khớp với design token của mình.',
      },
      {
        question: 'Dữ liệu nào được bao gồm khi tôi bấm Sao Chép JSON?',
        answer:
          'Sao Chép JSON ghi một mảng đối tượng chứa chỉ số, mã hex, rgb, hsl và tỷ lệ phần trăm chiếm ưu thế của từng mẫu màu. Lập trình viên có thể đưa dữ liệu này thẳng vào tệp cấu hình theme, tài liệu thiết kế hay script tạo style tự động.',
      },
      {
        question: 'Tải PNG bảng màu tạo ra file gì?',
        answer:
          'Tải PNG Bảng Màu tạo một thẻ trình bày nền trắng rộng 1000 pixel, hiển thị ảnh nguồn của bạn căn giữa phía trên cùng các khối màu bo tròn có ghi mã hex và tỷ lệ phần trăm. Tệp tải về ngay trên máy dưới tên <tên-tệp>_palette.png và không có watermark.',
      },
      {
        question: 'Vì sao công cụ Trích Xuất Bảng Màu cho kết quả khác với công cụ lấy màu (eyedropper)?',
        answer:
          'Eyedropper chỉ lấy một pixel duy nhất dưới con trỏ, còn trích xuất bảng màu gom toàn bộ ảnh thành các nhóm màu chủ đạo tổng thể. Nhờ vậy nó nhanh hơn khi xây dựng bảng màu gắn kết thay vì khớp một chấm nhỏ.',
      },
      {
        question: 'Nền trong suốt được xử lý ra sao khi trích xuất màu từ PNG?',
        answer:
          'Các pixel có độ trong suốt alpha dưới 50% sẽ bị bỏ qua trước khi lượng tử hoá chạy. Nhờ vậy khoảng trống canvas trong suốt quanh logo hay ảnh sản phẩm cắt nền không làm lệch bảng màu về trắng hay đen.',
      },
      {
        question: 'Công cụ có kiểm tra từng pixel của ảnh 20 MB khổng lồ không?',
        answer:
          'Để quá trình trích xuất nhanh gọn trong trình duyệt, ảnh được tạm thu nhỏ lên canvas ngoài màn hình tối đa 140 pixel ở cạnh dài nhất trước khi Median-Cut chạy. Vì tỷ lệ màu chủ đạo gần như không đổi ở kích thước đó, bảng màu được tính gần như tức thì mà không làm treo tab.',
      },
      {
        question: 'Định dạng và dung lượng tệp ảnh nào được chấp nhận?',
        answer:
          'Bạn có thể tải JPG, PNG, WebP, HEIC/HEIF của iPhone, GIF, BMP và SVG tối đa 20 MB mỗi ảnh. GIF động nhiều khung sẽ trích xuất màu từ khung mở đầu một cách gọn gàng.',
      },
      {
        question: 'Vì sao hai sắc thái tương tự lại xuất hiện trong bảng màu 12 màu của tôi?',
        answer:
          'Ảnh có dải màu chuyển lớn — như hoàng hôn, tông da hay phông nền studio — chứa hàng triệu pixel tụ lại trong một vùng của không gian màu. Ở số lượng mẫu cao như 10 hay 12, Median-Cut tự nhiên chia vùng dày đặc đó thành các tông sáng và tông giữa liên quan chặt chẽ.',
      },
      {
        question: 'Ý tưởng thương hiệu, moodboard của khách hàng hay ảnh chụp màn hình có bị gửi lên máy chủ không?',
        answer:
          'Không. Việc lấy mẫu pixel, gom cụm màu, định dạng mã và tạo thẻ PNG đều diễn ra hoàn toàn trong bộ nhớ HTML5 Canvas trên máy bạn. Tài nguyên sáng tạo của bạn ở yên trên thiết bị của chính bạn.',
      },
      {
        question: 'Tôi có thể đổi số lượng mẫu màu sau khi đã sao chép CSS mà không cần tải lại ảnh không?',
        answer:
          'Có. Di chuyển thanh trượt Số Lượng Màu sẽ gom cụm lại dữ liệu ảnh đã lưu trong bộ nhớ ngay lập tức, để bạn xem trước 4, 6 hay 10 màu cạnh nhau trước khi xuất.',
      },
      {
        question: 'Vì sao một điểm nhấn neon nhỏ lại không xuất hiện trong bảng màu 4 màu?',
        answer:
          'Vì Median-Cut ưu tiên vùng màu chứa diện tích pixel lớn nhất, nên một nút nhấn chỉ chiếm 1% trong ảnh chụp màn hình tối lớn có thể bị gộp vào nhóm rộng hơn khi số mẫu thấp. Tăng Số Lượng Màu lên khoảng 10 hay 12 thường sẽ đưa các màu nhấn nhỏ vào tầm nhìn.',
      },
      {
        question: 'Nhãn chữ trên mẫu màu có đọc được trên màu rất tối hay rất sáng không?',
        answer:
          'Có. Trên cả thẻ xem trực tiếp lẫn thẻ PNG bảng màu đã xuất, mực trắng hay mực tối được tính tự động theo độ sáng cảm nhận của từng màu, để mã hex luôn dễ đọc.',
      },
      {
        question: 'Tôi có thể dán ảnh chụp màn hình trực tiếp từ clipboard vào công cụ không?',
        answer:
          'Có. Nhấn Ctrl+V trên Windows/Linux hoặc Cmd+V trên macOS ở bất kỳ đâu trên trang để tải ảnh chụp màn hình hay mockup thiết kế đã sao chép thẳng vào công cụ phân tích màu.',
      },
      {
        question: 'Chuỗi HSL và RGB khớp chuẩn CSS chính xác đến mức nào?',
        answer:
          'Mỗi mẫu màu xuất ra ký pháp rgb(r, g, b) và hsl(h, s%, l%) chuẩn CSS hợp lệ, kèm mã hex #RRGGBB sáu chữ số viết hoa. Bạn có thể dán bất kỳ chuỗi đã sao chép nào thẳng vào CSS, Figma hay DevTools của trình duyệt.',
      },
      {
        question: 'Tôi có thể trích xuất bảng màu từ logo SVG vector không?',
        answer:
          'Có. Khi bạn thả tệp SVG tối đa 20 MB, trình duyệt sẽ raster hoá nó gọn gàng lên Canvas trước khi đếm màu, cho bạn ngay mẫu màu và tỷ lệ phần trăm từ tác phẩm vector.',
      },
      {
        question: 'Tải ảnh thương hiệu mới lên có tự động xoá các mẫu màu cũ không?',
        answer:
          'Có, thả ảnh thay thế hoặc bấm Ảnh Mới sẽ xoá sạch trạng thái bảng màu cũ và chạy lượng tử hoá mới trên ảnh mới. Bạn không cần tải lại trang giữa các ảnh.',
      },
      {
        question: 'Tôi có thể dùng công cụ trích xuất bảng màu này trên iOS, Android và máy tính không?',
        answer:
          'Có. Lưới mẫu màu responsive, thanh trượt và nút sao chép chạy mượt trên Safari di động, Chrome Android và trình duyệt máy tính hiện đại mà không cần đăng ký hay cài đặt.',
      },
    ],
    relatedSlugs: ['/image-color-picker', '/favicon-generator', '/add-background-to-image', '/'],
  },
  {
    slug: '/gif-maker',
    name: 'Tạo Ảnh GIF',
    shortDescription: 'Tạo ảnh GIF động từ JPG, PNG & WebP với độ trễ khung hình và vòng lặp tuỳ chỉnh.',
    category: 'create',
    seoTitle: 'Tạo Ảnh GIF Động Miễn Phí – Ghép Ảnh Thành GIF',
    seoDescription:
      'Tạo ảnh động mượt mà với công cụ tạo ảnh GIF động miễn phí ngay trên trình duyệt. Ghép khung JPG, PNG, WebP và HEIC, đặt độ trễ từng khung và chọn số vòng lặp.',
    h1: 'Tạo Ảnh GIF Động Miễn Phí',
    subtitle:
      'Biến ảnh chụp, các góc sản phẩm và khung hướng dẫn giao diện thành ảnh động lặp lại với công cụ tạo ảnh GIF động miễn phí chạy gọn gàng ngay trên trình duyệt. Lý tưởng cho người sáng tạo nội dung, người viết hướng dẫn và marketer, công cụ cho phép sắp xếp lại, nhân đôi và hẹn giờ từng khung riêng lẻ, chọn số vòng lặp, tuỳ chỉnh cách vừa khung và kích thước, rồi mã hoá tệp GIF89a không watermark một cách riêng tư.',
    howToSteps: [
      {
        title: 'Tải lên hai ảnh khung trở lên',
        description:
          'Thả tệp JPG, PNG, WebP, HEIC, GIF, BMP hoặc SVG tối đa 20 MB mỗi tệp vào vùng thả khung (hoặc dùng Thêm Khung sau để gắn thêm).',
      },
      {
        title: 'Sắp xếp lại, nhân đôi hoặc xoá khung',
        description:
          'Kéo thẻ khung bằng tay cầm hoặc dùng nút mũi tên để đặt thứ tự, nhân đôi khung chính hoặc gỡ ảnh không cần.',
      },
      {
        title: 'Đặt tốc độ chung và độ trễ từng khung',
        description:
          'Chọn thanh trượt Thời Lượng Khung Mặc Định (50–3000 ms) hoặc mẫu nhanh 1–10 FPS, và nhập Độ Trễ (ms) riêng cho từng khung nếu cần.',
      },
      {
        title: 'Cấu hình Vòng Lặp và Cách Vừa Khung',
        description:
          'Chọn Lặp Mãi Mãi, Đặt Số Vòng Lặp (2–50 lần) hoặc Phát Một Lần, rồi chọn cách vừa khung Vừa Khít hoặc Phủ Đầy kèm Màu Nền Lót.',
      },
      {
        title: 'Chỉnh Kích Thước Xuất và Chất Lượng Bảng Màu',
        description:
          'Chọn mẫu 480px, 640px, 800px hoặc Gốc (hoặc nhập chiều rộng/chiều cao từ 16 đến 2000 px) và đặt Chất Lượng Bảng Màu từ 10% đến 100%.',
      },
      {
        title: 'Tạo và tải ảnh GIF động về',
        description:
          'Bấm Tạo Ảnh GIF Động để xem trước Phát Lại Theo Thời Gian Thực hoặc mã hoá ngay trên máy và lưu animated_compressmypic.gif.',
      },
    ],
    features: [
      {
        title: 'Mã hoá GIF89a thật ngay trên máy',
        description:
          'Dùng bộ lượng tử hoá màu và bộ mã hoá GIF LZW nhanh ngay trong trình duyệt (tải lười khi cần) — không gọi API ngoài hay tải lên máy chủ.',
      },
      {
        title: 'Độ trễ chung & từng khung',
        description:
          'Đặt tốc độ khung đồng đều theo mili giây hoặc mẫu FPS, và tuỳ chọn ghi đè thời gian trên từng khung chính.',
      },
      {
        title: 'Điều khiển vòng lặp & vừa khung linh hoạt',
        description:
          'Chọn lặp mãi mãi, phát một lần hoặc số lần phát chính xác, kèm vừa khung Vừa Khít hoặc Phủ Đầy.',
      },
      {
        title: 'Cảnh báo dung lượng tệp lớn',
        description:
          'Tự động cảnh báo khi GIF đã mã hoá trở nên nặng (trên 5–15 MB) để bạn tối ưu kích thước hoặc chất lượng cho ứng dụng chat.',
      },
    ],
    faqs: [
      {
        question: 'Trình duyệt mã hoá ảnh của tôi thành GIF động mà không tải lên như thế nào?',
        answer:
          'Khi bạn bấm Tạo Ảnh GIF Động, trang tải lười một bộ mã hoá GIF89a và bộ lượng tử hoá màu bằng JavaScript ngay trong tab trình duyệt. Mỗi khung được vẽ lên canvas ngoài màn hình ở kích thước bạn chọn rồi nén bằng LZW ngay trên máy.',
      },
      {
        question: 'Bản Xem Trước Theo Thời Gian Thực khác gì với GIF đã tạo?',
        answer:
          'Trước khi mã hoá, canvas xem trước bên trái phát lần lượt các ảnh đã tải lên theo thời gian thực, dùng độ trễ mili giây và cài đặt vừa khung hiện tại để bạn kiểm tra nhịp độ ngay. Tạo GIF sẽ đóng băng các lựa chọn đó thành tệp .gif 256 màu đã lượng tử hoá thật sự.',
      },
      {
        question: 'Tôi có thể dừng lâu hơn trên slide tiêu đề hoặc khung kêu gọi cuối không?',
        answer:
          'Có. Thời Lượng Khung Mặc Định đặt tốc độ nền (50 ms đến 3000 ms) cho toàn bộ chuỗi, còn mỗi thẻ khung có ô nhập Độ Trễ (ms) tuỳ chọn nhận từ 20 ms đến 10.000 ms để giữ một slide cụ thể lâu hơn.',
      },
      {
        question: 'Các mẫu nhanh 1 FPS, 2 FPS, 5 FPS và 10 FPS tương ứng với khoảng thời gian nào?',
        answer:
          'Các nút đó ánh xạ số khung mỗi giây thành khoảng mili giây chính xác: 1000 ms cho 1 FPS, 500 ms cho 2 FPS, 200 ms cho 5 FPS và 100 ms cho 10 FPS. Bạn vẫn có thể chỉnh thanh trượt theo từng bước 25 ms sau đó.',
      },
      {
        question: 'Có những tuỳ chọn vòng lặp nào cho GIF hoàn chỉnh?',
        answer:
          'Trong Vòng Lặp, bạn có thể chọn Lặp Mãi Mãi để phát vô hạn, Đặt Số Vòng Lặp để chỉ định số lần chính xác từ 2 đến 50, hoặc Phát Một Lần để ảnh động dừng gọn trên khung cuối. Byte mở rộng Netscape được ghi tự động theo lựa chọn của bạn.',
      },
      {
        question: 'Tôi nên chọn Vừa Khít hay Phủ Đầy trong Cách Vừa Khung như thế nào?',
        answer:
          'Vừa Khít thu nhỏ mọi ảnh để vừa hoàn toàn trong khung GIF, lấp phần thừa bằng Màu Nền Lót bạn chọn. Phủ Đầy phóng to nhẹ từng ảnh để lấp kín toàn bộ canvas không còn viền, cắt phần cạnh thừa ra ngoài.',
      },
      {
        question: 'Tôi xử lý ảnh có tỉ lệ khung hình khác nhau trong một ảnh động ra sao?',
        answer:
          'Chọn Vừa Khít nếu bạn không bao giờ muốn logo hay ảnh dọc bị cắt, và khớp màu Nền Lót với nền website hoặc nền tối của bạn. Chọn Phủ Đầy khi ghép ảnh thường có nhiều hình dạng khác nhau thành slideshow tràn viền đồng đều.',
      },
      {
        question: 'Kích thước pixel tối thiểu và tối đa của GIF tạo ra là bao nhiêu?',
        answer:
          'Chiều Rộng và Chiều Cao xuất nhận giá trị từ 16 px đến 2000 px, với nút nhanh 480px, 640px, 800px và Gốc. Bật Khóa Tỉ Lệ khi thu phóng một chiều theo tỉ lệ.',
      },
      {
        question: 'Vì sao công cụ hiện Cảnh Báo GIF Lớn khi trên 5 MB hoặc 15 MB?',
        answer:
          'Vì GIF lưu toàn bộ khung raster với giới hạn 256 màu thay vì nén liên khung hiện đại như video, nên ảnh động rộng, độ phân giải cao sẽ nặng rất nhanh. Chuyển chiều rộng sang 480px hoặc 640px, hoặc hạ Chất Lượng Bảng Màu sẽ giảm đáng kể trọng lượng tệp cho ứng dụng chat và email.',
      },
      {
        question: 'Thanh trượt Chất Lượng Bảng Màu điều khiển điều gì?',
        answer:
          'Chất Lượng Bảng Màu (10% đến 100%, mặc định 80%) chỉnh mức độ tinh vi khi bộ lượng tử hoá lấy mẫu pixel của khung để xây bảng màu 256 màu. Mức cao giữ dải màu chuyển mượt hơn, mức thấp mã hoá nhanh hơn và thường giảm dung lượng byte.',
      },
      {
        question: 'Tôi nên ghép bao nhiêu khung nguồn thành một GIF tạo trên trình duyệt?',
        answer:
          'Hàng đợi khung không có giới hạn cứng về số tệp, nhưng ghép 2 đến 40 khung ở chiều rộng 480px–800px thường chạy mượt trong bộ nhớ trình duyệt máy tính và điện thoại thông thường. Có thể thêm từng đợt ảnh 4K lớn hơn, tối đa 20 MB mỗi tệp đầu vào.',
      },
      {
        question: 'Tôi có thể lặp lại một khung mà không tải cùng một tệp hai lần không?',
        answer:
          'Có. Bấm biểu tượng nhân đôi trên bất kỳ thẻ khung nào để sao chép slide đó kèm độ trễ tuỳ chỉnh ngay cạnh bản gốc, rồi kéo hoặc dùng nút mũi tên để di chuyển nó đến bất kỳ vị trí nào trong dòng thời gian.',
      },
      {
        question: 'Tôi phải tải mọi thứ lên cùng lúc hay có thể thêm khung sau?',
        answer:
          'Bạn có thể thêm ảnh bất cứ lúc nào bằng nút Thêm Khung trong tiêu đề Khung. Thứ tự khung hiện tại, độ trễ tuỳ chỉnh và kích thước xuất vẫn giữ nguyên khi khung mới được gắn thêm.',
      },
      {
        question: 'Ảnh Live Photo HEIC hay ảnh chụp liên tiếp từ iPhone có dùng được trong công cụ tạo GIF này không?',
        answer:
          'Có. Nếu bạn chọn nhiều ảnh .heic hoặc .heif tối đa 20 MB mỗi ảnh, trang sẽ giải mã chúng ngay trên trình duyệt bằng WebAssembly trước khi lắp ráp ảnh động.',
      },
      {
        question: 'Chuyện gì xảy ra nếu tôi đổi cài đặt sau khi đã tạo GIF?',
        answer:
          'Bấm Quay Lại Trình Soạn Khung bên dưới bản xem trước GIF đã hoàn thành để mở khoá dòng thời gian và điều khiển. Tự do chỉnh độ trễ, vòng lặp, kích thước hoặc thứ tự khung rồi tạo tệp mới ngay.',
      },
      {
        question: 'GIF tạo ra có giữ nền trong suốt sạch không?',
        answer:
          'Trước khi lượng tử hoá LZW chạy, mỗi khung được ghép gọn lên Màu Nền Lót bạn chọn (mặc định là trắng). Nhờ vậy tránh viền đen răng cưa thô quanh cạnh PNG hay SVG đã khử răng cưa.',
      },
      {
        question: 'Tôi có thể trích một khung từ GIF có sẵn nếu tải tệp .gif lên không?',
        answer:
          'Khi bạn thả ảnh .gif làm khung nguồn, HTML5 Canvas tải khung đầu tiên của nó vào chuỗi như bất kỳ ảnh tĩnh nào. Dùng công cụ Tách Ảnh hoặc Nén Ảnh GIF nếu bạn cần mã hoá lại GIF động có sẵn.',
      },
      {
        question: 'GIF đã tải về có bị thêm watermark hay thẻ kết quảng cáo không?',
        answer:
          'Không bao giờ. Mọi GIF động đã mã hoá chỉ chứa khung và cài đặt bạn chọn, không có thương hiệu, watermark hay giới hạn sử dụng.',
      },
      {
        question: 'Vì sao tỉ lệ khung hình giữ cố định khi tôi chỉnh Chiều Rộng Xuất?',
        answer:
          'Khóa Tỉ Lệ được bật mặc định để tránh khung bị kéo giãn hay bóp méo theo kích thước slide đầu tiên. Bấm nút khoá để nhập chiều rộng và chiều cao độc lập nếu cần.',
      },
      {
        question: 'Tệp animated_compressmypic.gif đã xuất có dùng được trên Slack, Discord và website không?',
        answer:
          'Có. Bộ mã hoá xuất tệp nhị phân GIF89a chuẩn kèm phần mở rộng vòng lặp Netscape, đảm bảo phát được rộng rãi trên trình duyệt, ứng dụng chat, blog và công cụ thuyết trình.',
      },
    ],
    relatedSlugs: ['/image-collage-maker', '/image-splitter', '/image-resizer', '/'],
  },
  {
    slug: '/image-collage-maker',
    name: 'Ghép Ảnh Collage',
    shortDescription: 'Sắp xếp ảnh thành lưới 2×2, 3×3 hoặc dải ảnh với kéo thả đổi chỗ và xuất file.',
    category: 'create',
    seoTitle: 'Ghép Ảnh Collage Online Miễn Phí – Lưới & Dải Ảnh',
    seoDescription:
      'Tạo lưới ảnh với công cụ ghép ảnh collage miễn phí ngay trên trình duyệt. Dùng bố cục 2x2, 3x3 hoặc dải ảnh, kéo ô để đổi vị trí, và lưu JPG hoặc PNG.',
    h1: 'Ghép Ảnh Collage Online Miễn Phí',
    subtitle:
      'Lắp ráp lưới ảnh gọn gàng, dải ảnh trước–sau và bố cục story mạng xã hội bằng công cụ ghép ảnh collage miễn phí ngay trong trình duyệt. Dành cho người sáng tạo nội dung, người bán hàng online và gia đình, công cụ hỗ trợ lưới 2×2 và 3×3 cùng dải dọc và dải ngang với kéo thả đổi ô, chỉnh tỉ lệ, bo góc, khoảng cách tuỳ chỉnh và xuất JPG hoặc PNG không watermark lên đến 4000 px.',
    howToSteps: [
      {
        title: 'Tải ảnh vào studio ghép ảnh',
        description:
          'Thả ảnh JPG, PNG, WebP, HEIC, GIF, BMP hoặc SVG tối đa 20 MB mỗi ảnh; thả từ 5 ảnh trở lên sẽ tự chọn Lưới 3×3, còn 4 ảnh trở xuống chọn Lưới 2×2.',
      },
      {
        title: 'Chọn bố cục lưới hoặc dải ảnh',
        description:
          'Chuyển đổi tự do giữa Lưới 2×2 (4 ô), Lưới 3×3 (9 ô), Dải Dọc hoặc Dải Ngang trong bảng Bố Cục Collage.',
      },
      {
        title: 'Sắp xếp lại hoặc lấp đầy ô ghép',
        description:
          'Kéo bất kỳ ô nào sang ô khác để đổi vị trí, chạm hai ô liên tiếp trên màn hình cảm ứng, dùng mũi tên Trái/Phải, hoặc bấm Thêm Ảnh để lấp ô trống.',
      },
      {
        title: 'Chỉnh tỉ lệ ô, khoảng cách và góc bo',
        description:
          'Chỉnh Chia Cột, Chia Hàng hoặc Nhấn Mạnh Ô Chính (hoặc bấm Ô Đều Nhau), rồi đặt Khoảng Cách (0–80 px) và Bán Kính Ô (0–60 px).',
      },
      {
        title: 'Chọn màu nền, Cách Vừa Ảnh và Kích Thước Xuất',
        description:
          'Chọn cách khung Phủ Đầy hoặc Vừa Khít, chọn mẫu Màu Nền hoặc mã hex, và nhập kích thước từ 200 đến 4000 px (hoặc bấm mẫu nhanh 1200×1200, 1920×1080 hoặc 1080×1920).',
      },
      {
        title: 'Xuất ảnh ghép hoàn chỉnh',
        description:
          'Chọn JPG (kèm thanh trượt chất lượng 10–100%) hoặc PNG (Không Mất Dữ Liệu) rồi bấm Tải Collage Về để lưu bố cục độ phân giải đầy đủ ngay trên máy.',
      },
    ],
    features: [
      {
        title: '4 bố cục collage gọn gàng',
        description:
          'Tạo lưới vuông 2×2 cân bằng, lưới ảnh 3×3, story dọc cho điện thoại hoặc dải so sánh ngang rộng.',
      },
      {
        title: 'Kéo thả đổi vị trí ô',
        description:
          'Kéo bất kỳ ô ảnh nào sang ô khác để đổi vị trí ngay lập tức, hoặc chạm hai ô trên điện thoại.',
      },
      {
        title: 'Tỉ lệ ô & khoảng cách tuỳ chỉnh',
        description:
          'Chỉnh tỉ mỉ chia cột, chia hàng, nhấn mạnh ô chính, khoảng cách, độ bo góc và màu nền.',
      },
      {
        title: 'Xuất JPG & PNG độ phân giải cao',
        description:
          'Kết xuất collage độ phân giải đầy đủ lên đến 4000px trực tiếp trên HTML5 Canvas, không watermark.',
      },
    ],
    faqs: [
      {
        question: 'Công cụ ghép ảnh collage này có những bố cục nào?',
        answer:
          'Bạn có thể chuyển ngay giữa Lưới 2×2 (4 ô), Lưới 3×3 (9 ô), Dải Dọc (cột từ trên xuống dưới) và Dải Ngang (hàng cạnh nhau). Chọn Dải Dọc hoặc Dải Ngang sẽ tự đặt kích thước mặc định tiện lợi (1080×1920 hoặc 1920×720), bạn vẫn chỉnh tự do sau đó.',
      },
      {
        question: 'Chạm để đổi chỗ hoạt động ra sao khi tôi ghép ảnh trên điện thoại hoặc máy tính bảng?',
        answer:
          'Trên màn hình cảm ứng khó kéo thả, chỉ cần chạm vào ô đầu tiên trong mục Sắp Xếp Ô để tô sáng, rồi chạm ô thứ hai để đổi ảnh của chúng ngay lập tức. Nút mũi tên Trái và Phải cũng có sẵn bên dưới mỗi ô.',
      },
      {
        question: 'Chuyện gì xảy ra nếu tôi tải ít ảnh hơn số ô trong lưới 3×3?',
        answer:
          'Ô chưa lấp đầy sẽ hiện dưới dạng khung Ô N nét đứt gọn gàng trong bản xem trước trực tiếp để bạn kiểm tra bố cục trong lúc thêm ảnh còn lại. Bạn có thể bấm nút + ngay trên ô trống hoặc chuyển sang bố cục 2×2 hay dải ảnh cho đúng số ảnh của mình.',
      },
      {
        question: 'Tôi có thể làm một ảnh nổi bật lớn hơn các ảnh còn lại trong lưới hoặc dải không?',
        answer:
          'Có. Trong Lưới 2×2, bạn kéo Chia Cột và Chia Hàng từ 20% đến 80%; trong Lưới 3×3, bạn đổi kích thước Cột Giữa và Hàng Giữa; còn trong Dải Dọc hoặc Dải Ngang, bạn tăng Nhấn Mạnh Ô Chính lên đến +100%.',
      },
      {
        question: 'Làm sao đưa thanh trượt ô không đều trở lại lưới đồng đều?',
        answer:
          'Bấm nút Ô Đều Nhau trong mục Tỉ Lệ Ô & Khoảng Cách. Nút này đặt lại chia cột, chia hàng và nhấn mạnh ô chính về các phần chia đều cân bằng chỉ trong một cú nhấp.',
      },
      {
        question: 'Tôi có thể tạo collage liền mạch không viền, không khoảng cách giữa các ảnh không?',
        answer:
          'Có. Kéo cả Khoảng Cách và Bán Kính Ô xuống 0 px để các ảnh kề nhau chạm mép gọn gàng, không còn đường ron hay góc bo nhìn thấy được.',
      },
      {
        question: 'Khi nào nên chuyển Cách Vừa Ảnh từ Phủ Đầy sang Vừa Khít?',
        answer:
          'Phủ Đầy lấp đầy mọi ô chữ nhật sát mép bằng cách cắt nhẹ các cạnh nằm ngoài tỉ lệ của ô — lý tưởng cho lưới phong cách sống đồng đều. Vừa Khít thu nhỏ từng ảnh cho đến khi toàn bộ chủ thể vừa trong ô nguyên vẹn, hiển thị Màu Nền của bạn phía sau khoảng trống.',
      },
      {
        question: 'Tôi có thể chỉnh khoảng cách ô và bán kính bo góc độc lập không?',
        answer:
          'Có. Khoảng Cách chỉnh lề ngoài và chiều rộng rãnh từ 0 px đến 80 px, còn Bán Kính Ô bo tròn góc của mọi hộp ảnh mượt mà từ 0 px đến 60 px.',
      },
      {
        question: 'Có những kích thước canvas nhanh và tỉ lệ mẫu nào được hỗ trợ?',
        answer:
          'Bạn có thể nhập bất kỳ Kích Thước Xuất tuỳ chỉnh nào từ 200 px đến 4000 px mỗi cạnh cho thẻ in ấn hoặc thẻ mạng xã hội. Nút nhanh cũng có sẵn cho Vuông 1200×1200, Ngang 1920×1080 và Story 1080×1920.',
      },
      {
        question: 'Màu Nền mặc định có những mẫu nào?',
        answer:
          'Bạn có mẫu một cú nhấp cho trắng thuần (#ffffff), xanh đá đậm (#0f172a) và xám trung tính nhạt (#f1f5f9). Bộ chọn màu gốc đầy đủ nằm ngay bên cạnh mỗi khi bạn cần giá trị hex thương hiệu chính xác.',
      },
      {
        question: 'Tải hỗn hợp ảnh HEIC của iPhone, PNG và JPG vào một collage có được không?',
        answer:
          'Có. Mỗi tệp đã tải lên — gồm JPG, PNG, WebP, HEIC/HEIF, GIF, BMP và SVG tối đa 20 MB — được giải mã riêng tư trong trình duyệt và vẽ lên một HTML5 Canvas thống nhất.',
      },
      {
        question: 'Nếu tôi đặt sticker PNG trong suốt vào ô, phía sau sẽ hiện gì?',
        answer:
          'Mỗi ô hiển thị trên Màu Nền bạn chọn trước khi ghép ảnh nền trước. Nhờ vậy logo PNG trong suốt và ảnh cắt nền vẫn sạch trên nền trắng, xanh đá đậm hay màu tuỳ chỉnh.',
      },
      {
        question: 'Tôi nên lưu collage hoàn chỉnh dưới dạng JPG hay PNG (Không Mất Dữ Liệu)?',
        answer:
          'Chọn JPG với chất lượng 85%–95% cho lưới ảnh nhẹ dùng trên Instagram, WhatsApp hoặc email. Chọn PNG (Không Mất Dữ Liệu) khi ghép ảnh chụp màn hình UI sắc nét, sơ đồ hay đồ hoạ có chữ, nơi quầng nén JPEG sẽ gây khó chịu.',
      },
      {
        question: 'Tên tệp đã xuất cho biết cài đặt collage nào đã dùng ra sao?',
        answer:
          'Mọi bản xuất đã tải về tự động nhúng bố cục và kích thước pixel, tạo tên như collage_2x2_1200x1200.jpg. Kiểu đặt tên này giúp bạn sắp xếp nhiều biến thể tỉ lệ khung hình mà không cần đổi tên thủ công.',
      },
      {
        question: 'Ảnh gia đình riêng tư hay ảnh trước/sau của khách hàng có bị tải lên đâu không?',
        answer:
          'Không. Việc giải mã ảnh, ghép bố cục lưới và xuất Canvas độ phân giải cao đều diễn ra hoàn toàn trong tab trình duyệt, nên không ảnh nào rời khỏi điện thoại hay máy tính của bạn.',
      },
      {
        question: 'Bản xem trước collage có khớp đúng từng pixel khi xuất ở 4000 px không?',
        answer:
          'Có. Cả sân khấu xem trực tiếp lẫn bản xuất cuối dùng chung đúng phép tính tỉ lệ và góc bo, co giãn Khoảng Cách và Bán Kính Ô mượt mà theo Kích Thước Xuất đã chọn để rãnh xuất ra khớp với những gì bạn thấy.',
      },
      {
        question: 'Dải Dọc hoặc Dải Ngang chứa được bao nhiêu ảnh cùng lúc?',
        answer:
          'Dải Dọc và Dải Ngang hỗ trợ từ 2 đến 6 ô động tuỳ theo số ảnh bạn tải. Nhờ vậy bạn dễ dàng tạo ảnh so sánh hai tấm hoặc dải story nhiều khung một cách gọn gàng.',
      },
      {
        question: 'Tôi có thể gỡ một ảnh khỏi collage mà không cần làm lại từ đầu không?',
        answer:
          'Có. Bấm nút thùng rác trên bất kỳ thẻ ô nào trong mục Sắp Xếp Ô để gỡ ảnh đó, trong khi mọi ảnh đã tải khác, cài đặt bố cục và chia ô tuỳ chỉnh vẫn giữ nguyên.',
      },
      {
        question: 'Độ phân giải tối đa tôi có thể xuất để in ảnh collage là bao nhiêu?',
        answer:
          'Cả Chiều Rộng và Chiều Cao Xuất đều co giãn lên đến 4000×4000 pixel, cho 16 megapixel chi tiết sắc nét. Độ phân giải này xử lý tốt ảnh in để bàn, lookbook và slide độ phân giải cao.',
      },
      {
        question: 'Có giới hạn số collage tôi có thể tạo hoặc xuất không?',
        answer:
          'Không. Bạn có thể đổi bố cục, chỉnh màu và xuất collage không giới hạn miễn phí, không tài khoản, không watermark hay giới hạn xuất hằng ngày.',
      },
    ],
    relatedSlugs: ['/gif-maker', '/image-splitter', '/image-border-generator', '/'],
  },
  {
    slug: '/compress-image-to-50kb',
    name: 'Nén Ảnh Xuống 50KB',
    shortDescription: 'Thu nhỏ ảnh JPG, PNG & WebP xuống đúng dưới 50KB cho biểu mẫu.',
    category: 'compress',
    seoTitle: 'Nén Ảnh Xuống 50KB Online Miễn Phí – Hộ Chiếu & Biểu Mẫu',
    seoDescription:
      'Nén ảnh xuống 50KB online miễn phí cho cổng hộ chiếu, biểu mẫu visa và ảnh đại diện. Tìm kiếm chất lượng nhị phân và thu nhỏ kích thước thông minh ngay trên trình duyệt.',
    h1: 'Nén Ảnh Xuống 50KB Online',
    subtitle:
      'Chuẩn bị ảnh hộ chiếu, bản scan visa, chữ ký tay và ảnh đại diện nhỏ gọn cho giới hạn khắt khe của cổng nộp hồ sơ khi bạn cần nén ảnh xuống 50KB một cách đáng tin cậy. Chạy 100% ngay trên trình duyệt với tệp tối đa 25 MB, công cụ kết hợp tìm kiếm chất lượng nhị phân với thu nhỏ pixel tuỳ chọn để tài liệu nhạy cảm không bao giờ chạm tới máy chủ ngoài.',
    howToSteps: [
      {
        title: 'Thả ảnh hoặc bản scan tài liệu',
        description:
          'Tải lên một hoặc nhiều tệp JPG, PNG, WebP hoặc HEIC tối đa 25 MB (hoặc dán ảnh đã sao chép bằng Ctrl+V).',
      },
      {
        title: 'Chọn Định Dạng Xuất (Gốc, JPG, WebP hoặc PNG)',
        description:
          'Chọn JPG hoặc WebP cho giới hạn 50 KB nghiêm ngặt với ảnh, hoặc giữ Gốc kèm Tự Động Chuyển PNG cho ảnh chụp màn hình nặng.',
      },
      {
        title: 'Kiểm tra nút bật thu nhỏ và chuyển đổi tự động',
        description:
          'Giữ bật thu nhỏ kích thước thông minh cho ảnh nhiều megapixel, hoặc tắt để giữ đúng kích thước pixel khi cổng yêu cầu.',
      },
      {
        title: 'Kiểm tra huy hiệu byte đã xác minh và chế độ so sánh',
        description:
          'Kiểm tra mỗi thẻ có huy hiệu xanh lá Dưới 50 KB và mở thanh trượt So Sánh để xác minh đặc điểm khuôn mặt hay nét chữ ký vẫn rõ.',
      },
      {
        title: 'Tải từng tệp riêng lẻ hoặc Tải Tất Cả (ZIP)',
        description:
          'Lưu từng tệp <tên>_50kb riêng lẻ, dùng Giữ Nguyên Bản nếu tệp vốn đã nhỏ hơn, hoặc gói cả loạt vào compressmypic_50kb.zip.',
      },
    ],
    features: [
      {
        title: 'Tìm Kiếm Chất Lượng Nhị Phân + Thu Nhỏ Kích Thước',
        description:
          'Tìm chất lượng hình ảnh cao nhất dưới 50KB trước ở pixel gốc, rồi thu nhỏ độ phân giải mượt mà nếu cần.',
      },
      {
        title: 'Báo cáo kết quả trung thực',
        description:
          'Không bao giờ giả mạo dung lượng xuất — nếu PNG không mất dữ liệu hay độ phân giải bị khoá không vừa dưới 50KB, công cụ giải thích rõ lý do.',
      },
      {
        title: 'PNG nặng tự chuyển sang WebP/JPG',
        description:
          'Tuỳ chọn chuyển PNG không mất dữ liệu nặng sang WebP hoặc JPG để ảnh vẫn sắc nét mà vẫn đạt 50KB.',
      },
      {
        title: 'Xử lý riêng tư ngay trên trình duyệt',
        description: 'Hộ chiếu, ảnh CMND và biểu mẫu cá nhân không bao giờ rời khỏi thiết bị của bạn.',
      },
    ],
    faqs: [
      {
        question: 'Những cổng nộp hồ sơ nào thường yêu cầu tải ảnh đúng dưới 50 KB?',
        answer:
          'Đơn xin visa của chính phủ, gia hạn hộ chiếu, đăng ký thi công chức, biểu mẫu tuyển sinh đại học và ô scan chữ ký thường áp giới hạn tải lên cứng 20 KB–50 KB. Giữ tệp thoải mái dưới 50 KB giúp tránh lỗi hết thời gian nộp biểu mẫu và bị từ chối tải lên.',
      },
      {
        question: 'Vì sao ảnh hộ chiếu và bản scan CMND an toàn khi thu nhỏ ở đây?',
        answer:
          'Mọi thao tác pixel — từ giải mã HEIC đến tìm kiếm nén nhị phân và đóng gói ZIP — đều thực thi ngay trong tab trình duyệt của bạn. Ảnh nhận dạng nhạy cảm, chữ ký và hồ sơ cá nhân không bao giờ được tải lên mạng.',
      },
      {
        question: 'Vì sao đạt 50 KB với ảnh điện thoại 12 megapixel thường cần thu nhỏ kích thước?',
        answer:
          'Một ảnh đầy đủ 4000×3000 pixel chứa 12 triệu pixel, mà dữ liệu Huffman JPEG cơ bản của nó thường vượt 200 KB ngay cả khi nén mạnh. Khi bật thu nhỏ kích thước thông minh, bộ tối ưu hạ dần kích thước cho đến khi chi tiết khuôn mặt sắc nét vừa gọn dưới 50 KB.',
      },
      {
        question: 'Tôi nên chọn JPG hay WebP khi nộp ảnh dưới 50 KB cho cổng thi cử hoặc chính phủ?',
        answer:
          'Luôn chọn JPG cho biểu mẫu chính phủ, hộ chiếu, học bổng hay ngân hàng đời cũ vì nhiều script kiểm tra từ chối tệp .webp dù nhỏ hơn. Chọn WebP cho ảnh đại diện web hiện đại hoặc trang cá nhân, nơi độ sắc nét tối đa ở 50 KB quan trọng hơn.',
      },
      {
        question: 'Công cụ tối ưu chữ ký tay hoặc tài liệu scan xuống dưới 50 KB như thế nào?',
        answer:
          'Bản scan mực đen trên giấy trắng sáng nén rất mạnh ở JPG hoặc WebP sau khi cắt bớt độ phân giải thừa một cách gọn gàng. Kiểm tra cửa sổ So Sánh giúp nét mực vẫn sạch, không bị vệt nén nhòe quanh cạnh chữ.',
      },
      {
        question: 'Vì sao thông báo đỏ Đã Tăng xuất hiện khi ảnh đầu vào của tôi vốn đã 32 KB?',
        answer:
          'Nếu ảnh JPG hoặc PNG vốn đã nhẹ được mã hoá lại ở chất lượng cao trên Canvas, luồng byte mới đôi khi lại thành 40 KB thay vì nhỏ hơn nữa. Chỉ cần bấm Giữ Nguyên Bản trên thẻ đó để giữ đúng tệp nguồn 32 KB của bạn.',
      },
      {
        question: 'Tôi có thể giữ đúng kích thước 600×600 pixel nếu cổng visa yêu cầu cả pixel cố định và tối đa 50 KB không?',
        answer:
          'Có. Bỏ chọn Cho Phép Thu Nhỏ Kích Thước Thông Minh để kích thước pixel giữ nguyên 100%, để tìm kiếm nhị phân thử chất lượng JPEG hoặc WebP xuống đến 5% ở đúng kích thước của bạn. Nếu ảnh chân dung 600×600 tương đối sạch, nó dễ dàng vừa dưới 50 KB mà không cần đổi kích thước.',
      },
      {
        question: 'Vì sao khoá Định Dạng Xuất thành PNG thường kích hoạt cảnh báo Không Đạt Mục Tiêu ở 50 KB?',
        answer:
          'Vì PNG dùng nén DEFLATE không mất dữ liệu, bỏ qua thanh trượt chất lượng, nên chỉ icon phẳng hoặc ảnh thu nhỏ tí hon mới nén dưới 50 KB dạng PNG. Để Định Dạng ở Gốc kèm Tự Động Chuyển được bật — hoặc chuyển thẳng sang JPG — để ảnh chụp đạt 50 KB gọn gàng.',
      },
      {
        question: 'Chuyện gì xảy ra nếu tôi tải PNG chữ ký trong suốt lên và chuyển sang JPG để vừa 50 KB?',
        answer:
          'Chọn JPG sẽ hiện bảng chọn màu lót PNG Trong Suốt (mặc định trắng thuần #ffffff). Mọi vùng nền trong suốt được lấp gọn lên nền trắng đặc trước khi mã hoá JPEG để mực đen vẫn sắc nét thay vì hoá đen đặc.',
      },
      {
        question: 'Tôi có thể thả ảnh selfie HEIC 15 MB của iPhone trực tiếp để thu nhỏ xuống dưới 50 KB không?',
        answer:
          'Có. Tệp tối đa 25 MB — gồm ảnh HEIC/HEIF của Apple — được giải mã tự động ngay trên trình duyệt qua WebAssembly và nén dần về 50 KB trong một lần liền mạch.',
      },
      {
        question: 'Bộ tối ưu thử những bước thu nhỏ nào khi kích thước 100% vượt 50 KB?',
        answer:
          'Khi kích thước đầy đủ không đạt 50 KB ở chất lượng chấp nhận được, bộ máy thử các hệ số thu nhỏ dần bắt đầu từ 82% và giảm dần về 10% (tối thiểu 16 px). Ở mỗi bước, nó chạy lại tìm kiếm nhị phân chất lượng và dừng ở kích thước rõ nét lớn nhất dưới 50 KB.',
      },
      {
        question: 'Nén ảnh chân dung nền tối xuống dưới 50 KB có gây dải màu rõ rệt không?',
        answer:
          'Bóng tối mượt ở mục tiêu 50 KB mạnh tay có thể hơi vỡ khối nếu kích thước giữ nguyên quá lớn. Cho phép thu nhỏ kích thước giúp công cụ mã hoá kích thước nhỏ hơn một chút ở chất lượng 70%–85% cao hơn, cho dải màu chuyển mượt hơn so với kích thước khổng lồ ở chất lượng 10%.',
      },
      {
        question: 'Công cụ nén 50 KB có xoá thẻ GPS ẩn khỏi ảnh CMND của tôi không?',
        answer:
          'Có. Vẽ ảnh lên HTML5 Canvas sẽ xoá siêu dữ liệu EXIF như số serial máy ảnh, ảnh thu nhỏ và toạ độ GPS, vừa bảo vệ riêng tư vừa giải phóng thêm kilobyte cho chi tiết ảnh nhìn thấy được.',
      },
      {
        question: 'Công cụ xác định huy hiệu Dưới 50 KB như thế nào?',
        answer:
          'Sau khi mã hoá Blob cuối cùng, công cụ kiểm tra đúng dung lượng byte so với 51.200 byte (50 × 1024). Chỉ tệp đúng bằng hoặc dưới giới hạn byte chính xác đó mới nhận huy hiệu xác nhận xanh lá Dưới 50 KB.',
      },
      {
        question: 'Tôi có thể xử lý cả ảnh chân dung và bản scan chữ ký dưới 50 KB cùng lúc không?',
        answer:
          'Có. Thả nhiều ảnh tối đa 25 MB mỗi ảnh vào hàng đợi, chỉnh tuỳ chọn định dạng của bạn, rồi tải từng tệp riêng lẻ hoặc gói chúng vào compressmypic_50kb.zip.',
      },
      {
        question: 'Nếu cổng thực ra yêu cầu 20 KB hoặc 30 KB thay vì 50 KB thì sao?',
        answer:
          'Bấm liên kết Cần giới hạn KB khác? ngay trong tiêu đề mục tiêu để nhảy thẳng tới công cụ Nén Ảnh Theo Dung Lượng Mục Tiêu, nơi bạn có thể nhập bất kỳ giới hạn tuỳ chỉnh nào như 20 KB hay 30 KB.',
      },
      {
        question: 'Dung lượng tệp tối đa tôi có thể thả vào công cụ nén 50 KB là bao nhiêu?',
        answer:
          'Tệp đầu vào riêng lẻ tối đa 25 MB được hỗ trợ ở định dạng JPG, PNG, WebP, HEIC/HEIF, GIF, BMP và SVG. Ảnh GIF động đầu vào sẽ xuất một khung tĩnh đã tối ưu dưới 50 KB.',
      },
      {
        question: 'Vì sao công cụ nhắm ngay dưới 50 KB một chút (khoảng 48–49,9 KB) thay vì dừng ở 25 KB?',
        answer:
          'Tìm kiếm nhị phân của nó tối ưu tới 7 lần lặp để chạm trong khoảng 96%–100% của giới hạn 50 KB bất cứ khi nào có thể. Nhờ vậy độ sắc nét hình ảnh được tối đa hoá bằng cách dùng gần như mọi kilobyte còn trống dưới giới hạn.',
      },
      {
        question: 'Tên tệp đã tải về có được đánh dấu rõ để tôi không nhầm với tệp gốc độ phân giải cao không?',
        answer:
          'Có. Mọi tệp xuất tự động thêm _50kb trước phần mở rộng — ví dụ portrait_50kb.jpg — để tệp gốc của bạn an toàn, không bị chạm tới trên thiết bị.',
      },
      {
        question: 'Tôi có thể xem trước độ sắc nét trên điện thoại trước khi tải lên cổng biểu mẫu không?',
        answer:
          'Có. Toàn bộ giao diện, gồm trình xem So Sánh tương tác, hoạt động mượt trên Safari di động và Chrome Android, giúp nộp biểu mẫu khi đang di chuyển nhanh và đáng tin cậy.',
      },
    ],
    relatedSlugs: [
      '/compress-image-to-100kb',
      '/compress-image-to-200kb',
      '/target-file-size-compressor',
      '/image-resizer',
    ],
  },
  {
    slug: '/compress-image-to-100kb',
    name: 'Nén Ảnh Xuống 100KB',
    shortDescription: 'Giảm dung lượng ảnh xuống dưới 100KB gọn gàng mà không mờ.',
    category: 'compress',
    seoTitle: 'Nén Ảnh Xuống 100KB Online Miễn Phí – Công Cụ Chuẩn Kích Thước',
    seoDescription:
      'Nén mọi ảnh xuống đúng 100KB online, miễn phí, ngay trên trình duyệt — cho cổng việc làm, CV và trang web. Xuất ZIP hàng loạt tức thì, không cần đăng ký, không tải lên.',
    h1: 'Nén Ảnh Xuống 100KB Online',
    subtitle:
      'Chạm đúng điểm ngọt của web và cổng nộp hồ sơ khi bạn nén ảnh xuống 100KB mà không hy sinh độ sắc nét. Dành cho ứng viên đính kèm ảnh chân dung hồ sơ, blogger chuẩn bị ảnh bìa bài viết nhanh và cổng nhân sự có giới hạn đính kèm chặt, công cụ thử cài đặt chất lượng và thu nhỏ tuỳ chọn ngay trong trình duyệt với đầu vào tối đa 25 MB.',
    howToSteps: [
      {
        title: 'Thêm ảnh hoặc đồ hoạ bài viết',
        description:
          'Kéo thả một hoặc nhiều ảnh JPG, PNG, WebP hoặc HEIC tối đa 25 MB mỗi ảnh vào khu vực làm việc.',
      },
      {
        title: 'Xác nhận Định Dạng Xuất và hành vi dự phòng',
        description:
          'Giữ Gốc (kèm dự phòng WebP/JPG tự động cho PNG quá khổ) hoặc chỉ định rõ JPG hay WebP để đầu ra nhất quán.',
      },
      {
        title: 'Chọn có cho thu nhỏ pixel hay không',
        description:
          'Để bật thu nhỏ kích thước thông minh cho kết quả sắc nét 800px–1400px, hoặc tắt để giữ 100% chiều rộng và chiều cao pixel gốc.',
      },
      {
        title: 'So sánh độ sắc nét với bản gốc',
        description:
          'Xem phần trăm tiết kiệm và huy hiệu KB xuất chính xác, rồi mở So Sánh trên bất kỳ thẻ nào để kiểm tra độ sắc cạnh cạnh nhau.',
      },
      {
        title: 'Tải từng tệp riêng lẻ hoặc cả loạt ZIP',
        description:
          'Lưu ngay từng tệp <tên>_100kb riêng lẻ hoặc bấm Tải Tất Cả (ZIP) để tải compressmypic_100kb.zip trong một cú nhấp.',
      },
    ],
    features: [
      {
        title: 'Chất lượng tối đa dưới 100KB',
        description:
          'Thay vì dùng thanh trượt chất lượng thấp tuỳ ý, tìm kiếm nhị phân khoá đúng chất lượng cao nhất dưới 100KB.',
      },
      {
        title: 'Giữ độ phân giải khi có thể',
        description:
          'Giữ 100% chiều rộng và chiều cao pixel gốc bất cứ khi nào chỉ chỉnh chất lượng đã đủ đạt giới hạn 100KB.',
      },
      {
        title: 'Cảnh báo giới hạn minh bạch',
        description:
          'Thông báo rõ ràng nếu PNG bị khoá hay cài đặt 4K không thu nhỏ ngăn việc đạt 100KB.',
      },
      {
        title: 'Riêng tư 100% ngay trên máy',
        description: 'Không tải lên, không watermark và không cần đăng ký.',
      },
    ],
    faqs: [
      {
        question: 'Vì sao 100 KB được xem là điểm ngọt cho CV, cổng việc làm và website?',
        answer:
          'Ở khoảng 100 KB, ảnh điển hình 1000 px đến 1400 px tải nhanh ngay cả trên mạng di động 3G mà vẫn giữ chi tiết khuôn mặt tinh tế, chữ sắc nét và độ sâu màu tự nhiên. Hầu hết hệ thống tuyển dụng và công cụ tạo CV PDF đều chấp nhận thoải mái tài nguyên dưới 100 KB mà không cắt hay chặn.',
      },
      {
        question: 'Banner web Full HD 1920×1080 có giữ nguyên kích thước khi thu nhỏ xuống 100 KB không?',
        answer:
          'Có, trong nhiều trường hợp — đặc biệt ảnh sản phẩm sạch, minh hoạ UI hay nền mờ nhẹ nén bằng WebP hoặc JPG. Nếu cảnh phong cảnh bận rộn vẫn vượt 100 KB ở chất lượng 35%, thu nhỏ tuỳ chọn sẽ hạ dần chiều rộng (ví dụ 82% hoặc 68%) để bảo vệ độ sắc nét.',
      },
      {
        question: 'Tìm kiếm nhị phân chất lượng tự động giữ tệp 100 KB của tôi sắc nét nhất như thế nào?',
        answer:
          'Thay vì đoán mức nén thấp cố định như 40%, bộ máy thử giới hạn chất lượng trên và dưới qua tối đa 7 bước nhị phân. Nó dừng ngay trong khoảng 96%–100% dưới 102.400 byte, tối đa hoá độ trung thực pixel cho đúng ngân sách dung lượng.',
      },
      {
        question: 'Khi nào nên bỏ chọn Tự động chuyển PNG lớn khi nhắm 100 KB?',
        answer:
          'Nếu infographic phẳng, icon UI hay sơ đồ hai màu phải giữ đúng PNG không mất dữ liệu và vốn đã vừa dưới 100 KB gọn gàng, để Gốc hoặc chọn PNG đều tốt. Tuy nhiên, với ảnh PNG chụp ảnh, giữ Tự Động Chuyển bật sẽ đổi ảnh không trong suốt sang JPG hoặc ảnh trong suốt sang WebP để bạn giữ pixel sắc nét dưới 100 KB.',
      },
      {
        question: 'Logo PNG trong suốt có mất độ trong suốt khi tự động chuyển đổi dưới 100 KB không?',
        answer:
          'Không. Trước khi chuyển dự phòng từ PNG quá khổ ở chế độ Gốc, công cụ phát hiện độ trong suốt alpha trên tệp và tự động chọn WebP (giữ nguyên độ trong suốt) thay vì JPG bất cứ khi nào có pixel alpha.',
      },
      {
        question: 'Nén xuống 100 KB ảnh hưởng Core Web Vitals và trọng lượng trang ra sao?',
        answer:
          'Cắt ảnh hero 2 MB hay tiêu đề bài viết 800 KB xuống 95 KB sẽ giảm mạnh trọng lượng trang mà không làm xấu thẻ bố cục. Ảnh nhẹ hơn cải thiện trực tiếp Largest Contentful Paint (LCP) cho cả khách trên điện thoại và máy tính.',
      },
      {
        question: 'Tôi có thể thu nhỏ đồ hoạ bản tin email xuống dưới 100 KB để hiển thị nhanh hơn trong hộp thư không?',
        answer:
          'Có. Chọn đầu ra JPG giúp hỗ trợ rộng rãi trên Outlook, Apple Mail và Gmail, đồng thời đảm bảo bản tin nhiều ảnh vẫn nhanh và nhẹ dưới ngưỡng trọng lượng của bộ lọc spam.',
      },
      {
        question: 'Chuyện gì xảy ra khi tệp tôi tải lên vốn đã 65 KB?',
        answer:
          'Công cụ ghi nhận tệp của bạn vốn đã dưới 100 KB và tạo bản xuất sạch ở độ phân giải đầy đủ. Nếu việc mã hoá lại trên HTML5 Canvas vô tình tạo tệp hơi lớn hơn 65 KB, thông báo đỏ cho phép bạn bấm Giữ Nguyên Bản ngay lập tức.',
      },
      {
        question: 'Cửa sổ So Sánh giúp ích gì khi siết ảnh xuống 100 KB?',
        answer:
          'Xem rèm trước–sau tách đôi giúp bạn xác minh sợi tóc mảnh, vân vải hay chữ nhỏ trong ảnh chụp màn hình có giữ sạch sau khi nén không. Nếu hiện vết mờ ở độ phân giải bị khoá, chuyển từ JPG sang WebP thường khắc phục trong cùng ngân sách 100 KB.',
      },
      {
        question: 'Công cụ giảm 100 KB này có xoá thẻ EXIF của máy ảnh tự động không?',
        answer:
          'Có. Vẽ lên HTML5 Canvas sẽ xoá ảnh thu nhỏ nhúng của máy ảnh, khối XMP của Lightroom và toạ độ GPS, thường tiết kiệm riêng 20 KB–60 KB trước khi nén hình ảnh bắt đầu.',
      },
      {
        question: 'Tôi có thể kéo cả thư mục ảnh bìa blog để nén tất cả xuống 100 KB không?',
        answer:
          'Có. Tải nhiều tệp tối đa 25 MB mỗi tệp trong một hàng đợi, chờ vài giây khi mỗi ảnh chạy tuần tự trong trình duyệt, rồi lưu mọi thứ trong compressmypic_100kb.zip.',
      },
      {
        question: 'Nếu cổng CV cho phép JPG tối đa 100 KB nhưng từ chối tệp WebP thì sao?',
        answer:
          'Chọn JPG trong Định Dạng Xuất thay vì để Gốc trước hoặc sau khi tải lên. Công cụ sẽ mã hoá lại mọi ảnh đúng chuẩn .jpg dưới 100 KB và áp màu lót bạn chọn cho vùng trong suốt.',
      },
      {
        question: 'Vì sao ảnh chụp màn hình PNG 3000×2000 của tôi thu nhỏ sạch khi thu về 68% ở 100 KB?',
        answer:
          'Dung lượng tệp PNG không mất dữ liệu liên quan chặt với tổng số pixel và độ hỗn loạn. Thu nhỏ ảnh chụp màn hình lớn vừa phải rồi ghép với WebP hoặc JPG sẽ hạ trọng lượng byte từ vài megabyte xuống dưới 100 KB trong khi chữ vẫn dễ đọc thoải mái.',
      },
      {
        question: 'CV bảo mật, bản xem trước kiến trúc hay mockup NDA có bị tải lên đâu không?',
        answer:
          'Không bao giờ. Mọi bước nén, lần lặp nhị phân và tạo lưu trữ ZIP đều chạy hoàn toàn bằng JavaScript và Canvas ngay trong tab trình duyệt.',
      },
      {
        question: 'Công cụ nén 100 KB chấp nhận loại tệp nào?',
        answer:
          'Bạn có thể thả tệp JPG, PNG, WebP, HEIC/HEIF của iPhone, GIF, BMP và SVG tối đa 25 MB mỗi tệp. Lưu ý ảnh GIF động đầu vào sẽ nén khung mở đầu thành đầu ra tĩnh.',
      },
      {
        question: 'Tôi có thể chọn mục tiêu tuỳ chỉnh như 80 KB hoặc 120 KB từ trang này không?',
        answer:
          'Có — chạm liên kết Cần giới hạn KB khác? trong bảng kích thước mục tiêu để nhảy thẳng tới công cụ Nén Ảnh Theo Dung Lượng Mục Tiêu linh hoạt với bất kỳ đầu vào KB hay MB tuỳ chỉnh nào.',
      },
      {
        question: 'Vì sao mục tiêu PNG bị khoá vẫn thất bại ở 100 KB dù đã thu nhỏ?',
        answer:
          'Khi PNG bị ép rõ ràng và thu nhỏ bị tắt, ảnh chụp nhiễu giữ hàng triệu màu riêng không thể nhét vào 100 KB mà không mất dữ liệu. Bật lại thu nhỏ kích thước hoặc chuyển sang WebP sẽ khắc phục ngay.',
      },
      {
        question: 'Đổi cài đặt sau khi loạt ảnh hoàn thành có tự động nén lại tệp của tôi không?',
        answer:
          'Có. Bật/tắt Định Dạng Xuất, Thu Nhỏ Kích Thước, tự động chuyển PNG hay màu lót JPG sẽ tự động xử lý lại các mục trong hàng đợi về 100 KB để bạn so sánh kết quả dễ dàng.',
      },
      {
        question: 'Windows, macOS và iOS có mở được tệp _100kb.jpg và _100kb.webp đã tải về không?',
        answer:
          'Có. JPEG chuẩn mở được ở mọi nơi, và WebP hiện đại mở gốc trong mọi trình duyệt máy tính hiện tại, macOS Preview, Windows Photos, Android và iOS.',
      },
      {
        question: 'Có hạn mức hằng ngày hay giới hạn số tệp nào trên công cụ 100 KB không?',
        answer:
          'Không. Nén bao nhiêu ảnh xuống dưới 100 KB tuỳ bộ nhớ trình duyệt của bạn xử lý được, không watermark, không nhắc tạo tài khoản hay tường trả phí.',
      },
    ],
    relatedSlugs: [
      '/compress-image-to-50kb',
      '/compress-image-to-200kb',
      '/web-image-optimizer',
      '/target-file-size-compressor',
    ],
  },
  {
    slug: '/compress-image-to-200kb',
    name: 'Nén Ảnh Xuống 200KB',
    shortDescription: 'Tối ưu ảnh xuống dưới 200KB cho blog, tải lên CMS & cổng nộp hồ sơ.',
    category: 'compress',
    seoTitle: 'Nén Ảnh Xuống 200KB Online – Chuẩn WordPress & Shop',
    seoDescription:
      'Nén ảnh xuống 200KB online miễn phí cho WordPress, Shopify và banner blog. Giữ chi tiết sắc nét ngay trên máy bằng tìm kiếm chất lượng nhị phân và xuất ZIP.',
    h1: 'Nén Ảnh Xuống 200KB Online',
    subtitle:
      'Đưa mọi ảnh sản phẩm và ảnh hero blog xuống dưới 200KB — dung lượng mà các site WordPress và Shopify chuẩn hoá — mà không bị nặng. Dành cho biên tập viên WordPress, chủ shop Shopify và marketer số, công cụ ưu tiên giữ 100% kích thước gốc trước và chạy hoàn toàn ngay trên máy với tệp tối đa 25 MB, không truyền qua máy chủ.',
    howToSteps: [
      {
        title: 'Tải ảnh thư viện WordPress hoặc ảnh sản phẩm Shopify',
        description:
          'Thả từng tệp hoặc cả loạt ảnh JPG, PNG, WebP hoặc HEIC tối đa 25 MB mỗi ảnh — ảnh tải lên thư viện WordPress hay ảnh sản phẩm Shopify của bạn — vào khu vực làm việc.',
      },
      {
        title: 'Chọn đầu ra WebP, JPG, Gốc hoặc PNG',
        description:
          'Chọn WebP cho tốc độ WordPress hiện đại, JPG cho khả năng tương thích Shopify và sàn thương mại phổ biến, hoặc Gốc để chỉ chuyển đổi tự động PNG nặng.',
      },
      {
        title: 'Bật/tắt giữ nguyên kích thước hay thu nhỏ dự phòng',
        description:
          'Giữ thu nhỏ thông minh bật cho ảnh máy ảnh 24 MP, hoặc tắt khi mẫu sản phẩm yêu cầu đúng kích thước pixel gốc.',
      },
      {
        title: 'Kiểm tra mức tiết kiệm và chi tiết cạnh nhau',
        description:
          'Xác minh chỉ báo xanh lá Dưới 200 KB và kéo thanh trượt So Sánh qua nhãn, vân vải hay cạnh UI mảnh trước khi đưa tệp vào WordPress hoặc Shopify.',
      },
      {
        title: 'Lưu từng tài nguyên riêng lẻ hoặc Tải Tất Cả (ZIP)',
        description:
          'Tải trực tiếp từng ảnh <tên>_200kb riêng lẻ, hoặc gói danh mục Shopify hay loạt media WordPress vào compressmypic_200kb.zip.',
      },
    ],
    features: [
      {
        title: 'Sẵn sàng cho CMS & sàn thương mại',
        description: 'Phù hợp cho Shopify, WooCommerce, WordPress và tải lên Google Business.',
      },
      {
        title: 'Thu nhỏ dự phòng thông minh',
        description:
          'Nếu ảnh máy ảnh 24MP không vừa dưới 200KB ở kích thước đầy đủ, thu nhỏ kích thước sẽ kích hoạt gọn gàng.',
      },
      {
        title: 'Xác minh KB chính xác',
        description: 'Hiển thị byte xuất đã xác minh kèm byte gốc và % giảm.',
      },
      {
        title: 'Không tải lên máy chủ',
        description: 'Xử lý HTML5 Canvas nhanh ngay trên máy tính hoặc điện thoại của bạn.',
      },
    ],
    faqs: [
      {
        question: 'Vì sao agency WordPress và cửa hàng Shopify chuẩn hoá ảnh sản phẩm quanh 200 KB?',
        answer:
          'Giới hạn 200 KB để lại đủ bitrate cho đường may sắc nét, độ bóng kim loại và nhãn sản phẩm đọc được, đồng thời giữ lưới bộ sưu tập nhanh trên điện thoại của người mua. Ở dưới 200 KB cũng đáp ứng giới hạn nghiêm ngặt của CMS và thư mục như Google Business Profile hay quy tắc media của WooCommerce.',
      },
      {
        question: 'Ảnh máy ảnh 12 megapixel hay 24 megapixel có đạt 200 KB gọn gàng không?',
        answer:
          'Có. Nếu kích thước đầy đủ 4000×3000 px vượt 200 KB ngay cả ở chất lượng 35%, thu nhỏ kích thước thông minh sẽ hạ dần theo tỉ lệ — thường dừng quanh 2200 px hoặc 1800 px rộng ở chất lượng sắc nét 75%–85%.',
      },
      {
        question: 'Khi nào nên khoá kích thước bằng cách bỏ chọn Cho Phép Thu Nhỏ Kích Thước Thông Minh ở 200 KB?',
        answer:
          'Bỏ chọn thu nhỏ bất cứ khi nào sàn thương mại hay cổng in ấn yêu cầu đúng chiều rộng pixel (ví dụ ô sản phẩm vuông 1600×1600 px). Bộ tối ưu sẽ hạ chất lượng lossy xuống thấp tới 5% ở kích thước đầy đủ và báo trung thực nếu không thể đạt 200 KB mà không đổi kích thước.',
      },
      {
        question: 'WebP so với JPG ở mục tiêu 200 KB cho ảnh thương mại điện tử ra sao?',
        answer:
          'Trong cùng ngân sách 200 KB, WebP thường cho bóng studio sạch hơn rõ rệt và chữ bao bì nhỏ sắc nét hơn JPG — tương đương hệ số chất lượng cao hơn khoảng 10%–15%. Chỉ chọn JPG khi hệ thống sàn đời cũ vẫn từ chối tệp .webp.',
      },
      {
        question: 'Chuyện gì xảy ra nếu tôi tải ảnh cắt nền PNG studio có nền trong suốt?',
        answer:
          'Khi Định Dạng để Gốc và Tự Động Chuyển bật, PNG trong suốt quá khổ sẽ chuyển gọn sang WebP trong suốt khi PNG riêng không đạt 200 KB gọn gàng. Nếu bạn chọn rõ JPG, vùng trong suốt sẽ hoà lên Màu Lót PNG Trong Suốt bạn chọn.',
      },
      {
        question: 'Vì sao bộ tối ưu ưu tiên giữ 100% độ phân giải trước khi giảm kích thước pixel?',
        answer:
          'Thu nhỏ kích thước sẽ vứt bỏ vĩnh viễn chi tiết lưới pixel, còn chỉnh chất lượng lossy vừa phải giữ cạnh sắc ở chiều rộng đầy đủ. Thử chất lượng 35%–94% ở kích thước đầy đủ trước giúp đồ hoạ hero cho máy tính giữ nguyên kích thước bất cứ khi nào có thể.',
      },
      {
        question: 'Tôi có thể tối ưu hàng loạt cả danh mục theo mùa xuống dưới 200 KB cùng lúc không?',
        answer:
          'Có. Thả hàng chục ảnh sản phẩm tối đa 25 MB mỗi ảnh vào hàng đợi, để công cụ kiểm tra từng ảnh ngay trên máy, rồi lấy mọi tài nguyên đã tối ưu trong compressmypic_200kb.zip.',
      },
      {
        question: 'Chuyển nền trong suốt sang JPG nền trắng có giúp đạt 200 KB cho Amazon hay Etsy không?',
        answer:
          'Có. Nền trắng thuần (#ffffff) nén cực kỳ hiệu quả trong JPEG đồng thời đáp ứng hướng dẫn nền trắng của sàn, giải phóng thêm byte trong 200 KB cho sản phẩm ở giữa.',
      },
      {
        question: 'Giới hạn tải ảnh lên của WordPress là bao nhiêu, và vì sao 200KB là mục tiêu an toàn?',
        answer:
          'Bản thân WordPress không có giới hạn 200KB duy nhất — máy chủ của bạn đặt giới hạn tải lên (thường 2MB đến 64MB) và theme hay plugin thêm quy tắc riêng. Mục tiêu 200KB là chuẩn hiệu năng mà các agency WordPress dùng: ảnh sản phẩm và ảnh hero blog dưới 200KB giữ trang nhanh trên điện thoại và an toàn dưới mọi giới hạn theme, plugin và CDN bạn có thể gặp.',
      },
      {
        question: 'Nguyên mẫu sản phẩm chưa ra mắt hay banner chiến dịch của khách hàng có lưu trên máy chủ ngoài không?',
        answer:
          'Không. Mọi lần giải mã pixel, thu nhỏ và tạo ZIP đều diễn ra riêng tư trong phiên trình duyệt trên máy bạn, an toàn cho lần ra mắt bị cấm tiết lộ và công việc NDA của khách hàng.',
      },
      {
        question: 'Công cụ nén 200 KB có hỗ trợ ảnh HEIC/HEIF của Apple chụp trên iPhone mới không?',
        answer:
          'Có. WebAssembly phía máy khách giải mã trực tiếp tệp HEIC của iPhone trong tab trình duyệt nên bạn không cần chuyển đổi trước.',
      },
      {
        question: 'Vì sao 200 KB thường tốt hơn 50 KB cho infographic chi tiết hay bảng menu?',
        answer:
          'Chữ nhỏ trong menu nhà hàng, mặt bằng bất động sản hay ảnh chụp UI phần mềm sẽ mờ nhanh nếu nhét dưới 50 KB. Mục tiêu 200 KB cho WebP và JPG gấp bốn lần dung lượng để nhãn nhỏ vẫn sắc nét.',
      },
      {
        question: 'Tìm kiếm chất lượng nhị phân thường chạm gần 200 KB đến mức nào?',
        answer:
          'Khi tìm được khoảng chất lượng khả thi ở một tỉ lệ nhất định, tối đa 7 lần lặp tìm kiếm nhị phân nhắm 96% đến 100% của 204.800 byte. Tệp thường dừng trong khoảng 192 KB đến 199 KB để bạn có độ sắc nét tối đa trong giới hạn.',
      },
      {
        question: 'Hồ sơ màu DSLR nhúng và thẻ GPS của máy ảnh có bị gỡ trong quá trình nén 200 KB không?',
        answer:
          'Có. Ghi ảnh qua HTML5 Canvas sẽ xoá khối siêu dữ liệu EXIF và ảnh thu nhỏ xem trước nhúng, cải thiện riêng tư và loại bỏ kilobyte lãng phí trên máy chủ WordPress và CDN.',
      },
      {
        question: 'Ảnh sản phẩm Shopify của tôi nên có kích thước nào ở 200KB?',
        answer:
          'Shopify khuyến nghị ảnh sản phẩm vuông 2048×2048 px. Ảnh studio chi tiết 2048×2048 thường cần WebP ở chất lượng 70%–80%, hoặc hạ xuống khoảng 1800 px rộng, để vừa dưới 200KB mà nhãn và chi tiết vải vẫn nguyên vẹn. Tìm kiếm nhị phân của công cụ tìm chất lượng cao nhất vừa giới hạn, và thanh trượt So Sánh cho bạn xác minh kết quả trước khi tải lên cửa hàng.',
      },
      {
        question: 'Tôi có thể xem trước chi tiết vải hay trang sức trước khi tải tệp 200 KB về không?',
        answer:
          'Có. Bấm So Sánh trên bất kỳ thẻ kết quả đã hoàn thành nào để mở thanh trượt chia đôi tương tác, so sánh pixel gốc chưa nén trực tiếp với đầu ra đã nén.',
      },
      {
        question: 'Ảnh hero blog của tôi nên là 200KB hay 100KB?',
        answer:
          'Dùng 200KB cho ảnh hero blog chi tiết — ảnh rộng, infographic và ảnh có chữ nhỏ cần thêm byte để giữ sắc nét ở chiều rộng đầy đủ. Dùng 100KB cho ảnh thu nhỏ, ảnh đại diện tác giả và ảnh nhỏ trong bài, nơi cùng một ảnh với một nửa ngân sách vẫn trông giống hệt. Nếu ảnh hero là đồ hoạ phẳng đơn giản, 100KB là đủ; nếu là ảnh chụp bận rộn, 200KB là mục tiêu an toàn hơn.',
      },
      {
        question: 'Dung lượng tệp nguồn tối đa chấp nhận cho mỗi ảnh ở đây là bao nhiêu?',
        answer:
          'Mỗi ảnh JPG, PNG, WebP, HEIC, GIF, BMP hoặc SVG đã tải lên có thể tối đa 25 MB. Khoảng trống đó xử lý thoải mái ảnh xuất nặng từ Lightroom hay điện thoại hiện đại mà không cần thu nhỏ trước.',
      },
      {
        question: 'Tên tệp xuất được đặt ra sao để tách khỏi thư mục sản phẩm gốc của tôi?',
        answer:
          'Mọi bản sao đã lưu giữ tên gốc đã làm sạch của bạn và thêm _200kb trước phần mở rộng, tạo tên rõ như sneaker_side_200kb.webp. Bản gốc độ phân giải cao của bạn hoàn toàn không bị chạm tới trên ổ đĩa.',
      },
      {
        question: 'Tôi có thể nhảy sang ngưỡng chính xác khác như 150 KB hoặc 300 KB nếu cổng đổi quy tắc không?',
        answer:
          'Có. Dùng liên kết Cần giới hạn KB khác? ở đầu phần điều khiển để mở công cụ Nén Ảnh Theo Dung Lượng Mục Tiêu tuỳ chỉnh và nhập bất kỳ con số KB hay MB chính xác nào.',
      },
    ],
    relatedSlugs: [
      '/compress-image-to-100kb',
      '/compress-image-to-500kb',
      '/web-image-optimizer',
      '/bulk-image-compressor',
    ],
  },
  {
    slug: '/compress-image-to-500kb',
    name: 'Nén Ảnh Xuống 500KB',
    shortDescription: 'Thu nhỏ ảnh nhiều megabyte xuống dưới 500KB với chất lượng siêu cao.',
    category: 'compress',
    seoTitle: 'Nén Ảnh Xuống 500KB Online – Giảm Ảnh Độ Phân Giải Cao',
    seoDescription:
      'Nén ảnh xuống 500KB online miễn phí mà không mất độ rõ nét độ phân giải cao. Biến tệp JPG, PNG, WebP và HEIC lớn thành tài nguyên portfolio nhanh ngay trên máy.',
    h1: 'Nén Ảnh Xuống 500KB Online',
    subtitle:
      'Biến khung DSLR cồng kềnh 5 MB đến 18 MB, ảnh xuất RAW từ điện thoại và ảnh chụp màn hình độ phân giải cao thành tài nguyên sắc nét khi bạn nén ảnh xuống 500KB ngay trên trình duyệt. Lý tưởng cho nhiếp ảnh gia giao bản xem trước cho khách, founder xây pitch deck nhẹ và agency nộp gallery portfolio, công cụ giữ nguyên kích thước pixel độ phân giải cao bất cứ khi nào có thể với tệp tối đa 25 MB.',
    howToSteps: [
      {
        title: 'Thả tệp máy ảnh hoặc thiết kế độ phân giải đầy đủ',
        description:
          'Tải lên một hoặc nhiều ảnh JPG, PNG, WebP hoặc HEIC tối đa 25 MB mỗi ảnh mà không cần đổi kích thước trước.',
      },
      {
        title: 'Chọn Định Dạng Xuất cho bản giao độ phân giải cao',
        description:
          'Giữ Gốc để xử lý liền mạch, chọn JPG cho deck khách hàng và bản in thử, hoặc chọn WebP cho gallery portfolio siêu sắc nét.',
      },
      {
        title: 'Kiểm tra tuỳ chọn thu nhỏ và dự phòng PNG',
        description:
          'Để bật thu nhỏ kích thước thông minh cho ảnh 40 MP trở lên, hoặc tắt để giữ đúng kích thước 4K+ ở chất lượng đã tối ưu.',
      },
      {
        title: 'Kiểm tra chi tiết cạnh nhau ở chế độ So Sánh',
        description:
          'Kiểm tra từng huy hiệu xác nhận Dưới 500 KB và xem tán lá, kết cấu da hay chữ trong trình xem trước/sau tách đôi.',
      },
      {
        title: 'Tải từng tệp riêng lẻ hoặc gói ZIP',
        description:
          'Lưu ngay từng đầu ra <tên>_500kb hoặc xuất gọn bộ ảnh lớn trong compressmypic_500kb.zip.',
      },
    ],
    features: [
      {
        title: 'Nén 500KB gần như không mất dữ liệu',
        description:
          '500KB cho đủ khoảng trống để giữ ảnh lớn 1920px–4000px trông không khác bản gốc về mặt thị giác.',
      },
      {
        title: 'Giải mã HEIC tự động',
        description: 'Hỗ trợ ảnh HEIC/HEIF của iPhone ngay trên máy qua WebAssembly phía máy khách.',
      },
      {
        title: 'Không cần đoán chất lượng',
        description: 'Không cần trượt phần trăm thủ công nữa — để tìm kiếm nhị phân tối đa hoá chất lượng dưới 500KB.',
      },
      {
        title: 'Riêng tư 100% trên trình duyệt',
        description: 'Không có gì được tải lên máy chủ từ xa.',
      },
    ],
    faqs: [
      {
        question: 'Vì sao 500 KB giữ chất lượng hình ảnh gần như gốc trên ảnh 4K và 12 MP?',
        answer:
          'Nửa megabyte (512.000 byte) cho đủ chỗ cho độ tương phản vi mô tinh tế, hạt phim nhẹ và dải màu chuyển trời mượt trên ảnh đầy đủ 1920 px đến 4000 px. Hầu hết ảnh đạt 500 KB gọn gàng ở chất lượng cao 75%–92% mà không cần thu nhỏ kích thước.',
      },
      {
        question: 'Công cụ này hoạt động tốt ra sao cho Pitch Deck, Keynote và tệp đính kèm slide PowerPoint?',
        answer:
          'Thu nhỏ ảnh chụp màn hình và mockup studio từ PNG 6 MB xuống JPG hoặc WebP dưới 500 KB sẽ cắt mạnh độ cồng kềnh của toàn bộ bài thuyết trình. Deck 30 slide vẫn nhanh khi gửi email và đồng bộ đám mây mà trông sắc nét trên máy chiếu hội nghị.',
      },
      {
        question: 'Tôi có thể giữ 100% độ phân giải gốc trên ảnh DSLR 24 MP khi nén xuống 500 KB không?',
        answer:
          'Bỏ chọn Cho Phép Thu Nhỏ Kích Thước Thông Minh để ép 100% kích thước pixel gốc, cho phép tìm kiếm nhị phân chất lượng xuống đến 5% nếu cần. Với hầu hết ảnh JPEG máy ảnh 6000×4000 px, chất lượng JPG khoảng 40%–65% đã đủ đạt 500 KB mà không thu nhỏ một pixel nào.',
      },
      {
        question: 'Vì sao ảnh chân dung HEIC 15 MB của iPhone vẫn giữ nguyên độ phân giải dưới 500 KB khi xuất JPG hoặc WebP?',
        answer:
          'Ảnh HEIC từ điện thoại hiện đại mang dữ liệu màu sâu và số megapixel cao, nhưng mã hoá lại hiệu quả thành JPG hoặc WebP chất lượng 80%+ quanh 450–495 KB. Hiệu ứng bokeh chân dung và dải màu chuyển da tinh tế vẫn mượt trên toàn bộ khung ảnh.',
      },
      {
        question: 'Chuyện gì xảy ra nếu tôi tải mockup dashboard PNG không mất dữ liệu 10 MB lên?',
        answer:
          'PNG retina toàn màn hình hiếm khi vừa trong 500 KB mà không mất dữ liệu nếu không thu nhỏ pixel mạnh. Để Định Dạng ở Gốc kèm Tự Động Chuyển PNG bật sẽ tự chuyển sang WebP chất lượng cao gần như không mất dữ liệu hoặc JPG sắc nét để chữ UI vẫn đọc được ở kích thước màn hình đầy đủ.',
      },
      {
        question: 'Vì sao 500 KB phổ biến cho bài nộp Behance, Dribbble và portfolio agency?',
        answer:
          'Nền tảng portfolio và cổng RFP của nhà cung cấp thường giới hạn media nghiên cứu trường hợp ở 500 KB mỗi ảnh để trang nhiều dự án luôn nhanh. Nén ngay dưới 500 KB đáp ứng bộ kiểm tra tải lên mà không kích hoạt nén lại khắc nghiệt phía máy chủ.',
      },
      {
        question: 'Công cụ xử lý ra sao nếu một tệp trong loạt của tôi vốn đã 320 KB?',
        answer:
          'Công cụ phát hiện 320 KB vốn đã đáp ứng yêu cầu 500 KB và xử lý một bản sao sạch ở độ phân giải đầy đủ. Nếu mã hoá lại tạo tệp hơi nặng hơn, cảnh báo Đã Tăng sẽ hiện để bạn bấm Giữ Nguyên Bản và giữ tệp gốc 320 KB.',
      },
      {
        question: 'Nhiếp ảnh gia có mất quyền kiểm soát sở hữu trí tuệ hay rò rỉ ảnh chụp của khách ở đây không?',
        answer:
          'Không bao giờ. Dù chuẩn bị bản xem trước đám cưới, ảnh kiến trúc thương mại hay nguyên mẫu chưa ra mắt, mọi ảnh đều giải mã và nén trong tab trình duyệt trên máy bạn mà không truyền qua máy chủ.',
      },
      {
        question: 'Định dạng nào giữ chữ sắc nét hơn và đường vector mỏng ở 500 KB?',
        answer:
          'WebP vượt JPG trên chữ tối trên nền trắng sắc nét, biểu đồ và sơ đồ trong giới hạn 500 KB. Mã hoá khối dự đoán của nó giảm thiểu quầng nhiễu quanh giao diện tương phản cao và sơ đồ.',
      },
      {
        question: 'Tôi có thể làm phẳng PNG sản phẩm trong suốt lên màu than đậm thay vì trắng khi nhắm JPG 500 KB không?',
        answer:
          'Có. Chọn JPG sẽ hiện bộ chọn màu lót PNG Trong Suốt, cho phép nhập trắng, xanh đá đậm hay bất kỳ màu hex thương hiệu tuỳ chỉnh nào để hoà cạnh trong suốt liền mạch.',
      },
      {
        question: 'Nén bằng Canvas có giữ mẫu ống kính máy ảnh, tốc độ màn trập và toạ độ GPS không?',
        answer:
          'Không — HTML5 Canvas tự động xoá siêu dữ liệu EXIF, loại bỏ ảnh thu nhỏ nhúng của máy ảnh và dữ liệu vị trí. Nhờ vậy bản xem trước của khách vẫn riêng tư và mọi kilobyte đều dành cho pixel nhìn thấy được.',
      },
      {
        question: 'Giới hạn byte chính xác nào kích hoạt huy hiệu xác nhận Dưới 500 KB?',
        answer:
          'Công cụ kiểm tra tệp đã mã hoá cuối cùng so với 512.000 byte (500 × 1024). Tệp đúng bằng hoặc dưới 512.000 byte sẽ hiển thị huy hiệu trạng thái xanh lá Dưới 500 KB và dung lượng tiết kiệm chính xác.',
      },
      {
        question: 'Tôi có thể giảm hàng loạt hai mươi ảnh 10 MB xuống 500 KB trong một lần không?',
        answer:
          'Có. Thả cả hai mươi ảnh (tối đa 25 MB mỗi tệp) vào hàng đợi, để trình duyệt duyệt từng ảnh tuần tự, rồi xuất mọi thứ cùng nhau trong compressmypic_500kb.zip.',
      },
      {
        question: 'Vì sao PNG không mất dữ liệu bị ép với thu nhỏ tắt lại hiện Không Đạt Mục Tiêu ở 500 KB?',
        answer:
          'Nén PNG không mất dữ liệu bỏ qua thanh trượt chất lượng, nghĩa là cảnh độ phân giải cao phức tạp vừa khoá định dạng PNG vừa khoá kích thước đầy đủ không thể phá dưới mức sàn DEFLATE thô. Bật thu nhỏ kích thước hoặc chọn WebP/JPG để đạt 500 KB gọn gàng.',
      },
      {
        question: 'Tôi có thể phóng to và kéo, hoặc so sánh gốc với 500 KB cạnh nhau trước khi lưu không?',
        answer:
          'Có. Bấm So Sánh trên bất kỳ thẻ đã hoàn thành nào để mở rèm chia đôi trước/sau toàn chiều rộng, giúp bạn kiểm tra mắt, sợi tóc hay nhãn nhỏ trực tiếp với tệp gốc.',
      },
      {
        question: 'Nếu ảnh cần thu nhỏ kích thước nhẹ để đạt 500 KB, mức đổi kích thước có mạnh không?',
        answer:
          'Bộ thu nhỏ bắt đầu ở 82% kích thước gốc trước khi thử các bước dốc hơn. Vì 500 KB khá rộng rãi, ảnh xuất studio 50 MP khổng lồ thường đạt mục tiêu gọn gàng ngay ở bước 82% hoặc 68% mà vẫn giữ độ sắc nét in ấn độ phân giải cao.',
      },
      {
        question: 'Công cụ có hỗ trợ bitmap BMP đời cũ hay sơ đồ SVG tối đa 25 MB không?',
        answer:
          'Có. Lưu trữ BMP chưa nén và minh hoạ vector SVG tối đa 25 MB tải thẳng lên Canvas và xuất gọn dưới 500 KB ở định dạng raster bạn chọn.',
      },
      {
        question: 'Tên tệp thay đổi ra sao khi tải bản sao nén 500 KB về?',
        answer:
          'Mỗi ảnh đã xử lý tự động thêm _500kb trước phần mở rộng, tạo tên rõ như architectural_proof_500kb.jpg. Giữ thẻ trong tên tệp đã xuất đảm bảo bản giao đã nén không bao giờ ghi đè bản gốc.',
      },
      {
        question: 'Tôi nên làm gì nếu cổng sàn đặt giới hạn 1 MB hoặc 250 KB thay vào đó?',
        answer:
          'Bấm phím tắt Cần giới hạn KB khác? phía trên nút định dạng để mở công cụ Nén Ảnh Theo Dung Lượng Mục Tiêu tuỳ chỉnh và nhập bất kỳ ngưỡng KB hay MB tuỳ chỉnh nào.',
      },
      {
        question: 'Tôi có thể nén tài nguyên 500 KB trực tiếp từ iPad hoặc máy tính bảng Android không?',
        answer:
          'Có. Điều khiển định dạng thân thiện với cảm ứng, thanh trượt so sánh và xuất ZIP hoạt động gọn gàng trong trình duyệt máy tính bảng và điện thoại hiện đại mà không cần phần mềm máy tính.',
      },
    ],
    relatedSlugs: [
      '/compress-image-to-200kb',
      '/target-file-size-compressor',
      '/bulk-image-compressor',
      '/',
    ],
  },
  {
    slug: '/bulk-image-compressor',
    name: 'Nén Ảnh Hàng Loạt',
    shortDescription: 'Nén hàng loạt hàng chục ảnh cùng lúc và xuất một file ZIP duy nhất.',
    category: 'compress',
    seoTitle: 'Nén Ảnh Hàng Loạt Online Miễn Phí – Thu Nhỏ & ZIP',
    seoDescription:
      'Thu nhỏ hàng chục tệp với công cụ nén ảnh hàng loạt ngay trên trình duyệt. Áp dụng hồ sơ Web Nhanh, Email hoặc Độ Trung Thực Cao, theo dõi MB tiết kiệm được và tải một ZIP.',
    h1: 'Nén Ảnh Hàng Loạt Miễn Phí',
    subtitle:
      'Thu nhỏ cả thư mục ảnh sản phẩm, bản sao lưu camera roll và tài nguyên website cùng lúc bằng công cụ nén ảnh hàng loạt miễn phí ngay trong trình duyệt. Dành cho đội thương mại điện tử, nhiếp ảnh gia và lập trình viên xử lý loạt lớn, công cụ kết hợp Hồ Sơ Lô Nhanh một cú nhấp và thanh trượt chất lượng tuỳ chỉnh với theo dõi tiến độ trực tiếp, so sánh trực quan từng tệp và tải một ZIP duy nhất tức thì.',
    howToSteps: [
      {
        title: 'Thả toàn bộ loạt ảnh của bạn',
        description:
          'Chọn hoặc kéo nhiều ảnh JPG, PNG, WebP hoặc HEIC tối đa 25 MB mỗi ảnh vào vùng thả hàng loạt (có thể thêm nữa bất cứ lúc nào).',
      },
      {
        title: 'Bấm Hồ Sơ Lô Nhanh hoặc tuỳ chỉnh cài đặt',
        description:
          'Chọn Web Nhanh (WebP 75%), Email / Chia Sẻ (JPG 65%) hoặc Độ Trung Thực Cao (85%), hoặc chỉnh thanh trượt chất lượng, định dạng xuất và màu lót.',
      },
      {
        title: 'Theo dõi tiến độ nén hàng loạt trực tiếp',
        description:
          'Xem thanh tiến độ trực tiếp từng tệp hoàn thành và xem biểu ngữ tóm tắt hiển thị tổng số tệp, MB tiết kiệm được và phần trăm giảm tổng thể.',
      },
      {
        title: 'Kiểm tra từng thẻ và chất lượng trước/sau',
        description:
          'Mở cửa sổ So Sánh trên tệp mẫu, bấm Giữ Nguyên Bản nếu tài nguyên vốn đã nhỏ lại tăng lên, hoặc chạy lại từng tệp với cài đặt đã chỉnh.',
      },
      {
        title: 'Chỉnh và Nén Lại Tất Cả nếu cần',
        description:
          'Đổi hồ sơ, phần trăm chất lượng hoặc định dạng đích bất cứ lúc nào và xử lý lại toàn bộ hàng đợi trong một cú nhấp mà không cần tải lại.',
      },
      {
        title: 'Tải từng tệp riêng lẻ hoặc Tải Tất Cả (ZIP)',
        description:
          'Lưu từng ảnh đã tối ưu trực tiếp từ thẻ của nó hoặc bấm Tải Tất Cả (ZIP) để tải bulk_compressed_compressmypic.zip.',
      },
    ],
    features: [
      {
        title: 'Tiến độ hàng loạt & tổng tiết kiệm',
        description:
          'Hiển thị tiến độ trực tiếp từng tệp cùng tổng MB và phần trăm tiết kiệm trên toàn bộ loạt.',
      },
      {
        title: 'Hồ sơ lô nhanh một cú nhấp',
        description: 'Áp dụng ngay mẫu WebP, Email/JPG hoặc Độ Trung Thực Cao cho mọi tệp.',
      },
      {
        title: 'Cửa sổ so sánh từng tệp',
        description: 'Kiểm tra bất kỳ ảnh nén riêng lẻ nào với bản gốc trước khi tải về.',
      },
      {
        title: 'Không giới hạn loạt',
        description: 'Nén bao nhiêu ảnh tuỳ bộ nhớ thiết bị cho phép, không tầng trả phí hay hàng đợi máy chủ.',
      },
    ],
    faqs: [
      {
        question: 'Ba Hồ Sơ Lô Nhanh thay đổi gì trên các ảnh trong hàng đợi?',
        answer:
          'Web Nhanh chuyển Định Dạng Xuất sang WebP ở chất lượng 75% cho website nhẹ, Email / Chia Sẻ chuyển loạt ảnh sang JPG 65% cho tệp đính kèm nhỏ hơn, và Độ Trung Thực Cao giữ định dạng gốc ở chất lượng 85%. Bấm bất kỳ hồ sơ nào cũng tự cập nhật cài đặt và nén lại các tệp đã tải.',
      },
      {
        question: 'Tôi có thể nén ảnh hàng loạt trên laptop hay điện thoại mà không cần kết nối tải lên đang hoạt động không?',
        answer:
          'Khi trang công cụ tải xong, mọi bước nén hàng loạt, giải mã và tạo ZIP đều diễn ra ngay trên trình duyệt bằng HTML5 Canvas và WebAssembly. Ảnh của bạn không bao giờ vào hàng đợi xử lý từ xa hay rời khỏi thiết bị.',
      },
      {
        question: 'Báo cáo tóm tắt tổng hợp của loạt ảnh tính tổng tiết kiệm ra sao?',
        answer:
          'Khi tệp hoàn thành xử lý, thanh tóm tắt cộng tổng dung lượng byte gốc trên mọi mục so với kết quả đã nén, hiển thị tổng megabyte tiết kiệm được và phần trăm giảm tổng thể. Nếu bất kỳ tệp nào cuối cùng lại lớn hơn, bạn có thể bấm Giữ Nguyên Bản trên thẻ đó trước khi xuất ZIP.',
      },
      {
        question: 'Chuyện gì xảy ra khi tôi trộn ảnh chụp màn hình PNG, HEIC của iPhone và ảnh JPG trong một loạt?',
        answer:
          'Khi Định Dạng Xuất đặt thành Gốc, mỗi ảnh mã hoá thành định dạng web tương ứng (giải mã HEIC thành JPG/PNG gọn gàng qua WebAssembly). Ngoài ra, chọn WebP hoặc JPG sẽ thống nhất toàn bộ thư mục hỗn hợp thành một phần mở rộng xuất duy nhất.',
      },
      {
        question: 'Dung lượng tối đa cho phép mỗi tệp trong công cụ Nén Ảnh Hàng Loạt là bao nhiêu?',
        answer:
          'Tệp riêng lẻ tối đa 25 MB được hỗ trợ trên đầu vào JPG, PNG, WebP, HEIC/HEIF, GIF, BMP và SVG. Không có giới hạn số lượng cố định — chỉ phụ thuộc bộ nhớ trình duyệt sẵn có trên thiết bị của bạn.',
      },
      {
        question: 'Vì sao công cụ xử lý loạt ảnh với thanh tiến độ trực tiếp thay vì làm treo tab?',
        answer:
          'Tệp chạy theo lượt trình duyệt có kiểm soát kèm cập nhật tiến độ (X / Y) hiển thị theo thời gian thực. Nhờ vậy trang vẫn phản hồi để bạn theo dõi rõ quá trình hoàn thành ngay cả với loạt 30 hay 50 ảnh độ phân giải cao.',
      },
      {
        question: 'Tệp ZIP đã xuất được đặt tên gì khi tôi bấm Tải Tất Cả (ZIP)?',
        answer:
          'Bấm Tải Tất Cả (ZIP) sẽ đóng gói gọn mọi đầu ra đã hoàn thành trong bulk_compressed_compressmypic.zip. Toàn bộ lưu trữ ZIP được tạo trực tiếp trong bộ nhớ trình duyệt mà không qua máy chủ lưu trữ đám mây.',
      },
      {
        question: 'Tôi có thể thêm ảnh vào hàng đợi sau khi loạt đầu tiên đã nén xong không?',
        answer:
          'Có. Thả thêm ảnh sẽ thêm gọn vào danh sách loạt hiện tại để bạn có thể gói tệp cũ và tệp mới thả cùng nhau vào một ZIP cuối cùng.',
      },
      {
        question: 'Hồ sơ Cân Bằng, Tệp Nhỏ Hơn và Chất Lượng Cao trong Điều Khiển Nén khác nhau ra sao?',
        answer:
          'Hồ Sơ Lô Nhanh cấu hình phím tắt định dạng cộng chất lượng cho mục tiêu phổ biến như tốc độ web hay tệp đính kèm email. Trong khi đó, viên Cân Bằng, Tệp Nhỏ Hơn, Chất Lượng Cao và thanh trượt chất lượng 10%–100% trong Điều Khiển Nén cho bạn chỉnh chính xác độ mạnh lossy trước khi bấm Nén Lại Tất Cả.',
      },
      {
        question: 'Nếu tôi chuyển icon PNG trong suốt sang JPG hàng loạt, nền của chúng được tô màu ra sao?',
        answer:
          'Bất cứ khi nào Định Dạng Xuất là JPG (kể cả qua hồ sơ Email / Chia Sẻ), bộ chọn Màu Nền Lót sẽ tự xuất hiện. Nó lấp kênh alpha trong suốt gọn lên trắng thuần (#ffffff) hoặc bất kỳ màu hex tuỳ chỉnh nào bạn chọn để icon không bao giờ hoá đen.',
      },
      {
        question: 'Công cụ Nén Ảnh Hàng Loạt có đổi kích thước pixel hay giữ nguyên chiều rộng và chiều cao gốc?',
        answer:
          'Công cụ Nén Ảnh Hàng Loạt giữ mọi tệp ở 100% chiều rộng và chiều cao pixel gốc trong khi giảm dung lượng byte bằng mã hoá chất lượng. Nếu bạn cũng cần thu nhỏ kích thước trên hàng chục ảnh, hãy ghép với công cụ Đổi Kích Thước Ảnh Hàng Loạt.',
      },
      {
        question: 'Vì sao một PNG đã nén trong loạt của tôi hiện cảnh báo Mã hoá lại làm tăng dung lượng?',
        answer:
          'Tệp PNG được xuất bởi công cụ dùng lượng tử hoá bảng màu mạnh tay có thể phình nhẹ khi lưu lại thành PNG không mất dữ liệu 24-bit đầy đủ trên HTML5 Canvas. Bấm Giữ Nguyên Bản trên thẻ đó sẽ giữ bản gốc nhỏ hơn trong ZIP loạt của bạn, hoặc chuyển định dạng sang WebP/JPG để thu nhỏ thêm.',
      },
      {
        question: 'Tôi có thể nén lại chỉ một ảnh khó chịu thay vì chạy lại toàn bộ thư mục không?',
        answer:
          'Có. Mỗi thẻ kết quả đã hoàn thành có nút Nén Lại và Xoá riêng cùng với So Sánh và Tải Xuống để bạn chỉnh hoặc loại bỏ các trường hợp ngoại lệ một cách gọn gàng.',
      },
      {
        question: 'Nén hàng loạt có tự động xoá toạ độ GPS và thẻ EXIF của máy ảnh khỏi album du lịch không?',
        answer:
          'Có. Vì mỗi ảnh được vẽ lên HTML5 Canvas trong quá trình nén, thẻ EXIF nhúng, số serial máy ảnh và vị trí GPS được xoá sạch khỏi mọi tệp trong ZIP.',
      },
      {
        question: 'Khi nào nên chọn Nén Ảnh Hàng Loạt thay vì Nén Theo Dung Lượng Mục Tiêu hay Tối Ưu Ảnh Cho Website?',
        answer:
          'Dùng Nén Ảnh Hàng Loạt khi bạn muốn tiết kiệm nhanh, đồng đều theo chất lượng ở kích thước pixel đầy đủ trên hàng chục ảnh. Chọn Nén Theo Dung Lượng Mục Tiêu khi bạn cần mọi tệp dưới giới hạn KB nghiêm ngặt, hoặc Tối Ưu Ảnh Cho Website khi cần giới hạn pixel web mẫu sẵn cộng thẻ HTML responsive.',
      },
      {
        question: 'Tôi có thể kiểm tra chất lượng hình ảnh trên từng mục trong loạt trước khi tải toàn bộ ZIP không?',
        answer:
          'Có. Bấm So Sánh trên bất kỳ thẻ nào để mở thanh trượt chia đôi cạnh nhau, so sánh bản gốc và bản đã nén ở chi tiết đầy đủ.',
      },
      {
        question: 'Điểm bắt đầu chất lượng mặc định 70% hoạt động ra sao trên thư viện ảnh thông thường?',
        answer:
          'Chất lượng lossy 70% thường mang lại mức giảm byte đáng kể 50%–75% trên JPEG độ phân giải cao mà vẫn sạch về mặt thị giác trên màn hình web và email chia sẻ thông thường. Tăng lên 85% trong Độ Trung Thực Cao cho công việc portfolio quan trọng.',
      },
      {
        question: 'Chuyện gì xảy ra nếu tôi tải thư mục 100 ảnh khổng lồ lên điện thoại có RAM hạn chế?',
        answer:
          'Vì bộ đệm giải mã và Canvas nằm trong bộ nhớ thiết bị, tab điện thoại có thể chậm lại với hàng đợi đơn cực lớn. Xử lý 15 đến 30 ảnh nhiều megapixel mỗi loạt — và xoá danh sách đã hoàn thành giữa các đợt — giúp trình duyệt điện thoại mượt mà.',
      },
      {
        question: 'Có bao giờ áp watermark, giới hạn tệp hằng ngày hay nhắc nâng cấp trả phí trên xuất ZIP hàng loạt không?',
        answer:
          'Không bao giờ. Cả tải đơn lẻ lẫn gói Tải Tất Cả (ZIP) đều xuất sạch, không watermark, không đăng ký tài khoản hay tường trả phí theo số tệp.',
      },
      {
        question: 'Tôi có thể thả GIF động vào loạt nén hàng loạt không?',
        answer:
          'Ảnh GIF động đầu vào chỉ trích và nén khung mở đầu thành tệp tĩnh ở đây. Nếu bạn cần thu nhỏ GIF động nhiều khung mà vẫn giữ chuyển động, hãy dùng công cụ Nén Ảnh GIF chuyên dụng.',
      },
    ],
    relatedSlugs: [
      '/bulk-image-resizer',
      '/bulk-image-converter',
      '/web-image-optimizer',
      '/',
    ],
  },
  {
    slug: '/target-file-size-compressor',
    name: 'Nén Ảnh Theo Dung Lượng Mục Tiêu',
    shortDescription: 'Nén mọi ảnh xuống đúng giới hạn KB hoặc MB tuỳ chỉnh của bạn.',
    category: 'compress',
    seoTitle: 'Nén Ảnh Theo Dung Lượng Mục Tiêu – Đúng KB Hoặc MB',
    seoDescription:
      'Chạm đúng giới hạn tải lên với công cụ nén ảnh theo dung lượng mục tiêu ngay trên trình duyệt. Nhập bất kỳ giới hạn KB hay MB nào và dùng tìm kiếm chất lượng nhị phân cùng thu nhỏ pixel ngay trên máy.',
    h1: 'Nén Ảnh Theo Dung Lượng Mục Tiêu',
    subtitle:
      'Nhập bất kỳ giới hạn tải lên KB hay MB chính xác nào — ví dụ 35 KB cho thẻ ID, 150 KB cho ảnh hero web hay 2 MB cho tệp đính kèm — với công cụ nén ảnh theo dung lượng mục tiêu chạy ngay trên trình duyệt. Dành cho nhà thiết kế, lập trình viên và ứng viên phải đối mặt quy tắc cổng không chuẩn, công cụ kết hợp tìm kiếm chất lượng nhị phân với thu nhỏ pixel tuỳ chọn trên tệp tối đa 25 MB, gọn gàng ngay trên thiết bị của bạn.',
    howToSteps: [
      {
        title: 'Nhập giới hạn KB hoặc MB tuỳ chỉnh',
        description:
          'Nhập bất kỳ mục tiêu số nào từ 1 KB đến 10.240 KB (hoặc chuyển sang MB tối đa 20 MB), hoặc chạm chip mẫu nhanh như 20 KB, 50 KB, 100 KB, 200 KB, 500 KB hoặc 1 MB.',
      },
      {
        title: 'Thả một hoặc nhiều ảnh tối đa 25 MB',
        description:
          'Tải tệp JPG, PNG, WebP, HEIC, GIF, BMP hoặc SVG lên vùng thả để bắt đầu tối ưu mục tiêu tự động ngay lập tức.',
      },
      {
        title: 'Chọn Định Dạng Xuất và điều khiển dự phòng',
        description:
          'Chọn Gốc, JPG, WebP hoặc PNG, giữ bật thu nhỏ kích thước thông minh nếu tệp độ phân giải cao cần giảm pixel, và bật Tự Động Chuyển PNG cho đồ hoạ nặng.',
      },
      {
        title: 'Đọc chẩn đoán mục tiêu và so sánh chất lượng',
        description:
          'Kiểm tra Tóm Tắt Nén Mục Tiêu để xem mục đã đạt so với mục chưa đạt, xem độ sắc nét cạnh nhau bằng So Sánh, hoặc bấm Giữ Nguyên Bản nếu đầu vào nhỏ nào đó tăng lên.',
      },
      {
        title: 'Chỉnh mục tiêu bất cứ lúc nào hoặc tải ZIP',
        description:
          'Chỉnh ngưỡng tuỳ chỉnh rồi bấm Nén Xuống [mục tiêu] để chạy lại hàng đợi, sau đó lưu từng tệp riêng lẻ hoặc bấm Tải Tất Cả (ZIP).',
      },
    ],
    features: [
      {
        title: 'Mục tiêu KB & MB tuỳ chỉnh',
        description: 'Chỉnh bất kỳ kích thước mục tiêu nào từ ảnh đại diện 10KB tí hon đến tệp in ấn nhiều megabyte.',
      },
      {
        title: 'Bộ máy hai giai đoạn chất lượng + thu nhỏ',
        description:
          'Thử mức chất lượng ở độ phân giải đầy đủ trước, rồi hạ dần kích thước một cách thông minh chỉ khi cần.',
      },
      {
        title: 'Chẩn đoán chưa đạt trung thực',
        description:
          'Giải thích rõ ràng khi PNG không mất dữ liệu hay thu nhỏ bị tắt ngăn việc đạt giới hạn kích thước nghiêm ngặt.',
      },
      {
        title: 'Hỗ trợ ZIP hàng loạt',
        description: 'Nén nhiều tệp xuống cùng mục tiêu KB và tải tất cả trong một ZIP.',
      },
    ],
    faqs: [
      {
        question: 'Tôi có thể nhập khoảng KB và MB tuỳ chỉnh nào vào công cụ nén ảnh theo dung lượng mục tiêu này?',
        answer:
          'Ở chế độ KB, bạn có thể nhập bất kỳ số nguyên nào từ 1 KB đến 10.240 KB (10 MB), mặc định 150 KB khi trang mở. Chuyển viên đơn vị sang MB cho phép nhắm từ 1 MB đến 20 MB, với chip điền nhanh tức thì cho 20 KB, 50 KB, 100 KB, 200 KB, 500 KB và 1 MB.',
      },
      {
        question: 'Chuyển đổi giữa đơn vị KB và MB tính lại con số hiện tại của tôi ra sao?',
        answer:
          'Bấm MB sẽ chia mục tiêu KB hiện tại cho 1.024 và làm tròn tối thiểu 1 MB để bạn không bao giờ vô tình rơi từ kilobyte xuống giới hạn byte tí hon. Chạm lại KB sẽ nhân với 1.024 gọn gàng tối đa giới hạn 10.240 KB.',
      },
      {
        question: 'Vì sao bộ tối ưu thử tìm kiếm nhị phân chất lượng ở độ phân giải 100% trước khi thu nhỏ kích thước?',
        answer:
          'Nhiều ảnh dưới giới hạn vừa phải như 150 KB, 300 KB hay 1,5 MB có thể đạt mục tiêu chỉ bằng cách cắt chi phí nén JPEG hoặc WebP mà không vứt bỏ pixel. Kiểm tra chất lượng 35%–94% ở kích thước đầy đủ trước giúp chiều rộng và chiều cao pixel giữ nguyên bất cứ khi nào có thể.',
      },
      {
        question: 'Thu nhỏ kích thước thông minh tự động can thiệp khi nào?',
        answer:
          'Nếu ngay cả chất lượng lossy 35% ở chiều rộng đầy đủ cũng không ép ảnh xuống dưới ngưỡng byte của bạn và Cho Phép Thu Nhỏ Kích Thước Thông Minh được chọn, bộ máy sẽ hạ dần qua các hệ số tỉ lệ từ 82% về 10%. Ở mỗi bước, nó chạy tìm kiếm chất lượng mới và chọn độ phân giải cao nhất đáp ứng giới hạn chính xác của bạn.',
      },
      {
        question: 'Chuyện gì xảy ra khi cổng cần cả giới hạn KB cực chặt lẫn không đổi kích thước?',
        answer:
          'Bỏ chọn Cho Phép Thu Nhỏ Kích Thước Thông Minh để khoá chiều rộng và chiều cao ở 100%. Công cụ nén sau đó đẩy chất lượng lossy JPG hoặc WebP xuống thấp tới 5% ở kích thước đầy đủ và thông báo trung thực nếu độ phức tạp thô của ảnh không thể vừa trong số KB bạn yêu cầu.',
      },
      {
        question: 'Vì sao giới hạn bất khả thi như 2 KB hay 3 KB kích hoạt thông báo chưa đạt trung thực?',
        answer:
          'Mọi JPEG, WebP hay PNG hợp lệ đều chứa tiêu đề tệp bắt buộc, bảng Huffman và khối lượng tử hoá màu chiếm vài trăm byte ngay cả trên lưới tí hon. Thay vì treo hay giả mạo con số, thẻ hiển thị kích thước mã hoá thực nhỏ nhất có thể đạt được kèm gợi ý hành động.',
      },
      {
        question: 'Nút bật Tự động chuyển PNG lớn có tác dụng gì khi Định Dạng vẫn ở Gốc?',
        answer:
          'Tệp PNG không mất dữ liệu bỏ qua thanh trượt chất lượng và chỉ thu nhỏ bằng cách thu nhỏ kích thước, điều này có thể làm mờ ảnh chụp màn hình hay đồ hoạ sản phẩm nếu bị ép dưới giới hạn KB chặt. Khi Tự Động Chuyển bật, PNG không trong suốt quá khổ chuyển sang JPG, còn PNG trong suốt chuyển sang WebP bất cứ khi nào PNG riêng chưa đạt hoặc rơi dưới tỉ lệ 65%.',
      },
      {
        question: 'Tôi có thể nén hàng loạt ảnh hỗn hợp xuống cùng ngưỡng KB tuỳ chỉnh chính xác cùng lúc không?',
        answer:
          'Có. Thả bất kỳ hỗn hợp ảnh JPG, PNG, WebP, HEIC, GIF, BMP hay SVG nào tối đa 25 MB mỗi ảnh vào hàng đợi, và mọi tệp tối ưu độc lập theo mục tiêu KB hoặc MB đang bật của bạn.',
      },
      {
        question: 'Tóm Tắt Nén Mục Tiêu theo dõi thành công từng phần của loạt ảnh ra sao?',
        answer:
          'Khi nén loạt nhiều tệp theo giới hạn tuỳ chỉnh nghiêm ngặt, biểu ngữ tóm tắt tối đếm chính xác bao nhiêu tệp đã đạt mục tiêu của bạn so với bao nhiêu tệp không thể vừa một cách trung thực, kèm tổng byte tiết kiệm được. Mỗi thẻ riêng lẻ giải thích phần trăm chất lượng cuối cùng và tỉ lệ thu nhỏ chính xác của nó.',
      },
      {
        question: 'Tên tệp nào được gán cho bản tải mục tiêu tuỳ chỉnh và ZIP hàng loạt?',
        answer:
          'Bản tải đơn lẻ thêm thẻ kilobyte mục tiêu của bạn — tạo tên như brochure_150kb.jpg — còn xuất ZIP nhiều tệp lưu gọn thành compressmypic_<giá-trị><đơn-vị>.zip. Bản gốc không bị chạm tới của bạn vẫn tách biệt an toàn trên ổ đĩa.',
      },
      {
        question: 'Công cụ xử lý nền trong suốt ra sao nếu tôi chọn JPG cho giới hạn KB tuỳ chỉnh nghiêm ngặt?',
        answer:
          'Chọn JPG sẽ hiện bảng chọn màu lót PNG Trong Suốt (mặc định trắng thuần #ffffff). Mọi vùng trong suốt alpha sẽ lấp gọn bằng màu nền bạn chọn trước khi nén JPEG chạy, ngăn viền đen đặc.',
      },
      {
        question: 'Vì sao tệp nhỏ hơn mục tiêu tuỳ chỉnh của tôi lại hiện cảnh báo Đã Tăng?',
        answer:
          'Nếu bạn yêu cầu giới hạn 300 KB cho ảnh vốn đã nén xuống 180 KB, việc giải mã lên HTML5 Canvas và lưu lại ở chất lượng cao có thể phình lên 240 KB. Bấm Giữ Nguyên Bản trên thẻ đó để giữ tệp nguồn 180 KB nhẹ hơn của bạn.',
      },
      {
        question: 'Nén mục tiêu tuỳ chỉnh có xoá siêu dữ liệu EXIF nhạy cảm khỏi tài liệu hay ảnh không?',
        answer:
          'Có. Vẽ pixel qua HTML5 Canvas tự động xoá bản xem trước máy ảnh nhúng, siêu dữ liệu màn trập và toạ độ GPS, giữ tệp cá nhân riêng tư đồng thời dành mọi kilobyte cho độ rõ hình ảnh.',
      },
      {
        question: 'Tôi có thể đổi giá trị KB tuỳ chỉnh sau khi ảnh hoàn thành mà không cần tải lại không?',
        answer:
          'Có. Sửa mục tiêu số hoặc chạm chip mẫu khác bất cứ lúc nào rồi bấm nút Nén Xuống [mục tiêu] để tối ưu lại toàn bộ danh sách đã tải ngay trong bộ nhớ.',
      },
      {
        question: 'Số byte cuối cùng chính xác ra sao so với giới hạn kilobyte nhị phân?',
        answer:
          'Bộ máy chuyển KB thành byte nhị phân chính xác (KB × 1024) và xem mục nhập của bạn là giới hạn trên nghiêm ngặt, không bao giờ vượt quá trừ khi không thể về mặt vật lý dưới ràng buộc bị khoá. Tìm kiếm nhị phân của nó thường dừng trong khoảng 96% đến 100% của giới hạn đó để giữ chi tiết tối đa.',
      },
      {
        question: 'Bản xem trước của khách hàng riêng tư, hợp đồng hay bản scan y tế có bị tải lên trong quá trình tính mục tiêu không?',
        answer:
          'Không. Lần lặp tìm kiếm nhị phân, thu nhỏ ảnh, giải mã HEIC bằng WebAssembly và đóng gói ZIP đều chạy hoàn toàn trong phiên trình duyệt của bạn mà không truyền mạng ngoài.',
      },
      {
        question: 'Tôi có thể xem trước chữ mảnh hay chi tiết ở giới hạn KB tuỳ chỉnh trước khi lưu không?',
        answer:
          'Có. Bấm So Sánh trên bất kỳ thẻ kết quả đã hoàn thành nào để mở rèm chia đôi trước–sau tương tác và kiểm tra cạnh sắc trực tiếp với bản tải gốc.',
      },
      {
        question: 'Khi nào tốt hơn nên chọn công cụ cố định như 50 KB hoặc 100 KB thay vì công cụ tuỳ chỉnh này?',
        answer:
          'Dùng trang cố định khi quy trình của bạn luôn nhắm chuẩn cổng tiêu chuẩn như hộ chiếu 50 KB hay tải lên Shopify 200 KB. Mở công cụ nén theo dung lượng mục tiêu tuỳ chỉnh này bất cứ khi nào biểu mẫu yêu cầu giới hạn lạ như 30 KB, 75 KB, 250 KB hay 1,5 MB.',
      },
      {
        question: 'Chuyện gì xảy ra nếu tôi tải GIF động lên và nhắm 400 KB ở đây?',
        answer:
          'Vì nhắm KB bằng Canvas xử lý khung raster tĩnh, ảnh GIF động tải lên sẽ tối ưu và xuất khung mở đầu thành ảnh tĩnh. Dùng công cụ Nén Ảnh GIF chuyên dụng nếu bạn cần thu nhỏ ảnh động lặp nhiều khung một cách gọn gàng.',
      },
      {
        question: 'Chuyện gì xảy ra nếu tôi đặt mục tiêu MB cao như 5 MB cho ảnh 1 MB?',
        answer:
          'Bất kỳ ảnh nào vốn đã dưới giới hạn MB tuỳ chỉnh của bạn sẽ đạt ngay trong lần chất lượng cao nhất ở kích thước đầy đủ. Nếu mã hoá lại làm tăng trọng lượng byte không cần thiết, bạn có thể bấm Giữ Nguyên Bản ngay trên thẻ để giữ tệp nguồn nhẹ hơn.',
      },
    ],
    relatedSlugs: [
      '/compress-image-to-50kb',
      '/compress-image-to-100kb',
      '/compress-image-to-200kb',
      '/compress-image-to-500kb',
    ],
  },
  {
    slug: '/bulk-image-resizer',
    name: 'Đổi Kích Thước Ảnh Hàng Loạt',
    shortDescription: 'Đổi kích thước hàng chục ảnh theo kích thước tối đa, chiều rộng hoặc % + ZIP.',
    category: 'resize',
    seoTitle: 'Đổi Kích Thước Ảnh Hàng Loạt Online Miễn Phí – ZIP',
    seoDescription:
      'Thu phóng hàng chục ảnh với công cụ đổi kích thước ảnh hàng loạt miễn phí ngay trên trình duyệt. Chọn Vừa Khung Tối Đa RxC, Chiều Rộng Đồng Đều, Pixel Chính Xác hoặc %, rồi tải một ZIP.',
    h1: 'Đổi Kích Thước Ảnh Hàng Loạt Online Miễn Phí',
    subtitle:
      'Chuẩn hoá kích thước pixel trên toàn bộ buổi chụp sản phẩm, thư mục blog và album ảnh bằng công cụ đổi kích thước ảnh hàng loạt miễn phí chạy ngay trên trình duyệt. Dành cho người bán thương mại điện tử, đội nội dung và nhiếp ảnh gia, công cụ xử lý loạt ảnh dọc và ngang lẫn lộn qua Vừa Khung Tối Đa RxC, Chiều Rộng Đồng Đều, RxC Chính Xác hoặc thu phóng Theo Phần Trăm với tệp tối đa 25 MB và xuất ZIP tức thì.',
    howToSteps: [
      {
        title: 'Thả nhiều ảnh vào hàng đợi hàng loạt',
        description:
          'Tải bất kỳ hỗn hợp tệp JPG, PNG, WebP, HEIC, GIF, BMP hoặc SVG nào tối đa 25 MB mỗi ảnh từ máy tính hoặc điện thoại của bạn.',
      },
      {
        title: 'Chọn Chiến Lược Đổi Kích Thước Hàng Loạt',
        description:
          'Chọn Vừa Khung Tối Đa RxC cho hướng lẫn lộn, Chiều Rộng Đồng Đều cho bố cục cột cố định, RxC Chính Xác cho lưới nghiêm ngặt, hoặc Phần Trăm (%) để thu phóng đồng đều.',
      },
      {
        title: 'Đặt kích thước đích hoặc mẫu nhanh',
        description:
          'Nhập pixel từ 1 đến 12.000 px (hoặc bấm Full HD 1920px, Blog 1200px, Thương Mại Điện Tử 1000×1000 hoặc Ảnh Thu Nhỏ 600px), hoặc trượt tỉ lệ từ 10% đến 200%.',
      },
      {
        title: 'Cấu hình chống phóng to và hành vi vừa khung',
        description:
          'Giữ chọn Không phóng to ảnh nhỏ hơn để bảo vệ icon tí hon, hoặc chọn Vừa Khít, Phủ Đầy hay Kéo Giãn khi chọn RxC Chính Xác.',
      },
      {
        title: 'Chọn Định Dạng Xuất, Chất Lượng và Màu Nền Lót',
        description:
          'Giữ Gốc hoặc chuyển đầu ra sang JPG, PNG hay WebP kèm thanh trượt chất lượng 10%–100% và màu nền lót tuỳ chỉnh cho JPG.',
      },
      {
        title: 'Chạy Đổi Kích Thước Hàng Loạt và Tải Tất Cả (ZIP)',
        description:
          'Xem lại kích thước pixel cũ sang mới của từng thẻ rồi bấm Tải Tất Cả (ZIP) để lưu bulk_resized_compressmypic.zip ngay trên máy.',
      },
    ],
    features: [
      {
        title: 'Chế độ khung bao Vừa Khung Tối Đa',
        description:
          'Thu nhỏ an toàn cả ảnh phong cảnh rộng lẫn chân dung cao trong ví dụ 1200×1200px mà không cắt hay méo.',
      },
      {
        title: 'Bảo vệ không phóng to',
        description:
          'Giữ chọn "Không phóng to ảnh nhỏ hơn" để tài nguyên nhỏ vẫn sắc nét thay vì bị kéo giãn.',
      },
      {
        title: 'Điều khiển định dạng & chất lượng',
        description: 'Tuỳ chọn chuyển đầu ra đã đổi kích thước sang WebP hoặc JPG cùng lúc.',
      },
      {
        title: 'Đóng gói ZIP một cú nhấp',
        description: 'Tải hàng chục ảnh đã đổi kích thước với tên gọn gàng trong một ZIP.',
      },
    ],
    faqs: [
      {
        question: 'Vừa Khung Tối Đa RxC xử lý thư mục trộn ảnh phong cảnh ngang và chân dung dọc ra sao?',
        answer:
          'Vừa Khung Tối Đa RxC xem mục chiều rộng và chiều cao bạn nhập (mặc định 1200×1200 px) như một khung bao vô hình trong khi giữ tỉ lệ tự nhiên của mỗi ảnh. Ảnh phong cảnh 4000×2000 thành 1200×600, còn chân dung 2000×4000 thành 600×1200 — không cắt hay kéo giãn.',
      },
      {
        question: 'Khi nào Chiều Rộng Đồng Đều tốt hơn Vừa Khung Tối Đa RxC?',
        answer:
          'Chọn Chiều Rộng Đồng Đều bất cứ khi nào xây bản tin dọc, cột bài viết CMS hay luồng gallery responsive, nơi mọi ảnh phải cùng đúng chiều rộng ngang. Mỗi ảnh thu phóng chiều cao theo tỉ lệ nên không bị kéo giãn hay cắt.',
      },
      {
        question: 'Vừa Khít, Phủ Đầy và Kéo Giãn làm gì trong chế độ RxC Chính Xác?',
        answer:
          'Vừa Khít vừa toàn bộ ảnh trong hộp pixel chính xác của bạn với lề đệm gọn, còn Phủ Đầy lấp mọi pixel sát mép bằng cách cắt giữa các cạnh thừa. Kéo Giãn ép tỉ lệ không khớp vừa đúng pixel đích trực tiếp.',
      },
      {
        question: 'Thu phóng hàng loạt Theo Phần Trăm (%) hoạt động ra sao?',
        answer:
          'Chế độ Phần Trăm nhân chiều rộng và chiều cao gốc của mỗi ảnh đã tải lên với hệ số thanh trượt bạn chọn (10% đến 200%, với nút nhanh 25%, 50%, 75%, 100% và 150%). Chọn 50% biến ảnh 4000×3000 thành 2000×1500 và icon 1000×800 thành 500×400 trong cùng một lần.',
      },
      {
        question: 'Vì sao nên để bật Không phóng to ảnh nhỏ hơn trong loạt ảnh lẫn lộn?',
        answer:
          'Nếu thư mục chứa cả ảnh DSLR 4000 px lẫn huy hiệu 400 px, việc ép huy hiệu nhỏ lên 1200 px sẽ kéo giãn pixel và gây mờ. Để Không Phóng To được chọn sẽ thu nhỏ ảnh lớn gọn gàng trong khi giữ tệp nhỏ hơn ở kích thước gốc sắc nét.',
      },
      {
        question: 'Bốn nút mẫu pixel nhanh đặt giá trị gì?',
        answer:
          'Chạm Full HD 1920px điền 1920×1080, Blog 1200px đặt 1200×1200, Thương Mại Điện Tử 1000×1000 đặt 1000×1000, và Ảnh Thu Nhỏ 600px đặt 600×600. Bạn vẫn có thể chỉnh tay từng trường pixel tối đa 12.000 px sau đó.',
      },
      {
        question: 'Tôi có thể chuyển cả thư mục sang WebP hoặc JPG trong lúc đổi kích thước hàng loạt không?',
        answer:
          'Có. Chuyển Định Dạng Xuất từ Gốc sang WebP, JPG hoặc PNG trước khi bấm Đổi Kích Thước Hàng Loạt (N) để vừa thu phóng kích thước pixel vừa hiện đại hoá định dạng tệp trong một lần canvas.',
      },
      {
        question: 'Chuyện gì xảy ra với logo PNG trong suốt nếu tôi đổi kích thước với Định Dạng Xuất đặt thành JPG?',
        answer:
          'Chọn JPG sẽ hiện bộ chọn Màu Nền Lót (#ffffff trắng mặc định). Mọi nền trong suốt hay bóng đổ mềm sẽ hiển thị gọn trên màu lót bạn chọn trước khi mã hoá JPEG.',
      },
      {
        question: 'Giữ Định Dạng Xuất ở PNG có giữ độ trong suốt alpha khi đổi kích thước hàng loạt không?',
        answer:
          'Có, xuất dưới dạng PNG giữ nền trong suốt và cạnh alpha mềm hoàn toàn nguyên vẹn trên mọi mục đã đổi kích thước. Giữ Định Dạng Xuất ở Gốc cũng giữ độ trong suốt cho tệp PNG và WebP đã tải lên.',
      },
      {
        question: 'Làm sao xác minh ảnh đã đổi kích thước vẫn sắc nét trước khi tải ZIP?',
        answer:
          'Bấm bất kỳ thẻ ảnh thu nhỏ nào hoặc nút So Sánh trên mục đã hoàn thành để mở trình xem so sánh trước–sau tương tác. Bạn có thể kéo dải phân cách cạnh nhau để xác minh cạnh sắc trước khi xuất loạt.',
      },
      {
        question: 'Dung lượng tệp và giới hạn pixel tối đa mỗi ảnh trong công cụ Đổi Kích Thước Ảnh Hàng Loạt là bao nhiêu?',
        answer:
          'Mỗi ảnh tải lên có thể tối đa 25 MB, và đầu vào pixel từ 1 px đến 12.000 px mỗi cạnh. Lưu ý xuất canvas khổng lồ trên 10.000 px cho hàng chục ảnh phụ thuộc RAM trình duyệt sẵn có trên thiết bị của bạn.',
      },
      {
        question: 'Ảnh HEIC của iPhone và tệp SVG vector có được hỗ trợ trong cùng hàng đợi đổi kích thước không?',
        answer:
          'Có. Ảnh HEIC/HEIF giải mã ngay trên máy qua WebAssembly phía máy khách và đồ hoạ SVG raster hoá mượt mà lên HTML5 Canvas trước khi thu phóng cùng tệp JPG, PNG, WebP, GIF và BMP tiêu chuẩn.',
      },
      {
        question: 'Tôi có thể chỉnh cài đặt và đổi kích thước toàn bộ loạt lại mà không cần thả lại tệp không?',
        answer:
          'Có. Chỉnh chiến lược, giới hạn pixel, định dạng hoặc thanh trượt chất lượng 10%–100% bất cứ lúc nào rồi bấm Đổi Kích Thước Hàng Loạt (N) để xử lý lại mọi ảnh trong hàng đợi ngay trong bộ nhớ trình duyệt.',
      },
      {
        question: 'Bộ đếm tiến độ trực tiếp có hiển thị thư mục lớn đã đi được bao xa không?',
        answer:
          'Có. Trong lúc xử lý chạy, nút hành động hiển thị Đang Đổi Kích Thước (X/Y)... cùng ảnh thu nhỏ đang xoay để bạn luôn biết chính xác tiến độ loạt.',
      },
      {
        question: 'Danh mục khách hàng bảo mật hay album gia đình có bị gửi lên máy chủ đám mây để đổi kích thước không?',
        answer:
          'Không bao giờ. Mọi phép tính đổi kích thước, bước vẽ Canvas và gói ZIP đều thực thi ngay trên thiết bị của bạn, giữ ảnh riêng tư và hàng hoá chưa ra mắt 100% trên thiết bị.',
      },
      {
        question: 'Công cụ Đổi Kích Thước Ảnh Hàng Loạt có gỡ chi tiết EXIF và toạ độ GPS của máy ảnh không?',
        answer:
          'Có. Vì HTML5 Canvas vẽ lại dữ liệu pixel theo kích thước đích mà không sao chép tiêu đề EXIF thô, thẻ vị trí và số serial máy ảnh được xoá tự động.',
      },
      {
        question: 'Lưu trữ ZIP đã tải về được đặt tên gì?',
        answer:
          'Bấm Tải Tất Cả (ZIP) sẽ tạo bulk_resized_compressmypic.zip ngay trên trình duyệt. Nó gói gọn mọi tệp đã đổi kích thước thành công từ hàng đợi của bạn trong một lưu trữ.',
      },
      {
        question: 'Tôi có thể gỡ một tệp vô tình khỏi loạt 20 ảnh trước khi xuất ZIP không?',
        answer:
          'Có. Bấm biểu tượng thùng rác trên bất kỳ thẻ riêng lẻ nào để xoá chỉ ảnh đó mà không làm gián đoạn 19 kết quả đã đổi kích thước còn lại.',
      },
      {
        question: 'Công cụ Đổi Kích Thước Ảnh Hàng Loạt khác Nén Ảnh Hàng Loạt ra sao?',
        answer:
          'Nén Ảnh Hàng Loạt giữ nguyên chiều rộng và chiều cao pixel gốc trong khi giảm dung lượng tệp qua nén lossy. Ngược lại, công cụ đổi kích thước ảnh hàng loạt này chủ động thay đổi kích thước pixel và khung bao hàng loạt kèm cài đặt định dạng và chất lượng tuỳ chọn.',
      },
      {
        question: 'Tôi có thể thêm ảnh vào loạt đổi kích thước đã hoàn thành không?',
        answer:
          'Có. Kéo thêm tệp vào vùng thả tải lên bất cứ lúc nào và chúng tự động xử lý theo chiến lược đổi kích thước đang bật của bạn rồi tham gia tóm tắt Tải Tất Cả (ZIP) cuối cùng.',
      },
    ],
    relatedSlugs: [
      '/image-resizer',
      '/bulk-image-compressor',
      '/bulk-image-converter',
      '/web-image-optimizer',
    ],
  },
  {
    slug: '/bulk-image-converter',
    name: 'Chuyển Đổi Ảnh Hàng Loạt',
    shortDescription: 'Chuyển đổi nhiều tệp JPG, PNG, HEIC, SVG & BMP cùng lúc + ZIP.',
    category: 'convert',
    seoTitle: 'Chuyển Đổi Ảnh Hàng Loạt Miễn Phí – Đổi Định Dạng & ZIP',
    seoDescription:
      'Đổi thư mục hỗn hợp với công cụ chuyển đổi ảnh hàng loạt miễn phí ngay trên trình duyệt. Biến loạt HEIC, PNG, SVG, AVIF và BMP thành WebP, JPG hoặc PNG kèm xuất ZIP.',
    h1: 'Chuyển Đổi Ảnh Hàng Loạt Miễn Phí',
    subtitle:
      'Thống nhất thư mục hỗn hợp gồm ảnh HEIC của Apple, ảnh tải AVIF, icon SVG, PNG trong suốt và bitmap BMP đời cũ trong một lần với công cụ chuyển đổi ảnh hàng loạt miễn phí. Dành cho lập trình viên, quản lý nội dung và người dùng phổ thông đang chuẩn hoá toàn bộ thư viện tài nguyên, công cụ chuyển đổi loạt ảnh tối đa 25 MB mỗi tệp gọn gàng thành WebP, JPG hoặc PNG ngay trên máy, kèm hậu tố tên tệp tuỳ chọn và tải một ZIP duy nhất.',
    howToSteps: [
      {
        title: 'Thả loạt ảnh định dạng hỗn hợp',
        description:
          'Tải bất kỳ tổ hợp tệp JPG, PNG, WebP, HEIC, SVG, BMP, GIF hoặc AVIF nào tối đa 25 MB mỗi tệp vào vùng thả.',
      },
      {
        title: 'Chọn định dạng đích: WebP, JPG hoặc PNG',
        description:
          'Chọn WebP (Nhỏ Nhất Cho Web) cho tốc độ site, JPG (Phổ Biến) cho chia sẻ rộng rãi, hoặc PNG (Không Mất Dữ Liệu, Giữ Alpha) cho đồ hoạ sắc nét.',
      },
      {
        title: 'Hậu tố tên tệp tuỳ chọn và Lấp Trong Suốt',
        description:
          'Nhập hậu tố tên tệp tuỳ chọn như _web (hoặc để trống) và chọn màu lót Lấp Trong Suốt nếu chuyển ảnh alpha sang JPG.',
      },
      {
        title: 'Đặt phần trăm chất lượng xuất',
        description:
          'Chỉnh thanh trượt chất lượng 10%–100% cho xuất WebP hoặc JPG (tự tắt khi PNG Không Mất Dữ Liệu đang bật).',
      },
      {
        title: 'Xem lại tổng loạt và so sánh trực quan',
        description:
          'Kiểm tra thay đổi byte từng tệp và biểu ngữ Tóm Tắt Chuyển Đổi Hàng Loạt, rồi mở So Sánh trên mục mẫu để xác minh độ sắc nét.',
      },
      {
        title: 'Lưu từng tệp riêng lẻ hoặc Tải Tất Cả (ZIP)',
        description:
          'Bấm Tải Xuống trên từng thẻ hoặc Tải Tất Cả (ZIP) để xuất bulk_converted_webp.zip, bulk_converted_jpg.zip hoặc bulk_converted_png.zip.',
      },
    ],
    features: [
      {
        title: 'Quy trình hàng loạt đầu vào hỗn hợp',
        description: 'Thả HEIC, PNG, SVG và JPEG cùng nhau trong một loạt và thống nhất chúng thành một định dạng.',
      },
      {
        title: 'Lót trong suốt & hậu tố tuỳ chọn',
        description: 'Tuỳ chỉnh nền lót JPG trắng hoặc có màu và thêm hậu tố tên tệp tuỳ chọn một cách gọn gàng.',
      },
      {
        title: 'Tóm tắt kích thước hàng loạt',
        description: 'Xem tổng kích thước gốc so với kích thước đã chuyển đổi trên toàn bộ loạt.',
      },
      {
        title: 'WebAssembly & Canvas 100% ngay trên máy',
        description: 'Không tệp nào được tải lên — ngay cả chuyển đổi HEIC của iPhone cũng chạy trên thiết bị của bạn.',
      },
    ],
    faqs: [
      {
        question: 'Tôi có thể trộn nhiều loại tệp đầu vào khác nhau trong cùng hàng đợi Chuyển Đổi Ảnh Hàng Loạt không?',
        answer:
          'Có. Bạn có thể thả HEIC của Apple, AVIF hiện đại, PNG trong suốt, SVG vector, BMP đời cũ, GIF, WebP và JPG vào cùng một lần tải lên rồi xuất toàn bộ bộ sưu tập dưới một định dạng thống nhất.',
      },
      {
        question: 'Hậu Tố Tên Tệp Tuỳ Chọn giúp ích gì khi chuyển đổi hàng loạt?',
        answer:
          'Nhập thẻ như _web hoặc _v2 sẽ thêm hậu tố đó ngay trước phần mở rộng tệp mới, tạo tên gọn như hero_web.webp. Nhờ vậy tài nguyên đã chuyển đổi mới không trùng với tệp nguồn có tên tương tự trong thư mục dự án dùng chung.',
      },
      {
        question: 'Tóm Tắt Chuyển Đổi Hàng Loạt tính tổng tác động của loạt ảnh ra sao?',
        answer:
          'Khi tệp hoàn thành xử lý, biểu ngữ tóm tắt tối cộng tổng byte gốc trên mọi tệp đã chuyển đổi và hiển thị tổng byte đã chuyển đổi bên cạnh. Nhờ vậy bạn kiểm tra thay đổi dung lượng lưu trữ hay băng thông trên toàn bộ thư mục ngay lập tức.',
      },
      {
        question: 'Chuyện gì xảy ra nếu tôi thống nhất PNG trong suốt và SVG thành định dạng JPG?',
        answer:
          'Chọn JPG (Phổ Biến) sẽ hiện bộ chọn màu Lấp Trong Suốt (#ffffff trắng mặc định). Mọi vùng trong suốt alpha trong PNG hay SVG của bạn hoà mượt lên màu nền đã chọn thay vì hoá đen đặc.',
      },
      {
        question: 'Vì sao thanh trượt Chất Lượng bị tắt khi chọn PNG (Không Mất Dữ Liệu, Giữ Alpha)?',
        answer:
          'PNG dùng mã hoá DEFLATE không mất dữ liệu, giữ mọi pixel đã giải mã giống hệt nhau mà không có mức chất lượng lossy. Bất cứ khi nào bạn chọn WebP hoặc JPG, thanh trượt chất lượng 10%–100% sẽ mở khoá ngay.',
      },
      {
        question: 'Tôi có thể chuyển đổi một thư mục ảnh hỗn hợp hai lần — một lần sang WebP và một lần sang JPG — mà không tải lại không?',
        answer:
          'Có. Chuyển Chuyển Đổi Hàng Loạt Sang Định Dạng từ WebP sang JPG bất cứ lúc nào, tuỳ chọn cập nhật Hậu Tố Tên Tệp, rồi bấm Chuyển Đổi Tất Cả (N) để xử lý lại tệp đã lưu trong bộ nhớ và lấy ZIP thứ hai.',
      },
      {
        question: 'Tên ZIP nhận dạng định dạng đích tôi đã xuất ra sao?',
        answer:
          'Bấm Tải Tất Cả (ZIP) sẽ tạo bulk_converted_webp.zip, bulk_converted_jpg.zip hoặc bulk_converted_png.zip trực tiếp trong trình duyệt. Có định dạng trong tên tệp giúp nhiều bản xuất định dạng dễ phân biệt trong thư mục Tải Xuống của bạn.',
      },
      {
        question: 'Thống nhất mọi thứ thành WebP có giữ độ trong suốt alpha trên logo PNG và icon SVG không?',
        answer:
          'Có. Cả WebP (Nhỏ Nhất Cho Web) và PNG (Không Mất Dữ Liệu, Giữ Alpha) đều giữ nguyên độ trong suốt 8-bit đầy đủ từ PNG trong suốt, WebP và tệp SVG độc lập một cách gọn gàng.',
      },
      {
        question: 'Chuyện gì xảy ra nếu trình duyệt cũ không thể giải mã tệp AVIF hỗn hợp trong loạt của tôi?',
        answer:
          'Nếu tệp dùng codec mà trình duyệt của bạn thiếu hỗ trợ, ví dụ AVIF trên trình duyệt lỗi thời, chỉ thẻ cụ thể đó hiển thị thông báo lỗi rõ ràng. Mọi mục JPG, PNG hay HEIC khác trong cùng loạt vẫn hoàn thành bình thường.',
      },
      {
        question: 'Loạt HEIC của iPhone có được chuyển đổi trên máy chủ đám mây từ xa không?',
        answer:
          'Không. Ngay cả giải mã HEIC và HEIF của Apple cũng chạy ngay trên tab trình duyệt qua WebAssembly phía máy khách trước khi HTML5 Canvas mã hoá định dạng xuất bạn chọn.',
      },
      {
        question: 'Tệp riêng lẻ có thể lớn đến mức nào trong công cụ Chuyển Đổi Ảnh Hàng Loạt?',
        answer:
          'Mỗi ảnh riêng lẻ trong hàng đợi của bạn có thể tối đa 25 MB. Khoảng trống đó dễ dàng bao phủ ảnh máy ảnh nhiều megapixel, ảnh xuất PNG nhiều lớp và lưu trữ BMP chưa nén.',
      },
      {
        question: 'Chuyện gì xảy ra khi GIF động được đưa vào thư mục chuyển đổi hàng loạt?',
        answer:
          'HTML5 Canvas raster hoá khung mở đầu của bất kỳ tệp .gif nào đã tải lên thành tệp WebP, JPG hoặc PNG tĩnh sắc nét trong khi giữ nguyên chiều rộng và chiều cao đầy đủ. Dùng công cụ Nén Ảnh GIF nếu bạn muốn giữ nguyên hoạt ảnh lặp.',
      },
      {
        question: 'Chuyển đổi định dạng hàng loạt có thay đổi chiều rộng và chiều cao gốc của ảnh không?',
        answer:
          'Không, mọi đầu ra giữ 100% chiều rộng và chiều cao pixel gốc nguyên vẹn. Dùng công cụ Đổi Kích Thước Ảnh Hàng Loạt thay vào đó bất cứ khi nào bạn cần đổi kích thước hay giới hạn kích thước ảnh cùng lúc.',
      },
      {
        question: 'Vì sao chuyển JPEG đã nén sang PNG có thể làm tổng tóm tắt loạt trông lớn hơn?',
        answer:
          'PNG không mất dữ liệu lưu trữ nhiều dữ liệu hơn trên mỗi pixel ảnh so với JPEG lossy. Trừ khi quy trình yêu cầu nghiêm ngặt .png, chuyển loạt web hỗn hợp sang WebP ở 85% thường tiết kiệm đáng kể dung lượng mà vẫn giữ độ sắc nét.',
      },
      {
        question: 'Thẻ EXIF của máy ảnh nhúng có được giữ sau khi chuyển đổi thư mục hỗn hợp không?',
        answer:
          'Không. Vẽ ảnh qua HTML5 Canvas sẽ gỡ khối siêu dữ liệu EXIF, số serial máy ảnh và thẻ GPS trên mọi tệp đã chuyển đổi một cách gọn gàng.',
      },
      {
        question: 'Tôi có thể so sánh pixel gốc và đã chuyển đổi trên từng thẻ trước khi xuất ZIP không?',
        answer:
          'Có. Bấm So Sánh trên bất kỳ thẻ tệp đã hoàn thành nào để kiểm tra cạnh và màu sắc mảnh cạnh nhau trong trình xem so sánh tách đôi.',
      },
      {
        question: 'Chuyện gì xảy ra nếu tôi thêm tệp sau khi chuyển đổi loạt đầu tiên?',
        answer:
          'Tệp mới thả sẽ chuyển đổi tự động theo định dạng đích, chất lượng, hậu tố và màu lót hiện đang chọn. Sau đó chúng hợp nhất gọn vào hàng đợi đang hoạt động và tóm tắt ZIP dùng chung.',
      },
      {
        question: 'Font web ngoài hay ảnh từ xa được liên kết trong tệp SVG có được đưa vào khi chuyển đổi hàng loạt không?',
        answer:
          'Vì lý do bảo mật trình duyệt, HTML5 Canvas sandbox tệp SVG độc lập và chặn tìm nạp URL từ xa hay webfont ngoài. SVG tự chứa với path, gradient và CSS nội tuyến sẽ chuyển đổi gọn gàng.',
      },
      {
        question: 'Tôi có thể gỡ một ảnh lỗi hoặc không muốn khỏi danh sách đã chuyển đổi không?',
        answer:
          'Có. Bấm nút thùng rác trên bất kỳ thẻ nào để loại nó khỏi danh sách và tạo lại tóm tắt cùng bản tải ZIP từ các tệp còn lại.',
      },
      {
        question: 'Khi nào nên chọn công cụ chuyển đổi hàng loạt này thay vì công cụ chuyển đổi đơn như HEIC sang JPG?',
        answer:
          'Công cụ đơn lẻ cấu hình sẵn bộ lọc tệp nghiêm ngặt và mặc định cho một đường chuyển đổi cụ thể. Mở công cụ chuyển đổi ảnh hàng loạt này bất cứ khi nào thư mục chứa nhiều phần mở rộng khác nhau mà tất cả đều cần thành WebP, JPG hoặc PNG cùng lúc.',
      },
    ],
    relatedSlugs: [
      '/image-converter',
      '/bulk-image-compressor',
      '/bulk-image-resizer',
      '/web-image-optimizer',
    ],
  },
  {
    slug: '/web-image-optimizer',
    name: 'Tối Ưu Ảnh Cho Website',
    shortDescription: 'Tối ưu ảnh hero, sản phẩm & thẻ cho tốc độ Core Web Vitals.',
    category: 'compress',
    seoTitle: 'Tối Ưu Ảnh Cho Website Miễn Phí – Tăng Tốc Core Web Vitals',
    seoDescription:
      'Thu nhỏ tài nguyên trang nặng với công cụ tối ưu ảnh cho website miễn phí ngay trên trình duyệt. Chọn mẫu WebP, xoá thẻ EXIF, sao chép thẻ HTML img responsive và lưu ZIP.',
    h1: 'Tối Ưu Ảnh Cho Website (Chuẩn Core Web Vitals)',
    subtitle:
      'Chuẩn bị đồ hoạ website tải nhanh được thiết kế cho Core Web Vitals (LCP và CLS) bằng công cụ tối ưu ảnh cho website miễn phí trực tiếp trong trình duyệt. Dành cho lập trình viên front-end, chủ shop Shopify và SEO kỹ thuật, công cụ kết hợp mẫu WebP và JPG đã thử nghiệm kỹ tối đa 25 MB mỗi tệp với xoá EXIF tự động, thẻ HTML <img> sao chép được và tải một ZIP duy nhất.',
    howToSteps: [
      {
        title: 'Chọn một trong 5 Mẫu Hiệu Năng Web',
        description:
          'Chọn Hero / Banner (1600px WebP 80%), Sản Phẩm Thương Mại Điện Tử (1200px WebP 82%), Thẻ / Ảnh Thu Nhỏ (640px WebP 75%), Social OG / Email (1200px JPG 82%), hoặc Đồ Hoạ Retina 2× (1920px WebP 88%).',
      },
      {
        title: 'Tuỳ chỉnh Định Dạng Web, Kích Thước Tối Đa hoặc Chất Lượng',
        description:
          'Chuyển giữa WebP, JPG hoặc PNG, chỉnh Kích Thước Tối Đa (Cạnh Dài) từ 640 px đến 1920 px (hoặc Giữ Nguyên Kích Thước Gốc), và chỉnh Chất Lượng từ 20% đến 95%.',
      },
      {
        title: 'Thả tài nguyên website thô vào vùng tải lên',
        description:
          'Tải ảnh JPG, PNG, WebP, HEIC, SVG, BMP, GIF hoặc AVIF tối đa 25 MB mỗi ảnh với chọn Chỉ thu nhỏ ảnh lớn hơn để tránh làm phình icon nhỏ.',
      },
      {
        title: 'Xem mức tiết kiệm trọng lượng trang và So Sánh chất lượng',
        description:
          'Kiểm tra Tóm Tắt Hiệu Năng Web để xem tổng trọng lượng trang đã tiết kiệm, xác minh huy hiệu Sẵn Sàng Cho Web trên từng thẻ, và kiểm tra cạnh cạnh nhau qua So Sánh.',
      },
      {
        title: 'Sao chép đoạn HTML <img> responsive',
        description:
          'Bấm Sao Chép <img> trên bất kỳ thẻ đã hoàn thành nào để lấy mã sẵn sàng dán với chiều rộng, chiều cao, loading="lazy" và decoding="async".',
      },
      {
        title: 'Tải tài nguyên -web riêng lẻ hoặc gói ZIP',
        description:
          'Lưu từng tệp <tên>-web riêng lẻ hoặc bấm Tải Tất Cả (ZIP) để tải web_optimized_compressmypic.zip một cách gọn gàng.',
      },
    ],
    features: [
      {
        title: 'Mẫu sẵn sàng cho web',
        description:
          'Giới hạn kích thước và điểm ngọt chất lượng WebP/JPG được cấu hình sẵn, phù hợp cho LCP và PageSpeed Insights.',
      },
      {
        title: 'Đoạn HTML <img> sao chép được',
        description:
          'Tạo thuộc tính `width`, `height`, `loading="lazy"` và `decoding="async"` responsive để ngăn dịch chuyển bố cục (CLS).',
      },
      {
        title: 'Tự động xoá EXIF & chống phóng to',
        description: 'Xoá siêu dữ liệu máy ảnh cồng kềnh và tránh phóng to icon nhỏ không cần thiết.',
      },
      {
        title: 'Trình kiểm tra trước/sau tương tác',
        description: 'Xác minh độ rõ hình ảnh cạnh nhau trước khi triển khai tài nguyên lên production.',
      },
    ],
    faqs: [
      {
        question: 'Năm Mẫu Hiệu Năng Web ánh xạ tới vị trí website thực ra sao?',
        answer:
          'Hero / Banner giới hạn 1600 px WebP (80%), Sản Phẩm Thương Mại Điện Tử giới hạn 1200 px WebP (82%), Thẻ / Ảnh Thu Nhỏ giới hạn 640 px WebP (75%), Social OG / Email xuất 1200 px JPG (82%) để tương thích trình thu thập, và Đồ Hoạ Retina 2× giữ tối đa 1920 px WebP (88%). Bấm bất kỳ mẫu nào cũng tự tối ưu lại tệp đã tải.',
      },
      {
        question: 'Nút Sao Chép <img> giúp cải thiện điểm Core Web Vitals ra sao?',
        answer:
          'Bấm Sao Chép <img> sẽ sao chép thẻ HTML ngữ nghĩa chứa thuộc tính chiều rộng và chiều cao xuất chính xác cộng loading="lazy" và decoding="async". Kích thước rõ ràng giúp trình duyệt giữ đúng khoảng trống trong quá trình bố cục trang để loại bỏ Cumulative Layout Shift (CLS).',
      },
      {
        question: 'Tôi có nên giữ loading="lazy" trên ảnh Hero phía trên nếp gấp sau khi sao chép thẻ HTML không?',
        answer:
          'Với thẻ và ảnh dưới nếp gấp, loading="lazy" là lý tưởng. Với ảnh Hero / Banner LCP duy nhất hiển thị ngay khi tải, hãy gỡ loading="lazy" (hoặc đặt fetchpriority="high") trong mã để trình duyệt tải ngay lập tức.',
      },
      {
        question: 'Vì sao Social OG / Email chuyển Định Dạng Web từ WebP sang JPG?',
        answer:
          'Một số trình thu thập liên kết mạng xã hội, phiên bản Slack/Outlook cũ và nền tảng bản tin vẫn từ chối hoặc không hiển thị bản xem trước OpenGraph WebP đáng tin cậy. Chọn JPG 1200 px ở 82% cho tốc độ tải nhanh kèm thẻ xem trước vững chắc ở mọi nơi.',
      },
      {
        question: 'Vì sao Chỉ thu nhỏ ảnh lớn hơn bảo vệ icon UI và ảnh thu nhỏ?',
        answer:
          'Khi hộp chọn bật, tải ảnh đại diện tác giả 400×400 px trong khi chọn Sản Phẩm Thương Mại Điện Tử (Tối Đa 1200px) sẽ giữ ảnh đại diện ở 400×400 px thay vì làm mờ nó lên 1200 px. Bỏ chọn sẽ phóng tài nguyên nhỏ hơn lên cạnh dài đã chọn nếu thực sự cần.',
      },
      {
        question: 'Xoá siêu dữ liệu EXIF và GPS cắt bớt trọng lượng trang web ra sao?',
        answer:
          'Ảnh xuất từ máy ảnh thường nhúng 30 KB–150 KB bản xem trước thu nhỏ, lịch sử chỉnh sửa Lightroom và toạ độ GPS trong khối EXIF. Mã hoá lại trên HTML5 Canvas sẽ xoá sạch chi phí không phải pixel trước khi triển khai.',
      },
      {
        question: 'Vì sao tệp đã tải về tự động kết thúc bằng -web trong tên tệp?',
        answer:
          'Mỗi đầu ra thêm -web trước phần mở rộng, tạo tên tệp gọn như sneaker-web.webp. Nhờ vậy lập trình viên thả tài nguyên production vào thư mục public mà không ghi đè bản gốc độ phân giải cao.',
      },
      {
        question: 'Thuộc tính alt trong Sao Chép <img> được tạo ra sao?',
        answer:
          'Đoạn mã tự động xoá phần mở rộng tệp và chuyển dấu gạch ngang và gạch dưới từ tên tệp gốc thành khoảng trắng dễ đọc trong alt="...". Hãy tinh chỉnh thành cụm từ mô tả của con người khi dán vào HTML production.',
      },
      {
        question: 'Vì sao công cụ Tối Ưu Ảnh Cho Website mặc định là Sản Phẩm Thương Mại Điện Tử (Tối Đa 1200px · WebP 82%)?',
        answer:
          '1200 px rộng ở WebP 82% cho chất lượng zoom sản phẩm sắc nét trên cả điện thoại Retina và laptop tiêu chuẩn, đồng thời thu nhỏ tệp DSLR nhiều megabyte xuống 80%–95%. Nó tránh cả ảnh cắt 640 px quá mềm lẫn ảnh gốc 4000 px cồng kềnh.',
      },
      {
        question: 'Vì sao PNG nhỏ đã nén sẵn lại chuyển đỏ với cảnh báo Đã Tăng khi Định Dạng Web là PNG?',
        answer:
          'Mã hoá lại PNG nhỏ đã lập chỉ mục bảng màu qua HTML5 Canvas đầy màu mà không đổi kích thước có thể tạo PNG không mất dữ liệu hơi nặng hơn. Chuyển Định Dạng Web sang WebP để giữ độ trong suốt với một phần nhỏ trọng lượng byte.',
      },
      {
        question: 'Tôi có thể tối ưu hàng loạt 30 ảnh blog thô cho tốc độ Lighthouse trong một cú nhấp không?',
        answer:
          'Có. Thả tối đa 25 MB mỗi tệp trên bộ media blog của bạn, kiểm tra Tóm Tắt Hiệu Năng Web hiển thị tổng trọng lượng trang đã tiết kiệm, và lấy web_optimized_compressmypic.zip bất cứ khi nào 2 tệp trở lên hoàn thành.',
      },
      {
        question: 'Vì sao thanh trượt Chất Lượng giới hạn 20% đến 95% thay vì 100% ở đây?',
        answer:
          'Lưu WebP hoặc JPG ở chất lượng 100% làm trọng lượng byte phình theo cấp số nhân mà gần như không khác biệt về mặt thị giác trên màn hình web, gây hại Largest Contentful Paint (LCP). Giới hạn ở 95% giữ đồ hoạ Retina 2× sắc nét mà không vô tình tạo tải trọng 10 MB.',
      },
      {
        question: 'Đầu ra WebP có giữ nền trong suốt từ PNG và SVG đã tải lên không?',
        answer:
          'Có. Bất cứ khi nào Định Dạng Web đặt thành WEBP hoặc PNG, độ trong suốt alpha đầy đủ vẫn nguyên vẹn hoàn toàn, còn chọn JPG sẽ ghép vùng trong suốt lên trắng sạch (#ffffff).',
      },
      {
        question: 'Ảnh chụp màn hình site staging hay lần ra mắt sản phẩm chưa công bố có bị tải lên máy chủ ngoài không?',
        answer:
          'Không. Đổi kích thước theo mẫu, mã hoá WebP, gỡ EXIF và tạo thẻ HTML đều chạy hoàn toàn trong tab trình duyệt, giữ đồ hoạ marketing bị cấm tiết lộ riêng tư.',
      },
      {
        question: 'Tôi có thể tuỳ chỉnh hỗn hợp cài đặt sau khi bấm Mẫu Hiệu Năng Web không?',
        answer:
          'Có. Thay đổi thủ công Định Dạng Web, Kích Thước Tối Đa hoặc Chất Lượng sẽ chuyển chỉ báo mẫu đang bật gọn sang tuỳ chỉnh để bạn có thể bấm Tối Ưu Cho Web (N) với công thức riêng chính xác của mình.',
      },
      {
        question: 'Chuyện gì xảy ra nếu tôi tải trực tiếp ảnh HEIC của iPhone Apple cho blog?',
        answer:
          'WebAssembly phía máy khách giải mã ảnh HEIC và HEIF tối đa 25 MB gốc trong tab trình duyệt. Trình duyệt sau đó đổi kích thước chúng theo Kích Thước Tối Đa bạn chọn và mã hoá tài nguyên WebP hoặc JPG nhẹ sẵn sàng xuất bản.',
      },
      {
        question: 'Mẫu Thẻ / Ảnh Thu Nhỏ so với Đồ Hoạ Retina 2× ra sao?',
        answer:
          'Thẻ / Ảnh Thu Nhỏ giới hạn cạnh dài 640 px với WebP 75% để lưới lưu trữ nhiều thẻ siêu nhẹ. Ngược lại, Đồ Hoạ Retina 2× cho phép tối đa 1920 px ở WebP 88% để ảnh chụp màn hình trưng bày độ phân giải cao vẫn sắc nét.',
      },
      {
        question: 'Giữ Nguyên Kích Thước có vẫn nén và xoá siêu dữ liệu EXIF không?',
        answer:
          'Có. Chọn Giữ Nguyên Kích Thước giữ chiều rộng và chiều cao pixel nguyên vẹn trong khi vẫn chuyển sang Định Dạng Web bạn chọn, áp thanh trượt chất lượng và gỡ thẻ EXIF ẩn.',
      },
      {
        question: 'Tôi có thể xác minh trực quan chữ UI sắc nét trong ảnh chụp màn hình trước khi xuất bản lên tài liệu không?',
        answer:
          'Có. Bấm So Sánh trên bất kỳ thẻ nào để mở trình xem so sánh cạnh nhau, giúp bạn kiểm tra độ rõ của chữ trước khi triển khai.',
      },
      {
        question: 'Khi nào nên dùng công cụ tối ưu ảnh cho website này thay vì Nén Ảnh Hàng Loạt?',
        answer:
          'Dùng Nén Ảnh Hàng Loạt khi bạn muốn giữ nguyên kích thước trên kho lưu trữ hỗn hợp. Chọn công cụ tối ưu ảnh cho website này khi xây trang web production cần giới hạn kích thước responsive, mẫu WebP, xoá EXIF và thẻ HTML <img> sao chép được.',
      },
    ],
    relatedSlugs: [
      '/bulk-image-compressor',
      '/compress-image-to-100kb',
      '/image-resizer',
      '/image-converter',
    ],
  },
  {
    slug: '/gif-compressor',
    name: 'Nén Ảnh GIF',
    shortDescription: 'Nén GIF động bằng cách giảm màu bảng màu, thu nhỏ & bỏ khung.',
    category: 'compress',
    seoTitle: 'Nén Ảnh GIF Online Miễn Phí – Giảm Dung Lượng GIF Động',
    seoDescription:
      'Giảm ảnh động lặp lại với công cụ nén GIF miễn phí ngay trên trình duyệt. Hạ màu bảng màu, thu nhỏ kích thước hoặc bỏ khung thừa kèm xem trước trực tiếp.',
    h1: 'Nén Ảnh GIF Động Online Miễn Phí',
    subtitle:
      'Thu nhỏ ảnh động lặp GIF87a và GIF89a nặng gọn gàng ngay trong trình duyệt với công cụ nén ảnh GIF động miễn phí mà không biến chúng thành ảnh tĩnh. Dành cho Slack, Discord, marketer email và tác giả tài liệu xử lý tệp tối đa 30 MB, công cụ kết hợp ba đòn bẩy nén thật — Giới Hạn Màu Bảng Màu, Tỉ Lệ Xuất và Tối Ưu Tốc Độ Khung — với phát lại ảnh động trực tiếp cạnh nhau.',
    howToSteps: [
      {
        title: 'Thả GIF động hoặc tĩnh tối đa 30 MB',
        description:
          'Tải bất kỳ tệp .gif nào (tối đa 30 MB) vào vùng thả để giải mã khung, kích thước, phương thức xoá và độ trễ ngay trên máy.',
      },
      {
        title: 'Chọn mẫu nhanh hoặc chỉnh cài đặt tuỳ chỉnh',
        description:
          'Bấm Nhẹ (192 màu, 100%), Cân Bằng (96 màu, 85%) hoặc Thu Nhỏ Tối Đa (64 màu, 75%, bỏ mỗi khung thứ 2), hoặc chỉnh từng đòn bẩy thủ công.',
      },
      {
        title: 'Hạ Giới Hạn Màu Bảng Màu (16–256 màu)',
        description:
          'Kéo thanh trượt Giới Hạn Màu Bảng Màu từ 256 xuống 32 hoặc 16 màu (hoặc bấm nhanh 256, 128, 64, 32) để thu nhỏ bảng màu LZW.',
      },
      {
        title: 'Chỉnh Tỉ Lệ Xuất và Tối Ưu Tốc Độ Khung',
        description:
          'Chọn mẫu Tỉ Lệ Xuất (100%, 85%, 75%, 50% hoặc 25%) và tuỳ chọn bỏ mỗi khung thứ 2 hoặc 2 trong 3 khung trong khi tự giữ tốc độ phát thực.',
      },
      {
        title: 'Chạy Nén GIF và so sánh ảnh động trực tiếp',
        description:
          'Xem bản xem trước ảnh động Gốc so với Đã Nén trực tiếp cạnh nhau và xem lại byte chính xác, số khung và phần trăm tiết kiệm.',
      },
      {
        title: 'Tải GIF Đã Nén về',
        description:
          'Bấm Tải GIF Đã Nén để lưu <tên-tệp>_compressed.gif ngay trên máy, không qua máy chủ hay watermark.',
      },
    ],
    features: [
      {
        title: 'Mã hoá lại GIF thật ngay trên máy',
        description:
          'Giải mã khung GIF, phương thức xoá và số vòng lặp ngay trên máy, rồi mã hoá lại bằng lượng tử hoá màu tải lười — không tải lên máy chủ.',
      },
      {
        title: '3 đòn bẩy nén',
        description:
          'Thu nhỏ dung lượng qua giảm màu bảng màu (256 → 32 màu), thu nhỏ kích thước (100% → 25%) và bỏ khung thông minh.',
      },
      {
        title: 'Bỏ khung giữ nguyên thời gian',
        description:
          'Khi bỏ mỗi khung thứ 2 hoặc thứ 3, độ trễ khung giữ lại tự cộng dồn để tốc độ phát vẫn tự nhiên.',
      },
      {
        title: 'So sánh byte trung thực',
        description:
          'Hiển thị dung lượng tệp trước/sau và số khung chính xác — và nói rõ khi cần giảm bảng màu hay tỉ lệ mạnh hơn.',
      },
    ],
    faqs: [
      {
        question: 'Công cụ nén GIF này có giữ nguyên thời gian, số vòng lặp và chuyển động đầy đủ không?',
        answer:
          'Có. Công cụ giải mã từng khung GIF riêng lẻ, độ trễ mili giây từng khung, phương thức xoá và siêu dữ liệu vòng lặp ngay trên máy, rồi mã hoá lại thành tệp GIF89a động thật thay vì làm phẳng thành ảnh tĩnh.',
      },
      {
        question: 'Bỏ khung giữ tốc độ ảnh động tự nhiên ra sao thay vì phát nhanh?',
        answer:
          'Khi bạn chọn Bỏ Mỗi Khung Thứ 2 hoặc Giữ 1 Trong Mỗi 3 Khung, công cụ nén cộng tổng thời lượng mili giây của khung bị bỏ vào khung giữ lại. Tổng thời gian vòng lặp vẫn chính xác trong khi tổng dữ liệu khung giảm một nửa đến hai phần ba.',
      },
      {
        question: 'Nhẹ, Cân Bằng và Thu Nhỏ Tối Đa áp cài đặt chính xác nào?',
        answer:
          'Nhẹ đặt 192 màu bảng màu ở tỉ lệ 100% giữ mọi khung, còn Cân Bằng hạ xuống 96 màu và tỉ lệ 85% giữ mọi khung. Thu Nhỏ Tối Đa kết hợp 64 màu, tỉ lệ 75% và Bỏ Mỗi Khung Thứ 2 cho giới hạn tệp Discord hoặc Slack mạnh tay.',
      },
      {
        question: 'Vì sao lần nén Cân Bằng hoặc 128 màu đầu tiên của tôi lại hơi lớn hơn GIF tí hon có sẵn?',
        answer:
          'GIF đã tối ưu tốt tạo bởi công cụ máy tính thường dựa vào miếng vá hình chữ nhật bẩn tí hon giữa các khung, còn mã hoá lại bằng Canvas tạo khung đầy đủ đã lượng tử hoá sạch. Nếu thông báo màu hổ phách xuất hiện, hãy hạ Giới Hạn Màu Bảng Màu xuống 64 hoặc 32 màu, hạ Tỉ Lệ Xuất xuống 75% hoặc 50%, hoặc bỏ mỗi khung thứ 2.',
      },
      {
        question: 'Đòn bẩy nào cắt dung lượng tệp GIF động nhanh nhất mà không làm hỏng bản ghi màn hình?',
        answer:
          'Hạ Tỉ Lệ Xuất từ 100% xuống 75% hoặc 50% cắt diện tích pixel 44% đến 75% ngay lập tức trong khi giữ chữ UI đọc được. Kết hợp tỉ lệ 75% với 64–96 màu bảng màu đặc biệt hiệu quả cho screencast tài liệu.',
      },
      {
        question: 'Vì sao nút Tối Ưu Tốc Độ Khung bị tắt trên GIF 1 khung hoặc 2 khung?',
        answer:
          'Bỏ mỗi khung thứ hai hoặc thứ ba trên tệp 1 hoặc 2 khung sẽ không còn chuyển động nào. Các nút bỏ khung đó tự khoá bất cứ khi nào GIF đã giải mã có 2 khung trở xuống.',
      },
      {
        question: 'Dung lượng tệp GIF động lớn nhất mà công cụ Nén GIF hỗ trợ là bao nhiêu?',
        answer:
          'Bạn có thể tải ảnh động GIF87a hoặc GIF89a tối đa 30 MB mỗi tệp. Tiến độ hiển thị gọn là Đang Nén GIF (X%)... trong khi trình duyệt lượng tử hoá và mã hoá lại từng khung giữ lại.',
      },
      {
        question: 'Giảm Giới Hạn Màu Bảng Màu dưới 64 màu ảnh hưởng GIF phản ứng chụp ảnh khác với screencast UI ra sao?',
        answer:
          'Có. Ảnh động UI phần mềm phẳng với màu thương hiệu hạn chế vẫn sắc nét ở 32 hoặc 64 màu, còn clip video hành động trực tiếp với dải màu chuyển da sẽ bị poster hoá ở bảng màu rất thấp — nên hạ tỉ lệ hoặc tốc độ khung nhẹ thường sạch hơn cho clip phim.',
      },
      {
        question: 'Tôi có thể xem trước cả ảnh động gốc và đã nén cạnh nhau trước khi tải về không?',
        answer:
          'Có. Ngay bên dưới thanh tóm tắt byte tối, hai trình phát ảnh động trực tiếp hiển thị GIF Gốc và GIF Đã Nén đồng thời kèm kích thước pixel và dung lượng tệp chính xác để bạn phát hiện giật hay dải màu ngay lập tức.',
      },
      {
        question: 'Độ phân giải xuất tối thiểu khi chọn Tỉ Lệ Xuất 25% trên sticker GIF nhỏ là bao nhiêu?',
        answer:
          'Kích thước xuất được kẹp an toàn tối thiểu 16×16 pixel mỗi cạnh. Nhờ vậy sticker GIF phản ứng tí hon không sụp thành tệp không pixel dù chọn tỉ lệ 25%.',
      },
      {
        question: 'Tôi có thể chạy nhiều lần kiểm tra nén trên cùng GIF đã tải lên mà không tải lại trang không?',
        answer:
          'Có. Bộ đệm khung đã giải mã vẫn lưu trong bộ nhớ, nên bạn có thể chỉnh Giới Hạn Màu Bảng Màu (16–256), Tỉ Lệ Xuất hoặc Tối Ưu Tốc Độ Khung tự do rồi bấm Nén GIF lại trong vài giây.',
      },
      {
        question: 'Công cụ nén GIF chạy trong trình duyệt mà không tải ảnh động lớn lên máy chủ như thế nào?',
        answer:
          'Nó giải mã khung trực tiếp từ ArrayBuffer đã tải lên bằng JavaScript và tải lười bộ mã hoá GIF LZW nhẹ cùng bộ lượng tử hoá màu khi cần. Screencast Slack riêng tư, báo cáo lỗi và demo sản phẩm không bao giờ rời khỏi thiết bị của bạn.',
      },
      {
        question: 'Vì sao GIF nén ít ấn tượng hơn video MP4 cùng đoạn clip?',
        answer:
          'GIF là định dạng khung LZW 256 màu không mất dữ liệu từ năm 1989, không có bù chuyển động liên khung hiện đại. Kết hợp thu nhỏ vừa phải (75%–50%), bảng màu thấp hơn (64–96 màu) và bỏ khung 2× cho mức tiết kiệm byte tốt nhất có thể trong chuẩn .gif.',
      },
      {
        question: 'Nén GIF động có pixel trong suốt có giữ nền trong suốt không?',
        answer:
          'Có. Chỉ số trong suốt và phương thức xoá khung giải mã từ GIF nguồn được theo dõi qua các khung trong quá trình mã hoá lại bằng trình duyệt.',
      },
      {
        question: 'Tên tệp nào được dùng khi lưu ảnh động đã tối ưu?',
        answer:
          'Bấm Tải GIF Đã Nén sẽ xuất tên tệp đã làm sạch kết thúc bằng _compressed.gif, ví dụ demo_walkthrough_compressed.gif. Ảnh động gốc của bạn hoàn toàn không bị chạm tới trên ổ đĩa.',
      },
      {
        question: 'Tôi có thể thu nhỏ GIF để đáp ứng giới hạn tải lên 8 MB/10 MB của Discord hay Slack không?',
        answer:
          'Có. Thả bất kỳ ảnh động nào tối đa 30 MB, thử Cân Bằng hoặc Thu Nhỏ Tối Đa, kiểm tra số liệu Kích Thước Đã Nén trực tiếp ở đầu thẻ tóm tắt, và chỉnh Tỉ Lệ Xuất xuống 50% nếu bạn cần giảm trọng lượng thêm.',
      },
      {
        question: 'Đặt Lại có xoá sạch bộ nhớ khung đã lưu không?',
        answer:
          'Có. Bấm Đặt Lại sẽ thu hồi URL blob đang hoạt động và xoá bộ đệm khung đã giải mã khỏi bộ nhớ trình duyệt để bạn có thể tải GIF nặng khác một cách mượt mà.',
      },
      {
        question: 'Nén GIF khác Tạo Ảnh GIF ra sao?',
        answer:
          'Tạo Ảnh GIF xây ảnh động hoàn toàn mới từ ảnh tĩnh JPG, PNG hoặc WebP riêng lẻ. Ngược lại, công cụ nén GIF này nhận ảnh động .gif nặng có sẵn và thu nhỏ dung lượng tệp qua bảng màu, tỉ lệ và giảm khung.',
      },
      {
        question: 'Tôi có thể tải tệp .gif tĩnh một khung lên không?',
        answer:
          'Có. GIF tĩnh một khung tải dưới dạng tệp 1 khung, nơi bạn có thể thu nhỏ kích thước qua Tỉ Lệ Xuất và hạ Giới Hạn Màu Bảng Màu xuống 16 màu một cách gọn gàng.',
      },
      {
        question: 'Có áp watermark, giới hạn khung hay hàng đợi máy chủ nào cho GIF đã nén không?',
        answer:
          'Không. Nén thực thi ngay trên máy với tốc độ trình duyệt đầy đủ, không watermark, không đăng ký và chạy lại không giới hạn.',
      },
    ],
    relatedSlugs: ['/gif-maker', '/bulk-image-compressor', '/image-resizer', '/'],
  },
  {
    slug: '/heic-to-jpg',
    name: 'Chuyển HEIC Sang JPG',
    shortDescription: 'Chuyển ảnh HEIC/HEIF của iPhone Apple sang JPG phổ biến ngay trên trình duyệt.',
    category: 'convert',
    seoTitle: 'Chuyển HEIC Sang JPG Miễn Phí – Đổi Ảnh iPhone',
    seoDescription:
      'Chuyển ảnh HEIC của iPhone sang JPG cho người dùng Windows, ứng viên và phòng ảnh. Công cụ chuyển HEIC sang JPG miễn phí với giải mã WebAssembly ngay trên máy, riêng tư trong trình duyệt, xuất ZIP hàng loạt.',
    h1: 'Chuyển HEIC Sang JPG Online Miễn Phí',
    subtitle:
      'Windows không mở được ảnh HEIC của iPhone ngay khi xuất xưởng — hãy chuyển chúng thành tệp .jpg đọc được ở mọi nơi với công cụ chuyển HEIC sang JPG miễn phí, chạy ngay trên trình duyệt. Lý tưởng cho người dùng Windows, ứng viên và phòng ảnh từ chối định dạng Hiệu Suất Cao của Apple, công cụ giải mã tối đa 25 MB mỗi tệp qua WebAssembly phía máy khách với chất lượng chỉnh được và tải một ZIP hàng loạt.',
    howToSteps: [
      {
        title: 'Thả ảnh HEIC hoặc HEIF của Apple',
        description:
          'Chọn hoặc kéo một hoặc nhiều ảnh .heic hoặc .heif (tối đa 25 MB mỗi ảnh) thẳng từ iPhone, Mac, bản sao lưu đám mây hoặc thư mục Windows của bạn.',
      },
      {
        title: 'Chờ giải mã WebAssembly ngay trên máy',
        description:
          'Trang tải WebAssembly phía máy khách (heic2any) trực tiếp trong tab trình duyệt để giải mã container ảnh HEVC của Apple một cách riêng tư.',
      },
      {
        title: 'Chỉnh Chất Lượng Xuất JPG (20%–100%)',
        description:
          'Giữ mặc định gần như không mất dữ liệu 90% cho ảnh chân dung gia đình và bản in, hoặc trượt gần 75%–85% cho tệp đính kèm email nhẹ hơn, rồi bấm Chuyển Đổi Lại Tất Cả.',
      },
      {
        title: 'Xem lại kích thước pixel và so sánh dung lượng',
        description:
          'Kiểm tra số byte HEIC gốc so với JPG xuất trên từng thẻ và mở thanh trượt So Sánh để xác minh chi tiết sắc nét.',
      },
      {
        title: 'Tải tệp JPG hoặc Tải Tất Cả (ZIP)',
        description:
          'Lưu từng ảnh .jpg riêng lẻ trực tiếp hoặc bấm Tải Tất Cả (ZIP) để tải compressmypic_heic_to_jpg.zip trong một cú nhấp.',
      },
      {
        title: 'Tuỳ chọn: ngăn iPhone lưu ảnh mới dưới dạng HEIC',
        description:
          'Trên iPhone, mở Cài Đặt, vào Máy Ảnh, chạm Định Dạng và chọn Tương Thích Nhất để ảnh chụp sau lưu dưới dạng JPG. Ảnh HEIC hiện có của bạn vẫn chuyển đổi ở đây bất cứ lúc nào.',
      },
    ],
    features: [
      {
        title: 'Giải mã HEIC bằng WebAssembly ngay trên máy',
        description: 'Dùng heic2any trong tab trình duyệt nên ảnh camera roll riêng tư không bao giờ được tải lên máy chủ ngoài.',
      },
      {
        title: 'Chuyển đổi hàng loạt + xuất ZIP',
        description: 'Chuyển cả thư mục ảnh HEIC của iPhone sang JPG trong một hàng đợi và lấy mọi thứ trong một ZIP.',
      },
      {
        title: 'Thanh trượt chất lượng JPG tuỳ chỉnh',
        description: 'Chỉnh mức nén xuất từ 20% đến 100% tuỳ bạn ưu tiên chi tiết hay dung lượng tệp tí hon.',
      },
      {
        title: 'Riêng tư EXIF bị Canvas xoá',
        description: 'Mã hoá lại bằng Canvas tự nhiên xoá toạ độ GPS ẩn và siêu dữ liệu serial máy ảnh.',
      },
    ],
    faqs: [
      {
        question: 'Vì sao PC Windows, phần mềm cũ và biểu mẫu tải lên từ chối ảnh .heic từ iPhone?',
        answer:
          'Apple áp dụng container HEIC (xây trên nén video HEVC) từ iOS 11 để tiết kiệm dung lượng trên iPhone và iPad. Windows 10 và 11 không kèm codec HEVC mặc định — Microsoft bán riêng dưới dạng HEVC Video Extensions — nên Windows Photos, cổng chính phủ, backend CMS và trình chỉnh sửa máy tính không mở được tệp .heic. Chuyển HEIC sang JPG chuẩn giúp ảnh của bạn mở được ở mọi nơi ngay lập tức, không cần cài codec.',
      },
      {
        question: 'Công cụ chuyển HEIC sang JPG này giải mã tệp Apple trong trình duyệt web chuẩn như thế nào?',
        answer:
          'Hầu hết trình duyệt không thể hiển thị pixel HEIC gốc trong thẻ ảnh chuẩn trên Windows hay Linux. Công cụ này chạy bộ giải mã WebAssembly heic2any phía máy khách ngay trong tab của bạn để trình duyệt dịch luồng HEIC thành pixel RGB gọn gàng mà không cần máy chủ đám mây từ xa.',
      },
      {
        question: 'Ảnh camera roll cá nhân, selfie CMND hay kỳ nghỉ gia đình có bị tải lên đâu trong quá trình chuyển đổi không?',
        answer:
          'Không bao giờ. Cả bước giải mã HEIC bằng WebAssembly lẫn bước mã hoá JPEG bằng HTML5 Canvas đều diễn ra ngay trong bộ nhớ trình duyệt, nên ảnh cá nhân không bao giờ rời khỏi máy tính hay điện thoại của bạn.',
      },
      {
        question: '.heic và .heif khác nhau ra sao ở đây?',
        answer:
          'HEIF là chuẩn Định Dạng Tệp Ảnh Hiệu Suất Cao nền tảng, còn HEIC là phần mở rộng tên tệp của Apple cho container HEIF mã hoá HEVC. Cả hai phần mở rộng .heic và .heif (và loại MIME tương ứng) đều được chấp nhận và giải mã liền mạch thành .jpg.',
      },
      {
        question: 'Vì sao tệp JPG đã chuyển đổi thường lớn hơn tính bằng megabyte so với HEIC gốc?',
        answer:
          'Mã hoá HEVC của Apple đóng gói dữ liệu ảnh chặt gấp đôi JPEG cổ điển ở chất lượng hình ảnh tương tự. Mở rộng HEIC 1,8 MB thành JPG 90% chi tiết cao thường cho tệp 2,5 MB–3,5 MB — và hạ Chất Lượng Xuất JPG về 80% giúp cắt bớt dung lượng đó nếu cần.',
      },
      {
        question: 'Vì sao 90% được đặt làm Chất Lượng Xuất JPG mặc định cho ảnh iPhone?',
        answer:
          'Ở 90%, JPEG chuẩn giữ kết cấu da mảnh, chi tiết tóc và bokeh nền chế độ chân dung mà không có khối nén rõ rệt. Bạn có thể trượt bất kỳ đâu từ 20% đến 100% và bấm Chuyển Đổi Lại Tất Cả bất cứ lúc nào.',
      },
      {
        question: 'Chuyển Live Photo (.heic) của iPhone có giữ chuyển động video hay xuất ảnh JPG tĩnh?',
        answer:
          'Khi bạn tải thành phần .heic tĩnh từ Live Photo của iPhone, bộ giải mã trích khung độ phân giải cao đó và xuất thành ảnh .jpg phổ biến. Track video chuyển động trong clip MOV ghép đôi không được gói vào JPEG tĩnh.',
      },
      {
        question: 'Tôi có thể thả cả album kỳ nghỉ gồm tệp HEIC và tải một ZIP không?',
        answer:
          'Có. Chọn hàng chục tệp .heic hoặc .heif (tối đa 25 MB mỗi tệp) trong một lần, chờ trình duyệt giải mã từng ảnh ngay trên máy, rồi bấm Tải Tất Cả (ZIP) để lưu compressmypic_heic_to_jpg.zip.',
      },
      {
        question: 'Toạ độ GPS và thẻ vị trí của iPhone Apple có giữ trong JPG đã xuất không?',
        answer:
          'Không. Mã hoá qua HTML5 Canvas sẽ xoá vị trí GPS EXIF nhúng, số serial máy ảnh và dấu thời gian tự động — cho bạn thêm riêng tư trước khi đăng JPG đã chuyển đổi lên mạng.',
      },
      {
        question: 'Vì sao giải mã HEIC 48 megapixel của iPhone mất một hai giây mỗi tệp?',
        answer:
          'Giải nén HEVC trong WebAssembly cần phép toán CPU nặng hơn giải mã JPEG chuẩn, và khung iPhone Pro 48MP giữ gấp bốn lần pixel so với ảnh 12MP. Xử lý loạt ảnh ngay trên máy nghĩa là tốc độ chuyển đổi phụ thuộc bộ xử lý thiết bị của bạn thay vì băng thông tải lên.',
      },
      {
        question: 'Hướng dọc so với ngang của máy ảnh iPhone ra sao trong quá trình chuyển HEIC sang JPG?',
        answer:
          'Trình duyệt hiện đại đọc cờ hướng nhúng khi giải mã ảnh lên Canvas. Nhờ vậy selfie dọc và ảnh ngang xuất thẳng đứng mà không xoay ngang.',
      },
      {
        question: 'Tôi có cần mua HEVC Video Extensions của Microsoft để mở HEIC trên Windows không?',
        answer:
          'Chỉ khi bạn muốn chính Windows mở được tệp .heic: codec HEVC là tiện ích trả phí trong Microsoft Store trên hầu hết bản cài Windows, và một số PC được nhà sản xuất kèm miễn phí. Chuyển sang JPG ở đây tránh hoàn toàn codec — ảnh của bạn mở trong Windows Photos, trình duyệt và biểu mẫu tải lên mà không cần cài đặt hay mua gì.',
      },
      {
        question: 'Dung lượng tối đa mỗi ảnh HEIC hoặc HEIF được chấp nhận ở đây là bao nhiêu?',
        answer:
          'Tệp riêng lẻ tối đa 25 MB được hỗ trợ trong hàng đợi. Giới hạn đó dễ dàng bao phủ ảnh máy ảnh HEIC iPhone 12 MP, 24 MP và 48 MP tiêu chuẩn.',
      },
      {
        question: 'Tôi có thể so sánh trực quan JPG đã giải mã với bản xem trước HEIC gốc trước khi lưu không?',
        answer:
          'Có. Bấm bất kỳ ảnh thu nhỏ kết quả nào hoặc nút So Sánh để xác minh độ sắc nét cạnh nhau trong cửa sổ so sánh tương tác.',
      },
      {
        question: 'Màu gam rộng Display P3 của iPhone có trông chính xác sau khi chuyển sang JPG không?',
        answer:
          'Trong quá trình hiển thị Canvas của trình duyệt, màu gam rộng ánh xạ gọn vào không gian JPEG sRGB chuẩn. Nhờ vậy màu hiển thị nhất quán trên màn hình Windows, trình duyệt web và ki-ốt in ảnh mà không bị lệch nhạt.',
      },
      {
        question: 'Làm sao ngăn ảnh iPhone sau này lưu dưới dạng HEIC thay vì JPG?',
        answer:
          'Trên iPhone, bạn có thể mở Cài Đặt, vào Máy Ảnh, chạm Định Dạng và chọn Tương Thích Nhất cho ảnh chụp mới. Tuy nhiên, giữ Hiệu Suất Cao tiết kiệm khoảng một nửa dung lượng điện thoại — và bạn có thể chuyển đổi loạt HEIC cụ thể sang JPG bất cứ lúc nào ngay tại đây.',
      },
      {
        question: 'Tôi có mất độ phân giải pixel khi biến HEIC 4032×3024 thành JPG không?',
        answer:
          'Không. JPG xuất giữ 100% chiều rộng và chiều cao pixel đã giải mã nguyên vẹn trừ khi bạn chọn đổi kích thước riêng sau đó.',
      },
      {
        question: 'Tôi có thể dán hoặc chuyển đổi tệp HEIC từ trình duyệt Android, Chromebook, Linux hay Windows không?',
        answer:
          'Có. Vì WebAssembly heic2any chạy trong Chrome, Firefox, Edge và Safari bất kể hệ điều hành, bạn có thể mở và chuyển đổi tệp đính kèm .heic của iPhone gọn gàng ngay cả trên máy Linux hay Windows mà không cần cài tiện ích.',
      },
      {
        question: 'Tôi nên làm gì nếu cần thu nhỏ JPG mới chuyển đổi xuống dưới 100 KB cho cổng việc làm?',
        answer:
          'Hoặc hạ Chất Lượng Xuất JPG ngay tại đây và bấm Chuyển Đổi Lại Tất Cả để cắt dung lượng tệp nhanh. Nếu vẫn cần nhắm byte chính xác, hãy nhảy thẳng tới công cụ Nén Ảnh Xuống 100KB qua các công cụ liên kết.',
      },
      {
        question: 'Công cụ chuyển đổi này có chấp nhận tệp JPG hoặc PNG nữa không, hay chỉ HEIC và HEIF?',
        answer:
          'Trang này cố tình chỉ lọc đầu vào .heic và .heif để loạt ảnh Apple giữ gọn. Cần định dạng khác nữa? Dùng công cụ Chuyển Đổi Ảnh chung cho JPG, PNG, WebP, HEIC, SVG, BMP, GIF và AVIF trong một hàng đợi.',
      },
    ],
    relatedSlugs: ['/image-converter', '/bulk-image-converter', '/jpg-to-webp', '/remove-image-metadata'],
  },
  {
    slug: '/jpg-to-png',
    name: 'Chuyển JPG Sang PNG',
    shortDescription: 'Chuyển ảnh JPG/JPEG sang ảnh PNG không mất dữ liệu ngay trên trình duyệt.',
    category: 'convert',
    seoTitle: 'Chuyển JPG Sang PNG Miễn Phí – Không Mất Chất Lượng',
    seoDescription:
      'Đổi ảnh JPEG thành tệp không mất dữ liệu với công cụ chuyển JPG sang PNG miễn phí. Chuyển đổi ảnh đơn lẻ hoặc hàng loạt ngay trên trình duyệt với độ trung thực pixel và xuất ZIP.',
    h1: 'Chuyển JPG Sang PNG Online Miễn Phí',
    subtitle:
      'Chuyển ảnh .jpg và .jpeg chuẩn gọn gàng thành tệp .png không mất dữ liệu bằng công cụ chuyển JPG sang PNG miễn phí chạy trực tiếp trong trình duyệt. Dành cho cửa hàng in, biên tập đồ hoạ và biểu mẫu web yêu cầu nghiêm ngặt tải lên PNG, công cụ khoá pixel hiện có mà không gây thêm hư hại nén lossy trên loạt ảnh tối đa 25 MB mỗi ảnh kèm xuất ZIP tức thì.',
    howToSteps: [
      {
        title: 'Thả ảnh JPG hoặc JPEG tối đa 25 MB mỗi ảnh',
        description:
          'Tải lên một hoặc nhiều ảnh .jpg hoặc .jpeg từ máy tính, điện thoại hoặc thẻ máy ảnh vào vùng thả tải lên.',
      },
      {
        title: 'Xác nhận chế độ Mã Hoá PNG Không Mất Dữ Liệu',
        description:
          'Lưu ý thanh trượt chất lượng tự ẩn và hiển thị bảng Mã Hoá PNG Không Mất Dữ Liệu vì PNG không bao giờ gây vết nén lossy.',
      },
      {
        title: 'Kiểm tra kích thước JPG gốc so với PNG đã chuyển đổi',
        description:
          'Xem lại kích thước pixel và số byte trên từng thẻ tệp, rồi mở So Sánh để xác minh độ trung thực pixel cạnh nhau.',
      },
      {
        title: 'Thêm tệp JPEG bất cứ lúc nào hoặc gỡ trường hợp ngoại lệ',
        description:
          'Thả thêm tệp .jpg vào phiên đang hoạt động hoặc gỡ từng thẻ bằng nút thùng rác trước khi gói.',
      },
      {
        title: 'Tải PNG riêng lẻ hoặc Tải Tất Cả (ZIP)',
        description:
          'Bấm Tải PNG trên bất kỳ thẻ kết quả nào hoặc Tải Tất Cả (ZIP) để lưu compressmypic_jpg_to_png.zip ngay trên máy.',
      },
    ],
    features: [
      {
        title: 'Đầu ra PNG không mất dữ liệu thật',
        description: 'Ngăn hư hại lossy thế hệ thêm khi chuẩn bị ảnh cho chỉnh sửa tiếp hay lưu trữ.',
      },
      {
        title: 'Hàng đợi hàng loạt & đóng gói ZIP',
        description: 'Chuyển nhiều JPEG sang PNG cùng lúc và xuất chúng trong một ZIP gọn gàng.',
      },
      {
        title: 'Không watermark hay đăng ký',
        description: 'Chuyển đổi không giới hạn trực tiếp trong Chrome, Firefox, Safari hoặc Edge mà không cần tạo tài khoản.',
      },
      {
        title: 'Xử lý 100% ngay trên máy',
        description: 'Ảnh ở trong tab trình duyệt của bạn — không chạm tới máy chủ từ xa.',
      },
    ],
    faqs: [
      {
        question: 'Vì sao thanh trượt chất lượng biến mất trên công cụ chuyển JPG sang PNG này?',
        answer:
          'Không giống JPEG hay WebP, PNG dùng nén DEFLATE không mất dữ liệu, nơi mọi pixel được mã hoá giống hệt nhau mà không có đánh đổi phần trăm chất lượng. Thay thanh trượt bằng thẻ Mã Hoá PNG Không Mất Dữ Liệu giúp tránh phỏng đoán gây hiểu lầm.',
      },
      {
        question: 'Nếu chuyển JPG sang PNG là không mất dữ liệu, vì sao nó không xoá được khối JPEG mờ vốn có?',
        answer:
          'PNG không mất dữ liệu đóng băng đúng pixel hiện đang lưu trong JPEG của bạn để không xảy ra thêm mất mát thế hệ khi bạn chỉnh sửa, cắt hay lưu lại tệp sau này. Tuy nhiên, nó không thể tái tạo kỳ diệu kết cấu mảnh vốn đã bị loại bỏ khi ảnh máy ảnh gốc được lưu dưới dạng JPG.',
      },
      {
        question: 'Vì sao JPG 300 KB thường phình thành PNG 1,5 MB–3 MB sau khi chuyển đổi?',
        answer:
          'JPEG vứt bỏ biến thiên màu tinh tế trên khối pixel 8×8 để giữ nhỏ, còn PNG ghi dữ liệu pixel RGB không mất dữ liệu chính xác trên toàn bộ khung. Ảnh chụp tông liên tục tự nhiên cần nhiều byte hơn trong PNG không mất dữ liệu so với JPG đã nén.',
      },
      {
        question: 'Khi nào chuyển JPG sang PNG thực sự hữu ích dù dung lượng tệp lớn hơn?',
        answer:
          'Chuyển sang PNG là cần thiết khi nhà cung cấp in, trình nhập UI phần mềm, cổng huy hiệu hay trình chỉnh sửa pixel-art yêu cầu nghiêm ngặt tệp .png. Nó cũng bảo vệ ảnh khi bạn dự định phủ chữ sắc nét và chỉnh sửa lặp lại mà không cộng dồn vết nén lại JPEG.',
      },
      {
        question: 'Chuyển JPG có nền trắng đặc sang PNG có làm nền đó trong suốt không?',
        answer:
          'Không. Tệp JPEG chuẩn không lưu thông tin trong suốt alpha nào, nên chuyển JPG sang PNG tạo ảnh .png hoàn toàn không trong suốt, giữ nền trắng. Nếu bạn cần cắt alpha, hãy gỡ nền bằng bất kỳ ứng dụng gỡ nền nào trước, rồi chuyển ảnh trong suốt.',
      },
      {
        question: 'Vì sao bạn không nên chỉ đổi phần mở rộng tệp .jpg thành .png thủ công?',
        answer:
          'Chỉ thay hậu tố tên tệp sẽ để lại byte nhị phân JPEG thô bên trong, khiến bộ kiểm tra tải lên nghiêm ngặt, trình tải canvas HTML và phần mềm in từ chối hoặc không mở được tệp. Chạy giải mã Canvas thật và mã hoá lại PNG sẽ ghi khối và tiêu đề PNG hợp lệ.',
      },
      {
        question: 'Tệp PNG đã chuyển đổi có giữ đúng chiều rộng và chiều cao pixel từ JPEG gốc không?',
        answer:
          'Có. Mọi tệp .png đã xuất duy trì 100% chiều rộng và chiều cao tự nhiên của JPG nguồn mà không cắt hay đổi kích thước tự động.',
      },
      {
        question: 'Tôi có thể chuyển đổi hàng loạt 20 bản scan JPG thành tệp PNG và lưu một ZIP không?',
        answer:
          'Có. Thả nhiều tệp .jpg hoặc .jpeg (tối đa 25 MB mỗi tệp) cùng nhau, chờ một lát trong khi trình duyệt mã hoá từng PNG ngay trên máy, rồi bấm Tải Tất Cả (ZIP) để tải compressmypic_jpg_to_png.zip.',
      },
      {
        question: 'Chuyển JPG sang PNG có gỡ thẻ EXIF ẩn của máy ảnh và siêu dữ liệu GPS không?',
        answer:
          'Có. Giải mã JPEG lên HTML5 Canvas và ghi PNG mới sẽ loại bỏ tiêu đề EXIF của JPEG, mẫu máy ảnh và toạ độ GPS tự động.',
      },
      {
        question: 'CMND scan, hoá đơn hay chân dung cá nhân có bị gửi lên máy chủ ngoài trong quá trình chuyển PNG không?',
        answer:
          'Không bao giờ. Giải mã JPEG, vẽ Canvas, mã hoá PNG DEFLATE và lưu trữ ZIP đều chạy hoàn toàn trong bộ nhớ trình duyệt trên máy tính hoặc điện thoại của bạn.',
      },
      {
        question: 'Chuyện gì xảy ra nếu đầu vào của tôi là JPEG lưu bằng màu in CMYK thay vì RGB?',
        answer:
          'Trình duyệt hiện đại chuyển luồng pixel JPEG thành không gian màu RGBA sRGB 8-bit chuẩn khi vẽ lên HTML5 Canvas. Nhờ vậy tệp .png xuất hiển thị chính xác trên trình duyệt web, slide và màn hình di động.',
      },
      {
        question: 'Cột Thay Đổi hiển thị tăng dung lượng tệp một cách gọn gàng ra sao?',
        answer:
          'Biến JPG đã nén thành PNG không mất dữ liệu gần như luôn làm tăng dung lượng byte. Vì vậy, ô Thay Đổi của mỗi thẻ báo trung thực đúng chênh lệch +X% dương kèm dung lượng byte JPG gốc và PNG cuối cùng.',
      },
      {
        question: 'Tôi có thể dùng trình xem So Sánh để xác nhận không lệch màu giữa JPG và PNG không?',
        answer:
          'Có. Bấm bất kỳ ảnh thu nhỏ thẻ nào hoặc nút So Sánh để kiểm tra pixel cạnh nhau trong rèm tách tương tác trước khi tải về.',
      },
      {
        question: 'Vì sao PNG đã chuyển đổi giúp ích trước khi chạy nhiều vòng chú thích hay phủ chữ?',
        answer:
          'Lưu lại JPEG lặp lại làm giảm nhẹ cạnh mỗi lần lượng tử hoá lossy chạy lại. Chuyển tài nguyên nguồn sang PNG một lần tạo bản gốc trung gian không mất dữ liệu, chịu được chỉnh sửa đồ hoạ lặp lại một cách gọn gàng.',
      },
      {
        question: 'Cả hai phần mở rộng .jpg và .jpeg đều được chấp nhận liền mạch không?',
        answer:
          'Có. Vùng tải lên chấp nhận cả hai phần mở rộng .jpg và .jpeg và xuất tệp .png chuẩn, giữ tên gốc đã làm sạch của bạn.',
      },
      {
        question: 'Tôi có thể chuyển đổi ảnh PNG, WebP hay HEIC trên trang cụ thể này không?',
        answer:
          'Trang này cố tình chỉ chấp nhận đầu vào JPG/JPEG cho bước chuyển đổi đơn lẻ gọn sang PNG. Dùng công cụ Chuyển Đổi Ảnh hoặc Chuyển Đổi Ảnh Hàng Loạt nếu thư mục nguồn của bạn gồm định dạng tệp khác.',
      },
      {
        question: 'Dung lượng tối đa cho phép mỗi JPEG đã tải lên là bao nhiêu?',
        answer:
          'Mỗi tệp .jpg hoặc .jpeg riêng lẻ có thể tối đa 25 MB. Giới hạn hào phóng đó dễ dàng bao phủ ảnh xuất độ phân giải cao, ảnh DSLR và tác phẩm nghệ thuật số rộng.',
      },
      {
        question: 'Vì sao ảnh chân dung lưu dưới dạng .jpg lại xuất thẳng đứng dù chụp nghiêng trên máy ảnh?',
        answer:
          'Trình duyệt hiện đại tự đọc thẻ hướng EXIF nhúng trong lúc vẽ JPEG đã giải mã lên HTML5 Canvas. Nhờ vậy hướng thẳng đứng được nướng vĩnh viễn vào pixel PNG mới để hiển thị đúng chiều trong mọi ứng dụng.',
      },
      {
        question: 'PNG đã xuất có mở được trong Photoshop, Illustrator, Figma, Canva và PowerPoint không?',
        answer:
          'Có. Tệp .png RGBA 8-bit chuẩn tạo bởi HTML5 Canvas tương thích phổ biến trên mọi ứng dụng thiết kế máy tính, bộ office, trình duyệt và hệ điều hành di động.',
      },
      {
        question: 'Chuyển đổi JPG sang PNG trên trình duyệt nhanh ra sao so với công cụ chuyển đổi đám mây?',
        answer:
          'Vì không có thời gian chờ tải lên hay tải xuống với ảnh nhiều megabyte, chuyển đổi Canvas ngay trên máy hoàn thành trong vài mili giây mỗi tệp trực tiếp trên CPU của bạn. Loạt ảnh hoàn thành nhanh mà không cần chờ trong hàng đợi máy chủ từ xa.',
      },
    ],
    relatedSlugs: ['/png-to-jpg', '/jpg-to-webp', '/image-converter', '/add-background-to-image'],
  },
  {
    slug: '/png-to-jpg',
    name: 'Chuyển PNG Sang JPG',
    shortDescription: 'Chuyển PNG nặng thành JPG nhẹ với màu nền lót tuỳ chỉnh.',
    category: 'convert',
    seoTitle: 'Chuyển PNG Sang JPG Miễn Phí – Giảm Dung Lượng PNG & Chọn Màu Nền',
    seoDescription:
      'Biến tệp PNG nặng thành ảnh nhẹ với công cụ chuyển PNG sang JPG miễn phí. Chọn màu lót tuỳ chỉnh cho vùng trong suốt, chỉnh chất lượng và lưu ZIP.',
    h1: 'Chuyển PNG Sang JPG Online Miễn Phí',
    subtitle:
      'Thu nhỏ ảnh chụp màn hình PNG cồng kềnh, ảnh chụp Retina và ảnh xuất đồ hoạ thành tệp .jpg nhanh, nhẹ với công cụ chuyển PNG sang JPG miễn phí ngay trên trình duyệt. Dành cho blogger, marketer và người gửi email phải xử lý tệp đính kèm PNG quá khổ tối đa 25 MB mỗi ảnh, công cụ kết hợp thanh trượt chất lượng với bộ chọn Màu Nền Lót PNG Trong Suốt tuỳ chỉnh để vùng alpha không bao giờ hoá đen đặc.',
    howToSteps: [
      {
        title: 'Thả ảnh PNG tối đa 25 MB mỗi ảnh',
        description:
          'Tải lên một hoặc nhiều ảnh chụp màn hình .png, bản render sản phẩm hoặc ảnh cắt trong suốt vào vùng thả.',
      },
      {
        title: 'Chọn Màu Nền Lót PNG Trong Suốt',
        description:
          'Bấm Trắng (#ffffff), Đen (#000000), Xám Nhạt (#f8fafc) hoặc bảng màu gốc để điều khiển pixel trong suốt hoà phẳng phía sau chủ thể không trong suốt ra sao.',
      },
      {
        title: 'Đặt Chất Lượng Xuất JPG (20%–100%)',
        description:
          'Giữ mặc định sắc nét 88% hoặc kéo từ 20% (tệp tí hon) đến 100% (chi tiết tối đa), rồi bấm Chuyển Đổi Lại Tất Cả.',
      },
      {
        title: 'Xác minh tiết kiệm byte và cạnh sắc qua So Sánh',
        description:
          'Kiểm tra phần trăm tiết kiệm trên từng thẻ và xem chữ hay cạnh sản phẩm trong trình xem so sánh trước–sau tương tác.',
      },
      {
        title: 'Tải tệp JPG hoặc Tải Tất Cả (ZIP)',
        description:
          'Lưu ngay từng ảnh .jpg đã chuyển đổi riêng lẻ hoặc gói loạt ảnh cùng nhau vào compressmypic_png_to_jpg.zip.',
      },
    ],
    features: [
      {
        title: 'Lấp lót trong suốt tuỳ chỉnh',
        description: 'Vùng PNG trong suốt hoà gọn lên nền trắng, đen hoặc bất kỳ màu nền tuỳ chỉnh nào thay vì hoá đen đặc.',
      },
      {
        title: 'Giảm dung lượng tệp lớn',
        description: 'Chuyển PNG chụp ảnh sang JPG 85% thường thu nhỏ trọng lượng tệp 60–85% ngay lập tức.',
      },
      {
        title: 'Trình kiểm tra trực quan trước/sau',
        description: 'Xác minh độ sắc nét cạnh nhau trước khi tải về để chữ và cạnh vẫn sắc.',
      },
      {
        title: 'Thực thi riêng tư ngay trên trình duyệt',
        description: 'Ảnh chụp màn hình và tài liệu bảo mật ở an toàn trên máy tính của bạn.',
      },
    ],
    faqs: [
      {
        question: 'Vì sao ảnh chụp màn hình macOS và Windows lưu dưới dạng PNG nhiều megabyte lại thu nhỏ mạnh thành JPG?',
        answer:
          'Hệ điều hành máy tính mặc định PNG không mất dữ liệu cho ảnh chụp màn hình, lưu hàng triệu pixel màn hình Retina chưa nén một cách trung thực — thường vượt 3 MB đến 8 MB mỗi ảnh. Chuyển PNG chụp ảnh hoặc UI phong phú thành JPG 85%–90% thường cắt 60% đến 85% trọng lượng tệp cho email và chia sẻ Slack nhanh.',
      },
      {
        question: 'Bộ chọn Màu Nền Lót PNG Trong Suốt ngăn hộp đen xấu xí ra sao?',
        answer:
          'Vì chuẩn JPEG không có kênh trong suốt alpha, công cụ chuyển đổi ngây thơ thường mặc định pixel alpha trống thành đen #000000, làm hỏng logo tối hay ảnh cắt có bóng. Vẽ màu lót bạn chọn (mặc định trắng, cộng đen, xám nhạt hay bất kỳ hex tuỳ chỉnh nào) lên canvas trước sẽ hoà cạnh bán trong suốt một cách gọn gàng.',
      },
      {
        question: 'Tôi có thể chọn màu than đậm hay màu thương hiệu website cụ thể phía sau logo PNG trong suốt trước khi lưu JPG không?',
        answer:
          'Có. Bấm ô nhập màu bên cạnh nút nhanh Trắng, Đen và Xám Nhạt trong mục Màu Nền Lót PNG Trong Suốt để chọn bất kỳ giá trị hex chính xác nào, rồi bấm Chuyển Đổi Lại Tất Cả để xem trước và xuất.',
      },
      {
        question: 'Phần trăm Chất Lượng Xuất JPG nào giữ chữ ảnh chụp màn hình sắc nét mà không làm tệp cồng kềnh?',
        answer:
          'Giữ Chất Lượng Xuất JPG quanh 88% (mặc định) đến 95% giúp cạnh sắc quanh chữ UI phần mềm và biểu đồ sạch. Hạ dưới 70% có thể gây nhiễu muỗi mờ quanh chữ đỏ hoặc xanh tương phản cao do lấy mẫu màu phụ JPEG.',
      },
      {
        question: 'Vì sao icon PNG đơn sắc phẳng tí hon 20 KB lại thực ra hơi tăng khi chuyển sang JPG 88%?',
        answer:
          'PNG bảng màu đã lập chỉ mục vượt trội với đồ hoạ phẳng hai màu có vùng đặc sắc nét, còn khối cosin 8×8 của JPEG thêm chi phí trên logo tí hon. Luôn kiểm tra cột Thay Đổi — với icon phẳng trong suốt dành cho website, WebP hoặc giữ PNG thường nhỏ hơn JPG.',
      },
      {
        question: 'Tôi nên quyết định giữa PNG sang JPG và PNG sang WebP ra sao?',
        answer:
          'Chọn PNG sang JPG khi tệp đính kèm phải mở trong Microsoft Word, trình tạo PDF, chương trình email đời cũ, phòng in hay cổng từ chối WebP, hoặc khi bạn cố tình cần nền trắng đặc. Chọn PNG sang WebP khi triển khai tài nguyên lên website, nơi giữ độ trong suốt và tốc độ tối đa quan trọng.',
      },
      {
        question: 'Chuyển ảnh cắt sản phẩm trong suốt lên nền trắng #ffffff có giúp danh sách sàn thương mại không?',
        answer:
          'Có. Sàn như Amazon và eBay thường thích ảnh thu nhỏ sản phẩm chính JPG nền trắng không trong suốt sắc nét hơn PNG alpha, và trắng nén rất hiệu quả trong JPEG.',
      },
      {
        question: 'Tôi có thể chuyển cả loạt 25 ảnh chụp màn hình PNG Retina sang JPG cùng lúc không?',
        answer:
          'Có. Thả nhiều tệp .png tối đa 25 MB mỗi tệp vào hàng đợi, chọn chất lượng và màu lót, rồi tải mọi thứ cùng nhau trong compressmypic_png_to_jpg.zip.',
      },
      {
        question: 'Chuyện gì xảy ra với bóng đổ mềm quanh ảnh chụp cửa sổ PNG trong suốt khi làm phẳng sang JPG?',
        answer:
          'Bóng đổ hoà alpha tổng hợp tự nhiên trên Màu Lót bạn chọn thay vì cắt thành đường viền răng cưa cứng. Nhờ vậy tạo bóng mượt mà, sạch trên nền trắng hoặc nền nhuộm, sẵn sàng cho slide và bài viết.',
      },
      {
        question: 'Dashboard bảo mật, hoá đơn hay mockup thiết kế có bị tải lên API đám mây không?',
        answer:
          'Không. Ghép lót Canvas, nén JPEG và tạo ZIP đều thực thi ngay trong tab trình duyệt, nên ảnh chụp nhạy cảm không bao giờ rời khỏi máy tính của bạn.',
      },
      {
        question: 'Chuyển PNG sang JPG có thay đổi chiều rộng hay chiều cao pixel không?',
        answer:
          'Không. Mọi tệp .jpg đã chuyển đổi giữ 100% chiều rộng và chiều cao chính xác của PNG gốc. Dùng công cụ Đổi Kích Thước Ảnh hoặc Đổi Kích Thước Ảnh Hàng Loạt nếu bạn cũng muốn thu nhỏ ảnh chụp Retina xuống kích thước 1×.',
      },
      {
        question: 'Vì sao thanh trượt chất lượng kéo dài 20% đến 100%?',
        answer:
          'Kéo về 20% cho thấy nén mạnh cắt dung lượng ra sao khi bắt buộc tệp siêu nhỏ, còn 85%–90% chạm điểm ngọt thị giác cho ảnh và slide sắc nét. Chọn 100% cho chi tiết JPEG tối đa bất cứ khi nào trọng lượng byte là thứ yếu.',
      },
      {
        question: 'Tôi có thể đổi Màu Lót hoặc Chất Lượng sau khi xem kết quả chuyển đổi đầu tiên không?',
        answer:
          'Có. Chọn mẫu lót khác hoặc di chuyển thanh trượt bất cứ lúc nào rồi bấm Chuyển Đổi Lại Tất Cả để tạo lại mọi tệp đã tải mà không cần tải lại.',
      },
      {
        question: 'Chuyển PNG sang JPG có xoá khối chữ PNG nhúng như phần mềm tạo hay bình luận không?',
        answer:
          'Có. Vẽ pixel lên HTML5 Canvas sẽ xoá khối tEXt, iTXt và hồ sơ ICC nhúng, giữ JPG xuất gọn và sạch.',
      },
      {
        question: 'Tôi có thể xác minh độ sắc cạnh trước/sau trên ảnh chụp màn hình UI đã chuyển đổi trước khi tải về không?',
        answer:
          'Có. Bấm So Sánh trên bất kỳ thẻ nào để kéo trình xem tách đôi qua nhãn chữ và icon với bản gốc PNG không mất dữ liệu.',
      },
      {
        question: 'Trang chuyển PNG sang JPG chuyên dụng này chấp nhận loại tệp nào?',
        answer:
          'Nó lọc gọn cho tệp .png tối đa 25 MB mỗi tệp để bạn không vô tình làm phẳng đầu vào không phải PNG. Với loạt hỗn hợp chứa tệp WebP hoặc BMP, hãy thử công cụ Chuyển Đổi Ảnh Hàng Loạt.',
      },
      {
        question: 'Công cụ chuyển đổi có hỗ trợ PNG xen kẽ (Adam7) trong suốt không?',
        answer:
          'Có. Bộ giải mã ảnh gốc của trình duyệt đọc cả luồng PNG chuẩn và xen kẽ một cách gọn gàng trước khi vẽ lên nền lót Canvas.',
      },
      {
        question: 'Windows Photos, macOS Preview, WhatsApp và máy in cũ có mở được JPG đã xuất không?',
        answer:
          'Có. Đầu ra .jpg RGB chuẩn có khả năng tương thích rộng nhất trong mọi định dạng ảnh số trên điện thoại, trình duyệt, bộ office và ki-ốt in.',
      },
      {
        question: 'Tên tệp tải đơn lẻ so với tên tệp ZIP hàng loạt là gì?',
        answer:
          'Bản tải đơn lẻ giữ tên gốc đã làm sạch của bạn với phần mở rộng .jpg. Loạt từ 2 tệp trở lên xuất gọn gàng gói trong compressmypic_png_to_jpg.zip.',
      },
      {
        question: 'Tôi có thể chuyển ảnh chụp màn hình PNG từ trình duyệt iOS hay Android trên điện thoại một cách gọn gàng không?',
        answer:
          'Có. Mẫu lót, thanh trượt chất lượng, trình kiểm tra so sánh trực quan và xuất ZIP hoạt động trực tiếp trong Safari trên iOS và Chrome trên Android mà không cần tải ứng dụng.',
      },
    ],
    relatedSlugs: ['/jpg-to-png', '/png-to-webp', '/compress-image-to-100kb', '/image-converter'],
  },
  {
    slug: '/jpg-to-webp',
    name: 'Chuyển JPG Sang WebP',
    shortDescription: 'Chuyển ảnh JPG sang WebP thế hệ mới cho website nhanh hơn & SEO.',
    category: 'convert',
    seoTitle: 'Chuyển JPG Sang WebP Miễn Phí – Giảm Dung Lượng JPG Cho Web Nhanh Hơn',
    seoDescription:
      'Chuyển ảnh JPG sang WebP hiện đại online miễn phí ngay trên trình duyệt. Thu nhỏ ảnh hero, ảnh sản phẩm và ảnh nổi bật blog cho trang nhanh hơn và Core Web Vitals tốt hơn, kèm thanh trượt chất lượng và ZIP hàng loạt.',
    h1: 'Chuyển JPG Sang WebP Online Miễn Phí',
    subtitle:
      'Biến ảnh JPG từ máy ảnh — ảnh hero, ảnh sản phẩm và ảnh nổi bật blog — thành tệp WebP hiện đại nhẹ với công cụ chuyển JPG sang WebP miễn phí, chạy hoàn toàn ngay trên trình duyệt. Dành cho nhiếp ảnh gia, blogger và chủ cửa hàng cần trang nhanh hơn và Core Web Vitals tốt hơn, công cụ chuyển tệp JPG tối đa 25 MB mỗi ảnh ở chất lượng mặc định 82%, mức chỉnh cho ảnh máy ảnh đã nén sẵn thay vì đồ hoạ không mất dữ liệu, kèm xử lý hàng loạt và tải ZIP một cú nhấp, và không gì được tải lên.',
    howToSteps: [
      {
        title: 'Thả ảnh JPG tối đa 25 MB mỗi ảnh',
        description:
          'Tải lên một hoặc nhiều ảnh .jpg hoặc .jpeg từ blog, cửa hàng hay camera roll vào vùng thả.',
      },
      {
        title: 'Đặt chất lượng xuất WebP (20%–100%)',
        description:
          'Giữ mặc định sắc nét 82%, chỉnh cho ảnh máy ảnh, hoặc kéo thanh trượt về 20% cho tệp tí hon và 100% cho chi tiết tối đa, rồi bấm Chuyển Đổi Lại Tất Cả.',
      },
      {
        title: 'Kiểm tra mức tiết kiệm dung lượng trên mỗi thẻ',
        description:
          'Mỗi kết quả hiển thị dung lượng JPG gốc, dung lượng WebP đã chuyển đổi và phần trăm tiết kiệm để bạn thấy lợi ích ngay lập tức.',
      },
      {
        title: 'So sánh độ sắc nét cạnh nhau',
        description:
          'Bấm So Sánh trên bất kỳ thẻ nào để mở trình xem tách đôi và kiểm tra chữ, khuôn mặt và cạnh vẫn sắc nét ở chất lượng bạn chọn.',
      },
      {
        title: 'Tải tệp WebP hoặc Tải Tất Cả (ZIP)',
        description:
          'Lưu từng tệp .webp riêng lẻ hoặc gói cả loạt vào compressmypic_jpg_to_webp.zip trong một cú nhấp.',
      },
    ],
    features: [
      {
        title: 'Điểm PageSpeed & LCP nhanh hơn',
        description: 'WebP là định dạng web thế hệ mới được Lighthouse và trình duyệt hiện đại khuyến nghị.',
      },
      {
        title: 'Điều khiển chất lượng chỉnh được',
        description: 'Quay mức nén bất kỳ đâu từ 20% đến 100% và xem trước kết quả ngay lập tức.',
      },
      {
        title: 'Xuất hàng loạt sang ZIP',
        description: 'Tối ưu cả thư mục ảnh blog hay buổi chụp sản phẩm thương mại điện tử ngay trên máy trong vài giây.',
      },
      {
        title: 'Không qua máy chủ',
        description: 'Dùng bộ mã hoá WebP có sẵn của trình duyệt — nhanh, thân thiện ngoại tuyến và riêng tư.',
      },
    ],
    faqs: [
      {
        question: 'Tệp WebP nhỏ hơn bao nhiêu so với cùng ảnh máy ảnh lưu dưới dạng JPG?',
        answer:
          'Ở chất lượng hình ảnh tương tự, ảnh máy ảnh mã hoá lại thành WebP thường nhỏ hơn 25% đến 35% so với cùng JPG, vì WebP dự đoán pixel hiệu quả hơn khối DCT JPEG cũ mà máy ảnh của bạn đã dùng. Mức tiết kiệm chính xác phụ thuộc ảnh chụp: phong cảnh chi tiết tiết kiệm ít hơn, còn bầu trời mượt và chân dung studio tiết kiệm nhiều hơn.',
      },
      {
        question: 'Vì sao Google khuyến nghị WebP cho ảnh hero và Core Web Vitals nhanh hơn?',
        answer:
          'Công cụ Lighthouse và PageSpeed của Google đánh dấu ảnh hero nặng là nguyên nhân hàng đầu gây Largest Contentful Paint (LCP) chậm, vì ảnh hero thường là thứ lớn nhất khách tải về. Phục vụ cùng ảnh đó dưới dạng WebP nhẹ hơn cắt thời gian tải trên kết nối chậm, điều này cải thiện trực tiếp LCP và điểm trải nghiệm mà Google dùng làm tín hiệu xếp hạng.',
      },
      {
        question: 'Trình duyệt nào có thể mở tệp WebP mà không cần cài đặt gì?',
        answer:
          'Mọi trình duyệt hiện đại đều mở WebP gốc: Chrome, Edge, Firefox và Safari trên máy tính, cộng Chrome trên Android và Safari trên iOS. Không cần plugin hay ứng dụng xem, nên ảnh WebP hiển thị trực tiếp trên trang web, trong chat và hầu hết trình xem ảnh hiện đại.',
      },
      {
        question: 'Vì sao công cụ chuyển đổi này mặc định chất lượng 82% trong khi công cụ chuyển PNG mặc định 85%?',
        answer:
          'Ảnh JPG đến tay vốn đã nén lossy bởi máy ảnh, nên mã hoá lại ở 82% giữ chi tiết máy ảnh nhìn thấy được trong khi cắt mạnh dung lượng tệp. Nguồn PNG bắt đầu không mất dữ liệu, nên công cụ chuyển PNG mặc định 85% để bảo vệ cạnh đồ hoạ sắc như dao chưa từng nén trước đây. Với ảnh website, 80% đến 85% là điểm ngọt dù sao, và bạn có thể đẩy lên 90% trở lên cho ảnh hero nơi mọi chi tiết đều quan trọng.',
      },
      {
        question: 'Megapixel của ảnh máy ảnh có thay đổi khi tôi chuyển JPG sang WebP không?',
        answer:
          'Không. Chuyển đổi chỉ đổi container tệp và cách nén, nên WebP xuất giữ 100% chiều rộng và chiều cao pixel của ảnh máy ảnh — ảnh 24 megapixel vẫn 24 megapixel. Nếu bạn cũng muốn kích thước nhỏ hơn, dùng công cụ Đổi Kích Thước Ảnh sau đó cho kích thước pixel chính xác.',
      },
      {
        question: 'Ảnh JPG có giữ được độ trong suốt khi chuyển sang WebP không?',
        answer:
          'Không, vì tệp JPG chuẩn không có kênh trong suốt để giữ — mọi pixel trong JPG đều hoàn toàn không trong suốt. Nếu đồ hoạ nguồn của bạn có nền trong suốt, hãy bắt đầu từ PNG và dùng công cụ chuyển PNG sang WebP của chúng tôi, công cụ này giữ toàn bộ kênh alpha.',
      },
      {
        question: 'Ảnh camera roll của tôi có bị tải lên máy chủ trong quá trình chuyển đổi không?',
        answer:
          'Không bao giờ. Chuyển đổi chạy trên HTML5 Canvas trong tab trình duyệt của bạn, nên ảnh camera roll được mã hoá ngay trên máy và không bao giờ rời khỏi máy tính hay điện thoại của bạn. Đóng tab sẽ xoá chúng khỏi bộ nhớ trình duyệt.',
      },
      {
        question: 'Tôi có thể chuyển cả thư mục ảnh JPG blog và ảnh nổi bật sang WebP cùng lúc không?',
        answer:
          'Có. Thả nhiều tệp .jpg hoặc .jpeg tối đa 25 MB mỗi tệp vào hàng đợi — toàn bộ ảnh nổi bật blog hay ảnh sản phẩm — chọn một cài đặt chất lượng cho cả loạt, rồi tải mọi thứ cùng nhau trong compressmypic_jpg_to_webp.zip. Mỗi tệp chuyển đổi độc lập nên một tệp lỗi không bao giờ chặn các tệp còn lại.',
      },
      {
        question: 'Dữ liệu EXIF và thẻ vị trí GPS của máy ảnh ra sao khi JPG thành WebP?',
        answer:
          'Vẽ pixel lên HTML5 Canvas sẽ xoá dữ liệu EXIF nhúng, gồm toạ độ GPS, mẫu máy ảnh, ống kính và dấu thời gian mà điện thoại hay máy ảnh của bạn đã ghi vào JPG. Nhờ vậy tệp WebP xuất gọn nhẹ và bảo vệ riêng tư của bạn trước khi xuất bản ảnh lên mạng.',
      },
      {
        question: 'Vì sao WebP đã chuyển đổi đôi khi lớn hơn ảnh JPG gốc của tôi?',
        answer:
          'Ảnh điện thoại lưu ở chất lượng JPG rất thấp vốn đã bị bóp mạnh, nên mã hoá lại — đặc biệt ở chất lượng 100% — có thể thêm chi phí container WebP mà không tìm thêm tiết kiệm. Nếu ảnh tăng lên, hãy hạ chất lượng về 80% hoặc giữ JPG gốc — cột Thay Đổi trên mỗi thẻ hiển thị kết quả một cách trung thực.',
      },
      {
        question: 'Tôi có thể dùng tệp WebP đã chuyển đổi trong WordPress, Shopify hay Wix không?',
        answer:
          'Có. WordPress, Shopify, Wix, Squarespace và hầu hết trình tạo site hiện đại chấp nhận tải lên WebP trực tiếp, và trình duyệt phục vụ chúng mà không cần thiết lập thêm. Với theme hay plugin rất cũ từ chối WebP, hãy chuyển ngược bằng công cụ WebP sang JPG của chúng tôi.',
      },
      {
        question: 'Dung lượng tối đa cho ảnh JPG máy ảnh tôi tải lên ở đây là bao nhiêu?',
        answer:
          'Mỗi tệp JPG hoặc JPEG có thể tối đa 25 MB, bao phủ ảnh máy ảnh độ phân giải cao và ảnh điện thoại lớn thẳng từ camera roll. Vì chuyển đổi diễn ra trên thiết bị của bạn, tệp lớn xử lý ở tốc độ CPU ngay trên máy mà không chờ tải lên.',
      },
      {
        question: 'Tôi có thể chuyển ảnh JPG từ camera roll của điện thoại trong trình duyệt di động không?',
        answer:
          'Có. Chọn ảnh thẳng từ camera roll: thanh trượt chất lượng, hàng đợi hàng loạt, trình xem so sánh và tải ZIP đều hoạt động trong Safari trên iOS và Chrome trên Android, không cần cài ứng dụng. Trên điện thoại, loạt rất lớn chỉ mất lâu hơn một chút vì công việc chạy trên bộ xử lý của điện thoại.',
      },
      {
        question: 'Làm sao kiểm tra WebP đã chuyển đổi vẫn sắc nét trước khi tải về?',
        answer:
          'Bấm So Sánh trên bất kỳ thẻ kết quả nào để mở trình xem tách đôi và kéo qua ảnh để kiểm tra khuôn mặt, chữ và cạnh với JPG gốc. Nếu thứ gì trông mềm, hãy tăng thanh trượt chất lượng rồi bấm Chuyển Đổi Lại Tất Cả.',
      },
      {
        question: 'Tôi có thể đổi chất lượng cho toàn bộ loạt ảnh mà không tải lại không?',
        answer:
          'Có. Di chuyển thanh trượt chất lượng sang giá trị mới bất cứ lúc nào rồi bấm Chuyển Đổi Lại Tất Cả để tạo lại mọi ảnh đã tải ở cài đặt mới. Tệp đã tải của bạn ở trong hàng đợi nên không cần kéo lại.',
      },
      {
        question: 'WebP có tốt hơn JPG cho ảnh sản phẩm trên cửa hàng online không?',
        answer:
          'Với ảnh sản phẩm hiển thị trên website, có: WebP ở 80% đến 85% trông giống JPG trong khi tải nhanh hơn rõ rệt, giúp cả người mua và thứ hạng tìm kiếm. Chỉ giữ JPG khi sàn, phòng in hay người mua yêu cầu rõ ràng.',
      },
      {
        question: 'Vết khối JPEG và dải màu trên bầu trời có biến mất khi tôi chuyển sang WebP không?',
        answer:
          'Không — WebP không thể khôi phục chi tiết mà nén JPEG của máy ảnh đã vứt bỏ. Mảng khối trong bầu trời xanh và hoàng hôn có dải màu vẫn ở trong tệp đã chuyển đổi, vì vết đó đã nướng vào pixel nguồn. WebP chỉ tránh thêm vết mới của riêng nó, nên hãy chuyển ở 82% trở lên và kiểm tra trình xem So Sánh trên dải màu chuyển mượt.',
      },
      {
        question: 'Tôi có thể chuyển ảnh chụp màn hình JPG có chữ sang WebP mà không bị mờ chữ không?',
        answer:
          'Có, ở chất lượng 85% đến 90%, chữ ảnh chụp màn hình vẫn sắc nét vì WebP giữ cạnh tương phản cao sắc nét tốt hơn khối JPEG vốn làm mờ chúng. Hạ dưới 70% có thể làm mềm chữ nhỏ, nên hãy kiểm tra trình xem So Sánh và tăng chất lượng nếu chữ trông mờ.',
      },
      {
        question: 'Công cụ chuyển đổi này có hoạt động ngoại tuyến sau khi trang tải xong không?',
        answer:
          'Có. Khi trang đã tải trong trình duyệt, chuyển đổi chạy hoàn toàn bằng JavaScript và HTML5 Canvas ngay trên máy mà không gọi máy chủ. Bạn chỉ cần internet lại để tải trang hoặc tải tệp đã hoàn thành về.',
      },
      {
        question: 'Khi nào nên giữ ảnh JPG gốc thay vì chuyển sang WebP?',
        answer:
          'Giữ JPG khi ảnh phải mở trong phần mềm cũ, tệp đính kèm email, phòng in hay cổng tải lên vẫn từ chối WebP — hoặc khi sàn hay người mua yêu cầu rõ tệp JPG. Với bất cứ thứ gì xuất bản trên website hiện đại, WebP là lựa chọn tốt hơn — và bạn luôn có thể chuyển ngược bằng WebP sang JPG.',
      },
    ],
    relatedSlugs: ['/webp-to-jpg', '/png-to-webp', '/web-image-optimizer', '/bulk-image-converter'],
  },
  {
    slug: '/webp-to-jpg',
    name: 'Chuyển WebP Sang JPG',
    shortDescription: 'Chuyển ảnh WebP đã tải về trở lại thành tệp JPG được chấp nhận phổ biến.',
    category: 'convert',
    seoTitle: 'Chuyển WebP Sang JPG Miễn Phí – Mở WebP Ở Mọi Nơi',
    seoDescription:
      'Chuyển ảnh WebP sang JPG phổ biến online miễn phí ngay trên trình duyệt. Chọn màu lót cho vùng trong suốt, chỉnh chất lượng và tải hàng loạt dưới dạng ZIP.',
    h1: 'Chuyển WebP Sang JPG Online Miễn Phí',
    subtitle:
      'Biến ảnh .webp đã tải về thành tệp .jpg cổ điển mở được trong mọi ứng dụng, cổng hay máy in với công cụ chuyển WebP sang JPG miễn phí ngay trên trình duyệt. Dành cho bất kỳ ai nhận tệp WebP từ website hay messenger mà trình chỉnh sửa, bộ office hay biểu mẫu tải lên của họ từ chối, công cụ chuyển tệp WebP tối đa 25 MB mỗi ảnh ở chất lượng mặc định 88%, kèm bộ chọn màu lót cho vùng trong suốt và xuất ZIP hàng loạt.',
    howToSteps: [
      {
        title: 'Thả ảnh WebP tối đa 25 MB mỗi ảnh',
        description:
          'Tải lên một hoặc nhiều tệp .webp đã lưu từ website, chat hay bản tải về vào vùng thả.',
      },
      {
        title: 'Chọn màu lót cho vùng trong suốt',
        description:
          'Chọn Trắng (#ffffff), Đen (#000000), Xám Nhạt (#f8fafc) hoặc bất kỳ màu hex tuỳ chỉnh nào, vì JPG không thể lưu độ trong suốt.',
      },
      {
        title: 'Đặt chất lượng xuất JPG (20%–100%)',
        description:
          'Giữ mặc định sắc nét 88% hoặc kéo thanh trượt về 20% cho tệp tí hon và 100% cho chi tiết tối đa, rồi bấm Chuyển Đổi Lại Tất Cả.',
      },
      {
        title: 'So sánh JPG với WebP gốc',
        description:
          'Bấm So Sánh trên bất kỳ thẻ nào để kiểm tra cạnh và chữ trong trình xem tách đôi trước khi lưu bất cứ thứ gì.',
      },
      {
        title: 'Tải tệp JPG hoặc Tải Tất Cả (ZIP)',
        description:
          'Lưu từng tệp .jpg riêng lẻ hoặc gói cả loạt vào compressmypic_webp_to_jpg.zip trong một cú nhấp.',
      },
    ],
    features: [
      {
        title: 'Khắc phục từ chối của phần mềm đời cũ',
        description: 'Dễ dàng chuyển ảnh WebP cho cổng, máy in hay ứng dụng cũ chỉ chấp nhận JPG.',
      },
      {
        title: 'Lấp lót an toàn cho độ trong suốt',
        description: 'WebP trong suốt làm phẳng mượt mà lên nền trắng, đen hoặc bất kỳ màu hex nào.',
      },
      {
        title: 'Mã hoá lại chất lượng cao',
        description: 'Chất lượng mặc định 88% giữ chi tiết sắc nét với dung lượng tệp phình tối thiểu.',
      },
      {
        title: 'Riêng tư 100% ngay trên trình duyệt',
        description: 'Không hàng đợi đám mây hay tải lên máy chủ — chạy tức thì trên thiết bị của bạn.',
      },
    ],
    faqs: [
      {
        question: 'Vì sao một số ứng dụng, máy in và biểu mẫu tải lên từ chối tệp .webp?',
        answer:
          'WebP là định dạng mới hơn, và nhiều chương trình máy tính cũ, ki-ốt in, phiên bản Microsoft Office và biểu mẫu tải lên của chính phủ được xây trước khi nó ra đời, nên chúng chỉ nhận JPG và PNG. Chuyển WebP sang JPG lập tức giúp ảnh mở được ở mọi nơi mà không cần yêu cầu ai cài đặt gì.',
      },
      {
        question: 'Chuyện gì xảy ra với phần trong suốt của WebP khi nó thành JPG?',
        answer:
          'JPG không có kênh trong suốt alpha, nên pixel trong suốt phải được lấp bằng màu đặc trong quá trình chuyển đổi. Công cụ này lấp chúng bằng màu lót bạn chọn — mặc định trắng — để logo và sticker có nền đặc sạch thay vì hộp đen.',
      },
      {
        question: 'Tôi có thể chọn màu nền phía sau sticker WebP trong suốt không?',
        answer:
          'Có. Trong mục Màu Nền Lót PNG Trong Suốt, chọn Trắng, Đen hoặc Xám Nhạt, hoặc bấm bảng màu để nhập bất kỳ giá trị hex tuỳ chỉnh nào. Lựa chọn áp dụng khi bạn bấm Chuyển Đổi Lại Tất Cả, nên bạn có thể xem trước nền khác nhau trước khi tải về.',
      },
      {
        question: 'Chuyển WebP sang JPG có mất chất lượng không?',
        answer:
          'Một phần mất mát là không tránh khỏi vì JPG mã hoá lại pixel bằng nén lossy, nhưng ở mặc định 88%, sự khác biệt gần như không nhìn thấy với ảnh và ảnh chụp màn hình. Nếu WebP gốc vốn đã chất lượng thấp, chuyển đổi không thể khôi phục chi tiết vốn không có.',
      },
      {
        question: 'JPG có giữ cùng kích thước pixel như WebP không?',
        answer:
          'Có. Mọi tệp .jpg đã chuyển đổi giữ 100% chiều rộng và chiều cao chính xác của WebP gốc, nên không gì bị cắt hay đổi kích thước. Dùng công cụ Đổi Kích Thước Ảnh sau đó nếu bạn cũng cần kích thước nhỏ hơn.',
      },
      {
        question: 'Tôi nên làm gì với tệp WebP động ở đây?',
        answer:
          'WebP động xuất thành JPG tĩnh, vì định dạng JPG không thể lưu chuyển động. Bạn nhận một khung sắc nét duy nhất của ảnh động, phù hợp cho ảnh thu nhỏ và tài liệu — với phiên bản chuyển động, hãy giữ tệp WebP gốc.',
      },
      {
        question: 'Tệp WebP của tôi có bị tải lên đâu trong quá trình chuyển đổi không?',
        answer:
          'Không. Toàn bộ chuyển đổi chạy trên HTML5 Canvas trong tab trình duyệt của bạn, nên ảnh của bạn không bao giờ được gửi lên máy chủ, lưu trữ hay bị người khác xem. Đóng tab sẽ xoá chúng khỏi bộ nhớ trình duyệt.',
      },
      {
        question: 'Tôi có thể chuyển nhiều bản tải WebP sang JPG trong một loạt không?',
        answer:
          'Có. Thả nhiều tệp .webp tối đa 25 MB mỗi tệp vào hàng đợi, chọn một màu lót và chất lượng cho cả loạt, rồi tải mọi thứ cùng nhau trong compressmypic_webp_to_jpg.zip. Mỗi tệp chuyển đổi độc lập.',
      },
      {
        question: 'Tệp WebP lớn nhất mà công cụ chuyển đổi này chấp nhận là bao nhiêu?',
        answer:
          'Mỗi tệp WebP có thể tối đa 25 MB, bao phủ bản tải độ phân giải cao và ảnh chụp màn hình lớn. Chuyển đổi chạy trên thiết bị của bạn nên tệp lớn xử lý ở tốc độ CPU ngay trên máy mà không chờ tải lên.',
      },
      {
        question: 'Làm sao có nền trắng thuần thay vì hộp đen phía sau logo?',
        answer:
          'Chọn Trắng (#ffffff) trong mục Màu Nền Lót PNG Trong Suốt trước khi chuyển đổi — trắng là mặc định nên hầu hết logo đã ra sạch. Nếu tệp đã chuyển đổi với màu sai, chỉ cần đổi bảng màu rồi bấm Chuyển Đổi Lại Tất Cả để tạo lại.',
      },
      {
        question: 'Vì sao tệp JPG đôi khi lớn hơn WebP gốc?',
        answer:
          'WebP nén hiệu quả hơn JPG, nên WebP nhỏ mã hoá lại thành JPG ở 88% có thể cuối cùng lớn hơn nguồn. Điều đó là bình thường: bạn đang đổi một chút dung lượng tệp lấy khả năng tương thích phổ biến. Hạ chất lượng về 75% thường đưa JPG trở lại dưới kích thước gốc.',
      },
      {
        question: 'Tôi có thể mở JPG đã chuyển đổi trong Microsoft Word, PowerPoint hay Photoshop không?',
        answer:
          'Có. Đầu ra .jpg RGB chuẩn mở trong hầu như mọi bộ office, trình chỉnh sửa, trình duyệt và quy trình in, kể cả phiên bản cũ chưa từng biết WebP. Hỗ trợ phổ biến đó là lý do chính để chuyển đổi.',
      },
      {
        question: 'Công cụ chuyển đổi có xoá siêu dữ liệu khỏi tệp WebP không?',
        answer:
          'Có. Vẽ pixel lên HTML5 Canvas sẽ xoá dữ liệu EXIF, XMP và hồ sơ ICC nhúng, nên JPG xuất gọn nhẹ và không còn chi tiết vị trí hay máy ảnh ẩn.',
      },
      {
        question: 'Làm sao kiểm tra JPG trông đúng trước khi tải về?',
        answer:
          'Bấm So Sánh trên bất kỳ thẻ kết quả nào để mở trình xem tách đôi và kéo qua ảnh để kiểm tra cạnh, chữ và màu với WebP gốc. Mỗi thẻ cũng hiển thị dung lượng gốc và đã chuyển đổi, nên bất ngờ sẽ thấy rõ trước khi bạn lưu.',
      },
      {
        question: 'Tôi có thể đổi màu lót hoặc chất lượng sau khi chuyển đổi không?',
        answer:
          'Có. Chọn mẫu lót khác hoặc di chuyển thanh trượt chất lượng bất cứ lúc nào rồi bấm Chuyển Đổi Lại Tất Cả để tạo lại mọi tệp đã tải mà không cần tải lại. Tệp WebP gốc của bạn ở trong hàng đợi cho đến khi bạn xoá chúng.',
      },
      {
        question: 'Tệp JPG đã tải về sẽ giữ tên gì?',
        answer:
          'Bản tải đơn lẻ giữ tên gốc đã làm sạch của bạn với phần mở rộng .jpg, nên banner.webp thành banner.jpg. Loạt từ hai tệp trở lên xuất gói trong compressmypic_webp_to_jpg.zip.',
      },
      {
        question: 'Chuyển WebP sang JPG có hoạt động trên trình duyệt iPhone và Android không?',
        answer:
          'Có. Bộ chọn lót, thanh trượt chất lượng, trình xem so sánh và tải ZIP đều hoạt động trong Safari trên iOS và Chrome trên Android mà không cần cài ứng dụng. Loạt lớn chỉ mất lâu hơn một chút trên bộ xử lý điện thoại.',
      },
      {
        question: 'Khi nào chuyển WebP sang JPG là lựa chọn đúng thay vì WebP sang PNG?',
        answer:
          'Chọn JPG khi bạn cần tệp tương thích rộng rãi nhỏ nhất — tệp đính kèm email, tài liệu Office, cổng tải lên và máy in. Chọn PNG thay vào đó khi bạn phải giữ độ trong suốt hoặc cần chất lượng không mất dữ liệu hoàn hảo cho chỉnh sửa.',
      },
      {
        question: 'Vì sao ảnh chụp màn hình WebP có chữ sắc nét trông mềm hơn sau khi chuyển đổi?',
        answer:
          'JPEG dùng lấy mẫu màu phụ, làm mềm nhẹ cạnh tương phản cao như chữ đỏ hoặc xanh trên nền trắng. Tăng chất lượng lên 92% hoặc 95% giữ chữ ảnh chụp màn hình sắc nét, và trình xem So Sánh cho bạn xác minh trước khi tải về.',
      },
      {
        question: 'Tôi có thể chuyển đổi ảnh WebP mà website lưu không có phần mở rộng tệp không?',
        answer:
          'Không trực tiếp — trang này lọc đầu vào theo phần mở rộng .webp và loại MIME WebP, nên hãy đổi tên tệp kết thúc bằng .webp trước. Nếu tệp thực ra là JPG hoặc PNG bị site gắn nhãn sai, hãy dùng công cụ chuyển đổi tương ứng thay vào đó.',
      },
    ],
    relatedSlugs: ['/webp-to-png', '/jpg-to-webp', '/png-to-jpg', '/image-converter'],
  },
  {
    slug: '/png-to-webp',
    name: 'Chuyển PNG Sang WebP',
    shortDescription: 'Chuyển đồ hoạ PNG trong suốt sang WebP trong suốt gọn nhẹ.',
    category: 'convert',
    seoTitle: 'Chuyển PNG Sang WebP Miễn Phí – Logo Vẫn Trong Suốt',
    seoDescription:
      'Chuyển PNG sang WebP online miễn phí trong khi giữ nguyên độ trong suốt. Thu nhỏ logo, icon và ảnh chụp màn hình ngay trên trình duyệt với thanh trượt chất lượng và xuất ZIP.',
    h1: 'Chuyển PNG Sang WebP Online Miễn Phí',
    subtitle:
      'Thu nhỏ logo PNG trong suốt nặng, icon và ảnh chụp màn hình thành tệp WebP gọn nhẹ với công cụ chuyển PNG sang WebP miễn phí, ngay trên trình duyệt. Dành cho lập trình viên web và nhà thiết kế cần đồ hoạ trong suốt tải nhanh, công cụ chuyển tệp PNG tối đa 25 MB mỗi ảnh ở chất lượng mặc định 85% trong khi giữ nguyên toàn bộ kênh alpha, kèm xử lý hàng loạt và tải ZIP.',
    howToSteps: [
      {
        title: 'Thả đồ hoạ PNG tối đa 25 MB mỗi ảnh',
        description:
          'Tải logo .png trong suốt, icon, ảnh chụp màn hình hoặc ảnh cắt sản phẩm vào vùng thả.',
      },
      {
        title: 'Đặt chất lượng xuất WebP (20%–100%)',
        description:
          'Giữ mặc định 85% cho đồ hoạ trong suốt sắc nét, hoặc kéo về 20% cho tệp tí hon và 100% cho chi tiết tối đa, rồi bấm Chuyển Đổi Lại Tất Cả.',
      },
      {
        title: 'Kiểm tra độ trong suốt và mức tiết kiệm dung lượng',
        description:
          'Mỗi thẻ hiển thị dung lượng PNG gốc, dung lượng WebP mới và phần trăm tiết kiệm, với độ trong suốt hiển thị trên bản xem trước kẻ caro.',
      },
      {
        title: 'So sánh cạnh và bóng đổ cạnh nhau',
        description:
          'Bấm So Sánh trên bất kỳ thẻ nào để kiểm tra cạnh bán trong suốt, dải màu chuyển và bóng đổ trong trình xem tách đôi.',
      },
      {
        title: 'Tải tệp WebP hoặc Tải Tất Cả (ZIP)',
        description:
          'Lưu từng tệp .webp riêng lẻ hoặc gói loạt vào compressmypic_png_to_webp.zip trong một cú nhấp.',
      },
    ],
    features: [
      {
        title: 'Giữ nguyên độ trong suốt alpha đầy đủ',
        description: 'Không giống JPG, WebP giữ cạnh bán trong suốt sạch và bóng đổ từ PNG của bạn.',
      },
      {
        title: 'Tài nguyên nhỏ hơn đến 70%',
        description: 'Thay hero PNG nhiều megabyte và ảnh cắt bằng tệp WebP gọn cho website nhanh hơn.',
      },
      {
        title: 'Chế độ xem tách đôi trước/sau',
        description: 'Kiểm tra cạnh khử răng cưa và dải màu chuyển cạnh nhau trước khi tải về.',
      },
      {
        title: 'Xử lý hàng loạt + ZIP',
        description: 'Chuyển cả bộ icon và sản phẩm ngay trên máy mà không giới hạn tải lên.',
      },
    ],
    faqs: [
      {
        question: 'Chuyển PNG sang WebP có thực sự giữ nền trong suốt không?',
        answer:
          'Có. Mã hoá WebP bằng HTML5 Canvas giữ toàn bộ kênh alpha 8-bit, nên pixel hoàn toàn trong suốt vẫn trong suốt và cạnh bán trong suốt, bóng mềm và đường cong khử răng cưa giữ hoà mượt. Bản xem trước kết quả hiển thị độ trong suốt trên nền kẻ caro để bạn xác minh ngay lập tức.',
      },
      {
        question: 'WebP nhỏ hơn PNG bao nhiêu với cùng một ảnh?',
        answer:
          'Tuỳ độ phức tạp hình ảnh, chuyển PNG sang WebP 85% thường cắt dung lượng tệp 50% đến 80%. PNG chụp ảnh và ảnh chụp màn hình lớn tiết kiệm nhiều nhất, còn icon phẳng tí hon ít màu có thể tiết kiệm ít hơn — cột Thay Đổi trên mỗi thẻ hiển thị kết quả chính xác.',
      },
      {
        question: 'Bóng đổ bán trong suốt và cạnh mềm có sống sót sau chuyển đổi không?',
        answer:
          'Có. WebP lưu cùng giá trị alpha 8-bit như PNG, nên bóng đổ, hiệu ứng phát sáng và cạnh mờ hoà chính xác như trong bản gốc. Dùng trình xem So Sánh để phóng to cạnh và xác nhận độ mềm trông giống hệt trước khi tải về.',
      },
      {
        question: 'Cài đặt chất lượng nào tốt nhất cho logo PNG trong suốt?',
        answer:
          'Mặc định 85% là lý tưởng cho hầu hết logo và icon: cạnh vẫn sắc nét trong khi tệp thu nhỏ mạnh. Với công việc in ấn hay line art rất mảnh, hãy tăng chất lượng lên 90% hoặc 95%; hạ dưới 70% có thể làm thô đường mỏng và chữ nhỏ.',
      },
      {
        question: 'Làm sao biến cả bộ icon từ PNG thành WebP cùng lúc?',
        answer:
          'Thả nhiều tệp .png tối đa 25 MB mỗi tệp vào hàng đợi, chọn một cài đặt chất lượng cho cả loạt, rồi tải mọi thứ cùng nhau trong compressmypic_png_to_webp.zip. Mỗi icon chuyển đổi độc lập nên một tệp lỗi không bao giờ chặn các tệp còn lại.',
      },
      {
        question: 'Tệp PNG có bị tải lên máy chủ khi chuyển sang WebP không?',
        answer:
          'Không. Chuyển đổi chạy trên HTML5 Canvas trong tab trình duyệt của bạn, nên logo, ảnh chụp màn hình và tài nguyên thiết kế không bao giờ rời khỏi máy tính của bạn. Đóng tab sẽ xoá chúng khỏi bộ nhớ trình duyệt.',
      },
      {
        question: 'Chuyển PNG sang WebP có thay đổi kích thước ảnh không?',
        answer:
          'Không. WebP xuất giữ 100% chiều rộng và chiều cao pixel của PNG gốc — chỉ định dạng tệp và cách nén thay đổi. Dùng công cụ Đổi Kích Thước Ảnh sau đó nếu bạn cũng cần kích thước nhỏ hơn cho web.',
      },
      {
        question: 'Dung lượng PNG tối đa được chấp nhận ở đây là bao nhiêu?',
        answer:
          'Mỗi tệp PNG có thể tối đa 25 MB, bao phủ ảnh chụp màn hình lớn, ảnh chụp Retina và bản render sản phẩm độ phân giải cao. Vì chuyển đổi chạy trên thiết bị của bạn, tệp lớn xử lý ở tốc độ CPU ngay trên máy mà không chờ tải lên.',
      },
      {
        question: 'Vì sao WebP đã chuyển đổi của tôi lớn hơn PNG gốc?',
        answer:
          'PNG phẳng tí hon ít màu — như icon hai màu — vốn đã cực kỳ hiệu quả, và mã hoá WebP lossy có thể thêm chi phí trên chúng. Nếu tệp tăng lên, hãy kiểm tra cột Thay Đổi và giữ PNG gốc cho tài nguyên đó; WebP thắng trên đồ hoạ chụp ảnh và phức tạp.',
      },
      {
        question: 'Website có dùng trực tiếp tệp WebP đã chuyển đổi được không?',
        answer:
          'Có. Mọi trình duyệt hiện đại hiển thị WebP gốc, và WordPress, Shopify, Wix và hầu hết trình tạo site chấp nhận tải lên WebP. Logo WebP trong suốt hoạt động đúng như PNG trong suốt trong header, nút và gallery sản phẩm.',
      },
      {
        question: 'Chuyện gì xảy ra với siêu dữ liệu PNG và khối chữ trong quá trình chuyển đổi?',
        answer:
          'Vẽ pixel lên HTML5 Canvas sẽ xoá khối chữ PNG nhúng, ghi chú phần mềm tạo và hồ sơ ICC. Tệp WebP xuất gọn nhẹ và không còn siêu dữ liệu ẩn, lý tưởng cho tài nguyên xuất bản online.',
      },
      {
        question: 'Làm sao xác minh độ trong suốt được giữ trước khi tải về?',
        answer:
          'Ảnh thu nhỏ kết quả hiển thị vùng trong suốt trên mẫu kẻ caro, và nút So Sánh mở trình xem tách đôi nơi bạn có thể kéo qua ảnh để xác nhận cạnh hoà mượt. Nếu nền trông đặc thay vì kẻ caro, PNG nguồn không có độ trong suốt.',
      },
      {
        question: 'Tôi có thể đổi chất lượng sau khi chuyển đổi mà không tải lại không?',
        answer:
          'Có. Di chuyển thanh trượt chất lượng sang giá trị mới bất cứ lúc nào rồi bấm Chuyển Đổi Lại Tất Cả để tạo lại mọi tệp đã tải ở cài đặt mới. PNG đã tải của bạn ở trong hàng đợi nên không cần kéo lại.',
      },
      {
        question: 'WebP có tốt hơn PNG cho ảnh hero website không?',
        answer:
          'Với ảnh hero chụp ảnh hay phức tạp, có: WebP ở 85% trông giống PNG trong khi tải nhanh hơn nhiều. PNG vẫn thắng với icon phẳng tí hon, pixel art hay bất kỳ tài nguyên nào mà chất lượng không mất dữ liệu về mặt toán học là yêu cầu cứng.',
      },
      {
        question: 'Chuyển PNG sang WebP có hoạt động trên trình duyệt di động không?',
        answer:
          'Có. Thanh trượt chất lượng, hàng đợi hàng loạt, trình xem so sánh và tải ZIP đều hoạt động trong Safari trên iOS và Chrome trên Android mà không cần cài ứng dụng. Loạt lớn chỉ mất lâu hơn một chút trên bộ xử lý điện thoại.',
      },
      {
        question: 'Tệp WebP đã chuyển đổi được đặt tên gì?',
        answer:
          'Bản tải đơn lẻ giữ tên gốc đã làm sạch của bạn với phần mở rộng .webp, nên logo.png thành logo.webp. Loạt từ hai tệp trở lên xuất gói trong compressmypic_png_to_webp.zip.',
      },
      {
        question: 'Tôi có thể chuyển ảnh chụp màn hình PNG có chữ sang WebP mà không bị mờ chữ không?',
        answer:
          'Có, ở chất lượng 85% đến 90%, chữ ảnh chụp màn hình vẫn sắc nét vì WebP giữ cạnh tương phản cao tốt. Hạ dưới 70% có thể làm mềm chữ nhỏ, nên hãy kiểm tra trình xem So Sánh và tăng chất lượng nếu chữ trông mờ.',
      },
      {
        question: 'Công cụ này có giữ hồ sơ màu ICC của PNG trong WebP không?',
        answer:
          'Không. Mã hoá lại bằng Canvas bỏ hồ sơ ICC nhúng và hiển thị màu ở sRGB chuẩn, vốn là thứ trình duyệt dùng cho hiển thị web. Với hầu hết đồ hoạ màn hình, sự khác biệt nhìn thấy không đáng kể, nhưng công việc màu quan trọng cho in ấn nên ở định dạng gốc.',
      },
      {
        question: 'Khi nào nên chọn PNG sang WebP thay vì PNG sang JPG?',
        answer:
          'Chọn WebP bất cứ khi nào ảnh phải giữ trong suốt hoặc tải nhanh trên website. Chỉ chọn JPG khi đích đến — ứng dụng email, tài liệu Office hay cổng tải lên cũ — không mở được WebP và bạn sẵn sàng từ bỏ độ trong suốt để lấy nền đặc.',
      },
      {
        question: 'PNG xen kẽ có chuyển đổi sang WebP được ở đây không?',
        answer:
          'Có. Bộ giải mã ảnh gốc của trình duyệt đọc cả luồng PNG chuẩn và xen kẽ (Adam7) một cách gọn gàng trước khi vẽ lên Canvas, nên tệp xen kẽ chuyển đổi đúng như PNG thường.',
      },
    ],
    relatedSlugs: ['/webp-to-png', '/jpg-to-webp', '/web-image-optimizer', '/image-converter'],
  },
  {
    slug: '/webp-to-png',
    name: 'Chuyển WebP Sang PNG',
    shortDescription: 'Chuyển ảnh WebP sang PNG không mất dữ liệu với độ trong suốt nguyên vẹn.',
    category: 'convert',
    seoTitle: 'Chuyển WebP Sang PNG Miễn Phí – Không Mất Chất Lượng, Giữ Trong Suốt',
    seoDescription:
      'Chuyển WebP sang PNG không mất dữ liệu online miễn phí ngay trên trình duyệt. Độ trong suốt đầy đủ giữ nguyên, kích thước pixel không bao giờ đổi, và loạt ảnh xuất thành một ZIP.',
    h1: 'Chuyển WebP Sang PNG Online Miễn Phí',
    subtitle:
      'Biến bản tải WebP thành tệp PNG không mất dữ liệu phổ biến với công cụ chuyển WebP sang PNG miễn phí, hoàn toàn ngay trên trình duyệt. Dành cho nhà thiết kế, biên tập viên và bất kỳ ai mà ứng dụng hay cửa hàng in của họ từ chối WebP, công cụ chuyển tệp WebP tối đa 25 MB mỗi ảnh mà không mất chất lượng và giữ nguyên độ trong suốt alpha đầy đủ, kèm xử lý hàng loạt và tải ZIP.',
    howToSteps: [
      {
        title: 'Thả tệp WebP tối đa 25 MB mỗi ảnh',
        description:
          'Tải lên một hoặc nhiều ảnh .webp từ bản tải về, chat hay website vào vùng thả.',
      },
      {
        title: 'Chờ chuyển đổi PNG không mất dữ liệu',
        description:
          'Mỗi WebP hiển thị lên canvas trong suốt và xuất thành PNG không mất dữ liệu tự động — không có thanh trượt chất lượng vì PNG không mất dữ liệu.',
      },
      {
        title: 'Kiểm tra độ trong suốt trên bản xem trước',
        description:
          'Vùng trong suốt hiển thị trên nền kẻ caro, và mỗi thẻ liệt kê dung lượng tệp gốc và đã chuyển đổi.',
      },
      {
        title: 'So sánh PNG với WebP gốc',
        description:
          'Bấm So Sánh trên bất kỳ thẻ nào để kiểm tra cạnh, chữ và độ trong suốt trong trình xem tách đôi.',
      },
      {
        title: 'Tải tệp PNG hoặc Tải Tất Cả (ZIP)',
        description:
          'Lưu từng tệp .png riêng lẻ hoặc gói loạt vào compressmypic_webp_to_png.zip trong một cú nhấp.',
      },
    ],
    features: [
      {
        title: 'Giữ nguyên độ trong suốt alpha',
        description: 'Logo và sticker WebP trong suốt vẫn trong suốt sạch trong PNG kết quả.',
      },
      {
        title: 'Hỗ trợ trình chỉnh sửa phổ biến',
        description: 'Mở PNG đã chuyển đổi trong mọi công cụ thiết kế, deck thuyết trình hay cổng tải lên mà không gặp vấn đề tương thích WebP.',
      },
      {
        title: 'Hỗ trợ hàng đợi hàng loạt',
        description: 'Chuyển nhiều bản tải WebP sang PNG trong một cú nhấp và xuất một ZIP duy nhất.',
      },
      {
        title: 'Xử lý riêng tư ngay trên thiết bị',
        description: 'Tệp không bao giờ rời khỏi thiết bị của bạn — chuyển đổi diễn ra trong bộ nhớ trình duyệt trên máy.',
      },
    ],
    faqs: [
      {
        question: 'Chuyển WebP sang PNG có thực sự không mất dữ liệu không?',
        answer:
          'Có. PNG lưu mọi pixel đã giải mã đúng như trình duyệt đọc từ WebP, không mất thêm do nén. Giới hạn chất lượng duy nhất là mức nén mà WebP gốc đã áp dụng — công cụ này không bao giờ thêm vòng hư hại lossy thứ hai.',
      },
      {
        question: 'Logo WebP trong suốt có giữ trong suốt thành PNG không?',
        answer:
          'Có. Toàn bộ kênh alpha được mang sang, nên pixel trong suốt vẫn trong suốt và cạnh bán trong suốt giữ hoà mượt. Ảnh thu nhỏ kết quả hiển thị độ trong suốt trên mẫu kẻ caro để bạn xác nhận trước khi tải về.',
      },
      {
        question: 'Vì sao đầu ra PNG lớn hơn WebP tôi đã tải lên?',
        answer:
          'PNG dùng nén DEFLATE không mất dữ liệu, còn WebP dùng nén hiện đại mạnh tay hơn nhiều, nên cùng pixel đó chỉ cần nhiều byte hơn dưới dạng PNG. Tệp lớn hơn là cái giá trung thực của khả năng tương thích phổ biến và không mất thêm chất lượng.',
      },
      {
        question: 'Tôi có thể chuyển WebP động sang PNG ở đây không?',
        answer:
          'WebP động xuất thành PNG tĩnh của khung đầu tiên, vì PNG không thể lưu chuyển động. Khung tĩnh đó phù hợp cho ảnh thu nhỏ, tài liệu và sticker — với phiên bản chuyển động, hãy giữ tệp WebP gốc.',
      },
      {
        question: 'PNG có giữ cùng chiều rộng và chiều cao như WebP không?',
        answer:
          'Có. Mọi tệp .png đã chuyển đổi giữ 100% kích thước pixel chính xác của WebP gốc, nên không gì bị cắt hay đổi kích thước. Dùng công cụ Đổi Kích Thước Ảnh sau đó nếu bạn cũng cần kích thước nhỏ hơn.',
      },
      {
        question: 'Tệp WebP có bị tải lên máy chủ trong quá trình chuyển đổi không?',
        answer:
          'Không. Chuyển đổi chạy trên HTML5 Canvas trong tab trình duyệt của bạn, nên ảnh của bạn không bao giờ được gửi lên máy chủ, lưu trữ hay bị người khác xem. Đóng tab sẽ xoá chúng khỏi bộ nhớ trình duyệt.',
      },
      {
        question: 'Tôi có thể chuyển một loạt ảnh WebP sang PNG cùng lúc không?',
        answer:
          'Có. Thả nhiều tệp .webp tối đa 25 MB mỗi tệp vào hàng đợi và tải mọi thứ cùng nhau trong compressmypic_webp_to_png.zip. Mỗi tệp chuyển đổi độc lập nên một tệp lỗi không bao giờ chặn các tệp còn lại.',
      },
      {
        question: 'Một tệp WebP có thể lớn đến mức nào ở đây?',
        answer:
          'Mỗi tệp WebP có thể tối đa 25 MB, bao phủ bản tải độ phân giải cao và ảnh chụp màn hình lớn. Vì chuyển đổi chạy trên thiết bị của bạn, tệp lớn xử lý ở tốc độ CPU ngay trên máy mà không chờ tải lên.',
      },
      {
        question: 'Có thanh trượt chất lượng nào cho WebP sang PNG không?',
        answer:
          'Không, và cũng không cần: PNG là định dạng không mất dữ liệu nên không có đánh đổi chất lượng so với dung lượng để chỉnh. Công cụ hiển thị ghi chú Mã Hoá PNG Không Mất Dữ Liệu thay vì thanh trượt, và mọi pixel được giữ chính xác.',
      },
      {
        question: 'Tôi có thể dùng tệp PNG đã chuyển đổi ở đâu?',
        answer:
          'Bất cứ nơi nào chấp nhận PNG: Photoshop, Figma, Canva, PowerPoint, Word, cửa hàng in và cổng tải lên từ chối WebP. PNG là định dạng raster chỉnh sửa được phổ biến nhất, đó chính là lý do chuyển đổi này tồn tại.',
      },
      {
        question: 'Công cụ chuyển đổi có giữ siêu dữ liệu WebP như EXIF không?',
        answer:
          'Không. Vẽ pixel lên HTML5 Canvas sẽ xoá dữ liệu EXIF, XMP và hồ sơ ICC nhúng, nên PNG xuất gọn nhẹ và không còn chi tiết vị trí hay máy ảnh ẩn.',
      },
      {
        question: 'Làm sao xác nhận độ trong suốt còn nguyên trước khi tải về?',
        answer:
          'Ảnh thu nhỏ kết quả hiển thị vùng trong suốt trên nền kẻ caro, và nút So Sánh mở trình xem tách đôi nơi bạn có thể kéo qua ảnh để xác nhận cạnh hoà mượt. Nếu nền trông đặc, WebP nguồn không có độ trong suốt.',
      },
      {
        question: 'Tôi có thể chuyển ảnh chụp màn hình WebP có chữ sang PNG mà không mất chất lượng không?',
        answer:
          'Có. Vì PNG không mất dữ liệu, chữ ảnh chụp màn hình, nhãn UI và đường mảnh vẫn hoàn hảo từng pixel — sắc nét hơn bất kỳ lần mã hoá lại JPG nào. Nhờ vậy đây là lựa chọn đúng khi ảnh chụp màn hình phải chỉnh sửa hay in sau này.',
      },
      {
        question: 'Bản tải PNG sẽ giữ tên tệp gì?',
        answer:
          'Bản tải đơn lẻ giữ tên gốc đã làm sạch của bạn với phần mở rộng .png, nên sticker.webp thành sticker.png. Loạt từ hai tệp trở lên xuất gói trong compressmypic_webp_to_png.zip.',
      },
      {
        question: 'Chuyển WebP sang PNG có hoạt động trên điện thoại không?',
        answer:
          'Có. Vùng tải lên, hàng đợi hàng loạt, trình xem so sánh và tải ZIP đều hoạt động trong Safari trên iOS và Chrome trên Android mà không cần cài ứng dụng. Loạt lớn chỉ mất lâu hơn một chút trên bộ xử lý điện thoại.',
      },
      {
        question: 'Khi nào nên chọn WebP sang PNG thay vì WebP sang JPG?',
        answer:
          'Chọn PNG khi bạn phải giữ độ trong suốt hoặc cần chất lượng không mất dữ liệu hoàn hảo từng pixel cho chỉnh sửa, thiết kế hay in ấn. Chọn JPG khi bạn cần tệp tương thích rộng rãi nhỏ nhất và có thể chấp nhận nền đặc cùng mất nén nhẹ.',
      },
      {
        question: 'Tệp WebP không có phần mở rộng có chuyển đổi được không?',
        answer:
          'Không trực tiếp — trang này lọc đầu vào theo phần mở rộng .webp và loại MIME WebP, nên hãy đổi tên tệp kết thúc bằng .webp trước. Nếu tệp thực ra là JPG hoặc PNG bị site gắn nhãn sai, hãy dùng công cụ chuyển đổi tương ứng thay vào đó.',
      },
      {
        question: 'Vì sao nhà thiết kế cần PNG thay vì WebP?',
        answer:
          'Công cụ thiết kế, trình chỉnh sửa theo lớp và quy trình in thường cần PNG cho mặt nạ, vùng chọn và lớp phủ trong suốt mà WebP không thể cung cấp trong pipeline của họ. PNG cũng đảm bảo mọi lần chỉnh sửa sau này bắt đầu từ pixel chính xác, không phải bản giải mã lossy.',
      },
      {
        question: 'Công cụ có hỗ trợ tệp WebP mã hoá không mất dữ liệu không?',
        answer:
          'Có. Tệp WebP không mất dữ liệu giải mã gọn trong trình duyệt và mã hoá lại thành PNG không mất dữ liệu với mọi pixel được giữ nguyên. Dù WebP nguồn lossy hay không mất dữ liệu, đầu ra PNG không thêm mất chất lượng nào.',
      },
      {
        question: 'Chuyện gì xảy ra nếu tệp WebP bị hỏng hoặc không phải WebP thật?',
        answer:
          'Tệp đó hiển thị thông báo lỗi rõ ràng theo từng tệp, giải thích không thể giải mã, trong khi các tệp khác trong loạt vẫn chuyển đổi bình thường. Tải lại WebP gốc từ nguồn thường khắc phục tệp bị cắt hay gắn nhãn sai.',
      },
    ],
    relatedSlugs: ['/webp-to-jpg', '/png-to-webp', '/jpg-to-png', '/image-converter'],
  },
  {
    slug: '/svg-to-png',
    name: 'Chuyển SVG Sang PNG',
    shortDescription: 'Raster hoá đồ hoạ vector SVG thành PNG trong suốt sắc nét 1×–4×.',
    category: 'convert',
    seoTitle: 'Chuyển SVG Sang PNG Miễn Phí – Xuất Sắc Nét 1x Đến 4x',
    seoDescription:
      'Chuyển vector SVG sang PNG trong suốt online miễn phí ngay trên trình duyệt. Xuất PNG độ phân giải cao 1x, 2x, 3x hoặc 4x sắc nét ngay trên máy, với giới hạn trung thực về tài nguyên ngoài.',
    h1: 'Chuyển SVG Sang PNG Online Miễn Phí',
    subtitle:
      'Raster hoá logo, icon và minh hoạ SVG thành PNG trong suốt sắc nét với công cụ chuyển SVG sang PNG miễn phí, hoàn toàn ngay trên trình duyệt. Dành cho nhà thiết kế và lập trình viên cần xuất độ phân giải cao cho slide, tài liệu và cửa hàng ứng dụng, công cụ hiển thị SVG tự chứa ở tỉ lệ 1×, 2×, 3× hoặc 4× (tối đa 8000px) kèm xử lý hàng loạt và tải ZIP.',
    howToSteps: [
      {
        title: 'Thả tệp SVG tối đa 25 MB mỗi tệp',
        description:
          'Tải lên một hoặc nhiều tệp .svg vector với hình dạng, path, gradient hoặc style nội tuyến.',
      },
      {
        title: 'Chọn tỉ lệ xuất raster (1×–4×)',
        description:
          'Chọn 1× cho kích thước nội tại của SVG, hoặc 2×–4× cho xuất PNG Retina và độ phân giải cao sắc nét.',
      },
      {
        title: 'Bấm Chuyển Đổi Lại Tất Cả sau khi đổi tỉ lệ',
        description:
          'Thay đổi tỉ lệ áp dụng khi bạn chuyển đổi lại, để bản xem trước và bản tải về khớp kích thước bạn chọn.',
      },
      {
        title: 'Kiểm tra ghi chú về tài nguyên ngoài',
        description:
          'Ảnh ngoài, stylesheet và webfont trong SVG bị bảo mật canvas của trình duyệt chặn và sẽ không xuất hiện trong PNG.',
      },
      {
        title: 'So sánh PNG đã raster hoá',
        description:
          'Bấm So Sánh trên bất kỳ thẻ nào để kiểm tra cạnh sắc nét và độ trong suốt trong trình xem tách đôi.',
      },
      {
        title: 'Tải tệp PNG hoặc Tải Tất Cả (ZIP)',
        description:
          'Lưu từng tệp .png riêng lẻ hoặc gói loạt vào compressmypic_svg_to_png.zip trong một cú nhấp.',
      },
    ],
    features: [
      {
        title: 'Xuất độ phân giải cao 1×, 2×, 3× & 4×',
        description: 'Thu phóng icon 24px nhỏ hay logo 100px gọn gàng lên đến độ phân giải 4× trước khi raster hoá.',
      },
      {
        title: 'Giữ nền trong suốt',
        description: 'Xuất PNG kênh alpha sắc nét, sẵn sàng cho slide, header web và deck thiết kế.',
      },
      {
        title: 'Phạm vi Canvas độc lập trung thực',
        description: 'Ghi rõ hình dạng/style vector SVG nội tuyến hiển thị gọn, còn URL ảnh ngoài hay webfont ngoài trong SVG có thể bị sandbox Canvas của trình duyệt chặn.',
      },
      {
        title: 'Raster hoá SVG hàng loạt',
        description: 'Chuyển cả bộ icon sang PNG trong một lần và tải ZIP.',
      },
    ],
    faqs: [
      {
        question: 'SVG của tôi dùng ảnh liên kết — vì sao nó thiếu trong PNG?',
        answer:
          'Vì lý do bảo mật, trình duyệt sandbox tệp SVG hiển thị lên HTML5 Canvas và chặn tìm nạp URL <image> ngoài, nên bất kỳ ảnh nào liên kết từ web cũng không thể tải trong quá trình raster hoá. Nhúng ảnh trực tiếp vào tệp SVG hoặc thay bằng hình vector nội tuyến, và PNG sẽ hiển thị đầy đủ.',
      },
      {
        question: 'Tôi có thể dùng webfont trong SVG để xuất PNG không?',
        answer:
          'Webfont ngoài tham chiếu bằng URL bị chặn bởi cùng sandbox canvas, nên chữ đặt bằng font từ xa sẽ rơi về font hệ thống hoặc biến mất. Dùng font hệ thống, chuyển chữ thành outline trong trình chỉnh sửa, hoặc nhúng dữ liệu font trực tiếp vào tệp SVG.',
      },
      {
        question: 'Tôi nên chọn tỉ lệ nào để biến icon 24px thành PNG 96px sắc nét?',
        answer:
          'Chọn 4× trong Tỉ Lệ Xuất Raster rồi bấm Chuyển Đổi Lại Tất Cả: icon 24px thành PNG 96px sắc nét vì vector hiển thị lại ở kích thước lớn hơn thay vì kéo giãn pixel. Dùng 2× cho xuất 48px, và nhớ đầu ra giới hạn 8000px ở cạnh dài nhất.',
      },
      {
        question: 'PNG lớn nhất mà SVG có thể tạo ở đây là bao nhiêu?',
        answer:
          'Tỉ lệ xuất giới hạn 8000px ở cạnh dài nhất, nên SVG rất lớn ở 4× sẽ dừng ở giới hạn đó. Với hầu hết icon và logo, giới hạn không bao giờ quan trọng — logo 100px ở 4× chỉ 400px, thấp hơn nhiều so với giới hạn.',
      },
      {
        question: 'Chuyển SVG sang PNG có giữ nền trong suốt không?',
        answer:
          'Có. Trừ khi chính SVG vẽ hình chữ nhật nền, PNG xuất giữ nền trong suốt alpha sạch, sẵn sàng cho slide, header và deck thiết kế. Bản xem trước hiển thị độ trong suốt trên mẫu kẻ caro.',
      },
      {
        question: 'Tệp SVG có bị tải lên máy chủ không?',
        answer:
          'Không. Raster hoá chạy trên HTML5 Canvas trong tab trình duyệt của bạn, nên tệp vector của bạn không bao giờ rời khỏi máy tính. Đóng tab sẽ xoá chúng khỏi bộ nhớ trình duyệt.',
      },
      {
        question: 'Tôi có thể chuyển cả bộ icon SVG cùng lúc không?',
        answer:
          'Có. Thả nhiều tệp .svg tối đa 25 MB mỗi tệp vào hàng đợi, chọn một tỉ lệ cho cả loạt, rồi tải mọi thứ cùng nhau trong compressmypic_svg_to_png.zip. Mỗi icon raster hoá độc lập.',
      },
      {
        question: 'Điều gì khiến SVG không raster hoá được và báo lỗi?',
        answer:
          'Nguyên nhân phổ biến nhất là XML không hợp lệ: thẻ không đóng, thuộc tính sai định dạng, hoặc tệp thực ra không phải mã SVG. Mở tệp trong trình soạn văn bản hay trình chỉnh vector, sửa lỗi cú pháp rồi thử lại — thông báo lỗi hiện theo từng tệp nên SVG khác vẫn chuyển đổi.',
      },
      {
        question: 'Gradient và độ mờ trong SVG có hiển thị đúng không?',
        answer:
          'Có. Gradient tuyến tính và xuyên tâm nội tuyến, thuộc tính độ mờ và tô hoà trộn định nghĩa trong SVG hiển thị gọn lên Canvas. Chỉ tài nguyên tìm nạp từ ngoài tệp — ảnh ngoài, stylesheet và font — bị chặn.',
      },
      {
        question: 'Chữ trong SVG của tôi có xuất thành chữ PNG sắc nét không?',
        answer:
          'Có, khi chữ dùng font hệ thống đã cài trên thiết bị của bạn, nó raster hoá sắc nét ở mọi tỉ lệ. Chữ dùng webfont ngoài sẽ rơi về font mặc định, nên hãy chuyển chữ thành outline trong Illustrator, Figma hay Inkscape để đảm bảo kết quả.',
      },
      {
        question: 'Tôi có thể chuyển SVG tham chiếu tệp CSS ngoài không?',
        answer:
          'Không. Stylesheet ngoài bị bảo mật canvas của trình duyệt chặn, nên class định nghĩa trong tệp .css liên kết sẽ không áp dụng và hình có thể hiển thị không có style. Chuyển style nội tuyến bằng thuộc tính style hoặc khối <style> trong chính SVG.',
      },
      {
        question: 'Đầu ra PNG có không mất dữ liệu không?',
        answer:
          'Có. Pixel đã raster hoá được lưu dưới dạng PNG không mất dữ liệu, nên cạnh, chữ và màu phẳng vẫn hoàn hảo từng pixel ở kích thước đã xuất. Xuất lại ở tỉ lệ cao hơn nếu bạn cần thêm chi tiết — không có thanh trượt chất lượng vì PNG không có bước lossy.',
      },
      {
        question: 'PNG ở tỉ lệ 1× có kích thước nào?',
        answer:
          'Ở 1×, PNG khớp kích thước nội tại của SVG từ thuộc tính width và height hoặc viewBox. Icon 24×24 xuất thành 24×24 pixel, còn SVG không có kích thước nội tại dùng kích thước viewBox.',
      },
      {
        question: 'Tôi có thể chuyển tệp SVG trên điện thoại không?',
        answer:
          'Có. Vùng tải lên, bộ chọn tỉ lệ, trình xem so sánh và tải ZIP đều hoạt động trong Safari trên iOS và Chrome trên Android mà không cần cài ứng dụng. Bộ icon lớn chỉ mất lâu hơn một chút trên bộ xử lý điện thoại.',
      },
      {
        question: 'PNG đã xuất sẽ giữ tên tệp gì?',
        answer:
          'Bản tải đơn lẻ giữ tên gốc đã làm sạch của bạn với phần mở rộng .png, nên logo.svg thành logo.png. Loạt từ hai tệp trở lên xuất gói trong compressmypic_svg_to_png.zip.',
      },
      {
        question: 'Công cụ chuyển đổi có hỗ trợ ảnh động SVG (SMIL/CSS) không?',
        answer:
          'Không. Raster hoá chụp một khung tĩnh duy nhất của SVG, nên ảnh động SMIL và CSS không mang sang PNG. Với kết quả động, hãy xuất ảnh động dưới dạng video hoặc GIF từ công cụ thiết kế của bạn.',
      },
      {
        question: 'Tôi có thể raster hoá SVG với ảnh nhúng dưới dạng data URI không?',
        answer:
          'Thường là có. Ảnh nhúng trực tiếp trong tệp dưới dạng data URI base64 là một phần của chính SVG, nên không gì được tìm nạp từ ngoài và chúng thường hiển thị. Ảnh liên kết bằng URL http mới là thứ bị bảo mật canvas chặn.',
      },
      {
        question: 'Khi nào nên dùng SVG sang PNG thay vì giữ SVG?',
        answer:
          'Dùng PNG khi đích đến cần ảnh raster: PowerPoint, Word, bài đăng mạng xã hội, ảnh chụp màn hình cửa hàng ứng dụng, hay bất kỳ công cụ nào không mở được SVG. Giữ SVG khi đồ hoạ phải vô hạn khả năng mở rộng trên website.',
      },
      {
        question: 'Chuyển SVG sang PNG có thay đổi màu sắc không?',
        answer:
          'Màu hiển thị như định nghĩa trong SVG, và đầu ra là PNG sRGB chuẩn. Canvas xoá hồ sơ ICC nhúng, nên khớp màu quan trọng cho in ấn nên ở trong tệp vector gốc — với màn hình, sự khác biệt nhìn thấy không đáng kể.',
      },
      {
        question: 'Dung lượng tệp SVG tối đa được chấp nhận là bao nhiêu?',
        answer:
          'Mỗi tệp SVG có thể tối đa 25 MB, bao phủ cả tệp minh hoạ khổng lồ với hàng nghìn path. SVG rất phức tạp chỉ mất thêm một hai giây để raster hoá trên thiết bị của bạn.',
      },
    ],
    relatedSlugs: ['/favicon-generator', '/png-to-webp', '/image-resizer', '/image-converter'],
  },
  {
    slug: '/avif-to-jpg',
    name: 'Chuyển AVIF Sang JPG',
    shortDescription: 'Chuyển ảnh AVIF sang JPG phổ biến qua bộ giải mã của trình duyệt.',
    category: 'convert',
    seoTitle: 'Chuyển AVIF Sang JPG Miễn Phí – Mở AVIF Ở Mọi Nơi',
    seoDescription:
      'Chuyển ảnh AVIF sang JPG phổ biến online miễn phí ngay trên trình duyệt. Giải mã AVIF gốc, bộ chọn lót cho độ trong suốt, điều khiển chất lượng và xuất ZIP hàng loạt.',
    h1: 'Chuyển AVIF Sang JPG Online Miễn Phí',
    subtitle:
      'Biến ảnh .avif hiện đại thành tệp .jpg được hỗ trợ phổ biến với công cụ chuyển AVIF sang JPG miễn phí, dùng bộ giải mã AVIF có sẵn của trình duyệt. Dành cho bất kỳ ai tải tệp AVIF mà trình chỉnh sửa, ứng dụng office hay biểu mẫu tải lên không mở được, công cụ chuyển tệp AVIF tối đa 25 MB mỗi ảnh ở chất lượng mặc định 88%, kèm bộ chọn màu lót và xuất ZIP hàng loạt — không gì được tải lên.',
    howToSteps: [
      {
        title: 'Thả ảnh AVIF tối đa 25 MB mỗi ảnh',
        description:
          'Tải tệp .avif lên trong trình duyệt hiện đại có giải mã AVIF gốc — Chrome, Edge, Firefox hoặc Safari.',
      },
      {
        title: 'Chọn màu lót cho vùng trong suốt',
        description:
          'Chọn Trắng (#ffffff), Đen (#000000), Xám Nhạt (#f8fafc) hoặc bất kỳ màu hex tuỳ chỉnh nào, vì JPG không thể lưu độ trong suốt.',
      },
      {
        title: 'Đặt chất lượng xuất JPG (20%–100%)',
        description:
          'Giữ mặc định sắc nét 88% hoặc kéo về 20% cho tệp tí hon và 100% cho chi tiết tối đa, rồi bấm Chuyển Đổi Lại Tất Cả.',
      },
      {
        title: 'So sánh JPG với AVIF gốc',
        description:
          'Bấm So Sánh trên bất kỳ thẻ nào để kiểm tra chi tiết, màu sắc và cạnh trong trình xem tách đôi trước khi lưu.',
      },
      {
        title: 'Tải tệp JPG hoặc Tải Tất Cả (ZIP)',
        description:
          'Lưu từng tệp .jpg riêng lẻ hoặc gói loạt vào compressmypic_avif_to_jpg.zip trong một cú nhấp.',
      },
    ],
    features: [
      {
        title: 'Giải mã AVIF gốc của trình duyệt',
        description: 'Tận dụng bộ giải mã AVIF phần cứng/phần mềm của trình duyệt hiện đại ngay trên máy mà không qua máy chủ.',
      },
      {
        title: 'Tương thích định dạng trung thực',
        description: 'Xây dựng nghiêm ngặt để giải mã AVIF thành JPG phổ biến (hoặc dùng công cụ JPG/PNG/WebP cho định dạng khác — không có mã hoá/xuất AVIF).',
      },
      {
        title: 'Bộ chọn màu lót trong suốt',
        description: 'Vùng AVIF trong suốt hoà gọn lên nền trắng hoặc nền hex tuỳ chỉnh của bạn.',
      },
      {
        title: 'Xuất ZIP hàng loạt',
        description: 'Chuyển nhiều bản tải AVIF sang JPG trong một phiên trình duyệt.',
      },
    ],
    faqs: [
      {
        question: 'AVIF là gì và vì sao một số ứng dụng không mở được nó?',
        answer:
          'AVIF là định dạng ảnh hiện đại dựa trên nén video AV1, lưu ảnh với dung lượng nhỏ hơn nhiều so với JPG. Vì nó mới hơn, nhiều trình chỉnh sửa cũ, bộ office, máy in và cổng tải lên chưa bao giờ thêm bộ giải mã AVIF, nên chuyển sang JPG là cách nhanh nhất để ảnh dùng được ở mọi nơi.',
      },
      {
        question: 'Trình duyệt nào có thể giải mã AVIF để chuyển đổi ở đây?',
        answer:
          'Chrome, Edge, Firefox và Safari hiện đại đều giải mã AVIF gốc trong trình duyệt, và công cụ này dùng chính khả năng đó. Nếu bạn mở trang trong trình duyệt rất cũ, mỗi tệp sẽ hiện lỗi rõ ràng thay vì chuyển đổi — cập nhật trình duyệt sẽ khắc phục.',
      },
      {
        question: 'Chuyện gì xảy ra nếu trình duyệt của tôi không thể giải mã tệp AVIF?',
        answer:
          'Tệp hiển thị thông báo lỗi rõ ràng theo từng tệp, giải thích trình duyệt của bạn không thể giải mã, trong khi các tệp khác trong loạt vẫn chuyển đổi bình thường. Chuyển sang phiên bản Chrome, Firefox, Edge hoặc Safari hiện tại sẽ giải quyết trong hầu hết trường hợp.',
      },
      {
        question: 'Chuyển AVIF sang JPG có mất chất lượng không?',
        answer:
          'Một phần mất mát là không tránh khỏi vì JPG mã hoá lại pixel bằng nén lossy, còn AVIF hiệu quả hơn nhiều ở cùng chất lượng. Ở mặc định 88%, sự khác biệt gần như không nhìn thấy với ảnh; chỉ soi pixel cực kỹ trên kết cấu mảnh mới thấy mềm đi.',
      },
      {
        question: 'Vùng AVIF trong suốt có hoá đen trong JPG không?',
        answer:
          'Không. Vùng trong suốt lấp bằng màu lót bạn chọn — mặc định trắng — nên logo và ảnh cắt có nền đặc sạch thay vì hộp đen. Chọn Đen, Xám Nhạt hay bất kỳ màu hex tuỳ chỉnh nào trước khi chuyển đổi.',
      },
      {
        question: 'Tôi có thể chuyển ảnh AVIF có độ trong suốt sang JPG một cách gọn gàng không?',
        answer:
          'Có. Bộ chọn màu lót hoà cạnh bán trong suốt mượt mà trên nền bạn chọn, nên bóng mềm và đường cong khử răng cưa trông tự nhiên thay vì cắt thành đường viền cứng. Kiểm tra trình xem So Sánh để xác nhận hoà trộn.',
      },
      {
        question: 'Tệp AVIF có bị tải lên máy chủ không?',
        answer:
          'Không. Giải mã và mã hoá lại đều diễn ra ngay trên máy bằng bộ giải mã AVIF gốc của trình duyệt và HTML5 Canvas, nên ảnh của bạn không bao giờ rời khỏi thiết bị. Đóng tab sẽ xoá chúng khỏi bộ nhớ trình duyệt.',
      },
      {
        question: 'Làm sao chuyển đổi nhiều bản tải AVIF trong một lần?',
        answer:
          'Thả nhiều tệp .avif tối đa 25 MB mỗi tệp vào hàng đợi, chọn một màu lót và chất lượng cho cả loạt, rồi tải mọi thứ cùng nhau trong compressmypic_avif_to_jpg.zip. Mỗi tệp chuyển đổi độc lập.',
      },
      {
        question: 'Tệp AVIF lớn nhất được chấp nhận là bao nhiêu?',
        answer:
          'Mỗi tệp AVIF có thể tối đa 25 MB, bao phủ bản tải độ phân giải cao và ảnh chụp máy ảnh. Vì giải mã chạy trên thiết bị của bạn, tệp lớn xử lý ở tốc độ CPU ngay trên máy mà không chờ tải lên.',
      },
      {
        question: 'Có cách nào biến JPG thành AVIF ở đây không?',
        answer:
          'Không. HTML5 Canvas không thể mã hoá AVIF phổ biến trên mọi trình duyệt, nên site này chỉ giải mã AVIF thành đầu ra JPG, PNG và WebP đáng tin cậy. Với đầu ra AVIF, bạn cần bộ mã hoá máy tính chuyên dụng.',
      },
      {
        question: 'JPG có giữ cùng kích thước pixel như AVIF không?',
        answer:
          'Có. Mọi tệp .jpg đã chuyển đổi giữ 100% chiều rộng và chiều cao chính xác của AVIF gốc, nên không gì bị cắt hay đổi kích thước. Dùng công cụ Đổi Kích Thước Ảnh sau đó nếu bạn cũng cần kích thước nhỏ hơn.',
      },
      {
        question: 'Phần trăm chất lượng nào phù hợp nhất với ảnh AVIF?',
        answer:
          'Mặc định 88% là lý tưởng cho hầu hết ảnh: chi tiết vẫn sắc nét trong khi tệp vẫn nhỏ. Với ảnh rất chi tiết hay ảnh bạn dự định chỉnh sửa thêm, hãy tăng chất lượng lên 92% hoặc 95%; với chia sẻ nhanh, 80% thường là đủ.',
      },
      {
        question: 'Ảnh AVIF HDR hay gam rộng trông ra sao sau khi chuyển đổi?',
        answer:
          'Chúng xuất thành JPG sRGB chuẩn, nên vùng sáng HDR cực đoan được ánh xạ vào dải hiển thị thường và màu gam rộng rất bão hoà dịch nhẹ về sRGB. Với ảnh hằng ngày, kết quả trông tự nhiên; với công việc màu quan trọng, hãy giữ AVIF gốc.',
      },
      {
        question: 'Tôi có thể kiểm tra JPG đã chuyển đổi trước khi tải về không?',
        answer:
          'Có. Bấm So Sánh trên bất kỳ thẻ kết quả nào để mở trình xem tách đôi và kéo qua ảnh để kiểm tra chi tiết, màu sắc và cạnh với AVIF gốc. Mỗi thẻ cũng hiển thị dung lượng gốc và đã chuyển đổi.',
      },
      {
        question: 'Nếu kết quả đầu tiên trông sai, tôi có thể chỉnh cài đặt và thử lại không?',
        answer:
          'Có. Chọn mẫu lót khác hoặc di chuyển thanh trượt chất lượng bất cứ lúc nào rồi bấm Chuyển Đổi Lại Tất Cả để tạo lại mọi tệp đã tải mà không cần tải lại. Tệp AVIF gốc của bạn ở trong hàng đợi cho đến khi bạn xoá chúng.',
      },
      {
        question: 'Bản tải JPG sẽ giữ tên tệp gì?',
        answer:
          'Bản tải đơn lẻ giữ tên gốc đã làm sạch của bạn với phần mở rộng .jpg, nên photo.avif thành photo.jpg. Loạt từ hai tệp trở lên xuất gói trong compressmypic_avif_to_jpg.zip.',
      },
      {
        question: 'Chuyển AVIF sang JPG có hoạt động trên trình duyệt di động không?',
        answer:
          'Có, trong trình duyệt di động hiện đại có giải mã AVIF gốc, như Chrome hiện tại trên Android và Safari trên iOS. Bộ chọn lót, thanh trượt chất lượng và tải ZIP đều hoạt động mà không cần cài ứng dụng.',
      },
      {
        question: 'Khi nào nên chuyển AVIF sang JPG thay vì AVIF sang PNG?',
        answer:
          'Chọn JPG khi bạn cần tệp nhỏ, tương thích phổ biến cho email, Office hay cổng tải lên. Chọn PNG khi bạn phải giữ độ trong suốt hoặc cần chất lượng không mất dữ liệu hoàn hảo từng pixel cho chỉnh sửa — lưu ý tệp PNG sẽ lớn hơn nhiều.',
      },
      {
        question: 'Vì sao JPG đôi khi lớn hơn AVIF?',
        answer:
          'AVIF nén hiệu quả hơn JPG nhiều, nên AVIF nhỏ mã hoá lại thành JPG ở 88% có thể dễ dàng lớn hơn nguồn. Điều đó là bình thường: bạn đang đổi dung lượng tệp lấy khả năng tương thích phổ biến. Hạ chất lượng về 75% thường thu nhỏ JPG trở lại.',
      },
      {
        question: 'Công cụ chuyển đổi có xoá siêu dữ liệu AVIF không?',
        answer:
          'Có. Vẽ pixel lên HTML5 Canvas sẽ xoá dữ liệu EXIF, XMP và hồ sơ ICC nhúng, nên JPG xuất gọn nhẹ và không còn chi tiết vị trí hay máy ảnh ẩn.',
      },
    ],
    relatedSlugs: ['/webp-to-jpg', '/heic-to-jpg', '/jpg-to-webp', '/image-converter'],
  },
  {
    slug: '/bmp-to-jpg',
    name: 'Chuyển BMP Sang JPG',
    shortDescription: 'Chuyển bitmap BMP chưa nén khổng lồ thành tệp JPG gọn nhẹ.',
    category: 'convert',
    seoTitle: 'Chuyển BMP Sang JPG Miễn Phí – Giảm Dung Lượng Bitmap Nhanh',
    seoDescription:
      'Chuyển bitmap BMP chưa nén sang JPG gọn nhẹ online miễn phí ngay trên trình duyệt. Cắt dung lượng tệp 85–95% một cách riêng tư, kèm thanh trượt chất lượng và tải ZIP hàng loạt.',
    h1: 'Chuyển BMP Sang JPG Online Miễn Phí',
    subtitle:
      'Biến bitmap BMP Windows chưa nén khổng lồ thành tệp JPG nhẹ có thể chia sẻ với công cụ chuyển BMP sang JPG miễn phí, ngay trên trình duyệt. Dành cho bất kỳ ai dọn thư mục ảnh chụp màn hình .bmp đời cũ, bản scan hay ảnh xuất Paint, công cụ chuyển tệp BMP tối đa 25 MB mỗi ảnh ở chất lượng mặc định 88% — thường thu nhỏ 85–95% — kèm xử lý hàng loạt và tải ZIP.',
    howToSteps: [
      {
        title: 'Thả bitmap BMP tối đa 25 MB mỗi ảnh',
        description:
          'Tải lên một hoặc nhiều tệp .bmp từ ảnh chụp màn hình Windows, bản scan hay thư mục đời cũ vào vùng thả.',
      },
      {
        title: 'Đặt chất lượng xuất JPG (20%–100%)',
        description:
          'Giữ mặc định sắc nét 88% hoặc kéo về 20% cho tệp tí hon và 100% cho chi tiết tối đa, rồi bấm Chuyển Đổi Lại Tất Cả.',
      },
      {
        title: 'Kiểm tra mức tiết kiệm dung lượng trên mỗi thẻ',
        description:
          'Mỗi kết quả hiển thị dung lượng BMP gốc khổng lồ, dung lượng JPG gọn và phần trăm tiết kiệm.',
      },
      {
        title: 'So sánh JPG với BMP gốc',
        description:
          'Bấm So Sánh trên bất kỳ thẻ nào để xác minh chữ và chi tiết vẫn sắc nét trong trình xem tách đôi.',
      },
      {
        title: 'Tải tệp JPG hoặc Tải Tất Cả (ZIP)',
        description:
          'Lưu từng tệp .jpg riêng lẻ hoặc gói loạt vào compressmypic_bmp_to_jpg.zip trong một cú nhấp.',
      },
    ],
    features: [
      {
        title: 'Giảm dung lượng điển hình 90%+',
        description: 'Bitmap BMP chưa nén lưu pixel thô; nén JPG thu nhỏ chúng mạnh mẽ cho email và web.',
      },
      {
        title: 'Giữ nguyên kích thước pixel',
        description: 'Duy trì đúng chiều rộng và chiều cao gốc trong khi hiện đại hoá container định dạng.',
      },
      {
        title: 'Hàng đợi hàng loạt + tải ZIP',
        description: 'Dọn thư mục ảnh chụp màn hình .bmp đời cũ hay bản scan trong một lần nhanh.',
      },
      {
        title: 'Riêng tư 100% phía máy khách',
        description: 'Không tải lên — chuyển đổi diễn ra ngay trên máy tính của bạn.',
      },
    ],
    faqs: [
      {
        question: 'Vì sao tệp BMP lại khổng lồ so với JPG?',
        answer:
          'BMP là định dạng chưa nén: nó lưu gần như mọi pixel dưới dạng dữ liệu màu thô mà gần như không nén, nên một ảnh chụp màn hình có thể nặng hàng chục megabyte. JPG dùng nén lossy thông minh, loại bỏ dữ liệu mà mắt bạn hầu như không nhận ra, đó là lý do cùng một ảnh thu nhỏ mạnh mẽ.',
      },
      {
        question: 'Tôi có thể tiết kiệm bao nhiêu dung lượng tệp khi chuyển BMP sang JPG?',
        answer:
          'Vì tệp BMP thường chưa nén, chuyển sang JPG 88% thường cắt dung lượng tệp 85% đến 95% — bitmap 10 MB thường thành JPG 500 KB đến 1,5 MB. Bản scan chụp ảnh tiết kiệm nhiều nhất, còn đồ hoạ phẳng đơn sắc tiết kiệm ít hơn một chút.',
      },
      {
        question: 'Chuyển BMP sang JPG có thay đổi kích thước ảnh không?',
        answer:
          'Không. Mọi tệp .jpg đã chuyển đổi giữ 100% chiều rộng và chiều cao pixel chính xác của BMP gốc, nên không gì bị cắt hay đổi kích thước. Dùng công cụ Đổi Kích Thước Ảnh sau đó nếu bạn cũng cần kích thước nhỏ hơn.',
      },
      {
        question: 'Cài đặt chất lượng nào giữ ảnh chụp màn hình BMP đọc được?',
        answer:
          'Mặc định 88% giữ chữ ảnh chụp màn hình và chi tiết UI sắc nét trong khi gỡ hầu hết độ cồng kềnh của bitmap. Với bản scan có chữ in mảnh hay font nhỏ, hãy tăng chất lượng lên 92% hoặc 95%; với chia sẻ nhanh, 80% thường là đủ.',
      },
      {
        question: 'Tệp BMP có bị tải lên máy chủ không?',
        answer:
          'Không. Chuyển đổi chạy trên HTML5 Canvas trong tab trình duyệt của bạn, nên ảnh chụp màn hình và bản scan của bạn không bao giờ rời khỏi máy tính. Đóng tab sẽ xoá chúng khỏi bộ nhớ trình duyệt.',
      },
      {
        question: 'Làm sao chuyển đổi hàng loạt thư mục đầy bản scan BMP?',
        answer:
          'Thả nhiều tệp .bmp tối đa 25 MB mỗi tệp vào hàng đợi, chọn một cài đặt chất lượng cho cả loạt, rồi tải mọi thứ cùng nhau trong compressmypic_bmp_to_jpg.zip. Mỗi tệp chuyển đổi độc lập.',
      },
      {
        question: 'Tệp BMP lớn nhất được chấp nhận là bao nhiêu?',
        answer:
          'Mỗi tệp BMP có thể tối đa 25 MB, bao phủ ảnh chụp màn hình lớn và bản scan độ phân giải cao. Vì chuyển đổi chạy trên thiết bị của bạn, tệp lớn xử lý ở tốc độ CPU ngay trên máy mà không chờ tải lên.',
      },
      {
        question: 'Tôi có thể chuyển tệp BMP mà không cần kết nối internet sau khi trang mở không?',
        answer:
          'Có. Khi trang đã tải trong trình duyệt, chuyển đổi chạy hoàn toàn bằng JavaScript và HTML5 Canvas ngay trên máy mà không gọi máy chủ. Bạn chỉ cần internet lại để tải trang hoặc tải tệp đã hoàn thành về.',
      },
      {
        question: 'JPG có mở được trong mọi chương trình không?',
        answer:
          'Có. Đầu ra .jpg RGB chuẩn mở trong hầu như mọi trình xem, trình chỉnh sửa, trình duyệt, ứng dụng email và máy in — rộng hơn nhiều so với BMP, vốn nhiều ứng dụng và website hiện đại không còn chấp nhận.',
      },
      {
        question: 'Công cụ chuyển đổi có giữ độ trong suốt của BMP không?',
        answer:
          'Tệp BMP hiếm khi mang kênh alpha dùng được, và JPG hoàn toàn không hỗ trợ độ trong suốt, nên JPG xuất luôn không trong suốt. Nếu đồ hoạ của bạn cần độ trong suốt, hãy chuyển sang PNG hoặc WebP thay vào đó, vốn giữ alpha.',
      },
      {
        question: 'Chuyện gì xảy ra với độ sâu màu BMP trong quá trình chuyển đổi?',
        answer:
          'Trình duyệt giải mã BMP và hiển thị qua đường màu canvas chuẩn, xuất JPG sRGB thông thường. BMP độ sâu màu cao giữ màu nhìn thấy được; chỉ biến thể lập chỉ mục hay 1-bit kỳ lạ mới cần lưu lại trong trình chỉnh sửa trước.',
      },
      {
        question: 'Tôi có thể kiểm tra chất lượng trước khi tải về không?',
        answer:
          'Có. Bấm So Sánh trên bất kỳ thẻ kết quả nào để mở trình xem tách đôi và kéo qua ảnh để kiểm tra chữ, đường nét và chi tiết với BMP gốc. Mỗi thẻ cũng hiển thị dung lượng tiết kiệm chính xác.',
      },
      {
        question: 'Có thể chỉnh thanh trượt chất lượng sau lần chuyển đổi đầu tiên không?',
        answer:
          'Có. Di chuyển thanh trượt chất lượng sang giá trị mới bất cứ lúc nào rồi bấm Chuyển Đổi Lại Tất Cả để tạo lại mọi tệp đã tải mà không cần tải lại. Tệp BMP gốc của bạn ở trong hàng đợi cho đến khi bạn xoá chúng.',
      },
      {
        question: 'JPG sẽ giữ tên tệp gì?',
        answer:
          'Bản tải đơn lẻ giữ tên gốc đã làm sạch của bạn với phần mở rộng .jpg, nên scan.bmp thành scan.jpg. Loạt từ hai tệp trở lên xuất gói trong compressmypic_bmp_to_jpg.zip.',
      },
      {
        question: 'Chuyển BMP sang JPG có hoạt động trên trình duyệt di động không?',
        answer:
          'Có. Vùng tải lên, thanh trượt chất lượng, trình xem so sánh và tải ZIP đều hoạt động trong Safari trên iOS và Chrome trên Android mà không cần cài ứng dụng. Loạt lớn chỉ mất lâu hơn một chút trên bộ xử lý điện thoại.',
      },
      {
        question: 'Khi nào BMP sang JPG tốt hơn BMP sang PNG?',
        answer:
          'Chọn JPG khi bạn cần tệp chia sẻ nhỏ nhất cho email, web hay nhắn tin. Chọn PNG khi bạn cần chất lượng lưu trữ không mất dữ liệu hoặc dự định chỉnh sửa ảnh thêm, lưu ý tệp PNG sẽ lớn hơn nhiều so với JPG.',
      },
      {
        question: 'Tệp BMP 1-bit hay 8-bit cũ có chuyển đổi được không?',
        answer:
          'Hầu hết tệp BMP 1-bit, 8-bit, 24-bit và 32-bit chuẩn giải mã gọn trong trình duyệt hiện đại. Biến thể rất bất thường, như BMP nén RLE hay định dạng OS/2, có thể hiện lỗi theo từng tệp — lưu lại chúng thành BMP 24-bit trong Paint hay trình chỉnh sửa sẽ khắc phục.',
      },
      {
        question: 'Vì sao bản scan BMP nén tốt thành JPG như vậy?',
        answer:
          'Bản scan chứa dải màu chuyển mượt, kết cấu giấy và chi tiết chụp ảnh mà nén cosin của JPEG xử lý rất hiệu quả. Vùng đơn sắc phẳng nén còn tốt hơn, đó là lý do bản scan 10 MB có thể rơi dưới 1 MB ở chất lượng 88%.',
      },
      {
        question: 'Chuyển BMP sang JPG có xoá siêu dữ liệu nào không?',
        answer:
          'Có. Vẽ pixel lên HTML5 Canvas sẽ xoá mọi khối siêu dữ liệu nhúng, nên JPG xuất gọn nhẹ và không còn chi tiết ẩn. Tệp BMP vốn hiếm khi mang nhiều siêu dữ liệu.',
      },
      {
        question: 'Tôi có thể chuyển tệp BMP từ máy ảnh số hay máy scan trực tiếp không?',
        answer:
          'Có, nếu tệp được lưu dưới dạng .bmp — hầu hết máy scan và máy ảnh cũ cung cấp BMP làm tuỳ chọn xuất. Máy ảnh hiện đại thường lưu JPG sẵn, nên hãy kiểm tra phần mở rộng tệp trước và dùng công cụ chuyển đổi tương ứng nếu không phải bitmap.',
      },
    ],
    relatedSlugs: ['/png-to-jpg', '/image-converter', '/bulk-image-converter', '/compress-image-to-100kb'],
  },
];

export const TOOL_BY_SLUG_VI: Record<string, ToolDefinition> = Object.fromEntries(
  TOOLS_REGISTRY_VI.map((t) => [t.slug, t])
);
