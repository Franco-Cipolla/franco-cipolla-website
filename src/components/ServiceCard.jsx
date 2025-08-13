import React, { useRef, useEffect } from 'react'
import { gsap, ScrollTrigger } from "./gsapSetup";

gsap.registerPlugin(ScrollTrigger)

const ServiceCard = ({ title, text, className = "" }) => {
  const cardRef = useRef(null)
  const innerRef = useRef(null)

  useEffect(() => {
    if (!innerRef.current) return

    gsap.fromTo(
      innerRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: innerRef.current,
          start: 'top 85%',
        },
      }
    )
  }, [])

  return (
    <div
      ref={cardRef}
      className={`bg-gray-50 p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.03] hover:shadow-lg ${className}`}
    >
      <div ref={innerRef}>
        <h3 className="text-xl font-semibold mb-5 text-[#001D3D]">{title}</h3>
        <p className="text-base text-[#000814]">{text}</p>
      </div>
    </div>
  )
}

export default ServiceCard
