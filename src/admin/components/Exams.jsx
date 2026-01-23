// import React from "react";
// import "../../common/exam.css";


// const Exams = () => {
//   return (
//     <div className="box">
//       <button className="active-btn">Active</button>

//       <h3>C++ (copy)</h3>

//       <div className="stats">
//         <span>
//           <i className="fa-solid fa-user-group"></i>0
//         </span>
//         <span>
//           <i className="fa-solid fa-percent"></i>0%
//         </span>
//       </div>
//       <div className="inline-actions">
//         <span className="action preview">
//           <i className="fa-solid fa-eye"></i> Preview
//         </span>

//         <span className="action view">
//           <i className="fa-solid fa-eye"></i> View
//         </span>

//         <span className="action edit">
//           <i className="fa-solid fa-pen"></i> Edit
//         </span>

//         <span className="action share">
//           <i className="fa-solid fa-share"></i> Share
//         </span>

//         <span className="action duplicate">
//           <i className="fa-solid fa-copy"></i> Duplicate
//         </span>

//         <span className="action delete">
//           <i className="fa-regular fa-trash-can"></i> Delete
//         </span>
//       </div>



//     </div>



//   );
// };

// export default Exams;



import React, { useState } from "react";
import "../../common/exam.css";

const Exams = () => {
  const [examsData, setExamsData] = useState([
    { id: 1, status: "Active", title: "C++ (copy)", users: 0, percentage: 0 },
    { id: 2, status: "Active", title: "Java Basics", users: 12, percentage: 75 },
    { id: 3, status: "Active", title: "Html", users: 15, percentage: 96 },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedExam, setSelectedExam] = useState(null);
  const [actionType, setActionType] = useState("");
  const [editTitle, setEditTitle] = useState("");

  const openModal = (exam, action) => {
    setSelectedExam(exam);
    setActionType(action);
    setEditTitle(exam.title);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedExam(null);
    setActionType("");
  };

  const handleConfirm = () => {
    if (actionType === "Edit") {
      setExamsData((prev) =>
        prev.map((e) =>
          e.id === selectedExam.id ? { ...e, title: editTitle } : e
        )
      );
    }
    closeModal();
  };

  const handleDuplicate = (exam) => {
    setExamsData((prev) => [
      ...prev,
      { ...exam, id: Date.now(), title: exam.title + " (copy)" },
    ]);
  };

  const handleDelete = (id) => {
    setExamsData((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <>
      {examsData.map((exam) => (
        <div className="box" key={exam.id}>
          <button className="active-btn">{exam.status}</button>

          <h3>{exam.title}</h3>

          <div className="stats">
            <span>👥 {exam.users}</span>
            <span>📊 {exam.percentage}%</span>
          </div>

          <div className="inline-actions">
            <span
              className="action preview"
              onClick={() => openModal(exam, "Preview")}
            >
              Preview
            </span>

            <span
              className="action view"
              onClick={() => openModal(exam, "View")}
            >
              View
            </span>

            <span
              className="action edit"
              onClick={() => openModal(exam, "Edit")}
            >
              Edit
            </span>

            <span
              className="action share"
              onClick={() => openModal(exam, "Share")}
            >
              Share
            </span>

            <span
              className="action duplicate"
              onClick={() => handleDuplicate(exam)}
            >
              Duplicate
            </span>

            <span
              className="action delete"
              onClick={() => handleDelete(exam.id)}
            >
              Delete
            </span>
          </div>
        </div>
      ))}

      {/* ===== MODAL ===== */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>{actionType} Exam</h2>

            {actionType === "Edit" ? (
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
            ) : (
              <p>
                You selected <strong>{selectedExam?.title}</strong>
              </p>
            )}

            <div className="modal-actions">
              <button className="btn-secondary" onClick={closeModal}>
                Cancel
              </button>
              <button className="btn-primary" onClick={handleConfirm}>
                {actionType === "Edit" ? "Update" : "Confirm"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Exams;



