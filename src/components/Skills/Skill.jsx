import React, { useEffect, useState } from "react";
import "./skill.css";
const SkillCircle = () => {
  const [, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 65) {
          clearInterval(interval);
          return 65;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="sec-title">
        <div className="title">Skill</div>
      </div>
      <div className="row  align-items-center justify-content-center ">
        <div className=" allcard col-lg-3 col-md-4 col-sm-12 mb-4 mt-4">
          <div className="skill">
            <div className="outer">
              <div className="inner">
                <div id="number">{`HTML ${95}%`}</div>
              </div>
            </div>
            <span className="html-circle-skill">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="160px"
                height="160px"
              >
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stop-color="#16377a" />
                    <stop offset="50%" stop-color="#003080" />
                    <stop offset="100%" stop-color="#0040A0" />
                  </linearGradient>
                </defs>
                <circle
                  id="html-circle"
                  cx="80"
                  cy="80"
                  r="70"
                  strokeLinecap="round"
                  // Add stroke and fill styling here or via CSS
                />
              </svg>
            </span>
          </div>
        </div>
        <div className=" allcard col-lg-3 col-md-4 col-sm-12 mb-4 mt-4">
          <div className="skill">
            <div className="outer">
              <div className="inner">
                <div id="number">{`Css ${95}%`}</div>
              </div>
            </div>
            <span className="html-circle-skill">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="160px"
                height="160px"
              >
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stopColor="#0081A3" />
                    <stop offset="100%" stopColor="#34b7a7" />
                  </linearGradient>
                </defs>
                <circle
                  id="html-circle"
                  cx="80"
                  cy="80"
                  r="70"
                  strokeLinecap="round"
                  // Add stroke and fill styling here or via CSS
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="allcard col-lg-3 col-md-4 col-sm-12 mb-4 mt-4">
          <div className="skill">
            <div className="outer">
              <div className="inner">
                <div id="number">{`Bootstrap ${93}%`}</div>
              </div>
            </div>
            <span className="html-circle-skill">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="160px"
                height="160px"
              >
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stopColor="#e91e63" />
                    <stop offset="100%" stopColor="#673ab7" />
                  </linearGradient>
                </defs>
                <circle
                  id="html-circle"
                  cx="80"
                  cy="80"
                  r="70"
                  strokeLinecap="round"
                  // Add stroke and fill styling here or via CSS
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="allcard col-lg-3 col-md-4 col-sm-12 mb-4 mt-4">
          <div className="skill">
            <div className="outer">
              <div className="inner">
                <div id="number">{`React ${95}%`}</div>
              </div>
            </div>
            <span className="html-circle-skill">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="160px"
                height="160px"
              >
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stopColor="#e91e63" />
                    <stop offset="100%" stopColor="#673ab7" />
                  </linearGradient>
                </defs>
                <circle
                  id="html-circle"
                  cx="80"
                  cy="80"
                  r="70"
                  strokeLinecap="round"
                  // Add stroke and fill styling here or via CSS
                />
              </svg>
            </span>
          </div>
        </div>
        <div className=" allcard col-lg-3 col-md-4 col-sm-12 mb-4 mt-4">
          <div className="skill">
            <div className="outer">
              <div className="inner">
                <div id="number">{`MUI ${95}%`}</div>
              </div>
            </div>
            <span className="html-circle-skill">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="160px"
                height="160px"
              >
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stopColor="#e91e63" />
                    <stop offset="100%" stopColor="#673ab7" />
                  </linearGradient>
                </defs>
                <circle
                  id="html-circle"
                  cx="80"
                  cy="80"
                  r="70"
                  strokeLinecap="round"
                  // Add stroke and fill styling here or via CSS
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="allcard col-lg-3 col-md-4 col-sm-12 mb-4 mt-4">
          <div className="skill">
            <div className="outer">
              <div className="inner">
                <div id="number">{`Node.js ${50}%`}</div>
              </div>
            </div>
            <span className="html-circle-skill">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="160px"
                height="160px"
              >
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stopColor="#e91e63" />
                    <stop offset="100%" stopColor="#673ab7" />
                  </linearGradient>
                </defs>
                <circle
                  id="html-circle"
                  cx="80"
                  cy="80"
                  r="70"
                  strokeLinecap="round"
                  // Add stroke and fill styling here or via CSS
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="allcard col-lg-3 col-md-4 col-sm-12 mb-4 mt-4">
          <div className="skill">
            <div className="outer">
              <div className="inner">
                <div id="number">{`Express.js ${50}%`}</div>
              </div>
            </div>
            <span className="html-circle-skill">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="160px"
                height="160px"
              >
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stopColor="#e91e63" />
                    <stop offset="100%" stopColor="#673ab7" />
                  </linearGradient>
                </defs>
                <circle
                  id="html-circle"
                  cx="80"
                  cy="80"
                  r="70"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="allcard col-lg-3 col-md-4 col-sm-12 mb-4 mt-4">
          <div className="skill">
            <div className="outer">
              <div className="inner">
                <div id="number">{`MongoDB ${50}%`}</div>
              </div>
            </div>
            <span className="html-circle-skill">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="160px"
                height="160px"
              >
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stopColor="#e91e63" />
                    <stop offset="100%" stopColor="#673ab7" />
                  </linearGradient>
                </defs>
                <circle
                  id="html-circle"
                  cx="80"
                  cy="80"
                  r="70"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCircle;
