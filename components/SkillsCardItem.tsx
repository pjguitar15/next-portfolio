import React from 'react'
import Image from 'next/image'

const SkillsCardItem = ({
  imagePath,
  title,
  description,
}: {
  imagePath: string
  title: string
  description?: string
}) => {
  return (
    <div className='text-center group'>
      <div className='bg-light-green cursor-pointer mx-auto h-20 w-20 sm:h-24 sm:w-24 flex items-center justify-center rounded-full'>
        <Image
          className='w-12 lg:w-16 h-auto group-hover:scale-150 transition duration-300'
          src={imagePath}
          alt=''
          width={400}
          height={400}
        />
      </div>
      <div className='mt-5'>
        <h3 className='text-white sm:text-xl font-semibold text-center select-light-green'>
          {title}
        </h3>
        <p className='w-9/12 mx-auto md:w-full text-white text-center text-md select-light-green'>
          {description}
        </p>
      </div>
    </div>
  )
}

export default SkillsCardItem
