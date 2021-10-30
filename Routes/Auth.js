const express=require('express');
const router=express.Router();
const {body,validationResult}=require('express-validator');
const User=require('../Model/User');
const bcryptjs=require('bcryptjs');
const jwt=require('jsonwebtoken');
const JWT_Sk=process.env.JWTSECKEY;
const fetchuser=require('../Middleware/fetchuser');

//for registering 
router.post('/signup',
[
    body('name','enter a Valid Name').isLength({min:3}),
    body('email','enter a Valid Email').isEmail(),
    body('age','Enter a valid number').isDecimal(),
    body('password','password must be atleast 5 characters').isLength({min:8}),
    body('cpassword','password must be atleast 5 characters').isLength({min:8})
],async (req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.error});
    }
    try{
        let user=await User.findOne({email:req.body.email});
        if(user){
            return res.status(402).json({msg:"user already exists"});
        }
        const salt =await bcryptjs.genSalt(10);
        const secPass=await bcryptjs.hash(req.body.password,salt);
        user=await User.create({
            name:req.body.name,
            email:req.body.email,
            age:req.body.age,
            password:secPass
        });
        user.save();
        const data={
            user:{
                id:user.id
            }
        };
        const authtoken=jwt.sign(data,JWT_Sk);
        res.status(200).json({authtoken:authtoken});
    }catch(error){
        res.status(400).json({error});
    }
});


//for loging in to the app 
router.post('/signin',[
    body("email","Enter a Valid Email").isEmail(),
    body('password',"Enter a correct password").isLength({min:8})
],async (req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        console.log("in error")
        return res.status(400).json({errors:errors.error});
    }
    try{
        const user=await User.findOne({email:req.body.email});
        if(!user){
            return res.status(402).json({msg:"user haven't registered"});
        }
        const result=await bcryptjs.compare(req.body.password,user.password);
        const data={
            user:{
                id:user.id
            }
        };
        const authtoken=jwt.sign(data,JWT_Sk);
        if(result){
            res.status(200).json({authtoken:authtoken});
        }
        else{
            res.status(402).json({msg:"Enter a valid credentials"});
        }
    }catch(err){
        res.status(400).json({error:err});
    }
});


//for getting the user details of the user 
router.get('/getuser',fetchuser,async (req,res)=>{
    try{
        userId=req.user.id;
        const user=await User.findById(userId).select("-password");
        res.send(user);
    }catch(err){
        res.status(500).send("Internal Server Error")
    }
})

module.exports=router;