import { useEffect, useState } from 'react'
import Blogcard from './Blogcard'
import Blogbase from '../../appwrite/blogbase'
import { Cbuttons } from '../utiles/Cbuttons'
import {PlaceholdersAndVanishInput} from "../utiles/Searchbar"


const Dashoverview = () => {
    const [blogdata, setblogdata] = useState([])
    const [datalogn, setdatalogn] = useState(null)
    const [searchvalue, setsearchvalue] = useState("")
    const [searched, setsearched] = useState(false)
    const [updated, setupdated] = useState(false)
    const placeholders = ["search", "on this site"];

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
    }, [updated])

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

    const searchfun = async()=>{
        try {
            const searchapp = await Blogbase.searchonblogs(searchvalue)
            if (searchapp) {
                setsearched(true)
                setblogdata(searchapp.documents)
                setdatalogn(searchapp.total)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const nextsearchfun = async()=>{
        try {
            console.log("onnext");
            
            let lastid = blogdata[blogdata.length - 1].$id
            const searchapp = await Blogbase.searchnextonblogs(searchvalue, lastid)
            if (searchapp) {
                setblogdata(pre => [...pre, ...searchapp.documents])
            }
        } catch (error) {
            console.log(error);
        }
    }

    const resetsearch = ()=>{
        setsearched(false)
        setupdated(pre=> !pre)
    }

    return (
        <div className='w-[95%] mx-auto px-5 py-6 flex flex-col gap-10'>
            <div className=' flex  items-center gap-3'>
                <PlaceholdersAndVanishInput placeholders={placeholders} onChange={(e)=>setsearchvalue(e.target.value)} onSubmit={searchfun}/>
                {searched && <Cbuttons text="reset" onClick={resetsearch}/>}
            </div>
            <div>
                <h3 className='py-5 selection:text-black selection:bg-white text-[1.5rem] capitalize font-bold text-transparent bg-clip-text bg-gradient-to-br  from-neutral-100 to-neutral-500 '>all blogs</h3>
                <div className=' flex gap-6 flex-wrap'>
                    {blogdata.length>0?blogdata.map((e) => (
                        <Blogcard key={e.$id} data={e} />
                    )):<div>no results found</div>}
                </div>
            </div>
            <div className='flex justify-center'>
                {!searched && datalogn !== blogdata.length && blogdata.length > 0 && <Cbuttons text="load more" bclass="w-fit self-center" tclass="text-[0.7rem]" btype={0} onClick={nextblogs} />}

                {searched && datalogn !== blogdata.length && blogdata.length > 0 && <Cbuttons text="load more" bclass="w-fit self-center" tclass="text-[0.7rem]" btype={0} onClick={nextsearchfun} />}
            </div>
        </div>
    )
}

export default Dashoverview