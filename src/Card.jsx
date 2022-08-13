import React from "react";


export default function Card({ coverImg, stats, location, title, price, openSpots }) {
  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={coverImg} alt="activity main picture" className="pic"></img>
      <section>
        <p className="light">
          <img src="./assets/star.png" alt="star" className="star"></img>{" "}
          {stats.rating}{" "}
          <span>
            ({stats.reviewCount}) •{location}
          </span>
        </p>
        <p>{title}</p>
        <p>
          <strong>From ${price}</strong> / person
        </p>
      </section>
    </div>
  );
}