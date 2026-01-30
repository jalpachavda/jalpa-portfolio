import React, { useState } from "react";
import "./resume.css";
import certificatssm from "../../assets/certificatssm.png";
import AWS from "../../assets/AWS.png";

const Certification = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <section className="cert-section py-5" id="certifications">
        <div className="container">
          <div className="sec-title">
            <div className="title">My Certifications</div>
          </div>

          {/* AWS Certificate */}
          <div className="row align-items-center mb-5 cert-row">
            <div className="col-md-6">
              <img
                src={AWS}
                alt="AWS Certificate"
                className="cert-img-large"
                onClick={() => setSelectedImage(AWS)}
              />
            </div>

            <div className="col-md-6">
              <h3 className="cert-name">AWS Foundation Services Bootcamp</h3>
              <p className="cert-desc">
                AWS Foundation Services Bootcamp – Gujarat University (Gujarat
                Technological University), 2024 I attended a 2-day AWS
                Foundation Services Bootcamp hosted at Gujarat University in
                2024. The seminar covered core AWS cloud concepts, including
                compute, storage, networking, security, and cloud architecture
                fundamentals. Throughout the sessions, I gained hands-on
                exposure to essential AWS services and learned how to apply
                cloud best practices for real-world applications.
              </p>
              <p className="cert-desc">
                {" "}
                Upon successful completion, I received an official certificate
                from Gujarat Technological University (GTU), validating my
                foundational knowledge of AWS cloud services.
              </p>
              <p className="cert-issued">
                Issued by: <strong>AWS</strong>
              </p>
              <p className="cert-year">Year: 2025</p>
            </div>
          </div>

          {/* Full Stack Internship Certificate */}
          <div className="row align-items-center flex-md-row-reverse cert-row">
            <div className="col-md-6">
              <img
                src={certificatssm}
                alt="Full Stack Internship"
                className="cert-img-large"
                onClick={() => setSelectedImage(certificatssm)}
              />
            </div>

            <div className="col-md-6">
              <h3 className="cert-name">
                Full Stack Development Internship (MERN) — SSM Learning
                Excellence Centre, Surat
              </h3>
              <p className="cert-desc">
                During my 4-month internship at SSM Learning Excellence Centre,
                I completed hands-on training in MERN Stack Development and
                built practical projects under industry guidance. This
                internship strengthened my understanding of backend and frontend
                technologies and helped me apply concepts in real-world
                applications.
              </p>
              <p className="cert-issued">
                Issued by: <strong>SSM Learning Excellence Centre</strong>
              </p>
              <p className="cert-year">Year: 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <span className="close-btn">&times;</span>
          <img src={selectedImage} className="modal-img" alt="Full View" />
        </div>
      )}
    </>
  );
};

export default Certification;
