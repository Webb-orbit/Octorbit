import { Link } from "react-router-dom"

const Errorpage = ({errmess, butext, goto="/", classes=""}) => {
  return (
    <div className=' w-full h-screen fixed top-0 bg-black text-neutral-100 select-none backdrop-blur-sm flex flex-col items-center justify-center gap-4'>
      <h3 className=' uppercase font-semibold  text-[2rem] animate-bounce'>opps!</h3>
      <p className='text-[0.9rem] capitalize text-neutral-400'>{errmess?errmess:"something went wrong"}</p>
      {butext && <a href={`${goto}`}  className={`px-3 py-1 capitalize font-medium ${classes}`}>{butext}</a>}
    </div>
  )
}

export default Errorpage
