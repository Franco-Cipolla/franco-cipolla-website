import React, { useEffect, useRef } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const CTAHome = () => {
  const navigate = useNavigate()
  const sectionRef = useRef(null)

  const handleClick = () => {
    navigate('/erstgespraech')
  }

  useEffect(() => {
    if (!sectionRef.current) return
    const elements = sectionRef.current.querySelectorAll('.cta-animate')
    gsap.fromTo(
      elements,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      }
    )
  }, [])

  return (
    <section
      ref={sectionRef}
      className="text-black py-12 my-32 px-6 text-center"
    >
      <h2 className="cta-animate text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
        Ihre Website verschenkt Anfragen? <br/>Lassen Sie uns das ändern. Kostenlos.
      </h2>

      <p className="cta-animate text-base sm:text-lg mb-6 max-w-xl mx-auto">
        Ich zeige Ihnen genau, <strong>wo Ihre Website Anfragen verschenkt </strong>
        und wie Sie daraus mehr Kunden gewinnen können. <br /><br />
        Ich betreue bewusst nur 2 neue Kunden pro Monat, um echte Ergebnisse zu liefern.
      </p>

      <button
        onClick={handleClick}
        className="cta-animate inline-flex cursor-pointer transform hover:-translate-y-1 ease-in items-center gap-2 bg-black text-white font-semibold px-6 py-3 rounded-full hover:bg-[#001D3D] transition"
      >
        Kostenlose Website-Analyse starten <FaArrowRight />
      </button>
      <p className='cta-animate text-[15px] mt-3 text-black/60'>Ohne Risiko & Unverbindlich</p>

    </section>
  )
}

export default CTAHome
