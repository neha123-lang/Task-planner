import React,{useEffect, useState} from 'react'

const Password = (props) => {
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

const setpassword = (e)=>{
    e.preventDefault();
    setnewpassword(e.target.value);
   
}
useEffect(()=>{
    props.onChange(newpassword);
},[setpassword])
  return (
    <div>
        <form>
            <label>
                new password
                <input type="password" value= {newpassword} placeholder='new password' onChange={setpassword}/>
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