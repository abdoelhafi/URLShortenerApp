const router = require("express").Router();
const User = require('../../models/User');
const SavedUrl = require('../../models/SavedUrl');
const { ensureAuth } = require("../../middelleware/auth");


// get the dashbard route
router.get('/',ensureAuth,async (req,res)=>{
    console.log(req.isAuthenticated());
    console.log("iam here with ");

    res.json({payload  :{isAuthenticated:req.isAuthenticated()}});
    
    try {
        const user = await User.findOne({id:2});
        console.log("this is the user result: "+ user);
        
    } catch (error) {
        console.log(error);
    }
}); 

// add a url and the description to the data base 
router.post('/',async (req,res)=>{
    try {
        const body = req.body.urlInput;
        console.log(body)
        const urlObj = {
            url:body.url,
            urlDescription: body.description
        };
        console.log(urlObj);
        const savedUrl = await SavedUrl.create(urlObj);
        res.send(savedUrl);
    } catch (error) {
        console.log("an error occured while saving");
        res.status(500).json({message:"server error"});
    }
});

module.exports = router;
