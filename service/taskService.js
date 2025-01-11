const { Task } = require("../model/TaskModel");
const { taskValidation } =require("../utils/taskValidations");

async function create(data) {
    try {
        let validation = taskValidation(data)
        if (validation) {
            return { message: 'validation' }
        }
        const newTask = new Task(data)

        await newTask.save()
        return { success: true, message: 'task added success fully' }
    } catch (error) {
        console.log(error);
        return { message: 'Internal Severver error' }
    }
}

async function getTasks(searchQuery,page) {
    try {
        const skip=(page-1)*5
        const tasks = await Task.find({ title: searchQuery }).skip(skip)

        if (!tasks) {
            return { message: 'No Task is available' }
        }

        return { success: true, message: 'tasks fetched success fully', data: tasks }

    } catch (error) {
        console.log(error);
        return {message:'Internal Server Error'} 
    }
} 

async function getTaskById(id) {
    try {
        if (!id) {
           return {message:'no such task in availble'}
        } 
        
        const task = await Task.findById(id)
        
        return { success: true, message: 'task fetched', data: task }
    
    } catch (error) {
        console.error(error);
        return { message:'Internal Server Error'}
    }
}

async function update(data,id) {
    try {
        if (!id) {
            return {message:'No id is provided'}
        }

        const update = await Task.findByIdAndUpdate(id, { $set: data })
        
        return { success: true, message:'task Editted successfully'}
    } catch (error) {
        console.log(error)
    }
}

async function deleteTask(id){
    try {
        if (!id) {
            return {message:'id not provided'}
        }

        const deleted = await Task.fidByIdAndDelete(id)
        
        return { success:true,message:'deleteTask success fully'}
    } catch (error) {
        console.log(error);
        return { message:'Internal Server Error'}
    }
}

module.exports = {
    create,
    deleteTask,
    update,
    getTasks,
    getTaskById
}