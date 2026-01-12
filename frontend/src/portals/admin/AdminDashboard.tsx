// src/portals/admin/AdminDashboard.tsx
import React, { useState } from "react";
import Navbar from "../../components/Admin/Navbar";
import Sidebar from "../../components/Admin/Sidebar";
import RightSidebar from "../../components/Admin/RightSidebar";
import DashboardContent from "../../components/Admin/DashboardContent";
import "bootstrap/dist/css/bootstrap.min.css";

// --------------------------
// TYPES
// --------------------------
type MenuItemType = {
  id: string;
  label: string;
  icon: string;
  badge?: number;
};

type TaskItem = {
  id: string;
  title: string;
  module: string;
  description: string;
  time: string;
  assignedUsers: string[];
};

type UserProfileType = {
  name: string;
  email: string;
  avatar: string;
};

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState("nav-home");
  const [activeMenu, setActiveMenu] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");

  // --------------------------
  // MENU DATA
  // --------------------------
  const mainMenuItems: MenuItemType[] = [
    { id: "account", label: "Account", icon: "/assets/adminutil/icons/male-user.gif" },
    { id: "home", label: "Home", icon: "/assets/adminutil/icons/home.gif", badge: 4 },
    { id: "task", label: "Task", icon: "/assets/adminutil/icons/checked-checkbox.gif" },
    { id: "activity", label: "Activity", icon: "/assets/adminutil/icons/activity.gif" },
    { id: "users", label: "Users", icon: "/assets/adminutil/icons/user.gif" },
    { id: "notifications", label: "Notifications", icon: "/assets/adminutil/icons/notification.gif", badge: 9 },
  ];

  const settingsMenuItems: MenuItemType[] = [
    { id: "settings", label: "Account", icon: "/assets/adminutil/icons/settings.gif" },
    { id: "support", label: "Support", icon: "/assets/adminutil/icons/support-32.png" },
  ];

  const groupMenuItems: MenuItemType[] = [
    { id: "linkedin", label: "Linkedin", icon: "/assets/adminutil/icons/linkedin-48.png" },
    { id: "twitter", label: "Twitter", icon: "/assets/adminutil/icons/twitter-48.png" },
    { id: "facebook", label: "Facebook", icon: "/assets/adminutil/icons/facebook-48.png" },
    { id: "instagram", label: "Instagram", icon: "/assets/adminutil/icons/instagram-48.png" },
  ];

  // --------------------------
  // TASKS
  // --------------------------
  const tasks: TaskItem[] = [
    {
      id: "1",
      title: "Client Review Login",
      module: "Login Module",
      description: "Placeholder content for testing UI with long text.",
      time: "Today 10:00 PM",
      assignedUsers: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      ],
    },
    {
      id: "2",
      title: "Client Review Signup",
      module: "Signup Module",
      description: "More placeholder content to test layout.",
      time: "Today 11:00 PM",
      assignedUsers: [
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      ],
    },
  ];

  // --------------------------
  // USER PROFILE
  // --------------------------
  const userProfile: UserProfileType = {
    name: "Amit Mohanta",
    email: "amitmohanta@gmail.com",
    avatar: "https://images.unsplash.com/photo-1582233479366-6d38bc390a08",
  };

  return (
    <div className="container-fluid p-0">

      {/* ================= NAVBAR ================= */}
      <div className="row g-0 fixed-top bg-white" style={{ zIndex: 1000 }}>
        <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      {/* ================= MAIN LAYOUT ================= */}
      <div
        className="row g-0"
        style={{
          marginTop: "56px", // navbar height
          height: "calc(100vh - 56px)",
        }}
      >
        {/* ---------- LEFT SIDEBAR ---------- */}
        <div className="col-2 px-3">
          <Sidebar
            mainMenuItems={mainMenuItems}
            settingsMenuItems={settingsMenuItems}
            groupMenuItems={groupMenuItems}
            userProfile={userProfile}
            searchQuery={searchQuery}
            activeMenu={activeMenu}
            onMenuClick={setActiveMenu}
            onSearchChange={setSearchQuery}
          />
        </div>

        {/* ---------- CENTER CONTENT ---------- */}
        <div
          className="col-7 px-3"
          style={{
            overflowY: "auto",
            backgroundColor: "#f8f9fa",
            borderRadius: "0.5rem",
            border:"none",
          }}
        >
          <DashboardContent />
        </div>

        {/* ---------- RIGHT SIDEBAR ---------- */}
        <div className="col-3 px-2">
          <RightSidebar
            activeTab={activeTab}
            tasks={tasks}
            onTabChange={setActiveTab}
            onTaskComplete={(id) => console.log("Completed:", id)}
            onNewTask={() => console.log("New Task")}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
