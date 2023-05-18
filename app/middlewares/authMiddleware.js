const jwt=require('jsonwebtoken')
const User=require('../models/User')


const verifyTokenMiddleware=(req,res,next)=>{
   if(req.headers && req.headers.authorization){
    //token is coming

    const token=req.headers.authorization.split(' ')[1]

    //verify token is correct or not\
    jwt.verify(token,process.env.secretkey || "abjbsjankaa",(err,decode)=>{
        
        if(err){
            req.user=undefined;
            next();
        }

        User.findOne({
        _id:decode.id
        })
        .exec((err,user)=>{
            if(err){
                res.status(500).send({message:err})
            }else{
                req.user=user;
                next();
            }
        })

    })
        
    
   }else{
    req.user=undefined;
    next();
   }

}


module.exports=verifyTokenMiddleware;