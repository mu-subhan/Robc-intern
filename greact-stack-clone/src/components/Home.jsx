import React, { useState } from 'react';
import { Link } from 'react-scroll'; 
import logo from "../assets/logo.png";
import arrow from "../assets/arrow.png";
import { FiMenu, FiX } from 'react-icons/fi';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav>
      <div className="container">
        <img src={logo} alt="university-logo" className="logo" />
        
        <div className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </div>

        <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
          <div className="close-btn" onClick={toggleMenu}>
            <FiX size={30} />
          </div>
          <ul className="items">
            <li><Link to="home" smooth={true} duration={500} activeClass="active">Home</Link></li>
            <li><Link to="program" smooth={true} duration={500} activeClass="active">Program</Link></li>
            <li><Link to="about-us" smooth={true} duration={500} activeClass="active">About Us</Link></li>
            <li><Link to="campus" smooth={true} duration={500} activeClass="active">Campus</Link></li>
            <li><Link to="testimonials" smooth={true} duration={500} activeClass="active">Testimonials</Link></li>
            <li><Link to="contact-us" smooth={true} duration={500} activeClass="active">Contact Us</Link></li>
          </ul>
        </div>

        <ul className="items desktop-nav">
          <li><Link to="home" smooth={true} duration={500} activeClass="active">Home</Link></li>
          <li><Link to="program" smooth={true} duration={500} activeClass="active">Program</Link></li>
          <li><Link to="about-us" smooth={true} duration={500} activeClass="active">About Us</Link></li>
          <li><Link to="campus" smooth={true} duration={500} activeClass="active">Campus</Link></li>
          <li><Link to="testimonials" smooth={true} duration={500} activeClass="active">Testimonials</Link></li>
          <li><Link to="contact-us" smooth={true} duration={500} activeClass="active">Contact Us</Link></li>
        </ul>
      </div>

      <div className="hero-section" id="home">
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
