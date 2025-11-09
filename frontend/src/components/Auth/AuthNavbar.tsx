// src/components/Auth/AuthNavbar.tsx
import React from "react";

const AuthNavbar: React.FC = () => {
  return (
    <nav
      className="navbar navbar-light bg-white"
      style={{ position: "relative", zIndex: 10, boxShadow: "0 1px 6px rgba(0,0,0,0.06)" }}
    >
      <div className="container-fluid d-flex align-items-center">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#" style={{ textDecoration: "none", color: "#111" }}>
          <img
            src="http://clipart-library.com/images_k/chef-hat-transparent-png/chef-hat-transparent-png-12.png"
            width="34"
            height="34"
            alt="logo"
            className="d-inline-block align-top"
          />
          <span style={{ fontWeight: 700, fontSize: "1.05rem" }}>Indian Market Place</span>
        </a>
      </div>
    </nav>
  );
};

export default AuthNavbar;
