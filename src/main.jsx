import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EntranceExperience from './entrance'
import MainApp from './main-app'
import Login from './pages/Login'
import ESPay from './pages/ESPay'
import ESSecure from './pages/ESSecure'
import ESLearn from './pages/ESLearn'
import ESBuild from './pages/ESBuild'
import ESGadget from './pages/ESGadget'
import ESEntertainment from './pages/ESEntertainment'
import About from './pages/About'
import Contact from './pages/Contact'
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
        <Route path="/espay" element={<ESPay />} />
        <Route path="/essecure" element={<ESSecure />} />
        <Route path="/eslearn" element={<ESLearn />} />
        <Route path="/esbuild" element={<ESBuild />} />
        <Route path="/esgadget" element={<ESGadget />} />
        <Route path="/esentertainment" element={<ESEntertainment />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

