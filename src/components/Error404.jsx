import React from "react";
import error404 from "../img/Error404.svg";
import "../sass/error404.scss";
import { useTranslation } from "react-i18next";

export default function Error404() {
  const { t } = useTranslation();

  return (
    <div className="error-page">
      <a className="error--link" href="/">
        {t("missing")}
      </a>
      <img className="error--svg" src={error404} alt="pussycat" />
    </div>
  );
}
