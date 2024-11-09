import React from 'react';
import library from '../assets/library.png';
import desk from '../assets/desk.png';
import frnds from '../assets/frnd.png';
import grad from '../assets/graduation-girl.png';


const Campus = () => {
  return (
    <div className="campus-container">
      <h4 className="gallery-title">Gallery</h4>
      <h2 className="main-heading">Campus Photos</h2>
      <div className="gallery">
        <img src={library} alt="Library" className="gallery-image" />
        <img src={desk} alt="Desk" className="gallery-image" />
        <img src={frnds} alt="Friends" className="gallery-image" />
        <img src={grad} alt="Graduation" className="gallery-image" />
      </div>
      <button className="see-more-button">See more here ➔</button>
    </div>
  );
};

export default Campus;
