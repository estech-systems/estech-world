import React from 'react'
import { useNavigate } from 'react-router-dom'
import './main-app.css'

const MainApp = () => {
  const navigate = useNavigate()

  const apps = [
    {
      id: 'espay',
      name: 'eSPay',
      description: 'Digital Payment System',
      route: '/espay'
    },
    {
      id: 'essecure', 
      name: 'eSSecure',
      description: 'Security & Identity',
      route: '/essecure'
    },
    {
      id: 'eslearn',
      name: 'eSLearn',
      description: 'Tech Education', 
      route: '/eslearn'
    },
    {
      id: 'esbuild',
      name: 'eSBuild',
      description: 'Construction & Real Estate',
      route: '/esbuild'
    },
    {
      id: 'esgadget',
      name: 'eSGadget', 
      description: 'Smart Gadgets',
      route: '/esgadget'
    },
    {
      id: 'esentertainment',
      name: 'eSEntertainment',
      description: 'Digital Entertainment',
      route: '/esentertainment'
    }
  ]

  const handleAppClick = (app) => {
    navigate(app.route)
  }

  return (
    <div className="main-container">
      {/* Cyber Grid Background */}
      <div className="cyber-grid"></div>

      {/* Header Section */}
      <div className="header-section">
        <img src="/es-logo.svg" alt="eS Logo" className="logo" />
        <h1 className="main-title">eSTech Ecosystem</h1>
        <p className="subtitle">Your Digital Solution's</p>
      </div>

      {/* App Grid */}
      <div className="app-grid-container">
        <div className="app-grid">
          {apps.map((app) => (
            <div 
              key={app.id}
              className="app-card"
              onClick={() => handleAppClick(app)}
            >
              <div className="app-icon">
                <img src="/es-logo.svg" alt={app.name} className="app-logo" />
              </div>
              <h3 className="app-name">{app.name}</h3>
              <p className="app-description">{app.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <p className="contact-info">
          Contact: {' '}
          <a href="mailto:info@estech.cloud" className="contact-link">
            info@estech.cloud
          </a>
        </p>
        <p className="parent-brand">A G9TE WORLD Enterprise</p>
        <p className="copyright">© 2025 eSTech Systems. All rights reserved.</p>
      </div>
    </div>
  )
}

export default MainApp




