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
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:text-[#b91c1c] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al compresor de imágenes</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <FileText className="w-6 h-6 text-[#dc2626] dark:text-[#f87171]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              Términos del Servicio
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            Última actualización: 14 de noviembre de 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. Aceptación de los términos
            </h2>
            <p>
              Al acceder a CompressMyPic y usarlo, acepta cumplir estos Términos del Servicio y quedar sujeto a ellos. Si no está de acuerdo con alguna parte de estos términos, deje de usar el servicio.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. Uso permitido
            </h2>
            <p>
              Puede usar CompressMyPic para optimizar imágenes tanto con fines personales como comerciales. Acepta no usar el servicio para ninguna actividad ilegal ni de ninguna manera que pueda perjudicar el funcionamiento, la seguridad o la disponibilidad del sitio web.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. Derechos de propiedad intelectual
            </h2>
            <p>
              Conserva el 100 % de los derechos de autor, la propiedad y los derechos de propiedad intelectual sobre todas las imágenes, fotos y gráficos que comprima con nuestra herramienta. CompressMyPic no reclama ninguna propiedad, licencia ni derecho sobre sus obras creativas. Todo el procesamiento se realiza localmente en su equipo.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. Exención de garantías
            </h2>
            <p>
              CompressMyPic se ofrece «tal cual» y «según disponibilidad», sin garantías de ningún tipo, ya sean expresas o implícitas. Aunque nos esforzamos por lograr la máxima compatibilidad y el mejor rendimiento en todos los navegadores, no garantizamos que el servicio sea ininterrumpido, esté libre de errores o cumpla requisitos técnicos específicos.
            </p>
          </section>

                    <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. Disponibilidad y cambios del servicio
            </h2>
            <p>
              CompressMyPic es un servicio gratuito y no garantizamos que esté disponible en todo momento. Podemos cambiar, suspender o interrumpir cualquier herramienta, función o el sitio web completo en cualquier momento, con o sin aviso; por ejemplo, para corregir un error, reemplazar una tecnología que ya no funciona en los navegadores modernos o mantener el servicio gratuito. También podemos establecer límites razonables, como un tamaño máximo de archivo por imagen (actualmente 20 MB para el compresor principal y 25 MB para los conversores de formato), y podemos cambiar esos límites a medida que los navegadores y dispositivos mejoren. Como todo el procesamiento ocurre en su navegador, una interrupción del sitio web nunca pone en riesgo sus imágenes originales: sus archivos permanecen en su dispositivo.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. Uso aceptable
            </h2>
            <p>
              Usted acepta usar CompressMyPic solo para fines lícitos y de una manera que no perjudique el servicio ni a otras personas. En particular, no debe intentar sobrecargar, dañar ni aplicar ingeniería inversa al sitio web, buscar vulnerabilidades de seguridad, usar scripts automatizados para enviar grandes cantidades de solicitudes, ni usar el servicio para procesar imágenes que infrinjan los derechos de autor de otra persona, contengan material ilegal o estén destinadas a engañar o acosar. Usted es responsable de asegurarse de tener derecho a usar cada imagen que procese y de guardar una copia de seguridad de cualquier imagen importante antes de comprimirla o convertirla.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. Limitación de responsabilidad
            </h2>
            <p>
              En la máxima medida permitida por la ley, CompressMyPic y su propietario no serán responsables de ninguna pérdida indirecta, incidental o consecuente derivada del uso del servicio, incluyendo, entre otras, la pérdida de datos, la pérdida de beneficios o el costo de recrear una imagen. Como el servicio es gratuito, nuestra responsabilidad total por cualquier reclamación relacionada con el servicio se limita a la cantidad que usted pagó por usarlo, que es cero. Esto no limita ninguna responsabilidad que no pueda limitarse por ley, como la responsabilidad por fraude o por muerte o lesiones personales causadas por negligencia.
            </p>
            <p>
              La compresión es, por naturaleza, un proceso con pérdida: reducir el tamaño de un archivo puede reducir su calidad, y algunos formatos, como JPEG, no pueden conservar la transparencia. Usted es responsable de revisar el resultado comprimido antes de eliminar o sobrescribir un archivo original, y no somos responsables de la pérdida de calidad, la falta de transparencia ni ningún otro cambio que la compresión produzca en una imagen que usted haya elegido procesar.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. Servicios de terceros
            </h2>
            <p>
              El sitio usa servicios de terceros para funcionar, incluyendo alojamiento y entrega de contenido a través de Cloudflare y entrega de mensajes a través de FormSubmit. Esos servicios tienen sus propios términos y políticas de privacidad, y su uso de ellos se rige por esos documentos, además de por estos términos. No somos responsables de la disponibilidad, el contenido ni las prácticas de los sitios web o servicios de terceros enlazados desde CompressMyPic.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. Ley aplicable
            </h2>
            <p>
              Estos términos se rigen por las leyes de los Emiratos Árabes Unidos, desde donde se opera el sitio, sin tener en cuenta sus normas sobre conflictos de leyes. Cualquier disputa que surja de estos términos o de su uso del servicio, o relacionada con ellos, será resuelta por los tribunales de los Emiratos Árabes Unidos. Si alguna parte de estos términos resulta inaplicable, las demás partes seguirán aplicándose en su totalidad.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              10. Cambios a estos términos
            </h2>
            <p>
              Podemos actualizar estos términos cuando el servicio cambie; por ejemplo, cuando añadamos herramientas nuevas, cambiemos los límites de tamaño de archivo o empecemos a usar un nuevo servicio de terceros. Cuando lo hagamos, actualizaremos la fecha de «Última actualización» en la parte superior de esta página. Si continúa usando CompressMyPic después de que los términos hayan cambiado, acepta los términos actualizados. Si no está de acuerdo con un cambio, deje de usar el servicio.
            </p>
          </section>

<section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              11. Contacto
            </h2>
            <p>
              Si tiene alguna pregunta sobre estos términos, escríbanos a{' '}
              <a
                href="mailto:bilalayyah@gmail.com"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold"
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
