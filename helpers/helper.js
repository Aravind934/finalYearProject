const bcrypt = require('bcryptjs');

 const hashGenerate = async(pass)=>{
    gensalt =  await bcrypt.genSalt(10);
    hashpassword = await bcrypt.hash(pass,gensalt);
    return hashpassword;
 }


const hashCheck = async(pass,verifyPass)=>{
    res = await bcrypt.compare(pass,verifyPass);
    return res;
}

 module.exports = {
     hashGenerate,
     hashCheck
 }