import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, Mail, Globe, Target, CheckCircle2, Layers, Gauge } from 'lucide-react';
import { getPastelCardClass, getPastelTileClass } from '../../utils/pastel';

interface Guide100kbPageEsProps {
  onNavigate: (path: string) => void;
}

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const STEPS: { title: string; text: string }[] = [
  {
    title: 'Abra CompressMyPic',
    text: 'Vaya a compressmypic.online en su navegador. No hay nada que instalar ni ninguna cuenta que crear: la herramienta es gratis, sin registro y sin marca de agua.',
  },
  {
    title: 'Suba su imagen',
    text: 'Arrastre su imagen y suéltela en la página, o toque «Explorar archivos» para elegirla de su dispositivo. Se admiten JPG, PNG y WebP, hasta 20 MB por imagen. Puede subir varias imágenes a la vez.',
  },
  {
    title: 'Empiece con el ajuste predefinido Equilibrado',
    text: 'El ajuste predefinido Equilibrado establece la calidad en alrededor del 70 %. Para la mayoría de las fotos, esto ya reduce el archivo a una fracción de su tamaño original; revise el tamaño en vivo que se muestra junto a su imagen para ver en qué punto está.',
  },
  {
    title: 'Baje el control deslizante de calidad paso a paso',
    text: 'No hay una casilla donde usted escriba «100 KB»: en cambio, arrastre el control deslizante de calidad hacia abajo lentamente y observe cómo el tamaño del antes y el después se actualiza en vivo después de cada cambio. Avance en pasos pequeños (por ejemplo, del 70 % al 60 % y al 50 %) para no pasarse y no perder más calidad de la necesaria.',
  },
  {
    title: 'Cambie a WebP si todavía está por encima de 100 KB',
    text: 'Si el archivo sigue por encima de 100 KB con una calidad razonable, cambie el formato de salida a WebP. WebP suele ser entre un 25 y un 35 % más pequeño que JPG con la misma calidad visible, y a menudo cierra la brecha hasta 100 KB sin bajar más la calidad.',
  },
  {
    title: 'Compare el antes y el después',
    text: 'Abra la comparación del antes y el después y acérquese a las caras, al texto y a los detalles finos. Si la foto sigue viéndose bien, ya terminó. Si se ve en bloques o descolorida, suba un poco la calidad y acepte un archivo ligeramente por encima de 100 KB: una foto nítida de 120 KB es mejor que una borrosa de 100 KB.',
  },
  {
    title: 'Descargue su imagen',
    text: 'Toque Descargar para guardar el archivo más pequeño, o use «Descargar todo (ZIP)» si redujo varias imágenes a la vez. Su imagen original nunca se modifica: usted siempre recibe una copia nueva y más pequeña.',
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    id: 'kb-faq-1',
    question: '¿Cómo bajo el tamaño de mi foto hasta unos 100 KB?',
    answer: 'Súbala a CompressMyPic, empiece con el ajuste predefinido Equilibrado y luego baje el control deslizante de calidad paso a paso mientras observa el tamaño en vivo del antes y el después. Deténgase en cuanto el tamaño comprimido esté cerca de 100 KB. Si todavía está por encima, cambie el formato de salida a WebP.',
  },
  {
    id: 'kb-faq-2',
    question: '¿Por qué no hay una casilla para escribir exactamente 100 KB?',
    answer: 'Porque cada foto se comprime de manera diferente: un cielo despejado se reduce mucho más que una escena concurrida con la misma calidad. Una casilla fija de «100 KB» tendría que adivinar. En cambio, CompressMyPic le muestra el tamaño comprimido en vivo después de cada cambio, para que usted mismo pueda llevar el archivo a 100 KB con control total sobre la calidad.',
  },
  {
    id: 'kb-faq-3',
    question: '¿Qué ajuste de calidad me da unos 100 KB?',
    answer: 'Depende de la foto, pero para una foto típica de celular, una calidad del 50 al 70 % suele quedar cerca de 100 KB. Una foto sencilla con colores planos puede llegar a 100 KB con el 70 %, mientras que un paisaje con muchos detalles puede necesitar del 40 al 50 %. Observe el tamaño en vivo: ese número es la verdad, no ningún porcentaje fijo.',
  },
  {
    id: 'kb-faq-4',
    question: 'Mi foto sigue pesando más de 100 KB con calidad baja, ¿qué hago ahora?',
    answer: 'Primero cambie el formato de salida a WebP, que suele ser entre un 25 y un 35 % más pequeño que JPG. Si todavía está por encima, baje un poco más la calidad y revise la comparación: a menudo una pequeña bajada adicional es invisible. Como último recurso, una foto con dimensiones enormes puede necesitar un ajuste de calidad más bajo de lo que esperaba, porque más píxeles significan más datos.',
  },
  {
    id: 'kb-faq-5',
    question: '¿Debería usar WebP para llegar a 100 KB?',
    answer: 'Sí, siempre que pueda. WebP es la forma más fácil de llegar a 100 KB sin bajar demasiado la calidad, porque crea un archivo más pequeño con la misma calidad visible que JPG. Use WebP para las imágenes de sitios web y en todos los lugares donde se usen navegadores modernos; use JPG solo cuando la imagen deba abrirse en programas antiguos o compartirse por WhatsApp.',
  },
  {
    id: 'kb-faq-6',
    question: '¿Reducir a 100 KB hace que la foto se vea borrosa?',
    answer: 'No, si lo hace con cuidado. Con 100 KB, una foto normal de celular sigue viéndose nítida en las pantallas, porque las pantallas muestran muchos menos píxeles que los que capturó la cámara. Solo se ve borrosa si baja demasiado la calidad (por debajo de aproximadamente el 40 %) o si la foto se imprime grande. Revise siempre la comparación del antes y el después antes de descargar.',
  },
  {
    id: 'kb-faq-7',
    question: '¿Puedo reducir un PNG a 100 KB?',
    answer: 'Sí, pero las fotos PNG son grandes desde el principio, así que cuesta más trabajo. Suba el PNG, baje el control deslizante de calidad y cambie la salida a WebP o JPG: solo eso a menudo reduce el tamaño a más de la mitad. Conserve la salida PNG solo si la imagen necesita transparencia, y acepte que un PNG transparente puede no llegar a 100 KB.',
  },
  {
    id: 'kb-faq-8',
    question: '¿Cómo puedo dejar una imagen en 200 KB?',
    answer: 'Use el mismo método: suba la imagen, empiece con el ajuste predefinido Equilibrado y baje el control deslizante de calidad mientras observa el tamaño en vivo hasta que esté cerca de 200 KB. La mayoría de las fotos llegan a 200 KB fácilmente con una calidad del 70 al 80 %, así que por lo general no necesita bajar mucho.',
  },
  {
    id: 'kb-faq-9',
    question: '¿Qué debo hacer para que una imagen pese 50 KB?',
    answer: 'Suba la imagen, cambie el formato de salida a WebP y baje el control deslizante de calidad poco a poco hasta que el tamaño en vivo esté cerca de 50 KB, por lo general con una calidad de alrededor del 40 al 55 % para una foto. Revise la comparación con atención, porque con 50 KB los detalles finos empiezan a sufrir; está bien para miniaturas y chat, menos para las fotos que desea conservar.',
  },
  {
    id: 'kb-faq-10',
    question: '¿Es posible bajar una imagen hasta 20 KB?',
    answer: 'Use la salida WebP y un ajuste de calidad bajo, por lo general del 25 al 40 %, y observe el tamaño en vivo. 20 KB es muy poco, así que espere una suavidad visible: sirve para iconos, miniaturas e imágenes de vista previa pequeñas, no para fotos con caras. Si la imagen todavía no llega a 20 KB, probablemente tenga demasiados detalles para un archivo tan pequeño.',
  },
  {
    id: 'kb-faq-11',
    question: '¿Cuál es un buen tamaño de archivo para las imágenes de un sitio web?',
    answer: 'Apunte a menos de 100 KB por imagen para las fotos de contenido normales, y a menos de 200 KB para las imágenes principales grandes. Los archivos pequeños hacen que las páginas carguen más rápido, algo que los visitantes notan y que Google premia. Use el formato WebP y el ajuste predefinido Equilibrado como punto de partida para las imágenes de sitios web.',
  },
  {
    id: 'kb-faq-12',
    question: '¿Cuál es el límite de tamaño de los archivos adjuntos de correo?',
    answer: 'La mayoría de los proveedores de correo permiten de 20 a 25 MB por mensaje en total, incluidos todos los archivos adjuntos; Gmail permite 25 MB. Una sola foto reducida a 100 KB nunca es un problema; incluso diez fotos de 100 KB cada una son solo 1 MB. Comprimir primero es lo que hace que enviar varias fotos por correo no tenga complicaciones.',
  },
  {
    id: 'kb-faq-13',
    question: '¿Puedo reducir varias imágenes a 100 KB a la vez?',
    answer: 'Sí. Suba todas las imágenes juntas, aplique el mismo ajuste predefinido y la misma calidad a todas y revise el tamaño en vivo de cada una. Si una imagen sigue por encima de 100 KB, ajústela por separado y luego descargue todo junto con el botón «Descargar todo (ZIP)».',
  },
  {
    id: 'kb-faq-14',
    question: '¿La herramienta cambia las dimensiones de mi imagen?',
    answer: 'No. CompressMyPic mantiene las dimensiones de su imagen exactamente iguales: solo se reduce el tamaño del archivo. Su foto conserva el mismo ancho, alto y proporción que la original, así que una foto de 4000×3000 se queda en 4000×3000, solo que con un archivo mucho más pequeño.',
  },
  {
    id: 'kb-faq-15',
    question: '¿Cómo compruebo el tamaño de mi imagen comprimida?',
    answer: 'CompressMyPic muestra el tamaño original y el tamaño comprimido de cada imagen, en vivo, justo debajo de cada foto; por ejemplo, «4,2 MB → 98 KB». También puede revisar el archivo descargado en su dispositivo: en un celular, mire los detalles del archivo en su galería o en el administrador de archivos.',
  },
  {
    id: 'kb-faq-16',
    question: '¿100 KB es suficiente calidad para un sitio web?',
    answer: 'Sí, para casi todos los usos web. Las fotos de sitios web se muestran con unos pocos cientos de píxeles de ancho, así que una imagen de 100 KB se ve nítida en pantalla. Solo las imágenes principales a pantalla completa o las fotos destinadas a imprimirse necesitan archivos más grandes. Comprima a 100 KB, revise la comparación y verá que la calidad se mantiene.',
  },
  {
    id: 'kb-faq-17',
    question: '¿Puedo reducir una captura de pantalla a 100 KB?',
    answer: 'Sí, y las capturas de pantalla son el caso más fácil. Tienen grandes áreas de color plano, así que se comprimen muy bien: una captura de pantalla que empieza en 1 MB a menudo baja de 100 KB con el ajuste predefinido Equilibrado. Pruebe la salida WebP para obtener el resultado más pequeño.',
  },
  {
    id: 'kb-faq-18',
    question: '¿Mis imágenes salen de mi dispositivo al comprimirlas?',
    answer: 'No. Toda la compresión ocurre dentro de su propio navegador en su dispositivo, así que sus imágenes nunca se suben a un servidor, ni se almacenan ni las ve nadie más. Se quedan en la memoria de su navegador y se borran cuando cierra o actualiza la pestaña.',
  },
  {
    id: 'kb-faq-19',
    question: '¿Hay algún límite en la cantidad de imágenes que puedo reducir?',
    answer: 'No. No hay límite en la cantidad de imágenes que puede comprimir, y no necesita ninguna cuenta ni registro. El único límite es de 20 MB por imagen, que cubre fotos de cámara de alta resolución y capturas de pantalla grandes.',
  },
  {
    id: 'kb-faq-20',
    question: '¿Reducir imágenes a 100 KB es gratis?',
    answer: 'Sí, completamente gratis. No hay cargos, no hay planes de pago, no hay créditos y no hay marca de agua en sus imágenes comprimidas. Abra el sitio, reduzca sus imágenes a 100 KB y descárguelas tantas veces como desee.',
  },
];

