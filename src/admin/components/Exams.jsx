import React from "react";
import "../../common/exam.css";

const Exams = () => {
  return (
    <div className="box">
      <button className="active-btn">Active</button>

      <h3>C++ (copy)</h3>

      <div className="stats">
        <span>
          <i className="fa-solid fa-user-group"></i>0
        </span>
        <span>
          <i className="fa-solid fa-percent"></i>0%
        </span>
      </div>
      <div className="inline-actions">
        <span className="action preview">
          <i className="fa-solid fa-eye"></i> Preview
        </span>

        <span className="action view">
          <i className="fa-solid fa-eye"></i> View
        </span>

        <span className="action edit">
          <i className="fa-solid fa-pen"></i> Edit
        </span>

        <span className="action share">
          <i className="fa-solid fa-share"></i> Share
        </span>

        <span className="action duplicate">
          <i className="fa-solid fa-copy"></i> Duplicate
        </span>

        <span className="action delete">
          <i className="fa-regular fa-trash-can"></i> Delete
        </span>
      </div>



    </div>



  );
};

export default Exams;
