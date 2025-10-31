import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './navigation.css'

const Navigation = () => {
  const navigate = useNavigate()
  const location = useLocation()
  
  const isEntrancePage = location.pathname === '/'
  const isLoginPage = location.pathname === '/login'
  const isEcosystemPage = location.pathname === '/ecosystem'

  return (
    <nav className="main-navigation">
      {/* Left Section - Different content based on page */}
      <div className="left-section">
        {/* Back button shows on login and ecosystem pages */}
        {(isLoginPage || isEcosystemPage) && (
          <button className="back-button" onClick={() => navigate('/')}>
            ← Back to Entrance
          </button>
        )}
        
        {/* ROC number only shows on entrance page */}
        {isEntrancePage && (
          <div className="rc-number">
            RC. NO - 8956498
          </div>
        )}
      </div>
      
      {/* Right Section - Different buttons based on page */}
      <div className="right-section">
        {/* On entrance and login pages: About & Contact */}
        {(isEntrancePage || isLoginPage) && (
          <>
            <button className="nav-link" onClick={() => navigate('/about')}>About</button>
            <button className="nav-link" onClick={() => navigate('/contact')}>Contact</button>
          </>
        )}
        
        {/* On ecosystem page: Profile & Settings icons */}
        {isEcosystemPage && (
          <>
            <button className="nav-icon profile-icon">
              👤
            </button>
            <button className="nav-icon settings-icon">
              ⚙️
            </button>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navigation
