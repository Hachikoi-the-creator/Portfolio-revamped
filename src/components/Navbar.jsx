import React from "react";
import "../sass/navbar.scss";
import nameLogo from "../img/nick-logo.svg";
import useWindowDimensions from "./CustomMedia";

export default function Navbar() {
  const [burger, setBurger] = React.useState(false);
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
      {/* SVG */}
      <svg
        className="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path d="M0,192L60,202.7C120,213,240,235,360,250.7C480,267,600,277,720,256C840,235,960,181,1080,181.3C1200,181,1320,235,1380,261.3L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
      </svg>
      ;{/* NAVBAR */}
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
          <a onClick={() => setBurger(false)} href="#">
            Start
          </a>
        </li>
        <li>
          <a onClick={() => setBurger(false)} href="#">
            About
          </a>
        </li>
        <li>
          <a onClick={() => setBurger(false)} href="#">
            Projects
          </a>
        </li>
        <li>
          <a onClick={() => setBurger(false)} href="#">
            Contact Me
          </a>
        </li>
      </ul>
      <h1>
        width: {width} - height {height}
      </h1>
    </div>
  );
}
