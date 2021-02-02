const express = require('express');
const { worker } = require('../models/workerModel');
var router = express.Router()

router.post('/search',authenticate,async(req,res)=>{
    await worker.find({$and:[{occupation:req.body.occupation},{$or:[{city:req.body.location},{area:req.body.location}]}]},async(err,data)=>{
        if(err){
            res.json({
                success:false,
                msg:err.message
            })
        }
        else{
            
            if(data.length >0){
                res.json(data);
            }
            else{
                res.json([{
                    name:'no results found',
                    error:'yes'
                }])
            }
        }
    })
})

module.exports= router;
