import React from "react";
import "./examCard.css";

export const ExamCard = () => {
  return (
    <section className="exam-section">
      <h2 className="exam-title">Assess Your Skills</h2>
      <p className="exam-subtitle">
        Practice, evaluate, and prepare with industry-relevant assessments
      </p>

      <div className="exam-grid">
        <div className="exam-card">
          <h3>Programming Tests</h3>
          <p>
            Evaluate your core programming knowledge with timed coding-based
            assessments.
          </p>
          <span className="exam-tag">C • C++ • Java • Python</span>
        </div>

        <div className="exam-card">
          <h3>Web Development</h3>
          <p>
            Test your understanding of frontend and backend technologies used
            in real-world applications.
          </p>
          <span className="exam-tag">HTML • CSS • JS • React</span>
        </div>

        <div className="exam-card">
          <h3>Mock Placement Exams</h3>
          <p>
            Experience placement-style exams with aptitude, technical, and
            logical questions.
          </p>
          <span className="exam-tag">Aptitude • Technical</span>
        </div>
      </div>
    </section>
  );
};
