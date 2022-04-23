import React from "react";
import "./experience.css";
const Experience = () => {
  return (
    <section id="experience">
      <h4 className="tech">My Tech Stack</h4>
      <h1>And Experience</h1>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <i class="fa-solid fa-circle-check experience__details-icon green"></i>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <i class="fa-solid fa-circle-check experience__details-icon green"></i>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <i class="fa-solid fa-circle-check experience__details-icon green"></i>
              <div>
                <h4>JAVASCRIPT</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <i class="fa-solid fa-circle-check experience__details-icon green"></i>
              <div>
                <h4>Jquery</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <i class="fa-solid fa-circle-check experience__details-icon green"></i>
              <div>
                <h4>MATERIAL UI</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <i class="fa-solid fa-circle-check experience__details-icon green"></i>
              <div>
                <h4>REACTJS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <i class="fa-solid fa-circle-check experience__details-icon green green"></i>
              <div>
                <h4>BOOTSTRAP & SCSS</h4>
                <small className="textlight">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* ==============END OF FRONTEND================= */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <i class="fa-solid fa-circle-check experience__details-icon green"></i>
              <div>
                <h4>NODEJS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <i class="fa-solid fa-circle-check experience__details-icon blue"></i>
              <div>
                <h4>MONGODB</h4>
                <small className="text-light">Intermidate</small>
              </div>
            </article>
            <article className="experience__details">
              <i class="fa-solid fa-circle-check experience__details-icon green"></i>
              <div>
                <h4>REDUX</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <i class="fa-solid fa-circle-check experience__details-icon green"></i>
              <div>
                <h4>FIRE BASE</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <i class="fa-solid fa-circle-check experience__details-icon red"></i>
              <div>
                <h4>PYTHON</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <i class="fa-solid fa-circle-check experience__details-icon red"></i>
              <div>
                <h4>DJANGO</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
