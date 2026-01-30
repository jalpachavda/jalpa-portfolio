import React, { useRef } from "react";
import html2pdf from "html2pdf.js";
import "./profresume.css";
import { FaLocationArrow, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
// import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
const Profresume = () => {
  const componentRef = useRef();

  const handleDownloadPDF = () => {
    const element = componentRef.current;

    const opt = {
      margin: 0,
      filename: "Jalpa_Chavda_Resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "pt", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div
      className="prof-resume"
      style={{ minHeight: "100vh", padding: "30px" }}
    >
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button
          onClick={handleDownloadPDF}
          style={{
            padding: "12px 24px",
            backgroundColor: "#002060",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Download Resume
        </button>
      </div>

      <div
        ref={componentRef}
        className="resume-container"
        style={{
          backgroundColor: "#fff",
          boxShadow: "0 0 30px rgba(0, 0, 0, 0.4)",
          padding: "40px",
          margin: "auto",
          maxWidth: "800px",
          minHeight: "1123px",
        }}
      >
        <div className="resume__header">
          <h1>Jalpa Chavda</h1>
          <div className="info-item">
            <FaLocationArrow className="info-icon" />
            <span>Gota, Ahmedabad</span>
          </div>
          <div className="info-item">
            <MdEmail className="info-icon" />
            <span>jalpachavda1211@gmail.com</span>
          </div>
          <div className="info-item">
            <FaPhone className="info-icon" />
            <span>9313061960</span>
          </div>
          <div className="info-item">
            <FaLinkedin className="info-icon" />
            <a
              style={{ color: "inherit" }}
              href="https://www.linkedin.com/in/jalpa-chavda-242747276"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jalpa Chavda
            </a>
          </div>
        </div>

        <div className="resume__section">
          <h2 className="border-bottom">Professional Summary</h2>
          <p>
            Self-motivated and detail-oriented React.js Developer with hands-on
            experience in designing and building responsive web applications
            using modern JavaScript frameworks. Completed real-world React
            projects.
          </p>
          <p>
            Skilled in component-based architecture, API integration, and
            frontend performance optimization. Possess a basic understanding of
            backend technologies in the MERN stack, enabling effective
            collaboration on full-stack solutions.
          </p>
        </div>

        <div className="resume__section">
          <h2 className="border-bottom">Employment History</h2>

          <div className="job">
            <h3>React.js Developer - Hackberry Softech Private Limited</h3>
            <p className="location">
              Ahmedabad |<strong> March 2025 – Present</strong>
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
                Worked on real-time projects, contributing to UI enhancements,
                bug fixes, and feature implementations.
              </li>
              <li>
                Strengthened problem-solving skills and improved code
                readability through peer reviews and mentorship.
              </li>
            </ul>
          </div>

          <div className="job">
            <h3>React.js Developer (Intern) - Cherrypik Software, Inc.</h3>
            <p className="location">
              Ahmedabad |<strong> September 2024 – March 2025 </strong>
            </p>
            <ul>
              <li>
                Built and maintained web applications using PHP, Python, and
                JavaScript.
              </li>
              <li>
                Managed production databases running on Elasticsearch, Redis,
                PostgreSQL, and MySQL.
              </li>
              <li>Maintained GNU/Linux servers and provided system backups.</li>
              <li>
                Created technical documentation for new and existing
                applications.
              </li>
            </ul>
          </div>
        </div>
        <div className="resume__section">
          <h2 className="border-bottom">Skills</h2>
          <ul className="skills">
            <li>HTML5, CSS3, Bootstrap5, JavaScript</li>
            <li>tailwind CSS</li>
            <li>React.js, JSX, React Router</li>
            <li>Integrate REST APIs, state management </li>
            <li>Redux Toolkit , Context API</li>
            <li>Express.js, Node.js</li>
            <li>SQL</li>
          </ul>
        </div>

        <div className="resume__section">
          <h2 className="border-bottom">Projects</h2>

          <div className="project">
            <h5>Wa-Frontend</h5>
            {/* <p className="location">Role: React.js Developer</p> */}
            <p>
              <strong>Technologies:</strong> React JS, Laravel (APIs)
            </p>
            <p>
              <strong>Project URL:</strong>{" "}
              <a
                href="https://laravel.wasteaccountant.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wa-Frontend
              </a>
            </p>
            <ul>
              <li>
                Designed and developed responsive frontend interfaces using
                React JS.
              </li>
              <li>
                Integrated Laravel-based APIs to implement dynamic
                functionality.
              </li>
              <li>
                Built CRUD operations, filtering, and search features to enhance
                user interaction.
              </li>
            </ul>
          </div>

          <div className="project">
            <h5 className="">Smart Box File</h5>
            {/* <p className="location">Role: React.js Developer</p> */}
            <p>
              <strong>Technologies:</strong> React JS, Laravel (APIs)
            </p>
            <p>
              <strong>Project URL:</strong>{" "}
              <a
                href="https://smartboxfile.fairytalesoftware.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                SmartBoxFile
              </a>
            </p>
            <ul>
              <li>
                Developed a fully responsive and dynamic website using React.js.
              </li>
              <li>
                Enhanced UX through component-based architecture and reusable UI
                components.
              </li>
              <li>
                Implemented React Router for seamless client-side navigation and
                routing.
              </li>
            </ul>
          </div>

          <div className="project">
            <h5>Sarjan Homes</h5>
            {/* <p className="location">Role: React.js Developer</p> */}
            <p>
              <strong>Technologies:</strong> React JS, Laravel (APIs)
            </p>
            <p>
              <strong>Project URL:</strong>{" "}
              <a
                href="https://dev.sarjanhomes.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                SarjanHomes
              </a>
            </p>
            <ul>
              <li>
                Developed a fully dynamic real estate website “Sarjan Homes”
                with backend API integration to manage property listings,
                company information, and media content through an admin panel.
              </li>
              <li>
                Integrated Laravel-based APIs to implement dynamic
                functionality.
              </li>
            </ul>
          </div>
          <h5 className="">Sarjan Homes Admin Panel</h5>
          <ul>
            <li>
              The Sarjan Homes Admin Panel is a fully responsive and
              feature-rich web application designed to efficiently manage real
              estate operations — including property listings, client
              management, and payment tracking — all within a single intuitive
              dashboard.
            </li>

            <h6 className="features-title mt-3">Key Features</h6>
            <ul>
              <li className="ml-3">Property Management</li>
              <li className="ml-3">Client Management</li>
              <li className="ml-3">Payment Tracking</li>
              <li className="ml-3">Dashboard Insights</li>
              <li className="ml-3">Role Based Access</li>
            </ul>
          </ul>
          {/* <div className="project">
            <h5 className="">Book Sure Global</h5>
           
            <p>
              <strong>Technologies:</strong>React JS, NodeJs,MySQL(APIs)
            </p>
            <p>
              <strong>Project URL:</strong>{" "}
              <a
                href="https://book-sure-global.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                BookSureGlobal
              </a>
            </p>
            <ul>
              <li>
                Book Sure Global Website – Designed and developed a responsive
                corporate website for Book Sure Global, showcasing global
                services, pricing plans, and customer engagement features. The
                website includes a modern UI, dynamic content sections, service
                listings, contact forms, and optimized navigation to enhance
                user experience. Built with a focus on performance, scalability,
                and mobile responsiveness, ensuring seamless interaction across
                all devices.
              </li>
             
            </ul>
          </div> */}
        </div>

        <div className="resume__section">
          <h2 className="border-bottom">Languages</h2>
          <ul className="skills">
            <li>Gujarati (Native)</li>
            <li>Hindi</li>
            <li>English</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profresume;
