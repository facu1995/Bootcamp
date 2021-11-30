import React, { Fragment } from "react";
import "./style.css";
// import showLikns from "./main.js";
import { Routes, Route, Link } from "react-router-dom";

export default function Nav() {
    function showLinks(){
        const navlinks = document.getElementById("nav-links");
        const hamburger = document.getElementById("hamburger");
        if (navlinks.style.display === "block") {
            navlinks.style.display = "none";
            hamburger.className = 'fas fa-bars';
          } else {
            hamburger.className = 'fas fa-times';
            navlinks.style.display = "block";
          }
    }
    
    
    return (
      <Fragment>
        <nav>
            <div className="container">
                <ul>
                    <li><div className="logo"></div></li>
                </ul>
                <hr/>
                <ul id="subnav" className="nav">
                    <li><button onClick={showLinks}  id="prueba"><i id="hamburger" className="fas fa-bars"></i></button></li>
                </ul>
                <ul id="nav-links" className="nav">
                    <li><Link to="/">00 Home</Link></li>
                    <li><Link to="/destination">01 Destination</Link></li>
                    <li><Link to="/crew">02 Crew</Link></li>
                    <li><Link to="/technology">03 Technology</Link></li>
                </ul>
            </div>
        </nav>
      </Fragment>
    );
  }