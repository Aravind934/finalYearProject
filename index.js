const express = require('express');
require('dotenv').config();``
const mongoose = require('mongoose');
const cors = require('cors')
const authRoute = require('./routes/authRoute')
const workerRoute=require('./routes/workerRoute')
var app = express();
app.use(express.json());
app.use(cors())
app.use(express.static('public'))
app.get('/',(req,res)=>{
    res.send('index.html')
})
app.use('/auth',authRoute);
app.use('/auth/worker',workerRoute);
app.listen(process.env.PORT,()=>console.log(`port running in ${process.env.PORT}`));
mongoose.set('useCreateIndex',true);
mongoose.connect(process.env.PATH_NAME,{useNewUrlParser:true,useUnifiedTopology:true},()=>console.log('DB connected'))