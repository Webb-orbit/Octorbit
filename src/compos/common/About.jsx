import plaintohtml from "markdown-to-htm"
import parse from "html-react-parser"
import { Link } from "react-router-dom"
import xlogo from "../../files/xlogow.png"

const About = () => {

const abouts = `
    
Hello! First of all, my real name isn't Makarov; it's just my nickname.

I am makarov. who still creating own Identity.

**Why did I start writing?** Ahh, one day, I went to my relative's house to work on a website, mainly because they had Wi-Fi !. 
While I was there, a question randomly popped into my mind: ** Who is the founder of ChatGPT? ** 
I Googled it and found out it was **Sam Altman.**
That discovery led me to his blog, where I ended up reading **around 10 blogs** in one sitting. 
My head was practically exploding with a **headache** from all the reading,  but it sparked a **thought**: 

what's happend if I start writing? 

---
i write not because i want likes.
i write not because i impress someone.

i write because i like it!
i write because i express myself!
i write because i will see changing myself!


`
    return (
        <>
            <div className=" selection:bg-white selection:text-black">
                <h1 className='poppins selection:text-black selection:bg-white text-[2rem] capitalize font-bold text-transparent bg-clip-text bg-gradient-to-br  from-neutral-100 to-neutral-500 '> about me? </h1>
                <p className=' poppins selection:text-black selection:bg-white text-neutral-500 uppercase font-medium text-[0.9rem] opacity-90'> who am i as makarov ! </p >
                <div className="inter text-[0.9rem] text-neutral-200 max-sm:text-[0.9rem]">
                    {parse(plaintohtml(abouts))}
                </div>
                <div>
                    <Link className='flex float-right items-center gap-2 bg-neutral-900 p-3 rounded-full' to="https://x.com/webbenemies"> <img className="w-[0.9rem] h-[0.9rem] tracking-tighter" src={xlogo} /></Link>
                </div>
            </div>
        </>
    )
}

export default About
