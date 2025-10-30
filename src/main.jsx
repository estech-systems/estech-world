import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const App = () => {
  return (
    <div style={{
      background: '#0a0a0f',
      color: '#00f5ff',
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Bold eS Logo Header - Joined Together */}
      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <img src="/es-logo.svg" alt="eS Logo" style={{ height: '60px' }} />
      </div>
      
      <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: '600' }}>eSTech-Systems</h1>
        <p style={{ fontSize: '1.2rem', color: '#ffd700', marginBottom: '2rem' }}>
          Architecting the core infrastructure for a new digital era
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', margin: '2rem 0' }}>
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '8px', border: '1px solid #00f5ff' }}>
            <h3 style={{ color: '#ffd700' }}>eSPay</h3>
            <p>Next-generation payment infrastructure</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '8px', border: '1px solid #00f5ff' }}>
            <h3 style={{ color: '#ffd700' }}>eSSecure</h3>
            <p>Enterprise-grade security systems</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '8px', border: '1px solid #00f5ff' }}>
            <h3 style={{ color: '#ffd700' }}>eSLearn</h3>
            <p>Cutting-edge education platform</p>
          </div>
        </div>

        <div style={{ margin: '2rem 0' }}>
          <h2 style={{ color: '#ffd700', marginBottom: '1rem', fontWeight: '600' }}>Join the Digital Revolution</h2>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <input 
              type="email" 
              placeholder="Enter your email"
              style={{ padding: '1rem', border: '1px solid #00f5ff', background: 'rgba(0,0,0,0.5)', color: 'white', borderRadius: '8px', minWidth: '250px' }}
            />
            <button style={{ padding: '1rem 2rem', background: 'linear-gradient(45deg, #00f5ff, #00ff41)', border: 'none', borderRadius: '8px', color: '#0a0a0f', fontWeight: '600' }}>
              Get Early Access
            </button>
          </div>
        </div>

        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(0,245,255,0.3)' }}>
          <p>Contact: <a href="mailto:godwin.author@estech.cloud" style={{ color: '#00f5ff' }}>godwin.author@estech.cloud</a></p>
          <p style={{ color: '#ffd700', margin: '0.5rem 0', fontWeight: '600' }}>A G9TE WORLD Enterprise</p>
          <p style={{ opacity: '0.7' }}>© 2025 eSTech-Systems.<br></br> All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
