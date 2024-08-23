/* eslint-disable react/prop-types */
import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const Dashnav = ({navlinks}) => {
  const [HoveredIndex, setHoveredIndex] = useState("")

  return navlinks?(
    <div className='w-full select-none bg-[#121212] text-white h-13  flex items-center justify-start px-5 '>
      {navlinks.map((e, id) => (
        <NavLink key={e.link} to={e.link}
        className={({isActive})=> `${isActive?"border-b-2 text-neutral-50":""} group px-3 py-1 relative z-20 text-neutral-400 text-[0.9rem] capitalize hover:text-neutral-50`}
        onMouseEnter={() => setHoveredIndex(id)}
        onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {HoveredIndex === id && (
              <motion.span
              className="absolute  inset-0 h-[90%] w-full bg-neutral-600/50  rounded-sm"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15, delay:0.1 }
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.5 }
                }}
                />
              )}
          </AnimatePresence>
          {e.title}
        </NavLink>
      ))
    }
    </div>
  ):null
}

export default Dashnav