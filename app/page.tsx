import AboutMe from '@/components/home-sections/AboutMe'
import Hero from '@/components/home-sections/Hero'
import MyProjectsSection from '@/components/home-sections/MyProjectsSection'
import MySkillsSection from '@/components/home-sections/MySkillsSection'
import React from 'react'

const page = () => {
  return (
    <main>
      <Hero />
      <AboutMe />
      <MySkillsSection />
      <MyProjectsSection />
    </main>
  )
}

export default page
