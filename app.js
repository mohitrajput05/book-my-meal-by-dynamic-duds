const express=require('express');
const app= express();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT||3000;
const cors = require('cors');
const { dirname } = require('path');

mongoose.connect("mongodb+srv://root:root@cluster0.9ei6p.mongodb.net/BookMyMealApi?retryWrites=true&w=majority");
module.exports=mongoose.connection;
app.use(cors());
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



//new api





app.listen(port,()=>{
    console.log("server started");
});