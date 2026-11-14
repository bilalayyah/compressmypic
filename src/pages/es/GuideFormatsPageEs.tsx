import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, FileImage, Camera, Layers, Globe, CheckCircle2, Scale } from 'lucide-react';

interface GuideFormatsPageEsProps {
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
    text: 'Vaya a compressmypic.online en su navegador. No hay nada que instalar, no hay ninguna cuenta que crear y ningún archivo se sube jamás a un servidor.',
  },
  {
    title: 'Suba su imagen',
    text: 'Arrastre su imagen y suéltela, o toque «Explorar archivos» para elegirla. Se admiten archivos JPG, PNG y WebP, hasta 20 MB por imagen.',
  },
  {
    title: 'Decida: conserve el formato o conviértalo',
    text: 'Elija «Original» para conservar el formato que su imagen ya tiene, o elija JPG, PNG o WebP como salida. Use la guía siguiente para decidir: JPG para las fotos, PNG cuando necesita transparencia, WebP cuando desea el archivo más pequeño para un sitio web.',
  },
  {
    title: 'Elija un ajuste predefinido de calidad',
    text: 'Empiece con el ajuste predefinido Equilibrado (alrededor del 70 %). Para una foto que desee que se vea perfecta, use el ajuste predefinido Alto o una calidad del 85 al 90 %. Para una imagen web pequeña, un ajuste más bajo está bien.',
  },
  {
    title: 'Revise el tamaño en vivo y compare',
    text: 'Cada imagen muestra su tamaño original y su nuevo tamaño comprimido. Abra la comparación del antes y el después y acérquese: si no ve ninguna diferencia, el ajuste es el correcto. Pruebe cambiar el formato de salida a WebP y observe cuánto más pequeño se vuelve el archivo.',
  },
  {
    title: 'Descargue su imagen',
    text: 'Descargue la imagen individual, o use «Descargar todo (ZIP)» cuando haya convertido varias imágenes a la vez. Su archivo original nunca se modifica: usted recibe una copia nueva y más pequeña.',
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    id: 'fmt-faq-1',
    question: '¿Cuál es la diferencia entre JPG y PNG?',
    answer: 'JPG es un formato con pérdida hecho para las fotos: elimina algunos detalles para crear archivos mucho más pequeños y no admite transparencia. PNG no tiene pérdida y admite transparencia, así que es perfecto para logotipos y gráficos, pero las fotos en PNG son varias veces más grandes que la misma foto guardada como JPG.',
  },
  {
    id: 'fmt-faq-2',
    question: '¿WebP es mejor que JPG?',
    answer: 'En tamaño de archivo, sí: WebP suele ser entre un 25 y un 35 % más pequeño que JPG con una calidad similar, y también admite transparencia. La única razón para elegir JPG en lugar de WebP es la compatibilidad: algunos programas antiguos y algunas aplicaciones todavía manejan mejor JPG, y WhatsApp muestra las fotos JPG de forma más confiable.',
  },
  {
    id: 'fmt-faq-3',
    question: '¿WebP es mejor que PNG?',
    answer: 'Por lo general, sí. WebP admite transparencia como PNG, pero crea archivos mucho más pequeños, y también puede hacer compresión con pérdida como JPG. PNG sigue siendo la opción más segura cuando necesita una calidad perfecta y sin pérdida para un logotipo o gráfico que se editará de nuevo más adelante.',
  },
  {
    id: 'fmt-faq-4',
    question: '¿PNG admite transparencia y JPG no?',
    answer: 'Correcto. PNG admite un fondo transparente (un canal alfa), por eso los logotipos y los iconos suelen ser PNG. JPG no tiene transparencia en absoluto: cualquier área transparente de un JPG se convierte en un color sólido, normalmente blanco, así que nunca guarde un logotipo con fondo transparente como JPG.',
  },
  {
    id: 'fmt-faq-5',
    question: '¿Por qué los archivos PNG son mucho más grandes que los JPG?',
    answer: 'Porque PNG no tiene pérdida: conserva cada píxel de detalle exactamente, mientras que JPG elimina detalles que el ojo apenas nota. Una foto de cámara guardada como PNG puede ser de 5 a 10 veces más grande que la misma foto como JPG. Por eso las fotos casi nunca deberían ser PNG.',
  },
  {
    id: 'fmt-faq-6',
    question: '¿Cuándo debería usar JPG en lugar de WebP?',
    answer: 'Use JPG cuando la imagen se abrirá en programas antiguos, se enviará por WhatsApp o correo electrónico y desea una vista previa garantizada, o se imprimirá. WebP es mejor para los sitios web, pero para compartir una foto con alguien, JPG sigue siendo el formato más universal.',
  },
  {
    id: 'fmt-faq-7',
    question: '¿Puedo convertir PNG a JPG?',
    answer: 'Sí. Suba el PNG a CompressMyPic, elija JPG como formato de salida y descárguelo. Solo recuerde que JPG no tiene transparencia: si su PNG tiene un fondo transparente, elija primero un color de fondo, porque el área transparente se volverá blanca y sólida en caso contrario.',
  },
  {
    id: 'fmt-faq-8',
    question: '¿Puedo convertir JPG a WebP?',
    answer: 'Sí. Suba el JPG, elija WebP como salida y descárguelo: el archivo suele ser entre un 25 y un 35 % más pequeño con la misma calidad visible. Puede convertir varios JPG a WebP a la vez y descargarlos todos como un ZIP.',
  },
  {
    id: 'fmt-faq-9',
    question: '¿Convertir JPG a PNG mejora la calidad?',
    answer: 'No. Convertir un JPG a PNG no puede recuperar los detalles que la compresión JPG ya eliminó; solo hace que el archivo sea mucho más grande. La única buena razón para convertir JPG a PNG es si necesita editar la imagen de nuevo sin perder más calidad.',
  },
  {
    id: 'fmt-faq-10',
    question: '¿Qué formato debería usar para un sitio web?',
    answer: 'WebP primero y JPG como alternativa. WebP le da los archivos más pequeños, lo que hace que las páginas carguen más rápido, y la velocidad de la página importa tanto para los visitantes como para Google. Use PNG solo para las imágenes que necesitan transparencia, como un logotipo, y JPG para las fotos si no puede usar WebP.',
  },
  {
    id: 'fmt-faq-11',
    question: '¿Qué formato es mejor para un logotipo?',
    answer: 'PNG si el logotipo necesita un fondo transparente, porque JPG no admite transparencia. WebP también admite transparencia y crea un archivo más pequeño, así que es una buena opción para un logotipo en un sitio web. Nunca guarde un logotipo como JPG si el fondo debe mantenerse transparente.',
  },
  {
    id: 'fmt-faq-12',
    question: '¿Qué formato es mejor para las capturas de pantalla?',
    answer: 'PNG o WebP. Las capturas de pantalla tienen bordes nítidos y colores planos, que PNG y WebP manejan bien. JPG difumina los bordes nítidos del texto. Para obtener el archivo de captura de pantalla más pequeño, pruebe la salida WebP en CompressMyPic: suele ser mucho más pequeña que PNG sin ninguna diferencia visible.',
  },
  {
    id: 'fmt-faq-13',
    question: '¿Todos los navegadores admiten WebP ahora?',
    answer: 'Sí, prácticamente todos. Chrome, Edge, Firefox, Safari y todos los navegadores móviles modernos admiten WebP desde hace años. Solo los navegadores muy antiguos y algunas aplicaciones antiguas no pueden abrir WebP, y esa es la única razón por la que JPG sigue siendo útil.',
  },
  {
    id: 'fmt-faq-14',
    question: '¿WhatsApp o Instagram aceptan WebP?',
    answer: 'WhatsApp puede recibir archivos WebP, pero es posible que no se muestren como una foto normal, así que JPG es más seguro para compartir fotos allí. Instagram acepta JPG y PNG para las publicaciones y convierte las subidas por su cuenta. Para compartir en redes sociales, quédese con JPG para las fotos.',
  },
  {
    id: 'fmt-faq-15',
    question: '¿Convertir una foto a WebP pierde calidad?',
    answer: 'Solo tanto como usted elija. WebP usa la misma idea que JPG: un ajuste de calidad que cambia un poco de detalle por un archivo más pequeño. Con una calidad del 80 al 90 %, una foto WebP se ve idéntica al JPG original y el archivo es aproximadamente un tercio más pequeño.',
  },
  {
    id: 'fmt-faq-16',
    question: '¿JPG y JPEG son el mismo formato?',
    answer: 'No hay ninguna diferencia: JPG y JPEG son el mismo formato. JPEG es el nombre completo (Joint Photographic Experts Group) y JPG es la extensión corta del archivo. Un archivo llamado foto.jpg y un archivo llamado foto.jpeg son el mismo tipo de imagen.',
  },
  {
    id: 'fmt-faq-17',
    question: '¿Debería conservar el formato original o convertirlo?',
    answer: 'Conserve el original si está conforme con el tamaño: es la opción más sencilla y no se pierde nada. Convierta cuando tenga una razón: de JPG a WebP para reducir una foto de un sitio web, de PNG a JPG para reducir una foto que no necesita transparencia, o de PNG a WebP para reducir un logotipo.',
  },
  {
    id: 'fmt-faq-18',
    question: '¿Qué formato da el archivo más pequeño?',
    answer: 'WebP, en casi todos los casos. Para las fotos, WebP suele ser entre un 25 y un 35 % más pequeño que JPG con la misma calidad visible. Para los gráficos con transparencia, WebP suele ser mucho más pequeño que PNG. Por eso WebP es el mejor formato para los sitios web.',
  },
  {
    id: 'fmt-faq-19',
    question: '¿CompressMyPic convierte entre JPG, PNG y WebP?',
    answer: 'Sí. Suba una imagen JPG, PNG o WebP, elija el formato de salida que desee —original, JPG, PNG o WebP— y descargue el archivo convertido. Puede convertir varias imágenes a la vez con los mismos ajustes y descargarlas todas como un ZIP.',
  },
  {
    id: 'fmt-faq-20',
    question: '¿Qué pasa con la transparencia si convierto un PNG a JPG?',
    answer: 'Se pierde. JPG no puede almacenar transparencia, así que las partes transparentes de su PNG se convierten en un color sólido. CompressMyPic le permite elegir un color de fondo para rellenar esas áreas, así que elija uno que combine con el lugar donde se usará la imagen; el blanco es la opción habitual.',
  },
];

