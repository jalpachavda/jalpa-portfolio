import React from "react";
import "./Projects.css";
import {
  FaBuilding,
  FaUsers,
  FaMoneyCheckAlt,
  FaChartLine,
  FaAdjust,
} from "react-icons/fa";
import sarjanadmin from "../../assets/Gemini_Generated_Image_xseqagxseqagxseq.png";
import sarjanadmin2 from "../../assets/sarjanadmin2.png";
import taskmanager from "../../assets/Task_manager.png";
import task_manager2 from "../../assets/task_manager2.png";
import { FaTasks, FaUserShield, FaUserCheck, FaSyncAlt, FaHistory, FaBell } from "react-icons/fa";

const Adminproject = () => {
  return (
    <>
      <div className="adminproject-card">
        {/* 🔹 Image Section */}
        <div className="adminproject-image">
          <div className="adminproject-image-grid">
            <img src={sarjanadmin} alt="Sarjan Homes Admin Panel Desktop" />
            <img src={sarjanadmin2} alt="Sarjan Homes Admin Panel Mobile" />
          </div>
        </div>

        {/* 🔹 Content Section */}
        <div className="adminproject-content">
          <h3 className="adminproject-title " style={{ color: "#00244c" }}>
            Sarjan HOMES – Real Estate Admin Panel
          </h3>

          <p className="adminproject-description">
            The Sarjan Homes Admin Panel is a fully responsive and feature-rich
            web application designed to efficiently manage real estate
            operations — including property listings, client management, and
            payment tracking — all within a single intuitive dashboard.
          </p>

          <p className="adminproject-description">
            Developed using <strong>React.js</strong> and{" "}
            <strong>Tailwind CSS</strong>, the system offers a clean, modern
            interface with support for both light and dark themes, ensuring an
            optimal experience across devices and user preferences.
          </p>

          {/* 🔹 Features Section */}
          <div className="adminproject-features">
            <h4 className="features-title">Key Features</h4>
            <div className="features-list">
              <div className="feature-item">
                <FaBuilding className="feature-icon" />
                <span>Property Management</span>
              </div>
              <div className="feature-item">
                <FaUsers className="feature-icon" />
                <span>Client Management</span>
              </div>
              <div className="feature-item">
                <FaMoneyCheckAlt className="feature-icon" />
                <span>Payment Tracking</span>
              </div>
              <div className="feature-item">
                <FaChartLine className="feature-icon" />
                <span>Dashboard Insights</span>
              </div>
               <div className="feature-item">
        <FaUserShield className="feature-icon" />
        <span>Role Based Access </span>
      </div>
              <div className="feature-item">
                <FaAdjust className="feature-icon" />
                <span>Dark/Light Theme Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="adminproject-card">
        {/* 🔹 Image Section */}
        <div className="adminproject-image">
          <div className="adminproject-image-grid">
            <img src={taskmanager} alt="Sarjan Homes Admin Panel Desktop" />
            <img src={task_manager2} alt="Sarjan Homes Admin Panel Mobile" />
          </div>
        </div>

        {/* 🔹 Content Section */}
    <div className="adminproject-content">
  <h3 className="adminproject-title " style={{ color: "#00244c" }}>
    Task Manager – Team Task Assignment System
  </h3>

  <p className="adminproject-description">
    A collaborative task management system where the admin assigns tasks to team members along with priority, due date, and task details. 
    Team members can view assigned tasks in their personal dashboard and update task status (Pending, In-Progress, Completed) as the work progresses, ensuring seamless workflow tracking.
  </p>

  <p className="adminproject-description">
    Developed using <strong>React.js</strong>, <strong>Node.js</strong>, <strong>Express.js</strong> and{" "}
    <strong>MongoDB</strong>, styled with <strong>Tailwind CSS</strong>.
  </p>

  {/* 🔹 Features Section */}
  <div className="adminproject-features">
    <h4 className="features-title">Key Features</h4>
    <div className="features-list">

      <div className="feature-item">
        <FaTasks className="feature-icon text-5xl" />
        <span>Task Assignment with Priority & Due Date</span>
      </div>

      <div className="feature-item">
        <FaUserShield className="feature-icon" />
        <span>Role Based Access (Admin & Team Members)</span>
      </div>

      <div className="feature-item">
        <FaUserCheck className="feature-icon" />
        <span>Individual User Dashboard</span>
      </div>

      <div className="feature-item">
        <FaSyncAlt className="feature-icon" />
        <span>Status Update (Pending / In-Progress / Completed)</span>
      </div>

      <div className="feature-item">
        <FaHistory className="feature-icon" />
        <span>Task History & Activity Tracking</span>
      </div>

      <div className="feature-item">
        <FaBell className="feature-icon" />
        <span>Real-time Notifications / Updates</span>
      </div>

    </div>
  </div>
</div>
      </div>
    </>
  );
};

export default Adminproject;
