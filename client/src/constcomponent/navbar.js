import React, { Fragment } from "react";
import { Link } from "react-router-dom";
//! Here we will be inserting the navbar thing bro!, Now how
//! will you design it so that it will be in the top only, means it will be on/above the image
import { signout, isAuthenticated } from "../backfront/connection";
export default function Nav() {
  return (
    <div className={"navbar"}>
      <img
        className={"navBar"}
        src="https://res.cloudinary.com/dlb1ct3qc/image/upload/v1613208112/iSharey/isharey_logo_1_wihohh.svg"
        alt="iShareY"
      />

      {/* !Here we are few cases 
      1) not signed in 
      ? we need to see each and everything this time here
      2) signed but not admin
      ? we need to see team, signout only
      3) signed and admin 
      ? we need to see team, signout only
       */}
      {!isAuthenticated() && (
        <Fragment>
          <Link className={"homeBar"} to="/">
            Home
          </Link>
          <Link className={"teamBar"} to="/team">
            Team
          </Link>
          <Link className={"loginBar"} to="/login">
            Login
          </Link>
          <Link className={"signupBar"} to="/signup">
            SignUp
          </Link>
        </Fragment>
      )}
      {/* When user is admin */}
      {isAuthenticated() && isAuthenticated().user.isAdmin && (
        <Fragment>
          <Link className={"teamBar"} to="/team">
            Team
          </Link>
          <Link className={"loginBar"} to="/admin/dashboard">
            Dashboard
          </Link>
          <Link
            className={"signupBar"}
            onClick={() => {
              signout();
            }}
            to="/"
          >
            SignOut
          </Link>
        </Fragment>
      )}
      {/* when user is ngo */}
      {isAuthenticated() && !isAuthenticated().user.isAdmin && (
        <Fragment>
          <Link className={"teamBar"} to="/team">
            Team
          </Link>
          <Link className={"loginBar"} to="/ngo/dashboard">
            Dashboard
          </Link>
          <Link
            className={"signupBar"}
            onClick={() => {
              signout();
            }}
            to="/"
          >
            SignOut
          </Link>
        </Fragment>
      )}
    </div>
  );
}
