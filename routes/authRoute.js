const express = require('express');
const { hashGenerate, hashCheck } = require('../helpers/helper');
const { tokenGenerate } = require('../helpers/token');
const { user } = require('../models/userModel');
const router = express.Router();
//Register
router.post('/register',async(req,res)=>{
    req.body.password =await hashGenerate(req.body.password);
    newUser = new user(req.body)
    await newUser.save((err,isFinish)=>{
        if(err){
                res.json({
                    success:false,
                    msg:'Email Already Exists'
                })   
        }
        else{
           if(!isFinish){
            res.json({
                success:false,
                msg:'something went wrong'
            })
           }
           else{
            res.json({
                success:true,
                msg:'saved'
            })
           }
        }
    })
})
//User Available checking
router.get('/getUser/:email',async(req,res)=>{
    await user.findOne({email:req.params.email},(err,data)=>{
        if(err){
            res.json({
                success:false,
                msg:"Something went wrong"
            })
        }
        else{
            if(data){
                res.json({
                    success:true,
                    msg:"Email already exists",
                })
            }
            else{
                res.json({
                    success:false,
                    msg:"Email available"
                })
            }
        }
    })
})

//login Route

router.post('/login',async(req,res)=>{
    await user.findOne({email:req.body.email},async(err,isAvailable)=>{
        if(err) throw err;
        if(!isAvailable){
         res.json({
             success:false,
             msg:'Email not found'
         })
        }
        else{
           a= await hashCheck(req.body.password,isAvailable.password);
           if(a){
               token = await tokenGenerate(a.email);
              res.json({
                 success:true,
                 token,
                 msg:'Login success',
                 user:isAvailable.username
              });
           }
           else{
             res.json({
                 success:false,
                 msg:'Password Mismatch'
             })  
           }
        }
    })
 })
module.exports = router;