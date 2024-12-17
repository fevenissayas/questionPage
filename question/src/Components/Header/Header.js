import React, { useContext } from "react";
import "./header.css";
import Logo from "../../assets/Images/evangadi-logo-home.png";
import { UserContext } from "../../context/UserContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Header = () => {
  const [userData, setUserData] = useContext(UserContext);

  // const logout = () => {
  //   setUserData({
  //     token: undefined,
  //     user: undefined,
  //   });
  //   localStorage.setItem("auth-token", "");
  // };

  return (
    <header className="navbar-header">
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={Logo} alt="Evangadi Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon  icon_menu"></span>
          </button>

          <div
            className="collapse navbar-collapse bg-orange"
            id="navbarCollapse"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a data-scroll="" className="nav-link section-scroll" href="/">
                  Home
                </a>
              </li>
              <li>
                <div className="connect-block">
                  <a
                    className="lnk-toggler btn btn-blue"
                    data-panel=".panel-login"
                    href="/login"
                    // onClick={logout}
                  >
                    {userData.user ? `Log Out` : `LogIn`}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
