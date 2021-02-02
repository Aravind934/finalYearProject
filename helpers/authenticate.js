const { tokenValidate } = require("./token");

authenticate = async(req,res,next)=>{
    token = req.headers['authorization'];
    if(!token){
        res.json({
          success:false,
          msg:'Please login Again'
        })
    }
    else{
        
        valid = await tokenValidate(token);
        if(!valid){
           res.json({
               success:false,
               msg:'Please login again'
           })
        }
        else{
            req.decoded = valid;
            next();
        }
           }
       
    
}

module.exports = {
    authenticate
}