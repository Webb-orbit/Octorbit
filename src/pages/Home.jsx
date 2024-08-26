import { Sidebar } from '../compos/common/Sidebar'
import Navber from '../compos/common/Navber'
import Header from '../compos/common/Header'
import { Blog } from '../compos/common/Blog'
import { Cbuttons } from '../compos/utiles/Cbuttons'
import { useState } from 'react'

const Home = () => {
  const [expaned, setexpaned] = useState(false)
  return (
    <div className='w-full min-h-screen grid  grid-cols-5  max-sm:block'>
      <div className=' col-span-1 max-sm:hidden'>
        <Sidebar />
      </div>
      <div className='col-span-4'>
        <Navber />
        <div>
          <Header />
          <div className={`mx-auto min-h-screen pb-6 w-[80%] flex items-center flex-col gap-5 max-sm:w-[90%]`}>
            <h1 className=' mt-10 capitalize mulish text-[1.4rem] font-semibold'>letest            blog</h1>
            <div className={` ${expaned? "h-full":" h-[90vh] overflow-hidden"}`}>
            <Blog />
            </div>
            <Cbuttons onClick={()=>setexpaned(pre=> !pre)} text={`${expaned?"collapse":"expand"}`} tclass='text-[0.9rem]'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home