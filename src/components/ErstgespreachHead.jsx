import React from 'react'
import { Helmet } from 'react-helmet'

const ErstgespreachHead = () => {
  return (
    <Helmet>
      <title>Erstgespräch vereinbaren – Franco Cipolla, Webdesigner Ennepetal</title>
      <meta
        name="description"
        content="Vereinbare jetzt dein kostenloses Erstgespräch mit Franco Cipolla, deinem Webdesigner aus Ennepetal. Lass uns gemeinsam dein Projekt starten!"
      />
      <link rel="canonical" href="https://franco-cipolla.de/erstgespraech" />

      {/* Open Graph */}
      <meta property="og:title" content="Erstgespräch vereinbaren – Franco Cipolla, Webdesigner Ennepetal" />
      <meta
        property="og:description"
        content="Jetzt kostenloses Erstgespräch vereinbaren und deine Website mit Franco Cipolla professionell gestalten lassen."
      />
      <meta property="og:url" content="https://franco-cipolla.de/erstgespraech" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://franco-cipolla.de/og-homepage.JPG" />
      <meta property="og:image:alt" content="Franco Cipolla, Webdesigner aus Ennepetal" />

    </Helmet>
  )
}

export default ErstgespreachHead
