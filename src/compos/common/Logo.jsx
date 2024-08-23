import { motion } from "framer-motion";
import logo from "../../files/MAKAROV.jpeg"
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to={"/"}>
            <motion.img
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                src={logo} className=" w-14 rounded-full" draggable="false" />
        </Link>
    )
}

export default Logo

