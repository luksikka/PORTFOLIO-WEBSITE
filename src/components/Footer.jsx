import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo gradient-text">Mr. Shalashian</h3>
            <p className="footer-tagline">Business Consultant & Auditor</p>
            <p className="footer-description">
              Expert business consulting, audit services, and tax advisory for your success.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Projects</h4>
            <ul className="footer-links">
              <li><a href="#projects">Tax Services</a></li>
              <li><a href="#projects">Audit Services</a></li>
              <li><a href="#projects">Company Registration</a></li>
              <li><a href="#projects">Business License</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-social">
              <a href="#" className="footer-social-link" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="#" className="footer-social-link" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="#" className="footer-social-link" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#contact" className="footer-social-link" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
            <p className="footer-contact-info">
              Email: shalashian@email.com<br />
              Phone: +1 (555) 123-4567
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Mr. Shalashian. All rights reserved.
          </p>
          <p className="footer-made-with">
            Made with <FaHeart className="heart-icon" /> by Kiro AI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
