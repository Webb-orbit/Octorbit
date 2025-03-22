import { Sidebar } from '../compos/common/Sidebar'
import Navber from '../compos/common/Navber'
import Header from '../compos/common/Header'
import { Blog } from '../compos/common/Blog'
import { Cbuttons } from '../compos/utiles/Cbuttons'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import xlogo from "../files/xlogow.png"
import Blogslist from '../compos/common/Blogslist'
import { Width } from '../compos/utiles/Width'

const Home = () => {
  const [expaned, setexpaned] = useState(false)
  return (
    <div className='w-full min-h-screen grid  grid-cols-5  max-sm:block'>

      <div className=' col-span-1 max-sm:hidden'>
        <Sidebar />
      </div>
      <div className='col-span-4 '>
        <Navber />
        <div>
          <Header />
          <div className={` mx-auto min-h-screen pb-2 w-[80%] flex items-center flex-col gap-5 max-sm:w-[90%]`}>
            <h1 className='capitalize mulish text-[1.4rem] font-semibold max-sm:hidden'>letest blog</h1>
            <div className={`w-full  relative ${expaned ? "h-full" : " h-[90vh] overflow-hidden"}`}>
              <Blog ani={false} />
              <div className={` flex  flex-col items-center  py-3 ${expaned ? "block " : " absolute bottom-0 w-full bg-black/20 backdrop-blur-[2px] z-10"}`}>
                <Cbuttons onClick={() => setexpaned(pre => !pre)} text={`${expaned ? "collapse" : "expand"}`} tclass='text-[0.9rem]' />
              </div>
            </div>
          </div>
        </div>
        <div className=' hidden max-sm:block'>
          <Width>
            <Blogslist />
          </Width>
        </div>

        <div className="flex py-2 px-5 bg-neutral-800/50 rounded-md cursor-default items-center gap-1 justify-between  text-neutral-400 font-mono">
          <p className=' text-[0.6rem] max-sm:text-[0.3rem]'>&copy; 2024 - developed by makarov - all right reserved</p>
          <div >
            <Link className='flex items-center gap-2 bg-neutral-950 p-3 rounded-full' to="https://x.com/webborbit"> <img className="w-[0.9rem] h-[0.9rem] tracking-tighter" src={xlogo} /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
