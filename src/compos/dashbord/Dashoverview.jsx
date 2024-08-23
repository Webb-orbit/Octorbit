import React, { useEffect, useState } from 'react'
import Blogcard from './Blogcard'
import Blogbase from '../../appwrite/blogbase'
import { Cbuttons } from '../utiles/Cbuttons'


const Dashoverview = () => {
    const [blogdata, setblogdata] = useState([])
    const [datalogn, setdatalogn] = useState(null)

    useEffect(() => {
        (async () => {
            try {
                const fetched = await Blogbase.firstlistblogsdashboard()
                setblogdata(fetched.documents)
                setdatalogn(fetched.total)
                console.log(fetched.documents);

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
        <div className='w-[95%] mx-auto px-5 py-6 flex flex-col gap-10'>
            <div>
                {/* add search fillters or addnew button*/}
            </div>
            <div>
                <h3 className='py-5 selection:text-black selection:bg-white text-[1.5rem] capitalize font-bold text-transparent bg-clip-text bg-gradient-to-br  from-neutral-100 to-neutral-500 '>all blogs</h3>
                <div className=' flex gap-6 flex-wrap'>
                    {blogdata.map((e) => (
                        <Blogcard key={e.$id} data={e} />
                    ))}
                </div>
            </div>
            <div className='flex justify-center'>
                {datalogn !== blogdata.length && blogdata.length > 0 && <Cbuttons text="load more" bclass="w-fit self-center" tclass="text-[0.7rem]" btype={0} onClick={nextblogs} />}
            </div>
        </div>
    )
}

export default Dashoverview