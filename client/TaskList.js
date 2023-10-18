import React from "react";

export default function TaskList ({tasks}){
    return(
        <div>
            <h2>Liste over oppgaver</h2>
            <ul>
                {tasks.map((task, index) =>(
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    )
}