import React from "react";
import { useTranslation } from "react-i18next";
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
import arduino from "../img/stack/arduino-icon.svg";
import pandas from "../img/stack/pandas-icon.svg";
import sklearn from "../img/stack/sklearn-icon.svg";
import bash from "../img/stack/bash-icon.svg";

export default function AboutMe() {
  const { t } = useTranslation();

  return (
    <section className="about-me" id="about">
      <h2 className="title">{t("about title")}</h2>

      <div className="desc">
        <p>{t("about desc")}</p>
      </div>

      <div className="tech-left">
        <img src={cSharp} alt="logo :D" />
        <img src={css} alt="logo :D" />
        <img src={figma} alt="logo :D" className="ligma" />
        <img src={pandas} alt="logo :D" />
        <img src={sklearn} alt="logo :D" />
        <img src={flask} alt="logo :D" />
        <img src={html} alt="logo :D" />
      </div>
      <div className="tech-right">
        <img src={arduino} alt="logo :D" />
        <img src={bash} alt="logo :D" />
        <img src={inkscape} alt="logo :D" />
        <img src={js} alt="logo :D" />
        <img src={python} alt="logo :D" />
        <img src={react} alt="logo :D" />
        <img src={ts} alt="logo :D" />
      </div>
    </section>
  );
}
