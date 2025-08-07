import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'

const ServiceCard = ({ title, text, className = "" }) => {
  const cardRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
      }
    )
  }, [])

  return (
    <div
      ref={cardRef}
      className={`bg-gray-50 p-6 rounded-lg shadow-md transform transition duration-300 ease-in-out hover:scale-[1.03] hover:shadow-lg ${className}`}
    >
      <h3 className="text-xl font-semibold mb-2 text-[#001D3D]">{title}</h3>
      <p className="text-base text-[#000814]">{text}</p>
    </div>
  )
}

export default ServiceCard
