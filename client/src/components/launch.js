import React, { Fragment } from "react";
import "../App.css";
import { Redirect } from "react-router-dom";
import First from "../homecomponent/home";
import Donate from "../homecomponent/donate";
import Work from "../homecomponent/work";
import { isAuthenticated } from "../backfront/connection";

export default function Launch() {
  const doRedirect = () => {
    if (isAuthenticated() && isAuthenticated().user.isAdmin) {
      console.log("true " + isAuthenticated().user.isAdmin);
      return <Redirect from="/" to="/admin/dashboard" />;
    }
    if (isAuthenticated()) {
      console.log(isAuthenticated().user.isAdmin);
      return <Redirect from="/" to="/ngo/dashboard" />;
    }
  };

  const page = () => {
    return (
      <Fragment>
        <div id={"home"} className={"home"}>
          <First />
        </div>
        <div id={"donate"} className={"donate"}>
          <Donate />
        </div>
        <div id={"work"} className={"work"}>
          <Work />
        </div>
      </Fragment>
    );
  };

  return (
    <div>
      {page()}
      {doRedirect()}
    </div>
  );
}
