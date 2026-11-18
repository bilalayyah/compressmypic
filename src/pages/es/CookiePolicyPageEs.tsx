import React, { useEffect } from 'react';
import { ArrowLeft, Cookie } from 'lucide-react';

interface CookiePolicyPageEsProps {
  onNavigate: (path: string) => void;
}

export const CookiePolicyPageEs: React.FC<CookiePolicyPageEsProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Política de cookies | CompressMyPic – Cómo se usan las cookies';
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
            <Cookie className="w-6 h-6 text-[#16a34a] dark:text-[#4ade80]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              Política de cookies
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            Última actualización: 18 de noviembre de 2026
          </p>
        </div>

        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. ¿Qué son las cookies?
            </h2>
            <p>
              Las cookies son pequeños archivos de texto que un sitio web pide a su navegador que guarde en su dispositivo. Pueden recordar información sobre su visita — por ejemplo, si ya ha visto un mensaje antes — para que el sitio o un servicio pueda reconocer su navegador en una visita posterior. Esta política explica qué cookies se usan en CompressMyPic, por qué se usan y cómo puede controlarlas.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. Cookies que no instalamos
            </h2>
            <p>
              CompressMyPic no instala ninguna cookie. Nuestras herramientas de imagen funcionan por completo en su navegador: la compresión no necesita cuenta, inicio de sesión ni cookie. No instalamos cookies para recordarlo, rastrearlo ni guardar sus preferencias. Sus imágenes nunca salen de su navegador y nada sobre ellas se guarda en una cookie.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. Cookies publicitarias de Google AdSense
            </h2>
            <p>
              Usamos Google AdSense para mostrar anuncios en este sitio. AdSense y sus socios pueden instalar cookies en su dispositivo para mostrar anuncios según sus visitas anteriores a este sitio web o a otros sitios web. El uso de cookies publicitarias por parte de Google permite a Google y a sus socios mostrarle anuncios según su visita a este sitio y/u otros sitios de Internet, y medir con qué frecuencia se muestra un anuncio. Los espacios publicitarios de este sitio se eligen manualmente; no usamos inserción automática de anuncios. Puede rechazar la publicidad personalizada visitando la Configuración de anuncios de Google (
              <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline">https://adssettings.google.com</a>
              ) o 
              <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline">https://www.aboutads.info/choices/</a>
              . Elegir anuncios no personalizados no elimina la publicidad por completo, pero significa que los anuncios ya no se basan en su historial de navegación.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. Cookies de Google Analytics 4
            </h2>
            <p>
              Usamos Google Analytics 4 (GA4) para entender, de forma agregada, cómo se usa el sitio — por ejemplo, qué herramientas son populares y qué páginas reciben visitas. GA4 puede instalar cookies en su dispositivo, como _ga, para distinguir una visita de otra. Los datos son anónimos y se usan solo de forma resumida; no usamos GA4 para identificarlo personalmente. Puede rechazar Google Analytics en cualquier momento instalando el complemento de inhabilitación de Google Analytics (https://tools.google.com/dlpage/gaoptout) o desactivando las cookies en la configuración de su navegador.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. Consentimiento (EEE, Reino Unido y Suiza)
            </h2>
            <p>
              Si nos visita desde el Espacio Económico Europeo, el Reino Unido o Suiza, Google le muestra un mensaje de consentimiento antes de mostrar publicidad personalizada, conforme al RGPD y a la Política de consentimiento de usuarios de la UE de Google. Puede cambiar o retirar su consentimiento en cualquier momento usando el enlace «Configuración de privacidad y cookies» en el pie de página de este sitio, que vuelve a abrir el mensaje de consentimiento, o borrando las cookies de su navegador. Retirar el consentimiento no afecta a nada de lo realizado lícitamente antes de la retirada.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. Otros servicios de terceros
            </h2>
            <p>
              Algunos otros servicios de este sitio pueden usar cookies o almacenamiento similar propios. Google reCAPTCHA, que protege nuestro formulario de contacto contra el spam, puede instalar cookies para distinguir a las personas de los bots; su uso se rige por la 
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline">Política de Privacidad de Google</a>
               y los 
              <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline">Términos de Servicio de Google</a>
               de Google. Cloudflare, que aloja este sitio, puede instalar una cookie de seguridad para proteger el sitio contra abusos. Los comentarios anónimos bajo nuestras herramientas solo piden un nombre, que guarda el servicio de comentarios, no en una cookie de este sitio.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. Almacenamiento del navegador que no es una cookie
            </h2>
            <p>
              Su navegador también guarda una pequeña cantidad de información local que no es una cookie. Si publica un comentario, su navegador puede recordar el nombre que escribió para no tener que escribirlo de nuevo, y si cambia el idioma del sitio, su navegador puede recordar esa elección para su próxima visita. Esta información permanece en su propio dispositivo, nunca se envía a nuestros servidores y puede borrarla en cualquier momento borrando los datos del sitio en su navegador.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. Cómo controlar las cookies
            </h2>
            <p>
              Puede eliminar las cookies ya guardadas en su dispositivo e impedir que se instalen cookies en el futuro desde la configuración de su navegador — todos los navegadores principales (Chrome, Firefox, Safari, Edge) ofrecen esta opción en su configuración de privacidad o seguridad. Bloquear todas las cookies no afectará a nuestras herramientas de imagen, que no dependen de las cookies, pero puede afectar a funciones de servicios de terceros como los anuncios y las estadísticas. También puede usar el modo privado o de incógnito de su navegador, que elimina las cookies al cerrar la ventana.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. Cambios en esta política
            </h2>
            <p>
              Podemos actualizar esta política cuando cambie el sitio — por ejemplo, si añadimos un nuevo socio publicitario o un nuevo servicio de estadísticas. Cuando lo hagamos, cambiaremos la fecha de «Última actualización» en la parte superior de esta página. Seguir usando el sitio después de un cambio significa que acepta la política actualizada.
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              10. Contacto
            </h2>
            <p>
              Si tiene preguntas sobre esta política, contáctenos en 
              <a href="mailto:bilalayyah@gmail.com" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold">bilalayyah@gmail.com</a>
               o lea nuestra 
              <a href="/es/privacidad" onClick={(e) => { e.preventDefault(); onNavigate('/es/privacidad'); }} className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold">Política de Privacidad</a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
