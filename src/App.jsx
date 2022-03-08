import React from "react";
import "./app.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      {/* <h1 id="fuck"></h1> */}
    </div>
  );
}
