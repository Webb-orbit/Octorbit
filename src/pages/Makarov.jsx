import React from 'react'
import Navber from '../compos/common/Navber'
import { Outlet } from 'react-router-dom'
import { Width } from '../compos/utiles/Width'

const Makarov = () => {
    return (
        <>
            <Width>
                <Navber />
                <Outlet />
            </Width>
        </>
    )
}

export default Makarov