import AboutMe from '@/components/home-sections/AboutMe'
import Contact from '@/components/home-sections/Contact'
import Hero from '@/components/home-sections/Hero'
import MarqueeSection from '@/components/home-sections/MarqueeSection'
import MyProjectsSection from '@/components/home-sections/MyProjectsSection'
import MySkillsSection from '@/components/home-sections/MySkillsSection'
import HorizontalCardModal from '@/components/home-sections/components/HorizontalCardModal'
import React from 'react'

const page = () => {
  return (
    <main>
      <HorizontalCardModal />
      <Hero />
      {/* <MarqueeSection /> */}
      <AboutMe />
      <MySkillsSection />
      <MyProjectsSection />
      <Contact />
    </main>
  )
}

export default page
