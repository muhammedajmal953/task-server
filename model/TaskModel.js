const mongoose  = require('mongoose')

const taskModel=mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: String,
    startDate: {
        type: String,
        default:new Date()
    },
    EndDate: Date,
    country:String 
})
 
let Task = mongoose.model('Task', taskModel)
module.exports=Task
