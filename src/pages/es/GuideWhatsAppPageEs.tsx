import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, MessageCircle, Send, Smartphone, CheckCircle2, FileWarning, Layers } from 'lucide-react';

interface GuideWhatsAppPageEsProps {
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
    text: 'Vaya a compressmypic.online en el navegador de su celular o de su computadora. No hay nada que instalar ni ninguna cuenta que crear: la herramienta se abre de inmediato.',
  },
  {
    title: 'Suba su foto',
    text: 'Toque «Explorar archivos» y elija la foto de su galería, o arrastre la foto y suéltela en la página. Puede subir varias fotos a la vez. Cada imagen puede pesar hasta 20 MB.',
  },
  {
    title: 'Empiece con el ajuste predefinido Equilibrado',
    text: 'El ajuste predefinido Equilibrado (alrededor del 70 % de calidad) es un buen punto de partida para las fotos de WhatsApp. Reduce mucho el tamaño del archivo y la foto sigue viéndose nítida en la pantalla de un celular.',
  },
  {
    title: 'Revise el tamaño en vivo, antes y después',
    text: 'Cada foto muestra su tamaño original y su nuevo tamaño comprimido, uno al lado del otro. Si el archivo sigue siendo más grande de lo que desea, baje un poco el control deslizante de calidad y observe cómo el tamaño se actualiza al instante.',
  },
  {
    title: 'Conserve JPG para las fotos',
    text: 'Para las fotos normales, conserve el formato de salida JPG. Es el formato que WhatsApp maneja mejor y el que produce los archivos más pequeños para las fotos. Use PNG solo si su imagen necesita transparencia, como un logotipo.',
  },
  {
    title: 'Compare el antes y el después',
    text: 'Abra la comparación del antes y el después para comprobar que la foto sigue viéndose bien. Acérquese a las caras y al texto: si no ve ninguna diferencia real, el ajuste de calidad es el correcto.',
  },
  {
    title: 'Descargue la foto más pequeña',
    text: 'Toque Descargar en la foto, o use «Descargar todo (ZIP)» si comprimió varias fotos a la vez. El archivo más pequeño se guarda en su dispositivo; su foto original nunca se modifica.',
  },
  {
    title: 'Envíela por WhatsApp de la manera inteligente',
    text: 'Si desea la mejor calidad posible, envíe la foto comprimida como documento: en WhatsApp, toque Adjuntar, luego Documento, y elija el archivo. WhatsApp envía los documentos sin tocarlos, así que su foto llega exactamente como usted la comprimió. Si la envía como foto, WhatsApp la comprimirá una segunda vez.',
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    id: 'wa-faq-1',
    question: '¿Por qué WhatsApp reduce la calidad de las fotos?',
    answer: 'Cuando usted envía una foto de la manera habitual, WhatsApp la vuelve a comprimir para ahorrar datos y espacio, y a menudo la reduce a un tamaño y una calidad mucho menores. Por eso una foto nítida de cámara puede verse suave o borrosa después de enviarla.',
  },
  {
    id: 'wa-faq-2',
    question: '¿WhatsApp comprime las imágenes que se envían como documentos?',
    answer: 'No. Cuando usted envía una imagen como documento (Adjuntar y luego Documento), WhatsApp envía el archivo tal como es, sin ninguna compresión adicional. Es la mejor manera de compartir una foto con toda la calidad.',
  },
  {
    id: 'wa-faq-3',
    question: '¿Qué tamaño máximo de imagen acepta WhatsApp?',
    answer: 'WhatsApp permite documentos de hasta 2 GB, así que una foto comprimida de unos pocos cientos de KB nunca es un problema. Las fotos enviadas de la manera habitual las vuelve a comprimir el propio WhatsApp, así que en la práctica lo que importa es la calidad, no el tamaño.',
  },
  {
    id: 'wa-faq-4',
    question: '¿Cómo envío una foto con toda la calidad por WhatsApp?',
    answer: 'Primero comprima la foto usted mismo con CompressMyPic para que tenga un tamaño razonable y luego envíela por WhatsApp como documento en lugar de como foto. Toque Adjuntar, elija Documento y seleccione el archivo. Llegará sin que WhatsApp la comprima de nuevo.',
  },
  {
    id: 'wa-faq-5',
    question: '¿Debería comprimir antes de enviar o dejar que WhatsApp lo haga?',
    answer: 'Comprímala usted primero. WhatsApp comprime de forma agresiva y usted no tiene ningún control sobre eso. Cuando usted comprime con CompressMyPic primero, elige la calidad, revisa el resultado y luego envía el archivo como documento para que WhatsApp no lo toque de nuevo.',
  },
  {
    id: 'wa-faq-6',
    question: '¿Qué ajuste de calidad debería usar para las fotos de WhatsApp?',
    answer: 'Empiece con el ajuste predefinido Equilibrado, alrededor del 70 %. Para una foto importante, use del 80 al 85 % y revise la comparación del antes y el después. Para una foto cotidiana y rápida, cuando la velocidad importa, del 50 al 60 % sigue viéndose bien en la pantalla de un celular y produce un archivo mucho más pequeño.',
  },
  {
    id: 'wa-faq-7',
    question: '¿Comprimir dos veces empeora las fotos?',
    answer: 'Sí. Cada ronda de compresión JPEG elimina un poco más de detalle. Por eso debe comprimir una sola vez con CompressMyPic y luego enviar el resultado como documento, en lugar de dejar que WhatsApp comprima una foto ya comprimida una segunda vez.',
  },
  {
    id: 'wa-faq-8',
    question: '¿Puedo comprimir fotos de WhatsApp en el celular?',
    answer: 'Sí. CompressMyPic funciona en el navegador de Android y iPhone. Abra el sitio, elija la foto de su galería, comprímala, descargue el archivo más pequeño y luego compártalo desde WhatsApp. No hay ninguna aplicación que instalar.',
  },
  {
    id: 'wa-faq-9',
    question: '¿Las fotos comprimidas se ven bien en los estados de WhatsApp?',
    answer: 'Sí, si no se excede. Los estados de WhatsApp muestran las fotos en una resolución modesta, así que una foto comprimida con el ajuste predefinido Equilibrado (alrededor del 70 %) se ve igual que la original en la pantalla de un celular. Evite bajar del 50 % en las fotos de estado con caras o texto.',
  },
  {
    id: 'wa-faq-10',
    question: 'WhatsApp dice que mi imagen es demasiado grande, ¿qué hago?',
    answer: 'Suba la imagen a CompressMyPic y baje el control deslizante de calidad hasta que el archivo pese unos pocos cientos de KB; luego descárguela y envíela de nuevo. Si aun así no se envía como foto, envíela como documento, que acepta archivos mucho más grandes.',
  },
  {
    id: 'wa-faq-11',
    question: '¿Debería usar JPG o PNG para WhatsApp?',
    answer: 'Use JPG para las fotos. JPG produce archivos mucho más pequeños para las fotos de cámara y WhatsApp lo maneja mejor. Use PNG solo para las imágenes que necesitan transparencia, como un logotipo, porque los archivos PNG son mucho más grandes.',
  },
  {
    id: 'wa-faq-12',
    question: '¿Puedo enviar imágenes WebP por WhatsApp?',
    answer: 'WhatsApp puede recibir archivos WebP, pero es posible que no se muestren como una foto normal y algunos celulares los manejan de forma extraña. Para las fotos que desea que la gente vea directamente en el chat, JPG es la opción más segura. WebP es mejor para los sitios web que para WhatsApp.',
  },
  {
    id: 'wa-faq-13',
    question: '¿Puedo comprimir varias fotos de WhatsApp a la vez?',
    answer: 'Suba todas las fotos a CompressMyPic de una sola vez, aplique el mismo ajuste predefinido a todas y descárguelas todas juntas con el botón «Descargar todo (ZIP)». Luego envíe los archivos desde WhatsApp uno por uno o como documentos.',
  },
  {
    id: 'wa-faq-14',
    question: '¿WhatsApp comprime los videos de la misma manera?',
    answer: 'Sí, WhatsApp también comprime los videos que se envían de la manera habitual, y puede reducirlos mucho. CompressMyPic solo funciona con imágenes (JPG, PNG, WebP), no con videos. Para los videos, envíelos como documentos para conservar la calidad original.',
  },
  {
    id: 'wa-faq-15',
    question: '¿Comprimir una foto borra la original de mi celular?',
    answer: 'No. CompressMyPic crea una copia nueva y más pequeña y la descarga en su dispositivo. Su foto original se queda exactamente como está en su galería, sin tocarse.',
  },
  {
    id: 'wa-faq-16',
    question: '¿Se envían mis fotos a algún servidor cuando las comprimo?',
    answer: 'No. Toda la compresión ocurre dentro de su propio navegador en su dispositivo, así que sus fotos nunca se suben, se almacenan ni las ve nadie más. Se quedan en la memoria de su navegador y se borran cuando cierra o actualiza la pestaña.',
  },
  {
    id: 'wa-faq-17',
    question: '¿Qué tan pequeña debería ser una foto para WhatsApp?',
    answer: 'Para compartir todos los días, de 100 a 300 KB por foto es un buen objetivo: se envía rápido, consume pocos datos móviles y sigue viéndose nítida en un celular. Para una foto que desee imprimir o conservar, quédese más cerca de 500 KB a 1 MB con un ajuste de calidad más alto.',
  },
  {
    id: 'wa-faq-18',
    question: '¿Por qué mis fotos de WhatsApp se ven borrosas después de enviarlas?',
    answer: 'Porque WhatsApp las volvió a comprimir cuando usted las envió como fotos. La solución es comprimir la foto usted mismo primero con una calidad que usted controla, y luego enviarla como documento para que WhatsApp no la comprima de nuevo.',
  },
  {
    id: 'wa-faq-19',
    question: '¿Puedo comprimir una captura de pantalla para WhatsApp?',
    answer: 'Sí. Suba la captura de pantalla a CompressMyPic igual que una foto. Las capturas de pantalla se comprimen muy bien porque tienen grandes áreas de color plano: pruebe primero el ajuste predefinido Equilibrado y cambie a la salida WebP si desea el archivo más pequeño.',
  },
  {
    id: 'wa-faq-20',
    question: '¿CompressMyPic es gratis para las fotos de WhatsApp?',
    answer: 'Sí, completamente gratis. No hay registro, no hay marca de agua, no hay límite en la cantidad de fotos que comprime y no necesita ninguna cuenta. Solo abra el sitio, comprima y descargue.',
  },
];

