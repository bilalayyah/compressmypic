// German (Standard German) tool registry — COMPLETE (home + all 48 tools).
// Assembled from tools-de-batch1.ts … tools-de-batch6.ts (coordinator merge).
// Target path in the repo: src/locales/de/tools.ts
// German (Standard German), Sie forms. Slugs, category ids and
// relatedSlugs are unchanged from the English registry (src/data/tools.ts).
// Batch 1: 8 tools; Batches 2–6: 8 tools each (40 tools); home entry from
// i18n-de.ts (HOME_ENTRY_DE). Translated from English — never from
// Spanish; Spanish files were used only as structural templates.

import type { ToolDefinition, ToolCategoryMeta } from '../../data/tools';

export const TOOL_CATEGORIES_DE: ToolCategoryMeta[] = [
  { id: 'compress', label: 'Komprimieren', description: 'Bilddateien verkleinern ohne sichtbaren Qualitätsverlust' },
  { id: 'resize', label: 'Größe ändern', description: 'Pixelmaße ändern oder Bilder stapelweise skalieren' },
  { id: 'convert', label: 'Konvertieren', description: 'Zwischen Bildformaten konvertieren und PDFs erstellen' },
  { id: 'crop-edit', label: 'Zuschneiden & Bearbeiten', description: 'Bilder drehen, spiegeln, zuschneiden und anpassen' },
  { id: 'ai-tools', label: 'KI-Tools', description: 'Intelligente Bildverarbeitung im Browser' },
  { id: 'create', label: 'Erstellen', description: 'Favicons, Collagen und Web-Assets erstellen' },
  { id: 'privacy', label: 'Datenschutz-Tools', description: 'EXIF-, GPS- und versteckte Metadaten prüfen und entfernen' },
  { id: 'developer', label: 'Entwickler-Tools', description: 'Farben wählen, Maße prüfen und Web-Assets generieren' },
];

export const TOOLS_REGISTRY_DE: ToolDefinition[] = [
  {
  slug: '/',
  name: 'Bildkompressor',
  shortDescription: 'Komprimieren Sie JPG-, PNG-, WebP- und HEIC-Bilder ohne Qualitätsverlust.',
  category: 'compress',
  seoTitle: 'Kostenloser Bildkompressor online – 100 KB',
  seoDescription:
    'Bilder online kostenlos komprimieren – Dateigröße reduzieren ohne Qualitätsverlust. JPG, PNG und WebP komprimieren ohne Anmeldung und ohne Wasserzeichen.',
  h1: 'Kostenloser Bildkompressor online',
  subtitle: 'Verkleinern Sie JPG-, PNG-, WebP- und HEIC-Dateien direkt in Ihrem Browser.',
  howToSteps: [],
  features: [],
  faqs: [],
  relatedSlugs: ['/image-resizer', '/image-converter', '/remove-image-metadata'],
},
  {
    slug: '/image-resizer',
    name: 'Bildgröße ändern',
    shortDescription: 'Bilder nach exakten Pixeln, Prozent oder Social-Media-Vorlagen skalieren.',
    category: 'resize',
    seoTitle: 'Bildgröße online ändern – kostenlos, Pixel oder %',
    seoDescription:
      'Bildgröße kostenlos online ändern – nach Pixeln, Prozent oder Vorlage. Skalieren Sie Stapel direkt im Browser und laden Sie alles kostenlos als ZIP herunter.',
    h1: 'Bildgröße online kostenlos ändern',
    subtitle:
      'Unser Bildgrößen-Tool im Browser ermöglicht Webdesignern, Online-Händlern, Bloggern und allen anderen, Fotos in Sekunden auf exakte Pixelmaße oder prozentuale Verhältnisse zu skalieren. Sperren Sie das Seitenverhältnis, um Verzerrungen zu vermeiden, wenden Sie Social-Media-Vorlagen mit einem Klick an oder verarbeiten Sie einen ganzen Ordner lokal – ganz ohne Upload auf einen Server.',
    howToSteps: [
      {
        title: 'Ein oder mehrere Bilder hochladen',
        description:
          'Ziehen Sie JPG-, PNG-, WebP-, HEIC-, GIF-, BMP- oder SVG-Dateien mit bis zu 20 MB pro Datei in den Upload-Bereich, wählen Sie Dateien auf Ihrem Gerät aus oder fügen Sie sie direkt mit Strg+V ein.',
      },
      {
        title: 'Modus „Nach Pixeln“ oder „Nach Prozent“ wählen',
        description:
          'Wechseln Sie zwischen „Nach Pixeln (B × H)“, um exakte Maße bis zu 12.000 px einzugeben, oder „Nach Prozent (%)“, um zwischen 10 % und 200 % zu skalieren – per Schieberegler oder Schnellschaltflächen.',
      },
      {
        title: 'Seitensperre, Anpassungsmodus oder Vorlagen einstellen',
        description:
          'Lassen Sie das Seitenverhältnis gesperrt, um proportional zu skalieren, oder entsperren Sie es, um „Einpassen“, „Ausfüllen“ oder „Exakt strecken“ zu wählen. Alternativ klicken Sie auf eine Vorlage wie Instagram-Beitrag, YouTube-Vorschaubild oder Full HD.',
      },
      {
        title: 'Ausgabeformat und Qualität wählen',
        description:
          'Wählen Sie die Ausgabe „Original“, JPG, PNG oder WebP, stellen Sie den Regler für die Ausgabequalität von 10 % bis 100 % ein und wählen Sie eine Hintergrundfarbe, falls Sie als JPG exportieren.',
      },
      {
        title: 'Einstellungen anwenden und visuell vergleichen',
        description:
          'Klicken Sie auf „Alle skalieren“, um Ihren Stapel zu verarbeiten, und öffnen Sie die Vergleichsansicht auf einer Karte, um Schärfe und Einsparung in Byte vorher und nachher nebeneinander zu prüfen.',
      },
      {
        title: 'Einzeldateien oder ein ZIP-Archiv herunterladen',
        description:
          'Speichern Sie jedes skalierte Bild über seine Schaltfläche „Herunterladen“ oder klicken Sie auf „Alle herunterladen (ZIP)“, wenn Sie zwei oder mehr Dateien zusammen skalieren.',
      },
    ],
    features: [
      {
        title: 'Exakte Pixel & prozentuale Skalierung',
        description:
          'Skalieren Sie auf exakte Pixelbreite und -höhe oder sauber von 10 % bis 200 %, wobei das Seitenverhältnis bei gesperrter Einstellung automatisch erhalten bleibt.',
      },
      {
        title: 'Intelligente Anpassungsmodi (Exakt, Einpassen, Ausfüllen)',
        description:
          'Wählen Sie, wie Bilder in feste Vorgabemaße passen: auf die exakte Größe strecken, ohne Zuschnitt einpassen oder mittig zuschneiden, um auszufüllen.',
      },
      {
        title: 'Stapelverarbeitung + ZIP-Download',
        description:
          'Verarbeiten Sie Dutzende Produktfotos oder Blog-Vorschaubilder in einem Stapel und laden Sie alle in einer einzigen ZIP-Datei herunter.',
      },
      {
        title: '100 % lokale Verarbeitung im Browser',
        description:
          'Ihre Fotos werden mit HTML5 Canvas auf Ihrem eigenen Gerät skaliert und niemals auf einen externen Server hochgeladen.',
      },
    ],
    faqs: [
      {
        question: 'Was ist der Unterschied zwischen „Nach Pixeln“ und „Nach Prozent“ im Bildgrößen-Tool?',
        answer:
          '„Nach Pixeln“ lässt Sie eine exakte Breite und Höhe in Pixeln eingeben (bis zu 12.000 px) oder Social-Media-Vorlagen direkt anwenden. „Nach Prozent“ skaliert jedes hochgeladene Bild proportional zwischen 10 % und 200 % – über den Schieberegler oder die Schnellschaltflächen für 25 %, 50 %, 75 %, 150 % und 200 %.',
      },
      {
        question: 'Was passiert, wenn ich die Seitensperre ein- oder ausschalte?',
        answer:
          'Bei gesperrtem Seitenverhältnis aktualisiert sich die Höhe automatisch im exakten Verhältnis zu Ihrem ersten hochgeladenen Foto, sobald Sie eine neue Breite eingeben (und umgekehrt). Wenn Sie die Sperre lösen, können Sie Breite und Höhe unabhängig eingeben, und die Anpassungsoptionen „Einpassen“, „Ausfüllen“ und „Exakt strecken“ erscheinen.',
      },
      {
        question: 'Wann sollte ich „Einpassen“, „Ausfüllen“ oder „Exakt strecken“ wählen?',
        answer:
          'Wählen Sie „Einpassen (ohne Zuschnitt)“, wenn das gesamte Motiv im Zielrahmen bleiben soll, ohne dass Kanten beschnitten werden. Wählen Sie „Ausfüllen (mittiger Zuschnitt)“, um exakte Vorgabemaße sauber zu füllen, indem Überstand beschnitten wird, oder „Exakt strecken“, wenn das Einhalten fester Pixelgrenzen wichtiger ist als das Seitenverhältnis.',
      },
      {
        question: 'Welche Social-Media- und Bildschirmvorlagen sind eingebaut?',
        answer:
          'Es gibt Vorlagen mit einem Klick für Instagram-Beitrag (1080×1080), Instagram-Story (1080×1920), YouTube-Vorschaubild (1280×720), Facebook-Titelbild (851×315), X-Kopfzeile (1500×500) und Full HD (1920×1080). Ein Klick auf eine Vorlage wechselt in den Modus „Nach Pixeln“ und trägt diese exakten Maße ein.',
      },
      {
        question: 'Kann ich ein kleines Bild über seine Originalauflösung hinaus vergrößern?',
        answer:
          'Ja, Sie können größere Pixelwerte eingeben oder im Modus „Nach Prozent“ bis zu 200 % skalieren – mit der Interpolation von HTML5 Canvas. Beachten Sie, dass starkes Vergrößern von Grafiken mit niedriger Auflösung die Kanten weicher erscheinen lässt, weil Canvas vorhandene Pixel streckt, statt neue Details zu erfinden.',
      },
      {
        question: 'Was ist die maximale Pixelgröße und Dateigröße beim Skalieren?',
        answer:
          'Jedes hochgeladene Bild darf bis zu 20 MB groß sein, und die Pixelfelder unterstützen Breiten und Höhen bis zu 12.000 px. Sehr große Arbeitsflächen können auf Mobilgeräten viel Browser-Arbeitsspeicher verbrauchen – bleiben Sie für eine schnelle Verarbeitung am besten zwischen 4.000 und 6.000 px.',
      },
      {
        question: 'Welche Eingabeformate unterstützt dieses Bildgrößen-Tool?',
        answer:
          'Sie können JPG-, PNG-, WebP-, iPhone-HEIC/HEIF-, GIF-, BMP- und SVG-Dateien hochladen. HEIC-Bilder werden vor dem Skalieren lokal in Ihrem Browser decodiert, und Sie können die Ergebnisse als „Original“, JPG, PNG oder WebP exportieren.',
      },
      {
        question: 'Bleiben transparente Hintergründe bei PNG- und WebP-Dateien beim Skalieren erhalten?',
        answer:
          'Ja, die Transparenz bleibt erhalten, solange Sie das Format „Original“ (bei PNG/WebP) beibehalten oder explizit PNG oder WebP als Ausgabe wählen. Wenn Sie das Ausgabeformat auf JPG umstellen, werden transparente Bereiche mit der gewählten Hintergrundfarbe gefüllt (standardmäßig Weiß).',
      },
      {
        question: 'Wie geht die Stapelverarbeitung mit gemischten Quer- und Hochformatfotos um?',
        answer:
          'Wenn Sie einen Stapel im Modus „Nach Pixeln“ bei gesperrtem Seitenverhältnis hochladen, behält jedes Foto seine eigenen natürlichen Proportionen anhand der Breitenbegrenzung, statt Hochformate in Querformatrahmen zu verzerren. Wenn Sie für den ganzen Stapel feste, identische Maße wollen, entsperren Sie das Seitenverhältnis und wählen Sie „Einpassen“ oder „Ausfüllen“.',
      },
      {
        question: 'Warum füllt der erste Upload automatisch Breite und Höhe aus?',
        answer:
          'Wenn Sie Ihr erstes Foto in eine leere Warteschlange ziehen, setzt das Tool die Breite auf bis zu 1.200 px und berechnet die passende Höhe proportional dazu. Sie können diese Zahlen sofort überschreiben und auf „Alle skalieren“ klicken, um alle Bilder der Liste erneut zu verarbeiten.',
      },
      {
        question: 'Wie prüfe ich die Schärfe, nachdem ich ein Foto verkleinert habe?',
        answer:
          'Klicken Sie auf einer fertigen Ergebniskarte auf „Vergleichen“ oder auf das Vorschaubild, um das Vorher-Nachher-Vergleichsfenster zu öffnen. Es zeigt die Original- und die skalierten Maße, die Einsparung in Byte und einen geteilten Schieberegler, mit dem Sie feine Details vor dem Herunterladen prüfen können.',
      },
      {
        question: 'Kann ich gleichzeitig das Ausgabeformat ändern und skalieren?',
        answer:
          'Ja, Sie können im Ausgabeformat JPG, PNG oder WebP wählen und den Regler für die Ausgabequalität (10 % bis 100 %) einstellen, bevor Sie auf „Alle skalieren“ klicken. So verkleinern Sie die Maße und konvertieren in ein leichtes Webformat in einem Durchgang.',
      },
      {
        question: 'Bleiben animierte GIFs nach dem Skalieren hier animiert?',
        answer:
          'Nein, HTML5 Canvas zeichnet beim Skalieren auf statische Maße nur den ersten Frame eines GIFs und exportiert ein Einzelbild. Wenn Sie Animationen erhalten und gleichzeitig das Dateigewicht reduzieren möchten, nutzen Sie unser spezielles GIF-Komprimierungs-Tool.',
      },
      {
        question: 'Werden meine Fotos beim Skalieren auf einen externen Server hochgeladen?',
        answer:
          'Nein, das gesamte Skalieren findet in Ihrem Browser-Tab statt – mit lokalem HTML5-Canvas-Speicher und JavaScript. Ihre Original- und skalierten Bilder wandern nie über ein Netzwerk und berühren keinen externen Speicher.',
      },
      {
        question: 'Wie lade ich Dutzende skalierte Bilder herunter, ohne einzeln zu klicken?',
        answer:
          'Sobald zwei oder mehr Bilder fertig skaliert sind, erscheint über der Liste eine Leiste „Stapel bereit“ mit einer Schaltfläche „Alle herunterladen (ZIP)“. Ein Klick darauf packt jede skalierte Datei in einen einzigen Download namens resized_images_compressmypic.zip.',
      },
      {
        question: 'Kann ich einen Screenshot aus der Zwischenablage einfügen, um ihn zu skalieren?',
        answer:
          'Ja, drücken Sie Strg+V (oder Cmd+V auf dem Mac), während Sie auf der Seite sind, um einen kopierten Screenshot direkt in die Upload-Warteschlange zu legen. Er lädt sofort seine Maße und wird mit Ihren aktuellen Einstellungen für Breite, Höhe oder Prozent skaliert.',
      },
      {
        question: 'Warum ist meine skalierte PNG-Datei trotz weniger Pixel größer in Byte geworden?',
        answer:
          'Wenn Sie ein komprimiertes JPG beim Skalieren in verlustfreies PNG umwandeln, behält PNG die verlustfreie Pixelcodierung und kann schwerer sein als das Quell-JPEG. Stellen Sie das Ausgabeformat auf WebP oder JPG mit 80 %–85 % Qualität um, um deutlich kleinere Webdateien zu erhalten.',
      },
      {
        question: 'Welche Qualitätseinstellung ist beim Export skalierter JPG- oder WebP-Bilder am besten?',
        answer:
          'Die Standardeinstellung von 85 % balanciert scharfe Kanten und saubere Verläufe mit kleinen Dateigrößen für Websites, Blogbeiträge und Marktplätze aus. Senken Sie die Qualität auf 65 %–75 %, wenn Sie eine strengere Einsparung in Kilobyte brauchen, oder erhöhen Sie sie auf 95 %–100 % für die Druckvorbereitung.',
      },
      {
        question: 'Kann ich Vektor-SVG-Grafiken sauber auf hochauflösende PNGs skalieren?',
        answer:
          'Ja, beim Hochladen eines eingebetteten SVG können Sie größere Ziel-Pixelmaße eingeben, bevor es auf Canvas gerastert wird. Eigenständige SVGs mit eingebetteten Formen und Verläufen skalieren scharf, wobei externe Schrift- oder Bildlinks innerhalb von SVGs von der Browsersicherheit blockiert werden.',
      },
      {
        question: 'Funktioniert dieses Bildgrößen-Tool offline oder auf Mobiltelefonen?',
        answer:
          'Ja, es funktioniert reibungslos in iOS Safari, Android Chrome und Desktop-Browsern – mit berührungsfreundlichen Schiebereglern und Vorlagen. Da die Berechnungen nach dem Laden der Seite lokal in Ihrem Browser laufen, hängt nichts von der Upload-Geschwindigkeit ab.',
      },
    ],
    relatedSlugs: ['/', '/image-converter', '/rotate-flip-image', '/image-dimensions-checker'],
  },
  {
    slug: '/image-converter',
    name: 'Bild-Konverter',
    shortDescription: 'JPG, PNG, WebP, HEIC, BMP, GIF & SVG in Ihrem Browser konvertieren.',
    category: 'convert',
    seoTitle: 'Bilder kostenlos online konvertieren – JPG, PNG, WebP',
    seoDescription:
      'Bilder kostenlos online konvertieren – JPG, PNG, WebP, HEIC, SVG und mehr. Verarbeiten Sie Stapel auf Ihrem Gerät, mit Qualitätsregler und ZIP-Export.',
    h1: 'Bild-Konverter online kostenlos',
    subtitle:
      'Für iPhone-Fotografen, Webentwickler, Marketer und Büroteams: Dieser Bild-Konverter im Browser wechselt mühelos zwischen JPG, PNG, WebP, HEIC, SVG, BMP, GIF und AVIF. Passen Sie die Ausgabequalität an, wählen Sie eine Hintergrundfarbe für transparente Ausschnitte und konvertieren Sie ganze Stapel lokal – ohne Dateien hochzuladen.',
    howToSteps: [
      {
        title: 'Eine oder mehrere Bilddateien hinzufügen',
        description:
          'Ziehen Sie JPG-, PNG-, WebP-, HEIC-, SVG-, BMP-, GIF- oder AVIF-Bilder (bis zu 20 MB pro Datei) in den Upload-Bereich, wählen Sie Dateien von der Festplatte aus oder fügen Sie sie mit Strg+V ein.',
      },
      {
        title: 'Ausgabeformat wählen',
        description:
          'Wählen Sie unter „In Format konvertieren“ WebP (kleinstes Webformat), JPG (universell) oder PNG (verlustfrei mit Transparenz).',
      },
      {
        title: 'Hintergrundfarbe für JPG-Ausgabe festlegen',
        description:
          'Wenn Sie transparente PNG-, WebP- oder SVG-Grafiken in JPG konvertieren, klicken Sie auf das Farbfeld „Farbe für Transparenzfüllung“, um Weiß, Schwarz oder eine beliebige Hex-Farbe als Hintergrund zu wählen.',
      },
      {
        title: 'Bei Bedarf den Qualitätsregler anpassen',
        description:
          'Ziehen Sie den Qualitätsregler zwischen 10 % und 100 % für WebP- oder JPG-Ausgaben (der Regler deaktiviert sich automatisch für verlustfreies PNG).',
      },
      {
        title: 'Konvertieren und Ergebnisse prüfen',
        description:
          'Klicken Sie auf „Alle konvertieren“, um Ihre Warteschlange mit den aktualisierten Einstellungen neu zu codieren, und klicken Sie dann auf einer Karte auf „Vergleichen“, um Bildtreue und Byte-Änderung zu prüfen.',
      },
      {
        title: 'Einzeldateien oder ZIP herunterladen',
        description:
          'Speichern Sie jede konvertierte Datei über ihre Schaltfläche „Herunterladen“ oder klicken Sie auf „Alle herunterladen (ZIP)“, um den gesamten Stapel zusammen herunterzuladen.',
      },
    ],
    features: [
      {
        title: 'Breite Unterstützung von Eingabeformaten',
        description:
          'Konvertiert iPhone-HEIC/HEIF-Fotos, saubere SVG-Vektorgrafiken, ältere BMP-Dateien, WebP-Bilder, PNGs und JPEGs direkt in Ihrem Browser.',
      },
      {
        title: 'Transparenzsichere Konvertierung',
        description:
          'Behält die Alpha-Transparenz beim Konvertieren nach PNG oder WebP und lässt Sie die Hintergrundfarbe beim Konvertieren nach JPG individuell anpassen.',
      },
      {
        title: 'Stapelkonvertierung & ZIP-Export',
        description:
          'Konvertieren Sie ganze Ordner mit Bildern auf einmal mit einheitlichen Qualitätseinstellungen und laden Sie sie mit einem Klick herunter.',
      },
      {
        title: 'Private Engine auf dem Gerät',
        description:
          'Sogar die HEIC-Decodierung läuft lokal per WebAssembly in Ihrem Browser – keine Server-Uploads und keine Wasserzeichen.',
      },
    ],
    faqs: [
      {
        question: 'Welche Ein- und Ausgabeformate unterstützt dieser Bild-Konverter?',
        answer:
          'Sie können JPG-, PNG-, WebP-, iPhone-HEIC/HEIF-, SVG-, BMP-, GIF- und vom Browser decodierte AVIF-Dateien mit bis zu 20 MB pro Bild laden. Die Ausgaben werden sauber als WebP (kleinstes Webformat), JPG (universell) oder PNG (verlustfrei mit Transparenz) exportiert.',
      },
      {
        question: 'Wie werden HEIC- und HEIF-Fotos vom iPhone ohne Server konvertiert?',
        answer:
          'Unser Konverter lädt einen WebAssembly-HEIC-Decoder direkt in Ihren Browser-Tab. Er decodiert den HEIC-Container lokal auf Ihrer CPU und zeichnet das Foto auf HTML5 Canvas, um Standard-JPG-, PNG- oder WebP-Dateien zu exportieren.',
      },
      {
        question: 'Warum ist der Qualitätsregler deaktiviert, wenn PNG ausgewählt ist?',
        answer:
          'PNG verwendet verlustfreie DEFLATE-Komprimierung, das heißt, es codiert jedes Pixel exakt, ohne visuelle Details auf einem prozentualen Qualitätsniveau zu verwerfen. Der Regler wird aktiv, sobald Sie auf WebP oder JPG wechseln.',
      },
      {
        question: 'Was passiert mit transparenten Bereichen beim Konvertieren von PNG oder WebP nach JPG?',
        answer:
          'Da JPG keinen Alpha-Transparenzkanal unterstützt, müssen transparente Pixel auf einen festen Hintergrund gelegt werden. Nutzen Sie die Farbauswahl „Farbe für Transparenzfüllung“ (standardmäßig Weiß), um transparente Kanten sauber auf eine beliebige Farbe zu legen.',
      },
      {
        question: 'Kann ich AVIF-Bilder von modernen Websites in JPG oder PNG konvertieren?',
        answer:
          'Ja, moderne Versionen von Chrome, Edge, Firefox und Safari decodieren AVIF-Dateien nativ in Ihrem Browser. Nach der Decodierung exportiert das Tool sie ohne externen Cloud-Dienst in universelles JPG, PNG oder WebP.',
      },
      {
        question: 'Bleiben SVG-Vektorlogos beim Konvertieren nach PNG oder WebP gut erhalten?',
        answer:
          'Ja, eigenständige SVG-Dateien mit eingebetteten Pfaden, Füllungen und Verläufen werden sauber in ihren intrinsischen Maßen gerastert, wobei transparente Hintergründe erhalten bleiben. Beachten Sie, dass SVGs, die auf externe Webschriften oder externe Bild-URLs angewiesen sind, von der Canvas-Sicherheit des Browsers eingeschränkt werden.',
      },
      {
        question: 'Stellt das Konvertieren eines verlustbehafteten JPG in PNG verlorene Fotodetails wieder her?',
        answer:
          'Nein, das erneute Speichern eines bereits komprimierten JPG als PNG kann Details, die bei der ursprünglichen JPEG-Codierung verworfen wurden, nicht wiederherstellen, und es vergrößert die Dateigröße in der Regel deutlich. Wählen Sie PNG nur, wenn Sie verlustfreie Speicherung vor einer mehrstufigen Bearbeitung benötigen.',
      },
      {
        question: 'Kann ich in einer einzigen Stapelkonvertierung verschiedene Formate mischen?',
        answer:
          'Ja, Sie können HEIC-Fotos, BMP-Screenshots, PNG-Logos und AVIF-Downloads zusammen in dieselbe Warteschlange legen. Jede gültige Datei wird in Ihr gewähltes Zielformat konvertiert und sauber in einem ZIP-Archiv heruntergeladen.',
      },
      {
        question: 'Was passiert, wenn ich ein animiertes GIF in den allgemeinen Konverter hochlade?',
        answer:
          'Canvas zeichnet den ersten Frame des GIFs und konvertiert diesen Frame in eine statische WebP-, JPG- oder PNG-Datei. Wenn Sie ein animiertes GIF verkleinern möchten, während die Bewegung erhalten bleibt, wechseln Sie zu unserem GIF-Komprimierungs-Tool.',
      },
      {
        question: 'Warum hat die WebP-Ausgabe meine PNG-Screenshotgröße so stark reduziert?',
        answer:
          'Anders als verlustfreies PNG kombiniert WebP bei 85 % Qualität moderne prädiktive Komprimierung mit vollständiger Alpha-Transparenzunterstützung. Das verkleinert häufig große UI-Screenshots und Produktausschnitte deutlich, während Lesbarkeit und glatte Kanten erhalten bleiben.',
      },
      {
        question: 'Wie prüfe ich die Vorher-Nachher-Qualität, bevor ich konvertierte Bilder speichere?',
        answer:
          'Klicken Sie auf einer konvertierten Karte auf „Vergleichen“ (oder auf das Vorschaubild), um das interaktive Vergleichsfenster zu öffnen. Sie können die Byte-Größen von Original und konvertierter Datei vergleichen und den geteilten Regler über Kanten und Text ziehen.',
      },
      {
        question: 'Werden meine Fotos oder sensiblen Screenshots jemals über das Internet gesendet?',
        answer:
          'Niemals – die gesamte Decodierung, Farbangleichung und Neucodierung findet strikt im lokalen Speicher Ihres Browsers statt. Nichts wird hochgeladen, auf Servern gespeichert oder mit Dritten geteilt.',
      },
      {
        question: 'Welche Qualitätseinstellung wird für das Konvertieren von Fotos nach WebP oder JPG empfohlen?',
        answer:
          'Die Standardeinstellung von 85 % funktioniert zuverlässig sowohl für WebP-Webassets als auch für universelles JPG-Sharing, ohne spürbare Komprimierungsartefakte. Sie können sie für Portfolioaufnahmen auf 92 %–95 % erhöhen oder für enge Bandbreitenlimits auf 70 %–75 % senken.',
      },
      {
        question: 'Wie werden Ausgabedateinamen nach der Konvertierung erzeugt?',
        answer:
          'Jede konvertierte Datei behält ihren bereinigten Basisdateinamen und tauscht automatisch die Erweiterung gegen .webp, .jpg oder .png aus. Auf jeder Karte sehen Sie vor dem Herunterladen den exakten Ausgabedateinamen und die konvertierte Byte-Größe.',
      },
      {
        question: 'Kann ich BMP-Bitmaps aus älterer Windows-Software nach WebP oder JPG konvertieren?',
        answer:
          'Ja, unkomprimierte .bmp-Dateien werden nativ im Browser decodiert und sofort in kompakte JPG- oder WebP-Dateien konvertiert. Das Entfernen unkomprimierter Bitmap-Header reduziert das Speichergewicht in der Regel drastisch.',
      },
      {
        question: 'Was passiert, wenn eine Datei in meinem Stapel beschädigt oder unlesbar ist?',
        answer:
          'Jedes Bild wird unabhängig verarbeitet, sodass eine einzelne beschädigte oder nicht unterstützte Datei ein eingebettetes Fehlerabzeichen zeigt, ohne den Rest Ihrer Warteschlange anzuhalten. Alle gültigen Bilder werden weiterhin konvertiert und in Ihrem ZIP-Download verpackt.',
      },
      {
        question: 'Entfernt das Konvertieren per HTML5 Canvas versteckte EXIF-Kamerametadaten?',
        answer:
          'Ja, das Zeichnen eines Bildes auf Canvas und das Codieren eines frischen JPG, PNG oder WebP erzeugt eine saubere Bitmap ohne EXIF-GPS-Tags oder Kamera-Serienmetadaten. Das schützt Ihre Privatsphäre, wenn Sie konvertierte Dateien online teilen.',
      },
      {
        question: 'Kann ich Bilder konvertieren, die direkt aus meiner Zwischenablage eingefügt wurden?',
        answer:
          'Ja, kopieren Sie ein Bild oder erstellen Sie einen Screenshot und drücken Sie Strg+V an einer beliebigen Stelle der Seite, um es direkt zur Konverter-Warteschlange hinzuzufügen. Es wird sofort in Ihr aktives Zielformat codiert.',
      },
      {
        question: 'Gibt es ein Tageslimit oder eine Dateianzahlbegrenzung bei Stapelkonvertierungen?',
        answer:
          'Nein, es gibt keine Konten, Wasserzeichen oder täglichen Konvertierungskontingente. Sie sind nur durch die Prüfung von 20 MB pro Datei und den verfügbaren Browser-Arbeitsspeicher Ihres Geräts begrenzt.',
      },
      {
        question: 'Wann sollte ich „Alle herunterladen (ZIP)“ statt einzelnem „Herunterladen“ wählen?',
        answer:
          'Nutzen Sie die Schaltfläche „Herunterladen“ auf jeder Karte, wenn Sie ein einzelnes konvertiertes Foto schnell speichern möchten. Sobald zwei oder mehr Bilder fertig konvertiert sind, klicken Sie in der Stapel-Zusammenfassungsleiste auf „Alle herunterladen (ZIP)“, um sie in converted_images_compressmypic.zip zu bündeln.',
      },
    ],
    relatedSlugs: ['/', '/image-resizer', '/image-to-pdf', '/favicon-generator'],
  },
  {
    slug: '/rotate-flip-image',
    name: 'Bild drehen & spiegeln',
    shortDescription: 'Bilder um 90°, 180° oder benutzerdefinierte Winkel drehen und horizontal oder vertikal spiegeln.',
    category: 'crop-edit',
    seoTitle: 'Bild online drehen – kostenlos, 90° drehen & spiegeln',
    seoDescription:
      'Bilder online drehen – um 90°, 180° oder einen beliebigen Winkel, horizontal oder vertikal spiegeln. Stapel im Browser verarbeiten, ZIP-Export inklusive.',
    h1: 'Bild online drehen & spiegeln',
    subtitle:
      'Korrigieren Sie seitliche Kameraaufnahmen, spiegeln Sie verkehrte Selfies und begradigen Sie schiefe Horizonte, indem Sie Bilder direkt in Ihrem Browser drehen. Ideal für Fotografen, Studierende, die Dokumente scannen, und Content-Ersteller: Alles wird lokal in voller Auflösung transformiert – mit Stapel-Export als ZIP.',
    howToSteps: [
      {
        title: 'Ein oder mehrere Bilder hochladen',
        description:
          'Ziehen Sie JPG-, PNG-, WebP-, HEIC-, GIF-, BMP- oder SVG-Dateien mit bis zu 20 MB pro Datei in den Ablegebereich oder fügen Sie sie direkt mit Strg+V ein.',
      },
      {
        title: 'Schnelle Drehungen um 90° und 180° nutzen',
        description:
          'Klicken Sie unter „Schnell drehen & spiegeln“ auf „90° nach links drehen“, „90° nach rechts drehen“ oder „180°“, um jedes Bild der Warteschlange sofort zu drehen.',
      },
      {
        title: 'Horizontal oder vertikal spiegeln',
        description:
          'Aktivieren Sie „Horizontal spiegeln“, um von links nach rechts zu spiegeln, oder „Vertikal spiegeln“, um von oben nach unten zu wenden – kombinierbar mit jedem Drehwinkel.',
      },
      {
        title: 'Benutzerdefinierte Winkel fein einstellen (−180° bis +180°)',
        description:
          'Ziehen Sie den Schieberegler „Drehwinkel“, um schiefe Aufnahmen gradgenau zu begradigen, und klicken Sie dann auf „Winkel anwenden“ (oder jederzeit auf „Auf 0° zurücksetzen“).',
      },
      {
        title: 'Ausgabeformat wählen',
        description:
          'Wählen Sie „Original“, JPG, PNG oder WebP passend zu Ihrem Ziel-Workflow; Änderungen werden sofort auf alle Ihre Bilder angewendet.',
      },
      {
        title: 'Visuell vergleichen und herunterladen',
        description:
          'Klicken Sie auf einer Karte auf „Vergleichen“, um die Ausrichtung vorher und nachher zu prüfen, und dann auf „Herunterladen“ oder bei Stapeln auf „Alle herunterladen (ZIP)“.',
      },
    ],
    features: [
      {
        title: 'Schnelle 90°-Drehung & benutzerdefinierter Winkel',
        description:
          'Drehen Sie sauber in 90°-Schritten oder stellen Sie einen beliebigen exakten Gradwinkel ein – mit automatischer Berechnung der Canvas-Grenzen, damit Ecken nie abgeschnitten werden.',
      },
      {
        title: 'Sofortiges Spiegeln & Wenden',
        description:
          'Spiegeln Sie Bilder horizontal (gespiegeltes Selfie) oder vertikal (umgedrehte Reflexion) mit einem einzigen Klick.',
      },
      {
        title: 'Stapeltransformation',
        description:
          'Wenden Sie dieselbe Drehung oder Spiegelung gleichzeitig auf mehrere hochgeladene Fotos an und exportieren Sie alle als ZIP.',
      },
      {
        title: 'Ausgabe mit minimalem Verlust',
        description:
          'Wählen Sie das Format „Original“, PNG für verlustfreie Erhaltung oder WebP/JPG mit einstellbarer Qualität.',
      },
    ],
    faqs: [
      {
        question: 'Schneidet das Drehen eines Fotos in einem benutzerdefinierten Winkel wie 15° die Ecken ab?',
        answer:
          'Nein, das Tool berechnet die erweiterte trigonometrische Begrenzungsbreite und -höhe bei Winkeln ungleich 90° automatisch. Dadurch wird das Canvas gerade so weit vergrößert, dass jedes Pixel Ihrer Originalecken im Rahmen bleibt.',
      },
      {
        question: 'Was füllt die dreieckigen Ecken aus, die ein benutzerdefinierter Neigungswinkel erzeugt?',
        answer:
          'Wenn Sie bei einem PNG/WebP das Format „Original“ behalten oder PNG/WebP als Ausgabe wählen, bleiben diese zusätzlichen äußeren Ecken vollständig transparent. Wenn Ihre Ausgabe als JPG erfolgt, das kein Alpha unterstützt, werden die Ecken mit sauberem, solidem Weiß gefüllt.',
      },
      {
        question: 'Kann ich gleichzeitig um 90° drehen und horizontal spiegeln?',
        answer:
          'Ja, „Horizontal spiegeln“ und „Vertikal spiegeln“ wirken als unabhängige Schalter neben jedem Drehwinkel. Jedes Ergebniskarten-Abzeichen zeigt Ihren exakten kombinierten Zustand an, zum Beispiel „Um 90° gedreht · H gespiegelt“.',
      },
      {
        question: 'Warum vertauschen Drehungen um 90° oder 270° Pixelbreite und -höhe?',
        answer:
          'Das Drehen eines Querformatbildes von 1920×1080 um 90° rotiert seine Achsen, sodass es zu einem Hochformatbild von 1080×1920 wird. Das Beibehalten der exakt vertauschten Grenzen verhindert, dass eine Seite Ihres Fotos gestreckt oder beschnitten wird.',
      },
      {
        question: 'Wie korrigiere ich ein verkehrtes Selfie mit gespiegeltem Text?',
        answer:
          'Laden Sie das Foto hoch, klicken Sie auf „Auf 0° zurücksetzen“, wenn Sie keine 90°-Drehung möchten (das Tool startet beim Laden mit 90°), und aktivieren Sie „Horizontal spiegeln“. Text auf T-Shirts oder Schildern kehrt sofort in die normale Leserichtung zurück.',
      },
      {
        question: 'Warum drehen sich Bilder direkt nach dem Hochladen automatisch um 90°?',
        answer:
          'Der Standardzustand von „Schnell drehen & spiegeln“ startet bei 90°, damit gängige seitliche Fotos beim Ablegen aufrecht stehen. Sie können mit „90° nach links drehen“, „180°“, dem Winkelschieberegler anpassen oder auf „Auf 0° zurücksetzen“ klicken, wann immer Sie nur spiegeln möchten.',
      },
      {
        question: 'Welche Bildformate kann ich hier drehen und spiegeln?',
        answer:
          'Laden Sie JPG-, PNG-, WebP-, HEIC/HEIF-, GIF-, BMP- oder SVG-Dateien mit bis zu 20 MB pro Datei hoch. Die Exportoptionen umfassen „Original“, JPG, PNG und WebP über lokales HTML5-Canvas-Rendering.',
      },
      {
        question: 'Kann ich einen Ordner mit seitlichen Handyfotos zusammen als Stapel drehen?',
        answer:
          'Ja, legen Sie so viele Fotos ab, wie Ihr Browser sauber verarbeitet, klicken Sie einmal auf die gewünschten Dreh- oder Spiegelschaltflächen, und jedes Element wird gemeinsam aktualisiert. Wenn mehrere Dateien fertig sind, exportiert „Alle herunterladen (ZIP)“ die Datei rotated_images_compressmypic.zip.',
      },
      {
        question: 'Bleibt beim Drehen eines transparenten PNG der transparente Hintergrund erhalten?',
        answer:
          'Ja, transparente Bereiche bleiben transparent, wenn die Ausgabe „Original“ (von PNG/WebP), PNG oder WebP ausgewählt ist. Das funktioniert sowohl bei sauberen 90°-Drehungen als auch bei der Begradigung mit beliebigem Neigungswinkel.',
      },
      {
        question: 'Wie mache ich mehrere Drehungen rückgängig, ohne die Seite neu zu laden?',
        answer:
          'Klicken Sie jederzeit direkt über dem Schieberegler „Drehwinkel“ auf „Auf 0° zurücksetzen“. Das setzt die Drehung sofort auf 0° zurück und schaltet beide Spiegelungen – horizontal und vertikal – in der gesamten Warteschlange aus.',
      },
      {
        question: 'Warum kann sich die Dateigröße nach dem Drehen eines JPEG leicht ändern?',
        answer:
          'Das Drehen von Pixeln innerhalb von HTML5 Canvas codiert das JPEG mit 90 % Qualität neu, statt DCT-Blöcke verlustfrei zu verändern. Die Wahl der PNG-Ausgabe bewahrt Pixel verlustfrei, wenn Sie keine Komprimierungsartefakte möchten.',
      },
      {
        question: 'Gibt es eine einfache Möglichkeit, das Vorher und Nachher der Begradigung zu prüfen?',
        answer:
          'Klicken Sie auf einer Karte auf „Vergleichen“ (oder auf das Vorschaubild), um das Vergleichsfenster „Drehen & Spiegeln“ zu öffnen. Sie können ausgerichtete Kanten mit dem interaktiven Vorher-Nachher-Schieberegler prüfen, bevor Sie speichern.',
      },
      {
        question: 'Berücksichtigt dieses Tool die Ausrichtung von iPhone-Fotos korrekt?',
        answer:
          'Ja, moderne Browser und unser HEIC-Lader normalisieren die EXIF-Ausrichtung beim Decodieren in Canvas, bevor Ihr gewählter Winkel angewendet wird. Was Sie auf dem Karten-Vorschaubild sehen, entspricht den Pixeln in Ihrer heruntergeladenen Datei.',
      },
      {
        question: 'Kann ich einen schief gescannten Text in kleinen Schritten von 1° begradigen?',
        answer:
          'Ja, ziehen Sie den Schieberegler „Drehwinkel“ zwischen −180° und +180° (Schritt 1°) und lassen Sie los, um das begradigte Dokument in der Vorschau zu sehen. Klicken Sie auf „Winkel anwenden“, wenn Sie ihn mit den Pfeiltasten einstellen, um ihn auf alle Dateien der Warteschlange anzuwenden.',
      },
      {
        question: 'Werden Dokumente oder persönliche Fotos von mir auf einen Server hochgeladen?',
        answer:
          'Nein, Drehen und Spiegeln laufen zu 100 % lokal in Ihrem Webbrowser über Canvas-2D-Transformationen. Ihre Bilder verlassen nie Ihren Computer oder Ihr Smartphone.',
      },
      {
        question: 'Was passiert, wenn ich ein animiertes GIF drehe?',
        answer:
          'Das Drehen eines GIFs extrahiert und transformiert den ersten Frame in ein statisches Bild. Animierte Drehung mit mehreren Frames wird in diesem Tool nicht direkt unterstützt.',
      },
      {
        question: 'Kann ich Screenshots direkt aus der Zwischenablage spiegeln oder drehen?',
        answer:
          'Ja, drücken Sie Strg+V (oder Cmd+V) an einer beliebigen Stelle der Seite, nachdem Sie ein Bild oder einen Screenshot kopiert haben. Es gelangt in die Stapelwarteschlange und wendet Ihre aktiven Dreh- und Spiegeleinstellungen sofort an.',
      },
      {
        question: 'Gibt es eine Begrenzung bei Dateigröße oder Anzahl der Drehungen?',
        answer:
          'Einzelne Uploads können bis zu 20 MB pro Datei groß sein, damit Ihr Browser reaktionsschnell bleibt. Innerhalb dieser Grenze können Sie so viele Fotos drehen, spiegeln, zurücksetzen und erneut exportieren, wie Sie benötigen – ohne Konto, Tageslimit oder Wasserzeichen.',
      },
      {
        question: 'Kann ich beim Drehen eines Stapels von PNGs das Ausgabeformat auf WebP umstellen?',
        answer:
          'Ja, ein Klick auf WebP unter „Ausgabeformat“ transformiert Ihren Stapel sofort neu und exportiert ihn als leichte gedrehte WebP-Bilder. Sie können die Formate frei hin und her wechseln, ohne erneut hochzuladen.',
      },
      {
        question: 'Funktioniert „Drehen & Spiegeln“ gut auf Smartphones und Tablets mit Touchscreen?',
        answer:
          'Ja, alle Drehschaltflächen, Spiegelschalter und der berührungsfähige Winkelschieberegler funktionieren in mobilem Safari und Android Chrome. Sie können einzelne Fotos auch direkt in die Kamerarolle oder den Download-Ordner Ihres Geräts herunterladen.',
      },
    ],
    relatedSlugs: ['/image-resizer', '/', '/image-converter', '/remove-image-metadata'],
  },
  {
    slug: '/image-to-pdf',
    name: 'Bild zu PDF',
    shortDescription: 'JPG-, PNG-, WebP- und HEIC-Bilder zu einem mehrseitigen PDF zusammenführen.',
    category: 'convert',
    seoTitle: 'Bild zu PDF kostenlos – Fotos zu PDF zusammenführen',
    seoDescription:
      'Fotos kostenlos in ein PDF verwandeln – Seiten neu ordnen, A4 oder Letter wählen, Ränder einstellen. Ihr Dokument entsteht lokal im Browser, ohne Upload.',
    h1: 'Bild-zu-PDF-Konverter',
    subtitle:
      'Ideal für Studierende, Freiberufler, Buchhalter und alle, die Ausweise oder Belege einreichen: Dieser private Bild-zu-PDF-Konverter führt mehrere Fotos zu einem einzigen, gestochen scharfen, mehrseitigen PDF zusammen. Ordnen Sie Seiten frei neu, wählen Sie A4, US Letter oder „An Bildgröße anpassen“, passen Sie Ränder und Qualität an und erstellen Sie Ihr Dokument lokal – ohne einen einzigen Server-Upload.',
    howToSteps: [
      {
        title: 'Bilder ablegen, die ins PDF sollen',
        description:
          'Laden Sie eine oder mehrere JPG-, PNG-, WebP-, HEIC-, GIF-, BMP- oder SVG-Dateien mit bis zu 20 MB pro Datei hoch (oder fügen Sie sie mit Strg+V ein). Jedes Bild wird eine Seite.',
      },
      {
        title: 'Seitenreihenfolge festlegen',
        description:
          'Prüfen Sie die Liste „Seitenreihenfolge“ unter den Steuerelementen und nutzen Sie die Schaltflächen „Nach oben“, „Nach unten“ oder „Entfernen“, um Belege, Folien oder Scans exakt zu ordnen.',
      },
      {
        title: 'Seitengröße und Ausrichtung wählen',
        description:
          'Wählen Sie A4 (210 × 297 mm), US Letter (8,5 × 11 Zoll) oder „An Bildgröße anpassen“ und die Ausrichtung „Automatisch (wie Foto)“, „Hochformat“ oder „Querformat“.',
      },
      {
        title: 'Ränder und Bildposition anpassen',
        description:
          'Wählen Sie „Kein Rand (randlos)“, „Kleiner Rand“ oder „Mittlerer Rand“ und legen Sie „Einpassen (vollständiges Bild)“ oder „Ausfüllen (Seite füllen)“ fest.',
      },
      {
        title: 'Dateiname und PDF-Bildqualität festlegen',
        description:
          'Passen Sie den PDF-Dateinamen an (endet auf .pdf) und schieben Sie die PDF-Bildqualität zwischen 40 % und 98 %, um Schärfe gegen die Gesamtgröße des Dokuments abzuwägen.',
      },
      {
        title: 'PDF erstellen und herunterladen',
        description:
          'Klicken Sie auf „PDF erstellen & herunterladen“, um die Datei lokal zu erzeugen; ein grünes Bestätigungsbanner lässt Sie außerdem auf „PDF erneut herunterladen“ klicken.',
      },
    ],
    features: [
      {
        title: 'Mehrseitige Anordnung',
        description:
          'Ordnen Sie hochgeladene Bilder vor dem Erzeugen Ihres PDFs einfach neu, damit Belege, Scans und Folien in genau der Reihenfolge erscheinen, die Sie möchten.',
      },
      {
        title: 'Flexible Seitengrößen & automatische Ausrichtung',
        description:
          'Exportieren Sie auf Standard-A4 oder US Letter mit automatischem Hoch-/Querformat pro Seite oder wählen Sie „An Bildgröße anpassen“, um das exakte Seitenverhältnis jedes Fotos zu übernehmen.',
      },
      {
        title: 'Einstellbare Ränder & PDF-Qualität',
        description:
          'Wählen Sie die Ränder „Keine“, „Klein“ oder „Mittel“ und steuern Sie die Qualität eingebetteter Bilder, damit Ihr PDF für E-Mails leicht bleibt.',
      },
      {
        title: 'Keine Server-Uploads',
        description:
          'Sensible Ausweise, Verträge und gescannte Dokumente berühren nie einen externen Server – die PDF-Binärdatei wird lokal im Browser-Speicher erstellt.',
      },
    ],
    faqs: [
      {
        question: 'Ist dieser Bild-zu-PDF-Konverter sicher für Reisepässe, Ausweise und Steuerbelege?',
        answer:
          'Ja, Ihre Dokumente werden nie auf einen externen Server oder in eine Cloud-Warteschlange hochgeladen. Unser JavaScript-PDF-Builder codiert jede Seite im lokalen RAM Ihres Browsers und schreibt das fertige .pdf direkt auf Ihr Gerät.',
      },
      {
        question: 'Welche Seitengrößen werden unterstützt?',
        answer:
          'Sie können jede Seite auf A4 (210 × 297 mm) oder US Letter (8,5 × 11 Zoll) standardisieren – für einheitliches Drucken und Ablegen. Alternativ wählen Sie „An Bildgröße anpassen“, damit jede PDF-Seite den nativen Maßen und dem Seitenverhältnis ihres Fotos entspricht.',
      },
      {
        question: 'Wie funktioniert die automatische Ausrichtung bei gemischten Quer- und Hochformatfotos?',
        answer:
          'Wenn die Ausrichtung auf „Automatisch (wie Foto)“ steht, erhalten Querformatbilder automatisch Querformatseiten, während Hochformatbilder Hochformatseiten erhalten. Sie können jede Seite auf „Hochformat“ oder „Querformat“ festlegen, wann immer ein einheitliches Drucklayout nötig ist.',
      },
      {
        question: 'Was ist der Unterschied zwischen „Einpassen“ und „Ausfüllen“?',
        answer:
          '„Einpassen (vollständiges Bild)“ skaliert jedes Foto proportional, sodass das gesamte Bild innerhalb der gewählten Ränder passt, ohne dass etwas abgeschnitten wird. „Ausfüllen (Seite füllen)“ vergrößert das Foto, um den gesamten druckbaren Bereich randlos zu füllen, und schneidet Überstand ab.',
      },
      {
        question: 'Warum ist das Ausrichtungsmenü deaktiviert, wenn „An Bildgröße anpassen“ gewählt ist?',
        answer:
          '„An Bildgröße anpassen“ dimensioniert jede einzelne PDF-Seite dynamisch auf das exakte Seitenverhältnis ihres Fotos, sodass eine Hoch-/Querformat-Vorgabe nicht greift. Wechseln Sie die Seitengröße zu A4 oder US Letter, wenn Sie die Ausrichtung manuell steuern möchten.',
      },
      {
        question: 'Kann ich Seiten neu ordnen, nachdem ich mehrere Dateien auf einmal hochgeladen habe?',
        answer:
          'Ja, scrollen Sie zum Abschnitt „Seitenreihenfolge“, in dem jede Seite ein nummeriertes Abzeichen, ein Vorschaubild, Pixelmaße und Dateigröße zeigt. Nutzen Sie die Pfeilschaltflächen „Nach oben“ und „Nach unten“ in einer Zeile, um Seiten neu anzuordnen, bevor Sie auf „PDF erstellen & herunterladen“ klicken.',
      },
      {
        question: 'Wie wirkt sich der Regler für die PDF-Bildqualität auf die Dateigröße aus?',
        answer:
          'Wenn Sie die PDF-Bildqualität auf 60 %–75 % senken, werden die eingebetteten JPEG-Datenströme im PDF komprimiert, sodass mehrseitige Scans für strenge E-Mail- oder Portal-Uploadgrenzen kompakt bleiben. Ein Wert von 90 %–98 % erhält schärferen kleinen Text auf dichten Dokumenten.',
      },
      {
        question: 'Welche Bilddateiformate kann ich zu einem PDF zusammenführen?',
        answer:
          'Sie können JPG-, PNG-, WebP-, iPhone-HEIC/HEIF-, GIF-, BMP- und SVG-Bilder (bis zu 20 MB pro Datei) in einem einzigen PDF-Dokument mischen. Sie werden lokal im Browser decodiert und sauber auf PDF-Seiten normalisiert.',
      },
      {
        question: 'Was passiert mit transparenten PNG- oder WebP-Bildern innerhalb eines PDFs?',
        answer:
          'Da Standard-PDF-Seiten eine weiße Papierfläche haben, werden transparente Hintergründe vor dem Einbetten sauber auf solides Weiß gelegt. Das verhindert unerwartete dunkle Artefakte hinter Logos oder gescannten Unterschriften.',
      },
      {
        question: 'Kann ich den Ausgabedateinamen vor dem Speichern anpassen?',
        answer:
          'Ja, geben Sie einen beliebigen Dokumenttitel in das Feld „PDF-Dateiname“ ein (Standard ist compressmypic-document.pdf). Wenn Sie das Suffix .pdf weglassen, fügt der Exporteur es beim Herunterladen automatisch hinzu.',
      },
      {
        question: 'Wie viele Seiten kann ich zu einem PDF-Dokument zusammenführen?',
        answer:
          'Es gibt keine künstliche Seitenbegrenzung – Sie können Dutzende Fotos oder Belege zu einem einzigen mehrseitigen PDF kombinieren. Die praktische Kapazität hängt nur vom verfügbaren Browser-Speicher Ihres Geräts und der Pixelauflösung jedes Bildes ab.',
      },
      {
        question: 'Wie unterscheiden sich „Kein Rand“, „Kleiner Rand“ und „Mittlerer Rand“?',
        answer:
          '„Kein Rand (randlos)“ dehnt die Platzierung bis zu den Papierkanten aus – ideal für randlose Kunstwerke oder Exporte mit „An Bildgröße anpassen“. „Kleiner Rand“ und „Mittlerer Rand“ fügen saubere weiße Ränder um jede Seite hinzu – für Standarddruck und Lesbarkeit.',
      },
      {
        question: 'Kann ich weitere Fotos hinzufügen, nachdem ich die Liste „Seitenreihenfolge“ bereits geprüft habe?',
        answer:
          'Ja, ziehen Sie einfach zusätzliche Dateien in das Upload-Feld oben oder wählen Sie sie aus – sie werden ans Ende Ihrer Liste „Seitenreihenfolge“ angehängt. Sie können dann einzelne Seiten neu ordnen oder löschen, bevor Sie das aktualisierte PDF erzeugen.',
      },
      {
        question: 'Fügt das Tool ein Fußzeilenlogo, einen Seitenstempel oder ein Wasserzeichen in mein PDF ein?',
        answer:
          'Nein, CompressMyPic erzeugt vollständig saubere PDF-Seiten, die nur Ihre Bilder innerhalb der gewählten Ränder enthalten. Es werden niemals Branding, Kopfzeilen oder Wasserzeichen hinzugefügt.',
      },
      {
        question: 'Warum zeigt eine Fortschrittsmeldung „Seite X von Y wird codiert“?',
        answer:
          'Mehrseitige PDFs codieren jedes Bild nacheinander im Browser-Speicher, um zu vermeiden, dass Ihr Browser-Tab einfriert oder der RAM stark ansteigt. Sobald die letzte Seite codiert ist, zeigt die grüne Bestätigungsleiste die Gesamtseitenzahl und die exakte PDF-Byte-Größe an.',
      },
      {
        question: 'Was, wenn ich den automatischen Browser-Download-Dialog verliere oder schließe?',
        answer:
          'Lassen Sie den Tab offen – die grüne Bestätigungskarte bleibt mit einer Schaltfläche „PDF erneut herunterladen“ sichtbar. Ein Klick darauf löst das Speichern des exakt erzeugten Blobs sofort erneut aus, ohne Neucodierung.',
      },
      {
        question: 'Kann ich Screenshots direkt in den PDF-Builder einfügen?',
        answer:
          'Ja, drücken Sie Strg+V (oder Cmd+V auf dem Mac), um einen Screenshot aus der Zwischenablage direkt in Ihre Warteschlange „Seitenreihenfolge“ einzufügen. So bündeln Sie schnell mehrere Bug-Screenshots oder Chat-Belege in einem PDF.',
      },
      {
        question: 'Lädt das Erzeugen eines PDFs Metadaten wie EXIF-GPS-Tags hoch?',
        answer:
          'Nein, jedes Seitenbild wird decodiert und auf HTML5 Canvas gezeichnet, bevor es in den PDF-Bytestrom eingebettet wird. Dadurch werden ursprüngliche Kamera-EXIF-Header und GPS-Koordinaten während der Konvertierung automatisch ausgeschlossen.',
      },
      {
        question: 'Kann ich iPhone-HEIC-Kamerafotos direkt zu PDF konvertieren, ohne sie zuerst in JPG umzuwandeln?',
        answer:
          'Ja, ziehen Sie .heic- oder .heif-Fotos direkt in den Upload-Bereich, und der Browser decodiert sie lokal sofort. Sie erscheinen direkt in Ihrer Liste „Seitenreihenfolge“ und sind bereit, zu A4- oder Letter-PDFs kombiniert zu werden.',
      },
      {
        question: 'Funktioniert das Bild-zu-PDF-Tool auf Smartphones und Chromebooks?',
        answer:
          'Ja, alles läuft in Standard-Browser-JavaScript auf iOS, Android, Windows, macOS und ChromeOS. Sie benötigen kein Adobe Acrobat, keine Browser-Erweiterungen und keine Desktop-PDF-Software.',
      },
    ],
    relatedSlugs: ['/image-converter', '/', '/remove-image-metadata', '/image-resizer'],
  },
  {
    slug: '/image-metadata-viewer',
    name: 'Bild-Metadaten ansehen',
    shortDescription: 'EXIF-Kameraeinstellungen, GPS-Koordinaten und PNG/WebP-Daten prüfen.',
    category: 'privacy',
    seoTitle: 'Bild-Metadaten ansehen – EXIF & GPS kostenlos prüfen',
    seoDescription:
      'Bild-Metadaten privat prüfen – EXIF-Tags, GPS-Koordinaten und Zeitstempel ansehen. Kopieren oder exportieren Sie das komplette JSON, alles lokal im Browser.',
    h1: 'Bild-Metadaten- & EXIF-Anzeige',
    subtitle:
      'Für Fotografen, die Objektiveinstellungen prüfen, Entwickler, die Header debuggen, und alle, die vor dem Posten ihre Privatsphäre kontrollieren: Unser Bild-Metadaten-Viewer im Browser prüft rohe Dateibytes lokal. Decken Sie versteckte EXIF-Tags, GPS-Koordinaten, Zeitstempel und PNG- oder WebP-Blöcke auf – ohne ein einziges Pixel hochzuladen.',
    howToSteps: [
      {
        title: 'Bild ablegen oder auswählen, um es zu prüfen',
        description:
          'Laden Sie ein JPG-, PNG-, WebP-, HEIC-, GIF-, BMP- oder SVG-Bild mit bis zu 20 MB hoch (oder fügen Sie es mit Strg+V ein). Die rohen binären Header werden sofort auf Ihrem Gerät analysiert.',
      },
      {
        title: 'Banner „Zusammenfassung & Datenschutzrisiko“ prüfen',
        description:
          'Sehen Sie das erkannte Containerformat, die Maße, die Dateigröße und ob sensible eingebettete Metadaten-Tag-Typen gefunden wurden.',
      },
      {
        title: 'Etwaige GPS-Standortwarnung prüfen',
        description:
          'Wenn GPSIFD-Tags vorhanden sind, hebt eine Warnbox die exakt decodierten Werte für Breiten- und Längengrad hervor und bietet einen Sprung mit einem Klick zu „Bild-Metadaten entfernen“.',
      },
      {
        title: 'Tabelle „Extrahierte Metadaten“ durchsuchen',
        description:
          'Scrollen Sie durch gruppierte Einträge (Kamera, EXIF, GPS, PNG/WebP-Blöcke, Dateiinfos), wobei bernsteinfarbene „Datenschutz-Tag“-Abzeichen sensible Felder markieren.',
      },
      {
        title: 'JSON kopieren oder exportieren bzw. Tags entfernen',
        description:
          'Klicken Sie auf „JSON kopieren“, um den vollständigen Bericht zu kopieren, auf „JSON exportieren“, um eine .json-Datei zu speichern, oder auf „Metadaten entfernen“, um private Tags sauber zu löschen.',
      },
    ],
    features: [
      {
        title: 'Tiefe EXIF- & GPS-Erkennung',
        description:
          'Analysiert die binären TIFF-Tabellen IFD0, ExifIFD und GPSIFD in JPEG, PNG-eXIf und WebP-EXIF-Blöcken, um versteckte Standort- und Gerätetags aufzudecken.',
      },
      {
        title: 'Hervorhebung von Datenschutzrisiken',
        description:
          'Markiert automatisch sensible Felder wie GPS-Breiten-/Längengrad, Kamera-Seriennummern, Künstlernamen und Aufnahmezeitstempel.',
      },
      {
        title: 'Prüfung von PNG- & WebP-Blöcken',
        description:
          'Liest die PNG-IHDR-Farbtiefe, pHYs-DPI-Werte, tEXt-/iTXt-/tIME-Blöcke und WebP-VP8X-Alpha-/Animations-Flags.',
      },
      {
        title: 'JSON-Bericht exportieren',
        description:
          'Kopieren Sie alle analysierten Metadatenfelder in Ihre Zwischenablage oder laden Sie mit einem Klick einen sauberen JSON-Bericht herunter.',
      },
    ],
    faqs: [
      {
        question: 'Welche Art versteckter Informationen kann dieser Bild-Metadaten-Viewer aufdecken?',
        answer:
          'Je nach Containerformat extrahiert unser Parser TIFF-IFD0-, ExifIFD- und GPSIFD-Felder lokal aus Ihren Bild-Headern. Das deckt Details wie Kameramarke und -modell, Objektivspezifikationen, Verschlusszeit, ISO, Blende, Zeitstempel, Bearbeitungssoftware, Copyright-Hinweise und dezimale GPS-Koordinaten auf.',
      },
      {
        question: 'Prüft er auch technische PNG- und WebP-Header – neben JPEG-EXIF?',
        answer:
          'Ja, über Standard-JPEG-EXIF-Segmente hinaus liest der Viewer technische Blöcke, die in PNG- und WebP-Dateien eingebettet sind. Sie sehen PNG-IHDR-Bittiefe, pHYs-DPI-Dichte, tEXt-/iTXt-/tIME-Textblöcke, PNG-eXIf-Blöcke und WebP-VP8X-Alpha- oder Animations-Flags.',
      },
      {
        question: 'Warum zeigt ein Foto, das ich von WhatsApp oder Instagram heruntergeladen habe, keine EXIF-Tags?',
        answer:
          'Soziale Netzwerke und Messenger-Apps entfernen EXIF-, Kamera- und GPS-Header automatisch, wenn Sie Fotos über ihre Server hochladen. Originaldateien direkt aus Ihrer Handy-Kamerarolle oder DSLR behalten die vollständigen Metadaten.',
      },
      {
        question: 'Wie erkennt das Tool, ob ein Foto meinen Standort verrät?',
        answer:
          'Wenn GPSIFD-Rational-Tags im Bild-Header vorhanden sind, wandelt der Viewer Grad, Minuten und Sekunden automatisch in dezimale Breiten- und Längengrade um. Alle erkannten Koordinaten lösen direkt über der Eigenschaftstabelle ein bernsteinfarbenes Banner „GPS-Standortkoordinaten erkannt“ aus.',
      },
      {
        question: 'Was bedeuten die bernsteinfarbenen „Datenschutz-Tag“-Abzeichen in der Metadatentabelle?',
        answer:
          'Einträge mit einem bernsteinfarbenen „Datenschutz-Tag“-Abzeichen enthalten persönliche oder geräteidentifizierende Informationen. Typische Beispiele sind GPS-Koordinaten, exakte Aufnahmezeitstempel, Fotografen-/Künstlernamen, Kamera-Seriennummern und Gerätemodell-Zeichenketten.',
      },
      {
        question: 'Kann ich sensible Metadaten direkt nach der Prüfung entfernen?',
        answer:
          'Ja, sobald sensible Tags erkannt werden, erscheint in der Zusammenfassungsleiste eine orangefarbene Schaltfläche „Metadaten entfernen“ (zusätzlich ein Link in der GPS-Warnbox). Ein Klick darauf führt Sie direkt zu unserem Tool „Bild-Metadaten entfernen“.',
      },
      {
        question: 'Wie funktioniert der JSON-Export für Entwickler oder Dokumentation?',
        answer:
          'Klicken Sie in der Zusammenfassungsleiste auf „JSON kopieren“, um den strukturierten ImageMetadataReport sofort in Ihre Zwischenablage zu legen. Wenn Sie eine Datei für Audits oder Fehlerberichte benötigen, klicken Sie auf „JSON exportieren“, um <dateiname>_metadata.json lokal herunterzuladen.',
      },
      {
        question: 'Warum werden für manche HEIC- oder GIF-Dateien keine vollständigen binären EXIF-Blöcke extrahiert?',
        answer:
          'Unser tiefer binärer Block-Parser zielt nativ in JavaScript auf JPEG-, PNG- und WebP-Container. Für HEIC-, GIF-, BMP- und SVG-Dateien meldet der Viewer zuverlässig Containerinfos, Dateigröße und Pixelmaße.',
      },
      {
        question: 'Werden private Fotos mit GPS-Standort jemals hochgeladen, wenn ich sie prüfe?',
        answer:
          'Nein, die binäre Prüfung läuft zu 100 % lokal in Ihrem Browser über das Byte-Parsing von Datei-ArrayBuffers. Private, unbereinigte Fotos über das Internet zu senden, würde der Privatsphäre widersprechen – also verlassen null Byte Ihren Computer oder Ihr Handy.',
      },
      {
        question: 'Verändert, komprimiert oder löscht die Metadatenanzeige etwas in meiner Datei?',
        answer:
          'Nein, der Bild-Metadaten-Viewer ist strikt schreibgeschützt. Er liest Header aus dem Browser-Speicher, um Ihnen zu zeigen, was darin steckt, ohne Ihre Originaldatei zu verändern.',
      },
      {
        question: 'Kann ich mehrere Dateien nacheinander prüfen, ohne neu zu laden?',
        answer:
          'Ja, klicken Sie jederzeit auf das rote Papierkorb-Symbol („Leeren“) in der Zusammenfassungsleiste, um zum Upload-Bereich zurückzusetzen. Sie können dann Ihr nächstes Bild ablegen oder einfügen, um einen frischen Metadatenbericht zu erzeugen.',
      },
      {
        question: 'Warum zeigt ein mit Strg+V eingefügter Screenshot in der Regel keine Kamera-Tags?',
        answer:
          'Zwischenablagen von Betriebssystemen übergeben rohe Raster-Bitmaps statt originaler Kamera-JPEG-Dateien. Da Zwischenablagenbilder keine Kamera-Header besitzen, zeigen eingefügte Screenshots Container-Maße und Formatinfos ohne EXIF- oder GPS-Blöcke.',
      },
      {
        question: 'Was ist die maximale Dateigröße, die für die Metadatenprüfung unterstützt wird?',
        answer:
          'Sie können einzelne Bilder mit bis zu 20 MB direkt in Ihrem Browser prüfen. Diese Obergrenze deckt problemlos vollauflösende DSLR-JPEGs, detaillierte PNG-Exporte und unkomprimierte BMP-Dateien ab.',
      },
      {
        question: 'Wie kann ich verifizieren, dass ein anderes Tool wirklich alle EXIF-Tags aus einem Foto entfernt hat?',
        answer:
          'Legen Sie die bereinigte Ausgabedatei erneut in diesen Bild-Metadaten-Viewer, um ihre rohen Bytes zu prüfen. Wenn die Bereinigung erfolgreich war, bestätigt das grüne Statusbanner „Keine EXIF-, GPS- oder versteckten Kamera-Tags erkannt“, und es erscheint keine GPS-Warnung.',
      },
      {
        question: 'Erkennt der Viewer Adobe-XMP- oder PNG-Textkommentare?',
        answer:
          'Ja, PNG-tEXt- und iTXt-Schlüssel-Wert-Textblöcke – etwa Software, Autor, Kommentar oder Erstellungszeit – werden sauber in die Metadatentabelle extrahiert. Eingebettete PNG-eXIf-Blöcke und WebP-EXIF-Blöcke werden daneben decodiert.',
      },
      {
        question: 'Was bedeutet der pHYs-Block bei PNG-Screenshots?',
        answer:
          'Der PNG-pHYs-Block speichert die physische Pixeldichte (DPI / Pixel pro Meter), die für Druck- oder Layoutskalierung gedacht ist. Unser Viewer liest diese Werte und rechnet sie um, sodass Sie sehen, ob ein Bild 72 DPI, 96 DPI oder 300 DPI angibt.',
      },
      {
        question: 'Warum unterscheidet sich die Dateinamenerweiterung manchmal vom Containerformat?',
        answer:
          'Manchmal wird eine PNG- oder WebP-Datei mit einer .jpg-Erweiterung umbenannt (oder umgekehrt). Da unser Viewer echte binäre Magic Bytes prüft, statt sich allein auf den Dateinamen zu verlassen, meldet er das wahre zugrunde liegende Containerformat.',
      },
      {
        question: 'Kann ich Bildmetadaten auf dem iPhone oder in Android-Mobilbrowsern prüfen?',
        answer:
          'Ja, öffnen Sie die Seite in mobilem Safari oder Chrome und wählen Sie ein Foto direkt aus Ihrer Kamerarolle aus. Sie können versteckte GPS-Koordinaten und Kameradetails auf Ihrem Handy prüfen, bevor Sie Bilder online posten.',
      },
      {
        question: 'Warum zeigt mein DSLR-Foto Objektivbrennweite und Verschlusszeit?',
        answer:
          'Digitalkameras zeichnen Belichtungs-Telemetrie im Moment des Auslösens in das binäre ExifIFD-Verzeichnis auf. Felder wie ISO, Blendenzahl, Belichtungszeit, Brennweite, Blitz und Messmodus werden lokal für Sie decodiert.',
      },
      {
        question: 'Gibt es eine Gebühr oder Anmeldung, um unbegrenzt Fotos zu prüfen?',
        answer:
          'Nein, das Prüfen von Bildmetadaten und das Exportieren von JSON-Berichten ist vollständig kostenlos – ohne Konten oder Bezahlschranken. Sie können so viele Fotos bis zu 20 MB prüfen, wie Sie benötigen, ohne Wasserzeichen oder Tageslimits.',
      },
    ],
    relatedSlugs: ['/remove-image-metadata', '/image-dimensions-checker', '/', '/image-converter'],
  },
  {
    slug: '/remove-image-metadata',
    name: 'Bild-Metadaten entfernen',
    shortDescription: 'EXIF, GPS-Standort, Kamerainfos & Kommentare privat entfernen.',
    category: 'privacy',
    seoTitle: 'Bild-Metadaten entfernen – EXIF & GPS kostenlos löschen',
    seoDescription:
      'Bild-Metadaten kostenlos entfernen – EXIF und GPS direkt im Browser löschen. Verlustfreie Entfernung für JPG und PNG, mit ZIP-Export und Verifizierung.',
    h1: 'Bild-Metadaten online entfernen',
    subtitle:
      'Für Marktplatz-Verkäufer, Journalisten, Eltern und datenschutzbewusste Nutzer: Mit diesem Tool entfernen Sie Bildmetadaten dauerhaft, bevor Sie Fotos online teilen. Entfernen Sie EXIF-Kameramodelle, GPS-Koordinaten, Aufnahmezeitstempel und versteckte Textblöcke lokal in Ihrem Browser – per verlustfreier binärer Entfernung oder sauberer Canvas-Neucodierung.',
    howToSteps: [
      {
        title: 'Fotos ablegen, die Sie bereinigen möchten',
        description:
          'Laden Sie ein oder mehrere JPG-, PNG-, WebP- oder HEIC-Bilder (bis zu 20 MB pro Datei) in das Upload-Feld hoch oder fügen Sie sie mit Strg+V ein.',
      },
      {
        title: 'Automatische Entfernung und Prüf-Abzeichen kontrollieren',
        description:
          'Dateien werden sofort nach dem Hochladen bereinigt und automatisch erneut gescannt – mit Anzeige, wie viele Metadaten-Tags entfernt wurden (z. B. → 0 verbleibend).',
      },
      {
        title: 'Bei Bedarf Entfernungsmethode wählen',
        description:
          'Behalten Sie „Verlustfreie binäre Entfernung (JPG/PNG)“ für null Pixel-Neucodierung bei JPEGs und PNGs oder wählen Sie „Vollständige Canvas-Neucodierung“, um Pixel sauber zu glätten.',
      },
      {
        title: 'Optional Ausgabeformat und Qualität festlegen',
        description:
          'Wählen Sie die Ausgabe „Original“, JPG, PNG oder WebP, stellen Sie die Neucodierungsqualität (50 %–100 %) für WebP/HEIC/Canvas-Neucodierung ein und klicken Sie auf „Alle erneut bereinigen“.',
      },
      {
        title: 'Saubere Dateien oder ein Stapel-ZIP herunterladen',
        description:
          'Klicken Sie auf einzelnen verifizierten Karten auf „Sauber herunterladen“ oder auf „Alle sauber herunterladen (ZIP)“, um clean_images_no_metadata.zip zu speichern.',
      },
    ],
    features: [
      {
        title: 'Echte verlustfreie JPEG- & PNG-Entfernung',
        description:
          'Entfernt EXIF, XMP, IPTC, Kommentare und PNG-tEXt-/eXIf-Blöcke auf binärer Ebene – ohne einen einzigen Pixel neu zu codieren.',
      },
      {
        title: 'Verifizierte saubere Ausgabe',
        description:
          'Jede Ausgabedatei wird automatisch erneut von unserem Metadaten-Parser gescannt, um zu verifizieren, dass 0 sensible EXIF-/GPS-Tags verbleiben.',
      },
      {
        title: 'Stapelbereinigung + ZIP-Export',
        description:
          'Bereinigen Sie einen ganzen Stapel Fotos, bevor Sie sie auf Marktplätzen, in Foren oder Inseraten posten, und laden Sie sie zusammen als ZIP herunter.',
      },
      {
        title: '100 % Privatsphäre auf dem Gerät',
        description:
          'Datenschutz-Tools müssen privat sein – Ihre Originalfotos mit GPS-Daten verlassen nie Ihren Browser.',
      },
    ],
    faqs: [
      {
        question: 'Wie funktioniert die verlustfreie binäre Entfernung, ohne die Fotoqualität zu beeinträchtigen?',
        answer:
          'Bei JPEG- und PNG-Dateien, die im Originalformat bleiben, analysiert unser binärer Bereiniger die Containerstruktur direkt. Er entfernt Metadaten-Segmente (JPEG APP1–APP15/COM und PNG eXIf/tEXt/iTXt/tIME), ohne ein einziges Pixel zu decodieren oder neu zu komprimieren.',
      },
      {
        question: 'Was passiert, wenn ich WebP- oder HEIC-Dateien hochlade, um Metadaten zu entfernen?',
        answer:
          'Die verlustfreie binäre Segmententfernung gilt für JPG- und PNG-Eingaben. Für HEIC- oder WebP-Eingaben – oder sobald Sie das Ausgabeformat wechseln oder „Vollständige Canvas-Neucodierung“ wählen – zeichnet das Tool Pixel auf ein frisches HTML5 Canvas, um zu garantieren, dass alle Metadaten-Header entfernt werden.',
      },
      {
        question: 'Woher weiß ich sicher, dass GPS-Standort und EXIF-Tags entfernt wurden?',
        answer:
          'Nach der Bereinigung jedes Bildes führt unser Tool unseren Metadaten-Parser ein zweites Mal auf dem Ausgabe-Blob aus und zeigt ein grünes Abzeichen an (zum Beispiel „X Metadaten-Tags entfernt → 0 verbleibend“ oder „Sauber verifiziert“). Nichts wird geraten.',
      },
      {
        question: 'Welche Metadatentypen werden beim Bereinigen von Fotos gezielt entfernt?',
        answer:
          'Der Bereiniger entfernt EXIF-Kameramarke, -modell, Objektivdetails, Seriennummern, Verschlusseinstellungen und Aufnahmezeitstempel. Er entfernt außerdem GPS-Breiten-/Längen-/Höhentags, Adobe-XMP-Pakete, IPTC-Felder, JPEG-Kommentare und PNG-Text- oder Zeitblöcke.',
      },
      {
        question: 'Wann sollte ich „Vollständige Canvas-Neucodierung“ statt „Verlustfreie binäre Entfernung“ wählen?',
        answer:
          'Wählen Sie „Vollständige Canvas-Neucodierung“, wenn Sie eine brandneue komprimierte Bitmap ohne jegliche vererbten binären Segmente möchten. Sie wird auch automatisch verwendet, sobald Sie das Ausgabeformat ändern oder WebP- und HEIC-Fotos hochladen.',
      },
      {
        question: 'Welche Upload-Formate akzeptiert „Bild-Metadaten entfernen“?',
        answer:
          'Der Upload-Ablegebereich akzeptiert JPG- (JPEG-), PNG-, WebP- und iPhone-HEIC/HEIF-Dateien mit bis zu 20 MB pro Datei. Von dort können Sie saubere Dateien im Format „Original“, JPG, PNG oder WebP exportieren.',
      },
      {
        question: 'Beeinflusst der Regler für die Neucodierungsqualität Dateien mit verlustfreier binärer Entfernung?',
        answer:
          'Nein, die verlustfreie binäre Entfernung überspringt die Pixel-Neucodierung vollständig, sodass Ihre visuellen JPEG-/PNG-Bits unabhängig vom Regler unberührt bleiben. Der Regler für die Neucodierungsqualität (50 %–100 %) gilt nur für WebP-/HEIC-Eingaben oder Exporte mit vollständiger Canvas-Neucodierung.',
      },
      {
        question: 'Kann ich Metadaten von einem ganzen Ordner mit Inseratsfotos auf einmal entfernen?',
        answer:
          'Ja, legen Sie mehrere Fotos zusammen ab und warten Sie einen Moment, bis die automatischen Prüf-Abzeichen auf allen Karten grün werden. Klicken Sie dann auf „Alle sauber herunterladen (ZIP)“, um clean_images_no_metadata.zip herunterzuladen.',
      },
      {
        question: 'Werden meine unbereinigten Fotos mit GPS-Koordinaten irgendwo hochgeladen?',
        answer:
          'Niemals – das Bereinigen sensibler GPS- und Geräte-Header schützt die Privatsphäre nur, wenn es lokal geschieht. Das gesamte binäre Byte-Slicing und der Canvas-Export finden in Ihrem eigenen Browser-Speicher statt.',
      },
      {
        question: 'Warum zeigt ein Foto direkt nach dem Hochladen „Sauber verifiziert (0 EXIF-/GPS-Tags)“?',
        answer:
          'Das bedeutet, dass die Quelldatei bereits null EXIF-, GPS- oder Textmetadaten-Blöcke enthielt (üblich bei Screenshots oder Bildern, die aus Messenger-Apps heruntergeladen wurden). Unser Bereiniger verifiziert die Ausgabe trotzdem sauber.',
      },
      {
        question: 'Reduziert das Entfernen von Metadaten auch die Dateigröße?',
        answer:
          'Ja, Kamerafotos tragen oft eingebettete EXIF-Vorschaubilder, Adobe-XMP-XML-Blöcke sowie Farb- oder Kommentar-Segmente. Das Entfernen dieser Segmente im Modus „Verlustfreie binäre Entfernung“ spart häufig Dutzende Kilobyte – ohne jede Änderung der Bildschärfe.',
      },
      {
        question: 'Behält die verlustfreie binäre Entfernung transparente PNG-Hintergründe?',
        answer:
          'Ja, PNG-Bilddatenblöcke (IDAT) und Alpha-Transparenz bleiben Byte für Byte unberührt. Nur nebensächliche Text-, EXIF- und Zeitstempel-Blöcke werden aus der Datei entfernt.',
      },
      {
        question: 'Was passiert, wenn ein iPhone-Foto per EXIF-Ausrichtungs-Tag gedreht wurde?',
        answer:
          'Das verlustfreie Entfernen des rohen APP1-Blocks löscht das Ausrichtungs-Flag, während die vollständige Canvas-Neucodierung oder HEIC-Decodierung die aufrechte Pixelausrichtung direkt in das exportierte Canvas einbrennt. Wenn ein Hochformat-JPEG nach verlustfreier Entfernung seitlich aussieht, wechseln Sie zu „Vollständige Canvas-Neucodierung“ und klicken Sie auf „Alle erneut bereinigen“.',
      },
      {
        question: 'Kann ich ein sauberes PNG direkt in WebP oder JPG konvertieren, während ich Metadaten entferne?',
        answer:
          'Ja, wählen Sie unter „Ausgabeformat“ JPG oder WebP, stellen Sie die Neucodierungsqualität ein und klicken Sie auf „Alle erneut bereinigen“. Jede Datei wird sauber über Canvas neu codiert, wobei alle Metadaten entfernt und das gewählte Format angewendet werden.',
      },
      {
        question: 'Werden meine Originaldateien auf der Festplatte verändert oder überschrieben?',
        answer:
          'Nein, Webbrowser können Dateien in Ihren lokalen Ordnern nicht direkt überschreiben. Ein Klick auf „Sauber herunterladen“ speichert eine separate bereinigte Kopie, während Ihre Originale unberührt bleiben.',
      },
      {
        question: 'Kann ich die bereinigte Ausgabe in einem unabhängigen Prüfer doppelt kontrollieren?',
        answer:
          'Ja, legen Sie eine heruntergeladene Datei direkt nach dem Speichern in unseren Bild-Metadaten-Viewer. Er analysiert die rohen binären Header unabhängig, sodass Sie bestätigen können, dass keine GPS-Koordinaten oder Kamera-Tags verbleiben.',
      },
      {
        question: 'Funktioniert der Bereiniger auf Mobiltelefonen, bevor ich auf Marktplätzen poste?',
        answer:
          'Ja, öffnen Sie die Seite in iOS Safari oder Android Chrome und wählen Sie Fotos direkt aus Ihrer Handy-Kamerarolle aus. Sobald die grünen verifizierten Abzeichen erscheinen, können Sie saubere Kopien direkt auf Ihr Gerät herunterladen.',
      },
      {
        question: 'Kann ich ein Bild aus der Zwischenablage in „Bild-Metadaten entfernen“ einfügen?',
        answer:
          'Ja, drücken Sie Strg+V (oder Cmd+V auf dem Mac), um ein kopiertes Bild oder einen Screenshot direkt in die Upload-Warteschlange zu legen. Es bereinigt automatisch alle restlichen Blöcke und bereitet den sauberen Download vor.',
      },
      {
        question: 'Warum gibt es die Schaltfläche „Alle erneut bereinigen“, wenn die Bereinigung automatisch startet?',
        answer:
          'Dateien werden sofort nach dem Ablegen mit Ihren aktiven Einstellungen bereinigt. Wenn Sie später die Entfernungsmethode ändern, das Ausgabeformat wechseln oder die Neucodierungsqualität anpassen, wendet ein Klick auf „Alle erneut bereinigen“ diese aktualisierten Optionen auf den gesamten Stapel an.',
      },
      {
        question: 'Gibt es eine Begrenzung der Dateianzahl oder Kosten für das Entfernen von EXIF-Daten?',
        answer:
          'Jede hochgeladene Datei kann bis zu 20 MB groß sein, damit Ihr Browser-Speicher reibungslos bleibt. Über diese Obergrenze pro Datei hinaus können Sie Bildmetadaten von unbegrenzt vielen Fotos entfernen – ohne Wasserzeichen, Anmeldungen oder Gebühren.',
      },
    ],
    relatedSlugs: ['/image-metadata-viewer', '/', '/image-converter', '/image-to-pdf'],
  },
  {
    slug: '/favicon-generator',
    name: 'Favicon-Generator',
    shortDescription: 'favicon.ico, Apple-Touch-, Android- & Manifest-Dateien erzeugen.',
    category: 'create',
    seoTitle: 'Favicon kostenlos erstellen – favicon.ico & App-Icons',
    seoDescription:
      'Favicon kostenlos erstellen – favicon.ico, Apple-Touch- und Android-Icons plus Manifest und HTML-Snippet. Alles lokal im Browser erzeugt, ohne Upload.',
    h1: 'Favicon-Generator online kostenlos',
    subtitle:
      'Für Webentwickler, Startup-Gründer, Blogger und Indie-Maker: Dieser kostenlose Favicon-Generator verwandelt jedes Logo oder jede Grafik in ein einsatzbereites Browser- und Mobil-Icon-Paket. Sehen Sie Ihr Icon in hellen und dunklen Tabs in der Vorschau, stimmen Sie Abstand, Eckenradius und Hintergrundfüllung ab und laden Sie alles lokal herunter – ohne einen einzigen Server-Upload.',
    howToSteps: [
      {
        title: 'Logo oder Icon-Grafik hochladen',
        description:
          'Ziehen Sie ein PNG-, SVG-, JPG-, WebP- oder HEIC-Bild mit bis zu 20 MB (quadratisches PNG oder SVG eignet sich am besten) oder fügen Sie es aus Ihrer Zwischenablage mit Strg+V ein.',
      },
      {
        title: 'Hintergrundfüllung wählen',
        description:
          'Lassen Sie das Kontrollkästchen „Transparent“ aktiviert für saubere freigestellte Icons oder deaktivieren Sie es, um eine feste Hex-Hintergrundfarbe zu wählen.',
      },
      {
        title: 'Abstand und Eckenradius anpassen',
        description:
          'Schieben Sie den „Abstand“ zwischen 0 % und 25 % für Luft um das Logo und ziehen Sie den „Eckenradius“ von 0 % bis 50 % für abgerundete Quadrate oder runde Abzeichen.',
      },
      {
        title: 'Browser-Tab-Vorschauen prüfen',
        description:
          'Prüfen Sie die Live-Vorschauen im Maßstab 16×16, die sowohl im hellen Tab „Meine Website“ als auch in der Vorschau „Dunkler Modus-Tab“ gerendert werden.',
      },
      {
        title: 'Einzeldateien oder das komplette ZIP herunterladen',
        description:
          'Speichern Sie einzelne Icon-Größen von den erzeugten Karten oder klicken Sie auf „Alle herunterladen (ZIP)“, um favicon_package_compressmypic.zip herunterzuladen.',
      },
      {
        title: 'HTML-Head-Snippet kopieren',
        description:
          'Klicken Sie im dunklen Panel „HTML-<head>-Snippet“ auf „HTML kopieren“ und fügen Sie die <link>-Tags direkt in Ihre Website-Vorlage ein.',
      },
    ],
    features: [
      {
        title: 'Echte favicon.ico in mehreren Größen',
        description:
          'Erstellt eine echte binäre .ico-Datei mit sauberen 16×16-, 32×32- und 48×48-Frames – kein umbenanntes PNG.',
      },
      {
        title: 'Vollständiger Web- & Mobil-Icon-Satz',
        description:
          'Erzeugt 16×16-, 32×32-, 48×48-, 180×180- (Apple Touch), 192×192- und 512×512-Icons (Android/PWA) plus site.webmanifest.',
      },
      {
        title: 'Live-Browser-Tab-Vorschau',
        description:
          'Sehen Sie in der Vorschau, wie Ihr Icon im echten Browser-Tab-Maßstab auf hellem und dunklem Hintergrund aussieht, bevor Sie es herunterladen.',
      },
      {
        title: 'Einsetzbereites HTML-Snippet',
        description:
          'Kopieren Sie die sauberen HTML-<link>-Tags mit einem Klick direkt in Ihren <head>.',
      },
    ],
    faqs: [
      {
        question: 'Welche genauen Icon-Größen und Dateien sind im Favicon-ZIP enthalten?',
        answer:
          'Der ZIP-Download bündelt eine favicon.ico mit mehreren Frames (16×16, 32×32 und 48×48), separate Dateien favicon-16x16.png, favicon-32x32.png und favicon-48x48.png, apple-touch-icon.png (180×180), android-chrome-192x192.png und android-chrome-512x512.png. Außerdem wird eine einsatzbereite site.webmanifest-JSON-Datei erzeugt.',
      },
      {
        question: 'Ist favicon.ico eine echte ICO-Binärdatei mit mehreren Frames oder ein umbenanntes PNG?',
        answer:
          'Unser Favicon-Generator schreibt einen echten Windows-ICONDIR-Binärcontainer mit separaten 32-Bit-RGBA-PNG-Verzeichniseinträgen für 16×16-, 32×32- und 48×48-Frames. Ältere Desktop-Browser und Windows-Verknüpfungen wählen automatisch den schärfsten passenden Frame – ohne Rendering-Artefakte.',
      },
      {
        question: 'Welche Quellmaße und welches Format eignen sich am besten für scharfe Browser-Tab-Icons?',
        answer:
          'Beginnen Sie mit einem sauberen quadratischen PNG oder eigenständigen SVG mit 512×512 Pixeln oder mehr, damit das Herunterskalieren sowohl bei 16×16 als auch bei 512×512 scharfe Kanten erzeugt. Winzige Quellen mit niedriger Auflösung, die auf 512×512-PWA-Splash-Icons hochskaliert werden, können weich wirken.',
      },
      {
        question: 'Was passiert, wenn ich ein rechteckiges Logo statt eines quadratischen hochlade?',
        answer:
          'Rechteckige Grafiken werden proportional mittig in jedem quadratischen Icon-Canvas platziert, ohne Ihre Markenzeichen zu strecken oder zu stauchen. Leerraum oben/unten oder links/rechts wird entweder mit Transparenz oder mit Ihrer gewählten Hintergrundfarbe gefüllt.',
      },
      {
        question: 'Warum zeigt der Generator Vorschauen für helle und dunkle Browser-Tabs?',
        answer:
          'Dunkle Icons können vor Tabs im Dunkelmodus verschwinden, während weiße Logos auf hellen Browser-Themes verschwinden. Wenn Sie den hellen Tab „Meine Website“ und den „Dunkler Modus-Tab“ nebeneinander sehen, können Sie vor der Bereitstellung Abstand oder eine feste Hintergrundfläche hinzufügen.',
      },
      {
        question: 'Wie wirken Abstand und Eckenradius zusammen bei einem App-Icon?',
        answer:
          'Der Abstand (0 % bis 25 %) verkleinert Ihr Logo leicht nach innen von der Quadratgrenze, damit abgerundete Ecken keine Grafikkanten beschneiden. Ein Eckenradius in Richtung 20 % erzeugt iOS-artige Squircles, während 50 % das gesamte Icon in einen vollen Kreis schneidet.',
      },
      {
        question: 'Sollten Apple-Touch-Icons einen festen Hintergrund statt Transparenz verwenden?',
        answer:
          'iOS Safari legt transparente Bereiche von apple-touch-icon.png oft auf Schwarz, wenn Nutzer eine Website zum Home-Bildschirm hinzufügen. Wenn Ihr Logo dunkle Formen verwendet, deaktivieren Sie „Transparent“ unter „Hintergrundfüllung“ und wählen Sie Weiß oder Ihre Markenfarbe.',
      },
      {
        question: 'Was ist in der erzeugten site.webmanifest-Datei enthalten?',
        answer:
          'Das Manifest-JSON deklariert Pfade zu /android-chrome-192x192.png und /android-chrome-512x512.png, setzt display auf standalone und synchronisiert theme_color und background_color mit Ihrer gewählten Hintergrundfüllung. Sie können es in einem beliebigen Texteditor öffnen, um Ihren Website-Namen anzupassen.',
      },
      {
        question: 'Wohin soll ich die erzeugten Favicon-Dateien auf meiner Website hochladen?',
        answer:
          'Legen Sie favicon.ico, alle erzeugten PNG-Icons und site.webmanifest in das öffentliche Stammverzeichnis Ihrer Website, damit URLs wie /favicon.ico und /apple-touch-icon.png sauber aufgelöst werden. Fügen Sie dann das kopierte HTML-<head>-Snippet in den <head>-Bereich Ihres Haupt-HTML ein.',
      },
      {
        question: 'Kann ich nur favicon.ico oder apple-touch-icon.png ohne das ZIP herunterladen?',
        answer:
          'Ja, jede Icon-Größe erscheint als eigene Vorschaukarte mit exakten Maßen und Byte-Größe sowie einer eigenen Schaltfläche „Herunterladen“. Sie können einzelne Assets einzeln holen oder auf „Alle herunterladen (ZIP)“ klicken für das komplette Paket.',
      },
      {
        question: 'Erzeugt das Hochladen eines SVG-Logos scharfe 16×16-Icons?',
        answer:
          'Ja, eingebettete SVG-Vektoren werden direkt im Browser auf jedes Ziel-Pixelraster von 16×16 bis 512×512 gerastert. Stellen Sie nur sicher, dass Ihr SVG eingebettete Formen und Farben statt extern verlinkter Bilder oder externer Webschriften verwendet.',
      },
      {
        question: 'Kann ich ein iPhone-HEIC-Foto oder eine WebP-Grafik in ein Website-Favicon umwandeln?',
        answer:
          'Ja, der Upload-Ablegebereich akzeptiert PNG-, SVG-, JPG-, WebP-, GIF-, BMP- und iPhone-HEIC/HEIF-Dateien mit bis zu 20 MB. HEIC-Bilder werden lokal in Ihrem Browser decodiert, bevor das Icon-Paket erstellt wird.',
      },
      {
        question: 'Werden Markenlogos oder unveröffentlichte App-Icons an externe Server gesendet?',
        answer:
          'Nein, Canvas-Skalierung, binäres ICO-Packing, Manifest-Erzeugung und ZIP-Archivierung laufen strikt in Ihrem eigenen Browser-Tab. Ihre unveröffentlichten Markenzeichen wandern nie über ein Netzwerk.',
      },
      {
        question: 'Warum erscheint mein altes Favicon in Chrome noch, nachdem ich neue Dateien hochgeladen habe?',
        answer:
          'Browser cachen Favicons tagelang aggressiv – selbst nachdem Sie Dateien auf Ihrem Server ersetzt haben. Ein harter Refresh mit Strg+Umschalt+R (oder das Öffnen eines Inkognito-Fensters) zwingt Ihren Browser, die neue favicon.ico und die PNG-Icons abzurufen.',
      },
      {
        question: 'Aktualisieren Änderungen an Abstand, Eckenradius oder Hintergrundfüllung jede Größe auf einmal?',
        answer:
          'Ja, das Bewegen eines Schiebereglers oder das Umschalten der Hintergrundfüllung erstellt favicon.ico, alle sechs PNG-Icon-Maße, die Hell-/Dunkel-Tab-Vorschauen und site.webmanifest sofort gemeinsam neu. Sie müssen Ihr Logo zwischen Anpassungen nie erneut hochladen.',
      },
      {
        question: 'Funktioniert das HTML-<head>-Snippet mit React, Next.js oder reinem HTML?',
        answer:
          'Ja, die Standard-Tags <link rel="icon">, <link rel="apple-touch-icon"> und <link rel="manifest"> funktionieren auf statischen HTML-Websites, in WordPress-Headern, in Vite-/React-index.html und in Server-Templates. Fügen Sie sie einfach in <head> ein und legen Sie die Dateien an Ihr Web-Stammverzeichnis.',
      },
      {
        question: 'Kann ich aus einem quadratischen Avatar oder Abzeichen ein rundes Favicon erstellen?',
        answer:
          'Ja, lassen Sie „Transparent“ unter „Hintergrundfüllung“ aktiviert und ziehen Sie den Eckenradius ganz auf 50 %. Alle PNG-Icons und die eingebetteten favicon.ico-Frames werden sauber in einen glatten, kantengeglätteten Kreis geschnitten.',
      },
      {
        question: 'Warum sind 192×192 und 512×512 neben favicon.ico erforderlich?',
        answer:
          'Modernes Android Chrome und Installationsaufforderungen für Progressive Web Apps suchen nach 192×192-Startbildschirm-Icons und 512×512-Splash-Icons, die in site.webmanifest deklariert sind. Beide einzubeziehen, sorgt dafür, dass mobile Verknüpfungen neben klassischen Desktop-Browser-Tabs scharf aussehen.',
      },
      {
        question: 'Kann ich eine Logografik direkt aus meiner Zwischenablage in das Favicon-Tool einfügen?',
        answer:
          'Ja, kopieren Sie ein Bild oder einen Screenshot in Ihre Zwischenablage und drücken Sie Strg+V (oder Cmd+V auf dem Mac) auf der Seite. Es gelangt sofort in den Generator und rendert den vollständigen Icon-Satz.',
      },
      {
        question: 'Gibt es ein Wasserzeichen, eine Kontoanforderung oder Kosten für das Erzeugen von Favicon-Paketen?',
        answer:
          'Nein, der Favicon-Generator ist zu 100 % kostenlos für private und kommerzielle Websites – ohne Wasserzeichen, Konten oder tägliche Build-Limits. Nur eine Obergrenze von 20 MB pro Quelldatei gilt, damit der Browser-Speicher schnell bleibt.',
      },
    ],
    relatedSlugs: ['/image-resizer', '/image-converter', '/image-color-picker', '/'],
  },
  {
    slug: '/image-color-picker',
    name: 'Bild-Farbwähler',
    shortDescription: 'Exakte Pixelfarben aus jedem Bild in HEX, RGB, HSL & CMYK auswählen.',
    category: 'developer',
    seoTitle: 'Bild-Farbwähler – HEX-, RGB- & HSL-Codes kostenlos',
    seoDescription:
      'Bild-Farbwähler online – exakte Pixelfarben in HEX, RGB, HSL und CMYK prüfen. Arbeiten Sie mit der Live-Pixel-Lupe und exportieren Sie CSS-Variablen lokal.',
    h1: 'Bild-Farbwähler online kostenlos',
    subtitle:
      'Für Webdesigner, Frontend-Entwickler, Marken-Stylisten und Illustratoren: Unser Bild-Farbwähler im Browser nimmt exakte RGBA-Pixel aus jedem Foto, Logo oder Screenshot auf. Fahren Sie mit der Maus über eine 11×11-vergrößerte Lupe mit Live-HEX-Anzeige, klicken Sie auf Pixel, um Farbfelder zu speichern, und exportieren Sie CSS-Custom-Properties – ohne Ihre Dateien hochzuladen.',
    howToSteps: [
      {
        title: 'Bild hochladen oder Screenshot einfügen',
        description:
          'Ziehen Sie eine JPG-, PNG-, WebP-, HEIC-, SVG-, BMP- oder GIF-Datei mit bis zu 20 MB oder drücken Sie Strg+V, um einen Screenshot direkt aus Ihrer Zwischenablage einzufügen.',
      },
      {
        title: 'Mit der Live-Pixel-Lupe über das Bild fahren',
        description:
          'Bewegen Sie Ihren Cursor über das Bild-Canvas, um exakte (x, y)-Pixelkoordinaten und ein 11×11-vergrößertes Fadenkreuz-Raster zu sehen, das das Farbfeld in Echtzeit aktualisiert.',
      },
      {
        title: 'Auf Pixel klicken, um Farben zu fixieren und Farbfelder zu erstellen',
        description:
          'Klicken Sie auf eine beliebige Stelle des Canvas, um seine Farbe im Pixel-Inspektor zu fixieren und zu „Ausgewählte Farbfelder“ hinzuzufügen (bis zu 24 einzigartige Farben).',
      },
      {
        title: 'HEX-, RGB-, HSL- oder CMYK-Werte kopieren',
        description:
          'Klicken Sie im Pixel-Inspektor neben HEX, RGB, HSL oder CMYK auf das Kopiersymbol – oder klicken Sie auf ein gespeichertes Farbfeld –, um den Code sofort zu kopieren.',
      },
      {
        title: 'Palette als CSS-Variablen exportieren',
        description:
          'Klicken Sie in der Karte „Ausgewählte Farbfelder“ auf „CSS exportieren“, um picked-colors.css mit sauberen :root-Custom-Properties herunterzuladen – bereit für Ihr Stylesheet.',
      },
    ],
    features: [
      {
        title: 'Live-vergrößerte Pixel-Lupe',
        description:
          'Das vergrößerte Fadenkreuz-Raster lässt Sie exakte Pixel sowohl mit Desktop-Maus als auch auf mobilen Touchscreens gezielt ansteuern.',
      },
      {
        title: '4 Farbformate auf einmal',
        description:
          'Zeigt HEX-, RGB-, HSL- und CMYK-Darstellungen gleichzeitig an – für Webentwickler und Grafikdesigner.',
      },
      {
        title: 'Gespeicherte Farbfeld-Historie & Export',
        description:
          'Klicken Sie auf mehrere Bereiche Ihres Bildes, um eine eigene Farbfeldliste zu erstellen und sie als CSS-Custom-Properties oder JSON zu kopieren.',
      },
      {
        title: '100 % lokale Canvas-Abtastung',
        description:
          'Pixelwerte werden lokal per HTML5-Canvas-getImageData gelesen – Ihre Designs und Screenshots bleiben vollständig privat.',
      },
    ],
    faqs: [
      {
        question: 'Nimmt dieser Bild-Farbwähler Farben aus der Datei in voller Auflösung oder aus einer verkleinerten Vorschau?',
        answer:
          'Jedes Hovern und Klicken ordnet Zeigerkoordinaten proportional einem Offscreen-Canvas in voller Auflösung zu, der der wahren naturalWidth × naturalHeight Ihres Bildes entspricht. Auch wenn ein großes 4K-Foto visuell verkleinert wird, um auf Ihren Bildschirm zu passen, liest getImageData das exakte zugrunde liegende Pixel.',
      },
      {
        question: 'Wie hilft die 11×11-vergrößerte Lupe beim Anvisieren dünner Linien oder kleiner Icons?',
        answer:
          'Beim Bewegen über das Canvas wird eine 88×88-vergrößerte Lupe mit Nearest-Neighbour-Skalierung aktualisiert, die ein 11×11-Pixelraster um Ihren Cursor mit einem doppelt umrandeten Fadenkreuz auf dem exakt aktiven Pixel zeigt. Das verhindert, dass versehentlich kantengeglättete Randpixel neben sauberen Kanten abgetastet werden.',
      },
      {
        question: 'Welche Farbcode-Formate werden für jedes aufgenommene Pixel automatisch berechnet?',
        answer:
          'Der Pixel-Inspektor wandelt das abgetastete RGB-Tripel gleichzeitig in HEX in Großbuchstaben (#RRGGBB), CSS-rgb(r, g, b), CSS-hsl(h, s%, l%) und prozentuale CMYK-Werte um. Jede Zeile hat ihre eigene Kopierschaltfläche mit einem Klick.',
      },
      {
        question: 'Wie viele Farben kann ich gleichzeitig in „Ausgewählte Farbfelder“ sammeln?',
        answer:
          'Das Klicken auf verschiedene Teile Ihres Fotos speichert bis zu 24 einzigartige HEX-Farbfelder in chronologischer Reihenfolge (Duplikate werden automatisch übersprungen). Ein Klick auf ein gespeichertes Farbfeld stellt es im Inspektor wieder her und kopiert seinen HEX-Code direkt in Ihre Zwischenablage.',
      },
      {
        question: 'Was lädt die Schaltfläche „CSS exportieren“ herunter?',
        answer:
          'Ein Klick auf „CSS exportieren“ erzeugt ein Stylesheet picked-colors.css mit einem :root-Block, der nummerierte Custom-Properties (--color-1, --color-2 usw.) und Inline-RGB-Kommentare für jede Farbe in „Ausgewählte Farbfelder“ enthält. Wenn Sie noch nicht auf mehrere Pixel geklickt haben, exportiert sie Ihr aktuell ausgewähltes Pixel.',
      },
      {
        question: 'Warum wird bereits beim Laden eines Bildes eine Farbe angezeigt?',
        answer:
          'Beim ersten Laden tastet der Inspektor automatisch das exakte mittlere Pixel Ihres hochgeladenen Bildes ab, sodass Sie sofort Live-HEX-, RGB-, HSL- und CMYK-Werte sehen, bevor Sie Ihre Maus bewegen. Bewegen oder Klicken aktualisiert diese Werte sofort.',
      },
      {
        question: 'Kann ich einen Screenshot direkt mit Strg+V einfügen, um UI-Farben abzutasten?',
        answer:
          'Ja, kopieren Sie einen Webseiten-Ausschnitt, eine App-UI oder ein Design-Mockup in Ihre Zwischenablage und drücken Sie Strg+V (oder Cmd+V auf dem Mac), während der Upload-Bereich geöffnet ist. Er lädt direkt auf das Abtast-Canvas, ohne zuerst eine temporäre Datei zu speichern.',
      },
      {
        question: 'Welche Dateitypen kann ich mit dem Pipetten-Tool prüfen?',
        answer:
          'Sie können JPG-, PNG-, WebP-, iPhone-HEIC/HEIF-, SVG-, BMP- und GIF-Bilder mit bis zu 20 MB pro Datei laden. Vektor-SVGs werden sauber auf Canvas gerastert, sodass Sie exakte gerenderte Füllfarben direkt abtasten können.',
      },
      {
        question: 'Wie genau sind die CMYK-Werte, die im Pixel-Inspektor angezeigt werden?',
        answer:
          'CMYK-Prozentsätze werden mathematisch aus sRGB-Pixelwerten mit Standard-RGB-zu-CMYK-Umrechnungsformeln berechnet. Für kommerziellen Offsetdruck, der strikte ICC-Druckprofile erfordert, behandeln Sie sie als hilfreiche Startnäherungen statt als kalibrierte Druckproofs.',
      },
      {
        question: 'Was passiert, wenn ich einen transparenten Bereich auf einem PNG-Logo abtaste?',
        answer:
          'HTML5 Canvas liest Rot-, Grün- und Blau-Kanäle an dieser Koordinate – vollständig transparente Canvas-Pixel sind standardmäßig 0, 0, 0 (#000000), wenn die RGB-Kanäle leer sind. Tasten Sie direkt über deckenden Strichen oder Formen ab, um Ihre wahren Kunstwerksfarben zu prüfen.',
      },
      {
        question: 'Werden private UI-Mockups oder Kunden-Markenassets auf einen Server hochgeladen?',
        answer:
          'Nein, das Lesen von Pixeln per Canvas-getImageData läuft strikt in Ihrem lokalen Browser-Speicher. Unveröffentlichte Designs, vertrauliche Screenshots und persönliche Fotos verlassen nie Ihren Computer oder Ihr Handy.',
      },
      {
        question: 'Funktioniert der Farbwähler in Chrome, Safari und Firefox ohne Browser-Erweiterungen?',
        answer:
          'Ja, anders als die experimentelle EyeDropper-Browser-API, die nur in Desktop-Chromium funktioniert, läuft unser HTML5-Canvas-Abtaster in Firefox, Safari, Edge und Chrome. Es sind keine Browser-Erweiterungen, speziellen Berechtigungen oder Plugins erforderlich.',
      },
      {
        question: 'Wie wechsle ich zu einem anderen Foto, nachdem ich Farbfelder aufgenommen habe?',
        answer:
          'Klicken Sie jederzeit oben rechts in der Canvas-Kopfzeile auf die Schaltfläche „Neues Bild“. Das löscht das aktive Bild, setzt die Liste „Ausgewählte Farbfelder“ sauber zurück und bringt Sie zum Upload-Bereich zurück.',
      },
      {
        question: 'Kann ich exakte Pixelkoordinaten neben dem Farbwert prüfen?',
        answer:
          'Ja, die Kopfzeile des Pixel-Inspektors zeigt beim Hovern über das Canvas live x- und y-Koordinaten (zum Beispiel x:412, y:198) in Monospace-Schrift an. Das hilft Ihnen, bestimmte Pixel über große Assets hinweg konsistent abzugleichen.',
      },
      {
        question: 'Warum variiert das Klicken auf eine Farbe in einem JPEG-Foto leicht zwischen benachbarten Pixeln?',
        answer:
          'Die JPEG-Komprimierung nutzt Chroma-Subsampling und Block-Transformationen, die leichte Pixel-zu-Pixel-Variationen über flache Oberflächen einführen. Mit der 11×11-Lupe wählen Sie ein sauberes, repräsentatives Pixel abseits komprimierter Kanten.',
      },
      {
        question: 'Kann ich Farben auf einem iPad oder Smartphone-Touchscreen genau antippen?',
        answer:
          'Ja, das Antippen eines beliebigen Bereichs des Canvas auf Mobilgeräten löst den Abtaster an Ihrer Tippposition aus, fixiert das Farbfeld, aktualisiert alle vier Farbformate und fügt den HEX-Code zu „Ausgewählte Farbfelder“ hinzu. Sie können auch jedes gespeicherte Farbfeld antippen, um es zu kopieren.',
      },
      {
        question: 'Ersetzt dieses Tool meine gespeicherten Farbfelder, wenn ich zweimal auf dieselbe Hex-Farbe klicke?',
        answer:
          'Nein, „Ausgewählte Farbfelder“ prüft automatisch auf übereinstimmende HEX-Zeichenketten und ignoriert Duplikate. Das hält Ihre gesammelte Palette ordentlich, selbst wenn Sie dieselbe Hintergrund- oder Markenfarbe mehrfach abtasten.',
      },
      {
        question: 'Warum HSL neben HEX und RGB verwenden, wenn man Websites gestaltet?',
        answer:
          'HSL (Farbton, Sättigung, Helligkeit) erleichtert es CSS-Entwicklern, hellere Hover-Zustände oder dunklere Ränder abzuleiten, indem sie nur den Helligkeitsprozentsatz anpassen, während der Farbton konstant bleibt. HEX und HSL nebeneinander zu haben, spart manuelle Umrechnung.',
      },
      {
        question: 'Was ist die maximale Bilddateigröße, die im Farbwähler erlaubt ist?',
        answer:
          'Einzelne hochgeladene Bilder können bis zu 20 MB groß sein. Diese Obergrenze bewältigt problemlos hochauflösende Kamerafotos, große Figma-PNG-Exporte und ganzseitige Screenshots.',
      },
      {
        question: 'Gibt es Kosten, ein Konto oder eine Begrenzung, wie viele Farben ich abtasten kann?',
        answer:
          'Nein, der Bild-Farbwähler ist vollständig kostenlos – ohne Konten oder Bezahlschranken. Sie können unbegrenzt Bilder hochladen und CSS-Farbpaletten ohne Wasserzeichen exportieren.',
      },
    ],
    relatedSlugs: ['/favicon-generator', '/image-dimensions-checker', '/image-resizer', '/'],
  },
  {
    slug: '/image-dimensions-checker',
    name: 'Bilddimensionen-Prüfer',
    shortDescription: 'Breite, Höhe, Seitenverhältnis, Megapixel und Druckgröße prüfen.',
    category: 'developer',
    seoTitle: 'Bilddimensionen prüfen – Pixelgröße & Seitenverhältnis',
    seoDescription:
      'Prüfen Sie mit diesem kostenlosen Bilddimensionen-Prüfer Breite, Höhe, Seitenverhältnis, Megapixel, Alphakanal und Druckgröße bei 300 DPI direkt im Browser.',
    h1: 'Bilddimensionen-Prüfer & Seitenverhältnis-Tool',
    subtitle:
      'Ideal für E-Commerce-Manager, Mediaeinkäufer, UI-Entwickler und Druckdesigner: Unser Bilddimensionen-Prüfer liest Pixelbreite, Pixelhöhe, Seitenverhältnis, Megapixel und Druckgröße bei 300 DPI in Sekundenschnelle. Legen Sie ganze Stapel von Dateien ab, prüfen Sie Mindestgrößen in Pixeln und exportieren Sie saubere CSV- oder JSON-Berichte – privat auf Ihrem Gerät.',
    howToSteps: [
      {
        title: 'Ein oder mehrere Bilder ablegen oder auswählen',
        description:
          'Laden Sie JPG-, PNG-, WebP-, HEIC-, SVG-, BMP-, GIF- oder AVIF-Dateien mit bis zu 20 MB pro Datei in die Ablagezone hoch oder fügen Sie sie mit Strg+V ein.',
      },
      {
        title: 'Pixeldimensionen und Seitenverhältnisse prüfen',
        description:
          'Sehen Sie sich in der Tabelle die exakte Breite × Höhe (px), Megapixel, Ausrichtung (Querformat, Hochformat, Quadratisch) sowie das gekürzte und das dezimale Seitenverhältnis an.',
      },
      {
        title: 'Dateigröße, Format und Alphakanal prüfen',
        description:
          'Prüfen Sie die Werte in der Spalte „Größe / Format“, um den tatsächlich erkannten Containertyp, die Bytezahl und vorhandene transparente Alphapixel zu sehen.',
      },
      {
        title: 'Geschätzte Druckgröße bei 300 DPI prüfen',
        description:
          'Sehen Sie sich die Spalte „Druck bei 300 DPI“ an, um die maximalen scharfen physischen Druckmaße in Zoll (B″ × H″) zu erfahren, bevor Sie Dateien an eine Druckerei senden.',
      },
      {
        title: 'Mindestgrößen prüfen und als CSV oder JSON exportieren',
        description:
          'Tragen Sie optionale Regeln für „Mindestbreite prüfen (px)“ und „Mindesthöhe prüfen (px)“ ein, um „Bestanden“ oder „Unter Mindestmaß“ zu markieren, und klicken Sie dann auf „CSV exportieren“ oder „JSON exportieren“.',
      },
    ],
    features: [
      {
        title: 'Stapelprüfung von Dimensionen',
        description:
          'Prüfen Sie Dutzende Dateien auf einmal – ideal zur Kontrolle von Produktbildern, Werbemitteln oder App-Screenshots.',
      },
      {
        title: 'Exakte und gängige Seitenverhältnisse',
        description:
          'Berechnet sowohl das mathematisch gekürzte Verhältnis als auch gängige Standards wie 16:9, 4:3, 1:1 und 4:5.',
      },
      {
        title: 'Individueller Mindest-/Maximal-Prüfer',
        description:
          'Legen Sie optionale Mindest- oder Maximalregeln für Breite und Höhe fest, um Bilder, die Ihre Vorgaben erfüllen oder nicht erfüllen, sofort hervorzuheben.',
      },
      {
        title: 'CSV- und JSON-Export',
        description:
          'Laden Sie eine saubere CSV-Tabelle oder eine JSON-Zusammenfassung aller geprüften Bilddimensionen herunter.',
      },
    ],
    faqs: [
      {
        question: 'Verändert dieser Bilddimensionen-Prüfer meine Bilder oder speichert er sie neu?',
        answer:
          'Nein, der Prüfer liest natürliche Pixeldimensionen, Dateibytes und Containereigenschaften ausschließlich im Arbeitsspeicher des Browsers. Nichts wird komprimiert, zugeschnitten, überschrieben oder auf externe Server hochgeladen.',
      },
      {
        question: 'Welche Bilddateiformate kann ich stapelweise prüfen?',
        answer:
          'Sie können JPG-, PNG-, WebP-, iPhone-HEIC/HEIF-, SVG-, BMP-, GIF- und browsergestützte AVIF-Bilder mit bis zu 20 MB pro Datei ablegen. Gemischte Formate können gemeinsam in derselben Stapeltabelle abgelegt werden.',
      },
      {
        question: 'Wie funktioniert der Prüfer für Mindestbreite und Mindesthöhe?',
        answer:
          'Wenn Sie einen Pixel-Schwellenwert in „Mindestbreite prüfen (px)“ oder „Mindesthöhe prüfen (px)“ eingeben, erscheint in der Tabelle eine live aktualisierte Spalte „Spezifikationsprüfung“. Jede Zeile zeigt sofort ein grünes „Bestanden“-Abzeichen oder eine gelbe Warnung „Unter Mindestmaß“, sodass zu kleine Werbemittel schnell auffallen.',
      },
      {
        question: 'Wie werden gängige Seitenverhältnisse wie 16:9 oder 4:5 im Vergleich zu exakten Verhältnissen zugeordnet?',
        answer:
          'Zuerst berechnet der Rechner das mathematisch gekürzte Breite:Höhe-Verhältnis über den größten gemeinsamen Teiler sowie das Dezimalverhältnis (zum Beispiel 1,78:1). Wenn ein Bild einem Standardrahmenverhältnis wie 16:9, 4:3, 3:2, 1:1, 4:5 oder 9:16 entspricht oder sehr nahe daran liegt, wird direkt diese bekannte Bezeichnung angezeigt.',
      },
      {
        question: 'Wie wird das Druckmaß bei 300 DPI aus den Pixeln berechnet?',
        answer:
          'Druckbreite und Druckhöhe in Zoll werden berechnet, indem Pixelbreite und Pixelhöhe durch 300 Pixel pro Zoll geteilt werden (zum Beispiel entsprechen 3000 × 2400 px genau 10,0″ × 8,0″ bei 300 DPI). Der exportierte JSON enthält zusätzlich Druckäquivalente im 72-DPI-Bildschirmmaßstab.',
      },
      {
        question: 'Welche Spalten sind enthalten, wenn ich auf „CSV exportieren“ klicke?',
        answer:
          'Beim Klick auf „CSV exportieren“ wird die Datei image-dimensions-report.csv mit zehn strukturierten Spalten heruntergeladen: Dateiname, Breite (px), Höhe (px), Ausrichtung, Seitenverhältnis, Megapixel, Dateigröße (Bytes), Format, Transparenz und Druckgröße bei 300 DPI. Dateinamen mit Kommas oder Anführungszeichen werden korrekt im CSV-Format maskiert.',
      },
      {
        question: 'Was speichert der JSON-Export im Vergleich zum CSV-Export?',
        answer:
          'Der JSON-Export schreibt eine formatierte Datei image-dimensions-report.json mit sauberen Metadatenobjekten für jede geprüfte Zeile (ohne interne Vorschaulinks und temporäre Zeilen-IDs). Entwickler und QA-Skripte können sie direkt in automatisierte Asset-Prüfungen einlesen.',
      },
      {
        question: 'Wie erkennt der Prüfer, ob ein PNG oder WebP tatsächlich Alphatransparenz besitzt?',
        answer:
          'Statt anhand der Dateiendung zu raten, scannt der Lader die Alphabytes der Pixel auf dem Canvas und prüft, ob ein Pixel eine Deckkraft unter 255 besitzt. Bilder mit echten transparenten Bereichen zeigen direkt unter ihrem Format ein Alpha-Kennzeichen.',
      },
      {
        question: 'Kann ich weitere Ordner oder Stapel zu einer bestehenden Dimensionstabelle hinzufügen?',
        answer:
          'Ja, wenn Sie weitere Bilder ablegen oder auswählen, werden neue Zeilen unten an Ihre bestehende Tabelle angehängt, ohne frühere Einträge zu löschen. Klicken Sie jederzeit auf „Leeren“, wenn Sie die Tabelle für ein neues Projekt zurücksetzen möchten.',
      },
      {
        question: 'Warum zeigen iPhone-Fotos hier Querformat und Hochformat korrekt an?',
        answer:
          'Moderne Browser normalisieren die EXIF-Kameradrehung automatisch, wenn sie JPEG- und HEIC-Bilder in natürliche Dimensionen dekodieren. Dadurch meldet ein vertikales Smartphone-Foto zuverlässig die Ausrichtung „Hochformat“ und die korrekten hohen Pixelmaße.',
      },
      {
        question: 'Wie werden Megapixel (MP) für meine Bilder berechnet?',
        answer:
          'Megapixel entsprechen (Breite × Höhe) geteilt durch 1.000.000, gerundet auf zwei Dezimalstellen (zum Beispiel 1920 × 1080 = 2,07 MP). Das entspricht der üblichen Angabe von Kamerasensoren und Druckmarktplätzen.',
      },
      {
        question: 'Was passiert, wenn ich eine Datei mit irreführender Endung hochlade, etwa ein WebP mit der Endung .jpg?',
        answer:
          'Unser Prüfer liest den zugrunde liegenden Binärtyp, der bei der Dekodierung ermittelt wird, statt blind dem Dateinamensuffix zu vertrauen. Sie sehen das tatsächlich erkannte Format zusammen mit dem exakten Bytegewicht in der Spalte „Größe / Format“.',
      },
      {
        question: 'Kann ich auch die intrinsischen Dimensionen von SVG-Grafiken prüfen?',
        answer:
          'Ja, eigenständige SVG-Dateien mit Breiten-/Höhenattributen oder einer viewBox werden nativ im Browser dekodiert. Die Dimensionstabelle liest ihre gerenderte Pixelbreite, Pixelhöhe und ihr Seitenverhältnis sauber aus.',
      },
      {
        question: 'Werden unveröffentlichte Werbemittel oder vertrauliche Produktfotos online gesendet?',
        answer:
          'Niemals – die gesamte Bilddekodierung, Transparenzerkennung, Spezifikationsprüfung und CSV-/JSON-Erzeugung läuft in Ihrem eigenen Browser-Tab. Kein einziges Byte verlässt Ihr Gerät.',
      },
      {
        question: 'Kann ich ein Bild aus der Zwischenablage direkt einfügen, um seine Pixelauflösung zu prüfen?',
        answer:
          'Ja, drücken Sie Strg+V (oder Cmd+V auf dem Mac), um einen kopierten Screenshot oder eine Grafik direkt in die Dimensionstabelle einzufügen. Sie können sofort die exakte Pixelgröße, die Megapixelzahl und das Seitenverhältnis ablesen.',
      },
      {
        question: 'Warum könnte ein Produktbild von Amazon, Etsy oder Shopify die Mindestbreitenprüfung nicht bestehen?',
        answer:
          'Viele Marktplätze verlangen mindestens 1000 px oder 1200 px auf der kürzesten oder längsten Seite, um Zoom-Vorschauen zu aktivieren. Wenn Sie 1200 in „Mindestbreite prüfen“ eingeben, können Sie einen ganzen Produktkatalog vor dem Hochladen prüfen.',
      },
      {
        question: 'Was passiert, wenn eine unlesbare Datei in einen großen Stapel gemischt wird?',
        answer:
          'Wenn eine Datei das Limit von 20 MB überschreitet oder vom Browser nicht dekodiert werden kann, markiert oder überspringt die UploadZone dieses ungültige Element. Jedes gültige Bild desselben Ablegens erscheint trotzdem normal in Ihrer Dimensionstabelle.',
      },
      {
        question: 'Kann ich diesen Dimensionsprüfer auf dem Handy oder Tablet nutzen?',
        answer:
          'Ja, öffnen Sie das Tool in Safari auf iOS oder Chrome auf Android, wählen Sie Fotos aus Ihrer Galerie und prüfen Sie unterwegs exakte Pixeldimensionen und Megapixelgrößen. Die Tabelle lässt sich auf schmalen Bildschirmen horizontal scrollen, sodass keine Spalte abgeschnitten wird.',
      },
      {
        question: 'Wie kann ich ein Bild korrigieren, das meine Mindestprüfung nicht besteht oder das falsche Seitenverhältnis hat?',
        answer:
          'Klicken Sie unterhalb der Anleitung auf die verlinkten Karten „Bildgrößen-Anpasser“ oder „Bild-Zuschneider“ unter „Kostenlose verwandte Bild-Tools“. Sie können auf ein exaktes Seitenverhältnis von 16:9, 4:5 oder 1:1 zuschneiden oder Dimensionen direkt im Browser skalieren.',
      },
      {
        question: 'Gibt es ein Tageslimit oder Kosten für Stapel-Dimensionsberichte?',
        answer:
          'Nein, die Prüfung unbegrenzter Bildstapel mit bis zu 20 MB pro Datei ist vollkommen kostenlos. Sie können CSV- und JSON-Berichte so oft herunterladen, wie Sie möchten – ohne Konten und ohne Wasserzeichen.',
      },
    ],
    relatedSlugs: ['/image-resizer', '/image-metadata-viewer', '/image-color-picker', '/'],
  },
  {
    slug: '/image-cropper',
    name: 'Bild-Zuschneider',
    shortDescription: 'Fotos interaktiv zuschneiden – mit Ziehgriffen, Seitenverhältnissen und Zoom.',
    category: 'crop-edit',
    seoTitle: 'Bild online zuschneiden – Fotos & Seitenverhältnisse',
    seoDescription:
      'Interaktiver Bild-Zuschneider im Browser mit Ziehgriffen, Seitenverhältnissen von 1:1 bis 16:9 und Zoom bis 300 %. JPG, PNG, WebP und HEIC lokal zuschneiden.',
    h1: 'Kostenloser Bild-Zuschneider online',
    subtitle:
      'Für Social-Media-Ersteller, Designer, Studierende und E-Commerce-Händler: Unser interaktiver Bild-Zuschneider lässt Sie Fotos direkt im Browser präzise rahmen und trimmen. Fixieren Sie beliebte Verhältnisse von 1:1 bis 16:9, zoomen Sie bis zu 300 % für exakte Kanten und exportieren Sie saubere Zuschnitte lokal – ohne einen einzigen Upload.',
    howToSteps: [
      {
        title: 'Bild zum Zuschneiden hochladen',
        description:
          'Legen Sie ein JPG-, PNG-, WebP-, HEIC-, GIF-, BMP- oder SVG-Bild mit bis zu 20 MB in die Ablagezone, wählen Sie es auf Ihrem Gerät aus oder fügen Sie es mit Strg+V ein.',
      },
      {
        title: 'Seitenverhältnis-Voreinstellung wählen',
        description:
          'Behalten Sie „Frei“ für uneingeschränktes Trimmen oder klicken Sie unter „Seitenverhältnis-Voreinstellung“ auf 1:1, 4:3, 16:9, 3:2, 4:5 oder 9:16, um den Rahmen zu fixieren.',
      },
      {
        title: 'Rahmen und Größenänderungsgriffe ziehen',
        description:
          'Bewegen Sie die Zuschneidebox mithilfe des Drittellinien-Rasters über Ihr Motiv und ziehen Sie an einem der 8 Kanten- oder Eckgriffe, während Sie live Zuschneidebreite und -höhe verfolgen.',
      },
      {
        title: 'Zoomen oder gesamten Canvas zurücksetzen',
        description:
          'Nutzen Sie die Zoom-Schaltflächen (100 % bis 300 % in 25-%-Schritten) für präzise Kantenausrichtung oder klicken Sie auf „Alles auswählen“, um zum gesamten Bild zurückzukehren.',
      },
      {
        title: 'Ausgabeformat und Qualität wählen',
        description:
          'Wählen Sie zwischen Original, JPG, PNG oder WebP und passen Sie den Qualitätsregler (10 % bis 100 %) an, wenn Sie verlustbehaftete Formate speichern.',
      },
      {
        title: 'Zuschneiden und Datei herunterladen',
        description:
          'Klicken Sie auf „Zuschneiden & Herunterladen“, um das ausgewählte Rechteck in voller Quellauflösung zu rendern und es mit den Dimensionen im Dateinamen zu speichern.',
      },
    ],
    features: [
      {
        title: 'Interaktive Zieh- und Größenänderungsgriffe',
        description:
          'Geschmeidige Maus- und Touch-Zeigergriffe ermöglichen es Ihnen, jeden Bereich bis auf den exakten Pixel zuzuschneiden.',
      },
      {
        title: 'Seitenverhältnis-Voreinstellungen',
        description:
          'Wechseln Sie zwischen Frei, 1:1 Quadrat, 4:3, 16:9, 3:2, 4:5 für Instagram und 9:16 für Stories.',
      },
      {
        title: 'Zoom und Live-Dimensionsanzeige',
        description:
          'Zoomen Sie für eine enge Rahmung heran und sehen Sie die exakte Ausgabebreite × -höhe in Echtzeit.',
      },
      {
        title: '100 % private lokale Verarbeitung',
        description:
          'Ihre Fotos werden auf Ihrem Gerät über HTML5-Canvas zugeschnitten – ohne einen einzigen Server-Upload.',
      },
    ],
    faqs: [
      {
        question: 'Verringert das Zuschneiden die Qualität innerhalb des ausgewählten Rechtecks?',
        answer:
          'Nein, der Bild-Zuschneider extrahiert Ihre ausgewählten Koordinaten direkt aus der vollen Originalauflösung, die im Arbeitsspeicher des Browsers liegt, und nicht aus der verkleinerten Vorschau-Box. Beim Speichern als verlustfreies PNG bleiben die Pixel innerhalb Ihres Zuschnitts identisch mit der Quelle.',
      },
      {
        question: 'Welche Seitenverhältnis-Voreinstellungen sind in den Zuschneideoptionen enthalten?',
        answer:
          'Sie können zwischen Frei (beliebiges Rechteck), 1:1 (quadratische Avatare), 4:3, 16:9 (Breitbild/YouTube), 3:2 (DSLR-Standard), 4:5 (Instagram-Hochformat) und 9:16 (Stories/Reels) wechseln. Beim Klick auf eine Voreinstellung wird automatisch ein passender Rahmen zentriert.',
      },
      {
        question: 'Wie verhalten sich die 8 Größenänderungsgriffe bei aktivierter Seitenverhältnis-Voreinstellung?',
        answer:
          'Alle vier Eckgriffe und Kantengriffe halten Ihr ausgewähltes Verhältnis automatisch ein und bleiben dabei sauber innerhalb der Bildgrenzen. Um Breite und Höhe wieder unabhängig anzupassen, klicken Sie einfach auf die Voreinstellung „Frei“.',
      },
      {
        question: 'Wozu dient das Drittellinien-Raster innerhalb der Auswahlbox?',
        answer:
          'Das dezente 3×3-Raster teilt Ihren Zuschneiderahmen in Drittel, damit Sie Horizonte, Augen oder Produktmitten beim Ziehen präzise ausrichten können. Es ist lediglich eine visuelle Hilfe auf dem Bildschirm und erscheint niemals in Ihrem exportierten Bild.',
      },
      {
        question: 'Wie weit kann ich für eine detaillierte Rahmung zoomen?',
        answer:
          'Nutzen Sie die Schaltflächen „Zoom vergrößern (+)“ und „Zoom verkleinern (−)“ in der Ansichtsleiste, um von 100 % bis zu 300 % in 25-%-Schritten zu zoomen. Bei einem Zoom über 100 % scrollen Sie innerhalb der Vorschaufläche, um feine Ränder zu trimmen.',
      },
      {
        question: 'Was bewirkt die Schaltfläche „Alles auswählen“ in den Zuschneideoptionen?',
        answer:
          'Beim Klick auf „Alles auswählen“ wechselt das Seitenverhältnis zurück zu „Frei“, die Zuschneidebox wird auf 100 % Ihrer Bildbreite und -höhe erweitert und der Zoom auf 100 % zurückgesetzt. Sie erhalten einen sauberen Ausgangspunkt, ohne das Bild erneut hochzuladen.',
      },
      {
        question: 'Kann ich die exakten Ausgabedimensionen in Pixeln vor dem Herunterladen sehen?',
        answer:
          'Ja, sowohl die Anzeige „Auswahl“ oberhalb der Fläche als auch die Karten „Zuschneidebreite“ / „Zuschneidehöhe“ in den Zuschneideoptionen aktualisieren sich live in Pixeln, während Sie ziehen. Der exportierte Dateiname enthält ebenfalls diese exakten Zuschnittdimensionen (zum Beispiel foto_1080x1080_zugeschnitten.jpg).',
      },
      {
        question: 'Funktioniert das Zuschneiden mit Fingergesten auf Handys und Tablets?',
        answer:
          'Ja, Zuschneidebox und Griffe verwenden Touch-sichere Zeigerereignisse, die sowohl für Desktop-Mäuse als auch für mobile Touchscreens konzipiert sind. Sie können den Rahmen ziehen und an den Griffen ziehen – bequem auf iOS und Android.',
      },
      {
        question: 'Bleiben transparente Hintergründe bei PNGs und WebPs beim Zuschneiden erhalten?',
        answer:
          'Ja, wenn Sie das Format „Original“ (von PNG/WebP) beibehalten oder PNG oder WebP wählen, bleibt die volle Alphatransparenz innerhalb des zugeschnittenen Bereichs erhalten. Bei der Wahl von JPG werden transparente Pixel sauber auf Vollweiß abgeflacht.',
      },
      {
        question: 'Warum verschwindet der Qualitätsregler, wenn PNG ausgewählt ist?',
        answer:
          'PNG nutzt verlustfreie Komprimierung, daher gilt eine verlustbehaftete prozentuale Qualitätseinstellung nicht. Wechseln Sie das Ausgabeformat zu „Original“ (für JPEGs), JPG oder WebP, um den Qualitätsregler von 10 % bis 100 % einzublenden.',
      },
      {
        question: 'Kann ich mehrere verschiedene Bilder auf einmal zuschneiden?',
        answer:
          'Dieser interaktive Zuschneider bearbeitet jeweils ein Bild, damit Sie jedes Motiv einzeln mit Ziehgriffen und Zoom prüfen und rahmen können. Klicken Sie nach dem Herunterladen auf das Papierkorb-Symbol, um sofort Ihr nächstes Foto zu laden.',
      },
      {
        question: 'Welche Dateiformate können in den Zuschneider hochgeladen werden?',
        answer:
          'Sie können JPG-, PNG-, WebP-, iPhone-HEIC/HEIF-, GIF-, BMP- und SVG-Bilder mit bis zu 20 MB pro Datei zuschneiden. Beachten Sie, dass animierte GIFs ihren Anfangsframe als statische Ausgabe zuschneiden.',
      },
      {
        question: 'Werden private Porträts oder Ausweise beim Zuschneiden auf einen Server hochgeladen?',
        answer:
          'Nein, das gesamte Zeichnen auf dem Canvas und die Blob-Kodierung laufen lokal in Ihrem Webbrowser. Nichts wird über ein Netzwerk übertragen oder extern gespeichert.',
      },
      {
        question: 'Kann ich einen Screenshot direkt aus der Zwischenablage einfügen, um ihn zu trimmen?',
        answer:
          'Ja, erstellen Sie einen Screenshot und drücken Sie Strg+V (oder Cmd+V auf dem Mac) auf der Seite, solange kein Bild geladen ist. Er öffnet sich direkt in der Zuschneideansicht und ist bereit zum Rahmen.',
      },
      {
        question: 'Wie schneide ich ein rechteckiges Foto zu einem sauberen quadratischen Profil-Avatar zu?',
        answer:
          'Klicken Sie unter „Seitenverhältnis-Voreinstellung“ auf die Schaltfläche 1:1, ziehen Sie das weiße Quadrat über das Gesicht oder Logo und passen Sie die Eckgriffe an, bis Sie zufrieden sind. Klicken Sie dann auf „Zuschneiden & Herunterladen“, um ein exakt quadratisches Bild zu speichern.',
      },
      {
        question: 'Welche Qualität ist beim Export von JPG- oder WebP-Zuschnitten standardmäßig eingestellt?',
        answer:
          'Die Qualität ist standardmäßig auf 92 % eingestellt, damit zugeschnittene JPEGs und WebPs eine scharfe fotografische Textur behalten, ohne unnötig groß zu werden. Ziehen Sie den Regler auf 75 %–85 %, wenn Sie zusätzlich eine kleinere Uploadgröße möchten.',
      },
      {
        question: 'Entfernt das Zuschneiden auch eingebettete EXIF-GPS-Standortdaten?',
        answer:
          'Ja, der Export des zugeschnittenen Bereichs über ein frisches HTML5-Canvas erzeugt eine saubere Bitmap ohne die ursprünglichen JPEG-EXIF- oder GPS-Tags. Das schützt Ihren Standort und Ihre Geräteprivatsphäre, wenn Sie getrimmte Aufnahmen teilen.',
      },
      {
        question: 'Warum verdunkelt die Fläche alles außerhalb meiner Auswahlbox?',
        answer:
          'Die halbtransparente dunkle Überlagerung dimmt die Bereiche, die weggetrimmt werden. Dieser visuelle Kontrast hilft Ihnen, Komposition und Drittellinien-Balance sauber zu beurteilen, bevor Sie auf „Zuschneiden & Herunterladen“ klicken.',
      },
      {
        question: 'Kann ich das aktuelle Foto nach dem Herunterladen eines Zuschnitts schnell ersetzen?',
        answer:
          'Ja, klicken Sie jederzeit auf das rote Papierkorb-Symbol in der oberen rechten Ecke der Kopfzeile der Zuschneideansicht. Damit wird das aktive Foto gelöscht und Sie kehren sauber zur Uploadzone für Ihr nächstes Bild zurück.',
      },
      {
        question: 'Gibt es Kosten, eine Registrierung oder ein Wasserzeichen bei zugeschnittenen Exporten?',
        answer:
          'Nein, der Bild-Zuschneider ist vollkommen kostenlos, ohne Konten oder Bezahlschranken. Jedes zugeschnittene Foto wird sauber in voller Auflösung exportiert – ohne ein einziges hinzugefügtes Wasserzeichen.',
      },
    ],
    relatedSlugs: ['/image-resizer', '/rotate-flip-image', '/round-image-corners', '/'],
  },
  {
    slug: '/image-watermark',
    name: 'Bild-Wasserzeichen',
    shortDescription: 'Individuelle Text- oder Logo-Wasserzeichen hinzufügen, ziehen oder kacheln.',
    category: 'crop-edit',
    seoTitle: 'Bild-Wasserzeichen kostenlos – Text & Logo',
    seoDescription:
      'Schützen Sie Fotos mit einem Bild-Wasserzeichen im Browser. Fügen Sie individuellen Text oder transparente PNG-/SVG-Logos hinzu und positionieren Sie sie frei.',
    h1: 'Kostenloses Bild-Wasserzeichen-Tool online',
    subtitle:
      'Für Fotografen, Illustratoren, Etsy-Händler und Digitalagenturen: Dieses private Browser-Tool fügt ein scharfes Text- oder Logo-Wasserzeichen hinzu – ohne Server-Uploads. Ziehen Sie Ihre Markierung frei über den Canvas, rasten Sie sie an 9 Anker-Voreinstellungen ein oder wiederholen Sie ein geneigtes Muster über das gesamte Foto.',
    howToSteps: [
      {
        title: 'Grundfoto hochladen',
        description:
          'Legen Sie ein JPG-, PNG-, WebP-, HEIC-, GIF-, BMP- oder SVG-Bild mit bis zu 20 MB in die Ablagezone, wählen Sie es von der Festplatte aus oder fügen Sie es mit Strg+V ein.',
      },
      {
        title: '„Text-Wasserzeichen“ oder „Logo-Bild“ wählen',
        description:
          'Wählen Sie „Text-Wasserzeichen“, um individuellen Markentext einzugeben, eine Farbe zu wählen und die Größe (2 %–20 %) anzupassen, oder wählen Sie „Logo-Bild“, um ein transparentes PNG- oder SVG-Logo hochzuladen (5 %–60 % Breite).',
      },
      {
        title: 'Deckkraft und Drehung anpassen',
        description:
          'Stellen Sie die Deckkraft von dezenten 5 % bis zu soliden 100 % ein und neigen Sie die Drehung in Echtzeit von −180° bis +180°.',
      },
      {
        title: 'Frei positionieren oder „Gekacheltes Wiederholungsmuster“ aktivieren',
        description:
          'Ziehen Sie Ihr Wasserzeichen direkt auf dem Vorschaubild, klicken Sie auf eine 9-Punkt-Anker-Voreinstellung (von oben links bis unten rechts) oder aktivieren Sie das „Gekachelte Wiederholungsmuster“ und passen Sie den Kachel-Abstand (15 %–60 %) an.',
      },
      {
        title: 'Ausgabeformat und Qualität wählen',
        description:
          'Wählen Sie die Ausgabe Orig, JPG, PNG oder WebP und stellen Sie die Qualität (10 %–100 %) ein, wenn Sie verlustbehaftete Formate speichern.',
      },
      {
        title: 'Bild mit Wasserzeichen herunterladen',
        description:
          'Klicken Sie auf „Bild mit Wasserzeichen herunterladen“, um die Überlagerung in voller Originalauflösung des Bildes zusammenzusetzen und als <name>_watermarked zu speichern.',
      },
    ],
    features: [
      {
        title: 'Text- und Logo-Wasserzeichen',
        description:
          'Nutzen Sie scharfe individuelle Typografie oder laden Sie Ihr transparentes PNG-/SVG-Markenlogo hoch.',
      },
      {
        title: 'Ziehen zum Positionieren + 9 Anker-Voreinstellungen',
        description:
          'Platzieren Sie Ihre Markierung in jeder Ecke, genau in der Mitte oder ziehen Sie sie frei auf dem Canvas.',
      },
      {
        title: 'Diagonaler Kachelschutz',
        description:
          'Aktivieren Sie „Gekacheltes Wasserzeichen“, um Ihren Text oder Ihr Logo mit einstellbarem Abstand über das gesamte Foto zu wiederholen.',
      },
      {
        title: 'Privatsphäre im Browser',
        description:
          'Versehen Sie Proofs und Portfoliofotos lokal mit Wasserzeichen, ohne Originale an externe Server zu senden.',
      },
    ],
    faqs: [
      {
        question: 'Kann ich sowohl individuellen Text als auch mein eigenes transparentes Logo als Bild-Wasserzeichen verwenden?',
        answer:
          'Ja, wechseln Sie oben im Steuerungsbereich zwischen „Text-Wasserzeichen“ und „Logo-Bild“. Der Textmodus unterstützt individuelle Formulierungen, Hex-Farben und Größenskalierung, während der Logomodus transparente PNG-, SVG- oder andere unterstützte Logodateien akzeptiert.',
      },
      {
        question: 'Wie schützt das „Gekachelte Wiederholungsmuster“ Kunden-Proofs besser als ein einzelner Eckstempel?',
        answer:
          'Einzelne Eckmarkierungen lassen sich leicht wegzuschneiden, während das aktivierte „Gekachelte Wiederholungsmuster“ Ihren gedrehten Text oder Ihr Logo in einem versetzten Raster über den gesamten Rahmen stempelt. Nutzen Sie den Regler für den Kachel-Abstand (15 % bis 60 %), um die Rasterdichte zu steuern.',
      },
      {
        question: 'Warum sind Anker-Voreinstellungen ausgeblendet, wenn das „Gekachelte Wiederholungsmuster“ aktiviert ist?',
        answer:
          'Anker-Voreinstellungen und Ziehen zum Positionieren dienen dazu, ein einzelnes Wasserzeichen an bestimmten Koordinaten zu platzieren (OL, OM, OR, ML, M, MR, UL, UM, UR). Deaktivieren Sie das „Gekachelte Wiederholungsmuster“, wann immer Sie einen einzelnen Stempel ziehen oder einrasten lassen möchten.',
      },
      {
        question: 'Wie wird die Textgröße bei kleinen Vorschaubildern im Vergleich zu riesigen Kamerafotos berechnet?',
        answer:
          'Die Schriftgröße (2 % bis 20 %) und die Logobreite (5 % bis 60 %) skalieren proportional zur Breite Ihres Bildes. Dadurch sieht Ihr Wasserzeichen sowohl auf einem 800-px-Produktvorschaubild als auch auf einem 4000-px-hochauflösenden Proof gleich aus.',
      },
      {
        question: 'Verringert der Vorschau-Canvas die Qualität meiner heruntergeladenen Ausgabe?',
        answer:
          'Nein, die interaktive Vorschau passt sich lediglich bis zu 900 px Breite an, um das Ziehen auf Ihrem Bildschirm angenehm zu machen. Wenn Sie auf „Bild mit Wasserzeichen herunterladen“ klicken, erstellt der Exporteur einen Canvas in voller Auflösung, der exakt den Pixelmaßen Ihres Originalfotos entspricht.',
      },
      {
        question: 'Kann ich weißen Wasserzeichentext auf hellem Hintergrund lesbar machen?',
        answer:
          'Ja, das „Text-Wasserzeichen“ rendert automatisch einen dezenten dunklen Schlagschatten hinter Ihren Buchstaben. Dadurch bleiben weiße oder hellfarbige Wasserzeichen auf hellem Himmel, weißen Produkthintergründen und Highlights scharf und lesbar.',
      },
      {
        question: 'Welche Deckkraft- und Drehungsbereiche eignen sich am besten für einen unaufdringlichen Proof-Schutz?',
        answer:
          'Für eine dezente Eckmarkierung probieren Sie 40 %–65 % Deckkraft bei 0° Drehung, verankert unten rechts (UR). Für einen starken Stock-Proof-Schutz verwenden Sie das „Gekachelte Wiederholungsmuster“ mit 25 %–40 % Deckkraft und einem diagonalen Winkel von −25° oder −35°.',
      },
      {
        question: 'Wie ziehe ich ein einzelnes Wasserzeichen an eine exakte individuelle Stelle?',
        answer:
          'Klicken Sie bei deaktiviertem „Gekacheltem Wiederholungsmuster“ direkt auf eine beliebige Stelle des Vorschau-Canvas oder drücken Sie dort und ziehen Sie Ihren Zeiger. Das Wasserzeichen folgt geschmeidig und wird leicht innerhalb der Kanten begrenzt, sodass es niemals abgeschnitten wird.',
      },
      {
        question: 'Welche Bildformate werden für Grundfotos und hochgeladene Logos unterstützt?',
        answer:
          'Sowohl das Hauptfoto als auch der Logo-Upload unterstützen JPG, PNG, WebP, iPhone-HEIC/HEIF, GIF, BMP und SVG bis zu 20 MB. Beachten Sie, dass animierte GIFs als ein einzelner statischer Frame mit Wasserzeichen gerendert werden.',
      },
      {
        question: 'Bleibt die Transparenz beim Export erhalten, wenn mein Grundbild ein transparentes PNG ist?',
        answer:
          'Ja, die Auswahl von Orig (von PNG/WebP), PNG oder WebP erhält die volle Alphatransparenz außerhalb Ihres Motivs, während das Wasserzeichen darüber zusammengesetzt wird. Bei der Auswahl von JPG werden transparente Bereiche mit Vollweiß gefüllt.',
      },
      {
        question: 'Werden Original-Proofs ohne Wasserzeichen jemals auf externe Server hochgeladen?',
        answer:
          'Nein, es ist essenziell, Kunden-Proofs ohne Wasserzeichen privat zu halten. Jede Canvas-Zusammensetzung, jeder Kacheldurchlauf und jeder finale Bildexport läuft strikt im lokalen Speicher Ihres Browsers – ohne einen einzigen Netzwerk-Upload.',
      },
      {
        question: 'Kann ich ein neues Grundfoto hochladen, ohne meine Text-, Deckkraft- oder Winkeleinstellungen zu verlieren?',
        answer:
          'Ja, klicken Sie in der Vorschau-Kopfzeile auf „Bild ändern“, wann immer Sie ein anderes Foto stempeln möchten. Ihr aktueller Wasserzeichentext, Ihr hochgeladenes Logo, Deckkraft, Drehwinkel und Kachellayout bleiben automatisch konfiguriert.',
      },
      {
        question: 'Kann ich das hochgeladene Markenlogo später ersetzen, ohne das Tool neu zu laden?',
        answer:
          'Ja, klicken Sie bei ausgewähltem Modus „Logo-Bild“ auf „Logo-Bild ändern“, um jederzeit eine andere PNG- oder SVG-Datei auszuwählen. Ihr bestehendes Grundfoto wird sofort aktualisiert.',
      },
      {
        question: 'Warum verschwindet die Qualität, wenn die PNG-Ausgabe ausgewählt wird?',
        answer:
          'PNG-Ausgaben sind verlustfreie Bitmaps, daher gilt eine prozentuale Komprimierungsqualität nicht. Wechseln Sie zu Orig (für JPEG-Quellen), JPG oder WebP, um den Qualitätsregler zwischen 10 % und 100 % anzupassen.',
      },
      {
        question: 'Kann ich ein Foto direkt aus der Zwischenablage einfügen, um es mit einem Wasserzeichen zu versehen?',
        answer:
          'Ja, kopieren Sie ein Bild oder einen Screenshot und drücken Sie Strg+V (oder Cmd+V auf dem Mac), wenn die Uploadzone geöffnet ist. Es wird direkt in den Wasserzeichen-Editor geladen.',
      },
      {
        question: 'Ist das Wasserzeichen dauerhaft in die heruntergeladene Datei eingeflacht?',
        answer:
          'Ja, das Wasserzeichen wird direkt auf die Ausgabe-Bitmap gemalt und als abgeflachtes JPG, PNG oder WebP (<name>_watermarked) gespeichert. Es verbleiben keine bearbeitbaren Ebenen im exportierten Bild.',
      },
      {
        question: 'Was passiert, wenn ich das Eingabefeld „Wasserzeichentext“ leer lasse?',
        answer:
          'Wenn Sie das Feld „Wasserzeichentext“ vollständig leeren, zeigt der Renderer vorübergehend „Wasserzeichen“ auf dem Vorschau-Canvas an. Das verhindert eine unsichtbare leere Auswahl, während Sie ein neues Label eingeben.',
      },
      {
        question: 'Kann ich Fotos mit Wasserzeichen auf einem Smartphone oder iPad positionieren und exportieren?',
        answer:
          'Ja, das Ziehen über den Vorschau-Canvas nutzt Touch-freundliche Zeigerereignisse zusammen mit responsiven Reglern. Sie können Portfoliofotos oder Proofs direkt in Safari oder Chrome auf dem Handy stempeln.',
      },
      {
        question: 'Entfernt das Versehen mit Wasserzeichen beim Export Kamera-EXIF-GPS-Tags?',
        answer:
          'Ja, das Rendern auf ein frisches HTML5-Canvas erzeugt eine saubere Ausgabedatei, ohne Kamera-EXIF-Header zu kopieren. Ihr GPS-Standort und Ihre Geräte-Metadaten bleiben aus dem heruntergeladenen Proof ausgeschlossen.',
      },
      {
        question: 'Fügt CompressMyPic neben meinem eigenen Wasserzeichen ein zusätzliches Abzeichen hinzu?',
        answer:
          'Nein, nur der exakte Text oder das Logo, den bzw. das Sie konfigurieren, wird auf Ihr Foto gezeichnet. Wir fügen Ihren Exporten niemals externes Branding, Eckabzeichen oder Website-Wasserzeichen hinzu.',
      },
    ],
    relatedSlugs: ['/add-text-to-image', '/image-border-generator', '/remove-image-metadata', '/'],
  },
  {
    slug: '/blur-pixelate-image',
    name: 'Bild weichzeichnen & pixelieren',
    shortDescription: 'Das ganze Foto oder nur sensible Bereiche mit dem Pinsel weichzeichnen oder pixelieren.',
    category: 'crop-edit',
    seoTitle: 'Bild weichzeichnen & pixelieren – Gesichter zensieren',
    seoDescription:
      'Weichzeichnen oder pixelieren Sie Bildbereiche online mit Zensurpinsel oder Gesamtbild-Modus. Verbergen Sie Gesichter, Kennzeichen und privaten Text im Browser.',
    h1: 'Bild weichzeichnen & pixelieren online',
    subtitle:
      'Für Journalisten, Lehrkräfte, Marktplatz-Händler und alle, denen Privatsphäre wichtig ist: Mit diesem Browser-Tool können Sie Bilddetails dauerhaft weichzeichnen oder pixelieren, bevor Sie sie online teilen. Malen Sie mit dem interaktiven Zensurpinsel selektiv über Gesichter, Kennzeichen oder Adressen oder wenden Sie geschmeidiges Weichzeichnen und Pixelierung lokal auf den gesamten Rahmen an.',
    howToSteps: [
      {
        title: 'Foto oder Screenshot hochladen',
        description:
          'Legen Sie ein beliebiges JPG-, PNG-, WebP-, HEIC-, GIF-, BMP- oder SVG-Bild mit bis zu 20 MB in die Ablagezone oder fügen Sie es direkt mit Strg+V ein.',
      },
      {
        title: '„Pinselbereich“ oder „Gesamtbild“ wählen',
        description:
          'Behalten Sie „Pinselbereich“ ausgewählt, um nur gemalte Regionen wie Gesichter und Nummern zu zensieren, oder wechseln Sie zu „Gesamtbild“, um den gesamten Rahmen weichzuzeichnen oder zu pixelieren.',
      },
      {
        title: '„Pixel-Mosaik“ oder „Weiches Weichzeichnen“ wählen',
        description:
          'Wechseln Sie je nach gewünschtem Stil zwischen blockigen „Pixel-Mosaik“-Kacheln und „Weichem Weichzeichnen“.',
      },
      {
        title: 'Stärke und Pinselgröße einstellen',
        description:
          'Passen Sie die Mosaik-Blockgröße (4–60 px) oder den Weichzeichnungsradius (2–50 px) an und stimmen Sie die Pinselgröße (2 %–20 %) beim selektiven Malen ab.',
      },
      {
        title: 'Über sensible Details malen',
        description:
          'Klicken und ziehen Sie direkt über Gesichter, Kennzeichen oder privaten Text auf dem Vorschau-Canvas; klicken Sie jederzeit auf „Rückgängig“ oder „Pinsel zurücksetzen“.',
      },
      {
        title: 'Format wählen und herunterladen',
        description:
          'Wählen Sie die Ausgabe Orig, JPG, PNG oder WebP, stellen Sie die Qualität (10 %–100 %) für verlustbehaftete Formate ein und klicken Sie auf „Bild herunterladen“, um lokal zu speichern.',
      },
    ],
    features: [
      {
        title: 'Interaktiver Zensurpinsel',
        description:
          'Malen Sie mit einstellbarer Pinselgröße und Rückgängig-Funktion pro Strich über Gesichter, Adressen oder Kennzeichen.',
      },
      {
        title: 'Weichzeichnen und Mosaik für das Gesamtbild',
        description:
          'Weichzeichnen Sie Hintergründe schnell oder erzeugen Sie Retro-Pixel-Art-Mosaikeffekte über den gesamten Rahmen.',
      },
      {
        title: 'Kein Server-Upload',
        description:
          'Da Sie sensible Details verbergen, verlässt nichts jemals Ihr Gerät.',
      },
      {
        title: 'Export in voller Auflösung',
        description:
          'Pinselkoordinaten werden präzise auf die vollen Originalpixel des Bildes abgebildet – für scharfe Exporte.',
      },
    ],
    faqs: [
      {
        question: 'Können weichgezeichnete oder pixelierte Bereiche aus der heruntergeladenen Datei wieder rückgängig gemacht oder umgekehrt werden?',
        answer:
          'Nein, der Export flacht Ihre Striche direkt in eine einzige flache Raster-Bitmap (JPG, PNG oder WebP) ab – ohne versteckte Ebenen oder Rückgängig-Verlauf innerhalb des Bildes. Nach dem Herunterladen sind die ursprünglich scharfen Pixel hinter der zensierten Maske für immer verschwunden.',
      },
      {
        question: 'Warum ist „Pixel-Mosaik“ zum Verbergen von Text oft sicherer als ein leichtes „Weiches Weichzeichnen“?',
        answer:
          'Eine aggressive Mosaik-Blockgröße (20 px bis 60 px) verschmilzt Zeichen zu großen einfarbigen Quadraten und zerstört feine Buchstabenumrisse vollständig. Sehr kleine Weichzeichnungsradien lassen Wortformen manchmal noch leicht erraten, daher sorgt ein größerer Weichzeichnungsradius oder „Pixel-Mosaik“ für eine stärkere Schwärzung.',
      },
      {
        question: 'Wie hält der Modus „Pinselbereich“ scharfe Bereiche außerhalb meiner Striche unberührt?',
        answer:
          'Im Modus „Pinselbereich“ wird Ihr Grundbild in voller Schärfe gezeichnet, während jeder gemalte Strich als Offscreen-Alphamaske fungiert, die nur die weichgezeichnete oder pixelierte Region darüber zusammensetzt. Nicht bemalte Teile des Fotos bleiben vollkommen scharf.',
      },
      {
        question: 'Kann ich pixelierte und weichgezeichnete Striche auf demselben Bild mischen?',
        answer:
          'Ja, jeder Strich speichert den Effektstil („Pixel-Mosaik“ oder „Weiches Weichzeichnen“), die Stärke und den Pinselradius, die beim Malen aktiv waren. Sie können zuerst ein Kennzeichen pixelieren, zu „Weiches Weichzeichnen“ wechseln und auf demselben Foto ein Hintergrundgesicht übermalen.',
      },
      {
        question: 'Wird das Malen auf der verkleinerten Vorschau präzise auf riesige Kamerafotos abgebildet?',
        answer:
          'Ja, alle Zeigerkoordinaten werden in normalisierten Verhältnissen von 0 bis 1 gespeichert, zusammen mit proportionaler Pinsel- und Effektskalierung. Wenn Sie auf „Bild herunterladen“ klicken, wird die Komposition auf einem Canvas in voller Auflösung gerendert, der Ihren Quelldimensionen entspricht.',
      },
      {
        question: 'Wie kann ich einen Ausrutscher beim Malen über ein Gesicht oder eine Adresse korrigieren?',
        answer:
          'Klicken Sie auf die Schaltfläche „Rückgängig“ oberhalb des Vorschau-Canvas, um nur Ihren neuesten Strich zu entfernen, ohne frühere Schwärzungen zu löschen. Wenn Sie sauber neu beginnen möchten, klicken Sie auf „Pinsel zurücksetzen“, um alle Striche sofort zu löschen.',
      },
      {
        question: 'Was bewirkt der Wechsel des Zielbereichs zu „Gesamtbild“?',
        answer:
          '„Gesamtbild“ wendet Ihren aktiven Radius für „Weiches Weichzeichnen“ oder Ihre aktive Blockgröße für „Pixel-Mosaik“ gleichmäßig auf jeden Pixel von Kante zu Kante an. Das ist praktisch, um traumhafte Hintergrundplatten, Hero-Hintergründe oder Retro-Pixel-Art-Texturen zu erzeugen, ohne zu malen.',
      },
      {
        question: 'Werden unzensierte Fotos mit Gesichtern, Ausweisen oder privaten Adressen an einen Server gesendet?',
        answer:
          'Niemals – das Hochladen unzensierter sensibler Bilder auf einen Remote-Server würde die Privatsphäre gefährden, noch bevor Sie etwas verbergen. Jede Canvas-Maske, jeder Weichzeichnungsdurchlauf und jeder finale Download läuft strikt in Ihrem Browser.',
      },
      {
        question: 'Wie groß sollte ich Pinselgröße und Mosaik-Blockgröße für kleine Screenshots einstellen?',
        answer:
          'Für Chat-Screenshots oder Handyaufnahmen zielt eine Pinselgröße von 4 %–8 % sauber auf einzelne Textzeilen oder Benutzernamen, ohne benachbarte Nachrichten zu verschmieren. Eine Mosaik-Blockgröße von etwa 12–24 px verdeckt kleinen Text in der Regel lesbar.',
      },
      {
        question: 'Welche Bilddateiformate kann ich hier weichzeichnen oder pixelieren?',
        answer:
          'Sie können JPG-, PNG-, WebP-, iPhone-HEIC/HEIF-, GIF-, BMP- und SVG-Bilder mit bis zu 20 MB pro Datei hochladen. Beachten Sie, dass mehrframe-animierte GIFs ihren Anfangsframe als statische Datei zensieren und exportieren.',
      },
      {
        question: 'Kann ich sensible Teile eines mit Strg+V eingefügten Screenshots zensieren?',
        answer:
          'Ja, erstellen Sie einen Screenshot in Ihrer Zwischenablage und drücken Sie Strg+V (oder Cmd+V auf dem Mac), während die Upload-Ablagezone sichtbar ist. Er öffnet sich direkt im Modus „Pinselbereich“ und ist bereit zum Schwärzen und Speichern.',
      },
      {
        question: 'Bleibt beim Export die Transparenz bei PNG- oder WebP-Grafiken erhalten?',
        answer:
          'Ja, wenn Sie Orig (für PNG/WebP) beibehalten oder PNG oder WebP wählen, bleibt die Alphatransparenz um nicht-rechteckige Sticker oder UI-Ausschnitte herum intakt. Bei der Wahl von JPG wird ein opakes JPEG-Bild exportiert.',
      },
      {
        question: 'Warum sind die Schaltflächen „Rückgängig“ und „Pinsel zurücksetzen“ nur im Modus „Pinselbereich“ sichtbar?',
        answer:
          'Diese Schaltflächen verwalten einzelne gemalte Pinselstriche, daher werden sie automatisch ausgeblendet, wenn Sie in den Modus „Gesamtbild“ wechseln. Wenn Sie zu „Pinselbereich“ zurückwechseln, werden Ihre gespeicherten Striche genau dort wiederhergestellt, wo Sie sie hinterlassen haben.',
      },
      {
        question: 'Kann ich mit dem Finger oder Apple Pencil auf Handy oder Tablet Zensurstriche malen?',
        answer:
          'Ja, der Canvas nutzt Touch-none-Zeigerereignisse, die speziell für mobile Touchscreens und Stifte gebaut wurden. Sie können Zensurstriche geschmeidig über Gesichter oder Text ziehen, ohne die Seite versehentlich zu scrollen.',
      },
      {
        question: 'Entfernt das Zensieren und Exportieren auch EXIF-Kamera-GPS-Tags?',
        answer:
          'Ja, das Rendern der geschwärzten Komposition über ein frisches HTML5-Canvas lässt ursprüngliche JPEG-EXIF-Header und GPS-Koordinaten automatisch weg. Das schützt sowohl sichtbare Details als auch versteckte Dateimetadaten.',
      },
      {
        question: 'Warum blendet sich die Qualität aus, wenn ich die PNG-Ausgabe wähle?',
        answer:
          'PNG nutzt verlustfreie Pixelkomprimierung, daher gelten verlustbehaftete Qualitätsprozente nicht. Wählen Sie Orig (beim Bearbeiten eines JPEG), JPG oder WebP, wenn Sie den Qualitätsregler von 10 %–100 % anpassen möchten.',
      },
      {
        question: 'Welcher Dateiname wird beim Speichern meines weichgezeichneten oder pixelierten Fotos verwendet?',
        answer:
          'Der Downloader behält Ihren bereinigten Basisdateinamen und hängt je nach aktivem Effektstil _blur oder _pixelate an. So lassen sich zensierte Exporte (wie beleg_pixelate.png) sauber neben den Originalen organisieren.',
      },
      {
        question: 'Was, wenn ich einen ganzen Porträthintergrund sauber weichzeichnen möchte, ohne zu malen?',
        answer:
          'Nutzen Sie den Modus „Gesamtbild“, wenn Sie eine gleichmäßige Hintergrundweichzeichnung hinter überlagerten Grafiken oder UI-Karten möchten. Um ein Motiv auf sauberem Hintergrund zu isolieren, kombinieren Sie ihn mit unserem Hintergrund-Entferner.',
      },
      {
        question: 'Wie stark können „Weiches Weichzeichnen“ und „Pixel-Mosaik“ werden?',
        answer:
          'Der Weichzeichnungsradius reicht von dezenter 2-px-Glättung bis zu starkem 50-px-Weichzeichnen im Gauß-Stil. Die Mosaik-Blockgröße reicht von feinen 4-px-Kacheln bis zu groben 60-px-Blöcken, proportional zur Auflösung Ihrer Quelle skaliert.',
      },
      {
        question: 'Gibt es Wasserzeichen, Tageslimits oder Registrierungen zum Zensieren von Fotos?',
        answer:
          'Nein, Sie können Fotos mit bis zu 20 MB pro Datei weichzeichnen oder pixelieren – ohne Wasserzeichen und ohne Registrierung. Die gesamte lokale Verarbeitung bleibt bei unbegrenzten Exporten vollkommen kostenlos.',
      },
    ],
    relatedSlugs: ['/remove-image-metadata', '/image-cropper', '/image-filters', '/'],
  },
  {
    slug: '/add-text-to-image',
    name: 'Text zu Bild hinzufügen',
    shortDescription: 'Ziehbar gestaltete Text-Overlays mit Schriftarten, Kontur und Schatten hinzufügen.',
    category: 'crop-edit',
    seoTitle: 'Text zu Bild hinzufügen – Schriftarten & Konturen',
    seoDescription:
      'Fügen Sie im Browser kostenlos Text zu Bildern hinzu: ziehbare Ebenen, 5 Schriftarten, Fett/Kursiv, Konturen, Schatten und Drehung – ohne Wasserzeichen.',
    h1: 'Text zu Bild hinzufügen online',
    subtitle:
      'Für Content-Ersteller, Social-Media-Manager, Lehrkräfte und Meme-Macher: Dieses private Tool macht es einfach, Text zu Bilddateien hinzuzufügen – ohne schwere Design-Apps. Überlagern Sie mehrere Überschriften oder mehrzeilige Beschriftungen, passen Sie Schriftarten, Konturen, Schatten und Drehung an und exportieren Sie sauber ohne Wasserzeichen.',
    howToSteps: [
      {
        title: 'Bild hochladen oder aus der Zwischenablage einfügen',
        description:
          'Legen Sie ein JPG-, PNG-, WebP-, HEIC-, GIF-, BMP- oder SVG-Foto mit bis zu 20 MB in die Ablagezone oder fügen Sie es direkt mit Strg+V ein.',
      },
      {
        title: 'Mehrzeiligen Text eingeben und Ebenen verwalten',
        description:
          'Bearbeiten Sie Ihren Text im Feld „Textinhalt“ (Enter fügt Zeilenumbrüche hinzu) und klicken Sie auf „Hinzufügen“, um weitere Ebenen wie Text 1, Text 2 zu stapeln oder unerwünschte zu löschen.',
      },
      {
        title: 'Schriftart, Füllfarbe, Fett und Kursiv wählen',
        description:
          'Wählen Sie zwischen Inter, Impact, Georgia, Courier oder Trebuchet, stellen Sie Ihre Text-Füllfarbe ein und aktivieren Sie den Stil Fett oder Kursiv.',
      },
      {
        title: 'Größe, Drehung, Kontur und Schatten anpassen',
        description:
          'Ziehen Sie den Regler für Größe (2 %–22 %) und Drehung (−180° bis +180°) und passen Sie dann Farbe und Breite der Textkontur (1–10) sowie den optionalen Schlagschatten an.',
      },
      {
        title: 'Ebenen direkt auf dem Bild ziehen',
        description:
          'Klicken und ziehen Sie einen beliebigen Textblock direkt auf dem Vorschau-Canvas, um Überschriften, Meme-Beschriftungen oder Screenshot-Hinweise präzise zu positionieren.',
      },
      {
        title: 'Ausgabeformat wählen und herunterladen',
        description:
          'Wählen Sie die Ausgabe Orig, JPG, PNG oder WebP, stellen Sie die Qualität (10 %–100 %) für verlustbehaftete Dateien ein und klicken Sie auf „Bild mit Text herunterladen“.',
      },
    ],
    features: [
      {
        title: 'Mehrere ziehbare Textebenen',
        description:
          'Fügen Sie Überschriften, Beschriftungen und Hinweise hinzu und ziehen Sie jede Ebene unabhängig auf dem Canvas.',
      },
      {
        title: 'Umfangreiche Typografie-Steuerung',
        description:
          'Wählen Sie Schriftarten, Größen, Fett-/Kursiv-Stärken, Farben, Konturen und Schlagschatten.',
      },
      {
        title: 'Winkel- und Ausrichtungssteuerung',
        description:
          'Drehen Sie jede Textebene geschmeidig von −180° bis +180°.',
      },
      {
        title: 'Sauberer Export in voller Auflösung',
        description:
          'Keine hinzugefügten Wasserzeichen – laden Sie direkt als JPG, PNG oder WebP herunter.',
      },
    ],
    faqs: [
      {
        question: 'Kann ich mehrere separate Überschriften oder Meme-Beschriftungen oben und unten hinzufügen?',
        answer:
          'Ja, klicken Sie auf die Schaltfläche „Hinzufügen“ neben dem Tab „Text 1“, um Text 2, Text 3 und so viele unabhängige Textebenen zu erstellen, wie Sie benötigen. Jede Ebene behält ihre eigene Schriftart, Farbe, Größe, Drehung, Kontur und Ziehposition auf dem Bild.',
      },
      {
        question: 'Welche Schriftarten sind im Editor „Text zu Bild hinzufügen“ enthalten?',
        answer:
          'Sie können sofort zwischen fünf zuverlässigen systemabgestimmten Familien wechseln: Inter / Saubere Sans, Impact / Meme-Display, Georgia / Klassische Serif, Courier / Monospace und Trebuchet / Abgerundete Sans. Alle fünf funktionieren zuverlässig offline, ohne auf externe Schrift-Downloads zu warten.',
      },
      {
        question: 'Wie erstelle ich klassischen weißen Meme-Text mit dickem dunklem Rand?',
        answer:
          'Wählen Sie Impact / Meme-Display, lassen Sie Fett aktiviert und die Füllung auf Weiß (#ffffff) und behalten Sie die Textkontur mit einer dunklen Konturfarbe wie #0f172a oder Schwarz aktiviert. Ziehen Sie den Regler für die Konturstärke auf 6–10 für einen unverwechselbaren Kontrast.',
      },
      {
        question: 'Erzeugt das Drücken von Enter im Feld „Textinhalt“ mehrzeilige Beschriftungen?',
        answer:
          'Ja, „Textinhalt“ unterstützt vollständige mehrzeilige Zeilenumbrüche, die mit einem Zeilenhöhen-Multiplikator von 1,22 sauber zentriert werden. So lassen sich mehrzeilige Zitate, Tutorial-Hinweise oder lange Beschriftungen mühelos stapeln, ohne separate Ebenen pro Zeile zu erstellen.',
      },
      {
        question: 'Wie wähle ich eine bestimmte Ebene aus und bewege sie, wenn ich mehrere auf dem Foto habe?',
        answer:
          'Klicken Sie im rechten Bereich auf einen Ebenen-Tab (Text 1, Text 2 usw.), um die aktiven Typografie-Steuerungen zu wechseln. Sie können auch direkt in der Nähe eines beliebigen Textblocks auf dem Canvas klicken – der Editor greift die Ebene, die Ihrem Zeiger am nächsten ist.',
      },
      {
        question: 'Kann ich Text diagonal in individuellen Winkeln neigen?',
        answer:
          'Ja, ziehen Sie den Drehungsregler für jede aktive Textebene auf einen beliebigen Wert zwischen −180° und +180°. Jeder Block dreht sich geschmeidig um seine Mittelkoordinaten – für geneigte Stempel, Hinweise oder verspielte Beschriftungen.',
      },
      {
        question: 'Wie skaliert die Textgröße (2 %–22 %) bei kleinen im Vergleich zu 4K-Fotos?',
        answer:
          'Die Schriftgröße skaliert als Prozentsatz der Breite Ihres Ausgabebildes (mit einer Mindestuntergrenze von 12 px). Das hält die Proportionen zwischen der Vorschau auf dem Bildschirm und exportierten Dateien in voller Auflösung konsistent.',
      },
      {
        question: 'Werden Screenshots oder Familienfotos beim Hinzufügen von Beschriftungen irgendwo hochgeladen?',
        answer:
          'Nein, die Canvas-Komposition rendert jede Schriftglyphe, jeden Strich, Schatten und jede Drehung lokal in Ihrem Browser-Tab. Ihre Grundbilder und fertigen Grafiken verlassen niemals Ihr Gerät.',
      },
      {
        question: 'Was passiert mit transparenten PNG-Stickern, wenn ich mit hinzugefügtem Text exportiere?',
        answer:
          'Bei der Wahl von Orig (von PNG/WebP), PNG oder WebP bleiben transparente Bereiche um Ihre Grafik herum sauber erhalten. Wenn Sie die JPG-Ausgabe wählen, werden transparente Regionen geschmeidig auf einen Vollweiß-Hintergrund abgeflacht.',
      },
      {
        question: 'Wie entferne ich eine zusätzliche Textebene, ohne das gesamte Bild zu löschen?',
        answer:
          'Wählen Sie den Ebenen-Tab, den Sie verwerfen möchten, und klicken Sie auf das Papierkorb-Symbol neben der Schaltfläche „Hinzufügen“. Wenn nur eine Ebene übrig bleibt, blendet das Leeren des Textfelds sie vorübergehend aus, ohne den Editor zu verlieren.',
      },
      {
        question: 'Kann ich das Hintergrundfoto ändern, ohne meine gestalteten Textebenen zu verlieren?',
        answer:
          'Klicken Sie in der Vorschau-Kopfzeile auf „Bild ändern“, um zur Ablagezone zurückzukehren und eine andere Datei zu laden. Ihre bestehenden Textebenen und Stile bleiben bereit, sodass Sie dieselbe Beschriftungseinstellung für mehrere Fotos wiederverwenden können.',
      },
      {
        question: 'Welche Bilddateiformate kann ich öffnen, um Text hinzuzufügen?',
        answer:
          'Der Editor öffnet JPG-, PNG-, WebP-, iPhone-HEIC/HEIF-, GIF-, BMP- und SVG-Dateien mit bis zu 20 MB pro Datei. Animierte GIFs werden als ein einzelner statischer Frame mit Beschriftung exportiert.',
      },
      {
        question: 'Kann ich Textebenen mit einem Smartphone-Touchscreen ziehen und ablegen?',
        answer:
          'Ja, das Ziehen auf dem Canvas basiert auf Touch-none-Zeigerereignissen, die für Finger und Stifte konzipiert sind. Sie können Beschriftungen in Safari auf iOS und Chrome auf Android sauber neu positionieren, ohne die Seite zu scrollen.',
      },
      {
        question: 'Wie verbessert der Schlagschatten die Lesbarkeit zusammen mit der Textkontur?',
        answer:
          'Der Schlagschatten wirft einen weichen dunklen Unschärfebereich, der proportional zu Ihrer Schriftgröße skaliert ist, unter die Buchstaben. Wenn Sie den Schlagschatten ohne Kontur aktivieren, entstehen saubere redaktionelle Untertitel, während die Kombination beider die Lesbarkeit über geschäftigen Texturen maximiert.',
      },
      {
        question: 'Kann ich einen Screenshot mit Strg+V einfügen, um ihn schnell zu beschriften?',
        answer:
          'Ja, kopieren Sie einen beliebigen Screenshot oder eine Folie und drücken Sie Strg+V (oder Cmd+V auf dem Mac) auf der Seite, bevor Sie eine Datei laden. Er wird direkt in den Canvas geladen und ist bereit für Texthinweise und sauberen Export.',
      },
      {
        question: 'Warum verschwindet der Qualitätsregler, wenn PNG gewählt wird?',
        answer:
          'PNG kodiert Bilder verlustfrei ohne einen prozentualen Komprimierungsqualitätsregler. Wählen Sie Orig (für JPEGs), JPG oder WebP, wenn Sie die Exportqualität von 10 % bis 100 % anpassen möchten.',
      },
      {
        question: 'Entfernt das Hinzufügen von Text über Canvas versteckte Kamera-EXIF-GPS-Tags?',
        answer:
          'Ja, das Zeichnen auf ein frisches HTML5-Canvas erzeugt eine brandneue Bitmap, ohne EXIF-Header zu kopieren. Ihr GPS-Standort und Ihre Kamerametadaten bleiben aus dem gespeicherten Export entfernt.',
      },
      {
        question: 'Welcher Dateiname wird beim Herunterladen eines beschrifteten Fotos gespeichert?',
        answer:
          'Heruntergeladene Dateien behalten Ihren bereinigten Basisdateinamen und hängen _text plus Ihre gewählte Endung an (wie meme_text.jpg). Das verhindert, dass Ihr ursprüngliches unbeschriftetes Bild überschrieben wird.',
      },
      {
        question: 'Worin unterscheidet sich dies vom Bild-Wasserzeichen-Tool?',
        answer:
          'Das Bild-Wasserzeichen-Tool konzentriert sich auf einzelne oder diagonal gekachelte Markenstempel und hochgeladene PNG-/SVG-Logos. „Text zu Bild hinzufügen“ bietet stattdessen mehrere unabhängige ziehbare Textebenen, 5 Schriftarten, Fett-/Kursiv-Steuerungen und dicke Meme-Konturen.',
      },
      {
        question: 'Platziert CompressMyPic ein Logo oder Wasserzeichen auf hier exportierten Bildern?',
        answer:
          'Nein, Ihre heruntergeladenen Dateien enthalten nur Ihr Bild und die exakten Textebenen, die Sie erstellt haben. Alles läuft kostenlos in Ihrem Browser – ohne Wasserzeichen und ohne Registrierung.',
      },
    ],
    relatedSlugs: ['/image-watermark', '/image-border-generator', '/image-filters', '/'],
  },
  {
    slug: '/image-border-generator',
    name: 'Bildrahmen-Generator',
    shortDescription: 'Einfarbige oder Verlaufsrahmen, Rahmen, abgerundete Ecken und Schatten hinzufügen.',
    category: 'crop-edit',
    seoTitle: 'Bildrahmen-Generator – Einfarbig, Verlauf & Polaroid',
    seoDescription:
      'Rahmen Sie Fotos mit unserem kostenlosen Bildrahmen-Generator ein: einfarbige, lineare Verlaufs- oder Polaroid-Rahmen, abgerundete Ecken und Schatten – lokal.',
    h1: 'Kostenloser Bildrahmen-Generator',
    subtitle:
      'Für Fotografen, Etsy-Shop-Besitzer, Portfolio-Designer und Social-Media-Ersteller: Unser kostenloser Bildrahmen-Generator umhüllt jedes Bild mit scharfen Galerie-Passepartouts, zweifarbigen Verläufen oder klassischen Polaroid-Rahmen. Stimmen Sie Rahmendicke, innere und äußere Eckradien sowie Schlagschatten direkt im Browser ab, bevor Sie exportieren.',
    howToSteps: [
      {
        title: 'Bild zum Rahmen ablegen oder auswählen',
        description:
          'Laden Sie ein beliebiges JPG-, PNG-, WebP-, HEIC-, GIF-, BMP- oder SVG-Foto mit bis zu 20 MB hoch oder fügen Sie es mit Strg+V ein.',
      },
      {
        title: 'Schnellrahmen-Voreinstellung oder Rahmenstil wählen',
        description:
          'Klicken Sie auf die Voreinstellungen „Klassisches Weiß“, „Polaroid-Rahmen“, „Dunkles Studio“ oder „Verlaufsglanz“ oder wechseln Sie manuell zwischen den Stilen Einfarbig, Verlauf und Polaroid.',
      },
      {
        title: 'Rahmenfarben und Verlaufswinkel anpassen',
        description:
          'Legen Sie im Einfarbig-/Polaroid-Modus die Rahmenfarbe fest oder wählen Sie für lineare Verlaufsrahmen Startfarbe, Endfarbe und Verlaufswinkel (0°–360°).',
      },
      {
        title: 'Rahmengröße und Eckradien anpassen',
        description:
          'Ziehen Sie den Regler für Rahmengröße (1 %–25 %) zusammen mit den unabhängigen Reglern für Rahmenradius (0 %–30 %) und Fotoradius (0 %–30 %).',
      },
      {
        title: 'Schlagschatten wählen und Format in der Vorschau prüfen',
        description:
          'Wählen Sie keinen, weichen, mittleren oder tiefen Schlagschatten und wählen Sie die PNG-, JPG- oder WEBP-Ausgabe, während Sie die Schachbrettvorschau prüfen.',
      },
      {
        title: 'Gerahmtes Bild herunterladen',
        description:
          'Klicken Sie auf „Gerahmtes Bild herunterladen“, um Rahmen und Schatten in voller Quellauflösung zu rendern und als <name>_framed zu speichern.',
      },
    ],
    features: [
      {
        title: 'Einfarbige und Verlaufsrahmen',
        description:
          'Erstellen Sie saubere Galerie-Passepartouts oder lebendige zweifarbige lineare Verlaufsrahmen.',
      },
      {
        title: 'Voreingestellte Rahmenstile',
        description:
          'Wenden Sie sofort Polaroid-, Galerie-Weiß-, Dunkles-Studio- oder Sonnenuntergangs-Verlaufs-Looks an.',
      },
      {
        title: 'Eckradius und Schlagschatten',
        description:
          'Runden Sie die inneren Foto- oder äußeren Rahmenecken ab und fügen Sie realistische Schatten hinzu.',
      },
      {
        title: 'Verlustfreie PNG-Unterstützung',
        description:
          'Exportieren Sie als PNG, um transparente Außenecken um Schatten und abgerundete Rahmen zu erhalten.',
      },
    ],
    faqs: [
      {
        question: 'Wie unterscheidet sich der Rahmenstil „Polaroid“ von einem Standardrahmen in Einfarbig?',
        answer:
          'Einfarbige Rahmen umhüllen alle vier Kanten Ihres Fotos mit gleichmäßigem Abstand, während Polaroid entlang der Unterkante eine 3,2-fach höhere weiße Rahmenhöhe hinzufügt, um klassische Sofortbild-Abzüge nachzubilden. Ein Klick auf die Voreinstellung „Polaroid-Rahmen“ konfiguriert saubere Proportionen mit einem Klick.',
      },
      {
        question: 'Warum verschwinden Schlagschatten, wenn ich das Ausgabeformat auf JPG umstelle?',
        answer:
          'JPG-Dateien unterstützen keinen Alphatransparenzkanal, auf dem weiche halbtransparente Schatten sauber auf Seitenhintergründe auslaufen könnten. Unser Renderer erhält die Schlagschatten-Auffüllung in transparenten PNG- und WebP-Exporten, während er auf Vollweiß-JPGs scharfe Rahmenkanten beibehält.',
      },
      {
        question: 'Was ist der Unterschied zwischen Rahmenradius und Fotoradius?',
        answer:
          'Der Rahmenradius (0 %–30 %) krümmt die Außenecken des farbigen Rahmens selbst, während der Fotoradius (0 %–30 %) die Innenecken Ihrer Fotografie innerhalb dieses Passepartouts krümmt. Wenn Sie beide abstimmen oder kontrastieren, können Sie elegante UI-Karten oder scharfe Galerie-Passepartouts erstellen.',
      },
      {
        question: 'Wie berechnet der Verlaufsrahmen „Verlaufsglanz“ Winkel und Farben?',
        answer:
          'Bei der Auswahl des Stils „Verlauf“ werden Startfarbe, Endfarbe und ein Verlaufswinkel-Regler von 0°–360° angezeigt, der einen vollständigen diagonalen oder gerichteten linearen Verlauf hinter Ihrem Foto zeichnet. Sie können unter „Schnellrahmen-Voreinstellungen“ auf „Verlaufsglanz“ klicken, um sofort einen Blau-zu-Smaragd-Kartenstil zu erhalten.',
      },
      {
        question: 'Schneidet das Hinzufügen eines Rahmens einen Rand meines Originalfotos ab?',
        answer:
          'Nein, der Bildrahmen-Generator erweitert den Canvas nach außen um Ihre volle Originalbildbreite und -höhe, statt Ihre Pixel zu bedecken. Nur wenn Sie den Fotoradius über 0 % einstellen, werden die vier inneren Bildecken sanft abgerundet.',
      },
      {
        question: 'Wie wird die Rahmengröße (1 %–25 %) bei hohen im Vergleich zu breiten Fotos berechnet?',
        answer:
          'Die Rahmendicke wird als Prozentsatz der kürzeren Dimension Ihres Bildes berechnet – min(Breite, Höhe). Dadurch bleiben obere, untere und seitliche Ränder sowohl bei 16:9-Bannern als auch bei 4:5-Porträts gleichmäßig ausgewogen.',
      },
      {
        question: 'Was konfigurieren die vier Schnellrahmen-Voreinstellungen automatisch?',
        answer:
          '„Klassisches Weiß“ setzt ein 10-%-weißes Galerie-Passepartout mit weichem Schatten, während „Polaroid-Rahmen“ einen Sofortbild-Unterrand hinzufügt. „Dunkles Studio“ wendet einen Schieferrahmen an und „Verlaufsglanz“ erzeugt einen 135°-Blau-zu-Smaragd-Verlaufsrahmen.',
      },
      {
        question: 'Warum zeigt die Vorschau ein grau-weißes Schachbrettmuster um meinen Rahmen?',
        answer:
          'Dieses Schachbrett visualisiert echte transparente Pixel außerhalb abgerundeter Rahmenecken und innerhalb weicher Schlagschatten. Wenn Sie als PNG oder WebP exportieren, bleiben diese Schachbrettbereiche auf jeder Website oder Präsentationsfolie vollständig durchsichtig.',
      },
      {
        question: 'Läuft das Rahmen lokal, ohne meine Fotografie hochzuladen?',
        answer:
          'Ja, Verlaufszeichnung, Eckenbeschneidung, Schattenrendering und Blob-Export geschehen strikt in HTML5-Canvas auf Ihrem Gerät. Nichts wird jemals auf externe Server hochgeladen.',
      },
      {
        question: 'Welche Bilddateiformate können in den Rahmen-Generator geladen werden?',
        answer:
          'Sie können JPG-, PNG-, WebP-, iPhone-HEIC/HEIF-, GIF-, BMP- und SVG-Bilder mit jeweils bis zu 20 MB ablegen. Animierte GIFs werden als gerahmter statischer Anfangsframe exportiert.',
      },
      {
        question: 'Kann ich die Rahmenfarbe einer Schnellrahmen-Voreinstellung nach dem Klick ändern?',
        answer:
          'Ja, Voreinstellungen befüllen lediglich die Steuerungen für Rahmenstil, Farbe, Radius und Schatten für Sie. Sie können danach sofort die Rahmenfarbe anpassen, Ränder in der Größe ändern oder den Schlagschatten wechseln.',
      },
      {
        question: 'Wie erstelle ich einen dunklen Anthrazit- oder Pastell-Galerierahmen ohne Schatten?',
        answer:
          'Wählen Sie den Stil „Einfarbig“, klicken Sie auf „Rahmenfarbe“, um einen beliebigen individuellen Hex-Farbton auszuwählen, und ziehen Sie sowohl Rahmenradius als auch Fotoradius auf 0 %. Klicken Sie dann unter „Schlagschatten“ auf „keinen“ für scharfe flache Rahmen.',
      },
      {
        question: 'Ist mein heruntergeladenes gerahmtes Bild in voller Auflösung?',
        answer:
          'Ja, die Vorschau auf dem Bildschirm wird lediglich verkleinert, damit sie bequem in Ihr Layout passt. Beim Klick auf „Gerahmtes Bild herunterladen“ wird ein brandneuer Canvas mit der exakten Pixelauflösung Ihres Originalfotos plus dem skalierten Rahmen und Schatten erstellt.',
      },
      {
        question: 'Sollte ich PNG oder WebP exportieren, wenn ich transparente abgerundete Rahmenecken behalten möchte?',
        answer:
          'Wählen Sie PNG, wenn Sie verlustfreie Schärfe um dünne Rahmen und Druck-Assets möchten. Wählen Sie WebP für schnelle, leichte Website-Karten, die trotzdem transparente Außenecken und Schatten erhalten.',
      },
      {
        question: 'Kann ich einen Screenshot direkt aus der Zwischenablage einfügen, um ihn in einen Kartenrahmen zu hüllen?',
        answer:
          'Ja, drücken Sie Strg+V (oder Cmd+V auf dem Mac) in der Uploadzone, direkt nachdem Sie einen Screenshot erstellt haben. Die Kombination aus abgerundetem Rahmen, Verlaufsrahmen und mittlerem Schlagschatten verwandelt rohe Screenshots in polierte Präsentationsvisualisierungen.',
      },
      {
        question: 'Entfernt das Hinzufügen eines Rahmens versteckte Kamera-EXIF-GPS-Daten?',
        answer:
          'Ja, die Zusammensetzung auf HTML5-Canvas erzeugt eine saubere gerahmte Bitmap. Kamera-EXIF-Header der Quelle und GPS-Koordinaten werden automatisch aus Ihrem heruntergeladenen PNG, JPG oder WebP ausgeschlossen.',
      },
      {
        question: 'Wie lade ich beim Testen von Rahmen ein zweites Foto?',
        answer:
          'Klicken Sie in der oberen rechten Ecke des Vorschaubereichs auf „Bild ändern“, um ein weiteres Foto auszuwählen. Alle Ihre aktiven Rahmenfarben, Verlaufswinkel, Eckradien und Schattenauswahlen bleiben intakt.',
      },
      {
        question: 'Mit welchem Dateinamen wird das gerahmte Bild gespeichert?',
        answer:
          'Exporte behalten Ihren bereinigten Originaldateinamen und hängen _framed vor .png, .jpg oder .webp an. Zum Beispiel wird eine Datei namens portrait.jpg sauber als portrait_framed.png gespeichert.',
      },
      {
        question: 'Funktioniert der Rahmen-Generator auf mobilen Browsern reibungslos?',
        answer:
          'Ja, jede Voreinstellungskarte, jeder Bereichsregler und jede Farbauswahl funktioniert sauber in Safari auf iOS und Chrome auf Android. Sie können Polaroids oder Produktfotos direkt aus Ihrer Smartphone-Galerie rahmen.',
      },
      {
        question: 'Gibt es Wasserzeichen, Bezahlschranken oder Registrierungslimits bei gerahmten Fotos?',
        answer:
          'Nein, jedes gerahmte Foto wird vollkommen wasserzeichenfrei und kostenlos heruntergeladen. Es gilt nur die standardmäßige Prüfung von 20 MB pro Datei, damit der lokale Browserspeicher reibungslos bleibt.',
      },
    ],
    relatedSlugs: ['/round-image-corners', '/add-background-to-image', '/image-filters', '/'],
  },
  {
    slug: '/round-image-corners',
    name: 'Bildecken abrunden',
    shortDescription: 'Ecken gleichmäßig oder pro Ecke abrunden – mit transparenter PNG-Ausgabe.',
    category: 'crop-edit',
    seoTitle: 'Bildecken abrunden – Transparenter PNG-Ecken-Clipper',
    seoDescription:
      'Runden Sie Bildecken online kostenlos ab – mit gleichmäßigen oder pro-Ecke-Reglern, Kreis-Avatar-Voreinstellung und transparentem PNG- oder WebP-Export.',
    h1: 'Bildecken abrunden online',
    subtitle:
      'Für UI-Designer, Newsletter-Autoren, Blogger und Social-Media-Nutzer, die elegante Karten oder Avatare erstellen: Mit diesem Browser-Tool können Sie Bildecken sauber in voller Auflösung abrunden. Krümmen Sie alle vier Ecken gleichmäßig, schalten Sie individuelle Regler pro Ecke um oder rasten Sie mit transparenter PNG-/WebP-Ausgabe auf einen vollen Kreis ein.',
    howToSteps: [
      {
        title: 'Bild ablegen oder auswählen',
        description:
          'Laden Sie ein JPG-, PNG-, WebP-, HEIC-, GIF-, BMP- oder SVG-Foto mit bis zu 20 MB in die Ablagezone hoch oder fügen Sie es mit Strg+V ein.',
      },
      {
        title: '„Alle Ecken Radius“ anpassen oder „Vollkreis / Pille“ klicken',
        description:
          'Ziehen Sie den Regler „Alle Ecken Radius“ (0 %–100 %, mit exakter Pixelkrümmung) oder klicken Sie auf „Vollkreis / Pille“, um auf 100 % einzurasten.',
      },
      {
        title: 'Optional „Individuelle Steuerung pro Ecke“ aktivieren',
        description:
          'Aktivieren Sie „Individuelle Steuerung pro Ecke“, um die Ecken oben links, oben rechts, unten links und unten rechts unabhängig zu gestalten.',
      },
      {
        title: 'Transparente oder einfarbige Außenfüllung wählen',
        description:
          'Behalten Sie „Transparent (PNG/WebP)“ für durchsichtige abgerundete Ecken aktiviert oder wechseln Sie zu „Einfarbige Farbe“ und wählen Sie einen beliebigen Hex-Hintergrund.',
      },
      {
        title: 'Ausgabeformat wählen (PNG, WebP oder JPG)',
        description:
          'Wählen Sie PNG für verlustfreie Alpha-Kanten, WebP für leichtere transparente Web-Assets oder JPG für opake Hintergründe mit einfarbigen Ecken.',
      },
      {
        title: 'Abgerundetes Bild herunterladen',
        description:
          'Prüfen Sie die Schachbrettvorschau und klicken Sie auf „Abgerundetes Bild herunterladen“, um <name>_rounded in vollen Originaldimensionen zu exportieren.',
      },
    ],
    features: [
      {
        title: 'Gleichmäßiger und pro-Ecke-Radius',
        description:
          'Runden Sie alle Ecken gleichmäßig bis zur Pille/zum Kreis ab oder gestalten Sie jede Ecke unabhängig.',
      },
      {
        title: 'Echte transparente Ecken',
        description:
          'Exportieren Sie PNG oder WebP mit sauberer, kantengeglätteter Alphatransparenz außerhalb der abgerundeten Maske.',
      },
      {
        title: 'Optionaler einfarbiger Hintergrund',
        description:
          'Füllen Sie Außenecken mit einer beliebigen individuellen Hex-Farbe, wenn Sie für JPG exportieren.',
      },
      {
        title: 'Ausgabe in voller Auflösung',
        description:
          'Behält Ihre exakten Originalpixeldimensionen bei und beschneidet die Ecken sauber.',
      },
    ],
    faqs: [
      {
        question: 'Warum muss ich PNG oder WebP verwenden, damit abgerundete Ecken durchsichtig bleiben?',
        answer:
          'Das JPEG-Format unterstützt keinen Alphatransparenzkanal, daher würden Ecken außerhalb einer abgerundeten Maske immer Vollweiß oder opak werden. PNG und WebP erhalten eine geschmeidige 8-Bit-kantengeglättete Transparenz, sodass sich Ihre abgerundete Karte oder Ihr Avatar nahtlos über jede Webseiten- oder Folienfarbe legt.',
      },
      {
        question: 'Wie funktioniert die Abkürzung „Vollkreis / Pille“ bei quadratischen im Vergleich zu rechteckigen Fotos?',
        answer:
          'Ein Klick auf „Vollkreis / Pille“ setzt „Alle Ecken Radius“ auf 100 % der Hälfte der kürzeren Seite – min(Breite, Höhe) / 2. Bei einem quadratischen 1:1-Bild schneidet das einen perfekten Kreis; bei einem breiteren Banner bildet es eine geschmeidige Stadion-Pillenform.',
      },
      {
        question: 'Was passiert, wenn ich nur die oberen beiden Ecken für eine Blogkarte abrunden möchte?',
        answer:
          'Aktivieren Sie „Individuelle Steuerung pro Ecke“, um vier separate Regler für oben links, oben rechts, unten links und unten rechts freizuschalten (jeweils 0 %–100 %). Stellen Sie unten links und unten rechts auf 0 % ein und runden Sie nur die oberen Ecken ab.',
      },
      {
        question: 'Wie erstelle ich zuerst ein quadratisches Porträt, wenn mein Foto rechteckig ist?',
        answer:
          'Öffnen Sie unser Bild-Zuschneider-Tool (verlinkt unter „Kostenlose verwandte Bild-Tools“ unten), wählen Sie die Seitenverhältnis-Voreinstellung 1:1 und laden Sie Ihren quadratischen Zuschnitt herunter. Legen Sie dann diese quadratische Datei hier ab und klicken Sie auf „Vollkreis / Pille“ für einen scharfen runden Avatar.',
      },
      {
        question: 'Was bedeutet die Live-Pixelanzeige neben „Alle Ecken Radius“?',
        answer:
          'Neben dem Regler von 0 %–100 % berechnet das Label die exakte Eckenkrümmung in echten Ausgabepixeln (zum Beispiel 120px (24 %)) relativ zu Ihren Originalbilddimensionen. Das macht es einfach, CSS-border-radius-Werte abzugleichen.',
      },
      {
        question: 'Wann sollte ich unter „Außeneckenfüllung“ „Einfarbige Farbe“ statt „Transparent“ wählen?',
        answer:
          'Wählen Sie „Einfarbige Farbe“, wenn Sie ein leichtes JPG exportieren, einen bestimmten Dark-Mode-Kartenhintergrund abgleichen oder in eine App hochladen möchten, die transparentes PNG-Alpha durch Schwarz ersetzt. Sie können Weiß oder einen beliebigen exakten Hex-Code mit dem Farbfeld wählen.',
      },
      {
        question: 'Was passiert automatisch, wenn ich bei ausgewähltem JPG auf „Transparent (PNG/WebP)“ klicke?',
        answer:
          'JPG-Dateien können keine Alphatransparenz in Außenecken speichern. Ein Klick auf „Transparent (PNG/WebP)“ schaltet das Ausgabeformat daher automatisch auf PNG um, damit Ihre abgerundeten Ecken durchsichtig bleiben.',
      },
      {
        question: 'Verkleinert das Abrunden von Ecken die Breite und Höhe meines Fotos?',
        answer:
          'Nein, das exportierte Bild behält Ihre exakte Originalbreite und -höhe in Pixeln. Nur die äußeren Eckbereiche werden mithilfe quadratischer Eckkurven geschmeidig beschnitten.',
      },
      {
        question: 'Warum sehen gekrümmte Kanten glatt statt gezackt aus?',
        answer:
          'HTML5-Canvas beschneidet entlang von quadratischen Bézier-Vektorpfaden mit aktivierter hochwertiger Glättung. Das erzeugt eine weiche Subpixel-Kantenglättung entlang der Kurven, die sich natürlich gegen dunkle oder helle Seitenhintergründe einfügt.',
      },
      {
        question: 'Werden Porträts oder Profil-Avatare beim Beschneiden der Ecken auf einen Server hochgeladen?',
        answer:
          'Nein, Pfadbeschneidung und PNG-/WebP-Kodierung laufen strikt in Ihrem Browser-Tab über HTML5-Canvas. Persönliche Fotos und Markenlogos verlassen niemals Ihr Gerät.',
      },
      {
        question: 'Welche Eingabeformate können in diesem Tool abgerundet werden?',
        answer:
          'Legen Sie JPG-, PNG-, WebP-, iPhone-HEIC/HEIF-, GIF-, BMP- oder SVG-Dateien mit jeweils bis zu 20 MB ab. Animierte GIFs exportieren einen abgerundeten statischen Anfangsframe.',
      },
      {
        question: 'Kann ich einen Screenshot aus der Zwischenablage direkt einfügen, um seine Ecken abzurunden?',
        answer:
          'Ja, erstellen Sie einen Screenshot und drücken Sie Strg+V (oder Cmd+V auf dem Mac), wenn die Uploadzone aktiv ist. Er öffnet sich direkt in der Schachbrettvorschau und ist bereit zum Abrunden der Ecken.',
      },
      {
        question: 'Was passiert mit meinen Werten pro Ecke, wenn ich den Pro-Ecke-Modus deaktiviere?',
        answer:
          'Das Deaktivieren von „Individuelle Steuerung pro Ecke“ kehrt den Canvas zum einzelnen Regler „Alle Ecken Radius“ zurück, sodass alle vier Ecken gleichmäßig bleiben. Wenn Sie ihn erneut aktivieren, werden alle vier Eckregler sauber aus Ihrem aktuellen gleichmäßigen Radius gesetzt.',
      },
      {
        question: 'Entfernt das Abrunden von Ecken auch eingebettete EXIF-GPS-Tags?',
        answer:
          'Ja, das Rendern von Pixeln über einen sauberen Canvas-Clip entfernt ursprüngliche JPEG-EXIF- und GPS-Header automatisch. Das schützt Ihre Privatsphäre, wann immer Sie abgerundete Avatare oder Produktvorschaubilder online teilen.',
      },
      {
        question: 'Wie ersetze ich das aktuelle Bild und behalte dabei meine Eckradius-Einstellung?',
        answer:
          'Klicken Sie oberhalb der Vorschaufläche auf „Bild ändern“, um ein neues Foto hochzuladen. Ihr gleichmäßiger Radius, Ihre Werte pro Ecke, der Füllmodus und das Ausgabeformat bleiben für schnelle wiederholte Exporte aktiv.',
      },
      {
        question: 'Welcher Dateiname wird heruntergeladenen abgerundeten Bildern zugewiesen?',
        answer:
          'Der Downloader behält Ihren bereinigten Originaldateinamen und fügt _rounded vor .png, .webp oder .jpg hinzu. Zum Beispiel wird avatar.jpg sauber als avatar_rounded.png heruntergeladen.',
      },
      {
        question: 'Sollte ich beim Export abgerundeter Webgrafiken PNG oder WebP wählen?',
        answer:
          'Wählen Sie PNG für maximale Kompatibilität mit älteren Apps und verlustfreie Kantenschärfe. Wählen Sie WebP, wenn Sie wesentlich kleinere Website-Assets möchten, die trotzdem die volle Alpha-Eckentransparenz behalten.',
      },
      {
        question: 'Kann ich „Bildecken abrunden“ in mobilen Browsern auf iOS oder Android nutzen?',
        answer:
          'Ja, alle Regler, Kontrollkästchen und Formatumschalter passen sich in Safari und Chrome reibungslos an mobile Bildschirme an. Sie können Ecken auf Porträts direkt aus Ihrer Handy-Galerie abrunden.',
      },
      {
        question: 'Worin unterscheidet sich dieses Tool vom Bildrahmen-Generator?',
        answer:
          '„Bildecken abrunden“ beschneidet Ihr Foto sauber in seinen Originaldimensionen, ohne äußere Auffüllung hinzuzufügen. Der Bildrahmen-Generator umhüllt Ihr Bild stattdessen mit farbigen Passepartouts, Verläufen oder Polaroid-Rahmen.',
      },
      {
        question: 'Gibt es Wasserzeichen, Gebühren oder Tageslimits bei abgerundeten Exporten?',
        answer:
          'Nein, Sie können Ecken auf unbegrenzt vielen Fotos mit bis zu 20 MB pro Datei vollkommen kostenlos abrunden. Auf Downloads erscheinen niemals Wasserzeichen, Konten oder Bezahlschranken.',
      },
    ],
    relatedSlugs: ['/image-border-generator', '/image-cropper', '/add-background-to-image', '/'],
  },
  {
    slug: '/image-brightness-editor',
    name: 'Bildhelligkeits-Editor',
    shortDescription: 'Fotos mit Live-Vorher-/Nachher-Vorschau aufhellen oder abdunkeln.',
    category: 'crop-edit',
    seoTitle: 'Bildhelligkeit anpassen – Fotos aufhellen & abdunkeln',
    seoDescription:
      'Passen Sie die Fotobeleuchtung mit unserem kostenlosen Bildhelligkeits-Editor an: Regler von −100 % bis +100 %, Voreinstellungen und privater Export im Browser.',
    h1: 'Kostenloser Bildhelligkeits-Editor online',
    subtitle:
      'Für Fotografen, die unterbelichtete Aufnahmen korrigieren, Immobilienmakler, die Räume aufhellen, und Händler, die Produktfotos aufpolieren: Unser Browser-Bildhelligkeits-Editor passt die Beleuchtung geschmeidig an, ohne Originale hochzuladen. Stellen Sie den Regler von −100 % bis +100 % ein, testen Sie sofortige Beleuchtungsvoreinstellungen und prüfen Sie Ergebnisse mit Live-Split-Vergleich.',
    howToSteps: [
      {
        title: 'Foto zum Aufhellen oder Abdunkeln ablegen oder auswählen',
        description:
          'Laden Sie ein beliebiges JPG-, PNG-, WebP-, HEIC-, GIF-, BMP- oder SVG-Bild mit bis zu 20 MB in die Ablagezone hoch oder fügen Sie es mit Strg+V ein.',
      },
      {
        title: 'Regler „Helligkeitsstufe“ oder Schnellvoreinstellungen anpassen',
        description:
          'Bewegen Sie „Helligkeitsstufe“ von −100 % Dunkler bis +100 % Heller oder klicken Sie auf Dunkel (−30 %), Gedimmt (−15 %), Original (0 %), Hell (+15 %), Lebhaft (+30 %) oder High Key (+50 %).',
      },
      {
        title: 'Ansichten „Nachher“, „Vorher“ und „Split-Vergleich“ vergleichen',
        description:
          'Wechseln Sie zwischen den Tabs „Nachher“, „Vorher“ und „Split-Vergleich“ – oder starten Sie den „Vollbild-Vergleich“, um Schatten- und Highlight-Details zu prüfen.',
      },
      {
        title: 'Ausgabeformat und Qualität wählen',
        description:
          'Wählen Sie die Ausgabe Original, JPG, PNG oder WEBP und passen Sie den Qualitätsregler (10 %–100 %) an, wenn Sie verlustbehaftete Formate speichern.',
      },
      {
        title: 'Bearbeitetes Bild herunterladen',
        description:
          'Klicken Sie auf „Bearbeitetes Bild herunterladen“, um die Helligkeitskurve in voller Originalauflösung zu verarbeiten und als <name>_brightness lokal zu speichern.',
      },
    ],
    features: [
      {
        title: 'Pixelanpassung in Echtzeit',
        description:
          'Sofortige Vorschau in Desktop- und mobilen Browsern ohne Server-Roundtrips.',
      },
      {
        title: 'Schnelle Belichtungsvoreinstellungen',
        description:
          'Testen Sie die Voreinstellungen Dunkel, Gedimmt, Hell, Lebhaft und High Key mit einem Klick.',
      },
      {
        title: 'Vorher-/Nachher-Prüfung',
        description:
          'Vergleichen Sie das bearbeitete Foto nebeneinander oder mit dem interaktiven Vergleichsregler.',
      },
      {
        title: 'Private Verarbeitung auf dem Gerät',
        description:
          'Ihre persönlichen Fotos bleiben strikt in Ihrem Browser.',
      },
    ],
    faqs: [
      {
        question: 'Wie verändert der Regler „Helligkeitsstufe“ Pixel, ohne Farben sofort auszuwaschen?',
        answer:
          'Das Bewegen der Helligkeitsstufe zwischen −100 % Dunkler und +100 % Heller passt die Luminanz in Echtzeit geschmeidig über den gesamten Rahmen in HTML5-Canvas an. Mit dem Split-Vergleich oder dem Vollbild-Vergleich können Sie dunkle Schatten aufhellen, ohne helle Weißtöne zu beschneiden.',
      },
      {
        question: 'Warum wird mein Foto direkt nach dem Hochladen automatisch mit +15 % in der Vorschau gezeigt?',
        answer:
          'Der Editor startet bei Hell (+15 %), sodass Sie beim Laden sofort eine dezente Belichtungsanhebung sehen. Klicken Sie jederzeit auf Original (0 %) oder auf „Zurücksetzen“ in den Helligkeitssteuerungen, um vom neutralen Ausgangswert aus zu vergleichen.',
      },
      {
        question: 'Welche Schnellvoreinstellungen sind für das Testen der Belichtung mit einem Klick enthalten?',
        answer:
          'Sechs Voreinstellungen decken gängige Anpassungen ab: Dunkel (−30 %), Gedimmt (−15 %), Original (0 %), Hell (+15 %), Lebhaft (+30 %) und High Key (+50 %). Ein Klick auf eine beliebige Karte rastet den Regler sofort ein, während Sie weiterhin in 1-%-Schritten feinabstimmen können.',
      },
      {
        question: 'Worin unterscheiden sich „Nachher“, „Vorher“, „Split-Vergleich“ und „Vollbild-Vergleich“?',
        answer:
          '„Nachher“ zeigt Ihren bearbeiteten Canvas, „Vorher“ zeigt das unberührte Originalbild und „Split-Vergleich“ fügt einen interaktiven Vorher-/Nachher-Regler direkt in die Ansicht ein. Ein Klick auf „Vollbild-Vergleich“ rendert einen Blob in voller Auflösung und öffnet das detaillierte Vergleichsmodal.',
      },
      {
        question: 'Verringert das Aufhellen eines Fotos seine Pixelauflösung oder Dimensionen?',
        answer:
          'Nein, die Live-Vorschau skaliert lediglich bis zu 1000 px für eine geschmeidige interaktive Reglerreaktion. Ein Klick auf „Bearbeitetes Bild herunterladen“ rendert einen Canvas in voller Auflösung und erhält die exakte Originalbreite und -höhe Ihres Bildes.',
      },
      {
        question: 'Wann sollte ich ein Foto mit negativen Werten wie −15 % oder −30 % abdunkeln?',
        answer:
          'Negative Helligkeitswerte dämpfen überbelichtete Handyaufnahmen und harsches Fensterglanz sauber. Das Abdunkeln eines hellen Hero-Fotos schafft außerdem einen besseren Kontrast hinter weißen Overlay-Überschriften.',
      },
      {
        question: 'Behält der Bildhelligkeits-Editor transparente Hintergründe bei PNGs?',
        answer:
          'Ja, wenn Sie Original (für PNG/WebP) beibehalten oder PNG oder WebP wählen, bleiben transparente Bereiche sauber gegenüber der Schachbrettansicht erhalten. Wenn Sie die JPG-Ausgabe wählen, werden transparente Regionen geschmeidig auf Vollweiß abgeflacht.',
      },
      {
        question: 'Werden persönliche Familienfotos oder Kunden-Proofs auf externe Server hochgeladen?',
        answer:
          'Nein, Pixelhelligkeits-Transformationen und Formatkodierung laufen lokal in Ihrem Browser mit HTML5-Canvas. Ihre Bilder verlassen niemals Ihren Computer oder Ihr Smartphone.',
      },
      {
        question: 'Welche Bilddateiformate kann ich hier aufhellen oder abdunkeln?',
        answer:
          'Sie können JPG-, PNG-, WebP-, iPhone-HEIC/HEIF-, GIF-, BMP- und SVG-Dateien mit jeweils bis zu 20 MB öffnen. Animierte GIFs exportieren ihren aufgehellten Anfangsframe als statisches Bild.',
      },
      {
        question: 'Kann ich einen dunklen Screenshot direkt aus der Zwischenablage einfügen, um ihn aufzuhellen?',
        answer:
          'Ja, drücken Sie Strg+V (oder Cmd+V auf dem Mac) in der Uploadzone, nachdem Sie einen dunklen Screenshot oder eine Folie kopiert haben. Er wird direkt in die Live-Ansicht geladen und ist bereit zum Anpassen und Exportieren.',
      },
      {
        question: 'Was passiert, wenn ich die Helligkeit ganz auf +100 % schiebe?',
        answer:
          'Extreme positive Einstellungen hellen Mitteltöne stark auf und schieben Highlights in Richtung reines Weiß – nützlich für stilisierte High-Key-Grafiken, kann aber Highlight-Texturen in Porträts beschneiden. Zielen Sie für eine natürliche Belichtungskorrektur auf +10 % bis +35 %.',
      },
      {
        question: 'Kann ich nach dem Aufhellen eines Bildes Kontrast oder Farblebendigkeit anpassen?',
        answer:
          'Ja, laden Sie zuerst Ihr aufgehelltes Foto herunter und klicken Sie dann unter „Kostenlose verwandte Bild-Tools“ auf „Bildkontrast-Editor“ oder „Bildsättigungs-Editor“. Die Aufteilung der Anpassungen auf eigene Tools ermöglicht es Ihnen, Kontraststärke oder Farbreichtum präzise feinabzustimmen.',
      },
      {
        question: 'Warum verschwindet die Qualität, wenn ich unter „Ausgabeformat“ PNG auswähle?',
        answer:
          'PNG nutzt verlustfreie Komprimierung ohne ein variables prozentuales Qualitätsniveau. Wechseln Sie zu Original (für JPEGs), JPG oder WebP, um den Qualitätsregler von 10 %–100 % einzublenden und anzupassen (Standardwert 90 %).',
      },
      {
        question: 'Wie mache ich alle Helligkeitsänderungen schnell rückgängig?',
        answer:
          'Klicken Sie jederzeit auf die blaue Schaltfläche „Zurücksetzen“ in der oberen rechten Ecke der Helligkeitssteuerungen. Sie können auch direkt auf die Voreinstellungskarte Original (0 %) klicken, um direkt zur Nullanpassung zurückzukehren.',
      },
      {
        question: 'Entfernt der Export eines bearbeiteten Fotos Kamera-EXIF-GPS-Standorttags?',
        answer:
          'Ja, das Zeichnen auf ein frisches HTML5-Canvas erstellt eine saubere Ausgabe-Bitmap, ohne Kamera-EXIF-Daten zu kopieren. GPS-Koordinaten oder Geräteseriennummern werden automatisch entfernt.',
      },
      {
        question: 'Kann ich direkt nach dem Export ein weiteres Foto laden, ohne die Seite neu zu laden?',
        answer:
          'Ja, klicken Sie jederzeit auf das rote Papierkorb-Symbol (Bild entfernen) in der Vorschau-Werkzeugleiste. Damit wird das aktive Foto sauber gelöscht und Sie gelangen direkt zurück zur Upload-Ablagezone.',
      },
      {
        question: 'Welcher Dateiname wird beim Klick auf „Bearbeitetes Bild herunterladen“ verwendet?',
        answer:
          'Der Exporteur behält Ihren bereinigten Originaldateinamen und hängt _brightness plus Ihre gewählte Formatendung an. Zum Beispiel wird kitchen.jpg sauber als kitchen_brightness.jpg gespeichert.',
      },
      {
        question: 'Funktioniert der Editor zuverlässig in Safari auf dem iPhone und Chrome auf Android?',
        answer:
          'Ja, jede Voreinstellungskarte, jeder Bereichsregler und jede Split-Vergleichsansicht funktioniert auf mobilen Touchscreens reibungslos. Sie können dunkle Aufnahmen aus Ihrer Galerie direkt in Safari oder Chrome auf Ihrem Handy aufhellen.',
      },
      {
        question: 'Warum zeigt ein dunkles komprimiertes JPEG beim starken Aufhellen schwaches Blockrauschen?',
        answer:
          'Schatten in stark komprimierten JPEGs enthalten oft Quantisierungsartefakte, die in der Dunkelheit verborgen sind; das Anheben der Helligkeit um +40 % oder mehr macht vorhandenes Schattenrauschen sichtbar. Moderate Anpassungen (+15 % bis +30 %) erhalten sauberere Töne.',
      },
      {
        question: 'Gibt es Wasserzeichen, eine Kontoregistrierung oder ein Limit beim Aufhellen von Fotos?',
        answer:
          'Nein, der Bildhelligkeits-Editor ist vollkommen kostenlos – ohne Wasserzeichen oder Registrierungen. Sie können unbegrenzt viele Fotos mit bis zu 20 MB pro Datei aufhellen oder abdunkeln.',
      },
    ],
    relatedSlugs: ['/image-contrast-editor', '/image-saturation-editor', '/image-filters', '/'],
  },
  {
    slug: '/image-contrast-editor',
    name: 'Bildkontrast-Editor',
    shortDescription: 'Bildkontrast verstärken oder abmildern – mit Live-Vorher-Nachher-Vergleich.',
    category: 'crop-edit',
    seoTitle: 'Bildkontrast kostenlos anpassen – Kontrast-Editor online',
    seoDescription:
      'Passen Sie den Bildkontrast kostenlos online an: von −100 % bis +100 %, mit 6 Voreinstellungen und Vorher-Nachher-Vergleich – direkt im Browser, ohne Upload.',
    h1: 'Kostenloser Online-Bildkontrast-Editor',
    subtitle:
      'Für Fotografen, Online-Händler und Designer, die trübe oder flache Aufnahmen korrigieren: Mit diesem Bildkontrast-Editor im Browser vertiefen Sie Schatten und schärfen die Tontrennung in Sekunden. Wählen Sie Voreinstellungen per Klick, prüfen Sie die Vorschau im Splitscreen und exportieren Sie lokal – ohne Server-Upload.',
    howToSteps: [
      {
        title: 'Bild ablegen oder auswählen',
        description:
          'Laden Sie ein Foto im Format JPG, PNG, WebP, HEIC, GIF, BMP oder SVG mit bis zu 20 MB in die Dropzone des Editors, suchen Sie es auf der Festplatte oder fügen Sie es direkt mit Strg+V ein.',
      },
      {
        title: 'Live-Vorschau auf dem Canvas prüfen',
        description:
          'Ihr Foto wird auf einer responsiven Canvas-Vorschau geladen, die mit +20 % Kontrast startet, damit Sie sofort sehen, wie eine dezente Verstärkung die Tontrennung beeinflusst.',
      },
      {
        title: 'Kontrastregler oder Voreinstellungen anpassen',
        description:
          'Ziehen Sie den Kontrastregler von −100 % Flach bis +100 % Hoher Kontrast, oder klicken Sie auf Weich (−25 %), Gedämpft (−10 %), Original (0 %), Knackig (+20 %), Kräftig (+40 %) oder Dramatisch (+70 %).',
      },
      {
        title: 'Details mit den Vergleichswerkzeugen prüfen',
        description:
          'Wechseln Sie zwischen Nachher, Vorher und Splitscreen-Vergleich (mit dem vertikalen Trennschieberegler), oder klicken Sie auf Vollbildvergleich, um Schatten und Lichter aus der Nähe zu prüfen.',
      },
      {
        title: 'Format und Qualität wählen und herunterladen',
        description:
          'Wählen Sie unter Ausgabeformat Original, JPG, PNG oder WebP, stellen Sie die Qualität (10 %–100 %) für verlustbehaftete Formate ein und klicken Sie auf Bearbeitetes Bild herunterladen.',
      },
    ],
    features: [
      {
        title: 'Präzise Kontrastkurve',
        description: 'Erweitert oder komprimiert den Tonumfang stufenlos, ohne harte Farbverschiebungen.',
      },
      {
        title: 'Voreinstellungen per Klick',
        description: 'Probieren Sie sofort die Voreinstellungen Weich, Gedämpft, Knackig, Kräftig oder Dramatisch aus.',
      },
      {
        title: 'Interaktives Vorher-Nachher-Fenster',
        description: 'Prüfen Sie feine Schatten- und Lichtdetails vor dem Herunterladen.',
      },
      {
        title: '100 % clientseitig',
        description: 'Schnelle Verarbeitung im Browser – ohne Uploads und ohne Wasserzeichen.',
      },
    ],
    faqs: [
      {
        question: 'Welchen visuellen Effekt erzeugt es, wenn ich den Kontrastregler nach oben oder unten bewege?',
        answer:
          'Bewegen Sie den Regler über 0 %, werden dunkle Töne dunkler und helle Töne heller – rund um den Mittelpunkt –, sodass Motive sich deutlicher von trüben Hintergründen abheben. Unter 0 % werden Lichter und Schatten in Richtung neutrales Mittelgrau komprimiert, was eine weichere, matte Ästhetik ergibt.',
      },
      {
        question: 'Welche Schnellvoreinstellungen enthält das Panel „Kontraststeuerung"?',
        answer:
          'Sechs Voreinstellungen per Klick sind eingebaut: Weich (−25 %), Gedämpft (−10 %), Original (0 %), Knackig (+20 %), Kräftig (+40 %) und Dramatisch (+70 %). Ein Klick auf eine Voreinstellung stellt den Kontrastregler sofort ein und aktualisiert die Live-Vorschau auf dem Canvas.',
      },
      {
        question: 'Warum startet der Kontrast-Editor direkt nach dem Hochladen eines Fotos bei +20 %?',
        answer:
          'Der Editor startet bei Knackig (+20 %), damit Sie sofort eine aktive Tonverbesserung sehen, statt eines unveränderten Bildes. Klicken Sie jederzeit auf Original (0 %) oder auf Zurücksetzen oben in der Kontraststeuerung, um zur Einstellung null zurückzukehren.',
      },
      {
        question: 'Wie berechnet der Bildkontrast-Editor die Pixeländerungen?',
        answer:
          'Er wendet eine standardmäßige lineare Kontrastkurve Pixel für Pixel auf die RGB-Kanäle im HTML5-Canvas an und lässt den Alphakanal unberührt. Da die Berechnung direkt in ImageData läuft, werden Abweichungen durch CSS-Filter des Browsers in iOS Safari und mobilen Browsern vermieden.',
      },
      {
        question: 'Wie prüfe ich Schatten im Vorher-Nachher-Vergleich, ohne zu raten?',
        answer:
          'Nutzen Sie die Tabs Nachher, Vorher und Splitscreen-Vergleich direkt über der Vorschau, um eine Live-Trennlinie von 0 % bis 100 % über Ihr Bild zu ziehen. Für eine genauere Pixelprüfung klicken Sie auf Vollbildvergleich, um das Vergleichsfenster nebeneinander zu öffnen.',
      },
      {
        question: 'Beschneidet ein verstärkter Kontrast helle Wolken oder lässt er schwarze Schatten absaufen?',
        answer:
          'Wenn Sie den Kontrast stark in Richtung +70 % bis +100 % treiben, wandern fast weiße Lichter Richtung reines 255 und tiefe Schatten Richtung 0. Beobachten Sie im Splitscreen-Vergleich feine Texturen in hellen Hemden oder dunklen Haaren und gehen Sie auf +15 % bis +40 % zurück, wenn Beschneidung auftritt.',
      },
      {
        question: 'Welche Bilddateitypen kann ich im Kontrast-Editor öffnen?',
        answer:
          'Sie können JPG-, PNG-, WebP-, iPhone-HEIC/HEIF-, GIF-, BMP- und SVG-Dateien mit bis zu 20 MB pro Datei hochladen. HEIC-Fotos werden automatisch in Ihrem Browser decodiert, bevor sie auf dem Bearbeitungs-Canvas erscheinen.',
      },
      {
        question: 'Kann ich kontrastbearbeitete PNG-Logos mit transparentem Hintergrund speichern?',
        answer:
          'Ja: Wenn Sie bei einem transparenten PNG das Format Original behalten oder als Ausgabe PNG oder WebP wählen, bleibt die Alphatransparenz vollständig erhalten. Nur beim Wechsel des Ausgabeformats zu JPG werden transparente Bereiche auf einem einfarbigen weißen Hintergrund aufgefüllt.',
      },
      {
        question: 'Beeinträchtigt die herunterskalierte Vorschau die Auflösung meines Downloads?',
        answer:
          'Nein, die Vorschau auf dem Bildschirm begrenzt die Anzeigeskalierung auf 1.000 px an der längsten Seite, damit das Ziehen des Reglers verzögerungsfrei bleibt. Wenn Sie auf Bearbeitetes Bild herunterladen klicken, wird dieselbe Kontrastformel auf 100 % Ihrer ursprünglichen Pixelmaße angewendet.',
      },
      {
        question: 'Kann ich einen Screenshot aus der Zwischenablage einfügen, um matte Bildschirmaufnahmen zu korrigieren?',
        answer:
          'Ja, drücken Sie Strg+V (oder Cmd+V auf dem Mac) an einer beliebigen Stelle des Upload-Bildschirms, um ein Bild aus der Zwischenablage direkt in den Editor zu laden. Eine Kontrastanpassung um +20 % bis +35 % eignet sich hervorragend, um schwache Diagrammlinien oder grauen UI-Text schärfer zu machen.',
      },
      {
        question: 'Verwandelt das Anpassen des Kontrasts Farbfotos in Schwarz-Weiß?',
        answer:
          'Nein, Kontrast verschiebt den Helligkeitsabstand der Rot-, Grün- und Blaukanäle proportional, ohne Farbinformationen zu entfernen. Beachten Sie, dass ein starker positiver Kontrast die wahrgenommene Farbkraft natürlicherweise leicht verstärkt, während negativer Kontrast Farben abdämpft.',
      },
      {
        question: 'Welche Qualitätseinstellung sollte ich beim Export als JPG oder WebP wählen?',
        answer:
          'Der Qualitätsregler steht standardmäßig auf 90 % und hält so weiche Tonverläufe frei von Streifenbildung, bei gleichzeitig moderatem Dateigewicht. Senken Sie ihn für kleinere Web-Uploads auf 75 %–80 %, oder wechseln Sie zu PNG für eine komplett verlustfreie Ausgabe.',
      },
      {
        question: 'Wie wird die heruntergeladene Datei nach der Kontrastbearbeitung benannt?',
        answer:
          'An Ihre bereinigte ursprüngliche Dateibasis wird _contrast angehängt, gefolgt von der gewählten Formaterweiterung, zum Beispiel portrait_contrast.jpg. Ihre Originaldatei auf der Festplatte wird nie verändert oder überschrieben.',
      },
      {
        question: 'Kann dieses Tool unscharfe, nicht fokussierte Fotos schärfen?',
        answer:
          'Ein verstärkter Kontrast erhöht die Kantentrennung zwischen hellen und dunklen Bereichen, wodurch trübe oder neblige Fotos deutlich klarer wirken können. Er passt jedoch Tonkurven an, statt eine Kantenschärfung anzuwenden – starke Bewegungsunschärfe lässt sich so nicht nachträglich fokussieren.',
      },
      {
        question: 'Werden Fotos für die Kontrastbearbeitung auf externe Server hochgeladen?',
        answer:
          'Nein, jede Pixelberechnung läuft in Ihrem lokalen Browser-Tab mit HTML5-Canvas und JavaScript ab. Persönliche Porträts, gescannte Ausweise und unveröffentlichte Produktaufnahmen verlassen Ihren Computer oder Ihr Smartphone nie.',
      },
      {
        question: 'Was passiert, wenn ich ein animiertes GIF zur Kontrastanpassung hochlade?',
        answer:
          'HTML5-Canvas rendert und passt den ersten Frame des GIF an und exportiert ein einzelnes statisches Bild in Ihrem gewählten Format. Die Kontrastanpassung mehrerer Frames animierter GIFs wird hier nicht unterstützt.',
      },
      {
        question: 'Worin unterscheidet sich die Kontrastanpassung von der Helligkeitsanpassung?',
        answer:
          'Helligkeit verschiebt alle Pixel gleichmäßig gemeinsam heller oder dunkler, während Kontrast den Abstand zwischen dunklen Schatten und hellen Lichtern rund um den mittleren Graupunkt vergrößert oder verkleinert. Wenn ein dunkles Foto nach dem Aufhellen ausgewaschen wirkt, bearbeiten Sie es anschließend mit unserem Kontrast-Tool.',
      },
      {
        question: 'Kann ich mit negativem Kontrast harte Mittagsschatten auf Porträts abmildern?',
        answer:
          'Ja, mit Weich (−25 %) oder Gedämpft (−10 %) verringern Sie harte Übergänge zwischen sonnenbeschienener Haut und dunklen Schatten. Bei extremem Gegenlicht oder einem flachen Editorial-Look ziehen Sie den Regler auf −30 % bis −50 %.',
      },
      {
        question: 'Wie lade ich ein neues Foto, ohne den Browser-Tab neu zu laden?',
        answer:
          'Klicken Sie auf das Papierkorb-Symbol oben rechts im Vorschau-Panel, um das aktuelle Bild zu löschen und zur Upload-Zone zurückzukehren. Dadurch wird temporärer Browserspeicher freigegeben und der Canvas für Ihre nächste Datei bereitgemacht.',
      },
      {
        question: 'Funktioniert der Kontrast-Editor zuverlässig in iOS Safari und Android Chrome?',
        answer:
          'Ja, die Tonberechnung läuft explizit in JavaScript-ImageData-Pixelarrays und verlässt sich nicht auf CSS-Canvas-Filter, die sich in mobilen Browsern uneinheitlich verhalten. So bleiben Kontrastvorschau und finale Downloads auf iPhone, Android, macOS und Windows einheitlich.',
      },
    ],
    relatedSlugs: ['/image-brightness-editor', '/image-saturation-editor', '/image-filters', '/'],
  },
  {
    slug: '/image-saturation-editor',
    name: 'Bildsättigungs-Editor',
    shortDescription: 'Farben verstärken oder Fotos sauber entsättigen – direkt im Browser.',
    category: 'crop-edit',
    seoTitle: 'Bildsättigung kostenlos anpassen – Farb-Editor online',
    seoDescription:
      'Verstärken Sie matte Farben oder wandeln Sie Fotos in Schwarz-Weiß um – mit dem kostenlosen Bildsättigungs-Editor. Live-Vergleich und lokaler Export im Browser.',
    h1: 'Kostenloser Online-Bildsättigungs-Editor',
    subtitle:
      'Für Fotografen, Social-Media-Ersteller und E-Commerce-Redakteure, die Farbintensität ausbalancieren: Dieser Bildsättigungs-Editor im Browser passt die Farbintensität relativ zur wahrgenommenen Helligkeit an. Wechseln Sie stufenlos von knackigem −100 % Graustufen bis zu lebendigen +100 % – mit Splitscreen-Vergleich und lokalem Export.',
    howToSteps: [
      {
        title: 'Foto in den Editor laden',
        description:
          'Ziehen Sie ein Bild im Format JPG, PNG, WebP, HEIC, GIF, BMP oder SVG mit bis zu 20 MB per Drag-and-drop, wählen Sie eine Datei von Ihrem Gerät oder fügen Sie sie mit Strg+V ein.',
      },
      {
        title: 'Erste Farbverstärkung in der Vorschau sehen',
        description:
          'Der Editor startet mit einem Sättigungswert von +25 %, sodass Sie sofort sehen, wie reichere Farben matte Töne auf der Live-Vorschau anheben.',
      },
      {
        title: 'Sättigung feinjustieren oder Voreinstellung klicken',
        description:
          'Ziehen Sie den Regler von −100 % Graustufen bis +100 % Lebendig, oder wählen Sie Graustufen (−100 %), Gedämpft (−40 %), Original (0 %), Satt (+30 %), Lebendig (+60 %) oder Hyper (+90 %).',
      },
      {
        title: 'Hauttöne mit dem Splitscreen-Vergleich prüfen',
        description:
          'Schalten Sie zwischen Nachher, Vorher oder Splitscreen-Vergleich mit dem Wischregler um – oder klicken Sie auf Vollbildvergleich –, um sicherzustellen, dass Rottöne und Hauttöne ausgewogen statt übersättigt wirken.',
      },
      {
        title: 'Ausgabeformat wählen und lokal speichern',
        description:
          'Wählen Sie Original, JPG, PNG oder WebP, passen Sie die Qualität (10 %–100 %) an, sofern nicht PNG, und klicken Sie auf Bearbeitetes Bild herunterladen.',
      },
    ],
    features: [
      {
        title: 'Helligkeitserhaltende Sättigung',
        description: 'Passt die Farbintensität relativ zur wahrgenommenen Helligkeit an, damit Töne natürlich bleiben.',
      },
      {
        title: 'Von Graustufen bis Hyper-Lebendig',
        description: 'Ziehen Sie auf −100 % für sofortiges Schwarz-Weiß oder ins Positive für satte, lebendige Farben.',
      },
      {
        title: 'Live-Vorher-Nachher-Vorschau',
        description: 'Schalten Sie die Vergleichsansicht um oder ziehen Sie sie, um übersättigte Hauttöne zu vermeiden.',
      },
      {
        title: 'Privat & kostenlos',
        description: 'Keine Uploads, keine Konten und keine Wasserzeichen.',
      },
    ],
    faqs: [
      {
        question: 'Wie bewahrt dieser Bildsättigungs-Editor die wahrgenommene Helligkeit?',
        answer:
          'Jedes Pixel berechnet die wahrgenommene Helligkeit mit ITU-R-BT.709-Gewichten (0,2126 R + 0,7152 G + 0,0722 B) und interpoliert die RGB-Kanäle zu diesem neutralen Graupunkt hin oder von ihm weg. Dadurch werden farbige Rot- und Grüntöne beim Entsättigen weder unnatürlich hell noch schlammig.',
      },
      {
        question: 'Welche Voreinstellungen per Klick enthält die Sättigungssteuerung?',
        answer:
          'Sie erhalten sechs Voreinstellungen: Graustufen (−100 %), Gedämpft (−40 %), Original (0 %), Satt (+30 %), Lebendig (+60 %) und Hyper (+90 %). Ein Klick auf eine Schaltfläche aktualisiert die Vorschau sofort; danach können Sie mit dem Regler feinjustieren.',
      },
      {
        question: 'Kann ich ein Farbporträt mit einem Klick in saubere Graustufen umwandeln?',
        answer:
          'Ja, klicken Sie auf die Voreinstellung Graustufen (−100 %) oder ziehen Sie den Sättigungsregler ganz nach links auf −100 %. Da eine standardmäßige Helligkeitsgewichtung verwendet wird, verwandeln sich Hauttöne und Grünflächen in natürlich wirkende Monochromwerte statt in flache Durchschnittswerte.',
      },
      {
        question: 'Warum startet der Sättigungswert beim ersten Laden einer Datei bei +25 %?',
        answer:
          'Der Start bei +25 % zeigt sofort nach dem Erscheinen Ihres Fotos eine sanfte Verstärkung der Farbigkeit. Klicken Sie jederzeit auf Original (0 %) oder auf den Zurücksetzen-Link, wenn Sie lieber von neutral nach oben oder unten anpassen möchten.',
      },
      {
        question: 'Wie verhindere ich, dass Porträts beim Verstärken der Farben orange oder neon wirken?',
        answer:
          'Bleiben Sie bei Personen im Bereich +15 % bis +35 % und wechseln Sie zum Tab Splitscreen-Vergleich, um zwischen Ihren ursprünglichen Hauttönen und dem verstärkten Canvas zu wischen. Mit dem Vollbildvergleich können Sie auch Wangen, Lippen und Produktetiketten vor dem Export genau prüfen.',
      },
      {
        question: 'Was passiert, wenn ich die Sättigung eines bereits monochromen oder grauen Fotos verstärke?',
        answer:
          'Pixel, bei denen Rot-, Grün- und Blauwerte gleich sind, liegen genau auf der Helligkeitsachse – eine höhere Sättigung kann also keine Farbe erfinden, die nicht vorhanden ist. Bei getönten Sepia- oder warmem Schwarz-Weiß verstärkt eine positive Sättigung jedoch den zugrunde liegenden Farbstich.',
      },
      {
        question: 'Unterstützt der Sättigungs-Editor transparente PNG-Icons und WebP-Sticker?',
        answer:
          'Ja, die Pixelanpassung verändert die RGB-Farbintensität und lässt den Alphakanal für Transparenz unberührt. Behalten Sie das Format Original oder wählen Sie unter Ausgabeformat PNG oder WebP, um transparente Hintergründe sauber zu erhalten.',
      },
      {
        question: 'Was passiert mit der Transparenz, wenn ich einen entsättigten Sticker als JPG exportiere?',
        answer:
          'Da JPG keine Alphatransparenz unterstützt, werden transparente Pixel vor der JPEG-Codierung automatisch auf einen einfarbigen weißen (#FFFFFF) Canvas gelegt. Wählen Sie PNG oder WebP, wenn Transparenz erhalten bleiben soll.',
      },
      {
        question: 'Welche Upload-Formate und maximale Dateigrößen werden akzeptiert?',
        answer:
          'Sie können JPG-, PNG-, WebP-, HEIC/HEIF-, GIF-, BMP- und SVG-Bilder mit bis zu 20 MB pro Datei ablegen. Animierte GIFs laden ihren ersten Frame auf den Canvas zum Bearbeiten und werden als statisches Bild exportiert.',
      },
      {
        question: 'Gibt es einen Unterschied zwischen der Vorschau und der Auflösung der heruntergeladenen Datei?',
        answer:
          'Der interaktive Canvas zeigt die Vorschau mit bis zu 1.000 px an der längsten Seite, damit Regleranpassungen flüssig und verzögerungsfrei wirken. Beim Exportieren wird ein vollständiger Canvas-Durchlauf mit der ursprünglichen Breite und Höhe Ihrer Datei ausgeführt.',
      },
      {
        question: 'Wann sollte ich Gedämpft (−40 %) statt Graustufen (−100 %) verwenden?',
        answer:
          'Gedämpft (−40 %) beruhigt zu helle Neon-Schilder, unruhige Raumhintergründe oder grelles Produktlicht und behält dabei dezente Farbspuren. Es eignet sich gut für ruhige Blog-Hero-Fotos oder Hintergründe hinter Text.',
      },
      {
        question: 'Kann ich Bilder direkt aus meiner Zwischenablage in das Sättigungs-Tool einfügen?',
        answer:
          'Ja, kopieren Sie ein Bild oder einen Screenshot in die Zwischenablage und drücken Sie Strg+V (oder Cmd+V) auf der Upload-Anzeige. Es öffnet sich sofort im Editor, bereit zur Farbanpassung.',
      },
      {
        question: 'Wie unterscheidet der exportierte Dateiname bearbeitete Fotos von Originalen?',
        answer:
          'Exporte hängen automatisch _saturation an Ihren bereinigten Originaldateinamen an (zum Beispiel sunset_saturation.jpg). Ihr Quellbild bleibt auf Ihrem Gerät unberührt.',
      },
      {
        question: 'Welche Qualitätseinstellung gilt beim Speichern als Original, JPG oder WebP?',
        answer:
          'JPG- und WebP-Exporte verwenden standardmäßig 90 % Qualität, die Sie vor dem Herunterladen zwischen 10 % und 100 % anpassen können. Wenn PNG gewählt ist, blendet sich der Qualitätsregler aus, da PNG immer verlustfrei exportiert.',
      },
      {
        question: 'Werden hochgeladene Fotos an Cloud-GPUs oder Drittanbieter-Server übertragen?',
        answer:
          'Niemals – jede Pixelberechnung wird in Ihrem lokalen Browser-Tab auf Ihrer eigenen Gerätehardware ausgeführt. Es werden keine Bilddaten, Voreinstellungen oder Dateinamen über das Netzwerk gesendet.',
      },
      {
        question: 'Entfernt das Bearbeiten der Sättigung hier EXIF-GPS- oder Kamera-Metadaten?',
        answer:
          'Ja, das Zeichnen auf HTML5-Canvas und das Schreiben eines neuen Bild-Blobs lässt ursprüngliche EXIF-Header wie Kameraseriennummern und GPS-Standort-Tags weg. Das hilft, geteilte Social-Media-Fotos datenschutzsauber zu halten.',
      },
      {
        question: 'Wie setze ich nur den Sättigungsregler zurück, ohne mein Foto neu zu laden?',
        answer:
          'Klicken Sie oben rechts in der Sättigungssteuerung auf die Schaltfläche Zurücksetzen, um den Regler sofort auf 0 % zurückzusetzen. Sie können auch direkt unter dem Regler auf die Schnellvoreinstellung Original (0 %) klicken, ohne Ihre Datei erneut hochzuladen.',
      },
      {
        question: 'Kann ich Landschaftsgrün und Himmel mit Hyper (+90 %) sauber verstärken?',
        answer:
          'Hyper (+90 %) verdoppelt Farbunterschiede stufenlos bis zu den RGB-Kanalgrenzen (0–255) und erzeugt so dramatische Reiseplakate und Produkt-Highlights. Beobachten Sie helle Rot- und Blautöne im Splitscreen-Vergleich, damit feine Blüten- oder Stofftexturen nicht beschneiden.',
      },
      {
        question: 'Kann ich ein buntes PNG-Diagramm in ein leichteres WebP umwandeln und dabei die Farben dämpfen?',
        answer:
          'Ja, stellen Sie den gewünschten Sättigungswert ein, wählen Sie unter Ausgabeformat WEBP und passen Sie die Qualität auf 80 %–90 % an. Ein Klick auf Bearbeitetes Bild herunterladen erzeugt in einem Schritt ein kompaktes, farblich ausgewogenes WebP.',
      },
      {
        question: 'Funktioniert das Tool offline, sobald es geladen ist, und auf mobilen Touchscreens?',
        answer:
          'Ja, Regler, Voreinstellungsschaltflächen und der Splitscreen-Vergleichsregler reagieren auf iOS Safari und Android Chrome flüssig auf Touch-Gesten. Da die Verarbeitung keine Serveraufrufe benötigt, laufen Bearbeitungen auch bei langsamer Mobilverbindung.',
      },
    ],
    relatedSlugs: ['/image-filters', '/image-brightness-editor', '/image-contrast-editor', '/'],
  },
  {
    slug: '/image-filters',
    name: 'Bildfilter',
    shortDescription: 'Graustufen, Sepia, Vintage, Warm, Kalt & Noir – mit einstellbarer Intensität.',
    category: 'crop-edit',
    seoTitle: 'Bildfilter kostenlos online – Vintage, Sepia & Noir',
    seoDescription:
      'Stylen Sie Fotos mit kostenlosen Online-Bildfiltern wie Vintage, Sepia, Schwarz-Weiß-Noir, Warm, Kalt und Matte Fade. Intensität direkt im Browser regeln.',
    h1: 'Kostenlose Online-Bildfilter',
    subtitle:
      'Ideal für Creator, Blogger und alle, die alltäglichen Schnappschüssen eine einheitliche Ästhetik verleihen wollen: Diese kostenlosen Online-Bildfilter bieten 11 kuratierte Farbgrade mit Live-Vorschaubildern. Blenden Sie jeden Filter mit dem Intensitätsregler stufenlos ein und speichern Sie Kopien in voller Auflösung direkt in Ihrem Browser.',
    howToSteps: [
      {
        title: 'Bild ablegen oder auswählen',
        description:
          'Laden Sie ein Foto im Format JPG, PNG, WebP, HEIC, GIF, BMP oder SVG mit bis zu 20 MB hoch, wählen Sie eine Datei von der Festplatte oder fügen Sie sie direkt mit Strg+V ein.',
      },
      {
        title: 'Live-Filtervorschaubilder durchsehen',
        description:
          'Sehen Sie sich das Raster mit 12 Filtervoreinstellungen an, das echte Miniaturvorschauen von Original plus 11 stilisierten Farbgraden zeigt, die aus Ihrem hochgeladenen Bild erzeugt werden.',
      },
      {
        title: 'Voreingestellten Stil auswählen',
        description:
          'Klicken Sie auf Graustufen, Sepia, Vintage, Warm, Kalt, Hoher Kontrast, Matte Fade, Dramatisch, Schwarz-Weiß-Noir, Golden Hour oder Invertieren, um den Stil auf den Haupt-Canvas anzuwenden.',
      },
      {
        title: 'Stärke mit der Filterintensität mischen',
        description:
          'Ziehen Sie den Filterintensitäts-Regler zwischen 0 % und 100 %, um starke Farbgrade zu dezenten Farbwaschungen abzuschwächen (oder klicken Sie auf Zurücksetzen, um zu Original zurückzukehren).',
      },
      {
        title: 'Original halten oder Vergleichsfenster öffnen',
        description:
          'Halten Sie Original anzeigen gedrückt für sofortige A/B-Prüfungen im Wechsel, oder klicken Sie auf Vergleichen, um das interaktive Vergleichsfenster mit Splitscreen-Schieberegler zu öffnen.',
      },
      {
        title: 'Ausgabeformat wählen und herunterladen',
        description:
          'Wählen Sie Original, JPG, PNG oder WebP, passen Sie bei Bedarf die Qualität (10 %–100 %) an und klicken Sie auf Gefiltertes Bild herunterladen.',
      },
    ],
    features: [
      {
        title: '11+ kuratierte Filtervoreinstellungen',
        description: 'Enthält Graustufen, Sepia, Vintage, Warm, Kalt, Hoher Kontrast, Matte Fade, Dramatisch, Schwarz-Weiß-Noir, Golden Hour und Invertieren.',
      },
      {
        title: 'Stufenloser Intensitätsregler',
        description: 'Blenden Sie jeden Filter stufenlos zwischen 0 % und 100 % ein, statt an harten Standardwerten festzuhängen.',
      },
      {
        title: 'Live-Vorschaustreifen',
        description: 'Sehen Sie vor der Auswahl, wie jeder Filter auf Ihrem eigenen Foto aussieht.',
      },
      {
        title: '100 % clientseitiger Canvas',
        description: 'Funktioniert offline-bereit in Ihrem Browser – ohne Server-Uploads.',
      },
    ],
    faqs: [
      {
        question: 'Welche 11 Filterstile kann ich im Online-Bildfilter-Raster in der Vorschau sehen?',
        answer:
          'Neben Original erzeugt das Raster Live-Vorschaubilder für Graustufen, Sepia, Vintage, Warm, Kalt, Hoher Kontrast, Matte Fade, Dramatisch, Schwarz-Weiß-Noir, Golden Hour und Invertieren. Jede Miniatur wird direkt aus Ihrem hochgeladenen Foto gerendert, nicht aus Beispielbildern.',
      },
      {
        question: 'Wie funktioniert der Filterintensitäts-Regler zwischen 0 % und 100 %?',
        answer:
          'Wenn Sie die Filterintensität unter 100 % einstellen, werden die gefilterten RGB-Pixelwerte linear zurück in Richtung Ihrer Originalpixel gemischt. Wenn Sie zum Beispiel Vintage oder Golden Hour auf 45 % setzen, erhalten Sie eine sanfte Filmwaschung, ohne natürliche Hauttöne zu überdecken.',
      },
      {
        question: 'Warum wählt das Tool direkt beim Ablegen eines Fotos Vintage mit 100 % aus?',
        answer:
          'Es startet standardmäßig mit Vintage bei voller Intensität, damit Sie direkt nach dem Upload einen fertigen Effekt auf dem Haupt-Canvas sehen. Klicken Sie einfach auf eine andere Kachel im Bereich Filtervoreinstellungen oder auf Zurücksetzen, um zu Original zurückzukehren.',
      },
      {
        question: 'Was ist der Unterschied zwischen den Filtern Graustufen und Schwarz-Weiß-Noir?',
        answer:
          'Graustufen wandelt Farben mit natürlichen Helligkeitsgewichten in ausgewogene Schwarz-Weiß-Töne um, ohne den Kontrast zu verändern. Schwarz-Weiß-Noir legt zusätzlich eine steile 1,65-fache Kontrastverstärkung auf die Graustufenwandlung und erzeugt so kräftige dunkle Schatten und helle, kinoreife Lichter.',
      },
      {
        question: 'Wie unterscheiden sich Sepia, Vintage, Matte Fade und Golden Hour optisch?',
        answer:
          'Sepia verschiebt das gesamte Bild in klassische monochrome Brauntöne, während Vintage warme Sepiatöne mit subtil verblasster Wärme in die Originalfarben mischt. Matte Fade hebt dunkle Schwarztöne zu weichen Schiefergrautönen an, und Golden Hour verstärkt warme Rot- und Gelbtöne und kühlt Schattenblau ab.',
      },
      {
        question: 'Wie beschleunigt die Schaltfläche „Original anzeigen" das Bearbeiten?',
        answer:
          'Wenn Sie Original anzeigen mit Maus oder Finger gedrückt halten, springt der Canvas vorübergehend zu Ihrem unbearbeiteten Foto zurück und zeigt ein Original-Badge an. Beim Loslassen wird Ihre gefilterte Vorschau sofort wiederhergestellt, sodass Sie in Millisekunden A/B-vergleichen können.',
      },
      {
        question: 'Kann ich vor dem Speichern auch Splitscreen-Ansichten nebeneinander prüfen?',
        answer:
          'Ja, klicken Sie neben Original anzeigen auf die Schaltfläche Vergleichen, um das vollständige Filtervergleichs-Fenster zu öffnen. Es zeigt Original- und Filter-Dateigrößen sowie einen interaktiven Wischregler zum Aufteilen an.',
      },
      {
        question: 'Werden heruntergeladene Bilder in derselben geringen Größe wie die Vorschaubilder verarbeitet?',
        answer:
          'Nein, das Voreinstellungsraster nutzt winzige 120-px-Vorschaubilder für sofortige Vorschauen, und der Hauptarbeitsbereich ist für Reaktionsfähigkeit auf 1.000 px begrenzt. Ein Klick auf Gefiltertes Bild herunterladen verarbeitet Ihre volle Original-Pixelauflösung auf HTML5-Canvas.',
      },
      {
        question: 'Welche Dateiformate und maximale Größe funktionieren mit diesen Fotofiltern?',
        answer:
          'Sie können JPG-, PNG-, WebP-, iPhone-HEIC/HEIF-, GIF-, BMP- und SVG-Dateien mit bis zu 20 MB pro Upload ablegen. Unterstützte Ausgaben sind Original, JPG, PNG und WebP.',
      },
      {
        question: 'Was passiert mit transparenten Bereichen auf PNG-Logos, wenn ich Warm, Kalt oder Invertieren anwende?',
        answer:
          'Alle Pixelfilter-Berechnungen verändern nur die Rot-, Grün- und Blaukanäle und lassen die Alphatransparenz unberührt. Behalten Sie Original, PNG oder WebP als Ausgabe, um transparente Hintergründe zu erhalten; die Auswahl von JPG füllt transparente Zonen mit einfarbigem Weiß.',
      },
      {
        question: 'Wofür ist der Invertieren-Filter am nützlichsten?',
        answer:
          'Invertieren subtrahiert jeden RGB-Kanal von 255 und erzeugt so ein exaktes Farbnegativ Ihres Bildes. Entwickler nutzen ihn, um Dark-Mode-Diagramme für weiße Dokumente umzukehren, und Fotografen, um gescannte Filmnegative in der Vorschau zu sehen.',
      },
      {
        question: 'Sind Filtereffekte in Chrome, Firefox und iPhone Safari konsistent?',
        answer:
          'Ja, alle 11 Voreinstellungen berechnen direkt in JavaScript-ImageData-Pixelschleifen, statt sich auf CSS-ctx.filter-Zeichenketten zu verlassen. Das garantiert identische Farben in iOS Safari, Android Chrome und Desktop-Browsern.',
      },
      {
        question: 'Kann ich zwei Filter wie Kalt plus Matte Fade auf dasselbe Bild stapeln?',
        answer:
          'Jede Voreinstellung berechnet direkt aus Ihrem sauberen Originalbild in einem Durchgang, sodass ein Klick auf eine neue Kachel die Voreinstellungen sauber wechselt, ohne die Qualität zu mindern. Um zwei Farbgrade zu kombinieren, laden Sie Ihr erstes gefiltertes PNG herunter und legen es für einen zweiten Durchgang direkt wieder ab.',
      },
      {
        question: 'Wie werden Ausgabedateinamen markiert, damit ich weiß, welchen Filter ich exportiert habe?',
        answer:
          'Der Exporteur hängt die Voreinstellungs-ID an Ihren bereinigten Dateibasistitel an, zum Beispiel photo_golden-hour.jpg oder photo_noir.webp. So lassen sich zwei oder drei Test-Looks in einem Ordner leicht unterscheiden.',
      },
      {
        question: 'Wird das Hochladen eines Fotos zum Anwenden von Filtern an einen externen Server gesendet?',
        answer:
          'Nein, Vorschaubilder, Live-Canvas-Vorschauen und finale Exporte laufen vollständig im Speicher Ihres Browser-Tabs. Es werden keine Fotos an Remote-Server übertragen oder in Cloud-Protokollen gespeichert.',
      },
      {
        question: 'Kann ich Kalt- oder Hoher-Kontrast-Filter auf Screenshots aus meiner Zwischenablage anwenden?',
        answer:
          'Ja, drücken Sie Strg+V (oder Cmd+V) auf der Upload-Zone, um einen kopierten Screenshot sofort zu laden. Hoher Kontrast und Schwarz-Weiß-Noir eignen sich besonders gut, um schwachen Text auf Dokumentenscans aufzuhellen.',
      },
      {
        question: 'Was passiert, wenn ich ein animiertes GIF in das Bildfilter-Tool hochlade?',
        answer:
          'HTML5-Canvas extrahiert den ersten Frame des GIF für Vorschaubilder und exportiert ein statisches, gefiltertes Bild. Die Filterung mehrerer Frames animierter GIFs wird von diesem Tool nicht durchgeführt.',
      },
      {
        question: 'Wie sollte ich die Qualität beim Exportieren gefilterter WebP- oder JPG-Dateien einstellen?',
        answer:
          'Die Standardeinstellung von 90 % bewahrt dezente Filmkörnung und matte Schatten sauber, ohne große Dateigrößen. Wenn Sie verlustfreie Erhaltung für weitere Bearbeitung benötigen, wählen Sie unter Ausgabeformat PNG.',
      },
      {
        question: 'Entfernt das Anwenden eines Filters sensible Kamera-EXIF- und GPS-Tags?',
        answer:
          'Ja, das Zeichnen gefilterter Pixel auf einen frischen HTML5-Canvas erzeugt eine saubere neue Bilddatei ohne EXIF-Header. Kameramodell-Tags, Zeitstempel und eingebettete GPS-Koordinaten werden beim Herunterladen automatisch ausgeschlossen.',
      },
      {
        question: 'Wie tausche ich nach dem Herunterladen einer gefilterten Aufnahme schnell ein anderes Foto ein?',
        answer:
          'Klicken Sie auf das Papierkorb-Symbol oben rechts im Filtervorschau-Panel, um Ihr aktuelles Bild zu löschen und zur Dropzone zurückzukehren. Der gesamte Vorschauspeicher wird sofort für Ihr nächstes Foto freigegeben.',
      },
    ],
    relatedSlugs: ['/image-saturation-editor', '/image-brightness-editor', '/image-border-generator', '/'],
  },
  {
    slug: '/add-background-to-image',
    name: 'Hintergrund zum Bild hinzufügen',
    shortDescription: 'Transparente oder gerahmte Bilder auf einfarbigen, Verlauf- oder Weichzeichner-Hintergründen platzieren.',
    category: 'create',
    seoTitle: 'Hintergrund zum Bild hinzufügen – kostenlos online',
    seoDescription:
      'Fügen Sie Bildern oder transparenten PNGs online einen Hintergrund hinzu: einfarbig, als Verlauf oder Weichzeichner-Hintergrund. Export in 1:1, 16:9 oder 4:5.',
    h1: 'Hintergrund zum Bild online hinzufügen',
    subtitle:
      'Für E-Commerce-Händler, Logo-Designer und Social-Media-Publisher: Mit diesem Tool fügen Sie Bild-Uploads oder transparenten PNG-Ausschnitten mühelos einen Hintergrund hinzu. Wählen Sie einfarbige Farbfelder, zweifarbige Verläufe im Winkel oder Weichzeichner-Hintergründe – passend für quadratische, Story- oder Breitbild-Posts.',
    howToSteps: [
      {
        title: 'Foto oder transparentes PNG hochladen',
        description:
          'Legen Sie ein Bild im Format JPG, PNG, WebP, HEIC, GIF, BMP oder SVG mit bis zu 20 MB in die Upload-Zone, wählen Sie es von der Festplatte aus oder fügen Sie es mit Strg+V ein.',
      },
      {
        title: 'Einfarbig, Verlauf oder Weichzeichner-Foto wählen',
        description:
          'Wählen Sie Einfarbig mit Farbauswahl und 6 Schnellfarbfeldern, Verlauf mit zwei Farben und einem Winkelregler von 0°–360°, oder Weichzeichner-Foto mit einem Weichzeichnerradius von 4–50 px.',
      },
      {
        title: 'Seitenverhältnis des Canvas wählen',
        description:
          'Klicken Sie unter Seitenverhältnis des Canvas auf Orig, 1:1 Quadrat, 16:9 Breitbild, 9:16 vertikale Story oder 4:5 Social-Porträt.',
      },
      {
        title: 'Bildskalierung, Rundung und Schlagschatten anpassen',
        description:
          'Stellen Sie mit dem Regler die Bildskalierung (40 %–100 %) ein, um den Abstand um Ihr Motiv zu steuern, die Rundung (0 %–30 %) für weiche Ecken, und schalten Sie Schlagschatten hinter dem Bild ein oder aus.',
      },
      {
        title: 'Ausgabeformat wählen und herunterladen',
        description:
          'Prüfen Sie die genauen Ausgabe-Pixelmaße unter der Vorschau, wählen Sie PNG, JPG oder WEBP und klicken Sie auf Bild herunterladen.',
      },
    ],
    features: [
      {
        title: '3 Hintergrundmodi',
        description: 'Wählen Sie Einfarbig, Zweifarbigen Verlauf oder Weichzeichner-Foto als Hintergrund für hochformatige oder querformatige Aufnahmen mit Rändern.',
      },
      {
        title: 'Social- & Web-Seitenverhältnisse',
        description: 'Passen Sie jedes Foto in Original-, 1:1-Quadrat-, 16:9-Breitbild-, 9:16-Story- oder 4:5-Porträtrahmen ein.',
      },
      {
        title: 'Vordergrund-Skalierung, Radius & Schatten',
        description: 'Fügen Sie Freiraum, abgerundete Ecken und weiche Schlagschatten um Ihr Vordergrundbild hinzu.',
      },
      {
        title: 'Keine Uploads',
        description: 'Wird lokal per HTML5-Canvas gerendert – mit sofortigem Download.',
      },
    ],
    faqs: [
      {
        question: 'Wann sollte ich beim Hinzufügen eines Hintergrunds den Modus „Weichzeichner-Foto" verwenden?',
        answer:
          'Der Modus Weichzeichner-Foto füllt leere Canvas-Ränder um eine hochformatige Smartphone-Aufnahme mit einer vergrößerten, sanft weichgezeichneten Kopie Ihres eigenen Bildes plus einem leichten 12-%-Schieferfarbton. So können Sie vertikale 9:16-Fotos in 16:9-YouTube-Banner oder 1:1-Quadrate einfügen, ohne hässliche schwarze Balken oder Beschnitt.',
      },
      {
        question: 'Wie füge ich einen sauberen weißen Studio-Hintergrund hinter einen transparenten PNG-Ausschnitt hinzu?',
        answer:
          'Wählen Sie unter Hintergrundtyp Einfarbig, klicken Sie auf das weiße Farbfeld #ffffff (oder geben Sie einen beliebigen Hex-Farbwert ein) und passen Sie die Bildskalierung an, wenn Sie Freiraum um das Produkt wünschen. Exportieren Sie als JPG für leichte Marketplace-Uploads oder als PNG für scharfe Kanten.',
      },
      {
        question: 'Kann ich mehrfarbige lineare Verläufe mit Winkeln hinter Logos oder App-Screenshots anpassen?',
        answer:
          'Ja, wechseln Sie den Hintergrundtyp zu Verlauf, um Farbe 1 und Farbe 2 über Farbeingaben zu wählen, und ziehen Sie dann den Winkelregler auf einen beliebigen Wert von 0° bis 360°. Das ist ideal, um schlichte Software-Screenshots in polierte Hero-Karten für Landingpages zu verwandeln.',
      },
      {
        question: 'Welche Seitenverhältnis-Voreinstellungen gibt es für Social Posts?',
        answer:
          'Sie können sofort zwischen Orig (entspricht Ihren Fotomaßen), 1:1 (quadratische Posts und Produktkarten) und 16:9 (YouTube-Thumbnails und Banner) wechseln. Vertikale Voreinstellungen für 9:16 (Stories und Reels) und 4:5 (Instagram-Feed-Porträts) sind ebenfalls eingebaut.',
      },
      {
        question: 'Wie werden die finalen Ausgabe-Pixelmaße bei Änderung des Seitenverhältnisses bestimmt?',
        answer:
          'Der Exporteur setzt die längste Seite des Ausgabe-Canvas auf die längste Originalmaße Ihres Fotos oder mindestens 1.200 px und berechnet die kürzere Seite sauber aus Ihrem gewählten Verhältnis. Wenn Sie zum Beispiel 1:1 bei einem 800×600-Icon wählen, erhalten Sie eine scharfe 1200×1200-Grafik.',
      },
      {
        question: 'Wie beeinflusst die Bildskalierung die Ränder um mein Vordergrundbild?',
        answer:
          'Die Bildskalierung (40 % bis 100 %, Standard 85 %) definiert den maximalen Box-Prozentsatz innerhalb des Hintergrund-Canvas, den Ihr Vordergrundfoto unter Beibehaltung der Proportionen einnehmen kann. 100 % füllt bei passenden Verhältnissen kantengenau aus, während 60 %–80 % großzügige Hintergrundrahmung zeigen.',
      },
      {
        question: 'Wendet die Rundung weiche Ecken auf transparente PNGs an oder nur auf rechteckige Fotos?',
        answer:
          'Die Rundung (0 %–30 %) beschneidet den rechteckigen Vordergrund-Platzierungsbereich mit quadratischen Eckkurven, was rechteckige Screenshots und Fotos sauber abrundet. Bei transparenten Ausschnitten, deren Motiv deutlich innerhalb der Bildkanten sitzt, lässt eine höhere Rundung den inneren Ausschnitt unberührt, während sein Schlagschatten-Box abgerundet wird.',
      },
      {
        question: 'Wie verhält sich Schlagschatten hinter dem Bild bei transparenten Logos im Vergleich zu soliden Fotos?',
        answer:
          'Bei soliden Fotos oder Screenshots wirft er einen dezenten, weichen Höhenschatten proportional zur Canvas-Größe hinter die abgerundete Vordergrundkarte. Bei transparenten Alpha-Bildern verwendet er eine schwache 1-%-Hintergrundfüllung innerhalb der beschnittenen Box, damit der Vordergrund auf hellen oder Verlauf-Hintergründen sauber absteht.',
      },
      {
        question: 'Welche Bilddateitypen kann ich importieren, um einen Hintergrund hinzuzufügen?',
        answer:
          'Sie können JPG-, PNG-, WebP-, iPhone-HEIC/HEIF-, GIF-, BMP- und SVG-Grafiken mit bis zu 20 MB hochladen. Animierte GIFs zeichnen ihren ersten Frame als Vordergrundebene.',
      },
      {
        question: 'Entfernt dieses Tool zuerst automatisch einen vorhandenen Fotohintergrund?',
        answer:
          'Nein, dieser Editor platziert Ihr hochgeladenes Bild (transparenter Ausschnitt, Logo oder ganzes Foto) auf einem neuen Hintergrund-Canvas, statt eine KI-Ausschnitt-Segmentierung auszuführen. Wenn Sie zuerst ein Foto mit einer unruhigen Szene löschen möchten, lassen Sie es durch unser Hintergrund-Entferner-Tool laufen und legen Sie dann das transparente PNG hier ab.',
      },
      {
        question: 'Welche Ausgabeformate werden unterstützt und mit welcher Komprimierungsqualität?',
        answer:
          'Sie können fertige Kompositionen als PNG, JPG oder WEBP mit 92 % Canvas-Exportqualität exportieren (verlustfreie Codierung für PNG). Die genauen Ausgabe-Pixelmaße erscheinen direkt unter dem Vorschau-Canvas vor dem Herunterladen.',
      },
      {
        question: 'Welche Schnellfarbfelder sind im Modus „Einfarbig" eingebaut?',
        answer:
          'Neben der vollständigen nativen Farbauswahl stehen sechs anklickbare Farbfelder bereit, um sie per Klick zu testen: reines Weiß (#ffffff), tiefes Schiefer (#0f172a), Markenblau (#2563eb), Smaragd (#10b981), warmes Creme (#fef3c7) und weiches Grau (#f1f5f9). Sie können jedes Farbfeld antippen, um es sofort in der Vorschau zu sehen, und es danach mit der Farbeingabe feinjustieren.',
      },
      {
        question: 'Wie stufenlos ist die Steuerung des Hintergrund-Weichzeichnerradius im Modus „Weichzeichner-Foto"?',
        answer:
          'Sie können den Hintergrund-Weichzeichnerradius von 4 px (leicht weichgezeichnete Hintergrundtextur) bis 50 px (cremige, unscharfe Umgebungsfarbe) anpassen. Der Weichzeichnerradius skaliert dynamisch passend zu Ihren Exportmaßen in voller Auflösung.',
      },
      {
        question: 'Kann ich Screenshots direkt aus meiner Zwischenablage einfügen, um sie auf einem Verlauf zu rahmen?',
        answer:
          'Ja, kopieren Sie einen Screenshot oder eine Grafik und drücken Sie Strg+V (oder Cmd+V) auf der Upload-Zone, um ihn direkt in den Hintergrund-Canvas zu laden. Die Kombination aus Verlaufshintergrund, 85 % Skalierung, leichter Rundung und Schlagschatten lässt Dokumentations-Screenshots hervorstechen.',
      },
      {
        question: 'Werden hochgeladene Logos, unveröffentlichte UI-Mockups oder persönliche Porträts an einen Server gesendet?',
        answer:
          'Nein, Hintergrundgenerierung, Weichzeichnerfilter, Schatten und Dateicodierung werden lokal in Ihrem Browser mit HTML5-Canvas ausgeführt. Nichts wird über das Internet übertragen oder remote gespeichert.',
      },
      {
        question: 'Wie werden heruntergeladene Hintergrunddateien benannt?',
        answer:
          'Exportierte Dateien behalten Ihren bereinigten Dateibasistitel und hängen _background sowie Ihre gewählte Formaterweiterung an, zum Beispiel product-cutout_background.png oder banner_background.webp. Ihre ursprüngliche Quelldatei auf der Festplatte bleibt unberührt.',
      },
      {
        question: 'Entfernt der Export mit Hintergrund EXIF-Standortmetadaten von Kameraaufnahmen?',
        answer:
          'Ja, das Zusammensetzen von Ebenen auf einem frischen HTML5-Canvas und das Codieren eines neuen Bildes schließt ursprüngliche EXIF-Header automatisch aus. GPS-Koordinaten, Kameraseriennummern und Aufnahmezeitstempel werden nie in die heruntergeladene Datei übernommen.',
      },
      {
        question: 'Kann ich den Modus „Weichzeichner-Foto" bei kleinen Icons oder SVG-Grafiken in der Vorschau sehen?',
        answer:
          'Ja, eigenständige Inline-SVG-Logos oder kleine PNG-Grafiken skalieren auf den abdeckenden Hintergrund und erhalten hinter dem scharfen Vektor-Vordergrund einen sanften Gauß- oder Mehrfach-Weichzeichner. Wählen Sie einen Weichzeichnerradius von 25–45 px, wenn Sie scharfe Vektorkanten in einen weichen Umgebungsschein überführen möchten.',
      },
      {
        question: 'Warum fügt der Modus „Weichzeichner-Foto" eine dezente Tönung über dem weichgezeichneten Hintergrund hinzu?',
        answer:
          'Eine sanfte dunkle Schiefer-Überlagerung mit 12 % Deckkraft wird direkt über die weichgezeichnete Hintergrundebene gemalt, bevor das Vordergrundmotiv gezeichnet wird. Dieser dezente Kontrastschleier hilft, helle Kanten, weiße Etiketten und transparente Ausschnitte vor hellem Himmel oder unruhigen Mustern lesbar zu halten.',
      },
      {
        question: 'Wie ersetze ich das Vordergrundfoto, ohne meinen bevorzugten Ablauf zu verlieren?',
        answer:
          'Klicken Sie oben rechts im Hintergrundvorschau-Panel auf Bild ändern, um den aktuellen Canvas zu leeren und ein weiteres Asset hochzuladen. Da das Tool nativ in Desktop- und Mobilbrowsern läuft, dauert der Bildwechsel nur einen Moment.',
      },
    ],
    relatedSlugs: ['/round-image-corners', '/image-border-generator', '/image-resizer', '/'],
  },
  {
    slug: '/image-splitter',
    name: 'Bild-Zerteiler',
    shortDescription: 'Bilder in N×M-Rasterkacheln oder Streifen zerteilen und als ZIP laden.',
    category: 'create',
    seoTitle: 'Bild kostenlos zerteilen – Rasterkacheln & ZIP-Download',
    seoDescription:
      'Zerteilen Sie Fotos in N×M-Rasterkacheln, horizontale Reihen oder vertikale Karussell-Streifen – kostenlos online. Live-Schnittlinien prüfen und als ZIP laden.',
    h1: 'Online-Bild-Zerteiler',
    subtitle:
      'Für Instagram-Rasterplaner, UI-Designer und Druckersteller: Dieser Bild-Zerteiler im Browser teilt breite Panoramen oder quadratische Fotos in bis zu 10×10 exakte Kacheln oder Streifen. Prüfen Sie nummerierte Schnittlinien live und speichern Sie jede Kachel in voller Auflösung einzeln oder in einem ZIP-Download.',
    howToSteps: [
      {
        title: 'Bild zum Zerteilen ablegen',
        description:
          'Laden Sie ein Foto im Format JPG, PNG, WebP, HEIC, GIF, BMP oder SVG mit bis zu 20 MB hoch (oder fügen Sie es mit Strg+V ein). Erste 3×3-Zerteilungskacheln werden beim Upload automatisch erzeugt.',
      },
      {
        title: 'Nummerierte Schnittlinien-Vorschau prüfen',
        description:
          'Prüfen Sie das gestrichelte Overlay-Raster links über Ihrem Foto, das exakte nummerierte Kachelgrenzen (1 bis N) vor dem finalen Export der Zerteilung zeigt.',
      },
      {
        title: 'Zerteilungslayout oder Schnellvoreinstellungen wählen',
        description:
          'Wählen Sie Raster (N×M), Horiz. Streifen oder Vert. Streifen, geben Sie Zeilen und Spalten von 1 bis 10 ein, oder klicken Sie auf 2×2, 3×3 Instagram, 1×3 Karussell oder 4×1 Streifen.',
      },
      {
        title: 'Ausgabeformat und Kachelqualität wählen',
        description:
          'Wählen Sie Orig, JPG, PNG oder WEBP und passen Sie die Kachelqualität (10 %–100 %, Standard 92 %) für Nicht-PNG-Ausgaben an.',
      },
      {
        title: 'Schnitte in voller Auflösung erzeugen',
        description:
          'Klicken Sie auf In N Kacheln zerteilen, sobald Sie Zeilen, Spalten oder Formateinstellungen aktualisieren, um alle Kacheln an exakten Pixelgrenzen in voller Auflösung neu zu schneiden.',
      },
      {
        title: 'Einzelne Teile oder ZIP-Archiv speichern',
        description:
          'Nutzen Sie Herunterladen auf einer beliebigen nummerierten Z×S-Kachelkarte unten, oder klicken Sie auf Alle Kacheln herunterladen (ZIP), um das gesamte nummerierte Raster gemeinsam herunterzuladen.',
      },
    ],
    features: [
      {
        title: 'Flexible Raster- & Streifenmodi',
        description: 'Zerteilen Sie in benutzerdefinierte Zeilen-×-Spalten-Raster, horizontale Reihen oder vertikale Schnitte.',
      },
      {
        title: 'Live-Schnittlinien-Vorschau',
        description: 'Sehen Sie nummerierte Kachelgrenzen über Ihrem Bild, bevor Sie zerteilen.',
      },
      {
        title: 'Sofortige Kachelvorschau & ZIP',
        description: 'Prüfen Sie jede erzeugte Kachel und laden Sie alle Teile sauber benannt (zeile_spalte) in einem ZIP herunter.',
      },
      {
        title: 'Zerteilung in voller Auflösung',
        description: 'Jede Kachel wird sauber aus dem Original-Canvas in voller Auflösung geschnitten.',
      },
    ],
    faqs: [
      {
        question: 'Wie erstellt der Bild-Zerteiler ein sauberes 3×3-Instagram-Profilraster?',
        answer:
          'Klicken Sie auf die Voreinstellungsschaltfläche 3×3 Instagram (oder stellen Sie den Rastermodus mit 3 Zeilen und 3 Spalten ein) und klicken Sie auf In 9 Kacheln zerteilen. Jedes Teil wird nacheinander nummeriert exportiert – von Zeile 1, Spalte 1 oben links bis zu Zeile 3, Spalte 3 unten rechts –, sodass ein Hochladen in umgekehrter Reihenfolge ein nahtloses Profilmosaik ergibt.',
      },
      {
        question: 'Wie groß darf das Raster sein, das ich in einem Durchgang schneiden kann?',
        answer:
          'Sowohl Zeilen (horizontale Schnitte) als auch Spalten (vertikale Schnitte) akzeptieren Werte von 1 bis 10 und erlauben so von 2 Schnitten bis zu einem 10×10-Raster mit insgesamt 100 einzelnen Kacheln. Da jeder Schnitt gerundete Pixelgrenzen über Ihr Originalbild nutzt, schließen benachbarte Kacheln kantengenau ohne fehlende Pixel an.',
      },
      {
        question: 'Wie unterscheiden sich Horiz. Streifen und Vert. Streifen vom Modus Raster (N×M)?',
        answer:
          'Horiz. Streifen fixiert die Spalten auf 1 und schneidet horizontale Banner in voller Breite, von oben nach unten gestapelt – praktisch für lange Webseiten-Screenshots oder hohe Infografik-Abschnitte. Vert. Streifen fixiert die Zeilen auf 1 und teilt breite Panoramen nebeneinander in nahtlose Instagram- oder LinkedIn-Karussellfolien zum Wischen.',
      },
      {
        question: 'Welche Zerteilungs-Voreinstellungen per Klick sind enthalten?',
        answer:
          'Vier Voreinstellungsschaltflächen sitzen direkt unter den numerischen Eingaben: 2×2 (4 Quadranten), 3×3 Instagram (9 Rasterquadrate), 1×3 Karussell (3 vertikale Wischstreifen) und 4×1 Streifen (4 horizontale Bänder). Ein Klick auf eine Voreinstellung aktualisiert die Live-Schnittlinien-Vorschau sofort.',
      },
      {
        question: 'Werden erzeugte Kacheln herunterskaliert oder in vollen Original-Pixelmaßen beschnitten?',
        answer:
          'Jede Kachel wird direkt aus der vollen Pixelbreite und -höhe Ihres Quellbildes auf HTML5-Canvas geschnitten, ohne Größenänderung. Wenn Sie zum Beispiel ein 3000×1000-Panorama in 1×3-Karussellstreifen teilen, erhalten Sie drei scharfe 1000×1000-Kacheln.',
      },
      {
        question: 'Was passiert, wenn Breite oder Höhe meines Bildes nicht gleichmäßig durch Zeilen oder Spalten teilbar ist?',
        answer:
          'Schnittkoordinaten werden proportional mit Math.round über die volle Breite und Höhe berechnet, sodass benachbarte Schnitte exakte ganzzahlige Pixelgrenzen ohne Lücken oder Überlappungen teilen. Einige Kacheln können bei der Teilung ungerader Zahlen um 1 Pixel abweichen (zum Beispiel 1000 px über 3 Spalten: 333, 334, 333).',
      },
      {
        question: 'Muss ich mir merken, welche Kachel wohin gehört, nachdem ich das ZIP heruntergeladen habe?',
        answer:
          'Nein, jeder Schnitt zeigt sein Zeilen- und Spalten-Badge (zum Beispiel Z1·S2) und die genauen Pixelmaße unter seiner Vorschaukarte an. Im ZIP-Archiv folgen die Dateinamen dem Muster <basis>_z<zeile>_s<spalte>.<ext> (z. B. panorama_z1_s1.jpg, panorama_z1_s2.jpg) in Leserichtung.',
      },
      {
        question: 'Aktualisieren Änderungen an Zeilen, Spalten oder Format die erzeugten Kacheln automatisch?',
        answer:
          'Wenn Sie eine Datei zum ersten Mal hochladen, werden Kacheln automatisch mit Ihren aktiven Layouteinstellungen erzeugt. Nach dem Bearbeiten von Zeilen, Spalten oder Ausgabeformat aktualisiert sich die Schnittlinien-Vorschau sofort, und ein Klick auf In N Kacheln zerteilen erzeugt die herunterladbaren Kachelkarten und das ZIP neu.',
      },
      {
        question: 'Welche Eingabeformate funktionieren im Bild-Zerteiler?',
        answer:
          'Laden Sie JPG-, PNG-, WebP-, iPhone-HEIC/HEIF-, GIF-, BMP- und SVG-Bilder mit bis zu 20 MB pro Datei hoch. Die Auswahl von Orig unter Ausgabeformat behält Ihr Quellformat bei (oder wandelt HEIC/SVG/BMP sauber in Standard-PNG/JPG um).',
      },
      {
        question: 'Bleiben transparente Hintergründe beim Zerteilen eines transparenten PNG-Sprite-Sheets erhalten?',
        answer:
          'Ja, das Zerteilen transparenter PNG- oder WebP-Assets behält die volle Alphatransparenz, wenn das Ausgabeformat Orig, PNG oder WEBP ist. Wenn Sie das Ausgabeformat explizit auf JPG umstellen, füllen Kachel-Canvas Transparenz mit einfarbigem Weiß (#FFFFFF) auf.',
      },
      {
        question: 'Kann ich einen langen Screenshot aus meiner Zwischenablage einfügen und in druckbare Abschnitte schneiden?',
        answer:
          'Ja, drücken Sie Strg+V (oder Cmd+V) auf der Upload-Zone, um einen Screenshot aus der Zwischenablage direkt in den Zerteiler zu laden. Wählen Sie Horiz. Streifen und stellen Sie 3–6 Zeilen ein, um hohe Chat-Protokolle oder Web-Aufnahmen in handhabbare Seiten zu zerlegen.',
      },
      {
        question: 'Erscheint der Kachelqualitäts-Regler für PNG-Kacheln?',
        answer:
          'Nein, PNG-Kacheln werden immer verlustfrei codiert, sodass die Kachelqualität (10 %–100 %, Standard 92 %) nur automatisch angezeigt wird, wenn Ihr aufgelöstes Format JPG oder WebP ist. Das sorgt für scharfe Kanten bei Sprites, UI-Mockups und Textzerteilungen.',
      },
      {
        question: 'Wie wird der Massen-ZIP-Download benannt?',
        answer:
          'Ein Klick auf Alle Kacheln herunterladen (ZIP) verpackt jede erzeugte Kachel in einem einzigen Archiv mit dem Namen <basis>_<zeilen>x<spalten>_tiles.zip, zum Beispiel hero_3x3_tiles.zip. Sie können einzelne Kacheln auch über die Schaltfläche Herunterladen auf jeder Karte einzeln laden.',
      },
      {
        question: 'Werden Fotos beim Zerteilen des Rasters auf externe Server hochgeladen?',
        answer:
          'Nein, Schnittberechnungen, Canvas-Zerteilung, Kachelvorschauen und ZIP-Komprimierung laufen vollständig im lokalen Browserspeicher ab. Ihre privaten Kunstwerke, Diagramme und persönlichen Fotos verlassen Ihr Gerät nie.',
      },
      {
        question: 'Entfernt das Zerteilen EXIF-Kamera-Tags und GPS-Standortmetadaten?',
        answer:
          'Ja, das Schneiden rechteckiger Unterbereiche auf frische HTML5-Canvas-Kacheln erzeugt saubere Bild-Blobs ohne EXIF-Header. Dadurch werden Kameradetails und GPS-Koordinaten aus dem Originalfoto nie in einzelne Schnitte kopiert.',
      },
      {
        question: 'Was passiert, wenn ich ein animiertes GIF zum Zerteilen in Rasterkacheln hochlade?',
        answer:
          'HTML5-Canvas extrahiert den ersten Frame des GIF und schneidet ihn in statische Kacheln in Ihrem gewählten Ausgabeformat. Das Zerteilen mehrerer Frames animierter GIFs unter Beibehaltung der Animation wird hier nicht unterstützt.',
      },
      {
        question: 'Warum können sich meine 3×3-Kacheln im Seitenverhältnis leicht unterscheiden, wenn mein Quellfoto nicht quadratisch ist?',
        answer:
          'Der Zerteiler teilt Ihr Quellbild proportional entlang seiner vorhandenen Breite und Höhe, ohne Kanten zu verzerren oder zu beschneiden. Wenn Sie quadratische 1:1-Kacheln für ein Instagram-Raster möchten, schneiden Sie Ihr Bild zuerst in unserem Bild-Zuschneide-Tool auf 1:1 zu, bevor Sie es 3×3 zerteilen.',
      },
      {
        question: 'Wie ersetze ich das Bild nach dem Herunterladen eines zerteilten Rasters?',
        answer:
          'Klicken Sie oben rechts auf der Schnittlinien-Vorschau-Karte auf Bild ändern, um vorhandene Kachel-URLs aus dem Speicher freizugeben und ein neues Bild zu laden. Ein Neuladen der Seite ist nicht erforderlich.',
      },
      {
        question: 'Können Spieleentwickler dieses Tool nutzen, um Icon-Sheets oder Tilesets zu schneiden?',
        answer:
          'Ja, Spritesheets mit einheitlichen Zeilen und Spalten lassen sich genau schneiden, wenn Sie passende Zeilen-×-Spalten-Zahlen einstellen und die PNG-Ausgabe beibehalten. Jedes Icon wird sauber nach Zeilen- und Spaltenkoordinaten im ZIP gespeichert.',
      },
      {
        question: 'Läuft der Bild-Zerteiler zuverlässig auf iPhones, iPads und Android-Smartphones?',
        answer:
          'Ja, responsive Raster, numerische Zeilen-/Spalteneingaben und clientseitige ZIP-Verpackung funktionieren direkt in iOS Safari und Android Chrome. Größere 10×10-Zerteilungen sehr hochauflösender Fotos laufen auf Desktop- oder modernen Mobilbrowsern am schnellsten.',
      },
    ],
    relatedSlugs: ['/image-cropper', '/image-resizer', '/image-dimensions-checker', '/'],
  },
  {
    slug: '/image-dpi-changer',
    name: 'Bild-DPI-Änderer',
    shortDescription: 'JPEG-/PNG-DPI-Metadaten verlustfrei ändern (72/150/300/benutzerdefiniert).',
    category: 'developer',
    seoTitle: 'Bild-DPI kostenlos ändern – auf 300 DPI verlustfrei',
    seoDescription:
      'Aktualisieren Sie JPEG-JFIF/EXIF- und PNG-pHYs-Druckdichte-Tags mit dem kostenlosen Bild-DPI-Änderer. 72, 150, 300, 600 oder eigene DPI – verlustfrei.',
    h1: 'Kostenloser Bild-DPI-Änderer',
    subtitle:
      'Für Designer, Druckereien, Autoren und Studierende, die Dateien für Druckportale vorbereiten: Dieser verlustfreie Bild-DPI-Änderer aktualisiert JPEG- und PNG-Auflösungsheader, ohne Pixeldaten zu berühren. Wechseln Sie zu 72, 96, 150, 300, 600 oder benutzerdefinierter DPI – stapelweise und mit verifizierter Rücklesung.',
    howToSteps: [
      {
        title: 'Ziel-DPI zuerst wählen oder anpassen (oder jederzeit)',
        description:
          'Klicken Sie auf eine Voreinstellung – 72 DPI (Bildschirm), 96 DPI (Windows), 150 DPI (Entwurfsdruck), 300 DPI (Hochwertiger Druck) oder 600 DPI (Archiv) – oder geben Sie eine beliebige Benutzerdefinierte DPI von 1 bis 2.400 ein.',
      },
      {
        title: 'Ein oder mehrere Bilder hochladen',
        description:
          'Legen Sie JPG-, PNG-, WebP-, HEIC-, GIF-, BMP- oder SVG-Dateien mit bis zu 20 MB pro Datei in den Upload-Bereich (oder fügen Sie sie mit Strg+V ein). Dateien werden sofort mit Ihrer gewählten DPI verarbeitet.',
      },
      {
        title: 'Vorher-, verifizierte DPI und Verarbeitungsmethode prüfen',
        description:
          'Jede Karte zeigt die ursprüngliche gegenüber der verifizierten Ausgabe-DPI sowie ein Badge, das Verlustfreies JPEG-Header-Update, Verlustfreies PNG-pHYs-Update oder In PNG mit pHYs-DPI umgewandelt bestätigt.',
      },
      {
        title: 'DPI bei Bedarf dynamisch für Dateien in der Warteschlange ändern',
        description:
          'Klicken Sie auf eine andere DPI-Voreinstellung oder tippen Sie eine neue Benutzerdefinierte DPI ein und klicken Sie auf [X] DPI anwenden, um jede Datei in Ihrer Warteschlange automatisch neu zu verarbeiten.',
      },
      {
        title: 'Einzelne Dateien oder Stapel-ZIP herunterladen',
        description:
          'Klicken Sie auf Herunterladen auf einzelnen Ergebniskarten (benannt <basis>_<dpi>dpi.<ext>) oder auf Alle herunterladen (ZIP), sobald zwei oder mehr Dateien bereit sind.',
      },
    ],
    features: [
      {
        title: 'Echt verlustfreie JPEG- & PNG-Header-Bearbeitung',
        description: 'Aktualisiert JFIF-APP0-/EXIF-Dichte in JPEGs und pHYs-Chunks (mit gültigem CRC32) in PNGs, ohne Bildpixel zu berühren.',
      },
      {
        title: 'Verifizierte Vorher- & Nachher-Rücklesung',
        description: 'Parst die Ausgabedatei automatisch erneut, sodass Sie die exakt verifizierte DPI sehen, die in der Datei gespeichert ist.',
      },
      {
        title: 'Stapel-DPI-Verarbeitung',
        description: 'Aktualisieren Sie Dutzende druckfertige Grafiken auf einmal und exportieren Sie sie in einem ZIP-Archiv.',
      },
      {
        title: 'WebP-/HEIC-Fallback',
        description: 'Formate ohne DPI können sauber in verlustfreies PNG mit dem exakt eingebetteten pHYs-DPI-Chunk umgewandelt werden.',
      },
    ],
    faqs: [
      {
        question: 'Wie bearbeitet dieser Bild-DPI-Änderer JPEG- und PNG-Dateien ohne Qualitätsverlust?',
        answer:
          'Statt Pixel auf dem Canvas zu decodieren und neu zu komprimieren, patcht er direkt binäre Metadaten-Segmente – er aktualisiert oder fügt JFIF-APP0- und EXIF-IFD0-Auflösungs-Tags in JPEGs ein und schreibt einen gültigen, CRC32-geprüften pHYs-Chunk in PNGs. Jedes visuelle Pixel und jeder Komprimierungsblock bleibt zu 100 % unberührt.',
      },
      {
        question: 'Verändert das Ändern der DPI die Pixelbreite und -höhe oder die physische Druckgröße?',
        answer:
          'Das Ändern der DPI lässt die Pixelmaße vollständig identisch – ein 3000×2400-Foto bleibt zum Beispiel 3000×2400 px. Was sich ändert, ist der Druckdichte-Header, der Publishing-Apps wie Photoshop, InDesign oder Druckportalen mitteilt, es bei 300 DPI als 10×8 Zoll statt bei 72 DPI als 41,6×33,3 Zoll zu interpretieren.',
      },
      {
        question: 'Warum zeigen hochgeladene Kamerafotos oder Screenshots oft „Vorher: Nicht gesetzt"?',
        answer:
          'Viele Smartphone-Exporte, Screenshots und Web-Optimierer entfernen JFIF-/EXIF-Auflösungsfelder oder lassen den optionalen PNG-pHYs-Chunk weg, sodass Betrachter einen 72- oder 96-DPI-Fallback annehmen. Unser Tool fügt einen Standard-Header ein, damit Druckvalidatoren 300 DPI zuverlässig erkennen.',
      },
      {
        question: 'Wie bestätigt das Verifizierte-DPI-Badge, dass das Update tatsächlich funktioniert hat?',
        answer:
          'Nach dem Erstellen des aktualisierten binären Blobs lässt das Tool seinen binären Header-Parser von Grund auf erneut über die Ausgabedatei laufen, um die neu eingebettete X-/Y-Dichte zu lesen. Das garantiert, dass die heruntergeladene Datei automatisierte Druckportal- und Desktop-Prüfungen besteht.',
      },
      {
        question: 'Was passiert, wenn ich WebP-, HEIC-, BMP-, GIF- oder SVG-Dateien hochlade?',
        answer:
          'Formate ohne standardmäßige, softwareübergreifende DPI-Header (wie WebP oder BMP) werden lokal decodiert und sauber in verlustfreies PNG mit dem exakt eingebetteten pHYs-DPI-Chunk umgewandelt. Auf diesen Karten sehen Sie ein Badge In PNG mit pHYs-DPI umgewandelt.',
      },
      {
        question: 'Welche DPI-Voreinstellungen gibt es und welchen Bereich akzeptiert die Benutzerdefinierte DPI?',
        answer:
          'Fünf Schnellvoreinstellungen decken gängige Standards ab: 72 DPI (Bildschirm), 96 DPI (Windows), 150 DPI (Entwurfsdruck), 300 DPI (Hochwertiger Druck) und 600 DPI (Archiv). Mit Benutzerdefinierte DPI können Sie eine beliebige ganze Zahl zwischen 1 und 2.400 DPI eingeben.',
      },
      {
        question: 'Bleiben beim Aktualisieren der JPEG-DPI die vorhandenen EXIF-Tags oder das ICC-Profil meiner Kamera erhalten?',
        answer:
          'Ja, unser verlustfreier JPEG-Segmentkopierer lässt Ihr Farbprofil, Ihre Kamera-Tags und Ihre Bildscandaten intakt, während er JFIF-APP0-Dichte und EXIF-XResolution/YResolution/ResolutionUnit aktualisiert, sofern ein APP1-EXIF-Segment existiert. Wenn kein JFIF-Header vorhanden war, fügt er direkt nach SOI ein sauberes 18-Byte-APP0-JFIF-Segment ein.',
      },
      {
        question: 'Warum wird die PNG-DPI nach der Umwandlung manchmal als 299 oder 300 DPI zurückgelesen?',
        answer:
          'Die offizielle PNG-pHYs-Spezifikation speichert die Auflösung in Pixeln pro Meter statt in Punkten pro Zoll und wandelt 300 DPI in 11.811 Pixel pro Meter um. Das Zurückrechnen von Pixeln pro Meter in Zoll ergibt bei fast jedem Voreinstellungswert sauber exakt 300 DPI.',
      },
      {
        question: 'Wird ein 400×400-Web-Thumbnail mit niedriger Auflösung durch das Ändern auf 300 DPI druckfertig scharf?',
        answer:
          'Nein, das Aktualisieren der DPI ändert nur Metadaten-Anweisungen, nicht die Pixelanzahl – eine 400×400-Pixel-Datei bei 300 DPI druckt nur auf 1,33×1,33 Zoll scharf. Um größere Papierformate bei 300 DPI sauber abzudecken, benötigen Sie größere Pixelmaße im Quell-Artwork.',
      },
      {
        question: 'Kann ich mehrere Druck-Assets stapelweise auf 300 DPI aktualisieren und als ein ZIP exportieren?',
        answer:
          'Ja, legen Sie eine beliebige Anzahl von JPG- oder PNG-Dateien mit bis zu 20 MB pro Datei ab, und alle werden nacheinander auf Ihre gewählte DPI verarbeitet. Sobald zwei oder mehr Dateien fertig sind, erscheint eine Stapel-bereit-Leiste mit einer Schaltfläche Alle herunterladen (ZIP), die images_<dpi>dpi_compressmypic.zip erzeugt.',
      },
      {
        question: 'Kann ich meine Meinung ändern und nach Dateien, die bereits mit 300 DPI verarbeitet wurden, 600 DPI erneut anwenden?',
        answer:
          'Ja, ein Klick auf eine andere Ziel-DPI-Voreinstellungsschaltfläche aktualisiert und verarbeitet jede Datei in Ihrer Warteschlange sofort aus den ursprünglich hochgeladenen Dateien neu, ohne Bearbeitungen zu stapeln. Wenn Sie eine Zahl in Benutzerdefinierte DPI eingeben, klicken Sie auf DPI anwenden, um alle Elemente mit dieser benutzerdefinierten Dichte zu aktualisieren.',
      },
      {
        question: 'Macht das Festlegen von 300 DPI JPEG- oder PNG-Dateigrößen deutlich größer?',
        answer:
          'Nein, das Hinzufügen oder Patchen eines JFIF-APP0-Headers (18 Byte) oder PNG-pHYs-Chunks (21 Byte) ändert das Gesamtdateigewicht bei nativen JPEGs und PNGs höchstens um einige Dutzend Byte. Nur Formate ohne DPI, die in verlustfreies PNG umgewandelt werden, ändern ihre Größe.',
      },
      {
        question: 'Werden vertrauliche Proofs, Buchcover oder ID-Scans an einen externen Server gesendet?',
        answer:
          'Nein, binäres Byte-Parsing, CRC32-Prüfsummenberechnung und Header-Patching werden lokal in Browser-ArrayBuffers ausgeführt. Ihre Dateien verlassen Ihren Computer oder Ihr Smartphone nie.',
      },
      {
        question: 'Warum lehnen Publishing-Plattformen wie Amazon KDP oder Fachzeitschriften 72-DPI-Dateien ab?',
        answer:
          'Viele automatisierte Druck-Preflight-Portale prüfen das JFIF- oder PNG-pHYs-Auflösungs-Tag des Bildes und lehnen Einreichungen unter 300 DPI ab, selbst wenn die Pixelmaße ausreichend sind. Das Aktualisieren des Header-Tags auf 300 DPI erfüllt diese Preflight-Prüfungen, ohne Artwork neu zu komprimieren.',
      },
      {
        question: 'Wie werden Ausgabedateien benannt, wenn sie einzeln oder im ZIP gespeichert werden?',
        answer:
          'Jede aktualisierte Datei behält ihren bereinigten Basistitel und hängt _<ziel>dpi plus ihre Erweiterung an, zum Beispiel poster_300dpi.jpg oder diagram_600dpi.png. So werden Ihre Originaldateien auf der Festplatte nicht überschrieben.',
      },
      {
        question: 'Funktioniert der DPI-Änderer bei JPEGs, die ursprünglich Punkte pro cm statt Punkte pro Zoll verwendeten?',
        answer:
          'Ja, der Leser erkennt sowohl Einheit=1 (Punkte pro Zoll) als auch Einheit=2 (Punkte pro cm, multipliziert mit 2,54) in JFIF- und EXIF-Tags, wenn er die Vorher-DPI anzeigt. Beim Schreiben von Ausgabe-Headern standardisiert er die Dichte sauber auf Zoll (DPI) für universelle Kompatibilität.',
      },
      {
        question: 'Kann ich DPI-Tags entfernen oder strippen, statt sie zu ändern?',
        answer:
          'Dieses Tool bettet immer Ihren gewählten Ziel-DPI-Header ein oder aktualisiert ihn, passend zu Druck- oder Anzeigestandards. Wenn Sie stattdessen alle JFIF-, EXIF- und PNG-Chunk-Metadaten aus Datenschutzgründen löschen möchten, lassen Sie Ihre Dateien durch unser Tool Metadaten aus Bildern entfernen laufen.',
      },
      {
        question: 'Was passiert, wenn ich ein beschädigtes JPEG oder ein nicht unterstütztes Format hochlade?',
        answer:
          'Jede Datei in der Warteschlange läuft unabhängig in ihrem eigenen Fehlerhandler, sodass ein einzelnes unlesbares Bild nie den Rest Ihres Stapels anhält. Fehlgeschlagene Elemente zeigen eine klare Inline-Warnung in Rot, während gültige Dateien normal fertiggestellt und in Ihren ZIP-Download verpackt werden.',
      },
      {
        question: 'Kann ich einen Screenshot aus der Zwischenablage einfügen und ihn sofort mit 300 DPI versehen?',
        answer:
          'Ja, drücken Sie Strg+V (oder Cmd+V) auf der Upload-Zone, um einen PNG-Screenshot aus der Zwischenablage direkt in den Prozessor zu übergeben. Er schreibt in wenigen Augenblicken verlustfrei einen gültigen 300-DPI-pHYs-Chunk.',
      },
      {
        question: 'Funktioniert dieser verlustfreie DPI-Editor unter Windows, Mac, Linux und in mobilen Browsern?',
        answer:
          'Ja, standardmäßige Browser-APIs für ArrayBuffer und DataView laufen sauber in Desktop-Chrome, Firefox, Edge und Safari sowie in mobilen Browsern. Es sind nie Desktop-Software, Plugins oder Server-Uploads erforderlich.',
      },
    ],
    relatedSlugs: ['/image-metadata-viewer', '/image-dimensions-checker', '/remove-image-metadata', '/'],
  },
  {
    slug: '/image-to-base64',
    name: 'Bild in Base64 umwandeln',
    shortDescription: 'Bilder in Base64-Data-URL, HTML-img- oder CSS-Snippet codieren.',
    category: 'developer',
    seoTitle: 'Bild in Base64 umwandeln – Data URL, HTML & CSS kostenlos',
    seoDescription:
      'Codieren Sie Bilder mit dem kostenlosen Bild-in-Base64-Umwandler im Browser. Erzeugen Sie Data-URLs, reine Base64-Strings, HTML-img-Tags und CSS-Snippets.',
    h1: 'Bild-in-Base64-Umwandler',
    subtitle:
      'Für Frontend-Entwickler, E-Mail-Template-Coder und technische Redakteure: Dieser lokale Bild-in-Base64-Umwandler verwandelt binäre Bild-Assets in einem Schritt in kopierfertige Textstrings. Wechseln Sie sofort zwischen den Tabs Data-URL, Reines Base64, HTML <img> und CSS url(), ohne proprietäre Icons hochzuladen.',
    howToSteps: [
      {
        title: 'Bild ablegen, auswählen oder einfügen',
        description:
          'Laden Sie eine Datei im Format JPG, PNG, WebP, SVG, GIF, BMP, ICO oder AVIF mit bis zu 15 MB in die Dropzone, oder fügen Sie ein Bild aus der Zwischenablage mit Strg+V ein.',
      },
      {
        title: 'Dateigröße und Zeichen-Overhead prüfen',
        description:
          'Prüfen Sie die obere Zusammenfassungskarte mit Ihrem Bild-Thumbnail, der ursprünglichen Byte-Größe, den natürlichen Abmessungen (sofern zutreffend), der exakten Ausgabe-Zeichenanzahl und dem Base64-Overhead-Prozentsatz.',
      },
      {
        title: 'Zwischen den 4 Entwickler-Ausgabe-Tabs wechseln',
        description:
          'Klicken Sie auf Data-URL, Reines Base64, HTML <img> oder CSS url(), um den codierten String für JSON-Payloads, HTML-Inline-Bilder oder Stylesheets zu formatieren.',
      },
      {
        title: 'In die Zwischenablage kopieren oder als .txt-Datei speichern',
        description:
          'Klicken Sie auf Ausgabe kopieren (oder klicken Sie in das Codefeld, um alles auszuwählen), um den String zu kopieren, oder klicken Sie auf Als .TXT speichern, um <dateiname>_<tab>.txt herunterzuladen.',
      },
      {
        title: 'Auf „Weitere codieren" klicken, um Dateien zu tauschen',
        description:
          'Wenn Sie bereit sind, das nächste Icon oder Sprite zu codieren, klicken Sie auf Weitere codieren, um die Ausgabe zu löschen und lokalen Objektspeicher freizugeben.',
      },
    ],
    features: [
      {
        title: '4 Entwickler-Ausgabeformate',
        description: 'Erzeugen Sie automatisch Data-URL-, Reines-Base64-, HTML-<img>- und CSS-background-image-Snippets.',
      },
      {
        title: 'Exakte Byte- & Zeichenmetriken',
        description: 'Vergleichen Sie die ursprüngliche Binärdateigröße sofort mit der codierten Base64-Stringlänge.',
      },
      {
        title: 'Kopieren per Klick & TXT-Download',
        description: 'Kopieren Sie riesige Base64-Strings zuverlässig in die Zwischenablage oder speichern Sie sie als reine Textdatei.',
      },
      {
        title: '100 % lokale FileReader-Codierung',
        description: 'Keine Uploads – die Codierung erfolgt nativ in Ihrem Browser-Tab.',
      },
    ],
    faqs: [
      {
        question: 'Warum fügt der Bild-in-Base64-Umwandler etwa 33 % zur Ausgabegröße hinzu?',
        answer:
          'Base64 stellt jeweils 3 Binärbytes (24 Bit) mit 4 druckbaren ASCII-Zeichen (je 6 Bit) dar, plus bis zu zwei Padding-Gleichheitszeichen am Ende. Dadurch codiert ein 30-KB-Bild immer auf etwa 40 KB Base64-Text, was die Zusammenfassungsleiste automatisch verfolgt.',
      },
      {
        question: 'Welche vier Ausgabeformate kann ich nach dem Codieren eines Bildes erzeugen?',
        answer:
          'Vier Tabs sitzen direkt über dem Codefeld: Data-URL (vollständige data:image/...;base64,...-URI), Reines Base64 (bereinigter Payload ohne Präfix), HTML <img> (fertiges Tag mit bereinigtem Alt- und Breiten-/Höhenattributen) und CSS url() (background-image: url("...");-Regel).',
      },
      {
        question: 'Verändert das Codieren die Bildqualität, entfernt es SVG-Code oder flacht es animierte GIFs ab?',
        answer:
          'Nein, der Codierer liest die rohe Binärdatei direkt über den Browser FileReader.readAsDataURL, ohne sie auf den Canvas zu zeichnen. Jedes ursprüngliche Byte, jedes Vektor-SVG-XML-Element, jeder ICO-Frame und jeder GIF-Animationsframe bleibt zu 100 % bitgenau identisch.',
      },
      {
        question: 'Welche Bilddateiformate und maximale Upload-Größe werden unterstützt?',
        answer:
          'Sie können JPG-, PNG-, WebP-, SVG-, GIF-, BMP-, ICO-Favicons und AVIF-Bilder mit bis zu 15 MB pro Datei codieren. Die Begrenzung von Base64-Eingaben auf 15 MB verhindert, dass mehrmegabytegroße Textstrings das Rendern der Zwischenablage oder des Textfelds einfrieren.',
      },
      {
        question: 'Wann sollten Entwickler Base64-Data-URLs inline einbetten statt auf reguläre Bilddateien zu verweisen?',
        answer:
          'Das Inline-Einbetten winziger UI-Icons, Spinner, Favicons oder E-Mail-Signatur-Badges unter wenigen Kilobyte eliminiert zusätzliche HTTP-Roundtrips und funktioniert sauber in eigenständigen HTML-Dokumenten. Bei großen Hero-Fotos bleiben reguläre WebP- oder JPG-Bild-URLs kleiner und profitieren vom HTTP-Caching des Browsers.',
      },
      {
        question: 'Warum enthält der HTML-<img>-Tab automatisch Breiten- und Höhenattribute?',
        answer:
          'Sobald Ihr Browser die temporäre Objektvorschau lädt und naturalWidth und naturalHeight liest, werden diese Pixelmaße zusammen mit einem Alt-Tag aus Ihrem Dateibasistitel in das HTML-Snippet eingetragen. Die Angabe der Maße hilft, Cumulative Layout Shift (CLS) auf Webseiten zu verhindern.',
      },
      {
        question: 'Kann ich lange Base64-Ausgaben herunterladen, wenn das Kopieren großer Strings unpraktisch ist?',
        answer:
          'Ja, klicken Sie neben Ausgabe kopieren auf Als .TXT speichern, um den exakt im aktiven Tab angezeigten Text (Data-URL, Reines Base64, HTML oder CSS) als <basis>_<tab>.txt herunterzuladen. So lassen sich sehr lange Payloads sauber in VS Code oder Terminal-Skripten öffnen.',
      },
      {
        question: 'Was passiert, wenn mein Browser beim Klicken auf „Ausgabe kopieren" Zwischenablagen-Berechtigungen blockiert?',
        answer:
          'Wenn navigator.clipboard.writeText durch Browsereinstellungen zum Datenschutz blockiert wird, fordert eine Inline-Notiz Sie auf, direkt aus dem Codefeld zu kopieren. Ein Klick oder Tab in das dunkle Monospace-Textfeld markiert automatisch den gesamten String, sodass Strg+C / Cmd+C alles sauber kopiert.',
      },
      {
        question: 'Wie unterscheidet sich Reines Base64 von der Data-URL beim Senden von API-JSON-Payloads?',
        answer:
          'Die Data-URL stellt data:<mime>;base64, voran, sodass Browser sie direkt in src-Attributen oder CSS-url()-Regeln rendern können. APIs, mobile Datenbanken und Server-Codierer erwarten oft nur Reines Base64 – ein Wechsel zum Tab Reines Base64 entfernt den Header automatisch.',
      },
      {
        question: 'Werden proprietäre UI-Icons, vertrauliche Diagramme oder Kunden-Assets irgendwo hochgeladen?',
        answer:
          'Niemals – FileReader liest Bytes strikt im lokalen clientseitigen Browserspeicher. Es werden keine Bilddateien oder Base64-Strings an Remote-Server übertragen.',
      },
      {
        question: 'Kann ich ein SVG-Logo oder eine favicon.ico-Datei sauber codieren?',
        answer:
          'Ja, sowohl .svg- als auch .ico-Erweiterungen werden im Upload-Filter explizit unterstützt und mit dem passenden data:image/svg+xml- oder image/x-icon-MIME-Präfix codiert. Sie können Dateien auch in den Umwandler ablegen und sie dann mit unserem Base64-in-Bild-Decoder im Roundtrip prüfen.',
      },
      {
        question: 'Warum ist der Overhead-Prozentsatz in den HTML-<img>- und CSS-url()-Tabs etwas höher?',
        answer:
          'Zusätzlich zur 33-%-Base64-Codierungserweiterung und dem Data-URL-MIME-Header umschließen die HTML- und CSS-Tabs zusätzliche Markup-Zeichen wie <img src="..." alt="..." />. Der Zusammenfassungszähler berechnet die Zeichen live neu, sobald Sie den Tab wechseln.',
      },
      {
        question: 'Kann ich einen Screenshot direkt aus meiner Zwischenablage einfügen, um schnell eine Data-URL zu erhalten?',
        answer:
          'Ja, drücken Sie Strg+V (oder Cmd+V auf dem Mac) an einer beliebigen Stelle des Upload-Bildschirms, um ein kopiertes Bild direkt aus Ihrer Zwischenablage zu erfassen. Das Tool codiert es sofort in Data-URL-, Reines-Base64-, HTML- und CSS-Formate, bereit zum Kopieren per Klick.',
      },
      {
        question: 'Bewahrt Reines Base64 die Standardzeichen + und / mit =-Padding?',
        answer:
          'Ja, der Browser-FileReader gibt standardmäßige RFC-4648-Base64-Strings mit +, / und abschließendem =-Padding aus, statt URL-sicherer base64url-Ersetzungen. Das gewährleistet direkte Kompatibilität mit HTML-Data-URIs, MIME-E-Mail-Payloads und Standard-Backend-Decodern.',
      },
      {
        question: 'Warum blockieren E-Mail-Clients manchmal Inline-Base64-Bilder?',
        answer:
          'Einige Webmail-Anbieter und Unternehmens-Spamfilter entfernen data:image-URIs in HTML-Newslettern aus Sicherheitsgründen, obwohl Browser sie problemlos anzeigen. Base64 funktioniert am besten in Web-Apps, einzelnen HTML-Dokumenten, React-/CSS-Bundles und JSON-/SVG-Templates.',
      },
      {
        question: 'Wie bewahre ich ursprüngliche Kamera-Metadaten oder entferne sie vor der Base64-Codierung?',
        answer:
          'Da dieses Tool exakte Rohbytes codiert, bleiben vorhandene EXIF-Metadaten in einem JPEG innerhalb des Base64-Strings codiert. Wenn Sie kleinere, metadatenfreie Base64-Strings möchten, lassen Sie Ihr Foto vorher durch unser Tool Metadaten aus Bildern entfernen laufen.',
      },
      {
        question: 'Sollte ich große PNGs oder JPGs vor dem Umwandeln in Base64 verkleinern?',
        answer:
          'Ja – da Base64 die Größe um ca. 33 % aufbläht, spart das Komprimieren eines 300-KB-PNG auf 40 KB WebP vorher etwa 350 KB Base64-Textballast in Ihrem Stylesheet oder Bundle. Nutzen Sie für große Einsparungen vorher unseren Bildkompressor oder Web-Bild-Optimierer.',
      },
      {
        question: 'Warum fehlen bei bestimmten ungewöhnlichen ICO- oder fehlerhaften Dateien manchmal die Maße?',
        answer:
          'Wenn ein Browser ein ungewöhnliches Multi-Frame-ICO oder einen exotischen Header nicht in ein HTMLImageElement-Vorschau decodieren kann, werden die Maße sauber aus der Zusammenfassung weggelassen, während die rohe Base64-Codierung weiterhin gelingt. Standard-PNG, JPG, WebP, GIF, SVG, BMP und AVIF zeigen exakte B×H-Pixelzahlen.',
      },
      {
        question: 'Wie codiere ich nach dem Kopieren des ersten Snippets ein weiteres Bild?',
        answer:
          'Klicken Sie oben rechts in der Zusammenfassungskarte auf Weitere codieren, um die Ausgabe-Tabs zurückzusetzen und das Textfeld zu leeren. Dadurch wird sofort temporärer Vorschauspeicher freigegeben und die Dropzone für Ihr nächstes Asset wiederhergestellt.',
      },
      {
        question: 'Funktioniert der Base64-Codierer in mobilen Safari- und Chrome-Browsern?',
        answer:
          'Ja, die integrierten HTML5-FileReader- und Clipboard-APIs laufen zuverlässig in iOS Safari, Android Chrome, Windows, macOS und Linux. Da die Codierung lokal im Browserspeicher ausgeführt wird, gibt es auch bei Mobilfunkdaten keine Serververzögerungen.',
      },
    ],
    relatedSlugs: ['/base64-to-image', '/favicon-generator', '/image-dimensions-checker', '/'],
  },
  {
    slug: '/base64-to-image',
    name: 'Base64 in Bild umwandeln',
    shortDescription: 'Base64-Data-URL oder reinen Base64-String zurück in ein Bild decodieren.',
    category: 'developer',
    seoTitle: 'Base64 in Bild umwandeln – Decoder kostenlos online',
    seoDescription:
      'Wandeln Sie codierte Strings mit dem kostenlosen Base64-in-Bild-Decoder in Grafiken um. PNG, JPG, WebP, GIF oder SVG automatisch erkennen und lokal speichern.',
    h1: 'Base64-in-Bild-Decoder',
    subtitle:
      'Für Webentwickler, die API-Payloads debuggen, E-Mail-Marketer, die Inline-Icons prüfen, und QA-Tester: Dieser Base64-in-Bild-Decoder im Browser rekonstruiert Data-URLs und reine Base64-Strings in herunterladbare Dateien. Prüfen Sie erkanntes MIME-Format, Pixelmaße und Byte-Größe privat auf Ihrem Gerät.',
    howToSteps: [
      {
        title: 'Base64-String oder Data-URL einfügen',
        description:
          'Fügen Sie entweder einen vollständigen data:image/...;base64,...-String oder reine Base64-Zeichen in das Feld Base64-String oder Data-URL einfügen ein.',
      },
      {
        title: 'Auf automatische Decodierung warten (oder auf „Bild decodieren" klicken)',
        description:
          'Der Decoder parst Leerzeichen, URL-sichere Zeichen und magische Header-Bytes sofort beim Einfügen (oder beim Klicken auf Bild decodieren), um das Bild zu validieren.',
      },
      {
        title: 'Vorschau, Format, Größe und Maße prüfen',
        description:
          'Sehen Sie die decodierte Grafik über einem Transparenz-Schachbrettmuster zusammen mit dem Badge Gültiges Bild decodiert, dem Erkannten Format, der Binärgröße und den Pixelmaßen Breite × Höhe.',
      },
      {
        title: 'Downloadformat wählen',
        description:
          'Wählen Sie Original, um die exakt decodierte Binärdatei unberührt zu speichern, oder wählen Sie PNG, JPG oder WEBP, um das Bild beim Export umzuwandeln.',
      },
      {
        title: 'Decodierte Bilddatei herunterladen',
        description:
          'Klicken Sie auf Bilddatei herunterladen, um decoded_image.<ext> direkt auf Ihr Gerät zu speichern, oder klicken Sie oben im Eingabefeld auf Leeren, um einen weiteren Payload zu testen.',
      },
    ],
    features: [
      {
        title: 'Erkennt fehlenden Data-URL-Präfix automatisch',
        description: 'Identifiziert automatisch magische PNG-, JPEG-, GIF-, WebP-, BMP- und SVG-Header, selbst aus reinem Base64.',
      },
      {
        title: 'Sofortige Validierung & Fehlermeldungen',
        description: 'Erkennt ungültige Base64-Zeichen oder beschädigte Header eindeutig.',
      },
      {
        title: 'Optionale Formatumwandlung',
        description: 'Laden Sie die exakt decodierte Binärdatei herunter oder exportieren Sie sie erneut als PNG, JPG oder WebP.',
      },
      {
        title: 'Private Decodierung im Browser',
        description: 'Sicher für interne Token, E-Mail-Assets und proprietäre UI-Icons.',
      },
    ],
    faqs: [
      {
        question: 'Kann dieser Base64-in-Bild-Decoder Strings lesen, die das Präfix data:image/ weglassen?',
        answer:
          'Ja, wenn Sie reines Base64 ohne Data-URL-Header einfügen, prüft der Decoder die decodierten magischen Signatur-Bytes am Anfang des Binärstroms. Er erkennt automatisch PNG-, JPEG-, GIF-, WebP-, BMP-, ICO- und Inline-XML-/SVG-Markup.',
      },
      {
        question: 'Verarbeitet er URL-sichere Base64-Varianten und versehentliche Zeilenumbrüche?',
        answer:
          'Ja, vor dem Aufruf von atob() entfernt der Decoder automatisch Leerzeichen, Spaces und Zeilenumbrüche und wandelt URL-sichere Zeichen - und _ zurück in Standard-+ und /. Dadurch funktioniert das Einfügen umbrochener Strings aus JSON-Protokollen, Terminal-Ausgaben oder JWT-Payloads sauber.',
      },
      {
        question: 'Was passiert, wenn ich einen beschädigten oder Nicht-Bild-Base64-Payload einfüge?',
        answer:
          'Ungültige Base64-Zeichen lösen eine sofortige Validierungsmeldung aus, während gültige Base64-Bytes, die kein vom Browser lesbares Bild bilden, einen expliziten Fehler anzeigen, der erklärt, dass die Bytes nicht gerendert werden konnten. Nichts bricht ab oder blockiert die Seite.',
      },
      {
        question: 'Welche Downloadformat-Optionen werden angeboten, sobald ein String decodiert ist?',
        answer:
          'Sie können vor dem Speichern Original, PNG, JPG oder WEBP wählen. Original speichert die exakt rohen Binärbytes unberührt als decoded_image.<ext>, während PNG, JPG oder WEBP die decodierte Grafik auf HTML5-Canvas neu rendern.',
      },
      {
        question: 'Was passiert mit transparenten Bereichen, wenn ich ein decodiertes PNG oder SVG als JPG erneut exportiere?',
        answer:
          'Die Auswahl von JPG im Downloadformat füllt den Canvas vor der Codierung mit 92 % Qualität automatisch mit einem sauberen, einfarbigen weißen (#FFFFFF) Hintergrund. Original, PNG oder WEBP bewahren die volle Transparenz über der Schachbrettvorschau.',
      },
      {
        question: 'Bewahrt der Decoder animierte GIFs und Vektor-SVGs, wenn er auf Original eingestellt ist?',
        answer:
          'Ja, die Auswahl von Original lädt den exakten Blob herunter, der direkt aus Ihrem decodierten Byte-Array erstellt wurde, und bewahrt SVG-Vektorpfade und Multi-Frame-GIF-Animationen unberührt. Beachten Sie, dass der Wechsel des Downloadformats zu PNG, JPG oder WEBP SVGs oder GIFs des ersten Frames per Canvas rasterisiert.',
      },
      {
        question: 'Welche Metriken erscheinen neben der Vorschau des decodierten Bildes?',
        answer:
          'Nach der Validierung zeigt das rechte Zusammenfassungs-Panel ein grünes Status-Badge Gültiges Bild decodiert zusammen mit dem Erkannten Format (zum Beispiel PNG, JPEG oder SVG+XML) an. Direkt darunter können Sie die exakte decodierte Binärgröße in KB/MB und die natürlichen Maße in Pixeln prüfen.',
      },
      {
        question: 'Warum zeigt ein data:image/svg+xml-String ohne ;base64, einen Codierungsfehler an?',
        answer:
          'Nicht-Base64-Data-URIs (wie prozentcodierte SVG-Strings, z. B. data:image/svg+xml,%3Csvg...) sind reiner Text statt Base64-Payloads. Dieses Tool validiert explizit Standard-Base64-Payloads oder ;base64,-Data-URLs, sodass ungültige Eingaben eindeutig fehlschlagen.',
      },
      {
        question: 'Besteht ein Risiko beim Decodieren interner API-Antworten, QR-Token oder privater Icons hier?',
        answer:
          'Nein, alle String-Bereinigungen, atob()-Byte-Decodierungen, MIME-Signatur-Erkennungen und Bild-Renderings laufen strikt im Speicher Ihres Browser-Tabs ab. Codierte Strings wandern nie über ein Netzwerk oder berühren Remote-Protokolle.',
      },
      {
        question: 'Wie hilft die Schachbrettvorschau beim Prüfen decodierter Icons?',
        answer:
          'Ein dezentes hellgraues Schachbrettmuster wird hinter dem Vorschau-Rahmen gerendert, sodass transparente Ausschnitte, weiße UI-Icons und weiche Schatten sofort hervorstechen. Ohne Schachbrett würden weiße transparente Logos unsichtbar in ein leeres weißes Panel übergehen.',
      },
      {
        question: 'Warum ist die decodierte Binärdateigröße kleiner als der Base64-Text, den ich eingefügt habe?',
        answer:
          'Base64-Text erweitert Binärdaten um etwa 33 %, indem er 6 Bit pro ASCII-Zeichen verwendet. Die Umwandlung zurück in rohe Bildbytes stellt die ursprüngliche kompakte Binärdateigröße wieder her.',
      },
      {
        question: 'Kann ich HTML-Anführungszeichen oder CSS-url("...") vor dem Einfügen um meinen String wickeln?',
        answer:
          'Für eine saubere Validierung fügen Sie nur die Data-URL (data:image/...;base64,...) oder die Base64-Zeichen selbst ein, ohne umgebende HTML-Tags oder CSS-Anführungszeichen. Das Entfernen umgebender Anführungszeichen stellt sicher, dass der Validator reines Base64 liest.',
      },
      {
        question: 'Wie wandle ich einen alten decodierten BMP- oder ICO-Favicon-Base64-String in modernes WebP um?',
        answer:
          'Fügen Sie den reinen Base64- oder Data-URL-String ein, bestätigen Sie, dass die Vorschau sauber rendert, klicken Sie im Downloadformat-Auswähler auf WEBP und klicken Sie auf Bilddatei herunterladen. Der Canvas-Exporteur gibt sofort ein komprimiertes WebP-Bild aus.',
      },
      {
        question: 'Wie schnell funktioniert die Decodierung bei Base64-Strings mit mehreren Megabyte?',
        answer:
          'Die Decodierung erfolgt lokal in JavaScript in Millisekunden bei kleinen Icons und typischen Webfotos unter mehreren Megabyte. Sehr große eingefügte Strings (Dutzende Megabyte Text) hängen hauptsächlich von der Einfügegeschwindigkeit des Textfelds Ihres Browsers ab.',
      },
      {
        question: 'Kann ich SVG+XML-Base64-Strings in scharfe Raster-PNG-Dateien decodieren?',
        answer:
          'Ja, fügen Sie eine Base64-codierte SVG-Data-URL oder reines SVG-Base64-Markup ein, das der Decoder automatisch über <svg- oder <?xml-Header erkennt. Wechseln Sie dann das Downloadformat von Original zu PNG, um die Vektorgrafik auf dem Canvas in ihrer natürlichen Größe zu rastern.',
      },
      {
        question: 'Warum wird die Ausgabedatei immer als decoded_image.<ext> heruntergeladen?',
        answer:
          'Standard-Base64-Strings und Data-URLs codieren rohe Bildbytes und MIME-Typen, ohne einen ursprünglichen Dateinamen mitzuführen. Um Downloads über alle Eingaben hinweg vorhersehbar zu halten, benennt der Exporteur die gespeicherte Datei decoded_image, gefolgt von der erkannten oder gewählten Formaterweiterung.',
      },
      {
        question: 'Wie kann ich einen riesigen Base64-String am schnellsten leeren und den nächsten prüfen?',
        answer:
          'Klicken Sie oben rechts in der Karte Base64-String einfügen auf Leeren, um das Textfeld mit einem Klick zu leeren. Dadurch werden sofort das Vorschau-Panel entfernt und temporäre Objekt-URLs aus dem Browserspeicher freigegeben.',
      },
      {
        question: 'Decodiert das Einfügen eines Base64-Strings automatisch, ohne dass ich auf „Bild decodieren" klicken muss?',
        answer:
          'Ja, die Decodierung startet automatisch, sobald Text in das Eingabefeld eingegeben wird oder sich ändert, sodass gültige Payloads innerhalb von Millisekunden in der Vorschau erscheinen. Die Schaltfläche Bild decodieren bleibt bereit, wenn Sie die Validierung manuell erneut ausführen möchten.',
      },
      {
        question: 'Wie kann ich ein heruntergeladenes Bild später wieder in HTML- oder CSS-Data-URLs codieren?',
        answer:
          'Scrollen Sie zum Abschnitt Verwandte Tools unten und öffnen Sie Bild in Base64, um die Richtung sauber zu wechseln. Es verwandelt jedes JPG-, PNG-, WebP-, SVG-, GIF-, BMP- oder ICO-Bild zurück in Data-URL-, Reines-Base64-, HTML-<img>- oder CSS-url()-Snippets.',
      },
      {
        question: 'Funktioniert der Base64-in-Bild-Decoder offline oder auf Smartphones?',
        answer:
          'Ja, jede Stringprüfung, Byte-Decodierung und Canvas-Formatumwandlung läuft in integrierten Browser-APIs ohne Netzwerkanrufe ab. Es funktioniert nach dem Laden der Seite reibungslos in iOS Safari, Android Chrome, Windows, macOS und Linux.',
      },
    ],
    relatedSlugs: ['/image-to-base64', '/image-converter', '/image-dimensions-checker', '/'],
  },
  {
    slug: '/image-color-palette-extractor',
    name: 'Farbpaletten-Extraktor',
    shortDescription: 'Dominante Farben aus jedem Foto extrahieren – mit HEX-, RGB- und HSL-Codes und Export.',
    category: 'developer',
    seoTitle: 'Farbpaletten-Extraktor online kostenlos',
    seoDescription:
      'Extrahieren Sie dominante Farben aus jedem Foto kostenlos online: 3–12 Farbfelder mit HEX-, RGB- und HSL-Codes, CSS-Variablen, JSON und PNG-Karte im Browser.',
    h1: 'Farbpaletten-Extraktor online kostenlos',
    subtitle:
      'Entdecken Sie das zentrale Farbschema in jedem Foto, jeder Illustration oder jedem UI-Screenshot mit unserem browserbasierten Farbpaletten-Extraktor, der auf Median-Cut-Quantisierung basiert. Für UI-Designer, Markenstrategen und Frontend-Entwickler erzeugt er 3 bis 12 ausgewogene Farbfelder mit prozentualen Anteilen, kopierbaren HEX-, RGB- und HSL-Codes per Klick, CSS-Variablen, JSON-Daten und teilbaren PNG-Palettenkarten – lokal auf Ihrem Gerät.',
    howToSteps: [
      {
        title: 'Quellbild hochladen',
        description:
          'Ziehen Sie eine JPG-, PNG-, WebP-, HEIC-, GIF-, BMP- oder SVG-Datei bis 20 MB in den Upload-Bereich oder wählen Sie sie aus (oder fügen Sie sie aus der Zwischenablage ein).',
      },
      {
        title: 'Anzahl der Farben festlegen (3–12)',
        description:
          'Ziehen Sie den Regler „Anzahl der Farben" zwischen 3 minimalistischen Akzenttönen und 12 detaillierten Farbfeldern, um die Palette sofort neu zu berechnen.',
      },
      {
        title: 'Proportionalen Farbstreifen prüfen',
        description:
          'Sehen Sie sich den horizontalen proportionalen Farbstreifen über den Farbfeldkarten an, um zu erkennen, wie dominant jeder Farbton im Bild ist.',
      },
      {
        title: 'HEX-, RGB- oder HSL-Codes der Farbfelder kopieren',
        description:
          'Klicken Sie auf eine HEX-, RGB- oder HSL-Pille in einer Farbfeldkarte, um genau diesen Farbwert direkt in Ihre Zwischenablage zu kopieren.',
      },
      {
        title: 'CSS-Variablen oder JSON exportieren',
        description:
          'Nutzen Sie „CSS-Variablen kopieren" für einen einsetzfertigen :root-Block oder „JSON kopieren" für strukturierte Farbfeldcodes, Prozentanteile und Quellmaße.',
      },
      {
        title: 'Paletten-PNG-Karte herunterladen',
        description:
          'Klicken Sie auf „Paletten-PNG herunterladen", um eine saubere weiße Präsentationskarte zu speichern, die Ihr Vorschaubild mit den extrahierten Farbblöcken kombiniert.',
      },
    ],
    features: [
      { title: 'Median-Cut-Farbquantisierung', description: 'Gruppiert Millionen von Bildpixeln in Millisekunden zu ausgewogenen, repräsentativen dominanten Farbfeldern.' },
      { title: 'HEX, RGB, HSL und Dominanz in %', description: 'Jedes Farbfeld zeigt exakte Farbcodes und welchen Anteil des Bildes es einnimmt.' },
      { title: 'Entwickler-Exporte und PNG-Karte', description: 'Exportieren Sie als CSS-Variablen, JSON, Tailwind-Snippet oder als teilbare PNG-Palettenkarte.' },
      { title: '100 % browserbasiert', description: 'Analysiert Pixel lokal auf HTML5-Canvas, ohne Bilder hochzuladen.' },
    ],
    faqs: [
      {
        question: 'Wie erstellt die Median-Cut-Quantisierung eine Palette aus meinem Foto?',
        answer:
          'Median-Cut gruppiert die abgetasteten Pixel in dreidimensionale RGB-Farbboxen und teilt wiederholt den breitesten Farbkanal an seinem Median, bis die gewünschte Anzahl an Boxen übrig bleibt. Jede Box wird zu einem repräsentativen Farbfeld gemittelt, gewichtet nach der Anzahl der Pixel, die in sie gefallen sind – so entstehen harmonische dominante Farben statt verrauschter einzelner Pixel.',
      },
      {
        question: 'Wie viele Farbfelder kann ich mit diesem Farbpaletten-Extraktor erzeugen?',
        answer:
          'Sie können mit dem Regler „Anzahl der Farben" zwischen 3 und 12 dominante Farben extrahieren. 3 bis 5 eignen sich gut für minimalistische Markenthemen, während 8 bis 12 subtile Schattentöne und sekundäre Akzentfarben sichtbar machen.',
      },
      {
        question: 'Was bedeutet die Prozentangabe auf jeder Farbkarte?',
        answer:
          'Jeder Prozentwert zeigt den Anteil der abgetasteten, nicht transparenten Pixel, die bei der Quantisierung diesem Farbfeld zugeordnet wurden. Der proportionale Farbstreifen skaliert jedes Farbsegment direkt entsprechend dieser exakten Prozentwerte.',
      },
      {
        question: 'Kann ich alle extrahierten Farbfelder auf einmal als CSS-Variablen kopieren?',
        answer:
          'Ja. Mit einem Klick auf „CSS-Variablen kopieren" kopieren Sie einen vollständigen :root-Block mit --palette-1 bis --palette-N und allen Hex-Farben, bereit für Ihr Stylesheet. Später können Sie die Variablen an Ihre Design-Token anpassen.',
      },
      {
        question: 'Welche Daten sind enthalten, wenn ich auf „JSON kopieren" klicke?',
        answer:
          '„JSON kopieren" schreibt ein Array von Objekten mit Index, Hex-, RGB- und HSL-Wert sowie prozentualem Dominanzanteil jedes Farbfelds. Entwickler können diese Daten direkt in Theme-Konfigurationsdateien, Design-Dokumentation oder automatisierte Style-Skripte übernehmen.',
      },
      {
        question: 'Was erzeugt „Paletten-PNG herunterladen"?',
        answer:
          '„Paletten-PNG herunterladen" erstellt eine saubere, 1000 Pixel breite weiße Präsentationskarte, die Ihre Quellgrafik oben zentriert zeigt, darüber abgerundete Farbblöcke mit Hex-Codes und Prozentanteilen. Sie wird lokal als <dateiname>_palette.png heruntergeladen – ohne Wasserzeichen.',
      },
      {
        question: 'Warum liefert der Paletten-Extraktor andere Ergebnisse als eine Pipette?',
        answer:
          'Eine Pipette tastet einen einzigen Pixel unter Ihrem Cursor ab, während die Palettenextraktion das gesamte Bild in übergeordnete dominante Farbfamilien gruppiert. Dadurch ist sie schneller, wenn Sie stimmige Farbschemata aufbauen wollen, statt einen winzigen Punkt exakt zu treffen.',
      },
      {
        question: 'Wie werden transparente Hintergründe beim Extrahieren von Farben aus PNGs behandelt?',
        answer:
          'Pixel mit einer Alphatransparenz unter 50 % werden vor der Quantisierung übersprungen. So verzerrt leere transparente Leinwandfläche um Logos oder Produktfreisteller die Palette nicht in Richtung Weiß oder Schwarz.',
      },
      {
        question: 'Untersucht der Extraktor wirklich jeden einzelnen Pixel eines riesigen 20-MB-Fotos?',
        answer:
          'Damit die Extraktion in Ihrem Browser schnell bleibt, wird das Bild vor dem Median-Cut vorübergehend auf eine Offscreen-Leinwand mit bis zu 140 Pixeln an der längsten Kante skaliert. Da die Verhältnisse der dominanten Farben in dieser Größe praktisch identisch bleiben, werden Paletten fast sofort berechnet, ohne dass Ihr Tab einfriert.',
      },
      {
        question: 'Welche Bilddateiformate und Größen werden akzeptiert?',
        answer:
          'Sie können JPG-, PNG-, WebP-, iPhone-HEIC/HEIF-, GIF-, BMP- und SVG-Dateien bis 20 MB pro Bild hochladen. Animierte GIFs mit mehreren Bildern extrahieren Farben sauber aus ihrem ersten Bild.',
      },
      {
        question: 'Warum erschienen zwei ähnliche Farbtöne in meiner 12-Farben-Palette?',
        answer:
          'Fotos mit großen Verläufen – etwa Sonnenuntergänge, Hauttöne oder Studiohintergründe – enthalten Millionen von Pixeln, die sich in einer Region des Farbraums häufen. Bei höheren Farbfeldzahlen wie 10 oder 12 unterteilt Median-Cut diese dichte Region naturgemäß in eng verwandte Glanzlichter und Mitteltöne.',
      },
      {
        question: 'Werden Markenkonzepte, Kunden-Moodboards oder Screenshots an einen Server gesendet?',
        answer:
          'Nein. Pixelabtastung, Farbgruppierung, Codeformatierung und das Rendern der PNG-Karte erfolgen ausschließlich im lokalen HTML5-Canvas-Speicher. Ihre kreativen Assets bleiben strikt auf Ihrem eigenen Gerät.',
      },
      {
        question: 'Kann ich die Anzahl der Farbfelder nach dem Kopieren von CSS ändern, ohne erneut hochzuladen?',
        answer:
          'Ja. Wenn Sie den Regler „Anzahl der Farben" bewegen, werden die zwischengespeicherten Bilddaten sofort im Arbeitsspeicher neu gruppiert, sodass Sie 4, 6 oder 10 Farben vor dem Export nebeneinander vergleichen können.',
      },
      {
        question: 'Warum erscheint ein winziger Neon-Akzent nicht in einer 4-Farben-Palette?',
        answer:
          'Da Median-Cut Farbregionen mit den größten Pixelflächen priorisiert, kann ein winziger Akzent von 1 % in einem riesigen dunklen Screenshot bei niedrigen Farbfeldzahlen in eine breitere Box übergehen. Wenn Sie die Anzahl der Farben auf 10 oder 12 erhöhen, werden kleinere Akzentfarben in der Regel sichtbar.',
      },
      {
        question: 'Sind die Textbeschriftungen der Farbfelder auf sehr dunklen oder sehr hellen Farben lesbar?',
        answer:
          'Ja. Sowohl auf den Live-Karten der Seite als auch auf der exportierten Paletten-PNG-Karte wird die weiße oder dunkle Schriftfarbe automatisch aus der wahrgenommenen Helligkeit jeder Farbe berechnet, sodass Hex-Codes lesbar bleiben.',
      },
      {
        question: 'Kann ich einen Screenshot direkt aus der Zwischenablage in den Extraktor einfügen?',
        answer:
          'Ja. Drücken Sie Strg+V unter Windows/Linux oder Cmd+V unter macOS an einer beliebigen Stelle der Seite, um einen kopierten Screenshot oder ein Design-Mockup direkt in den Farbanalysator zu laden.',
      },
      {
        question: 'Wie genau entsprechen die HSL- und RGB-Zeichenfolgen den CSS-Standards?',
        answer:
          'Jedes Farbfeld gibt standardmäßige, CSS-gültige rgb(r, g, b)- und hsl(h, s %, l %)-Schreibweisen zusammen mit sechsstelligen Hex-Codes in Großbuchstaben (#RRGGBB) aus. Sie können jede kopierte Zeichenfolge direkt in CSS, Figma oder die Entwicklertools des Browsers einfügen.',
      },
      {
        question: 'Kann ich eine Palette aus einem SVG-Vektorlogo extrahieren?',
        answer:
          'Ja. Wenn Sie eine SVG-Datei bis 20 MB ablegen, rastert Ihr Browser sie sauber auf Canvas, bevor die Farben gezählt werden – Sie erhalten sofort Farbfelder und Prozentanteile aus Vektorgrafiken.',
      },
      {
        question: 'Löscht das Hochladen eines brandneuen Bildes die alten Farbfelder automatisch?',
        answer:
          'Ja, wenn Sie ein Ersatzbild ablegen oder auf „Ändern" klicken, wird der vorherige Palettenzustand sauber gelöscht und eine frische Quantisierung auf der neuen Grafik ausgeführt. Sie müssen die Seite zwischen Fotos nie neu laden.',
      },
      {
        question: 'Kann ich diesen Paletten-Extraktor auf iOS, Android und Desktop-Browsern verwenden?',
        answer:
          'Ja. Das responsive Farbfeldraster, der Regler und die Kopierbuttons laufen reibungslos in mobilem Safari, Android-Chrome und modernen Desktop-Browsern – ohne Registrierung oder Installation.',
      },
    ],
    relatedSlugs: ['/image-color-picker', '/favicon-generator', '/add-background-to-image', '/'],
  },
  {
    slug: '/gif-maker',
    name: 'GIF-Ersteller',
    shortDescription: 'Animierte GIFs aus JPG, PNG und WebP erstellen – mit Bilddauer und Schleifensteuerung.',
    category: 'create',
    seoTitle: 'Animierter GIF-Ersteller online kostenlos',
    seoDescription:
      'Erstellen Sie GIFs kostenlos online: Kombinieren Sie JPG-, PNG-, WebP- und HEIC-Bilder, stellen Sie die Bilddauer ein und wählen Sie die Schleifenanzahl.',
    h1: 'Animierter GIF-Ersteller kostenlos',
    subtitle:
      'Verwandeln Sie Fotos, Produktansichten und UI-Ablauf-Bilder in Schleifenanimationen mit unserem kostenlosen animierten GIF-Ersteller, der sauber in Ihrem Browser läuft. Ideal für Social-Media-Ersteller, Tutorial-Autoren und Marketer: Ordnen Sie Bilder neu, duplizieren Sie sie und stimmen Sie sie einzeln zeitlich ab, wählen Sie Schleifenanzahlen, passen Sie Bildanpassung und Maße an und codieren Sie wasserzeichenfreie GIF89a-Dateien privat.',
    howToSteps: [
      {
        title: 'Zwei oder mehr Bilddateien hochladen',
        description:
          'Ziehen Sie JPG-, PNG-, WebP-, HEIC-, GIF-, BMP- oder SVG-Dateien bis 20 MB pro Datei in den Bild-Drop-Bereich (oder nutzen Sie später „Bilder hinzufügen", um weitere anzuhängen).',
      },
      {
        title: 'Bilder neu anordnen, duplizieren oder löschen',
        description:
          'Ziehen Sie Bildkarten an ihren Griffen oder nutzen Sie die Pfeilbuttons, um die Reihenfolge festzulegen, wichtige Bilder zu duplizieren oder unerwünschte Aufnahmen zu entfernen.',
      },
      {
        title: 'Globale Geschwindigkeit und Dauern pro Bild festlegen',
        description:
          'Wählen Sie einen Regler für die Standard-Bilddauer (50–3000 ms) oder eine Schnellvoreinstellung von 1–10 FPS und geben Sie bei Bedarf benutzerdefinierte Dauern (ms) für einzelne Bilder ein.',
      },
      {
        title: 'Schleifenverhalten und Bildanpassung konfigurieren',
        description:
          'Wählen Sie „Immer", „Schleifen festlegen" (2–50 Wiedergaben) oder „Einmal abspielen" und danach „Enthalten" oder „Abdecken" zusammen mit einer Hintergrund-Mattefarbe.',
      },
      {
        title: 'Ausgabemaße und Palettenqualität anpassen',
        description:
          'Wählen Sie eine Voreinstellung von 480 px, 640 px, 800 px oder „Original" (oder geben Sie Breite und Höhe von 16 bis 2000 px ein) und stellen Sie die Farbpaletten-Qualität von 10 % bis 100 % ein.',
      },
      {
        title: 'Animiertes GIF erzeugen und herunterladen',
        description:
          'Klicken Sie auf „Animiertes GIF erzeugen", um die Live-Timing-Wiedergabe zu sehen, oder codieren Sie lokal und speichern Sie animated_compressmypic.gif.',
      },
    ],
    features: [
      { title: 'Echte clientseitige GIF89a-Codierung', description: 'Nutzt einen schnellen browserinternen Farbquantisierer und LZW-GIF-Encoder (bei Bedarf nachgeladen) – null externe API-Aufrufe oder Server-Uploads.' },
      { title: 'Globale Dauern und Dauern pro Bild', description: 'Legen Sie eine einheitliche Bildgeschwindigkeit in Millisekunden oder FPS-Voreinstellungen fest und überschreiben Sie optional die Zeit einzelner wichtiger Bilder.' },
      { title: 'Flexible Schleifen- und Anpassungssteuerung', description: 'Wählen Sie Endlosschleife, einmaliges Abspielen oder eine exakte Wiedergabeanzahl sowie die Bildanpassung „Enthalten" oder „Abdecken".' },
      { title: 'Warnung bei großer Dateigröße', description: 'Warnt Sie automatisch, wenn ein codiertes GIF schwer wird (über 5–15 MB), damit Sie Maße oder Qualität für Chat-Apps optimieren können.' },
    ],
    faqs: [
      {
        question: 'Wie codiert der Browser meine Fotos in ein animiertes GIF, ohne sie hochzuladen?',
        answer:
          'Wenn Sie auf „Animiertes GIF erzeugen" klicken, lädt die Seite bei Bedarf einen lokalen JavaScript-GIF89a-Encoder und Farbquantisierer direkt in Ihren Browser-Tab. Jedes Bild wird auf einer Offscreen-Leinwand in den gewählten Maßen gerendert und lokal mit LZW komprimiert.',
      },
      {
        question: 'Was ist der Unterschied zwischen der Live-Timing-Vorschau und dem erzeugten GIF?',
        answer:
          'Vor der Codierung spielt die Vorschau Ihre hochgeladenen Bilder in Echtzeit mit Ihren aktuellen Millisekunden-Dauern und Anpassungseinstellungen ab, sodass Sie das Tempo sofort prüfen können. Beim Erzeugen des GIFs werden diese Einstellungen in einer echten, quantisierten 256-Farben-.gif-Datei festgehalten.',
      },
      {
        question: 'Kann ich bei einer Titelfolie oder dem letzten Bild länger pausieren?',
        answer:
          'Ja. Während die Standard-Bilddauer die Grundgeschwindigkeit (50 ms bis 3000 ms) für die gesamte Sequenz festlegt, hat jede Bildkarte ein optionales Eingabefeld „Dauer (ms)" für 20 ms bis 10.000 ms, um bestimmte Folien länger zu halten.',
      },
      {
        question: 'Womit entsprechen die Schnellvoreinstellungen 1 FPS, 2 FPS, 5 FPS und 10 FPS?',
        answer:
          'Diese Buttons wandeln Bilder pro Sekunde in exakte Millisekunden-Intervalle um: 1000 ms für 1 FPS, 500 ms für 2 FPS, 200 ms für 5 FPS und 100 ms für 10 FPS. Danach können Sie den Regler in 25-ms-Schritten feinjustieren.',
      },
      {
        question: 'Welche Schleifenoptionen bietet das fertige GIF?',
        answer:
          'Unter „Schleifenverhalten" können Sie „Immer" für endloses Abspielen, „Schleifen festlegen" für eine exakte Anzahl zwischen 2 und 50 Wiedergaben oder „Einmal abspielen" wählen, damit die Animation sauber auf dem letzten Bild stoppt. Netscape-Erweiterungs-Bytes werden automatisch entsprechend Ihrer Wahl geschrieben.',
      },
      {
        question: 'Wie wähle ich zwischen „Enthalten" und „Abdecken" bei der Bildanpassung?',
        answer:
          '„Enthalten" skaliert jedes Bild so, dass es vollständig in den GIF-Rahmen passt, und füllt übrige Letterbox-Balken mit Ihrer Hintergrund-Mattefarbe. „Abdecken" vergrößert jedes Foto leicht, um die gesamte Leinwand ohne Balken randlos auszufüllen, und schneidet überstehende Ränder ab.',
      },
      {
        question: 'Wie gehe ich mit Bildern unterschiedlicher Seitenverhältnisse in einer Animation um?',
        answer:
          'Wählen Sie „Enthalten", wenn Logos oder Hochformatfotos nie beschnitten werden sollen, und passen Sie die Hintergrund-Mattefarbe an den Hintergrund Ihrer Website oder den Dunkelmodus an. Wählen Sie „Abdecken", wenn Sie Freizeitfotos unterschiedlicher Formen zu einer einheitlichen randlosen Diashow kombinieren.',
      },
      {
        question: 'Was sind die minimalen und maximalen Pixelmaße für ein erzeugtes GIF?',
        answer:
          'Ausgabebreite und -höhe akzeptieren Werte von 16 px bis 2000 px, mit Schnellbuttons für 480 px, 640 px, 800 px und „Original". Halten Sie „Seitenverhältnis gesperrt" aktiviert, wenn Sie eine Dimension proportional skalieren.',
      },
      {
        question: 'Warum zeigt das Tool eine Warnung für große GIFs über 5 MB oder 15 MB?',
        answer:
          'Da GIF vollständige gerasterte Bilder mit einem Limit von 256 Farben speichert statt moderner Video-Kompression zwischen Bildern, wachsen breite, hochauflösende Animationen schnell. Wenn Sie die Breite auf 480 px oder 640 px ändern oder die Farbpaletten-Qualität senken, sinkt das Dateigewicht für Chat- und E-Mail-Apps deutlich.',
      },
      {
        question: 'Was steuert der Regler für die Farbpaletten-Qualität des GIFs?',
        answer:
          'Die Farbpaletten-Qualität (10 % bis 100 %, Standard 80 %) stellt ein, wie fein der Quantisierer Bildpixel abtastet, wenn er jede 256-Farben-Palette erstellt. Höhere Werte erhalten weichere Farbverläufe, während niedrigere Werte die Codierung beschleunigen und oft die Byte-Größe verringern.',
      },
      {
        question: 'Wie viele Quellbilder sollte ich in einem im Browser erstellten GIF kombinieren?',
        answer:
          'Die Bildwarteschlange hat keine feste Dateianzahlbegrenzung, obwohl das Kombinieren von 2 bis 40 Bildern mit 480 px bis 800 px Breite im typischen Desktop- und Mobilbrowser-Arbeitsspeicher in der Regel reibungslos läuft. Größere Stapel von 4K-Bildern können in Chargen bis 20 MB pro Eingabedatei hinzugefügt werden.',
      },
      {
        question: 'Kann ich ein Bild wiederholen, ohne dieselbe Datei zweimal hochzuladen?',
        answer:
          'Ja. Klicken Sie auf das Duplizieren-Symbol einer beliebigen Bildkarte, um diese Folie zusammen mit ihrer benutzerdefinierten Dauer direkt neben dem Original zu klonen, und ziehen Sie sie dann oder verschieben Sie sie mit den Pfeilen an eine beliebige Stelle der Zeitachse.',
      },
      {
        question: 'Muss ich alles auf einmal hochladen oder kann ich später weitere Bilder hinzufügen?',
        answer:
          'Sie können jederzeit weitere Bilder über den Button „Bilder hinzufügen" in der Bilder-Kopfzeile hinzufügen. Ihre aktuelle Bildreihenfolge, benutzerdefinierten Dauern und Ausgabemaße bleiben erhalten, wenn neue Bilder angehängt werden.',
      },
      {
        question: 'Funktionieren iPhone-HEIC-Exporte oder Live-Foto-Serien in diesem GIF-Ersteller?',
        answer:
          'Ja. Wenn Sie mehrere .heic- oder .heif-Bilder bis 20 MB pro Datei auswählen, decodiert die Seite sie lokal in Ihrem Browser per WebAssembly, bevor Ihre Animation zusammengesetzt wird.',
      },
      {
        question: 'Was passiert, wenn ich Einstellungen ändere, nachdem ich bereits ein GIF erzeugt habe?',
        answer:
          'Klicken Sie unter der Vorschau des fertigen GIFs auf „Zurück zum Bildeditor", um Ihre Zeitachse und Steuerungen freizuschalten. Passen Sie Dauern, Schleifen, Maße oder Bildreihenfolge frei an und erzeugen Sie sofort eine neue Datei.',
      },
      {
        question: 'Behält das erzeugte GIF transparente Hintergründe sauber bei?',
        answer:
          'Bevor die LZW-Quantisierung läuft, wird jedes Bild sauber auf Ihre gewählte Hintergrund-Mattefarbe zusammengesetzt (Standard: Weiß). Das verhindert harte schwarze, gezackte Ränder um weiche PNG- oder SVG-Kanten.',
      },
      {
        question: 'Kann ich ein einzelnes Bild aus einem vorhandenen GIF extrahieren, wenn ich eine .gif-Datei hochlade?',
        answer:
          'Wenn Sie ein .gif-Bild als Quellbild ablegen, lädt das HTML5-Canvas dessen erstes Bild wie jedes Standbild in die Sequenz. Nutzen Sie die Tools „Bild teilen" oder „GIF-Komprimierer", wenn Sie vorhandene animierte GIFs neu codieren müssen.',
      },
      {
        question: 'Werden Wasserzeichen oder Werbe-Endkarten zu meinem heruntergeladenen GIF hinzugefügt?',
        answer:
          'Niemals. Jedes codierte animierte GIF enthält nur Ihre gewählten Bilder und Einstellungen – ohne Branding, Wasserzeichen oder Nutzungsbeschränkungen.',
      },
      {
        question: 'Warum blieb mein Seitenverhältnis fest, als ich die Ausgabebreite bearbeitet habe?',
        answer:
          '„Seitenverhältnis gesperrt" ist standardmäßig aktiviert, um gestreckte oder gequetschte Bilder auf Basis der Maße Ihrer ersten Folie zu verhindern. Klicken Sie auf den Sperr-Schalter, um eine unabhängige benutzerdefinierte Breite und Höhe einzugeben, falls nötig.',
      },
      {
        question: 'Funktioniert die exportierte Datei animated_compressmypic.gif auf Slack, Discord und Websites?',
        answer:
          'Ja. Der Encoder gibt standardmäßige GIF89a-Binärdateien mit Netscape-Schleifenerweiterungen aus und gewährleistet so breite Wiedergabekompatibilität in Browsern, Chat-Apps, Blogs und Präsentationstools.',
      },
    ],
    relatedSlugs: ['/image-collage-maker', '/image-splitter', '/image-resizer', '/'],
  },
  {
    slug: '/image-collage-maker',
    name: 'Bildcollagen-Ersteller',
    shortDescription: 'Fotos in 2×2-, 3×3-Rastern oder Streifen anordnen – mit Tausch per Ziehen und Export.',
    category: 'create',
    seoTitle: 'Bildcollagen-Ersteller online kostenlos',
    seoDescription:
      'Erstellen Sie Bildcollagen kostenlos online: 2×2- und 3×3-Raster oder Streifen, Zellen per Ziehen tauschen und als JPG oder PNG bis 4000 px exportieren.',
    h1: 'Bildcollagen-Ersteller online kostenlos',
    subtitle:
      'Stellen Sie saubere Fotoraster, Vorher-Nachher-Streifen und Social-Story-Layouts mit unserem kostenlosen Bildcollagen-Ersteller direkt in Ihrem Browser zusammen. Für Content-Ersteller, Online-Verkäufer und Familien unterstützt er 2×2- und 3×3-Raster sowie vertikale und horizontale Streifen mit Tausch von Zellen per Ziehen und Ablegen, anpassbaren Teilungen, abgerundeten Ecken, benutzerdefinierten Abständen und wasserzeichenfreiem JPG- oder PNG-Export bis 4000 px.',
    howToSteps: [
      {
        title: 'Fotos ins Collagen-Studio hochladen',
        description:
          'Ziehen Sie JPG-, PNG-, WebP-, HEIC-, GIF-, BMP- oder SVG-Bilder bis 20 MB pro Datei; bei 5 oder mehr wird automatisch das 3×3-Raster gewählt, bei 4 oder weniger das 2×2-Raster.',
      },
      {
        title: 'Raster- oder Streifenlayout wählen',
        description:
          'Wechseln Sie frei zwischen 2×2-Raster (4 Zellen), 3×3-Raster (9 Zellen), vertikalem Streifen oder horizontalem Streifen im Panel „Collagen-Layout".',
      },
      {
        title: 'Collagen-Plätze neu anordnen oder füllen',
        description:
          'Ziehen Sie eine beliebige Zelle auf eine andere, um Positionen zu tauschen, tippen Sie auf Touchscreens zwei Plätze nacheinander an, nutzen Sie Links- und Rechts-Pfeile oder klicken Sie auf „Fotos hinzufügen", um offene Plätze zu füllen.',
      },
      {
        title: 'Zellenproportionen, Abstände und Ecken anpassen',
        description:
          'Passen Sie Spaltenteilung, Zeilenteilung oder Hervorhebung der Hauptzelle an (oder klicken Sie auf „Gleiche Zellen") und stellen Sie dann Zellenabstand (0–80 px) und Zellenradius (0–60 px) ein.',
      },
      {
        title: 'Hintergrundfarbe, Bildanpassung und Ausgabegröße wählen',
        description:
          'Wählen Sie „Abdecken" oder „Enthalten", wählen Sie ein Hintergrundfarben-Farbfeld oder einen Hex-Code und geben Sie Maße von 200 bis 4000 px ein (oder klicken Sie auf die Voreinstellungen 1200×1200, 1920×1080 oder 1080×1920).',
      },
      {
        title: 'Fertige Collage exportieren',
        description:
          'Wählen Sie JPG (mit Qualitätsregler 10–100 %) oder PNG (verlustfrei) und klicken Sie auf „Collage herunterladen", um Ihr Layout lokal in voller Auflösung zu speichern.',
      },
    ],
    features: [
      { title: '4 saubere Collagen-Layouts', description: 'Erstellen Sie ausgewogene 2×2-Quadrate, 3×3-Fotoraster, vertikale Handy-Stories oder breite horizontale Vergleichsstreifen.' },
      { title: 'Neuordnung von Zellen per Ziehen und Ablegen', description: 'Ziehen Sie eine beliebige Fotozelle auf einen anderen Platz, um Positionen sofort zu tauschen, oder tippen Sie auf dem Handy zwei Zellen an.' },
      { title: 'Benutzerdefinierte Zellenproportionen und Abstände', description: 'Stellen Sie Spaltenteilungen, Zeilenteilungen, Hervorhebung der Hauptzelle, Zellenabstand, Eckenrundung und Hintergrundfarbe präzise ein.' },
      { title: 'Hochauflösender JPG- und PNG-Export', description: 'Rendern Sie Collagen in voller Auflösung bis 4000 px direkt auf HTML5-Canvas – ohne Wasserzeichen.' },
    ],
    faqs: [
      {
        question: 'Welche Layouts enthält dieser Bildcollagen-Ersteller?',
        answer:
          'Sie können sofort zwischen 2×2-Raster (4 Zellen), 3×3-Raster (9 Zellen), vertikalem Streifen (Spalte von oben nach unten) und horizontalem Streifen (Zeile nebeneinander) wechseln. Bei der Auswahl von vertikalem oder horizontalem Streifen werden automatisch praktische Standardmaße gesetzt (1080×1920 oder 1920×720), die Sie danach frei anpassen können.',
      },
      {
        question: 'Wie funktioniert das Tauschen per Tippen, wenn ich eine Collage auf Handy oder Tablet erstelle?',
        answer:
          'Auf Touchscreens, auf denen Ziehen umständlich ist, tippen Sie einfach auf die erste Zellenkachel unter „Zellen neu anordnen", um sie hervorzuheben, und dann auf einen zweiten Platz, um die Fotos sofort zu tauschen. Unter jedem Platz gibt es außerdem Links- und Rechts-Pfeilbuttons.',
      },
      {
        question: 'Was passiert, wenn ich weniger Fotos hochlade, als ein 3×3-Raster Zellen hat?',
        answer:
          'Nicht gefüllte Zellen erscheinen als saubere gestrichelte Platzhalter „Platz N" in der Live-Vorschau, damit Sie das Layout prüfen können, während Sie die übrigen Bilder hinzufügen. Sie können auf den +-Button direkt auf einer leeren Kachel klicken oder zu einem 2×2- oder Streifenlayout wechseln, um Ihrer genauen Bildanzahl zu entsprechen.',
      },
      {
        question: 'Kann ich ein Hauptfoto größer machen als die übrigen in einem Raster oder Streifen?',
        answer:
          'Ja. Im 2×2-Raster können Sie Spaltenteilung und Zeilenteilung von 20 % bis 80 % ziehen, im 3×3-Raster können Sie mittlere Spalte und mittlere Zeile skalieren, und in vertikalen oder horizontalen Streifen können Sie die Hervorhebung der Hauptzelle um bis zu +100 % erhöhen.',
      },
      {
        question: 'Wie setze ich ungleiche Zellenregler auf ein einheitliches Raster zurück?',
        answer:
          'Klicken Sie auf den Button „Gleiche Zellen" im Abschnitt „Zellenproportionen und Abstände". Er setzt Spaltenteilung, Zeilenteilung und Haupthervorhebung mit einem Klick auf ausgewogene gleiche Teilungen zurück.',
      },
      {
        question: 'Kann ich eine nahtlose, randlose Collage ohne Abstand zwischen den Fotos erstellen?',
        answer:
          'Ja. Ziehen Sie sowohl den Zellenabstand als auch den Zellenradius auf 0 px, damit benachbarte Fotos sauber Kante an Kante zusammentreffen – ohne sichtbare Fugenlinien oder abgerundete Ecken.',
      },
      {
        question: 'Wann sollte ich die Bildanpassung von „Abdecken" auf „Enthalten" umstellen?',
        answer:
          '„Abdecken" füllt jede rechteckige Zelle randlos, indem es feine Ränder beschneidet, die außerhalb des Seitenverhältnisses der Zelle liegen – ideal für einheitliche Lifestyle-Raster. „Enthalten" verkleinert jedes Bild, bis das gesamte Motiv unbeschnitten in seine Zelle passt, und zeigt Ihre Hintergrundfarbe hinter jedem offenen Rand.',
      },
      {
        question: 'Kann ich Zellenabstand und Radius der abgerundeten Ecken unabhängig anpassen?',
        answer:
          'Ja. Der Zellenabstand passt Außenränder und Fugenbreiten von 0 px bis 80 px an, während der Zellenradius jede Fotoeckenbox sanft von 0 px bis 60 px abrundet.',
      },
      {
        question: 'Welche schnellen Leinwandmaße und Voreinstellungen werden unterstützt?',
        answer:
          'Sie können jede benutzerdefinierte Ausgabegröße zwischen 200 px und 4000 px auf jeder Seite für individuelle Druck- oder Social-Karten eingeben. Außerdem gibt es integrierte Schnellbuttons für 1200×1200 Quadrat, 1920×1080 Querformat und 1080×1920 Story.',
      },
      {
        question: 'Welche Hintergrundfarben-Voreinstellungen erscheinen standardmäßig?',
        answer:
          'Sie erhalten Ein-Klick-Farbfelder für reines Weiß (#ffffff), tiefes Schieferblau (#0f172a) und weiches neutrales Grau (#f1f5f9). Daneben liegt immer ein vollständiger nativer Farbwähler, wenn Sie einen exakten Marken-Hex-Wert benötigen.',
      },
      {
        question: 'Funktioniert das Hochladen einer Mischung aus iPhone-HEIC-, PNG- und JPG-Fotos in einer Collage?',
        answer:
          'Ja. Jede hochgeladene Datei – einschließlich JPG, PNG, WebP, HEIC/HEIF, GIF, BMP und SVG bis 20 MB – wird privat in Ihrem Browser decodiert und auf ein einziges einheitliches HTML5-Canvas gezeichnet.',
      },
      {
        question: 'Wenn ich transparente PNG-Sticker in Zellen lege, was erscheint dahinter?',
        answer:
          'Jede Zelle wird vor dem Zusammensetzen des Vordergrundbildes auf Ihrer gewählten Hintergrundfarbe gerendert. So bleiben transparente PNG-Logos und Freisteller sauber gegen Weiß, dunkles Schieferblau oder benutzerdefinierte Farbtöne.',
      },
      {
        question: 'Soll ich meine fertige Collage als JPG oder PNG (verlustfrei) speichern?',
        answer:
          'Wählen Sie JPG mit 85 %–95 % Qualität für leichte Fotoraster für Instagram, WhatsApp oder E-Mail. Wählen Sie PNG (verlustfrei), wenn Sie scharfe UI-Screenshots, Diagramme oder Textgrafiken kombinieren, bei denen JPEG-Kompressionsartefakte stören würden.',
      },
      {
        question: 'Wie zeigt der exportierte Dateiname an, welche Collagen-Einstellungen ich verwendet habe?',
        answer:
          'Jeder heruntergeladene Export bettet automatisch Layout und Pixelmaße ein und erzeugt Namen wie collage_2x2_1200x1200.jpg. Dieses Namensmuster hilft Ihnen, mehrere Seitenverhältnisvarianten zu sortieren, ohne Dateien manuell umzubenennen.',
      },
      {
        question: 'Werden private Familienfotos oder Vorher-Nachher-Aufnahmen von Kunden irgendwo hochgeladen?',
        answer:
          'Nein. Bilddecodierung, Rasterlayout-Komposition und hochauflösender Canvas-Export erfolgen strikt in Ihrem Browser-Tab, sodass kein Foto Ihr Handy oder Ihren Computer verlässt.',
      },
      {
        question: 'Entspricht die Collagen-Vorschau dem exakten Pixel-Export bei 4000 px?',
        answer:
          'Ja. Sowohl die Live-Bühne als auch der endgültige Export teilen exakt dieselbe Proportions- und Eckenmathematik und skalieren Zellenabstand und Zellenradius sanft relativ zur gewählten Ausgabegröße, sodass exportierte Fugen dem entsprechen, was Sie sehen.',
      },
      {
        question: 'Wie viele Fotos kann ein vertikaler oder horizontaler Streifen auf einmal enthalten?',
        answer:
          'Vertikale und horizontale Streifen unterstützen 2 bis 6 dynamische Plätze, je nachdem, wie viele Bilder Sie laden. So lassen sich Zwei-Panel-Vergleiche oder mehrteilige Story-Streifen einfach erstellen.',
      },
      {
        question: 'Kann ich ein einzelnes Foto aus einer Collage entfernen, ohne von vorn zu beginnen?',
        answer:
          'Ja. Klicken Sie auf den Papierkorb-Button einer beliebigen Platzkarte unter „Zellen neu anordnen", um dieses Foto zu entfernen, während alle Ihre anderen hochgeladenen Bilder, Layout-Einstellungen und benutzerdefinierten Teilungen erhalten bleiben.',
      },
      {
        question: 'Was ist die maximale Auflösung, in der ich für den Druck einer Fotocollage exportieren kann?',
        answer:
          'Sowohl Ausgabebreite als auch Ausgabehöhe skalieren bis zu 4000×4000 Pixel und liefern 16 Megapixel scharfe Details. Diese Auflösung eignet sich gut für Tischfoto-Drucke, Lookbooks und hochauflösende Folien.',
      },
      {
        question: 'Gibt es ein Limit, wie viele Collagen ich erstellen oder exportieren kann?',
        answer:
          'Nein. Sie können Layouts wechseln, Farben anpassen und unbegrenzt Collagen kostenlos exportieren – ohne Konten, Wasserzeichen oder tägliche Exportlimits.',
      },
    ],
    relatedSlugs: ['/gif-maker', '/image-splitter', '/image-border-generator', '/'],
  },
  {
    slug: '/compress-image-to-50kb',
    name: 'Bild auf 50 KB komprimieren',
    shortDescription: 'JPG-, PNG- und WebP-Fotos streng unter 50 KB verkleinern – für Formulare.',
    category: 'compress',
    seoTitle: 'Bild auf 50 KB komprimieren online',
    seoDescription:
      'Komprimieren Sie Bilder kostenlos online auf 50 KB – für Pass- und Visaportale, Formulare und Avatare. Binäre Qualitätssuche und intelligentes Skalieren.',
    h1: 'Bild auf 50 KB komprimieren online',
    subtitle:
      'Bereiten Sie Passfotos, Visascans, handschriftliche Unterschriften und kompakte Profil-Avatare für strikte Portal-Limits vor, wenn Sie ein Bild zuverlässig auf 50 KB komprimieren müssen. Das Tool läuft zu 100 % lokal in Ihrem Browser mit Dateien bis 25 MB und kombiniert binäre Qualitätssuche mit optionaler Pixelskalierung, sodass sensible Dokumente nie externe Server berühren.',
    howToSteps: [
      {
        title: 'Bild oder Dokumentenscan ablegen',
        description:
          'Laden Sie eine oder mehrere JPG-, PNG-, WebP- oder HEIC-Dateien bis 25 MB hoch (oder fügen Sie kopierte Fotos per Strg+V ein).',
      },
      {
        title: 'Ausgabeformat wählen (Original, JPG, WebP oder PNG)',
        description:
          'Wählen Sie JPG oder WebP für strikte 50-KB-Fotolimits oder behalten Sie „Original" mit aktivierter automatischer PNG-Umwandlung für schwere Screenshots.',
      },
      {
        title: 'Skalierungs- und automatische Umwandlungs-Schalter prüfen',
        description:
          'Lassen Sie die intelligente Maßskalierung für hochauflösende Fotos aktiviert oder deaktivieren Sie sie, um exakte Pixelmaße zu bewahren, wenn ein Portal sie verlangt.',
      },
      {
        title: 'Verifizierte Byte-Plaketten und Vergleichsansicht prüfen',
        description:
          'Prüfen Sie jede Karte auf eine grüne „Unter 50 KB"-Plakette und öffnen Sie die Vergleichsansicht, um zu verifizieren, dass Gesichtszüge oder Unterschriftenlinien lesbar bleiben.',
      },
      {
        title: 'Einzelne Dateien oder „Alle herunterladen (ZIP)" herunterladen',
        description:
          'Speichern Sie jede <name>_50kb-Datei einzeln, nutzen Sie „Original behalten", wenn die Datei bereits kleiner war, oder packen Sie Stapel in compressmypic_50kb.zip.',
      },
    ],
    features: [
      { title: 'Binäre Qualitätssuche und Maßskalierung', description: 'Findet zuerst die höchste visuelle Qualität unter 50 KB bei originalen Pixeln und skaliert dann bei Bedarf die Auflösung sanft.' },
      { title: 'Ehrliche Ergebnismeldung', description: 'Täuscht die Ausgabegröße nie vor – wenn ein verlustfreies PNG oder eine gesperrte Auflösung nicht unter 50 KB passt, erklärt es klar, warum.' },
      { title: 'Intelligente PNG-zu-WebP/JPG-Alternative', description: 'Wandelt optional schwere verlustfreie PNGs in WebP oder JPG um, damit Fotos scharf bleiben und 50 KB erreichen.' },
      { title: 'Private Browser-Verarbeitung', description: 'Pässe, Ausweisfotos und persönliche Formulare verlassen nie Ihr Gerät.' },
    ],
    faqs: [
      {
        question: 'Welche alltäglichen Portale verlangen den Upload eines Bildes strikt unter 50 KB?',
        answer:
          'Staatliche Visumanträge, Passerneuerungen, Registrierungen für Beamtenprüfungen, Universitätszulassungsformulare und Unterschriften-Scanfelder erzwingen häufig harte Upload-Obergrenzen von 20 KB bis 50 KB. Wenn Sie Ihre Datei komfortabel unter 50 KB halten, vermeiden Sie Zeitüberschreitungen bei der Formularübermittlung und Ablehnungsfehler beim Upload.',
      },
      {
        question: 'Warum sind Passfotos und Ausweisscans hier sicher auf 50 KB zu verkleinern?',
        answer:
          'Jede Pixeloperation – von der HEIC-Decodierung über die binäre Kompressionssuche bis zum ZIP-Packen – wird lokal in Ihrem eigenen Browser-Tab ausgeführt. Sensible Ausweisfotos, Unterschriften und persönliche Unterlagen werden nie übers Internet hochgeladen.',
      },
      {
        question: 'Warum erfordert das Erreichen von 50 KB bei einem 12-Megapixel-Smartphone-Foto meist eine Skalierung der Maße?',
        answer:
          'Ein vollständiges Foto mit 4000×3000 Pixeln enthält 12 Millionen Pixel, deren JPEG-Huffman-Basisdaten selbst bei starker Kompression typischerweise über 200 KB liegen. Mit aktivierter intelligenter Maßskalierung reduziert der Optimierer die Maße sanft, bis scharfe Gesichtsdetails sauber unter 50 KB passen.',
      },
      {
        question: 'Soll ich JPG oder WebP wählen, wenn ich ein Bild unter 50 KB bei einem Prüfungs- oder Behördenportal einreiche?',
        answer:
          'Wählen Sie immer JPG für alte Behörden-, Pass-, Stipendien- oder Bankformulare, da viele Validierungsskripte .webp-Uploads ablehnen, selbst wenn sie kleiner sind. Wählen Sie WebP für moderne Web-Avatare oder persönliche Websites, bei denen maximale Schärfe bei 50 KB zählt.',
      },
      {
        question: 'Wie optimiert das Tool handschriftliche Unterschriften oder gescannte Dokumente unter 50 KB?',
        answer:
          'Scans schwarzer Tinte auf hellem weißem Papier komprimieren in JPG oder WebP aggressiv, sobald überschüssige Auflösung sauber beschnitten ist. Die Prüfung im Vergleichs-Modal stellt sicher, dass Tintenstriche sauber bleiben, ohne verschwommene Kompressionsblöcke an Textkanten.',
      },
      {
        question: 'Warum erschien eine rote „Gewachsen"-Meldung, wenn meine Eingabe bereits 32 KB groß war?',
        answer:
          'Wenn ein bereits leichtes JPG oder PNG auf Canvas mit hoher Qualität neu codiert wird, kann der neue Byte-Strom manchmal bei 40 KB landen, statt weiter zu schrumpfen. Klicken Sie einfach auf „Original behalten" auf dieser Karte, um Ihre exakte 32-KB-Quelldatei zu behalten.',
      },
      {
        question: 'Kann ich exakte 600×600-Pixel-Maße behalten, wenn mein Visaportal sowohl feste Pixel als auch maximal 50 KB verlangt?',
        answer:
          'Ja. Deaktivieren Sie „Intelligente Maßskalierung erlauben", damit die Pixelmaße bei 100 % gesperrt bleiben, und lassen Sie die binäre Suche die JPEG- oder WebP-Qualität bis auf 5 % bei Ihren exakten Maßen testen. Wenn ein 600×600-Porträt einigermaßen sauber ist, passt es problemlos unter 50 KB, ohne die Größe zu ändern.',
      },
      {
        question: 'Warum löst das Festlegen des Ausgabeformats auf PNG oft eine „Ziel verfehlt"-Warnung bei 50 KB aus?',
        answer:
          'Da PNG verlustfreie DEFLATE-Kompression nutzt, die Qualitätsregler ignoriert, komprimieren nur flache Icons oder winzige Miniaturen als PNG unter 50 KB. Lassen Sie das Format auf „Original" mit aktivierter automatischer Umwandlung – oder wechseln Sie direkt zu JPG –, damit fotografische Bilder sauber 50 KB erreichen.',
      },
      {
        question: 'Was passiert, wenn ich ein transparentes Unterschriften-PNG hochlade und es zu JPG umwandle, um 50 KB zu erreichen?',
        answer:
          'Wenn Sie JPG auswählen, erscheint das Farbfeld für die matte Farbe transparenter PNGs (reines Weiß #ffffff als Standard). Alle transparenten Hintergrundbereiche werden vor der JPEG-Codierung sauber auf festes Weiß gefüllt, damit schwarze Tinte scharf bleibt, statt zu solidem Schwarz zu werden.',
      },
      {
        question: 'Kann ich ein 15-MB-iPhone-HEIC-Selfie direkt ablegen, um es unter 50 KB zu verkleinern?',
        answer:
          'Ja. Dateien bis 25 MB – einschließlich Apple-HEIC/HEIF-Fotos – werden automatisch im Browser per WebAssembly decodiert und in einem nahtlosen Durchgang auf 50 KB komprimiert.',
      },
      {
        question: 'Welche Skalierungsschritte testet der Optimierer, wenn 100-%-Maße 50 KB überschreiten?',
        answer:
          'Wenn volle Maße 50 KB bei akzeptabler Qualität nicht erreichen können, testet die Engine progressive Verkleinerungsfaktoren ab 82 % bis hinunter zu 10 % (begrenzt auf mindestens 16 px). Bei jedem Schritt führt sie eine frische binäre Qualitätssuche aus und stoppt bei den größten lesbaren Maßen unter 50 KB.',
      },
      {
        question: 'Verursacht das Komprimieren eines Porträts mit dunklem Hintergrund unter 50 KB sichtbare Farbstreifen?',
        answer:
          'Glatte dunkle Schatten können bei aggressiven 50-KB-Zielen leichte Blockbildung zeigen, wenn die Maße riesig bleiben. Wenn Sie Maßskalierung zulassen, codiert das Tool etwas kleinere Maße mit einem höheren Qualitätsfaktor von 70 %–85 % und erzeugt so weichere Verläufe als riesige Maße bei 10 % Qualität.',
      },
      {
        question: 'Entfernt der 50-KB-Komprimierer versteckte GPS-Ortungs-Tags aus meinem Ausweisfoto?',
        answer:
          'Ja. Das Rendern Ihres Bildes auf HTML5-Canvas entfernt EXIF-Metadaten wie Kamera-Seriennummern, Miniaturen und GPS-Koordinaten, schützt Ihre Privatsphäre und gibt zusätzliche Kilobytes für sichtbare Bilddetails frei.',
      },
      {
        question: 'Wie entscheidet das Tool, ob es eine „Unter 50 KB"-Plakette meldet?',
        answer:
          'Nach dem Codieren des endgültigen Blobs prüft es die exakte Byte-Größe gegen 51.200 Bytes (50 × 1024). Nur Dateien strikt bei oder unter dieser exakten Byte-Obergrenze erhalten die grüne Bestätigungsplakette „Unter 50 KB".',
      },
      {
        question: 'Kann ich ein Porträtfoto und einen Unterschriften-Scan gemeinsam unter 50 KB verarbeiten?',
        answer:
          'Ja. Legen Sie mehrere Bilder bis 25 MB pro Datei in die Warteschlange, passen Sie Ihre Formateinstellung an und laden Sie jede Datei einzeln herunter oder bündeln Sie sie in compressmypic_50kb.zip.',
      },
      {
        question: 'Was, wenn ein Portal tatsächlich 20 KB oder 30 KB statt 50 KB verlangt?',
        answer:
          'Klicken Sie auf den Link „Brauchen Sie eine andere Zielgröße in KB?" direkt in der Zielkopfzeile, um direkt zum benutzerdefinierten Zielgrößen-Komprimierer zu springen, wo Sie ein beliebiges Limit wie 20 KB oder 30 KB eingeben können.',
      },
      {
        question: 'Was ist die maximale Dateigröße, die ich in den 50-KB-Komprimierer ablegen kann?',
        answer:
          'Einzelne Eingabedateien bis 25 MB werden in den Formaten JPG, PNG, WebP, HEIC/HEIF, GIF, BMP und SVG unterstützt. Animierte GIF-Eingaben exportieren ein statisches optimiertes Bild unter 50 KB.',
      },
      {
        question: 'Warum zielt das Tool knapp unter 50 KB (etwa 48–49,9 KB), statt bei 25 KB zu stoppen?',
        answer:
          'Seine binäre Suche optimiert bis zu 7 Iterationen, um nach Möglichkeit innerhalb von 96 %–100 % der 50-KB-Obergrenze zu landen. Das maximiert die visuelle Schärfe, indem fast jedes verfügbare Kilobyte unter der Grenze genutzt wird.',
      },
      {
        question: 'Sind heruntergeladene Dateinamen klar markiert, damit ich sie nicht mit meinen originalen hochauflösenden Dateien verwechsle?',
        answer:
          'Ja. Jede Ausgabedatei hängt automatisch _50kb vor der Erweiterung an – etwa portrait_50kb.jpg – und lässt Ihre Originaldatei sicher unberührt auf Ihrem Gerät.',
      },
      {
        question: 'Kann ich die Schärfe auf einem Smartphone prüfen, bevor ich sie in ein Formularportal hochlade?',
        answer:
          'Ja. Die vollständige Oberfläche, einschließlich des interaktiven Vergleichs-Viewers, funktioniert reibungslos in mobilem Safari und Chrome auf Android und macht Formularübermittlungen unterwegs schnell und zuverlässig.',
      },
    ],
    relatedSlugs: [
      '/compress-image-to-100kb',
      '/compress-image-to-200kb',
      '/target-file-size-compressor',
      '/image-resizer',
    ],
  },
  {
    slug: '/compress-image-to-100kb',
    name: 'Bild auf 100 KB komprimieren',
    shortDescription: 'Bildgröße sauber unter 100 KB reduzieren – ohne sichtbare Unschärfe.',
    category: 'compress',
    seoTitle: 'Bild auf 100 KB komprimieren online',
    seoDescription:
      'Komprimieren Sie Bilder kostenlos online auf 100 KB – für Bewerbungsportale, Lebensläufe und Webseiten. Scharfe Details dank Qualitätssuche und ZIP-Export.',
    h1: 'Bild auf 100 KB komprimieren online',
    subtitle:
      'Treffen Sie den bewährten Web- und Portal-Sweet-Spot, wenn Sie ein Bild auf 100 KB komprimieren, ohne Schärfe zu opfern. Für Bewerber, die Portfolio-Fotos anhängen, Blogger, die schnelle Artikel-Thumbnails vorbereiten, und HR-Portale mit engen Anhangsobergrenzen: Dieses lokale Tool testet Qualitätseinstellungen und optionale Skalierung in Ihrem Browser bei Eingaben bis 25 MB.',
    howToSteps: [
      {
        title: 'Foto oder Artikelgrafik hinzufügen',
        description:
          'Ziehen Sie ein oder mehrere JPG-, PNG-, WebP- oder HEIC-Bilder bis 25 MB pro Datei per Drag-and-drop in den Arbeitsbereich.',
      },
      {
        title: 'Ausgabeformat und Fallback-Verhalten bestätigen',
        description:
          'Behalten Sie „Original" (mit automatischem WebP/JPG-Fallback für zu große PNGs) oder zielen Sie explizit auf JPG oder WebP für konsistente Ausgabe.',
      },
      {
        title: 'Wählen, ob Pixel-Herunterskalierung erlaubt ist',
        description:
          'Lassen Sie die intelligente Maßskalierung aktiviert für scharfe 800-px- bis 1400-px-Ergebnisse oder deaktivieren Sie sie, um 100 % der originalen Pixelbreite und -höhe zu bewahren.',
      },
      {
        title: 'Visuelle Schärfe mit dem Original vergleichen',
        description:
          'Prüfen Sie den eingesparten Prozentsatz und die exakte Ausgabe-KB-Plakette und öffnen Sie dann „Vergleichen" auf einer beliebigen Karte, um die Kantenschärfe nebeneinander zu prüfen.',
      },
      {
        title: 'Einzelne Dateien oder einen Stapel-ZIP herunterladen',
        description:
          'Speichern Sie einzelne <name>_100kb-Dateien sofort oder klicken Sie auf „Alle herunterladen (ZIP)", um compressmypic_100kb.zip mit einem Klick herunterzuladen.',
      },
    ],
    features: [
      { title: 'Maximale Qualität unter 100 KB', description: 'Statt einen willkürlich niedrigen Qualitätsregler zu nutzen, fixiert die binäre Suche die höchste Qualität unter 100 KB.' },
      { title: 'Bewahrt Auflösung, wenn möglich', description: 'Behält 100 % der originalen Pixelbreite und -höhe, wann immer allein die Qualitätsanpassung die 100-KB-Obergrenze erfüllt.' },
      { title: 'Transparente Limit-Meldungen', description: 'Meldet klar, wenn ein gesperrtes PNG oder unskalierte 4K-Einstellungen das Erreichen von 100 KB verhindern.' },
      { title: '100 % lokale Privatsphäre', description: 'Keine Uploads, keine Wasserzeichen und keine Registrierung erforderlich.' },
    ],
    faqs: [
      {
        question: 'Warum gilt 100 KB als idealer Wert für Lebensläufe, Bewerbungsportale und Websites?',
        answer:
          'Bei etwa 100 KB lädt ein typisches Foto von 1000 px bis 1400 px auch über 3G-Mobilnetze schnell und behält feine Gesichtsdetails, scharfe Typografie und natürliche Farbtiefe. Die meisten Recruiting-Systeme und PDF-Lebenslauf-Builder akzeptieren Assets unter 100 KB komfortabel, ohne zu beschneiden oder zu blockieren.',
      },
      {
        question: 'Kann ein 1920×1080-Full-HD-Webbanner bei voller Größe bleiben, wenn es auf 100 KB verkleinert wird?',
        answer:
          'Ja, in vielen Fällen – besonders saubere Produktaufnahmen, UI-Illustrationen oder weich verschwommene Hintergründe, die in WebP oder JPG komprimiert werden. Wenn eine belebte Landschaftsszene bei 35 % Qualität immer noch 100 KB überschreitet, verringert optionale Skalierung die Breite sanft (etwa 82 % oder 68 %), um die Schärfe zu schützen.',
      },
      {
        question: 'Wie hält die automatische binäre Qualitätssuche meine 100-KB-Datei so scharf wie möglich?',
        answer:
          'Statt ein niedriges statisches Kompressionsniveau wie 40 % zu raten, testet die Engine obere und untere Qualitätsgrenzen in bis zu 7 binären Schritten. Sie stoppt direkt im Bereich von 96 %–100 % unter 102.400 Bytes und maximiert so die Pixeltreue für das exakte Dateigrößenbudget.',
      },
      {
        question: 'Wann sollte ich „Große PNGs automatisch umwandeln" deaktivieren, wenn ich 100 KB anstrebe?',
        answer:
          'Wenn eine flache Infografik, ein UI-Icon oder ein zweifarbiges Diagramm strikt verlustfrei als PNG bleiben muss und bereits sauber unter 100 KB passt, funktioniert „Original" oder PNG hervorragend. Für fotografische PNGs hingegen schaltet die aktivierte automatische Umwandlung undurchsichtige Aufnahmen auf JPG oder transparente auf WebP um, sodass Sie scharfe Pixel unter 100 KB behalten.',
      },
      {
        question: 'Verlieren transparente PNG-Logos ihre Transparenz, wenn sie unter 100 KB automatisch umgewandelt werden?',
        answer:
          'Nein. Bevor ein zu großes PNG im Originalmodus zurückgesetzt wird, erkennt der Komprimierer Alphatransparenz in Ihrer Datei und wählt automatisch WebP (mit voller Transparenz) statt JPG, sobald Alphapixel vorhanden sind.',
      },
      {
        question: 'Wie wirkt sich das Komprimieren auf 100 KB auf Core Web Vitals und Seitengewicht aus?',
        answer:
          'Das Kürzen von 2-MB-Hero-Thumbnails oder 800-KB-Artikelköpfen auf 95 KB senkt die Seitennutzlast dramatisch, ohne Layout-Karten visuell zu verschlechtern. Leichtere Bilder verbessern direkt den Largest Contentful Paint (LCP) bei mobilen und Desktop-Besuchern.',
      },
      {
        question: 'Kann ich E-Mail-Newsletter-Grafiken unter 100 KB verkleinern, damit sie im Posteingang schneller rendern?',
        answer:
          'Ja. Die Wahl von JPG als Ausgabe behält breite E-Mail-Client-Unterstützung in Outlook, Apple Mail und Gmail, während mehrbildrige Newsletter schnell und leicht unter den Gewichtsschwellen von Spamfiltern bleiben.',
      },
      {
        question: 'Was passiert, wenn eine Datei, die ich hochlade, bereits 65 KB groß ist?',
        answer:
          'Der Komprimierer erkennt, dass Ihre Datei bereits unter 100 KB liegt, und erzeugt einen sauberen Export in voller Auflösung. Falls die HTML5-Canvas-Neucodierung zufällig eine etwas größere Datei als 65 KB erzeugt, lässt Sie eine rote Meldung sofort auf „Original behalten" klicken.',
      },
      {
        question: 'Warum hilft das Vergleichs-Modal, wenn Bilder auf 100 KB gestrafft werden?',
        answer:
          'Ein geteilter Vorher-Nachher-Vorhang lässt Sie prüfen, ob feine Haare, Textilgewebe oder winzige Screenshot-Texte nach der Kompression sauber geblieben sind. Wenn bei gesperrter Auflösung Artefakte auftreten, beseitigt der Wechsel von JPG zu WebP sie oft innerhalb desselben 100-KB-Budgets.',
      },
      {
        question: 'Löscht dieser 100-KB-Reduzierer Kamera-EXIF-Tags automatisch?',
        answer:
          'Ja. Das Zeichnen auf HTML5-Canvas entfernt eingebettete Kamera-Miniaturen, Lightroom-XMP-Blöcke und GPS-Koordinaten, was allein oft 20 KB–60 KB spart, bevor die visuelle Kompression überhaupt beginnt.',
      },
      {
        question: 'Kann ich einen ganzen Ordner mit Blog-Thumbnails ziehen, um sie alle auf 100 KB zu komprimieren?',
        answer:
          'Ja. Laden Sie mehrere Dateien bis 25 MB pro Datei in einer Warteschlange hoch, warten Sie einige Sekunden, während jedes Bild nacheinander in Ihrem Browser läuft, und speichern Sie alles in compressmypic_100kb.zip.',
      },
      {
        question: 'Was, wenn ein Bewerbungsportal JPG bis 100 KB erlaubt, WebP-Dateien aber ablehnt?',
        answer:
          'Wählen Sie JPG unter „Ausgabeformat", statt es auf „Original" zu lassen, bevor oder nachdem Sie hochladen. Der Komprimierer führt dann jedes Bild strikt als Standard-.jpg unter 100 KB erneut aus und wendet Ihre gewählte matte Farbe auf transparente Bereiche an.',
      },
      {
        question: 'Warum schrumpfte mein 3000×2000-PNG-Screenshot sauber, als er auf 68 % bei 100 KB skaliert wurde?',
        answer:
          'Die verlustfreie PNG-Dateigröße korreliert eng mit der Gesamtpixelzahl und Entropie. Das moderate Skalieren eines riesigen Screenshots und die Kombination mit WebP oder JPG senken das Byte-Gewicht von mehreren Megabytes auf unter 100 KB, während Text komfortabel lesbar bleibt.',
      },
      {
        question: 'Werden vertrauliche Lebensläufe, Architekturvorschauen oder NDA-Mockups irgendwo hochgeladen?',
        answer:
          'Niemals. Alle Kompressionsschritte, binären Iterationen und die ZIP-Archiverstellung laufen strikt in lokalem JavaScript und Canvas in Ihrem Browser-Tab.',
      },
      {
        question: 'Welche Dateitypen kann ich in den 100-KB-Komprimierer einspeisen?',
        answer:
          'Sie können JPG-, PNG-, WebP-, iPhone-HEIC/HEIF-, GIF-, BMP- und SVG-Dateien bis 25 MB pro Datei ablegen. Beachten Sie, dass animierte GIF-Eingaben ihr erstes Bild als statische Ausgabe komprimieren.',
      },
      {
        question: 'Kann ich auf dieser Seite ein benutzerdefiniertes Ziel wie 80 KB oder 120 KB wählen?',
        answer:
          'Ja – tippen Sie auf den Link „Brauchen Sie eine andere Zielgröße in KB?" im Zielgrößen-Panel, um direkt zu unserem flexiblen Zielgrößen-Komprimierer mit beliebiger KB- oder MB-Eingabe zu springen.',
      },
      {
        question: 'Warum kann ein gesperrtes PNG-Ziel bei 100 KB auch nach dem Herunterskalieren noch scheitern?',
        answer:
          'Wenn PNG explizit erzwungen und das Herunterskalieren deaktiviert ist, behält ein verrauschtes Foto Millionen einzigartiger Farben, die sich verlustfrei nicht in 100 KB packen lassen. Das erneute Aktivieren der Maßskalierung oder der Wechsel zu WebP löst das sofort.',
      },
      {
        question: 'Löst das Ändern von Einstellungen nach Abschluss meines Stapels automatisch eine erneute Kompression meiner Dateien aus?',
        answer:
          'Ja. Das Umschalten von Ausgabeformat, Maßskalierung, automatischer PNG-Umwandlung oder JPG-Mattefarbe verarbeitet Ihre wartenden Elemente automatisch erneut in Richtung 100 KB, sodass Sie Ergebnisse mühelos vergleichen können.',
      },
      {
        question: 'Öffnen Windows, macOS und iOS die heruntergeladenen _100kb.jpg- und _100kb.webp-Dateien nativ?',
        answer:
          'Ja. Standard-JPEG öffnet sich universell überall, und modernes WebP öffnet sich nativ in allen aktuellen Desktop-Browsern, macOS-Vorschau, Windows-Fotos, Android und iOS.',
      },
      {
        question: 'Gibt es ein tägliches Kontingent oder eine Dateianzahlbeschränkung für das 100-KB-Tool?',
        answer:
          'Nein. Komprimieren Sie so viele Bilder unter 100 KB, wie Ihr Browser-Arbeitsspeicher verarbeitet – ohne Wasserzeichen, Kontoaufforderungen oder Paywalls.',
      },
    ],
    relatedSlugs: [
      '/compress-image-to-50kb',
      '/compress-image-to-200kb',
      '/web-image-optimizer',
      '/target-file-size-compressor',
    ],
  },
  {
    slug: '/compress-image-to-200kb',
    name: 'Bild auf 200 KB komprimieren',
    shortDescription: 'Fotos unter 200 KB optimieren – für Blogs, CMS-Uploads und Portale.',
    category: 'compress',
    seoTitle: 'Bild auf 200 KB komprimieren online',
    seoDescription:
      'Komprimieren Sie Bilder kostenlos online auf 200 KB – für WordPress, Shopify und Blog-Banner. Scharfe Details dank Qualitätssuche und ZIP-Export erhalten.',
    h1: 'Bild auf 200 KB komprimieren online',
    subtitle:
      'Bereiten Sie scharfe Shop-Produktfotografie, Blog-Titelbilder und Geschäftslistings vor, wenn Sie ein Bild ohne Ballast auf 200 KB komprimieren. Für WordPress-Redakteure, Shopify-Händler und Digital-Marketer zugeschnitten: Das Tool priorisiert zuerst 100 % originale Maße und läuft komplett lokal bei Dateien bis 25 MB – ohne Serverübertragungen.',
    howToSteps: [
      {
        title: 'Shop- oder Blogbilder hochladen',
        description:
          'Legen Sie einzelne Dateien oder ganze Stapel von JPG-, PNG-, WebP- oder HEIC-Bildern bis 25 MB pro Datei in den Arbeitsbereich.',
      },
      {
        title: 'WebP-, JPG-, Original- oder PNG-Ausgabe wählen',
        description:
          'Wählen Sie WebP für moderne CMS-Geschwindigkeit, JPG für universelle Marktplatz-Kompatibilität oder „Original", um nur schwere PNGs automatisch umzuwandeln.',
      },
      {
        title: 'Volle Maße oder Fallback-Skalierung umschalten',
        description:
          'Lassen Sie die intelligente Skalierung für 24-MP-Kameraaufnahmen aktiv oder deaktivieren Sie sie, wenn Produktvorlagen strikt originale Pixelmaße verlangen.',
      },
      {
        title: 'Ersparnis und Details nebeneinander prüfen',
        description:
          'Verifizieren Sie die grüne „Unter 200 KB"-Anzeige und ziehen Sie den Vergleichsregler über Etiketten, Stoffstruktur oder feine UI-Kanten.',
      },
      {
        title: 'Einzelne Assets speichern oder „Alle herunterladen (ZIP)"',
        description:
          'Laden Sie einzelne <name>_200kb-Bilder direkt herunter oder packen Sie Ihren Shop-Katalog in compressmypic_200kb.zip.',
      },
    ],
    features: [
      { title: 'CMS- und Marktplatz-tauglich', description: 'Ideal für Shopify-, WooCommerce-, WordPress- und Google-Business-Uploads.' },
      { title: 'Intelligente Fallback-Skalierung', description: 'Wenn ein 24-MP-Kamerafoto in voller Größe nicht unter 200 KB passt, greift die Maßskalierung sauber ein.' },
      { title: 'Exakte KB-Verifizierung', description: 'Zeigt verifizierte Ausgabe-Bytes neben Original-Bytes und prozentualer Reduktion.' },
      { title: 'Keine Server-Uploads', description: 'Schnelle HTML5-Canvas-Verarbeitung direkt auf Ihrem Computer oder Handy.' },
    ],
    faqs: [
      {
        question: 'Warum standardisieren WordPress-Agenturen und Shopify-Shops Produktfotos auf etwa 200 KB?',
        answer:
          'Eine Obergrenze von 200 KB lässt genug Bitrate für scharfe Nähte, metallischen Glanz und lesbare Produktetiketten, während Kollektionsraster für mobile Käufer schnell bleiben. Unter 200 KB zu bleiben erfüllt außerdem strenge CMS- und Verzeichnislimits wie Google Business Profile oder WooCommerce-Medienregeln.',
      },
      {
        question: 'Kann ein 12-Megapixel- oder 24-Megapixel-Kamerafoto 200 KB sauber erreichen?',
        answer:
          'Ja. Wenn volle 4000×3000-px-Maße selbst bei 35 % Qualität 200 KB überschreiten, skaliert die intelligente Maßskalierung proportional herunter – oft auf etwa 2200 px oder 1800 px Breite bei scharfer 75 %–85 % Qualität.',
      },
      {
        question: 'Wann sollte ich Maße sperren, indem ich „Intelligente Maßskalierung erlauben" bei 200 KB deaktiviere?',
        answer:
          'Deaktivieren Sie die Skalierung immer, wenn ein Marktplatz oder Druckportal exakte Pixelbreiten erzwingt (etwa quadratische 1600×1600-px-Produktplätze). Der Optimierer senkt dann die verlustbehaftete Qualität bei vollen Maßen bis auf 5 % und meldet ehrlich, wenn 200 KB ohne Größenänderung nicht erreichbar sind.',
      },
      {
        question: 'Wie schneidet WebP im Vergleich zu JPG bei einem 200-KB-Ziel für E-Commerce-Fotos ab?',
        answer:
          'Innerhalb desselben 200-KB-Budgets liefert WebP in der Regel merklich sauberere Studioschatten und schärfere kleine Verpackungstexte als JPG – typischerweise vergleichbar mit einem 10 %–15 % höheren Qualitätsfaktor. Wählen Sie JPG nur, wenn ein älteres Marktplatz-Backend .webp-Uploads noch ablehnt.',
      },
      {
        question: 'Was passiert, wenn ich einen Studio-PNG-Produktfreisteller mit transparentem Hintergrund hochlade?',
        answer:
          'Wenn das Format auf „Original" bleibt und die automatische Umwandlung aktiviert ist, wechselt jedes zu große transparente PNG sauber zu transparentem WebP, wenn PNG allein 200 KB nicht sauber erreichen kann. Wenn Sie explizit JPG wählen, werden transparente Bereiche auf Ihre gewählte matte Farbe für transparente PNGs gelegt.',
      },
      {
        question: 'Warum bevorzugt der Optimierer, 100 % Auflösung zu halten, bevor er Pixelmaße reduziert?',
        answer:
          'Das Verkleinern von Maßen verwirft dauerhaft Pixelrasterdetails, während moderate verlustbehaftete Qualitätseinstellung scharfe Kanten bei voller Breite bewahrt. Das Testen von 35 %–94 % Qualität bei vollen Maßen zuerst stellt sicher, dass Desktop-Hero-Grafiken wann immer möglich in voller Größe bleiben.',
      },
      {
        question: 'Kann ich einen ganzen Saisonkatalog auf einmal unter 200 KB stapelweise optimieren?',
        answer:
          'Ja. Legen Sie Dutzende Produktfotos bis 25 MB pro Datei in die Warteschlange, lassen Sie das Tool jedes Bild lokal prüfen und holen Sie sich jedes optimierte Asset in compressmypic_200kb.zip.',
      },
      {
        question: 'Hilft das Umwandeln transparenter Hintergründe in weiße JPG-Mattefarbe, 200 KB für Amazon oder Etsy zu erreichen?',
        answer:
          'Ja. Reines Weiß (#ffffff) als Hintergrund komprimiert in JPEG extrem effizient und erfüllt gleichzeitig Marktplatz-Richtlinien für weiße Hintergründe, wodurch zusätzliche Bytes innerhalb von 200 KB für das eigentliche Produkt in der Mitte frei werden.',
      },
      {
        question: 'Warum zeigte mein 140-KB-WebP-Upload nach der Neuverarbeitung eine „Gewachsen"-Warnung?',
        answer:
          'Wenn eine bereits gut optimierte Datei unter 200 KB mit der Canvas-Standard-Hochqualität neu codiert wird, kann sie bei etwa 165 KB landen, statt zu schrumpfen. Ein Klick auf „Original behalten" stellt die unberührte 140-KB-Quelldatei sofort wieder her.',
      },
      {
        question: 'Werden unveröffentlichte Produktprototypen oder Kunden-Kampagnenbanner auf externen Servern gespeichert?',
        answer:
          'Nein. Jede Pixeldecodierung, jeder Skalierungsdurchgang und jede ZIP-Erstellung erfolgen privat in Ihrer lokalen Browser-Sitzung, was es sicher für gesperrte Launches und NDA-Kundenarbeit macht.',
      },
      {
        question: 'Unterstützt der 200-KB-Komprimierer Apple-HEIC/HEIF-Fotos neuerer iPhones?',
        answer:
          'Ja. Clientseitiges WebAssembly decodiert iPhone-HEIC-Dateien direkt in Ihrem Browser-Tab, sodass Sie sie vorher nicht umwandeln müssen.',
      },
      {
        question: 'Warum ist 200 KB oft besser als 50 KB für detaillierte Infografiken oder Menütafeln?',
        answer:
          'Kleine Typografie in Restaurantmenüs, Immobilien-Grundrissen oder Software-UI-Aufnahmen verschwimmt schnell, wenn sie unter 50 KB gequetscht wird. Ein 200-KB-Ziel gibt WebP und JPG viermal so viel Byte-Spielraum, sodass feine Beschriftungen scharf bleiben.',
      },
      {
        question: 'Wie nah an 200 KB landet die binäre Qualitätssuche typischerweise?',
        answer:
          'Sobald ein tragfähiger Qualitätsbereich bei einer bestimmten Skalierung gefunden ist, zielen bis zu 7 binäre Suchiterationen auf 96 % bis 100 % von 204.800 Bytes. Dateien landen häufig zwischen 192 KB und 199 KB, sodass Sie maximale Schärfe innerhalb des Limits erhalten.',
      },
      {
        question: 'Werden eingebettete DSLR-Farbprofile und Kamera-GPS-Tags bei der 200-KB-Kompression entfernt?',
        answer:
          'Ja. Das Schreiben von Bildern durch HTML5-Canvas entfernt EXIF-Metadatenblöcke und eingebettete Vorschauminiaturen, verbessert die Privatsphäre und beseitigt verschwendete Kilobytes auf WordPress- und CDN-Servern.',
      },
      {
        question: 'Was, wenn ein zu großes verlustfreies PNG nur auf 35 % herunterskaliert wird, um als PNG unter 200 KB zu bleiben?',
        answer:
          'Wenn das Format auf „Original" steht und die automatische PNG-Umwandlung aktiviert ist, wechselt jedes verlustfreie PNG, das unter 65 % Skalierung gezwungen wird, automatisch zu WebP oder JPG. So behalten Sie deutlich schärfere Pixelmaße und unterschreiten komfortabel das 200-KB-Limit.',
      },
      {
        question: 'Kann ich feine Stoff- oder Schmuckdetails vor dem Herunterladen der 200-KB-Datei in der Vorschau prüfen?',
        answer:
          'Ja. Ein Klick auf „Vergleichen" auf einer beliebigen fertigen Ergebniskarte öffnet einen interaktiven geteilten Bildschirm, der Ihre unkomprimierten Originalpixel direkt mit der komprimierten Ausgabe vergleicht.',
      },
      {
        question: 'Was passiert, wenn ich ein SVG-Vektorbanner in den 200-KB-Komprimierer ablege?',
        answer:
          'Ihr Browser rastert das SVG auf Canvas und optimiert es je nach Ihrer Formatauswahl in ein PNG, WebP oder JPG unter 200 KB. Das ist praktisch, wenn Marktplätze oder CMS-Portale rohe .svg-Uploads ablehnen.',
      },
      {
        question: 'Was ist die maximale Quelldateigröße, die pro Bild hier akzeptiert wird?',
        answer:
          'Jedes hochgeladene JPG, PNG, WebP, HEIC, GIF, BMP oder SVG kann bis 25 MB groß sein. Dieser Spielraum bewältigt schwere Kameraexporte direkt aus Lightroom oder modernen Handys ohne vorheriges Verkleinern.',
      },
      {
        question: 'Wie werden Ausgabedateien benannt, damit sie von meinem Master-Produktordner getrennt bleiben?',
        answer:
          'Jede gespeicherte Kopie behält Ihren bereinigten Basisdateinamen und hängt _200kb vor der Erweiterung an, was klare Namen wie sneaker_side_200kb.webp erzeugt. Ihr originales hochauflösendes Master bleibt vollständig unberührt auf der Festplatte.',
      },
      {
        question: 'Kann ich zu einer anderen exakten Schwelle wie 150 KB oder 300 KB springen, wenn ein Portal seine Regeln ändert?',
        answer:
          'Ja. Nutzen Sie den Link „Brauchen Sie eine andere Zielgröße in KB?" oben in den Steuerungen, um den benutzerdefinierten Zielgrößen-Komprimierer zu öffnen und eine beliebige exakte KB- oder MB-Zahl einzugeben.',
      },
    ],
    relatedSlugs: [
      '/compress-image-to-100kb',
      '/compress-image-to-500kb',
      '/web-image-optimizer',
      '/bulk-image-compressor',
    ],
  },
  {
    slug: '/compress-image-to-500kb',
    name: 'Bild auf 500 KB komprimieren',
    shortDescription: 'Mehrere Megabyte große Fotos unter 500 KB verkleinern – mit ultrahoher Qualität.',
    category: 'compress',
    seoTitle: 'Bild auf 500 KB komprimieren online',
    seoDescription:
      'Komprimieren Sie Bilder kostenlos online auf 500 KB – ohne Verlust an hochauflösender Schärfe. JPG-, PNG-, WebP- und HEIC-Dateien werden zu schnellen Assets.',
    h1: 'Bild auf 500 KB komprimieren online',
    subtitle:
      'Verwandeln Sie sperrige 5-MB- bis 18-MB-DSLR-Aufnahmen, Smartphone-RAW-Exporte und hochauflösende Screenshots in scharfe Assets, wenn Sie ein Bild lokal in Ihrem Browser auf 500 KB komprimieren. Ideal für Fotografen, die Kundenproofs liefern, Gründer, die leichte Pitch-Decks erstellen, und Agenturen, die Portfoliogalerien einreichen: Das Tool behält volle hochauflösende Pixelmaße, wo immer möglich, bei bis 25 MB pro Datei.',
    howToSteps: [
      {
        title: 'Vollauflösende Kamera- oder Designdateien ablegen',
        description:
          'Laden Sie ein oder mehrere JPG-, PNG-, WebP- oder HEIC-Bilder bis 25 MB pro Datei hoch, ohne sie vorher zu verkleinern.',
      },
      {
        title: 'Ausgabeformat für hochauflösende Lieferung wählen',
        description:
          'Behalten Sie „Original" für nahtlose Verarbeitung, wählen Sie JPG für Kunden-Decks und Druckproofs oder WebP für ultrascharfe Portfoliogalerien.',
      },
      {
        title: 'Skalierungs- und PNG-Fallback-Einstellungen prüfen',
        description:
          'Lassen Sie die intelligente Maßskalierung für 40-MP+-Fotos aktiviert oder deaktivieren Sie sie, um strikte 4K+-Maße bei optimierter Qualität zu bewahren.',
      },
      {
        title: 'Details nebeneinander im Vergleichsmodus prüfen',
        description:
          'Prüfen Sie jede „Unter 500 KB"-Bestätigungsplakette und inspizieren Sie Laub, Hauttextur oder Typografie im geteilten Vorher-Nachher-Viewer.',
      },
      {
        title: 'Einzelne Dateien herunterladen oder eine ZIP bündeln',
        description:
          'Speichern Sie jede <name>_500kb-Ausgabe sofort oder exportieren Sie große Fotoserien sauber in compressmypic_500kb.zip.',
      },
    ],
    features: [
      { title: 'Nahezu verlustfreie 500-KB-Kompression', description: '500 KB geben reichlich Spielraum, um große 1920-px- bis 4000-px-Bilder visuell nicht vom Original unterscheidbar zu halten.' },
      { title: 'Automatische HEIC-Decodierung', description: 'Unterstützt iPhone-HEIC/HEIF-Fotos lokal per clientseitigem WebAssembly.' },
      { title: 'Kein Qualitätsraten', description: 'Hören Sie auf, Prozentsätze manuell zu schieben – lassen Sie die binäre Suche die Qualität unter 500 KB maximieren.' },
      { title: '100 % browserprivat', description: 'Nichts wird auf entfernte Server hochgeladen.' },
    ],
    faqs: [
      {
        question: 'Warum bewahrt 500 KB nahezu originale visuelle Qualität bei 4K- und 12-MP-Fotos?',
        answer:
          'Ein halbes Megabyte (512.000 Bytes) bietet reichlich Raum für feinen Mikrokontrast, subtiles Filmkorn und glatte Himmelsverläufe über vollständige 1920-px- bis 4000-px-Fotografien. Die meisten Bilder erreichen 500 KB sauber bei hoher 75 %–92 % Qualität, ohne Maße überhaupt herunterskalieren zu müssen.',
      },
      {
        question: 'Wie gut funktioniert das für Pitch-Decks, Keynote- und PowerPoint-Folienanhänge?',
        answer:
          'Das Verkleinern von Screenshots und Studio-Mockups von 6-MB-PNGs auf JPGs oder WebPs unter 500 KB reduziert den Gesamtaufwand von Präsentationen dramatisch. Ein Deck mit 30 Folien bleibt schnell per E-Mail versendbar und in der Cloud synchronisierbar, während es auf Konferenzprojektoren gestochen scharf aussieht.',
      },
      {
        question: 'Kann ich 100 % originale Auflösung bei einem 24-MP-DSLR-Foto behalten, wenn ich auf 500 KB komprimiere?',
        answer:
          'Deaktivieren Sie „Intelligente Maßskalierung erlauben", um 100 % originale Pixelmaße zu erzwingen, und lassen Sie die binäre Qualitätssuche bei Bedarf bis auf 5 % heruntergehen. Für die meisten 6000×4000-px-Kamera-JPEGs reicht JPG-Qualität um 40 %–65 % bereits aus, um 500 KB zu unterschreiten, ohne ein einziges Pixel zu verkleinern.',
      },
      {
        question: 'Warum kann ein 15-MB-iPhone-HEIC-Porträt bei voller Auflösung unter 500 KB bleiben, wenn es als JPG oder WebP exportiert wird?',
        answer:
          'HEIC-Fotos moderner Handys tragen tiefe Farbdaten und hohe Megapixelzahlen, codieren sich aber effizient in JPG oder WebP mit über 80 % Qualität um etwa 450–495 KB neu. Porträt-Bokeh und subtile Hautverläufe bleiben über die gesamte Bildfläche glatt.',
      },
      {
        question: 'Was passiert, wenn ich ein 10-MB-verlustfreies PNG-Software-Dashboard-Mockup hochlade?',
        answer:
          'Ein Vollbild-Retina-PNG passt selten verlustfrei in 500 KB, ohne starkes Pixelverkleinern. Wenn das Format auf „Original" bleibt und die automatische PNG-Umwandlung aktiviert ist, wechselt es automatisch zu nahezu verlustfreiem hochwertigem WebP oder scharfem JPG, sodass UI-Texte bei voller Bildschirmgröße lesbar bleiben.',
      },
      {
        question: 'Warum ist 500 KB beliebt für Behance-, Dribbble- und Agentur-Portfolio-Einreichungen?',
        answer:
          'Portfolio-Plattformen und RFP-Anbieterportale begrenzen Fallstudien-Medien häufig auf 500 KB pro Bild, um mehrprojektige Seiten schnell zu halten. Das Komprimieren knapp unter 500 KB erfüllt Upload-Validatoren, ohne harte serverseitige Neukompression auszulösen.',
      },
      {
        question: 'Wie verhält sich das Tool, wenn eine Datei in meinem Stapel bereits 320 KB groß ist?',
        answer:
          'Der Komprimierer erkennt, dass 320 KB die 500-KB-Anforderung bereits erfüllt, und verarbeitet eine saubere Kopie in voller Auflösung. Wenn die Neucodierung eine etwas schwerere Datei erzeugt, erscheint die „Gewachsen"-Warnung, sodass Sie auf „Original behalten" klicken und die 320-KB-Originaldatei behalten können.',
      },
      {
        question: 'Verlieren Fotografen hier die Kontrolle über geistiges Eigentum oder leaken Kundenshootings?',
        answer:
          'Niemals. Ob Hochzeitsvorschauen, kommerzielle Architekturaufnahmen oder unveröffentlichte Prototypen vorbereitet werden – jedes Bild wird in Ihrem lokalen Browser-Tab decodiert und komprimiert, ohne Serverübertragung.',
      },
      {
        question: 'Welches Format behält schärfere Typografie und dünne Vektorlinien bei 500 KB?',
        answer:
          'WebP übertrifft JPG bei scharfer dunkler Typografie auf Weiß, Diagrammen und Schemata innerhalb einer 500-KB-Obergrenze. Seine prädiktive Blockcodierung minimiert verrauschte Halos um kontrastreiche Oberflächen und Diagramme.',
      },
      {
        question: 'Kann ich ein transparentes Produkt-PNG auf dunkles Anthrazit statt Weiß abflachen, wenn ich 500-KB-JPG anstrebe?',
        answer:
          'Ja. Die Auswahl von JPG zeigt den Farbwähler für die matte Farbe transparenter PNGs, mit dem Sie Weiß, dunkles Schieferblau oder eine beliebige benutzerdefinierte Marken-Hex-Farbe für nahtloses Mischen transparenter Kanten eingeben können.',
      },
      {
        question: 'Behält die Canvas-Kompression Kameralinsenmodell, Verschlusszeit und GPS-Koordinaten?',
        answer:
          'Nein – HTML5-Canvas entfernt EXIF-Metadaten automatisch, was eingebettete Kamera-Miniaturen und Standortdaten beseitigt. Das hält Kundenproofs privat und weist jedes Kilobyte sichtbaren Pixeln zu.',
      },
      {
        question: 'Welche exakte Byte-Obergrenze löst die Bestätigungsplakette „Unter 500 KB" aus?',
        answer:
          'Das Tool prüft die endgültig codierte Datei gegen 512.000 Bytes (500 × 1024). Dateien strikt bei oder unter 512.000 Bytes zeigen die grüne „Unter 500 KB"-Statusplakette und den exakt eingesparten Platz.',
      },
      {
        question: 'Kann ich zwanzig 10-MB-Fotos in einem Durchgang auf 500 KB stapelweise reduzieren?',
        answer:
          'Ja. Legen Sie alle zwanzig Bilder (bis 25 MB pro Datei) in die Warteschlange, lassen Sie den Browser jedes Foto nacheinander durchlaufen und exportieren Sie alles zusammen in compressmypic_500kb.zip.',
      },
      {
        question: 'Warum zeigte ein erzwungenes verlustfreies PNG mit deaktivierter Skalierung „Ziel verfehlt" bei 500 KB?',
        answer:
          'Verlustfreie PNG-Kompression ignoriert Qualitätsregler, was bedeutet, dass eine komplexe hochauflösende Szene mit gesperrtem PNG-Format und vollen Maßen nicht unter ihren rohen DEFLATE-Boden fallen kann. Aktivieren Sie die Maßskalierung oder wählen Sie WebP/JPG, um 500 KB sauber zu unterschreiten.',
      },
      {
        question: 'Kann ich zoomen und schwenken oder Original und 500 KB nebeneinander vergleichen, bevor ich speichere?',
        answer:
          'Ja. Ein Klick auf „Vergleichen" auf einer beliebigen fertigen Karte öffnet den Vorher-Nachher-Vorhang in voller Breite, sodass Sie Augen, Haarsträhnen oder kleine Beschriftungen direkt gegen die Originaldatei prüfen können.',
      },
      {
        question: 'Wenn ein Bild eine geringe Maßskalierung benötigt, um 500 KB zu erreichen, wie drastisch ist die Größenänderung?',
        answer:
          'Der Skalierer beginnt bei 82 % der Originalmaße, bevor er steilere Schritte versucht. Da 500 KB großzügig ist, unterschreiten riesige 50-MP-Studioexporte das Ziel typischerweise sauber direkt beim 82-%- oder 68-%-Schritt und behalten dabei hochauflösende Druckschärfe.',
      },
      {
        question: 'Unterstützt das Tool alte BMP-Bitmapdateien oder SVG-Diagramme bis 25 MB?',
        answer:
          'Ja. Unkomprimierte BMP-Archive und Vektor-SVG-Illustrationen bis 25 MB laden direkt auf Canvas und exportieren sauber unter 500 KB in Ihrem gewählten Rasterformat.',
      },
      {
        question: 'Wie ändert sich der Dateiname beim Herunterladen komprimierter 500-KB-Kopien?',
        answer:
          'Jedes verarbeitete Bild hängt automatisch _500kb vor seiner Erweiterung an und erzeugt klare Namen wie architectural_proof_500kb.jpg. Das Tag im exportierten Dateinamen stellt sicher, dass Ihre komprimierten Lieferdateien Master-Originale nie überschreiben.',
      },
      {
        question: 'Was soll ich tun, wenn ein Marktplatzportal stattdessen ein Limit von 1 MB oder 250 KB setzt?',
        answer:
          'Klicken Sie auf die Verknüpfung „Brauchen Sie eine andere Zielgröße in KB?" über den Formatbuttons, um den benutzerdefinierten Zielgrößen-Komprimierer zu öffnen und eine beliebige KB- oder MB-Schwelle einzugeben.',
      },
      {
        question: 'Kann ich 500-KB-Assets direkt von einem iPad oder Android-Tablet komprimieren?',
        answer:
          'Ja. Touchfreundliche Formatsteuerungen, der Vergleichsregler und der ZIP-Export funktionieren sauber in modernen Tablet- und Mobilbrowsern ohne Desktop-Software.',
      },
    ],
    relatedSlugs: [
      '/compress-image-to-200kb',
      '/target-file-size-compressor',
      '/bulk-image-compressor',
      '/',
    ],
  },
  {
    slug: '/bulk-image-compressor',
    name: 'Stapel-Bildkomprimierer',
    shortDescription: 'Dutzende Bilder auf einmal stapelweise komprimieren und als eine ZIP exportieren.',
    category: 'compress',
    seoTitle: 'Bilder stapelweise komprimieren online',
    seoDescription:
      'Verkleinern Sie Dutzende Dateien mit unserem Stapel-Bildkomprimierer. Profile Web-Schnell, E-Mail oder Hohe Qualität – und laden Sie eine ZIP herunter.',
    h1: 'Stapel-Bildkomprimierer kostenlos online',
    subtitle:
      'Verkleinern Sie ganze Ordner mit Produktaufnahmen, Kamerarollen-Backups und Website-Assets gleichzeitig mit unserem kostenlosen Stapel-Bildkomprimierer direkt in Ihrem Browser. Für E-Commerce-Teams, Fotografen und Entwickler, die große Stapel verarbeiten, kombiniert er Schnell-Stapelprofile mit einem Klick und benutzerdefinierte Qualitätsregler mit Live-Fortschrittsverfolgung, visuellen Vergleichen pro Datei und sofortigen Single-ZIP-Downloads.',
    howToSteps: [
      {
        title: 'Gesamten Bildstapel ablegen',
        description:
          'Wählen Sie mehrere JPG-, PNG-, WebP- oder HEIC-Bilder bis 25 MB pro Datei aus oder ziehen Sie sie in den Stapel-Drop-Bereich (weitere können jederzeit hinzugefügt werden).',
      },
      {
        title: 'Schnell-Stapelprofil anklicken oder Einstellungen anpassen',
        description:
          'Wählen Sie „Web-Schnell" (WebP 75 %), „E-Mail / Teilen" (JPG 65 %) oder „Hohe Qualität" (85 %) oder passen Sie Qualitätsregler, Ausgabeformat und matte Farbe an.',
      },
      {
        title: 'Live-Fortschritt der Stapelkompression überwachen',
        description:
          'Beobachten Sie, wie der Live-Fortschrittsbalken Datei für Datei fertig wird, und prüfen Sie das Zusammenfassungsbanner mit Gesamtdateien, eingesparten MB und prozentualer Gesamtreduktion.',
      },
      {
        title: 'Einzelne Karten und Vorher-Nachher-Qualität prüfen',
        description:
          'Öffnen Sie das Vergleichs-Modal bei Beispieldateien, klicken Sie auf „Original behalten", wenn ein bereits winziges Asset gewachsen ist, oder führen Sie einzelne Dateien mit angepassten Einstellungen erneut aus.',
      },
      {
        title: 'Bei Bedarf anpassen und alle erneut komprimieren',
        description:
          'Ändern Sie Profil, Qualitätsprozentsatz oder Zielformat jederzeit und verarbeiten Sie die gesamte Warteschlange mit einem Klick erneut, ohne erneut hochzuladen.',
      },
      {
        title: 'Einzelne Dateien oder „Alle herunterladen (ZIP)" herunterladen',
        description:
          'Speichern Sie einzelne optimierte Bilder direkt von ihren Karten oder klicken Sie auf „Alle herunterladen (ZIP)", um bulk_compressed_compressmypic.zip herunterzuladen.',
      },
    ],
    features: [
      { title: 'Stapelfortschritt und Gesamt-Ersparnis', description: 'Zeigt Live-Fortschritt Datei für Datei sowie aggregierte Gesamt-MB und eingesparte Prozent über Ihren gesamten Stapel.' },
      { title: 'Schnell-Stapelprofile mit einem Klick', description: 'Wendet WebP-, E-Mail/JPG- oder Hochqualitäts-Voreinstellungen sofort auf jede Datei an.' },
      { title: 'Vergleichs-Modal pro Datei', description: 'Prüfen Sie jedes einzelne komprimierte Foto vor dem Herunterladen gegen sein Original.' },
      { title: 'Keine Stapellimits', description: 'Komprimieren Sie so viele Bilder, wie Ihr Gerätespeicher zulässt – ohne kostenpflichtige Stufe oder Server-Warteschlangen.' },
    ],
    faqs: [
      {
        question: 'Was ändern die drei Schnell-Stapelprofile bei meinen wartenden Bildern?',
        answer:
          '„Web-Schnell" stellt das Ausgabeformat auf WebP bei 75 % Qualität für leichte Websites um, „E-Mail / Teilen" wandelt den Stapel in 65-%-JPG für kleinere Anhänge um, und „Hohe Qualität" behält Originalformate bei 85 % Qualität. Ein Klick auf ein beliebiges Profil aktualisiert automatisch die Einstellungen und komprimiert bereits geladene Dateien erneut.',
      },
      {
        question: 'Kann ich Bilder auf einem Laptop oder Handy stapelweise komprimieren, ohne aktive Upload-Verbindung?',
        answer:
          'Sobald die Toolseite fertig geladen ist, erfolgen alle Stapelkompressionen, Decodierungen und ZIP-Erstellungen lokal in Ihrem Browser mit HTML5-Canvas und WebAssembly. Ihre Fotos gelangen nie in eine entfernte Verarbeitungswarteschlange oder verlassen Ihr Gerät.',
      },
      {
        question: 'Wie meldet die aggregierte Stapelzusammenfassung die Gesamtersparnis?',
        answer:
          'Wenn Dateien fertig verarbeitet sind, summiert die Zusammenfassungsleiste die ursprüngliche Byte-Größe aller Elemente gegen das komprimierte Ergebnis und zeigt aggregierte eingesparte Megabytes und die prozentuale Gesamtreduktion. Wenn eine einzelne Datei am Ende größer wurde, können Sie vor dem Export der ZIP auf dieser Karte auf „Original behalten" klicken.',
      },
      {
        question: 'Was passiert, wenn ich PNG-Screenshots, iPhone-HEICs und JPG-Fotos in einem Stapel mische?',
        answer:
          'Wenn das Ausgabeformat auf „Original" steht, codiert jedes Bild in sein passendes Webformat (HEIC wird per WebAssembly sauber in JPG/PNG decodiert). Alternativ vereinheitlicht die Wahl von WebP oder JPG den gesamten gemischten Ordner in einer einheitlichen Ausgabeerweiterung.',
      },
      {
        question: 'Was ist die maximal zulässige Größe pro Datei im Stapel-Bildkomprimierer?',
        answer:
          'Einzelne Dateien bis 25 MB werden für JPG-, PNG-, WebP-, HEIC/HEIF-, GIF-, BMP- und SVG-Eingaben unterstützt. Es gibt keine feste Anzahlbegrenzung – nur den verfügbaren Browser-Arbeitsspeicher Ihres Geräts.',
      },
      {
        question: 'Warum verarbeitet das Tool Stapel mit einem Live-Fortschrittsbalken, statt meinen Tab einzufrieren?',
        answer:
          'Dateien laufen in kontrollierten Browser-Durchgängen mit Fortschrittsaktualisierungen („X / Y"), die in Echtzeit angezeigt werden. Das hält die Seite reaktionsschnell, sodass Sie den Abschluss auch bei Stapeln von 30 oder 50 hochauflösenden Fotos klar überwachen können.',
      },
      {
        question: 'Wie heißt die exportierte ZIP-Datei, wenn ich auf „Alle herunterladen (ZIP)" klicke?',
        answer:
          'Ein Klick auf „Alle herunterladen (ZIP)" packt jede fertige Ausgabe sauber in bulk_compressed_compressmypic.zip. Das gesamte ZIP-Archiv wird direkt in Ihrem Browser-Arbeitsspeicher erstellt, ohne Umweg über einen Cloud-Speicherserver.',
      },
      {
        question: 'Kann ich nach Abschluss meines ersten Stapels weitere Fotos zur Warteschlange hinzufügen?',
        answer:
          'Ja. Das Ablegen weiterer Bilder fügt sie sauber zu Ihrer bestehenden Stapelliste hinzu, sodass Sie alte und neu abgelegte Dateien gemeinsam in einer endgültigen ZIP bündeln können.',
      },
      {
        question: 'Was ist der Unterschied zwischen den Voreinstellungen „Ausgewogen", „Kleinere Datei" und „Hohe Qualität" in den Kompressionssteuerungen?',
        answer:
          'Schnell-Stapelprofile konfigurieren Format- und Qualitätskurzbefehle für gängige Ziele wie Webgeschwindigkeit oder E-Mail-Anhänge. Die Pillen „Ausgewogen", „Kleinere Datei" und „Hohe Qualität" sowie der Qualitätsregler von 10 %–100 % in den Kompressionssteuerungen lassen Sie dagegen die exakte verlustbehaftete Stärke feinjustieren, bevor Sie auf „Alle erneut komprimieren" klicken.',
      },
      {
        question: 'Wenn ich transparente PNG-Icons stapelweise in JPG umwandle, wie werden ihre Hintergründe eingefärbt?',
        answer:
          'Immer wenn das Ausgabeformat JPG ist (einschließlich über das Profil „E-Mail / Teilen"), erscheint der Farbwähler für die matte Hintergrundfarbe automatisch. Er füllt transparente Alphakanäle sauber auf reines Weiß (#ffffff) oder eine beliebige benutzerdefinierte Hex-Farbe, sodass Icons nie schwarz werden.',
      },
      {
        question: 'Verändert der Stapel-Bildkomprimierer die Pixelmaße von Bildern oder behält er originale Breite und Höhe?',
        answer:
          'Der Stapel-Bildkomprimierer behält jede Datei bei 100 % ihrer originalen Pixelbreite und -höhe und reduziert die Byte-Größe per Qualitätscodierung. Wenn Sie zusätzlich Maße über Dutzende Fotos verkleinern müssen, kombinieren Sie ihn mit dem Stapel-Bildgrößenänderer.',
      },
      {
        question: 'Warum zeigte ein bereits komprimiertes PNG in meinem Stapel eine „Neu codiert – gewachsen"-Warnung?',
        answer:
          'PNG-Dateien, die von Tools mit aggressiver Palettenquantisierung exportiert wurden, können sich leicht vergrößern, wenn sie auf HTML5-Canvas als vollständiges 24-Bit-verlustfreies PNG neu gespeichert werden. Ein Klick auf „Original behalten" auf dieser Karte bewahrt das kleinere Original in Ihrer Stapel-ZIP, oder der Wechsel des Formats zu WebP/JPG verkleinert es weiter.',
      },
      {
        question: 'Kann ich nur ein einzelnes störrisches Bild erneut komprimieren, statt den ganzen Ordner erneut laufen zu lassen?',
        answer:
          'Ja. Jede fertige Ergebniskarte enthält eigene Buttons „Erneut komprimieren" und „Entfernen" neben „Vergleichen" und „Herunterladen", sodass Sie Ausreißer sauber anpassen oder verwerfen können.',
      },
      {
        question: 'Entfernt die Stapelkompression automatisch Kamera-GPS-Koordinaten und EXIF-Tags aus Reisealben?',
        answer:
          'Ja. Da jedes Bild während der Kompression auf HTML5-Canvas gerendert wird, werden eingebettete EXIF-Tags, Kamera-Seriennummern und GPS-Standorte sauber aus jeder Datei in der ZIP entfernt.',
      },
      {
        question: 'Wann sollte ich den Stapel-Bildkomprimierer statt Zielgröße oder Web-Bildoptimierer wählen?',
        answer:
          'Nutzen Sie den Stapel-Bildkomprimierer, wenn Sie schnelle, einheitliche qualitätsbasierte Einsparungen bei vollen Pixelmaßen über Dutzende Fotos wollen. Wählen Sie „Zielgröße", wenn Sie jede Datei unter eine strikte KB-Obergrenze bringen müssen, oder den Web-Bildoptimierer für voreingestellte Web-Pixelobergrenzen plus responsive HTML-Tags.',
      },
      {
        question: 'Kann ich die visuelle Qualität einzelner Stapelelemente prüfen, bevor ich die volle ZIP herunterlade?',
        answer:
          'Ja. Ein Klick auf „Vergleichen" auf einer beliebigen Karte öffnet den Nebeneinander-Vergleichsregler, der Original- und komprimierte Version in vollem Detail vergleicht.',
      },
      {
        question: 'Wie schneidet der standardmäßige Startwert von 70 % Qualität bei allgemeinen Fotobibliotheken ab?',
        answer:
          '70 % verlustbehaftete Qualität liefert typischerweise erhebliche Byte-Reduktionen von 50 %–75 % bei hochauflösenden JPEGs und bleibt dabei auf typischen Webbildschirmen und beim E-Mail-Teilen visuell sauber. Erhöhen Sie sie unter „Hohe Qualität" auf 85 % für kritische Portfolio-Arbeiten.',
      },
      {
        question: 'Was passiert, wenn ich einen riesigen Ordner mit 100 Fotos auf einem Handy mit begrenztem RAM hochlade?',
        answer:
          'Da Decodierung und Canvas-Puffer im Gerätespeicher liegen, können mobile Tabs bei extremen einzelnen Warteschlangen langsamer werden. Die Verarbeitung von 15 bis 30 hochauflösenden Fotos pro Stapel – und das Leeren fertiger Listen zwischen Durchgängen – hält Smartphone-Browser reibungslos.',
      },
      {
        question: 'Werden Wasserzeichen, tägliche Dateilimits oder kostenpflichtige Upgrade-Aufforderungen jemals bei Stapel-ZIP-Exporten erzwungen?',
        answer:
          'Niemals. Sowohl Einzeldownloads als auch „Alle herunterladen (ZIP)"-Bündel exportieren sauber – ohne Wasserzeichen, Kontoanmeldungen oder Dateianzahl-Paywalls.',
      },
      {
        question: 'Kann ich animierte GIFs in einen Stapelkompressions-Stapel ablegen?',
        answer:
          'Animierte GIF-Eingaben extrahieren und komprimieren hier nur ihr erstes Bild als statische Datei. Wenn Sie animierte GIFs mit mehreren Bildern verkleinern müssen und dabei Bewegung erhalten wollen, nutzen Sie unser spezielles Tool „GIF-Komprimierer".',
      },
    ],
    relatedSlugs: [
      '/bulk-image-resizer',
      '/bulk-image-converter',
      '/web-image-optimizer',
      '/',
    ],
  },
  {
    slug: '/target-file-size-compressor',
    name: 'Zieldateigrößen-Kompressor',
    shortDescription: 'Komprimieren Sie jedes Bild auf Ihre exakte KB- oder MB-Grenze.',
    category: 'compress',
    seoTitle: 'Zieldateigrößen-Kompressor online – exakte KB & MB',
    seoDescription:
      'Erreichen Sie exakte Upload-Grenzen in Ihrem Browser: Geben Sie eine KB- oder MB-Grenze ein und nutzen Sie binäre Qualitätssuche und Pixelskalierung lokal.',
    h1: 'Zieldateigrößen-Bildkompressor',
    subtitle:
      'Geben Sie eine exakte Upload-Grenze in KB oder MB ein – zum Beispiel 35 KB für einen Ausweis, 150 KB für ein Website-Banner oder 2 MB für einen Anhang – mit unserem Zieldateigrößen-Kompressor, der direkt in Ihrem Browser läuft. Für Designer, Entwickler und Bewerber, die mit ungewöhnlichen Portalvorgaben arbeiten: Er kombiniert binäre Qualitätssuche mit optionaler Pixelskalierung für Dateien bis zu 25 MB – alles sauber auf Ihrem eigenen Gerät.',
    howToSteps: [
      {
        title: 'Geben Sie Ihre eigene KB- oder MB-Grenze ein',
        description:
          'Tippen Sie einen beliebigen Zielwert von 1 KB bis 10.240 KB ein (oder wechseln Sie zu MB bis 20 MB), oder tippen Sie auf eine Schnellvoreinstellung wie 20 KB, 50 KB, 100 KB, 200 KB, 500 KB oder 1 MB.',
      },
      {
        title: 'Legen Sie ein oder mehrere Bilder bis zu 25 MB ab',
        description:
          'Laden Sie JPG-, PNG-, WebP-, HEIC-, GIF-, BMP- oder SVG-Dateien in den Upload-Bereich – die automatische Zieloptimierung startet sofort.',
      },
      {
        title: 'Wählen Sie Ausgabeformat und Sicherheitskontrollen',
        description:
          'Wählen Sie Original, JPG, WebP oder PNG, lassen Sie die intelligente Größenanpassung aktiv, falls hochauflösende Dateien Pixel verlieren müssen, und aktivieren Sie die automatische PNG-Umwandlung für schwere Grafiken.',
      },
      {
        title: 'Lesen Sie die Zieldiagnose und vergleichen Sie die Qualität',
        description:
          'Prüfen Sie in der Zusammenfassung der Zielkomprimierung, welche Dateien das Ziel erreicht haben und welche nicht, vergleichen Sie die Schärfe mit „Vergleichen“, oder klicken Sie auf „Original behalten“, falls ein kleines Bild gewachsen ist.',
      },
      {
        title: 'Passen Sie das Ziel jederzeit an oder laden Sie die ZIP-Datei herunter',
        description:
          'Ändern Sie Ihren eigenen Grenzwert und klicken Sie auf „Komprimieren auf [Ziel]“, um die Warteschlange erneut zu verarbeiten. Speichern Sie dann einzelne Dateien oder klicken Sie auf „Alle herunterladen (ZIP)“.',
      },
    ],
    features: [
      {
        title: 'Eigene KB- und MB-Ziele',
        description: 'Stellen Sie jeden Zielwert ein – von winzigen 10-KB-Avataren bis zu mehrmegabytegroßen Druck-Uploads.',
      },
      {
        title: 'Zweistufige Qualitäts- und Skalierungs-Engine',
        description: 'Testet zuerst die Qualitätsstufen bei voller Auflösung und verkleinert die Abmessungen erst dann schrittweise, wenn es nötig ist.',
      },
      {
        title: 'Ehrliche Diagnose bei verfehlten Zielen',
        description: 'Erklärt klar, wenn ein verlustfreies PNG oder deaktivierte Skalierung das Erreichen einer strengen Größengrenze verhindert.',
      },
      {
        title: 'Stapelverarbeitung und ZIP-Unterstützung',
        description: 'Komprimieren Sie mehrere Dateien auf dasselbe KB-Ziel und laden Sie alle in einer ZIP-Datei herunter.',
      },
    ],
    faqs: [
      {
        question: 'Welchen KB- und MB-Bereich kann ich in den Zieldateigrößen-Kompressor eingeben?',
        answer:
          'Im KB-Modus können Sie jede ganze Zahl von 1 KB bis 10.240 KB (10 MB) eingeben; beim Öffnen der Seite ist 150 KB voreingestellt. Wenn Sie die Einheit auf MB wechseln, können Sie jeden Wert von 1 MB bis 20 MB anvisieren – mit Schnellvoreinstellungen für 20 KB, 50 KB, 100 KB, 200 KB, 500 KB und 1 MB.',
      },
      {
        question: 'Wie rechnet der Zieldateigrößen-Kompressor meine Zahl beim Wechsel zwischen KB und MB um?',
        answer:
          'Wenn Sie auf MB tippen, wird Ihr aktuelles KB-Ziel durch 1.024 geteilt und auf mindestens 1 MB aufgerundet, damit Sie nie versehentlich von Kilobyte auf eine winzige Byte-Grenze fallen. Zurück bei KB wird der Wert sauber mit 1.024 multipliziert, bis zur Grenze von 10.240 KB.',
      },
      {
        question: 'Warum testet der Optimierer zuerst die binäre Qualitätssuche bei 100 % Auflösung, bevor er die Abmessungen verkleinert?',
        answer:
          'Viele Bilder mit moderaten Grenzen wie 150 KB, 300 KB oder 1,5 MB erreichen das Ziel allein dadurch, dass überschüssige JPEG- oder WebP-Komprimierung entfernt wird – ohne Pixel zu verlieren. Indem zuerst die Qualität von 35 % bis 94 % bei vollen Abmessungen geprüft wird, bleiben Breite und Höhe erhalten, wann immer es möglich ist.',
      },
      {
        question: 'Wann greift die intelligente Größenanpassung im Zieldateigrößen-Kompressor automatisch ein?',
        answer:
          'Wenn selbst 35 % verlustbehaftete Qualität bei voller Breite das Bild nicht unter Ihre Byte-Grenze bringt und „Intelligente Größenanpassung zulassen“ aktiviert ist, geht die Engine schrittweise durch Skalierungsfaktoren von 82 % bis 10 %. Bei jedem Schritt führt sie eine neue Qualitätssuche durch und wählt die höchste Auflösung, die Ihre exakte Grenze einhält.',
      },
      {
        question: 'Was passiert im Zieldateigrößen-Kompressor, wenn ein Portal eine sehr enge KB-Grenze verlangt, ohne die Größe zu ändern?',
        answer:
          'Deaktivieren Sie „Intelligente Größenanpassung zulassen“, um Ihre Breite und Höhe bei 100 % zu sperren. Der Kompressor senkt dann die verlustbehaftete JPG- oder WebP-Qualität bei vollen Abmessungen bis auf 5 % und teilt Ihnen ehrlich mit, wenn die Komplexität des Bildes physisch nicht in die von Ihnen gewünschten KB passt.',
      },
      {
        question: 'Warum zeigen unmögliche Grenzen wie 2 KB oder 3 KB eine ehrliche Meldung über ein verfehltes Ziel?',
        answer:
          'Jede gültige JPEG-, WebP- oder PNG-Datei enthält zwingend Dateiköpfe, Huffman-Tabellen und Farbquantisierungsblöcke, die selbst auf einem winzigen Raster mehrere hundert Byte belegen. Statt abzustürzen oder Zahlen zu erfinden, zeigt die Karte die kleinste real erreichbare codierte Größe zusammen mit umsetzbaren Vorschlägen.',
      },
      {
        question: 'Was bewirkt der Schalter für die automatische Umwandlung großer PNGs im Zieldateigrößen-Kompressor?',
        answer:
          'Verlustfreie PNG-Dateien ignorieren Qualitätsregler und werden nur durch Herunterskalieren kleiner, was Screenshots oder Produktgrafiken unscharf machen kann, wenn sie unter eine enge KB-Grenze gezwungen werden. Bei aktivierter automatischer Umwandlung wechseln zu große opake PNGs zu JPG, während transparente PNGs zu WebP wechseln, wenn PNG allein das Ziel verfehlt oder unter 65 % Skalierung fällt.',
      },
      {
        question: 'Kann ich gemischte Fotos im Stapel auf dieselbe eigene KB-Grenze komprimieren?',
        answer:
          'Ja. Legen Sie eine beliebige Mischung aus JPG-, PNG-, WebP-, HEIC-, GIF-, BMP- oder SVG-Bildern mit jeweils bis zu 25 MB in die Warteschlange, und jede Datei wird unabhängig anhand Ihres aktiven KB- oder MB-Ziels optimiert.',
      },
      {
        question: 'Wie verfolgt die Zusammenfassung der Zielkomprimierung den Teilerfolg eines Stapels?',
        answer:
          'Beim Komprimieren eines Stapels mit mehreren Dateien gegen eine strenge eigene Grenze zählt das dunkle Zusammenfassungsbanner genau, wie viele Dateien Ihr Ziel erreicht haben und wie viele ehrlich nicht hineinpassten – zusammen mit den insgesamt gesparten Bytes. Jede einzelne Karte erklärt ihren genauen endgültigen Qualitätsprozentsatz und Skalierungsfaktor.',
      },
      {
        question: 'Welchen Namen erhalten einzelne Downloads und ZIP-Dateien des Zieldateigrößen-Kompressors?',
        answer:
          'Einzelne Downloads erhalten Ihr Kilobyte-Ziel als Anhang – etwa brochure_150kb.jpg –, während ZIP-Exporte mit mehreren Dateien sauber als compressmypic_<Wert><Einheit>.zip gespeichert werden. Ihre unberührten Originale bleiben sicher getrennt auf der Festplatte.',
      },
      {
        question: 'Wie geht der Zieldateigrößen-Kompressor mit transparenten Hintergründen um, wenn ich JPG bei einer strengen KB-Grenze wähle?',
        answer:
          'Wenn Sie JPG wählen, erscheint die Mattfarbe für transparente PNGs (standardmäßig reines Weiß #ffffff). Jeder Alphabereich wird vor der JPEG-Komprimierung sauber mit Ihrer gewählten Hintergrundfarbe gefüllt, sodass keine schwarzen Ränder entstehen.',
      },
      {
        question: 'Warum zeigte eine Datei, die kleiner als mein eigenes Ziel war, eine Warnung über Wachstum?',
        answer:
          'Wenn Sie eine Grenze von 300 KB für ein Bild verlangen, das bereits auf 180 KB komprimiert war, kann das Decodieren auf HTML5 Canvas und erneute Speichern mit hoher Qualität die Datei auf 240 KB vergrößern. Klicken Sie auf „Original behalten“ auf dieser Karte, um Ihre leichtere 180-KB-Quelldatei zu behalten.',
      },
      {
        question: 'Entfernt die Komprimierung auf Zielgröße sensible EXIF-Metadaten aus Dokumenten oder Fotos?',
        answer:
          'Ja. Beim Zeichnen der Pixel auf HTML5 Canvas werden eingebettete Kamera-Vorschauen, Verschluss-Metadaten und GPS-Koordinaten automatisch entfernt. So bleiben persönliche Dateien privat, und jedes Kilobyte dient der Bildklarheit.',
      },
      {
        question: 'Kann ich meinen eigenen KB-Wert ändern, nachdem die Bilder fertig sind, ohne sie erneut hochzuladen?',
        answer:
          'Ja. Bearbeiten Sie den Zielwert oder tippen Sie jederzeit auf eine andere Voreinstellung und klicken Sie auf die Schaltfläche „Komprimieren auf [Ziel]“, um Ihre gesamte geladene Liste sofort im Speicher neu zu optimieren.',
      },
      {
        question: 'Wie genau ist die endgültige Byte-Anzahl im Vergleich zu binären Kilobyte-Grenzen?',
        answer:
          'Die Engine rechnet KB in exakte binäre Bytes um (KB × 1024) und behandelt Ihre Eingabe als strenge Obergrenze, die nie überschritten wird – außer wenn es unter gesperrten Bedingungen physisch unmöglich ist. Die binäre Suche stoppt typischerweise bei 96 % bis 100 % dieser Grenze, um maximale Details zu erhalten.',
      },
      {
        question: 'Werden private Kundenabzüge, Verträge oder medizinische Scans während der Zielberechnung hochgeladen?',
        answer:
          'Nein. Iterationen der binären Suche, Bildskalierung, WebAssembly-HEIC-Decodierung und ZIP-Verpackung laufen strikt innerhalb Ihrer Browser-Sitzung – ohne externe Netzwerkübertragungen.',
      },
      {
        question: 'Kann ich feinen Text oder Details bei meiner eigenen KB-Grenze vor dem Speichern in der Vorschau ansehen?',
        answer:
          'Ja. Klicken Sie auf „Vergleichen“ auf einer fertigen Ergebniskarte, um einen interaktiven Vorher-Nachher-Vorhang zu öffnen und scharfe Kanten direkt am Original-Upload zu prüfen.',
      },
      {
        question: 'Wann lohnt es sich, ein festes Tool wie 50 KB oder 100 KB statt des Zieldateigrößen-Kompressors zu wählen?',
        answer:
          'Nutzen Sie die festen Seiten, wenn Ihr Workflow immer auf Standardgrenzen von Portalen zielt, etwa 50-KB-Pässe oder 200-KB-Shopify-Uploads. Öffnen Sie diesen Zieldateigrößen-Kompressor, wenn Formulare ungewöhnliche Grenzen wie 30 KB, 75 KB, 250 KB oder 1,5 MB verlangen.',
      },
      {
        question: 'Was passiert, wenn ich ein animiertes GIF hochlade und 400 KB anstrebe?',
        answer:
          'Da die Canvas-basierte KB-Zielsteuerung statische Rasterbilder verarbeitet, werden animierte GIF-Uploads optimiert und ihr Eröffnungsbild als Standbild exportiert. Nutzen Sie unseren speziellen GIF-Kompressor, wenn Sie mehrbildrige Animationen in Schleife verkleinern möchten, ohne die Bewegung zu verlieren.',
      },
      {
        question: 'Was passiert, wenn ich ein hohes MB-Ziel wie 5 MB für ein 1-MB-Bild festlege?',
        answer:
          'Jedes Bild, das bereits unter Ihrer eigenen MB-Grenze liegt, wird sofort im Durchgang mit höchster Qualität bei vollen Abmessungen freigegeben. Falls die erneute Codierung das Byte-Gewicht unnötig aufbläht, können Sie direkt auf der Karte auf „Original behalten“ klicken, um Ihre leichtere Quelldatei zu behalten.',
      },
    ],
    relatedSlugs: [
      '/compress-image-to-50kb',
      '/compress-image-to-100kb',
      '/compress-image-to-200kb',
      '/compress-image-to-500kb',
    ],
  },
  {
    slug: '/bulk-image-resizer',
    name: 'Stapel-Bildverkleinerer',
    shortDescription: 'Verkleinern Sie Dutzende Bilder nach Maximalmaßen, Breite oder % – mit ZIP.',
    category: 'resize',
    seoTitle: 'Bilder stapelweise verkleinern – kostenlos online',
    seoDescription:
      'Skalieren Sie Dutzende Fotos direkt in Ihrem Browser: Wählen Sie Maximale B×H, Einheitliche Breite, Exakte Pixel oder % und laden Sie eine ZIP-Datei herunter.',
    h1: 'Kostenloser Online-Stapel-Bildverkleinerer',
    subtitle:
      'Standardisieren Sie die Pixelabmessungen ganzer Produktshootings, Blog-Ordner und Fotoalben mit unserem kostenlosen Stapel-Bildverkleinerer, der lokal in Ihrem Browser läuft. Für E-Commerce-Händler, Content-Teams und Fotografen: Er verarbeitet gemischte Hoch- und Querformat-Stapel über Maximale B×H, Einheitliche Breite, Exakte B×H oder prozentuale Skalierung – bis zu 25 MB pro Datei, mit sofortigem ZIP-Export.',
    howToSteps: [
      {
        title: 'Legen Sie mehrere Bilder in die Stapelwarteschlange',
        description:
          'Laden Sie eine beliebige Mischung aus JPG-, PNG-, WebP-, HEIC-, GIF-, BMP- oder SVG-Dateien mit jeweils bis zu 25 MB von Ihrem Computer oder Smartphone hoch.',
      },
      {
        title: 'Wählen Sie eine Stapelstrategie',
        description:
          'Wählen Sie Maximale B×H für gemischte Ausrichtungen, Einheitliche Breite für Layouts mit fester Spalte, Exakte B×H für strenge Raster oder Prozent (%) für gleichmäßige Skalierung.',
      },
      {
        title: 'Legen Sie Zielabmessungen oder Größenvoreinstellungen fest',
        description:
          'Geben Sie Pixel von 1 bis 12.000 px ein (oder klicken Sie auf Full HD 1920px, Blog 1200px, E-Commerce 1000×1000 oder Miniatur 600px), oder ziehen Sie die Skala von 10 % bis 200 %.',
      },
      {
        title: 'Konfigurieren Sie den Vergrößerungsschutz und das Anpassungsverhalten',
        description:
          'Lassen Sie „Kleinere Bilder nicht vergrößern“ aktiviert, um winzige Icons zu schützen, oder wählen Sie Einpassen, Ausfüllen oder Strecken, wenn Exakte B×H ausgewählt ist.',
      },
      {
        title: 'Wählen Sie Ausgabeformat, Qualität und Matt-Hintergrund',
        description:
          'Behalten Sie Original oder konvertieren Sie Ausgaben zu JPG, PNG oder WebP – dazu ein Qualitätsregler von 10 % bis 100 % und eine eigene Matt-Hintergrundfarbe für JPG.',
      },
      {
        title: 'Führen Sie die Stapelverkleinerung aus und laden Sie alles als ZIP herunter',
        description:
          'Prüfen Sie auf jeder Karte die alten und neuen Pixelabmessungen und klicken Sie auf „Alle herunterladen (ZIP)“, um bulk_resized_compressmypic.zip lokal zu speichern.',
      },
    ],
    features: [
      {
        title: 'Maximalrahmen-Modus',
        description:
          'Verkleinert breite Landschaften und hohe Porträts sicher innerhalb von z. B. 1200×1200 px – ohne Zuschneiden oder Verzerren.',
      },
      {
        title: 'Schutz vor Vergrößerung',
        description: 'Lassen Sie „Kleinere Bilder nicht vergrößern“ aktiviert, damit kleine Dateien scharf bleiben, statt gestreckt zu werden.',
      },
      {
        title: 'Format- und Qualitätskontrollen',
        description: 'Konvertieren Sie verkleinerte Ausgaben optional gleichzeitig zu WebP oder JPG.',
      },
      {
        title: 'ZIP-Verpackung mit einem Klick',
        description: 'Laden Sie Dutzende verkleinerte Bilder sauber benannt in einer einzigen ZIP-Datei herunter.',
      },
    ],
    faqs: [
      {
        question: 'Wie geht Maximale B×H mit einem Ordner um, der horizontale Landschaften und vertikale Porträts mischt?',
        answer:
          'Maximale B×H behandelt Ihre Breiten- und Höheneingaben (Standard 1200×1200 px) als unsichtbaren Begrenzungsrahmen und erhält dabei das natürliche Seitenverhältnis jedes Fotos. Eine Landschaft von 4000×2000 wird zu 1200×600, ein Porträt von 2000×4000 zu 600×1200 – ohne Zuschneiden oder Strecken.',
      },
      {
        question: 'Wann ist Einheitliche Breite besser als Maximale B×H?',
        answer:
          'Wählen Sie Einheitliche Breite, wenn Sie vertikale Newsletter, CMS-Artikelspalten oder responsive Galerieströme erstellen, bei denen jedes Bild exakt dieselbe horizontale Breite haben muss. Jedes Foto skaliert die Höhe proportional, sodass nichts gestreckt oder zugeschnitten wird.',
      },
      {
        question: 'Was bewirken Einpassen, Ausfüllen und Strecken im Modus Exakte B×H?',
        answer:
          'Einpassen legt das gesamte Bild mit sauberen Pufferrändern in Ihre exakte Pixelbox, während Ausfüllen jede Pixelkante ausfüllt, indem überstehende Seiten mittig zugeschnitten werden. Strecken zwingt nicht passende Seitenverhältnisse direkt auf die exakten Zielpixel.',
      },
      {
        question: 'Wie funktioniert die prozentuale (%) Stapelskalierung?',
        answer:
          'Der Prozentmodus multipliziert die ursprüngliche Breite und Höhe jedes hochgeladenen Bildes mit Ihrem gewählten Reglerfaktor (10 % bis 200 %, mit Schnellschaltflächen für 25 %, 50 %, 75 %, 100 % und 150 %). Bei 50 % wird ein Foto von 4000×3000 zu 2000×1500 und ein Icon von 1000×800 zu 500×400 – im selben Durchgang.',
      },
      {
        question: 'Warum sollte ich „Kleinere Bilder nicht vergrößern“ in gemischten Stapeln aktiviert lassen?',
        answer:
          'Wenn ein Ordner sowohl 4000-px-DSLR-Aufnahmen als auch 400-px-Abzeichen enthält, streckt das Erzwingen eines kleinen Abzeichens auf 1200 px die Pixel und erzeugt Unschärfe. Bei aktivierter Option werden große Fotos sauber verkleinert, während kleinere Dateien ihre scharfen Originalabmessungen behalten.',
      },
      {
        question: 'Was stellen die vier Schnellvoreinstellungen für Pixel ein?',
        answer:
          'Full HD 1920px füllt 1920×1080 aus, Blog 1200px setzt 1200×1200, E-Commerce 1000×1000 setzt 1000×1000 und Miniatur 600px setzt 600×600. Danach können Sie jedes Pixelfeld manuell bis auf 12.000 px anpassen.',
      },
      {
        question: 'Kann ich einen ganzen Ordner beim Stapelverkleinern zu WebP oder JPG konvertieren?',
        answer:
          'Ja. Wechseln Sie das Ausgabeformat vor dem Klick auf „Stapel verkleinern (N)“ von Original zu WebP, JPG oder PNG, um Pixelabmessungen zu skalieren und Dateiformate in einem einzigen Canvas-Durchgang zu modernisieren.',
      },
      {
        question: 'Was passiert mit transparenten PNG-Logos, wenn ich sie mit Ausgabeformat JPG verkleinere?',
        answer:
          'Wenn Sie JPG wählen, erscheint die Matt-Hintergrund-Farbauswahl (standardmäßig weiß #ffffff). Jeder transparente Hintergrund oder weiche Schlagschatten wird vor der JPEG-Codierung sauber über Ihrer gewählten Mattfarbe gezeichnet.',
      },
      {
        question: 'Bleibt die Alphatransparenz beim Stapelverkleinern erhalten, wenn das Ausgabeformat PNG bleibt?',
        answer:
          'Ja, der Export als PNG erhält transparente Hintergründe und weiche Alphakanten bei jedem verkleinerten Element vollständig. Auch Ausgabeformat Original erhält die Transparenz für PNG- und WebP-Uploads.',
      },
      {
        question: 'Wie prüfe ich, ob verkleinerte Fotos vor dem ZIP-Download noch scharf aussehen?',
        answer:
          'Klicken Sie auf eine Miniaturkarte oder auf die Schaltfläche „Vergleichen“ eines fertigen Elements, um den interaktiven Vorher-Nachher-Vergleich zu öffnen. Ziehen Sie den Teiler hin und her, um scharfe Kanten vor dem Export des Stapels zu prüfen.',
      },
      {
        question: 'Wie groß sind die maximale Dateigröße und das Pixellimit pro Bild im Stapel-Bildverkleinerer?',
        answer:
          'Jedes hochgeladene Bild darf bis zu 25 MB groß sein, und Pixeleingaben reichen von 1 px bis 12.000 px pro Seite. Beachten Sie, dass der Export riesiger Leinwände über 10.000 px bei Dutzenden Bildern vom verfügbaren Browser-RAM Ihres Geräts abhängt.',
      },
      {
        question: 'Werden iPhone-HEIC- und Vektor-SVG-Dateien in derselben Verkleinerungswarteschlange unterstützt?',
        answer:
          'Ja. HEIC/HEIF-Fotos werden lokal per clientseitigem WebAssembly decodiert, und SVG-Grafiken werden sauber auf HTML5 Canvas gerastert, bevor sie zusammen mit Standard-JPG-, PNG-, WebP-, GIF- und BMP-Uploads skaliert werden.',
      },
      {
        question: 'Kann ich Einstellungen anpassen und den ganzen Stapel erneut verkleinern, ohne Dateien neu abzulegen?',
        answer:
          'Ja. Passen Sie Strategie, Pixelgrenzen, Format oder den Qualitätsregler von 10 % bis 100 % jederzeit an und klicken Sie auf „Stapel verkleinern (N)“, um alle Bilder in der Warteschlange sofort im Browser-Speicher neu zu verarbeiten.',
      },
      {
        question: 'Zeigt der Live-Fortschrittszähler, wie weit große Ordner schon sind?',
        answer:
          'Ja. Während die Verarbeitung läuft, zeigt die Aktionsschaltfläche „Verkleinern (X/Y)…“ zusammen mit sich drehenden Miniaturen an, sodass Sie den genauen Stapel-Fortschritt immer kennen.',
      },
      {
        question: 'Werden vertrauliche Kundenkataloge oder Familienalben zum Verkleinern an Cloud-Server gesendet?',
        answer:
          'Niemals. Jede Verkleinerungsberechnung, jeder Canvas-Zeichenschritt und jedes ZIP-Paket wird lokal auf Ihrem Gerät ausgeführt – private Fotografie und unveröffentlichte Ware bleiben zu 100 % auf dem Gerät.',
      },
      {
        question: 'Entfernt der Stapel-Bildverkleinerer EXIF-Kameradetails und GPS-Koordinaten?',
        answer:
          'Ja. Da HTML5 Canvas Pixeldaten auf die Zielabmessungen neu zeichnet, ohne rohe EXIF-Köpfe zu kopieren, werden Standort-Tags und Kamera-Seriennummern automatisch entfernt.',
      },
      {
        question: 'Wie heißt das heruntergeladene ZIP-Archiv?',
        answer:
          'Beim Klick auf „Alle herunterladen (ZIP)“ wird bulk_resized_compressmypic.zip lokal in Ihrem Browser erzeugt. Es verpackt jede erfolgreich verkleinerte Datei aus Ihrer Warteschlange sauber in einem Archiv.',
      },
      {
        question: 'Kann ich eine versehentlich hinzugefügte Datei aus einem Stapel mit 20 Bildern vor dem ZIP-Export entfernen?',
        answer:
          'Ja. Klicken Sie auf das Papierkorb-Symbol einer einzelnen Karte, um nur dieses Bild zu löschen, ohne die übrigen 19 verkleinerten Ergebnisse zu unterbrechen.',
      },
      {
        question: 'Worin unterscheidet sich der Stapel-Bildverkleinerer vom Stapel-Bildkompressor?',
        answer:
          'Der Stapel-Bildkompressor lässt die ursprünglichen Pixelbreiten und -höhen unberührt und reduziert die Dateigröße per verlustbehafteter Komprimierung. Dieser Stapel-Bildverkleinerer dagegen ändert aktiv Pixelabmessungen und Begrenzungsrahmen im Stapel – zusammen mit optionalen Format- und Qualitätseinstellungen.',
      },
      {
        question: 'Kann ich einem bereits fertigen Verkleinerungsstapel weitere Fotos hinzufügen?',
        answer:
          'Ja. Ziehen Sie jederzeit weitere Dateien auf den Upload-Bereich; sie werden automatisch mit Ihrer aktiven Verkleinerungsstrategie verarbeitet und in die endgültige Zusammenfassung „Alle herunterladen (ZIP)“ aufgenommen.',
      },
    ],
    relatedSlugs: [
      '/image-resizer',
      '/bulk-image-compressor',
      '/bulk-image-converter',
      '/web-image-optimizer',
    ],
  },
  {
    slug: '/bulk-image-converter',
    name: 'Stapel-Bildkonverter',
    shortDescription: 'Konvertieren Sie mehrere JPG-, PNG-, HEIC-, SVG- und BMP-Dateien auf einmal – mit ZIP.',
    category: 'convert',
    seoTitle: 'Bilder stapelweise konvertieren – kostenlos online',
    seoDescription:
      'Wechseln Sie gemischte Ordner direkt in Ihrem Browser: Konvertieren Sie HEIC-, PNG-, SVG-, AVIF- und BMP-Stapel zu WebP, JPG oder PNG – mit ZIP-Export.',
    h1: 'Kostenloser Stapel-Bildkonverter',
    subtitle:
      'Vereinheitlichen Sie gemischte Ordner aus Apple-HEIC-Aufnahmen, AVIF-Web-Downloads, SVG-Icons, transparenten PNGs und alten BMP-Bitmaps in einem Durchgang mit unserem kostenlosen Stapel-Bildkonverter. Für Entwickler, Content-Manager und alle, die ganze Datei-Bibliotheken standardisieren: Er konvertiert Stapel mit bis zu 25 MB pro Datei sauber zu WebP, JPG oder PNG – lokal, mit optionalen Dateinamen-Suffixen und Download in einer einzigen ZIP-Datei.',
    howToSteps: [
      {
        title: 'Legen Sie einen Stapel Bilder in gemischten Formaten ab',
        description:
          'Laden Sie eine beliebige Kombination aus JPG-, PNG-, WebP-, HEIC-, SVG-, BMP-, GIF- oder AVIF-Dateien mit jeweils bis zu 25 MB in den Upload-Bereich.',
      },
      {
        title: 'Wählen Sie das Zielformat: WebP, JPG oder PNG',
        description:
          'Wählen Sie WebP (kleinstes Webformat) für Website-Geschwindigkeit, JPG (universell) für breites Teilen oder PNG (verlustfrei mit Transparenz) für scharfe Grafiken.',
      },
      {
        title: 'Optionales Dateinamen-Suffix und transparente Füllung',
        description:
          'Geben Sie ein optionales Dateinamen-Suffix wie _web ein (oder lassen Sie es leer) und wählen Sie eine Mattfarbe für transparente Füllung, wenn Sie Alphabilder zu JPG konvertieren.',
      },
      {
        title: 'Legen Sie den Ausgabequalitäts-Prozentsatz fest',
        description:
          'Passen Sie den Qualitätsregler von 10 % bis 100 % für WebP- oder JPG-Exporte an (wird automatisch deaktiviert, wenn verlustfreies PNG aktiv ist).',
      },
      {
        title: 'Prüfen Sie Stapelsummen und visuelle Vergleiche',
        description:
          'Prüfen Sie die Byte-Änderungen pro Datei und das Banner „Zusammenfassung der Stapelkonvertierung“ und öffnen Sie „Vergleichen“ bei Beispielen, um die Schärfe zu prüfen.',
      },
      {
        title: 'Speichern Sie einzelne Dateien oder „Alle herunterladen (ZIP)“',
        description:
          'Klicken Sie auf „Herunterladen“ bei einzelnen Karten oder auf „Alle herunterladen (ZIP)“, um bulk_converted_webp.zip, bulk_converted_jpg.zip oder bulk_converted_png.zip zu exportieren.',
      },
    ],
    features: [
      {
        title: 'Stapel-Pipeline mit gemischten Eingaben',
        description: 'Legen Sie HEICs, PNGs, SVGs und JPEGs zusammen in einem Stapel ab und vereinheitlichen Sie alles in einem Format.',
      },
      {
        title: 'Transparenz-Matte und Suffix-Optionen',
        description: 'Passen Sie weiße oder farbige JPG-Matthintergründe an und fügen Sie sauber optionale Dateinamen-Suffixe hinzu.',
      },
      {
        title: 'Zusammenfassung der Stapelgröße',
        description: 'Sehen Sie die aggregierte Originalgröße im Vergleich zur konvertierten Größe des gesamten Stapels.',
      },
      {
        title: '100 % lokales WebAssembly und Canvas',
        description: 'Dateien werden nie hochgeladen – sogar die iPhone-HEIC-Konvertierung läuft auf Ihrem Gerät.',
      },
    ],
    faqs: [
      {
        question: 'Kann ich verschiedene Eingabedateitypen in derselben Warteschlange des Stapel-Bildkonverters mischen?',
        answer:
          'Ja. Sie können Apple-HEIC, modernes AVIF, transparentes PNG, Vektor-SVG, altes BMP, GIF, WebP und JPG in einem Upload-Durchgang ablegen und die gesamte Sammlung in einem einheitlichen Format exportieren.',
      },
      {
        question: 'Warum hilft das optionale Dateinamen-Suffix beim Konvertieren von Stapeln?',
        answer:
          'Die Eingabe eines Tags wie _web oder _v2 hängt dieses Suffix direkt vor die neue Dateierweiterung an und erzeugt saubere Namen wie hero_web.webp. So kollidieren neu konvertierte Dateien nicht mit ähnlich benannten Quelldateien in gemeinsamen Projektordnern.',
      },
      {
        question: 'Wie berechnet die Zusammenfassung der Stapelkonvertierung die Gesamtauswirkung des Stapels?',
        answer:
          'Sobald die Dateien fertig verarbeitet sind, summiert das dunkle Zusammenfassungsbanner die Originalbytes aller konvertierten Dateien und zeigt daneben die gesamten konvertierten Bytes an. So prüfen Sie sofort Speicher- oder Bandbreitenänderungen eines ganzen Ordners.',
      },
      {
        question: 'Was passiert, wenn ich transparente PNGs und SVGs im Stapel zu JPG vereinheitliche?',
        answer:
          'Wenn Sie JPG (universell) wählen, erscheint die Farbauswahl für transparente Füllung (standardmäßig weiß #ffffff). Jeder alphatransparente Bereich in Ihren PNGs oder SVGs mischt sich sanft auf den gewählten Hintergrundton, statt schwarz zu werden.',
      },
      {
        question: 'Warum ist der Qualitätsregler deaktiviert, wenn PNG (verlustfrei mit Transparenz) ausgewählt ist?',
        answer:
          'PNG nutzt verlustfreie DEFLATE-Codierung, die jedes decodierte Pixel identisch erhält – ohne verlustbehaftete Qualitätsstufen. Sobald Sie WebP oder JPG wählen, wird der Qualitätsregler von 10 % bis 100 % sofort freigeschaltet.',
      },
      {
        question: 'Kann ich einen Ordner mit gemischten Fotos zweimal konvertieren – einmal zu WebP und einmal zu JPG – ohne erneut hochzuladen?',
        answer:
          'Ja. Wechseln Sie „Stapel konvertieren zu Format“ jederzeit von WebP zu JPG, aktualisieren Sie optional Ihr Dateinamen-Suffix und klicken Sie auf „Alle konvertieren (N)“, um die im Speicher zwischengespeicherten Dateien neu zu verarbeiten und eine zweite ZIP-Datei zu erhalten.',
      },
      {
        question: 'Wie zeigt der ZIP-Name an, welches Zielformat ich exportiert habe?',
        answer:
          'Beim Klick auf „Alle herunterladen (ZIP)“ wird bulk_converted_webp.zip, bulk_converted_jpg.zip oder bulk_converted_png.zip direkt in Ihrem Browser erstellt. Das Format im Dateinamen erleichtert es, mehrere Formatexporte in Ihrem Download-Ordner zu unterscheiden.',
      },
      {
        question: 'Bleibt die Alphatransparenz bei PNG-Logos und SVG-Icons erhalten, wenn ich alles zu WebP vereinheitliche?',
        answer:
          'Ja. Sowohl WebP (kleinstes Webformat) als auch PNG (verlustfrei mit Transparenz) erhalten die volle 8-Bit-Transparenz transparenter PNGs, WebPs und einzelner SVG-Dateien sauber.',
      },
      {
        question: 'Was passiert, wenn ein älterer Browser eine gemischte AVIF-Datei in meinem Stapel nicht decodieren kann?',
        answer:
          'Wenn eine Datei einen Codec nutzt, den Ihr Browser nicht unterstützt – etwa AVIF in einem veralteten Browser –, zeigt nur diese bestimmte Karte einen expliziten Fehlerhinweis an. Alle anderen JPG-, PNG- oder HEIC-Elemente desselben Stapels werden normal fertig.',
      },
      {
        question: 'Werden iPhone-HEIC-Stapel auf einem entfernten Cloud-Server konvertiert?',
        answer:
          'Nein. Sogar die Apple-HEIC- und HEIF-Decodierung läuft lokal in Ihrem Browser-Tab per clientseitigem WebAssembly, bevor HTML5 Canvas Ihr gewähltes Ausgabeformat codiert.',
      },
      {
        question: 'Wie groß dürfen einzelne Dateien im Stapel-Bildkonverter sein?',
        answer:
          'Jedes einzelne Bild in Ihrer Stapelwarteschlange darf bis zu 25 MB groß sein. Dieser Spielraum deckt problemlos hochmegapixelige Kameraaufnahmen, mehrschichtige PNG-Exporte und unkomprimierte BMP-Archive ab.',
      },
      {
        question: 'Was passiert, wenn animierte GIFs in einem Stapelkonvertierungsordner enthalten sind?',
        answer:
          'HTML5 Canvas rastert den Eröffnungsrahmen jedes hochgeladenen .gif zu einer scharfen statischen WebP-, JPG- oder PNG-Datei bei voller Breite und Höhe. Nutzen Sie unseren GIF-Kompressor, wenn Sie die Animation in Schleife intakt lassen möchten.',
      },
      {
        question: 'Ändert die Stapelformatkonvertierung die ursprüngliche Bildbreite und -höhe?',
        answer:
          'Nein, jede Ausgabe behält 100 % ihrer ursprünglichen Pixelbreite und -höhe unberührt. Nutzen Sie stattdessen den Stapel-Bildverkleinerer, wenn Sie gleichzeitig die Größe ändern oder Bildabmessungen begrenzen möchten.',
      },
      {
        question: 'Warum kann die Konvertierung komprimierter JPEGs zu PNG die Stapelsumme größer erscheinen lassen?',
        answer:
          'Verlustfreies PNG speichert weit mehr Daten pro Fotopixel als verlustbehaftetes JPEG. Sofern ein Workflow nicht strikt .png verlangt, spart die Konvertierung gemischter Web-Stapel zu WebP mit 85 % meist erheblich Platz bei gleichzeitig scharfer Qualität.',
      },
      {
        question: 'Bleiben eingebettete EXIF-Kamera-Tags nach der Konvertierung eines gemischten Ordners erhalten?',
        answer:
          'Nein. Beim Zeichnen der Bilder auf HTML5 Canvas werden EXIF-Metadatenblöcke, Kamera-Seriennummern und GPS-Tags jeder konvertierten Datei sauber entfernt.',
      },
      {
        question: 'Kann ich Original- und konvertierte Pixel auf einzelnen Karten vor dem ZIP-Export vergleichen?',
        answer:
          'Ja. Klicken Sie auf „Vergleichen“ auf einer fertigen Dateikarte, um feine Kanten und Farben im geteilten Vergleichsfenster nebeneinander zu prüfen.',
      },
      {
        question: 'Was passiert, wenn ich nach der Konvertierung meines ersten Stapels weitere Dateien hinzufüge?',
        answer:
          'Neu abgelegte Dateien werden automatisch mit dem aktuell gewählten Zielformat, der Qualität, dem Suffix und der Mattfüllung konvertiert. Danach fügen sie sich sauber in Ihre aktive Warteschlange und die gemeinsame ZIP-Zusammenfassung ein.',
      },
      {
        question: 'Werden externe Webfonts oder verlinkte entfernte Bilder in SVG-Dateien während der Stapelkonvertierung einbezogen?',
        answer:
          'Aus Browser-Sicherheitsgründen isoliert HTML5 Canvas einzelne SVGs und blockiert das Abrufen entfernter URLs oder externer Webfonts. In sich geschlossene SVGs mit Pfaden, Verläufen und eingebettetem CSS werden sauber konvertiert.',
      },
      {
        question: 'Kann ich ein einzelnes fehlerhaftes oder unerwünschtes Bild aus der konvertierten Liste entfernen?',
        answer:
          'Ja. Klicken Sie auf die Papierkorb-Schaltfläche einer Karte, um sie aus der Liste auszuschließen und die Zusammenfassung sowie den ZIP-Download aus den übrigen Dateien neu aufzubauen.',
      },
      {
        question: 'Wann sollte ich diesen Stapelkonverter statt Einzelpaar-Konvertern wie HEIC zu JPG wählen?',
        answer:
          'Einzelpaar-Tools sind mit strengen Dateifiltern und Standards für einen bestimmten Migrationspfad vorkonfiguriert. Öffnen Sie diesen Stapel-Bildkonverter, wenn ein Ordner mehrere verschiedene Erweiterungen enthält, die alle auf einmal zu WebP, JPG oder PNG werden müssen.',
      },
    ],
    relatedSlugs: [
      '/image-converter',
      '/bulk-image-compressor',
      '/bulk-image-resizer',
      '/web-image-optimizer',
    ],
  },
  {
    slug: '/web-image-optimizer',
    name: 'Web-Bildoptimierer',
    shortDescription: 'Optimieren Sie Banner-, Produkt- und Kartenbilder für Core-Web-Vitals-Geschwindigkeit.',
    category: 'compress',
    seoTitle: 'Web-Bilder optimieren – kostenlos für Core Web Vitals',
    seoDescription:
      'Verkleinern Sie schwere Seiten-Assets direkt in Ihrem Browser: Nutzen Sie WebP-Voreinstellungen, entfernen Sie EXIF-Tags und kopieren Sie HTML-img-Tags.',
    h1: 'Web-Bildoptimierer (bereit für Core Web Vitals)',
    subtitle:
      'Bereiten Sie schnell ladende Website-Grafiken vor, die für Core Web Vitals (LCP und CLS) entwickelt wurden – mit unserem kostenlosen Web-Bildoptimierer direkt in Ihrem Browser. Für Frontend-Entwickler, Shopify-Händler und technische SEOs: Er kombiniert bewährte WebP- und JPG-Voreinstellungen für Web-Plätze bis zu 25 MB pro Datei mit automatischer EXIF-Entfernung, kopierbaren HTML-<img>-Tags und Downloads in einer einzigen ZIP-Datei.',
    howToSteps: [
      {
        title: 'Wählen Sie eine von 5 Web-Leistungsvoreinstellungen',
        description:
          'Wählen Sie Banner / Kopfbereich (1600 px WebP 80 %), E-Commerce-Produkt (1200 px WebP 82 %), Karte / Miniatur (640 px WebP 75 %), Social OG / E-Mail (1200 px JPG 82 %) oder Retina-2×-Grafik (1920 px WebP 88 %).',
      },
      {
        title: 'Passen Sie Webformat, Maximalabmessung oder Qualität an',
        description:
          'Wechseln Sie zwischen WebP, JPG oder PNG, passen Sie die Maximalabmessung (lange Kante) von 640 px bis 1920 px an (oder „Originalabmessungen behalten“) und stellen Sie die Qualität von 20 % bis 95 % ein.',
      },
      {
        title: 'Legen Sie rohe Website-Assets in den Upload-Bereich',
        description:
          'Laden Sie JPG-, PNG-, WebP-, HEIC-, SVG-, BMP-, GIF- oder AVIF-Bilder mit jeweils bis zu 25 MB hoch – mit aktiviertem „Nur größere Bilder verkleinern“, um kleine Icons nicht aufzublähen.',
      },
      {
        title: 'Prüfen Sie Seitengewicht-Einsparungen und vergleichen Sie die Qualität',
        description:
          'Prüfen Sie die Zusammenfassung der Web-Leistung auf das insgesamt gesparte Seitengewicht, verifizieren Sie die „Web-bereit“-Abzeichen pro Karte und prüfen Sie Kanten nebeneinander über „Vergleichen“.',
      },
      {
        title: 'Kopieren Sie responsive <img>-HTML-Snippets',
        description:
          'Klicken Sie auf „<img> kopieren“ auf einer fertigen Karte, um einbettfertiges Markup mit Breite, Höhe, loading="lazy" und decoding="async" zu erhalten.',
      },
      {
        title: 'Laden Sie einzelne -web-Assets oder das ZIP-Paket herunter',
        description:
          'Speichern Sie einzelne <Name>-web-Dateien oder klicken Sie auf „Alle herunterladen (ZIP)“, um web_optimized_compressmypic.zip sauber herunterzuladen.',
      },
    ],
    features: [
      {
        title: 'Web-bereite Voreinstellungen',
        description:
          'Vorkonfigurierte Abmessungsgrenzen und WebP/JPG-Qualitäts-Sweet-Spots, zugeschnitten auf LCP und PageSpeed Insights.',
      },
      {
        title: 'Kopierbares <img>-HTML-Snippet',
        description:
          'Erzeugt responsive Attribute für Breite, Höhe, loading="lazy" und decoding="async", um Layoutverschiebungen (CLS) zu verhindern.',
      },
      {
        title: 'Automatische EXIF-Entfernung und Vergrößerungsschutz',
        description: 'Entfernt aufgeblähte Kamera-Metadaten und vermeidet unnötiges Vergrößern kleinerer Icons.',
      },
      {
        title: 'Interaktiver Vorher-Nachher-Prüfer',
        description: 'Verifizieren Sie die visuelle Klarheit nebeneinander, bevor Sie Assets in der Produktion einsetzen.',
      },
    ],
    faqs: [
      {
        question: 'Wie ordnen sich die fünf Web-Leistungsvoreinstellungen echten Website-Plätzen zu?',
        answer:
          'Banner / Kopfbereich begrenzt auf 1600 px WebP (80 %), E-Commerce-Produkt auf 1200 px WebP (82 %), Karte / Miniatur auf 640 px WebP (75 %), Social OG / E-Mail erzeugt 1200 px JPG (82 %) für Scraper-Kompatibilität, und Retina-2×-Grafik erhält bis zu 1920 px WebP (88 %). Ein Klick auf eine Voreinstellung optimiert geladene Dateien zudem automatisch neu.',
      },
      {
        question: 'Wie hilft die Schaltfläche „<img> kopieren“ bei der Verbesserung der Core-Web-Vitals-Werte?',
        answer:
          'Beim Klick auf „<img> kopieren“ wird ein semantischer HTML-Tag mit exakten Ausgabeattributen für Breite und Höhe sowie loading="lazy" und decoding="async" kopiert. Explizite Abmessungen lassen Browser beim Seitenlayout exakten Platz reservieren, um Cumulative Layout Shift (CLS) zu beseitigen.',
      },
      {
        question: 'Sollte ich loading="lazy" bei meinem Hero-Bild oberhalb des Falzes behalten, nachdem ich den HTML-Tag kopiert habe?',
        answer:
          'Für Karten und Bilder unterhalb des Falzes ist loading="lazy" ideal. Für Ihr einziges oberes Banner-/Kopfbereich-LCP-Bild, das beim Laden sofort sichtbar ist, entfernen Sie loading="lazy" (oder setzen Sie fetchpriority="high") in Ihrem Code, damit der Browser es sofort abruft.',
      },
      {
        question: 'Warum wechselt Social OG / E-Mail das Webformat von WebP zu JPG?',
        answer:
          'Einige Social-Link-Scraper, ältere Slack-/Outlook-Versionen und Newsletter-Plattformen lehnen WebP-OpenGraph-Vorschauen weiterhin ab oder zeigen sie unzuverlässig an. Die Wahl von 1200 px JPG mit 82 % bietet schnelles Laden zusammen mit soliden Vorschaukarten überall.',
      },
      {
        question: 'Warum schützt „Nur größere Bilder verkleinern“ UI-Icons und kleine Miniaturen?',
        answer:
          'Wenn diese Option aktiviert ist und Sie einen 400×400-px-Autorenavatar hochladen, während E-Commerce-Produkt (max. 1200 px) ausgewählt ist, bleibt der Avatar bei 400×400 px, statt unscharf auf 1200 px hochgezogen zu werden. Wenn Sie die Option deaktivieren, werden kleinere Dateien bei strikter Notwendigkeit auf die gewählte lange Kante vergrößert.',
      },
      {
        question: 'Wie reduziert die Entfernung von EXIF- und GPS-Metadaten zusätzliches Webseitengewicht?',
        answer:
          'Kamera-Exporte betten häufig 30 KB bis 150 KB an Miniaturvorschauen, Lightroom-Bearbeitungsverläufen und GPS-Koordinaten in EXIF-Blöcken ein. Die erneute Codierung auf HTML5 Canvas entfernt diesen Nicht-Pixel-Overhead sauber vor der Veröffentlichung.',
      },
      {
        question: 'Warum enden heruntergeladene Dateien automatisch mit -web im Dateinamen?',
        answer:
          'Jede Ausgabe hängt -web vor die Erweiterung an und erzeugt saubere Dateinamen wie sneaker-web.webp. So können Entwickler Produktions-Assets in öffentliche Ordner ablegen, ohne hochauflösende Originale zu überschreiben.',
      },
      {
        question: 'Wie wird das alt-Attribut in „<img> kopieren“ erzeugt?',
        answer:
          'Das Snippet entfernt automatisch die Dateierweiterung und wandelt Bindestriche und Unterstriche Ihres ursprünglichen Dateinamens in lesbare Leerzeichen innerhalb von alt="..." um. Verfeinern Sie es beim Einfügen in Produktions-HTML unbedingt zu einer beschreibenden menschlichen Formulierung.',
      },
      {
        question: 'Warum ist E-Commerce-Produkt (max. 1200 px · WebP 82 %) die Standardeinstellung des Web-Bildoptimierers?',
        answer:
          '1200 px Breite mit 82 % WebP liefert scharfe Produkt-Zoom-Qualität sowohl auf Retina-Smartphones als auch auf Standard-Laptops und schrumpft mehrmegabytegroße DSLR-Dateien um 80 % bis 95 %. So werden sowohl zu weiche 640-px-Zuschnitte als auch aufgeblähte 4000-px-Originale vermieden.',
      },
      {
        question: 'Warum kann ein bereits komprimiertes kleines PNG rot mit einer Wachstumswarnung erscheinen, wenn das Webformat PNG ist?',
        answer:
          'Die erneute Codierung eines winzigen palettenindizierten PNG über vollfarbiges HTML5 Canvas ohne Abmessungsänderung kann ein etwas schwereres verlustfreies PNG erzeugen. Wechseln Sie das Webformat zu WebP, um Transparenz bei einem Bruchteil des Byte-Gewichts zu behalten.',
      },
      {
        question: 'Kann ich 30 rohe Blog-Bilder mit einem Klick für Lighthouse-Geschwindigkeit im Stapel optimieren?',
        answer:
          'Ja. Legen Sie bis zu 25 MB pro Datei über Ihr gesamtes Blog-Medienset ab, prüfen Sie die Zusammenfassung der Web-Leistung mit dem insgesamt gesparten Seitengewicht und holen Sie sich web_optimized_compressmypic.zip, sobald 2 oder mehr Dateien fertig sind.',
      },
      {
        question: 'Warum ist der Qualitätsregler auf 20 % bis 95 % statt 100 % begrenzt?',
        answer:
          'Das Speichern von WebP oder JPG mit 100 % Qualität lässt das Byte-Gewicht exponentiell explodieren – bei praktisch keinem sichtbaren Unterschied auf Web-Displays – und schadet dem Largest Contentful Paint (LCP). Die Begrenzung auf 95 % hält Retina-2×-Grafiken gestochen scharf, ohne versehentliche 10-MB-Nutzlasten.',
      },
      {
        question: 'Behält die WebP-Ausgabe transparente Hintergründe hochgeladener PNGs und SVGs?',
        answer:
          'Ja. Wenn das Webformat auf WEBP oder PNG steht, bleibt die volle Alphatransparenz vollständig intakt, während die Auswahl von JPG transparente Bereiche auf sauberes Weiß (#ffffff) zusammenführt.',
      },
      {
        question: 'Werden Staging-Website-Screenshots oder unveröffentlichte Produktstarts auf externe Server hochgeladen?',
        answer:
          'Nein. Voreinstellungs-Größenänderung, WebP-Codierung, EXIF-Entfernung und HTML-Tag-Erzeugung laufen strikt in Ihrem Browser-Tab – Marketinggrafiken unter Embargo bleiben privat.',
      },
      {
        question: 'Kann ich nach dem Klick auf eine Web-Leistungsvoreinstellung eine eigene Mischung aus Einstellungen anpassen?',
        answer:
          'Ja. Wenn Sie Webformat, Maximalabmessung oder Qualität manuell ändern, wechselt die aktive Voreinstellungsanzeige sauber zu „benutzerdefiniert“, sodass Sie mit Ihrer exakten maßgeschneiderten Rezeptur auf „Für Web optimieren (N)“ klicken können.',
      },
      {
        question: 'Was passiert, wenn ich ein Apple-iPhone-HEIC-Foto direkt für meinen Blog hochlade?',
        answer:
          'Clientseitiges WebAssembly decodiert HEIC- und HEIF-Fotos bis zu 25 MB nativ in Ihrem Browser-Tab. Ihr Browser ändert sie dann auf Ihre gewählte Maximalabmessung und codiert leichte WebP- oder JPG-Assets, die sofort veröffentlicht werden können.',
      },
      {
        question: 'Wie vergleicht sich die Voreinstellung Karte / Miniatur mit Retina-2×-Grafik?',
        answer:
          'Karte / Miniatur begrenzt lange Kanten auf 640 px mit 75 % WebP, um mehrkartige Archiv-Raster ultra-leicht zu halten. Retina-2×-Grafik dagegen erlaubt bis zu 1920 px mit 88 % WebP, damit hochauflösende Showcase-Screenshots gestochen scharf bleiben.',
      },
      {
        question: 'Komprimiert „Originalabmessungen behalten“ weiterhin und entfernt EXIF-Metadaten?',
        answer:
          'Ja. Bei Auswahl von „Originalabmessungen behalten“ bleiben Pixelbreite und -höhe unberührt, während die Datei weiterhin in Ihr gewähltes Webformat konvertiert, Ihr Qualitätsregler angewendet und versteckte EXIF-Tags entfernt werden.',
      },
      {
        question: 'Kann ich scharfen UI-Text in Screenshots vor der Veröffentlichung in meiner Dokumentation visuell prüfen?',
        answer:
          'Ja. Ein Klick auf „Vergleichen“ auf einer Karte öffnet den Nebeneinander-Vergleich, sodass Sie die Textklarheit vor der Veröffentlichung prüfen können.',
      },
      {
        question: 'Wann sollte ich diesen Web-Bildoptimierer statt des Stapel-Bildkompressors verwenden?',
        answer:
          'Nutzen Sie den Stapel-Bildkompressor, wenn Sie Originalabmessungen über gemischte Archive hinweg behalten möchten. Wählen Sie diesen Web-Bildoptimierer, wenn Sie Produktions-Webseiten erstellen, die von responsiven Abmessungsgrenzen, WebP-Voreinstellungen, EXIF-Entfernung und kopierbaren <img>-HTML-Tags profitieren.',
      },
    ],
    relatedSlugs: [
      '/bulk-image-compressor',
      '/compress-image-to-100kb',
      '/image-resizer',
      '/image-converter',
    ],
  },
  {
    slug: '/gif-compressor',
    name: 'GIF-Kompressor',
    shortDescription: 'Komprimieren Sie animierte GIFs, indem Sie Palettenfarben, Skalierung und Bilder reduzieren.',
    category: 'compress',
    seoTitle: 'GIF-Kompressor kostenlos online – GIFs verkleinern',
    seoDescription:
      'Verkleinern Sie Animationen in Schleife direkt in Ihrem Browser: Senken Sie Palettenfarben, skalieren Sie Abmessungen oder entfernen Sie überflüssige Bilder.',
    h1: 'Kostenloser Online-Kompressor für animierte GIFs',
    subtitle:
      'Verkleinern Sie schwere GIF87a- und GIF89a-Animationen in Schleife sauber direkt in Ihrem Browser mit unserem kostenlosen Kompressor für animierte GIFs – ohne sie in Standbilder zu verwandeln. Für Slack, Discord, E-Mail-Marketer und Dokumentationsautoren mit Dateien bis zu 30 MB: Er kombiniert drei echte Komprimierungshebel – Palettenfarben-Limit, Ausgabeskalierung und Bildraten-Optimierung – mit Live-Wiedergabe animierter Vorschauen nebeneinander.',
    howToSteps: [
      {
        title: 'Legen Sie ein animiertes oder statisches GIF bis zu 30 MB ab',
        description:
          'Laden Sie eine beliebige .gif-Datei (bis zu 30 MB) in den Upload-Bereich, um ihre Bilder, Abmessungen, Entsorgungsmethoden und Zeitverzögerungen lokal zu decodieren.',
      },
      {
        title: 'Wählen Sie eine Schnellvoreinstellung oder stellen Sie Werte manuell ein',
        description:
          'Klicken Sie auf Leicht (192 Farben, 100 %), Ausgewogen (96 Farben, 85 %) oder Maximale Verkleinerung (64 Farben, 75 %, jedes 2. Bild entfernen), oder passen Sie jeden Hebel manuell an.',
      },
      {
        title: 'Senken Sie das Palettenfarben-Limit (16–256 Farben)',
        description:
          'Ziehen Sie den Regler für das Palettenfarben-Limit von 256 auf 32 oder 16 Farben (oder klicken Sie auf die Schnellschaltflächen 256, 128, 64, 32), um LZW-Farbtabellen zu verkleinern.',
      },
      {
        title: 'Passen Sie Ausgabeskalierung und Bildraten-Optimierung an',
        description:
          'Wählen Sie eine Voreinstellung für die Ausgabeskalierung (100 %, 85 %, 75 %, 50 % oder 25 %) und entfernen Sie optional jedes 2. Bild oder 2 von 3 Bildern, wobei die echte Wiedergabegeschwindigkeit automatisch erhalten bleibt.',
      },
      {
        title: 'Führen Sie „GIF komprimieren“ aus und vergleichen Sie Live-Animationen',
        description:
          'Sehen Sie sich die Live-Vorschauen von Original und Komprimiert nebeneinander an und prüfen Sie exakte Bytes, Bildanzahl und prozentuale Einsparung.',
      },
      {
        title: 'Laden Sie das komprimierte GIF herunter',
        description:
          'Klicken Sie auf „Komprimiertes GIF herunterladen“, um <Dateiname>_compressed.gif lokal zu speichern – ohne Server-Roundtrips oder Wasserzeichen.',
      },
    ],
    features: [
      {
        title: 'Echte clientseitige GIF-Neucodierung',
        description:
          'Decodiert GIF-Bilder, Entsorgungsmethoden und Schleifenzahlen lokal und codiert dann mit lazy-geladener Farbquantisierung neu – ohne Server-Uploads.',
      },
      {
        title: '3 Komprimierungshebel',
        description:
          'Verkleinern Sie die Größe durch Palettenfarben-Reduzierung (256 → 32 Farben), Abmessungsskalierung (100 % → 25 %) und intelligentes Überspringen von Bildern.',
      },
      {
        title: 'Zeit erhaltendes Überspringen von Bildern',
        description:
          'Beim Entfernen jedes 2. oder 3. Bildes werden die Verzögerungen der behaltenen Bilder automatisch kombiniert, sodass die Wiedergabegeschwindigkeit natürlich bleibt.',
      },
      {
        title: 'Ehrlicher Byte-Vergleich',
        description:
          'Zeigt exakte Dateigrößen und Bildanzahlen vor und nach der Komprimierung an – und sagt Ihnen klar, wenn eine stärkere Paletten- oder Skalierungsreduzierung nötig ist.',
      },
    ],
    faqs: [
      {
        question: 'Behält dieser GIF-Kompressor die vollständige Animation, Zeitsteuerung, Schleifenzahl und Bewegung?',
        answer:
          'Ja. Er decodiert jedes einzelne GIF-Bild, jede Verzögerung in Millisekunden pro Bild, jede Entsorgungsmethode und alle Schleifen-Metadaten lokal und codiert dann eine echte animierte GIF89a-Datei neu, statt sie zu einem Standbild zu verflachen.',
      },
      {
        question: 'Wie hält das Entfernen von Bildern die Animationsgeschwindigkeit natürlich, statt sie im Schnellvorlauf abzuspielen?',
        answer:
          'Wenn Sie „Jedes 2. Bild entfernen“ oder „1 von 3 Bildern behalten“ wählen, summiert der Kompressor die Millisekundendauern übersprungener Bilder in die verbleibenden behaltenen Bilder. Die Gesamtlaufzeit der Schleife bleibt genau, während die Bilddaten um die Hälfte bis zwei Drittel schrumpfen.',
      },
      {
        question: 'Welche genauen Einstellungen wenden Leicht, Ausgewogen und Maximale Verkleinerung an?',
        answer:
          'Leicht setzt 192 Palettenfarben bei 100 % Skalierung und behält alle Bilder, während Ausgewogen auf 96 Farben und 85 % Skalierung sinkt und alle Bilder behält. Maximale Verkleinerung kombiniert 64 Farben, 75 % Skalierung und „Jedes 2. Bild entfernen“ für aggressive Discord- oder Slack-Dateigrenzen.',
      },
      {
        question: 'Warum wurde meine erste Ausgewogen- oder 128-Farben-Komprimierung etwas größer als ein bereits winziges GIF?',
        answer:
          'Gut optimierte GIFs aus Desktop-Tools nutzen oft winzige Dirty-Rectangle-Begrenzungspatches zwischen Bildern, während die Canvas-Neucodierung saubere quantisierte Vollbilder erzeugt. Wenn der bernsteinfarbene Hinweis erscheint, senken Sie das Palettenfarben-Limit auf 64 oder 32 Farben, die Ausgabeskalierung auf 75 % oder 50 %, oder entfernen Sie jedes 2. Bild.',
      },
      {
        question: 'Welcher Hebel reduziert die Dateigröße animierter GIFs am schnellsten, ohne Bildschirmaufnahmen zu ruinieren?',
        answer:
          'Das Senken der Ausgabeskalierung von 100 % auf 75 % oder 50 % reduziert die Pixelfläche sofort um 44 % bis 75 % und hält UI-Text lesbar. Die Kombination aus 75 % Skalierung und 64–96 Palettenfarben funktioniert besonders gut für Dokumentations-Screencasts.',
      },
      {
        question: 'Warum sind die Schaltflächen zur Bildraten-Optimierung bei einem GIF mit 1 oder 2 Bildern deaktiviert?',
        answer:
          'Das Entfernen jedes zweiten oder dritten Bildes bei einer Datei mit 1 oder 2 Bildern würde keine Bewegung übrig lassen. Diese Schaltflächen zum Überspringen von Bildern sperren sich automatisch, sobald ein decodiertes GIF 2 oder weniger Bilder hat.',
      },
      {
        question: 'Wie groß ist die größte unterstützte animierte GIF-Datei im GIF-Kompressor?',
        answer:
          'Sie können GIF87a- oder GIF89a-Animationen bis zu 30 MB pro Datei hochladen. Der Fortschritt wird sauber als „GIF komprimieren (X %)…“ angezeigt, während Ihr Browser jedes behaltene Bild quantisiert und neu codiert.',
      },
      {
        question: 'Beeinflusst die Reduzierung des Palettenfarben-Limits unter 64 Farben fotografische Reaktions-GIFs anders als UI-Screencasts?',
        answer:
          'Ja. Flache Software-UI-Animationen mit begrenzten Markenfarben sehen bei 32 oder 64 Farben weiterhin scharf aus, während Live-Action-Videoclips mit Hautverläufen bei sehr niedrigen Paletten Posterisierung zeigen – daher ist für Filmclips oft ein leichtes Senken von Skalierung oder Bildrate sauberer.',
      },
      {
        question: 'Kann ich Original- und komprimierte Animationen vor dem Herunterladen nebeneinander in der Vorschau ansehen?',
        answer:
          'Ja. Direkt unter dem dunklen Byte-Zusammenfassungsbalken zeigen zwei Live-Animationsplayer Original- und komprimierte GIFs gleichzeitig mit exakten Pixelabmessungen und Dateigrößen an, sodass Sie Ruckeln oder Banding sofort erkennen.',
      },
      {
        question: 'Wie groß ist die minimale Ausgabeauflösung bei 25 % Ausgabeskalierung auf kleinen Sticker-GIFs?',
        answer:
          'Die Ausgabeabmessungen werden sicher auf ein Minimum von 16×16 Pixeln pro Seite begrenzt. So kollabieren winzige Reaktions-GIFs selbst bei der 25-%-Skalierungsoption nicht zu ungültigen Null-Pixel-Dateien.',
      },
      {
        question: 'Kann ich mehrere Komprimierungstests mit demselben hochgeladenen GIF durchführen, ohne neu zu laden?',
        answer:
          'Ja. Der decodierte Bildpuffer bleibt im Speicher zwischengespeichert, sodass Sie das Palettenfarben-Limit (16–256), die Ausgabeskalierung oder die Bildraten-Optimierung frei anpassen und in Sekunden erneut auf „GIF komprimieren“ klicken können.',
      },
      {
        question: 'Wie läuft der GIF-Kompressor in meinem Browser, ohne große Animationen auf einen Server hochzuladen?',
        answer:
          'Er decodiert Bilder direkt aus dem hochgeladenen ArrayBuffer in JavaScript und lädt bei Bedarf einen leichten LZW-GIF-Encoder und Farbquantisierer nach. Private Slack-Screencasts, Fehlerberichte und Produktdemos verlassen nie Ihr Gerät.',
      },
      {
        question: 'Warum komprimieren GIFs weniger dramatisch als MP4-Videos desselben Clips?',
        answer:
          'GIF ist ein verlustfreies LZW-Format von 1989 mit 256 Farben und ohne moderne zeitliche Inter-Frame-Bewegungskompensation. Die Kombination aus moderater Herunterskalierung (75 %–50 %), niedrigeren Paletten (64–96 Farben) und 2-fachem Überspringen von Bildern ergibt die bestmögliche Byte-Einsparung innerhalb der Standard-.gif-Spezifikation.',
      },
      {
        question: 'Behält das Komprimieren eines animierten GIF mit transparenten Pixeln die Hintergrundtransparenz?',
        answer:
          'Ja. Transparenzindizes und Entsorgungsmethoden, die aus Ihrem Quell-GIF decodiert wurden, werden während der Browser-Neucodierung über die Bilder hinweg verfolgt.',
      },
      {
        question: 'Welcher Dateiname wird beim Speichern der optimierten Animation verwendet?',
        answer:
          'Beim Klick auf „Komprimiertes GIF herunterladen“ wird ein bereinigter Dateiname mit der Endung _compressed.gif exportiert, etwa demo_walkthrough_compressed.gif. Ihre ursprüngliche Master-Animation bleibt vollständig unberührt auf der Festplatte.',
      },
      {
        question: 'Kann ich ein GIF verkleinern, um die Discord-Limits von 8 MB/10 MB oder Slack-Upload-Limits einzuhalten?',
        answer:
          'Ja. Legen Sie eine Animation bis zu 30 MB ab, testen Sie Ausgewogen oder Maximale Verkleinerung, prüfen Sie die Live-Anzeige der komprimierten Größe direkt oben auf der Zusammenfassungskarte und passen Sie die Ausgabeskalierung auf 50 % an, wenn Sie weitere Gewichtsreduzierung benötigen.',
      },
      {
        question: 'Löscht „Zurücksetzen“ den gesamten zwischengespeicherten Bildspeicher sauber?',
        answer:
          'Ja. Ein Klick auf „Zurücksetzen“ widerruft aktive Blob-URLs und leert decodierte Bildpuffer aus dem Browser-Speicher, sodass Sie ein weiteres schweres GIF reibungslos laden können.',
      },
      {
        question: 'Worin unterscheidet sich der GIF-Kompressor vom GIF-Maker?',
        answer:
          'Der GIF-Maker erstellt brandneue Animationen aus einzelnen JPG-, PNG- oder WebP-Standbildern. Dieser GIF-Kompressor dagegen nimmt eine bestehende schwere .gif-Animation und verkleinert ihre Dateigröße per Palette, Skalierung und Bildreduzierung.',
      },
      {
        question: 'Kann ich auch statische Einzelbild-.gif-Dateien hochladen?',
        answer:
          'Ja. Statische Einzelbild-GIFs werden als 1-Bild-Dateien geladen, bei denen Sie Abmessungen per Ausgabeskalierung verkleinern und das Palettenfarben-Limit sauber bis auf 16 Farben senken können.',
      },
      {
        question: 'Werden Wasserzeichen, Bildobergrenzen oder Server-Warteschlangen auf komprimierte GIFs angewendet?',
        answer:
          'Nein. Die Komprimierung läuft lokal mit voller Browser-Geschwindigkeit – ohne Wasserzeichen, ohne Anmeldung und mit unbegrenzten Wiederholungen.',
      },
    ],
    relatedSlugs: ['/gif-maker', '/bulk-image-compressor', '/image-resizer', '/'],
  },
  {
    slug: '/heic-to-jpg',
    name: 'HEIC zu JPG',
    shortDescription: 'Konvertieren Sie Apple-iPhone-HEIC/HEIF-Fotos im Browser zu universellem JPG.',
    category: 'convert',
    seoTitle: 'HEIC in JPG umwandeln – kostenlos online',
    seoDescription:
      'Verwandeln Sie Apple-Fotos kostenlos in universelle Dateien: Lokale WebAssembly-Decodierung läuft privat direkt in Ihrem Browser – mit Stapel-ZIP-Export.',
    h1: 'Kostenloser Online-HEIC-zu-JPG-Konverter',
    subtitle:
      'Verwandeln Sie Apple-iPhone- und iPad-HEIC- oder HEIF-Kamerarollenaufnahmen in universell lesbare .jpg-Dateien mit unserem kostenlosen HEIC-zu-JPG-Konverter, der lokal in Ihrem Browser läuft. Ideal für Windows-Nutzer, Bewerber und Fotolabore, die Apples High-Efficiency-Format ablehnen: Er decodiert bis zu 25 MB pro Datei per clientseitigem WebAssembly mit einstellbarer Qualität und Stapel-Downloads in einer einzigen ZIP-Datei.',
    howToSteps: [
      {
        title: 'Legen Sie Apple-HEIC- oder HEIF-Fotos ab',
        description:
          'Wählen oder ziehen Sie ein oder mehrere .heic- oder .heif-Bilder (bis zu 25 MB pro Datei) direkt von Ihrem iPhone, Mac, Cloud-Backup oder Windows-Ordner.',
      },
      {
        title: 'Warten Sie kurz auf die lokale WebAssembly-Decodierung',
        description:
          'Die Seite lädt clientseitiges WebAssembly (heic2any) direkt in Ihrem Browser-Tab, um Apples HEVC-Bildcontainer privat zu decodieren.',
      },
      {
        title: 'Passen Sie die JPG-Ausgabequalität an (20 %–100 %)',
        description:
          'Behalten Sie die nahezu verlustfreie Standardeinstellung von 90 % für Familienporträts und Drucke, oder gehen Sie näher an 75 %–85 % für leichtere E-Mail-Anhänge – klicken Sie dann auf „Alle erneut konvertieren“.',
      },
      {
        title: 'Prüfen Sie Pixelabmessungen und Größenvergleich',
        description:
          'Prüfen Sie auf jeder Karte die Byte-Anzahlen von Original-HEIC und Ausgabe-JPG und starten Sie den Vergleichsregler, um scharfe Details zu verifizieren.',
      },
      {
        title: 'Laden Sie JPG-Dateien oder „Alle herunterladen (ZIP)“ herunter',
        description:
          'Speichern Sie einzelne .jpg-Fotos direkt oder klicken Sie auf „Alle herunterladen (ZIP)“, um compressmypic_heic_to_jpg.zip mit einem Klick herunterzuladen.',
      },
    ],
    features: [
      {
        title: 'Clientseitige WebAssembly-HEIC-Decodierung',
        description: 'Nutzt heic2any in Ihrem Browser-Tab, sodass private Kamerarollenfotos nie auf externe Server hochgeladen werden.',
      },
      {
        title: 'Stapelkonvertierung + ZIP-Export',
        description: 'Konvertieren Sie ganze Ordner mit iPhone-HEIC-Aufnahmen in einer Warteschlange zu JPG und holen Sie sich alles in einer ZIP-Datei.',
      },
      {
        title: 'Eigener JPG-Qualitätsregler',
        description: 'Stellen Sie die Ausgabekomprimierung von 20 % bis 100 % fein ein – je nachdem, ob Ihnen Detail oder winzige Dateigröße wichtiger ist.',
      },
      {
        title: 'EXIF-Datenschutz durch Canvas entfernt',
        description: 'Die Canvas-Neucodierung entfernt auf natürliche Weise versteckte GPS-Koordinaten und Kamera-Serien-Metadaten.',
      },
    ],
    faqs: [
      {
        question: 'Warum lehnen Windows-PCs, ältere Software und Upload-Formulare .heic-Fotos von iPhones ab?',
        answer:
          'Apple hat den HEIC-Container (basierend auf HEVC-Videokomprimierung) ab iOS 11 eingeführt, um Speicherplatz auf iPhones und iPads zu sparen. Da vielen Windows-Installationen, Behördenportalen, CMS-Backends und Desktop-Editoren lizenzierte HEVC-Codecs fehlen, lassen sich Ihre Fotos durch die Konvertierung von HEIC zu Standard-JPG überall sofort öffnen.',
      },
      {
        question: 'Wie decodiert dieser HEIC-zu-JPG-Konverter Apple-Dateien in einem Standard-Webbrowser?',
        answer:
          'Die meisten Browser können HEIC-Pixel in Standard-Bild-Tags unter Windows oder Linux nicht nativ darstellen. Dieses Tool führt den clientseitigen heic2any-WebAssembly-Decoder direkt in Ihrem eigenen Tab aus, sodass Ihr Browser HEIC-Streams sauber in RGB-Pixel übersetzt – ohne entfernte Cloud-Server.',
      },
      {
        question: 'Werden persönliche Kamerarollenaufnahmen, ID-Selfies oder Familienurlaube während der Konvertierung irgendwo hochgeladen?',
        answer:
          'Niemals. Sowohl der WebAssembly-HEIC-Decodierungsschritt als auch der HTML5-Canvas-JPEG-Codierungsschritt erfolgen lokal im Speicher Ihres Browsers – persönliche Fotos verlassen also nie Ihren Computer oder Ihr Smartphone.',
      },
      {
        question: 'Was ist hier der Unterschied zwischen .heic- und .heif-Dateien?',
        answer:
          'HEIF ist der zugrunde liegende High-Efficiency-Image-File-Standard, während HEIC Apples Dateierweiterung für HEVC-codierte HEIF-Container ist. Sowohl .heic- als auch .heif-Erweiterungen (und passende MIME-Typen) werden akzeptiert und nahtlos zu .jpg decodiert.',
      },
      {
        question: 'Warum wird die konvertierte JPG-Datei oft größer in Megabyte als das ursprüngliche HEIC?',
        answer:
          'Apples HEVC-Codierung packt Bilddaten bei ähnlicher visueller Qualität etwa doppelt so dicht wie klassisches JPEG. Das Erweitern eines 1,8-MB-HEIC zu einem hochdetaillierten 90-%-JPG ergibt häufig eine Datei von 2,5 MB bis 3,5 MB – und das Senken der JPG-Ausgabequalität auf 80 % hilft, diese Größe bei Bedarf wieder zu trimmen.',
      },
      {
        question: 'Warum ist 90 % die Standard-JPG-Ausgabequalität für iPhone-Fotos?',
        answer:
          'Bei 90 % behält Standard-JPEG feine Hauttextur, Haardetails und Porträtmodus-Hintergrund-Bokeh ohne merkliche Komprimierungsblöcke. Sie können jederzeit zwischen 20 % und 100 % ziehen und auf „Alle erneut konvertieren“ klicken.',
      },
      {
        question: 'Behält die Konvertierung von iPhone-Live-Photos (.heic) die Videobewegung oder exportiert sie ein Stand-JPG?',
        answer:
          'Wenn Sie die .heic-Standbildkomponente eines iPhone-Live-Photos hochladen, extrahiert der Decoder dieses hochauflösende Bild und exportiert es als universelles .jpg-Foto. Bewegungs-Videospuren in gepaarten MOV-Clips werden nicht in das statische JPEG gebündelt.',
      },
      {
        question: 'Kann ich ein ganzes Urlaubsalbum mit HEIC-Dateien ablegen und eine ZIP-Datei herunterladen?',
        answer:
          'Ja. Wählen Sie Dutzende .heic- oder .heif-Dateien (bis zu 25 MB pro Datei) in einem Durchgang aus, warten Sie, während Ihr Browser jedes Foto lokal decodiert, und klicken Sie auf „Alle herunterladen (ZIP)“, um compressmypic_heic_to_jpg.zip zu speichern.',
      },
      {
        question: 'Bleiben Apple-iPhone-GPS-Koordinaten und Standort-Tags im exportierten JPG erhalten?',
        answer:
          'Nein. Die Codierung über HTML5 Canvas entfernt eingebettete EXIF-GPS-Standorte, Kamera-Seriennummern und Zeitstempel automatisch – das gibt Ihnen zusätzlichen Datenschutz, bevor Sie konvertierte JPGs online stellen.',
      },
      {
        question: 'Warum kann die Decodierung eines 12-Megapixel- oder 48-Megapixel-iPhone-ProRAW/HEIC eine Sekunde oder zwei pro Datei dauern?',
        answer:
          'Die HEVC-Dekomprimierung in WebAssembly erfordert schwerere CPU-Mathematik als Standard-JPEG-Decodierung – besonders bei 24-MP- oder 48-MP-iPhone-Pro-Fotos. Da Stapel lokal verarbeitet werden, hängt die Konvertierungsgeschwindigkeit reibungslos von Ihrem Geräteprozessor ab, statt von der Upload-Bandbreite.',
      },
      {
        question: 'Was passiert mit vertikaler vs. horizontaler iPhone-Kameraausrichtung während der HEIC-zu-JPG-Konvertierung?',
        answer:
          'Moderne Browser lesen eingebettete Ausrichtungs-Flags beim Decodieren des Bildes auf Canvas. So werden vertikale Selfies und Landschaftsaufnahmen aufrecht exportiert – ohne seitliche Drehung.',
      },
      {
        question: 'Warum ist eine Datei namens image.heic mit einer Fehlermeldung über ungültiges HEIC fehlgeschlagen?',
        answer:
          'Gelegentlich speichern Messaging-Apps von Drittanbietern beschädigte Container oder falsch benannte Dateien mit der Erweiterung .heic, oder sie überschreiten das Limit von 25 MB. Ein Original, das per AirDrop, iCloud Photos oder Apple Files exportiert wurde, löst beschädigte Wrapper-Köpfe.',
      },
      {
        question: 'Wie groß ist die maximale Größe pro akzeptiertem HEIC- oder HEIF-Foto?',
        answer:
          'Einzelne Dateien bis zu 25 MB werden in der Warteschlange unterstützt. Diese Grenze deckt Standard-12-MP-, 24-MP- und 48-MP-iPhone-HEIC-Kameraaufnahmen problemlos ab.',
      },
      {
        question: 'Kann ich das decodierte JPG vor dem Speichern visuell mit der Original-HEIC-Vorschau vergleichen?',
        answer:
          'Ja. Klicken Sie auf eine Ergebnisminiatur oder die Schaltfläche „Vergleichen“, um die Schärfe im interaktiven Vergleichsfenster nebeneinander zu verifizieren.',
      },
      {
        question: 'Sehen iPhone-Display-P3-Farben mit weitem Farbraum nach der Konvertierung zu JPG korrekt aus?',
        answer:
          'Während des Browser-Canvas-Renderings werden Farben mit weitem Farbraum sauber in den Standard-sRGB-JPEG-Raum abgebildet. Dadurch werden Farben auf Windows-Monitoren, in Webbrowsern und an Fotodruck-Terminals konsistent dargestellt – ohne verwaschene Verschiebungen.',
      },
      {
        question: 'Wie kann ich verhindern, dass zukünftige iPhone-Fotos als HEIC statt als JPG gespeichert werden?',
        answer:
          'Öffnen Sie auf Ihrem iPhone die Einstellungen, gehen Sie zu Kamera, tippen Sie auf Formate und wählen Sie „Maximale Kompatibilität“ für neue Aufnahmen. Wenn Sie jedoch „Hohe Effizienz“ behalten, sparen Sie etwa die Hälfte Ihres Telefonspeichers – und Sie können bestimmte HEIC-Stapel jederzeit hier zu JPG konvertieren.',
      },
      {
        question: 'Verliere ich Pixelauflösung, wenn ich ein 4032×3024-HEIC zu JPG mache?',
        answer:
          'Nein. Ausgabe-JPGs behalten 100 % der decodierten Pixelbreite und -höhe unberührt, sofern Sie sie nicht separat danach verkleinern.',
      },
      {
        question: 'Kann ich HEIC-Dateien auch in Android-, Chromebook-, Linux- oder Windows-Browsern einfügen oder konvertieren?',
        answer:
          'Ja. Da heic2any-WebAssembly in Chrome, Firefox, Edge und Safari unabhängig vom Betriebssystem läuft, können Sie iPhone-.heic-Anhänge auch auf Linux- oder Windows-Rechnern sauber öffnen und konvertieren – ohne Erweiterungen zu installieren.',
      },
      {
        question: 'Was soll ich tun, wenn ich das neu konvertierte JPG für ein Job-Portal unter 100 KB verkleinern muss?',
        answer:
          'Senken Sie entweder die JPG-Ausgabequalität direkt hier und klicken Sie auf „Alle erneut konvertieren“, um die Dateigröße schnell zu trimmen. Wenn Sie weiterhin eine strikte Byte-Zielsteuerung benötigen, springen Sie direkt über unsere verlinkten Tools zu „Bild auf 100 KB komprimieren“.',
      },
      {
        question: 'Akzeptiert dieser Konverter auch JPG- oder PNG-Dateien oder strikt nur HEIC und HEIF?',
        answer:
          'Diese Seite filtert bewusst ausschließlich .heic- und .heif-Eingaben, damit Apple-Fotostapel sauber bleiben. Nutzen Sie unseren Stapel-Bildkonverter, wenn Ihr Ordner HEIC zusammen mit PNG-, WebP- und BMP-Dateien mischt.',
      },
    ],
    relatedSlugs: ['/image-converter', '/bulk-image-converter', '/jpg-to-webp', '/remove-image-metadata'],
  },
  {
    slug: '/jpg-to-png',
    name: 'JPG zu PNG',
    shortDescription: 'Konvertieren Sie JPG/JPEG-Fotos im Browser zu verlustfreien PNG-Bildern.',
    category: 'convert',
    seoTitle: 'JPG in PNG umwandeln – kostenlos online',
    seoDescription:
      'Wandeln Sie JPEG-Fotos in verlustfreie Dateien um: Konvertieren Sie einzelne oder mehrere Bilder in Ihrem Browser – mit Pixelfidelität und ZIP-Export.',
    h1: 'Kostenloser Online-JPG-zu-PNG-Konverter',
    subtitle:
      'Konvertieren Sie Standard-.jpg- und .jpeg-Fotografien sauber in verlustfreie .png-Dateien mit unserem kostenlosen JPG-zu-PNG-Konverter, der direkt in Ihrem Browser läuft. Für Druckereien, Grafikeditoren und Webformulare, die strikt PNG-Uploads verlangen: Er friert vorhandene Pixel ein, ohne zusätzlichen verlustbehafteten Komprimierungsschaden – bei Stapeln bis zu 25 MB pro Bild mit sofortigem ZIP-Export.',
    howToSteps: [
      {
        title: 'Legen Sie JPG- oder JPEG-Fotos bis zu 25 MB pro Datei ab',
        description:
          'Laden Sie ein oder mehrere .jpg- oder .jpeg-Bilder von Ihrem Computer, Smartphone oder Ihrer Kamerakarte in den Upload-Bereich.',
      },
      {
        title: 'Bestätigen Sie den Modus „Verlustfreie PNG-Codierung“',
        description:
          'Beachten Sie, dass der Qualitätsregler automatisch ausgeblendet wird und das Panel „Verlustfreie PNG-Codierung“ erscheint, da PNG nie verlustbehaftete Komprimierungsartefakte einführt.',
      },
      {
        title: 'Prüfen Sie Original-JPG- vs. konvertierte PNG-Größen',
        description:
          'Prüfen Sie Pixelabmessungen und Byte-Anzahlen pro Dateikarte und öffnen Sie „Vergleichen“, um die Pixelfidelität nebeneinander zu verifizieren.',
      },
      {
        title: 'Fügen Sie jederzeit weitere JPEG-Dateien hinzu oder entfernen Sie Ausreißer',
        description:
          'Legen Sie weitere .jpg-Dateien in die aktive Sitzung ab oder entfernen Sie einzelne Karten mit der Papierkorb-Schaltfläche, bevor Sie bündeln.',
      },
      {
        title: 'Laden Sie einzelne PNGs oder „Alle herunterladen (ZIP)“ herunter',
        description:
          'Klicken Sie auf „PNG herunterladen“ auf einer Ergebniskarte oder auf „Alle herunterladen (ZIP)“, um compressmypic_jpg_to_png.zip lokal zu speichern.',
      },
    ],
    features: [
      {
        title: 'Echte verlustfreie PNG-Ausgabe',
        description: 'Verhindert zusätzlichen verlustbehafteten Generationsschaden bei der Vorbereitung von Bildern für weitere Bearbeitung oder Archivierung.',
      },
      {
        title: 'Stapelwarteschlange und ZIP-Verpackung',
        description: 'Konvertieren Sie mehrere JPEGs gleichzeitig zu PNG und exportieren Sie sie in einer organisierten ZIP-Datei.',
      },
      {
        title: 'Keine Wasserzeichen oder Anmeldungen',
        description: 'Unbegrenzte Konvertierungen direkt in Chrome, Firefox, Safari oder Edge – ohne Kontoerstellung.',
      },
      {
        title: '100 % lokale Verarbeitung',
        description: 'Bilder bleiben in Ihrem Browser-Tab – nichts berührt einen entfernten Server.',
      },
    ],
    faqs: [
      {
        question: 'Warum verschwindet der Qualitätsregler bei diesem JPG-zu-PNG-Konverter?',
        answer:
          'Im Gegensatz zu JPEG oder WebP nutzt PNG verlustfreie DEFLATE-Komprimierung, bei der jedes Pixel identisch codiert wird – ohne Qualitätsprozent-Abwägung. Das Ersetzen des Reglers durch die Karte „Verlustfreie PNG-Codierung“ verhindert irreführendes Raten.',
      },
      {
        question: 'Wenn die Konvertierung von JPG zu PNG verlustfrei ist, warum kann sie bereits vorhandene unscharfe JPEG-Blöcke nicht löschen?',
        answer:
          'Verlustfreies PNG friert die Pixel ein, die aktuell in Ihrem JPEG gespeichert sind, sodass bei späterem Bearbeiten, Zuschneiden oder erneutem Speichern kein zusätzlicher Generationsverlust entsteht. Es kann jedoch keine feinen Texturen magisch rekonstruieren, die bereits verworfen wurden, als das ursprüngliche Kamerafoto als JPG gespeichert wurde.',
      },
      {
        question: 'Warum expandiert ein 300-KB-JPG nach der Konvertierung oft zu einem 1,5-MB–3-MB-PNG?',
        answer:
          'JPEG wirft subtile Farbvariationen über 8×8-Pixel-Blöcke weg, um klein zu bleiben, während PNG exakte verlustfreie RGB-Pixeldaten über das gesamte Bild aufzeichnet. Fotografien mit kontinuierlichen Tönen benötigen in verlustfreiem PNG naturgemäß weit mehr Bytes als in komprimiertem JPG.',
      },
      {
        question: 'Wann ist die Konvertierung von JPG zu PNG trotz der größeren Dateigröße wirklich nützlich?',
        answer:
          'Die Konvertierung zu PNG ist essenziell, wenn Druckanbieter, Software-UI-Importer, Ausweisportale oder Pixel-Art-Editoren strikt .png-Dateien verlangen. Sie schützt Bilder auch, wenn Sie planen, scharfen Text zu überlagern und wiederholt zu bearbeiten, ohne JPEG-Neukomprimierungsartefakte zu verstärken.',
      },
      {
        question: 'Macht die Konvertierung eines JPG mit solidem weißem Hintergrund zu PNG diesen Hintergrund transparent?',
        answer:
          'Nein. Standard-JPEG-Dateien speichern keine Alphatransparenz-Informationen, sodass die Konvertierung von JPG zu PNG ein vollständig opakes .png-Bild erzeugt, das den weißen Hintergrund erhält. Kombinieren Sie es danach mit unserem Hintergrundentferner, wenn Sie einen Alpha-Ausschnitt benötigen.',
      },
      {
        question: 'Warum sollten Sie eine .jpg-Dateierweiterung nicht einfach manuell in .png umbenennen?',
        answer:
          'Das Ändern nur des Dateinamen-Suffixes lässt rohe JPEG-Binärbytes im Inneren zurück, sodass strikte Upload-Validatoren, HTML-Canvas-Loader und Drucksoftware die Datei ablehnen oder nicht öffnen können. Echte Canvas-Decodierung und PNG-Neucodierung schreiben gültige PNG-Chunks und -Köpfe.',
      },
      {
        question: 'Behalten konvertierte PNG-Dateien die exakte Pixelbreite und -höhe meiner Original-JPEGs?',
        answer:
          'Ja. Jedes exportierte .png behält 100 % der natürlichen Breite und Höhe des Quell-JPG – ohne Zuschneiden oder automatische Größenänderung.',
      },
      {
        question: 'Kann ich 20 JPG-Scans im Stapel zu PNG-Dateien konvertieren und eine ZIP-Datei speichern?',
        answer:
          'Ja. Legen Sie mehrere .jpg- oder .jpeg-Dateien (bis zu 25 MB pro Datei) zusammen ab, warten Sie kurz, während Ihr Browser jedes PNG lokal codiert, und klicken Sie auf „Alle herunterladen (ZIP)“, um compressmypic_jpg_to_png.zip herunterzuladen.',
      },
      {
        question: 'Entfernt die Konvertierung von JPG zu PNG versteckte Kamera-EXIF-Tags und GPS-Metadaten?',
        answer:
          'Ja. Das Decodieren eines JPEG auf HTML5 Canvas und das Schreiben eines frischen PNG verwirft JPEG-EXIF-Köpfe, Kameramodelle und GPS-Koordinaten automatisch.',
      },
      {
        question: 'Werden gescannte Ausweise, Quittungen oder persönliche Porträts während der PNG-Konvertierung an externe Server gesendet?',
        answer:
          'Niemals. JPEG-Decodierung, Canvas-Rendering, PNG-DEFLATE-Codierung und ZIP-Archivierung laufen strikt im lokalen Browser-Speicher auf Ihrem Computer oder Smartphone.',
      },
      {
        question: 'Was passiert, wenn meine Eingabe ein JPEG ist, das mit CMYK-Druckfarben statt RGB gespeichert wurde?',
        answer:
          'Moderne Browser konvertieren JPEG-Pixelströme beim Zeichnen auf HTML5 Canvas in den Standard-8-Bit-sRGB-RGBA-Farbraum. Das garantiert, dass Ihr Ausgabe-.png in Webbrowsern, Folien und auf mobilen Bildschirmen korrekt dargestellt wird.',
      },
      {
        question: 'Wie zeigt die Spalte „Änderung“ das Dateigrößenwachstum sauber an?',
        answer:
          'Die Umwandlung komprimierter JPGs in verlustfreie PNGs erhöht die Byte-Größe fast immer. Deshalb meldet die Zelle „Änderung“ jeder Karte ehrlich die exakte positive +X-%-Differenz zusammen mit den Byte-Größen von Original-JPG und endgültigem PNG.',
      },
      {
        question: 'Kann ich mit dem Vergleichsfenster bestätigen, dass es keine Farbverschiebung zwischen JPG und PNG gibt?',
        answer:
          'Ja. Klicken Sie auf eine Kartenminiatur oder die Schaltfläche „Vergleichen“, um Pixel vor dem Herunterladen im interaktiven geteilten Vorhang nebeneinander zu prüfen.',
      },
      {
        question: 'Warum hilft das konvertierte PNG, bevor ich mehrere Runden mit Anmerkungen oder Textüberlagerungen durchführe?',
        answer:
          'Das wiederholte Speichern eines JPEG verschlechtert Kanten bei jedem erneuten Durchlauf der verlustbehafteten Quantisierung leicht. Die einmalige Konvertierung eines Quell-Assets zu PNG erzeugt ein verlustfreies Zwischen-Master, das wiederholte Grafikbearbeitungen sauber aushält.',
      },
      {
        question: 'Werden sowohl .jpg- als auch .jpeg-Erweiterungen nahtlos akzeptiert?',
        answer:
          'Ja. Der Upload-Bereich akzeptiert sowohl .jpg- als auch .jpeg-Erweiterungen und gibt standardisierte .png-Dateien aus, wobei Ihr bereinigter ursprünglicher Basis-Dateiname erhalten bleibt.',
      },
      {
        question: 'Kann ich auf dieser bestimmten Seite auch PNG-, WebP- oder HEIC-Bilder konvertieren?',
        answer:
          'Diese Seite akzeptiert bewusst nur JPG/JPEG-Eingaben für eine saubere einstufige Konvertierung zu PNG. Nutzen Sie unseren Bildkonverter oder Stapel-Bildkonverter, wenn Ihr Quellordner andere Dateiformate enthält.',
      },
      {
        question: 'Wie groß ist die maximal zulässige Größe pro hochgeladenem JPEG?',
        answer:
          'Jede einzelne .jpg- oder .jpeg-Datei darf bis zu 25 MB groß sein. Diese großzügige Grenze deckt hochauflösende Kameraexporte, DSLR-Fotografien und breite digitale Kunstwerke problemlos ab.',
      },
      {
        question: 'Warum kann ein Porträtfoto, das als .jpg gespeichert wurde, aufrecht exportiert werden, selbst wenn es seitlich aufgenommen wurde?',
        answer:
          'Moderne Browser lesen beim Malen des decodierten JPEG auf HTML5 Canvas automatisch eingebettete EXIF-Ausrichtungs-Tags. Das bäckt die aufrechte Ausrichtung dauerhaft in die neuen PNG-Pixel ein, sodass sie in jeder App richtig herum angezeigt wird.',
      },
      {
        question: 'Lassen sich exportierte PNGs in Photoshop, Illustrator, Figma, Canva und PowerPoint öffnen?',
        answer:
          'Ja. Standard-8-Bit-RGBA-.png-Dateien, die von HTML5 Canvas erstellt werden, sind universell kompatibel mit jeder Desktop-Design-App, Office-Suite, jedem Browser und mobilen Betriebssystem.',
      },
      {
        question: 'Wie schnell ist die browserbasierte JPG-zu-PNG-Konvertierung im Vergleich zu Cloud-Konvertern?',
        answer:
          'Da es keine Upload- oder Download-Wartezeit für mehrmegabytegroße Fotos gibt, wird die lokale Canvas-Konvertierung in Millisekunden pro Datei direkt auf Ihrer eigenen CPU abgeschlossen. Stapel sind schnell fertig, ohne in entfernten Server-Warteschlangen zu warten.',
      },
    ],
    relatedSlugs: ['/png-to-jpg', '/jpg-to-webp', '/image-converter', '/add-background-to-image'],
  },
  {
    slug: '/png-to-jpg',
    name: 'PNG zu JPG',
    shortDescription: 'Konvertieren Sie schwere PNGs mit eigener Hintergrund-Mattfarbe zu leichtem JPG.',
    category: 'convert',
    seoTitle: 'PNG in JPG umwandeln – kostenlos online',
    seoDescription:
      'Verwandeln Sie schwere PNG-Dateien in leichte Fotos: Wählen Sie eine Mattfarbe für transparente Bereiche, stellen Sie die Qualität ein und speichern Sie ZIPs.',
    h1: 'Kostenloser Online-PNG-zu-JPG-Konverter',
    subtitle:
      'Verkleinern Sie sperrige PNG-Screenshots, Retina-Aufnahmen und Grafikexporte zu schnellen, leichten .jpg-Dateien mit unserem kostenlosen PNG-zu-JPG-Konverter in Ihrem Browser. Für Blogger, Marketer und E-Mail-Versender mit übergroßen PNG-Anhängen bis zu 25 MB pro Datei: Er kombiniert einen Qualitätsregler mit einer eigenen Farbauswahl für transparente Hintergrund-Matte, sodass Alphabereiche nie schwarz werden.',
    howToSteps: [
      {
        title: 'Legen Sie PNG-Bilder bis zu 25 MB pro Datei ab',
        description:
          'Laden Sie ein oder mehrere .png-Screenshots, Produktrender oder transparente Ausschnitte in den Upload-Bereich.',
      },
      {
        title: 'Wählen Sie eine Mattfarbe für transparenten Hintergrund',
        description:
          'Klicken Sie auf Weiß (#ffffff), Schwarz (#000000), Hellgrau (#f8fafc) oder das native Farbfeld, um zu steuern, wie transparente Pixel hinter opaken Motiven abgeflacht werden.',
      },
      {
        title: 'Stellen Sie die JPG-Ausgabequalität ein (20 %–100 %)',
        description:
          'Behalten Sie die scharfe Standardeinstellung von 88 % oder ziehen Sie zwischen 20 % (winzige Datei) und 100 % (maximales Detail) und klicken Sie dann auf „Alle erneut konvertieren“.',
      },
      {
        title: 'Verifizieren Sie Byte-Einsparungen und scharfe Kanten per Vergleich',
        description:
          'Prüfen Sie die prozentuale Einsparung pro Karte und inspizieren Sie Text- oder Produktkanten im interaktiven Vorher-Nachher-Vergleichsfenster.',
      },
      {
        title: 'Laden Sie JPG-Dateien oder „Alle herunterladen (ZIP)“ herunter',
        description:
          'Speichern Sie einzelne konvertierte .jpg-Fotos sofort oder bündeln Sie Stapel zusammen in compressmypic_png_to_jpg.zip.',
      },
    ],
    features: [
      {
        title: 'Eigene Transparenz-Mattfüllung',
        description: 'Transparente PNG-Bereiche mischen sich sauber auf Weiß, Schwarz oder jede eigene Hintergrundfarbe, statt schwarz zu werden.',
      },
      {
        title: 'Massive Dateigrößenreduzierung',
        description: 'Die Konvertierung fotografischer PNGs zu 85-%-JPG schrumpft das Dateigewicht oft sofort um 60–85 %.',
      },
      {
        title: 'Visueller Vorher-Nachher-Prüfer',
        description: 'Verifizieren Sie die Schärfe nebeneinander vor dem Herunterladen, damit Text und Kanten scharf bleiben.',
      },
      {
        title: 'Private Browser-Ausführung',
        description: 'Vertrauliche Screenshots und Dokumente bleiben sicher auf Ihrem eigenen Computer.',
      },
    ],
    faqs: [
      {
        question: 'Warum speichern macOS und Windows Screenshots als mehrmegabytegroße PNGs, die als JPG dramatisch schrumpfen?',
        answer:
          'Desktop-Betriebssysteme verwenden standardmäßig verlustfreies PNG für Screenshots, das Millionen unkomprimierter Retina-Bildschirmpixel originalgetreu speichert – oft über 3 MB bis 8 MB pro Aufnahme. Die Konvertierung fotografischer oder detailreicher UI-PNGs zu 85-%–90-%-JPG trimmt das Gewicht typischerweise um 60 % bis 85 % für schnelles Teilen per E-Mail und Slack.',
      },
      {
        question: 'Wie verhindert die Auswahl der Mattfarbe für transparenten Hintergrund hässliche schwarze Kästen?',
        answer:
          'Da die JPEG-Spezifikation keinen Alphatransparenzkanal hat, setzen naive Konverter leere Alphapixel oft standardmäßig auf schwarzes #000000, was dunkle Logos oder schattierte Ausschnitte ruiniert. Das vorherige Malen Ihrer gewählten Mattfarbe (standardmäßig Weiß, plus Schwarz, Hellgrau oder ein beliebiges Hex) auf die Leinwand mischt halbtransparente Kanten sauber.',
      },
      {
        question: 'Kann ich dunkles Anthrazit oder eine bestimmte Website-Markenfarbe hinter einem transparenten PNG-Logo wählen, bevor ich als JPG speichere?',
        answer:
          'Ja. Klicken Sie auf das Farbeingabe-Quadrat neben den Schnellschaltflächen Weiß, Schwarz und Hellgrau unter „Mattfarbe für transparenten Hintergrund“, um einen beliebigen exakten Hex-Wert zu wählen, und klicken Sie dann auf „Alle erneut konvertieren“, um Vorschau und Export zu erhalten.',
      },
      {
        question: 'Welcher JPG-Ausgabequalitäts-Prozentsatz hält Screenshot-Typografie scharf, ohne aufgeblähte Dateien?',
        answer:
          'Wenn Sie die JPG-Ausgabequalität bei etwa 88 % (Standard) bis 95 % halten, bleiben scharfe Kanten um Software-UI-Text und Diagramme sauber. Ein Absinken unter 70 % kann aufgrund der JPEG-Chroma-Subsampling leichtes Moskitorauschen um hochkontrastige rote oder blaue Buchstaben einführen.',
      },
      {
        question: 'Warum kann ein winziges 20-KB-flaches monochromes PNG-Icon bei der Konvertierung zu 88-%-JPG tatsächlich etwas wachsen?',
        answer:
          'Palettenindiziertes PNG glänzt bei flachen zweifarbigen Grafiken mit scharfen Vollflächen, während die 8×8-Cosinus-Blöcke von JPEG bei winzigen Logos Overhead hinzufügen. Prüfen Sie immer die Spalte „Änderung“ – für flache transparente Icons für Websites sind WebP oder das Beibehalten von PNG meist kleiner als JPG.',
      },
      {
        question: 'Wie soll ich mich zwischen PNG zu JPG und PNG zu WebP entscheiden?',
        answer:
          'Wählen Sie PNG zu JPG, wenn Anhänge in Microsoft Word, PDF-Buildern, alten E-Mail-Programmen, Drucklaboren oder Portalen geöffnet werden müssen, die WebP ablehnen, oder wenn Sie bewusst einen soliden weißen Hintergrund benötigen. Wählen Sie PNG zu WebP, wenn Sie Assets für Websites bereitstellen, bei denen Transparenz und maximale Geschwindigkeit zählen.',
      },
      {
        question: 'Hilft die Konvertierung transparenter Produktausschnitte auf eine weiße #ffffff-Matte bei Marktplatz-Angeboten?',
        answer:
          'Ja. Marktplätze wie Amazon und eBay bevorzugen für Hauptprodukt-Miniaturen häufig scharfe opake JPGs mit weißem Hintergrund statt Alpha-PNGs, und Weiß komprimiert sich in JPEG sehr effizient.',
      },
      {
        question: 'Kann ich einen ganzen Stapel von 25 Retina-PNG-Screenshots auf einmal zu JPG konvertieren?',
        answer:
          'Ja. Legen Sie mehrere .png-Dateien bis zu 25 MB pro Datei in die Warteschlange, wählen Sie Ihre Qualität und Mattfüllfarbe und laden Sie alles zusammen in compressmypic_png_to_jpg.zip herunter.',
      },
      {
        question: 'Was passiert mit weichen Schlagschatten um einen transparenten PNG-Fensterausschnitt, wenn er zu JPG abgeflacht wird?',
        answer:
          'Alpha-gemischte Schlagschatten fügen sich natürlich über Ihrer gewählten Mattfarbe zusammen, statt in harte gezackte Umrisse zu schneiden. Das erzeugt sanfte, saubere Schattierungen auf weißen oder getönten Hintergründen – bereit für Folien und Artikel.',
      },
      {
        question: 'Werden vertrauliche Dashboards, Quittungen oder Design-Mockups an eine Cloud-API hochgeladen?',
        answer:
          'Nein. Canvas-Matte-Komposition, JPEG-Komprimierung und ZIP-Erzeugung laufen lokal in Ihrem Browser-Tab, sodass sensible Aufnahmen nie Ihren Computer verlassen.',
      },
      {
        question: 'Ändert die PNG-zu-JPG-Konvertierung Pixelbreite oder -höhe?',
        answer:
          'Nein. Jedes konvertierte .jpg behält 100 % der exakten Breite und Höhe Ihres Original-PNG. Nutzen Sie den Bildverkleinerer oder Stapel-Bildverkleinerer, wenn Sie Retina-Aufnahmen zusätzlich auf 1×-Abmessungen herunterskalieren möchten.',
      },
      {
        question: 'Warum erstreckt sich der Qualitätsregler von 20 % bis 100 %?',
        answer:
          'Das Ziehen auf 20 % zeigt, wie aggressive Komprimierung die Größe reduziert, wenn ultraleichte Dateien zwingend sind, während 85 %–90 % den visuellen Sweet Spot für scharfe Fotos und Folien treffen. Die Wahl von 100 % liefert maximale JPEG-Details, wann immer das Byte-Gewicht zweitrangig ist.',
      },
      {
        question: 'Kann ich Mattfarbe oder Qualität ändern, nachdem ich die ersten Konvertierungsergebnisse gesehen habe?',
        answer:
          'Ja. Wählen Sie jederzeit ein anderes Mattfeld oder bewegen Sie den Regler und klicken Sie auf „Alle erneut konvertieren“, um jede geladene Datei ohne erneutes Hochladen neu zu erzeugen.',
      },
      {
        question: 'Entfernt die Konvertierung von PNG zu JPG eingebettete PNG-Text-Chunks wie Erstellungssoftware oder Kommentare?',
        answer:
          'Ja. Das Zeichnen von Pixeln auf HTML5 Canvas entfernt eingebettete tEXt-, iTXt- und ICC-Profilblöcke und hält Ausgabe-JPGs schlank und sauber.',
      },
      {
        question: 'Kann ich die Kantenschärfe vor und nach der Konvertierung bei UI-Screenshots vor dem Herunterladen verifizieren?',
        answer:
          'Ja. Klicken Sie auf „Vergleichen“ auf einer Karte, um den geteilten Betrachter über Textbeschriftungen und Icons gegen das verlustfreie PNG-Original zu ziehen.',
      },
      {
        question: 'Welche Dateitypen akzeptiert diese spezielle PNG-zu-JPG-Seite?',
        answer:
          'Sie filtert sauber nach .png-Dateien bis zu 25 MB pro Datei, damit Sie nicht versehentlich Nicht-PNG-Eingaben abflachen. Für gemischte Stapel mit WebP- oder BMP-Dateien probieren Sie den Stapel-Bildkonverter.',
      },
      {
        question: 'Unterstützt der Konverter transparente interlaced (Adam7) PNGs?',
        answer:
          'Ja. Der native Bilddecoder Ihres Browsers liest sowohl Standard- als auch interlaced PNG-Ströme sauber, bevor er auf den Canvas-Matthintergrund malt.',
      },
      {
        question: 'Öffnen Windows Fotos, macOS Vorschau, WhatsApp und ältere Drucker das exportierte JPG?',
        answer:
          'Ja. Standard-Baseline-RGB-.jpg-Ausgaben haben die breiteste Kompatibilität aller digitalen Bildformate – über Smartphones, Browser, Office-Suiten und Druckterminals hinweg.',
      },
      {
        question: 'Wie lautet der heruntergeladene einzelne Dateiname im Vergleich zum Stapel-ZIP-Dateinamen?',
        answer:
          'Einzelne Downloads behalten Ihren bereinigten ursprünglichen Dateinamen mit der Erweiterung .jpg. Stapel mit 2 oder mehr Dateien werden sauber gebündelt in compressmypic_png_to_jpg.zip exportiert.',
      },
      {
        question: 'Kann ich PNG-Screenshots von mobilen iOS- oder Android-Browsern sauber konvertieren?',
        answer:
          'Ja. Die Mattfelder, der Qualitätsregler, der visuelle Vergleichsprüfer und der ZIP-Export funktionieren direkt in Safari auf iOS und Chrome auf Android – ohne App-Download.',
      },
    ],
    relatedSlugs: ['/jpg-to-png', '/png-to-webp', '/compress-image-to-100kb', '/image-converter'],
  },
  {
    slug: '/jpg-to-webp',
    name: 'JPG-zu-WebP-Konverter',
    shortDescription: 'Wandeln Sie JPG-Fotos in modernes WebP um – für schnellere Websites und besseres SEO.',
    category: 'convert',
    seoTitle: 'JPG in WebP umwandeln – kostenlos online',
    seoDescription:
      'Wandeln Sie JPG-Fotos kostenlos online in modernes WebP um. Kleinere Dateien, schnellere Seiten, bessere Core Web Vitals – mit Qualitätsregler und ZIP-Export.',
    h1: 'Kostenloser Online-Konverter: JPG in WebP umwandeln',
    subtitle:
      'Verwandeln Sie alltägliche JPG-Fotos mit unserem kostenlosen JPG-zu-WebP-Konverter direkt in Ihrem Browser in leichte, moderne WebP-Bilder. Der Konverter wurde für Blogger, Shop-Betreiber und Entwickler entwickelt, die schnellere Seiten und bessere Core Web Vitals benötigen: Er wandelt JPG-Dateien bis zu 25 MB pro Datei in der von Ihnen gewählten Qualität um – standardmäßig 82 % – mit Stapelverarbeitung und ZIP-Downloads per Klick, und nichts wird jemals hochgeladen.',
    howToSteps: [
      {
        title: 'JPG-Fotos bis zu 25 MB pro Datei ablegen',
        description:
          'Laden Sie ein oder mehrere .jpg- oder .jpeg-Fotos aus Ihrem Blog, Ihrem Shop oder Ihrer Kamerarolle in den Upload-Bereich.',
      },
      {
        title: 'WebP-Ausgabequalität einstellen (20 %–100 %)',
        description:
          'Behalten Sie die scharfen 82 % als Standard für Fotos bei, oder ziehen Sie den Regler in Richtung 20 % für winzige Dateien und 100 % für maximale Details, und klicken Sie dann auf „Alle erneut umwandeln“.',
      },
      {
        title: 'Einsparung bei jeder Karte prüfen',
        description:
          'Jedes Ergebnis zeigt die ursprüngliche JPG-Größe, die umgewandelte WebP-Größe und die eingesparte Prozentzahl, damit Sie den Gewinn sofort sehen.',
      },
      {
        title: 'Schärfe im direkten Vergleich prüfen',
        description:
          'Klicken Sie bei einer Karte auf „Vergleichen“, um die geteilte Ansicht zu öffnen und zu prüfen, ob Text, Gesichter und Kanten bei der gewählten Qualität noch scharf aussehen.',
      },
      {
        title: 'WebP-Dateien oder „Alle herunterladen (ZIP)“',
        description:
          'Speichern Sie einzelne .webp-Dateien oder bündeln Sie den gesamten Stapel per Klick in compressmypic_jpg_to_webp.zip.',
      },
    ],
    features: [
      {
        title: 'Schnellere PageSpeed- und LCP-Werte',
        description: 'WebP ist das von Lighthouse und modernen Browsern empfohlene Webformat der nächsten Generation.',
      },
      {
        title: 'Einstellbare Qualitätskontrolle',
        description: 'Stellen Sie die Komprimierung zwischen 20 % und 100 % ein und sehen Sie die Ergebnisse sofort in der Vorschau.',
      },
      {
        title: 'Stapelexport als ZIP',
        description: 'Optimieren Sie ganze Blog- oder E-Commerce-Bildordner lokal in Sekundenschnelle.',
      },
      {
        title: 'Keine Server-Anfragen',
        description: 'Nutzt den integrierten WebP-Encoder Ihres Browsers – schnell, offlinefähig und privat.',
      },
    ],
    faqs: [
      {
        question: 'Wie viel kleiner ist eine WebP-Datei als dasselbe Foto im JPG-Format?',
        answer:
          'Bei vergleichbarer sichtbarer Qualität sind WebP-Dateien in der Regel 25 % bis 35 % kleiner als dasselbe Foto im JPG-Format, weil die WebP-Komprimierung Pixel effizienter vorhersagt. Die genaue Einsparung hängt vom Foto ab: Detailreiche Landschaften sparen weniger, während glatte Himmel und Studioaufnahmen mehr sparen.',
      },
      {
        question: 'Warum empfiehlt Google WebP für schnellere Websites und bessere Core Web Vitals?',
        answer:
          'Die Lighthouse- und PageSpeed-Tools von Google nennen schwere Bilder als eine der Hauptursachen für langsame Largest-Contentful-Paint-Werte (LCP). Wenn dasselbe Foto als leichteres WebP ausgeliefert wird, verkürzt sich die Ladezeit bei langsamen Verbindungen – das verbessert direkt den LCP und den Erfahrungswert, den Google als Ranking-Signal nutzt.',
      },
      {
        question: 'Welche Browser können eine WebP-Datei ohne Installation öffnen?',
        answer:
          'Alle modernen Browser öffnen WebP nativ: Chrome, Edge, Firefox und Safari auf dem Desktop sowie Chrome auf Android und Safari auf iOS. Es sind weder ein Plug-in noch eine Viewer-App nötig – WebP-Bilder werden direkt auf Webseiten, in Chats und in den meisten modernen Bildbetrachtern angezeigt.',
      },
      {
        question: 'Welche Qualitätseinstellung sollte ich für JPG-zu-WebP-Fotos auf einer Website verwenden?',
        answer:
          'Für Website-Fotos sind 80 % bis 85 % der ideale Bereich: Die Bilder sehen praktisch identisch zum JPG-Original aus und bleiben dabei deutlich kleiner. Das Tool verwendet standardmäßig 82 % – genau aus diesem Grund. Für Hero-Bilder, bei denen jedes Detail zählt, können Sie auf 90 % oder mehr erhöhen.',
      },
      {
        question: 'Verändert die Umwandlung von JPG in WebP die Fotoabmessungen?',
        answer:
          'Nein. Die Umwandlung ändert nur den Dateicontainer und die Komprimierung, sodass das exportierte WebP 100 % der ursprünglichen Pixelbreite und -höhe des JPG behält. Wenn Sie zusätzlich kleinere Abmessungen benötigen, verwenden Sie danach das Tool „Bildgröße ändern“ für exakte Pixelmaße.',
      },
      {
        question: 'Kann ein JPG-Foto seine Transparenz behalten, wenn es in WebP umgewandelt wird?',
        answer:
          'Nein, denn Standard-JPG-Dateien besitzen keinen Transparenzkanal, der erhalten bleiben könnte – jedes Pixel eines JPG ist vollständig deckend. Wenn Ihre Ausgangsgrafik einen transparenten Hintergrund hat, beginnen Sie stattdessen mit PNG und nutzen Sie unseren PNG-zu-WebP-Konverter, der den vollständigen Alphakanal erhält.',
      },
      {
        question: 'Werden meine JPG-Fotos während der Umwandlung auf einen Server hochgeladen?',
        answer:
          'Niemals. Die Umwandlung läuft über HTML5 Canvas in Ihrem eigenen Browser-Tab, sodass Ihre Fotos lokal kodiert werden und Ihren Computer oder Ihr Smartphone nie verlassen. Wenn Sie den Tab schließen, werden sie aus dem Browser-Speicher gelöscht.',
      },
      {
        question: 'Kann ich einen ganzen Ordner mit JPG-Blogbildern auf einmal in WebP umwandeln?',
        answer:
          'Ja. Legen Sie mehrere .jpg- oder .jpeg-Dateien bis zu 25 MB pro Datei in die Warteschlange, wählen Sie eine Qualitätseinstellung für den gesamten Stapel und laden Sie alles zusammen in compressmypic_jpg_to_webp.zip herunter. Jede Datei wird unabhängig umgewandelt, sodass eine fehlerhafte Datei die anderen nie blockiert.',
      },
      {
        question: 'Was geschieht mit EXIF-Kameradaten und GPS-Tags, wenn ein JPG zu WebP wird?',
        answer:
          'Beim Zeichnen der Pixel auf HTML5 Canvas werden eingebettete EXIF-Daten entfernt, darunter GPS-Koordinaten, Kameramodell und Zeitstempel. So bleiben die ausgegebenen WebP-Dateien schlank und Ihre Privatsphäre geschützt, bevor Sie Fotos online veröffentlichen.',
      },
      {
        question: 'Warum ist das umgewandelte WebP manchmal größer als das ursprüngliche JPG?',
        answer:
          'Sehr kleine oder bereits stark komprimierte JPGs können bei der Neukodierung leicht wachsen – besonders bei 100 % Qualität –, weil WebP einen eigenen Container-Overhead mitbringt. Wenn eine Datei wächst, senken Sie die Qualität in Richtung 80 % oder behalten Sie das ursprüngliche JPG: Die Spalte „Änderung“ auf jeder Karte zeigt das Ergebnis ehrlich an.',
      },
      {
        question: 'Kann ich die umgewandelten WebP-Dateien in WordPress, Shopify oder Wix verwenden?',
        answer:
          'Ja. WordPress, Shopify, Wix, Squarespace und die meisten modernen Website-Baukästen akzeptieren WebP-Uploads direkt, und Browser liefern sie ohne zusätzliche Einrichtung aus. Für sehr alte Themes oder Plug-ins, die WebP ablehnen, wandeln Sie mit unserem WebP-zu-JPG-Tool zurück.',
      },
      {
        question: 'Wie groß darf eine JPG-Datei hier maximal sein?',
        answer:
          'Jede JPG- oder JPEG-Datei darf bis zu 25 MB groß sein – das deckt hochauflösende Kamerafotos und große Screenshots ab. Da die Umwandlung auf Ihrem Gerät stattfindet, werden große Dateien mit lokaler CPU-Geschwindigkeit verarbeitet, ohne Wartezeit für Uploads.',
      },
      {
        question: 'Funktioniert die Umwandlung in WebP auch im Smartphone-Browser?',
        answer:
          'Ja. Qualitätsregler, Stapelwarteschlange, Vergleichsansicht und ZIP-Download funktionieren in Safari auf iOS und Chrome auf Android, ohne dass eine App installiert werden muss. Auf Smartphones dauern sehr große Stapel nur etwas länger, weil die Arbeit auf dem Prozessor des Telefons läuft.',
      },
      {
        question: 'Wie prüfe ich, ob das umgewandelte WebP vor dem Herunterladen noch scharf aussieht?',
        answer:
          'Klicken Sie bei einer Ergebniskarte auf „Vergleichen“, um die geteilte Ansicht zu öffnen und über das Foto zu fahren, um Gesichter, Text und Kanten mit dem ursprünglichen JPG zu vergleichen. Wenn etwas unscharf wirkt, erhöhen Sie die Qualität und klicken Sie auf „Alle erneut umwandeln“.',
      },
      {
        question: 'Kann ich die Qualität nach der ersten Umwandlung ändern, ohne erneut hochzuladen?',
        answer:
          'Ja. Bewegen Sie den Qualitätsregler jederzeit auf einen neuen Wert und klicken Sie auf „Alle erneut umwandeln“, um jede geladene Datei mit der neuen Einstellung neu zu erzeugen. Ihre hochgeladenen Dateien bleiben in der Warteschlange, sodass Sie sie nicht erneut hineinziehen müssen.',
      },
      {
        question: 'Ist WebP besser als JPG für Produktfotos in einem Online-Shop?',
        answer:
          'Für Produktfotos, die auf einer Website angezeigt werden: ja. WebP mit 80 % bis 85 % sieht genauso aus wie JPG und lädt dabei spürbar schneller, was sowohl Käufern als auch dem Suchmaschinen-Ranking hilft. Behalten Sie JPG nur, wenn ein Marktplatz, ein Drucklabor oder ein Käufer es ausdrücklich verlangt.',
      },
      {
        question: 'Welchen Dateinamen behalten die heruntergeladenen WebP-Dateien?',
        answer:
          'Einzelne Downloads behalten Ihren bereinigten ursprünglichen Dateinamen mit der Erweiterung .webp, sodass aus photo_01.jpg die Datei photo_01.webp wird. Stapel mit zwei oder mehr Dateien werden gebündelt in compressmypic_jpg_to_webp.zip exportiert.',
      },
      {
        question: 'Kann ich JPG-Screenshots mit Text in WebP umwandeln, ohne dass die Buchstaben verschwimmen?',
        answer:
          'Ja – bei 85 % bis 90 % Qualität bleibt der Text von Screenshots scharf, weil WebP scharfe Kanten mit hohem Kontrast gut erhält. Unter 70 % können kleine Buchstaben weicher werden; prüfen Sie also die Vergleichsansicht und erhöhen Sie die Qualität, wenn der Text unscharf wirkt.',
      },
      {
        question: 'Funktioniert dieser Konverter offline, nachdem die Seite geladen wurde?',
        answer:
          'Ja. Sobald die Seite in Ihrem Browser geladen ist, läuft die Umwandlung vollständig in lokalem JavaScript und HTML5 Canvas, ohne Server-Anfragen. Internet benötigen Sie erst wieder, um die Seite selbst zu laden oder die fertigen Dateien herunterzuladen.',
      },
      {
        question: 'Wann sollte ich JPG behalten, statt in WebP umzuwandeln?',
        answer:
          'Behalten Sie JPG, wenn die Datei in älterer Software, E-Mail-Anhängen, Drucklabors oder Upload-Portalen geöffnet werden muss, die WebP weiterhin ablehnen. Für alles, was auf einer modernen Website veröffentlicht wird, ist WebP die bessere Wahl – und mit WebP zu JPG können Sie jederzeit zurückwandeln.',
      },
    ],
    relatedSlugs: ['/webp-to-jpg', '/png-to-webp', '/web-image-optimizer', '/bulk-image-converter'],
  },
  {
    slug: '/webp-to-jpg',
    name: 'WebP-zu-JPG-Konverter',
    shortDescription: 'Wandeln Sie WebP-Downloads zurück in überall akzeptierte JPG-Dateien um.',
    category: 'convert',
    seoTitle: 'WebP in JPG umwandeln – kostenlos online',
    seoDescription:
      'Wandeln Sie WebP-Bilder kostenlos online in universelles JPG um. Hintergrundfarbe für Transparenz wählen, Qualität einstellen und Stapel als ZIP laden.',
    h1: 'Kostenloser Online-Konverter: WebP in JPG umwandeln',
    subtitle:
      'Verwandeln Sie heruntergeladene .webp-Bilder mit unserem kostenlosen WebP-zu-JPG-Konverter in Ihrem Browser in klassische .jpg-Dateien, die sich in jeder App, jedem Portal und jedem Drucker öffnen lassen. Der Konverter wurde für alle entwickelt, denen eine Website oder ein Messenger eine WebP-Datei übergibt, die ihr Editor, ihr Office-Paket oder ihr Upload-Formular ablehnt: Er wandelt WebP-Dateien bis zu 25 MB pro Datei mit standardmäßig 88 % Qualität um, mit einer Hintergrundfarbe für transparente Bereiche und Stapel-Export als ZIP.',
    howToSteps: [
      {
        title: 'WebP-Bilder bis zu 25 MB pro Datei ablegen',
        description:
          'Laden Sie ein oder mehrere .webp-Dateien, die Sie von Websites, aus Chats oder Downloads gespeichert haben, in den Upload-Bereich.',
      },
      {
        title: 'Hintergrundfarbe für transparente Bereiche wählen',
        description:
          'Wählen Sie Weiß (#ffffff), Schwarz (#000000), Hellgrau (#f8fafc) oder eine beliebige eigene Hex-Farbe, denn JPG kann keine Transparenz speichern.',
      },
      {
        title: 'JPG-Ausgabequalität einstellen (20 %–100 %)',
        description:
          'Behalten Sie die scharfen 88 % als Standard bei oder ziehen Sie den Regler in Richtung 20 % für winzige Dateien und 100 % für maximale Details, und klicken Sie dann auf „Alle erneut umwandeln“.',
      },
      {
        title: 'JPG mit dem ursprünglichen WebP vergleichen',
        description:
          'Klicken Sie bei einer Karte auf „Vergleichen“, um Kanten und Text in der geteilten Ansicht zu prüfen, bevor Sie etwas speichern.',
      },
      {
        title: 'JPG-Dateien oder „Alle herunterladen (ZIP)“',
        description:
          'Speichern Sie einzelne .jpg-Dateien oder bündeln Sie den gesamten Stapel per Klick in compressmypic_webp_to_jpg.zip.',
      },
    ],
    features: [
      {
        title: 'Behebt Ablehnungen durch ältere Software',
        description: 'Wandeln Sie WebP-Bilder problemlos für Portale, Drucker oder ältere Apps um, die nur JPG akzeptieren.',
      },
      {
        title: 'Transparenzsichere Hintergrundfüllung',
        description: 'Transparente WebPs werden sauber auf Weiß, Schwarz oder eine beliebige Hex-Hintergrundfarbe gelegt.',
      },
      {
        title: 'Hochwertige Neukodierung',
        description: 'Die Standardqualität von 88 % hält Details scharf, bei nur minimalem Größenzuwachs.',
      },
      {
        title: '100 % Datenschutz im Browser',
        description: 'Keine Cloud-Warteschlangen und keine Server-Uploads – läuft sofort auf Ihrem Gerät.',
      },
    ],
    faqs: [
      {
        question: 'Warum lehnen manche Apps, Drucker und Upload-Formulare .webp-Dateien ab?',
        answer:
          'WebP ist ein neueres Format, und viele ältere Desktop-Programme, Druckterminals, Microsoft-Office-Versionen und behördliche Upload-Formulare wurden gebaut, bevor es WebP gab – sie erkennen daher nur JPG und PNG. Die Umwandlung von WebP in JPG macht das Bild sofort überall öffnbar, ohne dass jemand etwas installieren muss.',
      },
      {
        question: 'Was geschieht mit transparenten Teilen eines WebP, wenn es zu JPG wird?',
        answer:
          'JPG besitzt keinen Alpha-Transparenzkanal, sodass transparente Pixel während der Umwandlung mit einer Vollfarbe gefüllt werden müssen. Dieses Tool füllt sie mit der von Ihnen gewählten Hintergrundfarbe – standardmäßig Weiß –, sodass Logos und Sticker einen sauberen, einfarbigen Hintergrund erhalten statt eines schwarzen Kastens.',
      },
      {
        question: 'Kann ich die Hintergrundfarbe hinter einem transparenten WebP-Sticker wählen?',
        answer:
          'Ja. Wählen Sie unter „Hintergrundfarbe für Transparenz“ Weiß, Schwarz oder Hellgrau, oder klicken Sie auf das Farbfeld, um einen beliebigen eigenen Hex-Wert einzugeben. Die Auswahl gilt, sobald Sie auf „Alle erneut umwandeln“ klicken – Sie können also verschiedene Hintergründe ausprobieren, bevor Sie herunterladen.',
      },
      {
        question: 'Verliert die Umwandlung von WebP in JPG an Qualität?',
        answer:
          'Ein gewisser Verlust ist unvermeidbar, weil JPG Pixel mit verlustbehafteter Komprimierung neu kodiert. Bei den standardmäßigen 88 % ist der Unterschied für Fotos und Screenshots praktisch unsichtbar. Wenn das ursprüngliche WebP bereits von geringer Qualität war, kann die Umwandlung Details, die nie vorhanden waren, nicht wiederherstellen.',
      },
      {
        question: 'Behält das JPG dieselben Pixelmaße wie das WebP?',
        answer:
          'Ja. Jede umgewandelte .jpg-Datei behält 100 % der exakten Breite und Höhe des ursprünglichen WebP – nichts wird beschnitten oder skaliert. Verwenden Sie danach das Tool „Bildgröße ändern“, wenn Sie zusätzlich kleinere Abmessungen benötigen.',
      },
      {
        question: 'Was soll ich mit einer animierten WebP-Datei hier tun?',
        answer:
          'Ein animiertes WebP wird als Standbild-JPG exportiert, weil das JPG-Format keine Bewegung speichern kann. Sie erhalten ein einzelnes scharfes Bild der Animation, das sich gut für Vorschaubilder und Dokumente eignet – für die bewegte Version behalten Sie die ursprüngliche WebP-Datei.',
      },
      {
        question: 'Werden meine WebP-Dateien während der Umwandlung irgendwo hochgeladen?',
        answer:
          'Nein. Die gesamte Umwandlung läuft über HTML5 Canvas in Ihrem eigenen Browser-Tab, sodass Ihre Bilder nie an einen Server gesendet, gespeichert oder von jemand anderem angesehen werden. Wenn Sie den Tab schließen, werden sie aus dem Browser-Speicher gelöscht.',
      },
      {
        question: 'Kann ich viele WebP-Downloads auf einmal in JPG umwandeln?',
        answer:
          'Ja. Legen Sie mehrere .webp-Dateien bis zu 25 MB pro Datei in die Warteschlange, wählen Sie eine Hintergrundfarbe und eine Qualität für den gesamten Stapel und laden Sie alles zusammen in compressmypic_webp_to_jpg.zip herunter. Jede Datei wird unabhängig umgewandelt.',
      },
      {
        question: 'Wie groß darf eine WebP-Datei bei diesem Konverter maximal sein?',
        answer:
          'Jede WebP-Datei darf bis zu 25 MB groß sein – das deckt hochauflösende Downloads und große Screenshots ab. Da die Umwandlung auf Ihrem Gerät läuft, werden große Dateien mit lokaler CPU-Geschwindigkeit verarbeitet, ohne Wartezeit für Uploads.',
      },
      {
        question: 'Wie erhalte ich einen rein weißen Hintergrund statt eines schwarzen Kastens hinter einem Logo?',
        answer:
          'Wählen Sie vor der Umwandlung unter „Hintergrundfarbe für Transparenz“ Weiß (#ffffff) – Weiß ist der Standard, sodass die meisten Logos bereits sauber herauskommen. Wenn eine Datei mit der falschen Farbe umgewandelt wurde, ändern Sie einfach das Farbfeld und klicken Sie auf „Alle erneut umwandeln“, um sie neu zu erzeugen.',
      },
      {
        question: 'Warum ist die JPG-Datei manchmal größer als das ursprüngliche WebP?',
        answer:
          'WebP komprimiert effizienter als JPG, sodass ein kleines WebP, das mit 88 % als JPG neu kodiert wird, größer als die Quelle enden kann. Das ist zu erwarten: Sie tauschen etwas Dateigröße gegen universelle Kompatibilität. Wenn Sie die Qualität in Richtung 75 % senken, liegt das JPG meist wieder unter der ursprünglichen Größe.',
      },
      {
        question: 'Kann ich das umgewandelte JPG in Microsoft Word, PowerPoint oder Photoshop öffnen?',
        answer:
          'Ja. Standardmäßige Baseline-RGB-.jpg-Dateien öffnen sich in praktisch jedem Office-Paket, Editor, Browser und Druck-Workflow – auch in alten Versionen, die WebP nie gelernt haben. Diese universelle Unterstützung ist der Hauptgrund für die Umwandlung.',
      },
      {
        question: 'Entfernt der Konverter Metadaten aus WebP-Dateien?',
        answer:
          'Ja. Beim Zeichnen der Pixel auf HTML5 Canvas werden eingebettete EXIF-, XMP- und ICC-Profildaten entfernt, sodass die ausgegebenen JPGs schlank sind und keine versteckten Standort- oder Kameradetails enthalten.',
      },
      {
        question: 'Wie kann ich prüfen, ob das JPG gut aussieht, bevor ich es herunterlade?',
        answer:
          'Klicken Sie bei einer Ergebniskarte auf „Vergleichen“, um die geteilte Ansicht zu öffnen und über das Bild zu fahren, um Kanten, Text und Farben mit dem ursprünglichen WebP zu vergleichen. Jede Karte zeigt außerdem die ursprüngliche und die umgewandelte Größe, sodass Überraschungen vor dem Speichern sichtbar werden.',
      },
      {
        question: 'Kann ich die Hintergrundfarbe oder Qualität nach der Umwandlung ändern?',
        answer:
          'Ja. Wählen Sie jederzeit ein anderes Hintergrundfarbfeld oder bewegen Sie den Qualitätsregler und klicken Sie auf „Alle erneut umwandeln“, um jede geladene Datei neu zu erzeugen, ohne erneut hochzuladen. Ihre ursprünglichen WebP-Dateien bleiben in der Warteschlange, bis Sie sie entfernen.',
      },
      {
        question: 'Welchen Dateinamen behält das heruntergeladene JPG?',
        answer:
          'Einzelne Downloads behalten Ihren bereinigten ursprünglichen Dateinamen mit der Erweiterung .jpg, sodass aus banner.webp die Datei banner.jpg wird. Stapel mit zwei oder mehr Dateien werden gebündelt in compressmypic_webp_to_jpg.zip exportiert.',
      },
      {
        question: 'Funktioniert WebP zu JPG in Browsern auf iPhone und Android?',
        answer:
          'Ja. Hintergrundfarben-Auswahl, Qualitätsregler, Vergleichsansicht und ZIP-Download funktionieren in Safari auf iOS und Chrome auf Android, ohne dass eine App installiert werden muss. Große Stapel dauern auf Smartphone-Prozessoren nur etwas länger.',
      },
      {
        question: 'Wann ist WebP zu JPG die richtige Wahl statt WebP zu PNG?',
        answer:
          'Wählen Sie JPG, wenn Sie die kleinste, breit kompatible Datei benötigen – E-Mail-Anhänge, Office-Dokumente, Upload-Portale und Drucker. Wählen Sie stattdessen PNG, wenn Sie Transparenz behalten müssen oder pixelgenaue, verlustfreie Qualität zum Bearbeiten brauchen.',
      },
      {
        question: 'Warum wirkt ein WebP-Screenshot mit scharfem Text nach der Umwandlung weicher?',
        answer:
          'JPEG nutzt Chroma-Subsampling, das Kanten mit hohem Kontrast – etwa rote oder blaue Buchstaben auf Weiß – leicht weicher macht. Wenn Sie die Qualität auf 92 % oder 95 % erhöhen, bleibt Screenshot-Text scharf, und mit der Vergleichsansicht können Sie das vor dem Herunterladen prüfen.',
      },
      {
        question: 'Kann ich ein WebP-Bild umwandeln, das eine Website ohne Dateiendung gespeichert hat?',
        answer:
          'Nicht direkt – diese Seite filtert Eingaben nach der Endung .webp und dem WebP-MIME-Typ, benennen Sie die Datei also zuerst so um, dass sie auf .webp endet. Wenn die Datei in Wirklichkeit ein JPG oder PNG ist, das von der Website falsch benannt wurde, nutzen Sie stattdessen den passenden Konverter.',
      },
    ],
    relatedSlugs: ['/webp-to-png', '/jpg-to-webp', '/png-to-jpg', '/image-converter'],
  },
  {
    slug: '/png-to-webp',
    name: 'PNG-zu-WebP-Konverter',
    shortDescription: 'Wandeln Sie transparente PNG-Grafiken in kompaktes, transparentes WebP um.',
    category: 'convert',
    seoTitle: 'PNG in WebP umwandeln – kostenlos online',
    seoDescription:
      'Wandeln Sie PNG kostenlos online in WebP um und behalten Sie die volle Transparenz. Logos, Symbole und Screenshots verkleinern – mit Qualitätsregler und ZIP.',
    h1: 'Kostenloser Online-Konverter: PNG in WebP umwandeln',
    subtitle:
      'Verkleinern Sie schwere transparente PNG-Logos, Symbole und Screenshots mit unserem kostenlosen PNG-zu-WebP-Konverter direkt in Ihrem Browser zu kompakten WebP-Dateien. Der Konverter wurde für Webentwickler und Designer entwickelt, die schnell ladende transparente Grafiken benötigen: Er wandelt PNG-Dateien bis zu 25 MB pro Datei mit standardmäßig 85 % Qualität um und erhält dabei den vollständigen Alphakanal – mit Stapelverarbeitung und ZIP-Downloads.',
    howToSteps: [
      {
        title: 'PNG-Grafiken bis zu 25 MB pro Datei ablegen',
        description:
          'Laden Sie transparente .png-Logos, Symbole, Screenshots oder Produktfreisteller in den Upload-Bereich.',
      },
      {
        title: 'WebP-Ausgabequalität einstellen (20 %–100 %)',
        description:
          'Behalten Sie die 85 % als Standard für scharfe transparente Grafiken bei, oder ziehen Sie den Regler in Richtung 20 % für winzige Dateien und 100 % für maximale Details, und klicken Sie dann auf „Alle erneut umwandeln“.',
      },
      {
        title: 'Transparenz und Einsparung prüfen',
        description:
          'Jede Karte zeigt die ursprüngliche PNG-Größe, die neue WebP-Größe und die eingesparte Prozentzahl – die Transparenz wird in einer Vorschau mit Schachbrettmuster angezeigt.',
      },
      {
        title: 'Kanten und Schatten im direkten Vergleich prüfen',
        description:
          'Klicken Sie bei einer Karte auf „Vergleichen“, um halbtransparente Kanten, Verläufe und Schlagschatten in der geteilten Ansicht zu prüfen.',
      },
      {
        title: 'WebP-Dateien oder „Alle herunterladen (ZIP)“',
        description:
          'Speichern Sie einzelne .webp-Dateien oder bündeln Sie den Stapel per Klick in compressmypic_png_to_webp.zip.',
      },
    ],
    features: [
      {
        title: 'Vollständige Alpha-Transparenz erhalten',
        description: 'Anders als JPG behält WebP saubere halbtransparente Kanten und Schlagschatten Ihrer PNGs.',
      },
      {
        title: 'Bis zu 70 % kleinere Dateien',
        description: 'Ersetzen Sie mehrere Megabyte große PNG-Hero-Bilder und Freisteller durch schlanke WebP-Dateien für schnellere Websites.',
      },
      {
        title: 'Geteilte Vorher-Nachher-Ansicht',
        description: 'Prüfen Sie weiche Kanten und Verläufe vor dem Herunterladen nebeneinander.',
      },
      {
        title: 'Stapelverarbeitung + ZIP',
        description: 'Wandeln Sie ganze Symbol- und Produktsammlungen lokal um, ohne Upload-Limits.',
      },
    ],
    faqs: [
      {
        question: 'Behält PNG zu WebP wirklich transparente Hintergründe?',
        answer:
          'Ja. Die WebP-Kodierung über HTML5 Canvas erhält den vollständigen 8-Bit-Alphakanal, sodass vollständig transparente Pixel transparent bleiben und halbtransparente Kanten, weiche Schatten und weichgezeichnete Kurven ihre sanfte Überblendung behalten. Die Ergebnisvorschau zeigt Transparenz auf einem Schachbrettmuster, damit Sie es sofort prüfen können.',
      },
      {
        question: 'Wie viel kleiner ist WebP als PNG bei demselben Bild?',
        answer:
          'Je nach visueller Komplexität schrumpft die Umwandlung eines PNG in WebP mit 85 % die Dateigröße üblicherweise um 50 % bis 80 %. Fotografische PNGs und große Screenshots sparen am meisten, während winzige flache Symbole mit wenigen Farben weniger sparen – die Spalte „Änderung“ auf jeder Karte zeigt das genaue Ergebnis.',
      },
      {
        question: 'Überleben halbtransparente Schatten und weiche Kanten die Umwandlung?',
        answer:
          'Ja. WebP speichert dieselben 8-Bit-Alphawerte wie PNG, sodass Schlagschatten, Glühen und weiche Kanten exakt wie im Original zusammengesetzt werden. Nutzen Sie die Vergleichsansicht, um in Kanten hineinzuzoomen und vor dem Herunterladen zu bestätigen, dass die Weichheit identisch aussieht.',
      },
      {
        question: 'Welche Qualitätseinstellung eignet sich am besten für transparente PNG-Logos?',
        answer:
          'Die standardmäßigen 85 % sind ideal für die meisten Logos und Symbole: Die Kanten bleiben scharf, während die Dateien drastisch schrumpfen. Für druckreife Arbeiten oder sehr feine Linien erhöhen Sie die Qualität auf 90 % oder 95 %; unter 70 % können dünne Linien und kleiner Text rau wirken.',
      },
      {
        question: 'Wie wandle ich eine ganze Symbolsammlung auf einmal von PNG in WebP um?',
        answer:
          'Legen Sie mehrere .png-Dateien bis zu 25 MB pro Datei in die Warteschlange, wählen Sie eine Qualitätseinstellung für den gesamten Stapel und laden Sie alles zusammen in compressmypic_png_to_webp.zip herunter. Jedes Symbol wird unabhängig umgewandelt, sodass eine fehlerhafte Datei die anderen nie blockiert.',
      },
      {
        question: 'Werden PNG-Dateien bei der Umwandlung in WebP auf einen Server hochgeladen?',
        answer:
          'Nein. Die Umwandlung läuft über HTML5 Canvas in Ihrem eigenen Browser-Tab, sodass Ihre Logos, Screenshots und Design-Assets Ihren Computer nie verlassen. Wenn Sie den Tab schließen, werden sie aus dem Browser-Speicher gelöscht.',
      },
      {
        question: 'Verändert die Umwandlung von PNG in WebP die Bildabmessungen?',
        answer:
          'Nein. Das exportierte WebP behält 100 % der ursprünglichen Pixelbreite und -höhe des PNG – nur Dateiformat und Komprimierung ändern sich. Verwenden Sie danach das Tool „Bildgröße ändern“, wenn Sie zusätzlich kleinere Abmessungen für das Web benötigen.',
      },
      {
        question: 'Wie groß darf eine PNG-Datei hier maximal sein?',
        answer:
          'Jede PNG-Datei darf bis zu 25 MB groß sein – das deckt große Screenshots, Retina-Aufnahmen und hochauflösende Produkt-Renderings ab. Da die Umwandlung auf Ihrem Gerät läuft, werden große Dateien mit lokaler CPU-Geschwindigkeit verarbeitet, ohne Wartezeit für Uploads.',
      },
      {
        question: 'Warum ist mein umgewandeltes WebP größer als das ursprüngliche PNG?',
        answer:
          'Winzige flache PNGs mit wenigen Farben – etwa ein zweifarbiges Symbol – sind bereits extrem effizient, und die verlustbehaftete WebP-Kodierung kann bei ihnen Overhead hinzufügen. Wenn eine Datei wächst, prüfen Sie die Spalte „Änderung“ und behalten Sie für dieses Asset das ursprüngliche PNG; WebP gewinnt bei fotografischen und komplexen Grafiken.',
      },
      {
        question: 'Können Websites die umgewandelten WebP-Dateien direkt verwenden?',
        answer:
          'Ja. Alle modernen Browser zeigen WebP nativ an, und WordPress, Shopify, Wix und die meisten Website-Baukästen akzeptieren WebP-Uploads. Transparente WebP-Logos funktionieren in Kopfzeilen, Schaltflächen und Produktgalerien exakt wie transparente PNGs.',
      },
      {
        question: 'Was geschieht mit PNG-Metadaten und Text-Blöcken während der Umwandlung?',
        answer:
          'Beim Zeichnen der Pixel auf HTML5 Canvas werden eingebettete PNG-Textblöcke, Hinweise zur Erstellungssoftware und ICC-Profile entfernt. Die ausgegebenen WebP-Dateien bleiben schlank und frei von versteckten Metadaten – ideal für die Veröffentlichung von Assets online.',
      },
      {
        question: 'Wie prüfe ich vor dem Herunterladen, ob die Transparenz erhalten blieb?',
        answer:
          'Die Ergebnisminiatur zeigt transparente Bereiche auf einem Schachbrettmuster, und die Schaltfläche „Vergleichen“ öffnet eine geteilte Ansicht, in der Sie über das Bild fahren können, um zu bestätigen, dass Kanten sanft überblenden. Wenn der Hintergrund einfarbig statt kariert aussieht, hatte das Quell-PNG keine Transparenz.',
      },
      {
        question: 'Kann ich die Qualität nach der Umwandlung ändern, ohne erneut hochzuladen?',
        answer:
          'Ja. Bewegen Sie den Qualitätsregler jederzeit auf einen neuen Wert und klicken Sie auf „Alle erneut umwandeln“, um jede geladene Datei mit der neuen Einstellung neu zu erzeugen. Ihre hochgeladenen PNGs bleiben in der Warteschlange, sodass Sie sie nicht erneut hineinziehen müssen.',
      },
      {
        question: 'Ist WebP besser als PNG für Hero-Bilder einer Website?',
        answer:
          'Für fotografische oder komplexe Hero-Bilder: ja. WebP mit 85 % sieht genauso aus wie PNG und lädt dabei deutlich schneller. PNG gewinnt weiterhin bei winzigen flachen Symbolen, Pixel-Art oder jedem Asset, bei dem mathematisch verlustfreie Qualität eine harte Anforderung ist.',
      },
      {
        question: 'Funktioniert PNG zu WebP in mobilen Browsern?',
        answer:
          'Ja. Qualitätsregler, Stapelwarteschlange, Vergleichsansicht und ZIP-Download funktionieren in Safari auf iOS und Chrome auf Android, ohne dass eine App installiert werden muss. Große Stapel dauern auf Smartphone-Prozessoren nur etwas länger.',
      },
      {
        question: 'Welchen Dateinamen erhalten umgewandelte WebP-Dateien?',
        answer:
          'Einzelne Downloads behalten Ihren bereinigten ursprünglichen Dateinamen mit der Erweiterung .webp, sodass aus logo.png die Datei logo.webp wird. Stapel mit zwei oder mehr Dateien werden gebündelt in compressmypic_png_to_webp.zip exportiert.',
      },
      {
        question: 'Kann ich einen PNG-Screenshot mit Text in WebP umwandeln, ohne dass die Buchstaben verschwimmen?',
        answer:
          'Ja – bei 85 % bis 90 % Qualität bleibt Screenshot-Text scharf, weil WebP Kanten mit hohem Kontrast gut erhält. Unter 70 % können kleine Buchstaben weicher werden; prüfen Sie also die Vergleichsansicht und erhöhen Sie die Qualität, wenn der Text unscharf wirkt.',
      },
      {
        question: 'Behält dieses Tool das ICC-Farbprofil des PNG im WebP?',
        answer:
          'Nein. Die Neukodierung über Canvas entfernt das eingebettete ICC-Profil und stellt Farben in Standard-sRGB dar – das, was Browser für die Web-Anzeige verwenden. Für die meisten Bildschirmgrafiken ist der sichtbare Unterschied vernachlässigbar, aber druckkritische Farbarbeiten sollten im ursprünglichen Format bleiben.',
      },
      {
        question: 'Wann sollte ich PNG zu WebP statt PNG zu JPG wählen?',
        answer:
          'Wählen Sie WebP, wenn das Bild transparent bleiben oder auf einer Website schnell laden muss. Wählen Sie JPG nur, wenn das Ziel – ein E-Mail-Client, ein Office-Dokument oder ein altes Upload-Portal – WebP nicht öffnen kann und Sie bereit sind, Transparenz gegen einen einfarbigen Hintergrund einzutauschen.',
      },
      {
        question: 'Kann ein Interlaced-PNG hier in WebP umgewandelt werden?',
        answer:
          'Ja. Der native Bild-Decoder Ihres Browsers liest sowohl Standard- als auch Interlaced-PNG-Ströme (Adam7) sauber, bevor er sie auf Canvas malt, sodass Interlaced-Dateien exakt wie normale PNGs umgewandelt werden.',
      },
    ],
    relatedSlugs: ['/webp-to-png', '/jpg-to-webp', '/web-image-optimizer', '/image-converter'],
  },
  {
    slug: '/webp-to-png',
    name: 'WebP-zu-PNG-Konverter',
    shortDescription: 'Wandeln Sie WebP-Bilder verlustfrei in PNG um – mit erhaltener Transparenz.',
    category: 'convert',
    seoTitle: 'WebP in PNG umwandeln – kostenlos online',
    seoDescription:
      'Wandeln Sie WebP kostenlos online verlustfrei in PNG um – direkt im Browser. Volle Transparenz bleibt erhalten, Pixelmaße ändern sich nie, Stapel als ZIP.',
    h1: 'Kostenloser Online-Konverter: WebP in PNG umwandeln',
    subtitle:
      'Verwandeln Sie WebP-Downloads mit unserem kostenlosen WebP-zu-PNG-Konverter vollständig in Ihrem Browser in universelle, verlustfreie PNG-Dateien. Der Konverter wurde für Designer, Redakteure und alle entwickelt, deren App oder Druckerei WebP ablehnt: Er wandelt WebP-Dateien bis zu 25 MB pro Datei ohne jeden Qualitätsverlust und mit vollständiger Alpha-Transparenz um – plus Stapelverarbeitung und ZIP-Downloads.',
    howToSteps: [
      {
        title: 'WebP-Dateien bis zu 25 MB pro Datei ablegen',
        description:
          'Laden Sie ein oder mehrere .webp-Bilder aus Downloads, Chats oder Websites in den Upload-Bereich.',
      },
      {
        title: 'Auf die verlustfreie PNG-Umwandlung warten',
        description:
          'Jedes WebP wird auf eine transparente Arbeitsfläche gezeichnet und automatisch als verlustfreies PNG exportiert – es gibt keinen Qualitätsregler, weil PNG verlustfrei ist.',
      },
      {
        title: 'Transparenz in der Vorschau prüfen',
        description:
          'Transparente Bereiche werden auf einem Schachbretthintergrund angezeigt, und jede Karte listet die ursprüngliche und die umgewandelte Dateigröße.',
      },
      {
        title: 'PNG mit dem ursprünglichen WebP vergleichen',
        description:
          'Klicken Sie bei einer Karte auf „Vergleichen“, um Kanten, Text und Transparenz in der geteilten Ansicht zu prüfen.',
      },
      {
        title: 'PNG-Dateien oder „Alle herunterladen (ZIP)“',
        description:
          'Speichern Sie einzelne .png-Dateien oder bündeln Sie den Stapel per Klick in compressmypic_webp_to_png.zip.',
      },
    ],
    features: [
      {
        title: 'Alpha-Transparenz bleibt vollständig erhalten',
        description: 'Transparente WebP-Logos und Sticker bleiben im entstehenden PNG sauber transparent.',
      },
      {
        title: 'Universelle Editor-Unterstützung',
        description: 'Öffnen Sie umgewandelte PNGs in jedem Design-Tool, jeder Präsentationsmappe oder jedem Upload-Portal ohne WebP-Kompatibilitätsprobleme.',
      },
      {
        title: 'Stapelwarteschlange',
        description: 'Wandeln Sie mehrere WebP-Downloads per Klick in PNG um und exportieren Sie eine einzige ZIP-Datei.',
      },
      {
        title: 'Private Verarbeitung auf dem Gerät',
        description: 'Dateien verlassen Ihr Gerät nie – die Umwandlung geschieht im lokalen Browser-Speicher.',
      },
    ],
    faqs: [
      {
        question: 'Ist die Umwandlung von WebP in PNG wirklich verlustfrei?',
        answer:
          'Ja. PNG speichert jedes dekodierte Pixel exakt so, wie der Browser es aus dem WebP gelesen hat – ohne weiteren Komprimierungsverlust. Die einzige Qualitätsgrenze ist die Komprimierung, die das ursprüngliche WebP selbst bereits angewendet hat: Dieses Tool fügt keine zweite Runde verlustbehafteter Schäden hinzu.',
      },
      {
        question: 'Bleibt ein transparentes WebP-Logo als PNG transparent?',
        answer:
          'Ja. Der vollständige Alphakanal wird übernommen, sodass transparente Pixel transparent bleiben und halbtransparente Kanten ihre sanfte Überblendung behalten. Die Ergebnisminiatur zeigt Transparenz auf einem Schachbrettmuster, damit Sie sie vor dem Herunterladen bestätigen können.',
      },
      {
        question: 'Warum ist die PNG-Ausgabe größer als das hochgeladene WebP?',
        answer:
          'PNG nutzt verlustfreie DEFLATE-Komprimierung, während WebP eine deutlich aggressivere, moderne Komprimierung verwendet – dieselben Pixel benötigen als PNG schlicht mehr Bytes. Die größere Datei ist der ehrliche Preis für universelle Kompatibilität und null weiteren Qualitätsverlust.',
      },
      {
        question: 'Kann ich hier ein animiertes WebP in PNG umwandeln?',
        answer:
          'Ein animiertes WebP wird als Standbild-PNG seines ersten Bildes exportiert, weil PNG keine Bewegung speichern kann. Dieses Standbild eignet sich gut für Vorschaubilder, Dokumente und Sticker – für die bewegte Version behalten Sie die ursprüngliche WebP-Datei.',
      },
      {
        question: 'Behält das PNG dieselbe Breite und Höhe wie das WebP?',
        answer:
          'Ja. Jede umgewandelte .png-Datei behält 100 % der exakten Pixelmaße des ursprünglichen WebP – nichts wird beschnitten oder skaliert. Verwenden Sie danach das Tool „Bildgröße ändern“, wenn Sie zusätzlich kleinere Abmessungen benötigen.',
      },
      {
        question: 'Werden WebP-Dateien während der Umwandlung auf einen Server hochgeladen?',
        answer:
          'Nein. Die Umwandlung läuft über HTML5 Canvas in Ihrem eigenen Browser-Tab, sodass Ihre Bilder nie an einen Server gesendet, gespeichert oder von jemand anderem angesehen werden. Wenn Sie den Tab schließen, werden sie aus dem Browser-Speicher gelöscht.',
      },
      {
        question: 'Kann ich einen Stapel von WebP-Bildern auf einmal in PNG umwandeln?',
        answer:
          'Ja. Legen Sie mehrere .webp-Dateien bis zu 25 MB pro Datei in die Warteschlange und laden Sie alles zusammen in compressmypic_webp_to_png.zip herunter. Jede Datei wird unabhängig umgewandelt, sodass eine fehlerhafte Datei die anderen nie blockiert.',
      },
      {
        question: 'Wie groß darf eine einzelne WebP-Datei hier sein?',
        answer:
          'Jede WebP-Datei darf bis zu 25 MB groß sein – das deckt hochauflösende Downloads und große Screenshots ab. Da die Umwandlung auf Ihrem Gerät läuft, werden große Dateien mit lokaler CPU-Geschwindigkeit verarbeitet, ohne Wartezeit für Uploads.',
      },
      {
        question: 'Gibt es einen Qualitätsregler für WebP zu PNG?',
        answer:
          'Nein, und er ist auch nicht nötig: PNG ist ein verlustfreies Format, sodass es keinen Kompromiss zwischen Qualität und Größe einzustellen gibt. Das Tool zeigt stattdessen einen Hinweis auf verlustfreie PNG-Kodierung an, und jedes Pixel wird exakt erhalten.',
      },
      {
        question: 'Wo kann ich die umgewandelten PNG-Dateien verwenden?',
        answer:
          'Überall, wo PNG akzeptiert wird: Photoshop, Figma, Canva, PowerPoint, Word, Druckereien und Upload-Portale, die WebP ablehnen. PNG ist das universellste bearbeitbare Rasterformat – genau deshalb gibt es diese Umwandlung.',
      },
      {
        question: 'Behält der Konverter WebP-Metadaten wie EXIF?',
        answer:
          'Nein. Beim Zeichnen der Pixel auf HTML5 Canvas werden eingebettete EXIF-, XMP- und ICC-Profildaten entfernt, sodass die ausgegebenen PNGs schlank sind und keine versteckten Standort- oder Kameradetails enthalten.',
      },
      {
        question: 'Wie bestätige ich vor dem Herunterladen, dass die Transparenz überlebt hat?',
        answer:
          'Die Ergebnisminiatur zeigt transparente Bereiche auf einem Schachbretthintergrund, und die Schaltfläche „Vergleichen“ öffnet eine geteilte Ansicht, in der Sie über das Bild fahren können, um zu bestätigen, dass Kanten sanft überblenden. Wenn der Hintergrund einfarbig aussieht, hatte das Quell-WebP keine Transparenz.',
      },
      {
        question: 'Kann ich WebP-Screenshots mit Text in PNG umwandeln, ohne Qualität zu verlieren?',
        answer:
          'Ja. Da PNG verlustfrei ist, bleiben Screenshot-Text, UI-Beschriftungen und feine Linien pixelgenau – schärfer als jede JPG-Neukodierung. Das macht dieses Tool zur richtigen Wahl, wenn ein Screenshot später bearbeitet oder gedruckt werden muss.',
      },
      {
        question: 'Welchen Dateinamen behält der PNG-Download?',
        answer:
          'Einzelne Downloads behalten Ihren bereinigten ursprünglichen Dateinamen mit der Erweiterung .png, sodass aus sticker.webp die Datei sticker.png wird. Stapel mit zwei oder mehr Dateien werden gebündelt in compressmypic_webp_to_png.zip exportiert.',
      },
      {
        question: 'Funktioniert WebP zu PNG auf Smartphones?',
        answer:
          'Ja. Upload-Bereich, Stapelwarteschlange, Vergleichsansicht und ZIP-Download funktionieren in Safari auf iOS und Chrome auf Android, ohne dass eine App installiert werden muss. Große Stapel dauern auf Smartphone-Prozessoren nur etwas länger.',
      },
      {
        question: 'Wann sollte ich WebP zu PNG statt WebP zu JPG wählen?',
        answer:
          'Wählen Sie PNG, wenn Sie Transparenz behalten müssen oder pixelgenaue, verlustfreie Qualität zum Bearbeiten, Gestalten oder Drucken brauchen. Wählen Sie JPG, wenn Sie die kleinste, breit kompatible Datei benötigen und mit einem einfarbigen Hintergrund und leichtem Komprimierungsverlust leben können.',
      },
      {
        question: 'Kann eine WebP-Datei ohne Endung umgewandelt werden?',
        answer:
          'Nicht direkt – diese Seite filtert Eingaben nach der Endung .webp und dem WebP-MIME-Typ, benennen Sie die Datei also zuerst so um, dass sie auf .webp endet. Wenn die Datei in Wirklichkeit ein JPG oder PNG ist, das von der Website falsch benannt wurde, nutzen Sie stattdessen den passenden Konverter.',
      },
      {
        question: 'Warum braucht ein Designer PNG statt WebP?',
        answer:
          'Design-Tools, ebenenbasierte Editoren und Druck-Workflows benötigen PNG oft für Masken, Auswahlen und transparente Overlays, die WebP in ihren Abläufen nicht bieten kann. PNG garantiert außerdem, dass jede künftige Bearbeitung von exakten Pixeln ausgeht, nicht von einer verlustbehafteten Dekodierung.',
      },
      {
        question: 'Unterstützt das Tool WebP-Dateien mit verlustfreier Kodierung?',
        answer:
          'Ja. Verlustfreie WebP-Dateien werden im Browser sauber dekodiert und als verlustfreies PNG neu kodiert, wobei jedes Pixel erhalten bleibt. Ob das Quell-WebP verlustbehaftet oder verlustfrei war: Die PNG-Ausgabe fügt keinen weiteren Qualitätsverlust hinzu.',
      },
      {
        question: 'Was geschieht, wenn eine WebP-Datei beschädigt ist oder kein echtes WebP ist?',
        answer:
          'Diese Datei zeigt eine klare Fehlermeldung pro Datei, die erklärt, dass sie nicht dekodiert werden konnte, während die anderen Dateien Ihres Stapels normal weiter umgewandelt werden. Wenn Sie das ursprüngliche WebP erneut von seiner Quelle herunterladen, behebt das meist eine abgeschnittene oder falsch benannte Datei.',
      },
    ],
    relatedSlugs: ['/webp-to-jpg', '/png-to-webp', '/jpg-to-png', '/image-converter'],
  },
  {
    slug: '/svg-to-png',
    name: 'SVG-zu-PNG-Konverter',
    shortDescription: 'Rastern Sie SVG-Vektorgrafiken zu scharfen transparenten PNGs in 1×–4×.',
    category: 'convert',
    seoTitle: 'SVG in PNG umwandeln – kostenlos online',
    seoDescription:
      'Wandeln Sie SVG-Vektoren kostenlos online im Browser in transparentes PNG um. Scharfe PNGs in 1×, 2×, 3× oder 4×, mit klaren Grenzen bei externen Inhalten.',
    h1: 'Kostenloser Online-Konverter: SVG in PNG umwandeln',
    subtitle:
      'Rastern Sie SVG-Logos, Symbole und Illustrationen mit unserem kostenlosen SVG-zu-PNG-Konverter vollständig in Ihrem Browser zu scharfen transparenten PNGs. Der Konverter wurde für Designer und Entwickler entwickelt, die High-DPI-Exporte für Folien, Dokumente und App-Stores benötigen: Er rendert eigenständige SVGs mit 1×, 2×, 3× oder 4× Skalierung (bis zu 8000 px) – mit Stapelverarbeitung und ZIP-Downloads.',
    howToSteps: [
      {
        title: 'SVG-Dateien bis zu 25 MB pro Datei ablegen',
        description:
          'Laden Sie ein oder mehrere .svg-Vektordateien mit eingebetteten Formen, Pfaden, Verläufen oder Stilen hoch.',
      },
      {
        title: 'Raster-Exportmaßstab wählen (1×–4×)',
        description:
          'Wählen Sie 1× für die intrinsische Größe der SVG oder 2×–4× für scharfe Retina- und High-DPI-PNG-Exporte.',
      },
      {
        title: 'Nach Maßstabsänderung auf „Alle erneut umwandeln“ klicken',
        description:
          'Maßstabsänderungen gelten erst, wenn Sie erneut umwandeln, damit Vorschau und Download der von Ihnen gewählten Größe entsprechen.',
      },
      {
        title: 'Hinweis zu externen Inhalten beachten',
        description:
          'Externe Bilder, Stylesheets und Webfonts innerhalb einer SVG werden durch die Canvas-Sicherheit des Browsers blockiert und erscheinen nicht im PNG.',
      },
      {
        title: 'Das gerasterte PNG vergleichen',
        description:
          'Klicken Sie bei einer Karte auf „Vergleichen“, um scharfe Kanten und Transparenz in der geteilten Ansicht zu prüfen.',
      },
      {
        title: 'PNG-Dateien oder „Alle herunterladen (ZIP)“',
        description:
          'Speichern Sie einzelne .png-Dateien oder bündeln Sie den Stapel per Klick in compressmypic_svg_to_png.zip.',
      },
    ],
    features: [
      {
        title: 'High-DPI-Export in 1×, 2×, 3× und 4×',
        description: 'Skalieren Sie kleine 24-px-Symbole oder 100-px-Logos vor der Rasterung sauber auf bis zu 4× Auflösung.',
      },
      {
        title: 'Transparenter Hintergrund erhalten',
        description: 'Exportiert scharfe PNGs mit Alphakanal, bereit für Folien, Web-Kopfzeilen und Design-Präsentationen.',
      },
      {
        title: 'Ehrlicher Umfang des eigenständigen Canvas',
        description: 'Dokumentiert klar, dass eingebettete SVG-Vektorformen und -Stile sauber gerendert werden, während externe Bild-URLs oder externe Webfonts innerhalb von SVGs durch die Canvas-Sandbox des Browsers blockiert werden können.',
      },
      {
        title: 'Stapel-Rasterung von SVG',
        description: 'Wandeln Sie ganze Symbolpakete in einem Durchgang in PNG um und laden Sie eine ZIP-Datei herunter.',
      },
    ],
    faqs: [
      {
        question: 'Meine SVG nutzt ein verlinktes Foto – warum fehlt es im PNG?',
        answer:
          'Aus Sicherheitsgründen isolieren Browser SVG-Dateien, die auf HTML5 Canvas gezeichnet werden, und blockieren das Laden externer <image>-URLs – ein Foto, das aus dem Web verlinkt ist, kann daher während der Rasterung nicht geladen werden. Betten Sie das Bild direkt in die SVG-Datei ein oder ersetzen Sie es durch eingebettete Vektorformen, dann wird das PNG vollständig gerendert.',
      },
      {
        question: 'Kann ich einen Webfont innerhalb einer SVG für den PNG-Export verwenden?',
        answer:
          'Externe Webfonts, die per URL referenziert werden, werden von derselben Canvas-Sandbox blockiert, sodass Text in einer entfernten Schrift auf eine Systemschrift zurückfällt oder verschwindet. Verwenden Sie Systemschriften, wandeln Sie Text in Ihrem Editor in Pfade um oder betten Sie die Fontdaten direkt in die SVG-Datei ein.',
      },
      {
        question: 'Welchen Maßstab sollte ich wählen, um aus einem 24-px-Symbol ein scharfes 96-px-PNG zu machen?',
        answer:
          'Wählen Sie unter „Raster-Exportmaßstab“ 4× und klicken Sie auf „Alle erneut umwandeln“: Aus einem 24-px-Symbol wird ein scharfes 96-px-PNG, weil Vektoren in der größeren Größe neu gerendert werden, statt Pixel zu strecken. Nutzen Sie 2× für einen 48-px-Export, und denken Sie daran, dass die Ausgabe auf der längsten Seite auf 8000 px begrenzt ist.',
      },
      {
        question: 'Wie groß darf ein PNG sein, das eine SVG hier erzeugen kann?',
        answer:
          'Der Exportmaßstab ist auf der längsten Seite auf 8000 px begrenzt, sodass eine sehr große SVG bei 4× an dieser Obergrenze stoppt. Für die meisten Symbole und Logos spielt die Grenze nie eine Rolle – ein 100-px-Logo bei 4× ist nur 400 px groß, weit unter dem Limit.',
      },
      {
        question: 'Behält SVG zu PNG den transparenten Hintergrund?',
        answer:
          'Ja. Sofern die SVG selbst kein Hintergrundrechteck malt, behält das exportierte PNG einen sauberen, alpha-transparenten Hintergrund – bereit für Folien, Kopfzeilen und Design-Präsentationen. Die Vorschau zeigt Transparenz auf einem Schachbrettmuster.',
      },
      {
        question: 'Werden SVG-Dateien auf einen Server hochgeladen?',
        answer:
          'Nein. Die Rasterung läuft über HTML5 Canvas in Ihrem eigenen Browser-Tab, sodass Ihre Vektordateien Ihren Computer nie verlassen. Wenn Sie den Tab schließen, werden sie aus dem Browser-Speicher gelöscht.',
      },
      {
        question: 'Kann ich ein ganzes Symbolpaket mit SVGs auf einmal umwandeln?',
        answer:
          'Ja. Legen Sie mehrere .svg-Dateien bis zu 25 MB pro Datei in die Warteschlange, wählen Sie einen Maßstab für den gesamten Stapel und laden Sie alles zusammen in compressmypic_svg_to_png.zip herunter. Jedes Symbol wird unabhängig gerastert.',
      },
      {
        question: 'Wodurch schlägt eine SVG-Rasterung mit einem Fehler fehl?',
        answer:
          'Die häufigste Ursache ist ungültiges XML: nicht geschlossene Tags, fehlerhafte Attribute oder eine Datei, die gar kein SVG-Markup ist. Öffnen Sie die Datei in einem Texteditor oder Vektor-Editor, beheben Sie den Syntaxfehler und versuchen Sie es erneut – die Fehlermeldung erscheint pro Datei, sodass andere SVGs weiterhin umgewandelt werden.',
      },
      {
        question: 'Werden Verläufe und Deckkraft innerhalb einer SVG korrekt gerendert?',
        answer:
          'Ja. Eingebettete lineare und radiale Verläufe, Deckkraft-Attribute und Füllungen mit Stil, die innerhalb der SVG definiert sind, werden sauber auf Canvas gerendert. Nur Inhalte, die von außerhalb der Datei geladen werden – externe Bilder, Stylesheets und Fonts – sind blockiert.',
      },
      {
        question: 'Wird Text innerhalb meiner SVG als scharfer PNG-Text exportiert?',
        answer:
          'Ja, wenn der Text Systemschriften nutzt, die auf Ihrem Gerät installiert sind, wird er in jedem Maßstab scharf gerastert. Text in einem externen Webfont fällt auf eine Standardschrift zurück – wandeln Sie Text daher in Illustrator, Figma oder Inkscape in Pfade um, um garantierte Ergebnisse zu erhalten.',
      },
      {
        question: 'Kann ich eine SVG umwandeln, die auf eine externe CSS-Datei verweist?',
        answer:
          'Nein. Externe Stylesheets werden durch die Canvas-Sicherheit des Browsers blockiert, sodass Klassen, die in einer verlinkten .css-Datei definiert sind, nicht angewendet werden und Formen ungestylt gerendert werden können. Verschieben Sie die Stile mit Stilattributen oder einem <style>-Block innerhalb der SVG selbst nach innen.',
      },
      {
        question: 'Ist die PNG-Ausgabe verlustfrei?',
        answer:
          'Ja. Die gerasterten Pixel werden als verlustfreies PNG gespeichert, sodass Kanten, Text und Flächenfarben in der exportierten Größe pixelgenau bleiben. Exportieren Sie erneut mit einem höheren Maßstab, wenn Sie mehr Details benötigen – es gibt keinen Qualitätsregler, weil PNG keinen verlustbehafteten Schritt hat.',
      },
      {
        question: 'Wie groß ist das PNG bei 1× Skalierung?',
        answer:
          'Bei 1× entspricht das PNG den intrinsischen Abmessungen der SVG aus ihren Breiten- und Höhenattributen oder ihrer viewBox. Ein 24×24-Symbol wird als 24×24 Pixel exportiert, während eine SVG ohne intrinsische Größe die Abmessungen ihrer viewBox nutzt.',
      },
      {
        question: 'Kann ich SVG-Dateien auf meinem Smartphone umwandeln?',
        answer:
          'Ja. Upload-Bereich, Maßstabsauswahl, Vergleichsansicht und ZIP-Download funktionieren in Safari auf iOS und Chrome auf Android, ohne dass eine App installiert werden muss. Große Symbolpakete dauern auf Smartphone-Prozessoren nur etwas länger.',
      },
      {
        question: 'Welchen Dateinamen behält das exportierte PNG?',
        answer:
          'Einzelne Downloads behalten Ihren bereinigten ursprünglichen Dateinamen mit der Erweiterung .png, sodass aus logo.svg die Datei logo.png wird. Stapel mit zwei oder mehr Dateien werden gebündelt in compressmypic_svg_to_png.zip exportiert.',
      },
      {
        question: 'Unterstützt der Konverter SVG-Animationen (SMIL/CSS)?',
        answer:
          'Nein. Die Rasterung erfasst ein einzelnes statisches Bild der SVG, sodass SMIL- und CSS-Animationen nicht ins PNG übernommen werden. Exportieren Sie die Animation für ein animiertes Ergebnis stattdessen als Video oder GIF aus Ihrem Design-Tool.',
      },
      {
        question: 'Kann ich eine SVG rastern, in der ein Bild als Data-URI eingebettet ist?',
        answer:
          'In der Regel ja. Bilder, die direkt in der Datei als Base64-Data-URIs eingebettet sind, gehören zur SVG selbst – es wird nichts von außen geladen, und sie werden in der Regel gerendert. Verlinkte Bilder mit http-URLs sind diejenigen, die von der Canvas-Sicherheit blockiert werden.',
      },
      {
        question: 'Wann sollte ich SVG zu PNG nutzen, statt die SVG zu behalten?',
        answer:
          'Nutzen Sie PNG, wenn das Ziel ein Rasterbild benötigt: PowerPoint, Word, Social-Media-Beiträge, App-Store-Screenshots oder jedes Tool, das SVG nicht öffnen kann. Behalten Sie die SVG, wenn die Grafik auf einer Website unendlich skalierbar bleiben muss.',
      },
      {
        question: 'Verändert die Umwandlung von SVG in PNG die Farben?',
        answer:
          'Farben werden so gerendert, wie sie in der SVG definiert sind, und die Ausgabe ist ein Standard-sRGB-PNG. Canvas entfernt eingebettete ICC-Profile, sodass druckkritische Farbabstimmung in der ursprünglichen Vektordatei bleiben sollte – für Bildschirme ist der sichtbare Unterschied vernachlässigbar.',
      },
      {
        question: 'Wie groß darf eine SVG-Datei maximal sein?',
        answer:
          'Jede SVG-Datei darf bis zu 25 MB groß sein – das deckt selbst riesige illustrierte Dateien mit Tausenden von Pfaden ab. Sehr komplexe SVGs brauchen auf Ihrem Gerät nur ein oder zwei Sekunden länger für die Rasterung.',
      },
    ],
    relatedSlugs: ['/favicon-generator', '/png-to-webp', '/image-resizer', '/image-converter'],
  },
  {
    slug: '/avif-to-jpg',
    name: 'AVIF-zu-JPG-Konverter',
    shortDescription: 'Wandeln Sie AVIF-Bilder über den Decoder Ihres Browsers in universelles JPG um.',
    category: 'convert',
    seoTitle: 'AVIF in JPG umwandeln – kostenlos online',
    seoDescription:
      'Wandeln Sie AVIF-Bilder kostenlos online in universelles JPG um. Native AVIF-Dekodierung, Hintergrundfarbe für Transparenz, Qualitätsregler und ZIP-Export.',
    h1: 'Kostenloser Online-Konverter: AVIF in JPG umwandeln',
    subtitle:
      'Verwandeln Sie moderne .avif-Bilder mit unserem kostenlosen AVIF-zu-JPG-Konverter in universell unterstützte .jpg-Dateien – mithilfe des integrierten AVIF-Decoders Ihres Browsers. Der Konverter wurde für alle entwickelt, die eine AVIF-Datei heruntergeladen haben, die ihr Editor, ihre Office-App oder ihr Upload-Formular nicht öffnen kann: Er wandelt AVIF-Dateien bis zu 25 MB pro Datei mit standardmäßig 88 % Qualität um, mit Hintergrundfarben-Auswahl und Stapel-Export als ZIP – nichts wird jemals hochgeladen.',
    howToSteps: [
      {
        title: 'AVIF-Bilder bis zu 25 MB pro Datei ablegen',
        description:
          'Laden Sie .avif-Dateien in einem modernen Browser mit nativer AVIF-Dekodierung hoch – Chrome, Edge, Firefox oder Safari.',
      },
      {
        title: 'Hintergrundfarbe für transparente Bereiche wählen',
        description:
          'Wählen Sie Weiß (#ffffff), Schwarz (#000000), Hellgrau (#f8fafc) oder eine beliebige eigene Hex-Farbe, denn JPG kann keine Transparenz speichern.',
      },
      {
        title: 'JPG-Ausgabequalität einstellen (20 %–100 %)',
        description:
          'Behalten Sie die scharfen 88 % als Standard bei oder ziehen Sie den Regler in Richtung 20 % für winzige Dateien und 100 % für maximale Details, und klicken Sie dann auf „Alle erneut umwandeln“.',
      },
      {
        title: 'JPG mit dem ursprünglichen AVIF vergleichen',
        description:
          'Klicken Sie bei einer Karte auf „Vergleichen“, um Details, Farben und Kanten in der geteilten Ansicht zu prüfen, bevor Sie speichern.',
      },
      {
        title: 'JPG-Dateien oder „Alle herunterladen (ZIP)“',
        description:
          'Speichern Sie einzelne .jpg-Dateien oder bündeln Sie den Stapel per Klick in compressmypic_avif_to_jpg.zip.',
      },
    ],
    features: [
      {
        title: 'Native AVIF-Dekodierung im Browser',
        description: 'Nutzt den Hardware- oder Software-AVIF-Decoder Ihres modernen Browsers lokal – ohne Server-Anfragen.',
      },
      {
        title: 'Ehrliche Formatkompatibilität',
        description: 'Streng für die Dekodierung von AVIF in universelles JPG gebaut (für andere Formate nutzen Sie die JPG-, PNG- und WebP-Tools – AVIF-Kodierung und -Ausgabe werden nicht angeboten).',
      },
      {
        title: 'Hintergrundfarben-Auswahl für Transparenz',
        description: 'Transparente AVIF-Bereiche werden sauber auf Weiß oder Ihre eigene Hex-Hintergrundfarbe gelegt.',
      },
      {
        title: 'Stapel-Export als ZIP',
        description: 'Wandeln Sie mehrere AVIF-Downloads in einer Browser-Sitzung in JPG um.',
      },
    ],
    faqs: [
      {
        question: 'Was ist AVIF, und warum können manche Apps es nicht öffnen?',
        answer:
          'AVIF ist ein modernes Bildformat auf Basis der AV1-Videokomprimierung, das Fotos bei deutlich kleineren Größen als JPG speichert. Weil es neuer ist, haben viele ältere Editoren, Office-Pakete, Drucker und Upload-Portale nie einen AVIF-Decoder hinzugefügt – die Umwandlung in JPG ist daher der schnellste Weg, das Bild überall nutzbar zu machen.',
      },
      {
        question: 'Welche Browser können AVIF für die Umwandlung hier dekodieren?',
        answer:
          'Moderne Chrome-, Edge-, Firefox- und Safari-Browser dekodieren AVIF nativ im Browser – genau das nutzt dieses Tool. Wenn Sie die Seite in einem sehr alten Browser öffnen, zeigt jede Datei stattdessen einen klaren Fehler – ein Browser-Update behebt das.',
      },
      {
        question: 'Was geschieht, wenn mein Browser eine AVIF-Datei nicht dekodieren kann?',
        answer:
          'Die Datei zeigt eine ausdrückliche Fehlermeldung pro Datei, die erklärt, dass Ihr Browser sie nicht dekodieren konnte, während alle anderen Dateien Ihres Stapels normal weiter umgewandelt werden. Der Wechsel zu einer aktuellen Version von Chrome, Firefox, Edge oder Safari löst das in fast jedem Fall.',
      },
      {
        question: 'Verliert die Umwandlung von AVIF in JPG an Qualität?',
        answer:
          'Ein gewisser Verlust ist unvermeidbar, weil JPG Pixel mit verlustbehafteter Komprimierung neu kodiert, während AVIF bei gleicher Qualität deutlich effizienter ist. Bei den standardmäßigen 88 % ist der Unterschied für Fotos praktisch unsichtbar; nur extreme Pixelgenauigkeit bei feinen Texturen zeigt eine leichte Weichzeichnung.',
      },
      {
        question: 'Werden transparente AVIF-Bereiche im JPG schwarz?',
        answer:
          'Nein. Transparente Bereiche werden mit der von Ihnen gewählten Hintergrundfarbe gefüllt – standardmäßig Weiß –, sodass Logos und Freisteller einen sauberen, einfarbigen Hintergrund erhalten statt eines schwarzen Kastens. Wählen Sie vor der Umwandlung Schwarz, Hellgrau oder eine beliebige eigene Hex-Farbe.',
      },
      {
        question: 'Kann ich AVIF-Bilder mit Transparenz sauber in JPG umwandeln?',
        answer:
          'Ja. Die Hintergrundfarben-Auswahl überblendet halbtransparente Kanten sanft über Ihren gewählten Hintergrund, sodass weiche Schatten und weichgezeichnete Kurven natürlich aussehen, statt in harte Umrisse zu schneiden. Prüfen Sie die Überblendung in der Vergleichsansicht.',
      },
      {
        question: 'Werden AVIF-Dateien auf einen Server hochgeladen?',
        answer:
          'Nein. Dekodierung und Neukodierung geschehen beide lokal mit dem nativen AVIF-Decoder Ihres Browsers und HTML5 Canvas, sodass Ihre Bilder Ihr Gerät nie verlassen. Wenn Sie den Tab schließen, werden sie aus dem Browser-Speicher gelöscht.',
      },
      {
        question: 'Wie wandle ich mehrere AVIF-Downloads in einem Durchgang um?',
        answer:
          'Legen Sie mehrere .avif-Dateien bis zu 25 MB pro Datei in die Warteschlange, wählen Sie eine Hintergrundfarbe und eine Qualität für den gesamten Stapel und laden Sie alles zusammen in compressmypic_avif_to_jpg.zip herunter. Jede Datei wird unabhängig umgewandelt.',
      },
      {
        question: 'Wie groß darf eine AVIF-Datei maximal sein?',
        answer:
          'Jede AVIF-Datei darf bis zu 25 MB groß sein – das deckt hochauflösende Downloads und Kameraaufnahmen ab. Da die Dekodierung auf Ihrem Gerät läuft, werden große Dateien mit lokaler CPU-Geschwindigkeit verarbeitet, ohne Wartezeit für Uploads.',
      },
      {
        question: 'Gibt es eine Möglichkeit, hier ein JPG in AVIF umzuwandeln?',
        answer:
          'Nein. HTML5 Canvas kann AVIF nicht browserübergreifend universell kodieren, sodass diese Website AVIF nur in zuverlässige JPG-, PNG- und WebP-Ausgaben dekodiert. Für AVIF-Ausgabe bräuchten Sie einen dedizierten Desktop-Encoder.',
      },
      {
        question: 'Behält das JPG dieselben Pixelmaße wie das AVIF?',
        answer:
          'Ja. Jede umgewandelte .jpg-Datei behält 100 % der exakten Breite und Höhe des ursprünglichen AVIF – nichts wird beschnitten oder skaliert. Verwenden Sie danach das Tool „Bildgröße ändern“, wenn Sie zusätzlich kleinere Abmessungen benötigen.',
      },
      {
        question: 'Welche Qualitätsprozentzahl passt am besten zu AVIF-Fotos?',
        answer:
          'Die standardmäßigen 88 % sind ideal für die meisten Fotos: Details bleiben scharf, während Dateien klein bleiben. Für sehr detailreiche Aufnahmen oder Bilder, die Sie weiter bearbeiten möchten, erhöhen Sie die Qualität auf 92 % oder 95 %; für schnelles Teilen reichen 80 % meist aus.',
      },
      {
        question: 'Wie sehen HDR- oder Wide-Gamut-AVIF-Fotos nach der Umwandlung aus?',
        answer:
          'Sie werden als Standard-sRGB-JPG exportiert, sodass extreme HDR-Lichter in den normalen Anzeigebereich abgebildet werden und sehr gesättigte Wide-Gamut-Farben leicht in Richtung sRGB verschoben werden. Für Alltagsfotos wirkt das Ergebnis natürlich; für farbkritische Arbeiten behalten Sie das ursprüngliche AVIF.',
      },
      {
        question: 'Kann ich das umgewandelte JPG vor dem Herunterladen prüfen?',
        answer:
          'Ja. Klicken Sie bei einer Ergebniskarte auf „Vergleichen“, um die geteilte Ansicht zu öffnen und über das Bild zu fahren, um Details, Farben und Kanten mit dem ursprünglichen AVIF zu vergleichen. Jede Karte zeigt außerdem die ursprüngliche und die umgewandelte Größe.',
      },
      {
        question: 'Wenn das erste Ergebnis falsch aussieht, kann ich die Einstellungen anpassen und erneut versuchen?',
        answer:
          'Ja. Wählen Sie jederzeit ein anderes Hintergrundfarbfeld oder bewegen Sie den Qualitätsregler und klicken Sie auf „Alle erneut umwandeln“, um jede geladene Datei neu zu erzeugen, ohne erneut hochzuladen. Ihre ursprünglichen AVIF-Dateien bleiben in der Warteschlange, bis Sie sie entfernen.',
      },
      {
        question: 'Welchen Dateinamen behält der JPG-Download?',
        answer:
          'Einzelne Downloads behalten Ihren bereinigten ursprünglichen Dateinamen mit der Erweiterung .jpg, sodass aus photo.avif die Datei photo.jpg wird. Stapel mit zwei oder mehr Dateien werden gebündelt in compressmypic_avif_to_jpg.zip exportiert.',
      },
      {
        question: 'Funktioniert AVIF zu JPG in mobilen Browsern?',
        answer:
          'Ja, in modernen mobilen Browsern mit nativer AVIF-Dekodierung, etwa aktuellem Chrome auf Android und Safari auf iOS. Hintergrundfarben-Auswahl, Qualitätsregler und ZIP-Download funktionieren ohne Installation einer App.',
      },
      {
        question: 'Wann sollte ich AVIF in JPG statt AVIF in PNG umwandeln?',
        answer:
          'Wählen Sie JPG, wenn Sie eine kleine, universell kompatible Datei für E-Mails, Office oder Upload-Portale benötigen. Wählen Sie PNG, wenn Sie Transparenz behalten müssen oder pixelgenaue, verlustfreie Qualität zum Bearbeiten brauchen – beachten Sie dabei, dass PNG-Dateien deutlich größer sein werden.',
      },
      {
        question: 'Warum ist das JPG manchmal größer als das AVIF?',
        answer:
          'AVIF komprimiert deutlich effizienter als JPG, sodass ein kleines AVIF, das mit 88 % als JPG neu kodiert wird, leicht größer als die Quelle enden kann. Das ist zu erwarten: Sie tauschen Dateigröße gegen universelle Kompatibilität. Wenn Sie die Qualität in Richtung 75 % senken, schrumpft das JPG meist wieder.',
      },
      {
        question: 'Entfernt der Konverter AVIF-Metadaten?',
        answer:
          'Ja. Beim Zeichnen der Pixel auf HTML5 Canvas werden eingebettete EXIF-, XMP- und ICC-Profildaten entfernt, sodass die ausgegebenen JPGs schlank sind und keine versteckten Standort- oder Kameradetails enthalten.',
      },
    ],
    relatedSlugs: ['/webp-to-jpg', '/heic-to-jpg', '/jpg-to-webp', '/image-converter'],
  },
  {
    slug: '/bmp-to-jpg',
    name: 'BMP-zu-JPG-Konverter',
    shortDescription: 'Wandeln Sie riesige unkomprimierte BMP-Bitmaps in kompakte JPG-Dateien um.',
    category: 'convert',
    seoTitle: 'BMP in JPG umwandeln – kostenlos online',
    seoDescription:
      'Wandeln Sie unkomprimierte BMP-Bitmaps kostenlos online in kompaktes JPG um. Dateien privat um 85–95 % reduzieren – mit Qualitätsregler und ZIP-Download.',
    h1: 'Kostenloser Online-Konverter: BMP in JPG umwandeln',
    subtitle:
      'Verwandeln Sie riesige unkomprimierte Windows-BMP-Bitmaps mit unserem kostenlosen BMP-zu-JPG-Konverter direkt in Ihrem Browser in leichte, teilbare JPG-Dateien. Der Konverter wurde für alle entwickelt, die Ordner mit alten .bmp-Screenshots, Scans oder Paint-Exporten aufräumen: Er wandelt BMP-Dateien bis zu 25 MB pro Datei mit standardmäßig 88 % Qualität um – in der Regel schrumpfen sie dabei um 85–95 % – mit Stapelverarbeitung und ZIP-Downloads.',
    howToSteps: [
      {
        title: 'BMP-Bitmaps bis zu 25 MB pro Datei ablegen',
        description:
          'Laden Sie ein oder mehrere .bmp-Dateien aus Windows-Screenshots, Scans oder alten Ordnern in den Upload-Bereich.',
      },
      {
        title: 'JPG-Ausgabequalität einstellen (20 %–100 %)',
        description:
          'Behalten Sie die scharfen 88 % als Standard bei oder ziehen Sie den Regler in Richtung 20 % für winzige Dateien und 100 % für maximale Details, und klicken Sie dann auf „Alle erneut umwandeln“.',
      },
      {
        title: 'Einsparung bei jeder Karte prüfen',
        description:
          'Jedes Ergebnis zeigt die riesige ursprüngliche BMP-Größe, die kompakte JPG-Größe und die eingesparte Prozentzahl.',
      },
      {
        title: 'JPG mit dem ursprünglichen BMP vergleichen',
        description:
          'Klicken Sie bei einer Karte auf „Vergleichen“, um in der geteilten Ansicht zu prüfen, ob Text und Details scharf geblieben sind.',
      },
      {
        title: 'JPG-Dateien oder „Alle herunterladen (ZIP)“',
        description:
          'Speichern Sie einzelne .jpg-Dateien oder bündeln Sie den Stapel per Klick in compressmypic_bmp_to_jpg.zip.',
      },
    ],
    features: [
      {
        title: 'Typischerweise über 90 % Größenreduktion',
        description: 'Unkomprimierte BMP-Bitmaps speichern rohe Pixel; die JPG-Komprimierung schrumpft sie für E-Mails und das Web dramatisch.',
      },
      {
        title: 'Pixelmaße bleiben erhalten',
        description: 'Behält die exakte ursprüngliche Breite und Höhe, während das Containerformat modernisiert wird.',
      },
      {
        title: 'Stapelwarteschlange + ZIP-Download',
        description: 'Räumen Sie Ordner mit alten .bmp-Screenshots oder Scans in einem schnellen Durchgang auf.',
      },
      {
        title: '100 % Datenschutz auf dem Gerät',
        description: 'Keine Uploads – die Umwandlung geschieht lokal auf Ihrem Computer.',
      },
    ],
    faqs: [
      {
        question: 'Warum sind BMP-Dateien so riesig im Vergleich zu JPG?',
        answer:
          'BMP ist ein unkomprimiertes Format: Es speichert nahezu jedes Pixel als rohe Farbdaten mit fast keiner Komprimierung, sodass ein einzelner Screenshot mehrere zehn Megabyte wiegen kann. JPG nutzt intelligente verlustbehaftete Komprimierung, die Daten verwirft, die Ihre Augen kaum bemerken – deshalb schrumpft dasselbe Bild dramatisch.',
      },
      {
        question: 'Wie viel Dateigröße kann ich bei der Umwandlung von BMP in JPG voraussichtlich sparen?',
        answer:
          'Da BMP-Dateien in der Regel unkomprimiert sind, schrumpft die Umwandlung in JPG mit 88 % die Dateigröße routinemäßig um 85 % bis 95 % – aus einem 10-MB-Bitmap wird oft ein 500-KB- bis 1,5-MB-JPG. Fotografische Scans sparen am meisten, während flache, einfarbige Grafiken etwas weniger sparen.',
      },
      {
        question: 'Verändert die Umwandlung von BMP in JPG die Bildabmessungen?',
        answer:
          'Nein. Jede umgewandelte .jpg-Datei behält 100 % der exakten Pixelbreite und -höhe des ursprünglichen BMP – nichts wird beschnitten oder skaliert. Verwenden Sie danach das Tool „Bildgröße ändern“, wenn Sie zusätzlich kleinere Abmessungen benötigen.',
      },
      {
        question: 'Welche Qualitätseinstellung hält BMP-Screenshots lesbar?',
        answer:
          'Die standardmäßigen 88 % halten Screenshot-Text und UI-Details scharf und entfernen dabei den größten Teil des Bitmap-Ballasts. Für Scans mit feinem Druck oder kleinen Schriften erhöhen Sie die Qualität auf 92 % oder 95 %; für schnelles Teilen reichen 80 % meist aus.',
      },
      {
        question: 'Werden BMP-Dateien auf einen Server hochgeladen?',
        answer:
          'Nein. Die Umwandlung läuft über HTML5 Canvas in Ihrem eigenen Browser-Tab, sodass Ihre Screenshots und Scans Ihren Computer nie verlassen. Wenn Sie den Tab schließen, werden sie aus dem Browser-Speicher gelöscht.',
      },
      {
        question: 'Wie wandle ich einen ganzen Ordner voller BMP-Scans im Stapel um?',
        answer:
          'Legen Sie mehrere .bmp-Dateien bis zu 25 MB pro Datei in die Warteschlange, wählen Sie eine Qualitätseinstellung für den gesamten Stapel und laden Sie alles zusammen in compressmypic_bmp_to_jpg.zip herunter. Jede Datei wird unabhängig umgewandelt.',
      },
      {
        question: 'Wie groß darf eine BMP-Datei maximal sein?',
        answer:
          'Jede BMP-Datei darf bis zu 25 MB groß sein – das deckt große Screenshots und hochauflösende Scans ab. Da die Umwandlung auf Ihrem Gerät läuft, werden große Dateien mit lokaler CPU-Geschwindigkeit verarbeitet, ohne Wartezeit für Uploads.',
      },
      {
        question: 'Kann ich BMP-Dateien ohne Internetverbindung umwandeln, sobald die Seite geöffnet ist?',
        answer:
          'Ja. Sobald die Seite in Ihrem Browser geladen ist, läuft die Umwandlung vollständig in lokalem JavaScript und HTML5 Canvas, ohne Server-Anfragen. Internet benötigen Sie erst wieder, um die Seite selbst zu laden oder die fertigen Dateien herunterzuladen.',
      },
      {
        question: 'Öffnet sich das JPG in jedem Programm?',
        answer:
          'Ja. Standardmäßige Baseline-RGB-.jpg-Dateien öffnen sich in praktisch jedem Betrachter, Editor, Browser, E-Mail-Client und Drucker – deutlich breiter als BMP, das viele moderne Apps und Websites gar nicht mehr akzeptieren.',
      },
      {
        question: 'Behält der Konverter BMP-Transparenz?',
        answer:
          'BMP-Dateien tragen selten einen nutzbaren Alphakanal, und JPG unterstützt Transparenz überhaupt nicht – ausgegebene JPGs sind daher immer deckend. Wenn Ihre Grafik Transparenz benötigt, wandeln Sie stattdessen in PNG oder WebP um, die Alpha erhalten.',
      },
      {
        question: 'Was geschieht mit der Farbtiefe eines BMP während der Umwandlung?',
        answer:
          'Der Browser dekodiert das BMP und stellt es über den Standard-Canvas-Farbpfad dar, wobei ein normales sRGB-JPG exportiert wird. BMPs mit hoher Farbtiefe behalten ihre sichtbaren Farben; nur exotische indizierte oder 1-Bit-Varianten müssen eventuell zuerst in einem Editor neu gespeichert werden.',
      },
      {
        question: 'Kann ich die Qualität vor dem Herunterladen prüfen?',
        answer:
          'Ja. Klicken Sie bei einer Ergebniskarte auf „Vergleichen“, um die geteilte Ansicht zu öffnen und über das Bild zu fahren, um Text, Linien und Details mit dem ursprünglichen BMP zu vergleichen. Jede Karte zeigt außerdem die exakt eingesparte Größe.',
      },
      {
        question: 'Kann ich den Qualitätsregler nach der ersten Umwandlung noch anpassen?',
        answer:
          'Ja. Bewegen Sie den Qualitätsregler jederzeit auf einen neuen Wert und klicken Sie auf „Alle erneut umwandeln“, um jede geladene Datei neu zu erzeugen, ohne erneut hochzuladen. Ihre ursprünglichen BMP-Dateien bleiben in der Warteschlange, bis Sie sie entfernen.',
      },
      {
        question: 'Welchen Dateinamen behält das JPG?',
        answer:
          'Einzelne Downloads behalten Ihren bereinigten ursprünglichen Dateinamen mit der Erweiterung .jpg, sodass aus scan.bmp die Datei scan.jpg wird. Stapel mit zwei oder mehr Dateien werden gebündelt in compressmypic_bmp_to_jpg.zip exportiert.',
      },
      {
        question: 'Funktioniert BMP zu JPG in mobilen Browsern?',
        answer:
          'Ja. Upload-Bereich, Qualitätsregler, Vergleichsansicht und ZIP-Download funktionieren in Safari auf iOS und Chrome auf Android, ohne dass eine App installiert werden muss. Große Stapel dauern auf Smartphone-Prozessoren nur etwas länger.',
      },
      {
        question: 'Wann ist BMP zu JPG besser als BMP zu PNG?',
        answer:
          'Wählen Sie JPG, wenn Sie die kleinste teilbare Datei für E-Mails, das Web oder Messenger benötigen. Wählen Sie PNG, wenn Sie verlustfreie Archivqualität benötigen oder das Bild weiter bearbeiten möchten – beachten Sie dabei, dass PNG-Dateien deutlich größer bleiben als JPG.',
      },
      {
        question: 'Können alte 1-Bit- oder 8-Bit-BMP-Dateien umgewandelt werden?',
        answer:
          'Die meisten Standard-BMP-Dateien mit 1 Bit, 8 Bit, 24 Bit und 32 Bit werden in modernen Browsern sauber dekodiert. Sehr ungewöhnliche Varianten wie RLE-komprimierte BMPs oder BMPs im OS/2-Format zeigen eventuell eine Fehlermeldung pro Datei – wenn Sie sie in Paint oder einem Editor als 24-Bit-BMP neu speichern, ist das behoben.',
      },
      {
        question: 'Warum lassen sich gescannte BMP-Dateien als JPG so gut komprimieren?',
        answer:
          'Scans enthalten weiche Verläufe, Papiertextur und fotografische Details, die die Kosinus-Komprimierung von JPEG sehr effizient verarbeitet. Flache, einfarbige Bereiche komprimieren noch besser – deshalb kann ein 10-MB-Scan bei 88 % Qualität auf unter 1 MB fallen.',
      },
      {
        question: 'Entfernt die Umwandlung von BMP in JPG Metadaten?',
        answer:
          'Ja. Beim Zeichnen der Pixel auf HTML5 Canvas werden eingebettete Metadatenblöcke entfernt, sodass die ausgegebenen JPGs schlank sind und keine versteckten Details enthalten. BMP-Dateien tragen ohnehin selten viele Metadaten.',
      },
      {
        question: 'Kann ich BMP-Dateien direkt von einer Digitalkamera oder einem Scanner umwandeln?',
        answer:
          'Ja, wenn die Datei als .bmp gespeichert ist – die meisten Scanner und älteren Kameras bieten BMP als Exportoption an. Moderne Kameras speichern meist bereits JPG; prüfen Sie also zuerst die Dateiendung und nutzen Sie den passenden Konverter, wenn es kein Bitmap ist.',
      },
    ],
    relatedSlugs: ['/png-to-jpg', '/image-converter', '/bulk-image-converter', '/compress-image-to-100kb'],
  },
  {
    slug: '/remove-background',
    name: 'KI-Hintergrundentferner',
    shortDescription: 'Entfernen Sie Bildhintergründe mit KI im Browser und exportieren Sie transparente PNGs.',
    category: 'ai-tools',
    seoTitle: 'Hintergrund entfernen – kostenlos mit KI online',
    seoDescription:
      'Entfernen Sie Bildhintergründe kostenlos mit KI im Browser. Transparentes PNG herunterladen oder Weiß, Schwarz oder Farbe wählen – privat, ohne Anmeldung.',
    h1: 'Kostenloser Online-KI-Hintergrundentferner',
    subtitle:
      'Entfernen Sie Hintergründe aus Porträts, Produktfotos, Haustieren und Logos mit unserem kostenlosen KI-Hintergrundentferner, der vollständig in Ihrem Browser läuft. Der Konverter wurde für Verkäufer, Creator und Designer entwickelt, die schnell saubere Freisteller benötigen: Er lädt einmal ein kompaktes KI-Modell (ca. 35 MB, danach zwischengespeichert), verarbeitet ein Foto nach dem anderen bis zu 20 MB und exportiert ein transparentes PNG – oder legt Ihren Freisteller auf einen weißen, schwarzen oder eigenen Hintergrund.',
    howToSteps: [
      {
        title: 'Warten, bis das KI-Modell geladen ist',
        description:
          'Beim ersten Aufruf lädt die Seite das kompakte Modell isnet_quint8 (ca. 35 MB) einmal herunter und speichert es in Ihrem Browser zwischen; spätere Besuche starten sofort.',
      },
      {
        title: 'Ein Foto bis zu 20 MB ablegen',
        description:
          'Laden Sie ein einzelnes JPG-, PNG-, WebP-, HEIC-, BMP- oder AVIF-Foto – eine Datei nach der anderen – in den Upload-Bereich.',
      },
      {
        title: 'KI den Freisteller erstellen lassen',
        description:
          'Das Modell isoliert Ihr Motiv lokal in Ihrem Browser und zeigt das Original neben dem transparenten Freisteller.',
      },
      {
        title: 'Freisteller mit dem Original vergleichen',
        description:
          'Klicken Sie auf „Geteilter Vergleich“, um über die Vorher-Nachher-Ansicht zu fahren und Kanten um Haare, Fell und feine Details zu prüfen.',
      },
      {
        title: 'Transparent, Weiß, Schwarz oder eigene Farbe wählen',
        description:
          'Behalten Sie das transparente PNG, oder wechseln Sie vor dem Herunterladen zu einem weißen, schwarzen oder eigenen farbigen Hintergrund.',
      },
      {
        title: 'Freisteller herunterladen',
        description:
          'Speichern Sie das transparente PNG (benannt nach Ihrem Foto mit angehängtem _no_bg) oder die Version mit einfarbigem Hintergrund, und klicken Sie dann für das nächste Foto auf „Neues Bild“.',
      },
    ],
    features: [
      {
        title: '100 % KI-Segmentierung auf dem Gerät',
        description: 'Angetrieben vom leichten ONNX-Modell isnet_quint8, das lokal in Ihrem Browser läuft – Ihre Fotos werden nie auf einen Server hochgeladen.',
      },
      {
        title: 'Sofortiger Export als transparentes PNG',
        description: 'Laden Sie scharfe Freisteller mit Alpha-Transparenz herunter, bereit für E-Commerce-Angebote, Vorschaubilder, Folien und Design-Arbeiten.',
      },
      {
        title: 'Eingebauter Wechsler für einfarbige Hintergründe',
        description: 'Sehen Sie eine Vorschau Ihres Freistellers und exportieren Sie ihn auf reinem Weiß, tiefem Schwarz oder einer beliebigen eigenen Hex-Hintergrundfarbe, ohne eine andere App zu öffnen.',
      },
      {
        title: 'Kostenlos, ohne Anmeldung und ohne Wasserzeichen',
        description: 'Freisteller in voller Auflösung ohne Tageslimits, ohne Konten und ohne Wasserzeichen.',
      },
    ],
    faqs: [
      {
        question: 'Sendet die Hintergrundentfernung mein Foto an einen Server?',
        answer:
          'Nein. Das KI-Modell wird einmal in Ihren Browser heruntergeladen und führt die Inferenz vollständig auf Ihrem Gerät aus, sodass Ihr Foto nie hochgeladen, gespeichert oder von jemand anderem angesehen wird. Wenn Sie den Tab schließen, wird alles aus dem Browser-Speicher gelöscht.',
      },
      {
        question: 'Warum ist der erste Freisteller langsamer als die danach?',
        answer:
          'Beim ersten Besuch lädt Ihr Browser das kompakte Modell isnet_quint8 (ca. 35 MB) herunter und initialisiert die WebAssembly-KI-Laufzeit – das dauert einige Sekunden länger. Danach ist das Modell zwischengespeichert, sodass nachfolgende Fotos deutlich schneller verarbeitet werden.',
      },
      {
        question: 'Wie groß ist das KI-Modell, das mein Browser herunterlädt?',
        answer:
          'Ca. 35 MB, einmal beim ersten Aufruf heruntergeladen und danach von Ihrem Browser zwischengespeichert. Das kleine quantisierte Modell isnet_quint8 macht die Entfernung im Browser überhaupt erst ohne Server möglich – größere Cloud-Modelle bräuchten einen Upload und eine kostenpflichtige API.',
      },
      {
        question: 'Kann ich den Hintergrundentferner nach dem ersten Laden ohne Internet nutzen?',
        answer:
          'Größtenteils ja: Sobald das Modell zwischengespeichert ist, läuft die eigentliche Entfernung vollständig offline in Ihrem Browser. Internet benötigen Sie weiterhin, um die Seite beim ersten Mal zu laden, und das zwischengespeicherte Modell kann gelöscht werden, wenn der Browser Website-Daten entfernt.',
      },
      {
        question: 'Welche Arten von Fotos ergeben die saubersten Kanten?',
        answer:
          'Fotos mit einem klaren Motiv und gutem Kontrast zum Hintergrund funktionieren am besten – Porträts, Produktaufnahmen, Haustiere, Autos und Logos mit scharfen Umrissen. Flaches Licht und ein einfacher Hintergrund geben dem Modell die leichteste Aufgabe.',
      },
      {
        question: 'Kann ich den Hintergrund aus einem Foto mit unordentlicher oder belebter Umgebung entfernen?',
        answer:
          'Ja, aber rechnen Sie mit weicheren Kanten: Wenn sich das Motiv in einen überladenen Hintergrund einfügt, muss das kleine Modell auf dem Gerät raten, wo das Motiv endet. Ein saubererer Hintergrund, besseres Licht oder ein engerer Zuschnitt vor dem Hochladen ergeben einen sichtbar besseren Freisteller.',
      },
      {
        question: 'Was geschieht mit feinen Haaren, Fell oder durchsichtigen Kanten?',
        answer:
          'Feine Strähnen und flauschiges Fell sind der schwierigste Fall für ein kompaktes quantisiertes Modell, sodass Kanten dort leicht weich wirken oder ein paar Haare verlieren können. Prüfen Sie die Ansicht „Geteilter Vergleich“ – für die meisten Porträts und Produktaufnahmen ist das Ergebnis sauber, aber pixelgenaues Haarmaskieren ist eine bekannte Grenze.',
      },
      {
        question: 'Wie lege ich meinen Freisteller für Amazon oder eBay auf einen rein weißen Hintergrund?',
        answer:
          'Wählen Sie nach Fertigstellung des Freistellers unter „Option für Hintergrundfüllung“ Weiß und klicken Sie auf „Mit weißem Hintergrund herunterladen“. Marktplätze bevorzugen scharfe, deckende JPGs und PNGs mit weißem Hintergrund für die Haupt-Vorschaubilder von Produkten – genau das wird hier exportiert.',
      },
      {
        question: 'Welche Dateiformate kann ich hochladen?',
        answer:
          'JPG, PNG, WebP, HEIC, BMP und AVIF – das Tool akzeptiert dieselbe erweiterte Bildauswahl wie der Rest der Website. HEIC-Fotos von iPhones werden automatisch in ein dekodierbares Bild umgewandelt, bevor das Modell läuft.',
      },
      {
        question: 'Wie groß darf ein Foto maximal sein?',
        answer:
          'Jedes Foto darf bis zu 20 MB groß sein, und das Tool verarbeitet ein Foto nach dem anderen. Das deckt hochauflösende Smartphone- und Kameraaufnahmen ab; sehr große Dateien dauern nur etwas länger, weil das Modell auf Ihrem Gerät läuft.',
      },
      {
        question: 'Kann ich Hintergründe von mehreren Fotos auf einmal entfernen?',
        answer:
          'Nein, dieses Tool verarbeitet ein Foto nach dem anderen, damit das KI-Modell den gesamten Gerätespeicher auf einen einzigen sauberen Freisteller konzentrieren kann. Klicken Sie nach jedem Download auf „Neues Bild“, um das nächste Foto zu verarbeiten – es gibt kein Tageslimit.',
      },
      {
        question: 'Behält der Freisteller die ursprüngliche Fotoauflösung?',
        answer:
          'Ja. Das exportierte transparente PNG behält 100 % der ursprünglichen Pixelbreite und -höhe des Fotos, sodass ein 4000-px-Produktfoto 4000 px bleibt. Verwenden Sie danach das Tool „Bildgröße ändern“, wenn Sie eine kleinere Version für das Web benötigen.',
      },
      {
        question: 'Warum ist mein transparentes PNG größer als das ursprüngliche Foto?',
        answer:
          'PNG speichert jedes Freisteller-Pixel verlustfrei, während Ihr ursprüngliches JPG stark komprimiert war – ein großer, detailreicher Freisteller kann daher leicht schwerer sein als eine kleine JPG-Quelle. Das ist normal: Sie tauschen Dateigröße gegen Transparenz und pixelgenaue Kanten.',
      },
      {
        question: 'Kann ich die Entfernung bei demselben Foto erneut ausführen?',
        answer:
          'Ja. Klicken Sie auf „Entfernung erneut ausführen“, um dasselbe Foto noch einmal zu verarbeiten – nützlich, wenn der erste Durchgang einen Schatten als Teil des Motivs erfasst hat oder wenn Sie Ergebnisse vergleichen möchten. Das Modell ist deterministisch, sodass das Ergebnis meist identisch ist, sofern sich die Eingabe nicht geändert hat.',
      },
      {
        question: 'Was soll ich tun, wenn ein Teil des Motivs im Freisteller fehlt?',
        answer:
          'Prüfen Sie zuerst in der Ansicht „Geteilter Vergleich“, was genau herausgeschnitten wurde. Motive, die sich in den Hintergrund einfügen – Kleidung in derselben Farbe, Glas oder Tarnung – verwirren das Modell; versuchen Sie ein Foto mit stärkerem Kontrast zwischen Motiv und Hintergrund oder schneiden Sie vor dem Hochladen enger am Motiv zu.',
      },
      {
        question: 'Gibt es ein Wasserzeichen auf dem heruntergeladenen PNG?',
        answer:
          'Nein. Downloads sind Freisteller in voller Auflösung ohne Wasserzeichen, ohne Logo und ohne hinzugefügtes Branding. Es gibt auch keine Anmeldung, kein Konto und kein Tageslimit dafür, bei wie vielen Fotos Sie Hintergründe entfernen.',
      },
      {
        question: 'Funktioniert die Hintergrundentfernung in mobilen Browsern?',
        answer:
          'Ja. Das Modell wird in Safari auf iOS und Chrome auf Android heruntergeladen und ausgeführt, mit denselben Upload-, Vergleichs- und Download-Steuerelementen. Auf Smartphones dauern große Fotos länger, weil die KI auf dem Prozessor des Telefons läuft – WLAN hilft beim ersten Modell-Download.',
      },
      {
        question: 'Worin unterscheidet sich das von kostenpflichtigen Tools wie remove.bg?',
        answer:
          'Dieses Tool ist kostenlos, privat und läuft vollständig in Ihrem Browser ohne Upload und ohne Konto, während kostenpflichtige Cloud-Tools Ihr Foto auf ihren Servern verarbeiten. Der Kompromiss ist die Qualität bei schwierigen Kanten: Das kleine Modell auf dem Gerät ist hervorragend für klare Motive, kann aber bei feinen Haaren oder belebten Szenen nicht mit großen Cloud-Modellen mithalten.',
      },
      {
        question: 'Kann ich den Freisteller in Canva, Photoshop oder PowerPoint verwenden?',
        answer:
          'Ja. Das exportierte transparente PNG öffnet sich direkt in Canva, Photoshop, Figma, PowerPoint und Google Slides, wo Sie es über jeden Hintergrund, jede Folie oder jedes Design legen können. Der Download mit einfarbigem Hintergrund funktioniert genauso für Apps, die ein deckendes Bild benötigen.',
      },
      {
        question: 'Was geschieht mit meinem Foto, nachdem ich den Tab schließe?',
        answer:
          'Es wird nichts gespeichert: Die Verarbeitung geschieht im Browser-Speicher, das Foto wird nie hochgeladen, und wenn Sie den Tab schließen, werden Bild und Freisteller gelöscht. Nur das zwischengespeicherte KI-Modell bleibt im Browser für eine schnellere künftige Nutzung.',
      },
    ],
    relatedSlugs: ['/add-background-to-image', '/image-resizer', '/png-to-webp'],
  },
];


export const TOOL_BY_SLUG_DE: Record<string, ToolDefinition> = Object.fromEntries(
  TOOLS_REGISTRY_DE.map((t) => [t.slug, t])
);
