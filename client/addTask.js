import React, {useState} from "react";

function addTask({onAddTask}){
    const [newTask, setNewTask] = useState('');

    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    }
    const handleAddTask = ()=>{
        if (newTask.trim() !==''){
            onAddTask(newTask);
            setNewTask('')
        }
    }
    return(
        <div>
            <h2>legg til opgpave</h2>
            <input
            type="text"
            value={newTask}
            onChange={handleInputChange}
            placeholder="skriv oppgave"
            />
            <button onClick={handleAddTask}>legg til oppgave</button>
        </div>
    )
}