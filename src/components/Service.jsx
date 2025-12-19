import React, { useRef } from 'react';
import {
  FaCode,
  FaPaintBrush,
  FaPenNib,
  FaSearchengin,
  FaHandshake,
  FaPhone,
  FaBolt,
  FaBriefcase,
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
      title: "Webdevelopment",
      subtitle: "Schnell, stabil & Google-ready",
      benefits: [
        "Ladezeiten unter 2 Sekunden. Besucher springen nicht mehr ab",
        "100 % responsive auf allen Geräten. Desktop bis Smartphone",
        "Hohe Sicherheitsstandards für Vertrauen & Stabilität",
        "Sauberer Code, damit Google Ihre Website bevorzugt",
        "Wartung & technischer Support jederzeit möglich"
      ],
      highlight: true
    },
    {
      Icon: FaPaintBrush,
      title: "Webdesign",
      subtitle: "Design, das Besucher überzeugt",
      benefits: [
        "Moderner Auftritt, der sofort Professionalität vermittelt",
        "Klare Benutzerführung. Besucher finden sofort, was sie suchen",
        "Struktur, die gezielt zur Anfrage oder Kontaktaufnahme führt",
        "Individuell auf Ihre Zielgruppe zugeschnitten",
        "Mobile-first Design für perfekte Darstellung auf dem Smartphone"
      ]
    },
    {
      Icon: FaPenNib,
      title: "Copywriting",
      subtitle: "Texte, die verkaufen. ",
      benefits: [
        "Klare Sprache statt Fachchinesisch, jeder versteht Ihr Angebot",
        "Vertrauensaufbau durch verständliche & überzeugende Inhalte",
        "Typische Einwände Ihrer Kunden werden vorab beantwortet",
        "Call-to-Actions, die wirklich zu Anfragen führen",
        "SEO-optimierte Texte für bessere Google-Platzierungen"
      ]
    },
    {
      Icon: FaSearchengin,
      title: "SEO",
      subtitle: "Sie werden von Kunden gefunden.",
      benefits: [
        "Lokale Optimierung für Kunden aus Ihrer Region",
        "Keywords mit echter Kauf- und Anfrageabsicht",
        "Technische Optimierung für bessere Rankings",
        "OnPage-Optimierung für schnelle, messbare Ergebnisse",
        "Klare Seitenstruktur für optimale Google-Indexierung"
      ]
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-6 overflow-hidden bg-gradient-to-b from-white to-[#f8fafc]"
    >
      {/* Hintergrundbild */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${serviceBg})`, filter: 'blur(10px)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16" ref={headerRef} id="service-start">
          <h1 className="text-4xl md:text-5xl font-black text-[#001D3D] mb-6 leading-tight">
            Meine Leistungen.
            <span className="block bg-gradient-to-r from-[#003566] to-[#00A6FB] bg-clip-text text-transparent">
              Websites, die Kunden bringen.
            </span>
          </h1>

          <p className="text-lg text-[#000814]/80 max-w-3xl mx-auto mb-8 leading-relaxed">
            Ich entwickle Websites für Selbstständige und Unternehmen,
            die nicht nur gut aussehen,
            <strong className="text-[#001D3D]"> sondern messbar neue Kundenanfragen generieren.</strong>
          </p>

          {/* Kernversprechen */}
          <div className="flex flex-wrap justify-center gap-6 text-[#001D3D]/80 text-sm font-medium">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00A6FB] rounded-full" />
              <span>Direkter Kontakt . Kein Callcenter</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00A6FB] rounded-full" />
              <span>Klare Absprachen statt Fachchinesisch</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00A6FB] rounded-full" />
              <span>Ein Ansprechpartner von Start bis Livegang</span>
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, key) => (
            <ServiceCard key={key} {...service} />
          ))}

          {/* Mobile IT-Partner */}
          <div className="block md:hidden">
            <ServiceCard
              Icon={FaHandshake}
              title="IT-Partner"
              subtitle="Persönlich, zuverlässig & erreichbar"
              benefits={[
                "Direkter Draht, keine Warteschleifen",
                "Schnelle Antworten. Meist am selben Tag",
                "Langfristige Betreuung statt Einmal-Projekt",
                "Klare Kommunikation auf Augenhöhe",
                "Technisch stark & menschlich erreichbar"
              ]}
            />
          </div>

          {/* Desktop IT-Partner */}
          <div className="hidden md:block md:col-span-2">
            <div className="bg-white/90 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl backdrop-blur-md rounded-3xl p-10 border border-[#001D3D]/10 shadow-lg text-center h-full flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-2xl bg-gradient-to-r from-[#003566] to-[#00A6FB] text-white mx-auto">
                  <FaHandshake size={32} />
                </div>
                <h3 className="text-3xl font-bold text-[#001D3D] mb-8">
                  Ihr persönlicher Ansprechpartner. Kein Agenturmodell
                </h3>
                <p className="md:text-lg text-[#000814]/80 max-w-3xl mx-auto mb-10 leading-relaxed">
                  Ich begleite Sie persönlich vom ersten Gespräch bis zur fertigen Website.
                  Keine Weitergabe, keine Umwege, keine Wartezeiten,
                  sondern klare Verantwortung und direkte Kommunikation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center p-4">
                  <div className="w-14 h-14 bg-[#00A6FB]/10 rounded-xl flex items-center justify-center mb-4">
                    <FaPhone className="text-2xl text-[#00A6FB]" />
                  </div>
                  <h4 className="font-semibold text-[#001D3D] mb-2">Direkter Draht</h4>
                  <p className="text-sm text-[#000814]/70 text-center">
                    Sie sprechen immer direkt mit mir ohne Umwege.
                  </p>
                </div>
                <div className="flex flex-col items-center p-4">
                  <div className="w-14 h-14 bg-[#00A6FB]/10 rounded-xl flex items-center justify-center mb-4">
                    <FaBolt className="text-2xl text-[#00A6FB]" />
                  </div>
                  <h4 className="font-semibold text-[#001D3D] mb-2">Schnelle Reaktion</h4>
                  <p className="text-sm text-[#000814]/70 text-center">
                    Meist innerhalb weniger Stunden, nicht erst nach Tagen.
                  </p>
                </div>
                <div className="flex flex-col items-center p-4">
                  <div className="w-14 h-14 bg-[#00A6FB]/10 rounded-xl flex items-center justify-center mb-4">
                    <FaBriefcase className="text-2xl text-[#00A6FB]" />
                  </div>
                  <h4 className="font-semibold text-[#001D3D] mb-2">Langfristig</h4>
                  <p className="text-sm text-[#000814]/70 text-center">
                    Kein Einmal-Projekt sondern eine nachhaltige Zusammenarbeit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Komplettpaket CTA */}
        <div className="bg-gradient-to-r transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl from-[#001D3D] to-[#003566] rounded-3xl p-10 text-center text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-8">
              Alles, was Ihre Website braucht um Kunden zu gewinnen
            </h3>
            <p className="md:text-lg text-white/80 mb-10 max-w-3xl mx-auto">
              Technik, Design, Texte und Sichtbarkeit greifen perfekt ineinander,
              damit aus Besuchern planbar neue Kunden werden.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#00A6FB] rounded-xl flex items-center justify-center mx-auto mb-3">
                  <FaCheck className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Ein Ansprechpartner</h4>
                <p className="text-white/70 text-sm">
                  Keine Abstimmung mit mehreren Dienstleistern
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#00A6FB] rounded-xl flex items-center justify-center mx-auto mb-3">
                  <FaCheck className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Perfekt abgestimmt</h4>
                <p className="text-white/70 text-sm">
                  Design, Technik & Texte arbeiten gemeinsam für Anfragen
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#00A6FB] rounded-xl flex items-center justify-center mx-auto mb-3">
                  <FaCheck className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Schnell online</h4>
                <p className="text-white/70 text-sm">
                  Keine Verzögerungen durch unnötige Abstimmungen
                </p>
              </div>
            </div>

            <CTAProjectStart />
            <p className="text-[13px] text-white/60 mt-3">
              Kostenloses Erstgespräch – unverbindlich & ohne Risiko
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Service;
