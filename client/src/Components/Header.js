import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
function Header() {
  const AuthData = useSelector((state) => state.AuthData);
  const { loading, isAuthenticated, user, error } = AuthData;
  console.log("user data", user);
  return loading ? (
    <div>loading</div>
  ) : (
    <div>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <Link
            class="navbar-brand"
            to="/"
            style={{ color: "white", fontSize: "25px" }}
          >
            Charity Application
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse d-flex"
            id="navbarNavDropdown"
            style={{ marginLeft: "600px" }}
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <Link to="/about" class="nav-link">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/causes" class="nav-link">
                  Causes
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/signin" class="nav-link">
                  {!isAuthenticated ? "Login" : user ? user.name : ""}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
