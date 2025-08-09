import React from 'react'
import { useNavigate } from 'react-router-dom'

const CTA1 = ({
  bg = "bg-transparent", // gleich mit Tailwind-Klasse starten
  color = "text-[#000814]",
  text = "Kostenloses Erstgespräch",
  onClick,
}) => {
  const navigate = useNavigate()

  const handleClick = () => {
    if (onClick) onClick() // Menü schließen, falls nötig
    navigate('/erstgespraech') // hier zur Erstgespräch-Seite navigieren
  }

  return (
    <button
      onClick={handleClick}
      className={`${bg} ${color} px-4 py-2 rounded shadow-md border-2 transform hover:-translate-y-1 ease-in border-[#003566] cursor-pointer hover:text-[#001D3D] hover:border-[#001D3D] transition`}
    >
      {text}
    </button>
  )
}

export default CTA1
