import React from "react";
import styles from '../../../styles/dashboard.module.css';

const SavedUrl= ({urlData}) =>{
  const handleClick = () =>{
    
  }
  return (
    <div className={styles.SavedUrl}>
      <h1 className={styles.SavedUrlH1}>{urlData.strain}</h1>
      <p className={styles.SavedUrlP}>{urlData.terpene}</p>
      <button className={styles.SavedUrlBtn} onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default SavedUrl;
