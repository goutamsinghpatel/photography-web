import  jwt  from "jsonwebtoken"
import userModel from "../models/user.js";

 const AdminToken=async(req,res,next)=>{
    const {token}=req.cookies;
    if(!token){
        return res.json({success:false,message:"not authoride login again"});
    }
    try {
        const tokenDecode=jwt.verify(token,process.env.JWT_SECRET)
        const user = await userModel.findById(tokenDecode.id);
     
        if(user.role==="admin"){
            req.adminId=tokenDecode.id;
         

        }
        else {
            return res.json({success:false, message:"not Authorized login again"})
        }
 
          next();
    } catch (error) {
        return res.json({success:false,message:error.message});
        
    }

}
export default AdminToken;
