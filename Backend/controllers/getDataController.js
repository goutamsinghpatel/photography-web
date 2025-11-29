import userModel from "../models/user.js";
import imageModel from "../models/image.js";
export const getData=async(req,res)=>{
    try {
         const {authId}=req;
        const user=await userModel.findById(authId);
        if(!user){
            return res.json({success:false,message:"user not found"})
        }
       if (user.role === "admin") {
    const users = await userModel.find({});
   const usersWithImages = await Promise.all(
                users.map(async (u) => {
                    // Yaha await lagana zaroori hai
                    const images = await imageModel.find({ user: u._id });
                    const url=images.map(u=>({
                        url:u.url,
                        section:u.section,
                        id:u._id
                    }))
                    
                    return {
                     
                        name: u.name,
                        email: u.email,
                        role: u.role,
                        image: url 
                    };
                })
            );

            return res.json({
                success: true,
                users: usersWithImages,
            });

    // return res.json({
    //     success: true,
    //     users: users.map(u => ({
    //         id:u._id,
    //         name: u.name,
    //         email: u.email,
    //         role: u.role,
    //         image: imageModel.find({user:u._id})
            
    //     })),
        
    // });
}
        else {
        const imageUser=await imageModel.find({user:user._id})

return  res.json({success:true,
            userData:{
                email:user.email,
                name:user.name,
                role:user.role,
               images:imageUser.map(u=>({
            url:u.url,
            section:u.section
        }))
            }
        })
        }
       
    
    } catch (error) {
        return res.json({success:false,message:error.message})
        
    }
    
}