import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleAuth = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <nav className="navbar">
      <h1 className="logo">AM</h1>
      <ul className="nav-links">
        <li>Collections</li>
        <li>Materials</li>
        <li>Compatibility</li>
        <li>About Us</li>
        <li>Cart</li>
      </ul>
      <div className="profile" onClick={handleAuth}>
        <FaUserCircle size={28} />
        <span>{isLoggedIn ? "Logout" : "Login"}</span>
      </div>
    </nav>
  );
};

export default Navbar;
