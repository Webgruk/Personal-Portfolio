import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer id="#">
      <a href="" className="footer__logo">
        Orenda
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonial</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="instagram">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="twitter">
          <i class="fa-brands fa-twitter"></i>
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; All right reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
