import { Sidebar } from '../compos/common/Sidebar'
import Navber from '../compos/common/Navber'
import Header from '../compos/common/Header'

const Home = () => {
  return (
    <div className='w-full min-h-screen grid  grid-cols-5 max-sm:block'>
        <div className=' col-span-1 max-sm:hidden'>
            <Sidebar/>
        </div>
        <div className='col-span-4'>
            <Navber/>
            <div>
                <Header/>
            </div>
        </div>
    </div>
  )
}

export default Home