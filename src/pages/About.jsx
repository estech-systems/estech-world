import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../entrance.css'

const About = () => {
  const navigate = useNavigate()

  const SocialIcons = {
    github: (
      <svg className="social-icon-svg" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    )
  }

  return (
    <div className="entrance-container">
      <div className="cyber-grid"></div>
      
      <div className="entrance-content">
        {/* Back Button - Fixed positioning */}

        {/* Logo */}
        <div className="logo-section">
          <img src="/es-logo.svg" alt="eSTech Systems" className="main-logo" />
        </div>

        {/* Main Content */}
        <div className="text-section">
          <h1 className="company-name">BUILDING THE FUTURE</h1>
          <p className="tagline">One Intelligent System at a Time</p>
        </div>

        {/* About Content */}
        <div className="app-description-section" style={{textAlign: 'left', marginBottom: '2rem', background: 'rgba(0, 245, 255, 0.1)', padding: '2rem', borderRadius: '10px', border: '1px solid #00f5ff', fontFamily: "'Courier New', 'SF Mono', Monaco, 'Cascadia Code', monospace"}}>
          <h2 style={{color: '#ffd700', textAlign: 'center', marginBottom: '1.5rem', fontFamily: "'Courier New', 'SF Mono', Monaco, 'Cascadia Code', monospace"}}>From Vision to Reality</h2>
          
          <p style={{color: 'rgba(255, 255, 255, 0.9)', marginBottom: '1rem', lineHeight: '1.6', fontFamily: "'Courier New', 'SF Mono', Monaco, 'Cascadia Code', monospace"}}>
            eSTech Systems was born from a relentless passion for innovation and a vision to create technology that truly serves people. 
            Founded by <strong style={{color: '#ffd700'}}>Godwin Wisdom Author</strong>, this journey represents over a year of dedicated development, 
            late-night coding sessions, and an unwavering commitment to building something extraordinary.
          </p>

          <p style={{color: 'rgba(255, 255, 255, 0.9)', marginBottom: '1rem', lineHeight: '1.6', fontFamily: "'Courier New', 'SF Mono', Monaco, 'Cascadia Code', monospace"}}>
            What started as a single idea has evolved into a comprehensive digital ecosystem, a living framework where 
            artificial intelligence meets human creativity, and complex systems become intuitive experiences.
          </p>

          <h3 style={{color: '#00f5ff', margin: '1.5rem 0 1rem 0', fontFamily: "'Courier New', 'SF Mono', Monaco, 'Cascadia Code', monospace"}}>Our Digital Ecosystem</h3>
          <p style={{color: 'rgba(255, 255, 255, 0.9)', marginBottom: '1rem', lineHeight: '1.6', fontFamily: "'Courier New', 'SF Mono', Monaco, 'Cascadia Code', monospace"}}>
            We've built six core platforms that work in harmony: <strong>eSPay</strong> for secure transactions, 
            <strong> eSSecure</strong> for enterprise protection, <strong>eSLearn</strong> for knowledge empowerment, 
            <strong> eSGadget</strong> for tech commerce, <strong>eSBuild</strong> for development innovation, 
            and <strong>eSEntertainment</strong> for digital experiences.
          </p>

          <h3 style={{color: '#00f5ff', margin: '1.5rem 0 1rem 0', fontFamily: "'Courier New', 'SF Mono', Monaco, 'Cascadia Code', monospace"}}>Our Philosophy</h3>
          <p style={{color: 'rgba(255, 255, 255, 0.9)', marginBottom: '1rem', lineHeight: '1.6', fontStyle: 'italic', fontFamily: "'Courier New', 'SF Mono', Monaco, 'Cascadia Code', monospace"}}>
            "Technology must serve people, not overwhelm them. Every line of code, every system deployed, 
            and every solution launched is guided by this principle."
          </p>
        </div>

        {/* Mission & Vision */}
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem'}}>
          <div style={{background: 'rgba(0, 245, 255, 0.1)', padding: '1.5rem', borderRadius: '10px', border: '1px solid #00f5ff', textAlign: 'center', fontFamily: "'Courier New', 'SF Mono', Monaco, 'Cascadia Code', monospace"}}>
            <h3 style={{color: '#ffd700', marginBottom: '1rem', fontFamily: "'Courier New', 'SF Mono', Monaco, 'Cascadia Code', monospace"}}>Our Mission</h3>
            <p style={{color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.5', fontFamily: "'Courier New', 'SF Mono', Monaco, 'Cascadia Code', monospace"}}>
              To build intelligent, secure, and scalable systems that connect people, businesses, and ideas through technology.
            </p>
          </div>
          
          <div style={{background: 'rgba(0, 245, 255, 0.1)', padding: '1.5rem', borderRadius: '10px', border: '1px solid #00f5ff', textAlign: 'center', fontFamily: "'Courier New', 'SF Mono', Monaco, 'Cascadia Code', monospace"}}>
            <h3 style={{color: '#ffd700', marginBottom: '1rem', fontFamily: "'Courier New', 'SF Mono', Monaco, 'Cascadia Code', monospace"}}>Our Vision</h3>
            <p style={{color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.5', fontFamily: "'Courier New', 'SF Mono', Monaco, 'Cascadia Code', monospace"}}>
              To become a global leader in smart system innovation, creating impact across industries and continents.
            </p>
          </div>
        </div>

        {/* GitHub Footer */}
        <div className="footer">
          <p className="entrance-footer" style={{fontFamily: "'Courier New', 'SF Mono', Monaco, 'Cascadia Code', monospace"}}>Follow Our Code Journey</p>
          <div className="social-icons-grid" style={{justifyContent: 'center', marginBottom: '1rem'}}>
            <a href="https://github.com/estech-systems" className="social-icon-link" target="_blank" rel="noopener noreferrer">
              {SocialIcons.github}
            </a>
          </div>
          <p className="copyright" style={{fontFamily: "'Courier New', 'SF Mono', Monaco, 'Cascadia Code', monospace"}}>© 2025 eSTech Systems.. RC. NO - 8956498 <br></br>All rights reserved.</p> 
        </div>
      </div>
    </div>
  )
}

export default About


