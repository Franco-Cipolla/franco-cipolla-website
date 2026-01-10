import React from 'react';
import Marquee from 'react-fast-marquee';
import { FaLaptopCode, FaSearch, FaRocket, FaPenNib, FaReact, FaGitAlt, FaChartLine, FaHandshake, FaSmileBeam, FaWordpress, FaFigma } from 'react-icons/fa';

const services = [
  { label: 'Webdesign', icon: <FaFigma /> },
  { label: 'Webentwicklung', icon: <FaLaptopCode /> },
  { label: 'SEO', icon: <FaSearch /> },
  { label: 'Performance Optimierung', icon: <FaRocket /> },
  { label: 'Copywriting', icon: <FaPenNib /> },
  { label: 'Wordpress', icon: <FaWordpress /> },
  { label: 'Gewinnsteigerung', icon: <FaChartLine /> },
  { label: "Kundengewinnung", icon: <FaHandshake /> },
  { label: "Kundenzufriedenheit", icon: <FaSmileBeam /> },
];

const ServiceMarquee = () => {
  return (
    <div className='mt-[100px] xl:mt-[200px] mb-[140px]'>
      {/* Intro-Text */}
      <p className="text-center text-md lg:text-xl text-[#000814]/80 max-w-2xl mx-auto mb-8">
        Ich bringe die Websites von KMUs näher an echte Ergebnisse: <span className="font-semibold block text-[#001D3D]">mehr Sichtbarkeit, mehr Anfragen, mehr Umsatz.</span>
      </p>

      {/* Mobile Marquee */}
      <div className='lg:hidden space-y-5'>
        <Marquee gradient={false} speed={50} pauseOnHover={false} direction='right'>
          {services.slice(0, 5).map((service, i) => (
            <span key={i} className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#001D3D] px-6 whitespace-nowrap">
              {service.icon} {service.label}
            </span>
          ))}
        </Marquee>
        <Marquee gradient={false} speed={75} pauseOnHover={false} direction='left'>
          {services.slice(5).map((service, i) => (
            <span key={i} className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#003566] px-6 whitespace-nowrap">
              {service.icon} {service.label}
            </span>
          ))}
        </Marquee>
      </div>

      {/* Desktop Marquee */}
      <div className='hidden lg:block space-y-10'>
        <Marquee gradient={false} speed={75} pauseOnHover={false}>
          {services.map((service, i) => (
            <span key={i} className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#001D3D] px-6 whitespace-nowrap">
              {service.icon} {service.label}
            </span>
          ))}
        </Marquee>
        <Marquee gradient={false} speed={75} pauseOnHover={false} direction='right'>
          {services.map((service, i) => (
            <span key={i} className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#003566] px-6 whitespace-nowrap">
              {service.icon} {service.label}
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default ServiceMarquee;
