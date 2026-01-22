import React from "react";
import "./hero.css";

export const Hero = () => {
  return (
    <section className="hero">
      {/* Left Card */}
      <div className="hero-card left-card">
        <h1>Excellence in IT Education</h1>
        <p className="subtitle">
          Building strong foundations in modern technologies
        </p>

        <ul className="tech-list">
          <li>Programming: C, C++, Java, Python</li>
          <li>Web: HTML, CSS, JavaScript, React</li>
          <li>Backend: Spring Boot, Node.js</li>
          <li>Databases: MySQL, MongoDB</li>
        </ul>

        <div className="highlight">
          🚀 Industry-oriented curriculum with real-world projects
        </div>
      </div>

      {/* Right Card */}
      <div className="hero-card right-card">
        <h1>Learn. Build. Get Placed.</h1>
        <p className="subtitle">
          Transforming students into job-ready professionals
        </p>

        <ul className="tech-list">
          <li>Hands-on Practical Training</li>
          <li>Internship-Oriented Learning</li>
          <li>Mock Interviews & Resume Building</li>
          <li>Dedicated Placement Support</li>
        </ul>

        <div className="highlight">
          🎯 100% Career Guidance & Placement Assistance
        </div>
      </div>
    </section>
  );
};
