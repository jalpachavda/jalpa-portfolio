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
                  <h4>Brandon Johnson</h4>
                  <p>
                    <em>
                      Innovative and deadline-driven Graphic Designer with 3+
                      years of experience designing and developing user-centered
                      digital/print marketing material from initial concept to
                      final, polished deliverable.
                    </em>
                  </p>
                  <ul>
                    <li>Portland par 127, Orlando, FL</li>
                    <li>(123) 456-7891</li>
                    <li>alice.barkley@example.com</li>
                  </ul>
                </div>

                <h3 className="resume-title">Education</h3>
                <div className="resume-item">
                  <h4>Master of Fine Arts &amp; Graphic Design</h4>
                  <h5>2015 - 2016</h5>
                  <p>
                    <em>Rochester Institute of Technology, Rochester, NY</em>
                  </p>
                  <p>
                    Qui deserunt veniam. Et sed aliquam labore tempore sed
                    quisquam iusto autem sit.
                  </p>
                </div>

                <div className="resume-item">
                  <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
                  <h5>2010 - 2014</h5>
                  <p>
                    <em>Rochester Institute of Technology, Rochester, NY</em>
                  </p>
                  <p>
                    Quia nobis sequi est occaecati aut. Repudiandae et iusto
                    quae reiciendis et quis.
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                <h3 className="resume-title">Professional Experience</h3>

                <div className="resume-item">
                  <h4>Senior Graphic Design Specialist</h4>
                  <h5>2019 - Present</h5>
                  <p>
                    <em>Experion, New York, NY</em>
                  </p>
                  <ul>
                    <li>
                      Lead in the design and implementation of graphic
                      communication materials
                    </li>
                    <li>
                      Delegate tasks to the team and provide counsel on design
                      strategy
                    </li>
                    <li>
                      Supervise the assessment of all graphic materials for
                      accuracy
                    </li>
                    <li>
                      Oversee production project budgets ranging from $2,000 -
                      $25,000
                    </li>
                  </ul>
                </div>

                <div className="resume-item">
                  <h4>Graphic Design Specialist</h4>
                  <h5>2017 - 2018</h5>
                  <p>
                    <em>Stepping Stone Advertising, New York, NY</em>
                  </p>
                  <ul>
                    <li>
                      Developed numerous marketing materials: logos, brochures,
                      presentations, etc.
                    </li>
                    <li>Managed up to 5 projects simultaneously</li>
                    <li>Consulted with clients on design strategies</li>
                    <li>Created design proposals and presentations monthly</li>
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
