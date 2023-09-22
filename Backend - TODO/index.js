const express = require('express');
const mongoose = require('mongoose');

const todoRouter = require('./router/todo');

// const Todo = require('./Model/todoModel');

const app = express();

const PORT = 8080;

mongoose.connect('mongodb+srv://vijayanandr2000:dY5pzzc0XEWGYxwe@cluster0.bp7sq77.mongodb.net/?retryWrites=true&w=majority')

const db = mongoose.connection;

db.on('error', () => {
    console.log("Error while DB connection")
})

db.once('open', async () => {

    // await Todo.create({
    //     task: "Task 2"
    // })

    console.log("DB is connected")
})

// app.get('/', (req, res) => {
//     res.send("Hello, world!");
// })
app.use(express.json());

app.use('/', todoRouter)

app.listen(PORT, () => {
    console.log("Server is started")
});


// http://localhost:8080

