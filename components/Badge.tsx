import React from 'react'

const Badge = ({ title }: { title: string }) => {
  return (
    <div className='bg-light-green inline-block px-3 font-bold mb-5 uppercase select-light-green'>
      {title}
    </div>
  )
}

export default Badge
