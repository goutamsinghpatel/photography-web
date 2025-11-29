import bcrypt from 'bcryptjs';
import  jwt  from "jsonwebtoken";
import userModel from '../models/user.js';


export const registerUser=async(req,res)=>{
let {name ,email,password,role}=req.body
if( !name || !email || !password ){
    return res.json({success:false,message:"mising details"});

}
try {
    let existingUser=await userModel.findOne({email});
    if(existingUser){
        return res.json({success:false,message:"something wrong"});
    }
const hashPassword=await bcrypt.hash(password,10);
const user=new userModel({name,email,password:hashPassword,role});
await user.save();


  return res.json({success:true})

} catch (error) {
    return res.json({success:false,message:error.message})
    
}

}

export const login=async(req,res)=>{
    let {email,password}=req.body
    if(!email || !password){
        return res.json({success:false,message:"missing details"});
    }
    try {
        let user=await userModel.findOne({email});
        if(!user){
            return res.json({success:false,message:"something wrong"});


        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.json({success:false,message:"invalid Password"});

        }
         const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'2d'});
         res.cookie('token',token,
            {
                  httpOnly:true,
        secure:process.env.NODE_ENV === "production" ,
        sameSite:process.env.NODE_ENV==='production'?'none':'strict',
        maxAge:2*24*60*60*1000,
            }
         )
         return res.json({success:true})




        
    } catch (error) {
        return res.json({success:false,message:error.message})
        
    }

}
export  const logout=async(req,res)=>{
try {
      res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
  });
  return res.json({success:true,message:"logout"});
    
} catch (error) {
    return res.json({success:false,message:error.message});
    
}

}