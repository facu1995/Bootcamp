import React, { Fragment } from "react";
import "./style.css";
import { Routes, Route, Link } from "react-router-dom";

export default function Home() {
    return (
      <main>
        <div className="space">
            <div className="info">
                <h4>SO, YOU WANT TO TRAVEL TO</h4>
                <h1>SPACE</h1>
                <p>
                    Let’s face it; if you want to go to space, you might as well<br/>genuinely go to 
                    outer space and not hover kind of on the<br/>edge of it. Well sit back, and relax 
                    because we’ll give you<br/>a truly out of this world experience!
                </p>
            </div>
            <div className="explore">
                <h1>Explore</h1>
            </div>
        </div>
      </main>
    );
  }