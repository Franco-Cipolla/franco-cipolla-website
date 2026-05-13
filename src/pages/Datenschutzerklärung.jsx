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
          <a href="mailto:franco_cipolla@web.de" className="underline text-[#003566]">
            franco_cipolla@web.de
          </a>
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">2. Hosting</h2>
        <p className="mb-6">
          Diese Website wird bei Vercel Inc., USA, gehostet. Beim Aufruf der
          Website werden automatisch Server-Logfiles erfasst (IP-Adresse,
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
          ausschließlich der Sicherstellung eines störungsfreien Betriebs.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          4. Kontakt- und Erstgesprächsformulare
        </h2>
        <p className="mb-6">
          Wenn Sie mich über ein Formular kontaktieren, werden die von Ihnen
          eingegebenen Daten (Name, Telefonnummer, Nachricht, Terminwunsch)
          zur Bearbeitung Ihrer Anfrage verarbeitet. Rechtsgrundlage ist
          Art. 6 Abs. 1 lit. b DSGVO.
        </p>

        <p className="mb-6">
          Zur Spam-Vermeidung wird ein Honeypot-Feld eingesetzt.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          5. Google Analytics
        </h2>
        <p className="mb-6">
          Diese Website nutzt Google Analytics der Google Ireland Limited.
          Die Nutzung erfolgt nur nach Ihrer Einwilligung gemäß Art. 6 Abs. 1
          lit. a DSGVO. Die IP-Adresse wird anonymisiert verarbeitet.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          6. ProvenExpert Widget
        </h2>
        <p className="mb-6">
          Auf dieser Website wird ein Widget von ProvenExpert eingebunden, um
          Kundenbewertungen darzustellen.
        </p>

        <p className="mb-6">
          Anbieter ist die Expert Systems AG, Quedlinburger Straße 1, 10589 Berlin,
          Deutschland.
        </p>

        <p className="mb-6">
          Beim Laden des Widgets können technisch notwendige Daten wie IP-Adresse,
          Browserinformationen und Referrer-Daten an ProvenExpert übertragen werden.
        </p>

        <p className="mb-6">
          Die Nutzung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
          (berechtigtes Interesse an der Außendarstellung und Vertrauensbildung).
        </p>

        <p className="mb-6">
          Weitere Informationen:
          <br />
          <a
            href="https://www.provenexpert.com/de-de/datenschutzbestimmungen/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#003566]"
          >
            Datenschutzbestimmungen von ProvenExpert
          </a>
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">7. Cookies</h2>
        <p className="mb-6">
          Diese Website verwendet Cookies. Notwendige Cookies sind für den Betrieb
          erforderlich. Analyse-Cookies werden nur nach Einwilligung gesetzt.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">8. Speicherdauer</h2>
        <p className="mb-6">
          Daten werden nur so lange gespeichert, wie es für den Zweck erforderlich
          ist oder gesetzliche Pflichten bestehen.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">9. Ihre Rechte</h2>
        <p className="mb-6">
          Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit
          und Widerspruch.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          10. Beschwerderecht
        </h2>
        <p className="mb-6">
          Landesbeauftragte für Datenschutz NRW, Düsseldorf.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          11. SSL-/TLS-Verschlüsselung
        </h2>
        <p className="mb-6">
          Diese Website nutzt SSL-/TLS-Verschlüsselung.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          12. Änderungen
        </h2>
        <p className="mb-6">
          Diese Datenschutzerklärung kann bei Bedarf angepasst werden.
        </p>

        <p className="text-sm text-gray-500 mt-12">
          Zuletzt aktualisiert: 06. Februar 2026
        </p>
      </section>
    </>
  );
};

export default Datenschutzerklaerung;
