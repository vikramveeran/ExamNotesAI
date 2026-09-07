import express from "express"
import { googleAuth, logOut } from "../controllers/auth.controller.js"

const authRouter = express.Router()

authRouter.post("/google", googleAuth)  //api created / api endpoint
authRouter.post("/logout", logOut)

export default authRouter
