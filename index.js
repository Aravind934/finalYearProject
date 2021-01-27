const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const authRoute = require('./routes/authRoute')
require('dotenv').config();``
var app = express();
app.use(express.json());
app.use(cors())
app.use(express.static('public'))
app.get('/',(req,res)=>{
    res.send('index.html')
})
app.use('/auth',authRoute);

app.listen(process.env.PORT,()=>console.log(`port running in ${process.env.PORT}`));
mongoose.set('useCreateIndex',true);
mongoose.connect(process.env.PATH_NAME,{useNewUrlParser:true,useUnifiedTopology:true},()=>console.log('DB connected'))