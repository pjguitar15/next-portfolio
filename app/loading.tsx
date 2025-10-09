'use client'
import React, { useState, useEffect } from 'react'

const Loading = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const loadingSteps = [
    'Initializing development environment...',
    'Installing dependencies...',
    'Compiling components...',
    'Bundling assets...',
    'Optimizing performance...',
    'Almost ready...',
  ]

  const codeSnippets = [
    '{ loading: true }',
    'npm install',
    'const App = () => {}',
    'export default',
    'console.log(&quot;Ready!&quot;)',
    '✨ Welcome!',
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % loadingSteps.length)
    }, 800)

    return () => clearInterval(interval)
  }, [loadingSteps.length])

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 flex items-center justify-center transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className='max-w-md mx-auto text-center px-6'>
        {/* Animated Code Window */}
        <div className='bg-zinc-800 rounded-lg shadow-2xl border border-zinc-700 overflow-hidden mb-8 transform transition-all duration-500 hover:scale-105'>
          {/* Window Header */}
          <div className='bg-zinc-900 px-4 py-3 flex items-center gap-2 border-b border-zinc-700'>
            <div className='flex gap-2'>
              <div className='w-3 h-3 bg-red-500 rounded-full'></div>
              <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
              <div className='w-3 h-3 bg-green-500 rounded-full'></div>
            </div>
            <div className='flex-1 text-center'>
              <span className='text-zinc-400 text-sm font-mono'>
                portfolio.dev
              </span>
            </div>
          </div>

          {/* Code Content */}
          <div className='p-6 bg-zinc-800'>
            <div className='font-mono text-sm space-y-2'>
              {/* Terminal Prompt */}
              <div className='flex items-center gap-2 text-teal-400'>
                <span>$</span>
                <span className='opacity-75'>philcodes@portfolio:~</span>
              </div>

              {/* Loading Animation */}
              <div className='flex items-center gap-2 mt-4'>
                <div className='flex gap-1'>
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full bg-teal-400 animate-pulse`}
                      style={{
                        animationDelay: `${i * 0.2}s`,
                        animationDuration: '1s',
                      }}
                    ></div>
                  ))}
                </div>
                <span className='text-zinc-300'>
                  {loadingSteps[currentStep]}
                </span>
              </div>

              {/* Code Display */}
              <div className='mt-4 p-3 bg-zinc-900 rounded border border-zinc-700'>
                <span className='text-purple-400'>const</span>{' '}
                <span className='text-blue-400'>loading</span>{' '}
                <span className='text-zinc-300'>=</span>{' '}
                <span className='text-orange-400'>
                  &quot;{codeSnippets[currentStep]}&quot;
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className='w-full bg-zinc-800 rounded-full h-2 mb-4 overflow-hidden'>
          <div
            className='h-full bg-gradient-to-r from-teal-500 to-cyan-500 transition-all duration-800 ease-out rounded-full'
            style={{
              width: `${((currentStep + 1) / loadingSteps.length) * 100}%`,
            }}
          ></div>
        </div>

        {/* Loading Text */}
        <div className='text-center'>
          <h2 className='text-2xl font-bold text-zinc-100 mb-2'>
            Loading Portfolio
          </h2>
          <p className='text-zinc-400 text-sm'>
            Building something awesome for you...
          </p>
        </div>

        {/* Floating Icons */}
        <div className='absolute inset-0 overflow-hidden pointer-events-none'>
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={`absolute text-teal-400/20 animate-bounce`}
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '2s',
              }}
            >
              {i % 2 === 0 ? (
                <svg
                  className='w-6 h-6'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
                </svg>
              ) : (
                <svg
                  className='w-6 h-6'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z' />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Loading
