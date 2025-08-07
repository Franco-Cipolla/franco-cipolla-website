import React from 'react'
import { useNavigate } from 'react-router-dom'

const CTA1 = ({ bg = "transparent", color = "[#000814]", text = "Kostenloses Erstgespräch" }) => {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate('/', { state: { scrollTo: 'contact' } })}
      className={`px-4 py-2 rounded bg-${bg} shadow-md border-2 transform hover:-translate-y-1 ease-in border-[#003566] text-${color} cursor-pointer hover:text-[#001D3D] hover:border-[#001D3D] transition`}
    >
      {text}
    </button>
  )
}

export default CTA1
