import React from 'react'

const RoundedBadge = ({ title }: { title: string }) => {
  return (
    <div className='bg-light-green inline-block px-3 rounded-full font-bold mb-3 uppercase text-sm mr-2'>
      {title}
    </div>
  )
}

export default RoundedBadge
