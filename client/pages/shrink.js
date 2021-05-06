import styles from '../styles/index.module.css';
import {useState, useEffect, Component} from 'react';
import shrink from '../api/shrink/shrink'
const axios = require('axios');

const Shrink = () => {

    const [urls, setUrls] = useState({srcUrl: "", resUrl: ""});

    useEffect(() => {});
    const handlSubmit = e => {
        e.preventDefault();
        let resUrl="" ;
        shrink(urls.srcUrl).then(res=>{
            console.log(res);
            resUrl = res.data.shortUrl;
            setUrls(prev => ({
            ...prev,
            resUrl
        }));
        });
        console.log("this is the results in the shrink compnent : "+urls.resUrl);
    }
    const handlChange = (e) => {
        setUrls(prev => ({
            ...prev,
            srcUrl: e.target.value
        }))
    }

    return <>
    <div className="jumbotron">
      <div className="container">
        <h1>URL shorner</h1>
        <p>put your URL bellow :</p>

        <form className="input-group mb-3" onSubmit ={e =>{handlSubmit(e)}}>
        <input type='text'  onChange={e => handlChange(e)} value={urls.srcUrl} className="form-control" placeholder="Recipient's username" />
        <input type="submit" value = "shrink now" className="btn btn-outline-secondary" />
        </form>
        <div>{urls.resUrl ? <p className = "font-weight-light">your shortener Url is : <a className = "font-italic" href = {urls.resUrl}>{urls.resUrl}</a> </p>: <p className = " font-weight-light">Your link will apear here</p>}</div> 
           </div>
    </div>
    {/* <div className={styles.container}>
     <h1 className = {styles.title}> welcome to the url shortener Shrink !</h1>
     <div className={styles.main}>
    <form onSubmit ={e =>{handlSubmit(e)}}>
        <input type='text' onChange={e => handlChange(e)} value={urls.srcUrl}/>
        <input type="submit" value = "shrink now" />
    </form>

    <div>{urls.resUrl ? <p>your shortener Url is <a href = {urls.resUrl}>{urls.resUrl}</a> </p>: "hey your shorner link will apear here"}</div> 
   </div>
     </div> */}
     </>

};
    export default Shrink;