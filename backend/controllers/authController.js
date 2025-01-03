const jwt=require('jsonwebtoken')
const catchAsync=require('../utils/catchAsync')
exports.protect=async(req,res,next)=>{

    const {atoken}=req.headers;
    if(!atoken){
        return res.status(404).json({
            status:'fail',
            message:'please try with token'
        })
    }

    const token_decode=jwt.verify(atoken,process.env.JWT_SECRET)
    if(token_decode!=(process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD)){
        return res.status(404).json({
            status:'fail',
            message:'please try with token'
        })
    }
    next()

}
