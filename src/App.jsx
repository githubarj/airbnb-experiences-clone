import React from "react"
import "./index.css"
import Navbar from "./Navbar"
import Hero from "./Hero"
import Card from "./Card"

export default function App () {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Card />
    </div>
  )
}
