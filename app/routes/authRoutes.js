const { response } = require("express");
const path=require('path');
const express=require("express");
const userControllers=require(path.join(__dirname,"../Controllers/userController"));
const User=require(path.join(__dirname,'../models/User'));
const app=express();



app.post("/register",userControllers.signup);
app.post("/login",userControllers.signin);

module.exports=app;