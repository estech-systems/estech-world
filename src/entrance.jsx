import React from 'react'
import { useNavigate } from 'react-router-dom'
import './entrance.css'

const EntranceExperience = () => {
  const navigate = useNavigate()

  const goToLogin = () => {
    navigate('/login')
  }

  return (
    <div className="entrance-container">
      <div className="cyber-grid"></div>

      <div className="entrance-content">
        <div className="logo-section">
          <img src="/es-logo.svg" alt="eS Logo" className="main-logo" />
        </div>

        <div className="text-section">
          <h1 className="company-name">Elite Solution</h1>
          <h1 className="company-name">Technology Systems</h1>
          <p className="tagline">Architecting Tomorrow&apos;s Digital Infrastructure</p>
        </div>

        <button className="enter-btn" onClick={goToLogin}>
          Login to Ecosystem
        </button>
      </div>

      <div className="entrance-footer">
        <p>A G9TE WORLD Enterprise</p>
      </div>
    </div>
  )
}

export default EntranceExperience
