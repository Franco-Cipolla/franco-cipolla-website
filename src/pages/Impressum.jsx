'use client'

import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async';
const Impressum = () => {
  return (
    <>
    <Helmet>
        <title>Impressum – Franco Cipolla, Webdesigner aus Ennepetal</title>
        <meta name="description" content="Impressum der Website von Franco Cipolla, Webdesigner aus Ennepetal. Alle Angaben gemäß § 5 DDG, Kontakt, Haftung und Urheberrecht." />
        <link rel="canonical" href="https://www.franco-cipolla.de/impressum" />

        <meta property="og:title" content="Impressum – Franco Cipolla, Webdesigner" />
        <meta property="og:description" content="Impressum der Website von Franco Cipolla, Webdesigner aus Ennepetal. Alle Angaben gemäß § 5 DDG, Kontakt, Haftung und Urheberrecht." />
        <meta property="og:image" content="https://franco-cipolla.de/og-preview.png" />
        <meta property="og:url" content="https://www.franco-cipolla.de/impressum" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Impressum – Franco Cipolla, Webdesigner" />
        <meta name="twitter:description" content="Impressum der Website von Franco Cipolla, Webdesigner aus Ennepetal. Alle Angaben gemäß § 5 DDG, Kontakt, Haftung und Urheberrecht." />
        <meta name="twitter:image" content="https://franco-cipolla.de/og-preview.png" />
      </Helmet>
    <section className="w-full flex items-center mt-20 justify-center bg-white text-black">
      <div className="max-w-[950px] xl:max-w-[1100px] px-6 py-20">
        <h1 className="text-3xl md:text-4xl font-bold mb-10">Impressum</h1>

        <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
          <div>
            <p className="font-semibold">Angaben gemäß § 5 DDG (vorläufig, keine aktive Gewerbetätigkeit)</p>
            <p className="mt-2">
              Franco Cipolla<br />
              Wuppermannstraße 14<br />
              58256 Ennepetal<br />
              Deutschland
            </p>
          </div>

          <div>
            <p className="font-semibold">Kontakt</p>
            <p className="mt-2">
              Telefon:{' '}
              <a
                href="tel:+4917675398004"
                className="underline text-[#003566] hover:text-[#001D3D] transition-colors duration-200"
              >
                +49 176 75398004
              </a>
              <br />
              E-Mail:{' '}
              <p
                className="underline text-[#003566] hover:text-[#001D3D] transition-colors duration-200"
              >
                franco_cipolla@web.de
              </p>
            </p>
          </div>

          <div>
            <p className="font-semibold">Verantwortlich für den Inhalt gemäß § 18 Abs. 2 MStV</p>
            <p className="mt-2">Franco Cipolla, Anschrift wie oben.</p>
          </div>

          <div>
            <p className="font-semibold">Hinweis zur Rechtsstellung</p>
            <p className="mt-2">
              Der Betreiber dieser Website ist minderjährig. Eine gewerbliche Tätigkeit ist derzeit noch nicht aufgenommen. Die Genehmigung gemäß § 112 BGB durch das zuständige Amtsgericht wird aktuell beantragt. Alle Inhalte auf dieser Website dienen ausschließlich der Information und Vorbereitung einer zukünftigen Tätigkeit.
            </p>
          </div>

          <div>
            <p className="font-semibold">Haftung für Inhalte</p>
            <p className="mt-2">
              Als Diensteanbieter bin ich gemäß § 5 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG bin ich jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </div>

          <div>
            <p className="font-semibold">Haftung für Links</p>
            <p className="mt-2">
              Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </div>

          <div>
            <p className="font-semibold">Urheberrecht</p>
            <p className="mt-2">
              Die durch mich erstellten Inhalte und Werke auf dieser Website unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen meiner schriftlichen Zustimmung.
            </p>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-12">
          Zuletzt aktualisiert: 16. August 2025
        </p>
      </div>
    </section>
    </>
  )
}

export default Impressum
