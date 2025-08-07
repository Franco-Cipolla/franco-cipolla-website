import React from 'react'
import { useNavigate } from 'react-router-dom'

const CTA2 = ({ text = "Contact" }) => {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate('/', { state: { scrollTo: 'contact' } })}
      className="px-4 py-2 transform hover:-translate-y-1 ease-in rounded border-[#003566] shadow-md border-2 bg-[#003566] text-white cursor-pointer hover:bg-[#001D3D] hover:border-[#001D3D] transition"
    >
      {text}
    </button>
  )
}

export default CTA2
