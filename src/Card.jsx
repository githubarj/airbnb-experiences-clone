import React from "react";
import star from "./assets/star.png"

export default function Card ({img, rating, reviewCount, country, title, price}) {
    return (
        <div className="card">
            <img src={img} alt="katie" className="katie-pic"></img>
            <section>
                <p className="light"><img src={star} alt="star" className="star"></img> {rating} <span>({reviewCount}) •{country}</span></p>
                <p>{title}</p>
                <p><strong>From {price}</strong> / person</p>
            </section>
        </div>
    )
}