import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleAuth = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm px-3" id="main-navbar">
      <div className="container-fluid">

        {/* Brand / Logo */}
        <a className="navbar-brand fw-bold fs-4" href="#">
          AM
        </a>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto gap-3">
            <li className="nav-item">
              <a className="nav-link" href="#">Collections</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Materials</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Compatibility</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Cart</a>
            </li>
          </ul>

          {/* Profile Section */}
          <div className="d-flex align-items-center profile-btn" onClick={handleAuth} style={{ cursor: "pointer" }}>
            <FaUserCircle size={28} className="me-2" />
            <span className="fw-semibold">{isLoggedIn ? "Logout" : "Login"}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
