import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { backgroundMap } from "./backgrounds";

interface RegistrationProps {
  userType?: "consumer" | "admin" | "enterprise";
}

const Registration: React.FC<RegistrationProps> = ({ userType = "consumer" }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine user type dynamically from URL
  let currentType: "consumer" | "admin" | "enterprise" = userType;
  if (location.pathname.includes("admin")) currentType = "admin";
  else if (location.pathname.includes("enterprise")) currentType = "enterprise";
  else currentType = "consumer";

  // Background images
//   const backgroundMap: Record<string, string> = {
//     consumer:
//       "url('https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1950&q=80')",
//     admin:
//       "url('https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1950&q=80')",
//     enterprise:
//       "url('https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1950&q=80')",
//   };

  const handleLoginClick = () => {
    if (currentType === "consumer") navigate("/login");
    else navigate(`/login/${currentType}`);
  };

  return (
    <div
      style={{
        backgroundImage: backgroundMap[userType],
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        position: "relative",
      }}
    >

      {/* Blurred Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(255, 255, 255, 0.6)",
          backdropFilter: "blur(8px)",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Navbar */}
        <nav className="navbar navbar-brand">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                src="http://clipart-library.com/images_k/chef-hat-transparent-png/chef-hat-transparent-png-12.png"
                width="30"
                height="30"
                alt="Chef Hat"
                className="d-inline-block align-top"
              />
              Indian Market Place
            </a>
          </div>
        </nav>

        {/* Registration Container */}
        <div className="container" style={{ marginTop: "2%", marginBottom: "5%" }}>
          <div className="row justify-content-center align-items-center">
            {/* Left Section */}
            <div className="col-lg-4 col-md-5 col-sm-10 col-12 d-flex flex-column align-items-center justify-content-center mb-4 mb-lg-0 text-center">
              <h1
                className="fw-bold"
                style={{
                  opacity: 0.3,
                  textTransform: "uppercase",
                  fontSize: "clamp(1.8rem, 6vw, 3.5rem)",
                  margin: 0,
                  lineHeight: 1.1,
                }}
              >
                {currentType.toUpperCase()}
              </h1>
              <h1
                className="fw-bold"
                style={{
                  opacity: 0.3,
                  textTransform: "uppercase",
                  fontSize: "clamp(1.8rem, 6vw, 3.5rem)",
                  margin: 0,
                  lineHeight: 1.1,
                }}
              >
                Registration
              </h1>
            </div>

            {/* Right Section (Form) */}
            <div className="col-lg-6 col-md-7 col-sm-10 col-12 d-flex justify-content-center">
              <form className="px-3 py-4 my-4 w-100" style={{ maxWidth: "95%" }}>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email"/>
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input type="password" className="form-control" id="password" placeholder="Enter your password" />
                </div>

                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    placeholder="Enter your password"
                  />
                </div>

                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="agree" />
                  <label className="form-check-label" htmlFor="agree">
                    Agree to terms
                  </label>
                </div>

                <div className="d-flex gap-2 justify-content-center">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={handleLoginClick}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
