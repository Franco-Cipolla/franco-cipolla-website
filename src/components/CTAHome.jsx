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
        Möchten Sie wissen, wie Ihre Website zur Kundengewinnung beitragen kann?
      </h2>

      <p className="cta-animate text-base sm:text-lg mb-6 max-w-xl mx-auto">
        Im kostenlosen Erstgespräch schauen wir gemeinsam,
       wo Ihre Website verbessert werden kann
       und wie sie gezielt Anfragen generieren könnte.
      <br />
      <br />
      Ehrlich, unverbindlich und ohne Verkaufsdruck.
      </p>

      <button
        onClick={handleClick}
        className="cta-animate inline-flex cursor-pointer transform hover:-translate-y-1 ease-in items-center gap-2 bg-black text-white lg:text-white/95 font-semibold px-6 py-3 rounded-full hover:bg-purple lg:hover:text-white transition"
      >
        Kostenloses Erstgespräch anfragen <FaArrowRight />
      </button>
    </section>
  )
}

export default CTAHome
