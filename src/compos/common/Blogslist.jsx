/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useEffect } from 'react'
import Blogbase from '../../appwrite/blogbase'
import { Link, useParams } from 'react-router-dom'
import { Cbuttons } from '../utiles/Cbuttons'
import Listskliton from '../utiles/Listskliton'


const Blogslist = ({header=true}) => {
    const {blogid} = useParams()
    console.log(blogid);
    
    const [blogdata, setblogdata] = useState([])
    const [datalogn, setdatalogn] = useState(null)
    const [id, setid] = useState(undefined)

    useEffect(() => {
        (async () => {
            setid(blogid)
            try {
                const fetched = await Blogbase.firstlistblogs()
                setblogdata(fetched.documents)
                setdatalogn(fetched.total)
            } catch (error) {
                console.log(error);
            }
        })()

        return()=>{
            setid(undefined)
        }
    }, [blogid])

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
                <h1 className='selection:text-black selection:bg-white text-[2rem] capitalize font-bold text-transparent bg-clip-text bg-gradient-to-br  from-neutral-100 to-neutral-500 '>my Thoughts</h1>
                <p className=' selection:text-black selection:bg-white text-neutral-500 uppercase font-medium text-[0.9rem] opacity-90'>..............</p >
            </div>
            <div className=' flex flex-col gap-3'>
                {datalogn ?blogdata.map((e) => (
                    <Link key={e.$id} to={`/mkr/blog/${e.$id}/#`}>
                        <div className=' flex items-center overflow-hidden group max-sm:flex-col max-sm:items-start my-2'>
                            <p className={`w-[25%]  group-hover:text-neutral-100 duration-75 font-medium max-sm:w-full ${id == e.$id? "text-neutral-100 text-[0.9rem]":"text-[1rem] text-neutral-400"}`}>{e.date}</p>
                            <p className={` w-[75%] line-clamp-1 group-hover:text-neutral-100 duration-75 max-sm:w-full max-sm:line-clamp-2 ${id == e.$id? "text-neutral-100 text-[0.9rem]":"text-[1rem] text-neutral-400"}`}>{e.title}</p>
                        </div>
                    </Link>
                )): <Listskliton num={5}/>}
            </div>
            {datalogn !== blogdata.length && blogdata.length > 0 && <Cbuttons text="load more" bclass="w-fit self-center" tclass="text-[0.7rem]" btype={0} onClick={nextblogs} />}

        </>
    )
}

export default Blogslist