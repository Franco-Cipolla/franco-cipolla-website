import React from 'react'
import ChecklistSichernCTA from './ChecklistSichernCTA'
const Hero = () => {
  return (
    <section className='w-full h-screen flex flex-col px-4 '>
        <div className="relative overflow-hidden">

        <span
          className="fixed will-change-transform w-[250px] h-[250px] blur-[150px] opacity-100 sm:w-[300px] sm:h-[300px] sm:blur-[80px] md:w-[400px] md:h-[400px] md:blur-[100px]  bottom-[0px] right-[-90px] rounded-full bg-gradient-to-bl from-[#63b4ff] via-[#001D3D] to-[#00A6FB] z-[-1]"
        />
      </div>
        <h1 className='font-black text-center mt-20 text-[32px] text-[#428EFF]'>Website-Check: Verschenkst du täglich Kunden?</h1>
        <p className='text-center font-bold text-[15px] mt-10 text-black/75'>Hol dir meine kostenlose Website-Checkliste und entdecke,
             ob deine Seite die entscheiden den Elemente hat, um Besucher in zahlende Kunden zu verwandeln.</p>
             <ul className='flex flex-col gap-7 mt-10'>
                <li className='font-bold text-[15px] text-center '> ✅ Finde sofort heraus, welche Erfolgsfaktoren deiner Website fehlen</li>
                <li className='font-bold text-[15px] text-center '>✅ Lerne die wichtigsten Conversion-Hebel kennen, die Top-Unternehmen bares Geld bringen</li>
                <li className='font-bold text-[15px] text-center '>✅ Erhalte eine klare Schritt-für-Schritt-Anleitung, um deine Website profitabler zu machen</li>
                <li className='font-bold text-[15px] text-center '>✅ Kostenlos, sofort verfügbar und direkt umsetzbar</li>
             </ul>
             <div className='my-10 pb-10 mx-auto '>
                <ChecklistSichernCTA /></div>

    </section>
  )
}

export default Hero
