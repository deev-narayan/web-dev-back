import { useState } from "react";
import {v4 as uuidv4} from 'uuid';
export default function Todo(){
    let [todos, setTodos] = useState(["sample-task",uuidv4]);
    let [newTodo, setNewTodo] = useState("");
    let addNewTask = () => {
        if(newTodo!=""){
            setTodos((previousTodo)=>{
                return [...previousTodo,[newTodo,uuidv4]];
            });
            setNewTodo("");
        }
    }
    let updateTodos = (event) =>{
        setNewTodo(event.target.value);
    }
    return (
        <>
            <div>
                <h1>Todo List</h1>
                <input type="text" placeholder="Enter Todo" value={newTodo} onChange={updateTodos} />
                <br />
                <button onClick={addNewTask}>Add Todo</button>
                <ul> 
                    {todos.map((todo)=>{
                        return <li key={todo}>{todo} <button >Delete</button> <button>mark as done</button></li>
                    })}
                </ul>
            </div>
        </>
    )
}