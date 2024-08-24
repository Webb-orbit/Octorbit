import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Blogbase from '../../appwrite/blogbase'
import { TracingBeam } from '../utiles/Trackingline'
import plaintohtml from 'markdown-to-htm'
import parse from 'html-react-parser';

export const Blog = () => {
    const { blogid } = useParams()
    const [blogdata, setblogdata] = useState(null)

    useEffect(() => {
        (async () => {
            try {
                const blog = await Blogbase.getoneblog(blogid)
                if (blog) {
                    setblogdata(blog)
                }
            } catch (error) {
                console.log(error);
            }
        })()
    }, [blogid])

    return blogdata ? (
        <div className='  '>
            <div className='py-5'>
                <div className=' mulish selection:text-black selection:bg-white'>
                    <h2 className=' text-neutral-100 first-letter:capitalize text-[2.1rem]'>{blogdata?.title}</h2>
                    <p className=' w-[80%] text-[0.9rem] text-neutral-200 font-medium max-sm:w-full max-sm:text-[0.7rem]'>{blogdata?.description}</p>
                </div>
                <div className=' mulish flex items-center py-8 justify-between selection:text-black selection:bg-white'>
                    <div className='flex flex-col '>
                        <h3 className=' capitalize text-[1.3rem] text-neutral-300 font-medium'>makarov</h3>
                        <p className=' text-neutral-400 text-[0.8rem] font-medium'>{blogdata.date}</p>
                    </div>
                    <div className='flex gap-3 items-center text-[0.9rem]'>
                        <button className='material-symbols-outlined  text-[1.4rem]'>share</button>
                    </div>
                </div>
            </div>
            <TracingBeam>
                <div className=''> {parse(plaintohtml(blogdata.content))}</div>
            </TracingBeam>
        </div>
    ) : null
}
