import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import profile from "../../assets/logo.png";
import "./navbar.css";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const navbarCollapseRef = useRef(null);

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionId = location.pathname.slice(1);
    if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname]);

  const handleLinkClick = () => {
    if (navbarCollapseRef.current && navbarCollapseRef.current.classList) {
      navbarCollapseRef.current.classList.remove("show");
    }
  };

  // const handleNavigateScroll = (path) => {
  //   navigate(path);
  //   handleLinkClick();
  // };


  const handleNavigateScroll = (sectionId) => {
  if (location.pathname !== "/") {
    navigate("/", { replace: true }); // Go to home first
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 100); // Wait for render
  } else {
    scrollToSection(sectionId);
  }
  handleLinkClick();
};

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};
  const navbarClasses = [
    "navbar",
    "navbar-expand-lg",
    "navbarbag",
    "container-fluid",
    scrolled ? "scrolled" : "",
    isHomePage ? "home-page" : "other-page",
  ].join(" ");



  return (
    <nav className={navbarClasses}>
      <div className="container bgwhite">
        {/* <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <img src={profile} alt="Logo" className="navbar-logo" />
          FrontEnd Developer
        </a> */}
         <img src={profile} alt="Logo" className="navbar-logo" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          ref={navbarCollapseRef}
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <span
                onClick={() => handleNavigateScroll("about")}
                className="nav-link text-nowrap"
                style={{ cursor: "pointer" }}
              >
                About Us
              </span>
            </li>
            <li className="nav-item">
              <span
                onClick={() => handleNavigateScroll("skills")}
                className="nav-link text-nowrap"
                style={{ cursor: "pointer" }}
              >
                Skills
              </span>
            </li>
            <li className="nav-item">
              <span
                onClick={() => handleNavigateScroll("resume")}
                className="nav-link text-nowrap"
                style={{ cursor: "pointer" }}
              >
                Resume
              </span>
            </li>
            <li className="nav-item">
              <span
                onClick={() => handleNavigateScroll("portfolio")}
                className="nav-link text-nowrap"
                style={{ cursor: "pointer" }}
              >
                Portfolio
              </span>
            </li>
            <li className="nav-item">
              <span
                onClick={() => handleNavigateScroll("ycontact")}
                className="nav-link text-nowrap"
                style={{ cursor: "pointer" }}
              >
                Contact Us
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
