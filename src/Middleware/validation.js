
import joi from 'joi'

const dataMethods = ['body','query','params','headers','file'];

const validationObjectId =(value,helper)=>{

    if(Types.ObjectId.isValid(value)){
        return true 
    }else {

        return helper.message("rteertertertertreterte")

    }
}

export const generalFeilds = {

    email:joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password:joi.string().min(3).required(),
    file:joi.object({
        fieldname:joi.string().required(),
        originalname:joi.string().required(),
        encoding:joi.string().required(),
        mimetype:joi.string().required(),
        destination:joi.string().required(),
        filename:joi.string().required(),
        path:joi.string().required(),
        size:joi.number().positive().required(),
        dest:joi.string(),
    }),
    id:joi.string().custom(validationObjectId).min(24).max(24).required(),
}

const validation = (schema)=>{
    return (req,res,next)=>{
        // مشكلة اللوب انه بختاج وقت كبير وهو يلف ويدور عالخطـأ لذلك بعمل اشي اسمه فرد للداتا احسن من اللوب
       /* const valiadtionArray = [];
        dataMethods.forEach(key=>{
            if(schema[key]){
               const validationResult = schema[key].validate(req[key],{abortEarly:false});

               if(validationResult.error){
                valiadtionArray.push(validationResult.error.details);
               }
            }
        } )*/
         const inputsData={...req.body,...req.params,...req.query,file:req.file} //بدل اللوب بتعمل فرد للداتا 
      const valiadtionResult= schema.validate (inputsData,{abortEarly:false});
      
         if(valiadtionResult.error?.details){
            return res.json({message:"valiation error",validationError: valiadtionResult});
        }return next();
}
}

export default validation;