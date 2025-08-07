import React from 'react'
import { useNavigate } from 'react-router-dom'

const CTAProjectStart = ({ text = "Projekt starten" }) => {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate('/', { state: { scrollTo: 'contact' } })}
      className="px-6 py-3 text-lg font-semibold tracking-wide text-[#5A3E4F] bg-gradient-to-br cursor-pointer from-[#EAEEE3] via-[#EFCFDA] to-[#E1C8D3] border-2 border-white  rounded hover:opacity-90 transition duration-300 ease-in-out shadow-md transform hover:-translate-y-1"
    >
      {text}
    </button>
  )
}

export default CTAProjectStart
