import { useEffect, useState } from 'react'
import Admin from '../appwrite/auth'
import { Outlet, useNavigate } from 'react-router-dom'
import Loadingpage from '../compos/utiles/Loadingpage'
import Navber from '../compos/common/Navber'
import Dashnav from '../compos/dashbord/Dashnav'

const Dashadmin = () => {
    const [loading, setloading] = useState(true)
    const naviget = useNavigate()

    useEffect(() => {
        (async () => {
            try {
                const admin = await Admin.getcurrentaccount()
                if (admin && admin.labels.includes("admin")) {
                    console.log("admin on ->", admin);
                    setloading(false)
                } else {
                    naviget("/")
                }
            } catch (error) {
                console.log(error);
                setloading(false)
                naviget("/")
            }
        })()
    }, [])

    const dashboardlinks = [
        {
            title: "overview",
            link: "/dashboard/overview"
        },
        {
            title: "create",
            link: "/dashboard/create"
        },
        {
            title: "settings",
            link: "/dashboard/settings"
        },

    ]
    return loading ? (<Loadingpage />) : (
        <>
            <Navber classes={"bg-[121212]"} />
            <Dashnav navlinks={dashboardlinks} />
            <Outlet />
        </>
    )
}

export default Dashadmin