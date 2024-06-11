const express= require("express");
const app = express();

app.get('/',(req,res)=>{
    res.status(200).send("Welcome to Mern Stack");



});

app.get('/about',(req,res)=>{
    res.status(200).send('About Us page');


});

const PORT=5000;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);

})
