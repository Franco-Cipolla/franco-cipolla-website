import React from 'react'

const ValueCard = ({heading,body,icon}) => {
  return (
    <div className='bg-white/95 flex flex-col justify-center items-center gap-4 p-6 rounded-[3px] shadow-lg shadow-white/40 mx-auto  max-w-4xl'>
        {icon}

        <h1 className=' text-xl font-bold text-center '>{heading}</h1>
        <p className='text-black/75  text-center'>{body}</p>

    </div>
  )
}

export default ValueCard
