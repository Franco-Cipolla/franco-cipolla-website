import React from 'react'
import { useNavigate } from 'react-router-dom'

const CTA1 = ({
  bg = "bg-transparent", // gleich mit Tailwind-Klasse starten
  color = "text-[#000814]",
  text = "🔍 Kostenlose Website-Analyse",
  onClick,
  hover= "hover:text-[#001D3D]",
  text2= "text-base",
}) => {
  const navigate = useNavigate()

 const handleClick = () => {
  if (onClick) onClick();

  if (window.gtag) {
    window.gtag("event", "cta_click", {
      label: "Kostenlose Website-Analyse",
      location: "CTA1",
    });
  }

  navigate("/erstgespraech");
};


  return (
    <button
      onClick={handleClick}
      className={`${bg} ${color} ${text2} px-4 py-2 rounded shadow-md border-2 transform hover:-translate-y-1 ease-in border-[#003566] cursor-pointer ${hover} hover:border-[#001D3D] transition`}
    >
      {text}
    </button>
  )
}

export default CTA1
