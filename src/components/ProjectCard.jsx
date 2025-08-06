import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'

const ProjectCard = ({ image, title, challenge, solution }) => {
  const [showFullText, setShowFullText] = useState(false)

  return (
    <div className="lg:w-[23rem] w-[20rem] p-4 bg-white overflow-hidden shadow-2xl rounded-4xl">
      <div>
        <img
          src={image}
          alt="This is a Project Preview"
          className="w-full rounded-2xl"
        />
      </div>

      <div className="flex flex-col items-start justify-between gap-5 mt-6">
        <h2 className="font-bold text-black text-xl">{title}</h2>

        {!showFullText ? (
          <p className="text-base text-[#000814] mb-5">
            {`${challenge.slice(0, 75)} ...`}
          </p>
        ) : (
          <>
            <p className="text-base text-[#000814] mb-2">{challenge}</p>
            <p className="text-base text-[#000814] mb-5">{solution}</p>
          </>
        )}

        <button
          onClick={() => setShowFullText(!showFullText)}
          className="border-1 font-bold border-[#240046] hover:border-[#3C096C] hover:text-[#3C096C] text-[#3C096C] px-4 py-1.5 flex items-center gap-1 rounded-2xl cursor-pointer transform hover:-translate-y-1 ease-in transition"
        >
          {showFullText ? 'Weniger' : 'Mehr Lesen'} <FaArrowRight />
        </button>
      </div>
    </div>
  )
}

export default ProjectCard
