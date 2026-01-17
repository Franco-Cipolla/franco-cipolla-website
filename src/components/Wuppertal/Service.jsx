import React from 'react'
import { FaMapMarkedAlt, FaBullseye, FaChartLine, FaCheck } from 'react-icons/fa'
import CTAProjectStart from '../CTAProjectStart'

const Service = () => {
  return (
    <section className="py-20 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Headline */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
            Websites für Unternehmen in Wuppertal, <br />
            <span className="text-[#003566]">
              die gezielt auf Kundenanfragen ausgerichtet sind.
            </span>
          </h2>

          <p className="text-lg text-[#000814]/80 max-w-3xl mx-auto leading-relaxed">
            Viele Unternehmen in Wuppertal haben eine Website.
            <br />
            Das Problem: <strong>Besucher kommen – und gehen wieder.</strong>
            <br /><br />
            Nicht weil Ihre Arbeit schlecht ist,
            sondern weil die Website <strong>kein klares System</strong> hat,
            das Interessenten gezielt zur Anfrage führt.
          </p>
        </div>

        {/* USPs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">

          <div className="bg-[#f8fafc] rounded-3xl p-8 text-center shadow-sm">
            <FaMapMarkedAlt className="w-10 h-10 text-[#00A6FB] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">
              Lokal relevant für Wuppertal
            </h3>
            <p className="text-[#000814]/80 text-sm leading-relaxed">
              Die Website wird auf Suchanfragen aus Wuppertal ausgerichtet –
              mit klaren lokalen Signalen, Google-Maps-Integration
              und Inhalten, die regionalen Besuchern sofort klar sind.
            </p>
          </div>

          <div className="bg-[#f8fafc] rounded-3xl p-8 text-center shadow-sm">
            <FaBullseye className="w-10 h-10 text-[#00A6FB] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">
              Klare Führung statt Verwirrung
            </h3>
            <p className="text-[#000814]/80 text-sm leading-relaxed">
              Besucher erkennen innerhalb weniger Sekunden,
              <strong> was Sie anbieten</strong>,
              <strong> für wen es relevant ist </strong>
              und <strong>wie sie Kontakt aufnehmen</strong>.
            </p>
          </div>

          <div className="bg-[#f8fafc] rounded-3xl p-8 text-center shadow-sm">
            <FaChartLine className="w-10 h-10 text-[#00A6FB] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">
              Struktur statt Hoffnung
            </h3>
            <p className="text-[#000814]/80 text-sm leading-relaxed">
              Jede Seite folgt einer klaren Logik:
              Aufmerksamkeit → Vertrauen → Handlung.
              So entsteht nachvollziehbar,
              <strong> wo und warum Anfragen entstehen</strong>.
            </p>
          </div>

        </div>

        {/* Offer / System */}
        <div className="bg-gradient-to-r from-[#001D3D] to-[#003566] rounded-3xl p-10 text-center text-white shadow-xl mb-20">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Das Lokale-Anfragen-System™
          </h3>

          <p className="text-white/90 max-w-3xl mx-auto leading-relaxed">
            Keine klassische "Visitenkarten-Website“.
            <br />
            Sondern ein <strong>klar aufgebautes Website-System</strong>,
            das speziell für lokale Unternehmen entwickelt wurde,
            um Besucher strukturiert <strong>in Anfragen zu führen</strong>. <br/> <strong>Aktuell Inklusive Bonus (im Wert von 300€): </strong> Website-Besucher-Startpaket. 2 fertige Social-Media-Posts + kurzes Video, um Besucher auf Ihre Website zu lenken. <span className="italic">Bonus nur für die nächsten 3 Kunden inklusive!</span>
          </p>

          <p className="text-sm text-white/70 max-w-3xl mx-auto my-6 mb-12">
            Wenn Sie wissen möchten, wie das System auch für andere Regionen funktioniert:
            <a
              href="/"
              className="underline ml-1 hover:text-white transition"
            >
              Überblick zum Lokale-Anfragen-System™
            </a>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-10">
            {[
              'Anfragen-fokussierte Seitenstruktur',
              'Lokale SEO-Grundlage für Wuppertal',
              'Schnell & mobil optimiert',
              'Persönliche Umsetzung ohne Agentur-Chaos'
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-10 h-10 bg-[#00A6FB] rounded-xl flex items-center justify-center mb-3">
                  <FaCheck className="text-white" />
                </div>
                <p className="text-white/85 text-sm">{item}</p>
              </div>
            ))}
          </div>

          <CTAProjectStart />
          <p className="text-[13px] text-white/60 mt-3">
            Kostenloses Erstgespräch · ehrlich · unverbindlich
          </p>
        </div>

      </div>
    </section>
  )
}

export default Service