export const Guide100kbPageEs: React.FC<Guide100kbPageEsProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['kb-faq-1', 'kb-faq-2']));

  useEffect(() => {
    document.title = 'Cómo reducir una imagen a 100 KB para web y correo';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'Reduzca el tamaño de una imagen a 100 KB para sitios web y correo electrónico con un compresor online gratis. Guía paso a paso, sin registro ni marca de agua.');
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = 'https://compressmypic.online/es/guias/reducir-imagen-a-100kb';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HowTo',
          name: 'Cómo reducir el tamaño de una imagen a 100 KB para sitios web y correo electrónico',
          description: 'Use el control deslizante de calidad y la salida WebP en CompressMyPic para reducir una imagen a unos 100 KB.',
          step: STEPS.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.title, text: s.text })),
        },
        {
          '@type': 'FAQPage',
          mainEntity: FAQ_DATA.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        },
      ],
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'guide-100kb-jsonld';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => {
      const existing = document.getElementById('guide-100kb-jsonld');
      if (existing) existing.remove();
    };
  }, []);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="bg-[var(--bg)] py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-6">
          <button
            type="button"
            onClick={() => onNavigate('/es/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7c3aed] dark:text-[#c4b5fd] hover:text-[#6d28d9] dark:hover:text-[#ddd6fe] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al compresor de imágenes</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-[-0.025em] leading-[1.15]">
            Cómo reducir el tamaño de una imagen a 100 KB para sitios web y correo electrónico
          </h1>
          <p className="mt-3 text-lg font-medium text-[var(--ink-2)] leading-relaxed">
            Una foto de 4 MB hace que su sitio web cargue lento y atasca un correo electrónico. Reducirla a unos 100 KB hace que las páginas carguen rápido y que los correos se envíen al instante, y si lo hace bien, nadie puede notar la diferencia.
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Target className="w-4 h-4" />
              </span>
              <span>Por qué 100 KB es el número mágico</span>
            </h2>
            <p>
              100 KB es el tamaño que la mayoría de la gente busca porque está en el punto ideal: lo suficientemente pequeño para cargar al instante en un sitio web o entrar en cualquier correo, pero lo suficientemente grande para seguir viéndose nítido en una pantalla. Una foto típica de celular empieza en 3 a 5 MB, así que llegar a 100 KB significa eliminar aproximadamente el 97 % del archivo, y la compresión moderna lo logra sobre todo eliminando datos que sus ojos no pueden ver.
            </p>
            <p>
              Una nota honesta antes de empezar: CompressMyPic no tiene una casilla donde usted escriba «100 KB» y obtenga exactamente ese tamaño. Ninguna herramienta honesta puede prometer un número exacto, porque cada foto se comprime de manera diferente. En cambio, la herramienta le muestra el tamaño comprimido en vivo después de cada cambio, y usted mismo lo lleva hasta 100 KB con el control deslizante de calidad. Esta guía le muestra exactamente cómo hacerlo.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(2)} flex items-center justify-center shrink-0`}>
                <Gauge className="w-4 h-4" />
              </span>
              <span>Paso a paso: reduzca una imagen a 100 KB</span>
            </h2>
            <ol className="space-y-3">
              {STEPS.map((step, i) => (
                <li
                  key={step.title}
                  className={`flex gap-3.5 p-4 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(i * 2)}`}
                >
                  <span className="flex-shrink-0 w-7 h-7 rounded-lg btn-purple-grad text-sm font-mono font-bold flex items-center justify-center mt-0.5 shadow-xs">
                    {i + 1}
                  </span>
                  <div>
                    <div className="font-sans font-bold text-[var(--ink-navy)] text-sm sm:text-base">{step.title}</div>
                    <p className="text-sm sm:text-base text-[var(--ink-2)] mt-0.5">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/reduce-image-size-to-100kb-1.png"
              alt="Captura de pantalla de cómo subir una foto grande a CompressMyPic para reducirla a 100 KB"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              Suba su foto: el tamaño original se muestra de inmediato, así que sabe cuánto necesita reducir.
            </figcaption>
          </figure>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(4)} flex items-center justify-center shrink-0`}>
                <Globe className="w-4 h-4" />
              </span>
              <span>Objetivos comunes de un vistazo</span>
            </h2>
            <p>
              100 KB no es el único objetivo que la gente necesita. El mismo método funciona para cualquier tamaño; esto es lo que puede esperar de cada uno:
            </p>
            <div className="overflow-x-auto pt-1">
              <table className="w-full text-sm border border-[var(--line)] rounded-2xl overflow-hidden bg-[var(--surface)] shadow-[var(--shadow)]">
                <thead>
                  <tr className="bg-[var(--bg-soft)] text-[var(--ink-navy)] text-left border-b border-[var(--line)]">
                    <th className="px-4 py-3 font-semibold">Objetivo</th>
                    <th className="px-4 py-3 font-semibold">Calidad típica</th>
                    <th className="px-4 py-3 font-semibold">Ideal para</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--line)]">
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#7c3aed] dark:text-[#c4b5fd]">200 KB</td>
                    <td className="px-4 py-3">70–80 %</td>
                    <td className="px-4 py-3">Fotos de blog, imágenes web grandes</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#7c3aed] dark:text-[#c4b5fd]">100 KB</td>
                    <td className="px-4 py-3">50–70 %</td>
                    <td className="px-4 py-3">Fotos de sitios web, archivos adjuntos de correo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#7c3aed] dark:text-[#c4b5fd]">50 KB</td>
                    <td className="px-4 py-3">40–55 % + WebP</td>
                    <td className="px-4 py-3">Miniaturas, chat, páginas rápidas</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#7c3aed] dark:text-[#c4b5fd]">20 KB</td>
                    <td className="px-4 py-3">25–40 % + WebP</td>
                    <td className="px-4 py-3">Iconos, vistas previas pequeñas</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm">
              Estos son puntos de partida, no promesas. Una foto sencilla llega a 100 KB fácilmente; una foto con muchos detalles necesita un ajuste de calidad más bajo. Confíe en el número del tamaño en vivo, no en el porcentaje.
            </p>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-2">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(6)} flex items-center justify-center shrink-0`}>
                <Mail className="w-4 h-4" />
              </span>
              <span>Consejos para sitios web y correo electrónico</span>
            </h2>
            <ul className="space-y-2 list-disc pl-5 text-sm sm:text-base">
              <li>Para los sitios web, use la salida WebP: es la forma más rápida de llegar a 100 KB y todos los navegadores modernos la admiten.</li>
              <li>Para el correo electrónico, JPG es el formato más seguro porque todas las aplicaciones de correo lo abren. Un JPG de 100 KB se adjunta al instante y nunca rebota por tamaño.</li>
              <li>Comprima todas las fotos de una página o de un correo juntas y luego descárguelas todas con el botón Descargar todo (ZIP).</li>
              <li>No persiga un 100 KB exacto. Una foto nítida de 115 KB es mejor que una borrosa de exactamente 100 KB: la diferencia en el tiempo de carga es nula.</li>
              <li>Revise siempre la comparación del antes y el después con el zoom al máximo antes de publicar o enviar la foto.</li>
            </ul>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/reduce-image-size-to-100kb-2.png"
              alt="Captura de pantalla del tamaño del archivo en vivo, antes y después, que muestra una imagen reducida a unos 100 KB"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              El tamaño en vivo del antes y el después muestra su progreso: baje el control deslizante hasta que el tamaño comprimido esté cerca de 100 KB.
            </figcaption>
          </figure>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-7">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(7)} flex items-center justify-center shrink-0`}>
                <CheckCircle2 className="w-4 h-4" />
              </span>
              <span>Cuando 100 KB no es posible</span>
            </h2>
            <p className="text-sm sm:text-base">
              Algunas imágenes simplemente no pueden llegar a 100 KB sin verse mal: una foto muy grande y con muchos detalles, o un PNG con transparencia que debe seguir siendo PNG. En ese caso, no lo fuerce. Una foto nítida de 180 KB es mejor que una arruinada de 100 KB en todos los casos: para un sitio web sigue cargando rápido y para el correo sigue estando muy por debajo de cualquier límite de archivos adjuntos. El objetivo es un archivo pequeño que siga viéndose bien, no un número mágico.
            </p>
          </section>

          {/* FAQ */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Layers className="w-4 h-4" />
              </span>
              <span>Preguntas frecuentes</span>
            </h2>
            <div className="space-y-3">
              {FAQ_DATA.map((item, idx) => {
                const isOpen = openIds.has(item.id);
                return (
                  <div
                    key={item.id}
                    className={`border rounded-2xl overflow-hidden shadow-[var(--shadow)] transition-shadow hover:shadow-[var(--shadow-lg)] ${getPastelCardClass(idx)}`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(item.id)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left transition-colors cursor-pointer hover:bg-white/30 dark:hover:bg-white/5"
                    >
                      <span className="text-sm sm:text-base font-bold text-[var(--ink-navy)]">{item.question}</span>
                      <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#7c3aed] dark:text-[#c4b5fd]' : 'text-[var(--ink-3)]'}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 py-4 text-sm sm:text-base text-[var(--ink-2)] leading-relaxed border-t border-black/5 dark:border-white/10 bg-white/55 dark:bg-slate-900/35">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Related guides */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">Guías relacionadas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => onNavigate('/es/guias/comprimir-imagenes-para-whatsapp')}
                className={`text-left p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(0)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">Cómo comprimir imágenes para WhatsApp sin perder calidad</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">Reduzca las fotos usted mismo primero y luego envíelas como documentos para que WhatsApp no pueda difuminarlas.</p>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/es/guias/jpg-vs-png-vs-webp')}
                className={`text-left p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(2)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">JPG vs PNG vs WebP: ¿qué formato debería usar?</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">Tamaño de archivo, calidad y transparencia comparados, para que elija el formato correcto cada vez.</p>
              </button>
            </div>
          </section>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/es/')}
              className="flex-1 px-5 py-3 rounded-[12px] btn-purple-grad text-sm font-semibold shadow-sm transition-all cursor-pointer"
            >
              Comprimir imágenes gratis
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/es/guias/jpg-vs-png-vs-webp')}
              className="flex-1 px-5 py-3 rounded-[12px] bg-[var(--surface)] text-[var(--ink-navy)] text-sm font-semibold border border-[var(--line-strong)] shadow-xs hover:border-[#7c3aed]/40 hover:bg-[var(--bg-soft)] transition-colors cursor-pointer"
            >
              JPG vs PNG vs WebP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
