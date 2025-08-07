import React from 'react'

const ServiceCard = ({title,text}) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-base text-[#000814]">
            {text}
          </p>
    </div>
  )
}

export default ServiceCard
