import React from "react";
import logo from "/src/images/logo.png";
import adBanner from "/src/images/ad-manner.jpg";

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <div className="ad-banner">
        <img src={adBanner} alt="Ad Banner" />
      </div>

      <div className="advertise-box">
        <img src={logo} alt="Logo" className="logo" />
        <div className="advertise-text">Advertise on Reddit</div>
        <button className="get-started-btn">Get Started</button>
      </div>

      <div className="footer-links">
        <div className="links-row">
          <a>About Us</a>
          <a>Advertise</a>
          <a>Reddit App</a>
          <a>Careers</a>
          <a>Help</a>
          <a>Reddit Gold</a>
          <a>Press</a>
          <a>Blog</a>
          <a>Reddit Hits</a>
        </div>
        <div className="footer-separator">
          &copy; 2025 MyWebsite. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
