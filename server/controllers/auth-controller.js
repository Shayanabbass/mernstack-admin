const express=require("express");
const app = express();


const home = async (req,res)=>{
    try {
        res.status(200).send('Welcome to Mern  stack controllers');
        
    } catch (error) {
        console.log(error);
    }
}
const register= async (req,res)=>{
    try {
        res.status(200).json({message:req.body});
        
    } catch (error) {
        console.log(error)
        
    }
}
module.exports={home,register};