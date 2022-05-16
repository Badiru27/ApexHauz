const express = require('express')
require('dotenv').config()
const app = express()
const userRouter = require('./api/users/user.router')

app.use(express.json())

app.use('/api/user', userRouter)
    
app.listen(process.env.APP_PORT)