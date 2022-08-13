import React from "react";


export default function Card ({img, rating, reviewCount, location, title, price}) {
    return (
        <div className="card">
            <img src={img} alt="activity main picture" className="pic"></img>
            <section>
                <p className="light"><img src="./assets/star.png" alt="star" className="star"></img> {rating} <span>({reviewCount}) •{location}</span></p>
                <p>{title}</p>
                <p><strong>From ${price}</strong> / person</p>
            </section>
        </div>
    )
}