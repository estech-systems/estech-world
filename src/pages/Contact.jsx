import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../entrance.css'

const Contact = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const SocialIcons = {
    linkedin: (
      <svg className="social-icon-svg" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    github: (
      <svg className="social-icon-svg" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    twitter: (
      <svg className="social-icon-svg" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    ),
    instagram: (
      <svg className="social-icon-svg" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    facebook: (
      <svg className="social-icon-svg" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    )
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Static form - will be connected to backend later
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="main-container">
      <div className="cyber-grid"></div>
      
      <div className="contact-page-content">
        {/* Back Button - Fixed positioning */}

        {/* Logo */}
        <div className="logo-section">
          <img src="/es-logo.svg" alt="eSTech Systems" className="main-logo" />
        </div>

        {/* Main Content */}
        <div className="text-section">
          <h1 className="company-name">LET'S BUILD TOGETHER</h1>
          <p className="tagline">Connect With Our Team</p>
        </div>

        {/* Contact Content */}
        <div className="contact-content-wrapper">
          {/* Contact Information */}
          <div className="contact-grid">
            <div className="contact-card">
              <h3 style={{color: '#ffd700', marginBottom: '1rem', fontFamily: "'Courier New', 'SF Mono', Monaco, 'Cascadia Code', monospace"}}>General Inquiries</h3>
              <a href="mailto:info@estech.cloud" style={{color: '#00f5ff', textDecoration: 'none', fontFamily: "'Courier New', 'SF Mono', Monaco, 'Cascadia Code', monospace"}}>info@estech.cloud</a>
            </div>
            
            <div className="contact-card">
              <h3 style={{color: '#ffd700', marginBottom: '1rem', fontFamily: "'Courier New', 'SF Mono', Monaco, 'Cascadia Code', monospace"}}>Technical Support</h3>
              <a href="mailto:support@estech.cloud" style={{color: '#00f5ff', textDecoration: 'none', fontFamily: "'Courier New', 'SF Mono', Monaco, 'Cascadia Code', monospace"}}>support@estech.cloud</a>
            </div>

            <div className="contact-card">
              <h3 style={{color: '#ffd700', marginBottom: '1rem', fontFamily: "'Courier New', 'SF Mono', Monaco, 'Cascadia Code', monospace"}}>Contact Founder</h3>
              <a href="mailto:support@estech.cloud" style={{color: '#00f5ff', textDecoration: 'none', fontFamily: "'Courier New', 'SF Mono', Monaco, 'Cascadia Code', monospace"}}>godwin.author@estech.cloud</a>
            </div>

            <div className="contact-card">
              <h3 style={{color: '#ffd700', marginBottom: '1rem', fontFamily: "'Courier New', 'SF Mono', Monaco, 'Cascadia Code', monospace"}}>Headquarters</h3>
              <p style={{color: 'rgba(255, 255, 255, 0.9)', margin: 0, fontFamily: "'Courier New', 'SF Mono', Monaco, 'Cascadia Code', monospace"}}>Gbaga, Ikorodu, Lagos, Nigeria</p>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{background: 'rgba(0, 245, 255, 0.1)', padding: '2rem', borderRadius: '10px', border: '1px solid #00f5ff', marginBottom: '2rem', fontFamily: "'Courier New', 'SF Mono', Monaco, 'Cascadia Code', monospace"}}>
            <h2 style={{color: '#ffd700', textAlign: 'center', marginBottom: '1.5rem', fontFamily: "'Courier New', 'SF Mono', Monaco, 'Cascadia Code', monospace"}}>Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="login-input"
                style={{marginBottom: '1rem', fontFamily: "'Courier New', 'SF Mono', Monaco, 'Cascadia Code', monospace"}}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="login-input"
                style={{marginBottom: '1rem', fontFamily: "'Courier New', 'SF Mono', Monaco, 'Cascadia Code', monospace"}}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                className="login-input"
                style={{marginBottom: '1.5rem', minHeight: '120px', resize: 'vertical', fontFamily: "'Courier New', 'SF Mono', Monaco, 'Cascadia Code', monospace"}}
                required
              />
              <button type="submit" className="enter-btn" style={{width: '100%', fontFamily: "'Courier New', 'SF Mono', Monaco, 'Cascadia Code', monospace"}}>
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="social-icons">
          <div className="social-icons-title" style={{fontFamily: "'Courier New', 'SF Mono', Monaco, 'Cascadia Code', monospace"}}>Connect With Us</div>
          <div className="social-icons-grid">
            <a href="https://linkedin.com/company/estech-systems" className="social-icon-link" target="_blank" rel="noopener noreferrer">
              {SocialIcons.linkedin}
            </a>
            <a href="https://github.com/estech-systems" className="social-icon-link" target="_blank" rel="noopener noreferrer">
              {SocialIcons.github}
            </a>
            <a href="https://twitter.com/estechsystems" className="social-icon-link" target="_blank" rel="noopener noreferrer">
              {SocialIcons.twitter}
            </a>
            <a href="https://instagram.com/estechsystems" className="social-icon-link" target="_blank" rel="noopener noreferrer">
              {SocialIcons.instagram}
            </a>
            <a href="https://facebook.com/estechsystems" className="social-icon-link" target="_blank" rel="noopener noreferrer">
              {SocialIcons.facebook}
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="footer">
          <p className="copyright" style={{fontFamily: "'Courier New', 'SF Mono', Monaco, 'Cascadia Code', monospace"}}>© 2025 eSTech Systems.. RC. NO - 8956498 <br></br>All rights reserved.</p> 
        </div>
      </div>
    </div>
  )
}

export default Contact












