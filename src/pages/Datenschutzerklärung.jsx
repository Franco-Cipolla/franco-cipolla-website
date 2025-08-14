import React from 'react';

const Datenschutzerklärung = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 mt-20 text-black">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Datenschutzerklärung</h1>

      <p className="text-gray-700 text-lg mb-4">
        Der Schutz deiner persönlichen Daten ist mir wichtig. Nachfolgend informiere ich dich über die Erhebung, Verarbeitung und Nutzung personenbezogener Daten auf meiner Website gemäß der Datenschutz-Grundverordnung (DSGVO).
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. Verantwortlicher</h2>
      <p className="text-gray-700 mb-4">
        Franco Cipolla<br />
        Wuppermannstraße 14<br />
        58256 Ennepetal<br />
        E-Mail: franco_cipolla@web.de
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. Hosting</h2>
      <p className="text-gray-700 mb-4">
        Diese Website wird bei Vercel gehostet. Der Anbieter verarbeitet Verbindungsdaten und technische Informationen, um die Website bereitzustellen und die Sicherheit zu gewährleisten. Es besteht ein Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. Zugriffsdaten</h2>
      <p className="text-gray-700 mb-4">
        Beim Besuch der Website werden automatisch Informationen wie IP-Adresse, Browsertyp, Betriebssystem, Referrer-URL und Uhrzeit des Zugriffs gespeichert. Diese Daten dienen ausschließlich der technischen Bereitstellung und statistischen Auswertung.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. Kontaktformular & Erstgespräch</h2>
      <p className="text-gray-700 mb-4">
        Wenn du mir über das Kontaktformular oder die Seite „Erstgespräch“ schreibst, werden die von dir eingegebenen Daten
        (Name, E-Mail-Adresse, Nachricht und ggf. gewünschter Gesprächstermin) über Formspark verarbeitet.
        Die Daten werden ausschließlich zur Bearbeitung deiner Anfrage verwendet und nicht ohne deine Einwilligung weitergegeben.
        Zur Vermeidung von Spam-Einträgen verwende ich ein sogenanntes „Honeypot“-Feld. Dieses wird von echten Nutzern in der Regel nicht ausgefüllt,
        automatisierte Bots hingegen schon. Anfragen mit ausgefülltem Honeypot-Feld werden automatisch verworfen.
        Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer sicheren und funktionierenden Website).
        Deine Daten werden spätestens 6 Monate nach Abschluss der Bearbeitung gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. Google Analytics</h2>
      <p className="text-gray-700 mb-4">
        Ich plane den Einsatz von Google Analytics, einem Webanalysedienst der Google Ireland Ltd. Dabei werden Cookies verwendet, um die Nutzung der Website zu analysieren. Die IP-Adresse wird anonymisiert. Die Daten können in die USA übertragen werden. Die Nutzung erfolgt auf Grundlage deiner Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">6. Cookies</h2>
      <p className="text-gray-700 mb-4">
        Diese Website verwendet Cookies, um bestimmte Funktionen bereitzustellen und die Nutzung zu analysieren. Beim ersten Besuch wird ein Cookie-Banner angezeigt, über das du deine Einwilligung geben kannst. Du kannst Cookies jederzeit über deine Browsereinstellungen löschen oder blockieren.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">7. Externe Inhalte</h2>
      <p className="text-gray-700 mb-4">
        Auf dieser Website sind externe Inhalte wie Google Fonts, Font Awesome und Instagram-Links eingebunden. Beim Laden dieser Inhalte können personenbezogene Daten (z.B. IP-Adresse) an die jeweiligen Anbieter übermittelt werden. Die Einbindung erfolgt zur visuellen Gestaltung und Nutzerfreundlichkeit.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">8. Deine Rechte</h2>
      <p className="text-gray-700 mb-4">
        Du hast das Recht auf Auskunft über die gespeicherten Daten, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch gegen die Verarbeitung sowie das Recht auf Datenübertragbarkeit. Du kannst dich jederzeit per E-Mail an mich wenden.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">9. Änderungen</h2>
      <p className="text-gray-700 mb-4">
        Ich behalte mir vor, diese Datenschutzerklärung bei Bedarf anzupassen, z.B. bei technischen Änderungen oder neuen gesetzlichen Vorgaben.
      </p>

      <p className="text-sm text-gray-500 mt-10">
        Zuletzt aktualisiert: 14. August 2025
      </p>
    </section>
  );
};

export default Datenschutzerklärung;
