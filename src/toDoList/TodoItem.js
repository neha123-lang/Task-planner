import React from 'react'

const TodoItem = ({ todo, onDelete }) => {
  return (
    <div>{todo.text}
    <button onClick={() => onDelete(todo.id)}>Delete</button></div>
  )
}

export default TodoItem