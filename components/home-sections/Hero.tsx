'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import MyButton from '../MyButton'
import HeadingText from '../HeadingText'
import Badge from '../Badge'
import CVButton from '../CVButton'

const Hero = () => {
  const [isGreenBgLoaded, setIsGreenBgLoaded] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setIsGreenBgLoaded(true)
    }, 1500)
  }, [])
  return (
    <section className='bg-zinc-900 overflow-hidden pt-12 lg:pt-0'>
      <div className='container mx-auto'>
        <div className='flex lg:flex-row flex-col-reverse'>
          <div className='lg:w-7/12 flex flex-col justify-center items-center lg:items-start pt-8 pb-16 lg:py-36'>
            <div>
              <Badge title='frontend developer' />
            </div>
            <div className='text-center lg:text-start'>
              <HeadingText text='Philcob Suzuki Josol.' emphasis='Philcob' />
              <HeadingText text='I build things for the web.' emphasis='web.' />
            </div>
            <p className='text-white text-lg font-normal mt-3 leading-8 mb-9 w-5/6 select-light-green text-center lg:text-left'>
              Hi, I am Philcob! I am a frontend developer and I choose
              <strong className='select-light-green'> ReactJS/NextJS </strong>as
              my framework of choice. I build and code beautifully simple
              things, and I love what I do.
            </p>
            <div className='flex flex-col md:flex-row gap-4 items-center'>
              <MyButton title='Check out my Portfolio' link='#projects' />
              <CVButton />
            </div>
          </div>
          <div className='relative lg:w-5/12 flex justify-center items-end'>
            {isGreenBgLoaded && (
              <div className='bg-light-green w-1/2 lg:w-full h-64 md:h-96 absolute left-1/2 bottom-0 z-0 rounded-full transform -translate-x-1/2'></div>
            )}
            <div className='z-1 relative w-1/2 lg:w-full xl:w-9/12'>
              <Image
                src='/myphoto.webp'
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
