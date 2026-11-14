import React, { useEffect } from 'react';
import { ArrowLeft, Shield, Cpu, Lock, CheckCircle2, Users, Layers } from 'lucide-react';

interface AboutPageEsProps {
  onNavigate: (path: string) => void;
}

export const AboutPageEs: React.FC<AboutPageEsProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Acerca de CompressMyPic – Compresor de imágenes online gratis';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'Acerca de CompressMyPic: un compresor de imágenes online gratis para JPG, PNG y WebP. Comprima imágenes online gratis, sin registro, sin marca de agua y sin subir nada a ningún servidor.');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-6">
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7c3aed] dark:text-[#c4b5fd] hover:text-[#6d28d9] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al compresor de imágenes</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
            Acerca de CompressMyPic
          </h1>
          <p className="mt-3 text-lg font-medium text-[var(--ink-2)] leading-relaxed">
            CompressMyPic es un compresor de imágenes gratuito y privado. Comprima imágenes JPG, PNG y WebP directamente en su navegador: rápido, seguro y sin subir sus archivos a ningún lugar.
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#7c3aed] dark:text-[#a78bfa]" />
              <span>¿Qué es CompressMyPic?</span>
            </h2>
            <p>
              CompressMyPic es un compresor de imágenes online gratis y un optimizador de imágenes que le ayuda a reducir el tamaño de sus imágenes sin perder calidad. Es un compresor de fotos y un reductor de tamaño de fotos para los formatos que usa todos los días: JPG, PNG y WebP. Úselo para comprimir JPG a 100 KB, comprimir PNG online gratis, comprimir imágenes WebP o reducir el tamaño de una foto antes de compartirla por WhatsApp, Instagram, Facebook o correo electrónico.
            </p>
            <p>
              Las páginas web tradicionales de compresión de imágenes suben sus fotos personales o los gráficos de su empresa a un servidor que pertenece a otra persona. Esa práctica genera preocupaciones legítimas, y es justamente por eso que creamos CompressMyPic al revés: como una herramienta que hace todo en su propio dispositivo.
            </p>
            <p>
              Cuando selecciona una imagen o la arrastra y la suelta, su navegador reserva un búfer temporal en la memoria, dibuja la imagen en un elemento Canvas de HTML, aplica el algoritmo de compresión y luego exporta el archivo nuevo, todo dentro de su propia pestaña del navegador. En el proceso de comprimir sus imágenes no intervienen infraestructuras de red, bases de datos ni servidores en la nube.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#7c3aed] dark:text-[#a78bfa]" />
              <span>Formatos compatibles: JPG, PNG y WebP</span>
            </h2>
            <p>
              Como compresor de JPG, CompressMyPic le permite comprimir JPG online gratis y reducir el tamaño de sus archivos JPEG sin que sus fotos pierdan nitidez: pruebe el ajuste predefinido Equilibrado o baje el control deslizante de calidad y observe el tamaño antes y después en vivo para llegar a objetivos como 100 KB o 200 KB. Como compresor de PNG, le permite comprimir PNG online gratis manteniendo la transparencia de logotipos y gráficos. Y cuando comprime imágenes WebP, obtiene los archivos más pequeños de todos: WebP suele ser entre un 25 y un 35 % más pequeño que JPEG con una calidad similar, lo que lo convierte en la mejor opción para optimizar imágenes para páginas web.
            </p>
            <p>
              Puede conservar el formato original de cada imagen o convertir entre JPG, PNG y WebP. El control deslizante de calidad (del 10 % al 100 %), los ajustes predefinidos Bajo, Equilibrado y Alto, y la vista en vivo del tamaño antes y después le dan control total sobre el equilibrio entre el tamaño del archivo y la calidad de la imagen, sin prometer nunca una casilla de entrada para un tamaño objetivo exacto en KB que la herramienta no tiene.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#16a34a] dark:text-[#4ade80]" />
              <span>Nuestros principios fundamentales</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-2xl border pastel-card-0 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">Privacidad absoluta</div>
                <p className="text-xs text-[var(--ink-2)]">
                  Ningún archivo toca jamás un servidor externo ni una base de datos. Sus fotos y sus gráficos sensibles se quedan estrictamente en su dispositivo. Como la compresión se hace en su propio navegador, nadie más ve su trabajo.
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-2 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">Simple y gratis</div>
                <p className="text-xs text-[var(--ink-2)]">
                  Sin instalar programas, sin planes de pago, sin cargos ocultos, sin crear cuentas, sin verificación por correo y sin límites de prueba. Comprima imágenes online gratis: es realmente gratis, sin registro y sin marca de agua en sus imágenes comprimidas.
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-6 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">La calidad la controla usted</div>
                <p className="text-xs text-[var(--ink-2)]">
                  Tiene un control preciso: mueva el control deslizante de Calidad en tiempo real, elija cualquiera de los ajustes predefinidos Bajo, Equilibrado o Alto, escoja el formato del archivo de salida y compare cada imagen lado a lado para detectar las diferencias al instante. Reduzca el tamaño de sus imágenes sin perder calidad, a su manera.
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-9 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">Compresor de imágenes por lotes</div>
                <p className="text-xs text-[var(--ink-2)]">
                  Comprima varias imágenes a la vez con los mismos ajustes y descárgalas todas juntas con el botón Descargar todo (ZIP): un compresor de imágenes por lotes para bibliotecas de fotos, catálogos de productos y carpetas de imágenes de sitios web.
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-10 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">Comprobaciones automáticas de seguridad</div>
                <p className="text-xs text-[var(--ink-2)]">
                  El compresor detecta la transparencia de sus imágenes. Si elija salida en JPEG para un PNG transparente, le mostramos una advertencia porque JPEG no admite transparencia, así nunca pierde su canal alfa por accidente.
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-12 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">Rendimiento rápido</div>
                <p className="text-xs text-[var(--ink-2)]">
                  Como todo el procesamiento se hace localmente en su dispositivo, no tiene que esperar a que los archivos suban y bajen de un servidor. Puede comprimir fotos rápidamente, incluso archivos grandes de hasta 20 MB por imagen, en computadora o en el celular.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Users className="w-5 h-5 text-[#7c3aed] dark:text-[#a78bfa]" />
              <span>¿Para quién es CompressMyPic?</span>
            </h2>
            <p>
              CompressMyPic es para cualquier persona que necesite imágenes más pequeñas: blogueros y propietarios de sitios web que quieren optimizar imágenes para la web y reducir el tamaño de las imágenes de sus páginas; fotógrafos que necesitan reducir el tamaño de sus fotos antes de compartirlas o entregar pruebas; vendedores online que comprimen una foto para su sitio web o para un anuncio; estudiantes y trabajadores de oficina que comprimen imágenes para adjuntarlas a un correo; y cualquier persona que quiera comprimir una imagen para WhatsApp, Instagram o Facebook para que se envíe más rápido y consuma menos datos móviles.
            </p>
            <p>
              Funciona en navegadores de computadora y de celular, no necesita instalación y nunca le pide registrarse: solo abra el sitio, suba sus imágenes y descargue los archivos más pequeños.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#16a34a] dark:text-[#4ade80]" />
              <span>Privacidad y seguridad</span>
            </h2>
            <p>
              En CompressMyPic creemos que la privacidad es un derecho fundamental, no una función opcional. Hoy en día, muchos sitios web recopilan datos por defecto, incluso una herramienta de compresión de imágenes. Nosotros adoptamos un enfoque en el que la privacidad va primero y usamos la tecnología moderna del navegador para procesar sus archivos localmente en su computadora.
            </p>
            <p>
              Sus archivos permanecen en la memoria de su navegador y se borran de inmediato cuando cierra la pestaña o actualiza la página. Como ningún procesamiento de imágenes ocurre en servidores remotos, no podemos recopilar datos de sus imágenes aunque quisiéramos. Ese es el diseño y la promesa de la herramienta.
            </p>
            <p>
              Para saber exactamente cómo tratamos su privacidad, visite nuestra{' '}
              <button
                type="button"
                onClick={() => onNavigate('/privacy')}
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold cursor-pointer"
              >
                Política de Privacidad
              </button>
              {' '}.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#16a34a] dark:text-[#4ade80]" />
              <span>Nuestra misión</span>
            </h2>
            <p>
              Creemos que las mejores herramientas son las más simples, las más rápidas y las más transparentes. Nuestra misión es ofrecer a todo el mundo un compresor de imágenes rápido, confiable y completamente gratis, sin trampas ocultas, sin anuncios que le rastreen, sin subidas a servidores y sin renunciar a su privacidad. Ya sea que comprima un solo JPG o todo un lote de imágenes WebP, la herramienta simplemente debe funcionar.
            </p>
            <p>
              ¿Tiene una pregunta, una idea o encontró algo que podamos mejorar? Nos encantaría escucharle. Puede escribirnos directamente a través del sitio.
            </p>
          </section>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/')}
              className="flex-1 px-5 py-2.5 btn-purple-pill text-sm font-semibold shadow-sm cursor-pointer"
            >
              Empezar a comprimir imágenes
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/contact')}
              className="flex-1 px-5 py-2.5 rounded-full bg-[var(--surface)] text-[var(--ink-navy)] text-sm font-semibold border border-[var(--line-strong)] shadow-xs hover:bg-[var(--surface-2)] transition-colors cursor-pointer"
            >
              Contáctenos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
