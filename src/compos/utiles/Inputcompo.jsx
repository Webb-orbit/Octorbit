/* eslint-disable react/prop-types */
import { forwardRef } from "react"
export const Inputcompo = forwardRef(function Inputcompo({classes, lmax, plain, ...propes}, ref){
    return(
        <input {...propes} ref={ref} spellCheck="false" placeholder={plain} maxLength={lmax} type="text" className={`bg-neutral-800 outline-none px-2 py-1 placeholder:capitalize placeholder:text-neutral-50 rounded-md text-[0.9rem] text-neutral-200 ${classes}`} />
    )
})

export const Textareacompo = forwardRef(function Inputcompo({classes, lmax, plain, ...propes}, ref){
    return(
        <textarea {...propes} ref={ref} spellCheck="false" placeholder={plain} maxLength={lmax} type="text" className={`bg-neutral-800 resize-none scrollbar outline-none px-2 py-1 placeholder:capitalize placeholder:text-neutral-50 rounded-md text-[0.9rem] text-neutral-200 ${classes}`} ></textarea>
    )
})
