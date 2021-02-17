const {nanoid} = require('nanoid');
const conf = require('../../config/conf');
                                                    
const shrink = (url) => {

    const urlCode = nanoid();
    const urlBase = conf.domainName;
    const shortUrl = [urlBase,urlCode].join('/');
    console.log(shortUrl);
    return {longUrl: url, shortUrl: shortUrl, urlCode: urlCode}

}
const isValidURL = (url) => {
    try {
        new URL(url);
        return true;
    } catch (error) {
        return false;
    }

}
module.exports = {
    shrink,
    isValidURL
};