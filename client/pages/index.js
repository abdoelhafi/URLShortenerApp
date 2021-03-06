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
        <div className="col-md-4">
          <h2>Heading</h2>
          <p>
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
            tellus ac cursus commodo, tortor mauris condimentum nibh, ut
            fermentum massa justo sit amet risus. Etiam porta sem malesuada
            magna mollis euismod. Donec sed odio dui.
          </p>
          <p>
            <a className="btn btn-default" href="#" role="button">View details &raquo;</a>
          </p>
        </div>
        <div className="col-md-4">
          <h2>Heading</h2>
          <p>
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
            tellus ac cursus commodo, tortor mauris condimentum nibh, ut
            fermentum massa justo sit amet risus. Etiam porta sem malesuada
            magna mollis euismod. Donec sed odio dui.
          </p>
          <p>
            <a className="btn btn-default" href="#" role="button">View details &raquo;</a>
          </p>
        </div>
        <div className="col-md-4">
          <h2>Heading</h2>
          <p>
            Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Vestibulum id ligula porta felis euismod semper.
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus.
          </p>
          <p>
            <a className="btn btn-default" href="#" role="button">View details &raquo;</a>
          </p>
        </div>
      </div>
      </div>
  
  </>

export default Home;