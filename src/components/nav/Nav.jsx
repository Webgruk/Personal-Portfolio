import React, { useState } from "react";
import "./nav.css";
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav id="nav">
      <a
        href="#"
        className={activeNav === "#" ? "active" : " "}
        onClick={() => setActiveNav("#")}
      >
        <i class="fa-solid fa-house"></i>
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : " "}
      >
        <i class="fa-solid fa-user"></i>
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : " "}
      >
        <i class="fa-solid fa-scroll-torah"></i>
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : " "}
      >
        <i class="fa-solid fa-hand-holding-heart"></i>
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : " "}
      >
        <i class="fa-solid fa-address-card"></i>
      </a>
    </nav>
  );
};

export default Nav;
