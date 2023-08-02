
import mongoose, {Schema,Types,model} from 'mongoose';
const postSchema = new Schema ({
    title:{
        type:String,
        required:true,
    },
    caption:{
        type:String,
        required:true,
    },
    image:{
        type:Object,
        required:true,
    },
    user_id:{ type:Types.ObjectId,ref:'post',required:true },//post id  المونجوز نفسه بعمله عشان هيك ما عرفته
    like:[{ type:Types.ObjectId,ref:'User'}],//حطيتها باريي
    unlike:[{ type:Types.ObjectId,ref:'User'}],//حطيتها باريي
    isDeleted:{type:Boolean,default:false},
},
{
    timestamps:true
})
const postModel = mongoose.models.Post ||  model('Post', postSchema);
export default postModel;
