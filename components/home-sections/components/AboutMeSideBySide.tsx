'use client'
import HeadingText from '@/components/HeadingText'
import React from 'react'
import HorizontalCard from './HorizontalCard'
import Badge from '@/components/Badge'

const AboutMeSideBySide = () => {
  return (
    <div className='container mx-auto px-10 md:px-0'>
      <div className='lg:flex flex-col md:flex-row gap-12'>
        <div className='lg:w-1/2 flex flex-col gap-4'>
          {/* three rows */}
          <HorizontalCard
            title='Design'
            description='Crafting visually captivating and user-centric interfaces that seamlessly blend form and function.'
          />
          <HorizontalCard
            title='Front-end'
            description='Translating creative concepts into dynamic and responsive web experiences through expert use of modern frontend technologies.'
          />
          <HorizontalCard
            title='Clean Code'
            description='Committed to writing elegant and maintainable code that not only functions flawlessly but also simplifies collaboration and future enhancements.'
          />
        </div>
        <div className='pt-10 lg:pt-0 lg:px-10 lg:w-1/2 flex-1'>
          <div>
            <HeadingText text='About Me' emphasis='Me' />
            <p className='text-gray-300 text-md font-normal mt-3 leading-8 mb-9 select-light-green'>
              {`Hey there! I'm Philcob Suzuki Josol, a 25-year-old enthusiast from the
          vibrant Philippines. My unique heritage is a blend of Japanese and
          Filipino cultures, which has given me a diverse perspective and a
          taste for creativity.`}
            </p>
          </div>
          <hr />
          <div className='mt-9'>
            <Badge title='Journey into ReactJS' />
            <p className='text-gray-300 text-md font-normal leading-8 mb-9 select-light-green'>
              I poured countless hours into ReactJS, developing personal
              projects that ignited my passion. Alongside these endeavors, I
              dabbled in freelance projects, honing my skills while contributing
              to real-world solutions. This grind not only sharpened my
              programming prowess but also cultivated my mindset as a developer.
            </p>
          </div>
          <div className='mt-9'>
            <Badge title='Embracing NextJS for the Future' />
            <p className='text-gray-300 text-md font-normal leading-8 mb-9 select-light-green'>
              As the new year rolled in, I eagerly embraced the power of NextJS
              in my projects. The seamless rendering capabilities, server-side
              rendering, and effortless routing have transformed the way I
              approach web development. This framework has allowed me to create
              high-performance applications with incredible user experiences,
              which is something that truly excites me.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMeSideBySide
