const jwt = require('jsonwebtoken');

var tokenGenerate = async(payload)=>{
   token =  await jwt.sign(
        {email:payload},
        process.env.JWT_KEY,
        {expiresIn:"1hours"}
    )
    return token;
}

var tokenValidate = async(token)=>{
    try{
     auth = await jwt.verify(token,process.env.JWT_KEY);
     return auth;
    }catch(err){
        return false;
    }
}

module.exports = {
    tokenGenerate,
    tokenValidate
}