
import jwt from "jsonwebtoken";


export const verifyToken = async(req,res,next) =>{
    let token = req.headers.token;
    jwt.verify(token,"userToken",(error , decoded)=>{
        if(error) return res.json({message: "done",error});
        req.user = decoded;
        next();
    })
}