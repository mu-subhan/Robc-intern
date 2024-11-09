import React from 'react';
import graduation from '../assets/graduation.png'
import degree from '../assets/degree.png';
import completed from '../assets/completed.png';
import degreemaster from "../assets/degree-hover.png";
import postgrad from "../assets/completed-hover.png"
import grad from '../assets/graduation-hover.png'

const Program = () => {
  return (
    <div className="program-section">
      <h3 className="program-title">OUR PROGRAM</h3>
      <h2 className="program-subtitle">What We Offer</h2>

      <div className="program-cards">
        <div className="program-card">
          <img src={graduation} alt="Graduate 1" className="program-image" />
          <div className="overlay">
          <img src={grad} alt='' />
           
            <p className="overlay-text">Graduation Degree</p>
          </div>
        </div>
        <div className="program-card">
          <img src={degree} alt="Graduate 2" className="program-image" />
          <div className="overlay">
          <img src={degreemaster} alt='master-img' />
            <p className="overlay-text">Master Degree</p>
          </div>
        </div>
        <div className="program-card">
          <img src={completed} alt="Graduate 3" className="program-image" />
          <div className="overlay">
            <img src={postgrad} alt='' />
            <p className="overlay-text">Post Graduation </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
