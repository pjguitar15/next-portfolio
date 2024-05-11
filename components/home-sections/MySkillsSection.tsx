import React from "react";
import HeadingText from "../HeadingText";
import SkillsCardItem from "../SkillsCardItem";

const MySkillsSection = () => {
  return (
    <section
      className='bg-zinc-900 py-32 border-b-4 border-light-green'
      id='skills'
    >
      <div className='container mx-auto'>
        <div className='text-center mb-12'>
          <HeadingText
            text='/ skills'
            emphasis='skills'
          />
        </div>
        {/* RowCols here */}
        <div className='grid md:gap-x-8 lg:gap-x-0 gap-y-10 grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8'>
          <SkillsCardItem
            imagePath='/logos/html.png'
            title='HTML'
          />
          <SkillsCardItem
            imagePath='/logos/css.png'
            title='CSS'
          />
          <SkillsCardItem
            imagePath='/logos/javascript.png'
            title='JavaScript'
          />
          <SkillsCardItem
            imagePath='/logos/typescript.png'
            title='TypeScript'
          />
          <SkillsCardItem
            imagePath='/logos/bootstrap.png'
            title='Bootstrap'
          />
          <SkillsCardItem
            imagePath='/logos/tailwind.png'
            title='Tailwind'
          />
          <SkillsCardItem
            imagePath='/logos/reactjs-black.png'
            title='ReactJS'
          />
          <SkillsCardItem
            imagePath='/logos/nextjs.png'
            title='NextJS'
          />
          <SkillsCardItem
            imagePath='/logos/firebase.png'
            title='Firebase'
          />
          <SkillsCardItem
            imagePath='/logos/mongodb-black.png'
            title='MongoDB'
          />
          <SkillsCardItem
            imagePath='/logos/postman.png'
            title='Postman'
          />
          <SkillsCardItem
            imagePath='/logos/wordpress.png'
            title='WordPress'
          />
          <SkillsCardItem
            imagePath='/logos/github.png'
            title='Github'
          />
          <SkillsCardItem
            imagePath='/logos/photoshop.png'
            title='Photoshop'
          />
          <SkillsCardItem
            imagePath='/logos/illustrator.png'
            title='Illustrator'
          />
        </div>
      </div>
    </section>
  );
};

export default MySkillsSection;
