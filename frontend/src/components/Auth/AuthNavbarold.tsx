import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AuthNavbar: React.FC = () => {
  return (
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
  );
};

export default AuthNavbar;
