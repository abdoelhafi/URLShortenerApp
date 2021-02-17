const router = require('express').Router();
const {nanoid} = require('nanoid');


const Url = require('../../models/Url');
const {shrink,isValidURL} = require('../business/shrink')

router.get('/',(req,res)=>{
    res.send("welcome to app");
});

router.post('/',
    async (req,res)=>{
    try {
        const body = req.body;
        const url = await Url.findOne({longUrl : body.url}).exec();
        if (url){
            // check if already exist
            console.log('allready exists : bring it form the db');
            res.status(200).json(url);
        }else{
            // validate and shrink url
            if(!isValidURL(body.url)){ 
                res.status(400).json({message : "invalide url"}) 
            }else{
                // convert the url given to a shorter url and save it
                const urlObj = shrink(body.url); 
                const urlModel = new Url(urlObj);
                const newUrl = await urlModel.save();
                console.log('saved succeffuly');
                res.send(newUrl);
            }
            
        }
    } catch (error) {
        console.log('an error occured while saving');
        res.status(500).json({message:"server error"})

    }
});
module.exports = router;