import React from 'react';
import graduationImage from '../assets/grp-member.png';
import playButton from '../assets/play-button.png';


const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="image-container">
        <img src={graduationImage} alt="Graduates" className="main-image" />
        <img src={playButton} alt="Play Button" className="play-button" />
      </div>
      <div className="text-container">
        <h4 className="about-title">About University</h4>
        <h2 className="main-heading">Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Embark on a transformative educational journey with our university's comprehensive education programs.
          Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences
          needed to excel in the dynamic field of education.
        </p>
        <p>
          With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring
          educators to make a meaningful impact in classrooms, schools, and communities.
        </p>
        <p>
          Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range
          of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the
          future of education.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
