import React from "react";
import "./resume.css";

const ResumePage = () => {
  return (
    <div className="resume-page container">
      {/* Main Content */}
      <main className="main">
        <section id="resume" className="resume section">
          {/* <div className="container section-title sec-title" data-aos="fade-up">
            <h2 >Resume</h2>
            <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div> */}
          <div className="sec-title">
            <div className="title">Resume</div>
          </div>

          <div className="container">
            <div className="row">
              {/* Left Column */}
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
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
                  <h4> Bachelor of Computer Application (BCA)</h4>
                  <h5>2020 - 2023</h5>
                  <h5>Smt. R O Patel Women's MCA College, Morbi, Gujrat</h5>
                  <h5>saurashtra university</h5>
                  <p>
                    <em>ocused on software development, web technologies, and programming fundamentals.</em>
                  </p>
                  <p>
                   Gained knowledge in data structures, database management, and application development using modern technologies.
                  </p>
                </div>

                <div className="resume-item">
                  <h4>HSC(Higher Secondary Certificate)</h4>
                  <h5>2018 - 2020</h5>
                  <p>
                    <em>Gujarat Secondary and Higher Secondary Education Board (GSEB) </em>
                  </p>
                  <p>
                   Successfully completed 12th grade from the Gujarat Secondary and Higher Secondary Education Board (GSEB) with commendable academic performance.
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                <h3 className="resume-title">Professional Experience</h3>

                <div className="resume-item">
                  <h4>React js Devloper</h4>
                  <h5>March 2025 - present</h5>
                  <p>
                    <em>Hackberry Softech Private Limited</em>
                  </p>
                  <ul>
                    <li>
                     Building and maintaining modern web applications using React.js, focusing on clean, scalable, and reusable code.
                    </li>
                    <li>
                    Developed multiple components with responsive design, dynamic routing, and API integration.
                    </li>
                    <li>
                     Worked in a fast-paced environment using Git, Axios, React Router, and Bootstrap to create production-ready interfaces.
                    </li>
                    <li>
                     Actively learning backend development using the MERN stack (MongoDB, Express.js, Node.js) to strengthen full-stack capabilities.
                    </li>
                  </ul>
                </div>

                <div className="resume-item">
                  <h4>React js Devloper(Intern)</h4>
                  <h5>March 2025 - present</h5>
                  <p>
                    <em>Cherrypik Software, Inc.</em>
                  </p>
                  <ul>
                    <li>
                     Developed and maintained responsive user interfaces using React.js and JavaScript.
                    </li>
                    <li>Collaborated with senior developers to understand agile workflows and best coding practices.</li>
                    <li>Worked on real-time projects, contributing to UI enhancements, bug fixes, and feature implementations</li>
                    <li>Strengthened problem-solving skills and improved code readability through peer reviews and mentorship.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ResumePage;
