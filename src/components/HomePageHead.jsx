import React from 'react'
import { Helmet } from 'react-helmet'
const HomePageHead = () => {
  return (
    <Helmet>
        <title>Webentwickler & Webdesigner Ennepetal - Franco Cipolla | Individuelle Websites</title>
        <meta
          name="description"
          content="Moderne, individuell gestaltete Websites von Franco Cipolla, Webentwickler aus Ennepetal. Professionelles Webdesign, React.js, SEO & mehr."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://franco-cipolla/" />

        {/* Open Graph */}
        <meta property="og:title" content="Webdesigner Ennepetal – Franco Cipolla | Individuelle Websites" />
        <meta property="og:description" content="Moderne Websites, React.js, SEO & Webdesign aus Ennepetal." />
        <meta property="og:url" content="https://franco-cipolla/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://franco-cipolla/images/og-homepage.jpg" />


      </Helmet>
  )
}

export default HomePageHead
