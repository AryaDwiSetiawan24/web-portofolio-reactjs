import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

import Picture from "../../../assets/a_raccoon.png";
import "./footer.css";

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const email = "aryadwis24@gmail.com";

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false); // Mengubah status kembali ke false setelah 3 detik
    }, 3000); // 3 detik
  };

  return (
    <section id="footer">
      <div className="footerText">
        <a href="#home">
          <img src={Picture} alt="logo" />
        </a>
        <span>Come Join Us!</span>
      </div>
      <div className="footerLink">
        {/* <a href="mailto:aryadwis24@gmail.com?cc=&bcc=&subject=&body=" target="_blank">Email me</a> */}
        <CopyToClipboard text={email} onCopy={handleCopy}>
          <a className="copy-email">Email me</a>
        </CopyToClipboard>
        <Link to="https://wa.me/6285172455192" target="_blank">
          Whatsapp me
        </Link>
        <Link to="/about-me">
          More Contact <i className="uil uil-arrow-up-right"></i>
        </Link>
      </div>
      <div className="footerSosmed">
        <a
          href="https://github.com/AryaDwiSetiawan24"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="uil uil-github" /> Github
        </a>
        <a
          href="https://www.instagram.com/arya8661/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="uil uil-instagram" /> Instagram
        </a>
        <a
          href="https://x.com/AryaDS_24"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="uil uil-twitter" /> Twitter
        </a>
        <br />
      </div>
      {copied && <span className="copied-text">Email disalin!</span>}
    </section>
  );
};

export default Footer;
