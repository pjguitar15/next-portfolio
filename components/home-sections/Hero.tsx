import React from 'react'
import Image from 'next/image'
import MyButton from '../MyButton'
import HeadingText from '../HeadingText'
import Badge from '../Badge'

const Hero = () => {
  return (
    <section className='bg-zinc-900 overflow-hidden pt-12 lg:pt-0'>
      <div className='container mx-auto'>
        <div className='flex lg:flex-row flex-col-reverse'>
          <div className='lg:w-7/12 flex flex-col justify-center items-center lg:items-start pt-8 pb-16 lg:py-36'>
            <div>
              <Badge title='frontend developer' />
            </div>
            <div className='text-center lg:text-start'>
              <HeadingText text='Talk is cheap' />
              <HeadingText text='Show me the code.' emphasis='code.' />
            </div>
            <p className='text-white text-lg font-normal mt-3 leading-8 mb-9 w-5/6 select-light-green text-center lg:text-left'>
              Hi, I am Philcob! I am a frontend developer specializing in{' '}
              <strong className='select-light-green'>NextJS</strong>, bringing 2
              years of expertise to the table. I am dedicated to producing clean
              code and am known for my strong work ethic.
            </p>
            <MyButton title='Check out my Portfolio' link='#projects' />
          </div>
          <div className='relative lg:w-5/12 flex justify-center items-end'>
            <div className='bg-light-green w-1/2 lg:w-full h-64 md:h-96 absolute left-1/2 bottom-0 z-0 rounded-full transform -translate-x-1/2'></div>
            <div className='z-1 relative w-1/2 lg:w-full xl:w-9/12'>
              <Image
                src='/myphoto.png'
                layout='responsive'
                width={500}
                height={500}
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
