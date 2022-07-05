import React from "react";
import { useTranslation } from "react-i18next";

export default function Desc1() {
  const { t } = useTranslation();

  return (
    <div className="desc1">
      <h3>{t("project 1 title")}</h3>
      <div className="tech-stack">
        <span className="tech sol">Solidity</span>
        <span className="tech react">React</span>
        <span className="tech tailw">Tailwind</span>
        <span className="tech js">JavaScript</span>
      </div>
      <p>{t("project 1 desc")}</p>
    </div>
  );
}
