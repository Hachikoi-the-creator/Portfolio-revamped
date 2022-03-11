import React from "react";
import "../sass/aboutMe.scss";
import cSharp from "../img/stack/csharp-icon.svg";
import css from "../img/stack/css-icon.svg";
import figma from "../img/stack/figma-icon.svg";
import flask from "../img/stack/flask-icon.svg";
import html from "../img/stack/html-icon.svg";
import inkscape from "../img/stack/inkscape-icon.svg";
import js from "../img/stack/js-icon.svg";
import python from "../img/stack/python-icon.svg";
import react from "../img/stack/react-icon.svg";
import ts from "../img/stack/ts-icon.svg";

export default function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="title">ABOUT ME</h2>

      <div className="desc">
        <p>
          I'm a front-end developer, I love to code and I also love to improve
          as a person and as a developer 💻. I started my journey in machine
          learning, trained a model to detect if a woman has breast cancer, now
          I'm just giving my all to web development 🕸️.
        </p>
      </div>
      <div className="tech-stack">
        <div className="left">
          <img src={cSharp} alt="logo :D" />
          <img src={css} alt="logo :D" />
          <img src={figma} alt="logo :D" />
          <img src={flask} alt="logo :D" />
          <img src={html} alt="logo :D" />
        </div>
        <div className="right">
          <img src={inkscape} alt="logo :D" />
          <img src={js} alt="logo :D" />
          <img src={python} alt="logo :D" />
          <img src={react} alt="logo :D" />
          <img src={ts} alt="logo :D" />
        </div>
      </div>
    </section>
  );
}
