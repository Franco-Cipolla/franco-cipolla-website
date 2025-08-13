import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const CTAHome = () => {
  return (
    <section className=" text-black py-12 px-6  mt-16 text-center">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold  mb-6">
        Bereit für eine Website, die Kunden gewinnt?
      </h2>
      <p className="text-base sm:text-lg mb-6 max-w-xl mx-auto">
        Lass uns dein Projekt gemeinsam starten – mit einer Website, die nicht nur gut aussieht, sondern verkauft. Kostenloses Erstgespräch inklusive.
      </p>
      <a
        href="/erstgespraech"
        className="inline-flex items-center gap-2 bg-black text-white lg:text-white/85 font-semibold px-6 py-3 rounded-full hover:bg-purple lg:hover:text-white transition"
      >
        Erstgespräch vereinbaren <FaArrowRight />
      </a>
    </section>
  )
}

export default CTAHome
