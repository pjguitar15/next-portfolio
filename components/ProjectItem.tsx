import React from 'react'
import RoundedBadge from './RoundedBadge'
import MySmallButton from './MySmallButton'
import Image from 'next/image'

const ProjectItem = ({
  keyItem,
  title,
  description,
  tags,
  imagePath,
  projectLink,
  githubLink,
}: {
  keyItem: number
  title: string
  description: string
  tags: string[]
  imagePath?: string
  projectLink?: string
  githubLink?: string
}) => {
  return (
    <>
      {keyItem % 2 === 0 ? (
        <div className='lg:flex'>
          <div className='lg:w-6/12 flex overflow-hidden cursor-pointer hover:brightness-75 transition duration-300'>
            {imagePath ? (
              <Image
                className='object-cover w-full'
                src={imagePath}
                alt=''
                width={500}
                height={500}
              />
            ) : (
              <img
                className='object-cover hover:scale-105 transition duration-300 ease-in-out'
                src='https://media.geeksforgeeks.org/wp-content/uploads/20230519095635/How-to-Deploy-React-App-on-Netlify-Using-Github.png'
                alt='test'
              />
            )}
          </div>
          <div className='py-10 lg:p-14 lg:w-6/12 flex flex-col justify-center'>
            <h3 className='text-2xl text-white font-bold mb-2 select-light-green'>
              {title}
            </h3>
            <div>
              {tags.map((item, index) => (
                <RoundedBadge key={index} title={item} />
              ))}
            </div>
            <p className='text-white leading-6 mb-6 select-light-green'>
              {description}
            </p>
            <div className='flex gap-3'>
              <MySmallButton
                title='Go to Project'
                link={projectLink || '/'}
                icon='externalLinkAlt'
                isSubmitBtn={false}
              />
              <MySmallButton
                title='Github Repo'
                link={githubLink || '/'}
                icon='github'
                isSubmitBtn={false}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className='lg:flex lg:flex-row-reverse'>
          {/* lg:w-6/12 flex */}
          <div className='flex lg:w-1/2 overflow-hidden cursor-pointer hover:brightness-75 transition duration-300'>
            {imagePath ? (
              <Image
                className='object-cover w-full'
                src={imagePath}
                alt=''
                width={500}
                height={500}
              />
            ) : (
              <img
                className='object-cover hover:scale-105 transition duration-300 ease-in-out'
                src='https://media.geeksforgeeks.org/wp-content/uploads/20230519095635/How-to-Deploy-React-App-on-Netlify-Using-Github.png'
                alt='test'
              />
            )}
          </div>
          <div className='lg:w-1/2 flex flex-col justify-center py-10 lg:py-14 lg:pr-7'>
            <h3 className='text-2xl text-white font-bold mb-2 select-light-green'>
              {title}
            </h3>
            <div>
              {tags.map((item, index) => (
                <RoundedBadge key={index} title={item} />
              ))}
            </div>
            <p className='text-white leading-6 mb-6 select-light-green'>
              {description}
            </p>
            <div className='flex gap-3'>
              <MySmallButton
                title='Open Project'
                link={projectLink || '/'}
                icon='externalLinkAlt'
                isSubmitBtn={false}
              />
              <MySmallButton
                title='Github Repo'
                link={githubLink || '/'}
                icon='github'
                isSubmitBtn={false}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
export default ProjectItem
