import React from "react";
import "./app.css";
import AboutMe from "./components/AboutMe";
import ContacMe from "./components/ContacMe";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <ContacMe />
      {/* <h1 id="fuck"></h1> */}
    </div>
  );
}
