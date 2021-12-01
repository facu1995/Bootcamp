import React from "react";
import "./style/style.css"
export default function Card({ text,bgColor,index }) {
    return (
        <div className="card" style={{background:bgColor}}>
            <button ><i class="fas fa-times"></i></button>
            <div className="text-first">
                <i class="fas fa-bolt"></i>
                <p>{text}</p>
            </div>
            <div className="text-second">
                <p>Apply Now </p><i class="fas fa-arrow-right"></i>
            </div>
        </div>
    )
}