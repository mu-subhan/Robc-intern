import React, { useState } from 'react'
import logo from "../assets/logo.png"
import arrow from "../assets/arrow.png"
import { FiMenu, FiX } from 'react-icons/fi' // We are using react-icons for the hamburger icon and close icon

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling the menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav>
      <div className="container">
        <img src={logo} alt="university-logo" className="logo" />
        
        {/* Hamburger menu for mobile view */}
        <div className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </div>

        {/* Sidebar for mobile view */}
        <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
          <ul className="items">
            <li>Home</li>
            <li>Program</li>
            <li>About us</li>
            <li>Campus</li>
            <li>Testimonials</li>
            <div className="contact">
              <li>
                <a className="btn">Contact us</a>
              </li>
            </div>
          </ul>
        </div>

        <ul className="items desktop-nav">
          <li>Home</li>
          <li>Program</li>
          <li>About us</li>
          <li>Campus</li>
          <li>Testimonials</li>
          <div className="contact">
            <li>
              <a className="btn">Contact us</a>
            </li>
          </div>
        </ul>
      </div>
      <div className="hero-section">
        <h1>We Ensure better education for a better world</h1>
        <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experience needed to excel in the dynamic field of education.</p>
        <div className="explore">
          <p>Explore more</p>
          <img src={arrow} alt="arrow" className="arrow" />
        </div>
      </div>
    </nav>
  )
}

export default Home
