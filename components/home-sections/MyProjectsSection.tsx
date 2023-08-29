import React from 'react'
import HeadingText from '../HeadingText'
import ProjectItem from '../ProjectItem'

const MyProjectsSection = () => {
  return (
    <section className='bg-zinc-900 py-32 px-10 md:px-0' id='projects'>
      <div className='container mx-auto'>
        <div className='mb-10'>
          <HeadingText text='My Projects' emphasis='Projects' />
        </div>
        {/* Projects Cards */}
        <ProjectItem
          keyItem={0}
          title='ILTP Website'
          description={`Ever heard of the International Leadership Training Program (ILTP)? Well, I built their website using ReactJS! It's this cool volunteer organization based in the US. Here's the kicker: I tackled the whole website backend myself, since I was still learning about Headless CMS. That was quite the adventure, let me tell you. But hey, the result? A snazzy website that showcases my problem-solving skills, adaptability, and commitment to creating awesome user experiences.`}
          tags={['ReactJS', 'Bootstrap', 'Firebase', 'PayPal Integration']}
          imagePath='/iltp-preview.jpg'
          projectLink='https://iltp.org/'
        />
        <ProjectItem
          keyItem={1}
          title='Bullish Beast Website'
          description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem eum voluptatibus nobis officia doloremque molestiae dicta. Soluta ducimus quo error laborum. Sit optio sapiente quisquam minus cum cumque quidem magni?'
          tags={['HTML', 'TEST']}
        />
        <ProjectItem
          keyItem={2}
          title='ID Verification'
          description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem eum voluptatibus nobis officia doloremque molestiae dicta. Soluta ducimus quo error laborum. Sit optio sapiente quisquam minus cum cumque quidem magni?'
          tags={['HTML', 'TEST']}
        />
      </div>
    </section>
  )
}

export default MyProjectsSection
