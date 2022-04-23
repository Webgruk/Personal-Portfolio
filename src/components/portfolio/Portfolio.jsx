import React from "react";
import "./portfolio.css";
import Dash from "../../assets/dash.jpg";

const data = [
  {
    id: 1,
    image: Dash,
    title: "Project Name",
    github: "http://github.com",
    demo: "http://demo",
  },
  {
    id: 2,
    image: Dash,
    title: "Project Name",
    github: "http://github.com",
    demo: "http://demo",
  },
  {
    id: 3,
    image: Dash,
    title: "Project Name",
    github: "http://github.com",
    demo: "http://demo",
  },
  {
    id: 4,
    image: Dash,
    title: "Project Name",
    github: "http://github.com",
    demo: "http://demo",
  },
  {
    id: 5,
    image: Dash,
    title: "Project Name",
    github: "http://github.com",
    demo: "http://demo",
  },
  {
    id: 6,
    image: Dash,
    title: "Project Name",
    github: "http://github.com",
    demo: "http://demo",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h4>My Recent Work</h4>
      <h1>Portfolio</h1>
      <div className="container portfolio__container">
        {data.map(({ id, title, image, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>This is a portfolio item title</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn " target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
