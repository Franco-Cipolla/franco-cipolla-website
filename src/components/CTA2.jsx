import React from 'react'
import { Link } from 'react-router-dom'

const CTA2 = ({text="Contact"}) => {
  return (
    <Link to="/contact"><button className={`px-4 py-2 transform hover:-translate-y-1 ease-in  rounded border-[#003566] shadow-md border-1 bg-[#003566] text-white cursor-pointer hover:bg-[#001D3D] hover:border-[#001D3D] transition `}>{text}</button></Link>
  )
}

export default CTA2
