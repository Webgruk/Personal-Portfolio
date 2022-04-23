import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <h4>Get In Touch</h4>
      <h1>Contact Me</h1>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <i class="fa-solid fa-envelope contact-icon"></i>
            <h3>Email</h3>
            <h5>dummyemail@gmail.com</h5>
            <a href="mailto:immanuelajimah@mail.com " target="_blank ">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <i class="fa-brands fa-whatsapp contact-icon"></i>
            <h3>Whatsapp</h3>
            <h5>+2347016416255</h5>
            <a
              href="https://api.whatsapp.com/send?=phone+2347016416255"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>

        {/* FORM */}

        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required="required"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required="required"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required="required"
          ></textarea>
          <button type="submit " className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
