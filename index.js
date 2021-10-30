//configuration of the dotenv file and setting its path
const dotenv=require('dotenv');
dotenv.config({path:'./config.env'});

//calling the mogoose to connect to the database
const connectToMongo=require("./db");
connectToMongo();

const express=require('express');

const app=express();
app.use(express.json());
app.get('/',(req,res)=>{
    console.log("from server");
    res.send("hello this from server");
})
app.use('/api/auth',require('./Routes/Auth'));

app.listen(5000,(req,res)=>{
    console.log("this app is running");
});