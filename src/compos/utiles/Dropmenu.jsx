/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export const Dropmenu = ({active=false, setactive, text, icon, children}) => {
  return (
    <div 
    onMouseLeave={()=> setactive(false)}
    onMouseEnter={()=> setactive(true)} 
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
        className='min-w-[10rem] flex flex-col gap-2 rounded-md bg-zinc-900 absolute px-4 py-2 w-fit'>
            {children}
        </motion.div>}
    </div>
  )
}

export const Menulink = ({children, classes, ...rest})=>{
    return(
        <Link {...rest} className={` w-full text-white capitalize text-[0.9rem] hover:text-neutral-300 duration-100 tracking-widest  ${classes}`}>
            {children}
        </Link>
    )
}

export const Menubutton = ({children, classes, ...rest})=>{
    return(
        <button {...rest} type='button' className={` w-full text-white capitalize text-[0.9rem] hover:text-neutral-300 duration-100 tracking-widest ${classes}`}>
            {children}
        </button>
    )
}