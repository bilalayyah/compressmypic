// Spanish tool registry — Batch 1 (home + first 8 tools).
// Target path in the repo: src/locales/es/tools.ts
// Neutral Latin American Spanish, usted forms. Slugs, category ids and
// relatedSlugs are unchanged from the English registry (src/data/tools.ts).
// Batch 1 tools: /image-resizer, /image-converter, /image-cropper,
// /image-watermark, /rotate-flip-image, /image-to-pdf,
// /image-metadata-viewer, /remove-image-metadata.
// Later batches append their entries to TOOLS_REGISTRY_ES (same format).

import type { ToolDefinition, ToolCategoryMeta } from '../../data/tools';

export const TOOL_CATEGORIES_ES: ToolCategoryMeta[] = [
  { id: 'compress', label: 'Comprimir', description: 'Reduzca el tamaño de los archivos de imagen sin pérdida visible de calidad' },
  { id: 'resize', label: 'Cambiar tamaño', description: 'Cambie las dimensiones en píxeles o escale imágenes en lote' },
  { id: 'convert', label: 'Convertir', description: 'Convierta entre formatos de imagen y genere PDF' },
  { id: 'crop-edit', label: 'Recortar y editar', description: 'Rote, voltee, recorte y ajuste sus fotos' },
  { id: 'ai-tools', label: 'Herramientas de IA', description: 'Procesamiento inteligente de imágenes en el navegador' },
  { id: 'create', label: 'Crear', description: 'Cree faviconos, collages y recursos web' },
  { id: 'privacy', label: 'Herramientas de privacidad', description: 'Inspeccione y elimine metadatos EXIF, GPS y ocultos' },
  { id: 'developer', label: 'Herramientas para desarrolladores', description: 'Elija colores, inspeccione dimensiones y genere recursos web' },
];

