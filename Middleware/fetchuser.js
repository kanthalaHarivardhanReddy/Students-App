const jwt=require('jsonwebtoken')
const JWT_Sk=process.env.JWTSECKEY;

const fetchuser=(req,res,next)=>{
    const token=req.header('authtoken');
    if(!token){
        return res.status(401).json({err:"please authenticate"});
    }
    try{
        const data=jwt.verify(token,JWT_Sk);
        req.user=data.user;
        next();
    }catch(err){
        res.status(401).json({err:"please authenticate"})
    };
}

module.exports=fetchuser;