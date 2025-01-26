import React from "react";
import { Link } from "react-router-dom";
import Picture from "../../../assets/a_raccoon.png";
import "./footer.css";

const Footer = () => {
  return (
    <section id="footer">
      <div className="footerText">
        <a href="#home"><img src={Picture} alt="logo" /></a>
        <span>Come Join Us!</span>
      </div>
      <div className="footerLink">
        <a href="#">Email me</a>
        <a href="#">Whatsapp me</a>
        <Link to="/about-me">More Contact</Link>
      </div>
      <div className="footerSosmed">
        <a href="#">
          <i class="uil uil-facebook" /> Facebook
        </a>
        <a href="#"><i class="uil uil-instagram" /> Instagram</a>
        <a href="#"><i class="uil uil-twitter"/> Twitter</a>
      </div>
    </section>
  );
};

export default Footer;
