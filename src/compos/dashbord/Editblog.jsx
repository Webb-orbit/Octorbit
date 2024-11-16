import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Blogbase from '../../appwrite/blogbase'
import Addblog from './Addblog'
import Loadingpage from '../utiles/Loadingpage'

const Editblog = () => {
    const { blogid } = useParams()
    const naviget = useNavigate()
    const [bloginfo, setbloginfo] = useState(null)

    useEffect(() => {
        (async () => {
            try {
                const finded = await Blogbase.getoneblog(blogid)
                if (finded) {
                    setbloginfo(finded)
                }else{
                    naviget("/")
                }
            } catch (error) {
                console.log(error);
            }
        })()
    }, [])

    return bloginfo?(
        <Addblog prevals={bloginfo}/>
    ): (<Loadingpage/>)
}

export default Editblog