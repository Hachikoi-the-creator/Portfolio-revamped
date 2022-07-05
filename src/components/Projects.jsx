import React from "react";
import { useTranslation } from "react-i18next";
import "../sass/projects.scss";
import Project1 from "../subComponnents/Project1";
import Project2 from "../subComponnents/Project2";
import Project3 from "../subComponnents/Project3";
import Desc1 from "../subComponnents/Desc1";
import Desc2 from "../subComponnents/Desc2";
import Desc3 from "../subComponnents/Desc3";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects">
      <h2>{t("projects main")}</h2>
      <section className="master-project">
        <Project1 />
        <Desc1 />
        <Project2 />
        <Desc2 />
        <Project3 />
        <Desc3 />
      </section>
    </section>
  );
}
