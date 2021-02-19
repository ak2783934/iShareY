import React from "react";

export default function WorkCard(props) {
  return (
    <div className={"work-card"}>
      <div className={"card-img"}>
        <img src={props.photo} alt="card-img" />
      </div>
      <div className={"card-msg"}>
        <p className={"work-card-msg"}>{props.msg}</p>
      </div>
    </div>
  );
}
