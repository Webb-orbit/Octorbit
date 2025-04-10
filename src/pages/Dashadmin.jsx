import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Loadingpage from '../compos/utiles/Loadingpage'
import Navber from '../compos/common/Navber'
import Dashnav from '../compos/dashbord/Dashnav'
import { useDispatch} from "react-redux"
import Admin from "../appwrite/auth"
import Settbase from "../appwrite/Settingapi"

const Dashadmin = () => {
    const [loading, setloading] = useState(true)
    const naviget = useNavigate()
    const disptch = useDispatch()

    useEffect(() => {
        (async () => {
            try {
                const admin = await Admin.getcurrentaccount()
               // const adminblog = await Settbase.getadmin()
                if (admin && admin.labels.includes("admin")) {
                    setloading(false)
                    disptch(storelogin({userid:admin.$id,admindocid: "hello"}))
                } else {
                    naviget("/mkr/blogs3")
                }
            } catch (error) {
                console.log(error);
                setloading(false)
                naviget("/mkr/blogs")
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
