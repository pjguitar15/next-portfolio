'use client'
import React from 'react'
import Image from 'next/image'

const MySkillsSection = () => {
  const skills = [
    { name: 'HTML', icon: '/logos/html.png' },
    { name: 'CSS', icon: '/logos/css.png' },
    { name: 'JavaScript', icon: '/logos/javascript.png' },
    { name: 'TypeScript', icon: '/logos/typescript.png' },
    { name: 'React', icon: '/logos/reactjs-black.png' },
    { name: 'Next.js', icon: '/logos/nextjs.png' },
    { name: 'NestJS', icon: '/logos/nextjs.png' },
    { name: 'TailwindCSS', icon: '/logos/tailwind.png' },
    { name: 'Bootstrap', icon: '/logos/bootstrap.png' },
    { name: 'MongoDB', icon: '/logos/mongodb-black.png' },
    { name: 'Git/GitHub', icon: '/logos/github.png' },
    { name: 'Postman', icon: '/logos/postman.png' },
    { name: 'WordPress', icon: '/logos/wordpress.png' },
  ]

  // Duplicate the array for seamless looping
  const duplicatedSkills = [...skills, ...skills]

  return (
    <section className='py-20 bg-gradient-to-br from-zinc-950 via-zinc-800 to-zinc-950 overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold text-zinc-100 mb-6'>
            Technical{' '}
            <span className='bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent'>
              Skills
            </span>
          </h2>
          <p className='text-xl text-zinc-400 max-w-3xl mx-auto'>
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Categories */}
        <div className='grid md:grid-cols-3 gap-8 mb-16'>
          <div className='text-center'>
            <div className='w-16 h-16 bg-teal-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-teal-800'>
              <svg
                className='w-8 h-8 text-teal-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
                />
              </svg>
            </div>
            <h3 className='text-lg font-semibold text-zinc-100 mb-2'>
              Frontend Development
            </h3>
            <p className='text-zinc-400 text-sm'>
              React, Next.js, TypeScript, TailwindCSS
            </p>
          </div>

          <div className='text-center'>
            <div className='w-16 h-16 bg-cyan-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-cyan-800'>
              <svg
                className='w-8 h-8 text-cyan-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2'
                />
              </svg>
            </div>
            <h3 className='text-lg font-semibold text-zinc-100 mb-2'>
              Backend & Database
            </h3>
            <p className='text-zinc-400 text-sm'>
              Node.js, Express, MongoDB, Firebase
            </p>
          </div>

          <div className='text-center'>
            <div className='w-16 h-16 bg-emerald-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-emerald-800'>
              <svg
                className='w-8 h-8 text-green-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'
                />
              </svg>
            </div>
            <h3 className='text-lg font-semibold text-zinc-100 mb-2'>
              Tools & Design
            </h3>
            <p className='text-zinc-400 text-sm'>
              Git, Postman, Photoshop, Illustrator
            </p>
          </div>
        </div>

        {/* Marquee Container */}
        <div className='relative'>
          {/* Top Row - Left to Right */}
          <div className='flex overflow-hidden'>
            <div className='flex animate-marquee'>
              {duplicatedSkills.map((skill, index) => (
                <div key={`top-${index}`} className='flex-shrink-0 mx-6 group'>
                  <div className='w-24 h-24 bg-zinc-800/60 backdrop-blur-sm rounded-2xl shadow-lg flex flex-col items-center justify-center p-4 transition-all duration-300 group-hover:shadow-xl group-hover:scale-110 group-hover:bg-teal-900/30 border border-zinc-700 group-hover:border-teal-700'>
                    <div className='relative w-12 h-12 mb-2'>
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        fill
                        className='object-contain filter group-hover:brightness-110'
                      />
                    </div>
                    <span className='text-xs font-medium text-zinc-300 text-center group-hover:text-teal-400 transition-colors'>
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row - Right to Left */}
          <div className='flex overflow-hidden mt-8'>
            <div className='flex animate-marquee-reverse'>
              {duplicatedSkills.reverse().map((skill, index) => (
                <div
                  key={`bottom-${index}`}
                  className='flex-shrink-0 mx-6 group'
                >
                  <div className='w-24 h-24 bg-zinc-800/60 backdrop-blur-sm rounded-2xl shadow-lg flex flex-col items-center justify-center p-4 transition-all duration-300 group-hover:shadow-xl group-hover:scale-110 group-hover:bg-cyan-900/30 border border-zinc-700 group-hover:border-cyan-700'>
                    <div className='relative w-12 h-12 mb-2'>
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        fill
                        className='object-contain filter group-hover:brightness-110'
                      />
                    </div>
                    <span className='text-xs font-medium text-zinc-300 text-center group-hover:text-cyan-400 transition-colors'>
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient Overlays */}
          <div className='absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none'></div>
          <div className='absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none'></div>
        </div>

        {/* Call to Action */}
        <div className='text-center mt-16'>
          <p className='text-lg text-zinc-400 mb-6'>
            Ready to bring your project to life with these technologies?
          </p>
          <a
            href='/contact'
            className='inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
          >
            Let&apos;s Work Together
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .animate-marquee-reverse {
          animation: marquee-reverse 30s linear infinite;
        }
      `}</style>
    </section>
  )
}

export default MySkillsSection
