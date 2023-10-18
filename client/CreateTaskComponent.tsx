// CreateTaskComponent.tsx
import React, { useState } from 'react';

const CreateTaskComponent: React.FC = () => {
    const [newTask, setNewTask] = useState<string>('');

    const handleCreateTask = () => {
        // Send a POST request to the backend to create a new task
        fetch('/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ task: newTask }),
        });
    };

    return (
        <div>
            <h2>Create Task</h2>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={handleCreateTask}>Create Task</button>
        </div>
    );
};

export default CreateTaskComponent;
