const { Router } =require("express");
const { createTask, deleteTaskController, getTaskController, updateController } =require("../controller/taskController");

const taskRouter = Router()

taskRouter.route('/')
    .post(createTask)
    .get(getTaskController)
    .put(updateController)
    .delete(deleteTaskController)

module.exports={taskRouter}