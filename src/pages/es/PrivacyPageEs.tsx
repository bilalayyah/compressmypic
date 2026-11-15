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
            Última actualización: 15 de noviembre de 2026
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
                href="https://www.aboutads.info/choices/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline"
              >
                https://www.aboutads.info/choices/
              </a>
              .
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. Analítica
            </h2>
            <p>
              Usamos Google Analytics 4 (GA4) para entender, de forma agregada, cómo se usa el sitio; por ejemplo, qué herramientas son populares y qué páginas reciben visitas. GA4 recopila datos de uso anonimizados, como las páginas que visita, cuánto tiempo permanece en ellas e información general sobre su dispositivo y navegador. Puede instalar cookies en su dispositivo (como _ga) para distinguir una visita de otra. No usamos GA4 para identificarlo personalmente. Puede excluirse de Google Analytics en cualquier momento instalando el complemento de inhabilitación de Google Analytics (https://tools.google.com/dlpage/gaoptout) o desactivando las cookies en la configuración de su navegador.
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

                    <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. Cookies y consentimiento
            </h2>
            <p>
              CompressMyPic no instala ninguna cookie para sus herramientas de imagen: la compresión se realiza por completo en su navegador y no necesita ninguna cookie, cuenta ni preferencia guardada por nuestra parte. Las cookies de este sitio provienen de servicios de terceros. Google AdSense y sus socios pueden instalar cookies publicitarias para mostrarle anuncios relevantes y medir la frecuencia con que se muestra un anuncio. Su navegador guarda estas cookies en su dispositivo y usted puede eliminarlas en cualquier momento desde la configuración del navegador.
            </p>
            <p>
              Si nos visita desde el Espacio Económico Europeo o el Reino Unido, pedimos su consentimiento antes de mostrar publicidad personalizada, de acuerdo con el RGPD y la Política de Consentimiento de Usuarios de la UE de Google. Puede retirar ese consentimiento en cualquier momento borrando las cookies de su navegador o cambiando la opción de consentimiento ofrecida en el sitio. Elegir anuncios no personalizados no detiene la publicidad por completo, pero significa que los anuncios ya no se basan en su historial de navegación.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. Sus derechos según el RGPD
            </h2>
            <p>
              Si se encuentra en el Espacio Económico Europeo o el Reino Unido, el Reglamento General de Protección de Datos (RGPD) le otorga derechos sobre sus datos personales. Puede pedirnos una copia de los datos personales que tenemos sobre usted, pedir que los corrijamos si son incorrectos, pedir que los eliminemos, pedir que limitemos su uso y oponerse a su tratamiento. Cuando el tratamiento se basa en su consentimiento, puede retirarlo en cualquier momento; retirarlo no afecta lo que hicimos legalmente antes.
            </p>
            <p>
              Como nuestras herramientas procesan las imágenes localmente y no tenemos cuentas de usuario, los únicos datos personales que normalmente tenemos son el nombre, la dirección de correo electrónico y el mensaje que usted envía a través del formulario de contacto. Para ejercer cualquiera de estos derechos, escríbanos a <a
                href="mailto:bilalayyah@gmail.com"
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold"
              >
                bilalayyah@gmail.com
              </a> y responderemos dentro de 30 días. También tiene derecho a presentar una reclamación ante su autoridad local de protección de datos si cree que hemos tratado sus datos de forma injusta.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. Conservación de datos
            </h2>
            <p>
              Conservamos los datos personales solo durante el tiempo necesario para el fin con el que fueron recopilados. Los mensajes del formulario de contacto se conservan solo hasta que su consulta haya sido respondida y la conversación haya terminado, y durante un breve período después por si hay preguntas de seguimiento; nunca se usan para marketing ni se comparten con terceros. Sus imágenes no se conservan en absoluto: existen solo en la memoria de su navegador mientras usa una herramienta y se borran en el momento en que cierra o actualiza la pestaña. Los datos analíticos agregados no contienen información personal y se conservan solo de forma resumida.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. Seguridad y reCAPTCHA
            </h2>
            <p>
              El sitio se sirve por HTTPS, por lo que la conexión entre su navegador y el sitio está cifrada. Nuestro formulario de contacto se entrega a través de FormSubmit, que reenvía su mensaje a nuestra dirección de correo electrónico, y el formulario está protegido por Google reCAPTCHA para bloquear el spam y el abuso automatizado. Cuando envía el formulario, reCAPTCHA puede recopilar información de hardware y software, como los datos de su navegador y dispositivo, para distinguir a las personas de los bots; esto se rige por la <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline"
              >
                Política de privacidad
              </a> y los <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline"
              >
                Términos del servicio
              </a> de Google. Nunca le pedimos que envíe contraseñas, datos de pago ni documentos personales sensibles a través del formulario de contacto, y usted tampoco debe incluirlos en un mensaje.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              10. Privacidad de los niños
            </h2>
            <p>
              CompressMyPic es una herramienta para el público en general y no está dirigida a niños menores de 13 años. No recopilamos conscientemente información personal de niños. Si usted es padre, madre o tutor y cree que su hijo nos ha enviado información personal a través del formulario de contacto, escríbanos por correo electrónico y la eliminaremos de inmediato.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              11. Cambios a esta política
            </h2>
            <p>
              Podemos actualizar esta política cuando el sitio cambie; por ejemplo, si añadimos un nuevo servicio de analítica, un nuevo socio publicitario o una nueva forma de contactarnos. Cuando lo hagamos, cambiaremos la fecha de «Última actualización» en la parte superior de esta página y los cambios importantes se describirán aquí en lenguaje sencillo. Seguir usando el sitio después de un cambio significa que acepta la política actualizada.
            </p>
          </section>

<section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              12. Contacto
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
