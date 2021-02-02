const jwt = require('jsonwebtoken');

var tokenGenerate = async(email)=>{
   token =  await jwt.sign(
        {email:email},
        process.env.JWT_KEY,
        {expiresIn:60 * 60}
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