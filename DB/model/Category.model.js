import mongoose ,{ Schema ,Types,model} from "mongoose";
const categorySchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    slug:{
        type:String,
        required:true,
    },
    image:{
        type:Object,
        required:true,
    },
   /* createdBy:{
        type:Types.Object,ref:'User',
       
    }*/},
    {
        timestamps:true
    })

    const categoryModel=mongoose.models.category||model('category',categorySchema);
    export default categoryModel;