import React from 'react'
import { useNavigate } from 'react-router-dom'

const CTA2 = ({ text = "Kontakt" }) => {
  const navigate = useNavigate()
  const handleClick = () => {
  if (window.gtag) {
    window.gtag("event", "cta_click", {
      label: "Kontakt",
      location: "CTA2",
    });
  }

  navigate("/", { state: { scrollTo: "contact" } });
};


  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 transform hover:-translate-y-1 ease-in rounded border-[#003566] shadow-md border-2 bg-[#003566] text-white cursor-pointer hover:bg-[#001D3D] hover:border-[#001D3D] transition"
    >
      {text}
    </button>
  )
}

export default CTA2
