import React from "react";
import googleProject from "../img/google-mod.webp";

export default function Project4() {
  return (
    <>
      <div className="desc project4 flex-project">
        <h3>Cheat Calculator</h3>
        <div className="tech-stack">
          <span className="tech css">CSS</span>
          <span className="tech react">React</span>
          <span className="tech html">HTML</span>
          <span className="tech ts">TypeScript</span>
        </div>
        <p>
          The hardest thing here was to link all he buttons and make them work
          as expected in vanilla JS, gave up and decided to just learn TS
          instead. best desicion ever made
        </p>
        <div className="source">
          <a href="#">
            <span>Source Code</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              {/* <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
              <path d="M414.8 40.79L286.8 488.8C281.9 505.8 264.2 515.6 247.2 510.8C230.2 505.9 220.4 488.2 225.2 471.2L353.2 23.21C358.1 6.216 375.8-3.624 392.8 1.232C409.8 6.087 419.6 23.8 414.8 40.79H414.8zM518.6 121.4L630.6 233.4C643.1 245.9 643.1 266.1 630.6 278.6L518.6 390.6C506.1 403.1 485.9 403.1 473.4 390.6C460.9 378.1 460.9 357.9 473.4 345.4L562.7 256L473.4 166.6C460.9 154.1 460.9 133.9 473.4 121.4C485.9 108.9 506.1 108.9 518.6 121.4V121.4zM166.6 166.6L77.25 256L166.6 345.4C179.1 357.9 179.1 378.1 166.6 390.6C154.1 403.1 133.9 403.1 121.4 390.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4L121.4 121.4C133.9 108.9 154.1 108.9 166.6 121.4C179.1 133.9 179.1 154.1 166.6 166.6V166.6z" />
            </svg>
          </a>
        </div>
      </div>
      <a href="#" className="img project4" target="_blank">
        <img src={googleProject} alt="img" />
      </a>
    </>
  );
}
