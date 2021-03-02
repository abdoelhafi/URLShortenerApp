const router = require('express').Router();
const {nanoid} = require('nanoid');


const Url = require('../../models/Url');

router.get('/:urlCode', async (req,res) =>{
    const urlCode = req.params.urlCode;
    try {
    const urlObj = await Url.findOne({urlCode}).exec();
    console.log("this is the result : "+ urlObj)
    if(urlObj){
        // the url exist with the coresspinding urlcode
        res.redirect(urlObj.longUrl);

    }
    
    } catch (error) {
        res.status(5000).json({message:"internal server error"});
    }
        
    
    
});
module.exports = router;