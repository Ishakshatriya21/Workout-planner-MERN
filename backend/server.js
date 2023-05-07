import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config();
import workoutRoutes from "./routes/workouts.js"
//express app
const app = express()
// middleware
app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})
//routes
app.use('/api/workouts',workoutRoutes)
mongoose.connect(process.env.MONG_URL)
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log(`Connected to port ${process.env.PORT}`)
        })
    })
    .catch((error)=>{
        console.log(error)
    })