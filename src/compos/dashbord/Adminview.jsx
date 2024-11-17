import { Blog } from '../common/Blog'
import Blogslist from '../common/Blogslist'

const Adminview = () => {
    return (
        <div className='flex flex-col gap-16'>
            hello
            <Blog />
            <div className=' w-full h-[1px] bg-neutral-500'></div>
            <Blogslist header={false} />
        </div>
    )
}

export default Adminview