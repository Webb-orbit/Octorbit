/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form"
import { Inputcompo, Textareacompo } from "../utiles/Inputcompo"
import { useEffect, useState } from "react"
import EditorBlock from "../utiles/EditorBlock"
import Toggle from "../utiles/Toggle"
import { Cbuttons } from "../utiles/Cbuttons"
import Admin from "../../appwrite/auth"
import Blogbase from "../../appwrite/blogbase"
import { useNavigate } from "react-router-dom"

const Addblog = ({ prevals = false }) => {
    const [editorvalue, seteditorvalue] = useState("")
    const [blogactived, setblogactived] = useState(true)
    const [predate, setpredate] = useState("")

    const { register, watch, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm({
        defaultValues: {
            title: prevals?.title || "",
            description: prevals?.description || ""
        },
    })

    const watchAllFields = watch()
    const naviget = useNavigate()

    const publishblog = async (data) => {
        try {
            const date = new Date().toDateString()
            const admin = await Admin.getcurrentaccount()
            if (admin) {
                if (!prevals) {
                    const upload = await Blogbase.createblog(data.title, data.description, editorvalue, admin.$id, date, blogactived)
                    if (upload) {
                        console.log("uploaded->", upload);
                        naviget("/dashboard/overview")
                    }
                } else {
                    const update = await Blogbase.updateblog(prevals.$id, { title: data.title, description: data.description, content: editorvalue, creator: admin.$id, active: blogactived })
                    if (update) {
                        console.log("updated->", update);
                        naviget("/dashboard/overview")
                    }
                }
            }
        } catch (error) {
            setError("root", { message: error.response?.message || "something went wronge" })
            console.log(error.response)
        }
    }

    useEffect(() => {
        if (prevals !== false) {
            seteditorvalue(prevals?.content)
            setblogactived(prevals?.active)
            setpredate(prevals?.date)
        }
    }, [])

    return (
        <div className="w-[60%] mx-auto py-10 flex flex-col gap-10 max-sm:w-[95%] ">
            <form onSubmit={handleSubmit(publishblog)} className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                    <p className=" uppercase text-neutral-300 font-medium select-none ">title:</p>
                    {errors.title && <p className=" uppercase text-red-500 animate-pulse font-medium select-none text-[0.7rem] ">{errors.title?.message}</p>}
                    <Inputcompo
                        {...register("title", { required: "title is required" })}
                        lmax={100}
                        classes="h-[3rem]"
                        plain={"hello your title"} />
                    <p className=" self-end text-neutral-500 text-[0.8rem] font-medium">{`${watchAllFields.title?.length}/100`}</p>
                </div>

                <div className="flex flex-col gap-2">
                    <p className=" uppercase text-neutral-300 font-medium select-none ">description:</p>
                    {errors.description && <p className=" uppercase text-red-500 animate-pulse font-medium select-none text-[0.7rem]">{errors.description?.message}</p>}
                    <Textareacompo
                        {...register("description")}
                        lmax={250}
                        classes="h-[5.5rem] text-[1rem]"
                        plain={"description"} />
                    <p className=" self-end text-neutral-500 text-[0.8rem] font-medium">{`${watchAllFields.description?.length}/250`}</p>
                </div>
                <div className="flex gap-2 items-center">
                    <Toggle togg={blogactived} settogg={setblogactived} />
                    <button  className=" capitalize font-medium text-[0.9rem]" type="button" onClick={() => setblogactived(pre => !pre)}>show live</button>
                </div>

                <EditorBlock content={editorvalue} setcontent={seteditorvalue} />
                {errors.root && <div><p className="uppercase text-red-500 animate-pulse font-medium select-none text-[0.7rem]">{errors.root.message}</p></div>}
                {prevals && <p className="text-[0.8rem] text-neutral-500">{predate}</p>}
                <Cbuttons disabled={isSubmitting}  type="submit" text={`${prevals ? "update" : "share"}`} bclass="w-fit px-5" icon={"thread_unread"} tclass="text-[0.9rem]" />
            </form>
        </div>
    )
}

export default Addblog

