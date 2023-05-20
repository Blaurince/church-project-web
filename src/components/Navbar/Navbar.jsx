import React from "react";
// import { Navbar } from "react-bootstrap";
//import { Link } from "react-router-dom";
import "./Navbar.css";
import { Row } from "react-bootstrap";
 

const Menubar = () => {
  return (  
    <nav className=" navbar-light bg-secondary" >
      <h1 className="logo" text-white>ChurchedIn</h1>
      <ul className="nav-Link">
          <li>
                <p href="/contact" className="text-white">
                    •Contact Us
                </p>
            </li>
            <li>
                <p href="/prayer" className="text-white">
                •Prayer Request
                </p>
            </li>
            <li>        
               <p href="/donate" className="text-white">
               •Donate
                </p> 
            </li>  
       </ul>
    </nav>
  );
};
export default Menubar;
