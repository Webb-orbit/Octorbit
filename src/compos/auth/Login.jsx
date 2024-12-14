import {useState } from "react"
import Admin from "../../appwrite/auth";

const Login = () => {
const [password, setpassword] = useState("")
  const [error, seterror] = useState(false)
  const [mess, setmess] = useState("")
  const ligin = async()=>{
    try {
seterror(false)
      setmess("")
      const login = Admin.loginadmin("webbenemies@gmail.com", password)
    } catch (error) {
seterror(true)
setmess(error.message)
      console.log(error);
    }
  }
  return (
    <div ClassName="flex flex-col gap-4 justify-center items-center">
      <input type="text" className={`text-black bg-zinc-500 ${error && "border-2 border-red-500"}`} onChange={(e)=> setpassword(e.target.value)} value={password}/>
      {mess && <p className="text-[0.8rem]>{mess}</p>
      <button onClick={ligin}>submit</button>
      hello
    </div>
  )
}

export default Login
