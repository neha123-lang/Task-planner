import React, { useState ,useEffect} from 'react'
import axios from 'axios';
const RegisterAPI = (userName , uniqueUserName , Password, email ) => 
{
    const  details = {
        name : userName['userName'],
        uniqueUserName :userName['uniqueUserName'] ,
        password :userName['Password'],
        email :userName['email']
    }
    useEffect(() => {
        userName.shouldCallApi()
        ;
      }, []);
    const [data , setData] = useState(details);
    const RegisterDetails = async () => {
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' , 'Accept' :'application/json' },
            
            body: details   
        };
        
        axios.post('http://127.0.0.1:8000/api/Register',
        {
           
            name : userName['userName'],
            uniqueUserName :userName['uniqueUserName'] ,
            password :userName['Password'],
            email :userName['email']

        }
            )
         .then(response => userName.returnValue(response))
         .catch(error => {
            if(error.response){
                console.log(error.response)
            }
         })
            // .then(response => response.json())
            // .then(data => setData(details));
    }
        

        RegisterDetails();

}



export default RegisterAPI