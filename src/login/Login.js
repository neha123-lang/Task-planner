import React from 'react'
import { NavLink } from 'react-router-dom'
const Login = ({onLogin}) => {
  return (
    <div className='login'>
        <div className='Heading'>
            <div className='logo'>
<h2>LOGO</h2>
            </div>
            <p>Sign in to Time-planner</p>
        </div>
        <div className='text-field'>
        <form>
        <input type = "text" placeholder='User Name' required/>
        <NavLink to='/forgetPassword'>forget password?</NavLink> 
        <input type = "password" placeholder='Password'  required/>
        <input type="submit" value="submit" onClick={onLogin}/>
        </form>
        <NavLink to = "/Register">New User?</NavLink>
        </div>

    </div>
    
  )
}

export default Login