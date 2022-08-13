import React from "react";
import "./index.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import data from "./data.json";


const card = data.map((card) => (
  <Card
    img={card.coverImg}
    rating={card.stats.rating}
    reviewCount={card.stats.reviewCount}
    location={card.location}
    title={card.title}
    price={card.price}
  />
));

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <div className="cards-list">{card}</div>
    </div>
  );
}
