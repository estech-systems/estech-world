import React from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'

const Login = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    // Dummy login - just routes to ecosystem for now
    navigate('/ecosystem')
  }

  return (
    <div className="login-container">
      <div className="cyber-grid"></div>
      
      <div className="login-content">
        <div className="login-header">
          <img src="/es-logo.svg" alt="eS Logo" className="login-logo" />
          <h1 className="login-title">Access Ecosystem</h1>
        </div>

        <div className="login-options">
          {/* Google OAuth Button */}
          <button className="oauth-btn google-btn" onClick={handleLogin}>
            <span className="btn-icon">🔐</span>
            Continue with Google
          </button>

          {/* Manual Login Form */}
          <div className="manual-login">
            <h3>Or sign in manually</h3>
            <input type="email" placeholder="Enter your email" className="login-input" />
            <input type="password" placeholder="Enter your password" className="login-input" />
            <button className="login-submit-btn" onClick={handleLogin}>
              Login to Ecosystem
            </button>
          </div>
        </div>

        <button className="back-btn" onClick={() => navigate('/')}>
          ← Back to Home
        </button>
      </div>
    </div>
  )
}

export default Login
