import React, { useState } from 'react'
import Password from './Password'

const Register = () => {
    const[email ,setEmail ] = useState('');
    const[userName ,setuserName ] = useState('')
    
    return (
        <div className='Register'>
            <div className='Heading'>
                <h2>LOGO</h2>
                <p>Register to Time planner</p>
            </div>
            <div className='details'>
<form>
    <input type="email" placeholder='abc@a.com' value = {email} onChange={(e)=>{setEmail(e.target.value)}} />
    <input type="text" placeholder='User Name' value = {userName} onChange={(e)=>{setuserName(e.target.value)}} />
    


</form>
<Password/>
<input type = "submit" value = "submit" />
            </div>
        </div>
    )
}

export default Register