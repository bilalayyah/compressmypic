// Spanish (es) UI strings for CompressMyPic — neutral Latin American Spanish, usted form.
// Source: ~/workspace/compressmypic/spanish/source/ (Hero, FaqSection, EducationalContent,
// ToolsDirectorySection, ShareSection, Header, Footer, ToolPageLayout, UploadZone,
// ComparisonModal, home-entry.txt, index.html, App.tsx guides section, tools.ts categories).
// Brand name CompressMyPic is never translated. URLs, bilalayyah@gmail.com and format
// names (JPG/PNG/WebP/HEIC/JPEG/SVG/AVIF/BMP/GIF/PDF) stay as-is. "ZIP" is kept as a
// file-format term. Placeholders: {name} = tool/file name, {max} = max size in MB,
// {year} = current year, {count} = number of extra errors.
// Note on uploadZone: hint and errorTooBig interpolate the max size — kept as {max}.

export const ES = {
  header: {
    home: 'Inicio',
    tools: 'Herramientas',
    howItWorks: 'Cómo funciona',
    faq: 'Preguntas frecuentes',
    about: 'Nosotros',
    contact: 'Contacto',
    compressImages: 'Comprimir imágenes',
    themeLight: 'Modo claro',
    themeDark: 'Modo oscuro',
    themeSystem: 'Predeterminado del sistema',
    languageLabel: 'Idioma',
    homeAriaLabel: 'CompressMyPic – Compresor de imágenes online gratis',
    themeLightShort: 'Claro', // 'Light'
    themeDarkShort: 'Oscuro', // 'Dark'
    themeSystemShort: 'Sistema', // 'System'
    themeHeading: 'Tema', // 'Theme' (mobile drawer heading + theme menu aria-label)
    menuAriaLabel: 'Mostrar u ocultar el menú de navegación', // 'Toggle navigation menu'
    themeAriaLabel: 'Cambiar el tema de color (actual: {current})', // 'Change color theme (Current: {current})'
    themeTitle: 'Tema: {current}', // 'Theme: {current}'
    aboutUs: 'Nosotros', // 'About Us' (mobile drawer)
    contactUs: 'Contacto', // 'Contact Us' (mobile drawer)
  },
  footer: {
    blurb:
      'Compresión de imágenes rápida, segura y privada, directamente en su navegador. Optimiza imágenes JPG, PNG y WebP sin subir sus datos a ningún servidor externo.',
    privacyNote: '100% de privacidad en su dispositivo',
    toolsHeading: 'Herramientas de imágenes',
    legalHeading: 'Confianza y legal',
    guidesHeading: 'Guías',
    moreHeading: 'Más utilidades',
    directoryHeading: 'Herramientas avanzadas de compresión, edición y desarrollo',
    processedLocally: 'Procesado localmente con HTML5 Canvas',
    bottomRights:
      '© {year} CompressMyPic. Todos los derechos reservados. Utilidad gratuita de compresión de imágenes en el navegador.',
    contactLabel: 'Contacto: bilalayyah@gmail.com',
    toolsLinks: [
      { slug: '/', label: 'Comprimir imágenes' },
      { slug: '/image-resizer', label: 'Cambiar tamaño de imagen' },
      { slug: '/image-converter', label: 'Convertidor de imágenes' },
      { slug: '/rotate-flip-image', label: 'Girar y voltear imagen' },
      { slug: '/image-to-pdf', label: 'Imagen a PDF' },
      { slug: '/remove-image-metadata', label: 'Eliminar metadatos' },
      { slug: '/remove-background', label: 'Quitar fondo' },
    ],
    legalLinks: [
      { slug: '/privacy', label: 'Política de privacidad' },
      { slug: '/terms', label: 'Términos de servicio' },
      { slug: '/about', label: 'Nosotros' },
      { slug: '/contact', label: 'Contactar con soporte' },
    ],
    guidesLinks: [
      {
        slug: '/guides/compress-images-for-whatsapp',
        label: 'Cómo comprimir imágenes para WhatsApp sin perder calidad',
      },
      {
        slug: '/guides/jpg-vs-png-vs-webp',
        label: 'JPG vs PNG vs WebP: ¿qué formato debería usar?',
      },
      {
        slug: '/guides/reduce-image-size-to-100kb',
        label: 'Cómo reducir el tamaño de una imagen a 100KB para web y correo',
      },
    ],
    moreLinks: [
      { slug: '/image-metadata-viewer', label: 'Visor de metadatos y EXIF' },
      { slug: '/favicon-generator', label: 'Generador de favicon' },
      { slug: '/image-color-picker', label: 'Selector de color de imagen' },
      { slug: '/image-dimensions-checker', label: 'Comprobador de dimensiones' },
    ],
    directoryLinks: [
      { slug: '/compress-image-to-50kb', label: 'Comprimir a 50KB' },
      { slug: '/compress-image-to-100kb', label: 'Comprimir a 100KB' },
      { slug: '/compress-image-to-200kb', label: 'Comprimir a 200KB' },
      { slug: '/compress-image-to-500kb', label: 'Comprimir a 500KB' },
      { slug: '/target-file-size-compressor', label: 'Compresor por tamaño de archivo' },
      { slug: '/bulk-image-compressor', label: 'Compresor de imágenes en lote' },
      { slug: '/bulk-image-resizer', label: 'Cambiar tamaño de imágenes en lote' },
      { slug: '/bulk-image-converter', label: 'Convertidor de imágenes en lote' },
      { slug: '/web-image-optimizer', label: 'Optimizador de imágenes para web' },
      { slug: '/gif-compressor', label: 'Compresor de GIF' },
      { slug: '/image-cropper', label: 'Recortador de imágenes' },
      { slug: '/image-watermark', label: 'Marca de agua en imagen' },
      { slug: '/blur-pixelate-image', label: 'Desenfocar y pixelar' },
      { slug: '/add-text-to-image', label: 'Añadir texto a imagen' },
      { slug: '/image-border-generator', label: 'Generador de bordes' },
      { slug: '/round-image-corners', label: 'Redondear esquinas' },
      { slug: '/image-brightness-editor', label: 'Editor de brillo' },
      { slug: '/image-contrast-editor', label: 'Editor de contraste' },
      { slug: '/image-saturation-editor', label: 'Editor de saturación' },
      { slug: '/image-filters', label: 'Filtros de imagen' },
      { slug: '/add-background-to-image', label: 'Añadir fondo' },
      { slug: '/image-splitter', label: 'Divisor de imágenes' },
      { slug: '/image-dpi-changer', label: 'Cambiar DPI' },
      { slug: '/image-to-base64', label: 'Imagen a Base64' },
      { slug: '/base64-to-image', label: 'Base64 a imagen' },
      { slug: '/image-color-palette-extractor', label: 'Extractor de paleta de colores' },
      { slug: '/gif-maker', label: 'Creador de GIF' },
      { slug: '/image-collage-maker', label: 'Creador de collages' },
      { slug: '/heic-to-jpg', label: 'HEIC a JPG' },
      { slug: '/jpg-to-png', label: 'JPG a PNG' },
      { slug: '/png-to-jpg', label: 'PNG a JPG' },
      { slug: '/jpg-to-webp', label: 'JPG a WebP' },
      { slug: '/webp-to-jpg', label: 'WebP a JPG' },
      { slug: '/png-to-webp', label: 'PNG a WebP' },
      { slug: '/webp-to-png', label: 'WebP a PNG' },
      { slug: '/svg-to-png', label: 'SVG a PNG' },
      { slug: '/avif-to-jpg', label: 'AVIF a JPG' },
      { slug: '/bmp-to-jpg', label: 'BMP a JPG' },
    ],
  },
  hero: {
    pill: 'Compresión 100% privada en su dispositivo · Sin subidas a servidores',
    h1: 'Compresor de imágenes gratis – Comprima imágenes online y reduzca su tamaño sin perder calidad',
    sub: 'Reduzca el tamaño de sus archivos de imagen sin sacrificar la calidad visible. Comprima imágenes online gratis con nuestro compresor de imágenes y fotos: un optimizador de imágenes online para JPG, PNG, WebP y HEIC. Rápido, seguro, sin registro, sin marca de agua y con compresión fácil directamente en su navegador.',
    badge1: 'Sus imágenes nunca salen de su dispositivo',
    badge2: 'Procesamiento instantáneo en el navegador',
    badge3: 'Compatible con JPG, PNG, WebP y HEIC',
  },
  toolsDirectory: {
    heading: 'Más herramientas gratis para procesar imágenes',
    subheading:
      'Cada herramienta funciona 100% en su navegador: sin subidas a servidores, sin registro y sin marcas de agua.',
    eyebrow: 'Todas las herramientas en su navegador', // 'All Browser-Native Tools'
    allTools: 'Todas las herramientas', // 'All Tools'
    openTool: 'Abrir herramienta', // 'Open tool'
  },
  educational: {
    sections: [
      {
        heading: '¿Qué es la compresión de imágenes?',
        body: 'La compresión de imágenes es el proceso de reducir el tamaño en bytes de un archivo gráfico sin degradar la calidad visual de la imagen más allá de un límite aceptable. Cuando una cámara o un teléfono guarda una foto, almacena una enorme cantidad de datos, y gran parte de esa información no se distingue a simple vista cuando se elimina o se simplifica. CompressMyPic es un optimizador de imágenes online gratis y un reductor de tamaño de imagen que funciona como compresor de fotos y reductor de tamaño de foto para archivos JPG, PNG y WebP.\n\nAl analizar estos patrones, los algoritmos de compresión de imágenes reorganizan o descartan de forma selectiva la información redundante. El archivo resultante necesita mucho menos espacio de almacenamiento y se transfiere mucho más rápido por internet. Esta guía le muestra cómo comprimir una imagen sin perder calidad, con el control deslizante de calidad, los ajustes predefinidos y la elección de formato de CompressMyPic.',
      },
      {
        heading: '¿Por qué debería comprimir sus imágenes?',
        body: 'Las imágenes sin optimizar son uno de los mayores obstáculos para el rendimiento de un sitio web, el espacio de almacenamiento y el consumo de datos móviles. Comprimir sus imágenes trae beneficios inmediatos y concretos:',
        bullets: [
          'Carga más rápida del sitio web: las páginas con imágenes comprimidas se cargan hasta un 70% más rápido, lo que mejora sus Core Web Vitals (Largest Contentful Paint) y su posicionamiento en buscadores. Cuando reduce el tamaño de las imágenes de su sitio web, los visitantes se quedan más tiempo y abandonan menos la página.',
          'Menos espacio de almacenamiento: reduce los costos de alojamiento en la nube, de disco del servidor y de copias de seguridad guardando archivos de imagen optimizados en lugar de los originales pesados.',
          'Compartir imágenes es más fácil: nunca más le frenarán los límites estrictos de archivos adjuntos del correo ni las cuotas de subida de los mensajes. Las fotos comprimidas se adjuntan y se envían al instante, incluso con conexiones móviles lentas o planes de datos limitados.',
          'Menos consumo de ancho de banda: ahorra dinero a sus usuarios en planes de datos móviles y evita que los visitantes abandonen su sitio. Los archivos más pequeños se descargan más rápido, sobre todo en conexiones móviles lentas.',
        ],
      },
      {
        heading: 'Cómo funciona',
        body: 'Comprimir sus fotos lleva solo unos segundos: sin cuenta, sin programas y sin subidas. Así es como puede comprimir una imagen sin perder calidad en tres pasos sencillos.',
        bullets: [
          'Paso 1 — Suba sus imágenes: arrastre y suelte sus imágenes JPG, PNG, WebP o HEIC en la zona de subida, haga clic en «Explorar archivos» para elegirlas o pegue una imagen con Ctrl+V. Puede subir varias imágenes a la vez, hasta 20 MB por imagen.',
          'Paso 2 — Ajuste la calidad y elija su formato: elija un ajuste predefinido Bajo, Equilibrado o Alto, o mueva el control deslizante de calidad del 10% al 100%, y decida si mantiene el formato original o convierte a JPG, PNG o WebP. Observe el tamaño antes y después en vivo para cada imagen y use el control deslizante de comparación interactivo para revisar el resultado visual.',
          'Paso 3 — Descargue sus imágenes comprimidas: descargue cada imagen comprimida por separado o haga clic en «Descargar todo (ZIP)» para bajar todo el lote en un solo archivo. Sus imágenes se comprimen directamente en su navegador, así que no hay nada que esperar ni nada que subir.',
        ],
      },
      {
        heading: '¿Por qué usar este compresor de imágenes gratis?',
        body: 'CompressMyPic es un compresor de imágenes gratis, sin registro y sin marca de agua, pensado para fotos cotidianas, imágenes de sitios web y publicaciones en redes sociales.',
        bullets: [
          'Comprima JPG, PNG, WebP y HEIC: un solo compresor de imágenes para los formatos que realmente usa. Comprima fotos JPG y JPEG, comprima gráficos PNG manteniendo la transparencia y comprima imágenes WebP para obtener los archivos más pequeños.',
          'Reduzca el tamaño de la imagen sin perder calidad: la compresión inteligente elimina los datos redundantes y los metadatos, y la imagen se sigue viendo prácticamente igual que la original. El ajuste predefinido Equilibrado es el mejor punto de partida, y la comparación de antes y después le permite comprobar la calidad por usted mismo.',
          'Compresor de imágenes en lote: comprima varias imágenes a la vez: este compresor de imágenes en lote le permite comprimir varias imágenes a la vez con los mismos ajustes y descargarlas todas juntas con el botón «Descargar todo (ZIP)», en lugar de guardar los archivos uno por uno.',
          'Comprima imágenes para WhatsApp, Instagram y Facebook: reduzca el tamaño de las fotos para que se envíen rápido por WhatsApp y se suban sin problemas a Instagram y Facebook. Los archivos más pequeños consumen menos datos móviles y es mucho menos probable que se rechacen por ser demasiado grandes.',
          'Reduzca el tamaño de la imagen a 20KB, 50KB, 100KB o 200KB: baje el control deslizante de calidad paso a paso y observe el tamaño antes y después en vivo hasta llegar a su objetivo: 200KB, 100KB, 50KB o incluso 20KB. Cambiar el formato de salida a WebP normalmente le ayuda a llegar ahí con menos pérdida visible de calidad.',
        ],
      },
      {
        heading: 'Comprimir JPG, PNG y WebP: ¿qué formato debería elegir?',
        body: 'JPG, PNG y WebP cumplen funciones distintas. Conocer sus puntos fuertes le ayuda a elegir la mejor opción para su proyecto.\n\nCompare la diferencia visual: ¿no sabe cuánta compresión es aceptable? Use la opción de comparación de antes y después de la herramienta. Nuestro control deslizante interactivo le permite ver la imagen original y la versión comprimida lado a lado para detectar artefactos visuales o pérdida de calidad antes de descargar.',
        bullets: [
          'Compresor de JPG — Comprima JPG online gratis: ideal para fotografías de su sitio web, blog o portafolio. Comprima JPG online gratis y comprima JPEG a 100KB bajando el control deslizante de calidad mientras observa el tamaño en vivo. La compresión JPEG es con pérdida: elimina de forma permanente algunos datos visuales que el ojo humano apenas percibe. Por eso puede reducir una foto de megabytes a kilobytes sin una pérdida visible de calidad.',
          'Compresor de PNG — Comprima PNG online gratis: ideal para gráficos, capturas de pantalla, logotipos e imágenes que necesitan transparencia, como logotipos, iconos o ilustraciones. Comprima PNG online gratis aquí manteniendo toda la transparencia, para gráficos nítidos y perfectos en cada píxel. Convertir un PNG a WebP a menudo lo hace mucho más pequeño.',
          'Comprima imágenes WebP — El formato moderno: ideal para optimizar la web. WebP ofrece una excelente compresión con y sin pérdida que suele ser entre un 25% y un 35% más pequeña que JPEG o PNG. Comprima archivos de imagen WebP para lograr el menor tamaño con una calidad similar, y use WebP cuando quiera optimizar imágenes para páginas web sin una pérdida visible de calidad. Es la mejor opción para la mayoría de los sitios web.',
        ],
      },
      {
        heading: '¿Para qué puede usar este compresor de imágenes?',
        body: 'Un solo compresor de imágenes gratis cubre las razones más comunes por las que la gente necesita reducir el tamaño de una imagen.',
        bullets: [
          'Optimiza imágenes para la web: optimiza las imágenes de sus páginas web para que carguen más rápido, mejoren los Core Web Vitals y posicionen mejor. Las imágenes más pequeñas significan páginas más rápidas, visitantes más contentos y menos ancho de banda de alojamiento.',
          'Comprima imágenes para adjuntar por correo: comprima imágenes para adjuntar por correo para que sus fotos quepan dentro de los límites de tamaño de los archivos adjuntos. Adjunte las descargas más pequeñas en lugar de los originales grandes y sus correos se enviarán sin rebotar.',
          'Comprima una foto para su sitio web: comprima una foto para su sitio web, blog, portafolio o tienda online antes de subirla. Las fotos de productos, los banners y las imágenes del blog se mantienen nítidas y ocupan mucho menos espacio en su servidor.',
          'Reduzca el tamaño de archivo de una foto: reduzca el tamaño de archivo de una foto de su teléfono o cámara antes de compartirla, guardarla o imprimirla. Las fotos grandes se envían rápido, se guardan fácil y se gestionan sin complicaciones.',
        ],
      },
      {
        heading: 'Por qué importa el tamaño de la imagen',
        body: 'Los archivos de imagen grandes y de alta resolución son el resultado del rápido avance de la tecnología de las cámaras: las imágenes ahora son entre 2 y 3 veces más grandes que hace solo unos años. Cuando reduce el tamaño de las imágenes de sus páginas web y optimiza las imágenes para la web, su sitio carga más rápido, consume menos ancho de banda y posiciona mejor en los resultados de búsqueda.\n\nCuando busque un buen compresor, fíjese en que: 1) no sacrifique la calidad, 2) mantenga sus datos privados (procesamiento en su dispositivo) y 3) procese las imágenes rápido sin enviar sus archivos a un servidor lejano. Eso es exactamente para lo que está hecho CompressMyPic.',
      },
      {
        heading: 'Consejos de optimización: reduzca el tamaño de la imagen sin perder calidad',
        body: '',
        bullets: [
          'Empiece con el ajuste predefinido Equilibrado: el ajuste Equilibrado (70% de calidad) ofrece el mejor equilibrio para la mayoría de las imágenes: archivos mucho más pequeños y una gran similitud visual con el original.',
          'Elija el formato adecuado: para las fotografías, JPG o WebP siempre le darán archivos más pequeños que PNG. Para logotipos y gráficos de líneas con transparencia, use PNG.',
          'Apunte a un tamaño objetivo: para usar en sitios web, busque imágenes de menos de 200 KB. Para correos y mensajes, manténgase por debajo de 1 MB para que se entreguen rápido. Use el control deslizante de calidad y el tamaño en vivo para llegar a su tamaño objetivo.',
          'Encuentre el punto ideal: ponga el control deslizante de calidad en 85–90% para las imágenes principales, donde la calidad importa; 70–80% suele ser el equilibrio ideal para el uso general en sitios web; 50–60% es mejor para miniaturas o cuando el tamaño es lo más importante.',
          'Pruebe WebP para los archivos más pequeños: cambiar el formato de salida a WebP suele reducir un JPG o PNG entre un 25% y un 35% más con una calidad similar: una forma sencilla de reducir el tamaño de la imagen sin perder calidad.',
        ],
      },
    ],
  },
  faqSection: {
    heading: 'Preguntas frecuentes',
    subheading:
      'Todo lo que necesita saber sobre cómo comprimir imágenes online gratis con CompressMyPic.',
    faqs: [
      {
        id: 'faq-1',
        question: '¿Cómo puedo comprimir una imagen online gratis?',
        answer:
          'Simplemente arrastre y suelte sus archivos de imagen en CompressMyPic o haga clic en «Explorar archivos». Elija un ajuste predefinido de compresión (Bajo, Equilibrado o Alto) o ajuste el control deslizante de calidad, y descargue sus imágenes optimizadas al instante. La herramienta es 100% gratis, sin registro ni instalación de programas.',
      },
      {
        id: 'faq-2',
        question: '¿Cómo comprimo una imagen a 100KB?',
        answer:
          'CompressMyPic no tiene una casilla para escribir un tamaño exacto en KB, así que no puede escribir 100KB directamente. En su lugar, suba su imagen, elija un ajuste predefinido o baje el control deslizante de calidad, y observe el tamaño antes y después en vivo que se muestra para cada imagen. Ajuste la calidad o cambie el formato de salida a WebP hasta que el tamaño comprimido se acerque a 100KB, y descárguela.',
      },
      {
        id: 'faq-3',
        question: '¿Cómo puedo reducir el tamaño de una imagen sin perder calidad?',
        answer:
          'Elija el ajuste predefinido Equilibrado (alrededor del 70% de calidad) o una calidad alta del 85–90%, que elimina los datos redundantes y los metadatos mientras la imagen se sigue viendo prácticamente igual que la original. Use la comparación interactiva de antes y después para revisar el resultado, y mantenga el formato original o elija WebP para el mejor equilibrio entre calidad y tamaño.',
      },
      {
        id: 'faq-4',
        question: '¿Cómo comprimo un JPEG a 100KB?',
        answer:
          'Para reducir el tamaño de un archivo JPEG, suba su JPEG, elija JPEG como formato de salida y baje el control deslizante de calidad paso a paso mientras observa el tamaño comprimido en vivo. Como no hay una casilla para un tamaño exacto en KB, use la vista de tamaño antes y después para detenerse cuando el archivo se acerque a 100KB.',
      },
      {
        id: 'faq-5',
        question: '¿Cómo reduzco el tamaño de una imagen a 20KB, 50KB o 200KB?',
        answer:
          'Suba su imagen y baje el control deslizante de calidad poco a poco, revisando el tamaño antes y después en vivo después de cada cambio, hasta llegar a su objetivo: 200KB, 50KB o 20KB. Los objetivos más pequeños, como 20KB, suelen necesitar una calidad más baja y salida en WebP. El mismo método sirve para cualquier objetivo, incluido 500KB, y el tamaño siempre se muestra en KB para que vea exactamente cuánto redujo el tamaño de la imagen en KB.',
      },
      {
        id: 'faq-6',
        question: '¿Cómo comprimo un PNG online gratis?',
        answer:
          'Suba su PNG a CompressMyPic y elija un ajuste predefinido o ajuste el control deslizante de calidad: comprimir un PNG online es gratis aquí, sin registro. La transparencia se conserva en la salida PNG y WebP, y convertir un PNG a WebP a menudo lo hace mucho más pequeño.',
      },
      {
        id: 'faq-7',
        question: '¿Qué formatos de imagen son compatibles?',
        answer:
          'CompressMyPic es compatible con JPG (JPEG), PNG, WebP y HEIC, incluidas las fotos tomadas con iPhone, que se guardan en HEIC por defecto. Puede mantener el formato original o convertir entre ellos; por ejemplo, comprimir archivos JPG como JPEG, comprimir archivos PNG manteniendo la transparencia o convertir a WebP para obtener los archivos más pequeños.',
      },
      {
        id: 'faq-8',
        question: '¿Puedo comprimir varias imágenes a la vez?',
        answer:
          'Sí. Este compresor de imágenes en lote le permite subir decenas de imágenes a la vez, comprimir varias imágenes a la vez con los mismos ajustes y descargarlas todas juntas con el botón «Descargar todo (ZIP)», o descargar cada una por separado.',
      },
      {
        id: 'faq-9',
        question: '¿Cómo comprimo una imagen para WhatsApp?',
        answer:
          'Suba su foto, elija un ajuste predefinido de menor calidad o salida en WebP, y descargue el archivo más pequeño antes de compartirlo en WhatsApp. Las fotos más pequeñas se envían más rápido, consumen menos datos móviles y es menos probable que se rechacen por ser demasiado grandes.',
      },
      {
        id: 'faq-10',
        question: '¿Cómo comprimo una imagen para Instagram o Facebook?',
        answer:
          'Comprima su foto para Instagram o Facebook subiéndola aquí, eligiendo el ajuste predefinido Equilibrado y descargando el archivo JPG o WebP más pequeño. El archivo reducido se sube más rápido y mantiene suficiente calidad para publicaciones, historias y fotos de perfil.',
      },
      {
        id: 'faq-11',
        question: '¿Puedo comprimir imágenes para adjuntarlas por correo?',
        answer:
          'Sí. Comprima imágenes para adjuntarlas por correo reduciéndolas con el control deslizante de calidad hasta que cada archivo sea lo bastante pequeño para el límite de archivos adjuntos de su proveedor de correo, y adjunte los archivos descargados a su mensaje en lugar de los originales grandes.',
      },
      {
        id: 'faq-12',
        question: '¿CompressMyPic es realmente gratis?',
        answer:
          'Sí, CompressMyPic es completamente gratis. No hay cargos, no hay planes de pago, no hay créditos ni límites en la cantidad de imágenes que puede comprimir.',
      },
      {
        id: 'faq-13',
        question: '¿CompressMyPic añade una marca de agua?',
        answer:
          'No. CompressMyPic es un compresor de imágenes gratis sin marca de agua: sus imágenes comprimidas quedan limpias, sin logotipo, texto ni marca añadidos.',
      },
      {
        id: 'faq-14',
        question: '¿Necesito registrarme para usar CompressMyPic?',
        answer:
          'No. Este es un compresor de imágenes gratis sin registro: no necesita cuenta, correo electrónico ni contraseña. Solo abra el sitio y empiece a comprimir.',
      },
      {
        id: 'faq-15',
        question: '¿Mis imágenes se suben a un servidor?',
        answer:
          'No. Toda la compresión ocurre por completo en su propio dispositivo, dentro de su navegador web, así que sus imágenes nunca se suben a un servidor ni las almacena o ve nadie más. Se quedan en la memoria de su navegador y se borran cuando actualiza o cierra la pestaña.',
      },
      {
        id: 'faq-16',
        question: '¿Hay un límite de tamaño de archivo?',
        answer:
          'Sí, el límite es de 20 MB por imagen, lo que cubre fotos de cámara de alta resolución y capturas de pantalla grandes. Como el procesamiento ocurre en su dispositivo, la compresión sigue siendo rápida incluso con archivos grandes.',
      },
      {
        id: 'faq-17',
        question: '¿Comprimir una imagen cambie sus dimensiones?',
        answer:
          'No. CompressMyPic mantiene las dimensiones de su imagen sin cambios: solo se reduce el tamaño del archivo. Su foto conserva el mismo ancho, alto y proporción que la original.',
      },
      {
        id: 'faq-18',
        question: '¿Puedo comprimir imágenes en el celular?',
        answer:
          'Sí. CompressMyPic funciona en los navegadores móviles de iOS y Android, así que puede comprimir una foto en su teléfono eligiéndola desde su galería o tomando una foto nueva y subiéndola aquí.',
      },
      {
        id: 'faq-19',
        question: '¿Cómo funciona el control deslizante de calidad?',
        answer:
          'El control deslizante de calidad le permite fijar la calidad de compresión del 10% al 100%. Los valores más altos conservan más detalle y producen archivos más grandes, mientras que los valores más bajos hacen los archivos mucho más pequeños. Los ajustes predefinidos Bajo, Equilibrado y Alto fijan el control por usted, y el tamaño antes y después en vivo muestra el resultado de cada cambio.',
      },
      {
        id: 'faq-20',
        question: '¿Cómo elijo el formato de salida?',
        answer:
          'Después de subir una imagen, elija si quiere mantener el formato original o convertir a JPG, PNG o WebP. WebP suele ser la mejor opción para optimizar imágenes para páginas web, porque es entre un 25% y un 35% más pequeño que JPEG con una calidad similar, mientras que PNG es mejor cuando necesita transparencia.',
      },
    ],
  },
  guidesSection: {
    heading: 'Guías',
    subheading:
      'Guías paso a paso para lograr archivos más pequeños sin perder calidad visible.',
    cards: [
      {
        title: 'Cómo comprimir imágenes para WhatsApp sin perder calidad',
        desc: 'Reduzca el tamaño de las fotos antes de enviarlas para que se mantengan nítidas y se envíen rápido.',
        cta: 'Leer la guía →',
      },
      {
        title: 'JPG vs PNG vs WebP: ¿qué formato debería usar?',
        desc: 'Tamaño de archivo, calidad y transparencia comparados, para que elijas el formato adecuado.',
        cta: 'Leer la guía →',
      },
      {
        title: 'Cómo reducir el tamaño de una imagen a 100KB para web y correo',
        desc: 'Paso a paso: llega a 100KB sin perder calidad visible.',
        cta: 'Leer la guía →',
      },
    ],
  },
  shareSection: {
    heading: 'Comparta CompressMyPic con sus amigos',
    text: '¿Le resultó útil esta herramienta? Ayude a un amigo a comprimir sus imágenes también: solo lleva un toque.',
    shareText:
      'Comprima imágenes online gratis — sin registro, sin marca de agua. Pruebe CompressMyPic:',
    siteUrl: 'https://compressmypic.online/',
    shareOn: 'Compartir en {name}',
    copyLink: 'Copiar enlace',
    copied: '¡Copiado!',
    share: 'Compartir',
    emailSubject: 'Compresor de imágenes gratis – CompressMyPic', // 'Free Image Compressor – CompressMyPic'
    nativeShareTitle: 'CompressMyPic – Compresor de imágenes gratis', // 'CompressMyPic – Free Image Compressor'
  },
  toolPageLayout: {
    home: 'Inicio',
    privacyPill: 'Procesamiento 100% privado en el navegador · Los archivos nunca salen de su dispositivo',
    noUploads: 'Sin subidas a servidores',
    freeNote: 'Gratis · Sin registro · Sin marca de agua',
    howToTitle: 'Cómo usar {name}',
    howToIntro:
      'Siga estos pasos sencillos para completar su tarea, directamente en su navegador.',
    featuresTitle: '¿Por qué usar {name} de CompressMyPic?',
    faqTitle: '{name} — Preguntas frecuentes',
    relatedTitle: 'Herramientas de imágenes gratis relacionadas',
  },
  uploadZone: {
    dropText: 'Arrastre y suelte sus imágenes aquí',
    browseButton: 'explorar archivos',
    browsePrefix: 'o',
    browseSuffix: 'desde su computadora o su teléfono',
    orPaste: 'Pegar (Ctrl+V) compatible',
    hint: 'Máx. {max} MB por imagen',
    errorTooBig: '"{name}" supera el límite máximo de {max} MB.',
    errorBadType: '"{name}" no tiene un formato compatible ({formats}).',
    errorUnreadable: '"{name}" es un archivo vacío (0 bytes).',
    errorMore: '(+{count} errores más)',
    formatsLabel: 'JPG, PNG, WebP, HEIC',
    ariaLabel:
      'Zona para subir imágenes. Arrastre y suelte o haga clic para explorar archivos.', // 'Upload images area. Drag and drop or click to browse files.'
    errorLoadFailed: 'Archivo dañado o ilegible.', // App.tsx handleFilesSelected catch: 'Corrupted or unreadable image file.'
  },
  comparisonModal: {
    titlePrefix: 'Comparación visual de calidad',
    beforeLabel: 'Original (antes)',
    afterLabel: 'Comprimida (después)',
    closeLabel: 'Cerrar la vista de comparación',
    instruction: 'Arrastra el control deslizante hacia la izquierda o la derecha para revisar la calidad de cada píxel.',
    sliderLabel: 'Deslizador',
    sideBySideLabel: 'Lado a lado',
    zoomInLabel: 'Acercar',
    zoomOutLabel: 'Alejar',
    originalLabel: 'Original:',
    outputLabel: 'Resultado:',
    reductionLabel: 'Reducción:',
    sizeChangeLabel: 'Cambio de tamaño:',
    qualityLabel: 'Ajuste de calidad:',
    formatLabel: 'Formato:',
    modalAriaLabel: 'Ventana de comparación de imágenes', // 'Image comparison modal'
    altCompressed: 'Versión comprimida de {name}', // 'Compressed version of {name}'
    altOriginal: 'Versión original de {name}', // 'Original version of {name}'
    altProcessed: 'Versión procesada de {name}', // 'Processed version of {name}'
  },
  homeMeta: {
    seoTitle: 'Compresor de imágenes gratis online – Reduzca a 100KB',
    seoDescription:
      'Comprima imágenes online gratis: reduzca el tamaño sin perder calidad. Comprima JPG, PNG y WebP sin registro ni marca de agua, directamente en su navegador.',
    h1: 'Compresor de imágenes gratis',
    subtitle: 'Reduzca el tamaño de archivos JPG, PNG, WebP y HEIC directamente en su navegador.',
  },
  categories: {
    compress: 'Comprimir',
    resize: 'Cambiar tamaño',
    convert: 'Convertir',
    'crop-edit': 'Recortar y editar',
    'ai-tools': 'Herramientas de IA',
    create: 'Crear',
    privacy: 'Herramientas de privacidad',
    developer: 'Herramientas para desarrolladores',
  },
  compressionControls: {
    modeLabel: 'Modo de compresión', // 'Compression Mode'
    presetLow: 'Compresión baja (85%)', // 'Low Compression (85%)'
    presetBalanced: 'Equilibrada (70%)', // 'Balanced (70%)'
    presetHigh: 'Compresión alta (50%)', // 'High Compression (50%)'
    presetCustom: 'Personalizada', // 'Custom'
    formatLabel: 'Formato de salida', // 'Output Format'
    formatOriginal: 'Original', // 'Original'
    qualityLabel: 'Calidad deseada:', // 'Quality Target:'
    qualityHigh: 'Alta fidelidad', // 'High Fidelity' (quality >= 80)
    qualityOptimal: 'Equilibrio ideal para web', // 'Optimal Web Balance' (60–79)
    qualityMax: 'Máximo ahorro de espacio', // 'Max Space Savings' (< 60)
    qualityAriaLabel: 'Control deslizante de calidad del 10 al 100 por ciento', // 'Quality slider from 10 to 100 percent'
    compressAll: 'Volver a comprimir todo', // 'Re-compress All'
    compressing: 'Comprimiendo…', // 'Compressing...'
    clearAll: 'Borrar todo', // 'Clear All'
    clearAllTitle: 'Borrar todas las imágenes', // 'Clear all images'
    transparencyTitle: 'Aviso de transparencia para la conversión a JPEG', // 'Transparency Notice for JPEG Conversion'
    transparencyBody:
      'El formato JPEG no admite transparencia (canales alfa). Los fondos transparentes se reemplazarán por un fondo sólido (blanco por defecto). Seleccione PNG o WebP si desea conservar los fondos transparentes.',
    pngTip:
      'PNG es un formato sin pérdida e ignora el control deslizante de calidad, así que volver a codificar un PNG a veces puede igualar o superar el tamaño original. Para PNG con aspecto de foto, elegir WebP o JPG suele producir archivos entre un 50% y un 80% más pequeños.',
  },
  resultsList: {
    summary: 'Resumen de compresión', // 'Compression Summary'
    image: 'Imagen', // 'Image' (count === 1)
    images: 'Imágenes', // 'Images' (count !== 1)
    totalOriginal: 'Total original:', // 'Total Original:'
    totalCompressed: 'Total comprimido:', // 'Total Compressed:'
    totalSaved: 'Total ahorrado:', // 'Total Saved:'
    processing: 'Procesando…', // 'Processing...'
    grewBy: '(creció {bytes})', // '(grew by {bytes})'
    reduction: 'Reducción:', // 'Reduction:'
    sizeChange: 'Cambio de tamaño:', // 'Size Change:'
    downloadAll: 'Descargar todo (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'Creando ZIP ({progress}%)…', // 'Creating ZIP ({progress}%)...'
    compare: 'Comparar', // 'Compare'
    compareTitle: 'Haga clic para revisar la comparación visual de calidad', // 'Click to inspect visual quality comparison'
    compareActionTitle: 'Comparar el antes y el después', // 'Compare visual before/after'
    download: 'Descargar', // 'Download'
    retry: 'Reintentar', // 'Retry'
    removeTitle: 'Quitar imagen', // 'Remove image'
    removeAriaLabel: 'Quitar {name}', // 'Remove {name}'
    keptOriginal: 'Se conservó el original (la recodificación era más grande)', // 'Kept original (re-encode was larger)'
    grewByStatus: 'Creció {bytes}: la recodificación es más grande que el original', // 'Grew by {bytes} — re-encode is larger than the original'
    compressedOk: 'Comprimido correctamente', // 'Compressed successfully'
    optimizing: 'Optimizando píxeles…', // 'Optimizing pixels...'
    compressionError: 'Error de compresión', // 'Compression error'
    original: 'Original', // 'Original' (metric label)
    compressed: 'Comprimido', // 'Compressed' (metric label)
    output: 'Salida', // 'Output' (metric label when original kept)
    spaceSaved: 'Espacio ahorrado', // 'Space Saved'
    formatLabel: 'Formato:', // 'Format:' (in "{w}×{h}px · Format: {fmt}")
    alpha: 'Alfa', // 'Alpha' badge
    largerTitle: 'La salida es {bytes} más grande que el original.', // 'Output is {bytes} larger than the original.'
    largerPngNote:
      'La recodificación PNG sin pérdida ignora el control deslizante de calidad; WebP o JPG suele ser mucho más pequeño para PNG con aspecto de foto.',
    largerNote:
      'Esta imagen ya estaba muy comprimida para la calidad seleccionada.',
    keepOriginal: 'Conservar original', // 'Keep original'
  },
} as const;

