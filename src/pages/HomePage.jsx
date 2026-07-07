import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import ServiceMarquee from '../components/ServiceMarquee';
import ProblemSolution from '../components/ProblemSolution';
import Service from '../components/Service';
import ProcessSection from '../components/ProcessSection';
import FAQSection from '../components/FAQSection';
import CTAHome from '../components/CTAHome';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';
import NeuroWebAward from '../components/NeuroWebAward';

const HomePage = () => {
  return (
    <>

      <Helmet>
  {/* Perfekte Länge (56 Zeichen) – Positioniert Sie sofort lokal */}
  <title>Webdesigner Ennepetal | Websites für mehr Kundenanfragen</title>

  {/* Knackige 152 Zeichen – löst das Problem des Kunden direkt auf Google */}
  <meta name="description" content="Website erstellen lassen Ennepetal. Websites die messbar Kunden einbringen. Ihr Webdesigner in Ennepetal & Umgebung. Jetzt Gratis Website-Analyse sichern!" />
  <meta name="keywords" content="Webdesign Ennepetal, Webdesigner Ennepetal, Homepage erstellen Ennepetal, Website Ennepetal, Webdesign Ennepe-Ruhr-Kreis, Website erstellen lassen Ennepetal" />

  <link rel="canonical" href="https://www.franco-cipolla.de/" />

  {/* Open Graph & Twitter */}
  <meta property="og:title" content="Websites, die Kunden bringen | Webdesign Ennepetal" />
  <meta property="og:description" content="Professionelle Websites für lokale Unternehmen im Ruhrgebiet, die messbar Anfragen generieren." />
  <meta property="og:image" content="https://franco-cipolla.de/og-preview.jpg" />
  <meta property="og:url" content="https://www.franco-cipolla.de/" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Websites, die Kunden bringen – Franco Cipolla" />
  <meta name="twitter:description" content="Individuelle Websites für Selbstständige & Unternehmen, die planbare Kundenanfragen generieren." />
  <meta name="twitter:image" content="https://franco-cipolla.de/og-preview.jpg" />
</Helmet>
      <main>
        <Hero />
        <Testimonials/>
        <NeuroWebAward />
        <ServiceMarquee />
        <ProblemSolution />
        <Service />
        <ProcessSection />
        <FAQSection />
        <CTAHome />
        <Contact />
      </main>
    </>
  )
}

export default HomePage;
