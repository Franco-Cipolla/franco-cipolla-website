import React from 'react'
import { Helmet } from 'react-helmet'

const ImpressumHead = () => {
  return (
     <Helmet>
        <title>Impressum – Franco Cipolla | Webdesigner Ennepetal</title>
        <meta
          name="description"
          content="Impressum der Website von Franco Cipolla, Webdesigner aus Ennepetal. Rechtliche Angaben und Kontaktinformationen."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://franco-cipolla.de/impressum" />
       <meta property="og:image" content="https://franco-cipolla.de/og-homepage.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Franco Cipolla, Webdesigner aus Ennepetal" />

      </Helmet>
  )
}

export default ImpressumHead
