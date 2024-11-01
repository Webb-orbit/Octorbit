import { ShootingStars } from "../utiles/Shooting"
import { StarsBackground } from "../utiles/Starbackround"

const Header = () => {
    return (
        <div className=' px-10 pt-10 h-fit w-full relative max-sm:px-2 max-sm:h-[55vh]'>
            <h1 className=' w-fit text-[1.9rem] font-bold source-sans tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400 uppercase select-none '>hi i makarov</h1>

            <div className=' py-24 max-sm:py-10'>
                <h3 className=' text-center text-neutral-200 selection:text-black source-sans selection:bg-white text-[4rem] font-medium max-sm:text-[2rem] uppercase'>everything adsolute <br /> everything ramdom </h3>
            </div>
            <ShootingStars />
            <StarsBackground starDensity={0.001} />
        </div>
    )
}

export default Header