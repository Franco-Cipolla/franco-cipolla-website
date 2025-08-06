import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import ProjectCard from './ProjectCard'
const Projects = () => {
  return (
    <section className='w-full mt-30 lg:mt-35 py-16 sm:py-24 md:py-32 px-4 sm:px-6 xl:px-0 mx-auto max-w-[700px] xl:max-w-[1100px] '>
        <h1 className="text-3xl md:text-5xl font-bold text-black leading-tight mb-5"> Ein Projekt, das für sich spricht</h1>
        <div>
            <ProjectCard iamge="/src/assets/my-site-preview.png" title="Meine eigene Website – Strategie trifft Design" challenge="Ich wollte eine Website, die nicht nur gut aussieht, sondern Kunden überzeugt."/>



        </div>
    </section>
  )
}

export default Projects
