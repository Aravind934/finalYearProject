const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})
 user = mongoose.model('user',userSchema);
 module.exports = {
     user
 }