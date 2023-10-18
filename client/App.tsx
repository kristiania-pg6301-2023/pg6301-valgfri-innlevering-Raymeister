import React from 'react';

import CreateTaskComponent from './CreateTaskComponent';
import TaskListComponent from "./TaskListComponent";

const App: React.FC = () => {
    return (
        <div>
            <h1>Your Task Management App</h1>
            <TaskListComponent />
            <CreateTaskComponent />
        </div>
    );
};

export default App;