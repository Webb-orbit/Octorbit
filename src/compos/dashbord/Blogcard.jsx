/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { Dropmenu, Menubutton, Menulink } from '../utiles/Dropmenu'
import Blogbase from '../../appwrite/blogbase'
import Card from '../utiles/Card'
import { Link } from 'react-router-dom'

const Blogcard = ({ data }) => {
  const [actived, setactived] = useState(false)
  const [open, setopen] = useState(false)
  const [shareurl, setshareurl] = useState("")

  const deleteblog = async () => {
    try {
      const db = await Blogbase.deleteblog(data.$id)
      if (db) {
        console.log("one blog deleted now ", data.$id);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setshareurl(`${import.meta.env.VITE_ENDPOINT}/mkr/blog/${data.$id}`)
  }, [data])

  const copyshareurl = () => {
    console.log("hello");

    navigator.clipboard.writeText(`${import.meta.env.VITE_ENDPOINT}/mkr/blog/${data.$id}`)
    setopen(false)
  }

  return (
    <>
      <div className='w-[23rem] h-[10rem] bg-neutral-950 outline outline-1 outline-neutral-600 p-2 rounded-md flex flex-col justify-between max-sm:h-[8rem] group'>
        <div className='flex items-center justify-between'>
          <h3 className='text-neutral-200 text-[0.9rem] font-medium line-clamp-1'>{data.title}</h3>
          <Dropmenu active={actived} setactive={setactived} icon={"more_horiz"} >
            <Menulink to={`/dashboard/blog/${data.$id}`}>view</Menulink>
            <Menulink to={`/dashboard/edit/${data.$id}`}>edit</Menulink>
            <Menubutton onClick={() => setopen(pre => !pre)}> share</Menubutton>
            <Menubutton onClick={deleteblog}>delete</Menubutton>
          </Dropmenu>
        </div>
        <p className=' line-clamp-2 text-[0.8rem] font-medium text-neutral-400'>{data.description}</p>
        <div className='flex items-center justify-between text-neutral-500 text-[0.7rem] uppercase font-semibold'>
          <p>{`${data.date}`}</p>
          <div className={`w-2 h-2 rounded-full ${data.active ? "bg-emerald-500" : "bg-blue-500"} animate-pulse`}></div>
        </div>
      </div>
      <Card title={"share"} opener={open} setopener={setopen}>
        <div className='w-full flex items-center justify-between gap-2 bg-zinc-700 px-3'>
          <input type="text" readOnly className=' selection:bg-white selection:text-black bg-transparent outline-none border-none rounded-sm w-full font-mono text-[0.8rem] font-medium max-sm:text-[0.5rem]' value={shareurl} />
          <button type='button' onClick={copyshareurl} className=' uppercase font-mono font-medium text-[0.9rem]'>copy</button>
        </div>
        <div>
          <Link target='_blank' to={`https://x.com/intent/tweet?url=${import.meta.env.VITE_ENDPOINT}/mkr/blog/${data?.$id}&text=${data.title}`}>Tweet on x</Link>
        </div>
      </Card>
    </>
  )
}

export default Blogcard