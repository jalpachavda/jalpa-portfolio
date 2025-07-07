import React from "react";
import { useNavigate } from "react-router-dom";
import "./resume.css";

const ResumePage = () => {
  const navigate = useNavigate();

  return (
    <div className="resume-page container">
      <main className="main">
        <section id="resume" className="resume section">
          <div className="sec-title">
            <div className="title">Resume</div>
          </div>

          <div className="container">
            <div className="row">
              {/* Left Column */}
              <div className="col-lg-6">
                <h3 className="resume-title">Summary</h3>
                <div className="resume-item pb-0">
                  <h4>Jalpa Chavda</h4>
                  <p>
                    Self-motivated and detail-oriented React.js Developer with
                    hands-on experience in designing and building responsive web
                    applications using modern JavaScript frameworks. Completed
                    real-world React projects.
                  </p>
                  <ul>
                    <li>Contact: 9313061960</li>
                    <li>Mail: jalpachavda1211@gmail.com</li>
                  </ul>
                </div>

                <h3 className="resume-title">Education</h3>
                <div className="resume-item">
                  <h4>Bachelor of Computer Application (BCA)</h4>
                  <h5>2020 - 2023</h5>
                  <h5>Smt. R O Patel Women's MCA College, Morbi, Gujarat</h5>
                  <h5>Saurashtra University</h5>
                  <p>
                    <em>
                      Focused on software development, web technologies, and
                      programming fundamentals.
                    </em>
                  </p>
                  <p>
                    Gained knowledge in data structures, database management,
                    and application development using modern technologies.
                  </p>
                </div>

                <div className="resume-item">
                  <h4>HSC (Higher Secondary Certificate)</h4>
                  <h5>2018 - 2020</h5>
                  <p>
                    <em>
                      Gujarat Secondary and Higher Secondary Education Board
                      (GSEB)
                    </em>
                  </p>
                  <p>
                    Successfully completed 12th grade with commendable academic
                    performance.
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="col-lg-6">
                <h3 className="resume-title">Professional Experience</h3>

                <div className="resume-item">
                  <h4>React js Developer</h4>
                  <h5>March 2025 - Present</h5>
                  <p>
                    <em>Hackberry Softech Private Limited</em>
                  </p>
                  <ul>
                    <li>
                      Building and maintaining modern web applications using
                      React.js, focusing on clean, scalable, and reusable code.
                    </li>
                    <li>
                      Developed multiple components with responsive design,
                      dynamic routing, and API integration.
                    </li>
                    <li>
                      Worked in a fast-paced environment using Git, Axios, React
                      Router, and Bootstrap to create production-ready
                      interfaces.
                    </li>
                    <li>
                      Actively learning backend development using the MERN stack
                      to strengthen full-stack capabilities.
                    </li>
                  </ul>
                </div>

                <div className="resume-item">
                  <h4>React js Developer (Intern)</h4>
                  <h5>September 2024 - March 2025</h5>
                  <p>
                    <em>Cherrypik Software, Inc.</em>
                  </p>
                  <ul>
                    <li>
                      Developed and maintained responsive user interfaces using
                      React.js and JavaScript.
                    </li>
                    <li>
                      Collaborated with senior developers to understand agile
                      workflows and best coding practices.
                    </li>
                    <li>
                      Worked on real-time projects, contributing to UI
                      enhancements, bug fixes, and feature implementations.
                    </li>
                    <li>
                      Strengthened problem-solving skills and improved code
                      readability through peer reviews and mentorship.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center mt-4">
              {/* <button
                className="see-resume-btn"
                onClick={() => navigate("/Resume")}
              >
                See Full Resume
              </button> */}
              <button 
                className="see-resume-btn"
              onClick={() => navigate("/resume")}>
                View Full Resume
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ResumePage;
