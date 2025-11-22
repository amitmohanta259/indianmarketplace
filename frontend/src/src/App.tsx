import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./portals/Auth/Login";
import Registration from "./portals/Auth/Registration";
import AdminDashboard from "./portals/admin/AdminDashboard";
import { AuthProvider } from "./context/AuthContext";


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login userType="consumer" />} />
        <Route path="/login/admin" element={<Login userType="admin" />} />
        <Route path="/login/enterprise" element={<Login userType="enterprise" />} />

        <Route path="/registration" element={<Registration userType="consumer" />} />
        <Route path="/registration/admin" element={<Registration userType="admin" />} />
        <Route path="/registration/enterprise" element={<Registration userType="enterprise" />} />


        {/* ADMIN DASHBOARD */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} /> {/* ⬅️ ADD THIS */}
      </Routes>
    </Router>
  );
};

export default App;
