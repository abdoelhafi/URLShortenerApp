const mongoose = require('mongoose');

const SavedUrlSchema = mongoose.Schema({
    url: String,
    urlDescription: String,
    date : {
        type : Date,
        default : Date.now
    }    
});
 const SavedUrl = mongoose.model('SavedUrl',SavedUrlSchema);

 module.exports = SavedUrl;