import userModel from "../models/user.js";
import imageModel from "../models/image.js";
import { v2 as cloudinary } from 'cloudinary';

export const deleteUserAndImages= async (req, res) => {
    try {
      const {email}=req.body;

       
        const user = await userModel.findOne({email});
        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }

        
        const userImages = await imageModel.find({ user: user._id });

      
        if (userImages.length > 0) {
            
           
            const deletePromises = userImages.map(async (image) => {
                if (image.url) {
                    
                    const regex = /\/upload\/(?:v\d+\/)?(.+)\.[^.]+$/;
                    const match = image.url.match(regex);
                    const cloudId = match ? match[1] : null;

                    if (cloudId) {
                      const data = await cloudinary.uploader.destroy(cloudId);
                      console.log(data);
                    }
                }
            });

            
            await Promise.all(deletePromises);
        }

        
        await imageModel.deleteMany({ user:user._id });

    
        await userModel.findOneAndDelete({email});

        return res.json({ 
            success: true, 
            message: "User and all their images deleted successfully" 
        });

    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: error.message });
    }
};