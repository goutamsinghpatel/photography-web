import express from 'express';
import { getData } from '../controllers/getDataController.js';
import authToken from '../middleware/authToken.js';
const userRouter=express.Router();
userRouter.get("/data",authToken,getData)
export default userRouter;