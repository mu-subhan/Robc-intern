import React from 'react'
import logo from "../assets/logo.png"
import arrow from "../assets/arrow.png"


const Home = () => {
  return (

    <nav>
      <div className='container'>
        <img src={logo} alt='university-logo' className='logo' />
      <ul className='items'>
        <li>Home</li>
        <li>Program</li>
        <li>About us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <div className='contact'>
        <li>
          <a className='btn'>Contact us</a>
        </li>
        </div>
      </ul>
      </div>
      <div className="hero-section">
      <h1>We Ensure better education for a better world</h1>
      <p>Our cutting-edge curriculum is designed to empower the students with the knowledge, skills and experience needed to excel in the dynamic field of education</p>
      <div className="explore">
        <p>Explore more</p>
        <img src={arrow} alt="arrow" className="arrow" />
      </div>
    </div>
    </nav>
    
 
    
  )
}

export default Home
