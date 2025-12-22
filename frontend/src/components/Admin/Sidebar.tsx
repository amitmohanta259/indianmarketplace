import React, { useState } from "react";
import accountIcon from "../../assets/adminutil/photo/icons8-notification.gif";
import homeIcon from "../../assets/adminutil/photo/icons8-home.gif";
import taskIcon from "../../assets/adminutil/photo/icons8-checked-checkbox.gif";
import activityIcon from "../../assets/adminutil/photo/icons8-activity.gif";
import usersIcon from "../../assets/adminutil/photo/icons8-user.gif";
import notificationsIcon from "../../assets/adminutil/photo/icons8-notification.gif";
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
];

const LeftSidebar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string>("home");

  return (
    <div
      className="col-2"
      style={{ position: "fixed", left: 0, height: "100vh" }}
    >
      {/* Menu */}
      <div className="row mt-3">
        <div style={{ fontSize: "0.8rem", fontWeight: 500 }}>Menu</div>

        <div className="list-group">
          {menuItems.map((item) => {
            const isActive = activeMenu === item.key;

            return (
              <div
                key={item.key}
                style={{
                  marginLeft: "0.5rem",
                  marginBottom: "4px",
                  borderLeft: `0.5rem solid ${
                    isActive ? "red" : "white"
                  }`,
                  borderRadius: "5px",

                }}
              >
                <button
                  type="button"
                  onClick={() => setActiveMenu(item.key)}
                  className={`list-group-item list-group-item-action d-flex align-items-center position-relative`}
                  style={{
                    border: "none",
                    background: "transparent",
                    width: "100%",
                    textAlign: "left",
                  }}
                >
                  <img
                    src={item.icon}
                    alt=""
                    width={18}
                    height={16}
                    style={{ marginRight: "6px" }}
                  />
                  {item.label}

                  {item.badge && (
                    <span
                      className="badge bg-danger position-absolute top-50 start-100 translate-middle"
                      style={{ marginLeft: "-1rem" }}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
