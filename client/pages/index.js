import React from 'react'
import Navbar from './components/utils/Navbar' 

const Home = () => <>
<Navbar />
<div className="jumbotron">
      <div className="container">
        <h1>Welcome to Shrink url!</h1>
        <p>simple and easy url manager website</p>
        <p>
          <a className="btn btn-primary btn-lg" href="/shrink" role="button">start shrinking a link now &raquo;</a>
        </p>
           </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>what the app is doing</h2>
          <p>
            As like magic you can turn a very long url into short one just with one click and then the
            shrinked link redirect to the original one with the use of privacy protection and without any 
            secruity issues.
          </p>
          <p>
            <a className="btn btn-default" href="/shrink" role="button">try it now &raquo;</a>
          </p>
        </div>
      </div>
      </div>
  
  </>

export default Home;