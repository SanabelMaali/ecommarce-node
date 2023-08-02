import postModel from "../../../../DB/model/Post.model.js";
import userModel from "../../../../DB/model/User.model.js";
import cloudinary from "../../../Services/cloudinary.js";
import { asyncHandler } from "../../../Services/errorHandling.js";
import { compare, hash } from "../../../Services/hashAndCompare.js";

export const createPost=asyncHandler(async(req,res,next)=>{
    const {title,caption}=req.body;
    const id=req.id;
    const{secure_url,public_id}=await cloudinary.uploader.upload(req.file.path,{folder:post})
    const post=await postModel.create({title,caption,image:{secure_url,public_id},user_id:id})
    return res.status(201).json({message:"success",post})
})