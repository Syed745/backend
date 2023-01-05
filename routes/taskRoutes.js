const express = require('express');
const { createTask, getTask, getSingleTask, deleteTask, updateTask } = require('../controllers/taskController');
const Task = require("../model/taskModel");
const router = express.Router();


router.post("/",createTask);


router.get("/", getTask);

router.get("/:id", getSingleTask);

router.delete("/:id", deleteTask);

router.put("/:id", updateTask );


module.exports = router;