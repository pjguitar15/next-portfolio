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
            description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio corporis amet similique.'
          />
          <SkillsCardItem
            imagePath='/logos/javascript.png'
            title='JavaScript'
            description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio corporis amet similique.'
          />
          <SkillsCardItem
            imagePath='/logos/css.png'
            title='CSS'
            description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio corporis amet similique.'
          />
          <SkillsCardItem
            imagePath='/logos/bootstrap.png'
            title='Bootstrap'
            description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio corporis amet similique.'
          />
          <SkillsCardItem
            imagePath='/logos/tailwind.png'
            title='Tailwind'
            description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio corporis amet similique.'
          />
          <SkillsCardItem
            imagePath='/logos/reactjs-black.png'
            title='ReactJS'
            description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio corporis amet similique.'
          />
          <SkillsCardItem
            imagePath='/logos/nextjs.png'
            title='NextJS'
            description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio corporis amet similique.'
          />
        </div>
      </div>
    </section>
  )
}

export default MySkillsSection
