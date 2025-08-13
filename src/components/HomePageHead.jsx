import React from 'react'
import { Helmet } from 'react-helmet'

const HomePageHead = () => {
  return (
    <Helmet>
      <title>Franco Cipolla – Webentwickler & Webdesigner Ennepetal | Individuelle Websites</title>
      <meta
        name="description"
        content="Moderne, individuell gestaltete Websites von Franco Cipolla, Webentwickler aus Ennepetal. Professionelles Webdesign, React.js, SEO & mehr."
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://franco-cipolla.de/" />
      <link rel="preload" href="/images/Hero-Illustration.webp" as="image" type="image/webp" />



      {/* Open Graph */}
      <meta property="og:title" content="Webentwickler Ennepetal – Franco Cipolla | Individuelle Websites" />
      <meta property="og:description" content="Moderne Websites, React.js, SEO & Webdesign aus Ennepetal." />
      <meta property="og:url" content="https://franco-cipolla.de/" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://franco-cipolla.de/og-homepage.JPG" />
      <meta property="og:image:alt" content="Franco Cipolla, Webdesigner aus Ennepetal" />

      {/* Strukturierte Daten */}
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Franco Cipolla",
          "jobTitle": "Webentwickler",
          "url": "https://franco-cipolla.de",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Ennepetal",
            "addressCountry": "DE"
          }
        }
        `}
      </script>
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Webentwicklung & Webdesign",
          "provider": {
            "@type": "Person",
            "name": "Franco Cipolla",
            "url": "https://franco-cipolla.de",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Ennepetal",
              "addressCountry": "DE"
            }
          },
          "areaServed": {
            "@type": "Place",
            "name": "NRW"
          },
          "description": "Individuelle Websites mit React.js, SEO und Copywriting für Unternehmen in Ennepetal und Umgebung."
        }
        `}
      </script>

    </Helmet>
  )
}

export default HomePageHead
