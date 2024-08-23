import { useEffect, useState } from "react"
import Admin from "./appwrite/auth"
import { useDispatch } from "react-redux"
import { storelogin } from "./store/adminslice"
import Loadingpage from "./compos/utiles/Loadingpage"
import { Outlet } from "react-router-dom"


const App = () => {
  const disptch = useDispatch()
  const [loading, setloading] = useState(true)

  useEffect(() => {
    ; (async () => {
      try {
        const isadmin = await Admin.getcurrentaccount()
        console.log(isadmin);

        if (isadmin && isadmin.labels.includes("admin")) {
          console.log("yes you");
          disptch(storelogin(isadmin.$id))
          setloading(false)
        }
      } catch (error) {
        console.log(error);
        setloading(false)
      }
    }
    )()
  }, [])

  return loading ? (<Loadingpage />) : (
    <>
        <Outlet />
    </>
  )
}

export default App