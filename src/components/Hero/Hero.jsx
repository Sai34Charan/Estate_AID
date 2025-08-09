import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-background">
        <div className="hero-particles"></div>
        <div className="hero-gradient"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="hero-title-line">Welcome to</span>
              <span className="hero-title-highlight">Estate AID</span>
            </h1>
            
            <p className="hero-subtitle">
              An AI-powered platform revolutionizing real estate investment through 
              advanced analytics, predictive modeling, and intelligent deal scoring.
            </p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">95%</span>
                <span className="stat-label">Accuracy Rate</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Properties Analyzed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">$2.5M</span>
                <span className="stat-label">Value Generated</span>
              </div>
            </div>
            
            <div className="hero-actions">
              <a href="#features" className="button button-primary">
                <span>Discover Features</span>
                <svg className="button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17l9.2-9.2M17 17V7H7"/>
                </svg>
              </a>
              <a href="#dashboard" className="button button-secondary">
                <span>View Dashboard</span>
                <svg className="button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="hero-card">
              <div className="card-header">
                <div className="card-icon">📊</div>
                <h3>AI Deal Scoring</h3>
              </div>
              <div className="card-content">
                <div className="score-indicator">
                  <div className="score-circle">
                    <span className="score-value">92</span>
                    <span className="score-label">Score</span>
                  </div>
                </div>
                <div className="metrics">
                  <div className="metric">
                    <span className="metric-label">ROI</span>
                    <span className="metric-value">18.5%</span>
                  </div>
                  <div className="metric">
                    <span className="metric-label">Risk</span>
                    <span className="metric-value">Low</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;
