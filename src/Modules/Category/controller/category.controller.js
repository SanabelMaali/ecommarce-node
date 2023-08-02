import cloudinary from "../../../Services/cloudinary.js";
import categoryModel from '../../../../DB/model/Category.model.js'
import slugify from 'slugify';


export const createCategory =async (req,res,next)=>{
    const {name}=req.body;
    //ببحث عن الكاتيجوري اذا كانت موجوده بطلع مسج انه هاد العنصر ضفناه قبل
   if(await categoryModel.findOne({name})){
    return next(new Error (`Duplicate category name ${name}`,{cause:409}));
   }
    const {secure_url,public_id}= await cloudinary.uploader.upload(req.file.path,{folder:`${process.env.APP_NAME}/category`});
    const category=await categoryModel.create({name,slug:slugify(name),image:{secure_url,public_id}})
    return res.status(201).json({massage:"success",category})
}
// الفرق بين انواع ال middleware  كالتالي:
//نوع ياخد 3 متغيرات اسمه asyncHandler
//نوع ياخذ 4 متغيرات اسمه globalErrorHandel