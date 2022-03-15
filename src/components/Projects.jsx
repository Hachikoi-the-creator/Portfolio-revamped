import React from "react";
import "../sass/projects.scss";
import Project1 from "../subComponnents/Project1";
import Project2 from "../subComponnents/Project2";
import Project3 from "../subComponnents/Project3";
import Project4 from "../subComponnents/Project4";
import Desc1 from "../subComponnents/Desc1";
import Desc2 from "../subComponnents/Desc2";
import Desc3 from "../subComponnents/Desc3";
import Desc4 from "../subComponnents/Desc4";

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <section className="master-project">
        <Project1 />
        <Desc1 />
        <Project2 />
        <Desc2 />
        <Project3 />
        <Desc3 />
        <Project4 />
        <Desc4 />
      </section>
    </section>
  );
}