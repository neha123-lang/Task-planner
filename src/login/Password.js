import React,{useEffect, useState} from 'react'

const Password = () => {
    const [newpassword , setnewpassword] = useState('');
    const [confirmPassword , setconfirmPassword] = useState('');
    const [error , setError] = useState('');
useEffect(
 ()=>{
    if(newpassword != confirmPassword ){
        setError("password not match");
    }else{
        setError('')
    }
 } ,[confirmPassword]  
)
const validatePassword = (e)=>{
    setconfirmPassword(e.target.value)

}
  return (
    <div>
        <form>
            <label>
                new password
                <input type="password" value= {newpassword} placeholder='new password' onChange={(e)=>setnewpassword(e.target.value)}/>
            </label>
            <label>
                confirm password
                <input type="password" value= {confirmPassword} placeholder='confirm password'onChange={validatePassword}/>
            </label>
            {error}
           
        </form>
        
    </div>
  )
}

export default Password