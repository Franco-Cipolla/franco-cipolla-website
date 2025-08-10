import { Helmet } from 'react-helmet';

const AboutHead = () => (
  <Helmet>
    <title>Über mich - Franco Cipolla | Webentwickler & Webdesigner Ennepetal</title>
    <meta
      name="description"
      content="Franco Cipolla – junger und innovativer Webentwickler & Webdesigner aus NRW. Ich erstelle individuelle Websites mit React.js, Onpage-SEO und überzeugendem Webdesign. Vertrauen, Qualität und Transparenz für Ihren Online-Erfolg."
    />

    {/* Open Graph / Facebook */}
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Über mich – Franco Cipolla | Webdesigner Ennepetal" />
    <meta
      property="og:description"
      content="Junger Webdesigner aus Ennepetal, spezialisiert auf individuelle React.js-Websites, Onpage-SEO und Webdesign mit Vertrauen und Qualität."
    />
    <meta property="og:url" content="https://franco-cipolla.de/about" />
    <meta property="og:image" content="https://franco-cipolla.de/path-zum-bild.jpg" />


  </Helmet>
);

export default AboutHead;
