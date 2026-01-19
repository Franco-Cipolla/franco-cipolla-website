import React from "react";
import { Helmet } from "react-helmet-async";

const Datenschutzerklärung = () => {
  return (
    <>
      <Helmet>
        <title>Datenschutzerklärung – Franco Cipolla, Webdesigner aus Ennepetal</title>
        <meta
          name="description"
          content="Datenschutzerklärung von Franco Cipolla. Informationen über Datenerhebung, Verarbeitung und Nutzung personenbezogener Daten, Cookies, Google Analytics und Calendly."
        />
        <link rel="canonical" href="https://www.franco-cipolla.de/datenschutz" />

        <meta property="og:title" content="Datenschutzerklärung – Franco Cipolla" />
        <meta
          property="og:description"
          content="Datenschutzerklärung von Franco Cipolla. Informationen über Datenerhebung, Verarbeitung und Nutzung personenbezogener Daten, Cookies, Google Analytics und Calendly."
        />
        <meta property="og:image" content="https://franco-cipolla.de/og-preview.png" />
        <meta property="og:url" content="https://www.franco-cipolla.de/datenschutz" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Datenschutzerklärung – Franco Cipolla" />
        <meta
          name="twitter:description"
          content="Datenschutzerklärung von Franco Cipolla. Informationen über Datenerhebung, Verarbeitung und Nutzung personenbezogener Daten, Cookies, Google Analytics und Calendly."
        />
        <meta name="twitter:image" content="https://franco-cipolla.de/og-preview.png" />
      </Helmet>

      <section className="max-w-4xl mx-auto px-6 py-20 mt-20 text-black">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Datenschutzerklärung</h1>

        <p className="text-gray-700 text-lg mb-4">
          Der Schutz deiner persönlichen Daten ist mir wichtig. Nachfolgend informiere ich dich über die Erhebung,
          Verarbeitung und Nutzung personenbezogener Daten auf meiner Website gemäß der Datenschutz-Grundverordnung
          (DSGVO).
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">1. Verantwortlicher</h2>
        <p className="text-gray-700 mb-4">
          Franco Cipolla<br />
          Wuppermannstraße 14<br />
          58256 Ennepetal<br />
          E-Mail: <a href="mailto:franco_cipolla@web.de" className="underline text-[#003566]">franco_cipolla@web.de</a>
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">2. Hosting (Vercel)</h2>
        <p className="text-gray-700 mb-4">
          Diese Website wird bei Vercel gehostet. Der Anbieter verarbeitet Verbindungsdaten und technische Informationen,
          um die Website bereitzustellen und die Sicherheit zu gewährleisten. Es besteht ein Auftragsverarbeitungsvertrag
          gemäß Art. 28 DSGVO.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">3. Zugriffsdaten / Server-Logfiles</h2>
        <p className="text-gray-700 mb-4">
          Beim Besuch der Website werden automatisch Informationen wie IP-Adresse, Browsertyp, Betriebssystem,
          Referrer-URL und Uhrzeit des Zugriffs gespeichert. Diese Daten dienen ausschließlich der technischen Bereitstellung
          und statistischen Auswertung.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">4. Kontaktformular & Erstgespräch (Formspark / Calendly)</h2>
        <p className="text-gray-700 mb-4">
          Wenn du mir über das Kontaktformular oder die Seite „Erstgespraech“ schreibst, werden die von dir eingegebenen Daten
          (Name, E-Mail-Adresse, Nachricht, gewünschter Gesprächstermin sowie Unternehmen/Website) über Formspark oder Calendly verarbeitet.
          Die Daten werden ausschließlich zur Bearbeitung deiner Anfrage verwendet und nicht ohne deine Einwilligung weitergegeben.
        </p>
        <p className="text-gray-700 mb-4">
          Zur Vermeidung von Spam-Einträgen verwende ich ein sogenanntes „Honeypot“-Feld. Dieses wird von echten Nutzern in der Regel nicht ausgefüllt,
          automatisierte Bots hingegen schon. Anfragen mit ausgefülltem Honeypot-Feld werden automatisch verworfen.
        </p>
        <p className="text-gray-700 mb-4">
          Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO
          (berechtigtes Interesse an einer sicheren und funktionierenden Website). Deine Daten werden spätestens 6 Monate nach Abschluss
          der Bearbeitung gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
        </p>
        <p className="text-gray-700 mb-4">
          Außerdem kann ich dir automatisierte E-Mails zur Bestätigung oder Erinnerung an deinen Termin senden. Die Verarbeitung erfolgt
          ausschließlich für diesen Zweck und basiert auf Art. 6 Abs. 1 lit. b DSGVO.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">5. Google Analytics</h2>
        <p className="text-gray-700 mb-4">
          Ich nutze Google Analytics, einen Webanalysedienst der Google Ireland Ltd., um die Nutzung der Website zu analysieren. Die IP-Adresse wird anonymisiert.
          Die Nutzung erfolgt auf Grundlage deiner Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.
          Du kannst der Nutzung von Google Analytics jederzeit widersprechen, z.B. durch Deaktivierung von Cookies oder über das{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            className="underline text-[#003566]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Browser-Add-on von Google
          </a>.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">6. Cookies</h2>
        <p className="text-gray-700 mb-4">
          Diese Website verwendet Cookies, um bestimmte Funktionen bereitzustellen und die Nutzung zu analysieren.
          Notwendige Cookies sind für die Funktionsfähigkeit der Website und des Calendly-Widgets erforderlich.
          Analytische und Marketing-Cookies werden nur nach ausdrücklicher Zustimmung gesetzt.
        </p>
        <p className="text-gray-700 mb-4">
          Du kannst Cookies jederzeit über deine Browsereinstellungen löschen oder blockieren. Das Setzen von Cookies erfolgt ausschließlich
          auf Grundlage deiner Einwilligung, soweit dies gesetzlich erforderlich ist.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">7. Externe Inhalte & Drittanbieter</h2>
        <p className="text-gray-700 mb-4">
          Auf dieser Website werden externe Inhalte eingebunden, z.B. Calendly für Terminbuchungen. Beim Laden dieser Inhalte können personenbezogene Daten
          (z.B. IP-Adresse) an die jeweiligen Anbieter übermittelt werden, ggf. auch in Länder außerhalb der EU/EEA (z.B. USA).
          Die Übertragung in Länder ohne angemessenes Datenschutzniveau erfolgt auf Grundlage deiner Einwilligung bzw. auf Basis geeigneter Schutzmaßnahmen
          (z.B. Standardvertragsklauseln).
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">8. Datensicherheit</h2>
        <p className="text-gray-700 mb-4">
          Ich setze technische und organisatorische Maßnahmen (TOMs) ein, um deine Daten vor Verlust, Missbrauch und unberechtigtem Zugriff zu schützen.
          Dazu zählen u.a. verschlüsselte Übertragung (HTTPS), regelmäßige Backups und Zugriffsbeschränkungen.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">9. Deine Rechte</h2>
        <p className="text-gray-700 mb-4">
          Du hast das Recht auf Auskunft über die gespeicherten Daten, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch gegen die Verarbeitung sowie das Recht auf Datenübertragbarkeit.
          Du kannst dich jederzeit per E-Mail: <a href="mailto:franco_cipolla@web.de" className="underline text-[#003566]">franco_cipolla@web.de</a> oder WhatsApp: +49 176 753 98004 an mich wenden.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">10. Beschwerderecht bei Aufsichtsbehörde</h2>
        <p className="text-gray-700 mb-4">
          Du hast das Recht, dich bei der zuständigen Aufsichtsbehörde zu beschweren:
          Landesbeauftragter für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW)
          Adresse: Kavalleriestraße 2-4, 40213 Düsseldorf
          E-Mail: poststelle@ldi.nrw.de
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">11. Änderungen</h2>
        <p className="text-gray-700 mb-4">
          Ich behalte mir vor, diese Datenschutzerklärung bei Bedarf anzupassen, z.B. bei technischen Änderungen, neuen Diensten oder gesetzlichen Vorgaben.
        </p>

        <p className="text-sm text-gray-500 mt-10">
          Zuletzt aktualisiert: 19. Januar 2026
        </p>
      </section>
    </>
  );
};

export default Datenschutzerklärung;
