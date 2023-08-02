export const asyncHandler = (fn)=>{
    return (req,res,next)=>{
        fn(req,res,next).catch(err=>{
            return next(new Error(err) );
        });
    }

}
export const globalErrorHandel = (err,req,res,next)=>{
    if(process.env.mode=='DEV'){
        return res.status(err.cause||500).json({massage:"catch error",stack:err.stack});
    }
   else{
    return res.status(err.cause||500).json({massage:"catch error"})
   }
}