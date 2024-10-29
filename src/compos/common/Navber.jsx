/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import { Cbuttons } from "../utiles/Cbuttons"
import Logo from "./Logo"
import { useSelector } from "react-redux"

const Navber = ({classes}) => {
    const naviget = useNavigate()
    const {isadmin} = useSelector(state=> state.admin)
    return (
        <div className={` w-full flex h-16 py-3 px-10 justify-between items-center max-sm:px-2 ${classes}`}>
            <Logo/>
            <div className=" flex items-center gap-3 max-sm:gap-1">
                <Cbuttons
                    onClick={() => naviget("/mkr/about")}
                    icon={"bolt"}
                    text="about" tclass={"text-[0.9rem]"} />
                <Cbuttons
                    onClick={() => naviget("/mkr/blogs")}
                    icon={"eco"}
                    text="Thoughts" tclass={"text-[0.9rem]"} />
                {isadmin && <Cbuttons
                    onClick={() => naviget("/dashboard/overview")}
                    text="dashboard" tclass={"text-[0.9rem]"} />}
            </div>
        </div>
    )
}

export default Navber