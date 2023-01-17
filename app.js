// Basic Lib Import
const express = require('express');
const app = new express();
const router = require('./src/routes/api');
const bodyParser = require('body-parser');


// Security Middleware Lib Import
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');


// Database Lib import
const mongoose = require('mongoose');

// Security Middleware Implement
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())
app.use(cors())

// Implement Body Parser
app.use(bodyParser.json())

// Request Rate Limit
const limiter = rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter)

// Mongo DB Database Connection
let URI = "mongodb+srv://testuser7777:testuser7777@crud.a3n6fei.mongodb.net/CRUD";
let OPTION= {autoIndex:true}
mongoose.connect(URI, OPTION,(error)=>{
    console.log("Mongo DB Connection Success")
    console.log(error)
})

// Routing Implement
app.use("/api/v1", router)

// Undefined Route Implement
app.use("*", (req, res)=>{
    res.status(404).json({status:"fail", data: "Undefined Route"})
})

module.exports=app;