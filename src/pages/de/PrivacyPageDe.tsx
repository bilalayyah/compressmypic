import React, { useEffect } from 'react';
import { ArrowLeft, Shield } from 'lucide-react';

interface PrivacyPageDeProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPageDe: React.FC<PrivacyPageDeProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Datenschutzerklärung – CompressMyPic';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'Datenschutzerklärung von CompressMyPic: Bilder werden lokal in Ihrem Browser verarbeitet und niemals hochgeladen. Keine Konten, keine Bilderspeicherung – nur die wesentlichen Hinweise zu Werbung und Kontakt.');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-6">
          <button
            type="button"
            onClick={() => onNavigate('/de/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7c3aed] dark:text-[#c4b5fd] hover:text-[#6d28d9] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Zurück zum Bildkomprimierer</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <Shield className="w-6 h-6 text-[#16a34a] dark:text-[#4ade80]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              Datenschutzerklärung
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            Zuletzt aktualisiert: 15. Nov. 2026
          </p>
        </div>

        {/* Exakter Text der Datenschutzerklärung */}
        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. Clientseitige Bildverarbeitung
            </h2>
            <p>
              CompressMyPic ist ein kostenloser Online-Bildkomprimierer. Bilder werden lokal in Ihrem Browser mit HTML5 Canvas verarbeitet – sie werden niemals auf unsere Server hochgeladen, und wir erfassen, speichern oder teilen Ihre Bilder nicht. Wenn Sie Ihren Browser-Tab schließen oder neu laden, werden alle temporären Objekte im Arbeitsspeicher gelöscht.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. Keine Erhebung personenbezogener Daten
            </h2>
            <p>
              Wir verlangen kein Konto, kein Passwort, keine E-Mail-Adresse und keine Telefonnummer, um das Komprimierungstool zu nutzen. Kontaktinformationen, die Sie freiwillig über unser Kontaktformular übermitteln, werden ausschließlich verwendet, um auf Ihre konkrete Anfrage zu antworten.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. Werbung (Google AdSense)
            </h2>
            <p>
              Wir verwenden Google AdSense, um Werbung anzuzeigen, sobald es aktiviert ist. Drittanbieter, einschließlich Google, verwenden Cookies, um Anzeigen auf der Grundlage früherer Besuche eines Nutzers auf dieser Website oder auf anderen Websites zu schalten. Die Verwendung von Werbe-Cookies durch Google ermöglicht es Google und seinen Partnern, Ihnen Anzeigen auf der Grundlage Ihres Besuchs auf dieser Website und/oder auf anderen Websites im Internet zu zeigen. Sie können personalisierte Werbung deaktivieren, indem Sie die Google-Anzeigeneinstellungen (
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline"
              >
                https://adssettings.google.com
              </a>
              ) oder{' '}
              <a
                href="https://www.aboutads.info/choices/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline"
              >
                https://www.aboutads.info/choices/
              </a>
              {' '}besuchen.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. Analyse
            </h2>
            <p>
              Wir verwenden Google Analytics 4 (GA4), um in zusammengefasster Form zu verstehen, wie die Website genutzt wird – zum Beispiel, welche Tools beliebt sind und welche Seiten besucht werden. GA4 erfasst anonymisierte Nutzungsdaten wie die von Ihnen besuchten Seiten, Ihre Verweildauer sowie allgemeine Informationen zu Ihrem Gerät und Browser. GA4 kann Cookies auf Ihrem Gerät setzen (z. B. _ga), um einen Besuch vom nächsten zu unterscheiden. Wir verwenden GA4 nicht, um Sie persönlich zu identifizieren. Sie können Google Analytics jederzeit deaktivieren, indem Sie das Google Analytics Opt-out-Add-on installieren (https://tools.google.com/dlpage/gaoptout) oder Cookies in Ihren Browsereinstellungen deaktivieren.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. Links zu Drittanbietern
            </h2>
            <p>
              Unsere Website kann Links zu externen Websites enthalten. Wir sind nicht verantwortlich für die Datenschutzpraktiken oder Inhalte von Plattformen Dritter.
            </p>
          </section>

                    <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. Cookies und Einwilligung
            </h2>
            <p>
              CompressMyPic selbst setzt keine Cookies für seine Bild-Tools: Die Komprimierung läuft vollständig in Ihrem Browser und benötigt kein Cookie, kein Konto und keine gespeicherte Einstellung unsererseits. Cookies auf dieser Website stammen von Drittanbietern. Google AdSense und seine Partner können Werbe-Cookies setzen, um Ihnen relevante Anzeigen zu zeigen und zu messen, wie oft eine Anzeige eingeblendet wird. Ihr Browser speichert diese Cookies auf Ihrem Gerät, und Sie können sie jederzeit über Ihre Browser-Einstellungen löschen.
            </p>
            <p>
              Wenn Sie aus dem Europäischen Wirtschaftsraum oder dem Vereinigten Königreich zugreifen, bitten wir gemäß der DSGVO und der EU-Nutzereinwilligungsrichtlinie von Google um Ihre Einwilligung, bevor personalisierte Werbung angezeigt wird. Sie können diese Einwilligung jederzeit widerrufen, indem Sie Ihre Browser-Cookies löschen oder die Einwilligungsauswahl auf der Website ändern. Die Wahl nicht-personalisierter Werbung stoppt die Werbung nicht vollständig, bedeutet aber, dass Anzeigen nicht mehr auf Ihrem Browserverlauf basieren.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. Ihre Rechte nach der DSGVO
            </h2>
            <p>
              Wenn Sie sich im Europäischen Wirtschaftsraum oder im Vereinigten Königreich befinden, gibt Ihnen die Datenschutz-Grundverordnung (DSGVO) Rechte über Ihre personenbezogenen Daten. Sie können eine Kopie der personenbezogenen Daten verlangen, die wir über Sie speichern, deren Berichtigung verlangen, wenn sie falsch sind, ihre Löschung verlangen, die Einschränkung ihrer Verwendung verlangen und der Verarbeitung widersprechen. Wenn die Verarbeitung auf Ihrer Einwilligung beruht, können Sie diese jederzeit widerrufen; der Widerruf berührt nicht die Rechtmäßigkeit dessen, was wir zuvor rechtmäßig getan haben.
            </p>
            <p>
              Da unsere Tools Bilder lokal verarbeiten und wir keine Benutzerkonten führen, sind die einzigen personenbezogenen Daten, die wir normalerweise besitzen, der Name, die E-Mail-Adresse und die Nachricht, die Sie über das Kontaktformular senden. Um eines dieser Rechte auszuüben, schreiben Sie uns an <a
                href="mailto:bilalayyah@gmail.com"
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold"
              >
                bilalayyah@gmail.com
              </a> und wir antworten innerhalb von 30 Tagen. Sie haben außerdem das Recht, sich bei Ihrer örtlichen Datenschutzbehörde zu beschweren, wenn Sie der Meinung sind, dass wir Ihre Daten unfair behandelt haben.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. Speicherdauer
            </h2>
            <p>
              Wir speichern personenbezogene Daten nur so lange, wie es für den Zweck nötig ist, für den sie erhoben wurden. Nachrichten aus dem Kontaktformular werden nur aufbewahrt, bis Ihre Anfrage beantwortet und das Gespräch abgeschlossen ist, sowie für einen kurzen Zeitraum danach für den Fall von Rückfragen; sie werden niemals für Marketing verwendet und niemals an Dritte weitergegeben. Ihre Bilder werden überhaupt nicht gespeichert: Sie existieren nur im Arbeitsspeicher Ihres Browsers, während Sie ein Tool nutzen, und werden gelöscht, sobald Sie den Tab schließen oder neu laden. Aggregierte Analysedaten enthalten keine persönlichen Informationen und werden nur in zusammengefasster Form aufbewahrt.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. Sicherheit und reCAPTCHA
            </h2>
            <p>
              Die Website wird über HTTPS ausgeliefert, sodass die Verbindung zwischen Ihrem Browser und der Website verschlüsselt ist. Unser Kontaktformular wird über FormSubmit bereitgestellt, das Ihre Nachricht an unsere E-Mail-Adresse weiterleitet, und das Formular ist durch Google reCAPTCHA geschützt, um Spam und automatisierten Missbrauch zu blockieren. Wenn Sie das Formular absenden, kann reCAPTCHA Hardware- und Softwareinformationen wie Ihre Browser- und Gerätedaten erfassen, um Menschen von Bots zu unterscheiden; hierfür gelten die <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline"
              >
                Datenschutzerklärung
              </a> und die <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline"
              >
                Nutzungsbedingungen
              </a> von Google. Wir bitten Sie niemals, Passwörter, Zahlungsdaten oder sensible persönliche Dokumente über das Kontaktformular zu senden, und Sie sollten sie auch niemals in eine Nachricht aufnehmen.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              10. Datenschutz von Kindern
            </h2>
            <p>
              CompressMyPic ist ein Tool für ein allgemeines Publikum und richtet sich nicht an Kinder unter 13 Jahren. Wir erfassen wissentlich keine personenbezogenen Daten von Kindern. Wenn Sie ein Elternteil oder Erziehungsberechtigter sind und glauben, dass Ihr Kind uns über das Kontaktformular personenbezogene Daten gesendet hat, schreiben Sie uns bitte eine E-Mail, und wir werden sie umgehend löschen.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              11. Änderungen dieser Erklärung
            </h2>
            <p>
              Wir können diese Erklärung aktualisieren, wenn sich die Website ändert – zum Beispiel, wenn wir einen neuen Analysedienst, einen neuen Werbepartner oder eine neue Kontaktmöglichkeit hinzufügen. In diesem Fall ändern wir das Datum „Zuletzt aktualisiert" oben auf dieser Seite, und wesentliche Änderungen werden hier in einfacher Sprache beschrieben. Wenn Sie die Website nach einer Änderung weiterhin nutzen, akzeptieren Sie die aktualisierte Erklärung.
            </p>
          </section>

<section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              12. Kontakt
            </h2>
            <p>
              Wenn Sie Fragen zu dieser Erklärung haben, kontaktieren Sie uns unter{' '}
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
