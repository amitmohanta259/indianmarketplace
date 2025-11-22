import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/portals/admin/AdminDashboard.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=af04d629"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=af04d629"; const React = __vite__cjsImport1_react.__esModule ? __vite__cjsImport1_react.default : __vite__cjsImport1_react; const useState = __vite__cjsImport1_react["useState"];
import Navbar from "/src/components/Admin/Navbar.tsx";
import Sidebar from "/src/components/Admin/Sidebar.tsx";
import RightSidebar from "/src/components/Admin/RightSidebar.tsx";
import DashboardContent from "/src/components/Admin/DashboardContent.tsx";
import "/src/portals/styles/AdminDashboard.css";
const AdminDashboard = () => {
  _s();
  const [activeTab, setActiveTab] = useState("nav-home");
  const [activeMenu, setActiveMenu] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");
  const mainMenuItems = [
    { id: "account", label: "Account", icon: "/assets/adminutil/icons/male-user.gif", badge: void 0 },
    { id: "home", label: "Home", icon: "/assets/adminutil/icons/home.gif", badge: 4 },
    { id: "task", label: "Task", icon: "/assets/adminutil/icons/checked-checkbox.gif" },
    { id: "activity", label: "Activity", icon: "/assets/adminutil/icons/activity.gif" },
    { id: "users", label: "Users", icon: "/assets/adminutil/icons/user.gif" },
    { id: "notifications", label: "Notifications", icon: "/assets/adminutil/icons/notification.gif", badge: 9 }
  ];
  const settingsMenuItems = [
    { id: "settings", label: "Account", icon: "/assets/adminutil/icons/settings.gif" },
    { id: "support", label: "Notifications", icon: "/assets/adminutil/icons/support-32.png" }
  ];
  const groupMenuItems = [
    { id: "linkedin", label: "Linkedin", icon: "/assets/adminutil/icons/linkedin-48.png" },
    { id: "twitter", label: "Twitter", icon: "/assets/adminutil/icons/twitter-48.png" },
    { id: "facebook", label: "Facebook", icon: "/assets/adminutil/icons/facebook-48.png" },
    { id: "instagram", label: "Instagram", icon: "/assets/adminutil/icons/instagram-48.png" }
  ];
  const tasks = [
    {
      id: "1",
      title: "Client Review Login",
      module: "Login Module",
      description: "Placeholder content for testing the UI with long text describing the module.",
      time: "Today 10:00 PM",
      assignedUsers: [
        "https://images.unsplash.com/photo-1494790108755-2616b612b786",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
      ]
    },
    {
      id: "2",
      title: "Client Review Signup",
      module: "SignUp Module",
      description: "More placeholder content to check how the card behaves with multiple users.",
      time: "Today 11:00 PM",
      assignedUsers: [
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
      ]
    }
  ];
  const userProfile = {
    name: "Amit Mohanta",
    email: "amitmohanta@gmail.com",
    avatar: "https://images.unsplash.com/photo-1582233479366-6d38bc390a08"
  };
  const handleMenuClick = (menuId) => {
    setActiveMenu(menuId);
  };
  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };
  const handleTaskComplete = (taskId) => {
    console.log("Task Completed:", taskId);
  };
  const handleNewTask = () => {
    console.log("Create new task");
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "admin-dashboard", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "row", children: /* @__PURE__ */ jsxDEV(Navbar, { activeTab, onTabChange: setActiveTab }, void 0, false, {
      fileName: "/Users/amitkumarmohanta/Desktop/IndiaMarketPlace/frontend/src/portals/admin/AdminDashboard.tsx",
      lineNumber: 106,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/Users/amitkumarmohanta/Desktop/IndiaMarketPlace/frontend/src/portals/admin/AdminDashboard.tsx",
      lineNumber: 105,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "row", children: [
      /* @__PURE__ */ jsxDEV(
        Sidebar,
        {
          mainMenuItems,
          settingsMenuItems,
          groupMenuItems,
          userProfile,
          searchQuery,
          activeMenu,
          onMenuClick: handleMenuClick,
          onSearchChange: handleSearchChange
        },
        void 0,
        false,
        {
          fileName: "/Users/amitkumarmohanta/Desktop/IndiaMarketPlace/frontend/src/portals/admin/AdminDashboard.tsx",
          lineNumber: 112,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: "col-7 scrollBar",
          style: {
            position: "relative",
            overflow: "auto",
            height: "900px",
            left: "16.5%"
          },
          children: /* @__PURE__ */ jsxDEV(DashboardContent, {}, void 0, false, {
            fileName: "/Users/amitkumarmohanta/Desktop/IndiaMarketPlace/frontend/src/portals/admin/AdminDashboard.tsx",
            lineNumber: 133,
            columnNumber: 11
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/Users/amitkumarmohanta/Desktop/IndiaMarketPlace/frontend/src/portals/admin/AdminDashboard.tsx",
          lineNumber: 124,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        RightSidebar,
        {
          activeTab,
          tasks,
          onTabChange: setActiveTab,
          onTaskComplete: handleTaskComplete,
          onNewTask: handleNewTask
        },
        void 0,
        false,
        {
          fileName: "/Users/amitkumarmohanta/Desktop/IndiaMarketPlace/frontend/src/portals/admin/AdminDashboard.tsx",
          lineNumber: 137,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/Users/amitkumarmohanta/Desktop/IndiaMarketPlace/frontend/src/portals/admin/AdminDashboard.tsx",
      lineNumber: 109,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/amitkumarmohanta/Desktop/IndiaMarketPlace/frontend/src/portals/admin/AdminDashboard.tsx",
    lineNumber: 103,
    columnNumber: 5
  }, this);
};
_s(AdminDashboard, "DHTA44o0OIknmQ0FHgk/QpjL5Nc=");
_c = AdminDashboard;
export default AdminDashboard;
var _c;
$RefreshReg$(_c, "AdminDashboard");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/amitkumarmohanta/Desktop/IndiaMarketPlace/frontend/src/portals/admin/AdminDashboard.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/amitkumarmohanta/Desktop/IndiaMarketPlace/frontend/src/portals/admin/AdminDashboard.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "/Users/amitkumarmohanta/Desktop/IndiaMarketPlace/frontend/src/portals/admin/AdminDashboard.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,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U2lkZWJhciIsIkRhc2hib2FyZENvbnRlbnQiLCJBZG1pbkRhc2hib2FyZCIsIl9zIiwiYWN0aXZlVGFiIiwic2V0QWN0aXZlVGFiIiwiYWN0aXZlTWVudSIsInNldEFjdGl2ZU1lbnUiLCJzZWFyY2hRdWVyeSIsInNldFNlYXJjaFF1ZXJ5IiwibWFpbk1lbnVJdGVtcyIsImlkIiwibGFiZWwiLCJpY29uIiwiYmFkZ2UiLCJ1bmRlZmluZWQiLCJzZXR0aW5nc01lbnVJdGVtcyIsImdyb3VwTWVudUl0ZW1zIiwidGFza3MiLCJ0aXRsZSIsIm1vZHVsZSIsImRlc2NyaXB0aW9uIiwidGltZSIsImFzc2lnbmVkVXNlcnMiLCJ1c2VyUHJvZmlsZSIsIm5hbWUiLCJlbWFpbCIsImF2YXRhciIsImhhbmRsZU1lbnVDbGljayIsIm1lbnVJZCIsImhhbmRsZVNlYXJjaENoYW5nZSIsInF1ZXJ5IiwiaGFuZGxlVGFza0NvbXBsZXRlIiwidGFza0lkIiwiY29uc29sZSIsImxvZyIsImhhbmRsZU5ld1Rhc2siLCJwb3NpdGlvbiIsIm92ZXJmbG93IiwiaGVpZ2h0IiwibGVmdCIsIl9jIiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkFkbWluRGFzaGJvYXJkLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvcGFnZXMvQWRtaW4vQWRtaW5EYXNoYm9hcmQudHN4XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQWRtaW4vTmF2YmFyXCI7XG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9BZG1pbi9TaWRlYmFyXCI7XG5pbXBvcnQgUmlnaHRTaWRlYmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0FkbWluL1JpZ2h0U2lkZWJhclwiO1xuaW1wb3J0IERhc2hib2FyZENvbnRlbnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQWRtaW4vRGFzaGJvYXJkQ29udGVudFwiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL0FkbWluRGFzaGJvYXJkLmNzc1wiO1xuXG4vLyBJbXBvcnQgVHlwZXNcbi8vaW1wb3J0IHsgTWVudUl0ZW1UeXBlLCBUYXNrSXRlbSwgVXNlclByb2ZpbGVUeXBlIH0gZnJvbSBcIi4uLy4uL3R5cGVzL0FkbWluVHlwZXNcIjtcblxuY29uc3QgQWRtaW5EYXNoYm9hcmQ6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbYWN0aXZlVGFiLCBzZXRBY3RpdmVUYWJdID0gdXNlU3RhdGU8c3RyaW5nPihcIm5hdi1ob21lXCIpO1xuICBjb25zdCBbYWN0aXZlTWVudSwgc2V0QWN0aXZlTWVudV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiaG9tZVwiKTtcbiAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIE1FTlUgREFUQVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25zdCBtYWluTWVudUl0ZW1zOiBNZW51SXRlbVR5cGVbXSA9IFtcbiAgICB7IGlkOiBcImFjY291bnRcIiwgbGFiZWw6IFwiQWNjb3VudFwiLCBpY29uOiBcIi9hc3NldHMvYWRtaW51dGlsL2ljb25zL21hbGUtdXNlci5naWZcIiwgYmFkZ2U6IHVuZGVmaW5lZCB9LFxuICAgIHsgaWQ6IFwiaG9tZVwiLCBsYWJlbDogXCJIb21lXCIsIGljb246IFwiL2Fzc2V0cy9hZG1pbnV0aWwvaWNvbnMvaG9tZS5naWZcIiwgYmFkZ2U6IDQgfSxcbiAgICB7IGlkOiBcInRhc2tcIiwgbGFiZWw6IFwiVGFza1wiLCBpY29uOiBcIi9hc3NldHMvYWRtaW51dGlsL2ljb25zL2NoZWNrZWQtY2hlY2tib3guZ2lmXCIgfSxcbiAgICB7IGlkOiBcImFjdGl2aXR5XCIsIGxhYmVsOiBcIkFjdGl2aXR5XCIsIGljb246IFwiL2Fzc2V0cy9hZG1pbnV0aWwvaWNvbnMvYWN0aXZpdHkuZ2lmXCIgfSxcbiAgICB7IGlkOiBcInVzZXJzXCIsIGxhYmVsOiBcIlVzZXJzXCIsIGljb246IFwiL2Fzc2V0cy9hZG1pbnV0aWwvaWNvbnMvdXNlci5naWZcIiB9LFxuICAgIHsgaWQ6IFwibm90aWZpY2F0aW9uc1wiLCBsYWJlbDogXCJOb3RpZmljYXRpb25zXCIsIGljb246IFwiL2Fzc2V0cy9hZG1pbnV0aWwvaWNvbnMvbm90aWZpY2F0aW9uLmdpZlwiLCBiYWRnZTogOSB9LFxuICBdO1xuXG4gIGNvbnN0IHNldHRpbmdzTWVudUl0ZW1zOiBNZW51SXRlbVR5cGVbXSA9IFtcbiAgICB7IGlkOiBcInNldHRpbmdzXCIsIGxhYmVsOiBcIkFjY291bnRcIiwgaWNvbjogXCIvYXNzZXRzL2FkbWludXRpbC9pY29ucy9zZXR0aW5ncy5naWZcIiB9LFxuICAgIHsgaWQ6IFwic3VwcG9ydFwiLCBsYWJlbDogXCJOb3RpZmljYXRpb25zXCIsIGljb246IFwiL2Fzc2V0cy9hZG1pbnV0aWwvaWNvbnMvc3VwcG9ydC0zMi5wbmdcIiB9LFxuICBdO1xuXG4gIGNvbnN0IGdyb3VwTWVudUl0ZW1zOiBNZW51SXRlbVR5cGVbXSA9IFtcbiAgICB7IGlkOiBcImxpbmtlZGluXCIsIGxhYmVsOiBcIkxpbmtlZGluXCIsIGljb246IFwiL2Fzc2V0cy9hZG1pbnV0aWwvaWNvbnMvbGlua2VkaW4tNDgucG5nXCIgfSxcbiAgICB7IGlkOiBcInR3aXR0ZXJcIiwgbGFiZWw6IFwiVHdpdHRlclwiLCBpY29uOiBcIi9hc3NldHMvYWRtaW51dGlsL2ljb25zL3R3aXR0ZXItNDgucG5nXCIgfSxcbiAgICB7IGlkOiBcImZhY2Vib29rXCIsIGxhYmVsOiBcIkZhY2Vib29rXCIsIGljb246IFwiL2Fzc2V0cy9hZG1pbnV0aWwvaWNvbnMvZmFjZWJvb2stNDgucG5nXCIgfSxcbiAgICB7IGlkOiBcImluc3RhZ3JhbVwiLCBsYWJlbDogXCJJbnN0YWdyYW1cIiwgaWNvbjogXCIvYXNzZXRzL2FkbWludXRpbC9pY29ucy9pbnN0YWdyYW0tNDgucG5nXCIgfSxcbiAgXTtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBUQVNLU1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25zdCB0YXNrczogVGFza0l0ZW1bXSA9IFtcbiAgICB7XG4gICAgICBpZDogXCIxXCIsXG4gICAgICB0aXRsZTogXCJDbGllbnQgUmV2aWV3IExvZ2luXCIsXG4gICAgICBtb2R1bGU6IFwiTG9naW4gTW9kdWxlXCIsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJQbGFjZWhvbGRlciBjb250ZW50IGZvciB0ZXN0aW5nIHRoZSBVSSB3aXRoIGxvbmcgdGV4dCBkZXNjcmliaW5nIHRoZSBtb2R1bGUuXCIsXG4gICAgICB0aW1lOiBcIlRvZGF5IDEwOjAwIFBNXCIsXG4gICAgICBhc3NpZ25lZFVzZXJzOiBbXG4gICAgICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0OTQ3OTAxMDg3NTUtMjYxNmI2MTJiNzg2XCIsXG4gICAgICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MDcwMDMyMTExNjktMGExZGQ3MjI4ZjJkXCIsXG4gICAgICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0Mzg3NjE2ODEwMzMtNjQ2MWZmYWQ4ZDgwXCIsXG4gICAgICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0NzIwOTk2NDU3ODUtNTY1OGFiZjRmZjRlXCIsXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IFwiMlwiLFxuICAgICAgdGl0bGU6IFwiQ2xpZW50IFJldmlldyBTaWdudXBcIixcbiAgICAgIG1vZHVsZTogXCJTaWduVXAgTW9kdWxlXCIsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJNb3JlIHBsYWNlaG9sZGVyIGNvbnRlbnQgdG8gY2hlY2sgaG93IHRoZSBjYXJkIGJlaGF2ZXMgd2l0aCBtdWx0aXBsZSB1c2Vycy5cIixcbiAgICAgIHRpbWU6IFwiVG9kYXkgMTE6MDAgUE1cIixcbiAgICAgIGFzc2lnbmVkVXNlcnM6IFtcbiAgICAgICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUwMDY0ODc2Nzc5MS0wMGRjYzk5NGE0M2VcIixcbiAgICAgICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUwNzAwMzIxMTE2OS0wYTFkZDcyMjhmMmRcIixcbiAgICAgIF0sXG4gICAgfSxcbiAgXTtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBVU0VSIFBST0ZJTEVcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29uc3QgdXNlclByb2ZpbGU6IFVzZXJQcm9maWxlVHlwZSA9IHtcbiAgICBuYW1lOiBcIkFtaXQgTW9oYW50YVwiLFxuICAgIGVtYWlsOiBcImFtaXRtb2hhbnRhQGdtYWlsLmNvbVwiLFxuICAgIGF2YXRhcjpcbiAgICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1ODIyMzM0NzkzNjYtNmQzOGJjMzkwYTA4XCIsXG4gIH07XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gRVZFTlQgSEFORExFUlNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29uc3QgaGFuZGxlTWVudUNsaWNrID0gKG1lbnVJZDogc3RyaW5nKSA9PiB7XG4gICAgc2V0QWN0aXZlTWVudShtZW51SWQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNlYXJjaENoYW5nZSA9IChxdWVyeTogc3RyaW5nKSA9PiB7XG4gICAgc2V0U2VhcmNoUXVlcnkocXVlcnkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVRhc2tDb21wbGV0ZSA9ICh0YXNrSWQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiVGFzayBDb21wbGV0ZWQ6XCIsIHRhc2tJZCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTmV3VGFzayA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkNyZWF0ZSBuZXcgdGFza1wiKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRtaW4tZGFzaGJvYXJkXCI+XG4gICAgICB7LyogVE9QIE5BVkJBUiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxOYXZiYXIgYWN0aXZlVGFiPXthY3RpdmVUYWJ9IG9uVGFiQ2hhbmdlPXtzZXRBY3RpdmVUYWJ9IC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblxuICAgICAgICB7LyogTEVGVCBTSURFQkFSICovfVxuICAgICAgICA8U2lkZWJhclxuICAgICAgICAgIG1haW5NZW51SXRlbXM9e21haW5NZW51SXRlbXN9XG4gICAgICAgICAgc2V0dGluZ3NNZW51SXRlbXM9e3NldHRpbmdzTWVudUl0ZW1zfVxuICAgICAgICAgIGdyb3VwTWVudUl0ZW1zPXtncm91cE1lbnVJdGVtc31cbiAgICAgICAgICB1c2VyUHJvZmlsZT17dXNlclByb2ZpbGV9XG4gICAgICAgICAgc2VhcmNoUXVlcnk9e3NlYXJjaFF1ZXJ5fVxuICAgICAgICAgIGFjdGl2ZU1lbnU9e2FjdGl2ZU1lbnV9XG4gICAgICAgICAgb25NZW51Q2xpY2s9e2hhbmRsZU1lbnVDbGlja31cbiAgICAgICAgICBvblNlYXJjaENoYW5nZT17aGFuZGxlU2VhcmNoQ2hhbmdlfVxuICAgICAgICAvPlxuXG4gICAgICAgIHsvKiBNQUlOIENPTlRFTlQgKi99XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtNyBzY3JvbGxCYXJcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgb3ZlcmZsb3c6IFwiYXV0b1wiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjkwMHB4XCIsXG4gICAgICAgICAgICBsZWZ0OiBcIjE2LjUlXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxEYXNoYm9hcmRDb250ZW50IC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBSSUdIVCBTSURFQkFSICovfVxuICAgICAgICA8UmlnaHRTaWRlYmFyXG4gICAgICAgICAgYWN0aXZlVGFiPXthY3RpdmVUYWJ9XG4gICAgICAgICAgdGFza3M9e3Rhc2tzfVxuICAgICAgICAgIG9uVGFiQ2hhbmdlPXtzZXRBY3RpdmVUYWJ9XG4gICAgICAgICAgb25UYXNrQ29tcGxldGU9e2hhbmRsZVRhc2tDb21wbGV0ZX1cbiAgICAgICAgICBvbk5ld1Rhc2s9e2hhbmRsZU5ld1Rhc2t9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkbWluRGFzaGJvYXJkO1xuIl0sImZpbGUiOiIvVXNlcnMvYW1pdGt1bWFybW9oYW50YS9EZXNrdG9wL0luZGlhTWFya2V0UGxhY2UvZnJvbnRlbmQvc3JjL3BvcnRhbHMvYWRtaW4vQWRtaW5EYXNoYm9hcmQudHN4In0=