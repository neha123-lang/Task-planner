import React, { useState } from 'react'
import Password from './Password';

const ForgetPassword = () => {
    const [verify,setVerificaton] = useState(false);
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState(false);


    const verifyUsers=(e)=>{
        e.preventDefault();
        console.log(name);
        console.log(email);
        setVerificaton(true)
    }
  return (
    <div className='forgetPassword'>
        {
            verify?(
                (
                    <form>
                    <Password/>
                    <input type = "submit" value = "submit" />
                    </form>

                  
                )
            ):
            <form>
            <input type = "email" placeholder='abc@a.com' value = {email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <input type = "text" placeholder='User Name' value = {name} onChange={(e)=>{setName(e.target.value)}}/>
            <input type = "submit" value = "submit" onClick={verifyUsers}/>
        </form>
        }

    </div>
  )
}

export default ForgetPassword