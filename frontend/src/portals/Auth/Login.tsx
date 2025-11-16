import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import api, { setTenantHeader } from "../../services/api";
import backgroundMap from "../assets/backgrounds";
import "../styles/Auth.css";

interface LoginProps {
  userType?: "consumer" | "admin" | "enterprise";
}

const Login: React.FC<LoginProps> = ({ userType = "consumer" }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Determine current user type based on URL
  let currentType: "consumer" | "admin" | "enterprise" = userType;
  if (location.pathname.includes("admin")) currentType = "admin";
  else if (location.pathname.includes("enterprise")) currentType = "enterprise";

  const displayRole =
    currentType === "consumer"
      ? "USER"
      : currentType === "admin"
      ? "ADMIN"
      : "ENTERPRISE";

  // 🔥 Set tenant header when component loads
  useEffect(() => {
    setTenantHeader("IndianMarketPlace"); // REQUIRED HEADER
  }, []);

  // ⬇️ LOGIN API FUNCTION
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await api.post(`/auth/login`, {
        username,
        password,
        type: currentType,
      });

      const { accessToken, refreshToken } = response.data;

      // Save tokens
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      // Redirect based on user type
      if (currentType === "admin") navigate("/admin/dashboard");
      else if (currentType === "enterprise") navigate("/enterprise/home");
      else navigate("/home");
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed. Try again.");
    }
  };

  const handleRegisterClick = () => {
    navigate(
      currentType === "consumer"
        ? "/registration"
        : `/registration/${currentType}`
    );
  };

  return (
    <div
      className="auth-page"
      style={{
        backgroundImage: `url(${backgroundMap[currentType]})`,
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
        </div>

        {/* RIGHT SIDE */}
        <div className="auth-right">
          <div className="auth-card">
            <h3>Login</h3>

            {error && <p className="error">{error}</p>}

            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label> Username </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
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
