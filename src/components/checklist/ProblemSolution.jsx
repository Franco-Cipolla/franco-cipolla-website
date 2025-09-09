import React from 'react'
import Problem from './Problem'
import WebsiteOptimierenCTA from './WebsiteOptimierenCTA'
const ProblemSolution = () => {
  return (
    <section className='w-full p-4  flex flex-col'>
      <h1 className='text-2xl text-center font-black mb-6'>Deine Website sieht vielleicht gut aus – aber macht sie wirklich Umsatz?</h1>
      <p className='text-center text-black/75  mb-18'>Vielleicht hast du schon Besucher, aber kaum <span className='block'></span> Anfragen  oder Verkäufe. <span className='block'></span> Das Problem: Dir fehlen ein paar entscheidende Elemente, die eine Website profitabel machen.</p>
    <div>
      <p className='text-xl text-center font-bold mb-6'>Vielleicht kennst du das:</p>

    <div className='flex flex-col gap-4 max-w-3xl mx-auto mb-12'>
    <Problem text="❌ Du hast eine Website, aber Anfragen oder Verkäufe bleiben fast aus."/>
    <Problem text="❌ Besucher klicken herum und verschwinden wieder, ohne etwas zu tun."/>
    <Problem text="❌ Du investierst in Werbung oder SEO, doch deine Kasse bleibt leer. "/>
    <Problem text="❌ Statt Kunden zu gewinnen, verbrennst du Zeit, Geld und Nerven.“"/>
    </div>
    </div>
    <p className='text-xl text-center font-bold mb-8'>Die Wahrheit ist:</p>
    <p className='text-[16px] text-center font-bold text-black/90 mb-4'>Es fehlen die entscheidenden Knackpunkte, die Besucher in Kunden verwandeln.</p>
    <p className=' text-center  text-black/75 '> Ohne diese Knackpunkte verlierst du täglich potenzielle Kunden, verbrennst wertvollen Traffic und lässt bares Geld auf der Straße liegen.</p>
    <div className='my-13 flex justify-center'>
    <WebsiteOptimierenCTA />
    </div>
    </section>
  )
}

export default ProblemSolution
