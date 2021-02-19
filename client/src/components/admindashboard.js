import React from "react";
import Nav from "../constcomponent/navbar";
import Foot from "../constcomponent/footer";
import { isAuthenticated } from "../backfront/connection";
import { Link } from "react-router-dom";
export default function AdminDashboard() {
  return (
    <div className={"front-page-home-team"}>
      <Nav />
      <div className={"admin-dashboard"}>
        <div className={"admin-dashboard-header"}>Admin Dashboard</div>
        <div className={"admin-dashboard-inner"}>
          {/* TODO: Here we have to devide the main area into two parts now with a st line */}

          <div className={"admin-dashboard-inner-left"}>
            <div>
              <Link to="/adminmanagework">Manage Works</Link>
            </div>
            <div>
              <Link to="/adminmanagetask">Manage Tasks</Link>
            </div>
            <div>
              <Link to="/adminmanagemsg">Manage Msgs</Link>
            </div>
          </div>
          <div className={"admin-dashboard-inner-right"}>
            <h4>Welcome Back {isAuthenticated().user.username}</h4>
            <h5>This is your dashboard </h5>
            <h5>Here you can add, delete, and manage </h5>
            <h5>your tasks, works, msgs here. </h5>
          </div>
        </div>
      </div>
      <Foot />
    </div>
  );
}
