"use strict"
//let jsonData = require('./partners.json')
let jsonData = require('./Data/index.js');
const cors = require('cors'); 
const express = require("express");
const app = express();app.use(cors());
app.get('/api/Partners',(req,res) =>{
    const filteredData = jsonData.data(req.query.longitude,req.query.latitude,req.query.distance);
    res.send(filteredData);
})
app.on('error',(err)=>{
    console.log(err);
})
const port = process.env.port || 3000;
app.listen(port,() =>{
    console.log(`listening on port ${port}`)
})