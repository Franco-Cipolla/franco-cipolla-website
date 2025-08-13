import React from 'react'
import { Link } from 'react-router-dom'
import AboutHead from '../components/AboutHead'
import CTA2 from '../components/CTA2'

const AboutPage = () => {
  return (
    <>
      <AboutHead />
      <main className="max-w-[700px] xl:max-w-[1165px] mx-auto px-4 sm:px-6 md:px-8 mt-12 sm:mt-16 lg:mt-20 py-12 text-black">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">Über mich</h1>
        <p className='text-base sm:text-lg font-bold text-[#003566] mb-8'>
          Ihr Webentwickler & Webdesigner aus NRW
        </p>

        {/* 2-Col Grid mit Text und Bild */}
        <section className="my-6 sm:my-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Warum ich als Webdesigner in Ennepetal Ihre Website erstelle
            </h2>
            <p className="mb-4 text-sm sm:text-base leading-relaxed">
              Hallo, ich bin <strong>Franco Cipolla</strong>, ein leidenschaftlicher Webentwickler und Webdesigner aus <strong>Ennepetal, NRW</strong>.
              Mit 17 Jahren bringe ich frische Ideen, Kreativität und technisches Know-how mit, um Ihre Website individuell und mit höchster Qualität zu gestalten.
              Ich entwickle moderne, individuell programmierte Websites mit React.js, die nicht nur optisch überzeugen, sondern auch durch gezieltes <strong>OnPage-SEO</strong> und strategisches Copywriting Kunden gewinnen und die Online-Präsenz nachhaltig stärken.
            </p>
            <p className="text-sm sm:text-base leading-relaxed">
              Viele Unternehmen in und um Ennepetal haben noch keine moderne Website, eine veraltete Seite oder erhalten keine Anfragen über ihre Online-Präsenz.
              Genau hier setze ich an: Ich erstelle Ihnen, eine <strong>moderne Website in Ennepetal</strong>, die Kunden begeistert und <strong>echte Ergebnisse</strong> liefert.
            </p>
          </div>
          <div>
            <img
              src="/images/franco-cipolla.jpg" // Pfad zu deinem Bild anpassen!
              alt="Franco Cipolla - Webdesigner aus Ennepetal"
              className="w-full rounded-lg shadow-lg object-cover"
              loading="lazy"
            />
          </div>
        </section>

        <section className="my-6 sm:my-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Meine Leistungen in Webentwicklung und Webdesign in Ennepetal</h2>
          <p className="mb-4 text-sm sm:text-base leading-relaxed">
            Ich spezialisiere mich auf <strong>Webentwicklung mit React.js</strong>, individuelles Webdesign, <strong>Onpage-SEO</strong> und Copywriting für Websites.
            Jede Website wird von mir maßgeschneidert programmiert und gestaltet – keine Standardvorlagen, sondern eine digitale Lösung, die genau zu Ihrem Unternehmen passt.
          </p>
          <p className="text-sm sm:text-base leading-relaxed">
            So erhalten Sie eine Website, die nicht nur optisch überzeugt, sondern technisch einwandfrei läuft, Kunden anspricht und bei Google besser gefunden wird. Ein echter Mehrwert für Ihr Unternehmen.
          </p>
        </section>

        <section className="my-6 sm:my-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Meine Werte: Qualität, Vertrauen und Transparenz</h2>
          <p className="mb-4 text-sm sm:text-base leading-relaxed">
            Was mich besonders macht, ist die Kombination aus <strong>Vertrauenswürdigkeit, Verlässlichkeit</strong> und <strong>meine Expertise als Webentwickler</strong> in Ennepetal.
            Ich kommuniziere offen und transparent, halte meine Versprechen und liefere pünktlich.
            Für mich steht Qualität vor Quantität. Sie werden stolz auf ihre neue Website sein und sie wird Ihnen echten Mehrwert bieten.
          </p>
          <p className="text-sm sm:text-base leading-relaxed">
            Als junger Webentwickler habe ich den Vorteil, neueste Trends schnell umzusetzen und so Ihre Website modern und zukunftssicher zu gestalten.
          </p>
        </section>

        <section className="mt-6 sm:mt-8">
          <p className="text-base sm:text-lg font-semibold leading-relaxed">
            <strong>
              Lassen Sie uns gemeinsam Ihre Website verwirklichen <br /> ich freue mich auf Ihre Nachricht!
            </strong>
          </p>
        </section>

        <section className='mt-5'>
          <CTA2 />
        </section>
      </main>
    </>
  )
}

export default AboutPage
