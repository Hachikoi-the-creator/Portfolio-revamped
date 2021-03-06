import React from "react";
import { useTranslation } from "react-i18next";

export default function Desc2() {
  const { t } = useTranslation();

  return (
    <div className="desc2">
      <h3>{t("project 2 title")}</h3>
      <div className="tech-stack">
        <span className="tech sol">Solidity</span>
        <span className="tech web3">Web3uikit</span>
        <span className="tech moralis">Moralis</span>
        <span className="tech css">CSS</span>
        <span className="tech react">React</span>
        <span className="tech js">JavaScript</span>
      </div>
      <p>{t("project 2 desc")}</p>
    </div>
  );
}
