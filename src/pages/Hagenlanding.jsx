import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hagen/Hero.jsx';
import SEOJsonLD from '../components/SEOJsonLD';
import ServiceMarquee from '../components/ServiceMarquee';
import ProblemSolution from '../components/Hagen/ProblemSolution.jsx';
import Service from '../components/Hagen/Service.jsx';
import ProcessSection from '../components/Hagen/ProcessSection.jsx';
import FAQSection from '../components/Hagen/FAQSection.jsx';
import CTAHome from '../components/Hagen/CTAHome';
import Contact from '../components/Hagen/Contact';

const HagenLanding = () => {
  return (
    <>
      <Helmet>
       <title>Webdesign Hagen – Warum 90% der Websites zu wenig Anfragen bringen - Franco Cipolla</title>
        <meta
          name="description"
          content="Die meisten Websites in Hagen sehen gut aus, bringen aber keine Kunden. Ich zeige Ihnen, wie Ihre Website mehr Anfragen generiert. Kostenlose Analyse."
        />
        <link rel="canonical" href="https://www.franco-cipolla.de/hagen" />
        <meta property="og:title" content="Websites, die Kunden bringen – Franco Cipolla" />
        <meta
          property="og:description"
          content="Individuelle Websites für Selbstständige & Unternehmen in Hagen, die planbare Kundenanfragen generieren."
        />
        <meta property="og:image" content="https://franco-cipolla.de/og-preview.png" />
        <meta property="og:url" content="https://www.franco-cipolla.de/hagen" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:title" content="Warum Ihre Website keine Kunden bringt (Hagen) - Franco Cipolla" />
<meta property="og:description" content="Und wie Sie das in messbare Anfragen verwandeln ohne viel Zeit zu investieren." />
        <meta name="twitter:image" content="https://franco-cipolla.de/og-preview.png" />
      </Helmet>

      {/* WICHTIG: page="hagen" */}
      <SEOJsonLD page="hagen" />

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

export default HagenLanding;
