import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../action/Auth";
import { useNavigate } from "react-router-dom";
function Header() {
  let navigate = useNavigate();
  const AuthData = useSelector((state) => state.AuthData);
  const { loading, isAuthenticated, user, error } = AuthData;

  const dispatch = useDispatch();
  const Logout = async () => {
    await dispatch(logout());
    navigate("/signin", { replace: true });
  };

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
              {!isAuthenticated ? (
                <li class="nav-item">
                  <Link to="/signin" class="nav-link">
                    Login
                  </Link>
                </li>
              ) : user ? (
                <div class="dropdown show nav-item mt-1">
                  <a
                    class="btn btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {user.name}
                  </a>

                  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a onClick={() => Logout()} class="dropdown-item" href="#">
                      logout
                    </a>
                  </div>
                </div>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
