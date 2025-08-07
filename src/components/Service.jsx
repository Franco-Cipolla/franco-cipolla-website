import React from 'react'
import BurgerGesprächBtn from './BurgerGesprächBtn'

const Service = () => {
  return (
    <section className="py-16 px-6  mt-5 text-black" id='service'>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Digitale Lösungen, die dein Business voranbringen</h2>
        <p className=" lg:hidden text-base text-[#000814]">
          Ich unterstütze dich dabei, online sichtbar zu werden – mit einer Website, die überzeugt und verkauft.
        </p>
        <p className="hidden lg:block text-lg  text-[#000814]">
          Als Experte für Webdesign, Webdevelopment, Copywriting und SEO entwickle ich digitale Auftritte, die nicht nur gut aussehen, sondern gezielt Kunden gewinnen. Ich kombiniere klares Design mit strategischem Content und technischer Präzision – damit deine Website zum stärksten Vertriebskanal wird.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-50 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">💻 Webdevelopment</h3>
          <p className='text-base text-[#000814]'>Technisch sauber, schnell und sicher: Ich entwickle performante Websites, die auf allen Geräten zuverlässig funktionieren – von der Landingpage bis zum komplexen Webprojekt.</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">🎨 Webdesign</h3>
          <p className='text-base text-[#000814]'>Modernes Design, das Vertrauen schafft: Deine Website wird visuell ansprechend, intuitiv bedienbar und auf deine Zielgruppe zugeschnitten – für den perfekten ersten Eindruck.</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">✍️ Copywriting</h3>
          <p className='text-base text-[#000814]'>Worte, die verkaufen: Ich schreibe Texte, die deine Leistungen klar kommunizieren, Emotionen wecken und Besucher gezielt zur Kontaktaufnahme führen.</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">📈 SEO</h3>
          <p className='text-base text-[#000814]'>Mehr Sichtbarkeit bei Google: Mit gezielter Suchmaschinenoptimierung bringe ich deine Website nach vorne – damit potenzielle Kunden dich finden, bevor sie zur Konkurrenz gehen.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-12 text-center">
        <BurgerGesprächBtn />

      </div>
    </section>
  )
}

export default Service
