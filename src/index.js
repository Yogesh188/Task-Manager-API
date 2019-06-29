const express = require('express')
require('./db/mongoose.js')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express() 
const port = process.env.PORT

// app.use((req, res, next)=>{            // Express middlewares
//     if(req.method === 'GET'){
//         return res.status(400).send('GET requests are disabled')
//     }
//     next()
// }) 

// app.use((req, res, next)=>{
//     res.status(503).send('Server under maintenance. Check back soon.')
// })

app.use(express.json())
app.use(taskRouter)
app.use(userRouter)

app.listen(port, ()=>{
    console.log('Server is up on port',port)
})

const Task = require('./models/task')
const User = require('./models/user')

// const main = async ()=>{
//     // const task = await Task.findById('5d1236d644c0ca244cbc7e8f')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById('5d1233be22e89a235d7ffb22')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)

// }

// main()