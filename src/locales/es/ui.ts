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
    deployedNote: 'Crafted with ❤️ by Bilal inspired by Shaheen',
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
    commentsTitle: 'Comentarios',
    commentsNote: 'Comparte tu opinión sobre esta herramienta: solo escribe tu nombre y publica. No necesitas cuenta.',
    commentsNamePlaceholder: 'Tu nombre',
    commentsTextPlaceholder: 'Escribe tu comentario…',
    commentsSubmit: 'Publicar comentario',
    commentsPosting: 'Publicando…',
    commentsEmpty: 'Sé el primero en comentar.',
    commentsPosted: '¡Gracias! Tu comentario ya está publicado.',
    commentsLoadError: 'No se pudieron cargar los comentarios. Inténtalo de nuevo.',
    commentsPostError: 'No se pudo publicar tu comentario. Inténtalo de nuevo.',
    commentsRetry: 'Reintentar',
    commentsLoading: 'Cargando comentarios…',
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
  '/favicon-generator': {
    uploadTitle: 'Suelte su logotipo o icono aquí', // 'Drop your logo or icon here'
    uploadSubtitlePrefix: 'Se recomienda PNG o SVG cuadrado · ', // 'Square PNG or SVG recommended · '
    uploadBrowseFile: 'explorar archivo', // 'browse file'
    errorGenerateFailed: 'No se pudo generar el paquete de favicon.', // 'Failed to generate favicon package.'
    backgroundFill: 'Relleno de fondo', // 'Background Fill'
    transparent: 'Transparente', // 'Transparent'
    padding: 'Relleno', // 'Padding'
    cornerRadius: 'Radio de esquina', // 'Corner Radius'
    tabPreviewAlt: 'Vista previa de pestaña', // alt 'Tab preview'
    myWebsite: 'Mi sitio web', // 'My Website'
    darkTabPreviewAlt: 'Vista previa de pestaña oscura', // alt 'Dark tab preview'
    darkModeTab: 'Pestaña en modo oscuro', // 'Dark Mode Tab'
    packingZip: 'Empaquetando ZIP…', // 'Packing ZIP...'
    downloadAllZip: 'Descargar todo (ZIP)', // 'Download All (ZIP)'
    clear: 'Limpiar', // title 'Clear'
    downloadFaviconIco: 'Descargar favicon.ico', // title 'Download favicon.ico'
    downloadFile: 'Descargar {filename}', // title `Download ${asset.filename}`
    htmlHeadSnippet: 'Fragmento HTML <head>', // 'HTML <head> Snippet'
    copied: '¡Copiado!', // 'Copied!'
    copyHtml: 'Copiar HTML', // 'Copy HTML'
  },
  '/image-color-picker': {
    uploadTitle: 'Suelte una imagen o pegue una captura (Ctrl+V)', // 'Drop an image or paste screenshot (Ctrl+V)'
    errorUnableToLoadImage: 'No se pudo cargar la imagen.', // 'Unable to load image.'
    clickAnywhereToPin: 'Haga clic en cualquier lugar para fijar un color', // 'Click anywhere to pin a color'
    newImage: 'Nueva imagen', // 'New Image'
    pixelInspector: 'Inspector de píxeles', // 'Pixel Inspector'
    copyLabel: 'Copiar {label}', // title `Copy ${row.label}`
    pickedSwatches: 'Muestras guardadas ({count})', // 'Picked Swatches ({palette.length})'
    exportCss: 'Exportar CSS', // 'Export CSS'
    clickPixelsHint: 'Haga clic en píxeles de la imagen para guardar colores en su paleta.', // 'Click pixels on the image to save colors to your palette.'
    clickToSelectCopy: 'Pulse para seleccionar y copiar {hex}', // title `Click to select & copy ${c.hex}`
  },
  '/image-dimensions-checker': {
    uploadTitle: 'Suelte imágenes para inspeccionar dimensiones y proporciones exactas', // 'Drop images to inspect exact dimensions & ratios'
    minWidthCheck: 'Ancho mínimo (px)', // 'Min Width Check (px)'
    minHeightCheck: 'Alto mínimo (px)', // 'Min Height Check (px)'
    placeholderMinWidth: 'p. ej., 1200', // placeholder 'e.g. 1200'
    placeholderMinHeight: 'p. ej., 630', // placeholder 'e.g. 630'
    exportCsv: 'Exportar CSV', // 'Export CSV'
    exportJson: 'Exportar JSON', // 'Export JSON'
    clear: 'Limpiar', // 'Clear'
    headerImage: 'Imagen', // table header 'Image'
    headerDimensions: 'Dimensiones', // table header 'Dimensions'
    headerAspectRatio: 'Proporción', // table header 'Aspect Ratio'
    headerOrientation: 'Orientación', // table header 'Orientation'
    headerSizeFormat: 'Tamaño / Formato', // table header 'Size / Format'
    headerPrint300Dpi: 'Impresión a 300 DPI', // table header 'Print @300 DPI'
    headerSpecCheck: 'Comprobación de especificación', // table header 'Spec Check'
    orientationLandscape: 'Horizontal', // 'Landscape'
    orientationPortrait: 'Vertical', // 'Portrait'
    orientationSquare: 'Cuadrada', // 'Square'
    alphaTag: ' · Alfa', // ' · Alpha'
    specPass: 'Aprobado', // 'Pass'
    specBelowMin: 'Por debajo del mínimo', // 'Below Min'
    csvYes: 'Sí', // CSV value 'Yes'
    csvNo: 'No', // CSV value 'No'
  },
  '/blur-pixelate-image': {
    uploadTitle: 'Suelte una imagen para desenfocar o pixelar zonas', // 'Drop an image to blur or pixelate areas'
    errorUnableToLoadImage: 'No se pudo cargar la imagen.', // 'Unable to load image.'
    errorExportFailed: 'Error al exportar.', // 'Export failed.'
    paintOverAreasBlur: 'Pinte zonas para desenfocar', // 'Paint Over Areas to Blur'
    paintOverAreasPixelate: 'Pinte zonas para pixelar', // 'Paint Over Areas to Pixelate'
    wholeImagePreview: 'Vista previa de imagen completa', // 'Whole-Image Preview'
    undo: 'Deshacer', // 'Undo'
    resetBrush: 'Restablecer pincel', // 'Reset Brush'
    removeImage: 'Eliminar imagen', // aria-label 'Remove image'
    targetArea: 'Área objetivo', // 'Target Area'
    brushArea: 'Área de pincel', // 'Brush Area'
    wholeImage: 'Imagen completa', // 'Whole Image'
    effectStyle: 'Estilo de efecto', // 'Effect Style'
    pixelateMosaic: 'Mosaico pixelado', // 'Pixelate Mosaic'
    smoothBlur: 'Desenfoque suave', // 'Smooth Blur'
    blurRadius: 'Radio de desenfoque', // 'Blur Radius'
    mosaicBlockSize: 'Tamaño de bloque de mosaico', // 'Mosaic Block Size'
    brushSize: 'Tamaño de pincel', // 'Brush Size'
    brushHint: 'Haga clic y arrastre directamente sobre la foto para ocultar rostros, texto o placas.', // 'Click and drag directly on the photo to hide faces, text, or license plates.'
    formatOrig: 'Orig', // 'Orig' — same abbreviation in Spanish
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Calidad', // 'Quality'
    exporting: 'Exportando…', // 'Exporting...'
    downloadImage: 'Descargar imagen', // 'Download Image'
  },
  '/add-text-to-image': {
    uploadTitle: 'Suelte una imagen para agregar textos superpuestos personalizados', // 'Drop an image to add custom text overlays'
    errorUnableToLoadImage: 'No se pudo cargar la imagen.', // 'Unable to load image.'
    errorExportFailed: 'Error al exportar.', // 'Export failed.'
    dragAnyText: 'Arrastre cualquier texto directamente sobre la imagen', // 'Drag Any Text Directly on Image'
    changeImage: 'Cambiar imagen', // 'Change Image'
    textLayer: 'Texto {index}', // tab `Text ${idx + 1}`
    add: 'Agregar', // 'Add'
    deleteActiveTextLayer: 'Eliminar capa de texto activa', // aria-label 'Delete active text layer'
    textContent: 'Contenido de texto (varias líneas admitidas)', // 'Text Content (multi-line supported)'
    font: 'Fuente', // 'Font'
    fontInter: 'Inter / Sans limpia', // font option 'Inter / Clean Sans'
    fontImpact: 'Impact / Pantalla de meme', // font option 'Impact / Meme Display'
    fontGeorgia: 'Georgia / Serif clásica', // font option 'Georgia / Classic Serif'
    fontCourier: 'Courier / Monoespaciada', // font option 'Courier / Monospace'
    fontTrebuchet: 'Trebuchet / Sans redondeada', // font option 'Trebuchet / Rounded Sans'
    fill: 'Relleno', // 'Fill'
    toggleBold: 'Activar/desactivar negrita', // aria-label 'Toggle Bold'
    toggleItalic: 'Activar/desactivar cursiva', // aria-label 'Toggle Italic'
    size: 'Tamaño', // 'Size'
    rotation: 'Rotación', // 'Rotation'
    textOutline: 'Contorno de texto', // 'Text Outline'
    dropShadow: 'Sombra paralela', // 'Drop Shadow'
    defaultLayerText: 'Toque dos veces o edite el texto', // default layer text 'Double-tap or edit text'
    defaultCaption: 'Subtítulo {index}', // default layer text `Caption ${index + 1}`
    formatOrig: 'Orig', // 'Orig' — same abbreviation in Spanish
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Calidad', // 'Quality'
    exporting: 'Exportando…', // 'Exporting...'
    downloadImageWithText: 'Descargar imagen con texto', // 'Download Image with Text'
  },
  '/image-border-generator': {
    uploadTitle: 'Suelte una imagen para agregar un borde o marco personalizado', // 'Drop an image to add a custom border or frame'
    errorUnableToLoadImage: 'No se pudo cargar la imagen.', // 'Unable to load image.'
    errorExportFailed: 'Error al exportar.', // 'Export failed.'
    framedPreview: 'Vista previa enmarcada', // 'Framed Preview'
    changeImage: 'Cambiar imagen', // 'Change Image'
    quickFramePresets: 'Plantillas rápidas de marco', // 'Quick Frame Presets'
    presetClassicWhite: 'Blanco clásico', // preset 'Classic White'
    presetPolaroidFrame: 'Marco Polaroid', // preset 'Polaroid Frame'
    presetDarkStudio: 'Estudio oscuro', // preset 'Dark Studio'
    presetGradientGlow: 'Brillo de degradado', // preset 'Gradient Glow'
    borderStyle: 'Estilo de borde', // 'Border Style'
    borderStyleSolid: 'Sólido', // border type 'solid' (rendered capitalized)
    borderStyleGradient: 'Degradado', // border type 'gradient' (rendered capitalized)
    borderStylePolaroid: 'Polaroid', // border type 'polaroid' (rendered capitalized)
    borderColor: 'Color de borde', // 'Border Color'
    startColor: 'Color inicial', // 'Start Color'
    endColor: 'Color final', // 'End Color'
    gradientAngle: 'Ángulo de degradado', // 'Gradient Angle'
    borderSize: 'Tamaño de borde', // 'Border Size'
    frameRadius: 'Radio del marco', // 'Frame Radius'
    photoRadius: 'Radio de foto', // 'Photo Radius'
    dropShadow: 'Sombra paralela', // 'Drop Shadow'
    shadowNone: 'ninguna', // shadow level 'none' (rendered capitalized)
    shadowSoft: 'suave', // shadow level 'soft' (rendered capitalized)
    shadowMedium: 'media', // shadow level 'medium' (rendered capitalized)
    shadowDeep: 'profunda', // shadow level 'deep' (rendered capitalized)
    exporting: 'Exportando…', // 'Exporting...'
    downloadFramedImage: 'Descargar imagen enmarcada', // 'Download Framed Image'
  },
  '/round-image-corners': {
    uploadTitle: 'Suelte una imagen para redondear sus esquinas', // 'Drop an image to round its corners'
    errorUnableToLoadImage: 'No se pudo cargar la imagen.', // 'Unable to load image.'
    errorExportFailed: 'No se pudo exportar la imagen redondeada.', // 'Failed to export rounded image.'
    liveCornerPreview: 'Vista previa de esquinas en vivo', // 'Live Corner Preview'
    changeImage: 'Cambiar imagen', // 'Change Image'
    cornerSettings: 'Ajustes de esquina', // 'Corner Settings'
    fullCirclePill: 'Círculo completo / Píldora', // 'Full Circle / Pill'
    individualPerCorner: 'Control individual por esquina', // 'Individual Per-Corner Control'
    allCornersRadius: 'Radio de todas las esquinas', // 'All Corners Radius'
    cornerTopLeft: 'Superior izquierda', // per-corner label 'Top Left'
    cornerTopRight: 'Superior derecha', // per-corner label 'Top Right'
    cornerBottomLeft: 'Inferior izquierda', // per-corner label 'Bottom Left'
    cornerBottomRight: 'Inferior derecha', // per-corner label 'Bottom Right'
    outerCornerFill: 'Relleno de esquina exterior', // 'Outer Corner Fill'
    transparentPngWebp: 'Transparente (PNG/WebP)', // 'Transparent (PNG/WebP)'
    solidColor: 'Color sólido', // 'Solid Color'
    outputFormat: 'Formato de salida', // 'Output Format'
    exporting: 'Exportando…', // 'Exporting...'
    downloadRoundedImage: 'Descargar imagen redondeada', // 'Download Rounded Image'
  },
  '/image-brightness-editor': {
    uploadTitle: 'Suelte una imagen para ajustar el brillo', // ToneEditorTool title `Drop an image to adjust ${cfg.label.toLowerCase()}` (mode 'brightness')
    errorUnableToLoadImage: 'No se pudo cargar la imagen.', // 'Unable to load image.'
    errorExportFailed: 'No se pudo exportar la imagen ajustada.', // 'Failed to export adjusted image.'
    viewAfter: 'Después', // view tab 'after' (rendered capitalized)
    viewBefore: 'Antes', // view tab 'before' (rendered capitalized)
    viewSplitCompare: 'Comparación dividida', // view tab 'Split Compare'
    fullscreenCompare: 'Comparación en pantalla completa', // 'Fullscreen Compare'
    removeImage: 'Eliminar imagen', // title/aria-label 'Remove image'
    beforeLabel: 'Antes', // split slider label 'Before'
    afterLabel: 'Después', // split slider label 'After'
    originalPreviewAlt: 'Vista previa original', // alt 'Original preview'
    originalComparisonAlt: 'Comparación original', // alt 'Original comparison'
    brightnessControls: 'Controles de brillo', // 'Brightness Controls'
    reset: 'Restablecer', // 'Reset'
    brightnessLevel: 'Nivel de brillo', // 'Brightness Level'
    minLabel: '-100 % Más oscuro', // min label '-100% Darker'
    maxLabel: '+100 % Más claro', // max label '+100% Brighter'
    quickPresets: 'Plantillas rápidas', // 'Quick Presets'
    presetDark: 'Oscuro (-30 %)', // preset 'Dark (-30%)'
    presetDim: 'Tenue (-15 %)', // preset 'Dim (-15%)'
    presetOriginal: 'Original (0 %)', // preset 'Original (0%)'
    presetBright: 'Brillante (+15 %)', // preset 'Bright (+15%)'
    presetVibrant: 'Vibrante (+30 %)', // preset 'Vibrant (+30%)'
    presetHighKey: 'Clave alta (+50 %)', // preset 'High Key (+50%)'
    outputFormat: 'Formato de salida', // 'Output Format'
    formatOriginal: 'Original', // 'Original' — same in Spanish
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Calidad', // 'Quality'
    exporting: 'Exportando…', // 'Exporting...'
    downloadEditedImage: 'Descargar imagen editada', // 'Download Edited Image'
    comparisonTitlePrefix: 'Comparación de brillo', // ComparisonModal titlePrefix `Brightness Comparison`
    comparisonAfterLabel: 'Editada (después)', // ComparisonModal afterLabel 'Edited (After)'
  },
  '/image-contrast-editor': {
    uploadTitle: 'Suelte una imagen para ajustar el contraste', // 'Drop an image to adjust contrast'
    comparisonTitlePrefix: 'Comparación de contraste', // 'Contrast Comparison'
    comparisonAfterLabel: 'Editada (después)', // 'Edited (After)'
    errorUnableToLoadImage: 'No se pudo cargar la imagen.', // 'Unable to load image.'
    errorExportFailed: 'No se pudo exportar la imagen ajustada.', // 'Failed to export adjusted image.'
    tabAfter: 'Después', // tab 'after' (CSS-capitalized in code)
    tabBefore: 'Antes', // tab 'before' (CSS-capitalized in code)
    tabSplitCompare: 'Comparación dividida', // tab 'split' renders 'Split Compare'
    fullscreenCompare: 'Comparar a pantalla completa', // 'Fullscreen Compare'
    removeImage: 'Eliminar imagen', // title + aria-label 'Remove image'
    originalPreviewAlt: 'Vista previa original', // alt 'Original preview'
    originalComparisonAlt: 'Comparación original', // alt 'Original comparison'
    splitBeforeLabel: 'Antes', // split slider left label 'Before'
    splitAfterLabel: 'Después', // split slider right label 'After'
    controlsHeading: 'Controles de contraste', // '{label} Controls' (contrast mode)
    reset: 'Restablecer', // 'Reset'
    levelLabel: 'Nivel de contraste', // '{label} Level' (contrast mode)
    minLabel: '-100 % Plano', // minLabel '-100% Flat'
    maxLabel: '+100 % Alto contraste', // maxLabel '+100% High Contrast'
    quickPresets: 'Ajustes predefinidos rápidos', // 'Quick Presets'
    presetSoft: 'Suave (-25 %)', // 'Soft (-25%)'
    presetMuted: 'Atenuado (-10 %)', // 'Muted (-10%)'
    presetOriginal: 'Original (0 %)', // 'Original (0%)'
    presetCrisp: 'Nítido (+20 %)', // 'Crisp (+20%)'
    presetPunchy: 'Intenso (+40 %)', // 'Punchy (+40%)'
    presetDramatic: 'Dramático (+70 %)', // 'Dramatic (+70%)'
    outputFormat: 'Formato de salida', // 'Output Format'
    formatOriginal: 'Original', // 'Original' — same in Spanish
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Calidad', // 'Quality'
    exporting: 'Exportando…', // 'Exporting...'
    downloadEditedImage: 'Descargar imagen editada', // 'Download Edited Image'
  },
  '/image-saturation-editor': {
    uploadTitle: 'Suelte una imagen para ajustar la saturación', // 'Drop an image to adjust saturation'
    comparisonTitlePrefix: 'Comparación de saturación', // 'Saturation Comparison'
    comparisonAfterLabel: 'Editada (después)', // 'Edited (After)'
    errorUnableToLoadImage: 'No se pudo cargar la imagen.', // 'Unable to load image.'
    errorExportFailed: 'No se pudo exportar la imagen ajustada.', // 'Failed to export adjusted image.'
    tabAfter: 'Después', // tab 'after' (CSS-capitalized in code)
    tabBefore: 'Antes', // tab 'before' (CSS-capitalized in code)
    tabSplitCompare: 'Comparación dividida', // tab 'split' renders 'Split Compare'
    fullscreenCompare: 'Comparar a pantalla completa', // 'Fullscreen Compare'
    removeImage: 'Eliminar imagen', // title + aria-label 'Remove image'
    originalPreviewAlt: 'Vista previa original', // alt 'Original preview'
    originalComparisonAlt: 'Comparación original', // alt 'Original comparison'
    splitBeforeLabel: 'Antes', // split slider left label 'Before'
    splitAfterLabel: 'Después', // split slider right label 'After'
    controlsHeading: 'Controles de saturación', // '{label} Controls' (saturation mode)
    reset: 'Restablecer', // 'Reset'
    levelLabel: 'Nivel de saturación', // '{label} Level' (saturation mode)
    minLabel: '-100 % Escala de grises', // minLabel '-100% Grayscale'
    maxLabel: '+100 % Vívido', // maxLabel '+100% Vivid'
    quickPresets: 'Ajustes predefinidos rápidos', // 'Quick Presets'
    presetGrayscale: 'Escala de grises (-100 %)', // 'Grayscale (-100%)'
    presetMuted: 'Atenuado (-40 %)', // 'Muted (-40%)'
    presetOriginal: 'Original (0 %)', // 'Original (0%)'
    presetRich: 'Intenso (+30 %)', // 'Rich (+30%)'
    presetVivid: 'Vívido (+60 %)', // 'Vivid (+60%)'
    presetHyper: 'Hiper (+90 %)', // 'Hyper (+90%)'
    outputFormat: 'Formato de salida', // 'Output Format'
    formatOriginal: 'Original', // 'Original' — same in Spanish
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Calidad', // 'Quality'
    exporting: 'Exportando…', // 'Exporting...'
    downloadEditedImage: 'Descargar imagen editada', // 'Download Edited Image'
  },
  '/image-filters': {
    uploadTitle: 'Suelte una imagen para aplicar filtros', // 'Drop an image to apply filters'
    comparisonTitlePrefix: 'Comparación de filtros', // 'Filter Comparison'
    comparisonAfterLabel: 'Filtrada', // 'Filtered'
    errorUnableToLoadImage: 'No se pudo cargar la imagen.', // 'Unable to load image.'
    errorExportFailed: 'No se pudo exportar.', // 'Export failed.'
    filterPreview: 'Vista previa de filtro', // 'Filter Preview'
    holdToViewOriginal: 'Mantener para ver el original', // 'Hold to View Original'
    compare: 'Comparar', // 'Compare'
    removeImage: 'Eliminar imagen', // aria-label 'Remove image'
    originalBadge: 'Original', // 'Original' badge — same in Spanish
    filterPresets: 'Ajustes predefinidos de filtro', // 'Filter Presets'
    reset: 'Restablecer', // 'Reset'
    presetOriginal: 'Original', // preset 'Original' — same in Spanish
    presetGrayscale: 'Escala de grises', // preset 'Grayscale'
    presetSepia: 'Sepia', // preset 'Sepia' — same in Spanish
    presetVintage: 'Vintage', // preset 'Vintage' — same in Spanish
    presetWarm: 'Cálido', // preset 'Warm'
    presetCool: 'Frío', // preset 'Cool'
    presetHighContrast: 'Alto contraste', // preset 'High Contrast'
    presetMatteFade: 'Atenuado mate', // preset 'Matte Fade'
    presetDramatic: 'Dramático', // preset 'Dramatic'
    presetNoir: 'B/N Noir', // preset 'B&W Noir'
    presetGoldenHour: 'Hora dorada', // preset 'Golden Hour'
    presetInvert: 'Invertir', // preset 'Invert'
    filterIntensity: 'Intensidad del filtro', // 'Filter Intensity'
    outputFormat: 'Formato de salida', // 'Output Format'
    formatOriginal: 'Original', // 'Original' — same in Spanish
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Calidad', // 'Quality'
    rendering: 'Procesando…', // 'Rendering...'
    downloadFilteredImage: 'Descargar imagen filtrada', // 'Download Filtered Image'
  },
  '/add-background-to-image': {
    uploadTitle: 'Suelte una imagen o un PNG transparente para agregar un fondo', // 'Drop an image or transparent PNG to add a backdrop'
    errorUnableToLoadImage: 'No se pudo cargar la imagen.', // 'Unable to load image.'
    errorExportFailed: 'No se pudo exportar.', // 'Export failed.'
    backgroundPreview: 'Vista previa de fondo', // 'Background Preview'
    changeImage: 'Cambiar imagen', // 'Change Image'
    outputDimensionsPrefix: 'Salida:', // 'Output:' (before '{w}×{h}px')
    backgroundType: 'Tipo de fondo', // 'Background Type'
    modeSolidColor: 'Color sólido', // 'Solid Color'
    modeGradient: 'Degradado', // 'Gradient'
    modeBlurredPhoto: 'Foto difuminada', // 'Blurred Photo'
    selectColor: 'Seleccionar color {color}', // aria-label `Select color ${c}`
    color1: 'Color 1', // 'Color 1' — same in Spanish
    color2: 'Color 2', // 'Color 2' — same in Spanish
    angle: 'Ángulo', // 'Angle'
    backdropBlurRadius: 'Radio de desenfoque del fondo', // 'Backdrop Blur Radius'
    canvasAspectRatio: 'Proporción de lienzo', // 'Canvas Aspect Ratio'
    aspectOriginal: 'Orig', // 'Orig' — same abbreviation in Spanish
    imageScale: 'Escala de imagen', // 'Image Scale'
    roundness: 'Redondez', // 'Roundness'
    dropShadowBehindImage: 'Sombra paralela detrás de la imagen', // 'Drop Shadow Behind Image'
    formatPng: 'PNG', // 'PNG' — unchanged
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WEBP', // 'WEBP' — unchanged
    exporting: 'Exportando…', // 'Exporting...'
    downloadImage: 'Descargar imagen', // 'Download Image'
  },
  '/image-splitter': {
    uploadTitle: 'Suelte una imagen para dividirla en mosaicos de rejilla o tiras', // 'Drop an image to split into grid tiles or strips'
    errorUnableToLoadImage: 'No se pudo cargar la imagen.', // 'Unable to load image.'
    errorSplitFailed: 'No se pudo dividir la imagen.', // 'Failed to split image.'
    errorCanvasContext: 'No se pudo inicializar el contexto del lienzo.', // 'Unable to initialize canvas context.'
    cutLinePreview: 'Vista previa de líneas de corte ({rows} × {cols} = {tiles} piezas)', // 'Cut-Line Preview ({rows} × {cols} = {n} tiles)'
    changeImage: 'Cambiar imagen', // 'Change Image'
    splitGuideAlt: 'Guía de división', // alt 'Split guide'
    splitLayout: 'Diseño de división', // 'Split Layout'
    modeGrid: 'Rejilla (N×M)', // 'Grid (N×M)'
    modeHorizontalStrips: 'Tiras horizontales', // 'Horiz. Strips'
    modeVerticalStrips: 'Tiras verticales', // 'Vert. Strips'
    rowsLabel: 'Filas (cortes horizontales)', // 'Rows (Horizontal Cuts)'
    columnsLabel: 'Columnas (cortes verticales)', // 'Columns (Vertical Cuts)'
    preset2x2: '2×2', // preset '2×2' — unchanged
    preset3x3Instagram: '3×3 Instagram', // preset '3×3 Instagram' — unchanged
    preset1x3Carousel: '1×3 Carrusel', // preset '1×3 Carousel'
    preset4x1Strips: '4×1 Tiras', // preset '4×1 Strips'
    formatOriginal: 'Orig', // 'Orig' — same abbreviation in Spanish
    formatJpg: 'JPG', // 'JPG' — unchanged
    tileQuality: 'Calidad de pieza', // 'Tile Quality'
    splittingImage: 'Dividiendo imagen…', // 'Splitting Image...'
    splitIntoTiles: 'Dividir en {count} piezas', // `Split into ${n} Tiles`
    splitComplete: 'División completa', // 'Split Complete'
    tilesGenerated: '{count} piezas de imagen generadas a resolución completa', // '{n} image tiles generated at full resolution'
    packagingZip: 'Empaquetando ZIP…', // 'Packaging ZIP...'
    downloadAllTilesZip: 'Descargar todas las piezas (ZIP)', // 'Download All Tiles (ZIP)'
    download: 'Descargar', // 'Download'
  },
  '/image-dpi-changer': {
    uploadTitle: 'Suelte imágenes JPG o PNG para actualizar los metadatos DPI', // 'Drop JPG or PNG images to update DPI metadata'
    errorUpdateDpiFailed: 'No se pudo actualizar el DPI.', // 'Failed to update DPI.'
    targetDpiPresets: 'Ajustes predefinidos de DPI objetivo', // 'Target DPI Presets'
    preset72Screen: '72 DPI (Pantalla)', // '72 DPI (Screen)'
    preset96Windows: '96 DPI (Windows)', // '96 DPI (Windows)' — unchanged
    preset150DraftPrint: '150 DPI (Impresión de borrador)', // '150 DPI (Draft Print)'
    preset300HighPrint: '300 DPI (Impresión de alta calidad)', // '300 DPI (High Print)'
    preset600Archival: '600 DPI (Archivo)', // '600 DPI (Archival)'
    customDpi: 'DPI personalizado', // 'Custom DPI'
    applyDpi: 'Aplicar {dpi} DPI', // 'Apply {dpi} DPI'
    clear: 'Limpiar', // 'Clear'
    batchReady: 'Lote listo', // 'Batch Ready'
    filesUpdatedToDpi: '{count} archivos actualizados a {dpi} DPI', // '{n} files updated to {dpi} DPI'
    creatingZip: 'Creando ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Descargar todo (ZIP)', // 'Download All (ZIP)'
    beforeDpi: 'Antes: {dpi} DPI', // 'Before: {dpi} DPI'
    beforeNotSet: 'Antes: Sin establecer', // 'Before: Not set'
    verifiedDpi: 'Verificado: {dpi} DPI', // 'Verified: {dpi} DPI'
    methodLosslessJpeg: 'Actualización sin pérdidas de encabezado JPEG', // 'Lossless JPEG Header Update'
    methodLosslessPng: 'Actualización sin pérdidas de pHYs PNG', // 'Lossless PNG pHYs Update'
    methodConvertedPng: 'Convertido a PNG con DPI pHYs', // 'Converted to PNG with pHYs DPI'
    download: 'Descargar', // 'Download'
    removeImage: 'Eliminar {name}', // aria-label `Remove ${item.file.name}`
  },
  '/image-to-base64': {
    uploadTitle: 'Suelte una imagen para codificarla como Base64', // 'Drop an image to encode as Base64'
    errorCouldNotEncode: 'No se pudo codificar el archivo.', // 'Could not encode file.'
    errorFailedToRead: 'No se pudo leer el archivo de imagen.', // 'Failed to read image file.'
    errorClipboardWriteFailed: 'No se pudo escribir en el portapapeles: seleccione y copie desde el cuadro de texto.', // 'Clipboard write failed — please select and copy from the text box.'
    fileLabel: 'Archivo:', // 'File:' (summary card)
    outputLabel: 'Salida:', // 'Output:' (summary card)
    charsLabel: 'caracteres', // 'chars' (summary card)
    encodeAnother: 'Codificar otra', // 'Encode Another'
    tabDataUrl: 'URL de datos', // tab 'Data URL'
    tabRawBase64: 'Base64 puro', // tab 'Raw Base64'
    tabHtmlImg: 'HTML <img>', // tab 'HTML <img>' — unchanged
    tabCssUrl: 'CSS url()', // tab 'CSS url()' — unchanged
    copied: '¡Copiado!', // 'Copied!'
    copyOutput: 'Copiar salida', // 'Copy Output'
    saveTxt: 'Guardar .TXT', // 'Save .TXT' — unchanged
  },
  '/base64-to-image': {
    pasteLabel: 'Pegar cadena Base64 o URL de datos', // 'Paste Base64 String or Data URL'
    clear: 'Borrar', // 'Clear'
    inputPlaceholder: 'Pegue data:image/png;base64,iVBORw0KGgo... o bytes Base64 puros aquí', // placeholder 'Paste data:image/png;base64,iVBORw0KGgo... or raw Base64 bytes here'
    supportsNote: 'Admite cargas Base64 de PNG, JPG, WebP, GIF, SVG, BMP e ICO', // 'Supports PNG, JPG, WebP, GIF, SVG, BMP, and ICO Base64 payloads'
    decoding: 'Decodificando…', // 'Decoding...'
    decodeImage: 'Decodificar imagen', // 'Decode Image'
    decodingBytes: 'Decodificando bytes Base64…', // 'Decoding Base64 bytes...'
    errorUnsupportedDataUri: 'Codificación de URI de datos no compatible. Se esperaba una carga Base64 (`;base64,`).', // 'Unsupported data URI encoding. Expected base64 payload (`;base64,`).'
    errorInvalidBase64: 'La entrada contiene caracteres Base64 no válidos.', // 'Input contains invalid Base64 characters.'
    errorNotValidImage: 'Los bytes decodificados no forman una imagen válida legible por el navegador.', // 'Decoded bytes do not form a valid browser-readable image.'
    errorUnableToDecode: 'No se pudo decodificar la cadena Base64.', // 'Unable to decode Base64 string.'
    decodedPreviewAlt: 'Vista previa de Base64 decodificado', // alt 'Decoded Base64 preview'
    validImageDecoded: 'Imagen válida decodificada', // 'Valid Image Decoded'
    detectedFormat: 'Formato detectado', // 'Detected Format'
    binarySize: 'Tamaño binario', // 'Binary Size'
    dimensions: 'Dimensiones', // 'Dimensions'
    downloadFormat: 'Formato de descarga', // 'Download Format'
    formatOriginal: 'Original', // 'Original' — same in Spanish
    formatJpg: 'JPG', // 'JPG' — unchanged
    downloadImageFile: 'Descargar archivo de imagen', // 'Download Image File'
  },
  '/image-color-palette-extractor': {
    uploadTitle: 'Suelte una imagen para extraer su paleta de colores dominantes', // 'Drop an image to extract its dominant color palette'
    errorUnableToLoadImage: 'No se pudo cargar la imagen.', // 'Unable to load image.'
    errorClipboardDenied: 'Permiso del portapapeles denegado.', // 'Clipboard permission denied.'
    extractedPalette: 'Paleta extraída ({count} colores)', // 'Extracted Palette ({count} Colors)'
    sourceAlt: 'Origen', // alt 'Source'
    changeImage: 'Cambiar', // 'Change'
    numberOfColors: 'Cantidad de colores', // 'Number of Colors'
    colorsCount: '{count} colores', // '{count} colors'
    copyCssVariables: 'Copiar variables CSS', // 'Copy CSS Variables'
    copiedCss: '¡CSS copiado!', // 'Copied CSS!'
    copyJson: 'Copiar JSON', // 'Copy JSON'
    copiedJson: '¡JSON copiado!', // 'Copied JSON!'
    downloadPalettePng: 'Descargar paleta PNG', // 'Download Palette PNG'
  },
  '/gif-maker': {
    uploadTitle: 'Suelte 2 o más imágenes para crear un GIF animado', // 'Drop 2 or more images to create an animated GIF'
    errorEncodeFailed: 'No se pudo codificar el GIF animado.', // 'Failed to encode animated GIF.'
    skippedFile: 'Se omitió "{name}": {error}', // 'Skipped "{file.name}": {err.message}'
    skippedFileNoError: 'Se omitió "{name}".', // 'Skipped "{file.name}".'
    generatedGif: 'GIF generado ({width}×{height} px · {size})', // 'Generated GIF ({width}×{height}px · {size})'
    liveTimingPreview: 'Vista previa en vivo · Fotograma {current}/{total}', // 'Live Timing Preview · Frame {n}/{total}'
    generatedGifAlt: 'GIF animado generado', // alt 'Generated animated GIF'
    pause: 'Pausar', // 'Pause'
    play: 'Reproducir', // 'Play'
    backToFrameEditor: 'Volver al editor de fotogramas', // 'Back to Frame Editor'
    clearAllFrames: 'Borrar todos los fotogramas', // aria-label 'Clear all frames'
    largeGifWarning: 'Advertencia de GIF grande ({size})', // 'Large GIF Warning ({size})'
    largeGifWarningBody:
      'Los GIF de más de 5–15 MB pueden subirse lentamente en aplicaciones de mensajería o no cumplir límites estrictos de plataforma. Pruebe reducir el ancho/alto de salida (p. ej., 480 px), bajar la calidad o quitar fotogramas.', // 'GIFs above 5–15 MB may upload slowly on messaging apps or fail strict platform limits. Try reducing output width/height (e.g. 480px), lowering Quality, or removing frames.'
    downloadAnimatedGif: 'Descargar GIF animado ({size})', // 'Download Animated GIF ({size})'
    animationSettings: 'Ajustes de animación', // 'Animation Settings'
    defaultFrameDuration: 'Duración predeterminada de fotograma', // 'Default Frame Duration'
    frameDurationValue: '{ms} ms ({fps} FPS)', // '{ms} ms ({fps} FPS)'
    fpsPreset1: '1 FPS (1000 ms)', // '1 FPS (1000ms)'
    fpsPreset2: '2 FPS (500 ms)', // '2 FPS (500ms)'
    fpsPreset5: '5 FPS (200 ms)', // '5 FPS (200ms)'
    fpsPreset10: '10 FPS (100 ms)', // '10 FPS (100ms)'
    loopBehavior: 'Comportamiento de repetición', // 'Loop Behavior'
    loopForever: 'Siempre', // 'Forever'
    loopSetLoops: 'Definir repeticiones', // 'Set Loops'
    loopPlayOnce: 'Reproducir una vez', // 'Play Once'
    totalPlays: 'Reproducciones totales', // 'Total Plays'
    outputDimensions: 'Dimensiones de salida (px)', // 'Output Dimensions (px)'
    ratioLocked: 'Proporción bloqueada', // 'Ratio Locked'
    ratioUnlocked: 'Desbloqueada', // 'Unlocked'
    widthLabel: 'Ancho', // 'Width'
    heightLabel: 'Alto', // 'Height'
    sizePreset480: '480 px', // '480px'
    sizePreset640: '640 px', // '640px'
    sizePreset800: '800 px', // '800px'
    sizePresetOriginal: 'Original', // 'Original' — same in Spanish
    frameFit: 'Ajuste de fotogramas', // 'Frame Fit'
    fitContain: 'Contener', // 'contain'
    fitCover: 'Cubrir', // 'cover'
    backgroundMatte: 'Fondo mate', // 'Background Matte'
    colorPaletteQuality: 'Calidad de la paleta de colores', // 'Color Palette Quality'
    encodingGif: 'Codificando GIF ({progress} %)…', // 'Encoding GIF ({progress}%)...'
    generateAnimatedGif: 'Generar GIF animado', // 'Generate Animated GIF'
    reEncodeAnimatedGif: 'Volver a codificar GIF animado', // 'Re-Encode Animated GIF'
    framesHeading: 'Fotogramas ({count}) — Arrastre o use las flechas para reordenar', // 'Frames ({count}) — Drag or use arrows to reorder'
    perFrameDelayHint:
      'Deje la duración por fotograma en blanco para heredar la duración global de fotograma de {ms} ms.', // 'Leave per-frame delay blank to inherit the {ms}ms global frame duration.'
    addFrames: 'Agregar fotogramas', // 'Add Frames'
    delayMsLabel: 'Duración (ms):', // 'Delay (ms):'
    moveEarlier: 'Mover antes', // title 'Move earlier'
    moveLater: 'Mover después', // title 'Move later'
    duplicateFrame: 'Duplicar fotograma', // title 'Duplicate frame'
    removeFrame: 'Quitar fotograma', // title 'Remove frame'
    moveFrameEarlierAria: 'Mover el fotograma {n} antes', // aria-label `Move frame ${n} earlier`
    moveFrameLaterAria: 'Mover el fotograma {n} después', // aria-label `Move frame ${n} later`
    duplicateFrameAria: 'Duplicar el fotograma {n}', // aria-label `Duplicate frame ${n}`
    removeFrameAria: 'Quitar el fotograma {n}', // aria-label `Remove frame ${n}`
  },
  '/image-collage-maker': {
    uploadTitle: 'Suelte de 2 a 9 imágenes para crear un collage de fotos', // 'Drop 2 to 9 images to create a photo collage'
    errorExportFailed: 'No se pudo exportar el collage.', // 'Failed to export collage.'
    couldNotLoadFile: 'No se pudo cargar "{name}": {error}', // 'Could not load "{file.name}": {err.message}'
    couldNotLoadFileNoError: 'No se pudo cargar "{name}".', // 'Could not load "{file.name}".'
    collagePreview: 'Vista previa del collage ({width}×{height} px)', // 'Collage Preview ({width}×{height}px)'
    clearAll: 'Borrar todo', // 'Clear All'
    rearrangeCells: 'Reordenar celdas (arrastre o toque dos celdas para intercambiar)', // 'Rearrange Cells (Drag or Tap Two Cells to Swap)'
    rearrangeCellsHint:
      'Arrastre cualquier tarjeta de celda sobre otra ranura para reordenar las fotos al instante.', // 'Drag any cell card onto another slot to reorder photos instantly.'
    addPhotos: 'Agregar fotos', // 'Add Photos'
    cellLabel: 'Celda {n}', // 'Cell {n}'
    slotLabel: 'Ranura {n}', // canvas-drawn 'Slot {n}'
    moveCellBackAria: 'Mover la celda {n} atrás', // aria-label `Move cell ${n} back`
    moveCellForwardAria: 'Mover la celda {n} adelante', // aria-label `Move cell ${n} forward`
    clearCellAria: 'Borrar la celda {n}', // aria-label `Clear cell ${n}`
    addPhoto: 'Agregar foto', // 'Add Photo'
    collageLayout: 'Diseño de collage', // 'Collage Layout'
    layout2x2: 'Cuadrícula de 2×2', // '2×2 Grid'
    layout3x3: 'Cuadrícula de 3×3', // '3×3 Grid'
    layoutVertical: 'Tira vertical', // 'Vertical Strip'
    layoutHorizontal: 'Tira horizontal', // 'Horizontal Strip'
    cellProportionsSpacing: 'Proporciones y espaciado de celdas', // 'Cell Proportions & Spacing'
    equalCells: 'Celdas iguales', // 'Equal Cells'
    colSplit: 'División de columnas', // 'Col Split'
    centerCol: 'Columna central', // 'Center Col'
    rowSplit: 'División de filas', // 'Row Split'
    centerRow: 'Fila central', // 'Center Row'
    leadCellEmphasis: 'Énfasis de la celda principal', // 'Lead Cell Emphasis'
    gapSpacing: 'Espaciado', // 'Gap Spacing'
    cellRadius: 'Radio de celda', // 'Cell Radius'
    backgroundColor: 'Color de fondo', // 'Background Color'
    backgroundSwatchAria: 'Fondo {color}', // aria-label `Background ${c}`
    imageFit: 'Ajuste de imagen', // 'Image Fit'
    fitCover: 'Cubrir', // 'cover'
    fitContain: 'Contener', // 'contain'
    outputSize: 'Tamaño de salida (px)', // 'Output Size (px)'
    widthLabel: 'Ancho', // 'Width'
    heightLabel: 'Alto', // 'Height'
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatPngLossless: 'PNG (sin pérdida)', // 'PNG (Lossless)'
    jpgQuality: 'Calidad JPG', // 'JPG Quality'
    exportingCollage: 'Exportando collage…', // 'Exporting Collage...'
    downloadCollage: 'Descargar collage ({format})', // 'Download Collage ({format})'
  },
  '/compress-image-to-50kb': {
    uploadTitle: 'Suelte imágenes para comprimir a menos de {target}', // 'Drop images to compress under {target}'
    errorTargetFailed: 'Error al comprimir al tamaño objetivo.', // 'Target compression failed.'
    errorCorruptedFile: 'Archivo de imagen dañado o ilegible.', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: 'Tamaño máximo de archivo objetivo', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} máx.)', // '({bytes} max)'
    needDifferentTarget: '¿Necesita un objetivo diferente en KB?', // 'Need a different target KB?'
    outputFormat: 'Formato de salida', // 'Output Format'
    formatOriginal: 'Original', // 'Original' — same in Spanish
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WebP' — unchanged
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      'Permitir escalado inteligente de dimensiones si la reducción de calidad por sí sola no cabe en {target}', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      'Convertir automáticamente PNG grandes a WebP/JPG cuando el PNG sin pérdida no puede llegar a {target} limpiamente', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: 'Color mate para PNG transparente:', // 'Transparent PNG matte color:'
    compressToTarget: 'Comprimir a {target}', // 'Compress to {target}'
    optimizing: 'Optimizando…', // 'Optimizing...'
    clear: 'Borrar', // 'Clear'
    losslessPngSelected: 'PNG sin pérdida seleccionado:', // 'Lossless PNG selected:'
    losslessPngWarning:
      'El PNG ignora los deslizadores de calidad, así que reducir el tamaño depende estrictamente de achicar las dimensiones en píxeles. Para fotos grandes, elija JPG o WebP para llegar a límites estrictos en KB manteniendo nitidez.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: 'Resumen de compresión objetivo · Meta ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{achieved} de {total} {images} cumplieron el objetivo de {target}', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: 'imagen', // 'image'
    imagePlural: 'imágenes', // 'images'
    summaryMissed: ' · {missed} no pudieron caber honestamente (detalles abajo)', // ' · {missed} could not honestly fit (details below)'
    totalSaved: 'Total ahorrado: {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: 'Total ahorrado: {bytes} (creció {grew})', // 'Total Saved: {bytes} (grew by {bytes})'
    downloadAllZip: 'Descargar todo (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'Creando ZIP…', // 'Creating ZIP...'
    metricOriginal: 'Original', // 'Original' (metric label)
    metricOutput: 'Salida', // 'Output' (metric label)
    metricSpaceSaved: 'Espacio ahorrado', // 'Space Saved' (metric label)
    metricReduction: 'Reducción', // 'Reduction' (metric label)
    metricSizeChange: 'Cambio de tamaño', // 'Size Change' (metric label)
    underTarget: 'Menos de {target} ({bytes})', // 'Under {target} ({bytes})'
    targetMissed: 'Objetivo no alcanzado — {bytes}', // 'Target missed — {bytes}'
    compare: 'Comparar', // 'Compare'
    download: 'Descargar', // 'Download'
    removeImage: 'Quitar {name}', // aria-label `Remove ${item.name}`
    grewBy: 'Creció {bytes}: la recodificación es más grande que el original', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: 'WebP o JPG suele ser más pequeño para PNG con aspecto de foto.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: 'Conservar original', // 'Keep original'
    keptOriginalNote: 'Se conservó el archivo original porque la recodificación lo hizo más grande.', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      'Se convirtió automáticamente el PNG sin pérdida a {format} para conservar mayor resolución por debajo de {target}.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP (transparencia conservada)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      'El archivo original ya estaba por debajo de {target}, y la recodificación lo hizo crecer {bytes}. Use «Conservar original» o cambie a WebP/JPG para una salida más pequeña.', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      'El archivo original ya estaba por debajo de {target}; se exportó limpiamente con calidad del {quality} %.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      'Objetivo cumplido con resolución completa de {width}×{height} px ({qualityLabel}).', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      'Objetivo cumplido al escalar a {width}×{height} px ({percent} %) con {qualityLabel}.', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'PNG sin pérdida', // 'lossless PNG'
    qualityPercent: 'calidad del {quality} %', // '{quality}% quality'
    statusCannotPng:
      'No se puede llegar a {target} con PNG sin pérdida (mínimo alcanzable: {bytes} a {width}×{height} px). Cambie el formato de salida a JPG o WebP para llegar a tamaños más pequeños.', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      'No se puede llegar a {target} con las dimensiones completas de {width}×{height} px (el tamaño mínimo de calidad es {bytes}). Active «Permitir escalado de dimensiones» para reducir más las dimensiones.', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      'No se pudo alcanzar limpiamente el objetivo solicitado de {target}. La salida codificada honesta más pequeña es {bytes} ({width}×{height} px, calidad del {quality} %). Pruebe un objetivo mayor.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: 'Compresión objetivo ({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: 'Comprimida ({bytes})', // afterLabel `Compressed ({bytes})`
  },
  '/compress-image-to-100kb': {
    uploadTitle: 'Suelte imágenes para comprimir a menos de {target}', // 'Drop images to compress under {target}'
    errorTargetFailed: 'Error al comprimir al tamaño objetivo.', // 'Target compression failed.'
    errorCorruptedFile: 'Archivo de imagen dañado o ilegible.', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: 'Tamaño máximo de archivo objetivo', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} máx.)', // '({bytes} max)'
    needDifferentTarget: '¿Necesita un objetivo diferente en KB?', // 'Need a different target KB?'
    outputFormat: 'Formato de salida', // 'Output Format'
    formatOriginal: 'Original', // 'Original' — same in Spanish
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WebP' — unchanged
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      'Permitir escalado inteligente de dimensiones si la reducción de calidad por sí sola no cabe en {target}', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      'Convertir automáticamente PNG grandes a WebP/JPG cuando el PNG sin pérdida no puede llegar a {target} limpiamente', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: 'Color mate para PNG transparente:', // 'Transparent PNG matte color:'
    compressToTarget: 'Comprimir a {target}', // 'Compress to {target}'
    optimizing: 'Optimizando…', // 'Optimizing...'
    clear: 'Borrar', // 'Clear'
    losslessPngSelected: 'PNG sin pérdida seleccionado:', // 'Lossless PNG selected:'
    losslessPngWarning:
      'El PNG ignora los deslizadores de calidad, así que reducir el tamaño depende estrictamente de achicar las dimensiones en píxeles. Para fotos grandes, elija JPG o WebP para llegar a límites estrictos en KB manteniendo nitidez.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: 'Resumen de compresión objetivo · Meta ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{achieved} de {total} {images} cumplieron el objetivo de {target}', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: 'imagen', // 'image'
    imagePlural: 'imágenes', // 'images'
    summaryMissed: ' · {missed} no pudieron caber honestamente (detalles abajo)', // ' · {missed} could not honestly fit (details below)'
    totalSaved: 'Total ahorrado: {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: 'Total ahorrado: {bytes} (creció {grew})', // 'Total Saved: {bytes} (grew by {bytes})'
    downloadAllZip: 'Descargar todo (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'Creando ZIP…', // 'Creating ZIP...'
    metricOriginal: 'Original', // 'Original' (metric label)
    metricOutput: 'Salida', // 'Output' (metric label)
    metricSpaceSaved: 'Espacio ahorrado', // 'Space Saved' (metric label)
    metricReduction: 'Reducción', // 'Reduction' (metric label)
    metricSizeChange: 'Cambio de tamaño', // 'Size Change' (metric label)
    underTarget: 'Menos de {target} ({bytes})', // 'Under {target} ({bytes})'
    targetMissed: 'Objetivo no alcanzado — {bytes}', // 'Target missed — {bytes}'
    compare: 'Comparar', // 'Compare'
    download: 'Descargar', // 'Download'
    removeImage: 'Quitar {name}', // aria-label `Remove ${item.name}`
    grewBy: 'Creció {bytes}: la recodificación es más grande que el original', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: 'WebP o JPG suele ser más pequeño para PNG con aspecto de foto.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: 'Conservar original', // 'Keep original'
    keptOriginalNote: 'Se conservó el archivo original porque la recodificación lo hizo más grande.', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      'Se convirtió automáticamente el PNG sin pérdida a {format} para conservar mayor resolución por debajo de {target}.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP (transparencia conservada)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      'El archivo original ya estaba por debajo de {target}, y la recodificación lo hizo crecer {bytes}. Use «Conservar original» o cambie a WebP/JPG para una salida más pequeña.', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      'El archivo original ya estaba por debajo de {target}; se exportó limpiamente con calidad del {quality} %.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      'Objetivo cumplido con resolución completa de {width}×{height} px ({qualityLabel}).', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      'Objetivo cumplido al escalar a {width}×{height} px ({percent} %) con {qualityLabel}.', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'PNG sin pérdida', // 'lossless PNG'
    qualityPercent: 'calidad del {quality} %', // '{quality}% quality'
    statusCannotPng:
      'No se puede llegar a {target} con PNG sin pérdida (mínimo alcanzable: {bytes} a {width}×{height} px). Cambie el formato de salida a JPG o WebP para llegar a tamaños más pequeños.', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      'No se puede llegar a {target} con las dimensiones completas de {width}×{height} px (el tamaño mínimo de calidad es {bytes}). Active «Permitir escalado de dimensiones» para reducir más las dimensiones.', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      'No se pudo alcanzar limpiamente el objetivo solicitado de {target}. La salida codificada honesta más pequeña es {bytes} ({width}×{height} px, calidad del {quality} %). Pruebe un objetivo mayor.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: 'Compresión objetivo ({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: 'Comprimida ({bytes})', // afterLabel `Compressed ({bytes})`
  },
  '/compress-image-to-200kb': {
    uploadTitle: 'Suelte imágenes para comprimir a menos de {target}', // 'Drop images to compress under {target}'
    errorTargetFailed: 'Error al comprimir al tamaño objetivo.', // 'Target compression failed.'
    errorCorruptedFile: 'Archivo de imagen dañado o ilegible.', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: 'Tamaño máximo de archivo objetivo', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} máx.)', // '({bytes} max)'
    needDifferentTarget: '¿Necesita un objetivo diferente en KB?', // 'Need a different target KB?'
    outputFormat: 'Formato de salida', // 'Output Format'
    formatOriginal: 'Original', // 'Original' — same in Spanish
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WebP' — unchanged
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      'Permitir escalado inteligente de dimensiones si la reducción de calidad por sí sola no cabe en {target}', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      'Convertir automáticamente PNG grandes a WebP/JPG cuando el PNG sin pérdida no puede llegar a {target} limpiamente', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: 'Color mate para PNG transparente:', // 'Transparent PNG matte color:'
    compressToTarget: 'Comprimir a {target}', // 'Compress to {target}'
    optimizing: 'Optimizando…', // 'Optimizing...'
    clear: 'Borrar', // 'Clear'
    losslessPngSelected: 'PNG sin pérdida seleccionado:', // 'Lossless PNG selected:'
    losslessPngWarning:
      'El PNG ignora los deslizadores de calidad, así que reducir el tamaño depende estrictamente de achicar las dimensiones en píxeles. Para fotos grandes, elija JPG o WebP para llegar a límites estrictos en KB manteniendo nitidez.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: 'Resumen de compresión objetivo · Meta ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{achieved} de {total} {images} cumplieron el objetivo de {target}', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: 'imagen', // 'image'
    imagePlural: 'imágenes', // 'images'
    summaryMissed: ' · {missed} no pudieron caber honestamente (detalles abajo)', // ' · {missed} could not honestly fit (details below)'
    totalSaved: 'Total ahorrado: {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: 'Total ahorrado: {bytes} (creció {grew})', // 'Total Saved: {bytes} (grew by {bytes})'
    downloadAllZip: 'Descargar todo (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'Creando ZIP…', // 'Creating ZIP...'
    metricOriginal: 'Original', // 'Original' (metric label)
    metricOutput: 'Salida', // 'Output' (metric label)
    metricSpaceSaved: 'Espacio ahorrado', // 'Space Saved' (metric label)
    metricReduction: 'Reducción', // 'Reduction' (metric label)
    metricSizeChange: 'Cambio de tamaño', // 'Size Change' (metric label)
    underTarget: 'Menos de {target} ({bytes})', // 'Under {target} ({bytes})'
    targetMissed: 'Objetivo no alcanzado — {bytes}', // 'Target missed — {bytes}'
    compare: 'Comparar', // 'Compare'
    download: 'Descargar', // 'Download'
    removeImage: 'Quitar {name}', // aria-label `Remove ${item.name}`
    grewBy: 'Creció {bytes}: la recodificación es más grande que el original', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: 'WebP o JPG suele ser más pequeño para PNG con aspecto de foto.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: 'Conservar original', // 'Keep original'
    keptOriginalNote: 'Se conservó el archivo original porque la recodificación lo hizo más grande.', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      'Se convirtió automáticamente el PNG sin pérdida a {format} para conservar mayor resolución por debajo de {target}.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP (transparencia conservada)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      'El archivo original ya estaba por debajo de {target}, y la recodificación lo hizo crecer {bytes}. Use «Conservar original» o cambie a WebP/JPG para una salida más pequeña.', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      'El archivo original ya estaba por debajo de {target}; se exportó limpiamente con calidad del {quality} %.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      'Objetivo cumplido con resolución completa de {width}×{height} px ({qualityLabel}).', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      'Objetivo cumplido al escalar a {width}×{height} px ({percent} %) con {qualityLabel}.', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'PNG sin pérdida', // 'lossless PNG'
    qualityPercent: 'calidad del {quality} %', // '{quality}% quality'
    statusCannotPng:
      'No se puede llegar a {target} con PNG sin pérdida (mínimo alcanzable: {bytes} a {width}×{height} px). Cambie el formato de salida a JPG o WebP para llegar a tamaños más pequeños.', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      'No se puede llegar a {target} con las dimensiones completas de {width}×{height} px (el tamaño mínimo de calidad es {bytes}). Active «Permitir escalado de dimensiones» para reducir más las dimensiones.', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      'No se pudo alcanzar limpiamente el objetivo solicitado de {target}. La salida codificada honesta más pequeña es {bytes} ({width}×{height} px, calidad del {quality} %). Pruebe un objetivo mayor.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: 'Compresión objetivo ({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: 'Comprimida ({bytes})', // afterLabel `Compressed ({bytes})`
  },
  '/compress-image-to-500kb': {
    uploadTitle: 'Suelte imágenes para comprimir a menos de {target}', // 'Drop images to compress under {target}'
    errorTargetFailed: 'Error al comprimir al tamaño objetivo.', // 'Target compression failed.'
    errorCorruptedFile: 'Archivo de imagen dañado o ilegible.', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: 'Tamaño máximo de archivo objetivo', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} máx.)', // '({bytes} max)'
    needDifferentTarget: '¿Necesita un objetivo diferente en KB?', // 'Need a different target KB?'
    outputFormat: 'Formato de salida', // 'Output Format'
    formatOriginal: 'Original', // 'Original' — same in Spanish
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WebP' — unchanged
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      'Permitir escalado inteligente de dimensiones si la reducción de calidad por sí sola no cabe en {target}', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      'Convertir automáticamente PNG grandes a WebP/JPG cuando el PNG sin pérdida no puede llegar a {target} limpiamente', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: 'Color mate para PNG transparente:', // 'Transparent PNG matte color:'
    compressToTarget: 'Comprimir a {target}', // 'Compress to {target}'
    optimizing: 'Optimizando…', // 'Optimizing...'
    clear: 'Borrar', // 'Clear'
    losslessPngSelected: 'PNG sin pérdida seleccionado:', // 'Lossless PNG selected:'
    losslessPngWarning:
      'El PNG ignora los deslizadores de calidad, así que reducir el tamaño depende estrictamente de achicar las dimensiones en píxeles. Para fotos grandes, elija JPG o WebP para llegar a límites estrictos en KB manteniendo nitidez.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: 'Resumen de compresión objetivo · Meta ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{achieved} de {total} {images} cumplieron el objetivo de {target}', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: 'imagen', // 'image'
    imagePlural: 'imágenes', // 'images'
    summaryMissed: ' · {missed} no pudieron caber honestamente (detalles abajo)', // ' · {missed} could not honestly fit (details below)'
    totalSaved: 'Total ahorrado: {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: 'Total ahorrado: {bytes} (creció {grew})', // 'Total Saved: {bytes} (grew by {bytes})'
    downloadAllZip: 'Descargar todo (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'Creando ZIP…', // 'Creating ZIP...'
    metricOriginal: 'Original', // 'Original' (metric label)
    metricOutput: 'Salida', // 'Output' (metric label)
    metricSpaceSaved: 'Espacio ahorrado', // 'Space Saved' (metric label)
    metricReduction: 'Reducción', // 'Reduction' (metric label)
    metricSizeChange: 'Cambio de tamaño', // 'Size Change' (metric label)
    underTarget: 'Menos de {target} ({bytes})', // 'Under {target} ({bytes})'
    targetMissed: 'Objetivo no alcanzado — {bytes}', // 'Target missed — {bytes}'
    compare: 'Comparar', // 'Compare'
    download: 'Descargar', // 'Download'
    removeImage: 'Quitar {name}', // aria-label `Remove ${item.name}`
    grewBy: 'Creció {bytes}: la recodificación es más grande que el original', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: 'WebP o JPG suele ser más pequeño para PNG con aspecto de foto.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: 'Conservar original', // 'Keep original'
    keptOriginalNote: 'Se conservó el archivo original porque la recodificación lo hizo más grande.', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      'Se convirtió automáticamente el PNG sin pérdida a {format} para conservar mayor resolución por debajo de {target}.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP (transparencia conservada)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      'El archivo original ya estaba por debajo de {target}, y la recodificación lo hizo crecer {bytes}. Use «Conservar original» o cambie a WebP/JPG para una salida más pequeña.', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      'El archivo original ya estaba por debajo de {target}; se exportó limpiamente con calidad del {quality} %.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      'Objetivo cumplido con resolución completa de {width}×{height} px ({qualityLabel}).', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      'Objetivo cumplido al escalar a {width}×{height} px ({percent} %) con {qualityLabel}.', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'PNG sin pérdida', // 'lossless PNG'
    qualityPercent: 'calidad del {quality} %', // '{quality}% quality'
    statusCannotPng:
      'No se puede llegar a {target} con PNG sin pérdida (mínimo alcanzable: {bytes} a {width}×{height} px). Cambie el formato de salida a JPG o WebP para llegar a tamaños más pequeños.', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      'No se puede llegar a {target} con las dimensiones completas de {width}×{height} px (el tamaño mínimo de calidad es {bytes}). Active «Permitir escalado de dimensiones» para reducir más las dimensiones.', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      'No se pudo alcanzar limpiamente el objetivo solicitado de {target}. La salida codificada honesta más pequeña es {bytes} ({width}×{height} px, calidad del {quality} %). Pruebe un objetivo mayor.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: 'Compresión objetivo ({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: 'Comprimida ({bytes})', // afterLabel `Compressed ({bytes})`
  },
  '/bulk-image-compressor': {
    uploadTitle: 'Suelte docenas de imágenes para comprimir en lote', // 'Drop dozens of images for bulk compression'
    errorCompressionFailed: 'Error al comprimir.', // 'Compression failed.'
    errorCorruptedFile: 'Archivo de imagen dañado o ilegible.', // 'Corrupted or unreadable image file.'
    quickBatchProfiles: 'Perfiles rápidos de lote:', // 'Quick Batch Profiles:'
    profileWebFast: 'Web Fast (WebP 75 %)', // 'Web Fast (WebP 75%)'
    profileEmailSharing: 'Correo / Compartir (JPG 65 %)', // 'Email / Sharing (JPG 65%)'
    profileHighFidelity: 'Alta fidelidad (85 %)', // 'High Fidelity (85%)'
    compressingBatch: 'Comprimiendo lote en local…', // 'Compressing batch locally...'
    // Strings rendered by CompressionControls, ResultsList and ComparisonModal
    // come from the shared i18n-es.ts dictionary sections (compressionControls,
    // resultsList, comparisonModal) — already translated in Batch 1.
  },
  '/target-file-size-compressor': {
    uploadTitleTemplate: 'Suelte imágenes para comprimir por debajo de {target}', // `Drop images to compress under ${targetLabel}`
    targetMaxFileSize: 'Tamaño máximo de archivo objetivo', // 'Target Maximum File Size'
    targetNumberAria: 'Número de tamaño de archivo objetivo', // aria-label 'Target file size number'
    maxSuffix: '({size} máx.)', // '({formatBytes(effectiveTargetBytes)} max)'
    needDifferentTarget: '¿Necesita otro objetivo de KB?', // 'Need a different target KB?'
    preset20kb: '20 KB', // '20 KB' — unchanged
    preset50kb: '50 KB', // '50 KB' — unchanged
    preset100kb: '100 KB', // '100 KB' — unchanged
    preset200kb: '200 KB', // '200 KB' — unchanged
    preset500kb: '500 KB', // '500 KB' — unchanged
    preset1mb: '1 MB', // '1 MB' — unchanged
    outputFormat: 'Formato de salida', // 'Output Format'
    formatOriginal: 'Original', // 'Original' — same in Spanish
    formatJpg: 'JPG', // 'JPG' — unchanged
    allowDownscale: 'Permitir la escala inteligente de dimensiones si solo bajar la calidad no alcanza {target}', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {targetLabel}'
    autoSwitchPng: 'Convertir automáticamente PNG grandes a WebP/JPG cuando el PNG sin pérdida no llega a {target} limpiamente', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {targetLabel} cleanly'
    transparentPngMatteColor: 'Color mate para PNG transparente:', // 'Transparent PNG matte color:'
    losslessPngTitle: 'PNG sin pérdida seleccionado:', // 'Lossless PNG selected:'
    losslessPngNote: 'El PNG ignora los deslizadores de calidad, así que reducir el tamaño depende estrictamente de achicar las dimensiones en píxeles. Para fotos grandes, elija JPG o WebP para alcanzar límites estrictos de KB manteniendo la nitidez.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    compressToTarget: 'Comprimir a {target}', // 'Compress to {targetLabel}'
    optimizing: 'Optimizando…', // 'Optimizing...'
    clear: 'Limpiar', // 'Clear'
    targetSummary: 'Resumen de compresión objetivo · Meta ≤ {target}', // 'Target Compression Summary · Goal ≤ {targetLabel}'
    summaryMet: '{achieved} de {total} {images} cumplieron el objetivo de {target}', // '{achievedCount} of {doneItems.length} {image/images} met the {targetLabel} target'
    imageSingular: 'imagen', // 'image'
    imagePlural: 'imágenes', // 'images'
    summaryMissed: '· {missed} no pudieron encajar con honestidad (detalles abajo)', // '· {missed} could not honestly fit (details below)'
    totalSaved: 'Total ahorrado: {saved}', // 'Total Saved: {formatBytes(totalSaved)}'
    totalGrew: '(creció {grew})', // '(grew by {formatBytes(Math.abs(totalSaved))})'
    creatingZip: 'Creando ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Descargar todo (ZIP)', // 'Download All (ZIP)'
    underTarget: 'Por debajo de {target} ({size})', // 'Under {targetLabel} ({formatBytes(compressedSize)})'
    targetMissed: 'Objetivo no alcanzado — {size}', // 'Target missed — {formatBytes(compressedSize)}'
    columnOriginal: 'Original', // 'Original'
    columnOutput: 'Salida', // 'Output'
    columnSpaceSaved: 'Espacio ahorrado', // 'Space Saved'
    columnReduction: 'Reducción', // 'Reduction'
    columnSizeChange: 'Cambio de tamaño', // 'Size Change'
    grewBy: 'Creció {amount}: la recodificación es más grande que el original.', // 'Grew by {amount} — re-encode is larger than the original.'
    grewPngHint: 'WebP o JPG suele ser más pequeño para PNG fotográficos.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: 'Conservar original', // 'Keep original'
    keptOriginalNote: 'Se conservó el archivo original porque la recodificación lo hizo más grande.', // 'Kept original file because re-encoding made it larger.'
    statusAlreadyUnder: 'El archivo original ya estaba por debajo de {target}; se exportó limpiamente con calidad del {quality} %.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull: 'Objetivo alcanzado con resolución completa de {width}×{height} px ({quality}).', // 'Target met at full {width}×{height}px resolution ({quality}% quality / lossless PNG).'
    statusMetScaled: 'Objetivo alcanzado al escalar a {width}×{height} px (escala del {scale} %).', // 'Target met by scaling to {width}×{height}px ({scale}% scale).'
    statusCannotPng: 'No se puede llegar a {target} con PNG sin pérdida (mínimo alcanzable: {size}).', // 'Cannot reach {target} with lossless PNG (smallest achievable: {size}).'
    statusCannotFull: 'No se puede llegar a {target} con dimensiones completas de {width}×{height} px (el tamaño mínimo con calidad es {size}).', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {size}).'
    statusCannotCleanly: 'El objetivo de {target} no se pudo alcanzar limpiamente. La salida codificada honesta más pequeña es {size}.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {size}.'
    switchedFormatNote: 'PNG sin pérdida convertido automáticamente a {format}.', // 'Auto-converted lossless PNG to {format}.'
    errorTargetFailed: 'Error en la compresión objetivo.', // 'Target compression failed.'
    errorCorruptedFile: 'Archivo de imagen dañado o ilegible.', // 'Corrupted or unreadable image file.'
    comparisonTitlePrefix: 'Compresión objetivo ({target})', // `Target Compression (${targetLabel})`
    comparisonAfterLabel: 'Comprimida ({size})', // `Compressed (${formatBytes(compressedSize)})`
    compare: 'Comparar', // 'Compare'
    download: 'Descargar', // 'Download'
    removeImage: 'Eliminar {name}', // aria-label `Remove ${item.name}`
  },
  '/bulk-image-resizer': {
    uploadTitle: 'Suelte varias imágenes para redimensionar en lote', // 'Drop multiple images to bulk resize'
    batchResizeStrategy: 'Estrategia de redimensionado en lote', // 'Batch Resize Strategy'
    strategyBounding: 'Ajuste máximo An × Al', // 'Fit Max W × H'
    strategyWidth: 'Ancho uniforme', // 'Uniform Width'
    strategyExact: 'An × Al exacto', // 'Exact W × H'
    strategyPercentage: 'Porcentaje (%)', // 'Percentage (%)'
    outputFormat: 'Formato de salida', // 'Output Format'
    formatOriginal: 'Original', // 'Original' — same in Spanish
    formatJpg: 'JPG', // 'JPG' — unchanged
    scaleAllImages: 'Escalar todas las imágenes:', // 'Scale All Images:'
    maxWidth: 'Ancho máx. (px)', // 'Max Width (px)'
    targetWidth: 'Ancho objetivo (px)', // 'Target Width (px)'
    exactWidth: 'Ancho exacto (px)', // 'Exact Width (px)'
    maxHeight: 'Alto máx. (px)', // 'Max Height (px)'
    exactHeight: 'Alto exacto (px)', // 'Exact Height (px)'
    doNotEnlarge: 'No ampliar imágenes más pequeñas', // 'Do not enlarge smaller images'
    fitMode: 'Modo de ajuste', // 'Fit Mode'
    fitContain: 'Contener', // 'Contain'
    fitCover: 'Cubrir', // 'Cover'
    fitStretch: 'Estirar', // 'Stretch'
    presetFullHd: 'Full HD 1920px', // 'Full HD 1920px' — unchanged
    presetBlog: 'Blog 1200px', // 'Blog 1200px' — unchanged
    presetEcommerce: 'Comercio electrónico 1000×1000', // 'E-commerce 1000×1000'
    presetThumbnail: 'Miniatura 600px', // 'Thumbnail 600px'
    quality: 'Calidad:', // 'Quality:'
    matteBg: 'Fondo mate:', // 'Matte BG:'
    resizingProgress: 'Redimensionando ({processed}/{total})…', // 'Resizing ({processedCount}/{totalCount})...'
    bulkResize: 'Redimensionar en lote ({count})', // 'Bulk Resize ({items.length})'
    clear: 'Limpiar', // 'Clear'
    bulkResizeComplete: 'Redimensionado en lote completo', // 'Bulk Resize Complete'
    imagesResizedReadySingular: '{count} imagen redimensionada y lista', // '{count} image resized and ready'
    imagesResizedReadyPlural: '{count} imágenes redimensionadas y listas', // '{count} images resized and ready'
    creatingZip: 'Creando ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Descargar todo (ZIP)', // 'Download All (ZIP)'
    errorResizeFailed: 'Error en el redimensionado en lote.', // 'Batch resize failed.'
    errorCorruptedFile: 'Archivo de imagen dañado o ilegible.', // 'Corrupted or unreadable image file.'
    comparisonTitlePrefix: 'Comparación de redimensionado en lote', // 'Bulk Resize Comparison'
    comparisonAfterLabel: 'Redimensionada (después)', // 'Resized (After)'
    compare: 'Comparar', // 'Compare'
    download: 'Descargar', // 'Download'
    removeImage: 'Eliminar {name}', // aria-label `Remove ${item.name}`
  },
  '/bulk-image-converter': {
    uploadTitle: 'Suelte varias imágenes para convertir formatos en lote', // 'Drop multiple images to bulk convert formats'
    convertBatchToFormat: 'Convertir lote a formato', // 'Convert Batch To Format'
    formatWebp: 'WebP (el más ligero para web)', // 'WebP (Smallest Web)'
    formatJpg: 'JPG (universal)', // 'JPG (Universal)'
    formatPng: 'PNG (sin pérdida y con transparencia)', // 'PNG (Lossless Alpha)'
    optionalFilenameSuffix: 'Sufijo de nombre de archivo opcional', // 'Optional Filename Suffix'
    placeholderSuffix: 'p. ej. _web', // placeholder 'e.g. _web'
    transparentFill: 'Relleno transparente', // 'Transparent Fill'
    qualityLosslessPng: 'Calidad (PNG sin pérdida)', // 'Quality (Lossless PNG)'
    qualityPercent: 'Calidad ({quality} %)', // 'Quality ({quality}%)'
    convertingProgress: 'Convirtiendo ({processed}/{total})…', // 'Converting ({processedCount}/{totalCount})...'
    convertAll: 'Convertir todo ({count})', // 'Convert All ({items.length})'
    clear: 'Limpiar', // 'Clear'
    bulkConversionSummary: 'Resumen de conversión en lote', // 'Bulk Conversion Summary'
    filesConvertedSummary: '{count} archivos convertidos a {format} · {original} → {converted}', // '{count} files converted to {format} · {totalOrig} → {totalOut}'
    creatingZip: 'Creando ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Descargar todo (ZIP)', // 'Download All (ZIP)'
    convertedTo: 'Convertido a {ext}', // 'Converted to {ext}'
    errorConversionFailed: 'Error en la conversión en lote.', // 'Batch conversion failed.'
    errorUnsupportedFile: 'Archivo de imagen no compatible o dañado.', // 'Unsupported or corrupted image file.'
    comparisonTitlePrefix: 'Conversión de formato en lote', // 'Bulk Format Conversion'
    comparisonAfterLabel: 'Convertida (después)', // 'Converted (After)'
    compare: 'Comparar', // 'Compare'
    download: 'Descargar', // 'Download'
    removeImage: 'Eliminar {name}', // aria-label `Remove ${item.name}`
  },
  '/web-image-optimizer': {
    uploadTitle: 'Suelte recursos web para optimizarlos para Core Web Vitals', // 'Drop website assets to optimize for Core Web Vitals'
    webPerformancePresets: 'Plantillas de rendimiento web', // 'Web Performance Presets'
    presetHero: 'Encabezado / Banner', // 'Hero / Banner'
    presetHeroDesc: 'Máx. 1600 px · WebP 80 %', // 'Max 1600px · WebP 80%'
    presetProduct: 'Producto de comercio electrónico', // 'E-Commerce Product'
    presetProductDesc: 'Máx. 1200 px · WebP 82 %', // 'Max 1200px · WebP 82%'
    presetThumb: 'Tarjeta / Miniatura', // 'Card / Thumbnail'
    presetThumbDesc: 'Máx. 640 px · WebP 75 %', // 'Max 640px · WebP 75%'
    presetOg: 'OG social / Correo', // 'Social OG / Email'
    presetOgDesc: 'Máx. 1200 px · JPG 82 %', // 'Max 1200px · JPG 82%'
    presetRetina: 'Gráfico Retina 2×', // 'Retina 2× Graphic'
    presetRetinaDesc: 'Máx. 1920 px · WebP 88 %', // 'Max 1920px · WebP 88%'
    webFormat: 'Formato web', // 'Web Format'
    maxDimension: 'Dimensión máxima (borde largo)', // 'Max Dimension (Long Edge)'
    keepOriginalDimensions: 'Conservar dimensiones originales', // 'Keep Original Dimensions'
    max1920: 'Máx. 1920 px (Retina / Full HD)', // 'Max 1920px (Retina / Full HD)'
    max1600: 'Máx. 1600 px (Encabezado / Banner)', // 'Max 1600px (Hero / Banner)'
    max1200: 'Máx. 1200 px (Blog / Producto)', // 'Max 1200px (Blog / Product)'
    max800: 'Máx. 800 px (dentro del contenido)', // 'Max 800px (In-Content)'
    max640: 'Máx. 640 px (miniaturas)', // 'Max 640px (Thumbnails)'
    quality: 'Calidad:', // 'Quality:'
    onlyDownscale: 'Solo reducir imágenes más grandes (los metadatos EXIF y GPS se eliminan automáticamente)', // 'Only downscale larger images (EXIF & GPS metadata automatically stripped)'
    optimizing: 'Optimizando…', // 'Optimizing...'
    optimizeForWeb: 'Optimizar para web ({count})', // 'Optimize for Web ({items.length})'
    clear: 'Limpiar', // 'Clear'
    webPerformanceSummary: 'Resumen de rendimiento web', // 'Web Performance Summary'
    pageWeightSaved: '({percent} % más ligero · {saved} de peso de página ahorrado)', // '({totalPct}% lighter · {formatBytes(totalSaved)} page weight saved)'
    pageWeightGrew: '(+{percent} % · creció {amount})', // '(+{totalPct}% · grew by {formatBytes})'
    creatingZip: 'Creando ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Descargar todo (ZIP)', // 'Download All (ZIP)'
    webReady: 'Listo para web ({percent})', // 'Web-Ready ({formatPercent})'
    grewBy: 'Creció {amount} ({percent})', // 'Grew by {amount} ({formatPercent})'
    copyImg: 'Copiar <img>', // 'Copy <img>'
    copiedHtml: 'HTML copiado', // 'Copied HTML'
    copyImgTitle: 'Copiar etiqueta HTML img responsiva con ancho y alto explícitos', // title 'Copy responsive HTML img tag with explicit width and height'
    errorOptimizationFailed: 'Error en la optimización web.', // 'Web optimization failed.'
    errorCorruptedFile: 'Imagen dañada o no compatible.', // 'Corrupted or unsupported image.'
    comparisonTitlePrefix: 'Comparación de optimización web', // 'Web Optimization Comparison'
    comparisonAfterLabel: 'Lista para web (después)', // 'Web-Ready (After)'
    compare: 'Comparar', // 'Compare'
    download: 'Descargar', // 'Download'
    removeImage: 'Eliminar {name}', // aria-label `Remove ${item.name}`
  },
  '/gif-compressor': {
    uploadTitle: 'Suelte un GIF animado para comprimirlo', // 'Drop an animated GIF to compress'
    decodingGif: 'Decodificando fotogramas de GIF animado en local en su navegador…', // 'Decoding animated GIF frames locally in your browser...'
    frameSingular: 'fotograma', // 'frame'
    framePlural: 'fotogramas', // 'frames'
    presetLight: 'Ligero', // 'Light'
    presetBalanced: 'Equilibrado', // 'Balanced'
    presetMaxShrink: 'Máxima reducción', // 'Max Shrink'
    colorPaletteLimit: 'Límite de colores de paleta', // 'Color Palette Limit'
    colorsCount: '{count} colores', // '{maxColors} colors'
    outputScale: 'Escala de salida', // 'Output Scale'
    scaleWithDims: '{percent} % ({width}×{height})', // '{scalePercent}% ({targetOutW}×{targetOutH})'
    frameRateOptimization: 'Optimización de velocidad de fotogramas', // 'Frame Rate Optimization'
    keepAllFrames: 'Conservar todos los fotogramas', // 'Keep All Frames'
    dropEvery2nd: 'Eliminar cada 2.º fotograma (~50 % más pequeño)', // 'Drop Every 2nd Frame (~50% smaller)'
    keep1of3: 'Conservar 1 de cada 3 fotogramas', // 'Keep 1 of Every 3 Frames'
    compressingGif: 'Comprimiendo GIF ({progress} %)…', // 'Compressing GIF ({encodeProgress}%)...'
    compressGif: 'Comprimir GIF', // 'Compress GIF'
    reset: 'Restablecer', // 'Reset'
    originalGif: 'GIF original', // 'Original GIF'
    compressedGif: 'GIF comprimido', // 'Compressed GIF'
    sizeChange: 'Cambio de tamaño', // 'Size Change'
    sizeAndFrames: '{size} · {frames}f', // '{formatBytes(size)} · {frames}f'
    downloadCompressedGif: 'Descargar GIF comprimido', // 'Download Compressed GIF'
    notSmallerNotice: 'Este GIF original ya estaba muy optimizado o usa una paleta de fotograma completo más grande que la entrada. Para achicarlo por debajo de {size}, reduzca el color de paleta a 32–64 colores, baje la escala de salida al 75 % o 50 %, o elimine cada 2.º fotograma.', // 'This source GIF was already heavily optimized or uses a full-frame palette larger than the input. To shrink it below {size}, reduce Color Palette to 32–64 colors, lower Output Scale to 75% or 50%, or drop every 2nd frame.'
    compressedByNotice: 'Comprimido un {percent} % ({saved} ahorrados) limpiamente en su navegador.', // 'Compressed by {percent}% ({saved} saved) cleanly in your browser.'
    originalLabel: 'Original ({width}×{height} px)', // 'Original ({width}×{height}px)'
    compressedLabel: 'Comprimido ({width}×{height} px)', // 'Compressed ({width}×{height}px)'
    altOriginalGif: 'GIF original', // alt 'Original GIF'
    altCompressedGif: 'GIF comprimido', // alt 'Compressed GIF'
    errorGifFailed: 'Error en la compresión de GIF.', // 'GIF compression failed.'
    errorDecodeFrames: 'No se pudieron decodificar los fotogramas del GIF.', // 'Could not decode GIF frames.'
    errorTooSmall: 'El archivo es demasiado pequeño para ser un GIF válido.', // 'File is too small to be a valid GIF.'
    errorNotValidGif: 'El archivo seleccionado no es una animación GIF87a o GIF89a válida.', // 'Selected file is not a valid GIF87a or GIF89a animation.'
    errorInvalidDims: 'El GIF tiene dimensiones de lienzo 0×0 no válidas.', // 'GIF has invalid 0x0 canvas dimensions.'
    errorTruncatedColorTable: 'Tabla de colores global del GIF truncada.', // 'Truncated GIF Global Color Table.'
    errorNoFrames: 'No se pudo decodificar ningún fotograma de imagen de este archivo GIF.', // 'Could not decode any image frames from this GIF file.'
    errorCanvasContext: 'No se pudo inicializar el contexto de lienzo 2D.', // 'Unable to initialize 2D canvas context.'
  },
  '/heic-to-jpg': {
    uploadTitle: 'Suelte fotos HEIC o HEIF de iPhone para convertirlas a JPG', // 'Drop iPhone HEIC or HEIF photos to convert to JPG'
    notice: 'Decodifica fotos HEIC y HEIF de Apple en local dentro de su navegador con WebAssembly del lado del cliente (heic2any): sus fotos nunca salen de su dispositivo.', // 'Decodes Apple HEIC and HEIF photos locally inside your browser using client-side WebAssembly (heic2any) — your photos never leave your device.'
    conversionPipeline: 'Flujo de conversión:', // 'Conversion Pipeline:'
    outputQuality: 'Calidad de salida JPG', // 'JPG Output Quality'
    smallerFile: 'Archivo más pequeño (20 %)', // 'Smaller file (20%)'
    balanced: 'Equilibrado (85 %)', // 'Balanced (85%)'
    maxDetail: 'Máximo detalle (100 %)', // 'Max detail (100%)'
    reconvertAll: 'Volver a convertir todo', // 'Re-convert All'
    converting: 'Convirtiendo…', // 'Converting...'
    clear: 'Limpiar', // 'Clear'
    batchSummary: 'Resumen de lote de HEIC → JPG', // 'HEIC → JPG Batch Summary'
    filesConverted: '{count} {files} convertidos · {original} → {converted}', // '{count} {file/files} converted · {totalOrig} → {totalOut}'
    fileSingular: 'archivo', // 'file'
    filePlural: 'archivos', // 'files'
    creatingZip: 'Creando ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Descargar todo (ZIP)', // 'Download All (ZIP)'
    columnChange: 'Cambio', // 'Change'
    compare: 'Comparar', // 'Compare'
    downloadTarget: 'Descargar JPG', // 'Download JPG'
    removeImage: 'Eliminar {name}', // aria-label `Remove ${item.name}`
    errorDecodeHint: 'No se pudo decodificar este archivo HEIC/HEIF. Asegúrese de que sea una foto HEIC válida de iPhone o Apple.', // 'Could not decode this HEIC/HEIF file. Ensure it is a valid iPhone/Apple HEIC photo.'
    errorDecodeFile: 'No se pudo decodificar "{filename}". Verifique que sea una imagen HEIC válida.', // 'Could not decode "{filename}". Verify it is a valid HEIC image.'
    errorConvertFailed: 'No se pudo convertir {name} a JPG.', // `Failed to convert ${item.name} to JPG.`
    comparisonTitlePrefix: 'HEIC → JPG', // `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // `${targetLabel} (${formatBytes(compressedSize)})`
  },
  '/jpg-to-png': {
    uploadTitle: 'Suelte imágenes JPG o JPEG para convertirlas a PNG sin pérdida', // 'Drop JPG or JPEG images to convert to lossless PNG'
    conversionPipeline: 'Flujo de conversión:', // 'Conversion Pipeline:'
    losslessPngOutput: 'Salida PNG sin pérdida', // 'Lossless PNG Output'
    losslessPngEncoding: 'Codificación PNG sin pérdida', // 'Lossless PNG Encoding'
    losslessPngNote: 'El PNG preserva los bordes nítidos, el texto y la transparencia alfa sin artefactos de compresión con pérdida.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    reconvertAll: 'Volver a convertir todo', // 'Re-convert All'
    converting: 'Convirtiendo…', // 'Converting...'
    clear: 'Limpiar', // 'Clear'
    batchSummary: 'Resumen de lote de JPG → PNG', // 'JPG → PNG Batch Summary'
    filesConverted: '{count} {files} convertidos · {original} → {converted}', // '{count} {file/files} converted · {totalOrig} → {totalOut}'
    fileSingular: 'archivo', // 'file'
    filePlural: 'archivos', // 'files'
    creatingZip: 'Creando ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Descargar todo (ZIP)', // 'Download All (ZIP)'
    columnChange: 'Cambio', // 'Change'
    compare: 'Comparar', // 'Compare'
    downloadTarget: 'Descargar PNG', // 'Download PNG'
    removeImage: 'Eliminar {name}', // aria-label `Remove ${item.name}`
    errorDecodeFile: 'No se pudo decodificar "{filename}". Verifique que sea una imagen JPG válida.', // 'Could not decode "{filename}". Verify it is a valid JPG image.'
    errorConvertFailed: 'No se pudo convertir {name} a PNG.', // `Failed to convert ${item.name} to PNG.`
    comparisonTitlePrefix: 'JPG → PNG', // `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'PNG ({size})', // `${targetLabel} (${formatBytes(compressedSize)})`
  },
  '/png-to-jpg': {
    uploadTitle: 'Suelte archivos PNG para convertirlos a JPG más pequeños', // 'Drop PNG files to convert to smaller JPG'
    conversionPipeline: 'Flujo de conversión:', // 'Conversion Pipeline:'
    outputQuality: 'Calidad de salida JPG', // 'JPG Output Quality'
    smallerFile: 'Archivo más pequeño (20 %)', // 'Smaller file (20%)'
    balanced: 'Equilibrado (85 %)', // 'Balanced (85%)'
    maxDetail: 'Máximo detalle (100 %)', // 'Max detail (100%)'
    transparentMatteColor: 'Color mate para fondo transparente', // 'Transparent Background Matte Color'
    matteWhite: 'Blanco', // 'White'
    matteBlack: 'Negro', // 'Black'
    matteLightGray: 'Gris claro', // 'Light Gray'
    matteNote: 'El JPG no admite transparencia; las zonas transparentes se rellenan limpiamente con este color.', // 'JPG does not support transparency; transparent areas fill cleanly with this color.'
    reconvertAll: 'Volver a convertir todo', // 'Re-convert All'
    converting: 'Convirtiendo…', // 'Converting...'
    clear: 'Limpiar', // 'Clear'
    batchSummary: 'Resumen de lote de PNG → JPG', // 'PNG → JPG Batch Summary'
    filesConverted: '{count} {files} convertidos · {original} → {converted}', // '{count} {file/files} converted · {totalOrig} → {totalOut}'
    fileSingular: 'archivo', // 'file'
    filePlural: 'archivos', // 'files'
    creatingZip: 'Creando ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Descargar todo (ZIP)', // 'Download All (ZIP)'
    columnChange: 'Cambio', // 'Change'
    compare: 'Comparar', // 'Compare'
    downloadTarget: 'Descargar JPG', // 'Download JPG'
    removeImage: 'Eliminar {name}', // aria-label `Remove ${item.name}`
    errorDecodeFile: 'No se pudo decodificar "{filename}". Verifique que sea una imagen PNG válida.', // 'Could not decode "{filename}". Verify it is a valid PNG image.'
    errorConvertFailed: 'No se pudo convertir {name} a JPG.', // `Failed to convert ${item.name} to JPG.`
    comparisonTitlePrefix: 'PNG → JPG', // `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // `${targetLabel} (${formatBytes(compressedSize)})`
  },
  '/jpg-to-webp': {
    uploadTitle: 'Suelte imágenes JPG para convertirlas a WebP ligero', // 'Drop JPG images to convert to lightweight WebP'
    conversionPipeline: 'Flujo de conversión:', // 'Conversion Pipeline:'
    outputQualityLabel: 'Calidad de salida WebP', // 'WebP Output Quality'
    qualityAriaLabel: 'calidad de salida WebP', // aria-label 'WebP output quality'
    smallerFile: 'Archivo más pequeño (20 %)', // 'Smaller file (20%)'
    balanced: 'Equilibrado (85 %)', // 'Balanced (85%)'
    maxDetail: 'Máximo detalle (100 %)', // 'Max detail (100%)'
    batchSummary: 'Resumen del lote {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'archivo', // 'file'
    filePlural: 'archivos', // 'files'
    filesConvertedSuffix: 'convertidos', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'Creando ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Descargar todo (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Cambio', // 'Change'
    compare: 'Comparar', // 'Compare'
    downloadTarget: 'Descargar WebP', // 'Download WebP'
    removeImage: 'Eliminar {name}', // aria-label `Remove ${item.name}`
    converting: 'Convirtiendo…', // 'Converting...'
    reconvertAll: 'Volver a convertir todo', // 'Re-convert All'
    clear: 'Limpiar', // 'Clear'
    comparisonTitlePrefix: 'JPG → WebP', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'WebP ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: 'No se pudo convertir {name} a WebP.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'No se pudo decodificar "{name}". Verifique que sea una imagen JPG válida.', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/webp-to-jpg': {
    uploadTitle: 'Suelte imágenes WebP para convertirlas a JPG universal', // 'Drop WebP images to convert to universal JPG'
    conversionPipeline: 'Flujo de conversión:', // 'Conversion Pipeline:'
    outputQualityLabel: 'Calidad de salida JPG', // 'JPG Output Quality'
    qualityAriaLabel: 'calidad de salida JPG', // aria-label 'JPG output quality'
    smallerFile: 'Archivo más pequeño (20 %)', // 'Smaller file (20%)'
    balanced: 'Equilibrado (85 %)', // 'Balanced (85%)'
    maxDetail: 'Máximo detalle (100 %)', // 'Max detail (100%)'
    matteColorLabel: 'Color mate de fondo transparente', // 'Transparent Background Matte Color'
    matteAriaLabel: 'Color mate de fondo', // aria-label 'Matte background color'
    matteWhite: 'Blanco', // 'White'
    matteBlack: 'Negro', // 'Black'
    matteLightGray: 'Gris claro', // 'Light Gray'
    matteHint: 'JPG no admite transparencia; las zonas transparentes se rellenan con limpieza con este color.', // 'JPG does not support transparency; transparent areas fill cleanly with this color.'
    batchSummary: 'Resumen del lote {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'archivo', // 'file'
    filePlural: 'archivos', // 'files'
    filesConvertedSuffix: 'convertidos', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'Creando ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Descargar todo (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Cambio', // 'Change'
    compare: 'Comparar', // 'Compare'
    downloadTarget: 'Descargar JPG', // 'Download JPG'
    removeImage: 'Eliminar {name}', // aria-label `Remove ${item.name}`
    converting: 'Convirtiendo…', // 'Converting...'
    reconvertAll: 'Volver a convertir todo', // 'Re-convert All'
    clear: 'Limpiar', // 'Clear'
    comparisonTitlePrefix: 'WebP → JPG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: 'No se pudo convertir {name} a JPG.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'No se pudo decodificar "{name}". Verifique que sea una imagen WebP válida.', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/png-to-webp': {
    uploadTitle: 'Suelte archivos PNG para convertirlos a WebP transparente', // 'Drop PNG files to convert to transparent WebP'
    conversionPipeline: 'Flujo de conversión:', // 'Conversion Pipeline:'
    outputQualityLabel: 'Calidad de salida WebP', // 'WebP Output Quality'
    qualityAriaLabel: 'calidad de salida WebP', // aria-label 'WebP output quality'
    smallerFile: 'Archivo más pequeño (20 %)', // 'Smaller file (20%)'
    balanced: 'Equilibrado (85 %)', // 'Balanced (85%)'
    maxDetail: 'Máximo detalle (100 %)', // 'Max detail (100%)'
    batchSummary: 'Resumen del lote {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'archivo', // 'file'
    filePlural: 'archivos', // 'files'
    filesConvertedSuffix: 'convertidos', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'Creando ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Descargar todo (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Cambio', // 'Change'
    compare: 'Comparar', // 'Compare'
    downloadTarget: 'Descargar WebP', // 'Download WebP'
    removeImage: 'Eliminar {name}', // aria-label `Remove ${item.name}`
    converting: 'Convirtiendo…', // 'Converting...'
    reconvertAll: 'Volver a convertir todo', // 'Re-convert All'
    clear: 'Limpiar', // 'Clear'
    comparisonTitlePrefix: 'PNG → WebP', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'WebP ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: 'No se pudo convertir {name} a WebP.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'No se pudo decodificar "{name}". Verifique que sea una imagen PNG válida.', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/webp-to-png': {
    uploadTitle: 'Suelte archivos WebP para convertirlos a PNG sin pérdida', // 'Drop WebP files to convert to lossless PNG'
    conversionPipeline: 'Flujo de conversión:', // 'Conversion Pipeline:'
    losslessPngOutput: 'Salida PNG sin pérdida', // 'Lossless PNG Output'
    losslessPngEncodingTitle: 'Codificación PNG sin pérdida', // 'Lossless PNG Encoding'
    losslessPngEncodingDesc: 'PNG conserva bordes nítidos, texto y transparencia alfa sin artefactos de compresión con pérdida.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    batchSummary: 'Resumen del lote {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'archivo', // 'file'
    filePlural: 'archivos', // 'files'
    filesConvertedSuffix: 'convertidos', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'Creando ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Descargar todo (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Cambio', // 'Change'
    compare: 'Comparar', // 'Compare'
    downloadTarget: 'Descargar PNG', // 'Download PNG'
    removeImage: 'Eliminar {name}', // aria-label `Remove ${item.name}`
    converting: 'Convirtiendo…', // 'Converting...'
    reconvertAll: 'Volver a convertir todo', // 'Re-convert All'
    clear: 'Limpiar', // 'Clear'
    comparisonTitlePrefix: 'WebP → PNG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'PNG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: 'No se pudo convertir {name} a PNG.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'No se pudo decodificar "{name}". Verifique que sea una imagen WebP válida.', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/svg-to-png': {
    uploadTitle: 'Suelte archivos vectoriales SVG para rasterizarlos a PNG', // 'Drop SVG vector files to rasterize to PNG'
    notice:
      'Rasteriza gráficos SVG integrados en local con HTML5 Canvas y conserva los fondos transparentes. Limitación: las URL de <image> externas, las hojas de estilo CSS externas o las fuentes web, o los scripts referenciados dentro de un SVG pueden no representarse en la exportación independiente de Canvas.', // 'Rasterizes inline SVG graphics locally via HTML5 Canvas with transparent backgrounds preserved. Limitation: external <image> URLs, external CSS stylesheets/webfonts, or scripts referenced inside an SVG may not render in standalone Canvas export.'
    conversionPipeline: 'Flujo de conversión:', // 'Conversion Pipeline:'
    losslessPngOutput: 'Salida PNG sin pérdida', // 'Lossless PNG Output'
    losslessPngEncodingTitle: 'Codificación PNG sin pérdida', // 'Lossless PNG Encoding'
    losslessPngEncodingDesc: 'PNG conserva bordes nítidos, texto y transparencia alfa sin artefactos de compresión con pérdida.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    rasterExportScale: 'Escala de exportación de rasterización', // 'Raster Export Scale'
    rasterExportScaleHint: 'Multiplicador aplicado a las dimensiones intrínsecas del SVG (límite de 8000 px). Pulse Volver a convertir todo después de cambiar la escala.', // 'Multiplier applied to the SVG's intrinsic dimensions (capped at 8000px). Click Re-convert All after changing scale.'
    batchSummary: 'Resumen del lote {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'archivo', // 'file'
    filePlural: 'archivos', // 'files'
    filesConvertedSuffix: 'convertidos', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'Creando ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Descargar todo (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Cambio', // 'Change'
    compare: 'Comparar', // 'Compare'
    downloadTarget: 'Descargar PNG', // 'Download PNG'
    removeImage: 'Eliminar {name}', // aria-label `Remove ${item.name}`
    converting: 'Convirtiendo…', // 'Converting...'
    reconvertAll: 'Volver a convertir todo', // 'Re-convert All'
    clear: 'Limpiar', // 'Clear'
    comparisonTitlePrefix: 'SVG → PNG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'PNG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: 'No se pudo convertir {name} a PNG.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'No se pudo rasterizar este SVG. Asegúrese de que el archivo sea marcado SVG XML válido sin errores de sintaxis.', // decodeErrorHint 'Could not rasterize this SVG. Ensure the file is valid XML SVG markup without malformed syntax.'
  },
  '/avif-to-jpg': {
    uploadTitle: 'Suelte imágenes AVIF para convertirlas a JPG universal', // 'Drop AVIF images to convert to universal JPG'
    notice:
      'Decodifica imágenes AVIF en local con el decodificador AVIF nativo de su navegador (compatible con Chrome, Edge, Firefox y Safari modernos) y exporta archivos JPG estándar.', // 'Decodes AVIF images locally using your browser’s native AVIF decoder (supported in modern Chrome, Edge, Firefox, and Safari) and exports standard JPG files.'
    conversionPipeline: 'Flujo de conversión:', // 'Conversion Pipeline:'
    outputQualityLabel: 'Calidad de salida JPG', // 'JPG Output Quality'
    qualityAriaLabel: 'calidad de salida JPG', // aria-label 'JPG output quality'
    smallerFile: 'Archivo más pequeño (20 %)', // 'Smaller file (20%)'
    balanced: 'Equilibrado (85 %)', // 'Balanced (85%)'
    maxDetail: 'Máximo detalle (100 %)', // 'Max detail (100%)'
    matteColorLabel: 'Color mate de fondo transparente', // 'Transparent Background Matte Color'
    matteAriaLabel: 'Color mate de fondo', // aria-label 'Matte background color'
    matteWhite: 'Blanco', // 'White'
    matteBlack: 'Negro', // 'Black'
    matteLightGray: 'Gris claro', // 'Light Gray'
    matteHint: 'JPG no admite transparencia; las zonas transparentes se rellenan con limpieza con este color.', // 'JPG does not support transparency; transparent areas fill cleanly with this color.'
    batchSummary: 'Resumen del lote {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'archivo', // 'file'
    filePlural: 'archivos', // 'files'
    filesConvertedSuffix: 'convertidos', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'Creando ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Descargar todo (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Cambio', // 'Change'
    compare: 'Comparar', // 'Compare'
    downloadTarget: 'Descargar JPG', // 'Download JPG'
    removeImage: 'Eliminar {name}', // aria-label `Remove ${item.name}`
    converting: 'Convirtiendo…', // 'Converting...'
    reconvertAll: 'Volver a convertir todo', // 'Re-convert All'
    clear: 'Limpiar', // 'Clear'
    comparisonTitlePrefix: 'AVIF → JPG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: 'No se pudo convertir {name} a JPG.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'Su navegador no pudo decodificar esta imagen AVIF. Verifique que el archivo sea una imagen .avif válida y pruebe con un navegador moderno Chrome, Firefox, Edge o Safari.', // decodeErrorHint 'Your browser could not decode this AVIF image. Verify the file is a valid .avif image and try a modern Chrome, Firefox, Edge, or Safari browser.'
  },
  '/bmp-to-jpg': {
    uploadTitle: 'Suelte mapas de bits BMP sin comprimir para convertirlos a JPG compacto', // 'Drop uncompressed BMP bitmaps to convert to compact JPG'
    conversionPipeline: 'Flujo de conversión:', // 'Conversion Pipeline:'
    outputQualityLabel: 'Calidad de salida JPG', // 'JPG Output Quality'
    qualityAriaLabel: 'calidad de salida JPG', // aria-label 'JPG output quality'
    smallerFile: 'Archivo más pequeño (20 %)', // 'Smaller file (20%)'
    balanced: 'Equilibrado (85 %)', // 'Balanced (85%)'
    maxDetail: 'Máximo detalle (100 %)', // 'Max detail (100%)'
    batchSummary: 'Resumen del lote {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'archivo', // 'file'
    filePlural: 'archivos', // 'files'
    filesConvertedSuffix: 'convertidos', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'Creando ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Descargar todo (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Cambio', // 'Change'
    compare: 'Comparar', // 'Compare'
    downloadTarget: 'Descargar JPG', // 'Download JPG'
    removeImage: 'Eliminar {name}', // aria-label `Remove ${item.name}`
    converting: 'Convirtiendo…', // 'Converting...'
    reconvertAll: 'Volver a convertir todo', // 'Re-convert All'
    clear: 'Limpiar', // 'Clear'
    comparisonTitlePrefix: 'BMP → JPG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: 'No se pudo convertir {name} a JPG.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'No se pudo decodificar "{name}". Verifique que sea una imagen BMP válida.', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/remove-background': {
    uploadTitle: 'Suelte una foto para eliminar su fondo con IA', // 'Drop a photo to remove its background with AI'
    modelLoadingTitle: 'Cargando modelo de IA en el navegador (isnet_quint8)', // 'Loading in-browser AI model (isnet_quint8)'
    modelCache: 'Caché del modelo', // 'Model Cache'
    progressWasm: 'Cargando el motor de IA WebAssembly…', // 'Loading WebAssembly AI runtime...'
    progressModel: 'Descargando el modelo de IA para eliminar fondos (~35 MB, guardado en caché para uso futuro)…', // 'Downloading AI background removal model (~35 MB, cached for future use)...'
    progressCompute: 'Eliminando el fondo en local en su navegador…', // 'Removing background locally in your browser...'
    progressPreparing: 'Preparando el modelo de IA en el navegador…', // 'Preparing in-browser AI model...'
    progressInitLibrary: 'Cargando la biblioteca de IA para eliminar fondos…', // 'Loading AI background removal library...'
    progressInitModule: 'Inicializando el módulo de IA para eliminar fondos…', // 'Initializing AI background removal module...'
    errorModelInit: 'No se pudo inicializar el modelo de IA para fondos: {message}', // `Could not initialize the AI background model: ${err.message}`
    errorModelInitGeneric: 'No se pudo inicializar el modelo de IA para fondos en este navegador.', // 'Could not initialize the AI background model in this browser.'
    errorDecodeOutput: 'No se pudo decodificar la salida PNG transparente.', // 'Failed to decode transparent PNG output.'
    errorRemovalFailed: 'La eliminación de fondo falló en este navegador. Pruebe otra imagen o recargue la página.', // 'Background removal failed in this browser. Try another image or reload.'
    beforeAfterPreview: 'Vista previa de antes y después', // 'Before & After Preview'
    splitCompare: 'Comparación dividida', // 'Split Compare'
    newImage: 'Nueva imagen', // 'New Image'
    originalLabel: 'Original', // 'Original'
    transparentCutout: 'Recorte transparente (PNG)', // 'Transparent Cutout (PNG)'
    solidBackgroundPreview: 'Vista previa de fondo sólido', // 'Solid Background Preview'
    waitingForResult: 'Esperando el resultado…', // 'Waiting for result...'
    processingLocally: 'Procesando en local…', // 'Processing locally...'
    cutoutStatus: 'Estado del recorte', // 'Cutout Status'
    ready: 'Listo', // 'Ready'
    backgroundFillOption: 'Opción de relleno de fondo', // 'Background Fill Option'
    bgTransparent: 'Transparente', // 'Transparent'
    bgWhite: 'Blanco', // 'White'
    bgBlack: 'Negro', // 'Black'
    bgCustom: 'Personalizado', // 'Custom'
    customBackgroundColor: 'Color de fondo personalizado', // 'Custom Background Color'
    downloadTransparentPng: 'Descargar PNG transparente', // 'Download Transparent PNG'
    downloadWithWhite: 'Descargar con fondo blanco', // 'Download with White Background'
    downloadWithBlack: 'Descargar con fondo negro', // 'Download with Black Background'
    downloadWithCustom: 'Descargar con fondo {color}', // 'Download with {color} Background'
    rerunRemoval: 'Volver a ejecutar la eliminación', // 'Re-run Removal'
    comparisonTitlePrefix: 'Comparación de eliminación de fondo', // 'Background Removal Comparison'
    comparisonAfterTransparent: 'Recorte (PNG transparente)', // 'Cutout (Transparent PNG)'
    comparisonAfterSolid: 'Recorte (fondo sólido)', // 'Cutout (Solid BG)'
    altOriginal: 'Original {name}', // alt `Original ${sourceFile.name}`
    altCutout: 'Fondo eliminado {name}', // alt `Background removed ${sourceFile.name}`
  },
} as const;
