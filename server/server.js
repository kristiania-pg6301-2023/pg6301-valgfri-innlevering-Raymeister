// server.ts
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB setup
mongoose.connect('mongodb://localhost:27017/taskapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Task model
const taskSchema = new mongoose.Schema({
    task: String,
});

const Task = mongoose.model('Task', taskSchema);

// Express routes
app.get('/api/tasks', async (req, res) => {
    // Retrieve tasks from MongoDB
    const tasks = await Task.find();
    res.json(tasks.map((task) => task.task));
});

app.post('/api/tasks', async (req, res) => {
    // Create a new task and save it to MongoDB
    const { task } = req.body;
    const newTask = new Task({ task });
    await newTask.save();
    res.sendStatus(201);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
