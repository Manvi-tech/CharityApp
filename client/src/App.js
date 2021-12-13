import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  HashRouter,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Causes from "./Components/Causes";
import Landing from "./Components/Landing";
import SignIn from "./Components/AuthenticationPages/SignIn";
import { Provider } from "react-redux";
import { loadUser } from "./action/Auth";
import store from "./store";
import Register from "./Components/AuthenticationPages/SignUp";
import Header from "./Components/Header";
import setAuthToken from "./tokenSetter/SetAuthToken";
if (localStorage.Charitytoken) {
  console.log("token", localStorage.Charitytoken);
  setAuthToken(localStorage.Charitytoken);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Landing />}></Route>
            <Route
              exact
              path="/causes"
              element={
                <Causes
                  isAuthenitcated={localStorage.Charitytoken ? true : false}
                />
              }
            ></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/signin" element={<SignIn />}></Route>
            <Route exact path="/signup" element={<Register />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
