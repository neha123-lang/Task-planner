import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import { Routes , Route , Navigate   } from 'react-router-dom';
import Home from './timer-planner/Home';
import Login from './login/Login';
import ForgetPassword from './login/ForgetPassword';
import Register from './login/Register';
import DashboardHome from './dashboard/DashboardHome';
import TodoList from './toDoList/TodoList';
import TodoListDashboard from './toDoList/TodoListDashboard';
import AgendaDashboard from './AgendaSchedulingModule/AgendaDashboard';
import AgendaScheduling from './AgendaSchedulingModule/AgendaScheduler/AgendaScheduling';
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

     <Route path="/login"  element = {!isLoggedIn ? <Login onLogin={handleLogin} />: <Navigate to="/" />  }  />

      :
      <Route path="/timer" element ={ isLoggedIn ? <Home/>:<Navigate to="/login" />}
      
      />
      <Route path = '/' element ={ isLoggedIn ? <DashboardHome/>:<Navigate to="/login" />} />

      <Route path = '/to-dolist' element ={ isLoggedIn ? <TodoListDashboard/>:<Navigate to="/login" />} />
      
      <Route path = '/forgetPassword' element ={<ForgetPassword/>}/>

      <Route path = '/Register' element ={<Register />} />
      <Route path = '/AgendaDashboard' element ={<AgendaDashboard />} />
      <Route path = '/AgendaScheduling' element ={<AgendaScheduling/>} />


      <Route path="/to-dolist/:id" element={<TodoList />} />


      </Routes>
      
      
    </div>
  );
}


export default App;