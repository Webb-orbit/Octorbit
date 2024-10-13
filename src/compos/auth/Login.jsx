import { useEffect, useState } from "react"
import Admin from "../../appwrite/auth";

const Login = () => {
const [password, setpassword] = useState("")
  const ligin = async()=>{
    try {
      const login = Admin.loginadmin("webbenemies@gmail.com", password)
      console.log(login);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <input type="text" onChange={(e)=> setpassword(e.target.value)} value={password}/>
      <button onClick={ligin}>submit</button>
    </div>
  )
}

export default Login