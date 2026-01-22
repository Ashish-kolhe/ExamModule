import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        🎓 <span>Shree Genius It Hub</span>
      </div>

      <div className="footer-icons">
        <a href="#" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="#" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="#" aria-label="Twitter">
          <FaTwitter />
        </a>
      </div>
    </footer>
  );
};
