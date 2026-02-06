import React from "react";
import { Helmet } from "react-helmet-async";

const Datenschutzerklaerung = () => {
  return (
    <>
      <Helmet>
        <title>Datenschutzerklärung – Franco Cipolla | Webdesigner Ennepetal</title>
        <meta
          name="description"
          content="Datenschutzerklärung von Franco Cipolla gemäß DSGVO. Informationen zu Datenverarbeitung, Hosting, Formularen, Cookies und Google Analytics."
        />
        <link rel="canonical" href="https://www.franco-cipolla.de/datenschutz" />

        <meta property="og:title" content="Datenschutzerklärung – Franco Cipolla" />
        <meta
          property="og:description"
          content="Datenschutzerklärung von Franco Cipolla gemäß DSGVO für Deutschland (NRW)."
        />
        <meta property="og:url" content="https://www.franco-cipolla.de/datenschutz" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Datenschutzerklärung – Franco Cipolla" />
        <meta
          name="twitter:description"
          content="DSGVO-konforme Datenschutzerklärung von Franco Cipolla."
        />
      </Helmet>

      <section className="max-w-4xl mx-auto px-6 py-24 mt-20 text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          Datenschutzerklärung
        </h1>

        <p className="mb-6">
          Der Schutz Ihrer personenbezogenen Daten ist mir wichtig. Nachfolgend
          informiere ich Sie über die Verarbeitung personenbezogener Daten beim
          Besuch dieser Website gemäß der Datenschutz-Grundverordnung (DSGVO).
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">1. Verantwortlicher</h2>
        <p className="mb-6">
          Franco Cipolla<br />
          Wuppermannstraße 14<br />
          58256 Ennepetal<br />
          Deutschland<br />
          E-Mail:{" "}
          <a
            href="mailto:franco_cipolla@web.de"
            className="underline text-[#003566]"
          >
            franco_cipolla@web.de
          </a>
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">2. Hosting</h2>
        <p className="mb-6">
          Diese Website wird bei Vercel Inc., USA, gehostet. Beim Aufruf der
          Website werden automatisch Server-Logfiles erfasst (z. B. IP-Adresse,
          Zeitpunkt des Zugriffs, Browsertyp). Die Verarbeitung erfolgt zur
          technischen Bereitstellung und Sicherheit der Website gemäß Art. 6
          Abs. 1 lit. f DSGVO.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          3. Zugriffsdaten / Server-Logfiles
        </h2>
        <p className="mb-6">
          Beim Besuch dieser Website werden automatisch Informationen
          gespeichert, die Ihr Browser übermittelt. Diese Daten dienen
          ausschließlich der Sicherstellung eines störungsfreien Betriebs der
          Website.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          4. Kontakt- und Erstgesprächsformulare
        </h2>
        <p className="mb-6">
          Wenn Sie mich über ein Formular kontaktieren, werden die von Ihnen
          eingegebenen Daten (z. B. Name, Telefonnummer, Nachricht,
          Terminwunsch) zur Bearbeitung Ihrer Anfrage verarbeitet.
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.
        </p>
        <p className="mb-6">
          Zur Spam-Vermeidung wird ein technisches Honeypot-Feld eingesetzt.
          Anfragen mit ausgefülltem Honeypot-Feld werden automatisch verworfen.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          5. Google Analytics
        </h2>
        <p className="mb-6">
          Diese Website nutzt Google Analytics der Google Ireland Limited. Die
          Nutzung erfolgt ausschließlich nach Ihrer Einwilligung gemäß Art. 6
          Abs. 1 lit. a DSGVO. Die IP-Adresse wird anonymisiert verarbeitet.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">6. Cookies</h2>
        <p className="mb-6">
          Diese Website verwendet Cookies. Notwendige Cookies sind für den
          Betrieb der Website erforderlich. Analyse-Cookies werden nur nach
          ausdrücklicher Einwilligung gesetzt.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">7. Speicherdauer</h2>
        <p className="mb-6">
          Personenbezogene Daten werden nur so lange gespeichert, wie dies zur
          Erfüllung des jeweiligen Zwecks erforderlich ist oder gesetzliche
          Aufbewahrungspflichten bestehen.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">8. Ihre Rechte</h2>
        <p className="mb-6">
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
          Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch
          gegen die Verarbeitung Ihrer Daten.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          9. Beschwerderecht
        </h2>
        <p className="mb-6">
          Sie haben das Recht, sich bei der zuständigen Aufsichtsbehörde zu
          beschweren:
          <br />
          Landesbeauftragte für Datenschutz und Informationsfreiheit NRW,
          Düsseldorf.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          10. SSL- / TLS-Verschlüsselung
        </h2>
        <p className="mb-6">
          Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw.
          TLS-Verschlüsselung.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          11. Änderungen
        </h2>
        <p className="mb-6">
          Ich behalte mir vor, diese Datenschutzerklärung bei Bedarf anzupassen.
        </p>

        <p className="text-sm text-gray-500 mt-12">
          Zuletzt aktualisiert: 06. Februar 2026
        </p>
      </section>
    </>
  );
};

export default Datenschutzerklaerung;
