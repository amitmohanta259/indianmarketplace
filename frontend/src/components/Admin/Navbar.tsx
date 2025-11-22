// FILE: src/components/Admin/Navbar.tsx

import React from "react";
import "./Dashboard.css";
import logo from "../../assets/adminutil/photo/counter-strike-source-48.png";
import notification from "../../assets/adminutil/photo/icons8-notification.gif";
import message from "../../assets/adminutil/photo/icons8-message-read.gif";
import favorites from "../../assets/adminutil/photo/icons8-favorites-48.png";
interface NavbarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">

        {/* BRAND LOGO */}
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            alt="Counter Strike"
            width="30"
            height="28"
            className="d-inline-block align-text-top"
          />
          &nbsp;Counter Strike
        </a>

        {/* TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* COLLAPSIBLE CONTENT */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          {/* NAV TABS */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="navbar-content">

            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === "home" ? "active" : ""}`}
                onClick={() => onTabChange("home")}
                href="#"
              >
                Home
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === "orders" ? "active" : ""}`}
                onClick={() => onTabChange("orders")}
                href="#"
              >
                Order History
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                href="#"
              >
                Inventory
              </a>

              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Vegetables</a></li>
                <li><a className="dropdown-item" href="#">Cereals</a></li>
                <li><a className="dropdown-item" href="#">Edible Oils</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Gas</a></li>
                <li><a className="dropdown-item" href="#">Utensils</a></li>
              </ul>
            </li>

            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === "market" ? "active" : ""}`}
                onClick={() => onTabChange("market")}
                href="#"
              >
                Market Place
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === "payment" ? "active" : ""}`}
                onClick={() => onTabChange("payment")}
                href="#"
              >
                Payment History
              </a>
            </li>
          </ul>

          {/* ⭐⭐⭐ FORM SECTION YOU SAID IS MISSING ⭐⭐⭐ */}
          <form className="d-flex align-items-center">
            <div className="row" style={{ marginLeft: "0.5%" }}>

              {/* TIME + DATE */}
              <div
                className="col-6 text-center"
                style={{ borderRight: "1px solid rgb(143,140,140)" }}
              >
                <div className="row">16:44</div>
                <div className="row" style={{ fontSize: "x-small" }}>
                  Dec 29, 2022
                </div>
              </div>

              {/* ICONS */}
              <div className="col-6">
                <div className="row text-center">
                  <div className="col-4">
                    <img
                      src={notification}
                      width="18"
                      height="16"
                      alt=""
                      name ="notification"
                    />
                  </div>
                  <div className="col-4">
                    <img
                      src={message}
                      width="18"
                      height="16"
                      alt=""
                      name="message"
                    />
                  </div>
                  <div className="col-4">
                    <img
                      src={favorites}
                      width="18"
                      height="16"
                      alt=""
                      name="favorites"
                    />
                  </div>
                </div>
              </div>

            </div>
          </form>
          {/* END OF FORM SECTION */}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
