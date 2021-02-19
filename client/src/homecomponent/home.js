import React, { useState } from "react";
import { Link } from "react-router-dom";

import Nav from "../constcomponent/navbar";

import { signup } from "../backfront/connection";

export default function First() {
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
      console.log("Please provide all the details");
    }
    signup({ name, email, password, about })
      .then((data) => {
        if (data === false) {
          console.log("Couldn't signup from home!");
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
      <div className={"hompage-box"}>
        <div className={"signup-header"}>SignUp as NGO</div>
        <div className={"signup-as-ngo"}>
          <form action="">
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange("name")}
              className={"name-input-home"}
              value={name}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange("email")}
              className={"email-input-home"}
              value={email}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange("password")}
              className={"password-input-home"}
              value={password}
            />
            <div>
              <textarea
                name="about"
                placeholder="About"
                onChange={handleChange("about")}
                className={"text-input-home"}
                value={about}
              />
            </div>
            <button type="submit" onClick={onSubmit} class="submit-button-home">
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
  return (
    <div className={"front-page-home"}>
      <Nav />
      {signUpForm()}
    </div>
  );
}
