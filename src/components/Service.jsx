import React from 'react'
import serviceBg from '../assets/serviceBg.jpg'
import CTAProjectStart from './CTAProjectStart'
import ServiceCard from './ServiceCard'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const Service = () => {
   const sectionRef = useRef(null)

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll('.service-card')

    gsap.fromTo(
      cards,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    )
  }, [])
  return (
    <section
      className="relative py-16 px-6 mt-5 text-black overflow-hidden"
      id="service"
      ref={sectionRef}
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
      <div id="service-start" className="h-0" />

      <h1 className='text-3xl md:text-4xl pt-14 font-bold text-black text-center leading-tight mt-15 mb-6 '>Meine Leistungen. Dein Online-Erfolg.</h1>
      <p className="text-lg text-gray-700 hidden md:block text-center max-w-2xl mx-auto mb-28">
        Maßgeschneiderte Weblösungen für Selbstständige, Agenturen und Unternehmen – mit Fokus auf Performance, Design, Kundengewinnung und Sichtbarkeit.
      </p>
      <p className="text-lg md:hidden text-gray-700 text-center max-w-2xl mx-auto mb-28">
        Maßgeschneiderte Weblösungen für Unternehmen – mit Fokus auf Performance, Kundengewinnung und Sichtbarkeit.
      </p>

      <div className="relative z-10 max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <ServiceCard title="💻 Webdevelopment" text="Technisch sauber, schnell und sicher: Ich entwickle performante Websites, die auf allen Geräten zuverlässig funktionieren – von der Landingpage bis zum komplexen Webprojekt." />
        <ServiceCard title="🎨 Webdesign" text="Modernes Design, das Vertrauen schafft: Deine Website wird visuell ansprechend, intuitiv bedienbar und auf deine Zielgruppe zugeschnitten – für den perfekten ersten Eindruck." />
        <ServiceCard title="✍️ Copywriting" text="Worte, die verkaufen: Ich liefere Texte, die deine Leistungen klar kommunizieren, Emotionen wecken und Besucher gezielt zur Kontaktaufnahme führen." />
        <ServiceCard title="📈 SEO" text="Mehr Sichtbarkeit bei Google: Mit gezielter Suchmaschinenoptimierung bringe ich deine Website nach vorne – damit potenzielle Kunden dich finden, bevor sie zur Konkurrenz gehen." />
        <ServiceCard
          className="md:col-span-2 flex flex-col text-center justify-center"
          title="🤝 Einen zuverlässigen IT-Partner"
          text={
            <>
              <span className="block md:hidden">
                Direkt erreichbar, schnelle Antworten, persönliche Betreuung. Ich bin für dich da – kompetent, transparent und zuverlässig.
              </span>
              <span className="hidden md:block">
                Du brauchst einen IT-Partner, der nicht nur technisch versiert ist, sondern auch wirklich für dich da ist? Ich bin erreichbar, antworte schnell und betreue dich persönlich – mit Kompetenz, Transparenz und echter Zuverlässigkeit. So entsteht eine Zusammenarbeit, auf die du dich verlassen kannst.
              </span>
            </>
          }
        />

        </div>


      <div className="relative z-10 max-w-4xl mx-auto my-12 mb-20 text-center">
        <CTAProjectStart text="Jetzt Projekt starten" />
        <p className="mt-4 text-sm text-gray-600">
          Lass uns in einem kostenlosen Erstgespräch herausfinden, wie ich dir helfen kann, online sichtbar zu werden.
        </p>

      </div>
    </section>
  )
}

export default Service
