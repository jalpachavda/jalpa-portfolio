import React from "react";
import "./About.css";
import aboutusimg from "../../assets/aboutusimg.jpg";
const AboutSection = () => {
  return (
    <section className="about-section" >
      <div className="container">
        <div className="row clearfix">
          {/* Content Column */}
          <div className="content-column col-md-6 col-sm-12 col-xs-12">
            <div className="inner-column">
              <div className="sec-title">
                <div className="title">About Me</div>
                <h2>
                  React.js Developer, <br /> Building Modern Web Applications
                </h2>
              </div>
              <div className="text">
                <p>
                  {" "}
                  Hi, I'm Jalpa Chavda, a passionate React.js Developer with
                  hands-on experience building dynamic, responsive, and
                  user-friendly web applications.
                </p>

                <p>
                  I began my professional journey with a 6-month internship at
                  Cherrypik Software, where I gained valuable industry exposure
                  and practical development skills.
                </p>
                <p>
                  Currently, I am working with Hackbarry Softech Pvt. Ltd. as a
                  React.js Developer. where I contributed to real-world projects
                  and further honed my frontend expertise.
                </p>
                <p>
                  Alongside frontend development, I also have a basic
                  understanding of backend technologies in the MERN stack
                  (MongoDB, Express.js, React.js, Node.js), which allows me to
                  collaborate effectively on full-stack applications. 
                </p>
              </div>
              {/* <div className="email">
                Email:{" "}
                <a
                  href="mailto:jalpachavda1211@gmail.com"
                  className="theme_color"
                >
                  jalpachavda1211@gmail.com
                </a>
              </div> */}
              {/* <a
                href="about.html"
                className="theme-btn btn-style-three theme_color"
              >
                Read More
              </a> */}
            </div>
          </div>

          {/* Image Column */}
          <div className="image-column col-md-6 col-sm-12 col-xs-12">
            <div
              className="inner-column"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className=" image">
                <img src={aboutusimg} className="img-about" alt="About Us" />
                <div className="overlay-box">
                  <div className="year-box textcol">
                    <span className="number">1</span>
                    <span className="text-white">
                      Years <br />
                      Experience <br />
                      Working
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
