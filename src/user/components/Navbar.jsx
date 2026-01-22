import React from 'react'

function Navbar() {
  return (
    <div>
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
        <a href='/admin/dashboard' style={{textDecoration:"none"}}>
        <button className="admin-btn" >
            <i
             className="fas fa-shield-alt"
             style={{
             fontSize: "14px",
             color: "#374151",
             marginRight: "6px"
             }}
            ></i>
            Login
        </button>
        </a>

      </div>
    </nav>
    </div>
  )
}

export default Navbar
