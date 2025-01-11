const {create,getTasks,update,getTaskById,deleteTask} =require('../service/taskService.js')

 async function createTask(req,res) {
    try {
        let data = req.body
        
        const result = await create(data)
        
        if (!result.success) {
          return  res.status(400).json(result)
        }

        return res.status(200).json(result)

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal Severver error' })
    }
}

 async function getTasksController(req,res) {
    try {
        const {page}=req.params
        const {searchQuery}=req.query

       
        const result = await getTasks(searchQuery, page)
        
        if (!result.success) {
            return  res.status(400).json(result)
          }
  
          return res.status(200).json(result)

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal Severver error' })
    }
} 

 async function getTaskController(req,res) {
    try {
       const {id}=req.query
        
        const result = await getTaskById(id)
        
        if (!result.success) {
            return  res.status(400).json(result)
          }
  
          return res.status(200).json(result)
    
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal Severver error' })
    }
}

 async function updateController(req,res) {
    try {
        let data = req.body
        const {id}=req.query
        
        const result = await update(data,id)
        
        if (!result.success) {
          return  res.status(400).json(result)
        }

        return res.status(200).json(result)

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal Severver error' })
    }
}

 async function deleteTaskController(req,res){
    try {
        const { id } = req.query 
        const result = await deleteTask(id)
        
        if (!result.success) {
          return  res.status(400).json(result)
        }

        return res.status(200).json(result)

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal Severver error' })
    }
}

module.exports = {
    createTask,
    deleteTaskController,
    updateController,
    getTaskController,
    getTasksController
}