import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EntranceExperience from './entrance'
import MainApp from './main-app'
import Login from './pages/Login'
import Navigation from './components/Navigation'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<EntranceExperience />} />
        <Route path="/ecosystem" element={<MainApp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<MainApp />} />
        <Route path="/contact" element={<MainApp />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
