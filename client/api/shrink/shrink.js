const axios = require('axios');

const shrink = async (url)=> {
    console.log(url +'from the shrik api');

    const config = {
        headers : {
            'Content_Type':'application/json'
        }
    }
    const body = {url}
    console.log(body);
    const res = await fetch("https://randomuser.me/api/");
    const json = await res.json();
    return json.results[1].gender

    // try {
    //     const res = await axios.post('http://localhost:5000/api',body,config);
    //     return res;
    // } catch (error) {
    //     console.log("error occured while pusuing request from client");
    // }
}
export default shrink;