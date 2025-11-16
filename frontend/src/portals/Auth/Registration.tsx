import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import backgroundMap from "../../components/Auth/backgrounds";
import "../../components/Auth/Auth.css";


interface RegistrationProps {
  userType?: "consumer" | "admin" | "enterprise";
}

const Registration: React.FC<RegistrationProps> = ({ userType = "consumer" }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine user type dynamically from URL or fallback to prop
  let currentType: "consumer" | "admin" | "enterprise" = userType;
  if (location.pathname.includes("admin")) currentType = "admin";
  else if (location.pathname.includes("enterprise")) currentType = "enterprise";
  else currentType = "consumer";

  const displayRole =
    currentType === "consumer"
      ? "USER"
      : currentType === "admin"
      ? "ADMIN"
      : "ENTERPRISE";

  // ✅ Navigation to login page based on user type
  const handleBackToLogin = () => {
    if (currentType === "consumer") navigate("/login");
    else navigate(`/login/${currentType}`);
  };

  return (
    <div
      className="auth-page"
      style={{
        backgroundImage: `url(${backgroundMap[currentType]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="auth-overlay" />

      <div className="auth-content">
        {/* LEFT SIDE */}
        <div className="auth-left">
          <div className="brand">
            <img
              src="http://clipart-library.com/images_k/chef-hat-transparent-png/chef-hat-transparent-png-12.png"
              alt="Logo"
            />
            <h1>Indian Market Place</h1>
          </div>
          <h2>{displayRole} REGISTRATION</h2>
          <p>
            Join the Indian Market Place community to explore, connect, and grow
            your business. Discover suppliers, vendors, and partners across
            multiple categories — from raw materials to finished goods.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="auth-right">
          <div className="auth-card">
            <h3>Create Account</h3>
            <form>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your full name" required />
              </div>

              <div className="form-group">
                <label>Email address</label>
                <input type="email" placeholder="Enter your email" required />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder="Enter your password" required />
              </div>

              <button type="submit" className="btn-primary">
                Register
              </button>

              {/* ✅ Dynamic navigation back to login */}
              <button
                type="button"
                className="btn-secondary"
                onClick={handleBackToLogin}
              >
                Back to Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
