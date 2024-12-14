import {useState } from "react"
import Admin from "../../appwrite/auth";

const Login = () => {
const [password, setpassword] = useState("")
  const [error, seterror] = useState(false)
  const ligin = async()=>{
    try {
seterror(false)
      const login = Admin.loginadmin("webbenemies@gmail.com", password)
    } catch (error) {
seterror(true)
      console.log(error);
    }
  }
  return (
    <div>
      <input type="text" className={`text-black bg-zinc-500 ${error && "border-2 border-red-500"}`} onChange={(e)=> setpassword(e.target.value)} value={password}/>
      <button onClick={ligin}>submit</button>
      hello
    </div>
  )
}

export default Login
