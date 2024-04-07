import {React,useEffect,useState} from 'react'
import {TodoListTile} from './ToDoListResponse'
import AddToListTitle from './AddToListTitle';
import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
const TodoListDashboard = () => {
const [addtodoListScreen , setTodoListScreen] = useState(false);
const [TodoListTiles , setTodoListTile] = useState(TodoListTile);

const handleTodoListScreen =(e)=>{
    setTodoListScreen(!addtodoListScreen);
    // setDetails(e);
}
const handleTitleResponse=(array)=>{
  setTodoListTile(array);
}

useEffect(() => {
  setTodoListTile(TodoListTiles)
},[setTodoListTile]);

  return (         
    <div>
          <h2>TO do list Dashboard</h2>
          <button onClick={handleTodoListScreen}> add To do list </button>
          {addtodoListScreen && <AddToListTitle todolistTitle ={TodoListTiles} 
          handleTodoListScreen = {handleTodoListScreen} handleTitleResponse ={handleTitleResponse}/>}
{TodoListTiles.map((eve,i)=>{
    return(
        <div>
          
        <Navbar>
            <Nav>
        < Nav.Link as={NavLink} to={"/to-dolist/"+eve.id} state = {{...eve}} >{eve.name}</Nav.Link>


      </Nav></Navbar> <button>Delete</button>
      </div>
     
    )
})}

    </div>
  )
}

export default TodoListDashboard