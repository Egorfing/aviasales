const express = require('express')
const app = express()
const userRouter = require('./routes/userRoutes')
const PORT = process.env.PORT || 5050
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use('/user', userRouter)

app.listen(PORT, ()=> console.log(`Сервер запущен на порту ${PORT}`))