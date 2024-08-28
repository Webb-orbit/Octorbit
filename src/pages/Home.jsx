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
          <div className={`mx-auto min-h-screen pb-6 w-[80%] flex items-center flex-col gap-5 max-sm:w-[90%]`}>
            <h1 className=' mt-10 capitalize mulish text-[1.4rem] font-semibold'>letest            blog</h1>
            <div className={`w-full ${expaned ? "h-full" : " h-[90vh] overflow-hidden"}`}>
              <Blog ani={false} />
            </div>
            <Cbuttons onClick={() => setexpaned(pre => !pre)} text={`${expaned ? "collapse" : "expand"}`} tclass='text-[0.9rem]' />
          </div>
        </div>
        <div className=' hidden max-sm:block'>
        <Width>
          <Blogslist/>
        </Width>
        </div>
        <div className="flex float-right my-5 px-5 bg-neutral-800/50 py-1 rounded-md cursor-default items-center gap-1 text-[0.9rem] text-neutral-400">you connect on <Link to="https://x.com/webbenemies"><img className="w-[1rem]" src={xlogo} /></Link></div>
      </div>
    </div>
  )
}

export default Home