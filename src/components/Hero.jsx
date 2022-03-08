import React from "react";
import "../sass/hero.scss";
import Typical from "react-typical";

export default function Hero() {
  return (
    <section className="hero">
      <div className="content">
        <h1>
          Hi 👋! I'm Adan Moreno
          <Typical
            steps={[
              "Programmer 💻",
              1000,
              "Web Developer 🕸️",
              100,
              "Lifelong Learner 🧠",
              1000,
            ]}
            loop={Infinity}
            wrapper="p"
          />
          {/* -lifelong learner -Programmer -Web developer -Pythonista -JScripter */}
        </h1>
      </div>
    </section>
  );
}
