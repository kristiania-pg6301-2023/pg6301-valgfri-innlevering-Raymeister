
import React, { useState } from 'react';
import AddTask from "./addTask";
import TaskList from "./TaskList";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"))

function App() {


    const [tasks, setTasks] = useState([]);

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    return (
        <div className="App">

            <AddTask onAddTask={addTask} />
            <TaskList tasks={tasks} />
        </div>
    );
}
root.render(<App></App>)
export default App;
