import React, { useState } from 'react';
import graduationImage from '../assets/grp-member.png';
import playButton from '../assets/play-button.png';
import vedio from "../assets/v1.mp4"; 

const AboutUs = () => {
  // State to manage whether the video is playing or not
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to toggle video play/pause
  const handlePlayPause = () => {
    const videoElement = document.getElementById('video');
    if (isPlaying) {
      videoElement.pause();
    } else {
      videoElement.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="about-us-container">
      <div className="image-container">
        {/* Video Element */}
        <video
          id="video"
          src={vedio}
          className="main-video"
          controls
          style={{ display: isPlaying ? 'block' : 'none' }} // Hide image when video is playing
        />
        <img
          src={graduationImage}
          alt="Graduates"
          className={`main-image ${isPlaying ? 'hidden' : ''}`} // Hide image when video is playing
        />
        <img
          src={playButton}
          alt="Play Button"
          className="play-button"
          onClick={handlePlayPause}
          style={{ display: isPlaying ? 'none' : 'block' }} // Hide play button when video is playing
        />
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
