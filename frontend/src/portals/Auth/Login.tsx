import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import backgroundMap from "../assets/backgrounds";
import "../styles/Auth.css";


interface LoginProps {
  userType?: "consumer" | "admin" | "enterprise";
}

const Login: React.FC<LoginProps> = ({ userType = "consumer" }) => {
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

  // Navigate to registration based on type
  const handleRegisterClick = () => {
    if (currentType === "consumer") navigate("/registration");
    else navigate(`/registration/${currentType}`);
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
          <h2>{displayRole} LOGIN</h2>
          <p>
            Indian Market Place is a unified platform where you can discover everything —
            from raw materials to finished goods. Buy, sell, and connect with trusted
            suppliers and vendors on one marketplace.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="auth-right">
          <div className="auth-card">
            <h3>Login</h3>
            <form>
              <div className="form-group">
                <label> Username </label>
                <input type="text" placeholder="Enter your username" required />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder="Enter your password" required />
              </div>

              <div className="remember">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>

              <button type="submit" className="btn-primary">
                Login
              </button>

              <button
                type="button"
                className="btn-secondary"
                onClick={handleRegisterClick}
              >
                Registration
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
