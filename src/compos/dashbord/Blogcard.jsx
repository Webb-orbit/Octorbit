/* eslint-disable react/prop-types */
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Blogcard = ({data}) => {
  const naviget = useNavigate()

  return (
    <div className='w-[23rem] h-[10rem] bg-neutral-950 outline outline-1 outline-neutral-600 p-2 rounded-md flex flex-col justify-between max-sm:h-[8rem] group'>
        <div className='flex items-center justify-between'>
            <h3 className='text-neutral-200 text-[0.9rem] font-medium line-clamp-1'>{data.title}</h3>
            <button onClick={()=> naviget(`/dashboard/edit/${data.$id}`)} className="material-symbols-outlined text-neutral-200 hidden group-hover:inline-block duration-100 text-[1.2rem]">draw</button>
        </div>
        <p className=' line-clamp-2 text-[0.8rem] font-medium text-neutral-400'>{data.description}</p>
        <div className='flex items-center justify-between text-neutral-500 text-[0.7rem] uppercase font-semibold'>
            <p>{`${data.date} | ${data.likes} likes`}</p>
            <div className={`w-2 h-2 rounded-full ${data.active?"bg-emerald-500":"bg-blue-500"} animate-pulse`}></div>
        </div>
    </div>
  )
}

export default Blogcard