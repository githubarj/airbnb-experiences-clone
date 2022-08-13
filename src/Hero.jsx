import React from "react";
import "./index.css"


export default function Hero () {
    return (
        <div className="hero">
            <div className="photo-section">
                <img src="./assets/photo-grid.png" alt="photo grid" className="photo-grid"></img>
            </div>
            <h1>Online experiences</h1>
            <p>Join unique interactive experiences led by one-of-a kind hosts-all without leaving home</p>
        </div>
    )
}