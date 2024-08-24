/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export const Dropmenu = ({active=false, setactive, text, icon, children}) => {
  return (
    <div 
    onClick={()=> setactive(true)} 
    onMouseLeave={()=> setactive(false)}
    className='relative'>
        <div className=' cursor-pointer flex items-center'>
        {icon && <span className='material-symbols-outlined text-[1rem]'>{icon}</span>}
        {text && <p>{text}</p>}
        </div>
        {active !== false && 
        <motion.div 
        initial={{ opacity: 0, scale: 0.85, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
            type: "spring",
            mass: 0.5,
            damping: 11.5,
            stiffness: 100,
            restDelta: 0.001,
            restSpeed: 0.001
        }}
        className='min-w-[10rem] max-h-[10rem] flex flex-col gap-2 overflow-y-scroll rounded-md bg-neutral-800 no-visible-scrollbar absolute right-0 px-4 py-6 w-fit max-sm:bottom-0 max-sm:fixed max-sm:w-full max-sm:h-[30vh] z-40'>
            {children}
        </motion.div>}
    </div>
  )
}

export const Menulink = ({children, classes, ...rest})=>{
    return(
        <Link {...rest} className={` w-full text-white capitalize py-2 text-[0.9rem] hover:text-neutral-300 duration-100 tracking-widest max-sm:text-[1.1rem] mulish ${classes}`}>
            {children}
        </Link>
    )
}

export const Menubutton = ({children, classes, ...rest})=>{
    return(
        <button {...rest} type='button' className={` mulish py-2 text-left w-full text-white capitalize text-[0.9rem] hover:text-neutral-300 duration-100 tracking-widest max-sm:text-[1.1rem] ${classes}`}>
            {children}
        </button>
    )
}