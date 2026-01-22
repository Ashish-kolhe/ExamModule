import React from "react";

export const Footer = () => {
  return (
    <div
      className="sidebar-footer"
      style={{
        padding: "20px",
        borderTop: "1px solid #ffffff",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <button
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "10px 16px",
          border: "none",
          borderRadius: "10px",
          backgroundColor: "white",
          color: "#ff0000",
          cursor: "pointer",
        }}
      >
        <i className="fa-solid fa-right-from-bracket"></i>
        Logout
      </button>
    </div>
  );
};
