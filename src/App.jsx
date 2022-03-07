import React from "react";
import "./app.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <h1 id="fuck"></h1> */}
    </div>
  );
}