export const GuideWhatsAppPageEs: React.FC<GuideWhatsAppPageEsProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['wa-faq-1', 'wa-faq-4']));

  useEffect(() => {
    document.title = 'Comprimir imágenes para WhatsApp sin perder calidad';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'Aprenda a comprimir imágenes para WhatsApp sin perder calidad. Gratis y privado, sin registro: reduzca sus fotos antes de enviarlas para que lleguen nítidas.');
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = 'https://compressmypic.online/es/guias/comprimir-imagenes-para-whatsapp';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HowTo',
          name: 'Cómo comprimir imágenes para WhatsApp sin perder calidad',
          description: 'Comprima una foto con CompressMyPic y envíela por WhatsApp como documento para que se mantenga nítida.',
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
    script.id = 'guide-whatsapp-jsonld';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => {
      const existing = document.getElementById('guide-whatsapp-jsonld');
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
    <div className="py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-6">
          <button
            type="button"
            onClick={() => onNavigate('/es/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al compresor de imágenes</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-slate-200 pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Cómo comprimir imágenes para WhatsApp sin perder calidad
          </h1>
          <p className="mt-3 text-lg font-medium text-slate-700 leading-relaxed">
            WhatsApp reduce cada foto que usted envía, muchas veces mucho más de lo necesario. Comprima sus fotos usted mismo primero y envíelas de la manera correcta: llegarán nítidas, se enviarán rápido y consumirán menos datos móviles.
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-slate-600 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-blue-600" />
              <span>Por qué WhatsApp hace que sus fotos se vean borrosas</span>
            </h2>
            <p>
              Cuando usted envía una foto por WhatsApp de la manera habitual, WhatsApp la vuelve a comprimir antes de entregarla. Una foto de cámara de 3 MB puede llegar como un archivo de 100 KB con detalles suaves y colores en bloques. WhatsApp lo hace para ahorrar datos y espacio, pero usted no puede decidir cuánta calidad se pierde.
            </p>
            <p>
              Existe una segunda forma de enviar una foto que la mayoría de la gente nunca usa: enviarla como documento. Los documentos se entregan tal como son, sin ninguna compresión adicional. El truco es reducir la foto usted mismo primero, con un ajuste de calidad que usted controla, y luego enviarla como documento. Así obtiene un archivo pequeño y una foto nítida al mismo tiempo.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Send className="w-5 h-5 text-blue-600" />
              <span>Paso a paso: comprima una foto para WhatsApp</span>
            </h2>
            <ol className="space-y-4">
              {STEPS.map((step, i) => (
                <li key={step.title} className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <div>
                    <div className="font-bold text-slate-900 text-sm sm:text-base">{step.title}</div>
                    <p className="text-sm sm:text-base">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/compress-images-for-whatsapp-1.png"
              alt="Captura de pantalla de cómo subir una foto a CompressMyPic antes de enviarla por WhatsApp"
              className="w-full rounded-xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
            <figcaption className="text-xs text-slate-500 text-center">
              Suba su foto a CompressMyPic: arrastre la foto y suéltela, o elíjala de su galería.
            </figcaption>
          </figure>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-blue-600" />
              <span>¿Qué ajuste de calidad debería usar?</span>
            </h2>
            <p>
              No existe un número perfecto único: depende de la foto y de para qué sea. Use esto como punto de partida y revise la comparación del antes y el después cada vez:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Fotos cotidianas: 70 %</div>
                <p className="text-xs text-slate-600">
                  El ajuste predefinido Equilibrado. Un gran ahorro de tamaño, y la foto sigue viéndose nítida en cualquier pantalla de celular. La mejor opción por defecto para WhatsApp.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Fotos importantes: 80–85 %</div>
                <p className="text-xs text-slate-600">
                  Fotos de familia, fotos de viajes, cualquier cosa que desee conservar. El archivo es más grande, pero los detalles finos de las caras y los paisajes se conservan.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Envíos rápidos: 50–60 %</div>
                <p className="text-xs text-slate-600">
                  Memes, actualizaciones rápidas, fotos con datos móviles lentos. Archivos mucho más pequeños que siguen viéndose bien en el tamaño de la pantalla de un celular.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Consejos para obtener los mejores resultados</span>
            </h2>
            <ul className="space-y-2 list-disc pl-5">
              <li>Comprima una sola vez, y solo una vez. Comprimir una foto ya comprimida una segunda vez elimina detalles casi sin ahorrar más tamaño.</li>
              <li>Envíe siempre el archivo comprimido como documento si la calidad importa: es la única manera de evitar que WhatsApp lo comprima de nuevo.</li>
              <li>Comprima varias fotos a la vez con los mismos ajustes y descárguelas todas con el botón Descargar todo (ZIP).</li>
              <li>Para las capturas de pantalla y los gráficos con texto, pruebe la salida WebP: mantiene los bordes nítidos y produce un archivo más pequeño que JPG.</li>
              <li>Su foto original nunca se modifica. CompressMyPic guarda una copia nueva y más pequeña, así que siempre puede volver y probar una calidad diferente.</li>
            </ul>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/compress-images-for-whatsapp-2.png"
              alt="Captura de pantalla del control deslizante de calidad y del tamaño del archivo en vivo, antes y después, en CompressMyPic"
              className="w-full rounded-xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
            <figcaption className="text-xs text-slate-500 text-center">
              Mueva el control deslizante de calidad y observe cómo el tamaño del antes y el después se actualiza en vivo hasta que el archivo tenga el tamaño que desea.
            </figcaption>
          </figure>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <FileWarning className="w-5 h-5 text-blue-600" />
              <span>Errores comunes que debe evitar</span>
            </h2>
            <ul className="space-y-2 list-disc pl-5">
              <li>Enviar la foto como foto después de comprimirla: WhatsApp la comprimirá una segunda vez y deshará su trabajo.</li>
              <li>Bajar la calidad por debajo del 40 % en fotos con caras: la piel y los detalles finos se vuelven bloques muy rápido con calidad baja.</li>
              <li>Usar PNG para las fotos de cámara: los archivos PNG son mucho más grandes que los JPG para las fotos y no le aportan nada en WhatsApp.</li>
              <li>Olvidar revisar el resultado: mire siempre la comparación del antes y el después antes de enviar, sobre todo en las fotos con texto.</li>
            </ul>
          </section>

          {/* FAQ */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-600" />
              <span>Preguntas frecuentes</span>
            </h2>
            <div className="space-y-3">
              {FAQ_DATA.map((item) => {
                const isOpen = openIds.has(item.id);
                return (
                  <div key={item.id} className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs">
                    <button
                      type="button"
                      onClick={() => toggleFaq(item.id)}
                      aria-expanded={isOpen}
                      className={`w-full flex items-center justify-between gap-3 px-5 py-4 text-left transition-colors ${isOpen ? 'bg-slate-50/50' : 'hover:bg-slate-50/50'}`}
                    >
                      <span className="text-sm sm:text-base font-bold text-slate-900">{item.question}</span>
                      <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 py-4 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
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
            <h2 className="text-xl font-bold text-slate-900">Guías relacionadas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => onNavigate('/es/guias/jpg-vs-png-vs-webp')}
                className="text-left p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-pointer"
              >
                <div className="font-bold text-slate-900 text-sm">JPG vs PNG vs WebP: ¿qué formato debería usar?</div>
                <p className="text-xs text-slate-600 mt-1">Tamaño de archivo, calidad y transparencia comparados, para que elija el formato correcto cada vez.</p>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/es/guias/reducir-imagen-a-100kb')}
                className="text-left p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-pointer"
              >
                <div className="font-bold text-slate-900 text-sm">Cómo reducir el tamaño de una imagen a 100 KB para sitios web y correo electrónico</div>
                <p className="text-xs text-slate-600 mt-1">Guía paso a paso para llegar a 100 KB sin arruinar su foto.</p>
              </button>
            </div>
          </section>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/es/')}
              className="flex-1 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-bold shadow-sm hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Comprimir imágenes gratis
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/es/comprimir-imagen-a-100kb')}
              className="flex-1 px-4 py-2.5 rounded-xl bg-white text-slate-900 text-sm font-bold border border-slate-200 shadow-xs hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Reducir una imagen a 100 KB
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
