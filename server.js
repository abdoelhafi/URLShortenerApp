const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const cors = require("cors");
// const  { createProxyMiddleware }  = require('http-proxy-middleware');
const dotenv = require('dotenv');
const url = require('./routes/api/url');
const redirect = require('./routes/api/redirect');
const  auth = require('./routes/api/auth');
const dashbaord = require('./routes/api/dashboard')


// load config
dotenv.config({path: "./config/config.env"});
const MongoURI = process.env.MONGO_URI;
const PORT = process.env.PORT;
//  call passport config app from config/passport.js
require('./config/passport')(passport);

const app = express();
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
// connect to the database
mongoose.connect(MongoURI, {useNewUrlParser: true, useUnifiedTopology: true},(err)=>{
    if(err) {
        console.log("an error occured");
    }else {
        console.log("data base connected");
    }
}); 
// set up sessions 
app.use( session({ 
	secret: 'cookie_secret',
	name:   'kaas',
    resave: false,
    saveUninitialized: false
}));
app.use( passport.initialize());
app.use( passport.session());

app.use(
    cors({
      origin: "http://localhost:3000", // <-- location of the react app were connecting to
      credentials: true,
    })
  );
// set a proxy to redirect to the client server
// app.use('/app',createProxyMiddleware({ target: "http://localhost:3000" , changeOrigin: true }));

//routes
app.use('/auth',auth);
app.use('/r',redirect);
app.use('/url',url);
app.use('/app',dashbaord);

app.listen(PORT, ()=>{
    console.log(`server lanched in port ${PORT}`);
}); 