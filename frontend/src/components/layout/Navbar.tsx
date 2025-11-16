import React from 'react';

interface NavbarProps {
  onSidebarToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSidebarToggle }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
      <div className="container-fluid">
        <button
          className="btn btn-sm btn-outline-secondary me-2"
          onClick={onSidebarToggle}
          title="Toggle Sidebar"
        >
          <i className="fas fa-bars"></i>
        </button>

        <a className="navbar-brand fw-bold" href="#">
          <img
            src="/icons/logo.png"
            alt="Counter Strike"
            width="30"
            height="28"
            className="d-inline-block align-text-top"
          />
          &nbsp;Counter Strike
        </a>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active fw-semibold" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#">Order History</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle fw-semibold" href="#" role="button">
                Inventory
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#">Market Place</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#">Payment History</a>
            </li>
          </ul>

          <div className="d-flex align-items-center">
            <div className="border-end pe-3 me-3">
              <div className="fw-semibold">16:44</div>
              <small className="text-muted">Dec 29, 2022</small>
            </div>
            <div className="d-flex gap-3">
              <button className="btn btn-sm btn-outline-secondary position-relative">
                <img src="/icons/notification.gif" alt="Notifications" width="16" />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  9
                </span>
              </button>
              <button className="btn btn-sm btn-outline-secondary">
                <img src="/icons/message.gif" alt="Messages" width="16" />
              </button>
              <button className="btn btn-sm btn-outline-secondary">
                <img src="/icons/favorites.png" alt="Favorites" width="16" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;