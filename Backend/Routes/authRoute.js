import express from 'express';
import { registerUser , login, logout, isAuth, EmailSend} from "../controllers/authController.js";
import adminToken from '../middleware/adminToken.js';
import authToken from '../middleware/authToken.js';
const authRouter=express.Router();
authRouter.post("/register",adminToken,registerUser)
authRouter.post("/login",login)
authRouter.post("/logout",logout);
authRouter.post("/is-auth",authToken,isAuth);
authRouter.post("/sendEmail",EmailSend);


export default authRouter;