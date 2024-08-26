import { Blog } from '../compos/common/Blog'
import Blogslist from '../compos/common/Blogslist'

const Blogpage = () => {
  return (
    <>
    <div className='flex flex-col gap-20'>
    <Blog/>
    <Blogslist header={false}/>
    </div>
    </>
  )
}

export default Blogpage