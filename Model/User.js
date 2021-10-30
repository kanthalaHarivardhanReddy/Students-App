const mongoose=require('mongoose');

const UserSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:5
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number,
        min:3,
        max:100,
        required:true
    },
    password:{
        type:String,
        required:true,
        min:6,
        max:12
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports=mongoose.model('User',UserSchema);