import React, { useState } from "react";

import Nav from "../constcomponent/navbar";
import Foot from "../constcomponent/footer";

import { authenticate, isAuthenticated, signin } from "../backfront/connection";
import { Redirect } from "react-router-dom";

export default function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: false,
    loading: false,
    didRedirect: false,
  });
  const { email, password, error, didRedirect } = values;

  const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({
      ...values,
      [name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });

    signin({ email, password })
      .then((data) => {
        console.log("Data recieved at login " + data);
        if (data === false) {
          console.log("Couldn't signIn from login");
          setValues({
            ...values,
            error: true,
            loading: false,
          });
        } else {
          authenticate(data, () => {
            console.log("SignIn successfull from login");
            setValues({
              ...values,
              error: false,
              didRedirect: true,
            });
          });
        }
      })
      .catch((err) => {
        console.log("signin failed in login!");
      });
  };

  const errorMsg = () => {
    if (error === true) {
      return <div>Try another password/email</div>;
    }
  };
  const signInForm = () => {
    return (
      <div className={"login-main-page"}>
        <div className={"login-header"}>Login</div>
        <div className={"login-form"}>
          <form action="">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={"email-input-login"}
              onChange={handleChange("email")}
              value={email}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className={"password-input-login"}
              onChange={handleChange("password")}
              value={password}
            />
            <button
              type="submit"
              onClick={onSubmit}
              class="submit-button-login"
            >
              Login
            </button>
            <div className={"msg-display"}>{errorMsg()}</div>
          </form>
        </div>
      </div>
    );
  };

  const doRedirect = () => {
    if (isAuthenticated() && isAuthenticated().user.isAdmin) {
      console.log("true " + isAuthenticated().user.isAdmin);
      return <Redirect from="/login" to="/admin/dashboard" />;
    }
    if (isAuthenticated()) {
      console.log(isAuthenticated().user.isAdmin);
      return <Redirect from="/login" to="/ngo/dashboard" />;
    }

    if (didRedirect) {
      if (user && user.isAdmin) {
        //?redirect to "/admin/dashboard" pag
        return <Redirect to="/admin/dashboard" />;
      } else {
        //?redirect to the ngo msg box there!!!!
        return <Redirect to="/ngo/dashboard" />;
      }
    }
  };
  return (
    <div className={"front-page-home-team"}>
      <Nav />
      {/* {loadingMessage()} */}
      {signInForm()}
      {doRedirect()}
      <Foot />
    </div>
  );
}
