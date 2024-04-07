import React, {useState} from 'react'

const AddTodoForm = ({ onAdd }) => {
    const [inputText, setInputText] = useState('');
  
    const handleAdd = () => {
      if (inputText.trim() !== '') {
        onAdd(inputText);
        setInputText('');
      }
    };
  
    return (
      <div className="add-todo-form">
        <input
          type="text"
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          placeholder="Enter a new task..."
        />
        <button onClick={handleAdd}>Add</button>
      </div>
    );
  };
  

export default AddTodoForm