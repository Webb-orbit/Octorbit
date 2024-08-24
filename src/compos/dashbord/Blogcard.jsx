/* eslint-disable react/prop-types */
import { useState } from 'react'
import { Dropmenu, Menubutton, Menulink } from '../utiles/Dropmenu'
import Toggle from '../utiles/Toggle'

const Blogcard = ({data}) => {
  const [actived, setactived] = useState(false)

  return (
    <div className='w-[23rem] h-[10rem] bg-neutral-950 outline outline-1 outline-neutral-600 p-2 rounded-md flex flex-col justify-between max-sm:h-[8rem] group'>
        <div className='flex items-center justify-between'>
            <h3 className='text-neutral-200 text-[0.9rem] font-medium line-clamp-1'>{data.title}</h3>
            <Dropmenu active={actived} setactive={setactived} icon={"more_horiz"} >
              <Menulink to={`/dashboard/edit/${data.$id}`}>edit</Menulink>
              <Menulink> share</Menulink>
              <Menubutton>delete</Menubutton>
            </Dropmenu>
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