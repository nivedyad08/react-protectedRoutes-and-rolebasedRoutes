import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    const handleLogin = ()=>{
        localStorage.setItem("isLogged",true)
        window.location.href ="/home"
    }
  return (
    <div>
        <button onClick={()=>handleLogin}>Login</button>
        <Link to="/home" >Go to home</Link>
    </div>
  )
}

export default Login