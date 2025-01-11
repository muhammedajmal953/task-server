const Express = require('express')
const dotenv = require('dotenv')
const { connectDb } = require('./utils/connection')
const { userRouter } = require('./routes/userRoutes')
const { taskRouter } = require('./routes/taskRoutes')
const cors = require('cors')

dotenv.config()
connectDb()


const app = Express()

const Port = process.env.Port

app.use(cors())
app.use(Express.urlencoded({extended:true}))
app.use(Express.json())

app.use('/api', userRouter)
app.use('/api/task',taskRouter)

app.listen(Port, () => {
    console.log('the server in Running')
})


