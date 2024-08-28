import { useState } from 'react'
import { useEffect } from 'react'
import Blogbase from '../../appwrite/blogbase'
import { Link } from 'react-router-dom'
import { Cbuttons } from '../utiles/Cbuttons'


const Blogslist = ({header=true}) => {
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
            setblogdata(pre => [...pre, ...fetched.documents])
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className={`w-full ${header?"block":"hidden"}`}>
                <h1 className='selection:text-black selection:bg-white text-[2rem] capitalize font-bold text-transparent bg-clip-text bg-gradient-to-br  from-neutral-100 to-neutral-500 '>all blogs</h1>
                <p className=' selection:text-black selection:bg-white text-neutral-500 uppercase font-medium text-[0.9rem] opacity-90'>..............</p >
            </div>
            <div className=' flex flex-col gap-3'>
                {blogdata.map((e) => (
                    <Link key={e.$id} to={`/mkr/blog/${e.$id}/#`}>
                        <div className=' flex items-center overflow-hidden group max-sm:flex-col max-sm:items-start my-2'>
                            <p className=' w-[25%] text-neutral-400 group-hover:text-neutral-100 duration-75 font-medium max-sm:w-full'>{e.date}</p>
                            <p className=' w-[75%] line-clamp-1 text-neutral-300 group-hover:text-neutral-100 duration-75 max-sm:w-full max-sm:line-clamp-2'>{e.title}</p>
                        </div>
                    </Link>
                ))}
            </div>
            {datalogn !== blogdata.length && blogdata.length > 0 && <Cbuttons text="load more" bclass="w-fit self-center" tclass="text-[0.7rem]" btype={0} onClick={nextblogs} />}

        </>
    )
}

export default Blogslist