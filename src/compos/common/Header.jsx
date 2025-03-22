import { ShootingStars } from "../utiles/Shooting"
import { StarsBackground } from "../utiles/Starbackround"

const Header = () => {
    return (
        <div className=' px-10 pt-10 h-fit w-full relative max-sm:px-2 max-sm:h-[75vh]'>
            <h1 className=' w-fit text-[1.9rem] font-bold source-sans tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400 uppercase select-none max-sm:text-center max-sm:w-full '>hi i makarov</h1>

            <div className=' py-24 max-sm:h-full max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:py-2 max-sm:absolute max-sm:top-0 max-sm:right-0 max-sm:left-0 max-sm:bottom-0'>
                <h3 className=' text-center text-neutral-200 selection:text-black source-sans selection:bg-white text-[4rem] font-medium max-sm:text-[2rem] uppercase'>Anything adsolute <br /> anything ramdom </h3>
            </div>
            <ShootingStars />
            <StarsBackground starDensity={0.001} />
        </div>
    )
}

export default Header
