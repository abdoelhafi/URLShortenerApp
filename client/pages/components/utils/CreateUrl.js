import React,{useState} from 'react';
import styles from '../../../styles/dashboard.module.css';
import saveUrl from '../../../api/dashboard/saveUrl';

const  CreateUrl = ()=> {

    const [urlInput, setUrlInput] = useState({
      url: "",
      description: ""
    });
  
    const handleChange = (event)=> {
      const { name, value } = event.target;
        setUrlInput((prev)=> {
            return {
            ...prev,
            [name]:value
        }});
    }
  
    const handlSubmit = (event)=> {
      event.preventDefault();
      saveUrl(urlInput);
      setUrlInput({
        url: "",
        description: ""
      });
    }
    return (
        <div>
        <form className={styles.dashboardForm} onSubmit ={e =>{handlSubmit(e)}}>
          <input
            className={styles.dashboardInput}
            name="url"
            onChange={handleChange}
            value={urlInput.url}
            placeholder="Put your url here"
          />
          <textarea
            className={styles.dashboardInput}
            name="description"
            onChange={handleChange}
            value={urlInput.description}
            placeholder="Add a description..."
            rows="3"
          />
          <input type="submit" className={styles.dashboardBtn} value = "Add" />
        </form>
      </div>
    )
}

export default CreateUrl;
