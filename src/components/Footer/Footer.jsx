import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="container footer-grid">
      <div>
        <h4>Estate AID</h4>
        <p>AI-powered insights to make smarter real estate investments.</p>
      </div>
      <div>
        <h5>Quick Links</h5>
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#dashboard">Dashboard</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div>
        <h5>Contact</h5>
        <ul>
          <li><a href="mailto:saicharangopisetty23@gmail.com">saicharangopisetty23@gmail.com</a></li>
          <li><a href="https://www.linkedin.com/in/saicharangopisetty/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com/Sai34Charan" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">© {new Date().getFullYear()} Gopisetty Sai Charan. All rights reserved.</div>
  </footer>
);

export default Footer;