export const TOOL_UI_ES = {
  '/image-resizer': {
    comparisonTitlePrefix: 'Comparación de tamaño', // 'Resize Comparison'
    comparisonAfterLabel: 'Redimensionada (después)', // 'Resized (After)'
    presetInstagramPost: 'Publicación de Instagram (1080×1080)', // 'Instagram Post (1080×1080)'
    presetInstagramStory: 'Historia de Instagram (1080×1920)', // 'Instagram Story (1080×1920)'
    presetYouTubeThumb: 'Miniatura de YouTube (1280×720)', // 'YouTube Thumb (1280×720)'
    presetFacebookCover: 'Portada de Facebook (851×315)', // 'Facebook Cover (851×315)'
    presetXHeader: 'Cabecera de X (1500×500)', // 'X Header (1500×500)'
    presetFullHd: 'Full HD (1920×1080)', // 'Full HD (1920×1080)' — unchanged
    errorResizeFailed: 'No se pudo redimensionar la imagen.', // 'Resize failed.'
    errorCorruptedFile: 'Archivo de imagen dañado o ilegible.', // 'Corrupted or unreadable image file.'
    resizeMode: 'Modo de redimensionado', // 'Resize Mode'
    modeByPixels: 'Por píxeles (An × Al)', // 'By Pixels (W × H)'
    modeByPercentage: 'Por porcentaje (%)', // 'By Percentage (%)'
    outputFormat: 'Formato de salida', // 'Output Format'
    formatOriginal: 'Original', // 'Original' — same in Spanish
    formatJpg: 'JPG', // 'JPG' — unchanged
    widthLabel: 'Ancho (px)', // 'Width (px)'
    heightLabel: 'Alto (px)', // 'Height (px)'
    placeholderAuto: 'Automático', // placeholder 'Auto'
    aspectRatioLocked: 'Proporción bloqueada', // 'Aspect Ratio Locked'
    aspectRatioUnlocked: 'Desbloqueada (personalizada)', // 'Unlocked (Custom)'
    fitModeLabel: 'Modo de ajuste:', // 'Fit Mode:'
    fitContain: 'Contener (sin recorte)', // 'Contain (No Crop)'
    fitCover: 'Cubrir (recorte centrado)', // 'Cover (Center Crop)'
    fitStretchExact: 'Estirar exacto', // 'Stretch Exact'
    quickPresets: 'Plantillas rápidas para redes sociales y web', // 'Quick Social & Web Presets'
    scalePercentage: 'Porcentaje de escala:', // 'Scale Percentage:'
    outputQuality: 'Calidad de salida:', // 'Output Quality:'
    matteBg: 'Fondo mate:', // 'Matte BG:'
    resizing: 'Redimensionando…', // 'Resizing...'
    resizeAll: 'Redimensionar todo ({count})', // 'Resize All ({count})'
    clear: 'Limpiar', // 'Clear'
    batchReady: 'Lote listo', // 'Batch Ready'
    batchReadySingular: '{count} imagen redimensionada lista para descargar', // '{count} resized image ready to download'
    batchReadyPlural: '{count} imágenes redimensionadas listas para descargar', // '{count} resized images ready to download'
    creatingZip: 'Creando ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Descargar todo (ZIP)', // 'Download All (ZIP)'
    resizedStatus: 'Redimensionada ({original} → {converted})', // 'Resized ({original} → {converted})'
    compare: 'Comparar', // 'Compare'
    download: 'Descargar', // 'Download'
    removeImage: 'Eliminar {name}', // aria-label `Remove ${item.name}`
  },
  '/image-converter': {
    comparisonTitlePrefix: 'Comparación de conversión de formato', // 'Format Conversion Comparison'
    comparisonAfterLabel: 'Convertida (después)', // 'Converted (After)'
    errorConversionFailed: 'No se pudo convertir la imagen.', // 'Conversion failed.'
    errorUnsupportedFile: 'Archivo de imagen no compatible o dañado.', // 'Unsupported or corrupted image file.'
    convertToFormat: 'Convertir a formato', // 'Convert To Format'
    formatWebp: 'WebP (el más ligero para web)', // 'WebP (Smallest Web)'
    formatJpg: 'JPG (universal)', // 'JPG (Universal)'
    formatPng: 'PNG (sin pérdida y con transparencia)', // 'PNG (Lossless Alpha)'
    transparencyFillColor: 'Color de relleno de transparencia', // 'Transparency Fill Color'
    quality: 'Calidad', // 'Quality'
    qualityLosslessPng: 'PNG sin pérdida', // 'Lossless PNG'
    converting: 'Convirtiendo…', // 'Converting...'
    convertAll: 'Convertir todo ({count})', // 'Convert All ({count})'
    clear: 'Limpiar', // 'Clear'
    conversionComplete: 'Conversión completa', // 'Conversion Complete'
    filesConverted: '{count} archivos convertidos a {format}', // '{count} files converted to {format}'
    creatingZip: 'Creando ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Descargar todo (ZIP)', // 'Download All (ZIP)'
    convertedStatus: 'Convertido a {ext}', // 'Converted to {ext}'
    compare: 'Comparar', // 'Compare'
    download: 'Descargar', // 'Download'
    removeImage: 'Eliminar {name}', // aria-label `Remove ${item.name}`
  },
  '/image-cropper': {
    uploadTitle: 'Suelte una imagen para recortarla de forma interactiva', // 'Drop an image to crop interactively'
    errorUnableToLoadImage: 'No se pudo cargar la imagen.', // 'Unable to load image.'
    errorCanvasContext: 'No se pudo inicializar el contexto del lienzo.', // 'Unable to initialize canvas context.'
    errorCropExportFailed: 'No se pudo exportar el recorte.', // 'Crop export failed.'
    aspectFree: 'Libre', // aspect preset 'Free'
    selection: 'Selección:', // 'Selection:'
    zoomOut: 'Alejar', // aria-label 'Zoom out'
    zoomIn: 'Acercar', // aria-label 'Zoom in'
    removeImage: 'Eliminar imagen', // aria-label 'Remove image'
    cropSourceAlt: 'Imagen de origen para recortar', // alt 'Crop source'
    originalLabel: 'Original:', // 'Original:'
    cropOptions: 'Opciones de recorte', // 'Crop Options'
    selectFull: 'Seleccionar todo', // 'Select Full'
    aspectRatioPreset: 'Proporción predefinida', // 'Aspect Ratio Preset'
    cropWidth: 'Ancho de recorte', // 'Crop Width'
    cropHeight: 'Alto de recorte', // 'Crop Height'
    outputFormat: 'Formato de salida', // 'Output Format'
    formatOriginal: 'Original', // 'Original' — same in Spanish
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Calidad', // 'Quality'
    cropping: 'Recortando…', // 'Cropping...'
    cropAndDownload: 'Recortar y descargar', // 'Crop & Download'
  },
  '/image-watermark': {
    uploadTitle: 'Suelte una imagen para agregar una marca de agua de texto o logotipo', // 'Drop an image to add a text or logo watermark'
    errorUnableToLoadImage: 'No se pudo cargar la imagen.', // 'Unable to load image.'
    errorUnableToLoadLogo: 'No se pudo cargar la imagen del logotipo.', // 'Unable to load logo image.'
    errorWatermarkExportFailed: 'No se pudo exportar la imagen con marca de agua.', // 'Watermark export failed.'
    fallbackWatermarkText: 'Marca de agua', // canvas fallback text 'Watermark'
    tiledPreview: 'Vista previa en mosaico', // 'Tiled Preview'
    dragToPosition: 'Arrastre sobre la imagen para colocar', // 'Drag on Image to Position'
    changeImage: 'Cambiar imagen', // 'Change Image'
    watermarkType: 'Tipo de marca de agua', // 'Watermark Type'
    modeText: 'Marca de agua de texto', // 'Text Watermark'
    modeLogo: 'Imagen de logotipo', // 'Logo Image'
    watermarkTextLabel: 'Texto de la marca de agua', // 'Watermark Text'
    placeholderBrand: '© Su marca', // placeholder '© Your Brand'
    textColor: 'Color del texto', // 'Text Color'
    size: 'Tamaño', // 'Size'
    uploadLogo: 'Subir logotipo (PNG / SVG)', // 'Upload Logo (PNG / SVG)'
    changeLogo: 'Cambiar imagen de logotipo', // 'Change Logo Image'
    logoWidth: 'Ancho del logotipo', // 'Logo Width'
    opacity: 'Opacidad', // 'Opacity'
    rotation: 'Rotación', // 'Rotation'
    tiledRepeatPattern: 'Patrón repetido en mosaico', // 'Tiled Repeat Pattern'
    tileSpacing: 'Espaciado de mosaico', // 'Tile Spacing'
    anchorPresets: 'Posiciones predefinidas (o arrastre sobre la imagen)', // 'Anchor Presets (or drag on image)'
    formatOrig: 'Orig', // 'Orig' — same abbreviation in Spanish
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Calidad', // 'Quality'
    exporting: 'Exportando…', // 'Exporting...'
    downloadWatermarked: 'Descargar imagen con marca de agua', // 'Download Watermarked Image'
  },
  '/rotate-flip-image': {
    quickRotateFlip: 'Giro y volteo rápidos', // 'Quick Rotate & Flip'
    rotate90Left: 'Girar 90° a la izquierda', // 'Rotate 90° Left'
    rotate90Right: 'Girar 90° a la derecha', // 'Rotate 90° Right'
    rotate180: '180°', // '180°'
    flipHorizontal: 'Voltear en horizontal', // 'Flip Horizontal'
    flipVertical: 'Voltear en vertical', // 'Flip Vertical'
    outputFormat: 'Formato de salida', // 'Output Format'
    formatOriginal: 'Original', // 'Original'
    formatJpg: 'JPG', // 'JPG'
    rotationAngle: 'Ángulo de rotación:', // 'Rotation Angle:'
    resetTo0: 'Restablecer a 0°', // 'Reset to 0°'
    applyAngle: 'Aplicar ángulo', // 'Apply Angle'
    clear: 'Limpiar', // 'Clear'
    batchReady: 'Lote listo', // 'Batch Ready'
    transformedImagesReady: '{count} imágenes transformadas listas', // '{count} transformed images ready'
    creatingZip: 'Creando ZIP...', // 'Creating ZIP...'
    downloadAllZip: 'Descargar todo (ZIP)', // 'Download All (ZIP)'
    rotatedBadge: 'Girada {angle}°', // 'Rotated {angle}°'
    flippedH: ' · Volteada H', // ' · Flipped H'
    flippedV: ' · Volteada V', // ' · Flipped V'
    compare: 'Comparar', // 'Compare'
    download: 'Descargar', // 'Download'
    removeItem: 'Eliminar {name}', // 'Remove {name}' (aria-label)
    transformFailed: 'Error al transformar la imagen.', // 'Transform failed.'
    corruptedImage: 'Imagen dañada o ilegible.', // 'Corrupted or unreadable image.'
    comparisonTitlePrefix: 'Comparación de rotación y volteo', // 'Rotate & Flip Comparison'
    comparisonAfterLabel: 'Editada (después)', // 'Edited (After)'
  },
  '/image-to-pdf': {
    uploadTitle: 'Suelte imágenes para combinarlas en PDF', // 'Drop images to combine into PDF'
    couldNotRead: 'No se pudo leer "{filename}". Asegúrese de que sea una imagen válida.', // 'Could not read "{filename}". Please ensure it is a valid image.'
    pdfGenerationFailed: 'Error al generar el PDF.', // 'PDF generation failed.'
    encodingPage: 'Codificando página {current} de {total}...', // 'Encoding page {current} of {total}...'
    generatingPdf: 'Generando PDF...', // 'Generating PDF...'
    pageSize: 'Tamaño de página', // 'Page Size'
    pageSizeA4: 'A4 (210 × 297 mm)', // 'A4 (210 × 297 mm)'
    pageSizeLetter: 'Carta de EE. UU. (8,5 × 11 pulg.)', // 'US Letter (8.5 × 11 in)'
    pageSizeFit: 'Ajustar al tamaño de la imagen', // 'Fit to Image Size'
    orientation: 'Orientación', // 'Orientation'
    orientationAuto: 'Automática (según la foto)', // 'Auto (Match Photo)'
    orientationPortrait: 'Vertical', // 'Portrait'
    orientationLandscape: 'Horizontal', // 'Landscape'
    margin: 'Margen', // 'Margin'
    marginNone: 'Sin margen (a sangre)', // 'No Margin (Full Bleed)'
    marginSmall: 'Margen pequeño', // 'Small Margin'
    marginMedium: 'Margen mediano', // 'Medium Margin'
    imagePlacement: 'Colocación de la imagen', // 'Image Placement'
    placementContain: 'Contener (imagen completa)', // 'Contain (Full Image)'
    placementCover: 'Cubrir (llenar la página)', // 'Cover (Fill Page)'
    pdfFilename: 'Nombre de archivo PDF', // 'PDF Filename'
    pdfImageQuality: 'Calidad de imagen del PDF:', // 'PDF Image Quality:'
    createDownloadPdf: 'Crear y descargar PDF ({count} pág.)', // 'Create & Download PDF ({count}p)'
    clear: 'Limpiar', // 'Clear'
    pdfReady: 'PDF listo ({count} {pages} · {size})', // 'PDF ready ({count} {pages} · {size})'
    pageSingular: 'página', // 'page'
    pagePlural: 'páginas', // 'pages'
    downloadPdfAgain: 'Descargar PDF de nuevo', // 'Download PDF Again'
    pageOrder: 'Orden de páginas ({count} {pages})', // 'Page Order ({count} {pages})'
    pageOrderSingular: 'Página', // 'Page' (in Page Order heading)
    pageOrderPlural: 'Páginas', // 'Pages' (in Page Order heading)
    movePageUp: 'Subir página', // 'Move page up' (title)
    movePageDown: 'Bajar página', // 'Move page down' (title)
    removePage: 'Eliminar página', // 'Remove page' (title)
  },
  '/image-metadata-viewer': {
    uploadTitle: 'Suelte una imagen para inspeccionar EXIF y metadatos', // 'Drop an image to inspect EXIF & metadata'
    unableToParse: 'No se pudieron analizar los metadatos de la imagen.', // 'Unable to parse image metadata.'
    embeddedMetadataFound: 'Metadatos incrustados encontrados ({count} tipos de etiquetas)', // 'Embedded metadata found ({count} tag types)'
    noTagsDetected: 'No se detectaron etiquetas EXIF, GPS ni de cámara ocultas', // 'No EXIF, GPS, or hidden camera tags detected'
    stripMetadata: 'Eliminar metadatos', // 'Strip Metadata'
    copyJson: 'Copiar JSON', // 'Copy JSON'
    copiedJson: 'JSON copiado', // 'Copied JSON'
    exportJson: 'Exportar JSON', // 'Export JSON'
    clear: 'Limpiar', // 'Clear' (title)
    gpsDetected: 'Coordenadas de ubicación GPS detectadas', // 'GPS Location Coordinates Detected'
    latitude: 'Latitud:', // 'Latitude:'
    longitude: 'Longitud:', // 'Longitude:'
    gpsWarning:
      'Compartir esta imagen tal cual puede revelar dónde se tomó la foto. Use Eliminar metadatos antes de publicarla online.', // 'Sharing this image as-is can reveal where the photo was taken. Use Remove Image Metadata before posting online.'
    extractedMetadata: 'Metadatos extraídos ({count} propiedades)', // 'Extracted Metadata ({count} properties)'
    privacyTag: 'Etiqueta de privacidad', // 'Privacy Tag'
  },
  '/remove-image-metadata': {
    uploadTitle: 'Suelte fotos para eliminar EXIF, GPS y metadatos', // 'Drop photos to strip EXIF, GPS & metadata'
    failedToStrip: 'No se pudieron eliminar los metadatos.', // 'Failed to strip metadata.'
    strippingMethod: 'Método de eliminación', // 'Stripping Method'
    losslessStrip: 'Eliminación binaria sin pérdidas (JPG/PNG)', // 'Lossless Binary Strip (JPG/PNG)'
    fullCanvasReencode: 'Recodificación completa en lienzo', // 'Full Canvas Re-encode'
    outputFormat: 'Formato de salida', // 'Output Format'
    formatOriginal: 'Original', // 'Original'
    formatJpg: 'JPG', // 'JPG'
    reencodeQuality: 'Calidad de recodificación (para WebP/HEIC o recodificación completa):', // 'Re-encode Quality (used for WebP/HEIC or Full Re-encode):'
    cleaning: 'Limpiando...', // 'Cleaning...'
    recleanAll: 'Volver a limpiar todo', // 'Re-clean All'
    clear: 'Limpiar', // 'Clear'
    privacyVerified: 'Privacidad verificada', // 'Privacy Verified'
    cleanImagesReady: '{count} imágenes limpias listas, con metadatos eliminados', // '{count} clean images ready with metadata stripped'
    creatingZip: 'Creando ZIP...', // 'Creating ZIP...'
    downloadAllCleanZip: 'Descargar todas limpias (ZIP)', // 'Download All Clean (ZIP)'
    strippedTags: 'Se eliminaron {before} etiquetas de metadatos → {after} restantes', // 'Stripped {before} metadata tags → {after} remaining'
    verifiedClean: 'Limpia verificada (0 etiquetas EXIF/GPS)', // 'Verified clean (0 EXIF/GPS tags)'
    losslessBinaryStrip: 'Eliminación binaria sin pérdidas', // 'Lossless binary strip'
    cleanCanvasExport: 'Exportación limpia en lienzo', // 'Clean Canvas export'
    scrubbing: 'Eliminando encabezados EXIF y GPS...', // 'Scrubbing EXIF & GPS headers...'
    downloadClean: 'Descargar limpia', // 'Download Clean'
    removeItem: 'Eliminar {name}', // 'Remove {name}' (aria-label)
  },
} as const;
