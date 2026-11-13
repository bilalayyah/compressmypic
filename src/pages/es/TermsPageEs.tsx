import React, { useEffect } from 'react';
import { ArrowLeft, FileText } from 'lucide-react';

interface TermsPageEsProps {
  onNavigate: (path: string) => void;
}

export const TermsPageEs: React.FC<TermsPageEsProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Términos del Servicio - CompressMyPic';
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
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al compresor de imágenes</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-slate-200 pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <FileText className="w-6 h-6 text-indigo-600" />
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Términos del Servicio
            </h1>
          </div>
          <p className="text-xs text-slate-500 font-medium">
            Última actualización: 12 de noviembre de 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-base text-slate-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              1. Aceptación de los términos
            </h2>
            <p>
              Al acceder a CompressMyPic y usarlo, acepta cumplir estos Términos del Servicio y quedar sujeto a ellos. Si no está de acuerdo con alguna parte de estos términos, deje de usar el servicio.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              2. Uso permitido
            </h2>
            <p>
              Puede usar CompressMyPic para optimizar imágenes tanto con fines personales como comerciales. Acepta no usar el servicio para ninguna actividad ilegal ni de ninguna manera que pueda perjudicar el funcionamiento, la seguridad o la disponibilidad del sitio web.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              3. Derechos de propiedad intelectual
            </h2>
            <p>
              Conserva el 100 % de los derechos de autor, la propiedad y los derechos de propiedad intelectual sobre todas las imágenes, fotos y gráficos que comprima con nuestra herramienta. CompressMyPic no reclama ninguna propiedad, licencia ni derecho sobre sus obras creativas. Todo el procesamiento se realiza localmente en su equipo.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              4. Exención de garantías
            </h2>
            <p>
              CompressMyPic se ofrece «tal cual» y «según disponibilidad», sin garantías de ningún tipo, ya sean expresas o implícitas. Aunque nos esforzamos por lograr la máxima compatibilidad y el mejor rendimiento en todos los navegadores, no garantizamos que el servicio sea ininterrumpido, esté libre de errores o cumpla requisitos técnicos específicos.
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-slate-200">
            <h2 className="text-lg font-bold text-slate-900">
              5. Contacto
            </h2>
            <p>
              Si tiene alguna pregunta sobre estos términos, escríbanos a{' '}
              <a
                href="mailto:bilalayyah@gmail.com"
                className="text-blue-600 hover:underline font-semibold"
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
