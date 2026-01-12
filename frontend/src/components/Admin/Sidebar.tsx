import React, { useState } from "react";

import accountIcon from "../../assets/adminutil/photo/icons8-notification.gif";
import homeIcon from "../../assets/adminutil/photo/icons8-home.gif";
import taskIcon from "../../assets/adminutil/photo/icons8-checked-checkbox.gif";
import activityIcon from "../../assets/adminutil/photo/icons8-activity.gif";
import usersIcon from "../../assets/adminutil/photo/icons8-user.gif";
import notificationsIcon from "../../assets/adminutil/photo/icons8-notification.gif";
import logoutIcon from "../../assets/adminutil/photo/icons8-imac-exit-24.png";
type MenuItem = {
  key: string;
  label: string;
  icon: string;
  badge?: number;
};

const menuItems: MenuItem[] = [
  { key: "account", label: "Account", icon: accountIcon },
  { key: "home", label: "Home", icon: homeIcon, badge: 4 },
  { key: "task", label: "Task", icon: taskIcon },
  { key: "activity", label: "Activity", icon: activityIcon },
  { key: "users", label: "Users", icon: usersIcon },
  {
    key: "notifications",
    label: "Notifications",
    icon: notificationsIcon,
    badge: 9,
  },
  {
      key: "setting",
      label: "Setting",
      icon: usersIcon,
    },
];

const LeftSidebar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState("home");

  return (
    <div
      className="d-flex flex-column"
      style={{
        position: "fixed",
        top: "56px",
        left: 0,
        width: "16.6667%",
        height: "calc(100vh - 56px)",
        padding: "1rem",
        backgroundColor: "#fff",
      }}
    >
      {/* ===== MENU ===== */}
      <div>
        <div className="mb-2" style={{ fontSize: "0.8rem", fontWeight: 500 }}>
          Menu
        </div>

        <div className="list-group list-group-flush">
          {menuItems.map((item) => {
            const isActive = activeMenu === item.key;

            return (
              <div
                key={item.key}
                style={{
                  marginBottom: "4px",
                  borderLeft: `4px solid ${
                    isActive ? "red" : "transparent"
                  }`,
                  borderRadius: "4px",
                }}
              >
                <button
                  type="button"
                  onClick={() => setActiveMenu(item.key)}
                  className="list-group-item list-group-item-action d-flex align-items-center"
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                  }}
                >
                  <img
                    src={item.icon}
                    alt={item.label}
                    width={18}
                    height={16}
                    className="me-2"
                  />
                  <span>{item.label}</span>

                  {item.badge && (
                    <span className="badge bg-danger ms-auto">
                      {item.badge}
                    </span>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* ===== PROFILE (BOTTOM FIXED) ===== */}
      <div style={{ marginTop: "auto" }}>
        <div
          className="p-2"
          style={{
            backgroundColor: "#fff",
            borderRadius: "0.5rem",
          }}
        >
          <div className="row align-items-center g-2">
            <div className="col-3">
              <img
                src="https://images.unsplash.com/photo-1582233479366-6d38bc390a08"
                alt="profile"
                className="img-fluid"
                style={{ borderRadius: "0.5rem" }}
              />
            </div>

            <div className="col-7">
              <div style={{ fontSize: "0.85rem", fontWeight: 500 }}>
                Amit Mohanta
              </div>
              <div
                style={{
                  fontSize: "0.7rem",
                  color: "#6c757d",
                }}
              >
                amitmohanta@gmail.com
              </div>
            </div>

            <div className="col-2 text-end" style={{marginTop:"-0.5rem"}}>
              <img
                src={logoutIcon}
                alt="Logout"
                width={18}
                height={16}
                style={{ cursor: "pointer" }}
                onClick={() => console.log("Logout clicked")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
