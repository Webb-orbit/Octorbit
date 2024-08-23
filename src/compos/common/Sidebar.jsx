import { useEffect, useState } from "react"
import Blogbase from "../../appwrite/blogbase"
import { Link } from "react-router-dom"
import { Cbuttons } from "../utiles/Cbuttons"

export const Sidebar = () => {
  const [blogdata, setblogdata] = useState([])
  const [datalogn, setdatalogn] = useState(null)


  useEffect(() => {
    (async () => {
      try {
        const fetched = await Blogbase.firstlistblogs()
        setblogdata(fetched.documents)
        setdatalogn(fetched.total)
      } catch (error) {
        console.log(error);
      }
    })()
  }, [])

  const nextblogs = async () => {
    try {
      let lastid = blogdata[blogdata.length - 1].$id
      const fetched = await Blogbase.listblogs(lastid)
      console.log(fetched);
      setblogdata(pre => [...pre, ...fetched.documents])
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className=' p-2  py-20 bg-[#121212] flex flex-col gap-5 w-[20%] h-screen fixed  overflow-y-scroll scrollbar select-none'>
      {blogdata.map((e) => (
        <Link key={e.$id} to={`/blog/${e?.$id}`} className="pl-10">
          <div className=' group cursor-pointer overflow-hidden'>
            <div className="flex items-center justify-start">
              <span className="material-symbols-outlined text-[0.9rem] text-zinc-400 group-hover:text-zinc-100 duration-100">line_start</span>
              <p className='lowercase font-medium text-[0.9rem] text-zinc-400 group-hover:text-zinc-100 duration-100'>{e.date}</p>
            </div>
            <p className='px-2 text-[0.9rem] w-full delay-100 text-zinc-200 group-hover:translate-x-1 duration-200 group-hover:text-lime-400 line-clamp-2'>{e.title}</p>
          </div>
        </Link>
      ))

      }
      {datalogn !== blogdata.length && blogdata.length>0 && <Cbuttons text="load more" bclass="w-fit self-center" tclass="text-[0.7rem]" btype={0} onClick={nextblogs} />}
    </div>

  )
}
