"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from 'next/link'
import {
  ArrowDownIcon,
  DocumentTextIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline'
import { MapPinIcon, PhoneIcon, GlobeAltIcon } from '@heroicons/react/24/solid'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    setIsVisible(true)
  }, [])

  return (
    <section className='relative min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 overflow-hidden'>
      {/* Background decorative elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob'></div>
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000'></div>
        <div className='absolute top-40 left-40 w-80 h-80 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000'></div>
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-80px)]'>
          {/* Left Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            }`}
          >
            {/* Status Badge */}
            <div className='inline-block px-4 py-2 rounded-full bg-teal-500 text-white text-xs font-bold'>
              SOFTWARE ENGINEER
            </div>

            {/* Main Heading */}
            <div className='space-y-4'>
              <h1 className='text-4xl lg:text-5xl font-bold text-white leading-tight'>
                <span className='block'>
                  I design, build, and ship reliable software{' '}
                  <span className='text-teal-400'>end-to-end</span>
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className='text-md text-gray-300 leading-relaxed max-w-2xl'>
              Hi, I&apos;m Phil! An experienced{' '}
              <span className='font-semibold text-white'>
                Software Engineer from the Philippines.
              </span>{' '}
              I specialize in scalable web applications. I transform complex
              business requirements into elegant, high-performance solutions
              using modern technologies like React, Node.js, and cloud
              platforms.
            </p>

            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 pt-6'>
              <Link
                href='/projects'
                className='inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-all duration-300 font-medium text-center'
              >
                <DocumentTextIcon className='w-5 h-5' />
                <span>View My Portfolio</span>
              </Link>

              <Link
                href='/about'
                className='inline-flex items-center justify-center gap-2 px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-teal-600 transition-colors'
              >
                <GlobeAltIcon className='w-5 h-5' />
                <span>Professional Experiences</span>
              </Link>
            </div>
          </div>

          {/* Right Content - Image */}
          <div
            className={`hidden lg:block relative transition-all duration-1000 delay-300 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-10'
            }`}
          >
            <div className='relative flex justify-center items-center'>
              {/* Teal circular background */}
              <div className='w-96 h-96 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full absolute'></div>

              {/* Profile image */}
              <div className='relative z-10'>
                <Image
                  src='/myphoto-enhanced.png'
                  alt='Philcob Josol - Software Engineer'
                  width={400}
                  height={400}
                  className='w-full h-auto object-cover rounded-full'
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  )
}

export default Hero;
