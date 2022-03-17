import React, { useState } from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import "../sass/navbar.scss";
import nameLogo from "../img/nick-logo.svg";
import useWindowDimensions from "./CustomMedia";

export default function Navbar() {
  const { t } = useTranslation();
  let CurrentLang = i18n.language == "en" ? "🇬🇧 EN" : "🇲🇽 ES";

  function changeLan() {
    if (i18n.language == "en") {
      i18n.changeLanguage("es");
    } else {
      i18n.changeLanguage("en");
    }
  }

  const [burger, setBurger] = useState(false);
  const { height, width } = useWindowDimensions();

  return (
    <div>
      {/* BURGER */}
      <div
        className={`menu-btn ${burger ? "open" : ""}`}
        onClick={() => setBurger(!burger)}
      >
        <div className="menu-btn__burger"></div>
      </div>

      {/* NAVBAR */}
      <ul className={`navbar ${burger || width > 700 ? "" : "hidde-left"}`}>
        <li className="logo">
          <a onClick={() => setBurger(false)} href="#top">
            <img
              src={nameLogo}
              alt="Hachikoi in cute font"
              className="page-logo"
            />
          </a>
        </li>
        <li>
          <a onClick={() => setBurger(false)} href="#" className="extra-link">
            {t("nav link 1")}
          </a>
        </li>
        <li>
          <a
            onClick={() => setBurger(false)}
            href="#about"
            className="extra-link"
          >
            {t("nav link 2")}
          </a>
        </li>
        <li>
          <a
            onClick={() => setBurger(false)}
            href="#projects"
            className="extra-link"
          >
            {t("nav link 3")}
          </a>
        </li>
        <li>
          <a
            onClick={() => setBurger(false)}
            href="#contact"
            className="extra-link"
          >
            {t("nav link 4")}
          </a>
        </li>
        <li>
          <button onClick={changeLan}>{CurrentLang}</button>
        </li>
      </ul>
      {/* <h1>
        width: {width} - height {height} hehe
      </h1> */}
    </div>
  );
}
