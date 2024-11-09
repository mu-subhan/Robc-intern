import react  from "react";
import left from "../assets/left.png"
import right from "../assets/right.png"
import user_1 from "../assets/emily.png";
import user_2 from "../assets/william.png";
import user_3 from "../assets/emily2.png";
import user_4 from "../assets/william2.png";


import { useRef } from "react";

const Testimonials = () => {
  // Creating a reference to the slider element for manipulating its position
  const slider = useRef();

  // Variable to track the translation value for the slider
  let tx = 0;

  // Function to move the slider forward by 25%
  const slideForward = () => {
    if (tx > -50) {  // Limit to avoid excessive translation
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  // Function to move the slider backward by 25%
  const slideBackward = () => {
    if (tx < 0) {  // Limit to avoid excessive translation
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      {/* Navigation buttons for sliding forward and backward */}
      <img src={left} alt="Next" className="next-btn" onClick={slideForward} />
      <img src={right} alt="Back" className="back-btn" onClick={slideBackward} />

      {/* Slider container holding individual testimonial slides */}
      <div className="slider">
        <ul ref={slider}>
          {/* First testimonial */}
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="Emily Williams" />
                <div>
                  <h3>Emily Williams</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
            </div>
          </li>
          {/* Second testimonial */}
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="William Jackson" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
            </div>
          </li>
          {/* Third testimonial */}
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="Emily Williams" />
                <div>
                  <h3>Emily Williams</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
            </div>
          </li>
      
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="João Gonçalves" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;