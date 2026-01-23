import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      {/* Left Section */}
      <div className="navbar-left">
        <div
          style={{
            width: "36px",
            height: "36px",
            backgroundColor: "#5b5bf7",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ffffff",
            fontSize: "16px"
          }}
        >
          <i className="fas fa-graduation-cap"></i>
        </div>

        <span className="brand-name">Shree Genious IT Hub</span>
      </div>

      {/* Right Section */}
      <div className="navbar-right">
        <Link to="/admin/login" style={{ textDecoration: "none" }}>
          <button className="admin-btn">
            <i
              className="fas fa-shield-alt"
              style={{ fontSize: "14px", marginRight: "6px" }}
            ></i>
            Admin Login
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
