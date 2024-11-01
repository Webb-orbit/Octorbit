/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Blogbase from '../../appwrite/blogbase'
import { TracingBeam } from '../utiles/Trackingline'
import plaintohtml from 'markdown-to-htm'
import parse from 'html-react-parser';
import Card from '../utiles/Card'
import { Cbuttons } from '../utiles/Cbuttons'

export const Blog = ({ ani = true }) => {
    const { blogid } = useParams()
    const [blogdata, setblogdata] = useState(null)
    const [copyopen, setcopyopen] = useState(false)


    useEffect(() => {
        window.scrollTo({
            top: 0,
             behavior: "smooth"
        });
        (async () => {
            try {
                if (blogid) {
                    setblogdata(null)
                    const blog = await Blogbase.getoneblog(blogid)
                    if (blog) {
                        setblogdata(blog)
                    }
                } else {
                    const letestblog = await Blogbase.firstoneblog()
                    if (letestblog) {
                        setblogdata(letestblog?.documents[0])

                    }
                }
            } catch (error) {
                console.log(error);
            }
        })()
    }, [blogid])

    const copylink = () => {
        if (blogdata !== null) {
            navigator.clipboard.writeText(`${import.meta.env.VITE_ENDPOINT}/mkr/blog/${blogdata.$id}`)
            setcopyopen(false)
        }
    }

    return  (
        <>
            <div className=' min-w-full'>
                <div className='py-5 inter '>
                    <div className='  selection:text-black selection:bg-white'>
                        <h2 className=' text-neutral-200 font-semibold  first-letter:capitalize text-[2rem]'>{blogdata?.title|| <div className=' animate-pulse h-12 w-[80%] bg-zinc-600/70 rounded-sm'></div>}</h2>
                        <p className=' w-[80%] text-[0.9rem] text-neutral-200 font-medium max-sm:w-full max-sm:text-[0.7rem]'>{blogdata?.description}</p>
                    </div>
                    <div className='  flex items-center py-8 justify-between selection:text-black selection:bg-white'>
                        <div className='flex flex-col '>
                            <h3 className=' capitalize text-[1.3rem] text-neutral-300 font-medium '>makarov</h3>
                            <p className=' text-neutral-400 text-[0.8rem] font-medium'>{blogdata?.date || <div className=' animate-pulse h-4 w-[100%] bg-zinc-600/70 rounded-sm'></div>}</p>
                        </div>
                        <div className='flex gap-3 items-center text-[0.9rem]'>
                            <button onClick={() => setcopyopen(pre => !pre)} className='material-symbols-outlined  text-[1.4rem]'>share</button>
                        </div>
                    </div>
                </div>
                {!blogdata? (<div className=' animate-pulse h-[50vh] w-full bg-zinc-900/80 rounded-sm'></div>): ani ? (<TracingBeam>
                    <div className='ml-20 max-sm:ml-1 source-sans leading-7 text-zinc-300'> {parse(plaintohtml(blogdata?.content))}</div>
                </TracingBeam>) : (<div className='inter ml-20 max-sm:ml-1'> {parse(plaintohtml(blogdata?.content))}</div>)
                }
            </div>
            {blogdata && <Card title={"copy share link"} setopener={setcopyopen} opener={copyopen}>
                <div className='flex justify-center flex-col items-center gap-2 h-full w-full'>
                    <div className='flex justify-center items-center gap-2 h-full w-full'>
                        <input readOnly defaultValue={`${import.meta.env.VITE_ENDPOINT}/mkr/blog/${blogdata?.$id}`} type='input' className=' outline-none rounded-sm text-black inter text-[0.9rem] px-2 w-[65%]' />
                        <Cbuttons onClick={copylink} text='copy' tclass='text-[0.9rem]' />
                    </div>
                    <div>
                        <Link target='_blank' to={`https://x.com/intent/tweet?url=${import.meta.env.VITE_ENDPOINT}/mkr/blog/${blogdata?.$id}&text=${blogdata.title}`}>Tweet on x</Link>
                    </div>
                </div>
            </Card>}
        </>
    )
}

