
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

const HomePage = () => {
  const pageTitle =
    'Webdesign Ennepetal & Schwelm | Mehr Anfragen';

  const pageDescription =
    'Webdesigner für Ennepetal, Schwelm und Umgebung: Websites, die Vertrauen schaffen und Besucher zur Anfrage führen. Jetzt kostenlose Website-Analyse sichern.';

  const canonicalUrl = 'https://www.franco-cipolla.de/';

  const socialImage =
    'https://www.franco-cipolla.de/og-preview.jpg';

  return (
    <>
      <Helmet>
        {/* SEO */}
        <title>{pageTitle}</title>

        <meta
          name="description"
          content={pageDescription}
        />

        <link
          rel="canonical"
          href={canonicalUrl}
        />

        {/* Open Graph: WhatsApp, Facebook, LinkedIn */}
        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:locale"
          content="de_DE"
        />

        <meta
          property="og:site_name"
          content="Franco Cipolla Webdesign"
        />

        <meta
          property="og:title"
          content={pageTitle}
        />

        <meta
          property="og:description"
          content={pageDescription}
        />

        <meta
          property="og:url"
          content={canonicalUrl}
        />

        <meta
          property="og:image"
          content={socialImage}
        />

        <meta
          property="og:image:alt"
          content="Franco Cipolla – Webdesign für lokale Unternehmen"
        />

        {/* X / Twitter */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content={pageTitle}
        />

        <meta
          name="twitter:description"
          content={pageDescription}
        />

        <meta
          name="twitter:image"
          content={socialImage}
        />

        <meta
          name="twitter:image:alt"
          content="Webdesign und digitale Kundengewinnung von Franco Cipolla"
        />
      </Helmet>

      <main>
        <Hero />
        <Testimonials />
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

export default HomePage;
