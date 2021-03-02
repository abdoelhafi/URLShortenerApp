const express = require('express');
const MongoURI = require('./config/conf').MongoURI;
const PORT = require('./config/conf').port;
const url = require('./routes/api/url');
const redirect = require('./routes/api/redirect');
const mongoose = require('mongoose');

const app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

mongoose.connect(MongoURI, {useNewUrlParser: true, useUnifiedTopology: true},(err)=>{
    if(err) {
        console.log("an error occured");
    }else {
        console.log("data base connected");
    }
});

app.use('/r',redirect);
app.use('/api',url);
app.listen(PORT, ()=>{
    console.log(`server lanched in port ${PORT}`);
}); 