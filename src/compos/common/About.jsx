import plaintohtml from "markdown-to-htm"
import parse from "html-react-parser"
import { Link } from "react-router-dom"
import xlogo from "../../files/xlogow.png"

const About = () => {

const abouts = `---
**Hello! First of all, my real name isn't Makarov; it's just my nickname. **

I am a front-end web developer with 1.7 years of experience. I began my journey by learning HTML, CSS, and JavaScript. **Interestingly**, it took me around 9-10 months to feel little confident in writing JavaScript a long but rewarding process. 
Now, I'm expanding my skills by learning **backend development** and building simple websites.

**Why did I start writing blogs?** Ahh, one day, I went to my relative's house to work on a website, mainly because they had Wi-Fi !. 
While I was there, a question randomly popped into my head: ** Who is the founder of ChatGPT? ** 
I Googled it and found out it was **Sam Altman.**
That discovery led me to his blog, where I ended up reading **around 10 blogs** in one sitting. 
My head was practically exploding with a **headache** from all the reading,  but it sparked a thought: 

what's happend I started writing blogs? 
And why not create a self-made blog website to known thet!

---
i write not because i like it.
i write not because i want likes.
i write not because i impressed someone.

i write because i express yourself.
i write because i express emotions.
i write because i will see myself becomeing 2.0.

---


`
    return (
        <>
            <div className=" selection:bg-white selection:text-black">
                <h1 className='poppins selection:text-black selection:bg-white text-[2rem] capitalize font-bold text-transparent bg-clip-text bg-gradient-to-br  from-neutral-100 to-neutral-500 '> about me? </h1>
                <p className=' poppins selection:text-black selection:bg-white text-neutral-500 uppercase font-medium text-[0.9rem] opacity-90'> how am i as makarov ! </p >
                <div className="inter text-[1.1rem] text-neutral-200 max-sm:text-[0.9rem]">
                    {parse(plaintohtml(abouts))}
                </div>
                <div>
                <div className="flex float-right my-5 px-5 bg-neutral-800/50 py-1 rounded-md cursor-default items-center gap-1 text-[0.9rem] text-neutral-400">you connect on <Link to="https://x.com/webbenemies"><img className="w-[1rem]" src={xlogo} /></Link></div>
                </div>
            </div>
        </>
    )
}

export default About