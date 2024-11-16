/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react'
import plaintohtml from 'markdown-to-htm'
import "../../editor.css"
import {
    transformerNotationDiff,
    transformerNotationHighlight
  } from '@shikijs/transformers'

import { codeToHtml } from 'shiki'

const EditorBlock = ({ content, setcontent }) => {
    const [isactive, setisactive] = useState(true)
    const outputref = useRef(null)

    useEffect(() => {
        if (outputref.current) {
            let inner = plaintohtml(content)

            outputref.current.innerHTML = inner
            const pres = Array.from(document.getElementsByClassName("pre"))
            pres.map(async (e) => {
                const code = await codeToHtml(e.innerText, {
                    theme:"ayu-dark",
                    lang: "jsx",
                    transformers:[
                        transformerNotationDiff(),
                        transformerNotationHighlight()
                    ]
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