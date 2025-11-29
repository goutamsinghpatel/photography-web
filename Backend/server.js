import express from 'express';
import cors from 'cors';
import  'dotenv/config';
import cookieParser from "cookie-parser";
import connectDb from './config/mongodb.js';
import authRouter from './Routes/authRoute.js';
import userRouter from './Routes/userRoute.js';
import imageRouter from './Routes/imageRoute.js';
const app=express();
const port=4000;
connectDb();
app.use(express.json())
app.use(cookieParser())
app.use(cors());
app.get("/",(req,res)=>{
    res.send(`server stated in port ${port}`);
})
app.use("/api/auth",authRouter);
app.use("/",userRouter)
app.use("/",imageRouter);

app.listen(port,()=>{
    console.log("server stated");
})



