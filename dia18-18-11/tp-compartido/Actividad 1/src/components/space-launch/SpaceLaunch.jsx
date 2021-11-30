import React, { useState } from 'react';
import data from './assets/technology/data';
// import { change1, change2, change3 } from './callbacks/change';
import './spacelaunch.css';

const SpaceLaunch = () => {
    let i = 0;
    let [h1,setH1] =useState(data[i].name);
    let [p,setP] =useState(data[i].description);

    let changeContent = (value) => { 
        i = value;
        setH1( data[i].name );
        setP( data[i].description)
    }
    
    return (
        <section className="section3">
            <h1 className="section3-heading"><span className="dark">03 </span> SPACE LAUNCH 101</h1>
        <div className="container-3">
            <div className="content3">
                <div className="sidebar3">
                    <h1 tabIndex="1" className="one active" onClick = { () => changeContent(0)}>1</h1>
                    <h1 tabIndex="1" className="two" onClick = { () => changeContent(1)}>2</h1>
                    <h1 tabIndex="1" className="three" onClick = { () => changeContent(2) }>3</h1>
                </div>
                <div className="info3">
                    <p> THE TERMINOLOGY...</p>
                    <h1>{ h1  }</h1>
                    <p> { p } </p>
                </div>
            </div>
            <div className="img3-container">
            </div>
        </div>
        </section>
    )
}

export default SpaceLaunch
