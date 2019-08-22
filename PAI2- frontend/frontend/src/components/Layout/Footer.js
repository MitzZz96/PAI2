import React from "react";

const Footer = () => {
  return (
    <div className="container">
      <div className="rectangle">
        <center>
          <p className="footer-copyright mb-0">
            &copy; {new Date().getFullYear()} Copyright by 3ID12B Team
          </p>
        </center>
      </div>
    </div>
  );
};

export default Footer;
