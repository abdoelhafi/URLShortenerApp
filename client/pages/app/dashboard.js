import React from 'react';
import CreateUrl from '../components/utils/CreateUrl';
import SavedUrl from '../components/utils/SavedUrl';
import styles from '../../styles/dashboard.module.css';

const dashboard = (props) => {
    const data = props.data;
    const isAuthenticated = props.isAuthenticated;
    if (!isAuthenticated) 
    console.log("hello first data"+ data);    
    const listedItems =  data.map((urlData, index)=>
    <SavedUrl urlData={urlData} key={index} />
    )
    return (
        <>
        <div className={styles.header}> <h1>hllo</h1></div>
        <div className={styles.dashboardBody}>
        <CreateUrl />
        {listedItems}
        </div>
        </>
    )
}

export async function getServerSideProps(){

    const payload = await fetch("http://localhost:5000/app",{

        method: "GET",
        credentials: "same-origin", 
        headers: {
          "User-Agent":
            "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:88.0) Gecko/20100101 Firefox/88.0", 
          Accept: "application/json; charset=UTF-8",
        },
    })
    const payloadData = await payload.json()
    console.log("payload is : in the server ffrent : "+payloadData.payload.isAuthenticated)

    if(!payloadData){
        console.log("the data is not found");
        return
    }

    if (!payloadData.payload.isAuthenticated) return { 
        redirect: {
           permanent: false,
           destination: "/",
           },
           props : {}
       }

   
    
    return{ props : {payloadData}}
}
export default dashboard;