import React from 'react'
import Image from 'next/image'

const SkillsCardItem = ({
  imagePath,
  title,
  description,
}: {
  imagePath: string
  title: string
  description: string
}) => {
  return (
    <div className='text-center group'>
      <div className='bg-light-green cursor-pointer mx-auto h-36 w-36 flex items-center justify-center rounded-full'>
        <Image
          className='w-20 h-auto group-hover:scale-150 transition duration-300'
          src={imagePath}
          alt=''
          width={400}
          height={400}
        />
      </div>
      <div className='mt-5'>
        <h3 className='text-light-green text-2xl font-bold text-center select-light-green'>
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
