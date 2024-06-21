const express=require("express");
const app = express();
const User= require('../Models/user-model')
const bcrypt=require("bcrypt");


const home = async (req,res)=>{
    try {
        
        res.status(200).send('Welcome to Mern  stack controllers');
        
    } catch (error) {
        console.log(error);
    }
}
const register= async (req,res)=>{
    try {
        const {username,email,phone,password} = req.body;
        const userexsist= await User.findOne({email});
        if(userexsist){
            res.status(400).json({msg:'email already exsist'});

        }
        else{
        saltRound=10;
        hash_password=await bcrypt.hash(password,saltRound);
        const User_created=await User.create({username,email,phone,password:hash_password})
        res.status(200).json({message:User_created,token:await User_created.generateToken(),userId:User_created._id.toString()});
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:'internal server error'});
        
    }
}
module.exports={home,register};