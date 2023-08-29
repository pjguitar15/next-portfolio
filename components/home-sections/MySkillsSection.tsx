import React from 'react'
import HeadingText from '../HeadingText'
import SkillsCardItem from '../SkillsCardItem'

const MySkillsSection = () => {
  return (
    <section className='bg-zinc-900 py-32 border-b-4 border-light-green'>
      <div className='container mx-auto'>
        <div className='text-center mb-12'>
          <HeadingText text='My Skills' emphasis='Skills' />
        </div>
        {/* RowCols here */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-10'>
          <SkillsCardItem
            imagePath='/logos/html.png'
            title='HTML'
            description='Proficient in structuring web content using semantic HTML tags for enhanced accessibility and SEO.'
          />
          <SkillsCardItem
            imagePath='/logos/css.png'
            title='CSS'
            description='Skilled at styling web pages with CSS, including layout design, responsiveness, and visual enhancements.'
          />
          <SkillsCardItem
            imagePath='/logos/javascript.png'
            title='JavaScript'
            description='Experienced in using JavaScript to create dynamic and interactive web elements, enhancing user experience.'
          />
          <SkillsCardItem
            imagePath='/logos/typescript.png'
            title='TypeScript'
            description='Proficient in using TypeScript to add static typing and improved tooling to JavaScript projects, enhancing code quality and maintainability.'
          />
          <SkillsCardItem
            imagePath='/logos/bootstrap.png'
            title='Bootstrap'
            description='Skilled at utilizing Bootstrap framework to create responsive and visually appealing web interfaces quickly.'
          />
          <SkillsCardItem
            imagePath='/logos/tailwind.png'
            title='Tailwind'
            description='Experienced in building user interfaces efficiently with Tailwind CSS, utilizing its utility classes for streamlined styling.'
          />
          <SkillsCardItem
            imagePath='/logos/reactjs-black.png'
            title='ReactJS'
            description='Capable of developing web applications using ReactJS, building reusable components and managing state efficiently for modern, single-page applications.'
          />
          <SkillsCardItem
            imagePath='/logos/nextjs.png'
            title='NextJS'
            description='Capable of developing server-rendered React applications with Next.js, enabling faster loading times and improved SEO.'
          />
          <SkillsCardItem
            imagePath='/logos/firebase.png'
            title='Firebase'
            description='Proficient in using Firebase for building and deploying web applications with features like real-time databases, authentication, and hosting.

'
          />
          <SkillsCardItem
            imagePath='/logos/mongodb-black.png'
            title='MongoDB'
            description='Skilled at working with MongoDB, a NoSQL database, for storing and managing data in a flexible and scalable manner.'
          />
          <SkillsCardItem
            imagePath='/logos/postman.png'
            title='Postman'
            description='Experienced in using Postman to test and document APIs, ensuring their functionality, reliability, and ease of use.'
          />
          <SkillsCardItem
            imagePath='/logos/wordpress.png'
            title='WordPress'
            description='Capable of creating and managing websites using WordPress, including content creation, customization, and plugin integration.'
          />
          <SkillsCardItem
            imagePath='/logos/github.png'
            title='Github'
            description='Proficient in using GitHub for version control and collaborative development, managing repositories, branches, and pull requests.'
          />
          <SkillsCardItem
            imagePath='/logos/photoshop.png'
            title='Photoshop'
            description='Skilled at using Adobe Photoshop for image editing and manipulation, enhancing visuals for web and design projects.'
          />
          <SkillsCardItem
            imagePath='/logos/illustrator.png'
            title='Illustrator'
            description='Experienced in Adobe Illustrator, proficient in creating vector graphics and illustrations for various design applications.'
          />
        </div>
      </div>
    </section>
  )
}

export default MySkillsSection
