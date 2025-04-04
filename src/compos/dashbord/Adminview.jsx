import { Blog } from '../common/Blog'
import Blogslist from '../common/Blogslist'
import { Width } from '../utiles/Width'


const Adminview = () => {
    return (
        <Width>
        <div className='flex flex-col gap-16'>
            <Blog />
            <div className=' w-full h-[1px] bg-neutral-500'></div>
            <Blogslist header={false} />
        </div>
        </Width>
    )
}

export default Adminview
