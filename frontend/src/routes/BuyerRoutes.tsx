// src/routes/BuyerRoutes.tsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../portals/buyer/pages/Home";
import ProductList from "../portals/buyer/pages/ProductList";
import ProductDetails from "../portals/buyer/pages/ProductDetails";
import Cart from "../portals/buyer/pages/Cart";
import Checkout from "../portals/buyer/pages/Checkout";
import Orders from "../portals/buyer/pages/Orders";
import { useAuth } from "../context/AuthContext";

const BuyerRoutes: React.FC = () => {
  const { token } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="products" element={<ProductList />} />
      <Route path="products/:id" element={<ProductDetails />} />
      <Route path="cart" element={<Cart />} />

      {/* Protected purchase routes */}
      <Route
        path="checkout"
        element={token ? <Checkout /> : <Navigate to="/login" replace />}
      />
      <Route
        path="orders"
        element={token ? <Orders /> : <Navigate to="/login" replace />}
      />
    </Routes>
  );
};

export default BuyerRoutes;
