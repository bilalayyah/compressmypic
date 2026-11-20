// Spanish (es) overrides for CompressMyPic blog articles.
// Keys are article ids; values override the English version (no `slug` —
// the localized slug lives in ./slugs.ts). Empty until Batch 4 localizes
// articles. Neutral Latin American Spanish.
import type { BlogArticleLocaleOverride } from '../../types/blog';

export const ES_BLOG_OVERRIDES: Record<string, BlogArticleLocaleOverride> = {
  "compress-image-to-50kb-guide": {
    title: "Comprimir imagen a 50 KB: guía completa",
    description: "Aprenda a comprimir cualquier imagen a 50 KB sin arruinarla. Formatos, calidad y portales, con una herramienta gratuita en el navegador.",
    readingMinutes: 13,
  },
  "how-to-compress-image-to-50kb": {
    title: "Cómo comprimir una imagen a 50 KB",
    description: "Guía paso a paso para reducir cualquier foto por debajo de 50 KB: elija el archivo correcto, escoja el formato y resuelva el problema si no llega al objetivo.",
    readingMinutes: 12,
  },
  "image-size-50kb-vs-100kb-vs-200kb": {
    title: "50 KB vs 100 KB vs 200 KB: ¿cuál elegir?",
    description: "Compare imágenes de 50 KB, 100 KB y 200 KB: diferencias de calidad, mejores casos de uso y una regla sencilla para elegir el tamaño correcto.",
    readingMinutes: 12,
  },
  "compress-image-to-100kb-guide": {
    title: "Comprimir imagen a 100 KB: guía completa",
    description: "Todo sobre comprimir imágenes a 100 KB: por qué es el punto ideal, cómo se mantiene la calidad, los formatos y la herramienta gratuita que lo hace.",
    readingMinutes: 12,
  },
  "how-to-reduce-image-to-100kb": {
    title: "Cómo reducir una imagen a 100 KB",
    description: "Paso a paso: reduzca cualquier foto a 100 KB para currículums, portales, blogs y correo. Incluye opciones de formato, consejos por lotes y soluciones.",
    readingMinutes: 12,
  },
  "100kb-image-quality-formats": {
    title: "Calidad a 100 KB: JPG vs PNG vs WebP",
    description: "¿Qué formato se ve mejor a 100 KB? Una comparación detallada de calidad entre JPG, PNG y WebP con consejos reales para fotos, gráficos y texto.",
    readingMinutes: 12,
  },
  "compress-image-to-200kb-guide": {
    title: "Comprimir imagen a 200 KB: guía completa",
    description: "La guía completa para comprimir imágenes a 200 KB: calidad, formatos y uso en comercio electrónico, blogs y la herramienta gratuita del navegador.",
    readingMinutes: 12,
  },
  "how-to-compress-image-to-200kb": {
    title: "Cómo comprimir una imagen a 200 KB",
    description: "Paso a paso: comprima cualquier foto a 200 KB para blogs, tiendas y portales. Opciones de formato, consejos por lotes y soluciones para objetivos no alcanzados.",
    readingMinutes: 11,
  },
  "200kb-image-job-portal-settings": {
    title: "Imágenes de 200 KB para portales de empleo",
    description: "Prepare imágenes de 200 KB para portales de empleo, solicitudes y formularios: reglas de foto, escaneos de documentos y los ajustes que pasan a la primera.",
    readingMinutes: 12,
  },
  "compress-image-to-500kb-guide": {
    title: "Comprimir imagen a 500 KB: guía completa",
    description: "La guía completa para comprimir imágenes a 500 KB: calidad casi original, portafolios, presentaciones y la herramienta gratuita en el navegador.",
    readingMinutes: 12,
  },
  "how-to-compress-image-to-500kb": {
    title: "Cómo comprimir una imagen a 500 KB",
    description: "Paso a paso: comprima cualquier foto a 500 KB para portafolios, presentaciones y galerías. Opciones de formato y consejos por lotes.",
    readingMinutes: 12,
  },
  "500kb-vs-1mb-image-quality": {
    title: "500 KB vs 1 MB: calidad para web e impresión",
    description: "Compare imágenes de 500 KB y 1 MB: diferencias visibles de calidad, velocidad de carga, cuándo gana cada tamaño y cómo elegir para web e impresión.",
    readingMinutes: 12,
  },
  "bulk-image-compressor-guide": {
    title: "Compresor de imágenes en lote: guía completa",
    description: "La guía completa de compresión de imágenes en lote: ajustes predefinidos, exportación ZIP y cómo comprimir docenas de imágenes a la vez.",
    readingMinutes: 12,
  },
  "how-to-compress-multiple-images-at-once": {
    title: "Cómo comprimir varias imágenes a la vez",
    description: "Paso a paso: comprima docenas de imágenes a la vez con ajustes predefinidos, una barra de progreso y una sola descarga ZIP.",
    readingMinutes: 11,
  },
  "batch-image-compression-best-practices": {
    title: "Compresión por lotes: buenas prácticas",
    description: "Mejores prácticas para la compresión de imágenes por lotes: ajustes predefinidos, revisiones de calidad, organización ZIP y nombres.",
    readingMinutes: 12,
  },
  "target-file-size-compressor-guide": {
    title: "Compresor de tamaño exacto: guía completa",
    description: "La guía completa para comprimir imágenes a un tamaño exacto en KB o MB: objetivos personalizados, búsqueda binaria, escalado y cuándo usarlo.",
    readingMinutes: 12,
  },
  "how-to-compress-image-to-exact-kb": {
    title: "Cómo comprimir una imagen a un tamaño exacto",
    description: "Paso a paso: comprima cualquier imagen a un tamaño exacto en KB para topes inusuales de portal. Escriba el número, ejecute la búsqueda y verifique el resultado.",
    readingMinutes: 12,
  },
  "exact-kb-target-binary-quality-search": {
    title: "KB exactos: búsqueda binaria de calidad",
    description: "Cómo la búsqueda binaria de calidad encuentra la imagen más nítida en cualquier tamaño exacto en KB: el algoritmo, los pasos, el escalado y sus límites.",
    readingMinutes: 11,
  },
  "web-image-optimizer-guide": {
    title: "Optimizador de imágenes web: guía completa",
    description: "La guía completa del Optimizador de imágenes para web: ajustes predefinidos para imágenes principales y de producto, Core Web Vitals y HTML.",
    readingMinutes: 12,
  },
  "how-to-optimize-images-for-website-speed": {
    title: "Cómo optimizar imágenes para acelerar su web",
    description: "Paso a paso: optimice imágenes para la velocidad del sitio web con ajustes predefinidos, dimensiones correctas y carga diferida.",
    readingMinutes: 12,
  },
  "image-optimization-core-web-vitals": {
    title: "Imágenes y Core Web Vitals: LCP y velocidad",
    description: "Cómo la optimización de imágenes mejora las Core Web Vitals: LCP, CLS e INP explicados, con soluciones prácticas para páginas lentas.",
    readingMinutes: 12,
  },
  "gif-compressor-guide": {
    title: "Compresor de GIF: guía completa",
    description: "La guía completa para comprimir GIF animados: ajustes predefinidos, paletas, velocidades de fotogramas, escalado y cómo reducir GIF sin arruinarlos.",
    readingMinutes: 12,
  },
  "how-to-compress-gif": {
    title: "Cómo comprimir un GIF",
    description: "Paso a paso: comprima cualquier GIF animado para Discord, Slack, sitios web y chat. Ajustes predefinidos, paleta, escala y soluciones para archivos rebeldes.",
    readingMinutes: 11,
  },
  "gif-vs-webp-vs-mp4-animated": {
    title: "GIF vs WebP vs MP4: animaciones comparadas",
    description: "Compare GIF animado, WebP y MP4: tamaño de archivo, calidad, compatibilidad y cuándo usar cada formato para animaciones en la web.",
    readingMinutes: 12,
  },
  "image-converter-guide": {
    title: "Conversor de imágenes: guía completa",
    description: "Convierta imágenes entre JPG, PNG, WebP, HEIC, SVG, BMP, GIF y AVIF en su navegador. Formatos, calidad y transparencia explicados.",
    readingMinutes: 12,
  },
  "how-to-convert-image-format": {
    title: "Cómo convertir el formato de una imagen",
    description: "Convierte cualquier imagen a JPG, PNG o WebP en seis pasos rápidos. Sube, elige un formato, ajusta la calidad, revisa y descarga, todo en tu navegador.",
    readingMinutes: 12,
  },
  "image-format-conversion-quality-loss": {
    title: "Conversión de formato: pérdida de calidad",
    description: "¿Convertir una imagen pierde calidad? Formatos con pérdida vs. sin pérdida, conversiones repetidas y los ajustes que mantienen tus fotos nítidas.",
    readingMinutes: 13,
  },
  "image-to-pdf-guide": {
    title: "Imagen a PDF: guía completa",
    description: "Convierte fotos y escaneos en un solo documento PDF en tu navegador. Tamaños de página, márgenes, orientación, calidad y orden, todo explicado.",
    readingMinutes: 13,
  },
  "how-to-convert-image-to-pdf": {
    title: "Cómo convertir una imagen a PDF",
    description: "Convierte una foto o un conjunto completo en un PDF en minutos. Sube, ordena las páginas, elige un tamaño y descarga tu documento.",
    readingMinutes: 12,
  },
  "jpg-to-pdf-vs-png-to-pdf": {
    title: "JPG a PDF vs PNG a PDF: mejores ajustes",
    description: "¿Tu PDF debe usar imágenes JPG o PNG? Tamaño de archivo, nitidez del texto, transparencia y los mejores ajustes para cada tipo de documento.",
    readingMinutes: 13,
  },
  "bulk-image-converter-guide": {
    title: "Conversor de imágenes en lote: guía completa",
    description: "Convierte carpetas enteras de imágenes a un solo formato a la vez. Entradas mezcladas, ajustes de lote, exportación ZIP y nombres, la guía completa.",
    readingMinutes: 12,
  },
  "how-to-convert-multiple-images": {
    title: "Cómo convertir varias imágenes a la vez",
    description: "Convierte una carpeta entera de imágenes a JPG, PNG o WebP en una sola pasada. Sube, elige un formato, ajusta la calidad y descarga un solo ZIP.",
    readingMinutes: 12,
  },
  "batch-image-conversion-workflow": {
    title: "Conversión en lote: carpetas y nombres",
    description: "Un flujo de trabajo repetible para convertir cientos de imágenes. Configuración de carpetas, reglas de nombres y controles de calidad.",
    readingMinutes: 13,
  },
  "heic-to-jpg-guide": {
    title: "HEIC a JPG: guía completa",
    description: "Convierte fotos HEIC de iPhone a JPG en tu navegador. Por qué existe HEIC, cómo funciona la decodificación, la calidad y qué hacer con las Live Photos.",
    readingMinutes: 12,
  },
  "how-to-convert-heic-to-jpg": {
    title: "Cómo convertir HEIC a JPG",
    description: "Convierte fotos HEIC de iPhone a JPG con unos pocos toques. Sube, revisa la vista previa y descarga, en cualquier dispositivo, sin instalar nada.",
    readingMinutes: 12,
  },
  "heic-vs-jpg": {
    title: "HEIC vs JPG: compatibilidad y tamaño",
    description: "HEIC vs JPG comparados con honestidad: tamaño de archivo, calidad de imagen, compatibilidad y qué formato usar para fotos, formularios y la web.",
    readingMinutes: 12,
  },
  "jpg-to-png-guide": {
    title: "JPG a PNG para editar sin perder calidad",
    description: "Convierte fotos JPG a PNG de la forma correcta. Cuándo ayuda, por qué los archivos crecen y cómo usar PNG para edición, texto y gráficos.",
    readingMinutes: 12,
  },
  "how-to-convert-jpg-to-png": {
    title: "Convertir JPG a PNG paso a paso y en lote",
    description: "Convierte imágenes JPG a PNG en segundos, un archivo o un lote de veinte. Sube, convierte, compara y descarga, todo en tu navegador.",
    readingMinutes: 12,
  },
  "jpg-vs-png-transparency": {
    title: "JPG vs PNG: cuándo importa la transparencia",
    description: "JPG vs PNG: transparencia, tamaño de archivo, nitidez del texto y fotos. Cuándo gana cada formato y por qué convertir un JPG no crea transparencia.",
    readingMinutes: 12,
  },
  "png-to-jpg-guide": {
    title: "PNG a JPG: achica capturas y fotos",
    description: "Convierte capturas y fotos PNG a JPG y achícalas de forma drástica. Colores mate, ajustes de calidad, lotes y mejores usos, explicados.",
    readingMinutes: 12,
  },
  "how-to-convert-png-to-jpg": {
    title: "Convertir PNG a JPG: fondo y calidad",
    description: "Convierte capturas e imágenes PNG a JPG en seis pasos. Elige un color mate, ajusta la calidad, revisa y descarga, un archivo o un lote.",
    readingMinutes: 12,
  },
  "png-to-jpg-file-size-quality": {
    title: "PNG a JPG: tamaño de archivo y calidad",
    description: "¿Cuánto más pequeño se vuelve realmente PNG a JPG? Ahorros reales por tipo de imagen y ajustes de calidad que protegen el texto.",
    readingMinutes: 13,
  },
  "jpg-to-webp-guide": {
    title: "JPG a WebP: guía completa",
    description: "Convierte fotos JPG a WebP para sitios web más rápidos. Cuánto más pequeñas, qué calidad usar, soporte de navegadores y cuándo conservar JPG.",
    readingMinutes: 12,
  },
  "how-to-convert-jpg-to-webp": {
    title: "Convertir JPG a WebP para una web rápida",
    description: "Convierte fotos JPG a WebP en unos pocos pasos. Sube, ajusta la calidad, revisa el ahorro y descarga, una foto o una carpeta entera.",
    readingMinutes: 12,
  },
  "jpg-vs-webp": {
    title: "JPG vs WebP: tamaño, calidad y soporte",
    description: "JPG vs WebP comparados frente a frente: ahorros de tamaño de archivo, calidad de imagen, transparencia, soporte de navegadores y qué formato usar dónde.",
    readingMinutes: 13,
  },
  "webp-to-jpg-guide": {
    title: "De WebP a JPG: guía completa",
    description: "Convierte imágenes WebP a JPG para que sean compatibles. Colores de fondo, ajustes de calidad, lotes y cuándo JPG le gana a WebP.",
    readingMinutes: 12,
  },
  "how-to-convert-webp-to-jpg": {
    title: "Convertir WebP a JPG compatible con todo",
    description: "Convierte imágenes WebP a JPG en pocos pasos. Sube, elige un color de fondo, ajusta la calidad y descarga: un archivo o todo un lote.",
    readingMinutes: 12,
  },
  "webp-to-jpg-compatibility": {
    title: "WebP a JPG: compatibilidad antes que tamaño",
    description: "WebP es más pequeño, pero JPG se abre en todas partes. Cuándo la compatibilidad importa más que el tamaño: formularios, impresoras, correo y software viejo.",
    readingMinutes: 12,
  },
  "png-to-webp-guide": {
    title: "PNG a WebP: liviano y con transparencia",
    description: "Convierte imágenes PNG a WebP para archivos más pequeños con la transparencia intacta. Logos, íconos, capturas y hero images: ajustes y mejores usos.",
    readingMinutes: 12,
  },
  "how-to-convert-png-to-webp": {
    title: "Convertir PNG a WebP: logos más livianos",
    description: "Convierte imágenes PNG a WebP en pocos pasos. Sube, ajusta la calidad, revisa la transparencia y descarga: un logo o todo un conjunto de íconos.",
    readingMinutes: 12,
  },
  "png-vs-webp": {
    title: "PNG vs WebP: transparencia y tamaño",
    description: "PNG vs WebP comparados: transparencia, tamaño de archivo, nitidez del texto, soporte en navegadores y qué formato usar para logos, capturas y fotos.",
    readingMinutes: 13,
  },
  "webp-to-png-guide": {
    title: "WebP a PNG para editar e imprimir",
    description: "Convierte imágenes WebP a PNG sin perder calidad. Transparencia, edición, compatibilidad y cuándo PNG es el destino correcto.",
    readingMinutes: 12,
  },
  "how-to-convert-webp-to-png": {
    title: "Convertir WebP a PNG sin perder un píxel",
    description: "Convierte imágenes WebP a PNG en pocos pasos. Sube, convierte, revisa la transparencia y descarga: un archivo o todo un lote.",
    readingMinutes: 12,
  },
  "webp-to-png-editing-compatibility": {
    title: "WebP a PNG: edición y compatibilidad",
    description: "Por qué los diseñadores convierten WebP a PNG: flujos de edición, transparencia y compatibilidad con Photoshop, Figma, Office e impresión.",
    readingMinutes: 12,
  },
  "svg-to-png-guide": {
    title: "De SVG a PNG: guía completa",
    description: "Convierte logos e íconos SVG a PNG en cualquier tamaño. Escala, transparencia, fuentes, degradados y los límites: todo explicado.",
    readingMinutes: 12,
  },
  "how-to-convert-svg-to-png": {
    title: "Cómo convertir SVG a PNG",
    description: "Convierte logos e íconos SVG a PNG en el tamaño que necesitas. Sube, elige una escala, revisa el resultado y descarga: un archivo o todo un paquete.",
    readingMinutes: 12,
  },
  "svg-vs-png-vector-raster": {
    title: "SVG vs PNG: vectorial contra mapa de bits",
    description: "SVG vs PNG comparados: vectorial contra mapa de bits, escalado, tamaño de archivo, transparencia, soporte en navegadores y cuándo usar cada formato.",
    readingMinutes: 12,
  },
  "avif-to-jpg-guide": {
    title: "De AVIF a JPG: guía completa",
    description: "Convierte imágenes AVIF de sitios web modernos a JPG. Qué es AVIF, por qué las aplicaciones lo rechazan, ajustes de calidad y manejo de transparencia.",
    readingMinutes: 12,
  },
  "how-to-convert-avif-to-jpg": {
    title: "Cómo convertir AVIF a JPG",
    description: "Convierte imágenes AVIF a JPG en pocos pasos. Sube, ajusta la calidad, maneja la transparencia y descarga: un archivo o todo un lote.",
    readingMinutes: 12,
  },
  "avif-vs-jpg": {
    title: "AVIF vs JPG: formato nuevo contra universal",
    description: "AVIF vs JPG comparados: tamaño de archivo, calidad de imagen, HDR, transparencia, soporte en navegadores y qué formato usar para la web y más allá.",
    readingMinutes: 12,
  },
  "bmp-to-jpg-guide": {
    title: "De BMP a JPG: guía completa",
    description: "Convierte bitmaps BMP a JPG y achícalos 90 % o más. Por qué los archivos BMP son enormes, ajustes de calidad, escaneos y lotes.",
    readingMinutes: 12,
  },
  "how-to-convert-bmp-to-jpg": {
    title: "Cómo convertir BMP a JPG",
    description: "Convierte bitmaps BMP a JPG en pocos pasos. Sube, ajusta la calidad, revisa el ahorro y descarga: un archivo o toda una carpeta de escaneos.",
    readingMinutes: 12,
  },
  "bmp-vs-jpg-file-size": {
    title: "BMP vs JPG: por qué los BMP son tan grandes",
    description: "BMP vs JPG comparados: por qué los archivos BMP son enormes, cuánto ahorra JPG, calidad, profundidad de color y cuándo cada formato todavía tiene sentido.",
    readingMinutes: 12,
  },
  "rotate-flip-image-guide": {
    title: "Rotar y voltear imágenes: guía completa",
    description: "Aprenda a rotar y voltear imágenes en línea: giros de 90 y 180 grados, ángulos personalizados, selfis espejadas y corrección EXIF.",
    readingMinutes: 12,
  },
  "how-to-rotate-flip-image": {
    title: "Cómo rotar o voltear una imagen",
    description: "Rote o voltee cualquier imagen en segundos: súbala, elija 90 o 180 grados o un ángulo personalizado y revise la vista previa.",
    readingMinutes: 11,
  },
  "image-orientation-exif-rotation": {
    title: "Orientación de imagen: problemas EXIF",
    description: "¿Por qué la misma foto se ve bien en su teléfono y de lado en todos lados? La orientación EXIF explicada, y cómo corregirla para siempre.",
    readingMinutes: 13,
  },
  "image-cropper-guide": {
    title: "Recortador de imágenes: guía completa",
    description: "Aprenda a recortar imágenes en línea: proporciones, la regla de los tercios, zoom, ajustes de calidad y cómo recortar para perfiles, banners e impresión.",
    readingMinutes: 12,
  },
  "how-to-crop-image": {
    title: "Cómo recortar una imagen",
    description: "Recorte cualquier imagen en línea en segundos: súbala, arrastre el cuadro de selección, elija una proporción y descargue un recorte limpio.",
    readingMinutes: 11,
  },
  "image-crop-ratios-explained": {
    title: "Proporciones de recorte: 1:1, 4:3 y 16:9",
    description: "¿Qué significan las proporciones de recorte y cuál conviene elegir? 1:1, 4:3, 3:2 y 16:9 explicadas para perfiles, impresión y redes sociales.",
    readingMinutes: 12,
  },
  "image-watermark-guide": {
    title: "Marca de agua para imágenes: guía completa",
    description: "Aprenda a poner marcas de agua en imágenes en línea: marcas de texto y de logotipo, patrones repetidos, opacidad y colocación.",
    readingMinutes: 13,
  },
  "how-to-add-watermark-to-image": {
    title: "Cómo agregar una marca de agua a una imagen",
    description: "Agregue una marca de agua a cualquier imagen en minutos: texto o logotipo, colocación, opacidad y tamaño, con una exportación limpia.",
    readingMinutes: 12,
  },
  "watermark-best-practices": {
    title: "Marcas de agua: colocación y opacidad",
    description: "Cómo poner marcas de agua en fotos como corresponde: reglas de colocación, rangos de opacidad, tamaño y color que protejan sin arruinar la imagen.",
    readingMinutes: 12,
  },
  "blur-pixelate-image-guide": {
    title: "Desenfocar y pixelar imágenes: guía completa",
    description: "Aprenda a desenfocar y pixelar imágenes en línea: oculte caras, texto y detalles con desenfoque suave o pixelado, en modo pincel o completo.",
    readingMinutes: 11,
  },
  "how-to-blur-pixelate-image": {
    title: "Cómo desenfocar o pixelar una imagen",
    description: "Desenfoque o pixele cualquier imagen en minutos: pinte sobre caras y texto con un pincel, o desenfoque toda la imagen, y exporte una copia censurada.",
    readingMinutes: 11,
  },
  "blur-vs-pixelate-image": {
    title: "Desenfocar o pixelar: cómo ocultar detalles",
    description: "¿Desenfocar o pixelar? Cómo cada método oculta caras, texto y números, cuál es más seguro y cuándo combinarlos para una censura correcta.",
    readingMinutes: 11,
  },
  "add-text-to-image-guide": {
    title: "Agregar texto a imágenes: guía completa",
    description: "Aprenda a agregar texto a imágenes en línea: títulos, pies, memes, citas y anotaciones con fuentes, colores, contornos y colocación en capas.",
    readingMinutes: 11,
  },
  "how-to-add-text-to-image": {
    title: "Cómo agregar texto a una imagen",
    description: "Agregue texto a cualquier imagen en minutos: súbala, escriba su pie, elija una fuente y un tamaño, ajuste el color y el contorno, coloque las capas y descargue.",
    readingMinutes: 12,
  },
  "text-on-images-readability-tips": {
    title: "Texto en imágenes: contraste y legibilidad",
    description: "Cómo hacer legible el texto en imágenes: elecciones de fuente, reglas de tamaño, contraste, contornos, sombras y paneles de fondo.",
    readingMinutes: 12,
  },
  "image-border-generator-guide": {
    title: "Bordes para imágenes: guía completa",
    description: "Aprenda a agregar bordes a imágenes en línea: marcos sólidos, estilo Polaroid y con brillo degradado, tamaño de borde, radio de esquina, sombras y colores.",
    readingMinutes: 11,
  },
  "how-to-add-border-to-image": {
    title: "Cómo agregar un borde a una imagen",
    description: "Agregue un borde a cualquier imagen en minutos: súbala, elija un estilo, ajuste el tamaño y el color, añada una sombra y descargue una foto enmarcada.",
    readingMinutes: 12,
  },
  "image-frames-borders-styles": {
    title: "Marcos y bordes: estilos para fotos y redes",
    description: "¿Qué estilo de marco le va a su foto? Marcos minimalistas, Polaroid, de galería y retro comparados para redes sociales e impresión.",
    readingMinutes: 12,
  },
  "round-image-corners-guide": {
    title: "Redondear las esquinas de una imagen: guía",
    description: "Aprenda a redondear las esquinas de una imagen en línea: radio de esquina, control por esquina, formas de círculo y de píldora, y formatos.",
    readingMinutes: 12,
  },
  "how-to-round-image-corners": {
    title: "Cómo redondear las esquinas de una imagen",
    description: "Redondee las esquinas de una imagen en minutos: suba la foto, fije el radio, use el control por esquina o el atajo de círculo y descargue.",
    readingMinutes: 12,
  },
  "rounded-corners-vs-circle-crop": {
    title: "Esquinas redondeadas o recorte circular",
    description: "¿Esquinas redondeadas o recorte circular? Cómo funciona cada forma para avatares, tarjetas y perfiles sociales, y cuándo usar una, la otra, o ambas.",
    readingMinutes: 12,
  },
  "image-brightness-editor-guide": {
    title: "Editor de brillo de imagen: guía completa",
    description: "Aprenda a ajustar el brillo de una imagen en línea: el control de brillo, los ajustes rápidos, los modos de comparación y cómo arreglar fotos oscuras.",
    readingMinutes: 12,
  },
  "how-to-adjust-image-brightness": {
    title: "Cómo ajustar el brillo de una imagen",
    description: "Ajuste el brillo de una imagen en minutos: suba la foto, arrastre el control, pruebe un ajuste rápido, compare el antes y el después, y descargue.",
    readingMinutes: 11,
  },
  "brightness-vs-exposure-vs-contrast": {
    title: "Brillo, exposición y contraste explicados",
    description: "Brillo, exposición y contraste explicados: qué hace cada uno en una foto, cómo interactúan y qué control usar en cada situación.",
    readingMinutes: 12,
  },
  "image-contrast-editor-guide": {
    title: "Editor de contraste de imágenes: guía",
    description: "Aprenda a ajustar el contraste de una imagen en línea: el control de contraste, los ajustes rápidos y cómo agregar fuerza sin recortar las luces.",
    readingMinutes: 12,
  },
  "how-to-adjust-image-contrast": {
    title: "Cómo ajustar el contraste de una imagen",
    description: "Ajuste el contraste de una imagen en minutos: suba la foto, arrastre el control, pruebe un ajuste rápido y revise las luces y las sombras.",
    readingMinutes: 11,
  },
  "contrast-readability-text-over-photos": {
    title: "Contraste y legibilidad: texto sobre fotos",
    description: "Cómo hacer legible el texto sobre fotos: contraste entre letras y fondo, oscurecimiento, superposiciones, paneles y pruebas en pantallas pequeñas.",
    readingMinutes: 11,
  },
  "image-saturation-editor-guide": {
    title: "Editor de saturación de imágenes: guía",
    description: "Aprenda a ajustar la saturación de una imagen en línea: el control de saturación, los ajustes rápidos, los tonos de piel y la edición natural del color.",
    readingMinutes: 12,
  },
  "how-to-adjust-image-saturation": {
    title: "Cómo ajustar la saturación de una imagen",
    description: "Ajuste la saturación de una imagen en minutos: suba la foto, arrastre el control, pruebe un ajuste rápido y revise los tonos de piel.",
    readingMinutes: 12,
  },
  "saturation-vs-vibrance": {
    title: "Saturación o intensidad: color natural",
    description: "¿Saturación o intensidad de color? Cómo trata cada control el color, cuál protege los tonos de piel y cómo lograr un color natural y vivo sin pasto neón.",
    readingMinutes: 12,
  },
  "image-filters-guide": {
    title: "Filtros de imagen: guía completa",
    description: "Aprenda a usar filtros de foto en línea: Vintage, Sepia, Blanco y negro Noir, Cálido y Frío, con control de intensidad y un aspecto consistente.",
    readingMinutes: 12,
  },
  "how-to-apply-photo-filters": {
    title: "Cómo aplicar filtros de fotos",
    description: "Aplique filtros de fotos en minutos: suba la foto, explore los 11 estilos, fije la intensidad, compare con el original y descargue una foto estilizada.",
    readingMinutes: 12,
  },
  "photo-filters-compared": {
    title: "Filtros de fotos: cómo elegir un aspecto",
    description: "Los 11 filtros de fotos comparados: Vintage o Sepia, Escala de grises o Noir, Cálido o Frío, y qué estilo va bien para retratos, paisajes, comida y productos.",
    readingMinutes: 11,
  },
  "image-color-picker-guide": {
    title: "Selector de color de imagen: guía completa",
    description: "Tome cualquier color de cualquier imagen con un cuentagotas. Códigos HEX, RGB, HSL y CMYK, lupa, muestras y exportación a CSS, gratis en su navegador.",
    readingMinutes: 13,
  },
  "how-to-pick-color-from-image": {
    title: "Cómo elegir un color de una imagen",
    description: "Tome un color exacto de cualquier foto, logotipo o captura de pantalla en cuatro pasos. Use la lupa de aumento y exporte CSS, sin instalar nada.",
    readingMinutes: 12,
  },
  "hex-vs-rgb-vs-hsl": {
    title: "HEX vs RGB vs HSL: códigos de color",
    description: "HEX, RGB, HSL y CMYK describen el mismo color de formas distintas. Aprenda qué significa cada formato, cuándo usarlo y cómo convertir entre ellos.",
    readingMinutes: 12,
  },
  "image-dimensions-checker-guide": {
    title: "Verificador de dimensiones de imagen: guía",
    description: "Revise las dimensiones de imágenes en lote: ancho, alto, proporción, megapíxeles y tamaño de impresión. Valide mínimos y exporte CSV o JSON.",
    readingMinutes: 11,
  },
  "how-to-check-image-dimensions": {
    title: "Cómo verificar las dimensiones de una imagen",
    description: "Revise el ancho, el alto, la proporción y el tamaño de impresión de cualquier imagen, en un archivo o en un lote completo, con exportación a CSV y JSON.",
    readingMinutes: 12,
  },
  "image-dimensions-vs-resolution-vs-file-size": {
    title: "Dimensiones, resolución y tamaño de archivo",
    description: "Las dimensiones, la resolución y el tamaño de archivo son tres números distintos. Aprenda qué significa cada uno y cuál importa para web e impresión.",
    readingMinutes: 12,
  },
  "image-dpi-changer-guide": {
    title: "Cambiador de DPI de imagen: guía completa",
    description: "Cambie el DPI de una imagen sin perder calidad. Ajustes de 72 a 600 DPI, valores personalizados hasta 2400 y exportación en lote a ZIP.",
    readingMinutes: 11,
  },
  "how-to-change-image-dpi": {
    title: "Cómo cambiar el DPI de una imagen",
    description: "Cambie el DPI de una imagen a 72, 150, 300 o 600 en cuatro pasos, o use cualquier valor personalizado hasta 2400, con descarga ZIP.",
    readingMinutes: 12,
  },
  "dpi-vs-ppi-print-web": {
    title: "DPI vs PPI: qué importa para imprimir y web",
    description: "DPI y PPI suenan parecido pero miden cosas distintas. Aprenda cuál importa para imprimir, cuál importa para las pantallas y por qué confunde el 72 vs 300.",
    readingMinutes: 11,
  },
  "image-to-base64-guide": {
    title: "Imagen a Base64 para incrustarla en código",
    description: "Convierta cualquier imagen a Base64: URL de datos, cadenas sin formato y salida CSS url(). Aprenda sobre el 33% extra y cuándo incrustar.",
    readingMinutes: 12,
  },
  "how-to-convert-image-to-base64": {
    title: "Convertir imagen a Base64 en cuatro pasos",
    description: "Convierta una imagen a Base64 en cuatro pasos: suba, elija URL de datos, sin formato, HTML o CSS, y luego copie o descargue.",
    readingMinutes: 12,
  },
  "base64-images-when-to-embed": {
    title: "Imágenes Base64: cuándo incrustarlas",
    description: "Incrustar imágenes Base64 ahorra solicitudes pero cuesta 33% más bytes y elimina el caché. Aprenda los límites de tamaño y una lista de decisión.",
    readingMinutes: 12,
  },
  "base64-to-image-guide": {
    title: "Base64 a imagen: recupera la foto del texto",
    description: "Decodifique cualquier cadena Base64 de vuelta a una imagen. Decodificación automática al pegar, vista previa de transparencia y descarga en PNG, JPG o WebP.",
    readingMinutes: 12,
  },
  "how-to-convert-base64-to-image": {
    title: "Convertir Base64 a imagen con vista previa",
    description: "Convierta una cadena Base64 a una imagen en cuatro pasos: pegue, revise la vista previa, elija Original, PNG, JPG o WebP, y descargue.",
    readingMinutes: 12,
  },
  "base64-vs-image-files": {
    title: "Base64 vs archivos de imagen: rendimiento",
    description: "Las cadenas Base64 y los archivos de imagen llevan la misma foto de formas distintas. Compare tamaño, velocidad, caché y edición.",
    readingMinutes: 12,
  },
  "image-color-palette-extractor-guide": {
    title: "Extractor de paleta de colores: guía",
    description: "Extraiga una paleta de colores de cualquier foto: de 3 a 12 muestras, ordenadas por cobertura, con HEX, RGB, HSL y exportación a CSS y JSON.",
    readingMinutes: 12,
  },
  "how-to-extract-color-palette-from-image": {
    title: "Cómo extraer una paleta de colores",
    description: "Extraiga una paleta de colores de cualquier foto en cinco pasos: suba, elija de 3 a 12 muestras, lea los porcentajes y copie CSS o JSON.",
    readingMinutes: 12,
  },
  "color-palettes-from-photos-design": {
    title: "Paletas de colores de fotos para diseño",
    description: "Convierta fotos en paletas de diseño que funcionen de verdad: la regla 60-30-10, dominante vs acento, contraste y uso de marca.",
    readingMinutes: 12,
  },
  "favicon-generator-guide": {
    title: "Generador de favicon: guía completa",
    description: "Todo sobre los favicons: qué son, qué archivos necesita un paquete completo, cómo crear uno a partir de tu logo y cómo instalarlo en cualquier sitio web.",
    readingMinutes: 13,
  },
  "how-to-create-favicon": {
    title: "Cómo crear un favicon",
    description: "Cree un favicon a partir de su logo en minutos: prepare la imagen de origen, ajuste el relleno y el fondo, y revise las pestañas claras y oscuras.",
    readingMinutes: 11,
  },
  "favicon-sizes-explained": {
    title: "Tamaños de favicon: de 16×16 a 512×512",
    description: "Cada tamaño de favicon y para qué sirve: íconos de pestaña de 16×16, retina de 32×32, Apple Touch de 180×180 y Android de 192×192 y 512×512.",
    readingMinutes: 12,
  },
  "add-background-to-image-guide": {
    title: "Agregar fondo a imágenes: guía completa",
    description: "Ponga cualquier foto o recorte transparente sobre un fondo sólido, degradado o difuminado: qué modo elegir y cómo encuadrar imágenes para redes y tiendas.",
    readingMinutes: 13,
  },
  "how-to-add-background-to-image": {
    title: "Cómo agregar un fondo a una imagen",
    description: "Agrega un fondo a cualquier foto o recorte transparente en minutos: elige un telón sólido, degradado o difuminado, encuádralo con la forma adecuada y exporta.",
    readingMinutes: 12,
  },
  "product-photo-backgrounds": {
    title: "Fondos para fotos de producto: guía",
    description: "Elija el fondo adecuado para sus fotos de producto: blanco, colores de marca, contexto de estilo de vida y reglas de los marketplaces.",
    readingMinutes: 14,
  },
  "image-splitter-guide": {
    title: "Divisor de imágenes: guía completa",
    description: "Divida cualquier imagen en mosaicos de cuadrícula o franjas: cómo funcionan los modos de cuadrícula, horizontal y vertical, y los mejores usos.",
    readingMinutes: 13,
  },
  "how-to-split-image": {
    title: "Cómo dividir una imagen",
    description: "Divida cualquier imagen en mosaicos de cuadrícula o franjas en minutos: suba, elija un modo, defina filas y columnas y descargue los mosaicos.",
    readingMinutes: 13,
  },
  "split-images-instagram-grid": {
    title: "Dividir imágenes para Instagram",
    description: "Convierta una foto en un rompecabezas de cuadrícula de Instagram: la división de 3×3, cómo preparar una imagen cuadrada y el orden de publicación.",
    readingMinutes: 13,
  },
  "gif-maker-guide": {
    title: "Creador de GIF: guía completa",
    description: "Cree GIF animados a partir de sus fotos: cómo elegir fotogramas, la temporización, las opciones de repetición y cómo mantener el tamaño bajo control.",
    readingMinutes: 13,
  },
  "how-to-make-gif-from-images": {
    title: "Cómo crear un GIF a partir de imágenes",
    description: "Convierta sus fotos en un GIF animado en minutos: reúna fotogramas, súbalos, ordénelos y temporícelos, defina la repetición y descargue.",
    readingMinutes: 12,
  },
  "gif-frame-rate-file-size": {
    title: "Velocidad de fotogramas y tamaño de GIF",
    description: "El equilibrio en el corazón de cada GIF: cómo la velocidad y la cantidad de fotogramas y las dimensiones deciden si su animación es fluida o pequeña.",
    readingMinutes: 13,
  },
  "image-collage-maker-guide": {
    title: "Creador de collages de fotos: guía completa",
    description: "Cree collages de fotos en minutos: cuadrículas y franjas, arrastrar para intercambiar, divisiones ajustables y exportación JPG o PNG de hasta 4000 px.",
    readingMinutes: 13,
  },
  "how-to-make-photo-collage": {
    title: "Cómo hacer un collage de fotos",
    description: "Cree un collage de fotos en minutos: elija sus fotos, escoja un diseño de cuadrícula o franja, ordénelas y exporte una imagen lista para compartir.",
    readingMinutes: 13,
  },
  "collage-layouts-grids-mood-boards": {
    title: "Diseños de collage: cuadrículas e historias",
    description: "Elija el diseño de collage adecuado: cuadrículas de 2×2 y 3×3, franjas verticales y horizontales, tableros de inspiración y diseños de historia.",
    readingMinutes: 13,
  },
  "image-resizer-guide": {
    title: "¿Qué es un redimensionador de imágenes?",
    description: "Aprenda qué hace un redimensionador de imágenes: cambio por píxeles y por porcentaje, relación de aspecto y qué tamaño usar para web, redes e impresión.",
    readingMinutes: 14,
  },
  "how-to-resize-image": {
    title: "Cómo redimensionar una imagen en línea",
    description: "Redimensione una imagen en línea en minutos: súbala, elija píxeles o porcentaje, bloquee la relación de aspecto, use una plantilla y descargue.",
    readingMinutes: 14,
  },
  "resize-vs-compress-image": {
    title: "Redimensionar o comprimir: la diferencia",
    description: "Redimensionar cambia las dimensiones en píxeles; comprimir cambia lo eficiente que es guardar los píxeles. Aprenda cuándo usar cada uno y por qué hacer ambos.",
    readingMinutes: 14,
  },
  "bulk-image-resizer-guide": {
    title: "Redimensionador de imágenes en lote: guía",
    description: "Redimensione decenas de imágenes a la vez: modos Ajuste máximo, Ancho uniforme, Exacto en píxeles y Porcentaje, con plantillas y descarga ZIP.",
    readingMinutes: 14,
  },
  "how-to-resize-multiple-images": {
    title: "Cómo redimensionar varias imágenes a la vez",
    description: "Redimensione varias imágenes a la vez: suelte un lote, elija Ajuste máximo, Ancho uniforme, Exacto o Porcentaje, y descargue un solo ZIP.",
    readingMinutes: 14,
  },
  "bulk-resize-presets-social-ecommerce-print": {
    title: "Preajustes de redimensionamiento en lote",
    description: "Elija el preajuste correcto de redimensionamiento en lote para cada destino: tamaños sociales, cuadrados de comercio electrónico y anchos de blog.",
    readingMinutes: 14,
  },
  "image-metadata-viewer-guide": {
    title: "Visor de metadatos de imagen: guía completa",
    description: "Aprenda qué muestra un visor de metadatos de imagen: ajustes EXIF de la cámara, coordenadas GPS y fragmentos de PNG y WebP, en privado desde su navegador.",
    readingMinutes: 12,
  },
  "how-to-view-image-metadata": {
    title: "Cómo ver los metadatos de imagen",
    description: "Guía paso a paso para ver los metadatos de imagen: abra una foto en el visor, lea los campos EXIF y GPS y exporte un informe JSON.",
    readingMinutes: 12,
  },
  "exif-data-explained": {
    title: "Datos EXIF explicados: qué revelan tus fotos",
    description: "Una mirada profunda a los datos EXIF: cómo los escriben las cámaras, qué campos revelan su ubicación y cómo leerlos y quitarlos de forma segura.",
    readingMinutes: 12,
  },
  "remove-image-metadata-guide": {
    title: "Eliminar metadatos de imagen: guía completa",
    description: "Aprenda a eliminar los metadatos de imagen de forma segura: qué se quita, limpieza sin pérdida, limpieza por lotes y exportación en ZIP.",
    readingMinutes: 12,
  },
  "how-to-remove-metadata-from-image": {
    title: "Cómo eliminar los metadatos de una imagen",
    description: "Guía paso a paso para eliminar los metadatos de una imagen: suba la foto, quite EXIF y GPS, elija el método correcto y descargue archivos limpios.",
    readingMinutes: 11,
  },
  "photo-privacy-gps-exif-risks": {
    title: "Privacidad de fotos: riesgos de GPS y EXIF",
    description: "Qué pueden revelar las coordenadas GPS, los datos EXIF y los metadatos ocultos de sus fotos, y los pasos que impiden que filtren su ubicación.",
    readingMinutes: 12,
  },
};
