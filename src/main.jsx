import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

const CyberLanding = () => {
  return (
    <div className="cyber-grid">
      <div className="hero-section">
        <div className="glitch-container">
          <h1 className="glitch-text" data-text="eSTech Systems">
            eSTech Systems
          </h1>
        </div>
        
        <p className="subtitle">
          Architecting the core infrastructure for a new digital era
        </p>
        
        <div className="cyber-loader">
          <div className="loader-progress"></div>
        </div>
        
        <div className="ecosystem-grid">
          <div className="ecosystem-card">
            <h3 className="card-title">eSPay</h3>
            <p>Next-generation payment infrastructure revolutionizing digital transactions across Africa.</p>
          </div>
          
          <div className="ecosystem-card">
            <h3 className="card-title">eSSecure</h3>
            <p>Enterprise-grade security systems protecting the future of digital identity and data.</p>
          </div>
          
          <div className="ecosystem-card">
            <h3 className="card-title">eSLearn</h3>
            <p>Empowering the next generation of African tech talent through cutting-edge education.</p>
          </div>
        </div>
        
        <div className="cta-section">
          <h2 style={{ marginBottom: '2rem', color: '#ffd700' }}>
            Join the Digital Revolution
          </h2>
          <form className="email-form">
            <input 
              type="email"
              placeholder="Enter your email for exclusive access"
              className="email-input"
              required
            />
            <button type="submit" className="cyber-button">
              Get Early Access
            </button>
          </form>
        </div>
        
        <div className="footer">
          <p>
            Contact: {' '}
            <a href="mailto:godwin.author@estech.cloud" style={{ color: '#00f5ff' }}>
              godwin.author@estech.cloud
            </a>
          </p>
          <p className="parent-brand">A G9TE WORLD Enterprise</p>
          <p style={{ marginTop: '1rem', opacity: '0.7' }}>
            © 2025 eSTech Systems. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CyberLanding />);
