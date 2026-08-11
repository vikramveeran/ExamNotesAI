import express from "express"
import dotenv from "dotenv"
import connectDb from "./utils/connectDb.js"
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
    connectDb()
})

// pass SrZOe8iZndFcuKYe