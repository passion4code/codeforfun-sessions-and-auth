import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../utils/customHooks";

function Header() {
  const [state] = useAuth();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        React Sessions Demo
      </Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            {state.isLoggedIn ? (
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
            ) : (
              <Link className="nav-link" to="/login">
                Login
              </Link>
            )}
          </li>
          {state.isLoggedIn ? (
            <li>
              <Link className="nav-link" to="/logout">
                Logout
              </Link>
            </li>
          ) : null}
        </ul>
      </div>
    </nav>
  );
}
export default Header;
