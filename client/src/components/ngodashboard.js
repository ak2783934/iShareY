import React, { useState } from "react";

//TODO: Here one thing can be done is that we don't ask for email and name again, just let him type the msg
//!this will make it lil more good
import Nav from "../constcomponent/navbar";
import Foot from "../constcomponent/footer";

import { isAuthenticated } from "../backfront/connection";
import { addmsg } from "../backfront/msgconnection";

export default function NgoDashboard() {
  const [values, setValues] = useState({
    name: isAuthenticated().user.username,
    email: isAuthenticated().user.email,
    msg: "",
    success: false,
  });
  const { name, email, msg, success } = values;

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
      name: isAuthenticated().user.username,
      email: isAuthenticated().user.email,
      success: false,
    });
    console.log(name + " " + email + " " + msg);
    addmsg({ name, email, msg })
      .then((data) => {
        if (data === false) {
          console.log("Msg not sent");
        } else {
          console.log("msg is sent now! form ngo dashboard");
          setValues({
            ...values,
            msg: "",
            success: true,
          });
        }
      })
      .catch((err) =>
        console.log("Error detected ngo dashboard, msg not sent")
      );
  };
  const successMsg = () => {
    if (success === true) {
      return <div className={"msg-sent-success"}>msg sent!</div>;
    }
  };
  return (
    <div className={"front-page-home-team"}>
      <Nav />
      <div className={"our-team"}>NGO Dashboard</div>
      <div className={"ngo-msg"}>
        <div className={"ngo-msg-input"}>
          <h3>Welcome Back : {isAuthenticated().user.username}</h3>
          <h5>Since this website is being built, You are supposed</h5>
          <h5>to leave your msg with your phone number</h5>
          <h5>Our team will soon contact you over phone</h5>

          {/* <h3 className={"ngo-msg-input-instruction"}>
            Please Type your msg here!
          </h3> */}
          <form action="">
            <textarea
              name="msg"
              placeholder="Message"
              className={"text-input-admin"}
              onChange={handleChange("msg")}
              value={msg}
            />

            <button type="submit" onClick={onSubmit} class="submit-button-ngo">
              Send
            </button>
            {successMsg()}
          </form>
        </div>
      </div>

      <Foot />
    </div>
  );
}
