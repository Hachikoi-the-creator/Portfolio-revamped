import React from "react";
import { useTranslation } from "react-i18next";

export default function Desc1() {
  const { t } = useTranslation();

  return (
    <div className="desc1">
      <h3>{t("project 1 title")}</h3>
      <div className="tech-stack">
        <span className="tech sass">SASS</span>
        <span className="tech css">CSS</span>
        <span className="tech react">React</span>
        <span className="tech html">HTML</span>
        <span className="tech ts">TypeScript</span>
        <span className="tech js">JavaScript</span>
      </div>
      <p>{t("project 1 desc")}</p>
    </div>
  );
}
