const mongoose = require('mongoose');
const UrlSchema = new mongoose.Schema({
    longUrl : String,
    shortUrl : String,
    urlCode : String,
    date : {
        type : Date,
        default : Date.now
    }
});

const Url = mongoose.model('Url',UrlSchema);

module.exports = Url;