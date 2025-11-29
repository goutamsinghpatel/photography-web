import express from 'express'
import multer from "multer";
import { cloudinary,storage } from '../config/cloudinary.js';
import AdminToken from '../middleware/adminToken.js';
import { deleteImage, uploadImage } from '../controllers/imageController.js';
import { deleteUserAndImages } from '../controllers/deleteController.js';
const imageRouter=express.Router();
const upload = multer({ storage });
imageRouter.post("/upload-image",AdminToken,upload.array("imageFiles", 10),uploadImage);
imageRouter.post("/delete-image",AdminToken,deleteImage);
imageRouter.post("/user-delete",AdminToken,deleteUserAndImages);
export default imageRouter;

