const mongoose=require("mongoose");
const URI=
"mongodb://localhost:27017/Adminpanel";
mongoose.connect(URI);
const connectdb= async ()=>{

    try {
        await mongoose.connect(URI);
        console.log("connect successfully");
        
    } catch (error) {
        console.log("database connection failed");
        process.exit(0);
    }
};  

module.exports=connectdb;