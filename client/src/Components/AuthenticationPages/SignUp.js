import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import RightPic from "../../assests/images/charity.jpeg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { register, signin } from "../../action/Auth";
const SignUp = (props) => {
  let navigate = useNavigate();
  const [NotMatch, setNotmatch] = useState(false);
  const [State, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const AuthData = useSelector((state) => state.AuthData);
  const { loading, user, isAuthenticated, error } = AuthData;

  console.log(props);
  const dispatch = useDispatch();

  const SubmitHandler = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = State;

    if (password != confirmPassword) {
      setNotmatch(true);
    } else {
      dispatch(register(name, email, password));
      navigate("/", { replace: true });
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/getUser", { replace: true });
    }

    return () => {
      //
    };
  }, [isAuthenticated]);

  return (
    <div className="page-content">
      <div className="form-v2-content">
        <div className="form-right">
          <form
            onSubmit={SubmitHandler}
            className="form-detail"
            action="#"
            method="post"
            id="myform"
          >
            <h2>
              Sign UP
              <Link to="/signin" style={{ textDecoration: "none" }}>
                <p>Don't have an account?</p>
              </Link>
            </h2>
            <div className="form-row">
              <div className="text-danger">{error && error[0].message}</div>
              <label for="full-name">Full Name</label>
              <input
                type="text"
                name="name"
                id="full_name"
                className="input-text"
                placeholder="Ivan Pavlo"
                value={State.name}
                onChange={(e) => setState({ ...State, name: e.target.value })}
              />
            </div>

            <div className="form-row">
              <label for="your_email">Your Email</label>
              <input
                type="text"
                name="email"
                id="your_email"
                className="input-text"
                placeholder="Enter you Email"
                required
                pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
                value={State.email}
                onChange={(e) => setState({ ...State, email: e.target.value })}
              />
            </div>
            <div className="form-row">
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="input-text"
                placeholder="Enter you password"
                required
                value={State.password}
                onChange={(e) =>
                  setState({ ...State, password: e.target.value })
                }
              />
            </div>
            <div className="form-row">
              <label for="comfirm-password">Repeat Password</label>
              <input
                type="password"
                name="confirm_password"
                id="confirm_password"
                placeholder="Enter you password"
                className="input-text"
                value={State.confirmPassword}
                onChange={(e) =>
                  setState({ ...State, confirmPassword: e.target.value })
                }
                required
              />
              <span className="text-danger">
                {NotMatch && "password do not match"}
              </span>
            </div>

            <div className="form-row-last">
              <input type="submit" className="register mb-2" value="Sign Up" />
              <span style={{ fontSize: "14px" }}>
                Already have a account ?<Link to="/signin"> Login</Link>
              </span>
            </div>
          </form>
        </div>
        <div className="form-left">
          <img src={RightPic} alt="form" width="550px" height="640px" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
