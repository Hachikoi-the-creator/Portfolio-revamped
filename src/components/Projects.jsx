import React from "react";
import "../sass/projects.scss";
import googleProject from "../img/google-mod.webp";
import blackjackProject from "../img/blackjack-game.webp";

export default function Projects() {
  return (
    <>
      <h2>Projects</h2>
      <section className="projects">
        {/* project 1 */}
        <div className="desc project1">
          <h3>Google copy</h3>
          <span className="tech css">CSS</span>
          <span className="tech sass">SASS</span>
          <span className="tech react">React</span>
          <span className="tech react">HTML</span>
          <span className="tech js">JavaScript</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            animi ipsa nobis sequi, hic sit totam perferendis. Sed animi quidem
            laboriosam.
          </p>
        </div>
        <a href="#" className="img project1" target="_blank">
          <img src={googleProject} alt="img" />
        </a>
        {/* project 2 */}
        <div className="desc project2">
          <h3>Google 2</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            animi ipsa nobis sequi, hic sit totam perferendis. Sed animi quidem
            laboriosam.
          </p>
        </div>
        <a href="#" className="img project2" target="_blank">
          <img src={blackjackProject} alt="img" />
        </a>
        {/* project 3 */}
        <div className="desc project3">
          <h3>Google 3</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            animi ipsa nobis sequi, hic sit totam perferendis. Sed animi quidem
            laboriosam.
          </p>
        </div>
        <a href="#" className="img project3" target="_blank">
          <img src={googleProject} alt="img" />
        </a>
        {/* project 4 */}
        <div className="desc project4">
          <h3>Google 4</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            animi ipsa nobis sequi, hic sit totam perferendis. Sed animi quidem
            laboriosam.
          </p>
        </div>
        <a href="#" className="img project4" target="_blank">
          <img src={googleProject} alt="img" />
        </a>
      </section>
    </>
  );
}
