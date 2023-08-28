import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className='flex items-center p-3'>
      <Image
        className='w-7 h-7'
        src='/mylogo.png'
        alt=''
        width={500}
        height={500}
      />
      <div className='text-white font-bold text-xl ml-3'>
        Phil <span className='text-light-green'>Codes</span>
      </div>
    </div>
  )
}

export default Logo
