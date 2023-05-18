const path=require('path');
const foodModel=require(path.join(__dirname,"../models/food"));


exports.findAll=(req,res)=>{
   if(!req.user){
    return res.status(403).send({message:"Invalid JWT token"})
   }

    foodModel.find({}).then((foods)=>{
        res.send(foods);
    }).catch(()=>{
        res.status(500).send(err);
    }) 
}


exports.findOne=(req,res)=>{

    foodModel.findById(req.params.id).then((food)=>{
        res.send(food);
    })
    .catch((err)=>{
        res.status(500).send(err);
    })
    
};

exports.create=(req,res)=>{

    const {name,calories}=req.body;
    
    const food=new foodModel({name,calories});

    food.save()
    .then((food)=>{
        res.status(201).send(food)
    })
    .catch((error)=>{
        res.status(500).send(error);
    })
}

exports.update=(req,res)=>{

    foodModel.findByIdAndUpdate(req.params.id,req.body)
    .then((food)=>{
        res.send(food);
    })
    .catch((error)=>{
        res.status(500).send(error);
    })
};


exports.delete=(req,res)=>{

    foodModel.findByIdAndDelete(req.params.id,req.body)
    .then((food)=>{
       
        if(!food)
        {
            res.status(404).send("no item found");
        }
        
        res.send();
    })
    .catch((error)=>{
        res.status(500).send(error);
    })
}