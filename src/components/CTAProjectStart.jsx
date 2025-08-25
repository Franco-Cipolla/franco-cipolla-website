import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaRocket} from "react-icons/fa"
const CTAProjectStart = ({ text = "Jetzt Projekt starten" ,onClick}) => {
  const navigate = useNavigate()
  const handleClick = () => {
    if (onClick) onClick() // Menü schließen, falls nötig
    navigate('/erstgespraech') // hier zur Erstgespräch-Seite navigieren
  }

  return (

    <button onClick={handleClick} className="cursor-pointer inline-flex items-center gap-2 bg-[#00A6FB] hover:bg-[#0090d1] text-white font-semibold py-3 px-8 rounded-xl text-lg transition-all transform hover:-translate-y-1 hover:shadow-lg">
                  <FaRocket className="w-5 h-5" />
              {text}
    </button>
  )
}

export default CTAProjectStart
