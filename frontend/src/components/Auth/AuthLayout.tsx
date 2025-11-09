// src/components/Auth/AuthLayout.tsx
import React, { ReactNode } from "react";
import AuthNavbar from "./AuthNavbar";
import { backgroundMap } from "./backgrounds";

interface Props {
  userType?: "consumer" | "admin" | "enterprise";
  children: ReactNode;
}

const AuthLayout: React.FC<Props> = ({ userType = "consumer", children }) => {
  const bg = backgroundMap[userType];

  return (
    <div style={{
      backgroundImage: bg,
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh",
      position: "relative"
    }}>
      {/* blur overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "rgba(255,255,255,0.7)",
        backdropFilter: "blur(8px)",
        zIndex: 0
      }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        <AuthNavbar />
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
