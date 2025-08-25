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
      subtitle: "Technisch perfekt, blitzschnell",
      benefits: [
        "Ladezeiten unter 2 Sekunden für bessere Google-Rankings",
        "100% responsive auf allen Geräten - Desktop bis Smartphone",
        "Bestmögliche Sicherheitsmaßnahmen",
        "Suchmaschinenoptimiert für maximale Sichtbarkeit",
        "Wartung & technischer Support möglich"
      ],
      highlight: true
    },
    {
      Icon: FaPaintBrush,
      title: "Webdesign",
      subtitle: "Design, das Vertrauen schafft",
      benefits: [
        "Moderne Optik, die sofort Professionalität ausstrahlt",
        "Intuitive Benutzerführung - Besucher finden sofort was sie suchen",
        "Psychologisch optimiert für mehr Kundenanfragen",
        "Einzigartig auf deine Zielgruppe zugeschnitten",
        "Mobile-first Design für perfekte Smartphone-Darstellung"
      ]
    },
    {
      Icon: FaPenNib,
      title: "Copywriting",
      subtitle: "Texte, die überzeugen",
      benefits: [
        "Klarheit statt Fachchinesisch - deine Kunden verstehen dich sofort",
        "Emotionale Sprache, die Vertrauen aufbaut und zum Handeln motiviert",
        "Einwände vorwegnehmen und geschickt entkräften",
        "Call-to-Actions, die tatsächlich zu Kontaktaufnahmen führen",
        "SEO-optimiert für bessere Google-Findbarkeit"
      ]
    },
    {
      Icon: FaSearchengin,
      title: "SEO",
      subtitle: "Sichtbarkeit bei Google",
      benefits: [
        "Lokale Optimierung – Kunden aus deiner Region finden dich zuerst",
        "Keyword-Recherche für die Begriffe, nach denen gesucht wird",
        "Technische Optimierung für bessere Platzierungen",
        "OnPage-Optimierung für schnelle, messbare Ergebnisse",
        "Saubere Struktur für bessere Indexierung durch Google"
      ]
    }
  ];

  return (
    <section
      ref={sectionRef}

      className="relative py-20 px-6 overflow-hidden bg-gradient-to-b from-white to-[#f8fafc]"
    >
      {/* Hintergrundbild (soft blur) */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${serviceBg})`, filter: 'blur(10px)' }}
      />
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16" ref={headerRef}  id='service-start'>
          <h1 className="text-4xl md:text-5xl font-black text-[#001D3D] mb-6 leading-tight">
            Meine Leistungen.
            <span className="block bg-gradient-to-r from-[#003566] to-[#00A6FB] bg-clip-text text-transparent">
              Dein Online-Erfolg.
            </span>
          </h1>
          <p className="text-lg  text-[#000814]/80 max-w-3xl mx-auto mb-8 leading-relaxed">
            Maßgeschneiderte Weblösungen für Selbstständige, Agenturen und Unternehmen –
            <strong className="text-[#001D3D]"> mit Fokus auf Performance, Design, Kundengewinnung und Sichtbarkeit.</strong>
          </p>

          {/* Kernversprechen */}
          <div className="flex flex-wrap justify-center gap-6 text-[#001D3D]/80 text-sm font-medium">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00A6FB] rounded-full" />
              <span>Direkter Kontakt, keine Wartezeiten</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00A6FB] rounded-full" />
              <span>Transparente Kommunikation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00A6FB] rounded-full" />
              <span>Persönliche Betreuung</span>
            </div>
          </div>
        </div>

                {/* Service Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}

          {/* IT-Partner Card */}
          <div className="md:col-span-2">
            <div className="bg-white/90 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl backdrop-blur-md rounded-3xl p-10 border border-[#001D3D]/10 shadow-lg text-center h-full flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-2xl bg-gradient-to-r from-[#003566] to-[#00A6FB] text-white mx-auto">
                  <FaHandshake size={32} />
                </div>
                <h3 className="text-3xl font-bold text-[#001D3D] mb-8">
                  Einen zuverlässigen IT-Partner
                </h3>
                <p className="md:text-lg text-[#000814]/80 max-w-3xl mx-auto mb-10 leading-relaxed">

                  Ich bin <strong className="text-[#001D3D]">direkt erreichbar</strong>, antworte <strong className="text-[#001D3D]">schnell</strong> und betreue dich <strong className="text-[#001D3D]">persönlich</strong> –
                  mit Kompetenz, Transparenz und echter Zuverlässigkeit.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center p-4">
                  <div className="w-14 h-14 bg-[#00A6FB]/10 rounded-xl flex items-center justify-center mb-4">
                    <FaPhone className="text-2xl text-[#00A6FB]" />
                  </div>
                  <h4 className="font-semibold text-[#001D3D] mb-2">Direkter Draht</h4>
                  <p className="text-sm text-[#000814]/70 text-center">
                    Kein Callcenter, keine Warteschleifen. Du redest direkt mit mir.
                  </p>
                </div>
                <div className="flex flex-col items-center p-4">
                  <div className="w-14 h-14 bg-[#00A6FB]/10 rounded-xl flex items-center justify-center mb-4">
                    <FaBolt className="text-2xl text-[#00A6FB]" />
                  </div>
                  <h4 className="font-semibold text-[#001D3D] mb-2">Schnelle Antworten</h4>
                  <p className="text-sm text-[#000814]/70 text-center">
                    Meist antworte ich innerhalb weniger Stunden, nicht Tage.
                  </p>
                </div>
                <div className="flex flex-col items-center p-4">
                  <div className="w-14 h-14 bg-[#00A6FB]/10 rounded-xl flex items-center justify-center mb-4">
                    <FaBriefcase className="text-2xl text-[#00A6FB]" />
                  </div>
                  <h4 className="font-semibold text-[#001D3D] mb-2">Langfristig</h4>
                  <p className="text-sm text-[#000814]/70 text-center">
                    Nicht nur Projektabwicklung – eine Partnerschaft für Jahre.
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
              Dein komplettes Online-Paket
            </h3>
            <p className="md:text-lg text-white/80 mb-10 max-w-3xl mx-auto">
              Website-Entwicklung, Design, SEO und Copywriting – alles perfekt aufeinander abgestimmt,
              aus einer Hand. Kein Koordinationsaufwand für dich.
            </p>

            {/* Vorteile */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#00A6FB] rounded-xl flex items-center justify-center mx-auto mb-3">
                  <FaCheck className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Ein Ansprechpartner</h4>
                <p className="text-white/70 text-sm">Keine Abstimmungsprobleme zwischen verschiedenen Dienstleistern</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#00A6FB] rounded-xl flex items-center justify-center mx-auto mb-3">
                  <FaCheck className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Perfekt abgestimmt</h4>
                <p className="text-white/70 text-sm">Design, Technik und Texte arbeiten optimal zusammen</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#00A6FB] rounded-xl flex items-center justify-center mx-auto mb-3">
                  <FaCheck className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Schneller online</h4>
                <p className="text-white/70 text-sm">Keine Wartezeiten durch parallele statt sequenzielle Bearbeitung</p>
              </div>
            </div>

            <CTAProjectStart/>
            <p className="text-[13px] text-white/60 mt-3">
              Kostenloses Erstgespräch – Unverbindlich & ohne Risiko
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
