import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesOptions from "../../particles.json";

// import React from "react";
import CTA from "./CTA";
import "./header.css";
import Emma from "../../assets/ajimahPic.jpg";
import Socials from "./Socials";
const Header = () => {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);
  return (
    <header>
      <Particles options={particlesOptions} init={particlesInit} />

      <div className="container header__container">
        <h3>Hello I'm</h3>
        <h1>Immanuel Ajimah</h1>
        <h3 className="text-light">Fullstack MERN Developer</h3>
        {/* //////////////////*/}
        <CTA />
        {/* /////// */}
        <Socials />
        {/* /////////////////// */}
        <div className="me">
          <img src={Emma} alt="" />
        </div>
        {/* ////////// */}

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
