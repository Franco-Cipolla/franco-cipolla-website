import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'


const CTAHome = () => {
  const navigate = useNavigate()
    const handleClick = () => {
      navigate('/erstgespraech') // hier zur Erstgespräch-Seite navigieren
    }

  return (
    <section className=" text-black py-12 my-32 px-6  text-center">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold  mb-6">
        Bereit für eine Website, die Kunden gewinnt?
      </h2>
      <p className="text-base sm:text-lg mb-6 max-w-xl mx-auto">
        Lass uns dein Projekt gemeinsam starten – mit einer Website, die nicht nur gut aussieht, sondern verkauft. Kostenloses Erstgespräch inklusive.
      </p>
      <button
        onClick={handleClick}
        className="inline-flex cursor-pointer items-center gap-2 bg-black text-white lg:text-white/85 font-semibold px-6 py-3 rounded-full hover:bg-purple lg:hover:text-white transition"
      >
        Erstgespräch vereinbaren <FaArrowRight />
      </button>
    </section>
  )
}

export default CTAHome