export const GuideFormatsPageEs: React.FC<GuideFormatsPageEsProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['fmt-faq-1', 'fmt-faq-10']));

  useEffect(() => {
    document.title = 'JPG vs PNG vs WebP: ¿qué formato debería usar?';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'JPG vs PNG vs WebP explicado de forma sencilla: compare tamaño, calidad y transparencia para elegir el formato adecuado para sus fotos, logotipos y sitios web.');
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = 'https://compressmypic.online/es/guias/jpg-vs-png-vs-webp';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HowTo',
          name: 'Cómo elegir entre JPG, PNG y WebP y convertir imágenes',
          description: 'Compare JPG, PNG y WebP y luego comprima o convierta su imagen con CompressMyPic.',
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
    script.id = 'guide-formats-jsonld';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => {
      const existing = document.getElementById('guide-formats-jsonld');
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
            JPG vs PNG vs WebP: ¿qué formato debería usar?
          </h1>
          <p className="mt-3 text-lg font-medium text-slate-700 leading-relaxed">
            Elegir el formato equivocado puede hacer que su imagen sea diez veces más grande de lo necesario, o arruinar un logotipo transparente. Aquí tiene la comparación sencilla y honesta, y cómo convertir entre formatos en segundos.
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-slate-600 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Scale className="w-5 h-5 text-blue-600" />
              <span>La respuesta corta</span>
            </h2>
            <p>
              Si solo recuerda una cosa, recuerde esto: use JPG para las fotos, PNG para los logotipos y todo lo que necesita transparencia, y WebP cuando desee el archivo más pequeño, sobre todo en un sitio web. La tabla siguiente muestra por qué.
            </p>
            <div className="overflow-x-auto pt-1">
              <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-slate-50 text-slate-900 text-left">
                    <th className="px-4 py-3 font-bold">Formato</th>
                    <th className="px-4 py-3 font-bold">Tamaño de archivo</th>
                    <th className="px-4 py-3 font-bold">Transparencia</th>
                    <th className="px-4 py-3 font-bold">Ideal para</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">JPG</td>
                    <td className="px-4 py-3">Pequeño</td>
                    <td className="px-4 py-3">No</td>
                    <td className="px-4 py-3">Fotos, compartir, imprimir</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">PNG</td>
                    <td className="px-4 py-3">Grande</td>
                    <td className="px-4 py-3">Sí</td>
                    <td className="px-4 py-3">Logotipos, iconos, capturas de pantalla</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">WebP</td>
                    <td className="px-4 py-3">El más pequeño</td>
                    <td className="px-4 py-3">Sí</td>
                    <td className="px-4 py-3">Sitios web, fotos web</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Camera className="w-5 h-5 text-blue-600" />
              <span>JPG: el mejor para las fotos</span>
            </h2>
            <p>
              JPG (también escrito JPEG) es el formato clásico para fotos. Usa compresión con pérdida: elimina detalles finos que su ojo apenas nota, lo que hace que los archivos sean mucho más pequeños. Una foto de cámara de 5 MB puede convertirse en 500 KB como JPG y seguir viéndose muy bien. JPG no admite transparencia, así que es la opción incorrecta para los logotipos, pero para cualquier foto normal es la opción segura y universal que todos los dispositivos y aplicaciones pueden abrir.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-600" />
              <span>PNG: el mejor para logotipos y transparencia</span>
            </h2>
            <p>
              PNG no tiene pérdida: conserva cada píxel exactamente y admite fondos transparentes. Eso lo convierte en el formato adecuado para logotipos, iconos y gráficos con texto. El precio es el tamaño del archivo: una foto guardada como PNG puede ser de 5 a 10 veces más grande que la misma foto como JPG. Nunca guarde una foto de cámara como PNG a menos que tenga una razón específica.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-600" />
              <span>WebP: el mejor para sitios web</span>
            </h2>
            <p>
              WebP es el formato moderno creado por Google. Lo hace todo: compresión con pérdida como JPG, transparencia como PNG, y archivos que suelen ser entre un 25 y un 35 % más pequeños que JPG con la misma calidad visible. Todos los navegadores modernos lo admiten, por eso es el mejor formato para las imágenes de sitios web. Su única debilidad es la compatibilidad con programas antiguos, y con las vistas previas de WhatsApp, donde JPG sigue siendo más seguro.
            </p>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/jpg-vs-png-vs-webp-1.png"
              alt="Captura de pantalla que compara la misma foto guardada como JPG, PNG y WebP con sus tamaños de archivo"
              className="w-full rounded-xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
            <figcaption className="text-xs text-slate-500 text-center">
              La misma foto en tres formatos: WebP es el más pequeño, PNG es el más grande y JPG queda en el medio.
            </figcaption>
          </figure>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <FileImage className="w-5 h-5 text-blue-600" />
              <span>Paso a paso: comprima o convierta su imagen</span>
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

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>¿Qué formato para cada trabajo?</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Fotos de cámara: JPG o WebP</div>
                <p className="text-xs text-slate-600">
                  JPG para compartir e imprimir, WebP para su sitio web. Ambos mantienen las fotos con muy buen aspecto a una fracción del tamaño original.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Logotipos e iconos: PNG o WebP</div>
                <p className="text-xs text-slate-600">
                  Necesita transparencia, así que JPG queda descartado. PNG es el clásico seguro; WebP es más pequeño y funciona en todos los lugares modernos.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Capturas de pantalla: WebP o PNG</div>
                <p className="text-xs text-slate-600">
                  El texto nítido y los colores planos van bien con WebP y PNG. JPG difumina los bordes del texto, así que evítelo en las capturas de pantalla.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Imágenes de sitios web: WebP</div>
                <p className="text-xs text-slate-600">
                  Los archivos más pequeños significan páginas más rápidas. Convierta las fotos de su sitio web a WebP y conserve JPG como alternativa para los navegadores muy antiguos.
                </p>
              </div>
            </div>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/jpg-vs-png-vs-webp-2.png"
              alt="Captura de pantalla de cómo elegir el formato de salida JPG, PNG o WebP en CompressMyPic"
              className="w-full rounded-xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
            <figcaption className="text-xs text-slate-500 text-center">
              Elija su formato de salida en CompressMyPic: conserve el original o convierta a JPG, PNG o WebP.
            </figcaption>
          </figure>

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
                onClick={() => onNavigate('/es/guias/comprimir-imagenes-para-whatsapp')}
                className="text-left p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-pointer"
              >
                <div className="font-bold text-slate-900 text-sm">Cómo comprimir imágenes para WhatsApp sin perder calidad</div>
                <p className="text-xs text-slate-600 mt-1">Reduzca las fotos usted mismo primero y luego envíelas como documentos para que WhatsApp no pueda difuminarlas.</p>
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
              onClick={() => onNavigate('/es/guias/comprimir-imagenes-para-whatsapp')}
              className="flex-1 px-4 py-2.5 rounded-xl bg-white text-slate-900 text-sm font-bold border border-slate-200 shadow-xs hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Comprimir para WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
