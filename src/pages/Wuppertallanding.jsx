import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Wuppertal/Hero.jsx';
import SEOJsonLD from '../components/SEOJsonLD.jsx';
import ServiceMarquee from '../components/ServiceMarquee.jsx';
import ProblemSolution from '../components/Wuppertal/ProblemSolution.jsx';
import Service from '../components/Wuppertal/Service.jsx';
import ProcessSection from '../components/Wuppertal/ProcessSection.jsx';
import FAQSection from '../components/Wuppertal/FAQSection.jsx';
import CTAHome from '../components/Wuppertal/CTAHome.jsx';
import Contact from '../components/Wuppertal/Contact.jsx';

const Wuppertallanding = () => {
  return (
    <>
      <Helmet>
        <title>Websites, die Kunden bringen für Wuppertal – Franco Cipolla, Webdesigner für Wuppertal</title>
        <meta
          name="description"
          content="Ihre Website bringt keine Kunden? Ich erstelle Websites für Selbstständige & Unternehmen in Wuppertal, die wirklich Kundenanfragen bringen. Modernes Design, klare Struktur und Conversion-Optimierung – starten Sie jetzt durch und sichern sich planbare Anfragen."
        />
        <link rel="canonical" href="https://www.franco-cipolla.de/wuppertal" />
        <meta property="og:title" content="Websites, die Kunden bringen – Franco Cipolla" />
        <meta
          property="og:description"
          content="Individuelle Websites für Selbstständige & Unternehmen in Wuppertal, die planbare Kundenanfragen generieren."
        />
        <meta property="og:image" content="https://franco-cipolla.de/og-preview.png" />
        <meta property="og:url" content="https://www.franco-cipolla.de/wuppertal" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Websites, die Kunden bringen – Franco Cipolla" />
        <meta
          name="twitter:description"
          content="Individuelle Websites für Selbstständige & Unternehmen in Wuppertal, die planbare Kundenanfragen generieren."
        />
        <meta name="twitter:image" content="https://franco-cipolla.de/og-preview.png" />
      </Helmet>

      {/* WICHTIG: page="Wuppertal" */}
      <SEOJsonLD page="Wuppertal" />

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
  );
};

export default Wuppertallanding;
