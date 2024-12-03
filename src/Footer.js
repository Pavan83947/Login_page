import React from 'react';
import AboutButton from './AboutButton';
import './Footer.css';

import { FaLinkedin, FaYoutube, FaTiktok, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      {/* Left section with white background */}
      <div className="footer-left">
        <div className="about-section">
          <AboutButton />
        </div>
        <div className="social-icons">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="icon" />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="icon" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
        </div>
      </div>

      {/* Right section with colored background */}
      <div className="footer-right">
        <span>2024 All Rights Reserved</span>
        <div className="policy-links">
          <a href="/">Privacy Policy</a>
          <span>|</span>
          <a href="/">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;