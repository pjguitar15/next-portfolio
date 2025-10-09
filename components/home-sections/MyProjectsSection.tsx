'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  EyeIcon,
} from '@heroicons/react/24/outline'
import { allProjects } from '@/ProjectData'

const MyProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  // Define bento grid layout patterns
  const getGridItemClass = (index: number) => {
    const patterns = [
      'md:col-span-2 md:row-span-2', // Large featured
      'md:col-span-1 md:row-span-1', // Medium
      'md:col-span-1 md:row-span-1', // Medium
      'md:col-span-2 md:row-span-1', // Wide
      'md:col-span-1 md:row-span-2', // Tall
    ]
    return patterns[index % patterns.length]
  }

  const getImageHeight = (index: number) => {
    const heights = [
      'h-80 md:h-96', // Large featured
      'h-48', // Medium
      'h-48', // Medium
      'h-64', // Wide
      'h-80', // Tall
    ]
    return heights[index % heights.length]
  }

  return (
    <section className='py-20 bg-zinc-950'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold text-zinc-100 mb-6'>
            Featured{' '}
            <span className='bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent'>
              Projects
            </span>
          </h2>
          <p className='text-xl text-zinc-400 max-w-3xl mx-auto'>
            A showcase of applications I&apos;ve built using modern web
            technologies
          </p>
        </div>

        {/* Bento Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-16'>
          {allProjects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-zinc-800/50 border border-zinc-700 hover:border-zinc-600 transition-all duration-300 hover:shadow-2xl backdrop-blur-sm ${getGridItemClass(
                index,
              )}`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Image Container */}
              <div
                className={`relative overflow-hidden ${getImageHeight(index)}`}
              >
                <Image
                  src={project.imagePath}
                  alt={project.title}
                  fill
                  className='object-cover transition-transform duration-500 group-hover:scale-110'
                />

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${
                    hoveredProject === index ? 'opacity-100' : 'opacity-60'
                  }`}
                />

                {/* Action Buttons */}
                <div
                  className={`absolute top-4 right-4 flex gap-2 transition-all duration-300 ${
                    hoveredProject === index
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 -translate-y-2'
                  }`}
                >
                  <a
                    href={project.projectLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='p-2 bg-zinc-800/90 backdrop-blur-sm rounded-lg hover:bg-zinc-700 transition-colors border border-zinc-600'
                    title='View Live Project'
                  >
                    <ArrowTopRightOnSquareIcon className='w-4 h-4 text-zinc-300' />
                  </a>
                  <a
                    href={project.githubLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='p-2 bg-zinc-800/90 backdrop-blur-sm rounded-lg hover:bg-zinc-700 transition-colors border border-zinc-600'
                    title='View Source Code'
                  >
                    <CodeBracketIcon className='w-4 h-4 text-zinc-300' />
                  </a>
                </div>

                {/* Project Info Overlay */}
                <div className='absolute bottom-0 left-0 right-0 p-6'>
                  <h3 className='text-white font-bold text-xl mb-2'>
                    {project.title}
                  </h3>

                  {/* Tags */}
                  <div className='flex flex-wrap gap-2 mb-3'>
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className='px-2 py-1 bg-zinc-800/60 backdrop-blur-sm text-zinc-300 text-xs rounded-full border border-zinc-600'
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className='px-2 py-1 bg-zinc-800/60 backdrop-blur-sm text-zinc-300 text-xs rounded-full border border-zinc-600'>
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Description - only show on larger cards */}
                  {(index % 5 === 0 || index % 5 === 3) && (
                    <p
                      className={`text-white/90 text-sm leading-relaxed transition-all duration-300 ${
                        hoveredProject === index
                          ? 'opacity-100 max-h-20'
                          : 'opacity-0 max-h-0'
                      } overflow-hidden`}
                    >
                      {project.description.substring(0, 120)}...
                    </p>
                  )}
                </div>

                {/* View Details Button */}
                <div
                  className={`absolute bottom-6 right-6 transition-all duration-300 ${
                    hoveredProject === index
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-4'
                  }`}
                >
                  <button className='flex items-center gap-2 px-4 py-2 bg-zinc-800/90 text-zinc-300 rounded-lg font-medium hover:bg-zinc-700 transition-colors border border-zinc-600'>
                    <EyeIcon className='w-4 h-4' />
                    <span className='text-sm'>View Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-t border-zinc-700'>
          <div className='text-center'>
            <div className='text-3xl font-bold text-teal-400 mb-2'>
              {allProjects.length}+
            </div>
            <div className='text-zinc-400 text-sm'>Projects Completed</div>
          </div>
          <div className='text-center'>
            <div className='text-3xl font-bold text-cyan-400 mb-2'>10+</div>
            <div className='text-zinc-400 text-sm'>Technologies Used</div>
          </div>
          <div className='text-center'>
            <div className='text-3xl font-bold text-green-400 mb-2'>3+</div>
            <div className='text-zinc-400 text-sm'>Years Experience</div>
          </div>
          <div className='text-center'>
            <div className='text-3xl font-bold text-orange-400 mb-2'>100%</div>
            <div className='text-zinc-400 text-sm'>Client Satisfaction</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className='text-center'>
          <div className='bg-gradient-to-r from-zinc-800/80 to-zinc-700/80 rounded-2xl p-8 border border-zinc-600 backdrop-blur-sm'>
            <h3 className='text-2xl font-bold text-zinc-100 mb-4'>
              Interested in working together?
            </h3>
            <p className='text-zinc-400 mb-6 max-w-2xl mx-auto'>
              I&apos;m always excited to take on new challenges and create
              amazing digital experiences. Let&apos;s discuss your next project!
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='inline-flex items-center justify-center px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
              >
                Start a Project
              </Link>
              <a
                href='https://github.com/pjguitar15'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center px-8 py-4 border-2 border-zinc-600 text-zinc-300 font-semibold rounded-lg hover:border-zinc-500 hover:bg-zinc-800 transition-all duration-200'
              >
                <CodeBracketIcon className='w-4 h-4 mr-2' />
                View All Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyProjectsSection
