import React from "react";
import "../sass/navbar.scss";

export default function Navbar() {
  const [burger, setBurger] = React.useState(false);

  return (
    <div>
      {/* BURGER */}
      <div
        id="test"
        className={`menu-btn ${burger ? "open" : ""}`}
        onClick={() => setBurger(!burger)}
      >
        <div className="menu-btn__burger"></div>
      </div>

      {/* NAVBAR */}
      <ul className={`navbar ${burger ? "" : "hidde-left"}`}>
        <li className="logo">
          <a onClick={() => setBurger(false)} href="#top">
            <img
              src="pussycat"
              alt="cute sewing logo whit a heart"
              className="page-logo"
            />
          </a>
        </li>
        <li>
          <a onClick={() => setBurger(false)} href="#">
            Almoadas
          </a>
        </li>
        <li>
          <a onClick={() => setBurger(false)} href="#">
            Macrame
          </a>
        </li>
        <li>
          <a onClick={() => setBurger(false)} href="#">
            Uniformes
          </a>
        </li>
        <li>
          <a onClick={() => setBurger(false)} href="#">
            Camino de mesa
          </a>
        </li>
      </ul>
    </div>
  );
}
