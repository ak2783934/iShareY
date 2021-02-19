import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
//! Here we will be inserting the navbar thing bro!, Now how
//! will you design it so that it will be in the top only, means it will be on/above the image

import Nav from "../constcomponent/navbar";
import Foot from "../constcomponent/footer";
import { signup } from "../backfront/connection";
import { isAuthenticated } from "../backfront/connection";
export default function Signup() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    error: false,
    success: false,
  });

  const { name, email, password, about, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({
      ...values,
      [name]: event.target.value,
    });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setValues({
      ...values,
      success: false,
    });
    if (!name || !email || !password) {
      alert("Please all the details");
      return;
    }
    signup({ name, email, password, about })
      .then((data) => {
        if (data === false) {
          console.log("Couldn't signup from /signup!");
          setValues({
            ...values,
            error: true,
          });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            about: "",
            success: true,
            error: false,
            password: "",
          });
        }
      })
      .catch((err) => console.log("Error detected from home js " + err));
  };

  const signUpForm = () => {
    return (
      <div className={"signup-main-page"}>
        <div className={"login-header"}>Signup</div>
        <div className={"login-form"}>
          <form action="">
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange("name")}
              className={"name-input-signup"}
              value={name}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange("email")}
              className={"email-input-signup"}
              value={email}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange("password")}
              className={"password-input-signup"}
              value={password}
            />

            <textarea
              name="about"
              placeholder="About"
              className={"text-input-signup"}
              onChange={handleChange("about")}
              value={about}
            />

            <button
              type="submit"
              onClick={onSubmit}
              class="submit-button-signup"
            >
              Signup
            </button>
            <div className={"msg-display"}>
              {errorMsg()}
              {successMsg()}
            </div>
          </form>
        </div>
      </div>
    );
  };
  const errorMsg = () => {
    if (error === true) {
      return <div>Couldn't signup, user already exists</div>;
    }
  };
  const successMsg = () => {
    if (success === true) {
      return (
        <div>
          <div>SignUp successfull</div>
          <Link to="/login" className={"Login-here-msg"}>
            Login Here
          </Link>
        </div>
      );
    }
  };
  const doRedirect = () => {
    if (isAuthenticated() && isAuthenticated().user.isAdmin) {
      console.log("true " + isAuthenticated().user.isAdmin);
      return <Redirect from="/signup" to="/admin/dashboard" />;
    }
    if (isAuthenticated()) {
      console.log(isAuthenticated().user.isAdmin);
      return <Redirect from="/signup" to="/ngo/dashboard" />;
    }
  };
  return (
    <div className={"front-page-home-team"}>
      <Nav />
      {signUpForm()}
      {doRedirect()}
      <Foot />
    </div>
  );
}
