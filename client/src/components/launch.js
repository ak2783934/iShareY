import React from "react";
import "../App.css";
import Home from "../homecomponent/home";
import Donate from "../homecomponent/donate";
import Work from "../homecomponent/work";

export default function Launch() {
  return (
    <div>
      <div id={"home"} className={"home"}>
        <Home />
      </div>
      <div id={"donate"} className={"donate"}>
        <Donate />
      </div>
      <div id={"work"} className={"work"}>
        <Work />
      </div>
    </div>
  );
}
