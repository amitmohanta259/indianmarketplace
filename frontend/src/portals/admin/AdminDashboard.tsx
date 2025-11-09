import React from "react";
import { useAuth } from "../../context/AuthContext";

const AdminDashboard: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div className="container mt-5 text-center">
      <h2>Welcome, {user?.email || "Admin"}</h2>
      <p>This is your secure admin dashboard.</p>
      <button className="btn btn-danger mt-3" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default AdminDashboard;
