

import React, {useState} from 'react';
import AddTask from "./addTask";
import TaskList from "./TaskList";
import ReactDOM from "react-dom/client";
import "./application.css";
import {Link} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"))

function App() {


    const [tasks, setTasks] = useState([]);

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    return (
        <div>
            <header>
                <h1>her er en overskrift</h1>
            </header>
                <nav>

                </nav>

            <main>
                <div className="App">
                    <AddTask onAddTask={addTask}/>
                    <TaskList tasks={tasks}/>
                </div>
            </main>
        </div>
    );
}
root.render(<App/>)
export default App;