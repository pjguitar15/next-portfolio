import React from 'react'

const ClipText = ({ title }: { title: string }) => {
  return (
    <div>
      <h3 className='bg-clip-text text-transparent bg-gradient-to-r from-light-green to-violet-500 text-5xl font-extrabold'>
        {title}
      </h3>
    </div>
  )
}

export default ClipText
