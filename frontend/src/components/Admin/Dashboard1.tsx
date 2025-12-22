import React, { useState } from "react";
import Navbar from "../../components/Admin/Navbar";
import LeftSidebar from "../../components/Admin/LeftSidebar"; // <-- updated
import RightSidebar from "../../components/Admin/RightSidebar";
import DashboardContent from "../../components/Admin/DashboardContent";
import "../styles/AdminDashboard.css";

// --------------------------
// LOCAL TYPES (No AdminTypes.ts)
// --------------------------
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
  const [activeTab, setActiveTab] = useState<string>("nav-home");

  // --------------------------
  // TASKS
  // --------------------------
  const tasks: TaskItem[] = [
    {
      id: "1",
      title: "Client Review Login",
      module: "Login Module",
      description:
        "Placeholder content for testing the UI with long text describing the module.",
      time: "Today 10:00 PM",
      assignedUsers: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      ],
    },
    {
      id: "2",
      title: "Client Review Signup",
      module: "SignUp Module",
      description:
        "More placeholder content to check how the card behaves with multiple users.",
      time: "Today 11:00 PM",
      assignedUsers: [
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      ],
    },
  ];

  return (
    <div className="admin-dashboard">

      {/* FIXED NAVBAR */}
      <div className="row position-fixed top-0 start-0 w-100" style={{ zIndex: 1000 }}>
        <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      {/* PAGE CONTENT - PUSHED BELOW NAVBAR */}
      <div
        className="row"
        style={{ marginTop: "3.5rem", marginBottom: "2rem" }}
      >
        {/* LEFT SIDEBAR */}
        <LeftSidebar />

        {/* CENTER CONTENT */}
        <div
          className="col-7 scrollBar"
          style={{
            position: "fixed",
            overflow: "auto",
            height: "500px",
            left: "16.5%", // adjust based on sidebar width
          }}
        >
          <DashboardContent />
        </div>

        {/* RIGHT SIDEBAR */}
        <RightSidebar
          activeTab={activeTab}
          tasks={tasks}
          onTabChange={setActiveTab}
          onTaskComplete={(taskId) => console.log("Task Completed:", taskId)}
          onNewTask={() => console.log("Create new task")}
        />
      </div>
    </div>
  );
};

export default AdminDashboard;
