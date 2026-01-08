import React, { useRef } from 'react';
import { FaCode, FaPaintBrush, FaPenNib, FaSearchengin, FaCheck } from 'react-icons/fa';
import ServiceCard from "./ServiceCard";
import serviceBg from '/ServiceBg1.jpeg';
import CTAProjectStart from './CTAProjectStart';

const Service = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  // Benefits jetzt in einfacher, verständlicher Sprache für deine Zielgruppe
  const services = [
    {
      Icon: FaCode,
      title: "Webentwicklung",
      subtitle: "Jeder Besucher wird zum Kunden",
      benefits: [
        "Häufiges Problem: Besucher finden sich nicht zurecht und gehen zur Konkurrenz",
        "Lösung: Klare Schritt-für-Schritt-Navigation, die Besucher führt",
        "Ergebnis: Mehr Anfragen direkt über die Website, ohne Aufwand"
      ],
      highlight: true
    },
    {
      Icon: FaPaintBrush,
      title: "Webdesign",
      subtitle: "Design, das Vertrauen & Verkäufe steigert",
      benefits: [
        "Häufiges Problem: Altmodisches Design wirkt unprofessionell",
        "Lösung: Modernes, sauberes Branding und klare Struktur",
        "Ergebnis: Besucher vertrauen dir extrem schnell und werden Kunden"
      ]
    },
    {
      Icon: FaPenNib,
      title: "Copywriting",
      subtitle: "Texte, die zum Handeln führen",
      benefits: [
        "Häufiges Problem: Besucher wissen nicht, was sie tun sollen",
        "Lösung: Verständliche, direkte Texte mit starken Handlungsaufforderungen",
        "Ergebnis: Besucher kontaktieren dich häufiger → mehr Termine & Anfragen"
      ]
    },
    {
      Icon: FaSearchengin,
      title: "SEO & Sichtbarkeit",
      subtitle: "Gefunden werden & Kunden gewinnen",
      benefits: [
        "Häufiges Problem: Deine Website wird nicht gefunden → keine Kundenanfragen",
        "Lösung: Lokale SEO, Google Maps und relevante Keywords",
        "Ergebnis: Planbare Besucher & echte Interessenten, die dich direkt kontaktieren"
      ]
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-4 md:px-6 overflow-hidden bg-gradient-to-b from-white to-[#f0f8ff]"
    >
      {/* Hintergrundbild */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-40 blur-sm"
        style={{ backgroundImage: `url(${serviceBg})` }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16" ref={headerRef} id="service-start">
          <h1 className="mb-6 leading-tight text-3xl md:text-4xl font-bold text-center">
            Meine Leistungen.
            <span className="block bg-gradient-to-r from-[#003566] to-[#00A6FB] bg-clip-text text-transparent">
              Websites, die Besucher zu Kunden machen
            </span>
          </h1>
          <p className="text-lg text-[#000814]/80 max-w-3xl mx-auto mb-8 leading-relaxed">
            Ich erstelle Websites für Selbstständige und kleine Unternehmen, die nicht nur gut aussehen, sondern <strong className="text-[#001D3D]">aktiv neue Kundenanfragen liefern</strong>.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-[#001D3D]/80 text-sm md:text-base font-medium">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00A6FB] rounded-full" />
              <span>Direkter Kontakt – kein Callcenter</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00A6FB] rounded-full" />
              <span>Ein Ansprechpartner von Start bis Livegang</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00A6FB] rounded-full" />
              <span>Planbare Kunden & volle Kontrolle</span>
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, key) => (
            <ServiceCard key={key} {...service} />
          ))}
        </div>

        {/* Rundum-Sorglos Paket */}
        <div className="bg-gradient-to-r from-[#001D3D] to-[#003566] rounded-3xl p-10 text-center text-white shadow-xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-10">
              Rundum-Sorglos-Website: Nur das Komplettpaket funktioniert
            </h3>
            <p className="md:text-lg text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Website als Verkaufssystem + Conversion-Optimierung + Google Maps Integration →  messbare neue Anfragen & Kunden.
              <br />
              <br />
              <strong>Aktuell inklusive Bonus:</strong> Social-Media Starterkit. 2 fertige Posts + Persönliches Video, wie sie ihre Website aktiv bewerben. <span className="italic">Bonus nur für die nächsten 3 Kunden enthalten!</span>
            </p>

            <div className="mb-8">
              <p className="text-white/80 mb-1">Wert des Bonus: <strong>400 €</strong></p>
              <p className="text-white/80">Sofort umsetzbar → erste Besucher schon in den ersten Tagen.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 md:gap-6 gap-12 my-12 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#00A6FB] rounded-xl flex items-center justify-center mx-auto mb-3">
                  <FaCheck className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Ein Ansprechpartner</h4>
                <p className="text-white/80 text-sm">Keine Abstimmung mit mehreren Dienstleistern. Alles aus einer Hand</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#00A6FB] rounded-xl flex items-center justify-center mx-auto mb-3">
                  <FaCheck className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Perfekt abgestimmt</h4>
                <p className="text-white/80 text-sm">Design, Technik & Texte arbeiten nahtlos zusammen für messbare Ergebnisse</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#00A6FB] rounded-xl flex items-center justify-center mx-auto mb-3">
                  <FaCheck className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Messbar & planbar</h4>
                <p className="text-white/80 text-sm">Alle Besucher und Anfragen jederzeit sichtbar und steuerbar</p>
              </div>
              <div className="text-center">
            <div className="w-12 h-12 bg-[#00A6FB] rounded-xl flex items-center justify-center mx-auto mb-3">
              <FaCheck className="w-5 h-5 text-white" />
            </div>
            <h4 className="font-semibold mb-2">Risikofreier Start</h4>
            <p className="text-white/80 text-sm">
              Starten Sie mit 50% Anzahlung. Den Rest zahlen Sie erst nach erfolgreichem Launch.
            </p>
          </div>

            </div>

            <CTAProjectStart />
            <p className="text-[13px] text-white/60 mt-3">Kostenloses Erstgespräch – unverbindlich & ohne Risiko</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Service;
