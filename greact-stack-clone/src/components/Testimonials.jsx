import React, { useState } from 'react';
import emily from '../assets/emily.png';
import william from '../assets/william.png';


const testimonialsData = [
  {
    name: 'Emily Williams',
    location: 'Edusity, USA',
    image: emily,
    testimonial: 'Choosing to pursue my degree at Edusity was one of the best decisions I’ve ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.',
  },
  {
    name: 'William Jackson',
    location: 'Edusity, USA',
    image: william,
    testimonial: 'Choosing to pursue my degree at Edusity was one of the best decisions I’ve ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const { name, location, image, testimonial } = testimonialsData[currentIndex];

  return (
    <div className="testimonials-container">
      <h4 className="section-title">Testimonials</h4>
      <h2 className="main-heading">What Students Say</h2>
      <div className="testimonial-card">
        <img src={image} alt={name} className="testimonial-image" />
        <div className="testimonial-content">
          <h3 className="testimonial-name">{name}</h3>
          <p className="testimonial-location">{location}</p>
          <p className="testimonial-text">{testimonial}</p>
        </div>
      </div>
      <button className="arrow-button left" onClick={handlePrevious}>←</button>
      <button className="arrow-button right" onClick={handleNext}>→</button>
    </div>
  );
};

export default Testimonials;
