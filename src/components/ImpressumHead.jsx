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
      </Helmet>
  )
}

export default ImpressumHead
