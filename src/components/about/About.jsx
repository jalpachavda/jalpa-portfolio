import React from "react";
import "./About.css";
import aboutusimg from "../../assets/aboutusimg.jpg";
const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row clearfix">
          {/* Content Column */}
          <div className="content-column col-md-6 col-sm-12 col-xs-12">
            <div className="inner-column">
              <div className="sec-title">
                <div className="title">About Us</div>
                <h2>
                  We Are The Leader In <br /> The Interiores
                </h2>
              </div>
              <div className="text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries
              </div>
              <div className="email">
                Email:{" "}
                <a 
                  href="mailto:jalpachavda1211@gmail.com"
                  className="theme_color"
                >
                  jalpachavda1211@gmail.com
                </a>
              </div>
              <a href="about.html" className="theme-btn btn-style-three theme_color">
                Read More
              </a>
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
