import React from "react";
import "../sass/projects.scss";
import "../sass/projectsImgs.scss";
import Project1 from "../subComponnents/Project1";
import Project2 from "../subComponnents/Project2";
import Project3 from "../subComponnents/Project3";
import Project4 from "../subComponnents/Project4";

export default function Projects() {
  return (
    <section className="pp-container" id="projects">
      <h2>Projects</h2>
      <div className="projects">
        <Project1 />
        <Project2 />
        <Project3 />
        <Project4 />
      </div>
    </section>
  );
}
