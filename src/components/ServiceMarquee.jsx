import React from 'react'
import Marquee from 'react-fast-marquee'

// Icon Imports
import { FaLaptopCode, FaSearch, FaRocket, FaPenNib, FaReact, FaGitAlt, FaChartLine, FaHandshake, FaSmileBeam, FaWordpress, FaFigma } from 'react-icons/fa'
import { MdWeb } from 'react-icons/md'

const deskServices = [
    { label: 'Webdesign', icon: <FaFigma /> },
    { label: 'Webentwicklung', icon: <FaLaptopCode /> },
    { label: 'SEO', icon: <FaSearch /> },
    { label: 'Performance Optimierung', icon: <FaRocket /> },
    { label: 'Copywriting', icon: <FaPenNib /> },
    { label: 'Wordpress', icon: <FaWordpress /> },
    { label: 'Gewinnsteigerung', icon: <FaChartLine /> },
    { label: "Kundengewinnung", icon: <FaHandshake /> },
    { label: "Kundenzufriedenheit", icon: <FaSmileBeam /> },

]

const mobileServices1 = [
    { label: 'Webdesign', icon: <FaFigma /> },
    { label: 'Webentwicklung', icon: <FaLaptopCode /> },
    { label: 'SEO', icon: <FaSearch /> },
    { label: 'Performance Optimierung', icon: <FaRocket /> },
    { label: "Kundengewinnung", icon: <FaHandshake /> },
]
const mobileServices2 = [
    { label: 'Copywriting', icon: <FaPenNib /> },
    { label: 'Wordpress', icon: <FaWordpress /> },
    { label: 'Gewinnsteigerung', icon: <FaChartLine /> },
    { label: "Kundenzufriedenheit", icon: <FaSmileBeam /> },

]

const ServiceMarquee = () => {
  return (
    <div className='mt-25 xl:mt-52 mb-35'>

        <p className="text-center text-md px-4 lg:text-xl text-[#000814]/80 max-w-2xl mx-auto mb-4">
            Ich bringe die Websites von KMUs näher an echte Ergebnisse: mehr Sichtbarkeit, mehr Anfragen, mehr Umsatz.
        </p>
        <div className='lg:hidden'>
        <Marquee
            className="mt-10 "
            gradient={false}
            speed={50}
            pauseOnHover={false}
            direction='right'
        >
            {mobileServices1.map((service, index) => (
                <span
                key={index}
                className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#001D3D] px-6 whitespace-nowrap"
                >
                {service.icon}
                {service.label}
                </span>
            ))}

        </Marquee>
        </div>
        <div className='lg:hidden'>
        <Marquee
            className="mt-5 "
            gradient={false}
            speed={75}
            pauseOnHover={false}
            direction='left'
        >
            {mobileServices2.map((service, index) => (
                <span
                key={index}
                className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#240046] px-6 whitespace-nowrap"
                >
                {service.icon}
                {service.label}
                </span>
            ))}

        </Marquee>
        </div>
        < div className="hidden lg:block">
            <Marquee
            className="mt-20"
            gradient={false}
            speed={75}
            pauseOnHover={false}
            >
            {deskServices.map((service, index) => (
                <span
                key={index}
                className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#001D3D] px-6 whitespace-nowrap"
                >
                {service.icon}
                {service.label}
                </span>
            ))}
            </Marquee>
            <div className="hidden lg:block">
                <Marquee
            className="mt-20"
            gradient={false}
            speed={75}
            pauseOnHover={false}
            direction='right'
            >
            {deskServices.map((service, index) => (
                <span
                key={index}
                className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[#240046] px-6 whitespace-nowrap"
                >
                {service.icon}
                {service.label}
                </span>
            ))}
            </Marquee>
            </div>
        </div>
    </div>
  )
}

export default ServiceMarquee
