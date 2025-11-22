// src/routes/AdminRoutes.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../portals/admin/pages/Dashboard";
import UserManagement from "../portals/admin/pages/UserManagement";
import TenantManagement from "../portals/admin/pages/TenantManagement";
import ProductApproval from "../portals/admin/pages/ProductApproval";
import Reports from "../portals/admin/pages/Reports";

const AdminRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="users" element={<UserManagement />} />
      <Route path="tenants" element={<TenantManagement />} />
      <Route path="product-approval" element={<ProductApproval />} />
      <Route path="reports" element={<Reports />} />
    </Routes>
  );
};

export default AdminRoutes; // ✅ Must be default export
