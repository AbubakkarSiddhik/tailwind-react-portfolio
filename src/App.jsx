import React from 'react'
import './App.css'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from './assets/Components/portfolio/Header'
import Hero from './assets/Components/portfolio/Hero'
import About from './assets/Components/portfolio/About'
import Projects from './assets/Components/portfolio/Projects'
import Certifications from './assets/Components/portfolio/Certifications'
import Contact from './assets/Components/portfolio/Contact'
import Footer from './assets/Components/portfolio/Footer'

function App() {
  return (
    <Router> 
      <Header />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
