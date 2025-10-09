'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  EyeIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { allProjects } from '@/ProjectData'

type Project = {
  title: string
  description: string
  imagePath: string
  tags: string[]
  projectLink?: string
  githubLink?: string
}

const MyProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<Project | null>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const dialogRef = useRef<HTMLDivElement | null>(null)

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
    const heights = ['h-80 md:h-96', 'h-48', 'h-48', 'h-64', 'h-80']
    return heights[index % heights.length]
  }

  const openModal = (project: Project, trigger?: HTMLButtonElement | null) => {
    setSelected(project)
    setOpen(true)
    if (trigger) triggerRef.current = trigger
  }

  const closeModal = () => {
    setOpen(false)
  }

  // Body scroll lock + ESC to close + focus management
  useEffect(() => {
    if (open) {
      const prevOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'

      // focus first focusable inside modal
      const t = setTimeout(() => {
        const focusable = dialogRef.current?.querySelector<HTMLElement>(
          'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])',
        )
        focusable?.focus()
      }, 0)

      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') closeModal()
      }
      window.addEventListener('keydown', onKeyDown)

      return () => {
        document.body.style.overflow = prevOverflow
        window.removeEventListener('keydown', onKeyDown)
        clearTimeout(t)
        // return focus to the trigger
        triggerRef.current?.focus()
      }
    }
  }, [open])

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
          <p className='text-md text-zinc-400 max-w-3xl mx-auto'>
            A showcase of applications I&apos;ve built using modern web
            technologies
          </p>
        </div>

        {/* Bento Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-16'>
          {allProjects.map((project: Project, index: number) => (
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
                  {project.projectLink && (
                    <a
                      href={project.projectLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='p-2 bg-zinc-800/90 backdrop-blur-sm rounded-lg hover:bg-zinc-700 transition-colors border border-zinc-600'
                      title='View Live Project'
                    >
                      <ArrowTopRightOnSquareIcon className='w-4 h-4 text-zinc-300' />
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='p-2 bg-zinc-800/90 backdrop-blur-sm rounded-lg hover:bg-zinc-700 transition-colors border border-zinc-600'
                      title='View Source Code'
                    >
                      <CodeBracketIcon className='w-4 h-4 text-zinc-300' />
                    </a>
                  )}
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

                  {/* Description - only on larger cards */}
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
                  <button
                    className='flex items-center gap-2 px-4 py-2 bg-zinc-800/90 text-zinc-300 rounded-lg font-medium hover:bg-zinc-700 transition-colors border border-zinc-600'
                    onClick={(e) => openModal(project, e.currentTarget)}
                    aria-haspopup='dialog'
                    aria-controls='project-details-dialog'
                  >
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
          <Stat
            value={`${allProjects.length}+`}
            label='Projects Completed'
            color='text-teal-400'
          />
          <Stat value='10+' label='Technologies Used' color='text-cyan-400' />
          <Stat value='3+' label='Years Experience' color='text-green-400' />
          <Stat
            value='100%'
            label='Client Satisfaction'
            color='text-orange-400'
          />
        </div>

        {/* CTA */}
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

      {/* Modal */}
      {open && selected && (
        <div
          id='project-details-dialog'
          role='dialog'
          aria-modal='true'
          className='fixed inset-0 z-50 flex items-center justify-center p-4'
        >
          {/* Overlay */}
          <div
            className='absolute inset-0 bg-black/70 backdrop-blur-sm'
            onClick={closeModal}
          />

          {/* Dialog */}
          <div
            ref={dialogRef}
            className='relative z-10 w-full max-w-3xl rounded-2xl border border-zinc-700 bg-zinc-900/95 shadow-2xl'
          >
            {/* Header */}
            <div className='flex items-center justify-between px-6 py-4 border-b border-zinc-700'>
              <h4 className='text-lg font-semibold text-white'>
                {selected.title}
              </h4>
              <button
                onClick={closeModal}
                className='p-2 rounded-lg hover:bg-zinc-800 border border-transparent hover:border-zinc-700 transition'
                aria-label='Close dialog'
              >
                <XMarkIcon className='w-5 h-5 text-zinc-300' />
              </button>
            </div>

            {/* Body */}
            <div className='grid md:grid-cols-2 gap-0 md:gap-6 p-6'>
              <div className='relative h-56 md:h-full rounded-xl overflow-hidden border border-zinc-700'>
                <Image
                  src={selected.imagePath}
                  alt={selected.title}
                  fill
                  className='object-cover'
                  sizes='(max-width: 768px) 100vw, 50vw'
                  priority
                />
              </div>

              <div className='flex flex-col'>
                <p className='text-zinc-300 leading-relaxed mb-4'>
                  {selected.description}
                </p>

                {selected.tags?.length > 0 && (
                  <div className='flex flex-wrap gap-2 mb-6'>
                    {selected.tags.map((t, i) => (
                      <span
                        key={i}
                        className='px-2 py-1 bg-zinc-800/60 text-zinc-300 text-xs rounded-full border border-zinc-600'
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                <div className='mt-auto flex flex-col sm:flex-row gap-3'>
                  {selected.projectLink && (
                    <a
                      href={selected.projectLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center justify-center gap-2 px-4 py-2 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition'
                    >
                      <ArrowTopRightOnSquareIcon className='w-4 h-4' />
                      Live Project
                    </a>
                  )}
                  {selected.githubLink && (
                    <a
                      href={selected.githubLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center justify-center gap-2 px-4 py-2 border border-zinc-600 text-zinc-300 font-medium rounded-lg hover:bg-zinc-800 transition'
                    >
                      <CodeBracketIcon className='w-4 h-4' />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

function Stat({
  value,
  label,
  color,
}: {
  value: string
  label: string
  color: string
}) {
  return (
    <div className='text-center'>
      <div className={`text-3xl font-bold ${color} mb-2`}>{value}</div>
      <div className='text-zinc-400 text-sm'>{label}</div>
    </div>
  )
}

export default MyProjectsSection
