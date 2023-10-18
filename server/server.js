// server/server.js

import express from "express";
import bodyParser from "body-parser";
import * as path from "path";

const app = express();
const port = 3001;
app.use(express.static("../client/dist"))
app.use(bodyParser.json());

let tasks = [];


app.get("/tasks", (req, res) => {
    res.json(tasks);
});

app.post("/tasks", (req, res) => {
    const newTask = req.body.task;
    console.log(newTask)
    tasks.push(newTask);

    res.json({ success: true });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



