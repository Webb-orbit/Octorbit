/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react'
import plaintohtml from 'markdown-to-htm'
import "../../editor.css"

import { codeToHtml } from 'shiki'

const EditorBlock = ({ content, setcontent }) => {
    const [isactive, setisactive] = useState(true)
    const outputref = useRef(null)

    useEffect(() => {
        if (outputref.current) {
            let inner = plaintohtml(content)

            outputref.current.innerHTML = inner
            const pres = Array.from(document.getElementsByTagName("pre"))
            pres.map(async (e) => {
                console.log(e.innerHTML)
                const code = await codeToHtml(e.innerText, {
                    theme: "aurora-x",
                    lang: "jsx",
                })

                e.innerHTML = code
            })
        }
    }, [content])

    return (
        <>
            <div className=' flex flex-col gap-5'>
                <div className=' flex gap-5' >
                    <button
                        type='button'
                        className={`bg-neutral-50 text-[0.9rem] text-black px-3 py-1 rounded-full flex justify-center items-center gap-1 font-medium capitalize duration-75 hover:-translate-y-[0.10rem] active:scale-[1.01] ${!isactive && " bg-neutral-700 text-neutral-50"}`}
                        onClick={() => setisactive(true)} ><span className={`material-symbols-outlined text-[1rem] font-medium`}>edit</span>editor </button>

                    <button
                        type='button'
                        className={`bg-neutral-50 text-[0.9rem] text-black px-3 py-1 rounded-full flex justify-center items-center gap-1 font-medium capitalize duration-75 hover:-translate-y-[0.10rem] active:scale-[1.01] ${isactive && " bg-neutral-700 text-neutral-50"}`}
                        onClick={() => setisactive(false)} ><span className={`material-symbols-outlined text-[1rem] font-medium`}>power</span>preview</button>
                </div>

                <div className='h-[80vh] w-full relative rounded-md overflow-hidden'>
                    <div ref={outputref} className={` overflow-y-scroll scrollbar selection:bg-black selection:text-white absolute top-0 bg-neutral-950 w-full h-full p-4 ${isactive ? "z-[10]" : "z-[20]"}`}></div>
                    <div className={` absolute top-0 bg-neutral-950 w-full h-full p-4 ${isactive ? "z-[20]" : "z-[10]"}`}>
                        <textarea onChange={(e) => setcontent(e.target.value)} value={content} name="editor" spellCheck="false" className=' resize-none scrollbar w-full h-full outline-0 bg-transparent text-zinc-300 selection:bg-black selection:text-white text-[1.1rem]'></textarea>
                    </div>
                </div>

            </div>
        </>
    )
}

export default EditorBlock









// ✓ stage1 left one mounth to complete do everything you do
// Rover's wheel design as a hover Rover
// ✓ websites use block of input feild to edit texts
// ✓ next video about reactjs
// ✓ npm package publish

// gimini apikey: AIzaSyDneBBbwAysS7OCABbh6UQmNjmSiEnDFe0

// july:
// one npm publish like toast aur gemini res md and more
// finish video
// ◾learn backend
// ◾learn
// fiverr add one gig

// AUG:
// ◾one gig publish
// ◾explore npm package
// finish video
// ◾basic English speaking
// ◾go school
// ---
// SEP:
// --better then AUG : off course little bit
// --master English : not master but now i known en and build some sentences.
// --one full stack website : i started but it vary good so need some more time
// --confident and belife yourself : i don't known
// --learn backend & ...more : little bit

// ---
// OCT
// -- Improve personality and face insecure situations
// -- Last finish article web playlist
// -- Take a good photo or video about myself
// -- Next js
// -- Do things what i never expect in past
// -- Take rerander into next level!
// feeling sad again. almost 2 years i lear web development but i could not able to make one usefull website
// ----
// fixed the editor with buttons
// fiverr gig for youtubers
// a blog website for me{
//  title, description, like, views, navigations, dark, mdx edtior, timeline nav,
//  post blogs for me, first use appwrite and leter replace backend to my
//  writed backend, use best fonts,
// }
// -- i stop messaging to TN for long time i don't no why
// now i listen banjaara insanely i don't no why
// now i not talk more i don't no why
// now i work so heard i know why
// -- asal main tum nahi ho mara
// -- now life is most amazing i love it
// -- take risks , not west time on nonsense, make importent work is done
// -- lots of people look me as a nonsense guy, they behaves like i don't no anything, they're believe i am useless, crezy, Dum. yeah little bit but i changed myself completely. i am not thay guy how yours mind. no am i not that guy. it's time to prove that!!!!
// -- i fell vary vary ill and tired
// -- focus on your work
// -- i doing well
// -- compromise is bad thing, do not compromise subhro
// -- AITU, AIPS, CLONE: https://ayesoul.com.
// -- WHY I NOT USE MY DARKPASSWORD WEB? IT'S NOT OFFLINE!
// -- focus on yourself
// -- say only you went to say not other went to listen ok
// -- choose the right people is vary important thing to do
// -- now i vary sad but fire in my heart to do great and big.
// -- why i am dumb?
// -- i do't why peoples are told me dumb but i know why i told myself dumb
// because i not communicate properly with peoples, i was totally blank in any conversations.
// because i do not crack something big and great
// because i always delayed my works, without any reason or make vary silly excuses
// because i do same mistakes over and over again even sometime's i know that it is wrong.
// because I say something and do something else
// jabtak ma duam aur useless ka tag hata nahi lata khud sa thabtak ma tumsa bat nahi karugga

