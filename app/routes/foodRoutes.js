const { response } = require("express");
const path=require('path');
const express=require("express");
const foodControllors=require(path.join(__dirname,"../Controllers/foodController"));
const foodModel=require(path.join(__dirname,'../models/food'));
const app=express();

const authMiddleware=require('../middlewares/authMiddleware')



app.get("/foods",authMiddleware,foodControllors.findAll);
app.get("/food/:id",foodControllors.findOne);
app.post("/food",foodControllors.create);
app.patch("/food/:id",foodControllors.update);
app.delete("/food/:id",foodControllors.delete);




module.exports=app;