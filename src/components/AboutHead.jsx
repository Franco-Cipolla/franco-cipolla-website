import React from 'react'
import { Helmet } from 'react-helmet'

const AboutHead = () => (
  <Helmet>
    <title>Über mich – Franco Cipolla | Webentwickler & Webdesigner Ennepetal</title>
    <meta
      name="description"
      content="Franco Cipolla – Webentwickler & Webdesigner aus Ennepetal. Ich erstelle individuelle Websites mit React.js, SEO und überzeugendem Webdesign für Unternehmen in NRW."
    />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://franco-cipolla.de/about" />

    {/* Open Graph / Facebook */}
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Über mich – Franco Cipolla | Webdesigner Ennepetal" />
    <meta
      property="og:description"
      content="Junger Webdesigner aus Ennepetal, spezialisiert auf individuelle React.js-Websites, Onpage-SEO und Webdesign mit Vertrauen und Qualität."
    />
    <meta property="og:url" content="https://franco-cipolla.de/about" />
    <meta property="og:image" content="https://franco-cipolla.de/images/franco-cipolla.jpg" />

    {/* Strukturierte Daten */}
    <script type="application/ld+json">
      {`
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Franco Cipolla",
        "jobTitle": "Webentwickler & Webdesigner",
        "url": "https://franco-cipolla.de/about",
        "image": "https://franco-cipolla.de/images/franco-cipolla.jpg",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Ennepetal",
          "addressCountry": "DE"
        },
        "description": "Franco Cipolla ist Webentwickler und Webdesigner aus Ennepetal, spezialisiert auf individuelle Websites mit React.js, SEO und Copywriting."
      }
      `}
    </script>
  </Helmet>
)

export default AboutHead
