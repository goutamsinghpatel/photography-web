import jwt  from "jsonwebtoken";

const  authToken=async(req,res,next)=>{
    const {token}=req.cookies;
    if(!token){
        return res.json({success:false,message:"not authoride login again"})

    }
    try {
  const tokenDecode=jwt.verify(token,process.env.JWT_SECRET)
  if(tokenDecode.id){
    req.authId=tokenDecode.id;
  
    
  }
  else {
        return res.json({success:false, message:"not Authorized login again"})
  }
  next()
     

    } catch (error) {
        return res.json({success:false,message:error.message});

        
    }
}
export default authToken;