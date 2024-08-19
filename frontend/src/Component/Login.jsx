import React from 'react'
import { FcGoogle } from "react-icons/fc";
import "../Css/Login.css"
const Login = () => {
  return (
    <div className='main'>
      <div className='card'>
            <div className='head'>
                <h3>Create a new account</h3>
            </div>
            <div className='gl'>
            <FcGoogle /> <h3>Sign up with google</h3>
            </div>
            <div className='btn'>
                <button>Create Account</button>
            </div>
            <h3>Already have an account?Sign in</h3>
            
      </div>
    </div>
  )
}

export default Login



