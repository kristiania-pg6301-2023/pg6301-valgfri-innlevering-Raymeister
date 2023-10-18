// TaskListComponent.tsx
import React, { useEffect, useState } from 'react';

const TaskListComponent: React.FC = () => {
    const [tasks, setTasks] = useState<string[]>([]);

    useEffect(() => {
        // Fetch tasks from the backend API
        fetch('/api/tasks')
            .then((response) => response.json())
            .then((data) => setTasks(data));
    }, []);

    return (
        <div>
            <h2>Task List</h2>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
};

export default TaskListComponent;
