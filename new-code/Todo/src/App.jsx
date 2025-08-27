import './App.css';
import { useState } from 'react';

function App() {
  let [todos,setTodos]=useState([]);
    let [inputValue,setInputValue]=useState("");
    const addTodo = ()=>{
        if(inputValue.trim()==="") return;
        const newTodo = {
            text:inputValue.trim(),
            isDone:false,
        }
        setTodos([...todos,inputValue.trim()]);
        console.log(newTodo);
        setInputValue("");
    }

  return (
    <div>
      <h1>Todo App</h1>
      <input type="text" value={inputValue} onChange={(e)=>{
        setInputValue(e.target.value)
      }} />
      <button onClick={addTodo}>Add</button>
    </div>
  )
}

export default App
