import React from "react";
import { useTranslation } from "react-i18next";

export default function Desc3() {
  const { t } = useTranslation();

  return (
    <div className="desc3">
      <h3>{t("project 3 title")}</h3>
      <div className="tech-stack">
        <span className="tech sol">Solidity</span>
        <span className="tech css">CSS</span>
        <span className="tech react">React</span>
        <span className="tech js">JavaScript</span>
      </div>
      <p>{t("project 3 desc")}</p>
    </div>
  );
}
