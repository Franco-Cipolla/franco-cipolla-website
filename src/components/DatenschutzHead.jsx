import React from 'react'
import { Helmet } from 'react-helmet'
const DatenschutzHead = () => {
  return (
    <Helmet>
      <title>Datenschutzerklärung – Franco Cipolla, Webdesigner Ennepetal</title>
      <meta
        name="description"
        content="Datenschutzerklärung von Franco Cipolla – Ihr Webdesigner aus Ennepetal. Informationen zum Datenschutz und der Nutzung personenbezogener Daten auf meiner Website."
      />
      <meta name="robots" content="noindex, nofollow" />
      <link rel="canonical" href="https://franco-cipolla.de/datenschutz" />

      {/* Open Graph */}
      <meta property="og:title" content="Datenschutzerklärung – Franco Cipolla, Webdesigner Ennepetal" />
      <meta
        property="og:description"
        content="Datenschutzerklärung von Franco Cipolla – Transparenter Umgang mit Ihren Daten auf meiner Website."
      />
      <meta property="og:url" content="https://franco-cipolla.de/datenschutz" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://franco-cipolla.de/images/og-datenschutz.jpg" />
    </Helmet>
  )
}

export default DatenschutzHead
