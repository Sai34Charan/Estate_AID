import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../../assets/logo-png.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, hash) => {
    e.preventDefault();
    const targetId = hash.replace('#', '');
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <a href="#home" className="logo" onClick={(e) => handleNavClick(e, '#home')}>
            <img src={logo} alt="Estate AID" className="logo-img" />
            <span className="logo-text">Estate AID</span>
          </a>

          <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            <li><a href="#features" onClick={(e) => handleNavClick(e, '#features')}>Features</a></li>
            <li><a href="#dashboard" onClick={(e) => handleNavClick(e, '#dashboard')}>Dashboard</a></li>
            <li><a href="#blog" onClick={(e) => handleNavClick(e, '#blog')}>Blog</a></li>
            <li><a href="#founder" onClick={(e) => handleNavClick(e, '#founder')}>Founder</a></li>
            <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a></li>
          </ul>

          <button
            className={`menu-toggle ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
