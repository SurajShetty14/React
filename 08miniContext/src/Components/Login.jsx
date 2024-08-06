import React, { useContext } from 'react'
import { useState } from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    const [username, Setusername] = useState('')
    const [password, Setpassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e)=>{
        //Prevent Page from refreshing
       e.preventDefault()
       setUser({username,password})
    }

  return (
    <div>
        <h2>Login</h2>
        <input 
        type="text"
        value={username}
        onChange={(e)=>Setusername(e.target.value)}
        placeholder="Username"
        />
        {" "}
        <input 
        type="password"
        value={password}
        onChange={(e)=>Setpassword(e.target.value)}
        placeholder="Password"
        />
        <button
        onClick={handleSubmit}
        >Submit</button>
    </div>
  )
}

export default Login