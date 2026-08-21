import express from "express"
import dotenv from "dotenv"
import connectDb from "./utils/connectDb.js"
import authRouter from "./routes/auth.route.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import userRouter from "./routes/user.route.js"
dotenv.config()

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors(
  { 
     origin:"http://localhost:5173",
    credentials:true, //allow cookies
   methods:["GET","PUSH","PUT","DELETE","OPTIONS"] 
  }
))
const PORT = process.env.PORT || 5000

app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
    connectDb()
})

// pass SrZOe8iZndFcuKYe

