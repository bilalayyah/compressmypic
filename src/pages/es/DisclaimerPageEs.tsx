import React, { useEffect } from 'react';
import { ArrowLeft, ShieldAlert } from 'lucide-react';

interface DisclaimerPageEsProps {
  onNavigate: (path: string) => void;
}

export const DisclaimerPageEs: React.FC<DisclaimerPageEsProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Aviso legal | CompressMyPic – Herramientas de imagen gratuitas';
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
            className="inline-flex items-center gap-1.5 py-2 text-xs font-semibold text-[#7c3aed] dark:text-[#c4b5fd] hover:text-[#6d28d9] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al compresor de imágenes</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <ShieldAlert className="w-6 h-6 text-[#16a34a] dark:text-[#4ade80]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              Aviso legal
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            Última actualización: 18 de noviembre de 2026
          </p>
        </div>

        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. Información general
            </h2>
            <p>
              CompressMyPic es un servicio gratuito de compresión y edición de imágenes en línea. Las herramientas, guías y artículos de este sitio web se ofrecen únicamente para información general y uso práctico. No son asesoramiento profesional de ningún tipo — ni legal, ni médico, ni financiero, ni técnico — y no crean ninguna relación profesional entre usted y CompressMyPic.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. Sin garantía
            </h2>
            <p>
              El servicio se ofrece "tal cual" y "según disponibilidad", sin garantías de ningún tipo, expresas o implícitas. No garantizamos que las herramientas estén siempre disponibles, sin interrupciones, sin errores ni libres de componentes dañinos, ni que una imagen concreta se comprima hasta un tamaño o una calidad determinados. Los resultados dependen de la imagen original, de su formato y de su navegador, así que conserve siempre una copia de sus archivos originales antes de usar cualquier herramienta.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. Exactitud del contenido
            </h2>
            <p>
              Trabajamos para mantener nuestras guías, artículos y descripciones exactos y actualizados, pero los formatos de imagen, los navegadores y los estándares web cambian con el tiempo. La información de este sitio puede quedar desactualizada o contener errores a pesar de nuestros esfuerzos. Verifique siempre los datos importantes — como los límites de tamaño de una plataforma — en la documentación oficial de esa plataforma antes de confiar en ellos.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. Sus archivos son su responsabilidad
            </h2>
            <p>
              Las imágenes se procesan localmente en su navegador y nunca se suben a nuestros servidores. Eso también significa que no podemos recuperar un archivo por usted: si sobrescribe, elimina o pierde una imagen original mientras usa nuestras herramientas, no podemos restaurarla. Guarde copias de seguridad de cualquier imagen importante y procese solo copias de archivos que le pertenezcan o que tenga permiso para editar.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. Servicios y enlaces de terceros
            </h2>
            <p>
              Este sitio utiliza servicios de terceros — Google AdSense para la publicidad, Google Analytics 4 para las estadísticas de uso, FormSubmit para el formulario de contacto y un Cloudflare Worker para los comentarios anónimos — y enlaza a sitios web externos. No controlamos esos servicios ni esos sitios, y no somos responsables de su contenido, disponibilidad, prácticas de privacidad ni exactitud. Al usarlos se aplican sus propios términos y políticas de privacidad.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. Publicidad
            </h2>
            <p>
              Los anuncios que se muestran en este sitio son servidos por Google AdSense y sus socios. No respaldamos, garantizamos ni asumimos responsabilidad por ningún producto, servicio o afirmación de un anuncio. Cualquier compra o decisión que tome a partir de un anuncio es enteramente bajo su propio riesgo; evalúe usted mismo a los anunciantes antes de comprar nada.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. Limitación de responsabilidad
            </h2>
            <p>
              En la máxima medida permitida por la ley, CompressMyPic y su operador no serán responsables de ninguna pérdida o daño directo, indirecto, incidental o consecuente derivado del uso — o de la imposibilidad de uso — de este sitio web o de sus herramientas, incluidos, entre otros, la pérdida de archivos, datos o beneficios. Su único recurso ante cualquier insatisfacción con el servicio es dejar de utilizarlo.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. Comentarios de los usuarios
            </h2>
            <p>
              Los comentarios publicados bajo nuestras herramientas son escritos por visitantes y reflejan sus propias opiniones, no las nuestras. Moderamos los comentarios y podemos eliminar cualquier contenido que sea spam, abusivo o fuera de tema, pero no respaldamos ni asumimos responsabilidad por el contenido de los comentarios de los usuarios. No comparta nunca contraseñas, datos de pago ni información personal sensible en un comentario.
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. Contacto
            </h2>
            <p>
              Si tiene preguntas sobre este aviso legal, contáctenos en 
              <a href="mailto:bilalayyah@gmail.com" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold">bilalayyah@gmail.com</a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
