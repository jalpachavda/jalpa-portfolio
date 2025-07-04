import React from "react";
import "./fotter.css";
const Footer = () => {
  return (
    <footer className="bg-body-tertiary text-center text-lg-start footer ">
      {/* Copyright */}
      <div
        className="text-center footer-text text-white "
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2025 Built with using React.js | Designed by Jalpa Chavda.
      </div>
      {/* Copyright */}
    </footer>
  );
};

export default Footer;
