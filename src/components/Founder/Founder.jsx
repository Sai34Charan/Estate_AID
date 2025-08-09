import React from 'react';
import './Founder.css';
import profileImg from '../../assets/profile pic.png';

const Founder = () => (
  <section id="founder" className="founder">
    <div className="container">
      <h2 className="section-title">About the Founder</h2>

      <div className="founder-wrap">
        <img src={profileImg} alt="Gopisetty Sai Charan" className="founder-photo" />
        <div className="founder-bio">
          <h3>Gopisetty Sai Charan</h3>
          <p>
            Frontend Web Developer and aspiring Data Scientist, focused on building fast, accessible, and
            intelligent web applications that help investors make better decisions.
          </p>
          <div className="social-links">
            <a href="https://github.com/Sai34Charan" target="_blank" rel="noopener noreferrer" aria-label="GitHub">🐙 GitHub</a>
            <a href="https://www.linkedin.com/in/saicharangopisetty/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">🔗 LinkedIn</a>
            <a href="mailto:saicharangopisetty23@gmail.com" aria-label="Email">✉️ Email</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Founder;


