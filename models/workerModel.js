const mongoose = require('mongoose');

var workerSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    city:{
        type:String,
        required:true,
    },
    area:{
        type:String,
        required:true,
    },
    occupation:{
        type:String,
        required:true,
    },
    mobile:{
        type:String,
        required:true,
        unique:true
    },
    profile:{
        type:String,
        default:'public/profiles/worker.jpg'
    },
    gender:{
        type:String
    }
})
 worker = mongoose.model('worker',workerSchema);
 module.exports = {
     worker
 }