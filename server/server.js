const express=require('express')
const colors=require('colors')
const cors = require('cors');
const bodyParser=require('body-parser')
const ConnectDB = require('./config/db')
const dotenv=require('dotenv').config()
const userRouter=require('./routes/userRouter')
ConnectDB()
const app=express()
app.use(express.json())
app.use(
    cors({
      origin: 'http://localhost:5173',
      credentials: true,
    })
  )
 
  
app.use('/auth',userRouter)
const PORT=process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log(`server running @ http://localhost:${PORT}`.bgBlue.red.underline)
})