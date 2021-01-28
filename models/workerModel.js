const mongoose = require('mongoose');

var workerSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true,
    },
    occupation:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    profile:{
        type:String,
        required:true
    }
})
 worker = mongoose.model('worker',workerSchema);
 module.exports = {
     worker
 }