import React from "react";
import "../sass/hero.scss";
import Typical from "react-typical";
import bigLogo from "../img/main-logo.svg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="content">
        <h1>
          Hi 👋! I'm Adan Moreno
          <Typical
            steps={[
              "Programmer 💻",
              1200,
              "Web Developer 🕸️",
              1300,
              "Lifelong Learner 🧠",
              1500,
              "Gamer 🎮",
              1000,
              "Not a designer 😛",
            ]}
            loop={Infinity}
            wrapper="p"
          />
        </h1>
        <img src={bigLogo} alt="Cool logo whit a computer, and blue gradient" />
      </div>
    </section>
  );
}
