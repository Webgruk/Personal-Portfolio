import React from "react";
import Imma from "../../assets/imma.jpg";
import "./about.css";
const About = () => {
  return (
    <section id="about">
      <h4>Get To Know</h4>
      <h1>About Me</h1>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Imma} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <i class="fa-solid fa-award about__icon"></i>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <i class="fa-solid fa-users about__icon"></i>
              <h5>Clients</h5>
              <small>200+ WorldWide</small>
            </article>
            <article className="about__card">
              <i class="fa-solid fa-folder about__icon"></i>
              <h5>Projects</h5>
              <small>80+ Completed projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea
            commodi cumque nobis accusantium voluptatibus voluptates ipsam
            debitis optio magnam corporis vel vero fugiat necessitatibus
            aperiam, ab molestias perspiciatis sit.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
