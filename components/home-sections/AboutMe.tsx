import React from 'react'
import HeadingText from '../HeadingText'
import AboutMeSideBySide from './components/AboutMeSideBySide'

const AboutMe = () => {
  return (
    <div className='bg-zinc-800 py-10 md:py-24' id='about'>
      <AboutMeSideBySide />
      <div className='container mx-auto text-white'>
        <h1>PDF Viewer</h1>
        
      </div>
    </div>
  )
}

export default AboutMe
