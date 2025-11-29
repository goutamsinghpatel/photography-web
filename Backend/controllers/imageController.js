import imageModel from '../models/image.js';
import userModel from '../models/user.js';
import { v2 as cloudinary } from 'cloudinary'; 
export const uploadImage=async(req,res)=>{
    let {email,section}=req.body;
    if(!email || !req.files ||req.files.length===0){
        return res.json({success:false,message:"something wrong"});
    }
    try {
        const user=await userModel.findOne({email});
        if(!user || user.role==='admin'){
            return res.json({success:false,message:"user not found"});
        }
        const userId=user._id;
        
        const imagesData = req.files.map((file) => ({
            url: file.path,          
            filename: file.filename,  
            user: userId,            
            section: section         
        }));
        await imageModel.insertMany(imagesData);
    
        return res.json({success:true,message:"image uploaded"})

    
        
    } catch (error) {
        return res.json({success:false,message:error.message});
        
    }

}

export const deleteImage=async(req,res)=>{
    try{
        const {imageId}=req.body
        if(!imageId){
            return res.json({success:false,message:"something wrong"});
        }
        const image=await imageModel.findById(imageId);
        if(!image){
            return res.json({success:false,message:"not image found"})
        }
        if (image.url) {
           
            const regex = /\/upload\/(?:v\d+\/)?(.+)\.[^.]+$/;
            const match = image.url.match(regex);
            const cloudId = match ? match[1] : null;

            console.log("Extracted Cloud ID:", cloudId); 

            if (cloudId) {
         
                try {
                    const result = await cloudinary.uploader.destroy(cloudId);
                    console.log("Cloudinary Result:", result);
                } catch (cloudError) {
                    console.log("Cloudinary Error:", cloudError);
                }
            }
        }
      
       
        await imageModel.findByIdAndDelete(imageId);
    return res.json({success:true,message:"image deleted"});

    }
    catch(error){
        return res.json({success:false,message:error.message});
    }
}