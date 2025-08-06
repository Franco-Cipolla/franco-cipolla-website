import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
const ProjectCard = ({image,title,challenge}) => {
  return (
    <div>
                <div>
                <img src={`${image}`} alt="This is a Project Preview" />
                </div>
                <div>
                    <h2>{title}</h2>
                    <p>{`${challenge.slice(0,60)}...`}</p>
                    <div>
                    <button>Read More...<FaArrowRight/></button>
                    </div>
                </div>

            </div>
  )
}

export default ProjectCard
