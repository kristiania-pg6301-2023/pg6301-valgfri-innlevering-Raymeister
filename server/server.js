// server/server.js

import express from "express";
import bodyParser from "body-parser";
import * as path from "path";

const app = express();
const port = process.env.PORT || 3001;
app.use(express.static("../client/dist"))
app.use(bodyParser.json());

let tasks = [];

app.use((req, res, next) =>{
    res.sendfile(path.resolve("../client/dist/index.html"))
})
app.get("/api/tasks", (req, res) => {
    res.json(tasks);
});

app.post("/api/tasks", (req, res) => {
    const newTask = req.body.task;
    console.log(newTask)
    tasks.push(newTask);

    res.json({ success: true });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



