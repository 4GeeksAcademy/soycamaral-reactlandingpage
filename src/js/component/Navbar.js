import React from 'react'

const Navbar = () => {
  return (
   <div>
   <nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
  <div className="container d-flex">  
     
    <span className="navbar-brand  h1">Start Bootstrap</span>
    
    <ul className= "navbar-nav flex-row">
    <li className="nav-item me-2">
    <a className="nav-link active" aria-current="page" href="#">Home</a>
  </li>
  <li className="nav-item me-2">
    <a className="nav-link" href="#">About</a>
  </li>
  <li className="nav-item me-2">
    <a className="nav-link" href="#">Services</a>
  </li>
  <li className="nav-item me-2">
    <a className="nav-link" href="#">Contact</a>
  </li>
  </ul>

  </div> 
  </div>
</nav>
   </div>
   
  
  
  )
}

export default Navbar