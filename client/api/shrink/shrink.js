const axios = require('axios');

const shrink = async (url)=> {

    const config = {
        headers : {
            'Content_Type':'application/json'
        }
    }
    const body = {url}
    console.log(body);

    try {
        const res = await axios.post('app/api',body,config);
        return res;
    } catch (error) {
        console.log("error occured while pusuing request from client");
    }
}
export default shrink;