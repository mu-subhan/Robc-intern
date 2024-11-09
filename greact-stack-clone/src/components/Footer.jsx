import React from 'react';

const Footer = () => {
  return (
<div className="footer">
      <hr className="footer-line" />
      <div className="footer-content">
        <p className="copyright">© 2024 Edusity. All rights reserved.</p>
        <div className="footer-links">
          <a href="/terms">Terms of Service</a>
          <span>|</span>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
    </div>
  
  );
};

export default Footer;
