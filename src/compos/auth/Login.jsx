import React, { useEffect } from 'react'
import Admin from '../../appwrite/auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navifget = useNavigate()
  useEffect(()=>{
    (
      async()=>{
        const userlogined = await Admin.loginadmin("webbenemies@gmail.com", "subhro2026")
        if (userlogined) {
          navifget("/")
        }
      }
    )()
  },[])
  return (
    <div>Login</div>
  )
}

export default Login