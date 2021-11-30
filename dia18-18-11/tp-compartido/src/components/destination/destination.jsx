import React, { useState } from "react";
import "./style/style.css"
import data from "./mocks/mocks-data"
/* import "./callbacks/dom-callback" */
export default function Destination() {
    let i = 0;
    let [h1, setH1] = useState(data[i].name);
    let [description, setDescription] = useState(data[i].description);
    let [distancia, setDistancia] = useState(data[i].distance);
    let [travel, setTravel] = useState(data[i].travel);

    function cambiarI(id, e) {
        i = id;
        setH1(data[i].name);
        setDescription(data[i].description);
        setDistancia(data[i].distance);
        setTravel(data[i].travel);
    }


    return (
        <section id="section1" className="section1">
            <div className="izquierda">
                <h1><span className="sub-title-n">01</span>Pick your destination</h1>
                <div className="images"></div>
            </div>
            <div className="derecha">
                <div className="sidebar">
                    <ul>
                        <li><button classclassName="moon active" onClick={() => cambiarI(0)}>Moon</button></li>
                        <li><button className="mars" onClick={() => cambiarI(1)}>Mars</button></li>
                        <li><button className="europa" onClick={() => cambiarI(2)}>Europa</button></li>
                        <li><button className="titan" onClick={() => cambiarI(3)}>Titan</button></li>
                    </ul>
                </div>
                <h1 className="name">{h1}</h1>
                <p className="description">{description}
                </p>
                <hr />
                <div className="inferior">
                    <hr className="hrSection1" />
                    <div className="distancia">
                        <p>Avg.distance</p>
                        <h3 className="distance">{distancia}</h3>
                    </div>
                    <hr className="hrSection1" />
                    <div className="tiempo">
                        <p>Est.travel time</p>
                        <h3 className="travel">{travel}</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}
