/* eslint-disable react/prop-types */
import React from 'react'

const Card = ({ children, title, opener, setopener, ...props }) => {
    return (
        <div className={`w-full h-screen bg-black/45 backdrop-blur-sm justify-center items-center fixed top-0 left-0 select-none ${opener ? "flex" : "hidden"}`}>

            <div className='w-[40%] h-[40vh] p-3 bg-black rounded-md flex flex-col outline outline-1 outline-neutral-50/60 overflow-y-scroll scrollbar max-sm:w-[90%]'>

                <div className='flex items-center justify-between h-fit py-1'>
                    <p className='text-[1rem] poppins capitalize w-[90%] overflow-hidden'>{title}</p>
                    <button onClick={() => setopener(pre => !pre)} type='button' className='text-[1rem] material-symbols-outlined'>close</button>
                </div>

                <div {...props} className='flex flex-col gap-2 items-center  justify-center h-full'>
                    {children}
                </div>

            </div>

        </div>
    )
}

export default Card