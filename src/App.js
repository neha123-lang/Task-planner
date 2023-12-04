import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import { Routes , Route , Navigate   } from 'react-router-dom';
import Home from './timer-planner/Home';
import Login from './login/Login';
import ForgetPassword from './login/ForgetPassword';
import Register from './login/Register';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform authentication logic
    // For simplicity, just toggle the login state
    setIsLoggedIn(true);
  };
  return (
    <div className="App">

    
     <Routes>
     <Route path="/login"  element = {!isLoggedIn ? <Login onLogin={handleLogin} />: <Navigate to="/" />  } />
     {/* {<Login onLogin={handleLogin} />} */}
        {/* {isLoggedIn ? <Login onLogin={handleLogin} /> : <Navigate  to="/" />} */}
      {/* </Route> */}:
      <Route path="/" element ={ isLoggedIn ? <Home/>:<Navigate to="/login" />}/>
      {/* <Home/> */}
      {/* {!isLoggedIn ? <Home/> : <Navigate  to="/login" />} */}
      {/* </Route> */}
        
       
       
        <Route path = '/forgetPassword' element ={<ForgetPassword/>}/>
        <Route path = '/Register' element ={<Register />}/>



      </Routes>
      
      
    </div>
  );
}

export default App;
