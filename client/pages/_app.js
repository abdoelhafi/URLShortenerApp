// import styles from '../styles/index.module.css';
// import {useState} from 'react';
// // import shrink from '../api/shrink/shrink'
// const axios = require('axios');


// const App = ({url})=>{
    
//     const [urls, setUrls] = useState({
//         srcUrl : "",
//         resUrl : ""
//     });
//     const handlSubmit = e =>{
//         e.preventDefault();
//         const resUrl =url;
//         setUrls(prev=>({
//             ...prev,
//             resUrl
//         } ))
//     }
//     const handlChange = (e)=>{
//         setUrls(prev=>({
//             ...prev,
//             srcUrl:e.target.value
//         } ))
//     }
    
//     return <>
//         <h1 className={styles.title}> welcome to the url shortener app !</h1>
//         <input type = 'text' onChange={e=> handlChange(e)} value = {urls.srcUrl} ></input>
//         <button onClick = {e=>{handlSubmit(e)}} >submit</button>
//         <p>{urls.resUrl}</p>
//     </>

// };
// App.getInitialProps = async (ctx) => {
//     console.log(url);

//     const config = {
//         headers : {
//             'Content_Type':'application/json'
//         }
//     }
//     const body = {url}
//     console.log(body);
//     try {
//         const res = await axios.post('http://localhost:5000/api',body,config);
//         const url = res.data.shortUrl;
//         return url
//     } catch (error) {
//         return
//     }
// }
// export default App ;
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
