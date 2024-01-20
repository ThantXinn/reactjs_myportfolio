import React from 'react'
import ProjectCard from '../components/ProjectCard'

const Project = () => {
  return (
      <section id='project' className='flex w-full border-b dark:border-b-slate-50 border-b-slate-700 py-10'>
      <div className='w-full flex justify-center mb-12'>
          <ProjectCard/>     
      </div>
    </section>
  )
}

export default Project