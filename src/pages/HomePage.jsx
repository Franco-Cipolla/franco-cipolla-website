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
import SEOJsonLD from '../components/SEOJsonLD';
import Testimonials from '../components/Testimonials';

const HomePage = () => {
  return (
    <>
      <Helmet>
<title>Websites für mehr Kundenanfragen - Webdesign Ennepetal & Region</title>        <meta name="description" content="Kostenlose Website-Analyse für Betriebe in Ennepetal & Umgebung. Ihr Webdesign-Experte für mehr Kundenanfragen durch SEO, Verkaufspsychologie & Conversion-Optimierung." />
        <link rel="canonical" href="https://www.franco-cipolla.de/" />
        <meta property="og:title" content="Webdesign Ennepetal – Websites, die Kunden bringen" />        <meta property="og:description" content="Individuelle Websites für Selbstständige & Unternehmen, die planbare Kundenanfragen generieren." />
        <meta property="og:image" content="https://franco-cipolla.de/og-preview.png" />
        <meta property="og:url" content="https://www.franco-cipolla.de/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Websites, die Kunden bringen – Franco Cipolla" />
        <meta name="twitter:description" content="Individuelle Websites für Selbstständige & Unternehmen, die planbare Kundenanfragen generieren." />
        <meta name="twitter:image" content="https://franco-cipolla.de/og-preview.png" />

      </Helmet>
      <SEOJsonLD page="home" />

      <main>
        <Hero />
        <Testimonials/>
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
