import React from 'react'
import HeadingText from '../HeadingText'
import ProjectItem from '../ProjectItem'
import { allProjects } from '@/ProjectData'

const MyProjectsSection = () => {
  return (
    <section className='bg-zinc-900 py-32 px-10 md:px-0' id='projects'>
      <div className='container mx-auto'>
        <div className='mb-10'>
          <HeadingText text='My Projects' emphasis='Projects' />
        </div>
        {/* Projects Cards */}
        {allProjects.map((item, index) => (
          <ProjectItem
            key={index}
            keyItem={index}
            title={item.title}
            description={item.description}
            tags={item.tags}
            imagePath={item.imagePath}
            projectLink={item.projectLink}
            githubLink={item.githubLink}
          />
        ))}
      </div>
    </section>
  )
}

export default MyProjectsSection
