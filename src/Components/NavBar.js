import React from "react";
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <>
        <nav class="navbar navbar-expand-md bg-white navbar-light">
  
        <Link class="navbar-brand" to="/">Let's Build</Link>
  
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>

  
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <Link class="nav-link" to="/">Home</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/about">About</Link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
    </ul>
  </div>
</nav>
        
        </>
    )
}

export default NavBar