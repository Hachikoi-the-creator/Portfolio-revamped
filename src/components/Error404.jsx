import React from "react";
import error404 from "../img/Error404.svg";
import "../sass/error404.scss";

export default function Error404() {
  return (
    <div className="error-page">
      <a className="error--link" href="/">
        Back Home
      </a>
      <img className="error--svg" src={error404} alt="pussycat" />
    </div>
  );
}
