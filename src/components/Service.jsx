import React from 'react'
import BurgerGesprächBtn from './BurgerGesprächBtn'
import serviceBg from '../assets/serviceBg.jpg'
import CTAProjectStart from './CTAProjectStart'
import ServiceCard from './ServiceCard'

const Service = () => {
  return (
    <section
      className="relative py-16 px-6 mt-5 text-black overflow-hidden"
      id="service"
    >
      {/* Hintergrundbild mit Opacity, Blur und negativem Z-Index */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${serviceBg})`,
          opacity: 0.3,
          filter: 'blur(8px)',
          zIndex: -10,
        }}
      ></div>

      {/* Gradient-Fade oben */}
      <div className="absolute top-0 left-0 w-full h-32 z-0 bg-gradient-to-b from-white to-transparent"
          style={{ zIndex: -10 }}>

      </div>

      {/* Gradient-Fade unten */}
      <div className="absolute bottom-0 left-0 w-full h-32 z-0 bg-gradient-to-t from-white to-transparent"
           style={{ zIndex: -10 }}>
      </div>

      {/* Inhalt */}

      <h1 className='text-3xl md:text-4xl font-bold text-black text-center leading-tight mb-13'>Was du bekommst:</h1>


      <div className="relative z-10 max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <ServiceCard title="💻 Webdevelopment" text="Technisch sauber, schnell und sicher: Ich entwickle performante Websites, die auf allen Geräten zuverlässig funktionieren – von der Landingpage bis zum komplexen Webprojekt." />
        <ServiceCard title="🎨 Webdesign" text="Modernes Design, das Vertrauen schafft: Deine Website wird visuell ansprechend, intuitiv bedienbar und auf deine Zielgruppe zugeschnitten – für den perfekten ersten Eindruck." />
        <ServiceCard title="✍️ Copywriting" text="Worte, die verkaufen: Ich schreibe Texte, die deine Leistungen klar kommunizieren, Emotionen wecken und Besucher gezielt zur Kontaktaufnahme führen." />
        <ServiceCard title="📈 SEO" text="Mehr Sichtbarkeit bei Google: Mit gezielter Suchmaschinenoptimierung bringe ich deine Website nach vorne – damit potenzielle Kunden dich finden, bevor sie zur Konkurrenz gehen." />
        <ServiceCard className="absolute top-0 left-0" title="📱 Einen verlässlichen IT-Ler" text="Präsenz auf den richtigen Kanälen: Ich helfe dir, deine Marke auf Social Media zu positionieren und mit deiner Zielgruppe zu interagieren – für mehr Reichweite und Engagement." />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto mt-12 text-center">
        <CTAProjectStart text="Jetzt Projekt starten" />
        <p className="mt-4 text-sm text-gray-600">
          Lass uns in einem kostenlosen Erstgespräch herausfinden, wie ich dir helfen kann, online sichtbar zu werden.
        </p>

      </div>
    </section>
  )
}

export default Service
