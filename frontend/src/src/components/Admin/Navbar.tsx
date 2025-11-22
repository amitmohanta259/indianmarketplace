import React from "react";
import "./Dashboard.css";

interface NavbarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}
import logo from "../../assets/adminutil/photo/counter-strike-source-48.png";
const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src = {logo}
            alt="Counter Strike"
            width="30"
            height="28"
            className="d-inline-block align-text-top"
          />
          &nbsp;Counter Strike
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                className={`nav-link ${
                  activeTab === "orders" ? "active" : ""
                }`}
                onClick={() => onTabChange("orders")}
                href="#"
              >
                Order History
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
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
                className={`nav-link ${
                  activeTab === "market" ? "active" : ""
                }`}
                onClick={() => onTabChange("market")}
                href="#"
              >
                Market Place
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === "payment" ? "active" : ""
                }`}
                onClick={() => onTabChange("payment")}
                href="#"
              >
                Payment History
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
