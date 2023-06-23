import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";

import Welcome from "./Welcome.jsx";
import NavBar from "./Navbar.jsx";
import Register from "./Register.jsx";
import Login from "./Login.jsx";
import ForgotPassword from "./ForgotPassword.jsx";

import { useAuthContext } from "../context/user";

export default () => {
  const { setUser } = useAuthContext();

  useEffect(() => {
    axios
      .get("/api/me")
      .then((res) => res.data)
      .then((user) => {
        setUser(user);
      })
      .catch(({ response }) => {
        console.log(response.statusText);
      });
  }, []);

  return (
    <div className="">
      <NavBar />
      <div className="">
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
};
