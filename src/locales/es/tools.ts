// Spanish tool registry — COMPLETE (home + all 48 tools).
// Assembled from tools-es-batch1.ts … tools-es-batch6.ts (coordinator merge).
// Target path in the repo: src/locales/es/tools.ts
// Neutral Latin American Spanish, usted forms. Slugs, category ids and
// relatedSlugs are unchanged from the English registry (src/data/tools.ts).
// Batch 1: home + 8 tools; Batches 2–6: 8 tools each (40 tools).

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

  {
    slug: '/favicon-generator',
    name: 'Generador de favicon',
    shortDescription: 'Genere favicon.ico, icono de Apple Touch, iconos de Android y archivos de manifiesto.',
    category: 'create',
    seoTitle: 'Generador de favicon gratis online – Iconos .ico y PWA',
    seoDescription:
      'Genere un paquete de favicon gratis online: favicon.ico multi-tamaño, icono de Apple Touch, iconos de Android y site.webmanifest, todo en su navegador.',
    h1: 'Generador de favicon gratis online',
    subtitle:
      'Diseñado para desarrolladores web, fundadores de startups, blogueros y creadores independientes, este generador de favicon gratuito convierte cualquier logotipo o gráfico en un paquete de iconos listo para publicar en navegadores y celulares. Previsualice su icono en pestañas claras y oscuras, ajuste el relleno, el radio de las esquinas y el color de fondo, y descargue todo en local sin subir nada a ningún servidor.',
    howToSteps: [
      {
        title: 'Suba su logotipo o gráfico de icono',
        description:
          'Arrastre una imagen PNG, SVG, JPG, WebP o HEIC de hasta 20 MB (un PNG o SVG cuadrado funciona mejor) o péguela desde su portapapeles con Ctrl+V.',
      },
      {
        title: 'Elija el relleno de fondo',
        description:
          'Mantenga activada la casilla Transparente para iconos recortados limpios, o desactívela para elegir un color de fondo sólido en hexadecimal.',
      },
      {
        title: 'Ajuste el relleno y el radio de las esquinas',
        description:
          'Deslice Relleno entre 0 % y 25 % para dar aire al icono y arrastre Radio de esquina de 0 % a 50 % para cuadrados redondeados o insignias circulares.',
      },
      {
        title: 'Revise las vistas previas de pestaña del navegador',
        description:
          'Compruebe las vistas previas en vivo a escala de 16×16 dentro de la pestaña clara Mi sitio web y de la pestaña en modo oscuro.',
      },
      {
        title: 'Descargue archivos individuales o el ZIP completo',
        description:
          'Guarde tamaños de icono individuales desde las tarjetas generadas o pulse Descargar todo (ZIP) para bajar favicon_package_compressmypic.zip.',
      },
      {
        title: 'Copie el fragmento HTML del encabezado',
        description:
          'Pulse Copiar HTML en el panel oscuro Fragmento HTML &lt;head&gt; y pegue las etiquetas &lt;link&gt; directamente en la plantilla de su sitio web.',
      },
    ],
    features: [
      {
        title: 'Favicon.ico real de varios tamaños',
        description:
          'Construye un archivo .ico binario genuino que integra marcos nítidos de 16×16, 32×32 y 48×48, no un PNG renombrado.',
      },
      {
        title: 'Conjunto completo de iconos web y de celular',
        description:
          'Genera iconos de 16×16, 32×32, 48×48, 180×180 (Apple Touch), 192×192 y 512×512 (Android/PWA) además de site.webmanifest.',
      },
      {
        title: 'Vista previa en vivo de la pestaña del navegador',
        description:
          'Previsualice cómo se ve su icono a escala real de pestaña sobre fondos claros y oscuros antes de descargarlo.',
      },
      {
        title: 'Fragmento HTML listo para pegar',
        description:
          'Copie las etiquetas &lt;link&gt; HTML limpias directamente en su &lt;head&gt; con un solo clic.',
      },
    ],
    faqs: [
      {
        question: '¿Qué tamaños y archivos de icono exactos incluye el ZIP del generador de favicon?',
        answer:
          'Al descargar el ZIP se incluye un favicon.ico de varios marcos (16×16, 32×32 y 48×48), archivos separados favicon-16x16.png, favicon-32x32.png y favicon-48x48.png, apple-touch-icon.png (180×180), android-chrome-192x192.png y android-chrome-512x512.png. También se genera un archivo site.webmanifest JSON listo para subir.',
      },
      {
        question: '¿El favicon.ico del generador de favicon es un binario ICO real de varios marcos o un PNG renombrado?',
        answer:
          'Nuestro generador de favicon escribe un contenedor binario real de Windows ICONDIR con entradas de directorio PNG RGBA de 32 bits separadas para los marcos de 16×16, 32×32 y 48×48. Los navegadores de escritorio antiguos y los accesos directos de Windows eligen automáticamente el marco más nítido sin artefactos de renderizado.',
      },
      {
        question: '¿Qué dimensiones y formato de origen funcionan mejor para iconos de pestaña nítidos en el generador de favicon?',
        answer:
          'Empiece con un PNG cuadrado limpio o un SVG autónomo de 512×512 píxeles o más, para que al reducir se obtengan bordes nítidos tanto a 16×16 como a 512×512. Las fuentes pequeñas de baja resolución estiradas hasta 512×512 pueden verse suaves.',
      },
      {
        question: '¿Qué ocurre si subo un logotipo rectangular al generador de favicon en lugar de uno cuadrado?',
        answer:
          'Los gráficos rectangulares se centran de forma proporcional dentro de cada lienzo de icono cuadrado sin estirar ni deformar su marca. El espacio vacío arriba y abajo o a los lados se rellena con transparencia o con el color de fondo que elija.',
      },
      {
        question: '¿Por qué el generador de favicon muestra vistas previas de pestaña claras y oscuras?',
        answer:
          'Los iconos oscuros pueden desaparecer en las pestañas de navegador en modo oscuro, mientras que los logotipos blancos desaparecen en temas claros. Ver juntas la pestaña clara Mi sitio web y la pestaña en modo oscuro le permite agregar relleno o una pastilla de fondo sólido antes de publicar.',
      },
      {
        question: '¿Cómo funcionan juntos el relleno y el radio de esquina en el generador de favicon?',
        answer:
          'El relleno (de 0 % a 25 %) encoge ligeramente su logotipo hacia adentro desde el borde cuadrado para que las esquinas redondeadas no recorten los bordes del gráfico. Al subir el radio de esquina hacia 20 % se crean cuadrados redondeados estilo iOS, mientras que 50 % recorta todo el icono en un círculo completo.',
      },
      {
        question: '¿Los iconos de Apple Touch del generador de favicon deben usar fondo sólido en vez de transparente?',
        answer:
          'iOS Safari suele componer las zonas transparentes de apple-touch-icon.png sobre negro cuando los usuarios fijan un sitio en su pantalla de inicio. Si su logotipo usa formas oscuras, desmarque Transparente en Relleno de fondo y elija blanco o el color de su marca.',
      },
      {
        question: '¿Qué incluye el archivo site.webmanifest que genera el generador de favicon?',
        answer:
          'El manifiesto JSON declara las rutas a /android-chrome-192x192.png y /android-chrome-512x512.png, establece display en standalone y sincroniza theme_color y background_color con el relleno de fondo que eligió. Puede abrirlo en cualquier editor de texto para personalizar el nombre de su sitio.',
      },
      {
        question: '¿Dónde debo subir los archivos de favicon generados en mi sitio web?',
        answer:
          'Coloque favicon.ico, todos los iconos PNG generados y site.webmanifest en el directorio público raíz de su sitio, para que URL como /favicon.ico y /apple-touch-icon.png se resuelvan correctamente. Luego pegue el fragmento HTML &lt;head&gt; copiado dentro de la sección &lt;head&gt; principal de su HTML.',
      },
      {
        question: '¿Puedo descargar solo favicon.ico o apple-touch-icon.png con el generador de favicon sin el ZIP?',
        answer:
          'Sí, cada tamaño de icono aparece como su propia tarjeta de vista previa con las dimensiones exactas y el tamaño en bytes, junto a un botón Descargar dedicado. Puede tomar recursos individuales o pulsar Descargar todo (ZIP) para obtener el paquete completo.',
      },
      {
        question: '¿Subir un logotipo SVG al generador de favicon crea iconos nítidos de 16×16?',
        answer:
          'Sí, los vectores SVG se rasterizan directamente en el navegador sobre cada cuadrícula de píxeles de destino, de 16×16 hasta 512×512. Solo asegúrese de que su SVG use formas y colores incrustados en vez de imágenes externas enlazadas o fuentes web remotas.',
      },
      {
        question: '¿Puedo convertir una foto HEIC de iPhone o un gráfico WebP en un favicon con esta herramienta?',
        answer:
          'Sí, la zona de subida acepta archivos PNG, SVG, JPG, WebP, GIF, BMP y HEIC/HEIF de iPhone de hasta 20 MB. Las imágenes HEIC se decodifican en local en su navegador antes de construir el paquete de iconos.',
      },
      {
        question: '¿Los logotipos de marca o iconos de app sin publicar se envían a servidores externos con el generador de favicon?',
        answer:
          'No, el redimensionado en Canvas, el empaquetado binario ICO, la generación del manifiesto y el archivo ZIP se ejecutan estrictamente dentro de su propia pestaña del navegador. Sus marcas sin publicar nunca viajan por ninguna red.',
      },
      {
        question: '¿Por qué mi favicon antiguo seguía apareciendo en Chrome después de subir los archivos nuevos del generador de favicon?',
        answer:
          'Los navegadores almacenan en caché los faviconos de forma agresiva durante días, incluso después de reemplazar los archivos en su servidor. Una actualización forzada con Ctrl+Mayús+R (o abrir una ventana de incógnito) obliga a su navegador a buscar el nuevo favicon.ico y los iconos PNG.',
      },
      {
        question: '¿Los cambios de relleno, radio de esquina o fondo del generador de favicon actualizan todos los tamaños a la vez?',
        answer:
          'Sí, al mover cualquier deslizador o cambiar el relleno de fondo se reconstruyen de inmediato favicon.ico, las seis dimensiones de iconos PNG, las vistas previas de pestaña clara y oscura y site.webmanifest juntos. Nunca necesita volver a subir su logotipo entre ajustes.',
      },
      {
        question: '¿El fragmento HTML &lt;head&gt; del generador de favicon funciona con React, Next.js o HTML simple?',
        answer:
          'Sí, las etiquetas estándar &lt;link rel="icon"&gt;, &lt;link rel="apple-touch-icon"&gt; y &lt;link rel="manifest"&gt; funcionan en sitios HTML estáticos, encabezados de WordPress, index.html de Vite/React y plantillas de servidor. Solo péguelas dentro de &lt;head&gt; y coloque los archivos en la raíz de su web.',
      },
      {
        question: '¿Puedo crear un favicon circular desde un avatar o insignia cuadrados con el generador de favicon?',
        answer:
          'Sí, mantenga Transparente activado en Relleno de fondo y arrastre Radio de esquina hasta 50 %. Todos los iconos PNG y los marcos de favicon.ico incrustados se recortan limpiamente en un círculo suave con antialiasing.',
      },
      {
        question: '¿Para qué necesita el generador de favicon iconos de 192×192 y 512×512 además de favicon.ico?',
        answer:
          'El Chrome moderno de Android y las indicaciones de instalación de aplicaciones web progresivas buscan iconos de pantalla de inicio de 192×192 e iconos de presentación de 512×512 declarados en site.webmanifest. Incluir ambos garantiza que los accesos directos de celular se vean nítidos junto a las pestañas clásicas de escritorio.',
      },
      {
        question: '¿Puedo pegar un gráfico de logotipo directamente desde mi portapapeles en el generador de favicon?',
        answer:
          'Sí, copie una imagen o captura de pantalla a su portapapeles y pulse Ctrl+V (o Cmd+V en Mac) en la página. Entra de inmediato al generador y muestra el conjunto completo de iconos.',
      },
      {
        question: '¿Hay alguna marca de agua, requisito de cuenta o costo por generar paquetes de favicon?',
        answer:
          'No, el generador de favicon es 100 % gratis para sitios web personales y comerciales, sin marcas de agua, cuentas ni límites diarios de creación. Solo aplica un límite de 20 MB por archivo de origen para que la memoria del navegador se mantenga rápida.',
      },
    ],
    relatedSlugs: ['/image-resizer', '/image-converter', '/image-color-picker', '/'],
  },

  {
    slug: '/image-color-picker',
    name: 'Selector de color de imagen',
    shortDescription: 'Tome colores exactos de píxeles de cualquier imagen en HEX, RGB, HSL y CMYK.',
    category: 'developer',
    seoTitle: 'Selector de color de imagen – Códigos HEX, RGB y HSL',
    seoDescription:
      'Tome colores exactos de píxeles con el selector de color de imagen online. Consulte HEX, RGB, HSL y CMYK con lupa en vivo y exporte variables CSS en local.',
    h1: 'Selector de color de imagen gratis online',
    subtitle:
      'Creado para diseñadores web, desarrolladores frontend, estilistas de marca e ilustradores, nuestro selector de color de imagen en el navegador toma píxeles RGBA exactos de cualquier foto, logotipo o captura de pantalla. Pase el cursor para inspeccionar una lupa ampliada de 11×11 con lectura HEX en vivo, haga clic en píxeles para guardar muestras y exporte propiedades personalizadas de CSS sin subir sus archivos.',
    howToSteps: [
      {
        title: 'Suba una imagen o pegue una captura de pantalla',
        description:
          'Arrastre un archivo JPG, PNG, WebP, HEIC, SVG, BMP o GIF de hasta 20 MB, o pulse Ctrl+V para pegar una captura directamente desde su portapapeles.',
      },
      {
        title: 'Pase el cursor con la lupa en vivo del Inspector de píxeles',
        description:
          'Mueva el cursor sobre el lienzo de la imagen para ver las coordenadas exactas de píxel (x, y) y una cuadrícula ampliada de 11×11 con cruz que actualiza la muestra en tiempo real.',
      },
      {
        title: 'Haga clic en píxeles para fijarlos y crear muestras',
        description:
          'Haga clic en cualquier punto del lienzo para fijar su color en el Inspector de píxeles y agregarlo a Muestras guardadas (hasta 24 colores únicos).',
      },
      {
        title: 'Copie valores HEX, RGB, HSL o CMYK',
        description:
          'Pulse el icono de copiar junto a HEX, RGB, HSL o CMYK en el Inspector de píxeles, o pulse cualquier pastilla de muestra guardada, para copiar el código de inmediato.',
      },
      {
        title: 'Exporte su paleta como variables CSS',
        description:
          'Pulse Exportar CSS en la tarjeta de Muestras guardadas para descargar picked-colors.css con propiedades personalizadas :root limpias, listas para su hoja de estilos.',
      },
    ],
    features: [
      {
        title: 'Lupa de píxeles ampliada en vivo',
        description:
          'La cuadrícula ampliada con cruz le permite apuntar a píxeles exactos con precisión, tanto con el mouse de escritorio como en pantallas táctiles de celular.',
      },
      {
        title: '4 formatos de color al instante',
        description:
          'Muestra las representaciones HEX, RGB, HSL y CMYK al mismo tiempo para desarrolladores web y diseñadores gráficos.',
      },
      {
        title: 'Historial de muestras guardadas y exportación',
        description:
          'Haga clic en varias zonas de su imagen para crear una lista de muestras personalizada y cópiela como propiedades personalizadas de CSS o JSON.',
      },
      {
        title: 'Muestreo 100 % local en Canvas',
        description:
          'Los valores de píxel se leen en local mediante getImageData de HTML5 Canvas: sus diseños y capturas de pantalla se mantienen completamente privados.',
      },
    ],
    faqs: [
      {
        question: '¿El selector de color de imagen toma muestras del archivo a resolución completa o de una vista previa reducida?',
        answer:
          'Cada movimiento y clic asigna las coordenadas del puntero de forma proporcional a un Canvas fuera de pantalla a resolución completa que coincide con el naturalWidth × naturalHeight real de su imagen. Aunque una foto grande de 4K se reduzca visualmente para caber en su pantalla, getImageData lee el píxel subyacente exacto.',
      },
      {
        question: '¿Cómo ayuda la lupa ampliada de 11×11 del selector de color a apuntar a líneas finas o iconos pequeños?',
        answer:
          'Al moverse por el lienzo se actualiza una lupa ampliada de 88×88 con interpolación de vecino más cercano que muestra una cuadrícula de 11×11 píxeles alrededor de su cursor, con una cruz de doble contorno sobre el píxel activo exacto. Eso evita tomar por accidente píxeles de borde con antialiasing junto a bordes nítidos.',
      },
      {
        question: '¿Qué formatos de código de color calcula automáticamente el selector de color para cada píxel elegido?',
        answer:
          'El Inspector de píxeles convierte el triplete RGB tomado al mismo tiempo en HEX en mayúsculas (#RRGGBB), rgb(r, g, b) de CSS, hsl(h, s%, l%) de CSS y valores CMYK en porcentaje. Cada fila tiene su propio botón de copia con un clic.',
      },
      {
        question: '¿Cuántos colores puedo reunir a la vez en Muestras guardadas del selector de color?',
        answer:
          'Al hacer clic en distintas partes de su foto se guardan hasta 24 muestras HEX únicas en orden cronológico (se omiten los duplicados automáticamente). Al pulsar cualquier pastilla de muestra guardada, se restaura en el inspector y se copia su código HEX directamente a su portapapeles.',
      },
      {
        question: '¿Qué descarga el botón Exportar CSS del selector de color?',
        answer:
          'Al pulsar Exportar CSS se genera una hoja de estilos picked-colors.css con un bloque :root que contiene propiedades personalizadas numeradas (--color-1, --color-2, etc.) y comentarios RGB junto a cada color de Muestras guardadas. Si aún no ha pulsado varios píxeles, exporta su píxel seleccionado actual.',
      },
      {
        question: '¿Por qué el selector de color ya muestra un color apenas carga una imagen?',
        answer:
          'Al cargar por primera vez, el inspector toma automáticamente el píxel central exacto de su imagen subida, para que vea de inmediato las lecturas HEX, RGB, HSL y CMYK en vivo antes de mover el mouse. Al moverse o hacer clic en cualquier lugar, esas lecturas se actualizan al instante.',
      },
      {
        question: '¿El selector de color admite pegar capturas con Ctrl+V para tomar colores de interfaz?',
        answer:
          'Sí, copie un fragmento de página web, una interfaz de app o un mockup de diseño a su portapapeles y pulse Ctrl+V (o Cmd+V en Mac) mientras la zona de subida está abierta. Se carga directamente en el lienzo de muestreo sin guardar primero un archivo temporal.',
      },
      {
        question: '¿Qué tipos de archivo puedo inspeccionar con la herramienta cuentagotas del selector de color?',
        answer:
          'Puede cargar imágenes JPG, PNG, WebP, HEIC/HEIF de iPhone, SVG, BMP y GIF de hasta 20 MB cada una. Los SVG vectoriales se rasterizan limpiamente en Canvas para que pueda tomar los colores de relleno renderizados exactos directamente.',
      },
      {
        question: '¿Qué tan precisos son los valores CMYK que muestra el Inspector de píxeles del selector de color?',
        answer:
          'Los porcentajes CMYK se calculan matemáticamente a partir de valores de píxel sRGB con fórmulas estándar de conversión RGB a CMYK. Para impresión offset comercial que exija perfiles ICC de prensa estrictos, tómelos como aproximaciones iniciales útiles y no como pruebas de tinta calibradas.',
      },
      {
        question: '¿Qué ocurre si tomo una muestra de una zona transparente en un logotipo PNG con el selector de color?',
        answer:
          'HTML5 Canvas lee los canales rojo, verde y azul en esa coordenada; los píxeles de Canvas totalmente transparentes usan por defecto 0, 0, 0 (#000000) cuando los canales RGB están vacíos. Tome la muestra directamente sobre trazos o formas opacas para inspeccionar los colores reales de su arte.',
      },
      {
        question: '¿Los mockups de interfaz privados o recursos de marca de clientes se suben a algún servidor con el selector de color?',
        answer:
          'No, la lectura de píxeles mediante getImageData de Canvas se ejecuta estrictamente en la memoria local de su navegador. Los diseños sin publicar, las capturas confidenciales y las fotos personales nunca salen de su computadora o celular.',
      },
      {
        question: '¿El selector de color funciona en Chrome, Safari y Firefox sin extensiones del navegador?',
        answer:
          'Sí, a diferencia de la API experimental EyeDropper del navegador, que solo funciona en Chromium de escritorio, nuestro muestreador de HTML5 Canvas funciona en Firefox, Safari, Edge y Chrome. No se necesitan extensiones, permisos especiales ni complementos.',
      },
      {
        question: '¿Cómo cambio a otra foto en el selector de color después de tomar muestras?',
        answer:
          'Pulse el botón Nueva imagen en la esquina superior derecha del encabezado del lienzo en cualquier momento. Eso borra la imagen activa, restablece limpiamente la lista de Muestras guardadas y lo devuelve a la zona de subida.',
      },
      {
        question: '¿Puedo inspeccionar las coordenadas exactas de píxel junto al valor de color en el selector de color?',
        answer:
          'Sí, el encabezado del Inspector de píxeles muestra las coordenadas x e y en vivo (por ejemplo, x:412, y:198) en tipo monoespaciado mientras pasa el cursor sobre el lienzo. Eso le ayuda a coincidir píxeles específicos de forma consistente en recursos grandes.',
      },
      {
        question: '¿Por qué el color de un clic dentro de una foto JPEG varía levemente entre píxeles adyacentes en el selector de color?',
        answer:
          'La compresión JPEG usa submuestreo de croma y transformadas por bloques que introducen leves variaciones de píxel a píxel en superficies planas. Con la lupa de 11×11 puede elegir un píxel representativo limpio, lejos de los bordes comprimidos.',
      },
      {
        question: '¿Puedo tocar colores con precisión en un iPad o celular con el selector de color?',
        answer:
          'Sí, al tocar cualquier zona del lienzo en el celular, el muestreador se activa en el punto tocado, fija la muestra, actualiza los cuatro formatos de color y agrega el código HEX a Muestras guardadas. También puede tocar cualquier pastilla de muestra guardada para copiarla.',
      },
      {
        question: '¿El selector de color reemplaza mis muestras guardadas si hago clic dos veces en el mismo color hexadecimal?',
        answer:
          'No, Muestras guardadas comprueba automáticamente las cadenas HEX coincidentes e ignora los duplicados. Eso mantiene ordenada su paleta reunida aunque tome varias veces el mismo fondo o color de marca.',
      },
      {
        question: '¿Por qué usar HSL junto a HEX y RGB al dar estilo a sitios web con el selector de color?',
        answer:
          'HSL (tono, saturación, luminosidad) facilita que los desarrolladores de CSS deriven estados hover más claros o bordes más oscuros ajustando solo el porcentaje de luminosidad mientras mantienen constante el tono. Tener HEX y HSL lado a lado ahorra conversiones manuales.',
      },
      {
        question: '¿Hasta cuántos MB puede pesar una imagen subida al selector de color?',
        answer:
          'Cada imagen subida puede pesar hasta 20 MB. Ese límite cubre con holgura fotos de cámara de muchos megapíxeles, exportaciones PNG grandes de Figma y capturas de pantalla de página completa.',
      },
      {
        question: '¿Hay algún costo, cuenta o límite sobre cuántos colores puedo tomar con el selector de color?',
        answer:
          'No, el selector de color de imagen es completamente gratis, sin cuentas ni muros de pago. Puede subir imágenes ilimitadas y exportar paletas de colores CSS sin marcas de agua.',
      },
    ],
    relatedSlugs: ['/favicon-generator', '/image-dimensions-checker', '/image-resizer', '/'],
  },

  {
    slug: '/image-dimensions-checker',
    name: 'Verificador de dimensiones de imagen',
    shortDescription: 'Compruebe ancho, alto, proporción, megapíxeles y tamaño de impresión.',
    category: 'developer',
    seoTitle: 'Verificador de dimensiones de imagen – Píxeles y MP',
    seoDescription:
      'Inspeccione ancho, alto, proporción, megapíxeles, alfa y tamaño de impresión a 300 DPI en lotes con este verificador de dimensiones de imagen gratis online.',
    h1: 'Verificador de dimensiones de imagen y proporción',
    subtitle:
      'Ideal para gerentes de comercio electrónico, compradores de anuncios, desarrolladores de interfaz y diseñadores de impresión, nuestro verificador de dimensiones de imagen lee el ancho y alto en píxeles, la proporción, los megapíxeles y el tamaño de impresión a 300 DPI en segundos. Suelte lotes completos de recursos, valide requisitos mínimos de píxeles y exporte informes limpios en CSV o JSON de forma privada en su dispositivo.',
    howToSteps: [
      {
        title: 'Arrastre o seleccione una o varias imágenes',
        description:
          'Suba archivos JPG, PNG, WebP, HEIC, SVG, BMP, GIF o AVIF de hasta 20 MB cada uno a la zona de subida, o péguelos con Ctrl+V.',
      },
      {
        title: 'Inspeccione las dimensiones en píxeles y las proporciones',
        description:
          'Revise el ancho × alto exactos (px), los megapíxeles, la orientación (horizontal, vertical, cuadrada) y la proporción simplificada y decimal en la tabla.',
      },
      {
        title: 'Verifique el peso del archivo, el formato y el canal alfa',
        description:
          'Consulte los valores de la columna Tamaño / Formato para detectar los tipos de contenedor reales, la cantidad de bytes y si existen píxeles alfa transparentes.',
      },
      {
        title: 'Compruebe el tamaño estimado de impresión a 300 DPI',
        description:
          'Mire la columna Impresión a 300 DPI para ver las dimensiones físicas máximas nítidas en pulgadas (ancho" × alto") antes de subir a laboratorios de impresión.',
      },
      {
        title: 'Ejecute comprobaciones de especificación mínima y exporte CSV o JSON',
        description:
          'Escriba reglas opcionales de Ancho mínimo (px) y Alto mínimo (px) para marcar Aprobado o Por debajo del mínimo, luego pulse Exportar CSV o Exportar JSON.',
      },
    ],
    features: [
      {
        title: 'Inspección de dimensiones por lotes',
        description:
          'Compruebe decenas de recursos a la vez: ideal para verificar imágenes de producto de tienda, creatividades de anuncios o capturas de app.',
      },
      {
        title: 'Proporciones exactas y comunes',
        description:
          'Calcula tanto la proporción simplificada matemáticamente como coincidencias con estándares comunes como 16:9, 4:3, 1:1 y 4:5.',
      },
      {
        title: 'Validador personalizado de mínimo y máximo',
        description:
          'Establezca reglas opcionales de ancho y alto mínimos o máximos para resaltar al instante las imágenes que pasan o no cumplen su especificación.',
      },
      {
        title: 'Exportación CSV y JSON',
        description:
          'Descargue una hoja de cálculo CSV limpia o un resumen JSON de todas las dimensiones de imagen inspeccionadas.',
      },
    ],
    faqs: [
      {
        question: '¿El verificador de dimensiones de imagen modifica o vuelve a guardar mis imágenes?',
        answer:
          'No, el verificador lee las dimensiones naturales en píxeles, los bytes del archivo y las propiedades del contenedor solo en la memoria del navegador. Nada se comprime, recorta, sobrescribe ni se sube a servidores externos.',
      },
      {
        question: '¿Con el verificador de dimensiones puedo inspeccionar lotes de formatos mezclados?',
        answer:
          'Puede soltar imágenes JPG, PNG, WebP, HEIC/HEIF de iPhone, SVG, BMP, GIF y AVIF compatibles con el navegador, de hasta 20 MB por archivo. Se pueden soltar formatos mezclados juntos en la misma tabla de lote.',
      },
      {
        question: '¿Cómo funciona el validador de Ancho mínimo y Alto mínimo del verificador de dimensiones?',
        answer:
          'Al escribir un umbral en píxeles en Ancho mínimo (px) o Alto mínimo (px) se agrega una columna de Comprobación de especificación en vivo a la tabla. Cada fila muestra de inmediato una insignia verde de Aprobado o una alerta ámbar de Por debajo del mínimo, para que las creatividades pequeñas destaquen rápido.',
      },
      {
        question: '¿Cómo se comparan las proporciones comunes como 16:9 o 4:5 con las proporciones exactas en el verificador de dimensiones?',
        answer:
          'Primero, la calculadora calcula la proporción ancho:alto reducida matemáticamente mediante el máximo común divisor y la proporción decimal (por ejemplo, 1,78:1). Cuando una imagen coincide o está muy cerca de proporciones de marco estándar como 16:9, 4:3, 3:2, 1:1, 4:5 o 9:16, muestra directamente esa etiqueta reconocible.',
      },
      {
        question: '¿Cómo se calcula la dimensión de Impresión a 300 DPI en el verificador de dimensiones a partir de píxeles?',
        answer:
          'El ancho y alto de impresión en pulgadas se calculan dividiendo el ancho y alto en píxeles entre 300 píxeles por pulgada (por ejemplo, 3000 × 2400 px equivalen a 10,0" × 8,0" a 300 DPI). El JSON exportado también conserva equivalentes de impresión a escala de pantalla de 72 DPI.',
      },
      {
        question: '¿Qué columnas se incluyen al pulsar Exportar CSV en el verificador de dimensiones?',
        answer:
          'Al pulsar Exportar CSV se descarga image-dimensions-report.csv con diez columnas estructuradas: Nombre de archivo, Ancho (px), Alto (px), Orientación, Proporción, Megapíxeles, Tamaño de archivo (bytes), Formato, Transparencia y Tamaño de impresión a 300 DPI. Los nombres de archivo con comas o comillas se escapan correctamente en CSV.',
      },
      {
        question: '¿Qué guarda Exportar JSON en el verificador de dimensiones en comparación con CSV?',
        answer:
          'Exportar JSON escribe un arreglo formateado de image-dimensions-report.json con objetos de metadatos limpios para cada fila inspeccionada (se omiten las URL de vista previa internas y los ID temporales de fila). Los desarrolladores y scripts de control de calidad pueden analizarlo directamente en comprobaciones automatizadas de recursos.',
      },
      {
        question: '¿Cómo detecta el verificador de dimensiones si un PNG o WebP tiene realmente transparencia alfa?',
        answer:
          'En vez de adivinar por la extensión del archivo, el cargador escanea los bytes alfa de píxel en Canvas para verificar si algún píxel tiene opacidad menor a 255. Las imágenes con regiones realmente transparentes muestran una etiqueta Alfa justo debajo de su formato.',
      },
      {
        question: '¿Puedo agregar carpetas o lotes adicionales a una tabla de dimensiones existente en el verificador?',
        answer:
          'Sí, al soltar o explorar más imágenes se agregan filas nuevas justo al final de su tabla existente sin borrar las entradas anteriores. Pulse Limpiar cuando quiera restablecer la tabla para un proyecto nuevo.',
      },
      {
        question: '¿Por qué las fotos de iPhone muestran Horizontal o Vertical con precisión en el verificador de dimensiones?',
        answer:
          'Los navegadores modernos normalizan automáticamente la rotación EXIF de la cámara al decodificar imágenes JPEG y HEIC en dimensiones naturales. Eso garantiza que una foto vertical de celular reporte correctamente la orientación vertical y los límites altos en píxeles.',
      },
      {
        question: '¿Cómo se calculan los megapíxeles (MP) de mis imágenes en el verificador de dimensiones?',
        answer:
          'Los megapíxeles equivalen a (ancho × alto) dividido entre 1 000 000, redondeado a dos decimales (por ejemplo, 1920 × 1080 = 2,07 MP). Eso coincide con los informes estándar de sensores de cámara y mercados de impresión.',
      },
      {
        question: '¿Qué ocurre si subo un archivo con una extensión engañosa al verificador de dimensiones, como un WebP llamado .jpg?',
        answer:
          'Nuestro inspector lee el tipo binario subyacente resuelto durante la decodificación en vez de confiar ciegamente en el sufijo del nombre de archivo. Verá el formato real detectado junto al peso exacto en bytes en la columna Tamaño / Formato.',
      },
      {
        question: '¿Puedo comprobar las dimensiones intrínsecas de gráficos SVG con el verificador de dimensiones?',
        answer:
          'Sí, los archivos SVG autónomos con atributos de ancho y alto o un viewBox se decodifican de forma nativa dentro del navegador. La tabla de dimensiones lee limpiamente su ancho, alto y proporción en píxeles renderizados.',
      },
      {
        question: '¿Las creatividades de anuncios sin publicar o fotos de producto confidenciales se envían online con el verificador de dimensiones?',
        answer:
          'Nunca: toda la decodificación de imágenes, la detección de transparencia, la comprobación de especificaciones y la generación de CSV/JSON se ejecutan dentro de su propia pestaña del navegador. Cero bytes salen de su dispositivo.',
      },
      {
        question: '¿El verificador de dimensiones acepta imágenes pegadas del portapapeles con Ctrl+V?',
        answer:
          'Sí, pulse Ctrl+V (o Cmd+V en Mac) para agregar una captura de pantalla o gráfico copiado directamente a la tabla de dimensiones. Puede leer de inmediato su tamaño exacto en píxeles, la cantidad de megapíxeles y la proporción.',
      },
      {
        question: '¿Por qué una imagen de producto de Amazon, Etsy o Shopify podría fallar la comprobación de Ancho mínimo en el verificador de dimensiones?',
        answer:
          'Muchos mercados exigen al menos 1000 px o 1200 px en el lado más corto o más largo para activar las vistas previas con zoom. Al escribir 1200 en Ancho mínimo puede auditar todo un catálogo de productos antes de subirlo.',
      },
      {
        question: '¿Qué ocurre si un archivo ilegible se mezcla en una gran suelta por lotes en el verificador de dimensiones?',
        answer:
          'Si un archivo supera el límite de 20 MB o no se puede decodificar en el navegador, UploadZone marca o salta ese elemento inválido sin problemas. Cada imagen válida de la misma suelta sigue apareciendo normalmente en su tabla de dimensiones.',
      },
      {
        question: '¿Puedo usar este verificador de dimensiones en un celular o tableta?',
        answer:
          'Sí, abra la herramienta en Safari de iOS o Chrome de Android, elija fotos de su galería e inspeccione las dimensiones exactas en píxeles y los tamaños en megapíxeles sobre la marcha. La tabla se desplaza horizontalmente en pantallas estrechas para que no se recorte ninguna columna.',
      },
      {
        question: '¿Cómo corrijo una imagen que falla mi comprobación de especificación mínima o tiene una proporción incorrecta según el verificador de dimensiones?',
        answer:
          'Pulse las tarjetas enlazadas de Redimensionador de imágenes o Recortador de imágenes en Herramientas gratuitas relacionadas debajo de la guía. Puede recortar a una proporción exacta de 16:9, 4:5 o 1:1 o escalar las dimensiones directamente en su navegador.',
      },
      {
        question: '¿Hay algún límite diario o tarifa para los informes de dimensiones por lotes del verificador?',
        answer:
          'No, inspeccionar lotes ilimitados de imágenes de hasta 20 MB por archivo es completamente gratis. Puede descargar informes CSV y JSON tan seguido como necesite, sin cuentas ni marcas de agua.',
      },
    ],
    relatedSlugs: ['/image-resizer', '/image-metadata-viewer', '/image-color-picker', '/'],
  },

  {
    slug: '/blur-pixelate-image',
    name: 'Desenfocar y pixelar imagen',
    shortDescription: 'Desenfoque o pixele toda la foto o solo zonas sensibles con el pincel.',
    category: 'crop-edit',
    seoTitle: 'Desenfocar y pixelar imagen gratis online – Censurar',
    seoDescription:
      'Desenfoque o pixele zonas de imagen online con un pincel de censura suave o en modo de marco completo. Oculte rostros, placas y texto privado en su navegador.',
    h1: 'Desenfocar y pixelar imagen online',
    subtitle:
      'Hecha para periodistas, docentes, vendedores de mercados online y usuarios de privacidad de todos los días, esta herramienta de navegador le permite desenfocar o pixelar detalles de imagen de forma permanente antes de compartir online. Pinte selectivamente sobre rostros, placas o direcciones con el pincel interactivo de censura, o aplique desenfoque suave y pixelación en todo el marco en local.',
    howToSteps: [
      {
        title: 'Suba una foto o captura de pantalla',
        description:
          'Arrastre cualquier imagen JPG, PNG, WebP, HEIC, GIF, BMP o SVG de hasta 20 MB a la zona de subida, o péguela directamente con Ctrl+V.',
      },
      {
        title: 'Elija Área de pincel o Imagen completa',
        description:
          'Mantenga Área de pincel seleccionada para censurar solo las regiones pintadas, como rostros y números, o cambie a Imagen completa para desenfocar o pixelar todo el marco.',
      },
      {
        title: 'Elija Mosaico pixelado o Desenfoque suave',
        description:
          'Alterne entre mosaicos de Mosaico pixelado en bloques o Desenfoque suave según el estilo que quiera.',
      },
      {
        title: 'Ajuste la intensidad y el tamaño del pincel',
        description:
          'Ajuste Tamaño de bloque de mosaico (4–60 px) o Radio de desenfoque (2–50 px), y afine el Tamaño de pincel (2 %–20 %) al pintar de forma selectiva.',
      },
      {
        title: 'Pinte sobre los detalles sensibles',
        description:
          'Haga clic y arrastre directamente sobre rostros, placas o texto privado en el lienzo de vista previa; pulse Deshacer o Restablecer pincel cuando quiera.',
      },
      {
        title: 'Elija el formato y descargue',
        description:
          'Elija la salida Orig, JPG, PNG o WebP, ajuste la Calidad (10 %–100 %) para formatos con pérdida y pulse Descargar imagen para guardar en local.',
      },
    ],
    features: [
      {
        title: 'Pincel interactivo de censura',
        description:
          'Pinte sobre rostros, direcciones o placas con tamaño de pincel ajustable y deshacer de trazos.',
      },
      {
        title: 'Desenfoque y mosaico de imagen completa',
        description:
          'Desenfoque fondos rápidamente o cree efectos de mosaico retro de pixel art en todo el marco.',
      },
      {
        title: 'Cero subidas al servidor',
        description:
          'Como oculta detalles sensibles, nada sale jamás de su dispositivo.',
      },
      {
        title: 'Exportación a resolución completa',
        description:
          'Las coordenadas del pincel se asignan con precisión a los píxeles completos de la imagen original para exportaciones nítidas.',
      },
    ],
    faqs: [
      {
        question: '¿Las regiones desenfocadas o pixeladas con esta herramienta de desenfoque pueden deshacerse o revertirse desde el archivo descargado?',
        answer:
          'No, al exportar, sus trazos se aplanan directamente en un único mapa de bits plano (JPG, PNG o WebP) sin capas ocultas ni historial de deshacer dentro de la imagen. Una vez descargada, los píxeles nítidos originales detrás de la máscara censurada desaparecen para siempre.',
      },
      {
        question: '¿Por qué el mosaico pixelado suele ser más seguro que un desenfoque suave ligero para ocultar texto?',
        answer:
          'Un tamaño de bloque de mosaico agresivo (de 20 px a 60 px) fusiona los caracteres en grandes cuadrados de color sólido y destruye por completo los contornos finos de las letras. Los radios de desenfoque muy pequeños a veces dejan formas de palabras apenas adivinables, así que usar un radio de desenfoque mayor o el mosaico pixelado da una redacción más fuerte.',
      },
      {
        question: '¿Cómo mantiene el modo Área de pincel de desenfoque las zonas nítidas fuera de mis trazos sin tocarlas?',
        answer:
          'En el modo Área de pincel, su imagen base se dibuja con total claridad mientras cada trazo pintado actúa como una máscara alfa fuera de pantalla que compone solo la región desenfocada o pixelada encima. Las partes sin pintar de la foto se mantienen completamente nítidas.',
      },
      {
        question: '¿Puedo mezclar trazos pixelados y trazos desenfocados en la misma imagen con la herramienta de desenfoque?',
        answer:
          'Sí, cada trazo guarda el estilo de efecto (Mosaico pixelado o Desenfoque suave), la intensidad y el radio de pincel activos cuando lo pintó. Puede pixelar primero una placa, cambiar a Desenfoque suave y pintar el rostro de fondo en la misma foto.',
      },
      {
        question: '¿Pintar en la vista previa escalada se asigna con precisión a fotos de cámara enormes en la herramienta de desenfoque?',
        answer:
          'Sí, todas las coordenadas del puntero se guardan en proporciones normalizadas de 0 a 1 junto con el escalado proporcional del pincel y del efecto. Al pulsar Descargar imagen, el compuesto se renderiza en un lienzo a resolución completa que coincide con las dimensiones de su fuente.',
      },
      {
        question: '¿Cómo corrijo un desliz al pintar sobre un rostro o una dirección con la herramienta de desenfoque?',
        answer:
          'Pulse el botón Deshacer sobre el lienzo de vista previa para eliminar solo su trazo más reciente sin borrar redacciones anteriores. Si quiere empezar limpio, pulse Restablecer pincel para borrar todos los trazos de inmediato.',
      },
      {
        question: '¿Qué hace cambiar el Área objetivo a Imagen completa en la herramienta de desenfoque?',
        answer:
          'Imagen completa aplica su radio de Desenfoque suave o tamaño de bloque de Mosaico pixelado activos de forma uniforme en cada píxel de borde a borde. Es útil para crear placas de fondo soñadoras, fondos de héroe o texturas retro de pixel art sin pintar.',
      },
      {
        question: '¿Las fotos sin redactar con rostros, identificaciones o direcciones privadas se envían a algún servidor con la herramienta de desenfoque?',
        answer:
          'Nunca: subir imágenes sensibles sin censurar a un servidor remoto comprometería la privacidad antes incluso de ocultar nada. Cada máscara de lienzo, pasada de desenfoque y descarga final se ejecuta estrictamente dentro de su navegador.',
      },
      {
        question: '¿Qué tamaño de pincel y de bloque de mosaico debo usar para capturas pequeñas en la herramienta de desenfoque?',
        answer:
          'Para capturas de chat o de celular, un tamaño de pincel de 4 %–8 % apunta limpiamente a líneas individuales de texto o nombres de usuario sin manchar mensajes cercanos. Un tamaño de bloque de mosaico de alrededor de 12–24 px suele ocultar texto pequeño de forma legible.',
      },
      {
        question: '¿Qué tipos de archivo acepta la herramienta de desenfoque para pixelar o desenfocar?',
        answer:
          'Puede subir imágenes JPG, PNG, WebP, HEIC/HEIF de iPhone, GIF, BMP y SVG de hasta 20 MB por archivo. Tenga en cuenta que los GIF animados de varios marcos censuran y exportan su primer fotograma como un archivo estático.',
      },
      {
        question: '¿Puedo censurar partes sensibles de una captura pegada con Ctrl+V en la herramienta de desenfoque?',
        answer:
          'Sí, tome una captura de pantalla a su portapapeles y pulse Ctrl+V (o Cmd+V en Mac) mientras la zona de subida está visible. Se abre directamente en el modo Área de pincel, lista para redactar y guardar.',
      },
      {
        question: '¿La exportación de la herramienta de desenfoque conserva los fondos transparentes de gráficos PNG o WebP?',
        answer:
          'Sí, mantener Orig (para PNG/WebP) o elegir PNG o WebP mantiene intacta la transparencia alfa alrededor de pegatinas no rectangulares o recortes de interfaz. Al elegir JPG se exporta una imagen JPEG opaca.',
      },
      {
        question: '¿Por qué los botones Deshacer y Restablecer pincel solo se ven en el modo Área de pincel de la herramienta de desenfoque?',
        answer:
          'Esos botones gestionan trazos de pincel pintados individuales, así que se ocultan automáticamente al cambiar al modo Imagen completa. Al volver a Área de pincel, sus trazos guardados se restauran justo donde los dejó.',
      },
      {
        question: '¿Puedo usar mi dedo o Apple Pencil en un celular o tableta para pintar trazos de censura con la herramienta de desenfoque?',
        answer:
          'Sí, el lienzo adjunta eventos Pointer con touch-none creados específicamente para pantallas táctiles y lápices ópticos. Puede arrastrar trazos de censura sobre rostros o texto sin problemas y sin desplazar la página por accidente.',
      },
      {
        question: '¿Censurar y exportar con la herramienta de desenfoque también elimina las etiquetas GPS EXIF de la cámara?',
        answer:
          'Sí, renderizar el compuesto redactado a través de un HTML5 Canvas nuevo omite automáticamente los encabezados EXIF de JPEG y las coordenadas GPS originales. Eso protege tanto los detalles visuales como los metadatos ocultos del archivo.',
      },
      {
        question: '¿Por qué se oculta Calidad al elegir salida PNG en la herramienta de desenfoque?',
        answer:
          'PNG usa compresión de píxeles sin pérdida, así que los porcentajes de calidad con pérdida no aplican. Seleccione Orig (al editar un JPEG), JPG o WebP si quiere ajustar el deslizador de Calidad de 10 %–100 %.',
      },
      {
        question: '¿Qué nombre de archivo se usa al guardar mi foto desenfocada o pixelada con esta herramienta?',
        answer:
          'El descargador conserva su nombre base de archivo saneado y agrega _blur o _pixelate según su estilo de efecto activo. Eso le permite mantener las exportaciones censuradas (como receipt_pixelate.png) organizadas limpiamente junto a los originales.',
      },
      {
        question: '¿Qué hago si quiero desenfocar todo el fondo de un retrato limpiamente sin pintar con la herramienta de desenfoque?',
        answer:
          'Use el modo Imagen completa cuando quiera un suavizado uniforme del fondo detrás de gráficos superpuestos o tarjetas de interfaz. Para aislar un sujeto sobre un fondo limpio, combínelo con nuestra herramienta Eliminador de fondo.',
      },
      {
        question: '¿Qué tan fuerte pueden llegar el desenfoque suave y el mosaico pixelado de la herramienta de desenfoque?',
        answer:
          'El radio de desenfoque va desde un suavizado sutil de 2 px hasta un desenfoque pesado de 50 px estilo gaussiano. El tamaño de bloque de mosaico abarca desde mosaicos finos de 4 px hasta bloques gruesos de 60 px, escalados en proporción a la resolución de su fuente.',
      },
      {
        question: '¿Hay marcas de agua, límites diarios o registros para censurar fotos con la herramienta de desenfoque?',
        answer:
          'No, puede desenfocar o pixelar fotos de hasta 20 MB por archivo sin marcas de agua ni registros. Todo el procesamiento local se mantiene completamente gratis en exportaciones ilimitadas.',
      },
    ],
    relatedSlugs: ['/remove-image-metadata', '/image-cropper', '/image-filters', '/'],
  },

  {
    slug: '/add-text-to-image',
    name: 'Agregar texto a imagen',
    shortDescription: 'Agregue capas de texto arrastrables con estilo, con fuentes, contorno y sombra.',
    category: 'crop-edit',
    seoTitle: 'Agregar texto a imagen gratis online – Fuentes y capas',
    seoDescription:
      'Agregue texto a imágenes gratis con capas arrastrables, 5 fuentes, negrita/cursiva, contornos, sombras y rotación en nuestro editor online, sin marca de agua.',
    h1: 'Agregar texto a imagen online',
    subtitle:
      'Creada para creadores de contenido, gestores de redes sociales, docentes y creadores de memes, esta herramienta privada facilita agregar texto a archivos de imagen sin apps de diseño pesadas. Superponga varios titulares o subtítulos de varias líneas, personalice fuentes, contornos, sombras y rotación, y exporte limpiamente sin marcas de agua.',
    howToSteps: [
      {
        title: 'Suba una imagen o péguela desde el portapapeles',
        description:
          'Arrastre una foto JPG, PNG, WebP, HEIC, GIF, BMP o SVG de hasta 20 MB a la zona de subida, o péguela directamente con Ctrl+V.',
      },
      {
        title: 'Escriba texto de varias líneas y gestione capas',
        description:
          'Edite su texto dentro de Contenido de texto (Enter agrega saltos de línea) y pulse Agregar para apilar capas extra como Texto 1, Texto 2, o eliminar las que no quiera.',
      },
      {
        title: 'Elija fuente, color de relleno, Negrita y Cursiva',
        description:
          'Elija entre Inter, Impact, Georgia, Courier o Trebuchet, ajuste su selector de color de relleno de texto y active el estilo Negrita o Cursiva.',
      },
      {
        title: 'Ajuste Tamaño, Rotación, Contorno y Sombra',
        description:
          'Deslice Tamaño (2 %–22 %) y Rotación (-180° a +180°), luego personalice el color y ancho del Contorno de texto (1–10) más la Sombra paralela opcional.',
      },
      {
        title: 'Arrastre capas directamente sobre la imagen',
        description:
          'Haga clic y arrastre cualquier bloque de texto directamente en el lienzo de vista previa para colocar titulares, subtítulos de memes o llamadas de capturas con precisión.',
      },
      {
        title: 'Elija el formato de salida y descargue',
        description:
          'Seleccione la salida Orig, JPG, PNG o WebP, ajuste la Calidad (10 %–100 %) para archivos con pérdida y pulse Descargar imagen con texto.',
      },
    ],
    features: [
      {
        title: 'Varias capas de texto arrastrables',
        description:
          'Agregue titulares, subtítulos y llamadas, y arrastre cada una de forma independiente en el lienzo.',
      },
      {
        title: 'Controles ricos de tipografía',
        description:
          'Elija fuentes, tamaños, pesos de negrita/cursiva, colores, contornos de trazo y sombras paralelas.',
      },
      {
        title: 'Control de ángulo y alineación',
        description:
          'Gire cualquier capa de texto suavemente de -180° a +180°.',
      },
      {
        title: 'Exportación limpia a resolución completa',
        description:
          'Sin marcas de agua agregadas: descargue directamente en JPG, PNG o WebP.',
      },
    ],
    faqs: [
      {
        question: '¿Puedo agregar varios titulares separados o subtítulos de meme arriba y abajo con la herramienta de agregar texto?',
        answer:
          'Sí, pulse el botón Agregar junto a la pestaña Texto 1 para crear Texto 2, Texto 3 y tantas capas de texto independientes como necesite. Cada capa conserva su propia fuente, color, tamaño, rotación, contorno y posición de arrastre en la imagen.',
      },
      {
        question: '¿Qué fuentes incluye el editor de agregar texto a imagen?',
        answer:
          'Puede cambiar al instante entre cinco familias confiables de sistema: Inter / Sans limpia, Impact / Pantalla de meme, Georgia / Serif clásica, Courier / Monoespaciada y Trebuchet / Sans redondeada. Las cinco funcionan de forma confiable sin conexión, sin esperar descargas de fuentes externas.',
      },
      {
        question: '¿Cómo creo texto de meme blanco clásico con un borde oscuro grueso al agregar texto a imagen?',
        answer:
          'Seleccione Impact / Pantalla de meme, deje Negrita activa y el Relleno en blanco (#ffffff), y mantenga Contorno de texto activado con un color de contorno oscuro como #0f172a o negro. Arrastre el deslizador de grosor de contorno hacia 6–10 para un contraste inconfundible.',
      },
      {
        question: '¿Pulsar Enter dentro de Contenido de texto crea subtítulos de varias líneas al agregar texto a imagen?',
        answer:
          'Sí, Contenido de texto admite saltos de línea completos de varias líneas, centrados ordenadamente con un multiplicador de altura de línea de 1,22. Eso facilita apilar citas de varias líneas, llamadas de tutoriales o subtítulos largos sin crear capas separadas por línea.',
      },
      {
        question: '¿Cómo selecciono y muevo una capa específica cuando tengo varias en la foto al agregar texto a imagen?',
        answer:
          'Pulse una pestaña de capa (Texto 1, Texto 2, etc.) en el panel derecho para cambiar los controles de tipografía activos. También puede hacer clic directamente cerca de cualquier bloque de texto en el lienzo: el editor toma la capa más cercana a su puntero.',
      },
      {
        question: '¿Puedo inclinar el texto en diagonal en ángulos personalizados al agregar texto a imagen?',
        answer:
          'Sí, arrastre el deslizador de Rotación a cualquier punto entre -180° y +180° para cada capa de texto activa. Cada bloque gira suavemente alrededor de sus coordenadas centrales para sellos en ángulo, llamadas o subtítulos divertidos.',
      },
      {
        question: '¿Cómo escala el tamaño de texto (2 %–22 %) en fotos pequeñas frente a fotos 4K al agregar texto a imagen?',
        answer:
          'El tamaño de fuente escala como porcentaje del ancho de su imagen de salida (con un mínimo de 12 px). Eso mantiene las proporciones consistentes entre la vista previa en pantalla y los archivos exportados a resolución completa.',
      },
      {
        question: '¿Las capturas de pantalla o fotos familiares se suben a algún lugar al agregar subtítulos con esta herramienta?',
        answer:
          'No, la composición en Canvas renderiza cada glifo de fuente, trazo, sombra y rotación en local dentro de su pestaña del navegador. Sus imágenes base y gráficos terminados nunca salen de su dispositivo.',
      },
      {
        question: '¿Qué ocurre con las pegatinas PNG transparentes si exporto con texto agregado a la imagen?',
        answer:
          'Al elegir Orig (desde PNG/WebP), PNG o WebP se conservan limpiamente las zonas transparentes alrededor de su gráfico. Si elige salida JPG, las regiones transparentes se aplanan suavemente sobre un fondo blanco sólido.',
      },
      {
        question: '¿Cómo elimino una capa de texto extra sin borrar toda la imagen al agregar texto?',
        answer:
          'Seleccione la pestaña de capa que quiere descartar y pulse el icono de papelera junto al botón Agregar. Cuando solo queda una capa, borrar su cuadro de texto la oculta temporalmente sin perder el editor.',
      },
      {
        question: '¿Puedo cambiar la foto de fondo sin perder mis capas de texto con estilo al agregar texto a imagen?',
        answer:
          'Pulse Cambiar imagen en el encabezado de vista previa para volver a la zona de subida y cargar otro archivo. Sus capas de texto y estilos existentes se mantienen listos para que pueda reutilizar la misma configuración de subtítulo en varias fotos.',
      },
      {
        question: '¿Qué tipos de archivo abre el editor de agregar texto a imagen?',
        answer:
          'El editor abre archivos JPG, PNG, WebP, HEIC/HEIF de iPhone, GIF, BMP y SVG de hasta 20 MB cada uno. Los GIF animados se exportan como un solo fotograma estático con subtítulo.',
      },
      {
        question: '¿Puedo arrastrar y soltar capas de texto con la pantalla táctil de un celular al agregar texto a imagen?',
        answer:
          'Sí, el arrastre en lienzo usa eventos Pointer con touch-none diseñados para dedos y lápices ópticos. Puede reubicar subtítulos limpiamente en Safari de iOS y Chrome de Android sin desplazar la página.',
      },
      {
        question: '¿Cómo mejora la legibilidad la sombra paralela junto al contorno de texto al agregar texto a imagen?',
        answer:
          'La sombra paralela proyecta un desenfoque oscuro suave, escalado en proporción a su tamaño de fuente, debajo de las letras. Activar la sombra paralela sin contorno crea subtítulos editoriales limpios, mientras que combinar ambas maximiza la legibilidad sobre texturas ocupadas.',
      },
      {
        question: '¿Puedo pegar una captura con Ctrl+V para anotarla rápido al agregar texto a imagen?',
        answer:
          'Sí, copie cualquier captura de pantalla o diapositiva y pulse Ctrl+V (o Cmd+V en Mac) en la página antes de cargar un archivo. Se carga directamente en el lienzo, lista para llamadas de texto y exportación limpia.',
      },
      {
        question: '¿Por qué se oculta el deslizador de Calidad con PNG al agregar texto a imagen?',
        answer:
          'PNG codifica imágenes sin pérdida, sin un porcentaje de calidad de compresión. Elija Orig (para JPEG), JPG o WebP si quiere ajustar la Calidad de exportación de 10 % a 100 %.',
      },
      {
        question: '¿Agregar texto con Canvas elimina las etiquetas GPS EXIF ocultas de la cámara?',
        answer:
          'Sí, dibujar en un HTML5 Canvas nuevo crea un mapa de bits nuevo sin copiar los encabezados EXIF. Su ubicación GPS y los metadatos de la cámara quedan eliminados de la exportación guardada.',
      },
      {
        question: '¿Qué nombre de archivo se guarda al descargar una foto anotada con la herramienta de agregar texto?',
        answer:
          'Los archivos descargados conservan su nombre base de archivo saneado y agregan _text más la extensión elegida (como meme_text.jpg). Eso evita sobrescribir su imagen original sin anotar.',
      },
      {
        question: '¿En qué se diferencia agregar texto a imagen de la herramienta Marca de agua de imagen?',
        answer:
          'Marca de agua de imagen se centra en sellos de marca únicos o en mosaico diagonal y logotipos PNG/SVG subidos. Agregar texto a imagen, en cambio, ofrece varias capas de texto independientes arrastrables, 5 fuentes, controles de negrita/cursiva y trazos gruesos de meme.',
      },
      {
        question: '¿CompressMyPic coloca algún logotipo o marca de agua en las imágenes exportadas al agregar texto?',
        answer:
          'No, sus archivos descargados contienen solo su imagen y las capas de texto exactas que creó. Todo funciona gratis en su navegador, sin marcas de agua y sin registro.',
      },
    ],
    relatedSlugs: ['/image-watermark', '/image-border-generator', '/image-filters', '/'],
  },

  {
    slug: '/image-border-generator',
    name: 'Generador de bordes para imágenes',
    shortDescription: 'Agregue bordes sólidos o de degradado, marcos, esquinas redondeadas y sombras.',
    category: 'crop-edit',
    seoTitle: 'Generador de bordes para imágenes gratis online',
    seoDescription:
      'Enmarque fotos rápido con el generador de bordes para imágenes gratis. Aplique marcos sólidos, de degradado lineal o Polaroid, esquinas redondeadas y sombras.',
    h1: 'Generador de bordes para imágenes gratis',
    subtitle:
      'Creado para fotógrafos, dueños de tiendas de Etsy, diseñadores de portafolios y creadores sociales, nuestro generador de bordes para imágenes gratis envuelve cualquier foto en paspartús de galería nítidos, degradados de dos colores o marcos clásicos Polaroid. Afine el grosor del borde, los radios de esquina interior y exterior y las sombras de elevación directamente en su navegador antes de exportar.',
    howToSteps: [
      {
        title: 'Arrastre o seleccione una imagen para enmarcar',
        description:
          'Suba cualquier foto JPG, PNG, WebP, HEIC, GIF, BMP o SVG de hasta 20 MB, o péguela con Ctrl+V.',
      },
      {
        title: 'Elija una plantilla rápida de marco o un estilo de borde',
        description:
          'Pulse las plantillas Blanco clásico, Marco Polaroid, Estudio oscuro o Brillo de degradado, o cambie manualmente entre los estilos Sólido, Degradado y Polaroid.',
      },
      {
        title: 'Personalice los colores del marco y el ángulo del degradado',
        description:
          'Establezca el Color de borde en modo Sólido o Polaroid, o elija Color inicial, Color final y Ángulo de degradado (0°–360°) para marcos de degradado lineal.',
      },
      {
        title: 'Ajuste el tamaño del borde y los radios de esquina',
        description:
          'Deslice Tamaño de borde (1 %–25 %) junto con los deslizadores independientes de Radio del marco (0 %–30 %) y Radio de foto (0 %–30 %).',
      },
      {
        title: 'Elija la sombra paralela y el formato de vista previa',
        description:
          'Seleccione Sombra paralela ninguna, suave, media o profunda, y elija la salida PNG, JPG o WEBP mientras revisa la vista previa de cuadros.',
      },
      {
        title: 'Descargue su imagen enmarcada',
        description:
          'Pulse Descargar imagen enmarcada para renderizar el borde y la sombra a resolución completa de la fuente y guardar &lt;nombre&gt;_framed.',
      },
    ],
    features: [
      {
        title: 'Bordes sólidos y de degradado',
        description:
          'Cree paspartús de galería limpios o marcos vibrantes de degradado lineal de dos colores.',
      },
      {
        title: 'Estilos de marco predefinidos',
        description:
          'Aplique al instante looks Polaroid, Blanco de galería, Estudio oscuro o Degradado al atardecer.',
      },
      {
        title: 'Radio de esquina y sombra paralela',
        description:
          'Redondee las esquinas de la foto interior o del marco exterior y agregue sombras de elevación realistas.',
      },
      {
        title: 'Soporte PNG sin pérdida',
        description:
          'Exporte PNG para conservar las esquinas exteriores transparentes alrededor de sombras y marcos redondeados.',
      },
    ],
    faqs: [
      {
        question: '¿En qué se diferencia el estilo de borde Polaroid del generador de bordes de un borde sólido estándar?',
        answer:
          'Los bordes sólidos envuelven un relleno uniforme alrededor de los cuatro bordes de su foto, mientras que Polaroid agrega 3,2× más altura de marco blanco en el borde inferior para replicar las impresiones clásicas de película instantánea. Al pulsar la plantilla Marco Polaroid se configuran proporciones limpias con un clic.',
      },
      {
        question: '¿Por qué desaparecen las sombras paralelas en el generador de bordes al cambiar el formato de salida a JPG?',
        answer:
          'Los archivos JPG no admiten un canal alfa de transparencia para que las sombras de elevación semitransparentes y suaves se fundan limpiamente sobre fondos de página. Nuestro renderizador conserva el relleno de sombra paralela en exportaciones transparentes PNG y WebP, mientras mantiene bordes nítidos en JPG de blanco sólido.',
      },
      {
        question: '¿Cuál es la diferencia entre Radio del marco y Radio de foto en el generador de bordes?',
        answer:
          'Radio del marco (0 %–30 %) curva las esquinas exteriores del propio borde de color, mientras que Radio de foto (0 %–30 %) curva las esquinas interiores de su fotografía dentro de ese paspartú. Combinar o contrastar ambos le permite crear tarjetas de interfaz elegantes o paspartús de galería nítidos.',
      },
      {
        question: '¿Cómo calcula el marco Brillo de degradado del generador de bordes el ángulo y los colores?',
        answer:
          'Al seleccionar el estilo Degradado se muestran Color inicial, Color final y un deslizador de Ángulo de degradado de 0°–360° que dibuja un degradado lineal direccional o diagonal completo detrás de su foto. Puede pulsar Brillo de degradado en Plantillas rápidas de marco para un estilo de tarjeta azul a esmeralda al instante.',
      },
      {
        question: '¿Agregar un borde con el generador de bordes recorta algún borde de mi foto original?',
        answer:
          'No, el generador de bordes para imágenes expande el lienzo hacia afuera alrededor del ancho y alto completos de su imagen original en vez de cubrir sus píxeles. Solo al establecer Radio de foto por encima de 0 % se redondean suavemente las cuatro esquinas interiores de la imagen.',
      },
      {
        question: '¿Cómo se calcula el tamaño de borde (1 %–25 %) del generador de bordes en fotos altas frente a anchas?',
        answer:
          'El grosor del borde se calcula como porcentaje de la dimensión más corta de su imagen, min(ancho, alto). Eso mantiene equilibrados los márgenes superior, inferior y laterales tanto en pancartas 16:9 como en retratos 4:5.',
      },
      {
        question: '¿Qué configuran automáticamente las cuatro plantillas rápidas de marco del generador de bordes?',
        answer:
          'Blanco clásico establece un paspartú de galería blanco de 10 % con sombra suave, mientras que Marco Polaroid agrega un margen inferior de impresión instantánea. Estudio oscuro aplica un marco pizarra y Brillo de degradado crea un borde de degradado azul a esmeralda de 135°.',
      },
      {
        question: '¿Por qué la vista previa del generador de bordes muestra un damero gris y blanco alrededor de mi marco?',
        answer:
          'Ese damero visualiza los píxeles realmente transparentes fuera de las esquinas redondeadas del marco y dentro de las sombras paralelas suaves. Al exportar como PNG o WebP, esas regiones de damero quedan completamente transparentes en cualquier sitio web o diapositiva de presentación.',
      },
      {
        question: '¿El enmarcado del generador de bordes se ejecuta en local sin subir mi fotografía?',
        answer:
          'Sí, la pintura de degradados, el recorte de esquinas, el renderizado de sombras y la exportación de Blob ocurren estrictamente dentro de HTML5 Canvas en su dispositivo. Nada se sube jamás a servidores externos.',
      },
      {
        question: '¿Qué tipos de archivo puedo soltar en el generador de bordes?',
        answer:
          'Puede soltar imágenes JPG, PNG, WebP, HEIC/HEIF de iPhone, GIF, BMP y SVG de hasta 20 MB cada una. Los GIF animados se exportan como un primer fotograma estático enmarcado.',
      },
      {
        question: '¿Puedo cambiar el color del marco de una plantilla rápida del generador de bordes después de pulsarla?',
        answer:
          'Sí, las plantillas simplemente rellenan por usted los controles de estilo de borde, color, radio y sombra. Puede ajustar el Color de borde, cambiar el tamaño de los márgenes o cambiar la Sombra paralela de inmediato después.',
      },
      {
        question: '¿Cómo creo un marco de galería carbón oscuro o pastel sin sombra con el generador de bordes?',
        answer:
          'Elija el estilo Sólido, pulse Color de borde para seleccionar cualquier tono hexadecimal personalizado y arrastre tanto Radio del marco como Radio de foto a 0 %. Luego pulse ninguna en Sombra paralela para bordes planos nítidos.',
      },
      {
        question: '¿Mi imagen enmarcada descargada del generador de bordes será a resolución completa?',
        answer:
          'Sí, la vista previa en pantalla se reduce solo para caber cómodamente dentro de su diseño. Al pulsar Descargar imagen enmarcada se construye un Canvas nuevo con la resolución exacta en píxeles de su foto original más el marco y la sombra escalados.',
      },
      {
        question: '¿Debo exportar PNG o WebP en el generador de bordes al mantener esquinas redondeadas transparentes del marco?',
        answer:
          'Elija PNG cuando quiera nitidez sin pérdida alrededor de bordes finos y recursos de impresión. Elija WebP para tarjetas de sitio web rápidas y ligeras que aún conserven las esquinas exteriores transparentes y las sombras de elevación.',
      },
      {
        question: '¿Puedo pegar una captura directamente desde mi portapapeles en el generador de bordes para envolverla en un marco de tarjeta?',
        answer:
          'Sí, pulse Ctrl+V (o Cmd+V en Mac) en la zona de subida justo después de tomar una captura de pantalla. Combinar un borde redondeado, un marco de degradado y una Sombra paralela media convierte capturas sin procesar en visuales de presentación pulidos.',
      },
      {
        question: '¿El generador de bordes elimina los datos GPS EXIF ocultos de la cámara al agregar un borde?',
        answer:
          'Sí, al componer en HTML5 Canvas se crea un mapa de bits enmarcado limpio. Los encabezados EXIF de la cámara de origen y las coordenadas GPS se excluyen automáticamente de su PNG, JPG o WebP descargado.',
      },
      {
        question: '¿Cómo cargo una segunda foto en el generador de bordes mientras pruebo marcos?',
        answer:
          'Pulse Cambiar imagen en la esquina superior derecha del panel de vista previa para elegir otra foto. Todos sus colores de borde, ángulos de degradado, radios de esquina y elecciones de sombra activos se mantienen intactos.',
      },
      {
        question: '¿Con qué nombre de archivo se guarda la imagen enmarcada del generador de bordes?',
        answer:
          'Las exportaciones conservan su nombre de archivo original saneado con _framed agregado antes de .png, .jpg o .webp. Por ejemplo, un archivo llamado portrait.jpg se guarda limpiamente como portrait_framed.png.',
      },
      {
        question: '¿El generador de bordes funciona bien en navegadores de celular?',
        answer:
          'Sí, cada tarjeta de plantilla, deslizador de rango y selector de color funciona limpiamente en Safari de iOS y Chrome de Android. Puede enmarcar Polaroids o fotos de producto directamente desde la galería de su celular.',
      },
      {
        question: '¿Hay marcas de agua, muros de pago o límites de registro en las fotos enmarcadas del generador de bordes?',
        answer:
          'No, cada foto enmarcada se descarga completamente sin marca de agua y gratis. Solo aplica la comprobación estándar de 20 MB por archivo para mantener fluida la memoria local del navegador.',
      },
    ],
    relatedSlugs: ['/round-image-corners', '/add-background-to-image', '/image-filters', '/'],
  },

  {
    slug: '/round-image-corners',
    name: 'Redondear esquinas de imagen',
    shortDescription: 'Redondee esquinas de forma uniforme o por esquina con salida PNG transparente.',
    category: 'crop-edit',
    seoTitle: 'Redondear esquinas de imagen gratis online – PNG',
    seoDescription:
      'Redondee esquinas de imagen online gratis con deslizadores uniformes o por esquina, plantilla de avatar circular y exportación PNG o WebP transparente.',
    h1: 'Redondear esquinas de imagen online',
    subtitle:
      'Diseñada para diseñadores de interfaz, autores de boletines, blogueros y usuarios sociales que crean tarjetas o avatares elegantes, esta herramienta de navegador le permite redondear esquinas de imagen limpiamente a resolución completa. Curve las cuatro esquinas de forma uniforme, active deslizadores individuales por esquina o pase a un círculo completo con salida PNG/WebP transparente.',
    howToSteps: [
      {
        title: 'Arrastre o elija su imagen',
        description:
          'Suba una foto JPG, PNG, WebP, HEIC, GIF, BMP o SVG de hasta 20 MB a la zona de subida, o péguela con Ctrl+V.',
      },
      {
        title: 'Ajuste el radio de todas las esquinas o pulse Círculo completo / Píldora',
        description:
          'Arrastre el deslizador Radio de todas las esquinas (0 %–100 %, con la curvatura exacta en píxeles) o pulse Círculo completo / Píldora para pasar a 100 %.',
      },
      {
        title: 'Active opcionalmente el control individual por esquina',
        description:
          'Active Control individual por esquina para dar estilo a las esquinas Superior izquierda, Superior derecha, Inferior izquierda e Inferior derecha de forma independiente.',
      },
      {
        title: 'Elija relleno exterior Transparente o de color sólido',
        description:
          'Mantenga Transparente (PNG/WebP) activo para esquinas redondeadas transparentes, o cambie a Color sólido y elija cualquier fondo hexadecimal.',
      },
      {
        title: 'Seleccione el formato de salida (PNG, WebP o JPG)',
        description:
          'Elija PNG para bordes alfa sin pérdida, WebP para recursos web transparentes más ligeros o JPG para fondos opacos de esquinas sólidas.',
      },
      {
        title: 'Descargue su imagen redondeada',
        description:
          'Inspeccione la vista previa de damero y pulse Descargar imagen redondeada para exportar &lt;nombre&gt;_rounded a las dimensiones originales completas.',
      },
    ],
    features: [
      {
        title: 'Radio uniforme y por esquina',
        description:
          'Redondee todas las esquinas de forma uniforme hasta píldora o círculo, o dé estilo a cada esquina de forma independiente.',
      },
      {
        title: 'Esquinas realmente transparentes',
        description:
          'Exporte PNG o WebP con transparencia alfa antialiasing limpia fuera de la máscara redondeada.',
      },
      {
        title: 'Fondo sólido opcional',
        description:
          'Rellene las esquinas exteriores con cualquier color hexadecimal personalizado si exporta para JPG.',
      },
      {
        title: 'Salida a resolución completa',
        description:
          'Mantiene sus dimensiones exactas en píxeles originales mientras recorta las esquinas limpiamente.',
      },
    ],
    faqs: [
      {
        question: '¿Por qué debo usar PNG o WebP en la herramienta de redondear esquinas para mantenerlas transparentes?',
        answer:
          'El formato JPEG no admite un canal alfa de transparencia, así que las esquinas fuera de una máscara redondeada siempre se volverían blancas sólidas u opacas. PNG y WebP conservan una transparencia antialiasing suave de 8 bits para que su tarjeta redondeada o avatar se fusione sin problemas sobre cualquier color de página web o diapositiva.',
      },
      {
        question: '¿Cómo funciona el atajo Círculo completo / Píldora de la herramienta de redondear esquinas en fotos cuadradas frente a rectangulares?',
        answer:
          'Al pulsar Círculo completo / Píldora se establece el radio de todas las esquinas en 100 % de la mitad del lado más corto, min(ancho, alto) / 2. En una imagen cuadrada 1:1, eso corta un círculo perfecto; en una pancarta más ancha, forma una forma de píldora de estadio suave.',
      },
      {
        question: '¿Qué ocurre si solo quiero redondear las dos esquinas superiores para una tarjeta de blog con la herramienta de redondear esquinas?',
        answer:
          'Marque Control individual por esquina para desbloquear cuatro deslizadores separados para Superior izquierda, Superior derecha, Inferior izquierda e Inferior derecha (cada uno de 0 %–100 %). Establezca Inferior izquierda e Inferior derecha en 0 % mientras redondea solo las esquinas superiores.',
      },
      {
        question: '¿Cómo creo primero un retrato cuadrado si mi foto es rectangular para redondear esquinas?',
        answer:
          'Abra nuestra herramienta Recortador de imágenes (enlazada en Herramientas gratuitas relacionadas debajo), seleccione la plantilla de proporción 1:1 y descargue su recorte cuadrado. Luego suelte ese archivo cuadrado aquí y pulse Círculo completo / Píldora para un avatar circular nítido.',
      },
      {
        question: '¿Qué significa la lectura de píxeles en vivo junto a Radio de todas las esquinas en la herramienta de redondear esquinas?',
        answer:
          'Junto al deslizador de 0 %–100 %, la etiqueta calcula la curva exacta de esquina en píxeles reales de salida (por ejemplo, 120 px (24 %)) en relación con las dimensiones de su imagen original. Eso facilita igualar valores de border-radius de CSS.',
      },
      {
        question: '¿Cuándo debo elegir Color sólido en Relleno de esquina exterior en vez de Transparente en la herramienta de redondear esquinas?',
        answer:
          'Elija Color sólido cuando planee exportar un JPG ligero, igualar un fondo específico de tarjeta en modo oscuro o subir a una app que reemplace el alfa de PNG transparente con negro. Puede elegir blanco o cualquier código hexadecimal exacto con la muestra de color.',
      },
      {
        question: '¿Qué ocurre automáticamente si pulso Transparente (PNG/WebP) mientras JPG está seleccionado en la herramienta de redondear esquinas?',
        answer:
          'Los archivos JPG no pueden almacenar transparencia alfa en las esquinas exteriores. Al pulsar Transparente (PNG/WebP), el Formato de salida cambia automáticamente a PNG para que sus esquinas redondeadas se mantengan transparentes.',
      },
      {
        question: '¿Redondear esquinas con esta herramienta reduce el ancho y alto de mi foto?',
        answer:
          'No, la imagen exportada conserva su ancho y alto exactos originales en píxeles. Solo las regiones de las esquinas exteriores se recortan suavemente con curvas de esquina cuadráticas.',
      },
      {
        question: '¿Por qué los bordes curvos se ven suaves en vez de píxeles dentados en la herramienta de redondear esquinas?',
        answer:
          'HTML5 Canvas recorta a lo largo de rutas cuadráticas Bézier vectoriales con suavizado de alta calidad activado. Eso crea un antialiasing suave de subpíxel a lo largo de las curvas que se fusiona naturalmente con fondos de página oscuros o claros.',
      },
      {
        question: '¿Los retratos o avatares de perfil se suben a algún servidor durante el recorte de esquinas?',
        answer:
          'No, el recorte de rutas y la codificación PNG/WebP se ejecutan estrictamente dentro de su pestaña del navegador mediante HTML5 Canvas. Las fotos personales y los logotipos de marca nunca salen de su dispositivo.',
      },
      {
        question: '¿Qué formatos de entrada se pueden redondear en esta herramienta de redondear esquinas?',
        answer:
          'Suelte archivos JPG, PNG, WebP, HEIC/HEIF de iPhone, GIF, BMP o SVG de hasta 20 MB cada uno. Los GIF animados exportan un primer fotograma estático redondeado.',
      },
      {
        question: '¿Puedo pegar una captura del portapapeles directamente para redondear sus esquinas?',
        answer:
          'Sí, tome una captura de pantalla y pulse Ctrl+V (o Cmd+V en Mac) cuando la zona de subida esté activa. Se abre directamente dentro de la vista previa de damero, lista para redondear esquinas.',
      },
      {
        question: '¿Qué ocurre con mis valores individuales por esquina si desmarco el modo por esquina en la herramienta de redondear esquinas?',
        answer:
          'Al desmarcar Control individual por esquina, el lienzo vuelve al único deslizador de Radio de todas las esquinas para que las cuatro esquinas se mantengan uniformes. Al volver a marcarlo, los cuatro deslizadores de esquina se siembran limpiamente desde su radio uniforme actual.',
      },
      {
        question: '¿Redondear esquinas también elimina las etiquetas GPS EXIF incrustadas?',
        answer:
          'Sí, renderizar píxeles a través de un recorte limpio de Canvas elimina automáticamente los encabezados EXIF de JPEG y GPS originales. Eso protege la privacidad cuando comparte avatares redondeados o miniaturas de producto online.',
      },
      {
        question: '¿Cómo reemplazo la imagen actual manteniendo mi configuración de radio de esquina en la herramienta de redondear esquinas?',
        answer:
          'Pulse Cambiar imagen sobre el escenario de vista previa para subir una foto nueva. Su radio uniforme, valores por esquina, modo de relleno y formato de salida se mantienen activos para exportaciones repetidas rápidas.',
      },
      {
        question: '¿Qué nombre de archivo se asigna a las imágenes redondeadas descargadas?',
        answer:
          'El descargador conserva su nombre de archivo original saneado y agrega _rounded antes de .png, .webp o .jpg. Por ejemplo, avatar.jpg se descarga limpiamente como avatar_rounded.png.',
      },
      {
        question: '¿Debo elegir PNG o WebP al exportar gráficos web redondeados con la herramienta de redondear esquinas?',
        answer:
          'Elija PNG para máxima compatibilidad en apps antiguas y nitidez de bordes sin pérdida. Elija WebP cuando quiera recursos de sitio web sustancialmente más pequeños que aún conserven la transparencia alfa completa de las esquinas.',
      },
      {
        question: '¿Puedo usar la herramienta de redondear esquinas en navegadores de celular iOS o Android?',
        answer:
          'Sí, todos los deslizadores, casillas y controles de formato se adaptan sin problemas a pantallas de celular en Safari y Chrome. Puede redondear esquinas de retratos directamente desde la galería de su celular.',
      },
      {
        question: '¿En qué se diferencia la herramienta de redondear esquinas del Generador de bordes para imágenes?',
        answer:
          'Redondear esquinas de imagen recorta su foto limpiamente en sus dimensiones originales sin agregar relleno exterior. El Generador de bordes para imágenes, en cambio, envuelve paspartús de colores, degradados o marcos Polaroid alrededor de su foto.',
      },
      {
        question: '¿Hay marcas de agua, tarifas o límites diarios en las exportaciones redondeadas?',
        answer:
          'No, puede redondear esquinas en fotos ilimitadas de hasta 20 MB por archivo completamente gratis. Nunca aparecen marcas de agua, cuentas ni muros de pago en las descargas.',
      },
    ],
    relatedSlugs: ['/image-border-generator', '/image-cropper', '/add-background-to-image', '/'],
  },

  {
    slug: '/image-brightness-editor',
    name: 'Editor de brillo de imagen',
    shortDescription: 'Aclare u oscurezca fotos con vista previa en vivo de antes y después.',
    category: 'crop-edit',
    seoTitle: 'Editor de brillo de imagen gratis online – Aclarar fotos',
    seoDescription:
      'Ajuste la iluminación de fotos rápido con el editor de brillo de imagen gratis. Deslice de -100 % a +100 %, use plantillas rápidas y compare antes y después.',
    h1: 'Editor de brillo de imagen gratis online',
    subtitle:
      'Creado para fotógrafos que corrigen fotos subexpuestas, agentes inmobiliarios que aclaran habitaciones y vendedores que pulen fotos de producto, nuestro editor de brillo de imagen en el navegador ajusta la iluminación suavemente sin subir los originales. Mueva el deslizador de -100 % a +100 %, pruebe plantillas instantáneas de iluminación e inspeccione los resultados con comparación dividida en vivo.',
    howToSteps: [
      {
        title: 'Arrastre o seleccione una foto para aclarar u oscurecer',
        description:
          'Suba cualquier imagen JPG, PNG, WebP, HEIC, GIF, BMP o SVG de hasta 20 MB a la zona de subida, o péguela con Ctrl+V.',
      },
      {
        title: 'Ajuste el deslizador de Nivel de brillo o las Plantillas rápidas',
        description:
          'Mueva Nivel de brillo de -100 % Más oscuro a +100 % Más claro, o pulse Oscuro (-30 %), Tenue (-15 %), Original (0 %), Brillante (+15 %), Vibrante (+30 %) o Clave alta (+50 %).',
      },
      {
        title: 'Compare las vistas Después, Antes y Comparación dividida',
        description:
          'Cambie entre las pestañas Después, Antes y Comparación dividida, o abra Comparación en pantalla completa, para verificar el detalle de sombras y luces.',
      },
      {
        title: 'Seleccione el Formato de salida y la Calidad',
        description:
          'Elija la salida Original, JPG, PNG o WEBP y ajuste el deslizador de Calidad (10 %–100 %) al guardar formatos con pérdida.',
      },
      {
        title: 'Descargue su imagen editada',
        description:
          'Pulse Descargar imagen editada para procesar la curva de brillo a resolución original completa y guardar &lt;nombre&gt;_brightness en local.',
      },
    ],
    features: [
      {
        title: 'Ajuste de píxeles en tiempo real',
        description:
          'Vista previa instantánea en navegadores de escritorio y celular sin viajes de ida y vuelta al servidor.',
      },
      {
        title: 'Plantillas rápidas de exposición',
        description:
          'Pruebe las plantillas Oscuro, Tenue, Brillante, Vibrante y Clave alta con un clic.',
      },
      {
        title: 'Inspección de antes y después',
        description:
          'Compare la foto editada lado a lado o con el deslizador interactivo de comparación.',
      },
      {
        title: 'Procesamiento privado en el cliente',
        description:
          'Sus fotos personales se mantienen estrictamente dentro de su navegador.',
      },
    ],
    faqs: [
      {
        question: '¿Cómo cambia el deslizador de Nivel de brillo del editor de brillo los píxeles sin lavar los colores de inmediato?',
        answer:
          'Al mover el Nivel de brillo entre -100 % Más oscuro y +100 % Más claro se ajusta la luminancia suavemente en todo el marco en tiempo real dentro de HTML5 Canvas. Revisar la Comparación dividida o la Comparación en pantalla completa le permite aclarar sombras oscuras sin recortar los blancos brillantes.',
      },
      {
        question: '¿Por qué mi foto se previsualiza automáticamente en +15 % en el editor de brillo justo después de subirla?',
        answer:
          'El editor inicia en Brillante (+15 %) para que vea de inmediato un levantamiento sutil de exposición al cargar. Pulse Original (0 %) o Restablecer en Controles de brillo cuando quiera para comparar desde la línea base neutra.',
      },
      {
        question: '¿Qué plantillas rápidas incluye el editor de brillo para probar la exposición con un clic?',
        answer:
          'Seis plantillas cubren ajustes comunes: Oscuro (-30 %), Tenue (-15 %), Original (0 %), Brillante (+15 %), Vibrante (+30 %) y Clave alta (+50 %). Al pulsar cualquier tarjeta, el deslizador salta de inmediato y aún le permite afinar en pasos de 1 %.',
      },
      {
        question: '¿En qué se diferencian Después, Antes, Comparación dividida y Comparación en pantalla completa en el editor de brillo?',
        answer:
          'Después muestra su lienzo editado, Antes revela la imagen original sin tocar y Comparación dividida agrega un deslizador interactivo de Antes/Después directamente dentro del visor. Al pulsar Comparación en pantalla completa se renderiza un Blob a resolución completa y se abre el modal de comparación detallado.',
      },
      {
        question: '¿Aclarar una foto con el editor de brillo reduce su resolución o dimensiones en píxeles?',
        answer:
          'No, la vista previa en vivo escala hasta 1000 px solo para una respuesta interactiva fluida del deslizador. Al pulsar Descargar imagen editada se renderiza un Canvas a resolución completa que conserva el ancho y alto exactos originales de su imagen.',
      },
      {
        question: '¿Cuándo debo oscurecer una foto con valores negativos como -15 % o -30 % en el editor de brillo?',
        answer:
          'Los valores negativos de brillo atenúan limpiamente las fotos de celular sobreexpuestas y el resplandor fuerte de ventanas. Atenuar una foto de héroe brillante también crea mejor contraste detrás de titulares blancos superpuestos.',
      },
      {
        question: '¿El editor de brillo de imagen conserva los fondos transparentes de PNG?',
        answer:
          'Sí, mantener Original (para PNG/WebP) o elegir PNG o WebP conserva limpiamente las zonas transparentes contra el visor de damero. Si elige salida JPG, las regiones transparentes se aplanan suavemente sobre blanco sólido.',
      },
      {
        question: '¿Las fotos familiares personales o pruebas de clientes se suben a servidores externos con el editor de brillo?',
        answer:
          'No, las transformaciones de brillo de píxeles y la codificación de formato se ejecutan en local en su navegador con HTML5 Canvas. Sus imágenes nunca salen de su computadora o celular.',
      },
      {
        question: '¿Qué tipos de archivo puedo aclarar u oscurecer con el editor de brillo?',
        answer:
          'Puede abrir archivos JPG, PNG, WebP, HEIC/HEIF de iPhone, GIF, BMP y SVG de hasta 20 MB cada uno. Los GIF animados exportan su primer fotograma aclarado como una imagen estática.',
      },
      {
        question: '¿Puedo pegar una captura oscura directamente desde mi portapapeles para aclararla en el editor de brillo?',
        answer:
          'Sí, pulse Ctrl+V (o Cmd+V en Mac) en la zona de subida después de copiar una captura oscura o diapositiva. Se carga directamente en el visor en vivo, lista para ajustar y exportar.',
      },
      {
        question: '¿Qué ocurre si subo el brillo hasta +100 % en el editor de brillo?',
        answer:
          'Los ajustes positivos extremos aclaran fuertemente los tonos medios y empujan las luces hacia el blanco puro, lo cual es útil para gráficos estilizados de clave alta pero puede recortar texturas de luces en retratos. Apunte a +10 % a +35 % para una recuperación natural de exposición.',
      },
      {
        question: '¿Puedo ajustar el contraste o la viveza del color después de aclarar una imagen en el editor de brillo?',
        answer:
          'Sí, descargue primero su foto aclarada, luego pulse Editor de contraste de imagen o Editor de saturación de imagen en Herramientas gratuitas relacionadas debajo. Dividir los ajustes en herramientas dedicadas le permite afinar con precisión el impacto del contraste o la riqueza del color.',
      },
      {
        question: '¿Por qué desaparece Calidad al seleccionar PNG en Formato de salida del editor de brillo?',
        answer:
          'PNG usa compresión sin pérdida sin un nivel de calidad porcentual variable. Cambie a Original (para JPEG), JPG o WebP para mostrar y ajustar el deslizador de Calidad de 10 %–100 % (con valor predeterminado de 90 %).',
      },
      {
        question: '¿Cómo deshago todos los cambios de brillo rápidamente en el editor de brillo?',
        answer:
          'Pulse el botón azul Restablecer en la esquina superior derecha de Controles de brillo en cualquier momento. También puede pulsar la tarjeta de plantilla Original (0 %) para volver directamente a cero ajuste.',
      },
      {
        question: '¿Exportar una foto editada con el editor de brillo elimina las etiquetas de ubicación GPS EXIF de la cámara?',
        answer:
          'Sí, dibujar en un HTML5 Canvas nuevo construye un mapa de bits de salida limpio sin copiar los datos EXIF de la cámara. Cualquier coordenada GPS o número de serie del dispositivo se elimina automáticamente.',
      },
      {
        question: '¿Puedo cargar otra foto justo después de exportar sin actualizar la página en el editor de brillo?',
        answer:
          'Sí, pulse el icono rojo de papelera (Eliminar imagen) en la barra de herramientas de vista previa en cualquier momento. Eso borra limpiamente la foto activa y lo lleva directamente de vuelta a la zona de subida.',
      },
      {
        question: '¿Cómo se llama el archivo descargado al pulsar Descargar imagen editada en el editor de brillo?',
        answer:
          'El exportador conserva su nombre de archivo original saneado y agrega _brightness más la extensión de formato seleccionada. Por ejemplo, kitchen.jpg se guarda limpiamente como kitchen_brightness.jpg.',
      },
      {
        question: '¿El editor de brillo funciona de forma confiable en Safari de iPhone y Chrome de Android?',
        answer:
          'Sí, cada tarjeta de plantilla, deslizador de rango y vista de comparación dividida funciona sin problemas en pantallas táctiles de celular. Puede aclarar fotos oscuras de la galería directamente en Safari o Chrome de su celular.',
      },
      {
        question: '¿Por qué un JPEG oscuro comprimido puede mostrar ruido de bloque leve al aclararlo mucho en el editor de brillo?',
        answer:
          'Las sombras en JPEG muy comprimidos suelen guardar artefactos de cuantización ocultos en la oscuridad; subir el brillo un +40 % o más hace visible el ruido de sombra existente. Mantener ajustes moderados (+15 % a +30 %) conserva tonos más limpios.',
      },
      {
        question: '¿Hay alguna marca de agua, registro de cuenta o límite al aclarar fotos con el editor de brillo?',
        answer:
          'No, el editor de brillo de imagen es completamente gratis, sin marcas de agua ni registros. Puede aclarar u oscurecer fotos ilimitadas de hasta 20 MB por archivo.',
      },
    ],
    relatedSlugs: ['/image-contrast-editor', '/image-saturation-editor', '/image-filters', '/'],
  },

  {
    slug: '/image-contrast-editor',
    name: 'Editor de contraste de imágenes',
    shortDescription: 'Aumente o suavice el contraste de sus imágenes con comparación en vivo de antes y después.',
    category: 'crop-edit',
    seoTitle: 'Editor de contraste de imágenes gratis online',
    seoDescription:
      'Ajuste el contraste de sus fotos gratis online: de -100 % a +100 %, con 6 ajustes predefinidos y comparación de antes y después en su navegador, sin registro.',
    h1: 'Editor de contraste de imágenes gratis online',
    subtitle:
      'Diseñada para fotógrafos, vendedores online y diseñadores que corrigen fotos apagadas o con niebla, esta herramienta de contraste en el navegador permite profundizar las sombras y acentuar la separación tonal en segundos. Elija ajustes predefinidos con un clic, revise vistas previas en pantalla dividida y exporte en local sin subir nada a ningún servidor.',
    howToSteps: [
      {
        title: 'Suelte o seleccione una imagen',
        description:
          'Suba una foto JPG, PNG, WebP, HEIC, GIF, BMP o SVG de hasta 20 MB a la zona de subida del editor, explórela desde el disco o péguela directamente con Ctrl+V.',
      },
      {
        title: 'Revise la vista previa en vivo en el lienzo',
        description:
          'Su foto se carga en una vista previa de lienzo adaptable que empieza con +20 % de contraste, para que vea de inmediato cómo un toque sutil afecta la separación tonal.',
      },
      {
        title: 'Ajuste el deslizador de nivel de contraste o los ajustes predefinidos',
        description:
          'Arrastre el deslizador de nivel de contraste desde -100 % Plano hasta +100 % Alto contraste, o haga clic en Suave (-25 %), Atenuado (-10 %), Original (0 %), Nítido (+20 %), Intenso (+40 %) o Dramático (+70 %).',
      },
      {
        title: 'Verifique los detalles con las herramientas de comparación',
        description:
          'Cambie entre Después, Antes y Comparación dividida (con el deslizador divisor vertical), o haga clic en Comparar a pantalla completa para inspeccionar sombras y luces de cerca.',
      },
      {
        title: 'Elija el formato, la calidad y descargue',
        description:
          'Seleccione Original, JPG, PNG o WebP en Formato de salida, ajuste la calidad (10 %–100 %) para formatos con pérdida y haga clic en Descargar imagen editada.',
      },
    ],
    features: [
      {
        title: 'Curva de contraste precisa',
        description: 'Expande o comprime con suavidad el rango tonal sin cambios bruscos de color.',
      },
      {
        title: 'Ajustes predefinidos con un clic',
        description: 'Pruebe al instante los ajustes Suave, Atenuado, Nítido, Intenso o Dramático.',
      },
      {
        title: 'Modal interactivo de antes y después',
        description: 'Inspeccione los detalles finos de sombras y luces antes de descargar.',
      },
      {
        title: '100 % en el navegador',
        description: 'Procesamiento rápido en el navegador, sin subidas ni marcas de agua.',
      },
    ],
    faqs: [
      {
        question: '¿Qué efecto visual produce mover el deslizador de contraste hacia valores positivos o negativos?',
        answer:
          'Al mover el deslizador por encima del 0 %, los tonos oscuros se oscurecen y los tonos claros se aclaran alrededor del punto medio, para que el sujeto destaque sobre fondos con niebla. Al moverlo por debajo del 0 %, las luces y las sombras se comprimen hacia un gris medio neutro, con una estética mate más suave.',
      },
      {
        question: '¿Qué ajustes predefinidos incluye el panel de controles de contraste?',
        answer:
          'Hay seis ajustes predefinidos de un clic: Suave (-25 %), Atenuado (-10 %), Original (0 %), Nítido (+20 %), Intenso (+40 %) y Dramático (+70 %). Al hacer clic en cualquier ajuste, el deslizador de nivel de contraste se coloca de inmediato y se actualiza la vista previa en vivo del lienzo.',
      },
      {
        question: '¿Por qué el editor de contraste empieza en +20 % al subir una foto?',
        answer:
          'El editor inicia en Nítido (+20 %) para que vea una mejora tonal activa de inmediato, en lugar de una imagen sin cambios. Haga clic en Original (0 %) o en Restablecer, en la parte superior de los controles de contraste, en cualquier momento para volver a cero.',
      },
      {
        question: '¿Cómo calcula el editor de contraste los cambios de píxeles?',
        answer:
          'Aplica una curva de contraste lineal estándar píxel por píxel en los canales RGB sobre HTML5 Canvas, sin tocar el canal alfa. Al calcular directamente en ImageData, evita las discrepancias de los filtros CSS del navegador en Safari de iOS y en navegadores de celular.',
      },
      {
        question: '¿Cómo reviso las sombras antes y después sin adivinar en el editor de contraste?',
        answer:
          'Use las pestañas Después, Antes y Comparación dividida justo encima de la vista previa para arrastrar una línea divisoria en vivo del 0 % al 100 % sobre su imagen. Para una inspección de píxeles más cercana, haga clic en Comparar a pantalla completa para abrir el modal de comparación lado a lado.',
      },
      {
        question: '¿El contraste alto recorta las nubes brillantes o aplasta las sombras negras?',
        answer:
          'Al subir el contraste con fuerza hacia +70 % o +100 %, las luces casi blancas se acercan al 255 puro y las sombras profundas al 0. Use Comparación dividida para vigilar la textura sutil en camisas claras o cabello oscuro y baje a +15 %–+40 % si aparece recorte.',
      },
      {
        question: '¿Qué tipos de archivo puedo abrir en el editor de contraste de imágenes?',
        answer:
          'Puede subir archivos JPG, PNG, WebP, HEIC/HEIF de iPhone, GIF, BMP y SVG de hasta 20 MB por archivo. Las fotos HEIC se decodifican en su navegador automáticamente antes de mostrarse en el lienzo de edición.',
      },
      {
        question: '¿Puedo guardar logotipos PNG con fondo transparente después de ajustar el contraste?',
        answer:
          'Sí, si mantiene el formato Original en un PNG transparente o selecciona PNG o WebP como salida, la transparencia alfa se conserva por completo. Solo al cambiar el formato de salida a JPG se rellenan las zonas transparentes sobre un fondo blanco sólido.',
      },
      {
        question: '¿La vista previa del editor de contraste afecta la resolución final de la descarga?',
        answer:
          'No, la vista previa en pantalla limita la escala de visualización a 1 000 px en el lado más largo para que el arrastre del deslizador sea instantáneo. Al hacer clic en Descargar imagen editada, la misma fórmula de contraste se aplica al 100 % de las dimensiones en píxeles originales.',
      },
      {
        question: '¿Acepta el editor de contraste capturas pegadas desde el portapapeles?',
        answer:
          'Sí, pulse Ctrl+V (o Cmd+V en Mac) en cualquier parte de la pantalla de subida para cargar una imagen del portapapeles directamente en el editor. Ajustar el contraste entre +20 % y +35 % es ideal para que las líneas tenues de gráficos o el texto gris de interfaz se vean más nítidos.',
      },
      {
        question: '¿Ajustar el contraste convierte una foto en color a blanco y negro?',
        answer:
          'No, el contraste cambia la distancia de luminancia en los canales rojo, verde y azul de forma proporcional, sin eliminar la información de tono. Tenga en cuenta que un contraste positivo fuerte aumenta de forma natural la intensidad percibida del color, mientras que el contraste negativo atenúa los colores.',
      },
      {
        question: '¿Qué calidad elijo al exportar en JPG o WebP desde el editor de contraste?',
        answer:
          'El deslizador de calidad empieza en 90 %, lo que mantiene los degradados tonales suaves sin bandas y los archivos con un peso moderado. Bájelo hacia 75 %–80 % para subidas web más ligeras, o cambie a PNG para una salida completamente sin pérdida.',
      },
      {
        question: '¿Cómo se nombra el archivo descargado después de editar el contraste?',
        answer:
          'Su archivo guardado agrega _contrast al nombre base original limpio, seguido de la extensión del formato elegido, por ejemplo portrait_contrast.jpg. Su archivo original en el disco nunca se modifica ni se sobrescribe.',
      },
      {
        question: '¿Puede el editor de contraste enfocar fotos borrosas o fuera de foco?',
        answer:
          'Aumentar el contraste incrementa la separación de bordes entre zonas claras y oscuras, lo que puede hacer que las fotos con niebla se vean mucho más claras. Sin embargo, ajusta curvas tonales en lugar de aplicar un afilado por convolución de bordes, así que un desenfoque de movimiento grave no se puede reenfocar.',
      },
      {
        question: '¿Se suben mis fotos a servidores externos al ajustar el contraste?',
        answer:
          'No, cada cálculo de píxeles ocurre dentro de la pestaña de su navegador local con HTML5 Canvas y JavaScript. Los retratos personales, identificaciones escaneadas y fotos de producto sin publicar nunca salen de su computadora o celular.',
      },
      {
        question: '¿Cómo maneja el editor de contraste un GIF animado subido?',
        answer:
          'HTML5 Canvas muestra y ajusta el primer fotograma del GIF y exporta una sola imagen estática en el formato seleccionado. No se admiten ajustes de contraste en GIF animados de varios fotogramas.',
      },
      {
        question: '¿En qué se diferencia el ajuste de contraste del ajuste de brillo?',
        answer:
          'El brillo desplaza todos los píxeles juntos hacia más claro o más oscuro de forma uniforme, mientras que el contraste amplía o reduce la distancia entre las sombras oscuras y las luces brillantes alrededor del punto gris medio. Si una foto oscura se ve lavada después de aclararla, continúe con nuestra herramienta de contraste.',
      },
      {
        question: '¿Puedo usar el contraste negativo para suavizar sombras duras del mediodía en retratos?',
        answer:
          'Sí, al elegir Suave (-25 %) o Atenuado (-10 %) se reducen las transiciones bruscas entre la piel iluminada por el sol y las sombras oscuras. Para un brillo extremo o un estilo editorial plano, arrastre el deslizador entre -30 % y -50 %.',
      },
      {
        question: '¿Cómo cargo una foto nueva en el editor de contraste sin recargar la pestaña?',
        answer:
          'Haga clic en el icono de papelera en la esquina superior derecha del panel de vista previa para borrar la imagen actual y volver a la zona de subida. Eso libera la memoria temporal del navegador y deja listo el lienzo para su siguiente archivo.',
      },
      {
        question: '¿Funciona el editor de contraste en Safari de iOS y Chrome de Android?',
        answer:
          'Sí, las matemáticas tonales se ejecutan explícitamente dentro de arreglos de píxeles ImageData de JavaScript, en lugar de depender de filtros CSS de lienzo que se comportan de forma inconsistente en navegadores de celular. Eso mantiene uniformes las vistas previas de contraste y las descargas finales en iPhone, Android, macOS y Windows.',
      },
    ],
    relatedSlugs: ['/image-brightness-editor', '/image-saturation-editor', '/image-filters', '/'],
  },

  {
    slug: '/image-saturation-editor',
    name: 'Editor de saturación de imágenes',
    shortDescription: 'Aumente la intensidad del color o convierta fotos a blanco y negro, todo en su navegador.',
    category: 'crop-edit',
    seoTitle: 'Editor de saturación de imágenes gratis online',
    seoDescription:
      'Aumente o reduzca la saturación de sus fotos gratis online: de -100 % (blanco y negro) a +100 % (colores vivos), con 6 ajustes predefinidos y vista dividida.',
    h1: 'Editor de saturación de imágenes gratis online',
    subtitle:
      'Creada para fotógrafos, creadores de redes sociales y editores de comercio electrónico que equilibran la intensidad del color, esta herramienta de saturación en el navegador ajusta la intensidad del color según la luminosidad percibida. Pase con fluidez de un gris nítido de -100 % a tonos vívidos de +100 %, con comparación dividida y exportación local.',
    howToSteps: [
      {
        title: 'Cargue una foto en el editor',
        description:
          'Arrastre y suelte cualquier imagen JPG, PNG, WebP, HEIC, GIF, BMP o SVG de hasta 20 MB, elija un archivo de su dispositivo o péguela con Ctrl+V.',
      },
      {
        title: 'Vea el aumento inicial de color',
        description:
          'El editor carga con el nivel de saturación en +25 %, para que vea de inmediato cómo un croma más intenso realza los colores apagados en la vista previa en vivo.',
      },
      {
        title: 'Ajuste el nivel de saturación o haga clic en un ajuste predefinido',
        description:
          'Arrastre el deslizador desde -100 % Escala de grises hasta +100 % Vívido, o elija Escala de grises (-100 %), Atenuado (-40 %), Original (0 %), Intenso (+30 %), Vívido (+60 %) o Hiper (+90 %).',
      },
      {
        title: 'Inspeccione los tonos de piel con Comparación dividida',
        description:
          'Cambie entre Después, Antes o Comparación dividida con el deslizador de barrido, o haga clic en Comparar a pantalla completa, para asegurarse de que los rojos y los tonos de piel se vean equilibrados y no sobresaturados.',
      },
      {
        title: 'Elija el formato de salida y guarde en local',
        description:
          'Seleccione Original, JPG, PNG o WebP, ajuste la calidad (10 %–100 %) si no es PNG y haga clic en Descargar imagen editada.',
      },
    ],
    features: [
      {
        title: 'Saturación que conserva la luminosidad',
        description: 'Ajusta la intensidad del color según el brillo percibido para que los tonos se mantengan naturales.',
      },
      {
        title: 'De escala de grises a hipervívido',
        description: 'Deslice a -100 % para un blanco y negro instantáneo o suba en positivo para colores intensos y vibrantes.',
      },
      {
        title: 'Vista previa en vivo de antes y después',
        description: 'Cambie o arrastre la vista de comparación para no sobresaturar los tonos de piel.',
      },
      {
        title: 'Privada y gratis',
        description: 'Sin subidas, sin cuentas y sin marcas de agua.',
      },
    ],
    faqs: [
      {
        question: '¿Cómo conserva el editor de saturación el brillo percibido de la foto?',
        answer:
          'Cada píxel calcula la luminosidad percibida con los pesos ITU-R BT.709 (0,2126 R + 0,7152 G + 0,0722 B) e interpola los canales RGB hacia ese punto gris neutro o alejándose de él. Así, los rojos y verdes coloridos no se vuelven demasiado brillantes ni turbios al desaturarse.',
      },
      {
        question: '¿Qué ajustes predefinidos trae el panel de controles de saturación?',
        answer:
          'Tiene seis ajustes predefinidos: Escala de grises (-100 %), Atenuado (-40 %), Original (0 %), Intenso (+30 %), Vívido (+60 %) e Hiper (+90 %). Al hacer clic en cualquier botón, la vista previa se actualiza de inmediato y luego puede afinar con el deslizador.',
      },
      {
        question: '¿Puedo convertir un retrato en color a escala de grises con un clic en el editor de saturación?',
        answer:
          'Sí, haga clic en el ajuste Escala de grises (-100 %) o deslice el nivel de saturación hasta el extremo izquierdo en -100 %. Como usa la ponderación estándar de luminosidad, los tonos de piel y la vegetación se convierten en valores monocromos de aspecto natural, en lugar de promedios planos.',
      },
      {
        question: '¿Por qué el nivel de saturación empieza en +25 % al cargar un archivo?',
        answer:
          'Empezar en +25 % muestra un aumento suave e inmediato de la intensidad tan pronto aparece su foto. Haga clic en Original (0 %) o en el enlace Restablecer en cualquier momento si prefiere ajustar hacia arriba o hacia abajo desde el punto neutro.',
      },
      {
        question: '¿Cómo evito que los retratos se vean naranjas o neón al subir la saturación?',
        answer:
          'Manténgase en el rango de +15 % a +35 % para personas y cambie a la pestaña Comparación dividida para barrer entre los tonos de piel originales y el lienzo con más color. Comparar a pantalla completa también permite inspeccionar de cerca mejillas, labios y etiquetas de producto antes de exportar.',
      },
      {
        question: '¿Qué pasa si subo la saturación de una foto que ya es monocroma o gris?',
        answer:
          'Los píxeles en los que los valores rojo, verde y azul son iguales están justo sobre el eje de luminosidad, así que subir la saturación no puede inventar un color que no existe. En imágenes sepia o en blanco y negro con tinte cálido, la saturación positiva acentúa el matiz de color subyacente.',
      },
      {
        question: '¿Admite el editor de saturación iconos PNG transparentes y adhesivos WebP?',
        answer:
          'Sí, los ajustes de píxeles alteran la intensidad del color RGB sin tocar el canal alfa de transparencia. Mantenga el formato Original o seleccione PNG o WebP en Formato de salida para conservar los fondos transparentes sin problemas.',
      },
      {
        question: '¿Qué pasa con la transparencia si exporto un adhesivo desaturado como JPG?',
        answer:
          'Como JPG no admite transparencia alfa, los píxeles transparentes se aplanan automáticamente sobre un lienzo blanco sólido (#FFFFFF) antes de la codificación JPEG. Elija PNG o WebP siempre que necesite conservar la transparencia.',
      },
      {
        question: '¿Qué archivos y tamaño máximo acepta el editor de saturación de imágenes?',
        answer:
          'Puede soltar imágenes JPG, PNG, WebP, HEIC/HEIF, GIF, BMP y SVG de hasta 20 MB cada una. Los GIF animados cargan su fotograma inicial en el lienzo para editarlos y se exportan como imagen estática.',
      },
      {
        question: '¿Hay diferencia entre la claridad de la vista previa y la resolución del archivo descargado en saturación?',
        answer:
          'El lienzo interactivo muestra la vista previa hasta 1 000 px en la dimensión más larga para que los ajustes del deslizador se sientan fluidos y sin retraso. Al exportar, se ejecuta una pasada de lienzo a resolución completa con el ancho y alto originales de su archivo.',
      },
      {
        question: '¿Cuándo conviene usar Atenuado (-40 %) en lugar de Escala de grises (-100 %)?',
        answer:
          'Atenuado (-40 %) calma letreros de neón demasiado brillantes, fondos de habitaciones recargados o iluminación de producto dura, sin perder los matices de color sutiles. Funciona bien para fotos principales de blog tranquilas o fondos detrás de texto.',
      },
      {
        question: '¿Puedo pegar imágenes desde el portapapeles directamente en la herramienta de saturación?',
        answer:
          'Sí, copie cualquier imagen o captura al portapapeles y pulse Ctrl+V (o Cmd+V) en el mensaje de subida. Se abre de inmediato en el editor, lista para ajustar el color.',
      },
      {
        question: '¿Cómo distingue el nombre del archivo exportado las fotos editadas en saturación?',
        answer:
          'Las exportaciones agregan automáticamente _saturation al nombre de archivo original limpio (por ejemplo, sunset_saturation.jpg). Su imagen de origen queda intacta en su dispositivo.',
      },
      {
        question: '¿Qué calidad se aplica al guardar como Original, JPG o WebP en saturación?',
        answer:
          'Las exportaciones JPG y WebP empiezan con una calidad predeterminada del 90 %, que puede ajustar entre 10 % y 100 % antes de descargar. Al seleccionar PNG, el deslizador de calidad se oculta porque PNG siempre exporta sin pérdida.',
      },
      {
        question: '¿Se transmiten las fotos subidas a GPU en la nube o servidores externos al editar la saturación?',
        answer:
          'Nunca: cada cálculo de píxeles se ejecuta dentro de la pestaña de su navegador local, en el hardware de su propio dispositivo. No se envían por la red datos de imagen, ajustes predefinidos ni nombres de archivo.',
      },
      {
        question: '¿Editar la saturación aquí elimina los metadatos EXIF o GPS de la cámara?',
        answer:
          'Sí, dibujar sobre HTML5 Canvas y escribir un nuevo blob de imagen omite los encabezados EXIF originales, como números de serie de cámara y etiquetas de ubicación GPS. Eso ayuda a mantener limpias de privacidad las fotos sociales compartidas.',
      },
      {
        question: '¿Cómo restablezco solo el deslizador de saturación sin volver a cargar mi foto?',
        answer:
          'Haga clic en el botón Restablecer en la esquina superior derecha de los controles de saturación para devolver el deslizador de inmediato al 0 %. También puede hacer clic en el botón de ajuste rápido Original (0 %) justo debajo del deslizador, sin volver a subir su archivo.',
      },
      {
        question: '¿Puedo realzar el follaje y los cielos de un paisaje con Hiper (+90 %) sin dañar la foto?',
        answer:
          'Hiper (+90 %) duplica con suavidad las diferencias de croma hasta los límites de los canales RGB (0–255), con pósters de viaje dramáticos y productos llamativos. Vigile los rojos y azules brillantes en Comparación dividida para asegurarse de que las texturas finas de pétalos o telas no se recorten.',
      },
      {
        question: '¿Puedo convertir un gráfico PNG colorido a WebP ligero mientras atenúo sus colores?',
        answer:
          'Sí, ajuste el nivel de saturación deseado, seleccione WEBP en Formato de salida y ajuste la calidad a 80 %–90 %. Al hacer clic en Descargar imagen editada, obtiene un WebP compacto y con el color equilibrado en un solo paso.',
      },
      {
        question: '¿Funciona la herramienta de saturación sin conexión y en pantallas táctiles de celular?',
        answer:
          'Sí, los deslizadores, los botones de ajustes predefinidos y el deslizador de comparación de vista dividida responden con fluidez a los gestos táctiles en Safari de iOS y Chrome de Android. Como el procesamiento no requiere llamadas al servidor, las ediciones funcionan incluso con conexiones de celular lentas.',
      },
    ],
    relatedSlugs: ['/image-filters', '/image-brightness-editor', '/image-contrast-editor', '/'],
  },

  {
    slug: '/image-filters',
    name: 'Filtros de imagen',
    shortDescription: 'Aplique filtros en escala de grises, sepia, vintage, cálido, frío y noir con intensidad ajustable.',
    category: 'crop-edit',
    seoTitle: 'Filtros de imagen gratis online – Vintage y sepia',
    seoDescription:
      'Aplique filtros de imagen gratis online: vintage, sepia, blanco y negro, cálido, frío y más. Ajuste la intensidad del filtro del 0 % al 100 % sin registro.',
    h1: 'Filtros de imagen gratis online',
    subtitle:
      'Ideal para creadores, blogueros y cualquier persona que quiera dar a sus fotos cotidianas una estética coherente, estos filtros de imagen gratis online ofrecen 11 grados de color seleccionados con miniaturas en vivo. Combine cualquier filtro con fluidez con el deslizador de intensidad y guarde copias a resolución completa en su navegador.',
    howToSteps: [
      {
        title: 'Suelte o elija una imagen',
        description:
          'Suba cualquier foto JPG, PNG, WebP, HEIC, GIF, BMP o SVG de hasta 20 MB, elija un archivo del disco o péguela directamente con Ctrl+V.',
      },
      {
        title: 'Explore las miniaturas de filtros en vivo',
        description:
          'Revise la rejilla de 12 tarjetas de ajustes predefinidos de filtro, con vistas previas reales en miniatura de Original más 11 grados estilizados generados a partir de su imagen subida.',
      },
      {
        title: 'Seleccione un estilo predefinido',
        description:
          'Haga clic en Escala de grises, Sepia, Vintage, Cálido, Frío, Alto contraste, Atenuado mate, Dramático, B/N Noir, Hora dorada o Invertir para aplicarlo al lienzo principal.',
      },
      {
        title: 'Combine la fuerza con la intensidad del filtro',
        description:
          'Arrastre el deslizador de intensidad del filtro entre 0 % y 100 % para suavizar grados fuertes y convertirlos en lavados de color sutiles (o haga clic en Restablecer para volver a Original).',
      },
      {
        title: 'Mantenga el original o abra el modal Comparar',
        description:
          'Mantenga pulsado Mantener para ver el original para comprobaciones A/B instantáneas, o haga clic en Comparar para abrir el modal interactivo de inspección con deslizador dividido.',
      },
      {
        title: 'Elija el formato de salida y descargue',
        description:
          'Seleccione Original, JPG, PNG o WebP, ajuste la calidad (10 %–100 %) si hace falta y haga clic en Descargar imagen filtrada.',
      },
    ],
    features: [
      {
        title: 'Más de 11 ajustes predefinidos de filtro seleccionados',
        description: 'Incluye Escala de grises, Sepia, Vintage, Cálido, Frío, Alto contraste, Atenuado mate, Dramático, B/N Noir, Hora dorada e Invertir.',
      },
      {
        title: 'Deslizador de intensidad suave',
        description: 'Combine cualquier filtro con fluidez entre 0 % y 100 %, en lugar de quedarse con valores predeterminados bruscos.',
      },
      {
        title: 'Tira de miniaturas en vivo',
        description: 'Vea cómo se ve cada filtro en su foto real antes de elegir uno.',
      },
      {
        title: 'Lienzo 100 % en el navegador',
        description: 'Funciona listo sin conexión en su navegador, sin subidas a servidores.',
      },
    ],
    faqs: [
      {
        question: '¿Qué 11 estilos de filtro puedo ver en la rejilla de filtros de imagen?',
        answer:
          'Junto a Original, la rejilla genera miniaturas en vivo de Escala de grises, Sepia, Vintage, Cálido, Frío, Alto contraste, Atenuado mate, Dramático, B/N Noir, Hora dorada e Invertir. Cada miniatura se muestra directamente a partir de su foto subida, no con iconos de muestra genéricos.',
      },
      {
        question: '¿Cómo funciona el deslizador de intensidad del filtro entre el 0 % y el 100 %?',
        answer:
          'Al fijar la intensidad del filtro por debajo del 100 %, los valores de píxeles RGB filtrados se mezclan de forma lineal de vuelta hacia sus píxeles originales. Por ejemplo, fijar Vintage o Hora dorada en 45 % aplica un lavado de película suave sin dominar los tonos naturales de la piel.',
      },
      {
        question: '¿Por qué la herramienta de filtros selecciona Vintage al 100 % al soltar una foto?',
        answer:
          'Empieza con Vintage a máxima intensidad para que vea un efecto terminado en el lienzo principal de inmediato al subir la foto. Simplemente haga clic en cualquier otra tarjeta de ajustes predefinidos o en Restablecer para volver a Original.',
      },
      {
        question: '¿En qué se diferencian los filtros Escala de grises y B/N Noir?',
        answer:
          'Escala de grises convierte los colores en tonos equilibrados de blanco y negro con pesos naturales de luminosidad, sin alterar el contraste. B/N Noir agrega un fuerte aumento de contraste de 1,65× sobre la conversión a escala de grises, con sombras oscuras intensas y luces cinematográficas brillantes.',
      },
      {
        question: '¿Cómo se diferencian visualmente Sepia, Vintage, Atenuado mate y Hora dorada?',
        answer:
          'Sepia traslada toda la imagen a tonos marrones monocromos clásicos, mientras que Vintage mezcla sepia cálido con los colores originales y un calor tenue y desvanecido. Atenuado mate eleva los negros oscuros a grises pizarra suaves, y Hora dorada intensifica los rojos y amarillos cálidos mientras enfría los azules de las sombras.',
      },
      {
        question: '¿Cómo agiliza la edición el botón Mantener para ver el original en filtros?',
        answer:
          'Al mantener pulsado Mantener para ver el original con el ratón o el dedo, el lienzo vuelve temporalmente a su foto sin editar y muestra una insignia Original. Al soltarlo, la vista previa filtrada se restaura al instante, para que pueda comparar A/B en milisegundos.',
      },
      {
        question: '¿Puedo inspeccionar divisiones lado a lado antes de guardar un filtro?',
        answer:
          'Sí, haga clic en el botón Comparar junto a Mantener para ver el original para abrir el modal completo de comparación de filtros. Muestra los tamaños en bytes original y filtrado, además de un deslizador interactivo de barrido dividido.',
      },
      {
        question: '¿Las imágenes descargadas se procesan al mismo tamaño reducido que las miniaturas de filtros?',
        answer:
          'No, la rejilla de ajustes predefinidos usa miniaturas diminutas de 120 px para vistas previas instantáneas y el espacio de trabajo principal tiene un tope de 1 000 px para mayor fluidez. Al hacer clic en Descargar imagen filtrada, se procesa la resolución completa en píxeles originales sobre HTML5 Canvas.',
      },
      {
        question: '¿Qué archivos y tamaño máximo aceptan estos filtros de foto?',
        answer:
          'Puede soltar archivos JPG, PNG, WebP, HEIC/HEIF de iPhone, GIF, BMP y SVG de hasta 20 MB por subida. Los formatos de salida admitidos son Original, JPG, PNG y WebP.',
      },
      {
        question: '¿Conservan los filtros cálidos o Invertir la transparencia de un logotipo PNG?',
        answer:
          'Todas las matemáticas de píxeles de los filtros alteran solo los canales rojo, verde y azul, sin tocar la transparencia alfa. Mantenga la salida Original, PNG o WebP para conservar los fondos transparentes; al elegir JPG, las zonas transparentes se rellenan con blanco sólido.',
      },
      {
        question: '¿Para qué sirve más el filtro Invertir en los filtros de imagen?',
        answer:
          'Invertir resta cada canal RGB de 255 para producir un negativo exacto de color de su imagen. Los desarrolladores lo usan para invertir diagramas de modo oscuro en documentos blancos, y los fotógrafos para previsualizar negativos de película escaneados.',
      },
      {
        question: '¿Son consistentes los efectos de filtro en Chrome, Firefox y Safari de iPhone?',
        answer:
          'Sí, los 11 ajustes predefinidos se calculan directamente en bucles de píxeles ImageData de JavaScript, en lugar de depender de cadenas CSS ctx.filter. Eso garantiza colores idénticos en Safari de iOS, Chrome de Android y navegadores de escritorio.',
      },
      {
        question: '¿Puedo combinar dos filtros, como Frío más Atenuado mate, en la misma imagen?',
        answer:
          'Cada ajuste predefinido se calcula directamente desde su imagen original limpia en una sola pasada, así que al hacer clic en una nueva tarjeta se cambia de ajuste sin degradar la calidad. Para combinar dos grados, descargue su primer PNG filtrado y suéltelo de nuevo para una segunda pasada.',
      },
      {
        question: '¿Cómo se etiquetan los nombres de archivo de salida para recordar el filtro exportado?',
        answer:
          'El exportador agrega el ID del ajuste predefinido a su nombre base de archivo limpio, como photo_golden-hour.jpg o photo_noir.webp. Eso facilita distinguir dos o tres aspectos de prueba exportados en una misma carpeta.',
      },
      {
        question: '¿Subir una foto para aplicar filtros la envía a un servidor externo?',
        answer:
          'No, las miniaturas, las vistas previas en vivo del lienzo y las exportaciones finales se ejecutan por completo dentro de la memoria de la pestaña de su navegador. Ninguna foto se transfiere a servidores remotos ni se guarda en registros en la nube.',
      },
      {
        question: '¿Puedo usar filtros Frío o Alto contraste en capturas pegadas desde el portapapeles?',
        answer:
          'Sí, pulse Ctrl+V (o Cmd+V) en la zona de subida para cargar cualquier captura copiada de inmediato. Alto contraste y B/N Noir son especialmente eficaces para aclarar texto tenue en escaneos de documentos.',
      },
      {
        question: '¿Cómo trata la herramienta de filtros un GIF animado subido?',
        answer:
          'HTML5 Canvas extrae el primer fotograma del GIF para las miniaturas de vista previa y exporta una imagen filtrada estática. El filtrado de GIF animados de varios fotogramas no lo realiza esta herramienta.',
      },
      {
        question: '¿Cómo configuro la calidad al exportar archivos WebP o JPG con filtro?',
        answer:
          'El ajuste predeterminado del 90 % conserva limpio el grano de película sutil y las sombras mate sin archivos grandes. Si necesita conservación sin pérdida para seguir editando, elija PNG en Formato de salida.',
      },
      {
        question: '¿Aplicar un filtro elimina las etiquetas EXIF y GPS sensibles de la cámara?',
        answer:
          'Sí, dibujar los píxeles filtrados en un lienzo HTML5 Canvas nuevo crea un archivo de imagen limpio sin encabezados EXIF. Las etiquetas de modelo de cámara, las marcas de tiempo y las coordenadas GPS incrustadas se excluyen automáticamente al descargar.',
      },
      {
        question: '¿Cómo cambio a otra foto rápido después de descargar una imagen filtrada?',
        answer:
          'Haga clic en el icono de papelera en la esquina superior derecha del panel Vista previa de filtro para borrar su imagen actual y volver a la zona de subida. Toda la memoria de vista previa se libera de inmediato para su siguiente foto.',
      },
    ],
    relatedSlugs: ['/image-saturation-editor', '/image-brightness-editor', '/image-border-generator', '/'],
  },

  {
    slug: '/add-background-to-image',
    name: 'Agregar fondo a imagen',
    shortDescription: 'Coloque imágenes transparentes o con marco sobre fondos sólidos, degradados o difuminados.',
    category: 'create',
    seoTitle: 'Agregar fondo a imagen gratis online – Sólido y degradado',
    seoDescription:
      'Agregue fondo a sus imágenes gratis online: colores sólidos, degradados de dos colores o foto difuminada. Exporte en 1:1, 16:9 o 4:5, todo en su navegador.',
    h1: 'Agregar fondo a imagen online',
    subtitle:
      'Hecha para vendedores de comercio electrónico, diseñadores de logotipos y editores de redes sociales, esta herramienta facilita agregar fondo a las imágenes subidas o a recortes PNG transparentes. Elija muestras de color sólido, degradados de dos colores en ángulo o fondos difuminados con el tamaño de publicaciones cuadradas, de historia o panorámicas.',
    howToSteps: [
      {
        title: 'Suba una foto o un PNG transparente',
        description:
          'Suelte cualquier imagen JPG, PNG, WebP, HEIC, GIF, BMP o SVG de hasta 20 MB en la zona de subida, selecciónela del disco o péguela con Ctrl+V.',
      },
      {
        title: 'Elija Color sólido, Degradado o Foto difuminada',
        description:
          'Elija Color sólido con el selector de color y 6 muestras rápidas, Degradado con dos colores y un deslizador de ángulo de 0° a 360°, o Foto difuminada con un radio de desenfoque de 4 a 50 px.',
      },
      {
        title: 'Seleccione una proporción de lienzo',
        description:
          'Haga clic en Orig, cuadrado 1:1, panorámico 16:9, historia vertical 9:16 o retrato social 4:5 en Proporción de lienzo.',
      },
      {
        title: 'Ajuste la escala, la redondez y la sombra paralela',
        description:
          'Deslice Escala de imagen (40 %–100 %) para controlar el relleno alrededor de su sujeto, Redondez (0 %–30 %) para esquinas suaves y active Sombra paralela detrás de la imagen.',
      },
      {
        title: 'Elija el formato de salida y descargue',
        description:
          'Revise las dimensiones exactas en píxeles de salida debajo de la vista previa, elija PNG, JPG o WEBP y haga clic en Descargar imagen.',
      },
    ],
    features: [
      {
        title: '3 modos de fondo',
        description: 'Elija Color sólido, Degradado de dos colores o Fondo de foto difuminada para fotos verticales u horizontales con bandas.',
      },
      {
        title: 'Proporciones sociales y web',
        description: 'Ajuste cualquier foto en marcos Original, Cuadrado 1:1, Panorámico 16:9, Historia 9:16 o Retrato 4:5.',
      },
      {
        title: 'Escala, radio y sombra de primer plano',
        description: 'Agregue espacio, esquinas redondeadas y sombras paralelas suaves alrededor de su imagen principal.',
      },
      {
        title: 'Cero subidas',
        description: 'Se muestra en local con HTML5 Canvas y descarga instantánea.',
      },
    ],
    faqs: [
      {
        question: '¿Cuándo conviene usar el modo Foto difuminada para agregar fondo a una imagen?',
        answer:
          'El modo Foto difuminada rellena los márgenes vacíos del lienzo alrededor de una foto vertical de celular con una copia ampliada y difuminada de su propia imagen, más un tinte pizarra suave del 12 %. Permite colocar fotos verticales 9:16 dentro de banners 16:9 de YouTube o cuadrados 1:1 sin barras negras feas ni recortes.',
      },
      {
        question: '¿Cómo agrego un fondo de estudio blanco limpio detrás de un PNG transparente?',
        answer:
          'Seleccione Color sólido en Tipo de fondo, haga clic en la muestra blanca #ffffff (o escriba cualquier color hexadecimal) y ajuste la escala de imagen si quiere espacio alrededor del producto. Exporte como JPG para subidas ligeras a tiendas online o PNG para bordes nítidos.',
      },
      {
        question: '¿Puedo personalizar degradados lineales de varios ángulos detrás de logotipos o capturas?',
        answer:
          'Sí, cambie el tipo de fondo a Degradado para elegir el Color 1 y el Color 2 con los selectores de color y luego arrastre el deslizador de ángulo entre 0° y 360°. Es ideal para convertir capturas de software simples en tarjetas principales pulidas para páginas de inicio.',
      },
      {
        question: '¿Qué proporciones de lienzo predefinidas ofrece la herramienta para agregar fondo?',
        answer:
          'Puede cambiar al instante entre Orig (coincide con las dimensiones de su foto), 1:1 (publicaciones cuadradas y tarjetas de producto) y 16:9 (miniaturas y banners de YouTube). También hay ajustes verticales para 9:16 (Historias y Reels) y 4:5 (retratos de feed de Instagram).',
      },
      {
        question: '¿Cómo se determinan las dimensiones finales en píxeles al cambiar la proporción del lienzo?',
        answer:
          'El exportador fija el lado más largo del lienzo de salida en la dimensión original más larga de su foto, o al menos 1 200 px, y luego calcula el lado más corto de forma limpia a partir de la proporción elegida. Por ejemplo, elegir 1:1 en un icono de 800×600 produce un gráfico nítido de 1200×1200.',
      },
      {
        question: '¿Cómo afecta la escala de imagen a los márgenes alrededor de mi foto principal?',
        answer:
          'La escala de imagen (40 % a 100 %, con 85 % por defecto) define el porcentaje máximo de caja dentro del lienzo de fondo que su foto principal puede ocupar sin perder la proporción. Fijar 100 % llena de borde a borde en proporciones coincidentes, mientras que 60 %–80 % muestra un marco generoso de fondo.',
      },
      {
        question: '¿La redondez suaviza las esquinas de PNG transparentes o solo de fotos rectangulares?',
        answer:
          'La redondez (0 %–30 %) recorta el área rectangular de colocación en primer plano con curvas de esquina cuadráticas, lo que redondea con limpieza capturas y fotos rectangulares. En recortes transparentes cuyo sujeto queda bien dentro de los bordes de la imagen, subir la redondez deja el recorte interior intacto mientras redondea su caja de sombra paralela.',
      },
      {
        question: '¿Cómo se comporta la sombra paralela con logotipos transparentes frente a fotos sólidas?',
        answer:
          'En fotos o capturas sólidas, proyecta una sombra de elevación suave y sutil, proporcional al tamaño del lienzo, detrás de la tarjeta redondeada en primer plano. En imágenes con transparencia alfa, usa un relleno de fondo tenue del 1 % dentro de la caja recortada para que el primer plano destaque con limpieza sobre fondos brillantes o degradados.',
      },
      {
        question: '¿Qué tipos de archivo puedo importar para agregar un fondo?',
        answer:
          'Puede subir imágenes JPG, PNG, WebP, HEIC/HEIF de iPhone, GIF, BMP y SVG de hasta 20 MB. Los GIF animados dibujan su fotograma inicial como capa principal.',
      },
      {
        question: '¿Esta herramienta elimina automáticamente el fondo existente de una foto?',
        answer:
          'No, este editor coloca su imagen subida (recorte transparente, logotipo o foto completa) sobre un nuevo lienzo de fondo, en lugar de ejecutar segmentación de recorte con IA. Si tiene una foto con una escena recargada que debe borrar primero, pásela por nuestra herramienta Eliminar fondo y luego suelte el PNG transparente aquí.',
      },
      {
        question: '¿Qué formatos de salida admite agregar fondo y con qué calidad de compresión?',
        answer:
          'Puede exportar composiciones terminadas como PNG, JPG o WEBP con una calidad de exportación de lienzo del 92 % (codificación sin pérdida para PNG). Las dimensiones exactas en píxeles de salida aparecen justo debajo del lienzo de vista previa antes de descargar.',
      },
      {
        question: '¿Qué muestras de color rápidas incluye el modo de color sólido?',
        answer:
          'Junto al selector de color nativo completo, hay seis muestras en las que se puede hacer clic y probar en un solo toque: blanco puro (#ffffff), pizarra oscuro (#0f172a), azul de marca (#2563eb), esmeralda (#10b981), crema cálido (#fef3c7) y gris suave (#f1f5f9). Puede tocar cualquier muestra para verla al instante y luego afinarla con el selector de color.',
      },
      {
        question: '¿Qué tan suave es el control de radio de desenfoque del fondo en modo Foto difuminada?',
        answer:
          'Puede ajustar el radio de desenfoque del fondo de 4 px (textura de fondo levemente suavizada) hasta 50 px (color ambiental cremoso y desenfocado). El radio de desenfoque se escala de forma dinámica para coincidir con sus dimensiones de exportación a resolución completa.',
      },
      {
        question: '¿Puedo pegar capturas directamente desde el portapapeles para enmarcarlas en un degradado?',
        answer:
          'Sí, copie una captura o un gráfico y pulse Ctrl+V (o Cmd+V) en la zona de subida para cargarlo directamente en el lienzo de fondo. Combinar un fondo degradado con escala del 85 %, redondez leve y sombra paralela hace que las capturas de documentación destaquen.',
      },
      {
        question: '¿Se envían a un servidor los logotipos, maquetas o retratos al agregar fondo?',
        answer:
          'No, la generación de fondo, el filtrado de desenfoque, las sombras y la codificación de archivos se ejecutan en local dentro de su navegador con HTML5 Canvas. Nada se transmite por internet ni se conserva de forma remota.',
      },
      {
        question: '¿Cómo se nombran los archivos descargados con fondo agregado?',
        answer:
          'Los archivos exportados conservan su nombre base limpio y agregan _background junto con la extensión del formato elegido, como product-cutout_background.png o banner_background.webp. Su imagen de origen en el disco queda intacta.',
      },
      {
        question: '¿Exportar con fondo elimina los metadatos EXIF de ubicación de las fotos de cámara?',
        answer:
          'Sí, componer capas sobre un lienzo HTML5 Canvas nuevo y codificar una imagen nueva excluye automáticamente los encabezados EXIF originales. Las coordenadas GPS, los números de serie de cámara y las marcas de tiempo nunca se trasladan al archivo descargado.',
      },
      {
        question: '¿Puedo previsualizar el modo Foto difuminada en iconos pequeños o gráficos SVG?',
        answer:
          'Sí, los logotipos SVG autocontenidos o los gráficos PNG pequeños se escalan sobre el fondo de portada y reciben un desenfoque gaussiano suave detrás del primer plano vectorial nítido. Elija un radio de desenfoque de 25–45 px para suavizar bordes vectoriales nítidos en un halo ambiental suave.',
      },
      {
        question: '¿Por qué el modo Foto difuminada agrega un tinte sutil sobre el fondo difuminado?',
        answer:
          'Se pinta un velo oscuro pizarra suave al 12 % de opacidad directamente sobre la capa de fondo difuminada, antes de dibujar el sujeto en primer plano. Ese velo de contraste sutil ayuda a que los bordes claros, las etiquetas blancas y los recortes transparentes se mantengan legibles sobre cielos brillantes o patrones recargados.',
      },
      {
        question: '¿Cómo reemplazo la foto principal sin perder mi flujo de trabajo preferido?',
        answer:
          'Haga clic en Cambiar imagen en la esquina superior derecha del panel Vista previa de fondo para borrar el lienzo actual y subir otro recurso. Como la herramienta funciona de forma nativa en navegadores de escritorio y celular, cambiar de imagen toma solo un momento.',
      },
    ],
    relatedSlugs: ['/round-image-corners', '/image-border-generator', '/image-resizer', '/'],
  },

  {
    slug: '/image-splitter',
    name: 'Divisor de imágenes',
    shortDescription: 'Divida imágenes en mosaicos de rejilla N×M o en tiras y descárguelas en un archivo ZIP.',
    category: 'create',
    seoTitle: 'Divisor de imágenes gratis online – Rejilla y ZIP',
    seoDescription:
      'Divida imágenes gratis online en rejillas N×M o tiras para Instagram y carruseles. Vea las líneas de corte y descargue todas las piezas en un archivo ZIP.',
    h1: 'Divisor de imágenes online',
    subtitle:
      'Creada para planificadores de rejillas de Instagram, diseñadores de interfaces y creadores de impresos, este divisor de imágenes en el navegador divide panoramas amplios o fotos cuadradas en hasta 100 piezas exactas de 10×10 o en tiras. Inspeccione las líneas de corte numeradas en vivo y guarde cada corte a resolución completa por separado o en una descarga ZIP.',
    howToSteps: [
      {
        title: 'Suelte una imagen para cortar',
        description:
          'Suba cualquier foto JPG, PNG, WebP, HEIC, GIF, BMP o SVG de hasta 20 MB (o péguela con Ctrl+V). Las piezas iniciales de división 3×3 se generan automáticamente al subirla.',
      },
      {
        title: 'Inspeccione la vista previa de líneas de corte numeradas',
        description:
          'Revise la rejilla superpuesta con líneas discontinuas sobre su foto a la izquierda, que muestra los límites exactos de las piezas numeradas (de 1 a N) antes de cortar las exportaciones finales.',
      },
      {
        title: 'Elija el diseño de división o los ajustes rápidos',
        description:
          'Seleccione Rejilla (N×M), Tiras horizontales o Tiras verticales, escriba Filas y Columnas de 1 a 10, o haga clic en 2×2, 3×3 Instagram, 1×3 Carrusel o 4×1 Tiras.',
      },
      {
        title: 'Elija el formato de salida y la calidad de pieza',
        description:
          'Seleccione Orig, JPG, PNG o WEBP y ajuste la calidad de pieza (10 %–100 %, 92 % por defecto) para salidas que no sean PNG.',
      },
      {
        title: 'Genere cortes a resolución completa',
        description:
          'Haga clic en Dividir en N piezas cada vez que actualice Filas, Columnas o el formato para volver a cortar todas las piezas en límites exactos de píxeles a resolución completa.',
      },
      {
        title: 'Guarde piezas individuales o el archivo ZIP',
        description:
          'Use Descargar en cualquier tarjeta de pieza numerada F·C abajo, o haga clic en Descargar todas las piezas (ZIP) para descargar toda la rejilla numerada junta.',
      },
    ],
    features: [
      {
        title: 'Modos flexibles de rejilla y tiras',
        description: 'Divida en rejillas personalizadas de Filas × Columnas, filas horizontales o cortes verticales.',
      },
      {
        title: 'Vista previa de líneas de corte en vivo',
        description: 'Vea los límites de piezas numeradas superpuestos sobre su imagen antes de dividir.',
      },
      {
        title: 'Vistas previas instantáneas de piezas y ZIP',
        description: 'Inspeccione cada pieza generada y descargue todas las piezas con nombres limpios (fila_columna) en un solo ZIP.',
      },
      {
        title: 'Corte a resolución completa',
        description: 'Cada pieza se corta con limpieza desde el lienzo original a resolución completa.',
      },
    ],
    faqs: [
      {
        question: '¿Cómo construye el divisor de imágenes una rejilla 3×3 limpia para Instagram?',
        answer:
          'Haga clic en el botón de ajuste predefinido 3×3 Instagram (o fije el modo Rejilla con 3 filas y 3 columnas) y haga clic en Dividir en 9 piezas. Cada pieza se exporta numerada en secuencia desde la fila 1 columna 1 arriba a la izquierda hasta la fila 3 columna 3 abajo a la derecha, así que al subirlas en orden inverso se construye un mosaico de perfil sin costuras.',
      },
      {
        question: '¿Hasta qué tamaño de rejilla puedo cortar en una sola ejecución con el divisor?',
        answer:
          'Tanto Filas (cortes horizontales) como Columnas (cortes verticales) aceptan valores de 1 a 10, lo que permite desde 2 cortes hasta una rejilla de 10×10 con un total de 100 piezas individuales. Como cada corte usa límites de píxeles redondeados sobre su imagen original, las piezas vecinas se alinean de borde a borde sin píxeles faltantes.',
      },
      {
        question: '¿En qué se diferencian las tiras horizontales y verticales del modo Rejilla (N×M)?',
        answer:
          'Las tiras horizontales fijan las columnas en 1 y cortan banners horizontales de ancho completo apilados de arriba a abajo, útil para capturas largas de páginas web o secciones de infografías altas. Las tiras verticales fijan las filas en 1 y dividen panoramas amplios lado a lado en diapositivas de carrusel deslizables de Instagram o LinkedIn.',
      },
      {
        question: '¿Qué ajustes predefinidos de división con un clic incluye el divisor?',
        answer:
          'Cuatro botones de ajuste predefinido están justo debajo de los campos numéricos: 2×2 (4 cuadrantes), 3×3 Instagram (9 cuadrados de rejilla), 1×3 Carrusel (3 tiras verticales deslizables) y 4×1 Tiras (4 bandas horizontales). Al hacer clic en cualquier ajuste, la vista previa de líneas de corte en vivo se actualiza de inmediato.',
      },
      {
        question: '¿Las piezas generadas se reducen o se recortan a las dimensiones originales en píxeles?',
        answer:
          'Cada pieza se corta directamente del ancho y alto en píxeles completos de su imagen de origen sobre HTML5 Canvas, sin cambiar su tamaño. Por ejemplo, dividir un panorama de 3000×1000 en tiras de carrusel 1×3 produce tres piezas nítidas de 1000×1000.',
      },
      {
        question: '¿Qué pasa si el ancho o alto de mi imagen no se divide en partes iguales?',
        answer:
          'Las coordenadas de corte se calculan de forma proporcional con Math.round sobre todo el ancho y alto, para que los cortes vecinos compartan bordes exactos de píxeles enteros sin huecos ni solapamientos. Algunas piezas pueden diferir en 1 píxel al dividir números impares (como 1000 px en 3 columnas: 333, 334, 333).',
      },
      {
        question: '¿Necesito recordar qué pieza va dónde después de descargar el ZIP del divisor?',
        answer:
          'No, cada corte muestra su insignia de fila y columna (como F1·C2) y sus dimensiones exactas en píxeles debajo de su tarjeta de vista previa. Dentro del archivo ZIP, los nombres siguen <base>_f<fila>_c<columna>.<ext> (por ejemplo, panorama_r1_c1.jpg, panorama_r1_c2.jpg) en orden de lectura.',
      },
      {
        question: '¿Los cambios en filas, columnas o formato actualizan las piezas generadas automáticamente?',
        answer:
          'Al subir un archivo por primera vez, las piezas se generan automáticamente con la configuración activa de diseño. Después de editar Filas, Columnas o Formato de salida, la vista previa de líneas de corte se actualiza de inmediato y al hacer clic en Dividir en N piezas se regeneran las tarjetas de piezas descargables y el ZIP.',
      },
      {
        question: '¿Qué formatos de entrada funcionan en el divisor de imágenes?',
        answer:
          'Suba imágenes JPG, PNG, WebP, HEIC/HEIF de iPhone, GIF, BMP y SVG de hasta 20 MB cada una. Al seleccionar Orig en Formato de salida, se conserva el formato de origen (o se convierte HEIC/SVG/BMP de forma limpia a PNG/JPG estándar).',
      },
      {
        question: '¿Dividir una hoja de sprites PNG transparente conserva los fondos transparentes?',
        answer:
          'Sí, cortar recursos PNG o WebP transparentes mantiene la transparencia alfa completa cuando el formato de salida es Orig, PNG o WEBP. Si cambia explícitamente el formato de salida a JPG, los lienzos de piezas rellenan la transparencia con blanco sólido (#FFFFFF).',
      },
      {
        question: '¿Puedo pegar una captura larga desde el portapapeles y dividirla en secciones imprimibles?',
        answer:
          'Sí, pulse Ctrl+V (o Cmd+V) en la zona de subida para soltar una captura del portapapeles directamente en el divisor. Elija Tiras horizontales y fije 3–6 filas para dividir registros de chat altos o capturas web en páginas manejables.',
      },
      {
        question: '¿Aparece el deslizador de calidad de pieza para las piezas PNG del divisor?',
        answer:
          'No, las piezas PNG siempre se codifican sin pérdida, así que la calidad de pieza (10 %–100 %, con 92 % por defecto) se muestra automáticamente solo cuando su formato resuelto es JPG o WebP. Eso garantiza bordes nítidos en sprites, maquetas de interfaz y divisiones de texto.',
      },
      {
        question: '¿Cómo se nombra la descarga ZIP masiva del divisor de imágenes?',
        answer:
          'Al hacer clic en Descargar todas las piezas (ZIP), todas las piezas generadas se empaquetan en un solo archivo llamado <base>_<filas>x<columnas>_tiles.zip, como hero_3x3_tiles.zip. También puede descargar piezas individuales con el botón Descargar de cada tarjeta.',
      },
      {
        question: '¿Se suben las fotos a servidores externos durante el corte en rejilla?',
        answer:
          'No, los cálculos de corte, el corte en lienzo, las vistas previas de piezas y la compresión ZIP ocurren dentro de la memoria local del navegador. Sus obras privadas, diagramas y fotos personales nunca salen de su dispositivo.',
      },
      {
        question: '¿Dividir elimina las etiquetas EXIF de cámara y los metadatos GPS de ubicación?',
        answer:
          'Sí, cortar subregiones rectangulares en piezas nuevas de HTML5 Canvas genera blobs de imagen limpios sin encabezados EXIF. Por eso, los detalles de cámara y las coordenadas GPS de la foto original nunca se copian en las piezas individuales.',
      },
      {
        question: '¿Qué pasa con un GIF animado al dividirlo en piezas de rejilla?',
        answer:
          'HTML5 Canvas extrae y corta el primer fotograma del GIF en piezas estáticas con el formato de salida elegido. Dividir GIF animados de varios fotogramas manteniendo la animación no es compatible aquí.',
      },
      {
        question: '¿Por qué mis piezas 3×3 pueden diferir levemente en proporción si mi foto no es cuadrada?',
        answer:
          'El divisor divide su imagen de origen de forma proporcional a lo largo de su ancho y alto existentes, sin distorsionar ni recortar bordes. Si quiere piezas cuadradas 1:1 para una rejilla de Instagram, recorte su imagen a 1:1 primero en nuestra herramienta Recortador de imágenes antes de dividir 3×3.',
      },
      {
        question: '¿Cómo reemplazo la imagen después de descargar una rejilla dividida?',
        answer:
          'Haga clic en Cambiar imagen en la esquina superior derecha de la tarjeta Vista previa de líneas de corte para liberar las URL de piezas existentes de la memoria y cargar una imagen nueva. No hace falta recargar la página.',
      },
      {
        question: '¿Pueden los desarrolladores de juegos usar esta herramienta para cortar hojas de iconos?',
        answer:
          'Sí, las hojas de sprites dispuestas en filas y columnas uniformes se cortan con precisión cuando fija recuentos de Filas × Columnas coincidentes y mantiene la salida PNG. Cada icono se guarda ordenado por su coordenada de fila y columna dentro del ZIP.',
      },
      {
        question: '¿Funciona el divisor de imágenes en iPhone, iPad y teléfonos Android?',
        answer:
          'Sí, las rejillas adaptables, los campos numéricos de filas y columnas y el empaquetado ZIP en el navegador funcionan directamente en Safari de iOS y Chrome de Android. Las divisiones grandes de 10×10 en fotos de muchos megapíxeles van más rápido en escritorio o en navegadores de celular modernos.',
      },
    ],
    relatedSlugs: ['/image-cropper', '/image-resizer', '/image-dimensions-checker', '/'],
  },

  {
    slug: '/image-dpi-changer',
    name: 'Cambiador de DPI de imagen',
    shortDescription: 'Cambie los metadatos DPI de JPEG y PNG (72, 150, 300 o personalizado) sin perder calidad.',
    category: 'developer',
    seoTitle: 'Cambiador de DPI de imagen gratis online – 300 DPI',
    seoDescription:
      'Cambie el DPI de sus imágenes JPG y PNG gratis online a 72, 150, 300 o 600 DPI sin perder calidad. Metadatos verificados y proceso por lotes en su navegador.',
    h1: 'Cambiador de DPI de imagen gratis',
    subtitle:
      'Creada para diseñadores, imprentas, autores y estudiantes que preparan archivos para portales de impresión, este cambiador de DPI de imagen sin pérdidas actualiza los encabezados de resolución de JPEG y PNG sin tocar los datos de píxeles. Cambie a 72, 96, 150, 300 o 600 DPI, o a un DPI personalizado, en lotes con lectura verificada.',
    howToSteps: [
      {
        title: 'Elija o ajuste primero su DPI objetivo (o en cualquier momento)',
        description:
          'Haga clic en un ajuste predefinido: 72 DPI (Pantalla), 96 DPI (Windows), 150 DPI (Impresión de borrador), 300 DPI (Impresión de alta calidad) o 600 DPI (Archivo), o escriba cualquier DPI personalizado de 1 a 2 400.',
      },
      {
        title: 'Suba una o varias imágenes',
        description:
          'Suelte archivos JPG, PNG, WebP, HEIC, GIF, BMP o SVG de hasta 20 MB cada uno en el área de subida (o péguelos con Ctrl+V). Los archivos se procesan de inmediato con el DPI elegido.',
      },
      {
        title: 'Revise Antes, DPI verificado y el método de procesamiento',
        description:
          'Cada tarjeta muestra el DPI original frente al DPI de salida verificado, junto con una insignia que confirma Actualización sin pérdidas de encabezado JPEG, Actualización sin pérdidas de pHYs PNG o Convertido a PNG con DPI pHYs.',
      },
      {
        title: 'Cambie el DPI de forma dinámica en los archivos en cola si hace falta',
        description:
          'Haga clic en otro ajuste predefinido de DPI o escriba un nuevo DPI personalizado y pulse Aplicar [X] DPI para reprocesar automáticamente cada archivo de su cola.',
      },
      {
        title: 'Descargue archivos individuales o un ZIP por lotes',
        description:
          'Haga clic en Descargar en las tarjetas de resultados individuales (con nombre <base>_<dpi>dpi.<ext>) o en Descargar todo (ZIP) cuando haya dos o más archivos listos.',
      },
    ],
    features: [
      {
        title: 'Edición real de encabezado JPEG y PNG sin pérdidas',
        description: 'Actualiza la densidad JFIF APP0/EXIF en JPEG y los fragmentos pHYs (con CRC32 válido) en PNG sin tocar los píxeles de la imagen.',
      },
      {
        title: 'Lectura verificada de antes y después',
        description: 'Vuelve a analizar el archivo de salida automáticamente para que vea el DPI verificado exacto guardado en el archivo.',
      },
      {
        title: 'Procesamiento de DPI por lotes',
        description: 'Actualice decenas de gráficos listos para imprimir a la vez y expórtelos en un archivo ZIP.',
      },
      {
        title: 'Respaldo WebP/HEIC',
        description: 'Los formatos sin DPI se pueden convertir con limpieza a PNG sin pérdida con el fragmento pHYs DPI exacto incrustado.',
      },
    ],
    faqs: [
      {
        question: '¿Cómo edita el cambiador de DPI archivos JPEG y PNG sin perder calidad?',
        answer:
          'En lugar de decodificar y recomprimir píxeles en el lienzo, corrige directamente los segmentos binarios de metadatos: actualiza o inserta las etiquetas de resolución JFIF APP0 y EXIF IFD0 en JPEG, y escribe un fragmento pHYs válido con suma de comprobación CRC32 en PNG. Cada píxel visual y bloque de compresión queda 100 % intacto.',
      },
      {
        question: '¿Cambiar el DPI altera el ancho y alto en píxeles o el tamaño físico de impresión?',
        answer:
          'Cambiar el DPI mantiene las dimensiones en píxeles completamente idénticas: por ejemplo, una foto de 3000×2400 sigue siendo de 3000×2400 px. Lo que cambia es el encabezado de densidad de impresión que indica a aplicaciones de publicación como Photoshop, InDesign o portales de impresión que lo interpreten a 10×8 pulgadas a 300 DPI, en lugar de 41,6×33,3 pulgadas a 72 DPI.',
      },
      {
        question: '¿Por qué las fotos de cámara o capturas suelen mostrar Antes: Sin establecer en DPI?',
        answer:
          'Muchas exportaciones de teléfono, capturas y optimizadores web eliminan los campos de resolución JFIF/EXIF u omiten el fragmento opcional pHYs de PNG, dejando que los visores asuman un valor de 72 o 96 DPI. Nuestra herramienta inserta un encabezado estándar para que los validadores de impresión detecten 300 DPI de forma fiable.',
      },
      {
        question: '¿Cómo confirma la insignia de DPI verificado que la actualización funcionó?',
        answer:
          'Después de construir el blob binario actualizado, la herramienta ejecuta su analizador de encabezado binario de nuevo sobre el archivo de salida desde cero para leer la densidad X/Y recién incrustada. Eso garantiza que el archivo descargado pase las comprobaciones automatizadas de portales de impresión e inspectores de escritorio.',
      },
      {
        question: '¿Cómo trata el cambiador de DPI los archivos WebP, HEIC, BMP, GIF o SVG?',
        answer:
          'Los formatos que carecen de encabezados DPI estándar entre programas (como WebP o BMP) se decodifican en local y se convierten con limpieza a PNG sin pérdida con el fragmento pHYs DPI exacto incrustado. Verá una insignia Convertido a PNG con DPI pHYs en esas tarjetas.',
      },
      {
        question: '¿Qué ajustes predefinidos de DPI hay y qué rango acepta el DPI personalizado?',
        answer:
          'Cinco ajustes rápidos cubren los estándares comunes: 72 DPI (Pantalla), 96 DPI (Windows), 150 DPI (Impresión de borrador), 300 DPI (Impresión de alta calidad) y 600 DPI (Archivo). El DPI personalizado permite escribir cualquier número entero entre 1 y 2 400 DPI.',
      },
      {
        question: '¿Actualizar el DPI de JPEG conserva las etiquetas EXIF y el perfil ICC de mi cámara?',
        answer:
          'Sí, nuestro copiador de segmentos JPEG sin pérdidas deja intactos su perfil de color, las etiquetas de cámara y los datos de escaneo de imagen, mientras actualiza la densidad JFIF APP0 y XResolution/YResolution/ResolutionUnit de EXIF si existe un segmento EXIF APP1. Si no había encabezado JFIF, inserta un segmento JFIF APP0 limpio de 18 bytes justo después de SOI.',
      },
      {
        question: '¿Por qué el DPI de PNG a veces se lee como 299 o 300 DPI tras la conversión?',
        answer:
          'La especificación oficial pHYs de PNG guarda la resolución en píxeles por metro en lugar de puntos por pulgada, convirtiendo 300 DPI en 11 811 píxeles por metro. Redondear de píxeles por metro a pulgadas produce un 300 DPI exacto y limpio en casi todos los valores predefinidos.',
      },
      {
        question: '¿Cambiar una miniatura web de 400×400 a 300 DPI la hará nítida para imprimir?',
        answer:
          'No, actualizar el DPI solo altera las instrucciones de metadatos, no el recuento de píxeles: un archivo de 400×400 píxeles a 300 DPI se imprime con nitidez solo a 1,33×1,33 pulgadas. Para cubrir tamaños de papel más grandes con limpieza a 300 DPI, necesita dimensiones en píxeles mayores en la obra de origen.',
      },
      {
        question: '¿Puedo actualizar varios recursos de impresión a 300 DPI por lotes y exportar un ZIP?',
        answer:
          'Sí, suelte cualquier cantidad de archivos JPG o PNG de hasta 20 MB cada uno y todos se procesan al DPI elegido en secuencia. Cuando dos o más archivos terminan, aparece una barra Lote listo con un botón Descargar todo (ZIP) que produce images_<dpi>dpi_compressmypic.zip.',
      },
      {
        question: '¿Puedo cambiar de opinión y aplicar 600 DPI después de procesar a 300 DPI?',
        answer:
          'Sí, al hacer clic en otro botón de ajuste predefinido de DPI objetivo se actualizan y reprocesan de inmediato todos los archivos de su cola desde los archivos originales subidos, sin acumular ediciones. Si escribe un número en DPI personalizado, haga clic en Aplicar DPI para actualizar todos los elementos a esa densidad personalizada.',
      },
      {
        question: '¿Establecer 300 DPI aumenta mucho el tamaño de archivo de JPEG o PNG?',
        answer:
          'No, agregar o corregir un encabezado JFIF APP0 (18 bytes) o un fragmento pHYs de PNG (21 bytes) cambia el peso total del archivo como mucho unas pocas docenas de bytes en JPEG y PNG nativos. Solo los formatos sin DPI convertidos a PNG sin pérdida cambian de tamaño.',
      },
      {
        question: '¿Se envían a algún servidor externo las pruebas, portadas o escaneos confidenciales?',
        answer:
          'No, el análisis binario de bytes, el cálculo de suma de comprobación CRC32 y la corrección de encabezados se ejecutan en local en ArrayBuffers del navegador. Sus archivos nunca salen de su computadora o celular.',
      },
      {
        question: '¿Por qué plataformas como Amazon KDP o revistas académicas rechazan archivos de 72 DPI?',
        answer:
          'Muchos portales automatizados de preimpresión inspeccionan la etiqueta de resolución JFIF o pHYs de PNG de la imagen y rechazan envíos por debajo de 300 DPI, incluso cuando las dimensiones en píxeles son amplias. Actualizar la etiqueta de encabezado a 300 DPI satisface esas comprobaciones de preimpresión sin recomprimir la obra.',
      },
      {
        question: '¿Cómo se nombran los archivos de salida al guardarlos individualmente o en ZIP?',
        answer:
          'Cada archivo actualizado conserva su nombre base limpio y agrega _<objetivo>dpi más su extensión, como poster_300dpi.jpg o diagram_600dpi.png. Eso evita sobrescribir sus archivos originales en el disco.',
      },
      {
        question: '¿Funciona el cambiador de DPI en JPEG que usaban puntos por cm en vez de por pulgada?',
        answer:
          'Sí, el lector reconoce tanto la unidad=1 (puntos por pulgada) como la unidad=2 (puntos por cm, multiplicados por 2,54) en etiquetas JFIF y EXIF al mostrar el DPI de Antes. Al escribir los encabezados de salida, estandariza la densidad con limpieza a pulgadas (DPI) para compatibilidad universal.',
      },
      {
        question: '¿Puedo eliminar o quitar las etiquetas DPI en lugar de cambiarlas?',
        answer:
          'Esta herramienta siempre incrusta o actualiza el encabezado DPI objetivo elegido para cumplir los estándares de impresión o pantalla. Si quiere borrar todos los metadatos JFIF, EXIF y de fragmentos PNG por privacidad, pase sus archivos por nuestra herramienta Eliminar metadatos de imagen.',
      },
      {
        question: '¿Qué pasa si subo un JPEG dañado o un formato no compatible al cambiador de DPI?',
        answer:
          'Cada archivo en cola se ejecuta de forma independiente dentro de su propio manejador de errores, así que una sola imagen ilegible nunca detiene el resto de su lote. Los elementos fallidos muestran una alerta roja clara en la misma página, mientras los archivos válidos terminan y se empaquetan en su descarga ZIP con normalidad.',
      },
      {
        question: '¿Puedo pegar una captura del portapapeles y sellarla de inmediato a 300 DPI?',
        answer:
          'Sí, pulse Ctrl+V (o Cmd+V) en la zona de subida para pasar una captura PNG del portapapeles directamente al procesador. Escribe un fragmento pHYs válido de 300 DPI sin pérdida en un momento.',
      },
      {
        question: '¿Funciona este editor de DPI sin pérdidas en Windows, Mac, Linux y navegadores de celular?',
        answer:
          'Sí, las API estándar de ArrayBuffer y DataView del navegador funcionan con limpieza en Chrome, Firefox, Edge y Safari de escritorio, además de navegadores de celular. Nunca hacen falta programas de escritorio, complementos ni subidas a servidores.',
      },
    ],
    relatedSlugs: ['/image-metadata-viewer', '/image-dimensions-checker', '/remove-image-metadata', '/'],
  },

  {
    slug: '/image-to-base64',
    name: 'Imagen a Base64',
    shortDescription: 'Codifique cualquier imagen en URL de datos Base64, etiqueta HTML img o fragmento CSS.',
    category: 'developer',
    seoTitle: 'Imagen a Base64 gratis online – URL de datos y HTML',
    seoDescription:
      'Convierta imágenes a Base64 gratis online: genere URL de datos, Base64 puro, etiquetas HTML <img> y reglas CSS url(). Copie con un clic, todo en su navegador.',
    h1: 'Convertidor de imagen a Base64',
    subtitle:
      'Creada para desarrolladores frontend, programadores de plantillas de correo y redactores técnicos, este convertidor local de imagen a Base64 convierte recursos de imagen binarios en cadenas de texto listas para copiar en un solo paso. Cambie al instante entre las pestañas URL de datos, Base64 puro, HTML img y CSS url() sin subir iconos propios.',
    howToSteps: [
      {
        title: 'Suelte, seleccione o pegue una imagen',
        description:
          'Suba cualquier archivo JPG, PNG, WebP, SVG, GIF, BMP, ICO o AVIF de hasta 15 MB a la zona de subida, o pegue una imagen del portapapeles con Ctrl+V.',
      },
      {
        title: 'Revise el tamaño de archivo y la sobrecarga de caracteres',
        description:
          'Inspeccione la tarjeta de resumen superior con la miniatura de su imagen, el tamaño original en bytes, las dimensiones naturales (cuando apliquen), el recuento exacto de caracteres de salida y el porcentaje de sobrecarga Base64.',
      },
      {
        title: 'Cambie entre las 4 pestañas de salida para desarrolladores',
        description:
          'Haga clic en URL de datos, Base64 puro, HTML <img> o CSS url() para dar formato a la cadena codificada para cargas JSON, imágenes insertadas en HTML u hojas de estilo.',
      },
      {
        title: 'Copie al portapapeles o guarde como archivo .txt',
        description:
          'Haga clic en Copiar salida (o haga clic dentro del cuadro de código para seleccionar todo) para copiar la cadena, o haga clic en Guardar .TXT para descargar <nombre-de-archivo>_<pestaña>.txt.',
      },
      {
        title: 'Haga clic en Codificar otra para cambiar de archivo',
        description:
          'Cuando esté listo para codificar el siguiente icono o sprite, haga clic en Codificar otra para borrar la salida y liberar la memoria local de objetos.',
      },
    ],
    features: [
      {
        title: '4 formatos de salida para desarrolladores',
        description: 'Genere automáticamente fragmentos de URL de datos, Base64 puro, HTML <img> y CSS background-image.',
      },
      {
        title: 'Métricas exactas de bytes y caracteres',
        description: 'Compare de inmediato el tamaño de archivo binario original con la longitud de la cadena Base64 codificada.',
      },
      {
        title: 'Copiar con un clic y descarga TXT',
        description: 'Copie cadenas Base64 enormes al portapapeles de forma fiable o guárdelas como archivo de texto simple.',
      },
      {
        title: 'Codificación 100 % local con FileReader',
        description: 'Sin subidas: la codificación ocurre de forma nativa dentro de la pestaña de su navegador.',
      },
    ],
    faqs: [
      {
        question: '¿Por qué el convertidor de imagen a Base64 agrega aproximadamente un 33 % al tamaño de salida?',
        answer:
          'Base64 representa cada 3 bytes binarios (24 bits) con 4 caracteres ASCII imprimibles (6 bits cada uno), más hasta dos signos igual de relleno al final. Por eso, una imagen de 30 KB siempre se codifica en unos 40 KB de texto Base64, que la barra de resumen registra automáticamente.',
      },
      {
        question: '¿Qué cuatro formatos de salida puedo generar después de codificar una imagen a Base64?',
        answer:
          'Cuatro pestañas están justo encima del cuadro de código: URL de datos (URI completa data:image/...;base64,...), Base64 puro (carga sin prefijo), HTML <img> (etiqueta lista con alt limpio y atributos de ancho y alto) y CSS url() (regla background-image: url("...");).',
      },
      {
        question: '¿Codificar altera la calidad de la imagen, elimina el código SVG o aplana GIF animados?',
        answer:
          'No, el codificador lee el archivo binario puro directamente con FileReader.readAsDataURL del navegador, sin dibujar en el lienzo. Cada byte original, elemento XML de SVG vectorial, fotograma ICO y fotograma de animación GIF permanece 100 % idéntico bit a bit.',
      },
      {
        question: '¿Qué formatos de archivo y tamaño máximo de subida admite la codificación a Base64?',
        answer:
          'Puede codificar imágenes JPG, PNG, WebP, SVG, GIF, BMP, ICO de faviconos y AVIF de hasta 15 MB por archivo. Mantener las entradas Base64 con un tope de 15 MB evita que las cadenas de texto de varios megabytes congelen la representación del portapapeles o del área de texto.',
      },
      {
        question: '¿Cuándo conviene insertar URL de datos Base64 en lugar de referenciar archivos de imagen normales?',
        answer:
          'Insertar iconos pequeños de interfaz, spinners, faviconos o insignias de firma de correo de pocos kilobytes elimina viajes HTTP extra y funciona con limpieza en documentos HTML independientes. Para fotos principales grandes, las URL normales de imagen WebP o JPG siguen siendo más pequeñas y se benefician del caché HTTP del navegador.',
      },
      {
        question: '¿Por qué la pestaña HTML <img> incluye atributos de ancho y alto automáticamente?',
        answer:
          'Una vez que su navegador carga la vista previa temporal de objeto y lee naturalWidth y naturalHeight, esas dimensiones en píxeles llenan el fragmento HTML junto con una etiqueta alt derivada de su nombre base de archivo. Incluir dimensiones ayuda a prevenir el desplazamiento acumulativo de diseño (CLS) en páginas web.',
      },
      {
        question: '¿Puedo descargar la salida Base64 larga cuando copiar cadenas grandes es incómodo?',
        answer:
          'Sí, haga clic en Guardar .TXT junto a Copiar salida para descargar el texto exacto que se muestra en su pestaña activa (URL de datos, Base64 puro, HTML o CSS) como <base>_<pestaña>.txt. Eso facilita abrir cargas muy largas con limpieza en VS Code o scripts de terminal.',
      },
      {
        question: '¿Qué pasa si mi navegador bloquea los permisos del portapapeles al hacer clic en Copiar salida?',
        answer:
          'Si navigator.clipboard.writeText está bloqueado por la configuración de privacidad del navegador, un mensaje en la página le pide copiar directamente desde el cuadro de código. Al hacer clic o tabular dentro del área de texto monoespaciada oscura, se resalta automáticamente toda la cadena para que Ctrl+C / Cmd+C copie todo con limpieza.',
      },
      {
        question: '¿En qué se diferencia Base64 puro de la URL de datos al enviar cargas JSON de API?',
        answer:
          'La URL de datos antepone data:<mime>;base64, para que los navegadores puedan mostrarla directamente dentro de atributos src o reglas CSS url(). Las API, bases de datos de celular y codificadores de servidor suelen esperar solo Base64 puro: al cambiar a la pestaña Base64 puro, el encabezado se elimina automáticamente.',
      },
      {
        question: '¿Se suben a algún lugar los iconos de interfaz, diagramas o recursos de clientes al codificar?',
        answer:
          'Nunca: FileReader lee los bytes estrictamente dentro de la memoria local del navegador del cliente. Ningún archivo de imagen ni cadena Base64 se transmite jamás a servidores remotos.',
      },
      {
        question: '¿Puedo codificar un logotipo SVG o un archivo favicon.ico sin problemas?',
        answer:
          'Sí, tanto las extensiones .svg como .ico están admitidas explícitamente en el filtro de subida y se codifican con su prefijo MIME adecuado data:image/svg+xml o image/x-icon. También puede soltar archivos en el convertidor y luego verificarlos de ida y vuelta con nuestro decodificador Base64 a imagen.',
      },
      {
        question: '¿Por qué el porcentaje de sobrecarga es un poco mayor en las pestañas HTML <img> y CSS url()?',
        answer:
          'Además de la expansión de codificación Base64 del 33 % y el encabezado MIME de la URL de datos, las pestañas HTML y CSS envuelven caracteres extra de marcado como <img src="..." alt="..." />. El contador de resumen recalcula los caracteres en vivo cada vez que cambia de pestaña.',
      },
      {
        question: '¿Puedo pegar una captura directamente desde el portapapeles para obtener una URL de datos rápida?',
        answer:
          'Sí, pulse Ctrl+V (o Cmd+V en Mac) en cualquier parte de la pantalla de subida para capturar una imagen copiada del portapapeles directamente. La herramienta la codifica al instante en formatos URL de datos, Base64 puro, HTML y CSS, listos para copiar con un clic.',
      },
      {
        question: '¿Conserva Base64 puro los caracteres estándar + y / con relleno =?',
        answer:
          'Sí, FileReader del navegador produce cadenas Base64 estándar RFC 4648 con +, / y caracteres = de relleno al final, en lugar de sustituciones base64url seguras para URL. Eso garantiza compatibilidad directa con URI de datos HTML, cargas MIME de correo y decodificadores de servidor estándar.',
      },
      {
        question: '¿Por qué algunos clientes de correo bloquean las imágenes Base64 insertadas?',
        answer:
          'Algunos proveedores de correo web y filtros de spam corporativos eliminan las URI data:image en boletines HTML por razones de seguridad, aunque los navegadores las muestran bien. Base64 funciona mejor en aplicaciones web, documentos HTML de un solo archivo, paquetes React/CSS y plantillas JSON/SVG.',
      },
      {
        question: '¿Cómo conservo los metadatos originales de cámara o los elimino antes de codificar a Base64?',
        answer:
          'Como esta herramienta codifica los bytes puros exactos, cualquier metadato EXIF existente dentro de un JPEG permanece codificado dentro de la cadena Base64. Si quiere cadenas Base64 más pequeñas y sin metadatos, pase su foto por nuestra herramienta Eliminar metadatos de imagen antes de codificar.',
      },
      {
        question: '¿Debería reducir PNG o JPG grandes antes de convertirlos a Base64?',
        answer:
          'Sí: como Base64 infla el tamaño ~33 %, comprimir primero un PNG de 300 KB a un WebP de 40 KB ahorra unos 350 KB de sobrecarga de texto Base64 en su hoja de estilo o paquete. Use antes nuestro Compresor de imágenes u Optimizador de imágenes web para grandes ahorros.',
      },
      {
        question: '¿Por qué las dimensiones se omiten en ciertos archivos ICO poco comunes o dañados?',
        answer:
          'Si un navegador no puede decodificar un ICO inusual de varios fotogramas o un encabezado exótico en una vista previa HTMLImageElement, las dimensiones se omiten con limpieza mientras la codificación Base64 pura sigue funcionando. Los archivos estándar PNG, JPG, WebP, GIF, SVG, BMP y AVIF muestran recuentos exactos de píxeles An×Al.',
      },
      {
        question: '¿Cómo codifico otra imagen después de copiar el primer fragmento?',
        answer:
          'Haga clic en Codificar otra en la esquina superior derecha de la tarjeta de resumen para restablecer las pestañas de salida y borrar el área de texto. Libera de inmediato la memoria temporal de vista previa y restaura la zona de subida para su siguiente recurso.',
      },
      {
        question: '¿Funciona el codificador Base64 en Safari de celular y navegadores Chrome?',
        answer:
          'Sí, las API integradas HTML5 FileReader y de portapapeles funcionan con fiabilidad en Safari de iOS, Chrome de Android, Windows, macOS y Linux. Como la codificación se ejecuta en local en la memoria del navegador, no hay retrasos de servidor ni siquiera con datos de celular.',
      },
    ],
    relatedSlugs: ['/base64-to-image', '/favicon-generator', '/image-dimensions-checker', '/'],
  },

  {
    slug: '/base64-to-image',
    name: 'Base64 a imagen',
    shortDescription: 'Decodifique una URL de datos Base64 o una cadena Base64 pura y vuelva a convertirla en imagen.',
    category: 'developer',
    seoTitle: 'Base64 a imagen gratis online – Decodificador y vista',
    seoDescription:
      'Decodifique Base64 a imagen gratis online: pegue una URL de datos o Base64 puro y vea la imagen al instante. Detecta PNG, JPG, WebP, GIF y SVG en su navegador.',
    h1: 'Decodificador de Base64 a imagen',
    subtitle:
      'Diseñada para ingenieros web que depuran cargas de API, especialistas de correo que revisan iconos insertados y probadores de calidad, este decodificador de Base64 a imagen en el navegador reconstruye URL de datos y cadenas Base64 puras en archivos descargables. Inspeccione el formato MIME detectado, las dimensiones en píxeles y el tamaño en bytes en privado, en su dispositivo.',
    howToSteps: [
      {
        title: 'Pegue su cadena Base64 o URL de datos',
        description:
          'Pegue una cadena completa data:image/...;base64,... o caracteres Base64 puros en el cuadro Pegar cadena Base64 o URL de datos.',
      },
      {
        title: 'Espere la decodificación automática (o haga clic en Decodificar imagen)',
        description:
          'El decodificador analiza espacios en blanco, caracteres seguros para URL y bytes de encabezado mágico de inmediato al pegar (o al hacer clic en Decodificar imagen) para validar la imagen.',
      },
      {
        title: 'Inspeccione la vista previa, el formato, el tamaño y las dimensiones',
        description:
          'Vea el gráfico decodificado sobre un damero de transparencia junto con la insignia Imagen válida decodificada, el formato detectado, el tamaño binario y el ancho × alto en píxeles.',
      },
      {
        title: 'Seleccione su formato de descarga',
        description:
          'Elija Original para guardar el archivo binario decodificado exacto sin tocarlo, o elija PNG, JPG o WEBP para convertir la imagen al exportar.',
      },
      {
        title: 'Descargue su archivo de imagen decodificado',
        description:
          'Haga clic en Descargar archivo de imagen para guardar decoded_image.<ext> directamente en su dispositivo, o haga clic en Borrar encima del cuadro de entrada para probar otra carga.',
      },
    ],
    features: [
      {
        title: 'Detecta automáticamente el prefijo de URL de datos faltante',
        description: 'Identifica automáticamente los encabezados mágicos PNG, JPEG, GIF, WebP, BMP y SVG incluso desde Base64 puro.',
      },
      {
        title: 'Validación instantánea y mensajes de error',
        description: 'Detecta con claridad caracteres Base64 no válidos o encabezados dañados.',
      },
      {
        title: 'Conversión de formato opcional',
        description: 'Descargue el binario decodificado exacto o vuelva a exportarlo como PNG, JPG o WebP.',
      },
      {
        title: 'Decodificación privada en el navegador',
        description: 'Segura para tokens internos, recursos de correo e iconos de interfaz propios.',
      },
    ],
    faqs: [
      {
        question: '¿Puede este decodificador de Base64 a imagen leer cadenas sin el prefijo data:image/?',
        answer:
          'Sí, si pega Base64 puro sin encabezado de URL de datos, el decodificador inspecciona los bytes de firma mágica decodificados al frente del flujo binario. Detecta automáticamente PNG, JPEG, GIF, WebP, BMP, ICO y marcado XML/SVG incrustado.',
      },
      {
        question: '¿Maneja el decodificador variantes Base64 seguras para URL y saltos de línea accidentales?',
        answer:
          'Sí, antes de llamar a atob(), el decodificador elimina automáticamente espacios en blanco, espacios y saltos de línea, y convierte los caracteres seguros para URL - y _ de vuelta a + y / estándar. Eso hace que pegar cadenas envueltas desde registros JSON, salidas de terminal o cargas JWT funcione con limpieza.',
      },
      {
        question: '¿Qué pasa si pego una carga Base64 dañada o que no es una imagen?',
        answer:
          'Los caracteres Base64 no válidos activan un mensaje de validación inmediato, mientras que los bytes Base64 válidos que no forman una imagen legible por el navegador muestran un error explícito que explica que los bytes no se pudieron mostrar. Nada se rompe ni se detiene en la página.',
      },
      {
        question: '¿Qué opciones de formato de descarga ofrece el decodificador una vez que la cadena se decodifica?',
        answer:
          'Puede seleccionar Original, PNG, JPG o WEBP antes de guardar. Al elegir Original, se guardan los bytes binarios puros exactos sin tocarlos como decoded_image.<ext>, mientras que PNG, JPG o WEBP vuelven a mostrar el gráfico decodificado en HTML5 Canvas.',
      },
      {
        question: '¿Qué pasa con las zonas transparentes si reexporto un PNG o SVG decodificado como JPG?',
        answer:
          'Al seleccionar JPG en Formato de descarga, se rellena automáticamente el lienzo con un fondo blanco sólido limpio (#FFFFFF) antes de codificar con calidad del 92 %. Mantener Original, PNG o WEBP conserva la transparencia completa sobre la vista previa en damero.',
      },
      {
        question: '¿Conserva el decodificador los GIF animados y SVG vectoriales al elegir Original?',
        answer:
          'Sí, al elegir Original se descarga el blob exacto construido directamente desde su arreglo de bytes decodificados, manteniendo intactas las rutas vectoriales SVG y las animaciones GIF de varios fotogramas. Tenga en cuenta que cambiar el formato de descarga a PNG, JPG o WEBP rasteriza los SVG o el primer fotograma de los GIF con el lienzo.',
      },
      {
        question: '¿Qué métricas aparecen junto a la vista previa de la imagen decodificada?',
        answer:
          'Una vez validada, el panel de resumen de la derecha muestra una insignia verde de estado Imagen válida decodificada junto con el formato detectado (como PNG, JPEG o SVG+XML). Justo debajo, puede inspeccionar el tamaño binario decodificado exacto en KB/MB y las dimensiones naturales en píxeles.',
      },
      {
        question: '¿Por qué una cadena data:image/svg+xml sin ;base64, muestra un error de codificación?',
        answer:
          'Las URI de datos que no son Base64 (como cadenas SVG codificadas por porcentaje, por ejemplo data:image/svg+xml,%3Csvg...) son texto simple en lugar de cargas Base64. Esta herramienta valida explícitamente cargas Base64 estándar o URI de datos con ;base64, para que las entradas no válidas fallen con claridad.',
      },
      {
        question: '¿Hay algún riesgo al decodificar respuestas internas de API, tokens QR o iconos privados aquí?',
        answer:
          'No, toda la limpieza de cadenas, la decodificación de bytes con atob(), la detección de firma MIME y la representación de imágenes se ejecutan estrictamente dentro de la memoria de la pestaña de su navegador. Las cadenas codificadas nunca viajan por la red ni tocan registros remotos.',
      },
      {
        question: '¿Cómo ayuda la vista previa en damero a inspeccionar iconos decodificados?',
        answer:
          'Se muestra un patrón de damero gris claro sutil detrás del marco de vista previa para que los recortes transparentes, los iconos blancos de interfaz y las sombras suaves destaquen de inmediato. Sin damero, los logotipos blancos transparentes se mezclarían de forma invisible con un panel blanco vacío.',
      },
      {
        question: '¿Por qué el archivo binario decodificado pesa menos que el texto Base64 que pegué?',
        answer:
          'El texto Base64 expande los datos binarios aproximadamente un 33 % con 6 bits por carácter ASCII. Al volver a convertirlo en bytes de imagen puros, se restaura el tamaño compacto original del archivo binario.',
      },
      {
        question: '¿Puedo envolver comillas HTML o CSS url("...") alrededor de mi cadena antes de pegarla?',
        answer:
          'Para una validación limpia, pegue solo la URL de datos (data:image/...;base64,...) o los caracteres Base64 en sí, sin etiquetas HTML ni comillas CSS alrededor. Quitar las comillas que rodean garantiza que el validador lea Base64 puro.',
      },
      {
        question: '¿Cómo convierto una cadena Base64 de un favicon BMP o ICO antiguo a WebP moderno?',
        answer:
          'Pegue el Base64 puro o la URL de datos, confirme que la vista previa se muestra con limpieza, haga clic en WEBP en el selector de formato de descarga y pulse Descargar archivo de imagen. El exportador de lienzo produce de inmediato una imagen WebP comprimida.',
      },
      {
        question: '¿Qué tan rápido decodifica cadenas Base64 de varios megabytes?',
        answer:
          'La decodificación ocurre en milisegundos en local en JavaScript para iconos pequeños y fotos web típicas de menos de varios megabytes. Las cadenas pegadas muy grandes (decenas de megabytes de texto) dependen sobre todo de la velocidad de pegado del área de texto de su navegador.',
      },
      {
        question: '¿Puedo decodificar cadenas Base64 SVG+XML en archivos PNG ráster nítidos?',
        answer:
          'Sí, pegue una URL de datos SVG codificada en Base64 o marcado Base64 SVG puro, que el decodificador identifica con encabezados <svg o <?xml automáticamente. Luego cambie el formato de descarga de Original a PNG para rasterizar el gráfico vectorial en el lienzo a su tamaño natural.',
      },
      {
        question: '¿Por qué el archivo de salida siempre se descarga como decoded_image.<ext>?',
        answer:
          'Las cadenas Base64 estándar y las URL de datos codifican bytes de imagen puros y tipos MIME sin llevar un nombre de archivo original. Para mantener las descargas predecibles en todas las entradas, el exportador nombra el archivo guardado decoded_image seguido de la extensión de formato detectada o seleccionada.',
      },
      {
        question: '¿Cuál es la forma más rápida de borrar una cadena Base64 enorme e inspeccionar la siguiente?',
        answer:
          'Haga clic en Borrar en la esquina superior derecha de la tarjeta Pegar cadena Base64 para limpiar el área de texto de un toque. Al hacerlo, se elimina de inmediato el panel de vista previa y se revocan las URL de objeto temporales de la memoria del navegador.',
      },
      {
        question: '¿Pegar una cadena Base64 se decodifica automáticamente sin hacer clic en Decodificar imagen?',
        answer:
          'Sí, la decodificación se activa automáticamente tan pronto como el texto entra o cambia dentro del cuadro de entrada, para que las cargas válidas se previsualicen en milisegundos. El botón Decodificar imagen queda listo para cuando quiera volver a ejecutar la validación manualmente.',
      },
      {
        question: '¿Cómo codifico una imagen descargada de nuevo en URL de datos HTML o CSS más tarde?',
        answer:
          'Desplácese a la sección Herramientas relacionadas abajo y abra Imagen a Base64 para cambiar de dirección con limpieza. Convierte cualquier imagen JPG, PNG, WebP, SVG, GIF, BMP o ICO de vuelta a fragmentos de URL de datos, Base64 puro, HTML <img> o CSS url().',
      },
      {
        question: '¿Funciona el decodificador de Base64 a imagen sin conexión o en teléfonos inteligentes?',
        answer:
          'Sí, cada comprobación de cadena, decodificación de bytes y conversión de formato en lienzo se ejecuta dentro de las API integradas del navegador, sin llamadas de red. Funciona con fluidez en Safari de iOS, Chrome de Android, Windows, macOS y Linux una vez cargada la página.',
      },
    ],
    relatedSlugs: ['/image-to-base64', '/image-converter', '/image-dimensions-checker', '/'],
  },

  {
    slug: '/image-color-palette-extractor',
    name: 'Extractor de paleta de colores',
    shortDescription: 'Extraiga los colores dominantes de cualquier foto con códigos HEX, RGB, HSL y exportación.',
    category: 'developer',
    seoTitle: 'Extractor de paleta de colores gratis online',
    seoDescription:
      'Extraiga los colores dominantes de una foto gratis online: de 3 a 12 muestras con códigos HEX, RGB y HSL, variables CSS, JSON y tarjeta PNG en su navegador.',
    h1: 'Extractor de paleta de colores gratis online',
    subtitle:
      'Descubra la combinación de colores principal dentro de cualquier fotografía, ilustración o captura de interfaz con nuestro extractor de paleta de colores en el navegador, impulsado por cuantización Median-Cut. Pensado para diseñadores de interfaz, estrategas de marca y desarrolladores front-end, genera de 3 a 12 muestras equilibradas con porcentajes de presencia, copia de códigos HEX, RGB y HSL con un clic, propiedades personalizadas de CSS, datos JSON y tarjetas PNG de paleta compartibles, todo en local en su dispositivo.',
    howToSteps: [
      {
        title: 'Suba su imagen de origen',
        description:
          'Suelte o seleccione cualquier archivo JPG, PNG, WebP, HEIC, GIF, BMP o SVG de hasta 20 MB en la zona de subida (o péguelo desde el portapapeles).',
      },
      {
        title: 'Defina la cantidad de colores (3–12)',
        description:
          'Arrastre el deslizador de Cantidad de colores entre 3 tonos de acento minimalistas y 12 muestras detalladas para recalcular la paleta de inmediato.',
      },
      {
        title: 'Revise la tira proporcional de colores',
        description:
          'Inspeccione la tira proporcional de colores horizontal sobre las tarjetas de muestras para ver qué tan dominante es cada tono en la imagen.',
      },
      {
        title: 'Copie los códigos HEX, RGB o HSL de las muestras',
        description:
          'Haga clic en cualquier píldora HEX, RGB o HSL dentro de una tarjeta de muestra para copiar ese valor exacto de color directamente al portapapeles.',
      },
      {
        title: 'Exporte variables CSS o JSON',
        description:
          'Use Copiar variables CSS para obtener un bloque :root listo para pegar, o Copiar JSON para tomar los códigos de muestra estructurados, los porcentajes y las dimensiones de origen.',
      },
      {
        title: 'Descargue una tarjeta PNG de la paleta',
        description:
          'Haga clic en Descargar paleta PNG para guardar una tarjeta de presentación blanca y limpia que combina su foto de vista previa con los bloques de color extraídos.',
      },
    ],
    features: [
      { title: 'Cuantización de color Median-Cut', description: 'Agrupa millones de píxeles de imagen en muestras dominantes equilibradas y representativas en milisegundos.' },
      { title: 'HEX, RGB, HSL y % de dominio', description: 'Cada muestra muestra los códigos exactos de color y qué parte de la imagen ocupa.' },
      { title: 'Exportaciones para desarrolladores + tarjeta PNG', description: 'Exporte como propiedades personalizadas de CSS, JSON, fragmento de Tailwind o una tarjeta PNG de paleta compartible.' },
      { title: '100 % nativo del navegador', description: 'Analiza los píxeles en local en HTML5 Canvas sin subir imágenes.' },
    ],
    faqs: [
      {
        question: '¿Cómo construye la cuantización Median-Cut una paleta a partir de mi foto?',
        answer:
          'Median-Cut agrupa los píxeles muestreados en cubos de color RGB tridimensionales y divide repetidamente el canal de color más amplio por su mediana hasta que queda la cantidad de cubos solicitada. Cada cubo se promedia en una muestra representativa ponderada por la cantidad de píxeles que cayeron dentro de él, lo que produce colores dominantes armoniosos en lugar de píxeles atípicos ruidosos.',
      },
      {
        question: '¿Cuántas muestras de color genera el extractor de paleta de colores?',
        answer:
          'Puede extraer entre 3 y 12 colores dominantes con el deslizador de Cantidad de colores. Elegir de 3 a 5 funciona bien para temas de marca minimalistas, mientras que de 8 a 12 revela tonos de sombra sutiles y matices de acento secundarios.',
      },
      {
        question: '¿Qué representa el porcentaje de cada tarjeta de color del extractor de paleta?',
        answer:
          'Cada porcentaje muestra la proporción de píxeles muestreados no transparentes asignados a esa muestra durante la cuantización. La tira proporcional de colores escala directamente cada segmento de color para que coincida con esos porcentajes exactos.',
      },
      {
        question: '¿Puedo copiar todas las muestras extraídas como variables CSS a la vez?',
        answer:
          'Sí. Al hacer clic en Copiar variables CSS se copia un bloque :root completo con --palette-1 hasta --palette-N y cada color hexadecimal listo para su hoja de estilos. Puede cambiar el nombre de las variables después para que coincidan con sus tokens de diseño.',
      },
      {
        question: '¿Qué datos incluye la opción Copiar JSON del extractor de paleta?',
        answer:
          'Copiar JSON escribe una matriz de objetos con el índice de cada muestra, su valor hexadecimal, rgb, hsl y el porcentaje de dominio. Los desarrolladores pueden insertar esta carga directamente en archivos de configuración de temas, documentación de diseño o scripts de estilo automatizados.',
      },
      {
        question: '¿Qué genera la opción Descargar paleta PNG del extractor de colores?',
        answer:
          'Descargar paleta PNG crea una tarjeta de presentación blanca y limpia de 1000 píxeles de ancho que muestra su gráfico de origen centrado en la parte superior, sobre bloques de color redondeados etiquetados con sus códigos hexadecimales y porcentajes de presencia. Se descarga en local como <nombre>_palette.png, sin marca de agua.',
      },
      {
        question: '¿Por qué el extractor de paleta da resultados distintos a los de un cuentagotas?',
        answer:
          'Un cuentagotas toma un solo píxel debajo del cursor, mientras que la extracción de paleta agrupa toda la imagen en familias de colores dominantes generales. Eso lo hace más rápido para construir combinaciones de colores cohesivas que para igualar un punto diminuto.',
      },
      {
        question: '¿Cómo se tratan los fondos transparentes al extraer colores de archivos PNG?',
        answer:
          'Los píxeles con transparencia alfa inferior al 50 % se omiten antes de que se ejecute la cuantización. Esto evita que el espacio vacío de lienzo transparente alrededor de logotipos o recortes de producto distorsione la paleta hacia el blanco o el negro.',
      },
      {
        question: '¿El extractor de paleta inspecciona cada píxel de una foto gigante de 20 MB?',
        answer:
          'Para que la extracción sea rápida dentro de su navegador, la imagen se escala temporalmente en un lienzo fuera de pantalla de hasta 140 píxeles en su lado más largo antes de que se ejecute Median-Cut. Como las proporciones de colores dominantes se mantienen prácticamente idénticas a esa escala, las paletas se calculan casi al instante sin congelar su pestaña.',
      },
      {
        question: '¿Qué formatos de archivo y tamaños acepta el extractor de paleta de colores?',
        answer:
          'Puede subir archivos JPG, PNG, WebP, HEIC/HEIF de iPhone, GIF, BMP y SVG de hasta 20 MB por imagen. Los GIF animados de varios fotogramas extraen los colores de su fotograma inicial sin problemas.',
      },
      {
        question: '¿Por qué aparecieron dos tonos parecidos en mi paleta de 12 colores?',
        answer:
          'Las fotos con degradados grandes, como atardeceres, tonos de piel o fondos de estudio, contienen millones de píxeles agrupados en una región del espacio de color. Con cantidades altas de muestras, como 10 o 12, Median-Cut subdivide naturalmente esa región densa en luces y medios tonos estrechamente relacionados.',
      },
      {
        question: '¿Se envían a algún servidor mis conceptos de marca o capturas de pantalla?',
        answer:
          'No. El muestreo de píxeles, la agrupación de colores, el formato de código y la creación de la tarjeta PNG ocurren exclusivamente dentro de la memoria local de HTML5 Canvas. Sus recursos creativos permanecen estrictamente en su propio dispositivo.',
      },
      {
        question: '¿Puedo cambiar la cantidad de muestras después de copiar el CSS sin volver a subir la imagen?',
        answer:
          'Sí. Al mover el deslizador de Cantidad de colores se reagrupan al instante los datos de imagen almacenados en memoria, así que puede revisar 4, 6 o 10 colores lado a lado antes de exportar.',
      },
      {
        question: '¿Por qué un pequeño acento neón no aparece en una paleta de 4 colores?',
        answer:
          'Como Median-Cut prioriza las regiones de color que contienen las áreas de píxeles más grandes, un pequeño botón de acento del 1 % dentro de una captura enorme y oscura puede fusionarse en un cubo más amplio con pocos colores. Al subir la cantidad de colores hacia 10 o 12, los acentos más pequeños suelen aparecer.',
      },
      {
        question: '¿Las etiquetas de texto de las muestras se leen bien en colores muy oscuros o muy claros?',
        answer:
          'Sí. Tanto en las tarjetas de la página como en la tarjeta PNG de paleta exportada, la tinta blanca u oscura se calcula automáticamente a partir de la luminancia percibida de cada color, así los códigos hexadecimales se mantienen legibles.',
      },
      {
        question: '¿Se puede pegar una captura de pantalla directamente desde el portapapeles en el extractor de paleta?',
        answer:
          'Sí. Pulse Ctrl+V en Windows/Linux o Cmd+V en macOS en cualquier parte de la página para cargar una captura copiada o un mockup de diseño directamente en el analizador de colores.',
      },
      {
        question: '¿Qué tan exactos son los valores HSL y RGB del extractor frente a los estándares de CSS?',
        answer:
          'Cada muestra genera notación estándar válida en CSS rgb(r, g, b) y hsl(h, s%, l%) junto con códigos hexadecimales #RRGGBB de seis dígitos en mayúsculas. Puede pegar cualquier valor copiado directamente en CSS, Figma o las herramientas de desarrollo del navegador.',
      },
      {
        question: '¿Puedo extraer una paleta de un logotipo vectorial SVG?',
        answer:
          'Sí. Cuando suelta un archivo SVG de hasta 20 MB, su navegador lo rasteriza limpiamente en Canvas antes de contar los colores, lo que le da muestras y porcentajes instantáneos a partir del arte vectorial.',
      },
      {
        question: '¿Al subir una imagen nueva se borran automáticamente las muestras anteriores del extractor?',
        answer:
          'Sí, al soltar una imagen de reemplazo o hacer clic en Cambiar se borra limpiamente el estado de la paleta anterior y se ejecuta una cuantización nueva sobre el gráfico nuevo. Nunca necesita actualizar la página entre fotos.',
      },
      {
        question: '¿Puedo usar este extractor de paleta en iOS, Android y navegadores de escritorio?',
        answer:
          'Sí. La cuadrícula responsiva de muestras, el deslizador y los botones de copia funcionan sin problemas en Safari de iOS, Chrome de Android y navegadores modernos de escritorio, sin registros ni instalaciones.',
      },
    ],
    relatedSlugs: ['/image-color-picker', '/favicon-generator', '/add-background-to-image', '/'],
  },

  {
    slug: '/gif-maker',
    name: 'Creador de GIF',
    shortDescription: 'Cree GIF animados a partir de JPG, PNG y WebP con control de duración por fotograma y repeticiones.',
    category: 'create',
    seoTitle: 'Creador de GIF animados gratis online – De fotos a GIF',
    seoDescription:
      'Cree GIF animados gratis online: combine fotogramas JPG, PNG, WebP y HEIC, ajuste la duración por fotograma y elija las repeticiones. Sin marcas de agua.',
    h1: 'Creador de GIF animados gratis',
    subtitle:
      'Convierta fotos, ángulos de producto y fotogramas de recorridos de interfaz en animaciones en bucle con nuestro creador de GIF animados gratis que funciona limpiamente en su navegador. Ideal para creadores sociales, autores de tutoriales y profesionales de marketing: reordene, duplique y temporice fotogramas de forma individual, elija la cantidad de repeticiones, personalice el ajuste y las dimensiones de los fotogramas, y codifique archivos GIF89a sin marca de agua y en privado.',
    howToSteps: [
      {
        title: 'Suba dos o más imágenes de fotogramas',
        description:
          'Suelte archivos JPG, PNG, WebP, HEIC, GIF, BMP o SVG de hasta 20 MB cada uno en la zona de fotogramas (o use Agregar fotogramas después para añadir más).',
      },
      {
        title: 'Reordene, duplique o elimine fotogramas',
        description:
          'Arrastre las tarjetas de fotogramas por sus tiradores o use los botones de flecha para fijar el orden de la secuencia, duplicar fotogramas clave o quitar tomas no deseadas.',
      },
      {
        title: 'Defina la velocidad global y las duraciones por fotograma',
        description:
          'Elija un deslizador de Duración predeterminada de fotograma (50–3000 ms) o una opción rápida de 1–10 FPS, e ingrese duraciones personalizadas en fotogramas individuales si lo necesita.',
      },
      {
        title: 'Configure el comportamiento de repetición y el ajuste de fotogramas',
        description:
          'Seleccione Siempre, Definir repeticiones (2–50 reproducciones) o Reproducir una vez, y luego elija el ajuste Contener o Cubrir junto con un color de fondo mate.',
      },
      {
        title: 'Ajuste las dimensiones de salida y la calidad de la paleta',
        description:
          'Elija una opción rápida de 480 px, 640 px, 800 px u Original (o escriba ancho y alto de 16 a 2000 px) y defina la calidad de la paleta de colores del 10 % al 100 %.',
      },
      {
        title: 'Genere y descargue su GIF animado',
        description:
          'Haga clic en Generar GIF animado para ver la reproducción en vivo con tiempos o codificar en local y guardar animated_compressmypic.gif.',
      },
    ],
    features: [
      {
        title: 'Codificación real de GIF89a en el cliente',
        description:
          'Usa un cuantizador de color rápido en el navegador y un codificador GIF LZW (cargado bajo demanda) — cero llamadas a API externas o subidas al servidor.',
      },
      {
        title: 'Duraciones globales y por fotograma',
        description:
          'Defina una velocidad uniforme de fotogramas en milisegundos o con opciones rápidas de FPS, y opcionalmente anule el tiempo en fotogramas clave individuales.',
      },
      {
        title: 'Controles flexibles de repetición y ajuste',
        description:
          'Elija repetición infinita, reproducir una vez o una cantidad exacta de reproducciones, además del ajuste de fotogramas Contener o Cubrir.',
      },
      {
        title: 'Advertencia de tamaño de archivo grande',
        description:
          'Le avisa automáticamente cuando un GIF codificado se vuelve pesado (más de 5–15 MB) para que pueda optimizar las dimensiones o la calidad para las aplicaciones de chat.',
      },
    ],
    faqs: [
      {
        question: '¿Cómo codifica el navegador mis fotos en un GIF animado sin subirlas?',
        answer:
          'Al hacer clic en Generar GIF animado, la página carga bajo demanda un codificador GIF89a local de JavaScript y un cuantizador de color directamente dentro de la pestaña de su navegador. Cada fotograma se dibuja en un lienzo fuera de pantalla con las dimensiones elegidas y se comprime con LZW en local.',
      },
      {
        question: '¿Cuál es la diferencia entre la vista previa en vivo y el GIF generado?',
        answer:
          'Antes de codificar, el lienzo de vista previa izquierdo reproduce sus imágenes subidas en tiempo real con sus duraciones actuales en milisegundos y ajustes de encuadre, así puede verificar el ritmo de inmediato. Al generar el GIF, esas elecciones se fijan en un archivo .gif real cuantizado de 256 colores.',
      },
      {
        question: '¿Puedo pausar más tiempo en una diapositiva de título o en el fotograma final del GIF?',
        answer:
          'Sí. Mientras la Duración predeterminada de fotograma define la velocidad base (50 ms a 3000 ms) de toda la secuencia, cada tarjeta de fotograma tiene un campo opcional de Duración (ms) que acepta de 20 ms a 10 000 ms para retener diapositivas específicas por más tiempo.',
      },
      {
        question: '¿A qué equivalen las opciones rápidas de 1, 2, 5 y 10 FPS del creador de GIF?',
        answer:
          'Esos botones convierten fotogramas por segundo a intervalos exactos en milisegundos: 1000 ms para 1 FPS, 500 ms para 2 FPS, 200 ms para 5 FPS y 100 ms para 10 FPS. Después puede ajustar el deslizador en incrementos de 25 ms.',
      },
      {
        question: '¿Qué opciones de repetición tiene el GIF terminado?',
        answer:
          'En Comportamiento de repetición puede elegir Siempre para reproducción infinita, Definir repeticiones para especificar una cantidad exacta entre 2 y 50 reproducciones, o Reproducir una vez para que la animación se detenga limpiamente en el fotograma final. Los bytes de extensión Netscape se escriben automáticamente según su elección.',
      },
      {
        question: '¿Cómo elijo entre Contener y Cubrir en el ajuste de fotogramas del GIF?',
        answer:
          'Contener escala cada imagen para que quepa por completo dentro del fotograma del GIF, rellenando las barras sobrantes con su color de fondo mate. Cubrir amplía cada foto ligeramente para llenar todo el lienzo de borde a borde sin barras, recortando los bordes sobrantes.',
      },
      {
        question: '¿Cómo manejo imágenes con distintas proporciones en una misma animación GIF?',
        answer:
          'Elija Contener si nunca quiere recortar logotipos o fotos verticales, e iguale la muestra de fondo mate con su sitio web o fondo de modo oscuro. Elija Cubrir al combinar fotos casuales de formas variadas en una presentación uniforme a sangre.',
      },
      {
        question: '¿Cuáles son las dimensiones mínimas y máximas en píxeles de un GIF generado?',
        answer:
          'El ancho y alto de salida aceptan valores de 16 px a 2000 px, con botones rápidos de 480 px, 640 px, 800 px y Original. Mantenga la proporción bloqueada al escalar una dimensión de forma proporcional.',
      },
      {
        question: '¿Por qué la herramienta muestra una advertencia de GIF grande por encima de 5 MB o 15 MB?',
        answer:
          'Como el GIF guarda fotogramas rasterizados completos con un límite de 256 colores en lugar de la compresión moderna entre fotogramas de video, las animaciones anchas de alta resolución crecen rápido. Cambiar el ancho a 480 px o 640 px, o bajar la calidad de la paleta de colores, reduce mucho el peso del archivo para aplicaciones de chat y correo.',
      },
      {
        question: '¿Qué controla el deslizador de calidad de la paleta de colores del GIF?',
        answer:
          'La calidad de la paleta de colores (del 10 % al 100 %, con 80 % por defecto) ajusta con qué precisión el cuantizador toma muestras de los píxeles de los fotogramas al construir cada paleta de 256 colores. Los valores altos conservan degradados de color más suaves, mientras que los valores bajos aceleran la codificación y suelen reducir el tamaño en bytes.',
      },
      {
        question: '¿Cuántos fotogramas de origen debería combinar en un GIF hecho en el navegador?',
        answer:
          'La cola de fotogramas no tiene un límite fijo de cantidad de archivos, aunque combinar de 2 a 40 fotogramas de 480 px–800 px de ancho suele funcionar sin problemas dentro de la memoria típica de navegadores de escritorio y celular. Se pueden agregar pilas más grandes de imágenes 4K en lotes de hasta 20 MB por archivo de entrada.',
      },
      {
        question: '¿Puedo repetir un fotograma sin subir el mismo archivo dos veces en el creador de GIF?',
        answer:
          'Sí. Haga clic en el ícono de duplicar de cualquier tarjeta de fotograma para clonar esa diapositiva junto con su duración personalizada justo al lado del original, y luego arrástrela o muévala con las flechas a cualquier lugar de la línea de tiempo.',
      },
      {
        question: '¿Debo subir todo de una vez o puedo agregar más fotogramas después en el creador de GIF?',
        answer:
          'Puede agregar más imágenes en cualquier momento con el botón Agregar fotogramas en el encabezado de Fotogramas. Su orden actual de fotogramas, las duraciones personalizadas y las dimensiones de salida se mantienen intactas cuando se añaden fotogramas nuevos.',
      },
      {
        question: '¿Las exportaciones HEIC o ráfagas de Live Photo de iPhone funcionan en este creador de GIF?',
        answer:
          'Sí. Si selecciona varias imágenes .heic o .heif de hasta 20 MB cada una, la página las decodifica en local en su navegador mediante WebAssembly antes de armar su animación.',
      },
      {
        question: '¿Qué pasa si cambio los ajustes después de haber generado un GIF?',
        answer:
          'Haga clic en Volver al editor de fotogramas debajo de la vista previa del GIF terminado para desbloquear su línea de tiempo y sus controles. Ajuste duraciones, repeticiones, dimensiones u orden de fotogramas libremente y genere un archivo nuevo de inmediato.',
      },
      {
        question: '¿El GIF generado conserva limpios los fondos transparentes?',
        answer:
          'Antes de que se ejecute la cuantización LZW, cada fotograma se compone limpiamente sobre su color de fondo mate seleccionado (blanco por defecto). Eso evita bordes dentados negros y ásperos alrededor de bordes suavizados de PNG o SVG.',
      },
      {
        question: '¿Puedo extraer un solo fotograma de un GIF existente si subo un archivo .gif?',
        answer:
          'Cuando suelta una imagen .gif como fotograma de origen, HTML5 Canvas carga su fotograma inicial en la secuencia como cualquier foto fija. Use las herramientas Divisor de imágenes o Compresor de GIF si necesita volver a codificar GIF animados existentes.',
      },
      {
        question: '¿Se agregan marcas de agua o tarjetas finales promocionales a mi GIF descargado?',
        answer:
          'Nunca. Cada GIF animado codificado contiene solo sus fotogramas y ajustes elegidos, sin marcas, marcas de agua ni límites de uso.',
      },
      {
        question: '¿Por qué mi proporción se mantuvo fija al editar el ancho de salida del GIF?',
        answer:
          'La proporción bloqueada está activada por defecto para evitar fotogramas estirados o aplastados según las dimensiones de su primera diapositiva. Haga clic en el interruptor de bloqueo para ingresar un ancho y alto personalizados independientes si lo necesita.',
      },
      {
        question: '¿El archivo animated_compressmypic.gif funcionará en Slack, Discord y sitios web?',
        answer:
          'Sí. El codificador genera archivos binarios estándar GIF89a con extensiones de repetición Netscape, lo que garantiza una amplia compatibilidad de reproducción en navegadores, aplicaciones de chat, blogs y herramientas de presentación.',
      },
    ],
    relatedSlugs: ['/image-collage-maker', '/gif-compressor', '/image-splitter', '/'],
  },

  {
    slug: '/image-collage-maker',
    name: 'Creador de collages de imágenes',
    shortDescription: 'Organice fotos en cuadrículas de 2×2, 3×3 o tiras con intercambio por arrastre y exportación.',
    category: 'create',
    seoTitle: 'Creador de collages de fotos gratis online – Cuadrículas',
    seoDescription:
      'Cree collages gratis online en su navegador: cuadrículas de 2×2 y 3×3 o tiras, arrastre celdas para intercambiarlas y exporte en JPG o PNG hasta 4000 px.',
    h1: 'Creador de collages de imágenes gratis online',
    subtitle:
      'Arme cuadrículas de fotos limpias, tiras de antes y después y diseños de historias sociales con nuestro creador de collages de imágenes gratis directamente en su navegador. Creado para creadores de contenido, vendedores online y familias, admite cuadrículas de 2×2 y 3×3 junto con tiras verticales y horizontales, con intercambio de celdas por arrastre, divisiones ajustables, esquinas redondeadas, espacios personalizados y exportación JPG o PNG sin marca de agua hasta 4000 px.',
    howToSteps: [
      {
        title: 'Suba fotos al estudio de collage',
        description:
          'Suelte imágenes JPG, PNG, WebP, HEIC, GIF, BMP o SVG de hasta 20 MB cada una; al soltar 5 o más se elige automáticamente la cuadrícula de 3×3, mientras que 4 o menos seleccionan la de 2×2.',
      },
      {
        title: 'Elija un diseño de cuadrícula o tira',
        description:
          'Cambie libremente entre cuadrícula de 2×2 (4 celdas), cuadrícula de 3×3 (9 celdas), tira vertical o tira horizontal en el panel de diseño de collage.',
      },
      {
        title: 'Reordene o rellene las ranuras del collage',
        description:
          'Arrastre cualquier celda sobre otra para intercambiar posiciones, toque dos ranuras en secuencia en pantallas táctiles, use las flechas izquierda/derecha o haga clic en Agregar fotos para llenar las ranuras abiertas.',
      },
      {
        title: 'Ajuste las proporciones, los espacios y las esquinas de las celdas',
        description:
          'Ajuste la división de columnas, la división de filas o el énfasis de la celda principal (o haga clic en Celdas iguales), y luego defina el espaciado (0–80 px) y el radio de celda (0–60 px).',
      },
      {
        title: 'Elija el color de fondo, el ajuste de imagen y el tamaño de salida',
        description:
          'Elija el encuadre Cubrir o Contener, seleccione una muestra de color de fondo o un código hexadecimal, e ingrese dimensiones de 200 a 4000 px (o haga clic en las opciones rápidas 1200×1200, 1920×1080 o 1080×1920).',
      },
      {
        title: 'Exporte su collage terminado',
        description:
          'Elija JPG (con deslizador de calidad del 10–100 %) o PNG (sin pérdida) y haga clic en Descargar collage para guardar su diseño a resolución completa en local.',
      },
    ],
    features: [
      {
        title: '4 diseños de collage limpios',
        description:
          'Cree cuadrados equilibrados de 2×2, cuadrículas de fotos de 3×3, historias verticales para celular o tiras horizontales amplias de comparación.',
      },
      {
        title: 'Reordenamiento de celdas por arrastre',
        description:
          'Arrastre cualquier celda de foto sobre otra ranura para intercambiar posiciones de inmediato, o toque dos celdas en el celular.',
      },
      {
        title: 'Proporciones de celda y espacios personalizados',
        description:
          'Ajuste con precisión las divisiones de columnas, las divisiones de filas, el énfasis de la celda principal, el espaciado, la redondez de las esquinas y el color de fondo.',
      },
      {
        title: 'Exportación JPG y PNG de alta resolución',
        description:
          'Renderice collages a resolución completa hasta 4000 px directamente en HTML5 Canvas, sin marcas de agua.',
      },
    ],
    faqs: [
      {
        question: '¿Qué diseños incluye este creador de collages de imágenes?',
        answer:
          'Puede cambiar al instante entre cuadrícula de 2×2 (4 celdas), cuadrícula de 3×3 (9 celdas), tira vertical (columna de arriba a abajo) y tira horizontal (fila lado a lado). Al seleccionar tira vertical u horizontal se fijan automáticamente dimensiones predeterminadas útiles (1080×1920 o 1920×720), que puede ajustar libremente después.',
      },
      {
        question: '¿Cómo funciona el intercambio por toques si hago un collage en el celular o la tableta?',
        answer:
          'En pantallas táctiles donde arrastrar es incómodo, simplemente toque la primera tarjeta de celda en Reordenar celdas para resaltarla y luego toque una segunda ranura para intercambiar sus fotos de inmediato. También hay botones de flecha izquierda y derecha debajo de cada ranura.',
      },
      {
        question: '¿Qué pasa si subo menos fotos que la cantidad de celdas de una cuadrícula de 3×3?',
        answer:
          'Las celdas sin llenar aparecen como marcadores limpios con líneas punteadas «Ranura N» dentro de la vista previa en vivo para que pueda inspeccionar el diseño mientras agrega las imágenes restantes. Puede hacer clic en el botón + justo en una tarjeta vacía o cambiar a un diseño de 2×2 o de tira para que coincida con su cantidad exacta de imágenes.',
      },
      {
        question: '¿Puedo hacer una foto destacada más grande que las demás en una cuadrícula o tira?',
        answer:
          'Sí. En la cuadrícula de 2×2 puede arrastrar la división de columnas y la división de filas del 20 % al 80 %, en la de 3×3 puede cambiar el tamaño de la columna central y la fila central, y en las tiras verticales u horizontales puede aumentar el énfasis de la celda principal hasta +100 %.',
      },
      {
        question: '¿Cómo vuelvo los deslizadores de celdas desiguales a una cuadrícula uniforme?',
        answer:
          'Haga clic en el botón Celdas iguales en la sección Proporciones y espaciado de celdas. Restablece la división de columnas, la división de filas y el énfasis principal a divisiones equilibradas e iguales con un clic.',
      },
      {
        question: '¿Puedo hacer un collage sin bordes, con cero espacio entre las fotos?',
        answer:
          'Sí. Arrastre tanto el espaciado como el radio de celda hasta 0 px para que las fotos adyacentes se encuentren borde con borde limpiamente, sin líneas de junta visibles ni esquinas redondeadas.',
      },
      {
        question: '¿Cuándo debería cambiar el ajuste de imagen de Cubrir a Contener en el collage?',
        answer:
          'Cubrir llena cada celda rectangular de borde a borde recortando bordes sutiles que quedan fuera de la proporción de la celda, ideal para cuadrículas uniformes de estilo de vida. Contener reduce cada imagen hasta que todo el sujeto cabe dentro de su celda sin tocarse, mostrando su color de fondo detrás de cualquier margen abierto.',
      },
      {
        question: '¿Puedo ajustar el espaciado de las celdas y el radio de las esquinas redondeadas por separado?',
        answer:
          'Sí. El espaciado ajusta los márgenes exteriores y los anchos de las juntas de 0 px a 80 px, mientras que el radio de celda redondea suavemente cada esquina de la caja de foto de 0 px a 60 px.',
      },
      {
        question: '¿Qué dimensiones rápidas de lienzo y proporciones predefinidas admite el collage?',
        answer:
          'Puede escribir cualquier tamaño de salida personalizado entre 200 px y 4000 px en cada lado para tarjetas personalizadas de impresión o sociales. También hay botones rápidos integrados para 1200×1200 Cuadrado, 1920×1080 Horizontal y 1080×1920 Historia.',
      },
      {
        question: '¿Qué ajustes predefinidos de color de fondo aparecen por defecto en el collage?',
        answer:
          'Tiene muestras de un clic para blanco puro (#ffffff), pizarra profunda (#0f172a) y gris neutro suave (#f1f5f9). Un selector de color nativo completo está al lado siempre que necesite un valor hexadecimal exacto de marca.',
      },
      {
        question: '¿Funciona subir una mezcla de fotos HEIC de iPhone, PNG y JPG en un mismo collage?',
        answer:
          'Sí. Cada archivo subido, incluidos JPG, PNG, WebP, HEIC/HEIF, GIF, BMP y SVG de hasta 20 MB, se decodifica en privado en su navegador y se dibuja en un único HTML5 Canvas unificado.',
      },
      {
        question: 'Si coloco adhesivos PNG transparentes dentro de las celdas, ¿qué se ve detrás de ellos?',
        answer:
          'Cada celda se renderiza sobre su color de fondo seleccionado antes de componer la imagen de primer plano. Eso mantiene limpios los logotipos PNG transparentes y los recortes contra blanco, pizarra oscura o tonos personalizados.',
      },
      {
        question: '¿Debería guardar mi collage terminado como JPG o PNG (sin pérdida)?',
        answer:
          'Elija JPG con calidad del 85 %–95 % para cuadrículas de fotografía ligeras destinadas a Instagram, WhatsApp o correo. Elija PNG (sin pérdida) al combinar capturas de interfaz nítidas, diagramas o gráficos de texto donde los halos de compresión JPEG serían molestos.',
      },
      {
        question: '¿Cómo indica el nombre del archivo exportado qué ajustes de collage usé?',
        answer:
          'Cada exportación descargada incorpora automáticamente el diseño y las dimensiones en píxeles, produciendo nombres como collage_2x2_1200x1200.jpg. Ese patrón de nombres le ayuda a ordenar varias variaciones de proporción sin cambiar nombres manualmente.',
      },
      {
        question: '¿Se suben a algún lugar mis fotos familiares privadas o fotos de antes y después?',
        answer:
          'No. La decodificación de imágenes, la composición del diseño de cuadrícula y la exportación de Canvas en alta resolución ocurren estrictamente dentro de la pestaña de su navegador, así que ninguna foto sale de su celular o computadora.',
      },
      {
        question: '¿La vista previa del collage coincide con la exportación exacta en píxeles a 4000 px?',
        answer:
          'Sí. Tanto el escenario en vivo como la exportación final comparten exactamente las mismas matemáticas de proporción y esquinas, escalando el espaciado y el radio de celda suavemente en relación con el tamaño de salida elegido, así las juntas exportadas coinciden con lo que ve.',
      },
      {
        question: '¿Cuántas fotos puede contener una tira vertical u horizontal a la vez?',
        answer:
          'Las tiras verticales y horizontales admiten entre 2 y 6 ranuras dinámicas según cuántas imágenes cargue. Eso hace sencillo crear comparaciones de dos paneles o tiras de historia de varios fotogramas limpiamente.',
      },
      {
        question: '¿Puedo quitar una sola foto de un collage sin empezar de nuevo?',
        answer:
          'Sí. Haga clic en el botón de papelera de cualquier tarjeta de ranura en Reordenar celdas para quitar esa foto mientras mantiene intactas todas sus demás imágenes subidas, ajustes de diseño y divisiones personalizadas.',
      },
      {
        question: '¿Cuál es la resolución máxima a la que puedo exportar para imprimir un collage de fotos?',
        answer:
          'Tanto el ancho como el alto de salida escalan hasta 4000×4000 píxeles, entregando 16 megapíxeles de detalle nítido. Esa resolución maneja limpiamente impresiones de fotos de mesa, catálogos y diapositivas de alta densidad de píxeles.',
      },
      {
        question: '¿Hay algún límite en la cantidad de collages que puedo crear o exportar?',
        answer:
          'No. Puede cambiar diseños, ajustar colores y exportar collages ilimitados gratis, sin cuentas, marcas de agua ni límites diarios de exportación.',
      },
    ],
    relatedSlugs: ['/gif-maker', '/image-splitter', '/image-border-generator', '/'],
  },

  {
    slug: '/compress-image-to-50kb',
    name: 'Comprimir imagen a 50 KB',
    shortDescription: 'Reduzca fotos JPG, PNG y WebP a menos de 50 KB estrictos para formularios.',
    category: 'compress',
    seoTitle: 'Comprimir imagen a 50 KB gratis online – Pasaporte',
    seoDescription:
      'Comprima imágenes a 50 KB gratis online para portales de pasaporte, formularios de visa y avatares. Búsqueda binaria de calidad y escalado inteligente.',
    h1: 'Comprimir imagen a 50 KB online',
    subtitle:
      'Prepare fotos de pasaporte, escaneos de visa, firmas manuscritas y avatares compactos de perfil para límites estrictos de portales cuando necesite comprimir una imagen a 50 KB de forma confiable. Funciona 100 % en local en su navegador con archivos de hasta 25 MB, combinando búsqueda binaria de calidad con escalado opcional de píxeles para que los documentos sensibles nunca toquen servidores externos.',
    howToSteps: [
      {
        title: 'Suelte su imagen o escaneo de documento',
        description:
          'Suba uno o varios archivos JPG, PNG, WebP o HEIC de hasta 25 MB (o pegue fotos copiadas con Ctrl+V).',
      },
      {
        title: 'Seleccione el formato de salida (Original, JPG, WebP o PNG)',
        description:
          'Elija JPG o WebP para límites estrictos de fotos de 50 KB, o mantenga Original con la conversión automática de PNG activada para capturas pesadas.',
      },
      {
        title: 'Revise los interruptores de escalado y conversión automática',
        description:
          'Mantenga activado el escalado inteligente de dimensiones para fotos de muchos megapíxeles, o desactívelo para conservar las dimensiones exactas en píxeles cuando lo exija un portal.',
      },
      {
        title: 'Inspeccione las insignias de bytes verificados y la vista de comparación',
        description:
          'Revise cada tarjeta para ver la insignia verde «Menos de 50 KB» y abra la vista Comparar para verificar que los rasgos faciales o las líneas de firma sigan legibles.',
      },
      {
        title: 'Descargue archivos individuales o Descargar todo (ZIP)',
        description:
          'Guarde cada archivo <nombre>_50kb de forma individual, use Conservar original si el archivo ya era más pequeño, o empaquete lotes en compressmypic_50kb.zip.',
      },
    ],
    features: [
      {
        title: 'Búsqueda binaria de calidad + escalado de dimensiones',
        description:
          'Encuentra primero la mayor calidad visual por debajo de 50 KB con los píxeles originales, y luego escala la resolución suavemente si hace falta.',
      },
      {
        title: 'Informe honesto de resultados',
        description:
          'Nunca finge el tamaño de salida: si un PNG sin pérdida o una resolución bloqueada no puede caber en 50 KB, lo explica claramente.',
      },
      {
        title: 'Respaldo inteligente de PNG a WebP/JPG',
        description:
          'Convierte opcionalmente PNG pesados sin pérdida a WebP o JPG para que las fotos se mantengan nítidas al llegar a 50 KB.',
      },
      {
        title: 'Procesamiento privado en el navegador',
        description: 'Pasaportes, fotos de identidad y formularios personales nunca salen de su dispositivo.',
      },
    ],
    faqs: [
      {
        question: '¿Qué portales comunes exigen subir una imagen de menos de 50 KB?',
        answer:
          'Las solicitudes de visa del gobierno, las renovaciones de pasaporte, los registros de exámenes de servicio civil, los formularios de admisión universitaria y los campos de escaneo de firma frecuentemente imponen límites estrictos de subida de 20 KB–50 KB. Mantener su archivo cómodamente por debajo de 50 KB evita tiempos de espera en el envío de formularios y errores de rechazo de subida.',
      },
      {
        question: '¿Por qué las fotos de pasaporte y los escaneos de identidad son seguros de reducir a 50 KB aquí?',
        answer:
          'Cada operación de píxeles, desde la decodificación HEIC hasta la búsqueda binaria de compresión y el empaquetado ZIP, se ejecuta en local dentro de su propia pestaña del navegador. Las fotos de identidad sensibles, las firmas y los registros personales nunca se suben por internet.',
      },
      {
        question: '¿Por qué reducir a 50 KB una foto de 12 megapíxeles suele requerir escalado de dimensiones?',
        answer:
          'Una foto completa de 4000×3000 píxeles contiene 12 millones de píxeles cuyos datos Huffman JPEG de base suelen superar los 200 KB incluso con compresión fuerte. Con el escalado inteligente de dimensiones activado, el optimizador reduce las dimensiones suavemente hasta que el detalle facial nítido cabe limpiamente por debajo de 50 KB.',
      },
      {
        question: '¿Debería elegir JPG o WebP al enviar una imagen de menos de 50 KB a un portal de exámenes o del gobierno?',
        answer:
          'Elija siempre JPG para formularios antiguos de gobierno, pasaporte, becas o bancos, porque muchos scripts de validación rechazan subidas .webp aunque sean más pequeñas. Elija WebP para avatares web modernos o sitios personales donde la máxima nitidez a 50 KB importa.',
      },
      {
        question: '¿Cómo optimiza la herramienta firmas manuscritas o documentos escaneados por debajo de 50 KB?',
        answer:
          'Los escaneos de tinta negra sobre papel blanco brillante se comprimen agresivamente en JPG o WebP una vez recortada limpiamente la resolución sobrante. Revisar el modal Comparar garantiza que los trazos de tinta se mantengan limpios sin bloques de compresión borrosos alrededor de los bordes del texto.',
      },
      {
        question: '¿Por qué apareció un aviso rojo de «Creció» cuando mi archivo ya pesaba 32 KB?',
        answer:
          'Si un JPG o PNG ya liviano se vuelve a codificar con alta calidad en Canvas, el nuevo flujo de bytes a veces puede quedar en 40 KB en lugar de reducirse más. Simplemente haga clic en Conservar original en esa tarjeta para mantener su archivo original exacto de 32 KB.',
      },
      {
        question: '¿Puedo mantener las dimensiones exactas de 600×600 px si mi portal de visa exige píxeles fijos y un máximo de 50 KB?',
        answer:
          'Sí. Desactive «Permitir escalado inteligente de dimensiones» para que las dimensiones en píxeles se mantengan bloqueadas al 100 %, dejando que la búsqueda binaria pruebe la calidad JPEG o WebP hasta el 5 % con sus dimensiones exactas. Si un retrato de 600×600 es razonablemente limpio, cabe fácilmente por debajo de 50 KB sin cambiar el tamaño.',
      },
      {
        question: '¿Por qué fijar el formato de salida en PNG suele activar una advertencia de objetivo no alcanzado a 50 KB?',
        answer:
          'Como el PNG usa compresión DEFLATE sin pérdida que ignora los deslizadores de calidad, solo los íconos planos o las miniaturas diminutas se comprimen a menos de 50 KB como PNG. Deje el formato en Original con la conversión automática activada, o cambie directamente a JPG, para que las imágenes fotográficas lleguen a 50 KB limpiamente.',
      },
      {
        question: '¿Qué pasa si subo un PNG de firma transparente y lo convierto a JPG para llegar a 50 KB?',
        answer:
          'Al seleccionar JPG aparece la muestra de color mate para PNG transparente (blanco puro #ffffff por defecto). Todas las regiones de fondo transparentes se rellenan limpiamente sobre blanco sólido antes de la codificación JPEG, así la tinta negra se mantiene nítida en lugar de volverse negra sólida.',
      },
      {
        question: '¿Puedo soltar directamente una selfie HEIC de 15 MB de iPhone para reducirla a menos de 50 KB?',
        answer:
          'Sí. Se admiten archivos de hasta 25 MB, incluidas fotos HEIC/HEIF de Apple, que se decodifican automáticamente en el navegador mediante WebAssembly y se comprimen hacia 50 KB en una sola pasada fluida.',
      },
      {
        question: '¿Qué pasos de escala prueba el optimizador cuando las dimensiones al 100 % superan los 50 KB?',
        answer:
          'Cuando las dimensiones completas no pueden pasar los 50 KB con calidad aceptable, el motor prueba factores de reducción progresivos que comienzan en 82 % y bajan hacia 10 % (con un mínimo de 16 px). En cada paso ejecuta una búsqueda binaria de calidad nueva y se detiene en las dimensiones legibles más grandes por debajo de 50 KB.',
      },
      {
        question: '¿Comprimir un retrato de fondo oscuro a menos de 50 KB causará bandas de color visibles?',
        answer:
          'Las sombras oscuras suaves con objetivos agresivos de 50 KB pueden mostrar un ligero bloqueo si las dimensiones se mantienen enormes. Al permitir el escalado de dimensiones, la herramienta codifica dimensiones algo menores con un factor de calidad más alto del 70 %–85 %, produciendo degradados más suaves que dimensiones enormes con calidad del 10 %.',
      },
      {
        question: '¿El compresor a 50 KB elimina las etiquetas ocultas de ubicación GPS de mi foto de identidad?',
        answer:
          'Sí. Al dibujar su imagen en HTML5 Canvas se eliminan los metadatos EXIF como números de serie de cámara, miniaturas y coordenadas GPS, protegiendo su privacidad y liberando kilobytes extra para el detalle visible de la imagen.',
      },
      {
        question: '¿Cómo determina la herramienta si muestra la insignia «Menos de 50 KB»?',
        answer:
          'Después de codificar el Blob final, verifica el tamaño exacto en bytes contra 51 200 bytes (50 × 1024). Solo los archivos estrictamente iguales o por debajo de ese límite exacto en bytes reciben la insignia verde de confirmación «Menos de 50 KB».',
      },
      {
        question: '¿Puedo procesar juntos un retrato y un escaneo de firma a menos de 50 KB?',
        answer:
          'Sí. Suelte varias imágenes de hasta 25 MB cada una en la cola, ajuste su preferencia de formato y descargue cada archivo de forma individual o empaquételos en compressmypic_50kb.zip.',
      },
      {
        question: '¿Qué pasa si un portal exige en realidad 20 KB o 30 KB en lugar de 50 KB?',
        answer:
          'Haga clic en el enlace «¿Necesita un objetivo diferente en KB?» justo dentro del encabezado del objetivo para saltar directamente al compresor de tamaño de archivo objetivo personalizado, donde puede escribir cualquier límite personalizado como 20 KB o 30 KB.',
      },
      {
        question: '¿Hasta qué tamaño de archivo acepta el compresor a 50 KB?',
        answer:
          'Se admiten archivos de entrada individuales de hasta 25 MB en formatos JPG, PNG, WebP, HEIC/HEIF, GIF, BMP y SVG. Las entradas de GIF animado exportan un fotograma estático optimizado por debajo de 50 KB.',
      },
      {
        question: '¿Por qué la herramienta apunta justo por debajo de 50 KB (alrededor de 48–49,9 KB) en lugar de detenerse en 25 KB?',
        answer:
          'Su búsqueda binaria optimiza hasta 7 iteraciones para quedar dentro del 96 %–100 % del límite de 50 KB siempre que sea posible. Eso maximiza la nitidez visual usando casi cada kilobyte disponible bajo el límite.',
      },
      {
        question: '¿Los nombres de archivo descargados están claramente marcados para no confundirlos con mis archivos originales de alta resolución?',
        answer:
          'Sí. Cada archivo de salida agrega automáticamente _50kb antes de la extensión, como portrait_50kb.jpg, dejando su archivo original a salvo sin tocarse en su dispositivo.',
      },
      {
        question: '¿Puedo revisar la nitidez en el celular antes de subirla a un portal de formularios?',
        answer:
          'Sí. La interfaz completa, incluido el visor interactivo Comparar, funciona sin problemas en Safari de iOS y Chrome de Android, haciendo rápidas y confiables las presentaciones de formularios en movimiento.',
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
    name: 'Comprimir imagen a 100 KB',
    shortDescription: 'Reduzca el tamaño de imagen a menos de 100 KB limpiamente sin desenfoque visible.',
    category: 'compress',
    seoTitle: 'Comprimir imagen a 100 KB gratis online – CV y web',
    seoDescription:
      'Comprima imágenes a 100 KB gratis online para portales de empleo, currículos y páginas web. Mantenga detalles nítidos con búsqueda inteligente de calidad y ZIP.',
    h1: 'Comprimir imagen a 100 KB online',
    subtitle:
      'Alcance el punto ideal probado para web y portales cuando comprime una imagen a 100 KB sin sacrificar nitidez. Creado para solicitantes de empleo que adjuntan fotos de portafolio, blogueros que preparan miniaturas rápidas de artículos y portales de recursos humanos con límites de adjuntos ajustados, esta herramienta local prueba ajustes de calidad y escalado opcional dentro de su navegador con entradas de hasta 25 MB.',
    howToSteps: [
      {
        title: 'Agregue su foto o gráfico de artículo',
        description:
          'Arrastre y suelte una o varias imágenes JPG, PNG, WebP o HEIC de hasta 25 MB cada una en el espacio de trabajo.',
      },
      {
        title: 'Confirme el formato de salida y el comportamiento de respaldo',
        description:
          'Mantenga Original (con respaldo automático a WebP/JPG para PNG demasiado grandes) o apunte explícitamente a JPG o WebP para una salida consistente.',
      },
      {
        title: 'Elija si se permite la reducción de píxeles',
        description:
          'Deje activado el escalado inteligente de dimensiones para resultados nítidos de 800 px–1400 px, o desactívelo para conservar el 100 % del ancho y alto originales en píxeles.',
      },
      {
        title: 'Compare la nitidez visual con el original',
        description:
          'Revise el porcentaje ahorrado y la insignia exacta de KB de salida, y luego abra Comparar en cualquier tarjeta para revisar la nitidez de los bordes lado a lado.',
      },
      {
        title: 'Descargue archivos individuales o un ZIP por lotes',
        description:
          'Guarde archivos individuales <nombre>_100kb de inmediato o haga clic en Descargar todo (ZIP) para descargar compressmypic_100kb.zip con un clic.',
      },
    ],
    features: [
      {
        title: 'Máxima calidad por debajo de 100 KB',
        description:
          'En lugar de usar un deslizador de calidad bajo arbitrario, la búsqueda binaria fija la calidad más alta por debajo de 100 KB.',
      },
      {
        title: 'Conserva la resolución cuando es posible',
        description:
          'Mantiene el 100 % del ancho y alto originales en píxeles siempre que el ajuste de calidad por sí solo cumpla el límite de 100 KB.',
      },
      {
        title: 'Alertas transparentes de limitación',
        description:
          'Le notifica claramente si un PNG bloqueado o ajustes 4K sin escalar impiden llegar a 100 KB.',
      },
      {
        title: 'Privacidad 100 % local',
        description: 'Sin subidas, sin marcas de agua y sin registro obligatorio.',
      },
    ],
    faqs: [
      {
        question: '¿Por qué 100 KB se considera el punto ideal para currículos, portales de empleo y sitios web?',
        answer:
          'Con aproximadamente 100 KB, una foto típica de 1000 px a 1400 px carga rápido incluso con redes 3G de celular, manteniendo intactos los detalles faciales finos, la tipografía nítida y la profundidad natural de color. La mayoría de los sistemas de reclutamiento y creadores de currículos en PDF aceptan cómodamente recursos de menos de 100 KB sin recortar ni bloquear.',
      },
      {
        question: '¿Puede un banner web Full HD de 1920×1080 mantener sus dimensiones completas al reducirse a 100 KB?',
        answer:
          'Sí, en muchos casos, especialmente tomas de producto limpias, ilustraciones de interfaz o fondos con desenfoque suave comprimidos en WebP o JPG. Si una escena de paisaje concurrida aún supera los 100 KB con calidad del 35 %, el escalado opcional reduce el ancho suavemente (como 82 % o 68 %) para proteger la nitidez.',
      },
      {
        question: '¿Cómo mantiene la búsqueda binaria de calidad mi archivo de 100 KB lo más nítido posible?',
        answer:
          'En lugar de adivinar un nivel bajo de compresión estático como 40 %, el motor prueba límites de calidad superior e inferior en hasta 7 pasos binarios. Se detiene justo dentro del rango del 96 %–100 % por debajo de 102 400 bytes, maximizando la fidelidad de píxeles para el presupuesto exacto de tamaño de archivo.',
      },
      {
        question: '¿Cuándo debería desactivar la conversión automática de PNG grandes al apuntar a 100 KB?',
        answer:
          'Si una infografía plana, un ícono de interfaz o un diagrama de dos colores debe mantenerse estrictamente como PNG sin pérdida y ya cabe limpiamente por debajo de 100 KB, dejar Original o elegir PNG funciona muy bien. Sin embargo, para PNG fotográficos, mantener la conversión automática activada cambia las tomas opacas a JPG o las transparentes a WebP para que conserve píxeles nítidos por debajo de 100 KB.',
      },
      {
        question: '¿Los logotipos PNG transparentes pierden la transparencia si se convierten automáticamente a menos de 100 KB?',
        answer:
          'No. Antes de cambiar desde un PNG demasiado grande en modo Original, el compresor detecta la transparencia alfa de su archivo y elige automáticamente WebP (conservando la transparencia completa) en lugar de JPG siempre que existan píxeles alfa.',
      },
      {
        question: '¿Cómo afecta comprimir a 100 KB las métricas Core Web Vitals y el peso de la página?',
        answer:
          'Recortar miniaturas de héroe de 2 MB o encabezados de artículo de 800 KB a 95 KB reduce drásticamente la carga de la página sin degradar visualmente las tarjetas de diseño. Las imágenes más ligeras mejoran directamente el Largest Contentful Paint (LCP) tanto en visitantes de celular como de escritorio.',
      },
      {
        question: '¿Puedo reducir gráficos de boletines por correo a menos de 100 KB para que se carguen más rápido en la bandeja de entrada?',
        answer:
          'Sí. Elegir la salida JPG mantiene un amplio soporte de clientes de correo en Outlook, Apple Mail y Gmail, garantizando que los boletines de varias imágenes se mantengan rápidos y ligeros por debajo de los umbrales de peso de los filtros de spam.',
      },
      {
        question: '¿Qué pasa cuando un archivo que subo al compresor a 100 KB ya pesa 65 KB?',
        answer:
          'El compresor nota que su archivo ya está por debajo de 100 KB y produce una exportación limpia a resolución completa. Si la recodificación en HTML5 Canvas crea un archivo ligeramente más grande que 65 KB, un aviso rojo le permite hacer clic en Conservar original al instante.',
      },
      {
        question: '¿Por qué ayuda el modal Comparar al ajustar imágenes a 100 KB?',
        answer:
          'Ver una cortina dividida de antes y después le permite verificar si el cabello fino, el tejido textil o el texto diminuto de capturas se mantuvo limpio después de la compresión. Si aparecen artefactos con la resolución bloqueada, cambiar de JPG a WebP suele resolverlos dentro del mismo presupuesto de 100 KB.',
      },
      {
        question: '¿Este reductor a 100 KB elimina automáticamente las etiquetas EXIF de la cámara?',
        answer:
          'Sí. Dibujar en HTML5 Canvas elimina las miniaturas de cámara incrustadas, los bloques XMP de Lightroom y las coordenadas GPS, lo que a menudo ahorra 20 KB–60 KB por sí solo antes de que comience la compresión visual.',
      },
      {
        question: '¿Puedo arrastrar una carpeta entera de miniaturas de blog para comprimirlas todas a 100 KB?',
        answer:
          'Sí. Suba varios archivos de hasta 25 MB cada uno en una cola, espere unos segundos mientras cada imagen se procesa secuencialmente en su navegador y guarde todo dentro de compressmypic_100kb.zip.',
      },
      {
        question: '¿Qué pasa si un portal de currículos acepta JPG de hasta 100 KB pero rechaza archivos WebP?',
        answer:
          'Seleccione JPG en Formato de salida en lugar de dejarlo en Original antes o después de subir. El compresor volverá a procesar cada imagen estrictamente como .jpg estándar por debajo de 100 KB y aplicará su color mate seleccionado a cualquier área transparente.',
      },
      {
        question: '¿Por qué mi captura PNG de 3000×2000 se redujo limpiamente al escalarla al 68 % a 100 KB?',
        answer:
          'El tamaño de archivo PNG sin pérdida se correlaciona estrechamente con la cantidad total de píxeles y la entropía. Escalar una captura enorme modestamente y combinarla con WebP o JPG reduce el peso en bytes de varios megabytes a menos de 100 KB mientras el texto se mantiene cómodamente legible.',
      },
      {
        question: '¿Se suben a algún lugar los CV confidenciales, las vistas previas de arquitectura o los mockups bajo NDA?',
        answer:
          'Nunca. Todos los pasos de compresión, las iteraciones binarias y la generación de archivos ZIP se ejecutan estrictamente en JavaScript y Canvas locales dentro de la pestaña de su navegador.',
      },
      {
        question: '¿Qué tipos de archivo puedo cargar en el compresor a 100 KB?',
        answer:
          'Puede soltar archivos JPG, PNG, WebP, HEIC/HEIF de iPhone, GIF, BMP y SVG de hasta 25 MB por archivo. Tenga en cuenta que las entradas de GIF animado comprimen su fotograma inicial como salida estática.',
      },
      {
        question: '¿Puedo elegir un objetivo personalizado como 80 KB o 120 KB desde esta página?',
        answer:
          'Sí, toque el enlace «¿Necesita un objetivo diferente en KB?» en el panel de tamaño objetivo para saltar directamente a nuestro compresor flexible de tamaño de archivo objetivo con cualquier entrada personalizada en KB o MB.',
      },
      {
        question: '¿Por qué un objetivo PNG bloqueado puede fallar a 100 KB incluso al reducir la escala?',
        answer:
          'Cuando el PNG se fuerza explícitamente y el escalado está desactivado, una fotografía ruidosa conserva millones de colores únicos que no pueden empaquetarse en 100 KB sin pérdida. Volver a activar el escalado de dimensiones o cambiar a WebP resuelve esto de inmediato.',
      },
      {
        question: '¿Cambiar los ajustes después de terminar mi lote vuelve a comprimir mis archivos a 100 KB automáticamente?',
        answer:
          'Sí. Al cambiar el formato de salida, el escalado de dimensiones, la conversión automática de PNG o el color mate de JPG se vuelven a procesar automáticamente sus elementos en cola hacia 100 KB para que pueda comparar los resultados sin esfuerzo.',
      },
      {
        question: '¿Windows, macOS e iOS abren de forma nativa los archivos _100kb.jpg y _100kb.webp descargados?',
        answer:
          'Sí. El JPEG estándar se abre universalmente en todas partes, y el WebP moderno se abre de forma nativa en todos los navegadores de escritorio actuales, Vista Previa de macOS, Fotos de Windows, Android e iOS.',
      },
      {
        question: '¿Hay alguna cuota diaria o restricción de cantidad de archivos en la herramienta a 100 KB?',
        answer:
          'No. Comprima tantas imágenes a menos de 100 KB como maneje la memoria de su navegador, sin marcas de agua, avisos de cuenta ni muros de pago.',
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
    name: 'Comprimir imagen a 200 KB',
    shortDescription: 'Optimice fotos a menos de 200 KB para blogs, subidas a CMS y portales.',
    category: 'compress',
    seoTitle: 'Comprimir imagen a 200 KB gratis online – WordPress',
    seoDescription:
      'Comprima imágenes a 200 KB gratis online para WordPress, Shopify y banners de blog. Conserve detalles nítidos en local con búsqueda binaria de calidad y ZIP.',
    h1: 'Comprimir imagen a 200 KB online',
    subtitle:
      'Prepare fotografía nítida de productos de tienda, encabezados destacados de blog y fichas de negocios cuando comprime una imagen a 200 KB sin sobrecarga. Diseñado para editores de WordPress, comerciantes de Shopify y profesionales de marketing digital, prioriza el 100 % de las dimensiones originales primero y funciona completamente en local con archivos de hasta 25 MB, sin transferencias al servidor.',
    howToSteps: [
      {
        title: 'Suba imágenes de tienda o blog',
        description:
          'Suelte archivos individuales o lotes enteros de imágenes JPG, PNG, WebP o HEIC de hasta 25 MB cada uno en el espacio de trabajo.',
      },
      {
        title: 'Elija salida WebP, JPG, Original o PNG',
        description:
          'Elija WebP para velocidad moderna de CMS, JPG para compatibilidad universal de marketplace, u Original para convertir solo los PNG pesados automáticamente.',
      },
      {
        title: 'Active el escalado de dimensiones completas o de respaldo',
        description:
          'Mantenga activado el escalado inteligente para fotos de cámara de 24 MP, o desactívelo cuando las plantillas de producto exijan estrictamente las dimensiones originales en píxeles.',
      },
      {
        title: 'Revise el ahorro y el detalle lado a lado',
        description:
          'Verifique el indicador verde «Menos de 200 KB» y arrastre el deslizador Comparar sobre etiquetas, grano de tela o bordes finos de interfaz.',
      },
      {
        title: 'Guarde recursos individuales o Descargar todo (ZIP)',
        description:
          'Descargue imágenes individuales <nombre>_200kb directamente o empaquete su catálogo de tienda en compressmypic_200kb.zip.',
      },
    ],
    features: [
      {
        title: 'Listo para CMS y marketplaces',
        description: 'Ideal para subidas a Shopify, WooCommerce, WordPress y Perfil de Empresa de Google.',
      },
      {
        title: 'Escalado de respaldo inteligente',
        description:
          'Si una foto de cámara de 24 MP no puede caber en 200 KB a tamaño completo, el escalado de dimensiones entra limpiamente.',
      },
      {
        title: 'Verificación exacta de KB',
        description: 'Muestra los bytes de salida verificados junto con los bytes originales y el % de reducción.',
      },
      {
        title: 'Cero subidas al servidor',
        description: 'Procesamiento rápido en HTML5 Canvas directamente en su computadora o celular.',
      },
    ],
    faqs: [
      {
        question: '¿Por qué las agencias de WordPress y las tiendas de Shopify estandarizan las fotos de producto en torno a 200 KB?',
        answer:
          'Un límite de 200 KB deja suficiente tasa de bits para costuras nítidas, brillo metálico y etiquetas de producto legibles, manteniendo rápidas las cuadrículas de colección en compradores de celular. Mantenerse por debajo de 200 KB también satisface límites estrictos de CMS y directorios como el Perfil de Empresa de Google o las reglas de medios de WooCommerce.',
      },
      {
        question: '¿Puede una foto de cámara de 12 o 24 megapíxeles llegar a 200 KB limpiamente?',
        answer:
          'Sí. Si las dimensiones completas de 4000×3000 px superan los 200 KB incluso con calidad del 35 %, el escalado inteligente de dimensiones baja proporcionalmente, a menudo quedando alrededor de 2200 px o 1800 px de ancho con calidad nítida del 75 %–85 %.',
      },
      {
        question: '¿Cuándo debería bloquear las dimensiones desactivando el escalado inteligente de dimensiones a 200 KB?',
        answer:
          'Desactive el escalado siempre que un marketplace o portal de impresión exija anchos exactos en píxeles (como ranuras cuadradas de producto de 1600×1600 px). El optimizador bajará la calidad con pérdida hasta el 5 % con las dimensiones completas e informará honestamente si 200 KB es inalcanzable sin cambiar el tamaño.',
      },
      {
        question: '¿Cómo se compara WebP con JPG con un objetivo de 200 KB para fotos de comercio electrónico?',
        answer:
          'Dentro del mismo presupuesto de 200 KB, WebP generalmente entrega sombras de estudio notablemente más limpias y texto pequeño de empaque más nítido que JPG, típicamente equivalente a un factor de calidad 10 %–15 % mayor. Elija JPG solo si un backend de marketplace antiguo aún rechaza subidas .webp.',
      },
      {
        question: '¿Qué pasa si subo un recorte de producto PNG de estudio con fondo transparente?',
        answer:
          'Con el formato en Original y la conversión automática activada, cualquier PNG transparente demasiado grande cambia limpiamente a WebP transparente cuando el PNG por sí solo no puede llegar a 200 KB con orden. Si elige JPG explícitamente, las regiones transparentes se fusionan con su color mate de PNG transparente elegido.',
      },
      {
        question: '¿Por qué el optimizador prefiere mantener la resolución al 100 % antes de reducir las dimensiones en píxeles?',
        answer:
          'Reducir las dimensiones descarta permanentemente el detalle de la cuadrícula de píxeles, mientras que el ajuste moderado de calidad con pérdida conserva bordes nítidos a ancho completo. Probar primero calidad del 35 %–94 % con dimensiones completas garantiza que los gráficos de héroe de escritorio se mantengan a tamaño completo siempre que sea posible.',
      },
      {
        question: '¿Puedo optimizar por lotes todo un catálogo de temporada a menos de 200 KB de una vez?',
        answer:
          'Sí. Suelte decenas de fotos de producto de hasta 25 MB cada una en la cola, deje que la herramienta inspeccione cada imagen en local y tome cada recurso optimizado en compressmypic_200kb.zip.',
      },
      {
        question: '¿Convertir fondos transparentes a JPG con fondo blanco mate ayuda a cumplir 200 KB en Amazon o Etsy?',
        answer:
          'Sí. Los fondos blancos puros (#ffffff) se comprimen extremadamente bien en JPEG mientras cumplen las pautas de fondo blanco de los marketplaces, liberando bytes extra dentro de 200 KB para el producto real en el centro.',
      },
      {
        question: '¿Por qué mi subida WebP de 140 KB mostró una alerta de «Creció» después de volver a procesarla?',
        answer:
          'Si un archivo ya bien optimizado por debajo de 200 KB se vuelve a codificar con la alta calidad predeterminada de Canvas, puede quedar cerca de 165 KB en lugar de reducirse. Al hacer clic en Conservar original se restaura el archivo original intacto de 140 KB de inmediato.',
      },
      {
        question: '¿Se guardan en servidores externos los prototipos de producto sin lanzar o los banners de campaña de clientes?',
        answer:
          'No. Cada decodificación de píxeles, pasada de escalado y creación de ZIP ocurre en privado dentro de su sesión local del navegador, haciéndolo seguro para lanzamientos embargados y trabajo de clientes bajo NDA.',
      },
      {
        question: '¿El compresor a 200 KB admite fotos HEIC/HEIF de Apple tomadas con iPhones nuevos?',
        answer:
          'Sí. WebAssembly del lado del cliente decodifica archivos HEIC de iPhone directamente en la pestaña de su navegador, así no necesita convertirlos antes.',
      },
      {
        question: '¿Por qué 200 KB suele ser mejor que 50 KB para infografías detalladas o tableros de menú?',
        answer:
          'La tipografía pequeña dentro de menús de restaurantes, planos de bienes raíces o capturas de interfaz de software se desenfoca rápidamente si se comprime a menos de 50 KB. Un objetivo de 200 KB le da a WebP y JPG cuatro veces más margen en bytes para que las etiquetas finas se mantengan nítidas.',
      },
      {
        question: '¿Qué tan cerca de 200 KB llega normalmente la búsqueda binaria de calidad?',
        answer:
          'Una vez que se encuentra un rango de calidad viable a una escala dada, hasta 7 iteraciones de búsqueda binaria apuntan al 96 %–100 % de 204 800 bytes. Los archivos comúnmente quedan entre 192 KB y 199 KB para que obtenga la máxima nitidez dentro del límite.',
      },
      {
        question: '¿Se eliminan los perfiles de color de DSLR y las etiquetas GPS de la cámara durante la compresión a 200 KB?',
        answer:
          'Sí. Escribir imágenes a través de HTML5 Canvas elimina los bloques de metadatos EXIF y las miniaturas de vista previa incrustadas, mejorando la privacidad y eliminando kilobytes desperdiciados en WordPress y servidores CDN.',
      },
      {
        question: '¿Qué pasa si un PNG sin pérdida demasiado grande solo baja al 35 % de escala para mantenerse como PNG a menos de 200 KB?',
        answer:
          'Con el formato en Original y la conversión automática de PNG activada, cualquier PNG sin pérdida forzado por debajo del 65 % de escala cambia automáticamente a WebP o JPG. Eso le permite mantener dimensiones en píxeles mucho más nítidas mientras supera cómodamente el límite de 200 KB.',
      },
      {
        question: '¿Puedo revisar detalles finos de tela o joyería antes de descargar el archivo de 200 KB?',
        answer:
          'Sí. Al hacer clic en Comparar en cualquier tarjeta de resultado terminada se abre un deslizador interactivo de pantalla dividida que compara sus píxeles originales sin comprimir directamente con la salida comprimida.',
      },
      {
        question: '¿Qué pasa si suelto un banner vectorial SVG en el compresor a 200 KB?',
        answer:
          'Su navegador rasteriza el SVG en Canvas y lo optimiza en un PNG, WebP o JPG de menos de 200 KB según su elección de formato. Esto es útil siempre que los marketplaces o portales CMS rechacen subidas .svg sin procesar.',
      },
      {
        question: '¿Qué tamaño máximo de archivo de origen acepta el compresor a 200 KB por imagen?',
        answer:
          'Cada JPG, PNG, WebP, HEIC, GIF, BMP o SVG subido puede tener hasta 25 MB. Ese margen maneja exportaciones pesadas de cámara directamente desde Lightroom o celulares modernos sin reducirlas antes.',
      },
      {
        question: '¿Cómo se nombran los archivos de salida para mantenerlos separados de mi carpeta maestra de productos?',
        answer:
          'Cada copia guardada conserva su nombre base saneado y agrega _200kb antes de la extensión, produciendo nombres claros como sneaker_side_200kb.webp. Su original maestro de alta resolución permanece completamente intacto en el disco.',
      },
      {
        question: '¿Puedo saltar a otro umbral exacto como 150 KB o 300 KB si un portal cambia sus reglas?',
        answer:
          'Sí. Use el enlace «¿Necesita un objetivo diferente en KB?» en la parte superior de los controles para abrir el compresor de tamaño de archivo objetivo personalizado e ingresar cualquier cifra exacta en KB o MB.',
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
    name: 'Comprimir imagen a 500 KB',
    shortDescription: 'Reduzca fotos de varios megabytes a menos de 500 KB con calidad ultra alta.',
    category: 'compress',
    seoTitle: 'Comprimir imagen a 500 KB gratis online – Alta calidad',
    seoDescription:
      'Comprima imágenes a 500 KB gratis online sin perder claridad de alta resolución. Convierta archivos JPG, PNG, WebP y HEIC grandes en recursos de portafolio.',
    h1: 'Comprimir imagen a 500 KB online',
    subtitle:
      'Convierta fotogramas DSLR voluminosos de 5 MB a 18 MB, exportaciones RAW de celular y capturas de alta resolución en recursos nítidos cuando comprime una imagen a 500 KB en local en su navegador. Ideal para fotógrafos que entregan pruebas a clientes, fundadores que crean presentaciones ligeras y agencias que envían galerías de portafolio, conserva las dimensiones completas en píxeles de alta resolución siempre que sea posible, con hasta 25 MB por archivo.',
    howToSteps: [
      {
        title: 'Suelte archivos de cámara o diseño a resolución completa',
        description:
          'Suba una o varias imágenes JPG, PNG, WebP o HEIC de hasta 25 MB cada una sin cambiarles el tamaño antes.',
      },
      {
        title: 'Elija el formato de salida para entrega de alta resolución',
        description:
          'Mantenga Original para un manejo fluido, elija JPG para presentaciones de clientes y pruebas de impresión, o seleccione WebP para galerías de portafolio ultra nítidas.',
      },
      {
        title: 'Verifique las preferencias de escalado y respaldo de PNG',
        description:
          'Deje activado el escalado inteligente de dimensiones para fotos de 40 MP o más, o desactívelo para conservar dimensiones estrictas de 4K o más con calidad optimizada.',
      },
      {
        title: 'Inspeccione el detalle lado a lado en el modo Comparar',
        description:
          'Revise cada insignia de confirmación «Menos de 500 KB» e inspeccione el follaje, la textura de la piel o la tipografía en el visor dividido de antes y después.',
      },
      {
        title: 'Descargue archivos individuales o empaquete un ZIP',
        description:
          'Guarde cada salida <nombre>_500kb de inmediato o exporte grandes conjuntos de fotos limpiamente en compressmypic_500kb.zip.',
      },
    ],
    features: [
      {
        title: 'Compresión casi sin pérdida a 500 KB',
        description:
          '500 KB dan mucho margen para mantener imágenes grandes de 1920 px–4000 px visualmente indistinguibles del original.',
      },
      {
        title: 'Decodificación automática de HEIC',
        description: 'Admite fotos HEIC/HEIF de iPhone en local mediante WebAssembly del lado del cliente.',
      },
      {
        title: 'Sin adivinanzas de calidad',
        description: 'Deje de mover porcentajes manualmente: deje que la búsqueda binaria maximice la calidad por debajo de 500 KB.',
      },
      {
        title: 'Privacidad 100 % en el navegador',
        description: 'Nada se sube a servidores remotos.',
      },
    ],
    faqs: [
      {
        question: '¿Por qué 500 KB conserva una calidad visual casi original en fotos 4K y de 12 MP?',
        answer:
          'Medio megabyte (512 000 bytes) ofrece amplio espacio para microcontraste fino, grano de película sutil y degradados de cielo suaves en fotografías completas de 1920 px a 4000 px. La mayoría de las imágenes llegan a 500 KB limpiamente con alta calidad del 75 %–92 % sin reducir las dimensiones en absoluto.',
      },
      {
        question: '¿Qué tan bien funciona esto para archivos adjuntos de presentaciones de Pitch Deck, Keynote y PowerPoint?',
        answer:
          'Reducir capturas y mockups de estudio de PNG de 6 MB a JPG o WebP de menos de 500 KB disminuye drásticamente la sobrecarga general de la presentación. Una presentación de 30 diapositivas se mantiene rápida para enviar por correo y sincronizar en la nube mientras se ve nítida en proyectores de conferencias.',
      },
      {
        question: '¿Puedo mantener la resolución original al 100 % en una foto DSLR de 24 MP al comprimir a 500 KB?',
        answer:
          'Desactive «Permitir escalado inteligente de dimensiones» para forzar el 100 % de las dimensiones originales en píxeles, permitiendo que la búsqueda binaria de calidad baje hasta el 5 % si hace falta. Para la mayoría de los JPEG de cámara de 6000×4000 px, la calidad JPG alrededor del 40 %–65 % ya supera los 500 KB sin reducir un solo píxel.',
      },
      {
        question: '¿Por qué un retrato HEIC de 15 MB de iPhone puede mantenerse a resolución completa a menos de 500 KB al exportarse como JPG o WebP?',
        answer:
          'Las fotos HEIC de celulares modernos llevan datos de color profundos y altos conteos de megapíxeles, pero se vuelven a codificar eficientemente en JPG o WebP con calidad del 80 % o más alrededor de 450–495 KB. El bokeh de retrato y los degradados sutiles de piel se mantienen suaves en todo el lienzo de la imagen.',
      },
      {
        question: '¿Qué pasa si subo un mockup de panel de software en PNG sin pérdida de 10 MB?',
        answer:
          'Un PNG de retina de pantalla completa rara vez cabe dentro de 500 KB sin pérdida sin una gran reducción de píxeles. Dejar el formato en Original con la conversión automática de PNG activada lo cambia automáticamente a WebP de alta calidad casi sin pérdida o JPG nítido para que el texto de la interfaz se mantenga legible a tamaño de pantalla completa.',
      },
      {
        question: '¿Por qué 500 KB es popular para envíos de portafolio en Behance, Dribbble y agencias?',
        answer:
          'Las plataformas de portafolio y los portales de proveedores de RFP frecuentemente limitan los medios de estudios de caso a 500 KB por imagen para mantener rápidas las páginas de varios proyectos. Comprimir justo por debajo de 500 KB satisface los validadores de subida sin activar una recompresión dura del lado del servidor.',
      },
      {
        question: '¿Cómo se comporta la herramienta si un archivo de mi lote ya pesa 320 KB?',
        answer:
          'El compresor detecta que 320 KB ya cumple el requisito de 500 KB y procesa una copia limpia a resolución completa. Si la recodificación produce un archivo ligeramente más pesado, aparece la advertencia «Creció» para que pueda hacer clic en Conservar original y mantener los 320 KB originales.',
      },
      {
        question: '¿Los fotógrafos pierden el control de su propiedad intelectual o filtran sesiones de clientes aquí?',
        answer:
          'Nunca. Ya sea preparando vistas previas de bodas, tomas de arquitectura comercial o prototipos sin lanzar, cada imagen se decodifica y comprime dentro de su pestaña local del navegador sin transmisión al servidor.',
      },
      {
        question: '¿Qué formato conserva una tipografía más nítida y líneas vectoriales delgadas a 500 KB?',
        answer:
          'WebP supera a JPG en tipografía nítida de oscuro sobre blanco, gráficos y esquemas dentro de un límite de 500 KB. Su codificación predictiva de bloques minimiza los halos ruidosos alrededor de interfaces y diagramas de alto contraste.',
      },
      {
        question: '¿Puedo aplanar un PNG de producto transparente sobre carbón oscuro en lugar de blanco al apuntar a JPG de 500 KB?',
        answer:
          'Sí. Al seleccionar JPG se expone el selector de color mate para PNG transparente, permitiéndole ingresar blanco, pizarra oscura o cualquier color hexadecimal de marca personalizado para una fusión fluida de bordes transparentes.',
      },
      {
        question: '¿La compresión en lienzo conserva el modelo de lente de la cámara, la velocidad de obturación y las coordenadas GPS?',
        answer:
          'No, HTML5 Canvas elimina los metadatos EXIF automáticamente, lo que quita las miniaturas de cámara incrustadas y los datos de ubicación. Eso mantiene privadas las pruebas de clientes y asigna cada kilobyte a los píxeles visibles.',
      },
      {
        question: '¿Qué límite exacto en bytes activa la insignia de confirmación «Menos de 500 KB»?',
        answer:
          'La herramienta verifica el archivo codificado final contra 512 000 bytes (500 × 1024). Los archivos estrictamente iguales o por debajo de 512 000 bytes muestran la insignia verde de estado «Menos de 500 KB» y el espacio exacto ahorrado.',
      },
      {
        question: '¿Puedo reducir por lotes veinte fotos de 10 MB a 500 KB en una sola pasada?',
        answer:
          'Sí. Suelte las veinte imágenes (hasta 25 MB por archivo) en la cola, deje que el navegador recorra cada foto secuencialmente y exporte todo junto dentro de compressmypic_500kb.zip.',
      },
      {
        question: '¿Por qué un PNG sin pérdida forzado con el escalado desactivado mostró «Objetivo no alcanzado» a 500 KB?',
        answer:
          'La compresión PNG sin pérdida ignora los deslizadores de calidad, lo que significa que una escena compleja de alta resolución con formato PNG y dimensiones completas bloqueados no puede bajar de su piso DEFLATE sin procesar. Active el escalado de dimensiones o elija WebP/JPG para superar los 500 KB limpiamente.',
      },
      {
        question: '¿Puedo ampliar y desplazar, o comparar el original con el de 500 KB lado a lado antes de guardar?',
        answer:
          'Sí. Al hacer clic en Comparar en cualquier tarjeta completada se abre la cortina dividida de antes y después de ancho completo para que pueda inspeccionar ojos, mechones de cabello o etiquetas pequeñas directamente contra el archivo original.',
      },
      {
        question: 'Si una imagen requiere un escalado menor de dimensiones para llegar a 500 KB, ¿qué tan drástico es el cambio de tamaño?',
        answer:
          'El escalador comienza en el 82 % de las dimensiones originales antes de probar pasos más pronunciados. Como 500 KB es generoso, las exportaciones gigantes de estudio de 50 MP típicamente superan el objetivo limpiamente justo en el paso del 82 % o 68 % mientras conservan nitidez de impresión de alta definición.',
      },
      {
        question: '¿La herramienta admite mapas de bits BMP antiguos o diagramas SVG de hasta 25 MB?',
        answer:
          'Sí. Los archivos BMP sin comprimir y las ilustraciones vectoriales SVG de hasta 25 MB se cargan directamente en Canvas y se exportan limpiamente por debajo de 500 KB en su formato ráster seleccionado.',
      },
      {
        question: '¿Cómo cambia el nombre del archivo al descargar copias comprimidas a 500 KB?',
        answer:
          'Cada imagen procesada agrega automáticamente _500kb antes de su extensión, produciendo nombres claros como architectural_proof_500kb.jpg. Mantener la etiqueta en el nombre del archivo exportado garantiza que sus entregables comprimidos nunca sobrescriban los originales maestros.',
      },
      {
        question: '¿Qué debo hacer si un portal de marketplace fija un límite de 1 MB o 250 KB en su lugar?',
        answer:
          'Haga clic en el acceso directo «¿Necesita un objetivo diferente en KB?» sobre los botones de formato para abrir el compresor de tamaño de archivo objetivo personalizado e ingresar cualquier umbral personalizado en KB o MB.',
      },
      {
        question: '¿Puedo comprimir recursos a 500 KB directamente desde un iPad o una tableta Android?',
        answer:
          'Sí. Los controles de formato táctiles, el deslizador de comparación y la exportación ZIP funcionan limpiamente dentro de navegadores modernos de tableta y celular sin software de escritorio.',
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
    name: 'Compresor de imágenes en lote',
    shortDescription: 'Comprima docenas de imágenes por lotes a la vez y exporte un solo ZIP.',
    category: 'compress',
    seoTitle: 'Compresor de imágenes en lote gratis online – ZIP',
    seoDescription:
      'Reduzca decenas de archivos con el compresor de imágenes en lote. Aplique perfiles Web Fast, Correo o Alta fidelidad, vea los MB ahorrados y descargue un ZIP.',
    h1: 'Compresor de imágenes en lote gratis',
    subtitle:
      'Reduzca carpetas enteras de fotos de producto, respaldos de rollo de cámara y recursos de sitios web simultáneamente con nuestro compresor de imágenes en lote gratis directamente en su navegador. Creado para equipos de comercio electrónico, fotógrafos y desarrolladores que manejan lotes grandes, combina perfiles rápidos de lote con un clic y deslizadores de calidad personalizados con seguimiento de progreso en vivo, comparaciones visuales por archivo y descargas instantáneas de un solo ZIP.',
    howToSteps: [
      {
        title: 'Suelte todo su lote de imágenes',
        description:
          'Seleccione o arrastre varias imágenes JPG, PNG, WebP o HEIC de hasta 25 MB cada una a la zona de lote (se pueden agregar más en cualquier momento).',
      },
      {
        title: 'Haga clic en un perfil rápido de lote o personalice los ajustes',
        description:
          'Elija Web Fast (WebP 75 %), Correo / Compartir (JPG 65 %) o Alta fidelidad (85 %), o ajuste el deslizador de calidad, el formato de salida y el color mate.',
      },
      {
        title: 'Supervise el progreso en vivo de la compresión por lotes',
        description:
          'Observe cómo termina la barra de progreso en vivo archivo por archivo y revise el banner de resumen que muestra el total de archivos, los MB ahorrados y el porcentaje general de reducción.',
      },
      {
        title: 'Inspeccione tarjetas individuales y la calidad de antes y después',
        description:
          'Abra el modal Comparar en archivos de muestra, haga clic en Conservar original si algún recurso ya diminuto creció, o vuelva a procesar archivos individuales con ajustes modificados.',
      },
      {
        title: 'Ajuste y vuelva a comprimir todo si hace falta',
        description:
          'Cambie su perfil, porcentaje de calidad o formato objetivo en cualquier momento y vuelva a procesar toda la cola con un clic sin volver a subir.',
      },
      {
        title: 'Descargue archivos individuales o Descargar todo (ZIP)',
        description:
          'Guarde imágenes optimizadas individuales directamente desde sus tarjetas o haga clic en Descargar todo (ZIP) para descargar bulk_compressed_compressmypic.zip.',
      },
    ],
    features: [
      {
        title: 'Progreso por lotes y totales de ahorro',
        description:
          'Muestra el progreso en vivo archivo por archivo, además de los MB totales agregados y el porcentaje ahorrado en todo su lote.',
      },
      {
        title: 'Perfiles rápidos de lote con un clic',
        description: 'Aplique ajustes predefinidos WebP, Correo/JPG o Alta fidelidad en cada archivo al instante.',
      },
      {
        title: 'Modal de comparación por archivo',
        description: 'Inspeccione cualquier foto comprimida individual contra su original antes de descargar.',
      },
      {
        title: 'Cero límites de lote',
        description: 'Comprima tantas imágenes como permita la memoria de su dispositivo, sin nivel pago ni colas de servidor.',
      },
    ],
    faqs: [
      {
        question: '¿Qué cambian los tres perfiles rápidos de lote en mis imágenes en cola?',
        answer:
          'Web Fast cambia el formato de salida a WebP con calidad del 75 % para sitios web ligeros, Correo / Compartir convierte el lote a JPG del 65 % para adjuntos más pequeños, y Alta fidelidad mantiene los formatos originales con calidad del 85 %. Al hacer clic en cualquier perfil se actualizan automáticamente los ajustes y se vuelven a comprimir los archivos ya cargados.',
      },
      {
        question: '¿Puedo comprimir imágenes por lotes en una computadora portátil o en el celular sin una conexión activa de subida?',
        answer:
          'Una vez que la página de la herramienta termina de cargar, toda la compresión por lotes, decodificación y creación de ZIP ocurre en local en su navegador con HTML5 Canvas y WebAssembly. Sus fotos nunca entran en una cola de procesamiento remota ni salen de su dispositivo.',
      },
      {
        question: '¿Cómo informa el resumen agregado del lote el ahorro total?',
        answer:
          'A medida que los archivos terminan de procesarse, la barra de resumen suma el tamaño original en bytes de cada elemento contra el resultado comprimido, mostrando los megabytes agregados ahorrados y el porcentaje general de reducción. Si algún archivo individual terminó más grande, puede hacer clic en Conservar original en esa tarjeta antes de exportar el ZIP.',
      },
      {
        question: '¿Qué pasa cuando mezclo capturas PNG, HEIC de iPhone y fotos JPG en un mismo lote?',
        answer:
          'Con el formato de salida en Original, cada imagen se codifica en su formato web correspondiente (decodificando HEIC a JPG/PNG limpiamente mediante WebAssembly). Alternativamente, elegir WebP o JPG unifica toda la carpeta mixta en una sola extensión de salida uniforme.',
      },
      {
        question: '¿Cuál es el tamaño máximo permitido por archivo en el compresor de imágenes en lote?',
        answer:
          'Se admiten archivos individuales de hasta 25 MB en entradas JPG, PNG, WebP, HEIC/HEIF, GIF, BMP y SVG. No hay un límite fijo de cantidad, solo la memoria disponible del navegador de su dispositivo.',
      },
      {
        question: '¿Por qué la herramienta procesa los lotes con una barra de progreso en vivo en lugar de congelar mi pestaña?',
        answer:
          'Los archivos se ejecutan en pasadas controladas del navegador con actualizaciones de progreso («X / Y») mostradas en tiempo real. Eso mantiene la página responsiva para que pueda supervisar claramente la finalización incluso en lotes de 30 o 50 fotos de alta resolución.',
      },
      {
        question: '¿Cómo se llama el archivo ZIP exportado al hacer clic en Descargar todo (ZIP)?',
        answer:
          'Al hacer clic en Descargar todo (ZIP) se empaquetan limpiamente todas las salidas terminadas dentro de bulk_compressed_compressmypic.zip. Todo el archivo ZIP se construye directamente en la memoria de su navegador sin pasar por un servidor de almacenamiento en la nube.',
      },
      {
        question: '¿Puedo agregar más fotos a la cola después de que mi primer lote ya terminó de comprimirse?',
        answer:
          'Sí. Soltar más imágenes las agrega limpiamente a su lista de lote existente para que pueda empaquetar archivos antiguos y recién soltados juntos en un solo ZIP final.',
      },
      {
        question: '¿Cuál es la diferencia entre los ajustes predefinidos Equilibrada, Archivo más pequeño y Alta calidad dentro de los controles de compresión?',
        answer:
          'Los perfiles rápidos de lote configuran atajos de formato más calidad para objetivos comunes como velocidad web o adjuntos de correo. Mientras tanto, las píldoras Equilibrada, Archivo más pequeño y Alta calidad y el deslizador de calidad del 10 %–100 % dentro de los controles de compresión le permiten ajustar con precisión la fuerza exacta con pérdida antes de hacer clic en Volver a comprimir todo.',
      },
      {
        question: 'Si convierto íconos PNG transparentes a JPG en lote, ¿cómo se colorean sus fondos?',
        answer:
          'Siempre que el formato de salida sea JPG (incluido mediante el perfil Correo / Compartir), el selector de color de fondo mate aparece automáticamente. Rellena los canales alfa transparentes limpiamente sobre blanco puro (#ffffff) o cualquier tono hexadecimal personalizado que elija, así los íconos nunca se vuelven negros.',
      },
      {
        question: '¿El compresor de imágenes en lote cambia las dimensiones en píxeles o mantiene el ancho y alto originales?',
        answer:
          'El compresor de imágenes en lote mantiene cada archivo al 100 % de su ancho y alto originales en píxeles mientras reduce el tamaño en bytes mediante codificación de calidad. Si también necesita reducir dimensiones en docenas de fotos, combínelo con el redimensionador de imágenes en lote.',
      },
      {
        question: '¿Por qué un PNG ya comprimido dentro de mi lote mostró una advertencia de «La recodificación creció»?',
        answer:
          'Los archivos PNG exportados por herramientas que usan cuantización de paleta agresiva pueden expandirse ligeramente al volver a guardarse como PNG completo de 24 bits sin pérdida en HTML5 Canvas. Al hacer clic en Conservar original en esa tarjeta se conserva el original más pequeño dentro de su ZIP de lote, o cambiar el formato a WebP/JPG lo reduce aún más.',
      },
      {
        question: '¿Puedo volver a comprimir solo una imagen difícil en lugar de volver a procesar toda la carpeta?',
        answer:
          'Sí. Cada tarjeta de resultado terminada incluye sus propios botones Volver a comprimir y Quitar junto con Comparar y Descargar para que pueda ajustar o descartar valores atípicos limpiamente.',
      },
      {
        question: '¿La compresión en lote elimina automáticamente las coordenadas GPS de la cámara y las etiquetas EXIF de los álbumes de viaje?',
        answer:
          'Sí. Como cada imagen se dibuja en HTML5 Canvas durante la compresión, las etiquetas EXIF incrustadas, los números de serie de cámara y las ubicaciones GPS se eliminan limpiamente de cada archivo en el ZIP.',
      },
      {
        question: '¿Cuándo debería elegir el compresor de imágenes en lote en lugar del compresor de tamaño objetivo o el optimizador de imágenes web?',
        answer:
          'Use el compresor de imágenes en lote cuando quiera ahorros rápidos y uniformes basados en calidad con dimensiones completas en píxeles en docenas de fotos. Elija el compresor de tamaño objetivo cuando necesite que cada archivo esté bajo un límite estricto en KB, o el optimizador de imágenes web para límites predefinidos de píxeles web más etiquetas HTML responsivas.',
      },
      {
        question: '¿Puedo inspeccionar la calidad visual de elementos individuales del lote antes de descargar el ZIP completo?',
        answer:
          'Sí. Al hacer clic en Comparar en cualquier tarjeta se abre el deslizador dividido lado a lado que compara las versiones original y comprimida con todo detalle.',
      },
      {
        question: '¿Cómo rinde el punto de partida predeterminado de calidad del 70 % en bibliotecas de fotos generales?',
        answer:
          'La calidad con pérdida del 70 % típicamente entrega reducciones sustanciales de bytes del 50 %–75 % en JPEG de alta resolución mientras se mantiene visualmente limpia en pantallas web típicas y al compartir por correo. Súbala hacia el 85 % con Alta fidelidad para trabajo crítico de portafolio.',
      },
      {
        question: '¿Qué pasa si subo una carpeta enorme de 100 fotos en un celular con poca memoria RAM?',
        answer:
          'Como la decodificación y los búferes de Canvas residen en la memoria del dispositivo, las pestañas de celular pueden volverse lentas con colas únicas extremas. Procesar de 15 a 30 fotos de muchos megapíxeles por lote, y limpiar las listas terminadas entre conjuntos, mantiene fluidos los navegadores de celular.',
      },
      {
        question: '¿Se aplican marcas de agua, límites diarios de archivos o avisos de mejora de pago en las exportaciones ZIP en lote?',
        answer:
          'Nunca. Tanto las descargas individuales como los paquetes Descargar todo (ZIP) se exportan limpiamente sin marcas de agua, registros de cuenta ni muros de pago por cantidad de archivos.',
      },
      {
        question: '¿Puedo soltar GIF animados en un lote de compresión masiva?',
        answer:
          'Las entradas de GIF animado extraen y comprimen solo su fotograma inicial como archivo estático aquí. Si necesita reducir GIF animados de varios fotogramas manteniendo el movimiento intacto, use nuestra herramienta dedicada Compresor de GIF.',
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
    name: 'Compresor de tamaño de archivo objetivo',
    shortDescription: 'Comprima cualquier imagen hasta su límite exacto personalizado de KB o MB.',
    category: 'compress',
    seoTitle: 'Compresor a tamaño exacto gratis online – KB o MB a medida',
    seoDescription:
      'Comprima imágenes online gratis hasta un límite exacto de KB o MB, con búsqueda binaria de calidad y escala inteligente, todo en su navegador, sin subir nada.',
    h1: 'Compresor de imágenes a tamaño de archivo objetivo',
    subtitle:
      'Escriba cualquier límite exacto de subida en KB o MB —por ejemplo, 35 KB para una credencial, 150 KB para un encabezado web o 2 MB para un adjunto— con nuestro compresor de tamaño de archivo objetivo, que funciona directamente en su navegador. Pensado para diseñadores, desarrolladores y solicitantes que enfrentan reglas de portales poco comunes, combina la búsqueda binaria de calidad con la escala opcional de píxeles en archivos de hasta 25 MB, todo en su propio dispositivo.',
    howToSteps: [
      {
        title: 'Escriba su límite personalizado en KB o MB',
        description:
          'Escriba cualquier número objetivo de 1 KB a 10 240 KB (o cambie a MB hasta 20 MB), o toque un acceso rápido como 20 KB, 50 KB, 100 KB, 200 KB, 500 KB o 1 MB.',
      },
      {
        title: 'Suelte una o varias imágenes de hasta 25 MB',
        description:
          'Suba archivos JPG, PNG, WebP, HEIC, GIF, BMP o SVG a la zona de subida para iniciar la optimización automática hacia su objetivo de inmediato.',
      },
      {
        title: 'Elija el formato de salida y los controles de respaldo',
        description:
          'Seleccione Original, JPG, WebP o PNG, mantenga activa la escala inteligente de dimensiones si los archivos de alta resolución necesitan reducir píxeles, y active la conversión automática de PNG para gráficos pesados.',
      },
      {
        title: 'Lea el diagnóstico del objetivo y compare la calidad',
        description:
          'Revise el Resumen de compresión objetivo para ver los archivos logrados y los no logrados, inspeccione la nitidez lado a lado con Comparar, o pulse Conservar original si alguna entrada pequeña creció.',
      },
      {
        title: 'Ajuste el objetivo cuando quiera o descargue el ZIP',
        description:
          'Cambie su umbral personalizado y pulse Comprimir a [objetivo] para volver a procesar la cola, luego guarde archivos individuales o pulse Descargar todo (ZIP).',
      },
    ],
    features: [
      {
        title: 'Objetivos personalizados en KB y MB',
        description: 'Ajuste cualquier tamaño objetivo, desde pequeños avatares de 10 KB hasta cargas de varios megabytes para impresión.',
      },
      {
        title: 'Motor en dos etapas: calidad y escala',
        description: 'Prueba primero los niveles de calidad a resolución completa y solo después reduce las dimensiones paso a paso cuando hace falta.',
      },
      {
        title: 'Diagnóstico honesto de objetivos no alcanzados',
        description: 'Explica con claridad cuándo un PNG sin pérdida o la escala desactivada impiden llegar a un límite estricto de tamaño.',
      },
      {
        title: 'Compatibilidad con lotes y ZIP',
        description: 'Comprima varios archivos hasta el mismo objetivo de KB y descárguelos todos en un solo ZIP.',
      },
    ],
    faqs: [
      {
        question: '¿Qué rango de KB y MB admite el compresor de tamaño de archivo objetivo?',
        answer:
          'En el modo KB puede escribir cualquier número entero de 1 KB a 10 240 KB (10 MB), con 150 KB como valor predeterminado al abrir la página. Al cambiar la píldora de unidad a MB puede apuntar a cualquier valor de 1 MB a 20 MB, con accesos rápidos para 20 KB, 50 KB, 100 KB, 200 KB, 500 KB y 1 MB.',
      },
      {
        question: '¿Cómo recalcula el compresor de tamaño objetivo mi número al cambiar entre KB y MB?',
        answer:
          'Al pulsar MB, su objetivo actual en KB se divide entre 1024 y se redondea a un mínimo de 1 MB, para que nunca baje por accidente de kilobytes a un límite diminuto en bytes. Al volver a KB, el valor se multiplica por 1024 sin problema hasta el límite de 10 240 KB.',
      },
      {
        question: '¿Por qué el compresor de tamaño objetivo prueba primero la calidad con búsqueda binaria a resolución completa?',
        answer:
          'Muchas imágenes con límites moderados, como 150 KB, 300 KB o 1,5 MB, pueden alcanzar el objetivo solo recortando el exceso de compresión JPEG o WebP sin descartar píxeles. Al comprobar primero la calidad del 35 % al 94 % con las dimensiones completas, el ancho y el alto se mantienen intactos siempre que sea posible.',
      },
      {
        question: '¿Cuándo entra en acción la escala inteligente de dimensiones en el compresor de tamaño objetivo?',
        answer:
          'Si ni siquiera la calidad del 35 % con pérdida a ancho completo logra meter la imagen por debajo de su umbral en bytes y la casilla Permitir escala inteligente de dimensiones está marcada, el motor baja por factores de escala progresivos del 82 % hacia el 10 %. En cada paso ejecuta una búsqueda de calidad nueva y elige la resolución más alta que cumpla su límite exacto.',
      },
      {
        question: '¿Qué ocurre en el compresor de tamaño objetivo si el portal exige un límite de KB muy ajustado sin cambiar el tamaño?',
        answer:
          'Desmarque Permitir escala inteligente de dimensiones para fijar su ancho y alto al 100 %. El compresor entonces baja la calidad JPG o WebP con pérdida hasta un 5 % a dimensiones completas y le informa con honestidad si la complejidad de la imagen no cabe físicamente dentro de los KB que pidió.',
      },
      {
        question: '¿Por qué los límites imposibles como 2 KB o 3 KB muestran un aviso honesto de objetivo no alcanzado?',
        answer:
          'Todo archivo JPEG, WebP o PNG válido contiene encabezados obligatorios, tablas de Huffman y bloques de cuantización de color que ocupan varios cientos de bytes incluso en una cuadrícula diminuta. En lugar de fallar o inventar números, la tarjeta muestra el tamaño codificado real más pequeño que se puede lograr junto con sugerencias útiles.',
      },
      {
        question: '¿Qué hace el interruptor de conversión automática de PNG grandes en el compresor de tamaño objetivo?',
        answer:
          'Los archivos PNG sin pérdida ignoran los deslizadores de calidad y solo se achican con la reducción de escala, lo que puede difuminar capturas o gráficos de producto si se fuerzan bajo un límite de KB ajustado. Con la conversión automática activada, los PNG opacos demasiado grandes pasan a JPG, mientras que los PNG transparentes pasan a WebP cuando el PNG solo no alcanza el objetivo o baja del 65 % de escala.',
      },
      {
        question: '¿Puedo comprimir en lote fotos mezcladas hasta el mismo umbral personalizado de KB?',
        answer:
          'Sí. Suelte cualquier mezcla de imágenes JPG, PNG, WebP, HEIC, GIF, BMP o SVG de hasta 25 MB cada una en la cola, y cada archivo se optimiza de forma independiente contra su objetivo activo de KB o MB.',
      },
      {
        question: '¿Cómo registra el Resumen de compresión objetivo el éxito parcial de un lote?',
        answer:
          'Al comprimir un lote de varios archivos contra un límite personalizado estricto, el banner oscuro de resumen cuenta exactamente cuántos archivos superaron su objetivo y cuántos no pudieron encajar con honestidad, junto con el total de bytes ahorrados. Cada tarjeta individual explica su porcentaje final de calidad y su factor de escala exactos.',
      },
      {
        question: '¿Qué nombre reciben las descargas individuales y los ZIP del compresor de tamaño objetivo?',
        answer:
          'Las descargas individuales añaden la etiqueta de kilobytes de su objetivo —con nombres como folleto_150kb.jpg— mientras que las exportaciones ZIP de varios archivos se guardan como compressmypic_<valor><unidad>.zip. Sus originales intactos quedan separados y a salvo en el disco.',
      },
      {
        question: '¿Cómo maneja el compresor de tamaño objetivo los fondos transparentes si elijo JPG con un límite estricto?',
        answer:
          'Al elegir JPG aparece la muestra de color mate para PNG transparente (blanco puro #ffffff por defecto). Cualquier zona transparente con canal alfa se rellena limpiamente con el color de fondo que elija antes de que corra la compresión JPEG, evitando bordes negros sólidos.',
      },
      {
        question: '¿Por qué un archivo más pequeño que mi objetivo personalizado mostró una advertencia de crecimiento?',
        answer:
          'Si pide un límite de 300 KB para una imagen que ya estaba comprimida a 180 KB, decodificarla en HTML5 Canvas y volver a guardarla con alta calidad puede expandirla a 240 KB. Pulse Conservar original en esa tarjeta para mantener su archivo original más ligero de 180 KB.',
      },
      {
        question: '¿La compresión a tamaño objetivo elimina los metadatos EXIF sensibles de documentos o fotos?',
        answer:
          'Sí. Al dibujar los píxeles en HTML5 Canvas se eliminan automáticamente las vistas previas de cámara incrustadas, los metadatos del obturador y las coordenadas GPS, manteniendo privados sus archivos personales y dedicando cada kilobyte a la claridad visual.',
      },
      {
        question: '¿Puedo cambiar mi valor personalizado de KB después de terminar las imágenes sin volver a subirlas?',
        answer:
          'Sí. Edite el objetivo numérico o toque otro acceso rápido en cualquier momento y pulse el botón Comprimir a [objetivo] para volver a optimizar toda su lista cargada de inmediato en la memoria.',
      },
      {
        question: '¿Qué tan preciso es el conteo final de bytes frente a los límites binarios de kilobytes?',
        answer:
          'El motor convierte los KB a bytes binarios exactos (KB × 1024) y trata su entrada como un límite superior estricto, sin superarlo jamás salvo que sea físicamente imposible bajo restricciones fijadas. Su búsqueda binaria suele detenerse entre el 96 % y el 100 % de ese límite para preservar el máximo detalle.',
      },
      {
        question: '¿Se suben pruebas privadas de clientes, contratos o escaneos médicos durante el cálculo del objetivo?',
        answer:
          'No. Las iteraciones de búsqueda binaria, el escalado de imágenes, la decodificación HEIC con WebAssembly y el empaquetado ZIP se ejecutan estrictamente dentro de su sesión de navegador, sin transferencias externas por la red.',
      },
      {
        question: '¿Puedo ver el texto fino o los detalles en mi límite personalizado de KB antes de guardar?',
        answer:
          'Sí. Pulse Comparar en cualquier tarjeta de resultado terminada para abrir una cortina interactiva de antes y después y revisar los bordes nítidos directamente contra la subida original.',
      },
      {
        question: '¿Cuándo conviene elegir una herramienta fija de 50 KB o 100 KB en lugar del compresor de tamaño objetivo?',
        answer:
          'Use las páginas fijas cuando su flujo de trabajo siempre apunte a referencias estándar de portales, como pasaportes de 50 KB o cargas de 200 KB para Shopify. Abra este compresor de tamaño de archivo objetivo cuando los formularios pidan límites poco comunes como 30 KB, 75 KB, 250 KB o 1,5 MB.',
      },
      {
        question: '¿Qué ocurre si subo un GIF animado y apunto a 400 KB en el compresor de tamaño objetivo?',
        answer:
          'Como la orientación por KB basada en Canvas procesa fotogramas rasterizados estáticos, los GIF animados se optimizan y exportan con su fotograma inicial como imagen fija. Use nuestro Compresor de GIF dedicado si necesita achicar animaciones de varios fotogramas en bucle sin perder el movimiento.',
      },
      {
        question: '¿Qué ocurre si fijo un objetivo alto en MB, como 5 MB, para una imagen de 1 MB?',
        answer:
          'Cualquier imagen que ya esté por debajo de su límite personalizado en MB se aprueba de inmediato en la pasada de máxima calidad a dimensiones completas. Si la recodificación infla el peso en bytes sin necesidad, puede pulsar Conservar original directamente en la tarjeta para quedarse con su archivo original más ligero.',
      },
    ],
    relatedSlugs: ['/compress-image-to-50kb', '/compress-image-to-100kb', '/compress-image-to-200kb', '/compress-image-to-500kb'],
  },

  {
    slug: '/bulk-image-resizer',
    name: 'Redimensionador de imágenes en lote',
    shortDescription: 'Redimensione decenas de imágenes por dimensiones máximas, ancho o porcentaje, con ZIP.',
    category: 'resize',
    seoTitle: 'Redimensionador de imágenes en lote gratis online – ZIP',
    seoDescription:
      'Escale decenas de fotos gratis online con el redimensionador en lote, en su navegador. Elija Ajuste máximo, Ancho uniforme, Exacto o % y descargue un solo ZIP.',
    h1: 'Redimensionador de imágenes en lote gratis online',
    subtitle:
      'Estandarice las dimensiones en píxeles de sesiones completas de producto, carpetas de blog y álbumes de fotos con nuestro redimensionador de imágenes en lote gratis, que corre en local en su navegador. Diseñado para vendedores de comercio electrónico, equipos de contenido y fotógrafos, maneja lotes mixtos de retratos y paisajes con Ajuste máximo An × Al, Ancho uniforme, An × Al exacto o escala por porcentaje, hasta 25 MB por archivo, con exportación instantánea en ZIP.',
    howToSteps: [
      {
        title: 'Suelte varias imágenes en la cola de lote',
        description:
          'Suba cualquier mezcla de archivos JPG, PNG, WebP, HEIC, GIF, BMP o SVG de hasta 25 MB cada uno desde su computadora o celular.',
      },
      {
        title: 'Elija una estrategia de redimensionado en lote',
        description:
          'Elija Ajuste máximo An × Al para orientaciones mixtas, Ancho uniforme para diseños de columna fija, An × Al exacto para cuadrículas estrictas, o Porcentaje (%) para escalar de forma uniforme.',
      },
      {
        title: 'Defina las dimensiones objetivo o los accesos rápidos de tamaño',
        description:
          'Escriba píxeles de 1 a 12 000 px (o pulse Full HD 1920px, Blog 1200px, Comercio electrónico 1000×1000 o Miniatura 600px), o deslice la escala del 10 % al 200 %.',
      },
      {
        title: 'Configure la protección contra ampliación y el comportamiento de ajuste',
        description:
          'Mantenga marcada la opción No ampliar imágenes más pequeñas para proteger los íconos diminutos, o elija Contener, Cubrir o Estirar cuando seleccione An × Al exacto.',
      },
      {
        title: 'Elija el formato de salida, la calidad y el fondo mate',
        description:
          'Conserve Original o convierta las salidas a JPG, PNG o WebP junto con un deslizador de calidad del 10 % al 100 % y un color de fondo mate personalizado para JPG.',
      },
      {
        title: 'Ejecute el redimensionado en lote y descargue todo en ZIP',
        description:
          'Revise las dimensiones antiguas y nuevas en píxeles de cada tarjeta y pulse Descargar todo (ZIP) para guardar bulk_resized_compressmypic.zip en local.',
      },
    ],
    features: [
      {
        title: 'Modo de cuadro delimitador de ajuste máximo',
        description: 'Reduce con seguridad paisajes anchos y retratos altos dentro de, por ejemplo, 1200×1200 px, sin recortar ni distorsionar.',
      },
      {
        title: 'Protección contra ampliación',
        description: 'Mantenga marcada la opción «No ampliar imágenes más pequeñas» para que los recursos pequeños se mantengan nítidos en lugar de estirarse.',
      },
      {
        title: 'Controles de formato y calidad',
        description: 'Convierta opcionalmente las salidas redimensionadas a WebP o JPG al mismo tiempo.',
      },
      {
        title: 'Empaquetado ZIP con un clic',
        description: 'Descargue decenas de imágenes redimensionadas con nombres limpios dentro de un solo archivo ZIP.',
      },
    ],
    faqs: [
      {
        question: '¿Cómo maneja Ajuste máximo An × Al una carpeta que mezcla paisajes horizontales y retratos verticales?',
        answer:
          'Ajuste máximo An × Al trata sus entradas de ancho y alto (1200×1200 px por defecto) como un cuadro delimitador invisible, preservando la proporción natural de cada foto. Un paisaje de 4000×2000 se convierte en 1200×600, mientras que un retrato de 2000×4000 se convierte en 600×1200, sin recortes ni estiramientos.',
      },
      {
        question: '¿Cuándo es mejor Ancho uniforme que Ajuste máximo An × Al en el redimensionador en lote?',
        answer:
          'Elija Ancho uniforme cuando construya boletines verticales, columnas de artículos de CMS o galerías responsivas donde cada imagen debe compartir exactamente el mismo ancho horizontal. Cada foto escala su altura en proporción, así que nada se estira ni se recorta.',
      },
      {
        question: '¿Qué hacen Contener, Cubrir y Estirar en el modo An × Al exacto del redimensionador en lote?',
        answer:
          'Contener encaja la imagen completa dentro de su cuadro exacto en píxeles con márgenes limpios de relleno, mientras que Cubrir llena cada borde de píxel recortando los lados sobrantes desde el centro. Estirar fuerza las proporciones que no coinciden a encajar directamente en los píxeles objetivo exactos.',
      },
      {
        question: '¿Cómo funciona la escala por porcentaje (%) en el redimensionado por lotes?',
        answer:
          'El modo Porcentaje multiplica el ancho y el alto originales de cada imagen subida por el factor que elija en el deslizador (del 10 % al 200 %, con botones rápidos del 25 %, 50 %, 75 %, 100 % y 150 %). Elegir 50 % convierte una foto de 4000×3000 en 2000×1500 y un ícono de 1000×800 en 500×400 en la misma pasada.',
      },
      {
        question: '¿Por qué debería dejar activada la opción No ampliar imágenes más pequeñas en lotes mixtos?',
        answer:
          'Si una carpeta contiene fotos DSLR de 4000 px y distintivos de 400 px, forzar un distintivo pequeño hasta 1200 px estira los píxeles y genera desenfoque. Al dejar marcada la opción No ampliar, las fotos grandes se reducen limpiamente mientras los archivos pequeños conservan sus dimensiones originales nítidas.',
      },
      {
        question: '¿Qué valores fijan los cuatro botones rápidos de píxeles del redimensionador en lote?',
        answer:
          'Al tocar Full HD 1920px se rellena 1920×1080, Blog 1200px fija 1200×1200, Comercio electrónico 1000×1000 fija 1000×1000 y Miniatura 600px fija 600×600. Después puede ajustar cualquiera de los dos campos de píxeles manualmente hasta 12 000 px.',
      },
      {
        question: '¿Puedo convertir una carpeta entera a WebP o JPG mientras la redimensiono en lote?',
        answer:
          'Sí. Cambie el Formato de salida de Original a WebP, JPG o PNG antes de pulsar Redimensionar en lote (N) para cambiar a la vez las dimensiones en píxeles y modernizar los formatos de archivo en una sola pasada por Canvas.',
      },
      {
        question: '¿Qué ocurre con los logotipos PNG transparentes si los redimensiono en lote con salida JPG?',
        answer:
          'Al elegir JPG aparece el selector de color de Fondo mate (#ffffff blanco por defecto). Cualquier fondo transparente o sombra suave se dibuja limpiamente sobre el color mate elegido antes de la codificación JPEG.',
      },
      {
        question: '¿Mantener el formato de salida en PNG conserva la transparencia alfa durante el redimensionado en lote?',
        answer:
          'Sí, exportar como PNG mantiene intactos los fondos transparentes y los bordes alfa suaves en cada elemento redimensionado. Mantener el Formato de salida en Original también preserva la transparencia para las subidas PNG y WebP.',
      },
      {
        question: '¿Cómo verifico que las fotos redimensionadas sigan nítidas antes de descargar el ZIP en lote?',
        answer:
          'Pulse cualquier tarjeta en miniatura o el botón Comparar de un elemento terminado para abrir el visor interactivo de comparación de antes y después. Puede arrastrar el divisor lado a lado para verificar los bordes nítidos antes de exportar el lote.',
      },
      {
        question: '¿Qué límites de megabytes y píxeles impone el redimensionador de imágenes en lote por archivo?',
        answer:
          'Cada imagen subida puede pesar hasta 25 MB, y las entradas de píxeles van de 1 px a 12 000 px por lado. Tenga en cuenta que exportar lienzos enormes de más de 10 000 px en decenas de imágenes depende de la memoria RAM disponible del navegador de su dispositivo.',
      },
      {
        question: '¿Se admiten fotos HEIC de iPhone y archivos vectoriales SVG en la misma cola de redimensionado?',
        answer:
          'Sí. Las fotos HEIC/HEIF se decodifican en local con WebAssembly del lado del cliente y los gráficos SVG se rasterizan sin problema en HTML5 Canvas antes de escalar junto con las subidas estándar JPG, PNG, WebP, GIF y BMP.',
      },
      {
        question: '¿Puedo ajustar la configuración y redimensionar todo el lote de nuevo sin volver a soltar los archivos?',
        answer:
          'Sí. Ajuste la estrategia, los límites de píxeles, el formato o el deslizador de calidad del 10 % al 100 % en cualquier momento y pulse Redimensionar en lote (N) para reprocesar todas las imágenes en cola de inmediato en la memoria del navegador.',
      },
      {
        question: '¿El contador de progreso en vivo muestra qué tan avanzadas van las carpetas grandes?',
        answer:
          'Sí. Mientras corre el procesamiento, el botón de acción muestra Redimensionando (X/Y)... junto con miniaturas giratorias, para que siempre sepa el progreso exacto del lote.',
      },
      {
        question: '¿Se envían los catálogos confidenciales de clientes o los álbumes familiares a servidores en la nube para redimensionarlos?',
        answer:
          'Nunca. Cada cálculo de redimensionado, paso de dibujo en Canvas y paquete ZIP se ejecuta en local en su dispositivo, manteniendo la fotografía privada y la mercancía inédita 100 % en el dispositivo.',
      },
      {
        question: '¿El redimensionador de imágenes en lote elimina los detalles EXIF de la cámara y las coordenadas GPS?',
        answer:
          'Sí. Como HTML5 Canvas vuelve a dibujar los datos de píxeles a las dimensiones objetivo sin copiar los encabezados EXIF originales, las etiquetas de ubicación y los números de serie de la cámara se eliminan automáticamente.',
      },
      {
        question: '¿Qué nombre recibe el archivo ZIP descargado del redimensionador en lote?',
        answer:
          'Al pulsar Descargar todo (ZIP) se genera bulk_resized_compressmypic.zip en local en su navegador. Empaqueta cada archivo redimensionado con éxito de su cola limpiamente en un solo archivo.',
      },
      {
        question: '¿Puedo eliminar un archivo accidental de un lote de 20 imágenes antes de exportar el ZIP?',
        answer:
          'Sí. Pulse el ícono de papelera de cualquier tarjeta individual para eliminar solo esa imagen sin interrumpir los 19 resultados redimensionados restantes.',
      },
      {
        question: '¿En qué se diferencia el redimensionador en lote del compresor de imágenes en lote?',
        answer:
          'El compresor de imágenes en lote mantiene intactos el ancho y el alto originales en píxeles mientras reduce el tamaño del archivo con compresión con pérdida. En cambio, este redimensionador en lote cambia activamente las dimensiones en píxeles y los cuadros delimitadores en lote, junto con ajustes opcionales de formato y calidad.',
      },
      {
        question: '¿Puedo agregar fotos extra a un lote de redimensionado ya terminado?',
        answer:
          'Sí. Arrastre archivos adicionales a la zona de subida en cualquier momento y se procesan automáticamente con su estrategia activa de redimensionado y se suman al resumen final de Descargar todo (ZIP).',
      },
    ],
    relatedSlugs: ['/image-resizer', '/bulk-image-compressor', '/bulk-image-converter', '/web-image-optimizer'],
  },

  {
    slug: '/bulk-image-converter',
    name: 'Conversor de imágenes en lote',
    shortDescription: 'Convierta varios archivos JPG, PNG, HEIC, SVG y BMP a la vez, con ZIP.',
    category: 'convert',
    seoTitle: 'Conversor de imágenes en lote gratis – Cambie formato y ZIP',
    seoDescription:
      'Cambie carpetas mezcladas gratis online con el conversor en lote, en su navegador. Convierta lotes HEIC, PNG, SVG, AVIF y BMP a WebP, JPG o PNG con ZIP.',
    h1: 'Conversor de imágenes en lote gratis',
    subtitle:
      'Unifique en una sola pasada carpetas mezcladas de fotos HEIC de Apple, descargas AVIF, íconos SVG, PNG transparentes y mapas de bits BMP antiguos con nuestro conversor de imágenes en lote gratis. Pensado para desarrolladores, gestores de contenido y usuarios comunes que estandarizan bibliotecas enteras de recursos, convierte lotes de hasta 25 MB por archivo limpiamente a WebP, JPG o PNG en local, con sufijos de nombre opcionales y descarga en un solo ZIP.',
    howToSteps: [
      {
        title: 'Suelte un lote de imágenes en formatos mezclados',
        description:
          'Suba cualquier combinación de archivos JPG, PNG, WebP, HEIC, SVG, BMP, GIF o AVIF de hasta 25 MB cada uno a la zona de subida.',
      },
      {
        title: 'Elija el formato objetivo: WebP, JPG o PNG',
        description:
          'Elija WebP (el más ligero para web) para la velocidad del sitio, JPG (universal) para compartir ampliamente, o PNG (sin pérdida y con transparencia) para gráficos nítidos.',
      },
      {
        title: 'Sufijo de nombre opcional y relleno transparente',
        description:
          'Escriba un sufijo de nombre opcional como _web (o déjelo en blanco) y seleccione un color mate de Relleno transparente si convierte imágenes con alfa a JPG.',
      },
      {
        title: 'Defina el porcentaje de calidad de salida',
        description:
          'Ajuste el deslizador de calidad del 10 % al 100 % para exportaciones WebP o JPG (se desactiva automáticamente cuando está activo el PNG sin pérdida).',
      },
      {
        title: 'Revise los totales del lote y las comparaciones visuales',
        description:
          'Inspeccione los cambios de bytes por archivo y el banner de Resumen de conversión en lote, y abra Comparar en elementos de muestra para verificar la nitidez.',
      },
      {
        title: 'Guarde archivos individuales o Descargar todo (ZIP)',
        description:
          'Pulse Descargar en tarjetas individuales o Descargar todo (ZIP) para exportar bulk_converted_webp.zip, bulk_converted_jpg.zip o bulk_converted_png.zip.',
      },
    ],
    features: [
      {
        title: 'Flujo de lote con entradas mezcladas',
        description: 'Suelte HEIC, PNG, SVG y JPEG juntos en un lote y unifíquelos en un solo formato.',
      },
      {
        title: 'Opciones de mate de transparencia y sufijo',
        description: 'Personalice fondos mate blancos o de color para JPG y agregue sufijos de nombre opcionales limpiamente.',
      },
      {
        title: 'Resumen de tamaño del lote',
        description: 'Vea el tamaño original total frente al tamaño convertido total de todo el lote.',
      },
      {
        title: 'WebAssembly y Canvas 100 % locales',
        description: 'Ningún archivo se sube jamás: incluso la conversión HEIC de iPhone corre en su dispositivo.',
      },
    ],
    faqs: [
      {
        question: '¿Puedo mezclar distintos tipos de archivo en la misma cola del conversor de imágenes en lote?',
        answer:
          'Sí. Puede soltar fotos HEIC de Apple, AVIF modernos, PNG transparentes, SVG vectoriales, BMP antiguos, GIF, WebP y JPG en la misma pasada de subida y exportar toda la colección en un formato uniforme.',
      },
      {
        question: '¿Por qué ayuda el sufijo de nombre opcional al convertir lotes de imágenes?',
        answer:
          'Escribir una etiqueta como _web o _v2 añade ese sufijo justo antes de la nueva extensión, produciendo nombres limpios como hero_web.webp. Eso evita que los recursos recién convertidos choquen con archivos fuente de nombre similar en carpetas de proyecto compartidas.',
      },
      {
        question: '¿Cómo calcula el Resumen de conversión en lote el impacto total del lote?',
        answer:
          'Una vez que terminan los archivos, el banner oscuro de resumen suma los bytes originales de cada archivo convertido y muestra junto a ellos el total de bytes convertidos. Así puede revisar de inmediato los cambios de almacenamiento o ancho de banda de toda una carpeta.',
      },
      {
        question: '¿Qué ocurre si unifico PNG y SVG transparentes en formato JPG en el conversor en lote?',
        answer:
          'Al seleccionar JPG (universal) aparece el selector de color de Relleno transparente (#ffffff blanco por defecto). Cualquier zona transparente con alfa en sus PNG o SVG se funde suavemente sobre ese tono de fondo elegido, en lugar de volverse negra sólida.',
      },
      {
        question: '¿Por qué queda inactivo el control de calidad al elegir PNG sin pérdida en el conversor en lote?',
        answer:
          'El PNG usa codificación DEFLATE sin pérdida, que preserva cada píxel decodificado de forma idéntica sin niveles de calidad con pérdida. En cuanto elige WebP o JPG, el deslizador de calidad del 10 % al 100 % se desbloquea de inmediato.',
      },
      {
        question: '¿Puedo convertir una carpeta de fotos mezcladas dos veces —una a WebP y otra a JPG— sin volver a subirlas?',
        answer:
          'Sí. Cambie Convertir lote a formato de WebP a JPG en cualquier momento, actualice opcionalmente su sufijo de nombre y pulse Convertir todo (N) para reprocesar los archivos en caché en memoria y obtener un segundo ZIP.',
      },
      {
        question: '¿Cómo identifica el nombre del ZIP el formato objetivo que exporté en el conversor en lote?',
        answer:
          'Al pulsar Descargar todo (ZIP) se crea directamente en su navegador bulk_converted_webp.zip, bulk_converted_jpg.zip o bulk_converted_png.zip. Tener el formato en el nombre del archivo facilita distinguir varias exportaciones de formato en su carpeta de Descargas.',
      },
      {
        question: '¿Unificar todo en WebP mantiene la transparencia alfa en logotipos PNG e íconos SVG?',
        answer:
          'Sí. Tanto WebP (el más ligero para web) como PNG (sin pérdida y con transparencia) conservan la transparencia completa de 8 bits de los PNG transparentes, los WebP y los archivos SVG independientes limpiamente.',
      },
      {
        question: '¿Qué ocurre si un navegador antiguo no puede decodificar un archivo AVIF mezclado dentro de mi lote?',
        answer:
          'Si un archivo usa un códec que su navegador no admite, como AVIF en un navegador desactualizado, solo esa tarjeta específica muestra un aviso explícito de error. Todos los demás elementos JPG, PNG o HEIC del mismo lote terminan con normalidad.',
      },
      {
        question: '¿Se convierten los lotes HEIC de iPhone en un servidor remoto en la nube?',
        answer:
          'No. Incluso la decodificación HEIC y HEIF de Apple corre en local dentro de la pestaña de su navegador con WebAssembly del lado del cliente, antes de que HTML5 Canvas codifique el formato de salida que eligió.',
      },
      {
        question: '¿Qué tamaño pueden tener los archivos individuales dentro del conversor de imágenes en lote?',
        answer:
          'Cada imagen individual de su cola de lote puede pesar hasta 25 MB. Ese margen cubre con facilidad fotos de cámara de muchos megapíxeles, exportaciones PNG en capas y archivos BMP sin comprimir.',
      },
      {
        question: '¿Qué ocurre cuando se incluyen GIF animados en una carpeta de conversión en lote?',
        answer:
          'HTML5 Canvas rasteriza el fotograma inicial de cualquier .gif subido en un archivo WebP, JPG o PNG estático y nítido, conservando el ancho y el alto completos. Use nuestro Compresor de GIF si quiere mantener intacta la animación en bucle.',
      },
      {
        question: '¿La conversión de formato en lote cambia el ancho y el alto originales de la imagen?',
        answer:
          'No, cada salida conserva el 100 % de su ancho y alto originales en píxeles, sin tocarlos. Use el Redimensionador de imágenes en lote cuando necesite cambiar el tamaño o limitar las dimensiones de la imagen al mismo tiempo.',
      },
      {
        question: '¿Por qué convertir JPEG comprimidos a PNG puede hacer que el total del resumen del lote se vea más grande?',
        answer:
          'El PNG sin pérdida guarda muchos más datos por píxel fotográfico que el JPEG con pérdida. A menos que un flujo de trabajo exija estrictamente .png, convertir lotes web mezclados a WebP al 85 % suele ahorrar mucho espacio manteniendo una calidad nítida.',
      },
      {
        question: '¿Se conservan las etiquetas EXIF de la cámara después de convertir una carpeta mezclada?',
        answer:
          'No. Al dibujar las imágenes en HTML5 Canvas se eliminan los bloques de metadatos EXIF, los números de serie de la cámara y las etiquetas GPS de cada archivo convertido limpiamente.',
      },
      {
        question: '¿Puedo comparar los píxeles originales y convertidos en tarjetas individuales antes de exportar el ZIP?',
        answer:
          'Sí. Pulse Comparar en cualquier tarjeta de archivo terminada para inspeccionar los bordes finos y los colores lado a lado en el visor de comparación dividida.',
      },
      {
        question: '¿Qué ocurre si agrego más archivos después de convertir mi primer lote?',
        answer:
          'Los archivos recién soltados se convierten automáticamente con el formato objetivo, la calidad, el sufijo y el relleno mate seleccionados actualmente. Luego se fusionan limpiamente en su cola activa y en el resumen ZIP compartido.',
      },
      {
        question: '¿Se incluyen las fuentes web externas o las imágenes remotas enlazadas dentro de archivos SVG durante la conversión en lote?',
        answer:
          'Por seguridad del navegador, HTML5 Canvas aísla los SVG independientes y bloquea la descarga de URL remotas o fuentes web externas. Los SVG autocontenidos con rutas, degradados y CSS incrustado se convierten limpiamente.',
      },
      {
        question: '¿Puedo eliminar una sola imagen fallida o no deseada de la lista convertida en lote?',
        answer:
          'Sí. Pulse el botón de papelera de cualquier tarjeta para excluirla de la lista y reconstruir el resumen y la descarga ZIP con los archivos restantes.',
      },
      {
        question: '¿Cuándo debería elegir este conversor en lote en lugar de conversores de un solo par como HEIC a JPG?',
        answer:
          'Las herramientas de un solo par preconfiguran filtros de archivo estrictos y valores predeterminados para una ruta de migración específica. Abra este conversor de imágenes en lote cuando una carpeta tenga varias extensiones distintas que deban convertirse a WebP, JPG o PNG a la vez.',
      },
    ],
    relatedSlugs: ['/image-converter', '/bulk-image-compressor', '/bulk-image-resizer', '/web-image-optimizer'],
  },

  {
    slug: '/web-image-optimizer',
    name: 'Optimizador de imágenes para web',
    shortDescription: 'Optimice imágenes de encabezado, producto y tarjeta para la velocidad de Core Web Vitals.',
    category: 'compress',
    seoTitle: 'Optimizador de imágenes web gratis – Acelere Core Web Vitals',
    seoDescription:
      'Achique recursos pesados de página gratis online con el optimizador web, en su navegador. Use plantillas WebP, elimine EXIF y copie etiquetas HTML img listas.',
    h1: 'Optimizador de imágenes para web (listo para Core Web Vitals)',
    subtitle:
      'Prepare gráficos web de carga rápida diseñados para Core Web Vitals (LCP y CLS) con nuestro optimizador de imágenes para web gratis, directamente en su navegador. Pensado para desarrolladores front-end, comerciantes de Shopify y SEO técnicos, combina plantillas probadas de WebP y JPG para espacios web, hasta 25 MB por archivo, con eliminación automática de EXIF, etiquetas HTML <img> copiables y descargas en un solo ZIP.',
    howToSteps: [
      {
        title: 'Seleccione una de las 5 plantillas de rendimiento web',
        description:
          'Elija Encabezado / Banner (1600 px WebP 80 %), Producto de comercio electrónico (1200 px WebP 82 %), Tarjeta / Miniatura (640 px WebP 75 %), OG social / Correo (1200 px JPG 82 %) o Gráfico Retina 2× (1920 px WebP 88 %).',
      },
      {
        title: 'Personalice el formato web, la dimensión máxima o la calidad',
        description:
          'Cambie entre WebP, JPG o PNG, ajuste la Dimensión máxima (borde largo) de 640 px a 1920 px (o Conservar dimensiones originales) y afine la Calidad del 20 % al 95 %.',
      },
      {
        title: 'Suelte los recursos web sin procesar en la zona de subida',
        description:
          'Suba imágenes JPG, PNG, WebP, HEIC, SVG, BMP, GIF o AVIF de hasta 25 MB cada una, con la opción Solo reducir imágenes más grandes marcada para evitar inflar los íconos pequeños.',
      },
      {
        title: 'Revise el ahorro de peso de página y compare la calidad',
        description:
          'Revise el Resumen de rendimiento web para ver el peso total de página ahorrado, verifique las insignias Listo para web por tarjeta e inspeccione los bordes lado a lado con Comparar.',
      },
      {
        title: 'Copie fragmentos HTML <img> responsivos',
        description:
          'Pulse Copiar <img> en cualquier tarjeta terminada para obtener el marcado listo para pegar, con ancho, alto, loading="lazy" y decoding="async".',
      },
      {
        title: 'Descargue recursos -web individuales o el paquete ZIP',
        description:
          'Guarde archivos individuales <nombre>-web o pulse Descargar todo (ZIP) para descargar web_optimized_compressmypic.zip limpiamente.',
      },
    ],
    features: [
      {
        title: 'Plantillas listas para web',
        description: 'Límites de dimensión preconfigurados y puntos ideales de calidad WebP/JPG pensados para LCP y PageSpeed Insights.',
      },
      {
        title: 'Fragmento HTML <img> copiable',
        description: 'Genera atributos responsivos de ancho, alto, loading="lazy" y decoding="async" para evitar el cambio de diseño (CLS).',
      },
      {
        title: 'Eliminación automática de EXIF y protección contra ampliación',
        description: 'Elimina los metadatos inflados de la cámara y evita ampliar sin necesidad los íconos más pequeños.',
      },
      {
        title: 'Inspector interactivo de antes y después',
        description: 'Verifique la claridad visual lado a lado antes de desplegar los recursos en producción.',
      },
    ],
    faqs: [
      {
        question: '¿Cómo se asignan las cinco plantillas de rendimiento web a espacios reales del sitio?',
        answer:
          'Encabezado / Banner limita a 1600 px WebP (80 %), Producto de comercio electrónico limita a 1200 px WebP (82 %), Tarjeta / Miniatura limita a 640 px WebP (75 %), OG social / Correo genera JPG de 1200 px (82 %) para compatibilidad con rastreadores, y Gráfico Retina 2× conserva hasta 1920 px WebP (88 %). Al pulsar cualquier plantilla también se vuelven a optimizar automáticamente los archivos cargados.',
      },
      {
        question: '¿Cómo ayuda el botón Copiar <img> a mejorar las puntuaciones de Core Web Vitals?',
        answer:
          'Al pulsar Copiar <img> se copia una etiqueta HTML semántica con los atributos exactos de ancho y alto de salida, además de loading="lazy" y decoding="async". Las dimensiones explícitas permiten que los navegadores reserven el espacio exacto durante el diseño de la página para eliminar el cambio de diseño acumulado (CLS).',
      },
      {
        question: '¿Debería conservar loading="lazy" en mi imagen principal de encabezado después de copiar la etiqueta HTML?',
        answer:
          'Para las tarjetas y las imágenes debajo del pliegue, loading="lazy" es ideal. Para su única imagen principal de Encabezado / Banner LCP visible de inmediato al cargar, quite loading="lazy" (o ponga fetchpriority="high") en su código para que el navegador la descargue de inmediato.',
      },
      {
        question: '¿Por qué OG social / Correo cambia el formato web de WebP a JPG en el optimizador web?',
        answer:
          'Algunos rastreadores de enlaces sociales, versiones antiguas de Slack/Outlook y plataformas de boletines aún rechazan o no muestran de forma fiable las vistas previas OpenGraph en WebP. Elegir JPG de 1200 px al 82 % ofrece carga rápida junto con tarjetas de vista previa sólidas en todas partes.',
      },
      {
        question: '¿Por qué la opción Solo reducir imágenes más grandes protege los íconos de interfaz y las miniaturas pequeñas?',
        answer:
          'Con esa casilla activada, al subir un avatar de autor de 400×400 px mientras está seleccionado Producto de comercio electrónico (máx. 1200 px), el avatar queda en 400×400 px en lugar de difuminarse hacia arriba a 1200 px. Al desmarcarla, los recursos más pequeños se amplían hasta el borde largo elegido si es estrictamente necesario.',
      },
      {
        question: '¿Cómo recorta peso extra de la página web la eliminación de metadatos EXIF y GPS?',
        answer:
          'Las exportaciones de cámara suelen incrustar de 30 KB a 150 KB de vistas previas en miniatura, historiales de edición de Lightroom y coordenadas GPS dentro de bloques EXIF. La recodificación en HTML5 Canvas elimina todo ese exceso que no son píxeles limpiamente antes del despliegue.',
      },
      {
        question: '¿Por qué los archivos descargados terminan automáticamente en -web en su nombre?',
        answer:
          'Cada salida añade -web antes de su extensión, produciendo nombres limpios como zapatilla-web.webp. Eso permite a los desarrolladores soltar recursos de producción en carpetas públicas sin sobrescribir los originales maestros de alta resolución.',
      },
      {
        question: '¿Cómo se genera el atributo alt dentro de Copiar <img> en el optimizador web?',
        answer:
          'El fragmento quita automáticamente la extensión del nombre de archivo y convierte los guiones y guiones bajos de su nombre original en espacios legibles dentro de alt="...". Asegúrese de pulirlo en una frase humana descriptiva al pegarlo en el HTML de producción.',
      },
      {
        question: '¿Por qué el optimizador de imágenes para web usa por defecto Producto de comercio electrónico (máx. 1200 px · WebP 82 %)?',
        answer:
          '1200 px de ancho con WebP al 82 % ofrece una calidad nítida de zoom de producto tanto en celulares Retina como en portátiles estándar, mientras reduce archivos DSLR de varios megabytes entre un 80 % y un 95 %. Evita tanto los recortes demasiado suaves de 640 px como los originales inflados de 4000 px.',
      },
      {
        question: '¿Por qué un PNG pequeño ya comprimido puede volverse rojo con una advertencia de crecimiento cuando el formato web es PNG?',
        answer:
          'Recodificar un PNG diminuto con paleta indexada a través de HTML5 Canvas a todo color, sin cambiar las dimensiones, puede producir un PNG sin pérdida un poco más pesado. Cambie el Formato web a WebP para conservar la transparencia a una fracción del peso en bytes.',
      },
      {
        question: '¿Puedo optimizar en lote 30 imágenes sin procesar de un blog para la velocidad de Lighthouse con un clic?',
        answer:
          'Sí. Suelte hasta 25 MB por archivo en todo su conjunto de medios del blog, revise el Resumen de rendimiento web que muestra el peso total de página ahorrado y tome web_optimized_compressmypic.zip cuando terminen 2 o más archivos.',
      },
      {
        question: '¿Por qué la calidad del optimizador web se limita al rango del 20 % al 95 %?',
        answer:
          'Guardar WebP o JPG con calidad del 100 % dispara el peso en bytes de forma exponencial, con una diferencia visible prácticamente nula en pantallas web, lo que perjudica el Largest Contentful Paint (LCP). Limitarlo al 95 % mantiene los gráficos Retina 2× muy nítidos sin cargas accidentales de 10 MB.',
      },
      {
        question: '¿La salida WebP conserva los fondos transparentes de los PNG y SVG subidos al optimizador web?',
        answer:
          'Sí. Cuando el Formato web está en WEBP o PNG, la transparencia alfa completa se mantiene totalmente intacta, mientras que al seleccionar JPG las zonas transparentes se componen sobre blanco limpio (#ffffff).',
      },
      {
        question: '¿Se suben a servidores externos las capturas del sitio en pruebas o los lanzamientos de producto inéditos?',
        answer:
          'No. El redimensionado por plantilla, la codificación WebP, la eliminación de EXIF y la generación de etiquetas HTML se ejecutan estrictamente dentro de la pestaña de su navegador, manteniendo privados los gráficos de marketing bajo embargo.',
      },
      {
        question: '¿Puedo personalizar una mezcla de ajustes después de pulsar una plantilla de rendimiento web?',
        answer:
          'Sí. Al cambiar manualmente el Formato web, la Dimensión máxima o la Calidad, el indicador de plantilla activa pasa limpiamente a personalizado, para que pueda pulsar Optimizar para web (N) con su receta exacta a medida.',
      },
      {
        question: '¿Qué ocurre si subo una foto HEIC de iPhone directamente para mi blog en el optimizador web?',
        answer:
          'WebAssembly del lado del cliente decodifica fotos HEIC y HEIF de hasta 25 MB de forma nativa dentro de la pestaña de su navegador. Luego su navegador las redimensiona a la Dimensión máxima elegida y codifica recursos ligeros WebP o JPG listos para publicar.',
      },
      {
        question: '¿Cómo se compara la plantilla Tarjeta / Miniatura con Gráfico Retina 2× en el optimizador web?',
        answer:
          'Tarjeta / Miniatura limita los bordes largos a 640 px con WebP al 75 % para mantener ultra ligeras las cuadrículas de archivo con varias tarjetas. En cambio, Gráfico Retina 2× permite hasta 1920 px con WebP al 88 %, para que las capturas de exhibición de alta densidad de píxeles se mantengan muy nítidas.',
      },
      {
        question: '¿Conservar dimensiones originales sigue comprimiendo y eliminando metadatos EXIF en el optimizador web?',
        answer:
          'Sí. Al seleccionar Conservar dimensiones originales, el ancho y el alto en píxeles quedan intactos, mientras se convierte a su Formato web elegido, se aplica su deslizador de calidad y se eliminan las etiquetas EXIF ocultas.',
      },
      {
        question: '¿Puedo verificar visualmente el texto nítido de la interfaz en capturas antes de publicarlas en mi documentación?',
        answer:
          'Sí. Al pulsar Comparar en cualquier tarjeta se abre el visor de comparación lado a lado, para que pueda revisar la claridad del texto antes de desplegarlo.',
      },
      {
        question: '¿Cuándo debería usar este optimizador de imágenes para web en lugar del compresor de imágenes en lote?',
        answer:
          'Use el compresor de imágenes en lote cuando quiera conservar las dimensiones originales en archivos mezclados. Elija este optimizador de imágenes para web cuando construya páginas web de producción que se beneficien de límites de dimensión responsivos, plantillas WebP, eliminación de EXIF y etiquetas HTML <img> copiables.',
      },
    ],
    relatedSlugs: ['/bulk-image-compressor', '/compress-image-to-100kb', '/image-resizer', '/image-converter'],
  },

  {
    slug: '/gif-compressor',
    name: 'Compresor de GIF',
    shortDescription: 'Comprima GIF animados reduciendo los colores de paleta, la escala y los fotogramas.',
    category: 'compress',
    seoTitle: 'Compresor de GIF gratis online – Achique GIF animados',
    seoDescription:
      'Reduzca animaciones en bucle gratis online con el compresor de GIF, en su navegador. Baje la paleta, escale las dimensiones o elimine fotogramas repetidos.',
    h1: 'Compresor de GIF animados gratis online',
    subtitle:
      'Achique GIF87a y GIF89a pesados en bucle limpiamente dentro de su navegador con nuestro compresor de GIF animados gratis, sin convertirlos en imágenes fijas. Pensado para Slack, Discord, especialistas de correo y autores de documentación que manejan archivos de hasta 30 MB, combina tres palancas reales de compresión —Límite de colores de paleta, Escala de salida y Optimización de velocidad de fotogramas— con reproducción animada en vivo lado a lado.',
    howToSteps: [
      {
        title: 'Suelte un GIF animado o estático de hasta 30 MB',
        description:
          'Suba cualquier archivo .gif (hasta 30 MB) a la zona de subida para decodificar sus fotogramas, dimensiones, métodos de eliminación y retrasos de tiempo en local.',
      },
      {
        title: 'Elija una plantilla rápida o ajuste los valores manualmente',
        description:
          'Pulse Ligero (192 colores, 100 %), Equilibrado (96 colores, 85 %) o Máxima reducción (64 colores, 75 %, eliminar cada 2.º fotograma), o ajuste cada palanca manualmente.',
      },
      {
        title: 'Baje el límite de colores de paleta (16–256 colores)',
        description:
          'Arrastre el deslizador de Límite de colores de paleta de 256 hacia 32 o 16 colores (o pulse los botones rápidos 256, 128, 64, 32) para achicar las tablas de color LZW.',
      },
      {
        title: 'Ajuste la escala de salida y la optimización de velocidad de fotogramas',
        description:
          'Elija una plantilla de Escala de salida (100 %, 85 %, 75 %, 50 % o 25 %) y elimine opcionalmente cada 2.º fotograma o 2 de cada 3 fotogramas, conservando automáticamente la velocidad real de reproducción.',
      },
      {
        title: 'Ejecute Comprimir GIF y compare las animaciones en vivo',
        description:
          'Observe las vistas previas animadas en vivo de Original y Comprimido lado a lado y revise los bytes exactos, el conteo de fotogramas y el porcentaje de ahorro.',
      },
      {
        title: 'Descargue el GIF comprimido',
        description:
          'Pulse Descargar GIF comprimido para guardar <nombre>_compressed.gif en local, sin viajes al servidor ni marcas de agua.',
      },
    ],
    features: [
      {
        title: 'Recodificación GIF real en el cliente',
        description: 'Decodifica los fotogramas, los métodos de eliminación y los conteos de bucle en local, y luego recodifica con cuantización de color cargada bajo demanda, sin subidas al servidor.',
      },
      {
        title: 'Tres palancas de compresión',
        description: 'Achique el tamaño con la reducción de colores de paleta (256 → 32 colores), el escalado de dimensiones (100 % → 25 %) y la omisión inteligente de fotogramas.',
      },
      {
        title: 'Omisión de fotogramas que preserva el tiempo',
        description: 'Al eliminar cada 2.º o 3.er fotograma, los retrasos de los fotogramas conservados se combinan automáticamente para que la velocidad de reproducción se mantenga natural.',
      },
      {
        title: 'Comparación honesta de bytes',
        description: 'Muestra el tamaño exacto de archivo de antes y después y el conteo de fotogramas, y le dice con claridad cuándo hace falta una reducción más fuerte de paleta o escala.',
      },
    ],
    faqs: [
      {
        question: '¿El compresor de GIF conserva el tiempo completo de animación, los conteos de bucle y el movimiento?',
        answer:
          'Sí. Decodifica cada fotograma individual del GIF, su retraso en milisegundos por fotograma, su método de eliminación y sus metadatos de bucle en local, y luego recodifica un archivo GIF89a animado genuino, en lugar de aplanarlo en una imagen fija.',
      },
      {
        question: '¿Cómo mantiene natural la velocidad de animación el compresor de GIF al eliminar fotogramas?',
        answer:
          'Al elegir Eliminar cada 2.º fotograma o Conservar 1 de cada 3 fotogramas, el compresor suma las duraciones en milisegundos de los fotogramas omitidos a los fotogramas conservados restantes. El tiempo total del bucle se mantiene preciso mientras los datos totales de fotogramas se reducen a la mitad o a dos tercios.',
      },
      {
        question: '¿Qué ajustes exactos aplican Ligero, Equilibrado y Máxima reducción en el compresor de GIF?',
        answer:
          'Ligero fija 192 colores de paleta con escala del 100 % conservando todos los fotogramas, mientras que Equilibrado baja a 96 colores y escala del 85 % conservando todos los fotogramas. Máxima reducción combina 64 colores, escala del 75 % y Eliminar cada 2.º fotograma para límites agresivos de archivos de Discord o Slack.',
      },
      {
        question: '¿Por qué mi primera compresión Equilibrada o de 128 colores salió un poco más grande que un GIF diminuto existente?',
        answer:
          'Los GIF bien optimizados creados con herramientas de escritorio suelen depender de pequeños parches de rectángulo sucio entre fotogramas, mientras que la recodificación en Canvas construye fotogramas completos cuantizados y limpios. Si aparece el aviso ámbar, baje el Límite de colores de paleta a 64 o 32 colores, reduzca la Escala de salida al 75 % o 50 %, o elimine cada 2.º fotograma.',
      },
      {
        question: '¿Qué palanca reduce más rápido el tamaño de un GIF animado sin arruinar las grabaciones de pantalla?',
        answer:
          'Bajar la Escala de salida del 100 % al 75 % o 50 % recorta el área de píxeles entre un 44 % y un 75 % de inmediato, manteniendo legible el texto de la interfaz. Combinar la escala del 75 % con 64–96 colores de paleta funciona especialmente bien para screencasts de documentación.',
      },
      {
        question: '¿Por qué se desactivan los botones de optimización de velocidad de fotogramas en un GIF de 1 o 2 fotogramas?',
        answer:
          'Eliminar cada segundo o tercer fotograma en un archivo de 1 o 2 fotogramas no dejaría ningún movimiento. Esos botones de omisión de fotogramas se bloquean automáticamente cuando un GIF decodificado tiene 2 fotogramas o menos.',
      },
      {
        question: '¿Hasta cuántos megabytes de GIF animado acepta el compresor de GIF por archivo?',
        answer:
          'Puede subir animaciones GIF87a o GIF89a de hasta 30 MB por archivo. El progreso se muestra limpiamente como Comprimiendo GIF (X%)... mientras su navegador cuantiza y recodifica cada fotograma conservado.',
      },
      {
        question: '¿Reducir el límite de colores de paleta por debajo de 64 colores afecta distinto a los GIF fotográficos que a los screencasts de interfaz?',
        answer:
          'Sí. Las animaciones planas de interfaz de software con pocos colores de marca siguen viéndose nítidas con 32 o 64 colores, mientras que los clips de video de acción real con degradados de piel muestran posterización con paletas muy bajas; por eso, bajar un poco la escala o la velocidad de fotogramas suele ser más limpio para los clips de película.',
      },
      {
        question: '¿Puedo ver en vista previa las animaciones original y comprimida lado a lado antes de descargar?',
        answer:
          'Sí. Justo debajo de la barra oscura de resumen de bytes, dos reproductores animados en vivo muestran los GIF Original y Comprimido al mismo tiempo, con las dimensiones exactas en píxeles y los tamaños de archivo, para que pueda detectar cualquier tirón o bandeo de inmediato.',
      },
      {
        question: '¿Cuál es la resolución mínima de salida al elegir Escala de salida del 25 % en GIF pequeños de stickers?',
        answer:
          'Las dimensiones de salida se limitan con seguridad a un mínimo de 16×16 píxeles por lado. Eso evita que los GIF de reacción diminutos colapsen en archivos inválidos de cero píxeles incluso con la opción de escala del 25 %.',
      },
      {
        question: '¿Puedo ejecutar varias pruebas de compresión en el mismo GIF subido sin actualizar la página?',
        answer:
          'Sí. El búfer de fotogramas decodificados queda en caché en la memoria, así que puede ajustar libremente el Límite de colores de paleta (16–256), la Escala de salida o la Optimización de velocidad de fotogramas y pulsar Comprimir GIF de nuevo en segundos.',
      },
      {
        question: '¿Cómo corre el compresor de GIF dentro de mi navegador sin subir animaciones grandes a un servidor?',
        answer:
          'Decodifica los fotogramas directamente desde el ArrayBuffer subido en JavaScript y carga bajo demanda un codificador GIF LZW ligero y un cuantizador de color. Los screencasts privados de Slack, los informes de errores y las demostraciones de producto nunca salen de su dispositivo.',
      },
      {
        question: '¿Por qué los GIF se comprimen menos que los videos MP4 del mismo clip?',
        answer:
          'El GIF es un formato de fotogramas de 256 colores con compresión LZW sin pérdida de 1989, sin la compensación moderna de movimiento temporal entre fotogramas. Combinar una reducción moderada (75 %–50 %), paletas más bajas (64–96 colores) y la omisión de fotogramas 2× ofrece el mejor ahorro posible de bytes dentro de la especificación estándar .gif.',
      },
      {
        question: '¿Comprimir un GIF animado con píxeles transparentes conserva la transparencia del fondo?',
        answer:
          'Sí. Los índices de transparencia y los métodos de eliminación de fotogramas decodificados de su GIF original se siguen entre fotogramas durante la recodificación en el navegador.',
      },
      {
        question: '¿Qué nombre de archivo se usa al guardar la animación optimizada del compresor de GIF?',
        answer:
          'Al pulsar Descargar GIF comprimido se exporta un nombre saneado que termina en _compressed.gif, como demo_walkthrough_compressed.gif. Su animación maestra original queda completamente intacta en el disco.',
      },
      {
        question: '¿Puedo achicar un GIF para cumplir los límites de subida de Discord de 8 MB/10 MB o de Slack?',
        answer:
          'Sí. Suelte cualquier animación de hasta 30 MB, pruebe Equilibrado o Máxima reducción, revise la lectura en vivo del tamaño Comprimido justo en la parte superior de la tarjeta de resumen y ajuste la Escala de salida al 50 % si necesita más reducción de peso.',
      },
      {
        question: '¿Restablecer limpia por completo la memoria de fotogramas en caché del compresor de GIF?',
        answer:
          'Sí. Al pulsar Restablecer se revocan las URL de blob activas y se borran los búferes de fotogramas decodificados de la memoria del navegador, para que pueda cargar otro GIF pesado sin problema.',
      },
      {
        question: '¿En qué se diferencia el compresor de GIF del creador de GIF?',
        answer:
          'El creador de GIF construye animaciones nuevas a partir de imágenes fijas separadas en JPG, PNG o WebP. En cambio, este compresor de GIF toma una animación .gif pesada existente y achica su tamaño de archivo con la reducción de paleta, escala y fotogramas.',
      },
      {
        question: '¿Puedo subir también archivos .gif estáticos de un solo fotograma al compresor de GIF?',
        answer:
          'Sí. Los GIF estáticos de un solo fotograma se cargan como archivos de 1 fotograma, donde puede achicar las dimensiones con la Escala de salida y bajar el Límite de colores de paleta hasta 16 colores limpiamente.',
      },
      {
        question: '¿Se aplican marcas de agua, límites de fotogramas o colas de servidor a los GIF comprimidos?',
        answer:
          'No. La compresión se ejecuta en local a toda la velocidad del navegador, sin marcas de agua, sin registros y con repeticiones ilimitadas.',
      },
    ],
    relatedSlugs: ['/gif-maker', '/bulk-image-compressor', '/image-resizer', '/'],
  },

  {
    slug: '/heic-to-jpg',
    name: 'HEIC a JPG',
    shortDescription: 'Convierta fotos HEIC/HEIF de iPhone de Apple a JPG universal en el navegador.',
    category: 'convert',
    seoTitle: 'Conversor de HEIC a JPG gratis – Convierta fotos de iPhone',
    seoDescription:
      'Convierta fotos de Apple a archivos universales gratis online con el conversor de HEIC a JPG. Decodificación local con WebAssembly en privado, con ZIP.',
    h1: 'Conversor de HEIC a JPG gratis online',
    subtitle:
      'Transforme las fotos HEIC o HEIF de la cámara de su iPhone o iPad de Apple en archivos .jpg universalmente legibles con nuestro conversor de HEIC a JPG gratis, que corre en local en su navegador. Ideal para usuarios de Windows, solicitantes de empleo y laboratorios de fotos que rechazan el formato de alta eficiencia de Apple, decodifica hasta 25 MB por archivo con WebAssembly del lado del cliente, con calidad ajustable y descargas en lote en un solo ZIP.',
    howToSteps: [
      {
        title: 'Suelte fotos HEIC o HEIF de Apple',
        description:
          'Seleccione o arrastre una o varias imágenes .heic o .heif (hasta 25 MB cada una) directamente desde su iPhone, Mac, copia de seguridad en la nube o carpeta de Windows.',
      },
      {
        title: 'Espere brevemente la decodificación local con WebAssembly',
        description:
          'La página carga WebAssembly del lado del cliente (heic2any) directamente dentro de la pestaña de su navegador para decodificar en privado el contenedor de imágenes HEVC de Apple.',
      },
      {
        title: 'Ajuste la calidad de salida JPG (20 %–100 %)',
        description:
          'Mantenga el 90 % predeterminado, casi sin pérdida, para retratos familiares e impresiones, o deslice hacia el 75 %–85 % para adjuntos de correo más ligeros, y luego pulse Volver a convertir todo.',
      },
      {
        title: 'Revise las dimensiones en píxeles y la comparación de tamaño',
        description:
          'Revise los conteos de bytes del HEIC original frente al JPG de salida en cada tarjeta y abra el deslizador Comparar para verificar el detalle nítido.',
      },
      {
        title: 'Descargue archivos JPG o Descargar todo (ZIP)',
        description:
          'Guarde fotos .jpg individuales directamente o pulse Descargar todo (ZIP) para descargar compressmypic_heic_to_jpg.zip con un clic.',
      },
    ],
    features: [
      {
        title: 'Decodificación HEIC con WebAssembly en el cliente',
        description: 'Usa heic2any dentro de la pestaña de su navegador, para que las fotos privadas de su cámara nunca se suban a servidores externos.',
      },
      {
        title: 'Conversión en lote y exportación ZIP',
        description: 'Convierta carpetas enteras de fotos HEIC de iPhone a JPG en una sola cola y tome todo en un ZIP.',
      },
      {
        title: 'Deslizador de calidad JPG personalizado',
        description: 'Ajuste la compresión de salida del 20 % al 100 % según priorice el detalle o el tamaño diminuto del archivo.',
      },
      {
        title: 'Privacidad EXIF eliminada por Canvas',
        description: 'La recodificación en Canvas elimina de forma natural las coordenadas GPS ocultas y los metadatos de serie de la cámara.',
      },
    ],
    faqs: [
      {
        question: '¿Por qué las PC con Windows, el software antiguo y los formularios de subida rechazan las fotos .heic de iPhone?',
        answer:
          'Apple adoptó el contenedor HEIC (basado en compresión de video HEVC) a partir de iOS 11 para ahorrar espacio de almacenamiento en iPhones y iPads. Como muchas instalaciones de Windows, portales gubernamentales, sistemas CMS y editores de escritorio carecen de códecs HEVC con licencia, convertir HEIC a JPG estándar hace que sus fotos se abran en todas partes al instante.',
      },
      {
        question: '¿Cómo decodifica este conversor de HEIC a JPG los archivos de Apple dentro de un navegador web estándar?',
        answer:
          'La mayoría de los navegadores no pueden mostrar píxeles HEIC de forma nativa en etiquetas de imagen estándar en Windows o Linux. Esta herramienta ejecuta el decodificador WebAssembly heic2any del lado del cliente dentro de su propia pestaña, para que su navegador traduzca los flujos HEIC a píxeles RGB limpiamente, sin servidores remotos en la nube.',
      },
      {
        question: '¿Se suben a algún lugar las fotos personales de la cámara, los selfis de identificación o las vacaciones familiares durante la conversión?',
        answer:
          'Nunca. Tanto el paso de decodificación HEIC con WebAssembly como el paso de codificación JPEG en HTML5 Canvas ocurren en local en la memoria de su navegador, así que las fotos personales nunca salen de su computadora o celular.',
      },
      {
        question: '¿Cuál es la diferencia entre los archivos .heic y .heif en el conversor de HEIC a JPG?',
        answer:
          'HEIF es el estándar subyacente de archivos de imagen de alta eficiencia, mientras que HEIC es la extensión de nombre de archivo de Apple para contenedores HEIF codificados con HEVC. Ambas extensiones .heic y .heif (y sus tipos MIME correspondientes) se aceptan y se decodifican sin problema a .jpg.',
      },
      {
        question: '¿Por qué el archivo JPG convertido suele salir más grande en megabytes que el HEIC original?',
        answer:
          'La codificación HEVC de Apple empaqueta los datos de imagen aproximadamente al doble de densidad que el JPEG clásico con una calidad visual similar. Expandir un HEIC de 1,8 MB a un JPG de alta calidad al 90 % suele producir un archivo de 2,5 MB a 3,5 MB, y bajar la calidad de salida JPG hacia el 80 % ayuda a recortar ese tamaño si hace falta.',
      },
      {
        question: '¿Por qué el 90 % es la calidad de salida JPG predeterminada para las fotos de iPhone?',
        answer:
          'Con el 90 %, el JPEG estándar conserva la textura fina de la piel, el detalle del cabello y el desenfoque de fondo del modo retrato sin bloques de compresión perceptibles. Puede deslizar entre el 20 % y el 100 % y pulsar Volver a convertir todo en cualquier momento.',
      },
      {
        question: '¿Convertir Live Photos de iPhone (.heic) conserva el movimiento de video o exporta un JPG fijo?',
        answer:
          'Al subir el componente fijo .heic de una Live Photo de iPhone, el decodificador extrae ese fotograma de alta resolución y lo exporta como una fotografía .jpg universal. Las pistas de video de movimiento dentro de los clips MOV emparejados no se incluyen en el JPEG estático.',
      },
      {
        question: '¿Puedo soltar un álbum completo de vacaciones en HEIC y descargar un solo ZIP?',
        answer:
          'Sí. Seleccione decenas de archivos .heic o .heif (hasta 25 MB por archivo) en una sola pasada, espere mientras su navegador decodifica cada foto en local y pulse Descargar todo (ZIP) para guardar compressmypic_heic_to_jpg.zip.',
      },
      {
        question: '¿Se conservan las coordenadas GPS de iPhone y las etiquetas de ubicación en el JPG exportado?',
        answer:
          'No. La codificación a través de HTML5 Canvas elimina automáticamente las ubicaciones GPS EXIF incrustadas, los números de serie de la cámara y las marcas de tiempo, dándole privacidad extra antes de publicar los JPG convertidos online.',
      },
      {
        question: '¿Por qué decodificar una foto de iPhone de 12 o 48 megapíxeles puede tardar uno o dos segundos por archivo?',
        answer:
          'La descompresión HEVC en WebAssembly exige cálculos de CPU más pesados que la decodificación JPEG estándar, especialmente en fotos Pro de iPhone de 24 MP o 48 MP. Al procesar los lotes en local, la velocidad de conversión depende sin problema del procesador de su dispositivo, no del ancho de banda de subida.',
      },
      {
        question: '¿Qué ocurre con la orientación vertical u horizontal de la cámara de iPhone durante la conversión de HEIC a JPG?',
        answer:
          'Los navegadores modernos leen las banderas de orientación incrustadas al decodificar la imagen en Canvas. Eso garantiza que los selfis verticales y las fotos de paisaje se exporten derechos, sin rotación lateral.',
      },
      {
        question: '¿Por qué un archivo llamado imagen.heic falló con un aviso de error de HEIC no válido?',
        answer:
          'A veces las aplicaciones de mensajería de terceros guardan contenedores dañados o archivos mal etiquetados con extensión .heic, o superan el límite de 25 MB. Probar una copia original exportada con AirDrop, Fotos de iCloud o Archivos de Apple resuelve los encabezados de envoltura dañados.',
      },
      {
        question: '¿Cuál es el tamaño máximo por foto HEIC o HEIF que acepta el conversor de HEIC a JPG?',
        answer:
          'En la cola se admiten archivos individuales de hasta 25 MB. Ese límite cubre con facilidad las capturas HEIC estándar de cámara de iPhone de 12 MP, 24 MP y 48 MP.',
      },
      {
        question: '¿Puedo comparar visualmente el JPG decodificado con la vista previa HEIC original antes de guardar?',
        answer:
          'Sí. Pulse cualquier miniatura de resultado o el botón Comparar para verificar la nitidez lado a lado dentro del modal interactivo de comparación.',
      },
      {
        question: '¿Los colores de amplia gama Display P3 de iPhone se verán precisos después de convertir a JPG?',
        answer:
          'Durante la renderización en Canvas del navegador, los colores de amplia gama se asignan limpiamente al espacio JPEG estándar sRGB. Como resultado, los colores se muestran de forma consistente en monitores de Windows, navegadores web y quioscos de impresión de fotos, sin cambios deslavados.',
      },
      {
        question: '¿Cómo puedo evitar que mis futuras fotos de iPhone se guarden como HEIC en lugar de JPG?',
        answer:
          'En su iPhone puede abrir Ajustes, ir a Cámara, tocar Formatos y elegir Más compatible para las fotos nuevas. Sin embargo, mantener Alta eficiencia ahorra aproximadamente la mitad del almacenamiento de su celular, y puede convertir lotes específicos de HEIC a JPG en cualquier momento justo aquí.',
      },
      {
        question: '¿Pierdo resolución de píxeles al convertir un HEIC de 4032×3024 a JPG?',
        answer:
          'No. Los JPG de salida conservan el 100 % del ancho y el alto en píxeles decodificados, sin tocarlos, a menos que elija cambiarles el tamaño por separado después.',
      },
      {
        question: '¿Puedo pegar o convertir archivos HEIC desde navegadores de Android, Chromebook, Linux o Windows?',
        answer:
          'Sí. Como heic2any WebAssembly corre dentro de Chrome, Firefox, Edge y Safari sin importar el sistema operativo, puede abrir y convertir adjuntos .heic de iPhone limpiamente incluso en máquinas Linux o Windows sin instalar extensiones.',
      },
      {
        question: '¿Qué debería hacer si necesito achicar el JPG recién convertido a menos de 100 KB para un portal de empleo?',
        answer:
          'Baje la calidad de salida JPG justo aquí y pulse Volver a convertir todo para recortar el tamaño del archivo rápidamente. Si aún necesita una orientación estricta por bytes, salte directamente a Comprimir imagen a 100KB con nuestras herramientas enlazadas.',
      },
      {
        question: '¿Este conversor acepta también archivos JPG o PNG, o solo estrictamente HEIC y HEIF?',
        answer:
          'Esta página filtra intencionalmente solo entradas .heic y .heif para que los lotes de fotos de Apple se mantengan limpios. Use nuestro Conversor de imágenes en lote si su carpeta mezcla HEIC junto con archivos PNG, WebP y BMP.',
      },
    ],
    relatedSlugs: ['/image-converter', '/bulk-image-converter', '/jpg-to-webp', '/remove-image-metadata'],
  },

  {
    slug: '/jpg-to-png',
    name: 'JPG a PNG',
    shortDescription: 'Convierta fotos JPG/JPEG a imágenes PNG sin pérdida en su navegador.',
    category: 'convert',
    seoTitle: 'Conversor de JPG a PNG gratis – Transformación sin pérdida',
    seoDescription:
      'Cambie fotos JPEG a archivos sin pérdida gratis online con el conversor de JPG a PNG. Convierta imágenes individuales o en lote en su navegador, con ZIP.',
    h1: 'Conversor de JPG a PNG gratis online',
    subtitle:
      'Convierta fotografías estándar .jpg y .jpeg limpiamente en archivos .png sin pérdida con nuestro conversor de JPG a PNG gratis, que corre directamente dentro de su navegador. Pensado para imprentas, editores gráficos y formularios web que exigen estrictamente subidas PNG, fija los píxeles existentes sin daño extra de compresión con pérdida, en lotes de hasta 25 MB por imagen, con exportación instantánea en ZIP.',
    howToSteps: [
      {
        title: 'Suelte fotos JPG o JPEG de hasta 25 MB cada una',
        description:
          'Suba una o varias imágenes .jpg o .jpeg desde su computadora, celular o tarjeta de cámara a la zona de subida.',
      },
      {
        title: 'Confirme el modo de codificación PNG sin pérdida',
        description:
          'Observe que el deslizador de calidad se oculta automáticamente y aparece el panel de Codificación PNG sin pérdida, ya que el PNG nunca introduce artefactos de compresión con pérdida.',
      },
      {
        title: 'Revise los tamaños del JPG original frente al PNG convertido',
        description:
          'Revise las dimensiones en píxeles y los conteos de bytes por tarjeta de archivo, y abra Comparar para verificar la fidelidad de píxeles lado a lado.',
      },
      {
        title: 'Agregue más archivos JPEG en cualquier momento o elimine los atípicos',
        description:
          'Suelte más archivos .jpg en la sesión activa o elimine tarjetas individuales con el botón de papelera antes de empaquetar.',
      },
      {
        title: 'Descargue PNG individuales o Descargar todo (ZIP)',
        description:
          'Pulse Descargar PNG en cualquier tarjeta de resultado o Descargar todo (ZIP) para guardar compressmypic_jpg_to_png.zip en local.',
      },
    ],
    features: [
      {
        title: 'Salida PNG real sin pérdida',
        description: 'Evita daño adicional de generación con pérdida al preparar imágenes para más edición o archivo.',
      },
      {
        title: 'Cola en lote y empaquetado ZIP',
        description: 'Convierta varios JPEG a PNG a la vez y expórtelos en un solo ZIP organizado.',
      },
      {
        title: 'Cero marcas de agua o registros',
        description: 'Conversiones ilimitadas directamente en Chrome, Firefox, Safari o Edge, sin crear una cuenta.',
      },
      {
        title: 'Procesamiento 100 % local',
        description: 'Las imágenes quedan dentro de la pestaña de su navegador: nada toca un servidor remoto.',
      },
    ],
    faqs: [
      {
        question: '¿Por qué no aparece ningún control de calidad en el conversor de JPG a PNG?',
        answer:
          'A diferencia de JPEG o WebP, el PNG usa compresión DEFLATE sin pérdida, donde cada píxel se codifica de forma idéntica sin una compensación de porcentaje de calidad. Reemplazar el deslizador por la tarjeta de Codificación PNG sin pérdida evita conjeturas engañosas.',
      },
      {
        question: 'Si convertir JPG a PNG es sin pérdida, ¿por qué no puede borrar los bloques JPEG borrosos preexistentes?',
        answer:
          'El PNG sin pérdida congela los píxeles exactos que actualmente guarda su JPEG, para que no ocurra pérdida adicional de generación al editar, recortar o volver a guardar el archivo después. Sin embargo, no puede reconstruir por arte de magia las texturas finas que ya se descartaron cuando la foto original de cámara se guardó como JPG.',
      },
      {
        question: '¿Por qué un JPG de 300 KB suele expandirse a un PNG de 1,5 MB–3 MB después de la conversión?',
        answer:
          'El JPEG descarta variaciones sutiles de color en bloques de 8×8 píxeles para mantenerse pequeño, mientras que el PNG registra datos exactos de píxeles RGB sin pérdida en todo el fotograma. Las fotografías de tono continuo requieren naturalmente muchos más bytes en PNG sin pérdida que en JPG comprimido.',
      },
      {
        question: '¿Cuándo es realmente útil convertir JPG a PNG a pesar del tamaño de archivo mayor?',
        answer:
          'Convertir a PNG es esencial cuando los proveedores de impresión, los importadores de interfaz de software, los portales de credenciales o los editores de pixel art exigen estrictamente archivos .png. También protege las imágenes cuando planea superponer texto nítido y editar repetidamente sin acumular artefactos de recompresión JPEG.',
      },
      {
        question: '¿Convertir un JPG con fondo blanco sólido a PNG hace transparente ese fondo?',
        answer:
          'No. Los archivos JPEG estándar no guardan información de transparencia alfa, así que convertir JPG a PNG produce una imagen .png totalmente opaca que preserva el fondo blanco. Combínelo después con nuestro Eliminador de fondo si necesita un recorte alfa.',
      },
      {
        question: '¿Por qué no debería simplemente cambiar la extensión de un archivo .jpg a .png manualmente?',
        answer:
          'Cambiar solo el sufijo del nombre deja los bytes binarios JPEG originales dentro, lo que hace que los validadores estrictos de subida, los cargadores de Canvas HTML y el software de impresión rechacen o no puedan abrir el archivo. Ejecutar una decodificación real en Canvas y una recodificación PNG escribe fragmentos y encabezados PNG válidos.',
      },
      {
        question: '¿Los archivos PNG convertidos conservan el ancho y el alto exactos en píxeles de mis JPEG originales?',
        answer:
          'Sí. Cada .png exportado mantiene el 100 % del ancho y el alto naturales del JPG fuente, sin recortes ni cambios de tamaño automáticos.',
      },
      {
        question: '¿Puedo convertir en lote 20 escaneos JPG a archivos PNG y guardar un solo ZIP?',
        answer:
          'Sí. Suelte varios archivos .jpg o .jpeg (hasta 25 MB cada uno) juntos, espere brevemente mientras su navegador codifica cada PNG en local y pulse Descargar todo (ZIP) para descargar compressmypic_jpg_to_png.zip.',
      },
      {
        question: '¿Convertir JPG a PNG elimina las etiquetas EXIF ocultas de la cámara y los metadatos GPS?',
        answer:
          'Sí. Decodificar un JPEG en HTML5 Canvas y escribir un PNG nuevo descarta automáticamente los encabezados EXIF de JPEG, los modelos de cámara y las coordenadas GPS.',
      },
      {
        question: '¿Se envían a servidores externos los documentos escaneados, los recibos o los retratos personales durante la conversión a PNG?',
        answer:
          'Nunca. La decodificación JPEG, la renderización en Canvas, la codificación PNG DEFLATE y el archivo ZIP se ejecutan estrictamente dentro de la memoria local del navegador en su computadora o celular.',
      },
      {
        question: '¿Qué ocurre si mi entrada es un JPEG guardado con colores de impresión CMYK en lugar de RGB?',
        answer:
          'Los navegadores modernos convierten los flujos de píxeles JPEG al espacio de color RGBA sRGB estándar de 8 bits al dibujar en HTML5 Canvas. Eso garantiza que su .png de salida se muestre con precisión en navegadores web, diapositivas y pantallas móviles.',
      },
      {
        question: '¿Cómo muestra la columna Cambio el crecimiento de tamaño de archivo en el conversor de JPG a PNG?',
        answer:
          'Convertir JPG comprimidos en PNG sin pérdida casi siempre aumenta el tamaño en bytes. Por eso, la celda Cambio de cada tarjeta informa con honestidad la diferencia positiva exacta +X % junto con los tamaños en bytes del JPG original y del PNG final.',
      },
      {
        question: '¿Puedo usar el visor Comparar para confirmar que no hay cambio de color entre el JPG y el PNG?',
        answer:
          'Sí. Pulse cualquier miniatura de tarjeta o el botón Comparar para revisar los píxeles lado a lado en la cortina dividida interactiva antes de descargar.',
      },
      {
        question: '¿Por qué el PNG convertido ayuda antes de varias rondas de anotaciones o superposiciones de texto?',
        answer:
          'Volver a guardar un JPEG repetidamente degrada los bordes un poco cada vez que corre de nuevo la cuantización con pérdida. Convertir un recurso fuente a PNG una vez crea un maestro intermedio sin pérdida que resiste limpiamente ediciones gráficas repetidas.',
      },
      {
        question: '¿Se aceptan sin problema ambas extensiones .jpg y .jpeg en el conversor de JPG a PNG?',
        answer:
          'Sí. La zona de subida acepta ambas extensiones .jpg y .jpeg y genera archivos .png estandarizados, conservando el nombre base original saneado.',
      },
      {
        question: '¿También puedo convertir imágenes PNG, WebP o HEIC en esta página específica de JPG a PNG?',
        answer:
          'Esta página acepta intencionalmente solo entradas JPG/JPEG para una conversión limpia en un solo paso a PNG. Use nuestro Conversor de imágenes o Conversor de imágenes en lote si su carpeta fuente incluye otros formatos de archivo.',
      },
      {
        question: '¿Cuál es el tamaño máximo permitido por JPEG subido al conversor de JPG a PNG?',
        answer:
          'Cada archivo .jpg o .jpeg individual puede pesar hasta 25 MB. Ese límite generoso cubre con facilidad exportaciones de cámara de alta resolución, fotografías DSLR y arte digital amplio.',
      },
      {
        question: '¿Por qué una foto de retrato guardada como .jpg puede exportarse derecha aunque se tomó de lado con la cámara?',
        answer:
          'Los navegadores modernos leen automáticamente las etiquetas de orientación EXIF incrustadas mientras pintan el JPEG decodificado en HTML5 Canvas. Eso fija la orientación derecha de forma permanente en los nuevos píxeles PNG, para que se muestre derecha en cada aplicación.',
      },
      {
        question: '¿Los PNG exportados se abrirán en Photoshop, Illustrator, Figma, Canva y PowerPoint?',
        answer:
          'Sí. Los archivos .png RGBA estándar de 8 bits creados por HTML5 Canvas son universalmente compatibles con cada aplicación de diseño de escritorio, suite de oficina, navegador y sistema operativo móvil.',
      },
      {
        question: '¿Qué tan rápida es la conversión de JPG a PNG en el navegador comparada con los conversores en la nube?',
        answer:
          'Como no hay tiempo de espera de subida o descarga de archivos para fotos de varios megabytes, la conversión local en Canvas se completa en milisegundos por archivo directamente en su propio CPU. Los lotes terminan rápido sin esperar en colas de servidores remotos.',
      },
    ],
    relatedSlugs: ['/png-to-jpg', '/jpg-to-webp', '/image-converter', '/add-background-to-image'],
  },

  {
    slug: '/png-to-jpg',
    name: 'PNG a JPG',
    shortDescription: 'Convierta PNG pesados a JPG ligeros con un fondo mate personalizado.',
    category: 'convert',
    seoTitle: 'Conversor de PNG a JPG gratis – Achique PNG y elija mate',
    seoDescription:
      'Convierta PNG en fotos ligeras gratis online con el conversor de PNG a JPG. Elija un color mate para zonas transparentes, ajuste la calidad y descargue en ZIP.',
    h1: 'Conversor de PNG a JPG gratis online',
    subtitle:
      'Achique capturas PNG voluminosas, capturas Retina y exportaciones gráficas en archivos .jpg rápidos y ligeros con nuestro conversor de PNG a JPG gratis en su navegador. Pensado para blogueros, especialistas de marketing y remitentes de correo que manejan adjuntos PNG demasiado grandes, de hasta 25 MB cada uno, combina un deslizador de calidad con un selector de color mate para fondo transparente, para que las zonas alfa nunca se vuelvan negras sólidas.',
    howToSteps: [
      {
        title: 'Suelte imágenes PNG de hasta 25 MB cada una',
        description:
          'Suba una o varias capturas .png, renders de producto o recortes transparentes a la zona de subida.',
      },
      {
        title: 'Elija un color mate para el fondo transparente',
        description:
          'Pulse Blanco (#ffffff), Negro (#000000), Gris claro (#f8fafc) o la muestra de color nativa para controlar cómo se aplanan los píxeles transparentes detrás de los sujetos opacos.',
      },
      {
        title: 'Defina la calidad de salida JPG (20 %–100 %)',
        description:
          'Mantenga el 88 % predeterminado y nítido, o arrastre entre el 20 % (archivo diminuto) y el 100 % (máximo detalle), y luego pulse Volver a convertir todo.',
      },
      {
        title: 'Verifique el ahorro de bytes y los bordes nítidos con Comparar',
        description:
          'Revise el porcentaje ahorrado por tarjeta e inspeccione el texto o los bordes de producto en el visor interactivo de comparación de antes y después.',
      },
      {
        title: 'Descargue archivos JPG o Descargar todo (ZIP)',
        description:
          'Guarde fotos .jpg convertidas individuales de inmediato o agrupe los lotes en compressmypic_png_to_jpg.zip.',
      },
    ],
    features: [
      {
        title: 'Relleno mate de transparencia personalizado',
        description: 'Las zonas transparentes de PNG se fusionan limpiamente sobre blanco, negro o cualquier color de fondo personalizado, en lugar de volverse negras sólidas.',
      },
      {
        title: 'Reducción masiva del tamaño de archivo',
        description: 'Convertir PNG fotográficos a JPG al 85 % suele achicar el peso del archivo entre un 60 % y un 85 % al instante.',
      },
      {
        title: 'Inspector visual de antes y después',
        description: 'Verifique la nitidez lado a lado antes de descargar, para que el texto y los bordes se mantengan nítidos.',
      },
      {
        title: 'Ejecución privada en el navegador',
        description: 'Las capturas confidenciales y los documentos quedan a salvo en su propia computadora.',
      },
    ],
    faqs: [
      {
        question: '¿Por qué las capturas de macOS y Windows se guardan como PNG de varios megabytes que se achican mucho como JPG?',
        answer:
          'Los sistemas operativos de escritorio usan por defecto el PNG sin pérdida para las capturas, que guarda fielmente millones de píxeles de pantalla Retina sin comprimir, a menudo superando 3 MB a 8 MB por captura. Convertir PNG fotográficos o de interfaz rica a JPG al 85 %–90 % suele recortar entre un 60 % y un 85 % del peso del archivo para compartir rápido por correo y Slack.',
      },
      {
        question: '¿Cómo evita el selector de color mate para fondo transparente las cajas negras feas en PNG a JPG?',
        answer:
          'Como la especificación JPEG no tiene canal de transparencia alfa, los conversores ingenuos suelen poner por defecto los píxeles alfa vacíos en negro #000000, arruinando logotipos oscuros o recortes con sombra. Pintar primero el color mate seleccionado (blanco por defecto, además de negro, gris claro o cualquier hexadecimal personalizado) sobre el lienzo fusiona limpiamente los bordes semitransparentes.',
      },
      {
        question: '¿Puedo elegir un carbón oscuro o un color de marca específico de un sitio web detrás de un logotipo PNG transparente antes de guardar el JPG?',
        answer:
          'Sí. Pulse el cuadrado de entrada de color junto a los botones rápidos Blanco, Negro y Gris claro, debajo de Color mate para fondo transparente, para elegir cualquier valor hexadecimal exacto, y luego pulse Volver a convertir todo para ver la vista previa y exportar.',
      },
      {
        question: '¿Qué porcentaje de calidad de salida JPG mantiene nítida la tipografía de capturas sin archivos inflados?',
        answer:
          'Mantener la calidad de salida JPG alrededor del 88 % (el valor predeterminado) al 95 % mantiene limpios los bordes nítidos del texto de interfaz de software y los gráficos. Bajar del 70 % puede introducir un leve ruido de mosquito alrededor de letras rojas o azules de alto contraste, por el submuestreo de croma JPEG.',
      },
      {
        question: '¿Por qué un ícono PNG monocromo plano diminuto de 20 KB puede crecer un poco al convertirlo a JPG al 88 %?',
        answer:
          'El PNG de paleta indexada destaca en gráficos planos de dos colores con áreas sólidas nítidas, mientras que los bloques coseno de 8×8 de JPEG añaden sobrecarga en logotipos diminutos. Revise siempre la columna Cambio: para íconos planos transparentes destinados a sitios web, WebP o conservar PNG suele ser más pequeño que JPG.',
      },
      {
        question: '¿Cómo decido entre PNG a JPG y PNG a WebP en el conversor?',
        answer:
          'Elija PNG a JPG cuando los adjuntos deban abrirse en Microsoft Word, constructores de PDF, programas de correo antiguos, laboratorios de impresión o portales que rechazan WebP, o cuando necesite intencionalmente un fondo blanco sólido. Elija PNG a WebP cuando despliegue recursos en sitios web donde preservar la transparencia y la máxima velocidad importen.',
      },
      {
        question: '¿Convertir recortes de producto transparentes sobre un mate blanco #ffffff ayuda en los listados de marketplaces?',
        answer:
          'Sí. Marketplaces como Amazon y eBay suelen preferir JPG nítidos de fondo blanco opaco para las miniaturas principales de producto, en lugar de PNG alfa, y el blanco se comprime con mucha eficiencia dentro de JPEG.',
      },
      {
        question: '¿Puedo convertir un lote completo de 25 capturas PNG Retina a JPG a la vez?',
        answer:
          'Sí. Suelte varios archivos .png de hasta 25 MB cada uno en la cola, elija su calidad y color de relleno mate, y descargue todo junto en compressmypic_png_to_jpg.zip.',
      },
      {
        question: '¿Qué ocurre con las sombras suaves alrededor de una captura de ventana PNG transparente al aplanarla a JPG?',
        answer:
          'Las sombras con mezcla alfa se componen de forma natural sobre el color mate elegido, en lugar de recortarse en contornos dentados y duros. Eso produce un sombreado suave y limpio sobre fondos blancos o teñidos, listo para diapositivas y artículos.',
      },
      {
        question: '¿Se suben a una API en la nube los paneles confidenciales, los recibos o las maquetas de diseño durante PNG a JPG?',
        answer:
          'No. La composición mate en Canvas, la compresión JPEG y la generación ZIP se ejecutan en local dentro de la pestaña de su navegador, así que las capturas sensibles nunca salen de su computadora.',
      },
      {
        question: '¿La conversión de PNG a JPG cambia el ancho o el alto en píxeles?',
        answer:
          'No. Cada .jpg convertido conserva el 100 % del ancho y el alto exactos de su PNG original. Use el Redimensionador de imágenes o el Redimensionador de imágenes en lote si también quiere reducir las capturas Retina a dimensiones 1×.',
      },
      {
        question: '¿Qué rango cubre el control de calidad al convertir PNG a JPG?',
        answer:
          'Arrastrar hacia el 20 % muestra cómo la compresión agresiva recorta el tamaño cuando los archivos ultra diminutos son obligatorios, mientras que el 85 %–90 % alcanza el punto ideal visual para fotos nítidas y diapositivas. Elegir el 100 % ofrece el máximo detalle JPEG cuando el peso en bytes es secundario.',
      },
      {
        question: '¿Puedo cambiar el color mate o la calidad después de ver los primeros resultados de conversión?',
        answer:
          'Sí. Elija otra muestra mate o mueva el deslizador en cualquier momento y pulse Volver a convertir todo para regenerar cada archivo cargado sin volver a subirlos.',
      },
      {
        question: '¿Convertir PNG a JPG elimina los fragmentos de texto PNG incrustados, como el software de creación o los comentarios?',
        answer:
          'Sí. Al dibujar los píxeles en HTML5 Canvas se eliminan los bloques tEXt, iTXt y de perfil ICC incrustados, manteniendo los JPG de salida ligeros y limpios.',
      },
      {
        question: '¿Puedo verificar la nitidez de bordes de antes y después en capturas de interfaz convertidas antes de descargar?',
        answer:
          'Sí. Pulse Comparar en cualquier tarjeta para arrastrar el visor dividido por las etiquetas de texto y los íconos contra el PNG original sin pérdida.',
      },
      {
        question: '¿Qué tipos de archivo acepta esta página dedicada de PNG a JPG?',
        answer:
          'Filtra limpiamente archivos .png de hasta 25 MB por archivo, para que no aplaste por accidente entradas que no sean PNG. Para lotes mezclados con archivos WebP o BMP, pruebe el Conversor de imágenes en lote.',
      },
      {
        question: '¿El conversor admite PNG transparentes entrelazados (Adam7)?',
        answer:
          'Sí. El decodificador de imágenes nativo de su navegador lee limpiamente tanto los flujos PNG estándar como los entrelazados antes de pintarlos sobre el fondo mate de Canvas.',
      },
      {
        question: '¿Windows Photos, Vista Previa de macOS, WhatsApp y las impresoras antiguas abrirán el JPG exportado?',
        answer:
          'Sí. Las salidas .jpg RGB de línea base estándar tienen la compatibilidad más amplia de cualquier formato de imagen digital en celulares, navegadores, suites de oficina y quioscos de impresión.',
      },
      {
        question: '¿Cuál es el nombre de archivo individual frente al nombre del ZIP en lote de PNG a JPG?',
        answer:
          'Las descargas individuales conservan su nombre de archivo original saneado con extensión .jpg. Los lotes de 2 o más se exportan agrupados limpiamente dentro de compressmypic_png_to_jpg.zip.',
      },
      {
        question: '¿Puedo convertir capturas PNG desde navegadores móviles de iOS o Android limpiamente?',
        answer:
          'Sí. Las muestras mate, el deslizador de calidad, el inspector visual de comparación y la exportación ZIP funcionan directamente en Safari en iOS y Chrome en Android, sin descargar ninguna aplicación.',
      },
    ],
    relatedSlugs: ['/jpg-to-png', '/png-to-webp', '/compress-image-to-100kb', '/image-converter'],
  },

  {
    slug: '/jpg-to-webp',
    name: 'Conversor de JPG a WebP',
    shortDescription: 'Convierta fotos JPG a WebP moderno para sitios web más rápidos y mejor SEO.',
    category: 'convert',
    seoTitle: 'Conversor de JPG a WebP gratis online – Más ligero',
    seoDescription:
      'Convierta fotos JPG a WebP gratis online en su navegador. Archivos más pequeños, páginas más rápidas y mejor Core Web Vitals, con control de calidad y ZIP.',
    h1: 'Conversor de JPG a WebP gratis online',
    subtitle:
      'Convierta fotos JPG cotidianas en imágenes WebP modernas y ligeras con nuestro conversor gratis de JPG a WebP, que funciona por completo en su navegador. Pensado para blogueros, dueños de tiendas y desarrolladores que necesitan páginas más rápidas y mejor Core Web Vitals, convierte archivos JPG de hasta 25 MB cada uno con la calidad que usted elija — 82 % por defecto —, con procesamiento por lotes y descargas ZIP en un clic, sin subir nada.',
    howToSteps: [
      {
        title: 'Suelte fotos JPG de hasta 25 MB cada una',
        description:
          'Suba una o varias fotos .jpg o .jpeg de su blog, tienda o carrete de cámara a la zona de subida.',
      },
      {
        title: 'Ajuste la calidad de salida WebP (20 %–100 %)',
        description:
          'Conserve el nítido 82 % por defecto para fotos, o arrastre el deslizador hacia el 20 % para archivos diminutos y el 100 % para el máximo detalle, y luego pulse Volver a convertir todo.',
      },
      {
        title: 'Revise el ahorro de tamaño en cada tarjeta',
        description:
          'Cada resultado muestra el tamaño JPG original, el tamaño WebP convertido y el porcentaje ahorrado para que vea la ganancia al instante.',
      },
      {
        title: 'Compare la nitidez lado a lado',
        description:
          'Pulse Comparar en cualquier tarjeta para abrir el visor dividido y comprobar que el texto, las caras y los bordes sigan viéndose nítidos con la calidad elegida.',
      },
      {
        title: 'Descargue archivos WebP o Descargar todo (ZIP)',
        description:
          'Guarde archivos .webp individuales o agrupe todo el lote en compressmypic_jpg_to_webp.zip en un clic.',
      },
    ],
    features: [
      {
        title: 'Puntuaciones de PageSpeed y LCP más rápidas',
        description:
          'WebP es el formato web de última generación recomendado por Lighthouse y los navegadores modernos.',
      },
      {
        title: 'Control de calidad ajustable',
        description:
          'Ajuste la compresión entre el 20 % y el 100 % y vea los resultados de inmediato.',
      },
      {
        title: 'Exportación por lotes a ZIP',
        description:
          'Optimice carpetas enteras de imágenes de blog o de comercio electrónico en local en segundos.',
      },
      {
        title: 'Sin viajes al servidor',
        description:
          'Usa el codificador WebP integrado de su navegador: rápido, apto sin conexión y privado.',
      },
    ],
    faqs: [
      {
        question: '¿Cuánto más pequeño queda un archivo WebP que la misma foto guardada en JPG?',
        answer:
          'Con una calidad visual similar, los archivos WebP suelen pesar entre un 25 % y un 35 % menos que la misma foto guardada en JPG, porque la compresión WebP predice los píxeles con mayor eficiencia. El ahorro exacto depende de la foto: los paisajes detallados ahorran menos, mientras que los cielos lisos y las fotos de estudio ahorran más.',
      },
      {
        question: '¿Por qué Google recomienda WebP para sitios web más rápidos y mejor Core Web Vitals?',
        answer:
          'Las herramientas Lighthouse y PageSpeed de Google señalan las imágenes pesadas como una de las principales causas de un Largest Contentful Paint (LCP) lento. Servir la misma foto como un WebP más ligero reduce el tiempo de descarga en conexiones lentas, lo que mejora directamente el LCP y la puntuación de experiencia que Google usa como señal de posicionamiento.',
      },
      {
        question: '¿Qué navegadores abren un archivo WebP sin instalar nada?',
        answer:
          'Todos los navegadores modernos abren WebP de forma nativa: Chrome, Edge, Firefox y Safari en computadora, además de Chrome en Android y Safari en iOS. No se necesita ningún complemento ni aplicación de visualización, así que las imágenes WebP se muestran directamente en páginas web, chats y la mayoría de los visores de imágenes modernos.',
      },
      {
        question: '¿Qué calidad conviene usar para fotos de JPG a WebP en un sitio web?',
        answer:
          'Para fotos de sitios web, entre el 80 % y el 85 % es el punto ideal: las imágenes se ven prácticamente idénticas al JPG original y siguen siendo mucho más pequeñas. La herramienta usa el 82 % por defecto por esa misma razón, y usted puede subir hacia el 90 % o más para imágenes principales donde cada detalle importa.',
      },
      {
        question: '¿Cambian las dimensiones de la foto al convertir JPG a WebP?',
        answer:
          'No. La conversión solo cambia el contenedor del archivo y la compresión, así que el WebP exportado conserva el 100 % del ancho y alto en píxeles del JPG original. Si también quiere dimensiones más pequeñas, use el Redimensionador de imágenes después para tamaños exactos en píxeles.',
      },
      {
        question: '¿Puede una foto JPG conservar transparencia al convertirla a WebP?',
        answer:
          'No, porque los archivos JPG estándar no tienen canal de transparencia que conservar: cada píxel de un JPG es totalmente opaco. Si su gráfico original tiene fondo transparente, parta de un PNG y use nuestro conversor de PNG a WebP, que conserva todo el canal alfa.',
      },
      {
        question: '¿Se suben mis fotos JPG a algún servidor durante la conversión a WebP?',
        answer:
          'Nunca. La conversión se ejecuta en HTML5 Canvas dentro de la propia pestaña de su navegador, así que sus fotos se codifican en local y nunca salen de su computadora o celular. Al cerrar la pestaña se borran de la memoria del navegador.',
      },
      {
        question: '¿Puedo convertir una carpeta entera de imágenes JPG de un blog a WebP a la vez?',
        answer:
          'Sí. Suelte varios archivos .jpg o .jpeg de hasta 25 MB cada uno en la cola, elija una sola calidad para todo el lote y descargue todo junto en compressmypic_jpg_to_webp.zip. Cada archivo se convierte por separado, así que un archivo dañado nunca bloquea a los demás.',
      },
      {
        question: '¿Qué pasa con los datos EXIF y las etiquetas GPS de un JPG al convertirlo a WebP?',
        answer:
          'Al dibujar los píxeles en HTML5 Canvas se eliminan los datos EXIF incrustados, incluidas las coordenadas GPS, el modelo de cámara y las marcas de tiempo. Eso mantiene los archivos WebP resultantes livianos y protege su privacidad antes de publicar fotos online.',
      },
      {
        question: '¿Por qué el WebP convertido a veces pesa más que el JPG original?',
        answer:
          'Los JPG muy pequeños o ya muy comprimidos pueden crecer un poco al recodificarse, sobre todo con 100 % de calidad, porque WebP añade su propio peso de contenedor. Si un archivo crece, baje la calidad hacia el 80 % o conserve el JPG original: la columna Cambio de cada tarjeta muestra el resultado con honestidad.',
      },
      {
        question: '¿Puedo usar los archivos WebP convertidos en WordPress, Shopify o Wix?',
        answer:
          'Sí. WordPress, Shopify, Wix, Squarespace y la mayoría de los creadores de sitios modernos aceptan subidas WebP directamente, y los navegadores las sirven sin configuración adicional. Para temas o complementos muy antiguos que rechacen WebP, vuelva a convertir con nuestra herramienta de WebP a JPG.',
      },
      {
        question: '¿Qué tamaño máximo de archivo JPG acepta el conversor a WebP?',
        answer:
          'Cada archivo JPG o JPEG puede pesar hasta 25 MB, lo que cubre fotos de cámara de alta resolución y capturas de pantalla grandes. Como la conversión ocurre en su dispositivo, los archivos grandes se procesan a la velocidad de su procesador local, sin tiempo de espera por subida.',
      },
      {
        question: '¿Funciona la conversión de JPG a WebP en el navegador del celular?',
        answer:
          'Sí. El deslizador de calidad, la cola por lotes, el visor de comparación y la descarga ZIP funcionan en Safari en iOS y Chrome en Android, sin instalar ninguna aplicación. En celulares, los lotes muy grandes simplemente tardan un poco más porque el trabajo corre en el procesador del teléfono.',
      },
      {
        question: '¿Cómo compruebo que el WebP convertido sigue viéndose nítido antes de descargarlo?',
        answer:
          'Pulse Comparar en cualquier tarjeta de resultado para abrir el visor dividido y arrastre sobre la foto para inspeccionar caras, texto y bordes frente al JPG original. Si algo se ve suave, suba el deslizador de calidad y pulse Volver a convertir todo.',
      },
      {
        question: '¿Puedo cambiar la calidad después de la primera conversión de JPG a WebP sin volver a subir?',
        answer:
          'Sí. Mueva el deslizador de calidad a un nuevo valor en cualquier momento y pulse Volver a convertir todo para regenerar cada archivo cargado con el nuevo ajuste. Sus archivos subidos permanecen en la cola, así que no necesita arrastrarlos de nuevo.',
      },
      {
        question: '¿Es mejor WebP que JPG para las fotos de producto de una tienda online?',
        answer:
          'Para fotos de producto mostradas en un sitio web, sí: WebP con 80 % a 85 % se ve igual que JPG y carga заметно más rápido, lo que ayuda tanto a los compradores como al posicionamiento en buscadores. Conserve JPG solo cuando un mercado, un laboratorio de impresión o un comprador lo pida de forma explícita.',
      },
      {
        question: '¿Qué nombre de archivo conservan los archivos WebP descargados?',
        answer:
          'Las descargas individuales conservan su nombre de archivo original saneado con la extensión .webp, así que foto_01.jpg se convierte en foto_01.webp. Los lotes de dos o más archivos se exportan agrupados dentro de compressmypic_jpg_to_webp.zip.',
      },
      {
        question: '¿Puedo convertir capturas de pantalla JPG con texto a WebP sin que las letras se vean borrosas?',
        answer:
          'Sí, con 85 % a 90 % de calidad, el texto de las capturas se mantiene nítido porque WebP conserva bien los bordes nítidos de alto contraste. Bajar del 70 % puede suavizar las letras pequeñas, así que revise el visor Comparar y suba la calidad si el texto se ve difuso.',
      },
      {
        question: '¿Funciona el conversor de JPG a WebP sin conexión después de cargar la página?',
        answer:
          'Sí. Una vez cargada la página en su navegador, la conversión se ejecuta por completo en JavaScript local y HTML5 Canvas, sin llamadas al servidor. Solo necesitará internet de nuevo para cargar la página misma o para descargar los archivos terminados.',
      },
      {
        question: '¿Cuándo conviene conservar el JPG en lugar de convertirlo a WebP?',
        answer:
          'Conserve JPG cuando el archivo deba abrirse en software antiguo, adjuntos de correo, laboratorios de impresión o portales de subida que todavía rechazan WebP. Para cualquier cosa publicada en un sitio web moderno, WebP es la mejor opción, y siempre puede volver a convertir con WebP a JPG.',
      },
    ],
    relatedSlugs: ['/webp-to-jpg', '/png-to-webp', '/web-image-optimizer', '/bulk-image-converter'],
  },

  {
    slug: '/webp-to-jpg',
    name: 'Conversor de WebP a JPG',
    shortDescription: 'Convierta descargas WebP a archivos JPG aceptados en todas partes.',
    category: 'convert',
    seoTitle: 'Conversor de WebP a JPG gratis online – Universal',
    seoDescription:
      'Convierta imágenes WebP a JPG universal gratis online en su navegador. Elija un color mate para zonas transparentes, ajuste la calidad y descargue en ZIP.',
    h1: 'Conversor de WebP a JPG gratis online',
    subtitle:
      'Convierta imágenes .webp descargadas en archivos .jpg clásicos que se abren en cualquier aplicación, portal o impresora con nuestro conversor gratis de WebP a JPG en su navegador. Pensado para quien recibe un archivo WebP de un sitio web o un chat y su editor, su suite de oficina o su formulario de subida lo rechaza, convierte archivos WebP de hasta 25 MB cada uno con 88 % de calidad por defecto, con selector de color mate para zonas transparentes y exportación ZIP por lotes.',
    howToSteps: [
      {
        title: 'Suelte imágenes WebP de hasta 25 MB cada una',
        description:
          'Suba uno o varios archivos .webp guardados de sitios web, chats o descargas a la zona de subida.',
      },
      {
        title: 'Elija un color mate para las zonas transparentes',
        description:
          'Elija Blanco (#ffffff), Negro (#000000), Gris claro (#f8fafc) o cualquier color hexadecimal personalizado, porque JPG no puede almacenar transparencia.',
      },
      {
        title: 'Ajuste la calidad de salida JPG (20 %–100 %)',
        description:
          'Conserve el nítido 88 % por defecto o arrastre el deslizador hacia el 20 % para archivos diminutos y el 100 % para el máximo detalle, y luego pulse Volver a convertir todo.',
      },
      {
        title: 'Compare el JPG con el WebP original',
        description:
          'Pulse Comparar en cualquier tarjeta para inspeccionar bordes y texto en el visor dividido antes de guardar nada.',
      },
      {
        title: 'Descargue archivos JPG o Descargar todo (ZIP)',
        description:
          'Guarde archivos .jpg individuales o agrupe todo el lote en compressmypic_webp_to_jpg.zip en un clic.',
      },
    ],
    features: [
      {
        title: 'Soluciona los rechazos de software antiguo',
        description:
          'Convierta imágenes WebP con facilidad para portales, impresoras o aplicaciones antiguas que solo aceptan JPG.',
      },
      {
        title: 'Relleno mate seguro para la transparencia',
        description:
          'Los WebP transparentes se aplanan sin problemas sobre fondo blanco, negro o cualquier color hexadecimal.',
      },
      {
        title: 'Recodificación de alta calidad',
        description:
          'La calidad del 88 % por defecto mantiene los detalles nítidos con un aumento mínimo del tamaño de archivo.',
      },
      {
        title: 'Privacidad 100 % nativa del navegador',
        description:
          'Sin colas en la nube ni subidas al servidor: funciona al instante en su dispositivo.',
      },
    ],
    faqs: [
      {
        question: '¿Por qué algunas aplicaciones, impresoras y formularios rechazan los archivos WebP?',
        answer:
          'WebP es un formato más nuevo, y muchos programas de escritorio antiguos, quioscos de impresión, versiones de Microsoft Office y formularios de subida oficiales se crearon antes de que existiera, así que solo reconocen JPG y PNG. Convertir WebP a JPG hace que la imagen se pueda abrir en todas partes al instante, sin pedirle a nadie que instale nada.',
      },
      {
        question: '¿Qué pasa con las partes transparentes de un WebP al convertirlo a JPG?',
        answer:
          'JPG no tiene canal alfa de transparencia, así que los píxeles transparentes deben rellenarse con un color sólido durante la conversión. Esta herramienta los rellena con el color mate que usted elija — blanco por defecto —, así los logotipos y calcomanías quedan con un fondo sólido limpio en lugar de un cuadro negro.',
      },
      {
        question: '¿Puedo elegir el color de fondo detrás de una calcomanía WebP transparente?',
        answer:
          'Sí. En Color mate de fondo transparente, elija Blanco, Negro o Gris claro, o pulse la muestra de color para escribir cualquier valor hexadecimal personalizado. La elección se aplica al pulsar Volver a convertir todo, así que puede probar distintos fondos antes de descargar.',
      },
      {
        question: '¿Pierde calidad una imagen al convertir WebP a JPG?',
        answer:
          'Algo de pérdida es inevitable porque JPG recodifica los píxeles con compresión con pérdida, pero con el 88 % por defecto la diferencia es prácticamente invisible para fotos y capturas de pantalla. Si el WebP original ya era de baja calidad, la conversión no puede restaurar detalle que nunca estuvo allí.',
      },
      {
        question: '¿El JPG conserva las mismas dimensiones en píxeles que el WebP original?',
        answer:
          'Sí. Cada .jpg convertido conserva el 100 % del ancho y alto exactos en píxeles del WebP original, así que nada se recorta ni se redimensiona. Use el Redimensionador de imágenes después si también necesita dimensiones más pequeñas.',
      },
      {
        question: '¿Qué debo hacer con un archivo WebP animado en el conversor a JPG?',
        answer:
          'Un WebP animado se exporta como un JPG fijo, porque el formato JPG no puede almacenar movimiento. Usted obtiene un solo fotograma nítido de la animación, que funciona bien para miniaturas y documentos; para la versión en movimiento, conserve el archivo WebP original.',
      },
      {
        question: '¿Se suben mis archivos WebP a algún servidor durante la conversión a JPG?',
        answer:
          'No. Toda la conversión se ejecuta en HTML5 Canvas dentro de la propia pestaña de su navegador, así que sus imágenes nunca se envían a un servidor, ni se almacenan, ni las ve nadie más. Al cerrar la pestaña se borran de la memoria del navegador.',
      },
      {
        question: '¿Puedo convertir muchas descargas WebP a JPG en un solo lote?',
        answer:
          'Sí. Suelte varios archivos .webp de hasta 25 MB cada uno en la cola, elija un solo color mate y una sola calidad para todo el lote, y descargue todo junto en compressmypic_webp_to_jpg.zip. Cada archivo se convierte por separado.',
      },
      {
        question: '¿Cuál es el archivo WebP más grande que acepta el conversor a JPG?',
        answer:
          'Cada archivo WebP puede pesar hasta 25 MB, lo que cubre descargas de alta resolución y capturas de pantalla grandes. La conversión se ejecuta en su dispositivo, así que los archivos grandes se procesan a la velocidad de su procesador local, sin tiempo de espera por subida.',
      },
      {
        question: '¿Cómo consigo un fondo blanco puro en lugar de un cuadro negro detrás de un logotipo?',
        answer:
          'Elija Blanco (#ffffff) en Color mate de fondo transparente antes de convertir: el blanco es el valor por defecto, así que la mayoría de los logotipos ya salen limpios. Si un archivo se convirtió con el color equivocado, solo cambie la muestra y pulse Volver a convertir todo para regenerarlo.',
      },
      {
        question: '¿Por qué el archivo JPG a veces pesa más que el WebP original?',
        answer:
          'WebP comprime con mayor eficiencia que JPG, así que un WebP pequeño recodificado como JPG con 88 % puede terminar pesando más que la fuente. Eso es normal: usted está cambiando un poco de tamaño de archivo por compatibilidad universal. Bajar la calidad hacia el 75 % suele devolver el JPG por debajo del tamaño original.',
      },
      {
        question: '¿Puedo abrir el JPG convertido en Microsoft Word, PowerPoint o Photoshop?',
        answer:
          'Sí. Los archivos .jpg RGB de línea base estándar se abren en prácticamente todas las suites de oficina, editores, navegadores y flujos de impresión, incluidas las versiones antiguas que nunca aprendieron WebP. Esa compatibilidad universal es la razón principal para convertir.',
      },
      {
        question: '¿El conversor de WebP a JPG elimina los metadatos de los archivos WebP?',
        answer:
          'Sí. Al dibujar los píxeles en HTML5 Canvas se eliminan los datos EXIF, XMP y de perfil ICC incrustados, así que los JPG resultantes son livianos y no tienen datos ocultos de ubicación ni de cámara.',
      },
      {
        question: '¿Cómo compruebo que el JPG se ve bien antes de descargarlo?',
        answer:
          'Pulse Comparar en cualquier tarjeta de resultado para abrir el visor dividido y arrastre sobre la imagen para inspeccionar bordes, texto y colores frente al WebP original. Cada tarjeta también muestra los tamaños original y convertido, así que las sorpresas se ven antes de guardar.',
      },
      {
        question: '¿Puedo cambiar el color mate o la calidad después de convertir WebP a JPG?',
        answer:
          'Sí. Elija otra muestra mate o mueva el deslizador de calidad en cualquier momento y pulse Volver a convertir todo para regenerar cada archivo cargado sin volver a subir. Sus archivos WebP originales permanecen en la cola hasta que usted los limpie.',
      },
      {
        question: '¿Qué nombre de archivo conservará el JPG descargado?',
        answer:
          'Las descargas individuales conservan su nombre de archivo original saneado con la extensión .jpg, así que banner.webp se convierte en banner.jpg. Los lotes de dos o más archivos se exportan agrupados dentro de compressmypic_webp_to_jpg.zip.',
      },
      {
        question: '¿Funciona el conversor de WebP a JPG en los navegadores de iPhone y Android?',
        answer:
          'Sí. El selector de color mate, el deslizador de calidad, el visor de comparación y la descarga ZIP funcionan en Safari en iOS y Chrome en Android sin instalar ninguna aplicación. Los lotes grandes simplemente tardan un poco más en los procesadores de celular.',
      },
      {
        question: '¿Cuándo conviene convertir WebP a JPG en lugar de WebP a PNG?',
        answer:
          'Elija JPG cuando necesite el archivo más pequeño y compatible con todo: adjuntos de correo, documentos de Office, portales de subida e impresoras. Elija PNG cuando deba conservar la transparencia o necesite calidad sin pérdida y perfecta en píxeles para editar.',
      },
      {
        question: '¿Por qué una captura de pantalla WebP con texto nítido se ve más suave después de convertirla a JPG?',
        answer:
          'JPEG usa submuestreo de croma, que suaviza levemente los bordes de alto contraste, como las letras rojas o azules sobre blanco. Subir la calidad al 92 % o 95 % mantiene nítido el texto de las capturas, y el visor Comparar le permite verificarlo antes de descargar.',
      },
      {
        question: '¿Puedo convertir una imagen WebP que un sitio web guardó sin extensión de archivo?',
        answer:
          'No directamente: esta página filtra las entradas por la extensión .webp y el tipo MIME WebP, así que primero cambie el nombre del archivo para que termine en .webp. Si el archivo en realidad es un JPG o PNG mal etiquetado por el sitio, use el conversor correspondiente.',
      },
    ],
    relatedSlugs: ['/webp-to-png', '/jpg-to-webp', '/png-to-jpg', '/image-converter'],
  },

  {
    slug: '/png-to-webp',
    name: 'Conversor de PNG a WebP',
    shortDescription: 'Convierta gráficos PNG transparentes a WebP compacto y transparente.',
    category: 'convert',
    seoTitle: 'Conversor de PNG a WebP gratis online – Transparente',
    seoDescription:
      'Convierta PNG a WebP gratis online conservando toda la transparencia. Reduzca logotipos, íconos y capturas en su navegador con deslizador de calidad y ZIP.',
    h1: 'Conversor de PNG a WebP gratis online',
    subtitle:
      'Reduzca logotipos PNG transparentes, íconos y capturas de pantalla pesados a archivos WebP compactos con nuestro conversor gratis de PNG a WebP, directamente en su navegador. Pensado para desarrolladores web y diseñadores que necesitan gráficos transparentes de carga rápida, convierte archivos PNG de hasta 25 MB cada uno con 85 % de calidad por defecto y conserva todo el canal alfa, con procesamiento por lotes y descargas ZIP.',
    howToSteps: [
      {
        title: 'Suelte gráficos PNG de hasta 25 MB cada uno',
        description:
          'Suba logotipos .png transparentes, íconos, capturas de pantalla o recortes de producto a la zona de subida.',
      },
      {
        title: 'Ajuste la calidad de salida WebP (20 %–100 %)',
        description:
          'Conserve el 85 % por defecto para gráficos transparentes nítidos, o arrastre hacia el 20 % para archivos diminutos y el 100 % para el máximo detalle, y luego pulse Volver a convertir todo.',
      },
      {
        title: 'Revise la transparencia y el ahorro de tamaño',
        description:
          'Cada tarjeta muestra el tamaño PNG original, el nuevo tamaño WebP y el porcentaje ahorrado, con la transparencia visible en una vista previa de cuadros.',
      },
      {
        title: 'Compare bordes y sombras lado a lado',
        description:
          'Pulse Comparar en cualquier tarjeta para inspeccionar bordes semitransparentes, degradados y sombras en el visor dividido.',
      },
      {
        title: 'Descargue archivos WebP o Descargar todo (ZIP)',
        description:
          'Guarde archivos .webp individuales o agrupe el lote en compressmypic_png_to_webp.zip en un clic.',
      },
    ],
    features: [
      {
        title: 'Transparencia alfa completa conservada',
        description:
          'A diferencia de JPG, WebP conserva bordes semitransparentes limpios y sombras de sus PNG.',
      },
      {
        title: 'Recursos hasta un 70 % más pequeños',
        description:
          'Reemplace imágenes principales PNG de varios megabytes y recortes por archivos WebP elegantes para sitios web más rápidos.',
      },
      {
        title: 'Vista dividida de antes y después',
        description:
          'Inspeccione bordes con suavizado y degradados lado a lado antes de descargar.',
      },
      {
        title: 'Procesamiento por lotes y ZIP',
        description:
          'Convierta conjuntos enteros de íconos y productos en local sin límites de subida.',
      },
    ],
    faqs: [
      {
        question: '¿El conversor de PNG a WebP conserva de verdad los fondos transparentes?',
        answer:
          'Sí. La codificación WebP en HTML5 Canvas conserva todo el canal alfa de 8 bits, así que los píxeles totalmente transparentes siguen transparentes y los bordes semitransparentes, las sombras suaves y las curvas con suavizado mantienen su mezcla delicada. La vista previa del resultado muestra la transparencia sobre cuadros para que usted lo verifique al instante.',
      },
      {
        question: '¿Cuánto más pequeño es WebP que PNG para la misma imagen?',
        answer:
          'Según la complejidad visual, convertir un PNG a WebP con 85 % suele recortar el tamaño del archivo entre un 50 % y un 80 %. Los PNG fotográficos y las capturas de pantalla grandes ahorran más, mientras que los íconos planos diminutos con pocos colores pueden ahorrar menos: la columna Cambio de cada tarjeta muestra el resultado exacto.',
      },
      {
        question: '¿Sobreviven las sombras semitransparentes y los bordes suaves a la conversión de PNG a WebP?',
        answer:
          'Sí. WebP almacena los mismos valores alfa de 8 bits que PNG, así que las sombras, los brillos y los bordes difuminados se componen exactamente igual que en el original. Use el visor Comparar para acercar los bordes y confirmar que la suavidad se ve idéntica antes de descargar.',
      },
      {
        question: '¿Qué calidad funciona mejor para logotipos PNG transparentes convertidos a WebP?',
        answer:
          'El 85 % por defecto es ideal para la mayoría de los logotipos e íconos: los bordes se mantienen nítidos mientras los archivos se reducen de forma drástica. Para trabajo de calidad de imprenta o arte de líneas muy finas, suba la calidad al 90 % o 95 %; bajar del 70 % puede endurecer las líneas delgadas y el texto pequeño.',
      },
      {
        question: '¿Cómo convierto un conjunto completo de íconos de PNG a WebP a la vez?',
        answer:
          'Suelte varios archivos .png de hasta 25 MB cada uno en la cola, elija una sola calidad para todo el lote y descargue todo junto en compressmypic_png_to_webp.zip. Cada ícono se convierte por separado, así que un archivo dañado nunca bloquea a los demás.',
      },
      {
        question: '¿Se suben los archivos PNG a un servidor al convertirlos a WebP?',
        answer:
          'No. La conversión se ejecuta en HTML5 Canvas dentro de la propia pestaña de su navegador, así que sus logotipos, capturas de pantalla y recursos de diseño nunca salen de su computadora. Al cerrar la pestaña se borran de la memoria del navegador.',
      },
      {
        question: '¿Cambia la conversión de PNG a WebP las dimensiones de la imagen?',
        answer:
          'No. El WebP exportado conserva el 100 % del ancho y alto en píxeles del PNG original: solo cambian el formato del archivo y la compresión. Use el Redimensionador de imágenes después si también necesita dimensiones más pequeñas para la web.',
      },
      {
        question: '¿Qué tamaño máximo de PNG acepta el conversor a WebP?',
        answer:
          'Cada archivo PNG puede pesar hasta 25 MB, lo que cubre capturas de pantalla grandes, capturas Retina y renders de producto de alta resolución. Como la conversión se ejecuta en su dispositivo, los archivos grandes se procesan a la velocidad de su procesador local, sin tiempo de espera por subida.',
      },
      {
        question: '¿Por qué mi WebP convertido pesa más que el PNG original?',
        answer:
          'Los PNG planos diminutos con pocos colores, como un ícono de dos colores, ya son extremadamente eficientes, y la codificación WebP con pérdida puede añadir peso sobre ellos. Si un archivo crece, revise la columna Cambio y conserve el PNG original para ese recurso; WebP gana en gráficos fotográficos y complejos.',
      },
      {
        question: '¿Pueden los sitios web usar directamente los archivos WebP convertidos desde PNG?',
        answer:
          'Sí. Todos los navegadores modernos muestran WebP de forma nativa, y WordPress, Shopify, Wix y la mayoría de los creadores de sitios aceptan subidas WebP. Los logotipos WebP transparentes funcionan exactamente igual que los PNG transparentes en encabezados, botones y galerías de producto.',
      },
      {
        question: '¿Qué pasa con los metadatos y los fragmentos de texto de un PNG durante la conversión a WebP?',
        answer:
          'Al dibujar los píxeles en HTML5 Canvas se eliminan los fragmentos de texto PNG incrustados, las notas de software de creación y los perfiles ICC. Los archivos WebP resultantes quedan livianos y sin metadatos ocultos, lo que es ideal para publicar recursos online.',
      },
      {
        question: '¿Cómo verifico que la transparencia se conservó antes de descargar el WebP?',
        answer:
          'La miniatura del resultado muestra las zonas transparentes sobre un patrón de cuadros, y el botón Comparar abre un visor dividido donde usted puede arrastrar sobre la imagen para confirmar que los bordes se funden con suavidad. Si el fondo se ve sólido en lugar de cuadros, el PNG original no tenía transparencia.',
      },
      {
        question: '¿Se puede ajustar la calidad tras convertir PNG a WebP sin volver a subir?',
        answer:
          'Sí. Mueva el deslizador de calidad a un nuevo valor en cualquier momento y pulse Volver a convertir todo para regenerar cada archivo cargado con el nuevo ajuste. Sus PNG subidos permanecen en la cola, así que no necesita arrastrarlos de nuevo.',
      },
      {
        question: '¿Es mejor WebP que PNG para las imágenes principales de un sitio web?',
        answer:
          'Para imágenes principales fotográficas o complejas, sí: WebP con 85 % se ve igual que PNG y carga mucho más rápido. PNG sigue ganando para íconos planos diminutos, arte de píxeles o cualquier recurso donde la calidad matemáticamente sin pérdida sea un requisito estricto.',
      },
      {
        question: '¿Funciona el conversor de PNG a WebP en el navegador de su celular?',
        answer:
          'Sí. El deslizador de calidad, la cola por lotes, el visor de comparación y la descarga ZIP funcionan en Safari en iOS y Chrome en Android sin instalar ninguna aplicación. Los lotes grandes simplemente tardan un poco más en los procesadores de celular.',
      },
      {
        question: '¿Qué nombre de archivo reciben los archivos WebP convertidos desde PNG?',
        answer:
          'Las descargas individuales conservan su nombre de archivo original saneado con la extensión .webp, así que logo.png se convierte en logo.webp. Los lotes de dos o más archivos se exportan agrupados dentro de compressmypic_png_to_webp.zip.',
      },
      {
        question: '¿Puedo convertir una captura de pantalla PNG con texto a WebP sin que las letras se vean borrosas?',
        answer:
          'Sí, con 85 % a 90 % de calidad, el texto de las capturas se mantiene nítido porque WebP conserva bien los bordes de alto contraste. Bajar del 70 % puede suavizar las letras pequeñas, así que revise el visor Comparar y suba la calidad si el texto se ve difuso.',
      },
      {
        question: '¿Conserva esta herramienta el perfil de color ICC del PNG en el WebP?',
        answer:
          'No. La recodificación en Canvas elimina el perfil ICC incrustado y representa los colores en sRGB estándar, que es lo que los navegadores usan para mostrar en web. Para la mayoría de los gráficos de pantalla la diferencia visible es insignificante, pero el trabajo de color crítico para imprenta debe quedarse en su formato original.',
      },
      {
        question: '¿Cuándo conviene elegir PNG a WebP en lugar de PNG a JPG?',
        answer:
          'Elija WebP siempre que la imagen deba mantenerse transparente o cargar rápido en un sitio web. Elija JPG solo cuando el destino — un cliente de correo, un documento de Office o un portal de subida antiguo — no pueda abrir WebP y usted esté dispuesto a renunciar a la transparencia por un fondo sólido.',
      },
      {
        question: '¿Se puede convertir un PNG entrelazado a WebP aquí?',
        answer:
          'Sí. El decodificador de imágenes nativo de su navegador lee con limpieza tanto los flujos PNG estándar como los entrelazados (Adam7) antes de pintarlos en Canvas, así que los archivos entrelazados se convierten exactamente igual que los PNG normales.',
      },
    ],
    relatedSlugs: ['/webp-to-png', '/jpg-to-webp', '/web-image-optimizer', '/image-converter'],
  },

  {
    slug: '/webp-to-png',
    name: 'Conversor de WebP a PNG',
    shortDescription: 'Convierta imágenes WebP a PNG sin pérdida con la transparencia intacta.',
    category: 'convert',
    seoTitle: 'Conversor de WebP a PNG gratis online – Sin pérdida',
    seoDescription:
      'Convierta WebP a PNG sin pérdida gratis online en su navegador. La transparencia se conserva, las dimensiones no cambian y los lotes se exportan en ZIP.',
    h1: 'Conversor de WebP a PNG gratis online',
    subtitle:
      'Convierta descargas WebP en archivos PNG universales sin pérdida con nuestro conversor gratis de WebP a PNG, por completo en su navegador. Pensado para diseñadores, editores y cualquier persona cuya aplicación o imprenta rechace WebP, convierte archivos WebP de hasta 25 MB cada uno sin ninguna pérdida de calidad y con transparencia alfa completa, además de procesamiento por lotes y descargas ZIP.',
    howToSteps: [
      {
        title: 'Suelte archivos WebP de hasta 25 MB cada uno',
        description:
          'Suba una o varias imágenes .webp de descargas, chats o sitios web a la zona de subida.',
      },
      {
        title: 'Espere la conversión PNG sin pérdida',
        description:
          'Cada WebP se representa sobre un lienzo transparente y se exporta como PNG sin pérdida de forma automática: no hay deslizador de calidad porque PNG no tiene pérdida.',
      },
      {
        title: 'Revise la transparencia en la vista previa',
        description:
          'Las zonas transparentes se muestran sobre un fondo de cuadros, y cada tarjeta enumera los tamaños de archivo original y convertido.',
      },
      {
        title: 'Compare el PNG con el WebP original',
        description:
          'Pulse Comparar en cualquier tarjeta para inspeccionar bordes, texto y transparencia en el visor dividido.',
      },
      {
        title: 'Descargue archivos PNG o Descargar todo (ZIP)',
        description:
          'Guarde archivos .png individuales o agrupe el lote en compressmypic_webp_to_png.zip en un clic.',
      },
    ],
    features: [
      {
        title: 'Conserva la transparencia alfa intacta',
        description:
          'Los logotipos y calcomanías WebP transparentes se mantienen transparentes en el PNG resultante.',
      },
      {
        title: 'Compatibilidad universal con editores',
        description:
          'Abra los PNG convertidos en cualquier herramienta de diseño, presentación o portal de subida sin problemas de compatibilidad con WebP.',
      },
      {
        title: 'Compatibilidad con cola por lotes',
        description:
          'Convierta varias descargas WebP a PNG en un clic y exporte un solo ZIP.',
      },
      {
        title: 'Procesamiento privado en el dispositivo',
        description:
          'Los archivos nunca salen de su dispositivo: la conversión ocurre en la memoria local del navegador.',
      },
    ],
    faqs: [
      {
        question: '¿Es realmente sin pérdida la conversión de WebP a PNG?',
        answer:
          'Sí. PNG almacena cada píxel decodificado exactamente como el navegador lo leyó del WebP, sin más pérdida por compresión. El único límite de calidad es la compresión que el propio WebP original ya aplicó: esta herramienta nunca añade una segunda ronda de daño con pérdida.',
      },
      {
        question: '¿Un logotipo WebP transparente seguirá transparente como PNG?',
        answer:
          'Sí. Todo el canal alfa se traslada, así que los píxeles transparentes siguen transparentes y los bordes semitransparentes conservan su mezcla delicada. La miniatura del resultado muestra la transparencia sobre un patrón de cuadros para que usted lo confirme antes de descargar.',
      },
      {
        question: '¿Por qué el PNG resultante pesa más que el WebP que subí?',
        answer:
          'PNG usa compresión DEFLATE sin pérdida, mientras que WebP usa una compresión moderna mucho más agresiva, así que los mismos píxeles simplemente necesitan más bytes como PNG. El archivo más grande es el precio honesto de la compatibilidad universal y de cero pérdida adicional de calidad.',
      },
      {
        question: '¿Puedo convertir un WebP animado a PNG aquí?',
        answer:
          'Un WebP animado se exporta como un PNG fijo de su primer fotograma, porque PNG no puede almacenar movimiento. Ese fotograma fijo funciona bien para miniaturas, documentos y calcomanías; para la versión en movimiento, conserve el archivo WebP original.',
      },
      {
        question: '¿El PNG conserva el mismo ancho y alto que el WebP?',
        answer:
          'Sí. Cada .png convertido conserva el 100 % de las dimensiones exactas en píxeles del WebP original, así que nada se recorta ni se redimensiona. Use el Redimensionador de imágenes después si también necesita dimensiones más pequeñas.',
      },
      {
        question: '¿Se suben los archivos WebP a un servidor durante la conversión a PNG?',
        answer:
          'No. La conversión se ejecuta en HTML5 Canvas dentro de la propia pestaña de su navegador, así que sus imágenes nunca se envían a un servidor, ni se almacenan, ni las ve nadie más. Al cerrar la pestaña se borran de la memoria del navegador.',
      },
      {
        question: '¿Puedo convertir un lote de imágenes WebP a PNG a la vez?',
        answer:
          'Sí. Suelte varios archivos .webp de hasta 25 MB cada uno en la cola y descargue todo junto en compressmypic_webp_to_png.zip. Cada archivo se convierte por separado, así que un archivo dañado nunca bloquea a los demás.',
      },
      {
        question: '¿Qué tan grande puede ser un solo archivo WebP en el conversor a PNG?',
        answer:
          'Cada archivo WebP puede pesar hasta 25 MB, lo que cubre descargas de alta resolución y capturas de pantalla grandes. Como la conversión se ejecuta en su dispositivo, los archivos grandes se procesan a la velocidad de su procesador local, sin tiempo de espera por subida.',
      },
      {
        question: '¿Hay un deslizador de calidad para WebP a PNG?',
        answer:
          'No, y no hace falta: PNG es un formato sin pérdida, así que no hay compromiso entre calidad y tamaño que ajustar. La herramienta muestra una nota de Codificación PNG sin pérdida en lugar de un deslizador, y cada píxel se conserva con exactitud.',
      },
      {
        question: '¿Dónde puedo usar los archivos PNG convertidos desde WebP?',
        answer:
          'En cualquier lugar donde se acepte PNG: Photoshop, Figma, Canva, PowerPoint, Word, imprentas y portales de subida que rechazan WebP. PNG es el formato de imagen rasterizada más universalmente editable, y esa es exactamente la razón de esta conversión.',
      },
      {
        question: '¿Conserva el conversor de WebP a PNG los metadatos como EXIF?',
        answer:
          'No. Al dibujar los píxeles en HTML5 Canvas se eliminan los datos EXIF, XMP y de perfil ICC incrustados, así que los PNG resultantes son livianos y no tienen datos ocultos de ubicación ni de cámara.',
      },
      {
        question: '¿Cómo confirmo que la transparencia sobrevivió antes de descargar el PNG?',
        answer:
          'La miniatura del resultado muestra las zonas transparentes sobre un fondo de cuadros, y el botón Comparar abre un visor dividido donde usted puede arrastrar sobre la imagen para confirmar que los bordes se funden con suavidad. Si el fondo se ve sólido, el WebP original no tenía transparencia.',
      },
      {
        question: '¿Puedo convertir capturas de pantalla WebP con texto a PNG sin perder calidad?',
        answer:
          'Sí. Como PNG no tiene pérdida, el texto de las capturas, las etiquetas de interfaz y las líneas finas se mantienen perfectas en píxeles, más nítidas que cualquier recodificación JPG. Eso hace que esta sea la opción correcta cuando una captura debe editarse o imprimirse después.',
      },
      {
        question: '¿Qué nombre de archivo conservará la descarga PNG?',
        answer:
          'Las descargas individuales conservan su nombre de archivo original saneado con la extensión .png, así que sticker.webp se convierte en sticker.png. Los lotes de dos o más archivos se exportan agrupados dentro de compressmypic_webp_to_png.zip.',
      },
      {
        question: '¿Puedo convertir WebP a PNG desde mi celular?',
        answer:
          'Sí. La zona de subida, la cola por lotes, el visor de comparación y la descarga ZIP funcionan en Safari en iOS y Chrome en Android sin instalar ninguna aplicación. Los lotes grandes simplemente tardan un poco más en los procesadores de celular.',
      },
      {
        question: '¿Cuándo conviene elegir WebP a PNG en lugar de WebP a JPG?',
        answer:
          'Elija PNG cuando deba conservar la transparencia o necesite calidad sin pérdida y perfecta en píxeles para editar, diseñar o imprimir. Elija JPG cuando necesite el archivo más pequeño y compatible con todo y pueda vivir con un fondo sólido y una leve pérdida por compresión.',
      },
      {
        question: '¿Se puede convertir un archivo WebP sin extensión?',
        answer:
          'No directamente: esta página filtra las entradas por la extensión .webp y el tipo MIME WebP, así que primero cambie el nombre del archivo para que termine en .webp. Si el archivo en realidad es un JPG o PNG mal etiquetado por el sitio, use el conversor correspondiente.',
      },
      {
        question: '¿Por qué un diseñador necesitaría PNG en lugar de WebP?',
        answer:
          'Las herramientas de diseño, los editores por capas y los flujos de impresión a menudo necesitan PNG para máscaras, selecciones y superposiciones transparentes que WebP no puede ofrecer en sus procesos. PNG también garantiza que cada edición futura parta de píxeles exactos, no de una decodificación con pérdida.',
      },
      {
        question: '¿Acepta la herramienta archivos WebP con codificación sin pérdida?',
        answer:
          'Sí. Los archivos WebP sin pérdida se decodifican con limpieza en el navegador y se recodifican como PNG sin pérdida con cada píxel conservado. Ya sea que el WebP original fuera con pérdida o sin pérdida, la salida PNG no añade más pérdida de calidad.',
      },
      {
        question: '¿Qué pasa si un archivo WebP está dañado o no es un WebP real?',
        answer:
          'Ese archivo muestra un mensaje de error claro por archivo que explica que no se pudo decodificar, mientras los demás archivos de su lote se convierten con normalidad. Volver a descargar el WebP original desde su fuente suele solucionar un archivo truncado o mal etiquetado.',
      },
    ],
    relatedSlugs: ['/webp-to-jpg', '/png-to-webp', '/jpg-to-png', '/image-converter'],
  },

  {
    slug: '/svg-to-png',
    name: 'Conversor de SVG a PNG',
    shortDescription: 'Rasterice gráficos vectoriales SVG en PNG nítidos de 1× a 4× con transparencia.',
    category: 'convert',
    seoTitle: 'Conversor de SVG a PNG gratis online – De 1x a 4x',
    seoDescription:
      'Convierta vectores SVG a PNG transparente gratis online en su navegador. Exporte PNG nítidos 1x, 2x, 3x o 4x, con límites claros sobre recursos externos.',
    h1: 'Conversor de SVG a PNG gratis online',
    subtitle:
      'Rasterice logotipos, íconos e ilustraciones SVG en PNG transparentes y nítidos con nuestro conversor gratis de SVG a PNG, por completo en su navegador. Pensado para diseñadores y desarrolladores que necesitan exportaciones de alta resolución para presentaciones, documentos y tiendas de aplicaciones, representa SVG autocontenidos en escala 1×, 2×, 3× o 4× (hasta 8000 px) con procesamiento por lotes y descargas ZIP.',
    howToSteps: [
      {
        title: 'Suelte archivos SVG de hasta 25 MB cada uno',
        description:
          'Suba uno o varios archivos vectoriales .svg con formas, rutas, degradados o estilos integrados.',
      },
      {
        title: 'Elija una escala de exportación de rasterización (1×–4×)',
        description:
          'Elija 1× para el tamaño intrínseco del SVG, o 2×–4× para exportaciones PNG nítidas de Retina y alta resolución.',
      },
      {
        title: 'Pulse Volver a convertir todo después de cambiar la escala',
        description:
          'Los cambios de escala se aplican al volver a convertir, para que la vista previa y la descarga coincidan con el tamaño que eligió.',
      },
      {
        title: 'Revise la nota sobre recursos externos',
        description:
          'Las imágenes externas, las hojas de estilo y las fuentes web dentro de un SVG quedan bloqueadas por la seguridad del lienzo del navegador y no aparecerán en el PNG.',
      },
      {
        title: 'Compare el PNG rasterizado',
        description:
          'Pulse Comparar en cualquier tarjeta para inspeccionar bordes nítidos y transparencia en el visor dividido.',
      },
      {
        title: 'Descargue archivos PNG o Descargar todo (ZIP)',
        description:
          'Guarde archivos .png individuales o agrupe el lote en compressmypic_svg_to_png.zip en un clic.',
      },
    ],
    features: [
      {
        title: 'Exportación de alta resolución 1×, 2×, 3× y 4×',
        description:
          'Escale íconos pequeños de 24 px o logotipos de 100 px con limpieza hasta 4× de resolución antes de rasterizar.',
      },
      {
        title: 'Fondo transparente conservado',
        description:
          'Exporta PNG nítidos con canal alfa listos para presentaciones, encabezados web y portafolios de diseño.',
      },
      {
        title: 'Alcance honesto del lienzo independiente',
        description:
          'Documenta con claridad que las formas y los estilos vectoriales SVG integrados se representan con limpieza, mientras que las URL de imágenes externas o las fuentes web externas dentro de SVG pueden quedar bloqueadas por el entorno aislado de Canvas del navegador.',
      },
      {
        title: 'Rasterización de SVG por lotes',
        description:
          'Convierta paquetes enteros de íconos a PNG en una sola pasada y descargue un ZIP.',
      },
    ],
    faqs: [
      {
        question: 'Mi SVG usa una foto enlazada: ¿por qué no aparece en el PNG?',
        answer:
          'Por seguridad, los navegadores aíslan los archivos SVG representados en HTML5 Canvas y bloquean la obtención de URL de <image> externas, así que ninguna foto enlazada desde la web puede cargarse durante la rasterización. Incruste la imagen directamente en el archivo SVG o reemplácela con formas vectoriales integradas, y el PNG se representará completo.',
      },
      {
        question: '¿Puedo usar una fuente web dentro de un SVG para exportarlo a PNG?',
        answer:
          'Las fuentes web externas referenciadas por URL quedan bloqueadas por el mismo entorno aislado de Canvas, así que el texto en una fuente remota vuelve a una fuente del sistema o desaparece. Use fuentes del sistema, convierta el texto a contornos en su editor o incruste los datos de la fuente directamente en el archivo SVG.',
      },
      {
        question: '¿Qué escala debo elegir para convertir un ícono de 24 px en un PNG nítido de 96 px?',
        answer:
          'Elija 4× en Escala de exportación de rasterización y pulse Volver a convertir todo: un ícono de 24 px se convierte en un PNG nítido de 96 px porque los vectores se vuelven a representar al tamaño mayor en lugar de estirar píxeles. Use 2× para una exportación de 48 px, y recuerde que la salida está limitada a 8000 px en el lado más largo.',
      },
      {
        question: '¿Cuál es el PNG más grande que puede producir un SVG aquí?',
        answer:
          'La escala de exportación está limitada a 8000 px en el lado más largo, así que un SVG muy grande en 4× se detiene en ese límite. Para la mayoría de los íconos y logotipos el límite nunca importa: un logotipo de 100 px en 4× es solo de 400 px, muy por debajo del límite.',
      },
      {
        question: '¿El conversor de SVG a PNG conserva el fondo transparente?',
        answer:
          'Sí. A menos que el propio SVG pinte un rectángulo de fondo, el PNG exportado conserva un fondo limpio con transparencia alfa, listo para presentaciones, encabezados y portafolios de diseño. La vista previa muestra la transparencia sobre un patrón de cuadros.',
      },
      {
        question: '¿Se suben los archivos SVG a un servidor?',
        answer:
          'No. La rasterización se ejecuta en HTML5 Canvas dentro de la propia pestaña de su navegador, así que sus archivos vectoriales nunca salen de su computadora. Al cerrar la pestaña se borran de la memoria del navegador.',
      },
      {
        question: '¿Puedo convertir todo un paquete de íconos SVG a PNG a la vez?',
        answer:
          'Sí. Suelte varios archivos .svg de hasta 25 MB cada uno en la cola, elija una sola escala para todo el lote y descargue todo junto en compressmypic_svg_to_png.zip. Cada ícono se rasteriza por separado.',
      },
      {
        question: '¿Qué hace que un SVG no se pueda rasterizar y dé error?',
        answer:
          'La causa más común es un XML no válido: etiquetas sin cerrar, atributos mal formados o un archivo que en realidad no es marcado SVG. Abra el archivo en un editor de texto o de vectores, corrija el error de sintaxis e intente de nuevo: el mensaje de error aparece por archivo, así que los demás SVG se convierten igual.',
      },
      {
        question: '¿Los degradados y la opacidad dentro de un SVG se representan correctamente en el PNG?',
        answer:
          'Sí. Los degradados lineales y radiales integrados, los atributos de opacidad y los rellenos con estilo definidos dentro del SVG se representan con limpieza en Canvas. Solo quedan bloqueados los recursos obtenidos fuera del archivo: imágenes externas, hojas de estilo y fuentes.',
      },
      {
        question: '¿El texto dentro de mi SVG se exportará como texto PNG nítido?',
        answer:
          'Sí, cuando el texto usa fuentes del sistema instaladas en su dispositivo, se rasteriza con nitidez a cualquier escala. El texto en una fuente web externa vuelve a una fuente predeterminada, así que convierta el texto a contornos en Illustrator, Figma o Inkscape para obtener resultados garantizados.',
      },
      {
        question: '¿Puedo convertir un SVG que hace referencia a un archivo CSS externo?',
        answer:
          'No. Las hojas de estilo externas quedan bloqueadas por la seguridad del lienzo del navegador, así que las clases definidas en un archivo .css enlazado no se aplicarán y las formas pueden representarse sin estilo. Traslade los estilos integrados con atributos de estilo o un bloque <style> dentro del propio SVG.',
      },
      {
        question: '¿La salida PNG del conversor de SVG es sin pérdida?',
        answer:
          'Sí. Los píxeles rasterizados se guardan como un PNG sin pérdida, así que los bordes, el texto y los colores planos se mantienen perfectos en píxeles al tamaño exportado. Vuelva a exportar a una escala mayor si necesita más detalle: no hay deslizador de calidad porque PNG no tiene paso con pérdida.',
      },
      {
        question: '¿Qué tamaño tiene el PNG con la escala 1×?',
        answer:
          'En 1×, el PNG coincide con las dimensiones intrínsecas del SVG según sus atributos de ancho y alto o su viewBox. Un ícono de 24×24 se exporta como 24×24 píxeles, mientras que un SVG sin tamaño intrínseco usa las dimensiones de su viewBox.',
      },
      {
        question: '¿Puedo convertir archivos SVG en mi celular?',
        answer:
          'Sí. La zona de subida, el selector de escala, el visor de comparación y la descarga ZIP funcionan en Safari en iOS y Chrome en Android sin instalar ninguna aplicación. Los paquetes de íconos grandes simplemente tardan un poco más en los procesadores de celular.',
      },
      {
        question: '¿Con qué nombre de archivo se descarga el PNG exportado desde SVG?',
        answer:
          'Las descargas individuales conservan su nombre de archivo original saneado con la extensión .png, así que logo.svg se convierte en logo.png. Los lotes de dos o más archivos se exportan agrupados dentro de compressmypic_svg_to_png.zip.',
      },
      {
        question: '¿Acepta el conversor animaciones SVG (SMIL o CSS)?',
        answer:
          'No. La rasterización captura un solo fotograma estático del SVG, así que las animaciones SMIL y CSS no pasan al PNG. Para un resultado animado, exporte la animación como video o GIF desde su herramienta de diseño.',
      },
      {
        question: '¿Puedo rasterizar un SVG con una imagen incrustada como data URI?',
        answer:
          'Por lo general, sí. Las imágenes incrustadas directamente en el archivo como data URI en base64 forman parte del propio SVG, así que nada se obtiene desde fuera y por lo general se representan. Las imágenes enlazadas con URL http son las que quedan bloqueadas por la seguridad de Canvas.',
      },
      {
        question: '¿Cuándo conviene usar SVG a PNG en lugar de conservar el SVG?',
        answer:
          'Use PNG cuando el destino necesite una imagen rasterizada: PowerPoint, Word, publicaciones sociales, capturas de tiendas de aplicaciones o cualquier herramienta que no pueda abrir SVG. Conserve el SVG cuando el gráfico deba mantenerse infinitamente escalable en un sitio web.',
      },
      {
        question: '¿La conversión de SVG a PNG cambia los colores?',
        answer:
          'Los colores se representan como se definen en el SVG, y la salida es un PNG sRGB estándar. Canvas elimina los perfiles ICC incrustados, así que la coincidencia de color crítica para imprenta debe quedarse en el archivo vectorial original; para pantallas, la diferencia visible es insignificante.',
      },
      {
        question: '¿Qué tamaño máximo de archivo SVG se acepta?',
        answer:
          'Cada archivo SVG puede pesar hasta 25 MB, lo que cubre incluso archivos ilustrados enormes con miles de rutas. Los SVG muy complejos simplemente tardan uno o dos segundos más en rasterizarse en su dispositivo.',
      },
    ],
    relatedSlugs: ['/favicon-generator', '/png-to-webp', '/image-resizer', '/image-converter'],
  },

  {
    slug: '/avif-to-jpg',
    name: 'Conversor de AVIF a JPG',
    shortDescription: 'Convierta imágenes AVIF a JPG universal con el decodificador de su navegador.',
    category: 'convert',
    seoTitle: 'Conversor de AVIF a JPG gratis online – Universal',
    seoDescription:
      'Convierta imágenes AVIF a JPG universal gratis online en su navegador. Decodificación AVIF nativa, selector de color mate para transparencia, calidad y ZIP.',
    h1: 'Conversor de AVIF a JPG gratis online',
    subtitle:
      'Convierta imágenes .avif modernas en archivos .jpg compatibles con todo con nuestro conversor gratis de AVIF a JPG, que usa el decodificador AVIF integrado de su navegador. Pensado para quien descarga un archivo AVIF que su editor, su aplicación de oficina o su formulario de subida no puede abrir, convierte archivos AVIF de hasta 25 MB cada uno con 88 % de calidad por defecto, con selector de color mate y exportación ZIP por lotes, sin subir nada.',
    howToSteps: [
      {
        title: 'Suelte imágenes AVIF de hasta 25 MB cada una',
        description:
          'Suba archivos .avif en un navegador moderno con decodificación AVIF nativa: Chrome, Edge, Firefox o Safari.',
      },
      {
        title: 'Elija un color mate para las zonas transparentes',
        description:
          'Elija Blanco (#ffffff), Negro (#000000), Gris claro (#f8fafc) o cualquier color hexadecimal personalizado, porque JPG no puede almacenar transparencia.',
      },
      {
        title: 'Ajuste la calidad de salida JPG (20 %–100 %)',
        description:
          'Conserve el nítido 88 % por defecto o arrastre hacia el 20 % para archivos diminutos y el 100 % para el máximo detalle, y luego pulse Volver a convertir todo.',
      },
      {
        title: 'Compare el JPG con el AVIF original',
        description:
          'Pulse Comparar en cualquier tarjeta para revisar detalle, color y bordes en el visor dividido antes de guardar.',
      },
      {
        title: 'Descargue archivos JPG o Descargar todo (ZIP)',
        description:
          'Guarde archivos .jpg individuales o agrupe el lote en compressmypic_avif_to_jpg.zip en un clic.',
      },
    ],
    features: [
      {
        title: 'Decodificación AVIF nativa del navegador',
        description:
          'Aprovecha el decodificador AVIF por hardware o software de su navegador moderno en local, sin viajes al servidor.',
      },
      {
        title: 'Compatibilidad de formato honesta',
        description:
          'Creado estrictamente para decodificar AVIF a JPG universal (o use las herramientas de JPG, PNG y WebP para otros formatos; no se ofrece codificación ni salida AVIF).',
      },
      {
        title: 'Selector de color mate para la transparencia',
        description:
          'Las zonas AVIF transparentes se funden con limpieza sobre fondo blanco o el color hexadecimal personalizado que elija.',
      },
      {
        title: 'Exportación ZIP por lotes',
        description:
          'Convierta varias descargas AVIF a JPG en una sola sesión del navegador.',
      },
    ],
    faqs: [
      {
        question: '¿Qué es AVIF y por qué algunas aplicaciones no lo abren?',
        answer:
          'AVIF es un formato de imagen moderno basado en la compresión de video AV1 que guarda fotos en tamaños mucho más pequeños que JPG. Como es más nuevo, muchos editores antiguos, suites de oficina, impresoras y portales de subida nunca añadieron un decodificador AVIF, así que convertir a JPG es la forma más rápida de que la imagen se pueda usar en todas partes.',
      },
      {
        question: '¿Qué navegadores pueden decodificar AVIF para convertirlo a JPG?',
        answer:
          'Chrome, Edge, Firefox y Safari modernos decodifican AVIF de forma nativa en el navegador, y eso es lo que usa esta herramienta. Si usted abre la página en un navegador muy antiguo, cada archivo muestra un error claro en lugar de convertirse; actualizar el navegador lo soluciona.',
      },
      {
        question: '¿Qué pasa si mi navegador no puede decodificar un archivo AVIF?',
        answer:
          'El archivo muestra un mensaje de error explícito por archivo que explica que su navegador no pudo decodificarlo, mientras los demás archivos de su lote se convierten con normalidad. Cambiar a una versión actual de Chrome, Firefox, Edge o Safari lo resuelve en casi todos los casos.',
      },
      {
        question: '¿Se pierde calidad al convertir AVIF a JPG?',
        answer:
          'Algo de pérdida es inevitable porque JPG recodifica los píxeles con compresión con pérdida, mientras que AVIF es mucho más eficiente con la misma calidad. Con el 88 % por defecto, la diferencia es prácticamente invisible para fotos; solo un examen extremo de las texturas finas revela algún suavizado.',
      },
      {
        question: '¿Las zonas transparentes de un AVIF se volverán negras en el JPG?',
        answer:
          'No. Las zonas transparentes se rellenan con el color mate que usted elija — blanco por defecto —, así los logotipos y recortes quedan con un fondo sólido limpio en lugar de un cuadro negro. Elija Negro, Gris claro o cualquier color hexadecimal personalizado antes de convertir.',
      },
      {
        question: '¿Puedo convertir imágenes AVIF con transparencia a JPG de forma limpia?',
        answer:
          'Sí. El selector de color mate funde los bordes semitransparentes con suavidad sobre el fondo elegido, así que las sombras suaves y las curvas con suavizado se ven naturales en lugar de recortarse en contornos duros. Revise el visor Comparar para confirmar la mezcla.',
      },
      {
        question: '¿Se suben los archivos AVIF a un servidor?',
        answer:
          'No. La decodificación y la recodificación ocurren en local con el decodificador AVIF nativo de su navegador y HTML5 Canvas, así que sus imágenes nunca salen de su dispositivo. Al cerrar la pestaña se borran de la memoria del navegador.',
      },
      {
        question: '¿Cómo convierto varias descargas AVIF a JPG de una sola vez?',
        answer:
          'Suelte varios archivos .avif de hasta 25 MB cada uno en la cola, elija un solo color mate y una sola calidad para todo el lote, y descargue todo junto en compressmypic_avif_to_jpg.zip. Cada archivo se convierte por separado.',
      },
      {
        question: '¿Cuál es el archivo AVIF más grande que se acepta?',
        answer:
          'Cada archivo AVIF puede pesar hasta 25 MB, lo que cubre descargas de alta resolución y capturas de cámara. Como la decodificación se ejecuta en su dispositivo, los archivos grandes se procesan a la velocidad de su procesador local, sin tiempo de espera por subida.',
      },
      {
        question: '¿Hay alguna forma de convertir un JPG a AVIF aquí?',
        answer:
          'No. HTML5 Canvas no puede codificar AVIF de forma universal en todos los navegadores, así que este sitio solo decodifica AVIF a salidas JPG, PNG y WebP confiables. Para salida AVIF usted necesitaría un codificador de escritorio dedicado.',
      },
      {
        question: '¿Conserva el JPG las mismas dimensiones en píxeles que el AVIF?',
        answer:
          'Sí. Cada .jpg convertido conserva el 100 % del ancho y alto exactos en píxeles del AVIF original, así que nada se recorta ni se redimensiona. Use el Redimensionador de imágenes después si también necesita dimensiones más pequeñas.',
      },
      {
        question: '¿Qué porcentaje de calidad conviene más para las fotos AVIF?',
        answer:
          'El 88 % por defecto es ideal para la mayoría de las fotos: el detalle se mantiene nítido mientras los archivos siguen siendo pequeños. Para tomas muy detalladas o imágenes que planea editar después, suba la calidad al 92 % o 95 %; para compartir rápido, el 80 % suele bastar.',
      },
      {
        question: '¿Cómo se ven las fotos AVIF HDR o de gama amplia después de convertirlas a JPG?',
        answer:
          'Se exportan como un JPG sRGB estándar, así que los brillos HDR extremos se ajustan al rango de visualización normal y los colores de gama amplia muy saturados cambian levemente hacia sRGB. Para fotos cotidianas el resultado se ve natural; para trabajo de color crítico, conserve el AVIF original.',
      },
      {
        question: '¿Puedo revisar el JPG convertido antes de descargarlo?',
        answer:
          'Sí. Pulse Comparar en cualquier tarjeta de resultado para abrir el visor dividido y arrastre sobre la imagen para inspeccionar detalle, color y bordes frente al AVIF original. Cada tarjeta también muestra los tamaños original y convertido.',
      },
      {
        question: '¿Si el primer resultado se ve mal, puedo ajustar la configuración y probar de nuevo?',
        answer:
          'Sí. Elija otra muestra mate o mueva el deslizador de calidad en cualquier momento y pulse Volver a convertir todo para regenerar cada archivo cargado sin volver a subir. Sus archivos AVIF originales permanecen en la cola hasta que usted los limpie.',
      },
      {
        question: '¿Con qué nombre se guarda el JPG descargado?',
        answer:
          'Las descargas individuales conservan su nombre de archivo original saneado con la extensión .jpg, así que foto.avif se convierte en foto.jpg. Los lotes de dos o más archivos se exportan agrupados dentro de compressmypic_avif_to_jpg.zip.',
      },
      {
        question: '¿Funciona el conversor de AVIF a JPG en el navegador de su celular?',
        answer:
          'Sí, en navegadores de celular modernos con decodificación AVIF nativa, como Chrome actual en Android y Safari en iOS. El selector de color mate, el deslizador de calidad y la descarga ZIP funcionan sin instalar ninguna aplicación.',
      },
      {
        question: '¿Cuándo conviene convertir AVIF a JPG en lugar de AVIF a PNG?',
        answer:
          'Elija JPG cuando necesite un archivo pequeño y universalmente compatible para correo, Office o portales de subida. Elija PNG cuando deba conservar la transparencia o necesite calidad sin pérdida y perfecta en píxeles para editar, teniendo en cuenta que los archivos PNG serán mucho más grandes.',
      },
      {
        question: '¿Por qué el JPG a veces pesa más que el AVIF?',
        answer:
          'AVIF comprime mucho más eficientemente que JPG, así que un AVIF pequeño recodificado como JPG con 88 % puede terminar pesando más que la fuente. Eso es normal: usted está cambiando tamaño de archivo por compatibilidad universal. Bajar la calidad hacia el 75 % suele reducir el JPG de nuevo.',
      },
      {
        question: '¿El conversor elimina los metadatos de los archivos AVIF?',
        answer:
          'Sí. Al dibujar los píxeles en HTML5 Canvas se eliminan los datos EXIF, XMP y de perfil ICC incrustados, así que los JPG resultantes son livianos y no tienen datos ocultos de ubicación ni de cámara.',
      },
    ],
    relatedSlugs: ['/webp-to-jpg', '/heic-to-jpg', '/jpg-to-webp', '/image-converter'],
  },

  {
    slug: '/bmp-to-jpg',
    name: 'Conversor de BMP a JPG',
    shortDescription: 'Convierta mapas de bits BMP enormes sin comprimir a archivos JPG compactos.',
    category: 'convert',
    seoTitle: 'Conversor de BMP a JPG gratis online – Más pequeño',
    seoDescription:
      'Convierta mapas de bits BMP sin comprimir a JPG compacto gratis online en su navegador. Reduzca el tamaño entre un 85 y 95 % en privado, con calidad y ZIP.',
    h1: 'Conversor de BMP a JPG gratis online',
    subtitle:
      'Convierta mapas de bits BMP enormes de Windows sin comprimir en archivos JPG ligeros y fáciles de compartir con nuestro conversor gratis de BMP a JPG, directamente en su navegador. Pensado para quien limpia carpetas de capturas .bmp, escaneos o exportaciones de Paint, convierte archivos BMP de hasta 25 MB cada uno con 88 % de calidad por defecto — y suele reducirlos entre un 85 % y un 95 % — con procesamiento por lotes y descargas ZIP.',
    howToSteps: [
      {
        title: 'Suelte mapas de bits BMP de hasta 25 MB cada uno',
        description:
          'Suba uno o varios archivos .bmp de capturas de pantalla de Windows, escaneos o carpetas antiguas a la zona de subida.',
      },
      {
        title: 'Ajuste la calidad de salida JPG (20 %–100 %)',
        description:
          'Conserve el nítido 88 % por defecto o arrastre hacia el 20 % para archivos diminutos y el 100 % para el máximo detalle, y luego pulse Volver a convertir todo.',
      },
      {
        title: 'Revise el ahorro de tamaño en cada tarjeta',
        description:
          'Cada resultado muestra el enorme tamaño BMP original, el tamaño JPG compacto y el porcentaje ahorrado.',
      },
      {
        title: 'Compare el JPG con el BMP original',
        description:
          'Pulse Comparar en cualquier tarjeta para verificar que el texto y el detalle se mantuvieron nítidos en el visor dividido.',
      },
      {
        title: 'Descargue archivos JPG o Descargar todo (ZIP)',
        description:
          'Guarde archivos .jpg individuales o agrupe el lote en compressmypic_bmp_to_jpg.zip en un clic.',
      },
    ],
    features: [
      {
        title: 'Reducción típica de tamaño del 90 % o más',
        description:
          'Los mapas de bits BMP sin comprimir almacenan píxeles en bruto; la compresión JPG los reduce de forma drástica para correo y web.',
      },
      {
        title: 'Conserva las dimensiones en píxeles',
        description:
          'Mantiene el ancho y alto exactos del original mientras moderniza el formato del archivo.',
      },
      {
        title: 'Cola por lotes y descarga ZIP',
        description:
          'Limpie carpetas de capturas .bmp o escaneos antiguos en una sola pasada rápida.',
      },
      {
        title: 'Privacidad 100 % en el dispositivo',
        description:
          'Sin subidas: la conversión ocurre en local en su computadora.',
      },
    ],
    faqs: [
      {
        question: '¿Por qué los archivos BMP son tan enormes comparados con JPG?',
        answer:
          'BMP es un formato sin comprimir: almacena casi cada píxel como datos de color en bruto con casi ninguna compresión, así que una sola captura de pantalla puede pesar decenas de megabytes. JPG usa compresión inteligente con pérdida que descarta datos que sus ojos apenas notan, y por eso la misma imagen se reduce de forma drástica.',
      },
      {
        question: '¿Cuánto tamaño de archivo puedo ahorrar al convertir BMP a JPG?',
        answer:
          'Como los archivos BMP suelen estar sin comprimir, convertir a JPG con 88 % reduce el tamaño del archivo de forma rutinaria entre un 85 % y un 95 %: un mapa de bits de 10 MB a menudo se convierte en un JPG de 500 KB a 1,5 MB. Los escaneos fotográficos ahorran más, mientras que los gráficos planos de un solo color ahorran un poco menos.',
      },
      {
        question: '¿La conversión de BMP a JPG cambia las dimensiones de la imagen?',
        answer:
          'No. Cada .jpg convertido conserva el 100 % del ancho y alto exactos en píxeles del BMP original, así que nada se recorta ni se redimensiona. Use el Redimensionador de imágenes después si también necesita dimensiones más pequeñas.',
      },
      {
        question: '¿Qué calidad mantiene legibles las capturas de pantalla BMP?',
        answer:
          'El 88 % por defecto mantiene nítidos el texto y los detalles de interfaz de las capturas y elimina la mayor parte del peso del mapa de bits. Para escaneos con letra fina o fuentes pequeñas, suba la calidad al 92 % o 95 %; para compartir rápido, el 80 % suele bastar.',
      },
      {
        question: '¿Se suben los archivos BMP a un servidor?',
        answer:
          'No. La conversión se ejecuta en HTML5 Canvas dentro de la propia pestaña de su navegador, así que sus capturas de pantalla y escaneos nunca salen de su computadora. Al cerrar la pestaña se borran de la memoria del navegador.',
      },
      {
        question: '¿Cómo convierto en lote una carpeta llena de escaneos BMP?',
        answer:
          'Suelte varios archivos .bmp de hasta 25 MB cada uno en la cola, elija una sola calidad para todo el lote y descargue todo junto en compressmypic_bmp_to_jpg.zip. Cada archivo se convierte por separado.',
      },
      {
        question: '¿Cuál es el archivo BMP más grande que se acepta?',
        answer:
          'Cada archivo BMP puede pesar hasta 25 MB, lo que cubre capturas de pantalla grandes y escaneos de alta resolución. Como la conversión se ejecuta en su dispositivo, los archivos grandes se procesan a la velocidad de su procesador local, sin tiempo de espera por subida.',
      },
      {
        question: '¿Puedo convertir archivos BMP sin conexión a internet una vez cargada la página?',
        answer:
          'Sí. Una vez cargada la página en su navegador, la conversión se ejecuta por completo en JavaScript local y HTML5 Canvas, sin llamadas al servidor. Solo necesitará internet de nuevo para cargar la página misma o para descargar los archivos terminados.',
      },
      {
        question: '¿El JPG se abrirá en cualquier programa?',
        answer:
          'Sí. Los archivos .jpg RGB de línea base estándar se abren en prácticamente todos los visores, editores, navegadores, clientes de correo e impresoras, mucho más ampliamente que BMP, que muchas aplicaciones y sitios web modernos ya no aceptan.',
      },
      {
        question: '¿El conversor conserva la transparencia de los BMP?',
        answer:
          'Los archivos BMP rara vez llevan un canal alfa utilizable, y JPG no tiene ningún soporte de transparencia, así que los JPG resultantes siempre son opacos. Si su gráfico necesita transparencia, convierta a PNG o WebP, que conservan el alfa.',
      },
      {
        question: '¿Qué pasa con la profundidad de color de un BMP durante la conversión a JPG?',
        answer:
          'El navegador decodifica el BMP y lo representa a través de la ruta de color estándar de Canvas, exportando un JPG sRGB normal. Los BMP de alta profundidad de color conservan sus colores visibles; solo las variantes indexadas o de 1 bit muy exóticas pueden necesitar guardarse de nuevo en un editor primero.',
      },
      {
        question: '¿Puedo comprobar la calidad antes de descargar el JPG?',
        answer:
          'Sí. Pulse Comparar en cualquier tarjeta de resultado para abrir el visor dividido y arrastre sobre la imagen para inspeccionar texto, líneas y detalle frente al BMP original. Cada tarjeta también muestra el tamaño exacto ahorrado.',
      },
      {
        question: '¿Es posible ajustar el deslizador de calidad después de la primera conversión de BMP a JPG?',
        answer:
          'Sí. Mueva el deslizador de calidad a un nuevo valor en cualquier momento y pulse Volver a convertir todo para regenerar cada archivo cargado sin volver a subir. Sus archivos BMP originales permanecen en la cola hasta que usted los limpie.',
      },
      {
        question: '¿Qué nombre recibe el JPG descargado?',
        answer:
          'Las descargas individuales conservan su nombre de archivo original saneado con la extensión .jpg, así que scan.bmp se convierte en scan.jpg. Los lotes de dos o más archivos se exportan agrupados dentro de compressmypic_bmp_to_jpg.zip.',
      },
      {
        question: '¿Funciona el conversor de BMP a JPG en el navegador de su celular?',
        answer:
          'Sí. La zona de subida, el deslizador de calidad, el visor de comparación y la descarga ZIP funcionan en Safari en iOS y Chrome en Android sin instalar ninguna aplicación. Los lotes grandes simplemente tardan un poco más en los procesadores de celular.',
      },
      {
        question: '¿Cuándo es mejor BMP a JPG que BMP a PNG?',
        answer:
          'Elija JPG cuando necesite el archivo más pequeño y fácil de compartir para correo, web o mensajería. Elija PNG cuando necesite calidad de archivo sin pérdida o planee editar la imagen después, teniendo en cuenta que los archivos PNG seguirán siendo mucho más grandes que JPG.',
      },
      {
        question: '¿Se pueden convertir archivos BMP antiguos de 1 bit o 8 bits?',
        answer:
          'La mayoría de los archivos BMP estándar de 1 bit, 8 bits, 24 bits y 32 bits se decodifican con limpieza en los navegadores modernos. Las variantes muy inusuales, como los BMP con compresión RLE o en formato OS/2, pueden mostrar un error por archivo; guardarlos de nuevo como BMP de 24 bits en Paint o en un editor lo soluciona.',
      },
      {
        question: '¿Por qué los archivos BMP escaneados se comprimen tan bien como JPG?',
        answer:
          'Los escaneos contienen degradados suaves, textura de papel y detalle fotográfico que la compresión coseno de JPEG maneja con mucha eficiencia. Las zonas planas de un solo color se comprimen aún mejor, y por eso un escaneo de 10 MB puede bajar de 1 MB con 88 % de calidad.',
      },
      {
        question: '¿Se eliminan los metadatos al convertir BMP a JPG?',
        answer:
          'Sí. Al dibujar los píxeles en HTML5 Canvas se eliminan los bloques de metadatos incrustados, así que los JPG resultantes son livianos y no tienen detalles ocultos. Los archivos BMP rara vez llevan muchos metadatos.',
      },
      {
        question: '¿Puedo convertir archivos BMP de una cámara digital o un escáner directamente?',
        answer:
          'Sí, si el archivo está guardado como .bmp: la mayoría de los escáneres y las cámaras antiguas ofrecen BMP como opción de exportación. Las cámaras modernas suelen guardar JPG directamente, así que revise primero la extensión del archivo y use el conversor correspondiente si no es un mapa de bits.',
      },
    ],
    relatedSlugs: ['/png-to-jpg', '/image-converter', '/bulk-image-converter', '/compress-image-to-100kb'],
  },

  {
    slug: '/remove-background',
    name: 'Eliminador de fondo con IA',
    shortDescription: 'Elimine el fondo de sus imágenes con IA en el navegador y exporte PNG transparentes.',
    category: 'ai-tools',
    seoTitle: 'Eliminador de fondo gratis online – IA en el navegador',
    seoDescription:
      'Elimine el fondo de sus imágenes gratis con IA en el navegador. Descargue un PNG transparente o fondo blanco, negro o personalizado, en privado y sin registro.',
    h1: 'Eliminador de fondo con IA gratis online',
    subtitle:
      'Elimine el fondo de retratos, fotos de producto, mascotas y logotipos con nuestro eliminador de fondo con IA gratis, que funciona por completo en su navegador. Pensado para vendedores, creadores y diseñadores que necesitan recortes limpios con rapidez, carga un modelo de IA compacto una sola vez (unos 35 MB, guardado en caché después), procesa una foto a la vez de hasta 20 MB y exporta un PNG transparente, o coloca su recorte sobre un fondo blanco, negro o personalizado.',
    howToSteps: [
      {
        title: 'Espere a que cargue el modelo de IA',
        description:
          'En el primer uso, la página descarga el modelo compacto isnet_quint8 (unos 35 MB) una sola vez y lo guarda en la caché de su navegador; las visitas posteriores arrancan al instante.',
      },
      {
        title: 'Suelte una foto de hasta 20 MB',
        description:
          'Suba una sola foto JPG, PNG, WebP, HEIC, BMP o AVIF — un archivo a la vez — a la zona de subida.',
      },
      {
        title: 'Deje que la IA recorte su sujeto',
        description:
          'El modelo aísla su sujeto en local en su navegador y muestra el original junto al recorte transparente.',
      },
      {
        title: 'Compare el recorte con el original',
        description:
          'Pulse Comparación dividida para arrastrar sobre la vista de antes y después y revisar los bordes alrededor del cabello, el pelaje y los detalles finos.',
      },
      {
        title: 'Elija transparente, blanco, negro o personalizado',
        description:
          'Conserve el PNG transparente, o cambie a un fondo blanco, negro o de color personalizado antes de descargar.',
      },
      {
        title: 'Descargue su recorte',
        description:
          'Guarde el PNG transparente (con el nombre de su foto más _no_bg) o la versión con fondo sólido, y luego pulse Nueva imagen para la siguiente foto.',
      },
    ],
    features: [
      {
        title: 'Segmentación de IA 100 % en el dispositivo',
        description:
          'Impulsado por el modelo ONNX ligero isnet_quint8 que se ejecuta en local en su navegador: sus fotos nunca se suben a ningún servidor.',
      },
      {
        title: 'Exportación instantánea de PNG transparente',
        description:
          'Descargue recortes PNG nítidos con transparencia alfa listos para anuncios de comercio electrónico, miniaturas, presentaciones y trabajo de diseño.',
      },
      {
        title: 'Cambiador de fondo sólido integrado',
        description:
          'Obtenga una vista previa de su recorte y expórtelo sobre fondo blanco puro, negro intenso o cualquier color hexadecimal personalizado sin abrir otra aplicación.',
      },
      {
        title: 'Gratis, sin registro y sin marca de agua',
        description:
          'Recortes a resolución completa sin límites diarios, sin cuentas y sin marcas de agua.',
      },
    ],
    faqs: [
      {
        question: '¿La eliminación de fondo envía mi foto a un servidor?',
        answer:
          'No. El modelo de IA se descarga a su navegador una sola vez y ejecuta la inferencia por completo en su dispositivo, así que su foto nunca se sube, ni se almacena, ni la ve nadie más. Al cerrar la pestaña se borra todo de la memoria del navegador.',
      },
      {
        question: '¿Por qué el primer recorte es más lento que los siguientes?',
        answer:
          'En la primera visita, su navegador descarga el modelo compacto isnet_quint8 (unos 35 MB) e inicializa el motor de IA WebAssembly, lo que toma unos segundos adicionales. Después el modelo queda en caché, así que las fotos siguientes se procesan mucho más rápido.',
      },
      {
        question: '¿Qué tan grande es el modelo de IA que descarga mi navegador?',
        answer:
          'Unos 35 MB, descargados una sola vez en el primer uso y luego guardados en la caché de su navegador. El pequeño modelo cuantizado isnet_quint8 es lo que hace posible la eliminación en el navegador sin servidor: los modelos en la nube más grandes necesitarían una subida y una API paga.',
      },
      {
        question: '¿Puedo usar el eliminador de fondo sin internet después de la primera carga?',
        answer:
          'En su mayor parte, sí: una vez que el modelo queda en caché, la eliminación real se ejecuta totalmente sin conexión en su navegador. Usted sigue necesitando internet para cargar la página misma la primera vez, y el modelo en caché puede borrarse si el navegador limpia los datos del sitio.',
      },
      {
        question: '¿Qué tipos de fotos producen los bordes más limpios al eliminar el fondo?',
        answer:
          'Las fotos con un sujeto claro y buen contraste frente al fondo funcionan mejor: retratos, fotos de producto, mascotas, autos y logotipos con contornos nítidos. Una iluminación plana y un fondo sencillo le dan al modelo el trabajo más fácil.',
      },
      {
        question: '¿Puedo eliminar el fondo de una foto con un paisaje desordenado o con mucho movimiento?',
        answer:
          'Sí, pero espere bordes más suaves: cuando el sujeto se mezcla con un fondo recargado, el pequeño modelo en el dispositivo tiene que adivinar dónde termina el sujeto. Un fondo más limpio, mejor iluminación o un recorte más cercano antes de subir dan un recorte visiblemente mejor.',
      },
      {
        question: '¿Qué pasa con el cabello fino, el pelaje o los bordes transparentes al quitar el fondo?',
        answer:
          'Los mechones finos y el pelaje vaporoso son el caso más difícil para un modelo compacto cuantizado, así que los bordes allí pueden verse levemente suaves o perder algunos cabellos. Revise la vista Comparación dividida: para la mayoría de los retratos y fotos de producto el resultado es limpio, pero el enmascarado de cabello perfecto en píxeles es una limitación conocida.',
      },
      {
        question: '¿Cómo coloco mi recorte sobre un fondo blanco puro para Amazon o eBay?',
        answer:
          'Después de que el recorte esté listo, elija Blanco en Opción de relleno de fondo y pulse Descargar con fondo blanco. Los mercados prefieren JPG y PNG nítidos con fondo blanco opaco para las miniaturas principales de producto, y esto exporta exactamente eso.',
      },
      {
        question: '¿Qué formatos de archivo puedo subir al eliminador de fondo?',
        answer:
          'JPG, PNG, WebP, HEIC, BMP y AVIF: la herramienta acepta el mismo conjunto extendido de imágenes que el resto del sitio. Las fotos HEIC de iPhone se convierten a una imagen decodificable de forma automática antes de que se ejecute el modelo.',
      },
      {
        question: '¿Qué tamaño máximo de foto acepta el eliminador de fondo?',
        answer:
          'Cada foto puede pesar hasta 20 MB, y la herramienta procesa una foto a la vez. Eso cubre fotos de alta resolución de celular y cámara; los archivos muy grandes simplemente tardan un poco más porque el modelo se ejecuta en su dispositivo.',
      },
      {
        question: '¿Puedo eliminar el fondo de varias fotos a la vez?',
        answer:
          'No, esta herramienta maneja una foto a la vez para que el modelo de IA pueda concentrar toda la memoria del dispositivo en un solo recorte limpio. Pulse Nueva imagen después de cada descarga para procesar la siguiente foto: no hay límite diario.',
      },
      {
        question: '¿El recorte conserva la resolución de la foto original?',
        answer:
          'Sí. El PNG transparente exportado conserva el 100 % del ancho y alto en píxeles de la foto original, así que una foto de producto de 4000 px sigue siendo de 4000 px. Use el Redimensionador de imágenes después si necesita una versión más pequeña para la web.',
      },
      {
        question: '¿Por qué mi PNG transparente pesa más que la foto original?',
        answer:
          'PNG almacena cada píxel del recorte sin pérdida, mientras que su JPG original estaba muy comprimido, así que un recorte grande y detallado puede pesar fácilmente más que una fuente JPG pequeña. Eso es normal: usted está cambiando tamaño de archivo por transparencia y bordes perfectos en píxeles.',
      },
      {
        question: '¿Puedo volver a ejecutar la eliminación en la misma foto?',
        answer:
          'Sí. Pulse Volver a ejecutar la eliminación para procesar la misma foto de nuevo: útil si la primera pasada tomó una sombra como parte del sujeto o si quiere comparar resultados. El modelo es determinista, así que el resultado suele ser idéntico a menos que la entrada haya cambiado.',
      },
      {
        question: '¿Qué debo hacer si falta parte del sujeto en el recorte?',
        answer:
          'Primero revise la vista Comparación dividida para ver con exactitud qué se recortó. Los sujetos que se mezclan con el fondo — ropa del mismo color, vidrio o camuflaje — confunden al modelo; pruebe una foto con mayor contraste entre sujeto y fondo o recorte más cerca del sujeto antes de subir.',
      },
      {
        question: '¿Hay alguna marca de agua en el PNG descargado del eliminador de fondo?',
        answer:
          'No. Las descargas son recortes a resolución completa sin marca de agua, sin logotipo y sin marca añadida. Tampoco hay registro, ni cuenta, ni límite diario sobre cuántas fotos puede procesar.',
      },
      {
        question: '¿Funciona la eliminación de fondo en el navegador de su celular?',
        answer:
          'Sí. El modelo se descarga y se ejecuta en Safari en iOS y Chrome en Android, con los mismos controles de subida, comparación y descarga. En celulares, las fotos grandes tardan más porque la IA se ejecuta en el procesador del teléfono: el Wi-Fi ayuda para la primera descarga del modelo.',
      },
      {
        question: '¿En qué se diferencia esta herramienta de servicios pagos como remove.bg?',
        answer:
          'Esta herramienta es gratis, privada y se ejecuta por completo en su navegador sin subida y sin cuenta, mientras que las herramientas pagas en la nube procesan su foto en sus servidores. El compromiso es la calidad en bordes difíciles: el pequeño modelo en el dispositivo es excelente para sujetos claros, pero no puede igualar a los modelos grandes en la nube en cabello fino o escenas recargadas.',
      },
      {
        question: '¿Puedo usar el recorte en Canva, Photoshop o PowerPoint?',
        answer:
          'Sí. El PNG transparente exportado se abre directamente en Canva, Photoshop, Figma, PowerPoint y Google Slides, donde usted puede colocarlo sobre cualquier fondo, diapositiva o diseño. La descarga con fondo sólido funciona igual para aplicaciones que necesitan una imagen opaca.',
      },
      {
        question: '¿Qué pasa con mi foto después de cerrar la pestaña del eliminador de fondo?',
        answer:
          'No se almacena nada en ningún lugar: el procesamiento ocurre en la memoria del navegador, la foto nunca se sube y al cerrar la pestaña se borran la imagen y el recorte. Solo el modelo de IA en caché permanece en el navegador para un uso futuro más rápido.',
      },
    ],
    relatedSlugs: ['/add-background-to-image', '/image-resizer', '/png-to-webp'],
  },
];

export const TOOL_BY_SLUG_ES: Record<string, ToolDefinition> = Object.fromEntries(
  TOOLS_REGISTRY_ES.map((t) => [t.slug, t])
);
