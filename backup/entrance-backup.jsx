import React from 'react'
import ReactDOM from 'react-dom/client'
import './entrance.css'

const EntranceExperience = () => {
  const enterSite = () => {
    window.location.href = '/main.html'
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
          <p className="tagline">Architecting Tomorrow's Digital Infrastructure</p>
        </div>

        <button className="enter-btn" onClick={enterSite}>
          Enter Ecosystem
        </button>
      </div>

      <div className="entrance-footer">
        <p>A G9TE WORLD Enterprise</p>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<EntranceExperience />)
