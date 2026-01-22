import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
      {/* Left Section */}
      <div className="navbar-left">
        <div className="logo">
          🎓
        </div>
        <span className="brand-name">Shree Genious IT Hub</span>
      </div>

      {/* Right Section */}
      <div className="navbar-right">
        <button className="admin-btn">
          🛡️ Admin
        </button>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
