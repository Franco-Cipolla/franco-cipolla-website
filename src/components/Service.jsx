import React, { useRef } from 'react';
import {
  FaCode,
  FaPaintBrush,
  FaPenNib,
  FaSearchengin,
  FaCheck
} from 'react-icons/fa';
import ServiceCard from "./ServiceCard";
import serviceBg from '/ServiceBg1.jpeg';
import CTAProjectStart from './CTAProjectStart';

const Service = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  const services = [
    {
      Icon: FaCode,
      title: "Webentwicklung",
      subtitle: "Jeder Besucher wird zum Kunden",
      benefits: [
        "Step-by-Step Besucherführung → Keine verlorenen Anfragen",
        "Schnelle Ladezeiten → Kunden springen nicht ab",
        "100 % responsive → Perfekt auf allen Geräten"
      ],
      highlight: true
    },
    {
      Icon: FaPaintBrush,
      title: "Webdesign",
      subtitle: "Design, das Vertrauen & Verkäufe steigert",
      benefits: [
        "Modernes Branding → Sofortige Professionalität",
        "Klare Benutzerführung → Besucher finden direkt, was sie suchen",
        "Conversion-orientierte Struktur → Automatisch Anfragen generieren "
      ]
    },
    {
      Icon: FaPenNib,
      title: "Copywriting",
      subtitle: "Texte, die überzeugen und zum Handeln animieren",
      benefits: [
        "Klare Sprache → Angebot sofort verständlich",
        "Vertrauen aufbauen → Besucher wissen, dass Sie die richtige Wahl sind",
        "Starke Call-to-Actions → Mehr direkte Kontaktanfragen"
      ]
    },
    {
      Icon: FaSearchengin,
      title: "SEO & Sichtbarkeit",
      subtitle: "Gefunden werden & echte Kunden gewinnen",
      benefits: [
        "Lokale Optimierung inkl. Google Maps → Kunden finden Sie sofort",
        "Keywords mit Kaufabsicht → Nur echte Interessenten",
        "OnPage-Optimierung → Struktur für Google & Besucher"
      ]
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-4 md:px-6 overflow-hidden bg-gradient-to-b from-white to-[#f8fafc]"
    >
      {/* Hintergrundbild */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-40 blur-sm"
        style={{ backgroundImage: `url(${serviceBg})` }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16" ref={headerRef} id="service-start">
          <h1 className=" mb-6 leading-tight text-3xl md:text-4xl font-bold text-center ">
            Meine Leistungen.
            <span className="block bg-gradient-to-r from-[#003566] to-[#00A6FB] bg-clip-text text-transparent">
              Websites, die Besucher in Kunden verwandeln
            </span>
          </h1>
          <p className="text-lg  text-[#000814]/80 max-w-3xl mx-auto mb-8 leading-relaxed">
            Ich entwickle Websites für Selbstständige und Unternehmen, die nicht nur gut aussehen, sondern <strong className="text-[#001D3D]">planbar neue Kundenanfragen generieren</strong>.
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
              <span>Planbare Leads & volle Kontrolle</span>
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, key) => (
            <ServiceCard key={key} {...service} />
          ))}
        </div>

        {/* Grand-Slam Paket */}
        <div className="bg-gradient-to-r from-[#001D3D] to-[#003566] rounded-3xl p-10 text-center text-white shadow-xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Rundum-Sorglos-Website: Nur das Komplettpaket funktioniert
            </h3>
            <p className="md:text-lg text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Website, Conversion-Optimierung, Google Maps Integration, persönliche Mini-Videos. Alles in einem Paket. Nur so gewinnen Sie planbar neue Kunden. Messbar & direkt.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
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
