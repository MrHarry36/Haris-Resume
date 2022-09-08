import React from 'react'

export default function About1(props) {
  return (
    <div className='flex items-center bg-white rounded-t-2xl'>
        <strong className='px-10 py-3 text-4xl'>{props.data.head}</strong>
        <hr  className='w-60 h-1 mt-1 lg:visible md:visible hidden bg-[#F3475A]'/>
    </div>
  )
}
