import React from 'react'
import ReactDOM from 'react-dom/client'
import './main-app.css'

const MainApp = () => {
  const goToEntrance = () => {
  // Clear any existing React roots
  const existingRoot = document.getElementById("root");
  if (existingRoot) {
    existingRoot.innerHTML = "";
  }
    window.location.href = '/'
  }

  return (
    <div className="main-container">
      {/* Back to entrance button */}
      
      {/* Header with ENHANCED microchip logo and title */}
      <div className="header-section">
        <img src="/es-logo.svg" alt="eS Logo" className="logo" />
        <h1 className="main-title">eSTech Systems</h1>
      </div>
      
      <div style={{ textAlign: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <p className="subtitle">
          Architecting the core infrastructure for a new digital era
        </p>
        
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
          
          <div className="ecosystem-card">
            <h3 className="card-title">eSBuild</h3>
            <p>Modern construction, real estate development, and smart home automation systems for future cities.</p>
          </div>
        </div>

        <div className="cta-section">
          <h2 className="cta-title">Join the Digital Revolution</h2>
          <form className="email-form">
            <input 
              type="email" 
              placeholder="Enter your email for exclusive access"
              className="email-input"
            />
            <button type="submit" className="cyber-button">
              Get Early Access
            </button>
          </form>
        </div>

        <div className="footer">
          <p className="contact-info">
            Contact: {' '}
            <a href="mailto:godwin.author@estech.cloud" className="contact-link">
              godwin.author@estech.cloud
            </a>
          </p>
          <p className="parent-brand">A G9TE WORLD Enterprise</p>
          <p className="copyright">© 2025 eSTech Systems. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<MainApp />)
