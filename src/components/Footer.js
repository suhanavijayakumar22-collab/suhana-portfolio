import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/suhanavijayakumar22-collab" target="_blank" rel="noreferrer">
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/suhana-vijayakumar-501ba4336/?skipRedirect=true" target="_blank" rel="noreferrer">
          <FaLinkedin size={24} />
        </a>
        <a href="https://www.instagram.com/suhaa_vijayy._?igsh=MXM4enVsajNyMWlzdg%3D%3D&utm_source=qr" target="_blank" rel="noreferrer">
          <FaInstagram size={24} />
        </a>
      </div>
      <p>© 2026 Suhana Vijayakumar</p>
    </footer>
  );
};

export default Footer;