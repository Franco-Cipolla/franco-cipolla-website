import React from 'react'

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
        Wenn du mir über das Kontaktformular oder die Seite „Erstgespräch“ schreibst, werden dein Name, deine E-Mail-Adresse, deine Nachricht sowie ein gewünschter Gesprächstermin (Datum) über Formspark verarbeitet. Die Daten werden ausschließlich zur Bearbeitung deiner Anfrage verwendet und nicht ohne deine Einwilligung weitergegeben.
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
      <h2 className="text-xl font-semibold mt-8 mb-2">10. Nutzung von reCaptcha</h2>
      <p className="text-gray-700 mb-4">
        Auf dieser Website wird Google reCaptcha eingesetzt, um Anfragen über das Kontaktformular vor Spam und Missbrauch zu schützen. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
        Dabei werden personenbezogene Daten (z. B. IP-Adresse) an Google übertragen und verarbeitet. Die Nutzung von reCaptcha erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
        Weitere Informationen zum Datenschutz von Google reCaptcha findest du hier: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://policies.google.com/privacy</a>.
      </p>

      <p className="text-sm text-gray-500 mt-10">
        Zuletzt aktualisiert: 09. August 2025
      </p>
    </section>
  )
}

export default Datenschutzerklärung
