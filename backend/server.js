import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import workoutRoutes from "./routes/workouts.js"
import userRoutes from "./routes/user.js"
import bodyParser from 'body-parser'
dotenv.config();
//express app
const app = express()
// middleware
app.use(bodyParser.json())
app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})
//routes
app.use('/api/workouts',workoutRoutes)
app.use('/api/user',userRoutes)
mongoose.connect(process.env.MONG_URL)
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log(`Connected to port ${process.env.PORT}`)
        })
    })
    .catch((error)=>{
        console.log(error)
    })