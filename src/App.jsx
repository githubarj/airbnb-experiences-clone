import React from "react";
import "./index.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import data from "./data.json";

const card = data.map((card) => (
  <Card
    key={card.id}
    {...card}
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
