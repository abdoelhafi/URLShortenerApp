import React from 'react'
export default function Navbar() {
    return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" >
<div className="container">
  <a className="navbar-brand js-scroll-trigger" href="/">URL Manager</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link js-scroll-trigger" href="#about">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link js-scroll-trigger" href="#services">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
      </li>
    </ul>
  </div>
</div>
<br></br>
<br></br>
<br></br>
<br></br>

</nav>
    )
}
