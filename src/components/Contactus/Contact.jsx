import React from "react";
import "./Contact.css";
import contactus from "../../assets/contactpage1.jpg";
import { FaMapLocation } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Contactus = () => {
  return (
    <section className="contact-page-sec">
      <div className="container">
        <div className="row">
          {/* Address */}
          <div className="col-md-3">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i ><FaMapLocation /></i>
                </div>
                <div className="contact-info-text">
                  <h2>Address</h2>
                  <span>1215 Lorem Ipsum, Ch 176080</span>
                  <span>Chandigarh, INDIA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="col-md-3">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i ><MdEmail /></i>
                </div>
                <div className="contact-info-text">
                  <h2>E-mail</h2>
                  <span>info@LoremIpsum.com</span>
                  <span>yourmail@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
           <div className="col-md-3">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i><FaLinkedin /></i>
                </div>
                <div className="contact-info-text">
                  <h2>Office Time</h2>
                  <span>Mon - Thu 9:00 am - 4:00 pm</span>
                  <span>Thu - Mon 10:00 pm - 5:00 pm</span>
                </div>
              </div>
            </div>
          </div>

          
          <div className="col-md-3">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i><FaPhoneAlt /></i>
                </div>
                <div className="contact-info-text">
                  <h2>Office Time</h2>
                  <span>Mon - Thu 9:00 am - 4:00 pm</span>
                  <span>Thu - Mon 10:00 pm - 5:00 pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      
        <div className="row">
          
          <div className="col-md-8">
            <div className="contact-page-form">
              <h2>Get in Touch</h2>
              <form action="https://formsubmit.co/jalpachavda1211@gmail.com" method="post">
                <div className="row">
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="single-input-field">
                      <input type="text" name="name" placeholder="Your Name" />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="single-input-field">
                      <input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="single-input-field">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="single-input-field">
                      <input type="text" name="subject" placeholder="Subject" />
                    </div>
                  </div>
                  <div className="col-md-12 message-input">
                    <div className="single-input-field">
                      <textarea
                        name="message"
                        placeholder="Write Your Message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="single-input-fieldsbtn">
                    <input type="submit" value="Send Now" />
                  </div>
                </div>
              </form>
            </div>
          </div>

        
          <div className="col-md-4 d-flex">
            <div className="contact-page-map w-100 h-100">
              <img
                src={contactus}
                className="img-fluid h-100  object-fit-cover"
                alt="Contact Us"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
