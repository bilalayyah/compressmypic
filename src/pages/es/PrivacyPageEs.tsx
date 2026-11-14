import React, { useEffect } from 'react';
import { ArrowLeft, Shield } from 'lucide-react';

interface PrivacyPageEsProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPageEs: React.FC<PrivacyPageEsProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Política de Privacidad - CompressMyPic';
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
          <div className="flex items-center gap-2.5 mb-2">
            <Shield className="w-6 h-6 text-[#16a34a] dark:text-[#4ade80]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              Política de Privacidad
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            Última actualización: 12 de noviembre de 2026
          </p>
        </div>

        {/* Exact Privacy Policy Text */}
        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. Procesamiento de imágenes en su navegador
            </h2>
            <p>
              CompressMyPic es un compresor de imágenes online gratis. Las imágenes se procesan localmente en su navegador con HTML5 Canvas: nunca se suben a nuestros servidores y no recopilamos, almacenamos ni compartimos sus imágenes. Cuando cierra o actualiza la pestaña del navegador, todos los objetos temporales en memoria se eliminan.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. No recopilamos datos personales
            </h2>
            <p>
              No pedimos cuenta, contraseña, correo electrónico ni número de teléfono para usar la herramienta de compresión. Cualquier dato de contacto que envíe voluntariamente a través de nuestro formulario de contacto se use únicamente para responder a su consulta concreta.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. Publicidad (Google AdSense)
            </h2>
            <p>
              Usamos Google AdSense para mostrar anuncios una vez que esté activado. Los proveedores externos, incluido Google, usan cookies para mostrar anuncios según sus visitas anteriores a este sitio web o a otros sitios web. El uso que hace Google de las cookies publicitarias permite que Google y sus socios le muestren anuncios según su visita a este sitio y/o a otros sitios de Internet. Puede desactivar la publicidad personalizada visitando la Configuración de anuncios de Google (
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline"
              >
                https://adssettings.google.com
              </a>
              ) o{' '}
              <a
                href="http://www.aboutads.info/choices/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline"
              >
                http://www.aboutads.info/choices/
              </a>
              .
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. Analítica
            </h2>
            <p>
              Actualmente no usamos cookies de analítica. Si eso cambie, actualizaremos esta política.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. Enlaces de terceros
            </h2>
            <p>
              Nuestro sitio web puede contener enlaces a sitios externos. No somos responsables de las prácticas de privacidad ni del contenido de plataformas de terceros.
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. Contacto
            </h2>
            <p>
              Si tiene preguntas sobre esta política, escríbanos a{' '}
              <a
                href="mailto:bilalayyah@gmail.com"
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold"
              >
                bilalayyah@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
