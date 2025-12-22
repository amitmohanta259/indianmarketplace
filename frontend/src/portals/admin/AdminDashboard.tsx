    // src/pages/Admin/AdminDashboard.tsx
    import React, { useState } from "react";
    import Navbar from "../../components/Admin/Navbar";
    import Sidebar from "../../components/Admin/Sidebar";
    import RightSidebar from "../../components/Admin/RightSidebar";
    import DashboardContent from "../../components/Admin/DashboardContent";
    import "../styles/AdminDashboard.css";

    // --------------------------
    // LOCAL TYPES (No AdminTypes.ts)
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
      const [activeTab, setActiveTab] = useState<string>("nav-home");
      const [activeMenu, setActiveMenu] = useState<string>("home");
      const [searchQuery, setSearchQuery] = useState<string>("");

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
        { id: "support", label: "Notifications", icon: "/assets/adminutil/icons/support-32.png" },
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

      // --------------------------
      // USER PROFILE
      // --------------------------
      const userProfile: UserProfileType = {
        name: "Amit Mohanta",
        email: "amitmohanta@gmail.com",
        avatar: "https://images.unsplash.com/photo-1582233479366-6d38bc390a08",
      };

      // --------------------------
      // EVENT HANDLERS
      // --------------------------
      const handleMenuClick = (menuId: string) => {
        setActiveMenu(menuId);
      };

      const handleSearchChange = (query: string) => {
        setSearchQuery(query);
      };

      const handleTaskComplete = (taskId: string) => {
        console.log("Task Completed:", taskId);
      };

      const handleNewTask = () => {
        console.log("Create new task");
      };

      return (
        <div className="admin-dashboard">

          {/* FIXED NAVBAR */}
          <div className="row position-fixed top-0 start-0 w-100" style={{ zIndex: 1000 }}>
            <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
          </div>

          {/* PAGE CONTENT - PUSHED BELOW NAVBAR */}
          <div className="row position-fixed" style={{ marginTop: "3.5rem", marginBottom: "2rem" }}>

            {/* LEFT SIDEBAR */}
            <Sidebar
              mainMenuItems={mainMenuItems}
              settingsMenuItems={settingsMenuItems}
              groupMenuItems={groupMenuItems}
              userProfile={userProfile}
              searchQuery={searchQuery}
              activeMenu={activeMenu}
              onMenuClick={handleMenuClick}
              onSearchChange={handleSearchChange}
            />

            {/* CENTER CONTENT */}
            <div
              className="col-7 scrollBar"
              style={{
                  position: "relative",
                  overflowY: "auto",     // vertical scroll
                  height: "calc(100vh - 56px)", // full screen height minus navbar height
                  marginLeft: "16.5%",   // adjust for sidebar width
                  padding: "1rem",
                  backgroundColor: "#f8f9fa",
                  borderRadius: "5px",
                }}
            >
              <DashboardContent />
            </div>

            {/* RIGHT SIDEBAR */}
            <RightSidebar
              activeTab={activeTab}
              tasks={tasks}
              onTabChange={setActiveTab}
              onTaskComplete={handleTaskComplete}
              onNewTask={handleNewTask}
            />
          </div>
        </div>
      );
    };

    export default AdminDashboard;
