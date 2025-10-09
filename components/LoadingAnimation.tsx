'use client'
import React from 'react'

const LoadingAnimation = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='relative'>
        {/* Outer spinning ring */}
        <div className='w-8 h-8 border-2 border-zinc-600 border-t-teal-400 rounded-full animate-spin'></div>

        {/* Inner pulsing dot */}
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='w-2 h-2 bg-teal-400 rounded-full animate-pulse'></div>
        </div>

        {/* Code brackets */}
        <div className='absolute -left-6 top-1/2 transform -translate-y-1/2 text-teal-400/60 font-mono text-sm animate-pulse'>
          {'<'}
        </div>
        <div className='absolute -right-6 top-1/2 transform -translate-y-1/2 text-teal-400/60 font-mono text-sm animate-pulse'>
          {'>'}
        </div>
      </div>

      {/* Loading text */}
      <span className='ml-3 text-zinc-400 text-sm font-mono'>
        Loading<span className='animate-pulse'>...</span>
      </span>
    </div>
  )
}

export default LoadingAnimation
