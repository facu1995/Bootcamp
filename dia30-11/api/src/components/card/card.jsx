import React from "react";
import "./style/style.css"

export default function Card({ text, bgColor, index, setData }) {

    const ocultar = () => {
        setData(cache => cache.filter((el, i) => i !== index))
    }

    return (
        <div className="card" style={{ background: bgColor }}>
            <button onClick={ocultar}><i className="fas fa-times"></i></button>
            <div className="text-first">
                <i className="fas fa-bolt"></i>
                <p>{text}</p>
            </div>
            <div className="text-second">
                <p>Apply Now </p><i className="fas fa-arrow-right"></i>
            </div>
        </div>
    )
}