import { useState } from "react";
import { Inputcompo, Textareacompo } from "../utiles/Inputcompo"
import Admin from "../../appwrite/auth"
import Settbase from "../../appwrite/Settingapi"

const Setting = () => { 
  const [count, setCount] = useState(0);
  const [headername, setheadername] = useState("");

  const updatefields = async (fieldname, value) => {
        try {
            const admin = await Admin.getcurrentaccount()
            if (admin) {
                    const update = await Settbase.updatadmin(prevals.$id, {fieldname: value})
                    if (update) {
                        //naviget("/dashboard/overview")
                    }
            }
        } catch (error) {
            //setError("root", { message: error.response?.message || "something went wronge" })
          console.error(error)
        }
  }

return (
  <div className='poppins-regular w-[90%] mx-auto p-7 rounded-md h-[100%] bg-black  mb-4 max-[800px]:flex-col max-[800px]:w-[95%] max-[800px]:px-1 max-[800px]:py-7'>
      <div className=' mt-4 mb-4'>
        <h2 className=' uppercase text-[1.2rem] tracking-[2px] text-neutral-200 select-none font-bold'>account Settings</h2>
        <p className='text-[0.7rem] text-neutral-400 font-semibold '>customize your space</p>
      </div>

      <div className='mb-4 p-4 bg-neutral-950'>
        <h3 className='capitalize text-[1.1rem] text-neutral-400 select-none font-bold'>home</h3>
        <p className='text-[0.7rem] text-neutral-400 font-semibold '>customize your space</p>
        <div className={`flex items-center justify-between`}>
        <Inputcompo
            value={headername}
            onChange={(e)=> setheadername(e.target.value)}
            lmax={100}
            classes="h-[3rem]"
            plain={"hello your header"} />
        <button className={` ml-4 text-[0.8rem] rounded font-semibold capitalize mt-4 px-2 py-1 bg-green-600 text-neutral-100 `}>update</button>
          </div>
      </div>

      <div>
        <ul className=' ml-10 list-disc uppercase text-neutral-200 font-semibold poppins-regular max-sm:ml-0 max-sm:text-[0.8rem]'>
            <li>darkpassword delete your all target, shares and files</li>
            <li>Logging out for all devices</li>
        </ul> 

        <button className={` ml-4 text-[0.8rem] rounded font-semibold capitalize mt-4 px-2 py-1 bg-green-600 text-neutral-100 `}>keep account</button>
      </div>

    </div>
); 
};

export default Setting;

