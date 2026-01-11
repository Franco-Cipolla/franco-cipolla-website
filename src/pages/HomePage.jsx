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

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Websites, die Kunden bringen – Franco Cipolla, Webdesigner aus Ennepetal</title>
        <meta name="description" content="Ihre Website bringt keine Kunden? Ich erstelle Websites für Selbstständige & Unternehmen in Ennepetal & Umgebung, die wirklich Kundenanfragen bringen. Modernes Design, klare Struktur und Conversion-Optimierung – starten Sie jetzt durch und sichern sich planbare Anfragen." />
        <link rel="canonical" href="https://www.franco-cipolla.de/" />
        <meta property="og:title" content="Websites, die Kunden bringen – Franco Cipolla" />
        <meta property="og:description" content="Individuelle Websites für Selbstständige & Unternehmen, die planbare Kundenanfragen generieren." />
        <meta property="og:image" content="https://franco-cipolla.de/og-preview.png" />
        <meta property="og:url" content="https://www.franco-cipolla.de/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Websites, die Kunden bringen – Franco Cipolla" />
        <meta name="twitter:description" content="Individuelle Websites für Selbstständige & Unternehmen, die planbare Kundenanfragen generieren." />
        <meta name="twitter:image" content="https://franco-cipolla.de/og-preview.png" />
      </Helmet>

      <main>
        <Hero />
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
