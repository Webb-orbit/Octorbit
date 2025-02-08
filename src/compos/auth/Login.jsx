import { useEffect, useState } from "react"
import Admin from "../../appwrite/auth";

const Login = () => {
const [password, setpassword] = useState("")
 const [email, setemail] = useState("")
  const ligin = async()=>{
    const data = await Admin.loginadmin(email, password)
  }
  return (
    <div className="flex items-center justify-center gap-4 ">
      <input className="text-neutral-900 bg-neutral-100" type="text" placeholder="password" onChange={(e)=> setpassword(e.target.value)} value={password}/>
<input className="text-neutral-900 bg-neutral-100" type="text" placeholder="email" onChange={(e)=> setemail(e.target.value)} value={email}/>
      <button onClick={ligin}>submit</button>
    </div>
  )
}

export default Login
