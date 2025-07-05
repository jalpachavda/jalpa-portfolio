import React from "react";
import "./Contact.css";
import contactus from "../../assets/contactpage1.jpg";
import { FaMapLocation } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { toast ,ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Allow only digits in phone
    if (name === "phone" && !/^\d*$/.test(value)) {
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (formData.phone.length !== 10) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // ✅ Success
    console.log("Submitted data:", formData);
    toast.success("Form submitted successfully!", { autoClose: 3000 });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setErrors({});
  };

  return (
     <>
    <section className="contact-page-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i>
                    <FaMapLocation />
                  </i>
                </div>
                <div className="contact-info-text ">
                  <h2 className="text-white">Address</h2>
                  <span>Gota,Ahmedabad</span>
                </div>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="col-md-3">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i>
                    <MdEmail />
                  </i>
                </div>
                <div className="contact-info-text">
                  <h2 className="text-white">E-mail</h2>
                  <span>jalpachavda1211@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i>
                    <FaLinkedin />
                  </i>
                </div>
                <div className="contact-info-text">
                  <h2 className="text-white">LinkedIn</h2>
                  <span>
                    <a
                      href="https://www.linkedin.com/in/jalpa-chavda-242747276"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="linkedin-link"
                    >
                      Jalpa Chavda
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i>
                    <FaPhoneAlt />
                  </i>
                </div>
                <div className="contact-info-text">
                  <h2 className="text-white">Contact Number</h2>
                  <span>9313061960</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <div className="contact-page-form">
              <h2>Contact Me</h2>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="single-input-field">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {errors.name && (
                        <p style={{ color: "red", marginTop: "5px" }}>
                          {errors.name}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="single-input-field">
                      <label htmlFor="email">E-mail</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <p style={{ color: "red", marginTop: "5px" }}>
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="single-input-field">
                       <label htmlFor="subject">Contact Number</label>
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        maxLength="10"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      {errors.phone && (
                        <p style={{ color: "red", marginTop: "5px" }}>
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="single-input-field">
                      <label htmlFor="subject">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                      {errors.subject && (
                        <p style={{ color: "red", marginTop: "5px" }}>
                          {errors.subject}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-md-12 message-input">
                    <div className="single-input-field">
                        <label htmlFor="message">Message</label>
                      <textarea
                        name="message"
                        placeholder="Write Your Message"
                        value={formData.message}
                        onChange={handleChange}
                      />
                      {errors.message && (
                        <p style={{ color: "red", marginTop: "5px" }}>
                          {errors.message}
                        </p>
                      )}
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
                className="img-fluid h-100 object-fit-cover"
                alt="Contact Us"
              />
            </div>
          </div>
        </div>
  
      </div>
    </section>
<ToastContainer />
   </>
  );
};

export default Contactus;