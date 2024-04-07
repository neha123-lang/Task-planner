import React, { useEffect, useState } from 'react'
import Password from './Password'
import RegisterAPI from './RegisterAPI';
const Register = () => {
    const [email, setEmail] = useState('');
    const [userName, setuserName] = useState('')
    const [uniqueUserName, setUniqueUserName] = useState('')
    const [password, setpassword] = useState('');
    const [show, setShow] = useState(false);
    const [returnResponse, setReturResponse]= useState([]);
    const getPassword = (data) => 
    {
        setpassword(data)
    }
    useEffect(() => {
        
        setpassword(password);
    }
    , [password]);
    const shouldshow = () => {
        setShow(true);
    }
    const shouldNotShow = () => {
        setShow(false);
    }
    const setReturnValue =(data) =>{
        setReturResponse(data)
    }
    console.log(returnResponse.data);

    return (
        <div className='Register'>
            <div className='Heading'>
                <h2>LOGO</h2>
                <p>Register to Time planner</p>
            </div>
            <div className='details'>
                <form>
                    <input type="text" placeholder='User Name' value={userName} onChange={(e) => { setuserName(e.target.value) }} />

                    <input type="email" placeholder='abc@a.com' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    <input type="text" placeholder='abc' value={uniqueUserName} onChange={(e) => { setUniqueUserName(e.target.value) }} />
                </form>
                <Password onChange={getPassword} />
                <input type="submit" value="submit" onClick={shouldshow} />
                {show && <RegisterAPI email={email} userName={userName}
                    uniqueUserName={uniqueUserName} Password={password} shouldCallApi={shouldNotShow} 
                    returnValue = {setReturnValue}
                    />
                }
            </div>
            <div>
                {returnResponse.length != 0  && "frhiefgirh"
                // (returnResponse.data.)
                }
            </div>
        </div>
    )
}

export default Register