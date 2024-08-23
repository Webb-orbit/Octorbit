import { ShootingStars } from "../utiles/Shooting"
import { StarsBackground } from "../utiles/Starbackround"

const Header = () => {
    return (
        <div className=' px-10 pt-10 h-fit w-full relative max-sm:px-2 max-sm:h-[40vh]'>
            <h1 className=' w-fit text-[1.9rem] font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400 uppercase select-none'>hi i makarov</h1>

            <div className=' py-24 max-sm:py-10'>
                <h3 className=' text-center selection:text-black selection:bg-white text-[2.5rem] capitalize font-bold max-sm:text-[1.5rem]'>nothing adsolute | nothing ramdom</h3>
            </div>
            <ShootingStars  />
            <StarsBackground starDensity={0.0005} />
        </div>
    )
}

export default Header