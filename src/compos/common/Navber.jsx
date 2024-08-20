import { useNavigate } from "react-router-dom"
import { Cbuttons } from "../utiles/Cbuttons"
import Logo from "./Logo"
import { useSelector } from "react-redux"

const Navber = () => {
    const naviget = useNavigate()
    const {isadmin} = useSelector(state=> state.admin)
    return (
        <div className=" bg-[#121212] backdrop-blur-sm flex h-16 py-2 px-[20%] justify-between items-center">
            <Logo />
            <div className=" flex items-center gap-3">
                <Cbuttons
                    onClick={() => naviget("/about")}
                    text="about" tclass={"text-[0.9rem]"} />
                <Cbuttons
                    onClick={() => naviget("/blogs")}
                    text="blogs" tclass={"text-[0.9rem]"} />
                {isadmin && <Cbuttons
                    onClick={() => naviget("/dashboad")}
                    text="dashboad" tclass={"text-[0.9rem]"} />}
            </div>
        </div>
    )
}

export default Navber