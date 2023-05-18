const path=require('path');
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const User=require(path.join(__dirname,"../models/User"));

exports.signup=(req,res)=>{
    const {fullName,email,role,password}=req.body;
    
    const hashedPassword=bcrypt.hashSync(password,10);

    const user=new User({
        fullName:fullName,
        email:email,
        role:role,
        password:hashedPassword
    })

     user.save()
     .then(()=>{
        res.status(200).send({message:"user created succesfully."})
     }).catch((err)=>{

     })

}

exports.signin=(req,res)=>{
    const {email,password}=req.body

    User.findOne({email:email}).then((user)=>{

      if(!user){
        res.status(400).send({message:"user not found"})
      }

      const isPasswordValid=bcrypt.compareSync(password,user.password)

      if(!isPasswordValid){
        return res.status(401).send({accessToken:null})
      }

      //Send a JWT to the client 

      var token=jwt.sign({
        id:user.id
      },process.env.secret || "abjbsjankaa")

      res.status(200).send({
        User:{
            id:user.id,
            email:user.email,
            fullName:user.fullName
        },
        accessToken:token
      })


    }).catch(()=>{
        res.status(400).send({message:"user not found"})
    })
}