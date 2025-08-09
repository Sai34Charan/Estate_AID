import React, { useEffect, useRef } from 'react';
import './Features.css';

const Features = () => {
  const featuresRef = useRef(null);

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

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const featureList = [
    {
      icon: '💡',
      title: "AI-Powered Deal Scoring",
      description: "Our advanced AI analyzes thousands of data points to score and rank investment deals by profitability, risk, and timeline.",
      stats: { accuracy: "95%", deals: "10K+" },
      color: "var(--primary-color)"
    },
    {
      icon: '📊',
      title: "Automated Underwriting",
      description: "Instantly calculate key metrics like NOI, Cap Rate, IRR, and Cash-on-Cash to make informed decisions faster.",
      stats: { speed: "2min", metrics: "15+" },
      color: "var(--success-color)"
    },
    {
      icon: '📈',
      title: "Predictive Analytics",
      description: "Forecast rent growth and future yield using advanced economic and migration data models.",
      stats: { accuracy: "92%", forecast: "5yr" },
      color: "var(--warning-color)"
    },
    {
      icon: '💎',
      title: "Undervalued Property Detection",
      description: "Leverage machine learning to scan MLS, off-market, and tax records to find mispriced and hidden gems.",
      stats: { properties: "50K+", savings: "15%" },
      color: "var(--primary-hover)"
    },
    {
      icon: '🏢',
      title: "Zoning & Entitlement Analysis",
      description: "Identify up-zoning arbitrage opportunities by automatically analyzing complex zoning and entitlement data.",
      stats: { zones: "100+", cities: "25+" },
      color: "var(--secondary-color)"
    },
    {
      icon: '⚠️',
      title: "Distressed Asset Identification",
      description: "Find motivated sellers by flagging properties with liens, mortgage issues, or code violations.",
      stats: { assets: "5K+", deals: "500+" },
      color: "var(--error-color)"
    }
  ];

  return (
    <section id="features" className="features" ref={featuresRef}>
      <div className="container">
        <h2 className="section-title">Revolutionizing Real Estate Investment</h2>
        <p className="section-subtitle">
          Estate AID provides a suite of powerful, AI-driven tools designed to give you a competitive edge in the real estate market.
        </p>
        
        <div className="features-grid">
          {featureList.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card"
              style={{ '--feature-color': feature.color }}
            >
              <div className="feature-icon">
                <span className="icon-emoji">{feature.icon}</span>
                <div className="icon-glow"></div>
              </div>
              
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                
                <div className="feature-stats">
                  {Object.entries(feature.stats).map(([key, value]) => (
                    <div key={key} className="stat-item">
                      <span className="stat-value">{value}</span>
                      <span className="stat-label">{key}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="feature-hover">
                <div className="hover-content">
                  <span className="hover-icon">→</span>
                  <span className="hover-text">Learn More</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="features-cta">
          <div className="cta-content">
            <h3>Ready to Transform Your Investment Strategy?</h3>
            <p>Join thousands of investors who are already using Estate AID to make smarter decisions.</p>
            <a href="#contact" className="button button-primary">
              <span>Get Started Today</span>
              <svg className="button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17l9.2-9.2M17 17V7H7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
