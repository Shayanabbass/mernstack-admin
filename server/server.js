const express= require("express");
const app = express();
const Router=require('./router/router-auth');
app.use(express.json())
app.use('/api/auth',Router);

app.get('/',(req,res)=>{
    res.status(200).send("Welcome to Mern Stack");



});

app.get('/about',(req,res)=>{
    res.status(200).send('About Us page');


});
app.get('/register',(req,res)=>{
    res.status(200).send('Regiter page');


});


const PORT=5000;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);

})
