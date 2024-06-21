const mongoose = require("mongoose");
const jwt=require("jsonwebtoken");

const Userschema = new mongoose.Schema({
    username:{
        type: String,
        require : true,
    },
    email:{
        type: String,
        require : true,
    },

    phone:{
        type: String,
        require : true,
    },
    password:{
        type: String,
        require : true,
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },




})
Userschema.methods.generateToken=async function(){
    console.log(this)
    try {
       return jwt.sign({
            

            userId:this._id.toString(),
            email:this.email,
            isAdmin:this.isAdmin,


        },

        'SHAYANABBAS',
        {
            expiresIn: '30d',
        }
    
    );
        
        
    } catch (error) {
        
    }


}

const User = new mongoose.model("User",Userschema);
module.exports=User;