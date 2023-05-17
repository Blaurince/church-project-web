import React from "react";
// import { Navbar } from "react-bootstrap";
//import { Link } from "react-router-dom";
import "./Navbar.css";
 

const Menubar = () => {
  return (  
    <nav className="navbar">
      <h3 className="logo" >CFGA</h3>
      <ul className="nav-Link">
            <li>
                <a href="/contact">
                    Contact Us
                </a>
            </li>
            <li>
                <a href="/prayer">
                Prayer Request
                </a>
            </li>
            <li>        
               <a href="/donate">
                    Donate
                </a> 
            </li>  
       </ul>
    </nav>
  );
};
export default Menubar;
