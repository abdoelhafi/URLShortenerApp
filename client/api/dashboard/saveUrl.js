const axios = require('axios');

const saveUrl = async (urlInput)=> {

    const config = {
        headers : {
            'Content_Type':'application/json'
        }
    }
    const body = {urlInput}
    try {
        const res = await axios.post('/api/app',body,config);

        return res;
    } catch (error) {
        console.log("error occured while pusuing request from client");
    }
}
export default saveUrl;