// -- do not wait for do something
// -- write what you learn and post for better communication on life
// -- for codeing do what you went to create impact on life and earth and
//     humans
// -- i am not alone how is blank and introvert
// -- love yourself and belief and confidence on yourself
// -- take action and exsecution is power.
// -- abb ma
// -- loveing someone and work are insane and amazing felling
// -- today i known i have fear of criticism. for many years without me
//    realizing it.
// -- can i do anything in my life?
// -- i feels very bad can i do something in my life?
// -- can i exist in reality?
// -- now i alive?
// -- please worry
// -- reach the limits brack the limits create the limits

// -- why many peoples was vary irritating?
// -- why many peoples make simple talks into vary complex and how to manage this kind of peoples?
// -- and some people's want for me how there want not me, how to handle this situation.
// -- why peoples not preferred to talk with me? => unite now i could make any value to the world, that's it.

// -- work not done impacted me.
// -- today i sad again for without data.
// -- hey subhro you are so high level of power.
// - bit by bit you reveal yourself. why not totally?
// -- life is struggl without struggl no life.
// -? DM water, polysorbate 20,  triethonolamine, carbomar, methylcholoroisothizolinone, sodium gluconate, CI NO. 19140, CI NO. 16155. METHYLISOTHIAZOLINONE.

// -- SAD WHEN ANYONE NOT VALUE ME! WHY? WHY I SEEK VALIDITY FROM OTHERS. BECAUSE I NOT GIVE ANY VALUE. AT THIS POINT I COULD NOT GIVE ANY VALUE TO THE WORLD OK. AND I WAS SEEK/TAKE VALUE WITHOUT GIVE. GIVE AND TAKE IS THE POWER. I THINK YOU ARE FIND YOUR ANSWER
// IT NOT MAKE SENSE TAKE WITHOUT GIVE! EXCEPT ANTITRANSACTION SENSATION
// - work is really satisfying sir!
// - why i desperate to hear i love you! i knows that no one could not told me that except me.

// -- without power life is so heard
// -- my powers{
// creation and invention,
// learning
// i not make excuses
// }
// productive vs effective
// don't be in flow in comfort
// -- without TN life is not good
// -- now life is so boring and uninteresting why?
// -- now TN
// -- vary sad news TN is go back home today. again alone.
// -- without laptop and TN my life not good
// -- i know TN not see asa special but she is always special for me
// -- hey TN IS ONLY YOUR FRIEND NOT GF SO BHAVE LIKE FRIEND THAT'S IT!
// -- sure i am dumb, lazy, useless, bad, super procrastinator, have fear of being super power and better myself, unhealthy,  have worst communication skill and emotions, always hides myself to others without a reason, anyone could control me, have no desires and options. fear of express how am i to me, i never interested to be how am i, i always copy others and i not have any powers, absolutely dumb like the subhro,  i would not interest to fixed issues, and happy this solution and i like to be sad with no core reason, i don't like upgrade myself and like to do same mistakes over and over again. i never love myself, always make big impression for other, told one and do other, i like that sensation very much, i never went to do anything, i always like to see mistakes in others for some fake happiness, i am a  fake person. insane amount of useless, dumb. i happy to live with this situations 😉.  all things are correct what everyone say to me everytime. and like to hear that. i never fullfill any my promises. i dont like change. see others as a he/she is a nonsense,  but in reality the real nonsense is me.
// crazy subhro
// this is last night
// that reasons now i am dumb and insane personality and not able to do that i went to do.

// -- 16-10-2024 was totally wasted
// -- kesi ka samne fake banne ka khosis mat karo. i know you not.
// -- do not smile unexpected situation.

// -- mujea rokne bala khoye nahi except me.
// -- i totally responsible for what i am now
// -- no is power yes is dead for others
// -- awareness is power
// -- jao ab phodo
// -- take decisions
// -- not make excuses make reason
// -- risk is power
// -- do what you want to do
// -- time execute risk decision crazy aukat goal self-responsible
// -- communicate is power

// -- i notice my mindset flips, i think small things big and big thing so big and never try to achieve.
// -- i over focusing on others criticism and validating myself on this talks.
// -- i known i never this persion. so i never got this type.
// -- thanks TN to realizing me how am i.

// -- what you think i can do something in my life
// -- if i work insanely then something happen valuable maybe not sure


// -- subhro what next?
// -- lear and make website like aceternaty even more...
// -- next optimi/reusabl mdx uiux forgot everything ai
// -- now do what we have just one 2.3 year to change life so start the adventure. not worrying about me. one day we're into one so start the adventure. it's alone dark for other but for me it change to live in the earth. phodo everything it time to live the life


