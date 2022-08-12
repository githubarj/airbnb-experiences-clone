import React from "react";
import katie from "./assets/katie-zaferes.png"
import star from "./assets/star.png"

export default function Card () {
    return (
        <div className="card">
            <img src={katie} alt="katie" className="katie-pic"></img>
            <section>
                <p className="light"><img src={star} alt="star" className="star"></img>5.0(6).USA</p>
                <p>Life lessons with Katie Zaferes</p>
                <p><strong>From $136</strong> / person</p>
            </section>
        </div>
    )
}