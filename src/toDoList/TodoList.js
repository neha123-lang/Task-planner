import React, {useState} from 'react'
import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';
import { useLocation } from 'react-router-dom'

const TodoList = (params) => {
  let listObj = useLocation();
console.log(listObj);
    const [todos, setTodos] = useState([]);
    const addTodo = (text) => {
        const newTodo = {
          id: Date.now(),
          text: text
        };
        setTodos([...todos, newTodo]);
      };

      const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id));
      };
  return (
    <div><h1>{listObj.state.name}</h1>
    <AddTodoForm onAdd={addTodo} />
    {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} />
      ))}
    
    
    
    </div>
  )
}

export default TodoList