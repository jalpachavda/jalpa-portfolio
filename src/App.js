// import "./App.css";
// import React from "react";
// import Home from "./components/Home/Home";
// import Navbar from "./components/Navbar/Navbar";
// import About from "./components/about/About";
// import ResumePage from "./components/Resume/Resume";
// import Contactus from "./components/Contactus/Contact";
// import Skill from "./components/Skills/Skill";
// import Projects from "./components/Projects/Projects";
// import Footer from "./components/footer/Fotter";
// import Profresume from "./components/Prof-resume/Prof-resume";
// function App() {
//   return (
//     <>
//       <Navbar />
//       <div id="home">
//         <Home />
//       </div>
//       <div id="about">
//         <About />
//       </div>
//       <div id="skills">
//         <Skill />
//       </div>
//       <div id="resume">
//         <ResumePage />
//       </div>
//       <div id="portfolio">
//         <Projects />
//       </div>
//       <div id="contact">
//         <Contactus />
//       </div>
//       <Footer/>
//       <Profresume />
//     </>
//   );
// }

// export default App;



import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/about/About";
import ResumePage from "./components/Resume/Resume";
import Contactus from "./components/Contactus/Contact";
import Skill from "./components/Skills/Skill";
import Projects from "./components/Projects/Projects";
import Footer from "./components/footer/Fotter";
import Profresume from "./components/Prof-resume/Prof-resume";

function MainLayout() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skill />
      </div>
      <div id="resume">
        <ResumePage />
      </div>
      <div id="portfolio">
        <Projects />
      </div>
      <div id="contact">
        <Contactus />
      </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/resume" element={<Profresume />} />
        {/* Add a fallback route if needed */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
