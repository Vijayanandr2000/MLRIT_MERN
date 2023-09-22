const express = require('express');
const Todo = require('../Model/todoModel');

const router = express.Router();


router.post('/todo', async (req, res) => {
    try {
        const newTodo = new Todo(req.body)
        const savedTodo = await newTodo.save()
        res.status(200).json(savedTodo)
    } catch (error) {
        return res.status(500).json({
            message: "Something Went Wrong..!",
            errMessage: error.message
        })
    }
})

router.get('/todo', async (_, res) => {
    try {
        const taskData = await Todo.find({})
        res.status(200).json(taskData)
    } catch (error) {
        return res.status(500).json({
            message: "Something Went Wrong..!",
            errMessage: error.message
        })
    }
})

router.get('/todo/:id', async (req, res) => {
    try {
        let id = req.params.id;

        // const taskData = await Todo.find({
        //     _id: id
        // })
        const taskData = await Todo.findById(id)
        res.status(200).json(taskData)
    } catch (error) {
        return res.status(500).json({
            message: "Something Went Wrong..!",
            errMessage: error.message
        })
    }
})

router.put('/todo/:id', async (req, res) => {
    try {
        let id = req.params.id;

        const updatedTaskData = await Todo.findByIdAndUpdate(id, req.body)

        res.status(200).json(updatedTaskData)
    } catch (error) {
        return res.status(500).json({
            message: "Something Went Wrong..!",
            errMessage: error.message
        })
    }
})

router.delete('/todo/', async (req, res) => {
    try {
        let id = req.query.id;

        const updatedTaskData = await Todo.findByIdAndDelete(id)

        if(!updatedTaskData){
            return res.status(404).json({
                message: "Task is already deleted"
            })
        }

        res.status(200).json(updatedTaskData)
    } catch (error) {
        return res.status(500).json({
            message: "Something Went Wrong..!",
            errMessage: error.message
        })
    }
})

module.exports = router;


