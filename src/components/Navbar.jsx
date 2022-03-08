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
          <a onClick={() => setBurger(false)} href="#">
            Home
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
      {/* <h1>
        width: {width} - height {height}
      </h1> */}
    </div>
  );
}
