/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'

const Listskliton = ({ num = 6 }) => {
    const [mark, setmark] = useState([])
    useEffect(() => {
        let arr = [];
        for (let i = 0; i < num; i++) {
            arr.push(i)
        }
        setmark(arr)

        return () => {
            setmark([])
        }
    }, [num])

    return (
        <div className=' flex flex-col gap-6'>
            {mark?.map((e) => (
                <div
                    className='w-full animate-pulse rounded-md bg-zinc-800 h-10'
                    key={e}></div>
            ))}
        </div>
    )
}

export default Listskliton