import React, { useState } from 'react';
import logo from "../assets/logo.png";
import arrow from "../assets/arrow.png";
import { FiMenu, FiX } from 'react-icons/fi'; // We are using react-icons for the hamburger icon and close icon

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling the menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav>
      <div className="container">
        {/* Logo on the left */}
        <img src={logo} alt="university-logo" className="logo" />
        
        {/* Hamburger menu for mobile view */}
        <div className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </div>

        {/* Sidebar for mobile view */}
        <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
          <div className="close-btn" onClick={toggleMenu}>
            <FiX size={30} />
          </div>
          <ul className="items">
            <li>Home</li>
            <li>Program</li>
            <li>About Us</li>
            <li>Campus</li>
            <li>Testimonials</li>
            <div className="contact">
              <li>
                <a className="btn">Contact Us</a>
              </li>
            </div>
          </ul>
        </div>

        {/* Desktop navigation */}
        <ul className="items desktop-nav">
          <li>Home</li>
          <li>Program</li>
          <li>About Us</li>
          <li>Campus</li>
          <li>Testimonials</li>
          <div className="contact">
            <li>
              <a className="btn">Contact Us</a>
            </li>
          </div>
        </ul>
      </div>
      
      {/* Hero Section */}
      <div className="hero-section">
        <h1>We Ensure Better Education for a Better World</h1>
        <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experience needed to excel in the dynamic field of education.</p>
        <div className="explore">
          <p>Explore More</p>
          <img src={arrow} alt="arrow" className="arrow" />
        </div>
      </div>
    </nav>
  );
}

export default Home;
