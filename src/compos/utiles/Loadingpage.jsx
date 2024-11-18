/* eslint-disable react/prop-types */
import loadingsvg from "../../files/loading.svg"
import { BackgroundBeams } from './Bgbeams'

const Loadingpage = ({mass, imgsrc}) => {
  return (
    <div className=' w-full h-screen fixed top-0 left-0 bg-black select-none backdrop-blur-sm flex flex-col items-center justify-center gap-4'>
        {!imgsrc && <img src={loadingsvg} className='w-[2rem] animate-pulse'/>}
        {imgsrc && <span className="material-symbols-outlined text-[1.8rem] text-white animate-pulse">{imgsrc}</span>}
        <p className=' text-white capitalize font-medium'>{mass?mass:"loading"}</p>
        <BackgroundBeams/>
    </div>
  )
}

export default Loadingpage