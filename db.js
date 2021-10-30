const mongoose=require('mongoose');
const mongoURI=process.env.MONGOURI;

const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to mongoose successfully");
    })
};

module.exports=connectToMongo;