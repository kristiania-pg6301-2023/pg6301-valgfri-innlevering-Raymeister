import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetchTasks()
    }, [])

    const fetchTasks = async() =>{
        try {
            const response = await axios.get("https://localhost:3001/tasks");
            setTasks(response.data);
        }catch(error){
            console.error("klarte ikke å få tasks:", error);
        }
    }

    const addTask = async (newTask) => {
        try {
            await axios.post("http://localhost:3001/tasks", { task: newTask });
            fetchTasks(); // Refetch tasks after adding a new one
        } catch (error) {
            console.error("Error adding task:", error);
        }
    };

    return (
        <div className="Index">
            <AddTask onAddTask={addTask} />
            <TaskList tasks={tasks} />
        </div>
    );
}

root.render(<App />);
