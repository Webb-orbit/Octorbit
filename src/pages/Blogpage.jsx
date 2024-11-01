import { Blog } from '../compos/common/Blog'
import Blogslist from '../compos/common/Blogslist'

const Blogpage = () => {
  return (
    <>
    <div className='flex flex-col gap-16'>
    <Blog/>
    <div className=' w-full h-[1px] bg-neutral-500'></div>
    <Blogslist header={false}/>
    </div>
    </>
  )
}

export default Blogpage