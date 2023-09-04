import React from 'react'

const MarqueeSection = () => {
  return (
    <div className='w-full inline-flex flex-nowrap bg-light-green'>
      <ul className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll'>
        <li className='w-full'>
          <h1 className='text-2xl font-bold text-zinc-800'>ReactJS</h1>
        </li>
        <li className='w-full'>
          <h1 className='text-2xl font-bold text-zinc-800'>NextJS</h1>
        </li>
        <li className='w-full'>
          <h1 className='text-2xl font-bold text-zinc-800'>TAILWINDCSS</h1>
        </li>
        <li className='w-full'>
          <h1 className='text-2xl font-bold text-zinc-800'>FRONTEND</h1>
        </li>
        <li className='w-full'>
          <h1 className='text-2xl font-bold text-zinc-800'>FRONTEND</h1>
        </li>
        <li className='w-full'>
          <h1 className='text-2xl font-bold text-zinc-800'>FRONTEND</h1>
        </li>
        <li className='w-full'>
          <h1 className='text-2xl font-bold text-zinc-800'>FRONTEND</h1>
        </li>
        <li className='w-full'>
          <h1 className='text-2xl font-bold text-zinc-800'>FRONTEND</h1>
        </li>
        <li className='w-full'>
          <h1 className='text-2xl font-bold text-zinc-800'>FRONTEND</h1>
        </li>
        <li className='w-full'>
          <h1 className='text-2xl font-bold text-zinc-800'>FRONTEND</h1>
        </li>
      </ul>
    </div>
  )
}

export default MarqueeSection
