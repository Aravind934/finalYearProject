const express = require('express')
const multer = require('multer');
var nodemailer = require('nodemailer');
const { worker } = require('../models/workerModel')
var router = express.Router()

var storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/profiles')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
});
var upload = multer({
    storage,
    limits:{
        fileSize:1000000
    },
    fileFilter:(req,file,cb)=>{
        if(!file.originalname.endsWith('.jpg')){
            return cb(new Error('file must be jpg format'))
        }
        else{
            cb(null,true)
        }
    }
}).single('profile')



router.post('/register',async(req,res)=>{
 
    upload(req,res,async(err)=>{
        if(err){
            res.json({
                success:false,
                msg:err.message
            })
        }
        else{
         var transporter = nodemailer.createTransport({
             service: 'gmail',
             auth: {
               user: process.env.EMAIL,
               pass: process.env.EMAILPASSWORD
             }
           });
           var mailOptions = {
             from: process.env.EMAIL,
             to: req.body.email,
             subject:'Welcome',
             text: 'Your registratiom was successful',
           }
           req.body.profile = req.file.path;
           newWorker = new worker(req.body);
   await newWorker.save((err,data)=>{
       if(err){
           res.json({
               success:false,
               msg:err.message
           })
       }
       else{
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              res.json({
                  success:false,
                  msg:error.message 
              })
            } else {
              res.json({
                  success:true,
                  msg:'success'
              })
            }
          });         
       }
   })
         
        }      
     })
  
})

module.exports=router;