export const TOOLS_REGISTRY_ES: ToolDefinition[] = [
  {
    slug: '/',
    name: 'Compresor de imágenes',
    shortDescription: 'Comprima imágenes JPG, PNG, WebP y HEIC sin perder calidad.',
    category: 'compress',
    seoTitle: 'Compresor de imágenes gratis online – Reduzca a 100KB',
    seoDescription:
      'Comprima imágenes online gratis: reduzca el tamaño sin perder calidad. Comprima JPG, PNG y WebP sin registro ni marca de agua, directamente en su navegador.',
    h1: 'Compresor de imágenes gratis',
    subtitle: 'Reduzca el tamaño de archivos JPG, PNG, WebP y HEIC directamente en su navegador.',
    howToSteps: [],
    features: [],
    faqs: [],
    relatedSlugs: ['/image-resizer', '/image-converter', '/remove-image-metadata'],
  },
  {
    slug: '/image-resizer',
    name: 'Redimensionador de imágenes',
    shortDescription: 'Cambie el tamaño de sus imágenes por píxeles exactos, porcentaje o plantillas para redes sociales.',
    category: 'resize',
    seoTitle: 'Redimensionador de imágenes gratis online – Por píxeles o %',
    seoDescription:
      'Redimensiona imágenes gratis online por píxeles exactos, porcentaje o plantillas para redes sociales. Procesa lotes en su navegador y descarga todo en ZIP.',
    h1: 'Redimensionador de imágenes gratis online',
    subtitle:
      'Nuestro redimensionador de imágenes en el navegador permite a diseñadores web, vendedores online, blogueros y usuarios de todos los días ajustar sus fotos a dimensiones exactas en píxeles o a proporciones en porcentaje en cuestión de segundos. Bloquee la proporción para evitar distorsiones, aplique plantillas de redes sociales con un clic o procese una carpeta entera en local, sin subir nada a ningún servidor.',
    howToSteps: [
      {
        title: 'Suba una o varias imágenes',
        description:
          'Arrastre archivos JPG, PNG, WebP, HEIC, GIF, BMP o SVG de hasta 20 MB cada uno a la zona de subida, explore los archivos de su dispositivo o péguelos directamente con Ctrl+V.',
      },
      {
        title: 'Elija el modo Por píxeles o Por porcentaje',
        description:
          'Cambie entre Por píxeles (An × Al) para escribir dimensiones exactas de hasta 12 000 px, o Por porcentaje (%) para escalar entre el 10 % y el 200 % con el deslizador o los botones rápidos.',
      },
      {
        title: 'Ajuste el bloqueo de proporción, el modo de ajuste o las plantillas',
        description:
          'Mantenga la proporción bloqueada para escalar sin deformar, o desbloquéela para elegir Contener, Cubrir o Estirar exacto; también puede pulsar una plantilla como Publicación de Instagram, Miniatura de YouTube o Full HD.',
      },
      {
        title: 'Elija el formato de salida y la calidad',
        description:
          'Seleccione la salida Original, JPG, PNG o WebP, ajuste el deslizador de calidad de salida del 10 % al 100 % y elija un color de fondo mate si exporta en JPG.',
      },
      {
        title: 'Aplique los ajustes y compare visualmente',
        description:
          'Pulse Redimensionar todo para procesar su lote y abra la vista Comparar en cualquier tarjeta para revisar la nitidez y el ahorro en bytes antes y después, lado a lado.',
      },
      {
        title: 'Descargue archivos individuales o un archivo ZIP',
        description:
          'Guarde cada imagen redimensionada con su botón Descargar, o pulse Descargar todo (ZIP) cuando redimensione dos o más archivos a la vez.',
      },
    ],
    features: [
      {
        title: 'Píxeles exactos y escala por porcentaje',
        description:
          'Redimensiona a un ancho y alto exactos en píxeles o escala de forma limpia del 10 % al 200 %, conservando automáticamente la proporción cuando está bloqueada.',
      },
      {
        title: 'Modos de ajuste inteligentes (Exacto, Contener, Cubrir)',
        description:
          'Elija cómo encajan las imágenes en dimensiones fijas predefinidas: estirar al tamaño exacto, encajar dentro sin recortar o recortar centrado para rellenar.',
      },
      {
        title: 'Redimensionado por lotes y descarga ZIP',
        description:
          'Procesa decenas de fotos de producto o miniaturas de blog en un solo lote y descárgalas todas dentro de un único archivo ZIP.',
      },
      {
        title: 'Procesamiento 100 % local en el navegador',
        description:
          'Sus fotos se redimensionan con HTML5 Canvas en su propio dispositivo y nunca se suben a ningún servidor externo.',
      },
    ],
    faqs: [
      {
        question: '¿En qué se diferencia Por píxeles de Por porcentaje en el redimensionador de imágenes?',
        answer:
          'Por píxeles le permite escribir un ancho y alto exactos en píxeles (hasta 12 000 px) o aplicar plantillas de redes sociales directamente. Por porcentaje escala cada imagen subida de forma proporcional entre el 10 % y el 200 % con el deslizador o con los botones rápidos del 25 %, 50 %, 75 %, 150 % y 200 %.',
      },
      {
        question: '¿Qué ocurre al activar o desactivar el bloqueo de proporción?',
        answer:
          'Con la proporción bloqueada, al escribir un nuevo ancho la altura se actualiza automáticamente en proporción exacta a su primera foto subida (y viceversa). Al desbloquearla puede escribir valores independientes de ancho y alto y aparecen las opciones de ajuste Contener, Cubrir y Estirar exacto.',
      },
      {
        question: '¿Cuándo debería elegir Contener, Cubrir o Estirar exacto?',
        answer:
          'Elija Contener (sin recorte) cuando quiera conservar todo el sujeto dentro del cuadro sin recortar ningún borde. Elija Cubrir (recorte centrado) para rellenar dimensiones exactas predefinidas recortando el sobrante, o Estirar exacto si lo importante es respetar los límites en píxeles aunque se pierda la proporción.',
      },
      {
        question: '¿Qué plantillas de redes sociales y pantalla incluye la herramienta?',
        answer:
          'Tiene plantillas de un clic para Publicación de Instagram (1080×1080), Historia de Instagram (1080×1920), Miniatura de YouTube (1280×720), Portada de Facebook (851×315), Cabecera de X (1500×500) y Full HD (1920×1080). Al pulsar cualquier plantilla se cambia al modo Por píxeles y se rellenan esas dimensiones exactas.',
      },
      {
        question: '¿Puedo ampliar una imagen pequeña más allá de su resolución original?',
        answer:
          'Sí, puede escribir valores en píxeles más grandes o escalar hasta el 200 % en el modo Por porcentaje con la interpolación de HTML5 Canvas. Tenga en cuenta que ampliar mucho gráficos de baja resolución hace que los bordes se vean más suaves, porque Canvas estira los píxeles existentes en lugar de inventar detalle nuevo.',
      },
      {
        question: '¿Cuál es la dimensión máxima en píxeles y el tamaño máximo de archivo al redimensionar?',
        answer:
          'Cada imagen subida puede pesar hasta 20 MB y los campos de píxeles admiten anchos y altos de hasta 12 000 px. Los lienzos muy grandes pueden consumir mucha memoria RAM del navegador en el celular, así que mantenerse entre 4 000 y 6 000 px hace que el procesamiento sea rápido.',
      },
      {
        question: '¿Qué formatos de entrada admite este redimensionador de imágenes?',
        answer:
          'Puede subir archivos JPG, PNG, WebP, HEIC/HEIF de iPhone, GIF, BMP y SVG. Las imágenes HEIC se decodifican en local en su navegador antes de redimensionarse en Canvas, y puede exportar los resultados como Original, JPG, PNG o WebP.',
      },
      {
        question: '¿El redimensionado conserva los fondos transparentes de PNG y WebP?',
        answer:
          'Sí, la transparencia se mantiene siempre que conserve el formato Original (para PNG/WebP) o elija explícitamente PNG o WebP como salida. Si cambia el formato de salida a JPG, las zonas transparentes se rellenan con el color de fondo mate que elija (blanco por defecto).',
      },
      {
        question: '¿Cómo gestiona el redimensionado por lotes fotos horizontales y verticales mezcladas?',
        answer:
          'Cuando sube un lote en el modo Por píxeles con la proporción bloqueada, cada foto conserva sus proporciones naturales usando el límite de ancho, sin deformar los retratos en marcos horizontales. Si quiere dimensiones fijas idénticas en todo el lote, desbloquee la proporción y elija Contener o Cubrir.',
      },
      {
        question: '¿Por qué la primera subida rellena automáticamente el ancho y el alto?',
        answer:
          'Cuando suelta su primera foto en una cola vacía, el redimensionador fija el ancho en un máximo de 1 200 px y calcula la altura correspondiente en proporción. Puede cambiar esos números de inmediato y pulsar Redimensionar todo para procesar de nuevo todas las imágenes de la lista.',
      },
      {
        question: '¿Cómo reviso la nitidez después de reducir una foto?',
        answer:
          'Pulse Comparar en cualquier tarjeta de resultado o haga clic en su miniatura para abrir el modal de comparación antes y después. Muestra las dimensiones original y redimensionada, el ahorro en bytes y un deslizador dividido para que revise los detalles finos antes de descargar.',
      },
      {
        question: '¿Puedo cambiar el formato de salida y redimensionar a la vez?',
        answer:
          'Sí, puede elegir JPG, PNG o WebP en el selector de formato de salida y ajustar el deslizador de calidad (del 10 % al 100 %) antes de pulsar Redimensionar todo. Así reduce las dimensiones y convierte a un formato web ligero en una sola pasada.',
      },
      {
        question: '¿Los GIF animados siguen animados después de redimensionarlos aquí?',
        answer:
          'No, HTML5 Canvas dibuja el primer fotograma del GIF al redimensionarlo a dimensiones estáticas y exporta una imagen de un solo fotograma. Si quiere conservar la animación y reducir el peso del archivo, use nuestra herramienta específica Compresor de GIF.',
      },
      {
        question: '¿Mis fotos se suben a un servidor externo durante el redimensionado?',
        answer:
          'No, todo el redimensionado ocurre dentro de la pestaña de su navegador con la memoria local de HTML5 Canvas y JavaScript. Ni sus imágenes originales ni las redimensionadas viajan por la red ni tocan ningún almacenamiento remoto.',
      },
      {
        question: '¿Cómo descargo decenas de imágenes redimensionadas sin pulsar una por una?',
        answer:
          'Cuando dos o más imágenes terminan de redimensionarse, aparece una barra de Lote listo sobre la lista con un botón Descargar todo (ZIP). Al pulsarlo se empaquetan todos los archivos redimensionados en una sola descarga llamada resized_images_compressmypic.zip.',
      },
      {
        question: '¿Puedo pegar una captura de pantalla desde el portapapeles para redimensionarla?',
        answer:
          'Sí, pulse Ctrl+V (o Cmd+V en Mac) mientras está en la página para soltar una captura copiada directamente en la cola de subida. Carga sus dimensiones de inmediato y se redimensiona con su configuración actual de ancho, alto o porcentaje.',
      },
      {
        question: '¿Por qué mi PNG redimensionado pesa más en bytes aunque tenga menos píxeles?',
        answer:
          'Si convierte un JPG comprimido a PNG sin pérdida al redimensionar, el PNG conserva la codificación de píxeles sin pérdida y puede pesar más que el JPEG original. Cambie el formato de salida a WebP o JPG con una calidad del 80 %–85 % para obtener archivos web mucho más ligeros.',
      },
      {
        question: '¿Qué ajuste de calidad es mejor al exportar imágenes JPG o WebP redimensionadas?',
        answer:
          'El ajuste predeterminado del 85 % equilibra bordes nítidos y degradados limpios con archivos pequeños para webs, blogs y tiendas online. Baje la calidad hacia el 65 %–75 % si necesita un ahorro de kilobytes más estricto, o súbala al 95 %–100 % para preparar impresiones.',
      },
      {
        question: '¿Puedo redimensionar gráficos vectoriales SVG de forma limpia a PNG de alta resolución?',
        answer:
          'Sí, al subir un SVG en línea puede escribir dimensiones objetivo más grandes antes de rasterizarlo en Canvas. Los SVG autocontenidos con formas y degradados en línea escalan con nitidez, aunque los enlaces externos a fuentes o imágenes dentro del SVG están bloqueados por la seguridad del navegador.',
      },
      {
        question: '¿Este redimensionador de imágenes funciona sin conexión o en el celular?',
        answer:
          'Sí, funciona sin problemas en Safari de iOS, Chrome de Android y navegadores de escritorio, con deslizadores y plantillas táctiles. Como los cálculos se ejecutan en local dentro de su navegador una vez cargada la página, nada depende de la velocidad de subida.',
      },
    ],
    relatedSlugs: ['/', '/image-converter', '/rotate-flip-image', '/image-dimensions-checker'],
  },

  {
    slug: '/image-converter',
    name: 'Conversor de imágenes',
    shortDescription: 'Convierta JPG, PNG, WebP, HEIC, BMP, GIF y SVG en su navegador.',
    category: 'convert',
    seoTitle: 'Conversor de imágenes gratis online – JPG, PNG, WebP y HEIC',
    seoDescription:
      'Convierta imágenes gratis online entre JPG, PNG, WebP, HEIC, SVG, BMP, GIF y AVIF. Conversión por lotes en su dispositivo, con calidad ajustable y descarga ZIP.',
    h1: 'Conversor de imágenes gratis online',
    subtitle:
      'Pensado para fotógrafos de iPhone, desarrolladores web, profesionales de marketing y equipos de oficina, este conversor de imágenes en el navegador cambia sin esfuerzo entre JPG, PNG, WebP, HEIC, SVG, BMP, GIF y AVIF. Ajuste la calidad de salida, elija un color de relleno mate para los recortes transparentes y convierta lotes enteros en local sin subir archivos.',
    howToSteps: [
      {
        title: 'Añada uno o varios archivos de imagen',
        description:
          'Suelte imágenes JPG, PNG, WebP, HEIC, SVG, BMP, GIF o AVIF (hasta 20 MB cada una) en la zona de subida, seleccione archivos desde el disco o péguelas con Ctrl+V.',
      },
      {
        title: 'Elija el formato de salida',
        description:
          'Seleccione WebP (el más ligero para web), JPG (universal) o PNG (sin pérdida y con transparencia) en Convertir a formato.',
      },
      {
        title: 'Defina el color de relleno para la salida JPG',
        description:
          'Al convertir gráficos PNG, WebP o SVG transparentes a JPG, pulse la muestra de color de relleno de transparencia para elegir un fondo blanco, negro o cualquier color hexadecimal.',
      },
      {
        title: 'Ajuste el deslizador de calidad si lo necesita',
        description:
          'Arrastre el deslizador de calidad entre el 10 % y el 100 % para salidas WebP o JPG (el deslizador se desactiva automáticamente para PNG sin pérdida).',
      },
      {
        title: 'Convierta y revise los resultados',
        description:
          'Pulse Convertir todo para volver a codificar su cola con los ajustes actualizados y pulse Comparar en cualquier elemento para comprobar la fidelidad visual y el cambio en bytes.',
      },
      {
        title: 'Descargue archivos individuales o en ZIP',
        description:
          'Guarde cada archivo convertido con su botón Descargar, o pulse Descargar todo (ZIP) para descargar todo el lote junto.',
      },
    ],
    features: [
      {
        title: 'Amplio soporte de formatos de entrada',
        description:
          'Convierta fotos HEIC/HEIF de iPhone, gráficos vectoriales SVG, archivos BMP antiguos, imágenes WebP, PNG y JPEG directamente en su navegador.',
      },
      {
        title: 'Conversión segura con transparencia',
        description:
          'Conserva la transparencia alfa al convertir a PNG o WebP y le permite personalizar el color de fondo mate al convertir a JPG.',
      },
      {
        title: 'Conversión por lotes y exportación ZIP',
        description:
          'Convierta carpetas enteras de imágenes a la vez con ajustes de calidad uniformes y descárgalas todas con un clic.',
      },
      {
        title: 'Motor privado en el cliente',
        description:
          'Incluso la decodificación de HEIC se ejecuta en local mediante WebAssembly en su navegador: cero subidas al servidor y cero marcas de agua.',
      },
    ],
    faqs: [
      {
        question: '¿Qué formatos de entrada y salida admite este conversor de imágenes?',
        answer:
          'Puede cargar archivos JPG, PNG, WebP, HEIC/HEIF de iPhone, SVG, BMP, GIF y AVIF decodificados por el navegador, de hasta 20 MB por imagen. Las salidas se exportan como WebP (el más ligero para web), JPG (universal) o PNG (sin pérdida y con transparencia).',
      },
      {
        question: '¿Cómo se convierten las fotos HEIC y HEIF de iPhone sin servidor?',
        answer:
          'Nuestro conversor carga un decodificador HEIC de WebAssembly directamente en la pestaña de su navegador. Decodifica el contenedor HEIC en local, en su CPU, y dibuja la foto en HTML5 Canvas para exportar archivos estándar JPG, PNG o WebP.',
      },
      {
        question: '¿Por qué se desactiva el deslizador de calidad al elegir PNG?',
        answer:
          'El PNG usa compresión DEFLATE sin pérdida, es decir, codifica cada píxel con exactitud sin descartar detalle visual según un porcentaje de calidad. El deslizador se activa en cuanto cambia a WebP o JPG.',
      },
      {
        question: '¿Qué ocurre con las zonas transparentes al convertir PNG o WebP a JPG?',
        answer:
          'Como el JPG no admite canal de transparencia alfa, los píxeles transparentes deben aplanarse sobre un fondo sólido. Use el selector de color de relleno de transparencia (blanco por defecto) para fundir los bordes transparentes sobre cualquier color.',
      },
      {
        question: '¿Puedo convertir imágenes AVIF de webs modernas a JPG o PNG?',
        answer:
          'Sí, las versiones modernas de Chrome, Edge, Firefox y Safari decodifican archivos AVIF de forma nativa en su navegador. Una vez decodificados, la herramienta los exporta a JPG, PNG o WebP universales sin ningún servicio externo en la nube.',
      },
      {
        question: '¿Los logotipos vectoriales SVG se conservan bien al convertirlos a PNG o WebP?',
        answer:
          'Sí, los archivos SVG autocontenidos con rutas, rellenos y degradados en línea se rasterizan de forma limpia en sus dimensiones intrínsecas y conservan los fondos transparentes. Tenga en cuenta que los SVG que dependen de fuentes web externas o URL de imágenes remotas están restringidos por la seguridad de Canvas del navegador.',
      },
      {
        question: '¿Convertir un JPG con pérdida a PNG recupera el detalle perdido de la foto?',
        answer:
          'No, volver a guardar un JPG ya comprimido como PNG no puede recuperar el detalle descartado durante la codificación JPEG original, y normalmente aumenta mucho el tamaño del archivo. Elija PNG solo si necesita almacenamiento sin pérdida antes de futuras ediciones en varios pasos.',
      },
      {
        question: '¿Puedo mezclar distintos formatos en una sola conversión por lotes?',
        answer:
          'Sí, puede soltar fotos HEIC, capturas BMP, logotipos PNG y descargas AVIF juntos en la misma cola. Cada archivo válido se convierte al formato objetivo que eligió y se descarga todo en un único archivo ZIP.',
      },
      {
        question: '¿Qué pasa si subo un GIF animado al conversor general?',
        answer:
          'Canvas dibuja el fotograma inicial del GIF y lo convierte en un archivo WebP, JPG o PNG estático. Si quiere reducir un GIF animado manteniendo el movimiento, cambie a nuestra herramienta Compresor de GIF.',
      },
      {
        question: '¿Por qué la salida WebP redujo tanto el tamaño de mi captura PNG?',
        answer:
          'A diferencia del PNG sin pérdida, el WebP con calidad del 85 % combina compresión predictiva moderna con soporte completo de transparencia alfa. Eso suele reducir mucho las capturas de interfaz y los recortes de producto grandes sin perder legibilidad ni suavidad en los bordes.',
      },
      {
        question: '¿Cómo compruebo la calidad del antes y el después antes de guardar las imágenes convertidas?',
        answer:
          'Pulse Comparar en cualquier tarjeta convertida (o haga clic en su miniatura) para abrir el modal de comparación interactivo. Puede comparar los tamaños en bytes del original y del convertido y arrastrar el tirador dividido sobre bordes y texto.',
      },
      {
        question: '¿Mis fotos o capturas sensibles se envían alguna vez por internet?',
        answer:
          'Nunca: toda la decodificación, el aplanado de color y la recodificación ocurren estrictamente en la memoria local de su navegador. Nada se sube, se guarda en servidores ni se comparte con terceros.',
      },
      {
        question: '¿Qué ajuste de calidad se recomienda para convertir fotos a WebP o JPG?',
        answer:
          'El 85 % predeterminado funciona bien tanto para recursos WebP como para JPG universales, sin bloqueo de compresión perceptible. Puede subirlo al 92 %–95 % para fotos de portafolio o bajarlo al 70 %–75 % para límites de ancho de banda ajustados.',
      },
      {
        question: '¿Cómo se generan los nombres de archivo de salida tras la conversión?',
        answer:
          'Cada archivo convertido conserva su nombre base saneado y cambia automáticamente la extensión a .webp, .jpg o .png. Puede ver el nombre exacto de salida y el tamaño convertido en bytes en cada tarjeta antes de descargar.',
      },
      {
        question: '¿Puedo convertir mapas de bits BMP de programas antiguos de Windows a WebP o JPG?',
        answer:
          'Sí, los archivos .bmp sin comprimir se decodifican de forma nativa en el navegador y se convierten de inmediato a archivos JPG o WebP compactos. Eliminar las cabeceras de mapa de bits sin comprimir reduce el peso de almacenamiento de forma drástica.',
      },
      {
        question: '¿Qué ocurre si un archivo de mi lote está dañado o no se puede leer?',
        answer:
          'Cada imagen se procesa de forma independiente, así que un solo archivo dañado o no compatible muestra una insignia de error en línea sin detener el resto de su cola. Todas las imágenes válidas se convierten y se empaquetan en su descarga ZIP.',
      },
      {
        question: '¿Convertir con HTML5 Canvas elimina los metadatos EXIF ocultos de la cámara?',
        answer:
          'Sí, dibujar una imagen en Canvas y codificar un JPG, PNG o WebP nuevo produce un mapa de bits limpio sin etiquetas GPS EXIF ni metadatos de serie de la cámara. Eso protege su privacidad al compartir los archivos convertidos en internet.',
      },
      {
        question: '¿Puedo convertir imágenes pegadas directamente desde el portapapeles?',
        answer:
          'Sí, copie una imagen o haga una captura de pantalla y pulse Ctrl+V en cualquier parte de la página para añadirla directamente a la cola del conversor. Se codifica de inmediato a su formato objetivo activo.',
      },
      {
        question: '¿Hay un límite diario o de cantidad de archivos en las conversiones por lotes?',
        answer:
          'No, no hay cuentas, marcas de agua ni cuotas diarias de conversión. Solo le limitan la comprobación de 20 MB por archivo y la memoria RAM disponible del navegador de su dispositivo.',
      },
      {
        question: '¿Cuándo conviene usar Descargar todo (ZIP) en lugar de la descarga individual?',
        answer:
          'Use el botón Descargar de cada tarjeta cuando guarde una sola foto convertida rápidamente. Cuando dos o más imágenes terminan de convertirse, pulse Descargar todo (ZIP) en la barra de resumen del lote para agruparlas en converted_images_compressmypic.zip.',
      },
    ],
    relatedSlugs: ['/', '/image-resizer', '/image-to-pdf', '/favicon-generator'],
  },

  {
    slug: '/image-cropper',
    name: 'Recortador de imágenes',
    shortDescription: 'Recorta fotos de forma interactiva con tiradores, proporciones y zoom.',
    category: 'crop-edit',
    seoTitle: 'Recortador de imágenes gratis – Recorta fotos online',
    seoDescription:
      'Recorta imágenes gratis online con tiradores, proporciones de 1:1 a 16:9 y zoom hasta el 300 %. Recorta JPG, PNG, WebP y HEIC en su navegador, sin subir nada.',
    h1: 'Recortador de imágenes gratis online',
    subtitle:
      'Pensado para creadores sociales, diseñadores, estudiantes y vendedores de comercio electrónico, nuestro recortador de imágenes interactivo le permite encuadrar y recortar fotos con precisión directamente en su navegador. Fije proporciones populares de 1:1 a 16:9, amplíe hasta el 300 % para bordes ajustados y exporte recortes limpios en local, sin subidas.',
    howToSteps: [
      {
        title: 'Suba una imagen para recortar',
        description:
          'Suelte una imagen JPG, PNG, WebP, HEIC, GIF, BMP o SVG de hasta 20 MB en la zona de subida, explore los archivos de su dispositivo o péguela con Ctrl+V.',
      },
      {
        title: 'Seleccione una proporción predefinida',
        description:
          'Mantenga Libre para recortar sin restricciones o pulse 1:1, 4:3, 16:9, 3:2, 4:5 o 9:16 en Proporción predefinida para fijar el encuadre.',
      },
      {
        title: 'Arrastre el marco y los tiradores de tamaño',
        description:
          'Mueva el cuadro de recorte sobre su sujeto con la cuadrícula de tercios y tire de cualquiera de los 8 tiradores de bordes o esquinas mientras ve en vivo el ancho y alto del recorte.',
      },
      {
        title: 'Amplíe o restablezca el lienzo completo',
        description:
          'Use los botones de Zoom (del 100 % al 300 % en pasos del 25 %) para alinear bordes con precisión, o pulse Seleccionar todo para volver a la imagen completa.',
      },
      {
        title: 'Elija el formato de salida y la calidad',
        description:
          'Seleccione la salida Original, JPG, PNG o WebP y ajuste el deslizador de calidad (del 10 % al 100 %) al guardar en formatos con pérdida.',
      },
      {
        title: 'Recorte y descargue su archivo',
        description:
          'Pulse Recortar y descargar para renderizar el rectángulo seleccionado a la resolución original completa y guardarlo con las dimensiones en el nombre del archivo.',
      },
    ],
    features: [
      { title: 'Tiradores interactivos de arrastre y tamaño', description: 'Tiradores suaves de ratón y táctil le permiten recortar cualquier región hasta el píxel exacto.' },
      { title: 'Proporciones predefinidas', description: 'Cambie entre Libre, 1:1 Cuadrado, 4:3, 16:9, 3:2, 4:5 de Instagram y 9:16 de Historia.' },
      { title: 'Zoom y lectura de dimensiones en vivo', description: 'Amplía para encuadrar con precisión y ve el ancho × alto exactos de salida en tiempo real.' },
      { title: 'Procesamiento 100 % privado en local', description: 'Sus fotos se recortan en su dispositivo con HTML5 Canvas, sin subidas a ningún servidor.' },
    ],
    faqs: [
      {
        question: '¿El recorte reduce la calidad dentro del rectángulo seleccionado?',
        answer:
          'No, el recortador extrae sus coordenadas seleccionadas directamente de la resolución original completa guardada en la memoria del navegador, no del cuadro de vista previa escalado. Al guardar como PNG sin pérdida, los píxeles dentro de su recorte permanecen idénticos a los del original.',
      },
      {
        question: '¿Qué proporciones predefinidas incluye el recortador?',
        answer:
          'Puede cambiar entre Libre (cualquier rectángulo), 1:1 (avatares cuadrados), 4:3, 16:9 (panorámico/YouTube), 3:2 (estándar de réflex), 4:5 (retrato de Instagram) y 9:16 (Historias/Reels). Al pulsar una proporción, se centra automáticamente un marco a juego.',
      },
      {
        question: '¿Cómo se comportan los 8 tiradores cuando hay una proporción activa?',
        answer:
          'Los cuatro tiradores de esquina y los de borde mantienen su proporción seleccionada automáticamente y se limitan limpiamente dentro de los bordes de la imagen. Para ajustar el ancho y el alto de forma independiente de nuevo, pulse simplemente la proporción Libre.',
      },
      {
        question: '¿Para qué sirve la cuadrícula de tercios dentro del cuadro de selección?',
        answer:
          'La sutil cuadrícula de 3×3 divide su marco de recorte en tercios para que pueda alinear horizontes, ojos o centros de producto con precisión mientras arrastra. Es solo una guía visual en pantalla y nunca aparece en su imagen exportada.',
      },
      {
        question: '¿Hasta dónde puedo ampliar para encuadrar con detalle?',
        answer:
          'Use los botones Ampliar (+) y Reducir (−) de la barra de vista para ampliar suavemente del 100 % hasta el 300 % en incrementos del 25 %. Cuando amplía más del 100 %, desplácese dentro del escenario de vista previa para recortar bordes finos.',
      },
      {
        question: '¿Qué hace el botón Seleccionar todo en Opciones de recorte?',
        answer:
          'Al pulsar Seleccionar todo, la proporción vuelve a Libre, el cuadro de recorte se expande para cubrir el 100 % del ancho y alto de su imagen y el zoom se restablece al 100 %. Le da un punto de partida limpio sin volver a subir nada.',
      },
      {
        question: '¿Puedo ver las dimensiones exactas en píxeles antes de descargar?',
        answer:
          'Sí, tanto la lectura de Selección sobre el escenario como las tarjetas de Ancho de recorte y Alto de recorte en Opciones de recorte se actualizan en vivo en píxeles mientras arrastra. El nombre del archivo exportado también incluye esas dimensiones exactas del recorte (por ejemplo, foto_1080x1080_cropped.jpg).',
      },
      {
        question: '¿El recorte funciona con gestos táctiles en móviles y tabletas?',
        answer:
          'Sí, el cuadro de recorte y los tiradores usan eventos Pointer seguros para el tacto, diseñados tanto para ratones de escritorio como para pantallas táctiles móviles. Puede arrastrar el marco y tirar de los tiradores cómodamente en iOS y Android.',
      },
      {
        question: '¿El recorte conserva los fondos transparentes de PNG y WebP?',
        answer:
          'Sí, mantener el formato Original (de PNG/WebP) o elegir PNG o WebP conserva la transparencia alfa completa dentro de la región recortada. Elegir JPG aplana los píxeles transparentes limpiamente sobre blanco sólido.',
      },
      {
        question: '¿Por qué desaparece el deslizador de calidad al elegir PNG?',
        answer:
          'El PNG usa compresión sin pérdida, así que un ajuste de calidad con pérdida en porcentaje no se aplica. Cambie el formato de salida a Original (para JPEG), JPG o WebP para mostrar el deslizador de calidad del 10 %–100 %.',
      },
      {
        question: '¿Puedo recortar varias imágenes distintas a la vez?',
        answer:
          'Este recortador interactivo procesa una imagen a la vez para que pueda inspeccionar y encuadrar cada sujeto individualmente con tiradores y zoom. Una vez descargada, pulse el icono de papelera para cargar su siguiente foto de inmediato.',
      },
      {
        question: '¿Qué formatos de archivo se pueden subir al recortador?',
        answer:
          'Puede recortar imágenes JPG, PNG, WebP, HEIC/HEIF de iPhone, GIF, BMP y SVG de hasta 20 MB por archivo. Tenga en cuenta que los GIF animados recortan su fotograma inicial como salida estática.',
      },
      {
        question: '¿Los retratos privados o documentos se suben a un servidor al recortarlos?',
        answer:
          'No, todo el dibujo en canvas y la codificación del blob se ejecutan en local dentro de su navegador web. Nada se transmite por la red ni se guarda de forma externa.',
      },
      {
        question: '¿Puedo pegar una captura de pantalla para recortarla directamente?',
        answer:
          'Sí, haga una captura de pantalla y pulse Ctrl+V (o Cmd+V en Mac) en la página mientras no hay ninguna imagen cargada. Se abre directamente dentro de la vista de recorte, lista para encuadrar.',
      },
      {
        question: '¿Cómo recorto una foto rectangular en un avatar cuadrado limpio para el perfil?',
        answer:
          'Pulse el botón 1:1 en Proporción predefinida, arrastre el cuadrado blanco sobre la cara o el logotipo y ajuste los tiradores de esquina hasta quedar satisfecho. Después pulse Recortar y descargar para guardar una imagen cuadrada exacta.',
      },
      {
        question: '¿Qué calidad trae por defecto al exportar recortes JPG o WebP?',
        answer:
          'La calidad es del 92 % por defecto, así que los JPEG y WebP recortados conservan una textura fotográfica nítida sin un peso de archivo excesivo. Baje hacia el 75 %–85 % si además quiere un tamaño de subida menor.',
      },
      {
        question: '¿El recorte elimina también los datos GPS EXIF incrustados?',
        answer:
          'Sí, exportar la región recortada mediante un HTML5 Canvas nuevo crea un mapa de bits limpio sin las etiquetas EXIF o GPS del JPEG original. Eso ayuda a proteger su ubicación y la privacidad de su dispositivo al compartir fotos recortadas.',
      },
      {
        question: '¿Por qué el escenario oscurece todo lo que queda fuera de mi cuadro de selección?',
        answer:
          'La superposición oscura semitransparente atenúa las regiones que se recortarán. Ese contraste visual le ayuda a juzgar la composición y el equilibrio de tercios con claridad antes de pulsar Recortar y descargar.',
      },
      {
        question: '¿Puedo sustituir la foto actual rápidamente después de descargar un recorte?',
        answer:
          'Sí, pulse el icono rojo de papelera en la esquina superior derecha de la cabecera de la vista de recorte en cualquier momento. Eso borra la foto activa y vuelve limpiamente a la zona de subida para su siguiente imagen.',
      },
      {
        question: '¿Hay algún coste, registro o marca de agua en las exportaciones recortadas?',
        answer:
          'No, el recortador de imágenes es completamente gratis, sin cuentas ni muros de pago. Cada foto recortada se exporta limpia a resolución completa, sin marcas de agua añadidas.',
      },
    ],
    relatedSlugs: ['/image-resizer', '/rotate-flip-image', '/round-image-corners', '/'],
  },

  {
    slug: '/image-watermark',
    name: 'Marca de agua',
    shortDescription: 'Añada marcas de agua de texto o logotipo, arrastre o repita en mosaico sobre sus fotos.',
    category: 'crop-edit',
    seoTitle: 'Añadir marca de agua gratis – Texto y logotipo online',
    seoDescription:
      'Proteja sus fotos con una marca de agua gratis en su navegador. Añada texto personalizado o logotipos PNG/SVG, arrastre para colocarla o repítala en diagonal.',
    h1: 'Herramienta gratis online para añadir marca de agua',
    subtitle:
      'Diseñada para fotógrafos, ilustradores, vendedores de Etsy y agencias digitales, esta herramienta privada del navegador añade una marca de agua nítida de texto o logotipo sin subidas al servidor. Arrastre su marca libremente por el lienzo, ajústela a 9 posiciones predefinidas o repita un patrón inclinado por toda la foto.',
    howToSteps: [
      {
        title: 'Suba su foto base',
        description:
          'Suelte una imagen JPG, PNG, WebP, HEIC, GIF, BMP o SVG de hasta 20 MB en la zona de subida, explore los archivos desde el disco o péguela con Ctrl+V.',
      },
      {
        title: 'Elija Marca de agua de texto o Imagen de logotipo',
        description:
          'Elija Marca de agua de texto para escribir su texto de marca, elegir el color y ajustar el tamaño (del 2 % al 20 %), o elija Imagen de logotipo para subir un logotipo PNG o SVG transparente (del 5 % al 60 % de ancho).',
      },
      {
        title: 'Ajuste la opacidad y la rotación',
        description:
          'Defina la opacidad desde un sutil 5 % hasta un sólido 100 % e incline la rotación entre −180° y +180° en tiempo real.',
      },
      {
        title: 'Colóquela libremente o active el patrón repetido en mosaico',
        description:
          'Arrastre su marca de agua directamente sobre la imagen de vista previa, pulse una posición predefinida de 9 puntos (de TL a BR) o active el Patrón repetido en mosaico y ajuste el espaciado (del 15 % al 60 %).',
      },
      {
        title: 'Seleccione el formato de salida y la calidad',
        description:
          'Elija la salida Orig, JPG, PNG o WebP y defina la calidad (del 10 % al 100 %) al guardar en formatos con pérdida.',
      },
      {
        title: 'Descargue su imagen con marca de agua',
        description:
          'Pulse Descargar imagen con marca de agua para componer la superposición a la resolución original completa de la imagen y guardarla como <nombre>_watermarked.',
      },
    ],
    features: [
      { title: 'Marcas de agua de texto y logotipo', description: 'Use tipografía personalizada nítida o suba el logotipo de su marca en PNG/SVG transparente.' },
      { title: 'Arrastrar para colocar + 9 posiciones predefinidas', description: 'Coloque su marca en cualquier esquina, justo en el centro o arrástrela libremente por el lienzo.' },
      { title: 'Protección diagonal en mosaico', description: 'Active la marca de agua en mosaico para repetir su texto o logotipo por toda la foto con espaciado ajustable.' },
      { title: 'Privacidad en el cliente', description: 'Añada marcas de agua a pruebas y fotos de portafolio en local sin enviar los originales a servidores externos.' },
    ],
    faqs: [
      {
        question: '¿Puedo usar texto personalizado y mi propio logotipo transparente como marca de agua?',
        answer:
          'Sí, cambia entre Marca de agua de texto e Imagen de logotipo en la parte superior del panel de controles. El modo de texto admite frase personalizada, color hexadecimal y escala de tamaño, mientras que el modo de logotipo acepta archivos de logotipo PNG, SVG o cualquier otro formato compatible y transparente.',
      },
      {
        question: '¿Cómo protege mejor el patrón repetido en mosaico las pruebas de cliente que un solo sello en una esquina?',
        answer:
          'Las marcas de una sola esquina se pueden recortar con facilidad, mientras que al activar el Patrón repetido en mosaico se estampa su texto o logotipo girado en una cuadrícula escalonada por todo el marco. Use el deslizador de espaciado (del 15 % al 60 %) para controlar la densidad de la cuadrícula.',
      },
      {
        question: '¿Por qué se ocultan las posiciones predefinidas al activar el patrón repetido en mosaico?',
        answer:
          'Las posiciones predefinidas y el arrastre sirven para colocar una sola marca de agua en coordenadas concretas (TL, TC, TR, ML, C, MR, BL, BC, BR). Desactive el Patrón repetido en mosaico cuando quiera arrastrar o fijar un solo sello.',
      },
      {
        question: '¿Cómo se calcula el tamaño del texto en miniaturas pequeñas frente a fotos enormes de cámara?',
        answer:
          'El tamaño de fuente (del 2 % al 20 %) y el ancho del logotipo (del 5 % al 60 %) escalan en proporción al ancho de su imagen. Así su marca de agua se ve igual tanto en una miniatura de producto de 800 px como en una prueba de alta resolución de 4000 px.',
      },
      {
        question: '¿La vista previa reduce la resolución de mi descarga?',
        answer:
          'No, la vista previa interactiva se ajusta a un máximo de 900 px de ancho solo para arrastrar con comodidad en su pantalla. Al pulsar Descargar imagen con marca de agua, el exportador crea un lienzo a resolución completa con las dimensiones exactas en píxeles de su foto original.',
      },
      {
        question: '¿Puedo hacer legible el texto blanco de la marca de agua sobre fondos claros?',
        answer:
          'Sí, la marca de agua de texto dibuja automáticamente una sutil sombra oscura detrás de las letras. Eso mantiene nítidas y legibles las marcas de agua blancas o de color claro sobre cielos brillantes, fondos blancos de producto y zonas claras.',
      },
      {
        question: '¿Qué rangos de opacidad y rotación funcionan mejor para proteger pruebas sin estorbar?',
        answer:
          'Para una marca discreta en una esquina, pruebe una opacidad del 40 %–65 % con rotación de 0° fijada en la posición inferior derecha. Para una protección fuerte de pruebas de stock, use el Patrón repetido en mosaico con opacidad del 25 %–40 % y un ángulo diagonal de −25° o −35°.',
      },
      {
        question: '¿Cómo arrastro una sola marca de agua a un punto personalizado exacto?',
        answer:
          'Con el Patrón repetido en mosaico desactivado, pulse o presione directamente en cualquier punto de la vista previa y arrastre el puntero. La marca de agua le sigue con suavidad y se limita ligeramente dentro de los bordes para no salirse nunca.',
      },
      {
        question: '¿Qué formatos de imagen admite la herramienta para fotos base y logotipos?',
        answer:
          'Tanto la foto principal como la subida del logotipo admiten JPG, PNG, WebP, HEIC/HEIF de iPhone, GIF, BMP y SVG de hasta 20 MB. Tenga en cuenta que los GIF animados se muestran como un único fotograma estático con marca de agua.',
      },
      {
        question: '¿La exportación conserva la transparencia si mi imagen base es un PNG transparente?',
        answer:
          'Sí, al elegir Orig (desde PNG/WebP), PNG o WebP se conserva la transparencia alfa completa fuera de su obra mientras se compone la marca de agua encima. Al elegir JPG, las zonas transparentes se rellenan con blanco sólido.',
      },
      {
        question: '¿Las pruebas originales sin marca de agua se suben alguna vez a servidores externos?',
        answer:
          'No, mantener privadas las pruebas de cliente sin marca de agua es esencial. Cada composición en canvas, pasada de mosaico y exportación final de imagen se ejecuta estrictamente en la memoria local de su navegador, sin subidas por la red.',
      },
      {
        question: '¿Puedo subir una foto base nueva sin perder mi texto, opacidad o ángulo?',
        answer:
          'Sí, pulse Cambiar imagen en la cabecera de la vista previa cuando quiera marcar otra foto. Su texto actual, el logotipo subido, la opacidad, el ángulo de rotación y el diseño de mosaico se mantienen configurados automáticamente.',
      },
      {
        question: '¿Puedo sustituir el logotipo de marca subido más tarde sin recargar la herramienta?',
        answer:
          'Sí, mientras el modo Imagen de logotipo esté seleccionado, pulse Cambiar imagen de logotipo para elegir otro archivo PNG o SVG en cualquier momento. Su foto base actual se actualiza de inmediato.',
      },
      {
        question: '¿Por qué desaparece la calidad al elegir la salida PNG?',
        answer:
          'Las salidas PNG son mapas de bits sin pérdida, así que la calidad de compresión en porcentaje no se aplica. Cambie a Orig (para fuentes JPEG), JPG o WebP para ajustar el deslizador de calidad entre el 10 % y el 100 %.',
      },
      {
        question: '¿Puedo pegar una foto desde el portapapeles para añadirle una marca de agua?',
        answer:
          'Sí, copie una imagen o captura de pantalla y pulse Ctrl+V (o Cmd+V en Mac) cuando la zona de subida está abierta. Se carga directamente en el editor de marcas de agua.',
      },
      {
        question: '¿La marca de agua queda aplanada de forma permanente en el archivo descargado?',
        answer:
          'Sí, la marca de agua se pinta directamente sobre el mapa de bits de salida y se guarda como un JPG, PNG o WebP aplanado (<nombre>_watermarked). No quedan capas editables dentro de la imagen exportada.',
      },
      {
        question: '¿Qué ocurre si dejo vacío el campo de texto de la marca de agua?',
        answer:
          'Si borra por completo el campo de texto de la marca de agua, el editor muestra temporalmente «Marca de agua» en la vista previa. Eso evita una selección vacía invisible mientras escribe una etiqueta nueva.',
      },
      {
        question: '¿Puedo colocar y exportar fotos con marca de agua en un teléfono o iPad?',
        answer:
          'Sí, arrastrar por la vista previa usa eventos Pointer táctiles junto con deslizadores adaptables. Puede marcar fácilmente fotos de portafolio o pruebas directamente en Safari o Chrome móvil.',
      },
      {
        question: '¿Añadir una marca de agua elimina las etiquetas GPS EXIF de la cámara al exportar?',
        answer:
          'Sí, dibujar en un HTML5 Canvas nuevo crea un archivo de salida limpio sin copiar las cabeceras EXIF de la cámara. Su ubicación GPS y los metadatos de serie del dispositivo quedan excluidos de la prueba descargada.',
      },
      {
        question: '¿CompressMyPic añade alguna insignia extra junto a mi propia marca de agua?',
        answer:
          'No, solo se dibuja en su foto el texto o logotipo exacto que configura. Nunca añadimos ninguna marca externa, insignia de esquina ni marca de agua del sitio a sus exportaciones.',
      },
    ],
    relatedSlugs: ['/add-text-to-image', '/image-border-generator', '/remove-image-metadata', '/'],
  },
  {
    slug: '/rotate-flip-image',
    name: 'Rotar y voltear imagen',
    shortDescription: 'Rota 90°, 180° o en ángulos personalizados, y voltea imágenes en horizontal o vertical.',
    category: 'crop-edit',
    seoTitle: 'Rotar imagen online gratis – Gire 90° y voltee',
    seoDescription:
      'Rote imágenes 90°, 180° o en un ángulo personalizado y voltéelas en horizontal o vertical en su navegador. Procese fotos en lote y descárguelas ahora en ZIP.',
    h1: 'Rotar y voltear imagen online',
    subtitle:
      'Corrija fotos torcidas de la cámara, refleje selfis al revés y enderece horizontes inclinados cuando rota imágenes directamente en su navegador. Ideal para fotógrafos, estudiantes que escanean documentos y creadores de contenido: todo se transforma en local, a resolución completa y con exportación por lotes en ZIP.',
    howToSteps: [
      {
        title: 'Suba una o varias imágenes',
        description:
          'Arrastre y suelte archivos JPG, PNG, WebP, HEIC, GIF, BMP o SVG de hasta 20 MB cada uno en la zona de subida, o péguelos directamente con Ctrl+V.',
      },
      {
        title: 'Use los giros rápidos de 90° y 180°',
        description:
          'Haga clic en Girar 90° a la izquierda, Girar 90° a la derecha o 180° en Girar y voltear rápido para girar todas las imágenes de la cola al instante.',
      },
      {
        title: 'Refleje en horizontal o en vertical',
        description:
          'Active Voltear en horizontal para reflejar de izquierda a derecha o Voltear en vertical para invertir de arriba abajo; puede combinar cualquiera de las dos con cualquier ángulo de rotación.',
      },
      {
        title: 'Ajuste ángulos personalizados (de -180° a +180°)',
        description:
          'Arrastre el control deslizante de Ángulo de rotación para enderezar fotos torcidas con grados exactos y luego haga clic en Aplicar ángulo (o en Restablecer a 0° cuando quiera).',
      },
      {
        title: 'Elija el formato de salida',
        description:
          'Seleccione Original, JPG, PNG o WebP según el flujo de trabajo de destino; los cambios se aplican de inmediato a todas sus imágenes.',
      },
      {
        title: 'Compare a simple vista y descargue',
        description:
          'Haga clic en Comparar en cualquier tarjeta para revisar la orientación antes y después, y luego haga clic en Descargar o en Descargar todo (ZIP) para los lotes.',
      },
    ],
    features: [
      {
        title: 'Rotación rápida de 90° y en ángulo personalizado',
        description:
          'Rota con pasos limpios de 90° o ajusta cualquier grado exacto, con cálculo automático de los límites del lienzo para que las esquinas nunca se recorten.',
      },
      {
        title: 'Espejo y volteo instantáneos',
        description:
          'Voltea imágenes en horizontal (selfi espejada) o en vertical (reflejo invertido) con un solo clic.',
      },
      {
        title: 'Transformación por lotes',
        description:
          'Aplica la misma rotación o el mismo volteo a varias fotos subidas a la vez y expórtalas todas en un ZIP.',
      },
      {
        title: 'Salida con pérdida mínima',
        description:
          'Elija el formato Original, PNG para conservar sin pérdidas o WebP y JPG con calidad ajustable.',
      },
    ],
    faqs: [
      {
        question: '¿Rotar una foto en un ángulo personalizado como 15° recorta las esquinas?',
        answer:
          'No, la herramienta calcula automáticamente el ancho y el alto del marco ampliado con trigonometría para los ángulos que no son de 90°. Así, el lienzo se amplía justo lo necesario para que cada píxel de las esquinas originales se mantenga dentro del marco.',
      },
      {
        question: '¿Qué rellena las esquinas triangulares que crea un ángulo de inclinación personalizado?',
        answer:
          'Si mantiene el formato Original en un PNG o WebP, o elige PNG o WebP como salida, esas esquinas exteriores adicionales quedan totalmente transparentes. Si el resultado es JPG, que no admite transparencia, las esquinas se rellenan con un blanco sólido y limpio.',
      },
      {
        question: '¿Puedo rotar 90° y voltear en horizontal al mismo tiempo?',
        answer:
          'Sí, Voltear en horizontal y Voltear en vertical funcionan como interruptores independientes junto a cualquier ángulo de rotación. La etiqueta de cada tarjeta de resultado muestra su combinación exacta, por ejemplo, Girada 90° · Volteada H.',
      },
      {
        question: '¿Por qué al rotar 90° o 270° se intercambian el ancho y el alto en píxeles?',
        answer:
          'Al girar una imagen apaisada de 1920×1080 en 90°, sus ejes rotan y se convierte en una imagen vertical de 1080×1920. Mantener las dimensiones exactas intercambiadas evita estirar o recortar cualquier lado de su foto.',
      },
      {
        question: '¿Cómo corrijo un selfi al revés con el texto reflejado?',
        answer:
          'Suba la foto, haga clic en Restablecer a 0° si no quiere un giro de 90° (la herramienta empieza en 90° al cargar) y active Voltear en horizontal. El texto de camisetas o carteles vuelve de inmediato a su dirección normal de lectura.',
      },
      {
        question: '¿Por qué las imágenes giran 90° automáticamente justo después de subirlas?',
        answer:
          'El estado inicial de giro rápido empieza en 90° para que las fotos torcidas más comunes queden derechas al soltarlas. Puede ajustarlo con Girar 90° a la izquierda, 180°, el control deslizante de ángulo o haciendo clic en Restablecer a 0° cuando solo quiera voltear.',
      },
      {
        question: '¿Qué formatos de imagen puedo rotar y voltear aquí?',
        answer:
          'Suba archivos JPG, PNG, WebP, HEIC/HEIF, GIF, BMP o SVG de hasta 20 MB cada uno. Las opciones de exportación incluyen Original, JPG, PNG y WebP mediante renderizado local en el lienzo del navegador.',
      },
      {
        question: '¿Puedo rotar en lote una carpeta de fotos de teléfono torcidas?',
        answer:
          'Sí, suelte tantas fotos como su navegador maneje con fluidez, haga clic una sola vez en la rotación o el volteo que quiera y todos los elementos se actualizan juntos. Cuando hay varios archivos terminados, Descargar todo (ZIP) exporta rotated_images_compressmypic.zip.',
      },
      {
        question: '¿Rotar un PNG transparente mantiene su fondo transparente?',
        answer:
          'Sí, las zonas transparentes se mantienen transparentes cuando elige Original (desde PNG o WebP), PNG o WebP como salida. Funciona tanto con rotaciones nítidas de 90° como con enderezamientos en ángulos arbitrarios.',
      },
      {
        question: '¿Cómo deshago varios giros sin recargar la página?',
        answer:
          'Haga clic en Restablecer a 0°, justo encima del control deslizante de Ángulo de rotación, en cualquier momento. Eso devuelve la rotación a 0° de inmediato y apaga los volteos horizontal y vertical en toda la cola.',
      },
      {
        question: '¿Por qué puede cambiar ligeramente el tamaño de archivo después de rotar un JPEG?',
        answer:
          'Al rotar los píxeles dentro del lienzo del navegador, el JPEG se vuelve a codificar con una calidad del 90 % en lugar de modificar los bloques sin pérdidas. Si quiere cero artefactos de compresión, elija PNG como salida para conservar los píxeles sin pérdidas.',
      },
      {
        question: '¿Hay una forma sencilla de revisar el antes y el después al enderezar?',
        answer:
          'Haga clic en Comparar en cualquier tarjeta (o en su miniatura) para abrir la ventana de comparación de rotación y volteo. Puede revisar los bordes alineados con el control deslizante interactivo de antes y después antes de guardar.',
      },
      {
        question: '¿Esta herramienta respeta correctamente la orientación de las fotos del iPhone?',
        answer:
          'Sí, los navegadores modernos y nuestro cargador de HEIC normalizan la orientación EXIF al decodificar la imagen en el lienzo antes de aplicar el ángulo que eligió. Lo que ve en la miniatura de la tarjeta coincide con los píxeles de su archivo descargado.',
      },
      {
        question: '¿Puedo enderezar un documento escaneado e inclinado en pasos pequeños de 1°?',
        answer:
          'Sí, arrastre el control deslizante de Ángulo de rotación entre -180° y +180° (paso de 1°) y suelte para ver el documento enderezado. Haga clic en Aplicar ángulo si lo ajusta con las flechas del teclado para aplicarlo a todos los archivos en cola.',
      },
      {
        question: '¿Se suben a algún servidor mis documentos o mis fotos personales?',
        answer:
          'No, la rotación y el volteo se ejecutan al 100 % en local, en su navegador web, mediante transformaciones en el lienzo. Sus imágenes nunca salen de su computadora ni de su teléfono.',
      },
      {
        question: '¿Qué pasa si giro un GIF animado?',
        answer:
          'Al girar un GIF, se extrae y se transforma solo el primer fotograma en una imagen estática. La rotación animada de varios fotogramas no es compatible directamente en esta herramienta.',
      },
      {
        question: '¿Puedo reflejar o girar capturas pegadas directamente desde el portapapeles?',
        answer:
          'Sí, pulse Ctrl+V (o Cmd+V) en cualquier parte de la página después de copiar una imagen o captura. Se une a la cola de lotes y aplica de inmediato sus ajustes activos de rotación y volteo.',
      },
      {
        question: '¿Hay algún límite de tamaño de archivo o de cantidad de giros?',
        answer:
          'Cada subida puede pesar hasta 20 MB por archivo para que su navegador se mantenga ágil. Dentro de ese límite, puede rotar, voltear, restablecer y volver a exportar tantas fotos como necesite, sin cuenta, sin límite diario y sin marca de agua.',
      },
      {
        question: '¿Puedo cambiar el formato de salida a WebP mientras giro un lote de PNG?',
        answer:
          'Sí, al hacer clic en WebP en Formato de salida, su lote se transforma y se exporta de inmediato como imágenes WebP giradas y ligeras. Puede cambiar de formato las veces que quiera sin volver a subir nada.',
      },
      {
        question: '¿Rotar y voltear funciona bien en teléfonos y tabletas táctiles?',
        answer:
          'Sí, todos los botones de rotación, los interruptores de volteo y el control deslizante de ángulo táctil funcionan en Safari móvil y en Chrome para Android. También puede descargar fotos individuales directamente en el carrete o en la carpeta de descargas de su dispositivo.',
      },
    ],
    relatedSlugs: ['/image-resizer', '/', '/image-converter', '/remove-image-metadata'],
  },

  {
    slug: '/image-to-pdf',
    name: 'Imagen a PDF',
    shortDescription: 'Combina imágenes JPG, PNG, WebP y HEIC en un PDF de varias páginas.',
    category: 'convert',
    seoTitle: 'Convertir imagen a PDF gratis – Una fotos en PDF',
    seoDescription:
      'Convierta varias fotos en un solo PDF con nuestro conversor de imagen a PDF en el navegador. Ordene las páginas, elija A4 o Carta y guárdelo sin conexión.',
    h1: 'Convertidor de imagen a PDF',
    subtitle:
      'Ideal para estudiantes, freelancers, contadores y cualquier persona que envíe identificaciones o recibos, este conversor privado de imagen a PDF une varias fotos en un solo PDF nítido de varias páginas. Reordene las páginas libremente, elija A4, Carta de EE. UU. o ajuste al tamaño de la imagen, ajuste los márgenes y la calidad, y cree su documento en local sin subir nada a ningún servidor.',
    howToSteps: [
      {
        title: 'Suelte las imágenes que irán en su PDF',
        description:
          'Suba una o varias imágenes JPG, PNG, WebP, HEIC, GIF, BMP o SVG de hasta 20 MB cada una (o péguelas con Ctrl+V). Cada imagen se convierte en una página.',
      },
      {
        title: 'Ordene las páginas',
        description:
          'Revise la lista de Orden de páginas debajo de los controles y use los botones Subir, Bajar o Eliminar para ordenar recibos, diapositivas o escaneos con precisión.',
      },
      {
        title: 'Seleccione el tamaño de página y la orientación',
        description:
          'Elija A4 (210 × 297 mm), Carta de EE. UU. (8,5 × 11 pulg.) o Ajustar al tamaño de la imagen, y escoja Automática (según la foto), Vertical u Horizontal.',
      },
      {
        title: 'Ajuste los márgenes y la colocación de la imagen',
        description:
          'Elija Sin margen (a sangre), Margen pequeño o Margen mediano, y seleccione Contener (imagen completa) o Cubrir (llenar la página).',
      },
      {
        title: 'Defina el nombre de archivo y la calidad de imagen del PDF',
        description:
          'Personalice el Nombre de archivo PDF (que termina en .pdf) y deslice Calidad de imagen del PDF entre el 40 % y el 98 % para equilibrar la nitidez con el tamaño total del documento.',
      },
      {
        title: 'Cree y descargue su PDF',
        description:
          'Haga clic en Crear y descargar PDF para generar el archivo en local; un aviso verde de confirmación también le permite hacer clic en Descargar PDF de nuevo.',
      },
    ],
    features: [
      {
        title: 'Orden de páginas múltiples',
        description:
          'Reordena fácilmente las imágenes subidas antes de generar su PDF para que los recibos, escaneos y diapositivas aparezcan en la secuencia exacta que quiere.',
      },
      {
        title: 'Tamaños de página flexibles y orientación automática',
        description:
          'Exporta en A4 o Carta de EE. UU. estándar con orientación automática vertical u horizontal por página, o elija Ajustar a la imagen para respetar la proporción exacta de cada foto.',
      },
      {
        title: 'Márgenes y calidad de PDF ajustables',
        description:
          'Elija márgenes ninguno, pequeño o mediano, y controla la calidad de la imagen incrustada para que su PDF siga siendo ligero para el correo.',
      },
      {
        title: 'Cero subidas a servidores',
        description:
          'Las identificaciones, los contratos y los documentos escaneados sensibles nunca tocan un servidor externo: el archivo PDF se construye en local, en la memoria del navegador.',
      },
    ],
    faqs: [
      {
        question: '¿Es seguro convertir pasaportes, identificaciones y recibos de impuestos a PDF?',
        answer:
          'Sí, sus documentos nunca se suben a ningún servidor remoto ni a ninguna cola en la nube. Nuestro generador de PDF en JavaScript codifica cada página dentro de la memoria local de su navegador y escribe el .pdf terminado directamente en su dispositivo.',
      },
      {
        question: '¿Qué opciones de tamaño de página admite el conversor?',
        answer:
          'Puede estandarizar todas las páginas en A4 (210 × 297 mm) o Carta de EE. UU. (8,5 × 11 pulg.) para imprimir y archivar con coherencia. O elija Ajustar al tamaño de la imagen para que cada página del PDF coincida con las dimensiones y la proporción originales de su foto.',
      },
      {
        question: '¿Cómo funciona la orientación automática con fotos horizontales y verticales mezcladas?',
        answer:
          'Cuando la Orientación está en Automática (según la foto), las imágenes horizontales reciben páginas horizontales automáticamente y las verticales reciben páginas verticales. Puede fijar todas las páginas en Vertical u Horizontal cuando necesite un diseño de impresión uniforme.',
      },
      {
        question: '¿Cuál es la diferencia entre Contener y Cubrir en la colocación?',
        answer:
          'Contener (imagen completa) escala cada foto de forma proporcional para que toda la imagen quepa dentro de los márgenes elegidos sin recortar nada. Cubrir (llenar la página) amplía la foto hasta llenar toda la zona imprimible de borde a borde, recortando lo que sobresale.',
      },
      {
        question: '¿Por qué la lista de Orientación se desactiva al elegir Ajustar al tamaño de la imagen?',
        answer:
          'Con Ajustar al tamaño de la imagen, cada página del PDF se dimensiona de forma dinámica según la proporción exacta de su foto, así que el ajuste manual de vertical u horizontal no aplica. Cambie el Tamaño de página a A4 o Carta de EE. UU. si quiere controlar la orientación manualmente.',
      },
      {
        question: '¿Puedo reordenar las páginas después de subir varios archivos a la vez?',
        answer:
          'Sí, baje hasta la sección Orden de páginas, donde cada página muestra un número, una miniatura, sus dimensiones en píxeles y el tamaño del archivo. Use los botones de flecha Subir y Bajar de cualquier fila para reordenarlas antes de hacer clic en Crear y descargar PDF.',
      },
      {
        question: '¿Cómo afecta el control de calidad de imagen del PDF al tamaño del archivo?',
        answer:
          'Bajar la calidad de imagen del PDF hacia el 60 %–75 % comprime las imágenes JPEG incrustadas en el PDF y mantiene los escaneos de varias páginas compactos para los límites estrictos de correo o portales. Subirla hacia el 90 %–98 % conserva el texto pequeño más nítido en documentos densos.',
      },
      {
        question: '¿Qué formatos de archivo de imagen puedo combinar en un PDF?',
        answer:
          'Puede mezclar imágenes JPG, PNG, WebP, HEIC/HEIF de iPhone, GIF, BMP y SVG (hasta 20 MB por archivo) dentro de un solo documento PDF. Se decodifican en local, en el navegador, y se colocan con fluidez en las páginas del PDF.',
      },
      {
        question: '¿Qué pasa con los PNG o WebP transparentes dentro de un PDF?',
        answer:
          'Como las páginas estándar de un PDF tienen un lienzo de papel blanco, los fondos transparentes se combinan limpiamente sobre blanco sólido antes de incrustarse. Eso evita artefactos oscuros inesperados detrás de logotipos o firmas escaneadas.',
      },
      {
        question: '¿Puedo personalizar el nombre del archivo de salida antes de guardar?',
        answer:
          'Sí, escriba cualquier título de documento en el campo Nombre de archivo PDF (por defecto, compressmypic-document.pdf). Si omite el sufijo .pdf, el exportador lo añade automáticamente al descargar.',
      },
      {
        question: '¿Cuántas páginas puedo unir en un solo documento PDF?',
        answer:
          'No hay un límite artificial de páginas: puede combinar decenas de fotos o recibos en un solo PDF de varias páginas. La capacidad práctica depende solo de la memoria disponible en su navegador y de la resolución en píxeles de cada imagen.',
      },
      {
        question: '¿En qué se diferencian Sin margen, Margen pequeño y Margen mediano?',
        answer:
          'Sin margen (a sangre) extiende la colocación hasta los bordes del papel, ideal para arte sin bordes o exportaciones ajustadas a la imagen. Margen pequeño y Margen mediano añaden bordes blancos limpios alrededor de cada página para imprimir con comodidad y leer mejor.',
      },
      {
        question: '¿Puedo añadir más fotos después de revisar la lista de Orden de páginas?',
        answer:
          'Sí, simplemente suelte o busque archivos adicionales en la zona de subida de arriba y se añaden al final de su lista de Orden de páginas. Luego puede reordenar o eliminar páginas individuales antes de generar el PDF actualizado.',
      },
      {
        question: '¿La herramienta añade un logotipo, un sello o una marca de agua al pie del PDF?',
        answer:
          'No, CompressMyPic produce páginas de PDF completamente limpias que contienen solo sus imágenes dentro de los márgenes elegidos. Nunca se añade marca, encabezado ni marca de agua.',
      },
      {
        question: '¿Por qué aparece un mensaje de progreso que dice Codificando página X de Y?',
        answer:
          'Los PDF de varias páginas codifican cada imagen de forma secuencial en la memoria del navegador para no congelar su pestaña ni disparar el uso de RAM. Cuando termina la última página, la barra verde de confirmación muestra el total de páginas y el tamaño exacto del PDF en bytes.',
      },
      {
        question: '¿Qué hago si pierdo o cierro el cuadro automático de descarga del navegador?',
        answer:
          'Mantenga la pestaña abierta: la tarjeta verde de confirmación sigue visible con un botón Descargar PDF de nuevo. Al hacer clic, vuelve a guardar el mismo archivo generado al instante, sin volver a codificarlo.',
      },
      {
        question: '¿Puedo pegar capturas directamente en el creador de PDF?',
        answer:
          'Sí, pulse Ctrl+V (o Cmd+V en Mac) para añadir una captura del portapapeles directamente a su cola de Orden de páginas. Así, agrupar varias capturas de errores o recibos de chat en un solo PDF es muy rápido.',
      },
      {
        question: '¿Generar un PDF sube metadatos como las etiquetas GPS EXIF?',
        answer:
          'No, cada imagen de página se decodifica y se dibuja en el lienzo del navegador antes de incrustarse en el flujo de bytes del PDF. Por eso, los encabezados EXIF originales de la cámara y las coordenadas GPS quedan excluidos automáticamente durante la conversión.',
      },
      {
        question: '¿Puedo convertir fotos HEIC de iPhone directamente a PDF sin pasarlas antes a JPG?',
        answer:
          'Sí, suelte fotos .heic o .heif directamente en la zona de subida y el navegador las decodifica en local al instante. Aparecen enseguida en su lista de Orden de páginas, listas para combinarlas en PDF A4 o Carta.',
      },
      {
        question: '¿La herramienta de imagen a PDF funciona en teléfonos y Chromebooks?',
        answer:
          'Sí, todo funciona con JavaScript estándar del navegador en iOS, Android, Windows, macOS y ChromeOS. No necesita Adobe Acrobat, extensiones del navegador ni programas de PDF de escritorio.',
      },
    ],
    relatedSlugs: ['/image-converter', '/', '/remove-image-metadata', '/image-resizer'],
  },

  {
    slug: '/image-metadata-viewer',
    name: 'Visor de metadatos',
    shortDescription: 'Revise los ajustes EXIF de la cámara, las coordenadas GPS y los datos de PNG y WebP.',
    category: 'privacy',
    seoTitle: 'Ver metadatos de imagen gratis – Revise EXIF y GPS',
    seoDescription:
      'Revise las etiquetas EXIF, las coordenadas GPS y los bloques de PNG o WebP con este visor de metadatos. Copie o exporte el informe JSON en su navegador.',
    h1: 'Visor de metadatos y EXIF de imagen',
    subtitle:
      'Pensado para fotógrafos que revisan los ajustes de su objetivo, desarrolladores que depuran encabezados y cualquier persona que revisa su privacidad antes de publicar, nuestro visor de metadatos de imagen inspecciona los bytes crudos del archivo en local. Descubre etiquetas EXIF ocultas, coordenadas GPS, marcas de tiempo y bloques de PNG o WebP sin subir ni un solo píxel.',
    howToSteps: [
      {
        title: 'Suelte o seleccione una imagen para inspeccionar',
        description:
          'Suba una imagen JPG, PNG, WebP, HEIC, GIF, BMP o SVG de hasta 20 MB (o péguela con Ctrl+V). Los encabezados binarios crudos se analizan de inmediato en su dispositivo.',
      },
      {
        title: 'Revise el resumen y el aviso de riesgo de privacidad',
        description:
          'Consulte el formato de contenedor detectado, las dimensiones, el tamaño del archivo y si se encontraron tipos de etiquetas de metadatos sensibles.',
      },
      {
        title: 'Revise cualquier alerta de ubicación GPS',
        description:
          'Si existen etiquetas GPS, un cuadro de aviso resalta la Latitud y la Longitud exactas decodificadas y ofrece un salto con un clic a Eliminar metadatos.',
      },
      {
        title: 'Explore la tabla de metadatos extraídos',
        description:
          'Desplácese por las entradas agrupadas (Cámara, EXIF, GPS, bloques de PNG/WebP, Información del archivo), con etiquetas ámbar de Etiqueta de privacidad que marcan los campos sensibles.',
      },
      {
        title: 'Copie o exporte el JSON, o elimine las etiquetas',
        description:
          'Haga clic en Copiar JSON para copiar el informe completo, en Exportar JSON para guardar un archivo .json o en Eliminar metadatos para limpiar las etiquetas privadas.',
      },
    ],
    features: [
      {
        title: 'Detección profunda de EXIF y GPS',
        description:
          'Analiza las tablas binarias TIFF IFD0, ExifIFD y GPSIFD en JPEG, en bloques eXIf de PNG y en bloques EXIF de WebP para descubrir etiquetas ocultas de ubicación y dispositivo.',
      },
      {
        title: 'Resaltado de riesgos de privacidad',
        description:
          'Marca automáticamente campos sensibles como la latitud y longitud GPS, los números de serie de la cámara, los nombres de autor y las marcas de tiempo de captura.',
      },
      {
        title: 'Inspección de bloques de PNG y WebP',
        description:
          'Lee la profundidad de color IHDR de PNG, la densidad física pHYs, los bloques de texto tEXt, iTXt y tIME, y los indicadores VP8X de transparencia o animación de WebP.',
      },
      {
        title: 'Exportación del informe JSON',
        description:
          'Copia todos los campos de metadatos analizados a su portapapeles o descarga un informe JSON limpio con un solo clic.',
      },
    ],
    faqs: [
      {
        question: '¿Qué tipo de información oculta puede descubrir este visor de metadatos de imagen?',
        answer:
          'Según el formato de contenedor, nuestro analizador extrae en local los campos TIFF IFD0, ExifIFD y GPSIFD de los encabezados de su imagen. Esto revela detalles como la marca y el modelo de la cámara, las especificaciones del objetivo, la velocidad de obturación, el ISO, la apertura, las marcas de tiempo, el programa de edición, las notas de copyright y las coordenadas GPS decimales.',
      },
      {
        question: '¿También inspecciona encabezados técnicos de PNG y WebP además del EXIF de JPEG?',
        answer:
          'Sí, más allá de los segmentos EXIF estándar de JPEG, el visor lee bloques técnicos incrustados dentro de archivos PNG y WebP. Puede ver la profundidad de bits IHDR de PNG, la densidad física pHYs en DPI, los bloques de texto tEXt, iTXt y tIME, los bloques eXIf de PNG y los indicadores VP8X de transparencia o animación de WebP.',
      },
      {
        question: '¿Por qué una foto descargada de WhatsApp o Instagram no muestra etiquetas EXIF?',
        answer:
          'Las redes sociales y las aplicaciones de mensajería eliminan automáticamente los encabezados EXIF, de cámara y GPS cuando sube fotos a través de sus servidores. Los archivos originales, directamente del carrete de su teléfono o de su cámara réflex, conservan todos los metadatos.',
      },
      {
        question: '¿Cómo detecta la herramienta si una foto revela mi ubicación?',
        answer:
          'Cuando existen etiquetas racionales GPS en el encabezado de la imagen, el visor convierte grados, minutos y segundos en Latitud y Longitud decimales automáticamente. Cualquier coordenada detectada activa un aviso ámbar de Coordenadas de ubicación GPS detectadas justo encima de la tabla de propiedades.',
      },
      {
        question: '¿Qué significan las etiquetas ámbar de Etiqueta de privacidad en la tabla de metadatos?',
        answer:
          'Las entradas marcadas con una insignia ámbar de Etiqueta de privacidad contienen información personal o que identifica el dispositivo. Ejemplos típicos: coordenadas GPS, marcas exactas de tiempo de captura, nombres de fotógrafo o autor, números de serie de la cámara y cadenas del modelo del dispositivo.',
      },
      {
        question: '¿Puedo eliminar los metadatos sensibles justo después de inspeccionar una imagen?',
        answer:
          'Sí, cuando se detectan etiquetas sensibles, aparece un botón naranja Eliminar metadatos en la barra de resumen (además de un enlace dentro del cuadro de aviso GPS). Al hacer clic, va directamente a nuestra herramienta Eliminar metadatos.',
      },
      {
        question: '¿Cómo funciona la exportación JSON para desarrolladores o documentación?',
        answer:
          'Haga clic en Copiar JSON en la barra de resumen para poner el informe estructurado en su portapapeles de inmediato. Si necesita un archivo para auditorías o informes de errores, haga clic en Exportar JSON para descargar <nombre-de-archivo>_metadata.json en local.',
      },
      {
        question: '¿Por qué no se extraen bloques EXIF binarios completos en algunos archivos HEIC o GIF?',
        answer:
          'Nuestro analizador profundo de bloques binarios se centra en los contenedores JPEG, PNG y WebP de forma nativa en JavaScript. Para archivos HEIC, GIF, BMP y SVG, el visor muestra con precisión la información del contenedor, el tamaño del archivo y las dimensiones en píxeles.',
      },
      {
        question: '¿Se suben alguna vez a internet las fotos privadas con ubicación GPS al inspeccionarlas?',
        answer:
          'No, la inspección binaria se ejecuta al 100 % en local, en su navegador, mediante el análisis de bytes del archivo en memoria. Enviar fotos privadas sin limpiar por internet iría contra la privacidad, así que cero bytes salen de su computadora o teléfono.',
      },
      {
        question: '¿Ver los metadatos modifica, comprime o elimina algo de mi archivo?',
        answer:
          'No, el Visor de metadatos es estrictamente de solo lectura. Lee los encabezados desde la memoria del navegador para mostrarle lo que hay dentro sin cambiar su archivo original.',
      },
      {
        question: '¿Puedo inspeccionar varios archivos seguidos sin actualizar la página?',
        answer:
          'Sí, haga clic en el icono rojo de papelera (Limpiar) en la barra de resumen para volver a la zona de subida en cualquier momento. Luego puede soltar o pegar su siguiente imagen para generar un informe de metadatos nuevo.',
      },
      {
        question: '¿Por qué una captura pegada con Ctrl+V casi nunca muestra etiquetas de cámara?',
        answer:
          'Los portapapeles del sistema pasan mapas de bits sin procesar en lugar de los archivos JPEG originales de la cámara. Como las imágenes del portapapeles carecen de encabezados de cámara, las capturas pegadas muestran las dimensiones y la información del contenedor sin bloques EXIF ni GPS.',
      },
      {
        question: '¿Cuál es el tamaño máximo de archivo admitido para inspeccionar metadatos?',
        answer:
          'Puede inspeccionar imágenes individuales de hasta 20 MB directamente en su navegador. Ese límite cubre con holgura JPEG de réflex a resolución completa, exportaciones PNG detalladas y archivos BMP sin comprimir.',
      },
      {
        question: '¿Cómo compruebo que otra herramienta eliminó de verdad todas las etiquetas EXIF de una foto?',
        answer:
          'Suelte el archivo limpio de nuevo en este visor de metadatos para inspeccionar sus bytes crudos. Si la limpieza funcionó, el aviso verde confirma No se detectaron etiquetas EXIF, GPS ni de cámara ocultas y no aparece ninguna alerta GPS.',
      },
      {
        question: '¿El visor detecta comentarios XMP de Adobe o de texto en PNG?',
        answer:
          'Sí, los bloques de texto clave-valor tEXt e iTXt de PNG, como Programa, Autor, Comentario o Fecha de creación, se extraen limpiamente en la tabla de metadatos. Cualquier bloque eXIf de PNG incrustado y los bloques EXIF de WebP se decodifican junto a ellos.',
      },
      {
        question: '¿Qué significa el bloque pHYs en las capturas PNG?',
        answer:
          'El bloque pHYs de PNG guarda la densidad física de píxeles (DPI o píxeles por metro) pensada para la escala de impresión o diseño. Nuestro visor lee y convierte esos valores para que veas si una imagen especifica 72 DPI, 96 DPI o 300 DPI.',
      },
      {
        question: '¿Por qué a veces la extensión del nombre de archivo difiere del formato de contenedor?',
        answer:
          'A veces, un archivo PNG o WebP se renombra con extensión .jpg (o al revés). Como nuestro visor inspecciona los bytes mágicos binarios reales en lugar de fiarse solo del nombre de archivo, muestra el verdadero formato de contenedor subyacente.',
      },
      {
        question: '¿Puedo revisar los metadatos de una imagen en el navegador de un iPhone o Android?',
        answer:
          'Sí, abra la página en Safari móvil o Chrome y elija una foto directamente desde su carrete. Puede revisar las coordenadas GPS ocultas y los detalles de la cámara en su teléfono antes de publicar fotos en línea.',
      },
      {
        question: '¿Por qué mi foto de réflex muestra la distancia focal del objetivo y la velocidad de obturación?',
        answer:
          'Las cámaras digitales registran la telemetría de exposición dentro del directorio binario ExifIFD en el momento en que pulsa el obturador. Campos como ISO, número F, tiempo de exposición, distancia focal, flash y modo de medición se decodifican en local para que pueda leerlos.',
      },
      {
        question: '¿Hay que pagar o registrarse para inspeccionar fotos sin límite?',
        answer:
          'No, inspeccionar los metadatos de las imágenes y exportar informes JSON es totalmente gratis, sin cuentas ni muros de pago. Puede revisar tantas fotos de hasta 20 MB como necesite, sin marcas de agua ni límites diarios.',
      },
    ],
    relatedSlugs: ['/remove-image-metadata', '/image-dimensions-checker', '/', '/image-converter'],
  },

  {
    slug: '/remove-image-metadata',
    name: 'Eliminar metadatos',
    shortDescription: 'Elimina datos EXIF, ubicación GPS, información de la cámara y comentarios en privado.',
    category: 'privacy',
    seoTitle: 'Eliminar metadatos de imagen gratis – Quite EXIF y GPS',
    seoDescription:
      'Elimine los metadatos de sus imágenes, incluidos los datos EXIF y la ubicación GPS, en su navegador. Limpieza sin pérdidas para JPG y PNG, con descarga en ZIP.',
    h1: 'Eliminar metadatos de imagen online',
    subtitle:
      'Pensada para vendedores de marketplaces, periodistas, padres y madres, y usuarios preocupados por su privacidad, esta herramienta le permite eliminar metadatos de imagen de forma permanente antes de compartir fotos en línea. Elimina modelos de cámara EXIF, coordenadas GPS, marcas de tiempo de captura y bloques de texto ocultos en local, en su navegador, con eliminación binaria sin pérdidas o con recodificación limpia en el lienzo.',
    howToSteps: [
      {
        title: 'Suelte las fotos que quiere limpiar',
        description:
          'Suba una o varias imágenes JPG, PNG, WebP o HEIC (hasta 20 MB cada una) en la zona de subida, o péguelas con Ctrl+V.',
      },
      {
        title: 'Revise las insignias automáticas de limpieza y verificación',
        description:
          'Los archivos se limpian de inmediato al subirlos y se vuelven a analizar automáticamente, mostrando cuántas etiquetas de metadatos se eliminaron (por ejemplo, → 0 restantes).',
      },
      {
        title: 'Elija el método de eliminación si ajusta la configuración',
        description:
          'Mantenga Eliminación binaria sin pérdidas (JPG/PNG) para no recodificar ningún píxel en JPEG y PNG, o elija Recodificación completa en lienzo para aplanar los píxeles limpiamente.',
      },
      {
        title: 'Ajuste el formato de salida y la calidad si quiere',
        description:
          'Seleccione el formato de salida Original, JPG, PNG o WebP, ajuste la Calidad de recodificación (50 %–100 %) para WebP, HEIC o recodificación en lienzo, y haga clic en Volver a limpiar todo.',
      },
      {
        title: 'Descargue los archivos limpios o un ZIP por lotes',
        description:
          'Haga clic en Descargar limpia en las tarjetas individuales verificadas o en Descargar todas limpias (ZIP) para guardar clean_images_no_metadata.zip.',
      },
    ],
    features: [
      {
        title: 'Eliminación real sin pérdidas para JPEG y PNG',
        description:
          'Elimina datos EXIF, XMP, IPTC, comentarios y bloques tEXt y eXIf de PNG a nivel binario, sin recodificar ningún píxel.',
      },
      {
        title: 'Salida limpia verificada',
        description:
          'Cada archivo de salida se vuelve a analizar automáticamente con nuestro analizador de metadatos para verificar que no queda ninguna etiqueta sensible EXIF o GPS.',
      },
      {
        title: 'Limpieza por lotes y exportación ZIP',
        description:
          'Limpia un lote completo de fotos antes de publicarlas en marketplaces, foros o anuncios, y descárguelas juntas en un ZIP.',
      },
      {
        title: 'Privacidad 100 % en el dispositivo',
        description:
          'Las herramientas de privacidad deben ser privadas: sus fotos originales con datos GPS nunca salen de su navegador.',
      },
    ],
    faqs: [
      {
        question: '¿Cómo funciona la eliminación binaria sin pérdidas sin dañar la calidad de la foto?',
        answer:
          'En archivos JPEG y PNG que se mantienen en su formato original, nuestro limpiador binario analiza directamente la estructura del contenedor. Elimina los segmentos de metadatos (APP1–APP15 y COM en JPEG, y eXIf, tEXt, iTXt y tIME en PNG) sin decodificar ni recomprimir ni un solo píxel.',
      },
      {
        question: '¿Qué pasa al subir archivos WebP o HEIC para eliminar metadatos?',
        answer:
          'La eliminación binaria sin pérdidas por segmentos aplica a entradas JPG y PNG. Para entradas HEIC o WebP, o cuando cambia el formato de salida o elige Recodificación completa en lienzo, la herramienta dibuja los píxeles en un lienzo nuevo para garantizar que se eliminan todos los encabezados de metadatos.',
      },
      {
        question: '¿Cómo sé con seguridad que se eliminaron la ubicación GPS y las etiquetas EXIF?',
        answer:
          'Después de limpiar cada imagen, nuestra herramienta ejecuta nuestro analizador de metadatos una segunda vez sobre el archivo de salida y muestra una insignia verde (por ejemplo, Se eliminaron X etiquetas de metadatos → 0 restantes o Limpia verificada). Nada se da por supuesto.',
      },
      {
        question: '¿Qué tipos de metadatos se eliminan al limpiar fotos?',
        answer:
          'El limpiador elimina la marca y el modelo de cámara EXIF, los detalles del objetivo, los números de serie, los ajustes de obturación y las marcas de tiempo de captura. También elimina las etiquetas GPS de latitud, longitud y altitud, los paquetes XMP de Adobe, los campos IPTC, los comentarios JPEG y los bloques de texto o de tiempo de PNG.',
      },
      {
        question: '¿Cuándo conviene elegir Recodificación completa en lienzo en lugar de Eliminación binaria sin pérdidas?',
        answer:
          'Elija Recodificación completa en lienzo cuando quiera un mapa de bits nuevo y comprimido, sin ningún segmento binario heredado. También se usa automáticamente cuando cambia el formato de salida o sube fotos WebP y HEIC.',
      },
      {
        question: '¿Qué formatos de subida acepta Eliminar metadatos?',
        answer:
          'La zona de subida acepta archivos JPG (JPEG), PNG, WebP y HEIC/HEIF de iPhone de hasta 20 MB por archivo. Desde ahí, puede exportar archivos limpios en formato Original, JPG, PNG o WebP.',
      },
      {
        question: '¿El control de calidad de recodificación afecta a los archivos con Eliminación binaria sin pérdidas?',
        answer:
          'No, la Eliminación binaria sin pérdidas omite por completo la recodificación de píxeles, así que los bits visuales de su JPEG o PNG se mantienen intactos sin importar el control. El control de Calidad de recodificación (50 %–100 %) solo aplica a entradas WebP o HEIC, o a exportaciones con Recodificación completa en lienzo.',
      },
      {
        question: '¿Puedo eliminar los metadatos de toda una carpeta de fotos de anuncios a la vez?',
        answer:
          'Sí, suelte varias fotos juntas y espera un momento a que las insignias de verificación automática se pongan en verde en todas las tarjetas. Luego haga clic en Descargar todas limpias (ZIP) para descargar clean_images_no_metadata.zip.',
      },
      {
        question: '¿Mis fotos sin limpiar, con coordenadas GPS, se suben a algún sitio?',
        answer:
          'Nunca: limpiar encabezados sensibles de GPS y de dispositivo solo protege su privacidad cuando ocurre en local. Toda la división binaria de bytes y la exportación en lienzo ocurren dentro de la memoria de su propio navegador.',
      },
      {
        question: '¿Por qué una foto mostró Limpia verificada (0 etiquetas EXIF/GPS) justo después de subirla?',
        answer:
          'Eso significa que el archivo de origen ya contenía cero bloques de metadatos EXIF, GPS o de texto (algo habitual en capturas o imágenes descargadas de aplicaciones de mensajería). Nuestro limpiador verifica igualmente la salida como limpia.',
      },
      {
        question: '¿Eliminar metadatos también reduce el tamaño del archivo?',
        answer:
          'Sí, las fotos de cámara suelen llevar miniaturas de vista previa EXIF incrustadas, bloques XML de Adobe XMP y segmentos de color o comentarios. Eliminarlos en el modo Eliminación binaria sin pérdidas suele recortar decenas de kilobytes sin ningún cambio en la nitidez de la imagen.',
      },
      {
        question: '¿La eliminación binaria sin pérdidas conserva los fondos transparentes de PNG?',
        answer:
          'Sí, los bloques de datos de imagen PNG (IDAT) y la transparencia alfa se mantienen byte a byte, intactos. Solo se eliminan del archivo los bloques auxiliares de texto, EXIF y de marca de tiempo.',
      },
      {
        question: '¿Qué pasa si una foto de iPhone se giró con una etiqueta de Orientación EXIF?',
        answer:
          'Eliminar el bloque APP1 sin pérdidas borra el indicador de Orientación, mientras que la Recodificación completa en lienzo o la decodificación HEIC fijan la orientación vertical de los píxeles directamente en el lienzo exportado. Si un JPEG vertical se ve de lado tras la eliminación sin pérdidas, cambie a Recodificación completa en lienzo y haga clic en Volver a limpiar todo.',
      },
      {
        question: '¿Puedo convertir un PNG limpio directamente a WebP o JPG mientras elimino metadatos?',
        answer:
          'Sí, elija JPG o WebP en Formato de salida, ajuste la Calidad de recodificación y haga clic en Volver a limpiar todo. Cada archivo se recodifica limpiamente en el lienzo, con todos los metadatos eliminados y el formato elegido aplicado.',
      },
      {
        question: '¿Se modifican o se sobrescriben mis archivos originales en el disco?',
        answer:
          'No, los navegadores web no pueden sobrescribir archivos directamente en sus carpetas locales. Al hacer clic en Descargar limpia, se guarda una copia limpia aparte, mientras sus originales quedan intactos.',
      },
      {
        question: '¿Puedo comprobar la salida limpia en un inspector independiente?',
        answer:
          'Sí, suelte cualquier archivo descargado en nuestro Visor de metadatos justo después de guardarlo. Analiza los encabezados binarios crudos de forma independiente para que pueda confirmar que no quedan coordenadas GPS ni etiquetas de cámara.',
      },
      {
        question: '¿El limpiador funciona en el celular antes de publicar en marketplaces?',
        answer:
          'Sí, abra la página en Safari de iOS o Chrome de Android y elija fotos directamente desde el carrete de su teléfono. Cuando aparezcan las insignias verdes de verificación, puede descargar las copias limpias directamente en su dispositivo.',
      },
      {
        question: '¿Puedo pegar una imagen del portapapeles en Eliminar metadatos?',
        answer:
          'Sí, pulse Ctrl+V (o Cmd+V en Mac) para soltar una imagen copiada o una captura directamente en la cola de subida. Limpia automáticamente cualquier bloque residual y deja lista la descarga limpia.',
      },
      {
        question: '¿Para qué existe el botón Volver a limpiar todo si la limpieza empieza automáticamente?',
        answer:
          'Los archivos se limpian de inmediato al soltarlos con su configuración activa. Si luego cambia el método de eliminación, el formato de salida o la calidad de recodificación, al hacer clic en Volver a limpiar todo se aplican esas opciones actualizadas a todo el lote.',
      },
      {
        question: '¿Hay algún límite de cantidad de archivos o algún coste por quitar datos EXIF?',
        answer:
          'Cada archivo subido puede pesar hasta 20 MB para que la memoria de su navegador se mantenga fluida. Más allá de ese límite por archivo, puede eliminar metadatos de fotos ilimitadas, sin marcas de agua, sin registros y sin costes.',
      },
    ],
    relatedSlugs: ['/image-metadata-viewer', '/', '/image-converter', '/image-to-pdf'],
  },
];

export const TOOL_BY_SLUG_ES: Record<string, ToolDefinition> = Object.fromEntries(
  TOOLS_REGISTRY_ES.map((t) => [t.slug, t])
);
